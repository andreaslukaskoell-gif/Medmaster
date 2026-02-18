export type { Kapitel, Unterkapitel, SelfTestQuestion, QuizItem } from './types';

import { biologieKapitel } from './biologie/index';
import { chemieKapitel } from './chemie/index';
import { physikKapitel } from './physik/index';
import { mathematikKapitel } from './mathematik/index';
import type { Kapitel } from './types';

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
    console.error('❌ Error filtering chapters by subject:', error);
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

export { biologieKapitel, chemieKapitel, physikKapitel, mathematikKapitel };
