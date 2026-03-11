// ─────────────────────────────────────────────────────────────────
// Archivierte UKs aus kap6-vektorrechnung.ts
// Grund: Nicht in der offiziellen MedAT 2026 Stichwortliste enthalten.
// MedAT 2026 Vektorrechnung umfasst nur: Betrag, Winkel, Einheitsvektor,
// Normalvektor, Vektoraddition/-subtraktion, Skalarprodukt.
// ─────────────────────────────────────────────────────────────────

import type { Unterkapitel } from "../../types";

export const archivedMathVektorUKs: Unterkapitel[] = [
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
      "Sarrus-Regel",
      "Inverse Matrix",
      "Lineares Gleichungssystem",
      "Gauß-Verfahren",
      "Cramersche Regel",
      "CT-Bildrekonstruktion",
    ],
    content: `Bei einer CT-gesteuerten Biopsie sticht der Radiologe eine Nadel durch die Haut Richtung Tumor. Die Nadelspitze startet an einem Punkt, bewegt sich geradlinig in eine bestimmte Richtung — mathematisch ist das nichts anderes als eine **Gerade im Raum**. Der Tumor selbst liegt in einer bestimmten Gewebeschicht, die sich als **Ebene** modellieren lässt. Und die Dosisberechnung bei einer anschließenden Chemotherapie? Drei Medikamente, drei Organe, unterschiedliche Verteilungskoeffizienten — das ergibt eine **Matrix**. Geraden, Ebenen und Matrizen sind das Handwerkszeug, mit dem solche 3D-Probleme lösbar werden.

## Geraden im Raum: Parameterform

Die Nadelbahn der Biopsie lässt sich durch einen Startpunkt und eine Richtung beschreiben. Mathematisch heißt das **Parameterform**:

$$\\vec{r} = \\vec{r_0} + t \\cdot \\vec{d}, \\quad t \\in \\mathbb{R}$$

- $\\vec{r_0}$ = **Stützvektor** (Einstichstelle, ein konkreter Punkt auf der Geraden)
- $\\vec{d}$ = **Richtungsvektor** (Nadelrichtung)
- $t$ = Parameter: $t = 0$ ergibt den Stützpunkt, $t = 1$ den Punkt $\\vec{r_0} + \\vec{d}$

**Gerade durch zwei Punkte aufstellen:** Gegeben $A$ und $B$, wähle $\\vec{r_0} = A$ und $\\vec{d} = \\vec{AB} = B - A$.

**Punktprobe — liegt ein Punkt auf der Geraden?** Setze die Koordinaten von $P$ ein und löse nach $t$. Liefern alle drei Gleichungen **denselben** $t$-Wert, liegt $P$ auf der Geraden.

**Rechenbeispiel — Nadelweg:**
Einstich bei $A(1, 2, 3)$, Zielpunkt $B(4, 0, 1)$.
- *Denkprozess:* Richtungsvektor = Ziel minus Start: $\\vec{d} = (4{-}1,\\; 0{-}2,\\; 1{-}3) = (3, -2, -2)$
- Parameterform: $\\vec{r} = (1,2,3) + t \\cdot (3,-2,-2)$
- Punktprobe $P(7,-2,-1)$: Einsetzen ergibt $t = 2$ in allen drei Komponenten ✓

> **Merke:** Gerade = Stützvektor + Parameter $\\times$ Richtungsvektor. Zwei Punkte bestimmen genau eine Gerade. Bei der Punktprobe muss $t$ in **allen** Koordinaten gleich sein!

---

## Ebenen im Raum

Während eine Gerade eindimensional durch den Raum läuft, breitet sich eine Ebene zweidimensional aus — etwa die Schnittebene eines CT-Scans. Es gibt drei gleichwertige Darstellungen:

**Normalenform:** $\\vec{n} \\cdot (\\vec{r} - \\vec{r_0}) = 0$
- $\\vec{n}$ = **Normalenvektor** (steht senkrecht auf der Ebene)
- Jeder Vektor, der in der Ebene liegt, hat mit $\\vec{n}$ das Skalarprodukt 0

**Koordinatenform:** $ax + by + cz = d$
- Die Koeffizienten $(a, b, c)$ **sind** der Normalenvektor — direkt ablesbar!
- $d$ ergibt sich durch Einsetzen eines bekannten Ebenenpunkts

**Parameterform:** $\\vec{r} = \\vec{r_0} + s \\cdot \\vec{d_1} + t \\cdot \\vec{d_2}$
- Zwei linear unabhängige Richtungsvektoren spannen die Ebene auf
- Normalenvektor per Kreuzprodukt: $\\vec{n} = \\vec{d_1} \\times \\vec{d_2}$

{{DIAGRAM:plane-normal-form}}

**Rechenbeispiel — Ebene aus drei Punkten (typische MedAT-Aufgabe):**
$A(1,0,0)$, $B(0,2,0)$, $C(0,0,3)$:
- *Denkprozess:* Zwei Richtungsvektoren bilden: $\\vec{d_1} = B - A = (-1,2,0)$, $\\vec{d_2} = C - A = (-1,0,3)$
- Normalenvektor per Kreuzprodukt: $\\vec{n} = (-1,2,0) \\times (-1,0,3) = (6, 3, 2)$
- Koordinatenform: $6x + 3y + 2z = d$. Punkt $A$ einsetzen: $6 \\cdot 1 = 6$ → also $6x + 3y + 2z = 6$

> **Merke:** In der Koordinatenform $ax + by + cz = d$ liest man den Normalenvektor $(a,b,c)$ direkt ab. Umrechnung Parameter → Koordinate: Kreuzprodukt der Richtungsvektoren bildet $\\vec{n}$, dann $d = \\vec{n} \\cdot \\vec{r_0}$.

---

## Matrizen: Rechnen mit Zahlentabellen

Von Geraden und Ebenen ist es nur ein kleiner Schritt zu Matrizen — denn ein lineares Gleichungssystem (LGS) mit mehreren Unbekannten lässt sich kompakt als Matrizengleichung schreiben. Eine **Matrix** ist ein rechteckiges Zahlenschema mit $m$ Zeilen und $n$ Spalten.

**Addition:** Nur bei gleicher Größe, elementweise: $(A+B)_{ij} = A_{ij} + B_{ij}$

**Skalare Multiplikation:** Jedes Element wird mit dem Skalar multipliziert: $(\\lambda A)_{ij} = \\lambda \\cdot A_{ij}$

**Matrizenmultiplikation** — die zentrale Operation:
$A$ (m$\\times$n) $\\cdot$ $B$ (n$\\times$p) = $C$ (m$\\times$p). Jedes Element $C_{ij}$ ist das Skalarprodukt der $i$-ten Zeile von $A$ mit der $j$-ten Spalte von $B$.

{{DIAGRAM:matrix-multiplication}}

**Rechenbeispiel — Dosis-Matrix:**
Ein Arzt verteilt 2 Medikamente auf 2 Organe. Die Verteilungsmatrix $A$ und der Dosisvektor $\\vec{b}$:

$A = \\begin{pmatrix}2 & 1\\\\3 & 4\\end{pmatrix}$, $\\vec{b} = \\begin{pmatrix}1\\\\0\\end{pmatrix}$

- *Denkprozess:* Dimensionen prüfen: (2$\\times$2) $\\cdot$ (2$\\times$1) = (2$\\times$1) ✓
- Zeile 1 $\\cdot$ Spalte: $2 \\cdot 1 + 1 \\cdot 0 = 2$
- Zeile 2 $\\cdot$ Spalte: $3 \\cdot 1 + 4 \\cdot 0 = 3$
- Ergebnis: $\\begin{pmatrix}2\\\\3\\end{pmatrix}$

**Wichtig:** Matrizenmultiplikation ist **nicht kommutativ** — $A \\cdot B \\neq B \\cdot A$ im Allgemeinen!

**Transponierte Matrix** $A^\\top$: Zeilen und Spalten vertauschen ($(A^\\top)_{ij} = A_{ji}$). Eine Matrix heißt **symmetrisch**, wenn $A = A^\\top$.

Die **Einheitsmatrix** $E$ (Einsen auf der Diagonale, sonst Nullen) ist das neutrale Element: $A \\cdot E = E \\cdot A = A$.

> **Merke:** Dimensionsregel: (m$\\times$n) $\\cdot$ (n$\\times$p) = (m$\\times$p) — die **inneren** Dimensionen müssen übereinstimmen. MedAT-Falle: Reihenfolge bei der Multiplikation beachten, da nicht kommutativ!

---

## Determinante: Schlüssel zur Lösbarkeit

Die Determinante verrät, ob ein Gleichungssystem eine eindeutige Lösung hat — eine Art „Ja/Nein-Schalter" für die Invertierbarkeit einer Matrix.

**2$\\times$2-Determinante:**
$$\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc \\quad \\text{(Hauptdiagonale minus Nebendiagonale)}$$

**3$\\times$3-Determinante — Sarrus-Regel** (Merkschema für die Berechnung einer 3$\\times$3-Determinante durch Diagonalprodukte):
Die drei Hauptdiagonalprodukte addieren, die drei Nebendiagonalprodukte subtrahieren. Alternativ Entwicklung nach einer Zeile:
$$\\det(A) = a_{11}(a_{22}a_{33}-a_{23}a_{32}) - a_{12}(a_{21}a_{33}-a_{23}a_{31}) + a_{13}(a_{21}a_{32}-a_{22}a_{31})$$

**Was sagt die Determinante aus?**
- $\\det(A) \\neq 0$: Matrix ist **regulär** (invertierbar), LGS hat genau eine Lösung
- $\\det(A) = 0$: Matrix ist **singulär** (nicht invertierbar, Zeilen/Spalten linear abhängig), keine eindeutige Lösung
- Geometrisch: $|\\det(A)|$ = Fläche des Parallelogramms (2D) bzw. Volumen des Spats (3D)

**Rechenbeispiel:** $A = \\begin{pmatrix}3 & 5\\\\1 & 2\\end{pmatrix}$
- *Denkprozess:* $\\det = 3 \\cdot 2 - 5 \\cdot 1 = 6 - 5 = 1 \\neq 0$ → regulär, invertierbar ✓

> **Merke:** $\\det = 0$ → singulär (nicht invertierbar, kein eindeutiges LGS). $\\det \\neq 0$ → regulär (invertierbar, genau eine Lösung). Beim MedAT reicht oft die 2$\\times$2-Formel $ad - bc$.

---

## LGS lösen: Gauß-Verfahren und Cramersche Regel

Nachdem Determinanten klären, **ob** ein LGS lösbar ist, brauchen wir Methoden, um die Lösung tatsächlich zu **finden**.

**Matrixschreibweise:** $A\\vec{x} = \\vec{b}$, wobei $A$ die **Koeffizientenmatrix** (Matrix der Vorfaktoren der Unbekannten), $\\vec{x}$ der Lösungsvektor und $\\vec{b}$ die rechte Seite ist.

**Gauß-Verfahren (Eliminationsverfahren):**
1. Erweiterte Matrix $(A | \\vec{b})$ aufstellen
2. Durch Zeilenoperationen (Addieren/Subtrahieren von Vielfachen) auf **Stufenform** bringen
3. Von unten nach oben rückwärts einsetzen

**Cramersche Regel** (elegant für 2$\\times$2- und 3$\\times$3-Systeme):
$$x_i = \\frac{\\det(A_i)}{\\det(A)}$$
wobei $A_i$ die Matrix ist, bei der die $i$-te Spalte durch $\\vec{b}$ ersetzt wird.

**Rechenbeispiel — LGS mit Cramer:**
$2x + y = 5$, $x - y = 1$

- *Denkprozess:* Koeffizientenmatrix $A = \\begin{pmatrix}2&1\\\\1&-1\\end{pmatrix}$, $\\vec{b} = \\begin{pmatrix}5\\\\1\\end{pmatrix}$
- $\\det(A) = 2 \\cdot (-1) - 1 \\cdot 1 = -3 \\neq 0$ → eindeutig lösbar
- $x = \\det\\begin{pmatrix}5&1\\\\1&-1\\end{pmatrix} / (-3) = (-5-1)/(-3) = 2$
- $y = \\det\\begin{pmatrix}2&5\\\\1&1\\end{pmatrix} / (-3) = (2-5)/(-3) = 1$
- Probe: $2 \\cdot 2 + 1 = 5$ ✓, $2 - 1 = 1$ ✓

| Bedingung | Lösung |
|-----------|--------|
| $\\det(A) \\neq 0$ | Genau eine Lösung |
| $\\det(A) = 0$, konsistent | Unendlich viele Lösungen |
| $\\det(A) = 0$, inkonsistent | Keine Lösung |

> **Merke:** Cramersche Regel: $x_i = \\det(A_i)/\\det(A)$ — die $i$-te Spalte wird durch $\\vec{b}$ ersetzt. Funktioniert nur bei $\\det(A) \\neq 0$. Für größere Systeme ist Gauß effizienter.

---

## Inverse Matrix (Kurzfassung)

Die **inverse Matrix** $A^{-1}$ existiert nur bei $\\det(A) \\neq 0$. Es gilt $A \\cdot A^{-1} = E$.

Für 2$\\times$2 gibt es eine direkte Formel:
$$A^{-1} = \\frac{1}{ad-bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$

Merkregel: Hauptdiagonale tauschen, Nebendiagonale negieren, durch $\\det$ teilen.

**Schnellbeispiel:** $A = \\begin{pmatrix}2&1\\\\5&3\\end{pmatrix}$, $\\det = 1$
→ $A^{-1} = \\begin{pmatrix}3&-1\\\\-5&2\\end{pmatrix}$. Probe: $A \\cdot A^{-1} = E$ ✓

> **Merke:** Inverse = „Rückgängig-Matrix". Existiert nur bei $\\det \\neq 0$. Für 2$\\times$2 die Formel auswendig können — wird beim MedAT gerne als Rechenaufgabe gestellt.

---

## Klinische Bedeutung

In der **CT-Bildrekonstruktion** werden Absorptionswerte aus verschiedenen Winkeln gemessen und als großes LGS $A\\vec{x} = \\vec{b}$ formuliert ($A$ = Systemmatrix, $\\vec{x}$ = Bildvektor, $\\vec{b}$ = Messdaten). Die gefilterte Rückprojektion löst dieses System durch Matrizenoperationen. In der **Pharmakologie** beschreiben Matrizen die Verteilung von Wirkstoffen auf verschiedene Kompartimente (Blut, Gewebe, Organe) — die Koeffizientenmatrix enthält die Übergangsraten zwischen den Kompartimenten.`,
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
        text: "Eine Gerade im ℝ³ wird durch Stützvektor und Richtungsvektor in Parameterform beschrieben: $\\vec{r} = \\vec{r_0} + t\\cdot\\vec{d}$. Punktprobe: $t$ muss in allen Koordinaten gleich sein. Ebenen haben drei Darstellungsformen: Normalenform $\\vec{n}\\cdot(\\vec{r}-\\vec{r_0})=0$, Koordinatenform $ax+by+cz=d$ (Normalenvektor direkt ablesbar) und Parameterform mit zwei Richtungsvektoren. Umrechnung: Kreuzprodukt der Richtungsvektoren ergibt den Normalenvektor.",
        merksatz:
          "Gerade: r = r₀ + t×d. Ebene Koordinatenform: ax+by+cz=d → Normalenvektor (a,b,c) direkt ablesbar. Parameterform → Koordinatenform: Kreuzprodukt = Normalenvektor.",
      },
      {
        heading: "Matrizen — Grundoperationen und Multiplikation",
        text: "Matrizen werden elementweise addiert; das Produkt erfordert passende innere Dimensionen: (m×n)·(n×p) = (m×p). Die Matrizenmultiplikation ist nicht kommutativ. Die Transponierte $A^\\top$ entsteht durch Zeile-Spalte-Tausch. Die Einheitsmatrix $E$ ist das neutrale Element der Multiplikation.",
        merksatz:
          "Matrizenprodukt: (m×n)·(n×p) = (m×p) — innere Dimensionen müssen passen. Nicht kommutativ: A·B ≠ B·A!",
      },
      {
        heading: "Determinante und LGS lösen",
        text: "Die Determinante einer 2×2-Matrix: $\\det(A) = ad-bc$. det = 0 → singulär (nicht invertierbar), det ≠ 0 → regulär (invertierbar, LGS eindeutig lösbar). 3×3 per Sarrus-Regel. LGS lösen: Gauß-Verfahren (Stufenform + Rückeinsetzen) oder Cramersche Regel ($x_i = \\det(A_i)/\\det(A)$). Inverse Matrix 2×2: Hauptdiagonale tauschen, Nebendiagonale negieren, durch det teilen.",
        merksatz:
          "det 2×2: ad−bc. det = 0 → singulär. Cramer: xᵢ = det(Aᵢ)/det(A). Inverse 2×2: (1/det)×(d,−b;−c,a).",
      },
      {
        heading: "Klinische Anwendungen",
        text: "CT-Bildrekonstruktion: Absorptionsmesswerte als großes LGS A·x = b, gelöst durch gefilterte Rückprojektion (Matrizenoperationen). Pharmakologie: Kompartimentmodelle (Medikamentenverteilung auf Blut/Gewebe/Organe) als Matrizengleichungen. Die Koeffizientenmatrix enthält die Übergangsraten zwischen Kompartimenten.",
        merksatz:
          "CT-Rekonstruktion = großes LGS mit Matrizenoperationen. Pharmakokinetik: Kompartimentmodelle als Matrizengleichungen.",
      },
    ],
    merksätze: [
      "Gerade im Raum: r = r₀ + t×d — Stützvektor + Parameter × Richtungsvektor. Punktprobe: t muss in allen Koordinaten gleich sein.",
      "Ebene Normalenform: n·(r − r₀) = 0, wobei n ⊥ Ebene. Koordinatenform: ax + by + cz = d → Normalenvektor (a,b,c) direkt ablesbar.",
      "Parameterform → Koordinatenform: Kreuzprodukt der Richtungsvektoren = Normalenvektor, dann d = n · r₀.",
      "Matrizenprodukt: (m×n) · (n×p) = (m×p) — innere Dimensionen müssen übereinstimmen. Nicht kommutativ!",
      "Determinante 2×2: det(A) = ad − bc. det = 0 → singulär (nicht invertierbar). det ≠ 0 → regulär (invertierbar).",
      "Sarrus-Regel: 3×3-Determinante über Diagonalprodukte (3 Hauptdiagonalen minus 3 Nebendiagonalen).",
      "Cramersche Regel: xᵢ = det(Aᵢ)/det(A) — i-te Spalte durch Lösungsvektor ersetzen.",
      "Gauß-Verfahren: Erweiterte Matrix aufstellen → Stufenform → rückwärts einsetzen.",
      "Inverse 2×2: A⁻¹ = (1/det) × (d, −b; −c, a) — Hauptdiagonale tauschen, Nebendiagonale negieren.",
      "CT-Rekonstruktion = großes LGS A·x = b, gelöst durch Matrizenoperationen (gefilterte Rückprojektion).",
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
];
