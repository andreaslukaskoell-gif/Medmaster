import type { Kapitel } from '../types';
import { chemKap1 } from './kap1-periodensystem';
import { chemKap2 } from './kap2-atombau';
import { chemKap3 } from './kap3-bindungen';
import { chemKap4 } from './kap4-stoechiometrie';
import { chemKap5 } from './kap5-gasgesetze';
import { chemKap6 } from './kap6-aggregatzustaende';
import { chemKap7 } from './kap7-reaktionen';
import { chemKap8 } from './kap8-saeure-base';
import { chemKap9 } from './kap9-redox';
import { chemKap10 } from './kap10-organik';
import { chemKap11 } from './kap11-biochemie';
import { chemKap12 } from './kap12-stoffwechsel';

export const chemieKapitel: Kapitel[] = [
  chemKap1,
  chemKap2,
  chemKap3,
  chemKap4,
  chemKap5,
  chemKap6,
  chemKap7,
  chemKap8,
  chemKap9,
  chemKap10,
  chemKap11,
  chemKap12,
];
