import type { ChapterProgress } from "@/store/useStore";
import { getKapitelBySubject } from "@/data/bmsKapitel";

export type SubjectId = "biologie" | "chemie" | "physik" | "mathematik";

export interface SubjectHeat {
  subject: SubjectId;
  label: string;
  /** 0 = frisch (grün), 0.5 = wird vergessen (gelb), 1 = dringend (rot) */
  heat: number;
  /** Anzahl fälliger Kapitel (nextReviewDate <= heute) */
  overdueCount: number;
  /** Anzahl Kapitel im Fach (mit SRS-Eintrag oder alle) */
  totalChapters: number;
}

const SUBJECT_LABELS: Record<SubjectId, string> = {
  biologie: "Biologie",
  chemie: "Chemie",
  physik: "Physik",
  mathematik: "Mathematik",
};

const SUBJECT_IDS: SubjectId[] = ["biologie", "chemie", "physik", "mathematik"];

/**
 * Berechnet den „Memory-Heat“ pro Kapitel aus SRS:
 * - Überfällig (nextReviewDate < heute) → 1 (rot)
 * - Lange nicht wiederholt (lastReviewed > 7–14 Tage) → 0.5–0.7 (gelb)
 * - Nie wiederholt → 0.4 (gelb)
 * - Kürzlich wiederholt, nicht fällig → 0 (grün)
 */
function chapterHeat(
  progress: ChapterProgress | undefined,
  today: string
): number {
  if (!progress) return 0.4; // Nie wiederholt → mittlere Dringlichkeit
  const { nextReviewDate, lastReviewed } = progress;
  if (nextReviewDate <= today) return 1; // Überfällig → rot
  const last = new Date(lastReviewed).getTime();
  const now = new Date(today).getTime();
  const daysSince = (now - last) / (24 * 60 * 60 * 1000);
  if (daysSince >= 14) return 0.75;
  if (daysSince >= 7) return 0.5;
  return 0.15; // Kürzlich wiederholt → grün
}

/**
 * Heat pro Fach: Maximum der Kapitel-Heats (ein überfälliges Kapitel = Fach rot).
 */
export function getSubjectHeats(
  userProgress: Record<string, ChapterProgress>
): SubjectHeat[] {
  const today = new Date().toISOString().split("T")[0];
  return SUBJECT_IDS.map((subject) => {
    const chapters = getKapitelBySubject(subject);
    let maxHeat = 0;
    let overdueCount = 0;
    for (const ch of chapters) {
      const p = userProgress[ch.id];
      const h = chapterHeat(p, today);
      if (h > maxHeat) maxHeat = h;
      if (p && p.nextReviewDate <= today) overdueCount += 1;
    }
    return {
      subject,
      label: SUBJECT_LABELS[subject],
      heat: chapters.length === 0 ? -1 : maxHeat,
      overdueCount,
      totalChapters: chapters.length,
    };
  });
}

/**
 * Farbe für Heat 0..1: Grün → Gelb → Rot.
 * heat < 0 = kein Inhalt (neutral/grau).
 */
export function heatToColor(heat: number): { bg: string; border: string; text: string; pulse: string } {
  if (heat < 0) {
    return {
      bg: "bg-gray-300 dark:bg-gray-600",
      border: "border-gray-400 dark:border-gray-500",
      text: "text-gray-700 dark:text-gray-300",
      pulse: "",
    };
  }
  if (heat >= 0.75) {
    return {
      bg: "bg-red-500/90 dark:bg-red-500/80",
      border: "border-red-500",
      text: "text-red-900 dark:text-red-100",
      pulse: "animate-pulse",
    };
  }
  if (heat >= 0.4) {
    return {
      bg: "bg-amber-500/90 dark:bg-amber-500/80",
      border: "border-amber-500",
      text: "text-amber-900 dark:text-amber-100",
      pulse: "",
    };
  }
  return {
    bg: "bg-emerald-500/90 dark:bg-emerald-500/80",
    border: "border-emerald-500",
    text: "text-emerald-900 dark:text-emerald-100",
    pulse: "",
  };
}
