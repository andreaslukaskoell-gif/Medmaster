import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Search, Award, Menu } from "lucide-react";
import { useStore } from "@/store/useStore";
import { StreakFlameIcon } from "@/components/dashboard/StreakFire";
import { useIsMounted } from "@/hooks/useIsMounted";
import { OPEN_COMMAND_PALETTE } from "@/lib/commandPaletteConstants";
import { getLevelFromXP } from "@/lib/progression";
import { useViewportMode } from "@/hooks/useViewportMode";
import { GlobalBreadcrumb } from "./GlobalBreadcrumb";
import { Tooltip } from "@/components/ui/Tooltip";

/** Map pathname prefix to a short mobile page title. */
function getMobileTitle(pathname: string): string {
  if (pathname === "/" || pathname === "/dashboard") return "MedMaster";
  if (pathname.startsWith("/bms")) return "BMS";
  if (pathname.startsWith("/kff")) return "KFF";
  if (pathname.startsWith("/tv")) return "TV";
  if (pathname.startsWith("/sek")) return "SEK";
  if (pathname.startsWith("/fortschritt")) return "Fortschritt";
  if (pathname.startsWith("/simulation")) return "Simulation";
  if (pathname.startsWith("/fragen-trainer")) return "Fragen-Trainer";
  if (pathname.startsWith("/lernplan")) return "Lernplan";
  if (pathname.startsWith("/einstellungen")) return "Einstellungen";
  return "MedMaster";
}

export function TopBar({ onMenuToggle }: { onMenuToggle?: () => void }) {
  const mounted = useIsMounted();
  const location = useLocation();
  const streak = useStore((s) => s.streak) ?? 0;
  const xp = useStore((s) => s.xp) ?? 0;
  const level = getLevelFromXP(xp);
  const lastActiveDate = useStore((s) => s.lastActiveDate) ?? "";
  const darkMode = useStore((s) => s.darkMode) ?? false;
  const toggleDarkMode = useStore((s) => s.toggleDarkMode) ?? (() => {});
  const todayStr = new Date().toISOString().split("T")[0];
  const hasActivityToday = lastActiveDate === todayStr;

  const { isMobile } = useViewportMode();

  const openCommandPalette = () => {
    window.dispatchEvent(new CustomEvent(OPEN_COMMAND_PALETTE));
  };

  return (
    <header
      className={`topbar-glass sticky top-0 z-[100] flex items-center justify-between gap-2 ${isMobile ? "h-[3.25rem] px-3" : "h-12 px-6 gap-3"}`}
    >
      {/* Left: menu + breadcrumb/title */}
      <div className="flex items-center gap-2 min-w-0 flex-1">
        {onMenuToggle && (
          <button
            type="button"
            onClick={onMenuToggle}
            className="p-1.5 -ml-1.5 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/5 transition-colors cursor-pointer"
            aria-label="Menü öffnen"
          >
            <Menu className={isMobile ? "w-[18px] h-[18px]" : "w-5 h-5"} />
          </button>
        )}
        {!isMobile && <GlobalBreadcrumb />}
        {isMobile && (
          <span className="text-sm font-semibold text-[var(--text-primary)] truncate">
            {getMobileTitle(location.pathname)}
          </span>
        )}
      </div>

      {/* Right: controls */}
      <div className={`flex items-center shrink-0 ${isMobile ? "gap-0.5" : "gap-3"}`}>
        {/* Search */}
        {!isMobile && (
          <Tooltip content="Suchen (⌘K)" position="bottom">
            <button
              type="button"
              onClick={openCommandPalette}
              className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/5 transition-colors cursor-pointer"
              aria-label="Suchen (⌘K)"
            >
              <Search className="w-4 h-4" />
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--border)] text-[var(--muted)] leading-none select-none">
                ⌘K
              </span>
            </button>
          </Tooltip>
        )}
        {isMobile && (
          <button
            type="button"
            onClick={openCommandPalette}
            className="p-2 rounded-lg text-[var(--muted)] active:text-[var(--foreground)] transition-colors cursor-pointer"
            aria-label="Suchen"
          >
            <Search className="w-[18px] h-[18px]" />
          </button>
        )}

        {/* Level + Streak */}
        <div
          className={`flex items-center text-xs text-[var(--muted)] ${isMobile ? "bg-[var(--foreground)]/5 rounded-full px-1" : ""}`}
        >
          <Tooltip content="Dein Level" position="bottom">
            <Link
              to="/fortschritt"
              className={`flex items-center gap-1 ${isMobile ? "px-1.5 py-1" : "px-1.5 py-1.5"} rounded-lg hover:bg-[var(--foreground)]/5 hover:text-[var(--foreground)] transition-colors`}
            >
              <Award className="w-3.5 h-3.5 shrink-0 text-[var(--accent)]" />
              <span className="min-w-3 text-center font-medium">{mounted ? level : "–"}</span>
            </Link>
          </Tooltip>
          <div className="w-px h-3.5 bg-[var(--border)] mx-0.5" />
          <Tooltip content="Tage-Streak" position="bottom">
            <div
              className={`flex items-center gap-1 ${isMobile ? "px-1.5 py-1" : "px-1.5 py-1.5"} rounded-lg hover:bg-[var(--foreground)]/5 hover:text-[var(--foreground)] transition-colors`}
            >
              <StreakFlameIcon
                streak={streak}
                hasActivityToday={hasActivityToday}
                size="inherit"
                className="w-3.5 h-3.5 shrink-0"
              />
              <span className="min-w-3 text-center font-medium">{mounted ? streak : "–"}</span>
            </div>
          </Tooltip>
        </div>

        {/* Dark mode toggle — always visible */}
        <button
          type="button"
          onClick={toggleDarkMode}
          className={`${isMobile ? "p-1.5" : "p-2"} rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/5 transition-colors cursor-pointer`}
          aria-label={darkMode ? "Hellmodus" : "Darkmodus"}
        >
          {darkMode ? (
            <Sun className={isMobile ? "w-[18px] h-[18px]" : "w-4 h-4"} />
          ) : (
            <Moon className={isMobile ? "w-[18px] h-[18px]" : "w-4 h-4"} />
          )}
        </button>

        {/* Viewport mode is auto-detected only — no manual toggle */}
      </div>
    </header>
  );
}
