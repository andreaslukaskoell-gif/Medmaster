/**
 * Mathematik Typ-K Pool 4 (Kombinationsaufgaben) — 75 Fragen im Question-Format.
 * IDs: ma-typk-new4-001 bis ma-typk-new4-075.
 * Themen-Schwerpunkt: Analysis (Grenzwerte, Stetigkeit, Differenzierbarkeit),
 * Lineare Algebra (Eigenwerte, Diagonalisierung), Trigonometrie,
 * Koordinatengeometrie, Zahlensysteme.
 * KEINE Stochastik!
 * Schwierigkeit: ~30 % leicht, ~45 % mittel, ~25 % schwer.
 */
import type { Question } from "./index";

export const mathematikTypKNew4: Question[] = [
  // ── 001 Grenzwerte – Grundbegriffe (leicht) ──
  {
    id: "ma-typk-new4-001",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zu Grenzwerten von Folgen sind richtig?\n\n1. Eine Folge konvergiert, wenn sie einen Grenzwert besitzt.\n2. lim(n→∞) 1/n = 0.\n3. Jede beschränkte Folge konvergiert.\n4. Eine konvergente Folge ist immer beschränkt.\n5. Der Grenzwert einer konvergenten Folge ist eindeutig.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Die Folge (-1)^n ist beschränkt, konvergiert aber nicht.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 002 Grenzwertregeln (leicht) ──
  {
    id: "ma-typk-new4-002",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zu Grenzwertregeln sind richtig?\n\n1. lim(a_n + b_n) = lim(a_n) + lim(b_n), falls beide konvergent.\n2. lim(a_n · b_n) = lim(a_n) · lim(b_n), falls beide konvergent.\n3. lim(a_n / b_n) = lim(a_n) / lim(b_n), falls lim(b_n) ≠ 0.\n4. lim(c · a_n) = c · lim(a_n) für eine Konstante c.\n5. Die Grenzwertregeln gelten auch, wenn eine der Folgen divergiert.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Grenzwertregeln setzen voraus, dass beide Folgen konvergieren.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 003 Grenzwerte von Funktionen (mittel) ──
  {
    id: "ma-typk-new4-003",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zu Grenzwerten von Funktionen sind richtig?\n\n1. lim(x→0) sin(x)/x = 1.\n2. lim(x→∞) (1 + 1/x)^x = e.\n3. Ein Grenzwert kann existieren, auch wenn die Funktion an der Stelle nicht definiert ist.\n4. Existiert der Grenzwert, müssen links- und rechtsseitiger Grenzwert übereinstimmen.\n5. lim(x→0) 1/x existiert.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: lim(x→0) 1/x existiert nicht, da der linksseitige Grenzwert −∞ und der rechtsseitige +∞ ist.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 004 Stetigkeit – Definition (leicht) ──
  {
    id: "ma-typk-new4-004",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Stetigkeit sind richtig?\n\n1. Eine Funktion ist stetig in x₀, wenn lim(x→x₀) f(x) = f(x₀).\n2. Polynomfunktionen sind auf ganz ℝ stetig.\n3. Eine stetige Funktion hat keinen Sprung im Graphen.\n4. Die Funktion f(x) = 1/x ist auf ganz ℝ stetig.\n5. Die Verkettung stetiger Funktionen ist wieder stetig.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: f(x) = 1/x ist bei x = 0 nicht definiert und somit nicht auf ganz ℝ stetig.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 005 Zwischenwertsatz (mittel) ──
  {
    id: "ma-typk-new4-005",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zum Zwischenwertsatz sind richtig?\n\n1. Er gilt für stetige Funktionen auf einem abgeschlossenen Intervall.\n2. Wenn f(a) < 0 und f(b) > 0, dann gibt es ein c ∈ (a,b) mit f(c) = 0.\n3. Er kann zum Nachweis von Nullstellen verwendet werden.\n4. Die Nullstelle ist durch den Satz eindeutig bestimmt.\n5. Der Satz setzt voraus, dass die Funktion auf [a,b] stetig ist.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Es können mehrere Nullstellen im Intervall liegen — der Satz garantiert nur die Existenz mindestens einer.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 006 Differenzierbarkeit – Grundlagen (leicht) ──
  {
    id: "ma-typk-new4-006",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Differenzierbarkeit sind richtig?\n\n1. Die Ableitung einer Funktion ist der Grenzwert des Differenzenquotienten.\n2. Differenzierbarkeit impliziert Stetigkeit.\n3. f'(x₀) gibt die Steigung der Tangente an der Stelle x₀ an.\n4. Die Ableitung von x^n ist n·x^(n−1).\n5. Stetigkeit impliziert Differenzierbarkeit.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: f(x) = |x| ist stetig bei x = 0, aber dort nicht differenzierbar.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 007 Ableitungsregeln (leicht) ──
  {
    id: "ma-typk-new4-007",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zu Ableitungsregeln sind richtig?\n\n1. (f + g)' = f' + g' (Summenregel).\n2. (f · g)' = f' · g + f · g' (Produktregel).\n3. (f/g)' = (f'·g − f·g') / g² (Quotientenregel).\n4. (f(g(x)))' = f'(g(x)) · g'(x) (Kettenregel).\n5. Die Ableitung einer Konstanten ist 1.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Ableitung einer Konstanten ist 0.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 008 Ableitung spezieller Funktionen (mittel) ──
  {
    id: "ma-typk-new4-008",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zu Ableitungen sind richtig?\n\n1. (e^x)' = e^x.\n2. (ln x)' = 1/x für x > 0.\n3. (sin x)' = cos x.\n4. (cos x)' = −sin x.\n5. (tan x)' = 1/cos(x).",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: (tan x)' = 1/cos²(x) = sec²(x), nicht 1/cos(x).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 009 Monotonie und Extrema (mittel) ──
  {
    id: "ma-typk-new4-009",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Kurvendiskussion sind richtig?\n\n1. f'(x) > 0 bedeutet, dass f streng monoton steigend ist.\n2. An lokalen Extrema gilt f'(x₀) = 0 (notwendige Bedingung).\n3. f''(x₀) < 0 bei f'(x₀) = 0 bedeutet ein lokales Maximum.\n4. f''(x₀) > 0 bei f'(x₀) = 0 bedeutet ein lokales Minimum.\n5. Jede Nullstelle der Ableitung ist automatisch ein Extremum.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Es könnte auch ein Sattelpunkt (Wendepunkt mit waagerechter Tangente) vorliegen, z. B. bei f(x) = x³ an x = 0.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 010 Wendepunkte (mittel) ──
  {
    id: "ma-typk-new4-010",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zu Wendepunkten sind richtig?\n\n1. An einem Wendepunkt ändert sich das Krümmungsverhalten der Funktion.\n2. Notwendige Bedingung: f''(x₀) = 0.\n3. Hinreichende Bedingung: f''(x₀) = 0 und f'''(x₀) ≠ 0.\n4. An einem Wendepunkt hat die erste Ableitung ein lokales Extremum.\n5. Jede Nullstelle von f'' ist automatisch ein Wendepunkt.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Es muss auch ein Vorzeichenwechsel von f'' vorliegen (z. B. bei f(x) = x⁴ ist f''(0) = 0, aber kein Wendepunkt).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 011 L'Hôpital (schwer) ──
  {
    id: "ma-typk-new4-011",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Regel von L'Hôpital sind richtig?\n\n1. Sie gilt für unbestimmte Ausdrücke der Form 0/0 oder ∞/∞.\n2. lim f(x)/g(x) = lim f'(x)/g'(x), falls der rechte Grenzwert existiert.\n3. Die Regel kann mehrfach hintereinander angewandt werden.\n4. Voraussetzung ist, dass f und g differenzierbar sind.\n5. Die Regel gilt für jeden Quotienten, auch wenn kein unbestimmter Ausdruck vorliegt.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: L'Hôpital darf nur bei unbestimmten Ausdrücken (0/0 oder ∞/∞) angewendet werden.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 012 Eigenwerte – Definition (mittel) ──
  {
    id: "ma-typk-new4-012",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu Eigenwerten sind richtig?\n\n1. λ ist Eigenwert von A, wenn A·v = λ·v für einen Vektor v ≠ 0 gilt.\n2. Eigenwerte werden aus det(A − λI) = 0 berechnet.\n3. Die Anzahl der Eigenwerte (mit Vielfachheit) entspricht der Matrixgröße n.\n4. Der zugehörige Vektor v heißt Eigenvektor.\n5. Eigenwerte sind immer ganzzahlig.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Eigenwerte können beliebige reelle oder sogar komplexe Zahlen sein.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 013 Charakteristisches Polynom (schwer) ──
  {
    id: "ma-typk-new4-013",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zum charakteristischen Polynom sind richtig?\n\n1. Es ist p(λ) = det(A − λI).\n2. Die Nullstellen von p(λ) sind die Eigenwerte.\n3. Für eine 2×2-Matrix ist das charakteristische Polynom quadratisch.\n4. Die Summe der Eigenwerte ist gleich der Spur der Matrix.\n5. Das Produkt der Eigenwerte ist immer positiv.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Das Produkt der Eigenwerte entspricht der Determinante, die auch negativ sein kann.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 014 Diagonalisierung (schwer) ──
  {
    id: "ma-typk-new4-014",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zur Diagonalisierung sind richtig?\n\n1. Eine Matrix A ist diagonalisierbar, wenn n linear unabhängige Eigenvektoren existieren.\n2. Die Diagonalmatrix D enthält die Eigenwerte auf der Hauptdiagonale.\n3. A = P·D·P⁻¹, wobei P die Matrix der Eigenvektoren ist.\n4. Symmetrische Matrizen sind immer diagonalisierbar.\n5. Jede quadratische Matrix ist diagonalisierbar.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Nicht jede Matrix ist diagonalisierbar (z. B. defekte Matrizen mit weniger als n linear unabhängigen Eigenvektoren).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 015 Eigenvektoren (mittel) ──
  {
    id: "ma-typk-new4-015",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu Eigenvektoren sind richtig?\n\n1. Eigenvektoren werden durch A·v = λ·v definiert und sind v ≠ 0.\n2. Jedes skalare Vielfache eines Eigenvektors ist wieder ein Eigenvektor.\n3. Eigenvektoren zu verschiedenen Eigenwerten sind linear unabhängig.\n4. Man findet Eigenvektoren durch Lösen von (A − λI)·v = 0.\n5. Der Nullvektor ist ein Eigenvektor.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1 und 2" },
      { id: "c", text: "Nur 1, 2 und 4" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Der Nullvektor ist per Definition kein Eigenvektor (v ≠ 0 gefordert).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 016 Spur und Determinante (mittel) ──
  {
    id: "ma-typk-new4-016",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu Spur und Determinante einer Matrix sind richtig?\n\n1. Die Spur ist die Summe der Hauptdiagonalelemente.\n2. Die Determinante einer 2×2-Matrix ist ad − bc.\n3. Die Spur ist gleich der Summe der Eigenwerte.\n4. Die Determinante ist gleich dem Produkt der Eigenwerte.\n5. Die Spur ändert sich bei Zeilenvertauschung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Spur ist invariant unter Ähnlichkeitstransformationen; eine Zeilenvertauschung ändert die Spur nicht.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 017 Trigonometrische Grundwerte (leicht) ──
  {
    id: "ma-typk-new4-017",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu trigonometrischen Grundwerten sind richtig?\n\n1. sin(0) = 0.\n2. cos(0) = 1.\n3. sin(π/2) = 1.\n4. cos(π) = −1.\n5. sin(π) = 1.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: sin(π) = 0, nicht 1.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 018 Additionstheoreme (mittel) ──
  {
    id: "ma-typk-new4-018",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu den Additionstheoremen sind richtig?\n\n1. sin(α + β) = sin α cos β + cos α sin β.\n2. cos(α + β) = cos α cos β − sin α sin β.\n3. sin(2α) = 2 sin α cos α.\n4. cos(2α) = cos²α − sin²α.\n5. sin(α + β) = sin α + sin β.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: sin(α + β) ≠ sin α + sin β; das Additionstheorem enthält gemischte Terme.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 019 Trigonometrische Identitäten (mittel) ──
  {
    id: "ma-typk-new4-019",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu trigonometrischen Identitäten sind richtig?\n\n1. sin²x + cos²x = 1.\n2. 1 + tan²x = 1/cos²x.\n3. sin(−x) = −sin(x).\n4. cos(−x) = cos(x).\n5. tan(x) = sin(x) · cos(x).",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: tan(x) = sin(x)/cos(x), nicht sin(x) · cos(x).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 020 Umkehrfunktionen – arcsin, arccos (mittel) ──
  {
    id: "ma-typk-new4-020",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu trigonometrischen Umkehrfunktionen sind richtig?\n\n1. arcsin ist die Umkehrfunktion von sin auf [−π/2, π/2].\n2. arccos ist die Umkehrfunktion von cos auf [0, π].\n3. Der Wertebereich von arcsin ist [−π/2, π/2].\n4. Der Definitionsbereich von arcsin ist [−1, 1].\n5. arcsin(x) + arccos(x) = π für alle x ∈ [−1, 1].",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: arcsin(x) + arccos(x) = π/2 (nicht π) für alle x ∈ [−1, 1].",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 021 arctan (schwer) ──
  {
    id: "ma-typk-new4-021",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zum Arkustangens sind richtig?\n\n1. arctan ist die Umkehrfunktion von tan auf (−π/2, π/2).\n2. Der Definitionsbereich von arctan ist ganz ℝ.\n3. Der Wertebereich von arctan ist (−π/2, π/2).\n4. lim(x→∞) arctan(x) = π/2.\n5. arctan(1) = π/4.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 1 und 5" },
      { id: "e", text: "Nur 2, 3 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 Aussagen sind korrekt. arctan bildet ℝ auf (−π/2, π/2) ab, arctan(1) = π/4, und die Grenzwerte sind ±π/2.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 022 Geradengleichung in der Ebene (leicht) ──
  {
    id: "ma-typk-new4-022",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zur Geradengleichung in der Ebene sind richtig?\n\n1. y = kx + d ist die Normalform (Steigung k, y-Achsenabschnitt d).\n2. Parallele Geraden haben die gleiche Steigung.\n3. Senkrechte Geraden haben Steigungen mit k₁ · k₂ = −1.\n4. Der y-Achsenabschnitt ist der Punkt (0, d).\n5. Die Steigung einer horizontalen Gerade ist undefiniert.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Steigung einer horizontalen Gerade ist 0; undefiniert ist die Steigung einer vertikalen Gerade.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 023 Abstand Punkt–Gerade (mittel) ──
  {
    id: "ma-typk-new4-023",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zum Abstand eines Punktes von einer Geraden sind richtig?\n\n1. Der Abstand ist die kürzeste Verbindung zwischen Punkt und Gerade.\n2. Das Lot vom Punkt auf die Gerade steht senkrecht zur Geraden.\n3. Für ax + by + c = 0 gilt d = |ax₀ + by₀ + c| / √(a² + b²).\n4. Der Abstand ist immer nicht-negativ.\n5. Liegt der Punkt auf der Geraden, ist der Abstand 1.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Liegt der Punkt auf der Geraden, ist der Abstand 0.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 024 Geraden im Raum (schwer) ──
  {
    id: "ma-typk-new4-024",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zu Geraden im dreidimensionalen Raum sind richtig?\n\n1. Eine Gerade wird durch einen Stützvektor und einen Richtungsvektor beschrieben.\n2. Zwei Geraden können parallel, schneidend, identisch oder windschief sein.\n3. Windschief bedeutet: nicht parallel und nicht schneidend.\n4. Der Schnittwinkel wird über das Skalarprodukt der Richtungsvektoren berechnet.\n5. Zwei Geraden im Raum schneiden sich immer in genau einem Punkt.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Im 3D-Raum können Geraden auch parallel, identisch oder windschief sein.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 025 Ebenengleichung (mittel) ──
  {
    id: "ma-typk-new4-025",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zur Ebene im Raum sind richtig?\n\n1. Die Parameterform nutzt einen Stützvektor und zwei Richtungsvektoren.\n2. Die Normalenform nutzt einen Normalenvektor.\n3. Die Koordinatenform ist ax + by + cz = d.\n4. Der Normalenvektor steht senkrecht auf der Ebene.\n5. Jede Ebene hat genau zwei Normalenvektoren (gegensätzlich).",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Nur 2, 4 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 Aussagen sind korrekt. Die beiden Normalenrichtungen sind n und −n (sowie Vielfache), aber es gibt genau zwei Einheitsnormalenvektoren mit entgegengesetzter Richtung.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 026 Abstand Punkt–Ebene (schwer) ──
  {
    id: "ma-typk-new4-026",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zum Abstand eines Punktes von einer Ebene sind richtig?\n\n1. Der Abstand wird mittels der Hesseschen Normalform berechnet.\n2. d = |ax₀ + by₀ + cz₀ − d| / √(a² + b² + c²).\n3. Das Lot vom Punkt auf die Ebene ist parallel zum Normalenvektor.\n4. Der Abstand ist immer ≥ 0.\n5. Der Abstand eines Punktes in der Ebene zur Ebene ist 1.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Ein Punkt in der Ebene hat den Abstand 0.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 027 Binärsystem (leicht) ──
  {
    id: "ma-typk-new4-027",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zum Binärsystem (Basis 2) sind richtig?\n\n1. Im Binärsystem gibt es nur die Ziffern 0 und 1.\n2. 1010₂ = 10₁₀.\n3. Jede Stelle repräsentiert eine Zweierpotenz.\n4. Computer arbeiten intern mit dem Binärsystem.\n5. 1111₂ = 16₁₀.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1 und 3" },
      { id: "c", text: "Nur 1, 2 und 4" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: 1111₂ = 8 + 4 + 2 + 1 = 15₁₀, nicht 16.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 028 Hexadezimalsystem (leicht) ──
  {
    id: "ma-typk-new4-028",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zum Hexadezimalsystem (Basis 16) sind richtig?\n\n1. Es verwendet die Ziffern 0–9 und die Buchstaben A–F.\n2. A₁₆ = 10₁₀.\n3. F₁₆ = 15₁₀.\n4. FF₁₆ = 255₁₀.\n5. 10₁₆ = 10₁₀.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: 10₁₆ = 1·16 + 0 = 16₁₀, nicht 10₁₀.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 029 Umrechnung zwischen Zahlensystemen (mittel) ──
  {
    id: "ma-typk-new4-029",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zur Umrechnung zwischen Zahlensystemen sind richtig?\n\n1. Dezimal → Binär: Fortgesetzte Division durch 2 mit Aufschreiben der Reste.\n2. Binär → Dezimal: Stellenwerte als Zweierpotenzen addieren.\n3. 4 Binärstellen entsprechen genau einer Hexadezimalstelle.\n4. Oktal (Basis 8) verwendet die Ziffern 0–7.\n5. 8 Binärstellen können maximal die Dezimalzahl 512 darstellen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: 8 Bit können maximal 11111111₂ = 255₁₀ darstellen, nicht 512.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 030 Integration – Grundlagen (leicht) ──
  {
    id: "ma-typk-new4-030",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Integration sind richtig?\n\n1. Das bestimmte Integral ∫_a^b f(x)dx gibt die Fläche unter der Kurve an (mit Vorzeichen).\n2. ∫ x^n dx = x^(n+1)/(n+1) + C für n ≠ −1.\n3. ∫ 1/x dx = ln|x| + C.\n4. ∫ e^x dx = e^x + C.\n5. Das unbestimmte Integral ist die Ableitung von f.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Das unbestimmte Integral ist die Stammfunktion (Umkehrung der Ableitung), nicht die Ableitung selbst.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 031 Hauptsatz der Differential- und Integralrechnung (mittel) ──
  {
    id: "ma-typk-new4-031",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zum Hauptsatz sind richtig?\n\n1. ∫_a^b f(x)dx = F(b) − F(a), wobei F eine Stammfunktion von f ist.\n2. Jede stetige Funktion besitzt eine Stammfunktion.\n3. F'(x) = f(x) bedeutet, dass F Stammfunktion von f ist.\n4. Die Integrationskonstante C fällt beim bestimmten Integral weg.\n5. Zwei Stammfunktionen derselben Funktion unterscheiden sich immer um mehr als eine Konstante.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Zwei Stammfunktionen unterscheiden sich genau um eine Konstante.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 032 Skalarprodukt (leicht) ──
  {
    id: "ma-typk-new4-032",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zum Skalarprodukt sind richtig?\n\n1. a⃗ · b⃗ = |a⃗| · |b⃗| · cos(α).\n2. Das Ergebnis des Skalarprodukts ist eine Zahl (Skalar).\n3. Stehen zwei Vektoren senkrecht aufeinander, ist das Skalarprodukt 0.\n4. a⃗ · b⃗ = a₁b₁ + a₂b₂ + a₃b₃ (Komponentenform).\n5. Das Skalarprodukt ist nicht kommutativ.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1 und 2" },
      { id: "c", text: "Nur 1, 2 und 4" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Das Skalarprodukt ist kommutativ (a⃗ · b⃗ = b⃗ · a⃗).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 033 Kreuzprodukt (mittel) ──
  {
    id: "ma-typk-new4-033",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zum Kreuzprodukt sind richtig?\n\n1. Das Kreuzprodukt zweier Vektoren ergibt einen Vektor.\n2. Der Ergebnisvektor steht senkrecht auf beiden Ausgangsvektoren.\n3. |a⃗ × b⃗| = |a⃗| · |b⃗| · sin(α).\n4. Das Kreuzprodukt ist kommutativ.\n5. Der Betrag des Kreuzprodukts gibt die Fläche des aufgespannten Parallelogramms an.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Das Kreuzprodukt ist antikommutativ (a⃗ × b⃗ = −(b⃗ × a⃗)).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 034 Sinusfunktion Eigenschaften (leicht) ──
  {
    id: "ma-typk-new4-034",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Sinusfunktion sind richtig?\n\n1. Die Sinusfunktion ist periodisch mit Periode 2π.\n2. Der Wertebereich ist [−1, 1].\n3. sin(x) ist eine ungerade Funktion.\n4. Die Sinusfunktion hat Nullstellen bei x = nπ (n ∈ ℤ).\n5. sin(x) hat die Periode π.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Periode von sin(x) ist 2π, nicht π.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 035 Kosinusfunktion Eigenschaften (leicht) ──
  {
    id: "ma-typk-new4-035",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Kosinusfunktion sind richtig?\n\n1. cos(x) ist eine gerade Funktion.\n2. Der Wertebereich ist [−1, 1].\n3. cos(x) = sin(x + π/2).\n4. cos(0) = 1.\n5. Die Kosinusfunktion hat ihre Maxima bei x = nπ (n ∈ ℤ).",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: cos(x) hat Maxima bei x = 2nπ (gerade Vielfache); bei x = π, 3π, ... hat cos(x) Minima.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 036 Tangensfunktion (mittel) ──
  {
    id: "ma-typk-new4-036",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Tangensfunktion sind richtig?\n\n1. tan(x) = sin(x)/cos(x).\n2. Die Tangensfunktion hat Polstellen bei x = π/2 + nπ.\n3. Die Periode von tan(x) ist π.\n4. tan(x) ist eine ungerade Funktion.\n5. Der Wertebereich von tan(x) ist [−1, 1].",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Der Wertebereich von tan(x) ist ganz ℝ (−∞, +∞).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 037 Matrizenrechnung – Addition und Skalarmultiplikation (leicht) ──
  {
    id: "ma-typk-new4-037",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zur Matrizenaddition und Skalarmultiplikation sind richtig?\n\n1. Nur Matrizen gleicher Dimension können addiert werden.\n2. Die Addition erfolgt komponentenweise.\n3. Die Skalarmultiplikation multipliziert jedes Element mit dem Skalar.\n4. Die Matrizenaddition ist kommutativ.\n5. Matrizen verschiedener Dimension können durch Auffüllen mit Nullen addiert werden.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Addition ist nur für gleich-dimensionale Matrizen definiert; ein Auffüllen ändert die Matrix.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 038 Matrizenmultiplikation (mittel) ──
  {
    id: "ma-typk-new4-038",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zur Matrizenmultiplikation sind richtig?\n\n1. A·B ist definiert, wenn die Spaltenanzahl von A gleich der Zeilenanzahl von B ist.\n2. Das Ergebnis einer (m×n)·(n×p)-Multiplikation ist eine (m×p)-Matrix.\n3. Die Matrizenmultiplikation ist assoziativ.\n4. Die Matrizenmultiplikation ist kommutativ.\n5. A·I = I·A = A für die Einheitsmatrix I.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Die Matrizenmultiplikation ist im Allgemeinen nicht kommutativ (A·B ≠ B·A).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 039 Inverse Matrix (schwer) ──
  {
    id: "ma-typk-new4-039",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zur inversen Matrix sind richtig?\n\n1. A⁻¹ existiert genau dann, wenn det(A) ≠ 0.\n2. A · A⁻¹ = A⁻¹ · A = I.\n3. Die Inverse einer 2×2-Matrix wird mit 1/det(A) berechnet.\n4. (AB)⁻¹ = B⁻¹ · A⁻¹.\n5. Jede quadratische Matrix hat eine Inverse.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Singuläre Matrizen (det = 0) haben keine Inverse.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 040 Kreisgleichung (mittel) ──
  {
    id: "ma-typk-new4-040",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zur Kreisgleichung sind richtig?\n\n1. (x − h)² + (y − k)² = r² beschreibt einen Kreis mit Mittelpunkt (h, k).\n2. x² + y² = r² ist ein Kreis um den Ursprung.\n3. Der Umfang eines Kreises ist U = 2πr.\n4. Die Fläche eines Kreises ist A = πr².\n5. Jede Gleichung x² + y² + ax + by + c = 0 beschreibt einen Kreis.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Nicht jede solche Gleichung beschreibt einen Kreis — der Radius könnte sich als negativ oder null ergeben (leere Menge oder Punkt).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 041 Konvergenzkriterien für Reihen (schwer) ──
  {
    id: "ma-typk-new4-041",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zu Konvergenzkriterien für Reihen sind richtig?\n\n1. Eine geometrische Reihe konvergiert, wenn |q| < 1.\n2. Ihre Summe ist a/(1−q) für |q| < 1.\n3. Die harmonische Reihe Σ 1/n divergiert.\n4. Konvergiert die Reihe, muss die Folge der Summanden gegen 0 gehen.\n5. Geht die Folge gegen 0, konvergiert die Reihe stets.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die harmonische Reihe zeigt: 1/n → 0, aber Σ 1/n divergiert. a_n → 0 ist notwendig, aber nicht hinreichend.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 042 Exponentialfunktion (leicht) ──
  {
    id: "ma-typk-new4-042",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Exponentialfunktion e^x sind richtig?\n\n1. e^0 = 1.\n2. e^x ist für alle x ∈ ℝ definiert.\n3. e^x ist immer positiv.\n4. Die Ableitung von e^x ist e^x.\n5. e^x kann auch negative Werte annehmen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: e^x ist stets positiv (Wertebereich (0, ∞)).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 043 Logarithmusfunktion (leicht) ──
  {
    id: "ma-typk-new4-043",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur natürlichen Logarithmusfunktion ln(x) sind richtig?\n\n1. ln(x) ist nur für x > 0 definiert.\n2. ln(1) = 0.\n3. ln(e) = 1.\n4. ln(a·b) = ln(a) + ln(b).\n5. ln(0) = 0.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: ln(0) ist nicht definiert (Grenzwert −∞).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 044 Logarithmusgesetze (mittel) ──
  {
    id: "ma-typk-new4-044",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zu Logarithmusgesetzen sind richtig?\n\n1. log(a·b) = log(a) + log(b).\n2. log(a/b) = log(a) − log(b).\n3. log(a^n) = n · log(a).\n4. Die Basisumrechnung ist log_b(x) = ln(x) / ln(b).\n5. log(a + b) = log(a) + log(b).",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: log(a + b) ≠ log(a) + log(b); die Produktregel gilt nur für Produkte, nicht Summen.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 045 Symmetrische Matrizen (schwer) ──
  {
    id: "ma-typk-new4-045",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu symmetrischen Matrizen sind richtig?\n\n1. Eine Matrix A heißt symmetrisch, wenn A = Aᵀ.\n2. Die Eigenwerte einer symmetrischen Matrix sind reell.\n3. Eigenvektoren zu verschiedenen Eigenwerten stehen senkrecht aufeinander.\n4. Symmetrische Matrizen sind immer diagonalisierbar.\n5. Jede Matrix ist symmetrisch.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt (Spektralsatz). 5 falsch: Nur Matrizen mit a_ij = a_ji für alle i, j sind symmetrisch.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 046 Lineare Unabhängigkeit (mittel) ──
  {
    id: "ma-typk-new4-046",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zur linearen Unabhängigkeit sind richtig?\n\n1. Vektoren sind linear unabhängig, wenn keiner als Linearkombination der anderen darstellbar ist.\n2. Zwei Vektoren sind genau dann linear abhängig, wenn sie kollinear sind.\n3. Im ℝ³ sind maximal 3 Vektoren linear unabhängig.\n4. Die Determinante der Koeffizientenmatrix ist ≠ 0 bei linearer Unabhängigkeit.\n5. Ein System mit dem Nullvektor ist immer linear unabhängig.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Ein System, das den Nullvektor enthält, ist immer linear abhängig.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 047 Bogenlänge und Bogenmaß (leicht) ──
  {
    id: "ma-typk-new4-047",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zum Bogenmaß sind richtig?\n\n1. Das Bogenmaß eines Vollkreises ist 2π.\n2. 180° = π rad.\n3. 90° = π/2 rad.\n4. Die Bogenlänge auf dem Einheitskreis ist b = r · α (α im Bogenmaß).\n5. 360° = π rad.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: 360° = 2π rad, nicht π rad.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 048 Polarkoordinaten (schwer) ──
  {
    id: "ma-typk-new4-048",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zu Polarkoordinaten sind richtig?\n\n1. Ein Punkt wird durch (r, φ) beschrieben (Abstand und Winkel).\n2. x = r · cos(φ) und y = r · sin(φ).\n3. r = √(x² + y²).\n4. tan(φ) = y/x.\n5. Polarkoordinaten sind nur für Punkte mit r > 1 definiert.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Polarkoordinaten sind für alle r ≥ 0 definiert.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 049 Mittelwertsatz der Differentialrechnung (schwer) ──
  {
    id: "ma-typk-new4-049",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zum Mittelwertsatz sind richtig?\n\n1. Ist f stetig auf [a,b] und differenzierbar auf (a,b), gibt es ein c mit f'(c) = (f(b)−f(a))/(b−a).\n2. Geometrisch gibt es eine Tangente parallel zur Sekante.\n3. Der Mittelwertsatz ist eine Verallgemeinerung des Satzes von Rolle.\n4. Der Satz von Rolle besagt: Ist f(a) = f(b), gibt es ein c mit f'(c) = 0.\n5. Der Mittelwertsatz bestimmt den Wert von c eindeutig.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Der Satz garantiert nur die Existenz, nicht die Eindeutigkeit von c.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 050 Potenzfunktionen (leicht) ──
  {
    id: "ma-typk-new4-050",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zu Potenzfunktionen f(x) = x^n sind richtig?\n\n1. Für gerade n ist der Graph achsensymmetrisch zur y-Achse.\n2. Für ungerade n ist der Graph punktsymmetrisch zum Ursprung.\n3. f(x) = x² hat ein Minimum bei x = 0.\n4. f(x) = x³ hat keinen Extrempunkt.\n5. Für n ≥ 2 hat f(x) = x^n immer genau n Nullstellen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: f(x) = x^n hat nur eine Nullstelle bei x = 0 (mit Vielfachheit n).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 051 Polynome – Nullstellen (mittel) ──
  {
    id: "ma-typk-new4-051",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zu Polynomgleichungen sind richtig?\n\n1. Ein Polynom n-ten Grades hat höchstens n reelle Nullstellen.\n2. Komplexe Nullstellen treten bei reellen Koeffizienten paarweise konjugiert auf.\n3. Jedes Polynom ungeraden Grades hat mindestens eine reelle Nullstelle.\n4. Die Vieta-Formeln verknüpfen Koeffizienten mit Nullstellen.\n5. Jedes Polynom zweiten Grades hat zwei reelle Nullstellen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Wenn die Diskriminante negativ ist (b² − 4ac < 0), hat das Polynom keine reellen Nullstellen.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 052 Partialbruchzerlegung (schwer) ──
  {
    id: "ma-typk-new4-052",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Partialbruchzerlegung sind richtig?\n\n1. Sie zerlegt rationale Funktionen in einfachere Brüche.\n2. Der Zählergrad muss kleiner als der Nennergrad sein.\n3. Sie ist hilfreich bei der Integration rationaler Funktionen.\n4. Einfache Nullstellen des Nenners führen zu Brüchen A/(x−a).\n5. Die Partialbruchzerlegung ist nur für Polynome ohne reelle Nullstellen anwendbar.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Auch bei reellen Nullstellen ist die Zerlegung anwendbar — gerade dann ist sie besonders einfach.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 053 Taylor-Reihe (schwer) ──
  {
    id: "ma-typk-new4-053",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Taylor-Reihe sind richtig?\n\n1. Die Taylor-Reihe approximiert eine Funktion durch Polynome.\n2. Die Entwicklung um x₀ = 0 heißt Maclaurin-Reihe.\n3. e^x = 1 + x + x²/2! + x³/3! + ...\n4. Die Konvergenz hängt vom Entwicklungspunkt und der Funktion ab.\n5. Jede Taylor-Reihe konvergiert auf ganz ℝ.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Der Konvergenzradius kann endlich sein (z. B. ln(1+x) konvergiert nur für |x| ≤ 1).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 054 Kettenregel Vertiefung (mittel) ──
  {
    id: "ma-typk-new4-054",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Kettenregel sind richtig?\n\n1. (f(g(x)))' = f'(g(x)) · g'(x).\n2. Die äußere Funktion wird an der inneren Funktion abgeleitet.\n3. (e^(3x))' = 3e^(3x).\n4. (sin(x²))' = 2x · cos(x²).\n5. Die Kettenregel gilt nur für Polynome.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Kettenregel gilt für alle differenzierbaren Funktionen.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 055 Integrationsmethoden – Substitution (schwer) ──
  {
    id: "ma-typk-new4-055",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Substitutionsmethode bei der Integration sind richtig?\n\n1. Sie ist die Umkehrung der Kettenregel.\n2. Man substituiert u = g(x), du = g'(x) dx.\n3. Bei bestimmten Integralen müssen die Grenzen umgerechnet werden.\n4. Sie vereinfacht komplizierte Integrale durch Variablenwechsel.\n5. Die Substitution u = g(x) erfordert, dass g invertierbar ist auf ℝ.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: g muss nur auf dem Integrationsintervall stetig differenzierbar sein, nicht auf ganz ℝ invertierbar.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 056 Partielle Integration (schwer) ──
  {
    id: "ma-typk-new4-056",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur partiellen Integration sind richtig?\n\n1. Sie basiert auf der Produktregel: ∫ u dv = uv − ∫ v du.\n2. Man wählt u so, dass u' einfacher wird.\n3. dv sollte leicht integrierbar sein.\n4. Sie wird z. B. für ∫ x · e^x dx angewendet.\n5. Partielle Integration liefert immer nach einmaliger Anwendung das Ergebnis.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Manchmal muss partielle Integration mehrfach angewendet werden (z. B. ∫ x² · e^x dx).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 057 Rang einer Matrix (schwer) ──
  {
    id: "ma-typk-new4-057",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zum Rang einer Matrix sind richtig?\n\n1. Der Rang ist die Anzahl der linear unabhängigen Zeilen (oder Spalten).\n2. Zeilen- und Spaltenrang sind gleich.\n3. Eine n×n-Matrix mit Rang n ist regulär.\n4. Der Rang kann durch Gauß-Elimination bestimmt werden.\n5. Der Rang einer Matrix kann größer als ihre Zeilenanzahl sein.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Der Rang kann nicht größer sein als das Minimum aus Zeilen- und Spaltenanzahl.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 058 Vektorraum – Grundbegriffe (mittel) ──
  {
    id: "ma-typk-new4-058",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu Vektorräumen sind richtig?\n\n1. Ein Vektorraum besitzt eine Addition und eine Skalarmultiplikation.\n2. Der Nullvektor ist Element jedes Vektorraums.\n3. Zu jedem Vektor gibt es ein additives Inverses.\n4. ℝ² und ℝ³ sind Beispiele für Vektorräume.\n5. Die Menge der natürlichen Zahlen bildet einen Vektorraum.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: ℕ hat keine additiven Inversen (keine negativen Zahlen) und ist kein Vektorraum.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 059 Determinante 3×3 (mittel) ──
  {
    id: "ma-typk-new4-059",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zur 3×3-Determinante sind richtig?\n\n1. Die Regel von Sarrus gilt für 3×3-Matrizen.\n2. Die Determinante kann auch durch Laplace-Entwicklung berechnet werden.\n3. det(A) = 0 bedeutet, dass A singulär ist.\n4. det(A·B) = det(A) · det(B).\n5. Die Determinante ändert sich nicht bei Addition eines Vielfachen einer Zeile zu einer anderen.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Nur 2, 4 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 Aussagen sind korrekt. Elementare Zeilenumformung vom Typ III (Addition eines Vielfachen) ändert die Determinante nicht.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 060 Sinussatz und Kosinussatz (mittel) ──
  {
    id: "ma-typk-new4-060",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu Sinus- und Kosinussatz sind richtig?\n\n1. Der Sinussatz lautet a/sin(α) = b/sin(β) = c/sin(γ).\n2. Der Kosinussatz lautet c² = a² + b² − 2ab·cos(γ).\n3. Der Kosinussatz ist eine Verallgemeinerung des Satzes von Pythagoras.\n4. Für γ = 90° wird der Kosinussatz zum Satz von Pythagoras.\n5. Der Sinussatz gilt nur für rechtwinklige Dreiecke.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Der Sinussatz gilt für alle Dreiecke, nicht nur rechtwinklige.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 061 Folgen – Monotonie und Beschränktheit (mittel) ──
  {
    id: "ma-typk-new4-061",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Monotonie und Beschränktheit von Folgen sind richtig?\n\n1. Eine Folge heißt monoton wachsend, wenn a_(n+1) ≥ a_n für alle n.\n2. Eine Folge heißt beschränkt, wenn es eine Zahl M gibt mit |a_n| ≤ M für alle n.\n3. Jede monoton wachsende und nach oben beschränkte Folge konvergiert.\n4. Jede beschränkte Folge hat eine konvergente Teilfolge (Bolzano-Weierstraß).\n5. Jede monotone Folge konvergiert.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Folge a_n = n ist monoton wachsend, aber divergent (unbeschränkt).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 062 Gleichungen mit Beträgen (mittel) ──
  {
    id: "ma-typk-new4-062",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zu Betragsgleichungen sind richtig?\n\n1. |x| = a hat für a > 0 die Lösungen x = a und x = −a.\n2. |x| ≥ 0 für alle x ∈ ℝ.\n3. |a · b| = |a| · |b|.\n4. |a + b| ≤ |a| + |b| (Dreiecksungleichung).\n5. |x| = −3 hat genau eine Lösung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: |x| = −3 hat keine Lösung, da der Betrag nie negativ ist.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 063 Ungleichungen (leicht) ──
  {
    id: "ma-typk-new4-063",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zu Ungleichungen sind richtig?\n\n1. Bei Multiplikation mit einer negativen Zahl dreht sich das Ungleichungszeichen um.\n2. a < b und c > 0 → a·c < b·c.\n3. a² ≥ 0 für alle a ∈ ℝ.\n4. Aus a < b und b < c folgt a < c (Transitivität).\n5. Quadrieren einer Ungleichung ist immer erlaubt, ohne die Richtung zu ändern.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Bei negativen Werten kann Quadrieren die Richtung ändern (z. B. −3 < −2, aber 9 > 4).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 064 Kegelschnitte – Ellipse (schwer) ──
  {
    id: "ma-typk-new4-064",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zur Ellipse sind richtig?\n\n1. Die Gleichung x²/a² + y²/b² = 1 beschreibt eine Ellipse.\n2. a und b sind die Halbachsen.\n3. Für a = b erhält man einen Kreis.\n4. Die Brennpunkte liegen auf der längeren Achse.\n5. Die Summe der Abstände zu beiden Brennpunkten ist für alle Punkte auf der Ellipse gleich 2b.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Summe der Abstände ist 2a (die große Achse), nicht 2b.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 065 Vollständige Induktion (schwer) ──
  {
    id: "ma-typk-new4-065",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zur vollständigen Induktion sind richtig?\n\n1. Im Induktionsanfang wird die Aussage für n = n₀ geprüft.\n2. Im Induktionsschritt wird von n auf n+1 geschlossen.\n3. Die Induktionsvoraussetzung ist die Annahme, dass die Aussage für n gilt.\n4. Die vollständige Induktion beweist die Aussage für alle natürlichen Zahlen ≥ n₀.\n5. Es genügt, den Induktionsschritt zu zeigen; der Anfang ist nicht nötig.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Ohne Induktionsanfang ist der Beweis nicht gültig — beide Teile sind notwendig.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 066 Gaußsche Summenformel (leicht) ──
  {
    id: "ma-typk-new4-066",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zur Gaußschen Summenformel sind richtig?\n\n1. Σ(k=1 bis n) k = n(n+1)/2.\n2. Die Summe der ersten 100 natürlichen Zahlen ist 5050.\n3. Die Formel kann durch vollständige Induktion bewiesen werden.\n4. Σ(k=1 bis n) k² = n(n+1)(2n+1)/6.\n5. Σ(k=1 bis n) k = n².",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die korrekte Formel ist n(n+1)/2, nicht n².",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 067 Binomischer Lehrsatz (mittel) ──
  {
    id: "ma-typk-new4-067",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zum binomischen Lehrsatz sind richtig?\n\n1. (a+b)^n = Σ (n über k) · a^(n−k) · b^k.\n2. Die Binomialkoeffizienten (n über k) stehen im Pascalschen Dreieck.\n3. (n über k) = n! / (k! · (n−k)!).\n4. (a+b)² = a² + 2ab + b² ist ein Spezialfall.\n5. (n über k) ist nur für k ≤ n/2 definiert.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: (n über k) ist für alle 0 ≤ k ≤ n definiert.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 068 Abstand zweier Punkte (leicht) ──
  {
    id: "ma-typk-new4-068",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zum Abstand zweier Punkte sind richtig?\n\n1. In 2D: d = √((x₂−x₁)² + (y₂−y₁)²).\n2. In 3D: d = √((x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²).\n3. Der Abstand ist immer ≥ 0.\n4. Der Abstand eines Punktes zu sich selbst ist 0.\n5. Der Abstand kann negativ sein.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Der Abstand ist als Wurzel aus einer Summe von Quadraten definiert und daher stets ≥ 0.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 069 Mittelpunkt und Teilungsverhältnis (leicht) ──
  {
    id: "ma-typk-new4-069",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zum Mittelpunkt einer Strecke sind richtig?\n\n1. Der Mittelpunkt hat die Koordinaten ((x₁+x₂)/2, (y₁+y₂)/2).\n2. Er teilt die Strecke in zwei gleiche Hälften.\n3. Im 3D gilt M = ((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2).\n4. Der Mittelpunkt liegt auf der Verbindungsstrecke.\n5. Der Mittelpunkt liegt immer im Ursprung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Der Mittelpunkt liegt nur dann im Ursprung, wenn die Punkte symmetrisch zum Ursprung liegen.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 070 Quadratische Gleichungen (leicht) ──
  {
    id: "ma-typk-new4-070",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zu quadratischen Gleichungen sind richtig?\n\n1. Die Lösungsformel ist x = (−b ± √(b²−4ac)) / (2a).\n2. Die Diskriminante D = b² − 4ac bestimmt die Anzahl der reellen Lösungen.\n3. D > 0 → zwei verschiedene reelle Lösungen.\n4. D = 0 → eine doppelte reelle Lösung.\n5. D < 0 → unendlich viele reelle Lösungen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: D < 0 bedeutet keine reellen Lösungen (nur komplexe).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 071 Potenzgesetze (leicht) ──
  {
    id: "ma-typk-new4-071",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zu Potenzgesetzen sind richtig?\n\n1. a^m · a^n = a^(m+n).\n2. (a^m)^n = a^(m·n).\n3. a^0 = 1 für a ≠ 0.\n4. a^(−n) = 1/a^n für a ≠ 0.\n5. (a+b)^n = a^n + b^n.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: (a+b)^n ≠ a^n + b^n (eine Summe kann nicht so vereinfacht werden).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 072 Wurzelgesetze (mittel) ──
  {
    id: "ma-typk-new4-072",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zu Wurzelgesetzen sind richtig?\n\n1. √(a·b) = √a · √b für a, b ≥ 0.\n2. √(a/b) = √a / √b für a ≥ 0, b > 0.\n3. ⁿ√a = a^(1/n).\n4. √(a²) = |a|.\n5. √(a+b) = √a + √b.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: √(a+b) ≠ √a + √b; die Wurzel einer Summe ist nicht die Summe der Wurzeln.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 073 Vektoren im Raum – Betrag (leicht) ──
  {
    id: "ma-typk-new4-073",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zum Betrag eines Vektors sind richtig?\n\n1. |v⃗| = √(v₁² + v₂² + v₃²) im ℝ³.\n2. Der Betrag eines Vektors ist immer ≥ 0.\n3. |v⃗| = 0 genau dann, wenn v⃗ der Nullvektor ist.\n4. Ein Einheitsvektor hat den Betrag 1.\n5. Der Betrag eines Vektors kann negativ sein.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Der Betrag ist als Wurzel definiert und kann nicht negativ sein.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 074 Doppelverhältnis und cos(2α) Formen (schwer) ──
  {
    id: "ma-typk-new4-074",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu cos(2α) sind richtig?\n\n1. cos(2α) = cos²α − sin²α.\n2. cos(2α) = 2cos²α − 1.\n3. cos(2α) = 1 − 2sin²α.\n4. Aus cos(2α) = 2cos²α − 1 folgt cos²α = (1 + cos(2α))/2.\n5. cos(2α) = 2·sin α · cos α.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: 2·sin α · cos α = sin(2α), nicht cos(2α).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 075 Ebenengleichung – Umrechnungen (schwer) ──
  {
    id: "ma-typk-new4-075",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zu Ebenengleichungsformen sind richtig?\n\n1. Die Parameterform lässt sich in die Koordinatenform umrechnen.\n2. Der Normalenvektor der Koordinatenform ax + by + cz = d ist (a, b, c).\n3. Die Hessesche Normalform hat |n⃗| = 1.\n4. Zwei Ebenen sind parallel, wenn ihre Normalenvektoren kollinear sind.\n5. Die Parameterform einer Ebene enthält genau einen Richtungsvektor.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Parameterform enthält zwei Richtungsvektoren (die die Ebene aufspannen).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
];
