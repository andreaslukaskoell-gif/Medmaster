/**
 * FSRS-lite — simplified FSRS-5 scheduling algorithm
 *
 * Ratings (same as Anki / FSRS):
 *   1 = Wieder   (forgot, resets stability)
 *   2 = Schwer   (correct but hard, small growth)
 *   3 = Gut      (correct, normal growth)
 *   4 = Leicht   (correct and easy, large growth)
 *
 * State per question:
 *   stability  — interval in days at 90% retention
 *   difficulty — 1–10 (higher = harder)
 *   reps       — total reviews
 *   due        — next review date
 */

export type FSRSRating = 1 | 2 | 3 | 4;

export interface FSRSState {
  stability:  number;   // days
  difficulty: number;   // 1–10
  reps:       number;
  due:        Date;
}

// ── helpers ──────────────────────────────────────────────────
function clamp(x: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, x));
}

// Initial stability for first review (by rating)
const INIT_STABILITY: Record<FSRSRating, number> = { 1: 0.4, 2: 1.0, 3: 3.0, 4: 7.0 };
// Initial difficulty (higher rating → easier card)
const INIT_DIFFICULTY: Record<FSRSRating, number> = { 1: 8.0, 2: 6.5, 3: 5.0, 4: 3.5 };

// ── Core scheduling ──────────────────────────────────────────
export function fsrsSchedule(
  state: FSRSState | null,
  rating: FSRSRating,
  now: Date = new Date()
): FSRSState {
  // ── New card (first review) ──
  if (!state || state.reps === 0) {
    const s = INIT_STABILITY[rating];
    const d = INIT_DIFFICULTY[rating];
    return {
      stability:  s,
      difficulty: d,
      reps:       1,
      due:        daysFromNow(s, now),
    };
  }

  // ── Failure ──
  if (rating === 1) {
    return {
      stability:  0.4,
      difficulty: clamp(state.difficulty + 1.2, 1, 10),
      reps:       state.reps + 1,
      due:        daysFromNow(0.5, now),   // ~12h
    };
  }

  // ── Success ──
  // Retrievability estimate (how well remembered at time of review)
  const elapsedDays = Math.max(0, (now.getTime() - state.due.getTime()) / 86_400_000);
  const R = Math.exp(Math.log(0.9) * elapsedDays / state.stability);

  // Growth factor: Schwer=1.0, Gut=2.0, Leicht=3.5
  const growthByRating: Record<2 | 3 | 4, number> = { 2: 1.0, 3: 2.0, 4: 3.5 };
  const growth = growthByRating[rating as 2 | 3 | 4];

  // Difficulty modifier: easy cards grow faster
  const diffMod = (11 - state.difficulty) / 10;

  // Retrieval modifier: low R → less growth (we were lucky)
  const retMod = 0.5 + 0.5 * R;

  const newStability = clamp(
    state.stability * growth * diffMod * retMod,
    state.stability * 1.05,   // at least 5% growth
    state.stability * 5,       // cap runaway growth
  );

  const newDifficulty = clamp(
    state.difficulty - 0.15 * (rating - 3),  // 4→easier, 2→harder
    1,
    10,
  );

  return {
    stability:  newStability,
    difficulty: newDifficulty,
    reps:       state.reps + 1,
    due:        daysFromNow(newStability, now),
  };
}

// ── Derived helpers ──────────────────────────────────────────

/** Returns true if this question is due for review (or overdue) */
export function isDue(state: FSRSState, now: Date = new Date()): boolean {
  return state.due.getTime() <= now.getTime();
}

/** Human-readable "due in X days / overdue by X days" */
export function dueSummary(state: FSRSState, now: Date = new Date()): string {
  const days = (state.due.getTime() - now.getTime()) / 86_400_000;
  if (days <= 0) return `${Math.round(-days)}d überfällig`;
  if (days < 1)  return 'heute';
  return `in ${Math.round(days)}d`;
}

/** Brier score for a single answer (calibration measure)
 *  confidence 0=Raten→p=0.25, 1=Unsicher→p=0.50, 2=Sicher→p=0.90
 *  correct: 1 | 0
 *  Lower = better calibrated
 */
export function brierScore(confidence: 0 | 1 | 2, correct: boolean): number {
  const p = [0.25, 0.50, 0.90][confidence];
  const o = correct ? 1 : 0;
  return (p - o) ** 2;
}

/** Aggregate Brier score from many attempts */
export function avgBrierScore(
  attempts: { confidence: 0 | 1 | 2; correct: boolean }[]
): number | null {
  if (attempts.length < 5) return null;
  const sum = attempts.reduce((acc, a) => acc + brierScore(a.confidence, a.correct), 0);
  return sum / attempts.length;
}

// ── private ──────────────────────────────────────────────────
function daysFromNow(days: number, now: Date): Date {
  return new Date(now.getTime() + days * 86_400_000);
}
