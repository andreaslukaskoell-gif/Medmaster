import type { Kapitel } from '../types';
import { mathKap1 } from './kap1-grundlagen';
import { mathKap2 } from './kap2-algebra';
import { mathKap3 } from './kap3-funktionen';
import { mathKap4 } from './kap4-trigonometrie';
import { mathKap5 } from './kap5-analysis';
import { mathKap6 } from './kap6-geometrie';

export const mathematikKapitel: Kapitel[] = [
  mathKap1,
  mathKap2,
  mathKap3,
  mathKap4,
  mathKap5,
  mathKap6,
];
