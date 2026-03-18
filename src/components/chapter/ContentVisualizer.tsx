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

  // Show hero image only for German visuals (SVG or -de.png) when no inline visual exists
  const hasInlineVisual = uk.content?.includes("{{IMAGE}}") || uk.content?.includes("{{DIAGRAM");
  const isGermanImage = uk.imageUrl?.endsWith(".svg") || uk.imageUrl?.includes("-de.png");
  const showHeroImage = Boolean(uk.imageUrl && isGermanImage && !hasInlineVisual);

  return (
    <div className={`space-y-6 ${contentClassName}`}>
      {/* Image — only show for German visuals (SVG/-de.png) when no DIAGRAM/IMAGE inline */}
      {showHeroImage && (
        <figure className="my-4 mx-auto max-w-md">
          <ImageWithFallback
            src={uk.imageUrl!}
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
      )}

      {/* Text content */}
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
