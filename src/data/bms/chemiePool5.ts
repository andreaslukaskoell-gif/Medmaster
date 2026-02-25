/**
 * Chemie-Pool Teil 5 — Fragen 201–250.
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

export const chemiePool5: Question[] = [
  q(
    "ch-pool-201",
    "chem-kap1",
    "Wie viele Elektronen passen maximal in die 3. Schale?",
    ["2", "8", "18", "32", "50"],
    2,
    "Maximale Besetzung: 2n². n=3 → 2·9 = 18 (3s² 3p⁶ 3d¹⁰).",
    "mittel",
    []
  ),
  q(
    "ch-pool-202",
    "chem-kap2",
    "Was beschreibt die Zustandsgleichung pV = nRT?",
    [
      "Nur Flüssigkeiten",
      "Ideales Gas",
      "Reale Gase nur bei tiefem Druck",
      "Festkörper",
      "Nur bei 0 °C",
    ],
    1,
    "Ideale Gasgleichung für ideale Gase. Reale Gase weichen bei hohem p und niedrigem T ab.",
    "leicht",
    []
  ),
  q(
    "ch-pool-203",
    "chem-kap3",
    "Welche Bindung ist rein kovalent (am wenigsten polar)?",
    ["C−H", "C−F", "N−H", "O−H", "C−C"],
    4,
    "C−C: gleiche EN, unpolar. Die anderen haben EN-Differenz und sind polar.",
    "leicht",
    []
  ),
  q(
    "ch-pool-204",
    "chem-kap4",
    "Was ist die Einheit der Gleichgewichtskonstante K?",
    ["Immer dimensionslos", "Immer mol/L", "Hängt von der Reaktion ab", "Immer bar", "Immer J/mol"],
    2,
    "K kann dimensionslos sein (bei c°) oder Einheiten haben (z. B. bar⁻¹, L/mol), je nach Reaktion.",
    "schwer",
    []
  ),
  q(
    "ch-pool-205",
    "chem-kap5",
    "Welcher Stoff ist amphoter?",
    ["NaCl", "HCl", "Al(OH)₃", "NaOH", "KOH"],
    2,
    "Amphoter: kann als Säure und Base wirken. Al(OH)₃ löst sich in Säure und in Base (Aluminat).",
    "mittel",
    []
  ),
  q(
    "ch-pool-206",
    "chem-kap6",
    "Was ist die funktionelle Gruppe eines Aldehyds?",
    ["−OH", "−COOH", "−CHO", "−NH₂", "−O−"],
    2,
    "Aldehyd: −CHO (Carbonyl am Ende der Kette). Keton: −CO− in der Kette.",
    "leicht",
    []
  ),
  q(
    "ch-pool-207",
    "chem-kap1",
    "Welches Element hat die kleinste Atommasse?",
    ["Helium", "Wasserstoff", "Lithium", "Kohlenstoff", "Sauerstoff"],
    1,
    "Wasserstoff (H) hat die kleinste Atommasse (ca. 1 u). Helium ca. 4 u.",
    "leicht",
    []
  ),
  q(
    "ch-pool-208",
    "chem-kap2",
    "Die Siedetemperatur von Wasser bei 1 bar beträgt etwa:",
    ["0 °C", "25 °C", "50 °C", "100 °C", "373 °C"],
    3,
    "Wasser siedet bei 1 bar (Normdruck) bei 100 °C (373,15 K).",
    "leicht",
    []
  ),
  q(
    "ch-pool-209",
    "chem-kap3",
    "Welche Aussage zu NaCl in Wasser trifft zu?",
    [
      "Es bleibt als Molekül gelöst.",
      "Es dissoziiert zu Na⁺ und Cl⁻.",
      "Es bildet H₂.",
      "Es reagiert mit H₂O zu NaOH.",
      "Es sinkt ungelöst zu Boden.",
    ],
    1,
    "NaCl dissoziiert in Wasser vollständig zu Na⁺(aq) und Cl⁻(aq).",
    "leicht",
    []
  ),
  q(
    "ch-pool-210",
    "chem-kap4",
    "Ein Inhibitor:",
    [
      "beschleunigt die Reaktion",
      "verlangsamt oder hemmt die Reaktion",
      "ändert das Gleichgewicht",
      "wird verbraucht und nicht regeneriert",
      "ist immer ein Enzym",
    ],
    1,
    "Inhibitor hemmt eine Reaktion (z. B. Enzymhemmung). Katalysator beschleunigt.",
    "leicht",
    []
  ),
  q(
    "ch-pool-211",
    "chem-kap5",
    "Der pH von reinem Wasser bei 37 °C ist:",
    ["genau 7", "etwa 6,8", "größer als 8", "kleiner als 6", "0"],
    1,
    "Bei 37 °C ist K_w größer; neutraler pH liegt bei etwa 6,8, nicht 7.",
    "mittel",
    []
  ),
  q(
    "ch-pool-212",
    "chem-kap6",
    "Welche Verbindung ist ein Alkohol?",
    ["CH₃OCH₃", "CH₃CHO", "CH₃CH₂OH", "CH₃COOH", "CH₃NH₂"],
    2,
    "CH₃CH₂OH = Ethanol (Alkohol mit −OH). CH₃OCH₃ = Ether, CH₃CHO = Acetaldehyd, CH₃COOH = Essigsäure.",
    "leicht",
    []
  ),
  q(
    "ch-pool-213",
    "chem-kap1",
    "Die Hauptgruppenelemente stehen in den Gruppen:",
    ["nur 1 und 2", "1–8 (bzw. 1, 2, 13–18)", "nur 3–12", "nur 18", "1–18"],
    1,
    "Hauptgruppen: 1, 2, 13–18 (IUPAC: 1, 2, 13–18). Nebengruppen: 3–12 (Übergangsmetalle).",
    "leicht",
    []
  ),
  q(
    "ch-pool-214",
    "chem-kap2",
    "Welcher Prozess ist endotherm?",
    ["Kondensation", "Erstarren", "Verdampfen", "Resublimieren", "Deposition"],
    2,
    "Verdampfen benötigt Energie (Verdampfungsenthalpie). Kondensation und Erstarren setzen Wärme frei.",
    "leicht",
    []
  ),
  q(
    "ch-pool-215",
    "chem-kap3",
    "Die Löslichkeit von NaCl in Wasser ist möglich, weil:",
    [
      "NaCl unpolar ist",
      "die Hydratationsenthalpie die Gitterenergie überwindet",
      "NaCl keine Ionen hat",
      "Wasser nicht polar ist",
      "NaCl gasförmig wird",
    ],
    1,
    "Hydratation der Ionen (Wasser umhüllt Na⁺ und Cl⁻) liefert genug Energie, um die Gitterenergie zu überwinden.",
    "mittel",
    []
  ),
  q(
    "ch-pool-216",
    "chem-kap4",
    "Bei einer Gleichgewichtsreaktion A ⇌ B wird bei Temperaturerhöhung (rechts exotherm):",
    [
      "mehr A gebildet",
      "mehr B gebildet",
      "nichts ändert sich",
      "nur Katalysator hilft",
      "die Reaktion stoppt",
    ],
    0,
    "Exotherm nach rechts → Temperaturerhöhung begünstigt die endotherme Richtung (Rückreaktion) → mehr A.",
    "mittel",
    []
  ),
  q(
    "ch-pool-217",
    "chem-kap5",
    "Welche Base ist stark?",
    ["NH₃", "NaOH", "H₂O", "HCO₃⁻", "CH₃COO⁻"],
    1,
    "NaOH (Natriumhydroxid) ist eine starke Base (vollständig dissoziiert). NH₃ ist schwache Base.",
    "leicht",
    []
  ),
  q(
    "ch-pool-218",
    "chem-kap6",
    "Ein quartäres C-Atom ist an wie viele C-Atome gebunden?",
    ["1", "2", "3", "4", "0"],
    3,
    "Quartär: 4 C-Nachbarn (z. B. Neopentan-Zentralatom). Primär 1, sekundär 2, tertiär 3.",
    "leicht",
    []
  ),
  q(
    "ch-pool-219",
    "chem-kap1",
    "Welches Orbital wird nach 4s zuerst besetzt?",
    ["4p", "3d", "4d", "5s", "4f"],
    1,
    "Aufbauordnung: 4s vor 3d, dann 3d, dann 4p. Nach 4s kommt 3d (Übergangsmetalle).",
    "mittel",
    []
  ),
  q(
    "ch-pool-220",
    "chem-kap2",
    "Die Dichte von Eis ist im Vergleich zu flüssigem Wasser:",
    ["höher", "gleich", "niedriger", "doppelt so hoch", "temperaturabhängig gleich"],
    2,
    "Eis ist weniger dicht (ca. 0,92 g/cm³) als Wasser → Eis schwimmt.",
    "leicht",
    []
  ),
  q(
    "ch-pool-221",
    "chem-kap3",
    "Welche Aussage zu Dipolmomenten ist richtig?",
    [
      "Nur Ionen haben ein Dipolmoment.",
      "Polare Moleküle können ein permanentes Dipolmoment haben.",
      "Unpolare Moleküle haben immer ein großes Dipolmoment.",
      "Wasser hat kein Dipolmoment.",
      "CO₂ hat ein großes Dipolmoment.",
    ],
    1,
    "Polare Moleküle (ungleiche EN) haben permanentes Dipolmoment. H₂O: ja; CO₂: linear, symmetrisch → kein Dipolmoment.",
    "mittel",
    []
  ),
  q(
    "ch-pool-222",
    "chem-kap4",
    "Die Aktivierungsenergie E_A erscheint in:",
    [
      "der Gleichgewichtskonstanten",
      "der Arrhenius-Gleichung",
      "dem Massenwirkungsgesetz",
      "der Nernst-Gleichung",
      "der idealen Gasgleichung",
    ],
    1,
    "Arrhenius: k = A·exp(−E_A/(RT)). E_A beeinflusst die Geschwindigkeitskonstante k.",
    "mittel",
    []
  ),
  q(
    "ch-pool-223",
    "chem-kap5",
    "Welches Salz bildet sich aus HCl und NH₃?",
    ["NaCl", "NH₄Cl", "NCl₃", "HClO", "NH₄OH"],
    1,
    "HCl + NH₃ → NH₄Cl (Ammoniumchlorid). NH₃ nimmt H⁺ auf → NH₄⁺.",
    "leicht",
    []
  ),
  q(
    "ch-pool-224",
    "chem-kap6",
    "Welche Verbindung enthält eine Doppelbindung zwischen zwei C-Atomen?",
    ["Ethan", "Ethen", "Ethan", "Methan", "Propan"],
    1,
    "Ethen C₂H₄ hat C=C. Ethan C₂H₆ nur Einfachbindungen.",
    "leicht",
    []
  ),
  q(
    "ch-pool-225",
    "chem-kap1",
    "Die Elektronenkonfiguration von Neon (Z=10) ist:",
    ["1s² 2s² 2p⁴", "1s² 2s² 2p⁶", "1s² 2s² 2p⁵", "1s² 2s² 2p³", "2s² 2p⁶"],
    1,
    "Neon: 10 Elektronen → 1s² 2s² 2p⁶ (Edelgaskonfiguration).",
    "leicht",
    []
  ),
  q(
    "ch-pool-226",
    "chem-kap2",
    "Welche Zustandsgröße ist keine intensive Größe?",
    ["Druck", "Temperatur", "Dichte", "Volumen", "Konzentration"],
    3,
    "Volumen ist extensiv (abhängig von der Menge). Druck, T, Dichte, Konzentration sind intensiv.",
    "mittel",
    []
  ),
  q(
    "ch-pool-227",
    "chem-kap3",
    "Welche Verbindung ist ein Salz (ionisch)?",
    ["H₂O", "CaCO₃", "CH₄", "NH₃", "CO₂"],
    1,
    "CaCO₃ (Calciumcarbonat) ist ein ionisches Salz. Die anderen sind molekular.",
    "leicht",
    []
  ),
  q(
    "ch-pool-228",
    "chem-kap4",
    "Bei A + B → C ist die Reaktion erster Ordnung bezüglich A. Dann gilt:",
    ["v = k", "v = k·[A]", "v = k·[A]²", "v = k·[B]", "v = k·[A]·[B]"],
    1,
    "1. Ordnung bezüglich A: v proportional [A], also v = k·[A].",
    "leicht",
    []
  ),
  q(
    "ch-pool-229",
    "chem-kap5",
    "Eine Lösung mit [OH⁻] = 10⁻² mol/L hat pOH:",
    ["2", "12", "−2", "7", "14"],
    0,
    "pOH = −log[OH⁻] = −log(10⁻²) = 2. pH = 14 − 2 = 12.",
    "leicht",
    []
  ),
  q(
    "ch-pool-230",
    "chem-kap6",
    "Welche Stoffklasse hat die Gruppe −COO−?",
    ["Alkohol", "Ether", "Ester", "Amin", "Aldehyd"],
    2,
    "Ester: −COO− (Carbonyl + Ether-Sauerstoff). R−COO−R'.",
    "leicht",
    []
  ),
  q(
    "ch-pool-231",
    "chem-kap1",
    "Welches Metall ist ein Alkalimetall?",
    ["Magnesium", "Calcium", "Natrium", "Eisen", "Kupfer"],
    2,
    "Alkalimetalle = Gruppe 1: Li, Na, K, Rb, Cs, Fr. Magnesium und Calcium sind Erdalkalimetalle.",
    "leicht",
    []
  ),
  q(
    "ch-pool-232",
    "chem-kap2",
    "Die spezifische Wärmekapazität von Wasser ist:",
    [
      "niedriger als die von Ethanol",
      "sehr hoch im Vergleich zu anderen Flüssigkeiten",
      "null",
      "nur bei 4 °C definiert",
      "immer konstant bei 0 °C",
    ],
    1,
    "Wasser hat eine sehr hohe spez. Wärmekapazität (ca. 4,18 kJ/(kg·K)) wegen der H-Brücken.",
    "leicht",
    []
  ),
  q(
    "ch-pool-233",
    "chem-kap3",
    "Welche Aussage zu Metallen trifft zu?",
    [
      "Metalle bestehen aus Ionen.",
      "Metalle haben delokalisierte Elektronen (Elektronengas).",
      "Metalle sind nicht leitfähig.",
      "Metalle haben nur kovalente Bindungen.",
      "Metalle sind immer flüssig.",
    ],
    1,
    "Metallbindung: positive Atomrümpfe in einem „See“ delokalisierter Elektronen → Leitfähigkeit, Verformbarkeit.",
    "mittel",
    []
  ),
  q(
    "ch-pool-234",
    "chem-kap4",
    "Die Reaktion 2 NO₂ ⇌ N₂O₄ ist in der Hinreaktion exotherm. Druckerhöhung:",
    [
      "fördert die Bildung von NO₂",
      "fördert die Bildung von N₂O₄",
      "hat keinen Einfluss",
      "verlangsamt beide Richtungen",
      "erhöht nur die Temperatur",
    ],
    1,
    "Druckerhöhung begünstigt die Seite mit weniger Gasteilchen: 2 NO₂ → 1 N₂O₄.",
    "mittel",
    []
  ),
  q(
    "ch-pool-235",
    "chem-kap5",
    "Welcher Wert hat [OH⁻] in einer Lösung mit pH = 10?",
    ["10⁻¹⁰ mol/L", "10⁻⁴ mol/L", "10 mol/L", "10⁻¹⁰ mol/L", "10⁻⁷ mol/L"],
    1,
    "pH = 10 → pOH = 4 → [OH⁻] = 10⁻⁴ mol/L.",
    "leicht",
    []
  ),
  q(
    "ch-pool-236",
    "chem-kap6",
    "Welche Aussage zu Carbonsäuren ist richtig?",
    [
      "Sie haben keinen sauren Charakter.",
      "Sie enthalten die Gruppe −COOH.",
      "Sie sind immer gasförmig.",
      "Sie reagieren nicht mit Basen.",
      "Sie haben keine Wasserstoffbrücken.",
    ],
    1,
    "Carbonsäuren haben −COOH (Carboxylgruppe), sind protonenabgebend und können H-Brücken bilden.",
    "leicht",
    []
  ),
  q(
    "ch-pool-237",
    "chem-kap1",
    "Die Anzahl der Protonen im Kern bestimmt:",
    [
      "die Massenzahl",
      "die Isotopenverteilung",
      "die Ordnungszahl und das Element",
      "nur die Neutronenzahl",
      "die Elektronenaffinität",
    ],
    2,
    "Anzahl Protonen = Ordnungszahl Z = Identität des Elements. Massenzahl A = Protonen + Neutronen.",
    "leicht",
    []
  ),
  q(
    "ch-pool-238",
    "chem-kap2",
    "Welche Phase hat den geringsten Ordnungsgrad?",
    ["fest", "flüssig", "gasförmig", "kritisch", "superkritisch"],
    2,
    "Gas: Teilchen weit voneinander, wenig Ordnung. Fest: hohe Ordnung (Gitter). Flüssig: dazwischen.",
    "leicht",
    []
  ),
  q(
    "ch-pool-239",
    "chem-kap3",
    "Welche Verbindung hat einen niedrigen Schmelzpunkt und ist bei Raumtemperatur flüssig?",
    ["NaCl", "Diamant", "Wasser", "Eisen", "Quarz"],
    2,
    "Wasser: Schmelzpunkt 0 °C, bei RT flüssig. NaCl, Diamant, Eisen, Quarz haben hohe Schmelzpunkte.",
    "leicht",
    []
  ),
  q(
    "ch-pool-240",
    "chem-kap4",
    "Was beschreibt das Massenwirkungsgesetz?",
    [
      "Die Reaktionsgeschwindigkeit",
      "Das Gleichgewicht bei konstanter Temperatur",
      "Die Aktivierungsenergie",
      "Die Reaktionsordnung",
      "Die Katalyse",
    ],
    1,
    "Massenwirkungsgesetz: Bei Gleichgewicht gilt K = (Produkte)/(Edukte) (mit stöchiometrischen Exponenten).",
    "mittel",
    []
  ),
  q(
    "ch-pool-241",
    "chem-kap5",
    "Welcher Indikator ist in der Säure farblos und in der Base pink/rot?",
    ["Lackmus", "Phenolphthalein", "Bromthymolblau", "Methylorange", "Universalindikator"],
    1,
    "Phenolphthalein: farblos in Säure, pink/rot in Base (pH-Bereich ca. 8–10).",
    "leicht",
    []
  ),
  q(
    "ch-pool-242",
    "chem-kap6",
    "Welche Verbindung ist ein Aromat?",
    ["Cyclohexan", "Cyclohexen", "Benzol", "Hexan", "Hexen"],
    2,
    "Benzol (C₆H₆) ist ein Aromat (6 π-Elektronen, Hückel). Cyclohexan ist ein gesättigter Ring (Alkan).",
    "leicht",
    []
  ),
  q(
    "ch-pool-243",
    "chem-kap1",
    "Welches Element ist ein Edelgas?",
    ["Chlor", "Stickstoff", "Helium", "Sauerstoff", "Fluor"],
    2,
    "Edelgase = Gruppe 18: He, Ne, Ar, Kr, Xe, Rn. Helium hat voll besetzte Schale (1s²).",
    "leicht",
    []
  ),
  q(
    "ch-pool-244",
    "chem-kap2",
    "Die latente Wärme beim Phasenübergang:",
    [
      "erhöht die Temperatur",
      "ändert die Temperatur nicht (isotherm)",
      "verringert die Temperatur immer",
      "ist immer null",
      "ist nur bei Gasen definiert",
    ],
    1,
    "Beim Phasenübergang (z. B. Schmelzen, Verdampfen) bleibt die Temperatur konstant; die zugeführte Energie wird für die Phasenumwandlung genutzt.",
    "mittel",
    []
  ),
  q(
    "ch-pool-245",
    "chem-kap3",
    "Welche Wechselwirkung ist typisch für Wasser?",
    [
      "Nur London-Kräfte",
      "Nur Ionenbindung",
      "Wasserstoffbrücken",
      "Metallbindung",
      "Keine zwischenmolekularen Kräfte",
    ],
    2,
    "Wasser bildet H-Brücken zwischen O und H (bis zu 4 pro Molekül).",
    "leicht",
    []
  ),
  q(
    "ch-pool-246",
    "chem-kap4",
    "Die Reaktionsenthalpie ΔH einer Reaktion:",
    [
      "bestimmt die Geschwindigkeit",
      "ist die Differenz der Enthalpien von Produkten und Edukten",
      "ist immer positiv",
      "ändert sich mit dem Katalysator",
      "ist die Aktivierungsenergie",
    ],
    1,
    "ΔH = H(Produkte) − H(Edukte). Exotherm: ΔH < 0. Endotherm: ΔH > 0. Unabhängig vom Katalysator.",
    "mittel",
    []
  ),
  q(
    "ch-pool-247",
    "chem-kap5",
    "Welche Aussage zu konjugierten Säure-Base-Paaren ist richtig?",
    [
      "Die konjugierte Base einer starken Säure ist stark.",
      "Die konjugierte Base einer starken Säure ist schwach.",
      "Es gibt keine konjugierten Paare.",
      "Base und konjugierte Säure sind identisch.",
      "Konjugierte Base hat mehr H⁺ als die Säure.",
    ],
    1,
    "Starke Säure → schwache konjugierte Base (z. B. HCl/Cl⁻). Schwache Säure → starke konjugierte Base.",
    "mittel",
    []
  ),
  q(
    "ch-pool-248",
    "chem-kap6",
    "Was ist ein Isomer?",
    [
      "Gleiche Summenformel, gleiche Struktur",
      "Gleiche Summenformel, unterschiedliche Struktur",
      "Immer ein Alkan",
      "Immer ein Ring",
      "Gleiche Molmasse, gleiche Eigenschaften",
    ],
    1,
    "Isomere: gleiche Summenformel, unterschiedliche Anordnung der Atome (Struktur oder Konfiguration).",
    "leicht",
    []
  ),
  q(
    "ch-pool-249",
    "chem-kap1",
    "Die Schalen (Hauptenergieniveaus) werden mit welchem Buchstaben bezeichnet?",
    ["s, p, d, f", "K, L, M, N", "n = 1, 2, 3, …", "α, β, γ", "A, B, C"],
    2,
    "Hauptquantenzahl n = 1, 2, 3, … (Schalen). K, L, M sind historische Bezeichnungen. s, p, d, f sind Orbitale.",
    "mittel",
    []
  ),
  q(
    "ch-pool-250",
    "chem-kap2",
    "Welche Aussage zum Phasendiagramm ist richtig?",
    [
      "Am kritischen Punkt verschwindet der Unterschied zwischen flüssig und gasförmig.",
      "Der Tripelpunkt liegt bei 100 °C.",
      "Über dem kritischen Punkt gibt es nur Festkörper.",
      "Druck hat keinen Einfluss auf den Siedepunkt.",
      "Alle drei Phasen koexistieren nur bei 0 °C.",
    ],
    0,
    "Am kritischen Punkt (T_c, p_c) verschwindet die Grenze zwischen Flüssigkeit und Gas; die Dichten werden gleich.",
    "mittel",
    []
  ),
];
