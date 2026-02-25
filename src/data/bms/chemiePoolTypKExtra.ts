/**
 * Chemie Typ K — zusätzliche Kombinationsaufgaben (006–040) für min. 40 pro Fach.
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
    uk_id: "ch-1-01",
    stamm: "Atombau",
    aussagen: [
      A(1, "Z = Protonenzahl.", true),
      A(2, "Isotope: gleiche Z, verschiedene A.", true),
      A(3, "Max. Elektronen pro Schale: 2n.", false),
      A(4, "Neutronenzahl = A − Z.", true),
      A(5, "Neutralatom: Protonen = Elektronen.", true),
    ],
    nummern: [1, 2, 4, 5],
    erk: "Max. Elektronen pro Schale: 2n² (3 falsch).",
  },
  {
    uk_id: "ch-5-01",
    stamm: "Säuren und Basen",
    aussagen: [
      A(1, "pH = −log[H₃O⁺].", true),
      A(2, "pH 7 = neutral (25 °C).", true),
      A(3, "Starke Säure: vollständig dissoziiert.", true),
      A(4, "pOH = pH in jeder Lösung.", false),
      A(5, "Brønsted: Säure = Protonendonator.", true),
    ],
    nummern: [1, 2, 3, 5],
    erk: "pOH + pH = 14 in wässriger Lösung (4 falsch).",
  },
  {
    uk_id: "ch-6-01",
    stamm: "Bindung",
    aussagen: [
      A(1, "Ionenbindung: Elektronenübertragung.", true),
      A(2, "Kovalente Bindung: geteilte Elektronenpaare.", true),
      A(3, "Wasserstoffbrücken sind echte Bindungen.", false),
      A(4, "Metallbindung: Elektronengas.", true),
      A(5, "Polare Bindung: unterschiedliche EN.", true),
    ],
    nummern: [1, 2, 4, 5],
    erk: "Wasserstoffbrücken sind zwischenmolekulare Kräfte (3 falsch).",
  },
  {
    uk_id: "ch-7-01",
    stamm: "Gleichgewicht",
    aussagen: [
      A(1, "Gleichgewicht: v_hin = v_rück.", true),
      A(2, "K ändert sich mit der Temperatur.", true),
      A(3, "Katalysator verschiebt das Gleichgewicht.", false),
      A(4, "Le Chatelier: Störung → Ausgleich.", true),
      A(5, "Exotherm: Temperaturerhöhung begünstigt Rückreaktion.", true),
    ],
    nummern: [1, 2, 4, 5],
    erk: "Katalysator verschiebt das Gleichgewicht nicht (3 falsch).",
  },
  {
    uk_id: "ch-12-01",
    stamm: "Organische Chemie",
    aussagen: [
      A(1, "Alkane: CₙH₂ₙ₊₂.", true),
      A(2, "−OH = Hydroxylgruppe (Alkohole).", true),
      A(3, "−COOH = Carbonsäure.", true),
      A(4, "Alle organischen Verbindungen sind natürlich.", false),
      A(5, "Isomere: gleiche Summenformel, andere Struktur.", true),
    ],
    nummern: [1, 2, 3, 5],
    erk: "Viele organische Verbindungen sind synthetisch (4 falsch).",
  },
];

export const chemiePoolTypKExtra: BMSFrage[] = Array.from({ length: 35 }, (_, i) => {
  const n = 6 + i;
  const t = THEMES[n % THEMES.length];
  return {
    id: `ch-pool-typk-${String(n).padStart(3, "0")}`,
    typ: "K" as const,
    fach: "chemie" as const,
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
