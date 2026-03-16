/**
 * Mathematik BMS Pool 7 — 60 Fragen im MedAT-Stil (Typ A, Typ M, Falsch-Aussagen).
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

export const mathematikPool7: Question[] = [
  // ─── mathe-kap1: Zahlen, Mengen, Einheiten (10 Fragen) ─────────────────
  q(
    "ma-pool-7-001",
    "mathe-kap1",
    "Berechne: (−5)³.",
    ["125", "−125", "−15", "15", "−243"],
    1,
    "(−5)³ = (−5) × (−5) × (−5) = −125. Ungerade Potenz einer negativen Zahl ergibt ein negatives Ergebnis.",
    "leicht",
    ["Potenzen", "Vorzeichen", "rechenfrage"]
  ),
  q(
    "ma-pool-7-002",
    "mathe-kap1",
    "Wie groß ist die Fläche eines Quadrats mit 50 mm Seitenlänge in cm²?",
    ["250 cm²", "25 cm²", "2,5 cm²", "0,25 cm²", "2 500 cm²"],
    1,
    "50 mm = 5 cm. A = 5² = 25 cm².",
    "leicht",
    ["Einheiten", "Flächeneinheiten", "rechenfrage"]
  ),
  q(
    "ma-pool-7-003",
    "mathe-kap1",
    "Ein Medikament hat eine Halbwertszeit von 2 Stunden. Die Anfangsdosis beträgt 400 mg. Wie viel ist nach 8 Stunden noch im Körper?",
    ["50 mg", "25 mg", "100 mg", "12,5 mg", "200 mg"],
    1,
    "In 8 h finden 8/2 = 4 Halbwertszeiten statt. 400 × (1/2)⁴ = 400/16 = 25 mg.",
    "mittel",
    ["Halbwertszeit", "rechenfrage"]
  ),
  q(
    "ma-pool-7-004",
    "mathe-kap1",
    "Welcher der folgenden Ausdrücke ist am größten?",
    ["2⁸", "3⁵", "4⁸", "5³", "10²"],
    2,
    "2⁸ = 256, 3⁵ = 243, 4⁸ = 65 536, 5³ = 125, 10² = 100. 4⁸ ist mit Abstand am größten.",
    "mittel",
    ["Potenzen", "Vergleich"]
  ),
  q(
    "ma-pool-7-005",
    "mathe-kap1",
    "Der Durchmesser eines roten Blutkörperchens beträgt ca. 7 µm. Wie viele rote Blutkörperchen müsste man nebeneinanderlegen, um 1 cm zu erreichen?",
    ["ca. 140", "ca. 700", "ca. 1 400", "ca. 7 000", "ca. 14 000"],
    2,
    "1 cm = 10 000 µm. Anzahl: 10 000/7 ≈ 1 429 ≈ 1 400.",
    "mittel",
    ["Einheiten", "Mikrometer", "rechenfrage"]
  ),
  q(
    "ma-pool-7-006",
    "mathe-kap1",
    "Berechne: log₁₀(2) + log₁₀(50).",
    ["3", "100", "2", "1 000", "52"],
    2,
    "log₁₀(2) + log₁₀(50) = log₁₀(2 × 50) = log₁₀(100) = 2.",
    "mittel",
    ["Logarithmus", "Rechenregeln", "rechenfrage"]
  ),
  q(
    "ma-pool-7-007",
    "mathe-kap1",
    "Welche Aussage über die Zahl 0 ist korrekt?",
    [
      "0 ist eine natürliche Zahl (Konvention ℕ₀).",
      "0 ist weder positiv noch negativ.",
      "0 hat keinen Kehrwert.",
      "Division durch 0 ist undefiniert.",
      "Alle genannten Aussagen sind korrekt.",
    ],
    4,
    "Alle Aussagen stimmen: 0 ∈ ℕ₀, 0 ist weder positiv noch negativ, 1/0 existiert nicht, a/0 ist undefiniert.",
    "leicht",
    ["Null", "Zahlenmengen"]
  ),
  q(
    "ma-pool-7-008",
    "mathe-kap1",
    "Ein Proton hat eine Masse von ca. 1,67 × 10⁻²⁷ kg. Wie viel Kilogramm wiegen 10¹⁰ Protonen?",
    ["1,67 × 10⁻¹⁷ kg", "1,67 × 10⁻³⁷ kg", "1,67 × 10⁻¹⁷ g", "1,67 × 10¹⁷ kg", "16,7 × 10⁻¹⁷ kg"],
    0,
    "10¹⁰ × 1,67 × 10⁻²⁷ = 1,67 × 10⁻¹⁷ kg.",
    "leicht",
    ["Zehnerpotenzen", "rechenfrage"]
  ),
  q(
    "ma-pool-7-009",
    "mathe-kap1",
    "Welche der folgenden Aussagen über reelle Zahlen ist FALSCH?",
    [
      "Zwischen zwei verschiedenen reellen Zahlen liegt immer eine rationale Zahl.",
      "Zwischen zwei verschiedenen rationalen Zahlen liegt immer eine irrationale Zahl.",
      "Die Summe zweier irrationaler Zahlen ist immer irrational.",
      "Das Produkt einer rationalen und einer irrationalen Zahl (≠ 0) ist irrational.",
      "ℝ = ℚ ∪ (ℝ \\ ℚ)",
    ],
    2,
    "Gegenbeispiel: √2 + (−√2) = 0 (rational). Die Summe zweier irrationaler Zahlen ist nicht immer irrational.",
    "schwer",
    ["Reelle Zahlen", "Irrationalität", "Falsch-Aussage"]
  ),
  q(
    "ma-pool-7-010",
    "mathe-kap1",
    "Berechne: ⌊3,7⌋ + ⌈3,2⌉ (Gauß-Klammer / Aufrundungsfunktion).",
    ["6", "7", "8", "6,9", "3"],
    1,
    "⌊3,7⌋ = 3 (abrunden) und ⌈3,2⌉ = 4 (aufrunden). Summe: 3 + 4 = 7.",
    "mittel",
    ["Gauß-Klammer", "rechenfrage"]
  ),

  // ─── mathe-kap2: Algebra, Gleichungen, Geometrie (10 Fragen) ───────────
  q(
    "ma-pool-7-011",
    "mathe-kap2",
    "Löse: x/(x − 2) = 3 für x ≠ 2.",
    ["x = 3", "x = 6", "x = 2", "x = −3", "x = 1"],
    0,
    "x = 3(x − 2) ⇒ x = 3x − 6 ⇒ −2x = −6 ⇒ x = 3. Probe: 3/(3 − 2) = 3 ✓.",
    "mittel",
    ["Bruchgleichung", "rechenfrage"]
  ),
  q(
    "ma-pool-7-012",
    "mathe-kap2",
    "Bestimme den Wert von x: 4ˣ = 1/64.",
    ["x = −3", "x = 3", "x = −4", "x = 1/16", "x = −6"],
    0,
    "64 = 4³, also 1/64 = 4⁻³ ⇒ x = −3.",
    "mittel",
    ["Exponentialgleichung", "rechenfrage"]
  ),
  q(
    "ma-pool-7-013",
    "mathe-kap2",
    "Der Satz von Thales besagt, dass ein Winkel im Halbkreis ein:",
    [
      "spitzer Winkel ist",
      "rechter Winkel ist",
      "stumpfer Winkel ist",
      "gestreckter Winkel ist",
      "beliebiger Winkel ist",
    ],
    1,
    "Nach dem Satz von Thales ist jeder Peripheriewinkel im Halbkreis (der den Durchmesser als Sehne hat) ein rechter Winkel (90°).",
    "leicht",
    ["Thales", "Kreisgeometrie"]
  ),
  q(
    "ma-pool-7-014",
    "mathe-kap2",
    "Vereinfache: (x³ − 8)/(x − 2) für x ≠ 2.",
    ["x² + 4", "x² − 2x + 4", "x² + 2x + 4", "x² − 4", "(x − 2)²"],
    2,
    "x³ − 8 = (x − 2)(x² + 2x + 4) (dritte binomische Formel für Differenz von Kuben). Kürzen: x² + 2x + 4.",
    "schwer",
    ["Polynomdivision", "Faktorisierung"]
  ),
  q(
    "ma-pool-7-015",
    "mathe-kap2",
    "Wie groß ist die Mantelfläche eines Zylinders mit Radius r = 3 cm und Höhe h = 7 cm? (π ≈ 3,14)",
    ["131,88 cm²", "65,94 cm²", "197,82 cm²", "63 cm²", "42π cm²"],
    0,
    "Mantelfläche M = 2πrh = 2 × 3,14 × 3 × 7 = 131,88 cm².",
    "mittel",
    ["Zylinder", "Mantelfläche", "rechenfrage"]
  ),
  q(
    "ma-pool-7-016",
    "mathe-kap2",
    "Gegeben ist das LGS: 2x − y = 1 und x + y = 5. Bestimme x und y.",
    ["x = 2, y = 3", "x = 3, y = 2", "x = 1, y = 4", "x = 4, y = 1", "x = 2, y = 5"],
    0,
    "Addition: 3x = 6 ⇒ x = 2. Einsetzen: 2 + y = 5 ⇒ y = 3.",
    "leicht",
    ["LGS", "Additionsverfahren", "rechenfrage"]
  ),
  q(
    "ma-pool-7-017",
    "mathe-kap2",
    "Ein Kreissektor hat einen Radius von 10 cm und einen Zentriwinkel von 90°. Wie groß ist seine Fläche? (π ≈ 3,14)",
    ["78,5 cm²", "31,4 cm²", "25π cm²", "157 cm²", "314 cm²"],
    0,
    "A = (α/360°) × πr² = (90/360) × 3,14 × 100 = 0,25 × 314 = 78,5 cm².",
    "mittel",
    ["Kreissektor", "Fläche", "rechenfrage"]
  ),
  q(
    "ma-pool-7-018",
    "mathe-kap2",
    "Löse: log₂(x) = 5.",
    ["x = 10", "x = 25", "x = 32", "x = 64", "x = 16"],
    2,
    "log₂(x) = 5 ⇒ x = 2⁵ = 32.",
    "leicht",
    ["Logarithmusgleichung", "rechenfrage"]
  ),
  q(
    "ma-pool-7-019",
    "mathe-kap2",
    "Welcher der folgenden Körper hat bei gleichem Radius und gleicher Höhe das größte Volumen?",
    [
      "Kegel",
      "Zylinder",
      "Halbkugel (h = r)",
      "Pyramide (quadratische Basis, a = 2r)",
      "Alle gleich",
    ],
    1,
    "Zylinder: V = πr²h. Kegel: V = (1/3)πr²h. Halbkugel (h = r): V = (2/3)πr³. Pyramide: V = (1/3)(2r)²h = (4/3)r²h. Für h = r: Zylinder = πr³, Kegel = (1/3)πr³, Halbkugel = (2/3)πr³, Pyramide = (4/3)r³. Zylinder ist am größten.",
    "schwer",
    ["Volumen", "Körper", "Vergleich"]
  ),
  q(
    "ma-pool-7-020",
    "mathe-kap2",
    "Welche der folgenden Aussagen über die Strahlensätze ist FALSCH?",
    [
      "Parallele Geraden teilen zwei Strahlen im gleichen Verhältnis.",
      "Die Strahlensätze gelten nur für rechte Winkel.",
      "Ähnliche Dreiecke haben gleiche Winkel.",
      "Bei zentrischer Streckung bleiben Winkel erhalten.",
      "Der Strahlensatz kann zur Berechnung unbekannter Strecken verwendet werden.",
    ],
    1,
    "Die Strahlensätze gelten für beliebige Winkel am Scheitelpunkt, nicht nur für rechte Winkel.",
    "mittel",
    ["Strahlensätze", "Falsch-Aussage"]
  ),

  // ─── mathe-kap3: Grundlagen (Brüche, Prozent, Potenzgesetze) (10 Fragen) ─
  q(
    "ma-pool-7-021",
    "mathe-kap3",
    "Berechne: (1/2 + 1/3) × 6.",
    ["5", "3", "6", "2", "18"],
    0,
    "(1/2 + 1/3) = 5/6. 5/6 × 6 = 5.",
    "leicht",
    ["Bruchrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-7-022",
    "mathe-kap3",
    "Wie viel Prozent sind 45 von 180?",
    ["20 %", "25 %", "30 %", "35 %", "40 %"],
    1,
    "45/180 = 1/4 = 0,25 = 25 %.",
    "leicht",
    ["Prozentrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-7-023",
    "mathe-kap3",
    "Vereinfache: (x⁻² · x⁵)/(x⁻¹).",
    ["x²", "x⁴", "x⁶", "x³", "x⁸"],
    1,
    "Zähler: x⁻² · x⁵ = x³. x³/x⁻¹ = x³⁻⁽⁻¹⁾ = x⁴.",
    "mittel",
    ["Potenzgesetze"]
  ),
  q(
    "ma-pool-7-024",
    "mathe-kap3",
    "Berechne: √(144/49).",
    ["12/7", "144/7", "12/49", "72/49", "2"],
    0,
    "√(144/49) = √144/√49 = 12/7.",
    "leicht",
    ["Wurzeln", "Bruchrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-7-025",
    "mathe-kap3",
    "Eine Population wächst jährlich um 5 %. Nach wie vielen Jahren hat sie sich verdoppelt? (log(1,05) ≈ 0,0212)",
    ["ca. 10 Jahre", "ca. 14 Jahre", "ca. 20 Jahre", "ca. 7 Jahre", "ca. 25 Jahre"],
    1,
    "1,05ⁿ = 2 ⇒ n = log(2)/log(1,05) ≈ 0,301/0,0212 ≈ 14,2 ≈ 14 Jahre.",
    "schwer",
    ["Exponentialwachstum", "Logarithmus", "rechenfrage"]
  ),
  q(
    "ma-pool-7-026",
    "mathe-kap3",
    "Welchen Wert hat: (−3)⁰?",
    ["−3", "0", "1", "−1", "undefiniert"],
    2,
    "Jede Zahl ≠ 0 hoch 0 ergibt 1. Also (−3)⁰ = 1.",
    "leicht",
    ["Potenzen"]
  ),
  q(
    "ma-pool-7-027",
    "mathe-kap3",
    "Vereinfache: ln(e²) + ln(e³).",
    ["5", "6", "e⁵", "2 + 3", "ln(5)"],
    0,
    "ln(e²) = 2 und ln(e³) = 3. Summe: 5. (Alternativ: ln(e² · e³) = ln(e⁵) = 5.)",
    "leicht",
    ["Logarithmus", "rechenfrage"]
  ),
  q(
    "ma-pool-7-028",
    "mathe-kap3",
    "Ein Wert sinkt von 120 auf 90. Um wie viel Prozent ist er gefallen?",
    ["30 %", "25 %", "20 %", "33,3 %", "75 %"],
    1,
    "Abnahme: (120 − 90)/120 × 100 % = 30/120 × 100 % = 25 %.",
    "leicht",
    ["Prozentrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-7-029",
    "mathe-kap3",
    "Welche Zahl ergibt sich aus: 2^(1/2) × 2^(3/2)?",
    ["2", "4", "2²", "√2", "8"],
    1,
    "2^(1/2) × 2^(3/2) = 2^(1/2 + 3/2) = 2² = 4.",
    "mittel",
    ["Potenzgesetze", "rechenfrage"]
  ),
  q(
    "ma-pool-7-030",
    "mathe-kap3",
    "Welche der folgenden Aussagen über Prozentrechnung ist FALSCH?",
    [
      "Eine Steigerung um 50 % entspricht der Multiplikation mit 1,5.",
      "Eine Senkung um 50 % wird durch Multiplikation mit 0,5 berechnet.",
      "Eine Steigerung um 100 % bedeutet Verdopplung.",
      "Nacheinander um 10 % und 10 % zu erhöhen ergibt insgesamt +20 %.",
      "Der Grundwert ist die Ausgangsgröße (100 %).",
    ],
    3,
    "1,1 × 1,1 = 1,21 → 21 % Steigerung, nicht 20 %. Die Fehlannahme beruht auf der Vernachlässigung des Zinseszinseffekts.",
    "mittel",
    ["Prozentrechnung", "Falsch-Aussage"]
  ),

  // ─── mathe-kap5: Funktionen (10 Fragen) ────────────────────────────────
  q(
    "ma-pool-7-031",
    "mathe-kap5",
    "Die Funktion f(x) = 1/(x² + 1) hat den Wertebereich:",
    ["(0, 1]", "[0, 1]", "(0, ∞)", "ℝ", "[−1, 1]"],
    0,
    "x² + 1 ≥ 1 für alle x, also 0 < 1/(x²+1) ≤ 1. Maximum bei x = 0: f(0) = 1. Für x → ±∞: f(x) → 0 (wird aber nie 0). Wertebereich: (0, 1].",
    "schwer",
    ["Wertebereich", "Rationale Funktion"]
  ),
  q(
    "ma-pool-7-032",
    "mathe-kap5",
    "Bestimme die Ableitung von f(x) = e^(−x²).",
    ["−2x · e^(−x²)", "−x² · e^(−x²−1)", "e^(−2x)", "2x · e^(−x²)", "−e^(−x²)"],
    0,
    "Kettenregel: f'(x) = e^(−x²) · (−2x) = −2x · e^(−x²).",
    "schwer",
    ["Ableitung", "Kettenregel", "Exponentialfunktion"]
  ),
  q(
    "ma-pool-7-033",
    "mathe-kap5",
    "Die Funktionen f(x) = 2x − 1 und g(x) = x² − 4 schneiden sich bei:",
    [
      "x = −1 und x = 3",
      "x = 2 und x = −2",
      "x = 1 und x = 4",
      "x = −1 und x = 2",
      "x = 0 und x = 4",
    ],
    0,
    "Gleichsetzen: x² − 4 = 2x − 1 ⇒ x² − 2x − 3 = 0 ⇒ (x − 3)(x + 1) = 0 ⇒ x = 3 oder x = −1. Probe: f(3) = 5, g(3) = 5 ✓; f(−1) = −3, g(−1) = −3 ✓.",
    "mittel",
    ["Schnittpunkte", "Quadratische Gleichung"]
  ),
  q(
    "ma-pool-7-034",
    "mathe-kap5",
    "Die Funktion f(x) = sin(x) + cos(x) hat den maximalen Funktionswert:",
    ["1", "2", "√2", "π", "√3"],
    2,
    "sin(x) + cos(x) = √2 · sin(x + π/4). Maximum: √2 (bei x + π/4 = π/2, also x = π/4).",
    "schwer",
    ["Trigonometrie", "Maximum"]
  ),
  q(
    "ma-pool-7-035",
    "mathe-kap5",
    "Die Funktion f(x) = x⁴ − 2x² hat bei x = 0:",
    [
      "ein lokales Minimum",
      "ein lokales Maximum",
      "einen Sattelpunkt",
      "einen Wendepunkt",
      "weder Maximum noch Minimum",
    ],
    1,
    "f'(x) = 4x³ − 4x = 4x(x² − 1). f'(0) = 0. f''(x) = 12x² − 4. f''(0) = −4 < 0 → lokales Maximum.",
    "schwer",
    ["Extremstellen", "Ableitung"]
  ),
  q(
    "ma-pool-7-036",
    "mathe-kap5",
    "Welche Transformation wandelt f(x) = x² in g(x) = (x − 3)² + 2 um?",
    [
      "Verschiebung um 3 nach links und 2 nach oben",
      "Verschiebung um 3 nach rechts und 2 nach oben",
      "Verschiebung um 3 nach rechts und 2 nach unten",
      "Streckung um Faktor 3 und Verschiebung um 2",
      "Spiegelung an der x-Achse und Verschiebung",
    ],
    1,
    "f(x − 3) verschiebt den Graphen um 3 nach rechts, + 2 verschiebt um 2 nach oben.",
    "leicht",
    ["Transformation", "Verschiebung"]
  ),
  q(
    "ma-pool-7-037",
    "mathe-kap5",
    "Berechne: ∫₀¹ eˣ dx.",
    ["e", "e − 1", "1", "e + 1", "ln(e)"],
    1,
    "∫₀¹ eˣ dx = [eˣ]₀¹ = e¹ − e⁰ = e − 1.",
    "mittel",
    ["Integral", "Exponentialfunktion", "rechenfrage"]
  ),
  q(
    "ma-pool-7-038",
    "mathe-kap5",
    "Die Umkehrfunktion von f(x) = eˣ ist:",
    ["f⁻¹(x) = 1/eˣ", "f⁻¹(x) = ln(x)", "f⁻¹(x) = log₁₀(x)", "f⁻¹(x) = e⁻ˣ", "f⁻¹(x) = √x"],
    1,
    "Die Umkehrfunktion der Exponentialfunktion eˣ ist der natürliche Logarithmus ln(x).",
    "leicht",
    ["Umkehrfunktion", "Logarithmus"]
  ),
  q(
    "ma-pool-7-039",
    "mathe-kap5",
    "Welchen Wert hat: sin²(60°) + cos²(60°)?",
    ["0", "1/2", "1", "√3", "2"],
    2,
    "Nach dem trigonometrischen Pythagoras gilt: sin²(α) + cos²(α) = 1 für jedes α.",
    "leicht",
    ["Trigonometrie", "Pythagoras"]
  ),
  q(
    "ma-pool-7-040",
    "mathe-kap5",
    "Die Funktion f(x) = x³ − 12x hat Extremstellen bei:",
    ["x = 0", "x = ±2", "x = ±4", "x = ±√12", "x = ±6"],
    1,
    "f'(x) = 3x² − 12 = 0 ⇒ x² = 4 ⇒ x = ±2. f''(x) = 6x. f''(2) = 12 > 0 (Minimum), f''(−2) = −12 < 0 (Maximum).",
    "mittel",
    ["Extremstellen", "Ableitung", "rechenfrage"]
  ),

  // ─── mathe-kap6: Vektorrechnung (10 Fragen) ────────────────────────────
  q(
    "ma-pool-7-041",
    "mathe-kap6",
    "Gegeben: a⃗ = (−1, 3, 2) und b⃗ = (2, −1, 1). Berechne a⃗ · b⃗.",
    ["−3", "3", "−1", "1", "7"],
    0,
    "a⃗ · b⃗ = (−1)·2 + 3·(−1) + 2·1 = −2 − 3 + 2 = −3.",
    "leicht",
    ["Skalarprodukt", "rechenfrage"]
  ),
  q(
    "ma-pool-7-042",
    "mathe-kap6",
    "Welcher Punkt liegt auf der Geraden g: r⃗(t) = (2, 1) + t · (1, 3)?",
    ["(3, 4)", "(4, 3)", "(2, 3)", "(1, 4)", "(3, 1)"],
    0,
    "Für t = 1: r⃗(1) = (2+1, 1+3) = (3, 4). Probe: (3, 4) liegt auf g ✓.",
    "leicht",
    ["Parameterdarstellung", "Gerade"]
  ),
  q(
    "ma-pool-7-043",
    "mathe-kap6",
    "Berechne |a⃗ × b⃗| für a⃗ = (1, 0, 0) und b⃗ = (1, 1, 0).",
    ["0", "1", "√2", "2", "√3"],
    1,
    "a⃗ × b⃗ = (0·0 − 0·1, 0·1 − 1·0, 1·1 − 0·1) = (0, 0, 1). |a⃗ × b⃗| = 1.",
    "mittel",
    ["Kreuzprodukt", "rechenfrage"]
  ),
  q(
    "ma-pool-7-044",
    "mathe-kap6",
    "Der Vektor v⃗ = (5, 12) hat den Betrag 13. Welcher Einheitsvektor zeigt in die gleiche Richtung?",
    ["(5, 12)", "(1, 1)", "(5/13, 12/13)", "(12/13, 5/13)", "(1/5, 1/12)"],
    2,
    "e⃗ = v⃗/|v⃗| = (5/13, 12/13). Probe: |(5/13, 12/13)| = √(25/169 + 144/169) = √(169/169) = 1 ✓.",
    "leicht",
    ["Einheitsvektor", "Normierung"]
  ),
  q(
    "ma-pool-7-045",
    "mathe-kap6",
    "Sind die Vektoren a⃗ = (2, 4, −2) und b⃗ = (−1, −2, 1) parallel?",
    [
      "Ja, mit Faktor λ = 2",
      "Ja, mit Faktor λ = −2",
      "Nein, sie sind orthogonal",
      "Nein, sie sind linear unabhängig",
      "Ja, mit Faktor λ = −1/2",
    ],
    1,
    "b⃗ = −1/2 · a⃗ ⇒ a⃗ = −2 · b⃗. Die Vektoren sind parallel (antiparallel) mit Faktor λ = −2.",
    "mittel",
    ["Parallele Vektoren", "Lineare Abhängigkeit"]
  ),
  q(
    "ma-pool-7-046",
    "mathe-kap6",
    "Berechne die Projektion von a⃗ = (3, 4) auf b⃗ = (1, 0).",
    ["(3, 0)", "(0, 4)", "(3, 4)", "(1, 0)", "(4, 0)"],
    0,
    "Projektion = (a⃗ · b⃗ / |b⃗|²) · b⃗ = (3/1) · (1, 0) = (3, 0).",
    "mittel",
    ["Projektion", "Skalarprodukt", "rechenfrage"]
  ),
  q(
    "ma-pool-7-047",
    "mathe-kap6",
    "Der Flächeninhalt des von a⃗ = (3, 0, 0) und b⃗ = (0, 4, 0) aufgespannten Parallelogramms beträgt:",
    ["7", "12", "24", "√25", "5"],
    1,
    "|a⃗ × b⃗| = |(0, 0, 12)| = 12. Fläche des Parallelogramms = 12.",
    "mittel",
    ["Kreuzprodukt", "Parallelogramm", "rechenfrage"]
  ),
  q(
    "ma-pool-7-048",
    "mathe-kap6",
    "Die Ebene E geht durch die Punkte A(1,0,0), B(0,1,0), C(0,0,1). Welche Gleichung hat sie?",
    ["x + y + z = 0", "x + y + z = 1", "x − y + z = 1", "x + y − z = 0", "2x + y + z = 2"],
    1,
    "Prüfe: A(1,0,0): 1+0+0=1 ✓, B(0,1,0): 0+1+0=1 ✓, C(0,0,1): 0+0+1=1 ✓. Also x + y + z = 1.",
    "schwer",
    ["Ebenengleichung"]
  ),
  q(
    "ma-pool-7-049",
    "mathe-kap6",
    "Gegeben: a⃗ = (1, 2, 3). Berechne a⃗ · a⃗.",
    ["6", "14", "√14", "12", "36"],
    1,
    "a⃗ · a⃗ = 1² + 2² + 3² = 1 + 4 + 9 = 14. (Dies entspricht |a⃗|².)",
    "leicht",
    ["Skalarprodukt", "rechenfrage"]
  ),
  q(
    "ma-pool-7-050",
    "mathe-kap6",
    "Welche der folgenden Aussagen über Vektoren ist FALSCH?",
    [
      "Ein Vektor hat Betrag und Richtung.",
      "Zwei Vektoren sind gleich, wenn sie denselben Betrag und dieselbe Richtung haben.",
      "Die Addition von Vektoren ist kommutativ.",
      "Das Skalarprodukt zweier Vektoren ist immer positiv.",
      "Der Nullvektor hat den Betrag 0.",
    ],
    3,
    "Das Skalarprodukt kann auch negativ sein (wenn der Winkel zwischen den Vektoren größer als 90° ist) oder null (bei senkrechten Vektoren).",
    "leicht",
    ["Vektoren", "Skalarprodukt", "Falsch-Aussage"]
  ),

  // ─── mathe-kap7: Stochastik (10 Fragen) ────────────────────────────────
  q(
    "ma-pool-7-051",
    "mathe-kap7",
    "Ein Glücksrad hat 5 gleich große Sektoren (nummeriert 1–5). Wie groß ist die Wahrscheinlichkeit, eine gerade Zahl zu drehen?",
    ["1/5", "2/5", "3/5", "1/2", "4/5"],
    1,
    "Gerade Zahlen: {2, 4} = 2 von 5. P = 2/5.",
    "leicht",
    ["Wahrscheinlichkeit", "Laplace"]
  ),
  q(
    "ma-pool-7-052",
    "mathe-kap7",
    "Berechne: P(6, 3) = 6!/(6−3)! (Variation ohne Wiederholung).",
    ["20", "120", "720", "216", "6"],
    1,
    "P(6, 3) = 6!/(6−3)! = 6!/3! = 720/6 = 120.",
    "leicht",
    ["Variation", "Fakultät", "rechenfrage"]
  ),
  q(
    "ma-pool-7-053",
    "mathe-kap7",
    "In einer Gruppe von 20 Personen sind 8 Frauen und 12 Männer. Es werden zufällig 3 Personen ausgewählt. Wie viele Möglichkeiten gibt es, genau 2 Frauen auszuwählen?",
    ["C(8,2) × C(12,1)", "C(8,2) × C(12,2)", "C(20,3)", "8² × 12", "8 × 7 × 12"],
    0,
    "2 aus 8 Frauen UND 1 aus 12 Männern: C(8,2) × C(12,1) = 28 × 12 = 336 Möglichkeiten.",
    "mittel",
    ["Hypergeometrische Verteilung", "Kombinatorik"]
  ),
  q(
    "ma-pool-7-054",
    "mathe-kap7",
    "Die Wahrscheinlichkeit, dass ein Patient auf ein Medikament anspricht, beträgt 0,8. Wie groß ist die Wahrscheinlichkeit, dass von 3 unabhängigen Patienten alle 3 ansprechen?",
    ["0,512", "0,800", "0,240", "0,600", "0,384"],
    0,
    "P(alle 3) = 0,8³ = 0,512.",
    "mittel",
    ["Binomialverteilung", "Unabhängigkeit", "rechenfrage"]
  ),
  q(
    "ma-pool-7-055",
    "mathe-kap7",
    "In einer Schachtel sind 10 Lose, davon 3 Gewinnlose. Man zieht 2 Lose ohne Zurücklegen. Wie groß ist die Wahrscheinlichkeit, mindestens ein Gewinnlos zu ziehen?",
    ["7/15", "8/15", "3/5", "1/3", "2/3"],
    1,
    "P(mind. 1 Gewinn) = 1 − P(0 Gewinn) = 1 − C(7,2)/C(10,2) = 1 − 21/45 = 1 − 7/15 = 8/15.",
    "schwer",
    ["Gegenwahrscheinlichkeit", "Kombinatorik", "rechenfrage"]
  ),
  q(
    "ma-pool-7-056",
    "mathe-kap7",
    "Wie viele Möglichkeiten gibt es, die Buchstaben des Wortes ANNA anzuordnen?",
    ["24", "12", "6", "4", "3"],
    2,
    "ANNA hat 4 Buchstaben: A erscheint 2×, N erscheint 2×. Anzahl Anordnungen: 4!/(2! · 2!) = 24/4 = 6.",
    "mittel",
    ["Permutation mit Wiederholung", "rechenfrage"]
  ),
  q(
    "ma-pool-7-057",
    "mathe-kap7",
    "Bei einer Normalverteilung liegen ca. 68 % der Werte innerhalb von:",
    ["μ ± 0,5σ", "μ ± σ", "μ ± 2σ", "μ ± 3σ", "μ ± 1,5σ"],
    1,
    "Die 68-95-99,7-Regel: Ca. 68 % der Werte liegen im Intervall μ ± σ (eine Standardabweichung).",
    "leicht",
    ["Normalverteilung", "Standardabweichung"]
  ),
  q(
    "ma-pool-7-058",
    "mathe-kap7",
    "Zwei Würfel werden geworfen. Wie groß ist die Wahrscheinlichkeit, dass die Summe kleiner als 5 ist?",
    ["1/6", "1/12", "6/36", "5/36", "4/36"],
    2,
    "Summe < 5 bedeutet Summe ∈ {2, 3, 4}. Summe 2: (1,1) = 1. Summe 3: (1,2),(2,1) = 2. Summe 4: (1,3),(2,2),(3,1) = 3. Gesamt: 6 von 36. P = 6/36 = 1/6.",
    "mittel",
    ["Wahrscheinlichkeit", "Würfel", "rechenfrage"]
  ),
  q(
    "ma-pool-7-059",
    "mathe-kap7",
    "Ein diagnostischer Test hat folgende Ergebnisse: 90 richtig-positiv, 10 falsch-negativ, 20 falsch-positiv, 880 richtig-negativ. Wie hoch ist die Sensitivität?",
    ["90 %", "81,8 %", "97,8 %", "80 %", "95 %"],
    0,
    "Sensitivität = RP/(RP + FN) = 90/(90 + 10) = 90/100 = 90 %.",
    "mittel",
    ["Sensitivität", "Diagnostik", "rechenfrage"]
  ),
  q(
    "ma-pool-7-060",
    "mathe-kap7",
    "Welche der folgenden Aussagen über die Binomialverteilung ist FALSCH?",
    [
      "Sie beschreibt die Anzahl der Treffer bei n unabhängigen Bernoulli-Versuchen.",
      "Die Trefferwahrscheinlichkeit p bleibt bei jedem Versuch konstant.",
      "Der Erwartungswert beträgt E(X) = n · p.",
      "Die Varianz beträgt Var(X) = n · p · q mit q = 1 − p.",
      "Sie kann nur für p = 0,5 angewendet werden.",
    ],
    4,
    "Die Binomialverteilung gilt für jedes p ∈ [0, 1], nicht nur für p = 0,5. Alle anderen Aussagen sind korrekte Eigenschaften.",
    "leicht",
    ["Binomialverteilung", "Falsch-Aussage"]
  ),
];
