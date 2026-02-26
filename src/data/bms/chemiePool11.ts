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
      "Atome sind massive Kugeln.",
      "Positive Ladung und Masse sind in einem winzigen Kern konzentriert; das Atom ist fast leerer Raum.",
      "Elektronen kreisen auf Schalen.",
      "Es gibt keine Kerne.",
      "Alphateilchen sind negativ geladen.",
    ],
    1,
    "Rutherford: Goldfolie + Alphateilchen. Die meisten Teilchen passieren ungehindert → leerer Raum; wenige stark abgelenkt → winziger, positiver Kern.",
    "mittel",
    ["Rutherford", "Atommodell", "Kap1"]
  ),
  q(
    "ch-pool-11-002",
    "chem-kap1",
    "Ordnungszahl Z eines Elements gibt an …",
    [
      "die Neutronenzahl",
      "die Massenzahl",
      "die Protonenzahl (und definiert das Element)",
      "die Elektronenzahl in der Hülle",
      "die Anzahl der Schalen",
    ],
    2,
    "Z = Protonenzahl = Ordnungszahl; sie definiert das Element. A = Massenzahl = Z + N (Neutronen).",
    "leicht",
    ["Ordnungszahl", "Kap1"]
  ),
  q(
    "ch-pool-11-003",
    "chem-kap1",
    "Isotope sind Atome …",
    [
      "verschiedener Elemente",
      "gleichen Elements (gleiche Z) mit unterschiedlicher Neutronenzahl N",
      "mit gleicher Massenzahl",
      "ohne Neutronen",
      "nur mit einem Proton",
    ],
    1,
    "Isotope: gleiche Ordnungszahl Z, verschiedene Neutronenzahl N (z. B. ¹²C, ¹³C, ¹⁴C).",
    "leicht",
    ["Isotop", "Kap1"]
  ),
  q(
    "ch-pool-11-004",
    "chem-kap2",
    "Kondensieren ist der Übergang …",
    [
      "flüssig → gasförmig",
      "gasförmig → flüssig",
      "fest → gasförmig",
      "fest → flüssig",
      "flüssig → fest",
    ],
    1,
    "Kondensieren = gasförmig → flüssig. Verdampfen = flüssig → gasförmig; Sublimieren = fest → gasförmig.",
    "leicht",
    ["Aggregatzustand", "Kap2"]
  ),
  q(
    "ch-pool-11-005",
    "chem-kap3",
    "Welche Verbindung ist typisch ionisch aufgebaut?",
    ["H₂O", "CH₄", "NaCl", "CO₂", "NH₃"],
    2,
    "NaCl: Metall + Nichtmetall, große Elektronegativitätsdifferenz → Ionenbindung. H₂O, CH₄, CO₂, NH₃ sind molekular/kovalent.",
    "leicht",
    ["Ionenbindung", "Kap3"]
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
    "ch-pool-11-007",
    "chem-kap1",
    "Die Avogadro-Konstante N_A hat den Wert ungefähr …",
    ["6,022 · 10²³ mol⁻¹", "6,022 · 10⁻²³ mol", "22,4 L/mol", "8,314 J/(mol·K)", "1 mol/L"],
    0,
    "N_A ≈ 6,022 · 10²³ mol⁻¹. Ein Mol enthält N_A Teilchen. 22,4 L/mol = molares Volumen bei STP.",
    "leicht",
    ["Avogadro", "Mol", "Kap1"]
  ),
  q(
    "ch-pool-11-008",
    "chem-kap6",
    "Alkane haben die allgemeine Summenformel …",
    ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙHₙ", "CₙH₂ₙO"],
    1,
    "Alkane: nur C–C- und C–H-Einfachbindungen, CₙH₂ₙ₊₂. Alkene: CₙH₂ₙ; Alkine: CₙH₂ₙ₋₂.",
    "leicht",
    ["Alkane", "Kap6"]
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
    "ch-pool-11-010",
    "chem-kap4",
    "Bei einer exothermen Reaktion ist die Reaktionsenthalpie ΔH …",
    ["positiv", "negativ", "null", "immer gleich ΔG", "unabhängig von T"],
    1,
    "Exotherm = Wärme wird abgegeben → ΔH < 0. Endotherm = Wärme wird aufgenommen → ΔH > 0.",
    "leicht",
    ["Enthalpie", "Kap4"]
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
    "ch-pool-11-012",
    "chem-kap3",
    "Die Elektronegativität nimmt im Periodensystem innerhalb einer Periode von links nach rechts …",
    ["ab", "zu", "bleibt gleich", "zuerst ab, dann zu", "ist immer 0"],
    1,
    "In einer Periode: EN nimmt von links nach rechts zu (mehr Protonen, kleinere Radien). In einer Gruppe: EN nimmt nach unten ab.",
    "leicht",
    ["Elektronegativität", "PSE", "Kap1"]
  ),
  q(
    "ch-pool-11-013",
    "chem-kap2",
    "Das ideale Gasgesetz lautet …",
    ["p · V = const", "p · V = n · R · T", "V / T = const", "nur p · T = const", "V = n / p"],
    1,
    "Ideales Gas: p · V = n · R · T (R = 8,314 J/(mol·K)). Boyle: p·V=const bei T=const; Charles: V/T=const bei p=const.",
    "mittel",
    ["Gasgesetz", "Kap2"]
  ),
  q(
    "ch-pool-11-014",
    "chem-kap6",
    "Welcher Bindungswinkel liegt bei sp³-hybridisiertem Kohlenstoff vor?",
    ["90°", "109,5°", "120°", "180°", "60°"],
    1,
    "sp³ → tetraedrische Geometrie, Bindungswinkel 109,5°. sp² → 120° (trigonal planar); sp → 180° (linear).",
    "leicht",
    ["Hybridisierung", "Kap6"]
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
      "Katalysator",
      "Initiator (Spaltung von Cl₂ zu Cl-Radikalen)",
      "Produkt",
      "Inhibitor",
      "Lösungsmittel",
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
      "reine Ionenanziehung",
      "gemeinsames Elektronenpaar zwischen zwei Atomen",
      "Metallbindung",
      "nur Wasserstoffbrücken",
      "Van-der-Waals-Kräfte",
    ],
    1,
    "Kovalente Bindung = gemeinsames Elektronenpaar (bei ähnlicher EN). Ionenbindung = Elektronenübergang (große EN-Differenz).",
    "leicht",
    ["kovalente Bindung", "Kap3"]
  ),
  q(
    "ch-pool-11-018",
    "chem-kap1",
    "Die Massenzahl A eines Atoms ist …",
    [
      "gleich der Ordnungszahl Z",
      "A = Z + N (Protonen + Neutronen)",
      "nur die Neutronenzahl",
      "die Elektronenzahl",
      "immer 12",
    ],
    1,
    "A = Massenzahl = Z + N. Z = Protonenzahl, N = Neutronenzahl. Nuklidnotation: ᴬ_Z X.",
    "leicht",
    ["Massenzahl", "Kap1"]
  ),
  q(
    "ch-pool-11-019",
    "chem-kap5",
    "Welche Säure ist eine starke Säure in wässriger Lösung?",
    ["Essigsäure", "Salpetersäure (HNO₃)", "Kohlensäure", "Phosphorsäure", "Blausäure"],
    1,
    "Starke Säuren: HCl, HBr, HI, HNO₃, H₂SO₄ (1. Protolyse), HClO₄. Essigsäure, H₂CO₃, H₃PO₄ sind schwach.",
    "mittel",
    ["Säuren", "Kap5"]
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
    "ch-pool-11-021",
    "chem-kap2",
    "Sublimieren ist der Übergang …",
    [
      "flüssig → gasförmig",
      "gasförmig → flüssig",
      "fest → gasförmig",
      "fest → flüssig",
      "flüssig → fest",
    ],
    2,
    "Sublimieren = fest → gasförmig (z. B. Iod, Trockeneis). Resublimieren = gasförmig → fest.",
    "leicht",
    ["Aggregatzustand", "Kap2"]
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
    "ch-pool-11-023",
    "chem-kap3",
    "Die Oktettregel besagt, dass viele Atome in Verbindungen …",
    [
      "6 Außenelektronen anstreben",
      "8 Außenelektronen (Edelgaskonfiguration) anstreben",
      "10 Elektronen haben",
      "keine Elektronen abgeben",
      "nur 2 Elektronen haben",
    ],
    1,
    "Oktettregel: Viele Atome erreichen 8 Außenelektronen (Edelgaskonfiguration). Ausnahmen: H (2), B, erweiterte Oktette.",
    "leicht",
    ["Oktettregel", "Kap3"]
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
      "eine feste Kreisbahn (Bohr)",
      "ein Aufenthaltswahrscheinlichkeitsraum für Elektronen",
      "der Atomkern",
      "ein Neutron",
      "eine Schale",
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
      "es findet keine Reaktion statt",
      "AgCl fällt als Niederschlag aus (schwer löslich)",
      "NaNO₃ fällt aus",
      "alle Produkte sind gut löslich",
      "es entstehen nur Gase",
    ],
    1,
    "AgCl (Silberchlorid) ist in Wasser schwer löslich und fällt aus. Metathese = Austausch der Ionenpartner.",
    "mittel",
    ["Metathese", "Kap4"]
  ),
  q(
    "ch-pool-11-027",
    "chem-kap2",
    "Nach dem Gesetz von Boyle-Mariotte gilt bei konstanter Temperatur …",
    ["V / T = const", "p · V = const", "p / V = const", "n · R = const", "p + V = const"],
    1,
    "Boyle-Mariotte: Bei T = const ist p · V = const. Druckerhöhung → Volumenabnahme.",
    "leicht",
    ["Boyle", "Gasgesetze", "Kap2"]
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
