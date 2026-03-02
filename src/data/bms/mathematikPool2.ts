/**
 * Mathematik BMS Pool 2 — 70 Fragen im MedAT-Stil (Typ A).
 * Stoff: mathe-kap1 (Zahlen), mathe-kap2 (Algebra), mathe-kap3 (Grundlagen), mathe-kap5 (Funktionen), mathe-kap6 (Vektoren), mathe-kap7 (Stochastik).
 * Schwierigkeit: 28 leicht / 28 mittel / 14 schwer.
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

export const mathematikPool2: Question[] = [
  // ─── mathe-kap1: Zahlen & Einheiten (12 Fragen) ─────────────────────────
  q(
    "ma-pool-2-001",
    "mathe-kap1",
    "Eine Infusionslösung enthält 0,9 g NaCl pro 100 mL. Wie viele Gramm NaCl sind in einem 500-mL-Beutel enthalten?",
    ["4,5 g", "9 g", "0,45 g", "45 g", "0,9 g"],
    0,
    "0,9 g/100 mL × 500 mL = 4,5 g NaCl.",
    "leicht",
    ["Dreisatz", "Konzentration", "Einheiten"]
  ),
  q(
    "ma-pool-2-002",
    "mathe-kap1",
    "Welcher SI-Präfix entspricht dem Faktor 10⁻⁹?",
    ["Mikro (μ)", "Nano (n)", "Pico (p)", "Femto (f)", "Milli (m)"],
    1,
    "Nano (n) = 10⁻⁹. Mikro = 10⁻⁶, Pico = 10⁻¹², Femto = 10⁻¹⁵, Milli = 10⁻³.",
    "leicht",
    ["SI-Präfixe", "Zehnerpotenzen"]
  ),
  q(
    "ma-pool-2-003",
    "mathe-kap1",
    "Die Halbwertszeit eines radioaktiven Isotops beträgt 6 Stunden. Welcher Bruchteil der ursprünglichen Aktivität ist nach 24 Stunden noch vorhanden?",
    ["1/8", "1/4", "1/16", "1/32", "1/2"],
    2,
    "Nach 24 h sind 24/6 = 4 Halbwertszeiten vergangen. Verbleibender Anteil: (1/2)⁴ = 1/16.",
    "leicht",
    ["Halbwertszeit", "Zehnerpotenzen", "Radioaktivität"]
  ),
  q(
    "ma-pool-2-004",
    "mathe-kap1",
    "Ein Medikament wird in einer Konzentration von 2 mg/mL verabreicht. Ein Patient soll 0,15 g erhalten. Wie viel Milliliter werden benötigt?",
    ["7,5 mL", "75 mL", "0,75 mL", "30 mL", "15 mL"],
    1,
    "0,15 g = 150 mg. Volumen = 150 mg ÷ 2 mg/mL = 75 mL → Antwort B.",
    "leicht",
    ["Dosisberechnung", "Konzentration", "Einheiten"]
  ),
  q(
    "ma-pool-2-005",
    "mathe-kap1",
    "Ein Medikament wird in einer Konzentration von 5 mg/mL verabreicht. Ein Patient soll 0,25 g erhalten. Wie viel Milliliter werden benötigt?",
    ["12,5 mL", "50 mL", "0,05 mL", "25 mL", "5 mL"],
    1,
    "0,25 g = 250 mg. Volumen = 250 mg ÷ 5 mg/mL = 50 mL → Antwort B.",
    "leicht",
    ["Dosisberechnung", "Konzentration"]
  ),
  q(
    "ma-pool-2-006",
    "mathe-kap1",
    "Die Blutglukosekonzentration eines Patienten beträgt 5,5 mmol/L. Die molare Masse von Glukose (C₆H₁₂O₆) beträgt 180 g/mol. Welchem Wert in mg/dL entspricht dies?",
    ["55 mg/dL", "99 mg/dL", "180 mg/dL", "550 mg/dL", "9,9 mg/dL"],
    1,
    "5,5 mmol/L × 180 mg/mmol = 990 mg/L = 99 mg/dL (1 L = 10 dL).",
    "mittel",
    ["Einheitenumrechnung", "Konzentration", "molare Masse"]
  ),
  q(
    "ma-pool-2-007",
    "mathe-kap1",
    "Welche der folgenden Aussagen über die reellen Zahlen ist korrekt?",
    [
      "Jede irrationale Zahl ist eine natürliche Zahl.",
      "Die Menge der rationalen Zahlen ist eine Teilmenge der reellen Zahlen.",
      "π ist eine rationale Zahl.",
      "Jede reelle Zahl lässt sich als Bruch p/q (p, q ∈ ℤ, q ≠ 0) darstellen.",
      "ℕ ⊄ ℤ (natürliche Zahlen sind keine Teilmenge der ganzen Zahlen).",
    ],
    1,
    "ℚ ⊂ ℝ: rationale Zahlen sind eine echte Teilmenge der reellen Zahlen. π ist irrational. Jede reelle Zahl als Bruch = Definition der Rationalzahlen (falsch für Irrationale). ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.",
    "leicht",
    ["Zahlenmengen", "Rationale Zahlen", "Reelle Zahlen"]
  ),
  q(
    "ma-pool-2-008",
    "mathe-kap1",
    "Ein Blutdruck wird als 120/80 mmHg angegeben. 1 mmHg = 133,322 Pa. Welchem Wert in kPa entspricht der systolische Druck (120 mmHg) näherungsweise?",
    ["9,3 kPa", "16,0 kPa", "1,6 kPa", "0,93 kPa", "133 kPa"],
    1,
    "120 mmHg × 133,322 Pa/mmHg = 15.998,64 Pa ≈ 16,0 kPa.",
    "mittel",
    ["Druckeinheiten", "Einheitenumrechnung", "Physiologie"]
  ),
  q(
    "ma-pool-2-009",
    "mathe-kap1",
    "Eine Substanz hat eine Halbwertszeit von 2 Stunden. Nach wie vielen Stunden ist die ursprüngliche Konzentration auf unter 10 % gesunken?",
    ["nach 4 h", "nach 6 h", "nach 7 h", "nach 8 h", "nach 10 h"],
    2,
    "(1/2)^(t/2) < 0,1. t/2 > log(0,1)/log(0,5) = 1/log₂(10) ≈ 3,322. t > 6,644 h. Also nach 7 h (nächste ganze Stunde) ist die Konzentration erstmals unter 10 %.",
    "schwer",
    ["Halbwertszeit", "Logarithmus", "Exponentialfunktion"]
  ),
  q(
    "ma-pool-2-010",
    "mathe-kap1",
    "Ein Labor erhält eine Probe mit einer Aktivität von 3,2 × 10⁶ Bq. Nach 3 Halbwertszeiten beträgt die Aktivität:",
    ["4,0 × 10⁵ Bq", "8,0 × 10⁵ Bq", "1,6 × 10⁵ Bq", "2,4 × 10⁵ Bq", "6,4 × 10⁵ Bq"],
    0,
    "Nach 3 Halbwertszeiten verbleiben (1/2)³ = 1/8 der Ausgangsaktivität. 3,2 × 10⁶ / 8 = 4,0 × 10⁵ Bq.",
    "leicht",
    ["Radioaktivität", "Halbwertszeit", "Zehnerpotenzen"]
  ),
  q(
    "ma-pool-2-011",
    "mathe-kap1",
    "Welche der folgenden Zahlen ist eine irrationale Zahl?",
    ["√9", "√16", "√2", "0,333…", "22/7"],
    2,
    "√2 ≈ 1,41421… ist irrational (lässt sich nicht als Bruch darstellen). √9 = 3, √16 = 4 (beide rational). 0,333… = 1/3 ist rational. 22/7 ist rational (obwohl eine Näherung für π).",
    "leicht",
    ["Irrationale Zahlen", "Zahlenmengen"]
  ),
  q(
    "ma-pool-2-012",
    "mathe-kap1",
    "Die Lichtgeschwindigkeit beträgt c = 3 × 10⁸ m/s. Wie lange (in Nanosekunden) benötigt Licht, um 1 m zurückzulegen?",
    ["3 ns", "0,33 ns", "30 ns", "3,3 ns", "333 ns"],
    3,
    "t = s/v = 1 m / (3 × 10⁸ m/s) = 3,33 × 10⁻⁹ s ≈ 3,3 ns. (1 ns = 10⁻⁹ s)",
    "mittel",
    ["Zehnerpotenzen", "SI-Einheiten", "Physik"]
  ),

  // ─── mathe-kap2: Algebra & Geometrie (12 Fragen) ────────────────────────
  q(
    "ma-pool-2-013",
    "mathe-kap2",
    "Ein kreisförmiges Wundpflaster hat einen Durchmesser von 4 cm. Wie groß ist seine Fläche in cm²? (π ≈ 3,14)",
    ["12,56 cm²", "50,24 cm²", "25,12 cm²", "6,28 cm²", "16 cm²"],
    0,
    "Radius r = 2 cm. Fläche A = π·r² = 3,14 × 4 = 12,56 cm².",
    "leicht",
    ["Kreisfläche", "Geometrie"]
  ),
  q(
    "ma-pool-2-014",
    "mathe-kap2",
    "Ein Erlenmeyer-Kolben hat näherungsweise die Form eines Kegels mit Grundkreisradius r = 5 cm und Höhe h = 20 cm. Welches Volumen fasst er? (π ≈ 3,14)",
    ["523,3 cm³", "1570 cm³", "314 cm³", "785 cm³", "261,7 cm³"],
    0,
    "V = (1/3) · π · r² · h = (1/3) · 3,14 · 25 · 20 = (1/3) · 1570 = 523,3 cm³.",
    "mittel",
    ["Kegelvolumen", "Geometrie", "Labor"]
  ),
  q(
    "ma-pool-2-015",
    "mathe-kap2",
    "Lösen Sie das lineare Gleichungssystem: 2x + y = 10 und x − y = 2. Welches Wertepaar (x; y) ist die Lösung?",
    ["(4; 2)", "(3; 4)", "(5; 0)", "(2; 6)", "(6; −2)"],
    0,
    "Addition der Gleichungen: 3x = 12 → x = 4. Einsetzen in x − y = 2: 4 − y = 2 → y = 2. Probe: 2·4 + 2 = 10 ✓",
    "leicht",
    ["Gleichungssystem", "Algebra"]
  ),
  q(
    "ma-pool-2-016",
    "mathe-kap2",
    "Die Oberfläche einer kugelförmigen Kapsel beträgt 4π cm². Welchen Radius hat die Kapsel?",
    ["2 cm", "1 cm", "√2 cm", "0,5 cm", "4 cm"],
    1,
    "Kugeloberfläche: O = 4π·r². 4π·r² = 4π → r² = 1 → r = 1 cm.",
    "leicht",
    ["Kugeloberfläche", "Geometrie", "Pharmazie"]
  ),
  q(
    "ma-pool-2-017",
    "mathe-kap2",
    "Welche der folgenden Gleichungen hat keine reelle Lösung?",
    ["x² − 4 = 0", "x² + 4 = 0", "x² − 4x + 4 = 0", "x² − 4x + 3 = 0", "x² + 4x − 5 = 0"],
    1,
    "x² + 4 = 0 → x² = −4. Da das Quadrat einer reellen Zahl nie negativ ist, hat diese Gleichung keine reelle Lösung. Diskriminante: 0 − 16 = −16 < 0.",
    "leicht",
    ["Quadratische Gleichung", "Diskriminante"]
  ),
  q(
    "ma-pool-2-018",
    "mathe-kap2",
    "Ein rechteckiges OP-Feld hat eine Länge von 80 cm und eine Diagonale von 100 cm. Wie breit ist das OP-Feld?",
    ["20 cm", "40 cm", "60 cm", "180 cm", "√6400 cm"],
    2,
    "Pythagoras: b² = 100² − 80² = 10000 − 6400 = 3600 → b = 60 cm.",
    "mittel",
    ["Pythagoras", "Rechteck", "Geometrie"]
  ),
  q(
    "ma-pool-2-019",
    "mathe-kap2",
    "Vereinfachen Sie: (3a²b)³ ÷ (9a³b²).",
    ["3a³b", "27a³/b", "3a³b⁻¹", "9a³b", "3a³"],
    0,
    "(3a²b)³ = 27a⁶b³. Division durch 9a³b²: (27/9) · a^(6−3) · b^(3−2) = 3a³b.",
    "mittel",
    ["Potenzen", "Algebra", "Vereinfachung"]
  ),
  q(
    "ma-pool-2-020",
    "mathe-kap2",
    "Für eine Quadratische Gleichung ax² + bx + c = 0 gilt: a = 2, b = −6, c = 4. Welche Lösungen hat die Gleichung?",
    ["x₁ = 1, x₂ = 2", "x₁ = 2, x₂ = −1", "x₁ = −1, x₂ = −2", "x₁ = 3, x₂ = 0", "x₁ = 0,5, x₂ = 2"],
    0,
    "Diskriminante: D = (−6)² − 4·2·4 = 36 − 32 = 4. x = (6 ± 2) / 4. x₁ = 8/4 = 2; x₂ = 4/4 = 1. Probe: 2·1 − 6·1 + 4 = 0 ✓; 2·4 − 6·2 + 4 = 8 − 12 + 4 = 0 ✓.",
    "mittel",
    ["Quadratische Gleichung", "Lösungsformel", "Diskriminante"]
  ),
  q(
    "ma-pool-2-021",
    "mathe-kap2",
    "Ein zylindrischer Probenröhrchen hat einen Innendurchmesser von 1,5 cm und eine Füllhöhe von 8 cm. Welches Volumen enthält es? (π ≈ 3,14)",
    ["14,13 cm³", "28,26 cm³", "56,52 cm³", "9,42 cm³", "18,84 cm³"],
    0,
    "r = 0,75 cm. V = π·r²·h = 3,14 × 0,5625 × 8 = 3,14 × 4,5 = 14,13 cm³.",
    "mittel",
    ["Zylindervolumen", "Geometrie", "Labor"]
  ),
  q(
    "ma-pool-2-022",
    "mathe-kap2",
    "Ein Gleichungssystem beschreibt die Dosierung zweier Antibiotika A und B: 3A + 2B = 1400 mg und A + B = 600 mg. Wie hoch ist die Dosis von Antibiotikum A?",
    ["100 mg", "200 mg", "300 mg", "400 mg", "500 mg"],
    1,
    "Aus der 2. Gleichung: A = 600 − B. Einsetzen: 3(600 − B) + 2B = 1400 → 1800 − 3B + 2B = 1400 → −B = −400 → B = 400. Dann A = 600 − 400 = 200 mg.",
    "mittel",
    ["Gleichungssystem", "Dosisberechnung", "Antibiotika"]
  ),
  q(
    "ma-pool-2-023",
    "mathe-kap2",
    "Welche der folgenden Aussagen über die quadratische Funktion f(x) = x² − 6x + 8 ist richtig?",
    [
      "Der Scheitelpunkt liegt bei (3; −1).",
      "Die Funktion hat keine reellen Nullstellen.",
      "Der Scheitelpunkt liegt bei (−3; 8).",
      "Die Nullstellen sind x = 1 und x = 8.",
      "Die Funktion öffnet nach unten.",
    ],
    0,
    "Scheitelform: x² − 6x + 8 = (x−3)² − 9 + 8 = (x−3)² − 1. Scheitelpunkt: (3; −1). Nullstellen: (x−3)² = 1 → x = 2 oder x = 4. Die Parabel öffnet nach oben (Koeffizient +1 > 0).",
    "mittel",
    ["Quadratische Funktion", "Scheitelpunkt", "Nullstellen"]
  ),
  q(
    "ma-pool-2-024",
    "mathe-kap2",
    "Das Verhältnis zweier Medikamentendosen ist 3:5. Die größere Dosis beträgt 250 mg. Wie groß ist die kleinere Dosis?",
    ["120 mg", "130 mg", "150 mg", "100 mg", "75 mg"],
    2,
    "3/5 = x/250 → x = 3·250/5 = 750/5 = 150 mg.",
    "leicht",
    ["Verhältnisse", "Dreisatz", "Dosisberechnung"]
  ),

  // ─── mathe-kap3: Grundlagen / Rechnen (12 Fragen) ───────────────────────
  q(
    "ma-pool-2-025",
    "mathe-kap3",
    "Ein Arzt verschreibt eine Lösung mit 15 % Wirkstoff. Wie viel Gramm Wirkstoff sind in 200 g Lösung enthalten?",
    ["30 g", "15 g", "3 g", "1,5 g", "0,3 g"],
    0,
    "15 % von 200 g = 0,15 × 200 = 30 g Wirkstoff.",
    "leicht",
    ["Prozentrechnung", "Pharmazie"]
  ),
  q(
    "ma-pool-2-026",
    "mathe-kap3",
    "Ein Patient wiegt 70 kg und erhält eine Dosis von 4 mg/kg Körpergewicht eines Analgetikums. Das Medikament ist als 20 mg/mL Lösung erhältlich. Welches Volumen wird verabreicht?",
    ["14 mL", "7 mL", "28 mL", "1,4 mL", "280 mL"],
    0,
    "Gesamtdosis = 4 mg/kg × 70 kg = 280 mg. Volumen = 280 mg ÷ 20 mg/mL = 14 mL.",
    "mittel",
    ["Dosisberechnung", "Gewichtsbasierte Dosis", "Pharmazie"]
  ),
  q(
    "ma-pool-2-027",
    "mathe-kap3",
    "In einem Experiment werden 250 mL einer 0,4-molaren NaCl-Lösung mit 250 mL Wasser gemischt. Welche Konzentration hat die resultierende Lösung?",
    ["0,2 mol/L", "0,4 mol/L", "0,8 mol/L", "0,1 mol/L", "0,3 mol/L"],
    0,
    "Stoffmenge NaCl = 0,4 mol/L × 0,25 L = 0,1 mol. Gesamtvolumen = 500 mL = 0,5 L. c = 0,1 mol / 0,5 L = 0,2 mol/L.",
    "mittel",
    ["Mischungsrechnung", "Konzentration", "Chemie"]
  ),
  q(
    "ma-pool-2-028",
    "mathe-kap3",
    "Ein Labortest hat eine Sensitivität von 90 % und eine Spezifität von 80 %. Von 1000 getesteten Personen sind 100 tatsächlich erkrankt. Wie viele der Erkrankten werden korrekt als positiv erkannt (Richtig-Positive)?",
    ["80", "90", "100", "180", "720"],
    1,
    "Richtig-Positive = Sensitivität × Erkrankte = 0,90 × 100 = 90.",
    "mittel",
    ["Sensitivität", "Testtheorie", "Epidemiologie"]
  ),
  q(
    "ma-pool-2-029",
    "mathe-kap3",
    "Ein Medikament wird täglich um 20 % abgebaut. Wie viel Prozent der ursprünglichen Menge sind nach 3 Tagen noch vorhanden?",
    ["60 %", "51,2 %", "48 %", "40 %", "64 %"],
    1,
    "Nach jedem Tag verbleiben 80 %. Nach 3 Tagen: 0,8³ = 0,512 = 51,2 %.",
    "mittel",
    ["Prozentrechnung", "Exponentialfunktion", "Pharmakokinetik"]
  ),
  q(
    "ma-pool-2-030",
    "mathe-kap3",
    "Eine Lösung enthält 40 g Substanz in 160 g Lösungsmittel. Wie viel Prozent Massenanteil hat die Substanz in der Lösung?",
    ["20 %", "25 %", "40 %", "16 %", "50 %"],
    0,
    "Gesamtmasse = 40 + 160 = 200 g. Massenanteil = 40/200 × 100 % = 20 %.",
    "leicht",
    ["Prozentrechnung", "Massenanteil", "Chemie"]
  ),
  q(
    "ma-pool-2-031",
    "mathe-kap3",
    "Der Preis eines Medikaments wurde um 15 % erhöht und beträgt jetzt 46 Euro. Wie hoch war der ursprüngliche Preis?",
    ["39,13 €", "40 €", "41 €", "38,48 €", "43,70 €"],
    1,
    "1,15 × p = 46 → p = 46 / 1,15 = 40 €.",
    "leicht",
    ["Prozentrechnung", "Rückrechnung"]
  ),
  q(
    "ma-pool-2-032",
    "mathe-kap3",
    "Berechnen Sie: (2/3 + 1/6) × (3/4).",
    ["1/2", "5/8", "7/12", "2/3", "3/4"],
    1,
    "2/3 + 1/6 = 4/6 + 1/6 = 5/6. Produkt: 5/6 × 3/4 = 15/24 = 5/8.",
    "mittel",
    ["Bruchrechnung", "Grundlagen"]
  ),
  q(
    "ma-pool-2-033",
    "mathe-kap3",
    "Ein Infusionsbeutel mit 500 mL soll in 2,5 Stunden vollständig verabreicht werden. Wie hoch ist die Tropfrate in mL/min?",
    ["2 mL/min", "200 mL/min", "3,3 mL/min", "0,2 mL/min", "20 mL/min"],
    2,
    "Rate = 500 mL / (2,5 h × 60 min/h) = 500 / 150 ≈ 3,33 mL/min.",
    "leicht",
    ["Infusionsrate", "Dreisatz", "Pflege"]
  ),
  q(
    "ma-pool-2-034",
    "mathe-kap3",
    "Ein Medikament hat eine Bioverfügbarkeit von 60 %. Welche orale Dosis muss gegeben werden, damit systemisch 120 mg wirksam werden?",
    ["72 mg", "200 mg", "180 mg", "60 mg", "144 mg"],
    1,
    "Wirksame Dosis = orale Dosis × Bioverfügbarkeit. 120 mg = D × 0,6 → D = 200 mg.",
    "mittel",
    ["Bioverfügbarkeit", "Dosisberechnung", "Pharmakokinetik"]
  ),
  q(
    "ma-pool-2-035",
    "mathe-kap3",
    "Ein pH-Wert verändert sich von 7 auf 5. Um welchen Faktor steigt die H⁺-Ionenkonzentration?",
    ["2-fach", "10-fach", "14-fach", "100-fach", "1000-fach"],
    3,
    "pH = −log[H⁺]. pH 7: [H⁺] = 10⁻⁷ mol/L. pH 5: [H⁺] = 10⁻⁵ mol/L. Faktor = 10⁻⁵/10⁻⁷ = 10² = 100.",
    "mittel",
    ["pH-Wert", "Logarithmus", "Chemie"]
  ),
  q(
    "ma-pool-2-036",
    "mathe-kap3",
    "Eine Arztpraxis behandelt täglich durchschnittlich 40 Patienten. In einem Jahr mit 250 Arbeitstagen werden insgesamt 12.000 € Medikamentenkosten abgerechnet. Was kostet ein Patient im Durchschnitt bezüglich Medikamente?",
    ["1,2 €", "3 €", "0,48 €", "1,5 €", "12 €"],
    0,
    "Patientenzahl pro Jahr = 40 × 250 = 10.000. Kosten pro Patient = 12.000 / 10.000 = 1,20 €.",
    "leicht",
    ["Dreisatz", "Grundrechnen", "Praxis"]
  ),

  // ─── mathe-kap5: Funktionen & Analysis (12 Fragen) ──────────────────────
  q(
    "ma-pool-2-037",
    "mathe-kap5",
    "Die Serumkonzentration eines Antibiotikums fällt exponentiell: c(t) = 8 · e^(−0,5t) mg/L. Welchen Wert hat c(t) nach t = 2 Stunden? (e ≈ 2,718; e⁻¹ ≈ 0,368)",
    ["2,94 mg/L", "4 mg/L", "1,47 mg/L", "5,94 mg/L", "8 mg/L"],
    0,
    "c(2) = 8 · e^(−1) = 8 · 0,368 = 2,944 ≈ 2,94 mg/L.",
    "mittel",
    ["Exponentialfunktion", "Pharmakokinetik", "e-Funktion"]
  ),
  q(
    "ma-pool-2-038",
    "mathe-kap5",
    "Welche der folgenden Aussagen über f(x) = ln(x) ist korrekt?",
    [
      "Der Definitionsbereich ist ℝ.",
      "f(1) = 1.",
      "f(e) = 1.",
      "f ist für x > 0 streng monoton fallend.",
      "f(x·y) = f(x) · f(y).",
    ],
    2,
    "ln(e) = 1 per Definition. Def-Bereich: x > 0 (nicht ℝ). ln(1) = 0 (nicht 1). ln ist streng monoton steigend (nicht fallend). ln(x·y) = ln(x) + ln(y) (Additionssatz, nicht Multiplikation).",
    "leicht",
    ["Logarithmus", "Natürlicher Logarithmus", "ln"]
  ),
  q(
    "ma-pool-2-039",
    "mathe-kap5",
    "Eine Bakterienpopulation wächst exponentiell. Um 8:00 Uhr beträgt die Zellzahl 500, um 10:00 Uhr bereits 2000. Welche Verdopplungszeit hat die Kultur (in Minuten)?",
    ["60 min", "90 min", "120 min", "30 min", "180 min"],
    0,
    "In 2 h (120 min) hat sich die Zellzahl vervierfacht: 2000/500 = 4 = 2². Also 2 Verdopplungen in 120 min → Verdopplungszeit = 60 min.",
    "mittel",
    ["Exponentielles Wachstum", "Verdopplungszeit", "Mikrobiologie"]
  ),
  q(
    "ma-pool-2-040",
    "mathe-kap5",
    "Die Ableitung von f(x) = 3x⁴ − 2x³ + x − 7 ist:",
    [
      "f'(x) = 12x³ − 6x² + 1",
      "f'(x) = 12x³ − 6x²",
      "f'(x) = 12x³ − 2x² + 1",
      "f'(x) = 3x³ − 2x² + 1",
      "f'(x) = 12x⁴ − 6x³ + 1",
    ],
    0,
    "f'(x) = 4·3x³ − 3·2x² + 1 − 0 = 12x³ − 6x² + 1.",
    "leicht",
    ["Ableitung", "Polynomfunktion", "Differenzialrechnung"]
  ),
  q(
    "ma-pool-2-041",
    "mathe-kap5",
    "Ein Wirkstoff wird in der Leber mit der Michaelis-Menten-Kinetik abgebaut: v = V_max · [S] / (Km + [S]). Für welchen Substratbereich gilt Näherungsweise v ≈ V_max?",
    ["[S] ≪ Km", "[S] = Km / 2", "[S] ≫ Km", "[S] = 0", "Die Geschwindigkeit ist immer konstant."],
    2,
    "Wenn [S] ≫ Km, gilt Km + [S] ≈ [S], also v ≈ V_max · [S]/[S] = V_max (Sättigungsbereich). Für [S] ≪ Km gilt v ≈ (V_max/Km)·[S] (Linearitätsbereich).",
    "mittel",
    ["Michaelis-Menten", "Enzymkinetik", "Biochemie"]
  ),
  q(
    "ma-pool-2-042",
    "mathe-kap5",
    "Der Graph einer Funktion schneidet die x-Achse bei x = −2 und x = 3 und hat den Scheitelpunkt bei (0,5; −6,25). Um welche Funktion handelt es sich?",
    [
      "f(x) = x² − x − 6",
      "f(x) = −x² + x + 6",
      "f(x) = x² + x − 6",
      "f(x) = 2x² − x − 6",
      "f(x) = x² − 0,5x − 6",
    ],
    0,
    "Nullstellen bei −2 und 3: f(x) = (x+2)(x−3) = x² − x − 6. Scheitelpunkt: x = −b/(2a) = 1/2 = 0,5; y = 0,25 − 0,5 − 6 = −6,25. ✓",
    "mittel",
    ["Quadratische Funktion", "Nullstellen", "Scheitelpunkt"]
  ),
  q(
    "ma-pool-2-043",
    "mathe-kap5",
    "Berechnen Sie das bestimmte Integral ∫₀² (2x + 1) dx.",
    ["6", "5", "4", "7", "8"],
    0,
    "∫(2x+1)dx = x² + x + C. Ausgewertet von 0 bis 2: (4 + 2) − (0 + 0) = 6.",
    "mittel",
    ["Integralrechnung", "bestimmtes Integral", "Analysis"]
  ),
  q(
    "ma-pool-2-044",
    "mathe-kap5",
    "Für welchen Wert von x hat die Funktion f(x) = x³ − 3x ein lokales Minimum?",
    ["x = 0", "x = −1", "x = 1", "x = −√3", "x = 3"],
    2,
    "f'(x) = 3x² − 3 = 0 → x² = 1 → x = ±1. f''(x) = 6x. f''(1) = 6 > 0 → lokales Minimum bei x = 1. f''(−1) = −6 < 0 → lokales Maximum bei x = −1.",
    "mittel",
    ["Extremwerte", "Ableitung", "Kurvendiskussion"]
  ),
  q(
    "ma-pool-2-045",
    "mathe-kap5",
    "sin(30°) hat den Wert:",
    ["√3/2", "1/2", "√2/2", "1", "0"],
    1,
    "sin(30°) = 1/2. Merkhilfe: sin(30°) = 0,5; sin(45°) = √2/2 ≈ 0,707; sin(60°) = √3/2 ≈ 0,866.",
    "leicht",
    ["Trigonometrie", "Sinus", "Winkel"]
  ),
  q(
    "ma-pool-2-046",
    "mathe-kap5",
    "Eine Kraft F = 100 N wirkt unter einem Winkel von 60° zur Horizontalen. Wie groß ist die horizontale Komponente F_x der Kraft? (cos 60° = 0,5)",
    ["86,6 N", "50 N", "100 N", "57,7 N", "70,7 N"],
    1,
    "F_x = F · cos(60°) = 100 N × 0,5 = 50 N.",
    "leicht",
    ["Trigonometrie", "Vektorzerlegung", "Physik"]
  ),
  q(
    "ma-pool-2-047",
    "mathe-kap5",
    "Welche der folgenden Eigenschaften hat die Funktion f(x) = e^x?",
    [
      "f ist für alle x ∈ ℝ definiert und hat eine Nullstelle.",
      "f'(x) = e^x (die Funktion ist ihre eigene Ableitung).",
      "lim(x→∞) e^x = 0.",
      "f(0) = 0.",
      "f ist für x < 0 nicht definiert.",
    ],
    1,
    "e^x ist seine eigene Ableitung: (e^x)' = e^x. Def-Bereich: alle ℝ. Keine Nullstelle (e^x > 0 für alle x). f(0) = e⁰ = 1. lim(x→∞) e^x = +∞.",
    "leicht",
    ["Exponentialfunktion", "e-Funktion", "Ableitung"]
  ),
  q(
    "ma-pool-2-048",
    "mathe-kap5",
    "Der Henderson-Hasselbalch-Gleichung zufolge gilt: pH = pKa + log([A⁻]/[HA]). Bei welchem Verhältnis [A⁻]/[HA] gilt pH = pKa?",
    ["[A⁻]/[HA] = 10", "[A⁻]/[HA] = 0", "[A⁻]/[HA] = 1", "[A⁻]/[HA] = 100", "[A⁻]/[HA] = e"],
    2,
    "pH = pKa + log([A⁻]/[HA]). Wenn [A⁻]/[HA] = 1, dann log(1) = 0, also pH = pKa.",
    "mittel",
    ["Logarithmus", "Henderson-Hasselbalch", "Puffersystem", "Biochemie"]
  ),

  // ─── mathe-kap6: Vektoren & Geometrie (11 Fragen) ───────────────────────
  q(
    "ma-pool-2-049",
    "mathe-kap6",
    "Gegeben sind die Vektoren a = (3; 4) und b = (1; 2). Berechnen Sie das Skalarprodukt a · b.",
    ["11", "14", "5", "7", "10"],
    0,
    "a · b = 3·1 + 4·2 = 3 + 8 = 11.",
    "leicht",
    ["Skalarprodukt", "Vektoren"]
  ),
  q(
    "ma-pool-2-050",
    "mathe-kap6",
    "Wie lang ist der Vektor v = (6; −8)? (Betrag)",
    ["6", "8", "10", "14", "√100"],
    2,
    "|v| = √(6² + (−8)²) = √(36 + 64) = √100 = 10.",
    "leicht",
    ["Vektorbetrag", "Vektoren", "Pythagoras"]
  ),
  q(
    "ma-pool-2-051",
    "mathe-kap6",
    "Zwei Vektoren a = (2; 3) und b = (−3; 2) sind:",
    [
      "parallel",
      "antiparallel",
      "orthogonal (senkrecht)",
      "gleich lang und parallel",
      "nicht definiert",
    ],
    2,
    "Skalarprodukt a·b = 2·(−3) + 3·2 = −6 + 6 = 0. Skalarprodukt = 0 ⟹ orthogonal.",
    "leicht",
    ["Skalarprodukt", "Orthogonalität", "Vektoren"]
  ),
  q(
    "ma-pool-2-052",
    "mathe-kap6",
    "Ein Ultraschallgerät sendet eine Welle in Richtung des Einheitsvektors e = (3/5; 4/5). Unter welchem Winkel α zur positiven x-Achse bewegt sich der Schall? (tan 53° ≈ 4/3)",
    ["37°", "45°", "53°", "60°", "30°"],
    2,
    "tan(α) = (4/5)/(3/5) = 4/3. Arctan(4/3) ≈ 53°.",
    "mittel",
    ["Vektoren", "Trigonometrie", "Winkel"]
  ),
  q(
    "ma-pool-2-053",
    "mathe-kap6",
    "Berechnen Sie: a = (1; 2; 3), b = (4; 5; 6). Was ergibt a + b?",
    ["(3; 3; 3)", "(5; 7; 9)", "(4; 10; 18)", "(5; 7; 8)", "(3; 7; 9)"],
    1,
    "a + b = (1+4; 2+5; 3+6) = (5; 7; 9).",
    "leicht",
    ["Vektoraddition", "Vektoren", "3D"]
  ),
  q(
    "ma-pool-2-054",
    "mathe-kap6",
    "Ein Patient liegt auf einem Operationstisch und wird unter einem Winkel von 30° zur Horizontalen gekippt. Welche Komponente seines Gewichts (G = mg) wirkt parallel zur Tischfläche? (sin 30° = 0,5; cos 30° = √3/2 ≈ 0,866)",
    ["G/2", "G·√3/2", "G/√3", "G", "0"],
    0,
    "Die zur geneigten Fläche parallele Komponente ist G·sin(30°) = G × 0,5 = G/2.",
    "mittel",
    ["Vektorzerlegung", "Kräfte", "Schiefe Ebene", "Physik"]
  ),
  q(
    "ma-pool-2-055",
    "mathe-kap6",
    "Zwei Punkte A = (1; 3) und B = (4; 7) definieren einen Verbindungsvektor AB. Berechnen Sie |AB|.",
    ["5", "√7", "√25", "7", "√50"],
    0,
    "AB = B − A = (3; 4). |AB| = √(9+16) = √25 = 5.",
    "leicht",
    ["Verbindungsvektor", "Abstand", "Vektoren"]
  ),
  q(
    "ma-pool-2-056",
    "mathe-kap6",
    "Für welchen Wert t sind die Vektoren u = (2; t) und v = (t; 8) parallel (also u = λ·v für ein reelles λ)?",
    ["t = 4", "t = 2", "t = −4", "t = 8", "t = 16"],
    0,
    "Parallele Vektoren: 2/t = t/8 → t² = 16 → t = ±4. Positive Lösung: t = 4. (Für t = −4: Vektoren antiparallel, ebenfalls parallel i.w.S.)",
    "schwer",
    ["Parallele Vektoren", "Vektoren", "Proportionalität"]
  ),
  q(
    "ma-pool-2-057",
    "mathe-kap6",
    "Ein MRT-Bildpunkt wird durch den Vektor r = (3; 0; 4) beschrieben. Wie groß ist der Abstand dieses Punktes vom Ursprung?",
    ["7", "5", "√7", "√34", "25"],
    1,
    "|r| = √(3² + 0² + 4²) = √(9 + 0 + 16) = √25 = 5.",
    "leicht",
    ["Vektorbetrag", "3D-Vektoren", "Abstand"]
  ),
  q(
    "ma-pool-2-058",
    "mathe-kap6",
    "Das Kreuzprodukt zweier paralleler Vektoren ist:",
    [
      "ein Einheitsvektor",
      "der Nullvektor",
      "nicht definiert",
      "ein Skalar",
      "von 1 verschiedener Vektor",
    ],
    1,
    "Für parallele Vektoren gilt sin(0°) = 0 im Kreuzprodukt: |a × b| = |a|·|b|·sin(θ). Mit θ = 0: |a × b| = 0. Das Kreuzprodukt ist der Nullvektor.",
    "mittel",
    ["Kreuzprodukt", "Vektoren", "Parallele Vektoren"]
  ),
  q(
    "ma-pool-2-059",
    "mathe-kap6",
    "Die Koordinaten eines Schwerpunkts G sind das arithmetische Mittel der Eckpunkte. Dreieck mit A=(0;0), B=(6;0), C=(3;6). Wo liegt der Schwerpunkt?",
    ["(3; 2)", "(3; 3)", "(2; 3)", "(4; 2)", "(3; 4)"],
    0,
    "G_x = (0+6+3)/3 = 9/3 = 3. G_y = (0+0+6)/3 = 6/3 = 2. Schwerpunkt: (3; 2).",
    "mittel",
    ["Schwerpunkt", "Dreieck", "Koordinaten"]
  ),

  // ─── mathe-kap7: Stochastik & Kombinatorik (11 Fragen) ──────────────────
  q(
    "ma-pool-2-060",
    "mathe-kap7",
    "Ein fairer Würfel wird zweimal geworfen. Mit welcher Wahrscheinlichkeit erscheint mindestens einmal eine 6?",
    ["1/3", "11/36", "1/6", "1/36", "1/12"],
    1,
    "P(mindestens eine 6) = 1 − P(keine 6) = 1 − (5/6)² = 1 − 25/36 = 11/36.",
    "mittel",
    ["Wahrscheinlichkeit", "Gegenwahrscheinlichkeit", "Würfel"]
  ),
  q(
    "ma-pool-2-061",
    "mathe-kap7",
    "In einer Gruppe von 10 Patienten reagieren 7 auf eine Behandlung. Wie viele Möglichkeiten gibt es, 3 Patienten aus der Gruppe auszuwählen, die alle auf die Behandlung reagieren?",
    ["35", "30", "21", "10", "120"],
    0,
    "Aus 7 Reagierenden werden 3 gewählt: C(7,3) = 7! / (3! · 4!) = (7·6·5)/(3·2·1) = 35.",
    "mittel",
    ["Kombinatorik", "Binomialkoeffizient", "Auswahl"]
  ),
  q(
    "ma-pool-2-062",
    "mathe-kap7",
    "Ein diagnostischer Test ist positiv mit P(pos|krank) = 0,9 und P(pos|gesund) = 0,1. Die Prävalenz beträgt 10 %. Wie hoch ist die Wahrscheinlichkeit, tatsächlich krank zu sein, wenn der Test positiv ist? (Bayes-Theorem)",
    ["50 %", "90 %", "9 %", "47,4 %", "81 %"],
    0,
    "P(krank|pos) = P(pos|krank)·P(krank) / P(pos). P(pos) = 0,9·0,1 + 0,1·0,9 = 0,09 + 0,09 = 0,18. P(krank|pos) = 0,09/0,18 = 0,5 = 50 %.",
    "schwer",
    ["Bayes-Theorem", "Testtheorie", "Bedingte Wahrscheinlichkeit", "Epidemiologie"]
  ),
  q(
    "ma-pool-2-063",
    "mathe-kap7",
    "Auf einer Isolierstation befinden sich 5 Patienten. Wie viele Möglichkeiten gibt es, sie in einer Reihe aufzustellen (für die Visite)?",
    ["25", "120", "20", "60", "100"],
    1,
    "Permutationen von 5 Elementen: 5! = 5×4×3×2×1 = 120.",
    "leicht",
    ["Permutationen", "Kombinatorik", "Fakultät"]
  ),
  q(
    "ma-pool-2-064",
    "mathe-kap7",
    "X sei binomialverteilt mit n = 10 und p = 0,5. Was ist der Erwartungswert E(X)?",
    ["2,5", "10", "5", "0,5", "25"],
    2,
    "E(X) = n · p = 10 × 0,5 = 5.",
    "leicht",
    ["Binomialverteilung", "Erwartungswert", "Statistik"]
  ),
  q(
    "ma-pool-2-065",
    "mathe-kap7",
    "Bei der Hardy-Weinberg-Gleichung gilt: p² + 2pq + q² = 1. Die Allelfrequenz des rezessiven Allels beträgt q = 0,2. Wie groß ist der Anteil der heterozygoten Genotypen (2pq)?",
    ["4 %", "16 %", "32 %", "64 %", "20 %"],
    2,
    "p = 1 − q = 0,8. 2pq = 2 × 0,8 × 0,2 = 0,32 = 32 %.",
    "mittel",
    ["Hardy-Weinberg", "Populationsgenetik", "Wahrscheinlichkeit"]
  ),
  q(
    "ma-pool-2-066",
    "mathe-kap7",
    "Zwei unabhängige Ereignisse A und B haben P(A) = 0,4 und P(B) = 0,3. Wie groß ist P(A ∪ B)?",
    ["0,12", "0,58", "0,7", "0,70", "0,18"],
    1,
    "P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0,4 + 0,3 − 0,4·0,3 = 0,7 − 0,12 = 0,58.",
    "mittel",
    ["Wahrscheinlichkeit", "Additionssatz", "Unabhängigkeit"]
  ),
  q(
    "ma-pool-2-067",
    "mathe-kap7",
    "In einem Labor werden zufällig 2 Reagenzgläser aus 8 entnommen (4 enthalten Probe A, 4 enthalten Probe B). Mit welcher Wahrscheinlichkeit sind beide entnommenen Gläser von Probe A?",
    ["1/2", "3/14", "1/4", "1/14", "2/7"],
    1,
    "P(beide A) = C(4,2)/C(8,2) = 6/28 = 3/14.",
    "schwer",
    ["Kombinatorik", "Wahrscheinlichkeit ohne Zurücklegen"]
  ),
  q(
    "ma-pool-2-068",
    "mathe-kap7",
    "Die Standardabweichung einer Binomialverteilung mit n = 100 und p = 0,25 ist:",
    ["25", "√25 = 5", "√18,75 ≈ 4,33", "√75 ≈ 8,66", "2,5"],
    2,
    "Varianz σ² = n·p·(1−p) = 100·0,25·0,75 = 18,75. Standardabweichung σ = √18,75 ≈ 4,33.",
    "mittel",
    ["Binomialverteilung", "Standardabweichung", "Statistik"]
  ),
  q(
    "ma-pool-2-069",
    "mathe-kap7",
    "Wie viele unterschiedliche dreistellige PINs (Ziffern 0–9, Wiederholung erlaubt) sind möglich?",
    ["10", "720", "1000", "30", "100"],
    2,
    "Jede der 3 Stellen hat 10 Möglichkeiten (0–9). Gesamt: 10³ = 1000.",
    "leicht",
    ["Kombinatorik", "Variation mit Wiederholung"]
  ),
  q(
    "ma-pool-2-070",
    "mathe-kap7",
    "In einer Studie haben 30 % der Teilnehmer Bluthochdruck und 20 % Diabetes. 10 % haben beide Erkrankungen. Wie groß ist die Wahrscheinlichkeit, dass ein zufällig gewählter Teilnehmer mindestens eine der beiden Erkrankungen hat?",
    ["50 %", "40 %", "60 %", "30 %", "45 %"],
    1,
    "P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0,30 + 0,20 − 0,10 = 0,40 = 40 %.",
    "leicht",
    ["Additionssatz", "Wahrscheinlichkeit", "Epidemiologie"]
  ),
];
