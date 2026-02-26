/**
 * Chemie BMS Pool 18 — 60 Fragen im offiziellen MedAT-Stil (Typ A).
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

export const chemiePool18: Question[] = [
  q(
    "ch-pool-18-001",
    KAP[0],
    "Wie viele Neutronen hat ¹²C?",
    ["4", "5", "6", "12", "8"],
    2,
    "¹²C: A=12, Z=6. N = A−Z = 6 Neutronen.",
    "leicht",
    ["Kohlenstoff", "Neutronen"]
  ),
  q(
    "ch-pool-18-002",
    KAP[1],
    "Welche Größe bleibt bei isothermer Expansion eines idealen Gases konstant?",
    ["Volumen", "Druck", "Temperatur", "Stoffmenge", "Dichte"],
    2,
    "Isotherm = konstante Temperatur T. Bei Expansion ändern sich V und p (Boyle).",
    "mittel",
    ["isotherm", "ideales Gas"]
  ),
  q(
    "ch-pool-18-003",
    KAP[2],
    "Welche Verbindung enthält koordinative Bindungen?",
    ["NaCl", "NH₄⁺ (Ammoniumion)", "CH₄", "O₂", "Cl₂"],
    1,
    "Im NH₄⁺ gibt N ein Elektronenpaar an H⁺ ab → koordinative Bindung (Lewis Base → Lewis Säure).",
    "mittel",
    ["Koordinationsbindung", "Ammonium"]
  ),
  q(
    "ch-pool-18-004",
    KAP[3],
    "Was passiert mit der Oxidationszahl eines Atoms bei der Oxidation?",
    ["Sie sinkt", "Sie steigt", "Sie bleibt konstant", "Sie wird null", "Sie wird immer +1"],
    1,
    "Oxidation = Abgabe von Elektronen → Oxidationszahl steigt. Reduktion → Oxidationszahl sinkt.",
    "leicht",
    ["Oxidation", "Oxidationszahl"]
  ),
  q(
    "ch-pool-18-005",
    KAP[4],
    "Welcher pH entspricht [OH⁻] = 10⁻⁴ mol/L bei 25 °C?",
    ["4", "10", "7", "14", "−4"],
    1,
    "pOH = 4 → pH = 14 − 4 = 10. Basische Lösung.",
    "leicht",
    ["pH", "pOH"]
  ),
  q(
    "ch-pool-18-006",
    KAP[5],
    "Octan (C₈H₁₈) ist ein:",
    ["Alken", "Alkin", "Alkan", "Alkohol", "Aromat"],
    2,
    "C₈H₁₈ = CₙH₂ₙ₊₂ → Alkan (Benzinbestandteil).",
    "leicht",
    ["Alkane", "Octan"]
  ),
  q(
    "ch-pool-18-007",
    KAP[0],
    "Das Pauli-Prinzip besagt unter anderem:",
    [
      "dass alle Elektronen gleichen Spin haben",
      "dass zwei Elektronen in einem Orbital unterschiedlichen Spin haben müssen",
      "dass es keine Orbitale gibt",
      "dass die Schale immer voll ist",
      "dass nur zwei Orbitale pro Schale existieren",
    ],
    1,
    "Pauli: In einem Orbital können höchstens 2 Elektronen mit entgegengesetztem Spin sein.",
    "mittel",
    ["Pauli-Prinzip"]
  ),
  q(
    "ch-pool-18-008",
    KAP[1],
    "Die Siedepunktserhöhung bei Lösungen hängt ab von:",
    [
      "nur der Art des Lösungsmittels",
      "der Molalität des gelösten Stoffs (kolligative Eigenschaft)",
      "nur der Dichte",
      "nur dem Druck",
      "der Farbe",
    ],
    1,
    "ΔT_sied = K_eb · b (K_eb = ebullioskopische Konstante, b = Molalität). Kolligativ = abhängig von der Teilchenzahl.",
    "mittel",
    ["Siedepunktserhöhung", "kolligativ"]
  ),
  q(
    "ch-pool-18-009",
    KAP[2],
    "Welche Aussage zu Dipol-Dipol-Wechselwirkungen trifft zu?",
    [
      "Sie wirken nur zwischen Ionen",
      "Sie wirken zwischen polaren Molekülen",
      "Sie sind stärker als kovalente Bindungen",
      "Sie treten nur in Festkörpern auf",
      "Sie sind unabhängig von der Molekülform",
    ],
    1,
    "Polare Moleküle haben permanente Dipole; die Wechselwirkung zwischen ihnen heißt Dipol-Dipol.",
    "mittel",
    ["Dipol-Dipol"]
  ),
  q(
    "ch-pool-18-010",
    KAP[3],
    "Die Reaktionswärme bei konstantem Druck entspricht:",
    [
      "der Aktivierungsenergie",
      "der Reaktionsenthalpie ΔH",
      "nur der Entropie",
      "der Geschwindigkeitskonstante",
      "der Gleichgewichtskonstante",
    ],
    1,
    "Bei konstantem Druck: umgesetzte Wärme = ΔH (Reaktionsenthalpie).",
    "mittel",
    ["Reaktionsenthalpie"]
  ),
  q(
    "ch-pool-18-011",
    KAP[4],
    "Welches Oxid löst sich in Wasser unter stark alkalischer Reaktion?",
    ["CO₂", "SO₂", "Na₂O", "SiO₂", "CuO"],
    2,
    "Na₂O + H₂O → 2 NaOH (starke Base). Metalloxide der Alkalimetalle ergeben Laugen.",
    "mittel",
    ["Oxid", "Base"]
  ),
  q(
    "ch-pool-18-012",
    KAP[5],
    "Welche Verbindung ist ein Amin?",
    ["CH₃OH", "CH₃NH₂", "CH₃COOH", "CH₃CHO", "CH₃OCH₃"],
    1,
    "CH₃NH₂ = Methylamin, primäres Amin (−NH₂).",
    "leicht",
    ["Amin", "funktionelle Gruppe"]
  ),
  q(
    "ch-pool-18-013",
    KAP[0],
    "Welches Element hat die höchste Ionisierungsenergie in einer Periode (typisch)?",
    ["Alkalimetall", "Edelgas", "Erdalkalimetall", "Halogen", "Chalkogen"],
    1,
    "Edelgase haben die höchste Ionisierungsenergie (stabile Konfiguration). Links in der Periode am niedrigsten.",
    "mittel",
    ["Ionisierungsenergie", "Edelgas"]
  ),
  q(
    "ch-pool-18-014",
    KAP[1],
    "Die Gefrierpunktserniedrigung bei einer Lösung:",
    [
      "ist unabhängig von der gelösten Menge",
      "ist proportional zur Molalität des gelösten Stoffs",
      "erhöht den Gefrierpunkt",
      "ist nur bei Gasen definiert",
      "hängt nur vom Lösungsmittel ab (nicht von der Konzentration)",
    ],
    1,
    "ΔT_gefrier = K_kry · b. Kolligative Eigenschaft.",
    "mittel",
    ["Gefrierpunktserniedrigung"]
  ),
  q(
    "ch-pool-18-015",
    KAP[2],
    "Welche Geometrie hat ein BF₃-Molekül?",
    ["tetraedrisch", "trigonal planar", "linear", "pyramidal", "oktaedrisch"],
    1,
    "BF₃: B hat 3 Bindungen, kein freies Paar → trigonal planar (120°).",
    "mittel",
    ["BF3", "Geometrie"]
  ),
  q(
    "ch-pool-18-016",
    KAP[3],
    "Ein Redoxgleichgewicht wird beschrieben durch:",
    [
      "den pH-Wert",
      "die Nernst-Gleichung bzw. das Elektrodenpotential",
      "nur die Konzentration",
      "nur die Temperatur",
      "den pOH",
    ],
    1,
    "Nernst-Gleichung verknüpft Elektrodenpotential mit Konzentrationen und Temperatur.",
    "mittel",
    ["Nernst", "Redox"]
  ),
  q(
    "ch-pool-18-017",
    KAP[4],
    "Welche Säure ist zweibasig?",
    ["HCl", "HNO₃", "H₂SO₄", "HF", "HClO₄"],
    2,
    "H₂SO₄ kann zwei Protonen abgeben: H₂SO₄ → H⁺ + HSO₄⁻ → H⁺ + SO₄²⁻.",
    "leicht",
    ["mehrbasig", "Schwefelsäure"]
  ),
  q(
    "ch-pool-18-018",
    KAP[5],
    "Die Nitrogruppe −NO₂ in organischen Verbindungen kann durch:",
    [
      "Addition",
      "nitrierende Substitution (z. B. am Aromaten)",
      "Verseifung",
      "Hydrierung",
      "Veresterung",
    ],
    1,
    "Nitrierung: Einführung von −NO₂ (z. B. Benzol + HNO₃/H₂SO₄ → Nitrobenzol).",
    "mittel",
    ["Nitrierung", "Aromat"]
  ),
  q(
    "ch-pool-18-019",
    KAP[0],
    "Die Atommasse (relative Atommasse) wird heute bezogen auf:",
    ["Wasserstoff", "Sauerstoff-16", "Kohlenstoff-12 (¹²C)", "Stickstoff", "Eisen"],
    2,
    "Einheit u: 1/12 der Masse des Kohlenstoff-12-Atoms. Ar(¹²C) = 12 u.",
    "mittel",
    ["Atommasse", "Kohlenstoff-12"]
  ),
  q(
    "ch-pool-18-020",
    KAP[1],
    "Osmotischer Druck entsteht, wenn:",
    [
      "zwei gleiche Lösungen getrennt sind",
      "eine Lösung und reines Lösungsmittel durch eine semipermeable Membran getrennt sind",
      "nur Gase vorliegen",
      "keine Membran da ist",
      "die Temperatur 0 °C ist",
    ],
    1,
    "Osmose: Lösungsmittel diffundiert durch semipermeable Membran in die Lösung → osmotischer Druck.",
    "mittel",
    ["Osmose", "osmotischer Druck"]
  ),
  q(
    "ch-pool-18-021",
    KAP[2],
    "Welche Aussage zu Resonanz (Mesomerie) trifft zu?",
    [
      "Es gibt mehrere getrennte Moleküle",
      "Die wahre Struktur ist eine Überlagerung (Mittel) mehrerer Grenzstrukturen",
      "Nur Ionen zeigen Resonanz",
      "Die Bindungslängen sind immer unterschiedlich",
      "Es gibt keine Doppelbindungen",
    ],
    1,
    "Resonanz: Molekül wird durch mehrere Grenzstrukturen beschrieben; reale Struktur ist dazwischen (z. B. Benzol, CO₃²⁻).",
    "mittel",
    ["Resonanz", "Mesomerie"]
  ),
  q(
    "ch-pool-18-022",
    KAP[3],
    "Die Geschwindigkeitskonstante k einer Reaktion:",
    [
      "hängt nicht von der Temperatur ab",
      "steigt typischerweise mit der Temperatur (Arrhenius)",
      "ist immer 1",
      "hängt nur vom Druck ab",
      "ist unabhängig von der Aktivierungsenergie",
    ],
    1,
    "Arrhenius: k = A·exp(−E_A/(RT)). Höhere T → größeres k.",
    "mittel",
    ["Geschwindigkeitskonstante", "Arrhenius"]
  ),
  q(
    "ch-pool-18-023",
    KAP[4],
    "Welche Oxidationszahl hat Mangan in MnO₂?",
    ["+2", "+4", "+6", "+7", "−2"],
    1,
    "MnO₂: O jeweils −2, Summe 0 → Mn + 2·(−2) = 0 → Mn = +4.",
    "mittel",
    ["Oxidationszahl", "MnO2"]
  ),
  q(
    "ch-pool-18-024",
    KAP[5],
    "Ein Cephalin enthält unter anderem:",
    [
      "nur Kohlenhydrate",
      "Fettsäuren, Glycerin, Phosphorsäure, Aminoalkohol",
      "nur Aminosäuren",
      "nur Steroide",
      "nur Zucker",
    ],
    1,
    "Cephaline (Phosphatidylethanolamin): Glycerin, 2 Fettsäuren, Phosphorsäure, Ethanolamin. Phospholipide.",
    "schwer",
    ["Cephalin", "Phospholipid"]
  ),
  q(
    "ch-pool-18-025",
    KAP[0],
    "Die Elektronenaffinität ist:",
    [
      "die Energie bei Abgabe eines Elektrons",
      "die Energie bei Aufnahme eines Elektrons (oft freigesetzt)",
      "die Ionisierungsenergie",
      "die Bindungsenergie",
      "die Gitterenergie",
    ],
    1,
    "Elektronenaffinität: Energieänderung bei Aufnahme eines Elektrons durch ein neutrales Atom (Halogene hoch).",
    "mittel",
    ["Elektronenaffinität"]
  ),
  q(
    "ch-pool-18-026",
    KAP[1],
    "Die Henry-Konstante beschreibt:",
    [
      "die Löslichkeit von Gasen in Flüssigkeiten",
      "nur die Verdampfung",
      "nur Feststoffe",
      "die Reaktionsgeschwindigkeit",
      "den osmotischen Druck",
    ],
    0,
    "Henry: c = k_H · p (Konzentration des Gases proportional zum Partialdruck).",
    "mittel",
    ["Henry", "Gaslöslichkeit"]
  ),
  q(
    "ch-pool-18-027",
    KAP[2],
    "Welche Bindung ist in einem HCl-Molekül vorhanden?",
    ["ionisch", "kovalent polar", "metallisch", "nur van-der-Waals", "Wasserstoffbrücke"],
    1,
    "HCl: H und Cl teilen ein Elektronenpaar; EN-Differenz → polar kovalent.",
    "leicht",
    ["HCl", "kovalente Bindung"]
  ),
  q(
    "ch-pool-18-028",
    KAP[3],
    "Bei einer Folgereaktion A → B → C kann die Konzentration von B:",
    [
      "nur steigen",
      "nur fallen",
      "ein Maximum durchlaufen",
      "nicht gemessen werden",
      "immer konstant sein",
    ],
    2,
    "B wird gebildet und verbraucht; typischerweise steigt [B] an, erreicht ein Maximum und fällt dann.",
    "mittel",
    ["Folgereaktion"]
  ),
  q(
    "ch-pool-18-029",
    KAP[4],
    "Welches Anion bildet sich aus Schwefelsäure nach Abgabe von zwei Protonen?",
    ["HSO₄⁻", "SO₄²⁻", "SO₃²⁻", "S²⁻", "HSO₃⁻"],
    1,
    "H₂SO₄ → H⁺ + HSO₄⁻ → H⁺ + SO₄²⁻. Sulfat = SO₄²⁻.",
    "leicht",
    ["Sulfat", "Schwefelsäure"]
  ),
  q(
    "ch-pool-18-030",
    KAP[5],
    "Fettsäuren sind:",
    ["Alkane", "Carbonsäuren mit langer Kohlenstoffkette", "nur Ester", "nur Alkohole", "Aromaten"],
    1,
    "Fettsäuren: langkettige Carbonsäuren (z. B. Palmitinsäure, Ölsäure).",
    "leicht",
    ["Fettsäure", "Carbonsäure"]
  ),
  q(
    "ch-pool-18-031",
    KAP[0],
    "In welcher Gruppe steht Eisen (Fe)?",
    ["Gruppe 1", "Gruppe 2", "Gruppe 8 (Nebengruppe)", "Gruppe 17", "Gruppe 18"],
    2,
    "Eisen ist ein Übergangsmetall, Gruppe 8 (alte Zählung) bzw. Gruppe 8 in der aktuellen Nomenklatur.",
    "leicht",
    ["Eisen", "Periodensystem"]
  ),
  q(
    "ch-pool-18-032",
    KAP[1],
    "Die Enthalpie der Mischung idealer Gase bei gleichem Druck und Temperatur ist:",
    ["positiv", "negativ", "null", "unendlich", "immer gleich der Verdampfungsenthalpie"],
    2,
    "Ideale Gase: keine Wechselwirkung → ΔH_mix = 0 bei Mischung.",
    "mittel",
    ["Mischungsenthalpie", "ideales Gas"]
  ),
  q(
    "ch-pool-18-033",
    KAP[2],
    "Welche Aussage zu Ionenradien trifft zu?",
    [
      "Kationen sind größer als das zugehörige Atom",
      "Anionen sind größer als das zugehörige Atom",
      "Na⁺ und Na haben den gleichen Radius",
      "Cl⁻ ist kleiner als Cl",
      "Ionenradien sind immer kleiner als Atomradien",
    ],
    1,
    "Anionen haben mehr Elektronen bei gleicher Kernladung → größerer Radius. Kationen kleiner als Atom.",
    "mittel",
    ["Ionenradius"]
  ),
  q(
    "ch-pool-18-034",
    KAP[3],
    "Die Gleichgewichtslage K wird durch Temperaturänderung:",
    [
      "nicht beeinflusst",
      "beeinflusst (K = f(T))",
      "nur bei Katalysator geändert",
      "nur bei Druckänderung geändert",
      "immer verdoppelt",
    ],
    1,
    "K ist temperaturabhängig (van't Hoff). Katalysator und Druck ändern K nicht.",
    "mittel",
    ["Gleichgewicht", "Temperatur"]
  ),
  q(
    "ch-pool-18-035",
    KAP[4],
    "Welches Metall reagiert mit Wasser unter H₂-Entwicklung?",
    ["Kupfer", "Silber", "Natrium", "Quecksilber", "Gold"],
    2,
    "Unedle Metalle (Na, K, Ca, Mg, …) reagieren mit Wasser zu Hydroxid und H₂. Cu, Ag, Hg, Au nicht.",
    "leicht",
    ["Metall", "Wasser"]
  ),
  q(
    "ch-pool-18-036",
    KAP[5],
    "Ein Thioether enthält die Gruppierung:",
    ["−O−", "−S−", "−OH", "−COOH", "−NH₂"],
    1,
    "Thioether: R−S−R' (Schwefelanalogon zum Ether R−O−R').",
    "mittel",
    ["Thioether"]
  ),
  q(
    "ch-pool-18-037",
    KAP[0],
    "Die Anzahl der d-Elektronen in einem Eisen(II)-Ion (Fe²⁺) beträgt:",
    ["2", "4", "6", "8", "10"],
    2,
    "Fe: [Ar] 4s² 3d⁶. Fe²⁺: 4s² abgegeben → 3d⁶, also 6 d-Elektronen.",
    "schwer",
    ["Eisen", "d-Elektronen"]
  ),
  q(
    "ch-pool-18-038",
    KAP[1],
    "Die spezifische Wärmekapazität von Wasser ist etwa:",
    ["0,5 J/(g·K)", "1 J/(g·K)", "2 J/(g·K)", "4,2 J/(g·K)", "10 J/(g·K)"],
    3,
    "c(H₂O) ≈ 4,18 J/(g·K) (bzw. 4,18 kJ/(kg·K)). Relativ hoch.",
    "leicht",
    ["Wärmekapazität", "Wasser"]
  ),
  q(
    "ch-pool-18-039",
    KAP[2],
    "Welche Verbindung hat die niedrigste elektrische Leitfähigkeit in festem Zustand?",
    ["Kupfer", "Graphit", "Kochsalz", "Silber", "Eisen"],
    2,
    "Festes NaCl: Ionen fix → keine Leitfähigkeit. Metalle und Graphit leiten im Festkörper.",
    "mittel",
    ["Leitfähigkeit", "NaCl"]
  ),
  q(
    "ch-pool-18-040",
    KAP[3],
    "Ein Gleichgewicht A + B ⇌ C liegt auf der Produktseite, wenn:",
    [
      "K klein ist",
      "K groß ist (viel C bei Gleichgewicht)",
      "K = 0",
      "kein Katalysator da ist",
      "die Temperatur niedrig ist",
    ],
    1,
    "Großes K bedeutet [C]/([A][B]) groß → Gleichgewicht bei hohen Produktkonzentrationen.",
    "mittel",
    ["Gleichgewichtskonstante"]
  ),
  q(
    "ch-pool-18-041",
    KAP[4],
    "Welche Oxidationszahl hat Stickstoff in NH₃?",
    ["+3", "+2", "0", "−3", "+5"],
    3,
    "In NH₃: H jeweils +1, Summe 0 → N + 3·(+1) = 0 → N = −3.",
    "mittel",
    ["Oxidationszahl", "Ammoniak"]
  ),
  q(
    "ch-pool-18-042",
    KAP[5],
    "Ein Triglycerid entsteht aus:",
    [
      "Alkohol und Alken",
      "Glycerin und drei Fettsäuren (Ester)",
      "zwei Aminosäuren",
      "Aldehyd und Keton",
      "zwei Zuckern",
    ],
    1,
    "Triglycerid: Glycerin (3 OH) + 3 Fettsäuren → 3 Esterbindungen + 3 H₂O. Fette und Öle.",
    "mittel",
    ["Triglycerid", "Fett"]
  ),
  q(
    "ch-pool-18-043",
    KAP[0],
    "Welches Orbital hat die Form einer Kugel?",
    ["p", "d", "f", "s", "alle gleich"],
    3,
    "s-Orbital: kugelsymmetrisch. p, d, f haben richtungsabhängige Formen.",
    "leicht",
    ["s-Orbital"]
  ),
  q(
    "ch-pool-18-044",
    KAP[1],
    "Die Dampfdruckerniedrigung über einer Lösung:",
    [
      "ist unabhängig von der gelösten Stoffmenge",
      "ist proportional zum Molenbruch des Lösungsmittels (Raoult)",
      "erhöht den Dampfdruck",
      "gilt nur für Gase",
      "ist immer null",
    ],
    1,
    "Raoult: p = x_Lösungsmittel · p° (Dampfdruck proportional zum Molenbruch des Lösungsmittels).",
    "mittel",
    ["Raoult", "Dampfdruck"]
  ),
  q(
    "ch-pool-18-045",
    KAP[2],
    "Welche Aussage zu Wasserstoffbrücken in DNA trifft zu?",
    [
      "Es gibt keine",
      "Sie verbinden komplementäre Basenpaare (z. B. A-T, G-C)",
      "Sie ersetzen die Phosphodiesterbindung",
      "Sie wirken nur zwischen Zucker und Phosphat",
      "Sie sind kovalente Bindungen",
    ],
    1,
    "Wasserstoffbrücken zwischen Basen (A=T, G≡C) stabilisieren die Doppelhelix.",
    "mittel",
    ["DNA", "Wasserstoffbrücken"]
  ),
  q(
    "ch-pool-18-046",
    KAP[3],
    "Die Reaktionsenthalpie ΔH kann bestimmt werden aus:",
    [
      "nur der Aktivierungsenergie",
      "Bildungsenthalpien der Produkte und Edukte (Hess)",
      "nur der Gleichgewichtskonstante",
      "nur der Geschwindigkeit",
      "nur dem Katalysator",
    ],
    1,
    "Hess: ΔH = Σ ΔH_f(Produkte) − Σ ΔH_f(Edukte).",
    "mittel",
    ["Hess", "Bildungsenthalpie"]
  ),
  q(
    "ch-pool-18-047",
    KAP[4],
    "Welche Lösung wirkt als Reduktionsmittel?",
    ["konz. HNO₃", "NaCl", "Na₂S₂O₃ (Thiosulfat) in saurer Lösung", "KMnO₄", "H₂O₂ (oxidierend)"],
    2,
    "Thiosulfat kann reduzierend wirken (z. B. I₂ zu I⁻). Die anderen sind oxidierend oder indifferent.",
    "mittel",
    ["Reduktionsmittel", "Thiosulfat"]
  ),
  q(
    "ch-pool-18-048",
    KAP[5],
    "Die funktionelle Gruppe einer Carbonsäure ist:",
    ["−OH", "−CHO", "−COOH", "−CO−", "−NH₂"],
    2,
    "Carbonsäure: −COOH (Carboxylgruppe).",
    "leicht",
    ["Carbonsäure", "funktionelle Gruppe"]
  ),
  q(
    "ch-pool-18-049",
    KAP[0],
    "Die 4. Hauptgruppe enthält unter anderem:",
    ["Stickstoff", "Kohlenstoff", "Sauerstoff", "Fluor", "Neon"],
    1,
    "4. Hauptgruppe (Gruppe 14): C, Si, Ge, Sn, Pb. Kohlenstoff und Silicium sind die wichtigsten.",
    "leicht",
    ["Hauptgruppe", "Kohlenstoff"]
  ),
  q(
    "ch-pool-18-050",
    KAP[1],
    "Die Verdampfungsenthalpie von Wasser bei 100 °C beträgt etwa:",
    ["0 kJ/mol", "22 kJ/mol", "41 kJ/mol", "2260 kJ/mol", "100 kJ/mol"],
    2,
    "ΔH_vap(H₂O) ≈ 40,7 kJ/mol (bei 100 °C). Oft auch in kJ/kg: ca. 2260 kJ/kg.",
    "mittel",
    ["Verdampfungsenthalpie", "Wasser"]
  ),
  q(
    "ch-pool-18-051",
    KAP[2],
    "In einem Aluminiumoxid (Al₂O₃) liegen vor:",
    ["Al- und O-Moleküle", "Al³⁺- und O²⁻-Ionen", "nur kovalente Bindungen", "nur Al³⁺", "nur O²⁻"],
    1,
    "Al₂O₃: Ionenverbindung aus Al³⁺ und O²⁻ (Tonerde).",
    "leicht",
    ["Aluminiumoxid", "Ionen"]
  ),
  q(
    "ch-pool-18-052",
    KAP[3],
    "Die Aktivierungsenergie E_A erscheint in der Arrhenius-Gleichung im:",
    [
      "Vorfaktor A",
      "Exponenten: exp(−E_A/(RT))",
      "Nenner ohne T",
      "Logarithmus",
      "nur bei Katalysatoren",
    ],
    1,
    "k = A·exp(−E_A/(RT)). E_A im Exponenten; höhere E_A → kleineres k.",
    "mittel",
    ["Arrhenius", "Aktivierungsenergie"]
  ),
  q(
    "ch-pool-18-053",
    KAP[4],
    "Welches Gas ist in der Luft am häufigsten (Volumenanteil)?",
    ["Sauerstoff", "Kohlendioxid", "Stickstoff", "Argon", "Wasserstoff"],
    2,
    "Luft: ca. 78 % N₂, 21 % O₂, 1 % Ar, Spuren CO₂ und andere.",
    "leicht",
    ["Luft", "Stickstoff"]
  ),
  q(
    "ch-pool-18-054",
    KAP[5],
    "Ein Lacton ist:",
    [
      "ein Lactam",
      "ein cyclischer Ester (Ester mit intramolekularer Ringbildung)",
      "ein Ether",
      "ein Alkan",
      "ein Keton",
    ],
    1,
    "Lacton: cyclischer Ester (Hydroxycarbonsäure → intramolekulare Veresterung).",
    "schwer",
    ["Lacton"]
  ),
  q(
    "ch-pool-18-055",
    KAP[0],
    "Welches Element hat die Elektronenkonfiguration 1s² 2s² 2p⁶?",
    ["Stickstoff", "Sauerstoff", "Fluor", "Neon", "Natrium"],
    3,
    "10 Elektronen = Neon (Z=10), Edelgas.",
    "mittel",
    ["Neon", "Elektronenkonfiguration"]
  ),
  q(
    "ch-pool-18-056",
    KAP[1],
    "Die ideale Gasgleichung lautet:",
    ["p = ρ g h", "pV = nRT", "E = m c²", "F = m a", "v = λ f"],
    1,
    "pV = nRT (allgemeine Gasgleichung). R = Gaskonstante.",
    "leicht",
    ["ideales Gas", "Gasgleichung"]
  ),
  q(
    "ch-pool-18-057",
    KAP[2],
    "Welche Bindung ist in einem H₂-Molekül vorhanden?",
    [
      "Ionenbindung",
      "kovalente Bindung (Einfachbindung)",
      "Metallbindung",
      "Wasserstoffbrücke",
      "Dipol-Dipol",
    ],
    1,
    "H₂: zwei H-Atome teilen ein Elektronenpaar → kovalente Einfachbindung.",
    "leicht",
    ["Wasserstoff", "kovalente Bindung"]
  ),
  q(
    "ch-pool-18-058",
    KAP[3],
    "Bei einer Reaktion nullter Ordnung:",
    [
      "hängt v nur von der Konzentration ab",
      "ist v unabhängig von der Konzentration der Edukte",
      "gibt es keine Reaktion",
      "ist v immer null",
      "hängt v nur vom Druck ab",
    ],
    1,
    "Reaktion 0. Ordnung: v = k (konstant). Geschwindigkeit unabhängig von [A].",
    "mittel",
    ["Reaktionsordnung"]
  ),
  q(
    "ch-pool-18-059",
    KAP[4],
    "Welches Element ist ein Alkalimetall?",
    ["Magnesium", "Calcium", "Lithium", "Aluminium", "Zink"],
    2,
    "Alkalimetalle: Li, Na, K, Rb, Cs, Fr (Gruppe 1). Mg, Ca = Erdalkali.",
    "leicht",
    ["Alkalimetalle", "Lithium"]
  ),
  q(
    "ch-pool-18-060",
    KAP[5],
    "Die Hydrolyse eines Esters in basischer Lösung ergibt:",
    ["Alkohol und Carboxylat", "nur Alkohol", "nur Säure", "Aldehyd und Keton", "Ether"],
    0,
    "Verseifung: Ester + OH⁻ → Carboxylat + Alkohol. Carboxylat = Salz der Carbonsäure.",
    "mittel",
    ["Verseifung", "Ester"]
  ),
];
