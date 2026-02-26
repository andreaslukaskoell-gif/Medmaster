/**
 * Chemie BMS Pool 19 — 60 Fragen im offiziellen MedAT-Stil (Typ A).
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

export const chemiePool19: Question[] = [
  q(
    "ch-pool-19-001",
    KAP[0],
    "Wie viele Elektronen passen maximal in ein Orbital?",
    ["1", "2", "4", "8", "10"],
    1,
    "Pauli: Ein Orbital kann maximal 2 Elektronen mit entgegengesetztem Spin aufnehmen.",
    "leicht",
    ["Orbital", "Pauli"]
  ),
  q(
    "ch-pool-19-002",
    KAP[1],
    "Die Einheit Kelvin (K) gehört zu:",
    ["Druck", "Stoffmenge", "Temperatur", "Volumen", "Masse"],
    2,
    "Kelvin ist die SI-Basiseinheit der Temperatur. 0 K = absoluter Nullpunkt.",
    "leicht",
    ["Kelvin", "Temperatur"]
  ),
  q(
    "ch-pool-19-003",
    KAP[2],
    "Welche Verbindung weist eine metallische Bindung auf?",
    ["Schwefel", "Kochsalz", "Eisen", "Wasser", "Methan"],
    2,
    "Eisen ist ein Metall; metallische Bindung durch delokalisiertes Elektronengas. Die anderen sind nichtmetallisch.",
    "leicht",
    ["Metallbindung", "Eisen"]
  ),
  q(
    "ch-pool-19-004",
    KAP[3],
    "Bei einer Reduktion:",
    [
      "steigt die Oxidationszahl",
      "sinkt die Oxidationszahl",
      "bleibt die Oxidationszahl konstant",
      "wird immer Wasser gebildet",
      "wird immer CO₂ gebildet",
    ],
    1,
    "Reduktion = Aufnahme von Elektronen → Oxidationszahl sinkt. Oxidation → Oxidationszahl steigt.",
    "leicht",
    ["Reduktion", "Oxidationszahl"]
  ),
  q(
    "ch-pool-19-005",
    KAP[4],
    "Eine Lösung mit pOH = 3 hat bei 25 °C den pH:",
    ["3", "11", "7", "−3", "14"],
    1,
    "pH + pOH = 14 → pH = 14 − 3 = 11. Basische Lösung.",
    "leicht",
    ["pH", "pOH"]
  ),
  q(
    "ch-pool-19-006",
    KAP[5],
    "Welche Verbindung ist ein Alkan?",
    ["Ethen", "Ethin", "Methan", "Benzol", "Ethanol"],
    2,
    "Methan CH₄ ist das einfachste Alkan (CₙH₂ₙ₊₂). Ethen/Alkin/Benzol/Ethanol nicht.",
    "leicht",
    ["Alkane", "Methan"]
  ),
  q(
    "ch-pool-19-007",
    KAP[0],
    "Die magnetische Quantenzahl m_l beschreibt:",
    [
      "die Schale",
      "die räumliche Orientierung des Orbitals",
      "den Spin",
      "die Protonenzahl",
      "die Masse",
    ],
    1,
    "m_l gibt die Orientierung des Orbitals im Magnetfeld an (z. B. p_x, p_y, p_z).",
    "mittel",
    ["Quantenzahlen", "m_l"]
  ),
  q(
    "ch-pool-19-008",
    KAP[1],
    "Die Löslichkeit von Kaliumnitrat (KNO₃) in Wasser nimmt mit steigender Temperatur:",
    ["ab", "stark zu", "bleibt konstant", "wird null", "nur bei Druck zu"],
    1,
    "KNO₃ hat positive Lösungsenthalpie; Löslichkeit steigt mit T stark.",
    "leicht",
    ["Löslichkeit", "KNO3"]
  ),
  q(
    "ch-pool-19-009",
    KAP[2],
    "Welche Aussage zu Kohlenstoffdioxid (CO₂) trifft zu?",
    [
      "Es ist polar",
      "Das Molekül ist linear und insgesamt unpolar",
      "Es bildet Wasserstoffbrücken",
      "Es hat eine gewinkelte Form",
      "Es ist ionisch",
    ],
    1,
    "CO₂: O=C=O linear; die beiden C=O-Dipole heben sich auf → kein Gesamtdipol.",
    "mittel",
    ["CO2", "Polarität"]
  ),
  q(
    "ch-pool-19-010",
    KAP[3],
    "Die Reaktionsgeschwindigkeit v wird typischerweise in Einheit angegeben:",
    ["mol", "mol/(L·s) oder mol·L⁻¹·s⁻¹", "nur s", "nur L", "K"],
    1,
    "v = Konzentrationsänderung pro Zeit → mol/(L·s) oder M/s.",
    "mittel",
    ["Reaktionsgeschwindigkeit", "Einheit"]
  ),
  q(
    "ch-pool-19-011",
    KAP[4],
    "Welche Aussage zu Basen nach Arrhenius trifft zu?",
    [
      "Sie liefern H⁺ in Wasser",
      "Sie liefern OH⁻ in Wasser",
      "Sie liefern nur Anionen",
      "Sie sind immer fest",
      "Sie haben immer pH 7",
    ],
    1,
    "Arrhenius-Base: bildet in wässriger Lösung OH⁻. Arrhenius-Säure: bildet H₃O⁺.",
    "leicht",
    ["Arrhenius", "Base"]
  ),
  q(
    "ch-pool-19-012",
    KAP[5],
    "Ein primärer Alkohol hat die OH-Gruppe an einem C-Atom mit:",
    [
      "zwei weiteren C-Atomen",
      "einem weiteren C-Atom",
      "drei weiteren C-Atomen",
      "keinem C-Atom",
      "vier weiteren C-Atomen",
    ],
    1,
    "Primär: C−OH trägt nur ein weiteres C-Atom (endständig). Sekundär: 2, tertiär: 3.",
    "mittel",
    ["Alkohol", "primär"]
  ),
  q(
    "ch-pool-19-013",
    KAP[0],
    "Welches Element hat die Ordnungszahl 29?",
    ["Silber", "Kupfer", "Gold", "Nickel", "Zink"],
    1,
    "Z = 29 = Kupfer (Cu). Ag = 47, Au = 79, Ni = 28, Zn = 30.",
    "leicht",
    ["Kupfer", "Ordnungszahl"]
  ),
  q(
    "ch-pool-19-014",
    KAP[1],
    "Die Wärme Q, die beim Abkühlen eines Körpers abgegeben wird, ist proportional zu:",
    [
      "nur der Masse",
      "Masse und Temperaturdifferenz (Q = m·c·ΔT)",
      "nur der Temperatur",
      "nur dem Volumen",
      "dem Druck",
    ],
    1,
    "Q = m · c · ΔT (c = spezifische Wärmekapazität).",
    "mittel",
    ["Wärme", "Abkühlung"]
  ),
  q(
    "ch-pool-19-015",
    KAP[2],
    "In einem Calciumfluorid (CaF₂) liegen vor:",
    ["Ca- und F-Moleküle", "Ca²⁺- und F⁻-Ionen", "nur kovalente Bindungen", "nur Ca²⁺", "nur F⁻"],
    1,
    "CaF₂: Ionenverbindung aus Ca²⁺ und zwei F⁻ (Fluorit-Struktur).",
    "leicht",
    ["Calciumfluorid", "Ionen"]
  ),
  q(
    "ch-pool-19-016",
    KAP[3],
    "Ein Gleichgewicht liegt vor, wenn:",
    [
      "nur Edukte vorhanden sind",
      "Hin- und Rückreaktion gleich schnell sind",
      "keine Reaktion mehr abläuft",
      "nur Produkte vorhanden sind",
      "der Katalysator fehlt",
    ],
    1,
    "Dynamisches Gleichgewicht: v_hin = v_rück; Konzentrationen konstant.",
    "leicht",
    ["Gleichgewicht"]
  ),
  q(
    "ch-pool-19-017",
    KAP[4],
    "Welche Oxidationszahl hat Chlor in NaCl?",
    ["+1", "0", "−1", "+5", "−5"],
    2,
    "In NaCl: Na⁺ (+1), Cl⁻ (−1). Chlorid hat Oxidationszahl −1.",
    "leicht",
    ["Oxidationszahl", "Chlorid"]
  ),
  q(
    "ch-pool-19-018",
    KAP[5],
    "Die Addition von Brom (Br₂) an ein Alken ergibt:",
    ["Alkan", "Dibromalkan (Vicinaldibromid)", "Alkohol", "Aldehyd", "Ester"],
    1,
    "Alken + Br₂ → 1,2-Dibromalkan (Addition an die Doppelbindung).",
    "mittel",
    ["Bromaddition", "Alken"]
  ),
  q(
    "ch-pool-19-019",
    KAP[0],
    "Die Anzahl der Protonen in einem Atom entspricht bei einem neutralen Atom der Anzahl der:",
    ["Neutronen", "Elektronen", "Kernladung", "Massenzahl", "Orbitale"],
    1,
    "Neutral: Anzahl Elektronen = Anzahl Protonen = Z. Auch: Kernladungszahl = Protonenzahl.",
    "leicht",
    ["neutrales Atom", "Elektronen"]
  ),
  q(
    "ch-pool-19-020",
    KAP[1],
    "Der Partialdruck eines Gases in einem Gemisch ist nach Dalton:",
    [
      "immer gleich dem Gesamtdruck",
      "proportional zum Molenbruch (p_i = x_i · p_ges)",
      "unabhängig von der Stoffmenge",
      "immer null",
      "nur bei 0 °C definiert",
    ],
    1,
    "Dalton: p_i = x_i · p_ges. Partialdruck = Molenbruch · Gesamtdruck.",
    "mittel",
    ["Dalton", "Partialdruck"]
  ),
  q(
    "ch-pool-19-021",
    KAP[2],
    "Welche Bindung ist in einem SiO₂-Netzwerk (Quarz) vorherrschend?",
    [
      "ionisch",
      "kovalent (Riesenmolekül)",
      "metallisch",
      "nur van-der-Waals",
      "Wasserstoffbrücken",
    ],
    1,
    "Quarz: Riesenmolekül aus Si und O mit kovalenten Si−O-Bindungen (SiO₄-Tetraeder vernetzt).",
    "mittel",
    ["Quarz", "Silicate"]
  ),
  q(
    "ch-pool-19-022",
    KAP[3],
    "Die Gleichgewichtskonstante K hat die Einheit:",
    [
      "immer keine (dimensionslos)",
      "kann dimensionslos sein oder von der Stöchiometrie abhängen",
      "immer mol/L",
      "immer bar",
      "immer J",
    ],
    1,
    "K kann dimensionslos sein (bei gleicher Molzahl links/rechts) oder Einheiten haben (z. B. mol⁻¹·L).",
    "mittel",
    ["Gleichgewichtskonstante", "Einheit"]
  ),
  q(
    "ch-pool-19-023",
    KAP[4],
    "Welche Säure ist einbasig?",
    ["H₂SO₄", "H₃PO₄", "HCl", "H₂CO₃", "H₃PO₃"],
    2,
    "HCl gibt nur ein Proton ab → einbasig. H₂SO₄, H₃PO₄, H₂CO₃ sind mehrbasig.",
    "leicht",
    ["einbasig", "HCl"]
  ),
  q(
    "ch-pool-19-024",
    KAP[5],
    "Ein Aldehyd kann zu einer Carbonsäure oxidiert werden mit:",
    [
      "nur Reduktionsmitteln",
      "Oxidationsmitteln (z. B. KMnO₄, Tollens)",
      "nur Hitze",
      "nur Druck",
      "nur Katalysator ohne O₂",
    ],
    1,
    "Aldehyde werden zu Carbonsäuren oxidiert (z. B. KMnO₄, Tollens, Kaliumdichromat).",
    "mittel",
    ["Aldehyd", "Oxidation"]
  ),
  q(
    "ch-pool-19-025",
    KAP[0],
    "Welche Hauptgruppe enthält die Halogene?",
    ["Gruppe 1", "Gruppe 2", "Gruppe 16", "Gruppe 17", "Gruppe 18"],
    3,
    "Halogene: F, Cl, Br, I, At – Gruppe 17 (7 Valenzelektronen).",
    "leicht",
    ["Halogene", "Periodensystem"]
  ),
  q(
    "ch-pool-19-026",
    KAP[1],
    "Die Siedetemperatur von Ethanol im Vergleich zu Dimethylether (gleiche Summenformel C₂H₆O) ist höher, weil:",
    [
      "Ethanol schwerer ist",
      "Ethanol Wasserstoffbrücken ausbildet",
      "Dimethylether polarer ist",
      "Ethanol kleiner ist",
      "Dimethylether Ionen hat",
    ],
    1,
    "Ethanol (CH₃CH₂OH) hat O−H → Wasserstoffbrücken. Dimethylether (CH₃OCH₃) nicht → niedrigerer Siedepunkt.",
    "mittel",
    ["Wasserstoffbrücken", "Siedepunkt"]
  ),
  q(
    "ch-pool-19-027",
    KAP[2],
    "Welche Aussage zu Molekülorbitalen trifft zu?",
    [
      "Es gibt nur Atomorbitale",
      "Bindende und antibindende MOs entstehen aus der Überlappung von AOs",
      "Es gibt keine π-Orbitale",
      "MO-Theorie gilt nur für Ionen",
      "Alle MOs sind bindend",
    ],
    1,
    "MO-Theorie: Atomorbitale überlappen zu bindenden und antibindenden Molekülorbitalen.",
    "mittel",
    ["Molekülorbital"]
  ),
  q(
    "ch-pool-19-028",
    KAP[3],
    "Ein Katalysator erhöht die Geschwindigkeit der Hinreaktion und:",
    [
      "nur der Hinreaktion",
      "der Rückreaktion in gleichem Maße (K unverändert)",
      "nicht der Rückreaktion",
      "nur bei hoher Temperatur",
      "nur in der Gasphase",
    ],
    1,
    "Katalysator beschleunigt Hin- und Rückreaktion gleichermaßen → K und Gleichgewichtslage unverändert.",
    "mittel",
    ["Katalysator", "Gleichgewicht"]
  ),
  q(
    "ch-pool-19-029",
    KAP[4],
    "Welches Metall bildet mit verdünnter Säure Wasserstoff?",
    ["Kupfer", "Quecksilber", "Zink", "Silber", "Gold"],
    2,
    "Zink steht über Wasserstoff in der Spannungsreihe → reagiert mit Säure zu H₂. Cu, Hg, Ag, Au nicht.",
    "leicht",
    ["Spannungsreihe", "Zink"]
  ),
  q(
    "ch-pool-19-030",
    KAP[5],
    "Die funktionelle Gruppe −COO− (Sauerstoff zwischen C=O und C) findet sich in:",
    ["Alkoholen", "Estern und Carbonsäureanhydriden", "Aldehyden", "Aminen", "Alkanen"],
    1,
    "Ester: R−COO−R'. Anhydrid: R−CO−O−CO−R. Beide haben −COO−.",
    "mittel",
    ["Ester", "Anhydrid"]
  ),
  q(
    "ch-pool-19-031",
    KAP[0],
    "Die 2. Ionisierungsenergie eines Elements ist:",
    [
      "immer kleiner als die 1.",
      "die Energie zur Abtrennung eines weiteren Elektrons aus dem einfach positiv geladenen Ion",
      "gleich der 1. Ionisierungsenergie",
      "nur bei Edelgasen definiert",
      "immer null",
    ],
    1,
    "2. Ionisierungsenergie: M⁺ → M²⁺ + e⁻. Oft höher als die 1., da das Ion stabiler ist.",
    "mittel",
    ["Ionisierungsenergie"]
  ),
  q(
    "ch-pool-19-032",
    KAP[1],
    "Die Dichte von Wasser bei 4 °C beträgt etwa:",
    ["0,5 g/cm³", "1 g/cm³", "1,5 g/cm³", "2 g/cm³", "0,9 g/cm³"],
    1,
    "Wasser hat bei 4 °C Dichtemaximum ≈ 1 g/cm³ (1000 kg/m³).",
    "leicht",
    ["Dichte", "Wasser"]
  ),
  q(
    "ch-pool-19-033",
    KAP[2],
    "Welche Verbindung ist ein polares Molekül?",
    ["CCl₄", "CH₄", "NH₃", "CO₂", "BF₃"],
    2,
    "NH₃ ist gewinkelt (pyramidal) und hat N−H-Bindungen → Gesamtdipol. CCl₄, CH₄, CO₂, BF₃ symmetrisch unpolar.",
    "mittel",
    ["polares Molekül", "Ammoniak"]
  ),
  q(
    "ch-pool-19-034",
    KAP[3],
    "Die Aktivierungsenergie kann herabgesetzt werden durch:",
    [
      "nur Verdünnung",
      "einen Katalysator",
      "nur Abkühlung",
      "nur Druckerniedrigung",
      "Entfernen von Edukten",
    ],
    1,
    "Katalysator bietet einen anderen Reaktionsweg mit niedrigerer Aktivierungsenergie.",
    "leicht",
    ["Aktivierungsenergie", "Katalysator"]
  ),
  q(
    "ch-pool-19-035",
    KAP[4],
    "Welches Salz entsteht bei der Neutralisation von Schwefelsäure mit Natronlauge (2 NaOH)?",
    ["NaHSO₄", "Na₂SO₄", "NaSO₄", "Na₂S", "H₂O nur"],
    1,
    "H₂SO₄ + 2 NaOH → Na₂SO₄ + 2 H₂O. Natriumsulfat.",
    "leicht",
    ["Neutralisation", "Natriumsulfat"]
  ),
  q(
    "ch-pool-19-036",
    KAP[5],
    "Ein tertiärer Alkohol wird oxidiert zu:",
    ["Aldehyd", "Keton", "Carbonsäure", "Alkan", "Alken"],
    1,
    "Tertiärer Alkohol hat kein H am C−OH; unter oxidativem Abbau (C−C-Spaltung) kann ein Keton entstehen. Nicht zu Aldehyd/Carbonsäure.",
    "mittel",
    ["tertiärer Alkohol", "Oxidation"]
  ),
  q(
    "ch-pool-19-037",
    KAP[0],
    "Das Elementsymbol Au steht für:",
    ["Aluminium", "Silber", "Gold", "Argon", "Arsen"],
    2,
    "Au = Aurum = Gold. Ag = Silber, Al = Aluminium.",
    "leicht",
    ["Elementsymbol", "Gold"]
  ),
  q(
    "ch-pool-19-038",
    KAP[1],
    "Die Verdampfungsenthalpie ΔH_vap ist typischerweise:",
    [
      "negativ",
      "positiv (Energie muss zugeführt werden)",
      "null",
      "kleiner als die Schmelzenthalpie",
      "unabhängig von der Substanz",
    ],
    1,
    "Verdampfen erfordert Energiezufuhr (Überwindung zwischenmolekularer Kräfte) → ΔH_vap > 0.",
    "mittel",
    ["Verdampfungsenthalpie"]
  ),
  q(
    "ch-pool-19-039",
    KAP[2],
    "Welche Bindung ist in einem O₂-Molekül vorhanden?",
    ["Einfachbindung", "Doppelbindung", "Dreifachbindung", "Ionenbindung", "Metallbindung"],
    1,
    "Sauerstoff: O=O (Doppelbindung). Zwei Elektronenpaare zwischen den Atomen.",
    "leicht",
    ["Sauerstoff", "Doppelbindung"]
  ),
  q(
    "ch-pool-19-040",
    KAP[3],
    "Bei einer Reaktion zweiter Ordnung gilt:",
    [
      "v = k",
      "v = k·[A]² oder v = k·[A][B]",
      "v = k/[A]",
      "v ist unabhängig von der Konzentration",
      "v = k·T",
    ],
    1,
    "Reaktion 2. Ordnung: v = k·[A]² oder v = k·[A][B]. Geschwindigkeit proportional zum Quadrat einer Konzentration oder zum Produkt zweier.",
    "mittel",
    ["Reaktionsordnung"]
  ),
  q(
    "ch-pool-19-041",
    KAP[4],
    "Welche Oxidationszahl hat Sauerstoff in H₂O₂ (Wasserstoffperoxid)?",
    ["−2", "−1", "0", "+1", "+2"],
    1,
    "In Peroxiden hat Sauerstoff die Oxidationszahl −1 (O−O-Bindung). In H₂O: −2.",
    "mittel",
    ["Oxidationszahl", "Peroxid"]
  ),
  q(
    "ch-pool-19-042",
    KAP[5],
    "Ein Carbonat hat die Form:",
    ["−COOH", "−CO₃²⁻ bzw. CO₃²⁻", "−OH", "−CHO", "−NH₂"],
    1,
    "Carbonat: CO₃²⁻. Entsteht aus Kohlensäure H₂CO₃ nach Abgabe von 2 Protonen.",
    "leicht",
    ["Carbonat"]
  ),
  q(
    "ch-pool-19-043",
    KAP[0],
    "Wie viele Valenzelektronen hat Chlor?",
    ["5", "6", "7", "8", "17"],
    2,
    "Chlor (Gruppe 17) hat 7 Valenzelektronen.",
    "leicht",
    ["Chlor", "Valenzelektronen"]
  ),
  q(
    "ch-pool-19-044",
    KAP[1],
    "Die Gesamtenergie eines abgeschlossenen Systems bleibt konstant (Energieerhaltung). Das ist der:",
    [
      "2. Hauptsatz der Thermodynamik",
      "1. Hauptsatz der Thermodynamik",
      "0. Hauptsatz",
      "3. Hauptsatz",
      "Hesssche Satz",
    ],
    1,
    "1. Hauptsatz: ΔU = Q + W (Energieerhaltung). 2. Hauptsatz: Entropie, Richtung von Prozessen.",
    "mittel",
    ["1. Hauptsatz", "Thermodynamik"]
  ),
  q(
    "ch-pool-19-045",
    KAP[2],
    "Welche Aussage zu Hydriden trifft zu?",
    [
      "Wasserstoff hat immer Oxidationszahl +1",
      "In Metallhydriden (z. B. NaH) hat Wasserstoff die Oxidationszahl −1",
      "Es gibt keine Ionenhydride",
      "Hydride sind immer kovalent",
      "Wasserstoff kann nicht als Anion vorkommen",
    ],
    1,
    "In NaH: Na⁺ H⁻. Wasserstoff als Hydridion hat Oxidationszahl −1.",
    "mittel",
    ["Hydrid", "Oxidationszahl"]
  ),
  q(
    "ch-pool-19-046",
    KAP[3],
    "Die Reaktionswärme bei konstantem Volumen entspricht:",
    [
      "ΔH",
      "ΔU (innere Energie)",
      "nur der Entropie",
      "der Aktivierungsenergie",
      "der Gleichgewichtskonstante",
    ],
    1,
    "Bei konstantem Volumen: Q_V = ΔU. Bei konstantem Druck: Q_p = ΔH.",
    "mittel",
    ["innere Energie", "Reaktionswärme"]
  ),
  q(
    "ch-pool-19-047",
    KAP[4],
    "Welche Base ist eine Lewis-Base?",
    ["BF₃", "NH₃", "H⁺", "AlCl₃", "SO₃"],
    1,
    "Lewis-Base = Elektronenpaardonor (z. B. NH₃). Lewis-Säure = Akzeptor (BF₃, H⁺, AlCl₃).",
    "mittel",
    ["Lewis-Base", "Ammoniak"]
  ),
  q(
    "ch-pool-19-048",
    KAP[5],
    "Die Kettenreaktion bei der radikalischen Substitution von Alkanen mit Chlor verläuft über:",
    [
      "nur Start",
      "Start, Kettenfortpflanzung, Abbruch",
      "nur Abbruch",
      "nur Gleichgewicht",
      "keine Radikale",
    ],
    1,
    "Radikalische Substitution: Start (Cl₂ → 2 Cl·), Propagation (Cl· + RH → HCl + R·; R· + Cl₂ → RCl + Cl·), Termination (R· + R· → R−R etc.).",
    "mittel",
    ["radikalische Substitution", "Kettenreaktion"]
  ),
  q(
    "ch-pool-19-049",
    KAP[0],
    "Die N-Schale entspricht der Hauptquantenzahl:",
    ["1", "2", "3", "4", "5"],
    3,
    "K: n=1, L: n=2, M: n=3, N: n=4.",
    "leicht",
    ["Schale", "Hauptquantenzahl"]
  ),
  q(
    "ch-pool-19-050",
    KAP[1],
    "Die ideale Gasgleichung gilt in guter Näherung bei:",
    [
      "hohem Druck, tiefer Temperatur",
      "niedrigem Druck, hoher Temperatur",
      "immer",
      "nur für Flüssigkeiten",
      "nur für Feststoffe",
    ],
    1,
    "Reale Gase weichen bei hohem p und niedrigem T ab (Eigenvolumen, Wechselwirkungen).",
    "mittel",
    ["ideales Gas"]
  ),
  q(
    "ch-pool-19-051",
    KAP[2],
    "In einem MgCl₂-Kristall liegen vor:",
    [
      "Mg- und Cl-Atome kovalent",
      "Mg²⁺- und Cl⁻-Ionen",
      "Mg- und Cl₂-Moleküle",
      "nur Mg²⁺",
      "nur Cl⁻",
    ],
    1,
    "MgCl₂: Ionenverbindung aus Mg²⁺ und 2 Cl⁻.",
    "leicht",
    ["MgCl2", "Ionen"]
  ),
  q(
    "ch-pool-19-052",
    KAP[3],
    "Ein Gleichgewicht A ⇌ B mit K > 1 bedeutet:",
    [
      "bei Gleichgewicht überwiegt A",
      "bei Gleichgewicht überwiegt B",
      "es gibt kein Gleichgewicht",
      "K ist immer 1",
      "die Reaktion läuft nicht ab",
    ],
    1,
    "K = [B]/[A]. K > 1 → [B] > [A] → Produkt B überwiegt.",
    "mittel",
    ["Gleichgewichtskonstante"]
  ),
  q(
    "ch-pool-19-053",
    KAP[4],
    "Welche Oxidationszahl hat Chrom in Cr₂O₇²⁻?",
    ["+2", "+4", "+6", "+7", "−2"],
    2,
    "Cr₂O₇²⁻: O jeweils −2, Summe −2. 2·Cr + 7·(−2) = −2 → 2Cr = 12 → Cr = +6.",
    "mittel",
    ["Oxidationszahl", "Dichromat"]
  ),
  q(
    "ch-pool-19-054",
    KAP[5],
    "Ein Acetal entsteht aus:",
    [
      "Alkan und Alken",
      "Aldehyd/Keton + Alkohol (unter Säurekatalyse)",
      "zwei Carbonsäuren",
      "Amin und Ester",
      "Alkohol und Base",
    ],
    1,
    "Acetal: R₂C(OR')₂ aus Aldehyd/Keton + 2 Äquivalente Alkohol (Säurekatalyse).",
    "schwer",
    ["Acetal"]
  ),
  q(
    "ch-pool-19-055",
    KAP[0],
    "Welches Element hat die geringste Ionisierungsenergie in einer Periode (typisch)?",
    ["Edelgas", "Halogen", "Alkalimetall", "Chalkogen", "Erdalkalimetall"],
    2,
    "Alkalimetalle (1. Hauptgruppe) haben die niedrigste Ionisierungsenergie in der Periode (ein Valenzelektron leicht abzugeben).",
    "mittel",
    ["Ionisierungsenergie", "Alkalimetall"]
  ),
  q(
    "ch-pool-19-056",
    KAP[1],
    "Die Schmelzenthalpie ist:",
    [
      "die beim Schmelzen aufgenommene Energie",
      "die beim Erstarren freigesetzte Energie",
      "immer null",
      "die Verdampfungsenthalpie",
      "nur bei 0 °C definiert",
    ],
    0,
    "Beim Schmelzen wird Energie aufgenommen (ΔH_schmelz > 0). Beim Erstarren wird sie freigesetzt.",
    "mittel",
    ["Schmelzenthalpie"]
  ),
  q(
    "ch-pool-19-057",
    KAP[2],
    "Welche Aussage zu Benzol trifft zu?",
    [
      "Alle C−C-Bindungen sind unterschiedlich lang",
      "Alle C−C-Bindungen sind gleich lang (zwischen Einfach- und Doppelbindung)",
      "Es gibt keine π-Elektronen",
      "Es ist ein Alken",
      "Es hat keine Resonanz",
    ],
    1,
    "Benzol: 6 π-Elektronen, alle C−C-Bindungen gleich (Resonanz zwischen zwei Kekulé-Strukturen).",
    "mittel",
    ["Benzol", "Resonanz"]
  ),
  q(
    "ch-pool-19-058",
    KAP[3],
    "Die Konzentration eines Edukts in einer Reaktion erster Ordnung nimmt ab:",
    [
      "linear mit der Zeit",
      "exponentiell mit der Zeit",
      "quadratisch mit der Zeit",
      "gar nicht",
      "nur bei Katalysator",
    ],
    1,
    "[A] = [A]_0 · exp(−kt). Exponentieller Abfall.",
    "mittel",
    ["Reaktion 1. Ordnung"]
  ),
  q(
    "ch-pool-19-059",
    KAP[4],
    "Welches Element gehört zu den Chalkogenen?",
    ["Stickstoff", "Sauerstoff", "Chlor", "Fluor", "Helium"],
    1,
    "Chalkogene: Gruppe 16 – O, S, Se, Te, Po.",
    "leicht",
    ["Chalkogene", "Sauerstoff"]
  ),
  q(
    "ch-pool-19-060",
    KAP[5],
    "Die Umesterung ist:",
    [
      "die Bildung eines Esters aus Alkohol und Säure",
      "der Austausch des Alkoholrests in einem Ester (Ester + Alkohol ⇌ anderer Ester)",
      "die Oxidation eines Alkohols",
      "die Addition an ein Alken",
      "die Verseifung",
    ],
    1,
    "Umesterung: R−COO−R' + R''OH ⇌ R−COO−R'' + R'OH (Katalyse durch Säure oder Base).",
    "mittel",
    ["Umesterung", "Ester"]
  ),
];
