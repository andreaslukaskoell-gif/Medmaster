export type { Kapitel, Unterkapitel, SelfTestQuestion, QuizItem } from "./types";

import { biologieKapitel } from "./biologie/index";
import { chemieKapitel } from "./chemie/index";
import { physikKapitel } from "./physik/index";
import { mathematikKapitel } from "./mathematik/index";
import type { Kapitel } from "./types";

// Safe array spreading with fallback to empty arrays
export const alleKapitel: Kapitel[] = [
  ...(biologieKapitel || []),
  ...(chemieKapitel || []),
  ...(physikKapitel || []),
  ...(mathematikKapitel || []),
].filter((k): k is Kapitel => !!(k && k.id && k.title && k.subject)); // Filter invalid chapters

export function getKapitelBySubject(subject: string): Kapitel[] {
  if (!subject) return [];
  try {
    return alleKapitel.filter((k) => !!(k && k.subject === subject));
  } catch (error) {
    console.error("❌ Error filtering chapters by subject:", error);
    return [];
  }
}

export function getKapitelById(id: string): Kapitel | undefined {
  return alleKapitel.find((k) => k.id === id);
}

/**
 * Findet das Kapitel und den Index des Unterkapitels für "Zuletzt gelerntes Thema fortsetzen".
 */
export function findChapterByUnterkapitelId(
  unterkapitelId: string
): { kapitel: Kapitel; index: number } | null {
  for (const k of alleKapitel) {
    const unterkapitel = k.unterkapitel && Array.isArray(k.unterkapitel) ? k.unterkapitel : [];
    const index = unterkapitel.findIndex((u) => u && u.id === unterkapitelId);
    if (index >= 0) return { kapitel: k, index };
  }
  return null;
}

/**
 * Validates that all chapters in a subject have sequence numbers.
 * Logs warnings for chapters missing sequence metadata.
 * (Phase 4: STRUCT-02 quality gate)
 */
export function validateChapterSequence() {
  const subjects = ["biologie", "chemie", "physik", "mathematik"] as const;
  subjects.forEach((subject) => {
    const chapters = getKapitelBySubject(subject);
    const missing = chapters.filter((c) => c.sequence === undefined);
    if (missing.length > 0) {
      console.warn(`⚠️ ${subject} missing sequence: ${missing.map((c) => c.id).join(", ")}`);
    }
  });
}

/**
 * Validates that linkedChapters references point to existing chapters.
 * Logs warnings for broken smart-links.
 * (Phase 4: STRUCT-05 quality gate)
 */
export function validateSmartLinks() {
  const allIds = new Set(alleKapitel.map((c) => c.id));

  alleKapitel.forEach((chapter) => {
    if (chapter.linkedChapters && chapter.linkedChapters.length > 0) {
      chapter.linkedChapters.forEach((linkedId) => {
        if (!allIds.has(linkedId)) {
          console.warn(`❌ Chapter ${chapter.id} links to missing ${linkedId}`);
        }
      });
    }
  });
}

export { biologieKapitel, chemieKapitel, physikKapitel, mathematikKapitel };
