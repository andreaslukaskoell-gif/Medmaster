import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import type { ComponentProps, ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { HelpCircle } from "lucide-react";
import type { Unterkapitel, SelfTestQuestion } from "@/data/bmsKapitel/types";
import DiagramSVG from "@/components/diagrams/DiagramSVG";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { extractKontrollfragen } from "@/utils/parseKontrollfragen";
import {
  processTextForSmartLinks,
  isKeywordLinkTitle,
  getKeywordLinkDescription,
  hasGlossaryTerm,
  type KeywordLinkEntry,
} from "@/data/glossary";
import { SmartLink } from "@/components/content/SmartLink";
import { GlossaryTerm } from "@/components/content/GlossaryTerm";
import {
  parseHinterfragMarkers,
  PLACEHOLDER_REGEX,
  type HinterfragBlock as HinterfragBlockType,
} from "@/utils/parseHinterfrag";
import { parseMedATAndSummary, type MedATSections } from "@/utils/parseMedATAndSummary";
import { splitMarkdownByH2 } from "@/utils/splitMarkdownByH2";
import { SectionTOC } from "./SectionTOC";

const MEDAT_SECTION_ORDER: { key: keyof MedATSections; label: string }[] = [
  { key: "zentral", label: "Zentral prüfungsrelevant" },
  { key: "vertiefend", label: "Ergänzend vertiefend" },
  { key: "haeufigeFragen", label: "Häufige Fragen" },
  { key: "fallen", label: "Typische Prüfungsfallen / Verwechslungen" },
  { key: "zahlen", label: "Prüfungsrelevante Zahlen/Fakten" },
];

/** Body content for MedAT-Fokus section. */
function MedATFocusBody({ sections }: { sections: MedATSections }) {
  const hasContent = MEDAT_SECTION_ORDER.some(({ key }) => sections[key]?.trim());
  if (!hasContent) return null;
  return (
    <div className="space-y-4">
      {MEDAT_SECTION_ORDER.map(({ key, label }) => {
        const value = sections[key as keyof MedATSections];
        if (!value?.trim()) return null;
        return (
          <div key={key} className="space-y-1.5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              {label}
            </h3>
            <div className="prose prose-slate dark:prose-invert prose-sm max-w-none text-[var(--text-primary)] leading-relaxed">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{value}</ReactMarkdown>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** Einzelne Stelle: Frage anzeigen, Antwort bei Klick/Hover enthüllen. */
function HinterfragBlock({
  question,
  answer,
  active,
}: {
  question: string;
  answer: string;
  active: boolean;
}) {
  const [revealed, setRevealed] = useState(false);
  if (!active) {
    return <span className="text-inherit">{answer}</span>;
  }
  const isRevealed = revealed;
  return (
    <span
      role="button"
      tabIndex={0}
      onMouseEnter={() => setRevealed(true)}
      onFocus={() => setRevealed(true)}
      onClick={() => setRevealed(true)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setRevealed(true);
        }
      }}
      className="inline-flex items-center gap-1 cursor-pointer select-none rounded px-1 -mx-1 hover:bg-[var(--accent)]/10 dark:hover:bg-[var(--accent)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50 focus:ring-offset-1 border-b-2 border-dashed border-[var(--accent)]/60 dark:border-[var(--accent)] text-[var(--accent)] dark:text-[var(--accent)]/30"
      title="Klicken oder Hover zum Enthüllen"
    >
      {isRevealed ? (
        <span className="font-medium text-[var(--text-primary)] border-0">{answer}</span>
      ) : (
        <>
          <HelpCircle className="w-4 h-4 shrink-0" aria-hidden />
          <span>{question}</span>
        </>
      )}
    </span>
  );
}

const SMART_LINK_SUBTLE_CLASS =
  "border-b border-dotted border-[var(--accent)]/60/60 dark:border-[var(--accent)]/50";

function getTextContent(children: ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(getTextContent).join("");
  if (
    children &&
    typeof children === "object" &&
    "props" in children &&
    (children as { props?: { children?: ReactNode } }).props?.children != null
  )
    return getTextContent((children as { props: { children: ReactNode } }).props.children);
  return "";
}

function buildMarkdownComponents(keywordLinkEntries?: KeywordLinkEntry[]) {
  void keywordLinkEntries; // reserved for future keyword tooltips
  return {
    strong: ({ children }: { children?: ReactNode }) => {
      const text = getTextContent(children ?? "").trim();
      if (text && hasGlossaryTerm(text)) return <GlossaryTerm term={text} />;
      return <strong>{children}</strong>;
    },
    table: ({ children, ...props }: ComponentProps<"table">) => (
      <div className="overflow-x-auto my-6 rounded-lg border border-[var(--border)] card-glass overflow-hidden">
        <table className="w-full text-sm border-collapse" {...props}>
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }: ComponentProps<"th">) => (
      <th
        className="text-left p-3 font-semibold text-[var(--text-primary)] bg-white/50 dark:bg-white/5 border-b-2 border-[var(--border)]"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }: ComponentProps<"td">) => (
      <td
        className="p-3 text-[var(--text-secondary)] border-b border-[var(--border)]/60"
        {...props}
      >
        {children}
      </td>
    ),
    blockquote: ({ children }: ComponentProps<"blockquote">) => {
      const text = getTextContent(children ?? "").trimStart();

      // Detect callout type from blockquote content
      const isMerke = text.startsWith("Merke:");
      const isAchtung = /^(?:Achtung|Falle)[:\s—]/.test(text);
      const isTipp = /^(?:Tipp|Prüfungstipp)[:\s—]/.test(text);
      const isKlinisch = /^Klinisch/.test(text);

      if (isMerke) {
        return (
          <div className="my-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 bg-blue-50/70 dark:bg-blue-950/30 shadow-sm px-5 py-4">
            <div className="text-[11px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
              Merke
            </div>
            <div className="text-sm text-[var(--text-primary)] leading-relaxed [&>p]:my-0 [&_strong]:font-semibold">
              {children}
            </div>
          </div>
        );
      }
      if (isAchtung) {
        return (
          <div className="my-6 rounded-lg border-l-4 border-red-500 dark:border-red-400 bg-red-50/70 dark:bg-red-950/30 shadow-sm px-5 py-4">
            <div className="text-[11px] font-bold uppercase tracking-widest text-red-600 dark:text-red-400 mb-2">
              Achtung
            </div>
            <div className="text-sm text-[var(--text-primary)] leading-relaxed [&>p]:my-0 [&_strong]:font-semibold">
              {children}
            </div>
          </div>
        );
      }
      if (isTipp) {
        return (
          <div className="my-6 rounded-lg border-l-4 border-purple-500 dark:border-purple-400 bg-purple-50/70 dark:bg-purple-950/30 shadow-sm px-5 py-4">
            <div className="text-[11px] font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-2">
              Tipp
            </div>
            <div className="text-sm text-[var(--text-primary)] leading-relaxed [&>p]:my-0 [&_strong]:font-semibold">
              {children}
            </div>
          </div>
        );
      }
      if (isKlinisch) {
        return (
          <div className="my-6 rounded-lg border-l-4 border-emerald-500 dark:border-emerald-400 bg-emerald-50/70 dark:bg-emerald-950/30 shadow-sm px-5 py-4">
            <div className="text-[11px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
              Klinisch
            </div>
            <div className="text-sm text-[var(--text-primary)] leading-relaxed [&>p]:my-0 [&_strong]:font-semibold">
              {children}
            </div>
          </div>
        );
      }

      return (
        <blockquote className="border-l-[3px] border-[var(--accent)]/30 pl-4 pr-2 py-2 my-5 text-[var(--text-secondary)] not-italic">
          {children}
        </blockquote>
      );
    },
    a: ({ href, title, children }: { href?: string; title?: string; children?: ReactNode }) => {
      if (href?.startsWith("/bms/") && href.length > 8 && title) {
        const isKeyword = isKeywordLinkTitle(title);
        const description = getKeywordLinkDescription(title);
        return (
          <SmartLink
            to={href}
            description={description}
            className={isKeyword ? SMART_LINK_SUBTLE_CLASS : undefined}
          >
            {children}
          </SmartLink>
        );
      }
      return (
        <a href={href} title={title ?? undefined}>
          {children}
        </a>
      );
    },
  };
}

/** Renders Markdown content with styled blockquotes, tables, and smart links. */
function MarkdownContent({
  text,
  className = "",
  hinterfragMode = false,
  keywordLinkEntries,
}: {
  text: string;
  className?: string;
  hinterfragMode?: boolean;
  keywordLinkEntries?: KeywordLinkEntry[];
}) {
  const { contentWithPlaceholders, blocks } = useMemo(() => parseHinterfragMarkers(text), [text]);
  const processedBase = useMemo(
    () => processTextForSmartLinks(contentWithPlaceholders, keywordLinkEntries),
    [contentWithPlaceholders, keywordLinkEntries]
  );
  const markdownComponents = useMemo(
    () => buildMarkdownComponents(keywordLinkEntries),
    [keywordLinkEntries]
  );

  if (!text.trim()) return null;

  if (blocks.length === 0) {
    return (
      <div
        className={`prose prose-slate dark:prose-invert prose-base max-w-none leading-[1.8] text-[var(--text-primary)] prose-headings:mt-8 prose-headings:mb-4 prose-headings:text-[var(--text-primary)] prose-p:my-4 prose-li:my-1 prose-ul:my-3 prose-ol:my-3 ${className}`}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
          {processedBase}
        </ReactMarkdown>
      </div>
    );
  }

  const segments = processedBase.split(PLACEHOLDER_REGEX);
  return (
    <div
      className={`prose prose-slate dark:prose-invert prose-base max-w-none leading-[1.8] text-[var(--text-primary)] prose-headings:mt-8 prose-headings:mb-4 prose-headings:text-[var(--text-primary)] prose-p:my-4 prose-li:my-1 prose-ul:my-3 prose-ol:my-3 ${className}`}
    >
      {segments.map((part, i) => {
        if (i % 2 === 0) {
          if (!part) return null;
          return (
            <ReactMarkdown key={i} remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {part}
            </ReactMarkdown>
          );
        }
        const id = parseInt(part, 10);
        const block = blocks[id] as HinterfragBlockType | undefined;
        if (!block) return null;
        return (
          <HinterfragBlock
            key={i}
            question={block.question}
            answer={block.answer}
            active={hinterfragMode}
          />
        );
      })}
    </div>
  );
}

/** Unified section for flowing content (intro, H2 sections, MedAT-Fokus, Zusammenfassung). */
type Section = {
  id: string;
  title: string;
  content: ReactNode;
  variant: "default" | "medat" | "summary";
};

interface Props {
  uk: Unterkapitel;
  subject: string;
  chapterId?: string;
  enhancedFormatting?: boolean;
  hinterfragMode?: boolean;
  progressiveDisclosure?: boolean;
  keywordLinkEntries?: KeywordLinkEntry[];
}

export function SubchapterContent({
  uk,
  subject: _subject,
  hinterfragMode = false,
  keywordLinkEntries,
}: Props) {
  // Clean content: remove Kontrollfragen (they're rendered separately as interactive quiz)
  const cleanedContent = useMemo(() => {
    if (!uk.content) return "";
    const { cleanedContent: cleaned } = extractKontrollfragen(uk.content);
    return cleaned;
  }, [uk.content]);

  // Segments: markdown, MedAT-Fokus, Zusammenfassung (order preserved)
  const segments = useMemo(() => parseMedATAndSummary(cleanedContent), [cleanedContent]);

  const diagramRendered = useMemo(
    () =>
      segments.some(
        (s) => s.type === "markdown" && /\{\{DIAGRAM(?::([a-z0-9-]+))?\}\}/.test(s.content)
      ),
    [segments]
  );

  /** Renders markdown text; injects DiagramSVG when placeholders present. */
  function renderSectionContent(text: string): ReactNode {
    if (!text.trim()) return null;

    const placeholderPattern = /\{\{DIAGRAM(?::([a-z0-9-]+))?\}\}|\{\{IMAGE\}\}/g;
    const hasAnyPlaceholder = placeholderPattern.test(text);
    if (!hasAnyPlaceholder) {
      return (
        <MarkdownContent
          text={text}
          hinterfragMode={hinterfragMode}
          keywordLinkEntries={keywordLinkEntries}
        />
      );
    }

    placeholderPattern.lastIndex = 0;
    const parts: ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    let partKey = 0;
    let lastWasDiagram = false;

    while ((match = placeholderPattern.exec(text)) !== null) {
      const before = text.slice(lastIndex, match.index);
      if (before.trim()) {
        parts.push(
          <MarkdownContent
            key={`md-${partKey}`}
            text={before.trim()}
            hinterfragMode={hinterfragMode}
            keywordLinkEntries={keywordLinkEntries}
          />
        );
        partKey++;
        lastWasDiagram = false;
      }

      if (match[0] === "{{IMAGE}}") {
        if (uk.imageUrl) {
          parts.push(
            <figure
              key={`img-${partKey}`}
              className={`${lastWasDiagram ? "mt-10" : "mt-4"} mb-4 mx-auto ${uk.imageUrl?.endsWith(".svg") ? "max-w-2xl" : "max-w-xl"}`}
            >
              <ImageWithFallback
                src={uk.imageUrl}
                alt={uk.imageCaption || uk.title}
                containerClassName="rounded-lg overflow-hidden"
                lightbox
              />
              {uk.imageCaption && (
                <figcaption className="mt-2 text-center text-xs text-[var(--muted)] italic">
                  {uk.imageCaption}
                </figcaption>
              )}
            </figure>
          );
          partKey++;
        }
        lastWasDiagram = false;
      } else {
        const diagramType = match[1] || uk.diagram;
        if (diagramType) {
          parts.push(
            <div key={`diag-${partKey}`} className="content-svg-wrap">
              <DiagramSVG type={diagramType} />
            </div>
          );
          partKey++;
          lastWasDiagram = true;
        }
      }
      lastIndex = match.index + match[0].length;
    }

    const after = text.slice(lastIndex);
    if (after.trim()) {
      parts.push(
        <MarkdownContent
          key={`md-${partKey}`}
          text={after.trim()}
          hinterfragMode={hinterfragMode}
          keywordLinkEntries={keywordLinkEntries}
        />
      );
    }

    return <div className="space-y-4">{parts}</div>;
  }

  // Build flat section list: intro + H2 sections + MedAT-Fokus + Zusammenfassung
  const unifiedSections = useMemo((): Section[] => {
    const list: Section[] = [];
    segments.forEach((segment, segIdx) => {
      if (segment.type === "markdown") {
        const { intro, sections } = splitMarkdownByH2(segment.content);
        if (intro.trim()) {
          list.push({
            id: `intro-${segIdx}`,
            title: "Einleitung",
            content: renderSectionContent(intro),
            variant: "default",
          });
        }
        sections.forEach((sec) => {
          list.push({
            id: `${segIdx}-${sec.id}`,
            title: sec.title,
            content: renderSectionContent(sec.content),
            variant: "default",
          });
        });
      } else if (segment.type === "medat" && Object.keys(segment.sections).length > 0) {
        list.push({
          id: "medat-fokus",
          title: "MedAT-Fokus",
          content: <MedATFocusBody sections={segment.sections} />,
          variant: "medat",
        });
      } else if (segment.type === "summary" && segment.content.trim()) {
        list.push({
          id: "zusammenfassung",
          title: "Zusammenfassung",
          content: (
            <div className="prose prose-slate dark:prose-invert prose-sm max-w-none prose-ul:my-2 prose-li:my-0.5 text-[var(--text-primary)]">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{segment.content.trim()}</ReactMarkdown>
            </div>
          ),
          variant: "summary",
        });
      }
    });
    // Inject imageUrl into the first H2 section (appended at end) when no inline visual exists
    const hasInlineVisual = uk.content?.includes("{{IMAGE}}") || uk.content?.includes("{{DIAGRAM");
    if (uk.imageUrl && !hasInlineVisual && list.length > 0) {
      const firstH2Idx = list.findIndex((s) => s.variant === "default" && s.title !== "Einleitung");
      const targetIdx = firstH2Idx >= 0 ? firstH2Idx : 0;
      const target = list[targetIdx];
      const imgFigure = (
        <figure className="my-6 mx-auto max-w-xl">
          <ImageWithFallback
            src={uk.imageUrl}
            alt={uk.imageCaption || uk.title}
            containerClassName="rounded-lg overflow-hidden"
            lightbox
          />
          {uk.imageCaption && (
            <figcaption className="mt-2 text-center text-xs text-[var(--muted)] italic">
              {uk.imageCaption}
            </figcaption>
          )}
        </figure>
      );
      list[targetIdx] = {
        ...target,
        content: (
          <>
            {target.content}
            {imgFigure}
          </>
        ),
      };
    }

    if (uk.diagram && !diagramRendered && list.length > 0) {
      const last = list[list.length - 1];
      list[list.length - 1] = {
        ...last,
        content: (
          <>
            {last.content}
            <div className="content-svg-wrap mt-4">
              <DiagramSVG type={uk.diagram} />
            </div>
          </>
        ),
      };
    }
    return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps -- renderSectionContent is stable
  }, [segments, uk.diagram, diagramRendered, hinterfragMode, keywordLinkEntries]);

  const allSectionIds = useMemo(() => unifiedSections.map((s) => s.id), [unifiedSections]);

  // Current section for TOC highlight (IntersectionObserver)
  const [currentSectionId, setCurrentSectionId] = useState<string | null>(null);
  const sectionRefsMap = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const map = sectionRefsMap.current;
    const ids = allSectionIds;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .map((e) => ({
            id: (e.target as HTMLElement).dataset.sectionId ?? "",
            top: e.boundingClientRect.top,
          }))
          .filter((p) => p.id);
        if (visible.length === 0) return;
        const byTop = [...visible].sort((a, b) => a.top - b.top);
        setCurrentSectionId(byTop[0].id);
      },
      { rootMargin: "-10% 0px -70% 0px", threshold: 0 }
    );
    const raf = requestAnimationFrame(() => {
      ids.forEach((id) => {
        const el = map[id];
        if (el) observer.observe(el);
      });
    });
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [allSectionIds]);

  const handleTOCSelect = useCallback((id: string) => {
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const hasSection = unifiedSections.some((s) => s.id === hash);
    if (hasSection) {
      const t = setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
      return () => clearTimeout(t);
    }
  }, [unifiedSections]);

  const tocSections = useMemo(
    () => unifiedSections.map((s) => ({ id: s.id, title: s.title })),
    [unifiedSections]
  );

  return (
    <div className="content-section">
      <div className="grid grid-cols-[220px_1fr] gap-12">
        {/* Sticky left TOC */}
        <aside className="min-w-0">
          <SectionTOC
            sections={tocSections}
            currentSectionId={currentSectionId}
            onSelect={handleTOCSelect}
            variant="left"
          />
        </aside>

        {/* Main content — flowing sections, no accordions */}
        <div className="min-w-0 max-w-[720px]">
          {unifiedSections.map((section, index) => (
            <div
              key={section.id}
              ref={(el) => {
                sectionRefsMap.current[section.id] = el;
              }}
              data-section-id={section.id}
            >
              {/* Section anchor for scroll-to */}
              <div id={section.id} className="scroll-mt-28" aria-hidden />

              {/* Section heading — skip for intro */}
              {section.title !== "Einleitung" && (
                <div className={`${index === 0 ? "mt-0" : "mt-16"} mb-6`}>
                  {section.variant === "medat" ? (
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/25 px-2.5 py-1 rounded">
                        MedAT-Fokus
                      </span>
                      <div className="flex-1 h-px bg-amber-200 dark:bg-amber-800" />
                    </div>
                  ) : section.variant === "summary" ? (
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/25 px-2.5 py-1 rounded">
                        Zusammenfassung
                      </span>
                      <div className="flex-1 h-px bg-teal-200 dark:bg-teal-800" />
                    </div>
                  ) : (
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] leading-tight">
                      {section.title}
                    </h2>
                  )}
                </div>
              )}

              {/* Section content — flows naturally */}
              <div
                className={
                  section.variant === "medat"
                    ? "pl-4 border-l-2 border-amber-300 dark:border-amber-700 py-2"
                    : section.variant === "summary"
                      ? "pl-4 border-l-2 border-teal-300 dark:border-teal-700 py-2"
                      : ""
                }
              >
                {section.content}
              </div>

              {/* Visual separator between major sections */}
              {index < unifiedSections.length - 1 && section.variant === "default" && (
                <div className="divider-gradient mt-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Export extracted questions for use in parent component
// eslint-disable-next-line react-refresh/only-export-components -- helper used by BMSUnterkapitel
export function getExtractedQuestions(uk: Unterkapitel): SelfTestQuestion[] {
  if (!uk.content) return uk.selfTest || [];
  const { questions } = extractKontrollfragen(uk.content);
  return questions.length > 0 ? questions : uk.selfTest || [];
}
