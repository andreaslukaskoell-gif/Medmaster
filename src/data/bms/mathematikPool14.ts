/**
 * Mathematik BMS Pool 14 — 60 MedAT-Stil-Fragen.
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

export const mathematikPool14: Question[] = [
  // ─── mathe-kap1: Zahlen, Mengen, Einheiten (10 Fragen) ───

  q(
    "ma-pool-14-001",
    "mathe-kap1",
    "Die Leistung eines Defibrillators beträgt 360 J, abgegeben in 4 ms. Welche durchschnittliche Leistung in kW wird erzielt?",
    ["9 kW", "36 kW", "90 kW", "360 kW", "1440 kW"],
    2,
    "P = W/t = 360 J / (4 × 10⁻³ s) = 90 000 W = 90 kW.",
    "schwer",
    ["Einheiten", "Leistung", "rechenfrage"]
  ),
  q(
    "ma-pool-14-002",
    "mathe-kap1",
    "Ein Mitochondrium hat einen Durchmesser von ca. 1 µm. Wie viele Mitochondrien passen nebeneinander auf eine Strecke von 1 mm?",
    ["10", "100", "1000", "10 000", "100 000"],
    2,
    "1 mm = 1000 µm. 1000 µm / 1 µm = 1000 Mitochondrien.",
    "leicht",
    ["Einheiten", "Präfixe", "rechenfrage"]
  ),
  q(
    "ma-pool-14-003",
    "mathe-kap1",
    "Welche der folgenden Aussagen über die Menge ℚ ist falsch?",
    [
      "ℚ enthält alle Brüche a/b mit a, b ∈ ℤ, b ≠ 0",
      "Zwischen je zwei rationalen Zahlen liegt eine weitere rationale Zahl",
      "ℚ ist abzählbar unendlich",
      "Jede Dezimalzahl mit endlich vielen Nachkommastellen ist rational",
      "ℚ enthält √5",
    ],
    4,
    "√5 ist irrational (5 ist keine Quadratzahl) und liegt daher nicht in ℚ.",
    "leicht",
    ["Zahlenmengen", "rationale Zahlen", "Falsch-Aussage"]
  ),
  q(
    "ma-pool-14-004",
    "mathe-kap1",
    "Ein Röntgenröhre erzeugt eine Spannung von 80 kV. Drücken Sie dies in Volt aus.",
    ["800 V", "8000 V", "80 000 V", "800 000 V", "8 000 000 V"],
    2,
    "1 kV = 1000 V. Also 80 kV = 80 000 V = 8 × 10⁴ V.",
    "leicht",
    ["Einheiten", "Präfixe", "rechenfrage"]
  ),
  q(
    "ma-pool-14-005",
    "mathe-kap1",
    "Die Plasmakonzentration eines Medikaments beträgt 0,000 000 34 mol/L. In wissenschaftlicher Notation:",
    [
      "3,4 × 10⁻⁶ mol/L",
      "3,4 × 10⁻⁷ mol/L",
      "34 × 10⁻⁸ mol/L",
      "3,4 × 10⁻⁸ mol/L",
      "0,34 × 10⁻⁶ mol/L",
    ],
    1,
    "0,000 000 34 = 3,4 × 10⁻⁷. Das Komma wird 7 Stellen nach rechts verschoben.",
    "leicht",
    ["wissenschaftliche Notation"]
  ),
  q(
    "ma-pool-14-006",
    "mathe-kap1",
    "Berechnen Sie: (8 × 10⁴) / (2 × 10⁻³).",
    ["4 × 10¹", "4 × 10⁷", "4 × 10⁻⁷", "16 × 10⁷", "4 × 10⁻¹"],
    1,
    "(8/2) × 10⁽⁴⁻⁽⁻³⁾⁾ = 4 × 10⁷.",
    "mittel",
    ["wissenschaftliche Notation", "rechenfrage"]
  ),
  q(
    "ma-pool-14-007",
    "mathe-kap1",
    "Ein Infusionsbeutel enthält 0,9 % NaCl (w/v). Wie viel NaCl (in mg) sind in 250 mL Lösung?",
    ["225 mg", "900 mg", "2250 mg", "9000 mg", "22 500 mg"],
    2,
    "0,9 % w/v = 0,9 g pro 100 mL. In 250 mL: 0,9 × 2,5 = 2,25 g = 2250 mg.",
    "mittel",
    ["Einheiten", "Konzentration", "rechenfrage"]
  ),
  q(
    "ma-pool-14-008",
    "mathe-kap1",
    "Welche der folgenden Zahlen ist die kleinste? 10⁻³, 10⁻⁵, 10⁻², 10⁻⁸, 10⁻¹.",
    ["10⁻³", "10⁻⁵", "10⁻²", "10⁻⁸", "10⁻¹"],
    3,
    "Je kleiner (negativer) der Exponent, desto kleiner die Zahl: 10⁻⁸ = 0,00000001 ist am kleinsten.",
    "leicht",
    ["Zehnerpotenzen", "Größenordnung"]
  ),
  q(
    "ma-pool-14-009",
    "mathe-kap1",
    "Die Energie eines Photons berechnet sich als E = hf. Mit h = 6,6 × 10⁻³⁴ J·s und f = 5 × 10¹⁴ Hz ergibt sich:",
    ["3,3 × 10⁻¹⁹ J", "3,3 × 10⁻²⁰ J", "33 × 10⁻¹⁹ J", "3,3 × 10⁻⁴⁸ J", "1,32 × 10⁻¹⁹ J"],
    0,
    "E = 6,6 × 10⁻³⁴ × 5 × 10¹⁴ = 33 × 10⁻²⁰ = 3,3 × 10⁻¹⁹ J.",
    "schwer",
    ["wissenschaftliche Notation", "Physik", "rechenfrage"]
  ),
  q(
    "ma-pool-14-010",
    "mathe-kap1",
    "Runden Sie 3,14159 auf drei signifikante Stellen.",
    ["3,14", "3,15", "3,141", "3,142", "3,1"],
    0,
    "Drei signifikante Stellen: 3,14 (die vierte Stelle ist 1, also wird abgerundet).",
    "leicht",
    ["Rundung", "signifikante Stellen"]
  ),

  // ─── mathe-kap2: Algebra, Gleichungen, Geometrie (10 Fragen) ───

  q(
    "ma-pool-14-011",
    "mathe-kap2",
    "Lösen Sie die Gleichung: 3/(x − 1) = 6. x = ?",
    ["0,5", "1,5", "2", "3", "7"],
    1,
    "3 = 6(x − 1) → 3 = 6x − 6 → 6x = 9 → x = 1,5.",
    "leicht",
    ["Algebra", "Bruchgleichung", "rechenfrage"]
  ),
  q(
    "ma-pool-14-012",
    "mathe-kap2",
    "Das Volumen einer Pyramide mit quadratischer Grundfläche (a = 6 cm) und Höhe h = 10 cm beträgt (V = a²h/3):",
    ["60 cm³", "120 cm³", "180 cm³", "360 cm³", "100 cm³"],
    1,
    "V = 6² × 10/3 = 360/3 = 120 cm³.",
    "mittel",
    ["Geometrie", "Pyramide", "Volumen", "rechenfrage"]
  ),
  q(
    "ma-pool-14-013",
    "mathe-kap2",
    "Entwickeln Sie: (3a + 2b)(3a − 2b).",
    ["9a² + 4b²", "9a² − 4b²", "9a² − 12ab + 4b²", "6a² − 4b²", "9a − 4b"],
    1,
    "Dritte binomische Formel: (3a + 2b)(3a − 2b) = (3a)² − (2b)² = 9a² − 4b².",
    "leicht",
    ["Algebra", "binomische Formeln"]
  ),
  q(
    "ma-pool-14-014",
    "mathe-kap2",
    "Die Lösung der Gleichung 2^x = 32 ist x = ?",
    ["4", "5", "6", "8", "16"],
    1,
    "2⁵ = 32. Also x = 5.",
    "leicht",
    ["Algebra", "Exponentialgleichung", "rechenfrage"]
  ),
  q(
    "ma-pool-14-015",
    "mathe-kap2",
    "Ein Kreisring hat Außenradius R = 7 cm und Innenradius r = 5 cm. Die Fläche des Rings beträgt (π ≈ 3,14):",
    ["12,56 cm²", "37,68 cm²", "50,24 cm²", "75,36 cm²", "150,72 cm²"],
    3,
    "A = π(R² − r²) = 3,14 × (49 − 25) = 3,14 × 24 = 75,36 cm².",
    "mittel",
    ["Geometrie", "Kreisring", "Fläche", "rechenfrage"]
  ),
  q(
    "ma-pool-14-016",
    "mathe-kap2",
    "Lösen Sie das Gleichungssystem: 2x + y = 7 und x − 3y = −7. Was ist x + y?",
    ["3", "4", "5", "6", "7"],
    2,
    "Aus Gl.1: y = 7 − 2x. In Gl.2: x − 3(7 − 2x) = −7 → x − 21 + 6x = −7 → 7x = 14 → x = 2. y = 7 − 4 = 3. x + y = 2 + 3 = 5.",
    "mittel",
    ["Algebra", "Gleichungssystem", "rechenfrage"]
  ),
  q(
    "ma-pool-14-017",
    "mathe-kap2",
    "Welche Aussage zum Satz des Pythagoras ist falsch?",
    [
      "Er gilt nur in rechtwinkligen Dreiecken",
      "a² + b² = c² (c = Hypotenuse)",
      "Die Hypotenuse liegt dem rechten Winkel gegenüber",
      "Der Satz gilt auch für stumpfwinklige Dreiecke",
      "Mit ihm lässt sich die dritte Seite berechnen, wenn zwei bekannt sind",
    ],
    3,
    "Der Satz des Pythagoras gilt nur für rechtwinklige Dreiecke. Für stumpfwinklige gilt der Kosinussatz: a² + b² − 2ab·cos(γ) = c².",
    "leicht",
    ["Geometrie", "Pythagoras", "Falsch-Aussage"]
  ),
  q(
    "ma-pool-14-018",
    "mathe-kap2",
    "Die Oberfläche einer Kugel mit Radius r = 3 cm beträgt (O = 4πr², π ≈ 3,14):",
    ["28,3 cm²", "56,5 cm²", "113,0 cm²", "226,1 cm²", "37,7 cm²"],
    2,
    "O = 4 × 3,14 × 9 = 113,04 ≈ 113,0 cm².",
    "mittel",
    ["Geometrie", "Kugel", "Oberfläche", "rechenfrage"]
  ),
  q(
    "ma-pool-14-019",
    "mathe-kap2",
    "Faktorisieren Sie: x³ − 8.",
    [
      "(x − 2)(x² + 2x + 4)",
      "(x − 2)(x² − 2x + 4)",
      "(x − 2)³",
      "(x − 2)(x + 2)²",
      "(x − 8)(x² + 1)",
    ],
    0,
    "x³ − 8 = x³ − 2³ = (x − 2)(x² + 2x + 4). (Differenz zweier Kuben: a³ − b³ = (a−b)(a²+ab+b²).)",
    "schwer",
    ["Algebra", "Faktorisierung", "kubische Gleichung"]
  ),
  q(
    "ma-pool-14-020",
    "mathe-kap2",
    "In einem rechtwinkligen Dreieck ist ein Winkel 30°. Die dem 30°-Winkel gegenüberliegende Kathete ist 5 cm. Wie lang ist die Hypotenuse?",
    ["5√3 cm", "10 cm", "5/√3 cm", "5√2 cm", "7,5 cm"],
    1,
    "Im 30-60-90-Dreieck: Die Kathete gegenüber 30° ist halb so lang wie die Hypotenuse. Also c = 2 × 5 = 10 cm.",
    "mittel",
    ["Geometrie", "Trigonometrie", "Dreieck"]
  ),

  // ─── mathe-kap3: Grundlagen (Brüche, Prozent, Potenzgesetze) (10 Fragen) ───

  q(
    "ma-pool-14-021",
    "mathe-kap3",
    "Berechnen Sie: (7/12 − 1/6) × 24.",
    ["6", "8", "10", "12", "14"],
    2,
    "7/12 − 1/6 = 7/12 − 2/12 = 5/12. 5/12 × 24 = 10.",
    "leicht",
    ["Bruchrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-14-022",
    "mathe-kap3",
    "Ein Gehalt von 3200 € wird um 12,5 % erhöht. Das neue Gehalt beträgt:",
    ["3400 €", "3500 €", "3600 €", "3700 €", "3800 €"],
    2,
    "3200 × 1,125 = 3600 €.",
    "leicht",
    ["Prozentrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-14-023",
    "mathe-kap3",
    "Vereinfachen Sie: (√5)⁴.",
    ["5", "10", "25", "√5", "5√5"],
    2,
    "(√5)⁴ = ((√5)²)² = 5² = 25. Alternativ: (5^(1/2))⁴ = 5² = 25.",
    "leicht",
    ["Potenzgesetze", "Wurzeln", "rechenfrage"]
  ),
  q(
    "ma-pool-14-024",
    "mathe-kap3",
    "Wenn x = 3^a und y = 3^b, dann ist xy = ?",
    ["3^(ab)", "3^(a+b)", "9^(a+b)", "3^(a−b)", "6^(a+b)"],
    1,
    "xy = 3^a × 3^b = 3^(a+b). (Potenzgesetz: gleiche Basis → Exponenten addieren.)",
    "leicht",
    ["Potenzgesetze"]
  ),
  q(
    "ma-pool-14-025",
    "mathe-kap3",
    "Berechnen Sie: log₁₀(500) − log₁₀(5).",
    ["1", "2", "3", "100", "99"],
    1,
    "log₁₀(500) − log₁₀(5) = log₁₀(500/5) = log₁₀(100) = 2.",
    "mittel",
    ["Logarithmus", "rechenfrage"]
  ),
  q(
    "ma-pool-14-026",
    "mathe-kap3",
    "Eine Substanz zerfällt jährlich um 10 %. Welcher Anteil ist nach 2 Jahren noch vorhanden?",
    ["80 %", "81 %", "82 %", "90 %", "78 %"],
    1,
    "Restanteil = 0,9² = 0,81 = 81 %.",
    "mittel",
    ["Prozentrechnung", "Exponentialzerfall", "rechenfrage"]
  ),
  q(
    "ma-pool-14-027",
    "mathe-kap3",
    "Welche Aussage über Wurzeln ist falsch?",
    [
      "√(a × b) = √a × √b für a, b ≥ 0",
      "√(a/b) = √a / √b für a ≥ 0, b > 0",
      "√(a + b) = √a + √b für a, b ≥ 0",
      "√(a²) = |a|",
      "(√a)² = a für a ≥ 0",
    ],
    2,
    "√(a + b) ≠ √a + √b. Gegenbeispiel: √(9 + 16) = √25 = 5, aber √9 + √16 = 3 + 4 = 7.",
    "leicht",
    ["Wurzeln", "Falsch-Aussage"]
  ),
  q(
    "ma-pool-14-028",
    "mathe-kap3",
    "In einer Prüfung bestehen 70 % der Kandidaten. Von den Durchgefallenen bestehen beim zweiten Versuch 60 %. Wie viel Prozent bestehen insgesamt nach maximal 2 Versuchen?",
    ["82 %", "85 %", "88 %", "90 %", "76 %"],
    2,
    "Durchgefallen: 30 %. Davon bestehen 60 %: 0,30 × 0,60 = 0,18 = 18 %. Gesamt: 70 % + 18 % = 88 %.",
    "schwer",
    ["Prozentrechnung", "mehrstufig", "rechenfrage"]
  ),
  q(
    "ma-pool-14-029",
    "mathe-kap3",
    "Berechnen Sie: 2⁻³ + 4⁻¹.",
    ["3/8", "5/8", "1/12", "3/4", "1/2"],
    0,
    "2⁻³ = 1/8. 4⁻¹ = 1/4 = 2/8. Summe: 1/8 + 2/8 = 3/8.",
    "mittel",
    ["Potenzgesetze", "Bruchrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-14-030",
    "mathe-kap3",
    "Drücken Sie 3,75 % als Bruch aus.",
    ["3/80", "15/400", "3/75", "375/100", "1/27"],
    0,
    "3,75 % = 3,75/100 = 375/10000 = 3/80 (kürzen durch 125).",
    "mittel",
    ["Prozentrechnung", "Bruchrechnung"]
  ),

  // ─── mathe-kap5: Funktionen (10 Fragen) ───

  q(
    "ma-pool-14-031",
    "mathe-kap5",
    "Die Funktion f(x) = 2x² − 8x + 6 hat Nullstellen bei:",
    [
      "x = 1 und x = 3",
      "x = −1 und x = −3",
      "x = 2 und x = 6",
      "x = −1 und x = 3",
      "x = 1 und x = −3",
    ],
    0,
    "2x² − 8x + 6 = 0 → x² − 4x + 3 = 0 → (x−1)(x−3) = 0. x₁ = 1, x₂ = 3.",
    "leicht",
    ["quadratische Funktion", "Nullstellen", "rechenfrage"]
  ),
  q(
    "ma-pool-14-032",
    "mathe-kap5",
    "Bestimmen Sie die Ableitung von f(x) = √x = x^(1/2) für x > 0.",
    ["1/(2√x)", "2√x", "√x/2", "1/√x", "x^(−1/2)/2"],
    0,
    "f'(x) = (1/2)x^(−1/2) = 1/(2√x). Optionen A und E beschreiben dasselbe.",
    "mittel",
    ["Ableitung", "Potenzregel"]
  ),
  q(
    "ma-pool-14-033",
    "mathe-kap5",
    "Welche Funktion wächst für große x am schnellsten?",
    ["f(x) = x³", "f(x) = 3ˣ", "f(x) = x¹⁰⁰", "f(x) = 100x", "f(x) = x!"],
    1,
    "Exponentialfunktionen wachsen schneller als jedes Polynom. 3ˣ überholt x³ und sogar x¹⁰⁰ für hinreichend große x. (x! wächst noch schneller, aber die Fakultät ist keine auf ℝ definierte Funktion im üblichen Sinne.)",
    "mittel",
    ["Wachstum", "Exponentialfunktion", "Vergleich"]
  ),
  q(
    "ma-pool-14-034",
    "mathe-kap5",
    "Die Funktion f(x) = x³ − 12x hat einen Wendepunkt bei:",
    ["x = 0", "x = 2", "x = −2", "x = 4", "x = −4"],
    0,
    "f''(x) = 6x = 0 → x = 0. f'''(0) = 6 ≠ 0, also ist x = 0 tatsächlich ein Wendepunkt.",
    "mittel",
    ["Ableitung", "Wendepunkt", "Kurvendiskussion"]
  ),
  q(
    "ma-pool-14-035",
    "mathe-kap5",
    "Berechnen Sie: ∫₀^(π/2) cos(x) dx.",
    ["0", "1", "−1", "π/2", "2"],
    1,
    "∫cos(x)dx = sin(x). [sin(x)]₀^(π/2) = sin(π/2) − sin(0) = 1 − 0 = 1.",
    "mittel",
    ["Integral", "Trigonometrie", "rechenfrage"]
  ),
  q(
    "ma-pool-14-036",
    "mathe-kap5",
    "Der Graph von f(x) = (x − 2)² + 3 ist eine Parabel. Ihr Scheitelpunkt liegt bei:",
    ["(2, 3)", "(−2, 3)", "(2, −3)", "(3, 2)", "(−2, −3)"],
    0,
    "Die Scheitelpunktform ist f(x) = (x − h)² + k mit Scheitelpunkt (h, k) = (2, 3).",
    "leicht",
    ["quadratische Funktion", "Scheitelpunkt"]
  ),
  q(
    "ma-pool-14-037",
    "mathe-kap5",
    "Die Funktion f(x) = 1/(x − 3) hat eine vertikale Asymptote bei:",
    ["x = 0", "x = 1", "x = 3", "x = −3", "y = 0"],
    2,
    "Der Nenner wird 0 für x = 3. Dort hat f eine vertikale Asymptote (Polstelle).",
    "leicht",
    ["Funktion", "Asymptote", "Polstelle"]
  ),
  q(
    "ma-pool-14-038",
    "mathe-kap5",
    "Welche Aussage über Integrale ist falsch?",
    [
      "∫ₐᵇ f(x)dx gibt die orientierte Fläche unter f an",
      "∫ₐᵇ f(x)dx = −∫ᵇₐ f(x)dx",
      "∫ₐᵃ f(x)dx = 0",
      "∫ₐᵇ [f(x) + g(x)]dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ g(x)dx",
      "∫ₐᵇ f(x)dx = f(b) − f(a)",
    ],
    4,
    "∫ₐᵇ f(x)dx = F(b) − F(a) wobei F eine Stammfunktion von f ist (nicht f(b) − f(a)). Der Hauptsatz der Integral­rechnung erfordert die Stammfunktion.",
    "mittel",
    ["Integral", "Falsch-Aussage"]
  ),
  q(
    "ma-pool-14-039",
    "mathe-kap5",
    "Die Funktion f(x) = e^(−x²) hat ihr Maximum bei:",
    ["x = −1", "x = 0", "x = 1", "x = e", "x = −e"],
    1,
    "f'(x) = −2x · e^(−x²) = 0 → x = 0. f''(0) = −2 < 0 → Maximum bei x = 0, f(0) = 1.",
    "schwer",
    ["Exponentialfunktion", "Ableitung", "Extremum"]
  ),
  q(
    "ma-pool-14-040",
    "mathe-kap5",
    "Bestimmen Sie die Stammfunktion von f(x) = 4x³ − 6x + 2.",
    [
      "x⁴ − 3x² + 2x + C",
      "12x² − 6 + C",
      "x⁴ − 6x² + 2x + C",
      "4x⁴ − 3x² + 2x + C",
      "x⁴ − 3x² + C",
    ],
    0,
    "F(x) = 4·x⁴/4 − 6·x²/2 + 2x + C = x⁴ − 3x² + 2x + C.",
    "mittel",
    ["Integral", "Stammfunktion"]
  ),

  // ─── mathe-kap6: Vektorrechnung (8 Fragen) ───

  q(
    "ma-pool-14-041",
    "mathe-kap6",
    "Berechnen Sie: 3a − 2b mit a = (1, −2, 3) und b = (2, 1, −1).",
    ["(−1, −8, 11)", "(7, −4, 7)", "(−1, −4, 5)", "(−1, −8, 5)", "(1, −8, 11)"],
    0,
    "3a = (3, −6, 9). 2b = (4, 2, −2). 3a − 2b = (3−4, −6−2, 9−(−2)) = (−1, −8, 11).",
    "mittel",
    ["Vektoren", "Linearkombination", "rechenfrage"]
  ),
  q(
    "ma-pool-14-042",
    "mathe-kap6",
    "Der Winkel zwischen a = (1, 1) und b = (−1, 1) beträgt:",
    ["0°", "45°", "90°", "135°", "180°"],
    2,
    "a · b = −1 + 1 = 0. Wenn das Skalarprodukt 0 ist, stehen die Vektoren senkrecht (90°).",
    "leicht",
    ["Vektoren", "Winkel", "Skalarprodukt"]
  ),
  q(
    "ma-pool-14-043",
    "mathe-kap6",
    "Gegeben: Gerade g durch A(2,1,0) und B(4,3,2). Der Richtungsvektor von g ist:",
    ["(2, 2, 2)", "(4, 3, 2)", "(6, 4, 2)", "(−2, −2, −2)", "(1, 1, 1)"],
    0,
    "AB = B − A = (4−2, 3−1, 2−0) = (2, 2, 2). (Auch (1,1,1) als vereinfachte Form wäre parallel, aber der direkte Vektor ist (2,2,2).)",
    "leicht",
    ["Vektoren", "Richtungsvektor", "Gerade"]
  ),
  q(
    "ma-pool-14-044",
    "mathe-kap6",
    "Berechnen Sie |a × b| mit a = (1, 0, 0) und b = (1, 1, 0).",
    ["0", "1", "√2", "2", "√3"],
    1,
    "a × b = (0·0−0·1, 0·1−1·0, 1·1−0·1) = (0, 0, 1). |a × b| = 1.",
    "schwer",
    ["Vektoren", "Kreuzprodukt", "Betrag", "rechenfrage"]
  ),
  q(
    "ma-pool-14-045",
    "mathe-kap6",
    "Der Ortsvektor des Punktes P, der die Strecke AB (A(1,3), B(5,7)) im Verhältnis 1:3 teilt, ist:",
    ["(2, 4)", "(3, 5)", "(4, 6)", "(1,5; 3,5)", "(2,5; 4,5)"],
    0,
    "P = A + (1/4)(B − A) = (1,3) + (1/4)(4,4) = (1+1, 3+1) = (2, 4).",
    "schwer",
    ["Vektoren", "Teilungspunkt", "rechenfrage"]
  ),
  q(
    "ma-pool-14-046",
    "mathe-kap6",
    "Für welchen Wert von k sind die Vektoren a = (2, k, 1) und b = (4, 6, 2) parallel?",
    ["2", "3", "4", "6", "12"],
    1,
    "Parallel: b = λa → (4,6,2) = λ(2,k,1). Aus Komp. 1: λ = 2. Aus Komp. 3: λ = 2 ✓. Aus Komp. 2: 6 = 2k → k = 3.",
    "mittel",
    ["Vektoren", "Parallelität"]
  ),
  q(
    "ma-pool-14-047",
    "mathe-kap6",
    "Gegeben: a = (3, 4, 0). Der Betrag der Projektion von a auf die xy-Ebene ist:",
    ["3", "4", "5", "7", "0"],
    2,
    "Projektion auf xy-Ebene: (3, 4, 0). Betrag = √(9 + 16) = 5.",
    "leicht",
    ["Vektoren", "Projektion", "Betrag"]
  ),
  q(
    "ma-pool-14-048",
    "mathe-kap6",
    "Der Abstand des Punktes P(1, 2, 3) vom Ursprung O(0, 0, 0) beträgt:",
    ["√6", "√14", "√10", "6", "√12"],
    1,
    "|OP| = √(1 + 4 + 9) = √14.",
    "leicht",
    ["Vektoren", "Abstand", "Betrag", "rechenfrage"]
  ),

  // ─── mathe-kap7: Stochastik (12 Fragen) ───

  q(
    "ma-pool-14-049",
    "mathe-kap7",
    "Drei Münzen werden gleichzeitig geworfen. Wie groß ist die Wahrscheinlichkeit, genau 2 Köpfe zu erhalten?",
    ["1/8", "2/8", "3/8", "4/8", "5/8"],
    2,
    "C(3,2) = 3 günstige Ausgänge (KKZ, KZK, ZKK) von 2³ = 8 möglichen. P = 3/8.",
    "leicht",
    ["Wahrscheinlichkeit", "Münzwurf", "Binomialkoeffizient"]
  ),
  q(
    "ma-pool-14-050",
    "mathe-kap7",
    "In einer Urne sind 6 weiße und 4 schwarze Kugeln. Zwei Kugeln werden mit Zurücklegen gezogen. P(beide weiß) = ?",
    ["9/25", "3/10", "6/10", "36/100", "15/45"],
    0,
    "P(weiß) = 6/10 = 3/5. Mit Zurücklegen: P = (3/5)² = 9/25.",
    "leicht",
    ["Wahrscheinlichkeit", "Urnenmodell", "mit Zurücklegen", "rechenfrage"]
  ),
  q(
    "ma-pool-14-051",
    "mathe-kap7",
    "Wie viele Möglichkeiten gibt es, aus 12 Kandidaten einen Vorstand mit Präsident, Vizepräsident und Schriftführer zu wählen?",
    ["220", "660", "1320", "1728", "479 001 600"],
    2,
    "P(12,3) = 12 × 11 × 10 = 1320. (Reihenfolge relevant, ohne Wiederholung.)",
    "mittel",
    ["Kombinatorik", "Permutation", "rechenfrage"]
  ),
  q(
    "ma-pool-14-052",
    "mathe-kap7",
    "Ein Test hat eine Sensitivität von 99 % und eine Spezifität von 95 %. Die Prävalenz beträgt 0,1 %. Wie hoch ist der PPV (gerundet)?",
    ["1,9 %", "5 %", "16,7 %", "50 %", "95 %"],
    0,
    "PPV = (0,99 × 0,001)/(0,99 × 0,001 + 0,05 × 0,999) = 0,00099/(0,00099 + 0,04995) = 0,00099/0,05094 ≈ 0,0194 ≈ 1,9 %.",
    "schwer",
    ["bedingte Wahrscheinlichkeit", "Bayes", "Diagnostik", "rechenfrage"]
  ),
  q(
    "ma-pool-14-053",
    "mathe-kap7",
    "Die Zufallsvariable X ist binomialverteilt mit n = 6 und p = 1/3. E(X) = ?",
    ["1", "2", "3", "1/2", "6"],
    1,
    "E(X) = n · p = 6 × 1/3 = 2.",
    "leicht",
    ["Binomialverteilung", "Erwartungswert", "rechenfrage"]
  ),
  q(
    "ma-pool-14-054",
    "mathe-kap7",
    "Auf einer Intensivstation werden 5 Patienten unabhängig voneinander behandelt. Jeder hat eine Überlebenswahrscheinlichkeit von 0,9. P(alle 5 überleben) = ?",
    ["0,531", "0,590", "0,656", "0,900", "0,450"],
    1,
    "P = 0,9⁵ = 0,59049 ≈ 0,590.",
    "mittel",
    ["Wahrscheinlichkeit", "Unabhängigkeit", "rechenfrage"]
  ),
  q(
    "ma-pool-14-055",
    "mathe-kap7",
    "Wie viele Wörter (auch sinnlose) kann man aus den Buchstaben von MAMA bilden?",
    ["4", "6", "8", "12", "24"],
    1,
    "4 Buchstaben, davon M 2× und A 2×. Anzahl = 4!/(2!·2!) = 24/4 = 6.",
    "mittel",
    ["Kombinatorik", "Permutation mit Wiederholung", "rechenfrage"]
  ),
  q(
    "ma-pool-14-056",
    "mathe-kap7",
    "P(A) = 0,5, P(B) = 0,3, P(A ∪ B) = 0,65. P(A ∩ B) = ?",
    ["0,10", "0,15", "0,20", "0,25", "0,35"],
    1,
    "P(A ∪ B) = P(A) + P(B) − P(A ∩ B). 0,65 = 0,5 + 0,3 − P(A ∩ B) → P(A ∩ B) = 0,15.",
    "mittel",
    ["Wahrscheinlichkeit", "Additionssatz", "rechenfrage"]
  ),
  q(
    "ma-pool-14-057",
    "mathe-kap7",
    "Welche Aussage zur bedingten Wahrscheinlichkeit ist falsch?",
    [
      "P(B|A) = P(A ∩ B) / P(A)",
      "P(A|B) = P(A ∩ B) / P(B)",
      "Wenn A und B unabhängig: P(B|A) = P(B)",
      "P(B|A) kann größer als 1 sein",
      "P(A|B) ≠ P(B|A) im Allgemeinen",
    ],
    3,
    "P(B|A) ist eine Wahrscheinlichkeit und liegt immer zwischen 0 und 1. Sie kann nicht größer als 1 sein.",
    "leicht",
    ["bedingte Wahrscheinlichkeit", "Falsch-Aussage"]
  ),
  q(
    "ma-pool-14-058",
    "mathe-kap7",
    "Ein Würfel wird 2-mal geworfen. Wie groß ist P(Augensumme ≥ 10)?",
    ["1/6", "6/36", "3/36", "1/12", "10/36"],
    1,
    "Paare mit Summe ≥ 10: (4,6)(5,5)(5,6)(6,4)(6,5)(6,6) = 6 Paare. P = 6/36 = 1/6.",
    "mittel",
    ["Wahrscheinlichkeit", "Würfel", "Laplace", "rechenfrage"]
  ),
  q(
    "ma-pool-14-059",
    "mathe-kap7",
    "Var(X) = 9. Berechnen Sie Var(3X + 2).",
    ["11", "27", "29", "81", "83"],
    3,
    "Var(aX + b) = a² · Var(X) = 9 · 9 = 81. Additive Konstanten ändern die Varianz nicht.",
    "schwer",
    ["Varianz", "Transformationsregeln", "rechenfrage"]
  ),
  q(
    "ma-pool-14-060",
    "mathe-kap7",
    "Eine Stichprobe hat die Werte {3, 5, 7, 9, 11}. Die Spannweite (Range) beträgt:",
    ["4", "6", "8", "7", "5"],
    2,
    "Spannweite = Maximum − Minimum = 11 − 3 = 8.",
    "leicht",
    ["Statistik", "Spannweite", "rechenfrage"]
  ),
];
