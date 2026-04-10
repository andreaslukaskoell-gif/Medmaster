/**
 * Mathematik BMS Pool 15 — 60 MedAT-Stil-Fragen.
 * Stoff: mathe-kap1 (Zahlen & Einheiten), mathe-kap2 (Algebra & Geometrie),
 *        mathe-kap3 (Grundlagen), mathe-kap5 (Funktionen), mathe-kap6 (Vektoren),
 *        mathe-kap7 (Stochastik).
 * Mix: ~40 Typ A, ~15 Typ M (Rechenfrage), ~5 Falsch-Aussagen.
 * Schwierigkeit: 24 leicht, 24 mittel, 12 schwer.
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

export const mathematikPool15: Question[] = [
  // ─── mathe-kap1: Zahlen, Mengen, Einheiten (10 Fragen) ───

  q(
    "ma-pool-15-001",
    "mathe-kap1",
    "Der pH-Wert einer Lösung beträgt 4. Die Konzentration der H⁺-Ionen in mol/L ist:",
    ["10⁻² mol/L", "10⁻³ mol/L", "10⁻⁴ mol/L", "10⁻⁵ mol/L", "4 mol/L"],
    2,
    "pH = −log[H⁺]. pH = 4 → [H⁺] = 10⁻⁴ mol/L.",
    "leicht",
    ["Einheiten", "pH-Wert", "Logarithmus"]
  ),
  q(
    "ma-pool-15-002",
    "mathe-kap1",
    "Ein Thermometer misst 310 K. In Grad Celsius ist das:",
    ["27 °C", "37 °C", "47 °C", "73 °C", "−37 °C"],
    1,
    "T_C = T_K − 273,15 ≈ 310 − 273 = 37 °C (Körpertemperatur).",
    "leicht",
    ["Einheiten", "Temperatur", "rechenfrage"]
  ),
  q(
    "ma-pool-15-003",
    "mathe-kap1",
    "Die Geschwindigkeit des Blutflusses in der Aorta beträgt ca. 0,4 m/s. In cm/s ist das:",
    ["0,04 cm/s", "0,4 cm/s", "4 cm/s", "40 cm/s", "400 cm/s"],
    3,
    "1 m = 100 cm. Also 0,4 m/s = 40 cm/s.",
    "leicht",
    ["Einheiten", "Umrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-15-004",
    "mathe-kap1",
    "Welche Aussage über komplexe Zahlen ist falsch?",
    [
      "ℂ enthält alle reellen Zahlen",
      "Die imaginäre Einheit i erfüllt i² = −1",
      "Jede komplexe Zahl hat die Form a + bi",
      "ℝ ⊂ ℂ",
      "Jede komplexe Zahl ist auch eine reelle Zahl",
    ],
    4,
    "Nicht jede komplexe Zahl ist reell — z. B. 2 + 3i ∉ ℝ. Reelle Zahlen sind die Teilmenge von ℂ mit b = 0.",
    "mittel",
    ["Zahlenmengen", "komplexe Zahlen", "Falsch-Aussage"]
  ),
  q(
    "ma-pool-15-005",
    "mathe-kap1",
    "Ein Dosimeter misst 0,25 mSv. Wie viel µSv sind das?",
    ["0,025 µSv", "2,5 µSv", "25 µSv", "250 µSv", "2500 µSv"],
    3,
    "1 mSv = 1000 µSv. 0,25 mSv = 250 µSv.",
    "leicht",
    ["Einheiten", "Präfixe", "rechenfrage"]
  ),
  q(
    "ma-pool-15-006",
    "mathe-kap1",
    "Berechnen Sie: √(1,6 × 10⁻⁵) in wissenschaftlicher Notation.",
    ["4 × 10⁻³", "1,6 × 10⁻²", "4 × 10⁻²", "1,26 × 10⁻²", "4 × 10⁻⁴"],
    0,
    "√(1,6 × 10⁻⁵) = √(16 × 10⁻⁶) = 4 × 10⁻³.",
    "schwer",
    ["wissenschaftliche Notation", "Wurzeln", "rechenfrage"]
  ),
  q(
    "ma-pool-15-007",
    "mathe-kap1",
    "Die Dichte von Knochengewebe beträgt ca. 1,9 g/cm³. Ein Knochen mit Volumen 50 cm³ hat die Masse:",
    ["19 g", "38 g", "76 g", "95 g", "190 g"],
    3,
    "m = ρ × V = 1,9 g/cm³ × 50 cm³ = 95 g.",
    "leicht",
    ["Einheiten", "Dichte", "rechenfrage"]
  ),
  q(
    "ma-pool-15-009",
    "mathe-kap1",
    "Ein Blutdruckwert von 16 kPa entspricht wie vielen Pa?",
    ["160 Pa", "1600 Pa", "16 000 Pa", "160 000 Pa", "1,6 Pa"],
    2,
    "1 kPa = 1000 Pa. 16 kPa = 16 000 Pa.",
    "leicht",
    ["Einheiten", "Präfixe", "rechenfrage"]
  ),
  q(
    "ma-pool-15-010",
    "mathe-kap1",
    "Die Verdopplungszeit einer Bakterienkultur beträgt 20 min. Wie groß ist der Wachstumsfaktor nach 1 Stunde?",
    ["3", "4", "6", "8", "16"],
    3,
    "60 min / 20 min = 3 Verdopplungen. 2³ = 8.",
    "mittel",
    ["Zehnerpotenzen", "Exponentialwachstum", "rechenfrage"]
  ),

  // ─── mathe-kap2: Algebra, Gleichungen, Geometrie (10 Fragen) ───

  q(
    "ma-pool-15-011",
    "mathe-kap2",
    "Lösen Sie: √(x + 5) = 3. x = ?",
    ["2", "4", "6", "14", "−2"],
    1,
    "Quadrieren: x + 5 = 9 → x = 4. Probe: √(4 + 5) = √9 = 3 ✓.",
    "leicht",
    ["Algebra", "Wurzelgleichung", "rechenfrage"]
  ),
  q(
    "ma-pool-15-012",
    "mathe-kap2",
    "Die Seitenlänge eines Würfels beträgt 4 cm. Seine Raumdiagonale ist:",
    ["4√2 cm", "4√3 cm", "8 cm", "12 cm", "4 cm"],
    1,
    "Raumdiagonale = a√3 = 4√3 ≈ 6,93 cm.",
    "mittel",
    ["Geometrie", "Würfel", "Diagonale"]
  ),
  q(
    "ma-pool-15-014",
    "mathe-kap2",
    "Ein Dreieck hat die Eckpunkte A(0,0), B(6,0) und C(3,4). Die Fläche beträgt:",
    ["8", "10", "12", "15", "24"],
    2,
    "A = (1/2)|x_A(y_B − y_C) + x_B(y_C − y_A) + x_C(y_A − y_B)| = (1/2)|0(0−4)+6(4−0)+3(0−0)| = (1/2)|24| = 12.",
    "mittel",
    ["Geometrie", "Dreieck", "Fläche", "Koordinaten", "rechenfrage"]
  ),
  q(
    "ma-pool-15-015",
    "mathe-kap2",
    "Welche Aussage über Polynome ist falsch?",
    [
      "Ein Polynom n-ten Grades hat höchstens n Nullstellen",
      "Der Grad eines Polynoms ist der höchste Exponent",
      "Ein Polynom 2. Grades heißt quadratisch",
      "Jedes Polynom hat mindestens eine reelle Nullstelle",
      "Die Summe zweier Polynome ist wieder ein Polynom",
    ],
    3,
    "z. B. hat x² + 1 keine reelle Nullstelle (D < 0). Nur Polynome ungeraden Grades haben immer mindestens eine reelle Nullstelle.",
    "mittel",
    ["Algebra", "Polynome", "Falsch-Aussage"]
  ),
  q(
    "ma-pool-15-016",
    "mathe-kap2",
    "Die Oberfläche eines Zylinders (r = 3 cm, h = 7 cm) beträgt (O = 2πr(r+h), π ≈ 3,14):",
    ["94,2 cm²", "131,9 cm²", "188,4 cm²", "197,8 cm²", "263,8 cm²"],
    2,
    "O = 2 × 3,14 × 3 × (3+7) = 6,28 × 30 = 188,4 cm².",
    "mittel",
    ["Geometrie", "Zylinder", "Oberfläche", "rechenfrage"]
  ),
  q(
    "ma-pool-15-017",
    "mathe-kap2",
    "Lösen Sie: log₂(x) = 5. x = ?",
    ["10", "16", "25", "32", "64"],
    3,
    "log₂(x) = 5 → x = 2⁵ = 32.",
    "leicht",
    ["Algebra", "Logarithmusgleichung", "rechenfrage"]
  ),
  q(
    "ma-pool-15-018",
    "mathe-kap2",
    "Ein Parallelogramm hat Seitenlängen a = 10 cm und b = 6 cm, der eingeschlossene Winkel ist 30°. Die Fläche ist (A = ab·sin α):",
    ["15 cm²", "20 cm²", "30 cm²", "60 cm²", "45 cm²"],
    2,
    "A = 10 × 6 × sin(30°) = 60 × 0,5 = 30 cm².",
    "mittel",
    ["Geometrie", "Parallelogramm", "Trigonometrie", "rechenfrage"]
  ),
  q(
    "ma-pool-15-019",
    "mathe-kap2",
    "Der GGT (größte gemeinsame Teiler) von 84 und 126 ist:",
    ["6", "14", "21", "42", "63"],
    3,
    "84 = 2² × 3 × 7. 126 = 2 × 3² × 7. GGT = 2 × 3 × 7 = 42.",
    "schwer",
    ["Zahlentheorie", "GGT", "Primfaktorzerlegung", "rechenfrage"]
  ),
  q(
    "ma-pool-15-020",
    "mathe-kap2",
    "Wie viele Diagonalen hat ein konvexes Zehneck?",
    ["20", "25", "30", "35", "45"],
    3,
    "Anzahl Diagonalen = n(n−3)/2 = 10·7/2 = 35.",
    "schwer",
    ["Geometrie", "Polygon", "Kombinatorik", "rechenfrage"]
  ),

  // ─── mathe-kap3: Grundlagen (Brüche, Prozent, Potenzgesetze) (10 Fragen) ───

  q(
    "ma-pool-15-021",
    "mathe-kap3",
    "Berechnen Sie: (1/2)⁻³.",
    ["1/8", "−3/2", "8", "−8", "6"],
    2,
    "(1/2)⁻³ = (2/1)³ = 2³ = 8. Negative Exponenten kehren den Bruch um.",
    "leicht",
    ["Potenzgesetze", "rechenfrage"]
  ),
  q(
    "ma-pool-15-022",
    "mathe-kap3",
    "In einer Studie zeigen 36 von 150 Patienten eine Nebenwirkung. Der prozentuale Anteil beträgt:",
    ["18 %", "20 %", "22 %", "24 %", "26 %"],
    3,
    "36/150 = 0,24 = 24 %.",
    "mittel",
    ["Prozentrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-15-023",
    "mathe-kap3",
    "Vereinfachen Sie: (4/5) ÷ (2/15).",
    ["4/15", "8/75", "2/3", "6", "8/15"],
    3,
    "(4/5) ÷ (2/15) = (4/5) × (15/2) = 60/10 = 6.",
    "leicht",
    ["Bruchrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-15-024",
    "mathe-kap3",
    "Ein Medikament wird um 30 % teurer und dann um 30 % billiger. Verglichen mit dem Originalpreis ist es jetzt:",
    ["gleich teuer", "9 % teurer", "9 % billiger", "gleich billig wie zuvor", "1 % billiger"],
    2,
    "Faktor: 1,30 × 0,70 = 0,91. Also 9 % billiger als der Originalpreis.",
    "mittel",
    ["Prozentrechnung"]
  ),
  q(
    "ma-pool-15-025",
    "mathe-kap3",
    "Berechnen Sie: 5^(log₅ 7).",
    ["5", "7", "35", "log 35", "1"],
    1,
    "a^(log_a x) = x. Also 5^(log₅ 7) = 7. (Grundlegende Eigenschaft des Logarithmus.)",
    "mittel",
    ["Logarithmus", "Potenzgesetze"]
  ),
  q(
    "ma-pool-15-027",
    "mathe-kap3",
    "Vereinfachen Sie: ln(e⁵) − ln(e²).",
    ["ln(3)", "3", "e³", "5/2", "7"],
    1,
    "ln(e⁵) = 5, ln(e²) = 2. Differenz: 5 − 2 = 3. Alternativ: ln(e⁵/e²) = ln(e³) = 3.",
    "leicht",
    ["Logarithmus", "rechenfrage"]
  ),
  q(
    "ma-pool-15-028",
    "mathe-kap3",
    "Ein Betrag von 5000 € wächst jährlich um 3 %. Nach 2 Jahren beträgt er:",
    ["5150,00 €", "5300,00 €", "5304,50 €", "5309,45 €", "5600,00 €"],
    2,
    "5000 × 1,03² = 5000 × 1,0609 = 5304,50 €.",
    "mittel",
    ["Zinseszins", "Potenzrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-15-029",
    "mathe-kap3",
    "Welchen Wert hat (125)^(−1/3)?",
    ["1/5", "−5", "5", "1/125", "25"],
    0,
    "125^(−1/3) = 1/(125^(1/3)) = 1/∛125 = 1/5.",
    "schwer",
    ["Potenzgesetze", "Wurzeln", "rechenfrage"]
  ),
  q(
    "ma-pool-15-030",
    "mathe-kap3",
    "Der Dreisatz: 8 Ampullen kosten 12 €. Wie viel kosten 20 Ampullen?",
    ["24 €", "28 €", "30 €", "36 €", "40 €"],
    2,
    "1 Ampulle = 12/8 = 1,50 €. 20 Ampullen = 20 × 1,50 = 30 €.",
    "leicht",
    ["Dreisatz", "rechenfrage"]
  ),

  // ─── mathe-kap5: Funktionen (10 Fragen) ───

  q(
    "ma-pool-15-031",
    "mathe-kap5",
    "Die Funktion f(x) = 3·sin(2x) hat die Amplitude und Periode:",
    [
      "Amplitude 3, Periode π",
      "Amplitude 2, Periode 3π",
      "Amplitude 6, Periode π",
      "Amplitude 3, Periode 2π",
      "Amplitude 2, Periode π",
    ],
    0,
    "f(x) = A·sin(Bx): Amplitude = |A| = 3, Periode = 2π/B = 2π/2 = π.",
    "mittel",
    ["Trigonometrie", "Sinusfunktion", "Amplitude", "Periode"]
  ),
  q(
    "ma-pool-15-032",
    "mathe-kap5",
    "Welche Gerade verläuft parallel zu y = 3x − 7?",
    ["y = −3x + 2", "y = 3x + 5", "y = x/3 − 7", "y = −x/3 + 1", "y = 7 − 3x"],
    1,
    "Parallele Geraden haben gleiche Steigung. y = 3x + 5 hat Steigung m = 3 wie y = 3x − 7.",
    "leicht",
    ["lineare Funktion", "Parallelität", "Steigung"]
  ),
  q(
    "ma-pool-15-033",
    "mathe-kap5",
    "Bestimmen Sie die Ableitung: f(x) = ln(3x + 1).",
    ["1/(3x + 1)", "3/(3x + 1)", "ln(3)", "3·ln(3x + 1)", "1/(x + 1)"],
    1,
    "Kettenregel: f'(x) = 1/(3x + 1) · 3 = 3/(3x + 1).",
    "mittel",
    ["Ableitung", "Kettenregel", "Logarithmus"]
  ),
  q(
    "ma-pool-15-034",
    "mathe-kap5",
    "Die Funktion f(x) = x⁴ − 8x² + 16 lässt sich schreiben als:",
    ["(x² − 4)²", "(x − 2)⁴", "(x² + 4)²", "(x − 4)²(x + 4)²", "x²(x − 4)²"],
    0,
    "x⁴ − 8x² + 16 = (x²)² − 2·4·x² + 4² = (x² − 4)². (Binomische Formel mit u = x².)",
    "schwer",
    ["quadratische Funktion", "Faktorisierung", "binomische Formeln"]
  ),
  q(
    "ma-pool-15-035",
    "mathe-kap5",
    "Berechnen Sie ∫₀¹ eˣ dx.",
    ["1", "e", "e − 1", "e + 1", "1/e"],
    2,
    "∫eˣ dx = eˣ + C. [eˣ]₀¹ = e¹ − e⁰ = e − 1 ≈ 1,718.",
    "mittel",
    ["Integral", "Exponentialfunktion", "rechenfrage"]
  ),
  q(
    "ma-pool-15-036",
    "mathe-kap5",
    "Die Funktion f(x) = 1/(1 + e⁻ˣ) (logistische Funktion) hat für x → ∞ den Grenzwert:",
    ["0", "0,5", "1", "∞", "e"],
    2,
    "Für x → ∞: e⁻ˣ → 0, also f(x) → 1/(1 + 0) = 1. Die logistische Funktion sättigt bei 1.",
    "mittel",
    ["Funktion", "Grenzwert", "logistische Funktion"]
  ),
  q(
    "ma-pool-15-037",
    "mathe-kap5",
    "Welche Aussage über die Funktion f(x) = |x| ist falsch?",
    [
      "f ist für alle x ∈ ℝ definiert",
      "f(x) ≥ 0 für alle x",
      "f ist gerade: f(−x) = f(x)",
      "f ist überall differenzierbar",
      "f hat ein globales Minimum bei x = 0",
    ],
    3,
    "f(x) = |x| ist bei x = 0 nicht differenzierbar (Knickstelle). Die Ableitung springt von −1 auf +1.",
    "leicht",
    ["Betragsfunktion", "Differenzierbarkeit", "Falsch-Aussage"]
  ),
  q(
    "ma-pool-15-038",
    "mathe-kap5",
    "Die zusammengesetzte Funktion (f ∘ g)(x) mit f(x) = x² und g(x) = 2x + 1 ergibt:",
    ["2x² + 1", "4x² + 4x + 1", "(2x + 1)²", "2x² + 2x + 1", "x⁴ + 2x² + 1"],
    1,
    "(f ∘ g)(x) = f(g(x)) = (2x + 1)² = 4x² + 4x + 1.",
    "mittel",
    ["Funktion", "Komposition"]
  ),
  q(
    "ma-pool-15-039",
    "mathe-kap5",
    "Die Funktion f(x) = cos(2x) hat bei x = 0 den Funktionswert und die Steigung:",
    [
      "f(0) = 1, f'(0) = 0",
      "f(0) = 0, f'(0) = −2",
      "f(0) = 1, f'(0) = −2",
      "f(0) = 0, f'(0) = 2",
      "f(0) = 1, f'(0) = 2",
    ],
    0,
    "f(0) = cos(0) = 1. f'(x) = −2sin(2x). f'(0) = −2sin(0) = 0.",
    "mittel",
    ["Trigonometrie", "Ableitung"]
  ),
  q(
    "ma-pool-15-040",
    "mathe-kap5",
    "Die Fläche zwischen f(x) = x² und der x-Achse im Intervall [0, 3] beträgt:",
    ["3", "4,5", "9", "13,5", "27"],
    2,
    "∫₀³ x² dx = [x³/3]₀³ = 27/3 − 0 = 9.",
    "mittel",
    ["Integral", "Fläche", "rechenfrage"]
  ),

  // ─── mathe-kap6: Vektorrechnung (8 Fragen) ───

  q(
    "ma-pool-15-041",
    "mathe-kap6",
    "Die Vektoren a = (2, −3, 6). Der Betrag |a| ist:",
    ["5", "7", "11", "√49", "√41"],
    1,
    "|a| = √(4 + 9 + 36) = √49 = 7.",
    "leicht",
    ["Vektoren", "Betrag"]
  ),
  q(
    "ma-pool-15-042",
    "mathe-kap6",
    "Berechnen Sie a · b für a = (5, −1, 2) und b = (1, 3, −4).",
    ["−6", "0", "6", "−4", "10"],
    0,
    "a · b = 5·1 + (−1)·3 + 2·(−4) = 5 − 3 − 8 = −6.",
    "mittel",
    ["Vektoren", "Skalarprodukt", "rechenfrage"]
  ),
  q(
    "ma-pool-15-043",
    "mathe-kap6",
    "Der Schwerpunkt des Dreiecks mit Eckpunkten P₁(3,0,0), P₂(0,6,0), P₃(0,0,9) ist:",
    ["(1, 2, 3)", "(3, 6, 9)", "(1, 3, 4,5)", "(3, 2, 3)", "(1,5; 3; 4,5)"],
    0,
    "S = ((3+0+0)/3, (0+6+0)/3, (0+0+9)/3) = (1, 2, 3).",
    "mittel",
    ["Vektoren", "Schwerpunkt", "rechenfrage"]
  ),
  q(
    "ma-pool-15-044",
    "mathe-kap6",
    "Die Ebenengleichung lautet: 2x + 3y − z = 7. Welcher Punkt liegt auf der Ebene?",
    ["(1, 1, 1)", "(2, 0, 0)", "(0, 0, 7)", "(1, 1, −2)", "(0, 2, 0)"],
    3,
    "Probe (1,1,−2): 2·1 + 3·1 − (−2) = 2 + 3 + 2 = 7 ✓. Gegenproben: (1,1,1): 2+3−1=4≠7. (2,0,0): 4≠7. (0,0,7): −7≠7. (0,2,0): 6≠7.",
    "mittel",
    ["Vektoren", "Ebene", "Koordinatengeometrie"]
  ),
  q(
    "ma-pool-15-045",
    "mathe-kap6",
    "Das Kreuzprodukt a × b mit a = (1, 2, 0) und b = (0, 0, 3) ist:",
    ["(6, 0, 0)", "(0, −3, 0)", "(6, −3, 0)", "(0, 0, 6)", "(−6, 3, 0)"],
    2,
    "a × b = (2·3 − 0·0, 0·0 − 1·3, 1·0 − 2·0) = (6, −3, 0).",
    "schwer",
    ["Vektoren", "Kreuzprodukt", "rechenfrage"]
  ),
  q(
    "ma-pool-15-046",
    "mathe-kap6",
    "Für welchen Wert von t stehen a = (t, 1, −2) und b = (3, 2, 1) senkrecht?",
    ["−1", "0", "1", "2", "3"],
    1,
    "a · b = 0: 3t + 2 + (−2) = 0 → 3t = 0 → t = 0.",
    "leicht",
    ["Vektoren", "Orthogonalität", "Skalarprodukt", "rechenfrage"]
  ),
  q(
    "ma-pool-15-047",
    "mathe-kap6",
    "Der Vektor v = (4, −4, 2) wird normiert (auf Länge 1 gebracht). Das Ergebnis ist:",
    ["(2/3, −2/3, 1/3)", "(4/6, −4/6, 2/6)", "(1, −1, 0,5)", "(4/9, −4/9, 2/9)", "(2, −2, 1)"],
    0,
    "|v| = √(16 + 16 + 4) = √36 = 6. v/|v| = (4/6, −4/6, 2/6) = (2/3, −2/3, 1/3).",
    "schwer",
    ["Vektoren", "Einheitsvektor", "rechenfrage"]
  ),
  q(
    "ma-pool-15-048",
    "mathe-kap6",
    "Zwei Geraden: g₁: r = (1,0,0) + s(0,1,0) und g₂: r = (0,1,0) + t(1,0,0). Diese Geraden sind:",
    ["parallel", "identisch", "windschief", "schneidend", "können sich nicht berühren"],
    3,
    "g₁ verläuft in y-Richtung, g₂ in x-Richtung. Schnittpunkt: (1,0,0) + s(0,1,0) = (0,1,0) + t(1,0,0) → t = 1, s = 1. Punkt: (1,1,0). Die Geraden schneiden sich.",
    "schwer",
    ["Vektoren", "Geraden", "Schnitt"]
  ),

  // ─── mathe-kap7: Stochastik (12 Fragen) ───

  q(
    "ma-pool-15-049",
    "mathe-kap7",
    "Ein Glücksrad hat die Sektoren 1–5 (gleich groß). Wie groß ist die Wahrscheinlichkeit, eine ungerade Zahl zu drehen?",
    ["1/5", "2/5", "3/5", "4/5", "1/2"],
    2,
    "Ungerade: {1, 3, 5} = 3 von 5. P = 3/5.",
    "leicht",
    ["Wahrscheinlichkeit", "Laplace"]
  ),
  q(
    "ma-pool-15-050",
    "mathe-kap7",
    "Aus 7 verschiedenen Farben werden 3 ausgewählt (Reihenfolge egal). Wie viele Kombinationen gibt es?",
    ["21", "35", "42", "210", "343"],
    1,
    "C(7,3) = 7!/(3!·4!) = (7·6·5)/(3·2·1) = 210/6 = 35.",
    "leicht",
    ["Kombinatorik", "Binomialkoeffizient", "rechenfrage"]
  ),
  q(
    "ma-pool-15-051",
    "mathe-kap7",
    "Zwei Würfel: P(mindestens eine 6) = ?",
    ["1/6", "11/36", "1/36", "10/36", "1/3"],
    1,
    "P(mind. eine 6) = 1 − P(keine 6) = 1 − (5/6)² = 1 − 25/36 = 11/36.",
    "mittel",
    ["Wahrscheinlichkeit", "Gegenereignis", "Würfel", "rechenfrage"]
  ),
  q(
    "ma-pool-15-052",
    "mathe-kap7",
    "In einer Bevölkerung haben 8 % Blutgruppe B. In einer Stichprobe von 50 Personen: Wie viele Blutgruppe-B-Träger sind im Mittel zu erwarten?",
    ["2", "3", "4", "5", "8"],
    2,
    "E(X) = n · p = 50 × 0,08 = 4.",
    "mittel",
    ["Erwartungswert", "Binomialverteilung", "rechenfrage"]
  ),
  q(
    "ma-pool-15-053",
    "mathe-kap7",
    "Beim Werfen zweier Würfel: Wie viele verschiedene Ergebnisse sind möglich (geordnete Paare)?",
    ["6", "11", "12", "21", "36"],
    4,
    "6 × 6 = 36 geordnete Paare.",
    "leicht",
    ["Kombinatorik", "Würfel"]
  ),
  q(
    "ma-pool-15-054",
    "mathe-kap7",
    "Ein Ereignis hat P(A) = 0,3. In 10 unabhängigen Versuchen: Var(X) mit X = Anzahl des Eintretens von A?",
    ["0,9", "2,1", "3,0", "7,0", "9,0"],
    1,
    "X ~ Bin(10, 0,3). Var(X) = n·p·(1−p) = 10 × 0,3 × 0,7 = 2,1.",
    "mittel",
    ["Binomialverteilung", "Varianz", "rechenfrage"]
  ),
  q(
    "ma-pool-15-055",
    "mathe-kap7",
    "P(A) = 0,6 und P(B|A) = 0,25. P(A ∩ B) = ?",
    ["0,15", "0,25", "0,35", "0,85", "0,42"],
    0,
    "P(A ∩ B) = P(A) · P(B|A) = 0,6 × 0,25 = 0,15.",
    "mittel",
    ["bedingte Wahrscheinlichkeit", "Multiplikationssatz", "rechenfrage"]
  ),
  q(
    "ma-pool-15-056",
    "mathe-kap7",
    "Wie viele verschiedene Sitzordnungen gibt es für 6 Personen an einem runden Tisch? (Rotationen gelten als gleich.)",
    ["6", "24", "60", "120", "720"],
    3,
    "Kreispermutation: (n−1)! = 5! = 120.",
    "schwer",
    ["Kombinatorik", "Kreispermutation", "rechenfrage"]
  ),
  q(
    "ma-pool-15-057",
    "mathe-kap7",
    "Welche Aussage zur Binomialverteilung B(n, p) ist falsch?",
    [
      "Sie modelliert die Anzahl von Erfolgen in n unabhängigen Versuchen",
      "E(X) = n · p",
      "Var(X) = n · p · (1 − p)",
      "P(X = k) = C(n,k) · pᵏ · (1−p)ⁿ⁻ᵏ",
      "Sie ist für jedes p und n symmetrisch",
    ],
    4,
    "Die Binomialverteilung ist nur für p = 0,5 symmetrisch. Für p ≠ 0,5 ist sie schief.",
    "mittel",
    ["Binomialverteilung", "Falsch-Aussage"]
  ),
  q(
    "ma-pool-15-058",
    "mathe-kap7",
    "In einem Beutel sind 5 rote, 3 blaue und 2 gelbe Kugeln. Zwei werden ohne Zurücklegen gezogen. P(erst rot, dann blau) = ?",
    ["15/100", "15/90", "1/6", "3/20", "5/30"],
    2,
    "P = (5/10) × (3/9) = 15/90 = 1/6.",
    "mittel",
    ["Wahrscheinlichkeit", "Urnenmodell", "ohne Zurücklegen", "rechenfrage"]
  ),
  q(
    "ma-pool-15-059",
    "mathe-kap7",
    "Der Korrelationskoeffizient r liegt immer im Intervall:",
    ["[0, 1]", "[−1, 1]", "[0, ∞)", "(−∞, ∞)", "[−1, 0]"],
    1,
    "Der Korrelationskoeffizient r liegt immer zwischen −1 und 1: r ∈ [−1, 1]. r = 1 bedeutet perfekten positiven, r = −1 perfekten negativen linearen Zusammenhang.",
    "leicht",
    ["Statistik", "Korrelation"]
  ),
  q(
    "ma-pool-15-060",
    "mathe-kap7",
    "Eine Münze wird 8-mal geworfen. Wie groß ist P(genau 4-mal Kopf)?",
    ["35/128", "70/256", "1/2", "8/256", "56/256"],
    1,
    "P(X=4) = C(8,4)·(1/2)⁸ = 70/256. Beachte: 70/256 = 35/128.",
    "schwer",
    ["Binomialverteilung", "Kombinatorik", "rechenfrage"]
  ),
];
