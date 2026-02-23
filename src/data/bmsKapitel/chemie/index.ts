import type { Kapitel } from "../types";

import { chemKapAtom } from "./kap1-atombau-periodensystem";
import { chemKapMaterie } from "./kap2-materie-und-zustaende";
import { chemKap6 } from "./kap6-chemische-bindung";
import { chemKapReaktionen } from "./kap4-reaktionen-gleichgewicht";
import { chemKapAnorganisch } from "./kap5-anorganische-chemie";
import { chemKapOrganisch } from "./kap6-organische-chemie";

export const chemieKapitel: Kapitel[] = [
  { ...chemKapAtom, sequence: 1, sequenceTitle: "Atombau & PSE" },
  { ...chemKapMaterie, sequence: 2, sequenceTitle: "Materie" },
  { ...chemKap6, sequence: 3, sequenceTitle: "Chem. Bindung" },
  { ...chemKapReaktionen, sequence: 4, sequenceTitle: "Reaktionen" },
  { ...chemKapAnorganisch, sequence: 5, sequenceTitle: "Anorg. Chemie" },
  { ...chemKapOrganisch, sequence: 6, sequenceTitle: "Org. Chemie" },
];
