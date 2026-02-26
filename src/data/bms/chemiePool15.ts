/**
 * Chemie BMS Pool 15 — 60 Fragen im offiziellen MedAT-Stil (Typ A).
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

export const chemiePool15: Question[] = [
  q(
    "ch-pool-15-001",
    KAP[0],
    "Wie viele Elektronen hat ein neutrales Sauerstoff-Atom?",
    ["6", "7", "8", "16", "18"],
    2,
    "Sauerstoff: Z = 8; im neutralen Atom 8 Elektronen.",
    "leicht",
    ["Sauerstoff", "Elektronen"]
  ),
  q(
    "ch-pool-15-002",
    KAP[1],
    "Die absolute Temperatur T (in Kelvin) und die Celsius-Temperatur θ hängen zusammen durch:",
    ["T = θ − 273", "T = θ + 273,15", "T = θ · 273", "T = θ / 273", "T = θ"],
    1,
    "T (K) = θ (°C) + 273,15. 0 °C = 273,15 K.",
    "leicht",
    ["Kelvin", "Temperatur"]
  ),
  q(
    "ch-pool-15-003",
    KAP[2],
    "Welche Verbindung enthält vorwiegend kovalente Bindungen?",
    ["NaCl", "CaO", "H₂O", "MgCl₂", "KI"],
    2,
    "H₂O: Bindung zwischen zwei Nichtmetallen, Elektronenpaarbindung (kovalent). Die anderen sind ionisch.",
    "leicht",
    ["kovalente Bindung", "Wasser"]
  ),
  q(
    "ch-pool-15-004",
    KAP[3],
    "Bei einer Säure-Base-Reaktion nach Brønsted:",
    [
      "werden Elektronen übertragen",
      "werden Protonen (H⁺) übertragen",
      "entstehen nur Salze",
      "wird kein Wasser gebildet",
      "reagieren nur Oxide",
    ],
    1,
    "Brønsted: Säure = Protonendonator, Base = Protonenakzeptor. Protonenübertragung.",
    "mittel",
    ["Brønsted", "Säure-Base"]
  ),
  q(
    "ch-pool-15-005",
    KAP[4],
    "Eine Lösung mit pH = 9 ist:",
    ["sauer", "neutral", "basisch", "amphoter", "immer gepuffert"],
    2,
    "pH > 7 = basisch. pH = 9 bedeutet [OH⁻] > [H₃O⁺].",
    "leicht",
    ["pH", "basisch"]
  ),
  q(
    "ch-pool-15-006",
    KAP[5],
    "Pentan hat die Summenformel:",
    ["C₅H₈", "C₅H₁₀", "C₅H₁₂", "C₅H₁₄", "C₅H₆"],
    2,
    "Pentan = Alkan mit 5 C-Atomen: C₅H₁₂ (CₙH₂ₙ₊₂).",
    "leicht",
    ["Alkane", "Pentan"]
  ),
  q(
    "ch-pool-15-007",
    KAP[0],
    "Die Elektronenkonfiguration von Neon (Z=10) ist:",
    ["1s² 2s² 2p⁴", "1s² 2s² 2p⁶", "1s² 2s² 2p⁵", "1s² 2s² 2p⁷", "1s² 2s⁶"],
    1,
    "Neon: 10 Elektronen → 1s² 2s² 2p⁶ (Edelgaskonfiguration).",
    "mittel",
    ["Elektronenkonfiguration", "Neon"]
  ),
  q(
    "ch-pool-15-008",
    KAP[1],
    "Der Dampfdruck einer Flüssigkeit:",
    [
      "ist unabhängig von der Temperatur",
      "steigt mit der Temperatur",
      "sinkt mit der Temperatur",
      "ist immer 1 bar",
      "ist bei allen Flüssigkeiten gleich",
    ],
    1,
    "Mit steigender Temperatur verdampfen mehr Moleküle → höherer Dampfdruck.",
    "mittel",
    ["Dampfdruck", "Temperatur"]
  ),
  q(
    "ch-pool-15-009",
    KAP[2],
    "Welche Aussage zu Wasserstoffbrücken trifft zu?",
    [
      "Sie sind stärker als kovalente Bindungen",
      "Sie wirken zwischen H und einem elektronegativen Atom (O, N, F)",
      "Sie kommen nur in Ionen vor",
      "Sie sind schwächer als London-Kräfte",
      "Sie treten nur in Alkanen auf",
    ],
    1,
    "Wasserstoffbrücke: H an O/N/F gebunden, Wechselwirkung mit anderem O/N/F (Elektronegativität, freies Elektronenpaar).",
    "mittel",
    ["Wasserstoffbrücken"]
  ),
  q(
    "ch-pool-15-010",
    KAP[3],
    "Die Reaktionsenthalpie ΔH einer Neutralisation ist typischerweise:",
    [
      "positiv (endotherm)",
      "negativ (exotherm)",
      "null",
      "unbestimmt",
      "immer gleich der Aktivierungsenergie",
    ],
    1,
    "Neutralisation setzt Wärme frei → exotherm, ΔH < 0.",
    "leicht",
    ["Neutralisation", "Enthalpie"]
  ),
  q(
    "ch-pool-15-011",
    KAP[4],
    "Welches Anion entsteht bei der Dissoziation von Salpetersäure (HNO₃)?",
    ["NO₂⁻", "NO₃⁻", "NH₄⁺", "NO⁺", "N³⁻"],
    1,
    "HNO₃ → H⁺ + NO₃⁻. Nitrat ist das Anion.",
    "leicht",
    ["Salpetersäure", "Nitrat"]
  ),
  q(
    "ch-pool-15-012",
    KAP[5],
    "Aceton (Propanon) enthält die funktionelle Gruppe:",
    ["−COOH", "−OH", "−CHO", "−CO− (Keton)", "−NH₂"],
    3,
    "Aceton = Propanon: Keton mit Carbonylgruppe C=O in der Kette.",
    "mittel",
    ["Keton", "Aceton"]
  ),
  q(
    "ch-pool-15-013",
    KAP[0],
    "Welches Element hat die geringste Elektronegativität unter F, O, N, C, H?",
    ["F", "O", "N", "C", "H"],
    4,
    "Unter diesen hat Wasserstoff die geringste EN (ca. 2,2). F hat die höchste.",
    "mittel",
    ["Elektronegativität"]
  ),
  q(
    "ch-pool-15-014",
    KAP[1],
    "Standardbedingungen (STP) für Gase sind definiert als:",
    [
      "25 °C und 1 bar",
      "0 °C und 1,013 bar",
      "100 °C und 1 bar",
      "0 K und 1 bar",
      "273 °C und 1 bar",
    ],
    1,
    "STP: 0 °C (273,15 K) und 1 atm (1,013 bar). V_m ≈ 22,4 L/mol.",
    "leicht",
    ["Standardbedingungen", "STP"]
  ),
  q(
    "ch-pool-15-015",
    KAP[2],
    "In einem O₂-Molekül liegt zwischen den Sauerstoffatomen eine:",
    ["Einfachbindung", "Doppelbindung", "Dreifachbindung", "Ionenbindung", "Wasserstoffbrücke"],
    1,
    "Sauerstoff hat 6 Valenzelektronen; in O₂ werden 2 Elektronenpaare geteilt → Doppelbindung O=O.",
    "leicht",
    ["Sauerstoff", "Doppelbindung"]
  ),
  q(
    "ch-pool-15-016",
    KAP[3],
    "Ein heterogener Katalysator:",
    [
      "ist in der gleichen Phase wie die Reaktanden",
      "befindet sich in einer anderen Phase (z. B. fest, Reaktanden gasförmig)",
      "wird ständig verbraucht",
      "ändert die Gleichgewichtslage",
      "reagiert stöchiometrisch mit",
    ],
    1,
    "Heterogen: Katalysator in anderer Phase (z. B. feste Oberfläche, Reaktanden gasförmig). Homogen: gleiche Phase.",
    "mittel",
    ["Katalysator", "heterogen"]
  ),
  q(
    "ch-pool-15-017",
    KAP[4],
    "Welche Säure ist eine starke Säure in wässriger Lösung?",
    ["Essigsäure", "Ameisensäure", "Salzsäure (HCl)", "Kohlensäure", "Phosphorsäure (1. Stufe)"],
    2,
    "HCl ist eine starke Säure; in Wasser praktisch vollständig zu H₃O⁺ und Cl⁻ dissoziiert.",
    "leicht",
    ["starke Säure", "HCl"]
  ),
  q(
    "ch-pool-15-018",
    KAP[5],
    "Die Silbernitrat-Probe zum Nachweis von Chlorid ergibt:",
    [
      "gelbes Niederschlag (AgI)",
      "weißen Niederschlag (AgCl)",
      "roten Niederschlag",
      "keinen Niederschlag",
      "blaue Färbung",
    ],
    1,
    "Ag⁺ + Cl⁻ → AgCl (weißer, schwer löslicher Niederschlag).",
    "leicht",
    ["Chloridnachweis", "Silbernitrat"]
  ),
  q(
    "ch-pool-15-019",
    KAP[0],
    "Wie viele Orbitale gibt es in der zweiten Schale (n=2)?",
    ["1", "2", "4", "8", "9"],
    2,
    "n=2: 1 s-Orbital + 3 p-Orbitale = 4 Orbitale. Insgesamt 8 Elektronen (2n²).",
    "mittel",
    ["Orbital", "Schale"]
  ),
  q(
    "ch-pool-15-020",
    KAP[1],
    "Die Dichte von Eis ist im Vergleich zu flüssigem Wasser:",
    ["gleich", "größer", "kleiner", "immer 1 g/cm³", "unbestimmt"],
    2,
    "Dichteanomalie des Wassers: Eis hat geringere Dichte als flüssiges Wasser (Wasser dehnt sich beim Gefrieren aus).",
    "leicht",
    ["Dichte", "Eis"]
  ),
  q(
    "ch-pool-15-021",
    KAP[2],
    "Welche Aussage zur metallischen Bindung trifft zu?",
    [
      "Valenzelektronen sind lokal gebunden",
      "Valenzelektronen sind delokalisiert",
      "Es gibt nur Ionen",
      "Es gibt nur kovalente Bindungen",
      "Metalle sind nicht leitfähig",
    ],
    1,
    "Metallbindung: delokalisiertes Elektronengas aus Valenzelektronen → elektrische und thermische Leitfähigkeit.",
    "mittel",
    ["Metallbindung"]
  ),
  q(
    "ch-pool-15-022",
    KAP[3],
    "Bei der Reaktion A + B → C handelt es sich um eine:",
    ["Zersetzung", "Synthese (Vereinigung)", "Substitution", "Doppelumsatz", "Redox ohne Synthese"],
    1,
    "Synthese: zwei oder mehrere Edukte bilden ein Produkt (Vereinigung).",
    "leicht",
    ["Synthese", "Reaktionstyp"]
  ),
  q(
    "ch-pool-15-023",
    KAP[4],
    "Der pOH einer Lösung mit [H₃O⁺] = 10⁻¹² mol/L beträgt bei 25 °C:",
    ["2", "12", "14", "7", "−2"],
    0,
    "[OH⁻] = K_W / [H₃O⁺] = 10⁻¹⁴ / 10⁻¹² = 10⁻² → pOH = 2.",
    "mittel",
    ["pOH", "Autoprotolyse"]
  ),
  q(
    "ch-pool-15-024",
    KAP[5],
    "Welche Verbindung ist ein Aromat?",
    ["Cyclohexan", "Cyclohexen", "Benzol", "Hexan", "Pentan"],
    2,
    "Benzol (C₆H₆) hat ein konjugiertes π-System mit 6 π-Elektronen (Hückel) → aromatisch.",
    "leicht",
    ["Aromat", "Benzol"]
  ),
  q(
    "ch-pool-15-025",
    KAP[0],
    "Die Ordnungszahl Z von Calcium beträgt:",
    ["18", "19", "20", "40", "41"],
    2,
    "Calcium (Ca) hat die Ordnungszahl 20 (2. Hauptgruppe, 4. Periode).",
    "leicht",
    ["Calcium", "Ordnungszahl"]
  ),
  q(
    "ch-pool-15-026",
    KAP[1],
    "Nach Avogadro enthalten 1 mol verschiedener idealer Gase bei gleichem p und T:",
    [
      "unterschiedliche Volumina",
      "die gleiche Anzahl von Teilchen",
      "unterschiedliche Teilchenzahlen",
      "nur gleiche Massen",
      "nur bei 0 °C gleiche Teilchenzahl",
    ],
    1,
    "1 mol = N_A Teilchen, unabhängig vom Stoff. Bei gleichem p, T haben ideale Gase gleiches Volumen pro Mol.",
    "mittel",
    ["Avogadro", "Stoffmenge"]
  ),
  q(
    "ch-pool-15-027",
    KAP[2],
    "Die Gitterenergie von MgO ist größer als die von NaCl, weil:",
    [
      "MgO weniger Ionen hat",
      "Mg²⁺ und O²⁻ kleinere Radien und höhere Ladungen haben",
      "NaCl schwerer ist",
      "MgO molekular ist",
      "NaCl keine Ionen hat",
    ],
    1,
    "Gitterenergie steigt mit höheren Ionenladungen und kleineren Radien. Mg²⁺/O²⁻ vs. Na⁺/Cl⁻.",
    "mittel",
    ["Gitterenergie", "Ionen"]
  ),
  q(
    "ch-pool-15-028",
    KAP[3],
    "Le Chatelier: Wird bei einer Gleichgewichtsreaktion ein Produkt entzogen, verschiebt sich das Gleichgewicht:",
    [
      "auf die Eduktseite",
      "auf die Produktseite",
      "nicht",
      "zu höherem Druck",
      "zu niedrigerer Temperatur",
    ],
    1,
    "Entzug eines Produkts verringert die Rückreaktion → Netto-Hinreaktion → mehr Produkte werden gebildet.",
    "mittel",
    ["Le Chatelier", "Konzentration"]
  ),
  q(
    "ch-pool-15-029",
    KAP[4],
    "Welche Oxidationszahl hat Chrom in K₂Cr₂O₇?",
    ["+2", "+3", "+6", "+7", "−2"],
    2,
    "K₂Cr₂O₇: K⁺, O −2. 2·1 + 2·Cr + 7·(−2) = 0 → 2Cr = 12 → Cr = +6.",
    "schwer",
    ["Oxidationszahl", "Dichromat"]
  ),
  q(
    "ch-pool-15-030",
    KAP[5],
    "Ein Peptid enthält die Bindung:",
    [
      "Esterbindung",
      "Amidbindung (Peptidbindung)",
      "Etherbindung",
      "Glykosidische Bindung",
      "Disulfidbrücke (nur bei Cystein)",
    ],
    1,
    "Peptidbindung = Amidbindung zwischen Carboxylgruppe einer Aminosäure und Aminogruppe der nächsten.",
    "mittel",
    ["Peptid", "Amidbindung"]
  ),
  q(
    "ch-pool-15-031",
    KAP[0],
    "Ein Element der 7. Hauptgruppe hat wie viele Valenzelektronen?",
    ["5", "6", "7", "8", "17"],
    2,
    "Hauptgruppe 17 (Halogene) = 7 Valenzelektronen (ns² np⁵).",
    "leicht",
    ["Halogene", "Valenzelektronen"]
  ),
  q(
    "ch-pool-15-032",
    KAP[1],
    "Die Siedetemperatur von Wasser bei Normaldruck beträgt etwa:",
    ["0 °C", "25 °C", "100 °C", "273 °C", "373 K"],
    2,
    "Bei 1,013 bar siedet Wasser bei 100 °C (373,15 K).",
    "leicht",
    ["Siedepunkt", "Wasser"]
  ),
  q(
    "ch-pool-15-033",
    KAP[2],
    "Welche Geometrie hat ein Ammoniak-Molekül (NH₃)?",
    ["linear", "tetraedrisch", "trigonal pyramidal", "trigonal planar", "oktaedrisch"],
    2,
    "NH₃: N hat ein freies Elektronenpaar + 3 Bindungen → trigonal pyramidal (Abknickung vom Tetraeder).",
    "mittel",
    ["Ammoniak", "Geometrie"]
  ),
  q(
    "ch-pool-15-034",
    KAP[3],
    "Ein Inhibitor:",
    [
      "beschleunigt die Reaktion",
      "verlangsamt oder verhindert die Reaktion",
      "verschiebt das Gleichgewicht",
      "ist ein Katalysator",
      "ändert ΔH",
    ],
    1,
    "Inhibitor hemmt die Reaktion (z. B. kompetitive Enzymhemmung).",
    "leicht",
    ["Inhibitor"]
  ),
  q(
    "ch-pool-15-035",
    KAP[4],
    "Welcher Stoff kann sowohl als Säure als auch als Base wirken?",
    ["nur NaCl", "Hydrogenphosphat H₂PO₄⁻", "nur HCl", "nur NaOH", "O₂"],
    1,
    "H₂PO₄⁻ kann H⁺ abgeben (→ HPO₄²⁻) oder aufnehmen (→ H₃PO₄) → Ampholyt.",
    "mittel",
    ["Ampholyt", "Phosphat"]
  ),
  q(
    "ch-pool-15-036",
    KAP[5],
    "Welche Verbindung ist eine Carbonsäure?",
    ["CH₃OH", "CH₃CHO", "CH₃COOH", "CH₃OCH₃", "CH₃NH₂"],
    2,
    "CH₃COOH = Essigsäure, Carboxylgruppe −COOH. Die anderen sind Alkohol, Aldehyd, Ether, Amin.",
    "leicht",
    ["Carbonsäure"]
  ),
  q(
    "ch-pool-15-037",
    KAP[0],
    "Das Elementsymbol Fe steht für:",
    ["Fluor", "Fermium", "Eisen", "Francium", "Flerovium"],
    2,
    "Fe = Ferrum = Eisen. F = Fluor, Fr = Francium.",
    "leicht",
    ["Elementsymbol", "Eisen"]
  ),
  q(
    "ch-pool-15-038",
    KAP[1],
    "Die Konzentration c = 1 mol/L bedeutet:",
    [
      "1 Gramm pro Liter",
      "1 Mol gelöster Stoff pro Liter Lösung",
      "1 Teilchen pro Liter",
      "1 Liter pro Mol",
      "1 Mol pro Kilogramm",
    ],
    1,
    "Stoffmengenkonzentration c = n/V in mol/L (bzw. mol/dm³).",
    "leicht",
    ["Konzentration"]
  ),
  q(
    "ch-pool-15-039",
    KAP[2],
    "Van-der-Waals-Kräfte bewirken unter anderem:",
    [
      "die hohe Siedetemperatur von Wasser",
      "dass Alkane mit zunehmender Kettenlänge höher sieden",
      "die Stabilität von Diamant",
      "Ionenbindung",
      "Wasserstoffbrücken",
    ],
    1,
    "Längere Alkane haben mehr Elektronen und größere Oberfläche → stärkere London-Kräfte → höherer Siedepunkt.",
    "mittel",
    ["van-der-Waals", "Alkane"]
  ),
  q(
    "ch-pool-15-040",
    KAP[3],
    "Die Gleichgewichtskonstante K wird durch einen Katalysator:",
    ["vergrößert", "verkleinert", "nicht geändert", "auf null gesetzt", "verdoppelt"],
    2,
    "Katalysator beschleunigt Hin- und Rückreaktion gleichermaßen; K und Gleichgewichtslage bleiben gleich.",
    "mittel",
    ["Gleichgewichtskonstante", "Katalysator"]
  ),
  q(
    "ch-pool-15-041",
    KAP[4],
    "Kaliumhydroxid (KOH) in Wasser ergibt:",
    [
      "eine saure Lösung",
      "eine basische Lösung",
      "eine neutrale Lösung",
      "keine Lösung",
      "eine Pufferlösung",
    ],
    1,
    "KOH ist eine starke Base; in Wasser: KOH → K⁺ + OH⁻ → basisch.",
    "leicht",
    ["KOH", "Base"]
  ),
  q(
    "ch-pool-15-042",
    KAP[5],
    "Die Tollens-Probe weist nach:",
    ["Alkane", "Alkene", "Aldehyde (und reduzierende Zucker)", "Carbonsäuren", "Ether"],
    2,
    "Tollens: Silberspiegel durch Reduktion von Ag⁺ zu Ag durch Aldehyde (und reduzierende Zucker).",
    "mittel",
    ["Tollens", "Aldehyd"]
  ),
  q(
    "ch-pool-15-043",
    KAP[0],
    "Wie viele Protonen hat ein Stickstoff-Atom?",
    ["5", "6", "7", "14", "15"],
    2,
    "Stickstoff (N) hat die Ordnungszahl 7 → 7 Protonen.",
    "leicht",
    ["Stickstoff", "Protonen"]
  ),
  q(
    "ch-pool-15-044",
    KAP[1],
    "Die spezifische Wärmekapazität c gibt an:",
    [
      "Wärme pro Masse und Temperaturdifferenz",
      "nur Wärme pro Masse",
      "nur Temperatur",
      "nur Druck",
      "Volumen pro Masse",
    ],
    0,
    "c = Q / (m · ΔT); Einheit z. B. J/(kg·K). Energie, die nötig ist, 1 kg um 1 K zu erwärmen.",
    "mittel",
    ["Wärmekapazität"]
  ),
  q(
    "ch-pool-15-045",
    KAP[2],
    "Welche Verbindung hat ein permanentes Dipolmoment?",
    ["CO₂", "CCl₄", "Benzol", "Wasser (H₂O)", "Methan"],
    3,
    "H₂O ist gewinkelt und hat polare O−H-Bindungen → permanentes Dipolmoment. CO₂, CCl₄, CH₄, Benzol sind symmetrisch und unpolar.",
    "mittel",
    ["Dipolmoment", "Wasser"]
  ),
  q(
    "ch-pool-15-046",
    KAP[3],
    "Die Entropie S ist ein Maß für:",
    [
      "die Enthalpie",
      "die „Unordnung“ bzw. Anzahl der Mikrozustände",
      "die Aktivierungsenergie",
      "die Konzentration",
      "den Druck",
    ],
    1,
    "Entropie: Maß für die Verteilung der Energie; höhere Unordnung → höhere Entropie. ΔG = ΔH − TΔS.",
    "mittel",
    ["Entropie"]
  ),
  q(
    "ch-pool-15-047",
    KAP[4],
    "Welches Gas entsteht beim Erhitzen von Ammoniumnitrat?",
    ["NH₃", "N₂O (Lachgas) bzw. N₂ und H₂O", "NO₂", "O₂ nur", "H₂"],
    1,
    "NH₄NO₃ kann zu N₂O + 2 H₂O zerfallen (Zersetzung). Je nach Bedingungen auch N₂, NO₂, etc.",
    "schwer",
    ["Ammoniumnitrat", "Zersetzung"]
  ),
  q(
    "ch-pool-15-048",
    KAP[5],
    "Ein Halogenalkan enthält:",
    [
      "nur C und H",
      "C, H und ein Halogen (F, Cl, Br, I)",
      "nur Halogen",
      "eine OH-Gruppe",
      "eine COOH-Gruppe",
    ],
    1,
    "Halogenalkane (Alkylhalogenide): Kohlenwasserstoff mit mindestens einem Halogenatom gebunden an C.",
    "leicht",
    ["Halogenalkan"]
  ),
  q(
    "ch-pool-15-049",
    KAP[0],
    "Die N-Schale (n=4) kann maximal wie viele Elektronen aufnehmen?",
    ["8", "18", "32", "50", "72"],
    2,
    "2n² = 2·16 = 32. Maximale Elektronenzahl in der 4. Schale ist 32.",
    "leicht",
    ["Schale", "Elektronen"]
  ),
  q(
    "ch-pool-15-050",
    KAP[1],
    "Bei welcher Temperatur gefriert Wasser bei Normaldruck?",
    ["−273 °C", "0 °C", "4 °C", "100 °C", "273 °C"],
    1,
    "Bei 1,013 bar gefriert Wasser bei 0 °C (Schmelzpunkt = Gefrierpunkt).",
    "leicht",
    ["Gefrierpunkt", "Wasser"]
  ),
  q(
    "ch-pool-15-051",
    KAP[2],
    "Eine σ-Bindung entsteht durch:",
    [
      "seitliche Überlappung von Orbitalen",
      "Überlappung von Orbitalen entlang der Bindungsachse",
      "nur Ionen",
      "nur in Mehrfachbindungen",
      "nur zwischen gleichen Atomen",
    ],
    1,
    "σ-Bindung: Überlappung entlang der Verbindungslinie (Kern-Kern-Achse). π-Bindung: seitliche Überlappung.",
    "mittel",
    ["Sigma-Bindung"]
  ),
  q(
    "ch-pool-15-052",
    KAP[3],
    "Bei einer exothermen Reaktion:",
    [
      "wird Wärme aufgenommen",
      "wird Wärme abgegeben",
      "bleibt die Enthalpie konstant",
      "ist ΔH immer null",
      "steigt die Aktivierungsenergie",
    ],
    1,
    "Exotherm: Reaktion gibt Wärme ab → ΔH < 0.",
    "leicht",
    ["exotherm", "Enthalpie"]
  ),
  q(
    "ch-pool-15-053",
    KAP[4],
    "Welche Oxidationszahl hat Wasserstoff in den meisten Verbindungen?",
    ["−1", "0", "+1", "+2", "−2"],
    2,
    "In den meisten Verbindungen (Oxide, Säuren, organische Verbindungen) hat H die Oxidationszahl +1. Ausnahme: Hydride −1.",
    "leicht",
    ["Oxidationszahl", "Wasserstoff"]
  ),
  q(
    "ch-pool-15-054",
    KAP[5],
    "Ein Thiol enthält die funktionelle Gruppe:",
    ["−OH", "−SH", "−COOH", "−NH₂", "−O−"],
    1,
    "Thiole: −SH (Schwefelanalogon zum Alkohol −OH). Z. B. Ethanethiol.",
    "mittel",
    ["Thiol", "funktionelle Gruppe"]
  ),
  q(
    "ch-pool-15-055",
    KAP[0],
    "Welche Hauptgruppe enthält die Edelgase?",
    ["Gruppe 1", "Gruppe 2", "Gruppe 16", "Gruppe 17", "Gruppe 18"],
    4,
    "Edelgase: He, Ne, Ar, Kr, Xe, Rn – Gruppe 18 (8 Valenzelektronen, ns² np⁶; He: 1s²).",
    "leicht",
    ["Edelgase", "Periodensystem"]
  ),
  q(
    "ch-pool-15-056",
    KAP[1],
    "Die Verdampfungsenthalpie ist:",
    [
      "die beim Kondensieren freigesetzte Energie",
      "die zum Verdampfen einer Flüssigkeit benötigte Energie",
      "die Schmelzenthalpie",
      "die Reaktionsenthalpie",
      "immer null",
    ],
    1,
    "Verdampfungsenthalpie ΔH_vap: Energie, die zugeführt werden muss, um 1 mol Flüssigkeit zu verdampfen.",
    "mittel",
    ["Verdampfungsenthalpie"]
  ),
  q(
    "ch-pool-15-057",
    KAP[2],
    "Welche Aussage zu Ionenradien trifft zu?",
    [
      "Kationen sind größer als die zugehörigen Atome",
      "Anionen sind größer als die zugehörigen Atome",
      "Ionenradien sind immer gleich den Atomradien",
      "Es gibt keine Radienunterschiede",
      "Na⁺ ist größer als Na",
    ],
    1,
    "Anionen haben mehr Elektronen bei gleicher Kernladung → größerer Radius. Kationen kleiner als Atom.",
    "mittel",
    ["Ionenradius"]
  ),
  q(
    "ch-pool-15-058",
    KAP[3],
    "Ein Katalysator wird bei der Reaktion:",
    [
      "stöchiometrisch verbraucht",
      "nicht verbraucht (wirkt katalytisch)",
      "nur in der Gleichgewichtsgleichung berücksichtigt",
      "immer in der Produktseite geschrieben",
      "nie eingesetzt",
    ],
    1,
    "Katalysator geht unverändert aus der Reaktion hervor; er beschleunigt, wird aber nicht verbraucht.",
    "leicht",
    ["Katalysator"]
  ),
  q(
    "ch-pool-15-059",
    KAP[4],
    "Welches Metall gehört zu den Erdalkalimetallen?",
    ["Natrium", "Kalium", "Magnesium", "Aluminium", "Eisen"],
    2,
    "Erdalkalimetalle: Gruppe 2 – Be, Mg, Ca, Sr, Ba, Ra. Na, K = Alkalimetalle (Gruppe 1).",
    "leicht",
    ["Erdalkalimetalle", "Magnesium"]
  ),
  q(
    "ch-pool-15-060",
    KAP[5],
    "Die Cannizzaro-Reaktion betrifft:",
    ["Alkene", "Aldehyde ohne α-H (z. B. Methanal)", "Carbonsäuren", "Alkane", "Ester"],
    1,
    "Cannizzaro: Aldehyde ohne α-Wasserstoff disproportionieren zu Alkohol und Carbonsäure (in starker Base).",
    "schwer",
    ["Cannizzaro", "Aldehyd"]
  ),
];
