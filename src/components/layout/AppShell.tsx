import { useState, useEffect, useCallback, useRef, lazy, Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { OPEN_COMMAND_PALETTE } from "@/lib/commandPaletteConstants";

const CommandPalette = lazy(() =>
  import("@/components/CommandPalette").then((m) => ({ default: m.CommandPalette }))
);
const InterleavingOverlayLazy = lazy(() =>
  import("@/components/InterleavingOverlay").then((m) => ({ default: m.InterleavingOverlay }))
);
const RandomRewardToastLazy = lazy(() =>
  import("@/components/learning/RandomRewardToast").then((m) => ({ default: m.RandomRewardToast }))
);
const HotStreakOverlayLazy = lazy(() =>
  import("@/components/learning/HotStreakOverlay").then((m) => ({ default: m.HotStreakOverlay }))
);
const LevelUpOverlayLazy = lazy(() =>
  import("@/components/learning/LevelUpOverlay").then((m) => ({ default: m.LevelUpOverlay }))
);
const BadgeUnlockModalLazy = lazy(() =>
  import("@/components/badges/BadgeUnlockModal").then((m) => ({ default: m.BadgeUnlockModal }))
);
import { SyncToast } from "@/components/SyncToast";
import { OfflineBanner } from "@/components/OfflineBanner";
import { BreadcrumbProvider } from "@/contexts/BreadcrumbContext";
import { useInterleavingStore, shouldShowInterleavingOverlay } from "@/store/interleaving";
import { useNavigationStore } from "@/store/navigationStore";
import { useQuizSessionStore } from "@/store/quizSessionStore";
import { useStore } from "@/store/useStore";
import { useAuth } from "@/hooks/useAuth";
import { getLevelFromXP, getLevelName, getFeatureUnlockedAtLevel } from "@/lib/progression";
import { cn } from "@/lib/utils";

/** True when route is a BMS chapter (e.g. /bms/biologie/kap1-zellbiologie). */
function isChapterFocusRoute(pathname: string): boolean {
  const parts = pathname.split("/").filter(Boolean);
  return parts[0] === "bms" && parts.length >= 3;
}

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const pageTransition = {
  type: "tween" as const,
  duration: 0.3,
  ease: [0.25, 0.1, 0.25, 1] as const,
};

const INTERLEAVE_CHECK_MS = 60 * 1000; // 1 min

export function AppShell() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [cmdPaletteEverOpened, setCmdPaletteEverOpened] = useState(false);
  const [interleavingOverlayVisible, setInterleavingOverlayVisible] = useState(false);
  const location = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const setPath = useInterleavingStore((s) => s.setPath);
  const snooze = useInterleavingStore((s) => s.snooze);
  const currentArea = useInterleavingStore((s) => s.currentArea);
  const hotStreakActive = useQuizSessionStore((s) => s.hotStreakActive);
  const rewardMessage = useQuizSessionStore((s) => s.rewardMessage);
  const rewardType = useQuizSessionStore((s) => s.rewardType);
  const clearReward = useQuizSessionStore((s) => s.clearReward);
  const xp = useStore((s) => s.xp);
  const setXpMultiplier = useStore((s) => s.setXpMultiplier);
  const pendingBadgeId = useStore((s) => s.pendingBadgeId);
  const setPendingBadgeId = useStore((s) => s.setPendingBadgeId);
  const { isPremium } = useAuth();
  const levelRef = useRef<number>(0);
  const [levelUpState, setLevelUpState] = useState<{
    level: number;
    feature: string | null;
  } | null>(null);

  useEffect(() => {
    setXpMultiplier(isPremium ? 1.5 : 1);
  }, [isPremium, setXpMultiplier]);

  useEffect(() => {
    const currentLevel = getLevelFromXP(xp);
    if (levelRef.current === 0) {
      levelRef.current = currentLevel;
      return;
    }
    if (currentLevel > levelRef.current) {
      const t = setTimeout(
        () =>
          setLevelUpState({
            level: currentLevel,
            feature: getFeatureUnlockedAtLevel(currentLevel),
          }),
        0
      );
      levelRef.current = currentLevel;
      const timer = setTimeout(() => setLevelUpState(null), 5000);
      return () => {
        clearTimeout(t);
        clearTimeout(timer);
      };
    }
  }, [xp]);

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname, setPath]);

  // Back navigation: remember previous path so "Zurück" goes to last page or dashboard
  const prevPathRef = useRef<string | null>(null);
  const setPreviousPath = useNavigationStore((s) => s.setPreviousPath);
  useEffect(() => {
    const current = location.pathname;
    if (prevPathRef.current !== null && prevPathRef.current !== current) {
      setPreviousPath(prevPathRef.current);
    }
    prevPathRef.current = current;
  }, [location.pathname, setPreviousPath]);

  useEffect(() => {
    const check = () => setInterleavingOverlayVisible(shouldShowInterleavingOverlay());
    check();
    const id = setInterval(check, INTERLEAVE_CHECK_MS);
    return () => clearInterval(id);
  }, [location.pathname]);

  const dismissInterleaving = useCallback(() => {
    snooze();
    setInterleavingOverlayVisible(false);
  }, [snooze]);

  useEffect(() => {
    const openPalette = () => {
      setCommandPaletteOpen(true);
      setCmdPaletteEverOpened(true);
    };
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        openPalette();
      }
    };
    window.addEventListener("keydown", handler);
    window.addEventListener(OPEN_COMMAND_PALETTE, openPalette);
    return () => {
      window.removeEventListener("keydown", handler);
      window.removeEventListener(OPEN_COMMAND_PALETTE, openPalette);
    };
  }, []);

  // Unter 1024px (lg): Drawer-Modus; ab lg Sidebar immer sichtbar, Drawer schließen
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const handler = () => {
      if (mql.matches) setMobileOpen(false);
    };
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // Body-Scroll sperren, wenn mobiler Drawer offen
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const closeSidebar = useCallback(() => {
    setMobileOpen(false);
    requestAnimationFrame(() => {
      menuButtonRef.current?.focus({ preventScroll: true });
    });
  }, []);

  const isChapterRoute = isChapterFocusRoute(location.pathname);

  return (
    <BreadcrumbProvider>
      <div className="min-h-screen bg-[var(--background)]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-[var(--background)] focus:text-[var(--foreground)] focus:rounded-lg focus:ring-2 focus:ring-[var(--color-primary-500)] focus:outline-none"
        >
          Zum Hauptinhalt springen
        </a>
        {cmdPaletteEverOpened && (
          <Suspense fallback={null}>
            <CommandPalette
              open={commandPaletteOpen}
              onClose={() => setCommandPaletteOpen(false)}
            />
          </Suspense>
        )}
        <Suspense fallback={null}>
          <InterleavingOverlayLazy
            visible={interleavingOverlayVisible}
            currentArea={currentArea}
            onDismiss={dismissInterleaving}
          />
        </Suspense>
        <SyncToast />
        <OfflineBanner />
        <Suspense fallback={null}>
          <HotStreakOverlayLazy active={hotStreakActive} />
          <RandomRewardToastLazy
            message={rewardMessage}
            type={rewardType}
            onDismiss={clearReward}
          />
          <LevelUpOverlayLazy
            level={levelUpState?.level}
            levelName={levelUpState?.level ? getLevelName(levelUpState.level) : undefined}
            feature={levelUpState?.feature}
            onDismiss={() => setLevelUpState(null)}
          />
          <BadgeUnlockModalLazy
            badgeId={pendingBadgeId}
            onDismiss={() => setPendingBadgeId(null)}
          />
        </Suspense>
        <Sidebar mobileOpen={mobileOpen} onClose={closeSidebar} />
        <div
          className={cn(
            "min-h-screen flex flex-col relative z-50 w-full transition-colors duration-200",
            "bg-[var(--background)]"
          )}
        >
          <TopBar
            menuButtonRef={menuButtonRef}
            onMenuToggle={() => setMobileOpen(!mobileOpen)}
            sidebarOpen={mobileOpen}
            showHamburgerAlways={true}
          />
          <main
            id="main-content"
            tabIndex={-1}
            className={cn(
              "flex-1 p-4 lg:p-6 pb-8 w-full transition-[max-width,padding-top] duration-200",
              "pt-14 sm:pt-16",
              isChapterRoute ? "max-w-none mx-auto" : "max-w-5xl mx-auto"
            )}
          >
            <ErrorBoundary>
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={pageTransition}
                  className="min-h-[60vh]"
                >
                  <Outlet />
                </motion.div>
              </AnimatePresence>
            </ErrorBoundary>
          </main>
        </div>
      </div>
    </BreadcrumbProvider>
  );
}
