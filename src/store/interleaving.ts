import { create } from "zustand";
import { persist } from "zustand/middleware";
import { pathnameToLearningArea, isTrackedArea, type LearningArea } from "@/lib/learningArea";

const INTERLEAVE_THRESHOLD_MS = 45 * 60 * 1000; // 45 Minuten
const SNOOZE_DURATION_MS = 15 * 60 * 1000; // 15 Min snooze
const MAX_SESSION_AGE_MS = 2 * 60 * 60 * 1000; // 2 h – danach Timer zurücksetzen

interface InterleavingState {
  currentArea: LearningArea;
  areaStartedAt: number;
  snoozeUntil: number | null;
  setPath: (pathname: string) => void;
  snooze: () => void;
  resetTimer: () => void;
}

export const useInterleavingStore = create<InterleavingState>()(
  persist(
    (set, get) => ({
      currentArea: "other",
      areaStartedAt: 0,
      snoozeUntil: null,

      setPath(pathname: string) {
        const area = pathnameToLearningArea(pathname);
        const { currentArea, areaStartedAt } = get();
        const now = Date.now();
        const sameArea = area === currentArea;
        if (sameArea) {
          if (now - areaStartedAt > MAX_SESSION_AGE_MS) {
            set({ areaStartedAt: now, snoozeUntil: null });
          }
          return;
        }
        set({
          currentArea: area,
          areaStartedAt: now,
          snoozeUntil: null,
        });
      },

      snooze() {
        set({ snoozeUntil: Date.now() + SNOOZE_DURATION_MS });
      },

      resetTimer() {
        set({ areaStartedAt: Date.now(), snoozeUntil: null });
      },
    }),
    { name: "medmaster-interleaving" }
  )
);

export function shouldShowInterleavingOverlay(): boolean {
  const state = useInterleavingStore.getState();
  const { currentArea, areaStartedAt, snoozeUntil } = state;
  if (!isTrackedArea(currentArea)) return false;
  const now = Date.now();
  if (snoozeUntil != null && now < snoozeUntil) return false;
  const elapsed = now - areaStartedAt;
  return elapsed >= INTERLEAVE_THRESHOLD_MS;
}

export function getElapsedInCurrentAreaMs(): number {
  const { currentArea, areaStartedAt } = useInterleavingStore.getState();
  if (!isTrackedArea(currentArea)) return 0;
  return Date.now() - areaStartedAt;
}
