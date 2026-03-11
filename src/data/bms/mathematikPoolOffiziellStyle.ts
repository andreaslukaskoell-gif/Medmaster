/**
 * Mathematik BMS — offizielle MedAT-Stil-Fragen (an Prüfungsformat angelehnt).
 * Stoff: mathe-kap1 (Zahlen & Einheiten), mathe-kap2 (Algebra & Geometrie), mathe-kap5 (Funktionen), mathe-kap6 (Vektoren).
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

export const mathematikPoolOffiziellStyle: Question[] = [
  q(
    "ma-off-001",
    "mathe-kap5",
    "Eine Steigungsangabe bei einer Straße lautet 16 %. Dies bedeutet, dass man bei einer horizontalen Wegstrecke von 100 m eine Höhendifferenz von 16 m überwindet. Welcher Winkelfunktion im Dreieck entspricht diese Angabe?",
    ["Cotangens", "keiner", "Cosinus", "Sinus", "Tangens"],
    4,
    "Steigung = Höhendifferenz / horizontale Strecke = Gegenkathete / Ankathete = tan(α). 16 % entspricht dem Tangens des Steigungswinkels.",
    "leicht",
    ["Trigonometrie", "Tangens", "Steigung"]
  ),
  q(
    "ma-off-004",
    "mathe-kap5",
    "Der Herzschlag eines Patienten verlangsamt sich um a Schläge pro Minute. Der Ruhepuls beträgt f_Ruhe Schläge pro Minute. Ein Medikament beschleunigt den Herzschlag quadratisch mit Faktor b pro Minute. f(t) = f_Ruhe − a·t + b·t². Nach welcher Zeit tritt die minimale Herzfrequenz auf?",
    [
      "Nach t = a/(2b) Minuten.",
      "Nach t = a/b² Minuten.",
      "Nach t = a/b Minuten.",
      "Nach t = a²/b Minuten.",
      "Nach t = 2a/b Minuten.",
    ],
    0,
    "Minimum von f(t): f'(t) = −a + 2b·t = 0 ⇒ t = a/(2b).",
    "mittel",
    ["Ableitung", "Extremum", "quadratische Funktion"]
  ),
  q(
    "ma-off-005",
    "mathe-kap2",
    "Gegeben ist: a = b/c und d = a⁻¹. Was ist richtig?",
    ["d = a⁻ᵈ", "d = a", "d = b/c", "d = b − c", "d = c/b"],
    4,
    "d = a⁻¹ = 1/a = 1/(b/c) = c/b.",
    "leicht",
    ["Bruchrechnung", "Kehrwert", "Algebra"]
  ),
  q(
    "ma-off-007",
    "mathe-kap2",
    "Gibt man zu einer Zahl zwei Drittel ihrer selbst dazu und nimmt davon ein Drittel dieser Summe wieder weg, so bleibt 10. Wie lautet die Zahl?",
    ["9", "10 1/3", "6,66", "15", "8"],
    0,
    "Zahl x. Summe: x + (2/3)x = (5/3)x. Ein Drittel weg: (2/3)·(5/3)x = (10/9)x = 10 ⇒ x = 9.",
    "mittel",
    ["Bruchrechnung", "Gleichung", "Algebra"]
  ),
  q(
    "ma-off-009",
    "mathe-kap2",
    "Ein zylinderförmiger Muskel mit Länge l und Durchmesser d verkürzt sich bei Anspannung um 30 %. Das Volumen bleibt konstant. Wie verändert sich der Durchmesser D des angespannten Muskels?",
    [
      "D steigt um 83,66 %.",
      "D steigt um 19,52 %.",
      "D steigt um 82,57 %.",
      "D steigt um 39,05 %.",
      "D steigt um 54,77 %.",
    ],
    1,
    "V = π(d/2)²·l konstant. Neue Länge l' = 0,7·l ⇒ (D/2)²·0,7 = (d/2)² ⇒ D/d = 1/√0,7 ≈ 1,195 ⇒ D steigt um etwa 19,5 %.",
    "schwer",
    ["Zylinder", "Volumen", "Geometrie"]
  ),
  q(
    "ma-off-010",
    "mathe-kap5",
    "Welche Kurve gibt die Funktion y = −x² − 5 an? (Ohne Abbildung: nach unten geöffnete Parabel mit Scheitel (0; −5).)",
    ["Kurve a", "Kurve b", "Kurve c", "Kurve d", "Keine der gezeigten Kurven."],
    4,
    "y = −x² − 5 ist eine nach unten geöffnete Parabel mit Scheitel (0; −5). Ohne Abbildung kann die Zuordnung nicht bestimmt werden; typisch ist E, wenn keine passende Kurve gezeigt wird.",
    "leicht",
    ["Parabel", "quadratische Funktion"]
  ),
  q(
    "ma-off-012",
    "mathe-kap2",
    "Wie berechnet sich das Volumen V eines dreidimensionalen Quaders mit den Kantenlängen a, b und c?",
    ["V = 2·(a·b + a·c + b·c)", "V = a·b·c", "V = 2·a·b·c", "V = (a+b+c)³", "V = a + b + c"],
    1,
    "Volumen Quader = Länge · Breite · Höhe = a·b·c. 2·(a·b+a·c+b·c) ist die Oberfläche.",
    "leicht",
    ["Quader", "Volumen", "Geometrie"]
  ),
];
