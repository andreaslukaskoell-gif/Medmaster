import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SectionProgressStatus } from "./CollapsibleSection";

export type SectionTOCItem = { id: string; title: string };

type SectionTOCProps = {
  sections: SectionTOCItem[];
  progress: Record<string, SectionProgressStatus>;
  currentSectionId: string | null;
  onSelect: (id: string) => void;
  readingMode: "learn" | "read";
  /** "left" = Amboss-style: narrow, Inhalt, slate-300, active white + accent marker */
  variant?: "default" | "left";
  className?: string;
};

function ProgressDot({ status }: { status: SectionProgressStatus }) {
  if (status === "completed") {
    return (
      <span className="shrink-0 w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
        <Check className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" strokeWidth={2.5} />
      </span>
    );
  }
  if (status === "opened") {
    return (
      <span className="shrink-0 w-4 h-4 rounded-full border-2 border-[var(--accent)] bg-[var(--accent)]/20 flex items-center justify-center">
        <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
      </span>
    );
  }
  return (
    <span className="shrink-0 w-4 h-4 rounded-full border-2 border-[var(--muted)] bg-transparent" />
  );
}

export function SectionTOC({
  sections,
  progress,
  currentSectionId,
  onSelect,
  readingMode,
  variant = "default",
  className,
}: SectionTOCProps) {
  if (sections.length === 0) return null;

  const isLeft = variant === "left";

  return (
    <nav
      className={cn(
        "rounded-xl border border-[var(--border)] p-4",
        "sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto",
        isLeft
          ? "w-[240px] min-w-0 shrink-0 bg-white dark:bg-slate-900 shadow-sm"
          : "bg-white dark:bg-slate-900",
        className
      )}
      aria-label={readingMode === "learn" ? "Dein Lernpfad" : "Inhaltsverzeichnis"}
    >
      <h3
        className={cn(
          "text-xs font-semibold uppercase tracking-wider mb-3 text-slate-900 dark:text-slate-100"
        )}
      >
        {isLeft ? "Inhalt" : readingMode === "learn" ? "Dein Lernpfad" : "Inhalt"}
      </h3>
      <ul className="space-y-0.5">
        {sections.map((section) => {
          const status = progress[section.id] ?? "unread";
          const isCurrent = currentSectionId === section.id;
          return (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => onSelect(section.id)}
                className={cn(
                  "w-full flex items-center gap-2 text-left text-sm transition-colors rounded-md",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-1",
                  isLeft
                    ? cn(
                        "px-2 py-1.5 border-l-4 border-transparent",
                        "text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800",
                        isCurrent &&
                          "border-[var(--accent)] bg-slate-100 dark:bg-slate-800 font-semibold text-slate-900 dark:text-white"
                      )
                    : cn(
                        "px-2 py-1.5 rounded-lg text-slate-900 dark:text-slate-100",
                        "hover:bg-slate-100 dark:hover:bg-slate-800",
                        isCurrent && "bg-[var(--accent)]/10 text-[var(--accent)] font-semibold"
                      )
                )}
              >
                {!isLeft && <ProgressDot status={status} />}
                <span className="truncate">{section.title}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
