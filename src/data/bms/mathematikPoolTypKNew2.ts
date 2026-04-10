/**
 * Mathematik Typ-K Pool 2 (Kombinationsaufgaben) — 75 Fragen im Question-Format.
 * IDs: ma-typk-new2-001 bis ma-typk-new2-075.
 * Themen-Schwerpunkt: Differentialrechnung, Integralrechnung, Logarithmen, Exponentialfunktionen,
 * Einheiten, Prozentrechnung. KEINE Stochastik!
 * Schwierigkeit: ~30 % leicht, ~45 % mittel, ~25 % schwer.
 */
import type { Question } from "./index";

export const mathematikTypKNew2: Question[] = [
  // ── 001 Differentialrechnung – Ableitungsregeln (leicht) ──
  {
    id: "ma-typk-new2-001",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu Ableitungsregeln sind richtig?\n\n1. Die Ableitung von x^n ist n · x^(n−1).\n2. Die Ableitung einer Konstanten ist 0.\n3. Die Ableitung von sin(x) ist −cos(x).\n4. Die Summenregel besagt: (f + g)' = f' + g'.\n5. Die Ableitung von e^x ist e^x.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 1, 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Die Ableitung von sin(x) ist cos(x), nicht −cos(x).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 002 Logarithmen (mittel) ──
  {
    id: "ma-typk-new2-002",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu Logarithmen sind richtig?\n\n1. log_b(x · y) = log_b(x) + log_b(y).\n2. log_b(x/y) = log_b(x) − log_b(y).\n3. log_b(x^n) = n · log_b(x).\n4. log_b(1) = 1.\n5. ln(e) = 1.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: log_b(1) = 0 für jede Basis b > 0, b ≠ 1.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 003 Integralrechnung – Grundlagen (leicht) ──
  {
    id: "ma-typk-new2-003",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Integralrechnung sind richtig?\n\n1. Die Stammfunktion von x^n ist x^(n+1)/(n+1) + C für n ≠ −1.\n2. Das bestimmte Integral berechnet die Fläche unter der Kurve.\n3. Die Stammfunktion von 1/x ist ln|x| + C.\n4. ∫(f + g) dx = ∫f dx + ∫g dx.\n5. Die Stammfunktion von cos(x) ist −sin(x) + C.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Stammfunktion von cos(x) ist sin(x) + C, nicht −sin(x) + C.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 004 Exponentialfunktionen (mittel) ──
  {
    id: "ma-typk-new2-004",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu Exponentialfunktionen sind richtig?\n\n1. f(x) = a^x mit a > 1 ist streng monoton steigend.\n2. Die Umkehrfunktion von e^x ist ln(x).\n3. e^0 = 1.\n4. Für 0 < a < 1 ist f(x) = a^x streng monoton fallend.\n5. e^x kann negative Werte annehmen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: e^x ist für alle x stets positiv (e^x > 0).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 005 Einheiten und Größenordnungen (leicht) ──
  {
    id: "ma-typk-new2-005",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zu Einheiten und Größenordnungen sind richtig?\n\n1. 1 km = 1000 m.\n2. 1 mg = 10⁻³ g.\n3. 1 µm = 10⁻⁶ m.\n4. 1 Liter = 1 m³.\n5. 1 nm = 10⁻⁹ m.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: 1 Liter = 10⁻³ m³ = 1 dm³.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 006 Differentialrechnung – Extremwerte (mittel) ──
  {
    id: "ma-typk-new2-006",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu Extremwerten sind richtig?\n\n1. An einer Extremstelle ist f'(x) = 0.\n2. Wenn f''(x₀) < 0, liegt ein Maximum vor.\n3. Wenn f''(x₀) > 0, liegt ein Minimum vor.\n4. Jede Nullstelle der Ableitung ist eine Extremstelle.\n5. Zwischen zwei Extremstellen liegt mindestens ein Wendepunkt.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: f'(x₀) = 0 ist notwendig, aber nicht hinreichend — es könnte auch ein Sattelpunkt vorliegen (z. B. f(x) = x³).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 007 Prozentrechnung (leicht) ──
  {
    id: "ma-typk-new2-007",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zur Prozentrechnung sind richtig?\n\n1. 50 % von 200 sind 100.\n2. Eine Steigerung um 20 % und anschließende Senkung um 20 % ergibt den Ausgangswert.\n3. Der Prozentwert ist P = G · p/100.\n4. 0,25 entspricht 25 %.\n5. Bei einer Verdopplung liegt ein Anstieg um 100 % vor.",
    options: [
      { id: "a", text: "Nur 1, 3, 4 und 5" },
      { id: "b", text: "Nur 1, 3 und 4" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 1, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 3, 4, 5 korrekt. 2 falsch: 200 · 1,2 = 240; 240 · 0,8 = 192 ≠ 200. Die Senkung bezieht sich auf den erhöhten Wert.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 008 Differentialrechnung – Kettenregel (schwer) ──
  {
    id: "ma-typk-new2-008",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Kettenregel sind richtig?\n\n1. Die Kettenregel lautet: [f(g(x))]' = f'(g(x)) · g'(x).\n2. Die Ableitung von e^(3x) ist 3 · e^(3x).\n3. Die Ableitung von sin(2x) ist 2 · cos(2x).\n4. Die Ableitung von (x² + 1)³ ist 3(x² + 1)².\n5. Die Kettenregel wird bei verschachtelten Funktionen angewendet.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Innere Ableitung fehlt! Richtig: 3(x² + 1)² · 2x = 6x(x² + 1)².",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 009 Logarithmen – Natürlicher Logarithmus (mittel) ──
  {
    id: "ma-typk-new2-009",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zum natürlichen Logarithmus sind richtig?\n\n1. ln(e^x) = x.\n2. e^(ln x) = x für x > 0.\n3. ln(1) = 0.\n4. ln(x · y) = ln(x) · ln(y).\n5. Die Ableitung von ln(x) ist 1/x.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: ln(x · y) = ln(x) + ln(y), nicht ln(x) · ln(y).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 010 Integralrechnung – Bestimmtes Integral (mittel) ──
  {
    id: "ma-typk-new2-010",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zum bestimmten Integral sind richtig?\n\n1. ∫_a^b f(x) dx = F(b) − F(a), wobei F eine Stammfunktion von f ist.\n2. ∫_a^a f(x) dx = 0.\n3. ∫_a^b f(x) dx = −∫_b^a f(x) dx.\n4. Das bestimmte Integral kann negative Werte haben.\n5. ∫_a^b f(x) dx gibt immer die Fläche zwischen f und x-Achse an.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Das Integral kann negative Werte haben, wenn f(x) < 0. Die Fläche ergibt sich durch ∫|f(x)| dx.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 011 Verhältnisse und Proportionen (leicht) ──
  {
    id: "ma-typk-new2-011",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zu Verhältnissen und Proportionen sind richtig?\n\n1. Bei direkter Proportionalität gilt y = k · x.\n2. Bei indirekter Proportionalität gilt y = k/x.\n3. Das Verhältnis 3:6 ist gleich dem Verhältnis 1:2.\n4. Bei direkter Proportionalität verdoppelt sich y, wenn x verdoppelt wird.\n5. Bei indirekter Proportionalität verdoppelt sich y, wenn x verdoppelt wird.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Bei indirekter Proportionalität halbiert sich y, wenn x verdoppelt wird.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 012 Differentialrechnung – Produktregel (schwer) ──
  {
    id: "ma-typk-new2-012",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Produktregel sind richtig?\n\n1. Die Produktregel lautet: (f · g)' = f' · g + f · g'.\n2. Die Ableitung von x · e^x ist e^x + x · e^x.\n3. Die Ableitung von x² · sin(x) ist 2x · sin(x) + x² · cos(x).\n4. Die Produktregel gilt nur für Polynome.\n5. (f · g)' = f' · g' ist keine korrekte Ableitungsregel.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Die Produktregel gilt für beliebige differenzierbare Funktionen, nicht nur für Polynome.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 013 Exponentialfunktionen – Wachstum (mittel) ──
  {
    id: "ma-typk-new2-013",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zum exponentiellen Wachstum sind richtig?\n\n1. N(t) = N₀ · e^(k·t) mit k > 0 beschreibt exponentielles Wachstum.\n2. Die Verdopplungszeit ist t₂ = ln(2)/k.\n3. Bei k < 0 liegt exponentieller Zerfall vor.\n4. Die momentane Änderungsrate ist proportional zum aktuellen Bestand.\n5. Exponentielles Wachstum ist langfristig langsamer als lineares Wachstum.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Exponentielles Wachstum übertrifft langfristig jedes lineare Wachstum.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 014 Integralrechnung – Flächenberechnung (schwer) ──
  {
    id: "ma-typk-new2-014",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Flächenberechnung mit Integralen sind richtig?\n\n1. Die Fläche zwischen f(x) und der x-Achse ergibt sich durch ∫|f(x)| dx.\n2. Die Fläche zwischen zwei Kurven f und g ist ∫|f(x) − g(x)| dx.\n3. Wenn f(x) < 0 im Intervall, liefert das Integral einen negativen Wert.\n4. Schnittpunkte der Kurven sind die Integrationsgrenzen bei Flächenberechnung zwischen zwei Kurven.\n5. Die Fläche unter der x-Achse muss nicht gesondert betrachtet werden.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Fläche unter der x-Achse wird negativ gezählt und muss durch Betrag berücksichtigt werden.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 015 Einheiten – SI-System (leicht) ──
  {
    id: "ma-typk-new2-015",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zum SI-Einheitensystem sind richtig?\n\n1. Die SI-Basiseinheit der Masse ist das Kilogramm.\n2. Die SI-Basiseinheit der Zeit ist die Sekunde.\n3. Die SI-Basiseinheit der Temperatur ist Grad Celsius.\n4. Die SI-Basiseinheit der Länge ist der Meter.\n5. Die SI-Basiseinheit der Stoffmenge ist das Mol.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 1, 2, 3, 4 und 5" },
      { id: "e", text: "Nur 2, 4 und 5" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Die SI-Basiseinheit der Temperatur ist Kelvin (K), nicht Grad Celsius.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 016 Differentialrechnung – Monotonie (mittel) ──
  {
    id: "ma-typk-new2-016",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Monotonie sind richtig?\n\n1. f ist streng monoton steigend, wenn f'(x) > 0 für alle x im Intervall.\n2. f ist streng monoton fallend, wenn f'(x) < 0 für alle x im Intervall.\n3. An einer Extremstelle wechselt das Vorzeichen von f'.\n4. f(x) = x³ ist auf ganz ℝ streng monoton steigend.\n5. Wenn f'(x₀) = 0, ist f an x₀ nicht monoton.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2 und 4" },
      { id: "d", text: "Nur 1, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: f'(x₀) = 0 allein sagt nichts über fehlende Monotonie — z. B. ist x³ in x = 0 streng monoton steigend, obwohl f'(0) = 0.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 017 Prozentrechnung – Zinseszins (schwer) ──
  {
    id: "ma-typk-new2-017",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zum Zinseszins sind richtig?\n\n1. K_n = K₀ · (1 + p/100)^n beschreibt den Zinseszins.\n2. Bei Zinseszins wächst das Kapital exponentiell.\n3. Die Verdopplungszeit kann mit der 72er-Regel geschätzt werden: t ≈ 72/p.\n4. Zinseszins und einfache Verzinsung liefern nach einem Jahr identische Ergebnisse.\n5. Bei höherer Zinsfrequenz (z. B. monatlich) ist der Effektivzins niedriger als der Nominalzins.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Bei häufigerer Verzinsung ist der Effektivzins höher als der Nominalzins.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 018 Differentialrechnung – Wendepunkte (mittel) ──
  {
    id: "ma-typk-new2-018",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu Wendepunkten sind richtig?\n\n1. An einem Wendepunkt ist f''(x) = 0.\n2. An einem Wendepunkt ändert sich die Krümmung der Kurve.\n3. f''(x₀) = 0 und f'''(x₀) ≠ 0 ist hinreichend für einen Wendepunkt.\n4. Die Tangente im Wendepunkt heißt Wendetangente.\n5. Jede Nullstelle von f'' ist ein Wendepunkt.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: f''(x₀) = 0 ist notwendig, aber nicht hinreichend — z. B. f(x) = x⁴ hat f''(0) = 0, aber keinen Wendepunkt.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 019 Logarithmen – Rechenregeln (leicht) ──
  {
    id: "ma-typk-new2-019",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu Logarithmen-Rechenregeln sind richtig?\n\n1. log₁₀(100) = 2.\n2. log₂(8) = 3.\n3. log_b(b) = 1 für jede Basis b > 0, b ≠ 1.\n4. log₁₀(0) = 0.\n5. log₁₀(10⁵) = 5.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: log₁₀(0) ist nicht definiert (der Logarithmus ist nur für positive Zahlen definiert).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 020 Integralrechnung – Partielle Integration (schwer) ──
  {
    id: "ma-typk-new2-020",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur partiellen Integration sind richtig?\n\n1. Die Formel lautet ∫u · v' dx = u · v − ∫u' · v dx.\n2. Partielle Integration wird angewendet, wenn ein Produkt zweier Funktionen integriert werden soll.\n3. ∫x · e^x dx kann mit partieller Integration gelöst werden.\n4. Partielle Integration ist identisch mit der Produktregel der Differentiation.\n5. Bei ∫x · e^x dx wählt man u = x und v' = e^x.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Partielle Integration ist die Umkehrung der Produktregel, nicht identisch damit.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 021 Gleichungen – Quadratische Funktionen (mittel) ──
  {
    id: "ma-typk-new2-021",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu quadratischen Funktionen sind richtig?\n\n1. Der Graph einer quadratischen Funktion ist eine Parabel.\n2. Die Scheitelpunktform lautet f(x) = a(x − d)² + e.\n3. Für a > 0 ist die Parabel nach oben geöffnet.\n4. Die Symmetrieachse verläuft durch den Scheitelpunkt.\n5. Jede Parabel hat genau zwei Nullstellen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Eine Parabel kann 0, 1 oder 2 Nullstellen haben (abhängig von der Diskriminante).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 022 Differentialrechnung – Quotientenregel (schwer) ──
  {
    id: "ma-typk-new2-022",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Quotientenregel sind richtig?\n\n1. Die Quotientenregel lautet: (f/g)' = (f'·g − f·g') / g².\n2. Die Ableitung von sin(x)/x ergibt (x·cos(x) − sin(x)) / x².\n3. Die Quotientenregel setzt voraus, dass g(x) ≠ 0.\n4. Die Ableitung von 1/x² ist −2/x³.\n5. (f/g)' = f'/g' ist eine korrekte Ableitungsregel.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: (f/g)' ≠ f'/g' — das wäre eine häufige Fehlvorstellung.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 023 Exponentialgleichungen (mittel) ──
  {
    id: "ma-typk-new2-023",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zum Lösen von Exponentialgleichungen sind richtig?\n\n1. e^x = a wird gelöst durch x = ln(a) für a > 0.\n2. 2^x = 8 hat die Lösung x = 3.\n3. Logarithmieren ist die Umkehroperation des Potenzierens.\n4. e^x = −1 hat keine reelle Lösung.\n5. 10^x = 1 hat die Lösung x = 10.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: 10^x = 1 hat die Lösung x = 0 (da 10⁰ = 1).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 024 Integralrechnung – Substitution (schwer) ──
  {
    id: "ma-typk-new2-024",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Substitutionsmethode bei Integralen sind richtig?\n\n1. Die Substitution u = g(x) vereinfacht das Integral durch Variablenwechsel.\n2. Bei Substitution muss auch dx durch du ersetzt werden: du = g'(x) dx.\n3. ∫2x · e^(x²) dx kann mit u = x² gelöst werden.\n4. Nach der Substitution muss bei bestimmten Integralen die Grenzen nicht angepasst werden.\n5. Die Substitution ist die Umkehrung der Kettenregel.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Bei bestimmten Integralen müssen die Grenzen an die neue Variable angepasst werden (oder man substituiert zurück).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 025 Größenordnungen – Potenzen von 10 (leicht) ──
  {
    id: "ma-typk-new2-025",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zu Potenzen von 10 sind richtig?\n\n1. 10^3 = 1000.\n2. 10^(-2) = 0,01.\n3. 10^0 = 0.\n4. 10^6 wird als Mega bezeichnet.\n5. 10^(-9) wird als Nano bezeichnet.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 1, 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: 10⁰ = 1, nicht 0.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 026 Differentialrechnung – Tangente (mittel) ──
  {
    id: "ma-typk-new2-026",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Tangente an einen Graphen sind richtig?\n\n1. Die Steigung der Tangente in x₀ ist f'(x₀).\n2. Die Tangentengleichung lautet y = f'(x₀) · (x − x₀) + f(x₀).\n3. Die Tangente berührt den Graphen in genau einem Punkt.\n4. Die Normale steht senkrecht auf der Tangente.\n5. Tangente und Graph haben im Berührpunkt die gleiche Steigung.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 1, 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Die Tangente kann den Graphen auch in anderen Punkten schneiden (z. B. bei f(x) = x³ die Tangente in x = 0).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 027 Funktionen – Definitionsbereich (leicht) ──
  {
    id: "ma-typk-new2-027",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zum Definitionsbereich sind richtig?\n\n1. Der Definitionsbereich von √x ist x ≥ 0.\n2. Der Definitionsbereich von 1/x ist x ≠ 0.\n3. Der Definitionsbereich von ln(x) ist x > 0.\n4. Polynome sind auf ganz ℝ definiert.\n5. Der Definitionsbereich von x² ist x ≥ 0.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: x² ist für alle x ∈ ℝ definiert, nicht nur für x ≥ 0.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 028 Integralrechnung – Stammfunktionen (mittel) ──
  {
    id: "ma-typk-new2-028",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu Stammfunktionen sind richtig?\n\n1. F ist eine Stammfunktion von f, wenn F' = f.\n2. Zu jeder stetigen Funktion existiert eine Stammfunktion.\n3. Stammfunktionen unterscheiden sich nur um eine Konstante C.\n4. Die Stammfunktion von e^(2x) ist ½ · e^(2x) + C.\n5. Die Stammfunktion von sin(x) ist cos(x) + C.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Stammfunktion von sin(x) ist −cos(x) + C (nicht cos(x) + C).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 029 Differentialrechnung – Stetigkeit (schwer) ──
  {
    id: "ma-typk-new2-029",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Stetigkeit sind richtig?\n\n1. Eine Funktion ist stetig in x₀, wenn der Grenzwert existiert und gleich dem Funktionswert ist.\n2. Polynome sind auf ganz ℝ stetig.\n3. Jede differenzierbare Funktion ist auch stetig.\n4. Jede stetige Funktion ist auch differenzierbar.\n5. Die Funktion f(x) = 1/x ist stetig auf ihrem Definitionsbereich.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Gegenbeispiel: f(x) = |x| ist stetig, aber in x = 0 nicht differenzierbar.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 030 Vektoren – Grundlagen (leicht) ──
  {
    id: "ma-typk-new2-030",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zu Vektoren sind richtig?\n\n1. Ein Vektor hat Betrag und Richtung.\n2. Zwei Vektoren sind gleich, wenn sie gleiche Komponenten haben.\n3. Der Nullvektor hat den Betrag 0.\n4. Vektoren können nur im ℝ² existieren.\n5. Der Betrag von (3, 4) ist 5.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt (||(3,4)|| = √(9+16) = 5). 4 falsch: Vektoren existieren im ℝ², ℝ³ und allgemein im ℝⁿ.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 031 Differentialrechnung – Ableitung trigonometrischer Funktionen (mittel) ──
  {
    id: "ma-typk-new2-031",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu Ableitungen trigonometrischer Funktionen sind richtig?\n\n1. Die Ableitung von sin(x) ist cos(x).\n2. Die Ableitung von cos(x) ist −sin(x).\n3. Die Ableitung von tan(x) ist 1/cos²(x).\n4. Die Ableitung von sin(x) ist −cos(x).\n5. sin²(x) + cos²(x) = 1 ist eine Identität.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2 und 5" },
      { id: "d", text: "Nur 1, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Die Ableitung von sin(x) ist cos(x), nicht −cos(x). (4 widerspricht 1.)",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 032 Prozentrechnung – Rabatte (mittel) ──
  {
    id: "ma-typk-new2-032",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zu Rabatten sind richtig?\n\n1. Ein Rabatt von 30 % auf 200 € ergibt 140 €.\n2. Zwei aufeinanderfolgende Rabatte von je 10 % ergeben insgesamt 20 % Rabatt.\n3. Der Bruttopreis enthält die Mehrwertsteuer.\n4. 20 % MwSt auf 100 € Netto ergibt 120 € Brutto.\n5. Um von Brutto auf Netto (bei 20 % MwSt) zu kommen, teilt man durch 1,2.",
    options: [
      { id: "a", text: "Nur 1, 3, 4 und 5" },
      { id: "b", text: "Nur 1, 3 und 4" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 1, 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 3, 4, 5 korrekt. 2 falsch: 200 · 0,9 · 0,9 = 162, das entspricht 19 % Rabatt, nicht 20 %.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 033 Integralrechnung – Mittelwertsatz (schwer) ──
  {
    id: "ma-typk-new2-033",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zum Mittelwertsatz der Integralrechnung sind richtig?\n\n1. Für stetige f auf [a,b] gibt es ein c ∈ [a,b] mit ∫_a^b f(x) dx = f(c) · (b−a).\n2. Der Mittelwert von f auf [a,b] ist f̄ = 1/(b−a) · ∫_a^b f(x) dx.\n3. Der Mittelwertsatz gilt nur für Polynome.\n4. Der Mittelwert einer konstanten Funktion ist gleich der Konstanten.\n5. Der Mittelwertsatz setzt Stetigkeit auf dem Intervall voraus.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 1, 2, 3 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Der Mittelwertsatz gilt für alle stetigen Funktionen, nicht nur für Polynome.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 034 Logarithmen – Basiswechsel (mittel) ──
  {
    id: "ma-typk-new2-034",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zum Basiswechsel bei Logarithmen sind richtig?\n\n1. log_a(x) = ln(x) / ln(a).\n2. log₂(x) = log₁₀(x) / log₁₀(2).\n3. Der Basiswechsel erlaubt es, jeden Logarithmus durch den natürlichen auszudrücken.\n4. log_a(a) = 1 für jede gültige Basis.\n5. log_a(x) = log_a(b) · log_b(x) ist falsch.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: log_a(x) = log_a(b) · log_b(x) ist korrekt (Kettenregel der Logarithmen).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 035 Differentialrechnung – Krümmung (schwer) ──
  {
    id: "ma-typk-new2-035",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Krümmung sind richtig?\n\n1. Ist f''(x) > 0, ist der Graph linksgekrümmt (konvex von unten).\n2. Ist f''(x) < 0, ist der Graph rechtsgekrümmt (konkav von unten).\n3. Am Wendepunkt ändert sich die Krümmungsrichtung.\n4. Die Krümmung einer Geraden ist null.\n5. f''(x) = 0 bedeutet immer, dass ein Wendepunkt vorliegt.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: f''(x₀) = 0 ist notwendig, aber nicht hinreichend — es muss zusätzlich ein Vorzeichenwechsel von f'' vorliegen.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 036 Funktionen – Symmetrie (leicht) ──
  {
    id: "ma-typk-new2-036",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Symmetrie von Funktionen sind richtig?\n\n1. f(x) = x² ist achsensymmetrisch zur y-Achse.\n2. f(x) = x³ ist punktsymmetrisch zum Ursprung.\n3. Achsensymmetrie liegt vor, wenn f(−x) = f(x).\n4. Punktsymmetrie liegt vor, wenn f(−x) = −f(x).\n5. f(x) = sin(x) ist achsensymmetrisch zur y-Achse.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: sin(x) ist punktsymmetrisch zum Ursprung (sin(−x) = −sin(x)), nicht achsensymmetrisch.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 037 Exponentialfunktionen – Halbwertszeit (mittel) ──
  {
    id: "ma-typk-new2-037",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Halbwertszeit sind richtig?\n\n1. N(t) = N₀ · (1/2)^(t/t₁/₂) beschreibt den exponentiellen Zerfall.\n2. Nach zwei Halbwertszeiten ist noch 1/4 der Ausgangssubstanz vorhanden.\n3. Die Halbwertszeit t₁/₂ = ln(2)/λ.\n4. Nach 10 Halbwertszeiten ist praktisch nichts mehr vorhanden (< 0,1 %).\n5. Die Halbwertszeit ist die Zeit, in der alles zerfallen ist.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt ((1/2)^10 ≈ 0,001 = 0,1 %). 5 falsch: Die Halbwertszeit ist die Zeit, in der die Hälfte zerfällt — der Zerfall erreicht mathematisch nie exakt null.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 038 Vektoren – Skalarprodukt (mittel) ──
  {
    id: "ma-typk-new2-038",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zum Skalarprodukt sind richtig?\n\n1. Das Skalarprodukt zweier Vektoren ergibt eine Zahl.\n2. a⃗ · b⃗ = a₁b₁ + a₂b₂ + a₃b₃ im ℝ³.\n3. Wenn a⃗ · b⃗ = 0, stehen die Vektoren senkrecht aufeinander.\n4. a⃗ · b⃗ = |a⃗| · |b⃗| · cos(φ).\n5. Das Skalarprodukt ist immer positiv.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Das Skalarprodukt kann auch negativ sein (wenn der Winkel zwischen den Vektoren > 90° ist).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 039 Differentialrechnung – Grenzwerte (schwer) ──
  {
    id: "ma-typk-new2-039",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu Grenzwerten sind richtig?\n\n1. lim(x→∞) 1/x = 0.\n2. lim(x→0) sin(x)/x = 1.\n3. lim(x→∞) (1 + 1/x)^x = e.\n4. Ein Grenzwert muss immer existieren.\n5. lim(x→∞) e^(−x) = 0.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Nicht jede Funktion hat an jeder Stelle einen Grenzwert (z. B. sin(x) für x → ∞).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 040 Gleichungen – Lineare Gleichungssysteme (leicht) ──
  {
    id: "ma-typk-new2-040",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu linearen Gleichungssystemen (LGS) sind richtig?\n\n1. Ein LGS mit 2 Gleichungen und 2 Unbekannten kann genau eine Lösung haben.\n2. Ein LGS kann auch keine Lösung haben (wenn die Gleichungen widersprüchlich sind).\n3. Ein LGS kann unendlich viele Lösungen haben.\n4. Das Additionsverfahren ist eine Methode zum Lösen eines LGS.\n5. Jedes LGS mit 2 Gleichungen hat genau eine Lösung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Ein LGS kann auch keine oder unendlich viele Lösungen haben (parallele oder identische Geraden).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 041 Integralrechnung – Rotationsvolumen (schwer) ──
  {
    id: "ma-typk-new2-041",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zum Rotationsvolumen sind richtig?\n\n1. V = π · ∫_a^b [f(x)]² dx berechnet das Volumen bei Rotation um die x-Achse.\n2. Die Methode wird auch als Scheibenmethode bezeichnet.\n3. Das Volumen eines Zylinders kann so berechnet werden: V = π · r² · h.\n4. Die Rotation einer Geraden y = r um die x-Achse ergibt einen Zylinder.\n5. Das Rotationsvolumen ist immer negativ.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Da [f(x)]² ≥ 0 und π > 0, ist das Rotationsvolumen stets positiv oder null.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 042 Geometrie – Kreise (leicht) ──
  {
    id: "ma-typk-new2-042",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zum Kreis sind richtig?\n\n1. Der Umfang eines Kreises ist U = 2πr.\n2. Die Fläche eines Kreises ist A = πr².\n3. Der Durchmesser ist doppelt so groß wie der Radius.\n4. Die Kreiszahl π ist rational.\n5. Die Kreisgleichung lautet x² + y² = r².",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 2, 4 und 5" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: π ist irrational (nicht als Bruch darstellbar).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 043 Differentialrechnung – L'Hôpital (schwer) ──
  {
    id: "ma-typk-new2-043",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Regel von L'Hôpital sind richtig?\n\n1. Die Regel gilt bei unbestimmten Formen 0/0 oder ∞/∞.\n2. lim f(x)/g(x) = lim f'(x)/g'(x), falls die Bedingungen erfüllt sind.\n3. Die Regel kann mehrfach hintereinander angewendet werden.\n4. Die Regel gilt für alle Quotienten, auch ohne unbestimmte Form.\n5. lim(x→0) sin(x)/x kann mit L'Hôpital zu cos(0)/1 = 1 berechnet werden.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: L'Hôpital darf nur bei unbestimmten Formen (0/0 oder ∞/∞) angewendet werden.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 044 Einheiten – Umrechnung (leicht) ──
  {
    id: "ma-typk-new2-044",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Umrechnungen sind richtig?\n\n1. 1 h = 3600 s.\n2. 1 cm² = 10⁻⁴ m².\n3. 1 km/h = 1/3,6 m/s.\n4. 1 Tonne = 100 kg.\n5. 1 dm³ = 1 Liter.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: 1 Tonne = 1000 kg, nicht 100 kg.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 045 Vektoren – Kreuzprodukt (schwer) ──
  {
    id: "ma-typk-new2-045",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zum Kreuzprodukt sind richtig?\n\n1. Das Kreuzprodukt zweier Vektoren ergibt einen Vektor.\n2. Der Ergebnisvektor steht senkrecht auf beiden Ausgangsvektoren.\n3. |a⃗ × b⃗| = |a⃗| · |b⃗| · sin(φ).\n4. Das Kreuzprodukt ist kommutativ: a⃗ × b⃗ = b⃗ × a⃗.\n5. |a⃗ × b⃗| entspricht der Fläche des aufgespannten Parallelogramms.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Das Kreuzprodukt ist antikommutativ: a⃗ × b⃗ = −(b⃗ × a⃗).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 046 Funktionen – Asymptoten (mittel) ──
  {
    id: "ma-typk-new2-046",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu Asymptoten sind richtig?\n\n1. Eine horizontale Asymptote beschreibt das Verhalten für x → ±∞.\n2. f(x) = 1/x hat die horizontale Asymptote y = 0.\n3. f(x) = 1/x hat die vertikale Asymptote x = 0.\n4. Eine Funktion kann ihre horizontale Asymptote nicht schneiden.\n5. Vertikale Asymptoten treten an Definitionslücken auf.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Eine Funktion kann ihre horizontale Asymptote durchaus schneiden (z. B. f(x) = sin(x)/x schneidet y = 0 unendlich oft).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 047 Differentialrechnung – Mittelwertsatz der Differentialrechnung (schwer) ──
  {
    id: "ma-typk-new2-047",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zum Mittelwertsatz der Differentialrechnung sind richtig?\n\n1. Es existiert ein c ∈ (a,b) mit f'(c) = (f(b) − f(a))/(b − a).\n2. Die Funktion muss auf [a,b] stetig und auf (a,b) differenzierbar sein.\n3. Die Tangente im Punkt c ist parallel zur Sekante durch (a,f(a)) und (b,f(b)).\n4. Der Mittelwertsatz gilt auch für nicht stetige Funktionen.\n5. Der Satz von Rolle ist ein Spezialfall des Mittelwertsatzes.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Stetigkeit auf [a,b] ist eine notwendige Voraussetzung des Mittelwertsatzes.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 048 Geometrie – Körper (leicht) ──
  {
    id: "ma-typk-new2-048",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu geometrischen Körpern sind richtig?\n\n1. Das Volumen eines Quaders ist V = a · b · c.\n2. Das Volumen einer Kugel ist V = (4/3) · π · r³.\n3. Die Oberfläche einer Kugel ist O = 4πr².\n4. Das Volumen eines Kegels ist V = π · r² · h.\n5. Das Volumen eines Zylinders ist V = π · r² · h.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 2, 3 und 4" },
      { id: "d", text: "Nur 1, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Das Volumen eines Kegels ist V = (1/3) · π · r² · h.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 049 Integralrechnung – Uneigentliche Integrale (schwer) ──
  {
    id: "ma-typk-new2-049",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu uneigentlichen Integralen sind richtig?\n\n1. Ein uneigentliches Integral hat mindestens eine Grenze bei ±∞ oder eine Singularität.\n2. ∫_1^∞ 1/x² dx konvergiert.\n3. ∫_1^∞ 1/x dx divergiert.\n4. Ein uneigentliches Integral wird als Grenzwert berechnet.\n5. Alle uneigentlichen Integrale divergieren.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Manche uneigentlichen Integrale konvergieren (z. B. ∫_1^∞ 1/x² dx = 1).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 050 Trigonometrie – Winkelfunktionen (mittel) ──
  {
    id: "ma-typk-new2-050",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zu Winkelfunktionen im rechtwinkligen Dreieck sind richtig?\n\n1. sin(α) = Gegenkathete / Hypotenuse.\n2. cos(α) = Ankathete / Hypotenuse.\n3. tan(α) = Gegenkathete / Ankathete.\n4. sin(90°) = 0.\n5. cos(0°) = 1.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: sin(90°) = 1, nicht 0.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 051 Differentialrechnung – Implizite Ableitung (schwer) ──
  {
    id: "ma-typk-new2-051",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur impliziten Differentiation sind richtig?\n\n1. Implizite Differentiation wird angewendet, wenn y nicht explizit als Funktion von x vorliegt.\n2. Man differenziert beide Seiten der Gleichung nach x.\n3. Beim Differenzieren von y nach x muss man dy/dx als Faktor berücksichtigen.\n4. x² + y² = r² kann implizit differenziert werden.\n5. Implizite Differentiation ist nur bei linearen Gleichungen möglich.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Implizite Differentiation funktioniert bei beliebigen (differenzierbaren) Gleichungen, nicht nur linearen.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 052 Prozentrechnung – Wachstumsraten (mittel) ──
  {
    id: "ma-typk-new2-052",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zu Wachstumsraten sind richtig?\n\n1. Ein Wachstum von 100 auf 150 entspricht 50 % Zuwachs.\n2. Ein Rückgang von 150 auf 100 entspricht 50 % Rückgang.\n3. Die relative Änderung berechnet sich als (Neuwert - Altwert)/Altwert.\n4. 'Um das Dreifache gestiegen' bedeutet Faktor 3.\n5. 'Auf das Dreifache gestiegen' bedeutet Faktor 3.",
    options: [
      { id: "a", text: "Nur 1, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3, 4 und 5" },
      { id: "d", text: "Nur 1 und 3" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 3, 5 korrekt. 2 falsch: (150-100)/150 = 33,3 %, nicht 50 %. 4 falsch: 'Um das Dreifache' bedeutet Faktor 4 (Ausgangswert + 3x Ausgangswert).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 053 Funktionen – Polynome (leicht) ──
  {
    id: "ma-typk-new2-053",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu Polynomen sind richtig?\n\n1. Ein Polynom n-ten Grades hat höchstens n Nullstellen.\n2. Der Grad eines Polynoms ist der höchste vorkommende Exponent.\n3. Polynome sind auf ganz ℝ definiert und stetig.\n4. Ein Polynom 3. Grades hat immer mindestens eine reelle Nullstelle.\n5. Ein Polynom 2. Grades hat immer genau zwei reelle Nullstellen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt (Polynom ungeraden Grades hat mind. 1 reelle Nullstelle). 5 falsch: z. B. x² + 1 hat keine reelle Nullstelle.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 054 Integralrechnung – Hauptsatz (mittel) ──
  {
    id: "ma-typk-new2-054",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zum Hauptsatz der Differential- und Integralrechnung sind richtig?\n\n1. F'(x) = f(x), wenn F(x) = ∫_a^x f(t) dt.\n2. Der Hauptsatz verknüpft Differentiation und Integration.\n3. Jede stetige Funktion besitzt eine Stammfunktion.\n4. ∫_a^b f(x) dx = F(b) − F(a) ist der Hauptsatz.\n5. Der Hauptsatz gilt nur für Polynome.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Der Hauptsatz gilt für alle stetigen Funktionen, nicht nur für Polynome.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 055 Vektoren – Geraden im Raum (mittel) ──
  {
    id: "ma-typk-new2-055",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zu Geraden im Raum sind richtig?\n\n1. Eine Gerade wird durch einen Punkt und einen Richtungsvektor beschrieben.\n2. Die Parameterform lautet r⃗ = p⃗ + t · v⃗.\n3. Zwei Geraden im ℝ³ sind entweder parallel, identisch, schneidend oder windschief.\n4. Parallele Geraden haben kollineare Richtungsvektoren.\n5. Windschiefe Geraden gibt es nur im ℝ².",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Windschiefe Geraden existieren ab ℝ³ (im ℝ² gibt es keine windschiefen Geraden).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 056 Gleichungen – Betrag (leicht) ──
  {
    id: "ma-typk-new2-056",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zum Betrag sind richtig?\n\n1. |x| ≥ 0 für alle x ∈ ℝ.\n2. |−5| = 5.\n3. |a · b| = |a| · |b|.\n4. |a + b| = |a| + |b| gilt immer.\n5. |x| = x für x ≥ 0.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 5" },
      { id: "c", text: "Nur 1, 2 und 3" },
      { id: "d", text: "Nur 1, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Es gilt nur die Dreiecksungleichung |a + b| ≤ |a| + |b|; Gleichheit gilt nicht immer.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 057 Differentialrechnung – Newton-Verfahren (schwer) ──
  {
    id: "ma-typk-new2-057",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zum Newton-Verfahren sind richtig?\n\n1. Das Newton-Verfahren dient zur näherungsweisen Bestimmung von Nullstellen.\n2. Die Iterationsvorschrift lautet x_{n+1} = x_n − f(x_n)/f'(x_n).\n3. Das Verfahren konvergiert immer, unabhängig vom Startwert.\n4. An der Stelle x_n wird die Tangente berechnet und deren Nullstelle als nächste Näherung verwendet.\n5. Das Verfahren setzt voraus, dass f'(x) ≠ 0 an der Iterationsstelle.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 1, 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: Das Newton-Verfahren konvergiert nicht immer — bei schlechtem Startwert kann es divergieren.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 058 Trigonometrie – Additionstheoreme (schwer) ──
  {
    id: "ma-typk-new2-058",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zu trigonometrischen Additionstheoremen sind richtig?\n\n1. sin(α + β) = sin α · cos β + cos α · sin β.\n2. cos(α + β) = cos α · cos β − sin α · sin β.\n3. sin(2α) = 2 · sin α · cos α.\n4. cos(2α) = cos²α − sin²α.\n5. sin(α + β) = sin α + sin β.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1 und 2" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: sin(α + β) ≠ sin α + sin β — das ist ein häufiger Fehler.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 059 Gleichungen – Ungleichungen (mittel) ──
  {
    id: "ma-typk-new2-059",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu Ungleichungen sind richtig?\n\n1. Beim Multiplizieren mit einer negativen Zahl kehrt sich das Relationszeichen um.\n2. Aus a < b folgt a + c < b + c.\n3. Aus a < b und c > 0 folgt a · c < b · c.\n4. |x| < a ist äquivalent zu −a < x < a.\n5. Beim Quadrieren einer Ungleichung bleibt die Richtung immer erhalten.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Beim Quadrieren muss man Fälle unterscheiden (z. B. −3 < −2, aber 9 > 4).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 060 Funktionen – Umkehrfunktion (mittel) ──
  {
    id: "ma-typk-new2-060",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu Umkehrfunktionen sind richtig?\n\n1. Die Umkehrfunktion existiert nur, wenn f bijektiv ist.\n2. Der Graph der Umkehrfunktion ist die Spiegelung an y = x.\n3. f(f⁻¹(x)) = x.\n4. Jede Funktion hat eine Umkehrfunktion.\n5. Die Umkehrfunktion von f(x) = 2x + 3 ist f⁻¹(x) = (x − 3)/2.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt. 4 falsch: Nur bijektive (umkehrbar eindeutige) Funktionen haben eine Umkehrfunktion (z. B. x² auf ganz ℝ nicht).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 061 Geometrie – Pythagoras (leicht) ──
  {
    id: "ma-typk-new2-061",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zum Satz des Pythagoras sind richtig?\n\n1. Im rechtwinkligen Dreieck gilt a² + b² = c² (c = Hypotenuse).\n2. Der Satz gilt nur für rechtwinklige Dreiecke.\n3. Die Hypotenuse ist die längste Seite.\n4. Ein Dreieck mit den Seiten 3, 4 und 5 ist rechtwinklig.\n5. Der Satz des Pythagoras gilt auch in nicht-euklidischer Geometrie.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt (3² + 4² = 9 + 16 = 25 = 5²). 5 falsch: Der Satz des Pythagoras gilt nur in der euklidischen Geometrie.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 062 Differentialrechnung – Linearisierung (schwer) ──
  {
    id: "ma-typk-new2-062",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Linearisierung sind richtig?\n\n1. Die Linearisierung einer Funktion in x₀ ist die Tangente in x₀.\n2. f(x) ≈ f(x₀) + f'(x₀) · (x − x₀) für x nahe x₀.\n3. Die Linearisierung ist eine lineare Näherung.\n4. Je weiter x von x₀ entfernt ist, desto genauer ist die Näherung.\n5. Die Linearisierung von e^x in x₀ = 0 ist 1 + x.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 5" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 5 korrekt (e^0 + e^0 · (x−0) = 1 + x). 4 falsch: Je weiter x von x₀ entfernt ist, desto ungenauer wird die Näherung.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 063 Vektoren – Ebenen (schwer) ──
  {
    id: "ma-typk-new2-063",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zu Ebenen im ℝ³ sind richtig?\n\n1. Eine Ebene kann durch einen Punkt und zwei linear unabhängige Richtungsvektoren beschrieben werden.\n2. Die Normalenform einer Ebene lautet n⃗ · (r⃗ − p⃗) = 0.\n3. Die Koordinatenform lautet ax + by + cz = d.\n4. Zwei Ebenen sind parallel, wenn ihre Normalenvektoren kollinear sind.\n5. Eine Ebene im ℝ³ wird durch 2 Punkte eindeutig bestimmt.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Eine Ebene wird durch 3 nicht kollineare Punkte bestimmt, nicht durch 2.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 064 Exponentialfunktionen – Logarithmische Skala (mittel) ──
  {
    id: "ma-typk-new2-064",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zur logarithmischen Skala sind richtig?\n\n1. Auf einer logarithmischen Skala werden gleiche Abstände als gleiche Verhältnisse dargestellt.\n2. Die pH-Skala ist ein Beispiel für eine logarithmische Skala.\n3. Die Dezibel-Skala ist logarithmisch.\n4. Auf einer logarithmischen Skala erscheint exponentielles Wachstum als Gerade.\n5. Die logarithmische Skala kann den Wert null darstellen.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: log(0) ist nicht definiert, daher kann die logarithmische Skala den Wert null nicht darstellen.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 065 Gleichungen – Bruchgleichungen (mittel) ──
  {
    id: "ma-typk-new2-065",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu Bruchgleichungen sind richtig?\n\n1. Man darf mit dem Hauptnenner multiplizieren, um die Brüche zu eliminieren.\n2. Lösungen, die den Nenner null machen, müssen ausgeschlossen werden.\n3. 1/(x−1) = 2 hat die Lösung x = 3/2.\n4. Beim Lösen können Scheinlösungen entstehen.\n5. a/b + c/b = (a+c)/b².",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2 und 4" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt (1/(x−1) = 2 → x−1 = 1/2 → x = 3/2). 5 falsch: a/b + c/b = (a+c)/b, nicht (a+c)/b².",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 066 Differentialrechnung – Elastizität (schwer) ──
  {
    id: "ma-typk-new2-066",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Ableitung in Anwendungen sind richtig?\n\n1. Die Ableitung gibt die momentane Änderungsrate an.\n2. v(t) = s'(t) beschreibt die Geschwindigkeit als Ableitung des Weges.\n3. a(t) = v'(t) = s''(t) beschreibt die Beschleunigung.\n4. Die Ableitung der Kostenfunktion ergibt die Grenzkosten.\n5. Die Ableitung hat keine praktische Bedeutung.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Ableitung hat zentrale praktische Bedeutung (Geschwindigkeit, Wachstumsraten, Optimierung etc.).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 067 Trigonometrie – Sinusfunktion (leicht) ──
  {
    id: "ma-typk-new2-067",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zur Sinusfunktion sind richtig?\n\n1. Die Periode der Sinusfunktion ist 2π.\n2. Die Amplitude von sin(x) ist 1.\n3. sin(0) = 0.\n4. Der Wertebereich von sin(x) ist [−1, 1].\n5. sin(x) ist eine gerade Funktion.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: sin(x) ist eine ungerade Funktion: sin(−x) = −sin(x).",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 068 Integralrechnung – Numerische Integration (schwer) ──
  {
    id: "ma-typk-new2-068",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur numerischen Integration sind richtig?\n\n1. Die Trapezregel approximiert die Fläche unter der Kurve durch Trapeze.\n2. Die Simpsonregel verwendet Parabeln zur Approximation.\n3. Je mehr Teilintervalle, desto genauer die Näherung.\n4. Numerische Integration wird verwendet, wenn keine Stammfunktion bekannt ist.\n5. Numerische Verfahren liefern exakte Ergebnisse.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Numerische Verfahren liefern Näherungen, keine exakten Ergebnisse.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 069 Gleichungen – Wurzelgleichungen (mittel) ──
  {
    id: "ma-typk-new2-069",
    subject: "mathematik",
    chapter: "mathe-kap2",
    text: "Welche der folgenden Aussagen zu Wurzelgleichungen sind richtig?\n\n1. Beim Quadrieren können Scheinlösungen entstehen.\n2. Die Lösung muss immer in der Originalgleichung überprüft werden.\n3. √(x²) = x gilt für alle x ∈ ℝ.\n4. √(a · b) = √a · √b für a, b ≥ 0.\n5. Die Quadratwurzel ist für negative Zahlen im Reellen nicht definiert.",
    options: [
      { id: "a", text: "Nur 1, 2, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 4" },
      { id: "c", text: "Nur 1, 4 und 5" },
      { id: "d", text: "Nur 1, 2, 3 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 4, 5 korrekt. 3 falsch: √(x²) = |x|, nicht x (z. B. √((−3)²) = √9 = 3 ≠ −3).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 070 Funktionen – Exponentieller Zerfall (leicht) ──
  {
    id: "ma-typk-new2-070",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zum exponentiellen Zerfall sind richtig?\n\n1. Die Funktion N(t) = N₀ · e^(−k·t) mit k > 0 beschreibt Zerfall.\n2. Die Funktion nimmt mit der Zeit ab.\n3. Die Funktion erreicht niemals den Wert null.\n4. Der Wert halbiert sich in konstanten Zeitintervallen.\n5. Exponentieller Zerfall ist linear.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Exponentieller Zerfall ist nichtlinear — die Kurve ist gekrümmt.",
    difficulty: "leicht",
    tags: ["typ-k"],
  },
  // ── 071 Vektoren – Linearkombination (mittel) ──
  {
    id: "ma-typk-new2-071",
    subject: "mathematik",
    chapter: "mathe-kap6",
    text: "Welche der folgenden Aussagen zu Linearkombinationen sind richtig?\n\n1. Ein Vektor v⃗ ist Linearkombination von a⃗ und b⃗, wenn v⃗ = α·a⃗ + β·b⃗.\n2. Zwei Vektoren im ℝ² sind linear unabhängig, wenn keiner ein Vielfaches des anderen ist.\n3. Drei linear unabhängige Vektoren spannen den ℝ³ auf.\n4. Der Nullvektor ist immer linear abhängig von anderen Vektoren.\n5. Zwei kollineare Vektoren sind linear unabhängig.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Kollineare Vektoren sind linear abhängig (einer ist ein Vielfaches des anderen).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 072 Differentialrechnung – Taylorentwicklung (schwer) ──
  {
    id: "ma-typk-new2-072",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zur Taylorentwicklung sind richtig?\n\n1. Die Taylorentwicklung approximiert eine Funktion durch ein Polynom.\n2. Die Taylorentwicklung von e^x um x₀ = 0 beginnt mit 1 + x + x²/2! + ...\n3. Je mehr Terme, desto besser die Approximation in der Nähe von x₀.\n4. Die Taylorentwicklung 1. Ordnung entspricht der Linearisierung.\n5. Die Taylorentwicklung konvergiert für alle Funktionen auf ganz ℝ.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Die Taylorentwicklung hat einen Konvergenzradius, der nicht immer unendlich ist (z. B. 1/(1+x²)).",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 073 Prozentrechnung – Mischungsaufgaben (mittel) ──
  {
    id: "ma-typk-new2-073",
    subject: "mathematik",
    chapter: "mathe-kap1",
    text: "Welche der folgenden Aussagen zu Mischungsaufgaben sind richtig?\n\n1. Die Mischungsrechnung basiert auf der Massenerhaltung.\n2. m₁ · c₁ + m₂ · c₂ = (m₁ + m₂) · c_mix ist die Grundgleichung.\n3. Die Mischkonzentration liegt immer zwischen den Einzelkonzentrationen.\n4. Das Mischungskreuz ist ein grafisches Hilfsmittel zur Lösung.\n5. Bei gleichen Mengen ist die Mischkonzentration immer genau der Mittelwert.",
    options: [
      { id: "a", text: "Nur 1, 2, 3, 4 und 5" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2, 3 und 5" },
      { id: "e", text: "Nur 2, 3 und 4" },
    ],
    correctOptionId: "a",
    explanation:
      "Alle 5 korrekt: Massenerhaltung (1), Grundgleichung (2), Mischkonzentration zwischen Einzelwerten (3), Mischungskreuz als Hilfsmittel (4), bei gleichen Mengen ist es der arithmetische Mittelwert (5).",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
  // ── 074 Funktionen – Rationale Funktionen (schwer) ──
  {
    id: "ma-typk-new2-074",
    subject: "mathematik",
    chapter: "mathe-kap5",
    text: "Welche der folgenden Aussagen zu rationalen Funktionen sind richtig?\n\n1. Eine rationale Funktion ist der Quotient zweier Polynome.\n2. Definitionslücken treten an Nullstellen des Nenners auf.\n3. Hebbare Definitionslücken entstehen, wenn Zähler und Nenner eine gemeinsame Nullstelle haben.\n4. Polstellen sind Definitionslücken, an denen die Funktion gegen ±∞ strebt.\n5. Jede rationale Funktion hat eine Polstelle.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 1, 2, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: z. B. f(x) = (x² − 1)/(x − 1) = x + 1 (für x ≠ 1) hat eine hebbare Lücke, aber keine Polstelle. Auch Polynome sind rationale Funktionen ohne Polstellen.",
    difficulty: "schwer",
    tags: ["typ-k"],
  },
  // ── 075 Geometrie – Trigonometrie am Einheitskreis (mittel) ──
  {
    id: "ma-typk-new2-075",
    subject: "mathematik",
    chapter: "mathe-kap3",
    text: "Welche der folgenden Aussagen zum Einheitskreis sind richtig?\n\n1. Der Einheitskreis hat den Radius 1 und den Mittelpunkt im Ursprung.\n2. sin(α) entspricht der y-Koordinate des Punktes auf dem Einheitskreis.\n3. cos(α) entspricht der x-Koordinate des Punktes auf dem Einheitskreis.\n4. tan(α) = sin(α)/cos(α).\n5. Im Einheitskreis gilt sin²(α) + cos²(α) = 2.",
    options: [
      { id: "a", text: "Nur 1, 2, 3 und 4" },
      { id: "b", text: "Nur 1, 2 und 3" },
      { id: "c", text: "Nur 1, 3 und 4" },
      { id: "d", text: "Nur 2, 3, 4 und 5" },
      { id: "e", text: "Alle (1, 2, 3, 4 und 5)" },
    ],
    correctOptionId: "a",
    explanation:
      "1, 2, 3, 4 korrekt. 5 falsch: Es gilt sin²(α) + cos²(α) = 1 (trigonometrischer Pythagoras), nicht 2.",
    difficulty: "mittel",
    tags: ["typ-k"],
  },
];
