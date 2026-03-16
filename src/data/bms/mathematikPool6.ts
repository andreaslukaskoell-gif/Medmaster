/**
 * Mathematik BMS Pool 6 — 60 Fragen im MedAT-Stil (Typ A, Typ M, Falsch-Aussagen).
 * Stoff: mathe-kap1 (Zahlen), mathe-kap2 (Algebra), mathe-kap3 (Grundlagen),
 *        mathe-kap5 (Funktionen), mathe-kap6 (Vektoren), mathe-kap7 (Stochastik).
 * Schwierigkeit: 24 leicht / 24 mittel / 12 schwer.
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
    subject: "mathematik",
    chapter,
    text,
    options: options.map((t, i) => ({ id: ids[i], text: t })),
    correctOptionId: ids[correctIndex],
    explanation,
    difficulty,
    tags,
  };
}

export const mathematikPool6: Question[] = [
  // ─── mathe-kap1: Zahlen, Mengen, Einheiten (10 Fragen) ─────────────────
  q(
    "ma-pool-6-001",
    "mathe-kap1",
    "Wie lautet die wissenschaftliche Notation von 0,000052?",
    ["5,2 × 10⁻⁴", "5,2 × 10⁻⁵", "52 × 10⁻⁶", "0,52 × 10⁻⁴", "5,2 × 10⁻⁶"],
    1,
    "0,000052 = 5,2 × 10⁻⁵. Das Komma wird 5 Stellen nach rechts verschoben.",
    "leicht",
    ["Wissenschaftliche Notation", "Zehnerpotenzen"]
  ),
  q(
    "ma-pool-6-002",
    "mathe-kap1",
    "Der pH-Wert einer Lösung beträgt 4. Welche Wasserstoffionenkonzentration [H⁺] liegt vor?",
    ["10⁻² mol/L", "10⁻⁴ mol/L", "4 mol/L", "10⁴ mol/L", "10⁻⁸ mol/L"],
    1,
    "pH = −log₁₀([H⁺]). Bei pH = 4: [H⁺] = 10⁻⁴ mol/L.",
    "leicht",
    ["pH-Wert", "Logarithmus", "rechenfrage"]
  ),
  q(
    "ma-pool-6-003",
    "mathe-kap1",
    "Vereinfache: (6 × 10³)² / (2 × 10²).",
    ["18 × 10⁴", "1,8 × 10⁵", "3,6 × 10⁴", "18 × 10³", "9 × 10³"],
    1,
    "(6 × 10³)² = 36 × 10⁶. Geteilt durch 2 × 10² = 18 × 10⁴ = 1,8 × 10⁵.",
    "mittel",
    ["Zehnerpotenzen", "rechenfrage"]
  ),
  q(
    "ma-pool-6-004",
    "mathe-kap1",
    "Ein Röhrchen enthält 200 µL Blutserum. Ein Analysegerät benötigt 0,05 mL pro Test. Wie viele Tests können durchgeführt werden?",
    ["2", "4", "10", "40", "400"],
    1,
    "200 µL = 0,2 mL. Anzahl Tests: 0,2 / 0,05 = 4.",
    "leicht",
    ["Einheiten", "Mikroliter", "rechenfrage"]
  ),
  q(
    "ma-pool-6-005",
    "mathe-kap1",
    "Welche der folgenden Mengen ist abzählbar unendlich?",
    ["ℝ", "ℚ", "[0, 1]", "ℝ \\ ℚ", "die Menge aller Funktionen f: ℕ → ℝ"],
    1,
    "ℚ (die rationalen Zahlen) ist abzählbar unendlich. ℝ, [0,1] und ℝ\\ℚ sind überabzählbar.",
    "schwer",
    ["Zahlenmengen", "Abzählbarkeit"]
  ),
  q(
    "ma-pool-6-006",
    "mathe-kap1",
    "Berechne: |−7| + |3 − 8| − |2|.",
    ["10", "14", "0", "6", "−4"],
    0,
    "|−7| = 7, |3 − 8| = |−5| = 5, |2| = 2. Summe: 7 + 5 − 2 = 10.",
    "leicht",
    ["Betragsfunktion", "rechenfrage"]
  ),
  q(
    "ma-pool-6-007",
    "mathe-kap1",
    "Die Erdbeschleunigung beträgt g ≈ 9,81 m/s². In cm/s² ausgedrückt ergibt das:",
    ["0,0981 cm/s²", "98,1 cm/s²", "981 cm/s²", "9 810 cm/s²", "9,81 cm/s²"],
    2,
    "1 m = 100 cm, also 9,81 m/s² = 981 cm/s².",
    "leicht",
    ["Einheiten", "Umrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-6-008",
    "mathe-kap1",
    "Berechne: (−1)¹⁰⁰ + (−1)⁹⁹.",
    ["0", "2", "−2", "1", "−1"],
    0,
    "(−1)¹⁰⁰ = 1 (gerade Potenz) und (−1)⁹⁹ = −1 (ungerade Potenz). Summe: 1 + (−1) = 0.",
    "leicht",
    ["Potenzen", "Vorzeichen", "rechenfrage"]
  ),
  q(
    "ma-pool-6-009",
    "mathe-kap1",
    "Ein Elektron hat eine Masse von ca. 9,1 × 10⁻³¹ kg. Wie viel Femtogramm (fg) sind das? (1 fg = 10⁻¹⁸ kg)",
    ["9,1 × 10⁻¹³ fg", "9,1 × 10⁻⁴⁹ fg", "9,1 × 10⁻¹³ g", "0,91 fg", "91 fg"],
    0,
    "9,1 × 10⁻³¹ kg / 10⁻¹⁸ kg/fg = 9,1 × 10⁻¹³ fg.",
    "schwer",
    ["SI-Präfixe", "Femto", "Zehnerpotenzen", "rechenfrage"]
  ),
  q(
    "ma-pool-6-010",
    "mathe-kap1",
    "Welche der folgenden Aussagen über natürliche Zahlen ist FALSCH?",
    [
      "ℕ ist unter Addition abgeschlossen.",
      "ℕ ist unter Multiplikation abgeschlossen.",
      "ℕ ist unter Subtraktion abgeschlossen.",
      "Jede natürliche Zahl hat einen Nachfolger.",
      "1 ist die kleinste natürliche Zahl (Konvention ℕ = {1, 2, 3, ...}).",
    ],
    2,
    "ℕ ist nicht unter Subtraktion abgeschlossen: z. B. 3 − 5 = −2 ∉ ℕ.",
    "leicht",
    ["Natürliche Zahlen", "Falsch-Aussage"]
  ),

  // ─── mathe-kap2: Algebra, Gleichungen, Geometrie (10 Fragen) ───────────
  q(
    "ma-pool-6-011",
    "mathe-kap2",
    "Wie viele reelle Lösungen hat die Gleichung x² + 6x + 9 = 0?",
    ["0", "1", "2", "3", "unendlich viele"],
    1,
    "x² + 6x + 9 = (x + 3)² = 0 hat genau eine Lösung (Doppellösung): x = −3. D = 36 − 36 = 0.",
    "leicht",
    ["Quadratische Gleichung", "Diskriminante"]
  ),
  q(
    "ma-pool-6-012",
    "mathe-kap2",
    "Vereinfache: (2x + 3)² − (2x − 3)².",
    ["0", "12x", "24x", "18", "4x²"],
    2,
    "Dritte binomische Formel: a² − b² = (a+b)(a−b) mit a = 2x+3, b = 2x−3. (4x)(6) = 24x. Alternativ: (4x² + 12x + 9) − (4x² − 12x + 9) = 24x.",
    "mittel",
    ["Binomische Formeln"]
  ),
  q(
    "ma-pool-6-013",
    "mathe-kap2",
    "Ein Dreieck hat die Winkel α = 50° und β = 70°. Wie groß ist γ?",
    ["50°", "60°", "70°", "80°", "120°"],
    1,
    "Winkelsumme im Dreieck: α + β + γ = 180°. γ = 180° − 50° − 70° = 60°.",
    "leicht",
    ["Dreieck", "Winkelsumme", "rechenfrage"]
  ),
  q(
    "ma-pool-6-014",
    "mathe-kap2",
    "Löse die Exponentialgleichung: 3ˣ = 81.",
    ["x = 3", "x = 4", "x = 27", "x = 9", "x = 81/3"],
    1,
    "81 = 3⁴, also 3ˣ = 3⁴ ⇒ x = 4.",
    "leicht",
    ["Exponentialgleichung", "rechenfrage"]
  ),
  q(
    "ma-pool-6-015",
    "mathe-kap2",
    "Die Oberfläche eines Würfels beträgt 150 cm². Wie lang ist eine Kante?",
    ["5 cm", "25 cm", "√25 cm", "6,25 cm", "√150 cm"],
    0,
    "Oberfläche O = 6a². 6a² = 150 ⇒ a² = 25 ⇒ a = 5 cm.",
    "mittel",
    ["Würfel", "Oberfläche", "rechenfrage"]
  ),
  q(
    "ma-pool-6-016",
    "mathe-kap2",
    "Für welche Werte von x ist der Bruchterm (x − 2)/(x² − 4) definiert?",
    ["x ≠ 2", "x ≠ −2", "x ≠ 2 und x ≠ −2", "für alle x ∈ ℝ", "x > 2"],
    2,
    "Nenner: x² − 4 = (x − 2)(x + 2) = 0 bei x = 2 und x = −2. Beide Werte müssen ausgeschlossen werden.",
    "mittel",
    ["Bruchterme", "Definitionsmenge"]
  ),
  q(
    "ma-pool-6-017",
    "mathe-kap2",
    "Bestimme das Volumen eines Kegels mit Radius r = 6 cm und Höhe h = 10 cm. (π ≈ 3,14)",
    ["1 130,4 cm³", "376,8 cm³", "188,4 cm³", "565,2 cm³", "753,6 cm³"],
    1,
    "V = (1/3)πr²h = (1/3) × 3,14 × 36 × 10 = (1/3) × 1130,4 = 376,8 cm³.",
    "mittel",
    ["Kegel", "Volumen", "rechenfrage"]
  ),
  q(
    "ma-pool-6-018",
    "mathe-kap2",
    "Welche der folgenden Gleichungen ist keine quadratische Gleichung?",
    ["2x² + x − 1 = 0", "x² = 9", "(x − 1)² = x² + 1", "x(x + 3) = 0", "x² + √2x + 1 = 0"],
    2,
    "(x − 1)² = x² + 1 ⇒ x² − 2x + 1 = x² + 1 ⇒ −2x = 0 ⇒ x = 0. Die x²-Terme heben sich auf — es bleibt eine lineare Gleichung.",
    "schwer",
    ["Quadratische Gleichung"]
  ),
  q(
    "ma-pool-6-019",
    "mathe-kap2",
    "Berechne den Flächeninhalt eines Kreisrings mit äußerem Radius R = 7 cm und innerem Radius r = 3 cm. (π ≈ 3,14)",
    ["125,6 cm²", "40π cm²", "153,86 cm²", "87,92 cm²", "28,26 cm²"],
    0,
    "A = π(R² − r²) = 3,14 × (49 − 9) = 3,14 × 40 = 125,6 cm².",
    "mittel",
    ["Kreisring", "Fläche", "rechenfrage"]
  ),
  q(
    "ma-pool-6-020",
    "mathe-kap2",
    "Welche der folgenden Aussagen über die binomischen Formeln ist FALSCH?",
    [
      "(a + b)² = a² + 2ab + b²",
      "(a − b)² = a² − 2ab + b²",
      "(a + b)(a − b) = a² − b²",
      "(a + b)³ = a³ + 3a²b + 3ab² + b³",
      "(a − b)² = a² + 2ab − b²",
    ],
    4,
    "(a − b)² = a² − 2ab + b² (nicht +2ab − b²). Der mittlere Term muss negativ sein und b² ist stets positiv.",
    "leicht",
    ["Binomische Formeln", "Falsch-Aussage"]
  ),

  // ─── mathe-kap3: Grundlagen (Brüche, Prozent, Potenzgesetze) (10 Fragen) ─
  q(
    "ma-pool-6-021",
    "mathe-kap3",
    "Berechne: (3/5) × (10/9).",
    ["30/45", "2/3", "1/3", "6/5", "5/6"],
    1,
    "(3/5) × (10/9) = 30/45 = 2/3.",
    "leicht",
    ["Bruchrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-6-022",
    "mathe-kap3",
    "Welchen Wert hat: 16^(3/4)?",
    ["4", "8", "12", "64", "2"],
    1,
    "16^(3/4) = (16^(1/4))³ = 2³ = 8.",
    "mittel",
    ["Potenzgesetze", "Wurzeln", "rechenfrage"]
  ),
  q(
    "ma-pool-6-023",
    "mathe-kap3",
    "Ein Konto enthält 2 000 €. Es werden jährlich 3 % Zinsen gutgeschrieben (Zinseszins). Welches Kapital ist nach 2 Jahren vorhanden?",
    ["2 060 €", "2 120 €", "2 121,80 €", "2 180 €", "2 100 €"],
    2,
    "K₂ = 2000 × 1,03² = 2000 × 1,0609 = 2 121,80 €.",
    "mittel",
    ["Zinseszins", "rechenfrage"]
  ),
  q(
    "ma-pool-6-024",
    "mathe-kap3",
    "Vereinfache: √(75) − √(27) + √(12).",
    ["2√3", "4√3", "6√3", "3√3", "5√3"],
    1,
    "√75 = 5√3, √27 = 3√3, √12 = 2√3. Also: 5√3 − 3√3 + 2√3 = 4√3.",
    "mittel",
    ["Wurzeln", "Vereinfachung"]
  ),
  q(
    "ma-pool-6-025",
    "mathe-kap3",
    "Welchen Wert hat: log₅(125)?",
    ["2", "3", "5", "25", "15"],
    1,
    "5³ = 125, also log₅(125) = 3.",
    "leicht",
    ["Logarithmus", "rechenfrage"]
  ),
  q(
    "ma-pool-6-026",
    "mathe-kap3",
    "Ein Patient nimmt morgens 2/3 einer Tablette und abends 1/4 einer Tablette. Wie viel nimmt er pro Tag?",
    ["3/7", "3/12", "11/12", "8/12", "5/6"],
    2,
    "2/3 + 1/4 = 8/12 + 3/12 = 11/12.",
    "leicht",
    ["Bruchrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-6-027",
    "mathe-kap3",
    "Berechne: (10⁶)^(1/3) × 10⁻¹.",
    ["10", "100", "1 000", "1", "0,1"],
    0,
    "(10⁶)^(1/3) = 10² = 100. 100 × 10⁻¹ = 100 × 0,1 = 10.",
    "mittel",
    ["Potenzgesetze", "Zehnerpotenzen", "rechenfrage"]
  ),
  q(
    "ma-pool-6-028",
    "mathe-kap3",
    "Der Preis eines Produkts steigt jährlich um 4 %. Um welchen Faktor hat sich der Preis nach 5 Jahren erhöht?",
    ["1,20", "1,04⁵", "1,4", "5,20", "4⁵"],
    1,
    "Jährlich wird mit 1,04 multipliziert. Nach 5 Jahren: 1,04⁵ ≈ 1,2167. Option A (1,20) wäre nur korrekt bei einfachen (nicht zusammengesetzten) Zinsen.",
    "mittel",
    ["Exponentialwachstum", "Prozentrechnung"]
  ),
  q(
    "ma-pool-6-029",
    "mathe-kap3",
    "Welchen Wert hat: 2^(log₂(8))?",
    ["2", "3", "8", "16", "6"],
    2,
    "log₂(8) = 3 (da 2³ = 8). Also 2^(log₂(8)) = 2³ = 8. Allgemein: a^(logₐ(x)) = x.",
    "schwer",
    ["Logarithmus", "Potenzgesetze", "rechenfrage"]
  ),
  q(
    "ma-pool-6-030",
    "mathe-kap3",
    "Welche der folgenden Aussagen über Bruchrechnung ist FALSCH?",
    [
      "a/b + c/d = (ad + bc)/(bd)",
      "(a/b) × (c/d) = (ac)/(bd)",
      "(a/b) ÷ (c/d) = (ad)/(bc)",
      "a/b = c/d genau dann, wenn ad = bc",
      "a/b + a/b = 2a/(2b)",
    ],
    4,
    "a/b + a/b = 2a/b (nicht 2a/(2b) = a/b). Man addiert die Zähler bei gleichem Nenner, der Nenner bleibt. 2a/(2b) = a/b wäre nur ein Bruch, nicht die Summe.",
    "schwer",
    ["Bruchrechnung", "Falsch-Aussage"]
  ),

  // ─── mathe-kap5: Funktionen (10 Fragen) ────────────────────────────────
  q(
    "ma-pool-6-031",
    "mathe-kap5",
    "Die Funktion f(x) = |x − 3| hat ihr Minimum bei:",
    ["x = 0", "x = 3", "x = −3", "x = 1", "kein Minimum"],
    1,
    "|x − 3| ≥ 0 für alle x, mit Minimum 0 bei x = 3.",
    "leicht",
    ["Betragsfunktion", "Minimum"]
  ),
  q(
    "ma-pool-6-032",
    "mathe-kap5",
    "Die Funktion f(x) = log₂(x − 1) ist definiert für:",
    ["x > 0", "x > 1", "x ≥ 1", "x > 2", "alle x ∈ ℝ"],
    1,
    "Das Argument des Logarithmus muss positiv sein: x − 1 > 0 ⇒ x > 1.",
    "leicht",
    ["Logarithmusfunktion", "Definitionsbereich"]
  ),
  q(
    "ma-pool-6-033",
    "mathe-kap5",
    "Bestimme die Steigung der Tangente an f(x) = x³ an der Stelle x = 2.",
    ["6", "8", "12", "4", "3"],
    2,
    "f'(x) = 3x². f'(2) = 3 × 4 = 12.",
    "mittel",
    ["Ableitung", "Tangente", "rechenfrage"]
  ),
  q(
    "ma-pool-6-034",
    "mathe-kap5",
    "Welche der folgenden Funktionen hat genau eine Nullstelle?",
    ["f(x) = x² + 1", "f(x) = x² − 4", "f(x) = x³ − 8", "f(x) = sin(x)", "f(x) = eˣ − 1"],
    4,
    "eˣ − 1 = 0 ⇒ eˣ = 1 ⇒ x = 0 (einzige Nullstelle). x² + 1 hat keine reelle Nullstelle, x² − 4 hat zwei, x³ − 8 hat eine reelle (aber die Frage zielt auf Eindeutigkeit), sin(x) hat unendlich viele.",
    "mittel",
    ["Nullstellen", "Exponentialfunktion"]
  ),
  q(
    "ma-pool-6-035",
    "mathe-kap5",
    "Die Ableitung von f(x) = sin(2x) ist:",
    ["cos(2x)", "2cos(2x)", "−cos(2x)", "2sin(2x)", "−2cos(2x)"],
    1,
    "Kettenregel: f'(x) = cos(2x) · 2 = 2cos(2x).",
    "mittel",
    ["Ableitung", "Kettenregel", "Trigonometrie"]
  ),
  q(
    "ma-pool-6-036",
    "mathe-kap5",
    "Die Funktion f(x) = −x² + 4x − 3 hat ihren Scheitelpunkt bei:",
    ["(2, 1)", "(−2, 1)", "(2, −1)", "(4, −3)", "(1, 0)"],
    0,
    "x_S = −b/(2a) = −4/(−2) = 2. f(2) = −4 + 8 − 3 = 1. Scheitel: (2, 1).",
    "mittel",
    ["Quadratische Funktion", "Scheitelpunkt", "rechenfrage"]
  ),
  q(
    "ma-pool-6-037",
    "mathe-kap5",
    "Welches Integral berechnet die Fläche unter f(x) = 2x von x = 0 bis x = 3?",
    ["3", "6", "9", "12", "18"],
    2,
    "∫₀³ 2x dx = [x²]₀³ = 9 − 0 = 9.",
    "leicht",
    ["Integral", "Fläche", "rechenfrage"]
  ),
  q(
    "ma-pool-6-038",
    "mathe-kap5",
    "Die Funktion f(x) = cos(x) hat im Intervall [0, 2π] Nullstellen bei:",
    [
      "x = 0 und x = π",
      "x = π/2 und x = 3π/2",
      "x = π und x = 2π",
      "x = π/4 und x = 5π/4",
      "x = 0 und x = 2π",
    ],
    1,
    "cos(x) = 0 bei x = π/2 und x = 3π/2 im Intervall [0, 2π].",
    "mittel",
    ["Trigonometrie", "Kosinusfunktion", "Nullstellen"]
  ),
  q(
    "ma-pool-6-039",
    "mathe-kap5",
    "Bestimme die Ableitung von f(x) = ln(3x).",
    ["3/x", "1/(3x)", "1/x", "3ln(x)", "ln(3)/x"],
    2,
    "f(x) = ln(3x) = ln(3) + ln(x). f'(x) = 0 + 1/x = 1/x. Alternativ Kettenregel: 1/(3x) · 3 = 1/x.",
    "schwer",
    ["Ableitung", "Logarithmusfunktion"]
  ),
  q(
    "ma-pool-6-040",
    "mathe-kap5",
    "Eine Funktion f ist gerade, wenn:",
    [
      "f(x) = f(−x) für alle x",
      "f(x) = −f(−x) für alle x",
      "f(x) = f(x + 2π) für alle x",
      "f(0) = 0",
      "f'(0) = 0",
    ],
    0,
    "Eine Funktion ist gerade (achsensymmetrisch zur y-Achse), wenn f(x) = f(−x). Ungerade: f(x) = −f(−x). Periodisch: f(x) = f(x + T).",
    "leicht",
    ["Symmetrie", "Gerade Funktion"]
  ),

  // ─── mathe-kap6: Vektorrechnung (10 Fragen) ────────────────────────────
  q(
    "ma-pool-6-041",
    "mathe-kap6",
    "Berechne die Länge des Vektors v⃗ = (2, −6, 3).",
    ["7", "√49", "11", "√11", "5"],
    0,
    "|v⃗| = √(4 + 36 + 9) = √49 = 7.",
    "leicht",
    ["Vektorbetrag", "rechenfrage"]
  ),
  q(
    "ma-pool-6-042",
    "mathe-kap6",
    "Die Vektoren a⃗ = (1, 2, 3) und b⃗ = (4, 5, 6). Berechne a⃗ · b⃗.",
    ["32", "21", "15", "12", "30"],
    0,
    "a⃗ · b⃗ = 1·4 + 2·5 + 3·6 = 4 + 10 + 18 = 32.",
    "leicht",
    ["Skalarprodukt", "rechenfrage"]
  ),
  q(
    "ma-pool-6-043",
    "mathe-kap6",
    "Welcher der folgenden Vektoren ist ein Einheitsvektor?",
    ["(1, 1, 1)", "(1/√3, 1/√3, 1/√3)", "(1, 0, 1)", "(0,5, 0,5, 0)", "(√2, 0, 0)"],
    1,
    "|(1/√3, 1/√3, 1/√3)| = √(1/3 + 1/3 + 1/3) = √1 = 1. Alle anderen haben Betrag ≠ 1.",
    "mittel",
    ["Einheitsvektor"]
  ),
  q(
    "ma-pool-6-044",
    "mathe-kap6",
    "Berechne a⃗ × b⃗ für a⃗ = (1, 2, 0) und b⃗ = (0, 1, 3).",
    ["(6, −3, 1)", "(6, 3, −1)", "(−6, 3, 1)", "(3, −6, 1)", "(6, −3, −1)"],
    0,
    "a⃗ × b⃗ = (2·3 − 0·1, 0·0 − 1·3, 1·1 − 2·0) = (6, −3, 1).",
    "schwer",
    ["Kreuzprodukt", "rechenfrage"]
  ),
  q(
    "ma-pool-6-045",
    "mathe-kap6",
    "Die Punkte A(1, 2) und B(5, 6) definieren einen Vektor AB⃗. Welche Komponenten hat er?",
    ["(6, 8)", "(4, 4)", "(−4, −4)", "(5, 6)", "(1, 2)"],
    1,
    "AB⃗ = B − A = (5−1, 6−2) = (4, 4).",
    "leicht",
    ["Ortsvektor", "Verbindungsvektor"]
  ),
  q(
    "ma-pool-6-046",
    "mathe-kap6",
    "Drei Vektoren a⃗, b⃗, c⃗ sind linear abhängig, wenn:",
    [
      "a⃗ · b⃗ = 0",
      "es Skalare λ₁, λ₂, λ₃ (nicht alle 0) gibt, sodass λ₁a⃗ + λ₂b⃗ + λ₃c⃗ = 0⃗",
      "|a⃗| = |b⃗| = |c⃗|",
      "a⃗ × b⃗ = c⃗",
      "a⃗ + b⃗ + c⃗ = 0⃗ immer gilt",
    ],
    1,
    "Lineare Abhängigkeit: Es existieren Skalare λ₁, λ₂, λ₃, nicht alle null, mit λ₁a⃗ + λ₂b⃗ + λ₃c⃗ = 0⃗.",
    "schwer",
    ["Lineare Abhängigkeit"]
  ),
  q(
    "ma-pool-6-047",
    "mathe-kap6",
    "Für die Vektoren a⃗ = (3, 0) und b⃗ = (0, 4) berechne |a⃗ + b⃗|.",
    ["7", "5", "12", "√7", "1"],
    1,
    "a⃗ + b⃗ = (3, 4). |a⃗ + b⃗| = √(9 + 16) = √25 = 5.",
    "leicht",
    ["Vektoraddition", "Betrag", "rechenfrage"]
  ),
  q(
    "ma-pool-6-048",
    "mathe-kap6",
    "Der Vektor v⃗ = (2, −1, 2) wird mit dem Skalar −3 multipliziert. Welcher Vektor entsteht?",
    ["(−6, 3, −6)", "(6, −3, 6)", "(−6, −3, −6)", "(−6, 3, 6)", "(6, 3, −6)"],
    0,
    "−3 · (2, −1, 2) = (−6, 3, −6).",
    "leicht",
    ["Skalarmultiplikation", "rechenfrage"]
  ),
  q(
    "ma-pool-6-049",
    "mathe-kap6",
    "Zwei Vektoren a⃗ und b⃗ haben den Winkel α = 60° und die Beträge |a⃗| = 4, |b⃗| = 6. Berechne a⃗ · b⃗.",
    ["24", "12", "12√3", "24√3", "6"],
    1,
    "a⃗ · b⃗ = |a⃗| · |b⃗| · cos(α) = 4 · 6 · cos(60°) = 24 · 0,5 = 12.",
    "schwer",
    ["Skalarprodukt", "Winkel", "rechenfrage"]
  ),
  q(
    "ma-pool-6-050",
    "mathe-kap6",
    "Welche der folgenden Aussagen über Vektoren im ℝ³ ist FALSCH?",
    [
      "Drei nicht-komplanare Vektoren bilden eine Basis des ℝ³.",
      "Das Kreuzprodukt zweier paralleler Vektoren ist der Nullvektor.",
      "Der Nullvektor hat keinen definierten Richtungsvektor.",
      "Jeder Vektor im ℝ³ lässt sich als Linearkombination von e₁, e₂, e₃ darstellen.",
      "Zwei Vektoren im ℝ³ sind stets linear unabhängig.",
    ],
    4,
    "Zwei Vektoren im ℝ³ können linear abhängig sein (wenn einer ein Vielfaches des anderen ist). Beispiel: (1, 2, 3) und (2, 4, 6) sind linear abhängig.",
    "mittel",
    ["Vektoren", "Lineare Unabhängigkeit", "Falsch-Aussage"]
  ),

  // ─── mathe-kap7: Stochastik (10 Fragen) ────────────────────────────────
  q(
    "ma-pool-6-051",
    "mathe-kap7",
    "Aus einem Skatblatt (32 Karten) wird eine Karte gezogen. Wie groß ist die Wahrscheinlichkeit, eine Herz-Karte zu ziehen?",
    ["1/32", "4/32", "8/32", "1/8", "1/2"],
    2,
    "Es gibt 4 Farben à 8 Karten. P(Herz) = 8/32 = 1/4.",
    "leicht",
    ["Wahrscheinlichkeit", "Laplace"]
  ),
  q(
    "ma-pool-6-052",
    "mathe-kap7",
    "Wie viele verschiedene 4-stellige Codes können mit den Ziffern 0–9 gebildet werden (Wiederholung erlaubt)?",
    ["5 040", "10 000", "40", "1 000", "6 561"],
    1,
    "10 Möglichkeiten pro Stelle × 4 Stellen = 10⁴ = 10 000.",
    "leicht",
    ["Zählprinzip", "Variation mit Wiederholung", "rechenfrage"]
  ),
  q(
    "ma-pool-6-053",
    "mathe-kap7",
    "Die Wahrscheinlichkeit, dass mindestens eines von zwei unabhängigen Ereignissen A und B eintritt, berechnet sich als:",
    [
      "P(A) + P(B)",
      "P(A) · P(B)",
      "1 − P(A) · P(B)",
      "P(A) + P(B) − P(A) · P(B)",
      "1 − (1 − P(A)) · (1 − P(B))",
    ],
    3,
    "P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Bei Unabhängigkeit: P(A ∩ B) = P(A)·P(B). Also P(A ∪ B) = P(A) + P(B) − P(A)·P(B). (Option E ist äquivalent via Gegenwahrscheinlichkeit.)",
    "mittel",
    ["Additionssatz", "Unabhängigkeit"]
  ),
  q(
    "ma-pool-6-054",
    "mathe-kap7",
    "Eine Münze wird 5-mal geworfen. Wie groß ist die Wahrscheinlichkeit, genau 3-mal Kopf zu erhalten?",
    ["5/16", "10/32", "3/5", "1/32", "3/32"],
    1,
    "P(X = 3) = C(5,3) · (1/2)³ · (1/2)² = 10 · 1/32 = 10/32 = 5/16. (Option A ist äquivalent.)",
    "mittel",
    ["Binomialverteilung", "rechenfrage"]
  ),
  q(
    "ma-pool-6-055",
    "mathe-kap7",
    "In einer Schublade liegen 5 schwarze und 3 weiße Socken. Man greift blind 2 Socken. Wie groß ist die Wahrscheinlichkeit, ein Paar gleicher Farbe zu ziehen?",
    ["13/28", "25/64", "15/28", "1/2", "10/28"],
    0,
    "P(2 schwarz) = C(5,2)/C(8,2) = 10/28. P(2 weiß) = C(3,2)/C(8,2) = 3/28. P(gleich) = 13/28.",
    "schwer",
    ["Kombinatorik", "Hypergeometrische Verteilung", "rechenfrage"]
  ),
  q(
    "ma-pool-6-056",
    "mathe-kap7",
    "Die bedingte Wahrscheinlichkeit P(A|B) ist definiert als:",
    ["P(A ∪ B)/P(B)", "P(A ∩ B)/P(B)", "P(A) · P(B)", "P(B|A) · P(A)", "P(A)/P(B)"],
    1,
    "P(A|B) = P(A ∩ B)/P(B), vorausgesetzt P(B) > 0. Option D ist der Zähler (Satz von Bayes rearrangiert), nicht der Quotient.",
    "mittel",
    ["Bedingte Wahrscheinlichkeit"]
  ),
  q(
    "ma-pool-6-057",
    "mathe-kap7",
    "Auf wie viele Arten können 3 Bücher aus 8 verschiedenen Büchern ausgewählt und in eine Reihe gestellt werden?",
    ["56", "336", "512", "24", "6 720"],
    1,
    "Variation ohne Wiederholung: P(8,3) = 8 × 7 × 6 = 336.",
    "mittel",
    ["Variation", "Permutation", "rechenfrage"]
  ),
  q(
    "ma-pool-6-058",
    "mathe-kap7",
    "Der Median einer Stichprobe {2, 5, 7, 8, 12} beträgt:",
    ["5", "6,8", "7", "8", "34/5"],
    2,
    "Bei 5 sortierten Werten ist der Median der mittlere (3.) Wert: 7.",
    "leicht",
    ["Median", "Lagemaß"]
  ),
  q(
    "ma-pool-6-059",
    "mathe-kap7",
    "Ein Ereignis A hat die Wahrscheinlichkeit P(A) = 0,7. Wie groß ist die Wahrscheinlichkeit des Komplementärereignisses?",
    ["0,7", "0,3", "1,3", "−0,3", "0,49"],
    1,
    "P(Ā) = 1 − P(A) = 1 − 0,7 = 0,3.",
    "leicht",
    ["Gegenwahrscheinlichkeit"]
  ),
  q(
    "ma-pool-6-060",
    "mathe-kap7",
    "Welche der folgenden Aussagen über den Erwartungswert ist FALSCH?",
    [
      "E(X + Y) = E(X) + E(Y) gilt immer (Linearität).",
      "E(c · X) = c · E(X) für eine Konstante c.",
      "E(X · Y) = E(X) · E(Y) gilt immer.",
      "E(c) = c für eine Konstante c.",
      "Der Erwartungswert muss kein Wert sein, den X tatsächlich annimmt.",
    ],
    2,
    "E(X · Y) = E(X) · E(Y) gilt nur für unabhängige Zufallsvariablen, nicht allgemein. Für korrelierte Variablen muss die Kovarianz berücksichtigt werden.",
    "schwer",
    ["Erwartungswert", "Linearität", "Falsch-Aussage"]
  ),
];
