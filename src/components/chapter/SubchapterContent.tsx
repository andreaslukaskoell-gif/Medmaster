import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import type { ComponentProps, ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { HelpCircle } from "lucide-react";
import type { Unterkapitel, SelfTestQuestion } from "@/data/bmsKapitel/types";
import DiagramSVG from "@/components/diagrams/DiagramSVG";
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
import {
  CollapsibleSection,
  type SectionVariant,
  type SectionProgressStatus,
} from "./CollapsibleSection";
import { SectionTOC } from "./SectionTOC";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STORAGE_KEY_PROGRESS = (ukId: string) => `medmaster-section-progress-${ukId}`;

/** Single section in the unified accordion (intro, H2, MedAT-Fokus, Zusammenfassung). */
type Section = {
  id: string;
  title: string;
  content: ReactNode;
  variant: SectionVariant;
  defaultOpen?: boolean;
};

const MEDAT_SECTION_ORDER: { key: keyof MedATSections; label: string }[] = [
  { key: "zentral", label: "Zentral prüfungsrelevant" },
  { key: "vertiefend", label: "Ergänzend vertiefend" },
  { key: "haeufigeFragen", label: "Häufige Fragen" },
  { key: "fallen", label: "Typische Prüfungsfallen / Verwechslungen" },
  { key: "zahlen", label: "Prüfungsrelevante Zahlen/Fakten" },
];

/** Body content for MedAT-Fokus (used inside CollapsibleSection). */
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
      className="inline-flex items-center gap-1 cursor-pointer select-none rounded px-1 -mx-1 hover:bg-primary-100 dark:hover:bg-primary-900/30 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-1 border-b-2 border-dashed border-primary-400 dark:border-primary-500 text-primary-700 dark:text-primary-300"
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
  "border-b border-dotted border-primary-400/60 dark:border-primary-500/50";

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
      <div className="overflow-x-auto my-4">
        <table
          className="w-full text-sm border-collapse border border-gray-200 dark:border-gray-700"
          {...props}
        >
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }: ComponentProps<"th">) => (
      <th
        className="text-left p-3 font-bold text-[var(--text-primary)] bg-[var(--surface)] border border-[var(--border)]"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }: ComponentProps<"td">) => (
      <td className="p-3 text-[var(--text-secondary)] border border-[var(--border)]" {...props}>
        {children}
      </td>
    ),
    blockquote: ({ children, ...props }: ComponentProps<"blockquote">) => (
      <blockquote
        className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 dark:border-blue-600 pl-4 pr-4 py-3 my-4 rounded-r-lg not-italic"
        {...props}
      >
        {children}
      </blockquote>
    ),
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

/** Renders Markdown content with AMBOSS-style blockquotes, tables, and smart links. */
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
        className={`prose prose-slate dark:prose-invert prose-sm max-w-none leading-relaxed text-[var(--text-primary)] ${className}`}
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
      className={`prose prose-slate dark:prose-invert prose-sm max-w-none leading-relaxed text-[var(--text-primary)] ${className}`}
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

