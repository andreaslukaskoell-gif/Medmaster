import type { Kapitel } from "../types";

import { chemKapAtom } from "./kap1-atombau-periodensystem";
import { chemKapMaterie } from "./kap2-materie-und-zustaende";
import { chemKap6 } from "./kap6-chemische-bindung";
import { chemKapReaktionen } from "./kap4-reaktionen-gleichgewicht";
import { chemKapAnorganisch } from "./kap5-anorganische-chemie";
import { chemKapOrganisch } from "./kap6-organische-chemie";
import { chemKapStoech } from "./kap3-stoechiometrie-loesungen";

export const chemieKapitel: Kapitel[] = [
  { ...chemKapAtom, sequence: 1, sequenceTitle: "Atombau & PSE" },
  { ...chemKapMaterie, sequence: 2, sequenceTitle: "Materie" },
  { ...chemKapStoech, sequence: 3, sequenceTitle: "Stöchiometrie" },
  { ...chemKap6, sequence: 4, sequenceTitle: "Chem. Bindung" },
  { ...chemKapReaktionen, sequence: 5, sequenceTitle: "Reaktionen" },
  { ...chemKapAnorganisch, sequence: 6, sequenceTitle: "Anorg. Chemie" },
  { ...chemKapOrganisch, sequence: 7, sequenceTitle: "Org. Chemie" },
];
