/**
 * Mathematik Typ-K Pool 5 (Kombinationsaufgaben) — 75 Fragen im Question-Format.
 * IDs: ma-typk-new5-001 bis ma-typk-new5-075.
 * Themen: Vektorrechnung Vertiefung, Differentialgleichungen, Flächen/Volumina,
 * Fehlerrechnung/Näherungen, Finanzmathematik.
 * Schwierigkeit: ~30 % leicht, ~45 % mittel, ~25 % schwer.
 * KEINE Stochastik.
 */
import type { Question } from "./index";

export const mathematikTypKNew5: Question[] = [
  // ══════════════════════════════════════════════════
  //  VEKTORRECHNUNG VERTIEFUNG (001–015)
  // ══════════════════════════════════════════════════

  // ── 001 Parameterdarstellung Gerade (leicht) ──
  {
    id: "ma-typk-new5-001",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Parameterdarstellung einer Geraden sind richtig?\n\n1. Eine Gerade im Raum wird durch einen Stützvektor und einen Richtungsvektor beschrieben.\n2. Die Parameterdarstellung lautet r⃗(t) = a⃗ + t · b⃗.\n3. Verschiedene Stütz- und Richtungsvektoren können die gleiche Gerade beschreiben.\n4. Der Parameter t darf nur positive Werte annehmen.\n5. Zwei Geraden im Raum sind genau dann parallel, wenn ihre Richtungsvektoren linear abhängig sind.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Der Parameter t ∈ ℝ darf alle reellen Werte annehmen — positive, negative und null.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 002 Parameterdarstellung Ebene (leicht) ──
  {
    id: "ma-typk-new5-002",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Parameterdarstellung einer Ebene sind richtig?\n\n1. Eine Ebene wird durch einen Stützvektor und zwei Richtungsvektoren beschrieben.\n2. Die Parameterdarstellung lautet r⃗(s,t) = a⃗ + s · b⃗ + t · c⃗.\n3. Die beiden Richtungsvektoren dürfen nicht parallel sein.\n4. Jede Ebene hat genau eine Parameterdarstellung.\n5. Der Normalenvektor steht senkrecht auf beiden Richtungsvektoren.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Es gibt unendlich viele Parameterdarstellungen für dieselbe Ebene (verschiedene Stütz- und Richtungsvektoren möglich).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 003 Skalarprodukt (leicht) ──
  {
    id: "ma-typk-new5-003",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zum Skalarprodukt sind richtig?\n\n1. Das Skalarprodukt zweier Vektoren ergibt eine Zahl (Skalar).\n2. a⃗ · b⃗ = |a⃗| · |b⃗| · cos(φ), wobei φ der eingeschlossene Winkel ist.\n3. Wenn a⃗ · b⃗ = 0, stehen die Vektoren senkrecht aufeinander.\n4. Das Skalarprodukt ist kommutativ.\n5. Das Skalarprodukt zweier paralleler Vektoren ist immer null.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Parallele Vektoren haben φ = 0° (oder 180°), also cos(φ) = ±1, d. h. das Skalarprodukt ist i. d. R. nicht null.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 004 Kreuzprodukt (mittel) ──
  {
    id: "ma-typk-new5-004",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zum Kreuzprodukt sind richtig?\n\n1. Das Kreuzprodukt zweier Vektoren ergibt einen Vektor.\n2. Der Ergebnisvektor steht senkrecht auf beiden Ausgangsvektoren.\n3. |a⃗ × b⃗| = |a⃗| · |b⃗| · sin(φ).\n4. Das Kreuzprodukt ist kommutativ.\n5. Der Betrag des Kreuzprodukts entspricht der Fläche des aufgespannten Parallelogramms.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Das Kreuzprodukt ist antikommutativ: a⃗ × b⃗ = −(b⃗ × a⃗).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 005 Schnittwinkel zweier Geraden (mittel) ──
  {
    id: "ma-typk-new5-005",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zum Schnittwinkel zweier Geraden im Raum sind richtig?\n\n1. Der Schnittwinkel wird über das Skalarprodukt der Richtungsvektoren berechnet.\n2. cos(φ) = |a⃗ · b⃗| / (|a⃗| · |b⃗|) ergibt den spitzen Schnittwinkel.\n3. Zwei Geraden im Raum schneiden sich immer.\n4. Windschiefe Geraden haben keinen Schnittpunkt.\n5. Der Schnittwinkel liegt immer zwischen 0° und 90°.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Zwei Geraden im Raum können sich schneiden, parallel sein oder windschief zueinander stehen.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 006 Abstand Punkt-Gerade (schwer) ──
  {
    id: "ma-typk-new5-006",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zum Abstand eines Punktes P von einer Geraden g sind richtig?\n\n1. Der Abstand ist die kürzeste Verbindung von P zur Geraden.\n2. Der Abstand kann mit dem Kreuzprodukt berechnet werden: d = |AP⃗ × b⃗| / |b⃗|.\n3. Der Fußpunkt des Lots liegt auf der Geraden.\n4. Der Abstandsvektor steht senkrecht auf dem Richtungsvektor.\n5. Liegt P auf der Geraden, ist der Abstand negativ.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Der Abstand ist stets ≥ 0. Liegt P auf der Geraden, ist der Abstand null, nicht negativ.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 007 Abstand Punkt-Ebene (mittel) ──
  {
    id: "ma-typk-new5-007",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zum Abstand eines Punktes von einer Ebene sind richtig?\n\n1. Der Abstand wird über die Hesse'sche Normalform berechnet.\n2. d = |n⃗ · (P⃗ − A⃗)| / |n⃗|, wobei n⃗ der Normalenvektor ist.\n3. Der Abstand ist immer positiv oder null.\n4. Der Normalenvektor der Ebene zeigt in Richtung des kürzesten Abstands.\n5. Alle Punkte einer Ebene haben den Abstand null zur Ebene.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Nur 1, 4 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 korrekt. Die Hesse'sche Normalform gibt den Abstand direkt als Betrag; der Normalenvektor weist senkrecht zur Ebene.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 008 Spatprodukt (schwer) ──
  {
    id: "ma-typk-new5-008",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zum Spatprodukt sind richtig?\n\n1. Das Spatprodukt dreier Vektoren berechnet sich als a⃗ · (b⃗ × c⃗).\n2. Der Betrag des Spatprodukts gibt das Volumen des Spats (Parallelepipeds) an.\n3. Ist das Spatprodukt null, liegen die drei Vektoren in einer Ebene.\n4. Das Spatprodukt ist eine skalare Größe.\n5. Das Spatprodukt ist unabhängig von der Reihenfolge der Vektoren.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Das Spatprodukt ändert sein Vorzeichen bei Vertauschung zweier Vektoren (zyklische Vertauschung lässt es gleich, antizyklische kehrt das Vorzeichen um).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 009 Lineare Abhängigkeit (leicht) ──
  {
    id: "ma-typk-new5-009",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur linearen Abhängigkeit von Vektoren sind richtig?\n\n1. Zwei Vektoren sind linear abhängig, wenn einer ein Vielfaches des anderen ist.\n2. Linear abhängige Vektoren in ℝ² liegen auf einer Geraden durch den Ursprung.\n3. Drei linear unabhängige Vektoren in ℝ³ bilden eine Basis.\n4. Der Nullvektor ist zu jedem Vektor linear abhängig.\n5. Zwei Vektoren in ℝ³ sind immer linear unabhängig.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Zwei Vektoren in ℝ³ können linear abhängig sein, z. B. (1,0,0) und (2,0,0).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 010 Normalenform der Ebene (mittel) ──
  {
    id: "ma-typk-new5-010",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Normalenform einer Ebene sind richtig?\n\n1. Die Normalenform lautet n⃗ · (r⃗ − a⃗) = 0.\n2. n⃗ steht senkrecht auf der Ebene.\n3. Der Normalenvektor kann über das Kreuzprodukt der Richtungsvektoren berechnet werden.\n4. Jede Ebene hat genau einen Normalenvektor.\n5. Die Koordinatenform ax + by + cz = d lässt sich aus der Normalenform ableiten.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Der Normalenvektor ist nur bis auf skalare Vielfache eindeutig — jedes Vielfache von n⃗ ist ebenfalls ein Normalenvektor.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 011 Windschief vs. parallel (mittel) ──
  {
    id: "ma-typk-new5-011",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Lagebeziehung zweier Geraden im ℝ³ sind richtig?\n\n1. Zwei Geraden sind windschief, wenn sie sich nicht schneiden und nicht parallel sind.\n2. Windschiefe Geraden gibt es nur im dreidimensionalen Raum.\n3. Parallele Geraden haben proportionale Richtungsvektoren.\n4. Zum Prüfen auf Schnitt setzt man die Parameterdarstellungen gleich.\n5. Zwei Geraden in der Ebene (ℝ²) können windschief sein.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: In ℝ² können Geraden sich nur schneiden oder parallel sein — windschiefe Geraden existieren nur ab ℝ³.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 012 Ebene-Gerade-Schnitt (schwer) ──
  {
    id: "ma-typk-new5-012",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zum Schnitt einer Geraden mit einer Ebene sind richtig?\n\n1. Man setzt die Geradengleichung in die Ebenengleichung ein.\n2. Ergibt sich ein eindeutiger Parameterwert, gibt es genau einen Schnittpunkt.\n3. Ergibt sich ein Widerspruch, liegt die Gerade parallel zur Ebene.\n4. Ergibt sich eine wahre Aussage (0 = 0), liegt die Gerade in der Ebene.\n5. Der Schnittwinkel berechnet sich mit sin(α) = |n⃗ · b⃗| / (|n⃗| · |b⃗|).",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Nur 1, 4 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 korrekt. Der Schnittwinkel zwischen Gerade und Ebene ist das Komplement zum Winkel zwischen Richtungsvektor und Normalenvektor, daher sin statt cos.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 013 Projektion (mittel) ──
  {
    id: "ma-typk-new5-013",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur orthogonalen Projektion eines Vektors sind richtig?\n\n1. Die Projektion von a⃗ auf b⃗ ergibt die Komponente von a⃗ in Richtung b⃗.\n2. Die Formel lautet proj_b(a⃗) = (a⃗ · b⃗ / |b⃗|²) · b⃗.\n3. Die Projektion eines Vektors auf sich selbst ergibt den Vektor selbst.\n4. Der Restvektor (a⃗ − proj) steht senkrecht auf b⃗.\n5. Die Projektion kann länger sein als der Originalvektor.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Projektion hat stets eine Länge ≤ |a⃗|, da sie die Komponente in einer Richtung ist (cos(φ) ≤ 1).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 014 Abstand windschiefer Geraden (schwer) ──
  {
    id: "ma-typk-new5-014",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zum Abstand windschiefer Geraden sind richtig?\n\n1. Der Abstand ist die Länge des gemeinsamen Lots.\n2. Der Abstand kann über das Spatprodukt berechnet werden: d = |a⃗₁₂ · (b⃗₁ × b⃗₂)| / |b⃗₁ × b⃗₂|.\n3. Der Verbindungsvektor des kürzesten Abstands steht senkrecht auf beiden Richtungsvektoren.\n4. Der Abstand windschiefer Geraden ist immer positiv.\n5. Parallele Geraden sind ein Spezialfall windschiefer Geraden.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Parallele Geraden sind nicht windschief — windschiefe Geraden haben per Definition nicht-parallele Richtungsvektoren.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 015 Vektorbetrag (leicht) ──
  {
    id: "ma-typk-new5-015",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zum Betrag eines Vektors sind richtig?\n\n1. Der Betrag |v⃗| gibt die Länge des Vektors an.\n2. |v⃗| = √(v₁² + v₂² + v₃²) in ℝ³.\n3. Der Betrag ist stets ≥ 0.\n4. Nur der Nullvektor hat den Betrag 0.\n5. Der Betrag eines Einheitsvektors ist 1.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 5" },
      { id: "d", text: "Nur 2, 4 und 5" },
      { id: "e", text: "Nur 1, 3 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 korrekt. Der Betrag ist eine Norm und erfüllt Definitheit (nur Nullvektor hat Betrag 0), Nichtnegativität und alle Normaxiome.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },

  // ══════════════════════════════════════════════════
  //  DIFFERENTIALGLEICHUNGEN GRUNDLAGEN (016–030)
  // ══════════════════════════════════════════════════

  // ── 016 Grundbegriffe DGL (leicht) ──
  {
    id: "ma-typk-new5-016",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zu Differentialgleichungen (DGL) sind richtig?\n\n1. Eine DGL enthält eine unbekannte Funktion und ihre Ableitungen.\n2. Die Ordnung einer DGL ist die höchste vorkommende Ableitung.\n3. y' = 2x ist eine DGL erster Ordnung.\n4. Die allgemeine Lösung einer DGL enthält Integrationskonstanten.\n5. Jede DGL hat genau eine Lösung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die allgemeine Lösung enthält Konstanten und beschreibt eine Schar von Lösungen. Erst durch Anfangsbedingungen ergibt sich eine eindeutige Lösung.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 017 Trennung der Variablen (mittel) ──
  {
    id: "ma-typk-new5-017",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Trennung der Variablen sind richtig?\n\n1. Die Methode funktioniert bei DGL der Form y' = f(x) · g(y).\n2. Man bringt alle y-Terme auf eine Seite und alle x-Terme auf die andere.\n3. Anschließend integriert man beide Seiten.\n4. Die Methode funktioniert für jede DGL erster Ordnung.\n5. Beispiel: y' = xy kann durch Trennung gelöst werden.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Die Trennung der Variablen funktioniert nur, wenn sich die DGL in die Form f(y)dy = g(x)dx bringen lässt — nicht bei jeder DGL erster Ordnung.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 018 Exponentielles Wachstum (leicht) ──
  {
    id: "ma-typk-new5-018",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zum exponentiellen Wachstum sind richtig?\n\n1. Die DGL lautet y' = k · y mit k > 0.\n2. Die Lösung ist y(t) = y₀ · e^(kt).\n3. Die Verdopplungszeit ist T₂ = ln(2)/k.\n4. Exponentielles Wachstum ist unbegrenzt.\n5. Ein Bakterienwachstum in der Anfangsphase folgt näherungsweise exponentiellem Wachstum.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Nur 1, 4 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 korrekt. Exponentielles Wachstum ist mathematisch unbegrenzt; in der Realität wird es durch Ressourcen begrenzt (→ logistisches Wachstum).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 019 Exponentieller Zerfall (leicht) ──
  {
    id: "ma-typk-new5-019",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zum exponentiellen Zerfall sind richtig?\n\n1. Die DGL lautet y' = −k · y mit k > 0.\n2. Die Lösung ist y(t) = y₀ · e^(−kt).\n3. Die Halbwertszeit ist T½ = ln(2)/k.\n4. Der Zerfall erreicht nach endlicher Zeit den Wert null.\n5. Radioaktiver Zerfall folgt diesem Gesetz.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Mathematisch erreicht die Exponentialfunktion nie den Wert null (Asymptote); der Bestand nähert sich nur asymptotisch null an.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 020 Logistisches Wachstum (mittel) ──
  {
    id: "ma-typk-new5-020",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zum logistischen Wachstum sind richtig?\n\n1. Die DGL lautet y' = k · y · (1 − y/K), wobei K die Kapazitätsgrenze ist.\n2. Für kleine y verhält sich das Wachstum näherungsweise exponentiell.\n3. Der Wendepunkt der Wachstumskurve liegt bei y = K/2.\n4. Für t → ∞ nähert sich y dem Wert K.\n5. Die Kapazitätsgrenze K wird stets überschritten.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Beim logistischen Wachstum nähert sich y asymptotisch K an, überschreitet K aber nicht (sofern y₀ < K).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 021 Newton'sches Abkühlungsgesetz (mittel) ──
  {
    id: "ma-typk-new5-021",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zum Newton'schen Abkühlungsgesetz sind richtig?\n\n1. Die DGL lautet T'(t) = −k · (T − T_U), wobei T_U die Umgebungstemperatur ist.\n2. Die Lösung ist T(t) = T_U + (T₀ − T_U) · e^(−kt).\n3. Die Abkühlungsrate ist proportional zur Temperaturdifferenz.\n4. Für t → ∞ nähert sich T dem Wert T_U.\n5. Die Abkühlung verläuft linear.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Abkühlung verläuft exponentiell, nicht linear — die Temperatur nähert sich asymptotisch T_U an.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 022 Lineare DGL 1. Ordnung (schwer) ──
  {
    id: "ma-typk-new5-022",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur linearen DGL erster Ordnung y' + p(x)·y = q(x) sind richtig?\n\n1. Sie heißt homogen, wenn q(x) = 0.\n2. Die Lösung der homogenen DGL ist y_h = C · e^(−∫p(x)dx).\n3. Die allgemeine Lösung der inhomogenen DGL ist y = y_h + y_p.\n4. Der integrierende Faktor ist μ(x) = e^(∫p(x)dx).\n5. Jede lineare DGL 1. Ordnung kann durch Trennung der Variablen gelöst werden.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Nur die homogene lineare DGL ist separabel; die inhomogene (q(x) ≠ 0) ist i. d. R. nicht durch Trennung lösbar — man braucht den integrierenden Faktor.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 023 Anfangswertproblem (mittel) ──
  {
    id: "ma-typk-new5-023",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zum Anfangswertproblem (AWP) sind richtig?\n\n1. Ein AWP besteht aus einer DGL und einer Anfangsbedingung y(x₀) = y₀.\n2. Die Anfangsbedingung legt die Integrationskonstante fest.\n3. Nach dem Satz von Picard-Lindelöf hat ein AWP unter bestimmten Bedingungen eine eindeutige Lösung.\n4. Ohne Anfangsbedingung gibt es unendlich viele Lösungen.\n5. Die Anfangsbedingung darf beliebig gewählt werden, ohne die Existenz zu beeinflussen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Nicht für jede Anfangsbedingung existiert eine Lösung (die Voraussetzungen des Existenzsatzes müssen erfüllt sein).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 024 Richtungsfeld (mittel) ──
  {
    id: "ma-typk-new5-024",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zum Richtungsfeld einer DGL sind richtig?\n\n1. Im Richtungsfeld wird in jedem Punkt (x, y) die Steigung y'(x, y) als kurzer Strich eingetragen.\n2. Lösungskurven folgen den Richtungselementen (Tangenten).\n3. Lösungskurven im Richtungsfeld dürfen sich kreuzen.\n4. Das Richtungsfeld erlaubt eine qualitative Analyse ohne explizite Lösung.\n5. Das Richtungsfeld ist nur für lineare DGL definiert.",
    options: [
      { id: "a", text: "Nur 1, 2 und 4" },
      { id: "b", text: "Nur 1, 2, 3 und 4" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 2 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4 korrekt. 3 falsch: Bei Eindeutigkeit der Lösung (Picard-Lindelöf) kreuzen sich Lösungskurven nicht. 5 falsch: Das Richtungsfeld kann für jede DGL erster Ordnung gezeichnet werden.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 025 DGL 2. Ordnung (schwer) ──
  {
    id: "ma-typk-new5-025",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur linearen DGL 2. Ordnung y'' + ay' + by = 0 (a, b konstant) sind richtig?\n\n1. Der Lösungsansatz ist y = e^(λx).\n2. Die charakteristische Gleichung lautet λ² + aλ + b = 0.\n3. Bei zwei reellen Nullstellen ist die Lösung y = C₁e^(λ₁x) + C₂e^(λ₂x).\n4. Bei komplexen Nullstellen treten Sinus- und Kosinusfunktionen auf.\n5. Die allgemeine Lösung enthält eine Integrationskonstante.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Eine DGL 2. Ordnung hat zwei Integrationskonstanten (C₁ und C₂), nicht nur eine.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 026 Schwingungsgleichung (schwer) ──
  {
    id: "ma-typk-new5-026",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Schwingungsgleichung y'' + ω²y = 0 sind richtig?\n\n1. Die allgemeine Lösung ist y = A·cos(ωt) + B·sin(ωt).\n2. ω ist die Kreisfrequenz der Schwingung.\n3. Die Schwingungsdauer ist T = 2π/ω.\n4. Die Amplitude ist √(A² + B²).\n5. Die Schwingung ist gedämpft.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: y'' + ω²y = 0 beschreibt eine ungedämpfte Schwingung. Für Dämpfung müsste ein Term y' vorkommen.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 027 Euler-Verfahren (mittel) ──
  {
    id: "ma-typk-new5-027",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zum Euler-Verfahren sind richtig?\n\n1. Es ist ein numerisches Verfahren zur näherungsweisen Lösung von DGL.\n2. Die Näherung berechnet sich als y_{n+1} = y_n + h · f(x_n, y_n).\n3. h ist die Schrittweite.\n4. Kleinere Schrittweiten liefern genauere Ergebnisse.\n5. Das Euler-Verfahren liefert stets die exakte Lösung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Das Euler-Verfahren ist eine Näherung — es liefert nur dann die exakte Lösung, wenn die Funktion linear in y ist und h exakt gewählt wird.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 028 Gleichgewichtslösungen (mittel) ──
  {
    id: "ma-typk-new5-028",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zu Gleichgewichtslösungen einer DGL y' = f(y) sind richtig?\n\n1. Gleichgewichtslösungen sind konstante Funktionen y(t) = c mit f(c) = 0.\n2. Ein stabiles Gleichgewicht zieht benachbarte Lösungen an.\n3. Ein instabiles Gleichgewicht stößt benachbarte Lösungen ab.\n4. Die Stabilität kann anhand des Vorzeichens von f'(c) beurteilt werden.\n5. Jede autonome DGL hat mindestens ein Gleichgewicht.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt (f'(c) < 0 → stabil, f'(c) > 0 → instabil). 5 falsch: z. B. y' = 1 hat kein Gleichgewicht, da f(y) = 1 ≠ 0 für alle y.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 029 Pharmakokinetik (mittel) ──
  {
    id: "ma-typk-new5-029",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur pharmakokinetischen Modellierung sind richtig?\n\n1. Die Elimination eines Medikaments folgt oft einem exponentiellen Zerfall.\n2. Die Eliminationskonstante k bestimmt die Geschwindigkeit des Abbaus.\n3. Die Halbwertszeit eines Medikaments berechnet sich als t½ = ln(2)/k.\n4. Bei wiederholter Gabe stellt sich ein Steady State ein.\n5. Im Steady State ist die Konzentration zeitlich konstant.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Im Steady State schwankt die Konzentration noch zwischen Spitzen- und Talspiegel — der Durchschnittswert bleibt konstant, nicht die Momentankonzentration.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 030 Exakte DGL (schwer) ──
  {
    id: "ma-typk-new5-030",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur exakten DGL M(x,y)dx + N(x,y)dy = 0 sind richtig?\n\n1. Die DGL heißt exakt, wenn ∂M/∂y = ∂N/∂x.\n2. Bei einer exakten DGL existiert eine Stammfunktion F(x,y) mit dF = M dx + N dy.\n3. Die Lösung ist F(x,y) = C (Niveaulinien).\n4. Ist die DGL nicht exakt, kann ein integrierender Faktor sie exakt machen.\n5. Jede DGL erster Ordnung ist exakt.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Nur DGL, die die Bedingung ∂M/∂y = ∂N/∂x erfüllen, sind exakt — das ist nicht bei jeder DGL der Fall.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },

  // ══════════════════════════════════════════════════
  //  FLÄCHEN UND VOLUMINA (031–045)
  // ══════════════════════════════════════════════════

  // ── 031 Fläche unter Kurve (leicht) ──
  {
    id: "ma-typk-new5-031",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Flächenberechnung mit Integralen sind richtig?\n\n1. Die Fläche unter einer Kurve f(x) ≥ 0 im Intervall [a,b] ist ∫_a^b f(x)dx.\n2. Liegt die Kurve unter der x-Achse, ist das Integral negativ.\n3. Für die Fläche zwischen Kurve und x-Achse verwendet man |∫f(x)dx| oder trennt in positive und negative Bereiche.\n4. Die Fläche zwischen zwei Kurven ist ∫_a^b |f(x) − g(x)|dx.\n5. Das Integral einer konstanten Funktion f(x) = c ergibt die Fläche c · (b − a).",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Nur 1, 4 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 korrekt. Beachte: Für die geometrische Fläche muss man Vorzeichen berücksichtigen und bei f(x) < 0 den Betrag nehmen.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 032 Fläche zwischen Kurven (mittel) ──
  {
    id: "ma-typk-new5-032",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Fläche zwischen zwei Kurven sind richtig?\n\n1. Die Fläche wird durch ∫_a^b |f(x) − g(x)|dx berechnet.\n2. Die Schnittpunkte der Kurven bestimmen die Integrationsgrenzen.\n3. Man muss prüfen, welche Kurve im Intervall oben liegt.\n4. Die Fläche ist stets positiv.\n5. Wenn sich die Kurven nicht schneiden, ist die Fläche null.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Auch wenn sich die Kurven im betrachteten Intervall nicht schneiden, kann die Fläche zwischen ihnen positiv sein (z. B. f(x) = 2, g(x) = 1 im Intervall [0,1]).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 033 Rotationsvolumen (mittel) ──
  {
    id: "ma-typk-new5-033",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zum Rotationsvolumen sind richtig?\n\n1. Das Volumen bei Rotation um die x-Achse ist V = π · ∫_a^b [f(x)]² dx.\n2. Es werden Kreisscheiben senkrecht zur x-Achse aufsummiert.\n3. Bei Rotation um die y-Achse ist V = π · ∫_c^d [g(y)]² dy.\n4. Die Mantelfläche des Rotationskörpers ergibt sich durch dasselbe Integral.\n5. Das Rotationsvolumen einer Halbkreisfläche ergibt eine Kugel.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Die Mantelfläche (Oberfläche) wird mit einem anderen Integral berechnet: A = 2π · ∫f(x)·√(1+[f'(x)]²) dx.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 034 Kugelvolumen durch Integration (mittel) ──
  {
    id: "ma-typk-new5-034",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Herleitung des Kugelvolumens durch Integration sind richtig?\n\n1. Man rotiert den Halbkreis f(x) = √(r² − x²) um die x-Achse.\n2. V = π · ∫_{−r}^{r} (r² − x²) dx.\n3. Das Ergebnis ist V = (4/3)πr³.\n4. Die Kugeloberfläche ist die Ableitung des Volumens nach r: A = dV/dr = 4πr².\n5. Das Integral lässt sich nur numerisch berechnen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Das Integral ∫(r² − x²)dx = r²x − x³/3 ist elementar lösbar.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 035 Kegelvolumen (leicht) ──
  {
    id: "ma-typk-new5-035",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zum Kegelvolumen sind richtig?\n\n1. Das Volumen eines Kegels ist V = (1/3) · π · r² · h.\n2. Ein Kegel hat ein Drittel des Volumens des umschreibenden Zylinders.\n3. Die Mantelfläche ist M = π · r · s (s = Mantellinie).\n4. Das Kegelvolumen kann durch Rotation einer Geraden f(x) = (r/h)·x um die x-Achse hergeleitet werden.\n5. Das Volumen eines Kegels ist unabhängig von der Höhe.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Das Volumen V = (1/3)πr²h hängt direkt von der Höhe h ab.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 036 Mantelfläche (schwer) ──
  {
    id: "ma-typk-new5-036",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Mantelfläche eines Rotationskörpers sind richtig?\n\n1. Die Mantelfläche bei Rotation um die x-Achse ist A = 2π · ∫_a^b f(x) · √(1 + [f'(x)]²) dx.\n2. √(1 + [f'(x)]²) ist der Korrekturfaktor für die Bogenlänge.\n3. Bei f(x) = r (Zylinder) ergibt sich A = 2πr(b−a).\n4. Die Mantelfläche hat die gleiche Formel wie das Rotationsvolumen.\n5. Die Mantelfläche ist stets größer als die Grundfläche.",
    options: [
      { id: "a", text: "Nur 1, 2 und 3" },
      { id: "b", text: "Nur 1 und 2" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 2 und 3" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3 korrekt. 4 falsch: Mantelfläche und Volumen haben verschiedene Formeln (2π·f·ds vs. π·f²·dx). 5 falsch: Bei einem sehr flachen Rotationskörper kann die Grundfläche größer sein.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 037 Bogenlänge (mittel) ──
  {
    id: "ma-typk-new5-037",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Bogenlänge einer Kurve sind richtig?\n\n1. Die Bogenlänge berechnet sich als L = ∫_a^b √(1 + [f'(x)]²) dx.\n2. Für eine Gerade f(x) = mx + n ergibt sich L = (b−a)·√(1+m²).\n3. Die Bogenlänge eines Kreisbogens ist L = r · φ (φ im Bogenmaß).\n4. Die Bogenlänge ist stets größer oder gleich der Sehne.\n5. Die Bogenlänge einer Parabel kann nur numerisch berechnet werden.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 3" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Bogenlänge einer Parabel kann analytisch (exakt) berechnet werden — das Integral ist elementar lösbar mittels Substitution.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 038 Schwerpunkt (schwer) ──
  {
    id: "ma-typk-new5-038",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zum Schwerpunkt einer ebenen Fläche sind richtig?\n\n1. x̄ = (1/A) · ∫_a^b x · f(x) dx, wobei A die Gesamtfläche ist.\n2. ȳ = (1/A) · ∫_a^b ½ · [f(x)]² dx für f(x) ≥ 0.\n3. Der Schwerpunkt eines Dreiecks liegt im Schnittpunkt der Seitenhalbierenden.\n4. Der Schwerpunkt muss innerhalb der Fläche liegen.\n5. Die Guldin'sche Regel verknüpft Schwerpunkt und Rotationsvolumen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Bei nicht-konvexen Flächen (z. B. Halbring) kann der Schwerpunkt außerhalb der Fläche liegen.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 039 Guldin'sche Regeln (schwer) ──
  {
    id: "ma-typk-new5-039",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zu den Guldin'schen Regeln sind richtig?\n\n1. Die erste Regel berechnet die Mantelfläche eines Rotationskörpers.\n2. Die zweite Regel berechnet das Volumen eines Rotationskörpers.\n3. V = 2π · ȳ_S · A (Schwerpunktabstand × Fläche × 2π).\n4. Die Regeln gelten nur, wenn die Fläche die Rotationsachse nicht schneidet.\n5. Mit den Regeln kann man das Torusvolumen einfach berechnen.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Nur 1, 3 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 korrekt. Torus: Kreisfläche A = πr², Schwerpunktabstand R, also V = 2π · R · πr² = 2π²Rr².",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 040 Numerische Integration (mittel) ──
  {
    id: "ma-typk-new5-040",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur numerischen Integration sind richtig?\n\n1. Die Rechteckregel approximiert die Fläche durch Rechtecke.\n2. Die Trapezregel approximiert die Fläche durch Trapeze.\n3. Die Simpson-Regel verwendet Parabeln zur Approximation.\n4. Kleinere Schrittweiten liefern genauere Ergebnisse.\n5. Numerische Integration liefert stets das exakte Ergebnis.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Numerische Integration liefert Näherungswerte, die mit feinerer Schrittweite genauer werden, aber i. d. R. nicht exakt sind.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 041 Uneigentliche Integrale (schwer) ──
  {
    id: "ma-typk-new5-041",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zu uneigentlichen Integralen sind richtig?\n\n1. Ein uneigentliches Integral hat mindestens eine unendliche Grenze oder eine Singularität.\n2. ∫_1^∞ (1/x²) dx konvergiert.\n3. ∫_1^∞ (1/x) dx divergiert.\n4. Die Konvergenz wird durch Grenzwertbildung geprüft.\n5. Jedes uneigentliche Integral divergiert.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Manche uneigentliche Integrale konvergieren (z. B. ∫_1^∞ 1/x² dx = 1), andere divergieren.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 042 Hohlkörper-Volumen (mittel) ──
  {
    id: "ma-typk-new5-042",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zum Volumen von Hohlkörpern (Washer-Methode) sind richtig?\n\n1. Das Volumen ist V = π · ∫_a^b ([R(x)]² − [r(x)]²) dx.\n2. R(x) ist der äußere Radius und r(x) der innere Radius.\n3. Die Methode ergibt Kreisringscheiben.\n4. Bei r(x) = 0 erhält man die Scheibenmethode.\n5. Die Washer-Methode funktioniert nur für Rotation um die x-Achse.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Washer-Methode funktioniert auch für Rotation um die y-Achse oder andere Achsen — man passt die Radien entsprechend an.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 043 Cavalieri-Prinzip (leicht) ──
  {
    id: "ma-typk-new5-043",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zum Prinzip von Cavalieri sind richtig?\n\n1. Zwei Körper haben dasselbe Volumen, wenn alle Querschnittsflächen in gleicher Höhe gleich groß sind.\n2. Das Prinzip erlaubt den Volumenvergleich ohne explizite Berechnung.\n3. Das Prinzip von Cavalieri gilt nur für Kegel und Zylinder.\n4. Es wurde im 17. Jahrhundert formuliert.\n5. Das Prinzip lässt sich auf Flächenvergleiche in 2D übertragen.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Das Prinzip gilt für beliebige Körper, nicht nur für Kegel und Zylinder.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 044 Shell-Methode (schwer) ──
  {
    id: "ma-typk-new5-044",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Shell-Methode (Zylinderschalenmethode) sind richtig?\n\n1. Das Volumen wird durch zylindrische Schalen approximiert.\n2. V = 2π · ∫_a^b x · f(x) dx bei Rotation um die y-Achse.\n3. Die Shell-Methode ist vorteilhaft, wenn die Scheibenmethode kompliziert wird.\n4. Die Dicke einer Schale ist dx.\n5. Die Shell-Methode und die Scheibenmethode liefern stets verschiedene Ergebnisse.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Beide Methoden liefern dasselbe exakte Volumen — sie sind nur verschiedene Berechnungswege.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 045 Prisma und Zylinder (leicht) ──
  {
    id: "ma-typk-new5-045",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zu Prismen und Zylindern sind richtig?\n\n1. Das Volumen eines Prismas ist V = Grundfläche × Höhe.\n2. Das Volumen eines Zylinders ist V = π · r² · h.\n3. Die Mantelfläche eines Zylinders ist M = 2π · r · h.\n4. Das Volumen eines schiefen Prismas ist kleiner als das eines geraden Prismas gleicher Grundfläche und Höhe.\n5. Die Oberfläche eines Zylinders ist O = 2πr² + 2πrh.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Bei gleicher Grundfläche und gleicher Höhe (senkrechter Abstand zwischen Grund- und Deckfläche) haben schiefes und gerades Prisma das gleiche Volumen (Cavalieri-Prinzip).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },

  // ══════════════════════════════════════════════════
  //  FEHLERRECHNUNG UND NÄHERUNGEN (046–060)
  // ══════════════════════════════════════════════════

  // ── 046 Absoluter/relativer Fehler (leicht) ──
  {
    id: "ma-typk-new5-046",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zum absoluten und relativen Fehler sind richtig?\n\n1. Der absolute Fehler ist die Differenz zwischen Messwert und wahrem Wert.\n2. Der relative Fehler ist der absolute Fehler geteilt durch den wahren Wert.\n3. Der relative Fehler wird oft in Prozent angegeben.\n4. Ein kleiner absoluter Fehler bedeutet immer einen kleinen relativen Fehler.\n5. Der absolute Fehler hat die gleiche Einheit wie die Messgröße.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Bei kleinen Messwerten kann ein kleiner absoluter Fehler einen großen relativen Fehler ergeben (z. B. Δx = 0,1 bei x = 0,5 → 20 %).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 047 Fehlerfortpflanzung Addition (leicht) ──
  {
    id: "ma-typk-new5-047",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zur Fehlerfortpflanzung bei Addition/Subtraktion sind richtig?\n\n1. Bei Addition addieren sich die absoluten Fehler.\n2. Bei Subtraktion addieren sich ebenfalls die absoluten Fehler.\n3. Der relative Fehler einer Summe kann größer sein als die relativen Fehler der Summanden.\n4. Die Gaußsche Fehlerfortpflanzung quadriert und summiert die Einzelfehler.\n5. Bei Addition verdoppelt sich der relative Fehler stets.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Der relative Fehler einer Summe hängt von den Werten ab, er verdoppelt sich nicht automatisch.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 048 Fehlerfortpflanzung Multiplikation (mittel) ──
  {
    id: "ma-typk-new5-048",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zur Fehlerfortpflanzung bei Multiplikation/Division sind richtig?\n\n1. Bei Multiplikation addieren sich die relativen Fehler.\n2. Bei Division addieren sich die relativen Fehler.\n3. Der absolute Fehler eines Produkts hängt von den relativen Fehlern der Faktoren ab.\n4. Bei einer Potenz f(x) = xⁿ ist der relative Fehler n-mal der relative Fehler von x.\n5. Bei Multiplikation addieren sich die absoluten Fehler.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Bei Multiplikation addieren sich die relativen (nicht die absoluten) Fehler.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 049 Gaußsche Fehlerfortpflanzung (schwer) ──
  {
    id: "ma-typk-new5-049",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zur Gaußschen Fehlerfortpflanzung sind richtig?\n\n1. Sie verwendet partielle Ableitungen: Δf = √(Σ (∂f/∂xᵢ · Δxᵢ)²).\n2. Sie setzt voraus, dass die Fehler unabhängig und normalverteilt sind.\n3. Das Ergebnis ist kleiner oder gleich dem maximalen Fehler.\n4. Sie liefert den wahrscheinlichsten Fehler.\n5. Sie ist exakt für beliebige Funktionen f.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Gaußsche Fehlerfortpflanzung basiert auf einer Linearisierung (Taylor 1. Ordnung) und ist daher nur eine Näherung, die bei stark nichtlinearen Funktionen ungenau wird.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 050 Signifikante Stellen (leicht) ──
  {
    id: "ma-typk-new5-050",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zu signifikanten Stellen sind richtig?\n\n1. Führende Nullen zählen nicht als signifikante Stellen.\n2. Nullen zwischen Ziffern sind signifikant.\n3. 0,00340 hat drei signifikante Stellen.\n4. Das Ergebnis einer Berechnung sollte nicht mehr signifikante Stellen haben als die ungenaueste Eingangsgröße.\n5. 1000 hat immer vier signifikante Stellen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: 1000 kann 1, 2, 3 oder 4 signifikante Stellen haben — ohne Dezimalpunkt oder wissenschaftliche Notation ist die Stellenanzahl ambig.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 051 Linearisierung (mittel) ──
  {
    id: "ma-typk-new5-051",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Linearisierung einer Funktion sind richtig?\n\n1. Die Linearisierung ersetzt die Funktion nahe x₀ durch ihre Tangente.\n2. f(x) ≈ f(x₀) + f'(x₀) · (x − x₀).\n3. Die Näherung ist umso besser, je näher x an x₀ liegt.\n4. Die Linearisierung ist ein Spezialfall der Taylor-Entwicklung.\n5. Die Linearisierung liefert für jede Funktion exakte Werte.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Linearisierung ist eine Näherung. Sie ist nur für lineare Funktionen exakt.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 052 Taylor-Reihe (schwer) ──
  {
    id: "ma-typk-new5-052",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Taylor-Reihe sind richtig?\n\n1. Die Taylor-Reihe approximiert eine Funktion durch ein Polynom.\n2. f(x) ≈ Σ f⁽ⁿ⁾(x₀)/n! · (x−x₀)ⁿ.\n3. Mehr Terme liefern eine bessere Approximation (im Konvergenzbereich).\n4. Die Maclaurin-Reihe ist die Taylor-Reihe um x₀ = 0.\n5. Jede Funktion kann durch ihre Taylor-Reihe exakt dargestellt werden.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Nicht jede Funktion konvergiert überall gegen ihre Taylor-Reihe (z. B. f(x) = e^(−1/x²) für x ≠ 0, f(0) = 0 hat Taylor-Reihe = 0, aber f ≠ 0).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 053 Newton-Verfahren (mittel) ──
  {
    id: "ma-typk-new5-053",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zum Newton-Verfahren sind richtig?\n\n1. Es ist ein iteratives Verfahren zur Nullstellensuche.\n2. Die Iterationsformel lautet x_{n+1} = x_n − f(x_n)/f'(x_n).\n3. Es konvergiert quadratisch (bei einfacher Nullstelle und gutem Startwert).\n4. Ein schlechter Startwert kann zur Divergenz führen.\n5. Das Newton-Verfahren konvergiert immer.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Das Newton-Verfahren kann divergieren, z. B. bei ungünstigem Startwert oder wenn f'(x_n) = 0.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 054 Rundungsfehler (leicht) ──
  {
    id: "ma-typk-new5-054",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zu Rundungsfehlern sind richtig?\n\n1. Rundung auf n Dezimalstellen erzeugt einen Fehler ≤ 0,5 · 10⁻ⁿ.\n2. Rundungsfehler können sich bei vielen Berechnungen akkumulieren.\n3. Auslöschung tritt auf, wenn fast gleich große Zahlen subtrahiert werden.\n4. Auslöschung reduziert die Anzahl signifikanter Stellen.\n5. Rundungsfehler treten nur bei händischem Rechnen auf.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Auch Computer arbeiten mit endlicher Genauigkeit (Gleitkommazahlen) und erzeugen Rundungsfehler.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 055 Interpolation (mittel) ──
  {
    id: "ma-typk-new5-055",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Interpolation sind richtig?\n\n1. Interpolation bestimmt Funktionswerte zwischen gegebenen Stützstellen.\n2. Bei linearer Interpolation verbindet man benachbarte Punkte durch Geraden.\n3. Die Lagrange-Interpolation liefert ein Polynom n-ten Grades durch n+1 Punkte.\n4. Extrapolation ist stets zuverlässiger als Interpolation.\n5. Durch n+1 Punkte ist ein Interpolationspolynom n-ten Grades eindeutig bestimmt.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Extrapolation (Schätzung außerhalb des Datenbereichs) ist unsicherer als Interpolation.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 056 Regression (mittel) ──
  {
    id: "ma-typk-new5-056",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zur linearen Regression sind richtig?\n\n1. Die Regressionsgerade minimiert die Summe der quadratischen Abweichungen.\n2. Die Methode heißt auch Methode der kleinsten Quadrate.\n3. Die Regressionsgerade geht durch den Schwerpunkt (x̄, ȳ) der Daten.\n4. Das Bestimmtheitsmaß R² liegt zwischen 0 und 1.\n5. R² = 1 bedeutet, dass alle Punkte exakt auf der Geraden liegen.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Nur 1, 4 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 korrekt. Die Regressionsgerade geht stets durch (x̄, ȳ), und R² = 1 bedeutet eine perfekte lineare Anpassung.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 057 Näherung kleiner Winkel (mittel) ──
  {
    id: "ma-typk-new5-057",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu Kleinwinkelnäherungen sind richtig?\n\n1. Für kleine Winkel φ (im Bogenmaß) gilt sin(φ) ≈ φ.\n2. Für kleine Winkel gilt cos(φ) ≈ 1.\n3. Für kleine Winkel gilt tan(φ) ≈ φ.\n4. Die Näherungen folgen aus der Taylor-Entwicklung.\n5. Die Näherung sin(φ) ≈ φ gilt auch für φ = π/2.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Bei φ = π/2 ≈ 1,57 ist sin(π/2) = 1, aber φ = 1,57 — der Fehler beträgt über 50 %, die Näherung gilt nur für kleine φ.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 058 Dimensionsanalyse (leicht) ──
  {
    id: "ma-typk-new5-058",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zur Dimensionsanalyse sind richtig?\n\n1. In einer korrekten Gleichung müssen beide Seiten die gleichen Einheiten haben.\n2. Dimensionsanalyse kann Formelfehler aufdecken.\n3. Eine dimensionsrichtige Formel ist nicht unbedingt physikalisch korrekt.\n4. Dimensionslose Größen haben keine Einheit.\n5. Dimensionsanalyse kann numerische Koeffizienten bestimmen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Dimensionsanalyse kann die Struktur einer Formel bestimmen, aber dimensionslose Faktoren (z. B. ½, π, 4/3) lassen sich damit nicht ermitteln.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 059 Messgenauigkeit (mittel) ──
  {
    id: "ma-typk-new5-059",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zur Messgenauigkeit sind richtig?\n\n1. Systematische Fehler verschieben alle Messwerte in die gleiche Richtung.\n2. Zufällige Fehler streuen um den wahren Wert.\n3. Durch Mittelwertbildung können zufällige Fehler reduziert werden.\n4. Systematische Fehler werden durch Mittelwertbildung eliminiert.\n5. Die Standardabweichung beschreibt die Streuung der Messwerte.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Systematische Fehler werden durch Mittelwertbildung nicht eliminiert — sie erfordern Kalibrierung oder Korrektur der Messmethode.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 060 Relative Änderung (leicht) ──
  {
    id: "ma-typk-new5-060",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zur relativen Änderung sind richtig?\n\n1. Die relative Änderung ist Δf/f.\n2. Sie wird oft in Prozent angegeben.\n3. Für f(x) = xⁿ ist die relative Änderung näherungsweise n · Δx/x.\n4. Die relative Änderung ist dimensionslos.\n5. Die relative Änderung ist immer positiv.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die relative Änderung kann negativ sein, wenn der Wert abnimmt.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },

  // ══════════════════════════════════════════════════
  //  FINANZMATHEMATIK (061–075)
  // ══════════════════════════════════════════════════

  // ── 061 Einfache Verzinsung (leicht) ──
  {
    id: "ma-typk-new5-061",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zur einfachen Verzinsung sind richtig?\n\n1. Die Formel lautet K_n = K₀ · (1 + n · i), wobei i der Zinssatz und n die Laufzeit ist.\n2. Die Zinsen werden nur auf das Anfangskapital berechnet.\n3. Die Zinsen steigen linear mit der Laufzeit.\n4. Einfache Verzinsung liefert nach mehreren Perioden mehr als Zinseszins.\n5. Die Zinsen pro Periode sind konstant.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 5" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Zinseszins liefert ab der zweiten Periode mehr als einfache Verzinsung, da Zinsen auf Zinsen gezahlt werden.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 062 Zinseszins (leicht) ──
  {
    id: "ma-typk-new5-062",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zum Zinseszins sind richtig?\n\n1. Die Formel lautet K_n = K₀ · (1 + i)ⁿ.\n2. Zinsen werden auf das jeweilige Kapital (inkl. bisheriger Zinsen) berechnet.\n3. Das Kapitalwachstum ist exponentiell.\n4. Die 72er-Regel schätzt die Verdopplungszeit: T ≈ 72/i (i in %).\n5. Zinseszins und einfache Verzinsung liefern nach einem Jahr dasselbe Ergebnis.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Nur 1, 4 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 korrekt. Nach genau einer Periode stimmen beide überein: K₀(1+i)¹ = K₀(1+1·i). Ab der zweiten Periode divergieren sie.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 063 Effektiver Zinssatz (mittel) ──
  {
    id: "ma-typk-new5-063",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zum effektiven Zinssatz sind richtig?\n\n1. Der effektive Zinssatz berücksichtigt die unterjährige Verzinsung.\n2. i_eff = (1 + i_nom/m)^m − 1, wobei m die Anzahl der Zinsperioden pro Jahr ist.\n3. Bei monatlicher Verzinsung ist der effektive Zinssatz höher als der nominale.\n4. Bei einmaliger Jahresverzinsung sind nominaler und effektiver Zinssatz gleich.\n5. Der effektive Zinssatz ist immer kleiner als der nominale.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Bei unterjähriger Verzinsung (m > 1) ist der effektive Zinssatz stets höher als der nominale.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 064 Barwert (mittel) ──
  {
    id: "ma-typk-new5-064",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zum Barwert (Present Value) sind richtig?\n\n1. Der Barwert ist der heutige Wert einer zukünftigen Zahlung.\n2. PV = FV / (1 + i)ⁿ.\n3. Je höher der Zinssatz, desto kleiner der Barwert.\n4. Je weiter die Zahlung in der Zukunft liegt, desto kleiner der Barwert.\n5. Der Barwert ist immer größer als der zukünftige Wert.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Der Barwert ist kleiner als der zukünftige Wert (bei positivem Zinssatz), da zukünftiges Geld abgezinst wird.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 065 Rentenrechnung (mittel) ──
  {
    id: "ma-typk-new5-065",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zur Rentenrechnung sind richtig?\n\n1. Eine Rente ist eine Folge gleich hoher Zahlungen in regelmäßigen Abständen.\n2. Der Rentenbarwert ist der heutige Wert aller zukünftigen Rentenzahlungen.\n3. Der Rentenendwert ist die Summe aller Zahlungen mit Zinseszins.\n4. Der Rentenbarwertfaktor ist (1 − (1+i)^(−n))/i.\n5. Eine ewige Rente hat einen unendlichen Barwert.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Eine ewige Rente hat einen endlichen Barwert: PV = R/i (geometrische Reihe konvergiert bei i > 0).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 066 Tilgungsrechnung (mittel) ──
  {
    id: "ma-typk-new5-066",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zur Tilgungsrechnung sind richtig?\n\n1. Bei der Annuitätentilgung ist die jährliche Gesamtbelastung (Rate) konstant.\n2. Der Zinsanteil der Rate sinkt im Laufe der Zeit.\n3. Der Tilgungsanteil der Rate steigt im Laufe der Zeit.\n4. Bei der Ratentilgung ist der Tilgungsanteil konstant.\n5. Bei der Annuitätentilgung sinkt die Gesamtbelastung im Laufe der Zeit.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Bei der Annuitätentilgung bleibt die Rate konstant (Annuität). Bei der Ratentilgung sinkt die Gesamtbelastung.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 067 Annuität berechnen (schwer) ──
  {
    id: "ma-typk-new5-067",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zur Annuitätenformel sind richtig?\n\n1. Die Annuität ist A = K₀ · i · (1+i)ⁿ / ((1+i)ⁿ − 1).\n2. Die Annuität deckt sowohl Zinsen als auch Tilgung ab.\n3. Bei i = 0 ist die Annuität A = K₀/n.\n4. Eine höhere Laufzeit verringert die Annuität.\n5. Die Annuität ist unabhängig vom Zinssatz.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Annuität hängt direkt vom Zinssatz ab — höhere Zinsen ergeben eine höhere Annuität.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 068 Kapitalwertmethode (schwer) ──
  {
    id: "ma-typk-new5-068",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zur Kapitalwertmethode (NPV) sind richtig?\n\n1. Der Kapitalwert ist die Summe aller abgezinsten Cashflows.\n2. NPV = Σ CF_t / (1+i)^t − Investition.\n3. Ein positiver Kapitalwert bedeutet, die Investition ist vorteilhaft.\n4. Der Kapitalwert hängt vom gewählten Kalkulationszinssatz ab.\n5. Bei NPV = 0 entspricht die Rendite genau dem Kalkulationszinssatz.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 2, 3 und 5" },
      { id: "e", text: "Nur 1, 4 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 korrekt. Bei NPV = 0 ist der interne Zinsfuß gleich dem Kalkulationszinssatz — die Investition erwirtschaftet gerade die geforderte Mindestrendite.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 069 Interner Zinsfuß (schwer) ──
  {
    id: "ma-typk-new5-069",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zum internen Zinsfuß (IRR) sind richtig?\n\n1. Der IRR ist der Zinssatz, bei dem der Kapitalwert null wird.\n2. Der IRR kann nur numerisch (iterativ) bestimmt werden.\n3. Eine Investition ist vorteilhaft, wenn IRR > Kalkulationszinssatz.\n4. Bei konventionellen Investitionen gibt es genau einen IRR.\n5. Der IRR gibt die durchschnittliche jährliche Rendite an.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Der IRR ist nicht die durchschnittliche jährliche Rendite, sondern der Zinssatz, der den NPV auf null bringt — er setzt die Wiederanlage zum gleichen Satz voraus.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 070 Inflation (leicht) ──
  {
    id: "ma-typk-new5-070",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zur Inflation sind richtig?\n\n1. Inflation bedeutet einen Anstieg des allgemeinen Preisniveaus.\n2. Die Kaufkraft des Geldes sinkt bei Inflation.\n3. Der Realzins ≈ Nominalzins − Inflationsrate (Fisher-Gleichung).\n4. Bei 3 % Inflation und 5 % Nominalzins beträgt der Realzins ca. 2 %.\n5. Inflation hat keinen Einfluss auf Spareinlagen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Inflation reduziert den realen Wert von Spareinlagen — wenn die Inflation höher ist als der Nominalzins, verliert das Ersparte an Kaufkraft.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 071 Geometrische Reihe (mittel) ──
  {
    id: "ma-typk-new5-071",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zur geometrischen Reihe in der Finanzmathematik sind richtig?\n\n1. Die geometrische Reihe Σ q^k = (q^n − 1)/(q − 1) für q ≠ 1.\n2. Der Rentenendwertfaktor basiert auf der geometrischen Reihe.\n3. Für |q| < 1 konvergiert die unendliche geometrische Reihe gegen 1/(1−q).\n4. Der Aufzinsungsfaktor (1+i)ⁿ ist eine geometrische Folge.\n5. Für q = 1 divergiert die Reihe immer.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Für q = 1 ist die Partialsumme Σ 1 = n, das divergiert zwar, aber die endliche Summe ist wohldefiniert (= n). Die Aussage 'die Reihe divergiert immer' ist missverständlich — korrekt wäre: die unendliche Reihe divergiert.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 072 Abschreibung (mittel) ──
  {
    id: "ma-typk-new5-072",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zur Abschreibung sind richtig?\n\n1. Bei linearer Abschreibung sinkt der Buchwert gleichmäßig.\n2. Die jährliche Abschreibung bei linearer Methode ist K₀/n.\n3. Bei degressiver Abschreibung ist der Abschreibungsbetrag am Anfang am höchsten.\n4. Der Restwert nach n Jahren linearer Abschreibung ist null.\n5. Degressive Abschreibung führt zu einem exponentiellen Wertverlust.",
    options: [
      { id: "a", text: "Alle (1, 2, 3, 4 und 5)" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 3 und 5" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Nur 1, 4 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 korrekt. Degressive Abschreibung: Buchwert sinkt exponentiell (B_n = K₀ · (1−p)^n), der Abschreibungsbetrag sinkt mit der Zeit.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 073 Sparplan (leicht) ──
  {
    id: "ma-typk-new5-073",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zum Sparplan sind richtig?\n\n1. Bei einem Sparplan werden regelmäßig gleiche Beträge eingezahlt.\n2. Der Endwert berechnet sich mit dem Rentenendwertfaktor.\n3. Früheres Einzahlen liefert mehr Endkapital durch längeren Zinseszinseffekt.\n4. Die erste Rate wird am längsten verzinst.\n5. Ein Sparplan ist mathematisch identisch mit einer Einmalanlage.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Sparplan (mehrere Einzahlungen) und Einmalanlage sind verschiedene Anlageformen mit unterschiedlichen Formeln.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 074 Kreditberechnung (schwer) ──
  {
    id: "ma-typk-new5-074",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zur Kreditberechnung sind richtig?\n\n1. Die monatliche Rate eines Annuitätendarlehens bleibt konstant.\n2. Die Restschuld nach k Raten berechnet sich mit R_k = K₀·(1+i)^k − A·((1+i)^k − 1)/i.\n3. Bei tilgungsfreien Perioden werden nur Zinsen gezahlt.\n4. Der effektive Jahreszins ist stets höher als der Nominalzins bei monatlicher Zahlung.\n5. Sondertilgungen verlängern die Kreditlaufzeit.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Sondertilgungen reduzieren die Restschuld und verkürzen damit die Kreditlaufzeit.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 075 Zinseszins und Euler'sche Zahl (schwer) ──
  {
    id: "ma-typk-new5-075",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zur stetigen Verzinsung sind richtig?\n\n1. Bei stetiger Verzinsung wird der Zins in unendlich vielen Perioden gutgeschrieben.\n2. K(t) = K₀ · e^(i·t).\n3. Die Euler'sche Zahl e ergibt sich als Grenzwert lim(1 + 1/n)ⁿ für n → ∞.\n4. e ≈ 2,71828.\n5. Stetige Verzinsung liefert stets weniger als jährliche Verzinsung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Stetige Verzinsung liefert stets mehr als jährliche Verzinsung (bei gleichem Nominalzins), da der Zinseszinseffekt maximal ist.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
];
