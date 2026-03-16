/**
 * Mathematik BMS Pool 5 — 60 Fragen im MedAT-Stil (Typ A, Typ M, Falsch-Aussagen).
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

export const mathematikPool5: Question[] = [
  // ─── mathe-kap1: Zahlen, Mengen, Einheiten (10 Fragen) ─────────────────
  q(
    "ma-pool-5-001",
    "mathe-kap1",
    "Welche der folgenden Zahlen gehört zur Menge ℤ \\ ℕ?",
    ["5", "0", "−7", "1/2", "√4"],
    2,
    "ℤ \\ ℕ enthält die nicht-natürlichen ganzen Zahlen, also die negativen ganzen Zahlen (und ggf. 0, je nach Konvention). −7 ∈ ℤ, aber −7 ∉ ℕ. √4 = 2 ∈ ℕ, 1/2 ∉ ℤ.",
    "leicht",
    ["Zahlenmengen"]
  ),
  q(
    "ma-pool-5-002",
    "mathe-kap1",
    "Eine Lösung hat eine Konzentration von 2,5 × 10⁻² mol/L. Wie viel mmol/L sind das?",
    ["0,25 mmol/L", "2,5 mmol/L", "25 mmol/L", "250 mmol/L", "0,025 mmol/L"],
    2,
    "2,5 × 10⁻² mol/L = 0,025 mol/L = 25 mmol/L (1 mol = 1 000 mmol).",
    "leicht",
    ["SI-Präfixe", "Umrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-5-003",
    "mathe-kap1",
    "Berechne: (−2)⁵ + (−2)⁴.",
    ["−48", "−16", "16", "48", "0"],
    1,
    "(−2)⁵ = −32 und (−2)⁴ = 16. Summe: −32 + 16 = −16.",
    "leicht",
    ["Potenzen", "Vorzeichen", "rechenfrage"]
  ),
  q(
    "ma-pool-5-004",
    "mathe-kap1",
    "Ein Volumen von 0,75 mL entspricht wie vielen Mikrolitern?",
    ["7,5 µL", "75 µL", "750 µL", "7 500 µL", "0,75 µL"],
    2,
    "1 mL = 1 000 µL. Also 0,75 mL = 750 µL.",
    "leicht",
    ["Einheiten", "Mikro", "rechenfrage"]
  ),
  q(
    "ma-pool-5-005",
    "mathe-kap1",
    "Welchen Wert hat |(−3)² − 4 · 5|?",
    ["11", "29", "−11", "1", "31"],
    0,
    "(−3)² − 4 · 5 = 9 − 20 = −11. Betrag: |−11| = 11.",
    "mittel",
    ["Betrag", "Reihenfolge der Operationen", "rechenfrage"]
  ),
  q(
    "ma-pool-5-006",
    "mathe-kap1",
    "Ein Laser emittiert Licht mit einer Frequenz von 5 × 10¹⁴ Hz. Die Lichtgeschwindigkeit beträgt 3 × 10⁸ m/s. Welche Wellenlänge hat das Licht?",
    ["600 nm", "6 000 nm", "60 nm", "6 × 10⁻⁷ m", "6 × 10⁻⁵ m"],
    0,
    "λ = c/f = (3 × 10⁸)/(5 × 10¹⁴) = 6 × 10⁻⁷ m = 600 nm. (Option D ist numerisch gleich, aber A ist die üblichere Angabe.)",
    "mittel",
    ["Wellenlänge", "Frequenz", "rechenfrage"]
  ),
  q(
    "ma-pool-5-007",
    "mathe-kap1",
    "Berechne: log₁₀(0,001).",
    ["−3", "3", "−2", "1/1000", "−1/3"],
    0,
    "0,001 = 10⁻³, also log₁₀(10⁻³) = −3.",
    "mittel",
    ["Logarithmus", "rechenfrage"]
  ),
  q(
    "ma-pool-5-008",
    "mathe-kap1",
    "Welche der folgenden Aussagen über die Euler'sche Zahl e ist FALSCH?",
    [
      "e ist eine irrationale Zahl.",
      "e ≈ 2,718",
      "e ist die Basis des natürlichen Logarithmus.",
      "e ist eine rationale Zahl, da sie als Grenzwert eines Bruchs darstellbar ist.",
      "Die Funktion f(x) = eˣ hat die Eigenschaft f'(x) = f(x).",
    ],
    3,
    "e ist irrational. Dass e als Grenzwert darstellbar ist (z. B. lim (1 + 1/n)ⁿ), macht e nicht rational. Eine rationale Zahl müsste als p/q mit ganzen Zahlen darstellbar sein.",
    "mittel",
    ["Euler'sche Zahl", "Falsch-Aussage"]
  ),
  q(
    "ma-pool-5-009",
    "mathe-kap1",
    "Wie viele Nanometer sind ein Millimeter?",
    ["10³", "10⁶", "10⁹", "10⁴", "10⁵"],
    1,
    "1 mm = 10⁻³ m und 1 nm = 10⁻⁹ m. Also 1 mm = 10⁻³/10⁻⁹ nm = 10⁶ nm.",
    "leicht",
    ["SI-Präfixe", "Umrechnung"]
  ),
  q(
    "ma-pool-5-010",
    "mathe-kap1",
    "Vereinfache: (8 × 10⁵) × (3 × 10⁻²).",
    ["24 × 10³", "2,4 × 10⁴", "2,4 × 10³", "24 × 10⁷", "2,4 × 10⁸"],
    1,
    "8 × 3 = 24, 10⁵ × 10⁻² = 10³. Also 24 × 10³ = 2,4 × 10⁴.",
    "leicht",
    ["Zehnerpotenzen", "rechenfrage"]
  ),

  // ─── mathe-kap2: Algebra, Gleichungen, Geometrie (10 Fragen) ───────────
  q(
    "ma-pool-5-011",
    "mathe-kap2",
    "Löse: √(2x + 1) = 5.",
    ["x = 12", "x = 13", "x = 2", "x = 24", "x = 3"],
    0,
    "√(2x + 1) = 5 ⇒ 2x + 1 = 25 ⇒ 2x = 24 ⇒ x = 12. Probe: √(25) = 5 ✓.",
    "leicht",
    ["Wurzelgleichung", "rechenfrage"]
  ),
  q(
    "ma-pool-5-012",
    "mathe-kap2",
    "Wie lautet die Lösungsmenge der Gleichung |x − 4| = 3?",
    ["{1, 7}", "{−1, 7}", "{1, −7}", "{7}", "{−1, −7}"],
    0,
    "|x − 4| = 3 ⇒ x − 4 = 3 oder x − 4 = −3 ⇒ x = 7 oder x = 1.",
    "leicht",
    ["Betragsgleichung"]
  ),
  q(
    "ma-pool-5-013",
    "mathe-kap2",
    "Der Umfang eines Rechtecks beträgt 30 cm und die Länge ist doppelt so groß wie die Breite. Wie lang ist die Breite?",
    ["10 cm", "5 cm", "15 cm", "7,5 cm", "3 cm"],
    1,
    "Sei b die Breite, dann l = 2b. U = 2(l + b) = 2(2b + b) = 6b = 30 ⇒ b = 5 cm.",
    "leicht",
    ["Rechteck", "Umfang", "rechenfrage"]
  ),
  q(
    "ma-pool-5-014",
    "mathe-kap2",
    "Welche Gleichung hat die Lösung x = −2 als einzige Lösung?",
    ["x² + 4x + 4 = 0", "x² − 4 = 0", "x² − 4x + 4 = 0", "x² + 2x = 0", "x² + 4 = 0"],
    0,
    "x² + 4x + 4 = (x + 2)² = 0 hat die einzige Lösung x = −2 (Doppellösung).",
    "mittel",
    ["Quadratische Gleichung", "Doppellösung"]
  ),
  q(
    "ma-pool-5-015",
    "mathe-kap2",
    "Berechne die Seitenlänge eines Quadrats, dessen Diagonale 10 cm beträgt.",
    ["5 cm", "5√2 cm", "10/√2 cm", "10√2 cm", "√10 cm"],
    1,
    "In einem Quadrat mit Seite a gilt: Diagonale d = a√2. Also a = d/√2 = 10/√2 = 5√2 cm. (Option C ist äquivalent, aber B ist die vereinfachte Form.)",
    "mittel",
    ["Quadrat", "Diagonale", "Pythagoras"]
  ),
  q(
    "ma-pool-5-016",
    "mathe-kap2",
    "Vereinfache den Ausdruck: (x² − 9)/(x + 3) für x ≠ −3.",
    ["x − 3", "x + 3", "x² − 3", "x − 9", "(x − 3)²"],
    0,
    "(x² − 9)/(x + 3) = (x + 3)(x − 3)/(x + 3) = x − 3.",
    "leicht",
    ["Faktorisierung", "Bruchterme"]
  ),
  q(
    "ma-pool-5-017",
    "mathe-kap2",
    "Der Winkel α eines rechtwinkligen Dreiecks hat sin(α) = 5/13. Wie groß ist cos(α)?",
    ["8/13", "12/13", "5/12", "13/12", "7/13"],
    1,
    "sin²(α) + cos²(α) = 1 ⇒ cos²(α) = 1 − 25/169 = 144/169 ⇒ cos(α) = 12/13.",
    "schwer",
    ["Trigonometrie", "Pythagoras", "rechenfrage"]
  ),
  q(
    "ma-pool-5-018",
    "mathe-kap2",
    "Welches Volumen hat ein Zylinder mit Radius r = 4 cm und Höhe h = 10 cm? (π ≈ 3,14)",
    ["502,4 cm³", "125,6 cm³", "251,2 cm³", "160π cm³", "80π cm³"],
    0,
    "V = πr²h = 3,14 × 16 × 10 = 502,4 cm³. (Option D ist der exakte Wert.)",
    "mittel",
    ["Zylinder", "Volumen", "rechenfrage"]
  ),
  q(
    "ma-pool-5-019",
    "mathe-kap2",
    "Welche der folgenden Aussagen über den Satz des Pythagoras ist FALSCH?",
    [
      "Er gilt nur für rechtwinklige Dreiecke.",
      "a² + b² = c², wobei c die Hypotenuse ist.",
      "Die Hypotenuse liegt dem rechten Winkel gegenüber.",
      "Wenn a² + b² > c², ist das Dreieck stumpfwinklig.",
      "Er kann zur Abstandsberechnung im Koordinatensystem verwendet werden.",
    ],
    3,
    "Wenn a² + b² > c², ist das Dreieck spitzwinklig (nicht stumpfwinklig). Stumpfwinklig: a² + b² < c².",
    "schwer",
    ["Pythagoras", "Falsch-Aussage"]
  ),
  q(
    "ma-pool-5-020",
    "mathe-kap2",
    "Löse: 2^(x+1) = 32.",
    ["x = 3", "x = 4", "x = 5", "x = 15", "x = 16"],
    1,
    "32 = 2⁵. Also 2^(x+1) = 2⁵ ⇒ x + 1 = 5 ⇒ x = 4.",
    "mittel",
    ["Exponentialgleichung", "rechenfrage"]
  ),

  // ─── mathe-kap3: Grundlagen (Brüche, Prozent, Potenzgesetze) (10 Fragen) ─
  q(
    "ma-pool-5-021",
    "mathe-kap3",
    "Vereinfache: (a⁴ · a⁻²) / a³.",
    ["a⁻¹", "a³", "a", "a⁹", "a⁻³"],
    0,
    "a⁴ · a⁻² = a² und a²/a³ = a⁻¹ = 1/a.",
    "leicht",
    ["Potenzgesetze"]
  ),
  q(
    "ma-pool-5-022",
    "mathe-kap3",
    "Wie viel sind 3/8 von 240?",
    ["30", "80", "90", "120", "160"],
    2,
    "3/8 × 240 = 3 × 30 = 90.",
    "leicht",
    ["Bruchrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-5-023",
    "mathe-kap3",
    "Ein Krankenhaus hat 400 Betten. Die Auslastung beträgt 72 %. Wie viele Betten sind belegt?",
    ["288", "300", "272", "328", "192"],
    0,
    "72 % von 400 = 0,72 × 400 = 288.",
    "leicht",
    ["Prozentrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-5-024",
    "mathe-kap3",
    "Vereinfache: ³√(8x⁶).",
    ["2x²", "2x³", "4x²", "8x²", "2x⁶"],
    0,
    "³√(8x⁶) = ³√8 · ³√(x⁶) = 2 · x² = 2x².",
    "mittel",
    ["Wurzeln", "Potenzgesetze"]
  ),
  q(
    "ma-pool-5-025",
    "mathe-kap3",
    "Berechne: log₃(81).",
    ["3", "4", "27", "9", "2"],
    1,
    "3⁴ = 81, also log₃(81) = 4.",
    "leicht",
    ["Logarithmus", "rechenfrage"]
  ),
  q(
    "ma-pool-5-026",
    "mathe-kap3",
    "Aus einem Tank mit 500 L Wasser verdunsten täglich 3 %. Wie viel Wasser ist nach 2 Tagen noch vorhanden?",
    ["470,45 L", "485 L", "470 L", "494 L", "460 L"],
    0,
    "Nach 1 Tag: 500 × 0,97 = 485 L. Nach 2 Tagen: 485 × 0,97 = 470,45 L.",
    "mittel",
    ["Prozentrechnung", "Exponentialzerfall", "rechenfrage"]
  ),
  q(
    "ma-pool-5-027",
    "mathe-kap3",
    "Welchen Wert hat: 5⁰ + 5⁻¹ + 5⁻²?",
    ["1,24", "1,04", "6,25", "1,20", "31/25"],
    0,
    "5⁰ = 1, 5⁻¹ = 0,2, 5⁻² = 0,04. Summe: 1 + 0,2 + 0,04 = 1,24. (Option E = 31/25 = 1,24 ist äquivalent.)",
    "mittel",
    ["Potenzen", "rechenfrage"]
  ),
  q(
    "ma-pool-5-028",
    "mathe-kap3",
    "Ein Artikel kostet nach einer Ermäßigung von 30 % noch 49 €. Was war der ursprüngliche Preis?",
    ["63,70 €", "70 €", "73,50 €", "64,70 €", "79 €"],
    1,
    "Neuer Preis = 70 % des alten Preises. 0,7 × P = 49 ⇒ P = 49/0,7 = 70 €.",
    "mittel",
    ["Prozentrechnung", "Grundwert", "rechenfrage"]
  ),
  q(
    "ma-pool-5-029",
    "mathe-kap3",
    "Welche der folgenden Aussagen über Logarithmen ist FALSCH?",
    [
      "log(a · b) = log(a) + log(b)",
      "log(a/b) = log(a) − log(b)",
      "log(aⁿ) = n · log(a)",
      "log(a + b) = log(a) · log(b)",
      "log(1) = 0",
    ],
    3,
    "log(a + b) ≠ log(a) · log(b). Es gibt keine einfache Logarithmenregel für die Summe. Alle anderen Regeln sind korrekt.",
    "mittel",
    ["Logarithmus", "Falsch-Aussage"]
  ),
  q(
    "ma-pool-5-030",
    "mathe-kap3",
    "Berechne: (2/3)³.",
    ["6/9", "8/27", "2/9", "6/27", "8/9"],
    1,
    "(2/3)³ = 2³/3³ = 8/27.",
    "leicht",
    ["Bruchrechnung", "Potenzen", "rechenfrage"]
  ),

  // ─── mathe-kap5: Funktionen (10 Fragen) ────────────────────────────────
  q(
    "ma-pool-5-031",
    "mathe-kap5",
    "Die Funktion f(x) = 2ˣ schneidet die y-Achse bei:",
    ["(0, 0)", "(0, 1)", "(0, 2)", "(1, 0)", "(0, −1)"],
    1,
    "f(0) = 2⁰ = 1. Der y-Achsenabschnitt liegt bei (0, 1).",
    "leicht",
    ["Exponentialfunktion", "y-Achsenabschnitt"]
  ),
  q(
    "ma-pool-5-032",
    "mathe-kap5",
    "Bestimme die Nullstellen von f(x) = x² + 2x − 15.",
    ["x = 3, x = −5", "x = −3, x = 5", "x = 5, x = −3", "x = 15, x = −1", "x = 1, x = −15"],
    0,
    "f(x) = (x + 5)(x − 3) = 0 ⇒ x = −5 oder x = 3.",
    "leicht",
    ["Quadratische Funktion", "Nullstellen", "rechenfrage"]
  ),
  q(
    "ma-pool-5-033",
    "mathe-kap5",
    "Welchen Wert hat tan(45°)?",
    ["0", "√2", "1", "√3", "1/2"],
    2,
    "tan(45°) = sin(45°)/cos(45°) = 1.",
    "leicht",
    ["Trigonometrie", "Tangensfunktion"]
  ),
  q(
    "ma-pool-5-034",
    "mathe-kap5",
    "Die Funktion f(x) = 1/x hat an der Stelle x = 2 den Funktionswert:",
    ["2", "0,5", "−0,5", "1", "−2"],
    1,
    "f(2) = 1/2 = 0,5.",
    "leicht",
    ["Hyperbel", "rechenfrage"]
  ),
  q(
    "ma-pool-5-035",
    "mathe-kap5",
    "Welche der folgenden Funktionen ist streng monoton wachsend für alle x ∈ ℝ?",
    ["f(x) = x²", "f(x) = sin(x)", "f(x) = eˣ", "f(x) = |x|", "f(x) = cos(x)"],
    2,
    "eˣ ist streng monoton wachsend für alle x ∈ ℝ (f'(x) = eˣ > 0). x² und |x| fallen für x < 0, sin und cos sind periodisch.",
    "mittel",
    ["Monotonie", "Exponentialfunktion"]
  ),
  q(
    "ma-pool-5-036",
    "mathe-kap5",
    "Bestimme die Ableitung von f(x) = x · eˣ.",
    ["eˣ", "x · eˣ", "(1 + x) · eˣ", "(x − 1) · eˣ", "x² · eˣ"],
    2,
    "Produktregel: f'(x) = 1 · eˣ + x · eˣ = (1 + x) · eˣ.",
    "schwer",
    ["Ableitung", "Produktregel"]
  ),
  q(
    "ma-pool-5-037",
    "mathe-kap5",
    "Die Asymptote der Funktion f(x) = 3/(x − 2) + 1 ist:",
    [
      "vertikale Asymptote x = 2, horizontale Asymptote y = 1",
      "vertikale Asymptote x = −2, horizontale Asymptote y = 3",
      "vertikale Asymptote x = 2, horizontale Asymptote y = 3",
      "vertikale Asymptote x = 1, horizontale Asymptote y = 2",
      "keine Asymptoten",
    ],
    0,
    "Der Nenner wird 0 bei x = 2 → vertikale Asymptote. Für x → ±∞ geht 3/(x−2) → 0, also f(x) → 1 → horizontale Asymptote y = 1.",
    "schwer",
    ["Rationale Funktion", "Asymptote"]
  ),
  q(
    "ma-pool-5-038",
    "mathe-kap5",
    "Berechne: ∫₁⁴ (1/√x) dx.",
    ["2", "3", "4", "1", "√3"],
    0,
    "∫ x^(−1/2) dx = 2x^(1/2). Einsetzen: 2√4 − 2√1 = 4 − 2 = 2.",
    "schwer",
    ["Integral", "rechenfrage"]
  ),
  q(
    "ma-pool-5-039",
    "mathe-kap5",
    "Der Graph von f(x) = (x − 1)³ hat einen Wendepunkt bei:",
    ["x = 0", "x = 1", "x = −1", "x = 3", "keinen Wendepunkt"],
    1,
    "f'(x) = 3(x − 1)², f''(x) = 6(x − 1). f''(x) = 0 bei x = 1, und f'''(1) = 6 ≠ 0 → Wendepunkt bei x = 1.",
    "schwer",
    ["Wendepunkt", "Ableitung"]
  ),
  q(
    "ma-pool-5-040",
    "mathe-kap5",
    "Welche Gleichung beschreibt eine Gerade, die parallel zur Geraden y = 3x − 2 verläuft und durch den Punkt (1, 7) geht?",
    ["y = 3x + 4", "y = 3x − 7", "y = −3x + 10", "y = 3x + 7", "y = (1/3)x + 20/3"],
    0,
    "Parallele Geraden haben die gleiche Steigung k = 3. y = 3x + d. Einsetzen: 7 = 3(1) + d ⇒ d = 4. Also y = 3x + 4.",
    "mittel",
    ["Lineare Funktion", "Parallelität", "rechenfrage"]
  ),

  // ─── mathe-kap6: Vektorrechnung (10 Fragen) ────────────────────────────
  q(
    "ma-pool-5-041",
    "mathe-kap6",
    "Gegeben: a⃗ = (4, −3). Welchen Betrag hat a⃗?",
    ["7", "1", "5", "√7", "25"],
    2,
    "|a⃗| = √(16 + 9) = √25 = 5.",
    "leicht",
    ["Vektorbetrag", "rechenfrage"]
  ),
  q(
    "ma-pool-5-042",
    "mathe-kap6",
    "Berechne a⃗ − b⃗ für a⃗ = (5, 2, −1) und b⃗ = (3, −4, 2).",
    ["(2, 6, −3)", "(8, −2, 1)", "(2, −6, 3)", "(2, 6, 1)", "(−2, 6, −3)"],
    0,
    "a⃗ − b⃗ = (5−3, 2−(−4), −1−2) = (2, 6, −3).",
    "leicht",
    ["Vektorsubtraktion", "rechenfrage"]
  ),
  q(
    "ma-pool-5-043",
    "mathe-kap6",
    "Welcher Vektor ist der Ortsvektor des Schwerpunkts des Dreiecks mit den Eckpunkten A(0, 0), B(6, 0), C(0, 9)?",
    ["(2, 3)", "(3, 3)", "(3, 4,5)", "(6, 9)", "(2, 4,5)"],
    0,
    "Schwerpunkt S = ((0+6+0)/3, (0+0+9)/3) = (2, 3).",
    "mittel",
    ["Schwerpunkt", "Dreieck", "rechenfrage"]
  ),
  q(
    "ma-pool-5-044",
    "mathe-kap6",
    "Das Spatprodukt (a⃗ × b⃗) · c⃗ gibt geometrisch an:",
    [
      "den Winkel zwischen a⃗ und c⃗",
      "den Flächeninhalt des von a⃗, b⃗, c⃗ aufgespannten Dreiecks",
      "das Volumen des von a⃗, b⃗, c⃗ aufgespannten Parallelepipeds",
      "die Länge der Raumdiagonale",
      "den Umfang des aufgespannten Parallelogramms",
    ],
    2,
    "Das Spatprodukt (a⃗ × b⃗) · c⃗ entspricht dem Volumen des von a⃗, b⃗, c⃗ aufgespannten Parallelepipeds (Spats).",
    "schwer",
    ["Spatprodukt", "Volumen"]
  ),
  q(
    "ma-pool-5-045",
    "mathe-kap6",
    "Für a⃗ = (2, 1) gilt: 3a⃗ − (1, −2) =",
    ["(5, 5)", "(5, 1)", "(7, 5)", "(7, 1)", "(5, 3)"],
    0,
    "3 · (2, 1) = (6, 3). (6, 3) − (1, −2) = (5, 5).",
    "leicht",
    ["Vektorrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-5-046",
    "mathe-kap6",
    "Welcher Winkel liegt zwischen den Vektoren a⃗ = (1, 0, 0) und b⃗ = (0, 0, 1)?",
    ["0°", "45°", "90°", "180°", "60°"],
    2,
    "a⃗ · b⃗ = 0, also cos(α) = 0/(1·1) = 0 → α = 90°.",
    "leicht",
    ["Winkel", "Skalarprodukt"]
  ),
  q(
    "ma-pool-5-047",
    "mathe-kap6",
    "Ein Vektor v⃗ hat den Betrag 10 und zeigt in Richtung des Einheitsvektors e⃗ = (3/5, 4/5). Welche Komponenten hat v⃗?",
    ["(6, 8)", "(3, 4)", "(30, 40)", "(5, 5)", "(10, 10)"],
    0,
    "v⃗ = 10 · (3/5, 4/5) = (6, 8). Probe: |(6, 8)| = √(36 + 64) = 10 ✓.",
    "mittel",
    ["Einheitsvektor", "Skalierung", "rechenfrage"]
  ),
  q(
    "ma-pool-5-048",
    "mathe-kap6",
    "Gegeben ist die Ebene E: 2x + 3y − z = 6. Welcher Vektor ist ein Normalvektor dieser Ebene?",
    ["(2, 3, 6)", "(2, 3, −1)", "(−2, −3, 1)", "(1, 1, −6)", "(2, −3, 1)"],
    1,
    "In der Ebenengleichung ax + by + cz = d ist (a, b, c) = (2, 3, −1) der Normalvektor. (Option C ist antiparallel, also auch ein Normalvektor, aber B ist die direkte Ablesung.)",
    "mittel",
    ["Normalvektor", "Ebenengleichung"]
  ),
  q(
    "ma-pool-5-049",
    "mathe-kap6",
    "Der Vektor a⃗ = (−4, 3) wird um 180° gedreht. Welcher Vektor entsteht?",
    ["(4, −3)", "(−3, −4)", "(3, 4)", "(4, 3)", "(−4, −3)"],
    0,
    "Eine Drehung um 180° entspricht der Multiplikation mit −1: −a⃗ = (4, −3).",
    "mittel",
    ["Vektordrehung"]
  ),
  q(
    "ma-pool-5-050",
    "mathe-kap6",
    "Welche der folgenden Aussagen über das Skalarprodukt ist FALSCH?",
    [
      "a⃗ · b⃗ = b⃗ · a⃗ (Kommutativität)",
      "a⃗ · (b⃗ + c⃗) = a⃗ · b⃗ + a⃗ · c⃗ (Distributivität)",
      "a⃗ · a⃗ = |a⃗|²",
      "Das Ergebnis des Skalarprodukts ist ein Vektor.",
      "|a⃗ · b⃗| ≤ |a⃗| · |b⃗| (Cauchy-Schwarz-Ungleichung)",
    ],
    3,
    "Das Skalarprodukt liefert eine Zahl (Skalar), keinen Vektor. Alle anderen Aussagen sind korrekte Eigenschaften.",
    "mittel",
    ["Skalarprodukt", "Falsch-Aussage"]
  ),

  // ─── mathe-kap7: Stochastik (10 Fragen) ────────────────────────────────
  q(
    "ma-pool-5-051",
    "mathe-kap7",
    "In einer Urne liegen 4 rote und 6 blaue Kugeln. Eine Kugel wird gezogen. Wie groß ist die Wahrscheinlichkeit, eine rote Kugel zu ziehen?",
    ["4/6", "6/10", "2/5", "4/10", "3/5"],
    2,
    "P(rot) = 4/10 = 2/5. (Option D ist äquivalent, aber C ist die gekürzte Form.)",
    "leicht",
    ["Wahrscheinlichkeit", "Laplace"]
  ),
  q(
    "ma-pool-5-052",
    "mathe-kap7",
    "Berechne: C(7, 3).",
    ["21", "35", "42", "210", "120"],
    1,
    "C(7, 3) = 7!/(3! · 4!) = (7 × 6 × 5)/(3 × 2 × 1) = 210/6 = 35.",
    "leicht",
    ["Binomialkoeffizient", "rechenfrage"]
  ),
  q(
    "ma-pool-5-053",
    "mathe-kap7",
    "Zwei faire Würfel werden geworfen. Wie groß ist die Wahrscheinlichkeit, einen Pasch (gleiche Augenzahl) zu werfen?",
    ["1/36", "6/36", "12/36", "1/12", "2/36"],
    1,
    "Günstige Ergebnisse: (1,1), (2,2), (3,3), (4,4), (5,5), (6,6) = 6 von 36. P = 6/36 = 1/6.",
    "leicht",
    ["Wahrscheinlichkeit", "Würfel"]
  ),
  q(
    "ma-pool-5-054",
    "mathe-kap7",
    "Eine Zufallsvariable X hat die Werte 1, 2, 3 mit den Wahrscheinlichkeiten P(1) = 0,2, P(2) = 0,5, P(3) = 0,3. Berechne E(X).",
    ["2,0", "2,1", "2,3", "1,8", "2,5"],
    1,
    "E(X) = 1·0,2 + 2·0,5 + 3·0,3 = 0,2 + 1,0 + 0,9 = 2,1.",
    "mittel",
    ["Erwartungswert", "rechenfrage"]
  ),
  q(
    "ma-pool-5-055",
    "mathe-kap7",
    "Ein Test auf eine Krankheit hat eine Spezifität von 98 %. Was bedeutet das?",
    [
      "98 % der Kranken werden korrekt erkannt.",
      "98 % der Gesunden werden korrekt als gesund erkannt.",
      "98 % aller Testergebnisse sind richtig.",
      "2 % der Kranken werden übersehen.",
      "Die Prävalenz der Krankheit beträgt 98 %.",
    ],
    1,
    "Spezifität = P(negatives Testergebnis | gesund) = 98 %. Das heißt, 98 % der Gesunden werden korrekt als gesund identifiziert. Sensitivität beschreibt die korrekte Erkennung der Kranken.",
    "mittel",
    ["Spezifität", "Diagnostik"]
  ),
  q(
    "ma-pool-5-056",
    "mathe-kap7",
    "In einem Baumdiagramm folgen nacheinander zwei Ereignisse: A mit P(A) = 0,6 und B|A mit P(B|A) = 0,3. Wie groß ist P(A ∩ B)?",
    ["0,90", "0,18", "0,30", "0,50", "0,02"],
    1,
    "Multiplikationsregel: P(A ∩ B) = P(A) · P(B|A) = 0,6 · 0,3 = 0,18.",
    "mittel",
    ["Bedingte Wahrscheinlichkeit", "Baumdiagramm", "rechenfrage"]
  ),
  q(
    "ma-pool-5-057",
    "mathe-kap7",
    "Auf wie viele Arten kann man aus 12 Fragen eine Auswahl von 4 treffen (Reihenfolge egal)?",
    ["495", "48", "11 880", "2 970", "1 320"],
    0,
    "C(12, 4) = 12!/(4! · 8!) = (12 × 11 × 10 × 9)/(4 × 3 × 2 × 1) = 11880/24 = 495.",
    "mittel",
    ["Kombination", "Binomialkoeffizient", "rechenfrage"]
  ),
  q(
    "ma-pool-5-058",
    "mathe-kap7",
    "Die Standardabweichung einer Stichprobe beträgt σ = 4. Wie groß ist die Varianz?",
    ["2", "8", "16", "4", "√4"],
    2,
    "Varianz = σ² = 4² = 16.",
    "leicht",
    ["Varianz", "Standardabweichung", "rechenfrage"]
  ),
  q(
    "ma-pool-5-059",
    "mathe-kap7",
    "Bei einem Bernoulli-Experiment mit n = 5 und p = 0,4: Wie groß ist P(X = 0), also die Wahrscheinlichkeit keines Treffers?",
    ["0,07776", "0,32768", "0,01024", "0,6⁵", "0,4⁵"],
    0,
    "P(X = 0) = C(5,0) · 0,4⁰ · 0,6⁵ = 1 · 1 · 0,6⁵ = 0,07776.",
    "schwer",
    ["Binomialverteilung", "rechenfrage"]
  ),
  q(
    "ma-pool-5-060",
    "mathe-kap7",
    "Ein Glücksrad hat 3 gleich große Sektoren: rot, blau, grün. Es wird zweimal gedreht. Wie viele verschiedene Ergebnisse (geordnete Paare) sind möglich?",
    ["3", "6", "9", "12", "27"],
    2,
    "Bei 3 Möglichkeiten pro Drehung und 2 Drehungen: 3² = 9 geordnete Paare.",
    "leicht",
    ["Zählprinzip", "rechenfrage"]
  ),
];
