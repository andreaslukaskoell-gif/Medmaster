import type { RefObject } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CalendarClock,
  Sun,
  Moon,
  Search,
  Menu,
  ClipboardList,
  Focus,
  LayoutDashboard,
} from "lucide-react";
import { useStore } from "@/store/useStore";
import { StreakFlameIcon } from "@/components/dashboard/StreakFire";
import { useIsMounted } from "@/hooks/useIsMounted";
import { SyncStatus } from "./SyncStatus";
import { daysUntilMedAT } from "@/lib/utils";
import { OPEN_COMMAND_PALETTE } from "@/lib/commandPaletteConstants";
import { GlobalBreadcrumb } from "./GlobalBreadcrumb";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TopBarProps {
  menuButtonRef?: RefObject<HTMLButtonElement | null>;
  onMenuToggle: () => void;
  /** Sidebar/Drawer offen (z. B. mobile) → Burger-Icon dreht sich 90°. */
  sidebarOpen?: boolean;
  /** When true (e.g. chapter focus mode), show hamburger on all screen sizes. */
  showHamburgerAlways?: boolean;
  /** On BMS chapter page: show Fokusmodus toggle. */
  isChapterRoute?: boolean;
  /** User has enabled Fokusmodus → show minimal bar. */
  isFocusMode?: boolean;
  onToggleFocusMode?: () => void;
}

export function TopBar({
  menuButtonRef,
  onMenuToggle,
  sidebarOpen = false,
  showHamburgerAlways = false,
  isChapterRoute = false,
  isFocusMode = false,
  onToggleFocusMode,
}: TopBarProps) {
  const mounted = useIsMounted();
  const store = useStore();
  const streak = store?.streak ?? 0;
  const lastActiveDate = store?.lastActiveDate ?? "";
  const darkMode = store?.darkMode ?? false;
  const toggleDarkMode = store?.toggleDarkMode ?? (() => {});
  const onboardingCompleted = store?.onboardingCompleted ?? false;
  const hasCompletedMedATOnboarding = store?.hasCompletedMedATOnboarding ?? false;
  const showEinstufungstest = hasCompletedMedATOnboarding && !onboardingCompleted;
  const days = daysUntilMedAT();
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

  const showMinimalBar = isFocusMode && isChapterRoute;

  return (
    <motion.header
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        "sticky top-0 z-[100] flex items-center justify-between gap-3 px-4 sm:px-6 transition-all duration-200",
        showMinimalBar ? "h-12" : "h-[60px]",
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
          className={cn(
            "p-2 rounded-lg text-[var(--muted)] hover:bg-[var(--border)] hover:text-[var(--foreground)] transition-colors cursor-pointer shrink-0",
            (!showHamburgerAlways || showMinimalBar) && "lg:hidden"
          )}
          onClick={onMenuToggle}
          aria-label={sidebarOpen ? "Menü schließen" : "Menü öffnen"}
        >
          <motion.span
            className="inline-flex"
            animate={{ rotate: sidebarOpen ? 90 : 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Menu className="w-5 h-5" />
          </motion.span>
        </button>

        <Link
          to="/"
          className={cn(
            "p-2 rounded-lg text-[var(--muted)] hover:bg-[var(--border)] hover:text-[var(--foreground)] transition-colors shrink-0",
            showMinimalBar && "hidden"
          )}
          aria-label="Dashboard"
          title="Dashboard"
        >
          <LayoutDashboard className="w-5 h-5" />
        </Link>

        <GlobalBreadcrumb />

        {showEinstufungstest && !showMinimalBar && (
          <Link to="/onboarding" className="shrink-0">
            <Button
              size="sm"
              className="gap-1.5 bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] text-white border-0"
            >
              <ClipboardList className="w-4 h-4" />
              Einstufungstest
            </Button>
          </Link>
        )}
      </div>

      {/* Right: Fokusmodus (chapter) + stats + controls */}
      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
        {isChapterRoute && onToggleFocusMode && (
          <motion.button
            type="button"
            onClick={onToggleFocusMode}
            className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors cursor-pointer",
              isFocusMode
                ? "border-[var(--accent)] bg-[var(--accent)]/15 text-[var(--accent)]"
                : "border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--foreground)]/20"
            )}
            aria-label={isFocusMode ? "Fokusmodus aus" : "Fokusmodus an"}
            title={isFocusMode ? "Fokusmodus aus (F)" : "Fokusmodus an (F)"}
          >
            <Focus className={cn("w-4 h-4", isFocusMode && "text-[var(--accent)]")} />
            <span className="hidden sm:inline">{isFocusMode ? "Fokus aus" : "Fokusmodus"}</span>
          </motion.button>
        )}

        {!showMinimalBar && (
          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center gap-1.5 sm:gap-2"
          >
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
              <kbd className="hidden sm:inline text-[10px] bg-[var(--border)] text-[var(--muted)] px-1.5 py-0.5 rounded font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Streak */}
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[var(--border)] text-xs font-semibold text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
              <StreakFlameIcon
                streak={streak ?? 0}
                hasActivityToday={hasActivityToday}
                size="inherit"
                className="w-3.5 h-3.5 shrink-0"
              />
              <span className="min-w-5 text-center">{showStoreValues ? (streak ?? 0) : "–"}</span>
            </div>

            <SyncStatus />
          </motion.div>
        )}

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