const SUBJECT_COLORS: Record<string, { border: string; text: string; bg: string }> = {
  biologie: {
    border: "border-emerald-500",
    text: "text-emerald-700 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
  },
  chemie: {
    border: "border-red-500",
    text: "text-red-700 dark:text-red-400",
    bg: "bg-red-50 dark:bg-red-900/20",
  },
  physik: {
    border: "border-blue-500",
    text: "text-blue-700 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-900/20",
  },
  mathematik: {
    border: "border-violet-500",
    text: "text-violet-700 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-900/20",
  },
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
  subject,
  hinterfragMode = false,
  keywordLinkEntries,
}: Props) {
  const colors = SUBJECT_COLORS[subject] || SUBJECT_COLORS.biologie;

  // Stichworte: nur offiziell hinterlegte aus Kapitel/UK-Daten – keine Auto-Extraktion
  const topics = useMemo(() => {
    if (uk.stichworte && Array.isArray(uk.stichworte) && uk.stichworte.length > 0) {
      return uk.stichworte;
    }
    return [];
  }, [uk.stichworte]);

  // Clean content: remove Kontrollfragen (they're rendered separately as interactive quiz)
  const cleanedContent = useMemo(() => {
    if (!uk.content) return "";
    const { cleanedContent: cleaned } = extractKontrollfragen(uk.content);
    return cleaned;
  }, [uk.content]);

  // Segments: markdown, MedAT-Fokus, Zusammenfassung (order preserved)
  const segments = useMemo(() => parseMedATAndSummary(cleanedContent), [cleanedContent]);

  const diagramRendered = useMemo(
    () => segments.some((s) => s.type === "markdown" && s.content.includes("{{DIAGRAM}}")),
    [segments]
  );

  /** Renders markdown text; injects DiagramSVG when {{DIAGRAM}} placeholder present. */
  function renderSectionContent(text: string): ReactNode {
    if (!text.trim()) return null;
    const hasDiagramPlaceholder = uk.diagram && text.includes("{{DIAGRAM}}");
    if (hasDiagramPlaceholder && uk.diagram) {
      const [before, after] = text.split("{{DIAGRAM}}");
      return (
        <div className="space-y-4">
          <MarkdownContent
            text={before.trim()}
            hinterfragMode={hinterfragMode}
            keywordLinkEntries={keywordLinkEntries}
          />
          <div className="content-svg-wrap">
            <DiagramSVG type={uk.diagram} />
          </div>
          {after.trim() ? (
            <MarkdownContent
              text={after.trim()}
              hinterfragMode={hinterfragMode}
              keywordLinkEntries={keywordLinkEntries}
            />
          ) : null}
        </div>
      );
    }
    return (
      <MarkdownContent
        text={text}
        hinterfragMode={hinterfragMode}
        keywordLinkEntries={keywordLinkEntries}
      />
    );
  }

  // Unified section list: intro + H2 sections + MedAT-Fokus + Zusammenfassung (same order as segments)
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
            defaultOpen: true,
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
          title: "Zusammenfassung (ultrakompakt)",
          content: (
            <div className="prose prose-slate dark:prose-invert prose-sm max-w-none prose-ul:my-2 prose-li:my-0.5 text-[var(--text-primary)]">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{segment.content.trim()}</ReactMarkdown>
            </div>
          ),
          variant: "summary",
        });
      }
    });
    // If diagram has no placeholder, append to last section so no SVG is outside a section
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
  const firstSectionId = allSectionIds[0] ?? null;

  // Section progress: unread | opened | completed (optional localStorage per subchapter)
  const [sectionProgress, setSectionProgress] = useState<Record<string, SectionProgressStatus>>(
    () => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY_PROGRESS(uk.id));
        if (!raw) return {};
        const parsed = JSON.parse(raw) as Record<string, string>;
        const next: Record<string, SectionProgressStatus> = {};
        for (const [id, v] of Object.entries(parsed)) {
          if (v === "unread" || v === "opened" || v === "completed") next[id] = v;
        }
        return next;
      } catch {
        return {};
      }
    }
  );
  useEffect(() => {
    if (Object.keys(sectionProgress).length === 0) return;
    try {
      localStorage.setItem(STORAGE_KEY_PROGRESS(uk.id), JSON.stringify(sectionProgress));
    } catch {
      /* ignore */
    }
  }, [uk.id, sectionProgress]);

  // Open state: only first section open initially; user opens others via header or TOC
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const openSectionsInitialized = useRef(false);
  const prevUkId = useRef(uk.id);

  useEffect(() => {
    if (prevUkId.current !== uk.id) {
      prevUkId.current = uk.id;
      openSectionsInitialized.current = false;
    }
  }, [uk.id]);

  useEffect(() => {
    if (unifiedSections.length === 0 || !firstSectionId) return;
    if (openSectionsInitialized.current) return;
    openSectionsInitialized.current = true;
    const t = setTimeout(() => setOpenSections({ [firstSectionId]: true }), 0);
    return () => clearTimeout(t);
  }, [unifiedSections, firstSectionId, allSectionIds]);

  const effectiveOpen = useCallback((id: string) => openSections[id] ?? false, [openSections]);

  const handleSectionOpenChange = useCallback((id: string, open: boolean) => {
    setOpenSections((prev) => ({ ...prev, [id]: open }));
  }, []);

  const handleOpened = useCallback((id: string) => {
    setSectionProgress((prev) =>
      prev[id] === "unread" || prev[id] === undefined ? { ...prev, [id]: "opened" } : prev
    );
  }, []);

  const handleCompleted = useCallback((id: string) => {
    setSectionProgress((prev) => ({ ...prev, [id]: "completed" }));
    // Sections only open when user clicks (header or TOC), not auto-open next
  }, []);
  const handleTOCSelect = useCallback((id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: true }));
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

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

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const hasSection = unifiedSections.some((s) => s.id === hash);
    if (hasSection) {
      const t = setTimeout(() => setOpenSections((prev) => ({ ...prev, [hash]: true })), 0);
      const t2 = setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
      return () => {
        clearTimeout(t);
        clearTimeout(t2);
      };
    }
  }, [unifiedSections]);

  const expandAll = useCallback(() => {
    setOpenSections(
      allSectionIds.reduce<Record<string, boolean>>((acc, id) => ({ ...acc, [id]: true }), {})
    );
  }, [allSectionIds]);

  const collapseAll = useCallback(() => {
    setOpenSections({});
  }, []);

  const tocSections = useMemo(
    () => unifiedSections.map((s) => ({ id: s.id, title: s.title })),
    [unifiedSections]
  );

  return (
    <div className="space-y-6 content-section">
      {topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pb-3 border-b border-[var(--border)]">
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide self-center mr-1">
            Themen:
          </span>
          {topics.map((topic) => (
            <span
              key={topic}
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      {/* Alle aufklappen / Alle schließen */}
      <div className="flex flex-wrap items-center gap-3">
        {allSectionIds.length > 0 && (
          <>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={expandAll}
              className="text-xs"
            >
              Alle aufklappen
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={collapseAll}
              className="text-xs"
            >
              Alle schließen
            </Button>
          </>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">
        <aside className="hidden lg:block min-w-0">
          <SectionTOC
            sections={tocSections}
            progress={sectionProgress}
            currentSectionId={currentSectionId}
            onSelect={handleTOCSelect}
            variant="left"
          />
        </aside>
        <div className="space-y-0 min-w-0">
          {unifiedSections.map((section, index) => (
            <div
              key={section.id}
              className={index === 0 ? undefined : "-mt-px"}
              ref={(el) => {
                sectionRefsMap.current[section.id] = el;
              }}
              data-section-id={section.id}
            >
              <CollapsibleSection
                id={section.id}
                title={section.title}
                variant={section.variant}
                defaultOpen={section.defaultOpen}
                progressStatus={sectionProgress[section.id] ?? "unread"}
                onOpened={() => handleOpened(section.id)}
                onCompleted={() => handleCompleted(section.id)}
                open={effectiveOpen(section.id)}
                onOpenChange={(open) => handleSectionOpenChange(section.id, open)}
              >
                {section.content}
              </CollapsibleSection>
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
