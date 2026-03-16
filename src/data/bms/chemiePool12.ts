/**
 * Chemie BMS Pool 12 — 60 Fragen im offiziellen MedAT-Stil (Typ A).
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

export const chemiePool12: Question[] = [
  q(
    "ch-pool-12-001",
    KAP[0],
    "Wie viele Neutronen hat das Isotop ¹⁴C?",
    ["6", "7", "8", "14", "12"],
    2,
    "¹⁴C: Massenzahl A=14, Ordnungszahl Z=6 (Kohlenstoff). Neutronen N = A−Z = 8.",
    "leicht",
    ["Isotop", "Atombau"]
  ),
  q(
    "ch-pool-12-003",
    KAP[2],
    "Welche Verbindung enthält vorwiegend Ionenbindungen?",
    ["CO₂", "H₂O", "MgO", "CH₄", "NH₃"],
    2,
    "MgO: Metall (Mg) + Nichtmetall (O), große EN-Differenz → Ionenbindung. Die anderen sind kovalent.",
    "leicht",
    ["Ionenbindung"]
  ),
  q(
    "ch-pool-12-005",
    KAP[4],
    "Welcher pH-Wert entspricht [H₃O⁺] = 10⁻¹¹ mol/L?",
    ["11", "3", "−11", "14", "7"],
    0,
    "pH = −log₁₀(10⁻¹¹) = 11. Die Lösung ist basisch.",
    "leicht",
    ["pH"]
  ),
  q(
    "ch-pool-12-007",
    KAP[0],
    "Die Nebenquantenzahl l bestimmt:",
    [
      "die Schale bzw. das Hauptenergieniveau (Hauptquantenzahl n)",
      "die Form des Orbitals (s, p, d, f)",
      "den Spin des Elektrons (Eigenrotation, ±½)",
      "die Protonenzahl im Kern (bestimmt das Element)",
      "die Masse des Atoms (Summe von Protonen und Neutronen)",
    ],
    1,
    "l = 0 → s, l = 1 → p, l = 2 → d, l = 3 → f. n = Hauptquantenzahl (Schale/Energie).",
    "mittel",
    ["Quantenzahlen", "Orbital"]
  ),
  q(
    "ch-pool-12-009",
    KAP[2],
    "Wasserstoffbrücken treten typischerweise auf zwischen:",
    ["nur C und H", "O und H in O−H···O", "nur in Ionen", "nur in Metallen", "nur in Edelgasen"],
    1,
    "Wasserstoffbrücken: H an elektronegativem Atom (O, N, F) gebunden, Wechselwirkung mit anderem O/N/F.",
    "mittel",
    ["Wasserstoffbrücken"]
  ),
  q(
    "ch-pool-12-011",
    KAP[4],
    "Welches Gas entsteht bei der Reaktion von Carbonat mit Säure?",
    ["O₂", "N₂", "CO₂", "H₂", "Cl₂"],
    2,
    "Carbonat + Säure → CO₂ + H₂O + Salz. Kohlendioxid entweicht als Gas.",
    "leicht",
    ["Carbonat", "Säure"]
  ),
  q(
    "ch-pool-12-012",
    KAP[5],
    "Ein tertiärer Alkohol hat die OH-Gruppe an einem C-Atom mit:",
    [
      "einem C-Nachbarn",
      "zwei C-Nachbarn",
      "drei C-Nachbarn",
      "keinem C-Nachbarn",
      "einem aromatischen Ring",
    ],
    2,
    "Tertiär: C−OH mit drei C-Nachbarn. Primär: 1, sekundär: 2.",
    "mittel",
    ["Alkohol", "tertiär"]
  ),
  q(
    "ch-pool-12-015",
    KAP[2],
    "Welche Elektronegativitätsdifferenz deutet auf eine Ionenbindung hin?",
    ["≈ 0", "klein (< 0,5)", "mittel (0,5–1,7)", "groß (> ca. 1,7)", "immer 2"],
    3,
    "Große EN-Differenz → Elektronenübergang → Ionenbindung. Ähnliche EN → kovalente Bindung.",
    "mittel",
    ["Elektronegativität", "Ionenbindung"]
  ),
  q(
    "ch-pool-12-017",
    KAP[4],
    "Welche Base ist eine starke Base in wässriger Lösung?",
    ["Ammoniak", "Natriumhydroxid", "Kohlensäure", "Essigsäure", "Wasser"],
    1,
    "NaOH (Natronlauge) ist eine starke Base; in Wasser vollständig dissoziiert zu Na⁺ und OH⁻.",
    "leicht",
    ["Base", "NaOH"]
  ),
  q(
    "ch-pool-12-018",
    KAP[5],
    "Der Bromwassertest (Entfärbung) weist nach:",
    ["Alkane", "Alkene oder Alkine", "Alkohole", "Carbonsäuren", "Ether"],
    1,
    "Brom addiert an C=C oder C≡C; Bromwasser entfärbt sich. Alkane reagieren unter UV (radikalische Substitution).",
    "mittel",
    ["Bromwassertest", "Alkene"]
  ),
  q(
    "ch-pool-12-019",
    KAP[0],
    "Wie viele Elektronen passen maximal in die M-Schale (n=3)?",
    ["2", "8", "18", "32", "50"],
    2,
    "Maximale Elektronenzahl pro Schale: 2n². n=3 → 2·9 = 18.",
    "leicht",
    ["Schale", "Atombau"]
  ),
  q(
    "ch-pool-12-021",
    KAP[2],
    "Welche Bindung ist am ehesten unpolar?",
    ["C−F", "C−O", "C−H", "O−H", "N−H"],
    2,
    "C−H hat die kleinste Elektronegativitätsdifferenz unter den Optionen; C und H sind relativ ähnlich.",
    "mittel",
    ["Polare Bindung"]
  ),
  q(
    "ch-pool-12-023",
    KAP[4],
    "Der pOH einer Lösung mit pH = 4 (25 °C) beträgt:",
    ["4", "10", "7", "−4", "14"],
    1,
    "pH + pOH = 14 (25 °C). pOH = 14 − 4 = 10.",
    "leicht",
    ["pH", "pOH"]
  ),
  q(
    "ch-pool-12-027",
    KAP[2],
    "Die Gitterenergie ist:",
    [
      "die Schmelzenergie, die beim Phasenübergang fest→flüssig nötig ist",
      "die bei der Bildung des Ionengitters aus gasförmigen Ionen freigesetzte Energie",
      "unabhängig von den Ionenradien und den Ladungen der Ionen",
      "bei NaCl größer als bei MgO, da Na⁺ größer als Mg²⁺ ist",
      "die Hydratationsenergie, die beim Lösen in Wasser frei wird",
    ],
    1,
    "Gitterenergie = Energie bei Bildung des Kristalls aus gasförmigen Ionen (bzw. für die Trennung). Hängt von Ladung und Radien ab.",
    "mittel",
    ["Gitterenergie"]
  ),
  q(
    "ch-pool-12-028",
    KAP[3],
    "Le Chatelier: Bei Druckerhöhung verschiebt sich das Gleichgewicht N₂ + 3 H₂ ⇌ 2 NH₃:",
    [
      "auf die Eduktseite (dort befinden sich mehr Gasmole)",
      "auf die Produktseite (weniger Mol)",
      "nicht, da Druck keinen Einfluss auf Gasreaktionen hat",
      "nur bei Katalysator, der die Druckempfindlichkeit erhöht",
      "zu niedrigerer Temperatur, weil die Reaktion exotherm ist",
    ],
    1,
    "Druckerhöhung begünstigt die Seite mit weniger Gasmol. Rechts: 2 Mol NH₃; links: 4 Mol → Verschiebung nach rechts.",
    "mittel",
    ["Le Chatelier", "Druck"]
  ),
  q(
    "ch-pool-12-030",
    KAP[5],
    "Die Markovnikov-Regel betrifft:",
    [
      "radikalische Substitution an gesättigten Kohlenwasserstoffen",
      "Addition von HX an unsymmetrische Alkene",
      "Esterbildung aus Carbonsäure und Alkohol (Kondensation)",
      "Neutralisation von Säure und Base zu Salz und Wasser",
      "Oxidation eines Alkohols zum Aldehyd oder zur Carbonsäure",
    ],
    1,
    "Markovnikov: Bei Addition von HX an ein unsymmetrisches Alken geht H an das C-Atom mit mehr H-Atomen.",
    "mittel",
    ["Markovnikov", "Alkene"]
  ),
  q(
    "ch-pool-12-031",
    KAP[0],
    "Ein Photon ist:",
    [
      "ein Proton (positiv geladenes Teilchen im Atomkern)",
      "ein Lichtquant / Quant elektromagnetischer Energie",
      "ein Neutron (ungeladenes Teilchen im Atomkern)",
      "ein Elektron (negativ geladenes Hüllteilchen)",
      "ein Atom (kleinste chemische Einheit eines Elements)",
    ],
    1,
    "Photon = Lichtquant, Träger der elektromagnetischen Wechselwirkung, E = hν.",
    "leicht",
    ["Photon", "Licht"]
  ),
  q(
    "ch-pool-12-033",
    KAP[2],
    "In einem NaCl-Kristall sind die Ionen:",
    [
      "frei beweglich",
      "in einem Gitter fixiert",
      "nur Na⁺ beweglich",
      "nur Cl⁻ beweglich",
      "kovalent gebunden",
    ],
    1,
    "Im Festkörper sind die Ionen im Gitter ortsfest; Leitfähigkeit entsteht in Schmelze oder Lösung durch bewegliche Ionen.",
    "leicht",
    ["Ionenkristall", "NaCl"]
  ),
  q(
    "ch-pool-12-034",
    KAP[3],
    "Eine Zersetzungsreaktion liegt vor bei:",
    [
      "A + B → C",
      "2 H₂O₂ → 2 H₂O + O₂",
      "A + B → C + D (Doppelumsatz)",
      "Säure + Base → Salz + H₂O",
      "C → A + B nur theoretisch",
    ],
    1,
    "Zersetzung: Eine Verbindung zerfällt in einfachere Stoffe. H₂O₂ → H₂O + O₂ (katalysiert z. B. durch Katalase).",
    "leicht",
    ["Zersetzung", "Reaktionstyp"]
  ),
  q(
    "ch-pool-12-035",
    KAP[4],
    "Lewis-Säuren sind:",
    [
      "Protonendonatoren",
      "Elektronenpaarakzeptoren",
      "Elektronendonatoren",
      "immer H⁺",
      "immer OH⁻",
    ],
    1,
    "Lewis-Säure = Elektronenpaarakzeptor (z. B. BF₃, H⁺). Lewis-Base = Elektronenpaardonor (z. B. NH₃).",
    "mittel",
    ["Lewis-Säure", "Lewis-Base"]
  ),
  q(
    "ch-pool-12-036",
    KAP[5],
    "Ethanol enthält die funktionelle Gruppe:",
    ["−COOH", "−OH (Hydroxyl)", "−CHO", "−NH₂", "−O−"],
    1,
    "Ethanol = C₂H₅OH, Alkohol mit Hydroxylgruppe −OH. Carbonsäure = −COOH, Aldehyd = −CHO.",
    "leicht",
    ["Alkohol", "Ethanol"]
  ),
  q(
    "ch-pool-12-039",
    KAP[2],
    "Van-der-Waals-Kräfte sind:",
    [
      "stärker als Wasserstoffbrücken",
      "stärker als kovalente Bindungen",
      "schwache zwischenmolekulare Kräfte",
      "nur zwischen Ionen",
      "nur in Festkörpern",
    ],
    2,
    "Van-der-Waals-Kräfte (London-Kräfte etc.) sind schwache zwischenmolekulare Wechselwirkungen; sie erklären z. B. Siedepunkte von Alkanen.",
    "mittel",
    ["van-der-Waals"]
  ),
  q(
    "ch-pool-12-040",
    KAP[3],
    "Die Gleichgewichtskonstante K:",
    [
      "hängt nicht von der Temperatur ab, sondern nur vom Druck",
      "ist bei gegebener Temperatur für eine Reaktion konstant",
      "wird durch einen Katalysator geändert und verschoben",
      "ist immer 1, unabhängig von Reaktion und Bedingungen",
      "hängt vom Druck ab, aber nicht von der Konzentration",
    ],
    1,
    "K ist temperaturabhängig, aber bei fester Temperatur konstant. Katalysator und Druck ändern K nicht.",
    "mittel",
    ["Gleichgewichtskonstante"]
  ),
  q(
    "ch-pool-12-042",
    KAP[5],
    "Ein Ester entsteht typischerweise aus:",
    ["Alkan + Alken", "Carbonsäure + Alkohol", "zwei Alkoholen", "Alken + Halogen", "Amin + Säure"],
    1,
    "Veresterung: Carbonsäure + Alkohol ⇌ Ester + Wasser (katalysiert durch Säure).",
    "mittel",
    ["Ester", "Veresterung"]
  ),
  q(
    "ch-pool-12-044",
    KAP[1],
    "Nach dem Gesetz von Gay-Lussac gilt bei konstantem Volumen:",
    ["p/T = const", "V/T = const", "p·V = const", "n/V = const", "p+V = const"],
    0,
    "Gay-Lussac: Bei konstantem Volumen ist der Druck proportional zur absoluten Temperatur: p/T = const.",
    "mittel",
    ["Gay-Lussac", "Gasgesetze"]
  ),
  q(
    "ch-pool-12-046",
    KAP[3],
    "Bei der Reaktion 2 H₂ + O₂ → 2 H₂O handelt es sich um:",
    ["Zersetzung", "Neutralisation", "Synthese (Vereinigung)", "Metathese", "Substitution"],
    2,
    "Synthese: zwei oder mehrere Edukte bilden ein Produkt. Hier: Wasserstoff + Sauerstoff → Wasser.",
    "leicht",
    ["Synthese", "Reaktionstyp"]
  ),
  q(
    "ch-pool-12-047",
    KAP[4],
    "Eine Pufferlösung:",
    [
      "ändert den pH stark bei Zugabe von wenig Säure oder Base",
      "hält den pH weitgehend konstant bei Zugabe von Säure oder Base",
      "hat immer pH 7 und kann nicht davon abweichen",
      "enthält weder eine Säure noch eine Base als Bestandteil",
      "ist immer stark sauer mit einem pH-Wert unter 3",
    ],
    1,
    "Puffer enthalten ein konjugiertes Säure-Base-Paar und puffern Zugaben von H⁺ oder OH⁻ ab; der pH ändert sich nur wenig.",
    "mittel",
    ["Puffer"]
  ),
  q(
    "ch-pool-12-048",
    KAP[5],
    "Welche Verbindung ist ein Alkin?",
    ["Ethan", "Ethen", "Ethin", "Benzol", "Ethanol"],
    2,
    "Ethin (Acetylen) C₂H₂ hat eine C≡C-Dreifachbindung → Alkin. Ethan = Alkan, Ethen = Alken.",
    "leicht",
    ["Alkin", "Ethin"]
  ),
  q(
    "ch-pool-12-049",
    KAP[0],
    "In welcher Gruppe des PSE steht Sauerstoff?",
    ["1", "2", "14", "16", "18"],
    3,
    "Sauerstoff (O) steht in Gruppe 16 (Chalkogene). Periode 2.",
    "leicht",
    ["Periodensystem", "Sauerstoff"]
  ),
  q(
    "ch-pool-12-051",
    KAP[2],
    "Welche Verbindung bildet Wasserstoffbrücken aus?",
    ["CH₄", "NH₃", "Benzol", "n-Hexan", "CO₂"],
    1,
    "NH₃ hat N−H-Bindungen und ein freies Elektronenpaar → Wasserstoffbrücken. CH₄, Benzol, Hexan, CO₂ nicht in gleicher Weise.",
    "mittel",
    ["Wasserstoffbrücken", "Ammoniak"]
  ),
  q(
    "ch-pool-12-053",
    KAP[4],
    "Welche Oxidationszahl hat Stickstoff in NO₃⁻?",
    ["−3", "0", "+3", "+5", "+7"],
    3,
    "In NO₃⁻: O jeweils −2, Summe −1 → N + 3·(−2) = −1 ⇒ N = +5.",
    "mittel",
    ["Oxidationszahl", "Nitrat"]
  ),
];
