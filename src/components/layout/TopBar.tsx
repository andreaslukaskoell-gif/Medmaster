import type { RefObject } from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Flame, Star, CalendarClock, Sun, Moon, Search, Menu, ClipboardList } from "lucide-react";
import { useStore } from "@/store/useStore";
import { useIsMounted } from "@/hooks/useIsMounted";
import { SyncStatus } from "./SyncStatus";
import { daysUntilMedAT } from "@/lib/utils";
import { OPEN_COMMAND_PALETTE } from "@/components/CommandPalette";
import { GlobalBreadcrumb } from "./GlobalBreadcrumb";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MEDICAL_BLUE = "#0055ff";

interface TopBarProps {
  menuButtonRef?: RefObject<HTMLButtonElement | null>;
  onMenuToggle: () => void;
}

export function TopBar({ menuButtonRef, onMenuToggle }: TopBarProps) {
  const mounted = useIsMounted();
  const store = useStore();
  const xp = store?.xp ?? 0;
  const streak = store?.streak ?? 0;
  const darkMode = store?.darkMode ?? false;
  const toggleDarkMode = store?.toggleDarkMode ?? (() => {});
  const onboardingCompleted = store?.onboardingCompleted ?? false;
  const days = daysUntilMedAT();
  const showStoreValues = mounted;
  const [scrolled, setScrolled] = useState(false);
  const [xpFlash, setXpFlash] = useState(false);
  const prevXpRef = useRef<number>(xp);

  useEffect(() => {
    if (showStoreValues && typeof xp === "number" && xp > prevXpRef.current) {
      setXpFlash(true);
      const t = setTimeout(() => setXpFlash(false), 600);
      return () => clearTimeout(t);
    }
    prevXpRef.current = xp ?? 0;
  }, [xp, showStoreValues]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openCommandPalette = () => {
    window.dispatchEvent(new CustomEvent(OPEN_COMMAND_PALETTE));
  };

  return (
    <>
      <motion.header
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "sticky top-0 z-[100] flex items-center justify-between gap-3 px-4 sm:px-5 lg:px-6 transition-all duration-300",
          "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-100/80 dark:border-gray-800/50 shadow-sm",
          scrolled ? "h-12 sm:h-12 py-0" : "h-14 sm:h-16 py-0"
        )}
      >
        <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-1 min-w-0 flex-1">
          <motion.button
            ref={menuButtonRef}
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-2.5 rounded-2xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer shrink-0"
            onClick={onMenuToggle}
            aria-label="Menü öffnen"
          >
            <Menu className="w-5 h-5" />
          </motion.button>
          <GlobalBreadcrumb />
          {!scrolled && (
            <p className="hidden lg:block text-xs italic text-slate-400 dark:text-slate-500 truncate max-w-[180px]">
              By doctors for future doctors
            </p>
          )}
          {!onboardingCompleted && (
            <Link to="/onboarding" className="shrink-0">
              <Button size="sm" className="gap-1.5 bg-primary-600 hover:bg-primary-700 text-white">
                <ClipboardList className="w-4 h-4" />
                Einstufungstest
              </Button>
            </Link>
          )}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-gray-50 dark:bg-gray-800/50 shrink-0">
            <CalendarClock className="w-4 h-4 shrink-0" style={{ color: MEDICAL_BLUE }} />
            <span className="text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">
              noch <span className="font-bold" style={{ color: MEDICAL_BLUE }}>{days}</span> Tage
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={openCommandPalette}
            className="flex items-center gap-2 px-3 py-2 sm:py-2.5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer shadow-sm"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Suche...</span>
            <kbd className="hidden sm:inline text-[10px] bg-gray-200 dark:bg-gray-600 px-1.5 py-0.5 rounded">⌘K</kbd>
          </motion.button>

          <motion.div
            layout
            className={cn(
              "flex items-center gap-1.5 sm:gap-2 bg-amber-50 dark:bg-amber-900/20 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-2xl border border-amber-100 dark:border-amber-800/30 transition-shadow duration-300",
              xpFlash && "ring-2 ring-amber-400/80 dark:ring-amber-500/60 shadow-lg shadow-amber-400/30"
            )}
          >
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 shrink-0" />
            <span className="text-xs font-bold text-amber-700 dark:text-amber-400 min-w-6 text-center">
              {showStoreValues ? (xp ?? 0) : "–"}
            </span>
          </motion.div>

          <div className="flex items-center gap-1.5 sm:gap-2 bg-orange-50 dark:bg-orange-900/20 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-2xl border border-orange-100 dark:border-orange-800/30">
            <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500 shrink-0" />
            <span className="text-xs font-bold text-orange-700 dark:text-orange-400 min-w-6 text-center">
              {showStoreValues ? (streak ?? 0) : "–"}
            </span>
          </div>

          <SyncStatus />

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
    </>
  );
}
