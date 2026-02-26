/**
 * Supabase DB layer for the BMS Fragen-Trainer.
 * Reads from bms_questions + user_question_attempts.
 */
import { supabase } from "@/lib/supabase";
import { fsrsSchedule, isDue, type FSRSState, type FSRSRating } from "@/lib/fsrs";

// ── Types ────────────────────────────────────────────────────

export interface TypAOption {
  key: string; // 'A' | 'B' | 'C' | 'D' | 'E'
  text: string;
}

export interface TypKAussage {
  nr: number;
  text: string;
  korrekt: boolean;
}

export interface TypKKombination {
  key: string; // 'A' | 'B' | 'C' | 'D' | 'E'
  nummern: number[]; // e.g. [1,3,5]
}

export interface BMSFrage {
  id: string;
  typ: "A" | "K" | "M";
  fach: "biologie" | "chemie" | "physik" | "mathematik";
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

/** Prüft, ob eine BMS-Frage vollständig und konsistent ist. MedAT: genau eine richtige Antwort (korrekte_option). Lieber keine Aufgabe anzeigen als eine falsche. */
export function validateBMSFrage(q: BMSFrage): boolean {
  if (!q?.id || typeof q.stamm !== "string" || !q.stamm.trim()) return false;
  if (!["A", "K", "M"].includes(q.typ)) return false;
  if (![1, 2, 3].includes(q.schwierigkeit)) return false;
  if (q.typ === "A" || q.typ === "M") {
    const opts = q.optionen;
    if (!Array.isArray(opts) || opts.length !== 5) return false;
    const keys = new Set(opts.map((o) => o?.key));
    if (keys.size !== 5) return false;
    const korrekt = q.korrekte_option;
    if (!korrekt || !opts.some((o) => o.key === korrekt)) return false;
  }
  if (q.typ === "K") {
    if (!Array.isArray(q.aussagen) || q.aussagen.length < 4 || q.aussagen.length > 5) return false;
    const komb = q.kombinationen;
    if (!Array.isArray(komb) || komb.length !== 5) return false;
    const keys = new Set(komb.map((k) => k?.key));
    if (keys.size !== 5 || !["A", "B", "C", "D", "E"].every((k) => keys.has(k))) return false;
    const korrekt = q.korrekte_option;
    if (!korrekt || !komb.some((k) => k?.key === korrekt)) return false;
  }
  return true;
}

/** Filtert ungültige Fragen heraus. Typ K ist MedAT-konform (4 Aussagen, 5 Kombinationen A–E) und wird zugelassen. */
export function filterValidBMSFragen(fragen: BMSFrage[]): BMSFrage[] {
  const valid: BMSFrage[] = [];
  for (const q of fragen) {
    if (validateBMSFrage(q)) valid.push(q);
    else if (import.meta.env?.DEV) {
      console.error(
        "[Fragen-Trainer] Ungültige Frage verworfen (inkonsistente Daten):",
        q?.id ?? q
      );
    }
  }
  return valid;
}

// ── Fetch questions for selection ────────────────────────────

export async function fetchFragenForUK(uk_id: string): Promise<BMSFrage[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("bms_questions")
    .select("*")
    .eq("uk_id", uk_id)
    .order("schwierigkeit", { ascending: true });

  if (error) {
    console.error("[supabaseBMSFragen] fetchFragenForUK:", error);
    return [];
  }
  return (data || []).map(mapRow);
}

export async function fetchFragenForUKs(uk_ids: string[]): Promise<BMSFrage[]> {
  if (!supabase || !uk_ids.length) return [];
  const { data, error } = await supabase.from("bms_questions").select("*").in("uk_id", uk_ids);

  if (error) {
    console.error("[supabaseBMSFragen] fetchFragenForUKs:", error);
    return [];
  }
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
 *
 * If getStaticQuestions is provided, questions are taken from that (single source = code);
 * otherwise they are fetched from bms_questions (Supabase). FSRS state always comes from DB.
 */
export async function getNextQuestions(
  uk_ids: string[],
  user_id: string | null,
  count = 8,
  getStaticQuestions?: (uk_ids: string[]) => BMSFrage[]
): Promise<BMSFrage[]> {
  if (!uk_ids.length) return [];
  if (getStaticQuestions) {
    const allFragen = getStaticQuestions(uk_ids);
    if (!allFragen.length) return [];
    const fsrsMap = await fetchFSRSStates(
      allFragen.map((q) => q.id),
      user_id
    );
    const fragenWithFSRS: BMSFrage[] = allFragen.map((q) => ({
      ...q,
      fsrs: fsrsMap[q.id] ?? null,
    }));
    return buildNextFromCategorized(fragenWithFSRS, count);
  }
  if (!supabase) return [];

  // Legacy: fetch from bms_questions
  const allFragen = await fetchFragenForUKs(uk_ids);
  if (!allFragen.length) return [];

  const fsrsMap = await fetchFSRSStates(
    allFragen.map((q) => q.id),
    user_id
  );
  const fragenWithFSRS: BMSFrage[] = allFragen.map((q) => ({
    ...q,
    fsrs: fsrsMap[q.id] ?? null,
  }));
  return buildNextFromCategorized(fragenWithFSRS, count);
}

/**
 * buildNextFromCategorized — Auswahl für Übung:
 * - Großteil zufällig (jedes Mal andere Fragen)
 * - Nur ein Bruchteil sind bereits gesehene/fällige Fragen (zyklisch wiederholen)
 */
const REVIEW_RATIO = 0.2; // 20 % der Session = Wiederholung (schon gesehen, fällig)

function buildNextFromCategorized(fragenWithFSRS: BMSFrage[], count: number): BMSFrage[] {
  const now = new Date();
  const due: BMSFrage[] = [];
  const newQ: BMSFrage[] = [];
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

  due.sort((a, b) => a.fsrs!.due.getTime() - b.fsrs!.due.getTime());
  shuffle(newQ);
  shuffle(recent);

  const reviewCount = Math.min(due.length, Math.max(0, Math.round(count * REVIEW_RATIO)));
  const randomCount = count - reviewCount;
  const reviewSlice = due.slice(0, reviewCount);

  const randomPool = [...newQ, ...recent];
  shuffle(randomPool);
  let randomSlice = randomPool.slice(0, randomCount);
  if (randomSlice.length < randomCount && due.length > reviewCount) {
    const extra = due.slice(reviewCount, reviewCount + (randomCount - randomSlice.length));
    randomSlice = [...randomSlice, ...extra];
  }

  const result = [...reviewSlice, ...randomSlice];
  shuffle(result);
  return result.slice(0, count);
}

// ── Record attempt ────────────────────────────────────────────

export async function recordAttempt(input: RecordAttemptInput): Promise<void> {
  if (!supabase) return;

  const newFSRS = fsrsSchedule(input.prev_fsrs, input.fsrs_rating);

  const { error } = await supabase.from("user_question_attempts").insert({
    user_id: input.user_id,
    question_id: input.question_id,
    correct: input.correct,
    confidence: input.confidence,
    fsrs_rating: input.fsrs_rating,
    fsrs_stability: newFSRS.stability,
    fsrs_difficulty: newFSRS.difficulty,
    fsrs_due: newFSRS.due.toISOString(),
    fsrs_reps: newFSRS.reps,
  });

  if (error) console.error("[supabaseBMSFragen] recordAttempt:", error);
}

// ── MedAT Readiness Score (MRS) ───────────────────────────────

export interface MRSData {
  score: number; // 0–100
  fsrsRetention: number; // % Fragen mit Retention ≥ 0.7
  consistencyDays: number; // Tage mit mind. 1 Antwort (letzte 30)
  totalAttempts: number;
}

export async function fetchMRSData(user_id: string | null): Promise<MRSData | null> {
  if (!supabase || !user_id) return null;

  const thirtyDaysAgo = new Date(Date.now() - 30 * 86_400_000).toISOString();

  const { data, error } = await supabase
    .from("user_question_attempts")
    .select("question_id, fsrs_stability, fsrs_due, answered_at")
    .eq("user_id", user_id)
    .gte("answered_at", thirtyDaysAgo)
    .order("answered_at", { ascending: false });

  if (error || !data?.length) return null;

  const now = Date.now();

  // FSRS Retention: pro Frage nur den neuesten Versuch (answered_at desc → erster Eintrag pro question_id)
  let retained = 0;
  const seenQuestions = new Set<string>();
  const latestPerQuestion: typeof data = [];
  for (const row of data) {
    const qid = (row as { question_id?: string }).question_id;
    if (!qid || seenQuestions.has(qid)) continue;
    seenQuestions.add(qid);
    latestPerQuestion.push(row);
  }
  for (const row of latestPerQuestion) {
    const dueMs = new Date(row.fsrs_due).getTime();
    const elapsedDays = Math.max(0, (now - dueMs) / 86_400_000);
    const R = Math.exp((Math.log(0.9) * elapsedDays) / Math.max(row.fsrs_stability, 0.1));
    if (R >= 0.7) retained++;
  }
  const fsrsRetention = latestPerQuestion.length
    ? Math.round((retained / latestPerQuestion.length) * 100)
    : 0;

  // Kontinuität (Tage mit mind. 1 Antwort)
  const days = new Set(data.map((r) => r.answered_at.slice(0, 10)));
  const consistencyDays = days.size;

  // MRS nur aus Retention + Kontinuität + Bonus (alles systemseitig, kein Brier/Kalibrierung)
  const retScore = fsrsRetention * 0.55; // 55 %
  const consScore = Math.min(consistencyDays / 30, 1) * 100 * 0.3; // 30 %
  const bonus = data.length >= 50 ? 15 : data.length >= 20 ? 8 : 0; // 15 %
  const score = Math.min(100, Math.round(retScore + consScore + bonus));

  return { score, fsrsRetention, consistencyDays, totalAttempts: data.length };
}

// ── Error Pattern DNA ─────────────────────────────────────────

export interface ErrorPattern {
  uk_id: string;
  errorRate: number; // 0–1
  attempts: number;
}

export async function fetchErrorPatterns(
  user_id: string | null,
  uk_ids: string[]
): Promise<Record<string, ErrorPattern>> {
  if (!supabase || !user_id || !uk_ids.length) return {};

  // Get all question IDs for these UKs
  const { data: qData } = await supabase
    .from("bms_questions")
    .select("id, uk_id")
    .in("uk_id", uk_ids);

  if (!qData?.length) return {};
  const qIds = qData.map((q) => q.id);
  const qToUK = Object.fromEntries(qData.map((q) => [q.id, q.uk_id]));

  // Get attempts
  const { data: attempts } = await supabase
    .from("user_question_attempts")
    .select("question_id, correct")
    .eq("user_id", user_id)
    .in("question_id", qIds);

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
    .from("user_question_attempts")
    .select("question_id, fsrs_stability, fsrs_difficulty, fsrs_due, fsrs_reps, answered_at")
    .eq("user_id", user_id)
    .in("question_id", question_ids)
    .order("answered_at", { ascending: false });

  if (error || !data) return {};

  const map: Record<string, FSRSState> = {};
  for (const row of data) {
    if (map[row.question_id]) continue; // already have latest
    map[row.question_id] = {
      stability: row.fsrs_stability,
      difficulty: row.fsrs_difficulty,
      due: new Date(row.fsrs_due),
      reps: row.fsrs_reps,
    };
  }
  return map;
}

function mapRow(row: Record<string, unknown>): BMSFrage {
  return {
    id: row.id as string,
    typ: row.typ as "A" | "K" | "M",
    fach: row.fach as BMSFrage["fach"],
    uk_id: row.uk_id as string,
    stamm: row.stamm as string,
    optionen: row.optionen as TypAOption[] | undefined,
    korrekte_option: row.korrekte_option as string | undefined,
    aussagen: row.aussagen as TypKAussage[] | undefined,
    kombinationen: row.kombinationen as TypKKombination[] | undefined,
    erklaerung: row.erklaerung as string,
    schwierigkeit: row.schwierigkeit as number as 1 | 2 | 3,
    fsrs: null,
  };
}

function shuffle<T>(arr: T[]): void {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
