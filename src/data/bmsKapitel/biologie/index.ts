import type { Kapitel } from '../types';

import { bioKap1 } from './kap1-die-zelle-test';
import { bioKap7 } from './kap7-methoden-der-genetik';
// bioKap2 (Zellkern und Ribosomen) removed - duplicate/consolidated into bioKap1

export const biologieKapitel: Kapitel[] = [
  bioKap1,
  bioKap7,
];
