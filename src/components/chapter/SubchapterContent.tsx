import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import type { ComponentProps, ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ChevronDown, ChevronUp, HelpCircle, Check } from "lucide-react";
import type { Unterkapitel, SelfTestQuestion, ContentSection } from "@/data/bmsKapitel/types";
import DiagramSVG from "@/components/diagrams/DiagramSVG";
import { extractKontrollfragen } from "@/utils/parseKontrollfragen";
import { processTextForSmartLinks, isKeywordLinkTitle, getKeywordLinkDescription, type KeywordLinkEntry } from "@/data/glossary";
import { pathForChapter } from "@/lib/bmsRoutes";
import { SmartLink } from "@/components/content/SmartLink";
import {
  parseHinterfragMarkers,
  PLACEHOLDER_REGEX,
  type HinterfragBlock as HinterfragBlockType,
} from "@/utils/parseHinterfrag";

/** Einzelne Stelle: Frage anzeigen, Antwort bei Klick/Hover enthüllen. */
function HinterfragBlock({
  question,
  answer,
  active,
}: { question: string; answer: string; active: boolean }) {
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
        <span className="font-medium text-gray-800 dark:text-gray-200 border-0">{answer}</span>
      ) : (
        <>
          <HelpCircle className="w-4 h-4 shrink-0" aria-hidden />
          <span>{question}</span>
        </>
      )}
    </span>
  );
}

const SMART_LINK_SUBTLE_CLASS = "border-b border-dotted border-primary-400/60 dark:border-primary-500/50";

