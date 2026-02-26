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
    "ch-pool-12-002",
    KAP[1],
    "Was beschreibt das Gesetz von Charles?",
    [
      "p·V = const bei T = const",
      "V/T = const bei p = const",
      "p/T = const bei V = const",
      "V·n = const",
      "p+V = const",
    ],
    1,
    "Charles: Bei konstantem Druck ist das Volumen proportional zur Temperatur (in Kelvin): V/T = const.",
    "mittel",
    ["Gasgesetze", "Charles"]
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
    "ch-pool-12-004",
    KAP[3],
    "Was ist ein Reduktionsmittel?",
    [
      "Ein Stoff, der Elektronen aufnimmt",
      "Ein Stoff, der Elektronen abgibt",
      "Ein Katalysator",
      "Ein Säure-Base-Partner",
      "Ein Komplexbildner",
    ],
    1,
    "Reduktionsmittel gibt Elektronen ab (wird oxidiert). Oxidationsmittel nimmt Elektronen auf.",
    "mittel",
    ["Redox", "Reduktionsmittel"]
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
    "ch-pool-12-006",
    KAP[5],
    "Welche Summenformel haben Alkene?",
    ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙHₙ", "CₙH₂ₙO"],
    1,
    "Alkene: mindestens eine C=C-Doppelbindung, CₙH₂ₙ. Alkane: CₙH₂ₙ₊₂; Alkine: CₙH₂ₙ₋₂.",
    "leicht",
    ["Alkene", "Summenformel"]
  ),
  q(
    "ch-pool-12-007",
    KAP[0],
    "Die Nebenquantenzahl l bestimmt:",
    [
      "die Schale",
      "die Form des Orbitals (s, p, d, f)",
      "den Spin",
      "die Protonenzahl",
      "die Masse",
    ],
    1,
    "l = 0 → s, l = 1 → p, l = 2 → d, l = 3 → f. n = Hauptquantenzahl (Schale/Energie).",
    "mittel",
    ["Quantenzahlen", "Orbital"]
  ),
  q(
    "ch-pool-12-008",
    KAP[1],
    "Bei welcher Temperatur hat Wasser seine maximale Dichte?",
    ["0 °C", "4 °C", "10 °C", "25 °C", "100 °C"],
    1,
    "Dichteanomalie des Wassers: Dichtemaximum bei 4 °C.",
    "leicht",
    ["Wasser", "Dichte"]
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
    "ch-pool-12-010",
    KAP[3],
    "Bei exothermer Reaktion ist ΔH:",
    ["positiv", "negativ", "null", "immer gleich ΔG", "unbestimmt"],
    1,
    "Exotherm = Wärme wird abgegeben → ΔH < 0. Endotherm → ΔH > 0.",
    "leicht",
    ["Enthalpie"]
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
    "ch-pool-12-013",
    KAP[0],
    "Das Mol ist die Einheit für:",
    ["Masse", "Stoffmenge", "Konzentration", "Druck", "Temperatur"],
    1,
    "Ein Mol (mol) ist die SI-Basiseinheit der Stoffmenge; 1 mol enthält N_A Teilchen.",
    "leicht",
    ["Mol", "Stoffmenge"]
  ),
  q(
    "ch-pool-12-014",
    KAP[1],
    "Resublimieren ist der Übergang:",
    [
      "flüssig → gasförmig",
      "gasförmig → flüssig",
      "fest → gasförmig",
      "gasförmig → fest",
      "flüssig → fest",
    ],
    3,
    "Resublimieren = gasförmig → fest (z. B. Iod-Dampf zu Iod-Kristallen). Sublimieren = fest → gasförmig.",
    "leicht",
    ["Phasenübergang"]
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
    "ch-pool-12-016",
    KAP[3],
    "Die Aktivierungsenergie einer Reaktion:",
    [
      "wird vom Katalysator nicht verändert",
      "wird vom Katalysator herabgesetzt",
      "bestimmt die Gleichgewichtslage",
      "ist immer negativ",
      "ist unabhängig von der Temperatur",
    ],
    1,
    "Ein Katalysator senkt die Aktivierungsenergie und beschleunigt so die Reaktion; die Gleichgewichtslage ändert sich nicht.",
    "mittel",
    ["Aktivierungsenergie", "Katalysator"]
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
    "ch-pool-12-020",
    KAP[1],
    "Die ideale Gasgleichung pV = nRT gilt in guter Näherung bei:",
    [
      "hohem Druck, tiefer Temperatur",
      "niedrigem Druck, hoher Temperatur",
      "immer",
      "nur für Edelgase",
      "nur für O₂",
    ],
    1,
    "Reale Gase weichen bei hohem Druck und tiefer Temperatur ab; bei niedrigem p und hohem T verhalten sie sich annähernd ideal.",
    "mittel",
    ["ideales Gas"]
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
    "ch-pool-12-022",
    KAP[3],
    "Bei der Neutralisation reagieren:",
    [
      "Säure + Base → Salz + Wasser",
      "Oxidationsmittel + Reduktionsmittel",
      "zwei Alkane",
      "Alken + Halogen",
      "zwei Basen",
    ],
    0,
    "Neutralisation: Säure + Base → Salz + Wasser (Protonenübertragung).",
    "leicht",
    ["Neutralisation"]
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
    "ch-pool-12-024",
    KAP[5],
    "Benzol (C₆H₆) ist ein:",
    ["Alkan", "Alken", "Alkin", "Aromat", "Alkohol"],
    3,
    "Benzol hat 6 π-Elektronen im Ring (Hückel-Regel 4n+2, n=1) → aromatisch.",
    "mittel",
    ["Benzol", "Aromat"]
  ),
  q(
    "ch-pool-12-025",
    KAP[0],
    "Die Ordnungszahl Z eines Elements entspricht:",
    [
      "der Neutronenzahl",
      "der Protonenzahl im Kern",
      "der Massenzahl",
      "der Elektronenzahl in der äußersten Schale",
      "der Atommasse",
    ],
    1,
    "Z = Anzahl der Protonen im Kern; sie definiert das Element. In neutralen Atomen auch Anzahl der Elektronen.",
    "leicht",
    ["Ordnungszahl"]
  ),
  q(
    "ch-pool-12-026",
    KAP[1],
    "Nach Avogadro enthalten gleiche Volumina idealer Gase bei gleichem p und T:",
    [
      "unterschiedliche Teilchenzahlen",
      "die gleiche Anzahl von Teilchen",
      "nur Edelgase",
      "keine Teilchen",
      "nur Moleküle",
    ],
    1,
    "Avogadro: Gleiche Stoffmenge n → gleiche Teilchenzahl N = n·N_A; bei gleichem p, T gleiches Volumen.",
    "mittel",
    ["Avogadro"]
  ),
  q(
    "ch-pool-12-027",
    KAP[2],
    "Die Gitterenergie ist:",
    [
      "die Schmelzenergie",
      "die bei der Bildung des Ionengitters aus gasförmigen Ionen freigesetzte Energie",
      "unabhängig von den Ionenradien",
      "bei NaCl größer als bei MgO",
      "die Hydratationsenergie",
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
      "auf die Eduktseite",
      "auf die Produktseite (weniger Mol)",
      "nicht",
      "nur bei Katalysator",
      "zu niedrigerer Temperatur",
    ],
    1,
    "Druckerhöhung begünstigt die Seite mit weniger Gasmol. Rechts: 2 Mol NH₃; links: 4 Mol → Verschiebung nach rechts.",
    "mittel",
    ["Le Chatelier", "Druck"]
  ),
  q(
    "ch-pool-12-029",
    KAP[4],
    "Welche Säure ist eine schwache Säure?",
    ["HCl", "HNO₃", "Essigsäure", "H₂SO₄ (1. Stufe)", "HClO₄"],
    2,
    "Essigsäure (CH₃COOH) ist eine schwache Säure; in Wasser nur teilweise dissoziiert. HCl, HNO₃, HClO₄ sind stark.",
    "mittel",
    ["Säuren", "schwach"]
  ),
  q(
    "ch-pool-12-030",
    KAP[5],
    "Die Markovnikov-Regel betrifft:",
    [
      "radikalische Substitution",
      "Addition von HX an unsymmetrische Alkene",
      "Esterbildung",
      "Neutralisation",
      "Oxidation",
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
      "ein Proton",
      "ein Lichtquant / Quant elektromagnetischer Energie",
      "ein Neutron",
      "ein Elektron",
      "ein Atom",
    ],
    1,
    "Photon = Lichtquant, Träger der elektromagnetischen Wechselwirkung, E = hν.",
    "leicht",
    ["Photon", "Licht"]
  ),
  q(
    "ch-pool-12-032",
    KAP[1],
    "Schmelzen ist der Übergang:",
    [
      "flüssig → gasförmig",
      "fest → flüssig",
      "gasförmig → flüssig",
      "fest → gasförmig",
      "flüssig → fest",
    ],
    1,
    "Schmelzen = fest → flüssig. Erstarren = flüssig → fest.",
    "leicht",
    ["Schmelzen", "Phasenübergang"]
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
    "ch-pool-12-037",
    KAP[0],
    "Isotope desselben Elements haben:",
    [
      "verschiedene Ordnungszahlen",
      "gleiche Protonenzahl, verschiedene Neutronenzahl",
      "gleiche Massenzahl",
      "keine Neutronen",
      "verschiedene Elektronenzahl",
    ],
    1,
    "Isotope: gleiche Z (Protonenzahl), verschiedene N (Neutronenzahl) → verschiedene Massenzahl A.",
    "leicht",
    ["Isotop"]
  ),
  q(
    "ch-pool-12-038",
    KAP[1],
    "Das molare Volumen eines idealen Gases bei 0 °C und 1,013 bar beträgt etwa:",
    ["22,4 L/mol", "8,314 L/mol", "1 L/mol", "0,082 L/mol", "6,022 L/mol"],
    0,
    "Unter Standardbedingungen (STP): V_m ≈ 22,4 L/mol für ideale Gase.",
    "leicht",
    ["molares Volumen", "STP"]
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
      "hängt nicht von der Temperatur ab",
      "ist bei gegebener Temperatur für eine Reaktion konstant",
      "wird durch einen Katalysator geändert",
      "ist immer 1",
      "hängt vom Druck ab",
    ],
    1,
    "K ist temperaturabhängig, aber bei fester Temperatur konstant. Katalysator und Druck ändern K nicht.",
    "mittel",
    ["Gleichgewichtskonstante"]
  ),
  q(
    "ch-pool-12-041",
    KAP[4],
    "Welcher Stoff ist ein Ampholyt?",
    ["nur HCl", "nur NaOH", "HCO₃⁻ (Hydrogencarbonat)", "NaCl", "O₂"],
    2,
    "Ampholyt kann sowohl als Säure als auch als Base wirken. HCO₃⁻ kann H⁺ abgeben (→ CO₃²⁻) oder aufnehmen (→ H₂CO₃).",
    "mittel",
    ["Ampholyt", "Hydrogencarbonat"]
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
    "ch-pool-12-043",
    KAP[0],
    "Die Anzahl der Protonen im Kern eines Atoms bestimmt:",
    [
      "die Massenzahl",
      "das Element (Ordnungszahl Z)",
      "nur die Neutronenzahl",
      "die Schalenstruktur",
      "die Isotopie",
    ],
    1,
    "Ordnungszahl Z = Protonenzahl definiert das Element. Massenzahl A = Z + N.",
    "leicht",
    ["Ordnungszahl", "Element"]
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
    "ch-pool-12-045",
    KAP[2],
    "Welche Aussage zur Oktettregel trifft zu?",
    [
      "Alle Atome haben 8 Außenelektronen",
      "Viele Atome streben 8 Außenelektronen (Edelgaskonfiguration) an",
      "Es gibt keine Ausnahmen",
      "Wasserstoff hat 8 Außenelektronen",
      "Metalle haben immer 8",
    ],
    1,
    "Oktettregel: Viele Atome erreichen 8 Außenelektronen. Ausnahmen: H (2), B, erweiterte Oktette.",
    "leicht",
    ["Oktettregel"]
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
      "ändert den pH stark bei Zugabe wenig Säure oder Base",
      "hält den pH weitgehend konstant bei Zugabe von Säure oder Base",
      "hat immer pH 7",
      "enthält keine Säure oder Base",
      "ist immer stark sauer",
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
    "ch-pool-12-050",
    KAP[1],
    "Verdampfen ist der Übergang:",
    [
      "fest → flüssig",
      "flüssig → gasförmig",
      "gasförmig → flüssig",
      "fest → gasförmig",
      "gasförmig → fest",
    ],
    1,
    "Verdampfen (bzw. Sieden) = flüssig → gasförmig. Kondensieren = gasförmig → flüssig.",
    "leicht",
    ["Verdampfen"]
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
    "ch-pool-12-052",
    KAP[3],
    "Ein Inhibitor:",
    [
      "beschleunigt eine Reaktion",
      "verlangsamt oder verhindert eine Reaktion",
      "verschiebt das Gleichgewicht",
      "ist ein Katalysator",
      "ändert ΔH",
    ],
    1,
    "Inhibitor hemmt eine Reaktion (z. B. Enzymhemmung). Katalysator beschleunigt.",
    "leicht",
    ["Inhibitor"]
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
  q(
    "ch-pool-12-054",
    KAP[5],
    "Eine Aldehydgruppe hat die Formel:",
    ["−COOH", "−OH", "−CHO", "−NH₂", "−O−"],
    2,
    "Aldehyd: −CHO (Carbonyl am Ende der Kette). Carbonsäure: −COOH, Alkohol: −OH.",
    "leicht",
    ["Aldehyd", "funktionelle Gruppe"]
  ),
  q(
    "ch-pool-12-055",
    KAP[0],
    "Die Massenzahl A ist:",
    [
      "gleich der Ordnungszahl",
      "Protonen + Neutronen",
      "nur Neutronen",
      "Elektronenzahl",
      "immer 12",
    ],
    1,
    "A = Massenzahl = Z + N (Protonen + Neutronen). Nuklid: ᴬ_Z X.",
    "leicht",
    ["Massenzahl"]
  ),
  q(
    "ch-pool-12-056",
    KAP[1],
    "Welche Aussage zu idealen Gasen ist richtig?",
    [
      "Gasteilchen haben ein großes Eigenvolumen",
      "Es gibt starke Anziehungskräfte zwischen den Teilchen",
      "pV = nRT gilt in guter Näherung bei niedrigem Druck und hoher Temperatur",
      "Reale Gase weichen nie ab",
      "Ideale Gase sind immer flüssig",
    ],
    2,
    "Ideales Gas: Modell mit keinem Eigenvolumen, keine Wechselwirkung; pV = nRT gilt bei niedrigem p und hohem T annähernd.",
    "mittel",
    ["ideales Gas"]
  ),
  q(
    "ch-pool-12-057",
    KAP[2],
    "Eine metallische Bindung entsteht durch:",
    [
      "Elektronenpaare zwischen Atomen",
      "delokalisierte Valenzelektronen (Elektronengas)",
      "reine Ionen",
      "nur Wasserstoffbrücken",
      "nur van-der-Waals",
    ],
    1,
    "Metallbindung: positive Atomrümpfe in einem „See“ delokalisierter Valenzelektronen → Leitfähigkeit, Verformbarkeit.",
    "mittel",
    ["Metallbindung"]
  ),
  q(
    "ch-pool-12-058",
    KAP[3],
    "Die Reaktionsgeschwindigkeit kann erhöht werden durch:",
    [
      "nur Verdünnung",
      "Temperaturerhöhung, Katalysator, Konzentrationserhöhung",
      "nur Druckerniedrigung",
      "nur Abkühlung",
      "nur Entfernen von Edukten",
    ],
    1,
    "Höhere Temperatur, Katalysator und oft höhere Konzentration erhöhen die Reaktionsgeschwindigkeit.",
    "leicht",
    ["Reaktionsgeschwindigkeit"]
  ),
  q(
    "ch-pool-12-059",
    KAP[4],
    "Welches Element ist ein Halogen?",
    ["Natrium", "Calcium", "Chlor", "Stickstoff", "Kohlenstoff"],
    2,
    "Halogene: Gruppe 17 – F, Cl, Br, I, At. Na (1), Ca (2), N (15), C (14).",
    "leicht",
    ["Halogen", "Periodensystem"]
  ),
  q(
    "ch-pool-12-060",
    KAP[5],
    "Die radikalische Substitution ist typisch für:",
    ["Alkene", "Alkine", "Alkane", "Aromaten", "Carbonsäuren"],
    2,
    "Alkane reagieren mit Halogenen (z. B. Cl₂) unter UV-Licht durch radikalische Substitution (H durch Halogen ersetzt).",
    "mittel",
    ["radikalische Substitution", "Alkane"]
  ),
];
