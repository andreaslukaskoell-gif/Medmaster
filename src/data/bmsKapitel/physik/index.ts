import type { Kapitel } from '../types';

import { physKap1 } from './kap1-groessen-und-einheiten';
import { physKap2 } from './kap2-mechanik';
import { physKap3 } from './kap3-schwingungen-und-wellen';
import { physKap4 } from './kap4-waermelehre';
import { physKap5 } from './kap5-elektrizitaetslehre';
import { physKap6 } from './kap6-optik';
import { physKap7 } from './kap7-atomphysik';

export const physikKapitel: Kapitel[] = [
  { ...physKap1, sequence: 1, sequenceTitle: "Größen und Einheiten" },
  { ...physKap2, sequence: 2, sequenceTitle: "Mechanik" },
  { ...physKap3, sequence: 3, sequenceTitle: "Schwingungen und Wellen" },
  { ...physKap4, sequence: 4, sequenceTitle: "Wärmelehre" },
  { ...physKap5, sequence: 5, sequenceTitle: "Elektrizitätslehre" },
  { ...physKap6, sequence: 6, sequenceTitle: "Optik" },
  { ...physKap7, sequence: 7, sequenceTitle: "Atomphysik" },
];
