/**
 * Dynamic XP calculation: (Base * Difficulty) + TimeBonus.
 * Fallbacks when data is missing so the app never blocks.
 */

const DEFAULT_BASE_XP = 10;
const MIN_DIFFICULTY = 0.5;
const MAX_DIFFICULTY = 2;
const FAST_THRESHOLD_SEC = 15;
const SLOW_THRESHOLD_SEC = 60;
const MAX_TIME_BONUS = 5;

export interface XPParams {
  baseXP?: number;
  difficultyMultiplier?: number;
  timeSeconds?: number;
  correct?: boolean;
}

/**
 * Compute XP for a single activity. Uses fallbacks for missing values.
 * Formula: round((baseXP * difficulty) + timeBonus) with clamp.
 */
export function computeXP(params: XPParams): number {
  const baseXP = params.baseXP ?? DEFAULT_BASE_XP;
  const difficulty = Math.min(
    MAX_DIFFICULTY,
    Math.max(MIN_DIFFICULTY, params.difficultyMultiplier ?? 1)
  );
  let timeBonus = 0;
  if (typeof params.timeSeconds === "number") {
    if (params.timeSeconds <= FAST_THRESHOLD_SEC) {
      timeBonus = Math.min(
        MAX_TIME_BONUS,
        Math.round((FAST_THRESHOLD_SEC - params.timeSeconds) * 0.3)
      );
    }
  }
  const raw = baseXP * difficulty + timeBonus;
  return Math.max(1, Math.round(raw));
}
