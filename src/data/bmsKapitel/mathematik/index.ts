import type { Kapitel } from '../types';

import { mathKap1 } from './kap1-zehnerpotenzen';
import { mathKap2 } from './kap2-algebra';
import { mathKap3 } from './kap3-geometrie';
import { mathKap4 } from './kap4-einheiten';
import { mathKap5 } from './kap5-funktionen';
import { mathKap6 } from './kap6-vektorrechnung';

export const mathematikKapitel: Kapitel[] = [
  { ...mathKap1, sequence: 1, sequenceTitle: "Zehnerpotenzen" },
  { ...mathKap2, sequence: 2, sequenceTitle: "Algebra" },
  { ...mathKap3, sequence: 3, sequenceTitle: "Geometrie" },
  { ...mathKap4, sequence: 4, sequenceTitle: "Einheiten" },
  { ...mathKap5, sequence: 5, sequenceTitle: "Funktionen" },
  { ...mathKap6, sequence: 6, sequenceTitle: "Vektorrechnung" },
];
