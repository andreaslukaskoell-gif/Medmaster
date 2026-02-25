/**
 * Physik Pool — „Was ist falsch?“ (Typ A: eine Aussage ist falsch, diese auswählen).
 * Stoff aus bmsKapitel/physik.
 */
import type { Question } from "./index";

function q(
  id: string,
  chapter: string,
  text: string,
  options: [string, string, string, string, string],
  correctIndex: 0 | 1 | 2 | 3 | 4,
  explanation: string,
  difficulty: "leicht" | "mittel" | "schwer" = "mittel",
  tags: string[] = []
): Question {
  const ids = ["a", "b", "c", "d", "e"] as const;
  return {
    id,
    subject: "physik",
    chapter,
    text,
    options: options.map((t, i) => ({ id: ids[i], text: t })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags,
  };
}

const STEM = "Welche der folgenden Aussagen ist falsch?";

export const physikWasIstFalsch: Question[] = [
  q(
    "ph-pool-wif-001",
    "phys-kap1",
    STEM,
    [
      "Die SI-Basiseinheit der Kraft ist das Newton (N).",
      "1 N = 1 kg·m/s².",
      "Arbeit W = Kraft · Weg (in Wegrichtung); Einheit Joule (J).",
      "Beim Halten eines Gewichts in gleicher Höhe wird mechanische Arbeit verrichtet.",
      "Leistung P = Arbeit/Zeit; Einheit Watt (W).",
    ],
    3,
    "Beim Halten ist der Weg null, daher wird keine mechanische Arbeit verrichtet. Die falsche Aussage ist D.",
    "leicht",
    ["Arbeit", "Leistung", "SI"]
  ),
  q(
    "ph-pool-wif-002",
    "phys-kap1",
    STEM,
    [
      "Die Gewichtskraft ist F_G = m · g (g ≈ 9,81 m/s²).",
      "Masse ist eine skalare Größe, Gewichtskraft eine vektorielle.",
      "Der Luftdruck wird oft in mmHg angegeben; 760 mmHg ≈ 1013 hPa.",
      "1 Pa = 1 N/m².",
      "Die Masse eines Körpers hängt vom Ort ab (z. B. Mond vs. Erde).",
    ],
    4,
    "Die Masse ist ortsunabhängig; das Gewicht (Gewichtskraft) hängt vom Ort ab. Die falsche Aussage ist E.",
    "leicht",
    ["Kraft", "Masse", "Druck"]
  ),
  q(
    "ph-pool-wif-003",
    "phys-kap3",
    STEM,
    [
      "Die Frequenz f gibt die Anzahl der Schwingungen pro Sekunde an; Einheit Hz.",
      "Es gilt f = 1/T (T = Periodendauer).",
      "Die Ausbreitungsgeschwindigkeit einer Welle ist c = λ · f.",
      "Schall breitet sich im Vakuum schneller aus als in Luft.",
      "Longitudinale Wellen schwingen in Ausbreitungsrichtung.",
    ],
    3,
    "Schall braucht ein Medium; im Vakuum breitet sich Schall nicht aus. Die falsche Aussage ist D.",
    "mittel",
    ["Wellen", "Schall"]
  ),
  q(
    "ph-pool-wif-004",
    "phys-kap4",
    STEM,
    [
      "Temperatur ist ein Maß für die mittlere kinetische Energie der Teilchen.",
      "Wärme fließt von höherer zu niedrigerer Temperatur.",
      "Die spezifische Wärmekapazität c hat die Einheit J/(kg·K).",
      "Der absolute Nullpunkt liegt bei 0 °C.",
      "Beim Verdampfen bleibt die Temperatur eines reinen Stoffes bei konstantem Druck konstant.",
    ],
    3,
    "Der absolute Nullpunkt liegt bei 0 K = −273,15 °C. Die falsche Aussage ist D.",
    "leicht",
    ["Wärmelehre", "Temperatur"]
  ),
  q(
    "ph-pool-wif-005",
    "phys-kap5",
    STEM,
    [
      "Stromstärke I = Ladung Q pro Zeit t; I = Q/t.",
      "Ohmsches Gesetz: U = R · I.",
      "Bei Reihenschaltung addieren sich die Widerstände: R_ges = R₁ + R₂ + ….",
      "Bei Parallelschaltung ist der Gesamtstrom die Summe der Teilströme.",
      "Die elektrische Leistung am Widerstand ist P = U/R.",
    ],
    4,
    "Die Leistung ist P = U · I bzw. P = U²/R, nicht P = U/R. Die falsche Aussage ist E.",
    "mittel",
    ["Elektrizitätslehre"]
  ),
  q(
    "ph-pool-wif-006",
    "phys-kap7",
    STEM,
    [
      "Alpha-Strahlung besteht aus Heliumkernen.",
      "Beta-Minus-Zerfall: Neutron → Proton + Elektron.",
      "Isotope haben dieselbe Protonenzahl.",
      "Der Massendefekt ist die Masse der Elektronenhülle.",
      "E = Δm·c² verknüpft Massendefekt und Energie.",
    ],
    3,
    "Der Massendefekt ist die Differenz Nukleonenmasse − Kernmasse, nicht die Masse der Hülle (D falsch).",
    "mittel",
    ["Kernphysik"]
  ),
];
