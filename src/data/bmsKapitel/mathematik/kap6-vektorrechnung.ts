import type { Kapitel } from '../types';

export const mathKap6: Kapitel = {
  id: 'math-kap6',
  title: 'Vektorrechnung',
  subject: 'mathematik',
  icon: '➡️',
  estimatedTime: '50 min',
  unterkapitel: [
    {
      id: 'ma-6-01',
      title: 'Vektoren — Darstellung, Addition und Subtraktion',
      content: `# Vektoren — Darstellung, Addition und Subtraktion

Ein Vektor ist eine mathematische Größe, die sowohl einen Betrag (Größe) als auch eine Richtung besitzt. Im Gegensatz dazu hat ein Skalar nur einen Betrag ohne Richtungsangabe. Temperatur (37°C), Masse (70 kg) und Zeit (5 s) sind Skalare. Kraft, Geschwindigkeit, Impuls und elektrisches Feld sind Vektoren — sie haben neben ihrer Stärke auch eine Richtung.

## Darstellung von Vektoren

Ein Vektor im dreidimensionalen Raum wird durch drei Komponenten dargestellt:
v = (v₁, v₂, v₃) oder als Spaltenvektor

Die geometrische Bedeutung: v₁ ist die Verschiebung in x-Richtung, v₂ in y-Richtung, v₃ in z-Richtung.

**Betrag (Länge) eines Vektors:**
|v| = √(v₁² + v₂² + v₃²)

Das ist die dreidimensionale Erweiterung des Satzes des Pythagoras. Im 2D: |v| = √(v₁² + v₂²).

Beispiel: v = (3, 4, 0) hat Betrag |v| = √(9 + 16 + 0) = √25 = 5.

## Skalar vs. Vektor — der fundamentale Unterschied

Masse ist ein Skalar: 70 kg. Gewichtskraft ist ein Vektor: F = (0, 0, −686 N) (nach unten, für 70 kg). Geschwindigkeit ist ein Vektor: Wenn man "80 km/h" sagt, meint man den Betrag; die Richtung muss explizit angegeben werden. In der Biomechanik sind Muskelkräfte Vektoren — ihre Richtung bestimmt, welche Bewegung ausgeführt wird.

## Vektoraddition

Vektoren werden komponentenweise addiert:
a + b = (a₁ + b₁, a₂ + b₂, a₃ + b₃)

Geometrisch: Parallelogrammregel oder Pfeilkopf-an-Pfeilende-Methode (Tip-to-Tail). Der Summenvektor (Resultante) schließt das Parallelogramm.

Beispiel: a = (3, 1, 0), b = (1, 4, 0). a + b = (4, 5, 0). Betrag: |a + b| = √(16 + 25) = √41 ≈ 6,4.

## Vektorsubtraktion

a − b = a + (−b) = (a₁ − b₁, a₂ − b₂, a₃ − b₃)

Geometrisch: Man dreht b um und addiert. Der Differenzvektor zeigt von der Spitze von b zur Spitze von a (wenn beide vom gleichen Anfangspunkt starten).

## Skalarmultiplikation

k · v = (k·v₁, k·v₂, k·v₃)

Bei k > 0: Gleiche Richtung, k-fache Länge. Bei k < 0: Gegenrichtung, |k|-fache Länge. Bei k = 0: Nullvektor (0, 0, 0).

Speziell: −v = (−v₁, −v₂, −v₃) zeigt in die Gegenrichtung.

## Klinische Anwendungen

In der Biomechanik werden Kräfte am Gelenk als Vektoren beschrieben. Das Hüftgelenk trägt beim Stand auf einem Bein das 2,5- bis 3-fache des Körpergewichts — das ist das Ergebnis der Vektoraddition aus Körpergewichtskraft und der Muskelkraft der Glutealmuskulatur. Ein Arzt muss verstehen, dass die "Kraft auf das Hüftgelenk" eine Vektorsumme ist, keine einfache Addition von Gewicht. Der Herzdipol im EKG ist ein Vektor, der die elektrische Aktivierungsrichtung des Herzens beschreibt — die Herzachse wird in Grad angegeben.`,
      lernziele: [
        'Den Unterschied zwischen Skalar und Vektor erklären',
        'Den Betrag eines Vektors berechnen',
        'Vektoren addieren, subtrahieren und mit Skalaren multiplizieren',
        'Die Parallelogrammregel geometrisch anwenden',
      ],
      sections: [
        {
          heading: 'Skalar und Vektor — der fundamentale Unterschied',
          text: 'Skalare haben nur einen Betrag: Temperatur (37°C), Masse (70 kg), Zeit (3 s), Energie (500 J). Vektoren haben Betrag und Richtung: Kraft (100 N nach rechts), Geschwindigkeit (80 km/h Nordost), Magnetfeld (2 T senkrecht zur Fläche). In der Physik ist es wichtig, den Unterschied zu kennen: F = m × a ist korrekt, aber F und a sind Vektoren, m ist ein Skalar. Ein Skalar multipliziert mit einem Vektor ergibt einen Vektor mit geändertem Betrag aber gleicher (oder entgegengesetzter) Richtung.',
          merksatz: 'Skalare: nur Betrag (Zahl + Einheit). Vektoren: Betrag UND Richtung (Pfeil).',
        },
        {
          heading: 'Vektoren berechnen — Betrag und Komponenten',
          text: 'Betrag |v| = √(v₁² + v₂² + v₃²) — dreidimensionaler Pythagoras. Für v = (1, 2, 2): |v| = √(1+4+4) = √9 = 3. Die Komponenten geben die "Anteile" in jeder Richtung an. Ein Kraftvektor F = (0, 0, −mg) = (0, 0, −686 N) für 70 kg bedeutet: keine Kraft in x- oder y-Richtung, nur nach unten (negatives z). Das ist die Gewichtskraft.',
        },
        {
          heading: 'Addition und die Parallelogrammregel',
          text: 'Komponentenweise Addition: (a₁+b₁, a₂+b₂, a₃+b₃). Geometrisch: Beide Vektoren vom gleichen Startpunkt zeichnen. Der Summenvektor ist die Diagonale des Parallelogramms. Alternativ: Tip-to-Tail (den zweiten Vektor am Ende des ersten beginnen). Der Summenvektor ist dann der Pfeil vom Anfang des ersten zum Ende des zweiten. Beide Methoden liefern dasselbe Ergebnis.',
        },
      ],
      merksätze: [
        'Betrag: |v| = √(v₁²+v₂²+v₃²) — 3D-Pythagoras',
        'Addition: (a₁+b₁, a₂+b₂, a₃+b₃) — komponentenweise',
        'Skalarmultiplikation: k·v = (k·v₁, k·v₂, k·v₃); k<0 dreht Richtung um',
      ],
      altfrage: {
        question: 'Ein Muskel übt eine Kraft F₁ = (3, 4, 0) N aus, ein zweiter F₂ = (−1, 2, 0) N. Wie groß ist die Resultante (Betrag der Summe)?',
        answer: 'Vektorsumme: F_res = F₁ + F₂ = (3+(−1), 4+2, 0+0) = (2, 6, 0) N. Betrag: |F_res| = √(4 + 36 + 0) = √40 = 2√10 ≈ 6,32 N. Die resultierende Kraft beträgt 6,32 N.',
      },
      klinischerBezug: 'In der Orthopädie und Biomechanik ist die Vektoraddition von Kräften klinisch relevant. Im Hüftgelenk beim einseitigen Standgang wirken: 1) Körpergewicht (Vektor nach unten, ca. 700 N) und 2) Glutealmuskelkraft (Vektor schräg nach oben-innen, ca. 1.500 N). Die Vektorsumme dieser Kräfte ergibt die Gelenkkraft, die tatsächlich auf die Hüftpfanne wirkt — ca. 2.100 N = 3× Körpergewicht. Dieses Prinzip erklärt, warum Hüftgelenke trotz mäßigem Körpergewicht hohe Belastungen erfahren, und ist Grundlage der Hüftprothesen-Auslegung.',
      selfTest: [
        {
          question: 'Was ist der Betrag des Vektors v = (2, 3, 6)?',
          options: ['7', '11', '√13', '49', '√61'],
          correctIndex: 0,
          explanation: '|v| = √(2² + 3² + 6²) = √(4 + 9 + 36) = √49 = 7.',
          hints: ['|v| = √(v₁²+v₂²+v₃²). Berechne 2²+3²+6².', '4+9+36 = 49; √49 = 7.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'a = (1, −2, 3), b = (4, 1, −1). Was ergibt a + b?',
          options: ['(5, −1, 2)', '(3, −3, 4)', '(5, 1, 2)', '(−3, −3, 4)', '(4, −2, −3)'],
          correctIndex: 0,
          explanation: 'Komponentenweise Addition: (1+4, −2+1, 3+(−1)) = (5, −1, 2).',
          hints: ['Jede Komponente einzeln addieren.', '(1+4, −2+1, 3−1) = ?'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Was ist −3 × v für v = (2, −1, 4)?',
          options: ['(−6, 3, −12)', '(−6, 3, 12)', '(6, −3, 12)', '(6, 3, −12)', '(−2, 1, −4)'],
          correctIndex: 0,
          explanation: '−3 × (2, −1, 4) = (−3×2, −3×(−1), −3×4) = (−6, 3, −12). Negative Skalarmultiplikation: Jede Komponente mit −3 multiplizieren.',
          hints: ['k·v = (k·v₁, k·v₂, k·v₃). Hier k = −3.', '−3×2=−6; −3×(−1)=+3; −3×4=−12.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Was ist der Unterschied zwischen Geschwindigkeit (Vektor) und Geschwindigkeitsbetrag (Skalar)?',
          options: ['Geschwindigkeit hat Richtung, Betrag nicht', 'Kein Unterschied', 'Betrag hat Einheit, Vektor nicht', 'Vektor ist immer größer', 'Vektor hat keine Einheit'],
          correctIndex: 0,
          explanation: 'Der Geschwindigkeitsvektor v = (vx, vy, vz) enthält Betrag UND Richtung. Der Geschwindigkeitsbetrag (Schnelligkeit) |v| = v ist nur der Betrag ohne Richtungsangabe. 80 km/h ist ein Betrag; "80 km/h nach Norden" ist ein Vektor.',
          hints: ['Vektor = Betrag + Richtung. Was fehlt beim Betrag?', 'Skalar hat nur eine Zahl; Vektor hat auch eine Richtung.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Zwei Kräfte wirken auf einen Punkt: F₁ = (3, 0, 0) N und F₂ = (0, 4, 0) N. Was ist der Betrag der Resultante?',
          options: ['5 N', '7 N', '1 N', '12 N', '√7 N'],
          correctIndex: 0,
          explanation: 'F_res = (3+0, 0+4, 0) = (3, 4, 0). Betrag: |F_res| = √(9+16+0) = √25 = 5 N. Das pythagoräische Tripel (3, 4, 5) erscheint hier in der Vektorrechnung.',
          hints: ['Addiere die Vektoren komponentenweise. Berechne dann den Betrag.', '|F_res| = √(3²+4²) = √(9+16) = √25 = ?'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ist a − b für a = (5, 2, −1) und b = (3, −1, 2)?',
          options: ['(2, 3, −3)', '(8, 1, 1)', '(2, 3, 3)', '(−2, 3, −3)', '(2, −3, −3)'],
          correctIndex: 0,
          explanation: 'a − b = (5−3, 2−(−1), −1−2) = (2, 3, −3). Subtraktion komponentenweise: Vorzeichen von b umkehren, dann addieren.',
          hints: ['Komponentenweise subtrahieren: (a₁−b₁, a₂−b₂, a₃−b₃).', '(5−3, 2−(−1), −1−2) = (2, 2+1, −3).'],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ma-6-02',
      title: 'Skalarprodukt und Kreuzprodukt',
      content: `# Skalarprodukt und Kreuzprodukt

Es gibt zwei verschiedene Arten, zwei Vektoren zu "multiplizieren": das Skalarprodukt (Ergebnis ist ein Skalar) und das Kreuzprodukt (Ergebnis ist ein Vektor). Beide haben fundamentale physikalische Bedeutungen: Das Skalarprodukt misst die "Übereinstimmung" zweier Vektoren (Winkel zwischen ihnen), das Kreuzprodukt liefert die Fläche des Parallelogramms und die Richtung senkrecht zu beiden Vektoren.

## Das Skalarprodukt

Das Skalarprodukt (auch Dot-Produkt oder inneres Produkt) von a und b:

a · b = a₁b₁ + a₂b₂ + a₃b₃

Alternativ geometrisch:
a · b = |a| × |b| × cos(α)

wobei α der Winkel zwischen a und b ist.

**Wichtigste Konsequenz:** a · b = 0 ↔ cos(α) = 0 ↔ α = 90° ↔ a und b sind orthogonal (senkrecht aufeinander).

Das Skalarprodukt ist:
- Kommutativ: a · b = b · a
- Distributiv: a · (b + c) = a · b + a · c
- Das Skalarprodukt eines Vektors mit sich selbst: a · a = |a|² (also |a| = √(a · a))

## Winkel zwischen Vektoren berechnen

Aus a · b = |a| × |b| × cos(α) folgt:
cos(α) = (a · b) / (|a| × |b|)

Das ist die Formel, um den Winkel zwischen zwei Vektoren zu berechnen. Man berechnet zunächst das Skalarprodukt und die Beträge, dann den Quotienten, dann den Arcuskosinus.

Beispiel: a = (1, 0, 0), b = (0, 1, 0). a · b = 0. cos(α) = 0 → α = 90°. Die x- und y-Achse stehen senkrecht aufeinander. Korrekt!

## Das Kreuzprodukt

Das Kreuzprodukt (auch Vektorprodukt oder äußeres Produkt) von a und b:

a × b = (a₂b₃ − a₃b₂, a₃b₁ − a₁b₃, a₁b₂ − a₂b₁)

Die Eselsbrücke für die Formel: Man berechnet die Determinante der Matrix mit den Einheitsvektoren i, j, k in der ersten Zeile und den Vektoren a, b in den restlichen Zeilen.

**Eigenschaften des Kreuzprodukts:**
- Das Ergebnis ist ein Vektor senkrecht (orthogonal) zu BEIDEN Ausgangsvektoren: (a × b) ⊥ a und (a × b) ⊥ b
- |a × b| = |a| × |b| × sin(α) = Fläche des Parallelogramms, das a und b aufspannen
- Antikommutativ: a × b = −(b × a)
- a × b = 0, wenn a und b parallel sind (sin(0°) = 0) oder einer von beiden der Nullvektor ist
- Nur im 3D definiert (nicht in 2D)

## Physikalische Bedeutung

Das Kreuzprodukt beschreibt physikalische Größen, die "senkrecht" zu zwei Eingangsvektoren wirken:

**Drehmoment:** τ = r × F. Der Drehmomentvektor steht senkrecht zur Ebene, die von Hebelarm r und Kraft F aufgespannt wird. Der Betrag |τ| = |r| × |F| × sin(α) — maximal wenn r ⊥ F (sin(90°) = 1).

**Lorentzkraft:** F = q × v × B. Die Kraft auf ein geladenes Teilchen im Magnetfeld steht senkrecht zur Teilchengeschwindigkeit v und zum Magnetfeld B. Das erklärt, warum Teilchen im Magnetfeld kreisförmige Bahnen beschreiben.

**MRI (Magnetresonanztomographie):** Die Ablenkung von Protonen durch Magnetfelder basiert auf der Lorentzkraft — ein direktes medizinisches Beispiel des Kreuzprodukts.

## Klinisches Beispiel: EKG-Vektoranalyse

Die Herzachse (elektrische Achse) ist ein Vektor im Frontalplan, der die dominante Richtung der ventrikulären Depolarisation beschreibt. Sie wird in Grad angegeben (normal: −30° bis +90°). Die Analyse der EKG-Ableitungen I (Ableitung entlang der x-Achse) und aVF (entlang der y-Achse) erlaubt die Berechnung des Winkels über den Arcustangens — Vektorrechnung im EKG.`,
      lernziele: [
        'Das Skalarprodukt komponentenweise berechnen und geometrisch interpretieren',
        'Orthogonalität über das Skalarprodukt prüfen (a·b=0)',
        'Den Winkel zwischen zwei Vektoren über cos(α) = (a·b)/(|a|·|b|) berechnen',
        'Das Kreuzprodukt berechnen und als Drehmoment/Lorentzkraft interpretieren',
      ],
      sections: [
        {
          heading: 'Skalarprodukt — Berechnung und Bedeutung',
          text: 'a·b = a₁b₁+a₂b₂+a₃b₃ = |a|·|b|·cos(α). Das Skalarprodukt gibt an, wie stark zwei Vektoren "in dieselbe Richtung zeigen". Parallele Vektoren (α=0°): a·b = |a|·|b| (Maximum). Orthogonale Vektoren (α=90°): a·b = 0. Antiparallele Vektoren (α=180°): a·b = −|a|·|b| (Minimum). In der Physik: Arbeit W = F·s ist das Skalarprodukt aus Kraft und Weg (nur der Anteil der Kraft in Wegrichtung leistet Arbeit).',
          merksatz: 'a·b = 0 ↔ Vektoren senkrecht. a·b = |a|·|b|·cos(α) → Winkelberechnung.',
        },
        {
          heading: 'Kreuzprodukt — Berechnung und Eigenschaften',
          text: 'a×b = (a₂b₃−a₃b₂, a₃b₁−a₁b₃, a₁b₂−a₂b₁). Das Kreuzprodukt ist antikommutativ: a×b = −(b×a). Das Ergebnis steht senkrecht zu beiden Eingangsvektoren. |a×b| = |a|·|b|·sin(α) = Parallelogramm-Fläche. Die Richtung folgt der Rechten-Hand-Regel: Wenn Zeigefinger auf a und Mittelfinger auf b zeigt, zeigt der Daumen in Richtung a×b. Null-Kreuzprodukt bedeutet parallele Vektoren.',
        },
        {
          heading: 'Drehmoment und Lorentzkraft',
          text: 'Drehmoment τ = r×F: r = Ortsvektor (Hebelarm), F = Kraft. |τ| = |r|·|F|·sin(α) → maximal bei rechtem Winkel. In der Biomechanik: Ein Muskel, der senkrecht zum Knochen zieht, erzeugt maximales Drehmoment. Lorentzkraft F = q·v×B: Ein Proton (q = 1,6×10⁻¹⁹ C) mit v = 10⁶ m/s in B = 1 T erfährt F = q|v||B|sin(90°) = 1,6×10⁻¹³ N. Diese winzige Kraft reicht für kreisförmige Protonenbahnen im MRI. Beide Formeln folgen dem Kreuzprodukt-Muster.',
        },
      ],
      merksätze: [
        'Skalarprodukt: a·b = a₁b₁+a₂b₂+a₃b₃; a·b=0 → Vektoren senkrecht',
        'Kreuzprodukt: a×b senkrecht zu a und b; |a×b| = Parallelogramm-Fläche',
        'Drehmoment τ = r×F; Lorentzkraft F = q·v×B — beide nutzen das Kreuzprodukt',
      ],
      altfrage: {
        question: 'Berechnen Sie das Skalarprodukt a·b und den Winkel zwischen a = (1, 1, 0) und b = (1, −1, 0). Sind die Vektoren orthogonal?',
        answer: 'Skalarprodukt: a·b = 1×1 + 1×(−1) + 0×0 = 1 − 1 + 0 = 0. Da a·b = 0, sind die Vektoren orthogonal (cos(α) = 0 → α = 90°). Zur Bestätigung: |a| = √2, |b| = √2. cos(α) = 0/(√2×√2) = 0 → α = 90°. Die Vektoren (1,1,0) und (1,−1,0) stehen senkrecht aufeinander.',
      },
      klinischerBezug: 'In der MRT (Magnetresonanztomographie) bewegen sich Protonen im starken Magnetfeld (1,5 T oder 3 T) und erfahren die Lorentzkraft F = q·v×B. Die resultierenden Kreisbewegungen der Protonen erzeugen elektromagnetische Signale, die für die Bildgebung genutzt werden. Die Larmorfrequenz, mit der die Protonen präzessieren, ist ω = γ·B (γ = gyromagnetisches Verhältnis). Das Verständnis dieser Vektorbeziehungen ist fundamental für die Physik der MRT — eine der wichtigsten diagnostischen Methoden in der modernen Medizin.',
      selfTest: [
        {
          question: 'Berechnen Sie das Skalarprodukt von a = (2, 3, 1) und b = (1, 2, −4).',
          options: ['4', '6', '−4', '12', '0'],
          correctIndex: 0,
          explanation: 'a·b = 2×1 + 3×2 + 1×(−4) = 2 + 6 − 4 = 4.',
          hints: ['Skalarprodukt: a₁b₁+a₂b₂+a₃b₃.', '2×1=2; 3×2=6; 1×(−4)=−4. Summe: 2+6−4.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Sind a = (1, 2, 3) und b = (2, −1, 0) orthogonal?',
          options: ['Ja, a·b = 0', 'Nein, a·b = 4', 'Nein, a·b ≠ 0 aber ≠ 4', 'Ja, weil |a| = |b|', 'Nein, a·b = 6'],
          correctIndex: 0,
          explanation: 'a·b = 1×2 + 2×(−1) + 3×0 = 2 − 2 + 0 = 0. Da a·b = 0, sind die Vektoren orthogonal (90° Winkel).',
          hints: ['Berechne a₁b₁+a₂b₂+a₃b₃.', '2 + (−2) + 0 = 0 → orthogonal.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was gilt für a × a (Kreuzprodukt eines Vektors mit sich selbst)?',
          options: ['a × a = (0, 0, 0)', 'a × a = |a|²', 'a × a = a', 'a × a = 2a', 'a × a ist nicht definiert'],
          correctIndex: 0,
          explanation: 'a × a = 0 (Nullvektor). Der Winkel zwischen einem Vektor und sich selbst ist α = 0°. |a × a| = |a|² × sin(0°) = 0. Ein Vektor ist parallel zu sich selbst → kein Flächeninhalt → Kreuzprodukt ist der Nullvektor.',
          hints: ['|a×b| = |a|·|b|·sin(α). Was ist α zwischen einem Vektor und sich selbst?', 'sin(0°) = 0 → |a×a| = 0 → Nullvektor.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Wenn a·b > 0, was kann man über den Winkel zwischen a und b sagen?',
          options: ['α < 90° (spitzer Winkel)', 'α = 90°', 'α > 90°', 'α = 180°', 'Keine Aussage möglich'],
          correctIndex: 0,
          explanation: 'a·b = |a|·|b|·cos(α). Da |a| > 0 und |b| > 0, bestimmt cos(α) das Vorzeichen. a·b > 0 → cos(α) > 0 → α < 90°. Die Vektoren bilden einen spitzen Winkel, d.h. sie zeigen "eher in dieselbe Richtung".',
          hints: ['a·b = |a|·|b|·cos(α). Wann ist cos(α) > 0?', 'cos(α) > 0 für 0° ≤ α < 90°.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Das Drehmoment τ = r × F. Was ist |τ| wenn |r| = 0,5 m, |F| = 20 N und α = 90°?',
          options: ['10 N·m', '20 N·m', '5 N·m', '40 N·m', '0 N·m'],
          correctIndex: 0,
          explanation: '|τ| = |r|·|F|·sin(α) = 0,5 × 20 × sin(90°) = 0,5 × 20 × 1 = 10 N·m. Bei α = 90° ist sin(90°) = 1, daher maximales Drehmoment.',
          hints: ['|τ| = |r|·|F|·sin(α). sin(90°) = 1.', '0,5 × 20 × 1 = 10 N·m.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Warum ist das Kreuzprodukt antikommutativ (a×b = −(b×a))?',
          options: ['Weil die Rechte-Hand-Regel die Richtung wechselt, wenn a und b vertauscht werden', 'Weil |a×b| ≠ |b×a|', 'Weil a und b keine skalaren Größen sind', 'Weil sin(−α) = sin(α)', 'Weil Vektoren nicht kommutativ sind'],
          correctIndex: 0,
          explanation: 'Wenn man a und b vertauscht, dreht sich bei der Rechte-Hand-Regel der Daumen in die Gegenrichtung — das Kreuzprodukt behält seinen Betrag, aber die Richtung wird umgekehrt: a×b = −(b×a). Der Betrag |a×b| = |b×a| bleibt gleich.',
          hints: ['Rechte-Hand-Regel: Zeigefinger a, Mittelfinger b, Daumen = a×b. Was passiert wenn a und b getauscht werden?', 'a×b und b×a haben gleichen Betrag aber entgegengesetzte Richtungen.'],
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: 'ma-6-03',
      title: 'Betrag, Einheitsvektor und geometrische Anwendungen',
      content: `# Betrag, Einheitsvektor und geometrische Anwendungen

Einheitsvektoren, Abstände und Geradengleichungen in Parameterform sind die Werkzeuge der analytischen Geometrie. Sie ermöglichen es, geometrische Fragen algebraisch zu beantworten: Wo liegt der Mittelpunkt zweier Punkte? Wie weit sind zwei Punkte voneinander entfernt? Welcher Punkt liegt auf einer Geraden? Diese Fragen erscheinen in der medizinischen Bildgebung (3D-Koordinaten anatomischer Strukturen), in der Robotik (chirurgische Roboter) und in der Strahlentherapie (Bestrahlungsplanung).

## Der Einheitsvektor

Ein Einheitsvektor (normierter Vektor) hat den Betrag 1. Er gibt die Richtung an, ohne Größeninformation zu enthalten. Der Einheitsvektor in Richtung v wird berechnet durch:

ê = v / |v|

Man dividiert jeden Vektorkomponenten durch den Betrag des Vektors.

Beispiel: v = (3, 4, 0). |v| = 5. Einheitsvektor: ê = (3/5, 4/5, 0) = (0,6; 0,8; 0). Probe: |ê| = √(0,36 + 0,64 + 0) = √1 = 1. Korrekt!

Die drei kartesischen Einheitsvektoren (Basisvektoren):
- e₁ = (1, 0, 0) — x-Richtung
- e₂ = (0, 1, 0) — y-Richtung
- e₃ = (0, 0, 1) — z-Richtung

Jeder Vektor v = (v₁, v₂, v₃) kann als Linearkombination der Basisvektoren geschrieben werden: v = v₁·e₁ + v₂·e₂ + v₃·e₃.

## Der Nullvektor

Der Nullvektor (0, 0, 0) hat Betrag 0 und keine definierte Richtung. Er entsteht z.B. wenn man einen Vektor von sich selbst subtrahiert: v − v = (0, 0, 0).

## Parallele Vektoren

Zwei Vektoren a und b sind parallel (kollinear), wenn ein Skalar k existiert, sodass a = k × b. Geometrisch zeigen sie in dieselbe oder entgegengesetzte Richtung. Parallele Vektoren haben einen Winkel von 0° oder 180° — ihr Kreuzprodukt ist der Nullvektor.

## Mittelpunkt und Abstand

**Mittelpunkt** zwischen den Punkten A(a₁, a₂, a₃) und B(b₁, b₂, b₃):
M = ((a₁+b₁)/2, (a₂+b₂)/2, (a₃+b₃)/2) = (A + B) / 2

**Abstand** zwischen A und B:
d(A, B) = |B − A| = √((b₁−a₁)² + (b₂−a₂)² + (b₃−a₃)²)

Das ist der räumliche Abstand — dreidimensionaler Pythagoras.

## Geradengleichung in Parameterform

Eine Gerade durch Punkt A mit Richtungsvektor r lautet in Parameterform:
P = A + t × r, wobei t ∈ ℝ (Parameter)

Für jeden Wert von t ergibt sich ein Punkt auf der Geraden. Bei t = 0: Punkt A. Bei t = 1: Punkt A + r. Bei t = −1: Punkt A − r.

Für eine Gerade durch zwei Punkte A und B: r = B − A (Richtungsvektor), Geradengleichung: P = A + t × (B − A).

## Klinische Anwendungen

In der 3D-Bildgebung (CT, MRT) werden anatomische Strukturen durch ihre 3D-Koordinaten beschrieben. Der kürzeste Abstand zwischen zwei Strukturen (z.B. Tumor und Risikostruktur in der Strahlentherapie) wird mit Abstandsformeln berechnet. In der chirurgischen Robotik (Da Vinci System) werden Werkzeugbewegungen als Vektoren und Geradengleichungen beschrieben. Endoskopische Kameras nutzen Vektoren zur Berechnung von Blickwinkeln. Ultraschall-Bildgebung rekonstruiert 3D-Bilder aus 2D-Schnittebenen durch Vektortransformationen.`,
      lernziele: [
        'Einen Einheitsvektor aus einem beliebigen Vektor berechnen',
        'Mittelpunkt und Abstand zweier Punkte im 3D-Raum berechnen',
        'Parallele Vektoren identifizieren (a = k × b)',
        'Eine Geradengleichung in Parameterform aufstellen',
      ],
      sections: [
        {
          heading: 'Einheitsvektor — Normierung',
          text: 'ê = v/|v|. Der Einheitsvektor hat Betrag 1 und zeigt in dieselbe Richtung wie v. Normierung ist wichtig, wenn man nur die Richtung einer Größe ohne ihre Stärke ausdrücken will. In der Physik: Richtungsvektoren für Felder (elektrisches Feld E = E_Betrag × ê), Normalvektoren auf Flächen (senkrecht zur Fläche, Betrag 1). Probe: |ê|² = ê·ê = (v₁/|v|)² + (v₂/|v|)² + ... = (v₁²+v₂²+...)/|v|² = |v|²/|v|² = 1.',
          merksatz: 'Einheitsvektor ê = v/|v|; Betrag genau 1; zeigt Richtung ohne Größe',
        },
        {
          heading: 'Abstand und Mittelpunkt im Raum',
          text: 'Abstand d(A,B) = |B−A|: Man berechnet den Differenzvektor B−A und nimmt seinen Betrag. Das ist der kürzeste Abstand zwischen den Punkten A und B. Mittelpunkt M = (A+B)/2: Einfache Mittelung aller Koordinaten. In der Bildgebung: CT-Koordinaten für Tumor-Zielpunkt und Kritische Strukturen werden mit diesen Formeln verarbeitet. Bestrahlungsplanung: Minimaler Abstand zwischen Tumormittelpunkt und Rückenmark in mm.',
        },
        {
          heading: 'Geradengleichung in Parameterform',
          text: 'P(t) = A + t × r. Startpunkt A, Richtungsvektor r, Parameter t. Für alle t ∈ ℝ liefert die Gleichung alle Punkte auf der Geraden. Zwei Geraden schneiden sich, wenn es ein t und ein s gibt, sodass P₁(t) = P₂(s). Geraden sind parallel, wenn ihre Richtungsvektoren parallel sind (r₁ = k × r₂). Diese Darstellung ist flexibler als y = mx + b, da sie auch vertikale Geraden und 3D-Geraden beschreiben kann.',
        },
      ],
      merksätze: [
        'Einheitsvektor: ê = v/|v|; Probe: |ê| = 1',
        'Abstand: d(A,B) = |B−A| = √(Δx²+Δy²+Δz²)',
        'Geradengleichung: P = A + t·r (Parameterform, t ∈ ℝ)',
      ],
      altfrage: {
        question: 'Zwei Punkte in der CT-Bildgebung: Tumor-Mittelpunkt A = (10, 20, 15) mm und Rückenmark-Mitte B = (10, 45, 15) mm. Berechnen Sie den Abstand und den Mittelpunkt.',
        answer: 'Differenzvektor B−A = (0, 25, 0). Abstand: d = |B−A| = √(0+625+0) = √625 = 25 mm. Mittelpunkt: M = ((10+10)/2, (20+45)/2, (15+15)/2) = (10, 32,5, 15) mm. Der Tumor ist 25 mm vom Rückenmark entfernt; der Mittelpunkt liegt bei (10, 32,5, 15) mm.',
      },
      klinischerBezug: 'In der Strahlentherapie (Radiotherapie) ist der Abstand zwischen dem Tumor und Risikoorganen (OAR = Organs at Risk) ein kritischer Parameter. Das Bestrahlungsplanungssystem (z.B. Eclipse, RayStation) berechnet automatisch die minimale Distanz in mm für alle anatomischen Strukturen im 3D-Volumen. Die Dosis-Abstandsbeziehung (Dosisabfall mit 1/r² für Punktquelle) und die Bestrahlungswinkeloptimierung nutzen Vektormathematik. Der Einsatz von IMRT (Intensity Modulated Radiation Therapy) und VMAT (Volumetric Arc Therapy) basiert auf ausgefeilten Vektoroptimierungsalgorithmen.',
      selfTest: [
        {
          question: 'Was ist der Einheitsvektor von v = (0, 0, 5)?',
          options: ['(0, 0, 1)', '(0, 0, 5)', '(0, 0, 0,2)', '(0, 5, 0)', '(1, 0, 0)'],
          correctIndex: 0,
          explanation: '|v| = √(0+0+25) = 5. Einheitsvektor: ê = v/|v| = (0, 0, 5)/5 = (0, 0, 1). Das ist der Einheitsvektor in z-Richtung (e₃).',
          hints: ['ê = v/|v|. Berechne zuerst |v|.', '|v| = 5 → ê = (0, 0, 5)/5 = ?'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Wie lautet der Mittelpunkt M zwischen A = (2, 4, 6) und B = (8, 2, 0)?',
          options: ['(5, 3, 3)', '(6, 6, 6)', '(10, 6, 6)', '(3, 3, 5)', '(4, 2, 6)'],
          correctIndex: 0,
          explanation: 'M = ((2+8)/2, (4+2)/2, (6+0)/2) = (10/2, 6/2, 6/2) = (5, 3, 3).',
          hints: ['Mittelpunkt: Koordinaten addieren, durch 2 dividieren.', '((2+8)/2, (4+2)/2, (6+0)/2) = ?'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Sind a = (2, 4, 6) und b = (1, 2, 3) parallel?',
          options: ['Ja, a = 2×b', 'Nein, Kreuzprodukt ≠ 0', 'Nein, Beträge verschieden', 'Ja, Skalarprodukt = 0', 'Nein, Richtungen entgegengesetzt'],
          correctIndex: 0,
          explanation: 'a = (2, 4, 6) = 2 × (1, 2, 3) = 2 × b. Da ein Skalar k=2 existiert mit a = k×b, sind die Vektoren parallel (gleiche Richtung, doppelte Länge).',
          hints: ['Parallel: a = k × b für eine Zahl k. Prüfe, ob 2 × b = a.', '2 × (1, 2, 3) = (2, 4, 6) = a → parallel!'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Was ist der Abstand zwischen P₁ = (1, 1, 1) und P₂ = (4, 5, 1)?',
          options: ['5', '3', '4', '√50', '7'],
          correctIndex: 0,
          explanation: 'Differenzvektor: P₂−P₁ = (3, 4, 0). Abstand: |P₂−P₁| = √(9+16+0) = √25 = 5. Wieder das pythagoräische Tripel (3, 4, 5) — aber im 3D-Raum.',
          hints: ['d = |P₂−P₁|. Berechne den Differenzvektor und seinen Betrag.', '(4−1, 5−1, 1−1) = (3, 4, 0); ||(3,4,0)|| = √(9+16+0).'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Eine Gerade läuft durch A = (1, 2, 3) mit Richtungsvektor r = (0, 1, 0). Welcher Punkt liegt auf der Geraden für t = 3?',
          options: ['(1, 5, 3)', '(1, 2, 6)', '(4, 2, 3)', '(0, 3, 0)', '(3, 2, 3)'],
          correctIndex: 0,
          explanation: 'P = A + t × r = (1, 2, 3) + 3 × (0, 1, 0) = (1, 2+3, 3) = (1, 5, 3). Die Gerade verläuft parallel zur y-Achse durch (1, _, 3).',
          hints: ['P = A + t × r. Einsetzen: A = (1,2,3), t = 3, r = (0,1,0).', '(1, 2, 3) + 3×(0, 1, 0) = (1, 2+3, 3+0).'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ist der Einheitsvektor von v = (3, −4, 0)?',
          options: ['(0,6; −0,8; 0)', '(3, −4, 0)', '(0,3; −0,4; 0)', '(−0,6; 0,8; 0)', '(1; −1; 0)'],
          correctIndex: 0,
          explanation: '|v| = √(9+16+0) = 5. ê = (3/5, −4/5, 0) = (0,6; −0,8; 0). Probe: 0,6² + 0,8² = 0,36 + 0,64 = 1.',
          hints: ['|v| = √(3²+4²) = 5. ê = v/|v|.', '(3/5, −4/5, 0) = (0,6; −0,8; 0). Probe: 0,6²+0,8² = 1?'],
          difficulty: 2,
          tags: [],
        },
      ],
    },
  ],
};
