import { useState, useEffect, useCallback, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { BottomTabBar } from "./BottomTabBar";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { CommandPalette, OPEN_COMMAND_PALETTE } from "@/components/CommandPalette";
import { SyncToast } from "@/components/SyncToast";
import { BreadcrumbProvider } from "@/contexts/BreadcrumbContext";
import { InterleavingOverlay } from "@/components/InterleavingOverlay";
import { useInterleavingStore, shouldShowInterleavingOverlay } from "@/store/interleaving";
import { RandomRewardToast } from "@/components/learning/RandomRewardToast";
import { HotStreakOverlay } from "@/components/learning/HotStreakOverlay";
import { LevelUpOverlay } from "@/components/learning/LevelUpOverlay";
import { BadgeUnlockModal } from "@/components/badges/BadgeUnlockModal";
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
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandPaletteOpen(true);
      }
    };
    const onOpen = () => setCommandPaletteOpen(true);
    window.addEventListener("keydown", handler);
    window.addEventListener(OPEN_COMMAND_PALETTE, onOpen);
    return () => {
      window.removeEventListener("keydown", handler);
      window.removeEventListener(OPEN_COMMAND_PALETTE, onOpen);
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
        <CommandPalette open={commandPaletteOpen} onClose={() => setCommandPaletteOpen(false)} />
        <InterleavingOverlay
          visible={interleavingOverlayVisible}
          currentArea={currentArea}
          onDismiss={dismissInterleaving}
        />
        <SyncToast />
        <HotStreakOverlay active={hotStreakActive} />
        <RandomRewardToast message={rewardMessage} type={rewardType} onDismiss={clearReward} />
        <LevelUpOverlay
          level={levelUpState?.level}
          levelName={levelUpState?.level ? getLevelName(levelUpState.level) : undefined}
          feature={levelUpState?.feature}
          onDismiss={() => setLevelUpState(null)}
        />
        <BadgeUnlockModal badgeId={pendingBadgeId} onDismiss={() => setPendingBadgeId(null)} />
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
