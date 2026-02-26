/**
 * Konkreter Tagesplan: welche Kapitel lesen/wiederholen, wie viele Fragen/KFF/TV/SEK.
 * Macht den Lernplan täglich umsetzbar ohne Überforderung.
 */

import type { AdaptivePlanResult } from "@/lib/adaptivePlan";
import { alleKapitel } from "@/data/bmsKapitel";
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
  title: string;
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

export interface ConcreteDailyPlan {
  /** 1–2 neue Unterkapitel/Kapitel zum Lesen (Weiterlernen) */
  bmsRead: BmsReadItem[];
  /** Fällige Kapitel zum Wiederholen (max 5) */
  bmsReview: BmsReviewItem[];
  /** Fragen pro BMS-Fach (aus Wochenplan abgeleitet) */
  bmsQuestions: BmsQuestionsTarget[];
  /** KFF: z.B. 5 Zahlenfolgen, 5 Implikationen */
  kffTasks: KffTarget[];
  /** TV: Anzahl Texte (1–2) */
  tvTexts: number;
  /** SEK: Minuten pro Tag */
  sekMinutes: number;
  /** Geschätzte Gesamtminuten heute */
  totalMinutesEstimate: number;
}

const MIN_PER_BMS_QUESTION = 4;
const MIN_PER_KFF_TASK = 2;
const MIN_PER_TV_TEXT = 15;
const MAX_BMS_READ = 2;
const MAX_BMS_REVIEW = 5;
const KFF_SPLIT_ZF = 0.5; // 50% Zahlenfolgen, 50% Implikationen

function getChapterById(chapterId: string): Kapitel | undefined {
  return alleKapitel.find((k) => k.id === chapterId);
}

function getNextUnterkapitelOrChapter(
  lastChapterId: string | null,
  lastUnterkapitelId: string | null
): BmsReadItem | null {
  if (!lastChapterId) {
    // Kein Fortschritt: erstes Kapitel Biologie vorschlagen
    const bio = alleKapitel.filter((k) => k.subject === "biologie").sort(bySequence)[0];
    if (!bio?.unterkapitel?.length) return null;
    const first = bio.unterkapitel[0];
    if (!first?.id) return null;
    return {
      chapterId: bio.id,
      subchapterId: first.id,
      title: `${bio.sequenceTitle || bio.title}: ${first.title}`,
      path: pathForChapter(bio.subject, bio.id),
      subject: bio.subject,
    };
  }

  const chapter = getChapterById(lastChapterId);
  if (!chapter) return null;

  const uks = chapter.unterkapitel ?? [];
  if (lastUnterkapitelId) {
    const idx = uks.findIndex((u) => u?.id === lastUnterkapitelId);
    if (idx >= 0 && idx < uks.length - 1) {
      const next = uks[idx + 1];
      if (next?.id) {
        return {
          chapterId: chapter.id,
          subchapterId: next.id,
          title: `${chapter.sequenceTitle || chapter.title}: ${next.title}`,
          path: pathForChapter(chapter.subject, chapter.id),
          subject: chapter.subject,
        };
      }
    }
    // Nächstes Kapitel (gleiches Fach oder rotieren)
    const sameSubject = alleKapitel.filter((k) => k.subject === chapter.subject).sort(bySequence);
    const chIdx = sameSubject.findIndex((k) => k.id === chapter.id);
    if (chIdx >= 0 && chIdx < sameSubject.length - 1) {
      const nextChap = sameSubject[chIdx + 1]!;
      const firstUk = nextChap.unterkapitel?.[0];
      return {
        chapterId: nextChap.id,
        subchapterId: firstUk?.id,
        title: firstUk
          ? `${nextChap.sequenceTitle || nextChap.title}: ${firstUk.title}`
          : nextChap.sequenceTitle || nextChap.title,
        path: pathForChapter(nextChap.subject, nextChap.id),
        subject: nextChap.subject,
      };
    }
  } else {
    // Nur Kapitel bekannt: erstes UK dieses Kapitels
    const first = uks[0];
    if (first?.id) {
      return {
        chapterId: chapter.id,
        subchapterId: first.id,
        title: `${chapter.sequenceTitle || chapter.title}: ${first.title}`,
        path: pathForChapter(chapter.subject, chapter.id),
        subject: chapter.subject,
      };
    }
  }

  return null;
}

function bySequence(a: Kapitel, b: Kapitel): number {
  const sa = a.sequence ?? 999;
  const sb = b.sequence ?? 999;
  return sa - sb;
}

/**
 * Baut den konkreten Tagesplan aus dem adaptiven Plan und Nutzerstand.
 */
export function buildConcreteDailyPlan(
  plan: AdaptivePlanResult,
  options: {
    dueChapterIds: string[];
    lastViewedChapterId?: string | null;
    lastViewedUnterkapitelId?: string | null;
  }
): ConcreteDailyPlan {
  const { dueChapterIds, lastViewedChapterId, lastViewedUnterkapitelId } = options;

  const weeklyPlan = plan.weeklyPlan;
  const bmsItem = weeklyPlan.find((p) => p.module === "BMS");
  const kffItem = weeklyPlan.find((p) => p.module === "KFF");
  const tvItem = weeklyPlan.find((p) => p.module === "TV");
  const sekItem = weeklyPlan.find((p) => p.module === "SEK");

  const bmsMinutesPerDay = bmsItem ? bmsItem.minutesPerWeek / 7 : 0;
  const kffMinutesPerDay = kffItem ? kffItem.minutesPerWeek / 7 : 0;
  const tvMinutesPerDay = tvItem ? tvItem.minutesPerWeek / 7 : 0;
  const sekMinutesPerDay = sekItem ? Math.round(sekItem.minutesPerWeek / 7) : 0;

  // BMS: Lesen (1–2 Vorschläge)
  const bmsRead: BmsReadItem[] = [];
  for (let i = 0; i < MAX_BMS_READ; i++) {
    const item =
      i === 0
        ? getNextUnterkapitelOrChapter(
            lastViewedChapterId ?? null,
            lastViewedUnterkapitelId ?? null
          )
        : null;
    if (
      item &&
      !bmsRead.some((r) => r.chapterId === item.chapterId && r.subchapterId === item.subchapterId)
    ) {
      bmsRead.push(item);
    }
    if (!item) break;
  }

  // BMS: Wiederholen (fällige Kapitel, max 5)
  const bmsReview: BmsReviewItem[] = dueChapterIds.slice(0, MAX_BMS_REVIEW).map((chapterId) => {
    const k = getChapterById(chapterId);
    const title = k?.sequenceTitle || k?.title || chapterId;
    const subject = k?.subject ?? "biologie";
    return {
      chapterId,
      title,
      path: pathForChapter(subject, chapterId),
      subject,
    };
  });

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
    sekMinutes: sekMinutesPerDay,
    totalMinutesEstimate,
  };
}
