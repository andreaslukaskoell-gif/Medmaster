/**
 * Mathematik Pool — „Was ist falsch?“ (Typ A: eine Aussage ist falsch, diese auswählen).
 * Stoff aus bmsKapitel/mathematik.
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

const STEM = "Welche der folgenden Aussagen ist falsch?";

export const mathematikWasIstFalsch: Question[] = [
  q(
    "ma-pool-wif-001",
    "mathe-kap1",
    STEM,
    [
      "10⁻³ = 0,001.",
      "10³ · 10² = 10⁵.",
      "Das Präfix „nano“ entspricht 10⁻⁶.",
      "Bei Multiplikation von Zehnerpotenzen werden die Exponenten addiert.",
      "10⁰ = 1.",
    ],
    2,
    "Nano = 10⁻⁹. 10⁻⁶ ist Mikro (μ). Die falsche Aussage ist C.",
    "leicht",
    ["Zehnerpotenzen", "SI-Präfixe"]
  ),
  q(
    "ma-pool-wif-002",
    "mathe-kap2",
    STEM,
    [
      "Das Volumen eines Quaders ist V = a·b·c.",
      "Die Kreisfläche ist A = πr².",
      "Die Hypotenuse im rechtwinkligen Dreieck erfüllt a² + b² = c².",
      "Der Umfang eines Kreises ist U = πr².",
      "Die Fläche eines Dreiecks mit Grundlinie g und Höhe h ist A = (1/2)·g·h.",
    ],
    3,
    "Der Kreisumfang ist U = 2πr, nicht πr² (πr² ist die Fläche). Die falsche Aussage ist D.",
    "leicht",
    ["Geometrie", "Kreis"]
  ),
  q(
    "ma-pool-wif-003",
    "mathe-kap5",
    STEM,
    [
      "Die Nullstelle von f(x) = mx + b (m ≠ 0) ist x₀ = −b/m.",
      "Zwei Geraden sind parallel, wenn sie dieselbe Steigung haben.",
      "Zwei Geraden sind senkrecht, wenn m₁ = −m₂.",
      "Der y-Achsenabschnitt der Geraden y = mx + b ist b.",
      "Die Steigung m ist m = Δy/Δx.",
    ],
    2,
    "Senkrecht gilt wenn m₁·m₂ = −1, also m₂ = −1/m₁, nicht m₂ = −m₁. Die falsche Aussage ist C.",
    "mittel",
    ["lineare Funktion", "Steigung"]
  ),
  q(
    "ma-pool-wif-004",
    "mathe-kap1",
    STEM,
    [
      "1 mmol/L = 10⁻³ mol/L.",
      "15 μmol/L = 1,5·10⁻⁵ mol/L.",
      "1 μg = 10⁻³ g.",
      "1 Liter = 1 dm³.",
      "Pico (p) = 10⁻¹².",
    ],
    2,
    "1 μg = 10⁻⁶ g (Mikro), nicht 10⁻³ g. Die falsche Aussage ist C.",
    "leicht",
    ["Einheiten"]
  ),
  q(
    "ma-pool-wif-005",
    "mathe-kap5",
    STEM,
    [
      "ln(1) = 0.",
      "log₁₀(100) = 2.",
      "ld(8) = 3 (Logarithmus dualis).",
      "ln(a·b) = ln(a)·ln(b).",
      "e^(ln x) = x für x > 0.",
    ],
    3,
    "ln(a·b) = ln(a) + ln(b), nicht ln(a)·ln(b). Die falsche Aussage ist D.",
    "mittel",
    ["Logarithmus"]
  ),
  q(
    "ma-pool-wif-006",
    "mathe-kap2",
    STEM,
    [
      "Die Summe der Innenwinkel im Dreieck ist 180°.",
      "Das Kugelvolumen mit Radius r ist (4/3)πr³.",
      "Die Kugeloberfläche ist 4πr.",
      "Das Zylindervolumen mit Radius r und Höhe h ist πr²h.",
      "Die Diagonale eines Quadrats mit Seite s hat die Länge s√2.",
    ],
    2,
    "Kugeloberfläche ist 4πr², nicht 4πr. Die falsche Aussage ist C.",
    "leicht",
    ["Geometrie", "Kugel"]
  ),
  q(
    "ma-pool-wif-007",
    "mathe-kap5",
    STEM,
    [
      "Die Parabel y = x² ist nach oben geöffnet.",
      "Die Parabel y = −x² hat ihren Scheitel im Ursprung.",
      "Für f(x) = ax² + bx + c mit a > 0 liegt das Minimum bei x = −b/(2a).",
      "Die quadratische Gleichung x² = 9 hat nur die Lösung x = 3.",
      "Die Diskriminante D = b² − 4ac bestimmt die Anzahl der reellen Lösungen.",
    ],
    3,
    "x² = 9 hat die Lösungen x = 3 und x = −3. Die falsche Aussage ist D.",
    "leicht",
    ["Parabel", "quadratische Gleichung"]
  ),
  q(
    "ma-pool-wif-008",
    "mathe-kap2",
    STEM,
    [
      "Sinus(α) = Gegenkathete / Hypotenuse.",
      "Tangens(α) = Gegenkathete / Ankathete.",
      "Eine Steigung von 100% entspricht einem Winkel von 90°.",
      "cos(0°) = 1.",
      "sin²(α) + cos²(α) = 1.",
    ],
    2,
    "Steigung 100% bedeutet 45° (nicht 90°). 90° wäre „unendliche“ Steigung. Die falsche Aussage ist C.",
    "mittel",
    ["Trigonometrie", "Steigung"]
  ),
  q(
    "ma-pool-wif-009",
    "mathe-kap1",
    STEM,
    [
      "10⁶ / 10² = 10⁴.",
      "(10²)³ = 10⁶.",
      "√(10⁴) = 10².",
      "10⁻⁵ · 10³ = 10⁻².",
      "10⁻³ ist eine negative Zahl.",
    ],
    4,
    "10⁻³ = 0,001 ist positiv; der Exponent ist negativ, die Zahl selbst nicht. Die falsche Aussage ist E.",
    "leicht",
    ["Zehnerpotenzen"]
  ),
  q(
    "ma-pool-wif-010",
    "mathe-kap5",
    STEM,
    [
      "Die Ableitung von x³ ist 3x².",
      "Die Ableitung von e^x ist e^x.",
      "Die Ableitung von ln(x) ist 1/x.",
      "Die Ableitung von 1/x ist 1/x².",
      "An einer Extremstelle ist f'(x) = 0.",
    ],
    3,
    "Die Ableitung von 1/x = x⁻¹ ist −x⁻² = −1/x², nicht 1/x². Die falsche Aussage ist D.",
    "mittel",
    ["Ableitung"]
  ),
  q(
    "ma-pool-wif-011",
    "mathe-kap1",
    STEM,
    [
      "10⁹ = 1 Milliarde.",
      "Mikro (μ) = 10⁻⁶.",
      "1 km = 10³ m.",
      "1 mg = 10⁻³ kg.",
      "Zenti (c) = 10⁻².",
    ],
    3,
    "1 mg = 10⁻⁶ kg (D falsch).",
    "leicht",
    ["Einheiten"]
  ),
  q(
    "ma-pool-wif-012",
    "mathe-kap2",
    STEM,
    [
      "Quader: V = a·b·c.",
      "Kugel: V = (4/3)πr³.",
      "Zylinder: V = πr²h.",
      "Kreisfläche A = 2πr.",
      "Dreieck: A = (1/2)·g·h.",
    ],
    3,
    "Kreisfläche A = πr² (D falsch).",
    "leicht",
    ["Geometrie"]
  ),
  q(
    "ma-pool-wif-013",
    "mathe-kap5",
    STEM,
    ["ln(e) = 1.", "log₁₀(100) = 2.", "ld(8) = 3.", "ln(0) = 0.", "ln(a) + ln(b) = ln(a·b)."],
    3,
    "ln(0) ist nicht definiert (D falsch).",
    "mittel",
    ["Logarithmus"]
  ),
  q(
    "ma-pool-wif-014",
    "mathe-kap5",
    STEM,
    [
      "Parabel y = x²: Scheitel (0|0).",
      "a > 0: nach oben geöffnet.",
      "Diskriminante D = b² − 4ac.",
      "D > 0: zwei reelle Nullstellen.",
      "Die Parabel y = −x² hat ein Minimum bei (0|0).",
    ],
    4,
    "y = −x² hat ein Maximum bei (0|0) (E falsch).",
    "mittel",
    ["Parabel"]
  ),
  q(
    "ma-pool-wif-015",
    "mathe-kap2",
    STEM,
    [
      "tan(α) = sin(α)/cos(α).",
      "sin(90°) = 1.",
      "cos(0°) = 1.",
      "Steigung 50% entspricht tan(α) = 0,5.",
      "Eine Steigung von 45° entspricht 100%.",
    ],
    4,
    "Steigung 100% entspricht 45°, nicht umgekehrt (D falsch).",
    "mittel",
    ["Trigonometrie"]
  ),
];
