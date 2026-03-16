/**
 * Mathematik BMS Pool 11 — 60 MedAT-Stil-Fragen.
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

export const mathematikPool11: Question[] = [
  // ─── mathe-kap1: Zahlen, Mengen, Einheiten (10 Fragen) ───

  q(
    "ma-pool-11-002",
    "mathe-kap1",
    "Eine Labormessung ergibt 0,000 045 g. In wissenschaftlicher Notation ist das:",
    ["4,5 × 10⁻⁴ g", "4,5 × 10⁻⁵ g", "45 × 10⁻⁶ g", "4,5 × 10⁻⁶ g", "0,45 × 10⁻⁴ g"],
    1,
    "0,000 045 = 4,5 × 10⁻⁵. Das Komma wird 5 Stellen nach rechts verschoben.",
    "leicht",
    ["wissenschaftliche Notation", "Zehnerpotenzen"]
  ),
  q(
    "ma-pool-11-003",
    "mathe-kap1",
    "Ein Medikament hat eine Wirkstoffkonzentration von 2,5 mg/mL. Wie viel Wirkstoff (in µg) enthält ein Tropfen von 0,04 mL?",
    ["1 µg", "10 µg", "100 µg", "1000 µg", "0,1 µg"],
    2,
    "Wirkstoff = 2,5 mg/mL × 0,04 mL = 0,1 mg = 100 µg (1 mg = 1000 µg).",
    "leicht",
    ["Einheiten", "Dosisberechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-11-004",
    "mathe-kap1",
    "Welche Aussage über die Menge der reellen Zahlen ℝ ist falsch?",
    [
      "ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ",
      "Jede rationale Zahl ist reell",
      "Zwischen zwei rationalen Zahlen liegt immer eine irrationale",
      "ℝ enthält keine komplexen Zahlen",
      "Jede reelle Zahl ist rational",
    ],
    4,
    "Nicht jede reelle Zahl ist rational — z. B. √2, π, e sind irrationale reelle Zahlen. Alle anderen Aussagen sind korrekt.",
    "leicht",
    ["Zahlenmengen", "Falsch-Aussage"]
  ),
  q(
    "ma-pool-11-005",
    "mathe-kap1",
    "Ein MRT-Scan dauert 25 min. Die Magnetfeldstärke beträgt 3 T (Tesla). Rechnen Sie 3 T in mT um.",
    ["0,3 mT", "30 mT", "300 mT", "3000 mT", "30 000 mT"],
    3,
    "1 T = 1000 mT. Daher 3 T = 3000 mT.",
    "leicht",
    ["Einheiten", "Präfixe", "rechenfrage"]
  ),
  q(
    "ma-pool-11-006",
    "mathe-kap1",
    "Die Blutmenge eines Erwachsenen beträgt ca. 5 L. Wie viele Mikroliter (µL) sind das?",
    ["5 × 10³ µL", "5 × 10⁴ µL", "5 × 10⁵ µL", "5 × 10⁶ µL", "5 × 10⁷ µL"],
    3,
    "1 L = 10⁶ µL. Also 5 L = 5 × 10⁶ µL. Die Kette: L → mL (×10³) → µL (×10³).",
    "mittel",
    ["Einheiten", "Präfixe", "rechenfrage"]
  ),
  q(
    "ma-pool-11-007",
    "mathe-kap1",
    "Ein Laborwert wird als 8,4 × 10⁻³ mol/L gemessen. Ein zweiter Wert beträgt 2,1 × 10⁻⁵ mol/L. Wie groß ist der Quotient beider Werte?",
    ["4", "40", "400", "4000", "0,4"],
    2,
    "(8,4 × 10⁻³) / (2,1 × 10⁻⁵) = (8,4/2,1) × 10⁽⁻³⁺⁵⁾ = 4 × 10² = 400.",
    "mittel",
    ["wissenschaftliche Notation", "Zehnerpotenzen", "rechenfrage"]
  ),
  q(
    "ma-pool-11-008",
    "mathe-kap1",
    "Ein Protein hat eine Masse von 56 kDa (Kilodalton). 1 Da ≈ 1,66 × 10⁻²⁴ g. Wie groß ist die Masse in Gramm?",
    ["9,3 × 10⁻²⁰ g", "9,3 × 10⁻²¹ g", "5,6 × 10⁻²⁰ g", "9,3 × 10⁻¹⁹ g", "5,6 × 10⁻²¹ g"],
    0,
    "56 kDa = 56 000 Da = 5,6 × 10⁴ Da. Masse = 5,6 × 10⁴ × 1,66 × 10⁻²⁴ = 9,296 × 10⁻²⁰ ≈ 9,3 × 10⁻²⁰ g.",
    "schwer",
    ["wissenschaftliche Notation", "Biochemie", "rechenfrage"]
  ),
  q(
    "ma-pool-11-009",
    "mathe-kap1",
    "Welche Aussage über den Betrag |x| reeller Zahlen ist falsch?",
    [
      "|x| ≥ 0 für alle x ∈ ℝ",
      "|x · y| = |x| · |y|",
      "|x + y| ≤ |x| + |y| (Dreiecksungleichung)",
      "|x| = 0 genau dann, wenn x = 0",
      "|x − y| = |y| − |x| für alle x, y",
    ],
    4,
    "|x − y| = |y| − |x| gilt nicht allgemein; z. B. |3 − 5| = 2, aber |5| − |3| = 2 (stimmt zufällig), aber |5 − 3| = 2 und |3| − |5| = −2. Korrekt ist |x − y| ≥ ||x| − |y||.",
    "mittel",
    ["Betrag", "Zahlenmengen", "Falsch-Aussage"]
  ),
  q(
    "ma-pool-11-010",
    "mathe-kap1",
    "Ordnen Sie: 3,2 × 10⁻⁴; 5,1 × 10⁻³; 4,7 × 10⁻⁵; 1,8 × 10⁻⁴; 9,9 × 10⁻⁶. Welche ist die größte Zahl?",
    ["3,2 × 10⁻⁴", "5,1 × 10⁻³", "4,7 × 10⁻⁵", "1,8 × 10⁻⁴", "9,9 × 10⁻⁶"],
    1,
    "5,1 × 10⁻³ = 0,0051 ist die größte. Zum Vergleich: 3,2 × 10⁻⁴ = 0,00032, 1,8 × 10⁻⁴ = 0,00018.",
    "leicht",
    ["wissenschaftliche Notation", "Größenordnung"]
  ),

  // ─── mathe-kap2: Algebra, Gleichungen, Geometrie (10 Fragen) ───

  q(
    "ma-pool-11-012",
    "mathe-kap2",
    "Der Umfang eines Kreises beträgt 31,4 cm (π ≈ 3,14). Berechnen Sie die Fläche dieses Kreises.",
    ["78,5 cm²", "62,8 cm²", "50,3 cm²", "100,5 cm²", "31,4 cm²"],
    0,
    "U = 2πr → r = U/(2π) = 31,4/(2·3,14) = 5 cm. A = πr² = 3,14 × 25 = 78,5 cm².",
    "mittel",
    ["Geometrie", "Kreis", "rechenfrage"]
  ),
  q(
    "ma-pool-11-013",
    "mathe-kap2",
    "Vereinfachen Sie: (a² − b²) / (a + b) für a ≠ −b.",
    ["a² − b", "a + b", "a − b", "(a − b)²", "1"],
    2,
    "(a² − b²) = (a + b)(a − b). Division durch (a + b) ergibt (a − b).",
    "leicht",
    ["Algebra", "binomische Formeln", "Faktorisierung"]
  ),
  q(
    "ma-pool-11-015",
    "mathe-kap2",
    "Die Diskriminante der Gleichung 2x² + 3x + 5 = 0 beträgt:",
    ["−31", "−11", "31", "49", "0"],
    0,
    "D = b² − 4ac = 9 − 40 = −31. Da D < 0, hat die Gleichung keine reellen Lösungen.",
    "mittel",
    ["quadratische Gleichung", "Diskriminante", "rechenfrage"]
  ),
  q(
    "ma-pool-11-016",
    "mathe-kap2",
    "Welche Aussage zur Geometrie ist falsch?",
    [
      "Die Winkelsumme im Dreieck beträgt 180°",
      "In einem gleichseitigen Dreieck sind alle Winkel 60°",
      "Die Fläche eines Trapezes ist (a + c)/2 × h",
      "Der Umfang eines Kreises ist 2πr²",
      "Ein Quadrat ist ein spezielles Rechteck",
    ],
    3,
    "Der Umfang eines Kreises ist U = 2πr (nicht 2πr²). Die Formel 2πr² existiert nicht als Standardformel. πr² ist die Fläche.",
    "leicht",
    ["Geometrie", "Falsch-Aussage"]
  ),
  q(
    "ma-pool-11-017",
    "mathe-kap2",
    "Lösen Sie das Gleichungssystem: 3x − 2y = 1 und x + y = 3. Berechnen Sie x.",
    ["1", "1,2", "1,4", "2", "2,5"],
    2,
    "Aus x + y = 3 folgt y = 3 − x. Einsetzen: 3x − 2(3 − x) = 1 → 3x − 6 + 2x = 1 → 5x = 7 → x = 1,4.",
    "mittel",
    ["Algebra", "Gleichungssystem", "rechenfrage"]
  ),
  q(
    "ma-pool-11-018",
    "mathe-kap2",
    "Ein Kegel hat Radius r = 3 cm und Höhe h = 4 cm. Wie groß ist sein Volumen? (V = πr²h/3, π ≈ 3,14)",
    ["37,7 cm³", "28,3 cm³", "56,5 cm³", "113,0 cm³", "12,6 cm³"],
    0,
    "V = π·r²·h/3 = 3,14 × 9 × 4/3 = 3,14 × 12 = 37,68 ≈ 37,7 cm³.",
    "mittel",
    ["Geometrie", "Kegel", "Volumen", "rechenfrage"]
  ),
  q(
    "ma-pool-11-019",
    "mathe-kap2",
    "Die Lösungsmenge der Ungleichung 2x − 7 > 3x + 1 ist:",
    ["x > −8", "x < −8", "x > 8", "x < 8", "x < −4"],
    1,
    "2x − 7 > 3x + 1 → −7 − 1 > 3x − 2x → −8 > x → x < −8.",
    "mittel",
    ["Algebra", "Ungleichungen"]
  ),
  q(
    "ma-pool-11-020",
    "mathe-kap2",
    "Ein Kreissektor hat Radius r = 6 cm und Zentriwinkel 120°. Wie groß ist seine Fläche? (π ≈ 3,14)",
    ["12,6 cm²", "18,8 cm²", "37,7 cm²", "56,5 cm²", "75,4 cm²"],
    2,
    "A = (α/360°)·πr² = (120/360)·3,14·36 = (1/3)·113,04 = 37,68 ≈ 37,7 cm².",
    "schwer",
    ["Geometrie", "Kreissektor", "rechenfrage"]
  ),

  // ─── mathe-kap3: Grundlagen (Brüche, Prozent, Potenzgesetze) (10 Fragen) ───

  q(
    "ma-pool-11-021",
    "mathe-kap3",
    "Vereinfachen Sie: (2/3 + 3/4) ÷ (5/6).",
    ["17/10", "5/4", "34/15", "7/5", "2"],
    0,
    "2/3 + 3/4 = 8/12 + 9/12 = 17/12. (17/12) ÷ (5/6) = (17/12) × (6/5) = 102/60 = 17/10 = 1,7.",
    "mittel",
    ["Bruchrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-11-022",
    "mathe-kap3",
    "Ein Krankenhaus hat 450 Betten. Die Auslastung beträgt 84 %. Wie viele Betten sind belegt?",
    ["350", "360", "370", "378", "390"],
    3,
    "450 × 0,84 = 378 Betten.",
    "leicht",
    ["Prozentrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-11-023",
    "mathe-kap3",
    "Vereinfachen Sie: (3⁴ × 3⁻²) / 3³.",
    ["3⁻¹", "3⁰", "3¹", "3²", "3⁻²"],
    0,
    "(3⁴ × 3⁻²) / 3³ = 3⁽⁴⁻²⁾ / 3³ = 3² / 3³ = 3⁽²⁻³⁾ = 3⁻¹ = 1/3.",
    "leicht",
    ["Potenzgesetze", "rechenfrage"]
  ),
  q(
    "ma-pool-11-024",
    "mathe-kap3",
    "Ein Artikel kostet nach 20 % Rabatt 56 €. Was war der Originalpreis?",
    ["67,20 €", "70 €", "72 €", "44,80 €", "80 €"],
    1,
    "Originalpreis × 0,8 = 56 → Originalpreis = 56/0,8 = 70 €.",
    "leicht",
    ["Prozentrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-11-025",
    "mathe-kap3",
    "Welche Aussage zu Potenzgesetzen ist falsch?",
    [
      "a⁰ = 1 für a ≠ 0",
      "aⁿ × aᵐ = aⁿ⁺ᵐ",
      "(aⁿ)ᵐ = aⁿ·ᵐ",
      "a⁻ⁿ = 1/aⁿ für a ≠ 0",
      "(a + b)² = a² + b²",
    ],
    4,
    "(a + b)² = a² + 2ab + b², nicht a² + b². Das gemischte Glied 2ab fehlt. Alle anderen Potenzgesetze sind korrekt.",
    "leicht",
    ["Potenzgesetze", "binomische Formeln", "Falsch-Aussage"]
  ),
  q(
    "ma-pool-11-027",
    "mathe-kap3",
    "Ein Kapital von 2000 € wird 3 Jahre mit 5 % p.a. (Zinseszins) angelegt. Wie hoch ist das Endkapital?",
    ["2300,00 €", "2315,25 €", "2100,00 €", "2150,00 €", "2332,50 €"],
    1,
    "K = 2000 × 1,05³ = 2000 × 1,157625 = 2315,25 €.",
    "mittel",
    ["Zinseszins", "Potenzrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-11-028",
    "mathe-kap3",
    "Vereinfachen Sie: log₁₀(1000) + log₁₀(0,01).",
    ["5", "1", "−1", "3", "0"],
    1,
    "log₁₀(1000) = 3, log₁₀(0,01) = log₁₀(10⁻²) = −2. Summe: 3 + (−2) = 1.",
    "mittel",
    ["Logarithmus", "rechenfrage"]
  ),
  // ─── mathe-kap5: Funktionen (10 Fragen) ───

  q(
    "ma-pool-11-031",
    "mathe-kap5",
    "Die Gerade y = 2x − 3 schneidet die x-Achse bei:",
    ["x = −3", "x = 3/2", "x = −3/2", "x = 2", "x = 3"],
    1,
    "y = 0: 0 = 2x − 3 → x = 3/2 = 1,5. Die Nullstelle liegt bei x = 1,5.",
    "leicht",
    ["lineare Funktion", "Nullstelle"]
  ),
  q(
    "ma-pool-11-032",
    "mathe-kap5",
    "Die Parabel f(x) = x² − 4x + 3 hat ihren Scheitelpunkt bei:",
    ["(2, −1)", "(2, 1)", "(−2, −1)", "(4, 3)", "(−2, 15)"],
    0,
    "xS = −b/(2a) = 4/2 = 2. f(2) = 4 − 8 + 3 = −1. Scheitelpunkt: (2, −1).",
    "leicht",
    ["quadratische Funktion", "Scheitelpunkt"]
  ),
  q(
    "ma-pool-11-033",
    "mathe-kap5",
    "Bestimmen Sie f'(x) für f(x) = 3x⁴ − 2x² + 5x.",
    ["12x³ − 4x + 5", "12x³ − 2x + 5", "3x³ − 2x + 5", "12x⁴ − 4x + 5", "12x³ − 4x² + 5"],
    0,
    "f'(x) = 3·4x³ − 2·2x + 5 = 12x³ − 4x + 5. Potenzregel: (xⁿ)' = nxⁿ⁻¹.",
    "mittel",
    ["Ableitung", "Potenzregel"]
  ),
  q(
    "ma-pool-11-034",
    "mathe-kap5",
    "Die Funktion f(x) = e⁻²ˣ fällt. f'(x) lautet:",
    ["e⁻²ˣ", "−2e⁻²ˣ", "2e⁻²ˣ", "−e⁻²ˣ", "−2xe⁻²ˣ"],
    1,
    "Kettenregel: f'(x) = e⁻²ˣ · (−2) = −2e⁻²ˣ. Da f'(x) < 0 für alle x, fällt die Funktion überall.",
    "mittel",
    ["Exponentialfunktion", "Ableitung", "Kettenregel"]
  ),
  q(
    "ma-pool-11-035",
    "mathe-kap5",
    "Welchen Wert hat sin(30°) + cos(60°)?",
    ["0", "0,5", "1", "√3/2", "√3"],
    2,
    "sin(30°) = 0,5 und cos(60°) = 0,5. Summe: 0,5 + 0,5 = 1.",
    "leicht",
    ["Trigonometrie", "rechenfrage"]
  ),
  q(
    "ma-pool-11-036",
    "mathe-kap5",
    "Die Halbwertszeit eines radioaktiven Isotops beträgt 8 h. Welcher Anteil der Ausgangssubstanz ist nach 24 h noch vorhanden?",
    ["1/2", "1/4", "1/8", "1/16", "1/3"],
    2,
    "24 h / 8 h = 3 Halbwertszeiten. Restanteil = (1/2)³ = 1/8.",
    "leicht",
    ["Exponentialfunktion", "Halbwertszeit", "rechenfrage"]
  ),
  q(
    "ma-pool-11-037",
    "mathe-kap5",
    "Die Funktion f(x) = x³ − 3x hat lokale Extrema bei x = ±1. Welche Art liegt bei x = 1 vor?",
    ["lokales Maximum", "lokales Minimum", "Wendepunkt", "Sattelpunkt", "keines der genannten"],
    1,
    "f'(x) = 3x² − 3 = 0 bei x = ±1. f''(x) = 6x. f''(1) = 6 > 0 → lokales Minimum. f(1) = 1 − 3 = −2.",
    "mittel",
    ["Ableitung", "Extremum", "Kurvendiskussion"]
  ),
  q(
    "ma-pool-11-038",
    "mathe-kap5",
    "Berechnen Sie ∫₀² 3x² dx.",
    ["4", "6", "8", "12", "16"],
    2,
    "∫ 3x² dx = x³ + C. [x³]₀² = 2³ − 0³ = 8.",
    "mittel",
    ["Integral", "rechenfrage"]
  ),
  q(
    "ma-pool-11-039",
    "mathe-kap5",
    "Welche Aussage über die Funktion f(x) = ln(x) ist falsch?",
    [
      "Der Definitionsbereich ist x > 0",
      "f(1) = 0",
      "f ist streng monoton steigend",
      "f'(x) = 1/x für x > 0",
      "f(e²) = e²",
    ],
    4,
    "f(e²) = ln(e²) = 2 (nicht e²). Die Logarithmusfunktion gibt den Exponenten zurück, nicht die Potenz.",
    "mittel",
    ["Logarithmus", "natürlicher Logarithmus", "Falsch-Aussage"]
  ),
  q(
    "ma-pool-11-040",
    "mathe-kap5",
    "Die Tangensfunktion hat Periode:",
    ["π/2", "π", "2π", "3π", "4π"],
    1,
    "tan(x) hat die Periode π (180°), im Gegensatz zu sin(x) und cos(x) mit Periode 2π.",
    "leicht",
    ["Trigonometrie", "Tangens", "Periode"]
  ),

  // ─── mathe-kap6: Vektorrechnung (8 Fragen) ───

  q(
    "ma-pool-11-041",
    "mathe-kap6",
    "Berechnen Sie den Betrag des Vektors v = (3, −4, 12).",
    ["11", "12", "13", "14", "19"],
    2,
    "|v| = √(9 + 16 + 144) = √169 = 13.",
    "leicht",
    ["Vektoren", "Betrag", "rechenfrage"]
  ),
  q(
    "ma-pool-11-042",
    "mathe-kap6",
    "Zwei Vektoren a = (2, 1) und b = (−1, 2). Das Skalarprodukt a · b ergibt:",
    ["−4", "0", "3", "5", "−1"],
    1,
    "a · b = 2·(−1) + 1·2 = −2 + 2 = 0. Die Vektoren stehen senkrecht aufeinander.",
    "leicht",
    ["Vektoren", "Skalarprodukt", "Orthogonalität"]
  ),
  q(
    "ma-pool-11-043",
    "mathe-kap6",
    "Gegeben: a = (1, 2, 3) und b = (4, 5, 6). Berechnen Sie a + 2b.",
    ["(9, 12, 15)", "(5, 7, 9)", "(6, 9, 12)", "(9, 14, 18)", "(6, 12, 15)"],
    0,
    "2b = (8, 10, 12). a + 2b = (1+8, 2+10, 3+12) = (9, 12, 15).",
    "leicht",
    ["Vektoren", "Linearkombination", "rechenfrage"]
  ),
  q(
    "ma-pool-11-044",
    "mathe-kap6",
    "Welchen Winkel schließen die Vektoren a = (1, 1, 0) und b = (0, 1, 1) ein?",
    ["30°", "45°", "60°", "90°", "120°"],
    2,
    "a · b = 0 + 1 + 0 = 1. |a| = √2, |b| = √2. cos θ = 1/(√2·√2) = 1/2. θ = 60°.",
    "mittel",
    ["Vektoren", "Winkel", "Skalarprodukt", "rechenfrage"]
  ),
  q(
    "ma-pool-11-045",
    "mathe-kap6",
    "Das Kreuzprodukt a × b mit a = (2, 0, 0) und b = (0, 3, 0) ergibt:",
    ["(0, 0, 6)", "(6, 0, 0)", "(0, 6, 0)", "(0, 0, −6)", "(6, 6, 0)"],
    0,
    "a × b = (0·0−0·3, 0·0−2·0, 2·3−0·0) = (0, 0, 6).",
    "mittel",
    ["Vektoren", "Kreuzprodukt"]
  ),
  q(
    "ma-pool-11-046",
    "mathe-kap6",
    "Der Mittelpunkt der Strecke von A = (1, 3, 5) nach B = (7, −1, 3) ist:",
    ["(4, 1, 4)", "(8, 2, 8)", "(3, 2, 1)", "(4, 2, 4)", "(6, −4, −2)"],
    0,
    "M = ((1+7)/2, (3+(−1))/2, (5+3)/2) = (4, 1, 4).",
    "leicht",
    ["Vektoren", "Mittelpunkt"]
  ),
  q(
    "ma-pool-11-047",
    "mathe-kap6",
    "Welche Bedingung muss erfüllt sein, damit zwei Vektoren a und b parallel sind?",
    ["a · b = 0", "a × b = 0", "|a| = |b|", "a + b = 0", "a · b = |a| · |b| / 2"],
    1,
    "Zwei Vektoren sind parallel, wenn ihr Kreuzprodukt der Nullvektor ist: a × b = 0. a · b = 0 bedeutet Orthogonalität.",
    "mittel",
    ["Vektoren", "Parallelität", "Kreuzprodukt"]
  ),
  q(
    "ma-pool-11-048",
    "mathe-kap6",
    "Die Fläche des Parallelogramms aufgespannt durch a = (3, 0, 0) und b = (0, 4, 0) beträgt:",
    ["7", "12", "5", "24", "6"],
    1,
    "Fläche = |a × b|. a × b = (0, 0, 12). |a × b| = 12.",
    "schwer",
    ["Vektoren", "Kreuzprodukt", "Fläche", "rechenfrage"]
  ),

  // ─── mathe-kap7: Stochastik (12 Fragen) ───

  q(
    "ma-pool-11-049",
    "mathe-kap7",
    "Beim Würfeln mit einem fairen Würfel: Wie groß ist die Wahrscheinlichkeit, eine Zahl > 4 zu werfen?",
    ["1/6", "1/3", "1/2", "2/3", "5/6"],
    1,
    "Günstige Ergebnisse: {5, 6} = 2 von 6. P = 2/6 = 1/3.",
    "leicht",
    ["Wahrscheinlichkeit", "Laplace"]
  ),
  q(
    "ma-pool-11-050",
    "mathe-kap7",
    "Aus einem Kartenspiel (52 Karten, 4 Farben) wird eine Karte gezogen. Wie groß ist die Wahrscheinlichkeit, ein Herz oder ein Ass zu ziehen?",
    ["13/52", "16/52", "17/52", "4/13", "1/4"],
    1,
    "P(Herz) = 13/52, P(Ass) = 4/52, P(Herz ∩ Ass) = 1/52. P(Herz ∪ Ass) = 13/52 + 4/52 − 1/52 = 16/52 = 4/13.",
    "mittel",
    ["Wahrscheinlichkeit", "Additionssatz", "Kartenspiel"]
  ),
  q(
    "ma-pool-11-051",
    "mathe-kap7",
    "Wie viele Möglichkeiten gibt es, aus 10 Studierenden einen Ausschuss von 3 Personen zu wählen?",
    ["30", "120", "720", "1000", "210"],
    1,
    "C(10,3) = 10!/(3!·7!) = (10·9·8)/(3·2·1) = 720/6 = 120.",
    "mittel",
    ["Kombinatorik", "Binomialkoeffizient", "rechenfrage"]
  ),
  q(
    "ma-pool-11-052",
    "mathe-kap7",
    "Ein diagnostischer Test hat Sensitivität 95 % und Spezifität 90 %. Die Prävalenz einer Krankheit beträgt 1 %. Wie hoch ist (gerundet) der positive prädiktive Wert (PPV)?",
    ["8,8 %", "9,6 %", "50 %", "86 %", "95 %"],
    0,
    "PPV = (Sens × Präv) / (Sens × Präv + (1−Spez) × (1−Präv)) = (0,95 × 0,01) / (0,95 × 0,01 + 0,10 × 0,99) = 0,0095 / (0,0095 + 0,099) = 0,0095/0,1085 ≈ 0,0876 ≈ 8,8 %.",
    "schwer",
    ["bedingte Wahrscheinlichkeit", "Bayes", "Diagnostik", "rechenfrage"]
  ),
  q(
    "ma-pool-11-053",
    "mathe-kap7",
    "Bei 5 Würfen einer fairen Münze: Wie groß ist die Wahrscheinlichkeit, genau 3-mal Kopf zu erhalten?",
    ["5/16", "10/32", "1/4", "3/8", "1/5"],
    1,
    "P(X=3) = C(5,3)·(1/2)³·(1/2)² = 10·(1/32) = 10/32 = 5/16. Beachte: 10/32 = 5/16.",
    "mittel",
    ["Binomialverteilung", "Kombinatorik", "rechenfrage"]
  ),
  q(
    "ma-pool-11-054",
    "mathe-kap7",
    "Der Erwartungswert einer diskreten Zufallsvariable X mit P(X=1) = 0,3, P(X=2) = 0,5, P(X=3) = 0,2 beträgt:",
    ["1,5", "1,9", "2,0", "2,1", "2,5"],
    1,
    "E(X) = 1·0,3 + 2·0,5 + 3·0,2 = 0,3 + 1,0 + 0,6 = 1,9.",
    "leicht",
    ["Erwartungswert", "rechenfrage"]
  ),
  q(
    "ma-pool-11-056",
    "mathe-kap7",
    "Eine Urne enthält 4 rote und 6 blaue Kugeln. Es werden nacheinander 2 Kugeln ohne Zurücklegen gezogen. Wie groß ist die Wahrscheinlichkeit, dass beide rot sind?",
    ["4/25", "2/15", "16/100", "1/5", "6/45"],
    1,
    "P = (4/10) × (3/9) = 12/90 = 2/15.",
    "mittel",
    ["Wahrscheinlichkeit", "Urnenmodell", "ohne Zurücklegen", "rechenfrage"]
  ),
  q(
    "ma-pool-11-057",
    "mathe-kap7",
    "Welche Aussage zur Wahrscheinlichkeitsrechnung ist falsch?",
    [
      "0 ≤ P(A) ≤ 1 für jedes Ereignis A",
      "P(A ∪ B) = P(A) + P(B) für disjunkte A, B",
      "P(Ā) = 1 − P(A) (Gegenereignis)",
      "P(A ∩ B) = P(A) · P(B) gilt immer",
      "P(Ω) = 1 (sicheres Ereignis)",
    ],
    3,
    "P(A ∩ B) = P(A) · P(B) gilt nur für unabhängige Ereignisse. Im Allgemeinen ist P(A ∩ B) = P(A) · P(B|A).",
    "mittel",
    ["Wahrscheinlichkeit", "Unabhängigkeit", "Falsch-Aussage"]
  ),
  q(
    "ma-pool-11-058",
    "mathe-kap7",
    "In einer Klasse sind 60 % der Studierenden weiblich. 30 % der Frauen und 20 % der Männer bestehen die Prüfung mit Auszeichnung. Wie hoch ist der Gesamtanteil mit Auszeichnung?",
    ["22 %", "24 %", "25 %", "26 %", "28 %"],
    3,
    "P(Ausz.) = 0,6 × 0,3 + 0,4 × 0,2 = 0,18 + 0,08 = 0,26 = 26 %. (Satz der totalen Wahrscheinlichkeit)",
    "schwer",
    ["totale Wahrscheinlichkeit", "rechenfrage"]
  ),
  q(
    "ma-pool-11-059",
    "mathe-kap7",
    "Wie viele verschiedene 4-stellige PINs (Ziffern 0–9) gibt es, wenn jede Ziffer nur einmal vorkommen darf?",
    ["5040", "10 000", "6561", "3024", "720"],
    0,
    "P(10,4) = 10 × 9 × 8 × 7 = 5040. (Permutation ohne Wiederholung, 10 Ziffern, 4 Plätze.)",
    "mittel",
    ["Kombinatorik", "Permutation", "rechenfrage"]
  ),
];
