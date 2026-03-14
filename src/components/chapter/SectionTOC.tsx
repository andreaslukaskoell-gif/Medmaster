import { cn } from "@/lib/utils";
import type { SectionProgressStatus } from "./CollapsibleSection";

export type SectionTOCItem = { id: string; title: string };

type SectionTOCProps = {
  sections: SectionTOCItem[];
  /** Kept for API compat — currently unused in minimal TOC. */
  progress?: Record<string, SectionProgressStatus>;
  currentSectionId: string | null;
  onSelect: (id: string) => void;
  /** "left" = sidebar-style: narrow, minimal */
  variant?: "default" | "left";
  className?: string;
};

export function SectionTOC({
  sections,
  progress,
  currentSectionId,
  onSelect,
  variant = "default",
  className,
}: SectionTOCProps) {
  if (sections.length === 0) return null;

  const isLeft = variant === "left";

  return (
    <nav
      className={cn(
        "sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto",
        isLeft ? "w-[200px] min-w-0 shrink-0" : "",
        className
      )}
      aria-label="Inhaltsverzeichnis"
    >
      <h3 className="text-xs font-medium uppercase tracking-wider mb-3 text-[var(--muted)]">
        Inhalt
      </h3>
      <ul className="space-y-0.5 border-l border-[var(--border)]">
        {sections.map((section) => {
          const isCurrent = currentSectionId === section.id;
          return (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => onSelect(section.id)}
                className={cn(
                  "w-full text-left text-[13px] leading-snug transition-colors",
                  "pl-3 py-1 -ml-px border-l-2",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
                  isCurrent
                    ? "border-[var(--accent)] text-[var(--text-primary)] font-medium"
                    : "border-transparent text-[var(--muted)] hover:text-[var(--text-primary)] hover:border-[var(--border)]"
                )}
              >
                <span className="line-clamp-2">{section.title}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
