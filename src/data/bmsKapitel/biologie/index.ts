import type { Kapitel } from '../types';

import { bioKap1 } from './kap1-die-zelle-test';
import { bioKap7 } from './kap7-methoden-der-genetik';
import { bioKap8 } from './kap8-humangenetik';
// bioKap2 (Zellkern und Ribosomen) removed - duplicate/consolidated into bioKap1

export const biologieKapitel: Kapitel[] = [
  bioKap1,
  bioKap7,
  bioKap8,
];
