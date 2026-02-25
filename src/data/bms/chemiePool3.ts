/**
 * Chemie-Pool Teil 3 — Fragen 101–150.
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

export const chemiePool3: Question[] = [
  q(
    "ch-pool-101",
    "chem-kap1",
    "Welches Teilchen hat keine elektrische Ladung?",
    ["Proton", "Elektron", "Neutron", "Kation", "Anion"],
    2,
    "Neutron ist neutral. Proton: positiv. Elektron: negativ. Kation/Anion: geladene Ionen.",
    "leicht",
    ["Neutron", "Atombau"]
  ),
  q(
    "ch-pool-102",
    "chem-kap5",
    "Welche Formel stellt eine Base dar?",
    ["H₂SO₄", "HNO₃", "KOH", "HCl", "H₃PO₄"],
    2,
    "KOH (Kaliumhydroxid) ist eine starke Base; in Wasser: KOH → K⁺ + OH⁻. Die anderen sind Säuren.",
    "leicht",
    ["Base", "KOH"]
  ),
  q(
    "ch-pool-103",
    "chem-kap3",
    "Welche Eigenschaft trifft auf Ionenkristalle zu?",
    [
      "Sie leiten im Festkörper gut Strom.",
      "Sie haben oft hohe Schmelzpunkte.",
      "Sie sind weich und verformbar.",
      "Sie sind unpolar.",
      "Sie bestehen aus Molekülen.",
    ],
    1,
    "Ionenkristalle haben hohe Schmelzpunkte (große Gitterenergie), sind spröde und leiten im Festkörper nicht (Ionen ortsfest).",
    "mittel",
    ["Ionenkristall", "Schmelzpunkt"]
  ),
  q(
    "ch-pool-104",
    "chem-kap6",
    "Die Addition von Brom (Br₂) an Ethen ist eine:",
    ["Substitution", "Addition", "Eliminierung", "Umlagerung", "Redoxreaktion"],
    1,
    "Alkene addieren Brom elektrophil: C₂H₄ + Br₂ → 1,2-Dibromethan. Entfärbung von Bromwasser = Nachweis für Doppelbindung.",
    "leicht",
    ["Addition", "Alken", "Brom"]
  ),
  q(
    "ch-pool-105",
    "chem-kap2",
    "Welche Einheit hat die Gaskonstante R in J/(mol·K)?",
    ["Pa", "L/mol", "J/(mol·K)", "mol/L", "K"],
    2,
    "R = 8,314 J/(mol·K). Andere Einheiten: 0,08314 L·bar/(mol·K), 0,08206 L·atm/(mol·K).",
    "leicht",
    ["Gaskonstante", "Einheit"]
  ),
  q(
    "ch-pool-106",
    "chem-kap4",
    "Ein Oxidationsmittel:",
    [
      "wird oxidiert",
      "wird reduziert",
      "gibt Elektronen ab",
      "ändert die Oxidationszahl nicht",
      "ist immer Sauerstoff",
    ],
    1,
    "Oxidationsmittel nimmt Elektronen auf und wird dabei reduziert. Reduktionsmittel gibt Elektronen ab und wird oxidiert.",
    "mittel",
    ["Oxidationsmittel", "Redox"]
  ),
  q(
    "ch-pool-107",
    "chem-kap1",
    "In welcher Gruppe des PSE steht das Element mit der Elektronenkonfiguration 1s² 2s² 2p⁶ 3s² 3p⁵?",
    ["Gruppe 2", "Gruppe 5", "Gruppe 7 (17)", "Gruppe 8", "Gruppe 1"],
    2,
    "3s² 3p⁵ = 7 Valenzelektronen → 7. Hauptgruppe (Gruppe 17) = Halogene, z. B. Chlor.",
    "mittel",
    ["Elektronenkonfiguration", "Periodensystem"]
  ),
  q(
    "ch-pool-108",
    "chem-kap5",
    "Der pK_s-Wert einer starken Säure ist:",
    ["groß (z. B. 10)", "klein (z. B. −1 oder 1)", "immer 7", "immer 14", "negativ und sehr groß"],
    1,
    "Starke Säure: große Dissoziationskonstante K_s → pK_s klein (z. B. HCl pK_s ≈ −7). Schwache Säure: kleiner K_s → großer pK_s.",
    "mittel",
    ["pKs", "starke Säure"]
  ),
  q(
    "ch-pool-109",
    "chem-kap3",
    "Die Elektronegativität nach Pauling ist:",
    [
      "eine Einheit für die Masse",
      "ein Maß für das Bestreben, Elektronen anzuziehen",
      "die Ladung eines Ions",
      "die Anzahl der Valenzelektronen",
      "die Ionisierungsenergie",
    ],
    1,
    "Elektronegativität (EN) = Anziehungskraft eines Atoms auf Bindungselektronen. Pauling-Skala: F = 4,0 (höchster Wert).",
    "leicht",
    ["Elektronegativität", "Pauling"]
  ),
  q(
    "ch-pool-110",
    "chem-kap6",
    "Welche Verbindung ist ein Alkan?",
    ["C₂H₄", "C₃H₆", "C₄H₁₀", "C₂H₂", "C₆H₆"],
    2,
    "Alkane: CₙH₂ₙ₊₂. C₄H₁₀ = Butan. C₂H₄ = Ethen (Alken), C₃H₆ = Propen/Cyclopropan, C₂H₂ = Ethin (Alkin), C₆H₆ = Benzol (Aromat).",
    "leicht",
    ["Alkan", "Summenformel"]
  ),
  q(
    "ch-pool-111",
    "chem-kap2",
    "Nach Avogadro enthalten gleiche Volumina idealer Gase bei gleichem p und T:",
    [
      "gleiche Masse",
      "gleiche Teilchenzahl",
      "gleiche Dichte",
      "gleiche molare Masse",
      "verschiedene Stoffmenge",
    ],
    1,
    "Avogadro: Gleiche Volumina idealer Gase bei gleichem Druck und gleicher Temperatur enthalten die gleiche Anzahl Teilchen (gleiche Stoffmenge n).",
    "leicht",
    ["Avogadro", "Gasgesetze"]
  ),
  q(
    "ch-pool-112",
    "chem-kap4",
    "Die Reaktion 2 Na + Cl₂ → 2 NaCl ist eine:",
    ["Zersetzung", "Synthese", "Substitution", "Metathese", "Neutralisation"],
    1,
    "Synthese: Zwei Elemente (Na, Cl₂) vereinigen sich zu einer Verbindung (NaCl).",
    "leicht",
    ["Synthese", "Natrium", "Chlor"]
  ),
  q(
    "ch-pool-113",
    "chem-kap5",
    "Welcher pH liegt bei [H₃O⁺] = 10⁻¹¹ mol/L vor?",
    ["11", "3", "−11", "1", "7"],
    0,
    "pH = −log(10⁻¹¹) = 11. Sehr geringe H₃O⁺-Konzentration → stark basisch.",
    "leicht",
    ["pH", "Berechnung"]
  ),
  q(
    "ch-pool-114",
    "chem-kap3",
    "Welche Aussage zur Gitterenergie ist falsch?",
    [
      "Sie ist bei MgO größer als bei NaCl.",
      "Sie hängt von den Ionenradien ab.",
      "Sie kann über den Born-Haber-Kreisprozess bestimmt werden.",
      "Sie ist die Energie beim Schmelzen.",
      "Sie ist negativ bei der Bildung des Gitters aus gasförmigen Ionen.",
    ],
    3,
    "Gitterenergie = freigesetzte Energie bei Bildung des Gitters aus gasförmigen Ionen (oder zugeführte bei Umkehrung). Nicht die Schmelzenergie.",
    "mittel",
    ["Gitterenergie", "Born-Haber"]
  ),
  q(
    "ch-pool-115",
    "chem-kap6",
    "Welche Hybridisierung hat Kohlenstoff in Methan (CH₄)?",
    ["sp", "sp²", "sp³", "sp³d", "unhybridisiert"],
    2,
    "Methan: nur Einfachbindungen, tetraedrische Geometrie → sp³-Hybridisierung, Bindungswinkel 109,5°.",
    "leicht",
    ["Methan", "sp3", "Hybridisierung"]
  ),
  q(
    "ch-pool-116",
    "chem-kap1",
    "Isotope haben die gleiche:",
    ["Massenzahl", "Neutronenzahl", "Ordnungszahl", "Atommasse", "Kernladung und Neutronenzahl"],
    2,
    "Isotope: gleiche Ordnungszahl Z (Protonenzahl), unterschiedliche Massenzahl A (Neutronenzahl variiert).",
    "leicht",
    ["Isotop", "Ordnungszahl"]
  ),
  q(
    "ch-pool-117",
    "chem-kap2",
    "Erstarren ist der Übergang:",
    [
      "flüssig → fest",
      "fest → flüssig",
      "gasförmig → flüssig",
      "fest → gasförmig",
      "flüssig → gasförmig",
    ],
    0,
    "Erstarren (Gefrieren) = flüssig → fest. Schmelzen = fest → flüssig.",
    "leicht",
    ["Erstarren", "Phasenübergang"]
  ),
  q(
    "ch-pool-118",
    "chem-kap4",
    "Bei einer endothermen Reaktion:",
    [
      "wird Wärme abgegeben",
      "wird Wärme aufgenommen",
      "ist ΔH = 0",
      "läuft die Reaktion nie freiwillig",
      "wird kein Übergangszustand durchlaufen",
    ],
    1,
    "Endotherm = Wärme wird aufgenommen, ΔH > 0. Exotherm = Wärme wird abgegeben, ΔH < 0.",
    "leicht",
    ["endotherm", "Reaktionsenthalpie"]
  ),
  q(
    "ch-pool-119",
    "chem-kap5",
    "Die konjugierte Base von H₂SO₄ ist:",
    ["H₃SO₄⁺", "SO₄²⁻", "HSO₄⁻", "H₃O⁺", "OH⁻"],
    2,
    "H₂SO₄ gibt ein H⁺ ab → HSO₄⁻ (Hydrogensulfat). Das konjugierte Säure-Base-Paar ist H₂SO₄/HSO₄⁻.",
    "mittel",
    ["konjugierte Base", "Schwefelsäure"]
  ),
  q(
    "ch-pool-120",
    "chem-kap3",
    "London-Dispersionskräfte (van-der-Waals) sind:",
    [
      "nur bei polaren Molekülen vorhanden",
      "sehr schwache Kräfte zwischen allen Molekülen",
      "nur bei Ionen wirksam",
      "stärker als Wasserstoffbrücken",
      "kovalente Bindungen",
    ],
    1,
    "London-Kräfte: schwache, kurzreichweitige Kräfte durch temporäre Dipole; wirken zwischen allen Molekülen. Bei großen Molekülen können sie summiert erheblich sein.",
    "mittel",
    ["London-Kräfte", "van-der-Waals"]
  ),
  q(
    "ch-pool-121",
    "chem-kap6",
    "Welche Aussage zu Alkoholen ist richtig?",
    [
      "Alkohole haben keine OH-Gruppe.",
      "Primäre Alkohole haben die OH-Gruppe an einem C mit einem C-Nachbarn.",
      "Alkohole sind immer gasförmig.",
      "Alkohole bilden keine H-Brücken.",
      "Ethanol ist kein Alkohol.",
    ],
    1,
    "Primärer Alkohol: OH an C-Atom mit einem C-Nachbarn (z. B. Ethanol CH₃CH₂OH). Alkohole haben −OH und können H-Brücken bilden.",
    "mittel",
    ["Alkohol", "primär"]
  ),
  q(
    "ch-pool-122",
    "chem-kap1",
    "Die Frequenz ν einer Welle und ihre Wellenlänge λ sind verknüpft durch (c = Lichtgeschwindigkeit):",
    ["ν = λ", "ν · λ = c", "ν = c + λ", "ν = c − λ", "ν/λ = 1"],
    1,
    "c = λ · ν, also ν · λ = c. Hohe Frequenz → kleine Wellenlänge.",
    "leicht",
    ["Frequenz", "Wellenlänge"]
  ),
  q(
    "ch-pool-123",
    "chem-kap2",
    "Bei Boyle-Mariotte wird vorausgesetzt:",
    [
      "V und T konstant",
      "p und T konstant",
      "n und T konstant",
      "n und p konstant",
      "nur n konstant",
    ],
    2,
    "Boyle-Mariotte: Bei konstanter Temperatur T und konstanter Stoffmenge n ist p · V = konstant.",
    "leicht",
    ["Boyle-Mariotte", "Gasgesetze"]
  ),
  q(
    "ch-pool-124",
    "chem-kap4",
    "Die Oxidationszahl von Sauerstoff in den meisten Verbindungen ist:",
    ["+1", "+2", "−1", "−2", "0"],
    3,
    "Sauerstoff hat in den meisten Oxiden und Verbindungen die Oxidationszahl −2. Ausnahmen: Peroxide (O₂²⁻: −1), OF₂ (+2).",
    "leicht",
    ["Oxidationszahl", "Sauerstoff"]
  ),
  q(
    "ch-pool-125",
    "chem-kap5",
    "Ein Puffer enthält typischerweise:",
    [
      "nur eine starke Säure",
      "ein konjugiertes Säure-Base-Paar",
      "nur Wasser",
      "keine Ionen",
      "nur Basen",
    ],
    1,
    "Puffer = konjugiertes Säure-Base-Paar (z. B. HCO₃⁻/CO₂, H₂PO₄⁻/HPO₄²⁻). Sie können H⁺ abfangen oder abgeben und halten den pH relativ konstant.",
    "mittel",
    ["Puffer", "konjugiertes Paar"]
  ),
  q(
    "ch-pool-126",
    "chem-kap3",
    "Welche Verbindung hat einen hohen Schmelzpunkt und leitet geschmolzen den Strom?",
    ["Schwefel", "Wasser", "Kochsalz", "Ethanol", "Zucker"],
    2,
    "NaCl (Kochsalz): Ionenkristall, hoher Schmelzpunkt (801 °C), leitet in geschmolzenem Zustand Strom (bewegliche Ionen).",
    "leicht",
    ["Schmelzpunkt", "Leitfähigkeit", "NaCl"]
  ),
  q(
    "ch-pool-127",
    "chem-kap6",
    "Benzol (C₆H₆) gehört zu den:",
    ["Alkanen", "Alkenen", "Alkinen", "Aromaten", "Alkoholen"],
    3,
    "Benzol ist ein Aromat (6 π-Elektronen, Hückel-Regel 4n+2 mit n=1), kein Alken. Delokalisierte π-Elektronen im Ring.",
    "leicht",
    ["Benzol", "Aromat"]
  ),
  q(
    "ch-pool-128",
    "chem-kap1",
    "Die maximale Besetzung der s-, p-, d- und f-Orbitale mit Elektronen beträgt:",
    [
      "s: 2, p: 4, d: 6, f: 8",
      "s: 2, p: 6, d: 10, f: 14",
      "s: 1, p: 3, d: 5, f: 7",
      "jeweils 2",
      "s: 8, p: 8, d: 8, f: 8",
    ],
    1,
    "s: 2 Elektronen, p: 6 (3 Orbitale), d: 10 (5 Orbitale), f: 14 (7 Orbitale). Jeweils 2 Elektronen pro Orbital.",
    "leicht",
    ["Orbitale", "Besetzung"]
  ),
  q(
    "ch-pool-129",
    "chem-kap2",
    "Welche Temperatur in °C entspricht 373 K?",
    ["0 °C", "100 °C", "273 °C", "373 °C", "−100 °C"],
    1,
    "T(°C) = T(K) − 273,15. 373 K − 273,15 ≈ 100 °C (Siedepunkt von Wasser bei 1 atm).",
    "leicht",
    ["Kelvin", "Celsius"]
  ),
  q(
    "ch-pool-130",
    "chem-kap4",
    "Ein Enzym wirkt als:",
    ["Oxidationsmittel", "Katalysator", "Reduktionsmittel", "Puffer", "Säure"],
    1,
    "Enzyme sind biologische Katalysatoren; sie senken die Aktivierungsenergie und beschleunigen Reaktionen, werden selbst nicht verbraucht.",
    "leicht",
    ["Enzym", "Katalysator"]
  ),
  q(
    "ch-pool-131",
    "chem-kap5",
    "Welche Lösung hat den niedrigsten pH?",
    [
      "[H₃O⁺] = 10⁻⁹ mol/L",
      "[H₃O⁺] = 10⁻⁷ mol/L",
      "[H₃O⁺] = 10⁻⁵ mol/L",
      "[H₃O⁺] = 10⁻¹¹ mol/L",
      "[OH⁻] = 10⁻³ mol/L",
    ],
    2,
    "Niedrigster pH = höchste H₃O⁺-Konzentration. 10⁻⁵ mol/L → pH = 5 (am sauersten unter den Optionen). 10⁻⁹ und 10⁻¹¹ sind basisch; 10⁻⁷ neutral.",
    "leicht",
    ["pH", "sauer"]
  ),
  q(
    "ch-pool-132",
    "chem-kap3",
    "Die Ionenbindung entsteht bevorzugt zwischen:",
    [
      "zwei Nichtmetallen",
      "Metall und Nichtmetall",
      "zwei Metallen",
      "Edelgasen",
      "zwei Halogenen",
    ],
    1,
    "Metall (gibt Elektronen ab) + Nichtmetall (nimmt Elektronen auf) → Ionen (Kation + Anion) → Ionenbindung. Große EN-Differenz.",
    "leicht",
    ["Ionenbindung", "Metall", "Nichtmetall"]
  ),
  q(
    "ch-pool-133",
    "chem-kap6",
    "Welche Reaktion ist typisch für Alkane?",
    [
      "Addition von Brom",
      "radikalische Substitution mit Chlor",
      "Reaktion mit NaOH",
      "Addition von Wasser",
      "Bildung von Estern",
    ],
    1,
    "Alkane: radikalische Substitution, z. B. CH₄ + Cl₂ → CH₃Cl + HCl (unter UV). Alkene: Addition von Brom.",
    "mittel",
    ["Alkane", "radikalische Substitution"]
  ),
  q(
    "ch-pool-134",
    "chem-kap1",
    "Die Anzahl der Schalen (Hauptenergieniveaus) bei Chlor (Z=17) beträgt:",
    ["1", "2", "3", "4", "5"],
    2,
    "Chlor: 1s² 2s² 2p⁶ 3s² 3p⁵ → 3 Schalen (n = 1, 2, 3).",
    "leicht",
    ["Schale", "Elektronenkonfiguration"]
  ),
  q(
    "ch-pool-135",
    "chem-kap2",
    "Welche Aussage zu realen Gasen ist richtig?",
    [
      "Sie folgen immer exakt pV = nRT.",
      "Bei hohem Druck und tiefer Temperatur weichen sie vom idealen Verhalten ab.",
      "Sie haben kein Eigenvolumen.",
      "Es gibt keine Anziehung zwischen den Teilchen.",
      "Der Kompressibilitätsfaktor Z ist immer 1.",
    ],
    1,
    "Reale Gase: Bei hohem Druck (Eigenvolumen relevant) und tiefer Temperatur (Anziehungskräfte) weichen sie ab. Van-der-Waals-Gleichung korrigiert das.",
    "mittel",
    ["reales Gas", "ideales Gas"]
  ),
  q(
    "ch-pool-136",
    "chem-kap4",
    "Bei der Neutralisation reagieren:",
    [
      "Säure und Base zu Salz und Wasser",
      "zwei Säuren",
      "zwei Basen",
      "nur Metalle",
      "nur Nichtmetalle",
    ],
    0,
    "Neutralisation: Säure + Base → Salz + Wasser. z. B. HCl + NaOH → NaCl + H₂O. Es entstehen H₂O und ein Salz.",
    "leicht",
    ["Neutralisation", "Säure", "Base"]
  ),
  q(
    "ch-pool-137",
    "chem-kap5",
    "Welcher Stoff ist eine Lewis-Säure?",
    ["NH₃", "OH⁻", "BF₃", "H₂O", "Cl⁻"],
    2,
    "Lewis-Säure = Elektronenpaarakzeptor. BF₃ hat eine leere p-Orbital und kann ein Elektronenpaar aufnehmen. NH₃, OH⁻, H₂O, Cl⁻ sind Lewis-Basen.",
    "mittel",
    ["Lewis-Säure", "BF3"]
  ),
  q(
    "ch-pool-138",
    "chem-kap3",
    "Wasserstoffbrücken bilden sich aus zwischen:",
    [
      "nur zwischen C und H",
      "H-Atom (gebunden an O, N oder F) und O, N oder F",
      "zwischen allen Atomen",
      "nur in Ionen",
      "nur in Festkörpern",
    ],
    1,
    "H-Brücken: H muss an ein stark elektronegatives Atom (O, N, F) gebunden sein; das andere Atom ist ebenfalls O, N oder F mit freiem Elektronenpaar.",
    "leicht",
    ["Wasserstoffbrücken", "H-Bindung"]
  ),
  q(
    "ch-pool-139",
    "chem-kap6",
    "Die allgemeine Summenformel der Alkine lautet:",
    ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙHₙ", "CₙH₂ₙ₋₁"],
    2,
    "Alkine: C≡C-Dreifachbindung, CₙH₂ₙ₋₂. Alkane: CₙH₂ₙ₊₂. Alkene: CₙH₂ₙ.",
    "leicht",
    ["Alkine", "Summenformel"]
  ),
  q(
    "ch-pool-140",
    "chem-kap1",
    "Welches Element hat die kleinste Elektronegativität unter den folgenden?",
    ["Fluor", "Chlor", "Kohlenstoff", "Natrium", "Sauerstoff"],
    3,
    "Natrium (Metall, Gruppe 1) hat eine sehr niedrige EN (ca. 0,9). Fluor hat die höchste (4,0).",
    "leicht",
    ["Elektronegativität", "Natrium"]
  ),
  q(
    "ch-pool-141",
    "chem-kap2",
    "Das Gesetz von Avogadro bezieht sich auf:",
    [
      "Druck und Volumen",
      "Volumen und Stoffmenge bei konstantem p und T",
      "nur auf Flüssigkeiten",
      "nur auf Feststoffe",
      "Temperatur und Druck",
    ],
    1,
    "Avogadro: Bei gleichem Druck und gleicher Temperatur ist das Volumen eines idealen Gases proportional zur Stoffmenge n (V/n = const).",
    "leicht",
    ["Avogadro", "Stoffmenge"]
  ),
  q(
    "ch-pool-142",
    "chem-kap4",
    "Die Gleichgewichtskonstante K für A + B ⇌ C + D ist definiert als (bei idealen Lösungen):",
    [
      "K = [A][B] / [C][D]",
      "K = [C][D] / [A][B]",
      "K = [A] + [B]",
      "K = [C] − [D]",
      "K = [A][B][C][D]",
    ],
    1,
    "Für aA + bB ⇌ cC + dD: K = [C]^c [D]^d / ([A]^a [B]^b). Produkte im Zähler, Edukte im Nenner (Aktivitäten bzw. Konzentrationen).",
    "mittel",
    ["Gleichgewichtskonstante", "K"]
  ),
  q(
    "ch-pool-143",
    "chem-kap5",
    "Welche Aussage zu H₃O⁺ ist richtig?",
    [
      "H₃O⁺ ist eine Base.",
      "H₃O⁺ ist das Hydroniumion.",
      "H₃O⁺ kommt nur in Basen vor.",
      "H₃O⁺ hat keinen Einfluss auf den pH.",
      "H₃O⁺ entsteht bei Zugabe von Base zu Wasser.",
    ],
    1,
    "H₃O⁺ = Hydroniumion (Proton + Wasser). Entsteht bei Zugabe von Säure zu Wasser. Bestimmt den pH: pH = −log[H₃O⁺].",
    "leicht",
    ["Hydroniumion", "H3O+"]
  ),
  q(
    "ch-pool-144",
    "chem-kap3",
    "Welche Aussage zur kovalenten Bindung ist falsch?",
    [
      "Sie kann polar sein.",
      "Sie beruht auf gemeinsam genutzten Elektronenpaaren.",
      "Sie kann aus mehreren Elektronenpaaren bestehen (Doppel-/Dreifachbindung).",
      "Sie entsteht nur zwischen gleichen Atomen.",
      "Die Bindungslänge hängt von den Bindungspartnern ab.",
    ],
    3,
    "Kovalente Bindungen entstehen auch zwischen verschiedenen Atomen (z. B. C−H, C−O, N−H). Gleich oder verschieden ist kein Kriterium.",
    "mittel",
    ["kovalente Bindung"]
  ),
  q(
    "ch-pool-145",
    "chem-kap6",
    "Ein Alken mit 4 C-Atomen hat die Summenformel:",
    ["C₄H₁₀", "C₄H₈", "C₄H₆", "C₄H₄", "C₄H₁₂"],
    1,
    "Alkene: CₙH₂ₙ. n = 4 → C₄H₈ (Buten). C₄H₁₀ = Butan (Alkan).",
    "leicht",
    ["Alken", "Buten", "Summenformel"]
  ),
  q(
    "ch-pool-146",
    "chem-kap1",
    "Die Periode im PSE gibt die Anzahl der besetzten Schalen an bei:",
    [
      "allen Elementen der Periode",
      "den Hauptgruppenelementen",
      "nur den Edelgasen",
      "nur den Metallen",
      "keinem Element",
    ],
    0,
    "Die Periodennummer entspricht der Anzahl der besetzten Elektronenschalen (Hauptquantenzahl n) bei den Elementen dieser Periode.",
    "leicht",
    ["Periode", "Periodensystem"]
  ),
  q(
    "ch-pool-147",
    "chem-kap2",
    "Resublimieren ist der Übergang:",
    [
      "gasförmig → fest",
      "fest → gasförmig",
      "flüssig → fest",
      "fest → flüssig",
      "flüssig → gasförmig",
    ],
    0,
    "Resublimieren = gasförmig → fest (z. B. Iod-Dampf zu Iod-Kristallen). Sublimieren = fest → gasförmig.",
    "leicht",
    ["Resublimieren", "Phasenübergang"]
  ),
  q(
    "ch-pool-148",
    "chem-kap4",
    "Bei Druckerhöhung verschiebt sich das Gleichgewicht N₂ + 3 H₂ ⇌ 2 NH₃:",
    [
      "auf die Eduktseite",
      "auf die Produktseite (weniger Gasteilchen)",
      "nicht",
      "nur bei Katalysator",
      "zu niedrigerer Temperatur",
    ],
    1,
    "4 mol Gas → 2 mol Gas. Nach Le Chatelier: Druckerhöhung begünstigt die Seite mit weniger Gasteilchen → Produktseite.",
    "mittel",
    ["Le Chatelier", "Druck", "Ammoniak"]
  ),
  q(
    "ch-pool-149",
    "chem-kap5",
    "Welche Säure ist zweiprotonig?",
    ["HCl", "HNO₃", "H₂SO₄", "HF", "HBr"],
    2,
    "Zweiprotonig (diprotonisch): kann 2 H⁺ abgeben. H₂SO₄ → HSO₄⁻ → SO₄²⁻. HCl, HNO₃, HF, HBr sind einprotonig.",
    "mittel",
    ["zweiprotonig", "Schwefelsäure"]
  ),
  q(
    "ch-pool-150",
    "chem-kap3",
    "Die Born-Haber-Kreisprozess dient zur Berechnung der:",
    [
      "Schmelzenthalpie",
      "Gitterenergie",
      "Hydratationsenthalpie",
      "Verdampfungsenthalpie",
      "Reaktionsenthalpie",
    ],
    1,
    "Born-Haber-Kreisprozess: Berechnung der Gitterenergie aus messbaren Teilschritten (Sublimation, Ionisierung, Dissoziation, Elektronenaffinität, Gitterenergie).",
    "mittel",
    ["Born-Haber", "Gitterenergie"]
  ),
];
