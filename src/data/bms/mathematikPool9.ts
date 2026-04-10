/**
 * Mathematik BMS Pool 9 — 70 Fragen im MedAT-Stil (Typ A).
 * Stoff: mathe-kap2 (Algebra, Geometrie, Prozent, Volumen),
 *        mathe-kap6 (Vektoren, Skalarprodukt, Koordinaten),
 *        (mathe-kap7 Stochastik archived — not in MedAT 2026).
 * Verteilung: 28 leicht / 28 mittel / 14 schwer
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

export const mathematikPool9: Question[] = [
  // ── mathe-kap2: Algebra, Geometrie, Prozent, Flächen/Volumen ─────────────

  q(
    "ma-pool-9-001",
    "mathe-kap2",
    "Ein Medikament liegt in einer Konzentration von 250 mg pro 5 ml Lösung vor. Eine Krankenschwester soll 375 mg verabreichen. Welches Volumen muss sie aufziehen?",
    ["5,0 ml", "6,0 ml", "7,5 ml", "8,0 ml", "10,0 ml"],
    2,
    "250 mg entsprechen 5 ml, also 1 mg = 0,02 ml. 375 mg · 0,02 ml/mg = 7,5 ml.",
    "mittel",
    ["Dreisatz", "Konzentration", "Medikamentendosierung"]
  ),

  q(
    "ma-pool-9-002",
    "mathe-kap2",
    "Die Blutalkoholkonzentration eines Patienten sinkt linear von 1,8 ‰ auf 0,0 ‰ innerhalb von 12 Stunden. Mit welcher Rate (in ‰/h) sinkt der Alkoholspiegel?",
    ["0,10 ‰/h", "0,12 ‰/h", "0,15 ‰/h", "0,18 ‰/h", "0,20 ‰/h"],
    2,
    "Abbaurate = 1,8 ‰ / 12 h = 0,15 ‰/h. Dies entspricht dem bekannten durchschnittlichen Alkoholabbau des menschlichen Körpers.",
    "mittel",
    ["Algebra", "Steigung", "Blutalkohol"]
  ),

  q(
    "ma-pool-9-003",
    "mathe-kap2",
    "Ein Tumor hat initial ein Volumen von 2 cm³ und verdoppelt sich alle 90 Tage. Welches Volumen hat der Tumor nach 270 Tagen?",
    ["6 cm³", "8 cm³", "12 cm³", "16 cm³", "18 cm³"],
    3,
    "Nach 270 Tagen = 3 Verdopplungsperioden: V = 2 · 2³ = 2 · 8 = 16 cm³.",
    "mittel",
    ["Exponentialwachstum", "Potenz", "Tumorwachstum"]
  ),

  q(
    "ma-pool-9-004",
    "mathe-kap2",
    "Ein rechteckiger Operationssaal hat die Maße 8 m × 6 m. Der Saal soll durch einen neuen Anbau um 25 % seiner Fläche vergrößert werden. Wie groß ist die neue Gesamtfläche?",
    ["48 m²", "54 m²", "60 m²", "66 m²", "72 m²"],
    2,
    "Ausgangsfläche: 8 · 6 = 48 m². Neue Fläche: 48 · 1,25 = 60 m².",
    "mittel",
    ["Fläche", "Prozent", "Rechteck"]
  ),

  q(
    "ma-pool-9-005",
    "mathe-kap2",
    "Ein Patient nimmt täglich eine Tablette mit 500 mg Wirkstoff. Nach 4 Wochen wird die Dosis um 20 % reduziert. Wie viel mg nimmt er in den nächsten 4 Wochen täglich?",
    ["350 mg", "375 mg", "400 mg", "420 mg", "450 mg"],
    2,
    "500 mg · (1 − 0,20) = 500 · 0,80 = 400 mg pro Tag.",
    "mittel",
    ["Prozentrechnung", "Dosierung", "Algebra"]
  ),

  q(
    "ma-pool-9-006",
    "mathe-kap2",
    "Ein zylindrischer Infusionsbeutel hat einen Radius von 5 cm und eine Höhe von 20 cm. Wie groß ist sein Volumen in Litern? (π ≈ 3,14)",
    ["1,257 l", "1,414 l", "1,571 l", "1,885 l", "2,000 l"],
    2,
    "V = π · r² · h = 3,14 · 25 · 20 = 1570 cm³ = 1,570 l ≈ 1,571 l.",
    "mittel",
    ["Zylinder", "Volumen", "Geometrie"]
  ),

  q(
    "ma-pool-9-007",
    "mathe-kap2",
    "Lösen Sie das Gleichungssystem: 2x + y = 14 und x − y = 1. Welche Werte haben x und y?",
    ["x = 4, y = 6", "x = 5, y = 4", "x = 6, y = 2", "x = 7, y = 0", "x = 3, y = 8"],
    1,
    "Addition der Gleichungen: 3x = 15 ⇒ x = 5. Einsetzen: y = 14 − 2·5 = 4.",
    "mittel",
    ["Gleichungssystem", "Algebra"]
  ),

  q(
    "ma-pool-9-008",
    "mathe-kap2",
    "In einer Studie haben 180 von 400 Teilnehmern eine bestimmte Vorerkrankung. Wie viel Prozent der Teilnehmer sind vorerkrankt?",
    ["36 %", "40 %", "42 %", "45 %", "50 %"],
    3,
    "180 / 400 = 0,45 = 45 %.",
    "mittel",
    ["Prozentrechnung", "Epidemiologie"]
  ),

  q(
    "ma-pool-9-009",
    "mathe-kap2",
    "Ein quaderförmiger Sterilisationsbehälter hat Kantenlängen 30 cm × 20 cm × 15 cm. Wie viel Liter fasst er?",
    ["6 l", "7 l", "8 l", "9 l", "10 l"],
    3,
    "V = 30 · 20 · 15 = 9 000 cm³ = 9 l.",
    "leicht",
    ["Quader", "Volumen", "Einheiten"]
  ),

  q(
    "ma-pool-9-010",
    "mathe-kap2",
    "Vereinfachen Sie: (3x² · 2x³) / (6x⁴). Welcher Ausdruck ist äquivalent?",
    ["x²", "x", "x³", "2x", "3x"],
    1,
    "(3·2·x^(2+3)) / (6·x⁴) = 6x⁵ / (6x⁴) = x.",
    "leicht",
    ["Algebra", "Potenzgesetze", "Vereinfachung"]
  ),

  q(
    "ma-pool-9-011",
    "mathe-kap2",
    "Ein kreisförmiges Wundpflaster hat einen Durchmesser von 6 cm. Ein zweites Pflaster hat denselben Radius, aber eine quadratische Form mit Seitenlänge 6 cm. Um wie viel Prozent ist die Fläche des quadratischen Pflasters größer als die des runden? (π ≈ 3,14)",
    ["17 %", "21 %", "27 %", "33 %", "38 %"],
    2,
    "Kreisfläche: π·3² ≈ 28,26 cm². Quadratfläche: 36 cm². Differenz: 7,74 cm². Anteil: 7,74/28,26 ≈ 27,4 %.",
    "mittel",
    ["Kreis", "Quadrat", "Fläche", "Prozent"]
  ),

  q(
    "ma-pool-9-012",
    "mathe-kap2",
    "Eine Kochsalzlösung wird von 8 % auf 2 % verdünnt. Dazu mischt man 100 ml der 8 %-Lösung mit reinem Wasser. Wie viel Milliliter Wasser müssen hinzugefügt werden?",
    ["200 ml", "300 ml", "400 ml", "500 ml", "600 ml"],
    1,
    "Mischungsregel: 100 · 8 % = (100 + V) · 2 %. 800 = 200 + 2V ⇒ 2V = 600 ⇒ V = 300 ml.",
    "mittel",
    ["Mischungsrechnung", "Prozent", "Lösungen"]
  ),

  q(
    "ma-pool-9-013",
    "mathe-kap2",
    "Lösen Sie das Gleichungssystem: 3x − 2y = 4 und x + y = 8. Was ergibt x?",
    ["2", "3", "4", "5", "6"],
    2,
    "Aus der zweiten Gleichung: y = 8 − x. Einsetzen: 3x − 2(8−x) = 4 ⇒ 5x = 20 ⇒ x = 4. Dann y = 4.",
    "leicht",
    ["Gleichungssystem", "Algebra"]
  ),

  q(
    "ma-pool-9-014",
    "mathe-kap2",
    "Ein rechteckiges Dreieck hat die Katheten 9 cm und 40 cm. Wie lang ist die Hypotenuse?",
    ["39 cm", "40 cm", "41 cm", "42 cm", "45 cm"],
    2,
    "c = √(9² + 40²) = √(81 + 1600) = √1681 = 41 cm.",
    "mittel",
    ["Pythagoras", "Dreieck", "Geometrie"]
  ),

  q(
    "ma-pool-9-015",
    "mathe-kap2",
    "Ein Patient wiegt 80 kg. Sein Arzt erhöht seine Medikamentendosis um 15 %, dann nochmals um 10 %. Wie viel Prozent beträgt die Gesamterhöhung gegenüber der Ausgangsdosis?",
    ["23,5 %", "24,5 %", "25,0 %", "26,5 %", "27,5 %"],
    3,
    "Gesamtfaktor: 1,15 · 1,10 = 1,265. Erhöhung: 26,5 %.",
    "schwer",
    ["Prozentrechnung", "Dosierung"]
  ),

  q(
    "ma-pool-9-016",
    "mathe-kap2",
    "Ein Kugelförmiger Gallenstein hat einen Durchmesser von 2 cm. Welches Volumen (in cm³) hat er? (π ≈ 3,14)",
    ["2,09 cm³", "3,14 cm³", "4,19 cm³", "6,28 cm³", "8,38 cm³"],
    2,
    "r = 1 cm. V = (4/3)·π·r³ = (4/3)·3,14·1 ≈ 4,19 cm³.",
    "leicht",
    ["Kugel", "Volumen", "Geometrie"]
  ),

  q(
    "ma-pool-9-017",
    "mathe-kap2",
    "Ein Krankenhaus kauft Spritzen zu je 0,80 € und verkauft sie intern zu 1,20 €. Wie hoch ist die prozentuale Marge (Aufschlag auf den Einkaufspreis)?",
    ["33 %", "40 %", "50 %", "55 %", "60 %"],
    2,
    "Aufschlag = (1,20 − 0,80) / 0,80 = 0,40 / 0,80 = 0,50 = 50 %.",
    "mittel",
    ["Prozentrechnung", "Kalkulation"]
  ),

  q(
    "ma-pool-9-018",
    "mathe-kap2",
    "In einem rechtwinkligen Dreieck mit Hypotenuse c = 13 cm und einer Kathete a = 5 cm beträgt die Fläche des Dreiecks:",
    ["25 cm²", "30 cm²", "32,5 cm²", "60 cm²", "65 cm²"],
    1,
    "b = √(13²−5²) = √(169−25) = √144 = 12 cm. A = (a·b)/2 = (5·12)/2 = 30 cm².",
    "mittel",
    ["Pythagoras", "Dreieck", "Flächenberechnung"]
  ),

  q(
    "ma-pool-9-019",
    "mathe-kap2",
    "Eine Lösung enthält 4 g Salz in 200 ml Wasser. Um die Konzentration auf 1,5 % (Masse/Volumen) zu bringen, muss man die Lösung mit Wasser auffüllen. Auf welches Gesamtvolumen muss aufgefüllt werden?",
    ["233 ml", "267 ml", "280 ml", "300 ml", "350 ml"],
    1,
    "Zielkonzentration: 1,5 g/100 ml = 4 g / V_gesamt ⇒ V = 4/0,015 ≈ 267 ml.",
    "mittel",
    ["Konzentration", "Mischung", "Dreisatz"]
  ),

  q(
    "ma-pool-9-020",
    "mathe-kap2",
    "Ein kegelförmiges Reagenzglas hat eine Höhe von 12 cm und einen Basisradius von 3 cm. Welches Volumen hat es in cm³? (π ≈ 3,14)",
    ["94,2 cm³", "113,0 cm³", "150,7 cm³", "226,1 cm³", "339,1 cm³"],
    1,
    "V_Kegel = (1/3)·π·r²·h = (1/3)·3,14·9·12 = 3,14·36 = 113,0 cm³.",
    "mittel",
    ["Kegel", "Volumen", "Geometrie"]
  ),

  q(
    "ma-pool-9-021",
    "mathe-kap2",
    "Wenn x² − 5x + 6 = 0 gilt, welche Lösungen hat diese quadratische Gleichung?",
    [
      "x = 1 und x = 6",
      "x = 2 und x = 3",
      "x = −2 und x = −3",
      "x = −1 und x = 6",
      "x = 0 und x = 5",
    ],
    1,
    "(x−2)(x−3) = 0 ⇒ x = 2 oder x = 3.",
    "leicht",
    ["Quadratische Gleichung", "Algebra"]
  ),

  q(
    "ma-pool-9-022",
    "mathe-kap2",
    "Die Körperoberfläche eines Erwachsenen wird nach Mosteller als A = √(Größe[cm] · Gewicht[kg] / 3600) berechnet. Ein Patient ist 180 cm groß und wiegt 80 kg. Welche Körperoberfläche hat er in m²?",
    ["1,80 m²", "1,90 m²", "2,00 m²", "2,10 m²", "2,20 m²"],
    2,
    "A = √(180·80/3600) = √(14400/3600) = √4 = 2,00 m².",
    "schwer",
    ["Quadratwurzel", "Körperoberfläche", "Medizin"]
  ),

  q(
    "ma-pool-9-023",
    "mathe-kap2",
    "Ein Dreieck hat die Seiten a = 6 cm, b = 8 cm und c = 10 cm. Handelt es sich um ein rechtwinkliges Dreieck? Wie groß ist seine Fläche?",
    ["Nein; 24 cm²", "Ja; 24 cm²", "Ja; 30 cm²", "Nein; 30 cm²", "Ja; 48 cm²"],
    1,
    "6² + 8² = 36 + 64 = 100 = 10² ✓ Rechtwinkliges Dreieck. A = (6·8)/2 = 24 cm².",
    "mittel",
    ["Pythagoras", "Dreieck", "Flächenberechnung"]
  ),

  q(
    "ma-pool-9-024",
    "mathe-kap2",
    "Ein Patient erhält täglich 0,5 mg/kg Körpergewicht eines Medikaments. Er wiegt 76 kg. Nach einer Woche wird die Dosis um 12 % gesenkt. Wie viel mg erhält er danach täglich?",
    ["31,5 mg", "33,4 mg", "34,0 mg", "35,0 mg", "36,8 mg"],
    1,
    "Ausgangsdosis: 0,5 · 76 = 38 mg. Neue Dosis: 38 · 0,88 = 33,44 mg ≈ 33,4 mg.",
    "schwer",
    ["Dosierung", "Prozent", "Algebra"]
  ),

  q(
    "ma-pool-9-025",
    "mathe-kap2",
    "Lösen Sie: 2(3x − 4) = 4(x + 2). Welchen Wert hat x?",
    ["x = 6", "x = 8", "x = 10", "x = 12", "x = 14"],
    1,
    "6x − 8 = 4x + 8 ⇒ 2x = 16 ⇒ x = 8. Probe: 2(24−4) = 40 = 4(8+2) ✓.",
    "leicht",
    ["Lineare Gleichung", "Algebra"]
  ),

  q(
    "ma-pool-9-026",
    "mathe-kap2",
    "Ein Blutgefäß hat einen kreisförmigen Querschnitt mit Durchmesser 4 mm. Ein Thrombus verengt den Querschnitt auf einen Durchmesser von 2 mm. Um wie viel Prozent nimmt die Durchströmungsfläche ab?",
    ["25 %", "50 %", "60 %", "75 %", "80 %"],
    3,
    "Fläche ∝ r². Original: r=2 mm → A₁=4π. Verengt: r=1 mm → A₂=π. Abnahme: (4π−π)/(4π) = 3/4 = 75 %.",
    "mittel",
    ["Kreis", "Fläche", "Prozent", "Thrombose"]
  ),

  q(
    "ma-pool-9-027",
    "mathe-kap2",
    "Ein Antibiotikum wird in einer Suspension mit 250 mg/5 ml angeboten. Ein Kind soll 15 mg/kg/Tag erhalten und wiegt 24 kg. Wie viel ml pro Tag erhält das Kind?",
    ["5,8 ml", "6,0 ml", "7,2 ml", "8,0 ml", "9,6 ml"],
    2,
    "Tagesdosis: 15·24 = 360 mg. Volumen: 360 mg · (5 ml / 250 mg) = 7,2 ml.",
    "mittel",
    ["Dreisatz", "Dosierung", "Pädiatrie"]
  ),

  q(
    "ma-pool-9-028",
    "mathe-kap2",
    "Wie viele Liter passen in eine kugelförmige Infusionsflasche mit Innenradius 8 cm? (π ≈ 3,14, gerundet auf eine Dezimalstelle)",
    ["1,5 l", "2,1 l", "2,6 l", "3,2 l", "4,0 l"],
    1,
    "V = (4/3)·π·8³ = (4/3)·3,14·512 ≈ 2143,6 cm³ ≈ 2,1 l.",
    "mittel",
    ["Kugel", "Volumen", "Geometrie"]
  ),

  // ── mathe-kap6: Vektoren, Skalarprodukt, Betrag, Winkel ──────────────────

  q(
    "ma-pool-9-029",
    "mathe-kap6",
    "Ein Vektor beschreibt die Kraft auf ein Kniegelenk: F⃗ = (3; 4) N. Wie groß ist der Betrag der resultierenden Kraft?",
    ["3 N", "4 N", "5 N", "6 N", "7 N"],
    2,
    "|F⃗| = √(3² + 4²) = √(9+16) = √25 = 5 N.",
    "leicht",
    ["Betrag", "Vektor", "Kraft"]
  ),

  q(
    "ma-pool-9-030",
    "mathe-kap6",
    "Zwei Muskeln ziehen gleichzeitig an einem Knochen: F⃗₁ = (4; 0) N und F⃗₂ = (0; 3) N. Wie groß ist der Betrag der resultierenden Kraft?",
    ["3 N", "4 N", "5 N", "6 N", "7 N"],
    2,
    "F⃗_res = (4; 3) N. |F⃗_res| = √(16+9) = √25 = 5 N.",
    "mittel",
    ["Vektoraddition", "Betrag", "Biomechanik"]
  ),

  q(
    "ma-pool-9-031",
    "mathe-kap6",
    "Ein Blutfluss wird durch den Vektor v⃗ = (6; 8) mm/s beschrieben. Welchen Betrag hat die Geschwindigkeit?",
    ["8 mm/s", "9 mm/s", "10 mm/s", "12 mm/s", "14 mm/s"],
    2,
    "|v⃗| = √(6²+8²) = √(36+64) = √100 = 10 mm/s.",
    "leicht",
    ["Betrag", "Vektor", "Hämodynamik"]
  ),

  q(
    "ma-pool-9-032",
    "mathe-kap6",
    "Sind die Vektoren a⃗ = (2; 4) und b⃗ = (−4; 2) orthogonal zueinander?",
    [
      "Nein, ihr Skalarprodukt ist 16.",
      "Nein, ihr Skalarprodukt ist −16.",
      "Ja, ihr Skalarprodukt ist 0.",
      "Nein, ihr Skalarprodukt ist 4.",
      "Ja, ihr Betrag ist gleich.",
    ],
    2,
    "a⃗·b⃗ = 2·(−4) + 4·2 = −8+8 = 0. Zwei Vektoren sind genau dann orthogonal, wenn ihr Skalarprodukt null ist.",
    "leicht",
    ["Skalarprodukt", "Orthogonalität", "Vektor"]
  ),

  q(
    "ma-pool-9-033",
    "mathe-kap6",
    "Ein Operationsroboterarm bewegt sich vom Punkt A(2; 3) zum Punkt B(7; 11). Wie lang ist der zurückgelegte Weg (Euklidische Distanz)?",
    ["7 cm", "8 cm", "9 cm", "√89 cm", "√91 cm"],
    3,
    "Weg = √((7−2)²+(11−3)²) = √(25+64) = √89 cm ≈ 9,43 cm.",
    "mittel",
    ["Abstand", "Koordinaten", "Vektor"]
  ),

  q(
    "ma-pool-9-034",
    "mathe-kap6",
    "Berechnen Sie das Skalarprodukt der Vektoren u⃗ = (3; −1; 2) und v⃗ = (4; 2; −1).",
    ["6", "7", "8", "9", "10"],
    2,
    "u⃗·v⃗ = 3·4 + (−1)·2 + 2·(−1) = 12 − 2 − 2 = 8.",
    "mittel",
    ["Skalarprodukt", "Vektor", "3D"]
  ),

  q(
    "ma-pool-9-035",
    "mathe-kap6",
    "Ein Kraft-Vektor F⃗ = (5; 5√3) N wirkt auf ein Gelenk. Unter welchem Winkel (relativ zur x-Achse) steht dieser Vektor?",
    ["30°", "45°", "60°", "75°", "90°"],
    2,
    "tan(α) = 5√3 / 5 = √3 ⇒ α = arctan(√3) = 60°.",
    "mittel",
    ["Winkel", "Vektor", "Trigonometrie"]
  ),

  q(
    "ma-pool-9-036",
    "mathe-kap6",
    "Ein Patient bewegt sich auf einer Geradenbalahn mit Richtungsvektor d⃗ = (1; 2; 2). Wie groß ist der Betrag dieses Vektors?",
    ["2", "3", "4", "5", "6"],
    1,
    "|d⃗| = √(1²+2²+2²) = √(1+4+4) = √9 = 3.",
    "mittel",
    ["Betrag", "3D-Vektor", "Geometrie"]
  ),

  q(
    "ma-pool-9-037",
    "mathe-kap6",
    "Zwei Ortsvektoren zeigen auf Zellen A(1; 3) und B(4; 7). Welcher Vektor beschreibt den Weg von A nach B?",
    ["(−3; −4)", "(3; 4)", "(5; 10)", "(−5; −10)", "(4; 3)"],
    1,
    "AB⃗ = B − A = (4−1; 7−3) = (3; 4).",
    "mittel",
    ["Vektor", "Koordinatensystem", "Geometrie"]
  ),

  q(
    "ma-pool-9-038",
    "mathe-kap6",
    "Die Vektoren a⃗ = (k; 2) und b⃗ = (3; 6) sind parallel. Welchen Wert hat k?",
    ["k = 0", "k = 1", "k = 2", "k = 3", "k = 4"],
    1,
    "Parallel bedeutet: a⃗ = λ·b⃗. Aus dem y-Anteil: 2 = 6λ ⇒ λ = 1/3. Dann k = 3·(1/3) = 1.",
    "mittel",
    ["Parallelität", "Vektor", "Proportionalität"]
  ),

  q(
    "ma-pool-9-039",
    "mathe-kap6",
    "Der Winkel zwischen zwei Vektoren a⃗ und b⃗ berechnet sich über cos(φ) = (a⃗·b⃗)/(|a⃗|·|b⃗|). Gegeben: a⃗ = (1; 0), b⃗ = (1; 1). Welchen Winkel schließen sie ein?",
    ["30°", "45°", "60°", "90°", "120°"],
    1,
    "a⃗·b⃗ = 1. |a⃗| = 1, |b⃗| = √2. cos(φ) = 1/√2 ⇒ φ = 45°.",
    "mittel",
    ["Winkel", "Skalarprodukt", "Vektor"]
  ),

  q(
    "ma-pool-9-040",
    "mathe-kap6",
    "Ein Einheitsvektor zeigt in Richtung des Vektors v⃗ = (8; 6). Wie lauten seine Komponenten?",
    ["(0,6; 0,8)", "(0,8; 0,6)", "(0,7; 0,7)", "(0,5; 0,5)", "(0,9; 0,4)"],
    1,
    "|v⃗| = √(64+36) = 10. Einheitsvektor: (8/10; 6/10) = (0,8; 0,6).",
    "mittel",
    ["Einheitsvektor", "Normierung", "Vektor"]
  ),

  q(
    "ma-pool-9-041",
    "mathe-kap6",
    "Welche der folgenden Aussagen über zwei Vektoren a⃗ und b⃗ ist korrekt, wenn a⃗·b⃗ > 0?",
    [
      "Die Vektoren sind senkrecht aufeinander.",
      "Der Winkel zwischen ihnen ist stumpf (>90°).",
      "Der Winkel zwischen ihnen ist spitz (<90°).",
      "Die Vektoren sind antiparallel.",
      "Beide Vektoren haben denselben Betrag.",
    ],
    2,
    "Das Skalarprodukt a⃗·b⃗ = |a⃗|·|b⃗|·cos(φ). Wenn a⃗·b⃗ > 0, dann cos(φ) > 0, also φ < 90° (spitzer Winkel).",
    "leicht",
    ["Skalarprodukt", "Winkel", "Vektor"]
  ),

  q(
    "ma-pool-9-042",
    "mathe-kap6",
    "Der Schwerpunkt zweier Massenpunkte m₁=2 kg bei P₁=(1; 2) und m₂=4 kg bei P₂=(4; 5) liegt bei:",
    ["(2,0; 3,0)", "(2,5; 3,5)", "(3,0; 4,0)", "(3,5; 4,5)", "(2,0; 4,0)"],
    2,
    "S = (m₁P₁ + m₂P₂)/(m₁+m₂) = (2·(1;2) + 4·(4;5))/6 = ((2;4)+(16;20))/6 = (18;24)/6 = (3; 4).",
    "schwer",
    ["Schwerpunkt", "Vektor", "Masse"]
  ),

  q(
    "ma-pool-9-043",
    "mathe-kap6",
    "Gegeben: Punkt A(2; 1; 3) und B(5; 4; 7). Wie groß ist die Distanz AB?",
    ["√32", "√34", "5", "√43", "√50"],
    1,
    "AB = √((5−2)²+(4−1)²+(7−3)²) = √(9+9+16) = √34.",
    "schwer",
    ["Abstand", "3D-Vektor", "Koordinaten"]
  ),

  // ARCHIVED: mathe-kap7 (Stochastik) — 23 Fragen entfernt (nicht in MedAT 2026 Stichwortliste)

  // ── Schwere Aufgaben (andere Kapitel) ──────────────────────────────────────

  q(
    "ma-pool-9-067",
    "mathe-kap2",
    "Ein Medikament wird intravenös als Dauerinfusion gegeben. Die Zielkonzentration im Blutplasma beträgt 10 mg/l. Das Verteilungsvolumen beträgt 40 l, die Halbwertszeit 8 h. Welche stündliche Erhaltungsdosis (in mg/h) ist erforderlich, um die Zielkonzentration aufrechtzuerhalten? (ln 2 ≈ 0,693)",
    ["1,87 mg/h", "2,54 mg/h", "3,47 mg/h", "4,33 mg/h", "5,00 mg/h"],
    2,
    "Eliminations-Ratenkonstante ke = ln2/t½ = 0,693/8 ≈ 0,0866/h. Erhaltungsdosis = ke · Vd · Css = 0,0866 · 40 · 10 ≈ 34,6 mg je 10 h, also 3,46 mg/h ≈ 3,47 mg/h.",
    "schwer",
    ["Pharmakokinetik", "Halbwertszeit", "Infusion"]
  ),

  q(
    "ma-pool-9-068",
    "mathe-kap6",
    "Drei Muskeln ziehen an einem Gelenk mit den Kräftevektoren F⃗₁=(3;0;0), F⃗₂=(0;4;0) und F⃗₃=(0;0;5) N. Wie groß ist der Betrag der resultierenden Kraft?",
    ["5 N", "√50 N", "√41 N", "√34 N", "5√2 N"],
    4,
    "F⃗_res = (3;4;5). |F⃗_res| = √(9+16+25) = √50 = 5√2 N.",
    "schwer",
    ["Vektoraddition", "3D-Betrag", "Biomechanik"]
  ),

  q(
    "ma-pool-9-070",
    "mathe-kap2",
    "Eine konische Kapsel (Kegel) für ein Depot-Medikament hat einen Basisradius von 0,5 cm und eine Höhe von 2 cm. Ein zweiter Typ hat denselben Basisradius, aber doppelte Höhe. Um welchen Faktor ist das Volumen des zweiten Typs größer?",
    ["√2", "√3", "2", "3", "4"],
    2,
    "V_Kegel = (1/3)·π·r²·h. Bei gleichem r gilt: V ∝ h. Doppelte Höhe → doppeltes Volumen → Faktor 2.",
    "schwer",
    ["Kegel", "Volumen", "Proportionalität"]
  ),
];
