/**
 * BMS Pool for FragenTrainer — Typ A (Single Choice), Typ M (Rechenfragen) und Typ K (Kombinationsfragen, MedAT-Format).
 */
import { getKapitelBySubject, alleKapitel } from "@/data/bmsKapitel/index";
import { biologiePoolQuestions } from "@/data/bms/biologiePool";
import { chemiePoolQuestions } from "@/data/bms/chemiePool";
import { physikPoolQuestions } from "@/data/bms/physikPool";
import { mathematikPoolQuestions } from "@/data/bms/mathematikPool";
import { biologiePoolTypK } from "@/data/bms/biologiePoolTypK";
import { chemiePoolTypK } from "@/data/bms/chemiePoolTypK";
import { physikPoolTypK } from "@/data/bms/physikPoolTypK";
import { mathematikPoolTypK } from "@/data/bms/mathematikPoolTypK";
import { getQuestionsBySubject, type Question } from "@/data/bms/index";
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

/** Chapter ID → list of Unterkapitel IDs (all subjects). */
export function getChapterToUkIds(): Map<string, string[]> {
  const map = new Map<string, string[]>();
  for (const k of alleKapitel) {
    const ids = (k.unterkapitel ?? []).map((u) => u.id).filter(Boolean);
    if (ids.length) map.set(k.id, ids);
  }
  return map;
}

/** For trainer selection when source=pool: chapters that have pool questions, with their UKs (all subjects). */
export function getChaptersWithPool(): { chapterId: string; ukIds: string[]; title?: string }[] {
  const chapterToUk = getChapterToUkIds();
  const result: { chapterId: string; ukIds: string[]; title?: string }[] = [];
  for (const subject of ["biologie", "chemie", "physik", "mathematik"] as const) {
    const chapters = getKapitelBySubject(subject);
    for (const ch of chapters) {
      const ukIds = chapterToUk.get(ch.id) ?? [];
      if (ukIds.length) {
        result.push({
          chapterId: ch.id,
          ukIds,
          title: ch.sequenceTitle ?? ch.title,
        });
      }
    }
  }
  return result;
}

/** Convert a Typ A pool Question to BMSFrage. Option keys A–E. Rechenfragen (tag "rechenfrage") → typ "M". */
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
  const typ = q.tags?.includes("rechenfrage") ? "M" : "A";
  return {
    id: q.id,
    typ,
    fach: q.subject,
    uk_id,
    stamm: (q.text && q.text.trim()) || `[Fragetext fehlt: ${q.id}]`,
    optionen,
    korrekte_option,
    erklaerung: q.explanation,
    schwierigkeit,
    fsrs: null,
  };
}

/** Assign each pool question (by chapter) to an uk_id (round-robin within chapter). All subjects. */
function buildTypAPoolWithUkIds(): BMSFrage[] {
  const chapterToUk = getChapterToUkIds();
  const result: BMSFrage[] = [];
  const indexByChapter = new Map<string, number>();

  const allPoolQuestions: Question[] = [
    ...biologiePoolQuestions,
    ...chemiePoolQuestions,
    ...physikPoolQuestions,
    ...mathematikPoolQuestions,
  ];

  for (const q of allPoolQuestions) {
    const ukIds = chapterToUk.get(q.chapter);
    const uk_id = ukIds?.length
      ? ukIds[(indexByChapter.get(q.chapter) ?? 0) % ukIds.length]
      : q.chapter;
    if (ukIds?.length) indexByChapter.set(q.chapter, (indexByChapter.get(q.chapter) ?? 0) + 1);
    result.push(questionToBMSFrage(q, uk_id));
  }
  return result;
}

/** Typ A/M aus Pools + alle Typ-K-Fragen (für UK-Filter und getBMSFragenBySubject). */
function getAllPoolBMSFragen(): BMSFrage[] {
  const typAM = buildTypAPoolWithUkIds();
  const typK = [...biologiePoolTypK, ...chemiePoolTypK, ...physikPoolTypK, ...mathematikPoolTypK];
  return [...typAM, ...typK];
}

/** Typ-K-Fragen pro Fach (bereits BMSFrage-Format mit uk_id). */
const TYP_K_BY_SUBJECT: Record<"biologie" | "chemie" | "physik" | "mathematik", BMSFrage[]> = {
  biologie: biologiePoolTypK,
  chemie: chemiePoolTypK,
  physik: physikPoolTypK,
  mathematik: mathematikPoolTypK,
};

let cachedPool: BMSFrage[] | null = null;

function getPool(): BMSFrage[] {
  if (!cachedPool) cachedPool = getAllPoolBMSFragen();
  return cachedPool;
}

/**
 * Get all pool BMSFragen for the given uk_ids (no shuffle, no count limit).
 * For use with getNextQuestions so FSRS ordering can be applied on static data.
 */
export function getAllPoolBMSFragenForUKs(uk_ids: string[]): BMSFrage[] {
  if (!uk_ids.length) return [];
  const pool = getPool();
  const set = new Set(uk_ids);
  return filterValidBMSFragen(pool.filter((q) => set.has(q.uk_id)));
}

/**
 * Get pool questions for the given uk_ids, shuffled, capped at count.
 * Used when FragenTrainer source is "pool". No FSRS.
 * Enthält Typ A/M aus Pools; Typ K wird nur über getBMSFragenBySubject eingemischt.
 */
export function getPoolBMSFragen(uk_ids: string[], count = 8): BMSFrage[] {
  if (!uk_ids.length) return [];
  const pool = getPool();
  const set = new Set(uk_ids);
  const filtered = pool.filter((q) => set.has(q.uk_id));
  return shuffle(filterValidBMSFragen(filtered)).slice(0, count);
}

/**
 * Get BMS questions by subject (from static pool): Typ A/M + Typ K eingemischt.
 */
export function getBMSFragenBySubject(
  subject: "biologie" | "chemie" | "physik" | "mathematik",
  count: number
): BMSFrage[] {
  const questions = getQuestionsBySubject(subject);
  const typAM = questions.map((q) => questionToBMSFrage(q, q.chapter));
  const typK = TYP_K_BY_SUBJECT[subject] ?? [];
  const combined = shuffle([...typAM, ...typK]);
  const selected = combined.slice(0, Math.min(count, combined.length));
  return filterValidBMSFragen(selected);
}
