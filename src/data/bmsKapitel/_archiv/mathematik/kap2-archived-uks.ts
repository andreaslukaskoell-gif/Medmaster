/**
 * Archivierte Unterkapitel aus kap2-algebra-geometrie.ts
 * Grund: Nicht in der MedAT 2026 Stichwortliste enthalten.
 * - ma-2-02: Terme, Rechengesetze und Betragsgleichungen
 * - ma-3-03: Koordinatensystem und analytische Geometrie
 */

import type { Kapitel } from "../../types";

type ArchivedUK = Kapitel["unterkapitel"][number];

export const archivedMathAlgebraUKs: ArchivedUK[] = [
  {
    id: "ma-2-02",
    title: "Terme, Rechengesetze und Betragsgleichungen",
    stichworte: [
      "Termumformung",
      "Distributivgesetz",
      "Kommutativgesetz",
      "Assoziativgesetz",
      "Ausklammern",
      "Betrag",
      "Betragsgleichung",
      "Betragsungleichung",
      "Faktorisierung",
      "Vorzeichenregeln",
      "Klammernregeln",
      "Summenzeichen",
    ],
    content: `Ein Patient erhält Methotrexat in ansteigender Dosierung: Woche 1 bekommt er 5 mg, Woche 2 dann 10 mg, Woche 3 dann 15 mg — immer 5 mg mehr. Nach 8 Wochen will der Arzt die kumulative Gesamtdosis berechnen. Dafür braucht er Termumformung, das Summenzeichen und sicheres Rechnen mit Klammern. Genau dieses Handwerkszeug — Rechengesetze, Vorzeichen, Betrag und Σ — steckt hinter fast jeder MedAT-Rechenaufgabe.

---

## Die drei Grundrechengesetze

Drei Gesetze regeln, wie du Terme umordnen und umklammern darfst. Ihre Namen kommen aus dem Lateinischen und verraten ihre Bedeutung:

**Kommutativgesetz** (lat. *commutare* = vertauschen): Die Reihenfolge ist egal.
- a + b = b + a und a × b = b × a
- Gilt **nicht** für Subtraktion und Division: 5 − 3 ≠ 3 − 5 und 6 ÷ 2 ≠ 2 ÷ 6

**Assoziativgesetz** (lat. *associare* = verbinden): Die Klammergruppierung ist egal.
- (a + b) + c = a + (b + c) und (a × b) × c = a × (b × c)
- Rechentrick: 17 + 48 + 3 = (17 + 3) + 48 = 20 + 48 = 68

**Distributivgesetz** (lat. *distribuere* = verteilen): Multiplikation wird über die Addition „verteilt".
- **a × (b + c) = a × b + a × c**

Warum funktioniert das? Stell dir ein Rechteck mit Breite a und Höhe (b + c) vor. Die Gesamtfläche ist a × (b + c). Du kannst es in zwei Teilrechtecke zerlegen — eines mit Höhe b, eines mit Höhe c. Die Flächen addiert ergeben dasselbe: a × b + a × c.

{{DIAGRAM:distributive-rectangle}}

**Vorwärts** = Ausmultiplizieren: 3(x + 4) = 3x + 12.
**Rückwärts** = Ausklammern: 3x + 12 = 3(x + 4).

> **Merke:** Kommutativ (Reihenfolge) und Assoziativ (Klammerung) gelten NUR für Addition und Multiplikation. Das Distributivgesetz a(b+c) = ab + ac verbindet Multiplikation mit Addition — vorwärts ausmultiplizieren, rückwärts ausklammern.

---

## Vorzeichenregeln und die Minusklammer-Falle

**Vorzeichenregeln:** Gleiche Vorzeichen → positiv, verschiedene → negativ.
- (+) × (+) = (+), (−) × (−) = (+)
- (+) × (−) = (−), (−) × (+) = (−)

**Minusklammer auflösen — der häufigste MedAT-Fehler:**

−(a + b − c) = −a − b + c

*Denkprozess:* Das Minus vor der Klammer ist eigentlich der Faktor (−1). Das Distributivgesetz liefert: (−1) × a + (−1) × b + (−1) × (−c) = −a − b + c. Jedes Vorzeichen dreht sich um.

Konkretes Beispiel: −(3x − 5) = −3x **+ 5**, nicht −3x − 5! Der Fehler passiert, weil man das Vorzeichen von −5 vergisst umzudrehen.

**Klammer mal Klammer:** (a + b)(c + d) = ac + ad + bc + bd — jeder Term der ersten Klammer mit jedem der zweiten (→ binomische Formeln in ma-2-03).

**Rechenbeispiel — Medikamenten-Gesamtkosten:**
Ein Krankenhaus bestellt n Packungen. Preis pro Packung: p Euro, Versandkosten pro Packung: v Euro, Rabatt pro Packung: r Euro. Gesamtkosten:

*Denkprozess:* K = n × p + n × v − n × r. Jeder Summand enthält den Faktor n. Ausklammern: K = n(p + v − r). Sofort erkennbar: Stückkosten = (p + v − r).

> **Merke:** Minus vor Klammer = Distributivgesetz mit Faktor (−1). ALLE Vorzeichen drehen sich um: −(a − b) = −a + b. Immer durch Rückmultiplizieren kontrollieren!

---

## Ausklammern und Faktorisieren

Ausklammern ist das Distributivgesetz rückwärts — und eine der wichtigsten Vereinfachungstechniken.

**Systematisches Vorgehen:**
1. **ggT der Koeffizienten bestimmen:** Bei 12x² + 18x → ggT(12, 18) = 6
2. **Kleinste Potenz gemeinsamer Variablen:** x kommt in beiden Termen vor, kleinste Potenz x¹ → Faktor 6x
3. **Herausziehen und Probe:** 12x² + 18x = 6x(2x + 3) — Probe: 6x × 2x = 12x², 6x × 3 = 18x ✓

**Rechenbeispiel — Infusionsrate:**
Gesamtvolumen V = π r² h₁ + π r² h₂ (Volumen zweier zylindrischer Infusionsbeutel mit gleichem Radius).

*Denkprozess:* Gemeinsame Faktoren: π, r², also V = π r²(h₁ + h₂). Das Gesamtvolumen hängt nur noch von der Höhensumme ab — eine sofort interpretierbare Form.

**Bruchrechnung mit Variablen** nutzt dieselbe Technik. Um (6x² + 12x) / (3x) zu vereinfachen: Zähler ausklammern → 6x(x + 2) / (3x) = 2(x + 2). Kürzen geht nur mit Faktoren, nie mit Summanden!

> **Merke:** Ausklammern = ggT der Koeffizienten × kleinste gemeinsame Variablenpotenz. Kürzen von Brüchen nur mit Faktoren — niemals einzelne Summanden streichen!

---

## Betrag — Abstand auf der Zahlengeraden

Der **Betrag** |a| gibt den Abstand von a zur Null an: |5| = 5, |−3| = 3, |0| = 0. Er ist immer ≥ 0.

Formal: |a| = a falls a ≥ 0, und |a| = −a falls a < 0 (das Minus macht die negative Zahl positiv).

Die entscheidende Einsicht: **|a − b| = Abstand zwischen a und b** auf der Zahlengeraden. |7 − 3| = 4 und |3 − 7| = 4 — egal, in welche Richtung du misst.

**Rechenregeln:**
- |a × b| = |a| × |b|
- |a / b| = |a| / |b| (für b ≠ 0)
- |a + b| ≤ |a| + |b| (**Dreiecksungleichung** — der Umweg ist nie kürzer als der direkte Weg)

---

## Betragsgleichungen und -ungleichungen

|x − 3| = 5 bedeutet geometrisch: „x hat den Abstand 5 von 3." Auf der Zahlengeraden gibt es genau **zwei** solche Punkte: 3 + 5 = **8** (rechts) und 3 − 5 = **−2** (links).

{{DIAGRAM:absolute-value-numberline}}

**Allgemeines Verfahren für |f(x)| = c (c ≥ 0):**
1. Fall 1: f(x) = c → lösen
2. Fall 2: f(x) = −c → lösen
3. Lösungsmengen vereinigen (für c < 0: keine Lösung, da Betrag nie negativ)

**Betragsungleichungen** als Intervalle:
- |x − a| < d → x liegt näher als d an a → **offenes Intervall (a − d, a + d)**
- |x − a| > d → x liegt weiter als d von a → **x < a − d oder x > a + d**

**Rechenbeispiel — Blut-pH-Toleranz:**

*Denkprozess:* Der physiologische pH-Wert ist 7,40. Toleranz: ±0,05. Als Betragsungleichung: |pH − 7,40| ≤ 0,05. Auflösen: −0,05 ≤ pH − 7,40 ≤ 0,05. Addition von 7,40: **7,35 ≤ pH ≤ 7,45**. Werte außerhalb → Azidose (< 7,35) oder Alkalose (> 7,45).

**Rechenbeispiel — Betragsgleichung:**
|2x + 1| = 7. Fall 1: 2x + 1 = 7 → x = 3. Fall 2: 2x + 1 = −7 → x = −4. Probe: |2(3)+1| = 7 ✓; |2(−4)+1| = 7 ✓. Lösungsmenge: {−4, 3}.

> **Merke:** |x − a| = d → zwei Lösungen: x = a ± d. |x − a| < d → Intervall (a−d, a+d). Betragsungleichungen modellieren Toleranzbereiche in der Labormedizin.

---

## Summenzeichen Σ — Kurzschreibweise für Reihen

Wenn du viele gleichartige Terme addierst, wird die Schreibweise schnell unhandlich. Das **Summenzeichen** Σ (griechisch *Sigma*, der Buchstabe für „S" wie Summe) fasst zusammen:

**Σ(i=1 bis n) aᵢ = a₁ + a₂ + ... + aₙ**

Lies: „Summiere aᵢ für i von 1 bis n." Dabei heißt i der **Laufindex**, 1 die untere und n die obere Grenze.

**Rechenregeln:**
- Konstante herausziehen: Σ(i=1 bis n) c × aᵢ = c × Σ(i=1 bis n) aᵢ
- Summe aufteilen: Σ(i=1 bis n) (aᵢ + bᵢ) = Σ aᵢ + Σ bᵢ
- Index-Verschiebung: Σ(i=1 bis n) aᵢ = Σ(j=0 bis n−1) a_{j+1} (gleiche Summe, anderer Startindex)

Die **Gaußsche Summenformel** ist die wichtigste geschlossene Form: Σ(i=1 bis n) i = n(n+1)/2. Gauß erkannte als Schüler: 1+100 = 101, 2+99 = 101, ..., 50+51 = 101 — 50 Paare à 101 = 5050.

**Rechenbeispiel — kumulative Medikamentendosis:**
Zurück zum Eingangsbeispiel: Methotrexat-Dosis in Woche k = 5k mg. Gesamtdosis nach 8 Wochen:

*Denkprozess:* Σ(k=1 bis 8) 5k = 5 × Σ(k=1 bis 8) k = 5 × 8 × 9/2 = 5 × 36 = **180 mg**.
Die Konstante 5 wird vor das Σ gezogen (Rechenregel 1), dann Gauß-Formel anwenden.

In der Medizin begegnet dir Σ beim **Mittelwert**: x̄ = (1/n) × Σ(i=1 bis n) xᵢ — mittlere Herzfrequenz, Blutdruck-Durchschnitt, Studienergebnisse.

> **Merke:** Σ fasst gleichartige Additionen zusammen. Konstanten dürfen herausgezogen werden. Gaußsche Summenformel: 1 + 2 + ... + n = n(n+1)/2. Index-Verschiebung ändert die Summe nicht, nur den Startpunkt.

---

## Rechenbeispiele

**Beispiel 1 — Distributivgesetz und Minusklammer:**
Vereinfache: −2(3x − 4) + 5(x + 1).

*Denkprozess:* Zuerst ausmultiplizieren: −2 × 3x = −6x, −2 × (−4) = +8, 5 × x = 5x, 5 × 1 = 5. Zusammenfassen: (−6x + 5x) + (8 + 5) = **−x + 13**. Probe mit x = 3: −2(9−4) + 5(4) = −10 + 20 = 10. Und −3 + 13 = 10 ✓.

**Beispiel 2 — Ausklammern eines Bruchs:**
Vereinfache: (4x² − 8x) / (2x).

*Denkprozess:* Zähler ausklammern: 4x(x − 2). Kürzen: 4x(x − 2) / (2x) = **2(x − 2) = 2x − 4**. Achtung: x ≠ 0 (Definitionsbereich!). Probe mit x = 5: (100 − 40)/10 = 6. Und 2(5) − 4 = 6 ✓.

**Beispiel 3 — Betragsungleichung als Labortoleranz:**
Ein Laborwert soll maximal 10 % vom Sollwert S = 120 mg/dL abweichen: |x − 120| ≤ 12. Auflösen: 108 ≤ x ≤ 132. Ganzzahlige Werte im Toleranzbereich: 132 − 108 + 1 = **25 Werte**.`,
    lernziele: [
      "Die drei Rechengesetze (kommutativ, assoziativ, distributiv) sicher anwenden und typische Fehlschlüsse vermeiden",
      "Terme durch Ausklammern und Faktorisieren vereinfachen",
      "Betragsgleichungen und -ungleichungen durch Fallunterscheidung lösen",
      "Das Summenzeichen Σ lesen und einfache Summenformeln anwenden",
    ],
    sections: [
      {
        heading: "Rechengesetze — Kommutativ, Assoziativ, Distributiv",
        text: "Kommutativ- und Assoziativgesetz gelten für Addition und Multiplikation, NICHT für Subtraktion und Division. Das Distributivgesetz a(b+c) = ab+ac ist die Grundlage für Ausmultiplizieren (vorwärts) und Ausklammern (rückwärts). Typische MedAT-Falle: Minusklammer nicht korrekt auflösen — −(a−b) = −a+b (nicht −a−b).",
        merksatz:
          "Distributivgesetz: a(b+c) = ab + ac. Minusklammer: −(a−b) = −a+b. Kommutativgesetz gilt NICHT für Subtraktion!",
      },
      {
        heading: "Betrag und Betragsgleichungen",
        text: "|a| = Abstand von a zu Null. Betragsgleichung |f(x)| = c: Zwei Fälle aufstellen (f(x) = c und f(x) = −c), Lösungsmengen vereinigen. Betragsungleichung |x−a| < d ergibt Intervall (a−d, a+d). Klinisch: Toleranzbereich eines Laborwerts = Betragsungleichung.",
        merksatz:
          "|f(x)| = c → zwei Fälle: f(x) = c oder f(x) = −c. |x−a| < d → Intervall (a−d, a+d).",
      },
      {
        heading: "Ausklammern und Faktorisieren",
        text: "Ausklammern = Distributivgesetz rückwärts. Gemeinsamen Faktor aller Summanden identifizieren (ggT der Koeffizienten und kleinste Potenz gemeinsamer Variablen), vor die Klammer schreiben, Rest in die Klammer. Probe durch Rückmultiplizieren. Faktorisieren erleichtert das Kürzen von Brüchen und das Erkennen von Nullstellen.",
        merksatz:
          "Ausklammern: ggT aller Koeffizienten finden, kleinste Variable-Potenz nehmen, Probe durch Rückmultiplizieren.",
      },
    ],
    merksätze: [
      "Distributivgesetz: a(b+c) = ab + ac — vorwärts ausmultiplizieren, rückwärts ausklammern.",
      "Minus vor Klammer dreht ALLE Vorzeichen: −(a − b + c) = −a + b − c.",
      "Gleiche Vorzeichen → positiv; verschiedene Vorzeichen → negativ.",
      "Betrag |a| = Abstand von Null. Immer ≥ 0. |a×b| = |a|×|b|.",
      "Dreiecksungleichung: |a + b| ≤ |a| + |b|.",
      "Betragsgleichung: |f(x)| = c → zwei Fälle (f(x) = c und f(x) = −c).",
      "|x − a| < d → offenes Intervall (a−d, a+d).",
      "Gaußsche Summenformel: 1 + 2 + ... + n = n(n+1)/2.",
      "Ausklammern: ggT der Koeffizienten × kleinste gemeinsame Variablenpotenz.",
    ],
    altfrage: {
      question:
        "Ein Laborwert soll maximal 5 Einheiten vom Sollwert 120 mg/dL abweichen. Formulieren Sie dies als Betragsungleichung und geben Sie den Toleranzbereich an. Wie viele ganzzahlige Werte liegen im Toleranzbereich?",
      answer:
        "Betragsungleichung: |x − 120| ≤ 5. Auflösen: −5 ≤ x − 120 ≤ 5. Addition von 120: 115 ≤ x ≤ 125. Toleranzbereich: [115, 125]. Ganzzahlige Werte: 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125 = 11 Werte. Allgemein: |x − a| ≤ d hat (2d + 1) ganzzahlige Lösungen (bei ganzzahligem a und d). In der klinischen Labormedizin werden Referenzbereiche häufig als Toleranzintervalle um einen Mittelwert angegeben.",
    },
    klinischerBezug:
      "Rechengesetze und Termumformungen sind in der Medizin allgegenwärtig: Pharmakokinetische Formeln umstellen (Clearance = Dosis/AUC), Laborwert-Toleranzbereiche als Betragsungleichungen (z.B. |pH − 7,40| ≤ 0,05 → pH 7,35–7,45), Dosisberechnungen ausklammern (Gesamtdosis = n × Einzeldosis × Bioverfügbarkeit). Die Gaußsche Summenformel erscheint bei kumulativen Dosierungsschemata.",
    selfTest: [
      {
        question: "Was ergibt −(3x − 5) + 2(x + 1)?",
        options: ["−x + 7", "−x + 3", "−5x + 7", "x + 7", "−x − 3"],
        correctIndex: 0,
        explanation:
          "Schritt 1: −(3x − 5) = −3x + 5 (Minusklammer: BEIDE Vorzeichen drehen). Schritt 2: 2(x + 1) = 2x + 2 (Distributivgesetz). Schritt 3: −3x + 5 + 2x + 2 = −x + 7. Häufiger Fehler: −(3x − 5) = −3x − 5 (Vorzeichen von −5 nicht umgedreht).",
        hints: [
          "Minusklammer auflösen: −(3x − 5) = −3x + ?",
          "Dann zusammenfassen: (−3x + 2x) + (5 + 2) = ?",
        ],
        difficulty: 1,
        tags: ["termumformung", "klammern", "vorzeichen"],
      },
      {
        question: "Lösen Sie: |2x − 6| = 10. Welche Lösungsmenge ergibt sich?",
        options: ["{−2, 8}", "{8}", "{−2}", "{−8, 2}", "Keine Lösung"],
        correctIndex: 0,
        explanation:
          "Zwei Fälle: Fall 1: 2x − 6 = 10 → 2x = 16 → x = 8. Fall 2: 2x − 6 = −10 → 2x = −4 → x = −2. Probe: |2(8) − 6| = |10| = 10 ✓; |2(−2) − 6| = |−10| = 10 ✓. Lösungsmenge: {−2, 8}.",
        hints: [
          "Betragsgleichung → zwei Fälle: 2x − 6 = 10 und 2x − 6 = −10.",
          "Jeden Fall separat nach x lösen.",
        ],
        difficulty: 2,
        tags: ["betragsgleichung", "fallunterscheidung", "algebra"],
      },
      {
        question: "Klammern Sie aus: 12x³ − 8x² + 4x. Was ist der gemeinsame Faktor?",
        options: ["4x", "4x²", "2x", "4", "x"],
        correctIndex: 0,
        explanation:
          "ggT der Koeffizienten: ggT(12, 8, 4) = 4. Kleinste x-Potenz: x¹. Gemeinsamer Faktor: 4x. Ergebnis: 4x(3x² − 2x + 1). Probe: 4x × 3x² = 12x³; 4x × (−2x) = −8x²; 4x × 1 = 4x ✓.",
        hints: [
          "ggT der Koeffizienten 12, 8, 4 bestimmen.",
          "Kleinste Potenz von x in allen Termen finden.",
        ],
        difficulty: 1,
        tags: ["ausklammern", "faktorisierung", "terme"],
      },
      {
        question: "Welche Werte erfüllen |x − 5| < 3?",
        options: ["2 < x < 8", "x < 2 oder x > 8", "−3 < x < 3", "x = 2 oder x = 8", "5 < x < 8"],
        correctIndex: 0,
        explanation:
          "|x − 5| < 3 bedeutet: Der Abstand von x zu 5 ist kleiner als 3. Auflösen: −3 < x − 5 < 3. Addition von 5: 2 < x < 8. Lösungsmenge: das offene Intervall (2, 8). Geometrisch: alle Punkte auf der Zahlengeraden, die näher als 3 Einheiten an 5 liegen.",
        hints: [
          "|x − a| < d ergibt das Intervall (a − d, a + d).",
          "Hier: a = 5, d = 3. Also (5 − 3, 5 + 3) = ?",
        ],
        difficulty: 2,
        tags: ["betragsungleichung", "intervall", "algebra"],
      },
      {
        question: "Berechne: Σ(i=1 bis 10) i mit der Gaußschen Summenformel.",
        options: ["55", "50", "100", "45", "110"],
        correctIndex: 0,
        explanation:
          "Gaußsche Summenformel: n(n+1)/2 = 10 × 11/2 = 110/2 = 55. Probe: 1+2+3+4+5+6+7+8+9+10 = 55. Die Formel stammt von Gauß, der als Schüler die Paare (1+10, 2+9, ...) bildete: 5 Paare à 11 = 55.",
        hints: ["Formel: n(n+1)/2 mit n = 10.", "10 × 11 = 110. Dann 110/2 = ?"],
        difficulty: 1,
        tags: ["summenzeichen", "gauss", "algebra"],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────
  // UK ma-3-03  Koordinatensystem und analytische Geometrie
  // ──────────────────────────────────────────────────────────────
  {
    id: "ma-3-03",
    title: "Koordinatensystem und analytische Geometrie",
    stichworte: [
      "Kartesisches Koordinatensystem",
      "Abstandsformel",
      "Mittelpunkt",
      "Geradengleichung",
      "Steigung",
      "Schnittpunkt",
      "Kreisgleichung",
      "Polarkoordinaten",
      "Regressionsgerade",
      "Bland-Altman-Plot",
      "Vierfelder-Tafel",
      "EKG-Herzachse",
    ],
    content: `**Idee:** Punkte durch (x,y) beschrieben; **Abstand** = Pythagoras: d = √((x₂−x₁)²+(y₂−y₁)²). **Gerade** y = mx+b: m = Steigung, b = y-Achsenabschnitt; aus zwei Punkten: m = (y₂−y₁)/(x₂−x₁), dann b = y₁−m×x₁.

**Verfahren — Schrittfolge:** (1) **Abstand:** d = √((Δx)²+(Δy)²). **Mittelpunkt:** M = ((x₁+x₂)/2, (y₁+y₂)/2). (2) **Gerade aus 2 Punkten:** m = (y₂−y₁)/(x₂−x₁), b = y₁−m×x₁. (3) **Schnittpunkt:** Gleichsetzen, nach x auflösen. (4) **Polarkoordinaten:** x = r×cos φ, y = r×sin φ.

**Typische Prüfungsfehler:** Abstand: Differenzen quadrieren (Δx)²+(Δy)², nicht (x₁²+x₂²). Steigung: Δy/Δx — y im Zähler. Senkrechte Geraden: m₂ = −1/m₁.

---

{{DIAGRAM:coordinate-system}}

## Kartesisches Koordinatensystem





Ein Punkt P im zweidimensionalen kartesischen Koordinatensystem wird durch ein geordnetes Paar (x, y) beschrieben. Die x-Achse (Abszisse) ist horizontal, die y-Achse (Ordinate) vertikal; der Ursprung O = (0, 0) liegt im Schnittpunkt.

Die vier Quadranten:
- I. Quadrant: x > 0, y > 0 (rechts oben)
- II. Quadrant: x < 0, y > 0 (links oben)
- III. Quadrant: x < 0, y < 0 (links unten)
- IV. Quadrant: x > 0, y < 0 (rechts unten)

**Abstand zwischen zwei Punkten** P₁(x₁, y₁) und P₂(x₂, y₂):
**d = √((x₂ − x₁)² + (y₂ − y₁)²)**

Dies ist eine direkte Anwendung des Satzes von Pythagoras im Koordinatensystem.

**Mittelpunkt** M der Strecke P₁P₂:
M = ((x₁ + x₂) / 2, (y₁ + y₂) / 2)

> **Merke:** Die Abstandsformel ist der Satz des Pythagoras in Koordinatenform. Die Koordinatendifferenzen Δx und Δy sind die Katheten, der Abstand d ist die Hypotenuse.

**Rechenbeispiel:** P₁(−3, 1) und P₂(5, 7). Δx = 5 − (−3) = 8, Δy = 7 − 1 = 6. d = √(64 + 36) = √100 = 10. Mittelpunkt: M = ((−3+5)/2, (1+7)/2) = (1, 4). Merke: Auch bei negativen Koordinaten funktioniert die Formel, da quadriert wird.

## Geradengleichung

Die **Normalform** (Slope-Intercept-Form):
**y = m × x + b**
- m = Steigung (Tangens des Steigungswinkels α: **m = tan α**)
- b = y-Achsenabschnitt (Wert bei x = 0)

**Trigonometrie im rechtwinkligen Dreieck (MedAT-relevant):** Mit Hypotenuse, Gegenkathete (gegenüber von α) und Ankathete (an α): **sin(α) = Gegenkathete/Hypotenuse**, **cos(α) = Ankathete/Hypotenuse**, **tan(α) = Gegenkathete/Ankathete**. **Steigung in %** = (Höhenunterschied / Horizontaldistanz) × 100 = **tan(α) × 100 %**. Beispiel: 16 % Steigung bedeutet bei 100 m horizontaler Strecke 16 m Höhendifferenz — das Verhältnis 16/100 entspricht dem **Tangens** des Steigungswinkels (nicht Sinus, nicht Cosinus). MedAT-Frage „Welche Winkelfunktion?" → **Tangens**.

Steigung aus zwei Punkten: **m = (y₂ − y₁) / (x₂ − x₁) = Δy / Δx**

Interpretation der Steigung: m = 2 bedeutet: Pro 1 Einheit nach rechts steigt die Gerade um 2 Einheiten. m = −0,5 bedeutet: Pro 1 Einheit nach rechts fällt die Gerade um 0,5 Einheiten. m = 0 ist eine waagerechte Linie. Senkrechte Linien haben keine definierte Steigung (x = const.).

**Punkt-Steigungsform**: y − y₁ = m × (x − x₁). Nützlich, wenn ein Punkt und die Steigung bekannt sind.

**Zwei-Punkte-Form**: y − y₁ = [(y₂ − y₁)/(x₂ − x₁)] × (x − x₁). Nützlich, wenn zwei Punkte gegeben sind.

> **Merke:** Für den MedAT gibt es drei Standardaufgabentypen zu Geraden: (1) Geradengleichung aus zwei Punkten aufstellen, (2) Schnittpunkt zweier Geraden berechnen, (3) prüfen ob Geraden parallel oder senkrecht sind.

**Schnittpunkt zweier Geraden**: Gleichungssystem lösen
y = m₁x + b₁ und y = m₂x + b₂
→ m₁x + b₁ = m₂x + b₂ → x = (b₂ − b₁) / (m₁ − m₂)

Parallele Geraden (m₁ = m₂, b₁ ≠ b₂) haben keinen Schnittpunkt.
Senkrechte Geraden: m₁ × m₂ = −1 (Steigungsprodukt gleich − eins).

**Rechenbeispiel — Geradengleichung aufstellen:** Durch P₁(2, 3) und P₂(6, 11). Steigung: m = (11−3)/(6−2) = 8/4 = 2. Einsetzen in y = mx + b: 3 = 2 × 2 + b → b = −1. Geradengleichung: y = 2x − 1. Probe mit P₂: 2 × 6 − 1 = 11. Korrekt.

**Rechenbeispiel — Schnittpunkt:** g₁: y = 2x + 1, g₂: y = −x + 7. Gleichsetzen: 2x + 1 = −x + 7 → 3x = 6 → x = 2. y = 2 × 2 + 1 = 5. Schnittpunkt: (2, 5). Senkrecht? m₁ × m₂ = 2 × (−1) = −2 ≠ −1 → nicht senkrecht.

## Nullstellen und Achsenabschnitte

Nullstelle (Schnittpunkt mit x-Achse): y = 0 setzen → 0 = mx + b → x = −b/m.

y-Achsenabschnitt: x = 0 setzen → y = b.

Beispiel: y = 3x − 6. Nullstelle: x = 6/3 = 2. y-Achsenabschnitt: y = −6.

## Kreis im Koordinatensystem

Ein Kreis mit Mittelpunkt M(x₀, y₀) und Radius r:
**(x − x₀)² + (y − y₀)² = r²**

Bei Mittelpunkt im Ursprung: **x² + y² = r²**

Allgemeine Form: x² + y² + Dx + Ey + F = 0. Durch quadratische Ergänzung erhält man Mittelpunkt und Radius: x₀ = −D/2, y₀ = −E/2, r = √((D/2)² + (E/2)² − F).

**Rechenbeispiel:** x² + y² − 6x + 4y − 12 = 0. Quadratisch ergänzen: (x² − 6x + 9) + (y² + 4y + 4) = 12 + 9 + 4 = 25. Also (x − 3)² + (y + 2)² = 25. Mittelpunkt M(3, −2), Radius r = 5.

## Polarkoordinaten

Statt (x, y) beschreibt man Punkte durch (r, φ):
- r = Abstand vom Ursprung (r ≥ 0)
- φ = Winkel gegen die positive x-Achse (0 ≤ φ < 2π)

Umrechnung: **x = r × cos φ**, **y = r × sin φ**
Rück: **r = √(x² + y²)**, **φ = arctan(y / x)** (Quadrant beachten!)

> **Merke:** Beim arctan den Quadranten beachten! arctan liefert Werte nur zwischen −90° und +90°. Liegt der Punkt im II. oder III. Quadranten, muss 180° addiert werden.

Polarkoordinaten sind natürlich bei zirkulären Geometrien (EKG-Achse, Herzwinkel, CT-Rotationsscanner).

**Rechenbeispiel:** Punkt P hat kartesische Koordinaten (−3, 4). r = √(9 + 16) = 5. φ = arctan(4/(−3)) → Grundwert ≈ −53°, aber P liegt im II. Quadranten → φ = 180° − 53° = 127°. Polarkoordinaten: (5, 127°).

## Klinischer Kontext

**Streudiagramme (Scatterplots)**: In klinischen Studien werden zwei Messgrößen im kartesischen KS gegeneinander aufgetragen. Die Korrelation wird durch die Regressionsgerade (y = mx + b) beschrieben. Der Korrelationskoeffizient r quantifiziert den linearen Zusammenhang: r = +1 perfekt positiv, r = −1 perfekt negativ, r = 0 kein linearer Zusammenhang.

**Bland-Altman-Plot**: Auf der x-Achse: Mittelwert zweier Messmethoden; y-Achse: Differenz. Methodenübereinstimmung wird durch „Limits of Agreement" (±1,96×SD) beurteilt. Ein Bias (systematische Abweichung) zeigt sich als Verschiebung der mittleren Differenz von null.

**Vierfelder-Tafel**: Eine 2×2-Matrix entspricht einem Koordinatensystem mit den Achsen „Test positiv/negativ" und „Krank/Gesund". Sensitivität = TP/(TP+FN), Spezifität = TN/(TN+FP), PPV = TP/(TP+FP), NPV = TN/(TN+FN).

**EKG-Achse**: Die elektrische Herzachse wird als Vektor in der Frontalebene dargestellt, beschrieben durch einen Winkel im Koordinatensystem (Lagetypen: Steiltyp ~ +90°, Linkstyp < 0°, Normotyp 0° bis +90°).

## Rechenbeispiele

**Beispiel 1 — Abstand zweier Lymphknoten im CT:**
LK1 bei P₁(2, 5) cm, LK2 bei P₂(6, 8) cm (vom Referenzpunkt). d = √((6−2)² + (8−5)²) = √(16 + 9) = √25 = **5 cm**. Mittelpunkt (Mitte der Strecke): M = ((2+6)/2, (5+8)/2) = **(4, 6,5)**. Klinisch: Abstand >3 cm zwischen Metastasen beeinflusst Bestrahlungsfeld-Planung.

**Beispiel 2 — Regressionsgerade: HbA1c vs. mittlerer Blutzucker:**
Gerade y = 28,7x − 46,7 (y = mittlerer BZ in mg/dL, x = HbA1c in %). Für HbA1c = 7%: BZ = 28,7 × 7 − 46,7 = 200,9 − 46,7 = **154 mg/dL**. Steigung 28,7: pro 1% HbA1c-Anstieg steigt der mittlere BZ um 28,7 mg/dL. Ziel HbA1c < 7%: BZ < 154 mg/dL.

**Beispiel 3 — Kreisgleichung: Pupillenfläche bei Mydriasis:**
Pupille als Kreis: normal d = 3 mm → r = 1,5 mm. A = π × 1,5² = **7,07 mm²**. Mydriasis d = 8 mm → r = 4 mm. A = π × 4² = **50,3 mm²**. Faktor: 50,3/7,07 = **7,1-fach** mehr Lichteinfall. Kreisgleichung: x² + y² = 16 (Mittelpunkt Ursprung, r = 4 mm).

**Beispiel 4 — Parallele und senkrechte Geraden:**
g₁: y = ¾x + 2. Parallele Gerade durch P(4, 1): y = ¾x + b. Einsetzen: 1 = ¾ × 4 + b → b = 1 − 3 = −2. g₂: y = ¾x − 2. Senkrechte Gerade durch P(4, 1): m_perp = −1/(¾) = −4/3. y = −4/3 × x + b. Einsetzen: 1 = −4/3 × 4 + b → b = 1 + 16/3 = 19/3. g₃: y = −4/3 × x + 19/3.`,

    lernziele: [
      "Abstände und Mittelpunkte im kartesischen Koordinatensystem berechnen.",
      "Geradengleichungen aufstellen, Steigung und y-Achsenabschnitt interpretieren sowie Schnittpunkte zweier Geraden bestimmen.",
      "Die Kreisgleichung im Koordinatensystem anwenden und Mittelpunkt sowie Radius ablesen.",
      "Kartesische und Polarkoordinaten ineinander umrechnen.",
      "Klinische Diagrammtypen (Streudiagramm, Bland-Altman) geometrisch einordnen.",
    ],
    sections: [
      {
        heading: "Kartesisches System und Distanzformel",
        text: `Das kartesische Koordinatensystem bildet die Grundlage für die analytische Geometrie. Jeder Punkt P(x, y) ist eindeutig durch seine Koordinaten definiert.

Abstandsformel zwischen P₁(2, 3) und P₂(6, 7):
d = √((6−2)² + (7−3)²) = √(16 + 16) = √32 = 4√2 ≈ 5,66

Mittelpunkt M = ((2+6)/2, (3+7)/2) = (4, 5)

Für die Geradengleichung y = mx + b:
Beispiel: Durch P₁(1, 2) und P₂(3, 6):
m = (6−2)/(3−1) = 4/2 = 2
b = y − mx = 2 − 2×1 = 0
→ y = 2x`,
        merksatz:
          "Abstand zweier Punkte = Hypotenuse des rechtwinkligen Dreiecks mit den Koordinatendifferenzen als Katheten.",
      },
      {
        heading: "Kreisgleichung und Schnittpunkte",
        text: `Ein Kreis mit Mittelpunkt (3, 4) und Radius 5 hat die Gleichung:
(x − 3)² + (y − 4)² = 25

Schnittpunkt der Geraden y = 2x + 1 und y = −x + 7:
2x + 1 = −x + 7
3x = 6
x = 2; y = 2×2 + 1 = 5 → Schnittpunkt: (2, 5)

Bedingungen für Geraden:
- Parallel: gleiche Steigung m₁ = m₂
- Senkrecht: m₁ × m₂ = −1 (Steigungsprodukt = −1)
- Kongruent (identisch): m₁ = m₂ und b₁ = b₂`,
        merksatz: "Senkrechte Geraden: m₁ × m₂ = −1; parallele Geraden: m₁ = m₂.",
      },
      {
        heading: "Klinische Diagramme und Koordinatensystem",
        text: `Der Bland-Altman-Plot dient dem Methodenvergleich in der klinischen Messtechnik:
- x-Achse: (Methode A + Methode B) / 2
- y-Achse: Methode A − Methode B
- „Limits of Agreement": Mittelwert der Differenz ± 1,96×Standardabweichung

Die Vierfelder-Tafel entspricht einem 2×2-Gitter:
- TP (wahr positiv), FP (falsch positiv): erste Zeile
- FN (falsch negativ), TN (wahr negativ): zweite Zeile
- Sensitivität = TP / (TP + FN); Spezifität = TN / (TN + FP)

Im Streudiagramm zeigt die Regressionsgerade y = mx + b die Richtung und Stärke des Zusammenhangs. Der Korrelationskoeffizient r (−1 bis +1) quantifiziert den linearen Zusammenhang.`,
        merksatz:
          "Bland-Altman: Differenz gegen Mittelwert — zeigt systematische Messfehler (Bias) und zufällige Streuung (Präzision) zwischen zwei Messmethoden.",
      },
    ],

    merksätze: [
      "Abstand zweier Punkte: d = √((Δx)² + (Δy)²).",
      "Mittelpunkt zweier Punkte: M = ((x₁+x₂)/2, (y₁+y₂)/2).",
      "Geradengleichung: y = mx + b; m = Steigung, b = y-Achsenabschnitt.",
      "Steigung aus zwei Punkten: m = (y₂−y₁)/(x₂−x₁).",
      "Schnittpunkt zweier Geraden: Gleichungssystem; Gleichungen gleichsetzen.",
      "Senkrechte Geraden: m₁ × m₂ = −1.",
      "Kreisgleichung: (x−x₀)² + (y−y₀)² = r².",
      "Polarkoordinaten: x = r×cos φ; y = r×sin φ.",
      "Bland-Altman-Plot: Methodenvergleich durch Differenz vs. Mittelwert.",
      "Vierfelder-Tafel: 2×2-Matrix für Sensitivität (TP/(TP+FN)) und Spezifität (TN/(TN+FP)).",
    ],
    // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
    altfrage: {
      question:
        "Zwei Geraden g₁: y = 3x − 2 und g₂: y = −x + 6 schneiden sich in einem Punkt. Bestimmen Sie den Schnittpunkt und geben Sie an, ob die Geraden senkrecht zueinander stehen.",
      answer:
        "Für den Schnittpunkt werden die Gleichungen gleichgesetzt: 3x − 2 = −x + 6. Umformen: 3x + x = 6 + 2 → 4x = 8 → x = 2. y-Wert einsetzen: y = 3 × 2 − 2 = 6 − 2 = 4. Der Schnittpunkt liegt bei P(2, 4). Überprüfung mit g₂: y = −2 + 6 = 4. Stimmt überein. Zur Prüfung auf Orthogonalität: m₁ = 3, m₂ = −1. Das Produkt der Steigungen: m₁ × m₂ = 3 × (−1) = −3 ≠ −1. Da m₁ × m₂ ≠ −1, stehen die Geraden nicht senkrecht zueinander. Für Senkrechtstehen wäre beispielsweise m₂ = −1/3 erforderlich. Die Geraden schneiden sich also in P(2, 4) unter einem spitzen Winkel.",
    },
    klinischerBezug:
      "Streudiagramme und Regressionsgeraden in klinischen Studien; Bland-Altman-Methodenvergleich; Vierfelder-Tafel für Testgüte (Sensitivität, Spezifität).",
    selfTest: [
      {
        question: "Wie groß ist der Abstand zwischen den Punkten P₁(1, 2) und P₂(4, 6)?",
        options: ["3", "4", "5", "6", "7"],
        correctIndex: 2,
        explanation:
          "Die Abstandsformel lautet d = √((x₂−x₁)² + (y₂−y₁)²). Einsetzen: d = √((4−1)² + (6−2)²) = √(3² + 4²) = √(9 + 16) = √25 = 5. Dies ist wieder das pythagoräische Tripel (3, 4, 5). Die Abstandsformel ist direkt aus dem Satz des Pythagoras abgeleitet: Die Koordinatendifferenzen Δx = 3 und Δy = 4 sind die Katheten, der gesuchte Abstand d = 5 ist die Hypotenuse.",
        hints: [
          "d = √((Δx)² + (Δy)²); berechne Δx = x₂ − x₁ und Δy = y₂ − y₁.",
          "Erkenne das pythagoräische Tripel (3, 4, 5).",
        ],
        tags: ["abstandsformel", "koordinaten", "pythagoras"],
        difficulty: 1,
      },
      {
        question:
          "Welche der folgenden Kreisgleichungen beschreibt einen Kreis mit Mittelpunkt M(−2, 3) und Radius 4?",
        options: [
          "(x + 2)² + (y − 3)² = 4",
          "(x − 2)² + (y + 3)² = 16",
          "(x + 2)² + (y − 3)² = 16",
          "(x − 2)² + (y − 3)² = 16",
          "(x + 2)² + (y + 3)² = 16",
        ],
        correctIndex: 2,
        explanation:
          "Die allgemeine Kreisgleichung lautet (x − x₀)² + (y − y₀)² = r². Mit Mittelpunkt M(−2, 3): x₀ = −2, y₀ = 3. Einsetzen: (x − (−2))² + (y − 3)² = 4² → (x + 2)² + (y − 3)² = 16. Achtung bei den Vorzeichen: (x − (−2)) = (x + 2). Option A hat r² = 4, entspricht also r = 2 (falsch). Option B hat andere Vorzeichen (x − 2)² statt (x + 2)². Option D hat (x − 2)² statt (x + 2)².",
        hints: [
          "Kreisgleichung: (x − x₀)² + (y − y₀)² = r²; r² = 16, nicht r = 16.",
          "x₀ = −2 führt zu (x − (−2))² = (x + 2)².",
        ],
        tags: ["kreis", "kreisgleichung", "koordinaten"],
        difficulty: 2,
      },
      {
        question:
          "Ein Punkt P hat Polarkoordinaten (r = 5, φ = 53°). Was sind die kartesischen Koordinaten (näherungsweise)? (cos 53° ≈ 0,6; sin 53° ≈ 0,8)",
        options: ["(4, 3)", "(3, 4)", "(5, 5)", "(0,6; 0,8)", "(2,5; 4)"],
        correctIndex: 1,
        explanation:
          "Umrechnung von Polar- in kartesische Koordinaten: x = r × cos φ = 5 × 0,6 = 3; y = r × sin φ = 5 × 0,8 = 4. Der Punkt liegt also bei P(3, 4). Überprüfung: Abstand vom Ursprung = √(3² + 4²) = √25 = 5. Korrekt. Der Winkel: arctan(4/3) ≈ 53°. Korrekt. Polarkoordinaten sind besonders nützlich bei Kreisbewegungen und in der Medizin bei der Darstellung der EKG-Herzachse (Lagetypen).",
        hints: ["x = r × cos φ; y = r × sin φ.", "r = 5, cos 53° ≈ 0,6, sin 53° ≈ 0,8."],
        tags: ["polarkoordinaten", "koordinatenumrechnung", "trigonometrie"],
        difficulty: 2,
      },
      {
        question:
          "In einem Bland-Altman-Plot werden zwei Blutdruckmessgeräte A und B verglichen. Fünf Patienten zeigen folgende Werte (A; B): (120;122), (130;128), (140;144), (150;148), (160;162). Was ist die mittlere Differenz (Bias) A − B?",
        options: ["+2 mmHg", "−2 mmHg", "0 mmHg", "+1 mmHg", "−1 mmHg"],
        correctIndex: 4,
        explanation:
          "Die Differenzen A − B berechnen sich: 120−122 = −2; 130−128 = +2; 140−144 = −4; 150−148 = +2; 160−162 = −2. Summe: −2 + 2 − 4 + 2 − 2 = −4. Mittlere Differenz (Bias): −4/5 = −0,8 ≈ −1 mmHg. Am nächsten ist Option E (−1 mmHg). Tatsächlich ist der Wert −0,8 — unter den gegebenen Optionen ist −1 mmHg die beste Annäherung. Ein negativer Bias bedeutet, dass Gerät A im Mittel niedrigere Werte liefert als Gerät B. Im klinischen Kontext würde man prüfen, ob dieser Bias klinisch relevant ist (bei Blutdruck: > 5 mmHg gilt als bedeutsam).",
        hints: [
          "Bias = Mittelwert aller (A − B)-Differenzen.",
          "Berechne zuerst alle fünf Differenzen, dann den Durchschnitt.",
        ],
        tags: ["bland-altman", "bias", "methodenvergleich"],
        difficulty: 3,
      },
      {
        question:
          "Ein Streudiagramm zeigt den Zusammenhang zwischen Serumcholesterin (x-Achse, mmol/L) und kardiovaskulärem Risiko (y-Achse, %). Die Regressionsgerade hat die Gleichung y = 8x − 10. Welchen Risikowert sagt die Gerade für einen Cholesterin von 6 mmol/L vorher?",
        options: ["28 %", "36 %", "38 %", "48 %", "58 %"],
        correctIndex: 2,
        explanation:
          "Einsetzen von x = 6 in die Geradengleichung y = 8x − 10: y = 8 × 6 − 10 = 48 − 10 = 38 %. Die Gerade sagt bei einem Cholesterinwert von 6 mmol/L ein kardiovaskuläres Risiko von 38 % vorher. Die Steigung m = 8 bedeutet: pro zusätzlichem mmol/L Cholesterin steigt das Risiko um 8 Prozentpunkte. Der y-Achsenabschnitt b = −10 ist hier rechnerisch ein negativer Risikowert (bei x = 0), was biologisch nicht sinnvoll ist — Regressionsgeraden gelten nur im relevanten Wertebereich.",
        hints: ["Setze x = 6 in y = 8x − 10 ein.", "8 × 6 = 48; 48 − 10 = ?"],
        tags: ["regression", "cholesterin", "lineare-funktion"],
        difficulty: 1,
      },
    ],
    diagram: "coordinate-system",
  },
];
