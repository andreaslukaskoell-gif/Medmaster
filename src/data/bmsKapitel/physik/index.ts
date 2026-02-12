import type { Kapitel } from '../types';
import { physKap1 } from './kap1-kinematik';
import { physKap2 } from './kap2-dynamik';
import { physKap3 } from './kap3-energie';
import { physKap4 } from './kap4-impuls';
import { physKap5 } from './kap5-waerme';
import { physKap6 } from './kap6-elektrizitaet';
import { physKap7 } from './kap7-wellen';
import { physKap8 } from './kap8-atomphysik';

export const physikKapitel: Kapitel[] = [
  physKap1,
  physKap2,
  physKap3,
  physKap4,
  physKap5,
  physKap6,
  physKap7,
  physKap8,
];
