import type { Kapitel } from "../types";

export const mathKap6: Kapitel = {
  id: "mathe-kap6",
  title: "Vektorrechnung",
  subject: "mathematik",
  icon: "➡️",
  estimatedTime: "60 min",
  unterkapitel: [
    // ─────────────────────────────────────────────────────────────────
    // UK ma-6-01: Vektoren — Grundbegriffe und Operationen
    // ─────────────────────────────────────────────────────────────────
    {
      id: "ma-6-01",
      title: "Vektoren — Grundbegriffe und Operationen",
      stichworte: [
        "Vektor",
        "Skalar",
        "Betrag",
        "Einheitsvektor",
        "Linearkombination",
        "Lineare Unabhängigkeit",
        "Basisvektoren",
        "Ortsvektor",
        "Verbindungsvektor",
        "Parallelogrammregel",
        "Skalare Multiplikation",
        "Kraftzerlegung",
      ],
      content: `In der Biomechanik wirken auf ein Kniegelenk gleichzeitig Muskelzug, Bandspannung und Schwerkraft. Jede dieser Kräfte hat nicht nur eine Stärke, sondern auch eine Richtung — „30 Newton nach links oben" ist eine völlig andere Belastung als „30 Newton nach rechts unten". Eine einzelne Zahl reicht nicht aus, um das zu beschreiben. Genau dafür gibt es **Vektoren**.

## Was ist ein Vektor?

Stell dir einen Pfeil vor: Er hat eine **Länge** (wie stark?) und zeigt in eine bestimmte **Richtung** (wohin?). Das ist ein Vektor. Im Gegensatz dazu ist ein **Skalar** nur eine nackte Zahl ohne Richtung — etwa die Temperatur 37 °C oder eine Masse von 70 kg.

Typische Vektoren in der Physik und Medizin:
- **Kraft** (z. B. Muskelzug am Knochen)
- **Geschwindigkeit** (z. B. Blutfluss in einer Arterie)
- **Verschiebung** (z. B. Bewegung eines Gelenks)

Typische Skalare: Temperatur, Masse, Energie, Druck.

{{DIAGRAM:vector-addition}}

## Vom Pfeil zur Zahl: Wie man Vektoren aufschreibt

Geometrisch ist ein Vektor ein Pfeil. Algebraisch schreibt man ihn als **Spaltenvektor** — die Komponenten geben an, wie weit der Pfeil in jede Raumrichtung zeigt:

$$\\vec{a} = \\begin{pmatrix} a_1 \\\\ a_2 \\\\ a_3 \\end{pmatrix}$$

Der Vektor $(3, 4)$ zum Beispiel zeigt 3 Einheiten nach rechts und 4 nach oben. Seine **Länge** (der Betrag) folgt direkt aus dem Satz des Pythagoras — der Pfeil ist die Hypotenuse eines rechtwinkligen Dreiecks:

$$|\\vec{v}| = \\sqrt{v_1^2 + v_2^2} \\quad \\text{(2D)}, \\qquad |\\vec{v}| = \\sqrt{v_1^2 + v_2^2 + v_3^2} \\quad \\text{(3D)}$$

**Konkret:** $|(3, 4)| = \\sqrt{9 + 16} = \\sqrt{25} = 5$ — das klassische 3-4-5-Dreieck.

Der **Nullvektor** $\\vec{0} = (0, 0, 0)^\\top$ hat Betrag 0 und keine definierte Richtung.

> **Merke:** Der Betrag eines Vektors ist der verallgemeinerte Pythagoras. Beim MedAT die pythagoräischen Tripel (3-4-5, 5-12-13, 1-2-√5) im Kopf haben — spart Rechenzeit.

## Vektoren addieren: erst das Bild, dann die Formel

Wenn am Knie gleichzeitig zwei Kräfte angreifen — z. B. $\\vec{F}_1$ (Quadrizeps, nach oben) und $\\vec{F}_2$ (Schwerkraft, nach unten) — dann wirkt die **Resultierende** $\\vec{F}_1 + \\vec{F}_2$.

**Geometrisch (Parallelogrammregel):** Zeichne beide Pfeile am selben Startpunkt. Vervollständige das Parallelogramm. Die **Diagonale** ist der Summenvektor.

**Alternativ (Spitze-an-Schaft):** Hänge den zweiten Pfeil an die Spitze des ersten. Der Summenvektor zeigt vom Anfang des ersten zum Ende des zweiten.

**Algebraisch:** Einfach komponentenweise addieren:
$$\\vec{a} + \\vec{b} = (a_1+b_1,\\; a_2+b_2,\\; a_3+b_3)^\\top$$

**Beispiel:** $\\vec{a} = (2, 3)$ und $\\vec{b} = (4, -1)$. Dann $\\vec{a} + \\vec{b} = (6, 2)$. Achtung: $3 + (-1) = 2$, nicht $4$ — Vorzeichen sorgfältig beachten!

**Subtraktion:** $\\vec{a} - \\vec{b}$ bedeutet: addiere den umgedrehten Vektor $(-\\vec{b})$. Geometrisch ist $\\vec{a} - \\vec{b}$ die zweite Diagonale des Parallelogramms.

---

## Skalare Multiplikation: Vektoren strecken und stauchen

$\\lambda \\cdot \\vec{v}$ streckt oder staucht den Pfeil:
- $\\lambda = 2$: doppelt so lang, gleiche Richtung
- $\\lambda = 0{,}5$: halb so lang, gleiche Richtung
- $\\lambda = -1$: gleich lang, **umgekehrte** Richtung

Für den Betrag gilt: $|\\lambda \\vec{v}| = |\\lambda| \\cdot |\\vec{v}|$.

Zwei Vektoren sind **parallel** (kollinear), wenn einer ein skalares Vielfaches des anderen ist: $\\vec{a} = k \\cdot \\vec{b}$ für ein $k \\neq 0$. Sie zeigen dann in dieselbe oder genau entgegengesetzte Richtung.

**Rechengesetze** (kurz bestätigt — funktionieren wie bei normalen Zahlen):
- Kommutativ: $\\vec{a} + \\vec{b} = \\vec{b} + \\vec{a}$
- Assoziativ: $(\\vec{a} + \\vec{b}) + \\vec{c} = \\vec{a} + (\\vec{b} + \\vec{c})$
- Distributiv: $\\lambda(\\vec{a} + \\vec{b}) = \\lambda\\vec{a} + \\lambda\\vec{b}$

---

## Einheitsvektor: reine Richtung, Betrag genau 1

Manchmal interessiert nur die **Richtung** einer Kraft, nicht ihre Stärke. Dafür normiert man den Vektor auf Betrag 1:

$$\\hat{e} = \\frac{\\vec{v}}{|\\vec{v}|}$$

**Beispiel:** $\\vec{v} = (6, 8)$. Betrag: $\\sqrt{36+64} = 10$. Einheitsvektor: $\\hat{e} = (0{,}6;\\; 0{,}8)$. Probe: $\\sqrt{0{,}36+0{,}64} = 1$ ✓.

> **Merke:** Einheitsvektor = Vektor ÷ seinen Betrag. Damit kannst du jede Kraft in „Richtung × Stärke" zerlegen: $\\vec{F} = |\\vec{F}| \\cdot \\hat{e}$.

---

## Ortsvektor und Verbindungsvektor

Der **Ortsvektor** $\\vec{r}_P$ zeigt vom Koordinatenursprung zum Punkt $P$: $\\vec{r}_P = (x, y, z)^\\top$.

Der **Verbindungsvektor** von $A$ nach $B$ ist der Unterschied:

$$\\vec{AB} = \\vec{r}_B - \\vec{r}_A = (b_1 - a_1,\\; b_2 - a_2,\\; b_3 - a_3)^\\top$$

**Eselsbrücke:** Verbindungsvektor = **Ziel minus Start**. Der Abstand zwischen den Punkten ist dann einfach $d(A,B) = |\\vec{AB}|$.

> **Merke:** $\\vec{AB} = -\\vec{BA}$ — wer Start und Ziel vertauscht, dreht die Richtung um. Der Betrag (Abstand) bleibt gleich.

**Mittelpunkt** der Strecke: $M = \\frac{1}{2}(\\vec{r}_A + \\vec{r}_B)$ — das arithmetische Mittel beider Ortsvektoren.

**Beispiel:** $A(1, 3, -2)$, $B(4, 1, 2)$:
- $\\vec{AB} = (3, -2, 4)$, Abstand $= \\sqrt{9+4+16} = \\sqrt{29} \\approx 5{,}39$
- Mittelpunkt $M = (2{,}5;\\; 2;\\; 0)$

---

## Kraftzerlegung am Kniegelenk — Vektoren in Aktion

Eine Muskelkraft $\\vec{F} = (30, 40)$ N greift am Knie an. Die Unterschenkelachse zeigt in Richtung $\\vec{e}_x = (1, 0)$.

- **Kompressionsanteil** (entlang der Achse): $F_{\\parallel} = 30$ N — drückt den Knochen zusammen.
- **Scherkomponente** (senkrecht): $F_{\\perp} = \\sqrt{50^2 - 30^2} = 40$ N — belastet Bänder und Menisken.

Klinisch ist die Scherkraft oft der limitierende Faktor — deshalb werden Kräfte in der Biomechanik immer vektoriell zerlegt.

**EKG-Herzachse:** Im EKG wird die elektrische Erregung des Herzens als Summenvektor dargestellt. Aus Ableitung I (horizontal) und aVF (vertikal) ergibt sich der Herzachsenvektor. Zeigt er bei ca. 60° nach rechts unten: Normalachse. Starke Abweichung (> −30°): Hinweis auf linksventrikuläre Hypertrophie. Die Kardiologie denkt hier in Vektoren.

---

## Linearkombination und lineare Unabhängigkeit

**Intuition zuerst:** Kannst du mit zwei Vektoren jeden Punkt in der Ebene erreichen? Nur dann, wenn die beiden Vektoren in **verschiedene Richtungen** zeigen — also nicht parallel sind.

Formal: Eine **Linearkombination** ist $\\lambda_1 \\vec{v_1} + \\lambda_2 \\vec{v_2} + \\ldots$ — man streckt/staucht die Vektoren und addiert sie.

Vektoren heißen **linear unabhängig**, wenn keiner als Linearkombination der anderen darstellbar ist. Das bedeutet: $\\lambda_1 \\vec{v_1} + \\lambda_2 \\vec{v_2} = \\vec{0}$ geht nur für $\\lambda_1 = \\lambda_2 = 0$.

**So prüfst du es praktisch:**
- Zwei Vektoren → parallel? Dann abhängig. Sonst unabhängig.
- Drei Vektoren im ℝ³ → liegen sie in einer Ebene (koplanar)? Dann abhängig.

**Beispiel:** $\\vec{a} = (1, 2)$ und $\\vec{b} = (3, 6)$: Es gilt $\\vec{b} = 3\\vec{a}$ → **abhängig**. Aber $\\vec{a} = (1, 2)$ und $\\vec{c} = (2, -1)$: Kein $k$ mit $\\vec{c} = k\\vec{a}$ → **unabhängig**.

Die **Standardbasis** im ℝ³ besteht aus $\\vec{e_1}=(1,0,0)$, $\\vec{e_2}=(0,1,0)$, $\\vec{e_3}=(0,0,1)$. Jeder Vektor lässt sich eindeutig als Linearkombination dieser drei schreiben: $\\vec{v} = v_1 \\vec{e_1} + v_2 \\vec{e_2} + v_3 \\vec{e_3}$.

> **Merke:** Linear abhängig = einer ist „überflüssig" (als Kombination der anderen darstellbar). Im ℝ³ braucht man genau 3 linear unabhängige Vektoren, um jeden Punkt zu erreichen.

---

## Polarkoordinaten: Vektor über Betrag und Winkel

Ein 2D-Vektor lässt sich auch über **Betrag** $r$ und **Winkel** $\\alpha$ beschreiben:

$$\\vec{v} = r \\cdot \\begin{pmatrix} \\cos\\alpha \\\\ \\sin\\alpha \\end{pmatrix}$$

**Beispiel:** Ein Vektor mit Betrag 10 und Winkel 60° zur x-Achse hat:
- x-Komponente: $10 \\cos(60°) = 10 \\cdot 0{,}5 = 5$
- y-Komponente: $10 \\sin(60°) = 10 \\cdot \\frac{\\sqrt{3}}{2} = 5\\sqrt{3} \\approx 8{,}66$

> **Merke:** Polarform ist ideal bei Kraftzerlegung. Merke: cos = x-Richtung, sin = y-Richtung. Winkelwerte $\\sin(30°)=\\frac{1}{2}$, $\\sin(60°)=\\frac{\\sqrt{3}}{2}$, $\\cos(60°)=\\frac{1}{2}$ auswendig können.

---

## Typische Fehler und Fallen

- **Vorzeichen beim Addieren vergessen:** $(3) + (-1) = 2$, nicht 4. Immer Vorzeichen mitführen.
- **Betrag quadrieren:** $(-2)^2 = +4$, nicht $-4$. Quadrat ist immer positiv.
- **Verbindungsvektor falsch herum:** $\\vec{AB} = B - A$, nicht $A - B$. Eselsbrücke: **Z**iel minus **S**tart.
- **Parallele Vektoren verwechseln mit gleichen:** $\\vec{a} = (1,2)$ und $\\vec{b} = (-2,-4)$ sind parallel ($\\vec{b} = -2\\vec{a}$), obwohl sie entgegengesetzt zeigen.
- **Einheitsvektor vergessen zu normieren:** Der Einheitsvektor ist $\\vec{v}/|\\vec{v}|$, nicht einfach $\\vec{v}$.`,
      lernziele: [
        "Vektoren als gerichtete Größen definieren und von Skalaren abgrenzen können.",
        "Addition, Subtraktion und skalare Multiplikation von Vektoren komponentenweise und geometrisch durchführen können.",
        "Den Betrag eines Vektors im zwei- und dreidimensionalen Raum mit dem Satz des Pythagoras berechnen können.",
        "Lineare Unabhängigkeit von Vektoren erklären und überprüfen können.",
        "Den Einheitsvektor zu einem gegebenen Vektor bestimmen können.",
      ],
      sections: [
        {
          heading: "Vektor vs. Skalar und geometrische Vorstellung",
          text: "Ein Vektor ist ein Pfeil mit Länge (Betrag) und Richtung — er beschreibt gerichtete Größen wie Kraft, Geschwindigkeit und Verschiebung. Ein Skalar hat nur einen Zahlenwert (Temperatur, Masse). Algebraisch wird ein Vektor als Spaltenvektor $(a_1, a_2, a_3)^\\top$ geschrieben. Sein Betrag folgt aus dem Satz des Pythagoras: $|\\vec{v}| = \\sqrt{v_1^2 + v_2^2 + v_3^2}$.",
          merksatz:
            "Vektor = Betrag + Richtung. Skalar = nur Zahlenwert. Betrag = Pythagoras: |v| = √(v₁² + v₂² + v₃²).",
        },
        {
          heading: "Addition, Subtraktion und skalare Multiplikation",
          text: "Vektoraddition geometrisch: Parallelogrammregel (Diagonale = Summenvektor) oder Spitze-an-Schaft. Algebraisch komponentenweise: $(a_1+b_1, a_2+b_2)^\\top$. Skalarmultiplikation $\\lambda \\cdot \\vec{v}$ streckt, staucht oder dreht den Vektor um. Der Einheitsvektor $\\hat{e} = \\vec{v}/|\\vec{v}|$ hat Betrag 1 und gibt reine Richtung an — essentiell für Kraftzerlegung.",
          merksatz:
            "Parallelogrammregel zuerst denken, Formel zweite Wahl. Einheitsvektor ê = v/|v| gibt reine Richtung.",
        },
        {
          heading: "Verbindungsvektor, Linearkombination und klinische Anwendung",
          text: "Verbindungsvektor = Ziel − Start: $\\vec{AB} = \\vec{r}_B - \\vec{r}_A$, Abstand = Betrag davon. Linear unabhängige Vektoren zeigen in verschiedene Richtungen — parallele Vektoren sind abhängig. In der Biomechanik wird Muskelkraft in Kompression (entlang der Gelenkachse) und Scherkraft (senkrecht) zerlegt. Im EKG ist die Herzachse ein Summenvektor der Erregungsausbreitung.",
          merksatz:
            "Verbindungsvektor = Ziel − Start. Abhängig = parallel. Gelenkkraft = Vektorsumme aller Muskelkräfte.",
        },
      ],
      merksätze: [
        "Betrag = Pythagoras im Raum: |v| = √(v₁² + v₂² + v₃²). Tripel 3-4-5 und 5-12-13 auswendig können.",
        "Addition geometrisch: Parallelogrammregel (Diagonale = Resultierende). Algebraisch: komponentenweise.",
        "Einheitsvektor ê = v/|v|: Richtung beibehalten, Betrag auf 1 normieren. Damit Kraft = |F| × ê.",
        "Verbindungsvektor = Ziel − Start. Vertauschen dreht Richtung um, Betrag bleibt gleich.",
        "Linear abhängig = parallel (2D) oder koplanar (3D). Unabhängig = verschiedene Richtungen.",
      ],
      altfrage: {
        question:
          "Eine Muskelkraft von $\\vec{F} = (30, 40)$ N greift am Knie an. Die Unterschenkelachse zeigt in x-Richtung. Berechnen Sie die Kompressionskraft entlang der Achse und die Scherkraft senkrecht dazu.",
        answer:
          "Der Betrag der Kraft ist $|\\vec{F}| = \\sqrt{30^2+40^2} = \\sqrt{900+1600} = \\sqrt{2500} = 50$ N. Die **Kompressionskomponente** entlang der Achse $(1,0)$ ist die x-Komponente: $F_{\\parallel} = 30$ N. Die **Scherkomponente** senkrecht dazu: $F_{\\perp} = \\sqrt{|\\vec{F}|^2 - F_{\\parallel}^2} = \\sqrt{2500 - 900} = 40$ N. Die Scherkraft belastet Bänder und Menisken und ist klinisch oft der limitierende Faktor. Diese Zerlegung nutzt die Vektorkomponenten direkt — die Kraft wird in einen Anteil parallel und einen Anteil senkrecht zur Gelenkachse aufgeteilt.",
      },
      klinischerBezug:
        "Biomechanik: Kraftzerlegung in Kompression und Scherkraft am Gelenk; EKG-Herzachse als Summenvektor der Erregungsausbreitung (Cabrera-Kreis); Doppler-Sonographie: Blutflussvektor entlang Schallstrahlrichtung.",
      selfTest: [
        {
          question: "Berechnen Sie den Betrag des Vektors $\\vec{v} = (3, 4)$.",
          options: ["5", "7", "√7", "12", "√13"],
          correctIndex: 0,
          explanation:
            "Der Betrag eines 2D-Vektors berechnet sich nach dem Satz des Pythagoras: $|\\vec{v}| = \\sqrt{v_1^2 + v_2^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$. Das 3-4-5-Dreieck ist eines der bekanntesten pythagoräischen Tripel und sollte sofort erkennbar sein. Die Antwort 7 wäre eine fehlerhafte direkte Addition der Komponenten, 12 das fehlerhafte Produkt.",
          hints: [
            "Denken Sie an den Satz des Pythagoras: In einem rechtwinkligen Dreieck gilt a² + b² = c².",
            "Kennen Sie das pythagoräische Tripel 3-4-? — es handelt sich um ein sehr klassisches Beispiel.",
          ],
          tags: ["vektorbetrag", "pythagoras", "vektorrechnung"],
          difficulty: 1,
        },
        {
          question:
            "Gegeben $\\vec{a} = (2, 3)$ und $\\vec{b} = (4, -1)$. Was ergibt $\\vec{a} + \\vec{b}$?",
          options: ["(6, 2)", "(6, 4)", "(2, 4)", "(8, 3)", "(2, 2)"],
          correctIndex: 0,
          explanation:
            "Vektoren werden komponentenweise addiert: $\\vec{a} + \\vec{b} = (2+4,\\; 3+(-1)) = (6, 2)$. Die erste Komponente: 2+4=6. Die zweite Komponente: 3+(-1)=3-1=2. Ein häufiger Fehler ist das Addieren der zweiten Komponente als 3+1=4, weil das negative Vorzeichen übersehen wird. Geometrisch ist die Summe der Diagonalvektor des durch $\\vec{a}$ und $\\vec{b}$ aufgespannten Parallelogramms.",
          hints: [
            "Addieren Sie die Komponenten jeweils getrennt: erste Komponente für sich, zweite Komponente für sich.",
            "Achten Sie auf das Vorzeichen: Die zweite Komponente von b ist −1, nicht +1.",
          ],
          tags: ["vektoraddition", "komponentenweise", "vektor"],
          difficulty: 1,
        },
        {
          question:
            "Welche x-Komponente hat der Einheitsvektor in Richtung von $\\vec{v} = (6, 8)$?",
          options: ["0,6", "0,8", "6", "0,5", "1"],
          correctIndex: 0,
          explanation:
            "Der Betrag von $\\vec{v}$ ist $|\\vec{v}| = \\sqrt{6^2+8^2} = \\sqrt{36+64} = \\sqrt{100} = 10$. Der Einheitsvektor ist $\\hat{e} = \\vec{v}/|\\vec{v}| = (6/10,\\; 8/10) = (0{,}6;\\; 0{,}8)$. Die x-Komponente ist daher 0,6. Zur Überprüfung: $|(0{,}6;\\; 0{,}8)| = \\sqrt{0{,}36+0{,}64} = \\sqrt{1} = 1$ — korrekt, da Einheitsvektor.",
          hints: [
            "Berechnen Sie zuerst den Betrag |v| mit dem Satz des Pythagoras.",
            "Der Einheitsvektor ist ê = v / |v| — dividieren Sie jede Komponente durch den Betrag.",
          ],
          tags: ["einheitsvektor", "vektorbetrag", "normierung"],
          difficulty: 2,
        },
        {
          question:
            "Die Vektoren $\\vec{a} = (4, 3)$ und $\\vec{b} = (x, 5)$ sind orthogonal. Bestimmen Sie $x$.",
          options: ["$-15/4$", "$15/4$", "$-4/15$", "$4/15$", "$-3$"],
          correctIndex: 0,
          explanation:
            "Orthogonalität bedeutet: das Skalarprodukt ist gleich null. $\\vec{a} \\cdot \\vec{b} = 4 \\cdot x + 3 \\cdot 5 = 4x + 15 = 0$. Auflösen nach $x$: $4x = -15 \\Rightarrow x = -15/4 = -3{,}75$. Zur Probe: Skalarprodukt $= 4 \\cdot (-15/4) + 3 \\cdot 5 = -15 + 15 = 0$ — korrekt. In der Biomechanik bedeutet Orthogonalität, dass zwei Kraftkomponenten keine gemeinsame Wirkungsrichtung teilen.",
          hints: [
            "Orthogonale Vektoren haben Skalarprodukt 0: a₁×b₁ + a₂×b₂ = 0.",
            "Setzen Sie die bekannten Werte ein und lösen Sie die entstehende lineare Gleichung nach x auf.",
          ],
          tags: ["skalarprodukt", "orthogonalität", "vektorrechnung"],
          difficulty: 2,
        },
        {
          question: "Berechnen Sie den Betrag des 3D-Vektors $\\vec{v} = (1, -2, 2)$.",
          options: ["3", "√5", "5", "1", "√13"],
          correctIndex: 0,
          explanation:
            "Im dreidimensionalen Raum gilt: $|\\vec{v}| = \\sqrt{v_1^2+v_2^2+v_3^2} = \\sqrt{1^2+(-2)^2+2^2} = \\sqrt{1+4+4} = \\sqrt{9} = 3$. Wichtig: $(-2)^2 = +4$, nicht $-4$. Das Quadrieren beseitigt das negative Vorzeichen. Der Vektor hat die interessante Eigenschaft, dass $\\sqrt{9}=3$ eine ganze Zahl ergibt.",
          hints: [
            "Der Betrag im 3D-Raum: |v| = √(v₁² + v₂² + v₃²) — alle drei Komponenten werden quadriert und addiert.",
            "Achtung: (−2)² = +4. Das Quadrat einer negativen Zahl ist immer positiv.",
          ],
          tags: ["vektorbetrag", "3d-vektor", "pythagoras"],
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
          explanation:
            "Zwei Vektoren sind linear abhängig genau dann, wenn einer ein skalares Vielfaches des anderen ist. Hier: $-2 \\cdot \\vec{b} = -2 \\cdot (-1,-2,1) = (2,4,-2) = \\vec{a}$. Also ist $\\vec{a} = -2 \\cdot \\vec{b}$ — die Vektoren sind parallel (gegenläufig) und damit linear abhängig. Unterschiedliche Beträge schließen lineare Abhängigkeit nicht aus; auch das Skalarprodukt allein entscheidet nicht darüber (es muss für parallele Vektoren $\\vec{a} \\cdot \\vec{b} = \\pm|\\vec{a}||\\vec{b}|$ gelten).",
          hints: [
            "Linear abhängig bedeutet: einer der Vektoren lässt sich als skalares Vielfaches des anderen darstellen: a = k×b.",
            "Prüfen Sie, ob b = k×a für ein reelles k gilt, indem Sie die Komponenten vergleichen: k = a₁/b₁ = ?",
          ],
          tags: ["lineare-abhängigkeit", "parallele-vektoren", "vektor"],
          difficulty: 3,
        },
        {
          question:
            "Ein Vektor $\\vec{v}$ hat Betrag 10 und bildet mit der x-Achse einen Winkel von 60°. Wie groß ist die y-Komponente?",
          options: ["$5\\sqrt{3}$", "5", "$10\\sqrt{3}$", "$\\sqrt{3}$", "10"],
          correctIndex: 0,
          explanation:
            "Ein Vektor mit Betrag $r$ und Winkel $\\alpha$ zur x-Achse hat die Komponenten $(r\\cos\\alpha,\\; r\\sin\\alpha)$. Hier: y-Komponente $= 10 \\cdot \\sin(60°) = 10 \\cdot \\frac{\\sqrt{3}}{2} = 5\\sqrt{3} \\approx 8{,}66$. Die x-Komponente wäre $10 \\cdot \\cos(60°) = 10 \\cdot 0{,}5 = 5$. Der Merksatz: $\\sin(60°) = \\frac{\\sqrt{3}}{2}$, $\\cos(60°) = \\frac{1}{2}$.",
          hints: [
            "Erinnern Sie sich: Die Komponenten eines Vektors der Länge r mit Winkel α zur x-Achse sind (r×cos α, r×sin α).",
            "sin(60°) = √3/2 ≈ 0,866. Multiplizieren Sie mit dem Betrag 10.",
          ],
          tags: ["vektorkomponenten", "trigonometrie", "winkel"],
          difficulty: 3,
        },
      ],
      diagram: "vector-addition",
    },

    // ─────────────────────────────────────────────────────────────────
    // UK ma-6-02: Skalarprodukt und Kreuzprodukt
    // ─────────────────────────────────────────────────────────────────
    {
      id: "ma-6-02",
      title: "Skalarprodukt und Kreuzprodukt",
      stichworte: [
        "Skalarprodukt",
        "Kreuzprodukt",
        "Orthogonalität",
        "Winkelberechnung",
        "Rechte-Hand-Regel",
        "Antikommutativität",
        "Drehmoment",
        "Orthogonalprojektion",
        "Lorentz-Kraft",
        "Parallelogrammfläche",
      ],
      content: `Wir brauchen zwei Operationen, um mit Vektoren wirklich arbeiten zu können. Das **Skalarprodukt** beantwortet die Frage: „Wie sehr zeigen diese beiden Vektoren in die gleiche Richtung?" Das **Kreuzprodukt** beantwortet: „Was steht senkrecht auf beiden?" Beide Operationen tauchen überall in Physik und Medizin auf — von der mechanischen Arbeit bis zum Drehmoment am Gelenk.

## Skalarprodukt: Wie ähnlich sind zwei Richtungen?

Stell dir vor, du schiebst einen Schlitten: Die Kraft $\\vec{F}$ zieht schräg nach oben, aber der Schlitten bewegt sich horizontal. Nur der **Anteil der Kraft in Bewegungsrichtung** leistet tatsächlich Arbeit. Genau das misst das Skalarprodukt.

**Geometrische Idee:** Das Skalarprodukt projiziert einen Vektor auf den anderen. Je mehr sie in die gleiche Richtung zeigen, desto größer das Ergebnis. Stehen sie senkrecht, ist das Ergebnis null — kein gemeinsamer Anteil.

$$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos \\theta$$

Der $\\cos \\theta$ ist der Schlüssel: Er misst die „Ausrichtung" der Vektoren zueinander.

**Berechnung über Komponenten** (die Formel, die du tatsächlich verwendest):
$$\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$$

Das Ergebnis ist ein **Skalar** — eine einzelne Zahl, kein Vektor.

**Beispiel:** $\\vec{a} = (3, -2, 1)$ und $\\vec{b} = (1, 4, -2)$:
$\\vec{a} \\cdot \\vec{b} = 3 \\cdot 1 + (-2) \\cdot 4 + 1 \\cdot (-2) = 3 - 8 - 2 = -7$

Das negative Ergebnis verrät sofort: Die Vektoren zeigen eher in entgegengesetzte Richtungen (stumpfer Winkel).

---

## Was das Vorzeichen verrät

- $\\vec{a} \\cdot \\vec{b} > 0$: **spitzer Winkel** ($\\theta < 90°$) — Vektoren zeigen grob in die gleiche Richtung
- $\\vec{a} \\cdot \\vec{b} = 0$: **rechter Winkel** ($\\theta = 90°$) — Vektoren stehen **senkrecht** (orthogonal)
- $\\vec{a} \\cdot \\vec{b} < 0$: **stumpfer Winkel** ($\\theta > 90°$) — Vektoren zeigen eher entgegengesetzt

> **Merke:** Skalarprodukt = 0 ist DER Schnelltest für Orthogonalität. Beim MedAT: „Stehen die Vektoren senkrecht?" → Skalarprodukt berechnen und prüfen, ob es null ist.

Außerdem: $\\vec{a} \\cdot \\vec{a} = |\\vec{a}|^2$ — das Skalarprodukt eines Vektors mit sich selbst ergibt seinen Betrag zum Quadrat.

---

## Winkel zwischen zwei Vektoren berechnen

Aus der geometrischen Formel umgestellt:

$$\\cos \\theta = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}$$

**Schritt für Schritt:**
1. Skalarprodukt berechnen (komponentenweise)
2. Beide Beträge berechnen
3. Dividieren → cos θ
4. Winkel ablesen (Standardwerte kennen!)

**Wichtige Kosinuswerte:** $\\cos(0°) = 1$, $\\cos(60°) = \\frac{1}{2}$, $\\cos(90°) = 0$, $\\cos(120°) = -\\frac{1}{2}$, $\\cos(180°) = -1$.

**Beispiel:** $\\vec{a} = (1, 0)$ und $\\vec{b} = (1, 1)$:
- Skalarprodukt: $1 \\cdot 1 + 0 \\cdot 1 = 1$
- Beträge: $|\\vec{a}| = 1$, $|\\vec{b}| = \\sqrt{2}$
- $\\cos \\theta = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2} \\Rightarrow \\theta = 45°$

---

## Mechanische Arbeit — das Skalarprodukt in der Physik

Die physikalische Arbeit ist $W = \\vec{F} \\cdot \\vec{s} = |\\vec{F}| \\cdot |\\vec{s}| \\cdot \\cos\\theta$.

Nur die Kraftkomponente **in Bewegungsrichtung** leistet Arbeit. Steht die Kraft senkrecht zur Bewegung ($\\theta = 90°$), ist $\\cos(90°) = 0$ → keine Arbeit. Deshalb leistet die Normalkraft auf einer Tischplatte keine Arbeit am darauf liegenden Buch — sie steht senkrecht zur (horizontalen) Verschiebung.

---

## Orthogonalprojektion: Kräfte zerlegen

Die **Projektion** von $\\vec{a}$ auf die Richtung von $\\vec{b}$ ist:

$$\\text{proj}_{\\vec{b}} \\vec{a} = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|^2} \\cdot \\vec{b}$$

Die senkrechte Komponente: $\\vec{a}_{\\perp} = \\vec{a} - \\text{proj}_{\\vec{b}} \\vec{a}$.

**Biomechanische Anwendung:** Eine Muskelkraft am Knie wird auf die Gelenkachse projiziert → **Kompressionskraft** (parallel, drückt Knochen zusammen). Der Rest ist **Scherkraft** (senkrecht, belastet Bänder). Ist die Projektion null, greift die gesamte Kraft als Schere an.

> **Merke:** Projektion auf Achse = Nutzkraft in dieser Richtung. Senkrechte Komponente = Kraft − Projektion. In der Biomechanik: Projektion auf Gelenkachse = Kompression, Rest = Scherkraft.

---

## Kreuzprodukt: Was steht senkrecht auf beiden?

Jetzt zur zweiten Operation. Ein Chirurg dreht eine Schraube: Die Kraft greift am Schraubenschlüssel an, das **Drehmoment** steht senkrecht auf Hebelarm und Kraft — es zeigt entlang der Schraubenachse. Das ist genau das Kreuzprodukt.

Das **Kreuzprodukt** $\\vec{a} \\times \\vec{b}$ liefert einen **Vektor**, der senkrecht auf $\\vec{a}$ und $\\vec{b}$ steht:

$$\\vec{a} \\times \\vec{b} = \\begin{pmatrix} a_2 b_3 - a_3 b_2 \\\\ a_3 b_1 - a_1 b_3 \\\\ a_1 b_2 - a_2 b_1 \\end{pmatrix}$$

Sein Betrag:
$$|\\vec{a} \\times \\vec{b}| = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\sin \\theta$$

Geometrisch ist das die **Fläche des Parallelogramms**, das von beiden Vektoren aufgespannt wird. Die Dreiecksfläche ist die Hälfte davon: $A_{\\triangle} = \\frac{1}{2}|\\vec{a} \\times \\vec{b}|$.

**Richtung:** Die **Rechte-Hand-Regel** bestimmt, wohin der Ergebnisvektor zeigt: Finger von $\\vec{a}$ zu $\\vec{b}$ einrollen → Daumen zeigt in Richtung $\\vec{a} \\times \\vec{b}$.

---

## Kreuzprodukt: Was du wissen musst

- **Antikommutativ:** $\\vec{a} \\times \\vec{b} = -(\\vec{b} \\times \\vec{a})$ — Reihenfolge tauschen dreht das Vorzeichen um!
- **Parallele Vektoren:** $\\vec{a} \\times \\vec{b} = \\vec{0}$, weil $\\sin(0°) = 0$ — kein Parallelogramm aufspannbar.
- **Standardbasis:** $\\vec{e_1} \\times \\vec{e_2} = \\vec{e_3}$ (x × y = z), und zyklisch weiter.
- Nur im **ℝ³** definiert (im Gegensatz zum Skalarprodukt, das auch in 2D funktioniert).

**Beispiel:** $\\vec{a} = (1, 0, 0)$ und $\\vec{b} = (0, 1, 0)$:
$\\vec{a} \\times \\vec{b} = (0-0,\\; 0-0,\\; 1-0) = (0, 0, 1)$ — zeigt in z-Richtung ✓

---

## Drehmoment am Ellbogen — das Kreuzprodukt in Aktion

Der Bizeps übt eine Kraft $\\vec{F} = (0, 120, 0)$ N aus. Der Hebelarm (Ansatzpunkt zum Drehpunkt) ist $\\vec{r} = (0{,}05, 0, 0)$ m.

$\\vec{M} = \\vec{r} \\times \\vec{F} = (0, 0, 0{,}05 \\cdot 120) = (0, 0, 6)$ Nm

Das Drehmoment von 6 Nm zeigt in z-Richtung (aus der Ebene heraus) und wirkt als Flexionsmoment. Da Hebelarm und Kraft senkrecht stehen ($\\theta = 90°$, $\\sin 90° = 1$), ist das Drehmoment **maximal** — der Bizeps arbeitet am effizientesten bei 90° Ellbogenbeugung.

> **Merke:** Drehmoment $\\vec{M} = \\vec{r} \\times \\vec{F}$. Je senkrechter Kraft und Hebelarm, desto stärker das Drehmoment. Bei 90° ist es maximal (sin 90° = 1).

---

## Entscheidungshilfe: Skalarprodukt oder Kreuzprodukt?

| Eigenschaft | Skalarprodukt $\\vec{a} \\cdot \\vec{b}$ | Kreuzprodukt $\\vec{a} \\times \\vec{b}$ |
|------------|---------------|--------------|
| Ergebnis | Skalar (Zahl) | Vektor (Pfeil) |
| Definiert in | ℝ² und ℝ³ | nur ℝ³ |
| Kommutativ? | Ja | Nein (antikommutativ) |
| Misst | Ausrichtung, Projektion | Fläche, senkrechte Richtung |
| Null bei | Orthogonalität ($\\theta = 90°$) | Parallelität ($\\theta = 0°/180°$) |

**Faustregel für den MedAT:**
- Siehst du „Winkel", „senkrecht", „Arbeit", „Projektion" → **Skalarprodukt**
- Siehst du „Drehmoment", „senkrecht auf beiden", „Fläche", „Normalenvektor" → **Kreuzprodukt**

---

## Lorentz-Kraft: Kreuzprodukt im MRT

Die **Lorentz-Kraft** $\\vec{F} = q(\\vec{v} \\times \\vec{B})$ wirkt auf geladene Teilchen im Magnetfeld — die Kraft steht senkrecht auf Geschwindigkeit und Magnetfeld. Für die MRT-Sicherheit bedeutet das: Metallische Implantate im starken Magnetfeld können Kräfte erfahren. Die Richtung dieser Kraft folgt der Rechten-Hand-Regel.

---

## Typische Fehler und Fallen

- **Skalar- und Kreuzprodukt verwechseln:** Skalarprodukt → Zahl. Kreuzprodukt → Vektor. Beide haben einen Punkt bzw. ein Kreuz als Symbol.
- **Vorzeichen beim Skalarprodukt übersehen:** $(-2) \\times 4 = -8$, nicht $+8$.
- **Kreuzprodukt-Reihenfolge ignorieren:** $\\vec{a} \\times \\vec{b} \\neq \\vec{b} \\times \\vec{a}$! Das Vorzeichen dreht sich um.
- **Parallele Vektoren beim Kreuzprodukt:** Ergeben den Nullvektor, nicht „undefiniert".
- **cos vs. sin verwechseln:** Skalarprodukt nutzt cos (= 0 bei 90°), Kreuzprodukt nutzt sin (= 0 bei 0°/180°).`,
      lernziele: [
        "Das Skalarprodukt komponentenweise und über den Winkel berechnen und interpretieren können.",
        "Orthogonalität zweier Vektoren anhand des Skalarprodukts erkennen und beweisen können.",
        "Den Winkel zwischen zwei Vektoren mit Hilfe des Skalarprodukts berechnen können.",
        "Das Kreuzprodukt im ℝ³ berechnen und seine geometrische Bedeutung (Normalenvektor, Fläche) erklären können.",
        "Die Antikommutativität des Kreuzprodukts und die Rechte-Hand-Regel anwenden können.",
      ],
      sections: [
        {
          heading: "Skalarprodukt — Ausrichtung messen und Winkel berechnen",
          text: "Das Skalarprodukt $\\vec{a} \\cdot \\vec{b} = a_1b_1 + a_2b_2 + a_3b_3 = |\\vec{a}||\\vec{b}|\\cos\\theta$ misst, wie sehr zwei Vektoren in dieselbe Richtung zeigen. Das Ergebnis ist eine Zahl (Skalar). Null → orthogonal. Positiv → spitzer Winkel. Negativ → stumpfer Winkel. Winkelberechnung: $\\cos\\theta = \\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}||\\vec{b}|}$. Mechanische Arbeit $W = \\vec{F}\\cdot\\vec{s}$: nur die Kraftkomponente in Bewegungsrichtung zählt.",
          merksatz:
            "Skalarprodukt = 0 → senkrecht (Schnelltest!). Vorzeichen verrät Winkeltyp: positiv = spitz, negativ = stumpf.",
        },
        {
          heading: "Kreuzprodukt — senkrechter Vektor und Fläche",
          text: "Das Kreuzprodukt $\\vec{a}\\times\\vec{b}$ ergibt einen Vektor senkrecht auf beiden (nur im ℝ³). Betrag = Fläche des aufgespannten Parallelogramms: $|\\vec{a}\\times\\vec{b}| = |\\vec{a}||\\vec{b}|\\sin\\theta$. Richtung folgt der Rechten-Hand-Regel. Antikommutativ: $\\vec{a}\\times\\vec{b} = -(\\vec{b}\\times\\vec{a})$. Parallele Vektoren → Nullvektor. Wichtigste Anwendung: Drehmoment $\\vec{M} = \\vec{r} \\times \\vec{F}$ — maximal bei 90° zwischen Hebelarm und Kraft.",
          merksatz:
            "Kreuzprodukt = Vektor senkrecht auf beiden. |a×b| = Parallelogrammfläche. Antikommutativ: Reihenfolge zählt!",
        },
        {
          heading: "Projektion und klinische Anwendungen",
          text: "Projektion von $\\vec{a}$ auf $\\vec{b}$: $\\text{proj} = \\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{b}|^2}\\vec{b}$ — in der Biomechanik Kompressionskraft (parallel) vs. Scherkraft (senkrecht). Drehmoment $\\vec{M} = \\vec{r} \\times \\vec{F}$: Bizeps bei 90° Beugung maximal effizient. Lorentz-Kraft $\\vec{F} = q(\\vec{v}\\times\\vec{B})$: MRT-Sicherheit bei metallischen Implantaten. Mechanische Arbeit $W = \\vec{F}\\cdot\\vec{s}$: nur Kraftanteil in Bewegungsrichtung leistet Arbeit.",
          merksatz:
            "Entscheidungsregel: 'Winkel/Projektion/Arbeit' → Skalarprodukt. 'Drehmoment/Fläche/senkrecht auf beiden' → Kreuzprodukt.",
        },
      ],
      merksätze: [
        "Skalarprodukt = 0 ist DER Schnelltest für Orthogonalität. Beim MedAT zuerst prüfen.",
        "Winkel: cos θ = (a·b)/(|a|·|b|). Standardwerte cos(60°)=½, cos(90°)=0, cos(120°)=−½ kennen.",
        "Kreuzprodukt a×b steht senkrecht auf BEIDEN Vektoren. Betrag = Parallelogrammfläche.",
        "Antikommutativ: a×b = −(b×a). Reihenfolge tauschen dreht Vorzeichen um.",
        "Drehmoment M = r×F: maximal bei 90° (sin 90° = 1), null bei paralleler Kraft.",
      ],
      altfrage: {
        question:
          "Der Bizeps übt eine Kraft $\\vec{F} = (0, 120, 0)$ N am Unterarm aus. Der Hebelarm ist $\\vec{r} = (0{,}05, 0, 0)$ m. Berechnen Sie das Drehmoment. Warum ist es bei 90° Beugung maximal?",
        answer:
          "Das Drehmoment berechnet sich als Kreuzprodukt: $\\vec{M} = \\vec{r} \\times \\vec{F}$. Komponentenweise: $\\vec{M} = (0 \\cdot 0 - 0 \\cdot 0,\\; 0 \\cdot 0 - 0{,}05 \\cdot 0,\\; 0{,}05 \\cdot 120 - 0 \\cdot 0) = (0, 0, 6)$ Nm. Der Betrag ist $|\\vec{M}| = 6$ Nm. Alternativ: $|\\vec{M}| = |\\vec{r}| \\cdot |\\vec{F}| \\cdot \\sin\\theta = 0{,}05 \\cdot 120 \\cdot \\sin(90°) = 6$ Nm. Das Drehmoment ist bei 90° maximal, weil $\\sin(90°) = 1$ — Hebelarm und Kraft stehen senkrecht aufeinander, und die gesamte Kraft wirkt als Drehelement. Bei kleinerem oder größerem Winkel wäre $\\sin\\theta < 1$, und ein Teil der Kraft würde als Kompression statt als Drehung wirken.",
      },
      klinischerBezug:
        "Drehmoment M = r×F an Gelenken (Bizeps bei 90° maximal); Lorentz-Kraft F = q(v×B) für MRT-Sicherheit; mechanische Arbeit W = F·s (Skalarprodukt); Projektion zerlegt Muskelkräfte in Kompressions- und Scherkraft.",
      selfTest: [
        {
          question:
            "Berechnen Sie das Skalarprodukt von $\\vec{a} = (3, -2, 1)$ und $\\vec{b} = (1, 4, -2)$.",
          options: ["−7", "7", "−3", "3", "5"],
          correctIndex: 0,
          explanation:
            "Das Skalarprodukt wird komponentenweise berechnet: $\\vec{a}\\cdot\\vec{b} = 3\\cdot1 + (-2)\\cdot4 + 1\\cdot(-2) = 3 - 8 - 2 = -7$. Das negative Ergebnis bedeutet, dass der Winkel zwischen den Vektoren stumpf ist ($\\theta > 90°$). Eine häufige Fehlerquelle ist das Übersehen der negativen Vorzeichen bei den Komponenten.",
          hints: [
            "Skalarprodukt: a₁×b₁ + a₂×b₂ + a₃×b₃ — multiplizieren Sie die entsprechenden Komponenten und addieren Sie.",
            "Beachten Sie die Vorzeichen: (−2)×4 = −8 und 1×(−2) = −2.",
          ],
          tags: ["skalarprodukt", "vektorrechnung", "rechnen"],
          difficulty: 2,
        },
        {
          question: "Welchen Winkel schließen $\\vec{a} = (1, 0)$ und $\\vec{b} = (1, 1)$ ein?",
          options: ["45°", "30°", "60°", "90°", "0°"],
          correctIndex: 0,
          explanation:
            "$\\vec{a}\\cdot\\vec{b} = 1\\cdot1 + 0\\cdot1 = 1$. Betrag: $|\\vec{a}| = 1$, $|\\vec{b}| = \\sqrt{1^2+1^2} = \\sqrt{2}$. Also $\\cos\\theta = \\frac{1}{1\\cdot\\sqrt{2}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$, was $\\theta = 45°$ entspricht. Merksatz: $\\cos(45°) = \\frac{\\sqrt{2}}{2} \\approx 0{,}707$.",
          hints: [
            "Berechnen Sie cos θ = (a×b) / (|a|×|b|) und bestimmen Sie daraus den Winkel.",
            "cos(45°) = √2/2 ≈ 0,707; cos(60°) = 0,5; cos(30°) = √3/2 ≈ 0,866.",
          ],
          tags: ["winkel", "skalarprodukt", "trigonometrie"],
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
          explanation:
            "Das Kreuzprodukt ist ausschließlich im dreidimensionalen Raum $\\mathbb{R}^3$ definiert und liefert einen Vektor (keinen Skalar), der senkrecht auf beiden Ausgangsvektoren steht. Es ist **antikommutativ**: $\\vec{a}\\times\\vec{b} = -(\\vec{b}\\times\\vec{a})$, nicht kommutativ. Für parallele Vektoren ($\\sin\\theta = 0$) ist das Kreuzprodukt der Nullvektor, nicht maximal. Das Maximum wird bei $\\theta = 90°$ erreicht.",
          hints: [
            "Was ist das Ergebnis des Kreuzprodukts — Skalar oder Vektor? In welchem Raum ist es definiert?",
            "Denken Sie an die Antikommutativität: Das Vertauschen der Reihenfolge ändert das Vorzeichen.",
          ],
          tags: ["kreuzprodukt", "antikommutativität", "vektor"],
          difficulty: 1,
        },
        {
          question:
            "Berechnen Sie $\\vec{a}\\times\\vec{b}$ für $\\vec{a} = (1, 0, 0)$ und $\\vec{b} = (0, 1, 0)$.",
          options: ["$(0, 0, 1)$", "$(1, 1, 0)$", "$(0, 1, 1)$", "$(1, 0, 1)$", "$(0, 0, 0)$"],
          correctIndex: 0,
          explanation:
            "Kreuzprodukt-Formel: $(a_2b_3-a_3b_2,\\; a_3b_1-a_1b_3,\\; a_1b_2-a_2b_1)$. Einsetzen: $(0\\cdot0-0\\cdot1,\\; 0\\cdot0-1\\cdot0,\\; 1\\cdot1-0\\cdot0) = (0,0,1)$. Geometrisch: $\\vec{e_1}\\times\\vec{e_2} = \\vec{e_3}$ ist die zyklische Eigenschaft der Standardbasisvektoren. Die Rechte-Hand-Regel bestätigt: Finger von x-Richtung zur y-Richtung einrollen, Daumen zeigt in z-Richtung.",
          hints: [
            "Verwenden Sie die Formel: a×b = (a₂b₃−a₃b₂, a₃b₁−a₁b₃, a₁b₂−a₂b₁).",
            "Denken Sie an die Rechte-Hand-Regel: e₁×e₂ = e₃ (x-Achse × y-Achse = z-Achse).",
          ],
          tags: ["kreuzprodukt", "rechte-hand-regel", "basisvektoren"],
          difficulty: 2,
        },
        {
          question:
            "Ein Muskel übt eine Kraft $\\vec{F} = (0, 10, 0)$ N am Hebelarm $\\vec{r} = (0{,}3, 0, 0)$ m an. Welchen Betrag hat das Drehmoment $\\vec{M} = \\vec{r}\\times\\vec{F}$?",
          options: ["3 Nm", "10 Nm", "0 Nm", "0,3 Nm", "30 Nm"],
          correctIndex: 0,
          explanation:
            "$\\vec{r}\\times\\vec{F} = (0\\cdot0-0\\cdot0,\\; 0\\cdot0-0{,}3\\cdot0,\\; 0{,}3\\cdot10-0\\cdot0) = (0,0,3)$ Nm. Also $|\\vec{M}| = 3$ Nm. Alternativ: $|\\vec{M}| = |\\vec{r}||\\vec{F}|\\sin(90°) = 0{,}3 \\cdot 10 \\cdot 1 = 3$ Nm. Da Hebelarm (x-Richtung) und Kraft (y-Richtung) senkrecht stehen, gilt $\\sin(90°)=1$, und das Drehmoment ist maximal.",
          hints: [
            "Drehmoment M = r × F. Berechnen Sie das Kreuzprodukt komponentenweise.",
            "Da r und F senkrecht stehen (x- und y-Richtung), gilt |M| = |r|×|F|×sin(90°) = |r|×|F|×1.",
          ],
          tags: ["drehmoment", "kreuzprodukt", "biomechanik"],
          difficulty: 2,
        },
        {
          question:
            "Zwei Vektoren $\\vec{a} = (1, 2, -1)$ und $\\vec{b} = (2, 4, -2)$. Was gilt für ihr Kreuzprodukt?",
          options: [
            "$\\vec{a}\\times\\vec{b} = \\vec{0}$, da die Vektoren parallel sind",
            "$\\vec{a}\\times\\vec{b}$ ist ein Einheitsvektor",
            "$\\vec{a}\\times\\vec{b}$ hat den gleichen Betrag wie $\\vec{a}$",
            "Das Kreuzprodukt ist nicht definiert",
            "$\\vec{a}\\times\\vec{b}$ zeigt in Richtung von $\\vec{a}$",
          ],
          correctIndex: 0,
          explanation:
            "$\\vec{b} = 2\\cdot\\vec{a}$ (denn $(2,4,-2) = 2\\cdot(1,2,-1)$), also sind die Vektoren parallel. Für parallele Vektoren gilt $\\sin\\theta = \\sin(0°) = 0$, daher $|\\vec{a}\\times\\vec{b}| = 0$. Das Kreuzprodukt paralleler Vektoren ist immer der Nullvektor. Dies ergibt geometrisch Sinn: Parallele Vektoren spannen kein Parallelogramm auf (Fläche = 0).",
          hints: [
            "Ist b ein skalares Vielfaches von a? Wenn ja, sind die Vektoren parallel.",
            "Parallele Vektoren schließen einen Winkel von 0° (oder 180°) ein. Was ergibt sin(0°)?",
          ],
          tags: ["kreuzprodukt", "parallele-vektoren", "lineare-abhängigkeit"],
          difficulty: 3,
        },
        {
          question:
            "Das Skalarprodukt $\\vec{a}\\cdot\\vec{b} = -12$, $|\\vec{a}| = 4$, $|\\vec{b}| = 6$. Welcher Winkel $\\theta$ liegt zwischen den Vektoren?",
          options: ["120°", "60°", "90°", "30°", "150°"],
          correctIndex: 0,
          explanation:
            "$\\cos\\theta = \\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}||\\vec{b}|} = \\frac{-12}{4\\cdot6} = \\frac{-12}{24} = -\\frac{1}{2}$. Da $\\cos(120°) = -\\frac{1}{2}$, folgt $\\theta = 120°$. Das negative Skalarprodukt bestätigt: der Winkel ist stumpf ($> 90°$). Merksatz: $\\cos(60°) = \\frac{1}{2}$, $\\cos(120°) = -\\frac{1}{2}$, $\\cos(90°) = 0$, $\\cos(180°) = -1$.",
          hints: [
            "Berechnen Sie cos θ = (a×b) / (|a|×|b|). Das negative Ergebnis deutet auf einen stumpfen Winkel hin.",
            "cos(120°) = −½. Denken Sie an den Einheitskreis: Im zweiten Quadrant ist der Kosinus negativ.",
          ],
          tags: ["winkel", "skalarprodukt", "kosinus"],
          difficulty: 3,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────
    // UK ma-6-03: Geraden, Ebenen und Matrizen
    // ─────────────────────────────────────────────────────────────────
    {
      id: "ma-6-03",
      title: "Geraden, Ebenen und Matrizen",
      stichworte: [
        "Geradengleichung",
        "Parameterform",
        "Ebenengleichung",
        "Normalenvektor",
        "Matrix",
        "Determinante",
        "Inverse Matrix",
        "Lineares Gleichungssystem",
        "Cramersche Regel",
        "Eigenwert",
        "Eigenvektor",
        "CT-Bildrekonstruktion",
      ],
      content: `## Geradengleichung im Raum

Eine Gerade im dreidimensionalen Raum wird durch die **Parameterform** beschrieben:

$$\\vec{r} = \\vec{r_0} + t \\cdot \\vec{d}, \\quad t \\in \\mathbb{R}$$

Dabei ist $\\vec{r_0}$ der **Stützvektor** (ein Punkt auf der Geraden) und $\\vec{d}$ der **Richtungsvektor** (gibt die Richtung an). Der Parameter $t$ durchläuft alle reellen Zahlen und erzeugt alle Punkte der Geraden. Für $t = 0$ erhält man den Stützpunkt, für $t = 1$ den Punkt $\\vec{r_0} + \\vec{d}$.

**Aufstellen einer Geradengleichung:** Gegeben zwei Punkte $A$ und $B$, wählt man $\\vec{r_0} = \\vec{r}_A$ und $\\vec{d} = \\vec{AB} = \\vec{r}_B - \\vec{r}_A$.

**Punktprobe:** Um zu prüfen, ob ein Punkt $P$ auf der Geraden liegt, setzt man $\\vec{r} = P$ und löst nach $t$. Wenn das lineare Gleichungssystem konsistent ist (d. h. alle drei Gleichungen denselben $t$-Wert liefern), liegt $P$ auf der Geraden.

> **Merke:** Eine Gerade im ℝ³ hat genau einen Freiheitsgrad (den Parameter $t$). Zwei verschiedene Punkte bestimmen genau eine Gerade.

## Ebenengleichungen

Ebenen im ℝ³ können auf drei äquivalente Weisen dargestellt werden:

**1. Normalenform:** $\\vec{n} \\cdot (\\vec{r} - \\vec{r_0}) = 0$
- $\\vec{n}$ ist der Normalenvektor (senkrecht zur Ebene), $\\vec{r_0}$ ein Punkt auf der Ebene.
- Jeder Vektor in der Ebene steht senkrecht auf $\\vec{n}$ (Skalarprodukt = 0).

**2. Koordinatenform:** $ax + by + cz = d$
- Die Koeffizienten $(a, b, c)$ bilden den Normalenvektor $\\vec{n}$.
- $d = \\vec{n} \\cdot \\vec{r_0}$ ergibt sich durch Einsetzen eines bekannten Ebenenpunktes.

**3. Parameterform:** $\\vec{r} = \\vec{r_0} + s\\cdot\\vec{d_1} + t\\cdot\\vec{d_2}$
- Zwei linear unabhängige Richtungsvektoren $\\vec{d_1}$, $\\vec{d_2}$ spannen die Ebene auf.
- Der Normalenvektor ergibt sich als Kreuzprodukt: $\\vec{n} = \\vec{d_1} \\times \\vec{d_2}$.

**Umrechnung Parameterform → Koordinatenform:** Normalenvektor via Kreuzprodukt berechnen, dann Koordinatenform mit $d = \\vec{n} \\cdot \\vec{r_0}$ aufstellen. Dies ist eine typische MedAT-Aufgabe.

## Matrizenrechnung

Eine **Matrix** $A$ ist ein rechteckiges Schema von Zahlen (m Zeilen × n Spalten). Matrizen ermöglichen die kompakte Darstellung linearer Gleichungssysteme und Transformationen.

**Addition:** Nur für gleich große Matrizen, elementweise: $(A+B)_{ij} = A_{ij} + B_{ij}$

**Skalare Multiplikation:** $(\\lambda A)_{ij} = \\lambda \\cdot A_{ij}$

**Matrizenprodukt:** $A$ (m×n) × $B$ (n×p) = $C$ (m×p). Das Element $C_{ij} = \\sum_k A_{ik} B_{kj}$ (Zeile von $A$ × Spalte von $B$). Matrizenmultiplikation ist i. A. **nicht kommutativ**: $A \\cdot B \\neq B \\cdot A$.

> **Merke:** Dimensionsregel: (m×n) × (n×p) = (m×p). Die inneren Dimensionen müssen übereinstimmen! Wenn A 3 Spalten und B 3 Zeilen hat, ist das Produkt definiert.

**Transponierte Matrix:** $A^\\top$ entsteht durch Vertauschen von Zeilen und Spalten: $(A^\\top)_{ij} = A_{ji}$. Eine Matrix heißt **symmetrisch**, wenn $A = A^\\top$. Die **Einheitsmatrix** $E$ hat Einsen auf der Hauptdiagonale und Nullen sonst; sie ist das neutrale Element der Matrizenmultiplikation: $A \\cdot E = E \\cdot A = A$.

**Determinante einer 2×2-Matrix:**
$$\\det(A) = \\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$$

- $\\det(A) = 0$: Die Zeilen/Spalten sind linear abhängig; das LGS hat keine eindeutige Lösung. Die Matrix heißt **singulär**.
- $\\det(A) \\neq 0$: Matrix ist **regulär** (invertierbar), das LGS hat genau eine Lösung.
- Geometrische Bedeutung: $|\\det(A)|$ ist der Flächeninhalt des von den Zeilenvektoren aufgespannten Parallelogramms.

**Determinante einer 3×3-Matrix (Sarrus-Regel):**
$$\\det(A) = a_{11}(a_{22}a_{33}-a_{23}a_{32}) - a_{12}(a_{21}a_{33}-a_{23}a_{31}) + a_{13}(a_{21}a_{32}-a_{22}a_{31})$$

## Inverse Matrix

Die **inverse Matrix** $A^{-1}$ existiert nur für reguläre Matrizen ($\\det(A) \\neq 0$). Es gilt $A \\cdot A^{-1} = A^{-1} \\cdot A = E$ (Einheitsmatrix).

Für eine 2×2-Matrix:
$$A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$

Die Formel lässt sich merken als: Hauptdiagonale tauschen, Nebendiagonale negieren, durch Determinante teilen. Probe: $A \\cdot A^{-1} = E$.

## Lineare Gleichungssysteme (LGS)

Ein LGS $A\\vec{x} = \\vec{b}$ kann mit Matrizen kompakt geschrieben werden. Bei regulärer Matrix gilt $\\vec{x} = A^{-1} \\cdot \\vec{b}$. Die **Cramersche Regel** löst 2×2- und 3×3-Systeme über Determinanten:

$$x_i = \\frac{\\det(A_i)}{\\det(A)}$$

wobei $A_i$ die Matrix ist, bei der die $i$-te Spalte durch $\\vec{b}$ ersetzt wird.

**Lösbarkeit eines LGS:**
| Bedingung | Lösung |
|-----------|--------|
| det(A) $\\neq$ 0 | Genau eine Lösung (reguläres System) |
| det(A) = 0, konsistent | Unendlich viele Lösungen |
| det(A) = 0, inkonsistent | Keine Lösung |

## Eigenwerte und Eigenvektoren (Grundidee)

Ein Vektor $\\vec{v} \\neq \\vec{0}$ heißt **Eigenvektor** der Matrix $A$ zum **Eigenwert** $\\lambda$, wenn:

$$A\\vec{v} = \\lambda \\vec{v}$$

Die Matrix streckt oder staucht den Eigenvektor, ändert aber nicht seine Richtung. Eigenwerte findet man über das **charakteristische Polynom** $\\det(A - \\lambda E) = 0$. Eine $n \\times n$-Matrix hat höchstens $n$ Eigenwerte.

> **Merke:** Eigenwerte und Eigenvektoren sind zentral für die PCA in der medizinischen Statistik und für die Schwingungsanalyse in der Biomechanik. Der größte Eigenwert zeigt die Richtung der maximalen Varianz in einem Datensatz.

## Rechenbeispiele

**Beispiel 1 — Geradengleichung aufstellen:**
Gerade durch $A(1, 2, 3)$ und $B(4, 0, 1)$:
- Richtungsvektor: $\\vec{d} = \\vec{AB} = (4-1, 0-2, 1-3) = (3, -2, -2)$
- Parameterform: $\\vec{r} = (1, 2, 3) + t \\cdot (3, -2, -2)$
- Punktprobe für $P(7, -2, -1)$: $(7,{-}2,{-}1) = (1,2,3) + t(3,{-}2,{-}2)$ → $t = 2$ ✓

**Beispiel 2 — Ebenengleichung aus 3 Punkten:**
$A(1,0,0)$, $B(0,2,0)$, $C(0,0,3)$:
- $\\vec{d_1} = \\vec{AB} = (-1,2,0)$, $\\vec{d_2} = \\vec{AC} = (-1,0,3)$
- Normalenvektor: $\\vec{n} = \\vec{d_1} \\times \\vec{d_2} = (6, 3, 2)$
- Koordinatenform: $6x + 3y + 2z = 6$

**Beispiel 3 — LGS mit Cramer:**
$2x + y = 5$, $x - y = 1$:
- $\\det(A) = 2 \\cdot (-1) - 1 \\cdot 1 = -3$
- $x = \\det\\begin{pmatrix}5&1\\\\1&-1\\end{pmatrix}/(-3) = (-5-1)/(-3) = 2$
- $y = \\det\\begin{pmatrix}2&5\\\\1&1\\end{pmatrix}/(-3) = (2-5)/(-3) = 1$

**Beispiel 4 — Inverse einer 2×2-Matrix:**
$A = \\begin{pmatrix}2 & 1 \\\\ 5 & 3\\end{pmatrix}$, $\\det(A) = 6-5 = 1$
- $A^{-1} = \\frac{1}{1}\\begin{pmatrix}3 & -1 \\\\ -5 & 2\\end{pmatrix} = \\begin{pmatrix}3 & -1 \\\\ -5 & 2\\end{pmatrix}$
- Probe: $\\begin{pmatrix}2&1\\\\5&3\\end{pmatrix} \\cdot \\begin{pmatrix}3&-1\\\\-5&2\\end{pmatrix} = \\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}$ ✓

## Klinische Bedeutung

In der **CT-Bildrekonstruktion** werden die gemessenen Absorptionswerte durch eine Radon-Transformation verarbeitet. Die Rückprojektion ist mathematisch eine Matrizenoperation: Aus Messdaten (Sinogramm) wird durch iterative Matrizenoperationen ein 3D-Bilddatensatz rekonstruiert. Iterative Verfahren lösen das LGS $A\\vec{x} = \\vec{b}$, wobei $A$ die Systemmatrix, $\\vec{x}$ der Bildvektor und $\\vec{b}$ die Messdaten sind. Die Systemmatrix kann Millionen von Zeilen und Spalten haben.

In der **Bioinformatik** werden Genexpressionsdaten als Matrizen gespeichert (Zeilen = Gene, Spalten = Patientenproben). Die **Hauptkomponentenanalyse (PCA)** berechnet Eigenwerte und Eigenvektoren der Kovarianzmatrix und reduziert die Dimensionalität auf die wichtigsten Hauptkomponenten. So können z. B. Tumorsubtypen visuell getrennt und Biomarker identifiziert werden.

In der **Pharmakologie** werden Kompartimentmodelle (z. B. Zwei-Kompartiment-Modell für Medikamentenverteilung) als Matrizendifferentialgleichungen formuliert. Die Eigenwerte der Systemmatrix bestimmen die Halbwertszeiten der Verteilungs- und Eliminationsphasen. Bei der **MRT-Bildgebung** werden die k-Raum-Daten durch Fourier-Transformation (ebenfalls Matrizenoperationen) in ein Bild umgerechnet.`,
      lernziele: [
        "Die Parameterform einer Geraden im ℝ³ aufstellen und Punkte auf der Geraden berechnen können.",
        "Ebenengleichungen in Normalenform, Koordinatenform und Parameterform ineinander umrechnen können.",
        "Matrizenaddition, skalare Multiplikation und Matrizenmultiplikation (mit Dimensionsregel m×n × n×p = m×p) durchführen können.",
        "Die Determinante einer 2×2-Matrix berechnen und ihre geometrische/algebraische Bedeutung erklären können.",
        "Die klinische Bedeutung von Matrizenoperationen in der CT-Bildrekonstruktion und Bioinformatik beschreiben können.",
      ],
      sections: [
        {
          heading: "Geraden und Ebenen im dreidimensionalen Raum",
          text: "Eine Gerade im ℝ³ wird durch Stützvektor $\\vec{r_0}$ und Richtungsvektor $\\vec{d}$ dargestellt: $\\vec{r} = \\vec{r_0} + t\\cdot\\vec{d}$. Eine Ebene kann durch zwei Richtungsvektoren aufgespannt werden (Parameterform) oder durch ihren Normalenvektor $\\vec{n}$ beschrieben werden (Normalenform: $\\vec{n}\\cdot(\\vec{r}-\\vec{r_0})=0$). In der Koordinatenform $ax+by+cz=d$ bilden die Koeffizienten $(a,b,c)$ genau den Normalenvektor.",
          merksatz:
            "Gerade: r = r₀ + t×d (Stützvektor + Vielfaches des Richtungsvektors). Ebene-Normalenform: n×(r−r₀)=0.",
        },
        {
          heading: "Matrizenrechnung — Grundoperationen und Determinante",
          text: "Matrizen werden elementweise addiert; das Produkt $A\\cdot B$ erfordert gleiche innere Dimensionen (n) und ist nicht kommutativ. Die Transponierte $A^\\top$ entsteht durch Zeile-Spalte-Tausch. Die Determinante einer 2×2-Matrix: $\\det(A) = ad-bc$. Ist sie null, sind die Zeilen linear abhängig — das entsprechende LGS hat keine eindeutige Lösung. Wichtige Anwendung: Prüfung auf lineare Unabhängigkeit von Vektoren.",
          merksatz:
            "Matrizenprodukt: m×n × n×p = m×p. Determinante 2×2: ad−bc. det = 0 → linear abhängig, kein eindeutiges LGS.",
        },
        {
          heading: "Klinische Anwendungen: CT und Bioinformatik",
          text: "CT-Bildrekonstruktion: Die gemessenen Röntgenabsorptionsdaten werden als Sinogramm gespeichert und durch Matrizenoperationen (gefilterte Rückprojektion) in ein 3D-Volumenbild umgerechnet. Bioinformatik: Genexpressionsdaten als Matrizen (Gene × Patienten). PCA (Hauptkomponentenanalyse) nutzt Eigenvektoren und Eigenwerte dieser Matrizen, um Datenmuster zu erkennen und Dimensionen zu reduzieren. Auch lineare Regression und medizinische Bildgebung (MRT, Ultraschall-Beamforming) stützen sich auf Matrizenalgebra.",
          merksatz:
            "CT-Rekonstruktion = Matrizenoperationen (Rückprojektion). Bioinformatik: Genmatrix (Gene × Patienten). PCA nutzt Eigenvektoren.",
        },
        {
          heading: "Inverse Matrix, LGS und Eigenwerte",
          text: "Die inverse Matrix $A^{-1}$ existiert nur bei $\\det(A) \\neq 0$. Für 2×2: $A^{-1} = \\frac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$. Die Cramersche Regel löst ein LGS über Determinanten: $x_i = \\det(A_i)/\\det(A)$, wobei $A_i$ die $i$-te Spalte durch den Lösungsvektor ersetzt. Eigenwerte $\\lambda$ erfüllen $\\det(A-\\lambda E)=0$; der zugehörige Eigenvektor wird nur gestreckt, nicht gedreht. Eigenwerte sind zentral für PCA, Schwingungsanalyse und pharmakokinetische Kompartimentmodelle.",
          merksatz:
            "Inverse: A⁻¹ = (1/det)×adj(A). Cramer: xᵢ = det(Aᵢ)/det(A). Eigenwert: A×v = λ×v — Richtung bleibt, nur Betrag ändert sich.",
        },
      ],
      merksätze: [
        "Geradengleichung Raum: r = r₀ + t×d (Stützvektor + Parameter × Richtungsvektor).",
        "Ebene Normalenform: n×(r − r₀) = 0, wobei n ⊥ Ebene.",
        "Ebene Koordinatenform: ax + by + cz = d — Koeffizienten (a,b,c) sind der Normalenvektor.",
        "Matrizenaddition: nur für gleich große Matrizen, elementweise.",
        "Matrizenprodukt: A(m×n) × B(n×p) = C(m×p) — innere Dimensionen müssen übereinstimmen.",
        "Matrizenmultiplikation ist nicht kommutativ: A×B ≠ B×A (im Allgemeinen).",
        "Transponierte Aᵀ: Zeilen und Spalten vertauschen; symmetrisch wenn A = Aᵀ.",
        "Determinante 2×2: det(A) = ad − bc.",
        "det(A) = 0 → Zeilen/Spalten linear abhängig → LGS nicht eindeutig lösbar.",
        "Inverse 2×2: A⁻¹ = (1/det)×(d, −b; −c, a) — nur bei det ≠ 0.",
        "Cramersche Regel: xᵢ = det(Aᵢ)/det(A) — spaltenweise Determinantenberechnung.",
        "Eigenwert λ: A×v = λ×v → det(A−λE) = 0 (charakteristisches Polynom).",
        "CT: Bildrekonstruktion durch Radon-Transformation und Matrizenoperationen (Rückprojektion).",
        "PCA: Eigenvektoren der Kovarianzmatrix = Hauptkomponenten → Dimensionsreduktion.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Beschreiben Sie die Darstellungsformen von Ebenen im Raum und erläutern Sie die Bedeutung der Determinante einer Matrix.",
        answer:
          "Eine Ebene im dreidimensionalen Raum lässt sich auf drei äquivalente Arten beschreiben. In der **Parameterform** $\\vec{r} = \\vec{r_0} + s\\cdot\\vec{d_1} + t\\cdot\\vec{d_2}$ wird die Ebene durch einen Aufpunkt $\\vec{r_0}$ und zwei linear unabhängige Richtungsvektoren $\\vec{d_1}$, $\\vec{d_2}$ definiert. In der **Normalenform** $\\vec{n}\\cdot(\\vec{r}-\\vec{r_0})=0$ steht der Normalenvektor $\\vec{n}$ senkrecht auf der Ebene — dieser lässt sich als Kreuzprodukt der Richtungsvektoren berechnen: $\\vec{n} = \\vec{d_1}\\times\\vec{d_2}$. In der **Koordinatenform** $ax+by+cz=d$ bilden die Koeffizienten $(a,b,c)$ genau den Normalenvektor. Die **Determinante** einer 2×2-Matrix $A = \\begin{pmatrix}a & b \\\\ c & d\\end{pmatrix}$ ist $\\det(A) = ad-bc$. Geometrisch entspricht sie dem Flächeninhalt des von den Zeilenvektoren aufgespannten Parallelogramms. Ist $\\det(A) = 0$, sind die Zeilen (oder Spalten) linear abhängig: Das zugehörige lineare Gleichungssystem besitzt keine eindeutige Lösung (entweder keine oder unendlich viele). Ist $\\det(A) \\neq 0$, ist die Matrix regulär und invertierbar — das LGS hat genau eine Lösung. In der medizinischen Bildgebung spielt die Matrizenrechnung eine fundamentale Rolle: Die CT-Rekonstruktion basiert auf der Inversion von Matrizenoperationen (gefilterte Rückprojektion der Radon-Transformation).",
      },
      klinischerBezug:
        "CT-Bildrekonstruktion via Radon-Transformation (Matrizenoperationen); Genexpressionsdaten als Matrizen; PCA zur Mustererkennung in medizinischen Studien.",
      selfTest: [
        {
          question:
            "Welcher Punkt liegt auf der Geraden $\\vec{r} = (1,2,3)^\\top + t\\cdot(1,0,-1)^\\top$?",
          options: ["$(3, 2, 1)$", "$(2, 2, 2)$", "$(1, 3, 3)$", "$(3, 3, 1)$", "$(0, 2, 4)$"],
          correctIndex: 0,
          explanation:
            "Für $t=2$: $\\vec{r} = (1,2,3)+2(1,0,-1) = (1+2,\\;2+0,\\;3-2) = (3,2,1)$. Zur Kontrolle: $t=1$ gibt $(2,2,2)$ — diese Antwort ist nicht im Angebot. Das Einsetzen von $t=2$ in die Parameterform liefert eindeutig $(3,2,1)$. Die anderen Optionen ergeben bei keinem $t$ einen konsistenten Wert für alle drei Koordinaten.",
          hints: [
            "Setzen Sie verschiedene Werte für t ein: t=0 gibt den Stützvektor selbst, t=1 gibt r₀ + d, t=2 gibt r₀ + 2d.",
            "Überprüfen Sie jede Antwortoption: Gibt es ein t, sodass (1,2,3) + t×(1,0,−1) = Antwortoption?",
          ],
          tags: ["geradengleichung", "parameterform", "vektorrechnung"],
          difficulty: 2,
        },
        {
          question: "Was ist der Normalenvektor der Ebene mit Koordinatenform $2x - 3y + z = 5$?",
          options: ["$(2, -3, 1)$", "$(2, 3, -1)$", "$(5, 5, 5)$", "$(-2, 3, -1)$", "$(1, 1, 1)$"],
          correctIndex: 0,
          explanation:
            "In der Koordinatenform $ax+by+cz=d$ bilden die Koeffizienten $(a,b,c)$ direkt den Normalenvektor der Ebene. Hier: $a=2$, $b=-3$, $c=1$, also $\\vec{n} = (2,-3,1)^\\top$. Der Normalenvektor steht senkrecht auf der Ebene. Dies kann mit dem Skalarprodukt verifiziert werden: Jeder in der Ebene liegende Vektor ergibt mit $\\vec{n}$ das Skalarprodukt 0.",
          hints: [
            "In der Koordinatenform ax + by + cz = d sind die Koeffizienten a, b, c direkt die Komponenten des Normalenvektors.",
            "Der Normalenvektor steht senkrecht auf der Ebene — er ergibt mit jedem Ebenenvektor das Skalarprodukt 0.",
          ],
          tags: ["normalenvektor", "ebenengleichung", "koordinatenform"],
          difficulty: 1,
        },
        {
          question:
            "Berechnen Sie das Produkt $A \\cdot B$ für $A = \\begin{pmatrix}1 & 2\\\\3 & 4\\end{pmatrix}$ und $B = \\begin{pmatrix}1\\\\0\\end{pmatrix}$.",
          options: [
            "$\\begin{pmatrix}1\\\\3\\end{pmatrix}$",
            "$\\begin{pmatrix}3\\\\7\\end{pmatrix}$",
            "$\\begin{pmatrix}1\\\\4\\end{pmatrix}$",
            "$\\begin{pmatrix}2\\\\4\\end{pmatrix}$",
            "$\\begin{pmatrix}4\\\\6\\end{pmatrix}$",
          ],
          correctIndex: 0,
          explanation:
            "A ist 2×2, B ist 2×1 → Ergebnis C ist 2×1. $C_{11} = 1\\cdot1+2\\cdot0 = 1$; $C_{21} = 3\\cdot1+4\\cdot0 = 3$. Also $C = (1,3)^\\top$. Beim Matrizenprodukt wird jede Zeile von A mit der (einzigen) Spalte von B skalar multipliziert. Dimensionsregel: 2×2 × 2×1 = 2×1 — die inneren Dimensionen (beide 2) stimmen überein.",
          hints: [
            "Dimensionsregel: A ist (2×2), B ist (2×1). Das Ergebnis ist (2×1).",
            "Zeile 1 von A × Spalte von B: 1×1 + 2×0 = 1. Zeile 2 von A × Spalte von B: 3×1 + 4×0 = 3.",
          ],
          tags: ["matrizenmultiplikation", "dimensionsregel", "matrix"],
          difficulty: 2,
        },
        {
          question:
            "Berechnen Sie die Determinante von $A = \\begin{pmatrix}3 & 5\\\\1 & 2\\end{pmatrix}$.",
          options: ["1", "−1", "11", "6", "0"],
          correctIndex: 0,
          explanation:
            "Für eine 2×2-Matrix gilt: $\\det(A) = ad - bc = 3\\cdot2 - 5\\cdot1 = 6 - 5 = 1$. Da $\\det(A) = 1 \\neq 0$, ist die Matrix regulär und invertierbar — das zugehörige LGS hat genau eine Lösung. Der Wert 1 ist besonders praktisch, da die Inverse $A^{-1}$ dann einfach zu berechnen ist.",
          hints: [
            "Determinante 2×2: det(A) = a×d − b×c (Hauptdiagonale − Nebendiagonale).",
            "Hier: a=3, b=5, c=1, d=2. Also: 3×2 − 5×1 = ?",
          ],
          tags: ["determinante", "matrix", "algebra"],
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
          explanation:
            "Ist $\\det(A) = 0$, sind die Zeilen- (oder äquivalent: Spalten-) Vektoren der Matrix linear abhängig. Das homogene LGS $A\\vec{x}=\\vec{0}$ hat dann nichttriviale Lösungen. Für das inhomogene System $A\\vec{x}=\\vec{b}$ bedeutet dies entweder keine Lösung (widersprüchlich) oder unendlich viele (unterbestimmt). Geometrisch: Die Zeilenvektoren spannen keinen vollständigen Raum auf (ein Parallelogramm mit Fläche 0 bedeutet Kollinearität). Eine Matrix mit $\\det = 0$ heißt **singulär** (nicht invertierbar).",
          hints: [
            "det(A) = 0 bedeutet, dass die Vektoren, die die Zeilen (oder Spalten) bilden, linear abhängig sind.",
            "Eine nicht invertierbare (singuläre) Matrix ergibt kein eindeutig lösbares LGS.",
          ],
          tags: ["determinante", "lineare-abhängigkeit", "lgs"],
          difficulty: 2,
        },
        {
          question:
            "Welche Dimensionen hat das Produkt $A\\cdot B$, wenn $A$ eine 3×4-Matrix und $B$ eine 4×2-Matrix ist?",
          options: ["3×2", "4×4", "3×4", "2×3", "Das Produkt ist nicht definiert"],
          correctIndex: 0,
          explanation:
            "Die Dimensionsregel lautet: $(m\\times n)\\cdot(n\\times p) = (m\\times p)$. Hier: $(3\\times4)\\cdot(4\\times2) = (3\\times2)$. Die inneren Dimensionen (beide 4) stimmen überein, daher ist das Produkt definiert. Das Ergebnis hat m=3 Zeilen (aus A) und p=2 Spalten (aus B). Dies ist die wichtigste Voraussetzung bei der Matrizenmultiplikation — die Anzahl der Spalten von A muss gleich der Anzahl der Zeilen von B sein.",
          hints: [
            "Merkhilfe: (m×n)×(n×p) = (m×p). Die 'innere' Dimension n muss übereinstimmen und 'verschwindet'.",
            "Nehmen Sie die äußeren Dimensionen: 3 (Zeilen von A) und 2 (Spalten von B).",
          ],
          tags: ["matrizenmultiplikation", "dimensionsregel", "matrix"],
          difficulty: 1,
        },
        {
          question:
            "In der CT-Bildrekonstruktion werden Matrizenoperationen verwendet. Welches mathematische Verfahren liegt der CT-Rekonstruktion zugrunde?",
          options: [
            "Radon-Transformation mit anschließender gefilterter Rückprojektion (Matrizenoperationen)",
            "Direkte Fourier-Inversion ohne Matrizenrechnung",
            "Einfache Vektoraddition der Messwerte",
            "Determinantenberechnung der Absorptionsmatrix",
            "Kreuzprodukt der Messstrahlen",
          ],
          correctIndex: 0,
          explanation:
            "Die CT-Bildrekonstruktion basiert auf der **Radon-Transformation**: Für jeden Projektionswinkel wird ein eindimensionales Absorptionsprofil gemessen. Das Sinogramm (alle Projektionen zusammen) wird durch die **gefilterte Rückprojektion** in ein 2D/3D-Bild umgewandelt — dies ist mathematisch eine Matrizenoperation. Die Bilddaten werden als Matrix (Pixel-Array) gespeichert. Iterative Rekonstruktionsverfahren lösen ein großes lineares Gleichungssystem $A\\vec{x}=\\vec{b}$ (A = Systemmatrix, x = Bildvektor, b = Messdaten).",
          hints: [
            "CT misst Absorptionswerte aus verschiedenen Winkeln. Wie wird daraus ein Bild berechnet?",
            "Das Schlüsselwort ist 'Rückprojektion' — mathematisch entspricht dies einer Matrizenoperation auf den Messdaten.",
          ],
          tags: ["ct-rekonstruktion", "matrizenrechnung", "bildgebung"],
          difficulty: 3,
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────
    // UK ma-6-04: Abstandsberechnungen und Anwendungen
    // ─────────────────────────────────────────────────────────────────
    {
      id: "ma-6-04",
      title: "Abstandsberechnungen und Anwendungen",
      stichworte: [
        "Euklidische Distanz",
        "Punkt-Gerade-Abstand",
        "Punkt-Ebene-Abstand",
        "Hessessche Normalform",
        "Windschief",
        "Schnittwinkel",
        "Diederwinkel",
        "Lagebeziehung",
        "Strahlentherapie",
        "Ganganalyse",
        "Stereotaxie",
      ],
      content: `## Abstand Punkt–Punkt

Der Abstand zweier Punkte $A$ und $B$ im dreidimensionalen Raum ist der Betrag des Verbindungsvektors:

$$d(A, B) = |\\vec{AB}| = \\sqrt{(b_1-a_1)^2 + (b_2-a_2)^2 + (b_3-a_3)^2}$$

Dies ist die **euklidische Distanz** — die direkte Verbindung ("Luftlinie") zwischen zwei Punkten. Im 2D-Fall entfällt die dritte Komponente. Diese Formel ist die Verallgemeinerung des Satzes des Pythagoras auf beliebig viele Dimensionen.

> **Merke:** Abstand = Betrag des Verbindungsvektors. Immer: Ziel − Start, dann Betrag berechnen. Häufiger MedAT-Fehler: Vorzeichen beim Quadrieren vergessen — $(b_i - a_i)^2$ ist immer positiv!

**MedAT-typische Aufgabe:** Abstand $A(2, 3, -1)$ zu $B(5, 7, -1)$: $d = \\sqrt{9 + 16 + 0} = \\sqrt{25} = 5$. Da die z-Koordinaten gleich sind, reduziert sich das Problem auf 2D mit dem 3-4-5-Tripel.

## Abstand Punkt–Gerade

Der Abstand eines Punktes $P$ von einer Geraden $g: \\vec{r} = \\vec{r_0} + t \\cdot \\vec{d}$ berechnet sich über das Kreuzprodukt:

$$d(P, g) = \\frac{|\\vec{r_0 P} \\times \\vec{d}|}{|\\vec{d}|}$$

wobei $\\vec{r_0 P} = \\vec{r}_P - \\vec{r}_0$ der Vektor vom Stützpunkt zum Punkt $P$ ist. Die geometrische Interpretation: Der Zähler $|\\vec{r_0P} \\times \\vec{d}|$ ist die Fläche des von $\\vec{r_0P}$ und $\\vec{d}$ aufgespannten Parallelogramms, der Nenner $|\\vec{d}|$ die Grundseitenlänge — das Ergebnis ist die Höhe, also der senkrechte Abstand.

Alternativ kann man den Lotfußpunkt $F$ auf der Geraden bestimmen: $t_F = \\frac{\\vec{r_0P} \\cdot \\vec{d}}{|\\vec{d}|^2}$, dann $F = \\vec{r_0} + t_F \\cdot \\vec{d}$ und $d = |\\vec{PF}|$.

## Abstand Punkt–Ebene

Der Abstand eines Punktes $P$ von einer Ebene $E: \\vec{n} \\cdot \\vec{r} = d$ (mit normiertem Normalenvektor $|\\vec{n}| = 1$) ist:

$$d(P, E) = |\\vec{n} \\cdot \\vec{r}_P - d|$$

Für einen nicht normierten Normalenvektor gilt die allgemeine **Hessessche Normalform**:

$$d(P, E) = \\frac{|a \\cdot p_1 + b \\cdot p_2 + c \\cdot p_3 - d|}{\\sqrt{a^2 + b^2 + c^2}}$$

> **Merke:** Punkt-Ebene-Abstand: Koordinaten des Punktes in die Ebenengleichung einsetzen, Betrag nehmen, durch $|\\vec{n}|$ dividieren. Dies ist eine der häufigsten MedAT-Aufgaben in der Vektorrechnung!

**Vorgehensweise Schritt für Schritt:**
1. Ebenengleichung in Koordinatenform bringen: $ax + by + cz = d$
2. Punkt $P(p_1, p_2, p_3)$ einsetzen: $a \\cdot p_1 + b \\cdot p_2 + c \\cdot p_3 - d$
3. Betrag nehmen (falls negativ)
4. Durch $\\sqrt{a^2 + b^2 + c^2}$ dividieren

## Lagebeziehungen im Raum

| Objekte | Mögliche Lagen |
|---------|---------------|
| Zwei Geraden | parallel, identisch, schneidend, windschief |
| Gerade & Ebene | parallel (disjunkt), parallel (in Ebene), schneidend |
| Zwei Ebenen | parallel (disjunkt), identisch, schneidend (Schnittgerade) |

**Wie erkennt man die Lagebeziehung?**
- **Parallele Geraden:** Richtungsvektoren sind Vielfache voneinander ($\\vec{d_1} = k \\cdot \\vec{d_2}$), aber kein gemeinsamer Punkt.
- **Identische Geraden:** Richtungsvektoren parallel UND ein Punkt der einen liegt auf der anderen.
- **Schneidend:** Nicht parallel, und das Gleichungssystem hat eine Lösung.
- **Windschief:** Nicht parallel, und das Gleichungssystem hat keine Lösung — nur im 3D möglich!

**Windschief:** Zwei Geraden im $\\mathbb{R}^3$, die weder parallel noch schneidend sind — sie liegen in verschiedenen Ebenen. Der Abstand windschiefer Geraden wird über das Spatprodukt berechnet:

$$d(g_1, g_2) = \\frac{|(\\vec{r_2} - \\vec{r_1}) \\cdot (\\vec{d_1} \\times \\vec{d_2})|}{|\\vec{d_1} \\times \\vec{d_2}|}$$

## Schnittwinkel

**Winkel zwischen zwei Geraden:**
$$\\cos \\alpha = \\frac{|\\vec{d_1} \\cdot \\vec{d_2}|}{|\\vec{d_1}| \\cdot |\\vec{d_2}|}$$

Der Betrag im Zähler stellt sicher, dass immer der spitze Winkel berechnet wird (0° bis 90°).

**Winkel zwischen Gerade und Ebene:**
$$\\sin \\alpha = \\frac{|\\vec{d} \\cdot \\vec{n}|}{|\\vec{d}| \\cdot |\\vec{n}|}$$

Hier wird der **Sinus** verwendet (nicht Kosinus!), da der Winkel zur Ebene das Komplement zum Winkel mit dem Normalenvektor ist: $\\alpha_{\\text{Ebene}} = 90° - \\alpha_{\\text{Normale}}$.

**Winkel zwischen zwei Ebenen (Diederwinkel):**
$$\\cos \\alpha = \\frac{|\\vec{n_1} \\cdot \\vec{n_2}|}{|\\vec{n_1}| \\cdot |\\vec{n_2}|}$$

Der Diederwinkel ist der Winkel zwischen den Normalenvektoren der Ebenen. In der Proteinstrukturanalyse beschreiben Diederwinkel (Ramachandran-Winkel $\\phi$ und $\\psi$) die Konformation der Aminosäurekette.

> **Merke:** Merkhilfe für Schnittwinkel: Geraden ↔ Geraden: cos mit Richtungsvektoren. Gerade ↔ Ebene: sin mit Richtungs- und Normalenvektor. Ebene ↔ Ebene: cos mit Normalenvektoren.

## Rechenbeispiele

**Beispiel 1 — Abstand Punkt–Ebene:**
Punkt $P(3, 1, -2)$, Ebene $E: 2x - y + 2z = 4$.
- Einsetzen: $|2 \\cdot 3 + (-1) \\cdot 1 + 2 \\cdot (-2) - 4| = |6 - 1 - 4 - 4| = |-3| = 3$
- Betrag des Normalenvektors: $|(2, -1, 2)| = \\sqrt{4+1+4} = 3$
- Abstand: $d = 3/3 = 1$

**Beispiel 2 — Schnittwinkel zweier Geraden:**
$g_1$: Richtung $(1, 2, 0)$, $g_2$: Richtung $(2, -1, 0)$.
- Skalarprodukt: $|1 \\cdot 2 + 2 \\cdot (-1) + 0| = |2 - 2| = 0$
- $\\cos \\alpha = 0 \\Rightarrow \\alpha = 90°$ — die Geraden stehen senkrecht aufeinander.

**Beispiel 3 — Abstand windschiefer Geraden:**
$g_1$: $(1,0,0) + t(0,1,0)$, $g_2$: $(0,0,1) + s(1,0,0)$.
- $\\vec{d_1} \\times \\vec{d_2} = (0,1,0) \\times (1,0,0) = (0,0,-1)$
- $\\vec{r_2} - \\vec{r_1} = (-1,0,1)$
- $d = |(-1,0,1) \\cdot (0,0,-1)| / |(0,0,-1)| = |-1| / 1 = 1$

**Beispiel 4 — Lagebeziehung bestimmen:**
$g_1$: $(1,0,0) + t(1,1,0)$, $g_2$: $(0,1,0) + s(2,2,0)$.
- Richtungsvektoren: $(2,2,0) = 2 \\cdot (1,1,0)$ → parallel!
- Liegt $(0,1,0)$ auf $g_1$? $(0,1,0) = (1,0,0) + t(1,1,0)$ → $t = -1$: $(0, -1, 0) \\neq (0, 1, 0)$ → nicht identisch.
- Also: parallel, disjunkt. Abstand über Punkt-Gerade-Formel berechenbar.

## Klinische Bedeutung

**Strahlentherapie:** Der Abstand eines Tumors von einem Risikorgan (z. B. Rückenmark) wird als Punkt-zu-Punkt-Distanz oder Punkt-zu-Ebene-Distanz berechnet. Bei der Bestrahlungsplanung definieren Ebenen die Feldgrenzen, und der Abstand gesunder Strukturen zu diesen Ebenen bestimmt die **Sicherheitsmarge** (typisch 5–10 mm). Die Dosisverteilung fällt mit zunehmendem Abstand vom Isozentrum ab — präzise Abstandsberechnung ist daher therapieentscheidend.

**Orthopädie und Ganganalyse:** Gelenkwinkel (z. B. Kniewinkel) werden als Schnittwinkel zwischen den Vektoren Oberschenkel und Unterschenkel berechnet. Ein Kniewinkel von 0° entspricht voller Streckung, 135° der maximalen Beugung. In der **3D-Ganganalyse** werden Marker an Gelenken befestigt und deren Positionen als 3D-Koordinaten erfasst — die Winkelberechnung erfolgt über das Skalarprodukt der Richtungsvektoren.

**Neurochirurgie:** Bei der **stereotaktischen Operation** wird ein Zielpunkt im Gehirn über 3D-Koordinaten definiert (aus CT/MRT). Der Abstand der Nadelspitze zum Zielpunkt muss minimal sein ($d < 1$ mm). Die Nadelrichtung wird als Geradengleichung im Raum modelliert, und der Punkt-Gerade-Abstand zu kritischen Strukturen (Gefäße, Hirnstamm) wird berechnet, um den sichersten Zugangsweg zu planen.

**Bildgebung:** Abstände in CT/MRT-Schichtbildern werden über die euklidische Distanz berechnet, wobei die Schichtdicke als dritte Koordinate eingeht (anisotrope Voxel). Volumenmessungen nutzen die Abstandsformeln zur Bestimmung von Organgrößen, und der Punkt-Ebene-Abstand hilft bei der Beurteilung von Raumforderungen relativ zu anatomischen Leitstrukturen.`,
      lernziele: [
        "Den Abstand zwischen zwei Punkten im 2D- und 3D-Raum berechnen können.",
        "Den Abstand eines Punktes von einer Geraden über das Kreuzprodukt bestimmen können.",
        "Den Abstand eines Punktes von einer Ebene mit der Hesseschen Normalform berechnen können.",
        "Schnittwinkel zwischen Geraden, Ebenen und Gerade-Ebene-Kombinationen berechnen können.",
        "Lagebeziehungen (parallel, schneidend, windschief) erkennen und den Abstand windschiefer Geraden berechnen können.",
      ],
      sections: [
        {
          heading: "Punkt-Punkt- und Punkt-Gerade-Abstand",
          text: "Der Abstand zweier Punkte ist der Betrag des Verbindungsvektors (euklidische Distanz). Der Punkt-Gerade-Abstand wird über das Kreuzprodukt berechnet: $d = |\\vec{r_0P} \\times \\vec{d}| / |\\vec{d}|$. Der Zähler entspricht der Fläche des aufgespannten Parallelogramms, geteilt durch die Grundseite ergibt die Höhe. In der Neurochirurgie ist die Punkt-Gerade-Distanz der Abstand der Nadelspitze vom geplanten Zugangsweg.",
          merksatz:
            "Punkt–Punkt: d = |AB| = Betrag des Verbindungsvektors. Punkt–Gerade: d = |r₀P × d| / |d| (Kreuzprodukt-Formel).",
        },
        {
          heading: "Punkt-Ebene-Abstand und Hessessche Normalform",
          text: "Der Abstand eines Punktes P von der Ebene ax+by+cz=d beträgt $d = |ap_1+bp_2+cp_3-d|/\\sqrt{a^2+b^2+c^2}$. Man setzt die Koordinaten in die Ebenengleichung ein und normiert durch den Betrag des Normalenvektors. Die Hessesche Normalform ($\\vec{n_0} \\cdot \\vec{r} = d_0$ mit $|\\vec{n_0}|=1$) vereinfacht dies: Abstand = Einsetzen des Punktes, Betrag nehmen.",
          merksatz:
            "Punkt–Ebene: d = |a×p₁+b×p₂+c×p₃−d| / √(a²+b²+c²). Hessesche NF: Normalenvektor normieren, dann einfach einsetzen.",
        },
        {
          heading: "Lagebeziehungen und Schnittwinkel",
          text: "Zwei Geraden im Raum können parallel, identisch, schneidend oder windschief sein. Windschiefe Geraden haben keinen Schnittpunkt und sind nicht parallel — ihr Abstand wird über das Spatprodukt berechnet. Schnittwinkel zwischen Geraden nutzen den Kosinus des Skalarprodukts der Richtungsvektoren. Zwischen Gerade und Ebene wird der Sinus (Winkel zum Normalenvektor) verwendet. Der Diederwinkel zweier Ebenen ist der Winkel zwischen ihren Normalenvektoren.",
          merksatz:
            "Windschief = nicht parallel + kein Schnittpunkt (nur im 3D). Schnittwinkel: Geraden → cos, Gerade/Ebene → sin, Ebenen → cos (mit Normalenvektoren).",
        },
        {
          heading: "Klinische Anwendungen: Strahlentherapie und Ganganalyse",
          text: "Strahlentherapie: Sicherheitsabstand Tumor–Risikorgan als Punkt-Ebene-Distanz. Ganganalyse: Gelenkwinkel (Kniebeugung) als Schnittwinkel der Oberschenkel- und Unterschenkelvektoren. Stereotaktische Chirurgie: Nadelzugang als Gerade im Raum, Zielgenauigkeit als Punkt-Gerade-Abstand. CT/MRT: Euklidische Distanzen für Volumetrie unter Berücksichtigung der Schichtdicke.",
          merksatz:
            "Strahlentherapie: Sicherheitsabstand = Punkt-Ebene-Distanz. Ganganalyse: Kniewinkel = Schnittwinkel von Oberschenkel- und Unterschenkelvektor.",
        },
      ],
      merksätze: [
        "Punkt–Punkt: d(A,B) = |AB| = √((b₁−a₁)² + (b₂−a₂)² + (b₃−a₃)²).",
        "Punkt–Gerade: d = |r₀P × d| / |d| — Kreuzprodukt-Formel (Fläche ÷ Grundseite = Höhe).",
        "Punkt–Ebene: d = |a×p₁+b×p₂+c×p₃−d| / √(a²+b²+c²) — Hessessche Normalform.",
        "Windschief: Geraden im 3D ohne Schnittpunkt und nicht parallel.",
        "Abstand windschiefer Geraden: d = |(r₂−r₁)×(d₁×d₂)| / |d₁×d₂| (Spatprodukt).",
        "Schnittwinkel Geraden: cos α = |d₁×d₂| / (|d₁|×|d₂|) — stets spitzer Winkel.",
        "Winkel Gerade–Ebene: sin α = |d×n| / (|d|×|n|) — Komplement zum Normalenwinkel.",
        "Diederwinkel: cos α = |n₁×n₂| / (|n₁|×|n₂|) — Winkel zwischen Normalenvektoren.",
        "Strahlentherapie: Sicherheitsabstand Tumor–Risikorgan als vektorielle Distanzberechnung.",
        "Ganganalyse: Gelenkwinkel = Schnittwinkel der Knochen-Richtungsvektoren.",
      ],
      altfrage: {
        question:
          "Beschreiben Sie die Berechnung des Abstands eines Punktes von einer Ebene und erklären Sie eine klinische Anwendung dieser Formel.",
        answer:
          "Der Abstand eines Punktes $P(p_1, p_2, p_3)$ von einer Ebene $E: ax+by+cz=d$ wird mit der Formel $d(P,E) = \\frac{|a \\cdot p_1 + b \\cdot p_2 + c \\cdot p_3 - d|}{\\sqrt{a^2+b^2+c^2}}$ berechnet. Man setzt die Koordinaten des Punktes in die linke Seite der Ebenengleichung ein und dividiert den Betrag des Ergebnisses durch die Länge des Normalenvektors $(a,b,c)$. Bei der **Hesseschen Normalform** ist der Normalenvektor bereits auf Länge 1 normiert, sodass der Abstand direkt durch Einsetzen und Betragsbildung gewonnen wird. Klinisch wird diese Formel in der **Strahlentherapie** eingesetzt: Die Feldgrenzen des Bestrahlungsfelds werden als Ebenen im 3D-Raum modelliert. Der Abstand eines Risikoorgans (z. B. Rückenmark, dargestellt als Punkt oder Punktwolke) von der Feldgrenze bestimmt die **Sicherheitsmarge**. Ein Mindestabstand von typisch 5–10 mm muss eingehalten werden, um Strahlenschaden am gesunden Gewebe zu vermeiden. Auch in der **stereotaktischen Neurochirurgie** wird der Abstand eines Zielpunkts (z. B. Tumor im Gehirn) von umliegenden kritischen Strukturen (Gefäße, Hirnstamm) uber Abstandsformeln berechnet, um den sichersten Zugangsweg zu planen. Die Genauigkeit der Abstandsberechnung liegt im Submillimeterbereich und ist entscheidend für den Therapieerfolg.",
      },
      klinischerBezug:
        "Strahlentherapie: Sicherheitsabstand Tumor–Risikorgan; Ganganalyse: Gelenkwinkel als Schnittwinkel; Stereotaxie: Punkt-Gerade-Abstand der Nadel zum Zielpunkt; CT-Volumetrie: euklidische Distanzen.",
      selfTest: [
        {
          question: "Berechnen Sie den Abstand der Punkte $A(1, 2, 3)$ und $B(4, 6, 3)$.",
          options: ["5", "√29", "7", "√26", "3"],
          correctIndex: 0,
          explanation:
            "$d = \\sqrt{(4-1)^2+(6-2)^2+(3-3)^2} = \\sqrt{9+16+0} = \\sqrt{25} = 5$. Da die z-Koordinaten gleich sind, reduziert sich das Problem auf den 2D-Fall mit dem pythagoreischen Tripel 3-4-5.",
          hints: [
            "Verwenden Sie die Abstandsformel: d = √((b₁−a₁)² + (b₂−a₂)² + (b₃−a₃)²).",
            "Die dritte Komponente ist gleich (3−3=0), es bleibt ein 2D-Problem.",
          ],
          tags: ["abstand", "euklidische-distanz", "pythagoras"],
          difficulty: 1,
        },
        {
          question:
            "Wie berechnet man den Abstand eines Punktes $P$ von einer Geraden $g: \\vec{r} = \\vec{r_0} + t \\cdot \\vec{d}$?",
          options: [
            "d = |r₀P × d| / |d| (Kreuzprodukt-Formel)",
            "d = |r₀P × d| / |d| (Skalarprodukt-Formel)",
            "d = |r₀P| − |d| (Differenz der Beträge)",
            "d = |r₀P + d| (Summe)",
            "d = |r₀P| × |d| (Produkt der Beträge)",
          ],
          correctIndex: 0,
          explanation:
            "Der Punkt-Gerade-Abstand wird über das Kreuzprodukt berechnet: $d = \\frac{|\\vec{r_0P} \\times \\vec{d}|}{|\\vec{d}|}$. Der Zähler $|\\vec{r_0P} \\times \\vec{d}|$ ist die Fläche des von $\\vec{r_0P}$ und $\\vec{d}$ aufgespannten Parallelogramms. Dividiert man durch die Grundseite $|\\vec{d}|$, erhält man die Höhe — also den gesuchten Abstand.",
          hints: [
            "Der Abstand ist die 'Höhe' des Parallelogramms: Fläche / Grundseite.",
            "Fläche = |r₀P × d| (Kreuzprodukt). Grundseite = |d| (Richtungsvektor).",
          ],
          tags: ["punkt-gerade-abstand", "kreuzprodukt", "analytische-geometrie"],
          difficulty: 2,
        },
        {
          question: "Punkt $P(1, 1, 1)$, Ebene $E: x + 2y + 2z = 10$. Wie groß ist der Abstand?",
          options: ["5/3", "2", "3", "1", "7/3"],
          correctIndex: 0,
          explanation:
            "Einsetzen: $|1 + 2 \\cdot 1 + 2 \\cdot 1 - 10| = |1 + 2 + 2 - 10| = |-5| = 5$. Betrag des Normalenvektors: $|(1,2,2)| = \\sqrt{1+4+4} = 3$. Abstand: $d = 5/3 \\approx 1{,}67$. Der Normalenvektor $(1,2,2)$ hat den praktischen Betrag 3, was die Berechnung vereinfacht.",
          hints: [
            "Formel: d = |a×p₁ + b×p₂ + c×p₃ − d| / √(a²+b²+c²).",
            "Normalenvektor (1,2,2): Betrag = √(1+4+4) = 3.",
          ],
          tags: ["punkt-ebene-abstand", "hesse-normalform", "analytische-geometrie"],
          difficulty: 2,
        },
        {
          question:
            "Zwei Geraden im Raum sind weder parallel noch schneidend. Wie bezeichnet man diese Lagebeziehung?",
          options: ["Windschief", "Orthogonal", "Kollinear", "Koplanar", "Identisch"],
          correctIndex: 0,
          explanation:
            "Im dreidimensionalen Raum können zwei Geraden **windschief** sein: Sie haben keinen Schnittpunkt und sind nicht parallel. Dies ist nur im 3D möglich — in der Ebene (2D) schneiden sich nicht-parallele Geraden immer. Der Abstand windschiefer Geraden wird über das Spatprodukt berechnet: $d = |(\\vec{r_2}-\\vec{r_1}) \\cdot (\\vec{d_1} \\times \\vec{d_2})| / |\\vec{d_1} \\times \\vec{d_2}|$.",
          hints: [
            "In 2D gibt es nur parallel oder schneidend. Was ist im 3D zusätzlich möglich?",
            "Wenn Geraden sich nicht schneiden und nicht parallel sind, heißt das...",
          ],
          tags: ["lagebeziehung", "windschief", "analytische-geometrie"],
          difficulty: 1,
        },
        {
          question:
            "In der Strahlentherapie wird der Sicherheitsabstand eines Risikoorgans zur Feldgrenze als welche geometrische Größe berechnet?",
          options: [
            "Punkt-Ebene-Abstand (Organ = Punkt, Feldgrenze = Ebene)",
            "Punkt-Punkt-Abstand zwischen Tumor und Organ",
            "Winkel zwischen Strahlrichtung und Organachse",
            "Volumen des Bestrahlungsfelds",
            "Kreuzprodukt der Feldvektoren",
          ],
          correctIndex: 0,
          explanation:
            "In der Strahlentherapie wird das Risikorgan vereinfacht als Punkt (oder Punktwolke) und die Feldgrenze als Ebene im 3D-Raum modelliert. Der Sicherheitsabstand wird daher als **Punkt-Ebene-Abstand** berechnet. Ein typischer Mindestabstand zum Rückenmark beträgt 5–10 mm. Die Abstandsformel $d = |\\vec{n} \\cdot \\vec{r}_P - d_0|$ (bei normiertem Normalenvektor) liefert diesen Wert direkt aus den 3D-Koordinaten des CT-Datensatzes.",
          hints: [
            "Die Feldgrenze ist eine Fläche im Raum — mathematisch eine Ebene.",
            "Das Risikorgan wird als Punkt im 3D-Raum modelliert. Welche Distanzformel passt?",
          ],
          tags: ["strahlentherapie", "punkt-ebene-abstand", "klinische-anwendung"],
          difficulty: 2,
        },
      ],
    },
  ],
};
