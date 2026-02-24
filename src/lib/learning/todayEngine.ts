/**
 * Today Engine – baut die priorisierte Tagesliste aus SRS, Schwächen, Lernplan, Weiterlernen.
 */

import type { TodayEngineTask, TodayTaskReason, LearningObjectRefs } from "./types";
import type { DueItem } from "./reviewQueue";
import type { WeaknessEntry } from "./weaknesses";
import { pathForChapter } from "@/lib/bmsRoutes";
import { alleKapitel } from "@/data/bmsKapitel";

const DEFAULT_MAX_TASKS = 25;

export type BuildTodayInput = {
  dueItems: DueItem[];
  topWeaknesses: WeaknessEntry[];
  learningPlanTargetMinutes?: Record<string, number>;
  lastViewedChapterId?: string | null;
  lastViewedUnterkapitelId?: string | null;
  lastPath?: string | null;
  includeDailyBMS?: boolean;
  maxTasks?: number;
  today: string;
};

/** Refs für eine Frage (questionId) – wir kennen ggf. Kapitel aus Datenmodell. */
function refsForQuestion(objectId: string): LearningObjectRefs {
  for (const k of alleKapitel) {
    const uk = k.unterkapitel?.find((u) => u?.id && objectId.startsWith(u.id));
    if (uk) {
      const path = pathForChapter(k.subject, k.id);
      return { chapterId: k.id, subchapterId: uk.id, subject: k.subject, path };
    }
  }
  return {};
}

/** Refs für ein Kapitel. */
function refsForChapter(chapterId: string): LearningObjectRefs {
  const k = alleKapitel.find((c) => c.id === chapterId);
  if (k) {
    const path = pathForChapter(k.subject, k.id);
    return { chapterId: k.id, subject: k.subject, path };
  }
  return { chapterId: chapterId };
}

export function buildTodayTasks(input: BuildTodayInput): TodayEngineTask[] {
  const {
    dueItems,
    topWeaknesses,
    lastViewedChapterId,
    lastViewedUnterkapitelId,
    lastPath,
    maxTasks = DEFAULT_MAX_TASKS,
    today,
  } = input;

  const tasks: TodayEngineTask[] = [];
  const seen = new Set<string>();

  const add = (
    objectId: string,
    type: "question" | "chapter",
    reason: TodayTaskReason,
    priority: number,
    weaknessScore?: number
  ) => {
    if (seen.has(objectId)) return;
    seen.add(objectId);
    const refs = type === "question" ? refsForQuestion(objectId) : refsForChapter(objectId);
    tasks.push({
      objectId,
      objectType: type,
      reason,
      priority,
      refs,
      weaknessScore,
    });
  };

  let priority = 1000;

  // 1) Überfällige Reviews (SRS)
  for (const d of dueItems) {
    add(d.objectId, d.type, "due", priority--);
    if (tasks.length >= maxTasks) return tasks;
  }

  // 2) Starke Schwächen (ohne bereits als due)
  for (const w of topWeaknesses) {
    if (seen.has(w.objectId)) continue;
    add(
      w.objectId,
      w.objectType === "chapter" ? "chapter" : "question",
      "weak",
      priority--,
      w.score
    );
    if (tasks.length >= maxTasks) return tasks;
  }

  // 3) Weiterlernen (zuletzt begonnenes Kapitel/Unterkapitel)
  if (lastViewedUnterkapitelId && lastViewedChapterId) {
    const chapter = alleKapitel.find((k) => k.id === lastViewedChapterId);
    if (chapter) {
      const path = pathForChapter(chapter.subject, chapter.id);
      if (!seen.has(lastViewedUnterkapitelId)) {
        seen.add(lastViewedUnterkapitelId);
        tasks.push({
          objectId: lastViewedUnterkapitelId,
          objectType: "subchapter",
          reason: "continue",
          priority: priority--,
          refs: {
            chapterId: lastViewedChapterId,
            subchapterId: lastViewedUnterkapitelId,
            subject: chapter.subject,
            path,
          },
        });
        if (tasks.length >= maxTasks) return tasks;
      }
    }
  } else if (lastViewedChapterId && !seen.has(lastViewedChapterId)) {
    add(lastViewedChapterId, "chapter", "continue", priority--);
    if (tasks.length >= maxTasks) return tasks;
  }

  return tasks;
}

/** Zählt fällige Reviews (für Dashboard-Badge). */
export function countDueReviews(dueItems: DueItem[]): number {
  return dueItems.length;
}

/** Zählt empfohlene Schwächen (für Dashboard). */
export function countWeaknessRecommendations(weaknessEntries: WeaknessEntry[]): number {
  return Math.min(10, weaknessEntries.length);
}
