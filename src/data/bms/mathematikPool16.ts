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
  tags: string[] = [],
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
  // === Algebra (10 Fragen) ===

  q(
    "ma-pool-hard-001",
    "mathe-kap3",
    "Vereinfache vollständig: ((3\u2074 \u00b7 9\u207b\u00b9) / 27\u00b2) \u00b7 81",
    ["3", "9", "1", "1/3", "27"],
    2,
    "Alles in Potenzen von 3 umschreiben: 3\u2074 \u00b7 9\u207b\u00b9 = 3\u2074 \u00b7 (3\u00b2)\u207b\u00b9 = 3\u2074 \u00b7 3\u207b\u00b2 = 3\u00b2. Dann 27\u00b2 = (3\u00b3)\u00b2 = 3\u2076. Also Bruch = 3\u00b2/3\u2076 = 3\u207b\u2074. Schlie\u00dflich \u00d781 = \u00d73\u2074: Ergebnis = 3\u207b\u2074 \u00b7 3\u2074 = 3\u2070 = 1. Fehler A (3): Vergisst 9\u207b\u00b9 umzuwandeln. Fehler B (9): Rechnet 81 = 3\u00b2 statt 3\u2074. Fehler D (1/3): Rechnet 27\u00b2 = 3\u2075 statt 3\u2076. Fehler E (27): Vergisst Division durch 27\u00b2.",
    "schwer",
    ["Potenzgesetze", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-002",
    "mathe-kap2",
    "L\u00f6se das Gleichungssystem: 2x + y = 7 und x + 3y = 11. Berechne x\u00b2 + y\u00b2.",
    ["10", "13", "17", "11", "15"],
    1,
    "Aus Gl.1: y = 7 \u2212 2x. Einsetzen in Gl.2: x + 3(7 \u2212 2x) = 11 \u2192 x + 21 \u2212 6x = 11 \u2192 \u22125x = \u221210 \u2192 x = 2, y = 3. Also x\u00b2 + y\u00b2 = 4 + 9 = 13. Fehler A (10): Vertauscht x und y \u2192 9 + 1 = 10. Fehler C (17): Rechnet (x+y)\u00b2 = 25 ohne 2xy abzuziehen. Fehler D (11): Addiert x + y + xy = 5 + 6 = 11. Fehler E (15): Addiert x\u00b2 + y\u00b2 + xy = 4 + 9 + 6 = 19, dann Rechenfehler.",
    "schwer",
    ["Gleichungssystem", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-003",
    "mathe-kap3",
    "Ein Kapital von 5.000 \u20ac wird 4 Jahre mit 3 % p.a. Zinseszins angelegt. Wie hoch ist das Endkapital (auf ganze Euro gerundet)?",
    ["5.600 \u20ac", "5.628 \u20ac", "5.627 \u20ac", "5.624 \u20ac", "5.650 \u20ac"],
    1,
    "K\u2084 = 5000 \u00b7 1,03\u2074. Berechnung: 1,03\u00b2 = 1,0609. 1,03\u2074 = 1,0609\u00b2 = 1,12550881. K\u2084 = 5000 \u00b7 1,12550881 = 5627,54 \u2192 gerundet 5.628 \u20ac. Fehler A (5.600): Einfache Zinsen: 5000 \u00b7 1,12 = 5.600. Fehler C (5.627): Rundet ab statt kaufm\u00e4nnisch. Fehler D (5.624): Verwendet Linearisierung ohne h\u00f6here Terme. Fehler E (5.650): Falscher Zinssatz von ca. 3,25 %.",
    "schwer",
    ["Zinseszins", "Exponentialrechnung", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-004",
    "mathe-kap3",
    "Ein Preis von 200 \u20ac wird zunächst um 25 % erhöht und anschließend um 20 % gesenkt. Wie hoch ist der Endpreis?",
    ["210 \u20ac", "205 \u20ac", "200 \u20ac", "195 \u20ac", "190 \u20ac"],
    2,
    "Schritt 1: 200 \u00b7 1,25 = 250 \u20ac. Schritt 2: 250 \u00b7 0,80 = 200 \u20ac. Gesamtfaktor: 1,25 \u00b7 0,80 = 1,00. Fehler A (210): Berechnet beide \u00c4nderungen vom Ausgangswert: 200 + 50 \u2212 40 = 210. Fehler B (205): Mittelt zwischen 210 und 200. Fehler D (195): Zieht netto 2,5 % ab. Fehler E (190): Rechnet 200 \u00b7 0,95 = 190.",
    "schwer",
    ["Prozentrechnung", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-005",
    "mathe-kap3",
    "Berechne: (1/2 + 1/3) / (1/4 \u2212 1/6)",
    ["10", "8", "12", "6", "5"],
    0,
    "Z\u00e4hler: 1/2 + 1/3 = 3/6 + 2/6 = 5/6. Nenner: 1/4 \u2212 1/6 = 3/12 \u2212 2/12 = 1/12. Division: (5/6) \u00f7 (1/12) = (5/6) \u00b7 12 = 10. Fehler B (8): Rechnet Nenner als 1/4 \u2212 1/8 = 1/8 \u2192 (5/6) \u00b7 8 \u2248 6,67, rundet auf 8. Fehler C (12): Rechnet nur 1/(1/12) = 12. Fehler D (6): Rechnet (5/6) \u00b7 (6/1) = 5, nimmt dann 6. Fehler E (5): Nimmt nur den Z\u00e4hler 5/6 \u2248 5.",
    "schwer",
    ["Bruchrechnung", "verschachtelte Br\u00fcche", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-006",
    "mathe-kap2",
    "Bestimme die L\u00f6sungen der Gleichung 2x\u00b2 \u2212 7x + 3 = 0. Wie lautet das Produkt der beiden L\u00f6sungen?",
    ["3/2", "7/2", "3", "1/2", "2"],
    0,
    "D = 49 \u2212 24 = 25. x\u2081 = (7+5)/4 = 3, x\u2082 = (7\u22125)/4 = 1/2. Produkt: 3 \u00b7 1/2 = 3/2. Nach Vieta: c/a = 3/2. Fehler B (7/2): Verwechselt mit der Summe (\u2212b/a = 7/2). Fehler C (3): Nimmt nur x\u2081. Fehler D (1/2): Nimmt nur x\u2082. Fehler E (2): Rechnet a/c = 2/3, verwechselt mit 2.",
    "schwer",
    ["quadratische Gleichung", "Vieta", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-007",
    "mathe-kap3",
    "Ein Stoff zerf\u00e4llt exponentiell: N(t) = N\u2080 \u00b7 (1/2)^(t/T). Mit N\u2080 = 800, T = 5 h. Wie viel bleibt nach t = 15 h?",
    ["100", "200", "50", "400", "25"],
    0,
    "N(15) = 800 \u00b7 (1/2)^(15/5) = 800 \u00b7 (1/2)\u00b3 = 800/8 = 100. Fehler B (200): Rechnet (1/2)\u00b2 statt (1/2)\u00b3 \u2192 800/4. Fehler C (50): Rechnet (1/2)\u2074 \u2192 800/16. Fehler D (400): Rechnet (1/2)\u00b9 \u2192 800/2. Fehler E (25): Rechnet (1/2)\u2075 \u2192 800/32.",
    "schwer",
    ["Exponentialzerfall", "Halbwertszeit", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-008",
    "mathe-kap3",
    "Ein Artikel kostet 120 \u20ac. Zuerst wird er um 20 % aufgeschlagen, dann wird vom neuen Preis ein Rabatt von 15 % gew\u00e4hrt. Wie hoch ist der Endpreis?",
    ["120,00 \u20ac", "126,00 \u20ac", "122,40 \u20ac", "118,80 \u20ac", "130,00 \u20ac"],
    2,
    "Aufschlag: 120 \u00b7 1,20 = 144 \u20ac. Rabatt: 144 \u00b7 0,85 = 122,40 \u20ac. Gesamtfaktor: 1,20 \u00b7 0,85 = 1,02. Fehler A (120,00): Meint +20 % und \u221215 % heben sich auf. Fehler B (126,00): Addiert Prozents\u00e4tze: 120 \u00b7 1,05 = 126. Fehler D (118,80): Rechnet 120 \u00b7 0,99 = 118,80. Fehler E (130,00): Rechnet nur den Aufschlag falsch.",
    "schwer",
    ["Prozentrechnung", "Aufschlag", "Rabatt", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-009",
    "mathe-kap2",
    "L\u00f6se die logarithmische Gleichung: log\u2082(x) + log\u2082(x \u2212 2) = 3. Welchen Wert hat x?",
    ["4", "3", "5", "6", "2"],
    0,
    "Zusammenfassen: log\u2082(x(x\u22122)) = 3 \u2192 x(x\u22122) = 8 \u2192 x\u00b2 \u2212 2x \u2212 8 = 0. D = 4 + 32 = 36. x = (2\u00b16)/2. Also x = 4 oder x = \u22122. Wegen Definitionsbereich (x > 2) gilt nur x = 4. Fehler B (3): Setzt log\u2082(x\u00b2) = 3 \u2192 x = 2\u221a2 \u2248 2,83, rundet auf 3. Fehler C (5): L\u00f6st falsch. Fehler D (6): Rechnet x(x\u22122) = 2\u00b73 = 6 statt 2\u00b3 = 8. Fehler E (2): log\u2082(0) ist undefiniert.",
    "schwer",
    ["Logarithmus", "quadratische Gleichung", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-010",
    "mathe-kap3",
    "Vereinfache: (\u221a12 + \u221a27) / \u221a3",
    ["5", "\u221a13", "3 + \u221a3", "7", "3\u221a3"],
    0,
    "\u221a12 = 2\u221a3, \u221a27 = 3\u221a3. Z\u00e4hler: 2\u221a3 + 3\u221a3 = 5\u221a3. Division: 5\u221a3/\u221a3 = 5. Fehler B (\u221a13): Addiert unter der Wurzel: \u221a(12+27)/\u221a3 = \u221a39/\u221a3 = \u221a13. Fehler C (3+\u221a3): Vereinfacht nur \u221a27/\u221a3 = 3 und rechnet \u221a12/\u221a3 falsch als \u221a3. Fehler D (7): Rechnet \u221a12 \u2248 4 und \u221a27 \u2248 5, dann 9/\u221a3 \u2248 7. Fehler E (3\u221a3): Rechnet 5\u221a3/\u221a3 falsch als 3\u221a3.",
    "schwer",
    ["Wurzelrechnung", "Vereinfachen", "rechenfrage"],
  ),

  // === Geometrie (12 Fragen) ===

  q(
    "ma-pool-hard-011",
    "mathe-kap2",
    "Ein Kegel hat die H\u00f6he h = 12 cm und den Grundfl\u00e4chenradius r = 5 cm. Wie gro\u00df ist die Mantelfl\u00e4che?",
    ["65\u03c0 cm\u00b2", "60\u03c0 cm\u00b2", "25\u03c0 cm\u00b2", "30\u03c0 cm\u00b2", "169\u03c0 cm\u00b2"],
    0,
    "Mantellinie: s = \u221a(r\u00b2 + h\u00b2) = \u221a(25 + 144) = \u221a169 = 13 cm. Mantelfl\u00e4che: M = \u03c0\u00b7r\u00b7s = \u03c0\u00b75\u00b713 = 65\u03c0 cm\u00b2. Fehler B (60\u03c0): Verwendet h statt s \u2192 \u03c0\u00b75\u00b712. Fehler C (25\u03c0): Berechnet Grundfl\u00e4che \u03c0r\u00b2. Fehler D (30\u03c0): Rechnet \u03c0\u00b7r\u00b7h/2 = 30\u03c0. Fehler E (169\u03c0): Rechnet \u03c0s\u00b2 = 169\u03c0.",
    "schwer",
    ["Kegel", "Mantelfl\u00e4che", "Pythagoras", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-012",
    "mathe-kap2",
    "Auf einer Kugel mit Radius R = 10 cm wird eine Kugelkappe der H\u00f6he h = 3 cm abgetrennt. Wie gro\u00df ist die Mantelfl\u00e4che (Kalotte)?",
    ["60\u03c0 cm\u00b2", "30\u03c0 cm\u00b2", "90\u03c0 cm\u00b2", "100\u03c0 cm\u00b2", "9\u03c0 cm\u00b2"],
    0,
    "Mantelfl\u00e4che einer Kugelkappe: A = 2\u03c0Rh = 2\u03c0\u00b710\u00b73 = 60\u03c0 cm\u00b2. Fehler B (30\u03c0): Vergisst Faktor 2 \u2192 \u03c0Rh = 30\u03c0. Fehler C (90\u03c0): Verwendet falsche Formel. Fehler D (100\u03c0): Rechnet \u03c0R\u00b2 (Gro\u00dfkreisfl\u00e4che). Fehler E (9\u03c0): Rechnet \u03c0h\u00b2 = 9\u03c0.",
    "schwer",
    ["Kugel", "Kugelkappe", "Oberfl\u00e4che", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-013",
    "mathe-kap2",
    "Berechne das Volumen einer quadratischen Pyramide mit Grundkante a = 6 cm und H\u00f6he h = 8 cm.",
    ["96 cm\u00b3", "288 cm\u00b3", "144 cm\u00b3", "48 cm\u00b3", "192 cm\u00b3"],
    0,
    "V = (1/3)\u00b7a\u00b2\u00b7h = (1/3)\u00b736\u00b78 = 96 cm\u00b3. Fehler B (288): Vergisst Faktor 1/3 \u2192 a\u00b2\u00b7h = 288. Fehler C (144): Nimmt Faktor 1/2 statt 1/3 \u2192 288/2 = 144. Fehler D (48): Rechnet (1/6)\u00b7a\u00b2\u00b7h = 48. Fehler E (192): Rechnet (2/3)\u00b7a\u00b2\u00b7h = 192.",
    "schwer",
    ["Pyramide", "Volumen", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-014",
    "mathe-kap2",
    "Berechne das Volumen eines regul\u00e4ren Tetraeders mit Kantenl\u00e4nge a = 6 cm. (Formel: V = a\u00b3\u221a2 / 12)",
    ["18\u221a2 cm\u00b3", "36\u221a2 cm\u00b3", "12\u221a2 cm\u00b3", "6\u221a2 cm\u00b3", "72\u221a2 cm\u00b3"],
    0,
    "V = a\u00b3\u221a2/12 = 216\u221a2/12 = 18\u221a2 \u2248 25,46 cm\u00b3. Fehler B (36\u221a2): Rechnet a\u00b3\u221a2/6 (Nenner 6 statt 12). Fehler C (12\u221a2): Verwendet a\u00b2 statt a\u00b3. Fehler D (6\u221a2): Rechnet a\u00b3\u221a2/36. Fehler E (72\u221a2): Rechnet a\u00b3\u221a2/3.",
    "schwer",
    ["Tetraeder", "Volumen", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-015",
    "mathe-kap2",
    "Ein Prisma hat als Grundfl\u00e4che ein gleichseitiges Dreieck mit Seitenl\u00e4nge a = 4 cm und eine H\u00f6he von h = 10 cm. Berechne das Volumen.",
    ["40\u221a3 cm\u00b3", "80\u221a3 cm\u00b3", "20\u221a3 cm\u00b3", "160 cm\u00b3", "40 cm\u00b3"],
    0,
    "Grundfl\u00e4che: A = (\u221a3/4)\u00b7a\u00b2 = (\u221a3/4)\u00b716 = 4\u221a3 cm\u00b2. Volumen: V = A\u00b7h = 4\u221a3\u00b710 = 40\u221a3 \u2248 69,3 cm\u00b3. Fehler B (80\u221a3): Rechnet A = (\u221a3/2)\u00b7a\u00b2 (falscher Nenner). Fehler C (20\u221a3): Verwendet h/2 = 5. Fehler D (160): Rechnet a\u00b2\u00b7h = 160 (quadratische Grundfl\u00e4che). Fehler E (40): Vergisst Faktor \u221a3.",
    "schwer",
    ["Prisma", "gleichseitiges Dreieck", "Volumen", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-016",
    "mathe-kap2",
    "In einen W\u00fcrfel mit Kantenl\u00e4nge a = 6 cm wird eine Kugel einbeschrieben (Inkugel). Berechne V_W\u00fcrfel \u2212 V_Kugel.",
    ["(216 \u2212 36\u03c0) cm\u00b3", "(216 \u2212 288\u03c0) cm\u00b3", "(216 \u2212 48\u03c0) cm\u00b3", "(216 \u2212 108\u03c0) cm\u00b3", "(216 \u2212 72\u03c0) cm\u00b3"],
    0,
    "V_W = 6\u00b3 = 216. Inkugelradius r = a/2 = 3. V_K = (4/3)\u03c0r\u00b3 = (4/3)\u03c0\u00b727 = 36\u03c0. Rest = 216 \u2212 36\u03c0 \u2248 102,9 cm\u00b3. Fehler B: Nimmt r = a = 6 \u2192 V = 288\u03c0. Fehler C: Rechnet (4/3)\u03c0r\u00b2 statt r\u00b3. Fehler D: Rechnet 4\u03c0r\u00b3 statt (4/3)\u03c0r\u00b3 \u2192 108\u03c0. Fehler E: Rechnet (2/3)\u03c0r\u00b3 \u2192 18\u03c0, verwechselt mit 72\u03c0.",
    "schwer",
    ["W\u00fcrfel", "Kugel", "Restvolumen", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-017",
    "mathe-kap2",
    "Ein Zylinder hat den Radius r = 3 cm und die H\u00f6he h = 10 cm. Berechne die Gesamtoberfl\u00e4che (Mantel + beide Grundfl\u00e4chen).",
    ["78\u03c0 cm\u00b2", "60\u03c0 cm\u00b2", "96\u03c0 cm\u00b2", "69\u03c0 cm\u00b2", "90\u03c0 cm\u00b2"],
    0,
    "Mantel = 2\u03c0rh = 60\u03c0. Zwei Deckel = 2\u03c0r\u00b2 = 18\u03c0. Gesamt = 78\u03c0 cm\u00b2. Fehler B (60\u03c0): Vergisst die Deckelfl\u00e4chen. Fehler C (96\u03c0): Nimmt r = 4 statt 3. Fehler D (69\u03c0): Addiert nur einen Deckel: 60\u03c0 + 9\u03c0. Fehler E (90\u03c0): Rechnet Volumen \u03c0r\u00b2h = 90\u03c0 statt Oberfl\u00e4che.",
    "schwer",
    ["Zylinder", "Oberfl\u00e4che", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-018",
    "mathe-kap2",
    "Ein Hohlzylinder hat den Au\u00dfenradius R = 5 cm, den Innenradius r = 3 cm und die H\u00f6he h = 10 cm. Berechne das Volumen.",
    ["160\u03c0 cm\u00b3", "250\u03c0 cm\u00b3", "90\u03c0 cm\u00b3", "340\u03c0 cm\u00b3", "80\u03c0 cm\u00b3"],
    0,
    "V = \u03c0(R\u00b2 \u2212 r\u00b2)h = \u03c0(25 \u2212 9)\u00b710 = 160\u03c0 cm\u00b3. Fehler B (250\u03c0): Rechnet nur \u03c0R\u00b2h = 250\u03c0 (ignoriert Hohlraum). Fehler C (90\u03c0): Rechnet \u03c0r\u00b2h = 90\u03c0 (berechnet den Hohlraum). Fehler D (340\u03c0): Addiert statt subtrahiert: \u03c0(R\u00b2+r\u00b2)h = 340\u03c0. Fehler E (80\u03c0): Rechnet \u03c0(R\u2212r)\u00b2h = 40\u03c0, verdoppelt auf 80\u03c0.",
    "schwer",
    ["Hohlzylinder", "Volumen", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-019",
    "mathe-kap2",
    "Ein Quader hat die Kantenl\u00e4ngen a = 3 cm, b = 4 cm und c = 12 cm. Wie lang ist die Raumdiagonale?",
    ["13 cm", "12 cm", "\u221a153 cm", "17 cm", "\u221a157 cm"],
    0,
    "d = \u221a(a\u00b2+b\u00b2+c\u00b2) = \u221a(9+16+144) = \u221a169 = 13 cm. Fehler B (12): Vergisst a\u00b2 \u2192 \u221a(16+144) = \u221a160 \u2248 12,6, rundet auf 12. Fehler C (\u221a153): Nimmt c\u00b2 = 128 statt 144. Fehler D (17): Rechnet Fl\u00e4chendiagonale \u221a(9+16) = 5, addiert c: 5+12 = 17. Fehler E (\u221a157): Nimmt b statt b\u00b2 \u2192 9+4+144 = 157.",
    "schwer",
    ["Quader", "Raumdiagonale", "Pythagoras", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-020",
    "mathe-kap2",
    "Berechne die Fl\u00e4che eines Kreisrings mit Au\u00dfenradius R = 7 cm und Innenradius r = 5 cm.",
    ["24\u03c0 cm\u00b2", "12\u03c0 cm\u00b2", "49\u03c0 cm\u00b2", "74\u03c0 cm\u00b2", "4\u03c0 cm\u00b2"],
    0,
    "A = \u03c0(R\u00b2 \u2212 r\u00b2) = \u03c0(49 \u2212 25) = 24\u03c0 cm\u00b2. Fehler B (12\u03c0): Rechnet \u03c0(R\u2212r)(R+r)/2. Fehler C (49\u03c0): Nimmt nur \u03c0R\u00b2. Fehler D (74\u03c0): Addiert statt subtrahiert: \u03c0(R\u00b2+r\u00b2) = 74\u03c0. Fehler E (4\u03c0): Rechnet \u03c0(R\u2212r)\u00b2 = 4\u03c0.",
    "schwer",
    ["Kreisring", "Fl\u00e4che", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-021",
    "mathe-kap2",
    "Berechne das Volumen eines Kegelstumpfs mit R = 5 cm, r = 3 cm und h = 8 cm. (V = \u03c0h/3 \u00b7 (R\u00b2 + Rr + r\u00b2))",
    ["392\u03c0/3 cm\u00b3", "128\u03c0/3 cm\u00b3", "200\u03c0/3 cm\u00b3", "136\u03c0 cm\u00b3", "256\u03c0/3 cm\u00b3"],
    0,
    "V = \u03c0\u00b78/3\u00b7(25+15+9) = \u03c0\u00b78/3\u00b749 = 392\u03c0/3 \u2248 410,5 cm\u00b3. Fehler B (128\u03c0/3): Rechnet nur (R\u00b2\u2212r\u00b2) = 16 \u2192 128\u03c0/3. Fehler C (200\u03c0/3): Rechnet nur mit R\u00b2. Fehler D (136\u03c0): Vergisst Faktor 1/3. Fehler E (256\u03c0/3): Rechnet (R\u00b2+r\u00b2)\u00b72 ohne Mischterm.",
    "schwer",
    ["Kegelstumpf", "Volumen", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-022",
    "mathe-kap2",
    "Ein zusammengesetzter K\u00f6rper: Zylinder (r = 4 cm, h = 6 cm) mit aufgesetzter Halbkugel (r = 4 cm). Berechne das Gesamtvolumen.",
    ["416\u03c0/3 cm\u00b3", "96\u03c0 cm\u00b3", "224\u03c0/3 cm\u00b3", "128\u03c0 cm\u00b3", "160\u03c0 cm\u00b3"],
    0,
    "Zylinder: V\u2081 = \u03c0r\u00b2h = \u03c0\u00b716\u00b76 = 96\u03c0. Halbkugel: V\u2082 = (2/3)\u03c0r\u00b3 = (2/3)\u03c0\u00b764 = 128\u03c0/3. Gesamt: 96\u03c0 + 128\u03c0/3 = 288\u03c0/3 + 128\u03c0/3 = 416\u03c0/3 \u2248 435,6 cm\u00b3. Fehler B (96\u03c0): Vergisst die Halbkugel. Fehler C (224\u03c0/3): Rechnet Halbkugel als (1/3)\u03c0r\u00b3. Fehler D (128\u03c0): Rechnet Halbkugel als (4/3)\u03c0r\u00b3 (volle Kugel). Fehler E (160\u03c0): Rechnet Halbkugel als \u03c0r\u00b3 = 64\u03c0 \u2192 96\u03c0+64\u03c0.",
    "schwer",
    ["zusammengesetzter K\u00f6rper", "Zylinder", "Halbkugel", "rechenfrage"],
  ),

  // === Einheiten (5 Fragen) ===

  q(
    "ma-pool-hard-023",
    "mathe-kap1",
    "Rechne 0,5 cm\u00b3 in mm\u00b3 um.",
    ["500 mm\u00b3", "50 mm\u00b3", "5.000 mm\u00b3", "5 mm\u00b3", "0,5 mm\u00b3"],
    0,
    "1 cm = 10 mm, also 1 cm\u00b3 = (10 mm)\u00b3 = 1.000 mm\u00b3. Daher 0,5 cm\u00b3 = 500 mm\u00b3. Fehler B (50): Rechnet \u00d7100 (quadratisch statt kubisch). Fehler C (5.000): Rechnet \u00d710.000. Fehler D (5): Rechnet nur \u00d710 (linear). Fehler E (0,5): Keine Umrechnung.",
    "schwer",
    ["Einheitenumrechnung", "Volumen", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-024",
    "mathe-kap1",
    "Die Dichte von Aluminium betr\u00e4gt 2,7 g/cm\u00b3. Wie viel ist das in kg/m\u00b3?",
    ["2.700 kg/m\u00b3", "27 kg/m\u00b3", "270 kg/m\u00b3", "0,0027 kg/m\u00b3", "27.000 kg/m\u00b3"],
    0,
    "1 g = 10\u207b\u00b3 kg. 1 cm\u00b3 = 10\u207b\u2076 m\u00b3. Also 1 g/cm\u00b3 = 10\u207b\u00b3/10\u207b\u2076 = 10\u00b3 kg/m\u00b3. Daher 2,7 g/cm\u00b3 = 2.700 kg/m\u00b3. Fehler B (27): Rechnet \u00d710. Fehler C (270): Rechnet \u00d7100. Fehler D (0,0027): Dividiert statt multipliziert. Fehler E (27.000): Rechnet \u00d710.000.",
    "schwer",
    ["Einheitenumrechnung", "Dichte", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-025",
    "mathe-kap1",
    "Ein L\u00e4ufer (m = 80 kg) bewegt sich mit v = 72 km/h. Berechne die kinetische Energie E = \u00bdmv\u00b2 in Joule.",
    ["16.000 J", "207.360 J", "32.000 J", "1.600 J", "160 J"],
    0,
    "Umrechnung: 72 km/h \u00f7 3,6 = 20 m/s. E = \u00bd\u00b780\u00b720\u00b2 = \u00bd\u00b780\u00b7400 = 16.000 J. Fehler B (207.360): Vergisst km/h \u2192 m/s \u2192 \u00bd\u00b780\u00b772\u00b2. Fehler C (32.000): Vergisst Faktor \u00bd. Fehler D (1.600): Vergisst v\u00b2 \u2192 rechnet \u00bd\u00b780\u00b720\u00b72. Fehler E (160): Dividiert v durch 36 statt 3,6 \u2192 v = 2.",
    "schwer",
    ["Einheitenumrechnung", "kinetische Energie", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-026",
    "mathe-kap1",
    "Ein Infusionsger\u00e4t liefert 250 mL/min. Wie viel Liter pro Stunde entspricht das?",
    ["15 L/h", "25 L/h", "2,5 L/h", "150 L/h", "1,5 L/h"],
    0,
    "250 mL/min \u00d7 60 min/h = 15.000 mL/h. 15.000 mL \u00f7 1.000 = 15 L/h. Fehler B (25): Rechnet 250/10. Fehler C (2,5): Vergisst \u00d760. Fehler D (150): Rechnet 15.000/100 statt /1.000. Fehler E (1,5): Rechnet 250/1.000 \u00b7 6.",
    "schwer",
    ["Einheitenumrechnung", "Flussrate", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-027",
    "mathe-kap1",
    "Ein rechteckiger Bereich misst 1,2 \u00b5m \u00d7 1,0 \u00b5m. Wie gro\u00df ist die Fl\u00e4che in nm\u00b2? (1 \u00b5m = 1.000 nm)",
    ["1,2 \u00b7 10\u2076 nm\u00b2", "1,2 \u00b7 10\u00b3 nm\u00b2", "1,2 \u00b7 10\u2079 nm\u00b2", "1.200 nm\u00b2", "1,2 nm\u00b2"],
    0,
    "Fl\u00e4che = 1,2 \u00b5m\u00b2. 1 \u00b5m = 10\u00b3 nm \u2192 1 \u00b5m\u00b2 = 10\u2076 nm\u00b2. Also 1,2 \u00b5m\u00b2 = 1,2 \u00b7 10\u2076 nm\u00b2. Fehler B (1,2\u00b710\u00b3): Linearer statt quadratischer Faktor. Fehler C (1,2\u00b710\u2079): Kubischer Faktor. Fehler D (1.200): 1,2 \u00b7 1.000 (linear). Fehler E (1,2): Keine Umrechnung.",
    "schwer",
    ["Einheitenumrechnung", "Fl\u00e4che", "Mikrometer", "rechenfrage"],
  ),

  // === Funktionen (12 Fragen) ===

  q(
    "ma-pool-hard-028",
    "mathe-kap5",
    "Die Funktion f(x) = x\u00b3 \u2212 6x\u00b2 + 9x hat wie viele verschiedene reelle Nullstellen?",
    ["2", "3", "1", "0", "4"],
    0,
    "f(x) = x(x\u00b2 \u2212 6x + 9) = x(x \u2212 3)\u00b2. Nullstellen: x\u2081 = 0 (einfach) und x\u2082 = 3 (doppelt). Also 2 verschiedene Nullstellen. Fehler B (3): Z\u00e4hlt die Vielfachheit mit. Fehler C (1): Sieht nur x = 0. Fehler D (0): Denkt, die Diskriminante sei negativ. Fehler E (4): Verwechselt Grad mit Nullstellenanzahl.",
    "schwer",
    ["Polynomfunktion", "Nullstellen", "Faktorisierung", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-029",
    "mathe-kap5",
    "L\u00f6se: e^(2x) \u2212 5\u00b7e^x + 6 = 0. Berechne die Summe aller L\u00f6sungen.",
    ["ln 6", "ln 5", "5", "ln 2 \u00b7 ln 3", "1"],
    0,
    "Substitution u = e^x: u\u00b2 \u2212 5u + 6 = 0 \u2192 (u\u22122)(u\u22123) = 0. u = 2 \u2192 x = ln 2. u = 3 \u2192 x = ln 3. Summe: ln 2 + ln 3 = ln(2\u00b73) = ln 6. Fehler B (ln 5): Addiert u-Werte: ln(2+3). Fehler C (5): Addiert u\u2081+u\u2082 = 5 statt x-Werte. Fehler D: Multipliziert die Logarithmen. Fehler E (1): Rechnet ln(e) = 1.",
    "schwer",
    ["Exponentialgleichung", "Substitution", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-030",
    "mathe-kap5",
    "f(x) = x\u2074 \u2212 5x\u00b2 + 4 hat vier reelle Nullstellen. Berechne die Summe der Quadrate aller Nullstellen.",
    ["10", "8", "12", "6", "14"],
    0,
    "Substitution u = x\u00b2: u\u00b2 \u2212 5u + 4 = 0 \u2192 u = 1, u = 4. R\u00fccksubstitution: x = \u00b11, \u00b12. Summe der Quadrate: 1+1+4+4 = 10. Fehler B (8): Z\u00e4hlt nur u\u2081+u\u2082 mal 2 \u2212 2. Fehler C (12): F\u00fcgt Mischterme hinzu. Fehler D (6): Rechnet nur u\u2081+u\u2082+1 = 6. Fehler E (14): Addiert auch die Betr\u00e4ge.",
    "schwer",
    ["Polynomfunktion", "Substitution", "Nullstellen", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-031",
    "mathe-kap5",
    "Berechne das bestimmte Integral: \u222b\u2080\u00b2 (3x\u00b2 + 2x) dx",
    ["12", "10", "14", "8", "16"],
    0,
    "Stammfunktion: F(x) = x\u00b3 + x\u00b2. F(2) \u2212 F(0) = (8+4) \u2212 0 = 12. Fehler B (10): Rechnet F(x) = x\u00b3+x \u2192 8+2 = 10. Fehler C (14): Addiert extra Term. Fehler D (8): Vergisst 2x-Anteil \u2192 nur 8. Fehler E (16): Rechnet F(x) = x\u00b3+2x\u00b2 \u2192 8+8 = 16.",
    "schwer",
    ["Integralrechnung", "bestimmtes Integral", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-032",
    "mathe-kap5",
    "Gegeben: f(x) = 2sin(x) + cos(2x). Berechne f'(\u03c0/6).",
    ["0", "\u221a3", "1", "\u2212\u221a3", "2"],
    0,
    "f'(x) = 2cos(x) \u2212 2sin(2x). Mit sin(2x) = 2sin(x)cos(x): f'(x) = 2cos(x)(1 \u2212 2sin(x)). f'(\u03c0/6) = 2\u00b7(\u221a3/2)\u00b7(1 \u2212 2\u00b7\u00bd) = \u221a3\u00b70 = 0. Fehler B (\u221a3): Vergisst cos(2x)-Term. Fehler C (1): Rechnet f'(0). Fehler D (\u2212\u221a3): Vorzeichenfehler. Fehler E (2): Rechnet f'(0) = 2\u00b71 \u2212 0.",
    "schwer",
    ["Ableitung", "Trigonometrie", "Kettenregel", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-033",
    "mathe-kap5",
    "Gegeben: f(x) = ln(x\u00b2 + 1). Berechne f'(2).",
    ["4/5", "2/5", "4", "1/5", "2"],
    0,
    "Kettenregel: f'(x) = 2x/(x\u00b2+1). f'(2) = 4/5. Fehler B (2/5): Vergisst Faktor 2 \u2192 x/(x\u00b2+1) = 2/5. Fehler C (4): Nur den Z\u00e4hler 2\u00b72 = 4. Fehler D (1/5): Leitet als 1/(x\u00b2+1) ab. Fehler E (2): Vereinfacht falsch.",
    "schwer",
    ["Ableitung", "Kettenregel", "Logarithmus", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-034",
    "mathe-kap5",
    "Die Tangente an f(x) = e^x im Punkt x\u2080 = 1 hat die Gleichung y = ex + b. Welchen Wert hat b?",
    ["0", "\u2212e", "e", "1", "\u22121"],
    0,
    "f(1) = e, f'(1) = e. Tangente: y \u2212 e = e(x \u2212 1) \u2192 y = ex \u2212 e + e = ex. Also b = 0. Fehler B (\u2212e): Rechnet y = ex \u2212 e (vergisst +e). Fehler C (e): Setzt b = f(1) = e. Fehler D (1): Rechnet b = e\u2070 = 1. Fehler E (\u22121): Vorzeichenfehler.",
    "schwer",
    ["Tangente", "e-Funktion", "Ableitung", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-035",
    "mathe-kap5",
    "Berechne: \u222b\u2081^e (3/x + 2) dx",
    ["1 + 2e", "3 + 2e", "2e \u2212 1", "3", "2e + 1"],
    0,
    "Stammfunktion: F(x) = 3\u00b7ln(x) + 2x. F(e) \u2212 F(1) = (3\u00b7ln(e) + 2e) \u2212 (3\u00b7ln(1) + 2) = (3 + 2e) \u2212 2 = 1 + 2e. Fehler B (3+2e): Vergisst F(1) = 2 abzuziehen. Fehler C (2e\u22121): Rechnet nur 2x-Anteil: 2e\u22122 und addiert falsch 1. Fehler D (3): Nimmt nur ln-Anteil: 3\u00b7(ln e \u2212 ln 1) = 3. Fehler E (2e+1): Vorzeichenfehler bei der Subtraktion.",
    "schwer",
    ["Integralrechnung", "Logarithmus", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-036",
    "mathe-kap5",
    "Die Funktion f(x) = x\u00b7e^(\u2212x) hat ein lokales Maximum. Welchen y-Wert hat f am Maximum?",
    ["1/e", "0", "e", "\u22121/e", "2/e\u00b2"],
    0,
    "f'(x) = e^(\u2212x)(1\u2212x) = 0 \u2192 x = 1. f''(1) = e^(\u22121)(1\u22122) < 0 \u2192 Maximum. f(1) = 1/e. Fehler B (0): Verwechselt mit Nullstelle f(0) = 0. Fehler C (e): Rechnet e\u00b9 statt e^(\u22121). Fehler D (\u22121/e): Vorzeichenfehler. Fehler E (2/e\u00b2): Rechnet f(2) = 2e^(\u22122).",
    "schwer",
    ["Extremwert", "e-Funktion", "Produktregel", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-037",
    "mathe-kap5",
    "Berechne den Grenzwert: lim(x\u21922) (x\u00b2 \u2212 4) / (x \u2212 2)",
    ["4", "0", "2", "nicht definiert", "\u22124"],
    0,
    "(x\u00b2\u22124)/(x\u22122) = (x+2)(x\u22122)/(x\u22122) = x+2 f\u00fcr x \u2260 2. lim(x\u21922) (x+2) = 4. Fehler B (0): Setzt x = 2 ein \u2192 0/0, interpretiert als 0. Fehler C (2): Nimmt den x-Wert als Ergebnis. Fehler D: Sieht 0/0 und erkl\u00e4rt den Grenzwert als nicht existent. Fehler E (\u22124): Vorzeichenfehler bei der Faktorisierung.",
    "schwer",
    ["Grenzwert", "Faktorisierung", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-038",
    "mathe-kap5",
    "L\u00f6se: 2^(x+1) \u2212 2^x = 32. Welchen Wert hat x?",
    ["5", "4", "6", "3", "32"],
    0,
    "2^(x+1) \u2212 2^x = 2\u00b72^x \u2212 2^x = 2^x\u00b7(2\u22121) = 2^x. Also 2^x = 32 = 2\u2075 \u2192 x = 5. Fehler B (4): L\u00f6st 2^(x+1) = 32 \u2192 x+1 = 5 \u2192 x = 4 (ignoriert \u22122^x). Fehler C (6): Rechnet 2^(x+1) \u2212 2^x = 2^1 falsch. Fehler D (3): Rechnet 2^x = 8. Fehler E (32): Verwechselt L\u00f6sung mit rechter Seite.",
    "schwer",
    ["Exponentialgleichung", "Potenzgesetze", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-039",
    "mathe-kap5",
    "Bestimme den Wendepunkt von f(x) = x\u00b3 \u2212 3x\u00b2 + 2. Welche y-Koordinate hat er?",
    ["0", "2", "\u22122", "1", "\u22121"],
    0,
    "f'(x) = 3x\u00b2 \u2212 6x. f''(x) = 6x \u2212 6 = 0 \u2192 x = 1. f'''(x) = 6 \u2260 0, also echter Wendepunkt. f(1) = 1 \u2212 3 + 2 = 0. Fehler B (2): Verwechselt mit f(0) = 2. Fehler C (\u22122): Rechnet f(2) = 8\u221212+2 = \u22122 (Extrempunkt statt Wendepunkt). Fehler D (1): Verwechselt x- mit y-Koordinate. Fehler E (\u22121): Rechnet 1\u22123+2 falsch.",
    "schwer",
    ["Wendepunkt", "Ableitung", "rechenfrage"],
  ),

  // === Vektorrechnung (8 Fragen) ===

  q(
    "ma-pool-hard-040",
    "mathe-kap6",
    "Gegeben: a = (3, 4, 0) und b = (0, 4, 3). Berechne das Skalarprodukt a \u00b7 b.",
    ["16", "12", "25", "9", "0"],
    0,
    "a \u00b7 b = 3\u00b70 + 4\u00b74 + 0\u00b73 = 0 + 16 + 0 = 16. Fehler B (12): Vertauscht Komponenten \u2192 3\u00b74 + 4\u00b70 + 0\u00b73 = 12. Fehler C (25): Berechnet |a|\u00b2 = 25. Fehler D (9): Nimmt eine Einzelkomponente. Fehler E (0): Glaubt f\u00e4lschlich, die Vektoren seien orthogonal.",
    "schwer",
    ["Skalarprodukt", "Vektoren", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-041",
    "mathe-kap6",
    "Gegeben: a = (3, 4, 0), b = (0, 4, 3). Berechne cos(\u03b1), wobei \u03b1 der Winkel zwischen den Vektoren ist.",
    ["16/25", "4/5", "16/5", "3/5", "12/25"],
    0,
    "|a| = \u221a(9+16+0) = 5. |b| = \u221a(0+16+9) = 5. a\u00b7b = 16. cos(\u03b1) = 16/(5\u00b75) = 16/25. Fehler B (4/5): Dividiert nur durch einen Betrag. Fehler C (16/5): Vergisst einen Betrag im Nenner. Fehler D (3/5): Nimmt Richtungskosinus a\u2081/|a| = 3/5. Fehler E (12/25): Skalarprodukt falsch als 12.",
    "schwer",
    ["Winkel", "Skalarprodukt", "Vektoren", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-042",
    "mathe-kap6",
    "Berechne |a \u00d7 b| f\u00fcr a = (1, 2, 3) und b = (4, 5, 6).",
    ["3\u221a6", "6\u221a3", "3\u221a2", "\u221a18", "9"],
    0,
    "a \u00d7 b = (2\u00b76\u22123\u00b75, 3\u00b74\u22121\u00b76, 1\u00b75\u22122\u00b74) = (\u22123, 6, \u22123). |a\u00d7b| = \u221a(9+36+9) = \u221a54 = 3\u221a6. Fehler B (6\u221a3): Rechnet \u221a(36+36+36) = 6\u221a3. Fehler C (3\u221a2): Vergisst mittlere Komponente \u2192 \u221a(9+9) = 3\u221a2. Fehler D (\u221a18): = 3\u221a2, identisch mit C. Fehler E (9): Summiert Betr\u00e4ge |(\u22123)|+|6|+|(\u22123)| = 12, nimmt dann 9.",
    "schwer",
    ["Kreuzprodukt", "Betrag", "Vektoren", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-043",
    "mathe-kap6",
    "Berechne die L\u00e4nge der Projektion von a = (6, 2) auf b = (3, 4).",
    ["26/5", "\u221a40", "8/5", "2\u221a10", "5"],
    0,
    "|proj| = |a\u00b7b|/|b|. a\u00b7b = 18+8 = 26. |b| = 5. |proj| = 26/5 = 5,2. Fehler B (\u221a40): Berechnet |a| = \u221a40 statt Projektion. Fehler C (8/5): Nur y-Komponente: 2\u00b74/5. Fehler D (2\u221a10): = \u221a40 = |a|. Fehler E (5): Verwechselt mit |b|.",
    "schwer",
    ["Projektion", "Skalarprodukt", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-044",
    "mathe-kap6",
    "Die Punkte A = (1,0,0), B = (0,3,0), C = (0,0,4) bilden ein Dreieck. Berechne die Dreiecksfl\u00e4che.",
    ["13/2", "13", "6", "12", "\u221a38/2"],
    0,
    "AB = (\u22121,3,0), AC = (\u22121,0,4). Kreuzprodukt: (12, 4, 3). |Kreuzprodukt| = \u221a(144+16+9) = \u221a169 = 13. Fl\u00e4che = 13/2. Fehler B (13): Vergisst Faktor 1/2. Fehler C (6): Rundet 6,5 ab. Fehler D (12): Nimmt nur die gr\u00f6\u00dfte Komponente. Fehler E (\u221a38/2): Rechnet Kreuzprodukt falsch.",
    "schwer",
    ["Dreiecksfl\u00e4che", "Kreuzprodukt", "Vektoren", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-045",
    "mathe-kap6",
    "Gegeben: a = (2, 1, \u22121) und b = (1, \u22121, 2). Berechne |a + b|.",
    ["\u221a10", "\u221a14", "\u221a6", "\u221a12", "\u221a8"],
    0,
    "a + b = (3, 0, 1). |a+b| = \u221a(9+0+1) = \u221a10. Fehler B (\u221a14): Rechnet (3,1,2) \u2192 9+1+4 = 14. Fehler C (\u221a6): Berechnet |a| = \u221a6. Fehler D (\u221a12): Addiert |a|\u00b2+|b|\u00b2 = 12. Fehler E (\u221a8): Vorzeichenfehler \u2192 (2,0,2) \u2192 4+0+4 = 8.",
    "schwer",
    ["Vektoraddition", "Betrag", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-046",
    "mathe-kap6",
    "Berechne den Winkel zwischen a = (1, 1, 0) und b = (0, 1, 1).",
    ["60\u00b0", "45\u00b0", "90\u00b0", "30\u00b0", "120\u00b0"],
    0,
    "a\u00b7b = 0+1+0 = 1. |a| = \u221a2, |b| = \u221a2. cos(\u03b1) = 1/(\u221a2\u00b7\u221a2) = 1/2 \u2192 \u03b1 = 60\u00b0. Fehler B (45\u00b0): Rechnet cos(\u03b1) = 1/\u221a2. Fehler C (90\u00b0): Sieht a\u2081\u00b7b\u2081 = 0 und schlie\u00dft auf Orthogonalit\u00e4t. Fehler D (30\u00b0): Verwechselt cos und sin. Fehler E (120\u00b0): Vorzeichenfehler \u2192 cos = \u22121/2.",
    "schwer",
    ["Winkel", "Skalarprodukt", "Vektoren", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-047",
    "mathe-kap6",
    "F\u00fcr welchen Wert von t ist c = a \u2212 t\u00b7b orthogonal zu a, wenn a = (3, \u22121, 2) und b = (1, 2, \u22121)?",
    ["\u221214", "14", "\u22121", "1", "7"],
    0,
    "Bedingung: a\u00b7c = 0 \u2192 a\u00b7(a\u2212t\u00b7b) = |a|\u00b2 \u2212 t\u00b7(a\u00b7b) = 0. |a|\u00b2 = 9+1+4 = 14. a\u00b7b = 3\u22122\u22122 = \u22121. Also 14 \u2212 t\u00b7(\u22121) = 0 \u2192 14 + t = 0 \u2192 t = \u221214. Fehler B (14): Vergisst Vorzeichen von a\u00b7b. Fehler C (\u22121): Setzt t = a\u00b7b. Fehler D (1): Setzt t = |a\u00b7b|. Fehler E (7): Rechnet |a|\u00b2/2 = 7.",
    "schwer",
    ["Orthogonalit\u00e4t", "Skalarprodukt", "rechenfrage"],
  ),

  // === Zehnerpotenzen (3 Fragen) ===

  q(
    "ma-pool-hard-048",
    "mathe-kap1",
    "Berechne: (3,2 \u00b7 10\u2075 \u00b7 4,0 \u00b7 10\u207b\u00b3) / (1,6 \u00b7 10\u2074)",
    ["8 \u00b7 10\u207b\u00b2", "8 \u00b7 10\u00b2", "8 \u00b7 10\u207b\u00b9", "8 \u00b7 10\u2070", "8 \u00b7 10\u207b\u00b3"],
    0,
    "Mantissen: 3,2\u00b74,0/1,6 = 12,8/1,6 = 8. Exponenten: 10^(5\u22123\u22124) = 10\u207b\u00b2. Ergebnis: 8\u00b710\u207b\u00b2 = 0,08. Fehler B (8\u00b710\u00b2): Vergisst Division \u2192 10^(5\u22123). Fehler C (8\u00b710\u207b\u00b9): Exponent 5\u22123\u22121 = 1, nimmt \u22121. Fehler D (8\u00b710\u2070): Falscher Nenner-Exponent. Fehler E (8\u00b710\u207b\u00b3): Rechnet 5\u22123\u22125.",
    "schwer",
    ["Zehnerpotenzen", "wissenschaftliche Notation", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-049",
    "mathe-kap1",
    "Berechne: (6 \u00b7 10\u00b2\u00b3 \u00b7 2 \u00b7 10\u207b\u2078) / (4 \u00b7 10\u2077)",
    ["3 \u00b7 10\u2078", "3 \u00b7 10\u00b9\u2070", "3 \u00b7 10\u2076", "1,2 \u00b7 10\u00b9\u2076", "3 \u00b7 10\u00b9\u00b2"],
    0,
    "Mantissen: 6\u00b72/4 = 3. Exponenten: 10^(23\u22128\u22127) = 10\u2078. Ergebnis: 3\u00b710\u2078. Fehler B (3\u00b710\u00b9\u2070): Exponentenfehler. Fehler C (3\u00b710\u2076): Rechnet 15\u22127 = 6 statt 8. Fehler D (1,2\u00b710\u00b9\u2076): Vergisst /4. Fehler E (3\u00b710\u00b9\u00b2): Falscher Nenner-Exponent.",
    "schwer",
    ["Zehnerpotenzen", "wissenschaftliche Notation", "rechenfrage"],
  ),

  q(
    "ma-pool-hard-050",
    "mathe-kap1",
    "Berechne: (5 \u00b7 10\u207b\u2074)\u00b2 \u00b7 8 \u00b7 10\u2077",
    ["20", "200", "2", "0,2", "2.000"],
    0,
    "Quadrieren: (5\u00b710\u207b\u2074)\u00b2 = 25\u00b710\u207b\u2078 = 2,5\u00b710\u207b\u2077. Multiplizieren: 2,5\u00b710\u207b\u2077 \u00b7 8\u00b710\u2077 = 20\u00b710\u2070 = 20. Fehler B (200): Quadriert Exponenten als (\u22124)\u00b72 = \u22126 statt 2\u00b7(\u22124) = \u22128, erh\u00e4lt 25\u00b710\u207b\u2076\u00b78\u00b710\u2077 = 200. Fehler C (2): Vergisst 5\u00b2 = 25, nimmt 5 \u2192 5\u00b710\u207b\u2078\u00b78\u00b710\u2077 = 40\u00b710\u207b\u00b9 = 4 oder \u00e4hnlich. Fehler D (0,2): Exponentenfehler \u2192 20\u00b710\u207b\u00b2. Fehler E (2.000): Rechnet (\u22124)\u00b2 = +16 statt 2\u00b7(\u22124) = \u22128.",
    "schwer",
    ["Zehnerpotenzen", "Potenzgesetze", "rechenfrage"],
  ),
];
