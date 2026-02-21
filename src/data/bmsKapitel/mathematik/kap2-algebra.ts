import type { Kapitel } from '../types';

export const mathKap2: Kapitel = {
  id: 'math-kap2',
  title: 'Algebra',
  subject: 'mathematik',
  icon: '📐',
  estimatedTime: '60 min',
  unterkapitel: [
    {
      id: 'ma-2-01',
      title: 'Gleichungen und Ungleichungen',
      content: `# Gleichungen und Ungleichungen

Gleichungen sind das Herzstück der Algebra — sie erlauben es uns, unbekannte Größen zu bestimmen. In der Medizin begegnen uns Gleichungen bei der Dosierungsberechnung, der Bestimmung von Gleichgewichtskonzentrationen und der Modellierung physiologischer Vorgänge. Das Lösen von Gleichungen ist daher keine abstrakte Fähigkeit, sondern eine klinisch relevante Kompetenz.

## Lineare Gleichungen

Eine lineare Gleichung hat die Form ax + b = c, wobei x die gesuchte Unbekannte ist. Das Lösungsprinzip ist einfach: Was man auf einer Seite der Gleichung macht, muss man auch auf der anderen Seite tun. Ziel ist es, x zu isolieren.

Lösung: ax + b = c → ax = c − b → x = (c − b)/a. Das funktioniert für alle a ≠ 0. Beispiel: 3x + 7 = 22 → 3x = 15 → x = 5.

Die wichtigsten erlaubten Umformungen: Addition/Subtraktion derselben Zahl auf beiden Seiten, Multiplikation/Division mit derselben Zahl (≠ 0) auf beiden Seiten. Das "Herüberziehen" ist nichts anderes als das Subtrahieren auf der rechten Seite, was auf der linken Seite das Vorzeichen wechselt.

## Quadratische Gleichungen und die Lösungsformel

Eine quadratische Gleichung hat die Form ax² + bx + c = 0. Sie kann keine, eine oder zwei reelle Lösungen haben. Die allgemeine Lösungsformel lautet:

x = (−b ± √(b² − 4ac)) / (2a)

Der Ausdruck unter der Wurzel, D = b² − 4ac, heißt Diskriminante und entscheidet über die Anzahl der Lösungen:
- D > 0: zwei verschiedene reelle Lösungen (x₁ und x₂)
- D = 0: genau eine reelle Lösung (Doppellösung): x = −b/(2a)
- D < 0: keine reelle Lösung (nur komplexe Lösungen, für den MedAT nicht relevant)

Beispiel: x² − 5x + 6 = 0. Hier: a=1, b=−5, c=6. D = 25 − 24 = 1 > 0. x = (5 ± 1) / 2, also x₁ = 3 und x₂ = 2.

## Ungleichungen

Ungleichungen funktionieren fast wie Gleichungen — mit einer wichtigen Ausnahme: Wenn man mit einer negativen Zahl multipliziert oder dividiert, dreht sich das Ungleichungszeichen um. Aus < wird >, aus ≤ wird ≥.

Beispiel: −2x > 6 → x < −3 (Vorzeichen dreht um bei Division durch −2). Das ist die häufigste Fehlerquelle bei Ungleichungen.

Lösungsmengen von Ungleichungen sind Intervalle, keine einzelnen Zahlen. Die Schreibweise: x > 3 bedeutet das offene Intervall (3, ∞); x ≥ 3 bedeutet das abgeschlossene Intervall [3, ∞).

## Gleichungssysteme

Ein lineares Gleichungssystem mit zwei Unbekannten (x, y) und zwei Gleichungen hat im Allgemeinen genau eine Lösung. Es gibt zwei Hauptlösungsverfahren.

**Substitutionsverfahren:** Man löst eine Gleichung nach einer Variablen auf und setzt in die andere ein. Beispiel: x + y = 5 und 2x − y = 1. Aus der ersten Gleichung: y = 5 − x. Einsetzen: 2x − (5 − x) = 1 → 3x = 6 → x = 2, y = 3.

**Additionsverfahren:** Man addiert (oder subtrahiert) die Gleichungen so, dass eine Variable wegfällt. Oft muss man vorher eine Gleichung mit einem Faktor multiplizieren.

## MedAT-Anwendung: Dosierungsrechnung

Die Dosierungsberechnung ist eine der häufigsten klinischen Rechenaufgaben. Ein Patient wiegt 80 kg und soll 5 mg/kg Ibuprofen erhalten. Gesamtdosis = 5 mg/kg × 80 kg = 400 mg. Wenn das Medikament als 200 mg-Tabletten vorliegt: Anzahl Tabletten = 400 mg / 200 mg = 2 Tabletten. Formal ist das eine lineare Gleichung der Form Dosis = Konzentration × Gewicht, gelöst nach der Dosis.`,
      lernziele: [
        'Lineare Gleichungen nach einer Variablen umformen und lösen',
        'Quadratische Gleichungen mit der Lösungsformel lösen und die Diskriminante interpretieren',
        'Ungleichungen korrekt lösen, insbesondere bei Multiplikation mit negativen Zahlen',
        'Lineare Gleichungssysteme mit Substitution oder Addition lösen',
      ],
      sections: [
        {
          heading: 'Lineare Gleichungen — Umformungsregeln',
          text: 'Das Grundprinzip lautet: Was man auf einer Seite tut, muss man auf der anderen auch tun. Die vier erlaubten Operationen sind: Addition und Subtraktion derselben Zahl, sowie Multiplikation und Division mit derselben von null verschiedenen Zahl. Das Ziel ist immer, die Unbekannte zu isolieren. In der Medizin erscheinen lineare Gleichungen z.B. bei der Berechnung der Infusionsrate (V = c × t), der Verdünnungsformel (c₁V₁ = c₂V₂) oder der Dosierungsformel (Dosis = Konzentration × Körpergewicht).',
          merksatz: 'Was links passiert, passiert auch rechts — die goldene Regel der Gleichungsumformung.',
        },
        {
          heading: 'Quadratische Gleichungen und Diskriminante',
          text: 'Die Lösungsformel x = (−b ± √(b²−4ac))/(2a) ist das Universalwerkzeug für quadratische Gleichungen ax²+bx+c=0. Die Diskriminante D = b²−4ac gibt vor der Rechnung Auskunft: D>0 → zwei Lösungen; D=0 → eine Lösung; D<0 → keine reelle Lösung. Für viele MedAT-Aufgaben kann man zunächst die Diskriminante prüfen, um zu wissen, wie viele Lösungen zu erwarten sind. Einfachere Gleichungen lassen sich oft durch Faktorisierung (Raten der Lösungen) schneller lösen.',
        },
        {
          heading: 'Ungleichungen und das Vorzeichenproblem',
          text: 'Das Umkehren des Ungleichungszeichens bei Multiplikation oder Division mit einer negativen Zahl ist die häufigste Fehlerquelle. Bei positiven Faktoren bleibt das Zeichen unverändert. Doppelte Ungleichungen wie 2 < x+3 < 8 werden gelöst, indem man in allen drei Teilen dieselbe Operation durchführt: 2−3 < x < 8−3 → −1 < x < 5. Das Ergebnis ist ein Intervall.',
        },
      ],
      merksätze: [
        'Bei Division/Multiplikation mit negativer Zahl: Ungleichungszeichen umkehren!',
        'Diskriminante D = b²−4ac: D>0 → 2 Lösungen, D=0 → 1 Lösung, D<0 → keine reelle Lösung',
        'Lösungsformel: x = (−b ± √(b²−4ac)) / (2a)',
      ],
      altfrage: {
        question: 'Eine Wirkstofflösung enthält c₁ = 20 mg/mL. Wie viel mL (V₁) der Stammlösung müssen mit Wasser auf 50 mL (V₂) aufgefüllt werden, um eine Konzentration von c₂ = 4 mg/mL zu erhalten?',
        answer: 'Verdünnungsformel: c₁ × V₁ = c₂ × V₂. Einsetzen: 20 × V₁ = 4 × 50 = 200. Lösung: V₁ = 200/20 = 10 mL. Antwort: 10 mL Stammlösung werden mit 40 mL Wasser auf 50 mL aufgefüllt.',
      },
      klinischerBezug: 'In der Anästhesie wird die Infusionsrate genau berechnet. Die Erhaltungsdosis Propofol beträgt 4–12 mg/kg/h. Für einen 70 kg-Patienten: Dosis = 6 mg/kg/h × 70 kg = 420 mg/h. Bei einer Konzentration von 10 mg/mL: Rate = 420 mg/h ÷ 10 mg/mL = 42 mL/h. Solche Berechnungen sind lineare Gleichungen und müssen im klinischen Alltag fehlerfrei durchgeführt werden.',
      selfTest: [
        {
          question: 'Lösen Sie 5x − 3 = 2x + 9. Was ist x?',
          options: ['4', '3', '6', '2', '5'],
          correctIndex: 0,
          explanation: '5x − 3 = 2x + 9 → 5x − 2x = 9 + 3 → 3x = 12 → x = 4. Probe: 5(4) − 3 = 17 = 2(4) + 9 = 17. Korrekt.',
          hints: ['Bringe alle x-Terme auf eine Seite und alle Zahlen auf die andere.', '5x − 2x = 12 → 3x = 12.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welche Lösungen hat x² − 7x + 10 = 0?',
          options: ['x = 2 und x = 5', 'x = −2 und x = −5', 'x = 1 und x = 10', 'x = 7 und x = 0', 'Keine reelle Lösung'],
          correctIndex: 0,
          explanation: 'Diskriminante: D = 49 − 40 = 9 > 0. Lösungen: x = (7 ± 3)/2 → x₁ = 5, x₂ = 2. Probe: 5²−7×5+10 = 0 und 2²−7×2+10 = 0. Alternativ durch Faktorisierung: (x−5)(x−2) = 0.',
          hints: ['Berechne die Diskriminante D = b²−4ac mit a=1, b=−7, c=10.', 'x = (7 ± √9)/2 = (7 ± 3)/2.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ist die Lösungsmenge von −3x > 12?',
          options: ['x < −4', 'x > −4', 'x < 4', 'x > 4', 'x = −4'],
          correctIndex: 0,
          explanation: 'Division durch −3 kehrt das Ungleichungszeichen um: x < 12/(−3) = −4. Das Vorzeichen des Zeichens muss immer gedreht werden, wenn durch eine negative Zahl dividiert oder multipliziert wird.',
          hints: ['Dividiere beide Seiten durch −3, aber vergiss nicht: bei negativer Zahl dreht sich das Ungleichungszeichen!', '12 / (−3) = −4, und aus > wird <.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Gegeben: 2x + y = 10 und x − y = 2. Was ist x?',
          options: ['4', '2', '6', '3', '5'],
          correctIndex: 0,
          explanation: 'Additionsverfahren: Gleichungen addieren: (2x + y) + (x − y) = 10 + 2 → 3x = 12 → x = 4. Dann y = 10 − 2×4 = 2. Probe: x − y = 4 − 2 = 2.',
          hints: ['Addiere beide Gleichungen, um y zu eliminieren.', '(2x+y) + (x−y) = 3x = 12.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Eine quadratische Gleichung hat D = b²−4ac = −5. Was gilt für die Lösungen?',
          options: ['Keine reelle Lösung', 'Genau eine reelle Lösung', 'Zwei verschiedene reelle Lösungen', 'Unendlich viele Lösungen', 'Eine Lösung ist immer x=0'],
          correctIndex: 0,
          explanation: 'D < 0 bedeutet, dass der Ausdruck unter der Wurzel negativ ist. Da die Wurzel einer negativen Zahl nicht reell ist, gibt es keine reelle Lösung. Im MedAT-Kontext bedeutet dies, dass das physikalische Problem keine sinnvolle Lösung hat.',
          hints: ['Was steht unter der Wurzel in der Lösungsformel?', 'Wenn D < 0: Wurzel von D ist nicht reell → keine reelle Lösung.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Ein Patient erhält 0,1 mg/kg Atropin. Er wiegt 75 kg. Das Medikament liegt als 0,5 mg/mL Lösung vor. Wie viele mL werden injiziert?',
          options: ['15 mL', '7,5 mL', '0,5 mL', '1,5 mL', '10 mL'],
          correctIndex: 0,
          explanation: 'Gesamtdosis = 0,1 mg/kg × 75 kg = 7,5 mg. Volumen = Dosis / Konzentration = 7,5 mg / 0,5 mg/mL = 15 mL. Die Einheiten kürzen sich korrekt: mg / (mg/mL) = mL.',
          hints: ['Schritt 1: Gesamtdosis = 0,1 × 75 = ? mg.', 'Schritt 2: Volumen = Gesamtdosis / Konzentration = 7,5 / 0,5 = ?'],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ma-2-02',
      title: 'Prozent-, Bruch- und Schlussrechnung',
      content: `# Prozent-, Bruch- und Schlussrechnung

Prozentrechnung, Brüche und Dreisatz sind in der Medizin allgegenwärtig. Von der Hämatokritzahl (42% = 0,42) über die Sauerstoffsättigung (98%) bis zur Verdünnung einer Lösung (1:10) — kaum eine klinische Situation kommt ohne diese Grundkenntnisse aus. Diese scheinbar einfachen Rechenarten sind am MedAT häufige Fehlerquellen, weil sie unter Zeitdruck angewendet werden müssen.

## Prozentrechnung

Der Prozentwert P ist der Anteil des Grundwerts G, ausgedrückt als Hundertstel:
P = G × p/100, wobei p der Prozentsatz ist.

Die drei Grundfragen der Prozentrechnung:
1. **Prozentwert berechnen:** P = G × p/100 (Wie viel sind 15% von 80? → 80 × 0,15 = 12)
2. **Grundwert berechnen:** G = P × 100/p (80 sind 40% von wie viel? → 80/0,4 = 200)
3. **Prozentsatz berechnen:** p = P/G × 100 (30 von 120 sind wie viel Prozent? → 30/120 × 100 = 25%)

Wichtig: Relativer vs. absoluter Unterschied. Wenn eine Größe von 50 auf 75 steigt, ist der absolute Unterschied 25; der relative Unterschied (prozentuale Änderung) ist 25/50 × 100 = 50%. Wenn sie von 75 auf 50 sinkt, ist die Änderung 25/75 × 100 = −33,3%. Diese Asymmetrie ist eine häufige Fehlerquelle.

## Bruchrechnung

Brüche repräsentieren Teile eines Ganzen. Die wichtigsten Operationen:

**Addition/Subtraktion:** Gleichnamig machen (gemeinsamer Nenner), dann Zähler addieren/subtrahieren.
1/3 + 1/4 = 4/12 + 3/12 = 7/12.

**Multiplikation:** Zähler mit Zähler, Nenner mit Nenner multiplizieren.
2/3 × 3/5 = 6/15 = 2/5.

**Division:** Mit dem Kehrwert multiplizieren.
2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6.

In der Medizin: Hämatokrit (Hkt) = Volumen der Erythrozyten / Gesamtblutvolumen. Bei Hkt = 0,42 = 42% bedeutet das: 42 mL Erythrozyten pro 100 mL Blut.

## Dreisatz (Schlussrechnung)

Der Dreisatz löst Proportionalitätsaufgaben. Es gibt direkten und indirekten Dreisatz.

**Direkter Dreisatz:** Wenn eine Größe steigt, steigt die andere ebenfalls (proportional). Beispiel: 3 Tabletten kosten 9 Euro. Wie viel kosten 5 Tabletten? → 9 Euro / 3 × 5 = 15 Euro.

**Indirekter (umgekehrter) Dreisatz:** Wenn eine Größe steigt, sinkt die andere (umgekehrt proportional). Beispiel: 4 Pumpen leeren einen Tank in 6 Stunden. Wie lange brauchen 8 Pumpen? → 4 × 6 / 8 = 3 Stunden.

## Verhältnis und Proportion

Verhältnisse drücken aus, wie sich zwei Größen zueinander verhalten: a:b = c:d bedeutet a/b = c/d, was gleichbedeutend ist mit a×d = b×c (Kreuzprodukt-Eigenschaft). Das Kreuzprodukt ist besonders nützlich zum Lösen von Proportionen.

Beispiel: x:5 = 12:15 → x × 15 = 5 × 12 → x = 60/15 = 4.

In der Medizin: Serumverdünnung 1:10 bedeutet 1 Teil Serum in 10 Teilen Gesamtvolumen (also 1 Teil Serum + 9 Teile Puffer). Achtung: Bei der Verdünnungsangabe 1:10 meinen manche Quellen 1 Teil Serum + 10 Teile Puffer (= 1:11 Gesamtverhältnis). Im klinischen Kontext ist die genaue Definition wichtig.

## Klinische Anwendung: Lösungskonzentrationen

Eine physiologische NaCl-Lösung ist 0,9%ig: 0,9 g NaCl pro 100 mL Lösung = 9 g/L. Eine 5%ige Glukoselösung enthält 5 g Glukose pro 100 mL = 50 g/L. Diese Prozentangaben sind Gewicht/Volumen-Prozent (g/v = w/v). Ejektionsfraktion (EF) = Schlagvolumen/enddiastolisches Volumen × 100%; normal ≥ 55%. Hämatokrit beim Mann ~42%, bei der Frau ~38%.`,
      lernziele: [
        'Die drei Grundfragen der Prozentrechnung sicher lösen',
        'Brüche addieren, subtrahieren, multiplizieren und dividieren',
        'Direkten und indirekten Dreisatz unterscheiden und anwenden',
        'Verhältnisse und Proportionen mit dem Kreuzprodukt lösen',
      ],
      sections: [
        {
          heading: 'Prozentrechnung — drei Fragetypen',
          text: 'Prozentwert P = G × p/100 (Was sind x%?). Grundwert G = P / (p/100) = P × 100/p (P sind x% von wie viel?). Prozentsatz p = P/G × 100 (Wie viel Prozent ist P von G?). Der häufigste Fehler ist die Verwechslung von absolutem und relativem Unterschied. Eine Blutdrucksenkung von 160 auf 140 mmHg ist absolut 20 mmHg, relativ 20/160 × 100 = 12,5%. Für den MedAT muss genau gelesen werden, welche der beiden Angaben gefordert ist.',
          merksatz: 'P = G × p/100 — der Prozentwert ist immer kleiner als der Grundwert (wenn p < 100)',
        },
        {
          heading: 'Bruchrechnung kompakt',
          text: 'Addition: gleichnamig machen. Multiplikation: direkt (Zähler × Zähler, Nenner × Nenner). Division: Kehrwert nehmen und multiplizieren. Der "Kehrwert-Trick" bei Division ist der wichtigste: a/b ÷ c/d = a/b × d/c = (a×d)/(b×c). Brüche kürzen vereinfacht das Rechnen: 15/25 = 3/5 (beide durch 5 geteilt). Am MedAT erscheinen Brüche oft versteckt in Proportionsaufgaben.',
        },
        {
          heading: 'Dreisatz und Verhältnisse in der Medizin',
          text: 'Der Dreisatz ist das flexibelste Werkzeug für Proportionalitätsaufgaben. Direkter Dreisatz: doppelte Menge → doppelter Preis. Indirekter Dreisatz: doppelte Anzahl Arbeiter → halbe Zeit. In der Pharmakologie: Wenn ein Medikament bei 50 kg Körpergewicht 100 mg Dosis erfordert, wie viel braucht ein 70-kg-Patient? (Direkter Dreisatz: 100/50 × 70 = 140 mg.) Verhältnis 1:10 Verdünnung: c_neu = c_alt/10.',
        },
      ],
      merksätze: [
        'Prozentwert = Grundwert × Prozentsatz/100; Grundwert = Prozentwert × 100/Prozentsatz',
        'Bruchdivision: niemals durch einen Bruch dividieren — immer mit dem Kehrwert multiplizieren',
        'Direkter Dreisatz: mehr → mehr; Indirekter Dreisatz: mehr → weniger',
      ],
      altfrage: {
        question: 'Ein Patient hat einen Hämatokrit von 30% (normal: 42%). Um wie viel Prozent ist sein Hämatokrit relativ erniedrigt?',
        answer: 'Absolute Erniedrigung: 42% − 30% = 12 Prozentpunkte. Relative Erniedrigung: 12/42 × 100 = 28,6%. Der Hämatokrit ist relativ um 28,6% erniedrigt. Achtung: "12 Prozentpunkte" und "28,6% relativer Rückgang" sind völlig verschiedene Aussagen und dürfen nicht verwechselt werden.',
      },
      klinischerBezug: 'Die Sauerstoffsättigung (SpO₂) ist ein Prozentwert: 98% bedeutet, dass 98% des Hämoglobins mit O₂ beladen sind. Fällt sie auf 90%, erscheint das harmlos (nur 8 Prozentpunkte), entspricht aber einem Sauerstoffpartialdruck von ~60 mmHg — der klinische Schwellenwert für Sauerstoffgabe. Dies illustriert, warum sowohl absolute Werte als auch Prozentwerte klinisch relevant sind und warum Ärzte beide Angaben sicher interpretieren müssen.',
      selfTest: [
        {
          question: '15% von 240 sind?',
          options: ['36', '24', '48', '15', '30'],
          correctIndex: 0,
          explanation: 'Prozentwert = 240 × 15/100 = 240 × 0,15 = 36. Alternativ: 10% von 240 = 24; 5% = 12; zusammen 36. Schnelle mentale Rechenstrategie: 10% + 5% des Grundwerts.',
          hints: ['Prozentwert = Grundwert × Prozentsatz/100.', '10% von 240 = 24; 5% von 240 = 12.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Was ergibt 3/4 ÷ 3/8?',
          options: ['2', '9/32', '1/2', '6/8', '3/2'],
          correctIndex: 0,
          explanation: '3/4 ÷ 3/8 = 3/4 × 8/3 = 24/12 = 2. Kehrwert von 3/8 ist 8/3. Dann multiplizieren: (3×8)/(4×3) = 24/12 = 2.',
          hints: ['Division durch einen Bruch = Multiplikation mit dem Kehrwert.', 'Kehrwert von 3/8 = 8/3. Dann 3/4 × 8/3 = ?'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Von 180 Studierenden bestehen 135 die Prüfung. Wie viel Prozent bestehen?',
          options: ['75%', '25%', '60%', '80%', '50%'],
          correctIndex: 0,
          explanation: 'Prozentsatz = (135/180) × 100 = 0,75 × 100 = 75%. 135/180 kürzen: beides durch 45 → 3/4 = 0,75 = 75%.',
          hints: ['Prozentsatz = Prozentwert / Grundwert × 100.', '135/180 = 3/4 = 0,75 → × 100.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: '6 Ärzte versorgen 60 Patienten in 8 Stunden. Wie lange brauchen 4 Ärzte für dieselbe Anzahl Patienten?',
          options: ['12 h', '6 h', '8 h', '10 h', '16 h'],
          correctIndex: 0,
          explanation: 'Indirekter Dreisatz: Weniger Ärzte → mehr Zeit. 6 Ärzte × 8 h = 4 Ärzte × x h → x = (6 × 8)/4 = 48/4 = 12 h. Das Produkt aus Ärztezahl und Zeit bleibt konstant (proportional zur geleisteten Arbeit).',
          hints: ['Indirekter Dreisatz: Ärzte × Stunden = konstant (Gesamtarbeit).', '6 × 8 = 4 × x → x = 48/4.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Eine Lösung ist von 200 mL auf 50 mL eingeengt worden. Um das Wievielfache steigt die Konzentration?',
          options: ['4-fach', '2-fach', '8-fach', '0,25-fach', '1/4-fach'],
          correctIndex: 0,
          explanation: 'Ursprungsvolumen 200 mL, Endvolumen 50 mL. Der Konzentrationsanstieg ist proportional zur Volumenreduktion (c₁V₁ = c₂V₂): c₂/c₁ = V₁/V₂ = 200/50 = 4. Die Konzentration steigt auf das 4-Fache.',
          hints: ['c₁ × V₁ = c₂ × V₂ (gleiche Stoffmenge). c₂/c₁ = V₁/V₂.', '200/50 = ?'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Ein Blutdruck sinkt von 160 mmHg auf 120 mmHg. Wie groß ist die relative Senkung?',
          options: ['25%', '40 mmHg', '33%', '20%', '75%'],
          correctIndex: 0,
          explanation: 'Relative Änderung = (Differenz / Ausgangswert) × 100 = (160 − 120)/160 × 100 = 40/160 × 100 = 25%. Der absolute Rückgang ist 40 mmHg, der relative Rückgang 25%. Beide Angaben sind korrekt, aber die Frage fordert die relative Senkung.',
          hints: ['Relative Änderung = Differenz / Ausgangswert × 100.', '(160 − 120)/160 × 100 = 40/160 × 100.'],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ma-2-03',
      title: 'Quadratische Gleichungen und binomische Formeln',
      content: `# Quadratische Gleichungen und binomische Formeln

Die binomischen Formeln sind algebraische Identitäten, die in der Mathematik und Naturwissenschaft immer wieder auftauchen. Sie erlauben die schnelle Umformung von Quadraten und Produkten bestimmter Ausdrücke. Das Beherrschen dieser Formeln spart am MedAT wertvolle Zeit.

## Die drei binomischen Formeln

**Erste binomische Formel (Quadrat der Summe):**
(a + b)² = a² + 2ab + b²

Merkhilfe: "Erstes Quadrat, plus doppeltes Produkt, plus zweites Quadrat." Beispiel: (x + 3)² = x² + 6x + 9.

**Zweite binomische Formel (Quadrat der Differenz):**
(a − b)² = a² − 2ab + b²

Das mittlere Glied ist negativ, die äußeren Quadrate sind positiv. Beispiel: (x − 4)² = x² − 8x + 16.

**Dritte binomische Formel (Differenz der Quadrate):**
(a + b)(a − b) = a² − b²

Das ist die wichtigste Formel für schnelles Faktorisieren. Beispiel: (x + 5)(x − 5) = x² − 25.

## Rückwärtsanwendung: Faktorisieren

Die binomischen Formeln sind besonders wertvoll, wenn man sie "rückwärts" liest — zum Faktorisieren eines Ausdrucks. Wenn man x² + 6x + 9 sieht, erkennt man das Muster der ersten binomischen Formel (a=x, b=3): = (x+3)². Wenn man x² − 25 sieht, erkennt man die dritte binomische Formel (a=x, b=5): = (x+5)(x−5).

## Scheitelpunktform der Parabel

Jede quadratische Funktion f(x) = ax² + bx + c lässt sich in die Scheitelpunktform bringen: f(x) = a(x − d)² + e, wobei (d, e) der Scheitelpunkt (Vertex) der Parabel ist. Der Scheitelpunkt ist das Minimum (bei a > 0) oder Maximum (bei a < 0) der Funktion.

Die x-Koordinate des Scheitelpunkts: d = −b/(2a). Die y-Koordinate: e = f(d) = c − b²/(4a).

Beispiel: f(x) = x² − 4x + 1. d = 4/2 = 2; e = 1 − 16/4 = 1 − 4 = −3. Scheitelpunkt: (2, −3). Scheitelpunktform: f(x) = (x − 2)² − 3.

## Vieta'sche Formeln

Wenn x₁ und x₂ die Lösungen von x² + px + q = 0 sind (mit führendem Koeffizient 1), gilt:
- x₁ + x₂ = −p (Summe der Lösungen = negativer Koeffizient von x)
- x₁ × x₂ = q (Produkt der Lösungen = konstantes Glied)

Beispiel: x² − 5x + 6 = 0. x₁ + x₂ = 5; x₁ × x₂ = 6. Man sucht zwei Zahlen mit Summe 5 und Produkt 6 → 2 und 3. Also x₁ = 2, x₂ = 3.

Die Vieta'schen Formeln erlauben oft schnelleres Lösen als die Lösungsformel — insbesondere wenn die Koeffizienten einfach sind.

## Anwendungen

Quadratische Gleichungen erscheinen in der Geometrie bei der Berechnung von Flächen und Dimensionen. Beispiel: Ein Rechteck hat Umfang 20 m und Fläche 24 m². Wenn die Länge x ist, ist die Breite (10 − x). Fläche: x(10 − x) = 24 → x² − 10x + 24 = 0. Diskriminante: 100 − 96 = 4. x = (10 ± 2)/2 → x = 6 oder x = 4. Dimensionen: 6 m × 4 m.`,
      lernziele: [
        'Die drei binomischen Formeln vorwärts und rückwärts anwenden',
        'Quadratische Ausdrücke faktorisieren und den Scheitelpunkt berechnen',
        'Die Vieta\'schen Formeln für schnelles Lösen einfacher quadratischer Gleichungen nutzen',
      ],
      sections: [
        {
          heading: 'Die binomischen Formeln auswendig lernen',
          text: '(a+b)² = a²+2ab+b²; (a−b)² = a²−2ab+b²; (a+b)(a−b) = a²−b². Der häufigste Fehler ist (a+b)² = a²+b² (ohne das mittlere Glied 2ab). Das ist falsch! Der Beweis: (a+b)² = (a+b)(a+b) = a·a + a·b + b·a + b·b = a²+2ab+b². Die dritte Formel (Differenz der Quadrate) ist besonders nützlich zum schnellen Faktorisieren: Immer wenn man ein Produkt der Form (x+y)(x−y) sieht, steht dahinter x²−y².',
          merksatz: '(a+b)² = a² + 2ab + b² — der mittlere Term 2ab ist der häufigste Vergesskandidat!',
        },
        {
          heading: 'Scheitelpunktform und quadratisches Ergänzen',
          text: 'Die Scheitelpunktform f(x) = a(x−d)²+e wird durch quadratisches Ergänzen gewonnen. Beispiel: f(x) = x²−6x+5. Schritt 1: x²−6x = (x−3)²−9. Schritt 2: f(x) = (x−3)²−9+5 = (x−3)²−4. Scheitelpunkt: (3, −4). Das quadratische Ergänzen ist auch für die Herleitung der allgemeinen Lösungsformel grundlegend.',
        },
        {
          heading: 'Vieta und schnelles Lösen',
          text: 'Für x²+px+q=0 gilt: Summe = −p, Produkt = q. Man sucht zwei Zahlen, die addiert −p und multipliziert q ergeben. Bei x²−5x+6=0: gesucht sind zwei Zahlen mit Summe 5 und Produkt 6. 2 und 3 erfüllen beide Bedingungen → Lösungen sind x=2 und x=3. Diese Methode ist oft schneller als die Lösungsformel, funktioniert aber nur wenn die Lösungen rationale Zahlen sind.',
        },
      ],
      merksätze: [
        '(a+b)² = a²+2ab+b²; (a−b)² = a²−2ab+b²; (a+b)(a−b) = a²−b²',
        'Scheitelpunkt: d = −b/(2a); Scheitelpunktform: f(x) = a(x−d)²+e',
        'Vieta: x₁+x₂ = −b/a; x₁·x₂ = c/a (für ax²+bx+c=0)',
      ],
      altfrage: {
        question: 'Eine kreisförmige Wundfläche hat einen Radius von (x + 2) cm. Die Fläche beträgt 16π cm². Bestimmen Sie x.',
        answer: 'Fläche = π·r² = π(x+2)² = 16π. Dividiere durch π: (x+2)² = 16. Wurzel ziehen: x+2 = ±4. Da x+2 ein Radius und daher positiv sein muss: x+2 = 4 → x = 2 cm. Der Radius beträgt 4 cm.',
      },
      klinischerBezug: 'Bei der Berechnung der Körperoberfläche (BSA = Body Surface Area) für Chemotherapiedosierungen wird die DuBois-Formel verwendet: BSA = 0,007184 × Größe^0,725 × Gewicht^0,425. Eine vereinfachte Formel ist BSA ≈ √(Größe × Gewicht / 3600). Für einen Patienten mit 170 cm und 70 kg: BSA ≈ √(170 × 70 / 3600) ≈ √3,31 ≈ 1,82 m². Dies illustriert, wie quadratische Wurzeln und Potenzen in klinische Berechnungen einfließen.',
      selfTest: [
        {
          question: 'Was ergibt (2x + 3)²?',
          options: ['4x² + 12x + 9', '4x² + 9', '2x² + 12x + 9', '4x² + 6x + 9', '4x² + 12x + 6'],
          correctIndex: 0,
          explanation: '(2x+3)² = (2x)² + 2·(2x)·3 + 3² = 4x² + 12x + 9. Nach der ersten binomischen Formel: a=2x, b=3. Der mittlere Term ist 2·a·b = 2·2x·3 = 12x.',
          hints: ['Wende (a+b)² = a²+2ab+b² an mit a=2x und b=3.', '(2x)² = 4x²; 2·(2x)·3 = 12x; 3² = 9.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welches Produkt ergibt x² − 16?',
          options: ['(x+4)(x−4)', '(x−4)²', '(x+4)²', '(x+8)(x−2)', '(x−8)(x+2)'],
          correctIndex: 0,
          explanation: 'x²−16 = x²−4² → dritte binomische Formel: (x+4)(x−4). Die Differenz zweier Quadrate a²−b² = (a+b)(a−b) mit a=x und b=4.',
          hints: ['Erkenne das a²−b²-Muster: x² = a², 16 = b² → b = ?', '(a+b)(a−b) = a²−b². Hier a=x, b=4.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Was ist der Scheitelpunkt von f(x) = x² − 6x + 5?',
          options: ['(3, −4)', '(−3, 4)', '(6, 5)', '(3, 5)', '(−6, 5)'],
          correctIndex: 0,
          explanation: 'Scheitelpunkt-x: d = −(−6)/(2·1) = 3. Scheitelpunkt-y: e = f(3) = 9 − 18 + 5 = −4. Scheitelpunkt: (3, −4). Alternativ durch quadratisches Ergänzen: f(x) = (x−3)²−4.',
          hints: ['Scheitelpunkt-x: d = −b/(2a) = −(−6)/(2·1).', 'Scheitelpunkt-y: e = f(d) = f(3) = 9 − 18 + 5.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Mit Vieta: Welche Gleichung hat die Lösungen x₁=3 und x₂=−7?',
          options: ['x² + 4x − 21 = 0', 'x² − 4x − 21 = 0', 'x² + 4x + 21 = 0', 'x² − 4x + 21 = 0', 'x² + 21x − 4 = 0'],
          correctIndex: 0,
          explanation: 'Summe: x₁+x₂ = 3+(−7) = −4 = −b → b = 4. Produkt: x₁·x₂ = 3·(−7) = −21 = c. Gleichung: x²+4x−21 = 0. Probe: (x−3)(x+7) = x²+7x−3x−21 = x²+4x−21.',
          hints: ['Summe der Lösungen = −p (für x²+px+q=0). Hier Summe = 3+(−7).', 'Produkt der Lösungen = q. Hier Produkt = 3 × (−7).'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ist (√5 + √3)(√5 − √3)?',
          options: ['2', '√2', '8', '√8', '√15'],
          correctIndex: 0,
          explanation: '(√5+√3)(√5−√3) = (√5)²−(√3)² = 5−3 = 2. Das ist die dritte binomische Formel: (a+b)(a−b) = a²−b² mit a=√5 und b=√3.',
          hints: ['Erkenne die dritte binomische Formel: (a+b)(a−b) = a²−b².', '(√5)² = 5; (√3)² = 3.'],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ma-2-04',
      title: 'Potenz- und Wurzelgesetze',
      content: `# Potenz- und Wurzelgesetze

Potenzen und Wurzeln begegnen uns in der Naturwissenschaft ständig: Exponentialwachstum, Halbwertszeiten, pH-Berechnungen, Schalldruckpegel — all diese Konzepte basieren auf Potenz- und Logarithmengesetzen. Ein sicheres Fundament in diesen Rechenregeln ist für den MedAT unverzichtbar.

## Potenzgesetze — vollständige Übersicht

Für beliebige Basen a, b (mit a, b > 0) und ganzzahlige Exponenten m, n gelten:

1. **Multiplikation gleicher Basis:** aⁿ × aᵐ = a^(n+m). Beispiel: 2³ × 2⁴ = 2⁷ = 128.
2. **Division gleicher Basis:** aⁿ / aᵐ = a^(n−m). Beispiel: 3⁵ / 3² = 3³ = 27.
3. **Potenz einer Potenz:** (aⁿ)ᵐ = a^(n·m). Beispiel: (2³)² = 2⁶ = 64.
4. **Potenz eines Produkts:** (a·b)ⁿ = aⁿ·bⁿ. Beispiel: (2·3)³ = 2³·3³ = 8·27 = 216.
5. **Potenz eines Quotienten:** (a/b)ⁿ = aⁿ/bⁿ.
6. **Nullter Exponent:** a⁰ = 1 (für a ≠ 0).
7. **Negativer Exponent:** a⁻ⁿ = 1/aⁿ.
8. **Gebrochener Exponent:** a^(1/n) = ⁿ√a; a^(m/n) = ⁿ√(aᵐ).

## Wurzelgesetze

Wurzeln sind Potenzen mit gebrochenem Exponenten. ⁿ√a = a^(1/n).

Die wichtigsten Regeln:
- √(a·b) = √a · √b (Produkt unter der Wurzel)
- √(a/b) = √a / √b (Quotient unter der Wurzel)
- (√a)² = a (Wurzel und Quadrat heben sich auf)
- √(a²) = |a| (Betragsbildung bei geraden Wurzeln!)
- ⁿ√(aᵐ) = a^(m/n)

Wichtig: Die Quadratwurzel ist nur für nicht-negative Zahlen definiert (im Reellen).

## Logarithmengesetze

Der Logarithmus ist die Umkehrfunktion der Exponentialfunktion. log_a(x) = y bedeutet a^y = x.

**Produktregel:** log(a·b) = log(a) + log(b)
**Quotientenregel:** log(a/b) = log(a) − log(b)
**Potenzregel:** log(aⁿ) = n·log(a)
**Basiswechsel:** log_a(x) = log_b(x)/log_b(a)

Diese Regeln erlauben, Multiplikation auf Addition zurückzuführen — das historische Prinzip des Rechenschiebers. Heute sind sie essentiell für pH-Berechnungen und Halbwertszeit-Aufgaben.

## Der natürliche Logarithmus

ln(x) = log_e(x) mit e = 2,71828... Die Euler'sche Zahl e ist die Basis des natürlichen Wachstums. Wichtige Beziehungen: ln(e) = 1; ln(1) = 0; e^(ln(x)) = x; ln(eˣ) = x.

Umrechnung: ln(x) = log₁₀(x) / log₁₀(e) = log₁₀(x) / 0,4343 ≈ 2,303 × log₁₀(x).

## Medizinische Anwendungen

**Halbwertszeit:** N(t) = N₀ × (1/2)^(t/T) = N₀ × 2^(−t/T) = N₀ × e^(−λt), wobei λ = ln(2)/T = 0,693/T.

Beispiel: ¹³¹I hat T = 8 Tage. Nach 24 Tagen (= 3 Halbwertszeiten): N = N₀ × (1/2)³ = N₀/8 = 12,5%.

**pH-Rechnung:** pH = −log₁₀[H⁺]. Für pH 7,4 (arterielles Blut): [H⁺] = 10^(−7,4) ≈ 4 × 10⁻⁸ mol/L.

Die Logarithmengesetze verbinden also Chemie, Physik und Biologie — eine echte Querschnittsanforderung am MedAT.`,
      lernziele: [
        'Alle Potenzgesetze korrekt anwenden, inklusive negativer und gebrochener Exponenten',
        'Wurzelgesetze für Vereinfachungen nutzen',
        'Logarithmengesetze für Produkt, Quotient und Potenz anwenden',
        'Halbwertszeit-Berechnungen mit Exponentialfunktionen durchführen',
      ],
      sections: [
        {
          heading: 'Potenzgesetze — die acht Grundregeln',
          text: 'Die wichtigste Gruppe: gleiche Basis, verschiedene Exponenten. Multiplikation → Exponenten addieren; Division → Exponenten subtrahieren; Potenz → Exponenten multiplizieren. Diese drei Regeln folgen alle aus der Definition von Potenzen. Der häufigste Fehler: (aⁿ)ᵐ mit aⁿ⁺ᵐ verwechseln — es ist aber a^(n·m)! Und (a·b)ⁿ = aⁿ·bⁿ, aber (a+b)ⁿ ≠ aⁿ+bⁿ!',
          merksatz: 'aⁿ × aᵐ = a^(n+m); (aⁿ)ᵐ = a^(n·m) — Exponent addieren vs. multiplizieren!',
        },
        {
          heading: 'Logarithmen — das Werkzeug für Exponenten',
          text: 'log_a(x) = y wenn a^y = x. Merksatz: "Logarithmus ist der Exponent, den die Basis braucht, um x zu erzeugen." log₁₀(1000) = 3, weil 10³ = 1000. Die Produktregel log(a·b) = log(a)+log(b) ist fundamental: Sie ist die Grundlage, warum pH = −log[H⁺] additive Eigenschaften hat. Pufferlösungen (Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])) nutzen diese Regel direkt.',
        },
        {
          heading: 'Halbwertszeit und Exponentialfunktion',
          text: 'N(t) = N₀ × (½)^(t/T) beschreibt radioaktiven Zerfall und Medikamentenabbau gleichermaßen. Nach einer Halbwertszeit ist noch 50% vorhanden; nach zwei 25%; nach n Halbwertszeiten 100/2ⁿ Prozent. Für klinische Entscheidungen: Nach 5 Halbwertszeiten sind noch 100/32 ≈ 3% vorhanden — ein Medikament gilt dann als ausgewaschen. Der Zusammenhang mit dem natürlichen Logarithmus: T = ln(2)/λ ≈ 0,693/λ.',
          merksatz: 'Nach n Halbwertszeiten: noch (½)ⁿ = 2⁻ⁿ der Ausgangsmenge; nach 10 T₁/₂: unter 0,1%',
        },
      ],
      merksätze: [
        'aⁿ × aᵐ = a^(n+m); aⁿ / aᵐ = a^(n−m); (aⁿ)ᵐ = a^(n·m)',
        'log(a·b) = log a + log b; log(a/b) = log a − log b; log(aⁿ) = n·log a',
        'Halbwertszeit: N(t) = N₀ × (½)^(t/T); nach 5 T₁/₂: noch ~3% vorhanden',
      ],
      altfrage: {
        question: '¹³¹I (Iod-131) hat eine Halbwertszeit von 8 Tagen. Ein Patient hat 400 MBq Aktivität. Wie viel ist nach 24 Tagen noch vorhanden?',
        answer: 'Schritt 1: Anzahl Halbwertszeiten: 24 Tage / 8 Tage = 3 Halbwertszeiten. Schritt 2: N(t) = 400 × (1/2)³ = 400 × 1/8 = 50 MBq. Nach 24 Tagen sind noch 50 MBq (= 12,5%) vorhanden.',
      },
      klinischerBezug: 'Die Pharmakokinetik basiert auf Exponentialfunktionen: Viele Medikamente werden mit einer Kinetik 1. Ordnung abgebaut, d.h. N(t) = N₀·e^(−kt). Die Halbwertszeit T₁/₂ = ln(2)/k ≈ 0,693/k bestimmt das Dosierungsintervall. Aspirin hat T₁/₂ ≈ 15 min (für die Muttersubstanz), Digoxin ≈ 36 h, Amiodaron ≈ 40–55 Tage. Diese enormen Unterschiede erklären, warum Amiodaron wochenlang im Körper verweilt und ein Loading-Dose-Regime benötigt.',
      selfTest: [
        {
          question: 'Was ergibt 2³ × 2⁵?',
          options: ['256', '64', '128', '32', '512'],
          correctIndex: 0,
          explanation: '2³ × 2⁵ = 2^(3+5) = 2⁸ = 256. Exponenten werden bei gleicher Basis addiert. 2⁸ = 256.',
          hints: ['Gleiche Basis: Exponenten addieren.', '2^(3+5) = 2⁸ = ?'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Was ist (3²)³?',
          options: ['729', '27', '81', '243', '9'],
          correctIndex: 0,
          explanation: '(3²)³ = 3^(2·3) = 3⁶ = 729. Bei Potenz einer Potenz werden die Exponenten multipliziert (nicht addiert!). 3⁶ = 729.',
          hints: ['(aⁿ)ᵐ = a^(n·m). Exponent: 2 × 3 = ?', '3⁶ = 3³ × 3³ = 27 × 27 = 729.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Was ergibt √72 vereinfacht?',
          options: ['6√2', '8√2', '3√8', '4√3', '9√2'],
          correctIndex: 0,
          explanation: '√72 = √(36·2) = √36·√2 = 6·√2. Produktregel der Wurzeln: √(a·b) = √a·√b. Man sucht den größten quadratischen Teiler: 72 = 36 × 2, und √36 = 6.',
          hints: ['Schreibe 72 als Produkt mit einer Quadratzahl: 72 = 36 × 2.', '√(36 × 2) = √36 × √2 = 6 × √2.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ergibt log₁₀(100) + log₁₀(10)?',
          options: ['3', '1000', '2', '10', '0,3'],
          correctIndex: 0,
          explanation: 'log₁₀(100) = 2 (weil 10² = 100) und log₁₀(10) = 1 (weil 10¹ = 10). Summe = 3. Alternativ mit Produktregel: log₁₀(100) + log₁₀(10) = log₁₀(1000) = 3.',
          hints: ['log₁₀(10ⁿ) = n. Was sind die Exponenten für 100 und 10?', 'Oder: log₁₀(100) + log₁₀(10) = log₁₀(100×10) = log₁₀(1000).'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Ein Medikament hat T₁/₂ = 6 h. Nach 18 h sind noch wie viel Prozent der Ausgangsdosis vorhanden?',
          options: ['12,5%', '25%', '50%', '6,25%', '33%'],
          correctIndex: 0,
          explanation: 'Anzahl Halbwertszeiten: 18/6 = 3. N = N₀ × (1/2)³ = N₀/8 = 12,5%. Nach jeder Halbwertszeit halbiert sich die Menge: 100% → 50% → 25% → 12,5%.',
          hints: ['Wie viele Halbwertszeiten passen in 18 h?', 'Nach 3 Halbwertszeiten: (1/2)³ = 1/8 = ?%'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Wie lautet 4^(3/2)?',
          options: ['8', '6', '4', '16', '12'],
          correctIndex: 0,
          explanation: '4^(3/2) = (4^(1/2))³ = (√4)³ = 2³ = 8. Oder: 4^(3/2) = (4³)^(1/2) = √64 = 8. Gebrochene Exponenten kombinieren Wurzel (Nenner) und Potenz (Zähler).',
          hints: ['a^(m/n) = (ⁿ√a)ᵐ. Hier: 4^(3/2) = (²√4)³.', '√4 = 2; 2³ = 8.'],
          difficulty: 3,
          tags: [],
        },
      ],
    },
  ],
};
