/**
 * Chemie BMS — 20 offizielle MedAT-Stil-Fragen (1:1 an Prüfungsformat angelehnt).
 * Stoff: chem-kap1–chem-kap6 (Atombau, Materie, Bindung, Reaktionen, Anorganik, Organik).
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
    subject: "chemie",
    chapter,
    text,
    options: options.map((t, i) => ({ id: ids[i], text: t })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags,
  };
}

export const chemiePoolOffiziellStyle: Question[] = [
  q(
    "ch-off-001",
    "chem-kap2",
    "Die Lichtgeschwindigkeit im Vakuum beträgt zirka:",
    [
      "300 km pro Sekunde",
      "300 km pro Stunde",
      "300000 km pro Stunde",
      "300000 km pro Sekunde",
      "300000 m pro Sekunde",
    ],
    3,
    "Im Vakuum: c ≈ 3·10⁸ m/s = 300 000 km/s. Option D ist korrekt.",
    "leicht",
    ["Lichtgeschwindigkeit", "Konstanten"]
  ),
  q(
    "ch-off-002",
    "chem-kap6",
    "Pentan hat einen Siedepunkt von 36°C. Welche der folgenden Aussagen ist richtig?",
    [
      "Heptan ist bei Raumtemperatur gasförmig.",
      "Butan hat einen Siedepunkt über 36°C.",
      "Bei 34°C liegt Pentan fest vor.",
      "Beim Abkühlen erstarrt Pentan bei 36°C.",
      "Pentan ist bei Raumtemperatur flüssig.",
    ],
    4,
    "Raumtemperatur ~20–25°C; Pentan (Sdp. 36°C) ist dann flüssig. Heptan siedet höher (flüssig), Butan niedriger (gasförmig). Bei 34°C ist Pentan noch flüssig.",
    "mittel",
    ["Alkane", "Siedepunkt", "Aggregatzustand"]
  ),
  q(
    "ch-off-003",
    "chem-kap4",
    "Eine Reaktion, bei der das System Wärme aus der Umgebung aufnimmt, nennt man:",
    ["endotherm", "exotherm", "isotherm", "heterotherm", "mesotherm"],
    0,
    "Endotherm = Wärme wird aufgenommen (ΔH > 0). Exotherm = Wärme wird abgegeben (ΔH < 0).",
    "leicht",
    ["Enthalpie", "endotherm", "exotherm"]
  ),
  q(
    "ch-off-004",
    "chem-kap3",
    "Die Bindung zwischen welchen der genannten Elementkombinationen ist die polarste?",
    [
      "Phosphor/Sauerstoff",
      "Lithium/Wasserstoff",
      "Kohlenstoff/Chlor",
      "Chlor/Calcium",
      "Wasserstoff/Kohlenstoff",
    ],
    1,
    "Die Polarität steigt mit der Elektronegativitätsdifferenz. Li−H hat eine große EN-Differenz (Li ≈1, H ≈2,2); unter den Optionen ist Li/H eine der polarsten.",
    "mittel",
    ["Polare Bindung", "Elektronegativität"]
  ),
  q(
    "ch-off-005",
    "chem-kap4",
    "Welche der Aussagen über Oxidation ist richtig?",
    [
      "Ein Stoff der Wasserstoff aufnimmt, wird oxidiert.",
      "Ein Oxidationsmittel gibt leicht Elektronen ab.",
      "Für eine Oxidation ist Sauerstoff jedenfalls notwendig.",
      "Ein Stoff der Elektronen abgibt, wird oxidiert.",
      "Ein Stoff der leicht Elektronen aufnimmt, ist ein Reduktionsmittel.",
    ],
    3,
    "Oxidation = Elektronenabgabe. Reduktion = Elektronenaufnahme. Oxidationsmittel nimmt Elektronen auf, Reduktionsmittel gibt ab.",
    "mittel",
    ["Oxidation", "Redox"]
  ),
  q(
    "ch-off-006",
    "chem-kap4",
    "Welche Oxidationszahl hat Kohlenstoff in folgender Verbindung? CaC₂O₄",
    ["+6", "−4", "+2", "+3", "+4"],
    3,
    "Ca²⁺, O jeweils −2 → 2 + 2·x + 4·(−2) = 0 ⇒ 2x = 6 ⇒ x = +3. Kohlenstoff in Oxalat: +3.",
    "mittel",
    ["Oxidationszahl", "Oxalat"]
  ),
  q(
    "ch-off-007",
    "chem-kap4",
    "Durch welche der genannten Maßnahmen lässt sich die Lage des chemischen Gleichgewichts NICHT beeinflussen?",
    [
      "Erhöhung der Temperatur",
      "Einsatz eines Katalysators",
      "Zufuhr von Edukten",
      "Entfernung von Produkten",
      "Verminderung von Druck",
    ],
    1,
    "Ein Katalysator beschleunigt Hin- und Rückreaktion gleichermaßen und ändert die Gleichgewichtslage nicht. Temperatur, Konzentration und Druck können das Gleichgewicht verschieben (Le Chatelier).",
    "mittel",
    ["Gleichgewicht", "Katalysator"]
  ),
  q(
    "ch-off-008",
    "chem-kap5",
    "Welche der angeführten Säuren ist ein wichtiges Vitamin?",
    ["Milchsäure", "Salicylsäure", "Zitronensäure", "Ascorbinsäure", "Stearinsäure"],
    3,
    "Ascorbinsäure = Vitamin C. Die anderen sind keine Vitamine (Milchsäure Stoffwechsel, Salicylsäure Schmerzmittel, Zitronensäure Organisch, Stearinsäure Fettsäure).",
    "leicht",
    ["Vitamine", "Ascorbinsäure", "Vitamin C"]
  ),
  q(
    "ch-off-009",
    "chem-kap2",
    "Der Übergang zwischen zwei Aggregatzuständen heißt:",
    [
      "von fest nach flüssig: Sublimieren",
      "von flüssig nach fest: Erstarren",
      "von fest nach gasförmig: Verdampfen",
      "von gasförmig nach fest: Kondensieren",
      "von gasförmig nach flüssig: Sublimieren",
    ],
    1,
    "Flüssig → fest = Erstarren (bzw. Gefrieren). Fest → flüssig = Schmelzen. Fest → gasförmig = Sublimieren. Gasförmig → flüssig = Kondensieren.",
    "leicht",
    ["Aggregatzustände", "Phasenübergang"]
  ),
  q(
    "ch-off-010",
    "chem-kap1",
    "Die Masse eines Atoms resultiert überwiegend aus der Summe der Massen welcher Teilchen?",
    [
      "Protonen und Neutronen",
      "Neutronen und Elektronen",
      "Elektronen und Photonen",
      "Protonen und Elektronen",
      "Positronen und Neutronen",
    ],
    0,
    "Die Atommasse stammt nahezu vollständig vom Kern: Protonen + Neutronen. Elektronen tragen nur etwa 1/2000 bei.",
    "leicht",
    ["Atombau", "Masse"]
  ),
  q(
    "ch-off-011",
    "chem-kap6",
    "Wie ist ein sekundäres C-Atom definiert?",
    [
      "Es trägt 2 NH₂-Gruppen.",
      "Es befindet sich an Position 2 in einer Kohlenstoffkette.",
      "Es reagiert nach einer Kinetik 2. Ordnung.",
      "Es trägt 2 OH-Gruppen.",
      "Es hat 2 weitere C-Atome gebunden.",
    ],
    4,
    "Sekundär = an genau zwei weitere Kohlenstoffatome gebunden. Primär = 1 C-Nachbar, tertiär = 3 C-Nachbarn.",
    "mittel",
    ["sekundäres C-Atom", "Organische Chemie"]
  ),
  q(
    "ch-off-012",
    "chem-kap5",
    "Unten ist eine Liste von vier Gasen angegeben. Zwei davon ergeben in Wasser gelöst Säuren. Welche sind das? 1. NH₃  2. HCl  3. SO₂  4. CH₄",
    [
      "1. und 3. sind richtig.",
      "2. und 3. sind richtig.",
      "3. und 4. sind richtig.",
      "1. und 2. sind richtig.",
      "2. und 4. sind richtig.",
    ],
    1,
    "HCl ergibt Salzsäure, SO₂ ergibt schweflige Säure (H₂SO₃). NH₃ ist eine Base, CH₄ reagiert in Wasser nicht sauer.",
    "mittel",
    ["Säuren", "Gase", "Anorganik"]
  ),
  q(
    "ch-off-013",
    "chem-kap5",
    "Welche Konzentration an Hydroniumionen enthält eine Lösung mit einem pH-Wert von 3?",
    ["0,003 mol/L", "10³ mol/L", "10⁻³ g/L", "10³ g/L", "10⁻³ mol/L"],
    4,
    "pH = −log₁₀[H₃O⁺] ⇒ [H₃O⁺] = 10⁻ᵖᴴ = 10⁻³ mol/L. Einheit: Stoffmengenkonzentration mol/L.",
    "leicht",
    ["pH", "Hydroniumionen"]
  ),
  q(
    "ch-off-014",
    "chem-kap3",
    "Welche der folgenden Verbindungen ist kovalent aufgebaut?",
    ["NaCl", "CuCl₂", "AlCl₃", "H₂O₂", "Fe₂O₃"],
    3,
    "H₂O₂ (Wasserstoffperoxid) ist eine molekulare, kovalente Verbindung. NaCl, CuCl₂, AlCl₃, Fe₂O₃ sind ionische Verbindungen (Metall + Nichtmetall).",
    "mittel",
    ["kovalente Bindung", "Ionenbindung"]
  ),
  q(
    "ch-off-015",
    "chem-kap2",
    "Wenn man bei einem idealen Gas gleichzeitig das Volumen und die Temperatur (gemessen in Kelvin) verdoppelt, wie ändert sich dann der Druck?",
    [
      "Er sinkt auf ein Viertel.",
      "Er verdoppelt sich.",
      "Er vervierfacht sich.",
      "Er bleibt gleich.",
      "Er halbiert sich.",
    ],
    3,
    "pV = nRT. V und T verdoppelt → p bleibt gleich (p = nR·T/V, T/V unverändert).",
    "mittel",
    ["ideales Gas", "Gasgleichung"]
  ),
  q(
    "ch-off-016",
    "chem-kap1",
    "Welches Element findet man NICHT in der zweiten Periode des Periodensystems?",
    ["Beryllium", "Bor", "Magnesium", "Stickstoff", "Sauerstoff"],
    2,
    "Magnesium (Mg) steht in der 3. Periode. 2. Periode: Li, Be, B, C, N, O, F, Ne.",
    "leicht",
    ["Periodensystem", "Periode"]
  ),
  q(
    "ch-off-017",
    "chem-kap5",
    "Welche der genannten Säuren trägt am meisten zum Auftreten von saurem Regen bei?",
    ["HCl", "H₂S", "HClO₄", "HNO₃", "H₃PO₄"],
    3,
    "Saurer Regen entsteht vor allem durch Stickoxide (HNO₃) und Schwefeloxide (H₂SO₄). HNO₃ aus Verbrennung/Verkehr ist ein Hauptbeiträger.",
    "mittel",
    ["saurer Regen", "Stickoxide"]
  ),
  q(
    "ch-off-018",
    "chem-kap6",
    "Welche der gezeigten funktionellen Gruppen ist/sind richtig bezeichnet? 1. Carbonsäure  2. Ether  3. Amin  4. Alkin",
    [
      "4. ist richtig.",
      "Alle sind richtig.",
      "1. und 3. sind richtig.",
      "1., 2. und 3. sind richtig.",
      "2. und 4. sind richtig.",
    ],
    2,
    "Carbonsäure (−COOH) und Amin (−NH₂) sind korrekt bezeichnet. Ether (C−O−C) und Alkin (C≡C) müssen anhand der Struktur geprüft werden; typischerweise sind 1. und 3. sicher richtig.",
    "mittel",
    ["funktionelle Gruppen", "Organische Chemie"]
  ),
];
