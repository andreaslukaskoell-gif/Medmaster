/**
 * Mathematik Typ-K Pool 3 (Kombinationsaufgaben) — 75 Fragen im Question-Format.
 * IDs: ma-typk-new3-001 bis ma-typk-new3-075.
 * Themen-Schwerpunkt: Gleichungssysteme, Komplexe Zahlen, Folgen/Reihen,
 * Ungleichungen/Beträge, Matrizen, Kurvendiskussion, Angewandte Mathematik.
 * KEINE Stochastik!
 * Schwierigkeit: ~30 % leicht, ~45 % mittel, ~25 % schwer.
 */
import type { Question } from "./index";

export const mathematikTypKNew3: Question[] = [
  // ── 001 Gleichungssysteme – 2x2 Grundlagen (leicht) ──
  {
    id: "ma-typk-new3-001",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu linearen Gleichungssystemen (2×2) sind richtig?\n\n1. Ein 2×2-System hat genau eine Lösung, wenn die Koeffizientendeterminante ≠ 0.\n2. Zwei parallele Geraden ergeben keine Lösung.\n3. Zwei identische Geraden ergeben unendlich viele Lösungen.\n4. Das Einsetzungsverfahren und das Additionsverfahren sind gleichwertige Methoden.\n5. Ein 2×2-System hat immer genau eine Lösung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Ein 2×2-System kann keine, genau eine oder unendlich viele Lösungen haben.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 002 Gleichungssysteme – Determinanten (mittel) ──
  {
    id: "ma-typk-new3-002",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu Determinanten (2×2) sind richtig?\n\n1. Die Determinante einer 2×2-Matrix ist ad − bc.\n2. Ist die Determinante null, hat das zugehörige LGS keine eindeutige Lösung.\n3. Die Determinante gibt die Fläche des von den Spaltenvektoren aufgespannten Parallelogramms an (mit Vorzeichen).\n4. Die Determinante einer Einheitsmatrix ist 0.\n5. Vertauschen zweier Zeilen ändert das Vorzeichen der Determinante.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Die Determinante der Einheitsmatrix ist 1, nicht 0.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 003 Gleichungssysteme – Cramer'sche Regel (schwer) ──
  {
    id: "ma-typk-new3-003",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zur Cramer'schen Regel sind richtig?\n\n1. Die Cramer'sche Regel löst ein LGS mithilfe von Determinanten.\n2. Sie ist nur anwendbar, wenn die Koeffizientendeterminante ≠ 0 ist.\n3. Für ein 2×2-System gilt x = D_x / D, y = D_y / D.\n4. D_x erhält man, indem man die erste Spalte der Koeffizientenmatrix durch den Lösungsvektor ersetzt.\n5. Die Cramer'sche Regel ist für große Systeme numerisch sehr effizient.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Cramer'sche Regel erfordert n+1 Determinantenberechnungen und ist für große Systeme rechnerisch aufwendig (O(n!)).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 004 Gleichungssysteme – 3x3 (mittel) ──
  {
    id: "ma-typk-new3-004",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu 3×3-Gleichungssystemen sind richtig?\n\n1. Drei Gleichungen mit drei Unbekannten können geometrisch als drei Ebenen im Raum interpretiert werden.\n2. Die eindeutige Lösung entspricht dem Schnittpunkt dreier Ebenen.\n3. Das Gaußsche Eliminationsverfahren überführt das System in Stufenform.\n4. Wenn zwei Gleichungen linear abhängig sind, gibt es keine Lösung.\n5. Die Determinante der 3×3-Koeffizientenmatrix entscheidet über die eindeutige Lösbarkeit.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Lineare Abhängigkeit bedeutet nicht zwingend keine Lösung – es kann auch unendlich viele Lösungen geben.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 005 Komplexe Zahlen – Grundlagen (leicht) ──
  {
    id: "ma-typk-new3-005",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu komplexen Zahlen sind richtig?\n\n1. Die imaginäre Einheit i ist definiert als i² = −1.\n2. Jede komplexe Zahl hat die Form z = a + bi mit a, b ∈ ℝ.\n3. Der Realteil von z = 3 + 4i ist 3.\n4. Der Imaginärteil von z = 3 + 4i ist 4i.\n5. Komplexe Zahlen erweitern die reellen Zahlen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Der Imaginärteil von z = 3 + 4i ist 4 (reelle Zahl), nicht 4i.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 006 Komplexe Zahlen – Rechenoperationen (mittel) ──
  {
    id: "ma-typk-new3-006",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu Rechenoperationen mit komplexen Zahlen sind richtig?\n\n1. (a + bi) + (c + di) = (a + c) + (b + d)i.\n2. (a + bi) · (c + di) = (ac − bd) + (ad + bc)i.\n3. Die konjugiert komplexe Zahl zu z = a + bi ist z̄ = a − bi.\n4. z · z̄ = a² + b² (stets reell und ≥ 0).\n5. Division komplexer Zahlen erfolgt durch Erweitern mit der konjugierten Zahl des Nenners.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Nur 2, 3, 4 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 Aussagen sind korrekt. Addition/Multiplikation komponentenweise, z̄ = a − bi, z·z̄ = |z|² ≥ 0, Division durch Erweitern mit Konjugiertem.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 007 Komplexe Zahlen – Betrag und Darstellung (mittel) ──
  {
    id: "ma-typk-new3-007",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zur Darstellung komplexer Zahlen sind richtig?\n\n1. Der Betrag von z = a + bi ist |z| = √(a² + b²).\n2. Komplexe Zahlen können als Punkte in der Gauß'schen Zahlenebene dargestellt werden.\n3. Die Polarform einer komplexen Zahl ist z = r · (cos φ + i · sin φ).\n4. Das Argument φ gibt den Winkel zur positiven reellen Achse an.\n5. Der Betrag einer komplexen Zahl kann negativ sein.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Der Betrag ist als Wurzel aus einer Summe von Quadraten definiert und stets ≥ 0.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 008 Folgen – Arithmetische Folgen (leicht) ──
  {
    id: "ma-typk-new3-008",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zu arithmetischen Folgen sind richtig?\n\n1. Die Differenz d zwischen aufeinanderfolgenden Gliedern ist konstant.\n2. Das n-te Glied berechnet sich als aₙ = a₁ + (n − 1) · d.\n3. Die Summe der ersten n Glieder ist Sₙ = n/2 · (a₁ + aₙ).\n4. Die Folge 2, 5, 8, 11, … ist arithmetisch mit d = 3.\n5. Jede arithmetische Folge konvergiert.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Arithmetische Folgen mit d ≠ 0 divergieren (die Glieder wachsen unbeschränkt).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 009 Folgen – Geometrische Folgen (leicht) ──
  {
    id: "ma-typk-new3-009",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zu geometrischen Folgen sind richtig?\n\n1. Das Verhältnis q aufeinanderfolgender Glieder ist konstant.\n2. Das n-te Glied berechnet sich als aₙ = a₁ · q^(n−1).\n3. Die Folge 3, 6, 12, 24, … ist geometrisch mit q = 2.\n4. Für |q| < 1 konvergiert die geometrische Folge gegen 0.\n5. Die Summe einer geometrischen Reihe mit |q| > 1 konvergiert stets.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die geometrische Reihe konvergiert nur für |q| < 1; für |q| ≥ 1 divergiert sie.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 010 Folgen – Konvergenz (mittel) ──
  {
    id: "ma-typk-new3-010",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Konvergenz von Folgen sind richtig?\n\n1. Eine Folge konvergiert, wenn sie einen Grenzwert hat.\n2. Jede beschränkte und monotone Folge konvergiert.\n3. Die Folge 1/n konvergiert gegen 0.\n4. Jede konvergente Folge ist beschränkt.\n5. Die Folge (−1)ⁿ konvergiert.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 1, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: (−1)ⁿ alterniert zwischen −1 und 1 und hat keinen Grenzwert.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 011 Reihen – Geometrische Reihe (mittel) ──
  {
    id: "ma-typk-new3-011",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur geometrischen Reihe sind richtig?\n\n1. Die geometrische Reihe ist Σ q^k (k = 0, 1, 2, …).\n2. Für |q| < 1 konvergiert die Reihe gegen 1/(1 − q).\n3. Die Partialsumme der ersten n Glieder ist Sₙ = (1 − q^n) / (1 − q).\n4. Für q = 1 konvergiert die Reihe gegen unendlich.\n5. Die geometrische Reihe hat Anwendungen bei Zinseszins und Rentenrechnung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Für q = 1 ist jede Partialsumme Sₙ = n, die Reihe divergiert (aber nicht gegen unendlich im Sinne von Konvergenz); korrekt wäre: sie divergiert bestimmt.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 013 Ungleichungen – Quadratische Ungleichungen (mittel) ──
  {
    id: "ma-typk-new3-013",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu quadratischen Ungleichungen sind richtig?\n\n1. Eine quadratische Ungleichung hat die Form ax² + bx + c > 0 (oder <, ≥, ≤).\n2. Man löst sie, indem man die Nullstellen bestimmt und das Vorzeichen prüft.\n3. Die Lösungsmenge kann ein Intervall oder die Vereinigung zweier Intervalle sein.\n4. x² > 0 gilt für alle x ∈ ℝ.\n5. x² + 1 > 0 gilt für alle x ∈ ℝ.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: x² > 0 gilt nicht für x = 0 (da 0² = 0, nicht > 0).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 014 Beträge – Grundlagen (leicht) ──
  {
    id: "ma-typk-new3-014",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zur Betragsfunktion sind richtig?\n\n1. |x| gibt den Abstand von x zu 0 auf der Zahlengerade an.\n2. |x| ≥ 0 für alle x ∈ ℝ.\n3. |−5| = 5.\n4. |a · b| = |a| · |b|.\n5. |a + b| = |a| + |b| für alle a, b ∈ ℝ.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Es gilt nur die Dreiecksungleichung |a + b| ≤ |a| + |b|; Gleichheit nur wenn a und b gleiches Vorzeichen haben.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 015 Beträge – Betragsgleichungen (mittel) ──
  {
    id: "ma-typk-new3-015",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu Betragsgleichungen und -ungleichungen sind richtig?\n\n1. |x| = a hat für a > 0 die Lösungen x = a und x = −a.\n2. |x| < a (a > 0) bedeutet −a < x < a.\n3. |x| > a (a > 0) bedeutet x > a oder x < −a.\n4. |x| = −2 hat die Lösung x = −2.\n5. |x − 3| < 5 beschreibt das Intervall (−2, 8).",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: |x| = −2 hat keine Lösung, da der Betrag stets ≥ 0 ist.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 016 Matrizen – Grundlagen (leicht) ──
  {
    id: "ma-typk-new3-016",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zu Matrizen sind richtig?\n\n1. Eine Matrix ist ein rechteckiges Zahlenschema mit m Zeilen und n Spalten.\n2. Zwei Matrizen gleicher Dimension können addiert werden.\n3. Die Einheitsmatrix I hat Einsen auf der Diagonale und sonst Nullen.\n4. Matrizenmultiplikation ist kommutativ (A·B = B·A).\n5. A · I = A für jede quadratische Matrix A.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Matrizenmultiplikation ist im Allgemeinen nicht kommutativ (A·B ≠ B·A).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 017 Matrizen – Multiplikation (mittel) ──
  {
    id: "ma-typk-new3-017",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zur Matrizenmultiplikation sind richtig?\n\n1. Das Produkt A·B ist definiert, wenn die Spaltenanzahl von A gleich der Zeilenanzahl von B ist.\n2. Das Ergebnis einer (m×n)·(n×p)-Multiplikation ist eine (m×p)-Matrix.\n3. Das Falk-Schema hilft bei der systematischen Berechnung.\n4. A · B = 0 impliziert A = 0 oder B = 0.\n5. (A · B)ᵀ = Bᵀ · Aᵀ.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Bei Matrizen kann A·B = 0 sein, obwohl weder A noch B die Nullmatrix ist (Nullteiler existieren).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 018 Matrizen – Inverse (schwer) ──
  {
    id: "ma-typk-new3-018",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zur inversen Matrix sind richtig?\n\n1. Die Inverse A⁻¹ existiert nur für quadratische Matrizen mit det(A) ≠ 0.\n2. A · A⁻¹ = I.\n3. (A · B)⁻¹ = B⁻¹ · A⁻¹.\n4. Die Inverse einer 2×2-Matrix ist A⁻¹ = 1/det(A) · adj(A).\n5. Jede quadratische Matrix hat eine Inverse.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Nur quadratische Matrizen mit det(A) ≠ 0 (reguläre Matrizen) sind invertierbar.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 019 Kurvendiskussion – Nullstellen (leicht) ──
  {
    id: "ma-typk-new3-019",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu Nullstellen sind richtig?\n\n1. Nullstellen sind die x-Werte, für die f(x) = 0 gilt.\n2. Eine quadratische Funktion hat höchstens zwei Nullstellen.\n3. Die p-q-Formel findet Nullstellen von x² + px + q = 0.\n4. Wenn die Diskriminante D < 0 ist, gibt es keine reellen Nullstellen.\n5. Eine Funktion dritten Grades hat immer genau drei Nullstellen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Eine kubische Funktion hat mindestens eine, aber höchstens drei reelle Nullstellen (z. B. hat f(x) = x³ + x nur eine).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 020 Kurvendiskussion – Extrema (mittel) ──
  {
    id: "ma-typk-new3-020",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu Extremwerten sind richtig?\n\n1. Notwendige Bedingung für Extremstellen: f'(x₀) = 0.\n2. Hinreichende Bedingung: f'(x₀) = 0 und f''(x₀) ≠ 0.\n3. Wenn f''(x₀) < 0, liegt ein lokales Maximum vor.\n4. Wenn f''(x₀) > 0, liegt ein lokales Minimum vor.\n5. An einer Stelle mit f'(x₀) = 0 kann auch ein Sattelpunkt vorliegen.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Nur 2, 3, 4 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 Aussagen sind korrekt. f'(x₀) = 0 ist notwendig, f''(x₀) ≠ 0 hinreichend, f'' < 0 → Max, f'' > 0 → Min, und bei f''(x₀) = 0 kann ein Sattelpunkt vorliegen (z. B. x³).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 021 Kurvendiskussion – Wendepunkte (mittel) ──
  {
    id: "ma-typk-new3-021",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu Wendepunkten sind richtig?\n\n1. Ein Wendepunkt ist ein Punkt, an dem die Krümmung das Vorzeichen wechselt.\n2. Notwendige Bedingung: f''(x₀) = 0.\n3. Hinreichende Bedingung: f''(x₀) = 0 und f'''(x₀) ≠ 0.\n4. Am Wendepunkt hat die erste Ableitung ein Extremum.\n5. Jede Funktion hat mindestens einen Wendepunkt.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: z. B. f(x) = x² hat keinen Wendepunkt (f''(x) = 2 > 0 überall).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 022 Kurvendiskussion – Symmetrie (leicht) ──
  {
    id: "ma-typk-new3-022",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Symmetrie von Funktionen sind richtig?\n\n1. f(x) = f(−x) bedeutet Achsensymmetrie zur y-Achse.\n2. f(−x) = −f(x) bedeutet Punktsymmetrie zum Ursprung.\n3. Ganzrationale Funktionen mit nur geraden Exponenten sind achsensymmetrisch.\n4. Ganzrationale Funktionen mit nur ungeraden Exponenten sind punktsymmetrisch.\n5. Die Funktion f(x) = x³ + x² ist punktsymmetrisch.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: f(x) = x³ + x² enthält sowohl einen ungeraden (x³) als auch einen geraden Exponenten (x²) und ist weder achsen- noch punktsymmetrisch.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 023 Kurvendiskussion – Monotonie (leicht) ──
  {
    id: "ma-typk-new3-023",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Monotonie sind richtig?\n\n1. f ist monoton steigend, wenn f'(x) > 0.\n2. f ist monoton fallend, wenn f'(x) < 0.\n3. An Extremstellen wechselt die Monotonie.\n4. f(x) = eˣ ist auf ganz ℝ streng monoton steigend.\n5. Eine konstante Funktion ist monoton, aber nicht streng monoton.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Nur 2, 3, 4 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 Aussagen sind korrekt. f' > 0 → steigend, f' < 0 → fallend, Monotoniewechsel an Extrema, eˣ streng steigend, konstante Funktion ist monoton (nicht streng, da f(x₁) = f(x₂)).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 024 Kurvendiskussion – Krümmung (mittel) ──
  {
    id: "ma-typk-new3-024",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Krümmung sind richtig?\n\n1. f''(x) > 0 bedeutet Linkskrümmung (konvex nach unten).\n2. f''(x) < 0 bedeutet Rechtskrümmung (konvex nach oben).\n3. An Wendepunkten wechselt die Krümmung.\n4. Die zweite Ableitung gibt Auskunft über die Krümmungsrichtung.\n5. f(x) = x⁴ hat bei x = 0 einen Wendepunkt.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: f(x) = x⁴ hat f''(0) = 0, aber f'''(0) = 0 und die Krümmung wechselt nicht (f''(x) = 12x² ≥ 0 überall), also kein Wendepunkt.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 025 Angewandte Mathematik – Exponentielles Wachstum (leicht) ──
  {
    id: "ma-typk-new3-025",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zum exponentiellen Wachstum sind richtig?\n\n1. Die Wachstumsfunktion hat die Form N(t) = N₀ · eᵏᵗ mit k > 0.\n2. Die Verdopplungszeit ist t₂ = ln 2 / k.\n3. Die Änderungsrate ist proportional zum Bestand: N'(t) = k · N(t).\n4. Exponentielles Wachstum ist langfristig unbegrenzt.\n5. Exponentielles Wachstum ist dasselbe wie lineares Wachstum.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Exponentielles Wachstum ist grundlegend verschieden von linearem – es wächst prozentual statt um konstante Beträge.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 026 Angewandte Mathematik – Zerfall (mittel) ──
  {
    id: "ma-typk-new3-026",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zum exponentiellen Zerfall sind richtig?\n\n1. Die Zerfallsfunktion hat die Form N(t) = N₀ · e⁻ᵏᵗ mit k > 0.\n2. Die Halbwertszeit ist t₁/₂ = ln 2 / k.\n3. Nach einer Halbwertszeit ist die Hälfte der Ausgangsmenge vorhanden.\n4. Nach zwei Halbwertszeiten ist ein Viertel der Ausgangsmenge vorhanden.\n5. Bei exponentiellem Zerfall erreicht die Menge irgendwann exakt null.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Exponentialfunktion nähert sich asymptotisch null an, erreicht aber mathematisch nie exakt 0.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 027 Angewandte Mathematik – Halbwertszeit (mittel) ──
  {
    id: "ma-typk-new3-027",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Halbwertszeitberechnung sind richtig?\n\n1. t₁/₂ = ln 2 / k, wobei k die Zerfallskonstante ist.\n2. Nach 3 Halbwertszeiten ist noch 1/8 der Ausgangsmenge vorhanden.\n3. Die Halbwertszeit ist unabhängig von der Ausgangsmenge.\n4. Aus zwei Messpunkten (N₁, t₁) und (N₂, t₂) kann k berechnet werden.\n5. Die Halbwertszeit verdoppelt sich, wenn die Anfangsmenge verdoppelt wird.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Halbwertszeit ist eine Stoffkonstante und unabhängig von der Anfangsmenge.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 028 Gleichungssysteme – Lösungsverfahren (leicht) ──
  {
    id: "ma-typk-new3-028",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu Lösungsverfahren für LGS sind richtig?\n\n1. Beim Einsetzungsverfahren löst man eine Gleichung nach einer Variablen auf und setzt ein.\n2. Beim Additionsverfahren werden Gleichungen so kombiniert, dass eine Variable eliminiert wird.\n3. Das Gleichsetzungsverfahren setzt zwei nach derselben Variable aufgelöste Gleichungen gleich.\n4. Alle drei Verfahren liefern dasselbe Ergebnis.\n5. Alle drei Verfahren lassen sich auch auf größere Systeme (3×3 usw.) anwenden.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 1, 2 und 4" },
      { id: "e", text: "Nur 1, 3, 4 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 Aussagen sind korrekt. Einsetzen, Addieren und Gleichsetzen sind äquivalente Verfahren, liefern dasselbe Ergebnis und funktionieren für beliebig große Systeme.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 029 Kurvendiskussion – Asymptoten (mittel) ──
  {
    id: "ma-typk-new3-029",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu Asymptoten sind richtig?\n\n1. Eine waagerechte Asymptote beschreibt den Grenzwert von f(x) für x → ±∞.\n2. Eine senkrechte Asymptote liegt vor, wenn f(x) → ±∞ für x → x₀.\n3. f(x) = 1/x hat eine waagerechte Asymptote bei y = 0.\n4. f(x) = 1/x hat eine senkrechte Asymptote bei x = 0.\n5. Ganzrationale Funktionen haben stets senkrechte Asymptoten.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Ganzrationale Funktionen (Polynome) sind überall definiert und haben keine senkrechten Asymptoten.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 030 Folgen – Rekursive Definition (mittel) ──
  {
    id: "ma-typk-new3-030",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zu rekursiv definierten Folgen sind richtig?\n\n1. Eine rekursive Folge ist durch einen Startwert und eine Rekursionsformel definiert.\n2. Die Fibonacci-Folge ist rekursiv definiert: aₙ = aₙ₋₁ + aₙ₋₂.\n3. Aus einer Rekursionsformel kann man jedes Folgenglied berechnen.\n4. Rekursive Folgen lassen sich immer in eine explizite Formel umwandeln.\n5. Die Folge aₙ₊₁ = 2aₙ mit a₁ = 1 ergibt die Potenzen von 2.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt (a₁=1, a₂=2, a₃=4, … = 2⁰, 2¹, 2², …). 4 falsch: Nicht jede rekursive Folge lässt sich geschlossen darstellen.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 031 Ungleichungen – Bruchungleichungen (schwer) ──
  {
    id: "ma-typk-new3-031",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu Bruchungleichungen sind richtig?\n\n1. Man darf nicht beidseitig mit dem Nenner multiplizieren, ohne das Vorzeichen zu prüfen.\n2. Definitionslücken (Nullstellen des Nenners) müssen ausgeschlossen werden.\n3. Eine Vorzeichentabelle hilft bei der Bestimmung der Lösungsmenge.\n4. Die Ungleichung 1/x > 0 hat die Lösung x > 0.\n5. Die Ungleichung 1/(x−1) > 0 hat die Lösung x > 0.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: 1/(x−1) > 0 erfordert x − 1 > 0, also x > 1 (nicht x > 0).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 032 Komplexe Zahlen – Euler-Formel (schwer) ──
  {
    id: "ma-typk-new3-032",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zur Euler'schen Formel sind richtig?\n\n1. e^(iφ) = cos φ + i · sin φ.\n2. e^(iπ) = −1 (Euler'sche Identität).\n3. |e^(iφ)| = 1 für alle φ.\n4. Die Euler-Formel verbindet Exponentialfunktion und trigonometrische Funktionen.\n5. e^(i·0) = i.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: e^(i·0) = cos 0 + i·sin 0 = 1, nicht i.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 033 Matrizen – Transponierte (leicht) ──
  {
    id: "ma-typk-new3-033",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zur transponierten Matrix sind richtig?\n\n1. Die Transponierte Aᵀ entsteht durch Vertauschen von Zeilen und Spalten.\n2. Wenn A eine (m×n)-Matrix ist, dann ist Aᵀ eine (n×m)-Matrix.\n3. (Aᵀ)ᵀ = A.\n4. (A + B)ᵀ = Aᵀ + Bᵀ.\n5. Eine symmetrische Matrix erfüllt A = −Aᵀ.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Eine symmetrische Matrix erfüllt A = Aᵀ; A = −Aᵀ definiert eine schiefsymmetrische Matrix.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 034 Angewandte Mathematik – Logistisches Wachstum (schwer) ──
  {
    id: "ma-typk-new3-034",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zum logistischen Wachstum sind richtig?\n\n1. Logistisches Wachstum hat eine Kapazitätsgrenze K.\n2. Die Wachstumsrate nimmt ab, je näher der Bestand an K liegt.\n3. Die Kurve hat eine S-Form (Sigmoidfunktion).\n4. Der Wendepunkt liegt bei N = K/2.\n5. Logistisches Wachstum ist identisch mit exponentiellem Wachstum.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Logistisches Wachstum hat eine Sättigungsgrenze, exponentielles nicht.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 035 Gleichungssysteme – Homogenes System (schwer) ──
  {
    id: "ma-typk-new3-035",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu homogenen LGS (A·x = 0) sind richtig?\n\n1. Ein homogenes System hat stets die triviale Lösung x = 0.\n2. Wenn det(A) = 0, gibt es nicht-triviale Lösungen.\n3. Die Lösungsmenge bildet einen Vektorraum.\n4. Bei n Gleichungen und n Unbekannten ist die triviale Lösung die einzige, wenn det(A) ≠ 0.\n5. Ein homogenes System kann keine Lösung haben.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Ein homogenes System hat immer mindestens die triviale Lösung x = 0.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 036 Kurvendiskussion – Vollständige Analyse (schwer) ──
  {
    id: "ma-typk-new3-036",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur vollständigen Kurvendiskussion sind richtig?\n\n1. Zur Kurvendiskussion gehören: Definitionsbereich, Symmetrie, Nullstellen, Extrema, Wendepunkte, Grenzverhalten.\n2. Das Grenzverhalten für x → ±∞ wird vom Term mit dem höchsten Grad bestimmt.\n3. Extremwerte und Wendepunkte werden über die Ableitungen bestimmt.\n4. Der y-Achsenabschnitt ist f(0).\n5. Die Monotonie wird durch die dritte Ableitung bestimmt.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Monotonie wird durch die erste Ableitung bestimmt (f' > 0: steigend, f' < 0: fallend), nicht durch die dritte.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 037 Folgen – Grenzwertregeln (mittel) ──
  {
    id: "ma-typk-new3-037",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zu Grenzwertregeln sind richtig?\n\n1. lim(aₙ + bₙ) = lim aₙ + lim bₙ, falls beide Grenzwerte existieren.\n2. lim(aₙ · bₙ) = lim aₙ · lim bₙ, falls beide Grenzwerte existieren.\n3. lim(c · aₙ) = c · lim aₙ.\n4. lim(aₙ/bₙ) = lim aₙ / lim bₙ, falls lim bₙ ≠ 0.\n5. lim(aₙ + bₙ) existiert immer, auch wenn lim aₙ und lim bₙ nicht existieren.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Es gibt Fälle, in denen die Summe konvergiert (z. B. aₙ = (−1)ⁿ, bₙ = −(−1)ⁿ → Summe = 0), aber im Allgemeinen gilt das nicht.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 038 Ungleichungen – Dreiecksungleichung (mittel) ──
  {
    id: "ma-typk-new3-038",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zur Dreiecksungleichung sind richtig?\n\n1. |a + b| ≤ |a| + |b| für alle a, b ∈ ℝ.\n2. ||a| − |b|| ≤ |a − b| für alle a, b ∈ ℝ (umgekehrte Dreiecksungleichung).\n3. Die Dreiecksungleichung gilt auch für Vektoren.\n4. In einem Dreieck ist jede Seite kürzer als die Summe der beiden anderen.\n5. |a + b| = |a| + |b| gilt immer.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: |a + b| = |a| + |b| gilt nur, wenn a und b gleiches Vorzeichen (oder mindestens eines null) haben.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 039 Matrizen – Determinante 3x3 (schwer) ──
  {
    id: "ma-typk-new3-039",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zur Determinante einer 3×3-Matrix sind richtig?\n\n1. Die Regel von Sarrus ermöglicht die Berechnung der 3×3-Determinante.\n2. Die Determinante ändert sich nicht, wenn man ein Vielfaches einer Zeile zu einer anderen addiert.\n3. Die Determinante einer Dreiecksmatrix ist das Produkt der Diagonalelemente.\n4. det(A·B) = det(A) · det(B).\n5. Die Regel von Sarrus funktioniert auch für 4×4-Matrizen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Regel von Sarrus funktioniert nur für 2×2- und 3×3-Matrizen, nicht für größere.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 040 Angewandte Mathematik – Zinseszins (leicht) ──
  {
    id: "ma-typk-new3-040",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Zinseszinsrechnung sind richtig?\n\n1. Das Endkapital berechnet sich als K_n = K₀ · (1 + p/100)ⁿ.\n2. Bei Zinseszins werden die Zinsen mitverzinst.\n3. Zinseszins führt zu exponentiellem Wachstum.\n4. Bei 5 % Zinsen verdoppelt sich das Kapital nach etwa 14 Jahren (72er-Regel).\n5. Einfache Zinsen und Zinseszinsen ergeben stets den gleichen Betrag.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Zinseszinsen ergeben mehr als einfache Zinsen (außer bei genau einer Periode, wo sie gleich sind).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 041 Kurvendiskussion – Polstellen (mittel) ──
  {
    id: "ma-typk-new3-041",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu Polstellen sind richtig?\n\n1. An einer Polstelle hat der Nenner einer gebrochen rationalen Funktion eine Nullstelle.\n2. Die Funktion ist an einer Polstelle nicht definiert.\n3. An einer Polstelle geht f(x) gegen ±∞.\n4. Polstellen sind senkrechte Asymptoten im Graph.\n5. Jede Nullstelle des Nenners ist eine Polstelle.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Wenn Zähler und Nenner dieselbe Nullstelle haben, liegt eine hebbare Definitionslücke vor, keine Polstelle.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 042 Gleichungssysteme – Graphische Lösung (leicht) ──
  {
    id: "ma-typk-new3-042",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zur graphischen Lösung von LGS (2×2) sind richtig?\n\n1. Die Lösung eines 2×2-LGS entspricht dem Schnittpunkt zweier Geraden.\n2. Parallele Geraden bedeuten: keine Lösung.\n3. Identische Geraden bedeuten: unendlich viele Lösungen.\n4. Sich schneidende Geraden haben genau einen Schnittpunkt.\n5. Geraden können sich in genau zwei Punkten schneiden.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Zwei Geraden können sich in höchstens einem Punkt schneiden (oder sie sind identisch/parallel).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 043 Komplexe Zahlen – Fundamentalsatz (schwer) ──
  {
    id: "ma-typk-new3-043",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zum Fundamentalsatz der Algebra sind richtig?\n\n1. Jedes Polynom n-ten Grades hat in ℂ genau n Nullstellen (mit Vielfachheit).\n2. Komplexe Nullstellen reeller Polynome treten stets als konjugierte Paare auf.\n3. x² + 1 = 0 hat die Lösungen x = i und x = −i.\n4. Jedes reelle Polynom ungeraden Grades hat mindestens eine reelle Nullstelle.\n5. x² + 1 = 0 hat keine Lösung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: In ℂ hat x² + 1 = 0 die Lösungen ±i; nur in ℝ gibt es keine Lösung.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 044 Reihen – Harmonische Reihe (schwer) ──
  {
    id: "ma-typk-new3-044",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur harmonischen Reihe sind richtig?\n\n1. Die harmonische Reihe ist Σ 1/k (k = 1, 2, 3, …).\n2. Die harmonische Reihe divergiert.\n3. Die Partialsummen wachsen unbeschränkt, aber sehr langsam.\n4. Obwohl die Glieder 1/k gegen 0 konvergieren, konvergiert die Reihe nicht.\n5. Die harmonische Reihe konvergiert, weil die Glieder kleiner werden.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Dass die Glieder gegen 0 konvergieren, ist notwendig, aber nicht hinreichend für Konvergenz der Reihe.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 045 Ungleichungen – AM-GM (schwer) ──
  {
    id: "ma-typk-new3-045",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zur Ungleichung vom arithmetischen und geometrischen Mittel sind richtig?\n\n1. Für a, b ≥ 0 gilt: (a + b)/2 ≥ √(a · b).\n2. Gleichheit gilt genau dann, wenn a = b.\n3. Das arithmetische Mittel zweier nicht-negativer Zahlen ist stets ≥ dem geometrischen Mittel.\n4. Die AM-GM-Ungleichung lässt sich auf n Zahlen verallgemeinern.\n5. Für a = 4, b = 9 ist das geometrische Mittel größer als das arithmetische.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Für a = 4, b = 9 ist AM = 6,5 und GM = 6, also AM > GM.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 046 Matrizen – Rang (schwer) ──
  {
    id: "ma-typk-new3-046",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zum Rang einer Matrix sind richtig?\n\n1. Der Rang ist die Anzahl der linear unabhängigen Zeilen (oder Spalten).\n2. Der Rang einer (m×n)-Matrix ist höchstens min(m, n).\n3. Eine quadratische Matrix ist genau dann invertierbar, wenn ihr Rang maximal ist.\n4. Der Rang kann durch Gauß-Elimination bestimmt werden.\n5. Der Rang einer Nullmatrix ist 1.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Der Rang der Nullmatrix ist 0, da keine Zeile linear unabhängig ist.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 047 Angewandte Mathematik – Newtonsche Abkühlung (mittel) ──
  {
    id: "ma-typk-new3-047",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zum Newton'schen Abkühlungsgesetz sind richtig?\n\n1. Die Temperaturänderung ist proportional zur Differenz zur Umgebungstemperatur.\n2. T(t) = T_U + (T₀ − T_U) · e⁻ᵏᵗ.\n3. Die Temperatur nähert sich asymptotisch der Umgebungstemperatur an.\n4. k > 0 beschreibt die Abkühlungsrate.\n5. Das Objekt erreicht nach endlicher Zeit exakt die Umgebungstemperatur.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Mathematisch nähert sich die Temperatur nur asymptotisch an, erreicht die Umgebungstemperatur aber nie exakt.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 048 Kurvendiskussion – Tangente (leicht) ──
  {
    id: "ma-typk-new3-048",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Tangente an einen Funktionsgraphen sind richtig?\n\n1. Die Tangente berührt den Graphen in genau einem Punkt (lokal).\n2. Die Steigung der Tangente im Punkt x₀ ist f'(x₀).\n3. Die Tangentengleichung lautet y = f'(x₀) · (x − x₀) + f(x₀).\n4. Die Tangente steht senkrecht auf der Normalen.\n5. Die Steigung der Tangente hängt vom gewählten Punkt x₀ ab.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Nur 1, 3, 4 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 Aussagen sind korrekt. Tangente berührt lokal, Steigung = f'(x₀), Gleichung y = f(x₀) + f'(x₀)(x−x₀), Tangente ⊥ Normale, und die Steigung variiert mit x₀.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 049 Folgen – Monotonie von Folgen (leicht) ──
  {
    id: "ma-typk-new3-049",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Monotonie von Folgen sind richtig?\n\n1. Eine Folge ist monoton steigend, wenn aₙ₊₁ ≥ aₙ für alle n.\n2. Eine Folge ist streng monoton fallend, wenn aₙ₊₁ < aₙ für alle n.\n3. Die Folge 1/n ist streng monoton fallend.\n4. Jede monotone und beschränkte Folge konvergiert.\n5. Die Folge (−1)ⁿ ist monoton.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: (−1)ⁿ alterniert zwischen −1 und 1 und ist weder monoton steigend noch fallend.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 050 Ungleichungen – Wurzelungleichungen (schwer) ──
  {
    id: "ma-typk-new3-050",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu Wurzelungleichungen sind richtig?\n\n1. Der Radikand muss ≥ 0 sein (Definitionsbereich beachten).\n2. Beim Quadrieren einer Ungleichung muss man prüfen, ob beide Seiten nicht-negativ sind.\n3. √x < 3 hat die Lösung 0 ≤ x < 9.\n4. √(x + 1) ≥ 0 gilt für alle x ≥ −1.\n5. √x² = x für alle x ∈ ℝ.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: √(x²) = |x|, nicht x. Für x = −3 ist √9 = 3 ≠ −3.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 051 Gleichungssysteme – Überbestimmtes System (mittel) ──
  {
    id: "ma-typk-new3-051",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu überbestimmten Systemen sind richtig?\n\n1. Ein überbestimmtes System hat mehr Gleichungen als Unbekannte.\n2. Überbestimmte Systeme haben im Allgemeinen keine exakte Lösung.\n3. Methode der kleinsten Quadrate kann eine Näherungslösung liefern.\n4. Ein überbestimmtes System kann dennoch eine exakte Lösung haben.\n5. Ein unterbestimmtes System hat mehr Gleichungen als Unbekannte.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Ein unterbestimmtes System hat weniger Gleichungen als Unbekannte (nicht mehr).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 052 Matrizen – Eigenwerte (schwer) ──
  {
    id: "ma-typk-new3-052",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zu Eigenwerten und Eigenvektoren sind richtig?\n\n1. Ein Eigenvektor v erfüllt A · v = λ · v.\n2. λ ist der zugehörige Eigenwert.\n3. Die Eigenwerte findet man über det(A − λI) = 0.\n4. Die Summe der Eigenwerte einer Matrix entspricht der Spur (Summe der Diagonalelemente).\n5. Jeder Vektor ist ein Eigenvektor jeder Matrix.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Nur spezielle Vektoren erfüllen die Eigengleichung; der Nullvektor ist per Definition kein Eigenvektor.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 053 Angewandte Mathematik – Wachstumsmodelle (mittel) ──
  {
    id: "ma-typk-new3-053",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu Wachstumsmodellen sind richtig?\n\n1. Lineares Wachstum: N(t) = N₀ + k · t.\n2. Exponentielles Wachstum: N(t) = N₀ · eᵏᵗ.\n3. Begrenztes Wachstum: N(t) = K − (K − N₀) · e⁻ᵏᵗ.\n4. Logistisches Wachstum beginnt exponentiell und nähert sich einer Schranke.\n5. Bei linearem Wachstum verdoppelt sich der Bestand pro Zeiteinheit.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Bei linearem Wachstum kommt pro Zeiteinheit ein konstanter Betrag hinzu; eine Verdopplung pro Zeiteinheit ist exponentielles Wachstum.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 055 Folgen – Teilfolgen (schwer) ──
  {
    id: "ma-typk-new3-055",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zu Teilfolgen sind richtig?\n\n1. Eine Teilfolge entsteht durch Auswahl unendlich vieler Glieder bei steigendem Index.\n2. Jede beschränkte Folge besitzt eine konvergente Teilfolge (Bolzano-Weierstraß).\n3. Wenn alle Teilfolgen denselben Grenzwert haben, konvergiert die Gesamtfolge.\n4. Die Folge (−1)ⁿ hat die konvergenten Teilfolgen für gerade und ungerade n.\n5. Eine divergente Folge hat keine konvergenten Teilfolgen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Eine beschränkte divergente Folge wie (−1)ⁿ hat sehr wohl konvergente Teilfolgen.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 056 Angewandte Mathematik – pH-Wert Berechnung (mittel) ──
  {
    id: "ma-typk-new3-056",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zur pH-Wert-Berechnung sind richtig?\n\n1. pH = −log₁₀([H⁺]).\n2. Ein pH von 7 entspricht einer neutralen Lösung.\n3. Eine Verzehnfachung der H⁺-Konzentration senkt den pH um 1.\n4. pH + pOH = 14 (bei 25 °C).\n5. Ein pH von 3 bedeutet eine höhere H⁺-Konzentration als pH 5.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Nur 2, 3, 4 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 Aussagen sind korrekt. pH = −lg[H⁺]; pH 7 = neutral; ×10 H⁺ → pH −1; pH + pOH = 14; pH 3 → [H⁺] = 10⁻³ > 10⁻⁵ = pH 5.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 057 Matrizen – Spur (leicht) ──
  {
    id: "ma-typk-new3-057",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zur Spur einer Matrix sind richtig?\n\n1. Die Spur ist die Summe der Diagonalelemente einer quadratischen Matrix.\n2. Spur(A + B) = Spur(A) + Spur(B).\n3. Spur(c · A) = c · Spur(A).\n4. Die Spur der 3×3-Einheitsmatrix ist 3.\n5. Die Spur ist nur für symmetrische Matrizen definiert.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Spur ist für jede quadratische Matrix definiert, nicht nur für symmetrische.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 058 Kurvendiskussion – Verhalten im Unendlichen (leicht) ──
  {
    id: "ma-typk-new3-058",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zum Grenzverhalten ganzrationaler Funktionen sind richtig?\n\n1. Das Grenzverhalten wird durch den Term mit dem höchsten Exponenten bestimmt.\n2. Bei geradem Grad und positivem Leitkoeffizienten gilt: f(x) → +∞ für x → ±∞.\n3. Bei ungeradem Grad gilt: f(x) → +∞ und f(x) → −∞ (oder umgekehrt).\n4. Der Leitkoeffizient bestimmt die Richtung.\n5. Eine Parabel (Grad 2) geht auf beiden Seiten gegen −∞.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Nur bei negativem Leitkoeffizienten geht die Parabel auf beiden Seiten gegen −∞; bei positivem gegen +∞.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 059 Gleichungssysteme – Gauß-Elimination (mittel) ──
  {
    id: "ma-typk-new3-059",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zum Gauß'schen Eliminationsverfahren sind richtig?\n\n1. Man überführt die erweiterte Koeffizientenmatrix in Zeilenstufenform.\n2. Erlaubte Operationen sind: Zeilen vertauschen, Zeile mit Skalar multiplizieren (≠ 0), Vielfaches einer Zeile zu einer anderen addieren.\n3. Rückwärtseinsetzen liefert die Lösung nach der Stufenform.\n4. Das Verfahren funktioniert für beliebig große Systeme.\n5. Eine Nullzeile in der Stufenform bedeutet immer, dass keine Lösung existiert.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Eine Nullzeile bedeutet nur dann keine Lösung, wenn der zugehörige Wert in der erweiterten Spalte ≠ 0 ist. Sonst gibt es unendlich viele Lösungen.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 060 Komplexe Zahlen – Potenzieren (schwer) ──
  {
    id: "ma-typk-new3-060",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zum Potenzieren komplexer Zahlen sind richtig?\n\n1. In Polarform gilt: zⁿ = rⁿ · (cos(nφ) + i · sin(nφ)) (Formel von de Moivre).\n2. i² = −1.\n3. i⁴ = 1.\n4. Die n-ten Einheitswurzeln liegen gleichmäßig auf dem Einheitskreis.\n5. i³ = 1.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: i³ = i² · i = −1 · i = −i, nicht 1.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 061 Angewandte Mathematik – Dosierungsberechnung (mittel) ──
  {
    id: "ma-typk-new3-061",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zu Dosierungsberechnungen (medizinischer Kontext) sind richtig?\n\n1. Dosis = Konzentration × Volumen.\n2. Umrechnung mg → g: Division durch 1000.\n3. 0,5 % Lösung = 5 mg pro ml.\n4. Verdünnung 1:10 bedeutet 1 Teil Substanz + 9 Teile Lösungsmittel.\n5. 1 ml Wasser wiegt exakt 10 g.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: 1 ml Wasser wiegt ca. 1 g, nicht 10 g.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 062 Kurvendiskussion – Kettenregel (mittel) ──
  {
    id: "ma-typk-new3-062",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Kettenregel sind richtig?\n\n1. [f(g(x))]' = f'(g(x)) · g'(x).\n2. Die Kettenregel wird bei verketteten Funktionen angewendet.\n3. Die Ableitung von sin(3x) ist 3 · cos(3x).\n4. Die Ableitung von e^(2x) ist 2 · e^(2x).\n5. Die Ableitung von ln(x²) ist 1/x².",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: [ln(x²)]' = (1/x²) · 2x = 2/x (Kettenregel!), nicht 1/x².",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 063 Kurvendiskussion – Produktregel (mittel) ──
  {
    id: "ma-typk-new3-063",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Produktregel sind richtig?\n\n1. (f · g)' = f' · g + f · g'.\n2. Die Ableitung von x · eˣ ist eˣ + x · eˣ = eˣ(1 + x).\n3. Die Produktregel wird bei Produkten zweier Funktionen angewendet.\n4. (f · g)' = f' · g' (Ableitung der Faktoren multiplizieren).\n5. Die Ableitung von x² · sin(x) ist 2x · sin(x) + x² · cos(x).",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: (f·g)' ≠ f'·g'; man muss die Produktregel anwenden.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 064 Folgen – Euler'sche Zahl (mittel) ──
  {
    id: "ma-typk-new3-064",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Euler'schen Zahl e sind richtig?\n\n1. e = lim(n→∞) (1 + 1/n)ⁿ.\n2. e ≈ 2,718.\n3. e ist eine irrationale Zahl.\n4. Die Funktion eˣ hat die besondere Eigenschaft (eˣ)' = eˣ.\n5. e ist eine rationale Zahl (darstellbar als Bruch).",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: e ist irrational (und sogar transzendent), also nicht als Bruch darstellbar.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 065 Ungleichungen – Doppelungleichungen (leicht) ──
  {
    id: "ma-typk-new3-065",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu Doppelungleichungen sind richtig?\n\n1. Eine Doppelungleichung hat die Form a < x < b.\n2. Sie beschreibt ein offenes Intervall (a, b).\n3. Man darf auf alle drei Seiten dieselbe Zahl addieren.\n4. Man darf alle drei Seiten mit einer positiven Zahl multiplizieren.\n5. Beim Multiplizieren mit einer negativen Zahl bleiben die Ungleichheitszeichen gleich.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Beim Multiplizieren mit einer negativen Zahl kehren sich die Ungleichheitszeichen um.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 066 Matrizen – Lineare Abbildungen (schwer) ──
  {
    id: "ma-typk-new3-066",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zu linearen Abbildungen und Matrizen sind richtig?\n\n1. Jede lineare Abbildung kann als Matrizenmultiplikation dargestellt werden.\n2. Drehungen in der Ebene sind lineare Abbildungen.\n3. Spiegelungen an einer Geraden durch den Ursprung sind lineare Abbildungen.\n4. Die Zusammensetzung zweier linearer Abbildungen entspricht dem Matrizenprodukt.\n5. Translationen (Verschiebungen) sind lineare Abbildungen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Translationen sind affine Abbildungen, aber nicht linear, da f(0) ≠ 0.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 067 Angewandte Mathematik – Proportionalität (leicht) ──
  {
    id: "ma-typk-new3-067",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zur Proportionalität sind richtig?\n\n1. Direkte Proportionalität: y = k · x.\n2. Indirekte Proportionalität: y = k / x.\n3. Bei direkter Proportionalität geht der Graph durch den Ursprung.\n4. Bei indirekter Proportionalität ist das Produkt x · y konstant.\n5. Direkte Proportionalität: Verdopplung von x halbiert y.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Bei direkter Proportionalität verdoppelt sich y, wenn x verdoppelt wird. Die Halbierung gilt für indirekte Proportionalität.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 068 Kurvendiskussion – Quotientenregel (mittel) ──
  {
    id: "ma-typk-new3-068",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Quotientenregel sind richtig?\n\n1. (f/g)' = (f' · g − f · g') / g².\n2. Die Quotientenregel setzt voraus, dass g(x) ≠ 0.\n3. Die Ableitung von 1/x kann mit der Quotientenregel berechnet werden.\n4. Die Ableitung von tan(x) = sin(x)/cos(x) wird mit der Quotientenregel berechnet.\n5. (f/g)' = f'/g'.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Quotientenregel ist (f'g − fg')/g², nicht f'/g'.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 069 Reihen – Teleskopsumme (schwer) ──
  {
    id: "ma-typk-new3-069",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Teleskopsumme sind richtig?\n\n1. Bei einer Teleskopsumme heben sich die meisten Summanden gegenseitig auf.\n2. Σ (aₖ − aₖ₊₁) von k=1 bis n = a₁ − aₙ₊₁.\n3. Die Partialsumme vereinfacht sich durch Kürzen aufeinanderfolgender Terme.\n4. Teleskopsummen helfen bei der Berechnung von Σ 1/(k(k+1)).\n5. Teleskopsummen konvergieren immer.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Ob die Teleskopsumme konvergiert, hängt vom Grenzwert von aₙ₊₁ ab; wenn aₙ nicht konvergiert, kann die Reihe divergieren.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 071 Gleichungssysteme – Rang und Lösbarkeit (schwer) ──
  {
    id: "ma-typk-new3-071",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zum Zusammenhang zwischen Rang und Lösbarkeit eines LGS sind richtig?\n\n1. Ein LGS A·x = b ist lösbar, wenn Rang(A) = Rang(A|b) (Kronecker-Capelli).\n2. Die eindeutige Lösung existiert, wenn Rang(A) = Anzahl der Unbekannten.\n3. Wenn Rang(A) < Anzahl der Unbekannten und das System lösbar ist, gibt es unendlich viele Lösungen.\n4. Die Dimension des Lösungsraums bei einem homogenen System ist n − Rang(A).\n5. Rang(A) kann größer sein als die Anzahl der Unbekannten.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Der Rang ist höchstens min(m, n), also nie größer als die Anzahl der Unbekannten (n) oder Gleichungen (m).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 072 Angewandte Mathematik – Prozentrechnung (leicht) ──
  {
    id: "ma-typk-new3-072",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zur Prozentrechnung sind richtig?\n\n1. Prozentwert = Grundwert × Prozentsatz / 100.\n2. Eine Erhöhung um 20 % und anschließende Senkung um 20 % ergibt den Ausgangswert.\n3. 50 % von 200 ist 100.\n4. Der Grundwert berechnet sich als G = Prozentwert / (Prozentsatz/100).\n5. 1 ‰ (Promille) = 0,1 %.",
    options: [
      { id: "a", text: "Nur 1, 3, 4 und 5" },
      { id: "b", text: "Nur 1, 3 und 4" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 1, 3, 4 und 2" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 3, 4, 5 korrekt. 2 falsch: +20 % von 100 = 120; −20 % von 120 = 96 ≠ 100. Hintereinander angewandte Prozentänderungen gleichen sich nicht aus.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 073 Kurvendiskussion – L'Hôpital (schwer) ──
  {
    id: "ma-typk-new3-073",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Regel von L'Hôpital sind richtig?\n\n1. L'Hôpital wird bei unbestimmten Ausdrücken 0/0 oder ∞/∞ angewendet.\n2. lim f(x)/g(x) = lim f'(x)/g'(x), falls die Voraussetzungen erfüllt sind.\n3. Die Regel kann mehrfach hintereinander angewendet werden.\n4. Die Regel setzt voraus, dass der Grenzwert der Ableitungen existiert.\n5. L'Hôpital kann bei jedem Grenzwert angewendet werden.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: L'Hôpital darf nur bei unbestimmten Formen (0/0, ∞/∞) angewendet werden, nicht bei jedem Grenzwert.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 074 Angewandte Mathematik – Mischungsrechnung (mittel) ──
  {
    id: "ma-typk-new3-074",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zur Mischungsrechnung sind richtig?\n\n1. Die Mischungsregel lautet: m₁ · c₁ + m₂ · c₂ = (m₁ + m₂) · c_mix.\n2. Das Mischungskreuz ist ein Hilfsmittel zur schnellen Berechnung.\n3. Mischt man 100 ml einer 10 %-Lösung mit 100 ml einer 20 %-Lösung, erhält man eine 15 %-Lösung.\n4. Die Konzentration der Mischung liegt immer zwischen den Ausgangskonzentrationen.\n5. Mischt man zwei gleich konzentrierte Lösungen, ändert sich die Konzentration.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Mischt man zwei gleich konzentrierte Lösungen, bleibt die Konzentration gleich.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 075 Reihen – Konvergenztests (schwer) ──
  {
    id: "ma-typk-new3-075",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zu Konvergenztests für Reihen sind richtig?\n\n1. Quotientenkriterium: Wenn |aₙ₊₁/aₙ| < 1 für alle großen n, konvergiert die Reihe.\n2. Wurzelkriterium: Wenn lim ⁿ√|aₙ| < 1, konvergiert die Reihe.\n3. Vergleichskriterium: Ist 0 ≤ aₙ ≤ bₙ und Σbₙ konvergent, so konvergiert auch Σaₙ.\n4. Notwendige Bedingung: Wenn Σaₙ konvergiert, dann gilt lim aₙ = 0.\n5. Wenn lim aₙ = 0, konvergiert die Reihe Σaₙ.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: lim aₙ = 0 ist notwendig, aber nicht hinreichend (Gegenbeispiel: harmonische Reihe).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
];
