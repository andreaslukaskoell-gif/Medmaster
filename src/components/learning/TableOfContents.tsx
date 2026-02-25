import { useState, useEffect, useRef, useCallback } from "react";
import { List, ChevronDown, ChevronUp } from "lucide-react";

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

  return (
    <nav className="rounded-xl border border-primary-200 dark:border-primary-800 bg-primary-50/50 dark:bg-primary-900/10 overflow-hidden">
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 md:hidden cursor-pointer"
      >
        <span className="text-sm font-semibold text-primary-700 dark:text-primary-400 flex items-center gap-2">
          <List className="w-4 h-4" />
          Inhaltsverzeichnis
        </span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-primary-600 dark:text-primary-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-primary-600 dark:text-primary-400" />
        )}
      </button>

      {/* Desktop header (always visible) */}
      <div className="hidden md:flex items-center gap-2 p-3 pb-0">
        <List className="w-4 h-4 text-primary-600 dark:text-primary-400" />
        <span className="text-sm font-semibold text-primary-700 dark:text-primary-400">
          Inhaltsverzeichnis
        </span>
      </div>

      {/* List — always visible on desktop, toggleable on mobile */}
      <ol className={`p-3 pt-2 space-y-0.5 ${isOpen ? "block" : "hidden"} md:block`}>
        {numbered.map(({ id, title, level, label }) => (
          <li key={id}>
            <button
              onClick={() => handleClick(id)}
              className={`w-full text-left text-sm py-1 px-2 rounded-md transition-colors cursor-pointer ${
                level === 3 ? "pl-7" : ""
              } ${
                activeId === id
                  ? "text-primary-700 dark:text-primary-300 font-bold bg-primary-100 dark:bg-primary-900/30"
                  : "text-gray-600 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20"
              }`}
            >
              <span className="text-primary-500 dark:text-primary-500 mr-1.5">{label}</span>
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
