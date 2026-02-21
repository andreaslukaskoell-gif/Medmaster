/**
 * Supabase DB layer for the BMS Fragen-Trainer.
 * Reads from bms_questions + user_question_attempts.
 */
import { supabase } from '@/lib/supabase';
import { fsrsSchedule, isDue, type FSRSState, type FSRSRating } from '@/lib/fsrs';

// ── Types ────────────────────────────────────────────────────

export interface TypAOption {
  key: string;   // 'A' | 'B' | 'C' | 'D' | 'E'
  text: string;
}

export interface TypKAussage {
  nr: number;
  text: string;
  korrekt: boolean;
}

export interface TypKKombination {
  key: string;           // 'A' | 'B' | 'C' | 'D' | 'E'
  nummern: number[];     // e.g. [1,3,5]
}

export interface BMSFrage {
  id: string;
  typ: 'A' | 'K' | 'M';
  fach: 'biologie' | 'chemie' | 'physik' | 'mathematik';
  uk_id: string;
  stamm: string;
  optionen?: TypAOption[];
  korrekte_option?: string;
  aussagen?: TypKAussage[];
  kombinationen?: TypKKombination[];
  erklaerung: string;
  schwierigkeit: 1 | 2 | 3;
  // FSRS state (injected from user_question_attempts)
  fsrs?: FSRSState | null;
  // last attempt info
  lastCorrect?: boolean;
  totalAttempts?: number;
}

export interface RecordAttemptInput {
  question_id: string;
  user_id: string | null;
  correct: boolean;
  confidence: 0 | 1 | 2;
  fsrs_rating: FSRSRating;
  prev_fsrs: FSRSState | null;
}

// ── Fetch questions for selection ────────────────────────────

export async function fetchFragenForUK(uk_id: string): Promise<BMSFrage[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('bms_questions')
    .select('*')
    .eq('uk_id', uk_id)
    .order('schwierigkeit', { ascending: true });

  if (error) { console.error('[supabaseBMSFragen] fetchFragenForUK:', error); return []; }
  return (data || []).map(mapRow);
}

export async function fetchFragenForUKs(uk_ids: string[]): Promise<BMSFrage[]> {
  if (!supabase || !uk_ids.length) return [];
  const { data, error } = await supabase
    .from('bms_questions')
    .select('*')
    .in('uk_id', uk_ids);

  if (error) { console.error('[supabaseBMSFragen] fetchFragenForUKs:', error); return []; }
  return (data || []).map(mapRow);
}

// ── FSRS-aware next-question selection ───────────────────────

/**
 * getNextQuestions — KERN-FEATURE
 *
 * Returns a mix of:
 *   1. Due questions (overdue first)
 *   2. New questions (never seen)
 *   3. Recently seen (filler)
 *
 * Ordered so users always see something "new" or "due" first.
 */
export async function getNextQuestions(
  uk_ids: string[],
  user_id: string | null,
  count = 8
): Promise<BMSFrage[]> {
  if (!supabase || !uk_ids.length) return [];

  // 1. Fetch all questions for selected UKs
  const allFragen = await fetchFragenForUKs(uk_ids);
  if (!allFragen.length) return [];

  // 2. Fetch latest FSRS state per question for this user
  const fsrsMap = await fetchFSRSStates(
    allFragen.map(q => q.id),
    user_id
  );

  // 3. Inject FSRS state into questions
  const fragenWithFSRS: BMSFrage[] = allFragen.map(q => ({
    ...q,
    fsrs: fsrsMap[q.id] ?? null,
  }));

  // 4. Categorize
  const now = new Date();
  const due:    BMSFrage[] = [];
  const newQ:   BMSFrage[] = [];
  const recent: BMSFrage[] = [];

  for (const q of fragenWithFSRS) {
    if (!q.fsrs) {
      newQ.push(q);
    } else if (isDue(q.fsrs, now)) {
      due.push(q);
    } else {
      recent.push(q);
    }
  }

  // Sort due by most overdue first
  due.sort((a, b) =>
    (a.fsrs!.due.getTime()) - (b.fsrs!.due.getTime())
  );

  // Shuffle new and recent
  shuffle(newQ);
  shuffle(recent);

  // 5. Build result: due → new → recent, capped at count
  const result: BMSFrage[] = [];
  const add = (arr: BMSFrage[]) => {
    for (const q of arr) {
      if (result.length >= count) break;
      result.push(q);
    }
  };

  // Target: ~40% due, ~40% new, ~20% recent
  const dueCap    = Math.ceil(count * 0.4);
  const newCap    = Math.ceil(count * 0.4);
  add(due.slice(0, dueCap));
  add(newQ.slice(0, newCap));
  add(recent);
  // Fill remainder with what's left
  if (result.length < count) add(due.slice(dueCap));
  if (result.length < count) add(newQ.slice(newCap));

  return result.slice(0, count);
}

