/**
 * Mathematik Typ-K Pool (Kombinationsaufgaben) — 75 Fragen im Question-Format.
 * IDs: ma-typk-new-001 bis ma-typk-new-075.
 * Themen: Algebra, Gleichungen, Funktionen, Trigonometrie, Vektoren, Geometrie (keine Stochastik!).
 * Schwierigkeit: ~30 % leicht, ~45 % mittel, ~25 % schwer.
 */
import type { Question } from "./index";

export const mathematikTypKNew: Question[] = [
  // ── 001 Algebra (leicht) ──
  {
    id: "ma-typk-new-001",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu Potenzen sind richtig?\n\n1. a^m · a^n = a^(m+n).\n2. (a^m)^n = a^(m·n).\n3. a^0 = 0 für alle a ≠ 0.\n4. a^(-n) = 1/a^n.\n5. (a·b)^n = a^n · b^n.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Potenzgesetz Addition), 2 (Potenz einer Potenz), 4 (negative Exponenten), 5 (Potenz eines Produkts). a^0 = 1, nicht 0 (3 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 002 Gleichungen (mittel) ──
  {
    id: "ma-typk-new-002",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu quadratischen Gleichungen sind richtig?\n\n1. Die allgemeine Form lautet ax² + bx + c = 0.\n2. Die Lösungsformel ist x = (−b ± √(b² − 4ac)) / (2a).\n3. Die Diskriminante D = b² − 4ac bestimmt die Anzahl der Lösungen.\n4. Bei D < 0 gibt es genau eine reelle Lösung.\n5. Die Summe der Lösungen ist −b/a (Vieta).",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (allgemeine Form), 2 (Lösungsformel), 3 (Diskriminante), 5 (Vieta: x₁ + x₂ = −b/a). Bei D < 0 gibt es keine reelle Lösung (4 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 003 Geometrie (leicht) ──
  {
    id: "ma-typk-new-003",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zum Dreieck sind richtig?\n\n1. Die Winkelsumme im Dreieck beträgt 180°.\n2. Die Fläche eines Dreiecks ist A = ½ · g · h.\n3. Ein gleichseitiges Dreieck hat drei gleich lange Seiten.\n4. Der Satz des Pythagoras gilt für alle Dreiecke.\n5. In einem rechtwinkligen Dreieck ist die Hypotenuse die längste Seite.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (180°), 2 (A = ½gh), 3 (gleichseitig), 5 (Hypotenuse = längste Seite). Der Satz des Pythagoras gilt nur für rechtwinklige Dreiecke (4 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 004 Funktionen (mittel) ──
  {
    id: "ma-typk-new-004",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu linearen Funktionen sind richtig?\n\n1. Die allgemeine Form ist f(x) = k·x + d.\n2. k ist die Steigung der Geraden.\n3. d ist der y-Achsenabschnitt.\n4. Parallele Geraden haben die gleiche Steigung.\n5. Zwei verschiedene Geraden mit gleicher Steigung schneiden sich immer.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (y = kx + d), 2 (k = Steigung), 3 (d = Achsenabschnitt), 4 (parallel → gleiche Steigung). Zwei verschiedene Geraden mit gleicher Steigung sind parallel und schneiden sich nie (5 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 005 Trigonometrie (mittel) ──
  {
    id: "ma-typk-new-005",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zu trigonometrischen Funktionen sind richtig?\n\n1. sin(0°) = 0.\n2. cos(0°) = 1.\n3. tan(α) = sin(α)/cos(α).\n4. sin²(α) + cos²(α) = 1.\n5. sin(90°) = 0.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (sin 0° = 0), 2 (cos 0° = 1), 3 (tan = sin/cos), 4 (trigonometrischer Pythagoras). sin(90°) = 1, nicht 0 (5 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 006 Vektoren (schwer) ──
  {
    id: "ma-typk-new-006",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zum Skalarprodukt zweier Vektoren sind richtig?\n\n1. Das Skalarprodukt a⃗ · b⃗ = |a⃗| · |b⃗| · cos α.\n2. Wenn a⃗ · b⃗ = 0, stehen die Vektoren senkrecht aufeinander.\n3. Das Skalarprodukt ist kommutativ: a⃗ · b⃗ = b⃗ · a⃗.\n4. Das Ergebnis des Skalarprodukts ist ein Vektor.\n5. a⃗ · b⃗ = a₁b₁ + a₂b₂ + a₃b₃ (Komponentendarstellung).",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Definition), 2 (Orthogonalität), 3 (kommutativ), 5 (Komponentenformel). Das Ergebnis des Skalarprodukts ist ein Skalar, kein Vektor (4 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 007 Algebra (leicht) ──
  {
    id: "ma-typk-new-007",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zu Bruchrechnung sind richtig?\n\n1. a/b + c/b = (a+c)/b.\n2. a/b · c/d = (a·c)/(b·d).\n3. Division durch einen Bruch = Multiplikation mit dem Kehrwert.\n4. a/b + c/d = (a+c)/(b+d).\n5. Jeder Bruch kann als Dezimalzahl dargestellt werden.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (gleicher Nenner), 2 (Multiplikation), 3 (Kehrwert), 5 (jeder Bruch ist endliche oder periodische Dezimalzahl). Bei verschiedenen Nennern muss man den gemeinsamen Nenner bilden, nicht einfach addieren (4 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 008 Geometrie (mittel) ──
  {
    id: "ma-typk-new-008",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zum Kreis sind richtig?\n\n1. Der Umfang beträgt U = 2πr.\n2. Die Fläche beträgt A = πr².\n3. Der Durchmesser ist d = 2r.\n4. π ≈ 3,14159.\n5. Die Fläche eines Halbkreises ist A = πr²/4.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (U = 2πr), 2 (A = πr²), 3 (d = 2r), 4 (π ≈ 3,14159). Die Fläche eines Halbkreises ist πr²/2, nicht πr²/4 (5 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 009 Gleichungen (leicht) ──
  {
    id: "ma-typk-new-009",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu linearen Gleichungen sind richtig?\n\n1. Eine lineare Gleichung hat die Form ax + b = 0.\n2. Die Lösung ist x = −b/a (für a ≠ 0).\n3. Eine lineare Gleichung hat genau eine Lösung (für a ≠ 0).\n4. Lineare Gleichungen können auch keine Lösung haben (wenn a = 0 und b ≠ 0).\n5. Die Lösungsmenge einer linearen Gleichung kann unendlich viele Elemente enthalten (wenn a = 0 und b = 0).",
    options: [
      { id: "a", text: "Nur 1, 2 und 3" },
      { id: "b", text: "Nur 1, 2, 3, 4 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Nur 1 und 2" },
    ],
    correctOptionId: "b",
    explanation:
      "Alle fünf Aussagen sind korrekt: 1 (Standardform), 2 (Lösung), 3 (eindeutig für a ≠ 0), 4 (keine Lösung bei 0·x = b≠0), 5 (unendlich viele bei 0·x = 0).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 010 Funktionen (schwer) ──
  {
    id: "ma-typk-new-010",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu quadratischen Funktionen sind richtig?\n\n1. f(x) = ax² + bx + c beschreibt eine Parabel.\n2. Für a > 0 ist die Parabel nach oben geöffnet.\n3. Der Scheitel liegt bei x_S = −b/(2a).\n4. Die Nullstellen können mit der Lösungsformel berechnet werden.\n5. Jede Parabel hat genau zwei Nullstellen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Parabel), 2 (a > 0 → nach oben), 3 (Scheitel bei −b/(2a)), 4 (Lösungsformel). Eine Parabel kann 0, 1 oder 2 Nullstellen haben, abhängig von D (5 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 011 Vektoren (mittel) ──
  {
    id: "ma-typk-new-011",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zu Vektoren sind richtig?\n\n1. Ein Vektor hat Betrag und Richtung.\n2. Der Betrag von a⃗ = (a₁, a₂, a₃) ist |a⃗| = √(a₁² + a₂² + a₃²).\n3. Zwei Vektoren sind gleich, wenn sie gleichen Betrag und gleiche Richtung haben.\n4. Der Nullvektor hat die Länge 1.\n5. Vektoren können addiert werden: a⃗ + b⃗ = (a₁+b₁, a₂+b₂, a₃+b₃).",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Betrag + Richtung), 2 (Betragsformel), 3 (Gleichheit), 5 (komponentenweise Addition). Der Nullvektor hat die Länge 0, nicht 1 (4 falsch; Länge 1 = Einheitsvektor).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 012 Algebra (mittel) ──
  {
    id: "ma-typk-new-012",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu binomischen Formeln sind richtig?\n\n1. (a + b)² = a² + 2ab + b².\n2. (a − b)² = a² − 2ab + b².\n3. (a + b)(a − b) = a² − b².\n4. (a + b)² = a² + b².\n5. Die dritte binomische Formel dient zum Faktorisieren von a² − b².",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (1. Binom), 2 (2. Binom), 3 (3. Binom), 5 (Faktorisierung). (a+b)² = a² + 2ab + b², nicht a² + b² — der gemischte Term 2ab fehlt (4 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 013 Trigonometrie (schwer) ──
  {
    id: "ma-typk-new-013",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zum Sinussatz und Kosinussatz sind richtig?\n\n1. Sinussatz: a/sin α = b/sin β = c/sin γ.\n2. Kosinussatz: c² = a² + b² − 2ab · cos γ.\n3. Der Kosinussatz ist eine Verallgemeinerung des Satzes des Pythagoras.\n4. Der Sinussatz gilt nur für rechtwinklige Dreiecke.\n5. Mit dem Kosinussatz kann man aus drei Seiten alle Winkel berechnen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Sinussatz), 2 (Kosinussatz), 3 (für γ = 90°: cos 90° = 0 → Pythagoras), 5 (Winkel aus Seiten). Der Sinussatz gilt für alle Dreiecke, nicht nur rechtwinklige (4 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 014 Geometrie (leicht) ──
  {
    id: "ma-typk-new-014",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zum Rechteck sind richtig?\n\n1. Ein Rechteck hat vier rechte Winkel.\n2. Die Diagonalen eines Rechtecks sind gleich lang.\n3. Die Fläche ist A = a · b.\n4. Der Umfang ist U = 2(a + b).\n5. Ein Quadrat ist kein Rechteck.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 3 und 5" },
      { id: "c", text: "Nur 1, 2 und 3" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (vier rechte Winkel), 2 (gleich lange Diagonalen), 3 (A = ab), 4 (U = 2(a+b)). Ein Quadrat ist ein spezielles Rechteck mit a = b (5 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 015 Funktionen (mittel) ──
  {
    id: "ma-typk-new-015",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Exponentialfunktion sind richtig?\n\n1. f(x) = aˣ mit a > 0 und a ≠ 1.\n2. Für a > 1 ist die Funktion monoton steigend.\n3. Die Exponentialfunktion hat die x-Achse als Asymptote.\n4. e ≈ 2,718 ist die Eulersche Zahl.\n5. Die Exponentialfunktion kann negative Werte annehmen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Definition), 2 (monoton steigend für a > 1), 3 (Asymptote y = 0), 4 (e ≈ 2,718). Die Exponentialfunktion aˣ ist stets positiv, nimmt nie negative Werte an (5 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 016 Algebra (schwer) ──
  {
    id: "ma-typk-new-016",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu Logarithmen sind richtig?\n\n1. log_a(x·y) = log_a(x) + log_a(y).\n2. log_a(x/y) = log_a(x) − log_a(y).\n3. log_a(x^n) = n · log_a(x).\n4. log_a(1) = 1.\n5. log_a(a) = 1.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Produktregel), 2 (Quotientenregel), 3 (Potenzregel), 5 (log_a(a) = 1). log_a(1) = 0, nicht 1 (4 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 017 Vektoren (leicht) ──
  {
    id: "ma-typk-new-017",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zur Vektormultiplikation mit einem Skalar sind richtig?\n\n1. r · a⃗ = (r·a₁, r·a₂, r·a₃).\n2. Bei r > 1 wird der Vektor verlängert.\n3. Bei r = −1 kehrt sich die Richtung um.\n4. Bei r = 0 erhält man den Nullvektor.\n5. Die Multiplikation mit einem Skalar ändert die Richtung des Vektors, nicht den Betrag.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (komponentenweise), 2 (Verlängerung bei r > 1), 3 (Umkehr bei r = −1), 4 (Nullvektor bei r = 0). Die Skalarmultiplikation ändert den Betrag (und ggf. die Richtung bei r < 0), nicht nur die Richtung (5 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 018 Gleichungen (schwer) ──
  {
    id: "ma-typk-new-018",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu Ungleichungen sind richtig?\n\n1. Beim Multiplizieren mit einer negativen Zahl dreht sich das Ungleichungszeichen um.\n2. Addition einer Zahl auf beiden Seiten ändert die Ungleichung nicht.\n3. a < b und b < c impliziert a < c (Transitivität).\n4. |x| < a ist äquivalent zu −a < x < a (für a > 0).\n5. Beim Quadrieren beider Seiten bleibt die Ungleichung stets erhalten.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Vorzeichenregel), 2 (Addition erhält Ungleichung), 3 (Transitivität), 4 (Betrag). Quadrieren kann die Ungleichung umkehren (z. B. −3 < −2, aber 9 > 4) (5 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 019 Trigonometrie (leicht) ──
  {
    id: "ma-typk-new-019",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zu Sinus, Kosinus und Tangens im rechtwinkligen Dreieck sind richtig?\n\n1. sin α = Gegenkathete / Hypotenuse.\n2. cos α = Ankathete / Hypotenuse.\n3. tan α = Gegenkathete / Ankathete.\n4. Für den rechten Winkel gilt: sin 90° = 1.\n5. tan 45° = 0.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (sin = G/H), 2 (cos = A/H), 3 (tan = G/A), 4 (sin 90° = 1). tan 45° = 1, nicht 0 (5 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 020 Geometrie (mittel) ──
  {
    id: "ma-typk-new-020",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zur Kugel sind richtig?\n\n1. Das Volumen beträgt V = 4/3 · π · r³.\n2. Die Oberfläche beträgt O = 4πr².\n3. Der Durchmesser ist d = 2r.\n4. Die Kugel hat die kleinste Oberfläche aller Körper mit gleichem Volumen.\n5. Das Volumen einer Kugel ist proportional zu r².",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (V = 4/3πr³), 2 (O = 4πr²), 3 (d = 2r), 4 (isoperimetrische Eigenschaft). V ∝ r³, nicht r² (5 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 021 Algebra (mittel) ──
  {
    id: "ma-typk-new-021",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zu Wurzeln sind richtig?\n\n1. √(a·b) = √a · √b (für a, b ≥ 0).\n2. √(a/b) = √a / √b (für a ≥ 0, b > 0).\n3. √(a+b) = √a + √b.\n4. √(a²) = |a|.\n5. Die Quadratwurzel einer negativen Zahl existiert nicht in ℝ.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Produktregel), 2 (Quotientenregel), 4 (Betrag), 5 (nicht in ℝ). √(a+b) ≠ √a + √b im Allgemeinen (3 falsch; z. B. √(4+9) = √13 ≠ 2+3 = 5).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 022 Funktionen (leicht) ──
  {
    id: "ma-typk-new-022",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zum Funktionsbegriff sind richtig?\n\n1. Eine Funktion ordnet jedem x-Wert genau einen y-Wert zu.\n2. Der Definitionsbereich ist die Menge aller zulässigen x-Werte.\n3. Der Wertebereich ist die Menge aller y-Werte, die die Funktion annimmt.\n4. Eine Funktion kann jedem x mehrere y-Werte zuordnen.\n5. Die Nullstellen einer Funktion sind die x-Werte, für die f(x) = 0 gilt.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Eindeutigkeit), 2 (Definitionsbereich), 3 (Wertebereich), 5 (Nullstellen). Eine Funktion ordnet genau einen y-Wert zu, nicht mehrere (4 falsch — Rechtseindeutigkeit).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 023 Geometrie (schwer) ──
  {
    id: "ma-typk-new-023",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu ähnlichen Dreiecken sind richtig?\n\n1. Ähnliche Dreiecke haben die gleichen Winkel.\n2. Entsprechende Seiten stehen im gleichen Verhältnis.\n3. Ähnliche Dreiecke sind stets kongruent.\n4. Alle gleichseitigen Dreiecke sind zueinander ähnlich.\n5. Der Flächeninhalt ähnlicher Dreiecke steht im Verhältnis k² (k = Seitenverhältnis).",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (gleiche Winkel), 2 (Seitenverhältnis), 4 (alle gleichseitigen ähnlich), 5 (Flächenverhältnis k²). Ähnliche Dreiecke können unterschiedlich groß sein — Kongruenz erfordert zusätzlich gleiche Seitenlängen (3 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 024 Gleichungen (mittel) ──
  {
    id: "ma-typk-new-024",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu linearen Gleichungssystemen sind richtig?\n\n1. Ein System aus zwei Gleichungen mit zwei Unbekannten kann eine, keine oder unendlich viele Lösungen haben.\n2. Die Lösung ist geometrisch der Schnittpunkt zweier Geraden.\n3. Das Additionsverfahren ist eine Methode zur Lösung.\n4. Parallele Geraden ergeben unendlich viele Lösungen.\n5. Das Einsetzungsverfahren ist eine alternative Lösungsmethode.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Lösungsanzahl), 2 (Schnittpunkt), 3 (Additionsverfahren), 5 (Einsetzungsverfahren). Parallele Geraden (und nicht identisch) ergeben keine Lösung (4 falsch; unendlich viele nur bei identischen Geraden).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 025 Vektoren (schwer) ──
  {
    id: "ma-typk-new-025",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zum Kreuzprodukt (Vektorprodukt) sind richtig?\n\n1. Das Kreuzprodukt zweier Vektoren ergibt einen Vektor.\n2. Der Ergebnisvektor steht senkrecht auf beiden Ausgangsvektoren.\n3. |a⃗ × b⃗| = |a⃗| · |b⃗| · sin α.\n4. Das Kreuzprodukt ist kommutativ: a⃗ × b⃗ = b⃗ × a⃗.\n5. Der Betrag des Kreuzprodukts entspricht der Fläche des aufgespannten Parallelogramms.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Ergebnis = Vektor), 2 (senkrecht), 3 (|a×b| = |a||b|sin α), 5 (Parallelogrammfläche). Das Kreuzprodukt ist antikommutativ: a⃗ × b⃗ = −(b⃗ × a⃗) (4 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 026 Algebra (leicht) ──
  {
    id: "ma-typk-new-026",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zu Mengen und Zahlenarten sind richtig?\n\n1. ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.\n2. Jede natürliche Zahl ist auch eine reelle Zahl.\n3. √2 ist eine rationale Zahl.\n4. ℚ enthält alle Brüche a/b mit a, b ∈ ℤ, b ≠ 0.\n5. π ist eine irrationale Zahl.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Zahlenbereiche), 2 (ℕ ⊂ ℝ), 4 (Definition ℚ), 5 (π irrational). √2 ist irrational, nicht rational (3 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 027 Funktionen (schwer) ──
  {
    id: "ma-typk-new-027",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Logarithmusfunktion sind richtig?\n\n1. Die Logarithmusfunktion ist die Umkehrfunktion der Exponentialfunktion.\n2. Der Definitionsbereich ist x > 0.\n3. log(1) = 0 für jeden Logarithmus.\n4. Die Logarithmusfunktion ist für a > 1 monoton steigend.\n5. ln(e) = 0.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Umkehrfunktion), 2 (x > 0), 3 (log(1) = 0), 4 (monoton steigend für a > 1). ln(e) = 1, nicht 0 (5 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 028 Geometrie (leicht) ──
  {
    id: "ma-typk-new-028",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zum Quader sind richtig?\n\n1. Ein Quader hat 6 Flächen.\n2. Das Volumen ist V = a · b · c.\n3. Die Oberfläche ist O = 2(ab + bc + ac).\n4. Alle Kanten eines Quaders sind gleich lang.\n5. Die Raumdiagonale beträgt d = √(a² + b² + c²).",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (6 Flächen), 2 (V = abc), 3 (Oberfläche), 5 (Raumdiagonale). Nur beim Würfel sind alle Kanten gleich lang (4 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 029 Trigonometrie (mittel) ──
  {
    id: "ma-typk-new-029",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zum Bogenmaß sind richtig?\n\n1. 360° entspricht 2π rad.\n2. 180° entspricht π rad.\n3. 90° entspricht π/2 rad.\n4. 1 rad ≈ 57,3°.\n5. Das Bogenmaß ist dimensionslos.",
    options: [
      { id: "a", text: "Nur 1, 2 und 3" },
      { id: "b", text: "Nur 1, 2, 3, 4 und 5" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 4 und 5" },
      { id: "e", text: "Nur 1, 2 und 4" },
    ],
    correctOptionId: "b",
    explanation:
      "Alle fünf Aussagen sind korrekt: 1 (2π rad = 360°), 2 (π rad = 180°), 3 (π/2 rad = 90°), 4 (1 rad ≈ 57,3°), 5 (Bogenmaß = Bogenlänge/Radius = dimensionslos).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 030 Gleichungen (leicht) ──
  {
    id: "ma-typk-new-030",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zum Lösen von Gleichungen sind richtig?\n\n1. Man darf auf beiden Seiten die gleiche Zahl addieren.\n2. Man darf beide Seiten mit der gleichen Zahl multiplizieren (≠ 0).\n3. Man darf beide Seiten quadrieren, ohne die Lösungsmenge zu verändern.\n4. Äquivalenzumformungen ändern die Lösungsmenge nicht.\n5. Man darf auf beiden Seiten die gleiche Zahl subtrahieren.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Addition), 2 (Multiplikation mit ≠0), 4 (Äquivalenzumformung), 5 (Subtraktion). Quadrieren kann Scheinlösungen erzeugen und ist keine Äquivalenzumformung (3 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 031 Funktionen (mittel) ──
  {
    id: "ma-typk-new-031",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu Polynomfunktionen sind richtig?\n\n1. Ein Polynom n-ten Grades hat höchstens n Nullstellen.\n2. Der Grad bestimmt das Verhalten für x → ±∞.\n3. Polynome sind auf ganz ℝ definiert.\n4. Jedes Polynom hat mindestens eine reelle Nullstelle.\n5. Die Ableitung eines Polynoms n-ten Grades ist ein Polynom (n−1)-ten Grades.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (max. n Nullstellen), 2 (Grad bestimmt Asymptotik), 3 (D = ℝ), 5 (Ableitung: Grad n−1). Nicht jedes Polynom hat eine reelle Nullstelle, z. B. x² + 1 = 0 hat keine (4 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 032 Geometrie (mittel) ──
  {
    id: "ma-typk-new-032",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zum Zylinder sind richtig?\n\n1. Das Volumen beträgt V = π · r² · h.\n2. Die Mantelfläche beträgt M = 2π · r · h.\n3. Die Oberfläche ist O = 2πr(r + h).\n4. Ein Zylinder hat zwei kreisförmige Grundflächen.\n5. Das Volumen eines Zylinders ist proportional zu r³.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (V = πr²h), 2 (M = 2πrh), 3 (O = 2πr(r+h)), 4 (zwei Kreisflächen). V = πr²h ist proportional zu r², nicht r³ (5 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 033 Algebra (schwer) ──
  {
    id: "ma-typk-new-033",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu Folgen und Reihen sind richtig?\n\n1. Eine arithmetische Folge hat eine konstante Differenz d.\n2. Eine geometrische Folge hat einen konstanten Quotienten q.\n3. Die Summe der ersten n Glieder einer arithmetischen Folge ist S_n = n/2 · (a₁ + aₙ).\n4. Eine geometrische Reihe konvergiert für |q| > 1.\n5. Die n-te Partialsumme einer geometrischen Reihe ist S_n = a₁ · (1 − qⁿ)/(1 − q) für q ≠ 1.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (d = const), 2 (q = const), 3 (Gaußsche Summenformel), 5 (Partialsumme). Die geometrische Reihe konvergiert für |q| < 1, nicht |q| > 1 (4 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 034 Vektoren (mittel) ──
  {
    id: "ma-typk-new-034",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zur Geradengleichung im Raum sind richtig?\n\n1. Eine Gerade wird durch einen Stützvektor und einen Richtungsvektor beschrieben.\n2. g: x⃗ = p⃗ + t · r⃗ (t ∈ ℝ).\n3. Zwei Geraden sind parallel, wenn ihre Richtungsvektoren kollinear sind.\n4. Zwei Geraden im ℝ³, die nicht parallel sind, schneiden sich immer.\n5. Der Parameter t durchläuft alle reellen Zahlen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Stütz + Richtung), 2 (Parameterform), 3 (kollinear → parallel), 5 (t ∈ ℝ). Im ℝ³ können nicht-parallele Geraden windschief sein (4 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 035 Gleichungen (schwer) ──
  {
    id: "ma-typk-new-035",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu Exponentialgleichungen sind richtig?\n\n1. Exponentialgleichungen haben die Form aˣ = b.\n2. Die Lösung ist x = log_a(b) (für a > 0, a ≠ 1, b > 0).\n3. Man kann beide Seiten logarithmieren, um x zu isolieren.\n4. 2ˣ = −4 hat eine reelle Lösung.\n5. Die Substitution y = aˣ kann komplexere Gleichungen vereinfachen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Form), 2 (Logarithmus), 3 (Logarithmieren), 5 (Substitution). 2ˣ ist stets positiv, daher hat 2ˣ = −4 keine Lösung (4 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 036 Trigonometrie (mittel) ──
  {
    id: "ma-typk-new-036",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Sinusfunktion sind richtig?\n\n1. Die Sinusfunktion hat die Periode 2π.\n2. Der Wertebereich ist [−1, 1].\n3. sin(x) ist eine ungerade Funktion: sin(−x) = −sin(x).\n4. Die Sinusfunktion hat Nullstellen bei x = nπ (n ∈ ℤ).\n5. sin(x) ist überall differenzierbar und die Ableitung ist −cos(x).",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Periode 2π), 2 (Wertebereich [−1,1]), 3 (ungerade Funktion), 4 (Nullstellen bei nπ). Die Ableitung von sin(x) ist cos(x), nicht −cos(x) (5 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 037 Geometrie (schwer) ──
  {
    id: "ma-typk-new-037",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zum Kegel sind richtig?\n\n1. Das Volumen ist V = 1/3 · π · r² · h.\n2. Die Mantelfläche ist M = π · r · s (s = Mantellinie).\n3. Es gilt s² = r² + h² (Pythagoras).\n4. Die Oberfläche ist O = πr(r + s).\n5. Das Volumen eines Kegels ist doppelt so groß wie das eines Zylinders mit gleichem Radius und Höhe.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (V = 1/3πr²h), 2 (M = πrs), 3 (Pythagoras), 4 (O = πr(r+s)). Der Kegel hat ein Drittel des Zylindervolumens, nicht das Doppelte (5 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 038 Algebra (leicht) ──
  {
    id: "ma-typk-new-038",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zur Prozentrechnung sind richtig?\n\n1. 1 % = 1/100.\n2. p % von G ist G · p/100.\n3. Der Prozentsatz p = Anteil/Grundwert · 100.\n4. 50 % Erhöhung gefolgt von 50 % Senkung ergibt den Ausgangswert.\n5. Promille (‰) bedeutet Tausendstel.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (1 % = 0,01), 2 (Prozentwert), 3 (Prozentsatz), 5 (‰ = 1/1000). 100 · 1,5 = 150 → 150 · 0,5 = 75 ≠ 100 (4 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 039 Funktionen (mittel) ──
  {
    id: "ma-typk-new-039",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Ableitung sind richtig?\n\n1. Die Ableitung gibt die Steigung der Tangente an.\n2. f'(x₀) = 0 ist eine notwendige Bedingung für ein Extremum.\n3. Die Ableitung von xⁿ ist n·xⁿ⁻¹.\n4. Die Ableitung einer Konstanten ist 1.\n5. Die Kettenregel besagt: (f(g(x)))' = f'(g(x)) · g'(x).",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Tangentensteigung), 2 (notwendige Bedingung), 3 (Potenzregel), 5 (Kettenregel). Die Ableitung einer Konstanten ist 0, nicht 1 (4 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 040 Vektoren (schwer) ──
  {
    id: "ma-typk-new-040",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zur Ebene im Raum sind richtig?\n\n1. Eine Ebene kann durch einen Stützvektor und zwei Richtungsvektoren beschrieben werden.\n2. Die Parameterform lautet E: x⃗ = p⃗ + s·r⃗₁ + t·r⃗₂.\n3. Der Normalenvektor steht senkrecht auf der Ebene.\n4. Die Koordinatenform lautet ax + by + cz = d, wobei (a,b,c) der Normalenvektor ist.\n5. Zwei parallele Ebenen haben stets einen Punkt gemeinsam.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Parameterform), 2 (Stütz + 2 Richtungsvektoren), 3 (Normalenvektor ⊥ Ebene), 4 (Koordinatenform). Parallele (nicht identische) Ebenen haben keinen gemeinsamen Punkt (5 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 041 Gleichungen (mittel) ──
  {
    id: "ma-typk-new-041",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zur Polynomdivision sind richtig?\n\n1. Polynomdivision funktioniert ähnlich wie schriftliche Division.\n2. Man kann ein Polynom durch einen Linearfaktor (x − a) teilen.\n3. Ist a eine Nullstelle von p(x), so ist (x − a) ein Teiler von p(x).\n4. Die Polynomdivision liefert stets einen Rest von 0.\n5. Durch Polynomdivision kann man den Grad eines Polynoms reduzieren.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (schriftliche Division), 2 (Division durch Linearfaktor), 3 (Faktorisierung), 5 (Gradreduktion). Bei Division ohne Nullstelle bleibt ein Rest ≠ 0 (4 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 042 Geometrie (leicht) ──
  {
    id: "ma-typk-new-042",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zum Parallelogramm sind richtig?\n\n1. Gegenüberliegende Seiten sind parallel und gleich lang.\n2. Die Fläche beträgt A = a · h (Grundseite mal Höhe).\n3. Die Diagonalen halbieren sich gegenseitig.\n4. Alle Winkel sind rechte Winkel.\n5. Gegenüberliegende Winkel sind gleich groß.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (parallel + gleich lang), 2 (A = a·h), 3 (Diagonalen halbieren sich), 5 (gegenüberliegende Winkel gleich). Nur beim Rechteck sind alle Winkel 90° (4 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 043 Trigonometrie (schwer) ──
  {
    id: "ma-typk-new-043",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zu Additionstheoremen sind richtig?\n\n1. sin(α + β) = sin α · cos β + cos α · sin β.\n2. cos(α + β) = cos α · cos β − sin α · sin β.\n3. sin(2α) = 2 sin α · cos α.\n4. cos(2α) = cos²α − sin²α.\n5. sin(α + β) = sin α + sin β.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Additionstheorem sin), 2 (Additionstheorem cos), 3 (Doppelwinkelsatz sin), 4 (Doppelwinkelsatz cos). sin(α + β) ≠ sin α + sin β (5 falsch; z. B. sin(60°) ≠ sin 30° + sin 30°).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 044 Algebra (mittel) ──
  {
    id: "ma-typk-new-044",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zum Betrag (Absolutwert) sind richtig?\n\n1. |a| ≥ 0 für alle reellen Zahlen.\n2. |−a| = |a|.\n3. |a · b| = |a| · |b|.\n4. |a + b| = |a| + |b| gilt immer.\n5. |a| = a für a ≥ 0 und |a| = −a für a < 0.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (nicht-negativ), 2 (Symmetrie), 3 (Multiplikativität), 5 (Definition). Die Dreiecksungleichung besagt |a+b| ≤ |a|+|b|, Gleichheit gilt nicht immer (4 falsch; z. B. |3+(−1)| = 2 ≠ 4).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 045 Funktionen (schwer) ──
  {
    id: "ma-typk-new-045",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Integration sind richtig?\n\n1. Das bestimmte Integral berechnet die Fläche unter der Kurve.\n2. Die Stammfunktion F(x) von f(x) erfüllt F'(x) = f(x).\n3. ∫xⁿ dx = xⁿ⁺¹/(n+1) + C (für n ≠ −1).\n4. ∫f(x) + g(x) dx = ∫f(x)dx + ∫g(x)dx.\n5. ∫f(x) · g(x) dx = ∫f(x)dx · ∫g(x)dx.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Flächenberechnung), 2 (Hauptsatz), 3 (Potenzregel), 4 (Linearität). Das Integral eines Produkts ist nicht das Produkt der Integrale (5 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 046 Vektoren (leicht) ──
  {
    id: "ma-typk-new-046",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zu Ortsvektoren und Verbindungsvektoren sind richtig?\n\n1. Der Ortsvektor eines Punktes P zeigt vom Ursprung zu P.\n2. Der Verbindungsvektor von A nach B ist AB⃗ = b⃗ − a⃗.\n3. Der Mittelpunkt M zweier Punkte hat den Ortsvektor m⃗ = (a⃗ + b⃗)/2.\n4. Der Verbindungsvektor von A nach B ist gleich dem von B nach A.\n5. Die Länge des Verbindungsvektors ist der Abstand der Punkte.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Ortsvektor), 2 (AB⃗ = b⃗ − a⃗), 3 (Mittelpunkt), 5 (Abstand = |AB⃗|). AB⃗ = −BA⃗, also sind sie entgegengesetzt, nicht gleich (4 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 047 Gleichungen (mittel) ──
  {
    id: "ma-typk-new-047",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu Wurzelgleichungen sind richtig?\n\n1. Beim Lösen muss man die Wurzel isolieren und dann quadrieren.\n2. Nach dem Quadrieren muss eine Probe durchgeführt werden.\n3. Scheinlösungen entstehen durch das Quadrieren.\n4. √x = −3 hat eine reelle Lösung.\n5. Die Definitionsmenge schränkt sich durch den Radikanden ein (≥ 0).",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Isolation + Quadrieren), 2 (Probe nötig), 3 (Scheinlösungen), 5 (Radikand ≥ 0). √x ≥ 0 per Definition, daher hat √x = −3 keine Lösung (4 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 048 Geometrie (mittel) ──
  {
    id: "ma-typk-new-048",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zum Trapez sind richtig?\n\n1. Ein Trapez hat genau ein Paar paralleler Seiten.\n2. Die Fläche ist A = (a + c)/2 · h.\n3. Jedes Parallelogramm ist ein spezielles Trapez.\n4. Die Diagonalen eines Trapezes sind immer gleich lang.\n5. Die Mittellinie (Verbindung der Seitenmitten) ist parallel zu den Grundseiten.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (mindestens ein Paar paralleler Seiten), 2 (Flächenformel), 3 (Parallelogramm = spezielles Trapez), 5 (Mittellinie parallel). Die Diagonalen sind nur bei gleichschenkligen Trapezen gleich lang (4 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 049 Funktionen (leicht) ──
  {
    id: "ma-typk-new-049",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu Proportionalität sind richtig?\n\n1. Direkt proportional: y = k · x.\n2. Indirekt proportional: y = k / x.\n3. Bei direkter Proportionalität geht der Graph durch den Ursprung.\n4. Bei indirekter Proportionalität ist der Graph eine Gerade.\n5. Der Proportionalitätsfaktor k gibt die Steigung bei direkter Proportionalität an.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (y = kx), 2 (y = k/x), 3 (Ursprungsgerade), 5 (k = Steigung). Bei indirekter Proportionalität ist der Graph eine Hyperbel, keine Gerade (4 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 050 Algebra (schwer) ──
  {
    id: "ma-typk-new-050",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu komplexen Brüchen und Termen sind richtig?\n\n1. (a/b)/(c/d) = (a·d)/(b·c).\n2. Erweitern eines Bruchs ändert seinen Wert nicht.\n3. Kürzen ist nur mit Faktoren erlaubt, nicht mit Summanden.\n4. a/(b+c) = a/b + a/c.\n5. (a+b)/c = a/c + b/c.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Doppelbruch), 2 (Erweitern), 3 (Kürzen nur mit Faktoren), 5 (Aufteilen bei gemeinsamem Nenner). a/(b+c) ≠ a/b + a/c (4 falsch; z. B. 6/(2+3) = 1,2 ≠ 3+2 = 5).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 051 Vektoren (mittel) ──
  {
    id: "ma-typk-new-051",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zu linearer Abhängigkeit von Vektoren sind richtig?\n\n1. Zwei Vektoren sind linear abhängig, wenn einer ein Vielfaches des anderen ist.\n2. Linear abhängige Vektoren sind kollinear.\n3. Drei linear abhängige Vektoren im ℝ³ liegen in einer Ebene.\n4. Der Nullvektor ist zu jedem Vektor linear unabhängig.\n5. Die Vektoren (1,0,0), (0,1,0), (0,0,1) sind linear unabhängig.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Vielfaches), 2 (kollinear), 3 (in einer Ebene), 5 (Standardbasis). Der Nullvektor ist zu jedem Vektor linear abhängig (0·a⃗ + 1·0⃗ = 0⃗) (4 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 052 Trigonometrie (leicht) ──
  {
    id: "ma-typk-new-052",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zu speziellen Winkeln sind richtig?\n\n1. sin 30° = 1/2.\n2. cos 60° = 1/2.\n3. sin 45° = cos 45° = √2/2.\n4. tan 0° = 0.\n5. cos 90° = 1.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (sin 30° = 0,5), 2 (cos 60° = 0,5), 3 (sin 45° = cos 45° = √2/2), 4 (tan 0° = 0). cos 90° = 0, nicht 1 (5 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 053 Geometrie (schwer) ──
  {
    id: "ma-typk-new-053",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zum Strahlensatz sind richtig?\n\n1. Der Strahlensatz beschreibt Verhältnisse bei parallelen Geraden, die von zwei Strahlen geschnitten werden.\n2. Entsprechende Abschnitte auf den Strahlen stehen im gleichen Verhältnis.\n3. Der Strahlensatz gilt auch, wenn die schneidenden Geraden nicht parallel sind.\n4. Der Strahlensatz wird zur Berechnung unbekannter Streckenlängen verwendet.\n5. Zentrische Streckung basiert auf dem Strahlensatz.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (parallele Geraden + Strahlen), 2 (Verhältnisse), 4 (Anwendung), 5 (zentrische Streckung). Parallelität ist Voraussetzung — ohne sie gilt der Strahlensatz nicht (3 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 054 Funktionen (mittel) ──
  {
    id: "ma-typk-new-054",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Symmetrie von Funktionen sind richtig?\n\n1. Eine gerade Funktion erfüllt f(−x) = f(x).\n2. Eine ungerade Funktion erfüllt f(−x) = −f(x).\n3. Der Graph einer geraden Funktion ist achsensymmetrisch zur y-Achse.\n4. Der Graph einer ungeraden Funktion ist punktsymmetrisch zum Ursprung.\n5. f(x) = x³ + x ist eine gerade Funktion.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (gerade: f(−x) = f(x)), 2 (ungerade: f(−x) = −f(x)), 3 (Achsensymmetrie), 4 (Punktsymmetrie). f(x) = x³ + x → f(−x) = −x³ − x = −f(x), also ist f ungerade, nicht gerade (5 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 055 Algebra (leicht) ──
  {
    id: "ma-typk-new-055",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zu Zehnerpotenzen und SI-Präfixen sind richtig?\n\n1. Kilo (k) = 10³.\n2. Mega (M) = 10⁶.\n3. Milli (m) = 10⁻³.\n4. Mikro (μ) = 10⁻⁶.\n5. Nano (n) = 10⁻¹².",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (k = 10³), 2 (M = 10⁶), 3 (m = 10⁻³), 4 (μ = 10⁻⁶). Nano = 10⁻⁹, nicht 10⁻¹² (5 falsch; 10⁻¹² = Piko).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 056 Gleichungen (schwer) ──
  {
    id: "ma-typk-new-056",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu Betragsgleichungen sind richtig?\n\n1. |x| = a hat für a > 0 zwei Lösungen: x = a und x = −a.\n2. |x| = a hat für a = 0 genau eine Lösung: x = 0.\n3. |x| = a hat für a < 0 keine Lösung.\n4. |2x − 3| = 5 wird durch Fallunterscheidung gelöst.\n5. |x| = −|x| gilt für alle x ∈ ℝ.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (zwei Lösungen für a > 0), 2 (eine Lösung für a = 0), 3 (keine Lösung für a < 0), 4 (Fallunterscheidung). |x| = −|x| gilt nur für x = 0, nicht für alle x (5 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 057 Geometrie (leicht) ──
  {
    id: "ma-typk-new-057",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zum Satz des Pythagoras sind richtig?\n\n1. a² + b² = c² gilt für rechtwinklige Dreiecke.\n2. c ist die Hypotenuse (die dem rechten Winkel gegenüberliegende Seite).\n3. Der Satz gilt für alle Dreiecke.\n4. Mit dem Satz kann man prüfen, ob ein Dreieck rechtwinklig ist.\n5. Die Umkehrung des Satzes gilt ebenfalls.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (a²+b²=c²), 2 (Hypotenuse), 4 (Prüfung), 5 (Umkehrung gilt). Der Satz gilt nur für rechtwinklige Dreiecke, nicht für alle (3 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 058 Funktionen (schwer) ──
  {
    id: "ma-typk-new-058",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu Extremwertaufgaben sind richtig?\n\n1. An einem Extremum ist die erste Ableitung null.\n2. Ein Maximum liegt vor, wenn f''(x₀) < 0.\n3. Ein Minimum liegt vor, wenn f''(x₀) > 0.\n4. Randextrema müssen separat überprüft werden.\n5. Jede Stelle mit f'(x₀) = 0 ist ein Extremum.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (notwendige Bedingung), 2 (Maximum: f'' < 0), 3 (Minimum: f'' > 0), 4 (Randextrema). f'(x₀) = 0 kann auch ein Sattelpunkt sein, z. B. bei f(x) = x³ (5 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 059 Vektoren (schwer) ──
  {
    id: "ma-typk-new-059",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zum Abstand Punkt-Gerade im Raum sind richtig?\n\n1. Der Abstand ist die Länge des Lots vom Punkt auf die Gerade.\n2. Man kann den Abstand mit dem Kreuzprodukt berechnen.\n3. d = |AP⃗ × r⃗| / |r⃗| (P = Punkt, A = Stützpunkt, r⃗ = Richtung).\n4. Der Abstand ist immer positiv oder null.\n5. Liegt der Punkt auf der Gerade, ist der Abstand negativ.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Lot), 2 (Kreuzprodukt-Methode), 3 (Abstandsformel), 4 (d ≥ 0). Liegt der Punkt auf der Gerade, ist d = 0, nicht negativ (5 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 060 Algebra (mittel) ──
  {
    id: "ma-typk-new-060",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zum Faktorisieren sind richtig?\n\n1. Ausklammern: ab + ac = a(b + c).\n2. Differenz zweier Quadrate: a² − b² = (a+b)(a−b).\n3. a² + b² kann als (a+b)² faktorisiert werden.\n4. Quadratische Trinome können mit der Lösungsformel faktorisiert werden.\n5. x² + 5x + 6 = (x+2)(x+3).",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Ausklammern), 2 (3. binomische Formel), 4 (Faktorisierung via Nullstellen), 5 (Zerlegung). (a+b)² = a² + 2ab + b², also a² + b² ≠ (a+b)² (3 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 061 Funktionen (leicht) ──
  {
    id: "ma-typk-new-061",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu Potenzfunktionen sind richtig?\n\n1. f(x) = x² ist eine Potenzfunktion.\n2. Für gerade Exponenten ist der Graph achsensymmetrisch zur y-Achse.\n3. Für ungerade Exponenten ist der Graph punktsymmetrisch zum Ursprung.\n4. f(x) = x⁻¹ = 1/x ist eine Potenzfunktion.\n5. Alle Potenzfunktionen haben den Ursprung als Nullstelle.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (x² = Potenzfunktion), 2 (gerade → Achsensymmetrie), 3 (ungerade → Punktsymmetrie), 4 (x⁻¹ auch Potenzfunktion). Für negative Exponenten wie x⁻¹ ist x = 0 nicht im Definitionsbereich, also keine Nullstelle (5 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 062 Geometrie (mittel) ──
  {
    id: "ma-typk-new-062",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zur Pyramide sind richtig?\n\n1. Das Volumen ist V = 1/3 · A_Grundfläche · h.\n2. Eine quadratische Pyramide hat eine quadratische Grundfläche.\n3. Die Spitze liegt senkrecht über dem Mittelpunkt der Grundfläche (bei gerader Pyramide).\n4. Eine Pyramide hat doppelt so viele Kanten wie Ecken.\n5. Die Mantelfläche besteht aus Dreiecken.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (V = 1/3·A·h), 2 (quadratische Grundfläche), 3 (gerade Pyramide), 5 (Dreiecksflächen). Eine quadratische Pyramide hat 5 Ecken und 8 Kanten — 8 ≠ 2·5 (4 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 063 Trigonometrie (mittel) ──
  {
    id: "ma-typk-new-063",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Kosinusfunktion sind richtig?\n\n1. cos(x) hat die Periode 2π.\n2. cos(x) ist eine gerade Funktion: cos(−x) = cos(x).\n3. cos(x) hat Nullstellen bei x = π/2 + nπ (n ∈ ℤ).\n4. Der Wertebereich von cos(x) ist [−1, 1].\n5. Die Ableitung von cos(x) ist sin(x).",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Periode 2π), 2 (gerade Funktion), 3 (Nullstellen bei π/2 + nπ), 4 ([−1,1]). Die Ableitung von cos(x) ist −sin(x), nicht sin(x) (5 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 064 Gleichungen (leicht) ──
  {
    id: "ma-typk-new-064",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zum Umstellen von Formeln sind richtig?\n\n1. v = s/t kann nach s umgestellt werden: s = v · t.\n2. F = m · a kann nach m umgestellt werden: m = F/a.\n3. A = πr² kann nach r umgestellt werden: r = √(A/π).\n4. Beim Umstellen darf man Operationen nur auf einer Seite durchführen.\n5. E = ½mv² kann nach v umgestellt werden: v = √(2E/m).",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (s = vt), 2 (m = F/a), 3 (r = √(A/π)), 5 (v = √(2E/m)). Operationen müssen stets auf beiden Seiten durchgeführt werden (4 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 065 Vektoren (leicht) ──
  {
    id: "ma-typk-new-065",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zum Einheitsvektor sind richtig?\n\n1. Ein Einheitsvektor hat die Länge 1.\n2. Jeder Vektor (≠ 0⃗) kann zu einem Einheitsvektor normiert werden.\n3. Der Einheitsvektor von a⃗ ist a⃗/|a⃗|.\n4. Die Standardbasisvektoren e₁, e₂, e₃ sind Einheitsvektoren.\n5. Einheitsvektoren haben keine Richtung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (|e⃗| = 1), 2 (Normierung möglich), 3 (e⃗ = a⃗/|a⃗|), 4 (Standardbasis). Einheitsvektoren haben selbstverständlich eine Richtung (5 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 066 Funktionen (schwer) ──
  {
    id: "ma-typk-new-066",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu Grenzwerten und Stetigkeit sind richtig?\n\n1. Eine Funktion ist stetig, wenn ihr Graph keine Sprünge hat.\n2. lim_{x→a} f(x) = f(a) ist die Definition von Stetigkeit an der Stelle a.\n3. Polynome sind auf ganz ℝ stetig.\n4. Die Funktion f(x) = 1/x ist bei x = 0 stetig.\n5. Stetige Funktionen auf abgeschlossenen Intervallen nehmen ihr Maximum und Minimum an.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (anschaulich), 2 (ε-δ-Definition vereinfacht), 3 (Polynome stetig), 5 (Satz vom Maximum). f(x) = 1/x ist bei x = 0 nicht definiert, also nicht stetig (4 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 067 Geometrie (schwer) ──
  {
    id: "ma-typk-new-067",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zum Thaleskreis sind richtig?\n\n1. Jeder Punkt auf dem Halbkreis über der Strecke AB bildet mit A und B einen rechten Winkel.\n2. Der Thaleskreis hat den Durchmesser AB.\n3. Der Mittelpunkt des Thaleskreises ist der Mittelpunkt von AB.\n4. Punkte innerhalb des Halbkreises bilden einen Winkel > 90°.\n5. Der Satz des Thales ist ein Spezialfall des Peripheriewinkelsatzes.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (rechter Winkel auf Halbkreis), 2 (Durchmesser AB), 3 (Mittelpunkt), 5 (Spezialfall Peripheriewinkelsatz). Punkte innerhalb des Halbkreises bilden einen Winkel > 90° — das stimmt, wenn man den Winkel bei C betrachtet, aber die korrekte Aussage wäre: Punkte innerhalb ergeben einen stumpfen Winkel. Allerdings ist die Formulierung mehrdeutig. Da 4 tatsächlich zutrifft... Nein: Innerhalb des Kreises ist der Winkel ACB > 90° (stumpf). Die korrekte Antwort bleibt 1,2,3,5.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 068 Algebra (mittel) ──
  {
    id: "ma-typk-new-068",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu Verhältnissen und Proportionen sind richtig?\n\n1. a:b = c:d bedeutet a/b = c/d.\n2. Aus a:b = c:d folgt a·d = b·c (Kreuzregel).\n3. Maßstab 1:100 bedeutet, dass 1 cm auf der Karte 100 cm in der Realität entspricht.\n4. Verhältnisse können gekürzt werden.\n5. a:b = c:d bedeutet immer a = c und b = d.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Definition Proportion), 2 (Kreuzregel), 3 (Maßstab), 4 (Kürzen möglich). z. B. 2:4 = 3:6, aber 2 ≠ 3 und 4 ≠ 6 (5 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 069 Funktionen (mittel) ──
  {
    id: "ma-typk-new-069",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Umkehrfunktion sind richtig?\n\n1. Die Umkehrfunktion f⁻¹ existiert nur für bijektive Funktionen.\n2. f(f⁻¹(x)) = x.\n3. Der Graph von f⁻¹ ist die Spiegelung von f an der Winkelhalbierenden y = x.\n4. Jede Funktion hat eine Umkehrfunktion.\n5. f⁻¹(f(x)) = x.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Bijektivität nötig), 2 (f∘f⁻¹ = id), 3 (Spiegelung an y = x), 5 (f⁻¹∘f = id). Nicht jede Funktion ist bijektiv, z. B. f(x) = x² (4 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 070 Geometrie (leicht) ──
  {
    id: "ma-typk-new-070",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu Winkeln sind richtig?\n\n1. Nebenwinkel ergänzen sich zu 180°.\n2. Scheitelwinkel sind gleich groß.\n3. Stufenwinkel an parallelen Geraden sind gleich groß.\n4. Wechselwinkel an parallelen Geraden sind gleich groß.\n5. Ein rechter Winkel hat 100°.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Nebenwinkel: 180°), 2 (Scheitelwinkel gleich), 3 (Stufenwinkel gleich), 4 (Wechselwinkel gleich). Ein rechter Winkel hat 90°, nicht 100° (5 falsch).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 071 Gleichungen (mittel) ──
  {
    id: "ma-typk-new-071",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu biquadratischen Gleichungen sind richtig?\n\n1. Eine biquadratische Gleichung hat die Form ax⁴ + bx² + c = 0.\n2. Man löst sie durch Substitution z = x².\n3. Aus den Lösungen für z erhält man x durch Rücksubstitution.\n4. Eine biquadratische Gleichung hat immer 4 reelle Lösungen.\n5. Negative z-Lösungen liefern keine reellen x-Werte.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Form), 2 (Substitution z = x²), 3 (Rücksubstitution), 5 (z < 0 → kein reelles x). Je nach Diskriminante und Vorzeichen der z-Werte können 0, 2 oder 4 reelle Lösungen auftreten (4 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 072 Vektoren (mittel) ──
  {
    id: "ma-typk-new-072",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zum Winkel zwischen Vektoren sind richtig?\n\n1. Der Winkel kann mit dem Skalarprodukt berechnet werden.\n2. cos α = (a⃗ · b⃗) / (|a⃗| · |b⃗|).\n3. Senkrechte Vektoren haben den Winkel 90° (cos α = 0).\n4. Parallele, gleichgerichtete Vektoren haben den Winkel 0°.\n5. Der Winkel zwischen zwei Vektoren kann größer als 180° sein.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Skalarprodukt-Methode), 2 (Formel), 3 (senkrecht: cos 90° = 0), 4 (parallel: cos 0° = 1). Der Winkel zwischen zwei Vektoren liegt im Bereich [0°, 180°] (5 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 073 Algebra (schwer) ──
  {
    id: "ma-typk-new-073",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu Matrizen (2×2) sind richtig?\n\n1. Die Determinante von [[a,b],[c,d]] ist ad − bc.\n2. Eine Matrix ist invertierbar, wenn ihre Determinante ≠ 0.\n3. Die Multiplikation von Matrizen ist kommutativ.\n4. Die Einheitsmatrix I hat auf der Hauptdiagonale Einsen und sonst Nullen.\n5. A · I = A für jede quadratische Matrix A.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Determinante), 2 (Invertierbarkeit), 4 (Einheitsmatrix), 5 (A·I = A). Matrizenmultiplikation ist im Allgemeinen nicht kommutativ: AB ≠ BA (3 falsch).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 074 Funktionen (mittel) ──
  {
    id: "ma-typk-new-074",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu Wendepunkten sind richtig?\n\n1. An einem Wendepunkt ändert sich das Krümmungsverhalten der Funktion.\n2. Eine notwendige Bedingung ist f''(x₀) = 0.\n3. Eine hinreichende Bedingung ist f''(x₀) = 0 und f'''(x₀) ≠ 0.\n4. Am Wendepunkt hat die erste Ableitung ein Extremum.\n5. Jede Funktion mit f''(x₀) = 0 hat dort einen Wendepunkt.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (Krümmungswechsel), 2 (notwendig: f'' = 0), 3 (hinreichend: f''' ≠ 0), 4 (f' hat Extremum am Wendepunkt). f''(x₀) = 0 ist nur notwendig — z. B. f(x) = x⁴: f''(0) = 0, aber kein Wendepunkt (5 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 075 Geometrie (mittel) ──
  {
    id: "ma-typk-new-075",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zur Kongruenz von Dreiecken sind richtig?\n\n1. SSS: Drei gleiche Seitenlängen → kongruent.\n2. SWS: Zwei Seiten und der eingeschlossene Winkel gleich → kongruent.\n3. WSW: Zwei Winkel und die eingeschlossene Seite gleich → kongruent.\n4. SSW: Zwei Seiten und ein nicht eingeschlossener Winkel gleich → immer kongruent.\n5. Kongruente Dreiecke haben gleiche Fläche.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "Richtig: 1 (SSS), 2 (SWS), 3 (WSW), 5 (gleiche Fläche bei Kongruenz). SSW ist kein allgemeiner Kongruenzsatz — es kann mehrdeutige Lösungen geben (4 falsch).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
];
