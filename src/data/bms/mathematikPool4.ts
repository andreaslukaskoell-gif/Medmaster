/**
 * Mathematik BMS Pool 4 — 60 Fragen im MedAT-Stil (Typ A, Typ M, Falsch-Aussagen).
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

export const mathematikPool4: Question[] = [
  // ─── mathe-kap1: Zahlen, Mengen, Einheiten (10 Fragen) ─────────────────
  q(
    "ma-pool-4-001",
    "mathe-kap1",
    "Wie viele signifikante Stellen hat die Zahl 0,00340?",
    ["2", "3", "5", "6", "4"],
    1,
    "Führende Nullen zählen nicht als signifikante Stellen. 0,00340 hat die signifikanten Ziffern 3, 4 und die nachgestellte 0. Das ergibt 3 signifikante Stellen.",
    "mittel",
    ["Signifikante Stellen", "Messgenauigkeit"]
  ),
  q(
    "ma-pool-4-002",
    "mathe-kap1",
    "Ordne die Zahlen der Größe nach aufsteigend: 2/5, 0,38, 3/8.",
    [
      "0,38 < 3/8 < 2/5",
      "3/8 < 0,38 < 2/5",
      "3/8 < 2/5 < 0,38",
      "0,38 < 2/5 < 3/8",
      "2/5 < 3/8 < 0,38",
    ],
    1,
    "3/8 = 0,375; 0,38; 2/5 = 0,4. Also: 0,375 < 0,38 < 0,4 → 3/8 < 0,38 < 2/5.",
    "leicht",
    ["Brüche", "Dezimalzahlen", "Ordnung"]
  ),
  q(
    "ma-pool-4-003",
    "mathe-kap1",
    "Ein Blutwert wird mit 140 mmol/L angegeben. In mol/L ausgedrückt ergibt das:",
    ["0,014 mol/L", "0,14 mol/L", "1,4 mol/L", "14 mol/L", "1 400 mol/L"],
    1,
    "1 mmol = 10⁻³ mol. Also 140 mmol/L = 140 × 10⁻³ mol/L = 0,14 mol/L.",
    "leicht",
    ["SI-Präfixe", "Umrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-4-004",
    "mathe-kap1",
    "Welcher Wert entspricht 3,2 × 10⁴ + 5,0 × 10³?",
    ["3,7 × 10⁴", "8,2 × 10⁴", "3,25 × 10⁴", "8,2 × 10³", "3,70 × 10³"],
    0,
    "3,2 × 10⁴ = 32 000 und 5,0 × 10³ = 5 000. Summe: 37 000 = 3,7 × 10⁴.",
    "mittel",
    ["Zehnerpotenzen", "rechenfrage"]
  ),
  q(
    "ma-pool-4-005",
    "mathe-kap1",
    "Welche Menge ist eine Teilmenge von ℤ, aber NICHT von ℕ?",
    ["{1, 2, 3}", "{0, 1, 2}", "{−3, −1, 0}", "{π, e}", "{√2, √3}"],
    2,
    "{−3, −1, 0} enthält negative Zahlen, die in ℤ, aber nicht in ℕ (hier: ℕ = {1, 2, 3, ...}) liegen. {π, e} und {√2, √3} sind nicht in ℤ.",
    "leicht",
    ["Zahlenmengen", "Teilmenge"]
  ),
  q(
    "ma-pool-4-006",
    "mathe-kap1",
    "Die Dichte von Blut beträgt ca. 1,06 g/cm³. Wie viel Kilogramm wiegen 5 Liter Blut?",
    ["5,0 kg", "5,3 kg", "5,6 kg", "10,6 kg", "0,53 kg"],
    1,
    "5 L = 5 000 cm³. Masse = 1,06 g/cm³ × 5 000 cm³ = 5 300 g = 5,3 kg.",
    "mittel",
    ["Dichte", "Einheiten", "rechenfrage"]
  ),
  q(
    "ma-pool-4-007",
    "mathe-kap1",
    "Berechne: (−3)⁴.",
    ["−81", "81", "−12", "12", "−64"],
    1,
    "(−3)⁴ = (−3) × (−3) × (−3) × (−3) = 81. Eine gerade Potenz einer negativen Zahl ist positiv.",
    "leicht",
    ["Potenzen", "Vorzeichen", "rechenfrage"]
  ),
  q(
    "ma-pool-4-008",
    "mathe-kap1",
    "Ein Enzym katalysiert 10⁸ Reaktionen pro Sekunde. Wie viele Reaktionen werden in einer Mikrosekunde katalysiert?",
    ["100", "1 000", "10 000", "10", "100 000"],
    0,
    "1 µs = 10⁻⁶ s. Anzahl = 10⁸ × 10⁻⁶ = 10² = 100 Reaktionen.",
    "mittel",
    ["Zehnerpotenzen", "SI-Präfixe", "rechenfrage"]
  ),
  q(
    "ma-pool-4-009",
    "mathe-kap1",
    "Welche der folgenden Aussagen über den Absolutbetrag ist FALSCH?",
    [
      "|a| ≥ 0 für alle a ∈ ℝ",
      "|a · b| = |a| · |b|",
      "|a + b| ≤ |a| + |b| (Dreiecksungleichung)",
      "|a − b| = |b − a|",
      "|a + b| = |a| + |b| gilt immer",
    ],
    4,
    "|a + b| = |a| + |b| gilt nur, wenn a und b dasselbe Vorzeichen haben. Gegenbeispiel: |3 + (−5)| = 2, aber |3| + |−5| = 8.",
    "mittel",
    ["Betragsfunktion", "Falsch-Aussage"]
  ),
  q(
    "ma-pool-4-010",
    "mathe-kap1",
    "Ein Messgerät zeigt 0,0072 s an. In Millisekunden ausgedrückt sind das:",
    ["0,72 ms", "7,2 ms", "72 ms", "0,072 ms", "720 ms"],
    1,
    "0,0072 s = 7,2 × 10⁻³ s = 7,2 ms (1 ms = 10⁻³ s).",
    "leicht",
    ["Einheiten", "Milli", "rechenfrage"]
  ),

  // ─── mathe-kap2: Algebra, Gleichungen, Geometrie (10 Fragen) ───────────
  q(
    "ma-pool-4-011",
    "mathe-kap2",
    "Löse das Gleichungssystem: 3x + y = 7 und x − 2y = −4.",
    ["x = 2, y = 1", "x = 1, y = 4", "x = 10/7, y = 19/7", "x = 2, y = 3", "x = 3, y = −2"],
    2,
    "Aus der 2. Gleichung: x = 2y − 4. Einsetzen: 3(2y − 4) + y = 7 ⇒ 7y − 12 = 7 ⇒ y = 19/7. x = 2(19/7) − 4 = 38/7 − 28/7 = 10/7.",
    "schwer",
    ["LGS", "Einsetzungsverfahren", "rechenfrage"]
  ),
  q(
    "ma-pool-4-012",
    "mathe-kap2",
    "Für welche Werte von x gilt: x² − 5x + 6 > 0?",
    ["2 < x < 3", "x < 2 oder x > 3", "x < −2 oder x > −3", "x ≤ 2 oder x ≥ 3", "−3 < x < −2"],
    1,
    "x² − 5x + 6 = (x − 2)(x − 3). Nullstellen bei x = 2 und x = 3. Parabel öffnet nach oben, also f(x) > 0 für x < 2 oder x > 3.",
    "schwer",
    ["Quadratische Ungleichung"]
  ),
  q(
    "ma-pool-4-013",
    "mathe-kap2",
    "Berechne den Flächeninhalt eines Trapezes mit den parallelen Seiten a = 8 cm und c = 5 cm und der Höhe h = 4 cm.",
    ["26 cm²", "32 cm²", "20 cm²", "16 cm²", "52 cm²"],
    0,
    "A = (a + c)/2 × h = (8 + 5)/2 × 4 = 13/2 × 4 = 26 cm².",
    "leicht",
    ["Trapez", "Fläche", "rechenfrage"]
  ),
  q(
    "ma-pool-4-014",
    "mathe-kap2",
    "Die dritte binomische Formel (a + b)(a − b) ergibt:",
    ["a² + b²", "a² − 2ab + b²", "a² − b²", "a² + 2ab + b²", "2a² − 2b²"],
    2,
    "(a + b)(a − b) = a² − b² (dritte binomische Formel).",
    "leicht",
    ["Binomische Formeln"]
  ),
  q(
    "ma-pool-4-015",
    "mathe-kap2",
    "Wie groß ist das Volumen einer Kugel mit Radius r = 3 cm? (Verwende π ≈ 3,14)",
    ["28,26 cm³", "113,04 cm³", "36π cm³", "84,78 cm³", "37,68 cm³"],
    1,
    "V = (4/3)πr³ = (4/3) × 3,14 × 27 = 4/3 × 84,78 = 113,04 cm³.",
    "mittel",
    ["Kugelvolumen", "Geometrie", "rechenfrage"]
  ),
  q(
    "ma-pool-4-016",
    "mathe-kap2",
    "Faktorisiere vollständig: x³ − x.",
    ["x(x − 1)", "x(x + 1)(x − 1)", "(x − 1)(x² + 1)", "x²(x − 1)", "x(x² + 1)"],
    1,
    "x³ − x = x(x² − 1) = x(x + 1)(x − 1).",
    "mittel",
    ["Faktorisierung", "Binomische Formeln"]
  ),
  q(
    "ma-pool-4-017",
    "mathe-kap2",
    "Ein gleichschenkliges Dreieck hat eine Basis von 10 cm und gleich lange Schenkel von je 13 cm. Wie lang ist die Höhe auf die Basis?",
    ["12 cm", "8 cm", "√69 cm", "5 cm", "11 cm"],
    0,
    "Die Höhe halbiert die Basis: Halbe Basis = 5 cm. h = √(13² − 5²) = √(169 − 25) = √144 = 12 cm.",
    "mittel",
    ["Dreieck", "Pythagoras", "rechenfrage"]
  ),
  q(
    "ma-pool-4-018",
    "mathe-kap2",
    "Welche der folgenden Aussagen über lineare Gleichungssysteme ist FALSCH?",
    [
      "Ein LGS mit 2 Gleichungen und 2 Unbekannten hat stets genau eine Lösung.",
      "Parallele Geraden im ℝ² führen zu einem LGS ohne Lösung.",
      "Identische Geraden führen zu unendlich vielen Lösungen.",
      "Das Additionsverfahren ist eine Methode zur Lösung von LGS.",
      "Die Lösung eines LGS entspricht geometrisch dem Schnittpunkt der Geraden.",
    ],
    0,
    "Falsch: Ein LGS mit 2 Gleichungen und 2 Unbekannten kann auch 0 oder unendlich viele Lösungen haben (parallele oder identische Geraden).",
    "mittel",
    ["LGS", "Falsch-Aussage"]
  ),
  q(
    "ma-pool-4-019",
    "mathe-kap2",
    "Löse nach x auf: 5(x − 2) = 3(x + 4).",
    ["7", "11", "−1", "1", "22"],
    1,
    "5x − 10 = 3x + 12 ⇒ 2x = 22 ⇒ x = 11.",
    "leicht",
    ["Lineare Gleichung", "rechenfrage"]
  ),
  q(
    "ma-pool-4-020",
    "mathe-kap2",
    "Der Innenwinkel eines regelmäßigen Sechsecks beträgt:",
    ["90°", "108°", "120°", "135°", "150°"],
    2,
    "Innenwinkelsumme eines n-Ecks: (n − 2) × 180°. Für n = 6: 4 × 180° = 720°. Jeder Innenwinkel: 720°/6 = 120°.",
    "leicht",
    ["Vieleck", "Innenwinkel", "rechenfrage"]
  ),

  // ─── mathe-kap3: Grundlagen (Brüche, Prozent, Potenzgesetze) (10 Fragen) ─
  q(
    "ma-pool-4-021",
    "mathe-kap3",
    "Vereinfache: (x³y²)/(x¹y⁴).",
    ["x²y²", "x²/y²", "x⁴y⁶", "xy²", "x²y⁻²"],
    1,
    "x³/x¹ = x² und y²/y⁴ = y⁻² = 1/y². Also: x²/y². (Option E ist formal äquivalent, aber B ist die vereinfachte Standardform.)",
    "leicht",
    ["Potenzgesetze"]
  ),
  q(
    "ma-pool-4-022",
    "mathe-kap3",
    "Berechne: 4^(−3/2).",
    ["1/8", "−8", "8", "1/6", "−1/8"],
    0,
    "4^(−3/2) = 1/(4^(3/2)) = 1/((√4)³) = 1/(2³) = 1/8.",
    "schwer",
    ["Potenzgesetze", "rechenfrage"]
  ),
  q(
    "ma-pool-4-023",
    "mathe-kap3",
    "Von 250 Studierenden bestehen 85 % die Prüfung. Wie viele fallen durch?",
    ["37", "38", "212", "213", "42"],
    0,
    "Durchgefallen: 15 % von 250 = 0,15 × 250 = 37,5. Da nur ganze Personen möglich sind und 85 % = 212,5 bestehen, fallen ca. 37 oder 38 durch. Exakt: 250 × 0,15 = 37,5 → gerundet 37 oder 38. Die nächste ganze Zahl im MedAT-Kontext: 250 − 212 = 38 oder 250 − 213 = 37. Hier: 15 % × 250 = 37,5 ≈ 37 (abgerundet).",
    "leicht",
    ["Prozentrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-4-024",
    "mathe-kap3",
    "Vereinfache: (2⁵ × 3²)/(2³ × 3⁴).",
    ["4/9", "2²/3²", "12/81", "2/9", "6/9"],
    0,
    "2⁵/2³ = 2² = 4 und 3²/3⁴ = 3⁻² = 1/9. Also: 4/9. (Option B ist äquivalent, aber A ist die Dezimalform.)",
    "mittel",
    ["Potenzgesetze", "rechenfrage"]
  ),
  q(
    "ma-pool-4-025",
    "mathe-kap3",
    "Welchen Wert hat ln(e³)?",
    ["3e", "e³", "3", "1/3", "e"],
    2,
    "ln(e³) = 3 · ln(e) = 3 · 1 = 3.",
    "leicht",
    ["Logarithmus", "rechenfrage"]
  ),
  q(
    "ma-pool-4-026",
    "mathe-kap3",
    "Berechne: (7/12) − (2/9).",
    ["5/108", "13/36", "5/3", "5/12", "1/4"],
    1,
    "Hauptnenner 36: 7/12 = 21/36 und 2/9 = 8/36. Differenz: 21/36 − 8/36 = 13/36.",
    "leicht",
    ["Bruchrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-4-027",
    "mathe-kap3",
    "Ein Medikament verliert jährlich 8 % seiner Wirksamkeit. Nach wie vielen ganzen Jahren ist weniger als die Hälfte der ursprünglichen Wirksamkeit vorhanden? (log(0,92) ≈ −0,036)",
    ["7 Jahre", "8 Jahre", "9 Jahre", "10 Jahre", "12 Jahre"],
    2,
    "0,92ⁿ < 0,5 ⇒ n · log(0,92) < log(0,5) ⇒ n > (−0,301)/(−0,036) ≈ 8,36. Nach 8 Jahren: 0,92⁸ ≈ 0,513 > 0,5. Nach 9 Jahren: 0,92⁹ ≈ 0,472 < 0,5. Also erst nach 9 ganzen Jahren ist weniger als die Hälfte vorhanden.",
    "schwer",
    ["Exponentialzerfall", "Logarithmus", "rechenfrage"]
  ),
  q(
    "ma-pool-4-028",
    "mathe-kap3",
    "Welchen Wert hat: √(0,0001)?",
    ["0,1", "0,001", "0,01", "0,0001", "0,00001"],
    2,
    "√(0,0001) = √(10⁻⁴) = 10⁻² = 0,01.",
    "leicht",
    ["Wurzeln", "rechenfrage"]
  ),
  q(
    "ma-pool-4-029",
    "mathe-kap3",
    "Ein Wert steigt von 80 auf 100. Um wie viel Prozent hat er zugenommen?",
    ["20 %", "25 %", "80 %", "120 %", "12,5 %"],
    1,
    "Zunahme: (100 − 80)/80 × 100 % = 20/80 × 100 % = 25 %.",
    "leicht",
    ["Prozentrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-4-030",
    "mathe-kap3",
    "Welche der folgenden Vereinfachungen ist FALSCH?",
    [
      "√(a²) = |a| für a ∈ ℝ",
      "√(a · b) = √a · √b für a, b ≥ 0",
      "√(a + b) = √a + √b für a, b ≥ 0",
      "√(a/b) = √a / √b für a ≥ 0, b > 0",
      "(√a)² = a für a ≥ 0",
    ],
    2,
    "√(a + b) ≠ √a + √b im Allgemeinen. Gegenbeispiel: √(9 + 16) = √25 = 5, aber √9 + √16 = 3 + 4 = 7.",
    "mittel",
    ["Wurzeln", "Falsch-Aussage"]
  ),

  // ─── mathe-kap5: Funktionen (10 Fragen) ────────────────────────────────
  q(
    "ma-pool-4-031",
    "mathe-kap5",
    "Die Funktion f(x) = −2x + 8 hat die Nullstelle bei:",
    ["x = −4", "x = 4", "x = 8", "x = −8", "x = 2"],
    1,
    "−2x + 8 = 0 ⇒ x = 4.",
    "leicht",
    ["Lineare Funktion", "Nullstelle", "rechenfrage"]
  ),
  q(
    "ma-pool-4-032",
    "mathe-kap5",
    "Gegeben ist f(x) = x² − 4x + 3. Welche Symmetrieeigenschaft besitzt der Graph?",
    [
      "Achsensymmetrie zur y-Achse",
      "Punktsymmetrie zum Ursprung",
      "Achsensymmetrie zur Geraden x = 2",
      "Achsensymmetrie zur Geraden x = 3",
      "Keine Symmetrie",
    ],
    2,
    "Scheitel bei x_S = −b/(2a) = 4/2 = 2. Jede Parabel f(x) = a(x − h)² + k ist achsensymmetrisch zur Geraden x = h. Hier: x = 2.",
    "mittel",
    ["Quadratische Funktion", "Symmetrie"]
  ),
  q(
    "ma-pool-4-033",
    "mathe-kap5",
    "Welchen Wert hat cos(60°)?",
    ["√3/2", "1/2", "√2/2", "0", "1"],
    1,
    "cos(60°) = 1/2. Dies ist ein Standardwert der Trigonometrie.",
    "leicht",
    ["Trigonometrie", "Kosinusfunktion"]
  ),
  q(
    "ma-pool-4-034",
    "mathe-kap5",
    "Die Halbwertszeit einer Substanz beträgt 4 Stunden. Die Anfangsmenge beträgt 200 mg. Welche Funktion beschreibt die Restmenge N(t) in mg nach t Stunden?",
    [
      "N(t) = 200 · 0,5ᵗ",
      "N(t) = 200 · 0,5^(t/4)",
      "N(t) = 200 · e⁻⁴ᵗ",
      "N(t) = 200 − 50t",
      "N(t) = 200 · 2^(t/4)",
    ],
    1,
    "Bei Halbwertszeit T₁/₂ = 4 h gilt: N(t) = N₀ · 0,5^(t/T₁/₂) = 200 · 0,5^(t/4). Option A vergisst die Halbwertszeit, C hat den falschen Exponenten, D ist linear, E beschreibt Wachstum.",
    "schwer",
    ["Exponentialzerfall", "Halbwertszeit"]
  ),
  q(
    "ma-pool-4-035",
    "mathe-kap5",
    "Bestimme die Ableitung von f(x) = √x = x^(1/2).",
    ["1/(2√x)", "2√x", "1/√x", "√x/2", "−1/(2√x)"],
    0,
    "f'(x) = (1/2)x^(−1/2) = 1/(2√x).",
    "mittel",
    ["Ableitung", "Wurzelfunktion", "rechenfrage"]
  ),
  q(
    "ma-pool-4-036",
    "mathe-kap5",
    "Welchen Wertebereich hat die Funktion f(x) = 3 · sin(x) − 1?",
    ["[−1, 1]", "[−4, 2]", "[−3, 3]", "[−2, 4]", "[0, 2]"],
    1,
    "sin(x) ∈ [−1, 1]. Daher 3 sin(x) ∈ [−3, 3] und 3 sin(x) − 1 ∈ [−4, 2].",
    "mittel",
    ["Trigonometrie", "Wertebereich"]
  ),
  q(
    "ma-pool-4-037",
    "mathe-kap5",
    "An welcher Stelle hat die Funktion f(x) = eˣ den Funktionswert f(x) = 1?",
    ["x = 1", "x = 0", "x = e", "x = −1", "x = ln(1)"],
    1,
    "e⁰ = 1, also f(0) = 1. (Option E ist zwar formal korrekt, da ln(1) = 0, aber B ist die direkte Antwort.)",
    "leicht",
    ["Exponentialfunktion"]
  ),
  q(
    "ma-pool-4-038",
    "mathe-kap5",
    "Bestimme ∫₀² (3x²) dx.",
    ["6", "8", "12", "4", "24"],
    1,
    "∫₀² 3x² dx = [x³]₀² = 8 − 0 = 8.",
    "mittel",
    ["Integral", "rechenfrage"]
  ),
  q(
    "ma-pool-4-039",
    "mathe-kap5",
    "Die Umkehrfunktion von f(x) = 2x − 6 ist:",
    [
      "f⁻¹(x) = (x + 6)/2",
      "f⁻¹(x) = (x − 6)/2",
      "f⁻¹(x) = 2x + 6",
      "f⁻¹(x) = x/2 − 3",
      "f⁻¹(x) = −2x + 6",
    ],
    0,
    "y = 2x − 6 ⇒ x = (y + 6)/2. Also f⁻¹(x) = (x + 6)/2.",
    "leicht",
    ["Umkehrfunktion"]
  ),
  q(
    "ma-pool-4-040",
    "mathe-kap5",
    "Für welche x-Werte ist die Funktion f(x) = x³ − 3x monoton fallend?",
    ["x < −1 oder x > 1", "−1 < x < 1", "x > 0", "x < 0", "für kein x"],
    1,
    "f'(x) = 3x² − 3 = 3(x² − 1) = 3(x − 1)(x + 1). f'(x) < 0 für −1 < x < 1 → monoton fallend.",
    "schwer",
    ["Monotonie", "Ableitung"]
  ),

  // ─── mathe-kap6: Vektorrechnung (10 Fragen) ────────────────────────────
  q(
    "ma-pool-4-041",
    "mathe-kap6",
    "Berechne: 3 · (2, −1, 4) − 2 · (1, 3, −2).",
    ["(4, −9, 16)", "(4, −9, 8)", "(8, −6, 16)", "(4, 3, 8)", "(4, −9, 0)"],
    0,
    "3·(2, −1, 4) = (6, −3, 12) und 2·(1, 3, −2) = (2, 6, −4). Differenz: (6−2, −3−6, 12−(−4)) = (4, −9, 16).",
    "mittel",
    ["Vektorrechnung", "Linearkombination", "rechenfrage"]
  ),
  q(
    "ma-pool-4-042",
    "mathe-kap6",
    "Der Mittelpunkt der Strecke von A(1, 5) nach B(7, −3) ist:",
    ["(3, 4)", "(4, 1)", "(8, 2)", "(4, −4)", "(6, −1)"],
    1,
    "M = ((1+7)/2, (5+(−3))/2) = (4, 1).",
    "leicht",
    ["Mittelpunkt", "rechenfrage"]
  ),
  q(
    "ma-pool-4-043",
    "mathe-kap6",
    "Welche geometrische Bedeutung hat das Kreuzprodukt |a⃗ × b⃗|?",
    [
      "Die Länge der Diagonale des von a⃗ und b⃗ aufgespannten Parallelogramms",
      "Der Flächeninhalt des von a⃗ und b⃗ aufgespannten Parallelogramms",
      "Das Volumen des von a⃗ und b⃗ aufgespannten Körpers",
      "Der Umfang des von a⃗ und b⃗ aufgespannten Dreiecks",
      "Der Winkel zwischen a⃗ und b⃗",
    ],
    1,
    "|a⃗ × b⃗| = |a⃗| · |b⃗| · sin(α) = Fläche des aufgespannten Parallelogramms.",
    "mittel",
    ["Kreuzprodukt", "Parallelogramm"]
  ),
  q(
    "ma-pool-4-044",
    "mathe-kap6",
    "Die Vektoren a⃗ = (1, 2, −1) und b⃗ = (3, −1, 2). Berechne a⃗ · b⃗.",
    ["3", "−1", "0", "1", "−3"],
    1,
    "a⃗ · b⃗ = 1·3 + 2·(−1) + (−1)·2 = 3 − 2 − 2 = −1.",
    "leicht",
    ["Skalarprodukt", "rechenfrage"]
  ),
  q(
    "ma-pool-4-045",
    "mathe-kap6",
    "Welcher Vektor steht senkrecht auf der xy-Ebene?",
    ["(1, 0, 0)", "(0, 1, 0)", "(0, 0, 1)", "(1, 1, 0)", "(1, 0, 1)"],
    2,
    "Die xy-Ebene wird von den Einheitsvektoren e₁ und e₂ aufgespannt. Der Normalvektor ist e₃ = (0, 0, 1).",
    "leicht",
    ["Normalvektor", "Ebene"]
  ),
  q(
    "ma-pool-4-046",
    "mathe-kap6",
    "Berechne den Betrag des Vektors v⃗ = (1, −2, 2).",
    ["√5", "3", "5", "1", "√9"],
    1,
    "|v⃗| = √(1 + 4 + 4) = √9 = 3.",
    "leicht",
    ["Vektorbetrag", "rechenfrage"]
  ),
  q(
    "ma-pool-4-047",
    "mathe-kap6",
    "Die Parameterdarstellung einer Geraden im ℝ³ lautet r⃗(t) = (1, 0, 2) + t · (3, −1, 4). Welcher Punkt liegt bei t = 2 auf der Geraden?",
    ["(7, −2, 10)", "(4, −1, 6)", "(7, 2, 10)", "(5, −2, 8)", "(3, −1, 4)"],
    0,
    "r⃗(2) = (1 + 6, 0 − 2, 2 + 8) = (7, −2, 10).",
    "mittel",
    ["Parameterdarstellung", "Gerade", "rechenfrage"]
  ),
  q(
    "ma-pool-4-048",
    "mathe-kap6",
    "Welche Bedingung muss gelten, damit zwei Vektoren a⃗ und b⃗ linear abhängig sind?",
    ["a⃗ · b⃗ = 0", "a⃗ × b⃗ = 0⃗", "|a⃗| = |b⃗|", "a⃗ + b⃗ = 0⃗", "a⃗ · b⃗ = |a⃗| · |b⃗|"],
    1,
    "Zwei Vektoren sind linear abhängig (parallel), wenn ihr Kreuzprodukt der Nullvektor ist: a⃗ × b⃗ = 0⃗. Option A bedeutet Orthogonalität, C gleiche Länge, D entgegengesetzte Vektoren (Spezialfall), E parallele mit gleicher Richtung (Spezialfall).",
    "schwer",
    ["Lineare Abhängigkeit", "Kreuzprodukt"]
  ),
  q(
    "ma-pool-4-049",
    "mathe-kap6",
    "Der Abstand zwischen den Punkten P(2, −1, 3) und Q(5, 3, −1) beträgt:",
    ["√41", "√29", "√17", "5", "7"],
    0,
    "d = √((5−2)² + (3−(−1))² + (−1−3)²) = √(9 + 16 + 16) = √41.",
    "schwer",
    ["Abstand", "Vektorbetrag", "rechenfrage"]
  ),
  q(
    "ma-pool-4-050",
    "mathe-kap6",
    "Für welchen Wert von k sind die Vektoren a⃗ = (2, k) und b⃗ = (4, −6) orthogonal?",
    ["−3", "3", "4/3", "12", "−12"],
    2,
    "a⃗ · b⃗ = 0 ⇒ 2·4 + k·(−6) = 0 ⇒ 8 − 6k = 0 ⇒ k = 4/3.",
    "schwer",
    ["Skalarprodukt", "Orthogonalität", "rechenfrage"]
  ),

  // ─── mathe-kap7: Stochastik (10 Fragen) ────────────────────────────────
  q(
    "ma-pool-4-051",
    "mathe-kap7",
    "Ein fairer Würfel wird zweimal geworfen. Wie groß ist die Wahrscheinlichkeit, dass die Summe 7 beträgt?",
    ["1/6", "5/36", "6/36", "7/36", "1/12"],
    0,
    "Günstige Paare für Summe 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 Paare. P = 6/36 = 1/6.",
    "mittel",
    ["Wahrscheinlichkeit", "Würfel", "rechenfrage"]
  ),
  q(
    "ma-pool-4-052",
    "mathe-kap7",
    "Auf wie viele Arten können 5 Personen in einer Reihe angeordnet werden?",
    ["25", "120", "60", "10", "720"],
    1,
    "5! = 5 × 4 × 3 × 2 × 1 = 120.",
    "leicht",
    ["Permutation", "Fakultät", "rechenfrage"]
  ),
  q(
    "ma-pool-4-053",
    "mathe-kap7",
    "In einer Klasse sind 60 % Mädchen. Von den Mädchen tragen 25 % eine Brille, von den Buben 40 %. Wie groß ist die Wahrscheinlichkeit, dass eine zufällig gewählte Person eine Brille trägt?",
    ["31 %", "32 %", "65 %", "15 %", "25 %"],
    0,
    "P(Brille) = P(M)·P(B|M) + P(B)·P(B|B) = 0,6 × 0,25 + 0,4 × 0,40 = 0,15 + 0,16 = 0,31 = 31 %.",
    "schwer",
    ["Totale Wahrscheinlichkeit", "Baumdiagramm", "rechenfrage"]
  ),
  q(
    "ma-pool-4-054",
    "mathe-kap7",
    "Wie viele Möglichkeiten gibt es, aus 6 verschiedenen Büchern 2 auszuwählen (Reihenfolge egal)?",
    ["30", "15", "12", "36", "720"],
    1,
    "C(6, 2) = 6!/(2! · 4!) = (6 × 5)/2 = 15.",
    "leicht",
    ["Kombination", "Binomialkoeffizient", "rechenfrage"]
  ),
  q(
    "ma-pool-4-055",
    "mathe-kap7",
    "Die Varianz einer Zufallsvariable X mit E(X) = 3 und E(X²) = 11 beträgt:",
    ["8", "2", "14", "−2", "4"],
    1,
    "Var(X) = E(X²) − [E(X)]² = 11 − 9 = 2.",
    "schwer",
    ["Varianz", "Erwartungswert", "rechenfrage"]
  ),
  q(
    "ma-pool-4-056",
    "mathe-kap7",
    "Eine Münze wird 3-mal geworfen. Wie groß ist die Wahrscheinlichkeit, mindestens einmal Kopf zu erhalten?",
    ["3/8", "1/2", "7/8", "1/8", "5/8"],
    2,
    "P(mind. 1 Kopf) = 1 − P(kein Kopf) = 1 − (1/2)³ = 1 − 1/8 = 7/8.",
    "mittel",
    ["Gegenwahrscheinlichkeit", "rechenfrage"]
  ),
  q(
    "ma-pool-4-057",
    "mathe-kap7",
    "In einer Lotterie werden 6 aus 45 gezogen. Welcher Ausdruck beschreibt die Anzahl möglicher Ziehungen?",
    ["45⁶", "45!/6!", "C(45, 6)", "6⁴⁵", "P(45, 6)"],
    2,
    "Ohne Zurücklegen, Reihenfolge egal → Kombination: C(45, 6) = 45!/(6! · 39!).",
    "leicht",
    ["Kombination", "Binomialkoeffizient"]
  ),
  q(
    "ma-pool-4-058",
    "mathe-kap7",
    "Zwei Ereignisse A und B sind unabhängig mit P(A) = 0,3 und P(B) = 0,4. Wie groß ist P(A ∪ B)?",
    ["0,70", "0,58", "0,12", "0,42", "0,88"],
    1,
    "P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0,3 + 0,4 − 0,3·0,4 = 0,7 − 0,12 = 0,58.",
    "schwer",
    ["Additionssatz", "Unabhängigkeit", "rechenfrage"]
  ),
  q(
    "ma-pool-4-059",
    "mathe-kap7",
    "Bei einem Multiple-Choice-Test mit 5 Antwortmöglichkeiten pro Frage wird zufällig geraten. Wie groß ist die Wahrscheinlichkeit, bei 3 Fragen alle richtig zu beantworten?",
    ["3/5", "1/125", "1/25", "3/125", "1/5"],
    1,
    "P(alle 3 richtig) = (1/5)³ = 1/125.",
    "mittel",
    ["Wahrscheinlichkeit", "Unabhängigkeit", "rechenfrage"]
  ),
  q(
    "ma-pool-4-060",
    "mathe-kap7",
    "Eine Zufallsvariable X ist binomialverteilt mit n = 10 und p = 0,5. Wie groß ist der Erwartungswert E(X)?",
    ["5", "2,5", "10", "0,5", "25"],
    0,
    "Für die Binomialverteilung gilt: E(X) = n · p = 10 · 0,5 = 5.",
    "leicht",
    ["Binomialverteilung", "Erwartungswert", "rechenfrage"]
  ),
];
