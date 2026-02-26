/**
 * Konkreter Tagesplan: welche Kapitel lernen/wiederholen, wie viele Fragen/KFF/TV/SEK.
 * Macht den Lernplan täglich umsetzbar ohne Überforderung.
 */

import type { AdaptivePlanResult } from "@/lib/adaptivePlan";
import { alleKapitel, getKapitelBySubject } from "@/data/bmsKapitel";
import { pathForChapter } from "@/lib/bmsRoutes";
import type { Kapitel } from "@/data/bmsKapitel/types";

export type BmsReadItem = {
  chapterId: string;
  subchapterId?: string;
  title: string;
  path: string;
  subject: string;
};

export type BmsReviewItem = {
  chapterId: string;
  /** Konkretes Unterkapitel zum Wiederholen; Link geht direkt dorthin */
  subchapterId?: string;
  /** Anzeige: z.B. "Zelle: Membranaufbau" */
  title: string;
  /** Link direkt zum UK (pathForChapter + ?uk=index) */
  path: string;
  subject: string;
};

export type BmsQuestionsTarget = {
  fach: "biologie" | "chemie" | "physik" | "mathematik";
  count: number;
  label: string;
};

export type KffTarget = {
  domain: "kff-zahlenfolgen" | "kff-implikationen";
  count: number;
  label: string;
};

/** SEK: Unterteil (Erkennen / Regulieren / Entscheiden) + Anzahl Beispiele */
export type SekTarget = {
  domain: "sek-erkennen" | "sek-regulieren" | "sek-entscheiden";
  count: number;
  label: string;
};

export interface ConcreteDailyPlan {
  /** 1–2 neue Unterkapitel zum Lernen (Reihenfolge wie im BMS-Lernbereich, ggf. mehrere Fächer) */
  bmsRead: BmsReadItem[];
  /** Fällige Unterkapitel zum Wiederholen (konkret mit Link direkt zum UK, max. 8) */
  bmsReview: BmsReviewItem[];
  /** Fragen pro BMS-Fach (aus Wochenplan abgeleitet) */
  bmsQuestions: BmsQuestionsTarget[];
  /** KFF: z.B. 5 Zahlenfolgen, 5 Implikationen */
  kffTasks: KffTarget[];
  /** TV: Anzahl Texte (1–2) */
  tvTexts: number;
  /** SEK: Unterteile mit Anzahl Beispiele (Erkennen, Regulieren, Entscheiden) */
  sekTasks: SekTarget[];
  /** Geschätzte Gesamtminuten heute */
  totalMinutesEstimate: number;
}

const MIN_PER_BMS_QUESTION = 4;
const MIN_PER_KFF_TASK = 2;
const MIN_PER_TV_TEXT = 15;
const MAX_BMS_READ = 3;
/** Max. 3 Kapitel pro Tag wiederholen; nur Kapitel/UKs, die schon gelernt wurden. Max. 3 Einträge (UKs) in der Liste. */
const MAX_BMS_REVIEW_CHAPTERS = 3;
const MAX_BMS_REVIEW_UK = 3;
const KFF_SPLIT_ZF = 0.5; // 50% Zahlenfolgen, 50% Implikationen

const SUBJECT_ORDER: string[] = ["biologie", "chemie", "physik", "mathematik"];

function bySequence(a: Kapitel, b: Kapitel): number {
  const sa = a.sequence ?? 999;
  const sb = b.sequence ?? 999;
  return sa - sb;
}

/** Alle Unterkapitel in der Reihenfolge des BMS-Lernbereichs: 1. UK des 1. Kapitels, 2. UK des 1. Kapitels, … (Bio → Chemie → Physik → Mathe). */
function getOrderedBmsReadItems(): BmsReadItem[] {
  const items: BmsReadItem[] = [];
  for (const subject of SUBJECT_ORDER) {
    const chapters = getKapitelBySubject(subject).sort(bySequence);
    for (const ch of chapters) {
      const uks = ch.unterkapitel ?? [];
      for (let ukIndex = 0; ukIndex < uks.length; ukIndex++) {
        const uk = uks[ukIndex];
        if (!uk?.id) continue;
        items.push({
          chapterId: ch.id,
          subchapterId: uk.id,
          title: `${ch.sequenceTitle || ch.title}: ${uk.title}`,
          path: `${pathForChapter(ch.subject, ch.id)}?uk=${ukIndex}`,
          subject: ch.subject,
        });
      }
    }
  }
  return items;
}

