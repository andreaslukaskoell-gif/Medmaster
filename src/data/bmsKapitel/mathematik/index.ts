import type { Kapitel } from "../types";

import { mathKapZahlen } from "./kap1-zahlen-einheiten";
import { mathKapAlgebra } from "./kap2-algebra-geometrie";
import { mathKap5 } from "./kap5-funktionen";
import { mathKap6 } from "./kap6-vektorrechnung";
import { mathKapStochastik } from "./kap7-stochastik";

export const mathematikKapitel: Kapitel[] = [
  { ...mathKapZahlen, sequence: 1, sequenceTitle: "Zahlen & Einheiten" },
  { ...mathKapAlgebra, sequence: 2, sequenceTitle: "Algebra & Geometrie" },
  { ...mathKap5, sequence: 3, sequenceTitle: "Funktionen" },
  { ...mathKap6, sequence: 4, sequenceTitle: "Vektoren" },
  { ...mathKapStochastik, sequence: 5, sequenceTitle: "Stochastik" },
];
