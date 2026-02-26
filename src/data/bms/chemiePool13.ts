/**
 * Chemie BMS Pool 13 — 60 Fragen im offiziellen MedAT-Stil (Typ A).
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

const KAP = ["chem-kap1", "chem-kap2", "chem-kap3", "chem-kap4", "chem-kap5", "chem-kap6"] as const;

export const chemiePool13: Question[] = [
  q(
    "ch-pool-13-001",
    KAP[0],
    "Wie viele Protonen hat ein Kohlenstoff-Atom?",
    ["4", "5", "6", "12", "14"],
    2,
    "Kohlenstoff hat die Ordnungszahl Z = 6, also 6 Protonen im Kern.",
    "leicht",
    ["Ordnungszahl", "Kohlenstoff"]
  ),
  q(
    "ch-pool-13-002",
    KAP[1],
    "Nach dem Gesetz von Boyle gilt bei konstanter Temperatur:",
    ["V/T = const", "p · V = const", "p/T = const", "V · n = const", "p + V = const"],
    1,
    "Boyle-Mariotte: Bei konstanter Temperatur ist der Druck umgekehrt proportional zum Volumen: p · V = const.",
    "mittel",
    ["Boyle", "Gasgesetze"]
  ),
  q(
    "ch-pool-13-003",
    KAP[2],
    "Welche Bindung liegt in Fluor (F₂) vor?",
    ["Ionenbindung", "Metallbindung", "Kovalente Bindung", "Wasserstoffbrücken", "Van-der-Waals"],
    2,
    "F₂ ist ein Molekül aus zwei gleichen Nichtmetallen; die Bindung ist kovalent (Elektronenpaarbindung).",
    "leicht",
    ["kovalente Bindung", "Halogen"]
  ),
  q(
    "ch-pool-13-004",
    KAP[3],
    "Was wird bei einer Oxidation abgegeben?",
    ["Protonen", "Elektronen", "Neutronen", "Wasser", "Kationen"],
    1,
    "Oxidation = Abgabe von Elektronen. Reduktion = Aufnahme von Elektronen.",
    "leicht",
    ["Oxidation", "Redox"]
  ),
  q(
    "ch-pool-13-005",
    KAP[4],
    "Welcher pH-Wert kennzeichnet eine neutrale wässrige Lösung bei 25 °C?",
    ["0", "5", "7", "10", "14"],
    2,
    "Neutral: [H₃O⁺] = [OH⁻], pH = 7 (bei 25 °C).",
    "leicht",
    ["pH", "neutral"]
  ),
  q(
    "ch-pool-13-006",
    KAP[5],
    "Propan (C₃H₈) gehört zur Stoffklasse der:",
    ["Alkene", "Alkine", "Alkane", "Alkohole", "Aromaten"],
    2,
    "Propan C₃H₈ hat nur Einfachbindungen zwischen den C-Atomen → Alkan (CₙH₂ₙ₊₂).",
    "leicht",
    ["Alkane", "Propan"]
  ),
  q(
    "ch-pool-13-007",
    KAP[0],
    "Die Hauptquantenzahl n gibt an:",
    [
      "die Form des Orbitals",
      "die Schale bzw. Energie des Elektrons",
      "den Spin",
      "die Protonenzahl",
      "die Neutronenzahl",
    ],
    1,
    "n = 1, 2, 3, … bestimmt die Hauptschale und die Energie. l bestimmt die Orbitalform (s, p, d, f).",
    "mittel",
    ["Quantenzahlen", "Atombau"]
  ),
  q(
    "ch-pool-13-008",
    KAP[1],
    "Kondensieren ist der Übergang:",
    [
      "fest → flüssig",
      "flüssig → gasförmig",
      "gasförmig → flüssig",
      "fest → gasförmig",
      "gasförmig → fest",
    ],
    2,
    "Kondensieren = gasförmig → flüssig (z. B. Wasserdampf zu Tropfen).",
    "leicht",
    ["Kondensieren", "Phasenübergang"]
  ),
  q(
    "ch-pool-13-009",
    KAP[2],
    "Welche Verbindung hat die größte Elektronegativitätsdifferenz zwischen den Bindungspartnern?",
    ["C−H", "N−H", "Na−Cl", "C−C", "O−H"],
    2,
    "NaCl: Metall (niedrige EN) + Nichtmetall (hohe EN) → sehr große EN-Differenz, Ionenbindung.",
    "mittel",
    ["Elektronegativität", "Ionenbindung"]
  ),
  q(
    "ch-pool-13-010",
    KAP[3],
    "Ein Katalysator ändert:",
    [
      "die Gleichgewichtslage",
      "die Aktivierungsenergie",
      "ΔH der Reaktion",
      "die Produktzusammensetzung",
      "die Reaktionsrichtung",
    ],
    1,
    "Katalysator senkt die Aktivierungsenergie; ΔH, Gleichgewicht und Stöchiometrie bleiben unverändert.",
    "mittel",
    ["Katalysator", "Aktivierungsenergie"]
  ),
  q(
    "ch-pool-13-011",
    KAP[4],
    "Welche Formel beschreibt die Autoprotolyse des Wassers?",
    [
      "H₂O + H₂O ⇌ H₃O⁺ + OH⁻",
      "H₂O → H₂ + O₂",
      "2 H₂O → 2 H₂ + O₂",
      "H₂O + HCl → H₃O⁺ + Cl⁻",
      "H₂O + NaOH → Na⁺ + OH⁻",
    ],
    0,
    "Autoprotolyse: Zwei Wassermoleküle tauschen ein Proton; K_W = [H₃O⁺][OH⁻] = 10⁻¹⁴ (25 °C).",
    "mittel",
    ["Autoprotolyse", "Wasser"]
  ),
  q(
    "ch-pool-13-012",
    KAP[5],
    "Methanol (CH₃OH) enthält die funktionelle Gruppe:",
    ["−COOH", "−CHO", "−OH", "−NH₂", "−O−"],
    2,
    "Methanol ist ein Alkohol mit Hydroxylgruppe −OH. Summenformel CH₃OH.",
    "leicht",
    ["Alkohol", "Methanol"]
  ),
  q(
    "ch-pool-13-013",
    KAP[0],
    "Die Avogadro-Konstante N_A gibt an:",
    [
      "Masse pro Mol",
      "Anzahl der Teilchen pro Mol",
      "Volumen pro Mol",
      "Druck bei STP",
      "Temperatur",
    ],
    1,
    "N_A ≈ 6,022·10²³ mol⁻¹: Ein Mol enthält N_A Teilchen (Atome, Moleküle, Ionen).",
    "leicht",
    ["Avogadro", "Stoffmenge"]
  ),
  q(
    "ch-pool-13-014",
    KAP[1],
    "Sublimieren ist der Übergang:",
    [
      "flüssig → gasförmig",
      "gasförmig → fest",
      "fest → gasförmig",
      "fest → flüssig",
      "gasförmig → flüssig",
    ],
    2,
    "Sublimieren = fest → gasförmig (z. B. Trockeneis, Iod). Resublimieren = gasförmig → fest.",
    "leicht",
    ["Sublimation", "Phasenübergang"]
  ),
  q(
    "ch-pool-13-015",
    KAP[2],
    "In einem Kohlenstoffdioxid-Molekül (CO₂) sind die C=O-Bindungen:",
    ["ionisch", "rein kovalent unpolar", "kovalent polar", "metallisch", "Wasserstoffbrücken"],
    2,
    "CO₂: C und O haben unterschiedliche Elektronegativität → polare kovalente Bindung; das Molekül ist linear und insgesamt unpolar.",
    "mittel",
    ["polare Bindung", "CO2"]
  ),
  q(
    "ch-pool-13-016",
    KAP[3],
    "Bei endothermer Reaktion ist ΔH:",
    ["negativ", "positiv", "null", "immer gleich ΔG", "unbestimmt"],
    1,
    "Endotherm = System nimmt Wärme auf → ΔH > 0. Exotherm → ΔH < 0.",
    "leicht",
    ["Enthalpie", "endotherm"]
  ),
  q(
    "ch-pool-13-017",
    KAP[4],
    "Welches Ion entsteht, wenn Schwefelsäure (H₂SO₄) beide Protonen abgibt?",
    ["SO₂", "SO₃²⁻", "SO₄²⁻", "HSO₄⁻", "S²⁻"],
    2,
    "H₂SO₄ → 2 H⁺ + SO₄²⁻. Sulfat ist das zweifach negativ geladene Anion.",
    "leicht",
    ["Schwefelsäure", "Sulfat"]
  ),
  q(
    "ch-pool-13-018",
    KAP[5],
    "Welche Verbindung weist eine C=C-Doppelbindung auf?",
    ["Ethan", "Ethen", "Ethin", "Benzol", "Methan"],
    1,
    "Ethen (Ethylen) C₂H₄ hat eine C=C-Doppelbindung. Ethan = C₂H₆ (Alkan), Ethin = C₂H₂ (C≡C).",
    "leicht",
    ["Alkene", "Ethen"]
  ),
  q(
    "ch-pool-13-019",
    KAP[0],
    "Wie viele Elektronen hat ein neutrales Fluor-Atom?",
    ["7", "8", "9", "10", "17"],
    2,
    "Fluor: Ordnungszahl Z = 9; im neutralen Atom gleich viele Elektronen wie Protonen → 9.",
    "leicht",
    ["Elektronen", "Fluor"]
  ),
  q(
    "ch-pool-13-020",
    KAP[1],
    "Die Einheit des Drucks im SI-System ist:",
    ["Liter", "Bar", "Pascal", "Atmosphäre", "Kelvin"],
    2,
    "SI-Einheit des Drucks: Pascal (Pa). 1 bar = 10⁵ Pa. Atmosphäre ist eine ältere Einheit.",
    "leicht",
    ["Druck", "SI-Einheiten"]
  ),
  q(
    "ch-pool-13-021",
    KAP[2],
    "Welche Aussage zu Lewis-Formeln trifft zu?",
    [
      "Alle Elektronen werden gezeichnet",
      "Nur Valenzelektronen werden berücksichtigt",
      "Es gibt keine Mehrfachbindungen",
      "Ionen haben keine Lewis-Formel",
      "Wasserstoff hat 8 Außenelektronen",
    ],
    1,
    "Lewis-Formeln zeigen Valenzelektronen (Außenelektronen) und Bindungen (Elektronenpaare) zwischen Atomen.",
    "mittel",
    ["Lewis-Formel", "Valenzelektronen"]
  ),
  q(
    "ch-pool-13-022",
    KAP[3],
    "Die Gleichgewichtskonstante K einer Reaktion:",
    [
      "wird durch Katalysator vergrößert",
      "ist bei gegebener Temperatur konstant",
      "hängt vom Druck ab",
      "ist immer 1",
      "ändert sich mit der Konzentration",
    ],
    1,
    "K ist eine temperaturabhängige Konstante; bei fester Temperatur unabhängig von Druck, Katalysator oder Konzentration.",
    "mittel",
    ["Gleichgewichtskonstante"]
  ),
  q(
    "ch-pool-13-023",
    KAP[4],
    "Eine Lösung mit pH = 2 ist:",
    ["schwach sauer", "stark sauer", "neutral", "schwach basisch", "stark basisch"],
    1,
    "pH < 7 = sauer; je niedriger der pH, desto saurer. pH = 2 bedeutet hohe H₃O⁺-Konzentration.",
    "leicht",
    ["pH", "Säure"]
  ),
  q(
    "ch-pool-13-024",
    KAP[5],
    "Essigsäure hat die funktionelle Gruppe:",
    ["−OH", "−CHO", "−COOH", "−NH₂", "−O−"],
    2,
    "Essigsäure = CH₃COOH; Carboxylgruppe −COOH. Sie ist eine Carbonsäure.",
    "leicht",
    ["Carbonsäure", "Essigsäure"]
  ),
  q(
    "ch-pool-13-025",
    KAP[0],
    "In welcher Periode des PSE steht Natrium?",
    ["1", "2", "3", "4", "5"],
    2,
    "Natrium (Z=11) steht in der 3. Periode (nach Ne mit 10 Elektronen beginnt die 3. Schale).",
    "leicht",
    ["Periodensystem", "Natrium"]
  ),
  q(
    "ch-pool-13-026",
    KAP[1],
    "Bei isothermer Kompression eines idealen Gases:",
    [
      "bleibt das Volumen konstant",
      "steigt der Druck",
      "sinkt die Temperatur",
      "bleibt der Druck konstant",
      "steigt das Volumen",
    ],
    1,
    "Isotherm = T konstant. Kompression = V kleiner → nach Boyle steigt der Druck (p · V = const).",
    "mittel",
    ["Boyle", "ideales Gas"]
  ),
  q(
    "ch-pool-13-027",
    KAP[2],
    "Welche Stoffe leiten im festen Zustand den elektrischen Strom nicht, in Schmelze oder Lösung aber gut?",
    ["Metalle", "Kohlenstoff", "Ionenverbindungen", "Kunststoffe", "Edelgase"],
    2,
    "Ionenverbindungen: Im Festkörper Ionen fix; in Schmelze oder Lösung bewegliche Ionen → Leitfähigkeit.",
    "mittel",
    ["Ionenverbindung", "Leitfähigkeit"]
  ),
  q(
    "ch-pool-13-028",
    KAP[3],
    "Le Chatelier: Bei Temperaturerhöhung verschiebt sich ein exothermes Gleichgewicht:",
    [
      "nicht",
      "auf die Produktseite",
      "auf die Eduktseite",
      "nur bei Katalysator",
      "zu höherem Druck",
    ],
    2,
    "Exotherm: Wärme ist „Produkt“. Temperaturerhöhung begünstigt die Rückreaktion (Eduktseite).",
    "mittel",
    ["Le Chatelier", "Temperatur"]
  ),
  q(
    "ch-pool-13-029",
    KAP[4],
    "Welche Oxidationszahl hat Sauerstoff in den meisten Verbindungen?",
    ["+2", "+1", "0", "−1", "−2"],
    4,
    "Sauerstoff hat in Oxiden, Hydroxiden und Oxoanionen fast immer die Oxidationszahl −2 (Ausnahmen: Peroxide −1, OF₂ +2).",
    "leicht",
    ["Oxidationszahl", "Sauerstoff"]
  ),
  q(
    "ch-pool-13-030",
    KAP[5],
    "Ein Keton hat die funktionelle Gruppe:",
    ["−COOH", "−OH", "−CHO", "−CO− (Carbonyl in der Kette)", "−NH₂"],
    3,
    "Keton: Carbonylgruppe C=O in der Kohlenstoffkette (nicht am Ende wie beim Aldehyd).",
    "mittel",
    ["Keton", "Carbonyl"]
  ),
  q(
    "ch-pool-13-031",
    KAP[0],
    "Das Symbol ³⁵Cl bezeichnet:",
    [
      "ein Molekül",
      "ein Chlor-Isotop mit Massenzahl 35",
      "Chlor mit 35 Elektronen",
      "ein Ion",
      "Chlorid",
    ],
    1,
    "Links oben: Massenzahl A = 35. Chlor hat Z = 17; das Isotop hat 35 − 17 = 18 Neutronen.",
    "leicht",
    ["Isotop", "Chlor"]
  ),
  q(
    "ch-pool-13-032",
    KAP[1],
    "Erstarren ist der Übergang:",
    [
      "fest → flüssig",
      "flüssig → fest",
      "gasförmig → flüssig",
      "gasförmig → fest",
      "flüssig → gasförmig",
    ],
    1,
    "Erstarren (Erstarrung) = flüssig → fest. Schmelzen = fest → flüssig.",
    "leicht",
    ["Erstarren", "Phasenübergang"]
  ),
  q(
    "ch-pool-13-033",
    KAP[2],
    "Wasserstoffbrücken sind am stärksten ausgeprägt zwischen:",
    ["C und H", "F und H (in H−F)", "C und C", "Na und Cl", "zwei Edelgasatomen"],
    1,
    "H-F, H-O und H-N zeigen starke Wasserstoffbrücken wegen der hohen Elektronegativität von F, O, N.",
    "mittel",
    ["Wasserstoffbrücken", "HF"]
  ),
  q(
    "ch-pool-13-034",
    KAP[3],
    "Eine Additionsreaktion ist typisch für:",
    [
      "Alkane mit Halogenen",
      "Alkene mit Halogenen oder H₂",
      "Säure mit Base",
      "Zersetzung",
      "Veresterung",
    ],
    1,
    "Addition: Atome/Gruppen addieren an Doppel- oder Dreifachbindung (z. B. Alken + Br₂ → Dibromalkan).",
    "mittel",
    ["Addition", "Alkene"]
  ),
  q(
    "ch-pool-13-035",
    KAP[4],
    "Der pH einer starken Säure (z. B. HCl) in wässriger Lösung mit c = 0,01 mol/L beträgt etwa:",
    ["1", "2", "7", "12", "14"],
    1,
    "Starke Säure: vollständig dissoziiert, [H₃O⁺] ≈ 0,01 mol/L → pH = −log(0,01) = 2.",
    "mittel",
    ["pH", "starke Säure"]
  ),
  q(
    "ch-pool-13-036",
    KAP[5],
    "Welche Verbindung ist ein primärer Alkohol?",
    ["(CH₃)₂CHOH", "CH₃CH₂OH", "(CH₃)₃COH", "C₆H₅OH", "CH₃OCH₃"],
    1,
    "Primärer Alkohol: OH an C-Atom mit nur einem weiteren C-Atom. CH₃CH₂OH (Ethanol) ist primär.",
    "mittel",
    ["Alkohol", "primär"]
  ),
  q(
    "ch-pool-13-037",
    KAP[0],
    "Die Anzahl der Valenzelektronen von Stickstoff (N) beträgt:",
    ["3", "4", "5", "7", "14"],
    2,
    "Stickstoff steht in Gruppe 15 → 5 Valenzelektronen (Außenelektronen).",
    "leicht",
    ["Valenzelektronen", "Stickstoff"]
  ),
  q(
    "ch-pool-13-038",
    KAP[1],
    "Welche Größe ist für die Stoffmenge n maßgeblich?",
    [
      "Masse m und Molmasse M: n = m/M",
      "Volumen und Druck",
      "nur die Masse",
      "nur die Teilchenzahl",
      "Temperatur und Druck",
    ],
    0,
    "Stoffmenge n = m / M (Masse geteilt durch molare Masse). Auch: n = N / N_A (Teilchenzahl durch Avogadro-Konstante).",
    "leicht",
    ["Stoffmenge", "Mol"]
  ),
  q(
    "ch-pool-13-039",
    KAP[2],
    "Welche Aussage zur Gitterenergie trifft zu?",
    [
      "Sie ist bei kleinen Ionen kleiner",
      "Sie ist die Energie zur Bildung des Ionengitters aus gasförmigen Ionen",
      "Sie hängt nicht von den Ionenradien ab",
      "Sie ist bei einwertigen Ionen größer als bei zweiwertigen",
      "Sie entspricht der Hydratationsenergie",
    ],
    1,
    "Gitterenergie: Energie bei Bildung des Kristalls aus gasförmigen Ionen. Größer bei kleinen Ionen und hohen Ladungen.",
    "mittel",
    ["Gitterenergie"]
  ),
  q(
    "ch-pool-13-040",
    KAP[3],
    "Eine Substitutionsreaktion liegt vor, wenn:",
    [
      "ein Atom/eine Gruppe durch ein anderes ersetzt wird",
      "zwei Moleküle zu einem vereinigt werden",
      "eine Verbindung in zwei Teile zerfällt",
      "Säure und Base reagieren",
      "ein Alken mit Brom reagiert",
    ],
    0,
    "Substitution: Ein Atom oder eine Gruppe wird durch ein anderes ersetzt (z. B. radikalische Substitution an Alkanen).",
    "mittel",
    ["Substitution", "Reaktionstyp"]
  ),
  q(
    "ch-pool-13-041",
    KAP[4],
    "Welches Gas entsteht bei der Reaktion von Metall mit Säure (z. B. Zn + HCl)?",
    ["O₂", "CO₂", "H₂", "Cl₂", "N₂"],
    2,
    "Unedle Metalle + Säure → Salz + Wasserstoff (H₂). Zink + Salzsäure → Zinkchlorid + H₂.",
    "leicht",
    ["Metall", "Säure", "Wasserstoff"]
  ),
  q(
    "ch-pool-13-042",
    KAP[5],
    "Die Hückel-Regel (4n+2 π-Elektronen) kennzeichnet:",
    ["Alkane", "Alkene", "Alkine", "aromatische Systeme", "Alkohole"],
    3,
    "Aromaten haben 4n+2 π-Elektronen in einem cyclischen konjugierten System (z. B. Benzol: 6 π-Elektronen).",
    "mittel",
    ["Hückel", "Aromat"]
  ),
  q(
    "ch-pool-13-043",
    KAP[0],
    "Welches Element hat die geringste Elektronegativität unter Ca, Mg, Be, Sr, Ba?",
    ["Be", "Mg", "Ca", "Sr", "Ba"],
    4,
    "In der Gruppe 2 nimmt die Elektronegativität von oben nach unten ab. Ba hat die geringste EN.",
    "mittel",
    ["Elektronegativität", "Erdalkalimetalle"]
  ),
  q(
    "ch-pool-13-044",
    KAP[1],
    "Die allgemeine Gasgleichung pV = nRT enthält die Gaskonstante R. Ihre Einheit ist:",
    ["J/(mol·K)", "mol/L", "Pa·L", "K/mol", "J·mol"],
    0,
    "R ≈ 8,314 J/(mol·K). Aus pV = nRT folgt [R] = (Pa·m³)/(mol·K) = J/(mol·K).",
    "mittel",
    ["Gaskonstante", "R"]
  ),
  q(
    "ch-pool-13-045",
    KAP[2],
    "Ein Dipolmoment entsteht, wenn:",
    [
      "alle Bindungen unpolar sind",
      "ein Molekül polar ist (ungleichmäßige Ladungsverteilung)",
      "nur Ionen vorliegen",
      "das Molekül linear ist",
      "nur Kohlenstoff und Wasserstoff vorkommen",
    ],
    1,
    "Polare Bindungen und/oder unsymmetrische Geometrie können zu einem permanenten Dipolmoment führen.",
    "mittel",
    ["Dipol", "polar"]
  ),
  q(
    "ch-pool-13-046",
    KAP[3],
    "Die Reaktionsenthalpie ΔH einer Verbrennung ist typischerweise:",
    [
      "positiv (endotherm)",
      "negativ (exotherm)",
      "null",
      "unbestimmt",
      "nur bei Katalysator negativ",
    ],
    1,
    "Verbrennung setzt Energie frei → exotherm → ΔH < 0.",
    "leicht",
    ["Verbrennung", "Enthalpie"]
  ),
  q(
    "ch-pool-13-047",
    KAP[4],
    "Welcher Puffer enthält ein konjugiertes Säure-Base-Paar?",
    ["NaCl + HCl", "NaOH + HCl", "CH₃COOH + CH₃COO⁻ (Acetat)", "reines Wasser", "H₂SO₄"],
    2,
    "Puffer: schwache Säure + ihre konjugierte Base (z. B. Essigsäure + Acetat). Sie puffern pH-Änderungen ab.",
    "mittel",
    ["Puffer", "konjugiertes Paar"]
  ),
  q(
    "ch-pool-13-048",
    KAP[5],
    "Welche Verbindung entsteht bei der Oxidation eines primären Alkohols?",
    ["Alkan", "Alken", "Aldehyd bzw. Carbonsäure", "Ester", "Ether"],
    2,
    "Primärer Alkohol → Oxidation → Aldehyd, bei stärkerer Oxidation → Carbonsäure.",
    "mittel",
    ["Oxidation", "Alkohol"]
  ),
  q(
    "ch-pool-13-049",
    KAP[0],
    "Wie viele Elektronen passen maximal in ein p-Orbital?",
    ["1", "2", "6", "8", "10"],
    1,
    "Ein Orbital fasst maximal 2 Elektronen (unterschiedlicher Spin). Es gibt 3 p-Orbitale pro Schale → maximal 6 p-Elektronen.",
    "leicht",
    ["Orbital", "p-Orbital"]
  ),
  q(
    "ch-pool-13-050",
    KAP[1],
    "Der Siedepunkt einer Flüssigkeit ist die Temperatur, bei der:",
    [
      "der Dampfdruck gleich dem Außendruck ist",
      "die Flüssigkeit gefriert",
      "der Dampfdruck null ist",
      "keine Verdampfung stattfindet",
      "die Dichte maximal ist",
    ],
    0,
    "Sieden: Dampfdruck der Flüssigkeit = Außendruck. Dann bilden sich Dampfblasen im Inneren.",
    "mittel",
    ["Siedepunkt", "Dampfdruck"]
  ),
  q(
    "ch-pool-13-051",
    KAP[2],
    "Welche Aussage zu NaCl in Wasser trifft zu?",
    [
      "Es bleibt ungelöst",
      "Es dissoziiert zu Na⁺ und Cl⁻",
      "Es bildet Moleküle",
      "Es reagiert zu NaOH und HCl",
      "Es erhöht den pH stark",
    ],
    1,
    "NaCl ist ein Salz; in Wasser dissoziiert es vollständig in Na⁺ und Cl⁻ (elektrolytische Dissoziation).",
    "leicht",
    ["Dissoziation", "NaCl"]
  ),
  q(
    "ch-pool-13-052",
    KAP[3],
    "Ein Redoxpaar besteht aus:",
    [
      "Säure und Base",
      "Oxidationsmittel und Reduktionsmittel",
      "Oxidierte und reduzierte Form desselben Elements",
      "zwei Alkanen",
      "Katalysator und Inhibitor",
    ],
    2,
    "Redoxpaar: oxidierte Form / reduzierte Form (z. B. Fe³⁺/Fe²⁺). Beschreibt die Fähigkeit, Elektronen abzugeben/aufzunehmen.",
    "mittel",
    ["Redoxpaar"]
  ),
  q(
    "ch-pool-13-053",
    KAP[4],
    "Welche Oxidationszahl hat Kohlenstoff in Methan (CH₄)?",
    ["+4", "+2", "0", "−2", "−4"],
    4,
    "In CH₄: H hat +1, Summe 0 → C + 4·(+1) = 0 ⇒ C = −4.",
    "mittel",
    ["Oxidationszahl", "Methan"]
  ),
  q(
    "ch-pool-13-054",
    KAP[5],
    "Amide entstehen formal aus:",
    [
      "Alkohol + Alken",
      "Carbonsäure + Amin (bzw. Ammoniak)",
      "zwei Alkoholen",
      "Aldehyd + Keton",
      "Ester + Säure",
    ],
    1,
    "Amidbildung: Carbonsäure + Ammoniak/Amin → Amid + Wasser. Peptidbindung ist eine Amidbindung.",
    "mittel",
    ["Amid", "Carbonsäure"]
  ),
  q(
    "ch-pool-13-055",
    KAP[0],
    "Welche Gruppe des PSE enthält die Alkalimetalle?",
    ["Gruppe 1", "Gruppe 2", "Gruppe 17", "Gruppe 18", "Gruppe 16"],
    0,
    "Alkalimetalle: Li, Na, K, Rb, Cs, Fr – Gruppe 1 (eine Valenzelektron).",
    "leicht",
    ["Alkalimetalle", "Periodensystem"]
  ),
  q(
    "ch-pool-13-056",
    KAP[1],
    "Die Dichte ρ ist definiert als:",
    [
      "Masse · Volumen",
      "Volumen / Masse",
      "Masse / Volumen",
      "Stoffmenge / Volumen",
      "Masse / Stoffmenge",
    ],
    2,
    "ρ = m / V (Masse pro Volumen). Einheit z. B. g/cm³ oder kg/m³.",
    "leicht",
    ["Dichte"]
  ),
  q(
    "ch-pool-13-057",
    KAP[2],
    "In einem Metall sind die Valenzelektronen:",
    [
      "an einzelne Atome gebunden",
      "delokalisiert („Elektronengas“)",
      "nur in Form von Ionen",
      "nicht vorhanden",
      "nur in der Oberfläche",
    ],
    1,
    "Metallbindung: positive Atomrümpfe + delokalisiertes Elektronengas → gute Leitfähigkeit und Verformbarkeit.",
    "mittel",
    ["Metallbindung"]
  ),
  q(
    "ch-pool-13-058",
    KAP[3],
    "Bei der Reaktion A + B ⇌ C + D liegt ein Gleichgewicht vor, wenn:",
    [
      "alle Edukte verbraucht sind",
      "Hin- und Rückreaktion gleich schnell ablaufen",
      "nur Produkte vorliegen",
      "kein Katalysator wirkt",
      "die Temperatur 0 °C ist",
    ],
    1,
    "Gleichgewicht: Geschwindigkeit der Hinreaktion = Geschwindigkeit der Rückreaktion; Konzentrationen bleiben konstant.",
    "mittel",
    ["Gleichgewicht", "Reaktionsgeschwindigkeit"]
  ),
  q(
    "ch-pool-13-059",
    KAP[4],
    "Welches Element gehört zu den Edelgasen?",
    ["Stickstoff", "Sauerstoff", "Chlor", "Helium", "Kohlenstoff"],
    3,
    "Edelgase: Gruppe 18 – He, Ne, Ar, Kr, Xe, Rn. Helium hat die geringste Dichte unter den Edelgasen.",
    "leicht",
    ["Edelgas", "Helium"]
  ),
  q(
    "ch-pool-13-060",
    KAP[5],
    "Die Fehling-Probe dient zum Nachweis von:",
    [
      "Alkanen",
      "Alkenen",
      "reduzierenden Zuckern bzw. Aldehyden",
      "Carbonsäuren",
      "Alkoholen (allgemein)",
    ],
    2,
    "Fehling (oder Tollens): Nachweis von Aldehyden und reduzierenden Zuckern durch Reduktion von Cu²⁺ zu Cu⁺ (rot/orange).",
    "mittel",
    ["Fehling", "Aldehyd"]
  ),
];
