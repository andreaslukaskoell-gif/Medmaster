/**
 * Mathematik-Pool Teil 1 — Fragen 1–100 (MedAT-Style, Single Choice).
 * Stoff aus bmsKapitel/mathematik: Zahlen & Einheiten, Algebra & Geometrie, Funktionen.
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

export const mathematikPool1: Question[] = [
  // ─── User-Vorlage 1–10 ───────────────────────────────────────
  q(
    "ma-pool-001",
    "mathe-kap5",
    "Der Herzschlag eines Patienten verlangsamt sich um a Schläge pro Minute. Der Ruhepuls des Patienten beträgt f_Ruhe Schläge pro Minute. Zur Kreislaufunterstützung wird ein Medikament verabreicht, das den Herzschlag quadratisch mit einem Faktor b pro Minute beschleunigt. Folgende Gleichung beschreibt den zeitlichen Verlauf der Herzfrequenz: f(t) = f_Ruhe − a·t + b·t². Nach welcher Zeit tritt die minimale Herzfrequenz auf?",
    [
      "Nach t = a/b Minuten.",
      "Nach t = 2a/b Minuten.",
      "Nach t = a²/b Minuten.",
      "Nach t = a/b² Minuten.",
      "Nach t = a/(2b) Minuten.",
    ],
    4,
    "Die minimale Herzfrequenz liegt am Minimum von f(t). Ableitung f'(t) = −a + 2b·t = 0 liefert t = a/(2b).",
    "mittel",
    ["Ableitung", "Extremum", "quadratische Funktion"]
  ),
  q(
    "ma-pool-002",
    "mathe-kap2",
    "Ein zylinderförmiger Muskel mit der Länge l und dem Durchmesser d im entspannten Zustand verkürzt sich bei Anspannung um 30%. Das Volumen des Muskels bleibt dabei konstant. Wie verändert sich der Durchmesser D des angespannten Muskels im Vergleich zur Ausgangssituation?",
    [
      "D steigt um 39,05%.",
      "D steigt um 54,77%.",
      "D steigt um 82,57%.",
      "D steigt um 19,52%.",
      "D steigt um 83,66%.",
    ],
    3,
    "Volumen V = π·(d/2)²·l bleibt konstant. Neue Länge l' = 0,7·l ⇒ (d'/2)²·0,7 = (d/2)² ⇒ d'/d = 1/√0,7 ≈ 1,195 ⇒ D steigt um etwa 19,5%.",
    "schwer",
    ["Zylinder", "Volumen", "Geometrie"]
  ),
  q(
    "ma-pool-003",
    "mathe-kap5",
    "Welche der in einer Abbildung gezeigten Kurven gibt die Funktion y = −x² − 5 an?",
    ["Kurve a", "Kurve b", "Kurve c", "Kurve d", "Keine der gezeigten Kurven."],
    4,
    "y = −x² − 5 ist eine nach unten geöffnete Parabel mit Scheitel (0; −5). Welche Kurve das ist, hängt von der konkreten Abbildung ab; oft wird E gewählt, wenn keine passende Kurve gezeigt wird.",
    "leicht",
    ["Parabel", "quadratische Funktion", "Graph"]
  ),
  q(
    "ma-pool-004",
    "mathe-kap5",
    "Eine Steigungsangabe bei einer Straße lautet 16%. Dies bedeutet, dass man bei einer horizontalen Wegstrecke von 100 m eine Höhendifferenz von 16 m überwindet. Welcher Winkelfunktion im rechtwinkligen Dreieck entspricht diese Angabe?",
    ["Cotangens", "keiner", "Cosinus", "Tangens", "Sinus"],
    3,
    "Steigung = Höhendifferenz / horizontale Strecke = Gegenkathete / Ankathete = tan(α). 16% entspricht also dem Tangens des Steigungswinkels.",
    "leicht",
    ["Trigonometrie", "Tangens", "Steigung"]
  ),
  q(
    "ma-pool-005",
    "mathe-kap2",
    "Wie berechnet sich das Volumen V eines dreidimensionalen Quaders mit den drei Kantenlängen a, b und c?",
    [
      "V = (a+b+c)·(a+b+c)·(a+b+c)",
      "V = a + b + c",
      "V = a·b·c",
      "V = 2·a·b·c",
      "V = 2·(a·b + a·c + b·c)",
    ],
    2,
    "Das Volumen eines Quaders ist das Produkt der drei Kantenlängen: V = a·b·c. 2·(a·b+a·c+b·c) wäre die Oberfläche.",
    "leicht",
    ["Quader", "Volumen", "Geometrie"]
  ),
  q(
    "ma-pool-006",
    "mathe-kap2",
    "Ein Dreieck mit Grundlinie 5 cm und Höhe 8 cm hat ein Drittel der Fläche eines Rechtecks mit der Breite 5 cm. Wie groß ist die Länge des Rechtecks?",
    ["8", "15", "16", "12", "3"],
    3,
    "Dreieckfläche A_D = (1/2)·5·8 = 20. Rechteckfläche A_R = 5·L. Es gilt 20 = (1/3)·5·L ⇒ L = 20·3/5 = 12.",
    "mittel",
    ["Fläche", "Dreieck", "Rechteck"]
  ),
  q(
    "ma-pool-007",
    "mathe-kap1",
    "Die Konzentration von 15 μmol/L ergibt umgerechnet auf mol/L:",
    ["150·10⁻⁶", "1,5·10⁻⁶", "1,5·10⁻⁵", "150·10⁻⁵", "15·10⁻⁵"],
    2,
    "15 μmol/L = 15·10⁻⁶ mol/L = 1,5·10⁻⁵ mol/L (μ = 10⁻⁶, also 15·10⁻⁶ = 1,5·10⁻⁵).",
    "leicht",
    ["Zehnerpotenzen", "Einheiten", "Konzentration"]
  ),
  q(
    "ma-pool-008",
    "mathe-kap5",
    "Gegeben sei die Gleichung U = (a/b)·ln(A/B), mit a > 0 und b < 0. Welche der folgenden Behauptungen ist korrekt?",
    [
      "U = 0, wenn A = 0",
      "U < 0, wenn 0 < A < B",
      "U = 0, wenn A < 0",
      "U < 0, wenn A > B > 0",
      "U = 0, wenn B = 0",
    ],
    3,
    "a/b ist negativ (a>0, b<0). ln(A/B) > 0 genau dann, wenn A > B > 0. Dann U = (negativ)·(positiv) < 0. Für 0 < A < B ist ln(A/B) < 0, also U > 0.",
    "mittel",
    ["Logarithmus", "Vorzeichen"]
  ),
  q(
    "ma-pool-009",
    "mathe-kap1",
    "Für welche Zahl steht das Präfix „pico“?",
    ["10⁻⁹", "10⁻¹²", "10⁻¹⁸", "10⁻⁶", "10⁻¹⁵"],
    1,
    "Pico (p) = 10⁻¹². Nano = 10⁻⁹, Mikro = 10⁻⁶, Femto = 10⁻¹⁵, Atto = 10⁻¹⁸.",
    "leicht",
    ["SI-Präfixe", "Zehnerpotenzen"]
  ),
  q(
    "ma-pool-010",
    "mathe-kap5",
    "Der Logarithmus dualis (ld) ist der Logarithmus einer Zahl zur Basis 2. Welche der folgenden Behauptungen ist korrekt?",
    ["ld 16 = 4", "ld 2 = 0", "ld a² = 2a", "ld (a + b) = ld a + ld b", "ld 100 = 10"],
    0,
    "ld 16 = log₂(16) = 4, da 2⁴ = 16. ld 2 = 1; ld a² = 2·ld a (nicht 2a); ld(a+b) ≠ ld a + ld b; ld 100 ≠ 10.",
    "leicht",
    ["Logarithmus", "log2", "Zweierlogarithmus"]
  ),
  // ─── Fragen 11–100 ───────────────────────────────────────────
  q(
    "ma-pool-011",
    "mathe-kap1",
    "Wie lautet 10³ · 10⁻⁵ in Zehnerpotenzschreibweise?",
    ["10⁻²", "10⁻¹⁵", "10⁸", "10²", "10¹⁵"],
    0,
    "Multiplikation von Zehnerpotenzen: Exponenten addieren. 3 + (−5) = −2, also 10⁻².",
    "leicht",
    ["Zehnerpotenzen", "Potenzgesetze"]
  ),
  q(
    "ma-pool-012",
    "mathe-kap1",
    "15 mmol/L entspricht in mol/L:",
    ["1,5·10⁻²", "1,5·10⁻³", "15·10⁻³", "1,5·10⁻⁴", "15·10⁻²"],
    0,
    "milli = 10⁻³, also 15 mmol/L = 15·10⁻³ mol/L = 1,5·10⁻² mol/L.",
    "leicht",
    ["Einheiten", "Konzentration", "milli"]
  ),
  q(
    "ma-pool-013",
    "mathe-kap2",
    "Die Fläche eines Rechtecks mit Seitenlängen 7 cm und 12 cm beträgt:",
    ["19 cm²", "38 cm²", "84 cm²", "42 cm²", "96 cm²"],
    2,
    "Fläche Rechteck = Länge · Breite = 7 · 12 = 84 cm².",
    "leicht",
    ["Fläche", "Rechteck", "Geometrie"]
  ),
  q(
    "ma-pool-014",
    "mathe-kap5",
    "Für eine lineare Funktion f(x) = mx + b ist die Nullstelle gegeben durch:",
    ["x = b/m", "x = −b/m", "x = −m/b", "x = m/b", "x = b·m"],
    1,
    "Nullstelle: f(x) = 0 ⇒ mx + b = 0 ⇒ x = −b/m (für m ≠ 0).",
    "leicht",
    ["lineare Funktion", "Nullstelle"]
  ),
  q(
    "ma-pool-015",
    "mathe-kap1",
    "Das Präfix „nano“ (n) steht für:",
    ["10⁻⁶", "10⁻⁹", "10⁻¹²", "10⁻³", "10⁻¹⁵"],
    1,
    "nano = 10⁻⁹. Mikro = 10⁻⁶, Pico = 10⁻¹², Milli = 10⁻³, Femto = 10⁻¹⁵.",
    "leicht",
    ["SI-Präfixe", "nano"]
  ),
  q(
    "ma-pool-016",
    "mathe-kap2",
    "Ein rechtwinkliges Dreieck hat die Katheten 3 cm und 4 cm. Wie lang ist die Hypotenuse?",
    ["5 cm", "6 cm", "7 cm", "12 cm", "25 cm"],
    0,
    "Satz des Pythagoras: c² = a² + b² = 9 + 16 = 25 ⇒ c = 5 cm.",
    "leicht",
    ["Pythagoras", "Dreieck", "Hypotenuse"]
  ),
  q(
    "ma-pool-017",
    "mathe-kap5",
    "Die Steigung m einer Geraden durch die Punkte P₁(2|5) und P₂(6|13) beträgt:",
    ["2", "1", "3", "4", "1/2"],
    0,
    "m = Δy/Δx = (13−5)/(6−2) = 8/4 = 2.",
    "leicht",
    ["Steigung", "lineare Funktion", "Differenzenquotient"]
  ),
  q(
    "ma-pool-018",
    "mathe-kap1",
    "Wie viel ist 10⁶ geteilt durch 10²?",
    ["10⁴", "10⁸", "10³", "10¹²", "10⁻⁴"],
    0,
    "Division von Zehnerpotenzen: Exponenten subtrahieren. 6 − 2 = 4, also 10⁴.",
    "leicht",
    ["Zehnerpotenzen", "Division"]
  ),
  q(
    "ma-pool-019",
    "mathe-kap2",
    "Das Volumen einer Kugel mit Radius r ist gegeben durch:",
    ["4πr²", "4πr³", "(4/3)πr³", "2πr", "πr³"],
    2,
    "Kugelvolumen V = (4/3)πr³. 4πr² ist die Oberfläche.",
    "mittel",
    ["Kugel", "Volumen", "Geometrie"]
  ),
  q(
    "ma-pool-020",
    "mathe-kap5",
    "Die Parabel y = x² − 4 hat ihre Nullstellen bei:",
    ["x = 0 und x = 4", "x = 2 und x = −2", "x = 4 und x = −4", "x = 0", "nur x = 2"],
    1,
    "x² − 4 = 0 ⇒ x² = 4 ⇒ x = 2 oder x = −2.",
    "leicht",
    ["Parabel", "Nullstelle", "quadratische Gleichung"]
  ),
  q(
    "ma-pool-021",
    "mathe-kap1",
    "0,0025 in Zehnerpotenzschreibweise (normalisiert) lautet:",
    ["2,5·10⁻²", "2,5·10⁻³", "25·10⁻⁴", "2,5·10⁻⁴", "0,25·10⁻²"],
    1,
    "0,0025 = 2,5 · 0,001 = 2,5 · 10⁻³. Normalisiert: Vorfaktor zwischen 1 und 10.",
    "leicht",
    ["Zehnerpotenzen", "normalisierte Form"]
  ),
  q(
    "ma-pool-022",
    "mathe-kap2",
    "Die Summe der Innenwinkel in einem beliebigen Dreieck beträgt:",
    ["90°", "180°", "360°", "270°", "120°"],
    1,
    "In jedem Dreieck gilt: Summe der Innenwinkel = 180°.",
    "leicht",
    ["Dreieck", "Winkelsumme"]
  ),
  q(
    "ma-pool-023",
    "mathe-kap5",
    "Zwei Geraden mit den Steigungen m₁ = 2 und m₂ = −1/2 stehen zueinander:",
    ["parallel", "senkrecht", "identisch", "schneiden unter 45°", "es lässt sich nicht sagen"],
    1,
    "Senkrecht genau dann, wenn m₁·m₂ = −1. Hier 2·(−1/2) = −1.",
    "mittel",
    ["Geraden", "Steigung", "senkrecht"]
  ),
  q(
    "ma-pool-024",
    "mathe-kap1",
    "Eine Konzentration von 2 mol/L entspricht in mmol/L:",
    ["2·10³", "2·10⁻³", "200", "0,002", "20"],
    0,
    "1 mol/L = 10³ mmol/L, also 2 mol/L = 2·10³ mmol/L.",
    "leicht",
    ["Einheitenumrechnung", "Konzentration"]
  ),
  q(
    "ma-pool-025",
    "mathe-kap2",
    "Die Fläche eines Kreises mit Radius 5 cm beträgt (in cm²):",
    ["10π", "25π", "5π", "25", "100π"],
    1,
    "Kreisfläche A = πr² = π·25 = 25π cm².",
    "leicht",
    ["Kreis", "Fläche"]
  ),
  q(
    "ma-pool-026",
    "mathe-kap5",
    "Welche Aussage zum natürlichen Logarithmus ln ist richtig?",
    ["ln(0) = 0", "ln(1) = 0", "ln(e) = 0", "ln(−1) = 0", "ln(10) = 1"],
    1,
    "ln(1) = 0, da e⁰ = 1. ln(0) ist nicht definiert; ln(e) = 1; ln(−1) nicht definiert (reell); ln(10) ≠ 1.",
    "leicht",
    ["Logarithmus", "ln", "e"]
  ),
  q(
    "ma-pool-027",
    "mathe-kap1",
    "√(10⁸) in Zehnerpotenzschreibweise:",
    ["10⁴", "10¹⁶", "10⁶", "10⁸/²", "10⁸"],
    0,
    "Wurzel: Exponent halbieren. √(10⁸) = 10^(8/2) = 10⁴.",
    "leicht",
    ["Zehnerpotenzen", "Wurzel"]
  ),
  q(
    "ma-pool-028",
    "mathe-kap2",
    "Bei einer Verdünnung gilt c₁·V₁ = c₂·V₂. Wenn V₂ = 2·V₁ und c₁ bekannt ist, dann ist c₂ gleich:",
    ["2·c₁", "c₁/2", "c₁", "c₁/4", "4·c₁"],
    1,
    "c₂ = c₁·V₁/V₂ = c₁·V₁/(2·V₁) = c₁/2.",
    "mittel",
    ["Verdünnung", "Konzentration", "Mischung"]
  ),
  q(
    "ma-pool-029",
    "mathe-kap5",
    "Die Funktion f(x) = −2x + 4 schneidet die x-Achse bei:",
    ["x = 4", "x = 2", "x = −2", "x = 1/2", "x = 0"],
    1,
    "Nullstelle: 0 = −2x + 4 ⇒ 2x = 4 ⇒ x = 2.",
    "leicht",
    ["lineare Funktion", "Nullstelle"]
  ),
  q(
    "ma-pool-030",
    "mathe-kap1",
    "Das Präfix „Mikro“ (μ) entspricht:",
    ["10⁻³", "10⁻⁶", "10⁻⁹", "10⁶", "10⁻¹²"],
    1,
    "Mikro (μ) = 10⁻⁶. Milli = 10⁻³, Nano = 10⁻⁹.",
    "leicht",
    ["SI-Präfixe", "Mikro"]
  ),
  q(
    "ma-pool-031",
    "mathe-kap2",
    "Die Oberfläche eines Quaders mit Kanten a, b, c ist:",
    ["a·b·c", "2(a+b+c)", "2(ab+ac+bc)", "a²+b²+c²", "6abc"],
    2,
    "Oberfläche = 2(ab + ac + bc). Volumen wäre a·b·c.",
    "mittel",
    ["Quader", "Oberfläche"]
  ),
  q(
    "ma-pool-032",
    "mathe-kap5",
    "Für f(x) = x² + 4x + 4 ist der Scheitelpunkt bei:",
    ["(−2|0)", "(2|0)", "(−2|4)", "(0|4)", "(2|4)"],
    0,
    "x²+4x+4 = (x+2)², also Scheitel (−2|0).",
    "mittel",
    ["Parabel", "Scheitelpunkt", "Quadratische Ergänzung"]
  ),
  q(
    "ma-pool-033",
    "mathe-kap1",
    "(3·10⁴)·(2·10⁻²) in normalisierter Form:",
    ["6·10²", "6·10⁻⁸", "5·10²", "6·10⁶", "1,2·10³"],
    0,
    "Vorfaktoren 3·2=6, Exponenten 4+(−2)=2 ⇒ 6·10².",
    "leicht",
    ["Zehnerpotenzen", "Multiplikation"]
  ),
  q(
    "ma-pool-034",
    "mathe-kap2",
    "In einem Dreieck mit Seiten a=3, b=4, c=5 liegt der rechte Winkel bei:",
    ["a", "b", "c", "keinem", "a und b"],
    2,
    "3²+4²=9+16=25=5², also rechter Winkel der Seite c gegenüber.",
    "leicht",
    ["Pythagoras", "rechtwinkliges Dreieck"]
  ),
  q(
    "ma-pool-035",
    "mathe-kap5",
    "log₁₀(1000) =",
    ["2", "3", "10", "1", "100"],
    1,
    "10³ = 1000, also log₁₀(1000) = 3.",
    "leicht",
    ["Logarithmus", "Zehnerlogarithmus"]
  ),
  q(
    "ma-pool-036",
    "mathe-kap1",
    "100 nm in Metern:",
    ["10⁻⁷", "10⁻⁹", "10⁻¹⁰", "10⁻⁸", "10⁻⁶"],
    0,
    "nano = 10⁻⁹, 100 nm = 100·10⁻⁹ m = 10²·10⁻⁹ = 10⁻⁷ m.",
    "leicht",
    ["Einheiten", "nano", "Länge"]
  ),
  q(
    "ma-pool-037",
    "mathe-kap2",
    "Der Umfang eines Rechtecks mit Fläche 24 cm² und einer Seite 6 cm beträgt:",
    ["10 cm", "20 cm", "12 cm", "24 cm", "18 cm"],
    1,
    "Andere Seite = 24/6 = 4 cm. Umfang = 2·(6+4) = 20 cm.",
    "mittel",
    ["Rechteck", "Umfang", "Fläche"]
  ),
  q(
    "ma-pool-038",
    "mathe-kap5",
    "Die Ableitung von f(x) = x³ an der Stelle x = 2 ist:",
    ["4", "12", "6", "8", "3"],
    1,
    "f'(x) = 3x², f'(2) = 3·4 = 12.",
    "mittel",
    ["Ableitung", "Potenzregel"]
  ),
  q(
    "ma-pool-039",
    "mathe-kap1",
    "10⁻⁵ + 10⁻⁵ =",
    ["2·10⁻⁵", "10⁻¹⁰", "10⁻⁵", "20·10⁻⁵", "10⁻⁴"],
    0,
    "Gleicher Exponent: Vorfaktoren addieren: 1·10⁻⁵ + 1·10⁻⁵ = 2·10⁻⁵.",
    "leicht",
    ["Zehnerpotenzen", "Addition"]
  ),
  q(
    "ma-pool-040",
    "mathe-kap2",
    "Ein Würfel mit Kantenlänge 4 cm hat das Volumen:",
    ["16 cm³", "64 cm³", "12 cm³", "48 cm³", "96 cm³"],
    1,
    "V = a³ = 4³ = 64 cm³.",
    "leicht",
    ["Würfel", "Volumen"]
  ),
  q(
    "ma-pool-041",
    "mathe-kap5",
    "Welche Gerade ist parallel zu y = 3x − 1?",
    ["y = −3x + 1", "y = 3x + 5", "y = x/3 + 1", "y = −x/3", "y = 6x − 2"],
    1,
    "Parallel gleiche Steigung: m = 3. Nur y = 3x + 5 hat Steigung 3.",
    "leicht",
    ["Gerade", "parallel", "Steigung"]
  ),
  q(
    "ma-pool-042",
    "mathe-kap1",
    "1 μg (Mikrogramm) in Gramm:",
    ["10⁻⁶ g", "10⁻⁹ g", "10⁻³ g", "10⁻¹² g", "10⁻⁶ kg"],
    0,
    "Mikro = 10⁻⁶, also 1 μg = 10⁻⁶ g.",
    "leicht",
    ["Einheiten", "Masse", "Mikrogramm"]
  ),
  q(
    "ma-pool-043",
    "mathe-kap2",
    "Die Diagonale eines Quadrats mit Seite s hat die Länge:",
    ["s", "s√2", "2s", "s/√2", "s²"],
    1,
    "Diagonale = s√2 (Pythagoras: d² = s² + s² = 2s²).",
    "leicht",
    ["Quadrat", "Diagonale", "Pythagoras"]
  ),
  q(
    "ma-pool-044",
    "mathe-kap5",
    "e^(ln 5) =",
    ["5", "e", "ln 5", "e⁵", "1"],
    0,
    "e^(ln x) = x für x > 0, also e^(ln 5) = 5.",
    "leicht",
    ["Exponential", "Logarithmus", "e"]
  ),
  q(
    "ma-pool-045",
    "mathe-kap1",
    "Wie oft passt 10⁻⁹ in 10⁻⁶?",
    ["10³", "10⁻³", "10⁻¹⁵", "10⁶", "10⁹"],
    0,
    "10⁻⁶/10⁻⁹ = 10^(−6−(−9)) = 10³.",
    "leicht",
    ["Zehnerpotenzen", "Verhältnis"]
  ),
  q(
    "ma-pool-046",
    "mathe-kap2",
    "Ein Dreieck mit Grundlinie 10 und Höhe 4 hat die Fläche:",
    ["14", "20", "40", "5", "28"],
    1,
    "A = (1/2)·10·4 = 20.",
    "leicht",
    ["Dreieck", "Fläche"]
  ),
  q(
    "ma-pool-047",
    "mathe-kap5",
    "Die Mitternachtsformel x = (−b ± √(b²−4ac))/(2a) löst:",
    [
      "lineare Gleichungen",
      "quadratische Gleichungen",
      "Wurzelgleichungen",
      "exponentielle Gleichungen",
      "logarithmische Gleichungen",
    ],
    1,
    "Mitternachtsformel löst ax² + bx + c = 0.",
    "leicht",
    ["quadratische Gleichung", "Mitternachtsformel"]
  ),
  q(
    "ma-pool-048",
    "mathe-kap1",
    "0,000 04 in Zehnerpotenz (normalisiert):",
    ["4·10⁻⁴", "4·10⁻⁵", "0,4·10⁻⁴", "40·10⁻⁶", "4·10⁻⁶"],
    1,
    "0,00004 = 4·10⁻⁵.",
    "leicht",
    ["Zehnerpotenzen"]
  ),
  q(
    "ma-pool-049",
    "mathe-kap2",
    "Der Umfang eines Kreises mit Radius r ist:",
    ["πr²", "2πr", "πr", "2r", "4πr"],
    1,
    "Umfang Kreis U = 2πr. πr² ist die Fläche.",
    "leicht",
    ["Kreis", "Umfang"]
  ),
  q(
    "ma-pool-050",
    "mathe-kap5",
    "f(x) = 2x − 6. Der y-Achsenabschnitt ist:",
    ["2", "−6", "3", "6", "−3"],
    1,
    "y-Achsenabschnitt = f(0) = −6.",
    "leicht",
    ["lineare Funktion", "Achsenabschnitt"]
  ),
  q(
    "ma-pool-051",
    "mathe-kap1",
    "1 Liter = ? Kubikdezimeter",
    ["1", "10", "100", "0,1", "1000"],
    0,
    "1 L = 1 dm³ = 1000 cm³.",
    "leicht",
    ["Volumen", "Liter"]
  ),
  q(
    "ma-pool-052",
    "mathe-kap2",
    "Ein Trapez mit parallelen Seiten 5 und 7 und Höhe 4 hat die Fläche:",
    ["12", "24", "48", "20", "14"],
    1,
    "A = (a+c)/2 · h = (5+7)/2 · 4 = 6·4 = 24.",
    "mittel",
    ["Trapez", "Fläche"]
  ),
  q(
    "ma-pool-053",
    "mathe-kap5",
    "ln(e²) =",
    ["e", "2", "e²", "ln 2", "1"],
    1,
    "ln(e²) = 2·ln(e) = 2·1 = 2.",
    "leicht",
    ["Logarithmus", "e"]
  ),
  q(
    "ma-pool-054",
    "mathe-kap1",
    "Femto (f) =",
    ["10⁻¹²", "10⁻¹⁵", "10⁻¹⁸", "10⁻⁹", "10⁻⁶"],
    1,
    "Femto = 10⁻¹⁵. Pico = 10⁻¹², Atto = 10⁻¹⁸.",
    "leicht",
    ["SI-Präfixe"]
  ),
  q(
    "ma-pool-055",
    "mathe-kap2",
    "Ein Rechteck mit Umfang 20 und einer Seite 6 hat die andere Seite:",
    ["4", "8", "7", "14", "5"],
    0,
    "2·(6 + x) = 20 ⇒ 6 + x = 10 ⇒ x = 4.",
    "leicht",
    ["Rechteck", "Umfang"]
  ),
  q(
    "ma-pool-056",
    "mathe-kap5",
    "Die Diskriminante D = b² − 4ac einer quadratischen Gleichung ist negativ. Dann:",
    [
      "es gibt genau eine Lösung",
      "es gibt zwei gleiche Lösungen",
      "es gibt keine reelle Lösung",
      "es gibt unendlich viele Lösungen",
      "D ist immer positiv",
    ],
    2,
    "D < 0 ⇒ keine reellen Nullstellen (Parabel schneidet x-Achse nicht).",
    "mittel",
    ["quadratische Gleichung", "Diskriminante"]
  ),
  q(
    "ma-pool-057",
    "mathe-kap1",
    "5·10³ + 3·10³ =",
    ["8·10³", "15·10⁶", "8·10⁶", "5,3·10³", "10⁶"],
    0,
    "Gleicher Exponent: Vorfaktoren addieren: 5+3 = 8, also 8·10³.",
    "leicht",
    ["Zehnerpotenzen"]
  ),
  q(
    "ma-pool-058",
    "mathe-kap2",
    "Das Volumen eines Zylinders mit Radius r und Höhe h ist:",
    ["2πrh", "πr²h", "πr²+h", "2πr²h", "πrh"],
    1,
    "Zylindervolumen V = πr²h (Grundfläche · Höhe).",
    "leicht",
    ["Zylinder", "Volumen"]
  ),
  q(
    "ma-pool-059",
    "mathe-kap5",
    "Welche Funktion beschreibt eine Gerade mit Steigung 0?",
    ["f(x) = x", "f(x) = 0", "f(x) = k (Konstante)", "f(x) = x²", "f(x) = 1/x"],
    2,
    "Steigung 0 ⇒ horizontale Gerade ⇒ f(x) = k konstant.",
    "leicht",
    ["lineare Funktion", "Steigung"]
  ),
  q(
    "ma-pool-060",
    "mathe-kap1",
    "1 kg = ? Gramm",
    ["10³", "10⁶", "10²", "10⁻³", "1"],
    0,
    "Kilo = 10³, also 1 kg = 10³ g.",
    "leicht",
    ["Einheiten", "Masse"]
  ),
  q(
    "ma-pool-061",
    "mathe-kap2",
    "Ein regelmäßiges Sechseck mit Seite s hat den Flächeninhalt:",
    ["6s²", "(3√3/2)s²", "3s²", "s²√3", "6s"],
    1,
    "Fläche regelmäßiges Sechseck = (3√3/2)·s².",
    "schwer",
    ["Sechseck", "Fläche", "Geometrie"]
  ),
  q(
    "ma-pool-062",
    "mathe-kap5",
    "Die Ableitung von f(x) = 1/x (x ≠ 0) ist:",
    ["1/x²", "−1/x²", "ln x", "−1/x", "x⁻²"],
    1,
    "f(x) = x⁻¹ ⇒ f'(x) = −x⁻² = −1/x².",
    "mittel",
    ["Ableitung", "Potenzregel"]
  ),
  q(
    "ma-pool-063",
    "mathe-kap1",
    "10⁸ / 10² =",
    ["10⁶", "10⁴", "10¹⁰", "10⁸/²", "10⁴"],
    0,
    "Division: Exponenten subtrahieren. 8 − 2 = 6.",
    "leicht",
    ["Zehnerpotenzen"]
  ),
  q(
    "ma-pool-064",
    "mathe-kap2",
    "Sinus eines Winkels im rechtwinkligen Dreieck:",
    [
      "Ankathete/Hypotenuse",
      "Gegenkathete/Hypotenuse",
      "Gegenkathete/Ankathete",
      "Hypotenuse/Gegenkathete",
      "Ankathete/Gegenkathete",
    ],
    1,
    "sin(α) = Gegenkathete / Hypotenuse.",
    "leicht",
    ["Sinus", "Trigonometrie"]
  ),
  q(
    "ma-pool-065",
    "mathe-kap5",
    "f(x) = (x−2)² hat den Scheitel bei:",
    ["(2|0)", "(−2|0)", "(0|4)", "(0|−4)", "(−2|4)"],
    0,
    "Scheitelform (x−2)² ⇒ Scheitel (2|0).",
    "leicht",
    ["Parabel", "Scheitelpunkt"]
  ),
  q(
    "ma-pool-066",
    "mathe-kap1",
    "2,5·10⁻⁴ in Dezimalform:",
    ["0,00025", "0,025", "0,0025", "25000", "0,000025"],
    0,
    "2,5·10⁻⁴ = 2,5·0,0001 = 0,00025.",
    "leicht",
    ["Zehnerpotenzen", "Dezimal"]
  ),
  q(
    "ma-pool-067",
    "mathe-kap2",
    "Cosinus im rechtwinkligen Dreieck:",
    [
      "Gegenkathete/Hypotenuse",
      "Ankathete/Hypotenuse",
      "Gegenkathete/Ankathete",
      "Hypotenuse/Ankathete",
      "Ankathete/Gegenkathete",
    ],
    1,
    "cos(α) = Ankathete / Hypotenuse.",
    "leicht",
    ["Cosinus", "Trigonometrie"]
  ),
  q(
    "ma-pool-068",
    "mathe-kap5",
    "Die quadratische Gleichung x² − 5x + 6 = 0 hat die Lösungen:",
    [
      "x = 2 und x = 3",
      "x = −2 und x = −3",
      "x = 1 und x = 6",
      "x = 0 und x = 5",
      "keine reelle Lösung",
    ],
    0,
    "x²−5x+6 = (x−2)(x−3) = 0 ⇒ x = 2 oder x = 3.",
    "leicht",
    ["quadratische Gleichung", "Faktorisierung"]
  ),
  q(
    "ma-pool-069",
    "mathe-kap1",
    "Teragramm (Tg) in kg: 1 Tg =",
    ["10⁹ kg", "10⁶ kg", "10¹² kg", "10³ kg", "10⁻⁹ kg"],
    0,
    "Tera = 10¹², 1 Tg = 10¹² g = 10⁹ kg.",
    "mittel",
    ["SI-Präfixe", "Tera"]
  ),
  q(
    "ma-pool-070",
    "mathe-kap2",
    "Ein Prisma mit Grundfläche G und Höhe h hat das Volumen:",
    ["G·h", "2G·h", "G+h", "G/h", "G·h/2"],
    0,
    "Prismenvolumen V = G·h.",
    "leicht",
    ["Prisma", "Volumen"]
  ),
  q(
    "ma-pool-071",
    "mathe-kap5",
    "log(a·b) = (für passende Basis):",
    ["log a · log b", "log a + log b", "log a − log b", "(log a)/(log b)", "log(a+b)"],
    1,
    "Rechenregel: log(a·b) = log a + log b.",
    "leicht",
    ["Logarithmus", "Rechenregeln"]
  ),
  q(
    "ma-pool-072",
    "mathe-kap1",
    "1 ml = ? Liter",
    ["10⁻³", "10⁻⁶", "1", "10³", "10⁻¹"],
    0,
    "Milli = 10⁻³, 1 ml = 10⁻³ L.",
    "leicht",
    ["Volumen", "Liter", "ml"]
  ),
  q(
    "ma-pool-073",
    "mathe-kap2",
    "Tangens(α) im rechtwinkligen Dreieck:",
    [
      "Ankathete/Hypotenuse",
      "Gegenkathete/Ankathete",
      "Gegenkathete/Hypotenuse",
      "Hypotenuse/Gegenkathete",
      "sin/cos",
    ],
    1,
    "tan(α) = Gegenkathete / Ankathete = sin/cos.",
    "leicht",
    ["Tangens", "Trigonometrie"]
  ),
  q(
    "ma-pool-074",
    "mathe-kap5",
    "Die Nullstellen von f(x) = x² − 9 sind:",
    ["x = 3 und x = −3", "x = 9 und x = −9", "x = 0", "nur x = 3", "keine"],
    0,
    "x²−9 = 0 ⇒ x² = 9 ⇒ x = ±3.",
    "leicht",
    ["quadratische Funktion", "Nullstelle"]
  ),
  q(
    "ma-pool-075",
    "mathe-kap1",
    "10⁰ =",
    ["0", "1", "10", "nicht definiert", "−1"],
    1,
    "Jede Zahl (außer 0) hoch 0 ergibt 1. 10⁰ = 1.",
    "leicht",
    ["Zehnerpotenzen"]
  ),
  q(
    "ma-pool-076",
    "mathe-kap2",
    "Oberfläche einer Kugel mit Radius r:",
    ["4πr²", "(4/3)πr³", "2πr", "πr²", "4πr"],
    0,
    "Kugeloberfläche O = 4πr². (4/3)πr³ ist das Volumen.",
    "mittel",
    ["Kugel", "Oberfläche"]
  ),
  q(
    "ma-pool-077",
    "mathe-kap5",
    "f(x) = −x² + 4. Maximum von f liegt bei:",
    ["x = 0", "x = 2", "x = −2", "x = 4", "keinem (Minimum)"],
    0,
    "Parabel nach unten geöffnet, Scheitel (0|4) ist Maximum.",
    "mittel",
    ["Parabel", "Extremum"]
  ),
  q(
    "ma-pool-078",
    "mathe-kap1",
    "1 mg in Kilogramm:",
    ["10⁻⁶", "10⁻³", "10⁻⁹", "10⁶", "10³"],
    0,
    "milli = 10⁻³, 1 mg = 10⁻³ g = 10⁻⁶ kg.",
    "leicht",
    ["Einheiten", "Masse"]
  ),
  q(
    "ma-pool-079",
    "mathe-kap2",
    "Gleichseitiges Dreieck mit Seite a: Höhe h =",
    ["a", "a/2", "a·√3/2", "a·√2", "a²"],
    2,
    "Im gleichseitigen Dreieck: h = a·√3/2.",
    "mittel",
    ["gleichseitiges Dreieck", "Höhe"]
  ),
  q(
    "ma-pool-080",
    "mathe-kap5",
    "log(a/b) =",
    ["log a − log b", "log a + log b", "(log a)/(log b)", "log a · log b", "log(a−b)"],
    0,
    "Rechenregel: log(a/b) = log a − log b.",
    "leicht",
    ["Logarithmus"]
  ),
  q(
    "ma-pool-081",
    "mathe-kap1",
    "(10²)³ =",
    ["10⁵", "10⁶", "10⁸", "10⁹", "10²³"],
    1,
    "Potenzieren: Exponenten multiplizieren. 2·3 = 6, also 10⁶.",
    "leicht",
    ["Zehnerpotenzen", "Potenzgesetze"]
  ),
  q(
    "ma-pool-082",
    "mathe-kap2",
    "Pyramide mit Grundfläche G und Höhe h: Volumen V =",
    ["G·h", "G·h/3", "G·h/2", "2G·h", "G+h"],
    1,
    "Pyramidenvolumen V = (1/3)·G·h.",
    "mittel",
    ["Pyramide", "Volumen"]
  ),
  q(
    "ma-pool-083",
    "mathe-kap5",
    "Ableitung von f(x) = e^x:",
    ["x·e^(x−1)", "e^x", "e^x/x", "e", "ln x"],
    1,
    "Die Ableitung von e^x ist e^x.",
    "mittel",
    ["Ableitung", "Exponentialfunktion"]
  ),
  q(
    "ma-pool-084",
    "mathe-kap1",
    "Konzentration 0,5 mol/L = ? mmol/L",
    ["500", "5·10²", "0,0005", "5", "50"],
    0,
    "0,5 mol/L = 500 mmol/L = 5·10² mmol/L.",
    "leicht",
    ["Konzentration", "Einheiten"]
  ),
  q(
    "ma-pool-085",
    "mathe-kap2",
    "Ein Winkel von 90° entspricht in Bogenmaß:",
    ["π/2", "π", "2π", "π/4", "1"],
    0,
    "90° = π/2 rad.",
    "leicht",
    ["Winkel", "Bogenmaß"]
  ),
  q(
    "ma-pool-086",
    "mathe-kap5",
    "Schnittpunkt der Geraden y = 2x + 1 und y = −x + 4:",
    ["(1|3)", "(3|1)", "(0|4)", "(2|5)", "(−1|2)"],
    0,
    "Gleichsetzen: 2x+1 = −x+4 ⇒ 3x = 3 ⇒ x = 1, y = 3.",
    "mittel",
    ["Geraden", "Schnittpunkt"]
  ),
  q(
    "ma-pool-087",
    "mathe-kap1",
    "Giga (G) =",
    ["10⁶", "10⁹", "10¹²", "10⁻⁹", "10³"],
    1,
    "Giga = 10⁹. Mega = 10⁶, Tera = 10¹².",
    "leicht",
    ["SI-Präfixe"]
  ),
  q(
    "ma-pool-088",
    "mathe-kap2",
    "Ein Rhombus mit Diagonalen e und f hat die Fläche:",
    ["e·f", "e·f/2", "2(e+f)", "(e+f)/2", "e²+f²"],
    1,
    "Fläche Rhombus A = (e·f)/2.",
    "mittel",
    ["Rhombus", "Fläche"]
  ),
  q(
    "ma-pool-089",
    "mathe-kap5",
    "log₁₀(0,01) =",
    ["−2", "2", "0,01", "−1", "1"],
    0,
    "10⁻² = 0,01, also log₁₀(0,01) = −2.",
    "leicht",
    ["Logarithmus"]
  ),
  q(
    "ma-pool-090",
    "mathe-kap1",
    "1 km in Metern:",
    ["10³", "10⁶", "10²", "10⁻³", "1"],
    0,
    "Kilo = 10³, 1 km = 10³ m.",
    "leicht",
    ["Länge", "Einheiten"]
  ),
  q(
    "ma-pool-091",
    "mathe-kap2",
    "Ein Kegel mit Radius r und Höhe h hat das Volumen:",
    ["πr²h", "πr²h/3", "2πr²h", "πrh", "πr²+h"],
    1,
    "Kegelvolumen V = (1/3)·π·r²·h.",
    "mittel",
    ["Kegel", "Volumen"]
  ),
  q(
    "ma-pool-092",
    "mathe-kap5",
    "Welche Aussage zu f(x) = |x| ist falsch?",
    [
      "f(0) = 0",
      "f ist stetig",
      "f hat ein Minimum bei 0",
      "f ist überall differenzierbar",
      "f(x) ≥ 0 für alle x",
    ],
    3,
    "|x| ist bei x = 0 nicht differenzierbar (Knick).",
    "mittel",
    ["Betrag", "Differenzierbarkeit"]
  ),
  q(
    "ma-pool-093",
    "mathe-kap1",
    "0,001 in Zehnerpotenz:",
    ["10⁻²", "10⁻³", "10⁻⁴", "10³", "10²"],
    1,
    "0,001 = 1/1000 = 10⁻³.",
    "leicht",
    ["Zehnerpotenzen"]
  ),
  q(
    "ma-pool-094",
    "mathe-kap2",
    "Ein Kreis mit Umfang 10π hat den Radius:",
    ["5", "10", "10π", "5π", "2π"],
    0,
    "U = 2πr = 10π ⇒ r = 5.",
    "leicht",
    ["Kreis", "Umfang", "Radius"]
  ),
  q(
    "ma-pool-095",
    "mathe-kap5",
    "Die Funktion f(x) = 1/x hat:",
    [
      "eine Nullstelle bei 0",
      "eine Nullstelle bei 1",
      "keine Nullstelle",
      "zwei Nullstellen",
      "unendlich viele Nullstellen",
    ],
    2,
    "1/x = 0 hat keine Lösung (1/x ≠ 0 für alle x ≠ 0).",
    "leicht",
    ["Funktion", "Nullstelle"]
  ),
  q(
    "ma-pool-096",
    "mathe-kap1",
    "Mega (M) =",
    ["10⁶", "10³", "10⁹", "10⁻⁶", "10¹²"],
    0,
    "Mega = 10⁶. Kilo = 10³, Giga = 10⁹.",
    "leicht",
    ["SI-Präfixe"]
  ),
  q(
    "ma-pool-097",
    "mathe-kap2",
    "Ein Parallelogramm mit Grundseite g und Höhe h hat die Fläche:",
    ["g+h", "g·h", "2(g+h)", "g·h/2", "g²+h²"],
    1,
    "Parallelogrammfläche A = g·h.",
    "leicht",
    ["Parallelogramm", "Fläche"]
  ),
  q(
    "ma-pool-098",
    "mathe-kap5",
    "Ableitung von f(x) = ln(x) (x > 0):",
    ["1/x", "x", "e^x", "1/e^x", "−1/x"],
    0,
    "Die Ableitung von ln(x) ist 1/x.",
    "mittel",
    ["Ableitung", "Logarithmus"]
  ),
  q(
    "ma-pool-099",
    "mathe-kap1",
    "2·10⁻³ + 3·10⁻³ =",
    ["5·10⁻³", "6·10⁻⁶", "5·10⁻⁶", "10⁻³", "2,3·10⁻³"],
    0,
    "Gleicher Exponent: 2+3 = 5 ⇒ 5·10⁻³.",
    "leicht",
    ["Zehnerpotenzen"]
  ),
  q(
    "ma-pool-100",
    "mathe-kap2",
    "Ein rechtwinkliges Dreieck mit Hypotenuse 10 und einer Kathete 6 hat die andere Kathete:",
    ["8", "4", "√136", "14", "2"],
    0,
    "Nach Pythagoras: x² + 6² = 10² ⇒ x² = 64 ⇒ x = 8.",
    "leicht",
    ["Pythagoras", "Dreieck"]
  ),
];
