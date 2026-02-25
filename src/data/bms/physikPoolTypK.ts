/**
 * Physik BMS Pool — Typ K für den FragenTrainer. Mind. 40: Basis 001–005 + Extra 006–040.
 */
import type { BMSFrage } from "@/lib/supabaseBMSFragen";
import { physikPoolTypKExtra } from "./physikPoolTypKExtra";

export const physikPoolTypK: BMSFrage[] = [
  {
    id: "ph-pool-typk-001",
    typ: "K",
    fach: "physik",
    uk_id: "ph-1-01",
    stamm: "Welche der folgenden Aussagen zu Arbeit, Energie und Leistung sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Mechanische Arbeit W = F · s (Kraft mal Weg in Wegrichtung).",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Beim Halten eines Gegenstands wird keine mechanische Arbeit verrichtet (Weg = 0).",
        korrekt: true,
      },
      { nr: 3, text: "Leistung P = Arbeit/Zeit = W/t; Einheit Watt (W).", korrekt: true },
      { nr: 4, text: "Die potentielle Energie im Schwerefeld ist E_pot = m·g·h.", korrekt: true },
      { nr: 5, text: "Energie kann erzeugt oder vernichtet werden.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 2, 4, 5] },
      { key: "C", nummern: [2, 3, 4] },
      { key: "D", nummern: [1, 3, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1–4. Energieerhaltung: Energie wird weder erzeugt noch vernichtet, nur umgewandelt (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "ph-pool-typk-002",
    typ: "K",
    fach: "physik",
    uk_id: "ph-3-01",
    stamm: "Welche der folgenden Aussagen zu Schwingungen und Wellen sind zutreffend?",
    aussagen: [
      {
        nr: 1,
        text: "Die Frequenz f ist der Kehrwert der Periodendauer T: f = 1/T.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Die Ausbreitungsgeschwindigkeit einer Welle ist c = λ · f (Wellenlänge mal Frequenz).",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Longitudinale Wellen schwingen in Ausbreitungsrichtung (z. B. Schall).",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Transversale Wellen schwingen senkrecht zur Ausbreitungsrichtung (z. B. Licht).",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Die Schallgeschwindigkeit in Luft ist unabhängig von der Frequenz.",
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
    korrekte_option: "E",
    erklaerung: "Alle Aussagen 1–5 sind richtig.",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "ph-pool-typk-003",
    typ: "K",
    fach: "physik",
    uk_id: "ph-4-01",
    stamm: "Welche der folgenden Aussagen zur Wärmelehre sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Temperatur ist ein Maß für die mittlere kinetische Energie der Teilchen.",
        korrekt: true,
      },
      { nr: 2, text: "Wärme fließt stets von höherer zu niedrigerer Temperatur.", korrekt: true },
      {
        nr: 3,
        text: "Die spezifische Wärmekapazität c gibt an, wie viel Energie nötig ist, 1 kg um 1 K zu erwärmen.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Beim Schmelzen bleibt die Temperatur eines reinen Stoffes konstant.",
        korrekt: true,
      },
      { nr: 5, text: "Der absolute Nullpunkt liegt bei 0 °C.", korrekt: false },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 2, 4, 5] },
      { key: "C", nummern: [2, 3, 4] },
      { key: "D", nummern: [1, 3, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung: "Richtig sind 1–4. Der absolute Nullpunkt liegt bei 0 K = −273,15 °C (5 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "ph-pool-typk-004",
    typ: "K",
    fach: "physik",
    uk_id: "ph-5-01",
    stamm: "Welche der folgenden Aussagen zur Elektrizitätslehre sind zutreffend?",
    aussagen: [
      { nr: 1, text: "Die Stromstärke I ist die Ladungsmenge pro Zeit: I = Q/t.", korrekt: true },
      {
        nr: 2,
        text: "Ohmsches Gesetz: U = R · I (Spannung = Widerstand mal Stromstärke).",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Bei Reihenschaltung ist der Gesamtstrom durch alle Widerstände gleich.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Bei Parallelschaltung ist die Spannung an allen Widerständen gleich.",
        korrekt: true,
      },
      { nr: 5, text: "Die elektrische Leistung ist P = U · I; Einheit Watt.", korrekt: true },
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
    id: "ph-pool-typk-005",
    typ: "K",
    fach: "physik",
    uk_id: "ph-7-01",
    stamm: "Welche der folgenden Aussagen zur Atom- und Kernphysik sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Der Massendefekt ist die Differenz zwischen Summe der Nukleonenmassen und tatsächlicher Kernmasse.",
        korrekt: true,
      },
      { nr: 2, text: "E = Δm · c² verknüpft Massendefekt mit Bindungsenergie.", korrekt: true },
      {
        nr: 3,
        text: "Isotope haben dieselbe Protonenzahl, aber verschiedene Neutronenzahl.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Alpha-Strahlung besteht aus Heliumkernen (2 Protonen, 2 Neutronen).",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Beta-Minus-Zerfall: Ein Neutron wird zu einem Proton; ein Elektron wird aus dem Kern emittiert.",
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
    korrekte_option: "E",
    erklaerung: "Alle Aussagen 1–5 sind richtig.",
    schwierigkeit: 2,
    fsrs: null,
  },
  ...physikPoolTypKExtra,
];
