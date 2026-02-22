import type { Kapitel } from "../types";

import { physKapMechanik } from "./kap1-mechanik-grundlagen";
import { physKap3 } from "./kap3-schwingungen-und-wellen";
import { physKap4 } from "./kap4-waermelehre";
import { physKapElektrizitaet } from "./kap4-elektrizitaet-optik";
import { physKap7 } from "./kap7-atomphysik";

export const physikKapitel: Kapitel[] = [
  { ...physKapMechanik, sequence: 1, sequenceTitle: "Mechanik" },
  { ...physKap3, sequence: 2, sequenceTitle: "Wellen" },
  { ...physKap4, sequence: 3, sequenceTitle: "Wärmelehre" },
  { ...physKapElektrizitaet, sequence: 4, sequenceTitle: "E-Lehre & Optik" },
  { ...physKap7, sequence: 5, sequenceTitle: "Atomphysik" },
];
