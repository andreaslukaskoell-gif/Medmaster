/**
 * Mathematik BMS Pool 3 — 60 Fragen im MedAT-Stil (Typ A, Typ M, Falsch-Aussagen).
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

export const mathematikPool3: Question[] = [
  // ─── mathe-kap1: Zahlen, Mengen, Einheiten (10 Fragen) ─────────────────
  q(
    "ma-pool-3-001",
    "mathe-kap1",
    "Wie lautet der Betrag der komplexen Zahl z = 3 + 4i?",
    ["7", "5", "25", "√7", "12"],
    1,
    "|z| = √(3² + 4²) = √(9 + 16) = √25 = 5.",
    "leicht",
    ["Komplexe Zahlen", "Betrag"]
  ),
  q(
    "ma-pool-3-002",
    "mathe-kap1",
    "Ein Laborgerät misst eine Masse von 4,7 × 10⁻⁶ g. In welcher SI-Einheit wird dieser Wert üblicherweise angegeben?",
    ["4,7 ng", "4,7 µg", "47 ng", "0,47 µg", "47 µg"],
    1,
    "4,7 × 10⁻⁶ g = 4,7 µg (Mikrogramm), da 1 µg = 10⁻⁶ g.",
    "leicht",
    ["SI-Präfixe", "Einheiten"]
  ),
  q(
    "ma-pool-3-003",
    "mathe-kap1",
    "Welche Aussage über Intervalle ist korrekt?",
    [
      "Das Intervall [2, 5) enthält die Zahl 5.",
      "Das Intervall (0, 1) enthält unendlich viele rationale Zahlen.",
      "Das Intervall ]3, 3[ enthält genau ein Element.",
      "Jedes abgeschlossene Intervall [a, b] enthält endlich viele reelle Zahlen.",
      "Das offene Intervall (0, 1) enthält die Zahl 0.",
    ],
    1,
    "Zwischen zwei verschiedenen reellen Zahlen liegen stets unendlich viele rationale Zahlen (Dichtheit von ℚ in ℝ). Das Intervall [2, 5) enthält 5 nicht, ]3, 3[ ist leer, [a, b] enthält überabzählbar viele reelle Zahlen, und (0, 1) enthält 0 nicht.",
    "mittel",
    ["Intervalle", "Zahlenmengen"]
  ),
  q(
    "ma-pool-3-004",
    "mathe-kap1",
    "Eine Infusionslösung hat eine Konzentration von 0,45 %. Wie viel Gramm gelöster Stoff sind in 2 Litern Lösung enthalten?",
    ["0,9 g", "4,5 g", "9 g", "45 g", "0,45 g"],
    2,
    "0,45 % bedeutet 0,45 g pro 100 mL. Bei 2000 mL: 0,45 × 20 = 9 g.",
    "leicht",
    ["Prozentrechnung", "Konzentration", "rechenfrage"]
  ),
  q(
    "ma-pool-3-005",
    "mathe-kap1",
    "Welche der folgenden Zahlen ist irrational?",
    ["0,333...", "√(49)", "22/7", "√2", "−3/4"],
    3,
    "√2 ist irrational. 0,333... = 1/3 (rational), √49 = 7 (ganzzahlig), 22/7 und −3/4 sind Brüche (rational).",
    "leicht",
    ["Irrationale Zahlen", "Zahlenmengen"]
  ),
  q(
    "ma-pool-3-006",
    "mathe-kap1",
    "Die Avogadro-Konstante beträgt ca. 6,022 × 10²³ mol⁻¹. Wie viele Teilchen enthält 0,5 mol einer Substanz?",
    ["6,022 × 10²³", "3,011 × 10²³", "1,204 × 10²⁴", "3,011 × 10²²", "6,022 × 10²²"],
    1,
    "0,5 mol × 6,022 × 10²³ mol⁻¹ = 3,011 × 10²³ Teilchen.",
    "leicht",
    ["Avogadro", "Zehnerpotenzen", "rechenfrage"]
  ),
  q(
    "ma-pool-3-007",
    "mathe-kap1",
    "Welche der folgenden Aussagen über Zahlenmengen ist FALSCH?",
    [
      "ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ",
      "Jede ganze Zahl ist eine rationale Zahl.",
      "Die Menge der reellen Zahlen ist überabzählbar.",
      "ℚ ist eine abzählbar unendliche Menge.",
      "Jede reelle Zahl ist eine rationale Zahl.",
    ],
    4,
    "Nicht jede reelle Zahl ist rational — irrationale Zahlen wie √2 oder π gehören zu ℝ \\ ℚ. Alle anderen Aussagen sind korrekt.",
    "leicht",
    ["Zahlenmengen", "Falsch-Aussage"]
  ),
  q(
    "ma-pool-3-008",
    "mathe-kap1",
    "Ein Medikament wird mit 0,25 mg/kg Körpergewicht dosiert. Ein Patient wiegt 80 kg. Wie viele Milligramm werden verabreicht?",
    ["2 mg", "20 mg", "25 mg", "200 mg", "0,2 mg"],
    1,
    "0,25 mg/kg × 80 kg = 20 mg.",
    "leicht",
    ["Dosisberechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-3-009",
    "mathe-kap1",
    "Welchen Wert hat der Ausdruck log₁₀(10⁵ × 10⁻²)?",
    ["3", "7", "−10", "10", "2,5"],
    0,
    "10⁵ × 10⁻² = 10³. Daher log₁₀(10³) = 3.",
    "mittel",
    ["Logarithmus", "Zehnerpotenzen", "rechenfrage"]
  ),
  q(
    "ma-pool-3-010",
    "mathe-kap1",
    "Die Wellenlänge von rotem Licht beträgt ca. 700 nm. Wie viel Meter sind das?",
    ["7 × 10⁻⁵ m", "7 × 10⁻⁷ m", "7 × 10⁻⁹ m", "7 × 10⁻⁶ m", "7 × 10⁻⁴ m"],
    1,
    "1 nm = 10⁻⁹ m, also 700 nm = 700 × 10⁻⁹ m = 7 × 10⁻⁷ m.",
    "leicht",
    ["Einheiten", "Nano", "Wellenlänge"]
  ),

  // ─── mathe-kap2: Algebra, Gleichungen, Geometrie (10 Fragen) ───────────
  q(
    "ma-pool-3-011",
    "mathe-kap2",
    "Für welches x gilt: 2x² − 8x + 6 = 0?",
    [
      "x = 1 oder x = 3",
      "x = 2 oder x = 3",
      "x = −1 oder x = −3",
      "x = 1 oder x = 6",
      "x = 2 oder x = 6",
    ],
    0,
    "2x² − 8x + 6 = 0 ⇒ x² − 4x + 3 = 0 ⇒ (x − 1)(x − 3) = 0 ⇒ x = 1 oder x = 3.",
    "leicht",
    ["Quadratische Gleichung"]
  ),
  q(
    "ma-pool-3-012",
    "mathe-kap2",
    "Wie lautet die Diskriminante der Gleichung 3x² + 2x − 5 = 0?",
    ["64", "−56", "4", "16", "56"],
    0,
    "D = b² − 4ac = 4 − 4·3·(−5) = 4 + 60 = 64.",
    "leicht",
    ["Diskriminante", "rechenfrage"]
  ),
  q(
    "ma-pool-3-013",
    "mathe-kap2",
    "Welches lineare Gleichungssystem hat unendlich viele Lösungen?",
    [
      "x + y = 3 und 2x + 2y = 5",
      "x + y = 3 und 2x + 2y = 6",
      "x + y = 3 und x − y = 1",
      "2x + y = 4 und x + 2y = 5",
      "x + y = 3 und 2x + y = 4",
    ],
    1,
    "2x + 2y = 6 ist identisch mit 2·(x + y = 3). Die Gleichungen sind linear abhängig → unendlich viele Lösungen.",
    "mittel",
    ["LGS", "Lineare Abhängigkeit"]
  ),
  q(
    "ma-pool-3-014",
    "mathe-kap2",
    "Ein rechtwinkliges Dreieck hat die Katheten a = 5 cm und b = 12 cm. Wie lang ist die Hypotenuse?",
    ["17 cm", "13 cm", "15 cm", "√119 cm", "14 cm"],
    1,
    "c = √(a² + b²) = √(25 + 144) = √169 = 13 cm.",
    "leicht",
    ["Pythagoras", "rechenfrage"]
  ),
  q(
    "ma-pool-3-015",
    "mathe-kap2",
    "Welche der folgenden Ungleichungen beschreibt die Lösungsmenge {x ∈ ℝ | −2 < x ≤ 5}?",
    ["−2 ≤ x < 5", "−2 < x ≤ 5", "−2 ≤ x ≤ 5", "x > −2 und x > 5", "−2 < x < 5"],
    1,
    "Die Menge {x ∈ ℝ | −2 < x ≤ 5} bedeutet: x ist größer als −2 (strikt) und kleiner oder gleich 5. Dies entspricht −2 < x ≤ 5.",
    "leicht",
    ["Ungleichungen", "Intervalle"]
  ),
  q(
    "ma-pool-3-016",
    "mathe-kap2",
    "Vereinfache: (a + b)² − (a − b)².",
    ["2ab", "4ab", "2a² + 2b²", "a² + b²", "0"],
    1,
    "(a + b)² − (a − b)² = (a² + 2ab + b²) − (a² − 2ab + b²) = 4ab.",
    "mittel",
    ["Binomische Formeln"]
  ),
  q(
    "ma-pool-3-017",
    "mathe-kap2",
    "Der Flächeninhalt eines gleichseitigen Dreiecks mit Seitenlänge a beträgt:",
    ["a²/2", "a² · √3/4", "a² · √3/2", "a²/4", "a² · √2/4"],
    1,
    "Flächeninhalt eines gleichseitigen Dreiecks: A = (a² · √3)/4. Die Höhe h = a · √3/2, und A = a · h/2 = a²√3/4.",
    "mittel",
    ["Geometrie", "Dreieck"]
  ),
  q(
    "ma-pool-3-018",
    "mathe-kap2",
    "Löse die Ungleichung: |2x − 3| ≤ 7.",
    ["−2 ≤ x ≤ 5", "x ≤ −2 oder x ≥ 5", "−5 ≤ x ≤ 2", "−2 < x < 5", "0 ≤ x ≤ 5"],
    0,
    "|2x − 3| ≤ 7 ⇔ −7 ≤ 2x − 3 ≤ 7 ⇔ −4 ≤ 2x ≤ 10 ⇔ −2 ≤ x ≤ 5.",
    "mittel",
    ["Betragsfunktion", "Ungleichungen"]
  ),
  q(
    "ma-pool-3-019",
    "mathe-kap2",
    "Ein Kreis hat den Umfang 31,4 cm. Wie groß ist der Radius näherungsweise (π ≈ 3,14)?",
    ["10 cm", "5 cm", "15,7 cm", "3,14 cm", "7,85 cm"],
    1,
    "U = 2πr ⇒ r = U/(2π) = 31,4/(2 × 3,14) = 31,4/6,28 = 5 cm.",
    "leicht",
    ["Kreisumfang", "rechenfrage"]
  ),
  q(
    "ma-pool-3-020",
    "mathe-kap2",
    "Welche der folgenden Aussagen über quadratische Gleichungen ist FALSCH?",
    [
      "Ist die Diskriminante negativ, existieren keine reellen Lösungen.",
      "Jede quadratische Gleichung hat genau zwei verschiedene reelle Lösungen.",
      "Die Summe der Lösungen von x² + px + q = 0 beträgt −p.",
      "Das Produkt der Lösungen von x² + px + q = 0 beträgt q.",
      "Die quadratische Ergänzung ist eine Lösungsmethode für quadratische Gleichungen.",
    ],
    1,
    "Die Aussage ist falsch: Bei Diskriminante D = 0 gibt es eine Doppellösung (nicht zwei verschiedene), bei D < 0 gibt es keine reelle Lösung.",
    "mittel",
    ["Quadratische Gleichung", "Falsch-Aussage"]
  ),

  // ─── mathe-kap3: Grundlagen (Brüche, Prozent, Potenzgesetze) (10 Fragen) ─
  q(
    "ma-pool-3-021",
    "mathe-kap3",
    "Vereinfache: (2³)⁴ ÷ 2⁵.",
    ["2⁷", "2¹²", "2⁵", "2³", "2⁹"],
    0,
    "(2³)⁴ = 2¹² und 2¹²/2⁵ = 2⁷ = 128.",
    "leicht",
    ["Potenzgesetze", "rechenfrage"]
  ),
  q(
    "ma-pool-3-022",
    "mathe-kap3",
    "Ein Preis wird zunächst um 20 % erhöht und danach um 20 % gesenkt. Welcher Anteil des ursprünglichen Preises bleibt übrig?",
    ["100 %", "96 %", "104 %", "80 %", "98 %"],
    1,
    "1,20 × 0,80 = 0,96 = 96 %. Durch die Erhöhung und anschließende Senkung um denselben Prozentsatz entsteht ein Verlust.",
    "mittel",
    ["Prozentrechnung"]
  ),
  q(
    "ma-pool-3-023",
    "mathe-kap3",
    "Berechne: 3/4 + 5/6 − 1/3.",
    ["15/12", "5/4", "17/12", "7/6", "3/2"],
    1,
    "Hauptnenner 12: 9/12 + 10/12 − 4/12 = 15/12 = 5/4.",
    "leicht",
    ["Bruchrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-3-024",
    "mathe-kap3",
    "Welchen Wert hat 27^(2/3)?",
    ["3", "9", "18", "27", "81"],
    1,
    "27^(2/3) = (27^(1/3))² = 3² = 9.",
    "mittel",
    ["Potenzgesetze", "Wurzeln", "rechenfrage"]
  ),
  q(
    "ma-pool-3-025",
    "mathe-kap3",
    "Eine Bakterienkultur verdoppelt sich alle 30 Minuten. Beginnend mit 500 Bakterien: Wie viele sind nach 2 Stunden vorhanden?",
    ["2 000", "4 000", "8 000", "16 000", "32 000"],
    2,
    "In 2 h = 120 min finden 120/30 = 4 Verdopplungen statt. 500 × 2⁴ = 500 × 16 = 8 000.",
    "mittel",
    ["Exponentialwachstum", "rechenfrage"]
  ),
  q(
    "ma-pool-3-026",
    "mathe-kap3",
    "Vereinfache: √(50) + √(18) − √(8).",
    ["5√2", "6√2", "7√2", "4√2", "8√2"],
    1,
    "√50 = 5√2, √18 = 3√2, √8 = 2√2. Somit: 5√2 + 3√2 − 2√2 = 6√2.",
    "mittel",
    ["Wurzeln", "Vereinfachung"]
  ),
  q(
    "ma-pool-3-027",
    "mathe-kap3",
    "Wie lautet der Wert von log₂(64)?",
    ["4", "5", "6", "8", "3"],
    2,
    "2⁶ = 64, also log₂(64) = 6.",
    "leicht",
    ["Logarithmus", "rechenfrage"]
  ),
  q(
    "ma-pool-3-028",
    "mathe-kap3",
    "Ein Kapital von 1 000 € wird für 3 Jahre mit einem jährlichen Zinssatz von 5 % angelegt (Zinseszins). Wie hoch ist das Endkapital näherungsweise?",
    ["1 150,00 €", "1 157,63 €", "1 160,00 €", "1 215,51 €", "1 100,00 €"],
    1,
    "K = 1000 × 1,05³ = 1000 × 1,157625 ≈ 1 157,63 €.",
    "mittel",
    ["Zinseszins", "Exponentialfunktion", "rechenfrage"]
  ),
  q(
    "ma-pool-3-029",
    "mathe-kap3",
    "Welche der folgenden Aussagen über Potenzgesetze ist FALSCH?",
    [
      "aⁿ · aᵐ = aⁿ⁺ᵐ",
      "(aⁿ)ᵐ = aⁿ·ᵐ",
      "a⁰ = 1 für a ≠ 0",
      "aⁿ · bⁿ = (a · b)ⁿ",
      "(a + b)ⁿ = aⁿ + bⁿ",
    ],
    4,
    "(a + b)ⁿ ≠ aⁿ + bⁿ im Allgemeinen. Dies ist ein häufiger Fehler. Zum Beispiel: (2 + 3)² = 25 ≠ 4 + 9 = 13.",
    "leicht",
    ["Potenzgesetze", "Falsch-Aussage"]
  ),
  q(
    "ma-pool-3-030",
    "mathe-kap3",
    "Berechne: (5/8) ÷ (15/4).",
    ["1/6", "75/32", "3/2", "25/32", "2/3"],
    0,
    "(5/8) ÷ (15/4) = (5/8) × (4/15) = 20/120 = 1/6.",
    "leicht",
    ["Bruchrechnung", "rechenfrage"]
  ),

  // ─── mathe-kap5: Funktionen (10 Fragen) ────────────────────────────────
  q(
    "ma-pool-3-031",
    "mathe-kap5",
    "Eine lineare Funktion verläuft durch die Punkte P(1, 3) und Q(4, 9). Welche Steigung hat die Funktion?",
    ["1", "2", "3", "6", "1/2"],
    1,
    "k = (y₂ − y₁)/(x₂ − x₁) = (9 − 3)/(4 − 1) = 6/3 = 2.",
    "leicht",
    ["Lineare Funktion", "Steigung", "rechenfrage"]
  ),
  q(
    "ma-pool-3-032",
    "mathe-kap5",
    "Der Scheitelpunkt der Parabel f(x) = 2(x − 3)² + 1 liegt bei:",
    ["(3, 1)", "(−3, 1)", "(3, −1)", "(1, 3)", "(−3, −1)"],
    0,
    "Die Scheitelpunktform a(x − h)² + k hat den Scheitel bei (h, k) = (3, 1).",
    "leicht",
    ["Quadratische Funktion", "Scheitelpunkt"]
  ),
  q(
    "ma-pool-3-033",
    "mathe-kap5",
    "Für welchen Wert von x gilt: e²ˣ = e⁶?",
    ["2", "3", "6", "12", "1/3"],
    1,
    "e²ˣ = e⁶ ⇒ 2x = 6 ⇒ x = 3.",
    "leicht",
    ["Exponentialfunktion", "rechenfrage"]
  ),
  q(
    "ma-pool-3-034",
    "mathe-kap5",
    "Die Nullstellen der Funktion f(x) = x³ − 4x liegen bei:",
    [
      "x = 0, x = 4",
      "x = 0, x = 2, x = −2",
      "x = 0, x = 4, x = −4",
      "x = 2, x = −2",
      "x = 0, x = 1, x = −4",
    ],
    1,
    "f(x) = x(x² − 4) = x(x − 2)(x + 2). Nullstellen: x = 0, x = 2, x = −2.",
    "mittel",
    ["Polynomfunktion", "Nullstellen"]
  ),
  q(
    "ma-pool-3-035",
    "mathe-kap5",
    "Welchen Wert hat sin(30°)?",
    ["√3/2", "1/2", "√2/2", "1", "0"],
    1,
    "sin(30°) = 1/2. Dies ist ein Standardwert der Trigonometrie.",
    "leicht",
    ["Trigonometrie", "Sinusfunktion"]
  ),
  q(
    "ma-pool-3-036",
    "mathe-kap5",
    "Die Funktion f(x) = ln(x) ist definiert für:",
    ["alle reellen Zahlen", "x ≥ 0", "x > 0", "x > 1", "x ≥ 1"],
    2,
    "Der natürliche Logarithmus ln(x) ist nur für x > 0 definiert. ln(0) ist nicht definiert.",
    "leicht",
    ["Logarithmusfunktion", "Definitionsbereich"]
  ),
  q(
    "ma-pool-3-037",
    "mathe-kap5",
    "Welche Funktion beschreibt exponentiellen Zerfall?",
    [
      "f(t) = 100 · 1,05ᵗ",
      "f(t) = 100 · 0,95ᵗ",
      "f(t) = 100 · t²",
      "f(t) = 100 − 5t",
      "f(t) = 100/t",
    ],
    1,
    "Exponentieller Zerfall: f(t) = a · bᵗ mit 0 < b < 1. Hier ist b = 0,95 < 1. Option A ist Wachstum (b > 1), C ist Potenzfunktion, D ist linear, E ist Hyperbel.",
    "mittel",
    ["Exponentialfunktion", "Zerfall"]
  ),
  q(
    "ma-pool-3-038",
    "mathe-kap5",
    "Berechne die Ableitung von f(x) = 3x⁴ − 2x² + 7x − 1.",
    ["12x³ − 4x + 7", "12x³ − 2x + 7", "3x³ − 2x + 7", "12x⁴ − 4x² + 7", "12x³ − 4x − 1"],
    0,
    "f'(x) = 4·3x³ − 2·2x + 7 = 12x³ − 4x + 7.",
    "mittel",
    ["Ableitung", "Polynomfunktion", "rechenfrage"]
  ),
  q(
    "ma-pool-3-039",
    "mathe-kap5",
    "Welche Periode hat die Funktion f(x) = sin(2x)?",
    ["2π", "π", "π/2", "4π", "2"],
    1,
    "Die Periode von sin(bx) beträgt 2π/b. Für b = 2: Periode = 2π/2 = π.",
    "schwer",
    ["Trigonometrie", "Periode"]
  ),
  q(
    "ma-pool-3-040",
    "mathe-kap5",
    "An welcher Stelle hat f(x) = x² − 6x + 5 ein Minimum?",
    ["x = −3", "x = 3", "x = 1", "x = 5", "x = 6"],
    1,
    "f'(x) = 2x − 6 = 0 ⇒ x = 3. f''(x) = 2 > 0 → Minimum. Oder Scheitel: x_S = −b/(2a) = 6/2 = 3.",
    "mittel",
    ["Extremstellen", "Quadratische Funktion", "rechenfrage"]
  ),

  // ─── mathe-kap6: Vektorrechnung (10 Fragen) ────────────────────────────
  q(
    "ma-pool-3-041",
    "mathe-kap6",
    "Gegeben sind die Vektoren a⃗ = (2, 3) und b⃗ = (−1, 4). Berechne a⃗ + b⃗.",
    ["(1, 7)", "(3, −1)", "(−3, 7)", "(1, −1)", "(2, 12)"],
    0,
    "a⃗ + b⃗ = (2 + (−1), 3 + 4) = (1, 7).",
    "leicht",
    ["Vektoraddition", "rechenfrage"]
  ),
  q(
    "ma-pool-3-042",
    "mathe-kap6",
    "Berechne das Skalarprodukt der Vektoren a⃗ = (3, −2, 1) und b⃗ = (1, 4, −3).",
    ["−8", "8", "2", "−2", "0"],
    0,
    "a⃗ · b⃗ = 3·1 + (−2)·4 + 1·(−3) = 3 − 8 − 3 = −8.",
    "mittel",
    ["Skalarprodukt", "rechenfrage"]
  ),
  q(
    "ma-pool-3-043",
    "mathe-kap6",
    "Welchen Betrag hat der Vektor v⃗ = (3, 4, 0)?",
    ["7", "5", "25", "√7", "12"],
    1,
    "|v⃗| = √(9 + 16 + 0) = √25 = 5.",
    "leicht",
    ["Vektorbetrag", "rechenfrage"]
  ),
  q(
    "ma-pool-3-044",
    "mathe-kap6",
    "Zwei Vektoren stehen senkrecht aufeinander. Welchen Wert hat ihr Skalarprodukt?",
    ["1", "−1", "0", "90", "undefiniert"],
    2,
    "Orthogonale Vektoren haben das Skalarprodukt 0: a⃗ · b⃗ = |a⃗| · |b⃗| · cos(90°) = 0.",
    "leicht",
    ["Skalarprodukt", "Orthogonalität"]
  ),
  q(
    "ma-pool-3-045",
    "mathe-kap6",
    "Der Vektor a⃗ = (6, −8) wird normiert. Welchen Betrag hat der resultierende Einheitsvektor?",
    ["10", "2", "1", "√10", "1/10"],
    2,
    "Ein Einheitsvektor (normierter Vektor) hat per Definition den Betrag 1. |a⃗| = √(36 + 64) = 10, also a⃗₀ = (6/10, −8/10), und |a⃗₀| = 1.",
    "leicht",
    ["Einheitsvektor", "Normierung"]
  ),
  q(
    "ma-pool-3-046",
    "mathe-kap6",
    "Berechne das Kreuzprodukt a⃗ × b⃗ für a⃗ = (1, 0, 0) und b⃗ = (0, 1, 0).",
    ["(0, 0, 1)", "(0, 0, −1)", "(1, 1, 0)", "(0, 0, 0)", "(1, 0, 1)"],
    0,
    "a⃗ × b⃗ = (0·0 − 0·1, 0·0 − 1·0, 1·1 − 0·0) = (0, 0, 1). Dies ist der Einheitsvektor in z-Richtung.",
    "mittel",
    ["Kreuzprodukt", "rechenfrage"]
  ),
  q(
    "ma-pool-3-047",
    "mathe-kap6",
    "Welchen Winkel schließen die Vektoren a⃗ = (1, 1) und b⃗ = (1, −1) ein?",
    ["0°", "45°", "90°", "180°", "60°"],
    2,
    "cos(α) = (a⃗ · b⃗)/(|a⃗| · |b⃗|) = (1·1 + 1·(−1))/(√2 · √2) = 0/2 = 0. Also α = 90°.",
    "schwer",
    ["Winkel zwischen Vektoren", "rechenfrage"]
  ),
  q(
    "ma-pool-3-048",
    "mathe-kap6",
    "Welche der folgenden Aussagen über das Kreuzprodukt ist FALSCH?",
    [
      "a⃗ × b⃗ steht senkrecht auf a⃗ und b⃗.",
      "a⃗ × b⃗ = −(b⃗ × a⃗)",
      "a⃗ × a⃗ = 0⃗",
      "a⃗ × b⃗ = b⃗ × a⃗",
      "Das Kreuzprodukt ist nur im ℝ³ definiert.",
    ],
    3,
    "a⃗ × b⃗ ≠ b⃗ × a⃗ — das Kreuzprodukt ist antikommutativ: a⃗ × b⃗ = −(b⃗ × a⃗). Alle anderen Aussagen sind korrekt.",
    "schwer",
    ["Kreuzprodukt", "Falsch-Aussage"]
  ),
  q(
    "ma-pool-3-049",
    "mathe-kap6",
    "Ein Punkt wird vom Ursprung zum Punkt P(3, 4, 12) verschoben. Welche Strecke wird zurückgelegt?",
    ["19", "13", "√29", "7", "√169"],
    1,
    "Strecke = |OP⃗| = √(9 + 16 + 144) = √169 = 13. Option E ist zwar mathematisch äquivalent, aber 13 ist die vereinfachte Form.",
    "mittel",
    ["Vektorbetrag", "rechenfrage"]
  ),
  q(
    "ma-pool-3-050",
    "mathe-kap6",
    "Die Vektoren a⃗ = (2, t) und b⃗ = (6, 9) sind parallel. Welchen Wert hat t?",
    ["2", "3", "6", "9", "4"],
    1,
    "Parallele Vektoren: a⃗ = λ · b⃗. Aus 2 = 6λ folgt λ = 1/3. Also t = 9 · 1/3 = 3.",
    "schwer",
    ["Parallele Vektoren", "rechenfrage"]
  ),

  // ─── mathe-kap7: Stochastik (10 Fragen) ────────────────────────────────
  q(
    "ma-pool-3-051",
    "mathe-kap7",
    "Ein fairer Würfel wird einmal geworfen. Wie groß ist die Wahrscheinlichkeit, eine Zahl größer als 4 zu werfen?",
    ["1/6", "1/3", "1/2", "2/3", "5/6"],
    1,
    "Günstige Ergebnisse: {5, 6} = 2 von 6 Möglichkeiten. P = 2/6 = 1/3.",
    "leicht",
    ["Wahrscheinlichkeit", "Laplace"]
  ),
  q(
    "ma-pool-3-052",
    "mathe-kap7",
    "Aus einem Kartenspiel mit 32 Karten (4 Farben à 8 Karten) wird eine Karte gezogen. Wie groß ist die Wahrscheinlichkeit, ein Ass zu ziehen?",
    ["1/32", "1/8", "4/32", "1/4", "2/32"],
    1,
    "Es gibt 4 Asse in 32 Karten. P = 4/32 = 1/8.",
    "leicht",
    ["Wahrscheinlichkeit", "Laplace"]
  ),
  q(
    "ma-pool-3-053",
    "mathe-kap7",
    "Wie viele Möglichkeiten gibt es, 3 Personen aus einer Gruppe von 10 auszuwählen (ohne Berücksichtigung der Reihenfolge)?",
    ["720", "120", "1 000", "30", "210"],
    1,
    "C(10, 3) = 10!/(3! · 7!) = (10 · 9 · 8)/(3 · 2 · 1) = 720/6 = 120.",
    "mittel",
    ["Kombinatorik", "Binomialkoeffizient", "rechenfrage"]
  ),
  q(
    "ma-pool-3-054",
    "mathe-kap7",
    "Zwei Münzen werden gleichzeitig geworfen. Wie groß ist die Wahrscheinlichkeit, genau einmal Kopf zu erhalten?",
    ["1/4", "1/2", "3/4", "1/3", "2/3"],
    1,
    "Ergebnisraum: {KK, KZ, ZK, ZZ}. Genau einmal Kopf: {KZ, ZK} = 2 von 4. P = 2/4 = 1/2.",
    "leicht",
    ["Wahrscheinlichkeit", "Laplace"]
  ),
  q(
    "ma-pool-3-055",
    "mathe-kap7",
    "In einer Urne befinden sich 5 rote und 3 blaue Kugeln. Es wird zweimal ohne Zurücklegen gezogen. Wie groß ist die Wahrscheinlichkeit, dass beide Kugeln rot sind?",
    ["25/64", "5/14", "10/28", "5/16", "25/56"],
    1,
    "P(beide rot) = (5/8) · (4/7) = 20/56 = 5/14.",
    "schwer",
    ["Bedingte Wahrscheinlichkeit", "Urnenmodell", "rechenfrage"]
  ),
  q(
    "ma-pool-3-056",
    "mathe-kap7",
    "Der Erwartungswert eines fairen sechsseitigen Würfels beträgt:",
    ["3", "3,5", "4", "3,0", "2,5"],
    1,
    "E(X) = (1 + 2 + 3 + 4 + 5 + 6)/6 = 21/6 = 3,5.",
    "leicht",
    ["Erwartungswert", "rechenfrage"]
  ),
  q(
    "ma-pool-3-057",
    "mathe-kap7",
    "Wie viele verschiedene Anordnungen (Permutationen) gibt es für die Buchstaben des Wortes AAB?",
    ["6", "3", "2", "9", "1"],
    1,
    "Es gibt 3!/2! = 6/2 = 3 verschiedene Anordnungen: AAB, ABA, BAA.",
    "mittel",
    ["Permutation", "Kombinatorik", "rechenfrage"]
  ),
  q(
    "ma-pool-3-058",
    "mathe-kap7",
    "Ein medizinischer Test hat eine Sensitivität von 95 % und eine Spezifität von 90 %. Die Prävalenz einer Krankheit beträgt 1 %. Wie hoch ist näherungsweise die Wahrscheinlichkeit, dass ein positiv Getesteter tatsächlich krank ist (positiver Vorhersagewert)?",
    ["ca. 95 %", "ca. 50 %", "ca. 9 %", "ca. 30 %", "ca. 1 %"],
    2,
    "Bayes: PPV = (Sens · Präv) / (Sens · Präv + (1−Spez) · (1−Präv)) = (0,95 · 0,01) / (0,95 · 0,01 + 0,10 · 0,99) = 0,0095 / (0,0095 + 0,099) ≈ 0,0095 / 0,1085 ≈ 8,8 % ≈ 9 %.",
    "schwer",
    ["Bayes", "Bedingte Wahrscheinlichkeit", "Vorhersagewert"]
  ),
  q(
    "ma-pool-3-059",
    "mathe-kap7",
    "Wie groß ist der Binomialkoeffizient C(8, 2)?",
    ["16", "28", "56", "64", "36"],
    1,
    "C(8, 2) = 8!/(2! · 6!) = (8 · 7)/2 = 28.",
    "mittel",
    ["Binomialkoeffizient", "rechenfrage"]
  ),
  q(
    "ma-pool-3-060",
    "mathe-kap7",
    "Welche der folgenden Aussagen über Wahrscheinlichkeiten ist FALSCH?",
    [
      "Für jedes Ereignis A gilt: 0 ≤ P(A) ≤ 1.",
      "P(Ω) = 1 (sicheres Ereignis).",
      "Für unabhängige Ereignisse A, B gilt: P(A ∩ B) = P(A) · P(B).",
      "P(A ∪ B) = P(A) + P(B) gilt immer.",
      "P(∅) = 0 (unmögliches Ereignis).",
    ],
    3,
    "P(A ∪ B) = P(A) + P(B) gilt nur für disjunkte Ereignisse. Allgemein gilt: P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Alle anderen Aussagen sind korrekte Axiome/Sätze der Wahrscheinlichkeitstheorie.",
    "schwer",
    ["Wahrscheinlichkeit", "Additionssatz", "Falsch-Aussage"]
  ),
];
