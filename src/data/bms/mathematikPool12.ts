/**
 * Mathematik BMS Pool 12 — 60 MedAT-Stil-Fragen.
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

export const mathematikPool12: Question[] = [
  // ─── mathe-kap1: Zahlen, Mengen, Einheiten (10 Fragen) ───

  q(
    "ma-pool-12-001",
    "mathe-kap1",
    "Welche der folgenden Zahlen gehört zur Menge ℤ, aber nicht zu ℕ?",
    ["3", "0", "−7", "1/2", "√4"],
    2,
    "−7 ∈ ℤ, aber −7 ∉ ℕ (natürliche Zahlen sind positiv bzw. nichtnegativ). 0 gehört je nach Konvention zu ℕ₀, √4 = 2 ∈ ℕ.",
    "leicht",
    ["Zahlenmengen", "ganze Zahlen"]
  ),
  q(
    "ma-pool-12-002",
    "mathe-kap1",
    "Die Körpertemperatur eines Patienten beträgt 38,5 °C. Wie viel ist das in Kelvin? (T_K = T_C + 273,15)",
    ["311,65 K", "308,15 K", "301,65 K", "265,65 K", "235,35 K"],
    0,
    "T = 38,5 + 273,15 = 311,65 K.",
    "mittel",
    ["Einheiten", "Temperatur", "rechenfrage"]
  ),
  q(
    "ma-pool-12-003",
    "mathe-kap1",
    "Ein Hormon liegt in einer Konzentration von 5 ng/dL vor. Rechnen Sie in µg/L um. (1 dL = 0,1 L; 1 µg = 1000 ng)",
    ["0,05 µg/L", "0,5 µg/L", "5 µg/L", "50 µg/L", "0,005 µg/L"],
    0,
    "5 ng/dL = 5 ng / 0,1 L = 50 ng/L = 50/1000 µg/L = 0,05 µg/L.",
    "mittel",
    ["Einheiten", "Konzentration", "rechenfrage"]
  ),
  q(
    "ma-pool-12-004",
    "mathe-kap1",
    "Welche der folgenden Zahlen ist rational?",
    ["π", "√3", "e", "0,1̄ (0,1 periodisch)", "√7"],
    3,
    "0,1̄ = 1/9 ist rational (als Bruch darstellbar). π, e, √3 und √7 sind irrational.",
    "leicht",
    ["Zahlenmengen", "rationale Zahlen"]
  ),
  q(
    "ma-pool-12-005",
    "mathe-kap1",
    "Ein Laser emittiert Licht der Wellenlänge 632,8 nm. Berechnen Sie die Frequenz. (c = 3 × 10⁸ m/s)",
    ["4,74 × 10¹⁴ Hz", "4,74 × 10¹² Hz", "1,90 × 10⁶ Hz", "4,74 × 10¹⁰ Hz", "1,58 × 10¹⁵ Hz"],
    0,
    "λ = 632,8 nm = 6,328 × 10⁻⁷ m. f = c/λ = 3 × 10⁸ / 6,328 × 10⁻⁷ ≈ 4,74 × 10¹⁴ Hz.",
    "schwer",
    ["Einheiten", "Wellenlänge", "Frequenz", "rechenfrage"]
  ),
  q(
    "ma-pool-12-006",
    "mathe-kap1",
    "Welche Aussage zu SI-Einheiten ist falsch?",
    [
      "Die Basiseinheit der Masse ist das Kilogramm (kg)",
      "Die Basiseinheit der Stoffmenge ist das Mol (mol)",
      "Die Basiseinheit der Temperatur ist Grad Celsius (°C)",
      "Die Basiseinheit der Stromstärke ist das Ampere (A)",
      "Die Basiseinheit der Zeit ist die Sekunde (s)",
    ],
    2,
    "Die SI-Basiseinheit der Temperatur ist das Kelvin (K), nicht Grad Celsius. Celsius ist eine abgeleitete Einheit.",
    "leicht",
    ["Einheiten", "SI-System", "Falsch-Aussage"]
  ),
  q(
    "ma-pool-12-007",
    "mathe-kap1",
    "Ein Ultraschallgerät arbeitet mit 7,5 MHz. Wie viele Hertz sind das?",
    ["7,5 × 10³ Hz", "7,5 × 10⁴ Hz", "7,5 × 10⁵ Hz", "7,5 × 10⁶ Hz", "7,5 × 10⁹ Hz"],
    3,
    "1 MHz = 10⁶ Hz. Also 7,5 MHz = 7,5 × 10⁶ Hz.",
    "leicht",
    ["Einheiten", "Präfixe", "rechenfrage"]
  ),
  q(
    "ma-pool-12-008",
    "mathe-kap1",
    "Ordnen Sie die SI-Präfixe der Größe nach (kleinster zuerst): Milli, Mikro, Nano, Piko, Femto.",
    [
      "Femto < Piko < Nano < Mikro < Milli",
      "Piko < Femto < Nano < Mikro < Milli",
      "Nano < Mikro < Milli < Piko < Femto",
      "Milli < Mikro < Nano < Piko < Femto",
      "Mikro < Milli < Nano < Piko < Femto",
    ],
    0,
    "Femto (10⁻¹⁵) < Piko (10⁻¹²) < Nano (10⁻⁹) < Mikro (10⁻⁶) < Milli (10⁻³).",
    "mittel",
    ["Einheiten", "Präfixe", "Größenordnung"]
  ),
  q(
    "ma-pool-12-009",
    "mathe-kap1",
    "Die Dichte von Blut beträgt ca. 1,06 g/cm³. Wie viel wiegt 1 Liter Blut in Kilogramm?",
    ["0,106 kg", "1,06 kg", "10,6 kg", "106 kg", "0,0106 kg"],
    1,
    "1 L = 1000 cm³. Masse = 1,06 g/cm³ × 1000 cm³ = 1060 g = 1,06 kg.",
    "leicht",
    ["Einheiten", "Dichte", "rechenfrage"]
  ),
  q(
    "ma-pool-12-010",
    "mathe-kap1",
    "Berechnen Sie: (2,4 × 10³) × (5 × 10⁻⁷).",
    ["1,2 × 10⁻⁴", "1,2 × 10⁻³", "12 × 10⁻⁴", "1,2 × 10⁴", "12 × 10³"],
    1,
    "(2,4 × 5) × 10⁽³⁻⁷⁾ = 12 × 10⁻⁴ = 1,2 × 10⁻³.",
    "mittel",
    ["wissenschaftliche Notation", "rechenfrage"]
  ),

  // ─── mathe-kap2: Algebra, Gleichungen, Geometrie (10 Fragen) ───

  q(
    "ma-pool-12-011",
    "mathe-kap2",
    "Lösen Sie: |2x − 5| = 3. Die Lösungsmenge ist:",
    ["{1, 4}", "{−1, 4}", "{1, −4}", "{4}", "{−1, −4}"],
    0,
    "Fall 1: 2x − 5 = 3 → x = 4. Fall 2: 2x − 5 = −3 → x = 1. L = {1, 4}.",
    "mittel",
    ["Algebra", "Betragsgleichung"]
  ),
  q(
    "ma-pool-12-012",
    "mathe-kap2",
    "Die dritte binomische Formel lautet (a + b)(a − b) = ?",
    ["a² + b²", "a² − b²", "a² + 2ab + b²", "a² − 2ab + b²", "(a − b)²"],
    1,
    "(a + b)(a − b) = a² − b². Die dritte binomische Formel ist die Differenz zweier Quadrate.",
    "leicht",
    ["Algebra", "binomische Formeln"]
  ),
  q(
    "ma-pool-12-013",
    "mathe-kap2",
    "Ein Quader hat die Maße 5 cm × 4 cm × 3 cm. Seine Oberfläche beträgt:",
    ["60 cm²", "94 cm²", "120 cm²", "47 cm²", "188 cm²"],
    1,
    "O = 2(ab + ac + bc) = 2(20 + 15 + 12) = 2 × 47 = 94 cm².",
    "mittel",
    ["Geometrie", "Quader", "Oberfläche", "rechenfrage"]
  ),
  q(
    "ma-pool-12-014",
    "mathe-kap2",
    "Für welchen Wert von k hat die Gleichung x² + kx + 9 = 0 genau eine Lösung?",
    ["k = 3", "k = 6", "k = 9", "k = −3", "k = 18"],
    1,
    "Genau eine Lösung wenn D = 0: k² − 36 = 0 → k = ±6. Aus den Optionen: k = 6.",
    "schwer",
    ["quadratische Gleichung", "Diskriminante"]
  ),
  q(
    "ma-pool-12-015",
    "mathe-kap2",
    "Vereinfachen Sie: (x³ · x⁻⁵) / x⁻⁴ für x ≠ 0.",
    ["x⁻⁶", "x²", "x⁻²", "x⁶", "1"],
    1,
    "Zähler: x³ · x⁻⁵ = x⁻². (x⁻²) / (x⁻⁴) = x⁽⁻²⁻⁽⁻⁴⁾⁾ = x².",
    "leicht",
    ["Algebra", "Potenzgesetze"]
  ),
  q(
    "ma-pool-12-016",
    "mathe-kap2",
    "Eine Kugel hat Volumen V = 288π cm³. Wie groß ist ihr Radius?",
    ["4 cm", "5 cm", "6 cm", "8 cm", "9 cm"],
    2,
    "V = (4/3)πr³ = 288π → r³ = 288 × 3/4 = 216 → r = ∛216 = 6 cm.",
    "schwer",
    ["Geometrie", "Kugel", "Volumen", "rechenfrage"]
  ),
  q(
    "ma-pool-12-017",
    "mathe-kap2",
    "Lösen Sie das Gleichungssystem: 4x + 3y = 18 und 2x − y = 4. Was ist y?",
    ["1", "2", "3", "4", "5"],
    1,
    "Aus 2x − y = 4: y = 2x − 4. Einsetzen: 4x + 3(2x − 4) = 18 → 10x = 30 → x = 3. y = 6 − 4 = 2.",
    "mittel",
    ["Algebra", "Gleichungssystem", "rechenfrage"]
  ),
  q(
    "ma-pool-12-018",
    "mathe-kap2",
    "Ein gleichschenkliges Dreieck hat Basis b = 12 cm und Schenkellänge s = 10 cm. Wie hoch ist es?",
    ["6 cm", "7 cm", "8 cm", "9 cm", "10 cm"],
    2,
    "Die Höhe teilt die Basis: h² + 6² = 10² → h² = 100 − 36 = 64 → h = 8 cm.",
    "mittel",
    ["Geometrie", "Dreieck", "Pythagoras", "rechenfrage"]
  ),
  q(
    "ma-pool-12-019",
    "mathe-kap2",
    "Welche Aussage zu linearen Gleichungssystemen ist falsch?",
    [
      "Ein System mit 2 Gleichungen und 2 Unbekannten hat höchstens eine Lösung",
      "Parallele Geraden haben keine gemeinsame Lösung",
      "Identische Geraden haben unendlich viele Lösungen",
      "Das Additionsverfahren ist eine Lösungsmethode",
      "Das Einsetzungsverfahren führt immer zu genau einer Lösung",
    ],
    4,
    "Das Einsetzungsverfahren kann auch zeigen, dass keine oder unendlich viele Lösungen existieren — es führt nicht immer zu genau einer Lösung.",
    "mittel",
    ["Algebra", "Gleichungssystem", "Falsch-Aussage"]
  ),
  q(
    "ma-pool-12-020",
    "mathe-kap2",
    "Die Fläche eines gleichseitigen Dreiecks mit Seitenlänge a = 8 cm beträgt (A = a²√3/4):",
    ["16√3 cm²", "32√3 cm²", "8√3 cm²", "64√3 cm²", "4√3 cm²"],
    0,
    "A = 8² × √3/4 = 64√3/4 = 16√3 cm² ≈ 27,7 cm².",
    "schwer",
    ["Geometrie", "Dreieck", "Fläche", "rechenfrage"]
  ),

  // ─── mathe-kap3: Grundlagen (Brüche, Prozent, Potenzgesetze) (10 Fragen) ───

  q(
    "ma-pool-12-021",
    "mathe-kap3",
    "Berechnen Sie: 3/8 × 4/9.",
    ["12/72", "1/6", "7/17", "12/17", "3/18"],
    1,
    "3/8 × 4/9 = 12/72 = 1/6. Kürzen: 3 und 9 durch 3, 4 und 8 durch 4 ergibt direkt 1/6.",
    "leicht",
    ["Bruchrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-12-022",
    "mathe-kap3",
    "Ein Patient nimmt pro Woche um 2 % an Gewicht ab. Nach wie vielen Wochen hat er erstmals mehr als 10 % verloren? (0,98⁵ ≈ 0,904; 0,98⁶ ≈ 0,886)",
    ["4 Wochen", "5 Wochen", "6 Wochen", "7 Wochen", "10 Wochen"],
    2,
    "Nach n Wochen: 0,98ⁿ. 0,98⁵ ≈ 0,904 (9,6 % Verlust), 0,98⁶ ≈ 0,886 (11,4 % Verlust). Ab Woche 6 > 10 %.",
    "schwer",
    ["Prozentrechnung", "Exponentialrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-12-023",
    "mathe-kap3",
    "Vereinfachen Sie: (5/6 − 1/3) × 12.",
    ["4", "6", "8", "10", "2"],
    1,
    "5/6 − 1/3 = 5/6 − 2/6 = 3/6 = 1/2. 1/2 × 12 = 6.",
    "leicht",
    ["Bruchrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-12-025",
    "mathe-kap3",
    "Ein Medikament kostet 45 €. Die Mehrwertsteuer beträgt 10 %. Wie hoch ist der Bruttopreis?",
    ["49,50 €", "50,00 €", "40,50 €", "54,00 €", "45,45 €"],
    0,
    "Brutto = 45 × 1,10 = 49,50 €.",
    "leicht",
    ["Prozentrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-12-026",
    "mathe-kap3",
    "Vereinfachen Sie: log₂(32) − log₂(4).",
    ["2", "3", "4", "5", "8"],
    1,
    "log₂(32) = 5, log₂(4) = 2. Differenz: 5 − 2 = 3. Alternative: log₂(32/4) = log₂(8) = 3.",
    "mittel",
    ["Logarithmus", "rechenfrage"]
  ),
  q(
    "ma-pool-12-027",
    "mathe-kap3",
    "Berechnen Sie: (−2)⁴ − (−2)³.",
    ["8", "16", "24", "0", "−24"],
    2,
    "(−2)⁴ = 16, (−2)³ = −8. 16 − (−8) = 16 + 8 = 24.",
    "leicht",
    ["Potenzgesetze", "Vorzeichen", "rechenfrage"]
  ),
  q(
    "ma-pool-12-028",
    "mathe-kap3",
    "Ein Krankenhaus hat 600 Mitarbeiter. 15 % sind Ärzte, 45 % Pflegekräfte, der Rest Verwaltung. Wie viele Verwaltungsmitarbeiter gibt es?",
    ["180", "200", "220", "240", "270"],
    3,
    "Verwaltung: 100 % − 15 % − 45 % = 40 %. 600 × 0,40 = 240.",
    "mittel",
    ["Prozentrechnung", "rechenfrage"]
  ),
  q(
    "ma-pool-12-030",
    "mathe-kap3",
    "Ein Kapital verdoppelt sich bei 7 % Zinseszins p.a. nach ca. wie vielen Jahren? (Faustregel: 72/Zinssatz)",
    ["7 Jahre", "9 Jahre", "10 Jahre", "12 Jahre", "14 Jahre"],
    2,
    "72/7 ≈ 10,3 ≈ 10 Jahre. Die 72er-Regel ist eine Näherung für die Verdopplungszeit bei Zinseszins.",
    "mittel",
    ["Zinseszins", "Faustregeln"]
  ),

  // ─── mathe-kap5: Funktionen (10 Fragen) ───

  q(
    "ma-pool-12-032",
    "mathe-kap5",
    "Bestimmen Sie die Nullstellen von f(x) = x² − x − 6.",
    [
      "x = 2 und x = 3",
      "x = −2 und x = 3",
      "x = 2 und x = −3",
      "x = −2 und x = −3",
      "x = 1 und x = −6",
    ],
    1,
    "x² − x − 6 = (x − 3)(x + 2) = 0. x₁ = 3, x₂ = −2.",
    "leicht",
    ["quadratische Funktion", "Nullstellen"]
  ),
  q(
    "ma-pool-12-034",
    "mathe-kap5",
    "Die Funktion f(x) = 2ˣ hat für x = −3 den Wert:",
    ["−8", "−6", "1/8", "1/6", "8"],
    2,
    "f(−3) = 2⁻³ = 1/2³ = 1/8.",
    "leicht",
    ["Exponentialfunktion", "rechenfrage"]
  ),
  q(
    "ma-pool-12-035",
    "mathe-kap5",
    "Für welchen x-Wert hat f(x) = −x² + 6x − 5 ihr Maximum?",
    ["x = 2", "x = 3", "x = 4", "x = 5", "x = 6"],
    1,
    "xmax = −b/(2a) = −6/(2·(−1)) = 3. f(3) = −9 + 18 − 5 = 4.",
    "mittel",
    ["quadratische Funktion", "Extremum", "rechenfrage"]
  ),
  q(
    "ma-pool-12-036",
    "mathe-kap5",
    "Berechnen Sie ∫₁³ (2x + 1) dx.",
    ["8", "10", "12", "14", "16"],
    1,
    "∫(2x + 1)dx = x² + x + C. [x² + x]₁³ = (9 + 3) − (1 + 1) = 12 − 2 = 10.",
    "mittel",
    ["Integral", "rechenfrage"]
  ),
  q(
    "ma-pool-12-037",
    "mathe-kap5",
    "Die Funktion f(x) = x⁴ − 4x² hat Wendepunkte bei:",
    ["x = 0", "x = ±√(2/3)", "x = ±1", "x = ±2", "x = ±√2"],
    1,
    "f''(x) = 12x² − 8 = 0 → x² = 2/3 → x = ±√(2/3). f'''(x) = 24x ≠ 0 bei diesen Stellen.",
    "schwer",
    ["Ableitung", "Wendepunkt", "Kurvendiskussion"]
  ),
  q(
    "ma-pool-12-038",
    "mathe-kap5",
    "Welchen Wert hat lim(x→0) (sin x)/x?",
    ["0", "1", "∞", "−1", "π"],
    1,
    "Der Grenzwert lim(x→0) sin(x)/x = 1. Dies ist ein fundamentaler Grenzwert der Analysis.",
    "mittel",
    ["Grenzwert", "Trigonometrie"]
  ),
  q(
    "ma-pool-12-039",
    "mathe-kap5",
    "Die Umkehrfunktion von f(x) = 3x − 2 lautet:",
    [
      "f⁻¹(x) = (x − 2)/3",
      "f⁻¹(x) = (x + 2)/3",
      "f⁻¹(x) = 3x + 2",
      "f⁻¹(x) = x/(3 − 2)",
      "f⁻¹(x) = (2 − x)/3",
    ],
    1,
    "y = 3x − 2 → x = (y + 2)/3. Also f⁻¹(x) = (x + 2)/3.",
    "leicht",
    ["Funktion", "Umkehrfunktion"]
  ),
  q(
    "ma-pool-12-040",
    "mathe-kap5",
    "Welche Aussage über quadratische Funktionen f(x) = ax² + bx + c (a ≠ 0) ist falsch?",
    [
      "Für a > 0 ist die Parabel nach oben geöffnet",
      "Der Scheitelpunkt liegt bei x = −b/(2a)",
      "Die Funktion hat immer genau zwei Nullstellen",
      "Der y-Achsenabschnitt ist c",
      "Die Funktion ist symmetrisch zur Scheitelachse",
    ],
    2,
    "Eine quadratische Funktion hat 0, 1 oder 2 Nullstellen, abhängig von der Diskriminante D = b² − 4ac.",
    "mittel",
    ["quadratische Funktion", "Falsch-Aussage"]
  ),

  // ─── mathe-kap6: Vektorrechnung (8 Fragen) ───

  q(
    "ma-pool-12-041",
    "mathe-kap6",
    "Gegeben: a = (4, −3). Der Betrag |a| ist:",
    ["1", "5", "7", "√7", "25"],
    1,
    "|a| = √(16 + 9) = √25 = 5.",
    "leicht",
    ["Vektoren", "Betrag", "rechenfrage"]
  ),
  q(
    "ma-pool-12-042",
    "mathe-kap6",
    "Die Vektoren a = (2, 3, −1) und b = (−4, −6, 2). Welche Beziehung besteht?",
    [
      "a und b sind orthogonal",
      "a und b sind antiparallel",
      "a und b sind identisch",
      "a = 2b",
      "a und b sind linear unabhängig",
    ],
    1,
    "b = −2a (da −4 = −2·2, −6 = −2·3, 2 = −2·(−1)). Die Vektoren sind antiparallel.",
    "mittel",
    ["Vektoren", "Parallelität", "Skalierung"]
  ),
  q(
    "ma-pool-12-043",
    "mathe-kap6",
    "Die Projektion von a = (3, 4) auf b = (1, 0) hat den Betrag:",
    ["3", "4", "5", "0", "7"],
    0,
    "proj_b(a) = (a · b / |b|²) · b = (3/1) · (1,0) = (3,0). Betrag = 3.",
    "mittel",
    ["Vektoren", "Projektion", "Skalarprodukt"]
  ),
  q(
    "ma-pool-12-044",
    "mathe-kap6",
    "Die Punkte A(1,1), B(4,1), C(4,5) bilden ein Dreieck. Der Vektor AB ist:",
    ["(3, 0)", "(5, 0)", "(0, 4)", "(3, 4)", "(−3, 0)"],
    0,
    "AB = B − A = (4−1, 1−1) = (3, 0).",
    "leicht",
    ["Vektoren", "Verbindungsvektor"]
  ),
  q(
    "ma-pool-12-045",
    "mathe-kap6",
    "Berechnen Sie das Spatprodukt (a × b) · c für a = (1,0,0), b = (0,1,0), c = (0,0,1).",
    ["0", "1", "−1", "3", "√3"],
    1,
    "a × b = (0,0,1). (0,0,1) · (0,0,1) = 1. Das Spatprodukt der Standardbasisvektoren ist 1.",
    "schwer",
    ["Vektoren", "Spatprodukt", "Kreuzprodukt"]
  ),
  q(
    "ma-pool-12-046",
    "mathe-kap6",
    "Zwei Ortsvektoren: P = (2, 5, −1) und Q = (−1, 1, 3). Der Abstand PQ ist:",
    ["√41", "√29", "5", "√34", "6"],
    0,
    "|PQ| = √((−3)² + (−4)² + 4²) = √(9 + 16 + 16) = √41.",
    "mittel",
    ["Vektoren", "Abstand", "rechenfrage"]
  ),
  q(
    "ma-pool-12-047",
    "mathe-kap6",
    "Welcher Vektor steht senkrecht auf a = (2, −1)?",
    ["(1, 2)", "(2, 1)", "(−2, 1)", "(−1, −2)", "(1, −2)"],
    0,
    "a · v = 2·1 + (−1)·2 = 2 − 2 = 0. Also (1, 2) ⊥ (2, −1).",
    "leicht",
    ["Vektoren", "Orthogonalität", "Skalarprodukt"]
  ),
  q(
    "ma-pool-12-048",
    "mathe-kap6",
    "Die Gerade g: r(t) = (1, 2) + t(3, 4). Für welches t liegt der Punkt (7, 10) auf g?",
    ["t = 1", "t = 2", "t = 3", "t = 4", "t = −2"],
    1,
    "(1 + 3t, 2 + 4t) = (7, 10). 3t = 6 → t = 2. Probe: 2 + 8 = 10 ✓.",
    "mittel",
    ["Vektoren", "Gerade", "Parameterdarstellung", "rechenfrage"]
  ),

  // ─── mathe-kap7: Stochastik (12 Fragen) ───

  q(
    "ma-pool-12-049",
    "mathe-kap7",
    "Zwei faire Würfel werden geworfen. Wie groß ist die Wahrscheinlichkeit, dass die Augensumme 7 beträgt?",
    ["1/6", "5/36", "1/4", "7/36", "1/12"],
    0,
    "Günstige Paare: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6. P = 6/36 = 1/6.",
    "leicht",
    ["Wahrscheinlichkeit", "Würfel", "Laplace"]
  ),
  q(
    "ma-pool-12-050",
    "mathe-kap7",
    "Eine Urne enthält 3 rote, 5 blaue und 2 grüne Kugeln. Es wird eine Kugel gezogen. P(rot oder grün) = ?",
    ["1/2", "3/10", "2/10", "1/5", "5/10"],
    0,
    "P(rot ∪ grün) = P(rot) + P(grün) = 3/10 + 2/10 = 5/10 = 1/2. (Disjunkte Ereignisse.)",
    "leicht",
    ["Wahrscheinlichkeit", "Urnenmodell", "Additionssatz"]
  ),
  q(
    "ma-pool-12-051",
    "mathe-kap7",
    "Wie viele Möglichkeiten gibt es, 5 verschiedene Bücher auf einem Regal anzuordnen?",
    ["25", "32", "60", "120", "720"],
    3,
    "5! = 5 × 4 × 3 × 2 × 1 = 120.",
    "leicht",
    ["Kombinatorik", "Permutation", "rechenfrage"]
  ),
  q(
    "ma-pool-12-052",
    "mathe-kap7",
    "Ein Medikament wirkt bei 80 % der Patienten. Bei 3 unabhängigen Patienten: Wie groß ist die Wahrscheinlichkeit, dass es bei allen dreien wirkt?",
    ["0,240", "0,384", "0,512", "0,640", "0,800"],
    2,
    "P = 0,8³ = 0,512. (Unabhängige Ereignisse: Multiplikationsregel.)",
    "mittel",
    ["Wahrscheinlichkeit", "Unabhängigkeit", "rechenfrage"]
  ),
  q(
    "ma-pool-12-053",
    "mathe-kap7",
    "Der Binomialkoeffizient C(8, 3) ist gleich:",
    ["24", "56", "168", "336", "40 320"],
    1,
    "C(8,3) = 8!/(3!·5!) = (8·7·6)/(3·2·1) = 336/6 = 56.",
    "mittel",
    ["Kombinatorik", "Binomialkoeffizient", "rechenfrage"]
  ),
  q(
    "ma-pool-12-054",
    "mathe-kap7",
    "In einer Blutbank sind 45 % der Spender Blutgruppe A, 40 % O, 10 % B, 5 % AB. P(nicht A) = ?",
    ["0,45", "0,55", "0,40", "0,60", "0,50"],
    1,
    "P(nicht A) = 1 − P(A) = 1 − 0,45 = 0,55.",
    "mittel",
    ["Wahrscheinlichkeit", "Gegenereignis", "rechenfrage"]
  ),
  q(
    "ma-pool-12-055",
    "mathe-kap7",
    "Ein Glücksrad hat 8 gleich große Sektoren (1–8). Es wird zweimal gedreht. Wie groß ist die Wahrscheinlichkeit, dass beide Ergebnisse gerade sind?",
    ["1/2", "1/4", "3/8", "1/8", "1/16"],
    1,
    "P(gerade) = 4/8 = 1/2 pro Drehung. P(beide gerade) = 1/2 × 1/2 = 1/4.",
    "mittel",
    ["Wahrscheinlichkeit", "Unabhängigkeit", "rechenfrage"]
  ),
  q(
    "ma-pool-12-056",
    "mathe-kap7",
    "Bei einem Multiple-Choice-Test mit 4 Fragen und je 5 Antworten (eine richtig): Wie groß ist P(alle 4 durch Raten richtig)?",
    ["1/20", "1/125", "1/625", "4/625", "1/3125"],
    2,
    "P = (1/5)⁴ = 1/625 ≈ 0,0016.",
    "mittel",
    ["Wahrscheinlichkeit", "Unabhängigkeit", "rechenfrage"]
  ),
  q(
    "ma-pool-12-057",
    "mathe-kap7",
    "Die Standardabweichung einer Stichprobe beträgt σ = 4. Die Varianz ist:",
    ["2", "4", "8", "16", "64"],
    3,
    "Varianz = σ² = 4² = 16. Die Varianz ist das Quadrat der Standardabweichung.",
    "leicht",
    ["Varianz", "Standardabweichung", "rechenfrage"]
  ),
  q(
    "ma-pool-12-058",
    "mathe-kap7",
    "5 Personen sollen in einer Reihe sitzen, wobei Person A und B nebeneinander sein müssen. Wie viele Anordnungen gibt es?",
    ["24", "48", "60", "120", "240"],
    1,
    "A und B als Block: 4 Positionen für den Block × 2 (A-B oder B-A) × 3! = 4 × 2 × 6 = 48.",
    "schwer",
    ["Kombinatorik", "Permutation", "Nebenbedingung", "rechenfrage"]
  ),
  q(
    "ma-pool-12-059",
    "mathe-kap7",
    "Ein diagnostischer Schnelltest hat eine Falsch-Positiv-Rate von 5 %. Von 200 gesunden Personen werden getestet. Wie viele falsch positive Ergebnisse sind zu erwarten?",
    ["5", "10", "15", "20", "25"],
    1,
    "Erwartete Falsch-Positive = 200 × 0,05 = 10.",
    "schwer",
    ["Wahrscheinlichkeit", "Erwartungswert", "Diagnostik", "rechenfrage"]
  ),
  q(
    "ma-pool-12-060",
    "mathe-kap7",
    "Beim Lotto '6 aus 45': Wie viele verschiedene Tipps sind möglich? C(45, 6) = ?",
    ["8 145 060", "5 864 443", "15 890 700", "45 000 000", "720"],
    0,
    "C(45,6) = 45!/(6!·39!) = (45·44·43·42·41·40)/(720) = 8 145 060.",
    "schwer",
    ["Kombinatorik", "Binomialkoeffizient", "rechenfrage"]
  ),
];
