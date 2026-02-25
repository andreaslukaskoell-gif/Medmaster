/**
 * Biology BMS pool — Typ K (Kombinationsaufgaben) for FragenTrainer.
 * Mind. 40: Basis 001–008 + Extra 009–040.
 */
import type { BMSFrage } from "@/lib/supabaseBMSFragen";
import { biologiePoolTypKExtra } from "./biologiePoolTypKExtra";

export const biologiePoolTypK: BMSFrage[] = [
  {
    id: "bio-pool-typk-001",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-1-01",
    stamm:
      "Welche der folgenden Aussagen zum Thema „Kennzeichen des Lebens und Homöostase“ sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Homöostase bezeichnet die aktive Aufrechterhaltung innerer Gleichgewichte (z. B. Blutzucker, Temperatur).",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Negative Rückkopplung stabilisiert den Sollwert; der Effekt wirkt dem Auslöser entgegen.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Viren besitzen einen eigenständigen Stoffwechsel und eine Zellstruktur.",
        korrekt: false,
      },
      { nr: 4, text: "Kristallisation ist ein Kennzeichen des Lebens.", korrekt: false },
      { nr: 5, text: "ATP ist die universelle Energiewährung der Zelle.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 3, 5] },
      { key: "D", nummern: [3, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind nur 1, 2 und 5. Viren haben keinen eigenständigen Stoffwechsel (3 falsch). Kristallisation ist kein Kennzeichen des Lebens (4 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "bio-pool-typk-002",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zu Epithelgewebe sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Tight Junctions versiegeln den apikalen Interzellularspalt und trennen apikale von basolateraler Membrandomäne.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Pseudostratifiziertes Epithel bedeutet: Alle Zellen berühren die Basalmembran; die Kerne liegen auf verschiedenen Höhen.",
        korrekt: true,
      },
      { nr: 3, text: "Die Trachea ist von Urothel mit Schirmzellen ausgekleidet.", korrekt: false },
      {
        nr: 4,
        text: "Talgdrüsen sezernieren holokrin (die ganze Zelle wird zum Sekret).",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Gap Junctions ermöglichen den direkten Ionenaustausch zwischen Zellen (z. B. Herzmuskelzellen).",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 3, 5] },
      { key: "D", nummern: [3, 4, 5] },
      { key: "E", nummern: [1, 2, 3] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Die Trachea hat Flimmerepithel, nicht Urothel (3 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "bio-pool-typk-003",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-02",
    stamm: "Welche der folgenden Aussagen zu Binde- und Stützgewebe sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Kollagen Typ IV kommt in der Basalmembran vor (netzartig, keine Fibrillen).",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Osteoblasten bauen Knochenmatrix auf; Osteoklasten resorbieren sie.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Vitamin-C-Mangel führt zu instabilem Kollagen und kann Skorbut verursachen.",
        korrekt: true,
      },
      { nr: 4, text: "Hyaliner Knorpel enthält vor allem Kollagen Typ I.", korrekt: false },
      {
        nr: 5,
        text: "Alle drei Knorpeltypen (hyalin, Faser, elastisch) sind avaskulär.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4] },
      { key: "E", nummern: [3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. Hyaliner Knorpel enthält Kollagen Typ II, nicht Typ I (4 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "bio-pool-typk-004",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-00",
    stamm: "Welche der folgenden Aussagen zur Gametogenese sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Aus einem Spermatogonium entstehen über Meiose I und II vier reife Spermien.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Aus einer primären Oozyte entstehen eine Eizelle und drei Polkörperchen.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Die Oozyte arretiert bis zur Ovulation in Prophase I der Meiose.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Die Meiose II der Oozyte wird bei der Befruchtung abgeschlossen.",
        korrekt: true,
      },
      { nr: 5, text: "Die Spermatogenese beginnt bereits pränatal.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 2, 5] },
      { key: "C", nummern: [2, 3, 4, 5] },
      { key: "D", nummern: [1, 3, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Spermatogenese beginnt ab Pubertät; pränatal beginnt die Oogenese (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "bio-pool-typk-005",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zur Befruchtung sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Befruchtung findet in der Ampulle des Eileiters statt.", korrekt: true },
      { nr: 2, text: "Die Kortikalreaktion der Eizelle verhindert Polyspermie.", korrekt: true },
      {
        nr: 3,
        text: "Die Akrosomreaktion wird durch Bindung an die Zona pellucida (z. B. ZP3) ausgelöst.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Die Zygote ist die erste diploide Zelle nach Verschmelzung der Vorkerne.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Das Geschlecht des Kindes wird durch die Eizelle bestimmt (X oder Y).",
        korrekt: false,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 2, 5] },
      { key: "C", nummern: [2, 3, 4, 5] },
      { key: "D", nummern: [1, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Das Geschlecht wird durch das Spermium (X oder Y) bestimmt (5 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "bio-pool-typk-006",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-4-01",
    stamm: "Welche der folgenden Aussagen zu DNA, Gen und Chromosom sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Ein Gen ist ein DNA-Abschnitt, der für ein Merkmal oder Produkt codiert; ein Allel ist eine Variante dieses Gens.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Homologe Chromosomen sind ein Paar (mütterlich/väterlich) mit gleichen Genorten, oft mit unterschiedlichen Allelen.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Schwesterchromatiden sind zwei identische Kopien eines Chromosoms nach der Replikation, verbunden am Zentromer.",
        korrekt: true,
      },
      { nr: 4, text: "In der DNA paaren sich die Basen A mit G und T mit C.", korrekt: false },
      { nr: 5, text: "Eine menschliche Körperzelle (diploid) hat 46 Chromosomen.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 2, 4] },
      { key: "E", nummern: [3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. In der DNA paaren sich A mit T und G mit C (4 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "bio-pool-typk-007",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-10-01",
    stamm: "Welche der folgenden Aussagen zu ökologischen Grundbegriffen sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Der Biotop ist der unbelebte Lebensraum (Boden, Wasser, Klima, Licht).",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Die Biozönose ist die Lebensgemeinschaft aller Arten in einem Gebiet.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Ein Ökosystem umfasst Biotop und Biozönose in Wechselwirkung.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Eine Population umfasst alle Individuen einer Art in einem definierten Gebiet.",
        korrekt: true,
      },
      { nr: 5, text: "Die Biozönose besteht nur aus Pflanzen.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 2, 5] },
      { key: "C", nummern: [2, 3, 4, 5] },
      { key: "D", nummern: [1, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Die Biozönose umfasst alle Lebewesen (Pflanzen, Tiere, Pilze, Mikroorganismen), nicht nur Pflanzen (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "bio-pool-typk-008",
    typ: "K",
    fach: "biologie",
    uk_id: "bio-2-01",
    stamm: "Welche der folgenden Aussagen zu Blut und Erythrozyten sind zutreffend?",
    aussagen: [
      { nr: 1, text: "Reife menschliche Erythrozyten haben keinen Zellkern.", korrekt: true },
      {
        nr: 2,
        text: "Der mittlere Durchmesser eines Erythrozyten beträgt etwa 7,5 µm.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Sauerstoff wird im Blut an Hämoglobin gebunden; ein Teil des CO₂ ebenfalls.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Der Gasaustausch zwischen Blut und Atemluft findet in den Bronchien statt.",
        korrekt: false,
      },
      {
        nr: 5,
        text: "Erythrozyten leben etwa 120 Tage und werden vor allem in der Milz abgebaut.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [1, 2, 4] },
      { key: "C", nummern: [2, 3, 4, 5] },
      { key: "D", nummern: [1, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. Der Gasaustausch findet in den Alveolen statt, nicht in den Bronchien (4 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  ...biologiePoolTypKExtra,
];
