export type { Kapitel, Unterkapitel, SelfTestQuestion } from './types';

import { biologieKapitel } from './biologie';
import { chemieKapitel } from './chemie';
import { physikKapitel } from './physik';
import { mathematikKapitel } from './mathematik';
import type { Kapitel } from './types';

export const alleKapitel: Kapitel[] = [
  ...biologieKapitel,
  ...chemieKapitel,
  ...physikKapitel,
  ...mathematikKapitel,
];

export function getKapitelBySubject(subject: string): Kapitel[] {
  return alleKapitel.filter((k) => k.subject === subject);
}

export function getKapitelById(id: string): Kapitel | undefined {
  return alleKapitel.find((k) => k.id === id);
}

export { biologieKapitel, chemieKapitel, physikKapitel, mathematikKapitel };
