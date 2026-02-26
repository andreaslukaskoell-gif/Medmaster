/**
 * Mathematik BMS Pool 15 — 60 Fragen im MedAT-Stil (Typ A).
 * Stoff: mathe-kap1, mathe-kap2, mathe-kap5, mathe-kap6, mathe-kap7.
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

const KAP = ["mathe-kap1", "mathe-kap2", "mathe-kap5", "mathe-kap6", "mathe-kap7"] as const;

export const mathematikPool15: Question[] = [
  q(
    "ma-pool-15-001",
    KAP[0],
    "10⁻⁴ · 10³ = ?",
    ["10⁻¹", "10⁻⁷", "10⁷", "10¹", "10⁻¹²"],
    0,
    "Exponenten addieren: −4 + 3 = −1.",
    "leicht",
    ["Zehnerpotenzen"]
  ),
  q(
    "ma-pool-15-002",
    KAP[1],
    "Umfang eines Rechtecks mit a = 5 cm, b = 8 cm?",
    ["13 cm", "26 cm", "40 cm", "20 cm", "80 cm"],
    1,
    "U = 2(a+b) = 2·13 = 26 cm.",
    "leicht",
    ["Rechteck", "Umfang"]
  ),
  q(
    "ma-pool-15-003",
    KAP[2],
    "f(x) = 3x − 6: Nullstelle?",
    ["x = 2", "x = −2", "x = 6", "x = 3", "x = 0"],
    0,
    "3x − 6 = 0 ⇒ x = 2.",
    "leicht",
    ["lineare Funktion", "Nullstelle"]
  ),
  q(
    "ma-pool-15-004",
    KAP[3],
    "Vektor (3, 4): Betrag?",
    ["5", "7", "12", "√7", "25"],
    0,
    "|v| = √(3²+4²) = √25 = 5.",
    "leicht",
    ["Vektor", "Betrag"]
  ),
  q(
    "ma-pool-15-005",
    KAP[4],
    "Wahrscheinlichkeit für „Kopf“ bei fairem Münzwurf?",
    ["0", "1/4", "1/2", "1", "2"],
    2,
    "Eine faire Münze: P(Kopf) = 1/2.",
    "leicht",
    ["Wahrscheinlichkeit"]
  ),
  q(
    "ma-pool-15-006",
    KAP[0],
    "Femto (f) = ?",
    ["10⁻¹²", "10⁻¹⁵", "10⁻¹⁸", "10⁻⁹", "10⁻⁶"],
    1,
    "Femto = 10⁻¹⁵.",
    "leicht",
    ["SI-Präfixe"]
  ),
  q(
    "ma-pool-15-007",
    KAP[1],
    "Dreieck: Grundlinie 10, Höhe 4. Fläche?",
    ["14", "20", "40", "5", "8"],
    1,
    "A = (1/2)·10·4 = 20.",
    "leicht",
    ["Dreieck", "Fläche"]
  ),
  q(
    "ma-pool-15-008",
    KAP[2],
    "y = x² + 2: Scheitel?",
    ["(0|2)", "(2|0)", "(−2|0)", "(0|−2)", "(1|3)"],
    0,
    "Parabelform x² + 2: Scheitel bei (0|2).",
    "leicht",
    ["Parabel", "Scheitelpunkt"]
  ),
  q(
    "ma-pool-15-009",
    KAP[3],
    "Skalarprodukt (1,0)·(0,1) = ?",
    ["0", "1", "2", "−1", "√2"],
    0,
    "1·0 + 0·1 = 0 (orthogonal).",
    "leicht",
    ["Skalarprodukt", "Vektoren"]
  ),
  q(
    "ma-pool-15-010",
    KAP[4],
    "Ein Würfel (1–6): P(gerade Zahl)?",
    ["1/6", "1/3", "1/2", "2/3", "1"],
    2,
    "Gerade: 2, 4, 6 → 3/6 = 1/2.",
    "leicht",
    ["Wahrscheinlichkeit"]
  ),
  q(
    "ma-pool-15-011",
    KAP[0],
    "0,0008 in Zehnerpotenz?",
    ["8·10⁻³", "8·10⁻⁴", "0,8·10⁻³", "80·10⁻⁵", "8·10⁻⁵"],
    1,
    "0,0008 = 8·10⁻⁴.",
    "leicht",
    ["Zehnerpotenzen"]
  ),
  q(
    "ma-pool-15-012",
    KAP[1],
    "Kreis r = 3: Umfang?",
    ["3π", "6π", "9π", "π", "12π"],
    1,
    "U = 2πr = 6π.",
    "leicht",
    ["Kreis", "Umfang"]
  ),
  q(
    "ma-pool-15-013",
    KAP[2],
    "log₁₀(1000) = ?",
    ["2", "3", "10", "100", "1"],
    1,
    "10³ = 1000 ⇒ log₁₀(1000) = 3.",
    "leicht",
    ["Logarithmus"]
  ),
  q(
    "ma-pool-15-014",
    KAP[3],
    "Vektor (2, 2) hat den Winkel zur x-Achse (in Grad):",
    ["30°", "45°", "60°", "90°", "0°"],
    1,
    "tan(α) = 2/2 = 1 ⇒ α = 45°.",
    "mittel",
    ["Vektor", "Winkel"]
  ),
  q(
    "ma-pool-15-015",
    KAP[4],
    "Zwei faire Würfel: P(Summe 7)?",
    ["1/36", "1/12", "1/6", "1/3", "7/36"],
    2,
    "Günstig: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6; 6/36 = 1/6.",
    "mittel",
    ["Wahrscheinlichkeit"]
  ),
  q(
    "ma-pool-15-016",
    KAP[0],
    "5·10² + 3·10² = ?",
    ["8·10²", "15·10²", "8·10⁴", "2·10²", "53"],
    0,
    "5·10² + 3·10² = 8·10².",
    "leicht",
    ["Zehnerpotenzen"]
  ),
  q(
    "ma-pool-15-017",
    KAP[1],
    "Quader a=2, b=3, c=4: Volumen?",
    ["9", "24", "14", "12", "20"],
    1,
    "V = a·b·c = 2·3·4 = 24.",
    "leicht",
    ["Quader", "Volumen"]
  ),
  q(
    "ma-pool-15-018",
    KAP[2],
    "f(x) = −x²: nach oben oder unten geöffnet?",
    ["oben", "unten", "weder noch", "beides", "linear"],
    1,
    "Faktor vor x² negativ ⇒ Parabel nach unten geöffnet.",
    "leicht",
    ["Parabel"]
  ),
  q(
    "ma-pool-15-019",
    KAP[3],
    "Zwei Vektoren sind genau dann parallel, wenn:",
    [
      "ihr Skalarprodukt 0 ist",
      "einer ein Vielfaches des anderen ist",
      "sie gleich lang sind",
      "ihre Summe 0 ist",
      "sie senkrecht stehen",
    ],
    1,
    "Parallel ⇔ a = k·b für ein k ≠ 0.",
    "leicht",
    ["Vektoren", "parallel"]
  ),
  q(
    "ma-pool-15-020",
    KAP[4],
    "P(A oder B) bei unvereinbaren Ereignissen:",
    ["P(A)·P(B)", "P(A)+P(B)", "P(A)−P(B)", "P(A)/P(B)", "max(P(A),P(B))"],
    1,
    "Unvereinbar ⇒ P(A∪B) = P(A)+P(B).",
    "mittel",
    ["Wahrscheinlichkeit"]
  ),
  q(
    "ma-pool-15-021",
    KAP[0],
    "1 km in m?",
    ["10³", "10⁴", "10²", "10⁶", "10⁻³"],
    0,
    "1 km = 1000 m = 10³ m.",
    "leicht",
    ["Längeneinheiten"]
  ),
  q(
    "ma-pool-15-022",
    KAP[1],
    "Pythagoras: a=6, b=8 ⇒ c = ?",
    ["10", "14", "2", "48", "100"],
    0,
    "c² = 36+64 = 100 ⇒ c = 10.",
    "leicht",
    ["Pythagoras"]
  ),
  q(
    "ma-pool-15-023",
    KAP[2],
    "e^(ln x) = ? (x > 0)",
    ["0", "1", "x", "e", "ln x"],
    2,
    "e und ln sind Umkehrfunktionen: e^(ln x) = x.",
    "leicht",
    ["Logarithmus", "e"]
  ),
  q(
    "ma-pool-15-024",
    KAP[3],
    "Mittelpunkt zwischen P(0|0) und Q(4|6)?",
    ["(2|3)", "(4|6)", "(2|6)", "(0|3)", "(4|0)"],
    0,
    "M = ((0+4)/2 | (0+6)/2) = (2|3).",
    "leicht",
    ["Vektor", "Mittelpunkt"]
  ),
  q(
    "ma-pool-15-025",
    KAP[4],
    "Binomialverteilung: n=5, p=0,5. Erwartungswert?",
    ["2", "2,5", "5", "1", "0,5"],
    1,
    "E = n·p = 5·0,5 = 2,5.",
    "mittel",
    ["Binomialverteilung", "Erwartungswert"]
  ),
  q(
    "ma-pool-15-026",
    KAP[0],
    "Mikro (μ) = ?",
    ["10⁻⁶", "10⁻⁹", "10⁻¹²", "10⁻³", "10⁶"],
    0,
    "Mikro = 10⁻⁶.",
    "leicht",
    ["SI-Präfixe"]
  ),
  q(
    "ma-pool-15-027",
    KAP[1],
    "Oberfläche Würfel mit Kantenlänge 2?",
    ["8", "12", "24", "6", "4"],
    2,
    "O = 6·a² = 6·4 = 24.",
    "leicht",
    ["Würfel", "Oberfläche"]
  ),
  q(
    "ma-pool-15-028",
    KAP[2],
    "f(x) = |x|: Ableitung bei x > 0?",
    ["0", "1", "−1", "x", "nicht definiert"],
    1,
    "Für x > 0 ist |x| = x, also f'(x) = 1.",
    "mittel",
    ["Betrag", "Ableitung"]
  ),
  q(
    "ma-pool-15-029",
    KAP[3],
    "Vektor v = (1, 1): Einheitsvektor in v-Richtung?",
    ["(1, 1)", "(1/√2, 1/√2)", "(0, 0)", "(2, 2)", "(√2, √2)"],
    1,
    "|v| = √2; Einheitsvektor = v/|v| = (1/√2, 1/√2).",
    "mittel",
    ["Einheitsvektor"]
  ),
  q(
    "ma-pool-15-030",
    KAP[4],
    "P(mindestens eine 6 bei 2 Würfeln)?",
    ["1/36", "11/36", "1/3", "1/6", "25/36"],
    1,
    "Gegenereignis: keine 6. P(keine 6) = (5/6)² = 25/36 ⇒ P(mind. eine 6) = 11/36.",
    "mittel",
    ["Wahrscheinlichkeit"]
  ),
  q(
    "ma-pool-15-031",
    KAP[0],
    "3 mmol in mol?",
    ["3·10⁻³", "3·10³", "0,003", "3000", "3·10⁻⁶"],
    0,
    "milli = 10⁻³ ⇒ 3 mmol = 3·10⁻³ mol.",
    "leicht",
    ["Einheiten"]
  ),
  q(
    "ma-pool-15-032",
    KAP[1],
    "Zylinder r=2, h=5: Volumen?",
    ["10π", "20π", "4π", "5π", "20"],
    1,
    "V = πr²h = π·4·5 = 20π.",
    "leicht",
    ["Zylinder", "Volumen"]
  ),
  q(
    "ma-pool-15-033",
    KAP[2],
    "f(x) = x³: f'(1) = ?",
    ["1", "3", "0", "2", "1/3"],
    1,
    "f'(x) = 3x² ⇒ f'(1) = 3.",
    "leicht",
    ["Ableitung", "Potenz"]
  ),
  q(
    "ma-pool-15-034",
    KAP[3],
    "a = (1, 2), b = (2, −1): a + b = ?",
    ["(3, 1)", "(−1, 3)", "(2, 2)", "(1, 1)", "(4, −2)"],
    0,
    "Komponentenweise: (1+2, 2+(−1)) = (3, 1).",
    "leicht",
    ["Vektoraddition"]
  ),
  q(
    "ma-pool-15-035",
    KAP[4],
    "Standardabweichung einer Einzelmessung (Würfel 1–6)?",
    ["√(35/12)", "3,5", "35/12", "6", "1"],
    0,
    "Varianz = 35/12 ⇒ σ = √(35/12).",
    "schwer",
    ["Standardabweichung"]
  ),
  q(
    "ma-pool-15-036",
    KAP[0],
    "10⁸ / 10⁵ = ?",
    ["10³", "10¹³", "10⁴", "10⁻³", "10²"],
    0,
    "Exponenten subtrahieren: 8 − 5 = 3.",
    "leicht",
    ["Zehnerpotenzen"]
  ),
  q(
    "ma-pool-15-037",
    KAP[1],
    "Trapez: Grundseiten 4 und 6, Höhe 3. Fläche?",
    ["15", "10", "30", "5", "18"],
    0,
    "A = (a+c)/2 · h = (4+6)/2 · 3 = 15.",
    "mittel",
    ["Trapez", "Fläche"]
  ),
  q(
    "ma-pool-15-038",
    KAP[2],
    "ln(e²) = ?",
    ["2", "e", "e²", "1", "2e"],
    0,
    "ln(e²) = 2·ln(e) = 2·1 = 2.",
    "leicht",
    ["Logarithmus"]
  ),
  q(
    "ma-pool-15-039",
    KAP[3],
    "Winkel zwischen (1, 0) und (1, 1) (in Grad)?",
    ["0°", "30°", "45°", "60°", "90°"],
    2,
    "cos(α) = (1·1+0·1)/(1·√2) = 1/√2 ⇒ α = 45°.",
    "mittel",
    ["Winkel", "Vektoren"]
  ),
  q(
    "ma-pool-15-040",
    KAP[4],
    "P(A und B) bei unabhängigen Ereignissen?",
    ["P(A) + P(B)", "P(A) · P(B)", "P(A) − P(B)", "P(A) / P(B)", "max(P(A), P(B))"],
    1,
    "Unabhängig ⇒ P(A∩B) = P(A)·P(B).",
    "mittel",
    ["Wahrscheinlichkeit"]
  ),
  q(
    "ma-pool-15-041",
    KAP[0],
    "Atto (a) = ?",
    ["10⁻¹⁸", "10⁻¹⁵", "10⁻¹²", "10⁻²¹", "10⁻⁹"],
    0,
    "Atto = 10⁻¹⁸.",
    "leicht",
    ["SI-Präfixe"]
  ),
  q(
    "ma-pool-15-042",
    KAP[1],
    "Kugel r = 1: Volumen?",
    ["4π/3", "4π", "π", "2π", "π/3"],
    0,
    "V = (4/3)πr³ = (4/3)π.",
    "leicht",
    ["Kugel", "Volumen"]
  ),
  q(
    "ma-pool-15-043",
    KAP[2],
    "f(x) = 1/x: Definitionsmenge?",
    ["ℝ", "ℝ \\ {0}", "ℝ⁺", "ℝ⁻", "ℕ"],
    1,
    "x ≠ 0, da Division durch 0 nicht definiert.",
    "leicht",
    ["Definitionsmenge"]
  ),
  q(
    "ma-pool-15-044",
    KAP[3],
    "Kreuzprodukt (1,0,0)×(0,1,0) (Rechte-Hand-Regel)?",
    ["(0,0,1)", "(0,0,−1)", "(1,1,0)", "(0,0,0)", "(−1,0,0)"],
    0,
    "e_x × e_y = e_z = (0, 0, 1).",
    "mittel",
    ["Kreuzprodukt"]
  ),
  q(
    "ma-pool-15-045",
    KAP[4],
    "Median der Zahlen 1, 3, 3, 6, 7?",
    ["3", "4", "5", "6", "7"],
    0,
    "Geordnet: 1, 3, 3, 6, 7. Mitte = 3 (ungerade Anzahl).",
    "leicht",
    ["Median", "Statistik"]
  ),
  q(
    "ma-pool-15-046",
    KAP[0],
    "1 μg in g?",
    ["10⁻⁶", "10⁻³", "10⁻⁹", "10⁶", "1000"],
    0,
    "Mikro = 10⁻⁶ ⇒ 1 μg = 10⁻⁶ g.",
    "leicht",
    ["Masse", "Einheiten"]
  ),
  q(
    "ma-pool-15-047",
    KAP[1],
    "Sin(30°) = ?",
    ["1/2", "√3/2", "1", "√2/2", "0"],
    0,
    "sin(30°) = 1/2.",
    "leicht",
    ["Sinus", "Trigonometrie"]
  ),
  q(
    "ma-pool-15-048",
    KAP[2],
    "f(x) = 2^x: f(0) = ?",
    ["0", "1", "2", "1/2", "e"],
    1,
    "2^0 = 1.",
    "leicht",
    ["Exponentialfunktion"]
  ),
  q(
    "ma-pool-15-049",
    KAP[3],
    "Länge der Strecke von (0,0) nach (3,4)?",
    ["5", "7", "12", "√7", "25"],
    0,
    "|v| = √(9+16) = 5.",
    "leicht",
    ["Betrag", "Abstand"]
  ),
  q(
    "ma-pool-15-050",
    KAP[4],
    "Arithmetisches Mittel von 2, 4, 6?",
    ["4", "6", "2", "12", "3"],
    0,
    "Mittel = (2+4+6)/3 = 4.",
    "leicht",
    ["Mittelwert"]
  ),
  q(
    "ma-pool-15-051",
    KAP[0],
    "10^0 = ?",
    ["0", "1", "10", "−1", "nicht definiert"],
    1,
    "Jede Zahl hoch 0 (außer 0) ist 1.",
    "leicht",
    ["Potenz"]
  ),
  q(
    "ma-pool-15-052",
    KAP[1],
    "Cos(60°) = ?",
    ["1/2", "√3/2", "1", "0", "√2/2"],
    0,
    "cos(60°) = 1/2.",
    "leicht",
    ["Cosinus"]
  ),
  q(
    "ma-pool-15-053",
    KAP[2],
    "f(x) = x²: f'(2) = ?",
    ["2", "4", "0", "1", "8"],
    1,
    "f'(x) = 2x ⇒ f'(2) = 4.",
    "leicht",
    ["Ableitung"]
  ),
  q(
    "ma-pool-15-054",
    KAP[3],
    "a = (4, 0), b = (0, 3): |a − b| = ?",
    ["5", "1", "7", "12", "√7"],
    0,
    "a − b = (4, −3); |a−b| = √(16+9) = 5.",
    "mittel",
    ["Vektoren", "Betrag"]
  ),
  q(
    "ma-pool-15-055",
    KAP[4],
    "Relative Häufigkeit = ?",
    [
      "Anzahl / Gesamtzahl",
      "Gesamtzahl / Anzahl",
      "Anzahl · Gesamtzahl",
      "Anzahl − Gesamtzahl",
      "Anzahl + Gesamtzahl",
    ],
    0,
    "Relative Häufigkeit = absolute Häufigkeit / n.",
    "leicht",
    ["Häufigkeit"]
  ),
  q(
    "ma-pool-15-056",
    KAP[0],
    "√(10⁶) = ?",
    ["10³", "10⁶", "10¹²", "10²", "10⁸"],
    0,
    "√(10⁶) = 10^(6/2) = 10³.",
    "leicht",
    ["Wurzel"]
  ),
  q(
    "ma-pool-15-057",
    KAP[1],
    "Tangens(45°) = ?",
    ["0", "1", "√2", "1/2", "√3"],
    1,
    "tan(45°) = 1.",
    "leicht",
    ["Tangens"]
  ),
  q(
    "ma-pool-15-058",
    KAP[2],
    "f(x) = x² − 4: Nullstellen?",
    ["x = ±4", "x = ±2", "x = 0", "x = 2", "keine"],
    1,
    "x² − 4 = 0 ⇒ x² = 4 ⇒ x = 2 oder x = −2.",
    "leicht",
    ["Nullstelle", "Parabel"]
  ),
  q(
    "ma-pool-15-059",
    KAP[3],
    "Vektor (0, 5): Einheitsvektor?",
    ["(0, 1)", "(0, 5)", "(1, 0)", "(0, 1/5)", "nicht definiert"],
    0,
    "|(0,5)| = 5; (0,5)/5 = (0, 1).",
    "leicht",
    ["Einheitsvektor"]
  ),
  q(
    "ma-pool-15-060",
    KAP[4],
    "Modus der Werte 2, 2, 3, 3, 3, 4?",
    ["2", "3", "2,5", "4", "3,5"],
    1,
    "Modus = häufigster Wert = 3.",
    "leicht",
    ["Modus", "Statistik"]
  ),
];
