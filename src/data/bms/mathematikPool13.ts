/**
 * Mathematik BMS Pool 13 — 60 MedAT-Stil-Fragen.
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

export const mathematikPool13: Question[] = [
  // ─── mathe-kap1: Zahlen, Mengen, Einheiten (10 Fragen) ───

  q(
    "ma-pool-13-001",
    "mathe-kap1",
    "Die Masse eines Wassermoleküls beträgt ca. 3 × 10⁻²⁶ kg. Wie viele Moleküle enthält 1 g Wasser?",
    ["3,3 × 10²²", "3,3 × 10²³", "3,3 × 10²⁴", "3,3 × 10²⁵", "3,3 × 10²⁶"],
    0,
    "1 g = 10⁻³ kg. Anzahl = 10⁻³ / (3 × 10⁻²⁶) = (1/3) × 10⁽⁻³⁺²⁶⁾ = (1/3) × 10²³ = 0,33 × 10²³ = 3,3 × 10²².",
    "mittel",
    ["wissenschaftliche Notation", "Zehnerpotenzen", "rechenfrage"]
  ),
  q(
    "ma-pool-13-002",
    "mathe-kap1",
    "Ein EKG misst eine Spannung von 1,2 mV. Wie viel ist das in Mikrovolt (µV)?",
    ["0,0012 µV", "12 µV", "120 µV", "1200 µV", "12 000 µV"],
    3,
    "1 mV = 1000 µV. Also 1,2 mV = 1200 µV.",
    "leicht",
    ["Einheiten", "Präfixe", "rechenfrage"]
  ),
  q(
    "ma-pool-13-003",
    "mathe-kap1",
    "Welche Zahl liegt zwischen √2 und √8?",
    ["1", "2", "3", "4", "6"],
    1,
    "√2 ≈ 1,41 und √8 ≈ 2,83. Die Zahl 2 liegt dazwischen. 1 ist kleiner als √2, 3 und höher sind größer als √8.",
    "leicht",
    ["Zahlenmengen", "Wurzeln"]
  ),
  q(
    "ma-pool-13-004",
    "mathe-kap1",
    "Eine Pipette fasst 200 µL. Wie viele volle Pipetten braucht man, um 5 mL zu füllen?",
    ["10", "15", "20", "25", "50"],
    3,
    "5 mL = 5000 µL. 5000 ÷ 200 = 25 Pipetten.",
    "leicht",
    ["Einheiten", "rechenfrage"]
  ),
  q(
    "ma-pool-13-005",
    "mathe-kap1",
    "Ein Medikament hat eine Halbwertszeit von 4 × 10³ Sekunden. Wie viele Minuten sind das (gerundet)?",
    ["40 min", "67 min", "400 min", "667 min", "4000 min"],
    1,
    "4000 s ÷ 60 s/min ≈ 66,7 min ≈ 67 min.",
    "mittel",
    ["Einheiten", "Umrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-13-006",
    "mathe-kap1",
    "Welche Aussage über natürliche Zahlen ℕ ist falsch?",
    [
      "ℕ ist eine Teilmenge von ℤ",
      "ℕ enthält keine negativen Zahlen",
      "Jede natürliche Zahl hat einen Nachfolger",
      "Das Produkt zweier natürlicher Zahlen ist natürlich",
      "Die Division zweier natürlicher Zahlen ergibt immer eine natürliche Zahl",
    ],
    4,
    "z. B. 3 ÷ 2 = 1,5 ∉ ℕ. Die natürlichen Zahlen sind nicht abgeschlossen unter Division.",
    "leicht",
    ["Zahlenmengen", "natürliche Zahlen", "Falsch-Aussage"]
  ),
  q(
    "ma-pool-13-007",
    "mathe-kap1",
    "Die Erdbeschleunigung beträgt g ≈ 9,81 m/s². Drücken Sie diese in cm/s² aus.",
    ["0,0981 cm/s²", "0,981 cm/s²", "9,81 cm/s²", "98,1 cm/s²", "981 cm/s²"],
    4,
    "1 m = 100 cm. Also 9,81 m/s² = 9,81 × 100 cm/s² = 981 cm/s².",
    "leicht",
    ["Einheiten", "Umrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-13-008",
    "mathe-kap1",
    "Berechnen Sie: (6 × 10⁵)² in wissenschaftlicher Notation.",
    ["36 × 10¹⁰", "3,6 × 10¹¹", "6 × 10¹⁰", "12 × 10⁵", "3,6 × 10¹⁰"],
    1,
    "(6 × 10⁵)² = 6² × (10⁵)² = 36 × 10¹⁰ = 3,6 × 10¹¹.",
    "mittel",
    ["wissenschaftliche Notation", "Potenzgesetze", "rechenfrage"]
  ),
  q(
    "ma-pool-13-009",
    "mathe-kap1",
    "Ein Blutbild zeigt 5,2 × 10⁶ Erythrozyten/µL. Ein Tropfen Blut (50 µL) enthält wie viele Erythrozyten?",
    ["2,6 × 10⁷", "2,6 × 10⁸", "5,2 × 10⁸", "2,6 × 10⁹", "5,2 × 10⁷"],
    1,
    "5,2 × 10⁶ /µL × 50 µL = 260 × 10⁶ = 2,6 × 10⁸.",
    "mittel",
    ["wissenschaftliche Notation", "Hämatologie", "rechenfrage"]
  ),
  q(
    "ma-pool-13-010",
    "mathe-kap1",
    "Sortieren Sie aufsteigend: 1/4, 0,3, 2/7, 0,26, 3/10.",
    [
      "1/4 < 0,26 < 2/7 < 0,3 = 3/10",
      "0,26 < 1/4 < 2/7 < 3/10 = 0,3",
      "0,26 < 1/4 < 2/7 < 0,3 < 3/10",
      "1/4 < 0,26 < 0,3 < 2/7 < 3/10",
      "0,26 < 2/7 < 1/4 < 0,3 = 3/10",
    ],
    0,
    "1/4 = 0,25; 2/7 ≈ 0,286; 3/10 = 0,3. Aufsteigend: 0,25 < 0,26 < 0,286 < 0,3. Also: 1/4 < 0,26 < 2/7 < 0,3 = 3/10.",
    "schwer",
    ["Zahlenmengen", "Brüche", "Dezimalzahlen"]
  ),

  // ─── mathe-kap2: Algebra, Gleichungen, Geometrie (10 Fragen) ───

  q(
    "ma-pool-13-011",
    "mathe-kap2",
    "Lösen Sie: 5(x − 2) = 3(x + 4). x = ?",
    ["7", "9", "11", "13", "−1"],
    2,
    "5x − 10 = 3x + 12 → 2x = 22 → x = 11.",
    "leicht",
    ["Algebra", "lineare Gleichung", "rechenfrage"]
  ),
  q(
    "ma-pool-13-012",
    "mathe-kap2",
    "Die Fläche eines Trapezes mit parallelen Seiten a = 8 cm, c = 4 cm und Höhe h = 5 cm beträgt:",
    ["20 cm²", "30 cm²", "40 cm²", "60 cm²", "15 cm²"],
    1,
    "A = (a + c)/2 × h = (8 + 4)/2 × 5 = 6 × 5 = 30 cm².",
    "leicht",
    ["Geometrie", "Trapez", "Fläche", "rechenfrage"]
  ),
  q(
    "ma-pool-13-013",
    "mathe-kap2",
    "Welche der folgenden Gleichungen hat keine reelle Lösung?",
    ["x² = 4", "x² + 1 = 0", "x² − 3 = 0", "2x² = 8", "x² = 0"],
    1,
    "x² + 1 = 0 → x² = −1 hat keine reelle Lösung (Quadrat einer reellen Zahl ist nie negativ).",
    "leicht",
    ["quadratische Gleichung", "reelle Lösungen"]
  ),
  q(
    "ma-pool-13-014",
    "mathe-kap2",
    "Ein Kreiszylinder hat Radius r = 5 cm und Höhe h = 10 cm. Die Mantelfläche (M = 2πrh) beträgt (π ≈ 3,14):",
    ["157 cm²", "314 cm²", "628 cm²", "785 cm²", "100 cm²"],
    1,
    "M = 2 × 3,14 × 5 × 10 = 314 cm².",
    "mittel",
    ["Geometrie", "Zylinder", "Mantelfläche", "rechenfrage"]
  ),
  q(
    "ma-pool-13-015",
    "mathe-kap2",
    "Entwickeln Sie: (2x − 3)².",
    ["4x² − 9", "4x² − 6x + 9", "4x² − 12x + 9", "2x² − 12x + 9", "4x² + 12x + 9"],
    2,
    "(2x − 3)² = (2x)² − 2·(2x)·3 + 3² = 4x² − 12x + 9.",
    "leicht",
    ["Algebra", "binomische Formeln"]
  ),
  q(
    "ma-pool-13-016",
    "mathe-kap2",
    "Ein Dreieck hat die Seitenlängen 7, 24, 25. Ist es rechtwinklig?",
    [
      "Ja, da 7² + 24² = 25²",
      "Nein, da 7 + 24 ≠ 25²",
      "Ja, da 7 + 24 = 25 + 6",
      "Nein, da die Seiten zu unterschiedlich sind",
      "Kann nicht bestimmt werden",
    ],
    0,
    "7² + 24² = 49 + 576 = 625 = 25². Der Satz des Pythagoras ist erfüllt, also ist das Dreieck rechtwinklig.",
    "mittel",
    ["Geometrie", "Pythagoras", "Dreieck"]
  ),
  q(
    "ma-pool-13-017",
    "mathe-kap2",
    "Lösen Sie: x² − 2x − 8 = 0 mit der Lösungsformel. Die Summe der Lösungen ist:",
    ["−2", "0", "2", "4", "8"],
    2,
    "Nach Vieta: x₁ + x₂ = −(−2)/1 = 2. (Alternativ: x = (2 ± √(4+32))/2 = (2 ± 6)/2 → x₁ = 4, x₂ = −2, Summe = 2.)",
    "mittel",
    ["quadratische Gleichung", "Vieta"]
  ),
  q(
    "ma-pool-13-020",
    "mathe-kap2",
    "Ein Hohlzylinder hat Außenradius R = 5 cm, Innenradius r = 3 cm und Höhe h = 10 cm. Das Materialvolumen beträgt (π ≈ 3,14):",
    ["251 cm³", "502 cm³", "160π cm³", "80π cm³", "125,7 cm³"],
    1,
    "V = πh(R² − r²) = 3,14 × 10 × (25 − 9) = 3,14 × 160 = 502,4 ≈ 502 cm³.",
    "schwer",
    ["Geometrie", "Zylinder", "Volumen", "rechenfrage"]
  ),

  // ─── mathe-kap3: Grundlagen (Brüche, Prozent, Potenzgesetze) (10 Fragen) ───

  q(
    "ma-pool-13-021",
    "mathe-kap3",
    "Berechnen Sie: 2/5 + 3/10 − 1/4.",
    ["9/20", "11/20", "7/20", "1/2", "3/10"],
    0,
    "Hauptnenner 20: 8/20 + 6/20 − 5/20 = 9/20.",
    "leicht",
    ["Bruchrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-13-022",
    "mathe-kap3",
    "Eine Aktie steigt um 25 % und fällt dann um 20 %. Wie hoch ist der Gesamtgewinn/verlust?",
    ["+5 %", "0 %", "−5 %", "+3 %", "−1 %"],
    1,
    "Faktor: 1,25 × 0,80 = 1,00. Also 0 % Veränderung (kein Gewinn, kein Verlust).",
    "mittel",
    ["Prozentrechnung"]
  ),
  q(
    "ma-pool-13-023",
    "mathe-kap3",
    "Vereinfachen Sie: (a³b²)² / (a²b)³.",
    ["a", "ab", "a²b", "a⁰b = b", "b/a"],
    3,
    "(a³b²)² = a⁶b⁴. (a²b)³ = a⁶b³. Quotient: a⁰b¹ = b.",
    "mittel",
    ["Potenzgesetze", "Bruchrechnung"]
  ),
  q(
    "ma-pool-13-024",
    "mathe-kap3",
    "Welchen Wert hat 8^(−2/3)?",
    ["1/2", "1/4", "−4", "4", "2/3"],
    1,
    "8^(−2/3) = 1/(8^(2/3)) = 1/((∛8)²) = 1/(2²) = 1/4.",
    "schwer",
    ["Potenzgesetze", "Wurzeln", "rechenfrage"]
  ),
  q(
    "ma-pool-13-025",
    "mathe-kap3",
    "Ein Spital behandelt 1200 Patienten pro Monat. 8 % benötigen eine Intensivstation. Wie viele Intensivpatienten sind das?",
    ["80", "84", "90", "96", "108"],
    3,
    "1200 × 0,08 = 96 Intensivpatienten.",
    "mittel",
    ["Prozentrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-13-026",
    "mathe-kap3",
    "Vereinfachen Sie: √(72) / √(2).",
    ["4", "5", "6", "√36", "12"],
    2,
    "√72 / √2 = √(72/2) = √36 = 6.",
    "leicht",
    ["Wurzeln", "Vereinfachung", "rechenfrage"]
  ),
  q(
    "ma-pool-13-027",
    "mathe-kap3",
    "Welche Aussage über Bruchrechnung ist falsch?",
    [
      "a/b + c/b = (a+c)/b",
      "a/b × c/d = ac/(bd)",
      "a/b ÷ c/d = ad/(bc)",
      "a/b + c/d = (a+c)/(b+d)",
      "a/1 = a",
    ],
    3,
    "a/b + c/d ≠ (a+c)/(b+d). Korrekt: a/b + c/d = (ad + bc)/(bd). Man braucht den gemeinsamen Nenner.",
    "leicht",
    ["Bruchrechnung", "Falsch-Aussage"]
  ),
  q(
    "ma-pool-13-028",
    "mathe-kap3",
    "Berechnen Sie: log₃(81).",
    ["2", "3", "4", "5", "9"],
    2,
    "3⁴ = 81. Also log₃(81) = 4.",
    "leicht",
    ["Logarithmus", "rechenfrage"]
  ),
  q(
    "ma-pool-13-029",
    "mathe-kap3",
    "Eine Bakterienkultur verdoppelt sich alle 30 Minuten. Nach 3 Stunden hat sich die Anzahl ver-?-facht.",
    ["6-facht", "8-facht", "16-facht", "32-facht", "64-facht"],
    4,
    "3 h = 180 min. 180/30 = 6 Verdopplungen. 2⁶ = 64.",
    "mittel",
    ["Exponentialrechnung", "Wachstum", "rechenfrage"]
  ),
  q(
    "ma-pool-13-030",
    "mathe-kap3",
    "Drücken Sie 0,004 als Bruch in gekürzter Form aus.",
    ["4/100", "1/250", "2/500", "4/1000", "1/200"],
    1,
    "0,004 = 4/1000 = 1/250 (kürzen durch 4).",
    "mittel",
    ["Bruchrechnung", "Dezimalzahlen"]
  ),

  // ─── mathe-kap5: Funktionen (10 Fragen) ───

  q(
    "ma-pool-13-031",
    "mathe-kap5",
    "Die Geraden y = 2x + 1 und y = −x + 7 schneiden sich bei:",
    ["(1, 3)", "(2, 5)", "(3, 4)", "(4, 3)", "(2, 3)"],
    1,
    "2x + 1 = −x + 7 → 3x = 6 → x = 2. y = 2(2) + 1 = 5. Schnittpunkt: (2, 5).",
    "leicht",
    ["lineare Funktion", "Schnittpunkt", "rechenfrage"]
  ),
  q(
    "ma-pool-13-032",
    "mathe-kap5",
    "Die Funktion f(x) = (x − 1)(x + 3) hat Nullstellen bei:",
    [
      "x = 1 und x = −3",
      "x = −1 und x = 3",
      "x = 1 und x = 3",
      "x = −1 und x = −3",
      "x = 0 und x = 3",
    ],
    0,
    "(x − 1)(x + 3) = 0 wenn x = 1 oder x = −3.",
    "leicht",
    ["quadratische Funktion", "Nullstellen"]
  ),
  q(
    "ma-pool-13-033",
    "mathe-kap5",
    "Bestimmen Sie die Ableitung von f(x) = x · eˣ.",
    ["eˣ", "x · eˣ", "(1 + x) · eˣ", "(x − 1) · eˣ", "x² · eˣ"],
    2,
    "Produktregel: f'(x) = 1 · eˣ + x · eˣ = (1 + x)eˣ.",
    "mittel",
    ["Ableitung", "Produktregel", "Exponentialfunktion"]
  ),
  q(
    "ma-pool-13-034",
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
    "cos(x) = 0 bei x = π/2 und x = 3π/2 (90° und 270°).",
    "leicht",
    ["Trigonometrie", "Kosinusfunktion", "Nullstellen"]
  ),
  q(
    "ma-pool-13-035",
    "mathe-kap5",
    "Eine Bakterienpopulation folgt N(t) = 500 · e^(0,3t) (t in Stunden). Nach wie vielen Stunden sind es 5000 Bakterien? (ln 10 ≈ 2,303)",
    ["5,0 h", "6,5 h", "7,7 h", "8,3 h", "10,0 h"],
    2,
    "5000 = 500 · e^(0,3t) → e^(0,3t) = 10 → 0,3t = ln(10) ≈ 2,303 → t ≈ 7,68 ≈ 7,7 h.",
    "mittel",
    ["Exponentialfunktion", "Logarithmus", "rechenfrage"]
  ),
  q(
    "ma-pool-13-036",
    "mathe-kap5",
    "Berechnen Sie ∫₀¹ (3x² + 2x) dx.",
    ["1", "2", "3", "4", "5"],
    1,
    "∫(3x² + 2x)dx = x³ + x². [x³ + x²]₀¹ = 1 + 1 = 2.",
    "mittel",
    ["Integral", "rechenfrage"]
  ),
  q(
    "ma-pool-13-037",
    "mathe-kap5",
    "Die Funktion f(x) = ln(x²) kann vereinfacht werden zu:",
    ["2 · ln(x) für x > 0", "2 · ln(x) für alle x ≠ 0", "(ln x)²", "ln(2x)", "2 · ln|x|"],
    4,
    "ln(x²) = ln(|x|²) = 2 · ln|x| für alle x ≠ 0. Für x > 0 gilt auch 2ln(x), aber die allgemeinere Form ist 2ln|x|.",
    "schwer",
    ["Logarithmus", "Vereinfachung"]
  ),
  q(
    "ma-pool-13-038",
    "mathe-kap5",
    "Welche Funktion hat die Asymptote y = 3?",
    ["f(x) = 3x", "f(x) = 3 + 1/x", "f(x) = x + 3", "f(x) = 3x²", "f(x) = eˣ + 3"],
    1,
    "f(x) = 3 + 1/x → für x → ±∞ geht 1/x → 0, also f(x) → 3. Die Asymptote ist y = 3.",
    "mittel",
    ["Funktion", "Asymptote", "Grenzwert"]
  ),
  q(
    "ma-pool-13-039",
    "mathe-kap5",
    "Die Funktion f(x) = |x − 2| hat an der Stelle x = 2:",
    [
      "ein lokales Minimum",
      "ein lokales Maximum",
      "einen Wendepunkt",
      "eine Sprungstelle",
      "keine Besonderheit",
    ],
    0,
    "f(x) = |x − 2| hat bei x = 2 den Wert 0 (globales und lokales Minimum). Die Funktion ist dort stetig, aber nicht differenzierbar (Knick).",
    "mittel",
    ["Funktion", "Betragsfunktion", "Minimum"]
  ),
  q(
    "ma-pool-13-040",
    "mathe-kap5",
    "Welche Aussage über die Sinusfunktion f(x) = sin(x) ist falsch?",
    [
      "Die Periode beträgt 2π",
      "Der Wertebereich ist [−1, 1]",
      "sin(0) = 0",
      "sin(π) = 1",
      "Die Funktion ist ungerade: sin(−x) = −sin(x)",
    ],
    3,
    "sin(π) = 0 (nicht 1). sin(π/2) = 1 ist der Maximalwert.",
    "leicht",
    ["Trigonometrie", "Sinusfunktion", "Falsch-Aussage"]
  ),

  // ─── mathe-kap6: Vektorrechnung (8 Fragen) ───

  q(
    "ma-pool-13-041",
    "mathe-kap6",
    "Der Einheitsvektor in Richtung v = (6, −8) ist:",
    ["(0,6; −0,8)", "(3, −4)", "(0,8; −0,6)", "(6, −8)", "(−0,6; 0,8)"],
    0,
    "|v| = √(36 + 64) = √100 = 10. v/|v| = (6/10, −8/10) = (0,6; −0,8).",
    "leicht",
    ["Vektoren", "Einheitsvektor", "rechenfrage"]
  ),
  q(
    "ma-pool-13-042",
    "mathe-kap6",
    "Zwei Vektoren: a = (1, −2, 2) und b = (3, 6, −3). a · b = ?",
    ["0", "−15", "15", "3", "−3"],
    1,
    "a · b = 1·3 + (−2)·6 + 2·(−3) = 3 − 12 − 6 = −15.",
    "mittel",
    ["Vektoren", "Skalarprodukt", "rechenfrage"]
  ),
  q(
    "ma-pool-13-043",
    "mathe-kap6",
    "Der Schwerpunkt des Dreiecks mit Eckpunkten A(0,0), B(6,0), C(0,9) liegt bei:",
    ["(2, 3)", "(3, 3)", "(3, 4,5)", "(2, 4,5)", "(3, 2)"],
    0,
    "S = ((0+6+0)/3, (0+0+9)/3) = (2, 3).",
    "mittel",
    ["Vektoren", "Schwerpunkt", "Dreieck", "rechenfrage"]
  ),
  q(
    "ma-pool-13-044",
    "mathe-kap6",
    "Die Vektoren a = (1, 0, −1) und b = (0, 1, 1). Das Kreuzprodukt a × b ist:",
    ["(1, −1, 1)", "(−1, 1, −1)", "(1, 1, 1)", "(−1, −1, 1)", "(1, −1, −1)"],
    0,
    "a × b = (0·1−(−1)·1, (−1)·0−1·1, 1·1−0·0) = (0+1, 0−1, 1−0) = (1, −1, 1).",
    "schwer",
    ["Vektoren", "Kreuzprodukt"]
  ),
  q(
    "ma-pool-13-045",
    "mathe-kap6",
    "Die Gerade g geht durch A(1,2,3) mit Richtungsvektor d = (2,−1,0). Der Punkt P(5,0,3) liegt auf g?",
    [
      "Ja",
      "Nein, P liegt nicht auf g",
      "Nur wenn t = 2",
      "P ist Fußpunkt",
      "Kann nicht bestimmt werden",
    ],
    0,
    "r(t) = (1+2t, 2−t, 3). Für t = 2: (5, 0, 3) = P. ✓ P liegt auf g.",
    "mittel",
    ["Vektoren", "Gerade", "Parameterdarstellung"]
  ),
  q(
    "ma-pool-13-046",
    "mathe-kap6",
    "Die Fläche eines Dreiecks mit den Ortsvektoren A(0,0), B(4,0), C(0,3) beträgt:",
    ["3,5", "6", "7", "12", "24"],
    1,
    "Fläche = |AB × AC|/2. AB = (4,0), AC = (0,3). Kreuzprodukt 2D: |4·3 − 0·0| = 12. Fläche = 12/2 = 6.",
    "leicht",
    ["Vektoren", "Dreieck", "Fläche", "rechenfrage"]
  ),
  q(
    "ma-pool-13-047",
    "mathe-kap6",
    "Welche Eigenschaft hat das Skalarprodukt a · b?",
    [
      "Es ergibt immer einen Vektor",
      "Es ist kommutativ: a · b = b · a",
      "Es ist nur für 3D-Vektoren definiert",
      "a · b = 0 bedeutet, dass a = 0 oder b = 0",
      "Es gibt die Fläche des aufgespannten Parallelogramms an",
    ],
    1,
    "Das Skalarprodukt ist kommutativ und ergibt einen Skalar (keine Vektoren). a · b = 0 kann auch Orthogonalität bedeuten. Die Fläche gibt das Kreuzprodukt an.",
    "leicht",
    ["Vektoren", "Skalarprodukt", "Eigenschaften"]
  ),
  q(
    "ma-pool-13-048",
    "mathe-kap6",
    "Sind die Vektoren a = (1, 2, 3), b = (4, 5, 6), c = (5, 7, 9) linear abhängig?",
    [
      "Ja, denn c = a + b",
      "Nein, sie sind linear unabhängig",
      "Ja, denn a = b − c",
      "Kann nicht entschieden werden",
      "Nur wenn alle gleich lang sind",
    ],
    0,
    "c = a + b: (1+4, 2+5, 3+6) = (5, 7, 9) = c. ✓ Also sind die drei Vektoren linear abhängig.",
    "schwer",
    ["Vektoren", "lineare Abhängigkeit"]
  ),

  // ─── mathe-kap7: Stochastik (12 Fragen) ───

  q(
    "ma-pool-13-049",
    "mathe-kap7",
    "Ein Würfel wird 3-mal geworfen. Wie groß ist die Wahrscheinlichkeit, nie eine 6 zu werfen?",
    ["(5/6)³ ≈ 0,579", "(1/6)³ ≈ 0,005", "3/6 = 0,5", "5/6 ≈ 0,833", "(4/6)³ ≈ 0,296"],
    0,
    "P(keine 6) pro Wurf = 5/6. Bei 3 Würfen: (5/6)³ = 125/216 ≈ 0,579.",
    "mittel",
    ["Wahrscheinlichkeit", "Gegenereignis", "Würfel"]
  ),
  q(
    "ma-pool-13-050",
    "mathe-kap7",
    "Aus einer Gruppe von 8 Ärzten und 5 Pflegerinnen wird ein Team von 3 Personen zufällig gewählt. Wie viele Teams bestehen nur aus Ärzten?",
    ["40", "56", "120", "336", "24"],
    1,
    "C(8,3) = 8!/(3!·5!) = (8·7·6)/6 = 56.",
    "mittel",
    ["Kombinatorik", "Binomialkoeffizient", "rechenfrage"]
  ),
  q(
    "ma-pool-13-051",
    "mathe-kap7",
    "Zwei Ereignisse A und B sind unabhängig mit P(A) = 0,4 und P(B) = 0,3. P(A ∩ B) = ?",
    ["0,12", "0,10", "0,70", "0,07", "0,58"],
    0,
    "Bei Unabhängigkeit: P(A ∩ B) = P(A) · P(B) = 0,4 × 0,3 = 0,12.",
    "leicht",
    ["Wahrscheinlichkeit", "Unabhängigkeit", "rechenfrage"]
  ),
  q(
    "ma-pool-13-052",
    "mathe-kap7",
    "In einer Lotterie werden 3 Gewinner aus 100 Teilnehmern gezogen (ohne Zurücklegen). Auf wie viele Arten kann das geschehen?",
    ["161 700", "970 200", "1 000 000", "300", "100 000"],
    0,
    "C(100,3) = (100·99·98)/(3·2·1) = 970 200/6 = 161 700.",
    "schwer",
    ["Kombinatorik", "Binomialkoeffizient", "rechenfrage"]
  ),
  q(
    "ma-pool-13-053",
    "mathe-kap7",
    "Der Median einer Stichprobe {2, 5, 7, 8, 12, 15, 20} ist:",
    ["7", "8", "9,5", "10", "12"],
    1,
    "Bei 7 Werten (ungerade Anzahl) ist der Median der 4. Wert der sortierten Liste: 8.",
    "leicht",
    ["Statistik", "Median"]
  ),
  q(
    "ma-pool-13-054",
    "mathe-kap7",
    "Eine faire Münze wird 10-mal geworfen. Wie viele verschiedene Ergebnisfolgen gibt es?",
    ["20", "100", "512", "1024", "10 000"],
    3,
    "2¹⁰ = 1024 verschiedene Ergebnisfolgen (jeder Wurf hat 2 Möglichkeiten).",
    "leicht",
    ["Kombinatorik", "rechenfrage"]
  ),
  q(
    "ma-pool-13-055",
    "mathe-kap7",
    "P(A) = 0,6, P(B|A) = 0,5. Berechnen Sie P(A ∩ B).",
    ["0,10", "0,20", "0,30", "0,50", "1,10"],
    2,
    "P(A ∩ B) = P(A) · P(B|A) = 0,6 × 0,5 = 0,30.",
    "mittel",
    ["bedingte Wahrscheinlichkeit", "Multiplikationssatz", "rechenfrage"]
  ),
  q(
    "ma-pool-13-056",
    "mathe-kap7",
    "Ein Arzt testet 5 Patienten. Jeder hat unabhängig eine Wahrscheinlichkeit von 0,1, positiv zu sein. P(mindestens einer positiv) = ?",
    ["0,500", "0,410", "0,590", "0,328", "0,900"],
    1,
    "P(mind. 1) = 1 − P(keiner) = 1 − 0,9⁵ = 1 − 0,59049 ≈ 0,410.",
    "schwer",
    ["Wahrscheinlichkeit", "Gegenereignis", "rechenfrage"]
  ),
  q(
    "ma-pool-13-057",
    "mathe-kap7",
    "Ein Baumdiagramm hat 2 Stufen: Stufe 1 mit P(A) = 0,7 und P(Ā) = 0,3; Stufe 2 mit P(B|A) = 0,4 und P(B|Ā) = 0,8. P(B) = ?",
    ["0,28", "0,52", "0,40", "0,24", "0,80"],
    1,
    "P(B) = P(A)·P(B|A) + P(Ā)·P(B|Ā) = 0,7·0,4 + 0,3·0,8 = 0,28 + 0,24 = 0,52.",
    "schwer",
    ["totale Wahrscheinlichkeit", "Baumdiagramm", "rechenfrage"]
  ),
  q(
    "ma-pool-13-058",
    "mathe-kap7",
    "Das arithmetische Mittel der Werte {4, 7, 10, 13, 16} beträgt:",
    ["8", "9", "10", "11", "12"],
    2,
    "x̄ = (4 + 7 + 10 + 13 + 16)/5 = 50/5 = 10.",
    "leicht",
    ["Statistik", "Mittelwert", "rechenfrage"]
  ),
  q(
    "ma-pool-13-059",
    "mathe-kap7",
    "Wie viele 3-stellige Zahlen (100–999) lassen sich aus den Ziffern {1, 2, 3, 4, 5} bilden, wenn jede Ziffer mehrfach verwendet werden darf?",
    ["60", "100", "125", "150", "200"],
    2,
    "5 × 5 × 5 = 125 (Variation mit Wiederholung).",
    "mittel",
    ["Kombinatorik", "Variation mit Wiederholung", "rechenfrage"]
  ),
  q(
    "ma-pool-13-060",
    "mathe-kap7",
    "Welche Aussage zur Normalverteilung ist falsch?",
    [
      "Sie ist symmetrisch um den Mittelwert",
      "Ca. 68 % der Werte liegen innerhalb ±1σ um den Mittelwert",
      "Ca. 95 % liegen innerhalb ±2σ",
      "Die Fläche unter der Kurve beträgt 1",
      "Der Median und der Modus sind immer unterschiedlich",
    ],
    4,
    "Bei der Normalverteilung sind Mittelwert, Median und Modus identisch (alle drei stimmen überein).",
    "mittel",
    ["Normalverteilung", "Statistik", "Falsch-Aussage"]
  ),
];
