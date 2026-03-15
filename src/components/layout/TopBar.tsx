import { Link } from "react-router-dom";
import { Sun, Moon, Search, Award, Menu } from "lucide-react";
import { useStore } from "@/store/useStore";
import { StreakFlameIcon } from "@/components/dashboard/StreakFire";
import { useIsMounted } from "@/hooks/useIsMounted";
import { OPEN_COMMAND_PALETTE } from "@/lib/commandPaletteConstants";
import { getLevelFromXP } from "@/lib/progression";
import { GlobalBreadcrumb } from "./GlobalBreadcrumb";

export function TopBar({ onMenuToggle }: { onMenuToggle?: () => void }) {
  const mounted = useIsMounted();
  const store = useStore();
  const streak = store?.streak ?? 0;
  const xp = store?.xp ?? 0;
  const level = getLevelFromXP(xp);
  const lastActiveDate = store?.lastActiveDate ?? "";
  const darkMode = store?.darkMode ?? false;
  const toggleDarkMode = store?.toggleDarkMode ?? (() => {});
  const todayStr = new Date().toISOString().split("T")[0];
  const hasActivityToday = lastActiveDate === todayStr;

  const openCommandPalette = () => {
    window.dispatchEvent(new CustomEvent(OPEN_COMMAND_PALETTE));
  };

  return (
    <header className="sticky top-0 z-[100] flex items-center justify-between gap-3 px-6 h-12 bg-[var(--topbar-bg)] backdrop-blur-sm border-b border-[var(--border)]/40">
      {/* Left: menu + breadcrumb */}
      <div className="flex items-center gap-3 min-w-0 flex-1">
        {onMenuToggle && (
          <button
            type="button"
            onClick={onMenuToggle}
            className="p-1.5 -ml-1.5 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/5 transition-colors cursor-pointer"
            aria-label="Menü öffnen"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}
        <GlobalBreadcrumb />
      </div>

      {/* Right: controls */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Search — icon only, tooltip hint */}
        <button
          type="button"
          onClick={openCommandPalette}
          className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/5 transition-colors cursor-pointer"
          aria-label="Suchen (⌘K)"
          title="Suchen (⌘K)"
        >
          <Search className="w-4 h-4" />
        </button>

        {/* Level + Streak — grouped with divider */}
        <div className="flex items-center text-xs text-[var(--muted)]">
          <Link
            to="/fortschritt"
            className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg hover:bg-[var(--foreground)]/5 hover:text-[var(--foreground)] transition-colors"
          >
            <Award className="w-3.5 h-3.5 shrink-0 text-[var(--accent)]" />
            <span className="min-w-3 text-center font-medium">{mounted ? level : "–"}</span>
          </Link>
          <div className="w-px h-3.5 bg-[var(--border)] mx-0.5" />
          <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg hover:bg-[var(--foreground)]/5 hover:text-[var(--foreground)] transition-colors">
            <StreakFlameIcon
              streak={streak}
              hasActivityToday={hasActivityToday}
              size="inherit"
              className="w-3.5 h-3.5 shrink-0"
            />
            <span className="min-w-3 text-center font-medium">{mounted ? streak : "–"}</span>
          </div>
        </div>

        {/* Dark mode toggle */}
        <button
          type="button"
          onClick={toggleDarkMode}
          className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/5 transition-colors cursor-pointer"
          aria-label={darkMode ? "Hellmodus" : "Darkmodus"}
        >
          {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
}
