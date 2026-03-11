/**
 * Mathematik BMS Pool 10 — MedAT-Stil-Fragen.
 * Stoff: mathe-kap1 (Zahlen & Einheiten), mathe-kap2 (Algebra & Geometrie),
 *        mathe-kap5 (Funktionen & Analysis), mathe-kap6 (Vektoren).
 * 70 Fragen: 14 je Kapitel. Schwierigkeit: 40% leicht, 40% mittel, 20% schwer.
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

export const mathematikPool10: Question[] = [
  // ─── mathe-kap1: Zehnerpotenzen, Einheiten, wissenschaftliche Notation (14 Fragen) ───

  q(
    "ma-pool-10-001",
    "mathe-kap1",
    "Die Konzentration eines Medikaments im Blut beträgt 3,6 × 10⁻⁴ mol/L. Ein zweites Präparat hat eine Konzentration von 1,2 × 10⁻² mol/L. Um welchen Faktor ist das zweite Präparat konzentrierter?",
    ["3,3", "33", "333", "0,03", "3300"],
    1,
    "1,2 × 10⁻² ÷ 3,6 × 10⁻⁴ = (1,2/3,6) × 10⁽⁻²⁺⁴⁾ = (1/3) × 10² ≈ 33. Das zweite Präparat ist 33-mal konzentrierter.",
    "leicht",
    ["wissenschaftliche Notation", "Zehnerpotenzen", "Konzentration"]
  ),
  q(
    "ma-pool-10-002",
    "mathe-kap1",
    "Ein Röntgengerät erzeugt eine Strahlendosis von 2,5 mGy. Wie viel ist das in Mikrogray (µGy)?",
    ["0,0025 µGy", "25 µGy", "250 µGy", "2500 µGy", "25 000 µGy"],
    3,
    "1 mGy = 1000 µGy. Daher: 2,5 mGy × 1000 = 2500 µGy. Milli (m) = 10⁻³, Mikro (µ) = 10⁻⁶, also 1 mGy = 10³ µGy.",
    "leicht",
    ["Einheiten", "Präfixe", "Radiologie", "Dosimetrie"]
  ),
  q(
    "ma-pool-10-003",
    "mathe-kap1",
    "Die Masse eines Enzymmoleküls beträgt 4,8 × 10⁻²⁰ g. In einer Probe befinden sich 2,5 × 10⁴ solcher Moleküle. Welche Gesamtmasse (in Gramm) haben diese Moleküle?",
    ["1,2 × 10⁻¹⁵ g", "1,2 × 10⁻¹⁶ g", "1,92 × 10⁻¹⁵ g", "4,8 × 10⁻¹⁶ g", "1,2 × 10⁻¹⁷ g"],
    0,
    "Gesamtmasse = 4,8 × 10⁻²⁰ × 2,5 × 10⁴ = (4,8 × 2,5) × 10⁽⁻²⁰⁺⁴⁾ = 12 × 10⁻¹⁶ = 1,2 × 10⁻¹⁵ g.",
    "leicht",
    ["wissenschaftliche Notation", "Zehnerpotenzen", "Biochemie"]
  ),
  q(
    "ma-pool-10-004",
    "mathe-kap1",
    "Ein Patient erhält eine Infusion mit 500 mL Kochsalzlösung. Die Flussrate beträgt 1,25 × 10⁻⁴ m³/min. Nach wie vielen Minuten ist die Infusion vollständig verabreicht?",
    ["2 min", "4 min", "40 min", "400 min", "0,4 min"],
    1,
    "500 mL = 500 × 10⁻⁶ m³ = 5 × 10⁻⁴ m³. Zeit = Volumen / Rate = 5 × 10⁻⁴ ÷ 1,25 × 10⁻⁴ = 4 min.",
    "mittel",
    ["Einheiten", "Zehnerpotenzen", "Infusion", "klinische Mathematik"]
  ),
  q(
    "ma-pool-10-005",
    "mathe-kap1",
    "Die Avogadro-Konstante beträgt N_A ≈ 6,022 × 10²³ mol⁻¹. Wie viele Glukosemoleküle enthält 1 mmol Glukose?",
    ["6,022 × 10²⁰", "6,022 × 10²¹", "6,022 × 10²²", "6,022 × 10²³", "6,022 × 10²⁴"],
    0,
    "1 mmol = 10⁻³ mol. Anzahl = 10⁻³ × 6,022 × 10²³ = 6,022 × 10²⁰ Moleküle.",
    "leicht",
    ["Avogadro", "Mol", "Biochemie", "Zehnerpotenzen"]
  ),
  q(
    "ma-pool-10-006",
    "mathe-kap1",
    "Ein Bakterium hat eine Länge von 3 µm. Ausgedrückt in Nanometern: Wie lang ist das Bakterium?",
    ["0,003 nm", "3 nm", "30 nm", "300 nm", "3000 nm"],
    4,
    "1 µm = 1000 nm. Daher: 3 µm = 3000 nm. Präfix Mikro (µ) = 10⁻⁶ m, Nano (n) = 10⁻⁹ m, also 1 µm = 10³ nm.",
    "leicht",
    ["Einheiten", "Präfixe", "Biologie", "Mikrobiologie"]
  ),
  q(
    "ma-pool-10-007",
    "mathe-kap1",
    "Ein Labor misst die Aktivität einer radioaktiven Substanz mit 7,4 × 10⁷ Bq (Becquerel). Wie viele MBq (Megabecquerel) entspricht das?",
    ["0,074 MBq", "0,74 MBq", "7,4 MBq", "74 MBq", "740 MBq"],
    3,
    "1 MBq = 10⁶ Bq. Daher: 7,4 × 10⁷ Bq ÷ 10⁶ = 7,4 × 10¹ = 74 MBq.",
    "leicht",
    ["Einheiten", "Radioaktivität", "Zehnerpotenzen", "Nuklearmedizin"]
  ),
  q(
    "ma-pool-10-008",
    "mathe-kap1",
    "Die Lichtgeschwindigkeit beträgt c = 3 × 10⁸ m/s. Wie weit legt Licht in 1 Nanosekunde (10⁻⁹ s) zurück? Geben Sie die Antwort in Zentimetern an.",
    ["0,3 cm", "3 cm", "30 cm", "300 cm", "3000 cm"],
    2,
    "d = c × t = 3 × 10⁸ m/s × 10⁻⁹ s = 3 × 10⁻¹ m = 0,3 m = 30 cm.",
    "mittel",
    ["wissenschaftliche Notation", "Zehnerpotenzen", "Physik", "Licht"]
  ),
  q(
    "ma-pool-10-009",
    "mathe-kap1",
    "Ein Blutdruckmessgerät zeigt 120 mmHg an. 1 mmHg ≈ 133 Pa. Wie groß ist der Druck in kPa (Kilopascal)?",
    ["0,160 kPa", "1,60 kPa", "15,96 kPa", "159,6 kPa", "1596 kPa"],
    2,
    "P = 120 × 133 Pa = 15 960 Pa = 15,96 kPa. Kilo (k) = 10³, also 15 960 Pa ÷ 1000 = 15,96 kPa.",
    "mittel",
    ["Einheiten", "Blutdruck", "Druck", "klinische Mathematik"]
  ),
  q(
    "ma-pool-10-010",
    "mathe-kap1",
    "Ein Laborwert zeigt eine Enzymaktivität von 4,5 × 10⁻³ mol/(L·s). Drücken Sie diesen Wert in µmol/(L·s) aus.",
    ["4,5 µmol/(L·s)", "45 µmol/(L·s)", "450 µmol/(L·s)", "4500 µmol/(L·s)", "45 000 µmol/(L·s)"],
    3,
    "4,5 × 10⁻³ mol/(L·s) = 4,5 × 10⁻³ × 10⁶ µmol/(L·s) = 4,5 × 10³ = 4500 µmol/(L·s).",
    "mittel",
    ["Einheiten", "wissenschaftliche Notation", "Enzymkinetik", "Biochemie"]
  ),
  q(
    "ma-pool-10-011",
    "mathe-kap1",
    "Ein Röntgenbild wird mit 0,05 mGy erzeugt. Ein CT-Scan des Abdomens benötigt 8 mGy. Um welchen Faktor ist die CT-Dosis höher?",
    ["16", "80", "160", "800", "1600"],
    2,
    "Faktor = 8 mGy / 0,05 mGy = 8 / 0,05 = 160. Der CT-Scan liefert die 160-fache Strahlendosis des Röntgenbilds.",
    "leicht",
    ["Einheiten", "Dosimetrie", "Radiologie", "Division"]
  ),
  q(
    "ma-pool-10-012",
    "mathe-kap1",
    "Ein Pharmaunternehmen produziert 2,4 × 10⁶ Tabletten pro Tag. Jede Tablette enthält 500 µg Wirkstoff (1 µg = 10⁻⁶ g). Wie viele Gramm Wirkstoff werden täglich benötigt?",
    ["0,12 g", "1,2 g", "12 g", "120 g", "1200 g"],
    3,
    "Wirkstoff = 2,4 × 10⁶ × 500 × 10⁻⁶ g = 2,4 × 5 × 10² g = 1200 g.",
    "mittel",
    ["Zehnerpotenzen", "wissenschaftliche Notation", "Pharmazie"]
  ),
  q(
    "ma-pool-10-013",
    "mathe-kap1",
    "Die Wellenlänge von sichtbarem Licht beträgt ca. 500 nm. Wie lautet diese Länge in wissenschaftlicher Notation in Metern?",
    ["5 × 10⁻⁶ m", "5 × 10⁻⁷ m", "5 × 10⁻⁸ m", "5 × 10⁻⁹ m", "5 × 10⁻¹⁰ m"],
    1,
    "1 nm = 10⁻⁹ m. Also: 500 nm = 500 × 10⁻⁹ m = 5 × 10⁻⁷ m. Sichtbares Licht liegt im Bereich 380–780 nm.",
    "leicht",
    ["wissenschaftliche Notation", "Wellenlänge", "Physik", "Optik"]
  ),
  q(
    "ma-pool-10-014",
    "mathe-kap1",
    "Das Körpergewicht eines Patienten beträgt 75 kg. Die empfohlene Tagesdosis eines Antibiotikums beträgt 15 mg/kg KG. Wie viel Wirkstoff erhält der Patient täglich in Gramm?",
    ["0,1125 g", "1,125 g", "11,25 g", "112,5 g", "0,01125 g"],
    1,
    "Dosis = 75 kg × 15 mg/kg = 1125 mg = 1,125 g (da 1 g = 1000 mg).",
    "leicht",
    ["Einheiten", "Dosisberechnung", "Antibiotika", "klinische Mathematik"]
  ),

  // ─── mathe-kap2: Algebra & Geometrie (14 Fragen) ───

  q(
    "ma-pool-10-015",
    "mathe-kap2",
    "Ein kugelförmiger Tumor hat einen Radius von 1,5 cm. Nach Chemotherapie reduziert sich der Radius auf 1,0 cm. Um wie viel Prozent hat das Tumorvolumen abgenommen? (V = 4/3·π·r³)",
    ["33 %", "56 %", "70 %", "67 %", "44 %"],
    2,
    "V ∝ r³. Verhältnis: r₂³/r₁³ = 1,0³/1,5³ = 1/3,375 ≈ 0,296. Abnahme = 1 − 0,296 ≈ 70 %.",
    "schwer",
    ["Kugel", "Volumen", "Geometrie", "Onkologie", "Prozentrechnung"]
  ),
  q(
    "ma-pool-10-016",
    "mathe-kap2",
    "Bei der Henderson-Hasselbalch-Gleichung berechnet man den Quotienten [HCO₃⁻] / (0,03 × pCO₂) bei pCO₂ = 40 mmHg und [HCO₃⁻] = 24 mEq/L.",
    ["8", "16", "20", "24", "32"],
    2,
    "0,03 × 40 = 1,2. [HCO₃⁻] / 1,2 = 24 / 1,2 = 20. Damit ergibt sich pH = 6,1 + log(20) = 6,1 + 1,30 ≈ 7,4.",
    "mittel",
    ["Algebra", "Blutgasanalyse", "klinische Mathematik"]
  ),
  q(
    "ma-pool-10-017",
    "mathe-kap2",
    "Ein Medikament liegt als Lösung vor: n = 0,05 mol, V = 250 mL. Wie lautet die Konzentration c = n/V in mol/L?",
    ["0,02 mol/L", "0,2 mol/L", "2 mol/L", "5 mol/L", "0,002 mol/L"],
    1,
    "V = 250 mL = 0,25 L. c = n/V = 0,05 mol / 0,25 L = 0,2 mol/L.",
    "leicht",
    ["Algebra", "Konzentration", "Formelumstellung"]
  ),
  q(
    "ma-pool-10-018",
    "mathe-kap2",
    "Zwei Infusionsgefäße: A hat 200 mL mit 9 g/L NaCl, B hat 300 mL mit 4 g/L NaCl. Welche NaCl-Konzentration (g/L) hat die Mischung?",
    ["5,0 g/L", "6,0 g/L", "6,5 g/L", "7,0 g/L", "6,3 g/L"],
    1,
    "NaCl gesamt = 0,2 L × 9 g/L + 0,3 L × 4 g/L = 1,8 g + 1,2 g = 3,0 g. Gesamtvolumen = 0,5 L. c = 3,0 / 0,5 = 6,0 g/L.",
    "mittel",
    ["Algebra", "Mischungsrechnung", "Konzentration", "klinische Mathematik"]
  ),
  q(
    "ma-pool-10-019",
    "mathe-kap2",
    "Ein zylindrischer Infusionsbehälter hat Innendurchmesser 8 cm und Höhe 25 cm. Wie viel Milliliter fasst er? (π ≈ 3,14; 1 cm³ = 1 mL)",
    ["502 mL", "1004 mL", "1256 mL", "628 mL", "251 mL"],
    2,
    "r = 4 cm. V = π·r²·h = 3,14 × 16 × 25 = 3,14 × 400 = 1256 cm³ = 1256 mL.",
    "leicht",
    ["Geometrie", "Zylinder", "Volumen", "Infusion"]
  ),
  q(
    "ma-pool-10-020",
    "mathe-kap2",
    "Vereinfachen Sie den Ausdruck (4x³y²) / (2x²y⁴) für x ≠ 0, y ≠ 0.",
    ["2xy²", "2x/y²", "2y²/x", "xy²/2", "2x²/y²"],
    1,
    "(4/2) × x^(3−2) × y^(2−4) = 2 × x¹ × y⁻² = 2x/y².",
    "leicht",
    ["Algebra", "Potenzgesetze", "Bruchrechnung"]
  ),
  q(
    "ma-pool-10-021",
    "mathe-kap2",
    "Der BMI berechnet sich als BMI = m / h². Eine Person hat BMI = 27,8 und Körpergröße 1,75 m. Welches Körpergewicht (in kg) hat sie?",
    ["75 kg", "80 kg", "85 kg", "90 kg", "70 kg"],
    2,
    "m = BMI × h² = 27,8 × 1,75² = 27,8 × 3,0625 ≈ 85,1 kg ≈ 85 kg.",
    "mittel",
    ["Algebra", "Formelumstellung", "BMI", "klinische Mathematik"]
  ),
  q(
    "ma-pool-10-022",
    "mathe-kap2",
    "Ein Muskel hat Querschnittsfläche A = 12 cm². Nach Hypertrophie-Training vergrößert sich der Durchmesser um 20 %. Um wie viel Prozent nimmt die Querschnittsfläche zu?",
    ["20 %", "36 %", "40 %", "44 %", "24 %"],
    3,
    "A ∝ r². Neuer Radius = 1,2r. Neue Fläche = π(1,2r)² = 1,44·πr². Zunahme = 44 %.",
    "mittel",
    ["Geometrie", "Kreis", "Fläche", "Muskulatur", "Prozentrechnung"]
  ),
  q(
    "ma-pool-10-023",
    "mathe-kap2",
    "Lösen Sie das Gleichungssystem: 2x + y = 7 und x − y = 2. Was ist x + y?",
    ["3", "4", "5", "6", "7"],
    1,
    "Addition der Gleichungen: 3x = 9 → x = 3. Einsetzen: y = x − 2 = 1. Probe: 2·3 + 1 = 7 ✓, 3 − 1 = 2 ✓. Also x + y = 3 + 1 = 4.",
    "mittel",
    ["Algebra", "Gleichungssystem", "lineare Gleichungen"]
  ),
  q(
    "ma-pool-10-024",
    "mathe-kap2",
    "Ein Patienten-Röntgenbild wird mit dem Faktor 0,8 verkleinert. Eine Rippe erscheint auf dem Originalbild 15 cm lang. Welche Länge hat sie auf dem verkleinerten Bild?",
    ["10 cm", "11 cm", "12 cm", "13 cm", "18,75 cm"],
    2,
    "Verkleinerte Länge = 15 cm × 0,8 = 12 cm. Maßstabsfaktoren werden routinemäßig in der Radiologie verwendet.",
    "leicht",
    ["Algebra", "Proportionen", "Radiologie", "Maßstab"]
  ),
  q(
    "ma-pool-10-025",
    "mathe-kap2",
    "Faktorisieren Sie 6a²b − 9ab² vollständig.",
    ["3ab(2a − 3b)", "3ab(2b − 3a)", "ab(6a − 9b)", "6ab(a − b)", "3b(2a² − 3ab)"],
    0,
    "GGT von 6 und 9 ist 3; gemeinsamer Buchstabenfaktor ist ab. Also: 6a²b − 9ab² = 3ab(2a − 3b).",
    "leicht",
    ["Algebra", "Faktorisierung", "Ausklammern"]
  ),
  q(
    "ma-pool-10-026",
    "mathe-kap2",
    "Ein zylinderförmiger Muskel (Länge l, Durchmesser d) verkürzt sich bei Anspannung um 20 %. Das Volumen bleibt konstant. Um wie viel Prozent vergrößert sich der Durchmesser D?",
    ["10 %", "11,8 %", "20 %", "25 %", "44 %"],
    1,
    "V konstant: (D/2)² × 0,8l = (d/2)² × l → D²·0,8 = d² → D/d = 1/√0,8 = √1,25 ≈ 1,118. Zunahme ≈ 11,8 %.",
    "schwer",
    ["Geometrie", "Zylinder", "Volumen", "Muskulatur", "Prozentrechnung"]
  ),
  q(
    "ma-pool-10-027",
    "mathe-kap2",
    "Ein Stent ist ein Hohlzylinder mit Außenradius R = 2 mm, Innenradius r = 1,5 mm und Länge L = 20 mm. Wie groß ist das Materialvolumen (mm³)? (π ≈ 3,14)",
    ["55,0 mm³", "86,4 mm³", "109,9 mm³", "157,0 mm³", "43,2 mm³"],
    2,
    "V = π·L·(R² − r²) = 3,14 × 20 × (4 − 2,25) = 3,14 × 20 × 1,75 = 3,14 × 35 = 109,9 mm³.",
    "schwer",
    ["Geometrie", "Zylinder", "Volumen", "Kardiologie"]
  ),
  q(
    "ma-pool-10-028",
    "mathe-kap2",
    "Zwei Laborröhrchen: Röhrchen 1 hat Radius 2 cm, Röhrchen 2 hat Radius 3 cm, beide 10 cm hoch. Wie viel mehr Volumen (mL) fasst Röhrchen 2? (π ≈ 3,14)",
    ["157 mL", "251 mL", "314 mL", "628 mL", "125 mL"],
    0,
    "V₁ = 3,14 × 4 × 10 = 125,6 mL. V₂ = 3,14 × 9 × 10 = 282,6 mL. Differenz = 282,6 − 125,6 = 157 mL.",
    "mittel",
    ["Geometrie", "Zylinder", "Volumen", "Labor"]
  ),

  // ─── mathe-kap5: Funktionen & Analysis (14 Fragen) ───

  q(
    "ma-pool-10-029",
    "mathe-kap5",
    "Die Plasmahalbwertszeit eines Antibiotikums beträgt 3 h, die Anfangskonzentration c₀ = 800 mg/L. Nach welcher Zeit ist die Konzentration auf 100 mg/L gesunken?",
    ["6 h", "9 h", "12 h", "15 h", "18 h"],
    1,
    "800 → 400 → 200 → 100 mg/L: 3 Halbwertszeiten à 3 h = 9 h.",
    "leicht",
    ["Exponentialfunktion", "Halbwertszeit", "Pharmakokinetik"]
  ),
  q(
    "ma-pool-10-030",
    "mathe-kap5",
    "Ein Tumormarker wächst exponentiell: c(t) = 5·e^(0,2t) (ng/mL, t in Tagen). Nach wie vielen Tagen hat sich der Ausgangswert verdoppelt? (ln 2 ≈ 0,693)",
    ["2,5 Tage", "3,5 Tage", "5 Tage", "6,9 Tage", "10 Tage"],
    1,
    "c(t) = 10: e^(0,2t) = 2 → 0,2t = ln 2 ≈ 0,693 → t ≈ 3,47 ≈ 3,5 Tage.",
    "mittel",
    ["Exponentialfunktion", "Logarithmus", "Wachstum", "Onkologie"]
  ),
  q(
    "ma-pool-10-031",
    "mathe-kap5",
    "Der Blutglukosespiegel nach oraler Glukosebelastung: g(t) = −0,5t² + 4t + 5 (mmol/L, t in Stunden). Wann tritt der Maximalwert auf, und wie hoch ist er?",
    [
      "t = 4 h, g = 13 mmol/L",
      "t = 8 h, g = 5 mmol/L",
      "t = 4 h, g = 21 mmol/L",
      "t = 2 h, g = 9 mmol/L",
      "t = 4 h, g = 9 mmol/L",
    ],
    0,
    "g'(t) = −t + 4 = 0 → t = 4 h. g(4) = −0,5·16 + 16 + 5 = −8 + 16 + 5 = 13 mmol/L.",
    "mittel",
    ["quadratische Funktion", "Ableitung", "Extremum", "Glukose", "klinische Mathematik"]
  ),
  q(
    "ma-pool-10-032",
    "mathe-kap5",
    "Die Kraft eines Muskels als Funktion der Dehnung: F(x) = 3x² − 6x (N, x in cm). Für welchen Dehnungswert x > 0 ist die Kraft minimal?",
    ["x = 0,5 cm", "x = 1 cm", "x = 1,5 cm", "x = 2 cm", "x = 3 cm"],
    1,
    "F'(x) = 6x − 6 = 0 → x = 1 cm. F''(x) = 6 > 0 → Minimum bestätigt.",
    "mittel",
    ["quadratische Funktion", "Ableitung", "Extremum", "Biomechanik"]
  ),
  q(
    "ma-pool-10-033",
    "mathe-kap5",
    "Ein Enzym folgt der Michaelis-Menten-Kinetik: v = (Vmax·[S]) / (Km + [S]). Bei [S] = Km ist die Reaktionsgeschwindigkeit gleich:",
    ["v = Vmax", "v = Vmax/4", "v = Vmax/2", "v = 2·Vmax", "v = Vmax/3"],
    2,
    "Bei [S] = Km: v = (Vmax·Km)/(Km+Km) = Vmax/2. Km ist die Substratkonzentration bei halber Maximalgeschwindigkeit.",
    "leicht",
    ["Funktion", "Enzymkinetik", "Michaelis-Menten", "Biochemie"]
  ),
  q(
    "ma-pool-10-034",
    "mathe-kap5",
    "Der EKG-Ausschlag eines Patienten: y(t) = 2·sin(2πt/0,8) (mV, t in Sekunden). Welche Herzfrequenz (Schläge/min) entspricht dieser Funktion?",
    ["60/min", "75/min", "80/min", "100/min", "120/min"],
    1,
    "Periode T = 0,8 s. Herzfrequenz = 60 / 0,8 = 75 Schläge/min.",
    "leicht",
    ["Sinusfunktion", "Periode", "EKG", "Kardiologie"]
  ),
  q(
    "ma-pool-10-035",
    "mathe-kap5",
    "Die Konzentration eines Markers im Urin nimmt ab: c(t) = 80·e^(−0,1t) (mg/L, t in Stunden). Nach wie vielen Stunden beträgt die Konzentration noch 10 % des Ausgangswerts? (ln 10 ≈ 2,303)",
    ["10 h", "15 h", "23 h", "30 h", "46 h"],
    2,
    "0,1 × 80 = 80·e^(−0,1t) → e^(−0,1t) = 0,1 → −0,1t = −ln(10) ≈ −2,303 → t ≈ 23 h.",
    "mittel",
    ["Exponentialfunktion", "Logarithmus", "Nephrologie"]
  ),
  q(
    "ma-pool-10-036",
    "mathe-kap5",
    "Das Wachstum einer Bakterienkultur: f(t) = 1000·2^t (t in Stunden). Wie viele Bakterien gibt es nach 4 Stunden?",
    ["4000", "8000", "12 000", "16 000", "32 000"],
    3,
    "f(4) = 1000 × 2⁴ = 1000 × 16 = 16 000 Bakterien.",
    "leicht",
    ["Exponentialfunktion", "Wachstum", "Mikrobiologie"]
  ),
  q(
    "ma-pool-10-037",
    "mathe-kap5",
    "Die Lautstärke: L = 10·log(I/I₀) mit I₀ = 10⁻¹² W/m². Eine Schallintensität I = 10⁻⁵ W/m² ergibt welche Lautstärke?",
    ["50 dB", "60 dB", "70 dB", "80 dB", "100 dB"],
    2,
    "L = 10·log(10⁻⁵ / 10⁻¹²) = 10·log(10⁷) = 10 × 7 = 70 dB.",
    "mittel",
    ["Logarithmus", "Akustik", "Physik", "dB"]
  ),
  q(
    "ma-pool-10-038",
    "mathe-kap5",
    "Der Medikamentenspiegel im Blut wird über die AUC (Area under the curve) bewertet. Berechnen Sie ∫₀⁴ (12t − 3t²) dt.",
    ["32", "48", "64", "96", "16"],
    0,
    "∫(12t − 3t²)dt = 6t² − t³ + C. Auswertung: [6·16 − 64] − [0] = 96 − 64 = 32.",
    "schwer",
    ["Integral", "Analysis", "Pharmakokinetik", "AUC"]
  ),
  q(
    "ma-pool-10-039",
    "mathe-kap5",
    "Welche der folgenden Eigenschaften hat die Funktion f(x) = e^x?",
    [
      "f ist nach oben beschränkt",
      "f hat genau eine Nullstelle bei x = 0",
      "f ist streng monoton steigend und überall positiv",
      "f'(x) ist negativ für x < 0",
      "f ist symmetrisch zur y-Achse",
    ],
    2,
    "e^x ist für alle x ∈ ℝ positiv (> 0), hat keine Nullstelle, ist streng monoton steigend (f'(x) = e^x > 0) und nicht nach oben beschränkt. f(−x) = e^(−x) ≠ e^x, also keine y-Achsen-Symmetrie.",
    "leicht",
    ["Exponentialfunktion", "Eigenschaften", "Analysis"]
  ),
  q(
    "ma-pool-10-040",
    "mathe-kap5",
    "Das Sehvermögen nach einer OP: V(t) = 1,2·(1 − e^(−0,5t)) (Visus, t in Wochen). Welchen Grenzwert strebt V(t) für t → ∞ an?",
    ["0", "0,5", "0,6", "1,2", "∞"],
    3,
    "Für t → ∞: e^(−0,5t) → 0. Daher V → 1,2·(1 − 0) = 1,2. Das Modell beschreibt eine asymptotische Erholung.",
    "mittel",
    ["Exponentialfunktion", "Grenzwert", "Asymptote", "Ophthalmologie"]
  ),
  q(
    "ma-pool-10-041",
    "mathe-kap5",
    "Ein Medikament wird i.v. appliziert: c(t) = 100·e^(−0,35t) (mg/L). Nach welcher Zeit ist die Halbwertszeit erreicht? (ln 2 ≈ 0,693)",
    ["1,0 h", "1,5 h", "2,0 h", "2,5 h", "3,5 h"],
    2,
    "50 = 100·e^(−0,35t) → e^(−0,35t) = 0,5 → 0,35t = ln 2 ≈ 0,693 → t ≈ 1,98 ≈ 2,0 h.",
    "mittel",
    ["Exponentialfunktion", "Halbwertszeit", "Pharmakokinetik", "Logarithmus"]
  ),
  q(
    "ma-pool-10-042",
    "mathe-kap5",
    "Der Druckgradient in einer Arterie: P(x) = 5·cos(πx/10) (mmHg, x in cm). Wo liegt das erste Druckminimum für x > 0?",
    ["x = 5 cm", "x = 10 cm", "x = 15 cm", "x = 20 cm", "x = 2,5 cm"],
    1,
    "cos(πx/10) = −1 (Minimum) wenn πx/10 = π → x = 10 cm.",
    "mittel",
    ["Kosinusfunktion", "Minimum", "Kardiologie", "Trigonometrie"]
  ),

  // ─── mathe-kap6: Vektoren (14 Fragen) ───

  q(
    "ma-pool-10-043",
    "mathe-kap6",
    "Ein Knochen wird durch zwei Muskeln gezogen: F₁ = (6, 0, 0) N und F₂ = (0, 8, 0) N. Wie groß ist die resultierende Kraft |F₁ + F₂|?",
    ["7 N", "10 N", "12 N", "14 N", "6 N"],
    1,
    "|F₁+F₂| = |(6, 8, 0)| = √(36+64+0) = √100 = 10 N.",
    "leicht",
    ["Vektoren", "Betrag", "Biomechanik", "Kraftvektoren"]
  ),
  q(
    "ma-pool-10-044",
    "mathe-kap6",
    "Der Ortsvektor eines Tumors im MRT: r₁ = (2, 3, 5) cm. Ein Lymphknoten liegt bei r₂ = (5, 7, 5) cm. Wie groß ist der Abstand?",
    ["3 cm", "4 cm", "5 cm", "6 cm", "7 cm"],
    2,
    "|r₂−r₁| = |(3, 4, 0)| = √(9+16+0) = √25 = 5 cm.",
    "leicht",
    ["Vektoren", "Abstand", "Radiologie", "MRT"]
  ),
  q(
    "ma-pool-10-045",
    "mathe-kap6",
    "Zwei Kräfte wirken auf ein Gelenk: F₁ = (3, −4) N und F₂ = (1, 4) N. Was gilt für die Resultante?",
    [
      "Die Resultante zeigt in y-Richtung, Betrag 4 N.",
      "Die Resultante zeigt in x-Richtung, Betrag 4 N.",
      "Die Resultante hat Betrag 5 N.",
      "Die Resultante hat Betrag √17 N.",
      "Die x-Komponenten heben sich auf.",
    ],
    1,
    "F₁+F₂ = (4, 0) N. Betrag = 4 N, Richtung: +x. Die y-Komponenten (+4 und −4) heben sich auf.",
    "leicht",
    ["Vektoren", "Vektoraddition", "Biomechanik", "Gelenk"]
  ),
  q(
    "ma-pool-10-046",
    "mathe-kap6",
    "Ein Endoskop wird entlang des Vektors v = (2, 1, −2) eingeführt (in cm). Wie lang ist der Einführungsweg?",
    ["2 cm", "3 cm", "4 cm", "5 cm", "6 cm"],
    1,
    "|v| = √(4+1+4) = √9 = 3 cm.",
    "leicht",
    ["Vektoren", "Betrag", "Endoskopie", "Medizintechnik"]
  ),
  q(
    "ma-pool-10-047",
    "mathe-kap6",
    "Das Skalarprodukt zweier Muskelvektoren: F₁ = (3, 4, 0) und F₂ = (4, −3, 0). Was ergibt F₁ · F₂?",
    ["−5", "0", "5", "25", "12"],
    1,
    "F₁·F₂ = 3×4 + 4×(−3) + 0×0 = 12 − 12 + 0 = 0. Die beiden Kräfte stehen senkrecht aufeinander.",
    "leicht",
    ["Vektoren", "Skalarprodukt", "Orthogonalität", "Biomechanik"]
  ),
  q(
    "ma-pool-10-048",
    "mathe-kap6",
    "Ein Laparoskop bewegt sich von A = (1, 2, 3) nach B = (4, 6, 3) und dann nach C = (4, 6, 7) (in cm). Welche Gesamtstrecke legt es zurück?",
    ["5 cm", "8 cm", "9 cm", "12 cm", "7 cm"],
    2,
    "|AB| = |(3, 4, 0)| = √(9+16) = 5 cm. |BC| = |(0, 0, 4)| = 4 cm. Gesamt = 5 + 4 = 9 cm.",
    "mittel",
    ["Vektoren", "Abstand", "Laparoskopie", "Medizintechnik"]
  ),
  q(
    "ma-pool-10-049",
    "mathe-kap6",
    "Der Winkel zwischen zwei Knochenvektoren a = (1, 0, 0) und b = (1, 1, 0) beträgt:",
    ["30°", "45°", "60°", "90°", "0°"],
    1,
    "cos θ = (a·b)/(|a|·|b|) = 1/(1·√2) = 1/√2 ≈ 0,707 → θ = 45°.",
    "mittel",
    ["Vektoren", "Winkel", "Skalarprodukt", "Biomechanik"]
  ),
  q(
    "ma-pool-10-050",
    "mathe-kap6",
    "Eine OP-Lampe strahlt in Richtung d = (0, 0, −1). Der OP-Tisch hat Normalenvektor n = (0, 0, 1). Unter welchem Winkel zur Tischfläche trifft der Lichtstrahl auf?",
    ["0°", "30°", "45°", "60°", "90°"],
    4,
    "d ist antiparallel zu n: cos θ = d·n/(|d|·|n|) = −1. Winkel zwischen Strahl und Normale = 180° → Winkel zur Fläche = 90°. Der Strahl trifft senkrecht auf.",
    "mittel",
    ["Vektoren", "Winkel", "Skalarprodukt", "Ebene"]
  ),
  q(
    "ma-pool-10-051",
    "mathe-kap6",
    "Das Kreuzprodukt der Vektoren a = (1, 0, 0) und b = (0, 1, 0) ergibt:",
    ["(0, 0, 0)", "(1, 1, 0)", "(0, 0, 1)", "(−1, 0, 0)", "(0, −1, 0)"],
    2,
    "a × b = (0·0−0·1, 0·0−1·0, 1·1−0·0) = (0, 0, 1). Das Kreuzprodukt zweier orthogonaler Einheitsvektoren ergibt den dritten Einheitsvektor.",
    "mittel",
    ["Vektoren", "Kreuzprodukt", "Vektorrechnung"]
  ),
  q(
    "ma-pool-10-052",
    "mathe-kap6",
    "Ein Operationsroboter verfährt entlang: r(t) = (1, 2, 3) + t·(2, −1, 4). Welcher Punkt liegt für t = 2 auf der Geraden?",
    ["(3, 0, 7)", "(5, 0, 11)", "(4, 1, 8)", "(2, 3, 6)", "(3, 1, 7)"],
    1,
    "r(2) = (1+4, 2−2, 3+8) = (5, 0, 11).",
    "mittel",
    ["Vektoren", "Gerade", "Parameterdarstellung", "Robotik"]
  ),
  q(
    "ma-pool-10-053",
    "mathe-kap6",
    "Zwei Verschiebungsvektoren: u = (3, −1, 2) mm und v = (−1, 2, −1) mm. Berechnen Sie u − v.",
    ["(4, −3, 3) mm", "(2, 1, 1) mm", "(3, −3, 3) mm", "(4, −3, 1) mm", "(2, −3, 3) mm"],
    0,
    "u − v = (3−(−1), −1−2, 2−(−1)) = (4, −3, 3) mm.",
    "leicht",
    ["Vektoren", "Subtraktion", "Biomechanik"]
  ),
  q(
    "ma-pool-10-054",
    "mathe-kap6",
    "Ein Ultraschallkopf sendet in Richtung w = (3, 4) (zweidimensional). Der Einheitsvektor in dieser Richtung lautet:",
    ["(0,6; 0,8)", "(0,75; 1)", "(0,5; 0,5)", "(1; 4/3)", "(3; 4)"],
    0,
    "|w| = √(9+16) = 5. Einheitsvektor = w/|w| = (3/5, 4/5) = (0,6; 0,8).",
    "leicht",
    ["Vektoren", "Einheitsvektor", "Ultraschall", "Medizintechnik"]
  ),
  q(
    "ma-pool-10-055",
    "mathe-kap6",
    "Ein Katheter wird entlang r(t) = t·(1, 2, 2) eingeführt. Nach welchem Parameterwert t hat der Katheter 9 cm zurückgelegt?",
    ["t = 1", "t = 2", "t = 3", "t = 4", "t = 5"],
    2,
    "|t·(1, 2, 2)| = t·√(1+4+4) = t·3 = 9 → t = 3.",
    "mittel",
    ["Vektoren", "Betrag", "Gerade", "Kardiologie"]
  ),
  q(
    "ma-pool-10-056",
    "mathe-kap6",
    "Drei Kräfte wirken auf ein Gelenk: F₁ = (2, 0, 0) N, F₂ = (0, 3, 0) N, F₃ = (0, 0, −6) N. Welchen Betrag hat die Resultante?",
    ["5 N", "7 N", "9 N", "11 N", "6 N"],
    1,
    "|F₁+F₂+F₃| = |(2, 3, −6)| = √(4+9+36) = √49 = 7 N.",
    "leicht",
    ["Vektoren", "Betrag", "Vektoraddition", "Biomechanik"]
  ),

  // ARCHIVED: mathe-kap7 (Stochastik) — 14 Fragen entfernt (nicht in MedAT 2026 Stichwortliste)
];