function getChapterById(chapterId: string): Kapitel | undefined {
  return alleKapitel.find((k) => k.id === chapterId);
}

/**
 * Baut den konkreten Tagesplan aus dem adaptiven Plan und Nutzerstand.
 * Wenn completedChapterIds übergeben wird, erscheinen bei BMS-Fragen nur Fächer,
 * zu denen mindestens ein abgeschlossenes Kapitel existiert.
 */
export function buildConcreteDailyPlan(
  plan: AdaptivePlanResult,
  options: {
    dueChapterIds: string[];
    lastViewedChapterId?: string | null;
    lastViewedUnterkapitelId?: string | null;
    /** Nur BMS-Fragen für Fächer mit mindestens einem abgeschlossenen Kapitel */
    completedChapterIds?: string[];
  }
): ConcreteDailyPlan {
  const { dueChapterIds, completedChapterIds } = options;

  const weeklyPlan = plan.weeklyPlan;
  const bmsItem = weeklyPlan.find((p) => p.module === "BMS");
  const kffItem = weeklyPlan.find((p) => p.module === "KFF");
  const tvItem = weeklyPlan.find((p) => p.module === "TV");
  const sekItem = weeklyPlan.find((p) => p.module === "SEK");

  const bmsMinutesPerDay = bmsItem ? bmsItem.minutesPerWeek / 7 : 0;
  const kffMinutesPerDay = kffItem ? kffItem.minutesPerWeek / 7 : 0;
  const tvMinutesPerDay = tvItem ? tvItem.minutesPerWeek / 7 : 0;
  const sekMinutesPerDay = sekItem ? Math.round(sekItem.minutesPerWeek / 7) : 0;

  // BMS: Lernen – strikte Reihenfolge: immer 1. UK des 1. Kapitels, dann 2. UK des 1. Kapitels usw.; nur noch nicht gemachte
  const completedSet = new Set(completedChapterIds ?? []);
  const orderedItems = getOrderedBmsReadItems();
  const bmsRead: BmsReadItem[] = [];
  for (let i = 0; i < orderedItems.length && bmsRead.length < MAX_BMS_READ; i++) {
    const item = orderedItems[i]!;
    const ukId = item.subchapterId ?? item.chapterId;
    if (!completedSet.has(ukId) && !completedSet.has(item.chapterId)) {
      bmsRead.push(item);
    }
  }

  // BMS: Wiederholen – nur bereits gelernte Kapitel, max. 3 Kapitel pro Tag; pro Kapitel konkrete UKs mit direktem Link
  const bmsReview: BmsReviewItem[] = [];
  const learnedDueChapterIds = dueChapterIds.filter((chapterId) => {
    const k = getChapterById(chapterId);
    if (!k) return false;
    if (completedSet.has(chapterId)) return true;
    return (k.unterkapitel ?? []).some((u) => u?.id && completedSet.has(u.id));
  });
  const chaptersToReview = learnedDueChapterIds.slice(0, MAX_BMS_REVIEW_CHAPTERS);
  for (const chapterId of chaptersToReview) {
    if (bmsReview.length >= MAX_BMS_REVIEW_UK) break;
    const k = getChapterById(chapterId);
    if (!k) continue;
    const subject = k.subject ?? "biologie";
    const uks = k.unterkapitel ?? [];
    for (let ukIndex = 0; ukIndex < uks.length && bmsReview.length < MAX_BMS_REVIEW_UK; ukIndex++) {
      const uk = uks[ukIndex];
      if (!uk?.id) continue;
      // Nur UKs anzeigen, die bereits abgehakt sind (in completedChapters)
      if (!completedSet.has(uk.id)) continue;
      bmsReview.push({
        chapterId,
        subchapterId: uk.id,
        title: `${k.sequenceTitle || k.title}: ${uk.title}`,
        path: `${pathForChapter(subject, chapterId)}?uk=${ukIndex}`,
        subject,
      });
    }
  }
  // Falls keine UKs (Kapitel ohne Unterkapitel): ein Eintrag pro Kapitel, nur wenn abgehakt
  if (bmsReview.length === 0) {
    for (const chapterId of chaptersToReview) {
      if (!completedSet.has(chapterId)) continue;
      const k = getChapterById(chapterId);
      const title = k?.sequenceTitle || k?.title || chapterId;
      const subject = k?.subject ?? "biologie";
      bmsReview.push({
        chapterId,
        title,
        path: pathForChapter(subject, chapterId),
        subject,
      });
    }
  }

  // BMS: Fragen pro Fach (aus bmsSubPlan)
  let bmsQuestions: BmsQuestionsTarget[] = plan.bmsSubPlan
    .map((sub) => {
      const dailyMins = sub.minutes / 7;
      const count = Math.max(0, Math.round(dailyMins / MIN_PER_BMS_QUESTION));
      if (count <= 0) return null;
      const label =
        sub.fach === "biologie"
          ? "Biologie"
          : sub.fach === "chemie"
            ? "Chemie"
            : sub.fach === "physik"
              ? "Physik"
              : "Mathematik";
      return { fach: sub.fach, count, label };
    })
    .filter((x): x is BmsQuestionsTarget => x !== null);

  // Wenn keine Verteilung, aber BMS-Zeit: mind. 1–2 Fragen pro Fach
  if (bmsQuestions.length === 0 && bmsMinutesPerDay >= 10) {
    const totalQuestions = Math.max(2, Math.round(bmsMinutesPerDay / MIN_PER_BMS_QUESTION));
    const perFach = Math.max(1, Math.floor(totalQuestions / 4));
    bmsQuestions = [
      { fach: "biologie", count: perFach, label: "Biologie" },
      { fach: "chemie", count: perFach, label: "Chemie" },
      { fach: "physik", count: perFach, label: "Physik" },
      { fach: "mathematik", count: perFach, label: "Mathematik" },
    ];
  }

  // Nur Fächer anzeigen, zu denen mindestens ein Kapitel oder Unterkapitel abgeschlossen ist.
  // completedChapters enthält sowohl Kapitel-IDs (bei Vollabschluss) als auch Unterkapitel-IDs (uk.id).
  if (completedChapterIds && completedChapterIds.length > 0) {
    const completedSet = new Set(completedChapterIds);
    bmsQuestions = bmsQuestions.filter((q) => {
      const chapters = getKapitelBySubject(q.fach);
      return chapters.some(
        (ch) =>
          completedSet.has(ch.id) ||
          (ch.unterkapitel ?? []).some((u) => u?.id && completedSet.has(u.id))
      );
    });
  }

  // KFF: Zahlenfolgen + Implikationen
  const kffTotalTasks = Math.max(0, Math.round(kffMinutesPerDay / MIN_PER_KFF_TASK));
  const zfCount = Math.max(0, Math.round(kffTotalTasks * KFF_SPLIT_ZF));
  const impCount = Math.max(0, kffTotalTasks - zfCount);
  const kffTasks: KffTarget[] = [];
  if (zfCount > 0)
    kffTasks.push({ domain: "kff-zahlenfolgen", count: zfCount, label: "Zahlenfolgen" });
  if (impCount > 0)
    kffTasks.push({ domain: "kff-implikationen", count: impCount, label: "Implikationen" });

  // TV: 1–2 Texte
  const tvTexts =
    tvMinutesPerDay >= MIN_PER_TV_TEXT * 2 ? 2 : tvMinutesPerDay >= MIN_PER_TV_TEXT ? 1 : 0;

  // SEK: Minuten → Anzahl Beispiele (~2.5 Min pro Beispiel), auf Erkennen / Regulieren / Entscheiden verteilen
  const MIN_PER_SEK_EXAMPLE = 2.5;
  const totalSekExamples = Math.max(0, Math.round(sekMinutesPerDay / MIN_PER_SEK_EXAMPLE));
  const sekDomains: {
    domain: "sek-erkennen" | "sek-regulieren" | "sek-entscheiden";
    label: string;
  }[] = [
    { domain: "sek-erkennen", label: "Erkennen" },
    { domain: "sek-regulieren", label: "Regulieren" },
    { domain: "sek-entscheiden", label: "Entscheiden" },
  ];
  const sekTasks: SekTarget[] = [];
  if (totalSekExamples > 0) {
    const perDomain = Math.floor(totalSekExamples / 3);
    const remainder = totalSekExamples % 3;
    sekDomains.forEach((d, i) => {
      const count = perDomain + (i < remainder ? 1 : 0);
      if (count > 0) sekTasks.push({ domain: d.domain, count, label: d.label });
    });
  }

  const totalMinutesEstimate =
    Math.round(bmsMinutesPerDay) +
    Math.round(kffMinutesPerDay) +
    Math.round(tvMinutesPerDay) +
    sekMinutesPerDay;

  return {
    bmsRead,
    bmsReview,
    bmsQuestions,
    kffTasks,
    tvTexts,
    sekTasks,
    totalMinutesEstimate,
  };
}
