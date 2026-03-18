import type { Unterkapitel } from "@/data/bmsKapitel/types";
import type { KeywordLinkEntry } from "@/data/glossary";
import { SubchapterContent } from "./SubchapterContent";
import { InteractiveQuiz } from "./InteractiveQuiz";

interface ContentVisualizerProps {
  uk: Unterkapitel;
  subject: string;
  chapterId?: string;
  enhancedFormatting?: boolean;
  /** Extra class for the main content wrapper (e.g. padding from parent Card). */
  contentClassName?: string;
  /** Hinterfrag-Modus: [? Frage | Antwort ] als Frage anzeigen, Antwort bei Klick/Hover. */
  hinterfragMode?: boolean;
  /** Keywords anderer Kapitel für Smart-Linker (Knowledge-Bridge). */
  keywordLinkEntries?: KeywordLinkEntry[];
}

/**
 * Renders chapter content: optional image (lazy-loaded), text body, optional quiz.
 * Only shows image/quiz when data is present; no empty placeholders.
 */
export function ContentVisualizer({
  uk,
  subject,
  chapterId,
  enhancedFormatting: _enhancedFormatting,
  contentClassName = "",
  hinterfragMode = false,
  keywordLinkEntries,
}: ContentVisualizerProps) {
  if (!uk) {
    return (
      <div className={`space-y-6 ${contentClassName}`}>
        <p className="text-sm text-[var(--text-primary)]">
          Kein Inhalt für dieses Unterkapitel geladen.
        </p>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${contentClassName}`}>
      {/* Text content (image injected inline after intro by SubchapterContent) */}
      <SubchapterContent
        uk={uk}
        subject={subject}
        chapterId={chapterId}
        hinterfragMode={hinterfragMode}
        keywordLinkEntries={keywordLinkEntries}
      />

      {/* Quiz – only if data present */}
      {uk?.quiz && uk.quiz.length > 0 && (
        <InteractiveQuiz
          questions={uk.quiz}
          unterkapitelId={`${uk.id}-quiz`}
          onAnswer={() => {}}
          onAllComplete={() => {}}
        />
      )}
    </div>
  );
}
