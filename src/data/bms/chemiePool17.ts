/**
 * Chemie BMS Pool 17 — 60 Fragen im offiziellen MedAT-Stil (Typ A).
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

export const chemiePool17: Question[] = [
  q(
    "ch-pool-17-001",
    KAP[0],
    "Welche Ladung hat ein Proton?",
    ["neutral", "positiv", "negativ", "doppelt positiv", "variabel"],
    1,
    "Proton: positive Elementarladung (+e). Neutron: neutral. Elektron: negativ (−e).",
    "leicht",
    ["Proton", "Ladung"]
  ),
  q(
    "ch-pool-17-002",
    KAP[1],
    "Die Einheit Pascal (Pa) gehört zu:",
    ["Stoffmenge", "Druck", "Temperatur", "Volumen", "Masse"],
    1,
    "Pascal (Pa) = N/m² = Einheit des Drucks im SI-System.",
    "leicht",
    ["Pascal", "Druck"]
  ),
  q(
    "ch-pool-17-003",
    KAP[2],
    "Welche Verbindung hat die geringste Schmelztemperatur unter NaCl, MgO, SiC, H₂O (Eis), Diamant?",
    ["NaCl", "MgO", "SiC", "H₂O (Eis)", "Diamant"],
    3,
    "Eis schmilzt bei 0 °C. Ionen- und Riesenmolekül-Gitter (NaCl, MgO, SiC, Diamant) haben hohe Schmelzpunkte.",
    "mittel",
    ["Schmelzpunkt", "Vergleich"]
  ),
  q(
    "ch-pool-17-004",
    KAP[3],
    "Ein Oxidationsmittel:",
    [
      "wird oxidiert",
      "wird reduziert",
      "bleibt unverändert",
      "wird neutralisiert",
      "wird zersetzt",
    ],
    1,
    "Oxidationsmittel nimmt Elektronen auf und wird dabei reduziert.",
    "mittel",
    ["Oxidationsmittel", "Redox"]
  ),
  q(
    "ch-pool-17-005",
    KAP[4],
    "Was ist der pH-Wert einer Lösung mit [H₃O⁺] = 10⁻⁵ mol/L?",
    ["5", "−5", "9", "14", "7"],
    0,
    "pH = −log₁₀(10⁻⁵) = 5. Die Lösung ist sauer.",
    "leicht",
    ["pH", "Berechnung"]
  ),
  q(
    "ch-pool-17-006",
    KAP[5],
    "Welche Summenformel hat Ethen?",
    ["C₂H₂", "C₂H₄", "C₂H₆", "C₂H₅OH", "C₂H₄O₂"],
    1,
    "Ethen (Ethylen): C₂H₄, eine C=C-Doppelbindung. Ethin = C₂H₂, Ethan = C₂H₆.",
    "leicht",
    ["Ethen", "Summenformel"]
  ),
  q(
    "ch-pool-17-007",
    KAP[0],
    "Die Spinquantenzahl s eines Elektrons kann die Werte annehmen:",
    ["nur +1", "nur −1", "+1/2 oder −1/2", "0 oder 1", "nur 0"],
    2,
    "Spin s = +1/2 oder −1/2 („up“ oder „down“). Zwei Elektronen in einem Orbital haben entgegengesetzten Spin (Pauli).",
    "mittel",
    ["Spin", "Quantenzahlen"]
  ),
  q(
    "ch-pool-17-008",
    KAP[1],
    "Bei isochorer Erwärmung eines idealen Gases:",
    [
      "bleibt der Druck konstant",
      "steigt der Druck (Gay-Lussac)",
      "sinkt das Volumen",
      "bleibt die Temperatur konstant",
      "sinkt der Druck",
    ],
    1,
    "Isochor (V const): Nach Gay-Lussac steigt bei Erwärmung der Druck (p ∝ T).",
    "mittel",
    ["Gay-Lussac", "isochor"]
  ),
  q(
    "ch-pool-17-009",
    KAP[2],
    "Welche Aussage zu Ionenverbindungen trifft zu?",
    [
      "Sie bestehen aus neutralen Molekülen",
      "Sie bestehen aus Kationen und Anionen im Gitter",
      "Sie haben immer niedrige Schmelzpunkte",
      "Sie leiten im Festkörper gut",
      "Sie sind immer flüssig",
    ],
    1,
    "Ionenverbindung: regelmäßiges Gitter aus positiv und negativ geladenen Ionen; hoher Schmelzpunkt, Leitfähigkeit in Schmelze/Lösung.",
    "leicht",
    ["Ionenverbindung"]
  ),
  q(
    "ch-pool-17-010",
    KAP[3],
    "Die Neutralisation von Säure und Base ist eine:",
    [
      "Redoxreaktion",
      "Protonenübertragung (Säure-Base-Reaktion)",
      "Substitution",
      "Addition",
      "Zersetzung",
    ],
    1,
    "Neutralisation: Säure gibt Proton an Base ab → Salz + Wasser (Brønsted).",
    "leicht",
    ["Neutralisation", "Säure-Base"]
  ),
  q(
    "ch-pool-17-011",
    KAP[4],
    "Welches Anion bildet sich aus Phosphorsäure (H₃PO₄) nach Abgabe von drei Protonen?",
    ["H₂PO₄⁻", "HPO₄²⁻", "PO₄³⁻", "P³⁻", "PO₃³⁻"],
    2,
    "H₃PO₄ → H₂PO₄⁻ → HPO₄²⁻ → PO₄³⁻. Phosphat ist PO₄³⁻.",
    "mittel",
    ["Phosphorsäure", "Phosphat"]
  ),
  q(
    "ch-pool-17-012",
    KAP[5],
    "Ein Carbonsäureanion (Carboxylat) hat die Form:",
    ["−COOH", "−COO⁻", "−OH", "−CHO", "−CO−"],
    1,
    "Carbonsäure deprotoniert: −COOH → −COO⁻ (Carboxylat).",
    "mittel",
    ["Carbonsäure", "Carboxylat"]
  ),
  q(
    "ch-pool-17-013",
    KAP[0],
    "Wie viele Valenzelektronen hat Sauerstoff?",
    ["4", "5", "6", "7", "8"],
    2,
    "Sauerstoff steht in Gruppe 16 → 6 Valenzelektronen.",
    "leicht",
    ["Sauerstoff", "Valenzelektronen"]
  ),
  q(
    "ch-pool-17-014",
    KAP[1],
    "Die Raoult-Gesetz Abweichung bei Mischungen kann auf:",
    [
      "ideales Verhalten",
      "Wechselwirkungen zwischen den Komponenten",
      "nur gleiche Siedepunkte",
      "nur feste Stoffe",
      "nur Gase",
    ],
    1,
    "Abweichungen vom Raoult-Gesetz (p = x·p°) entstehen durch Wechselwirkungen (z. B. Wasserstoffbrücken, Mischungswärme).",
    "mittel",
    ["Raoult", "Mischung"]
  ),
  q(
    "ch-pool-17-015",
    KAP[2],
    "Welche Bindung ist in einem N₂-Molekül vorhanden?",
    ["Einfachbindung", "Doppelbindung", "Dreifachbindung", "Ionenbindung", "Metallbindung"],
    2,
    "Stickstoff hat 5 Valenzelektronen; in N₂ werden 3 Paare geteilt → N≡N (Dreifachbindung).",
    "leicht",
    ["Stickstoff", "Dreifachbindung"]
  ),
  q(
    "ch-pool-17-016",
    KAP[3],
    "Bei einer Gleichgewichtsreaktion mit ΔH > 0 (endotherm) begünstigt Temperaturerhöhung:",
    [
      "die Rückreaktion",
      "die Hinreaktion",
      "weder noch",
      "nur den Katalysator",
      "nur bei Druckänderung",
    ],
    1,
    "Endotherm: Wärme ist „Edukt“. Temperaturerhöhung verschiebt das Gleichgewicht auf die Produktseite (van't Hoff).",
    "mittel",
    ["Le Chatelier", "endotherm"]
  ),
  q(
    "ch-pool-17-017",
    KAP[4],
    "Welche Säure ist eine schwache Säure?",
    ["HCl", "HBr", "Flusssäure (HF)", "HNO₃", "HClO₄"],
    2,
    "HF ist eine schwache Säure (nur teilweise dissoziiert). HCl, HBr, HNO₃, HClO₄ sind starke Säuren.",
    "mittel",
    ["schwache Säure", "HF"]
  ),
  q(
    "ch-pool-17-018",
    KAP[5],
    "Welche Verbindung ergibt mit Kaliumpermanganat (alkalisch) einen Nachweis für Doppelbindung?",
    ["Ethan", "Ethen", "Ethin", "Benzol (ohne Katalysator)", "Methan"],
    1,
    "Alkene (und Alkine) entfärben KMnO₄ (Baeyer-Probe); Bildung von Diol bzw. Spaltprodukte. Alkane nicht.",
    "mittel",
    ["Baeyer", "Alkene"]
  ),
  q(
    "ch-pool-17-019",
    KAP[0],
    "Die Elektronenkonfiguration von Argon (Z=18) endet mit:",
    ["3s² 3p⁴", "3s² 3p⁵", "3s² 3p⁶", "3s² 3d¹", "4s²"],
    2,
    "Argon: 18 Elektronen → 1s² 2s² 2p⁶ 3s² 3p⁶ (Edelgaskonfiguration).",
    "mittel",
    ["Argon", "Elektronenkonfiguration"]
  ),
  q(
    "ch-pool-17-020",
    KAP[1],
    "Die Löslichkeit von Kochsalz in Wasser nimmt mit steigender Temperatur:",
    ["ab", "zu", "bleibt konstant", "wird null", "nur bei Druckänderung zu"],
    1,
    "NaCl und viele Salze lösen sich mit steigender Temperatur besser (positive Lösungsenthalpie).",
    "leicht",
    ["Löslichkeit", "NaCl"]
  ),
  q(
    "ch-pool-17-021",
    KAP[2],
    "Welche Aussage zu Wasserstoffbrücken trifft zu?",
    [
      "Sie sind kovalente Bindungen",
      "Sie sind zwischenmolekulare Kräfte",
      "Sie kommen nur in Ionen vor",
      "Sie sind stärker als C−C-Bindungen",
      "Sie treten nur zwischen C und H auf",
    ],
    1,
    "Wasserstoffbrücken sind zwischenmolekulare Kräfte (nicht kovalent gebunden), typisch für O−H···O, N−H···N.",
    "mittel",
    ["Wasserstoffbrücken"]
  ),
  q(
    "ch-pool-17-022",
    KAP[3],
    "Die Stöchiometrie einer Reaktion beschreibt:",
    [
      "die Reaktionsgeschwindigkeit",
      "die molaren Verhältnisse der Edukte und Produkte",
      "nur die Aktivierungsenergie",
      "nur die Gleichgewichtslage",
      "nur die Katalyse",
    ],
    1,
    "Stöchiometrie: quantitative Beziehung zwischen den Stoffmengen (Koeffizienten in der Reaktionsgleichung).",
    "leicht",
    ["Stöchiometrie"]
  ),
  q(
    "ch-pool-17-023",
    KAP[4],
    "Welche Oxidationszahl hat Kupfer in CuSO₄?",
    ["0", "+1", "+2", "+3", "−2"],
    2,
    "CuSO₄: SO₄²⁻, Cu²⁺. Kupfer(II)-sulfat. Cu hat +2.",
    "leicht",
    ["Oxidationszahl", "Kupfer"]
  ),
  q(
    "ch-pool-17-024",
    KAP[5],
    "Ein Keton entsteht durch Oxidation von:",
    ["Alkan", "primärem Alkohol", "sekundärem Alkohol", "tertiärem Alkohol", "Ether"],
    2,
    "Sekundärer Alkohol → Oxidation → Keton. Primärer Alkohol → Aldehyd/Carbonsäure.",
    "mittel",
    ["Keton", "Oxidation"]
  ),
  q(
    "ch-pool-17-025",
    KAP[0],
    "Welche Hauptgruppe enthält Kohlenstoff?",
    ["Gruppe 2", "Gruppe 4", "Gruppe 14", "Gruppe 16", "Gruppe 18"],
    2,
    "Kohlenstoff (C) steht in Gruppe 14 (4. Hauptgruppe), 4 Valenzelektronen.",
    "leicht",
    ["Kohlenstoff", "Periodensystem"]
  ),
  q(
    "ch-pool-17-026",
    KAP[1],
    "Die Verdampfungsenthalpie wird beim Kondensieren:",
    ["aufgenommen", "freigesetzt", "nicht umgesetzt", "nur bei 0 °C umgesetzt", "verdoppelt"],
    1,
    "Kondensation ist die Umkehrung der Verdampfung; die Verdampfungsenthalpie wird als Kondensationswärme freigesetzt.",
    "mittel",
    ["Verdampfung", "Kondensation"]
  ),
  q(
    "ch-pool-17-027",
    KAP[2],
    "Welche Aussage zu Kohlenstoff-Molekülen trifft zu?",
    [
      "Diamant leitet elektrischen Strom",
      "Graphit leitet in der Schichtebene",
      "Beide sind gleich aufgebaut",
      "Beide sind molekular",
      "Graphit hat nur σ-Bindungen",
    ],
    1,
    "Graphit: π-Elektronen delokalisiert in den Schichten → Leitfähigkeit in der Ebene. Diamant: Isolator.",
    "mittel",
    ["Graphit", "Diamant"]
  ),
  q(
    "ch-pool-17-028",
    KAP[3],
    "Ein homogenes Gleichgewicht liegt vor, wenn:",
    [
      "alle Reaktanden in derselben Phase sind",
      "Reaktanden in verschiedenen Phasen sind",
      "kein Gleichgewicht existiert",
      "nur Feststoffe vorliegen",
      "nur Gase vorliegen",
    ],
    0,
    "Homogen: alle Edukte und Produkte in derselben Phase (z. B. nur gasförmig oder nur in Lösung).",
    "mittel",
    ["Gleichgewicht", "homogen"]
  ),
  q(
    "ch-pool-17-029",
    KAP[4],
    "Welches Salz ist in Wasser schwer löslich?",
    ["NaCl", "KNO₃", "AgCl", "MgSO₄", "Na₂SO₄"],
    2,
    "Silberchlorid (AgCl) ist schwer löslich (fällt als Niederschlag aus). Die anderen sind gut löslich.",
    "mittel",
    ["Löslichkeit", "AgCl"]
  ),
  q(
    "ch-pool-17-030",
    KAP[5],
    "Die funktionelle Gruppe eines Aldehyds ist:",
    ["−OH", "−COOH", "−CHO", "−CO−", "−NH₂"],
    2,
    "Aldehyd: −CHO (Carbonyl am Ende der Kette). Keton: −CO− in der Kette.",
    "leicht",
    ["Aldehyd", "funktionelle Gruppe"]
  ),
  q(
    "ch-pool-17-031",
    KAP[0],
    "Ein Atom mit 17 Protonen ist:",
    ["Schwefel", "Chlor", "Argon", "Phosphor", "Silicium"],
    1,
    "Ordnungszahl 17 = Chlor (Cl).",
    "leicht",
    ["Chlor", "Ordnungszahl"]
  ),
  q(
    "ch-pool-17-032",
    KAP[1],
    "Die Wärmekapazität C gibt an:",
    [
      "wie viel Wärme pro Temperaturänderung aufgenommen/abgegeben wird",
      "nur die Masse",
      "nur die Temperatur",
      "nur den Druck",
      "das Volumen",
    ],
    0,
    "C = Q/ΔT (Wärme pro Temperaturänderung). Spezifische Wärmekapazität: c = C/m.",
    "mittel",
    ["Wärmekapazität"]
  ),
  q(
    "ch-pool-17-033",
    KAP[2],
    "Welche Elektronegativitätsdifferenz deutet auf eine weitgehend unpolare Bindung hin?",
    ["> 2", "≈ 0 bis klein", "genau 1", "immer 1,7", "> 3"],
    1,
    "Ähnliche Elektronegativität (ΔEN ≈ 0) → unpolare Bindung (z. B. C−H, C−C). Große ΔEN → polar/ionisch.",
    "mittel",
    ["Elektronegativität", "polare Bindung"]
  ),
  q(
    "ch-pool-17-034",
    KAP[3],
    "Die Reaktionsordnung kann sein:",
    ["nur 0", "nur 1", "nur 2", "0, 1, 2 oder gebrochen", "nur ganzzahlig positiv"],
    3,
    "Reaktionsordnung wird aus dem Experiment bestimmt; kann 0, 1, 2 oder gebrochen (z. B. 1/2) sein.",
    "mittel",
    ["Reaktionsordnung"]
  ),
  q(
    "ch-pool-17-035",
    KAP[4],
    "Hydrogencarbonat (HCO₃⁻) kann:",
    [
      "nur als Säure wirken",
      "nur als Base wirken",
      "als Säure und Base wirken (Ampholyt)",
      "nicht mit Säure reagieren",
      "nicht mit Base reagieren",
    ],
    2,
    "HCO₃⁻ + H⁺ → H₂CO₃ (Base); HCO₃⁻ → CO₃²⁻ + H⁺ (Säure). Ampholyt.",
    "mittel",
    ["Hydrogencarbonat", "Ampholyt"]
  ),
  q(
    "ch-pool-17-036",
    KAP[5],
    "Welche Verbindung ist ein Ether?",
    ["CH₃OH", "CH₃CH₂OCH₂CH₃", "CH₃COOH", "CH₃CHO", "CH₃NH₂"],
    1,
    "CH₃CH₂−O−CH₂CH₃ = Diethylether. Zwei Alkylreste an Sauerstoff.",
    "mittel",
    ["Ether"]
  ),
  q(
    "ch-pool-17-037",
    KAP[0],
    "Die Massenzahl steht im Elementsymbol:",
    ["rechts unten", "links oben", "rechts oben", "links unten", "in der Mitte"],
    1,
    "Schreibweise: ˣ_y E (x = Massenzahl links oben, y = Ordnungszahl links unten).",
    "leicht",
    ["Elementsymbol", "Massenzahl"]
  ),
  q(
    "ch-pool-17-038",
    KAP[1],
    "Ein azeotropes Gemisch:",
    [
      "hat einen konstanten Siedepunkt wie eine Reinsubstanz",
      "ändert sich beim Sieden nicht in der Zusammensetzung",
      "kann nicht destilliert werden, um eine Komponente abzutrennen (bei azeotroper Zusammensetzung)",
      "ist immer ideal",
      "hat keinen Siedepunkt",
    ],
    2,
    "Azeotrop: Gemisch, das bei konstantem Druck bei konstanter Temperatur siedet und dabei konstante Zusammensetzung hat (z. B. Ethanol-Wasser).",
    "schwer",
    ["Azeotrop"]
  ),
  q(
    "ch-pool-17-039",
    KAP[2],
    "Welche Verbindung hat ein lineares Molekül?",
    ["H₂O", "CO₂", "NH₃", "CH₄", "SO₂"],
    1,
    "CO₂: O=C=O, linear. H₂O gewinkelt, NH₃ pyramidal, CH₄ tetraedrisch.",
    "leicht",
    ["Geometrie", "CO2"]
  ),
  q(
    "ch-pool-17-040",
    KAP[3],
    "Bei einer Reaktion erster Ordnung hängt die Geschwindigkeit ab von:",
    [
      "nur der Temperatur",
      "der Konzentration eines Edukts (linear)",
      "dem Quadrat der Konzentration",
      "nur dem Katalysator",
      "nur dem Druck",
    ],
    1,
    "Reaktion 1. Ordnung: v = k·[A]. Geschwindigkeit proportional zur Konzentration eines Edukts.",
    "mittel",
    ["Reaktionsordnung"]
  ),
  q(
    "ch-pool-17-041",
    KAP[4],
    "Kalium (K) gehört zu den:",
    ["Erdalkalimetallen", "Alkalimetallen", "Halogenen", "Chalkogenen", "Edelgasen"],
    1,
    "Alkalimetalle: Gruppe 1 – Li, Na, K, Rb, Cs, Fr.",
    "leicht",
    ["Alkalimetalle", "Kalium"]
  ),
  q(
    "ch-pool-17-042",
    KAP[5],
    "Ein Alkohol mit zwei OH-Gruppen heißt:",
    ["Monol", "Diol", "Triol", "Phenol", "Enol"],
    1,
    "Zwei OH-Gruppen = Diol (Glycole). Drei = Triol (z. B. Glycerin).",
    "leicht",
    ["Diol", "Alkohol"]
  ),
  q(
    "ch-pool-17-043",
    KAP[0],
    "Wie viele Elektronen passen in die 4. Schale (n=4) maximal?",
    ["8", "18", "32", "50", "72"],
    2,
    "Maximale Elektronenzahl: 2n². n=4 → 2·16 = 32.",
    "leicht",
    ["Schale", "Elektronen"]
  ),
  q(
    "ch-pool-17-044",
    KAP[1],
    "Die Enthalpie H ist eine:",
    [
      "Masse",
      "Zustandsgröße (thermodynamisch)",
      "Geschwindigkeit",
      "Konzentration",
      "Druckeinheit",
    ],
    1,
    "Enthalpie H = U + pV; Zustandsgröße. Reaktionsenthalpie ΔH bei konstantem Druck = umgesetzte Wärme.",
    "mittel",
    ["Enthalpie"]
  ),
  q(
    "ch-pool-17-045",
    KAP[2],
    "In einem Calciumoxid (CaO) liegen vor:",
    [
      "Ca- und O-Atome kovalent gebunden",
      "Ca²⁺- und O²⁻-Ionen",
      "Ca- und O-Moleküle",
      "nur O²⁻",
      "nur Ca²⁺",
    ],
    1,
    "CaO: Ionenverbindung aus Ca²⁺ und O²⁻ (Metalloxid).",
    "leicht",
    ["Calciumoxid", "Ionen"]
  ),
  q(
    "ch-pool-17-046",
    KAP[3],
    "Der Katalysator erscheint in der Gleichgewichtskonstante K:",
    [
      "immer im Zähler",
      "immer im Nenner",
      "nicht (K unabhängig vom Katalysator)",
      "nur bei Enzymen",
      "nur in der Gasphase",
    ],
    2,
    "K hängt nur von der Temperatur ab; Katalysator ändert K nicht und erscheint nicht in K.",
    "mittel",
    ["Gleichgewichtskonstante", "Katalysator"]
  ),
  q(
    "ch-pool-17-047",
    KAP[4],
    "Welche Lösung hat den höchsten pH (unter 1 M Konzentration)?",
    ["HCl", "NaOH", "NaCl", "CH₃COOH", "H₂SO₄"],
    1,
    "NaOH ist eine starke Base → hohe [OH⁻] → pH deutlich über 7. Die Säuren haben niedrigen pH, NaCl etwa neutral.",
    "leicht",
    ["pH", "Base"]
  ),
  q(
    "ch-pool-17-048",
    KAP[5],
    "Die Addition von Wasser an ein Alken (mit Säure als Katalysator) ergibt:",
    ["Alkan", "Alkohol", "Aldehyd", "Keton", "Ether"],
    1,
    "Alken + H₂O (H⁺ katalysiert) → Alkohol (Markovnikov). Hydratation.",
    "mittel",
    ["Hydratation", "Alken"]
  ),
  q(
    "ch-pool-17-049",
    KAP[0],
    "Welches Element hat die Elektronenkonfiguration [Ar] 4s² 3d¹⁰?",
    ["Kupfer", "Zink", "Gallium", "Germanium", "Arsen"],
    1,
    "Zink (Z=30): [Ar] 4s² 3d¹⁰. Voll besetzte 3d-Schale.",
    "mittel",
    ["Zink", "Elektronenkonfiguration"]
  ),
  q(
    "ch-pool-17-050",
    KAP[1],
    "Der Partialdruck eines Gases in einem Gemisch:",
    [
      "ist immer gleich dem Gesamtdruck",
      "ist sein Anteil am Gesamtdruck (Dalton)",
      "ist unabhängig von der Stoffmenge",
      "ist immer null",
      "ist nur bei 0 °C definiert",
    ],
    1,
    "Dalton: Partialdruck p_i = x_i · p_ges (Molenbruch · Gesamtdruck).",
    "mittel",
    ["Partialdruck", "Dalton"]
  ),
  q(
    "ch-pool-17-051",
    KAP[2],
    "Welche Aussage zu Lewis-Säuren trifft zu?",
    [
      "Sie geben immer H⁺ ab",
      "Sie sind Elektronenpaarakzeptoren",
      "Sie sind immer Anionen",
      "Sie haben keine Rolle in der Organik",
      "Sie spenden Elektronenpaare",
    ],
    1,
    "Lewis-Säure = Elektronenpaarakzeptor (z. B. BF₃, H⁺, AlCl₃). Lewis-Base = Donor.",
    "mittel",
    ["Lewis-Säure"]
  ),
  q(
    "ch-pool-17-052",
    KAP[3],
    "Die Halbwertszeit einer Reaktion erster Ordnung:",
    [
      "hängt von der Anfangskonzentration ab",
      "ist unabhängig von der Anfangskonzentration",
      "ist immer gleich der Reaktionszeit",
      "ist null",
      "hängt nur vom Druck ab",
    ],
    1,
    "Reaktion 1. Ordnung: t_1/2 = ln(2)/k; unabhängig von [A]_0.",
    "mittel",
    ["Halbwertszeit"]
  ),
  q(
    "ch-pool-17-053",
    KAP[4],
    "Welches Metall bildet mit Wasser unter Normalbedingungen kein Hydroxid?",
    ["Natrium", "Calcium", "Kupfer", "Kalium", "Barium"],
    2,
    "Kupfer steht in der Spannungsreihe unter Wasserstoff; es reagiert nicht mit Wasser zu H₂ bzw. Hydroxid.",
    "mittel",
    ["Spannungsreihe", "Kupfer"]
  ),
  q(
    "ch-pool-17-054",
    KAP[5],
    "Die Verseifung ist:",
    [
      "die Bildung eines Esters",
      "die hydrolytische Spaltung eines Esters zu Alkohol und Carbonsäure/Salz",
      "eine Oxidation",
      "eine Substitution an Alkanen",
      "eine Addition",
    ],
    1,
    "Verseifung: Ester + Base (oder Wasser) → Alkohol + Carboxylat (bzw. Carbonsäure). Umkehrung der Veresterung.",
    "mittel",
    ["Verseifung", "Ester"]
  ),
  q(
    "ch-pool-17-055",
    KAP[0],
    "Die Anzahl der Hauptgruppen im PSE beträgt:",
    ["8", "10", "12", "18", "7"],
    0,
    "Es gibt 8 Hauptgruppen (1, 2, 13–18) und 10 Nebengruppen (3–12).",
    "leicht",
    ["Periodensystem", "Hauptgruppen"]
  ),
  q(
    "ch-pool-17-056",
    KAP[1],
    "Die relative Luftfeuchtigkeit gibt an:",
    [
      "die absolute Wassermenge in g/m³",
      "das Verhältnis des aktuellen Dampfdrucks zum Sättigungsdampfdruck (in %)",
      "die Temperatur",
      "den Druck",
      "die Dichte",
    ],
    1,
    "Relative Feuchte = (p_Dampf / p_Sätt) · 100 %. 100 % = gesättigt.",
    "mittel",
    ["Luftfeuchtigkeit"]
  ),
  q(
    "ch-pool-17-057",
    KAP[2],
    "Welche Aussage zu sp-Hybridisierung trifft zu?",
    [
      "Es gibt 4 sp-Orbitale",
      "Es gibt 2 sp-Orbitale (linear, z. B. Ethin)",
      "Sie kommt nur bei Ionen vor",
      "Es entstehen nur Einfachbindungen",
      "Kohlenstoff hat 5 Bindungen",
    ],
    1,
    "sp: Ein s- und ein p-Orbital → 2 sp-Orbitale (linear, 180°). Zwei p-Orbitale für π-Bindungen (z. B. C≡C).",
    "mittel",
    ["Hybridisierung", "sp"]
  ),
  q(
    "ch-pool-17-058",
    KAP[3],
    "Bei einer bimolekularen Reaktion A + B → Produkte:",
    [
      "reagiert nur A",
      "stoßen zwei Teilchen (A und B) für den Elementarschritt zusammen",
      "gibt es kein B",
      "reagiert nur in Lösung",
      "ist die Ordnung immer 0",
    ],
    1,
    "Bimolekular: zwei Teilchen müssen zusammenstoßen (Elementarreaktion). Geschwindigkeit ∝ [A][B] bei 2. Ordnung.",
    "mittel",
    ["bimolekular"]
  ),
  q(
    "ch-pool-17-059",
    KAP[4],
    "Welches Element ist ein Chalkogen?",
    ["Stickstoff", "Sauerstoff", "Chlor", "Helium", "Kohlenstoff"],
    1,
    "Chalkogene: Gruppe 16 – O, S, Se, Te, Po. Sauerstoff und Schwefel sind die wichtigsten.",
    "leicht",
    ["Chalkogene", "Sauerstoff"]
  ),
  q(
    "ch-pool-17-060",
    KAP[5],
    "Ein Enol enthält die Gruppierung:",
    ["−COOH", "−OH an C=C (Hydroxy an Doppelbindung)", "−CHO", "−NH₂", "−O−"],
    1,
    "Enol: Alkohol mit OH an einem C-Atom einer C=C-Doppelbindung (tautomer mit Keton/Aldehyd).",
    "mittel",
    ["Enol", "Tautomerie"]
  ),
];
