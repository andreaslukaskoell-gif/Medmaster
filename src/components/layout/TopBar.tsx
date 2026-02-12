import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Flame, Star, CalendarClock, Sun, Moon, Search, Menu, X } from "lucide-react";
import { useStore } from "@/store/useStore";
import { daysUntilMedAT } from "@/lib/utils";
import { bmsChapters } from "@/data/bmsChapters";
import { bmsQuestions } from "@/data/bmsQuestions";

interface TopBarProps {
  onMenuToggle: () => void;
}

export function TopBar({ onMenuToggle }: TopBarProps) {
  const { xp, streak, darkMode, toggleDarkMode } = useStore();
  const days = daysUntilMedAT();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const searchResults = searchQuery.length >= 2
    ? [
        ...bmsChapters
          .filter((c) => c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.sections.some((s) => s.heading.toLowerCase().includes(searchQuery.toLowerCase())))
          .slice(0, 4)
          .map((c) => ({ type: "chapter" as const, title: c.title, sub: c.subject, path: "/bms" })),
        ...bmsQuestions
          .filter((q) => q.text.toLowerCase().includes(searchQuery.toLowerCase()))
          .slice(0, 3)
          .map((q) => ({ type: "question" as const, title: q.text.slice(0, 60) + "...", sub: q.subject, path: "/bms" })),
      ]
    : [];

  return (
    <>
      <header className="h-14 bg-white dark:bg-gray-900 border-b border-border dark:border-gray-800 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <button className="lg:hidden text-gray-600 dark:text-gray-300 cursor-pointer" onClick={onMenuToggle}>
            <Menu className="w-5 h-5" />
          </button>
          <div className="hidden sm:flex items-center gap-2">
            <CalendarClock className="w-4 h-4 text-primary-700" />
            <span className="text-sm text-gray-900 dark:text-gray-100">
              noch <span className="font-bold text-primary-700">{days}</span> Tage
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-muted hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Suche...</span>
            <kbd className="hidden sm:inline text-[10px] bg-gray-200 dark:bg-gray-600 px-1 py-0.5 rounded">Ctrl+K</kbd>
          </button>

          <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/30 px-2.5 py-1 rounded-lg">
            <Star className="w-3.5 h-3.5 text-yellow-500" />
            <span className="text-xs font-bold text-yellow-700 dark:text-yellow-400">{xp}</span>
          </div>

          <div className="flex items-center gap-1 bg-orange-50 dark:bg-orange-900/30 px-2.5 py-1 rounded-lg">
            <Flame className="w-3.5 h-3.5 text-orange-500" />
            <span className="text-xs font-bold text-orange-700 dark:text-orange-400">{streak}</span>
          </div>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 cursor-pointer"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full flex items-center justify-center font-bold text-xs">
            U
          </div>
        </div>
      </header>

      {searchOpen && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center pt-[20vh]">
          <div className="absolute inset-0 bg-black/40" onClick={() => setSearchOpen(false)} />
          <div className="relative w-full max-w-lg mx-4 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-border dark:border-gray-700">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border dark:border-gray-700">
              <Search className="w-4 h-4 text-muted" />
              <input
                ref={searchRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Kapitel, Fragen, Begriffe suchen..."
                className="flex-1 bg-transparent text-sm outline-none text-gray-900 dark:text-gray-100 placeholder:text-muted"
              />
              <button onClick={() => setSearchOpen(false)} className="text-muted hover:text-gray-900 cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>
            {searchResults.length > 0 && (
              <div className="max-h-64 overflow-y-auto p-2">
                {searchResults.map((r, i) => (
                  <button
                    key={i}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                    onClick={() => { navigate(r.path); setSearchOpen(false); setSearchQuery(""); }}
                  >
                    <p className="text-sm text-gray-900 dark:text-gray-100">{r.title}</p>
                    <p className="text-xs text-muted capitalize">{r.type === "chapter" ? "Kapitel" : "Frage"} - {r.sub}</p>
                  </button>
                ))}
              </div>
            )}
            {searchQuery.length >= 2 && searchResults.length === 0 && (
              <div className="p-4 text-sm text-muted text-center">Keine Ergebnisse gefunden.</div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
