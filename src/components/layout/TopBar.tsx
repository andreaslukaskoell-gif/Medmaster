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
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openCommandPalette = () => {
    window.dispatchEvent(new CustomEvent(OPEN_COMMAND_PALETTE));
  };

  return (
    <motion.header
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        "sticky top-0 z-[100] flex items-center justify-between gap-3 px-4 sm:px-6 h-[60px]",
        "bg-[var(--topbar-bg)] backdrop-blur-sm",
        "border-b border-[var(--border)]",
        "transition-[border-color,background-color] duration-200",
        scrolled && "shadow-[0_1px_0_0_var(--border)]"
      )}
    >
      {/* Left: hamburger + breadcrumb */}
      <div className="flex items-center gap-3 min-w-0 flex-1">
        <button
          ref={menuButtonRef}
          type="button"
          className="lg:hidden p-2 rounded-lg text-[var(--muted)] hover:bg-[var(--border)] hover:text-[var(--foreground)] transition-colors cursor-pointer shrink-0"
          onClick={onMenuToggle}
          aria-label="Menü öffnen"
        >
          <Menu className="w-5 h-5" />
        </button>

        <GlobalBreadcrumb />

        {!onboardingCompleted && (
          <Link to="/onboarding" className="shrink-0">
            <Button size="sm" className="gap-1.5 bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] text-white border-0">
              <ClipboardList className="w-4 h-4" />
              Einstufungstest
            </Button>
          </Link>
        )}
      </div>

      {/* Right: stats + controls */}
      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">

        {/* Days counter */}
        <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border)] text-sm">
          <CalendarClock className="w-3.5 h-3.5 text-[var(--color-primary-500)] shrink-0" />
          <span className="text-[var(--muted)] whitespace-nowrap">
            <span className="font-semibold text-[var(--foreground)]">{days}</span>
            <span className="ml-1 text-xs">Tage</span>
          </span>
        </div>

        {/* Search */}
        <button
          type="button"
          onClick={openCommandPalette}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--border)] text-sm text-[var(--muted)] hover:border-[var(--color-primary-500)]/50 hover:text-[var(--foreground)] transition-colors cursor-pointer"
        >
          <Search className="w-3.5 h-3.5" />
          <span className="hidden sm:inline text-xs">Suche</span>
          <kbd className="hidden sm:inline text-[10px] bg-[var(--border)] text-[var(--muted)] px-1.5 py-0.5 rounded font-mono">⌘K</kbd>
        </button>

        {/* XP */}
        <motion.div
          layout
          className={cn(
            "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[var(--border)] text-xs font-semibold transition-all duration-200",
            xpFlash
              ? "border-amber-400/60 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400"
              : "text-[var(--muted)] hover:text-[var(--foreground)]"
          )}
        >
          <Star className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span className="min-w-5 text-center">
            {showStoreValues ? (xp ?? 0) : "–"}
          </span>
        </motion.div>

        {/* Streak */}
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[var(--border)] text-xs font-semibold text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
          <Flame className="w-3.5 h-3.5 text-orange-500 shrink-0" />
          <span className="min-w-5 text-center">
            {showStoreValues ? (streak ?? 0) : "–"}
          </span>
        </div>

        <SyncStatus />

        {/* Dark mode toggle */}
        <button
          type="button"
          onClick={toggleDarkMode}
          className="p-2 rounded-lg border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--foreground)]/20 transition-colors cursor-pointer"
          aria-label={darkMode ? "Hellmodus" : "Darkmodus"}
        >
          {darkMode
            ? <Sun className="w-4 h-4" />
            : <Moon className="w-4 h-4" />
          }
        </button>
      </div>
    </motion.header>
  );
}
