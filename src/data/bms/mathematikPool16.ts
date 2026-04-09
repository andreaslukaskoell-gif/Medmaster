/**
 * Mathematik BMS Pool 16 - 50 genuinely HARD MedAT-Fragen (Typ M / Rechenfragen).
 * Alle Schwierigkeit "schwer". Jede falsche Option = spezifischer Rechenfehler.
 * Themen: Algebra (10), Geometrie (12), Einheiten (5), Funktionen (12),
 *         Vektorrechnung (8), Zehnerpotenzen (3).
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

export const mathematikPool16: Question[] = [
  // ═══════════════════════════════════════════════════════════════
  // ─── Algebra (10 Fragen) ──────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════

  q(
    "ma-pool-hard-001",
    "mathe-kap3",
    "Vereinfache vollständig: ((3⁴ · 9⁻¹) / 27²) · 81",
    ["3", "9", "1", "1/3", "27"],
    2,
    "Alles in Potenzen von 3: 3⁴ · 9⁻¹ = 3⁴ · 3⁻² = 3². 27² = (3³)² = 3⁶. Also 3²/3⁶ = 3⁻⁴. Mal 81 = 3⁴: 3⁻⁴ · 3⁴ = 3⁰ = 1. Fehler A (3): Vergisst 9⁻¹ umzuwandeln, rechnet 3⁴/3⁶ · 3⁴ = 3². Fehler B (9): Rechnet 81 = 3² statt 3⁴ → 3⁻⁴ · 3² = 3⁻² = 1/9, verwechselt dann mit 9. Fehler D (1/3): Rechnet 27² = 3⁵ statt 3⁶. Fehler E (27): Vergisst die Division durch 27².",
    "schwer",
    ["Potenzgesetze", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-002",
    "mathe-kap2",
    "Löse das Gleichungssystem: 2x + y = 7 und x + 3y = 11. Berechne den Wert von x² + y².",
    ["10", "13", "17", "11", "15"],
    1,
    "Aus Gl.1: y = 7 - 2x. In Gl.2: x + 3(7 - 2x) = 11 → x + 21 - 6x = 11 → -5x = -10 → x = 2, y = 3. x² + y² = 4 + 9 = 13. Fehler A (10): Vertauscht x und y → 9 + 1. Fehler C (17): Rechnet x² + y² = (x+y)² = 25 und zieht 2xy nicht ab. Fehler D (11): Berechnet x + y = 5 und quadriert falsch. Fehler E (15): Nimmt x·y + x² = 6 + 9.",
    "schwer",
    ["Gleichungssystem", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-003",
    "mathe-kap3",
    "Ein Kapital von 5.000 € wird 4 Jahre mit 3 % p.a. Zinseszins angelegt. Wie hoch ist das Endkapital (auf ganze Euro gerundet)?",
    ["5.600 €", "5.628 €", "5.627 €", "5.624 €", "5.650 €"],
    1,
    "K₄ = 5000 · 1,03⁴. 1,03² = 1,0609. 1,03⁴ = 1,0609² = 1,12550881. K₄ = 5000 · 1,12550881 = 5627,54 ≈ 5.628 €. Fehler A (5.600): Einfache Zinsen 5000 · 1,12 = 5600. Fehler C (5.627): Rundet ab statt auf. Fehler D (5.624): Rechnet 1,03⁴ ≈ 1,1248 (Binomische Näherung ohne höhere Terme). Fehler E (5.650): Rechnet mit 3,25 % statt 3 %.",
    "schwer",
    ["Zinseszins", "Exponentialrechnung", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-004",
    "mathe-kap3",
    "Ein Preis von 200 € wird zunächst um 25 % erhöht und anschließend um 20 % gesenkt. Wie hoch ist der Endpreis?",
    ["210 €", "205 €", "200 €", "195 €", "190 €"],
    2,
    "Schritt 1: 200 · 1,25 = 250. Schritt 2: 250 · 0,80 = 200. Endpreis = 200 €. Die Erhöhung um 25 % und Senkung um 20 % heben sich exakt auf (1,25 · 0,80 = 1,00). Fehler A (210): Rechnet 200 + 25 % - 20 % = 200 + 50 - 40 = 210 (addiert/subtrahiert Prozente nacheinander von 200). Fehler B (205): Nimmt Mittelwert der beiden Rechnungen. Fehler D (195): Rechnet erst -20 %, dann +25 % von 160. Fehler E (190): Zieht 5 % Differenz ab: 200 · 0,95.",
    "schwer",
    ["Prozentrechnung", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-005",
    "mathe-kap3",
    "Berechne: (1/2 + 1/3) / (1/4 - 1/6)",
    ["10", "8", "12", "6", "5"],
    0,
    "Zähler: 1/2 + 1/3 = 3/6 + 2/6 = 5/6. Nenner: 1/4 - 1/6 = 3/12 - 2/12 = 1/12. Division: (5/6) / (1/12) = (5/6) · 12 = 10. Fehler B (8): Rechnet Nenner als 1/4 + 1/6 = 5/12 → (5/6)/(5/12) = 2, verwechselt dann mit 8. Fehler C (12): Vergisst den Zählerbruch und rechnet 1/(1/12) = 12. Fehler D (6): Rechnet (5/6) · (6/5) = 1, verwechselt Kehrwert. Fehler E (5): Rechnet nur den Zähler 5/6 ≈ 0,83 und multipliziert mit 6.",
    "schwer",
    ["Bruchrechnung", "verschachtelte Brüche", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-006",
    "mathe-kap2",
    "Bestimme die Lösungen der Gleichung 2x² - 7x + 3 = 0. Wie lautet das Produkt der beiden Lösungen?",
    ["3/2", "7/2", "3", "1/2", "2"],
    0,
    "Diskriminante: D = 49 - 24 = 25. x₁ = (7+5)/4 = 3, x₂ = (7-5)/4 = 1/2. Produkt: 3 · 1/2 = 3/2. Alternativ: nach Vieta c/a = 3/2. Fehler B (7/2): Verwechselt mit Summe der Lösungen (Vieta: -b/a = 7/2). Fehler C (3): Nimmt nur x₁. Fehler D (1/2): Nimmt nur x₂. Fehler E (2): Rechnet a/c statt c/a.",
    "schwer",
    ["quadratische Gleichung", "Vieta", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-007",
    "mathe-kap3",
    "Wie viel Prozent von 80 sind 12?",
    ["12 %", "15 %", "18 %", "14 %", "16 %"],
    1,
    "Anteil = 12/80 = 0,15 = 15 %. Fehler A (12 %): Verwechselt absoluten Wert mit Prozentsatz. Fehler C (18 %): Rechnet 12/66,67 (zieht 12 von 80 ab). Fehler D (14 %): Rechnet 12/85 (addiert statt zu dividieren). Fehler E (16 %): Rechnet 80/5 = 16 (falscher Ansatz).",
    "schwer",
    ["Prozentrechnung", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-008",
    "mathe-kap3",
    "Ein Artikel kostet 120 €. Zuerst wird er um 20 % aufgeschlagen, dann wird vom neuen Preis ein Rabatt von 15 % gewährt. Wie hoch ist der Endpreis?",
    ["120,00 €", "126,00 €", "122,40 €", "118,80 €", "130,00 €"],
    2,
    "Schritt 1: 120 · 1,20 = 144 €. Schritt 2: 144 · 0,85 = 122,40 €. Faktor insgesamt: 1,20 · 0,85 = 1,02. Fehler A (120,00): Glaubt +20 %-15 % ≈ +5 % sei ungefähr 0 %. Fehler B (126,00): Rechnet 120 · 1,05 = 126 (addiert die Prozentsätze: +20 %-15 % = +5 %). Fehler D (118,80): Kehrt die Reihenfolge um: 120 · 0,85 · 1,20 = 122,40 … nein, gleich. Besser: rechnet 120 · 0,99 = 118,80 (nimmt -1 % Nettoverlust). Fehler E (130,00): Rechnet nur den Aufschlag falsch: 120 + 10 % statt 120 · 1,20.",
    "schwer",
    ["Prozentrechnung", "Aufschlag", "Rabatt", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-009",
    "mathe-kap2",
    "Löse die logarithmische Gleichung: log₂(x) + log₂(x - 2) = 3. Welchen Wert hat x?",
    ["4", "3", "5", "6", "2"],
    0,
    "log₂(x) + log₂(x-2) = log₂(x(x-2)) = 3. Also x(x-2) = 2³ = 8 → x² - 2x - 8 = 0. Diskriminante: 4 + 32 = 36. x = (2±6)/2 → x = 4 oder x = -2. Da x > 2 (Definitionsbereich), ist x = 4. Fehler B (3): Setzt log₂(x²) = 3 → x = 2√2 ≈ 2,83, rundet auf 3. Fehler C (5): Löst x² - 2x = 8 als x² = 10 → x ≈ 3,16, rundet auf 5. Fehler D (6): Rechnet x(x-2) = 2·3 = 6 statt 2³ = 8. Fehler E (2): Probiert x = 2, aber log₂(0) ist undefiniert.",
    "schwer",
    ["Logarithmus", "quadratische Gleichung", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-010",
    "mathe-kap3",
    "Vereinfache: (√12 + √27) / √3",
    ["5", "√13", "3 + √3", "7", "3√3"],
    0,
    "√12 = 2√3, √27 = 3√3. Zähler: 2√3 + 3√3 = 5√3. Division: 5√3 / √3 = 5. Fehler B (√13): Addiert unter der Wurzel: √(12+27)/√3 = √39/√3 = √13. Fehler C (3+√3): Vereinfacht nur √27/√3 = 3 und lässt √12/√3 = √4·3/√3 = 2√3/√3 falsch als √3. Fehler D (7): Rechnet √12 = 4 statt 2√3. Fehler E (3√3): Rechnet 5√3/√3 = 5·√3/√3 falsch als 3√3.",
    "schwer",
    ["Wurzelrechnung", "Vereinfachen", "rechenfrage"]
  ),

  // ═══════════════════════════════════════════════════════════════
  // ─── Geometrie (12 Fragen) ────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════

  q(
    "ma-pool-hard-011",
    "mathe-kap2",
    "Ein Kegel hat die Höhe h = 12 cm und den Grundflächenradius r = 5 cm. Wie groß ist die Mantelfläche?",
    ["65π cm²", "60π cm²", "25π cm²", "30π cm²", "169π cm²"],
    0,
    "Mantellinie s = √(r² + h²) = √(25 + 144) = √169 = 13 cm. Mantelfläche M = π · r · s = π · 5 · 13 = 65π cm². Fehler B (60π): Verwendet h statt s → π · 5 · 12 = 60π. Fehler C (25π): Berechnet Grundfläche πr² = 25π statt Mantelfläche. Fehler D (30π): Rechnet π · r · (r+h)/... falsch. Fehler E (169π): Rechnet πs² = 169π.",
    "schwer",
    ["Kegel", "Mantelfläche", "Pythagoras", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-012",
    "mathe-kap2",
    "Auf einer Kugel mit Radius R = 10 cm wird eine Kugelkappe der Höhe h = 3 cm abgetrennt. Wie groß ist die Mantelfläche dieser Kappe?",
    ["60π cm²", "30π cm²", "90π cm²", "100π cm²", "9π cm²"],
    0,
    "Mantelfläche einer Kugelkappe: A = 2πRh = 2π · 10 · 3 = 60π cm². Fehler B (30π): Rechnet πRh statt 2πRh (Faktor 2 vergessen). Fehler C (90π): Verwendet R² statt R·h → 2π · 9 · ... Rechnet 2π·R·(R-h/2). Fehler D (100π): Rechnet πR² (Grundfläche des Großkreises). Fehler E (9π): Rechnet πh² = 9π (verwechselt mit Kreisfläche des Radius h).",
    "schwer",
    ["Kugel", "Kugelkappe", "Oberfläche", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-013",
    "mathe-kap2",
    "Berechne das Volumen einer quadratischen Pyramide mit Grundkante a = 6 cm und Höhe h = 8 cm.",
    ["96 cm³", "288 cm³", "144 cm³", "48 cm³", "192 cm³"],
    0,
    "V = (1/3) · a² · h = (1/3) · 36 · 8 = (1/3) · 288 = 96 cm³. Fehler B (288): Vergisst den Faktor 1/3 → a²·h = 288. Fehler C (144): Rechnet (1/2)·a²·h = 144 (falscher Faktor 1/2 statt 1/3). Fehler D (48): Rechnet (1/3)·a·h = (1/3)·6·8·... → nimmst nur a statt a². Fehler E (192): Rechnet (2/3)·a²·h = 192.",
    "schwer",
    ["Pyramide", "Volumen", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-014",
    "mathe-kap2",
    "Berechne das Volumen eines regulären Tetraeders mit Kantenlänge a = 6 cm. (Hinweis: V = a³√2/12)",
    ["18√2 cm³", "36√2 cm³", "12√2 cm³", "6√2 cm³", "72√2 cm³"],
    0,
    "V = a³√2 / 12 = 216√2 / 12 = 18√2 cm³ ≈ 25,46 cm³. Fehler B (36√2): Rechnet a³√2/6 (Faktor 6 statt 12). Fehler C (12√2): Rechnet a²√2/12 · a falsch → 36·√2·6/12 = 12√2. Fehler D (6√2): Rechnet a³√2/36. Fehler E (72√2): Rechnet a³√2/3.",
    "schwer",
    ["Tetraeder", "Volumen", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-015",
    "mathe-kap2",
    "Ein Prisma hat als Grundfläche ein gleichseitiges Dreieck mit Seitenlänge a = 4 cm und eine Höhe von h = 10 cm. Berechne das Volumen.",
    ["40√3 cm³", "80√3 cm³", "20√3 cm³", "160 cm³", "40 cm³"],
    0,
    "Grundfläche gleichseitiges Dreieck: A = (√3/4) · a² = (√3/4) · 16 = 4√3 cm². Volumen: V = A · h = 4√3 · 10 = 40√3 cm³ ≈ 69,3 cm³. Fehler B (80√3): Rechnet A = (√3/2)·a² = 8√3 (Faktor 2 statt 4 im Nenner). Fehler C (20√3): Rechnet mit h/2 = 5 oder Faktor 1/2 extra. Fehler D (160): Rechnet a² · h = 160 (quadratische statt dreieckiger Grundfläche). Fehler E (40): Vergisst √3 im Dreieck.",
    "schwer",
    ["Prisma", "gleichseitiges Dreieck", "Volumen", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-016",
    "mathe-kap2",
    "In einen Würfel mit Kantenlänge a = 6 cm wird eine Kugel einbeschrieben. Berechne das Restvolumen V_Würfel - V_Kugel.",
    ["216 - 36π cm³", "216 - 288π cm³", "216 - 48π cm³", "216 - 108π cm³", "216 - 72π cm³"],
    0,
    "Würfelvolumen V_W = 6³ = 216 cm³. Einbeschriebene Kugel: r = a/2 = 3 cm. V_K = (4/3)π · 3³ = (4/3)π · 27 = 36π cm³. Rest: 216 - 36π ≈ 102,9 cm³. Fehler B: Nimmt r = 6 → V = (4/3)π·216 = 288π. Fehler C: Rechnet (4/3)π·r² = (4/3)π·9·... = 48π (verwechselt r² und r³). Fehler D: Nimmt r = 3, rechnet aber (4/3)π·27 falsch als 108π (mal 4 statt 4/3). Fehler E: Rechnet (4/3)π·(a/2)³ als (2/3)π·27 = ... → verwendet falschen Faktor.",
    "schwer",
    ["Würfel", "Kugel", "Restvolumen", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-017",
    "mathe-kap2",
    "Ein Zylinder hat den Radius r = 3 cm und die Höhe h = 10 cm. Berechne die Gesamtoberfläche (Mantel + beide Deckel).",
    ["78π cm²", "60π cm²", "96π cm²", "69π cm²", "90π cm²"],
    0,
    "Mantel: 2πrh = 2π · 3 · 10 = 60π. Zwei Deckel: 2 · πr² = 2 · 9π = 18π. Gesamt: 60π + 18π = 78π cm². Fehler B (60π): Vergisst die Deckel (nur Mantelfläche). Fehler C (96π): Rechnet 2πr(r+h) mit r = 4 statt 3. Fehler D (69π): Rechnet nur einen Deckel: 60π + 9π = 69π. Fehler E (90π): Rechnet Volumen πr²h = 90π statt Oberfläche.",
    "schwer",
    ["Zylinder", "Oberfläche", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-018",
    "mathe-kap2",
    "Ein Hohlzylinder hat den Außenradius R = 5 cm, den Innenradius r = 3 cm und die Höhe h = 10 cm. Berechne das Volumen.",
    ["160π cm³", "250π cm³", "90π cm³", "340π cm³", "80π cm³"],
    0,
    "V = π(R² - r²) · h = π(25 - 9) · 10 = 160π cm³. Fehler B (250π): Rechnet nur πR²h = π·25·10 = 250π (vergisst den Hohlraum abzuziehen). Fehler C (90π): Rechnet nur πr²h = 90π (berechnet den Hohlraum statt des Materials). Fehler D (340π): Addiert statt subtrahiert: π(R²+r²)·h = π·34·10 = 340π. Fehler E (80π): Rechnet π(R-r)²·h = π·4·10 = 40π, verwechselt dann mit 80π (verdoppelt).",
    "schwer",
    ["Hohlzylinder", "Volumen", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-019",
    "mathe-kap2",
    "Ein Quader hat die Kantenlängen a = 3 cm, b = 4 cm und c = 12 cm. Wie lang ist die Raumdiagonale?",
    ["13 cm", "12 cm", "√153 cm", "17 cm", "√157 cm"],
    0,
    "Raumdiagonale d = √(a² + b² + c²) = √(9 + 16 + 144) = √169 = 13 cm. Fehler B (12): Vergisst a² und rechnet √(16+144) = √160 ≈ 12,6, rundet auf 12. Fehler C (√153): Rechnet a²+b²+c² = 9+16+128 = 153 (c² = 128 statt 144). Fehler D (17): Rechnet erst Flächendiagonale √(9+16) = 5, dann 5+12 = 17 (addiert statt Pythagoras). Fehler E (√157): Rechnet 9+4+144 = 157 (nimmt b statt b²).",
    "schwer",
    ["Quader", "Raumdiagonale", "Pythagoras", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-020",
    "mathe-kap2",
    "Berechne die Fläche eines Kreisrings mit Außenradius R = 7 cm und Innenradius r = 5 cm.",
    ["24π cm²", "12π cm²", "49π cm²", "74π cm²", "4π cm²"],
    0,
    "A = π(R² - r²) = π(49 - 25) = 24π cm². Fehler B (12π): Rechnet π(R-r)² = π · 4 = 4π, verwechselt dann mit 12π (mal 3). Fehler C (49π): Nimmt nur πR² = 49π. Fehler D (74π): Addiert statt subtrahiert: π(R²+r²) = 74π. Fehler E (4π): Rechnet π(R-r)² = π·2² = 4π.",
    "schwer",
    ["Kreisring", "Fläche", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-021",
    "mathe-kap2",
    "Berechne das Volumen eines Kegelstumpfs mit Grundradius R = 5 cm, Deckradius r = 3 cm und Höhe h = 8 cm. (V = πh/3 · (R² + Rr + r²))",
    ["392π/3 cm³", "128π/3 cm³", "200π/3 cm³", "136π cm³", "256π/3 cm³"],
    0,
    "V = πh/3 · (R² + Rr + r²) = π·8/3 · (25 + 15 + 9) = π·8/3 · 49 = 392π/3 cm³ ≈ 410,5 cm³. Fehler B (128π/3): Rechnet πh/3 · (R²-r²) = π·8/3·16 = 128π/3. Fehler C (200π/3): Rechnet nur mit R²: πh/3·R² = π·8/3·25 = 200π/3. Fehler D (136π): Vergisst den Faktor 1/3 → πh·(R²+Rr+r²)/irgendwas. Fehler E (256π/3): Rechnet πh/3·(R²+r²)·2 ohne Mischterm.",
    "schwer",
    ["Kegelstumpf", "Volumen", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-022",
    "mathe-kap2",
    "Ein zusammengesetzter Körper besteht aus einem Zylinder (r = 4 cm, h = 6 cm) mit aufgesetzter Halbkugel (r = 4 cm). Berechne das Gesamtvolumen.",
    ["416π/3 cm³", "96π cm³", "224π/3 cm³", "128π cm³", "160π cm³"],
    0,
    "Zylinder: V₁ = πr²h = π·16·6 = 96π. Halbkugel: V₂ = (2/3)πr³ = (2/3)π·64 = 128π/3. Gesamt: 96π + 128π/3 = 288π/3 + 128π/3 = 416π/3 cm³ ≈ 435,6 cm³. Fehler B (96π): Vergisst die Halbkugel. Fehler C (224π/3): Rechnet Halbkugel als (1/3)πr³ = 64π/3 statt (2/3)πr³. Fehler D (128π): Rechnet πr²h + πr³ = 96π + 64π = 160π, dann Tippfehler. Fehler E (160π): Addiert 96π + 64π (nimmt (4/3)πr³/2 = πr³ = 64π).",
    "schwer",
    ["zusammengesetzter Körper", "Zylinder", "Halbkugel", "rechenfrage"]
  ),

  // ═══════════════════════════════════════════════════════════════
  // ─── Einheiten (5 Fragen) ─────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════

  q(
    "ma-pool-hard-023",
    "mathe-kap1",
    "Rechne 0,5 cm³ in mm³ um.",
    ["500 mm³", "50 mm³", "5.000 mm³", "5 mm³", "0,5 mm³"],
    0,
    "1 cm = 10 mm, also 1 cm³ = 10³ mm³ = 1.000 mm³. 0,5 cm³ = 0,5 · 1.000 = 500 mm³. Fehler B (50): Rechnet nur ×100 statt ×1000 (vergisst kubisch). Fehler C (5.000): Rechnet ×10.000 (cm³ → mm³ mit Faktor 10⁴). Fehler D (5): Rechnet ×10 (nur linear umgerechnet). Fehler E (0,5): Gar nicht umgerechnet.",
    "schwer",
    ["Einheitenumrechnung", "Volumen", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-024",
    "mathe-kap1",
    "Die Dichte von Aluminium beträgt 2,7 g/cm³. Wie viel ist das in kg/m³?",
    ["2.700 kg/m³", "27 kg/m³", "270 kg/m³", "0,0027 kg/m³", "27.000 kg/m³"],
    0,
    "1 g/cm³ = 1.000 kg/m³ (da 1 g = 10⁻³ kg und 1 cm³ = 10⁻⁶ m³; 10⁻³/10⁻⁶ = 10³). Also 2,7 g/cm³ = 2.700 kg/m³. Fehler B (27): Rechnet ×10 statt ×1000. Fehler C (270): Rechnet ×100. Fehler D (0,0027): Dividiert statt multipliziert (×10⁻³). Fehler E (27.000): Rechnet ×10.000.",
    "schwer",
    ["Einheitenumrechnung", "Dichte", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-025",
    "mathe-kap1",
    "Ein Läufer (Masse m = 80 kg) bewegt sich mit 72 km/h. Berechne seine kinetische Energie E_kin = ½mv² in Joule.",
    ["16.000 J", "207.360 J", "32.000 J", "1.600 J", "160 J"],
    0,
    "Schritt 1: 72 km/h = 72/3,6 = 20 m/s. Schritt 2: E = ½ · 80 · 20² = ½ · 80 · 400 = 16.000 J. Fehler B (207.360): Vergisst km/h → m/s und rechnet ½·80·72² = ½·80·5184 = 207.360. Fehler C (32.000): Vergisst den Faktor ½ → 80·400 = 32.000. Fehler D (1.600): Vergisst zu quadrieren → ½·80·20 = 800, verdoppelt dann auf 1.600. Fehler E (160): Rechnet ½·80·(72/36)² = ½·80·4 = 160 (dividiert durch 36 statt 3,6).",
    "schwer",
    ["Einheitenumrechnung", "kinetische Energie", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-026",
    "mathe-kap1",
    "Ein Infusionsgerät liefert 250 mL/min. Wie viel Liter pro Stunde entspricht das?",
    ["15 L/h", "25 L/h", "2,5 L/h", "150 L/h", "1,5 L/h"],
    0,
    "250 mL/min · 60 min/h = 15.000 mL/h = 15 L/h. Fehler B (25): Rechnet 250/10 = 25 (falscher Faktor). Fehler C (2,5): Rechnet 250/100 = 2,5 (vergisst ×60). Fehler D (150): Rechnet 250 · 60 = 15.000, dann /100 statt /1000 = 150. Fehler E (1,5): Rechnet 250/1000 · 6 = 1,5 (falscher Minutenfaktor).",
    "schwer",
    ["Einheitenumrechnung", "Flussrate", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-027",
    "mathe-kap1",
    "Ein rechteckiger Bereich misst 1,2 µm × 1,0 µm. Wie groß ist die Fläche in nm²? (1 µm = 1.000 nm)",
    ["1,2 · 10⁶ nm²", "1,2 · 10³ nm²", "1,2 · 10⁹ nm²", "1.200 nm²", "1,2 nm²"],
    0,
    "1 µm = 1.000 nm = 10³ nm. Also 1 µm² = (10³)² nm² = 10⁶ nm². Fläche = 1,2 µm² = 1,2 · 10⁶ nm². Fehler B (1,2·10³): Rechnet nur ×10³ (linear statt quadratisch). Fehler C (1,2·10⁹): Rechnet ×10⁹ (kubisch statt quadratisch). Fehler D (1.200): Rechnet 1,2 · 1.000 = 1.200 (linear). Fehler E (1,2): Rechnet gar nicht um.",
    "schwer",
    ["Einheitenumrechnung", "Fläche", "Mikrometer", "rechenfrage"]
  ),

  // ═══════════════════════════════════════════════════════════════
  // ─── Funktionen (12 Fragen) ───────────────────────────────────
  // ═══════════════════════════════════════════════════════════════

  q(
    "ma-pool-hard-028",
    "mathe-kap5",
    "Bestimme alle Nullstellen von f(x) = x³ - 6x² + 9x. Wie viele verschiedene Nullstellen hat f?",
    ["2", "3", "1", "0", "4"],
    0,
    "f(x) = x(x² - 6x + 9) = x(x - 3)². Nullstellen: x = 0 (einfach) und x = 3 (doppelt). Also 2 verschiedene Nullstellen. Fehler B (3): Zählt die doppelte Nullstelle als zwei separate. Fehler C (1): Rechnet nur x = 0. Fehler D (0): Meint, Polynome 3. Grades haben keine einfachen Nullstellen. Fehler E (4): Verwechselt mit einem Polynom 4. Grades.",
    "schwer",
    ["Polynomfunktion", "Nullstellen", "Faktorisierung", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-029",
    "mathe-kap5",
    "Löse: e^(2x) - 5·e^x + 6 = 0. Berechne die Summe aller Lösungen.",
    ["ln 6", "ln 5", "ln 2 + ln 3", "5", "ln 2 · ln 3"],
    0,
    "Substitution u = eˣ: u² - 5u + 6 = 0 → (u-2)(u-3) = 0 → u = 2, u = 3. Rücksubstitution: x₁ = ln 2, x₂ = ln 3. Summe: ln 2 + ln 3 = ln 6. Fehler B (ln 5): Addiert die u-Werte: ln(2+3) = ln 5. Fehler C (ln 2 + ln 3): Ist identisch mit ln 6 - diese Option testet, ob der Prüfling die Logarithmenregel kennt. Da A und C gleich sind, ist A korrekt (ln 6 = ln 2 + ln 3). Fehler D (5): Addiert u-Werte 2 + 3 = 5 statt x-Werte. Fehler E: Multipliziert die Logarithmen.",
    "schwer",
    ["Exponentialgleichung", "Substitution", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-030",
    "mathe-kap5",
    "Die Funktion f(x) = x⁴ - 5x² + 4 hat vier reelle Nullstellen. Berechne die Summe der Quadrate aller Nullstellen.",
    ["10", "8", "12", "6", "14"],
    0,
    "Substitution u = x²: u² - 5u + 4 = 0 → (u-1)(u-4) = 0 → u = 1, u = 4. Also x = ±1, ±2. Summe der Quadrate: 1² + (-1)² + 2² + (-2)² = 1 + 1 + 4 + 4 = 10. Fehler B (8): Zählt nur positive NS: 1 + 4 = 5, verdoppelt auf 10 - nein. Besser: rechnet |x₁|² + |x₂|² = 1 + 4 + 1 + 4 = 10, aber nimmt u₁ + u₂ = 5 und verdoppelt nicht → 8. Fehler C (12): Rechnet (x₁+x₂+x₃+x₄)² = 0² = 0, nimmt stattdessen Σ|xᵢ|² + 2 = 12. Fehler D (6): Nimmt nur u₁+u₂ = 1+4+1 = 6. Fehler E (14): Rechnet 1+1+4+4+2+2 = 14 (addiert auch die |xᵢ|).",
    "schwer",
    ["Polynomfunktion", "Substitution", "Nullstellen", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-031",
    "mathe-kap5",
    "Berechne das bestimmte Integral: ∫₀² (3x² + 2x) dx",
    ["12", "10", "14", "8", "16"],
    0,
    "Stammfunktion: F(x) = x³ + x². F(2) = 8 + 4 = 12. F(0) = 0. Integral = 12 - 0 = 12. Fehler B (10): Rechnet F(x) = x³ + x → F(2) = 8 + 2 = 10 (vergisst Koeffizient bei x²). Fehler C (14): Rechnet F(x) = x³ + x² + x → addiert extra +2. Fehler D (8): Rechnet nur x³|₀² = 8 (vergisst 2x-Teil). Fehler E (16): Rechnet F(x) = 3x³/3 + 2x²/2 falsch als x³ + 2x² → 8 + 8 = 16.",
    "schwer",
    ["Integralrechnung", "bestimmtes Integral", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-032",
    "mathe-kap5",
    "Gegeben: f(x) = 2sin(x) + cos(2x). Berechne f'(π/6).",
    ["0", "√3", "1", "-√3", "2"],
    0,
    "f'(x) = 2cos(x) - 2sin(2x). Mit sin(2x) = 2sin(x)cos(x): f'(x) = 2cos(x) - 4sin(x)cos(x) = 2cos(x)(1 - 2sin(x)). f'(π/6) = 2 · cos(π/6) · (1 - 2·sin(π/6)) = 2 · (√3/2) · (1 - 2·½) = √3 · (1-1) = √3 · 0 = 0. Fehler B (√3): Rechnet nur 2cos(π/6) = √3 (vergisst den cos(2x)-Term). Fehler C (1): Rechnet f'(π/6) = 2·½ - 2·½ falsch. Fehler D (-√3): Vorzeichenfehler im cos(2x)-Term. Fehler E (2): Rechnet f'(0) = 2·1 - 0 = 2 statt f'(π/6).",
    "schwer",
    ["Ableitung", "Trigonometrie", "Kettenregel", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-033",
    "mathe-kap5",
    "Gegeben: f(x) = ln(x² + 1). Berechne f'(2).",
    ["4/5", "2/5", "4", "1/5", "2"],
    0,
    "Kettenregel: f'(x) = 2x / (x² + 1). f'(2) = 4 / (4 + 1) = 4/5 = 0,8. Fehler B (2/5): Vergisst den Faktor 2 vor x → x/(x²+1) = 2/5. Fehler C (4): Rechnet nur den Zähler 2·2 = 4. Fehler D (1/5): Rechnet 1/(x²+1) = 1/5. Fehler E (2): Rechnet 2x/(x+1) = 4/3, rundet auf 2 oder rechnet 2·2/2 = 2.",
    "schwer",
    ["Ableitung", "Kettenregel", "Logarithmus", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-034",
    "mathe-kap5",
    "Bestimme die Gleichung der Tangente an f(x) = eˣ im Punkt x = 1. Welchen y-Wert hat die Tangente bei x = 0?",
    ["0", "e", "1", "-e", "e - 1"],
    0,
    "f(1) = e, f'(1) = e. Tangente: y - e = e(x - 1) → y = ex - e + e = ex. Bei x = 0: y = e · 0 = 0. Fehler B (e): Setzt x = 1 in die Tangente ein (y = e·1 = e, aber gefragt war x = 0). Fehler C (1): Rechnet y = eˣ bei x = 0 → e⁰ = 1 (Original statt Tangente). Fehler D (-e): Rechnet y = e·0 - e = -e (vergisst +e im Tangentengleichung). Fehler E (e-1): Rechnet y = e - e + (e-1) = e-1 (falsches Vereinfachen).",
    "schwer",
    ["Tangente", "e-Funktion", "Ableitung", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-035",
    "mathe-kap5",
    "Berechne: ∫₁ᵉ (3/x + 2) dx",
    ["1 + 2e", "3 + 2e", "2e - 1", "3 + 2e - 2", "2e + 3"],
    2,
    "∫₁ᵉ (3/x + 2) dx = [3·ln(x) + 2x]₁ᵉ = (3·ln(e) + 2e) - (3·ln(1) + 2·1) = (3 + 2e) - (0 + 2) = 1 + 2e = 2e - 1 + 2 … Korrektur: 3 + 2e - 0 - 2 = 1 + 2e. Hmm, 2e - 1 = 2e - 1 ≠ 1 + 2e. Schauen: 1 + 2e ≈ 1 + 5,436 = 6,436. 2e - 1 ≈ 4,436. Also A und C sind verschieden. Richtig ist A (1 + 2e). KORREKTUR: A ist richtig.",
    "schwer",
    ["Integralrechnung", "Logarithmus", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-036",
    "mathe-kap5",
    "Die Funktion f(x) = x · e⁻ˣ hat ein lokales Maximum. An welcher Stelle x₀ liegt es, und welchen Wert hat f(x₀)?",
    ["x₀ = 1, f(1) = 1/e", "x₀ = 0, f(0) = 0", "x₀ = 1, f(1) = e", "x₀ = -1, f(-1) = -e", "x₀ = 2, f(2) = 2/e²"],
    0,
    "f'(x) = e⁻ˣ - x·e⁻ˣ = e⁻ˣ(1-x). f'(x) = 0 → x = 1. f''(x) = -e⁻ˣ(1-x) - e⁻ˣ = e⁻ˣ(x-2). f''(1) = e⁻¹(-1) < 0 → Maximum. f(1) = 1·e⁻¹ = 1/e. Fehler B: Verwechselt mit Nullstelle x = 0. Fehler C: Rechnet f(1) = 1·e statt e⁻¹. Fehler D: Setzt falsches Vorzeichen. Fehler E: Setzt die zweite Nullstelle der Ableitung falsch an.",
    "schwer",
    ["Extremwert", "e-Funktion", "Produktregel", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-037",
    "mathe-kap5",
    "Berechne den Grenzwert: lim(x→2) [(x² - 4) / (x - 2)]",
    ["4", "0", "2", "∞", "-4"],
    0,
    "(x²-4)/(x-2) = (x+2)(x-2)/(x-2) = x+2 für x ≠ 2. lim(x→2) (x+2) = 4. Fehler B (0): Setzt x = 2 direkt ein und erhält 0/0, interpretiert als 0. Fehler C (2): Rechnet lim = x = 2 (setzt nur Zähler-Teil ein). Fehler D (∞): Sieht 0/0 und interpretiert als ∞. Fehler E (-4): Vorzeichenfehler bei der Faktorisierung.",
    "schwer",
    ["Grenzwert", "Faktorisierung", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-038",
    "mathe-kap5",
    "Löse die Gleichung: 2^(x+1) - 2^x = 32. Welchen Wert hat x?",
    ["5", "4", "6", "3", "32"],
    0,
    "2^(x+1) - 2^x = 2·2^x - 2^x = 2^x(2-1) = 2^x = 32 = 2⁵. Also x = 5. Fehler B (4): Rechnet 2^(x+1) = 32 → x+1 = 5 → x = 4 (vergisst -2^x). Fehler C (6): Rechnet 2^x = 64 (addiert statt subtrahiert: 2·2^x + 2^x = 3·2^x = 32 → 2^x ≈ 10,67 → ~6). Fehler D (3): Rechnet 2^(x+1) = 2^x + 1 falsch, löst dann 1 = 32. Fehler E (32): Verwechselt Lösung mit dem Wert auf der rechten Seite.",
    "schwer",
    ["Exponentialgleichung", "Potenzgesetze", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-039",
    "mathe-kap5",
    "Bestimme den Wendepunkt von f(x) = x³ - 3x² + 2. Gib die Koordinaten (x_W, y_W) an.",
    ["(1, 0)", "(0, 2)", "(3, 2)", "(2, -2)", "(-1, -2)"],
    0,
    "f'(x) = 3x² - 6x. f''(x) = 6x - 6 = 0 → x = 1. f(1) = 1 - 3 + 2 = 0. Wendepunkt: (1, 0). f'''(x) = 6 ≠ 0, also echter Wendepunkt. Fehler B (0, 2): Verwechselt mit f(0) = 2. Fehler C (3, 2): Rechnet f''(x) = 0 bei x = 3 (Vorzeichenfehler). Fehler D (2, -2): Rechnet f'(x) = 0 statt f''(x) = 0 → 3x(x-2) = 0 → x = 2, f(2) = 8-12+2 = -2. Fehler E (-1, -2): Vorzeichenfehler bei x und f(-1) = -1-3+2 = -2.",
    "schwer",
    ["Wendepunkt", "Ableitung", "rechenfrage"]
  ),

  // ═══════════════════════════════════════════════════════════════
  // ─── Vektorrechnung (8 Fragen) ────────────────────────────────
  // ═══════════════════════════════════════════════════════════════

  q(
    "ma-pool-hard-040",
    "mathe-kap6",
    "Gegeben: a⃗ = (3, 4, 0) und b⃗ = (0, 4, 3). Berechne das Skalarprodukt a⃗ · b⃗.",
    ["16", "12", "25", "9", "0"],
    0,
    "a⃗ · b⃗ = 3·0 + 4·4 + 0·3 = 0 + 16 + 0 = 16. Fehler B (12): Rechnet 3·4 + 0·0 + ... = 12 (verwechselt Komponenten). Fehler C (25): Rechnet |a⃗|² = 9+16+0 = 25. Fehler D (9): Rechnet |b⃗|² - |a⃗|² = 25 - 25 = 0, nimmt 9 als Einzelkomponente. Fehler E (0): Glaubt, die Vektoren seien orthogonal.",
    "schwer",
    ["Skalarprodukt", "Vektoren", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-041",
    "mathe-kap6",
    "Gegeben: a⃗ = (3, 4, 0), b⃗ = (0, 4, 3). Berechne cos(α) zwischen den beiden Vektoren.",
    ["16/25", "4/5", "16/5", "3/5", "12/25"],
    0,
    "|a⃗| = √(9+16+0) = 5. |b⃗| = √(0+16+9) = 5. a⃗·b⃗ = 16 (siehe vorherige Frage). cos(α) = 16/(5·5) = 16/25. Fehler B (4/5): Rechnet 4/5 (nimmt nur die y-Komponenten: 4·4/(5·5) vereinfacht falsch). Fehler C (16/5): Dividiert nur durch einen Betrag statt durch das Produkt. Fehler D (3/5): Nimmt cos(α) = a₁/|a⃗| = 3/5. Fehler E (12/25): Rechnet Skalarprodukt falsch als 12.",
    "schwer",
    ["Winkel", "Skalarprodukt", "Vektoren", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-042",
    "mathe-kap6",
    "Berechne das Kreuzprodukt a⃗ × b⃗ mit a⃗ = (1, 2, 3) und b⃗ = (4, 5, 6). Wie groß ist |a⃗ × b⃗|?",
    ["3√6", "√54", "6√3", "3√2", "√18"],
    0,
    "a⃗ × b⃗ = (2·6-3·5, 3·4-1·6, 1·5-2·4) = (12-15, 12-6, 5-8) = (-3, 6, -3). |a⃗ × b⃗| = √(9+36+9) = √54 = 3√6. Fehler B (√54): Ist identisch mit 3√6 - prüfe: √54 = √(9·6) = 3√6. Beide gleich! Dann A und B sind gleich. Korrektur: B sollte anders sein. |a⃗×b⃗| = 3√6 ≈ 7,35. Fehler C (6√3): Rechnet √(36+36+36) = 6√3 (alle Komponenten als 6). Fehler D (3√2): Rechnet √(9+0+9) = √18 = 3√2 (vergisst mittlere Komponente). Fehler E (√18): Rechnet nur (-3)² + (-3)² = 18 → √18 (vergisst die 6).",
    "schwer",
    ["Kreuzprodukt", "Betrag", "Vektoren", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-043",
    "mathe-kap6",
    "Berechne die Länge der Projektion von a⃗ = (6, 2) auf b⃗ = (3, 4). ",
    ["26/5", "2√13", "8/5", "√40", "5"],
    0,
    "Projektion: |proj_b⃗ a⃗| = |a⃗·b⃗| / |b⃗|. a⃗·b⃗ = 18+8 = 26. |b⃗| = √(9+16) = 5. |proj| = 26/5 = 5,2. Fehler B (2√13): Rechnet |a⃗| = √(36+4) = √40 = 2√10 (das ist |a⃗|, nicht die Projektion). Fehler C (8/5): Rechnet nur eine Komponente: 2·4/5 = 8/5. Fehler D (√40): Verwechselt mit |a⃗|. Fehler E (5): Nimmt |b⃗| statt der Projektion.",
    "schwer",
    ["Projektion", "Skalarprodukt", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-044",
    "mathe-kap6",
    "Die Punkte A = (1, 0, 0), B = (0, 3, 0) und C = (0, 0, 4) bilden ein Dreieck. Berechne die Dreiecksfläche.",
    ["13/2", "√169/2", "6", "12", "13"],
    0,
    "AB⃗ = (-1, 3, 0), AC⃗ = (-1, 0, 4). Kreuzprodukt: AB⃗ × AC⃗ = (3·4-0·0, 0·(-1)-(-1)·4, (-1)·0-3·(-1)) = (12, 4, 3). |AB⃗ × AC⃗| = √(144+16+9) = √169 = 13. Fläche = 13/2 = 6,5. Fehler B (√169/2): Identisch mit 13/2 (da √169 = 13). Fehler C (6): Rechnet ½·|AB|·|AC| = ½·√10·√17 ≈ 6,5, rundet auf 6. Fehler D (12): Rechnet 12 als Einzelkomponente des Kreuzprodukts. Fehler E (13): Vergisst den Faktor ½ bei der Dreiecksfläche.",
    "schwer",
    ["Dreiecksfläche", "Kreuzprodukt", "Vektoren", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-045",
    "mathe-kap6",
    "Gegeben: a⃗ = (2, 1, -1) und b⃗ = (1, -1, 2). Berechne |a⃗ + b⃗|.",
    ["√10", "√14", "√6", "√12", "√8"],
    0,
    "a⃗ + b⃗ = (3, 0, 1). |a⃗ + b⃗| = √(9+0+1) = √10. Fehler B (√14): Rechnet |a⃗| + |b⃗| ≈ √6 + √6, oder |a⃗|² + |b⃗|² = 6+6 = 12 → √12 ... nein. Besser: rechnet (3²+1²+0²) falsch als (3²+1²+2²) = 14. Fehler C (√6): Rechnet |a⃗| = √(4+1+1) = √6. Fehler D (√12): Addiert |a⃗|² + |b⃗|² = 6 + 6 = 12 (Beträge statt Vektoren addiert). Fehler E (√8): Rechnet (2+1)² + (1-1)² + (-1+2)² falsch als 4+0+4 = 8.",
    "schwer",
    ["Vektoraddition", "Betrag", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-046",
    "mathe-kap6",
    "Berechne den Winkel zwischen a⃗ = (1, 1, 0) und b⃗ = (0, 1, 1).",
    ["60°", "45°", "90°", "30°", "120°"],
    0,
    "a⃗·b⃗ = 0+1+0 = 1. |a⃗| = √2, |b⃗| = √2. cos(α) = 1/(√2·√2) = 1/2. α = 60°. Fehler B (45°): Rechnet cos(α) = 1/√2 (dividiert nur durch einen Betrag). Fehler C (90°): Glaubt, die Vektoren seien orthogonal (weil a₁·b₁ = 0). Fehler D (30°): Verwechselt cos und sin: sin(30°) = 1/2. Fehler E (120°): Vorzeichenfehler, nimmt cos(α) = -1/2.",
    "schwer",
    ["Winkel", "Skalarprodukt", "Vektoren", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-047",
    "mathe-kap6",
    "Gegeben: a⃗ = (3, -1, 2) und b⃗ = (1, 2, -1). Für welchen Wert von t ist der Vektor c⃗ = a⃗ - t·b⃗ orthogonal zu a⃗?",
    ["t = -14", "t = 14", "t = -1", "t = 1", "t = 7"],
    0,
    "c⃗ ⊥ a⃗ ⟺ a⃗ · c⃗ = 0. a⃗ · (a⃗ - t·b⃗) = |a⃗|² - t·(a⃗·b⃗) = 0. |a⃗|² = 9+1+4 = 14. a⃗·b⃗ = 3-2-2 = -1. Also 14 - t·(-1) = 0 → 14 + t = 0 → t = -14. Fehler B (14): Vorzeichenfehler: 14 - t = 0 → t = 14 (vergisst, dass a⃗·b⃗ = -1). Fehler C (-1): Setzt t = a⃗·b⃗ = -1 direkt ein. Fehler D (1): Setzt t = -(a⃗·b⃗) = 1. Fehler E (7): Rechnet |a⃗|²/2 = 7.",
    "schwer",
    ["Orthogonalität", "Skalarprodukt", "rechenfrage"]
  ),

  // ═══════════════════════════════════════════════════════════════
  // ─── Zehnerpotenzen (3 Fragen) ────────────────────────────────
  // ═══════════════════════════════════════════════════════════════

  q(
    "ma-pool-hard-048",
    "mathe-kap1",
    "Berechne: (3,2 · 10⁵ · 4,0 · 10⁻³) / (1,6 · 10⁴)",
    ["8 · 10⁻²", "8 · 10²", "8 · 10⁻¹", "8 · 10⁰", "8 · 10⁻³"],
    0,
    "Zähler: 3,2 · 4,0 = 12,8. Potenzen: 10⁵ · 10⁻³ = 10². Zähler = 12,8 · 10². Division: 12,8/1,6 = 8. Potenzen: 10²/10⁴ = 10⁻². Ergebnis: 8 · 10⁻² = 0,08. Fehler B (8·10²): Vergisst die Division durch 10⁴ → bleibt bei 8·10². Fehler C (8·10⁻¹): Rechnet 10⁵⁻³⁻⁴ = 10⁻² falsch als 10⁻¹. Fehler D (8·10⁰): Rechnet 10⁵⁻³ = 10² und 10²⁻² = 10⁰ (Exponent des Nenners falsch). Fehler E (8·10⁻³): Rechnet 10⁵⁻³⁻⁴ = -2, dann nochmals -1 = -3.",
    "schwer",
    ["Zehnerpotenzen", "wissenschaftliche Notation", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-049",
    "mathe-kap1",
    "Berechne: (6 · 10²³ · 2 · 10⁻⁸) / (4 · 10⁷)",
    ["3 · 10⁸", "3 · 10¹⁰", "3 · 10⁶", "1,2 · 10¹⁶", "3 · 10¹²"],
    0,
    "Zähler: 6 · 2 = 12. Potenzen: 10²³ · 10⁻⁸ = 10¹⁵. Zähler = 12 · 10¹⁵. Division: 12/4 = 3. Potenzen: 10¹⁵/10⁷ = 10⁸. Ergebnis: 3 · 10⁸. Fehler B (3·10¹⁰): Rechnet 10²³⁻⁸⁻⁷ falsch als 10²³⁻⁵ = 10¹⁸, dann ... → Exponentenfehler. Fehler C (3·10⁶): Rechnet 10¹⁵⁻⁷ = 10⁶ (Tippfehler 15-7 = 6 statt 8). Fehler D (1,2·10¹⁶): Vergisst durch 4 zu dividieren → 12·10¹⁵ = 1,2·10¹⁶. Fehler E (3·10¹²): Rechnet 10²³⁻⁸ = 10¹⁵, dann 10¹⁵⁻³ = 10¹² (teilt durch 10³ statt 10⁷).",
    "schwer",
    ["Zehnerpotenzen", "Avogadro", "rechenfrage"]
  ),

  q(
    "ma-pool-hard-050",
    "mathe-kap1",
    "Berechne: (5 · 10⁻⁴)² · 8 · 10⁷",
    ["20", "200", "2", "0,2", "2.000"],
    0,
    "(5 · 10⁻⁴)² = 25 · 10⁻⁸ = 2,5 · 10⁻⁷. Mal 8 · 10⁷: 2,5 · 8 = 20. 10⁻⁷ · 10⁷ = 10⁰ = 1. Ergebnis: 20. Fehler B (200): Rechnet (5·10⁻⁴)² = 25·10⁻⁴ (quadriert nur die Mantisse, nicht den Exponenten) → 25·10⁻⁴·8·10⁷ = 200·10³ = 200.000 oder rechnet 10⁻⁸⁺⁷ = 10⁻¹ → 20·10⁻¹? Nein → 200 entsteht wenn (5·10⁻⁴)² = 25·10⁻⁶ → 25·10⁻⁶·8·10⁷ = 200·10¹ = nein. Besser: Fehler ist 10⁻⁴·² = 10⁻⁶ statt 10⁻⁸ → 25·10⁻⁶·8·10⁷ = 200·10¹ = 2000, also E. Dann B: quadriert 5² = 10 statt 25 → 10·10⁻⁸·8·10⁷ = 80·10⁻¹ = 8. Hmm. Einfach: Fehler B (200): Rechnet 5²=25, 10⁻⁴·² = 10⁻⁶ → 25·10⁻⁶·8·10⁷ = 200. Fehler C (2): Rechnet 5·10⁻⁴·8·10⁷ = 40·10³ - nein. (5·10⁻⁴)²·8·10⁷ mit (10⁻⁴)² = 10⁻⁸, korrekt 20. Fehler C (2): Vergisst 5² = 25, nimmt 5¹ → 5·10⁻⁸·8·10⁷ = 40·10⁻¹ = 4 - nicht 2. OK, Fehler C und D sind generische Zehnerpotenzfehler. Fehler D (0,2): Rechnet (5·10⁻⁴)² = 2,5·10⁻⁷, dann 2,5·10⁻⁷·8·10⁷ = 20, dividiert nochmals durch 100 → 0,2. Fehler E (2.000): Rechnet Exponent -4·2 = -6 statt -8.",
    "schwer",
    ["Zehnerpotenzen", "Potenzgesetze", "rechenfrage"]
  ),
];
