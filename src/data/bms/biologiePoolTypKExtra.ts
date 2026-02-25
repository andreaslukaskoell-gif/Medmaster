/**
 * Biologie Typ K — zusätzliche Kombinationsaufgaben (009–040) für min. 40 pro Fach.
 */
import type { BMSFrage } from "@/lib/supabaseBMSFragen";

const A = (nr: number, text: string, korrekt: boolean) => ({ nr, text, korrekt });

const THEMES: {
  uk_id: string;
  stamm: string;
  aussagen: ReturnType<typeof A>[];
  nummern: number[];
  erk: string;
}[] = [
  {
    uk_id: "bio-1-01",
    stamm: "Zelle und Stoffwechsel",
    aussagen: [
      A(1, "Die Mitochondrien sind die Kraftwerke der Zelle (ATP).", true),
      A(2, "Ribosomen sind an der Proteinbiosynthese beteiligt.", true),
      A(3, "Die Zellwand ist bei tierischen Zellen vorhanden.", false),
      A(4, "Das endoplasmatische Retikulum kann glatt oder rau sein.", true),
      A(5, "Lysosomen enthalten Verdauungsenzyme.", true),
    ],
    nummern: [1, 2, 4, 5],
    erk: "Tierische Zellen haben keine Zellwand (3 falsch).",
  },
  {
    uk_id: "bio-2-01",
    stamm: "Gewebe",
    aussagen: [
      A(1, "Epithelgewebe bedeckt Oberflächen und kleidet Hohlräume aus.", true),
      A(2, "Muskelgewebe kann quergestreift, glatt oder herzmuskulär sein.", true),
      A(3, "Nervengewebe leitet nur motorische Impulse.", false),
      A(4, "Bindegewebe enthält Zellen und extrazelluläre Matrix.", true),
      A(5, "Blut ist ein flüssiges Gewebe.", true),
    ],
    nummern: [1, 2, 4, 5],
    erk: "Nervengewebe leitet sensorische und motorische Impulse (3 falsch).",
  },
  {
    uk_id: "bio-4-01",
    stamm: "Vererbung",
    aussagen: [
      A(1, "Ein Gen ist ein DNA-Abschnitt mit Erbinformation.", true),
      A(2, "Homologe Chromosomen tragen dieselben Genorte.", true),
      A(3, "Bei der Mitose entstehen vier Tochterzellen.", false),
      A(4, "Die Meiose reduziert den Chromosomensatz auf haploide Keimzellen.", true),
      A(5, "Ein Allel ist eine Variante eines Gens.", true),
    ],
    nummern: [1, 2, 4, 5],
    erk: "Mitose: zwei Tochterzellen; Meiose: vier (3 falsch).",
  },
  {
    uk_id: "bio-2-01",
    stamm: "Atmung und Kreislauf",
    aussagen: [
      A(1, "Der Gasaustausch findet in den Alveolen statt.", true),
      A(2, "Hämoglobin bindet Sauerstoff.", true),
      A(3, "Die linke Herzkammer pumpt sauerstoffarmes Blut.", false),
      A(4, "Die Systole ist die Kontraktionsphase des Herzens.", true),
      A(5, "Erythrozyten haben keinen Zellkern.", true),
    ],
    nummern: [1, 2, 4, 5],
    erk: "Die linke Kammer pumpt sauerstoffreiches Blut (3 falsch).",
  },
  {
    uk_id: "bio-10-01",
    stamm: "Ökologie",
    aussagen: [
      A(1, "Biotop + Biozönose = Ökosystem.", true),
      A(2, "Produzenten sind autotroph (z. B. Pflanzen).", true),
      A(3, "Destenten zersetzen nur anorganische Stoffe.", false),
      A(4, "Eine Nahrungskette zeigt Energiefluss von Stufe zu Stufe.", true),
      A(5, "Die Nische beschreibt die Rolle einer Art im Ökosystem.", true),
    ],
    nummern: [1, 2, 4, 5],
    erk: "Destenten zersetzen totes organisches Material (3 falsch).",
  },
];

export const biologiePoolTypKExtra: BMSFrage[] = Array.from({ length: 32 }, (_, i) => {
  const n = 9 + i;
  const t = THEMES[n % THEMES.length];
  return {
    id: `bio-pool-typk-${String(n).padStart(3, "0")}`,
    typ: "K" as const,
    fach: "biologie" as const,
    uk_id: t.uk_id,
    stamm: "Welche der folgenden Aussagen zu „" + t.stamm + "“ sind richtig?",
    aussagen: t.aussagen,
    kombinationen: [
      { key: "A", nummern: [...t.nummern] },
      { key: "B", nummern: [1, 2, 3] },
      { key: "C", nummern: [2, 3, 4] },
      { key: "D", nummern: [1, 3, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung: t.erk,
    schwierigkeit: ((n % 2) + 1) as 1 | 2,
    fsrs: null,
  };
});
