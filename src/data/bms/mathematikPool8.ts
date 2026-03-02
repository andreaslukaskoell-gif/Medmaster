/**
 * Mathematik BMS Pool 8 — 70 Fragen im MedAT-Stil (Typ A).
 * Stoff: mathe-kap1 (Zahlen & Einheiten), mathe-kap2 (Algebra & Geometrie), mathe-kap5 (Funktionen).
 * Verteilung: ~23 kap1 / ~24 kap2 / ~23 kap5.
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

export const mathematikPool8: Question[] = [
  // ─── mathe-kap1: Zahlen, Einheiten, Zehnerpotenzen, SI-Präfixe ──────────────

  q(
    "ma-pool-8-001",
    "mathe-kap1",
    "Ein Labor gibt die Konzentration eines Enzyms mit 2,4 × 10⁻³ mol/L an. Ein zweites Labor misst dieselbe Substanz mit 0,0024 mol/L. Welche der folgenden Aussagen ist korrekt?",
    [
      "Das zweite Labor misst eine 10-mal höhere Konzentration.",
      "Die Messungen unterscheiden sich um den Faktor 1000.",
      "Beide Angaben beschreiben dieselbe Konzentration.",
      "Das erste Labor misst eine 100-mal höhere Konzentration.",
      "Die Angaben sind nicht vergleichbar, da unterschiedliche Einheiten vorliegen.",
    ],
    2,
    "2,4 × 10⁻³ mol/L = 0,0024 mol/L. Beide Schreibweisen sind äquivalent. Die Wissenschaftliche Notation und die Dezimalschreibweise stellen denselben Wert dar.",
    "leicht",
    ["Zehnerpotenzen", "Wissenschaftliche Notation", "Einheiten"]
  ),

  q(
    "ma-pool-8-002",
    "mathe-kap1",
    "Ein Medikament wird in einer Dosis von 250 Mikrogramm (µg) verabreicht. Wie viel Gramm entspricht diese Menge?",
    ["0,025 g", "0,0025 g", "2,5 × 10⁻⁴ g", "2,5 × 10⁻³ g", "25 × 10⁻⁴ g"],
    2,
    "1 µg = 10⁻⁶ g. Daher: 250 µg = 250 × 10⁻⁶ g = 2,5 × 10⁻⁴ g. Optionen A und B sind zu groß, D ist 10-fach zu groß, E ist gleichwertig zu C aber unvorteilhaft notiert.",
    "leicht",
    ["SI-Präfixe", "Mikro", "Umrechnung"]
  ),

  q(
    "ma-pool-8-003",
    "mathe-kap1",
    "Ein Blutzuckermessgerät zeigt 5,6 mmol/L an. Der Arzt möchte den Wert in mg/dL umrechnen. Gegeben: 1 mmol/L Glukose ≈ 18 mg/dL. Welcher Wert ergibt sich?",
    ["56 mg/dL", "310 mg/dL", "101 mg/dL", "100,8 mg/dL", "5,6 mg/dL"],
    3,
    "5,6 mmol/L × 18 mg/dL pro mmol/L = 100,8 mg/dL. Dies liegt im Normbereich (70–100 mg/dL nüchtern).",
    "leicht",
    ["Einheiten", "Umrechnung", "Blutzucker"]
  ),

  q(
    "ma-pool-8-004",
    "mathe-kap1",
    "Die mittlere Körperoberfläche eines Erwachsenen beträgt ca. 1,73 m². Wie groß ist diese Fläche in cm²?",
    ["173 cm²", "17 300 cm²", "1 730 cm²", "173 000 cm²", "1 730 000 cm²"],
    1,
    "1 m² = 10 000 cm². Daher: 1,73 m² = 1,73 × 10 000 cm² = 17 300 cm². Die Einheitenumrechnung erfordert das Quadrieren des Umrechnungsfaktors (1 m = 100 cm, also 1 m² = 100² cm²).",
    "leicht",
    ["Flächeneinheiten", "Umrechnung", "m² zu cm²"]
  ),

  q(
    "ma-pool-8-005",
    "mathe-kap1",
    "Ein Röntgenbild zeigt eine Knochendichte von 1,2 g/cm³. Das Gesamtvolumen des untersuchten Knochens beträgt 45 cm³. In Nanogramm (ng) ausgedrückt: Wie viel Masse hat dieser Knochen?",
    ["5,4 × 10¹⁰ ng", "5,4 × 10¹² ng", "54 × 10⁹ ng", "5,4 × 10¹³ ng", "5,4 × 10¹¹ ng"],
    0,
    "Masse = 1,2 g/cm³ × 45 cm³ = 54 g. 1 g = 10⁹ ng, also 54 g = 54 × 10⁹ ng = 5,4 × 10¹⁰ ng.",
    "mittel",
    ["Nano", "SI-Präfixe", "Dichte", "Zehnerpotenzen"]
  ),

  q(
    "ma-pool-8-006",
    "mathe-kap1",
    "Ein Herzschrittmacher sendet Impulse mit einer Frequenz von 70 Hz. Welches Intervall (in Millisekunden) liegt zwischen zwei aufeinanderfolgenden Impulsen?",
    ["14,3 ms", "70 ms", "143 ms", "1,43 ms", "700 ms"],
    0,
    "Periode T = 1/f = 1/70 s ≈ 0,01429 s = 14,29 ms ≈ 14,3 ms. Bei 70 Schlägen pro Sekunde sind das etwa 14,3 ms zwischen den Impulsen.",
    "mittel",
    ["Frequenz", "Periode", "Millisekunden", "Umrechnung"]
  ),

  q(
    "ma-pool-8-007",
    "mathe-kap1",
    "Ein Laborgerät misst Ströme im Bereich von 1 pA bis 1 nA. Um welchen Faktor unterscheiden sich die Grenzwerte?",
    ["10", "100", "1 000", "10 000", "100 000"],
    2,
    "1 pA = 10⁻¹² A und 1 nA = 10⁻⁹ A. Der Faktor beträgt 10⁻⁹ / 10⁻¹² = 10³ = 1 000.",
    "leicht",
    ["SI-Präfixe", "Pico", "Nano", "Zehnerpotenzen"]
  ),

  q(
    "ma-pool-8-008",
    "mathe-kap1",
    "Ein Blutdruckmessgerät gibt 120 mmHg systolisch an. 1 mmHg entspricht 133,322 Pa. Welcher Druck in kPa entspricht 120 mmHg? (Näherung: 1 mmHg ≈ 133 Pa)",
    ["1,6 kPa", "16 kPa", "0,16 kPa", "160 kPa", "1,6 MPa"],
    1,
    "120 mmHg × 133 Pa/mmHg = 15 960 Pa ≈ 16 kPa. 1 kPa = 1 000 Pa, daher 15 960 Pa / 1 000 ≈ 16 kPa.",
    "mittel",
    ["Druckeinheiten", "mmHg", "kPa", "Umrechnung"]
  ),

  q(
    "ma-pool-8-009",
    "mathe-kap1",
    "Die Avogadro-Konstante beträgt N_A = 6,022 × 10²³ mol⁻¹. Wie viele Moleküle enthält 0,5 mol einer Substanz?",
    ["3,011 × 10²³", "6,022 × 10²³", "1,2044 × 10²⁴", "3,011 × 10²²", "6,022 × 10²²"],
    0,
    "Anzahl der Moleküle = n × N_A = 0,5 mol × 6,022 × 10²³ mol⁻¹ = 3,011 × 10²³ Moleküle.",
    "leicht",
    ["Avogadro", "Mol", "Zehnerpotenzen"]
  ),

  q(
    "ma-pool-8-010",
    "mathe-kap1",
    "Ein Patient erhält eine intravenöse Infusion von 1 L Flüssigkeit über 8 Stunden. Die Infusionsrate soll in mL/min angegeben werden. Welcher Wert ist korrekt?",
    ["12,5 mL/min", "2,08 mL/min", "125 mL/min", "0,208 mL/min", "20,8 mL/min"],
    1,
    "1 L = 1 000 mL, 8 h = 480 min. Rate = 1 000 mL / 480 min ≈ 2,083 mL/min ≈ 2,08 mL/min.",
    "leicht",
    ["Einheiten", "Umrechnung", "Infusionsrate", "mL/min"]
  ),

  q(
    "ma-pool-8-011",
    "mathe-kap1",
    "Ein Zellkern hat einen Durchmesser von 6 µm. In Nanometern (nm) ausgedrückt beträgt der Durchmesser:",
    ["0,006 nm", "60 nm", "600 nm", "6 000 nm", "60 000 nm"],
    3,
    "1 µm = 1 000 nm. Daher: 6 µm = 6 000 nm.",
    "leicht",
    ["SI-Präfixe", "Mikro", "Nano", "Zellbiologie"]
  ),

  q(
    "ma-pool-8-012",
    "mathe-kap1",
    "Ein Radionuklid hat eine Aktivität von 3,7 × 10¹⁰ Bq (1 Curie). Nach 3 Halbwertszeiten: Wie viele Zerfälle pro Sekunde finden noch statt?",
    ["4,625 × 10⁹ Bq", "1,85 × 10¹⁰ Bq", "9,25 × 10⁹ Bq", "2,312 × 10⁹ Bq", "7,4 × 10¹⁰ Bq"],
    0,
    "Nach n Halbwertszeiten: A = A₀ × (1/2)ⁿ. Nach 3 HWZ: A = 3,7 × 10¹⁰ × (1/8) = 4,625 × 10⁹ Bq.",
    "mittel",
    ["Halbwertszeit", "Radioaktivität", "Zehnerpotenzen", "Exponentialfunktion"]
  ),

  q(
    "ma-pool-8-013",
    "mathe-kap1",
    "Die Schallgeschwindigkeit in Luft beträgt 343 m/s. Ein Ultraschallgerät in der Medizin arbeitet mit einer Frequenz von 5 MHz. Wie groß ist die Wellenlänge des Schalls in Luft?",
    ["68,6 µm", "686 µm", "6,86 × 10⁻⁵ m", "6,86 × 10⁻² m", "68,6 mm"],
    0,
    "λ = c/f = 343 m/s / (5 × 10⁶ Hz) = 6,86 × 10⁻⁵ m = 68,6 µm. Option C ist gleichwertig zu A in SI-Einheiten.",
    "mittel",
    ["Wellenlänge", "Frequenz", "Ultraschall", "SI-Präfixe"]
  ),

  q(
    "ma-pool-8-014",
    "mathe-kap1",
    "Ein Körpergewicht von 75 kg entspricht einer Masse von 75 000 g. Wie viele Milligramm (mg) sind das?",
    ["7,5 × 10⁴ mg", "7,5 × 10⁶ mg", "7,5 × 10⁷ mg", "7,5 × 10⁵ mg", "7,5 × 10⁸ mg"],
    2,
    "1 g = 1 000 mg = 10³ mg. 75 000 g = 75 000 × 10³ mg = 7,5 × 10⁴ × 10³ mg = 7,5 × 10⁷ mg.",
    "leicht",
    ["Milligramm", "Umrechnung", "SI-Präfixe"]
  ),

  q(
    "ma-pool-8-015",
    "mathe-kap1",
    "Im Chemielabor werden 2,5 mmol einer Substanz mit einer Konzentration von 50 µmol/mL in einem Puffer gelöst. Welches Volumen in mL wird benötigt?",
    ["5 mL", "50 mL", "500 mL", "0,05 mL", "0,5 mL"],
    1,
    "Volumen = Stoffmenge / Konzentration = 2,5 mmol / 50 µmol/mL. Umrechnung: 2,5 mmol = 2 500 µmol. V = 2 500 µmol / 50 µmol/mL = 50 mL.",
    "mittel",
    ["Konzentration", "Mol", "Umrechnung", "Laborrechnung"]
  ),

  q(
    "ma-pool-8-016",
    "mathe-kap1",
    "Der Normbereich des Hämoglobins bei Männern beträgt 13,5–17,5 g/dL. Wie viel Gramm Hämoglobin enthält das Blut eines Mannes mit 5 L Blutvolumen und einem Hb-Wert von 15 g/dL?",
    ["75 g", "7,5 g", "150 g", "750 g", "15 g"],
    3,
    "1 L = 10 dL, also 5 L = 50 dL. Hämoglobin-Masse = 15 g/dL × 50 dL = 750 g. Ein häufiger Fehler ist 5 × 15 = 75 (ohne Einheitenumrechnung von L auf dL).",
    "mittel",
    ["Hämoglobin", "Einheiten", "dL", "Umrechnung"]
  ),

  q(
    "ma-pool-8-017",
    "mathe-kap1",
    "Ein MRT-Gerät erzeugt ein Magnetfeld von 3 Tesla (T). Gegeben, dass 1 T = 10 000 Gauss (G), wie stark ist das Feld in Kilogauss (kG)?",
    ["30 kG", "300 kG", "3 kG", "0,3 kG", "3 000 kG"],
    0,
    "3 T × 10 000 G/T = 30 000 G. 1 kG = 1 000 G, also 30 000 G = 30 kG.",
    "leicht",
    ["Magnetfeld", "Tesla", "Gauss", "Umrechnung"]
  ),

  q(
    "ma-pool-8-018",
    "mathe-kap1",
    "Ein Pharmakologe beschreibt die Halbwertszeit eines Antibiotikums mit t₁/₂ = 4 h. Welcher Prozentsatz der Ausgangsdosis ist nach 12 Stunden noch im Körper vorhanden?",
    ["50 %", "25 %", "12,5 %", "6,25 %", "3,125 %"],
    2,
    "12 h = 3 × t₁/₂. Nach 3 Halbwertszeiten: (1/2)³ = 1/8 = 12,5 % der Ausgangsdosis.",
    "leicht",
    ["Halbwertszeit", "Pharmakokinetik", "Exponentialfunktion"]
  ),

  q(
    "ma-pool-8-019",
    "mathe-kap1",
    "Die Lichtgeschwindigkeit beträgt c = 3 × 10⁸ m/s. Eine Röntgenstrahlung hat eine Wellenlänge von 0,1 nm. Welche Frequenz hat diese Strahlung?",
    ["3 × 10¹⁷ Hz", "3 × 10¹⁸ Hz", "3 × 10¹⁶ Hz", "3 × 10¹⁵ Hz", "3 × 10¹⁹ Hz"],
    1,
    "f = c/λ = (3 × 10⁸ m/s) / (0,1 × 10⁻⁹ m) = (3 × 10⁸) / (10⁻¹⁰) = 3 × 10¹⁸ Hz.",
    "mittel",
    ["Frequenz", "Wellenlänge", "Lichtgeschwindigkeit", "Röntgen"]
  ),

  q(
    "ma-pool-8-020",
    "mathe-kap1",
    "Ein Neugeborenes wiegt 3 250 g. Der Kinderarzt möchte die Dosis eines Medikaments mit 10 mg/kg berechnen. Wie viel mg erhält das Kind? (Angabe auf 0,1 mg gerundet)",
    ["325,0 mg", "32,5 mg", "3 250 mg", "3,25 mg", "3 250,0 mg"],
    1,
    "3 250 g = 3,25 kg. Dosis = 10 mg/kg × 3,25 kg = 32,5 mg. Typischer Fehler: Gramm statt kg einsetzen gibt 32 500 mg — viel zu viel.",
    "leicht",
    ["Dosisberechnung", "Gewicht", "mg/kg"]
  ),

  q(
    "ma-pool-8-021",
    "mathe-kap1",
    "Kalzitonin wird in Einheiten (IE) gemessen. 1 IE Kalzitonin entspricht 0,2 µg. Ein Patient erhält 100 IE täglich. Wie viel Mikrogramm erhält er pro Woche?",
    ["140 µg", "1 400 µg", "14 µg", "200 µg", "700 µg"],
    0,
    "Pro Tag: 100 IE × 0,2 µg/IE = 20 µg. Pro Woche: 20 µg × 7 = 140 µg.",
    "leicht",
    ["Einheiten", "Dosisberechnung", "Umrechnung"]
  ),

  q(
    "ma-pool-8-022",
    "mathe-kap1",
    "Ein Blutdruckgerät misst 80 mmHg diastolisch. 760 mmHg entsprechen 1 Atm (= 101 325 Pa). In Pa ausgedrückt entspricht 80 mmHg näherungsweise:",
    ["10 666 Pa", "8 000 Pa", "106 658 Pa", "1 066,6 Pa", "80 000 Pa"],
    0,
    "80 mmHg × (101 325 Pa / 760 mmHg) = 80 × 133,32 Pa ≈ 10 666 Pa.",
    "mittel",
    ["Druckeinheiten", "mmHg", "Pascal", "Umrechnung"]
  ),

  q(
    "ma-pool-8-023",
    "mathe-kap1",
    "Die Masse eines Erythrozyten beträgt ca. 27 pg. Wie viele Erythrozyten enthält 1 g Erythrozytenmasse? (1 pg = 10⁻¹² g)",
    ["3,7 × 10¹⁰", "3,7 × 10¹¹", "3,7 × 10¹²", "3,7 × 10⁹", "3,7 × 10⁸"],
    0,
    "Anzahl = 1 g / (27 × 10⁻¹² g) = 10¹² / 27 ≈ 3,7 × 10¹⁰. Probe: 27 × 3,7 × 10¹⁰ ≈ 10¹² = 1 g ✓.",
    "schwer",
    ["Pico", "SI-Präfixe", "Erythrozyten", "Zehnerpotenzen"]
  ),

  // ─── mathe-kap2: Algebra, Geometrie, Gleichungen, Prozentrechnung ───────────

  q(
    "ma-pool-8-024",
    "mathe-kap2",
    "Ein Patient nimmt täglich 3 Tabletten zu je 500 mg. Nach einer Woche hat er 20 % seines Vorrats aufgebraucht. Wie viele Milligramm enthielt der ursprüngliche Vorrat?",
    ["52 500 mg", "10 500 mg", "105 000 mg", "21 000 mg", "7 350 mg"],
    0,
    "Tagesverbrauch: 3 × 500 mg = 1 500 mg. Wochenverbrauch: 1 500 × 7 = 10 500 mg. Das entspricht 20 % des Vorrats. Vorrat = 10 500 / 0,20 = 52 500 mg.",
    "mittel",
    ["Prozentrechnung", "Algebra", "Dosisberechnung"]
  ),

  q(
    "ma-pool-8-025",
    "mathe-kap2",
    "Ein Blutgefäß hat einen Radius von r = 2 mm. Nach Arteriosklerose verengt sich der Radius auf r' = 1,5 mm. Um welchen Prozentsatz nimmt das Strömungsvolumen ab, wenn der Volumenstrom proportional zu r⁴ ist (Hagen-Poiseuille)?",
    ["68,4 %", "43,75 %", "56,25 %", "36 %", "50 %"],
    0,
    "Nach Hagen-Poiseuille: Q ∝ r⁴. Q'/Q = (r'/r)⁴ = (1,5/2)⁴ = (0,75)⁴ = 0,5625² ≈ 0,316. Abnahme = 1 − 0,316 = 0,684 ≈ 68,4 %. Eine scheinbar kleine Verengung führt durch die 4. Potenz zu einem drastischen Flussverlust.",
    "schwer",
    ["Hagen-Poiseuille", "Prozentrechnung", "Geometrie", "Blutgefäß"]
  ),

  q(
    "ma-pool-8-026",
    "mathe-kap2",
    "Eine NaCl-Lösung wird von 9 % auf 0,9 % verdünnt. Um welchen Faktor muss das Volumen vergrößert werden?",
    ["10", "9", "100", "0,1", "90"],
    0,
    "c₁ × V₁ = c₂ × V₂ ⇒ V₂/V₁ = c₁/c₂ = 9 %/0,9 % = 10. Das Volumen muss verzehnfacht werden.",
    "leicht",
    ["Verdünnung", "Gleichung", "Konzentration", "Prozentrechnung"]
  ),

  q(
    "ma-pool-8-027",
    "mathe-kap2",
    "Ein rechteckiger Verband wird auf eine Wunde gelegt. Die Wunde ist 8 cm lang und 3 cm breit. Der Verband überlappt auf jeder Seite um 2 cm. Welche Fläche hat der Verband?",
    ["24 cm²", "84 cm²", "48 cm²", "60 cm²", "96 cm²"],
    1,
    "Länge des Verbands: 8 + 2 + 2 = 12 cm. Breite: 3 + 2 + 2 = 7 cm. Fläche = 12 × 7 = 84 cm².",
    "leicht",
    ["Rechteck", "Fläche", "Geometrie"]
  ),

  q(
    "ma-pool-8-028",
    "mathe-kap2",
    "Das Herzminutenvolumen (HMV) berechnet sich als HMV = Herzfrequenz × Schlagvolumen. Bei einem Patienten beträgt die Herzfrequenz 72/min und das Schlagvolumen 70 mL. Um wie viel Prozent steigt das HMV, wenn die Herzfrequenz auf 90/min ansteigt und das Schlagvolumen konstant bleibt?",
    ["18 %", "20 %", "25 %", "28,6 %", "15 %"],
    2,
    "HMV₁ = 72 × 70 = 5 040 mL/min. HMV₂ = 90 × 70 = 6 300 mL/min. Zunahme = (6 300 − 5 040)/5 040 = 1 260/5 040 = 0,25 = 25 %.",
    "leicht",
    ["Herzminutenvolumen", "Prozentrechnung", "Proportionalität"]
  ),

  q(
    "ma-pool-8-029",
    "mathe-kap2",
    "Ein zylindrisches Teströhrchen hat einen Radius von 0,5 cm und eine Höhe von 10 cm. Wie viel mL Blut fasst es maximal? (Hinweis: 1 mL = 1 cm³, π ≈ 3,14)",
    ["7,85 mL", "3,14 mL", "15,7 mL", "1,57 mL", "31,4 mL"],
    0,
    "V = π × r² × h = 3,14 × (0,5)² × 10 = 3,14 × 0,25 × 10 = 7,85 cm³ = 7,85 mL.",
    "leicht",
    ["Zylinder", "Volumen", "Geometrie", "Blutabnahme"]
  ),

  q(
    "ma-pool-8-030",
    "mathe-kap2",
    "Ein Pharmakologe arbeitet mit dem Kd-Wert einer Rezeptor-Ligand-Bindung. Die Gleichgewichtskonstante ist gegeben als Kd = [R][L]/[RL] = 10 µM. Wenn [R] = 40 µM und [RL] = 20 µM, welche Konzentration [L] liegt vor?",
    ["5 µM", "20 µM", "2 µM", "0,5 µM", "10 µM"],
    0,
    "[L] = Kd × [RL]/[R] = 10 × 20/40 = 5 µM.",
    "mittel",
    ["Gleichgewichtskonstante", "Algebra", "Pharmakologie", "Gleichung"]
  ),

  q(
    "ma-pool-8-031",
    "mathe-kap2",
    "Eine Glasampulle enthält 2 mL einer 10 mg/mL-Lösung. Die Hälfte des Inhalts wird entnommen und mit 3 mL Wasser gemischt. Welche Konzentration (mg/mL) hat die neue Lösung?",
    ["2,5 mg/mL", "5 mg/mL", "2 mg/mL", "3,3 mg/mL", "1 mg/mL"],
    0,
    "Entnommene Menge: 1 mL × 10 mg/mL = 10 mg. Neues Volumen: 1 mL + 3 mL = 4 mL. Konzentration = 10 mg / 4 mL = 2,5 mg/mL.",
    "mittel",
    ["Konzentration", "Verdünnung", "Algebra", "Dosisberechnung"]
  ),

  q(
    "ma-pool-8-032",
    "mathe-kap2",
    "Das Blutvolumen eines Menschen beträgt ca. 7 % seines Körpergewichts. Ein 80 kg schwerer Patient verliert 600 mL Blut. Welcher Prozentsatz seines gesamten Blutvolumens wurde verloren?",
    ["9,375 %", "7,5 %", "10,7 %", "6 %", "8,3 %"],
    2,
    "Blutvolumen = 0,07 × 80 kg = 5,6 kg ≈ 5 600 mL. Verlust in %: 600/5 600 × 100 ≈ 10,71 %.",
    "mittel",
    ["Prozentrechnung", "Blutvolumen", "Gleichung"]
  ),

  q(
    "ma-pool-8-033",
    "mathe-kap2",
    "Beim Lösen einer quadratischen Gleichung x² − 5x + 6 = 0 erhält man zwei Lösungen. Welche sind korrekt?",
    ["x₁ = 1, x₂ = 6", "x₁ = 2, x₂ = 3", "x₁ = −2, x₂ = −3", "x₁ = −1, x₂ = −6", "x₁ = 2, x₂ = −3"],
    1,
    "x² − 5x + 6 = (x − 2)(x − 3) = 0 ⇒ x₁ = 2, x₂ = 3. Probe: 4 − 10 + 6 = 0 ✓, 9 − 15 + 6 = 0 ✓.",
    "leicht",
    ["Quadratische Gleichung", "Faktorisierung", "Algebra"]
  ),

  q(
    "ma-pool-8-034",
    "mathe-kap2",
    "Zwei Lösungen werden gemischt: 200 mL einer 5 %-igen Glucoselösung mit 300 mL einer 10 %-igen Glucoselösung. Wie viel Prozent Glucose hat die Mischlösung?",
    ["7 %", "7,5 %", "8 %", "7,2 %", "6,5 %"],
    2,
    "Glucose gesamt: 200 × 0,05 + 300 × 0,10 = 10 + 30 = 40 g. Gesamtvolumen: 500 mL. Konzentration: 40/500 = 0,08 = 8 %.",
    "mittel",
    ["Mischungsrechnung", "Prozentrechnung", "Gleichung"]
  ),

  q(
    "ma-pool-8-035",
    "mathe-kap2",
    "Ein Kreis mit dem Radius r = 5 cm hat eine kreisförmige Öffnung (Loch) mit Radius 2 cm in der Mitte. Wie groß ist die verbleibende ringförmige Fläche? (π ≈ 3,14)",
    ["62,8 cm²", "65,94 cm²", "78,5 cm²", "47,1 cm²", "81,64 cm²"],
    1,
    "A_Ring = π × (r_außen² − r_innen²) = 3,14 × (25 − 4) = 3,14 × 21 = 65,94 cm².",
    "mittel",
    ["Kreisfläche", "Kreisring", "Geometrie"]
  ),

  q(
    "ma-pool-8-036",
    "mathe-kap2",
    "Ein Kind wächst im ersten Lebensjahr um 25 cm (von 50 cm auf 75 cm). Um wie viel Prozent nimmt die Körpergröße zu?",
    ["33,3 %", "25 %", "50 %", "40 %", "20 %"],
    2,
    "Prozentualer Zuwachs = (75 − 50)/50 × 100 = 25/50 × 100 = 50 %.",
    "leicht",
    ["Prozentrechnung", "Wachstum", "Pädiatrie"]
  ),

  q(
    "ma-pool-8-037",
    "mathe-kap2",
    "Die dritte binomische Formel lautet (a + b)(a − b) = a² − b². Ein Gefäßdurchmesser ändert sich von (r + Δr) auf (r − Δr). Welcher Ausdruck beschreibt die Änderung der Kreisfläche (ΔA = A_neu − A_alt)?",
    [
      "ΔA = −4π·r·Δr",
      "ΔA = −π·(Δr)²",
      "ΔA = −π·(r² − Δr²)",
      "ΔA = 4π·r·Δr",
      "ΔA = π·(2r·Δr − (Δr)²)",
    ],
    0,
    "A_alt = π(r+Δr)², A_neu = π(r−Δr)². ΔA = π[(r−Δr)² − (r+Δr)²] = π[(r²−2rΔr+Δr²)−(r²+2rΔr+Δr²)] = π(−4rΔr) = −4πrΔr.",
    "schwer",
    ["Binomische Formel", "Kreisfläche", "Algebra", "Gefäß"]
  ),

  q(
    "ma-pool-8-038",
    "mathe-kap2",
    "Bei einem Bluttest werden 4 Proben in einem Röhrchenständer angeordnet. Jedes Röhrchen hat einen Außendurchmesser von 1,5 cm. Wie breit muss der Ständer mindestens sein, damit alle 4 Röhrchen nebeneinander passen?",
    ["5 cm", "6 cm", "4 cm", "8 cm", "7,5 cm"],
    1,
    "Breite = 4 × Durchmesser = 4 × 1,5 cm = 6 cm.",
    "leicht",
    ["Geometrie", "Durchmesser", "Längenrechnung"]
  ),

  q(
    "ma-pool-8-039",
    "mathe-kap2",
    "Ein Patient nimmt täglich 3 verschiedene Medikamente: A (2 Tabletten à 100 mg), B (1 Tablette à 250 mg) und C (3 Tabletten à 50 mg). Wie viel mg nimmt er täglich insgesamt?",
    ["600 mg", "550 mg", "650 mg", "700 mg", "500 mg"],
    0,
    "A: 2 × 100 = 200 mg. B: 1 × 250 = 250 mg. C: 3 × 50 = 150 mg. Gesamt: 200 + 250 + 150 = 600 mg.",
    "leicht",
    ["Dosisberechnung", "Addition", "Medikamente"]
  ),

  q(
    "ma-pool-8-040",
    "mathe-kap2",
    "Das Gewicht eines Organs folgt der Gleichung m = 0,003 × L³ (m in Gramm, L in cm, Länge des Organs). Ein Organ hat die Länge L = 10 cm. Wie viel Gramm wiegt es?",
    ["0,3 g", "30 g", "3 g", "300 g", "3 000 g"],
    2,
    "m = 0,003 × 10³ = 0,003 × 1 000 = 3 g.",
    "leicht",
    ["Potenz", "Gleichung", "Algebra"]
  ),

  q(
    "ma-pool-8-041",
    "mathe-kap2",
    "Zwei Ärzte teilen sich die Nachtschichten im Verhältnis 3:5. Insgesamt sind 40 Nachtschichten zu vergeben. Wie viele erhält der Arzt mit dem kleineren Anteil?",
    ["8", "15", "25", "12", "10"],
    1,
    "Gesamtteile: 3 + 5 = 8. Kleinerer Anteil: 3/8 × 40 = 15 Nachtschichten.",
    "leicht",
    ["Verhältnisrechnung", "Teilung", "Algebra"]
  ),

  q(
    "ma-pool-8-042",
    "mathe-kap2",
    "Die Körpermasse-Index-Formel lautet BMI = m/h² (m in kg, h in m). Eine Frau ist 1,65 m groß und hat einen BMI von 22. Welche Körpermasse hat sie? (auf ganze Zahlen gerundet)",
    ["54 kg", "60 kg", "65 kg", "58 kg", "70 kg"],
    1,
    "m = BMI × h² = 22 × (1,65)² = 22 × 2,7225 = 59,9 ≈ 60 kg.",
    "mittel",
    ["BMI", "Gleichung", "Quadrat", "Algebra"]
  ),

  q(
    "ma-pool-8-043",
    "mathe-kap2",
    "Ein Tumor wächst exponentiell und verdoppelt seine Masse alle 30 Tage. Anfangsmasse: 1 g. Nach wie vielen Tagen hat er 8 g erreicht?",
    ["60 Tage", "90 Tage", "120 Tage", "240 Tage", "30 Tage"],
    1,
    "8 = 1 × 2ⁿ ⇒ 2ⁿ = 8 = 2³ ⇒ n = 3 Verdoppelungen. Zeit: 3 × 30 = 90 Tage.",
    "mittel",
    ["Exponentielles Wachstum", "Verdoppelung", "Gleichung"]
  ),

  q(
    "ma-pool-8-044",
    "mathe-kap2",
    "Eine Kapsel hat die Form eines Zylinders (Radius 3 mm, Höhe 8 mm) mit zwei Halbkugeln an den Enden (Radius 3 mm). Wie groß ist das Gesamtvolumen? (π ≈ 3,14)",
    ["339 mm³", "226 mm³", "113 mm³", "452 mm³", "678 mm³"],
    0,
    "Zylinder: V = π r² h = 3,14 × 9 × 8 = 226,08 mm³. Kugel (aus 2 Halbkugeln): V = (4/3)π r³ = (4/3) × 3,14 × 27 = 113,04 mm³. Gesamt: 226,08 + 113,04 ≈ 339 mm³.",
    "schwer",
    ["Volumen", "Zylinder", "Kugel", "Geometrie", "Kapsel"]
  ),

  q(
    "ma-pool-8-045",
    "mathe-kap2",
    "In einem klinischen Test werden 120 Patienten im Verhältnis 2:1 in Therapie- und Kontrollgruppe aufgeteilt. Wie viele Patienten sind in der Therapiegruppe?",
    ["60", "80", "40", "90", "72"],
    1,
    "Verhältnis 2:1, Gesamtteile = 3. Therapiegruppe: (2/3) × 120 = 80 Patienten.",
    "leicht",
    ["Verhältnisrechnung", "Klinische Studie", "Algebra"]
  ),

  q(
    "ma-pool-8-046",
    "mathe-kap2",
    "Ein Chirurg schneidet eine elliptische Wunde aus. Die große Halbachse beträgt a = 4 cm, die kleine Halbachse b = 2 cm. Welche Fläche hat die Wunde? (A_Ellipse = π · a · b, π ≈ 3,14)",
    ["25,12 cm²", "12,56 cm²", "50,24 cm²", "8 cm²", "16 cm²"],
    0,
    "A = π × a × b = 3,14 × 4 × 2 = 25,12 cm².",
    "mittel",
    ["Ellipse", "Fläche", "Geometrie", "Wunde"]
  ),

  q(
    "ma-pool-8-047",
    "mathe-kap2",
    "Die Gleichung eines Wachstumsprozesses lautet: 2x + 3 = x/2 + 12. Welchen Wert hat x?",
    ["x = 4", "x = 6", "x = 3", "x = 8", "x = 5"],
    1,
    "2x + 3 = x/2 + 12. Multipliziere mit 2: 4x + 6 = x + 24. 3x = 18. x = 6.",
    "leicht",
    ["Lineare Gleichung", "Algebra"]
  ),

  // ─── mathe-kap5: Funktionen, Ableitungen, Integrale, Logarithmen, Trig ──────

  q(
    "ma-pool-8-048",
    "mathe-kap5",
    "Der pH-Wert einer Lösung ist definiert als pH = −log₁₀[H⁺]. Eine Lösung hat [H⁺] = 10⁻⁷ mol/L. Wie ändert sich der pH-Wert, wenn die Protonenkonzentration auf [H⁺] = 10⁻⁵ mol/L steigt?",
    [
      "Der pH sinkt um 2.",
      "Der pH steigt um 2.",
      "Der pH verdoppelt sich.",
      "Der pH halbiert sich.",
      "Der pH bleibt gleich.",
    ],
    0,
    "pH₁ = −log(10⁻⁷) = 7. pH₂ = −log(10⁻⁵) = 5. Änderung: 5 − 7 = −2. Der pH sinkt um 2.",
    "leicht",
    ["Logarithmus", "pH-Wert", "Chemie", "Biochemie"]
  ),

  q(
    "ma-pool-8-049",
    "mathe-kap5",
    "Die Konzentration eines Medikaments im Blut folgt c(t) = c₀ × e⁻ᵏᵗ mit k = 0,1 h⁻¹. Nach welcher Zeit ist die Konzentration auf e⁻¹ ≈ 37 % des Ausgangswerts gesunken? (ln(e) = 1)",
    ["10 h", "1 h", "0,1 h", "100 h", "3,7 h"],
    0,
    "c(t) = c₀ × e⁻ᵏᵗ = c₀ × e⁻¹ ⇒ k × t = 1 ⇒ t = 1/k = 1/0,1 = 10 h.",
    "mittel",
    ["Exponentialfunktion", "Pharmakokinetik", "e-Funktion"]
  ),

  q(
    "ma-pool-8-050",
    "mathe-kap5",
    "Die Körpertemperatur eines Patienten über 24 Stunden wird durch f(t) = 37 + 0,5·sin(πt/12) beschrieben (t in Stunden, f in °C). Wie lautet die maximale Körpertemperatur?",
    ["37 °C", "37,5 °C", "38 °C", "36,5 °C", "38,5 °C"],
    1,
    "Maximum von sin ist 1. f_max = 37 + 0,5 × 1 = 37,5 °C.",
    "leicht",
    ["Sinusfunktion", "Maximum", "Körpertemperatur"]
  ),

  q(
    "ma-pool-8-051",
    "mathe-kap5",
    "Die Blutflussrate durch eine Arterie wird modelliert als Q(r) = k · r⁴. Welche Ableitung Q'(r) beschreibt die Änderungsrate des Flusses bei Veränderung des Radius?",
    ["Q'(r) = 4k · r³", "Q'(r) = k · r³", "Q'(r) = 4k · r⁵", "Q'(r) = k⁴ · r³", "Q'(r) = 4k³ · r"],
    0,
    "Q(r) = k · r⁴. Ableitung nach r: Q'(r) = 4k · r³ (Potenzregel).",
    "leicht",
    ["Ableitung", "Potenzregel", "Blutfluss", "Hagen-Poiseuille"]
  ),

  q(
    "ma-pool-8-052",
    "mathe-kap5",
    "Ein EKG-Signal wird mit f(t) = 2·sin(2πt/0,8) modelliert (t in Sekunden). Welche Periode T hat das Signal?",
    ["0,4 s", "0,8 s", "2π s", "1,6 s", "2 s"],
    1,
    "Allgemeine Sinusfunktion: f(t) = A·sin(2πt/T). Durch Vergleich: T = 0,8 s (entspricht 75 Schlägen/min).",
    "leicht",
    ["Sinusfunktion", "Periode", "EKG", "Trigonometrie"]
  ),

  q(
    "ma-pool-8-053",
    "mathe-kap5",
    "Das Integral ∫₀² (2x + 1) dx beschreibt die kumulierte Dosis eines Medikaments über 2 Stunden (in willkürlichen Einheiten). Welchen Wert hat das Integral?",
    ["6", "4", "5", "8", "10"],
    0,
    "∫₀² (2x+1) dx = [x² + x]₀² = (4 + 2) − (0) = 6.",
    "mittel",
    ["Integral", "Dosisberechnung", "Stammfunktion"]
  ),

  q(
    "ma-pool-8-054",
    "mathe-kap5",
    "Die Henderson-Hasselbalch-Gleichung lautet: pH = pKa + log₁₀([A⁻]/[HA]). Bei pH = 7,4 und pKa = 6,1 (Kohlensäure/Bicarbonat): Welches Verhältnis [HCO₃⁻]/[H₂CO₃] liegt im Blut vor?",
    ["20:1", "10:1", "5:1", "1:20", "2:1"],
    0,
    "7,4 = 6,1 + log([HCO₃⁻]/[H₂CO₃]). log([HCO₃⁻]/[H₂CO₃]) = 1,3. 10^1,3 ≈ 20. Verhältnis ≈ 20:1.",
    "mittel",
    ["Logarithmus", "Henderson-Hasselbalch", "Säure-Base", "Biochemie"]
  ),

  q(
    "ma-pool-8-055",
    "mathe-kap5",
    "Eine Wachstumskurve einer Bakterienkolonie folgt N(t) = N₀ · 2^(t/20) (t in Minuten). Wie viele Generationen sind nach 100 Minuten durchlaufen?",
    ["2", "4", "5", "10", "20"],
    2,
    "Anzahl der Generationen = t / Generationszeit = 100 / 20 = 5.",
    "leicht",
    ["Exponentielles Wachstum", "Generationszeit", "Logarithmus"]
  ),

  q(
    "ma-pool-8-056",
    "mathe-kap5",
    "Die Ableitung der Sinusfunktion f(x) = sin(x) lautet f'(x) = cos(x). Welcher Wert hat f'(π/2)?",
    ["1", "0", "−1", "√2/2", "√3/2"],
    1,
    "f'(π/2) = cos(π/2) = 0.",
    "leicht",
    ["Ableitung", "Kosinus", "Sinusfunktion", "Trigonometrie"]
  ),

  q(
    "ma-pool-8-057",
    "mathe-kap5",
    "Ein Radiologe analysiert eine Abklingkurve: I(t) = I₀ · e⁻⁰·⁰⁵ᵗ (t in Stunden). Welche Halbwertszeit in Stunden hat die Strahlung? (Hinweis: HWZ = ln(2)/λ, ln(2) ≈ 0,693)",
    ["13,86 h", "0,05 h", "20 h", "6,93 h", "1,386 h"],
    0,
    "HWZ = ln(2)/λ = 0,693/0,05 = 13,86 h.",
    "mittel",
    ["Halbwertszeit", "Exponentialfunktion", "Radioaktivität", "Logarithmus"]
  ),

  q(
    "ma-pool-8-058",
    "mathe-kap5",
    "Die Dosis-Wirkungs-Beziehung eines Medikaments ist E(c) = E_max · c/(EC₅₀ + c). Dies ist die Hill-Gleichung. Bei c = EC₅₀ beträgt die Wirkung:",
    ["0,25 · E_max", "0,5 · E_max", "0,75 · E_max", "E_max", "0"],
    1,
    "E(EC₅₀) = E_max × EC₅₀ / (EC₅₀ + EC₅₀) = E_max × EC₅₀ / (2 × EC₅₀) = 0,5 · E_max. Das ist die Definition von EC₅₀ (effektive Konzentration bei 50 % Maximalwirkung).",
    "leicht",
    ["Hill-Gleichung", "Pharmakologie", "Funktion", "Algebra"]
  ),

  q(
    "ma-pool-8-059",
    "mathe-kap5",
    "Eine Patientenkurve zeigt, dass der systolische Blutdruck mit p(t) = 120 + 30·cos(2πt/24) variiert (t in Stunden). Wann ist der Blutdruck am höchsten?",
    ["Bei t = 6 h", "Bei t = 12 h", "Bei t = 24 h", "Bei t = 0 h", "Bei t = 18 h"],
    3,
    "cos(0) = 1 ist das Maximum des Kosinus. cos(2π×0/24) = cos(0) = 1. Maximum bei t = 0 h (und 24 h als Periode). Zu t = 0: p = 120 + 30 = 150 mmHg.",
    "mittel",
    ["Kosinusfunktion", "Maximum", "Blutdruck", "Trigonometrie"]
  ),

  q(
    "ma-pool-8-060",
    "mathe-kap5",
    "Die Steigung der Tangente an die Kurve f(x) = x³ − 3x im Punkt x = 2 gibt die momentane Änderungsrate an. Wie groß ist diese Steigung?",
    ["6", "9", "2", "12", "3"],
    1,
    "f'(x) = 3x² − 3. f'(2) = 3 × 4 − 3 = 12 − 3 = 9.",
    "mittel",
    ["Ableitung", "Steigung", "Tangente", "Potenzregel"]
  ),

  q(
    "ma-pool-8-061",
    "mathe-kap5",
    "log₂(32) hat den Wert:",
    ["4", "5", "6", "16", "3"],
    1,
    "2⁵ = 32 ⇒ log₂(32) = 5.",
    "leicht",
    ["Logarithmus", "Basis 2", "Algebra"]
  ),

  q(
    "ma-pool-8-062",
    "mathe-kap5",
    "Ein Physiologe beschreibt die Viskosität η(T) einer Flüssigkeit als Funktion der Temperatur: η(T) = A · e^(B/T). Die Ableitung dη/dT ist proportional zu:",
    ["e^(B/T)", "−B/T² · e^(B/T)", "B/T · e^(B/T)", "−1/T · e^(B/T)", "A · B · e^(B/T)"],
    1,
    "Kettenregel: d/dT [e^(B/T)] = e^(B/T) × d/dT(B/T) = e^(B/T) × (−B/T²). Daher dη/dT = A × (−B/T²) × e^(B/T) ∝ −B/T² · e^(B/T).",
    "schwer",
    ["Ableitung", "Kettenregel", "Exponentialfunktion", "Viskosität"]
  ),

  q(
    "ma-pool-8-063",
    "mathe-kap5",
    "Ein Strahlengang trifft eine Grenzfläche unter einem Einfallswinkel von 30° (zur Normalen). Der Brechungsindex der zweiten Schicht beträgt n₂ = 1,5 (n₁ = 1,0). Welchen Brechungswinkel β ergibt das Snelliussche Gesetz? (sin 30° = 0,5; arcsin 0,333 ≈ 19,5°)",
    ["30°", "45°", "19,5°", "41,8°", "60°"],
    2,
    "n₁ sin α = n₂ sin β ⇒ sin β = sin 30° / 1,5 = 0,5/1,5 = 0,333. β = arcsin(0,333) ≈ 19,5°.",
    "schwer",
    ["Trigonometrie", "Snellius", "Brechungsgesetz", "Optik"]
  ),

  q(
    "ma-pool-8-064",
    "mathe-kap5",
    "Eine Druckkurve in einem Blutgefäß wird durch p(x) = 5·ln(x) (in mmHg) modelliert, wobei x der Abstand in cm vom Herzen ist. Wie groß ist die Ableitung p'(x) bei x = 5 cm?",
    ["5 mmHg/cm", "1 mmHg/cm", "ln(5) mmHg/cm", "25 mmHg/cm", "0,2 mmHg/cm"],
    1,
    "p'(x) = 5 × (1/x). Bei x = 5: p'(5) = 5/5 = 1 mmHg/cm.",
    "mittel",
    ["Ableitung", "Logarithmus", "Natürlicher Logarithmus"]
  ),

  q(
    "ma-pool-8-065",
    "mathe-kap5",
    "Das bestimmte Integral ∫₁⁴ (1/x) dx entspricht dem natürlichen Logarithmus von 4. Welchen Wert hat ln(4)? (ln(2) ≈ 0,693)",
    ["0,693", "1,386", "2", "1,099", "0,602"],
    1,
    "ln(4) = ln(2²) = 2 × ln(2) = 2 × 0,693 = 1,386.",
    "mittel",
    ["Logarithmus", "Integral", "Logarithmengesetze"]
  ),

  q(
    "ma-pool-8-066",
    "mathe-kap5",
    "Ein Pharmakologe beschreibt die Eliminationsrate eines Toxins mit f(t) = 200 − 20t (in mg/h). Das Toxin wurde zur Zeit t = 0 injiziert. Nach wie vielen Stunden ist die Eliminationsrate null?",
    ["5 h", "10 h", "20 h", "200 h", "4 h"],
    1,
    "f(t) = 0: 200 − 20t = 0 ⇒ t = 10 h.",
    "leicht",
    ["Lineare Funktion", "Nullstelle", "Pharmakokinetik"]
  ),

  q(
    "ma-pool-8-067",
    "mathe-kap5",
    "Eine Wachstumsfunktion eines Tumors lautet V(t) = 2 · e^(0,2t) (V in mL, t in Wochen). Welche Wachstumsrate dV/dt hat der Tumor zum Zeitpunkt t = 0?",
    ["0,2 mL/Woche", "2 mL/Woche", "0,4 mL/Woche", "1 mL/Woche", "4 mL/Woche"],
    2,
    "dV/dt = 2 × 0,2 × e^(0,2t) = 0,4 × e^(0,2t). Bei t = 0: dV/dt = 0,4 × e⁰ = 0,4 mL/Woche.",
    "mittel",
    ["Ableitung", "Exponentialfunktion", "Wachstum", "Tumor"]
  ),

  q(
    "ma-pool-8-068",
    "mathe-kap5",
    "Ein Reizleitungsmodell beschreibt die Membranspannung mit V(t) = V_max · (1 − e^(−t/τ)) (τ = 2 ms). Nach welcher Zeit hat V(t) den Wert 0,5 · V_max erreicht? (ln(2) ≈ 0,693)",
    ["1,386 ms", "2 ms", "4 ms", "0,693 ms", "1 ms"],
    0,
    "0,5 = 1 − e^(−t/τ) ⇒ e^(−t/τ) = 0,5 ⇒ −t/τ = ln(0,5) = −ln(2) ⇒ t = τ × ln(2) = 2 × 0,693 = 1,386 ms.",
    "schwer",
    ["Exponentialfunktion", "Logarithmus", "Membranpotential", "Neurophysiologie"]
  ),

  q(
    "ma-pool-8-069",
    "mathe-kap5",
    "Ein Physiotherapeut berechnet den Winkel eines Gelenks. Das Verhältnis der Gegenkathete zur Hypotenuse im Dreieck beträgt 0,866. Welchem Winkel entspricht das? (sin 30° = 0,5; sin 60° = 0,866; sin 45° = 0,707)",
    ["30°", "45°", "60°", "90°", "75°"],
    2,
    "sin(α) = Gegenkathete/Hypotenuse = 0,866 = sin(60°). Der Gelenkwinkel beträgt 60°.",
    "leicht",
    ["Trigonometrie", "Sinus", "Winkel", "Geometrie"]
  ),

  q(
    "ma-pool-8-070",
    "mathe-kap5",
    "Ein Physiologe beschreibt den Sauerstoffsättigungsverlauf als S(p) = p^n / (p^n + p₅₀^n) (Hill-Funktion). Bei n = 1 und p = p₅₀ beträgt die Sättigung S:",
    ["25 %", "50 %", "75 %", "100 %", "37 %"],
    1,
    "S(p₅₀) = p₅₀^n / (p₅₀^n + p₅₀^n) = p₅₀^n / (2 × p₅₀^n) = 1/2 = 50 %. p₅₀ ist definitionsgemäß die Konzentration bei 50 % Sättigung.",
    "mittel",
    ["Hill-Funktion", "Sauerstoffsättigung", "Physiologie", "Algebra"]
  ),
];