// ── Record attempt ────────────────────────────────────────────

export async function recordAttempt(input: RecordAttemptInput): Promise<void> {
  if (!supabase) return;

  const newFSRS = fsrsSchedule(input.prev_fsrs, input.fsrs_rating);

  const { error } = await supabase.from('user_question_attempts').insert({
    user_id:         input.user_id,
    question_id:     input.question_id,
    correct:         input.correct,
    confidence:      input.confidence,
    fsrs_rating:     input.fsrs_rating,
    fsrs_stability:  newFSRS.stability,
    fsrs_difficulty: newFSRS.difficulty,
    fsrs_due:        newFSRS.due.toISOString(),
    fsrs_reps:       newFSRS.reps,
  });

  if (error) console.error('[supabaseBMSFragen] recordAttempt:', error);
}

// ── MedAT Readiness Score (MRS) ───────────────────────────────

export interface MRSData {
  score: number;            // 0–100
  fsrsRetention: number;    // % questions with retention ≥ 0.7
  brierScore: number | null;
  consistencyDays: number;  // days with at least 1 answer in last 30d
  totalAttempts: number;
}

export async function fetchMRSData(user_id: string | null): Promise<MRSData | null> {
  if (!supabase || !user_id) return null;

  const thirtyDaysAgo = new Date(Date.now() - 30 * 86_400_000).toISOString();

  const { data, error } = await supabase
    .from('user_question_attempts')
    .select('correct, confidence, fsrs_stability, fsrs_due, answered_at')
    .eq('user_id', user_id)
    .gte('answered_at', thirtyDaysAgo)
    .order('answered_at', { ascending: false });

  if (error || !data?.length) return null;

  const now = Date.now();

  // FSRS Retention Rate (questions with current retention ≥ 0.7)
  let retained = 0;
  const seen = new Set<string>();
  const latestPerQuestion: typeof data = [];
  // data is ordered desc, so first occurrence per question = latest
  for (const row of data) {
    const key = `${row.fsrs_stability}:${row.fsrs_due}`;
    if (!seen.has(key)) {
      seen.add(key);
      latestPerQuestion.push(row);
    }
  }
  for (const row of latestPerQuestion) {
    const dueMs = new Date(row.fsrs_due).getTime();
    const elapsedDays = Math.max(0, (now - dueMs) / 86_400_000);
    const R = Math.exp(Math.log(0.9) * elapsedDays / Math.max(row.fsrs_stability, 0.1));
    if (R >= 0.7) retained++;
  }
  const fsrsRetention = latestPerQuestion.length
    ? Math.round((retained / latestPerQuestion.length) * 100)
    : 0;

  // Brier Score
  const withConf = data.filter(r => r.confidence != null);
  let brier: number | null = null;
  if (withConf.length >= 10) {
    const sum = withConf.reduce((acc, r) => {
      const p = [0.25, 0.50, 0.90][r.confidence as 0 | 1 | 2];
      return acc + (p - (r.correct ? 1 : 0)) ** 2;
    }, 0);
    brier = Math.round((sum / withConf.length) * 1000) / 1000;
  }

  // Consistency (unique days with ≥1 answer)
  const days = new Set(data.map(r => r.answered_at.slice(0, 10)));
  const consistencyDays = days.size;

  // Composite MRS (0–100)
  // Retention 40%, Brier 25%, Consistency 20%, bonus 15%
  const retScore    = fsrsRetention * 0.40;
  const brierScore_ = brier != null ? Math.max(0, (1 - brier / 0.25) * 100) * 0.25 : 0;
  const consScore   = Math.min(consistencyDays / 30, 1) * 100 * 0.20;
  const bonus       = data.length > 50 ? 15 : data.length > 20 ? 8 : 0;
  const score = Math.min(100, Math.round(retScore + brierScore_ + consScore + bonus));

  return { score, fsrsRetention, brierScore: brier, consistencyDays, totalAttempts: data.length };
}

