import type { Kapitel } from "../types";

export const mathKap6: Kapitel = {
  id: "math-kap6",
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
      content: `## Einleitung

Wo Physik auf Medizin trifft, treffen wir auf Vektoren: Blutflussrichtung und -geschwindigkeit, Herzachse im EKG, Muskelkräfte an Gelenken — all das sind gerichtete Größen. Ein Vektor hat Betrag und Richtung, im Gegensatz zu einem Skalar (nur Betrag, z.B. Temperatur). Für den MedAT sind Vektordefinition, Addition, Skalarmultiplikation, Betrag, Einheitsvektor und Zerlegung in Komponenten prüfungsrelevant.

Ein **Vektor** ist eine gerichtete Größe: Er besitzt sowohl einen **Betrag** (Länge) als auch eine **Richtung**. Im Gegensatz dazu ist ein **Skalar** eine reine Zahlgröße ohne Richtung (z. B. Temperatur, Masse, Energie). Vektoren werden grafisch als Pfeile dargestellt und algebraisch als Spaltenvektoren geschrieben:

$$\\vec{a} = \\begin{pmatrix} a_1 \\\\ a_2 \\\\ a_3 \\end{pmatrix}$$

Der Betrag eines Vektors ergibt sich aus dem verallgemeinerten Satz des Pythagoras im Raum:

$$|\\vec{v}| = \\sqrt{v_1^2 + v_2^2 + v_3^2}$$

Im zweidimensionalen Fall entfällt die dritte Komponente: $|\\vec{v}| = \\sqrt{v_1^2 + v_2^2}$. Der **Nullvektor** $\\vec{0} = (0, 0, 0)^\\top$ hat Betrag 0 und keine definierte Richtung — er ist das neutrale Element der Vektoraddition.

> **Merke:** Vektoren beschreiben gerichtete Größen (Kraft, Geschwindigkeit, Verschiebung). Skalare beschreiben ungerichtete Größen (Temperatur, Masse, Energie). Diese Unterscheidung ist in der Physik und Medizin fundamental.

## Vektoroperationen

**Addition** zweier Vektoren erfolgt komponentenweise: $\\vec{a} + \\vec{b} = (a_1+b_1,\\, a_2+b_2,\\, a_3+b_3)^\\top$. Geometrisch entspricht dies der **Parallelogrammregel**: Beide Vektoren werden am selben Ausgangspunkt angetragen, die Diagonale des Parallelogramms ist der Summenvektor (Resultierende). Alternativ kann man die Vektoren „hintereinanderhängen" (Spitze-an-Schaft-Methode): Der Summenvektor zeigt vom Anfang des ersten zum Ende des zweiten Vektors.

**Subtraktion** $\\vec{a} - \\vec{b}$ ist äquivalent zur Addition von $\\vec{a}$ und $(-\\vec{b})$. Geometrisch ist $\\vec{a} - \\vec{b}$ die zweite Diagonale des Parallelogramms.

**Skalare Multiplikation** $\\lambda \\cdot \\vec{v}$ streckt oder staucht den Vektor: Für $|\\lambda| > 1$ wird der Vektor verlängert, für $0 < |\\lambda| < 1$ verkürzt; für $\\lambda < 0$ kehrt sich zusätzlich die Richtung um. Der Betrag skaliert linear: $|\\lambda \\vec{v}| = |\\lambda| \\cdot |\\vec{v}|$. Zwei Vektoren sind **parallel** (kollinear), wenn einer ein skalares Vielfaches des anderen ist: $\\vec{a} = k \\cdot \\vec{b}$ für ein $k \\neq 0$.

**Rechengesetze der Vektoraddition:**
- Kommutativgesetz: $\\vec{a} + \\vec{b} = \\vec{b} + \\vec{a}$
- Assoziativgesetz: $(\\vec{a} + \\vec{b}) + \\vec{c} = \\vec{a} + (\\vec{b} + \\vec{c})$
- Distributivgesetz: $\\lambda(\\vec{a} + \\vec{b}) = \\lambda\\vec{a} + \\lambda\\vec{b}$

## Linearkombination und lineare Unabhängigkeit

Eine **Linearkombination** mehrerer Vektoren ist eine Summe der Form $\\lambda_1 \\vec{v_1} + \\lambda_2 \\vec{v_2} + \\ldots$ mit skalaren Koeffizienten $\\lambda_i$. Vektoren heißen **linear unabhängig**, wenn keiner von ihnen als Linearkombination der anderen darstellbar ist, d. h. $\\lambda_1 \\vec{v_1} + \\lambda_2 \\vec{v_2} = \\vec{0}$ nur für $\\lambda_1 = \\lambda_2 = 0$ gilt.

> **Merke:** Zwei Vektoren sind genau dann linear abhängig, wenn sie parallel (kollinear) sind. Drei Vektoren im ℝ³ sind linear abhängig, wenn sie in einer Ebene liegen (koplanar).

**Basisvektoren** spannen den gesamten Raum auf. Im $\\mathbb{R}^3$ bilden $\\vec{e_1}=(1,0,0)^\\top$, $\\vec{e_2}=(0,1,0)^\\top$, $\\vec{e_3}=(0,0,1)^\\top$ die Standardbasis (auch: kanonische Basis). Jeder Vektor lässt sich eindeutig als Linearkombination dieser Basisvektoren schreiben: $\\vec{v} = v_1 \\vec{e_1} + v_2 \\vec{e_2} + v_3 \\vec{e_3}$. Im $\\mathbb{R}^n$ benötigt man genau $n$ linear unabhängige Vektoren als Basis — diese Zahl heißt **Dimension** des Raumes.

## Einheitsvektor

Der **Einheitsvektor** $\\hat{e}$ zeigt in dieselbe Richtung wie $\\vec{v}$, hat aber den Betrag 1:

$$\\hat{e} = \\frac{\\vec{v}}{|\\vec{v}|}$$

Die Berechnung des Einheitsvektors wird auch **Normierung** genannt. Voraussetzung: $\\vec{v} \\neq \\vec{0}$, da durch den Betrag dividiert wird. Einheitsvektoren geben reine Richtungsinformationen wieder und sind essentiell bei der Zerlegung von Kräften in Komponenten.

**MedAT-typische Aufgabe:** Gegeben $\\vec{v} = (3, 4)$. Berechne den Einheitsvektor.
- Betrag: $|\\vec{v}| = \\sqrt{9 + 16} = 5$
- Einheitsvektor: $\\hat{e} = \\frac{1}{5}(3, 4) = (0{,}6;\\; 0{,}8)$
- Probe: $|\\hat{e}| = \\sqrt{0{,}36 + 0{,}64} = 1$ ✓

## Ortsvektor und Verbindungsvektor

Der **Ortsvektor** $\\vec{r}_P$ eines Punktes $P(x, y, z)$ zeigt vom Koordinatenursprung zum Punkt: $\\vec{r}_P = (x, y, z)^\\top$. Der **Verbindungsvektor** von Punkt $A$ nach Punkt $B$ wird berechnet als:

$$\\vec{AB} = \\vec{r}_B - \\vec{r}_A = (b_1 - a_1,\\; b_2 - a_2,\\; b_3 - a_3)^\\top$$

> **Merke:** Verbindungsvektor = Ziel minus Start. Der Abstand $d(A,B) = |\\vec{AB}|$ ist der Betrag dieses Verbindungsvektors. Achtung: $\\vec{AB} = -\\vec{BA}$ — die Richtung kehrt sich um!

**Mittelpunkt** der Strecke $\\overline{AB}$: $M = \\frac{1}{2}(\\vec{r}_A + \\vec{r}_B)$ — das arithmetische Mittel der Ortsvektoren. Allgemeiner teilt ein Punkt $T$ die Strecke im Verhältnis $\\lambda:(1-\\lambda)$: $\\vec{r}_T = (1-\\lambda)\\vec{r}_A + \\lambda\\vec{r}_B$.

## Vektorielle Darstellung mit Polarkoordinaten

Ein 2D-Vektor kann statt über seine Komponenten auch über **Betrag** $r$ und **Winkel** $\\alpha$ (zur x-Achse) angegeben werden:

$$\\vec{v} = r \\cdot \\begin{pmatrix} \\cos\\alpha \\\\ \\sin\\alpha \\end{pmatrix}$$

Diese Darstellung ist besonders bei der Zerlegung von Kräften nützlich. Umrechnung: $r = |\\vec{v}|$, $\\alpha = \\arctan(v_2/v_1)$ (Quadrant beachten!).

## Rechenbeispiele

**Beispiel 1 — Verbindungsvektor und Abstand:**
Gegeben: $A(1, 3, -2)$ und $B(4, 1, 2)$.
- Verbindungsvektor: $\\vec{AB} = (4-1,\\; 1-3,\\; 2-(-2)) = (3, -2, 4)$
- Abstand: $d = |\\vec{AB}| = \\sqrt{3^2+(-2)^2+4^2} = \\sqrt{9+4+16} = \\sqrt{29} \\approx 5{,}39$
- Mittelpunkt: $M = \\frac{1}{2}((1,3,-2)+(4,1,2)) = (2{,}5;\\; 2;\\; 0)$

**Beispiel 2 — Kraftzerlegung in der Biomechanik:**
Eine Muskelkraft $\\vec{F} = (30, 40)$ N greift am Knie an. Die Achse des Unterschenkels zeigt in Richtung $\\vec{e}_x = (1, 0)$.
- Kraftkomponente entlang der Achse (Kompression): $F_{\\parallel} = \\vec{F} \\cdot \\vec{e}_x = 30$ N
- Kraftkomponente senkrecht (Scherkraft): $F_{\\perp} = \\sqrt{|\\vec{F}|^2 - F_{\\parallel}^2} = \\sqrt{2500 - 900} = 40$ N
- Die Scherkraft belastet Bänder und Menisken und ist klinisch oft der limitierende Faktor.

**Beispiel 3 — EKG-Herzachse:**
Die Ableitungen I, II, III messen Spannungsdifferenzen. Aus Ableitung I (horizontal) und aVF (vertikal nach unten) ergibt sich der Herzachsenvektor. Zeigt er z. B. nach rechts unten mit 60°, liegt eine Normalachse vor. Deviationen deuten auf Hypertrophie oder Leitungsblockierungen hin.

**Beispiel 4 — Lineare Unabhängigkeit prüfen:**
Sind $\\vec{a} = (1, 2)$ und $\\vec{b} = (3, 6)$ linear unabhängig?
- Prüfung: $\\vec{b} = 3 \\cdot \\vec{a}$ → linear **abhängig** (parallel).
- Dagegen: $\\vec{a} = (1, 2)$ und $\\vec{c} = (2, -1)$ → kein skalares $k$ mit $\\vec{c} = k \\cdot \\vec{a}$ → linear **unabhängig**.

## Klinische Bedeutung

Vektoren spielen in der Medizin eine fundamentale Rolle. In der **Biomechanik** werden Muskelkräfte und Gelenkbelastungen als Vektoren zerlegt. Die resultierende Gelenkkraft ist die Vektorsumme aller angreifenden Kräfte — bei einem Kniegelenk wirken gleichzeitig Quadrizeps, hintere Kreuzbänder und Schwerkraft, deren Resultierende die tatsächliche Belastung bestimmt. Im **EKG** wird die elektrische Herzachse als Summenvektor der Erregungsausbreitung dargestellt; der Cabrera-Kreis visualisiert diese Achse in der Frontalebene. Eine Linksachsenabweichung (>−30°) kann auf eine linksventrikuläre Hypertrophie hinweisen. Der **Blutfluss** in Gefäßen besitzt sowohl eine Geschwindigkeit (Betrag) als auch eine Fließrichtung und wird daher vektoriell beschrieben. In der **Doppler-Sonographie** misst man die Blutflussgeschwindigkeit als Vektorkomponente entlang der Schallstrahlrichtung — der gemessene Wert hängt vom Winkel zwischen Schallstrahl und Gefäß ab (Doppler-Gleichung).

## MedAT-Fokus

**Häufige Fragen:**
- Betrag eines 2D- oder 3D-Vektors berechnen (Pythagoras-Formel anwenden)
- Einheitsvektor bestimmen: Vektor durch seinen Betrag dividieren
- Zwei Vektoren komponentenweise addieren oder subtrahieren
- Lineare Abhängigkeit prüfen: Ist $\\vec{b} = k \\cdot \\vec{a}$ für ein skalares $k$?
- Verbindungsvektor und Abstand zweier Punkte berechnen

**Achtung — typische Verwechslungen:**
- Skalar ≠ Vektor: Temperatur, Energie, Masse = Skalare; Kraft, Geschwindigkeit, Verschiebung = Vektoren
- Betrag ≠ Komponentensumme: $|\\vec{v}| = \\sqrt{v_1^2+v_2^2}$, NICHT $v_1+v_2$
- Verbindungsvektor: **immer Ziel minus Start** ($\\vec{AB} = B - A$, nicht $A - B$)
- Einheitsvektor: durch den Betrag dividieren (nicht durch das Quadrat)

**Prüfungsrelevante Zahlen/Fakten:**
- Pythagoräische Tripel: **3-4-5**, 5-12-13, 8-15-17 → Betrag sofort ablesen ohne Rechnen!
- $\\sin(30°) = 0{,}5$, $\\cos(30°) = \\frac{\\sqrt{3}}{2}$; $\\sin(60°) = \\frac{\\sqrt{3}}{2}$, $\\cos(60°) = 0{,}5$
- Standardbasis $\\mathbb{R}^3$: $\\vec{e_1}=(1,0,0)$, $\\vec{e_2}=(0,1,0)$, $\\vec{e_3}=(0,0,1)$

---

## Zusammenfassung

- **Vektor**: gerichtete Größe (Betrag + Richtung); Skalar: nur Betrag; Notation: **a** = (a₁, a₂, a₃)
- **Betrag**: |**a**| = √(a₁²+a₂²+a₃²); **Einheitsvektor**: **e** = **a**/|**a**| (Betrag = 1)
- **Addition**: **a**+**b** = (a₁+b₁, a₂+b₂, a₃+b₃); Parallelogrammregel; **Subtraktion**: Differenzvektor
- **Skalarmultiplikation**: k·**a** = (k·a₁, k·a₂, k·a₃); streckt/spiegelt den Vektor
- **Klinisch**: EKG-Herzachse; Blutfluss (Doppler); Muskelkraft-Zerlegung; Vektorsumme an Gelenken`,
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
          merksatz:
            "Betrag = räumlicher Pythagoras: |v| = √(v₁² + v₂² + v₃²). Der Einheitsvektor ê = v/|v| hat stets Betrag 1.",
        },
        {
          heading: "Vektoroperationen und geometrische Interpretation",
          text: "Addition komponentenweise: $(a_1+b_1, a_2+b_2)^\\top$. Geometrisch: Parallelogrammregel (Resultierende). Skalarmultiplikation $\\lambda \\cdot \\vec{v}$ streckt (|λ|>1), staucht (|λ|<1) oder spiegelt (λ<0) den Vektor. Zwei Vektoren sind **parallel**, wenn einer ein skalares Vielfaches des anderen ist: $\\vec{a} = k \\cdot \\vec{b}$.",
          merksatz:
            "Parallelogrammregel: Die Diagonale ist der Summenvektor. Parallele Vektoren: a = k·b für ein k ≠ 0.",
        },
        {
          heading: "Linearkombination, Basis und klinische Anwendung",
          text: "Jeder Vektor im $\\mathbb{R}^3$ lässt sich als Linearkombination der drei Standardbasisvektoren eindeutig darstellen. In der Biomechanik wird eine Muskelkraft in ihre Komponenten entlang der Gelenk-Längsachse (Kompressionsanteil) und senkrecht dazu (Scherkraftanteil) zerlegt. Im EKG ergibt die Vektorsumme aller Herzaktionspotenziale den elektrischen Herzachsenvektor.",
          merksatz:
            "Klinisch: Gelenkkraft = Vektorsumme aller Muskelkräfte. EKG-Herzachse = elektrischer Summenvektor der Erregung.",
        },
      ],
      diagram: "vector-addition",

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
        question:
          "Erklären Sie den Begriff 'Vektor' und seine grundlegenden Operationen. Welche klinische Bedeutung haben Vektoren in der Medizin?",
        answer:
          "Ein Vektor ist eine gerichtete physikalische oder mathematische Größe, die durch Betrag und Richtung vollständig beschrieben wird. Im Unterschied zum Skalar (reine Zahlgröße wie Temperatur oder Masse) trägt der Vektor eine Richtungsinformation. Algebraisch wird er als Spaltenvektor $(a_1, a_2, a_3)^\\top$ dargestellt. Der Betrag $|\\vec{v}| = \\sqrt{v_1^2+v_2^2+v_3^2}$ entspricht dem verallgemeinerten Satz des Pythagoras im Raum. Die **Addition** zweier Vektoren erfolgt komponentenweise und entspricht geometrisch der Parallelogrammregel: Die Resultierende ist die Diagonale des durch beide Vektoren aufgespannten Parallelogramms. Bei der **skalaren Multiplikation** $\\lambda \\cdot \\vec{v}$ wird der Betrag mit $|\\lambda|$ skaliert; für $\\lambda < 0$ kehrt sich die Richtung um. Der **Einheitsvektor** $\\hat{e} = \\vec{v}/|\\vec{v}|$ hat genau den Betrag 1 und gibt nur die Richtung an. Klinisch sind Vektoren in der Biomechanik unverzichtbar: Muskelkräfte und Gelenkreaktionskräfte werden als Vektoren dargestellt und addiert, um die resultierende Belastung zu berechnen. Im EKG repräsentiert die Herzachse den elektrischen Summenvektor der Erregungsausbreitung und wird im Cabrera-Kreis visualisiert. Blutfluss besitzt sowohl Geschwindigkeit als auch Richtung und ist daher grundsätzlich eine vektorielle Größe.",
      },
      klinischerBezug:
        "Biomechanik: Gelenkkräfte als Vektorsummen; EKG-Herzachse als elektrischer Summenvektor (Cabrera-Kreis); Blutflussvektor in der Hämodynamik.",
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
            "Orthogonale Vektoren haben Skalarprodukt 0: a₁·b₁ + a₂·b₂ = 0.",
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
            "Linear abhängig bedeutet: einer der Vektoren lässt sich als skalares Vielfaches des anderen darstellen: a = k·b.",
            "Prüfen Sie, ob b = k·a für ein reelles k gilt, indem Sie die Komponenten vergleichen: k = a₁/b₁ = ?",
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
            "Erinnern Sie sich: Die Komponenten eines Vektors der Länge r mit Winkel α zur x-Achse sind (r·cos α, r·sin α).",
            "sin(60°) = √3/2 ≈ 0,866. Multiplizieren Sie mit dem Betrag 10.",
          ],
          tags: ["vektorkomponenten", "trigonometrie", "winkel"],
          difficulty: 3,
        },
      ],
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
        "Spatprodukt",
        "Sarrus-Regel",
        "Lorentz-Kraft",
        "Parallelogrammfläche",
      ],
      content: `## Einleitung

Stehen zwei Kräfte senkrecht aufeinander, leisten sie keine Arbeit aneinander — denn das Skalarprodukt ist null. Das Drehmoment eines Muskels ist maximal, wenn Kraft und Hebelarm rechtwinklig sind — das Kreuzprodukt ist dort maximal. Skalar- und Kreuzprodukt sind die zwei Hauptoperationen mit Vektoren. Für den MedAT sind Skalarprodukt (Winkelberechnung, Orthogonalität), Kreuzprodukt (Drehmoment, senkrechte Richtung) und Projektion prüfungsrelevant.

## Skalarprodukt

Das **Skalarprodukt** (Dot-Produkt, inneres Produkt) zweier Vektoren $\\vec{a}$ und $\\vec{b}$ ist definiert als:

$$\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3 = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos \\theta$$

Das Ergebnis ist ein **Skalar** (keine Richtung). Die geometrische Bedeutung: Das Skalarprodukt misst, wie sehr zwei Vektoren in dieselbe Richtung zeigen. Es ist **kommutativ**: $\\vec{a} \\cdot \\vec{b} = \\vec{b} \\cdot \\vec{a}$ und **distributiv**: $\\vec{a} \\cdot (\\vec{b} + \\vec{c}) = \\vec{a} \\cdot \\vec{b} + \\vec{a} \\cdot \\vec{c}$.

**Wichtige Spezialfälle:**
- $\\vec{a} \\cdot \\vec{b} = 0 \\Rightarrow$ Vektoren sind **orthogonal** (senkrecht, $\\theta = 90°$)
- $\\vec{a} \\cdot \\vec{b} > 0 \\Rightarrow$ spitzer Winkel ($\\theta < 90°$)
- $\\vec{a} \\cdot \\vec{b} < 0 \\Rightarrow$ stumpfer Winkel ($\\theta > 90°$)
- $\\vec{a} \\cdot \\vec{a} = |\\vec{a}|^2$ (Skalarprodukt mit sich selbst = Betrag zum Quadrat)

> **Merke:** Das Skalarprodukt $\\vec{a} \\cdot \\vec{b} = 0$ ist DAS zentrale Kriterium für Orthogonalität. Im MedAT wird häufig gefragt, ob zwei Vektoren senkrecht aufeinander stehen — immer über das Skalarprodukt prüfen!

**Winkelberechnung:**
$$\\cos \\theta = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}$$

Die wichtigsten Werte: $\\cos(0°) = 1$, $\\cos(60°) = 1/2$, $\\cos(90°) = 0$, $\\cos(120°) = -1/2$, $\\cos(180°) = -1$. Ein negatives Skalarprodukt zeigt einen stumpfen Winkel an.

**Mechanische Arbeit als Skalarprodukt:** Die physikalische Arbeit ist definiert als $W = \\vec{F} \\cdot \\vec{s} = |\\vec{F}| \\cdot |\\vec{s}| \\cdot \\cos\\theta$. Nur die Kraftkomponente in Bewegungsrichtung leistet Arbeit. Bei $\\theta = 90°$ (Kraft senkrecht zur Bewegung) ist $W = 0$.

## Kreuzprodukt

Das **Kreuzprodukt** (Vektorprodukt) ist nur im $\\mathbb{R}^3$ definiert und liefert einen **Vektor**:

$$\\vec{a} \\times \\vec{b} = \\begin{pmatrix} a_2 b_3 - a_3 b_2 \\\\ a_3 b_1 - a_1 b_3 \\\\ a_1 b_2 - a_2 b_1 \\end{pmatrix}$$

Dieses Ergebnis steht **senkrecht** auf beiden Ausgangsvektoren — es ist der **Normalenvektor** der von $\\vec{a}$ und $\\vec{b}$ aufgespannten Ebene.

**Betrag des Kreuzprodukts:**
$$|\\vec{a} \\times \\vec{b}| = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\sin \\theta$$

Geometrisch entspricht dies dem **Flächeninhalt des Parallelogramms**, das von $\\vec{a}$ und $\\vec{b}$ aufgespannt wird. Die **Dreiecksfläche** ist entsprechend $A_{\\triangle} = \\frac{1}{2}|\\vec{a} \\times \\vec{b}|$.

**Wichtige Eigenschaften:**
- **Antikommutativ**: $\\vec{a} \\times \\vec{b} = -(\\vec{b} \\times \\vec{a})$ — Reihenfolge vertauschen ändert das Vorzeichen!
- Parallele Vektoren ($\\theta = 0°$ oder $180°$): $\\vec{a} \\times \\vec{b} = \\vec{0}$ (da $\\sin 0° = \\sin 180° = 0$)
- Die Richtung folgt der **Rechten-Hand-Regel**: Finger von $\\vec{a}$ zu $\\vec{b}$ einrollen, Daumen zeigt in Richtung $\\vec{a} \\times \\vec{b}$
- Zyklische Eigenschaft der Standardbasis: $\\vec{e_1} \\times \\vec{e_2} = \\vec{e_3}$, $\\vec{e_2} \\times \\vec{e_3} = \\vec{e_1}$, $\\vec{e_3} \\times \\vec{e_1} = \\vec{e_2}$

| Eigenschaft | Skalarprodukt | Kreuzprodukt |
|------------|---------------|--------------|
| Ergebnis | Skalar | Vektor |
| Definiert in | ℝ² und ℝ³ | nur ℝ³ |
| Kommutativ? | Ja | Nein (antikommutativ) |
| Geometrische Bedeutung | Projektion, Winkel | Fläche, Normalenvektor |
| Null bei | Orthogonalität | Parallelität |

## Sarrus-Regel

Zur praktischen Berechnung des Kreuzprodukts wird die **Sarrus-Regel** (Determinantenentwicklung) verwendet. Man schreibt die Basisvektoren und die Komponenten in eine 3x3-Anordnung:

$$\\vec{a} \\times \\vec{b} = \\det\\begin{pmatrix} \\vec{e_1} & \\vec{e_2} & \\vec{e_3} \\\\ a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\end{pmatrix}$$

Die Entwicklung nach der ersten Zeile liefert: $\\vec{e_1}(a_2b_3-a_3b_2) - \\vec{e_2}(a_1b_3-a_3b_1) + \\vec{e_3}(a_1b_2-a_2b_1)$. Achtung auf das **Minuszeichen** vor $\\vec{e_2}$!

## Orthogonalprojektion

Die **Projektion** eines Vektors $\\vec{a}$ auf einen Vektor $\\vec{b}$ zerlegt $\\vec{a}$ in eine Komponente parallel zu $\\vec{b}$ und eine senkrecht dazu:

$$\\text{proj}_{\\vec{b}} \\vec{a} = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|^2} \\cdot \\vec{b}$$

Der **skalare Projektionswert** (Komponente von $\\vec{a}$ in Richtung $\\vec{b}$) ist:

$$\\text{comp}_{\\vec{b}} \\vec{a} = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|} = |\\vec{a}| \\cos \\theta$$

Die **senkrechte Komponente** ergibt sich als Differenz: $\\vec{a}_{\\perp} = \\vec{a} - \\text{proj}_{\\vec{b}} \\vec{a}$.

> **Merke:** Positive Projektion = spitzer Winkel; negative Projektion = stumpfer Winkel; Projektion = 0 bedeutet Orthogonalität. In der Biomechanik: Projektion auf Gelenkachse = Kompressionskraft, senkrechte Komponente = Scherkraft.

## Spatprodukt (Volumenberechnung)

Das **Spatprodukt** dreier Vektoren $\\vec{a}$, $\\vec{b}$, $\\vec{c}$ berechnet das Volumen des aufgespannten Spats (Parallelepiped):

$$V = |\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})|$$

Ist das Spatprodukt null, liegen alle drei Vektoren in einer Ebene (**koplanar**). Das Spatprodukt ist zyklisch invariant: $\\vec{a} \\cdot (\\vec{b} \\times \\vec{c}) = \\vec{b} \\cdot (\\vec{c} \\times \\vec{a}) = \\vec{c} \\cdot (\\vec{a} \\times \\vec{b})$.

## Rechenbeispiele

**Beispiel 1 — Winkelberechnung:**
$\\vec{a} = (2, 1, -1)$, $\\vec{b} = (1, -1, 2)$.
- Skalarprodukt: $2 \\cdot 1 + 1 \\cdot (-1) + (-1) \\cdot 2 = 2 - 1 - 2 = -1$
- Beträge: $|\\vec{a}| = \\sqrt{4+1+1} = \\sqrt{6}$, $|\\vec{b}| = \\sqrt{1+1+4} = \\sqrt{6}$
- $\\cos \\theta = \\frac{-1}{\\sqrt{6} \\cdot \\sqrt{6}} = \\frac{-1}{6} \\Rightarrow \\theta = \\arccos(-1/6) \\approx 99{,}6°$ (stumpfer Winkel)

**Beispiel 2 — Kreuzprodukt und Fläche:**
$\\vec{a} = (1, 2, 0)$, $\\vec{b} = (3, 0, 1)$.
- $\\vec{a} \\times \\vec{b} = (2 \\cdot 1 - 0 \\cdot 0,\\; 0 \\cdot 3 - 1 \\cdot 1,\\; 1 \\cdot 0 - 2 \\cdot 3) = (2, -1, -6)$
- Parallelogrammfläche: $|\\vec{a} \\times \\vec{b}| = \\sqrt{4+1+36} = \\sqrt{41} \\approx 6{,}40$
- Dreiecksfläche (halbes Parallelogramm): $A_{\\triangle} = \\frac{1}{2}\\sqrt{41} \\approx 3{,}20$

**Beispiel 3 — Drehmoment am Ellbogengelenk:**
Der Bizeps übt eine Kraft $\\vec{F} = (0, 120, 0)$ N am Unterarm aus. Der Hebelarm (Ansatzpunkt zum Drehpunkt) ist $\\vec{r} = (0{,}05, 0, 0)$ m.
- $\\vec{M} = \\vec{r} \\times \\vec{F} = (0, 0, 0{,}05 \\cdot 120) = (0, 0, 6)$ Nm
- Das Drehmoment von 6 Nm wirkt als Flexionsmoment und reicht aus, um einen Gegenstand von ca. 2 kg auf Unterarmlänge zu halten.

**Beispiel 4 — Orthogonalprojektion:**
Muskelkraft $\\vec{F} = (50, 80)$ N, Gelenkachse $\\vec{a} = (1, 0)$.
- Kompressionskraft (parallel): $\\text{proj}_{\\vec{a}} \\vec{F} = \\frac{50 \\cdot 1 + 80 \\cdot 0}{1} \\cdot (1,0) = (50, 0)$ N
- Scherkraft (senkrecht): $\\vec{F}_{\\perp} = (50,80) - (50,0) = (0, 80)$ N, also 80 N
- Das Verhältnis Scher-/Kompressionskraft (80/50 = 1,6) zeigt eine hohe Bänderbelastung an.

## Klinische Bedeutung

Das **Drehmoment** $\\vec{M} = \\vec{r} \\times \\vec{F}$ ist das Kreuzprodukt aus Hebelarm und Kraft und ist zentral für die Biomechanik von Gelenken. Je länger der Hebelarm und je senkrechter die Kraft, desto größer das Drehmoment ($|\\vec{M}| = |\\vec{r}| \\cdot |\\vec{F}| \\cdot \\sin\\theta$). Bei $\\theta = 90°$ ist das Drehmoment maximal — dies erklärt, warum der Bizeps am effizientesten bei 90° Ellbogenbeugung arbeitet.

In der **MRT-Sicherheit** ist die Lorentz-Kraft $\\vec{F} = q(\\vec{v} \\times \\vec{B})$ relevant: Metallische Implantate mit bewegten Ladungsträgern erfahren im starken Magnetfeld eine Kraft, die mit dem Kreuzprodukt berechnet wird. Die resultierende Kraft steht senkrecht auf Bewegungsrichtung und Magnetfeld.

Die **Orthogonalprojektion** findet klinische Anwendung bei der Zerlegung von Muskelkräften: Die Projektion einer Muskelkraft auf die Gelenkachse ergibt die Kompressionskraft, die senkrechte Komponente die Scherkraft. In der **Strahlentherapie** wird die Dosisverteilung als Projektion des Strahlenvektors auf die Gewebefläche berechnet.

Das **Spatprodukt** wird in der medizinischen Volumetrie verwendet: Das Volumen eines Organsegments (z. B. Leberlappen in der CT) kann über drei Kantenvektoren des Segments approximiert werden. Ist das Spatprodukt null, liegen die Vektoren in einer Ebene — das Volumen ist dann null.

## MedAT-Fokus

**Häufige Fragen:**
- Skalarprodukt berechnen und Orthogonalität prüfen: $\\vec{a} \\cdot \\vec{b} = 0$?
- Winkel zwischen zwei Vektoren: $\\cos\\theta = \\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}||\\vec{b}|}$ — dann $\\arccos$ anwenden
- Kreuzprodukt komponentenweise berechnen: $(a_2b_3-a_3b_2,\\; a_3b_1-a_1b_3,\\; a_1b_2-a_2b_1)$
- Betrag des Kreuzprodukts als Parallelogrammfläche interpretieren
- Drehmoment: $|\\vec{M}| = |\\vec{r}| \\cdot |\\vec{F}| \\cdot \\sin\\theta$; maximal bei $\\theta = 90°$

**Achtung — typische Verwechslungen:**
- Skalarprodukt liefert **Skalar** (keine Richtung); Kreuzprodukt liefert **Vektor** (mit Richtung)
- Kreuzprodukt ist **antikommutativ**: $\\vec{a}\\times\\vec{b} = -(\\vec{b}\\times\\vec{a})$ — Reihenfolge kritisch!
- Kreuzprodukt nur im $\\mathbb{R}^3$ definiert — nicht im $\\mathbb{R}^2$!
- Orthogonalität → Skalarprodukt $= 0$; Parallelität → Kreuzprodukt $= \\vec{0}$ (genau umgekehrt)

**Prüfungsrelevante Zahlen/Fakten:**
- $\\cos(90°) = 0$ → orthogonal; $\\cos(0°) = 1$ → parallel; $\\cos(180°) = -1$ → antiparallel
- $\\sin(90°) = 1$ → Kreuzprodukt maximal bei senkrechter Stellung der Vektoren
- Mechanische Arbeit: $W = \\vec{F} \\cdot \\vec{s}$ (Skalarprodukt); Drehmoment: $\\vec{M} = \\vec{r} \\times \\vec{F}$ (Kreuzprodukt)
- Sarrus-Regel: Achtung auf das **Minuszeichen** vor der mittleren Komponente $-\\vec{e_2}(\\ldots)$

---

## Zusammenfassung

- **Skalarprodukt**: **a**·**b** = a₁b₁+a₂b₂+a₃b₃ = |**a**|·|**b**|·cos φ; Ergebnis ist Skalar
- **Orthogonalität**: **a**⊥**b** ↔ **a**·**b** = 0; Winkelberechnung: cos φ = (**a**·**b**)/(|**a**|·|**b**|)
- **Projektion**: **a** auf **b**: proj = (**a**·**b**/|**b**|²)·**b**; Betrag der Projektion = (**a**·**b**)/|**b**|
- **Kreuzprodukt**: **a**×**b** steht senkrecht auf **a** und **b**; |**a**×**b**| = |**a**|·|**b**|·sin φ
- **Drehmoment**: **M** = **r**×**F**; |M| = r·F·sin θ; max. bei 90° (Bizeps); Richtung: Rechte-Hand-Regel
- **Klinisch**: Gelenkbelastung (Kreuzprodukt); MRT-Sicherheit (Lorentz-Kraft); Strahlentherapiedosis`,
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
          merksatz:
            "Skalarprodukt = 0 → orthogonal. Skalarprodukt > 0 → spitzer Winkel. Skalarprodukt < 0 → stumpfer Winkel.",
        },
        {
          heading: "Kreuzprodukt — Definition, Eigenschaften und Berechnung",
          text: "Das Kreuzprodukt $\\vec{a}\\times\\vec{b}$ ist nur im ℝ³ definiert und ergibt einen Vektor senkrecht zu $\\vec{a}$ und $\\vec{b}$. Sein Betrag $|\\vec{a}\\times\\vec{b}| = |\\vec{a}||\\vec{b}|\\sin\\theta$ entspricht der Fläche des aufgespannten Parallelogramms. Die Richtung folgt der Rechten-Hand-Regel. Antikommutativ: $\\vec{a}\\times\\vec{b} = -(\\vec{b}\\times\\vec{a})$. Für parallele Vektoren gilt $\\vec{a}\\times\\vec{b} = \\vec{0}$.",
          merksatz:
            "Kreuzprodukt → Vektor ⊥ zu beiden; |a×b| = Parallelogrammfläche; antikommutativ: a×b = −(b×a).",
        },
        {
          heading: "Klinische Anwendungen: Drehmoment und Lorentz-Kraft",
          text: "Das Drehmoment $\\vec{M} = \\vec{r} \\times \\vec{F}$ ist das Kreuzprodukt aus Hebelarm $\\vec{r}$ und Kraft $\\vec{F}$. Im Knie beispielsweise ergibt die Quadrizepskraft mal dem Hebelarm das Streckmoment. In der MRT-Sicherheit ist die Lorentz-Kraft $\\vec{F} = q(\\vec{v}\\times\\vec{B})$ relevant: Ein im Magnetfeld bewegtes metallisches Implantat kann eine Kraft durch das Kreuzprodukt aus Ladungsgeschwindigkeit und Magnetfeld erfahren. Das Skalarprodukt erlaubt die Projektion einer Kraft auf eine Bewegungsrichtung (mechanische Arbeit: $W = \\vec{F}\\cdot\\vec{s}$).",
          merksatz:
            "Drehmoment M = r × F (Kreuzprodukt). Mechanische Arbeit W = F · s (Skalarprodukt). MRT: Lorentz-Kraft F = q·(v×B).",
        },
        {
          heading: "Orthogonalprojektion und Spatprodukt",
          text: "Die Projektion $\\text{proj}_{\\vec{b}}\\vec{a} = \\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{b}|^2}\\cdot\\vec{b}$ zerlegt einen Vektor in parallele und senkrechte Komponenten. In der Biomechanik wird damit die Kompressionskraft (entlang der Gelenkachse) von der Scherkraft (senkrecht dazu) getrennt. Das Spatprodukt $V = |\\vec{a}\\cdot(\\vec{b}\\times\\vec{c})|$ berechnet das Volumen eines Parallelepipeds. Drei koplanare Vektoren haben Spatprodukt null. In der CT-Volumetrie dient es zur Berechnung von Organsegment-Volumina.",
          merksatz:
            "Projektion von a auf b: proj = (a·b/|b|²)·b. Spatprodukt = |a·(b×c)| = Volumen des Spats. Spatprodukt = 0 → koplanar.",
        },
      ],
      diagram: "vector-addition",

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
        "Projektion von a auf b: proj = (a·b/|b|²)·b — zerlegt Kraft in Kompressions- und Scherkomponente.",
        "Spatprodukt: V = |a·(b×c)| — Volumen des aufgespannten Parallelepipeds.",
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question:
          "Was ist der Unterschied zwischen Skalarprodukt und Kreuzprodukt? Beschreiben Sie Berechnung, Ergebnis und je eine klinische Anwendung.",
        answer:
          "Das **Skalarprodukt** $\\vec{a}\\cdot\\vec{b} = a_1b_1+a_2b_2+a_3b_3 = |\\vec{a}||\\vec{b}|\\cos\\theta$ liefert einen **Skalar** ohne Richtung. Es misst die Übereinstimmung der Richtungen zweier Vektoren. Ist das Skalarprodukt null, stehen die Vektoren senkrecht (orthogonal) aufeinander. Bei positivem Wert schließen sie einen spitzen Winkel ein, bei negativem einen stumpfen. Klinisch wird das Skalarprodukt für die mechanische Arbeit $W = \\vec{F}\\cdot\\vec{s}$ verwendet: Nur die Kraftkomponente in Bewegungsrichtung leistet Arbeit. Das **Kreuzprodukt** $\\vec{a}\\times\\vec{b}$ ist nur im $\\mathbb{R}^3$ definiert und liefert einen **Vektor**, der senkrecht auf beiden Ausgangsvektoren steht. Sein Betrag $|\\vec{a}\\times\\vec{b}| = |\\vec{a}||\\vec{b}|\\sin\\theta$ entspricht dem Flächeninhalt des von beiden Vektoren aufgespannten Parallelogramms. Die Richtung folgt der Rechten-Hand-Regel. Im Gegensatz zum Skalarprodukt ist das Kreuzprodukt **antikommutativ**: $\\vec{a}\\times\\vec{b} = -(\\vec{b}\\times\\vec{a})$. Klinisch ist das Drehmoment $\\vec{M} = \\vec{r}\\times\\vec{F}$ die wichtigste Anwendung: Es beschreibt die Dreheigenschaft einer Kraft um einen Gelenkpunkt und ist zentral für das Verständnis von Hebelkräften in der Biomechanik.",
      },
      klinischerBezug:
        "Drehmoment M = r×F an Gelenken (Biomechanik); Lorentz-Kraft F = q·(v×B) für MRT-Implantat-Sicherheit; mechanische Arbeit W = F·s (Skalarprodukt).",
      selfTest: [
        {
          question:
            "Berechnen Sie das Skalarprodukt von $\\vec{a} = (3, -2, 1)$ und $\\vec{b} = (1, 4, -2)$.",
          options: ["−7", "7", "−3", "3", "5"],
          correctIndex: 0,
          explanation:
            "Das Skalarprodukt wird komponentenweise berechnet: $\\vec{a}\\cdot\\vec{b} = 3\\cdot1 + (-2)\\cdot4 + 1\\cdot(-2) = 3 - 8 - 2 = -7$. Das negative Ergebnis bedeutet, dass der Winkel zwischen den Vektoren stumpf ist ($\\theta > 90°$). Eine häufige Fehlerquelle ist das Übersehen der negativen Vorzeichen bei den Komponenten.",
          hints: [
            "Skalarprodukt: a₁·b₁ + a₂·b₂ + a₃·b₃ — multiplizieren Sie die entsprechenden Komponenten und addieren Sie.",
            "Beachten Sie die Vorzeichen: (−2)·4 = −8 und 1·(−2) = −2.",
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
            "Berechnen Sie cos θ = (a·b) / (|a|·|b|) und bestimmen Sie daraus den Winkel.",
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
            "Da r und F senkrecht stehen (x- und y-Richtung), gilt |M| = |r|·|F|·sin(90°) = |r|·|F|·1.",
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
            "Berechnen Sie cos θ = (a·b) / (|a|·|b|). Das negative Ergebnis deutet auf einen stumpfen Winkel hin.",
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
      content: `## Einleitung

Ein Strahlengang in der Radiologie ist eine Gerade im Raum. Eine CT-Schnittebene ist eine Ebene. Und die CT-Bildrekonstruktion löst ein gigantisches lineares Gleichungssystem — das sind Matrizen. Geraden, Ebenen und Matrizen beschreiben geometrische Objekte im 3D-Raum und ermöglichen systematische Lösungsverfahren. Für den MedAT sind Geradenparameter, Ebenengleichungen, LGS lösen (Gauß), Determinante und 2×2-Matrixinversion prüfungsrelevant.

## Geradengleichung im Raum

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

**Matrizenprodukt:** $A$ (m×n) mal $B$ (n×p) = $C$ (m×p). Das Element $C_{ij} = \\sum_k A_{ik} B_{kj}$ (Zeile von $A$ mal Spalte von $B$). Matrizenmultiplikation ist i. A. **nicht kommutativ**: $A \\cdot B \\neq B \\cdot A$.

> **Merke:** Dimensionsregel: (m×n) · (n×p) = (m×p). Die inneren Dimensionen müssen übereinstimmen! Wenn A 3 Spalten und B 3 Zeilen hat, ist das Produkt definiert.

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

In der **Pharmakologie** werden Kompartimentmodelle (z. B. Zwei-Kompartiment-Modell für Medikamentenverteilung) als Matrizendifferentialgleichungen formuliert. Die Eigenwerte der Systemmatrix bestimmen die Halbwertszeiten der Verteilungs- und Eliminationsphasen. Bei der **MRT-Bildgebung** werden die k-Raum-Daten durch Fourier-Transformation (ebenfalls Matrizenoperationen) in ein Bild umgerechnet.

## MedAT-Fokus

**Häufige Fragen:**
- Normalenvektor aus Koordinatenform direkt ablesen: $ax+by+cz=d$ → $\\vec{n}=(a,b,c)$
- Determinante einer 2×2-Matrix berechnen: $\\det = ad - bc$
- Punkt auf Gerade prüfen: in Parameterform einsetzen, konsistentes $t$ suchen
- Dimensionsregel bei Matrizenmultiplikation: $(m\\times n) \\cdot (n\\times p) = (m\\times p)$
- Inverse 2×2-Matrix berechnen (Hauptdiag. tauschen, Nebendiag. negieren, durch det dividieren)

**Achtung — typische Verwechslungen:**
- Determinante $= 0$ → Matrix ist **singulär** (keine Inverse, kein eindeutiges LGS) — bei det $\\neq 0$ ist sie regulär
- Matrizenmultiplikation ist **nicht kommutativ**: $A \\cdot B \\neq B \\cdot A$ im Allgemeinen
- Normalenvektor steht **senkrecht** auf der Ebene — er liegt nicht in der Ebene!
- Cramersche Regel: Die **$i$-te Spalte** von $A$ wird durch $\\vec{b}$ ersetzt (nicht die $i$-te Zeile)

**Prüfungsrelevante Zahlen/Fakten:**
- Determinante 2×2: $\\det\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix} = ad - bc$ (Hauptdiag. minus Nebendiag.)
- Inverse 2×2: $A^{-1} = \\frac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$ — nur bei $\\det \\neq 0$ definiert
- CT-Rekonstruktion: Radon-Transformation + gefilterte Rückprojektion = Matrizenoperationen auf Sinogramm

---

## Zusammenfassung

- **Geradengleichung** (Parameterform): **x** = **p** + t·**v**; p = Stützpunkt; v = Richtungsvektor; t ∈ ℝ
- **Ebenengleichung**: Normalenform **n**·(**x**−**p**) = 0; Koordinatenform ax+by+cz = d; Parameterform
- **LGS (Gauß)**: Stufenform durch Zeilenoperationen; eindeutig/keine/unendlich viele Lösungen
- **Cramer-Regel** (2×2): x = det_x/det_A; y = det_y/det_A; det(2×2) = ad−bc
- **Inverse 2×2**: A⁻¹ = (1/det)·[[d,−b],[−c,a]]; existiert nur wenn det ≠ 0
- **Klinisch**: CT-Rekonstruktion (LGS mit Millionen Gleichungen); PCA in Bioinformatik (Eigenwerte)`,
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
          merksatz:
            "Gerade: r = r₀ + t·d (Stützvektor + Vielfaches des Richtungsvektors). Ebene-Normalenform: n·(r−r₀)=0.",
        },
        {
          heading: "Matrizenrechnung — Grundoperationen und Determinante",
          text: "Matrizen werden elementweise addiert; das Produkt $A\\cdot B$ erfordert gleiche innere Dimensionen (n) und ist nicht kommutativ. Die Transponierte $A^\\top$ entsteht durch Zeile-Spalte-Tausch. Die Determinante einer 2×2-Matrix: $\\det(A) = ad-bc$. Ist sie null, sind die Zeilen linear abhängig — das entsprechende LGS hat keine eindeutige Lösung. Wichtige Anwendung: Prüfung auf lineare Unabhängigkeit von Vektoren.",
          merksatz:
            "Matrizenprodukt: m×n · n×p = m×p. Determinante 2×2: ad−bc. det = 0 → linear abhängig, kein eindeutiges LGS.",
        },
        {
          heading: "Klinische Anwendungen: CT und Bioinformatik",
          text: "CT-Bildrekonstruktion: Die gemessenen Röntgenabsorptionsdaten werden als Sinogramm gespeichert und durch Matrizenoperationen (gefilterte Rückprojektion) in ein 3D-Volumenbild umgerechnet. Bioinformatik: Genexpressionsdaten als Matrizen (Gene × Patienten). PCA (Hauptkomponentenanalyse) nutzt Eigenvektoren und Eigenwerte dieser Matrizen, um Datenmuster zu erkennen und Dimensionen zu reduzieren. Auch lineare Regression und medizinische Bildgebung (MRT, Ultraschall-Beamforming) stützen sich auf Matrizenalgebra.",
          merksatz:
            "CT-Rekonstruktion = Matrizenoperationen (Rückprojektion). Bioinformatik: Genmatrix (Gene × Patienten). PCA nutzt Eigenvektoren.",
        },
        {
          heading: "Inverse Matrix, LGS und Eigenwerte",
          text: "Die inverse Matrix $A^{-1}$ existiert nur bei $\\det(A) \\neq 0$. Fur 2×2: $A^{-1} = \\frac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$. Die Cramersche Regel lost ein LGS uber Determinanten: $x_i = \\det(A_i)/\\det(A)$, wobei $A_i$ die $i$-te Spalte durch den Losungsvektor ersetzt. Eigenwerte $\\lambda$ erfullen $\\det(A-\\lambda E)=0$; der zugehorige Eigenvektor wird nur gestreckt, nicht gedreht. Eigenwerte sind zentral fur PCA, Schwingungsanalyse und pharmakokinetische Kompartimentmodelle.",
          merksatz:
            "Inverse: A⁻¹ = (1/det)·adj(A). Cramer: xᵢ = det(Aᵢ)/det(A). Eigenwert: A·v = λ·v — Richtung bleibt, nur Betrag andert sich.",
        },
      ],
      diagram: "vector-addition",
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
        "Inverse 2×2: A⁻¹ = (1/det)·(d, −b; −c, a) — nur bei det ≠ 0.",
        "Cramersche Regel: xᵢ = det(Aᵢ)/det(A) — spaltenweise Determinantenberechnung.",
        "Eigenwert λ: A·v = λ·v → det(A−λE) = 0 (charakteristisches Polynom).",
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
            "Überprüfen Sie jede Antwortoption: Gibt es ein t, sodass (1,2,3) + t·(1,0,−1) = Antwortoption?",
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
            "A ist 2×2, B ist 2×1 → Ergebnis C ist 2×1. $C_{11} = 1\\cdot1+2\\cdot0 = 1$; $C_{21} = 3\\cdot1+4\\cdot0 = 3$. Also $C = (1,3)^\\top$. Beim Matrizenprodukt wird jede Zeile von A mit der (einzigen) Spalte von B skalar multipliziert. Dimensionsregel: 2×2 mal 2×1 = 2×1 — die inneren Dimensionen (beide 2) stimmen überein.",
          hints: [
            "Dimensionsregel: A ist (2×2), B ist (2×1). Das Ergebnis ist (2×1).",
            "Zeile 1 von A mal Spalte von B: 1·1 + 2·0 = 1. Zeile 2 von A mal Spalte von B: 3·1 + 4·0 = 3.",
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
            "Determinante 2×2: det(A) = a·d − b·c (Hauptdiagonale minus Nebendiagonale).",
            "Hier: a=3, b=5, c=1, d=2. Also: 3·2 − 5·1 = ?",
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
            "Merkhilfe: (m×n)·(n×p) = (m×p). Die 'innere' Dimension n muss übereinstimmen und 'verschwindet'.",
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
      content: `## Einleitung

"Wie weit ist der Tumor vom Rückenmark entfernt?" — diese Frage entscheidet über Bestrahlungsdosen und Schäden. Abstandsberechnungen im 3D-Raum sind in der Medizin direkt lebensrelevant. Ob Punkt zu Punkt, Punkt zu Gerade oder Punkt zu Ebene: die Vektorrechnung liefert präzise Abstände. Für den MedAT sind euklidischer Abstand, Punkt-Gerade-Abstand, Punkt-Ebene-Abstand und Schnittwinkel prüfungsrelevant.

## Abstand Punkt–Punkt

Der Abstand zweier Punkte $A$ und $B$ im dreidimensionalen Raum ist der Betrag des Verbindungsvektors:

$$d(A, B) = |\\vec{AB}| = \\sqrt{(b_1-a_1)^2 + (b_2-a_2)^2 + (b_3-a_3)^2}$$

Dies ist die **euklidische Distanz** — die direkte Verbindung ("Luftlinie") zwischen zwei Punkten. Im 2D-Fall entfällt die dritte Komponente. Diese Formel ist die Verallgemeinerung des Satzes des Pythagoras auf beliebig viele Dimensionen.

> **Merke:** Abstand = Betrag des Verbindungsvektors. Immer: Ziel minus Start, dann Betrag berechnen. Häufiger MedAT-Fehler: Vorzeichen beim Quadrieren vergessen — $(b_i - a_i)^2$ ist immer positiv!

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

**Bildgebung:** Abstände in CT/MRT-Schichtbildern werden über die euklidische Distanz berechnet, wobei die Schichtdicke als dritte Koordinate eingeht (anisotrope Voxel). Volumenmessungen nutzen die Abstandsformeln zur Bestimmung von Organgrößen, und der Punkt-Ebene-Abstand hilft bei der Beurteilung von Raumforderungen relativ zu anatomischen Leitstrukturen.

## MedAT-Fokus

**Häufige Fragen:**
- Punkt-Ebene-Abstand mit der Hesseschen Normalform berechnen (4-Schritte-Vorgehen)
- Euklidische Distanz zweier 3D-Punkte (verallgemeinerter Pythagoras)
- Lagebeziehung zweier Geraden bestimmen: parallel / identisch / schneidend / windschief
- Schnittwinkel zweier Geraden oder zweier Ebenen berechnen

**Achtung — typische Verwechslungen:**
- Gerade–Ebene-Winkel: **sin** verwenden ($\\sin\\alpha = \\frac{|\\vec{d}\\cdot\\vec{n}|}{|\\vec{d}||\\vec{n}|}$), NICHT cos!
- Gerade–Gerade und Ebene–Ebene: **cos** mit Richtungsvektoren bzw. Normalenvektoren
- Windschief gibt es nur im $\\mathbb{R}^3$ — in der Ebene ($\\mathbb{R}^2$) schneiden sich nicht-parallele Geraden immer
- Abstandsformel Punkt–Ebene: Betrag des Zählers nehmen UND durch $|\\vec{n}|$ dividieren — beides nötig!

**Prüfungsrelevante Zahlen/Fakten:**
- Merkhilfe Schnittwinkel: **G↔G und E↔E: cos; G↔E: sin** (Gerade trifft Ebene → sin)
- Strahlentherapie-Sicherheitsmarge: typisch **5–10 mm** Mindestabstand Risikorgan–Feldgrenze
- Punkt-Ebene-Formel 4 Schritte: ① Koordinatenform, ② Einsetzen, ③ Betrag, ④ durch $\\sqrt{a^2+b^2+c^2}$ teilen

---

## Zusammenfassung

- **Punkt-Punkt**: d = |**b**−**a**| = √((b₁−a₁)²+(b₂−a₂)²+(b₃−a₃)²)
- **Punkt-Gerade**: d = |(**a**−**p**)×**v**|/|**v**|; Kreuzprodukt des Verbindungsvektors mit Richtungsvektor
- **Punkt-Ebene**: d = |**n**·(**a**−**p**)|/|**n**| = |ax₀+by₀+cz₀−d|/√(a²+b²+c²)
- **Schnittwinkel**: cos φ = |**n₁**·**n₂**|/(|**n₁**|·|**n₂**|) für Ebenen; gleich für Geraden mit Richtungsvektoren
- **Klinisch**: Strahlentherapie-Sicherheitsmarge (5–10 mm); Kniewinkel via Skalarprodukt; Stereotaxie im Gehirn`,
      lernziele: [
        "Den Abstand zwischen zwei Punkten im 2D- und 3D-Raum berechnen konnen.",
        "Den Abstand eines Punktes von einer Geraden uber das Kreuzprodukt bestimmen konnen.",
        "Den Abstand eines Punktes von einer Ebene mit der Hessesche Normalform berechnen konnen.",
        "Schnittwinkel zwischen Geraden, Ebenen und Gerade-Ebene-Kombinationen berechnen konnen.",
        "Lagebeziehungen (parallel, schneidend, windschief) erkennen und den Abstand windschiefer Geraden berechnen konnen.",
      ],
      sections: [
        {
          heading: "Punkt-Punkt- und Punkt-Gerade-Abstand",
          text: "Der Abstand zweier Punkte ist der Betrag des Verbindungsvektors (euklidische Distanz). Der Punkt-Gerade-Abstand wird uber das Kreuzprodukt berechnet: $d = |\\vec{r_0P} \\times \\vec{d}| / |\\vec{d}|$. Der Zahler entspricht der Flache des aufgespannten Parallelogramms, geteilt durch die Grundseite ergibt die Hohe. In der Neurochirurgie ist die Punkt-Gerade-Distanz der Abstand der Nadelspitze vom geplanten Zugangsweg.",
          merksatz:
            "Punkt–Punkt: d = |AB| = Betrag des Verbindungsvektors. Punkt–Gerade: d = |r₀P × d| / |d| (Kreuzprodukt-Formel).",
        },
        {
          heading: "Punkt-Ebene-Abstand und Hessessche Normalform",
          text: "Der Abstand eines Punktes P von der Ebene ax+by+cz=d betragt $d = |ap_1+bp_2+cp_3-d|/\\sqrt{a^2+b^2+c^2}$. Man setzt die Koordinaten in die Ebenengleichung ein und normiert durch den Betrag des Normalenvektors. Die Hessesche Normalform ($\\vec{n_0} \\cdot \\vec{r} = d_0$ mit $|\\vec{n_0}|=1$) vereinfacht dies: Abstand = Einsetzen des Punktes, Betrag nehmen.",
          merksatz:
            "Punkt–Ebene: d = |a·p₁+b·p₂+c·p₃−d| / √(a²+b²+c²). Hessesche NF: Normalenvektor normieren, dann einfach einsetzen.",
        },
        {
          heading: "Lagebeziehungen und Schnittwinkel",
          text: "Zwei Geraden im Raum konnen parallel, identisch, schneidend oder windschief sein. Windschiefe Geraden haben keinen Schnittpunkt und sind nicht parallel — ihr Abstand wird uber das Spatprodukt berechnet. Schnittwinkel zwischen Geraden nutzen den Kosinus des Skalarprodukts der Richtungsvektoren. Zwischen Gerade und Ebene wird der Sinus (Winkel zum Normalenvektor) verwendet. Der Diederwinkel zweier Ebenen ist der Winkel zwischen ihren Normalenvektoren.",
          merksatz:
            "Windschief = nicht parallel + kein Schnittpunkt (nur im 3D). Schnittwinkel: Geraden → cos, Gerade/Ebene → sin, Ebenen → cos (mit Normalenvektoren).",
        },
        {
          heading: "Klinische Anwendungen: Strahlentherapie und Ganganalyse",
          text: "Strahlentherapie: Sicherheitsabstand Tumor–Risikorgan als Punkt-Ebene-Distanz. Ganganalyse: Gelenkwinkel (Kniebeugung) als Schnittwinkel der Oberschenkel- und Unterschenkelvektoren. Stereotaktische Chirurgie: Nadelzugang als Gerade im Raum, Zielgenauigkeit als Punkt-Gerade-Abstand. CT/MRT: Euklidische Distanzen fur Volumetrie unter Berucksichtigung der Schichtdicke.",
          merksatz:
            "Strahlentherapie: Sicherheitsabstand = Punkt-Ebene-Distanz. Ganganalyse: Kniewinkel = Schnittwinkel von Oberschenkel- und Unterschenkelvektor.",
        },
      ],
      diagram: "vector-addition",
      merksätze: [
        "Punkt–Punkt: d(A,B) = |AB| = √((b₁−a₁)² + (b₂−a₂)² + (b₃−a₃)²).",
        "Punkt–Gerade: d = |r₀P × d| / |d| — Kreuzprodukt-Formel (Flache ÷ Grundseite = Hohe).",
        "Punkt–Ebene: d = |a·p₁+b·p₂+c·p₃−d| / √(a²+b²+c²) — Hessessche Normalform.",
        "Windschief: Geraden im 3D ohne Schnittpunkt und nicht parallel.",
        "Abstand windschiefer Geraden: d = |(r₂−r₁)·(d₁×d₂)| / |d₁×d₂| (Spatprodukt).",
        "Schnittwinkel Geraden: cos α = |d₁·d₂| / (|d₁|·|d₂|) — stets spitzer Winkel.",
        "Winkel Gerade–Ebene: sin α = |d·n| / (|d|·|n|) — Komplement zum Normalenwinkel.",
        "Diederwinkel: cos α = |n₁·n₂| / (|n₁|·|n₂|) — Winkel zwischen Normalenvektoren.",
        "Strahlentherapie: Sicherheitsabstand Tumor–Risikorgan als vektorielle Distanzberechnung.",
        "Ganganalyse: Gelenkwinkel = Schnittwinkel der Knochen-Richtungsvektoren.",
      ],
      altfrage: {
        question:
          "Beschreiben Sie die Berechnung des Abstands eines Punktes von einer Ebene und erklaren Sie eine klinische Anwendung dieser Formel.",
        answer:
          "Der Abstand eines Punktes $P(p_1, p_2, p_3)$ von einer Ebene $E: ax+by+cz=d$ wird mit der Formel $d(P,E) = \\frac{|a \\cdot p_1 + b \\cdot p_2 + c \\cdot p_3 - d|}{\\sqrt{a^2+b^2+c^2}}$ berechnet. Man setzt die Koordinaten des Punktes in die linke Seite der Ebenengleichung ein und dividiert den Betrag des Ergebnisses durch die Lange des Normalenvektors $(a,b,c)$. Bei der **Hesseschen Normalform** ist der Normalenvektor bereits auf Lange 1 normiert, sodass der Abstand direkt durch Einsetzen und Betragsbildung gewonnen wird. Klinisch wird diese Formel in der **Strahlentherapie** eingesetzt: Die Feldgrenzen des Bestrahlungsfelds werden als Ebenen im 3D-Raum modelliert. Der Abstand eines Risikoorgans (z. B. Ruckenmark, dargestellt als Punkt oder Punktwolke) von der Feldgrenze bestimmt die **Sicherheitsmarge**. Ein Mindestabstand von typisch 5–10 mm muss eingehalten werden, um Strahlenschaden am gesunden Gewebe zu vermeiden. Auch in der **stereotaktischen Neurochirurgie** wird der Abstand eines Zielpunkts (z. B. Tumor im Gehirn) von umliegenden kritischen Strukturen (Gefasse, Hirnstamm) uber Abstandsformeln berechnet, um den sichersten Zugangsweg zu planen. Die Genauigkeit der Abstandsberechnung liegt im Submillimeterbereich und ist entscheidend fur den Therapieerfolg.",
      },
      klinischerBezug:
        "Strahlentherapie: Sicherheitsabstand Tumor–Risikorgan; Ganganalyse: Gelenkwinkel als Schnittwinkel; Stereotaxie: Punkt-Gerade-Abstand der Nadel zum Zielpunkt; CT-Volumetrie: euklidische Distanzen.",
      selfTest: [
        {
          question: "Berechnen Sie den Abstand der Punkte $A(1, 2, 3)$ und $B(4, 6, 3)$.",
          options: ["5", "√29", "7", "√26", "3"],
          correctIndex: 0,
          explanation:
            "$d = \\sqrt{(4-1)^2+(6-2)^2+(3-3)^2} = \\sqrt{9+16+0} = \\sqrt{25} = 5$. Da die z-Koordinaten gleich sind, reduziert sich das Problem auf den 2D-Fall mit dem pythagoraischen Tripel 3-4-5.",
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
            "d = |r₀P · d| / |d| (Skalarprodukt-Formel)",
            "d = |r₀P| − |d| (Differenz der Betrage)",
            "d = |r₀P + d| (Summe)",
            "d = |r₀P| · |d| (Produkt der Betrage)",
          ],
          correctIndex: 0,
          explanation:
            "Der Punkt-Gerade-Abstand wird uber das Kreuzprodukt berechnet: $d = \\frac{|\\vec{r_0P} \\times \\vec{d}|}{|\\vec{d}|}$. Der Zahler $|\\vec{r_0P} \\times \\vec{d}|$ ist die Flache des von $\\vec{r_0P}$ und $\\vec{d}$ aufgespannten Parallelogramms. Dividiert man durch die Grundseite $|\\vec{d}|$, erhalt man die Hohe — also den gesuchten Abstand.",
          hints: [
            "Der Abstand ist die 'Hohe' des Parallelogramms: Flache / Grundseite.",
            "Flache = |r₀P × d| (Kreuzprodukt). Grundseite = |d| (Richtungsvektor).",
          ],
          tags: ["punkt-gerade-abstand", "kreuzprodukt", "analytische-geometrie"],
          difficulty: 2,
        },
        {
          question: "Punkt $P(1, 1, 1)$, Ebene $E: x + 2y + 2z = 10$. Wie gross ist der Abstand?",
          options: ["5/3", "2", "3", "1", "7/3"],
          correctIndex: 0,
          explanation:
            "Einsetzen: $|1 + 2 \\cdot 1 + 2 \\cdot 1 - 10| = |1 + 2 + 2 - 10| = |-5| = 5$. Betrag des Normalenvektors: $|(1,2,2)| = \\sqrt{1+4+4} = 3$. Abstand: $d = 5/3 \\approx 1{,}67$. Der Normalenvektor $(1,2,2)$ hat den praktischen Betrag 3, was die Berechnung vereinfacht.",
          hints: [
            "Formel: d = |a·p₁ + b·p₂ + c·p₃ − d| / √(a²+b²+c²).",
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
            "Im dreidimensionalen Raum konnen zwei Geraden **windschief** sein: Sie haben keinen Schnittpunkt und sind nicht parallel. Dies ist nur im 3D moglich — in der Ebene (2D) schneiden sich nicht-parallele Geraden immer. Der Abstand windschiefer Geraden wird uber das Spatprodukt berechnet: $d = |(\\vec{r_2}-\\vec{r_1}) \\cdot (\\vec{d_1} \\times \\vec{d_2})| / |\\vec{d_1} \\times \\vec{d_2}|$.",
          hints: [
            "In 2D gibt es nur parallel oder schneidend. Was ist im 3D zusatzlich moglich?",
            "Wenn Geraden sich nicht schneiden und nicht parallel sind, heisst das...",
          ],
          tags: ["lagebeziehung", "windschief", "analytische-geometrie"],
          difficulty: 1,
        },
        {
          question:
            "In der Strahlentherapie wird der Sicherheitsabstand eines Risikoorgans zur Feldgrenze als welche geometrische Grosse berechnet?",
          options: [
            "Punkt-Ebene-Abstand (Organ = Punkt, Feldgrenze = Ebene)",
            "Punkt-Punkt-Abstand zwischen Tumor und Organ",
            "Winkel zwischen Strahlrichtung und Organachse",
            "Volumen des Bestrahlungsfelds",
            "Kreuzprodukt der Feldvektoren",
          ],
          correctIndex: 0,
          explanation:
            "In der Strahlentherapie wird das Risikorgan vereinfacht als Punkt (oder Punktwolke) und die Feldgrenze als Ebene im 3D-Raum modelliert. Der Sicherheitsabstand wird daher als **Punkt-Ebene-Abstand** berechnet. Ein typischer Mindestabstand zum Ruckenmark betragt 5–10 mm. Die Abstandsformel $d = |\\vec{n} \\cdot \\vec{r}_P - d_0|$ (bei normiertem Normalenvektor) liefert diesen Wert direkt aus den 3D-Koordinaten des CT-Datensatzes.",
          hints: [
            "Die Feldgrenze ist eine Flache im Raum — mathematisch eine Ebene.",
            "Das Risikorgan wird als Punkt im 3D-Raum modelliert. Welche Distanzformel passt?",
          ],
          tags: ["strahlentherapie", "punkt-ebene-abstand", "klinische-anwendung"],
          difficulty: 2,
        },
      ],
    },
  ],
};
