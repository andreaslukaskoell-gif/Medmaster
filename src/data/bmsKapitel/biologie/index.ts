import type { Kapitel } from '../types';

import { bioKap1 } from './kap1-die-zelle-test';
import { bioKap7 } from './kap7-methoden-der-genetik';
import { bioKap8 } from './kap8-humangenetik';
// bioKap2 (Zellkern und Ribosomen) removed - duplicate/consolidated into bioKap1

export const biologieKapitel: Kapitel[] = [
  {
    ...bioKap1,
    sequence: 1,
    sequenceTitle: "Zelle",
    linkedChapters: [], // Will be populated when Gewebe/Organe chapters exist
  },
  {
    ...bioKap7,
    sequence: 7,
    sequenceTitle: "Methoden",
    linkedChapters: ['bio-kap8'], // Related to Humangenetik
  },
  {
    ...bioKap8,
    sequence: 8,
    sequenceTitle: "Humangenetik",
    linkedChapters: ['bio-kap7'], // Related to Methoden der Genetik
  },
];
