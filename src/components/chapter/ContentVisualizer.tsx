import type { Unterkapitel } from "@/data/bmsKapitel/types";
import type { KeywordLinkEntry } from "@/data/glossary";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
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
  enhancedFormatting,
  contentClassName = "",
  hinterfragMode = false,
  keywordLinkEntries,
}: ContentVisualizerProps) {
  const isDieZelle = enhancedFormatting ?? false;
  if (!uk) {
    return (
      <div className={`space-y-6 ${contentClassName}`}>
        <p className="text-sm text-muted">Kein Inhalt für dieses Unterkapitel geladen.</p>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${contentClassName}`}>
      {/* Image – fallback on error, progressive blur, lightbox on click */}
      {uk?.imageUrl && (
        <ImageWithFallback
          src={uk.imageUrl}
          alt=""
          containerClassName="rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700"
          lightbox
        />
      )}

      {/* Text content */}
      <SubchapterContent
        uk={uk}
        subject={subject}
        chapterId={chapterId}
        enhancedFormatting={enhancedFormatting}
        hinterfragMode={hinterfragMode}
        keywordLinkEntries={keywordLinkEntries}
      />

      {/* Quiz – only if data present */}
      {uk?.quiz && uk.quiz.length > 0 && (
        <div className={isDieZelle ? "mt-8" : ""}>
          <div
            className={
              isDieZelle ? "mb-4 pb-3 border-b-2 border-gray-300 dark:border-gray-600" : ""
            }
          >
            <h2
              className={`${
                isDieZelle ? "text-2xl font-bold" : "text-xl font-semibold"
              } text-gray-900 dark:text-gray-100`}
            >
              {isDieZelle && "📝 "}Quiz
            </h2>
          </div>
          <InteractiveQuiz
            questions={uk.quiz}
            unterkapitelId={`${uk.id}-quiz`}
            onAnswer={() => {}}
            onAllComplete={() => {}}
          />
        </div>
      )}
    </div>
  );
}
