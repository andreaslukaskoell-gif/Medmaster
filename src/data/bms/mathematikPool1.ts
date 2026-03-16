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
    "Für welche Zahl steht das Präfix \"pico\"?",
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
];
