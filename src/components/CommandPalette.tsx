import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, BookOpen, CheckCircle2, Flame } from "lucide-react";
import { alleKapitel } from "@/data/bmsKapitel";
import type { Kapitel, Unterkapitel } from "@/data/bmsKapitel/types";
import { pathForChapter } from "@/lib/bmsRoutes";
import { useStore } from "@/store/useStore";
import { useAdaptiveStore } from "@/store/adaptiveLearning";

const SUBJECT_LABELS: Record<string, string> = {
  biologie: "Biologie",
  chemie: "Chemie",
  physik: "Physik",
  mathematik: "Mathematik",
};

export { OPEN_COMMAND_PALETTE } from "@/lib/commandPaletteConstants";

export type SearchItem =
  | { type: "chapter"; kapitel: Kapitel }
  | { type: "unterkapitel"; kapitel: Kapitel; unterkapitel: Unterkapitel; index: number };

function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];
  for (const k of alleKapitel) {
    if (!k?.id || !k?.title) continue;
    items.push({ type: "chapter", kapitel: k });
    const uks = k.unterkapitel && Array.isArray(k.unterkapitel) ? k.unterkapitel : [];
    uks.forEach((u, index) => {
      if (u?.id && u?.title) {
        items.push({ type: "unterkapitel", kapitel: k, unterkapitel: u, index });
      }
    });
  }
  return items;
}

const searchIndex = buildSearchIndex();

function filterItems(query: string): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return searchIndex.slice(0, 30);
  return searchIndex.filter((item) => {
    if (item.type === "chapter") {
      return item.kapitel.title.toLowerCase().includes(q);
    }
    const titleMatch = item.unterkapitel.title.toLowerCase().includes(q);
    const chapterMatch = item.kapitel.title.toLowerCase().includes(q);
    return titleMatch || chapterMatch;
  }).slice(0, 40);
}

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const { completedChapters, streak } = useStore();
  const setResumeToUnterkapitelId = useAdaptiveStore((s) => s.setResumeToUnterkapitelId);

  const results = useMemo(() => filterItems(query), [query]);

  const selectItem = useCallback(
    (item: SearchItem) => {
      if (item.type === "chapter") {
        navigate(pathForChapter(item.kapitel.subject, item.kapitel.id));
      } else {
        setResumeToUnterkapitelId(item.unterkapitel.id);
        navigate(pathForChapter(item.kapitel.subject, item.kapitel.id));
      }
      setQuery("");
      setSelectedIndex(0);
      onClose();
    },
    [navigate, onClose, setResumeToUnterkapitelId]
  );

  useEffect(() => {
    if (open) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    setSelectedIndex((i) => (results.length ? Math.min(i, results.length - 1) : 0));
  }, [results.length]);

  useEffect(() => {
    const el = listRef.current;
    if (!el || selectedIndex < 0) return;
    const child = el.children[selectedIndex] as HTMLElement | undefined;
    child?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [selectedIndex, results]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => (i + 1) % Math.max(1, results.length));
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => (i - 1 + results.length) % Math.max(1, results.length));
        return;
      }
      if (e.key === "Enter" && results[selectedIndex]) {
        e.preventDefault();
        selectItem(results[selectedIndex]);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, results, selectedIndex, onClose, selectItem]);

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="fixed inset-0 z-100 flex items-start justify-center pt-[12vh] sm:pt-[18vh] px-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: -8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: -8 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-slate-200/80 dark:border-slate-700/50 overflow-hidden card-glass"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100 dark:border-slate-800">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Kapitel & Unterkapitel durchsuchen..."
              className="flex-1 bg-transparent text-sm outline-none text-midnight dark:text-slate-100 placeholder:text-slate-400"
              aria-label="Suche"
            />
            <kbd className="hidden sm:inline text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 px-2 py-1 rounded">Esc</kbd>
          </div>

          <div ref={listRef} className="max-h-[min(60vh,320px)] overflow-y-auto p-2">
            {results.length === 0 ? (
              <div className="py-8 text-center text-sm text-slate-500 dark:text-slate-400">
                {query.trim() ? "Keine Treffer. Tippe z.B. einen Kapitel- oder Unterkapitel-Titel." : "Tippe mindestens ein Zeichen zum Suchen."}
              </div>
            ) : (
              results.map((item, i) => (
                <ResultRow
                  key={item.type === "chapter" ? item.kapitel.id : item.unterkapitel.id}
                  item={item}
                  isSelected={i === selectedIndex}
                  completedChapters={completedChapters}
                  onSelect={() => selectItem(item)}
                />
              ))
            )}
          </div>

          <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>↑↓ Auswählen · Enter öffnen</span>
            <span className="flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-orange-500" />
              {streak} Tage Streak
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ResultRow({
  item,
  isSelected,
  completedChapters,
  onSelect,
}: {
  item: SearchItem;
  isSelected: boolean;
  completedChapters: string[];
  onSelect: () => void;
}) {
  const isChapter = item.type === "chapter";
  const kapitel = item.kapitel;
  const subjectLabel = SUBJECT_LABELS[kapitel.subject] ?? kapitel.subject;

  let progressLabel: string | null = null;
  let progressBadge: "done" | "partial" | null = null;

  if (isChapter) {
    const uks = kapitel.unterkapitel && Array.isArray(kapitel.unterkapitel) ? kapitel.unterkapitel : [];
    const total = uks.length;
    const done = uks.filter((u) => u?.id && completedChapters.includes(u.id)).length;
    if (total > 0) {
      progressLabel = `${done}/${total}`;
      progressBadge = done === total ? "done" : done > 0 ? "partial" : null;
    }
  } else {
    const done = completedChapters.includes(item.unterkapitel.id);
    if (done) {
      progressLabel = "Erledigt";
      progressBadge = "done";
    }
  }

  const title = isChapter ? kapitel.title : item.unterkapitel.title;
  const subtitle = isChapter ? `${subjectLabel} · Kapitel` : `${kapitel.title} · ${subjectLabel}`;

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.005 }}
      whileTap={{ scale: 0.995 }}
      className={`w-full text-left px-3 py-2.5 rounded-xl flex items-center gap-3 cursor-pointer transition-colors ${
        isSelected ? "bg-primary-500/10 dark:bg-primary-500/20 text-midnight dark:text-slate-100" : "hover:bg-slate-50 dark:hover:bg-slate-800/50"
      }`}
      onClick={onSelect}
    >
      <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
        <BookOpen className="w-4 h-4 text-primary-500" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-midnight dark:text-slate-100 truncate">{title}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{subtitle}</p>
      </div>
      {progressLabel && (
        <span
          className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${
            progressBadge === "done"
              ? "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400"
              : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
          }`}
        >
          {progressBadge === "done" && !progressLabel.includes("/") ? <CheckCircle2 className="w-3 h-3 inline mr-1 -mt-0.5" /> : null}
          {progressLabel}
        </span>
      )}
    </motion.button>
  );
}
