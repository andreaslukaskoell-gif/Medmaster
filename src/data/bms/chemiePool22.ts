/**
 * Chemie BMS Pool 22 — 50 Zusatzfragen (MedAT-Stil), Gesamtpool >1000.
 * Stoff: chem-kap1–chem-kap6.
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

export const chemiePool22: Question[] = [
  q(
    "ch-pool-22-001",
    KAP[0],
    "Welches Element hat die Ordnungszahl 1?",
    ["Helium", "Wasserstoff", "Lithium", "Kohlenstoff", "Sauerstoff"],
    1,
    "Wasserstoff (H) hat Z = 1.",
    "leicht",
    ["Ordnungszahl"]
  ),
  q(
    "ch-pool-22-002",
    KAP[1],
    "Bei welchem Phasenübergang wird Wärme freigesetzt?",
    ["Schmelzen", "Verdampfen", "Kondensieren", "Sublimieren", "Erwärmen"],
    2,
    "Kondensieren (gas → flüssig) setzt Kondensationswärme frei.",
    "leicht",
    ["Phasenübergang"]
  ),
  q(
    "ch-pool-22-003",
    KAP[2],
    "Welche EN-Differenz deutet auf kovalente Bindung hin?",
    ["sehr groß (>2)", "groß (ca. 1,7–2)", "klein bis mittel (< ca. 1,7)", "immer 0", "negativ"],
    2,
    "Ähnliche EN (kleine Differenz) → Elektronenpaarbindung (kovalent). Große Differenz → ionisch.",
    "mittel",
    ["Elektronegativität"]
  ),
  q(
    "ch-pool-22-004",
    KAP[3],
    "Was ist ein Edukt?",
    ["Endprodukt", "Ausgangsstoff einer Reaktion", "Katalysator", "Lösungsmittel", "Energie"],
    1,
    "Edukte (Reaktanten) sind die Ausgangsstoffe; Produkte die Endstoffe.",
    "leicht",
    ["Edukt"]
  ),
  q(
    "ch-pool-22-005",
    KAP[4],
    "Welche Formel beschreibt Ammoniak?",
    ["HCl", "NH₃", "H₂SO₄", "NaOH", "CO₂"],
    1,
    "Ammoniak = NH₃ (Base, riecht stechend).",
    "leicht",
    ["Ammoniak"]
  ),
  q(
    "ch-pool-22-006",
    KAP[5],
    "Methanol hat die Formel:",
    ["C₂H₅OH", "CH₃OH", "HCOOH", "CH₄", "C₂H₄"],
    1,
    "Methanol = CH₃OH (ein C-Atom). Ethanol = C₂H₅OH.",
    "leicht",
    ["Methanol", "Alkohol"]
  ),
  q(
    "ch-pool-22-007",
    KAP[0],
    "Die K-Schale (n=1) nimmt maximal … Elektronen auf.",
    ["8", "2", "18", "32", "4"],
    1,
    "Max. Elektronen pro Schale: 2n². n=1 → 2.",
    "leicht",
    ["Schale"]
  ),
  q(
    "ch-pool-22-008",
    KAP[1],
    "Welche Zustandsform hat Wasser bei 120 °C und 1 bar?",
    ["fest", "flüssig", "gasförmig", "überkritisch", "unbekannt"],
    2,
    "Bei 1 bar siedet Wasser bei 100 °C; bei 120 °C ist es Dampf.",
    "leicht",
    ["Aggregatzustand"]
  ),
  q(
    "ch-pool-22-009",
    KAP[2],
    "Dipol-Moleküle haben:",
    [
      "keine Partialladungen",
      "räumlich getrennte positive und negative Partialladungen",
      "nur negative Ladung",
      "nur positive Ladung",
      "immer Ladung 0",
    ],
    1,
    "Dipol: ungleiche Verteilung der Elektronen → δ+ und δ− (z. B. H₂O).",
    "mittel",
    ["Dipol"]
  ),
  q(
    "ch-pool-22-010",
    KAP[3],
    "Die Reaktionsenthalpie ΔH einer endothermen Reaktion ist:",
    ["negativ", "positiv", "null", "immer gleich ΔG", "unbestimmt"],
    1,
    "Endotherm = Wärme wird aufgenommen → ΔH > 0.",
    "leicht",
    ["Enthalpie"]
  ),
  q(
    "ch-pool-22-011",
    KAP[4],
    "Salzsäure hat die Formel:",
    ["HNO₃", "H₂SO₄", "HCl", "H₃PO₄", "H₂CO₃"],
    2,
    "Salzsäure = HCl (Chlorwasserstoff in Wasser).",
    "leicht",
    ["Salzsäure"]
  ),
  q(
    "ch-pool-22-012",
    KAP[5],
    "Ein Keton enthält die Gruppe:",
    ["−COOH", "−OH", "−CO− (Carbonyl im Molekül)", "−CHO", "−NH₂"],
    2,
    "Keton: C=O (Carbonyl) zwischen zwei C-Atomen. Aldehyd: −CHO (Carbonyl am Ende).",
    "mittel",
    ["Keton"]
  ),
  q(
    "ch-pool-22-013",
    KAP[0],
    "Welches Teilchen ist negativ geladen?",
    ["Proton", "Neutron", "Elektron", "Alpha-Teilchen", "Kern"],
    2,
    "Elektron: negative Elementarladung. Proton: positiv. Neutron: neutral.",
    "leicht",
    ["Elektron"]
  ),
  q(
    "ch-pool-22-014",
    KAP[1],
    "Die Dichte von Eis ist … als die von flüssigem Wasser.",
    ["größer", "kleiner", "gleich", "doppelt so groß", "unbestimmt"],
    1,
    "Eis (fest) hat geringere Dichte als Wasser (flüssig) → Eis schwimmt.",
    "leicht",
    ["Dichte", "Wasser"]
  ),
  q(
    "ch-pool-22-015",
    KAP[2],
    "In einer polaren Bindung zieht das elektronegativere Atom die Bindungselektronen … an.",
    ["gleich stark", "stärker", "schwächer", "gar nicht", "nur bei Metallen"],
    1,
    "Elektronegativität = Anziehung von Bindungselektronen; höhere EN → stärkere Anziehung → δ−.",
    "leicht",
    ["Polare Bindung"]
  ),
  q(
    "ch-pool-22-016",
    KAP[3],
    "Das Massenwirkungsgesetz beschreibt:",
    [
      "die Reaktionsgeschwindigkeit",
      "das Gleichgewicht (Konzentrationen)",
      "die Aktivierungsenergie",
      "nur Gasreaktionen",
      "nur Festkörper",
    ],
    1,
    "Massenwirkungsgesetz: K = [Produkte]^n / [Edukte]^m im Gleichgewicht.",
    "mittel",
    ["Massenwirkungsgesetz"]
  ),
  q(
    "ch-pool-22-017",
    KAP[4],
    "Eine Lauge ist eine … Lösung.",
    ["saure", "basische", "neutrale", "immer verdünnte", "immer konzentrierte"],
    1,
    "Lauge = basische Lösung (z. B. NaOH in Wasser).",
    "leicht",
    ["Lauge"]
  ),
  q(
    "ch-pool-22-018",
    KAP[5],
    "Propan (C₃H₈) gehört zu den:",
    ["Alkenen", "Alkinen", "Alkanen", "Alkoholen", "Aromaten"],
    2,
    "Propan C₃H₈: gesättigter Kohlenwasserstoff, nur Einfachbindungen → Alkan.",
    "leicht",
    ["Alkane", "Propan"]
  ),
  q(
    "ch-pool-22-019",
    KAP[0],
    "Die L-Schale (n=2) nimmt maximal … Elektronen auf.",
    ["2", "4", "8", "18", "6"],
    2,
    "2n² = 2·4 = 8 für n=2.",
    "leicht",
    ["Schale"]
  ),
  q(
    "ch-pool-22-020",
    KAP[1],
    "Der Siedepunkt von Wasser bei Normaldruck beträgt etwa:",
    ["0 °C", "25 °C", "50 °C", "100 °C", "373 K"],
    3,
    "Wasser siedet bei 1 bar bei 100 °C (373,15 K).",
    "leicht",
    ["Siedepunkt"]
  ),
  q(
    "ch-pool-22-021",
    KAP[2],
    "Welche Aussage zu Ionen ist richtig?",
    [
      "Ionen sind immer neutral",
      "Kationen sind positiv geladen",
      "Anionen haben mehr Protonen als Elektronen",
      "Ionen haben keine Ladung",
      "Alle Ionen sind einwertig",
    ],
    1,
    "Kation = positives Ion (Elektronenmangel). Anion = negatives Ion (Elektronenüberschuss).",
    "leicht",
    ["Ion"]
  ),
  q(
    "ch-pool-22-022",
    KAP[3],
    "Ein Katalysator wird bei der Reaktion:",
    [
      "verbraucht",
      "nicht verbraucht (steht am Ende wieder zur Verfügung)",
      "oxidiert",
      "reduziert",
      "zersetzt",
    ],
    1,
    "Katalysator beschleunigt die Reaktion, wird aber nicht verbraucht.",
    "leicht",
    ["Katalysator"]
  ),
  q(
    "ch-pool-22-023",
    KAP[4],
    "Welche Säure ist in Cola enthalten?",
    ["Salzsäure", "Schwefelsäure", "Kohlensäure (bzw. CO₂)", "Salpetersäure", "Phosphorsäure"],
    2,
    "Cola enthält Kohlensäure (CO₂ in Wasser). Phosphorsäure wird oft zugesetzt.",
    "leicht",
    ["Kohlensäure"]
  ),
  q(
    "ch-pool-22-024",
    KAP[5],
    "Die funktionelle Gruppe −NH₂ kennzeichnet:",
    ["Alkohole", "Amine", "Carbonsäuren", "Ether", "Aldehyde"],
    1,
    "Amin: −NH₂ (Stickstoff mit einem freien Elektronenpaar).",
    "leicht",
    ["Amin"]
  ),
  q(
    "ch-pool-22-025",
    KAP[0],
    "Ein Element wird durch … definiert.",
    [
      "die Neutronenzahl",
      "die Protonenzahl (Ordnungszahl Z)",
      "die Massenzahl",
      "die Elektronenzahl in der Hülle",
      "die Atommasse",
    ],
    1,
    "Die Ordnungszahl Z (Protonenzahl) definiert das Element.",
    "leicht",
    ["Element"]
  ),
  q(
    "ch-pool-22-026",
    KAP[1],
    "1 mol eines idealen Gases nimmt bei 25 °C und 1 bar etwa … Volumen ein.",
    ["22,4 L", "ca. 24,5 L", "1 L", "10 L", "0,082 L"],
    1,
    "V_m ≈ 24,5 L/mol bei 25 °C und 1 bar. Bei 0 °C: ca. 22,4 L/mol.",
    "mittel",
    ["molares Volumen"]
  ),
  q(
    "ch-pool-22-027",
    KAP[2],
    "Welche Bindung ist in Diamant vorherrschend?",
    [
      "Ionenbindung",
      "kovalente Bindung (C-C-Netzwerk)",
      "Metallbindung",
      "Wasserstoffbrücken",
      "van-der-Waals",
    ],
    1,
    "Diamant: Riesenmolekül aus kovalent gebundenen C-Atomen (sp³-Hybridisierung).",
    "mittel",
    ["Diamant", "kovalente Bindung"]
  ),
  q(
    "ch-pool-22-028",
    KAP[3],
    "Bei einer Reduktion … ein Stoff Elektronen.",
    ["gibt ab", "nimmt auf", "teilt", "verliert nicht", "tauscht nicht"],
    1,
    "Reduktion = Elektronenaufnahme. Oxidation = Elektronenabgabe.",
    "leicht",
    ["Reduktion"]
  ),
  q(
    "ch-pool-22-029",
    KAP[4],
    "Der pH von Magensäure (HCl) ist:",
    ["größer 7", "gleich 7", "kleiner 7", "immer 0", "unbestimmt"],
    2,
    "Magensäure ist sauer → pH < 7 (oft pH 1–2).",
    "leicht",
    ["pH", "Magensäure"]
  ),
  q(
    "ch-pool-22-030",
    KAP[5],
    "Glucose (Traubenzucker) enthält die funktionelle Gruppe(n):",
    ["nur −COOH", "Hydroxyl (−OH) und Carbonyl (−CHO oder −CO−)", "nur −NH₂", "nur Ether", "keine"],
    1,
    "Glucose ist ein Aldose (Aldehyd-Zucker) mit mehreren −OH-Gruppen.",
    "mittel",
    ["Glucose", "Kohlenhydrate"]
  ),
  q(
    "ch-pool-22-031",
    KAP[0],
    "Die Anzahl der Neutronen in ¹²C beträgt:",
    ["6", "12", "8", "0", "18"],
    0,
    "¹²C: A=12, Z=6 → N = A−Z = 6 Neutronen.",
    "leicht",
    ["Kohlenstoff", "Isotop"]
  ),
  q(
    "ch-pool-22-032",
    KAP[1],
    "Erstarren ist der Übergang:",
    [
      "fest → flüssig",
      "flüssig → fest",
      "gasförmig → flüssig",
      "fest → gasförmig",
      "gasförmig → fest",
    ],
    1,
    "Erstarren (Gefrieren) = flüssig → fest. Schmelzen = fest → flüssig.",
    "leicht",
    ["Erstarren"]
  ),
  q(
    "ch-pool-22-033",
    KAP[2],
    "Welche Verbindung hat die höchste Schmelztemperatur (typischerweise)?",
    ["Wasser", "Kochsalz", "Eisen", "Schwefel", "Iod"],
    2,
    "Metalle haben oft sehr hohe Schmelzpunkte (Eisen ca. 1538 °C). NaCl ca. 801 °C.",
    "mittel",
    ["Schmelzpunkt"]
  ),
  q(
    "ch-pool-22-034",
    KAP[3],
    "Die Gleichgewichtskonstante K wird durch einen Katalysator:",
    ["erhöht", "erniedrigt", "nicht geändert", "verdoppelt", "auf null gesetzt"],
    2,
    "Katalysator ändert weder K noch die Gleichgewichtslage.",
    "mittel",
    ["Gleichgewichtskonstante"]
  ),
  q(
    "ch-pool-22-035",
    KAP[4],
    "Welches Metall bildet mit Wasser starke Laugen?",
    ["Kupfer", "Natrium", "Gold", "Silber", "Quecksilber"],
    1,
    "Natrium reagiert mit Wasser zu NaOH (Natronlauge) und H₂.",
    "leicht",
    ["Natrium", "Lauge"]
  ),
  q(
    "ch-pool-22-036",
    KAP[5],
    "Ein Ether enthält die Gruppe:",
    ["−OH", "−COOH", "−O− (Sauerstoff zwischen zwei C)", "−CHO", "−NH₂"],
    2,
    "Ether: C−O−C (Sauerstoff zwischen zwei Kohlenstoffatomen).",
    "leicht",
    ["Ether"]
  ),
  q(
    "ch-pool-22-037",
    KAP[0],
    "Welche Gruppe des PSE enthält die Alkalimetalle?",
    ["2", "1", "17", "18", "16"],
    1,
    "Alkalimetalle: Gruppe 1 (Li, Na, K, Rb, Cs, Fr).",
    "leicht",
    ["Alkalimetalle"]
  ),
  q(
    "ch-pool-22-038",
    KAP[1],
    "Der Tripelpunkt eines Stoffes ist der Punkt, an dem:",
    [
      "nur fest existiert",
      "fest, flüssig und gasförmig im Gleichgewicht koexistieren",
      "nur gasförmig existiert",
      "der Druck null ist",
      "die Temperatur null ist",
    ],
    1,
    "Am Tripelpunkt stehen fest, flüssig und gasförmig im Gleichgewicht.",
    "mittel",
    ["Tripelpunkt"]
  ),
  q(
    "ch-pool-22-039",
    KAP[2],
    "London-Kräfte (Dispersionskräfte) sind eine Art von:",
    [
      "kovalenten Bindungen",
      "Ionenbindungen",
      "van-der-Waals-Kräften",
      "Wasserstoffbrücken",
      "Metallbindungen",
    ],
    2,
    "London-Kräfte = schwache van-der-Waals-Wechselwirkungen zwischen temporären Dipolen.",
    "mittel",
    ["London-Kräfte", "van-der-Waals"]
  ),
  q(
    "ch-pool-22-040",
    KAP[3],
    "Eine Eliminierung ist eine Reaktion, bei der:",
    [
      "zwei Moleküle sich verbinden",
      "aus einem Molekül kleinere Moleküle entstehen (z. B. Abspaltung)",
      "Protonen übertragen werden",
      "Elektronen übertragen werden",
      "nur umgelagert wird",
    ],
    1,
    "Eliminierung: Abspaltung (z. B. HX aus Halogenalkan → Alken).",
    "mittel",
    ["Eliminierung"]
  ),
  q(
    "ch-pool-22-041",
    KAP[4],
    "Welcher Indikator färbt sich in Säure rot?",
    [
      "Phenolphthalein",
      "Lackmus (blau)",
      "Lackmus (rot) in Base",
      "Universalindikator in Base",
      "Bromthymolblau in Base",
    ],
    1,
    "Lackmus: in Säure rot, in Base blau. Phenolphthalein: in Base pink.",
    "leicht",
    ["Indikator", "Lackmus"]
  ),
  q(
    "ch-pool-22-042",
    KAP[5],
    "Fettsäuren enthalten typischerweise:",
    [
      "nur −OH",
      "eine lange Kohlenstoffkette und eine Carboxylgruppe −COOH",
      "nur −NH₂",
      "nur Ether",
      "keine funktionellen Gruppen",
    ],
    1,
    "Fettsäure: lange Kette (Cₙ) + −COOH. Gesättigt oder ungesättigt (Doppelbindungen).",
    "mittel",
    ["Fettsäure"]
  ),
  q(
    "ch-pool-22-043",
    KAP[0],
    "Die Atommasse wird in der Einheit … angegeben.",
    ["kg", "mol", "u (atomic mass unit)", "g/mol", "L"],
    2,
    "Atommasse eines einzelnen Atoms in u (1 u ≈ 1,66·10⁻²⁷ kg). Molare Masse in g/mol.",
    "leicht",
    ["Atommasse", "Einheit"]
  ),
  q(
    "ch-pool-22-044",
    KAP[1],
    "Kritische Temperatur ist die Temperatur, oberhalb derer:",
    [
      "ein Gas nicht mehr durch Druck verflüssigt werden kann",
      "alles fest ist",
      "Wasser gefriert",
      "keine Reaktion stattfindet",
      "der Druck null ist",
    ],
    0,
    "Oberhalb der kritischen Temperatur existiert keine flüssige Phase mehr; das Fluid ist überkritisch.",
    "schwer",
    ["kritische Temperatur"]
  ),
  q(
    "ch-pool-22-045",
    KAP[2],
    "Welche Molekülgeometrie hat Wasser (H₂O)?",
    ["linear", "trigonal planar", "gewinkelt (ca. 104,5°)", "tetraedrisch", "quadratisch"],
    2,
    "H₂O: zwei bindende Elektronenpaare, zwei freie Paare am O → gewinkelt, ca. 104,5°.",
    "mittel",
    ["Molekülgeometrie", "Wasser"]
  ),
  q(
    "ch-pool-22-046",
    KAP[3],
    "Bei einer Veresterung reagieren:",
    [
      "Alkan + Alken",
      "Carbonsäure + Alkohol",
      "zwei Alkane",
      "Säure + Base (nur Neutralisation)",
      "zwei Amine",
    ],
    1,
    "Veresterung: Carbonsäure + Alkohol ⇌ Ester + Wasser.",
    "leicht",
    ["Veresterung", "Ester"]
  ),
  q(
    "ch-pool-22-047",
    KAP[4],
    "Welches Oxid wirkt in Wasser stark basisch?",
    ["CO₂", "SO₂", "Na₂O", "NO₂", "P₂O₅"],
    2,
    "Na₂O + H₂O → 2 NaOH (starke Base). CO₂, SO₂, NO₂, P₂O₅ bilden Säuren.",
    "mittel",
    ["Oxid", "Base"]
  ),
  q(
    "ch-pool-22-048",
    KAP[5],
    "Ein chirales Molekül:",
    [
      "hat keine Isomere",
      "hat ein Spiegelbild, das nicht deckungsgleich ist (Enantiomere)",
      "ist immer ein Alkan",
      "hat keine C-Atome",
      "ist immer linear",
    ],
    1,
    "Chiral = nicht mit dem Spiegelbild deckungsgleich; Enantiomere (z. B. L- und D-Aminosäuren).",
    "schwer",
    ["chiral", "Enantiomere"]
  ),
  q(
    "ch-pool-22-049",
    KAP[0],
    "Die Anzahl der Valenzelektronen von Stickstoff (N) beträgt:",
    ["3", "5", "7", "8", "2"],
    1,
    "Stickstoff (Gruppe 15) hat 5 Valenzelektronen (Außenelektronen).",
    "leicht",
    ["Valenzelektronen", "Stickstoff"]
  ),
  q(
    "ch-pool-22-050",
    KAP[1],
    "Welche Aussage zu Gasen trifft zu?",
    [
      "Gase haben festes Volumen",
      "Gase sind kompressibel",
      "Gase haben keine Dichte",
      "Gase sind inkompressibel",
      "Gase sind immer ideal",
    ],
    1,
    "Gase sind kompressibel (Volumen hängt von Druck und Temperatur ab).",
    "leicht",
    ["Gas", "Kompressibilität"]
  ),
];
