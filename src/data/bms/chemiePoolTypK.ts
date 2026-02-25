/**
 * Chemie BMS Pool — Typ K für den FragenTrainer. Mind. 40: Basis 001–005 + Extra 006–040.
 */
import type { BMSFrage } from "@/lib/supabaseBMSFragen";
import { chemiePoolTypKExtra } from "./chemiePoolTypKExtra";

export const chemiePoolTypK: BMSFrage[] = [
  {
    id: "ch-pool-typk-001",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-1-01",
    stamm: "Welche der folgenden Aussagen zum Atombau und Periodensystem sind richtig?",
    aussagen: [
      { nr: 1, text: "Die Ordnungszahl Z gibt die Anzahl der Protonen im Kern an.", korrekt: true },
      {
        nr: 2,
        text: "Isotope haben dieselbe Ordnungszahl, aber verschiedene Massenzahlen.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Die maximale Elektronenzahl in der n-ten Schale (Bohr) ist 2n.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Im Periodensystem stehen die Elemente nach steigender Ordnungszahl geordnet.",
        korrekt: true,
      },
      { nr: 5, text: "Ein Neutralatom hat gleich viele Protonen wie Elektronen.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4, 5] },
      { key: "B", nummern: [1, 2, 3, 5] },
      { key: "C", nummern: [2, 3, 4] },
      { key: "D", nummern: [1, 3, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Maximale Elektronenzahl pro Schale ist 2n², nicht 2n (3 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "ch-pool-typk-002",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-5-01",
    stamm: "Welche der folgenden Aussagen zu Säuren und Basen sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "pH = −log₁₀[H₃O⁺]; je niedriger der pH-Wert, desto saurer die Lösung.",
        korrekt: true,
      },
      { nr: 2, text: "Eine Lösung mit pH = 7 ist bei 25 °C neutral.", korrekt: true },
      {
        nr: 3,
        text: "pOH + pH = 14 gilt nur in verdünnter wässriger Lösung bei 25 °C.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Starke Säuren sind in Wasser vollständig zu H₃O⁺ und Anion dissoziiert.",
        korrekt: true,
      },
      { nr: 5, text: "Der pH-Wert einer Lösung mit [H₃O⁺] = 10⁻⁵ mol/L beträgt 5.", korrekt: true },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4, 5] },
      { key: "B", nummern: [1, 2, 3, 5] },
      { key: "C", nummern: [2, 3, 4] },
      { key: "D", nummern: [1, 3, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "E",
    erklaerung: "Alle Aussagen 1–5 sind richtig.",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "ch-pool-typk-003",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-6-01",
    stamm: "Welche der folgenden Aussagen zur chemischen Bindung sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Bei der Ionenbindung werden Elektronen von einem Atom auf ein anderes übertragen.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Bei der Atombindung (kovalent) werden Elektronenpaare geteilt.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Metallbindung beruht auf einem „Elektronensee“ delokalisierter Valenzelektronen.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Wasserstoffbrücken sind echte chemische Bindungen wie die Atombindung.",
        korrekt: false,
      },
      {
        nr: 5,
        text: "Die polare Atombindung entsteht bei unterschiedlicher Elektronegativität der Bindungspartner.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [1, 2, 4, 5] },
      { key: "C", nummern: [2, 3, 4] },
      { key: "D", nummern: [1, 3, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. Wasserstoffbrücken sind zwischenmolekulare Kräfte, keine echten chemischen Bindungen (4 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "ch-pool-typk-004",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-7-01",
    stamm:
      "Welche der folgenden Aussagen zu chemischen Reaktionen und Gleichgewichten sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Im chemischen Gleichgewicht sind Hin- und Rückreaktion gleich schnell.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Die Gleichgewichtskonstante K ändert sich bei Temperaturänderung.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Ein Katalysator verschiebt das Gleichgewicht auf die Produktseite.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Nach dem Prinzip von Le Chatelier antwortet ein Gleichgewicht auf Störungen (Konzentration, Druck, Temperatur).",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Bei exothermer Reaktion begünstigt Temperaturerhöhung die Rückreaktion.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4, 5] },
      { key: "B", nummern: [1, 2, 3, 5] },
      { key: "C", nummern: [2, 3, 4] },
      { key: "D", nummern: [1, 3, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Ein Katalysator beschleunigt Hin- und Rückreaktion gleichermaßen und verschiebt das Gleichgewicht nicht (3 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "ch-pool-typk-005",
    typ: "K",
    fach: "chemie",
    uk_id: "ch-12-01",
    stamm: "Welche der folgenden Aussagen zur organischen Chemie sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Kohlenstoff kann vier Einfachbindungen eingehen (tetraedrisch bei sp³).",
        korrekt: true,
      },
      { nr: 2, text: "Alkane haben die allgemeine Summenformel CₙH₂ₙ₊₂.", korrekt: true },
      {
        nr: 3,
        text: "Eine Carbonsäuregruppe ist −COOH; die Säurestärke kommt vom abspaltbaren H⁺.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Alle organischen Verbindungen sind natürlich und nicht synthetisch herstellbar.",
        korrekt: false,
      },
      {
        nr: 5,
        text: "Isomere haben dieselbe Summenformel, aber unterschiedliche Struktur oder räumliche Anordnung.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [1, 2, 4, 5] },
      { key: "C", nummern: [2, 3, 4] },
      { key: "D", nummern: [1, 3, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. Viele organische Verbindungen sind synthetisch (4 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  ...chemiePoolTypKExtra,
];
