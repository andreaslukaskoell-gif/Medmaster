import { useState, useMemo } from "react";
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
  type KeywordLinkEntry,
} from "@/data/glossary";
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

const SMART_LINK_SUBTLE_CLASS =
  "border-b border-dotted border-primary-400/60 dark:border-primary-500/50";

function buildMarkdownComponents(keywordLinkEntries?: KeywordLinkEntry[]) {
  return {
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
        className="text-left p-3 font-bold text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }: ComponentProps<"td">) => (
      <td
        className="p-3 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-800"
        {...props}
      >
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
  if (!text.trim()) return null;
  const { contentWithPlaceholders, blocks } = useMemo(() => parseHinterfragMarkers(text), [text]);
  const processedBase = useMemo(
    () => processTextForSmartLinks(contentWithPlaceholders, keywordLinkEntries),
    [contentWithPlaceholders, keywordLinkEntries]
  );
  const markdownComponents = useMemo(
    () => buildMarkdownComponents(keywordLinkEntries),
    [keywordLinkEntries]
  );

  if (blocks.length === 0) {
    return (
      <div
        className={`prose prose-slate dark:prose-invert prose-base max-w-none leading-relaxed text-gray-700 dark:text-slate-100 ${className}`}
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
      className={`prose prose-slate dark:prose-invert prose-base max-w-none leading-relaxed text-gray-700 dark:text-slate-100 ${className}`}
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

  // Stichworte: explicit or auto-extracted from ## headings
  const topics = useMemo(() => {
    if (uk.stichworte && uk.stichworte.length > 0) return uk.stichworte;
    const matches = (uk.content || "").match(/^##\s+(.+)$/gm);
    if (!matches) return [];
    return matches
      .map((m) => m.replace(/^##\s+/, "").trim())
      .filter((t) => t.length > 0 && t.length < 60);
  }, [uk.stichworte, uk.content]);

  // Clean content: remove Kontrollfragen (they're rendered separately as interactive quiz)
  const cleanedContent = useMemo(() => {
    if (!uk.content) return "";
    const { cleanedContent: cleaned } = extractKontrollfragen(uk.content);
    return cleaned;
  }, [uk.content]);

  return (
    <div className="space-y-6">
      {/* Stichworte chips */}
      {topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pb-3 border-b border-gray-100 dark:border-gray-800">
          <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide self-center mr-1">
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

      {/* Main content — pure Markdown, AMBOSS style */}
      <MarkdownContent
        text={cleanedContent}
        hinterfragMode={hinterfragMode}
        keywordLinkEntries={keywordLinkEntries}
      />

      {/* Diagram (SVG) */}
      {uk.diagram && (
        <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
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
  return questions.length > 0 ? questions : uk.selfTest || [];
}
