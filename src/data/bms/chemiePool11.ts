/**
 * Chemie BMS Pool — echte Fragen aus Kap1–Kap6 (Atombau, Materie, Bindung, Reaktionen, Anorganik, Organik).
 * Ersetzt Platzhalter durch inhaltliche Fragen aus bmsKapitel/chemie.
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

export const chemiePool11: Question[] = [
  q(
    "ch-pool-11-001",
    "chem-kap1",
    "Was zeigte der Rutherford-Streuversuch (1911)?",
    [
      "Atome sind kompakt-massive Kugeln ohne jeden inneren Hohlraum.",
      "Positive Ladung und Masse sind in einem winzigen Kern konzentriert; das Atom ist fast leerer Raum.",
      "Elektronen kreisen auf exakt festgelegten Bahnen um den Kern.",
      "Es gibt keine positiv geladenen Kerne im Inneren des Atoms.",
      "Alphateilchen sind negativ geladen und werden vom Kern angezogen.",
    ],
    1,
    "Rutherford: Goldfolie + Alphateilchen. Die meisten Teilchen passieren ungehindert → leerer Raum; wenige stark abgelenkt → winziger, positiver Kern.",
    "schwer",
    ["Rutherford", "Atommodell", "Kap1"]
  ),
  q(
    "ch-pool-11-006",
    "chem-kap5",
    "Eine Lösung mit pH = 7 ist …",
    ["sauer", "basisch", "neutral", "immer reines Wasser", "immer eine Säure"],
    2,
    "pH = 7 = neutral ([H₃O⁺] = [OH⁻]). pH < 7 = sauer, pH > 7 = basisch.",
    "leicht",
    ["pH", "Kap5"]
  ),
  q(
    "ch-pool-11-009",
    "chem-kap5",
    "Welche Konzentration an H₃O⁺ hat eine Lösung mit pH = 3?",
    ["10³ mol/L", "10⁻³ mol/L", "3 mol/L", "0,003 mol/L", "pH hat keine Einheit"],
    1,
    "pH = −log₁₀[H₃O⁺], also [H₃O⁺] = 10⁻ᵖᴴ = 10⁻³ mol/L.",
    "mittel",
    ["pH", "Kap5"]
  ),
  q(
    "ch-pool-11-011",
    "chem-kap1",
    "Im Bohr-Modell ist die maximale Elektronenzahl pro Schale (K, L, M, …) gegeben durch …",
    ["n", "n²", "2n²", "8", "2"],
    2,
    "Maximale Elektronenzahl pro Schale: 2n². K (n=1): 2; L (n=2): 8; M (n=3): 18; N (n=4): 32.",
    "mittel",
    ["Bohr", "Schale", "Kap1"]
  ),
  q(
    "ch-pool-11-015",
    "chem-kap5",
    "NaOH in Wasser ergibt eine …",
    ["saure Lösung", "neutrale Lösung", "basische Lösung", "Lösung mit pH 0", "unlösliche Lösung"],
    2,
    "NaOH ist eine starke Base; in Wasser entsteht OH⁻ → pH > 7 (basisch).",
    "leicht",
    ["Base", "pH", "Kap5"]
  ),
  q(
    "ch-pool-11-016",
    "chem-kap4",
    "Bei der radikalischen Substitution (z. B. CH₄ + Cl₂ → CH₃Cl + HCl) wirkt UV-Licht als …",
    [
      "Katalysator (beschleunigt die Reaktion ohne Verbrauch)",
      "Initiator (Spaltung von Cl₂ zu Cl-Radikalen)",
      "Produkt (entsteht am Ende der Gesamtreaktion)",
      "Inhibitor (hemmt die Reaktion durch Blockade)",
      "Lösungsmittel (stellt das Reaktionsmedium bereit)",
    ],
    1,
    "UV-Licht spaltet Cl₂ in zwei Cl-Radikale (Cl·), die die Kettenreaktion starten.",
    "mittel",
    ["radikalische Substitution", "Kap4"]
  ),
  q(
    "ch-pool-11-017",
    "chem-kap3",
    "Eine kovalente Bindung entsteht durch …",
    [
      "reine Ionenanziehung durch vollständigen Elektronentransfer",
      "gemeinsames Elektronenpaar zwischen zwei Atomen",
      "Metallbindung mit delokalisiertem Elektronengas",
      "nur Wasserstoffbrücken zwischen polaren Molekülen",
      "Van-der-Waals-Kräfte durch temporäre Dipole",
    ],
    1,
    "Kovalente Bindung = gemeinsames Elektronenpaar (bei ähnlicher EN). Ionenbindung = Elektronenübergang (große EN-Differenz).",
    "leicht",
    ["kovalente Bindung", "Kap3"]
  ),
  q(
    "ch-pool-11-020",
    "chem-kap6",
    "Alkene haben mindestens …",
    [
      "eine C–C-Einfachbindung",
      "eine C=C-Doppelbindung",
      "eine C≡C-Dreifachbindung",
      "nur C–H-Bindungen",
      "eine OH-Gruppe",
    ],
    1,
    "Alkene: mindestens eine C=C-Doppelbindung, Summenformel CₙH₂ₙ. Alkane: nur Einfachbindungen; Alkine: C≡C.",
    "leicht",
    ["Alkene", "Kap6"]
  ),
  q(
    "ch-pool-11-022",
    "chem-kap4",
    "Das Ionenprodukt des Wassers K_w bei 25 °C beträgt …",
    ["10⁻⁷", "10⁻¹⁴", "7", "14", "K_w = [H₃O⁺] + [OH⁻]"],
    1,
    "K_w = [H₃O⁺] · [OH⁻] = 10⁻¹⁴ bei 25 °C. In reinem Wasser: [H₃O⁺] = [OH⁻] = 10⁻⁷ mol/L.",
    "mittel",
    ["K_w", "Autoprotolyse", "Kap5"]
  ),
  q(
    "ch-pool-11-024",
    "chem-kap6",
    "Eine Carbonsäure-Gruppe hat die Formel …",
    ["–OH", "–COOH", "–CHO", "–NH₂", "–O–"],
    1,
    "Carbonsäure: –COOH (Hydroxycarbonyl). Alkohol: –OH; Aldehyd: –CHO; Amin: –NH₂; Ether: –O–.",
    "leicht",
    ["Carbonsäure", "Kap6"]
  ),
  q(
    "ch-pool-11-025",
    "chem-kap1",
    "Ein Orbital ist …",
    [
      "eine feste Kreisbahn (Bohr) mit genau definiertem Radius",
      "ein Aufenthaltswahrscheinlichkeitsraum für Elektronen",
      "der Atomkern (positiv geladenes Zentrum des Atoms)",
      "ein Neutron im Kern (ungeladenes Teilchen)",
      "eine Schale (Hauptenergieniveau im Bohrschen Modell)",
    ],
    1,
    "Orbital = Aufenthaltswahrscheinlichkeitsraum (Quantenmechanik). Maximal 2 Elektronen pro Orbital. s, p, d, f haben verschiedene Formen.",
    "mittel",
    ["Orbital", "Kap1"]
  ),
  q(
    "ch-pool-11-026",
    "chem-kap4",
    "Bei einer Metathese (Doppelumsatz) NaCl + AgNO₃ → …",
    [
      "es findet keine Reaktion statt, da beide Salze löslich bleiben",
      "AgCl fällt als Niederschlag aus (schwer löslich)",
      "NaNO₃ fällt aus, weil Nitrate generell schwer löslich sind",
      "alle Produkte sind gut löslich und es bildet sich kein Niederschlag",
      "es entstehen nur Gase, die aus der Lösung entweichen",
    ],
    1,
    "AgCl (Silberchlorid) ist in Wasser schwer löslich und fällt aus. Metathese = Austausch der Ionenpartner.",
    "mittel",
    ["Metathese", "Kap4"]
  ),
  q(
    "ch-pool-11-028",
    "chem-kap5",
    "Der pOH einer neutralen wässrigen Lösung bei 25 °C ist …",
    ["0", "7", "14", "pH + pOH = 14 → pOH = 7", "unbestimmt"],
    3,
    "Bei 25 °C: pH + pOH = 14. Neutral: pH = 7, also pOH = 7.",
    "mittel",
    ["pH", "pOH", "Kap5"]
  ),
  q(
    "ch-pool-11-029",
    "chem-kap6",
    "Ein primärer Alkohol hat die OH-Gruppe an …",
    [
      "einem C-Atom mit zwei C-Nachbarn",
      "einem C-Atom mit einem C-Nachbarn (endständig)",
      "einem C-Atom mit drei C-Nachbarn",
      "einem aromatischen Ring",
      "einem C=O",
    ],
    1,
    "Primär: C–OH mit einem C-Nachbarn. Sekundär: zwei C-Nachbarn. Tertiär: drei C-Nachbarn.",
    "mittel",
    ["Alkohol", "Kap6"]
  ),
  q(
    "ch-pool-11-030",
    "chem-kap3",
    "Welche Bindung ist am stärksten polarisiert (größte EN-Differenz)?",
    ["C–H", "C–C", "C–F", "C–N", "C–O"],
    2,
    "Fluor hat die höchste Elektronegativität; C–F ist stark polar (C⁵⁺–F⁵⁻).",
    "mittel",
    ["Elektronegativität", "Kap3"]
  ),
];
