import { useState, useEffect, useCallback, useRef, lazy, Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { BottomTabBar } from "./BottomTabBar";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { OPEN_COMMAND_PALETTE } from "@/lib/commandPaletteConstants";

const CommandPalette = lazy(() => import("@/components/CommandPalette").then(m => ({ default: m.CommandPalette })));
const InterleavingOverlayLazy = lazy(() => import("@/components/InterleavingOverlay").then(m => ({ default: m.InterleavingOverlay })));
const RandomRewardToastLazy = lazy(() => import("@/components/learning/RandomRewardToast").then(m => ({ default: m.RandomRewardToast })));
const HotStreakOverlayLazy = lazy(() => import("@/components/learning/HotStreakOverlay").then(m => ({ default: m.HotStreakOverlay })));
const LevelUpOverlayLazy = lazy(() => import("@/components/learning/LevelUpOverlay").then(m => ({ default: m.LevelUpOverlay })));
const BadgeUnlockModalLazy = lazy(() => import("@/components/badges/BadgeUnlockModal").then(m => ({ default: m.BadgeUnlockModal })));
import { SyncToast } from "@/components/SyncToast";
import { BreadcrumbProvider } from "@/contexts/BreadcrumbContext";
import { useInterleavingStore, shouldShowInterleavingOverlay } from "@/store/interleaving";
import { useQuizSessionStore } from "@/store/quizSessionStore";
import { useStore } from "@/store/useStore";
import { useAuth } from "@/hooks/useAuth";
import { getLevelFromXP, getLevelName, getFeatureUnlockedAtLevel } from "@/lib/progression";
import { cn } from "@/lib/utils";
import { SIDEBAR_MAIN_ML } from "./sidebarLayout";

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const pageTransition = { type: "tween" as const, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const };

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
  const [levelUpState, setLevelUpState] = useState<{ level: number; feature: string | null } | null>(null);

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
      setLevelUpState({
        level: currentLevel,
        feature: getFeatureUnlockedAtLevel(currentLevel),
      });
      levelRef.current = currentLevel;

      // Auto-dismiss after 5 seconds
      const timer = setTimeout(() => setLevelUpState(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [xp]);

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname, setPath]);

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

  return (
    <BreadcrumbProvider>
      <div className="min-h-screen bg-[var(--background)]">
        {cmdPaletteEverOpened && (
          <Suspense fallback={null}>
            <CommandPalette open={commandPaletteOpen} onClose={() => setCommandPaletteOpen(false)} />
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
        <Suspense fallback={null}>
          <HotStreakOverlayLazy active={hotStreakActive} />
          <RandomRewardToastLazy message={rewardMessage} type={rewardType} onDismiss={clearReward} />
          <LevelUpOverlayLazy
            level={levelUpState?.level}
            levelName={levelUpState?.level ? getLevelName(levelUpState.level) : undefined}
            feature={levelUpState?.feature}
            onDismiss={() => setLevelUpState(null)}
          />
          <BadgeUnlockModalLazy badgeId={pendingBadgeId} onDismiss={() => setPendingBadgeId(null)} />
        </Suspense>
        <Sidebar mobileOpen={mobileOpen} onClose={closeSidebar} />
        {/* Main area: full width on small screens; from lg reserve space for sidebar (sync: sidebarLayout.ts) */}
        <div className={cn("min-h-screen flex flex-col relative z-50 w-full", SIDEBAR_MAIN_ML)}>
          <TopBar menuButtonRef={menuButtonRef} onMenuToggle={() => setMobileOpen(!mobileOpen)} />
          <main className="flex-1 pt-14 sm:pt-16 p-4 lg:p-6 pb-20 lg:pb-6">
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
          <BottomTabBar />
        </div>
      </div>
    </BreadcrumbProvider>
  );
}
