import type { Kapitel } from '../types';

import { bioKap1 } from './kap1-die-zelle';
import { bioKap2 } from './kap2-gewebe';
import { bioKap3 } from './kap3-anatomie-physiologie';
import { bioKap4 } from './kap4-entwicklungsbiologie';
import { bioKap5 } from './kap5-klassische-genetik';
import { bioKap6 } from './kap6-molekulargenetik';
import { bioKap7 } from './kap7-methoden-der-genetik';
import { bioKap8 } from './kap8-humangenetik';
import { bioKap9 } from './kap9-evolution';
import { bioKap10 } from './kap10-oekologie';
import { bioKap11 } from './kap11-immunologie';

export const biologieKapitel: Kapitel[] = [
  { ...bioKap1,  sequence: 1,  sequenceTitle: 'Zelle',                linkedChapters: ['bio-kap2'] },
  { ...bioKap2,  sequence: 2,  sequenceTitle: 'Gewebe',               linkedChapters: ['bio-kap1', 'bio-kap3'] },
  { ...bioKap3,  sequence: 3,  sequenceTitle: 'Anatomie',             linkedChapters: ['bio-kap2'] },
  { ...bioKap4,  sequence: 4,  sequenceTitle: 'Entwicklung',          linkedChapters: ['bio-kap5'] },
  { ...bioKap5,  sequence: 5,  sequenceTitle: 'Klassische Genetik',   linkedChapters: ['bio-kap6', 'bio-kap7'] },
  { ...bioKap6,  sequence: 6,  sequenceTitle: 'Molekulargenetik',     linkedChapters: ['bio-kap5', 'bio-kap7'] },
  { ...bioKap7,  sequence: 7,  sequenceTitle: 'Methoden',             linkedChapters: ['bio-kap6', 'bio-kap8'] },
  { ...bioKap8,  sequence: 8,  sequenceTitle: 'Humangenetik',         linkedChapters: ['bio-kap7'] },
  { ...bioKap9,  sequence: 9,  sequenceTitle: 'Evolution',            linkedChapters: ['bio-kap5'] },
  { ...bioKap10, sequence: 10, sequenceTitle: 'Ökologie',             linkedChapters: [] },
  { ...bioKap11, sequence: 11, sequenceTitle: 'Immunologie',          linkedChapters: ['bio-kap3'] },
];
