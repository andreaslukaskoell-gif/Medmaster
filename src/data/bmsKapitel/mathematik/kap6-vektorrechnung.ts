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
      imageUrl: "/images/bms/bio-muskelkontraktion.jpg",
      imageCaption:
        "Abb.: Kraftvektoren bei Muskelkontraktion — Richtung und Betrag (OpenStax, CC BY 4.0)",
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
        text: "Ein Vektor hat die Komponenten (3, 4). Wie groß ist sein Betrag?",
        options: [
          { id: "a", text: "5" },
          { id: "b", text: "7" },
          { id: "c", text: "12" },
          { id: "d", text: "√7" },
          { id: "e", text: "25" },
        ],
        correctOptionId: "a",
        explanation:
          "|v| = √(3² + 4²) = √(9 + 16) = √25 = 5. Das 3-4-5-Dreieck ist das bekannteste pythagoräische Tripel und sollte sofort erkannt werden.",
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
        {
          question:
            "Welche Aussagen über Vektoroperationen sind richtig?\n\n1. Der Betrag von (3, 4) ist 5.\n2. Vektoraddition ist nicht kommutativ.\n3. Der Einheitsvektor hat den Betrag 1.\n4. Parallele Vektoren sind immer gleich lang.\n5. Der Verbindungsvektor von A nach B ist B − A.",
          options: ["Nur 1 und 3", "Nur 2 und 4", "Nur 1, 3 und 5", "Nur 1, 4 und 5", "Alle"],
          correctIndex: 2,
          explanation:
            "Aussagen 1, 3 und 5 sind korrekt. Aussage 1: |(3,4)| = √(9+16) = √25 = 5 (pythagoräisches Tripel) ✓. Aussage 2 ist falsch: Vektoraddition ist kommutativ: a + b = b + a ✓. Aussage 3: Der Einheitsvektor ê = v/|v| hat per Definition Betrag 1 ✓. Aussage 4 ist falsch: Parallele Vektoren haben die gleiche Richtung, aber nicht notwendig die gleiche Länge — z. B. (1,2) und (3,6) sind parallel, aber |( 1,2)| = √5 ≠ |(3,6)| = 3√5. Aussage 5: Verbindungsvektor AB = rB − rA = Ziel minus Start ✓.",
          difficulty: 2,
          tags: ["typ-k", "vektoroperationen", "vektorrechnung"],
        },
      ],
      diagram: "vector-addition",
    },

    // ─────────────────────────────────────────────────────────────────
    // UK ma-6-02: Skalarprodukt und Kreuzprodukt
    // HINWEIS: MedAT 2026 Stichwortliste nennt nur "Skalarprodukt".
    // Kreuzprodukt-Inhalte gehen über den offiziellen Scope hinaus,
    // bleiben aber als sekundäre Vertiefung erhalten.
    // ─────────────────────────────────────────────────────────────────
    {
      id: "ma-6-02",
      title: "Skalarprodukt und Kreuzprodukt",
      imageUrl: "/images/bms/bio-muskelfaser.jpg",
      imageCaption:
        "Abb.: Drehmoment am Gelenk — Kreuzprodukt in der Biomechanik (OpenStax, CC BY 4.0)",
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

{{DIAGRAM:vector-addition}}

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

{{DIAGRAM:coordinate-system}}

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
        text: "Das Skalarprodukt zweier Vektoren ist 0. Was bedeutet das?",
        options: [
          { id: "a", text: "Die Vektoren sind parallel" },
          { id: "b", text: "Die Vektoren stehen senkrecht aufeinander" },
          { id: "c", text: "Beide Vektoren haben Betrag 0" },
          { id: "d", text: "Die Vektoren zeigen in dieselbe Richtung" },
          { id: "e", text: "Die Vektoren haben gleichen Betrag" },
        ],
        correctOptionId: "b",
        explanation:
          "Skalarprodukt = |a|×|b|×cos θ = 0. Da cos 90° = 0, stehen die Vektoren senkrecht (orthogonal) aufeinander. Dies ist DER Schnelltest für Orthogonalität.",
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
        {
          question: "Welche Aussage über Skalarprodukt und Kreuzprodukt ist FALSCH?",
          options: [
            "Das Kreuzprodukt ist kommutativ: $\\vec{a} \\times \\vec{b} = \\vec{b} \\times \\vec{a}$",
            "Skalarprodukt = 0 bedeutet Orthogonalität",
            "Das Kreuzprodukt liefert einen Vektor, der senkrecht auf beiden Ausgangsvektoren steht",
            "Mechanische Arbeit W = $\\vec{F} \\cdot \\vec{s}$ nutzt das Skalarprodukt",
            "$\\cos(90°) = 0$, daher ist das Skalarprodukt senkrechter Vektoren null",
          ],
          correctIndex: 0,
          explanation:
            "Aussage A ist falsch: Das Kreuzprodukt ist antikommutativ: $\\vec{a} \\times \\vec{b} = -(\\vec{b} \\times \\vec{a})$. Das Vertauschen der Reihenfolge dreht das Vorzeichen um. Alle anderen Aussagen sind korrekt: Skalarprodukt = 0 ist der Schnelltest für Orthogonalität (B), das Kreuzprodukt steht senkrecht auf beiden Vektoren (C), mechanische Arbeit ist ein Skalarprodukt (D), und cos(90°) = 0 erklärt, warum orthogonale Vektoren Skalarprodukt 0 haben (E).",
          difficulty: 2,
          tags: ["falsch-aussage", "skalarprodukt", "kreuzprodukt"],
        },
      ],
    },
    // NOTE: ma-6-03 (Geraden, Ebenen, Matrizen) und ma-6-04 (Abstandsberechnungen)
    // wurden archiviert → _archiv/mathematik/kap6-archived-uks.ts
    // Grund: Nicht in der MedAT 2026 Stichwortliste für Vektorrechnung enthalten.
  ],
};
