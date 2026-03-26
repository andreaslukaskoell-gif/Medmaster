import { useState, useEffect, useRef, useCallback } from "react";
import { List, ChevronDown, ChevronUp, BookOpen } from "lucide-react";

export interface TocSection {
  id: string;
  title: string;
  level: number; // 2 = H2, 3 = H3
}

interface Props {
  sections: TocSection[];
}

export function TableOfContents({ sections }: Props) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (sections.length < 3) return;
    observerRef.current?.disconnect();

    const headings = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (headings.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the topmost visible heading
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    headings.forEach((el) => observerRef.current!.observe(el));

    return () => observerRef.current?.disconnect();
  }, [sections]);

  // Don't render if fewer than 3 sections
  if (sections.length < 3) return null;

  // Number sections: H2 gets main number, H3 gets sub-number
  const numbered = buildNumberedList(sections);

  // Find current section title for mobile compact display
  const activeSection = numbered.find((s) => s.id === activeId);
  const progressPct = activeSection
    ? Math.round(((numbered.indexOf(activeSection) + 1) / numbered.length) * 100)
    : 0;

  return (
    <nav
      className="rounded-xl border border-[var(--accent)]/20 dark:border-[var(--accent)] bg-[var(--accent)]/5/50 dark:bg-[var(--accent)]/10 overflow-hidden"
      aria-label="Inhaltsverzeichnis"
    >
      {/* Mobile toggle — shows current section + progress */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 md:hidden cursor-pointer gap-2"
      >
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <BookOpen className="w-4 h-4 text-[var(--accent)] dark:text-[var(--accent)]/60 shrink-0" />
          <div className="min-w-0 flex-1">
            <span className="text-xs font-semibold text-[var(--accent)] dark:text-[var(--accent)]/60 block">
              Inhaltsverzeichnis
            </span>
            {activeSection && (
              <span className="text-[11px] text-[var(--muted)] truncate block">
                {activeSection.label} {activeSection.title}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {activeSection && (
            <span className="text-[10px] font-medium text-[var(--accent)] bg-[var(--accent)]/10 px-1.5 py-0.5 rounded">
              {progressPct}%
            </span>
          )}
          {isOpen ? (
            <ChevronUp className="w-4 h-4 text-[var(--accent)] dark:text-[var(--accent)]/60" />
          ) : (
            <ChevronDown className="w-4 h-4 text-[var(--accent)] dark:text-[var(--accent)]/60" />
          )}
        </div>
      </button>

      {/* Mobile progress bar */}
      {!isOpen && activeSection && (
        <div className="h-0.5 bg-[var(--border)] md:hidden">
          <div
            className="h-full bg-[var(--accent)] transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      )}

      {/* Desktop header (always visible) */}
      <div className="hidden md:flex items-center gap-2 p-3 pb-0">
        <List className="w-4 h-4 text-[var(--accent)] dark:text-[var(--accent)]/60" />
        <span className="text-sm font-semibold text-[var(--accent)] dark:text-[var(--accent)]/60">
          Inhaltsverzeichnis
        </span>
      </div>

      {/* List — always visible on desktop, toggleable on mobile */}
      <ol className={`p-3 pt-2 space-y-0.5 ${isOpen ? "block" : "hidden"} md:block`}>
        {numbered.map(({ id, title, level, label }) => (
          <li key={id}>
            <button
              onClick={() => handleClick(id)}
              className={`w-full text-left text-sm py-1.5 px-2 rounded-md transition-colors cursor-pointer ${
                level === 3 ? "pl-7" : ""
              } ${
                activeId === id
                  ? "text-[var(--accent)] dark:text-[var(--accent)]/30 font-bold bg-[var(--accent)]/10 dark:bg-[var(--accent)]/30"
                  : "text-[var(--muted)] hover:text-[var(--accent)] dark:hover:text-[var(--accent)]/30 hover:bg-[var(--accent)]/5 dark:hover:bg-[var(--accent)]/20"
              }`}
            >
              <span className="text-[var(--accent)] dark:text-[var(--accent)] mr-1.5">{label}</span>
              {title}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Build numbered labels like "1.", "1.1", "2.", "2.1" etc. */
function buildNumberedList(sections: TocSection[]) {
  let h2Count = 0;
  let h3Count = 0;

  return sections.map((s) => {
    let label: string;
    if (s.level === 2) {
      h2Count++;
      h3Count = 0;
      label = `${h2Count}.`;
    } else {
      h3Count++;
      label = `${h2Count}.${h3Count}`;
    }
    return { ...s, label };
  });
}
