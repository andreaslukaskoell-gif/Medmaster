import type { RefObject } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sun, Moon, Search, Menu, Award } from "lucide-react";
import { useStore } from "@/store/useStore";
import { StreakFlameIcon } from "@/components/dashboard/StreakFire";
import { useIsMounted } from "@/hooks/useIsMounted";
import { SyncStatus } from "./SyncStatus";
import { OPEN_COMMAND_PALETTE } from "@/lib/commandPaletteConstants";
import { getLevelFromXP } from "@/lib/progression";

import { cn } from "@/lib/utils";

interface TopBarProps {
  menuButtonRef?: RefObject<HTMLButtonElement | null>;
  onMenuToggle: () => void;
  /** Sidebar/Drawer offen (z. B. mobile) → Burger-Icon dreht sich 90°. */
  sidebarOpen?: boolean;
}

export function TopBar({ menuButtonRef, onMenuToggle, sidebarOpen = false }: TopBarProps) {
  const mounted = useIsMounted();
  const store = useStore();
  const streak = store?.streak ?? 0;
  const xp = store?.xp ?? 0;
  const level = getLevelFromXP(xp);
  const lastActiveDate = store?.lastActiveDate ?? "";
  const darkMode = store?.darkMode ?? false;
  const toggleDarkMode = store?.toggleDarkMode ?? (() => {});
  const showStoreValues = mounted;
  const todayStr = new Date().toISOString().split("T")[0];
  const hasActivityToday = lastActiveDate === todayStr;
  const [scrolled, setScrolled] = useState(false);

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
        "sticky top-0 z-[100] flex items-center justify-between gap-3 px-4 sm:px-6 transition-all duration-200",
        "h-[60px]",
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
          className="p-2 rounded-lg text-[var(--muted)] hover:bg-[var(--border)] hover:text-[var(--foreground)] transition-colors cursor-pointer shrink-0 lg:hidden"
          onClick={onMenuToggle}
          aria-label={sidebarOpen ? "Menü schließen" : "Menü öffnen"}
        >
          <motion.span
            className="inline-flex items-center justify-center"
            style={{ transformOrigin: "50% 50%" }}
            animate={{ rotate: sidebarOpen ? 90 : 0 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
          >
            <Menu className="w-5 h-5" />
          </motion.span>
        </button>

        {/* Dashboard link hidden — sidebar has it on lg+, BottomTabBar on mobile */}
      </div>

      {/* Right: stats + controls */}
      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center gap-1.5 sm:gap-2"
        >
          {/* Search */}
          <button
            type="button"
            onClick={openCommandPalette}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--border)] text-sm text-[var(--muted)] hover:border-[var(--color-primary-500)]/50 hover:text-[var(--foreground)] transition-colors cursor-pointer"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-xs">Suche</span>
            <kbd className="hidden sm:inline text-[10px] bg-[var(--border)] text-[var(--muted)] px-1.5 py-0.5 rounded font-mono">
              ⌘K
            </kbd>
          </button>

          {/* Level */}
          <Link
            to="/fortschritt"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[var(--border)] text-xs font-semibold text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--color-primary-500)]/50 transition-colors"
          >
            <Award className="w-3.5 h-3.5 shrink-0 text-[var(--accent)]" />
            <span className="min-w-3 text-center">{showStoreValues ? level : "–"}</span>
          </Link>

          {/* Streak */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[var(--border)] text-xs font-semibold text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
            <StreakFlameIcon
              streak={streak ?? 0}
              hasActivityToday={hasActivityToday}
              size="inherit"
              className="w-3.5 h-3.5 shrink-0"
            />
            <span className="min-w-3 text-center">{showStoreValues ? (streak ?? 0) : "–"}</span>
          </div>

          <SyncStatus />
        </motion.div>

        {/* Dark mode toggle: always visible */}
        <button
          type="button"
          onClick={toggleDarkMode}
          className="p-2 rounded-lg border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--foreground)]/20 transition-colors cursor-pointer"
          aria-label={darkMode ? "Hellmodus" : "Darkmodus"}
        >
          {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </motion.header>
  );
}
