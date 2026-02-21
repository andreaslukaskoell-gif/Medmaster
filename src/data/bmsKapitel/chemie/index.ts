import type { Kapitel } from '../types';

import { chemKap1 } from './kap1-atombau';
import { chemKap2 } from './kap2-mikrokosmos';
import { chemKap3 } from './kap3-gasgesetze';
import { chemKap4 } from './kap4-aggregatzustaende';
import { chemKap5 } from './kap5-periodensystem';
import { chemKap6 } from './kap6-chemische-bindung';
import { chemKap7 } from './kap7-chemische-reaktionen';
import { chemKap8 } from './kap8-chemisches-gleichgewicht';
import { chemKap9 } from './kap9-elemente-und-verbindungen';
import { chemKap10 } from './kap10-saeure-base';
import { chemKap11 } from './kap11-redox-reaktionen';
import { chemKap12 } from './kap12-organische-chemie';
import { chemKap13 } from './kap13-naturstoffe';

export const chemieKapitel: Kapitel[] = [
  { ...chemKap1, sequence: 1, sequenceTitle: "Atombau" },
  { ...chemKap2, sequence: 2, sequenceTitle: "Mikrokosmos" },
  { ...chemKap3, sequence: 3, sequenceTitle: "Gasgesetze" },
  { ...chemKap4, sequence: 4, sequenceTitle: "Aggregatzustände" },
  { ...chemKap5, sequence: 5, sequenceTitle: "Periodensystem" },
  { ...chemKap6, sequence: 6, sequenceTitle: "Chemische Bindung" },
  { ...chemKap7, sequence: 7, sequenceTitle: "Chemische Reaktionen" },
  { ...chemKap8, sequence: 8, sequenceTitle: "Chemisches Gleichgewicht" },
  { ...chemKap9, sequence: 9, sequenceTitle: "Elemente und Verbindungen" },
  { ...chemKap10, sequence: 10, sequenceTitle: "Säure-Base" },
  { ...chemKap11, sequence: 11, sequenceTitle: "Redox-Reaktionen" },
  { ...chemKap12, sequence: 12, sequenceTitle: "Organische Chemie" },
  { ...chemKap13, sequence: 13, sequenceTitle: "Naturstoffe" },
];
