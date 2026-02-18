export type { Kapitel, Unterkapitel, SelfTestQuestion } from './types';

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

export { biologieKapitel, chemieKapitel, physikKapitel, mathematikKapitel };
