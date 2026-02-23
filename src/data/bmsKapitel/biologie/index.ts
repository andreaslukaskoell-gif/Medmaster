import type { Kapitel } from "../types";

import { bioKap1 } from "./kap1-die-zelle";
import { bioKapAnatomieGewebe } from "./kap2-anatomie-gewebe-physiologie";
import { bioKapEntwicklung } from "./kap3-entwicklung-evolution";
import { bioKapGenetik } from "./kap4-genetik";
import { bioKapOekologie } from "./kap5-oekologie-immunologie";

export const biologieKapitel: Kapitel[] = [
  { ...bioKap1, sequence: 1, sequenceTitle: "Zelle", linkedChapters: ["bio-kap2"] },
  {
    ...bioKapAnatomieGewebe,
    sequence: 2,
    sequenceTitle: "Gewebe",
    linkedChapters: ["bio-kap1", "bio-kap3"],
  },
  { ...bioKapEntwicklung, sequence: 3, sequenceTitle: "Entwicklung", linkedChapters: ["bio-kap4"] },
  {
    ...bioKapGenetik,
    sequence: 4,
    sequenceTitle: "Genetik",
    linkedChapters: ["bio-kap3", "bio-kap5"],
  },
  { ...bioKapOekologie, sequence: 5, sequenceTitle: "Ökologie", linkedChapters: ["bio-kap2"] },
];
