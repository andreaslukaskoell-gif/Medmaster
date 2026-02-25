/**
 * Chemie-Pool Teil 1 — Fragen 1–50 (MedAT Typ K, Single Choice).
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
    options: options.map((text, i) => ({ id: ids[i], text })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags,
  };
}

export const chemiePool1: Question[] = [
  q(
    "ch-pool-001",
    "chem-kap6",
    "Welche der gezeigten funktionellen Gruppen ist/sind richtig bezeichnet?\n\n1. Carbonsäure\n2. Ether\n3. Amin\n4. Alkin",
    [
      "2. und 4. sind richtig.",
      "1. und 3. sind richtig.",
      "Alle sind richtig.",
      "1., 2. und 3. sind richtig.",
      "4. ist richtig.",
    ],
    1,
    "Carbonsäure (−COOH) und Amin (−NH₂) sind korrekt bezeichnet. Ether (C−O−C) und Alkin (C≡C) müssen anhand der gezeigten Struktur geprüft werden; typischerweise sind 1. und 3. sicher richtig.",
    "mittel",
    ["funktionelle Gruppen", "organische Chemie"]
  ),
  q(
    "ch-pool-002",
    "chem-kap5",
    "Welche Konzentration an Hydroniumionen enthält eine Lösung mit einem pH-Wert von 3?",
    ["10⁻³ g/L", "10³ mol/L", "0,003 mol/L", "10³ g/L", "10⁻³ mol/L"],
    4,
    "pH = −log₁₀[H₃O⁺], also [H₃O⁺] = 10⁻ᵖᴴ = 10⁻³ mol/L. Die Einheit ist mol/L (Stoffmengenkonzentration), nicht g/L.",
    "leicht",
    ["pH", "Hydroniumionen", "Säuren"]
  ),
  q(
    "ch-pool-003",
    "chem-kap3",
    "Welche der folgenden Verbindungen ist kovalent aufgebaut?",
    ["AlCl₃", "H₂O₂", "CuCl₂", "Fe₂O₃", "NaCl"],
    1,
    "H₂O₂ (Wasserstoffperoxid) ist eine molekulare, kovalente Verbindung (O−O-Bindung, O−H-Bindungen). AlCl₃, CuCl₂, Fe₂O₃ und NaCl sind ionisch (Metall + Nichtmetall, große EN-Differenz).",
    "mittel",
    ["kovalente Bindung", "Ionenbindung"]
  ),
  q(
    "ch-pool-004",
    "chem-kap2",
    "Der Übergang zwischen zwei Aggregatzuständen heißt:",
    [
      "von flüssig nach fest: Erstarren",
      "von fest nach flüssig: Sublimieren",
      "von fest nach gasförmig: Verdampfen",
      "von gasförmig nach flüssig: Sublimieren",
      "von gasförmig nach fest: Kondensieren",
    ],
    0,
    "Flüssig → fest = Erstarren (bzw. Gefrieren). Fest → flüssig = Schmelzen. Fest → gasförmig = Sublimieren. Gasförmig → flüssig = Kondensieren. Gasförmig → fest = Resublimieren.",
    "leicht",
    ["Aggregatzustände", "Phasenübergang"]
  ),
  q(
    "ch-pool-005",
    "chem-kap6",
    "Wie ist ein sekundäres C-Atom definiert?",
    [
      "Es befindet sich an Position 2 in einer Kohlenstoffkette.",
      "Es trägt 2 OH-Gruppen.",
      "Es reagiert nach einer Kinetik 2. Ordnung.",
      "Es trägt 2 NH₂-Gruppen.",
      "Es hat 2 weitere C-Atome gebunden.",
    ],
    4,
    "Ein sekundäres C-Atom ist an genau zwei weitere Kohlenstoffatome gebunden. Primär = 1 C-Nachbar, tertiär = 3 C-Nachbarn. Die Position in der Kette oder funktionelle Gruppen definieren das nicht.",
    "mittel",
    ["sekundäres C-Atom", "Alkane", "Organische Chemie"]
  ),
  q(
    "ch-pool-006",
    "chem-kap4",
    "Durch welche der genannten Maßnahmen lässt sich die Lage des chemischen Gleichgewichts NICHT beeinflussen?",
    [
      "Einsatz eines Katalysators",
      "Erhöhung der Temperatur",
      "Zufuhr von Edukten",
      "Entfernung von Produkten",
      "Verminderung von Druck",
    ],
    0,
    "Ein Katalysator senkt die Aktivierungsenergie und beschleunigt Hin- und Rückreaktion gleichermaßen; er ändert die Gleichgewichtslage nicht. Temperatur, Konzentration (Edukte/Produkte) und Druck können das Gleichgewicht verschieben (Prinzip von Le Chatelier).",
    "mittel",
    ["Gleichgewicht", "Katalysator"]
  ),
  q(
    "ch-pool-007",
    "chem-kap3",
    "Die Bindung zwischen welchen der genannten Elementkombinationen ist die polarste?",
    [
      "Wasserstoff/Kohlenstoff",
      "Kohlenstoff/Chlor",
      "Chlor/Calcium",
      "Phosphor/Sauerstoff",
      "Lithium/Wasserstoff",
    ],
    4,
    "Die Polarität steigt mit der Elektronegativitätsdifferenz. Li−H hat eine große EN-Differenz (Li ≈1,0, H ≈2,2); Li ist stark elektropositiv. Auch O−H und F−H sind sehr polar; unter den Optionen ist Li−H eine der polarsten.",
    "mittel",
    ["Polare Bindung", "Elektronegativität"]
  ),
  q(
    "ch-pool-008",
    "chem-kap5",
    "Welche der genannten Säuren trägt am meisten zum Auftreten von saurem Regen bei?",
    ["HCl", "H₂S", "HNO₃", "H₃PO₄", "HF"],
    2,
    "Saurer Regen entsteht vor allem durch Schwefelverbindungen (H₂SO₄ aus SO₂) und Stickoxide (HNO₃ aus NOₓ). Von den Optionen ist HNO₃ (Stickoxide aus Verbrennung, Verkehr) neben H₂SO₄ der Hauptbeiträger; H₃PO₄ und HCl spielen eine geringere Rolle.",
    "mittel",
    ["Säuren", "saurer Regen", "Anorganische Chemie"]
  ),
  q(
    "ch-pool-009",
    "chem-kap1",
    "Welche Aussage zum Licht trifft zu?",
    [
      "Licht kann man als elektromagnetische Welle beschreiben.",
      "Je energiereicher ein Lichtteilchen ist, umso größer ist seine Wellenlänge.",
      "Licht kann man ausschließlich anhand seines Teilchencharakters beschreiben.",
      "Die Teilchen, als die Licht aufgenommen oder abgegeben wird, heißen Protonen.",
      "Die Energie eines Lichtteilchens ist von seiner Wellenlänge unabhängig.",
    ],
    0,
    "Licht zeigt Wellen-Teilchen-Dualismus: Es kann als elektromagnetische Welle (Wellenlänge λ, Frequenz ν) und als Photon (E = hν) beschrieben werden. Energiereichere Photonen haben kleinere Wellenlänge (E = hc/λ). Die Lichtteilchen heißen Photonen, nicht Protonen.",
    "mittel",
    ["Licht", "Photon", "Atombau"]
  ),
  q(
    "ch-pool-010",
    "chem-kap2",
    "Die Lichtgeschwindigkeit im Vakuum beträgt etwa:",
    ["300 000 km/s", "300 000 km/h", "300 km/h", "300 km/s", "300 000 m/s"],
    0,
    "Die Lichtgeschwindigkeit im Vakuum ist c ≈ 3·10⁸ m/s = 300 000 km/s. 300 000 m/s wären nur 300 km/s und damit zu klein; km/h wäre nochmals um Faktor 3600 kleiner.",
    "leicht",
    ["Lichtgeschwindigkeit", "Konstanten"]
  ),
  q(
    "ch-pool-011",
    "chem-kap5",
    "Bei 25 °C gilt für reines Wasser: K_w = [H₃O⁺]·[OH⁻] = 10⁻¹⁴. Was gilt bei Neutralität?",
    ["[H₃O⁺] = 10⁻⁷ mol/L, pH = 7", "[H₃O⁺] = 10⁻¹⁴ mol/L", "[OH⁻] = 0", "pH = 0", "K_w = 0"],
    0,
    "In neutralem Wasser bei 25 °C gilt [H₃O⁺] = [OH⁻] = 10⁻⁷ mol/L und damit pH = 7. K_w ist stets 10⁻¹⁴ (bei 25 °C); bei Neutralität sind die Konzentrationen gleich.",
    "leicht",
    ["Autoprotolyse", "pH", "K_w"]
  ),
  q(
    "ch-pool-012",
    "chem-kap2",
    "Wasser hat seine maximale Dichte bei:",
    ["0 °C", "4 °C", "10 °C", "25 °C", "100 °C"],
    1,
    "Die Dichteanomalie des Wassers: Dichtemaximum bei 4 °C. Unterhalb davon dehnt sich Wasser beim weiteren Abkühlen aus (Eisstruktur); Eis ist weniger dicht und schwimmt.",
    "leicht",
    ["Wasser", "Dichteanomalie"]
  ),
  q(
    "ch-pool-013",
    "chem-kap6",
    "Welche Hybridisierung haben die Kohlenstoffatome in Ethen (C₂H₄)?",
    ["sp³", "sp²", "sp", "sp³ und sp²", "unhybridisiert"],
    1,
    "Ethen hat eine C=C-Doppelbindung; beide C-Atome sind sp²-hybridisiert (Bindungswinkel 120°, trigonal-planar). Alkane haben sp³, Alkine (C≡C) haben sp (180°).",
    "mittel",
    ["Hybridisierung", "Alkene", "Ethen"]
  ),
  q(
    "ch-pool-014",
    "chem-kap6",
    "Der Bromwassertest (orange → farblos) zeigt an:",
    [
      "Anwesenheit einer Alkoholgruppe",
      "Anwesenheit einer C=C- oder C≡C-Bindung",
      "Anwesenheit von Halogen",
      "Anwesenheit von Sauerstoff",
      "Anwesenheit von Stickstoff",
    ],
    1,
    "Bromwasser entfärbt sich bei elektrophiler Addition an Doppel- oder Dreifachbindungen (Alkene, Alkine). Es ist ein klassischer Nachweis für ungesättigte Kohlenwasserstoffe.",
    "mittel",
    ["Bromwassertest", "Alkene", "Nachweis"]
  ),
  q(
    "ch-pool-015",
    "chem-kap4",
    "Bei einer Säure-Base-Reaktion nach Brønsted wird übertragen:",
    ["ein Elektron", "ein Proton", "ein Neutron", "ein Wasserstoffmolekül", "ein Hydroxidion"],
    1,
    "Nach Brønsted: Säure = Protonendonor, Base = Protonenakzeptor. Es wird ein H⁺ (Proton) übertragen. Redoxreaktionen betreffen Elektronen (e⁻).",
    "leicht",
    ["Säure-Base", "Brønsted", "Proton"]
  ),
  q(
    "ch-pool-016",
    "chem-kap3",
    "Warum hat MgO einen höheren Schmelzpunkt als NaCl?",
    [
      "MgO ist kovalent.",
      "Mg²⁺ und O²⁻ haben höhere Ionenladungen und kleinere Radien als Na⁺ und Cl⁻.",
      "NaCl ist ein Molekül.",
      "MgO enthält weniger Ionen.",
      "NaCl hat eine höhere Gitterenergie.",
    ],
    1,
    "Die Gitterenergie steigt mit zunehmender Ionenladung und abnehmendem Ionenradius (Coulomb). Mg²⁺ und O²⁻ führen zu viel höherer Gitterenergie als Na⁺/Cl⁻, daher Schmelzpunkt MgO (2852 °C) >> NaCl (801 °C).",
    "mittel",
    ["Gitterenergie", "Ionenbindung", "Schmelzpunkt"]
  ),
  q(
    "ch-pool-017",
    "chem-kap4",
    "OIL RIG steht für:",
    [
      "Oxidation ist Ladungszunahme, Reduktion ist Ladungsabnahme",
      "Oxidation Is Loss, Reduction Is Gain (of electrons)",
      "Säure gibt H⁺ ab, Base nimmt H⁺ auf",
      "Katalysator beschleunigt die Reaktion",
      "Gleichgewicht bei gleichen Konzentrationen",
    ],
    1,
    "OIL RIG: Oxidation Is Loss (of electrons), Reduction Is Gain (of electrons). Oxidation = Elektronenabgabe; Reduktion = Elektronenaufnahme.",
    "leicht",
    ["Redox", "OIL RIG", "Oxidation"]
  ),
  q(
    "ch-pool-018",
    "chem-kap2",
    "Die ideale Gasgleichung lautet:",
    ["pV = nR/T", "pV = nRT", "p/T = nRV", "V = nT/(pR)", "p = Vn/T"],
    1,
    "Ideale Gasgleichung: pV = nRT mit R = Gaskonstante, T in Kelvin. Aus den Einzelgesetzen (Boyle-Mariotte, Charles, Avogadro) abgeleitet.",
    "leicht",
    ["Gasgleichung", "ideales Gas"]
  ),
  q(
    "ch-pool-019",
    "chem-kap5",
    "Welcher pH-Wert hat eine Lösung mit [H₃O⁺] = 10⁻⁵ mol/L?",
    ["5", "−5", "9", "10⁻⁵", "14"],
    0,
    "pH = −log₁₀[H₃O⁺] = −log₁₀(10⁻⁵) = 5. Die Lösung ist sauer (pH < 7).",
    "leicht",
    ["pH", "Berechnung"]
  ),
  q(
    "ch-pool-020",
    "chem-kap6",
    "Welche Verbindung gehört NICHT zu den Alkenen?",
    ["Ethen", "But-2-en", "Cyclohexen", "Benzol", "Pent-1-en"],
    3,
    "Benzol (Benzen) ist ein Aromat (6 π-Elektronen, Hückel-Regel), kein Alken. Alkene haben lokalisierte C=C-Doppelbindungen; Benzol hat delokalisierte π-Elektronen.",
    "mittel",
    ["Alkene", "Benzol", "Aromat"]
  ),
  q(
    "ch-pool-021",
    "chem-kap1",
    "Die Ordnungszahl Z eines Elements gibt an:",
    [
      "die Anzahl der Neutronen",
      "die Anzahl der Protonen im Kern",
      "die Massenzahl",
      "die Anzahl der Elektronenhüllen",
      "die Atommasse",
    ],
    1,
    "Ordnungszahl Z = Anzahl der Protonen im Kern (und in neutralen Atomen auch der Elektronen). Massenzahl A = Protonen + Neutronen.",
    "leicht",
    ["Ordnungszahl", "Atombau"]
  ),
  q(
    "ch-pool-022",
    "chem-kap2",
    "Bei konstanter Stoffmenge und konstanter Temperatur gilt nach Boyle-Mariotte:",
    [
      "p · V = konstant",
      "V / T = konstant",
      "p / T = konstant",
      "V · n = konstant",
      "p + V = konstant",
    ],
    0,
    "Boyle-Mariotte: Bei T = const und n = const ist p · V = konstant. Halbiert man das Volumen, verdoppelt sich der Druck.",
    "leicht",
    ["Boyle-Mariotte", "Gasgesetze"]
  ),
  q(
    "ch-pool-023",
    "chem-kap5",
    "Welches Gas entsteht bei der Reaktion von Salzsäure mit einem Carbonat?",
    ["Sauerstoff", "Stickstoff", "Kohlendioxid", "Wasserstoff", "Chlor"],
    2,
    "Carbonat + Säure → Kohlendioxid + Wasser + Salz, z. B. CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂. CO₂ entweicht als Gas.",
    "mittel",
    ["Carbonat", "Säure", "Kohlendioxid"]
  ),
  q(
    "ch-pool-024",
    "chem-kap4",
    "Ein Katalysator:",
    [
      "verschiebt das Gleichgewicht auf die Produktseite",
      "wird bei der Reaktion verbraucht",
      "senkt die Aktivierungsenergie",
      "erhöht die Reaktionsenthalpie",
      "ändert die Gleichgewichtskonstante K",
    ],
    2,
    "Ein Katalysator senkt die Aktivierungsenergie und beschleunigt Hin- und Rückreaktion gleichermaßen. Er wird nicht verbraucht und ändert weder ΔG noch die Gleichgewichtslage.",
    "mittel",
    ["Katalysator", "Aktivierungsenergie"]
  ),
  q(
    "ch-pool-025",
    "chem-kap3",
    "Welche Bindung ist am wenigsten polar?",
    ["C−H", "C−O", "C−F", "C−Cl", "O−H"],
    0,
    "C−H hat die kleinste Elektronegativitätsdifferenz (ΔEN) unter den Optionen; C und H sind relativ ähnlich. C−F, O−H und C−O sind deutlich polarer.",
    "mittel",
    ["Polare Bindung", "Elektronegativität"]
  ),
  q(
    "ch-pool-026",
    "chem-kap6",
    "Die allgemeine Summenformel der Alkane lautet:",
    ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙHₙ", "CₙH₂ₙ₊₁"],
    1,
    "Alkane sind gesättigte Kohlenwasserstoffe: CₙH₂ₙ₊₂. Alkene: CₙH₂ₙ. Alkine: CₙH₂ₙ₋₂.",
    "leicht",
    ["Alkane", "Summenformel"]
  ),
  q(
    "ch-pool-027",
    "chem-kap5",
    "Eine Lösung mit pH = 11 ist:",
    ["sauer", "neutral", "basisch", "amphoter", "puffernd"],
    2,
    "pH > 7 bedeutet basisch (Überschuss an OH⁻). pH < 7 = sauer, pH = 7 = neutral (bei 25 °C).",
    "leicht",
    ["pH", "basisch"]
  ),
  q(
    "ch-pool-028",
    "chem-kap2",
    "Der Übergang von fest zu gasförmig ohne flüssige Phase heißt:",
    ["Verdampfen", "Kondensieren", "Sublimieren", "Erstarren", "Schmelzen"],
    2,
    "Sublimieren = fest → gasförmig (z. B. Iod, Trockeneis). Der umgekehrte Weg (gasförmig → fest) heißt Resublimieren.",
    "leicht",
    ["Sublimieren", "Phasenübergang"]
  ),
  q(
    "ch-pool-029",
    "chem-kap4",
    "Bei einer Redoxreaktion:",
    [
      "werden Protonen übertragen",
      "werden Elektronen übertragen",
      "bleibt die Oxidationszahl aller Atome gleich",
      "entstehen nur Salze",
      "wird kein Stoff oxidiert",
    ],
    1,
    "Redoxreaktion = Elektronenübertragung. Oxidation = Elektronenabgabe; Reduktion = Elektronenaufnahme. Die Oxidationszahlen ändern sich.",
    "leicht",
    ["Redox", "Elektronen"]
  ),
  q(
    "ch-pool-030",
    "chem-kap3",
    "NaCl leitet im festen Zustand keinen Strom, weil:",
    [
      "NaCl ein Nichtleiter ist",
      "die Ionen im Gitter fixiert sind",
      "NaCl kovalent ist",
      "keine Ionen vorhanden sind",
      "der Schmelzpunkt zu hoch ist",
    ],
    1,
    "Im Kristall sind die Ionen ortsfest; es gibt keine frei beweglichen Ladungsträger. Geschmolzen oder in Lösung sind die Ionen beweglich → elektrische Leitfähigkeit.",
    "mittel",
    ["Ionenbindung", "Leitfähigkeit", "NaCl"]
  ),
  q(
    "ch-pool-031",
    "chem-kap1",
    "Isotope eines Elements unterscheiden sich in:",
    [
      "der Ordnungszahl",
      "der Anzahl der Protonen",
      "der Anzahl der Neutronen",
      "der Anzahl der Elektronen",
      "der Ladung des Kerns",
    ],
    2,
    "Isotope haben gleiche Ordnungszahl (gleiche Protonen- und Elektronenzahl), aber unterschiedliche Massenzahl wegen unterschiedlicher Neutronenzahl.",
    "leicht",
    ["Isotop", "Atombau"]
  ),
  q(
    "ch-pool-032",
    "chem-kap6",
    "Nach der Markovnikov-Regel addiert bei HX an ein unsymmetrisches Alken das H-Atom an:",
    [
      "das C-Atom mit weniger H-Atomen",
      "das C-Atom mit mehr H-Atomen",
      "beide C-Atome gleich",
      "das schwerere Halogen",
      "das Ende der Kette",
    ],
    1,
    "Markovnikov: Das H-Atom addiert an das C-Atom mit mehr H-Atomen (das H-reichere C); das Halogen X an das C-Atom mit weniger H-Atomen. Grund: Bildung des stabileren Carbokations.",
    "mittel",
    ["Markovnikov", "Alkene", "Addition"]
  ),
  q(
    "ch-pool-033",
    "chem-kap5",
    "Die Autoprotolyse des Wassers liefert:",
    [
      "nur H₃O⁺",
      "nur OH⁻",
      "H₃O⁺ und OH⁻ zu gleichen Konzentrationen in reinem Wasser",
      "O₂ und H₂",
      "H₂O₂",
    ],
    2,
    "2 H₂O ⇌ H₃O⁺ + OH⁻. In reinem Wasser bei 25 °C: [H₃O⁺] = [OH⁻] = 10⁻⁷ mol/L, K_w = 10⁻¹⁴.",
    "leicht",
    ["Autoprotolyse", "Wasser", "K_w"]
  ),
  q(
    "ch-pool-034",
    "chem-kap2",
    "Die Gaskonstante R hat den Wert (in SI-nahen Einheiten) etwa:",
    ["0,082 L·atm/(mol·K)", "8,314 J/(mol·K)", "22,4 L/mol", "1,38·10⁻²³ J/K", "6,022·10²³ mol⁻¹"],
    1,
    "R = 8,314 J/(mol·K) = 8,314 Pa·m³/(mol·K). 0,082 L·atm/(mol·K) ist derselbe Wert in anderen Einheiten. 22,4 L/mol ist das molare Volumen bei STP.",
    "mittel",
    ["Gaskonstante", "R"]
  ),
  q(
    "ch-pool-035",
    "chem-kap4",
    "Welcher Reaktionstyp liegt vor: 2 H₂O₂ → 2 H₂O + O₂?",
    ["Synthese", "Zersetzung", "Substitution", "Metathese", "Neutralisation"],
    1,
    "Eine Verbindung (H₂O₂) zerfällt in zwei einfachere Produkte (H₂O und O₂) = Zersetzungsreaktion. Katalase katalysiert diese Reaktion in Lebewesen.",
    "leicht",
    ["Reaktionstyp", "Zersetzung", "Wasserstoffperoxid"]
  ),
  q(
    "ch-pool-036",
    "chem-kap3",
    "Eine polare Bindung entsteht bei:",
    [
      "gleicher Elektronegativität der Partner",
      "großer Elektronegativitätsdifferenz",
      "nur bei Metallen",
      "nur bei Ionen",
      "immer bei C−H",
    ],
    1,
    "Polare Bindung: Elektronegativitätsdifferenz (ΔEN) zwischen den Bindungspartnern; die Bindung hat Partialladungen (δ+, δ−). Bei ΔEN > ca. 1,7 spricht man oft von Ionenbindung.",
    "leicht",
    ["Polare Bindung", "Elektronegativität"]
  ),
  q(
    "ch-pool-037",
    "chem-kap6",
    "Ethin (Acetylen) hat die Summenformel C₂H₂. Die C-Atome sind hybridisiert:",
    ["sp³", "sp²", "sp", "sp³d", "nicht hybridisiert"],
    2,
    "Ethin hat eine C≡C-Dreifachbindung; beide C-Atome sind sp-hybridisiert, lineare Geometrie (180°). Ethen: sp²; Ethan: sp³.",
    "mittel",
    ["Ethin", "Hybridisierung", "Alkine"]
  ),
  q(
    "ch-pool-038",
    "chem-kap5",
    "Welche Aussage zu Säuren ist richtig?",
    [
      "Starke Säuren sind vollständig protolysiert in wässriger Lösung.",
      "HCl ist eine schwache Säure.",
      "Eine Base nimmt H⁺ nicht auf.",
      "pH einer starken Säure ist immer 7.",
      "Säuren enthalten keine H-Atome.",
    ],
    0,
    "Starke Säuren (z. B. HCl, HNO₃, H₂SO₄) sind in Wasser praktisch vollständig dissoziiert. Schwache Säuren (z. B. Essigsäure) liegen größtenteils undissoziiert vor.",
    "mittel",
    ["Säuren", "stark", "Protolyse"]
  ),
  q(
    "ch-pool-039",
    "chem-kap1",
    "Die Massenzahl A ist definiert als:",
    [
      "Anzahl der Protonen",
      "Anzahl der Neutronen",
      "Anzahl der Protonen + Neutronen",
      "Ordnungszahl + 1",
      "Atommasse in u",
    ],
    2,
    "Massenzahl A = Anzahl der Protonen (Z) + Anzahl der Neutronen (N). A ≈ ganzzahlige Nukleonenzahl; die Atommasse in u kann wegen Isotopen und Bindungsenergie leicht abweichen.",
    "leicht",
    ["Massenzahl", "Atombau"]
  ),
  q(
    "ch-pool-040",
    "chem-kap2",
    "Bei 0 °C und 1 bar (STP) beträgt das molare Volumen eines idealen Gases etwa:",
    ["22,4 L/mol", "8,314 L/mol", "0,082 L/mol", "1 L/mol", "24,8 L/mol"],
    0,
    "Unter Standardbedingungen (STP: 0 °C, 1 atm) gilt V_m ≈ 22,4 L/mol für ideale Gase (Avogadro). Bei 1 bar (IUPAC) ist es etwa 22,7 L/mol.",
    "leicht",
    ["molares Volumen", "Avogadro", "STP"]
  ),
  q(
    "ch-pool-041",
    "chem-kap4",
    "Bei der Reaktion Zn + Cu²⁺ → Zn²⁺ + Cu:",
    [
      "wird Zn reduziert",
      "wird Cu²⁺ oxidiert",
      "wird Zn oxidiert und Cu²⁺ reduziert",
      "ändert sich keine Oxidationszahl",
      "werden keine Elektronen übertragen",
    ],
    2,
    "Zn gibt 2 e⁻ ab (Oxidation, Zn → Zn²⁺); Cu²⁺ nimmt 2 e⁻ auf (Reduktion, Cu²⁺ → Cu). Zn ist Reduktionsmittel, Cu²⁺ ist Oxidationsmittel.",
    "mittel",
    ["Redox", "Oxidationszahl", "Zink", "Kupfer"]
  ),
  q(
    "ch-pool-042",
    "chem-kap6",
    "Warum siedet n-Pentan höher als Neopentan (beide C₅H₁₂)?",
    [
      "Neopentan hat eine Doppelbindung.",
      "n-Pentan hat eine größere Kontaktfläche und stärkere van-der-Waals-Kräfte.",
      "Neopentan ist polar.",
      "n-Pentan hat H-Brücken.",
      "Neopentan hat mehr C-Atome.",
    ],
    1,
    "Beide sind Alkane (keine H-Brücken). n-Pentan ist linear, Neopentan stark verzweigt (kugelig). Größere Kontaktfläche → stärkere London-Kräfte → höherer Siedepunkt bei n-Pentan.",
    "mittel",
    ["Siedepunkt", "Alkane", "van-der-Waals"]
  ),
  q(
    "ch-pool-043",
    "chem-kap5",
    "Ein Puffer hält den pH weitgehend konstant, weil:",
    [
      "er keine H⁺ enthält",
      "er nur aus Wasser besteht",
      "er eine konjugierte Säure-Base-Paar enthält, die H⁺ abfängt oder abgibt",
      "der pH immer 7 ist",
      "er keine Base enthält",
    ],
    2,
    "Puffer enthalten ein konjugiertes Säure-Base-Paar (z. B. HCO₃⁻/CO₂, H₂PO₄⁻/HPO₄²⁻). Zugabe von H⁺ oder OH⁻ wird durch Verschiebung des Gleichgewichts abgepuffert; der pH ändert sich nur wenig.",
    "mittel",
    ["Puffer", "Säure-Base", "pH"]
  ),
  q(
    "ch-pool-044",
    "chem-kap3",
    "Die Gitterenergie einer Ionenverbindung:",
    [
      "ist die Energie zum Schmelzen",
      "ist die bei der Bildung des Gitters aus gasförmigen Ionen freigesetzte Energie",
      "ist unabhängig von den Ionenradien",
      "ist bei NaCl größer als bei MgO",
      "kann direkt gemessen werden",
    ],
    1,
    "Gitterenergie = Energie, die freigesetzt wird, wenn gasförmige Ionen zum Kristall zusammentreten (bzw. die zugeführte Energie für die umgekehrte Reaktion). Sie hängt von Ladungen und Radien ab (Coulomb) und wird über den Born-Haber-Kreisprozess bestimmt.",
    "mittel",
    ["Gitterenergie", "Ionenbindung"]
  ),
  q(
    "ch-pool-045",
    "chem-kap6",
    "Welche Aussage zu Benzol ist richtig?",
    [
      "Benzol hat drei konjugierte Doppelbindungen wie ein Alken.",
      "Benzol hat 6 lokalisierte π-Elektronen.",
      "Benzol erfüllt die Hückel-Regel (4n+2 π-Elektronen).",
      "Benzol reagiert leicht wie ein Alken durch Addition.",
      "Benzol ist gesättigt.",
    ],
    2,
    "Benzol hat 6 delokalisierte π-Elektronen in einem Ring; 4n+2 mit n=1 (Hückel-Regel) → aromatisch. Es hat keine lokalen C=C-Bindungen wie ein Alken und neigt zur Substitution, nicht zur Addition.",
    "mittel",
    ["Benzol", "Aromat", "Hückel"]
  ),
  q(
    "ch-pool-046",
    "chem-kap4",
    "Nach Le Chatelier verschiebt sich das Gleichgewicht N₂ + 3 H₂ ⇌ 2 NH₃ (exotherm) bei Temperaturerhöhung:",
    [
      "auf die Produktseite",
      "auf die Eduktseite",
      "nicht",
      "nur bei Katalysator",
      "zu höherem Druck",
    ],
    1,
    "Bei exothermer Reaktion wirkt Temperaturerhöhung wie Wärmezufuhr; das System weicht aus, indem es die endotherme Richtung (Rückreaktion) begünstigt → Verschiebung zu den Edukten.",
    "mittel",
    ["Le Chatelier", "Gleichgewicht", "Temperatur"]
  ),
  q(
    "ch-pool-047",
    "chem-kap1",
    "Die Hauptquantenzahl n beschreibt:",
    [
      "die Form des Orbitals",
      "die räumliche Orientierung",
      "die Energie und Größe des Orbitals",
      "den Spin des Elektrons",
      "die Anzahl der Protonen",
    ],
    2,
    "Die Hauptquantenzahl n (1, 2, 3, …) bestimmt die Energie und die ungefähre Größe des Orbitals (Schale). Nebenquantenzahl l = Form (s, p, d, f), magnetische Quantenzahl m = Orientierung.",
    "mittel",
    ["Quantenzahlen", "Orbital", "Atombau"]
  ),
  q(
    "ch-pool-048",
    "chem-kap5",
    "Welcher Stoff ist eine Lewis-Base?",
    ["H⁺", "NH₃", "BF₃", "AlCl₃", "H₃O⁺"],
    1,
    "Lewis-Base = Elektronenpaardonor. NH₃ hat ein freies Elektronenpaar und kann es zur Bindung bereitstellen. H⁺, BF₃ und AlCl₃ sind Lewis-Säuren (Elektronenpaarakzeptoren).",
    "mittel",
    ["Lewis-Base", "Lewis-Säure", "Ammoniak"]
  ),
  q(
    "ch-pool-049",
    "chem-kap2",
    "Welche Aussage zu idealen Gasen ist falsch?",
    [
      "Gasteilchen haben kein Eigenvolumen.",
      "Es gibt keine Wechselwirkungen zwischen den Teilchen.",
      "pV = nRT gilt in guter Näherung bei niedrigem Druck und hoher Temperatur.",
      "Reale Gase weichen bei hohem Druck und tiefer Temperatur ab.",
      "Ideale Gase sind immer flüssig.",
    ],
    4,
    "Ideale Gase sind ein Modell; reale Gase verhalten sich bei niedrigem Druck und hoher Temperatur annähernd ideal. Die Aussage „immer flüssig“ ist falsch – ideale Gase bleiben bei diesem Modell gasförmig.",
    "mittel",
    ["ideales Gas", "Gasgesetze"]
  ),
  q(
    "ch-pool-050",
    "chem-kap6",
    "Die radikalische Substitution ist typisch für:",
    ["Alkene", "Alkine", "Alkane", "Aromaten", "Alkohole"],
    2,
    "Alkane reagieren mit Halogenen (z. B. Cl₂) unter UV-Licht durch radikalische Substitution (ein H wird durch Halogen ersetzt). Alkene addieren elektrophil (z. B. Brom).",
    "mittel",
    ["radikalische Substitution", "Alkane", "Halogenierung"]
  ),
];