// ── Error Pattern DNA ─────────────────────────────────────────

export interface ErrorPattern {
  uk_id: string;
  errorRate: number;   // 0–1
  attempts: number;
}

export async function fetchErrorPatterns(
  user_id: string | null,
  uk_ids: string[]
): Promise<Record<string, ErrorPattern>> {
  if (!supabase || !user_id || !uk_ids.length) return {};

  // Get all question IDs for these UKs
  const { data: qData } = await supabase
    .from('bms_questions')
    .select('id, uk_id')
    .in('uk_id', uk_ids);

  if (!qData?.length) return {};
  const qIds = qData.map(q => q.id);
  const qToUK = Object.fromEntries(qData.map(q => [q.id, q.uk_id]));

  // Get attempts
  const { data: attempts } = await supabase
    .from('user_question_attempts')
    .select('question_id, correct')
    .eq('user_id', user_id)
    .in('question_id', qIds);

  if (!attempts?.length) return {};

  // Aggregate per UK
  const stats: Record<string, { wrong: number; total: number }> = {};
  for (const a of attempts) {
    const uk = qToUK[a.question_id];
    if (!uk) continue;
    if (!stats[uk]) stats[uk] = { wrong: 0, total: 0 };
    stats[uk].total++;
    if (!a.correct) stats[uk].wrong++;
  }

  const result: Record<string, ErrorPattern> = {};
  for (const [uk_id, s] of Object.entries(stats)) {
    if (s.total >= 5) {
      result[uk_id] = {
        uk_id,
        errorRate: s.wrong / s.total,
        attempts: s.total,
      };
    }
  }
  return result;
}

// ── Private helpers ───────────────────────────────────────────

async function fetchFSRSStates(
  question_ids: string[],
  user_id: string | null
): Promise<Record<string, FSRSState>> {
  if (!supabase || !user_id || !question_ids.length) return {};

  // Latest attempt per question (ordered desc → take first per question_id)
  const { data, error } = await supabase
    .from('user_question_attempts')
    .select('question_id, fsrs_stability, fsrs_difficulty, fsrs_due, fsrs_reps, answered_at')
    .eq('user_id', user_id)
    .in('question_id', question_ids)
    .order('answered_at', { ascending: false });

  if (error || !data) return {};

  const map: Record<string, FSRSState> = {};
  for (const row of data) {
    if (map[row.question_id]) continue; // already have latest
    map[row.question_id] = {
      stability:  row.fsrs_stability,
      difficulty: row.fsrs_difficulty,
      due:        new Date(row.fsrs_due),
      reps:       row.fsrs_reps,
    };
  }
  return map;
}

function mapRow(row: Record<string, unknown>): BMSFrage {
  return {
    id:              row.id as string,
    typ:             row.typ as 'A' | 'K' | 'M',
    fach:            row.fach as BMSFrage['fach'],
    uk_id:           row.uk_id as string,
    stamm:           row.stamm as string,
    optionen:        row.optionen as TypAOption[] | undefined,
    korrekte_option: row.korrekte_option as string | undefined,
    aussagen:        row.aussagen as TypKAussage[] | undefined,
    kombinationen:   row.kombinationen as TypKKombination[] | undefined,
    erklaerung:      row.erklaerung as string,
    schwierigkeit:   (row.schwierigkeit as number) as 1 | 2 | 3,
    fsrs:            null,
  };
}

function shuffle<T>(arr: T[]): void {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
