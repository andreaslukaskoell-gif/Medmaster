/**
 * BMS Pool for FragenTrainer — Typ A (Single Choice) + Typ K from static pool.
 * Converts pool questions to BMSFrage and provides getPoolBMSFragen(uk_ids, count).
 */
import { getKapitelBySubject, alleKapitel } from "@/data/bmsKapitel/index";
import { biologiePoolQuestions } from "@/data/bms/biologiePool";
import { biologiePoolTypK } from "@/data/bms/biologiePoolTypK";
import { getQuestionsBySubject, type Question } from "@/data/bms/index";
import { mathematikPoolTypK } from "@/data/bms/mathematikPoolTypK";
import type { BMSFrage } from "@/lib/supabaseBMSFragen";
import { filterValidBMSFragen } from "@/lib/supabaseBMSFragen";

const OPTION_KEYS = ["A", "B", "C", "D", "E"] as const;

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Chapter ID → list of Unterkapitel IDs (for biologie from bmsKapitel). */
export function getChapterToUkIds(): Map<string, string[]> {
  const map = new Map<string, string[]>();
  for (const k of alleKapitel) {
    if (k.subject !== "biologie") continue;
    const ids = (k.unterkapitel ?? []).map((u) => u.id).filter(Boolean);
    if (ids.length) map.set(k.id, ids);
  }
  return map;
}

/** For trainer selection when source=pool: chapters that have pool questions, with their UKs. */
export function getChaptersWithPool(): { chapterId: string; ukIds: string[]; title?: string }[] {
  const chapterToUk = getChapterToUkIds();
  const result: { chapterId: string; ukIds: string[]; title?: string }[] = [];
  const bioChapters = getKapitelBySubject("biologie");
  for (const ch of bioChapters) {
    const ukIds = chapterToUk.get(ch.id) ?? [];
    if (ukIds.length) {
      result.push({
        chapterId: ch.id,
        ukIds,
        title: ch.sequenceTitle ?? ch.title,
      });
    }
  }
  return result;
}

/** Convert a Typ A pool Question to BMSFrage. Option keys A–E. */
export function questionToBMSFrage(q: Question, uk_id: string): BMSFrage {
  const schwierigkeit = q.difficulty === "schwer" ? 3 : q.difficulty === "mittel" ? 2 : 1;
  const optionen = q.options.map((opt, i) => ({
    key: OPTION_KEYS[i] ?? String.fromCharCode(65 + i),
    text: opt.text,
  }));
  const correctId = (q.correctOptionId ?? "a").toLowerCase();
  const correctIndex = q.options.findIndex((o) => (o.id ?? "").toLowerCase() === correctId);
  const korrekte_option =
    correctIndex >= 0 ? (optionen[correctIndex]?.key ?? "A") : (optionen[0]?.key ?? "A");
  return {
    id: q.id,
    typ: "A",
    fach: q.subject,
    uk_id,
    stamm: q.text,
    optionen,
    korrekte_option,
    erklaerung: q.explanation,
    schwierigkeit,
    fsrs: null,
  };
}

/** Assign each pool question (by chapter) to an uk_id (round-robin within chapter). */
function buildTypAPoolWithUkIds(): BMSFrage[] {
  const chapterToUk = getChapterToUkIds();
  const result: BMSFrage[] = [];
  const indexByChapter = new Map<string, number>();

  for (const q of biologiePoolQuestions) {
    const ukIds = chapterToUk.get(q.chapter);
    if (!ukIds?.length) continue;
    const idx = indexByChapter.get(q.chapter) ?? 0;
    const uk_id = ukIds[idx % ukIds.length];
    indexByChapter.set(q.chapter, idx + 1);
    result.push(questionToBMSFrage(q, uk_id));
  }
  return result;
}

/** All pool questions as BMSFrage (Typ A with assigned uk_id + Typ K from biologiePoolTypK). */
function getAllPoolBMSFragen(): BMSFrage[] {
  const typA = buildTypAPoolWithUkIds();
  return [...typA, ...biologiePoolTypK];
}

let cachedPool: BMSFrage[] | null = null;

function getPool(): BMSFrage[] {
  if (!cachedPool) cachedPool = getAllPoolBMSFragen();
  return cachedPool;
}

/**
 * Get pool questions for the given uk_ids, shuffled, capped at count.
 * Used when FragenTrainer source is "pool". No FSRS.
 */
export function getPoolBMSFragen(uk_ids: string[], count = 8): BMSFrage[] {
  if (!uk_ids.length) return [];
  const pool = getPool();
  const set = new Set(uk_ids);
  const filtered = pool.filter((q) => set.has(q.uk_id));
  return shuffle(filterValidBMSFragen(filtered)).slice(0, count);
}

/**
 * Get BMS questions by subject (from static pool + selfTests), shuffled, capped at count.
 * For mathematik: includes Typ A (Question) and Typ K (mathematikPoolTypK).
 */
export function getBMSFragenBySubject(
  subject: "biologie" | "chemie" | "physik" | "mathematik",
  count: number
): BMSFrage[] {
  const questions = getQuestionsBySubject(subject);
  const typA = questions.map((q) => questionToBMSFrage(q, q.chapter));
  const typK = subject === "mathematik" ? mathematikPoolTypK : [];
  const combined = shuffle([...typA, ...typK]);
  const selected = combined.slice(0, Math.min(count, combined.length));
  return filterValidBMSFragen(selected);
}
