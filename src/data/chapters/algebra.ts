import type { Chapter } from "./types";

export const algebraChapter: Chapter = {
  id: "algebra",
  subject: "mathematik",
  title: "Algebra & Zahlentheorie",
  subtitle: "Gleichungen, Potenzen, Logarithmen, Prozent & Zahlenmengen",
  icon: "🔢",
  chapterNumber: "Kapitel 1/3",
  readingTime: "~45 Minuten",
  level: "Grundlage",
  frequency: "Häufig geprüft",
  overview:
    "Dieses Kapitel behandelt die algebraischen Grundlagen, die für den BMS-Teil des MedAT essenziell sind: Von Kopfrechentechniken über Potenz- und Logarithmengesetze bis hin zu Gleichungen, Prozentrechnung, Zahlenmengen und Aussagenlogik. Da beim MedAT kein Taschenrechner erlaubt ist, liegt ein besonderer Fokus auf mentalem Rechnen und effizienten Lösungsstrategien. Quadratische Gleichungen, Prozentrechnung und Teilbarkeitsregeln gehören zu den am häufigsten geprüften Themen.",

  learningObjectives: [
    "Quadratische Gleichungen mit der Lösungsformel lösen",
    "Potenz-, Wurzel- und Logarithmengesetze anwenden",
    "Prozentrechnung und Zinseszins berechnen",
    "Gleichungssysteme lösen",
    "Zahlenmengen und Teilbarkeitsregeln kennen",
    "Grundlagen der Aussagenlogik verstehen",
  ],

  sections: [
    // ----------------------------------------------------------------
    // SECTION 1: Kopfrechnen & Grundrechenarten
    // ----------------------------------------------------------------
    {
      heading: "Kopfrechnen & Grundrechenarten",
      content: `Beim MedAT müssen alle Berechnungen ohne Hilfsmittel durchgeführt werden. Effiziente Kopfrechenstrategien sind daher der Schlüssel zum Erfolg.

<strong>Quadratzahlen bis 20² auswendig lernen</strong>
Diese Werte sollten sofort abrufbar sein:
• 1² = 1, 2² = 4, 3² = 9, 4² = 16, 5² = 25
• 6² = 36, 7² = 49, 8² = 64, 9² = 81, 10² = 100
• 11² = 121, 12² = 144, 13² = 169, 14² = 196, 15² = 225
• 16² = 256, 17² = 289, 18² = 324, 19² = 361, 20² = 400

<strong>Distributivgesetz zum schnellen Rechnen</strong>
Statt eine Multiplikation direkt auszuführen, kann man sie in einfachere Teilprodukte zerlegen:
• a · (b + c) = a·b + a·c
• Beispiel: 17 × 13 = 17 × 10 + 17 × 3 = 170 + 51 = <strong>221</strong>
• Beispiel: 24 × 25 = 24 × 100 / 4 = 2400 / 4 = <strong>600</strong>
• Beispiel: 99 × 7 = 100 × 7 - 1 × 7 = 700 - 7 = <strong>693</strong>

<strong>Bruchrechnung — Grundregeln</strong>

<strong>Addition und Subtraktion:</strong> Nur bei gleichem Nenner direkt möglich. Sonst: gemeinsamen Nenner (kgV der Nenner) bilden.
• a/b + c/d = (a·d + c·b) / (b·d)
• Beispiel: 2/3 + 1/4 = 8/12 + 3/12 = <strong>11/12</strong>
• Beispiel: 5/6 - 1/3 = 5/6 - 2/6 = <strong>3/6 = 1/2</strong>

<strong>Multiplikation:</strong> Zähler mal Zähler, Nenner mal Nenner.
• a/b × c/d = (a·c) / (b·d)
• Beispiel: 3/4 × 2/5 = 6/20 = <strong>3/10</strong>
• Tipp: Vorher kürzen spart Arbeit! 3/4 × 2/5 → kürze 2 und 4: 3/2 × 1/5 = <strong>3/10</strong>

<strong>Division:</strong> Mit dem Kehrwert multiplizieren.
• a/b ÷ c/d = a/b × d/c = (a·d) / (b·c)
• Beispiel: 3/4 ÷ 2/3 = 3/4 × 3/2 = 9/8 = <strong>1 1/8</strong>

<strong>Doppelbrüche vereinfachen:</strong>
• (a/b) / (c/d) = a/b × d/c
• Beispiel: (2/3) / (4/5) = 2/3 × 5/4 = 10/12 = <strong>5/6</strong>

<strong>Vorrangregeln (Punkt vor Strich)</strong>
1. Klammern zuerst
2. Potenzen und Wurzeln
3. Multiplikation und Division (von links nach rechts)
4. Addition und Subtraktion (von links nach rechts)`,
      merke:
        "⚠️ Beim MedAT ist <strong>KEIN Taschenrechner</strong> erlaubt! Übe alle Berechnungen im Kopf. Nützliche Werte: √2 ≈ 1,41 | √3 ≈ 1,73 | π ≈ 3,14 | e ≈ 2,72. Quadratzahlen bis 20² auswendig lernen!",
    },

    // ----------------------------------------------------------------
    // SECTION 2: Potenzen & Wurzeln
    // ----------------------------------------------------------------
    {
      heading: "Potenzen & Wurzeln",
      content: `Potenzen, Wurzeln und Logarithmen sind zentrale Werkzeuge der Algebra. Ihre Gesetze werden beim MedAT regelmäßig geprüft — insbesondere in Kombination mit naturwissenschaftlichen Fragestellungen (z. B. pH-Berechnung).

<strong>Potenzgesetze</strong>
Für a, b ≠ 0 und beliebige Exponenten n, m gelten:

• <strong>Gleiche Basis, Multiplikation:</strong> aⁿ · aᵐ = aⁿ⁺ᵐ
  Beispiel: 2³ · 2⁴ = 2⁷ = 128

• <strong>Gleiche Basis, Division:</strong> aⁿ / aᵐ = aⁿ⁻ᵐ
  Beispiel: 5⁶ / 5² = 5⁴ = 625

• <strong>Potenz einer Potenz:</strong> (aⁿ)ᵐ = aⁿ·ᵐ
  Beispiel: (2³)² = 2⁶ = 64

• <strong>Produkt mit gleichem Exponenten:</strong> (a · b)ⁿ = aⁿ · bⁿ
  Beispiel: (2 · 3)² = 2² · 3² = 4 · 9 = 36

• <strong>Nullter Exponent:</strong> a⁰ = 1 (für a ≠ 0)
  Beispiel: 7⁰ = 1, (-3)⁰ = 1

• <strong>Negativer Exponent:</strong> a⁻ⁿ = 1/aⁿ
  Beispiel: 2⁻³ = 1/2³ = 1/8 = 0,125

<strong>Wurzeln als Potenzen</strong>
Wurzeln lassen sich als Potenzen mit gebrochenen Exponenten darstellen:

• <strong>Quadratwurzel:</strong> √a = a^(1/2)
• <strong>n-te Wurzel:</strong> ⁿ√a = a^(1/n)
• <strong>Produktregel:</strong> √(a · b) = √a · √b
  Beispiel: √50 = √(25 · 2) = 5√2 ≈ 5 × 1,41 = 7,05
• <strong>Quotientregel:</strong> √(a/b) = √a / √b
• <strong>Allgemein:</strong> ⁿ√(aᵐ) = a^(m/n)

<strong>Logarithmen</strong>
Der Logarithmus ist die Umkehrfunktion der Potenzierung:

• <strong>Definition:</strong> log_a(x) = y ⟺ aʸ = x
  „Der Logarithmus von x zur Basis a ist der Exponent, mit dem man a potenzieren muss, um x zu erhalten."
  Beispiel: log₂(8) = 3, denn 2³ = 8

• <strong>Spezielle Logarithmen:</strong>
  ln = logₑ (natürlicher Logarithmus, Basis e ≈ 2,718)
  lg = log₁₀ (dekadischer Logarithmus, Basis 10)

<strong>Logarithmengesetze</strong>

• <strong>Multiplikation → Addition:</strong> log(a · b) = log(a) + log(b)
  Beispiel: lg(200) = lg(2 × 100) = lg(2) + lg(100) = 0,301 + 2 = 2,301

• <strong>Division → Subtraktion:</strong> log(a / b) = log(a) - log(b)
  Beispiel: lg(5) = lg(10/2) = lg(10) - lg(2) = 1 - 0,301 = 0,699

• <strong>Potenz → Faktor:</strong> log(aⁿ) = n · log(a)
  Beispiel: lg(1000) = lg(10³) = 3 · lg(10) = 3

• <strong>Basiswechsel:</strong> log_a(x) = log_b(x) / log_b(a)
  Beispiel: log₂(8) = lg(8) / lg(2) = 0,903 / 0,301 = 3

• <strong>Spezielle Werte:</strong> log_a(1) = 0 (denn a⁰ = 1), log_a(a) = 1 (denn a¹ = a)`,
      merke:
        "Potenzgesetze: Gleiche Basis → Exponenten <strong>addieren</strong> (Mult.) bzw. <strong>subtrahieren</strong> (Div.). Log-Gesetze: Multiplikation → <strong>Addition</strong>, Division → <strong>Subtraktion</strong>, Potenz → <strong>Faktor</strong>. pH = -lg[H⁺] ist ein Logarithmus!",
    },

    // ----------------------------------------------------------------
    // SECTION 3: Gleichungen & Ungleichungen
    // ----------------------------------------------------------------
    {
      heading: "Gleichungen & Ungleichungen",
      content: `Gleichungen und Ungleichungen gehören zu den am häufigsten geprüften Themen im MedAT-BMS. Die quadratische Gleichung und ihre Lösungsformel sind absolutes Pflichtwissen.

<strong>Lineare Gleichungen</strong>
Allgemeine Form: ax + b = 0 → x = -b/a
• Auf beiden Seiten die gleichen Operationen durchführen
• Beispiel: 3x + 7 = 22 → 3x = 15 → x = 5

<strong>Quadratische Gleichungen</strong>
Allgemeine Form: ax² + bx + c = 0

<strong>Lösungsformel (Mitternachtsformel / abc-Formel):</strong>
x = (-b ± √(b² - 4ac)) / (2a)

<strong>Diskriminante D = b² - 4ac</strong> bestimmt die Lösungsanzahl:
• <strong>D > 0:</strong> zwei verschiedene reelle Lösungen
• <strong>D = 0:</strong> genau eine reelle Lösung (Doppellösung)
• <strong>D < 0:</strong> keine reelle Lösung (nur komplexe Lösungen)

Beispiel: x² - 5x + 6 = 0
→ a = 1, b = -5, c = 6
→ D = 25 - 24 = 1 > 0 → zwei Lösungen
→ x = (5 ± 1) / 2 → x₁ = 3, x₂ = 2

<strong>p-q-Formel (Normalform x² + px + q = 0):</strong>
x = -p/2 ± √((p/2)² - q)
Für obiges Beispiel: p = -5, q = 6 → x = 5/2 ± √(25/4 - 6) = 5/2 ± 1/2

<strong>Satz von Vieta</strong>
Für die Lösungen x₁, x₂ einer quadratischen Gleichung x² + px + q = 0 gilt:
• x₁ + x₂ = -p (= -b/a in der allgemeinen Form)
• x₁ · x₂ = q (= c/a in der allgemeinen Form)
Das ermöglicht schnelles Lösen durch „geschicktes Raten": Welche zwei Zahlen haben die Summe -p und das Produkt q?

<strong>Ungleichungen</strong>
Die Rechenregeln sind wie bei Gleichungen, mit einer wichtigen Ausnahme:
• <strong>Multiplikation oder Division mit einer negativen Zahl dreht das Ungleichungszeichen um!</strong>
  Beispiel: -2x > 6 → x < -3 (Zeichen dreht sich!)

<strong>Betragsungleichungen:</strong>
• |x| < a → -a < x < a (offenes Intervall)
• |x| > a → x < -a oder x > a

<strong>Gleichungssysteme (zwei Gleichungen, zwei Unbekannte)</strong>

<strong>1. Einsetzungsverfahren:</strong> Eine Gleichung nach einer Variablen auflösen, in die andere einsetzen.
<strong>2. Gleichsetzungsverfahren:</strong> Beide Gleichungen nach derselben Variablen auflösen und gleichsetzen.
<strong>3. Additionsverfahren:</strong> Die Gleichungen so multiplizieren, dass sich beim Addieren eine Variable eliminiert.

Beispiel (Additionsverfahren):
2x + 3y = 7 | × 2
4x - 3y = 5 | × 1
→ 4x + 6y = 14
→ 4x - 3y = 5
Subtraktion: 9y = 9 → y = 1, einsetzen: 2x + 3 = 7 → x = 2`,
      merke:
        "Diskriminante D = b²-4ac bestimmt die Lösungsanzahl. <strong>D > 0</strong>: 2 Lösungen, <strong>D = 0</strong>: 1 Lösung, <strong>D < 0</strong>: keine reelle Lösung. ACHTUNG bei Ungleichungen: <strong>Negative Zahl × dreht ≤ zu ≥!</strong>",
      altfrage:
        "\"Löse x² - 5x + 6 = 0\" → p-q-Formel oder Vieta: x₁+x₂ = 5, x₁·x₂ = 6 → <strong>x₁ = 2, x₂ = 3</strong>.",
    },

    // ----------------------------------------------------------------
    // SECTION 4: Prozentrechnung
    // ----------------------------------------------------------------
    {
      heading: "Prozentrechnung",
      content: `Prozentrechnung ist allgegenwärtig — sowohl im MedAT als auch im klinischen Alltag (Dosierung, Verdünnung, Statistik). Die Grundformeln müssen sicher sitzen.

<strong>Grundbegriffe</strong>
• <strong>Grundwert G</strong> = das Ganze (100 %)
• <strong>Prozentwert P</strong> = der Anteil
• <strong>Prozentsatz p</strong> = der Anteil in Prozent

<strong>Grundformel:</strong> P = G · p/100
→ G = P · 100/p
→ p = P/G · 100

Beispiel: 20 % von 250 → P = 250 · 20/100 = <strong>50</strong>
Beispiel: 36 ist wie viel Prozent von 120? → p = 36/120 · 100 = <strong>30 %</strong>

<strong>Prozentuale Veränderung</strong>
• Neuer Wert: G_neu = G · (1 + p/100) bei Zunahme
• Neuer Wert: G_neu = G · (1 - p/100) bei Abnahme
• Prozentuale Änderung = (Neu - Alt) / Alt × 100 %

Beispiel: Ein Preis steigt von 80 € um 15 %:
G_neu = 80 · (1 + 15/100) = 80 · 1,15 = <strong>92 €</strong>

<strong>Achtung:</strong> Eine Erhöhung um 25 % und anschließende Senkung um 25 % ergibt <strong>nicht</strong> den Ausgangswert!
100 · 1,25 · 0,75 = 93,75 (nicht 100!)

<strong>Zinseszins</strong>
Wenn Zinsen auf das bereits verzinste Kapital berechnet werden:

<strong>K_n = K₀ · (1 + p/100)ⁿ</strong>
• K₀ = Anfangskapital
• p = Zinssatz in Prozent pro Periode
• n = Anzahl der Perioden
• K_n = Endkapital nach n Perioden

Beispiel: 1000 € bei 5 % Zinsen für 3 Jahre:
K₃ = 1000 · (1,05)³ = 1000 · 1,1576 ≈ <strong>1157,63 €</strong>

<strong>Dreisatz</strong>

<strong>Proportionaler Dreisatz</strong> (mehr → mehr):
Wenn 5 Äpfel 3 € kosten, was kosten 8 Äpfel?
5 Äpfel → 3 € | 1 Apfel → 0,60 € | 8 Äpfel → <strong>4,80 €</strong>

<strong>Antiproportionaler Dreisatz</strong> (mehr → weniger):
Wenn 4 Arbeiter 12 Tage brauchen, wie lange brauchen 6 Arbeiter?
4 Arbeiter → 12 Tage | 1 Arbeiter → 48 Tage | 6 Arbeiter → <strong>8 Tage</strong>

<strong>Mischungsrechnung</strong>
Beim Mischen zweier Lösungen mit unterschiedlichen Konzentrationen:
c_gesamt = (m₁·c₁ + m₂·c₂) / (m₁ + m₂)

Beispiel: 200 ml einer 30 %-Lösung mit 300 ml einer 10 %-Lösung:
c = (200·30 + 300·10) / (200+300) = (6000+3000)/500 = 9000/500 = <strong>18 %</strong>`,
      merke:
        "Zinseszins: K_n = K₀ · (1 + p/100)ⁿ. <strong>Gleiche Formel</strong> wie Bakterienwachstum und radioaktiver Zerfall — nur mit (1 - p/100) für Zerfall! Prozentuale Änderung = (Neu - Alt)/Alt × 100%.",
      klinik:
        "Dosierungsberechnungen, Verdünnungsreihen, Sensitivität/Spezifität — alles basiert auf sicherem Umgang mit Prozentrechnung.",
    },

    // ----------------------------------------------------------------
    // SECTION 5: Zahlenmengen & Teilbarkeit
    // ----------------------------------------------------------------
    {
      heading: "Zahlenmengen & Teilbarkeit",
      content: `Zahlenmengen und Teilbarkeitsregeln sind klassische MedAT-Themen, die mit sicherer Kenntnis schnell zu Punkten führen.

<strong>Die Zahlenmengenhierarchie</strong>
ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ

• <strong>ℕ — Natürliche Zahlen:</strong> {1, 2, 3, 4, ...} (manchmal mit 0: ℕ₀)
  Die Zahlen zum Zählen. Abgeschlossen unter Addition und Multiplikation.

• <strong>ℤ — Ganze Zahlen:</strong> {..., -2, -1, 0, 1, 2, ...}
  Erweiterung von ℕ um die negativen Zahlen und Null. Abgeschlossen unter Subtraktion.

• <strong>ℚ — Rationale Zahlen:</strong> Alle Zahlen, die als Bruch p/q (p, q ∈ ℤ, q ≠ 0) darstellbar sind.
  Dazu gehören auch endliche und periodische Dezimalzahlen.
  Beispiele: 1/3 = 0,333..., 7/4 = 1,75, -2/5 = -0,4

• <strong>ℝ — Reelle Zahlen:</strong> Alle rationalen und irrationalen Zahlen.
  Irrationale Zahlen sind nicht als Bruch darstellbar: √2 ≈ 1,41421..., π ≈ 3,14159..., e ≈ 2,71828...

<strong>Primzahlen</strong>
Eine Primzahl ist eine natürliche Zahl > 1, die nur durch 1 und sich selbst teilbar ist.

Primzahlen bis 50: <strong>2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47</strong>
Hinweis: 2 ist die einzige gerade Primzahl. 1 ist <strong>keine</strong> Primzahl.

<strong>Primfaktorzerlegung</strong>
Jede natürliche Zahl > 1 lässt sich eindeutig als Produkt von Primzahlen darstellen.
• 60 = 2² · 3 · 5
• 84 = 2² · 3 · 7
• 360 = 2³ · 3² · 5

<strong>ggT und kgV</strong>
• <strong>ggT (größter gemeinsamer Teiler):</strong> Produkt der gemeinsamen Primfaktoren mit dem jeweils kleinsten Exponenten.
  ggT(60, 84) = 2² · 3 = <strong>12</strong>

• <strong>kgV (kleinstes gemeinsames Vielfaches):</strong> Produkt aller vorkommenden Primfaktoren mit dem jeweils größten Exponenten.
  kgV(60, 84) = 2² · 3 · 5 · 7 = <strong>420</strong>

• Zusammenhang: ggT(a,b) · kgV(a,b) = a · b

<strong>Teilbarkeitsregeln</strong>
Diese Regeln ermöglichen schnelle Überprüfung ohne Division:

• <strong>Durch 2:</strong> Die letzte Ziffer ist gerade (0, 2, 4, 6, 8)
• <strong>Durch 3:</strong> Die Quersumme ist durch 3 teilbar
• <strong>Durch 4:</strong> Die letzten zwei Ziffern bilden eine durch 4 teilbare Zahl
• <strong>Durch 5:</strong> Die letzte Ziffer ist 0 oder 5
• <strong>Durch 6:</strong> Teilbar durch 2 und durch 3
• <strong>Durch 9:</strong> Die Quersumme ist durch 9 teilbar
• <strong>Durch 10:</strong> Die letzte Ziffer ist 0

Beispiel: Ist 4536 durch 3 teilbar? Quersumme: 4+5+3+6 = 18, und 18/3 = 6 → <strong>Ja</strong>.
Ist 4536 durch 9 teilbar? Quersumme: 18, und 18/9 = 2 → <strong>Ja</strong>.
Ist 4536 durch 4 teilbar? Letzte zwei Ziffern: 36, und 36/4 = 9 → <strong>Ja</strong>.`,
      vergleichsTabelle: {
        headers: ["Teiler", "Regel", "Beispiel"],
        rows: [
          ["2", "Letzte Ziffer gerade (0,2,4,6,8)", "128 → 8 ist gerade → ✓"],
          ["3", "Quersumme durch 3 teilbar", "123 → 1+2+3 = 6 → 6/3 = 2 → ✓"],
          ["4", "Letzte 2 Ziffern durch 4 teilbar", "1324 → 24/4 = 6 → ✓"],
          ["5", "Letzte Ziffer 0 oder 5", "735 → endet auf 5 → ✓"],
          ["9", "Quersumme durch 9 teilbar", "729 → 7+2+9 = 18 → 18/9 = 2 → ✓"],
          ["10", "Letzte Ziffer ist 0", "4530 → endet auf 0 → ✓"],
        ],
      },
      merke:
        "Primzahlen bis 20: <strong>2, 3, 5, 7, 11, 13, 17, 19</strong>. Teilbarkeit durch 3: <strong>Quersumme</strong> durch 3 teilbar. Durch 9: Quersumme durch 9 teilbar.",
    },

    // ----------------------------------------------------------------
    // SECTION 6: Mengen & Logik
    // ----------------------------------------------------------------
    {
      heading: "Mengen & Logik",
      content: `Mengenlehre und Aussagenlogik bilden das formale Fundament der Mathematik. Im MedAT werden diese Themen sowohl direkt als auch indirekt geprüft — die Implikation ist auch für den KFF-Teil (Kognitive Fähigkeiten und Fertigkeiten) relevant.

<strong>Mengenoperationen</strong>

• <strong>Schnittmenge A ∩ B:</strong> Alle Elemente, die in A <strong>und</strong> in B enthalten sind.
  Beispiel: A = {1,2,3,4}, B = {3,4,5,6} → A ∩ B = {3,4}

• <strong>Vereinigung A ∪ B:</strong> Alle Elemente, die in A <strong>oder</strong> in B (oder beiden) enthalten sind.
  Beispiel: A ∪ B = {1,2,3,4,5,6}

• <strong>Differenz A \\ B:</strong> Alle Elemente, die in A, aber <strong>nicht</strong> in B enthalten sind.
  Beispiel: A \\ B = {1,2}

• <strong>Komplement Ā (oder Aᶜ):</strong> Alle Elemente der Grundmenge, die <strong>nicht</strong> in A enthalten sind.

• <strong>Leere Menge ∅:</strong> Die Menge ohne Elemente. A ∩ Ā = ∅

<strong>Rechenregeln für Mengen</strong>
• A ∩ B = B ∩ A (kommutativ)
• A ∪ B = B ∪ A (kommutativ)
• A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C) (distributiv)
• De Morgan: <span style="text-decoration:overline">A ∪ B</span> = Ā ∩ B̄ und <span style="text-decoration:overline">A ∩ B</span> = Ā ∪ B̄

<strong>Aussagenlogik — Junktoren</strong>

• <strong>UND (Konjunktion, ∧):</strong> A ∧ B ist wahr, wenn <strong>beide</strong> Aussagen wahr sind.
• <strong>ODER (Disjunktion, ∨):</strong> A ∨ B ist wahr, wenn <strong>mindestens eine</strong> Aussage wahr ist (inklusives Oder).
• <strong>NICHT (Negation, ¬):</strong> ¬A kehrt den Wahrheitswert um.
• <strong>Implikation (→):</strong> A → B bedeutet „Wenn A, dann B."
  A → B ist <strong>nur dann falsch</strong>, wenn A wahr und B falsch ist.
  Alle anderen Kombinationen ergeben wahr — insbesondere: Aus einer falschen Aussage folgt alles (ex falso quodlibet).

<strong>Kontraposition</strong>
Die logische Äquivalenz A → B ⟺ ¬B → ¬A ist die <strong>Kontraposition</strong>.
• Beispiel: „Wenn es regnet, ist die Straße nass" ⟺ „Wenn die Straße nicht nass ist, regnet es nicht."
• Die Kontraposition ist die Basis vieler indirekter Beweise und kommt im KFF-Teil vor.

<strong>Notwendige vs. hinreichende Bedingung</strong>
• A ist <strong>hinreichend</strong> für B, wenn A → B gilt (A allein reicht aus, um B zu garantieren).
  Beispiel: „Regen" ist hinreichend für „Straße nass" — aber nicht notwendig (Sprinkler!).
• A ist <strong>notwendig</strong> für B, wenn B → A gilt (ohne A kann B nicht eintreten).
  Beispiel: „Sauerstoff" ist notwendig für „Feuer" — aber nicht hinreichend (man braucht auch Brennstoff und Zündtemperatur).

<strong>Wahrheitstafel der Implikation</strong>
A wahr, B wahr → A → B <strong>wahr</strong>
A wahr, B falsch → A → B <strong>falsch</strong>
A falsch, B wahr → A → B <strong>wahr</strong>
A falsch, B falsch → A → B <strong>wahr</strong>

<strong>Quantoren</strong>
• <strong>Allquantor ∀:</strong> „Für alle" — ∀x: P(x) bedeutet „Für jedes x gilt P(x)."
• <strong>Existenzquantor ∃:</strong> „Es gibt (mindestens ein)" — ∃x: P(x) bedeutet „Es gibt ein x, für das P(x) gilt."
• Negation: ¬(∀x: P(x)) ⟺ ∃x: ¬P(x) und ¬(∃x: P(x)) ⟺ ∀x: ¬P(x)`,
      merke:
        "Kontraposition: <strong>A → B</strong> ist logisch äquivalent zu <strong>¬B → ¬A</strong>. Das ist die Basis vieler mathematischer Beweise und auch relevant für den KFF-Implikationstest!",
    },
  ],

  keyFacts: [
    {
      label: "Lösungsformel",
      value: "x = (-b ± √(b²-4ac)) / (2a)",
    },
    {
      label: "Diskriminante",
      value: "D > 0: 2 Lösungen | D = 0: 1 Lösung | D < 0: keine reelle",
    },
    {
      label: "Potenzgesetz",
      value: "aⁿ · aᵐ = aⁿ⁺ᵐ",
    },
    {
      label: "Logarithmusgesetz",
      value: "log(a · b) = log(a) + log(b)",
    },
    {
      label: "Zinseszins",
      value: "Kₙ = K₀ · (1 + p/100)ⁿ",
    },
    {
      label: "Teilbarkeit durch 3",
      value: "Quersumme durch 3 teilbar",
    },
    {
      label: "Zahlenmengen",
      value: "ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ",
    },
    {
      label: "Kontraposition",
      value: "A → B ⟺ ¬B → ¬A",
    },
    {
      label: "Nützliche Wurzeln",
      value: "√2 ≈ 1,41 | √3 ≈ 1,73",
    },
    {
      label: "Primzahlen",
      value: "2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47",
    },
  ],

  selfTestQuestions: [
    {
      question: "Wie viele reelle Lösungen hat x² + 2x + 5 = 0?",
      options: ["0", "1", "2", "3", "Unendlich"],
      correctIndex: 0,
      explanation:
        "D = b² - 4ac = 4 - 20 = -16 < 0 → keine reelle Lösung.",
    },
    {
      question: "Was ist log₂(8)?",
      options: ["2", "3", "4", "8", "16"],
      correctIndex: 1,
      explanation:
        "log₂(8) = 3, denn 2³ = 8.",
    },
    {
      question: "20 % von 250 ist...",
      options: ["25", "40", "50", "75", "100"],
      correctIndex: 2,
      explanation:
        "P = G · p/100 = 250 · 20/100 = 50.",
    },
    {
      question: "Ist 123 durch 3 teilbar?",
      options: ["Ja", "Nein", "Nur durch 9", "Nur durch 6", "Unbestimmt"],
      correctIndex: 0,
      explanation:
        "Quersumme: 1 + 2 + 3 = 6, und 6 ist durch 3 teilbar → Ja.",
    },
    {
      question: "Was bedeutet A → B?",
      options: ["A und B", "A oder B", "Wenn A, dann B", "Nicht A", "A gleich B"],
      correctIndex: 2,
      explanation:
        "A → B bedeutet 'Wenn A, dann B' (Implikation). Kontraposition: ¬B → ¬A.",
    },
  ],

  summary: [
    "Kopfrechnen: Quadratzahlen bis 20² auswendig, Distributivgesetz nutzen (z. B. 17×13 = 170+51 = 221). Bruchrechnung: gemeinsamer Nenner für ±, Zähler×Zähler/Nenner×Nenner für ×, Kehrwert für ÷.",
    "Potenzgesetze: aⁿ·aᵐ = aⁿ⁺ᵐ, aⁿ/aᵐ = aⁿ⁻ᵐ, (aⁿ)ᵐ = aⁿ·ᵐ, a⁰ = 1, a⁻ⁿ = 1/aⁿ. Wurzeln: √a = a^(1/2). Logarithmen: log_a(x) = y ⟺ aʸ = x. log(a·b) = log(a)+log(b).",
    "Quadratische Gleichung: x = (-b±√(b²-4ac))/(2a). Diskriminante D bestimmt Lösungsanzahl. Vieta: x₁+x₂ = -b/a, x₁·x₂ = c/a. Ungleichungen: negative Multiplikation dreht das Zeichen um.",
    "Prozentrechnung: P = G·p/100. Zinseszins: Kₙ = K₀·(1+p/100)ⁿ — gleiche Struktur wie exponentielles Wachstum/Zerfall. Dreisatz: proportional (mehr→mehr) und antiproportional (mehr→weniger).",
    "Zahlenmengen: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Teilbarkeitsregeln über Quersumme (3, 9) oder letzte Ziffern (2, 4, 5, 10). Primfaktorzerlegung für ggT und kgV.",
    "Mengenlehre: ∩ (Schnitt), ∪ (Vereinigung), \\ (Differenz). Aussagenlogik: ∧ (UND), ∨ (ODER), ¬ (NICHT), → (Implikation). Kontraposition: A→B ⟺ ¬B→¬A.",
  ],
};
