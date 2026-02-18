import { useRef, useEffect } from "react";
import { getLevelFromXP } from "@/lib/progression";
import { playLevelUpSound } from "@/lib/sounds";

/**
 * Spielt den Level-Up-Sound, wenn die XP-Menge zu einem höheren Level führt.
 * Sollte in einer Komponente verwendet werden, die bei XP-Änderung gerendert wird (z. B. Dashboard).
 */
export function useLevelUpSound(xp: number | undefined): void {
  const safeXp = Number.isFinite(xp) ? (xp as number) : 0;
  const previousLevelRef = useRef<number>(getLevelFromXP(safeXp));

  useEffect(() => {
    const currentLevel = getLevelFromXP(safeXp);
    if (!Number.isFinite(currentLevel) || currentLevel < 1) return;
    if (currentLevel > previousLevelRef.current && previousLevelRef.current >= 1) {
      playLevelUpSound();
    }
    previousLevelRef.current = currentLevel;
  }, [safeXp]);
}
