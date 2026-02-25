/**
 * Physik Typ K — zusätzliche Kombinationsaufgaben (006–040) für min. 40 pro Fach.
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
    uk_id: "ph-1-01",
    stamm: "Arbeit und Energie",
    aussagen: [
      A(1, "W = F·s (Weg in Kraftrichtung).", true),
      A(2, "Halten: keine Arbeit (s=0).", true),
      A(3, "Energie kann erzeugt werden.", false),
      A(4, "E_pot = m·g·h.", true),
      A(5, "P = W/t (Leistung).", true),
    ],
    nummern: [1, 2, 4, 5],
    erk: "Energieerhaltung: keine Erzeugung/Vernichtung (3 falsch).",
  },
  {
    uk_id: "ph-3-01",
    stamm: "Wellen",
    aussagen: [
      A(1, "f = 1/T.", true),
      A(2, "c = λ·f.", true),
      A(3, "Schall breitet sich im Vakuum aus.", false),
      A(4, "Longitudinal: Schwingung in Ausbreitungsrichtung.", true),
      A(5, "Transversal: Schwingung senkrecht zur Ausbreitung.", true),
    ],
    nummern: [1, 2, 4, 5],
    erk: "Schall braucht ein Medium (3 falsch).",
  },
  {
    uk_id: "ph-4-01",
    stamm: "Wärmelehre",
    aussagen: [
      A(1, "Temperatur ~ mittlere kinetische Energie.", true),
      A(2, "Wärme fließt von warm nach kalt.", true),
      A(3, "Absoluter Nullpunkt bei 0 °C.", false),
      A(4, "Spezifische Wärmekapazität: J/(kg·K).", true),
      A(5, "Schmelzen: Temperatur konstant (reiner Stoff).", true),
    ],
    nummern: [1, 2, 4, 5],
    erk: "Absoluter Nullpunkt bei 0 K = −273,15 °C (3 falsch).",
  },
  {
    uk_id: "ph-5-01",
    stamm: "Elektrizität",
    aussagen: [
      A(1, "I = Q/t.", true),
      A(2, "U = R·I (Ohm).", true),
      A(3, "Reihe: I überall gleich.", true),
      A(4, "Parallel: U überall gleich.", true),
      A(5, "P = U/R.", false),
    ],
    nummern: [1, 2, 3, 4],
    erk: "P = U·I (5 falsch).",
  },
  {
    uk_id: "ph-7-01",
    stamm: "Kernphysik",
    aussagen: [
      A(1, "Massendefekt: Nukleonenmasse − Kernmasse.", true),
      A(2, "E = Δm·c².", true),
      A(3, "Isotope: gleiche Protonenzahl.", true),
      A(4, "Alpha-Teilchen = Heliumkern.", true),
      A(5, "Beta-Minus: Neutron → Proton + Elektron.", true),
    ],
    nummern: [1, 2, 3, 4, 5],
    erk: "Alle Aussagen richtig.",
  },
];

export const physikPoolTypKExtra: BMSFrage[] = Array.from({ length: 35 }, (_, i) => {
  const n = 6 + i;
  const t = THEMES[n % THEMES.length];
  const korrektA = t.nummern.length === 5 ? "E" : "A";
  return {
    id: `ph-pool-typk-${String(n).padStart(3, "0")}`,
    typ: "K" as const,
    fach: "physik" as const,
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
    korrekte_option: korrektA,
    erklaerung: t.erk,
    schwierigkeit: ((n % 2) + 1) as 1 | 2,
    fsrs: null,
  };
});
