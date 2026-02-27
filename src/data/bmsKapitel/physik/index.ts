import type { Kapitel } from "../types";

import { physKapMechanik } from "./kap1-mechanik-grundlagen";
import { physKapFluid } from "./kap2-fluidmechanik";
import { physKap3 } from "./kap3-schwingungen-und-wellen";
import { physKap4 } from "./kap4-waermelehre";
import { physKapElektrizitaet } from "./kap4-elektrizitaet-optik";
import { physKap7 } from "./kap7-atomphysik";

export const physikKapitel: Kapitel[] = [
  { ...physKapMechanik, sequence: 1, sequenceTitle: "Mechanik" },
  { ...physKapFluid, sequence: 2, sequenceTitle: "Fluidmechanik" },
  { ...physKap3, sequence: 3, sequenceTitle: "Wellen" },
  { ...physKap4, sequence: 4, sequenceTitle: "Wärmelehre" },
  { ...physKapElektrizitaet, sequence: 5, sequenceTitle: "E-Lehre & Optik" },
  { ...physKap7, sequence: 6, sequenceTitle: "Atomphysik" },
];
