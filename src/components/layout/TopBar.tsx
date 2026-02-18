import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Star, CalendarClock, Sun, Moon, Search, Menu, X } from "lucide-react";
import { useStore } from "@/store/useStore";
import { daysUntilMedAT } from "@/lib/utils";
import { alleKapitel } from "@/data/bmsKapitel";
import { bmsQuestions } from "@/data/bmsQuestions";

const MEDICAL_BLUE = "#0055ff";

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
        ...alleKapitel
          .filter((k) => k.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            k.unterkapitel.some((u) => u.title.toLowerCase().includes(searchQuery.toLowerCase())))
          .slice(0, 4)
          .map((k) => ({ type: "chapter" as const, title: k.title, sub: k.subject, path: "/bms" })),
        ...bmsQuestions
          .filter((q) => q.text.toLowerCase().includes(searchQuery.toLowerCase()))
          .slice(0, 3)
          .map((q) => ({ type: "question" as const, title: q.text.slice(0, 60) + "...", sub: q.subject, path: "/bms" })),
      ]
    : [];

  return (
    <>
      <motion.header
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="h-14 sm:h-16 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800/50 flex items-center justify-between px-4 sm:px-5 lg:px-6 sticky top-0 z-30 shadow-sm"
      >
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-2.5 rounded-2xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
            onClick={onMenuToggle}
            aria-label="Menü öffnen"
          >
            <Menu className="w-5 h-5" />
          </motion.button>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-gray-50 dark:bg-gray-800/50">
            <CalendarClock className="w-4 h-4 shrink-0" style={{ color: MEDICAL_BLUE }} />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              noch <span className="font-bold" style={{ color: MEDICAL_BLUE }}>{days}</span> Tage
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 px-3 py-2 sm:py-2.5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer shadow-sm"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Suche...</span>
            <kbd className="hidden sm:inline text-[10px] bg-gray-200 dark:bg-gray-600 px-1.5 py-0.5 rounded">⌘K</kbd>
          </motion.button>

          <div className="flex items-center gap-1.5 sm:gap-2 bg-amber-50 dark:bg-amber-900/20 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-2xl border border-amber-100 dark:border-amber-800/30">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 shrink-0" />
            <span className="text-xs font-bold text-amber-700 dark:text-amber-400">{xp}</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 bg-orange-50 dark:bg-orange-900/20 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-2xl border border-orange-100 dark:border-orange-800/30">
            <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500 shrink-0" />
            <span className="text-xs font-bold text-orange-700 dark:text-orange-400">{streak}</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className="p-2.5 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 cursor-pointer hidden sm:block"
            aria-label={darkMode ? "Hellmodus" : "Darkmodus"}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </motion.button>

          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-2xl flex items-center justify-center font-bold text-xs text-white shadow-sm shrink-0" style={{ backgroundColor: MEDICAL_BLUE }}>
            U
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-start justify-center pt-[15vh] sm:pt-[20vh] px-4"
            onClick={() => setSearchOpen(false)}
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                  <Search className="w-4 h-4 text-gray-400" />
                  <input
                    ref={searchRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Kapitel, Fragen, Begriffe suchen..."
                    className="flex-1 bg-transparent text-sm outline-none text-gray-900 dark:text-gray-100 placeholder:text-gray-400"
                  />
                  <button onClick={() => setSearchOpen(false)} className="p-2 rounded-xl text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-600 cursor-pointer">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                {searchResults.length > 0 && (
                  <div className="max-h-64 overflow-y-auto p-2">
                    {searchResults.map((r, i) => (
                      <motion.button
                        key={i}
                        whileHover={{ backgroundColor: "var(--color-gray-100)" }}
                        whileTap={{ scale: 0.99 }}
                        className="w-full text-left px-3 py-2.5 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer text-sm"
                        onClick={() => { navigate(r.path); setSearchOpen(false); setSearchQuery(""); }}
                      >
                        <p className="text-gray-900 dark:text-gray-100 font-medium">{r.title}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 capitalize mt-0.5">{r.type === "chapter" ? "Kapitel" : "Frage"} · {r.sub}</p>
                      </motion.button>
                    ))}
                  </div>
                )}
                {searchQuery.length >= 2 && searchResults.length === 0 && (
                  <div className="p-6 text-sm text-gray-500 dark:text-gray-400 text-center">Keine Ergebnisse gefunden.</div>
                )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
