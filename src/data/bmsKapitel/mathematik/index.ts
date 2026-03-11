import type { Kapitel } from "../types";

import { mathKapZahlen } from "./kap1-zahlen-einheiten";
import { mathKapAlgebra } from "./kap2-algebra-geometrie";
import { mathKapGrundlagen } from "./kap3-grundlagen";
import { mathKap5 } from "./kap5-funktionen";
import { mathKap6 } from "./kap6-vektorrechnung";

// ARCHIVED: Stochastik (kap7-stochastik.ts) — not in MedAT 2026 Stichwortliste
// Full content preserved at: src/data/bmsKapitel/mathematik/kap7-stochastik.ts

export const mathematikKapitel: Kapitel[] = [
  { ...mathKapZahlen, sequence: 1, sequenceTitle: "Zahlen & Einheiten" },
  { ...mathKapAlgebra, sequence: 2, sequenceTitle: "Algebra & Geometrie" },
  { ...mathKapGrundlagen, sequence: 3, sequenceTitle: "Grundlagen" },
  { ...mathKap5, sequence: 4, sequenceTitle: "Funktionen" },
  { ...mathKap6, sequence: 5, sequenceTitle: "Vektoren" },
];