function buildMarkdownComponents(keywordLinkEntries?: KeywordLinkEntry[]) {
  return {
    table: ({ children, ...props }: ComponentProps<"table">) => (
      <div className="overflow-x-auto">
        <table {...props}>{children}</table>
      </div>
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

/** Renders plain text or Markdown with prose; Smart-Links (inkl. Keyword-Links dezent); optional Hinterfrag-Marker. */
function MarkdownContent({
  text,
  size = "sm",
  className = "",
  hinterfragMode = false,
  keywordLinkEntries,
}: {
  text: string;
  size?: "sm" | "base";
  className?: string;
  hinterfragMode?: boolean;
  keywordLinkEntries?: KeywordLinkEntry[];
}) {
  if (!text.trim()) return null;
  const proseSize = size === "base" ? "prose-base" : "prose-sm";
  const { contentWithPlaceholders, blocks } = useMemo(
    () => parseHinterfragMarkers(text),
    [text]
  );
  const processedBase = useMemo(
    () => processTextForSmartLinks(contentWithPlaceholders, pathForChapter, keywordLinkEntries),
    [contentWithPlaceholders, keywordLinkEntries]
  );
  const markdownComponents = useMemo(
    () => buildMarkdownComponents(keywordLinkEntries),
    [keywordLinkEntries]
  );

  if (blocks.length === 0) {
    return (
      <div
        className={`prose prose-slate dark:prose-invert max-w-none leading-relaxed ${proseSize} text-gray-700 dark:text-slate-100 ${className}`}
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
      className={`prose prose-slate dark:prose-invert max-w-none leading-relaxed ${proseSize} text-gray-700 dark:text-slate-100 ${className}`}
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
  biologie: { border: "border-emerald-500", text: "text-emerald-700 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
  chemie: { border: "border-red-500", text: "text-red-700 dark:text-red-400", bg: "bg-red-50 dark:bg-red-900/20" },
  physik: { border: "border-blue-500", text: "text-blue-700 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" },
  mathematik: { border: "border-violet-500", text: "text-violet-700 dark:text-violet-400", bg: "bg-violet-50 dark:bg-violet-900/20" },
};

/** Eine Untersektion mit Progressive Disclosure: ausgegraut/kollabiert bis Scroll oder "Verstanden". */
function DisclosableSection({
  section,
  sectionIndex,
  isLast,
  isDisclosed,
  onDisclose,
  onScrollIntoView,
  scrollToNextSection,
  sectionRef,
  colors,
  isDieZelle,
  hinterfragMode,
  keywordLinkEntries,
}: {
  section: ContentSection;
  sectionIndex: number;
  isLast: boolean;
  isDisclosed: boolean;
  onDisclose: () => void;
  onScrollIntoView: () => void;
  scrollToNextSection: (() => void) | null;
  sectionRef: (el: HTMLDivElement | null) => void;
  colors: { border: string; text: string; bg: string };
  isDieZelle: boolean;
  hinterfragMode: boolean;
  keywordLinkEntries?: KeywordLinkEntry[];
}) {
  const localRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = localRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) onScrollIntoView();
      },
      { rootMargin: "0px 0px -25% 0px", threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [onScrollIntoView]);

  const handleVerstanden = useCallback(() => {
    onDisclose();
    scrollToNextSection?.();
  }, [onDisclose, scrollToNextSection]);

  const setRef = useCallback(
    (node: HTMLDivElement | null) => {
      sectionRef(node);
      (localRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
    },
    [sectionRef]
  );

  return (
    <div
      ref={setRef}
      className={`space-y-4 ${isDieZelle ? "mb-6" : "space-y-3"} transition-all duration-300 ${
        isDisclosed ? "opacity-100" : "opacity-85"
      }`}
    >
      <h3
        className={`${isDieZelle ? "text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b-2" : "text-lg font-semibold text-gray-800 dark:text-gray-200"} border-l-4 ${colors.border} pl-4 ${isDieZelle ? "pt-1" : "pl-3"} ${!isDisclosed ? "text-gray-600 dark:text-gray-400" : ""}`}
      >
        {isDieZelle && <span className="text-base font-normal text-gray-500 dark:text-gray-400 mr-2">{sectionIndex + 1}.</span>}
        {section.heading}
      </h3>

      {isDisclosed ? (
        <>
          <div className={`${isDieZelle ? "text-base leading-relaxed" : "text-sm leading-relaxed"} text-gray-700 dark:text-gray-300 space-y-3`}>
            <MarkdownContent text={section.text} size={isDieZelle ? "base" : "sm"} hinterfragMode={hinterfragMode} keywordLinkEntries={keywordLinkEntries} />
          </div>
          {section.merksatz && (
            <div className={`${isDieZelle ? "bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 shadow-sm" : "bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400"} p-5 rounded-r-lg my-4`}>
              <p className={`font-bold ${isDieZelle ? "text-base" : "text-sm"} text-amber-800 dark:text-amber-300 flex items-center gap-2 mb-2`}>
                <span className="text-lg">💡</span> Merke
              </p>
              <div className={`${isDieZelle ? "text-base" : "text-sm"} text-amber-900 dark:text-amber-200 leading-relaxed`}>
                <MarkdownContent text={section.merksatz} size={isDieZelle ? "base" : "sm"} hinterfragMode={hinterfragMode} keywordLinkEntries={keywordLinkEntries} />
              </div>
            </div>
          )}
          {section.table && (
            <div className={`overflow-x-auto rounded-lg border ${isDieZelle ? "border-2 shadow-sm" : "border"} border-gray-200 dark:border-gray-700 my-4`}>
              <table className={`w-full ${isDieZelle ? "text-base" : "text-sm"}`}>
                <thead>
                  <tr className={`${colors.bg}`}>
                    {section.table.headers.map((h, hi) => (
                      <th key={hi} className={`text-left ${isDieZelle ? "p-4" : "p-3"} font-bold ${colors.text} border-b-2 border-gray-300 dark:border-gray-600`}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row, ri) => (
                    <tr key={ri} className={`${isDieZelle ? "hover:bg-gray-50 dark:hover:bg-gray-800/70" : ""} even:bg-gray-50 dark:even:bg-gray-800/50 transition-colors`}>
                      {row.map((cell, ci) => (
                        <td key={ci} className={`${isDieZelle ? "p-4" : "p-3"} text-gray-700 dark:text-gray-300 border-b border-gray-100 dark:border-gray-800`} dangerouslySetInnerHTML={{ __html: cell }} />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {!isLast && (
            <button
              type="button"
              onClick={handleVerstanden}
              className="flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              <Check className="w-4 h-4" />
              Verstanden – weiter
            </button>
          )}
        </>
      ) : (
        <div className="rounded-lg bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            Scroll hierher oder klicke „Verstanden“, um den Abschnitt anzuzeigen.
          </p>
          <button
            type="button"
            onClick={handleVerstanden}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-900/50 font-medium text-sm transition-colors"
          >
            <Check className="w-4 h-4" />
            Verstanden
          </button>
        </div>
      )}
    </div>
  );
}

interface Props {
  uk: Unterkapitel;
  subject: string;
  chapterId?: string; // Optional: to check if this is "Die Zelle" (bio-kap1)
  /** Aktiviert Active Recall: [? Frage | Antwort ]-Stellen als Frage anzeigen, Antwort bei Klick/Hover. */
  hinterfragMode?: boolean;
  /** Progressive Disclosure: Untersektionen erst bei Scroll oder „Verstanden“ voll anzeigen. */
  progressiveDisclosure?: boolean;
  /** Keywords anderer Kapitel für Smart-Linker (Knowledge-Bridge); Begriffe werden dezent verlinkt. */
  keywordLinkEntries?: KeywordLinkEntry[];
}

export function SubchapterContent({ uk, subject, chapterId, hinterfragMode = false, progressiveDisclosure = true, keywordLinkEntries }: Props) {
  const colors = SUBJECT_COLORS[subject] || SUBJECT_COLORS.biologie;
  const [lernzieleOpen, setLernzieleOpen] = useState(false);

  // Progressive Disclosure: welche Sektionen sind „enthüllt“ (Scroll oder Verstanden)
  const sectionCount = uk.sections?.length ?? 0;
  const [disclosedSections, setDisclosedSections] = useState<Set<number>>(() => new Set([0]));
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, sectionCount);
  }, [sectionCount]);

  const setSectionDisclosed = useCallback((index: number) => {
    setDisclosedSections((prev) => new Set([...prev, index]));
  }, []);

  // Check if this is "Die Zelle" chapter for enhanced formatting
  const isDieZelle = chapterId === "bio-kap1";

  // Extract Kontrollfragen from content if they exist as free text
  const cleanedContent = useMemo(() => {
    if (!uk.content) return "";
    const { cleanedContent: cleaned } = extractKontrollfragen(uk.content);
    return cleaned;
  }, [uk.content]);

  // If sections exist, render structured content; otherwise fall back to plain content
  if (uk.sections && uk.sections.length > 0) {
    const useProgressive = progressiveDisclosure;

    return (
      <div className="space-y-6">
        {/* Full content shown first when both content and sections are present */}
        {uk.content && cleanedContent && (
          <div className={`${isDieZelle ? "text-base" : "text-sm"} text-gray-700 dark:text-gray-300 leading-relaxed space-y-3`}>
            <MarkdownContent text={cleanedContent} size={isDieZelle ? "base" : "sm"} hinterfragMode={hinterfragMode} keywordLinkEntries={keywordLinkEntries} />
          </div>
        )}

        {/* Section divider when both content and sections exist */}
        {uk.content && cleanedContent && (
          <hr className="my-6 border-t-2 border-gray-200 dark:border-gray-700" />
        )}

        {/* Lernziele */}
        {uk.lernziele && uk.lernziele.length > 0 && (
          <div className={`${colors.bg} ${isDieZelle ? "rounded-xl shadow-sm border-2" : "rounded-xl border"} ${colors.border} ${isDieZelle ? "border-opacity-50" : "border-opacity-30"} overflow-hidden mb-6`}>
            <button
              onClick={() => setLernzieleOpen(!lernzieleOpen)}
              className={`w-full flex items-center justify-between ${isDieZelle ? "p-5" : "p-4"} cursor-pointer hover:bg-opacity-80 transition-colors`}
            >
              <span className={`${isDieZelle ? "font-bold text-base" : "font-semibold"} ${colors.text} flex items-center gap-2`}>
                📚 Lernziele
              </span>
              {lernzieleOpen ? <ChevronUp className={`w-5 h-5 ${colors.text}`} /> : <ChevronDown className={`w-5 h-5 ${colors.text}`} />}
            </button>
            {lernzieleOpen && (
              <ul className={`${isDieZelle ? "px-6 pb-5" : "px-4 pb-4"} space-y-2.5`}>
                {uk.lernziele.map((ziel, i) => (
                  <li key={i} className={`flex items-start gap-3 ${isDieZelle ? "text-base" : "text-sm"} text-gray-700 dark:text-gray-300`}>
                    <span className={`${colors.text} ${isDieZelle ? "text-lg mt-0.5 font-bold" : "mt-0.5"}`}>&#8226;</span>
                    <span className="leading-relaxed">{ziel}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Structured sections: mit oder ohne Progressive Disclosure */}
        {uk.sections.map((section, i) => {
          if (useProgressive) {
            const scrollToNext =
              i < uk.sections!.length - 1
                ? () => sectionRefs.current[i + 1]?.scrollIntoView({ behavior: "smooth", block: "start" })
                : null;
            return (
              <div key={i}>
                <DisclosableSection
                  section={section}
                  sectionIndex={i}
                  isLast={i === uk.sections!.length - 1}
                  isDisclosed={disclosedSections.has(i)}
                  onDisclose={() => setSectionDisclosed(i)}
                  onScrollIntoView={() => setSectionDisclosed(i)}
                  scrollToNextSection={scrollToNext}
                  sectionRef={(el) => { sectionRefs.current[i] = el; }}
                  colors={colors}
                  isDieZelle={isDieZelle}
                  hinterfragMode={hinterfragMode}
                  keywordLinkEntries={keywordLinkEntries}
                />
                {i < uk.sections!.length - 1 && (
                  <hr className={`${isDieZelle ? "my-8 border-t-2" : "my-4"} border-gray-200 dark:border-gray-700`} />
                )}
              </div>
            );
          }
          return (
            <div key={i} className={`space-y-4 ${isDieZelle ? "mb-6" : "space-y-3"}`}>
              <h3 className={`${isDieZelle ? "text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b-2" : "text-lg font-semibold text-gray-800 dark:text-gray-200"} border-l-4 ${colors.border} pl-4 ${isDieZelle ? "pt-1" : "pl-3"}`}>
                {isDieZelle && <span className="text-base font-normal text-gray-500 dark:text-gray-400 mr-2">{i + 1}.</span>}
                {section.heading}
              </h3>
              <div className={`${isDieZelle ? "text-base leading-relaxed" : "text-sm leading-relaxed"} text-gray-700 dark:text-gray-300 space-y-3`}>
                <MarkdownContent text={section.text} size={isDieZelle ? "base" : "sm"} hinterfragMode={hinterfragMode} keywordLinkEntries={keywordLinkEntries} />
              </div>
              {section.merksatz && (
                <div className={`${isDieZelle ? "bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 shadow-sm" : "bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400"} p-5 rounded-r-lg my-4`}>
                  <p className={`font-bold ${isDieZelle ? "text-base" : "text-sm"} text-amber-800 dark:text-amber-300 flex items-center gap-2 mb-2`}>
                    <span className="text-lg">💡</span> Merke
                  </p>
                  <div className={`${isDieZelle ? "text-base" : "text-sm"} text-amber-900 dark:text-amber-200 leading-relaxed`}>
                    <MarkdownContent text={section.merksatz} size={isDieZelle ? "base" : "sm"} hinterfragMode={hinterfragMode} keywordLinkEntries={keywordLinkEntries} />
                  </div>
                </div>
              )}
              {section.table && (
                <div className={`overflow-x-auto rounded-lg border ${isDieZelle ? "border-2 shadow-sm" : "border"} border-gray-200 dark:border-gray-700 my-4`}>
                  <table className={`w-full ${isDieZelle ? "text-base" : "text-sm"}`}>
                    <thead>
                      <tr className={`${colors.bg}`}>
                        {section.table.headers.map((h, hi) => (
                          <th key={hi} className={`text-left ${isDieZelle ? "p-4" : "p-3"} font-bold ${colors.text} border-b-2 border-gray-300 dark:border-gray-600`}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, ri) => (
                        <tr key={ri} className={`${isDieZelle ? "hover:bg-gray-50 dark:hover:bg-gray-800/70" : ""} even:bg-gray-50 dark:even:bg-gray-800/50 transition-colors`}>
                          {row.map((cell, ci) => (
                            <td key={ci} className={`${isDieZelle ? "p-4" : "p-3"} text-gray-700 dark:text-gray-300 border-b border-gray-100 dark:border-gray-800`} dangerouslySetInnerHTML={{ __html: cell }} />
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {i < uk.sections!.length - 1 && (
                <hr className={`${isDieZelle ? "my-8 border-t-2" : "my-4"} border-gray-200 dark:border-gray-700`} />
              )}
            </div>
          );
        })}

        {/* Diagram */}
        {uk.diagram && (
          <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
            <DiagramSVG type={uk.diagram} />
          </div>
        )}
      </div>
    );
  }

  // Fallback: render plain content (with Kontrollfragen removed)
  return (
    <div className={`${isDieZelle ? 'space-y-8' : 'space-y-6'}`}>
      <div className={`${isDieZelle ? "text-base" : "text-sm"} text-gray-700 dark:text-gray-300 leading-relaxed space-y-3`}>
        <MarkdownContent text={cleanedContent} size={isDieZelle ? "base" : "sm"} hinterfragMode={hinterfragMode} keywordLinkEntries={keywordLinkEntries} />
      </div>
      {uk.diagram && (
        <div className={`${isDieZelle ? 'p-6' : 'p-4'} bg-gray-50 dark:bg-gray-800/50 rounded-xl`}>
          <DiagramSVG type={uk.diagram} />
        </div>
      )}
    </div>
  );
}

// Export extracted questions for use in parent component
export function getExtractedQuestions(uk: Unterkapitel): SelfTestQuestion[] {
  if (!uk.content) return uk.selfTest || [];
  const { questions } = extractKontrollfragen(uk.content);
  return questions.length > 0 ? questions : (uk.selfTest || []);
}
