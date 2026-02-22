import type { Kapitel } from '../types';

export const mathKap6: Kapitel = {
  id: 'math-kap6',
  title: "Vektorrechnung",
  subject: 'mathematik',
  icon: '➡️',
  estimatedTime: '60 min',
  unterkapitel: [
    // ─────────────────────────────────────────────────────────────────
    // UK ma-6-01: Vektoren — Grundbegriffe und Operationen
    // ─────────────────────────────────────────────────────────────────
    {
      id: 'ma-6-01',
      title: "Vektoren — Grundbegriffe und Operationen",
      content: `# Vektoren — Grundbegriffe und Operationen

Ein **Vektor** ist eine gerichtete Größe: Er besitzt sowohl einen **Betrag** (Länge) als auch eine **Richtung**. Im Gegensatz dazu ist ein **Skalar** eine reine Zahlgröße ohne Richtung (z. B. Temperatur, Masse). Vektoren werden grafisch als Pfeile dargestellt und algebraisch als Spaltenvektoren geschrieben:

$$\\vec{a} = \\begin{pmatrix} a_1 \\\\ a_2 \\\\ a_3 \\end{pmatrix}$$

Der Betrag eines Vektors ergibt sich aus dem verallgemeinerten Satz des Pythagoras im Raum:

$$|\\vec{v}| = \\sqrt{v_1^2 + v_2^2 + v_3^2}$$

## Vektoroperationen

**Addition** zweier Vektoren erfolgt komponentenweise: $\\vec{a} + \\vec{b} = (a_1+b_1,\\, a_2+b_2,\\, a_3+b_3)^\\top$. Geometrisch entspricht dies der **Parallelogrammregel**: Beide Vektoren werden am selben Ausgangspunkt angetragen, die Diagonale des Parallelogramms ist der Summenvektor (Resultierende).

**Subtraktion** $\\vec{a} - \\vec{b}$ ist äquivalent zur Addition von $\\vec{a}$ und $(-\\vec{b})$.

**Skalare Multiplikation** $\\lambda \\cdot \\vec{v}$ streckt oder staucht den Vektor; für $\\lambda < 0$ kehrt sich die Richtung um.

## Linearkombination und lineare Unabhängigkeit

Eine **Linearkombination** mehrerer Vektoren ist eine Summe der Form $\\lambda_1 \\vec{v_1} + \\lambda_2 \\vec{v_2} + \\ldots$. Vektoren heißen **linear unabhängig**, wenn keiner von ihnen als Linearkombination der anderen darstellbar ist, d. h. $\\lambda_1 \\vec{v_1} + \\lambda_2 \\vec{v_2} = \\vec{0}$ nur für $\\lambda_1 = \\lambda_2 = 0$ gilt.

**Basisvektoren** spannen den gesamten Raum auf. Im $\\mathbb{R}^3$ bilden $\\vec{e_1}=(1,0,0)^\\top$, $\\vec{e_2}=(0,1,0)^\\top$, $\\vec{e_3}=(0,0,1)^\\top$ die Standardbasis. Jeder Vektor lässt sich eindeutig als Linearkombination dieser Basisvektoren schreiben.

## Einheitsvektor

Der **Einheitsvektor** $\\hat{e}$ zeigt in dieselbe Richtung wie $\\vec{v}$, hat aber den Betrag 1:

$$\\hat{e} = \\frac{\\vec{v}}{|\\vec{v}|}$$

Einheitsvektoren geben reine Richtungsinformationen wieder und sind wichtig bei der Zerlegung von Kräften.

## Klinische Bedeutung

Vektoren spielen in der Medizin eine fundamentale Rolle. In der **Biomechanik** werden Muskelkräfte und Gelenkbelastungen als Vektoren zerlegt. Die resultierende Gelenkkraft ist die Vektorsumme aller angreifenden Kräfte. Im **EKG** wird die elektrische Herzachse als Summenvektor der Erregungsausbreitung dargestellt; der Cabrera-Kreis visualisiert diese Achse in der Frontalebene. Der **Blutfluss** in Gefäßen besitzt sowohl eine Geschwindigkeit (Betrag) als auch eine Fließrichtung und wird daher vektoriell beschrieben.`,
      lernziele: [
        "Vektoren als gerichtete Größen definieren und von Skalaren abgrenzen können.",
        "Addition, Subtraktion und skalare Multiplikation von Vektoren komponentenweise und geometrisch durchführen können.",
        "Den Betrag eines Vektors im zwei- und dreidimensionalen Raum mit dem Satz des Pythagoras berechnen können.",
        "Lineare Unabhängigkeit von Vektoren erklären und überprüfen können.",
        "Den Einheitsvektor zu einem gegebenen Vektor bestimmen können.",
      ],
      sections: [
        {
          heading: "Darstellung und Betrag von Vektoren",
          text: "Ein Vektor wird als Spaltenvektor $(a_1, a_2, a_3)^\\top$ geschrieben. Sein Betrag ist $|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ (Pythagoras im Raum). Im 2D-Fall entfällt die dritte Komponente. Der Nullvektor $(0, 0, 0)^\\top$ hat Betrag 0 und keine definierte Richtung.",
          merksatz: "Betrag = räumlicher Pythagoras: |v| = √(v₁² + v₂² + v₃²). Der Einheitsvektor ê = v/|v| hat stets Betrag 1.",
        },
        {
          heading: "Vektoroperationen und geometrische Interpretation",
          text: "Addition komponentenweise: $(a_1+b_1, a_2+b_2)^\\top$. Geometrisch: Parallelogrammregel (Resultierende). Skalarmultiplikation $\\lambda \\cdot \\vec{v}$ streckt (|λ|>1), staucht (|λ|<1) oder spiegelt (λ<0) den Vektor. Zwei Vektoren sind **parallel**, wenn einer ein skalares Vielfaches des anderen ist: $\\vec{a} = k \\cdot \\vec{b}$.",
          merksatz: "Parallelogrammregel: Die Diagonale ist der Summenvektor. Parallele Vektoren: a = k·b für ein k ≠ 0.",
        },
        {
          heading: "Linearkombination, Basis und klinische Anwendung",
          text: "Jeder Vektor im $\\mathbb{R}^3$ lässt sich als Linearkombination der drei Standardbasisvektoren eindeutig darstellen. In der Biomechanik wird eine Muskelkraft in ihre Komponenten entlang der Gelenk-Längsachse (Kompressionsanteil) und senkrecht dazu (Scherkraftanteil) zerlegt. Im EKG ergibt die Vektorsumme aller Herzaktionspotenziale den elektrischen Herzachsenvektor.",
          merksatz: "Klinisch: Gelenkkraft = Vektorsumme aller Muskelkräfte. EKG-Herzachse = elektrischer Summenvektor der Erregung.",
        },
      ],
      diagram: 'vector-addition',

      merksätze: [
        "Ein Vektor besitzt Betrag UND Richtung — ein Skalar nur einen Zahlenwert.",
        "Betrag im Raum: |v| = √(v₁² + v₂² + v₃²) — verallgemeinerter Pythagoras.",
        "Addition: komponentenweise; geometrisch Parallelogrammregel (Resultierende = Diagonale).",
        "Skalare Multiplikation λ·v: λ > 1 streckt, 0 < λ < 1 staucht, λ < 0 dreht Richtung um.",
        "Einheitsvektor ê = v/|v|: Betrag genau 1, zeigt die Richtung von v.",
        "Linear unabhängig: Kein Vektor ist Linearkombination der anderen.",
        "Standardbasis im ℝ³: e₁=(1,0,0), e₂=(0,1,0), e₃=(0,0,1) — spannen den Raum auf.",
        "Parallele Vektoren: a = k·b für ein skalares k ≠ 0.",
        "Biomechanik: Gelenkkraft = Vektorsumme aller angreifenden Muskelkräfte.",
        "EKG-Herzachse: elektrischer Vektor der Erregungsausbreitung — darstellbar im Cabrera-Kreis.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: "Erklären Sie den Begriff 'Vektor' und seine grundlegenden Operationen. Welche klinische Bedeutung haben Vektoren in der Medizin?",
        answer: "Ein Vektor ist eine gerichtete physikalische oder mathematische Größe, die durch Betrag und Richtung vollständig beschrieben wird. Im Unterschied zum Skalar (reine Zahlgröße wie Temperatur oder Masse) trägt der Vektor eine Richtungsinformation. Algebraisch wird er als Spaltenvektor $(a_1, a_2, a_3)^\\top$ dargestellt. Der Betrag $|\\vec{v}| = \\sqrt{v_1^2+v_2^2+v_3^2}$ entspricht dem verallgemeinerten Satz des Pythagoras im Raum. Die **Addition** zweier Vektoren erfolgt komponentenweise und entspricht geometrisch der Parallelogrammregel: Die Resultierende ist die Diagonale des durch beide Vektoren aufgespannten Parallelogramms. Bei der **skalaren Multiplikation** $\\lambda \\cdot \\vec{v}$ wird der Betrag mit $|\\lambda|$ skaliert; für $\\lambda < 0$ kehrt sich die Richtung um. Der **Einheitsvektor** $\\hat{e} = \\vec{v}/|\\vec{v}|$ hat genau den Betrag 1 und gibt nur die Richtung an. Klinisch sind Vektoren in der Biomechanik unverzichtbar: Muskelkräfte und Gelenkreaktionskräfte werden als Vektoren dargestellt und addiert, um die resultierende Belastung zu berechnen. Im EKG repräsentiert die Herzachse den elektrischen Summenvektor der Erregungsausbreitung und wird im Cabrera-Kreis visualisiert. Blutfluss besitzt sowohl Geschwindigkeit als auch Richtung und ist daher grundsätzlich eine vektorielle Größe.",
      },
      klinischerBezug: "Biomechanik: Gelenkkräfte als Vektorsummen; EKG-Herzachse als elektrischer Summenvektor (Cabrera-Kreis); Blutflussvektor in der Hämodynamik.",
      selfTest: [
        {
          question: "Berechnen Sie den Betrag des Vektors $\\vec{v} = (3, 4)$.",
          options: [
            "5",
            "7",
            "√7",
            "12",
            "√13",
          ],
          correctIndex: 0,
          explanation: "Der Betrag eines 2D-Vektors berechnet sich nach dem Satz des Pythagoras: $|\\vec{v}| = \\sqrt{v_1^2 + v_2^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$. Das 3-4-5-Dreieck ist eines der bekanntesten pythagoräischen Tripel und sollte sofort erkennbar sein. Die Antwort 7 wäre eine fehlerhafte direkte Addition der Komponenten, 12 das fehlerhafte Produkt.",
          hints: [
            "Denken Sie an den Satz des Pythagoras: In einem rechtwinkligen Dreieck gilt a² + b² = c².",
            "Kennen Sie das pythagoräische Tripel 3-4-? — es handelt sich um ein sehr klassisches Beispiel.",
          ],
          tags: [],
          difficulty: 1,
        },
        {
          question: "Gegeben $\\vec{a} = (2, 3)$ und $\\vec{b} = (4, -1)$. Was ergibt $\\vec{a} + \\vec{b}$?",
          options: [
            "(6, 2)",
            "(6, 4)",
            "(2, 4)",
            "(8, 3)",
            "(2, 2)",
          ],
          correctIndex: 0,
          explanation: "Vektoren werden komponentenweise addiert: $\\vec{a} + \\vec{b} = (2+4,\\; 3+(-1)) = (6, 2)$. Die erste Komponente: 2+4=6. Die zweite Komponente: 3+(-1)=3-1=2. Ein häufiger Fehler ist das Addieren der zweiten Komponente als 3+1=4, weil das negative Vorzeichen übersehen wird. Geometrisch ist die Summe der Diagonalvektor des durch $\\vec{a}$ und $\\vec{b}$ aufgespannten Parallelogramms.",
          hints: [
            "Addieren Sie die Komponenten jeweils getrennt: erste Komponente für sich, zweite Komponente für sich.",
            "Achten Sie auf das Vorzeichen: Die zweite Komponente von b ist −1, nicht +1.",
          ],
          tags: [],
          difficulty: 1,
        },
        {
          question: "Welche x-Komponente hat der Einheitsvektor in Richtung von $\\vec{v} = (6, 8)$?",
          options: [
            "0,6",
            "0,8",
            "6",
            "0,5",
            "1",
          ],
          correctIndex: 0,
          explanation: "Der Betrag von $\\vec{v}$ ist $|\\vec{v}| = \\sqrt{6^2+8^2} = \\sqrt{36+64} = \\sqrt{100} = 10$. Der Einheitsvektor ist $\\hat{e} = \\vec{v}/|\\vec{v}| = (6/10,\\; 8/10) = (0{,}6;\\; 0{,}8)$. Die x-Komponente ist daher 0,6. Zur Überprüfung: $|(0{,}6;\\; 0{,}8)| = \\sqrt{0{,}36+0{,}64} = \\sqrt{1} = 1$ — korrekt, da Einheitsvektor.",
          hints: [
            "Berechnen Sie zuerst den Betrag |v| mit dem Satz des Pythagoras.",
            "Der Einheitsvektor ist ê = v / |v| — dividieren Sie jede Komponente durch den Betrag.",
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: "Die Vektoren $\\vec{a} = (4, 3)$ und $\\vec{b} = (x, 5)$ sind orthogonal. Bestimmen Sie $x$.",
          options: [
            "$-15/4$",
            "$15/4$",
            "$-4/15$",
            "$4/15$",
            "$-3$",
          ],
          correctIndex: 0,
          explanation: "Orthogonalität bedeutet: das Skalarprodukt ist gleich null. $\\vec{a} \\cdot \\vec{b} = 4 \\cdot x + 3 \\cdot 5 = 4x + 15 = 0$. Auflösen nach $x$: $4x = -15 \\Rightarrow x = -15/4 = -3{,}75$. Zur Probe: Skalarprodukt $= 4 \\cdot (-15/4) + 3 \\cdot 5 = -15 + 15 = 0$ — korrekt. In der Biomechanik bedeutet Orthogonalität, dass zwei Kraftkomponenten keine gemeinsame Wirkungsrichtung teilen.",
          hints: [
            "Orthogonale Vektoren haben Skalarprodukt 0: a₁·b₁ + a₂·b₂ = 0.",
            "Setzen Sie die bekannten Werte ein und lösen Sie die entstehende lineare Gleichung nach x auf.",
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: "Berechnen Sie den Betrag des 3D-Vektors $\\vec{v} = (1, -2, 2)$.",
          options: [
            "3",
            "√5",
            "5",
            "1",
            "√13",
          ],
          correctIndex: 0,
          explanation: "Im dreidimensionalen Raum gilt: $|\\vec{v}| = \\sqrt{v_1^2+v_2^2+v_3^2} = \\sqrt{1^2+(-2)^2+2^2} = \\sqrt{1+4+4} = \\sqrt{9} = 3$. Wichtig: $(-2)^2 = +4$, nicht $-4$. Das Quadrieren beseitigt das negative Vorzeichen. Der Vektor hat die interessante Eigenschaft, dass $\\sqrt{9}=3$ eine ganze Zahl ergibt.",
          hints: [
            "Der Betrag im 3D-Raum: |v| = √(v₁² + v₂² + v₃²) — alle drei Komponenten werden quadriert und addiert.",
            "Achtung: (−2)² = +4. Das Quadrat einer negativen Zahl ist immer positiv.",
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: "Sind $\\vec{a} = (2, 4, -2)$ und $\\vec{b} = (-1, -2, 1)$ linear abhängig?",
          options: [
            "Ja, denn $\\vec{a} = -2 \\cdot \\vec{b}$",
            "Nein, da sie verschiedene Beträge haben",
            "Nein, da das Skalarprodukt nicht null ist",
            "Ja, aber nur im 2D-Fall",
            "Nein, linear abhängige Vektoren müssen gleich lang sein",
          ],
          correctIndex: 0,
          explanation: "Zwei Vektoren sind linear abhängig genau dann, wenn einer ein skalares Vielfaches des anderen ist. Hier: $-2 \\cdot \\vec{b} = -2 \\cdot (-1,-2,1) = (2,4,-2) = \\vec{a}$. Also ist $\\vec{a} = -2 \\cdot \\vec{b}$ — die Vektoren sind parallel (gegenläufig) und damit linear abhängig. Unterschiedliche Beträge schließen lineare Abhängigkeit nicht aus; auch das Skalarprodukt allein entscheidet nicht darüber (es muss für parallele Vektoren $\\vec{a} \\cdot \\vec{b} = \\pm|\\vec{a}||\\vec{b}|$ gelten).",
          hints: [
            "Linear abhängig bedeutet: einer der Vektoren lässt sich als skalares Vielfaches des anderen darstellen: a = k·b.",
            "Prüfen Sie, ob b = k·a für ein reelles k gilt, indem Sie die Komponenten vergleichen: k = a₁/b₁ = ?",
          ],
          tags: [],
          difficulty: 3,
        },
        {
          question: "Ein Vektor $\\vec{v}$ hat Betrag 10 und bildet mit der x-Achse einen Winkel von 60°. Wie groß ist die y-Komponente?",
          options: [
            "$5\\sqrt{3}$",
            "5",
            "$10\\sqrt{3}$",
            "$\\sqrt{3}$",
            "10",
          ],
          correctIndex: 0,
          explanation: "Ein Vektor mit Betrag $r$ und Winkel $\\alpha$ zur x-Achse hat die Komponenten $(r\\cos\\alpha,\\; r\\sin\\alpha)$. Hier: y-Komponente $= 10 \\cdot \\sin(60°) = 10 \\cdot \\frac{\\sqrt{3}}{2} = 5\\sqrt{3} \\approx 8{,}66$. Die x-Komponente wäre $10 \\cdot \\cos(60°) = 10 \\cdot 0{,}5 = 5$. Der Merksatz: $\\sin(60°) = \\frac{\\sqrt{3}}{2}$, $\\cos(60°) = \\frac{1}{2}$.",
          hints: [
            "Erinnern Sie sich: Die Komponenten eines Vektors der Länge r mit Winkel α zur x-Achse sind (r·cos α, r·sin α).",
            "sin(60°) = √3/2 ≈ 0,866. Multiplizieren Sie mit dem Betrag 10.",
          ],
          tags: [],
          difficulty: 3,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────
    // UK ma-6-02: Skalarprodukt und Kreuzprodukt
    // ─────────────────────────────────────────────────────────────────
    {
      id: 'ma-6-02',
      title: "Skalarprodukt und Kreuzprodukt",
      content: `# Skalarprodukt und Kreuzprodukt

## Skalarprodukt

Das **Skalarprodukt** (Dot-Produkt) zweier Vektoren $\\vec{a}$ und $\\vec{b}$ ist definiert als:

$$\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3 = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos \\theta$$

Das Ergebnis ist ein **Skalar** (keine Richtung). Die geometrische Bedeutung: Das Skalarprodukt misst, wie sehr zwei Vektoren in dieselbe Richtung zeigen.

**Wichtige Spezialfälle:**
- $\\vec{a} \\cdot \\vec{b} = 0 \\Rightarrow$ Vektoren sind **orthogonal** (senkrecht, $\\theta = 90°$)
- $\\vec{a} \\cdot \\vec{b} > 0 \\Rightarrow$ spitzer Winkel ($\\theta < 90°$)
- $\\vec{a} \\cdot \\vec{b} < 0 \\Rightarrow$ stumpfer Winkel ($\\theta > 90°$)
- $\\vec{a} \\cdot \\vec{a} = |\\vec{a}|^2$ (Skalarprodukt mit sich selbst = Betrag zum Quadrat)

**Winkelberechnung:**
$$\\cos \\theta = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}$$

## Kreuzprodukt

Das **Kreuzprodukt** (Vektorprodukt) ist nur im $\\mathbb{R}^3$ definiert und liefert einen **Vektor**:

$$\\vec{a} \\times \\vec{b} = \\begin{pmatrix} a_2 b_3 - a_3 b_2 \\\\ a_3 b_1 - a_1 b_3 \\\\ a_1 b_2 - a_2 b_1 \\end{pmatrix}$$

Dieses Ergebnis steht **senkrecht** auf beiden Ausgangsvektoren.

**Betrag des Kreuzprodukts:**
$$|\\vec{a} \\times \\vec{b}| = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\sin \\theta$$

Geometrisch entspricht dies dem **Flächeninhalt des Parallelogramms**, das von $\\vec{a}$ und $\\vec{b}$ aufgespannt wird.

**Wichtige Eigenschaften:**
- **Antikommutativ**: $\\vec{a} \\times \\vec{b} = -(\\vec{b} \\times \\vec{a})$
- Parallele Vektoren ($\\theta = 0°$ oder $180°$): $\\vec{a} \\times \\vec{b} = \\vec{0}$
- Die Richtung folgt der **Rechten-Hand-Regel**: Finger von $\\vec{a}$ zu $\\vec{b}$ einrollen, Daumen zeigt in Richtung $\\vec{a} \\times \\vec{b}$

## Sarrus-Regel

Zur praktischen Berechnung des Kreuzprodukts wird die Sarrus-Regel verwendet (Entwicklung nach der 3×3-Determinante): Man schreibt die Komponenten in eine 3×3-Matrix und berechnet die Determinante mit der Regel der Sarrus.

## Klinische Bedeutung

Das **Drehmoment** $\\vec{M} = \\vec{r} \\times \\vec{F}$ ist das Kreuzprodukt aus Hebelarm und Kraft und ist zentral für die Biomechanik von Gelenken. Je länger der Hebelarm und je senkrechter die Kraft, desto größer das Drehmoment. In der **MRT-Sicherheit** ist die Lorentz-Kraft $\\vec{F} = q(\\vec{v} \\times \\vec{B})$ relevant: Metallische Implantate mit bewegten Ladungsträgern erfahren im starken Magnetfeld eine Kraft, die mit dem Kreuzprodukt berechnet wird. Das Skalarprodukt wird verwendet, um die **Projektion** einer Kraft auf eine bestimmte Richtung zu berechnen.`,
      lernziele: [
        "Das Skalarprodukt komponentenweise und über den Winkel berechnen und interpretieren können.",
        "Orthogonalität zweier Vektoren anhand des Skalarprodukts erkennen und beweisen können.",
        "Den Winkel zwischen zwei Vektoren mit Hilfe des Skalarprodukts berechnen können.",
        "Das Kreuzprodukt im ℝ³ berechnen und seine geometrische Bedeutung (Normalenvektor, Fläche) erklären können.",
        "Die Antikommutativität des Kreuzprodukts und die Rechte-Hand-Regel anwenden können.",
      ],
      sections: [
        {
          heading: "Skalarprodukt — Definition und Anwendung",
          text: "Das Skalarprodukt $\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3 = |\\vec{a}||\\vec{b}|\\cos\\theta$ liefert einen Skalar. Ist es gleich null, stehen die Vektoren senkrecht aufeinander (orthogonal). Der Winkel zwischen zwei Vektoren ergibt sich zu $\\cos\\theta = \\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}||\\vec{b}|}$. Das Skalarprodukt ist kommutativ: $\\vec{a}\\cdot\\vec{b} = \\vec{b}\\cdot\\vec{a}$.",
          merksatz: "Skalarprodukt = 0 → orthogonal. Skalarprodukt > 0 → spitzer Winkel. Skalarprodukt < 0 → stumpfer Winkel.",
        },
        {
          heading: "Kreuzprodukt — Definition, Eigenschaften und Berechnung",
          text: "Das Kreuzprodukt $\\vec{a}\\times\\vec{b}$ ist nur im ℝ³ definiert und ergibt einen Vektor senkrecht zu $\\vec{a}$ und $\\vec{b}$. Sein Betrag $|\\vec{a}\\times\\vec{b}| = |\\vec{a}||\\vec{b}|\\sin\\theta$ entspricht der Fläche des aufgespannten Parallelogramms. Die Richtung folgt der Rechten-Hand-Regel. Antikommutativ: $\\vec{a}\\times\\vec{b} = -(\\vec{b}\\times\\vec{a})$. Für parallele Vektoren gilt $\\vec{a}\\times\\vec{b} = \\vec{0}$.",
          merksatz: "Kreuzprodukt → Vektor ⊥ zu beiden; |a×b| = Parallelogrammfläche; antikommutativ: a×b = −(b×a).",
        },
        {
          heading: "Klinische Anwendungen: Drehmoment und Lorentz-Kraft",
          text: "Das Drehmoment $\\vec{M} = \\vec{r} \\times \\vec{F}$ ist das Kreuzprodukt aus Hebelarm $\\vec{r}$ und Kraft $\\vec{F}$. Im Knie beispielsweise ergibt die Quadrizepskraft mal dem Hebelarm das Streckmoment. In der MRT-Sicherheit ist die Lorentz-Kraft $\\vec{F} = q(\\vec{v}\\times\\vec{B})$ relevant: Ein im Magnetfeld bewegtes metallisches Implantat kann eine Kraft durch das Kreuzprodukt aus Ladungsgeschwindigkeit und Magnetfeld erfahren. Das Skalarprodukt erlaubt die Projektion einer Kraft auf eine Bewegungsrichtung (mechanische Arbeit: $W = \\vec{F}\\cdot\\vec{s}$).",
          merksatz: "Drehmoment M = r × F (Kreuzprodukt). Mechanische Arbeit W = F · s (Skalarprodukt). MRT: Lorentz-Kraft F = q·(v×B).",
        },
      ],
      diagram: 'vector-addition',

      merksätze: [
        "Skalarprodukt: a·b = a₁b₁ + a₂b₂ + a₃b₃ — Ergebnis ist ein Skalar.",
        "a·b = |a|·|b|·cos θ — damit lässt sich der Winkel zwischen Vektoren berechnen.",
        "a·b = 0 bedeutet Orthogonalität (θ = 90°) — zentrales Kriterium!",
        "Kreuzprodukt: a×b steht senkrecht auf a UND b — Ergebnis ist ein Vektor.",
        "|a×b| = |a|·|b|·sin θ = Fläche des aufgespannten Parallelogramms.",
        "Rechte-Hand-Regel: Finger von a nach b einrollen, Daumen zeigt a×b.",
        "Antikommutativ: a×b = −(b×a) — Reihenfolge vertauschen ändert das Vorzeichen.",
        "Parallele Vektoren: Kreuzprodukt = Nullvektor (sin 0° = 0).",
        "Drehmoment M = r×F — Kreuzprodukt aus Hebelarm und Kraft in der Biomechanik.",
        "Mechanische Arbeit W = F·s — Skalarprodukt aus Kraft und Weg.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: "Was ist der Unterschied zwischen Skalarprodukt und Kreuzprodukt? Beschreiben Sie Berechnung, Ergebnis und je eine klinische Anwendung.",
        answer: "Das **Skalarprodukt** $\\vec{a}\\cdot\\vec{b} = a_1b_1+a_2b_2+a_3b_3 = |\\vec{a}||\\vec{b}|\\cos\\theta$ liefert einen **Skalar** ohne Richtung. Es misst die Übereinstimmung der Richtungen zweier Vektoren. Ist das Skalarprodukt null, stehen die Vektoren senkrecht (orthogonal) aufeinander. Bei positivem Wert schließen sie einen spitzen Winkel ein, bei negativem einen stumpfen. Klinisch wird das Skalarprodukt für die mechanische Arbeit $W = \\vec{F}\\cdot\\vec{s}$ verwendet: Nur die Kraftkomponente in Bewegungsrichtung leistet Arbeit. Das **Kreuzprodukt** $\\vec{a}\\times\\vec{b}$ ist nur im $\\mathbb{R}^3$ definiert und liefert einen **Vektor**, der senkrecht auf beiden Ausgangsvektoren steht. Sein Betrag $|\\vec{a}\\times\\vec{b}| = |\\vec{a}||\\vec{b}|\\sin\\theta$ entspricht dem Flächeninhalt des von beiden Vektoren aufgespannten Parallelogramms. Die Richtung folgt der Rechten-Hand-Regel. Im Gegensatz zum Skalarprodukt ist das Kreuzprodukt **antikommutativ**: $\\vec{a}\\times\\vec{b} = -(\\vec{b}\\times\\vec{a})$. Klinisch ist das Drehmoment $\\vec{M} = \\vec{r}\\times\\vec{F}$ die wichtigste Anwendung: Es beschreibt die Dreheigenschaft einer Kraft um einen Gelenkpunkt und ist zentral für das Verständnis von Hebelkräften in der Biomechanik.",
      },
      klinischerBezug: "Drehmoment M = r×F an Gelenken (Biomechanik); Lorentz-Kraft F = q·(v×B) für MRT-Implantat-Sicherheit; mechanische Arbeit W = F·s (Skalarprodukt).",
      selfTest: [
        {
          question: "Berechnen Sie das Skalarprodukt von $\\vec{a} = (3, -2, 1)$ und $\\vec{b} = (1, 4, -2)$.",
          options: [
            "−7",
            "7",
            "−3",
            "3",
            "5",
          ],
          correctIndex: 0,
          explanation: "Das Skalarprodukt wird komponentenweise berechnet: $\\vec{a}\\cdot\\vec{b} = 3\\cdot1 + (-2)\\cdot4 + 1\\cdot(-2) = 3 - 8 - 2 = -7$. Das negative Ergebnis bedeutet, dass der Winkel zwischen den Vektoren stumpf ist ($\\theta > 90°$). Eine häufige Fehlerquelle ist das Übersehen der negativen Vorzeichen bei den Komponenten.",
          hints: [
            "Skalarprodukt: a₁·b₁ + a₂·b₂ + a₃·b₃ — multiplizieren Sie die entsprechenden Komponenten und addieren Sie.",
            "Beachten Sie die Vorzeichen: (−2)·4 = −8 und 1·(−2) = −2.",
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: "Welchen Winkel schließen $\\vec{a} = (1, 0)$ und $\\vec{b} = (1, 1)$ ein?",
          options: [
            "45°",
            "30°",
            "60°",
            "90°",
            "0°",
          ],
          correctIndex: 0,
          explanation: "$\\vec{a}\\cdot\\vec{b} = 1\\cdot1 + 0\\cdot1 = 1$. Betrag: $|\\vec{a}| = 1$, $|\\vec{b}| = \\sqrt{1^2+1^2} = \\sqrt{2}$. Also $\\cos\\theta = \\frac{1}{1\\cdot\\sqrt{2}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$, was $\\theta = 45°$ entspricht. Merksatz: $\\cos(45°) = \\frac{\\sqrt{2}}{2} \\approx 0{,}707$.",
          hints: [
            "Berechnen Sie cos θ = (a·b) / (|a|·|b|) und bestimmen Sie daraus den Winkel.",
            "cos(45°) = √2/2 ≈ 0,707; cos(60°) = 0,5; cos(30°) = √3/2 ≈ 0,866.",
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: "Welche Aussage über das Kreuzprodukt $\\vec{a}\\times\\vec{b}$ ist korrekt?",
          options: [
            "Es steht senkrecht auf $\\vec{a}$ und $\\vec{b}$ und ist nur im ℝ³ definiert",
            "Es ist kommutativ: $\\vec{a}\\times\\vec{b} = \\vec{b}\\times\\vec{a}$",
            "Es liefert einen Skalar",
            "Es ist auch im ℝ² definiert",
            "Parallele Vektoren haben ein maximales Kreuzprodukt",
          ],
          correctIndex: 0,
          explanation: "Das Kreuzprodukt ist ausschließlich im dreidimensionalen Raum $\\mathbb{R}^3$ definiert und liefert einen Vektor (keinen Skalar), der senkrecht auf beiden Ausgangsvektoren steht. Es ist **antikommutativ**: $\\vec{a}\\times\\vec{b} = -(\\vec{b}\\times\\vec{a})$, nicht kommutativ. Für parallele Vektoren ($\\sin\\theta = 0$) ist das Kreuzprodukt der Nullvektor, nicht maximal. Das Maximum wird bei $\\theta = 90°$ erreicht.",
          hints: [
            "Was ist das Ergebnis des Kreuzprodukts — Skalar oder Vektor? In welchem Raum ist es definiert?",
            "Denken Sie an die Antikommutativität: Das Vertauschen der Reihenfolge ändert das Vorzeichen.",
          ],
          tags: [],
          difficulty: 1,
        },
        {
          question: "Berechnen Sie $\\vec{a}\\times\\vec{b}$ für $\\vec{a} = (1, 0, 0)$ und $\\vec{b} = (0, 1, 0)$.",
          options: [
            "$(0, 0, 1)$",
            "$(1, 1, 0)$",
            "$(0, 1, 1)$",
            "$(1, 0, 1)$",
            "$(0, 0, 0)$",
          ],
          correctIndex: 0,
          explanation: "Kreuzprodukt-Formel: $(a_2b_3-a_3b_2,\\; a_3b_1-a_1b_3,\\; a_1b_2-a_2b_1)$. Einsetzen: $(0\\cdot0-0\\cdot1,\\; 0\\cdot0-1\\cdot0,\\; 1\\cdot1-0\\cdot0) = (0,0,1)$. Geometrisch: $\\vec{e_1}\\times\\vec{e_2} = \\vec{e_3}$ ist die zyklische Eigenschaft der Standardbasisvektoren. Die Rechte-Hand-Regel bestätigt: Finger von x-Richtung zur y-Richtung einrollen, Daumen zeigt in z-Richtung.",
          hints: [
            "Verwenden Sie die Formel: a×b = (a₂b₃−a₃b₂, a₃b₁−a₁b₃, a₁b₂−a₂b₁).",
            "Denken Sie an die Rechte-Hand-Regel: e₁×e₂ = e₃ (x-Achse × y-Achse = z-Achse).",
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: "Ein Muskel übt eine Kraft $\\vec{F} = (0, 10, 0)$ N am Hebelarm $\\vec{r} = (0{,}3, 0, 0)$ m an. Welchen Betrag hat das Drehmoment $\\vec{M} = \\vec{r}\\times\\vec{F}$?",
          options: [
            "3 Nm",
            "10 Nm",
            "0 Nm",
            "0,3 Nm",
            "30 Nm",
          ],
          correctIndex: 0,
          explanation: "$\\vec{r}\\times\\vec{F} = (0\\cdot0-0\\cdot0,\\; 0\\cdot0-0{,}3\\cdot0,\\; 0{,}3\\cdot10-0\\cdot0) = (0,0,3)$ Nm. Also $|\\vec{M}| = 3$ Nm. Alternativ: $|\\vec{M}| = |\\vec{r}||\\vec{F}|\\sin(90°) = 0{,}3 \\cdot 10 \\cdot 1 = 3$ Nm. Da Hebelarm (x-Richtung) und Kraft (y-Richtung) senkrecht stehen, gilt $\\sin(90°)=1$, und das Drehmoment ist maximal.",
          hints: [
            "Drehmoment M = r × F. Berechnen Sie das Kreuzprodukt komponentenweise.",
            "Da r und F senkrecht stehen (x- und y-Richtung), gilt |M| = |r|·|F|·sin(90°) = |r|·|F|·1.",
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: "Zwei Vektoren $\\vec{a} = (1, 2, -1)$ und $\\vec{b} = (2, 4, -2)$. Was gilt für ihr Kreuzprodukt?",
          options: [
            "$\\vec{a}\\times\\vec{b} = \\vec{0}$, da die Vektoren parallel sind",
            "$\\vec{a}\\times\\vec{b}$ ist ein Einheitsvektor",
            "$\\vec{a}\\times\\vec{b}$ hat den gleichen Betrag wie $\\vec{a}$",
            "Das Kreuzprodukt ist nicht definiert",
            "$\\vec{a}\\times\\vec{b}$ zeigt in Richtung von $\\vec{a}$",
          ],
          correctIndex: 0,
          explanation: "$\\vec{b} = 2\\cdot\\vec{a}$ (denn $(2,4,-2) = 2\\cdot(1,2,-1)$), also sind die Vektoren parallel. Für parallele Vektoren gilt $\\sin\\theta = \\sin(0°) = 0$, daher $|\\vec{a}\\times\\vec{b}| = 0$. Das Kreuzprodukt paralleler Vektoren ist immer der Nullvektor. Dies ergibt geometrisch Sinn: Parallele Vektoren spannen kein Parallelogramm auf (Fläche = 0).",
          hints: [
            "Ist b ein skalares Vielfaches von a? Wenn ja, sind die Vektoren parallel.",
            "Parallele Vektoren schließen einen Winkel von 0° (oder 180°) ein. Was ergibt sin(0°)?",
          ],
          tags: [],
          difficulty: 3,
        },
        {
          question: "Das Skalarprodukt $\\vec{a}\\cdot\\vec{b} = -12$, $|\\vec{a}| = 4$, $|\\vec{b}| = 6$. Welcher Winkel $\\theta$ liegt zwischen den Vektoren?",
          options: [
            "120°",
            "60°",
            "90°",
            "30°",
            "150°",
          ],
          correctIndex: 0,
          explanation: "$\\cos\\theta = \\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}||\\vec{b}|} = \\frac{-12}{4\\cdot6} = \\frac{-12}{24} = -\\frac{1}{2}$. Da $\\cos(120°) = -\\frac{1}{2}$, folgt $\\theta = 120°$. Das negative Skalarprodukt bestätigt: der Winkel ist stumpf ($> 90°$). Merksatz: $\\cos(60°) = \\frac{1}{2}$, $\\cos(120°) = -\\frac{1}{2}$, $\\cos(90°) = 0$, $\\cos(180°) = -1$.",
          hints: [
            "Berechnen Sie cos θ = (a·b) / (|a|·|b|). Das negative Ergebnis deutet auf einen stumpfen Winkel hin.",
            "cos(120°) = −½. Denken Sie an den Einheitskreis: Im zweiten Quadrant ist der Kosinus negativ.",
          ],
          tags: [],
          difficulty: 3,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────
    // UK ma-6-03: Geraden, Ebenen und Matrizen
    // ─────────────────────────────────────────────────────────────────
    {
      id: 'ma-6-03',
      title: "Geraden, Ebenen und Matrizen",
      content: `# Geraden, Ebenen und Matrizen

## Geradengleichung im Raum

Eine Gerade im dreidimensionalen Raum wird durch die **Parameterform** beschrieben:

$$\\vec{r} = \\vec{r_0} + t \\cdot \\vec{d}, \\quad t \\in \\mathbb{R}$$

Dabei ist $\\vec{r_0}$ der **Stützvektor** (ein Punkt auf der Geraden) und $\\vec{d}$ der **Richtungsvektor** (gibt die Richtung an). Der Parameter $t$ durchläuft alle reellen Zahlen und erzeugt alle Punkte der Geraden.

**Punktprobe:** Um zu prüfen, ob ein Punkt $P$ auf der Geraden liegt, setzt man $\\vec{r} = P$ und löst nach $t$ — wenn das lineare Gleichungssystem konsistent ist, liegt $P$ auf der Geraden.

## Ebenengleichungen

Ebenen im ℝ³ können auf drei äquivalente Weisen dargestellt werden:

**1. Normalenform:** $\\vec{n} \\cdot (\\vec{r} - \\vec{r_0}) = 0$
- $\\vec{n}$ ist der Normalenvektor (senkrecht zur Ebene), $\\vec{r_0}$ ein Punkt auf der Ebene.

**2. Koordinatenform:** $ax + by + cz = d$
- Die Koeffizienten $(a, b, c)$ bilden den Normalenvektor $\\vec{n}$.

**3. Parameterform:** $\\vec{r} = \\vec{r_0} + s\\cdot\\vec{d_1} + t\\cdot\\vec{d_2}$
- Zwei Richtungsvektoren $\\vec{d_1}$, $\\vec{d_2}$ spannen die Ebene auf.

## Matrizenrechnung

Eine **Matrix** $A$ ist ein rechteckiges Schema von Zahlen (m Zeilen × n Spalten). Matrizen ermöglichen die kompakte Darstellung linearer Gleichungssysteme.

**Addition:** Nur für gleich große Matrizen, elementweise: $(A+B)_{ij} = A_{ij} + B_{ij}$

**Skalare Multiplikation:** $(\lambda A)_{ij} = \lambda \\cdot A_{ij}$

**Matrizenprodukt:** $A$ (m×n) mal $B$ (n×p) = $C$ (m×p). Das Element $C_{ij} = \\sum_k A_{ik} B_{kj}$ (Zeile von $A$ mal Spalte von $B$). Matrizenmultiplikation ist i. A. **nicht kommutativ**: $A \\cdot B \\neq B \\cdot A$.

**Transponierte Matrix:** $A^\\top$ entsteht durch Vertauschen von Zeilen und Spalten: $(A^\\top)_{ij} = A_{ji}$. Eine Matrix heißt **symmetrisch**, wenn $A = A^\\top$.

**Determinante einer 2×2-Matrix:**
$$\\det(A) = \\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$$

- $\\det(A) = 0$: Die Zeilen/Spalten sind linear abhängig; das LGS hat keine eindeutige Lösung.
- $\\det(A) \\neq 0$: Matrix ist regulär (invertierbar), das LGS hat genau eine Lösung.

## Klinische Bedeutung

In der **CT-Bildrekonstruktion** werden die gemessenen Absorptionswerte durch eine Radon-Transformation verarbeitet. Die Rückprojektion ist mathematisch eine Matrizenoperation: Aus Messdaten (Sinogramm) wird durch iterative Matrizenoperationen ein 3D-Bilddatensatz rekonstruiert. In der **Bioinformatik** werden Genexpressionsdaten als Matrizen gespeichert (Zeilen = Gene, Spalten = Patientenproben). Die **Hauptkomponentenanalyse (PCA)** reduziert diese hochdimensionalen Matrizen auf die relevantesten Dimensionen und ermöglicht die Visualisierung von Mustern in medizinischen Studien.`,
      lernziele: [
        "Die Parameterform einer Geraden im ℝ³ aufstellen und Punkte auf der Geraden berechnen können.",
        "Ebenengleichungen in Normalenform, Koordinatenform und Parameterform ineinander umrechnen können.",
        "Matrizenaddition, skalare Multiplikation und Matrizenmultiplikation (mit Dimensionsregel m×n · n×p = m×p) durchführen können.",
        "Die Determinante einer 2×2-Matrix berechnen und ihre geometrische/algebraische Bedeutung erklären können.",
        "Die klinische Bedeutung von Matrizenoperationen in der CT-Bildrekonstruktion und Bioinformatik beschreiben können.",
      ],
      sections: [
        {
          heading: "Geraden und Ebenen im dreidimensionalen Raum",
          text: "Eine Gerade im ℝ³ wird durch Stützvektor $\\vec{r_0}$ und Richtungsvektor $\\vec{d}$ dargestellt: $\\vec{r} = \\vec{r_0} + t\\cdot\\vec{d}$. Eine Ebene kann durch zwei Richtungsvektoren aufgespannt werden (Parameterform) oder durch ihren Normalenvektor $\\vec{n}$ beschrieben werden (Normalenform: $\\vec{n}\\cdot(\\vec{r}-\\vec{r_0})=0$). In der Koordinatenform $ax+by+cz=d$ bilden die Koeffizienten $(a,b,c)$ genau den Normalenvektor.",
          merksatz: "Gerade: r = r₀ + t·d (Stützvektor + Vielfaches des Richtungsvektors). Ebene-Normalenform: n·(r−r₀)=0.",
        },
        {
          heading: "Matrizenrechnung — Grundoperationen und Determinante",
          text: "Matrizen werden elementweise addiert; das Produkt $A\\cdot B$ erfordert gleiche innere Dimensionen (n) und ist nicht kommutativ. Die Transponierte $A^\\top$ entsteht durch Zeile-Spalte-Tausch. Die Determinante einer 2×2-Matrix: $\\det(A) = ad-bc$. Ist sie null, sind die Zeilen linear abhängig — das entsprechende LGS hat keine eindeutige Lösung. Wichtige Anwendung: Prüfung auf lineare Unabhängigkeit von Vektoren.",
          merksatz: "Matrizenprodukt: m×n · n×p = m×p. Determinante 2×2: ad−bc. det = 0 → linear abhängig, kein eindeutiges LGS.",
        },
        {
          heading: "Klinische Anwendungen: CT und Bioinformatik",
          text: "CT-Bildrekonstruktion: Die gemessenen Röntgenabsorptionsdaten werden als Sinogramm gespeichert und durch Matrizenoperationen (gefilterte Rückprojektion) in ein 3D-Volumenbild umgerechnet. Bioinformatik: Genexpressionsdaten als Matrizen (Gene × Patienten). PCA (Hauptkomponentenanalyse) nutzt Eigenvektoren und Eigenwerte dieser Matrizen, um Datenmuster zu erkennen und Dimensionen zu reduzieren. Auch lineare Regression und medizinische Bildgebung (MRT, Ultraschall-Beamforming) stützen sich auf Matrizenalgebra.",
          merksatz: "CT-Rekonstruktion = Matrizenoperationen (Rückprojektion). Bioinformatik: Genmatrix (Gene × Patienten). PCA nutzt Eigenvektoren.",
        },
      ],
      diagram: 'vector-addition',
      merksätze: [
        "Geradengleichung Raum: r = r₀ + t·d (Stützvektor + Parameter × Richtungsvektor).",
        "Ebene Normalenform: n·(r − r₀) = 0, wobei n ⊥ Ebene.",
        "Ebene Koordinatenform: ax + by + cz = d — Koeffizienten (a,b,c) sind der Normalenvektor.",
        "Matrizenaddition: nur für gleich große Matrizen, elementweise.",
        "Matrizenprodukt: A(m×n) · B(n×p) = C(m×p) — innere Dimensionen müssen übereinstimmen.",
        "Matrizenmultiplikation ist nicht kommutativ: A·B ≠ B·A (im Allgemeinen).",
        "Transponierte Aᵀ: Zeilen und Spalten vertauschen; symmetrisch wenn A = Aᵀ.",
        "Determinante 2×2: det(A) = ad − bc.",
        "det(A) = 0 → Zeilen/Spalten linear abhängig → LGS nicht eindeutig lösbar.",
        "CT: Bildrekonstruktion durch Radon-Transformation und Matrizenoperationen (Rückprojektion).",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: "Beschreiben Sie die Darstellungsformen von Ebenen im Raum und erläutern Sie die Bedeutung der Determinante einer Matrix.",
        answer: "Eine Ebene im dreidimensionalen Raum lässt sich auf drei äquivalente Arten beschreiben. In der **Parameterform** $\\vec{r} = \\vec{r_0} + s\\cdot\\vec{d_1} + t\\cdot\\vec{d_2}$ wird die Ebene durch einen Aufpunkt $\\vec{r_0}$ und zwei linear unabhängige Richtungsvektoren $\\vec{d_1}$, $\\vec{d_2}$ definiert. In der **Normalenform** $\\vec{n}\\cdot(\\vec{r}-\\vec{r_0})=0$ steht der Normalenvektor $\\vec{n}$ senkrecht auf der Ebene — dieser lässt sich als Kreuzprodukt der Richtungsvektoren berechnen: $\\vec{n} = \\vec{d_1}\\times\\vec{d_2}$. In der **Koordinatenform** $ax+by+cz=d$ bilden die Koeffizienten $(a,b,c)$ genau den Normalenvektor. Die **Determinante** einer 2×2-Matrix $A = \\begin{pmatrix}a & b \\\\ c & d\\end{pmatrix}$ ist $\\det(A) = ad-bc$. Geometrisch entspricht sie dem Flächeninhalt des von den Zeilenvektoren aufgespannten Parallelogramms. Ist $\\det(A) = 0$, sind die Zeilen (oder Spalten) linear abhängig: Das zugehörige lineare Gleichungssystem besitzt keine eindeutige Lösung (entweder keine oder unendlich viele). Ist $\\det(A) \\neq 0$, ist die Matrix regulär und invertierbar — das LGS hat genau eine Lösung. In der medizinischen Bildgebung spielt die Matrizenrechnung eine fundamentale Rolle: Die CT-Rekonstruktion basiert auf der Inversion von Matrizenoperationen (gefilterte Rückprojektion der Radon-Transformation).",
      },
      klinischerBezug: "CT-Bildrekonstruktion via Radon-Transformation (Matrizenoperationen); Genexpressionsdaten als Matrizen; PCA zur Mustererkennung in medizinischen Studien.",
      selfTest: [
        {
          question: "Welcher Punkt liegt auf der Geraden $\\vec{r} = (1,2,3)^\\top + t\\cdot(1,0,-1)^\\top$?",
          options: [
            "$(3, 2, 1)$",
            "$(2, 2, 2)$",
            "$(1, 3, 3)$",
            "$(3, 3, 1)$",
            "$(0, 2, 4)$",
          ],
          correctIndex: 0,
          explanation: "Für $t=2$: $\\vec{r} = (1,2,3)+2(1,0,-1) = (1+2,\\;2+0,\\;3-2) = (3,2,1)$. Zur Kontrolle: $t=1$ gibt $(2,2,2)$ — diese Antwort ist nicht im Angebot. Das Einsetzen von $t=2$ in die Parameterform liefert eindeutig $(3,2,1)$. Die anderen Optionen ergeben bei keinem $t$ einen konsistenten Wert für alle drei Koordinaten.",
          hints: [
            "Setzen Sie verschiedene Werte für t ein: t=0 gibt den Stützvektor selbst, t=1 gibt r₀ + d, t=2 gibt r₀ + 2d.",
            "Überprüfen Sie jede Antwortoption: Gibt es ein t, sodass (1,2,3) + t·(1,0,−1) = Antwortoption?",
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: "Was ist der Normalenvektor der Ebene mit Koordinatenform $2x - 3y + z = 5$?",
          options: [
            "$(2, -3, 1)$",
            "$(2, 3, -1)$",
            "$(5, 5, 5)$",
            "$(-2, 3, -1)$",
            "$(1, 1, 1)$",
          ],
          correctIndex: 0,
          explanation: "In der Koordinatenform $ax+by+cz=d$ bilden die Koeffizienten $(a,b,c)$ direkt den Normalenvektor der Ebene. Hier: $a=2$, $b=-3$, $c=1$, also $\\vec{n} = (2,-3,1)^\\top$. Der Normalenvektor steht senkrecht auf der Ebene. Dies kann mit dem Skalarprodukt verifiziert werden: Jeder in der Ebene liegende Vektor ergibt mit $\\vec{n}$ das Skalarprodukt 0.",
          hints: [
            "In der Koordinatenform ax + by + cz = d sind die Koeffizienten a, b, c direkt die Komponenten des Normalenvektors.",
            "Der Normalenvektor steht senkrecht auf der Ebene — er ergibt mit jedem Ebenenvektor das Skalarprodukt 0.",
          ],
          tags: [],
          difficulty: 1,
        },
        {
          question: "Berechnen Sie das Produkt $A \\cdot B$ für $A = \\begin{pmatrix}1 & 2\\\\3 & 4\\end{pmatrix}$ und $B = \\begin{pmatrix}1\\\\0\\end{pmatrix}$.",
          options: [
            "$\\begin{pmatrix}1\\\\3\\end{pmatrix}$",
            "$\\begin{pmatrix}3\\\\7\\end{pmatrix}$",
            "$\\begin{pmatrix}1\\\\4\\end{pmatrix}$",
            "$\\begin{pmatrix}2\\\\4\\end{pmatrix}$",
            "$\\begin{pmatrix}4\\\\6\\end{pmatrix}$",
          ],
          correctIndex: 0,
          explanation: "A ist 2×2, B ist 2×1 → Ergebnis C ist 2×1. $C_{11} = 1\\cdot1+2\\cdot0 = 1$; $C_{21} = 3\\cdot1+4\\cdot0 = 3$. Also $C = (1,3)^\\top$. Beim Matrizenprodukt wird jede Zeile von A mit der (einzigen) Spalte von B skalar multipliziert. Dimensionsregel: 2×2 mal 2×1 = 2×1 — die inneren Dimensionen (beide 2) stimmen überein.",
          hints: [
            "Dimensionsregel: A ist (2×2), B ist (2×1). Das Ergebnis ist (2×1).",
            "Zeile 1 von A mal Spalte von B: 1·1 + 2·0 = 1. Zeile 2 von A mal Spalte von B: 3·1 + 4·0 = 3.",
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: "Berechnen Sie die Determinante von $A = \\begin{pmatrix}3 & 5\\\\1 & 2\\end{pmatrix}$.",
          options: [
            "1",
            "−1",
            "11",
            "6",
            "0",
          ],
          correctIndex: 0,
          explanation: "Für eine 2×2-Matrix gilt: $\\det(A) = ad - bc = 3\\cdot2 - 5\\cdot1 = 6 - 5 = 1$. Da $\\det(A) = 1 \\neq 0$, ist die Matrix regulär und invertierbar — das zugehörige LGS hat genau eine Lösung. Der Wert 1 ist besonders praktisch, da die Inverse $A^{-1}$ dann einfach zu berechnen ist.",
          hints: [
            "Determinante 2×2: det(A) = a·d − b·c (Hauptdiagonale minus Nebendiagonale).",
            "Hier: a=3, b=5, c=1, d=2. Also: 3·2 − 5·1 = ?",
          ],
          tags: [],
          difficulty: 1,
        },
        {
          question: "Was bedeutet es, wenn $\\det(A) = 0$ für eine quadratische Matrix gilt?",
          options: [
            "Die Spalten (Zeilen) sind linear abhängig und das LGS $A\\vec{x}=\\vec{b}$ hat keine eindeutige Lösung",
            "Die Matrix ist die Einheitsmatrix",
            "Das LGS hat genau eine Lösung",
            "Die Matrix ist symmetrisch",
            "Alle Einträge der Matrix sind null",
          ],
          correctIndex: 0,
          explanation: "Ist $\\det(A) = 0$, sind die Zeilen- (oder äquivalent: Spalten-) Vektoren der Matrix linear abhängig. Das homogene LGS $A\\vec{x}=\\vec{0}$ hat dann nichttriviale Lösungen. Für das inhomogene System $A\\vec{x}=\\vec{b}$ bedeutet dies entweder keine Lösung (widersprüchlich) oder unendlich viele (unterbestimmt). Geometrisch: Die Zeilenvektoren spannen keinen vollständigen Raum auf (ein Parallelogramm mit Fläche 0 bedeutet Kollinearität). Eine Matrix mit $\\det = 0$ heißt **singulär** (nicht invertierbar).",
          hints: [
            "det(A) = 0 bedeutet, dass die Vektoren, die die Zeilen (oder Spalten) bilden, linear abhängig sind.",
            "Eine nicht invertierbare (singuläre) Matrix ergibt kein eindeutig lösbares LGS.",
          ],
          tags: [],
          difficulty: 2,
        },
        {
          question: "Welche Dimensionen hat das Produkt $A\\cdot B$, wenn $A$ eine 3×4-Matrix und $B$ eine 4×2-Matrix ist?",
          options: [
            "3×2",
            "4×4",
            "3×4",
            "2×3",
            "Das Produkt ist nicht definiert",
          ],
          correctIndex: 0,
          explanation: "Die Dimensionsregel lautet: $(m\\times n)\\cdot(n\\times p) = (m\\times p)$. Hier: $(3\\times4)\\cdot(4\\times2) = (3\\times2)$. Die inneren Dimensionen (beide 4) stimmen überein, daher ist das Produkt definiert. Das Ergebnis hat m=3 Zeilen (aus A) und p=2 Spalten (aus B). Dies ist die wichtigste Voraussetzung bei der Matrizenmultiplikation — die Anzahl der Spalten von A muss gleich der Anzahl der Zeilen von B sein.",
          hints: [
            "Merkhilfe: (m×n)·(n×p) = (m×p). Die 'innere' Dimension n muss übereinstimmen und 'verschwindet'.",
            "Nehmen Sie die äußeren Dimensionen: 3 (Zeilen von A) und 2 (Spalten von B).",
          ],
          tags: [],
          difficulty: 1,
        },
        {
          question: "In der CT-Bildrekonstruktion werden Matrizenoperationen verwendet. Welches mathematische Verfahren liegt der CT-Rekonstruktion zugrunde?",
          options: [
            "Radon-Transformation mit anschließender gefilterter Rückprojektion (Matrizenoperationen)",
            "Direkte Fourier-Inversion ohne Matrizenrechnung",
            "Einfache Vektoraddition der Messwerte",
            "Determinantenberechnung der Absorptionsmatrix",
            "Kreuzprodukt der Messstrahlen",
          ],
          correctIndex: 0,
          explanation: "Die CT-Bildrekonstruktion basiert auf der **Radon-Transformation**: Für jeden Projektionswinkel wird ein eindimensionales Absorptionsprofil gemessen. Das Sinogramm (alle Projektionen zusammen) wird durch die **gefilterte Rückprojektion** in ein 2D/3D-Bild umgewandelt — dies ist mathematisch eine Matrizenoperation. Die Bilddaten werden als Matrix (Pixel-Array) gespeichert. Iterative Rekonstruktionsverfahren lösen ein großes lineares Gleichungssystem $A\\vec{x}=\\vec{b}$ (A = Systemmatrix, x = Bildvektor, b = Messdaten).",
          hints: [
            "CT misst Absorptionswerte aus verschiedenen Winkeln. Wie wird daraus ein Bild berechnet?",
            "Das Schlüsselwort ist 'Rückprojektion' — mathematisch entspricht dies einer Matrizenoperation auf den Messdaten.",
          ],
          tags: [],
          difficulty: 3,
        },
      ],
    },
  ],
};
