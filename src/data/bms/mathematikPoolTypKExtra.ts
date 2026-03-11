/**
 * Mathematik Typ K Extra — 20 Kombinationsaufgaben (IDs ma-pool-typk-011 bis -030).
 * Korrekte Option variiert über A–E. Schwierigkeit: 8× Wert 1, 8× Wert 2, 4× Wert 3.
 */
import type { BMSFrage } from "@/lib/supabaseBMSFragen";

export const mathematikPoolTypKExtra: BMSFrage[] = [
  {
    id: "ma-pool-typk-011",
    typ: "K",
    fach: "mathematik",
    uk_id: "mathe-kap1",
    stamm: "Welche der folgenden Aussagen zu SI-Präfixen und Einheitenumrechnungen sind richtig?",
    aussagen: [
      { nr: 1, text: "Das Präfix 'nano' (n) steht für den Faktor 10⁻⁹.", korrekt: true },
      { nr: 2, text: "1 μg = 10⁻⁶ g.", korrekt: true },
      {
        nr: 3,
        text: "Das Präfix 'Mega' (M) steht für 10⁹.",
        korrekt: false,
      },
      { nr: 4, text: "1 km = 1000 m = 10³ m.", korrekt: true },
      {
        nr: 5,
        text: "Das Präfix 'Milli' (m) steht für 10⁻³.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 3, 4] },
      { key: "B", nummern: [2, 3, 5] },
      { key: "C", nummern: [1, 2, 4, 5] },
      { key: "D", nummern: [1, 2, 3, 4] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "C",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Mega (M) steht für 10⁶, nicht 10⁹ — 10⁹ ist Giga (G) (3 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "ma-pool-typk-012",
    typ: "K",
    fach: "mathematik",
    uk_id: "mathe-kap2",
    stamm:
      "Welche der folgenden Aussagen zu Binomischen Formeln und algebraischen Umformungen sind richtig?",
    aussagen: [
      { nr: 1, text: "(a + b)² = a² + 2ab + b².", korrekt: true },
      { nr: 2, text: "(a − b)² = a² − 2ab + b².", korrekt: true },
      {
        nr: 3,
        text: "(a + b)(a − b) = a² + b².",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Ein Polynom p(x) ist durch (x − x₀) teilbar, wenn p(x₀) = 0.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "(a + b)³ = a³ + 3a²b + 3ab² + b³.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 3, 5] },
      { key: "B", nummern: [1, 2, 3, 4] },
      { key: "C", nummern: [2, 3, 4, 5] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "D",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Die dritte Binomische Formel lautet (a+b)(a−b) = a² − b², nicht a² + b² (3 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  // ARCHIVED: ma-pool-typk-013 (Stochastik) — entfernt (nicht in MedAT 2026 Stichwortliste)
  {
    id: "ma-pool-typk-014",
    typ: "K",
    fach: "mathematik",
    uk_id: "mathe-kap5",
    stamm:
      "Welche der folgenden Aussagen zu Exponential- und Wachstumsfunktionen (Pharmakologie/Biologie) sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Exponentielles Wachstum folgt der Form N(t) = N₀ · eᵏᵗ mit Wachstumskonstante k > 0.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Die Halbwertszeit T½ beim radioaktiven Zerfall ist T½ = ln(2)/λ, wobei λ die Zerfallskonstante ist.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Die Funktion f(x) = eˣ hat die Ableitung f'(x) = x · eˣ⁻¹.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Für alle reellen x gilt eˣ > 0.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Der Logarithmus naturalis ln(eˣ) = x für alle reellen x.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 3, 4, 5] },
      { key: "B", nummern: [2, 3, 5] },
      { key: "C", nummern: [1, 2, 3, 4] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "D",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Die Ableitung von eˣ ist eˣ (nicht x·eˣ⁻¹); x·eˣ⁻¹ wäre die Potenzregel — falsche Anwendung (3 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "ma-pool-typk-015",
    typ: "K",
    fach: "mathematik",
    uk_id: "mathe-kap3",
    stamm: "Welche der folgenden Aussagen zu Bruchrechnung und rationalen Ausdrücken sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "a/b + c/d = (ad + bc)/(bd) (Addition von Brüchen mit verschiedenen Nennern).",
        korrekt: true,
      },
      {
        nr: 2,
        text: "(a/b) · (c/d) = (ac)/(bd).",
        korrekt: true,
      },
      {
        nr: 3,
        text: "(a/b) ÷ (c/d) = (a·c)/(b·d).",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Ein Bruch ist gekürzt, wenn Zähler und Nenner keinen gemeinsamen Teiler außer 1 haben.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "1/(x+1) + 1/(x−1) = 2x/(x²−1) für x ≠ ±1.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3] },
      { key: "B", nummern: [2, 4, 5] },
      { key: "C", nummern: [1, 2, 4, 5] },
      { key: "D", nummern: [1, 3, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "C",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Division durch einen Bruch erfolgt durch Multiplikation mit dem Kehrwert: (a/b) ÷ (c/d) = (a·d)/(b·c), nicht (a·c)/(b·d) (3 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "ma-pool-typk-016",
    typ: "K",
    fach: "mathematik",
    uk_id: "mathe-kap6",
    stamm:
      "Welche der folgenden Aussagen zu Vektoren in der Ebene (z. B. Kräftezerlegung in der Biomechanik) sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Der Betrag eines Vektors v⃗ = (vₓ, vᵧ) ist |v⃗| = √(vₓ² + vᵧ²).",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Das Skalarprodukt a⃗ · b⃗ = |a⃗| · |b⃗| · cos(α), wobei α der eingeschlossene Winkel ist.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Zwei Vektoren stehen senkrecht zueinander, wenn ihr Skalarprodukt 1 beträgt.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Die Addition zweier Vektoren erfolgt komponentenweise: (a₁+b₁, a₂+b₂).",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Ein Einheitsvektor hat den Betrag 1.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [1, 2, 4, 5] },
      { key: "C", nummern: [2, 3, 4] },
      { key: "D", nummern: [1, 3, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "B",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Zwei Vektoren stehen senkrecht zueinander, wenn ihr Skalarprodukt 0 (null) beträgt, nicht 1 (3 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ARCHIVED: ma-pool-typk-017 (Kombinatorik) — entfernt (nicht in MedAT 2026 Stichwortliste)
  {
    id: "ma-pool-typk-018",
    typ: "K",
    fach: "mathematik",
    uk_id: "mathe-kap3",
    stamm: "Welche der folgenden Aussagen zu Potenzgesetzen sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "aᵐ · aⁿ = aᵐ⁺ⁿ.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "(aᵐ)ⁿ = aᵐ⁺ⁿ.",
        korrekt: false,
      },
      {
        nr: 3,
        text: "a⁻ⁿ = 1/aⁿ (für a ≠ 0).",
        korrekt: true,
      },
      {
        nr: 4,
        text: "(a · b)ⁿ = aⁿ · bⁿ.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "aᵐ / aⁿ = aᵐ⁻ⁿ (für a ≠ 0).",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 3, 4, 5] },
      { key: "B", nummern: [1, 2, 4, 5] },
      { key: "C", nummern: [2, 3, 5] },
      { key: "D", nummern: [1, 2, 3, 4] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 3, 4 und 5. (aᵐ)ⁿ = aᵐ·ⁿ (Exponenten multiplizieren), nicht aᵐ⁺ⁿ (2 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "ma-pool-typk-019",
    typ: "K",
    fach: "mathematik",
    uk_id: "mathe-kap5",
    stamm: "Welche der folgenden Aussagen zu Nullstellen und Gleichungen sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Die Nullstellen einer quadratischen Gleichung ax² + bx + c = 0 können mit der Lösungsformel x = (−b ± √(b²−4ac)) / (2a) berechnet werden.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Ist die Diskriminante D = b² − 4ac < 0, hat die Gleichung keine reellen Lösungen.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Eine quadratische Gleichung kann höchstens eine reelle Nullstelle haben.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Ist D = 0, so gibt es genau eine (doppelte) reelle Lösung: x = −b/(2a).",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Das Produkt der Nullstellen x₁ und x₂ einer normierten quadratischen Gleichung x² + px + q = 0 ist q.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 3, 5] },
      { key: "D", nummern: [1, 2, 3, 4] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Eine quadratische Gleichung hat bis zu zwei reelle Nullstellen — bei D > 0 genau zwei (3 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "ma-pool-typk-020",
    typ: "K",
    fach: "mathematik",
    uk_id: "mathe-kap1",
    stamm:
      "Welche der folgenden Aussagen zu Prozentrechnung und Verhältnissen (klinisch relevant: Dosierungen) sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "25% von 200 mg sind 50 mg.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Eine Lösung mit 0,9 g NaCl in 100 ml Wasser hat eine Konzentration von 0,9% (m/V).",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Eine Steigerung um 20% gefolgt von einer Senkung um 20% ergibt wieder den Ausgangswert.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Wenn 30% einer Dosis 90 mg entsprechen, beträgt die Gesamtdosis 300 mg.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Der Dreisatz ist ein Verfahren zur Berechnung von Proportionalitäten.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 3, 4] },
      { key: "B", nummern: [2, 3, 5] },
      { key: "C", nummern: [1, 2, 3, 4] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "D",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. +20% dann −20%: 100 → 120 → 96 (nicht 100); das Ergebnis ist 96, nicht der Ausgangswert (3 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "ma-pool-typk-021",
    typ: "K",
    fach: "mathematik",
    uk_id: "mathe-kap5",
    stamm: "Welche der folgenden Aussagen zu Integralen und Flächenberechnungen sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Das bestimmte Integral ∫ₐᵇ f(x) dx gibt den orientierten Flächeninhalt zwischen Kurve und x-Achse auf [a,b] an.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "∫ xⁿ dx = xⁿ⁺¹/(n+1) + C für n ≠ −1 (Potenzregel der Integration).",
        korrekt: true,
      },
      {
        nr: 3,
        text: "∫ eˣ dx = eˣ + C.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "∫₀² x dx = 4.",
        korrekt: false,
      },
      {
        nr: 5,
        text: "∫ (1/x) dx = ln|x| + C für x ≠ 0.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4, 5] },
      { key: "B", nummern: [1, 2, 3, 4] },
      { key: "C", nummern: [1, 2, 3, 5] },
      { key: "D", nummern: [2, 3, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "C",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. ∫₀² x dx = [x²/2]₀² = 4/2 − 0 = 2, nicht 4 (4 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  {
    id: "ma-pool-typk-022",
    typ: "K",
    fach: "mathematik",
    uk_id: "mathe-kap2",
    stamm: "Welche der folgenden Aussagen zu linearen Gleichungssystemen sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Ein lineares Gleichungssystem mit zwei Gleichungen und zwei Unbekannten hat genau dann eine eindeutige Lösung, wenn die Koeffizientenmatrix invertierbar ist.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Zwei parallele Geraden (gleiche Steigung, verschiedener y-Achsenabschnitt) ergeben kein Schnittpunkt → das System ist unlösbar.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Beim Gauß-Verfahren werden Zeilen der Matrix subtrahiert, um eine obere Dreiecksform zu erhalten.",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Ein homogenes lineares Gleichungssystem (rechte Seite = 0) hat niemals eine Lösung.",
        korrekt: false,
      },
      {
        nr: 5,
        text: "Deckungsgleiche Geraden (identische Gleichungen) ergeben unendlich viele Lösungen.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 2, 3, 5] },
      { key: "C", nummern: [2, 4, 5] },
      { key: "D", nummern: [1, 3, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "B",
    erklaerung:
      "Richtig sind 1, 2, 3 und 5. Ein homogenes LGS hat immer mindestens die Nulllösung (Trivialllösung) x = 0 (4 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  // ARCHIVED: ma-pool-typk-023 (Normalverteilung) — entfernt (nicht in MedAT 2026 Stichwortliste)
  {
    id: "ma-pool-typk-024",
    typ: "K",
    fach: "mathematik",
    uk_id: "mathe-kap3",
    stamm: "Welche der folgenden Aussagen zu Wurzeln und Wurzelgesetzen sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "√(a · b) = √a · √b für a, b ≥ 0.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "√(a/b) = √a / √b für a ≥ 0, b > 0.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "√(a + b) = √a + √b für a, b > 0.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "(√a)² = a für a ≥ 0.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "√(a²) = |a| für alle reellen a.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [2, 3, 5] },
      { key: "C", nummern: [1, 3, 4, 5] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "D",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. √(a + b) ≠ √a + √b (z. B. √(9+16) = √25 = 5, aber √9 + √16 = 3 + 4 = 7) (3 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "ma-pool-typk-025",
    typ: "K",
    fach: "mathematik",
    uk_id: "mathe-kap6",
    stamm:
      "Welche der folgenden Aussagen zu Matrizen und Determinanten (z. B. Sensorauswertung in der Medizintechnik) sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Die Determinante einer 2×2-Matrix [[a,b],[c,d]] ist ad − bc.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Eine Matrix mit Determinante 0 ist invertierbar.",
        korrekt: false,
      },
      {
        nr: 3,
        text: "Bei der Matrizenmultiplikation gilt im Allgemeinen AB ≠ BA (nicht kommutativ).",
        korrekt: true,
      },
      {
        nr: 4,
        text: "Die Einheitsmatrix I hat auf der Hauptdiagonalen lauter Einsen und sonst Nullen.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "A · I = A für jede quadratische Matrix A.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4] },
      { key: "B", nummern: [2, 3, 5] },
      { key: "C", nummern: [1, 3, 4, 5] },
      { key: "D", nummern: [1, 2, 3, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 5] },
    ],
    korrekte_option: "C",
    erklaerung:
      "Richtig sind 1, 3, 4 und 5. Eine Matrix mit Determinante 0 ist singuläre Matrix und gerade NICHT invertierbar (2 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  {
    id: "ma-pool-typk-026",
    typ: "K",
    fach: "mathematik",
    uk_id: "mathe-kap1",
    stamm: "Welche der folgenden Aussagen zu rationalen und irrationalen Zahlen sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "Jede rationale Zahl lässt sich als Bruch p/q mit ganzen Zahlen p und q (q ≠ 0) darstellen.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "√2 ist eine irrationale Zahl.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Die Zahl π ist rational.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Alle natürlichen Zahlen sind auch ganze Zahlen.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Die Menge der reellen Zahlen enthält sowohl rationale als auch irrationale Zahlen.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [1, 3, 4] },
      { key: "C", nummern: [2, 3, 4, 5] },
      { key: "D", nummern: [1, 2, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "D",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. π ist irrational (nicht als Bruch darstellbar), was seit dem 18. Jahrhundert bewiesen ist (3 falsch).",
    schwierigkeit: 1,
    fsrs: null,
  },
  {
    id: "ma-pool-typk-027",
    typ: "K",
    fach: "mathematik",
    uk_id: "mathe-kap2",
    stamm:
      "Welche der folgenden Aussagen zu Winkeln und Kreisgeometrie (klinisch relevant: Winkelgrade in der Ophthalmologie/Orthopädie) sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "360° entsprechen 2π Radiant (rad).",
        korrekt: true,
      },
      {
        nr: 2,
        text: "90° entsprechen π/2 rad.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "Die Bogenlänge eines Kreisbogens mit Radius r und Mittelpunktswinkel α (in rad) berechnet sich als b = r²·α.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "Der Flächeninhalt eines Kreissektors mit Radius r und Winkel α (in rad) ist A = (1/2)·r²·α.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "180° entsprechen π rad.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 4, 5] },
      { key: "B", nummern: [1, 3, 5] },
      { key: "C", nummern: [2, 3, 4] },
      { key: "D", nummern: [1, 2, 3, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "A",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. Die Bogenlänge ist b = r·α (nicht r²·α); r²·α wäre der doppelte Sektorflächeninhalt (3 falsch).",
    schwierigkeit: 2,
    fsrs: null,
  },
  {
    id: "ma-pool-typk-028",
    typ: "K",
    fach: "mathematik",
    uk_id: "mathe-kap5",
    stamm: "Welche der folgenden Aussagen zu Grenzwerten und Stetigkeit sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "lim(x→0) sin(x)/x = 1.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Eine Funktion ist stetig in x₀, wenn lim(x→x₀) f(x) = f(x₀).",
        korrekt: true,
      },
      {
        nr: 3,
        text: "lim(x→∞) (1/x) = 1.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "lim(x→∞) (1 + 1/x)ˣ = e ≈ 2,718.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "Eine Funktion, die überall differenzierbar ist, ist auch überall stetig.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 4] },
      { key: "B", nummern: [1, 2, 4, 5] },
      { key: "C", nummern: [2, 3, 5] },
      { key: "D", nummern: [1, 3, 4, 5] },
      { key: "E", nummern: [1, 2, 3, 4, 5] },
    ],
    korrekte_option: "B",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. lim(x→∞)(1/x) = 0, nicht 1 — der Bruch wird für wachsendes x beliebig klein (3 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
  // ARCHIVED: ma-pool-typk-029 (Statistische Kennzahlen) — entfernt (nicht in MedAT 2026 Stichwortliste)
  {
    id: "ma-pool-typk-030",
    typ: "K",
    fach: "mathematik",
    uk_id: "mathe-kap5",
    stamm: "Welche der folgenden Aussagen zu Kurvendiskussion und Wendepunkten sind richtig?",
    aussagen: [
      {
        nr: 1,
        text: "An einem Wendepunkt wechselt die Krümmung der Funktion ihr Vorzeichen.",
        korrekt: true,
      },
      {
        nr: 2,
        text: "Ein Wendepunkt liegt vor, wenn f''(x₀) = 0 und f'''(x₀) ≠ 0.",
        korrekt: true,
      },
      {
        nr: 3,
        text: "An einem lokalen Minimum ist die zweite Ableitung f''(x₀) < 0.",
        korrekt: false,
      },
      {
        nr: 4,
        text: "An einem lokalen Maximum ist die erste Ableitung f'(x₀) = 0.",
        korrekt: true,
      },
      {
        nr: 5,
        text: "f(x) = x³ hat bei x = 0 einen Wendepunkt.",
        korrekt: true,
      },
    ],
    kombinationen: [
      { key: "A", nummern: [1, 2, 3, 5] },
      { key: "B", nummern: [2, 3, 4] },
      { key: "C", nummern: [1, 2, 3, 4] },
      { key: "D", nummern: [1, 3, 4, 5] },
      { key: "E", nummern: [1, 2, 4, 5] },
    ],
    korrekte_option: "E",
    erklaerung:
      "Richtig sind 1, 2, 4 und 5. An einem lokalen Minimum gilt f''(x₀) > 0 (linksgekrümmt, Schale nach oben), nicht f''(x₀) < 0 (3 falsch).",
    schwierigkeit: 3,
    fsrs: null,
  },
];
