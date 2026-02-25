/**
 * Chemie-Pool Teil 6 — Fragen 251–300.
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

export const chemiePool6: Question[] = [
  q(
    "ch-pool-251",
    "chem-kap1",
    "Welche Elemente stehen in der 2. Periode?",
    ["Li bis Ne", "Na bis Ar", "K bis Kr", "H bis He", "Be bis F"],
    0,
    "2. Periode: n=2, 8 Elemente von Li (Z=3) bis Ne (Z=10).",
    "leicht",
    []
  ),
  q(
    "ch-pool-252",
    "chem-kap2",
    "Die Einheit des Drucks im SI-System ist:",
    ["bar", "atm", "Pascal (Pa)", "mmHg", "Torr"],
    2,
    "SI-Einheit für Druck: Pascal (Pa) = N/m². 1 bar = 10⁵ Pa, 1 atm ≈ 101325 Pa.",
    "leicht",
    []
  ),
  q(
    "ch-pool-253",
    "chem-kap3",
    "Welche Aussage zu Wasserstoffbrücken ist falsch?",
    [
      "Sie sind schwächer als kovalente Bindungen.",
      "Sie beeinflussen Siedepunkte.",
      "Sie treten zwischen H und O, N oder F auf.",
      "Sie sind stärker als kovalente Bindungen.",
      "Wasser hat viele H-Brücken.",
    ],
    3,
    "H-Brücken (~20 kJ/mol) sind deutlich schwächer als kovalente Bindungen (z. B. O−H ~460 kJ/mol).",
    "leicht",
    []
  ),
  q(
    "ch-pool-254",
    "chem-kap4",
    "Ein Gleichgewicht A ⇌ B liegt auf der rechten Seite, wenn:",
    ["K > 1", "K < 1", "K = 0", "K = 1 immer", "die Konzentration von A null ist"],
    0,
    "K = [B]/[A] (bei einfachem Fall). K > 1 → mehr B als A im Gleichgewicht.",
    "leicht",
    []
  ),
  q(
    "ch-pool-255",
    "chem-kap5",
    "Welche Lösung hat den höchsten pH?",
    ["[H₃O⁺] = 10⁻²", "[H₃O⁺] = 10⁻⁷", "[H₃O⁺] = 10⁻¹⁰", "[H₃O⁺] = 10⁻¹", "[OH⁻] = 10⁻¹⁰"],
    2,
    "Höchster pH = niedrigste [H₃O⁺]. 10⁻¹⁰ → pH = 10 (am basischsten).",
    "leicht",
    []
  ),
  q(
    "ch-pool-256",
    "chem-kap6",
    "Welche Verbindung gehört zu den Ketonen?",
    ["Methanol", "Aceton", "Ethanol", "Essigsäure", "Formaldehyd"],
    1,
    "Aceton (CH₃COCH₃) ist ein Keton (C=O in der Kette). Formaldehyd ist ein Aldehyd.",
    "leicht",
    []
  ),
  q(
    "ch-pool-257",
    "chem-kap1",
    "Die Elektronenaffinität von Chlor ist:",
    [
      "positiv (endotherm)",
      "negativ (exotherm)",
      "null",
      "gleich der von Natrium",
      "nicht definiert",
    ],
    1,
    "Chlor nimmt leicht ein Elektron auf → Cl⁻; die Reaktion ist exotherm → negative Elektronenaffinität (Energie wird frei).",
    "mittel",
    []
  ),
  q(
    "ch-pool-258",
    "chem-kap2",
    "Was passiert beim Erhitzen eines geschlossenen Gefäßes mit Gas (konstantes Volumen)?",
    [
      "Druck steigt",
      "Druck sinkt",
      "Druck bleibt konstant",
      "Volumen vergrößert sich",
      "Stoffmenge ändert sich",
    ],
    0,
    "Bei V = const: p proportional zu T (Gay-Lussac). Temperaturerhöhung → Druckerhöhung.",
    "leicht",
    []
  ),
  q(
    "ch-pool-259",
    "chem-kap3",
    "Welche Aussage zu Ionen ist richtig?",
    [
      "Ionen haben immer die gleiche Anzahl Protonen und Elektronen.",
      "Kationen haben mehr Elektronen als Protonen.",
      "Anionen haben mehr Elektronen als Protonen.",
      "Ionen sind immer ungeladen.",
      "Ionen existieren nur in Festkörpern.",
    ],
    2,
    "Anion: negativ geladen → mehr Elektronen als Protonen. Kation: positiv → weniger Elektronen als Protonen.",
    "leicht",
    []
  ),
  q(
    "ch-pool-260",
    "chem-kap4",
    "Die Stöchiometrie einer Reaktion beschreibt:",
    [
      "die Geschwindigkeit",
      "die molaren Verhältnisse der Edukte und Produkte",
      "die Aktivierungsenergie",
      "den Katalysator",
      "die Gleichgewichtslage",
    ],
    1,
    "Stöchiometrie: Verhältnis der Stoffmengen (Koeffizienten in der Reaktionsgleichung).",
    "leicht",
    []
  ),
  q(
    "ch-pool-261",
    "chem-kap5",
    "Welcher Puffer ist im Blut wichtig?",
    ["HCl/Cl⁻", "H₂CO₃/HCO₃⁻", "H₂SO₄/SO₄²⁻", "HNO₃/NO₃⁻", "H₃PO₄/PO₄³⁻"],
    1,
    "Bicarbonatpuffer: H₂CO₃/HCO₃⁻ (CO₂ + H₂O ⇌ H₂CO₃). Wichtig für pH-Regulation im Blut (ca. 7,4).",
    "mittel",
    []
  ),
  q(
    "ch-pool-262",
    "chem-kap6",
    "Was ist die Summenformel von Propan?",
    ["C₂H₆", "C₃H₆", "C₃H₈", "C₄H₁₀", "C₃H₄"],
    2,
    "Propan: Alkan mit 3 C → C₃H₈ (CₙH₂ₙ₊₂). C₃H₆ wäre Propen (Alken).",
    "leicht",
    []
  ),
  q(
    "ch-pool-263",
    "chem-kap1",
    "Welches Element hat 3 Valenzelektronen?",
    ["Kohlenstoff", "Stickstoff", "Aluminium", "Chlor", "Argon"],
    2,
    "Aluminium (Gruppe 13): 3s² 3p¹ → 3 Valenzelektronen. C hat 4, N hat 5, Cl hat 7.",
    "leicht",
    []
  ),
  q(
    "ch-pool-264",
    "chem-kap2",
    "Die Verdampfungsenthalpie wird beim Übergang benötigt:",
    [
      "fest → flüssig",
      "flüssig → gasförmig",
      "gasförmig → flüssig",
      "fest → gasförmig",
      "flüssig → fest",
    ],
    1,
    "Verdampfungsenthalpie: flüssig → gasförmig. Kondensation setzt dieselbe Energie frei.",
    "leicht",
    []
  ),
  q(
    "ch-pool-265",
    "chem-kap3",
    "Welche Verbindung enthält eine Ionenbindung?",
    ["CO₂", "MgCl₂", "H₂O", "NH₃", "CH₄"],
    1,
    "MgCl₂: Metall (Mg) + Nichtmetall (Cl) → Ionen Mg²⁺ und Cl⁻. Die anderen sind molekular.",
    "leicht",
    []
  ),
  q(
    "ch-pool-266",
    "chem-kap4",
    "Was ist ein Katalysator?",
    [
      "Ein Stoff, der verbraucht wird.",
      "Ein Stoff, der die Reaktionsgeschwindigkeit ändert, ohne verbraucht zu werden.",
      "Ein Stoff, der nur bei hoher Temperatur wirkt.",
      "Ein Oxidationsmittel.",
      "Immer ein Enzym.",
    ],
    1,
    "Katalysator: beschleunigt (oder verlangsamt) die Reaktion, wird nicht verbraucht, ändert nicht das Gleichgewicht.",
    "leicht",
    []
  ),
  q(
    "ch-pool-267",
    "chem-kap5",
    "Der pH einer Lösung mit [H₃O⁺] = 5·10⁻³ mol/L beträgt etwa:",
    ["2,3", "3", "5", "7", "12"],
    0,
    "pH = −log(5·10⁻³) = −(log 5 + log 10⁻³) = −(0,7 − 3) = 2,3.",
    "mittel",
    []
  ),
  q(
    "ch-pool-268",
    "chem-kap6",
    "Welche Aussage zu Alkoholen ist falsch?",
    [
      "Sie haben die −OH-Gruppe.",
      "Primäre Alkohole können zu Aldehyden oxidiert werden.",
      "Sie können H-Brücken bilden.",
      "Sie sind immer Basen.",
      "Ethanol ist ein Alkohol.",
    ],
    3,
    "Alkohole sind keine typischen Basen (R−OH gibt H⁺ nur schwach ab). Sie haben −OH und können H-Brücken bilden.",
    "mittel",
    []
  ),
  q(
    "ch-pool-269",
    "chem-kap1",
    "Die Anzahl der Neutronen in einem Atom mit A=14 und Z=6 beträgt:",
    ["6", "8", "14", "20", "2"],
    1,
    "Neutronenzahl N = A − Z = 14 − 6 = 8. (Kohlenstoff-14.)",
    "leicht",
    []
  ),
  q(
    "ch-pool-270",
    "chem-kap2",
    "Welche Aussage zu idealen Gasen ist richtig?",
    [
      "Sie haben ein Eigenvolumen.",
      "pV/(nT) = R = const.",
      "Sie weichen nie ab.",
      "Sie sind immer flüssig bei RT.",
      "Die Teilchen ziehen sich stark an.",
    ],
    1,
    "Ideale Gasgleichung: pV = nRT, also pV/(nT) = R. Ideale Gase: kein Eigenvolumen, keine Wechselwirkung.",
    "leicht",
    []
  ),
  q(
    "ch-pool-271",
    "chem-kap3",
    "Die Gitterenergie von NaCl ist negativ, weil:",
    [
      "NaCl aus Gas entsteht",
      "die Bildung des Gitters aus gasförmigen Ionen Energie freisetzt",
      "NaCl schmilzt",
      "NaCl löslich ist",
      "NaCl fest ist",
    ],
    1,
    "Gitterenergie = Energie, die freigesetzt wird, wenn Na⁺(g) und Cl⁻(g) zum Kristall zusammentreten → negativ (exotherm).",
    "mittel",
    []
  ),
  q(
    "ch-pool-272",
    "chem-kap4",
    "Bei einer Reaktion 2 A → B verdoppelt sich die Konzentration von A. Wie ändert sich die Geschwindigkeit (v = k·[A]²)?",
    [
      "v verdoppelt sich",
      "v vervierfacht sich",
      "v halbiert sich",
      "v bleibt gleich",
      "v verachtfacht sich",
    ],
    1,
    "v ∝ [A]². [A] verdoppelt → [A]² vervierfacht → v vervierfacht sich.",
    "mittel",
    []
  ),
  q(
    "ch-pool-273",
    "chem-kap5",
    "Welche Säure ist organisch?",
    ["HCl", "H₂SO₄", "Essigsäure (CH₃COOH)", "HNO₃", "H₃PO₄"],
    2,
    "Essigsäure CH₃COOH ist eine organische Carbonsäure. Die anderen sind anorganische Säuren.",
    "leicht",
    []
  ),
  q(
    "ch-pool-274",
    "chem-kap6",
    "Was ist die Hybridisierung des C-Atoms in CO₂?",
    ["sp³", "sp²", "sp", "sp³d", "keine"],
    2,
    "CO₂: O=C=O, lineare Geometrie, C hat zwei Doppelbindungen → sp-Hybridisierung (180°).",
    "mittel",
    []
  ),
  q(
    "ch-pool-275",
    "chem-kap1",
    "Welches Element hat die höchste Ionisierungsenergie in einer Periode (typischerweise)?",
    ["Alkalimetall", "Edelgas", "Halogen", "Erdalkalimetall", "Übergangsmetall"],
    1,
    "Edelgase haben die höchste Ionisierungsenergie in einer Periode (stabile Konfiguration). Alkalimetalle die niedrigste.",
    "mittel",
    []
  ),
  q(
    "ch-pool-276",
    "chem-kap2",
    "Die Schmelzenthalpie ist die Energie, die beim Übergang benötigt wird:",
    [
      "flüssig → gasförmig",
      "fest → flüssig",
      "gasförmig → flüssig",
      "fest → gasförmig",
      "flüssig → fest",
    ],
    1,
    "Schmelzen: fest → flüssig. Die Schmelzenthalpie muss zugeführt werden. Erstarren setzt sie frei.",
    "leicht",
    []
  ),
  q(
    "ch-pool-277",
    "chem-kap3",
    "Welche Verbindung ist am ehesten in Wasser unlöslich?",
    ["NaCl", "KCl", "AgCl", "MgCl₂", "CaCl₂"],
    2,
    "AgCl (Silberchlorid) ist schwer löslich (Fällungsreaktion). Die anderen Alkali-/Erdalkalichloride sind gut löslich.",
    "mittel",
    []
  ),
  q(
    "ch-pool-278",
    "chem-kap4",
    "Die Gleichgewichtskonstante K einer exothermen Reaktion:",
    [
      "nimmt mit steigender Temperatur zu",
      "nimmt mit steigender Temperatur ab",
      "ist unabhängig von T",
      "ist immer 1",
      "kann nicht gemessen werden",
    ],
    1,
    "Exotherm nach rechts: K = [Produkte]/[Edukte]. Temperaturerhöhung begünstigt die Rückreaktion → K wird kleiner.",
    "mittel",
    []
  ),
  q(
    "ch-pool-279",
    "chem-kap5",
    "Welches Ion ist ein Anion?",
    ["Na⁺", "Ca²⁺", "Cl⁻", "K⁺", "Mg²⁺"],
    2,
    "Anion = negativ geladenes Ion (z. B. Cl⁻, OH⁻, SO₄²⁻). Kation = positiv (Na⁺, Ca²⁺, K⁺, Mg²⁺).",
    "leicht",
    []
  ),
  q(
    "ch-pool-280",
    "chem-kap6",
    "Welche Verbindung ist ein Ester?",
    ["CH₃OH", "CH₃COOCH₃", "CH₃COOH", "HCHO", "CH₃NH₂"],
    1,
    "CH₃COOCH₃ = Methylacetat (Ester aus Essigsäure + Methanol). Ester: R−COO−R'.",
    "leicht",
    []
  ),
  q(
    "ch-pool-281",
    "chem-kap1",
    "Die Nebengruppenelemente sind die:",
    [
      "Gruppen 1 und 2",
      "Gruppen 3–12 (Übergangsmetalle)",
      "Gruppen 13–18",
      "nur Gruppe 18",
      "Lanthaniden und Actinoide",
    ],
    1,
    "Nebengruppen = Übergangsmetalle (Gruppen 3–12). Hauptgruppen: 1, 2, 13–18.",
    "leicht",
    []
  ),
  q(
    "ch-pool-282",
    "chem-kap2",
    "Welche Größe ist extensiv?",
    ["Druck", "Temperatur", "Stoffmenge", "Dichte", "Konzentration"],
    2,
    "Extensiv: hängt von der Menge ab (Stoffmenge n, Masse m, Volumen V). Intensiv: Druck, T, Dichte, Konzentration.",
    "leicht",
    []
  ),
  q(
    "ch-pool-283",
    "chem-kap3",
    "Welche Aussage zu polaren Lösungsmitteln ist richtig?",
    [
      "Sie lösen gut unpolare Stoffe.",
      "Sie haben oft eine hohe Dielektrizitätskonstante.",
      "Sie sind immer organisch.",
      "Sie leiten nie Strom.",
      "Sie haben kein Dipolmoment.",
    ],
    1,
    "Polare Lösungsmittel (z. B. Wasser) haben hohe Dielektrizitätskonstante ε und lösen Ionen und polare Stoffe gut.",
    "mittel",
    []
  ),
  q(
    "ch-pool-284",
    "chem-kap4",
    "Bei A + B → C + D liegt Gleichgewicht vor, wenn:",
    [
      "alle Edukte verbraucht sind",
      "die Geschwindigkeiten von Hin- und Rückreaktion gleich sind",
      "nur C und D vorhanden sind",
      "die Temperatur konstant ist",
      "ein Katalysator zugegeben wird",
    ],
    1,
    "Gleichgewicht: v_hin = v_rück; Konzentrationen bleiben konstant. Edukte und Produkte sind beide vorhanden.",
    "leicht",
    []
  ),
  q(
    "ch-pool-285",
    "chem-kap5",
    "Welcher pH-Wert ist sauer?",
    ["7", "8", "9", "5", "14"],
    3,
    "pH < 7 = sauer. pH = 7 = neutral, pH > 7 = basisch. pH 5 ist sauer.",
    "leicht",
    []
  ),
  q(
    "ch-pool-286",
    "chem-kap6",
    "Was ist ein Thiol?",
    ["R−OH", "R−SH", "R−COOH", "R−NH₂", "R−O−R"],
    1,
    "Thiol: −SH (Schwefelanalogon zum Alkohol −OH). R−OH = Alkohol.",
    "leicht",
    []
  ),
  q(
    "ch-pool-287",
    "chem-kap1",
    "Die Elektronenkonfiguration von Kalium (Z=19) endet mit:",
    ["3s¹", "3p¹", "4s¹", "3d¹", "4p¹"],
    2,
    "Kalium: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹. Das 19. Elektron geht in 4s (vor 3d).",
    "mittel",
    []
  ),
  q(
    "ch-pool-288",
    "chem-kap2",
    "Was ist die kritische Temperatur?",
    [
      "Die Siedetemperatur bei 1 bar",
      "Die Temperatur, oberhalb der keine Verflüssigung durch Druck möglich ist",
      "0 °C",
      "Die Schmelztemperatur",
      "Die Raumtemperatur",
    ],
    1,
    "Oberhalb T_c existiert keine flüssige Phase; das Fluid ist überkritisch.",
    "mittel",
    []
  ),
  q(
    "ch-pool-289",
    "chem-kap3",
    "Welche Aussage zu Hydratation ist richtig?",
    [
      "Nur Anionen werden hydratisiert.",
      "Wasser umgibt Ionen (Ion-Dipol-Wechselwirkung).",
      "Hydratation verringert die Löslichkeit.",
      "Es gibt keine Hydratationsenthalpie.",
      "Nur Kationen werden hydratisiert.",
    ],
    1,
    "Hydratation: Wassermoleküle (Dipole) umgeben Ionen (Ion-Dipol). Hydratationsenthalpie begünstigt Löslichkeit.",
    "mittel",
    []
  ),
  q(
    "ch-pool-290",
    "chem-kap4",
    "Die Reaktionsordnung kann bestimmt werden durch:",
    [
      "die Stöchiometrie allein",
      "Experimente (Konzentration vs. Geschwindigkeit)",
      "die Gleichgewichtskonstante",
      "den Katalysator",
      "die Temperatur",
    ],
    1,
    "Reaktionsordnung wird experimentell ermittelt (z. B. wie v von [A] abhängt). Sie muss nicht der Stöchiometrie entsprechen.",
    "mittel",
    []
  ),
  q(
    "ch-pool-291",
    "chem-kap5",
    "Welche Aussage zu H₂SO₄ ist richtig?",
    [
      "H₂SO₄ ist einprotonig.",
      "H₂SO₄ ist zweiprotonig (gibt 2 H⁺ ab).",
      "H₂SO₄ ist eine schwache Säure.",
      "H₂SO₄ enthält kein Sauerstoff.",
      "H₂SO₄ ist keine Oxidsäure.",
    ],
    1,
    "Schwefelsäure H₂SO₄ ist zweiprotonig: H₂SO₄ → H⁺ + HSO₄⁻; HSO₄⁻ → H⁺ + SO₄²⁻ (zweite Stufe schwach).",
    "mittel",
    []
  ),
  q(
    "ch-pool-292",
    "chem-kap6",
    "Welche Verbindung hat eine Dreifachbindung?",
    ["Ethan", "Ethen", "Ethin", "Benzol", "Cyclohexan"],
    2,
    "Ethin C₂H₂ hat C≡C (Dreifachbindung). Ethan: nur Einfachbindungen, Ethen: C=C.",
    "leicht",
    []
  ),
  q(
    "ch-pool-293",
    "chem-kap1",
    "Welches Metall ist ein Erdalkalimetall?",
    ["Natrium", "Kalium", "Magnesium", "Aluminium", "Eisen"],
    2,
    "Erdalkalimetalle = Gruppe 2: Be, Mg, Ca, Sr, Ba, Ra. Natrium und Kalium sind Alkalimetalle.",
    "leicht",
    []
  ),
  q(
    "ch-pool-294",
    "chem-kap2",
    "Die Einheit der Stoffmenge n ist:",
    ["Gramm", "Liter", "Mol", "Teilchen", "Mol/Liter"],
    2,
    "Stoffmenge n in Mol [mol]. 1 mol = 6,022·10²³ Teilchen.",
    "leicht",
    []
  ),
  q(
    "ch-pool-295",
    "chem-kap3",
    "Welche Aussage zu Metallen ist falsch?",
    [
      "Metalle sind gut verformbar.",
      "Metalle leiten elektrischen Strom.",
      "Metalle haben typischerweise hohe Schmelzpunkte.",
      "Metalle bestehen aus neutralen Atomen und delokalisierten Elektronen.",
      "Metalle sind immer flüssig bei 25 °C.",
    ],
    4,
    "Viele Metalle sind bei 25 °C fest (Eisen, Kupfer, Gold). Quecksilber ist bei RT flüssig.",
    "leicht",
    []
  ),
  q(
    "ch-pool-296",
    "chem-kap4",
    "Was beschreibt die Arrhenius-Gleichung?",
    [
      "Das chemische Gleichgewicht",
      "Die Abhängigkeit der Geschwindigkeitskonstante k von der Temperatur",
      "Die Neutralisation",
      "Die Oxidationszahl",
      "Die Löslichkeit",
    ],
    1,
    "Arrhenius: k = A·exp(−E_A/(RT)). k steigt mit T (exponentiell).",
    "mittel",
    []
  ),
  q(
    "ch-pool-297",
    "chem-kap5",
    "Eine Lösung mit pH = 7 bei 25 °C ist:",
    [
      "immer sauer",
      "neutral (wenn [H₃O⁺] = [OH⁻])",
      "immer basisch",
      "ein Puffer",
      "immer eine starke Säure",
    ],
    1,
    "Bei 25 °C: pH = 7 ↔ [H₃O⁺] = [OH⁻] = 10⁻⁷ = neutral. Bei 37 °C ist neutral etwa pH 6,8.",
    "leicht",
    []
  ),
  q(
    "ch-pool-298",
    "chem-kap6",
    "Was ist ein Ammid?",
    ["R−OH", "R−NH₂", "R−CONH₂", "R−CHO", "R−COOH"],
    2,
    "Amid (Amid): R−CONH₂ (Carbonsäurederivat, N gebunden an Carbonyl-C). Amin: R−NH₂.",
    "leicht",
    []
  ),
  q(
    "ch-pool-299",
    "chem-kap1",
    "Die Gruppen des PSE werden von links nach rechts nummeriert:",
    ["1–7", "1–18 (IUPAC)", "nur 0–8", "A und B", "nach Buchstaben"],
    1,
    "IUPAC: Gruppen 1–18. Ältere Notation: römische Ziffern I–VIII mit A/B für Haupt-/Nebengruppen.",
    "leicht",
    []
  ),
  q(
    "ch-pool-300",
    "chem-kap2",
    "Welche Aussage zur Dichteanomalie des Wassers ist richtig?",
    [
      "Wasser hat bei 0 °C die größte Dichte.",
      "Eis ist dichter als flüssiges Wasser.",
      "Wasser hat bei 4 °C die größte Dichte.",
      "Die Dichte von Wasser ist konstant.",
      "Wasser gefriert bei 4 °C.",
    ],
    2,
    "Dichtemaximum bei 4 °C. Eis (0 °C) ist weniger dicht → schwimmt.",
    "leicht",
    []
  ),
];
