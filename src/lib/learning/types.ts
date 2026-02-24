/**
 * Today Engine – zentrale Typen für priorisierte Lernaufgaben.
 * Lokal first, später sync-fähig.
 */

export type LearningObjectType = "chapter" | "subchapter" | "merksatz" | "question" | "keyword";

/** Referenzen für Kontext-Sprünge (z. B. Kapitel + Unterkapitel-ID). */
export type LearningObjectRefs = {
  chapterId?: string;
  subchapterId?: string;
  subject?: string;
  /** Pfad für direkte Navigation (z. B. /bms/biologie/kap1-zelle) */
  path?: string;
  /** Optional: Anker/Block-ID zum Scrollen (z. B. merksatz-xyz) */
  anchor?: string;
};

export type ExamWeight = "zentral" | "ergaenzend" | "optional";

export interface LearningObject {
  id: string;
  type: LearningObjectType;
  refs: LearningObjectRefs;
  examWeight: ExamWeight;
  /** Anzeige-Titel */
  title?: string;
}

/** SRS-Zustand pro Objekt (kann aus SpacedItem / ChapterProgress abgeleitet werden). */
export interface ProgressState {
  lastSeen: string;
  nextDue: string;
  ease: number;
  streakCorrect: number;
  streakWrong: number;
  difficulty: number;
  /** Anzahl Wiederholungen (Repetitions) */
  repetitions: number;
}

/** Fehler-Event für Schwächen-Aggregation. */
export interface ErrorEvent {
  timestamp: string;
  objectId: string;
  objectType: LearningObjectType;
  context?: string;
}

export type TodayTaskReason = "due" | "weak" | "plan" | "continue" | "daily";

export interface TodayEngineTask {
  objectId: string;
  objectType: LearningObjectType;
  reason: TodayTaskReason;
  priority: number;
  refs: LearningObjectRefs;
  title?: string;
  /** Optional: Schwächen-Score wenn reason === 'weak' */
  weaknessScore?: number;
}

export interface BuildTodayOptions {
  dueReviewIds: string[];
  dueChapterIds: string[];
  topWeaknessIds: string[];
  learningPlanTargetMinutes?: Record<string, number>;
  lastSessionObjectId?: string | null;
  lastPath?: string | null;
  includeDailyBMS?: boolean;
  maxTasks?: number;
  /** Heutiges Datum YYYY-MM-DD */
  today: string;
}
