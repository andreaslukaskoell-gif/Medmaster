import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type SectionTOCItem = { id: string; title: string };

type SectionTOCProps = {
  sections: SectionTOCItem[];
  currentSectionId: string | null;
  onSelect: (id: string) => void;
  /** "left" = sidebar-style: narrow, minimal */
  variant?: "default" | "left";
  /** Set of section IDs the user has scrolled past */
  readSections?: Set<string>;
  className?: string;
};

export function SectionTOC({
  sections,
  currentSectionId,
  onSelect,
  variant = "default",
  readSections,
  className,
}: SectionTOCProps) {
  if (sections.length === 0) return null;

  const isLeft = variant === "left";

  return (
    <nav
      className={cn(
        "sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto card-glass p-4",
        isLeft ? "w-[220px] min-w-0 shrink-0" : "",
        className
      )}
      aria-label="Inhaltsverzeichnis"
    >
      <h3 className="text-[11px] font-semibold uppercase tracking-widest mb-4 text-[var(--muted)]">
        Inhalt
      </h3>
      <ul className="space-y-0.5 border-l border-[var(--border)]">
        {sections.map((section) => {
          const isCurrent = currentSectionId === section.id;
          const isRead = readSections?.has(section.id) && !isCurrent;
          return (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => onSelect(section.id)}
                className={cn(
                  "w-full text-left text-[13px] leading-snug transition-colors",
                  "pl-3.5 py-1.5 -ml-px border-l-2 flex items-center gap-1.5",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
                  isCurrent
                    ? "border-[var(--accent)] text-[var(--text-primary)] font-medium"
                    : isRead
                      ? "border-transparent text-[var(--muted)] hover:text-[var(--text-primary)] hover:border-[var(--border)]"
                      : "border-transparent text-[var(--muted)] hover:text-[var(--text-primary)] hover:border-[var(--border)]"
                )}
              >
                {isRead && (
                  <Check className="w-3 h-3 shrink-0 text-emerald-500 dark:text-emerald-400" aria-label="Gelesen" />
                )}
                <span className="line-clamp-2">{section.title}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
