import type { Kapitel } from '../types';

export const mathKap1: Kapitel = {
  id: 'math-kap1',
  title: 'Zehnerpotenzen und Präfixe',
  subject: 'mathematik',
  icon: '🔢',
  estimatedTime: '40 min',
  unterkapitel: [
    {
      id: 'ma-1-01',
      title: 'Zehnerpotenzen — Schreibweise und Rechenregeln',
      content: `# Zehnerpotenzen — Schreibweise und Rechenregeln

Zehnerpotenzen sind eines der grundlegendsten Werkzeuge in Naturwissenschaft und Medizin. Sie erlauben es, extrem große und extrem kleine Zahlen präzise, kompakt und ohne fehleranfällige Nullenketten darzustellen. Der Durchmesser eines roten Blutkörperchens beträgt etwa 0,000 008 m — eine Schreibweise, die fehleranfällig und unübersichtlich ist. In Zehnerpotenzen-Notation lautet dieselbe Größe 8 × 10⁻⁶ m, kurz und eindeutig. Wer in der Medizin mit Zellgrößen, Ionenkonzentrationen, Wirkstoffdosen oder Halbwertszeiten radioaktiver Substanzen arbeitet, muss Zehnerpotenzen sicher beherrschen.

## Grunddefinition und positive Exponenten

Die Schreibweise 10ⁿ bedeutet, dass die Zahl 10 genau n-mal mit sich selbst multipliziert wird:
- 10¹ = 10
- 10² = 10 × 10 = 100
- 10³ = 10 × 10 × 10 = 1.000
- 10⁶ = 1.000.000
- 10⁹ = 1.000.000.000

Der Exponent n gibt direkt an, wie viele Stellen die Zahl hat — oder anders formuliert: wie viele Nullen hinter der 1 stehen. Diese Regel gilt exakt nur für ganzzahlige Potenzen von 10, ist aber eine verlässliche Eselsbrücke: Bei 10¹² stehen zwölf Nullen. Im Blut zirkulieren beim Erwachsenen ca. 5 × 10¹² rote Blutkörperchen pro Liter — eine Zahl, die man nur durch Zehnerpotenzen handhabbar macht.

## Negative Exponenten und der Sonderfall 10⁰

Negative Exponenten beschreiben Brüche, also Zahlen kleiner als 1:
- 10⁻¹ = 1/10 = 0,1
- 10⁻² = 1/100 = 0,01
- 10⁻³ = 1/1.000 = 0,001
- 10⁻⁶ = 0,000 001
- 10⁻⁹ = 0,000 000 001

Allgemein gilt: 10⁻ⁿ = 1 / 10ⁿ. Der Exponent gibt an, um wie viele Stellen die 1 nach rechts verschoben wird (d. h., wie viele Nullen nach dem Komma vor der 1 stehen). So ist 10⁻⁶ eine Zahl, bei der die 1 an der sechsten Dezimalstelle steht.

Der Sonderfall 10⁰ = 1 überrascht viele Anfänger, folgt aber zwingend aus der Algebra: Wenn man 10² / 10² = 1 schreibt, ergibt die Potenzregel 10²⁻² = 10⁰ = 1. Jede Zahl (außer 0) hoch null ergibt 1.

## Die vier Grundrechenregeln für Zehnerpotenzen

**Regel 1 — Multiplikation:** Beim Multiplizieren werden die Exponenten addiert.
10ᵃ × 10ᵇ = 10^(a+b)
Beispiel: 10³ × 10⁴ = 10⁷

**Regel 2 — Division:** Beim Dividieren werden die Exponenten subtrahiert.
10ᵃ / 10ᵇ = 10^(a−b)
Beispiel: 10⁶ / 10² = 10⁴

**Regel 3 — Potenzieren:** Beim Potenzieren werden die Exponenten multipliziert.
(10ᵃ)ᵇ = 10^(a×b)
Beispiel: (10³)² = 10⁶

**Regel 4 — Wurzelziehen:** Das Wurzelziehen ist ein Spezialfall des Potenzierens mit gebrochenem Exponenten.
√(10ⁿ) = 10^(n/2)
Beispiel: √(10⁶) = 10³

Diese vier Regeln gelten analog für beliebige Basen, sind für die Basis 10 aber besonders intuitiv, weil jede Potenz eine klar benennbare Größenordnung darstellt.

## Multiplikation von Zahlen in Zehnerpotenzen-Form

Wenn nicht nur die Zehnerpotenzen, sondern ganze Ausdrücke der Form (a × 10ᵐ) × (b × 10ⁿ) multipliziert werden, geht man in zwei Schritten vor:
1. Die Vorfaktoren a und b werden normal multipliziert.
2. Die Zehnerpotenzen werden nach Regel 1 addiert.

Ergebnis: (a × b) × 10^(m+n), danach ggf. in normalisierte Form bringen (Vorfaktor zwischen 1 und 10).

Beispiel: (3 × 10⁴) × (4 × 10⁻²) = 12 × 10² = 1,2 × 10³

## Größenordnungen vergleichen und abschätzen

Ein wesentlicher Vorteil der Zehnerpotenzen-Darstellung liegt in der schnellen Abschätzung von Verhältnissen. Wenn die Konzentration von Substanz A 10⁻³ mol/L beträgt und die von Substanz B 10⁻⁶ mol/L, dann ist A genau 10³ = 1.000-mal konzentrierter als B. Diese Methode des "Exponenten-Subtrahierens" ist in der Pharmakologie, Toxikologie und klinischen Chemie alltäglich.

Ein Virus (ca. 10⁻⁷ m) ist etwa 10-mal kleiner als eine Bakterienzelle (ca. 10⁻⁶ m), etwa 100-mal kleiner als eine menschliche Zelle (ca. 10⁻⁵ m) und etwa 10 Millionen Mal kleiner als ein Mensch (ca. 1 m = 10⁰ m). Solche Verhältnisse werden durch Exponenten-Subtraktion sofort sichtbar.

## Fehlerquellen und häufige Missverständnisse

**Fallstrick 1:** 10⁻³ ist NICHT das gleiche wie −10³. Der Exponent ist negativ, die Zahl selbst (0,001) ist positiv.

**Fallstrick 2:** Beim Addieren von Zahlen in Zehnerpotenzen-Darstellung können die Exponenten NICHT einfach addiert werden. Erst müssen beide Zahlen auf denselben Exponenten gebracht werden, dann werden die Vorfaktoren addiert.
Falsch: 3 × 10³ + 2 × 10² ≠ 5 × 10⁵
Richtig: 3 × 10³ + 0,2 × 10³ = 3,2 × 10³

**Fallstrick 3:** (10³)² = 10⁶, aber 10³ × 10³ ergibt ebenfalls 10⁶ — das ist kein Zufall, sondern Konsequenz der Regeln 1 und 3.
`,
      lernziele: [
        'Zehnerpotenzen mit positiven und negativen Exponenten korrekt interpretieren und ineinander umrechnen.',
        'Die vier Grundrechenregeln (Multiplikation, Division, Potenzieren, Wurzeln) auf Zehnerpotenzen anwenden.',
        'Produkte und Quotienten von Ausdrücken in Zehnerpotenzen-Form berechnen und normalisieren.',
        'Größenordnungen medizinisch relevanter Größen abschätzen und vergleichen.',
        'Typische Fehler (Addition von Potenzen, Verwechslung negativer Exponenten) erkennen und vermeiden.',
      ],
      sections: [
        {
          heading: 'Positive und negative Exponenten im Überblick',
          text: 'Positive Exponenten stehen für Vielfache von 10 (10¹ = 10, 10³ = 1.000, 10⁶ = 1.000.000), negative Exponenten für Bruchteile von 1 (10⁻¹ = 0,1; 10⁻³ = 0,001; 10⁻⁶ = 0,000 001). Der Exponent gibt immer an, um wie viele Dezimalstellen die Zahl gegenüber der 1 verschoben ist — nach links (positiv) oder nach rechts (negativ). Der Sonderfall 10⁰ = 1 ist der neutrale Ausgangspunkt. In der Medizin findet man beide Vorzeichen ständig: Wirkstoffkonzentrationen im Nanogrammbereich (10⁻⁹ g) und Blutvolumen in Litern (10⁰ L) existieren nebeneinander im selben Patienten.',
          merksatz: 'Positiver Exponent = Nullen nach der 1; negativer Exponent = Nullen vor der 1 (hinter dem Komma). 10⁰ = 1 ist der gemeinsame Ursprung.',
        },
        {
          heading: 'Rechenregeln: Multiplikation und Division',
          text: 'Die wichtigsten Regeln im Alltag sind Multiplikation und Division. Beim Multiplizieren addiert man die Exponenten: 10³ × 10⁴ = 10⁷. Beim Dividieren subtrahiert man sie: 10⁶ ÷ 10² = 10⁴. Diese Regeln gelten unabhängig davon, ob die Exponenten positiv, negativ oder null sind. Beispiel aus der Pharmakologie: Eine Tablette enthält 500 × 10⁻³ g = 5 × 10⁻¹ g = 0,5 g Wirkstoff. Der Schritt vom Milli- in den normalen Bereich ist eine Division durch 10³, also eine Subtraktion des Exponenten um 3.',
          merksatz: 'Multiplizieren → Exponenten addieren. Dividieren → Exponenten subtrahieren. Potenzieren → Exponenten multiplizieren.',
        },
        {
          heading: 'Größenordnungen und Verhältnisse abschätzen',
          text: 'Zwei Zahlen in Zehnerpotenzen-Darstellung zu vergleichen bedeutet: Man subtrahiert ihre Exponenten, um das Verhältnis zu bestimmen. Substanz A (10⁻⁴ mol/L) ist gegenüber Substanz B (10⁻⁷ mol/L) um den Faktor 10³ = 1.000 konzentrierter. Dieser Denkschritt ersetzt komplizierte Divisionen durch einfache Subtraktion. In der Toxikologie ist diese Methode essenziell: Wenn die letale Dosis eines Medikaments 10⁻² g/kg und die therapeutische Dosis 10⁻⁵ g/kg beträgt, ist der therapeutische Index 10³ — das Medikament hat also einen sehr großen Sicherheitsabstand.',
          merksatz: 'Verhältnis zweier Zehnerpotenzen = Differenz der Exponenten als neue Zehnerpotenz. 10⁻³ : 10⁻⁶ = 10³ = Faktor 1.000.',
        },
      ],
      merksätze: [
        '10ⁿ hat n Nullen hinter der 1 (n > 0) bzw. n Nullen vor der 1 nach dem Komma (n < 0).',
        '10⁰ = 1 — jede Zahl hoch null ergibt 1.',
        'Multiplizieren: Exponenten addieren. 10³ × 10⁴ = 10⁷.',
        'Dividieren: Exponenten subtrahieren. 10⁵ / 10² = 10³.',
        'Potenzieren: Exponenten multiplizieren. (10²)³ = 10⁶.',
        '10⁻ⁿ = 1/10ⁿ — negativer Exponent bedeutet Kehrbruch, nicht negative Zahl.',
        'Addition von Potenzen: erst auf gleichen Exponenten bringen, dann Vorfaktoren addieren.',
        'Verhältnis zweier Zehnerpotenzen = Differenz der Exponenten als neue Zehnerpotenz.',
        'Normalisierte Form: Vorfaktor zwischen 1 (inklusiv) und 10 (exklusiv), z. B. 1,2 × 10³.',
        'Im Blut: ~5 × 10¹² Erythrozyten/L — ohne Zehnerpotenzen nicht handhabbar.',
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: 'Erklären Sie, warum Zehnerpotenzen in der Medizin unverzichtbar sind, und beschreiben Sie an drei konkreten medizinischen Beispielen, wie Größenordnungen durch die Exponenten verglichen werden.',
        answer: `Zehnerpotenzen sind in der Medizin unverzichtbar, weil biologische und chemische Größen über einen Bereich von mehr als 30 Größenordnungen variieren — von subatomaren Abständen (10⁻¹⁵ m, Atomkernradius) bis zu makroskopischen Maßstäben. Ohne eine kompakte Exponentialschreibweise würden Zahlen mit Dutzenden von Nullen die Kommunikation und Berechnung unmöglich machen.

**Beispiel 1 — Ionenkonzentrationen:** Im Blutplasma beträgt die Natriumkonzentration ca. 140 × 10⁻³ mol/L = 1,4 × 10⁻¹ mol/L, während die Calciumkonzentration bei etwa 2,5 × 10⁻³ mol/L liegt. Das Verhältnis Na⁺ zu Ca²⁺ ergibt sich durch Subtraktion der Exponenten: (−1) − (−3) = 2, also Faktor 10² = 56. Klinisch bedeutsam ist, dass selbst kleine Verschiebungen in diesen Konzentrationen (z. B. Hypokalkämie: Ca²⁺ < 2 × 10⁻³ mol/L) zu Tetanie oder kardialen Arrhythmien führen.

**Beispiel 2 — Pharmakologie:** Die therapeutische Konzentration von Digoxin im Serum liegt bei 0,5–2 × 10⁻⁹ g/mL (Nanogrammbereich). Die toxische Konzentration beginnt bei >2 × 10⁻⁹ g/mL. Das therapeutische Fenster ist also extrem schmal — ein Faktor von ca. 4. Das erklärt, warum Digoxin engmaschiges Monitoring erfordert.

**Beispiel 3 — Zellbiologie:** Menschliche Zellen haben einen Durchmesser von ca. 10–100 µm = 10⁻⁵ bis 10⁻⁴ m. Viren messen ca. 20–300 nm = 2 × 10⁻⁸ bis 3 × 10⁻⁷ m. Das Verhältnis Zelle zu Virus beträgt 10⁻⁵ / 10⁻⁷ = 10² = Faktor 100 — eine Zelle ist mindestens 100-mal größer als ein typisches Virus. Dieses Verhältnis erklärt, warum Viren problemlos in Zellen eindringen und sich dort vervielflältigen können.

Zusammenfassend ermöglichen Zehnerpotenzen das schnelle Abschätzen von Verhältnissen durch bloße Subtraktion der Exponenten, was in der klinischen Entscheidungsfindung und im wissenschaftlichen Denken unverzichtbar ist.`,
      },
      klinischerBezug: 'Medikamentendosen werden oft im Nanogramm- (10⁻⁹ g) oder Mikrogrammbereich (10⁻⁶ g) angegeben; eine Verwechslung der Exponenten um nur eine Stelle entspricht einem Zehnfachfehler in der Dosis — klinisch potentiell letal. Der pH-Wert des Blutes (7,35–7,45) basiert auf dem negativen dekadischen Logarithmus der H⁺-Konzentration: Ein pH-Abfall von 7,4 auf 6,4 entspricht einer zehnfachen Zunahme der H⁺-Ionen-Konzentration (von ~40 × 10⁻⁹ mol/L auf ~400 × 10⁻⁹ mol/L).',
      selfTest: [
        {
          question: 'Welches Ergebnis liefert die Berechnung 10⁴ × 10⁻² ?',
          options: [
            'A) 10⁸',
            'B) 10²',
            'C) 10⁶',
            'D) 10⁻⁸',
            'E) 10⁻²',
          ],
          correctIndex: 1,
          explanation: 'Bei der Multiplikation von Zehnerpotenzen werden die Exponenten addiert: 10⁴ × 10⁻² = 10^(4+(−2)) = 10². Der Vorfaktor 1 bleibt unverändert. Das Ergebnis 10² = 100 lässt sich zur Probe nachvollziehen: 10.000 × 0,01 = 100. Exponenten addieren — nicht multiplizieren — ist die korrekte Rechenregel für die Multiplikation von Zehnerpotenzen. Häufiger Fehler: Exponenten multiplizieren statt addieren, was 10⁻⁸ ergäbe.',
          hints: [
            'Bei der Multiplikation von Zehnerpotenzen werden die Exponenten nicht multipliziert, sondern addiert.',
            'Addiere 4 und (−2) und setze das Ergebnis als neuen Exponenten ein.',
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Ein Medikament wird in einer Konzentration von 3 × 10⁻⁶ g/mL gelöst. Wie viel Gramm Wirkstoff sind in 2 × 10³ mL Lösung enthalten?',
          options: [
            'A) 6 × 10⁻³ g',
            'B) 6 × 10⁻² g',
            'C) 6 × 10⁹ g',
            'D) 1,5 × 10⁻⁹ g',
            'E) 6 × 10⁻¹⁸ g',
          ],
          correctIndex: 0,
          explanation: 'Masse = Konzentration × Volumen. (3 × 10⁻⁶ g/mL) × (2 × 10³ mL) = (3 × 2) × 10^(−6+3) = 6 × 10⁻³ g = 0,006 g = 6 mg. Die Vorfaktoren werden normal multipliziert (3 × 2 = 6), die Exponenten addiert (−6 + 3 = −3). Das Ergebnis 6 mg ist eine pharmakologisch realistische Einzeldosis. Wichtig: Vorfaktoren und Exponenten immer getrennt behandeln.',
          hints: [
            'Berechne Masse = Konzentration × Volumen. Vorfaktoren multiplizieren, Exponenten addieren.',
            'Vorfaktoren: 3 × 2 = 6. Exponenten: (−6) + 3 = −3. Ergebnis: 6 × 10⁻³ g.',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ist das Ergebnis von (10³)⁴ ?',
          options: [
            'A) 10⁷',
            'B) 10¹²',
            'C) 10³⁴',
            'D) 10⁸¹',
            'E) 10⁴³',
          ],
          correctIndex: 1,
          explanation: 'Beim Potenzieren einer Zehnerpotenz werden die Exponenten multipliziert: (10ᵃ)ᵇ = 10^(a×b). Hier gilt (10³)⁴ = 10^(3×4) = 10¹². Das Ergebnis ist 1 Billion. Zur Probe: (10³)⁴ = 10³ × 10³ × 10³ × 10³ = 10^(3+3+3+3) = 10¹² — die Multiplikationsregel führt zum gleichen Ergebnis. Ein häufiger Fehler wäre, 3 und 4 zu addieren (= 10⁷) statt zu multiplizieren.',
          hints: [
            'Beim Potenzieren einer Zehnerpotenz werden die Exponenten miteinander multipliziert, nicht addiert.',
            '(10³)⁴ bedeutet 10³ viermal multipliziert: 3 × 4 = 12, also 10¹².',
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Die H⁺-Konzentration im arteriellen Blut beträgt 4 × 10⁻⁸ mol/L. Im Urin beträgt sie 4 × 10⁻⁵ mol/L. Um welchen Faktor ist die H⁺-Konzentration im Urin höher als im Blut?',
          options: [
            'A) Faktor 3',
            'B) Faktor 10',
            'C) Faktor 100',
            'D) Faktor 1.000',
            'E) Faktor 10.000',
          ],
          correctIndex: 3,
          explanation: 'Das Verhältnis zweier Zehnerpotenzen ergibt sich durch Subtraktion der Exponenten: 10⁻⁵ / 10⁻⁸ = 10^(−5−(−8)) = 10^(−5+8) = 10³ = 1.000. Der Urin hat also eine tausendfach höhere H⁺-Konzentration als das Blut. Dies ist physiologisch plausibel: Blut hat pH 7,4 (stark gepuffert), während der Urin pH-Werte von 4,5–8,0 annehmen kann. Bei pH 5 liegt der H⁺-Gehalt etwa 2.500-mal höher als bei pH 7,4. Die Niere eliminiert täglich Säuren, die der Körperstoffwechsel produziert.',
          hints: [
            'Verhältnis zweier Zehnerpotenzen = Differenz der Exponenten als neue Zehnerpotenz.',
            'Subtrahiere: (−5) − (−8) = +3. Der Faktor ist also 10³ = 1.000.',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welche Aussage über 10⁻⁶ ist FALSCH?',
          options: [
            'A) 10⁻⁶ = 1 / 10⁶',
            'B) 10⁻⁶ = 0,000 001',
            'C) 10⁻⁶ ist eine negative Zahl.',
            'D) 10⁻⁶ × 10⁶ = 1',
            'E) 10⁻⁶ entspricht dem Präfix Mikro (µ).',
          ],
          correctIndex: 2,
          explanation: '10⁻⁶ ist eine positive Zahl (nämlich 0,000 001 = ein Millionstel). Der negative Exponent bedeutet, dass die Zahl ein Bruchanteil von 1 ist, aber die Zahl selbst ist nicht negativ. Alle anderen Aussagen sind korrekt: 10⁻⁶ = 1/10⁶ (Definition negativer Exponenten); 10⁻⁶ = 0,000 001 (ausgeschriebene Dezimalform); 10⁻⁶ × 10⁶ = 10⁰ = 1 (Multiplikationsregel); und das SI-Präfix Mikro (µ) entspricht genau dem Faktor 10⁻⁶ (z. B. 1 µm = 10⁻⁶ m).',
          hints: [
            'Negativer Exponent bedeutet Bruchanteil — die Zahl selbst bleibt positiv.',
            'Denke daran: 10⁻⁶ = 1/1.000.000 = 0,000 001 — das ist eine kleine positive Zahl.',
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Berechne: (6 × 10⁵) / (2 × 10²) = ?',
          options: [
            'A) 3 × 10⁷',
            'B) 3 × 10³',
            'C) 3 × 10²',
            'D) 12 × 10³',
            'E) 4 × 10³',
          ],
          correctIndex: 1,
          explanation: 'Bei der Division werden Vorfaktoren geteilt und Exponenten subtrahiert: (6/2) × 10^(5−2) = 3 × 10³ = 3.000. Zur Probe: 600.000 / 200 = 3.000. Das Vorgehen ist immer zweistufig: (1) Vorfaktoren teilen: 6/2 = 3; (2) Exponenten subtrahieren: 5 − 2 = 3. Das Ergebnis 3 × 10³ ist bereits in normalisierter Form (Vorfaktor zwischen 1 und 10).',
          hints: [
            'Bei der Division werden Vorfaktoren dividiert und Exponenten subtrahiert — zwei unabhängige Schritte.',
            'Vorfaktoren: 6/2 = 3. Exponenten: 5 − 2 = 3. Ergebnis: 3 × 10³.',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ergibt die Addition 5 × 10³ + 3 × 10²?',
          options: [
            'A) 8 × 10⁵',
            'B) 8 × 10³',
            'C) 5,3 × 10³',
            'D) 53 × 10² (nicht normalisiert, aber richtig)',
            'E) 5,3 × 10⁴',
          ],
          correctIndex: 2,
          explanation: 'Bei der Addition von Zehnerpotenzen müssen zunächst beide Summanden auf denselben Exponenten gebracht werden. 3 × 10² = 0,3 × 10³. Dann: 5 × 10³ + 0,3 × 10³ = 5,3 × 10³. Probe: 5.000 + 300 = 5.300 = 5,3 × 10³. Der häufige Fehler wäre, die Exponenten zu addieren (→ 10⁵) oder die Vorfaktoren direkt zu addieren ohne Angleichung (→ 8 × 10³). Option D (53 × 10²) ist mathematisch gleich 5.300, aber nicht normalisiert.',
          hints: [
            'Bei Addition muss zuerst auf gleichen Exponenten gebracht werden — Exponenten können nicht einfach addiert werden.',
            'Schreibe 3 × 10² als 0,3 × 10³, dann addiere die Vorfaktoren: 5 + 0,3 = 5,3.',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Ein Bakterium hat einen Durchmesser von 2 × 10⁻⁶ m, ein Virus von 2 × 10⁻⁸ m. Wie oft ist das Bakterium größer als das Virus?',
          options: [
            'A) 2-mal größer',
            'B) 10-mal größer',
            'C) 100-mal größer',
            'D) 1.000-mal größer',
            'E) 10.000-mal größer',
          ],
          correctIndex: 2,
          explanation: 'Das Verhältnis berechnet man als (2 × 10⁻⁶) / (2 × 10⁻⁸) = (2/2) × 10^(−6−(−8)) = 1 × 10² = 100. Das Bakterium ist 100-mal größer als das Virus. Zur Probe: 0,000 002 / 0,000 000 02 = 100. Diese Größenordnung ist biologisch bedeutsam: Sie erklärt, warum Bakterien mit dem Lichtmikroskop sichtbar sind (Auflösung ca. 200 nm = 2 × 10⁻⁷ m), während Viren ein Elektronenmikroskop erfordern. Der Mensch selbst ist nochmals ca. 10⁸ mal größer als ein Virus.',
          hints: [
            'Dividiere die beiden Größen: Vorfaktoren teilen, Exponenten subtrahieren.',
            'Exponenten: (−6) − (−8) = +2. Faktor = 10² = 100.',
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ma-1-02',
      title: 'SI-Präfixe von Femto bis Tera',
      content: `# SI-Präfixe von Femto bis Tera

Das Internationale Einheitensystem (SI) definiert eine Reihe von standardisierten Präfixen, die Vielfache oder Bruchteile einer Grundeinheit bezeichnen. Diese Präfixe sind international einheitlich, verbindlich und tauchen in allen naturwissenschaftlichen und medizinischen Fächern auf. Wer in der Medizin arbeitet, liest täglich Angaben wie "250 mg Paracetamol", "0,5 µg Fentanyl", "5 nmol/L TSH" oder "120 mmHg Blutdruck" — und muss diese Präfixe sicher beherrschen.

## Die Systematik der SI-Präfixe

SI-Präfixe sind eindeutige, unveränderliche Abkürzungen für Potenzen von 10. Sie können vor jede SI-Einheit gesetzt werden: Meter (m), Gramm (g), Liter (L), Mol (mol), Sekunde (s), Pascal (Pa), Volt (V) usw. Die Präfixe sind in Dreierschritten (10³) angeordnet, was dem menschlichen Bedürfnis nach handlichen Zahlen zwischen 1 und 1.000 entspricht.

Für die Medizin sind die Bereiche von Femto (10⁻¹⁵) bis Tera (10¹²) relevant, wobei der Alltag hauptsächlich die mittleren Präfixe Milli (10⁻³), Mikro (10⁻⁶) und Nano (10⁻⁹) umfasst.

## Medizinisch relevante Präfixe im Detail

### Milli (m) — 10⁻³

Milli ist der am häufigsten verwendete Präfix in der Klinik:
- **Millimeter (mm):** Blutdruckmessung in mmHg (z. B. 120/80 mmHg), EKG-Papier in mm-Abstand
- **Milligramm (mg):** Tablettendosen (250 mg Aspirin, 500 mg Paracetamol)
- **Millimol (mmol):** Elektrolytkonzentrationen im Blut (Na⁺: 136–145 mmol/L; K⁺: 3,5–5,0 mmol/L)
- **Milliliter (mL):** Injektionsvolumina (z. B. 5 mL NaCl 0,9 %)

1 mmol/L = 10⁻³ mol/L = 0,001 mol/L. Wenn man Laborwerte liest, sind Millimol pro Liter die Standardeinheit für die meisten Elektrolyte.

### Mikro (µ) — 10⁻⁶

Das Mikro-Präfix (µ, aus dem griechischen Buchstaben "my") tritt v. a. bei sehr potenten Substanzen und biologischen Maßen auf:
- **Mikrometer (µm):** Zelldurchmesser (Erythrozyt: 6–8 µm; Lymphozyt: 10–14 µm; Hepatozyt: 20–30 µm)
- **Mikrogramm (µg):** Hochpotente Hormone und Medikamente (z. B. Fentanyl: 1–2 µg/kg; L-Thyroxin: 25–200 µg/Tag)
- **Mikromol (µmol):** Bilirubinkonzentration (Normwert <17 µmol/L), Serumkupfer (~15–24 µmol/L)
- **Mikroliter (µL):** Durchfluss in Kapillaren, Mikropipetten im Labor

Wichtig: 1 µg = 10⁻⁶ g = 0,001 mg. Eine Verwechslung von mg und µg entspricht einem Fehler um den Faktor 1.000 — klinisch lebensbedrohlich.

### Nano (n) — 10⁻⁹

Nano-Größen sind typisch für Hormone, Vitamine und Viren:
- **Nanomol (nmol):** Steroide (Testosteron Normwert: 9–38 nmol/L; Progesteron: 1–80 nmol/L je Zyklusphase), Vitamin D (75–125 nmol/L)
- **Nanogramm (ng):** Tumormarker (PSA: <4 ng/mL), TSH (0,4–4,0 mU/L im Nanogramm-Bereich)
- **Nanometer (nm):** Virusgröße (SARS-CoV-2: ca. 100 nm; HIV: ca. 120 nm), Antikörpergröße (~10 nm)
- **Nanosekunden (ns):** Reaktionszeiten in Ionenkanälen

1 ng = 10⁻⁹ g = 0,001 µg. Nanotechnologie in der Medizin nutzt Nanopartikel (1–100 nm) als Wirkstoffträger für gezielte Tumortherapie.

### Piko (p) — 10⁻¹²

Piko-Einheiten tauchen bei ultrasensitiven Laboranalysen auf:
- **Picomol (pmol):** T3 (freies Trijodthyronin: 2,6–5,7 pmol/L), Insulin-Wachstumsfaktor IGF-1
- **Pikogramm (pg):** Zytokinbestimmungen (z. B. IL-6: <7 pg/mL im Serum)
- 1 pg = 10⁻¹² g. Moderne ELISA- und Luminex-Assays können Konzentrationen im Pikogramm-Bereich nachweisen.

### Femto (f) — 10⁻¹⁵

Femto ist in der klinischen Routine selten, tritt aber in der Hämatologie auf:
- **Femtoliter (fL):** MCV (Mittleres Erythrozytenvolumen): Normwert 80–96 fL. Ein einzelnes rotes Blutkörperchen hat ein Volumen von ca. 90 fL = 90 × 10⁻¹⁵ L.

### Kilo (k), Mega (M) und darüber

- **Kilogramm (kg):** Körpergewicht (z. B. Dosierung: 5 mg/kg); 1 kg = 10³ g
- **Kilopascal (kPa):** Blutdruck alternativ in kPa (1 mmHg ≈ 0,133 kPa)
- **Megabecquerel (MBq):** Radioaktivitätsangaben in der Nuklearmedizin (z. B. 600 MBq ⁹⁹ᵐTc für Skelettszintigrafie)
- **Gigabyte (GB):** Datenspeicher in medizinischen Bildgebungssystemen (MRT-Datensätze)

## Umrechnung zwischen Präfixen

Die Umrechnung zwischen Präfixen erfolgt durch Multiplikation oder Division mit den entsprechenden Zehnerpotenzen. Beim Wechsel in eine kleinere Einheit wird die Zahl größer; beim Wechsel in eine größere Einheit wird die Zahl kleiner.

**Systematischer Umrechnungsweg:**
1. Ausgangseinheit als Zehnerpotenz schreiben: 1 mg = 1 × 10⁻³ g
2. Zieleinheit als Zehnerpotenz schreiben: 1 µg = 1 × 10⁻⁶ g
3. Verhältnis: 10⁻³ / 10⁻⁶ = 10³ → 1 mg = 10³ µg = 1.000 µg

Beispiel aus der Praxis: Ein Arzt verordnet 0,025 mg Levothyroxin. Apothekenpräparate sind in µg beschriftet: 0,025 mg × 1.000 µg/mg = 25 µg. Das entspricht einer Tablette "Euthyrox 25 µg".
`,
      lernziele: [
        'Die SI-Präfixe von Femto (10⁻¹⁵) bis Tera (10¹²) mit Symbol, Faktor und Zehnerpotenz nennen und anwenden.',
        'Medizinisch häufige Präfixe (Milli, Mikro, Nano, Piko) in klinischen Kontexten korrekt interpretieren.',
        'Einheiten zwischen verschiedenen Präfixen sicher umrechnen (z. B. mg ↔ µg ↔ ng).',
        'Dosierungsfehler durch Präfixverwechslung erkennen und das klinische Risiko einschätzen.',
        'Das Prinzip der Dreiersprünge (10³ pro Präfixstufe) nutzen, um Umrechnungen im Kopf durchzuführen.',
      ],
      sections: [
        {
          heading: 'Die Systematik der SI-Präfixe',
          text: 'SI-Präfixe sind eindeutige, unveränderliche Abkürzungen für Potenzen von 10. Sie sind in Dreierschritten (10³) angeordnet.',
          table: {
            headers: ["Präfix", "Symbol", "Faktor", "Zehnerpotenz"],
            rows: [
              ["Tera", "T", "1.000.000.000.000", "10¹²"],
              ["Giga", "G", "1.000.000.000", "10⁹"],
              ["Mega", "M", "1.000.000", "10⁶"],
              ["Kilo", "k", "1.000", "10³"],
              ["(kein)", "—", "1", "10⁰"],
              ["Milli", "m", "0,001", "10⁻³"],
              ["Mikro", "µ", "0,000 001", "10⁻⁶"],
              ["Nano", "n", "0,000 000 001", "10⁻⁹"],
              ["Piko", "p", "0,000 000 000 001", "10⁻¹²"],
              ["Femto", "f", "—", "10⁻¹⁵"],
            ],
          },
          merksatz: 'Femto (f) = 10⁻¹⁵ | Piko (p) = 10⁻¹² | Nano (n) = 10⁻⁹ | Mikro (µ) = 10⁻⁶ | Milli (m) = 10⁻³.',
        },
        {
          heading: 'Von Femto bis Tera: die Präfix-Leiter',
          text: 'SI-Präfixe folgen einem regelmäßigen Muster: Jede Stufe entspricht einem Faktor 10³ = 1.000 gegenüber der benachbarten Stufe. Von Nano (10⁻⁹) zu Mikro (10⁻⁶) sind es 10³, von Mikro zu Milli (10⁻³) ebenfalls 10³, von Milli zur Basiseinheit (10⁰) wieder 10³, und so weiter aufwärts bis Kilo, Mega, Giga, Tera. Diese Regelmäßigkeit ist kein Zufall, sondern gewollte Konstruktion des SI-Systems. In der Medizin nutzt man hauptsächlich die Stufen Femto, Piko, Nano, Mikro, Milli und Kilo — aber auch Mega (MBq in der Nuklearmedizin) und Giga (Anzahl der Erythrozyten: ~5 × 10¹²/L) sind relevant.',
          merksatz: 'Jede Präfix-Stufe unterscheidet sich von der benachbarten um den Faktor 1.000 (10³). Femto → Piko → Nano → Mikro → Milli → Basis → Kilo → Mega → Giga → Tera.',
        },
        {
          heading: 'Klinische Präfixfallen: mg vs. µg vs. ng',
          text: 'In der Pharmakologie sind Verwechslungen zwischen mg, µg und ng die häufigste Quelle von Medikationsfehlern. Fentanyl i.v. wird in µg/kg dosiert (~1–2 µg/kg), Morphin in mg/kg (~0,1 mg/kg). Eine Verwechslung von µg und mg bei Fentanyl bedeutet eine 1.000-fache Überdosierung — akut letal. Ebenso kritisch: Levothyroxin in µg (z. B. 100 µg/d), aber Depot-Vitamin-D-Injektionen in mg (z. B. 7,5 mg = 7.500 µg). Sicherheitsorganisationen wie die ISMP empfehlen, "mcg" statt "µg" zu schreiben, da das µ-Zeichen handschriftlich als m (Milli) gelesen werden kann.',
          merksatz: '1 mg = 1.000 µg = 1.000.000 ng. Jede Präfix-Stufe entspricht einem Faktor 1.000. Verwechslung von mg und µg = 1.000-facher Fehler.',
        },
        {
          heading: 'Mikrometer in der Zellbiologie',
          text: 'In der Zell- und Gewebslehre ist der Mikrometer (µm) die wichtigste Längeneinheit. Erythrozyten haben einen Durchmesser von 6–8 µm — das entspricht der Auflösungsgrenze des Lichtmikroskops (ca. 0,2 µm). Leukozyten sind mit 10–25 µm deutlich größer. Kapillaren haben einen Innendurchmesser von ca. 5–10 µm, gerade weit genug, dass Erythrozyten (6–8 µm) passieren können — oft durch Verformung. Histologische Schnitte sind typischerweise 4–7 µm dick. Der Übergang von µm zu nm ist der Übergang von Licht- zu Elektronenmikroskopie: Zellmembranen (~7 nm) und Ribosomen (~25 nm) können nur mit dem Elektronenmikroskop aufgelöst werden.',
          merksatz: 'Erythrozyt: 7 µm; Kapillarinnendurchmesser: 5–10 µm; Zellmembran: 7 nm; Ribosom: ~25 nm. 1 µm = 1.000 nm.',
        },
      ],
      merksätze: [
        'Kilo (k) = 10³ | Mega (M) = 10⁶ | Giga (G) = 10⁹ | Tera (T) = 10¹².',
        'Jede Präfix-Stufe = Faktor 1.000 (10³) zur benachbarten Stufe.',
        '1 mg = 1.000 µg = 1.000.000 ng = 1.000.000.000 pg.',
        'Mikrometer (µm): Zellgröße; Nanometer (nm): Viren, Membrandicke; Pikometer (pm): Atomradius.',
        'MCV des Erythrozyten: ~90 fL (Femtoliter). Femto ist der kleinste klinisch verwendete Präfix.',
        'Na⁺-Normwert: 136–145 mmol/L — Millimol ist der Standard für Elektrolyte.',
        'Blutdruck: mmHg — Millimeter-Quecksilbersäule, Milli-Präfix in der Druckeinheit.',
        'Steroidhormone im Nanomol-Bereich (nmol/L); Peptidhormone oft im Picomol-Bereich (pmol/L).',
        'Radioaktivität: MBq (Megabecquerel = 10⁶ Zerfälle/s) in der Nuklearmedizin.',
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: 'Erläutern Sie das System der SI-Präfixe und erklären Sie anhand von vier medizinischen Beispielen, warum die korrekte Verwendung von Präfixen in der klinischen Praxis eine Patientensicherheitsfrage ist.',
        answer: `Das System der SI-Präfixe ist eine standardisierte, international verbindliche Erweiterung des metrischen Einheitensystems. Präfixe werden der jeweiligen Basiseinheit (g, m, L, mol, s) vorangestellt und stehen für Zehnerpotenzen in Dreierschritten (10³). Von klein nach groß: Femto (10⁻¹⁵), Piko (10⁻¹²), Nano (10⁻⁹), Mikro (10⁻⁶), Milli (10⁻³), Basis (10⁰), Kilo (10³), Mega (10⁶), Giga (10⁹), Tera (10¹²). Die Dreierstruktur erlaubt Umrechnungen durch einfache Multiplikation oder Division mit 1.000.

**Beispiel 1 — Opioid-Analgetika:** Fentanyl wird in µg/kg dosiert (z. B. 1–2 µg/kg i.v. zur Anästhesie), Morphin hingegen in mg/kg (0,05–0,1 mg/kg). Eine Verwechslung von µg und mg bei Fentanyl (Faktor 1.000) würde bei einem 70-kg-Patienten aus einer korrekten Dosis von 100 µg eine versehentliche Dosis von 100 mg machen — eine Dosis, die akut atemlähmend und letal ist. Fentanyl-Überdosierungen durch Dosierungseinheitenfehler sind in der Literatur dokumentiert.

**Beispiel 2 — Schilddrüsenhormone:** L-Thyroxin (T4) wird in µg dosiert, typischerweise 25–200 µg/Tag. Ältere Beipackzettel listeten manchmal mg-Dosierungen (0,025–0,2 mg), was rechnerisch identisch ist, aber bei flüchtigem Lesen zu Verwechslungen führte. Heute ist die µg-Angabe Standard. Eine 1.000-fache Überdosierung würde eine thyreotoxische Krise auslösen.

**Beispiel 3 — Elektrolytkonzentrationen:** Kalium (K⁺) im Serum hat einen Normwert von 3,5–5,0 mmol/L. Hyperkaliämie (>6,5 mmol/L) kann Kammerflimmern auslösen. Eine gedankliche Verwechslung mit mol/L (Faktor 1.000 größer) oder µmol/L (Faktor 1.000 kleiner) würde falsche klinische Schlüsse ziehen — z. B. eine lebensbedrohliche Hyperkaliämie übersehen.

**Beispiel 4 — MCV (Mean Corpuscular Volume):** Das mittlere Erythrozytenvolumen wird in Femtoliter (fL = 10⁻¹⁵ L) angegeben, Normwert 80–96 fL. Bei makrozytärer Anämie (z. B. Vitamin-B12-Mangel) steigt es auf >100 fL, bei mikrozytärer Anämie (z. B. Eisenmangel) sinkt es auf <80 fL. Das Femtoliter als Einheit zeigt, wie winzig einzelne Zellen sind — und dass selbst im klinischen Alltag 10⁻¹⁵-Größen vorkommen.

Patientensicherheit: Die WHO und die Joint Commission listen "dangerous abbreviations and dose designations" explizit auf. Das µ-Zeichen für Mikro wird handschriftlich oft als m (Milli) gelesen. Deshalb empfehlen Sicherheitsorganisationen "mcg" statt "µg". Das korrekte Verständnis und die sorgfältige Kommunikation von Präfixen ist eine direkte Patientenschutzmaßnahme.`,
      },
      klinischerBezug: 'Laborwerte für Steroidhormone (Testosteron: nmol/L), Peptidhormone (Insulin: pmol/L) und Vitamine (Vitamin D: nmol/L) verwenden unterschiedliche Präfixe — ein direkter Vergleich von Konzentrationen verschiedener Substanzen erfordert deshalb stets die Umrechnung auf eine gemeinsame Zehnerpotenz. Medikamentenverwechslungen zwischen mg und µg sind unter den häufigsten schwerwiegenden Medikationsfehlern in Krankenhäusern; internationale Patientensicherheitsinitiativen listen die korrekte Präfixverwendung ausdrücklich als Sicherheitsmaßnahme.',
      selfTest: [
        {
          question: 'Welchem Faktor entspricht das Präfix "Nano" (n)?',
          options: [
            'A) 10⁻³',
            'B) 10⁻⁶',
            'C) 10⁻⁹',
            'D) 10⁻¹²',
            'E) 10⁻¹⁵',
          ],
          correctIndex: 2,
          explanation: 'Nano (Symbol: n) entspricht dem Faktor 10⁻⁹ = 0,000 000 001. In der Präfix-Hierarchie liegt Nano drei Stufen unterhalb der Basiseinheit: Milli (10⁻³) → Mikro (10⁻⁶) → Nano (10⁻⁹). Typische Nano-Größen in der Medizin: Hormone im nmol/L-Bereich (z. B. Testosteron 9–38 nmol/L), Viren im nm-Bereich (SARS-CoV-2: ~100 nm), Tumormarker in ng/mL (1 ng/mL = 1 µg/L = 10⁻⁹ g/mL). Option A ist Milli, B ist Mikro, D ist Piko, E ist Femto.',
          hints: [
            'Die Reihenfolge der kleinen Präfixe lautet: Milli (10⁻³) → Mikro (10⁻⁶) → Nano (10⁻⁹) → Piko (10⁻¹²) → Femto (10⁻¹⁵).',
            'Nano bedeutet "Zwerg" (griech.) — extrem klein, 10⁻⁹.',
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Ein Patient hat einen Kaliumwert von 4,2 mmol/L. Wie viel ist das in µmol/L?',
          options: [
            'A) 0,0042 µmol/L',
            'B) 42 µmol/L',
            'C) 420 µmol/L',
            'D) 4.200 µmol/L',
            'E) 42.000 µmol/L',
          ],
          correctIndex: 3,
          explanation: 'Von Millimol (10⁻³) zu Mikromol (10⁻⁶) ist ein Sprung von 10³: 1 mmol = 1.000 µmol. Also: 4,2 mmol/L × 1.000 µmol/mmol = 4.200 µmol/L. Beim Wechsel in eine kleinere Einheit wird die Zahl größer. Die Methode über Zehnerpotenzen: 4,2 × 10⁻³ mol/L = 4.200 × 10⁻⁶ mol/L = 4.200 µmol/L. Klinisch: Der Kaliumwert liegt damit im Normbereich (3.500–5.000 µmol/L = 3,5–5,0 mmol/L).',
          hints: [
            'Von Milli zu Mikro ist eine Präfix-Stufe nach unten = Faktor 1.000 (× 1.000).',
            '4,2 mmol/L × 1.000 = 4.200 µmol/L. Kleinere Einheit → größere Zahl.',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welches Organell/welche Struktur hat eine Größe im Nanometer-Bereich?',
          options: [
            'A) Erythrozyt (7 µm Durchmesser)',
            'B) Zellkern (~6 µm Durchmesser)',
            'C) Ribosom (~25 nm Durchmesser)',
            'D) Lymphozyt (~12 µm Durchmesser)',
            'E) Kapillarlumen (~8 µm Durchmesser)',
          ],
          correctIndex: 2,
          explanation: 'Ribosomen haben einen Durchmesser von ca. 25–30 nm = 25–30 × 10⁻⁹ m. Sie liegen damit im Nanometerbereich und sind daher nicht mit dem Lichtmikroskop (Auflösungsgrenze ~200 nm) sichtbar — sie erfordern ein Elektronenmikroskop. Alle anderen genannten Strukturen (Erythrozyt, Zellkern, Lymphozyt, Kapillarlumen) liegen im Mikrometerbereich (µm = 10⁻⁶ m) und sind mit dem Lichtmikroskop darstellbar. 1 µm = 1.000 nm, also sind µm-Strukturen mindestens 1.000-mal größer als nm-Strukturen.',
          hints: [
            'Lichtmikroskopische Strukturen liegen im µm-Bereich; elektronenmikroskopische im nm-Bereich.',
            'Ribosomen benötigen Elektronenmikroskopie — das ist ein Hinweis auf Nanometer-Größe.',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Eine Hormonkonzentration wird mit 2,5 ng/mL angegeben. Wie viel ist das in µg/L?',
          options: [
            'A) 0,0025 µg/L',
            'B) 0,25 µg/L',
            'C) 2,5 µg/L',
            'D) 25 µg/L',
            'E) 2.500 µg/L',
          ],
          correctIndex: 2,
          explanation: '1 ng/mL = 1 µg/L. Dies ergibt sich, weil beide Einheiten dasselbe Verhältnis beschreiben: ng/mL = (10⁻⁹ g) / (10⁻³ L) = 10⁻⁶ g/L = 1 µg/L. Also: 2,5 ng/mL = 2,5 µg/L. Diese Gleichwertigkeit ist in der klinischen Chemie und Pharmakologie sehr nützlich: Laborberichte in ng/mL können direkt als µg/L gelesen werden, ohne Rechenaufwand. PSA z. B. wird in ng/mL angegeben, aber µg/L ist äquivalent.',
          hints: [
            'Prüfe, ob ng/mL und µg/L denselben Faktor darstellen: ng = 10⁻⁹ g; mL = 10⁻³ L. Verhältnis = 10⁻⁶ g/L = µg/L.',
            '1 ng/mL = 1 µg/L ist eine häufig verwendete Äquivalenz in der Labordiagnostik.',
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: 'Das MCV (mittleres Erythrozytenvolumen) eines Patienten beträgt 72 fL. Was sagt dieser Wert aus?',
          options: [
            'A) Der Erythrozyt ist zu groß (Normwert 30–50 fL) — Hinweis auf Vitamin-B12-Mangel.',
            'B) Das Volumen ist im Normbereich (Normwert 60–75 fL) — kein pathologischer Befund.',
            'C) Der Erythrozyt ist zu klein (Normwert 80–96 fL) — Hinweis auf mikrozytäre Anämie z. B. bei Eisenmangel.',
            'D) Das fL (Femtoliter) ist keine Standard-SI-Einheit und der Wert daher nicht verwertbar.',
            'E) 72 fL entspricht 72 µL, was im Normbereich liegt.',
          ],
          correctIndex: 2,
          explanation: 'Das MCV wird in Femtoliter (fL = 10⁻¹⁵ L) angegeben. Der Normwert liegt bei 80–96 fL. Ein MCV von 72 fL ist erniedrigt (< 80 fL), was eine mikrozytäre Anämie anzeigt. Die häufigste Ursache ist Eisenmangelanämie; weitere Ursachen sind Thalassämie, Anämie chronischer Erkrankungen und Sideroblastenanaemie. Option D ist falsch: fL ist eine korrekte SI-Einheit (Femto + Liter). Option E ist falsch: 72 fL ≠ 72 µL — Femto ist 10⁻¹⁵, Mikro ist 10⁻⁶; der Unterschied beträgt 10⁹-fach.',
          hints: [
            'MCV-Normwert: 80–96 fL. Unter 80 fL = mikrozytär; über 96 fL = makrozytär.',
            'Femtoliter (fL) = 10⁻¹⁵ L — das kleinste in der klinischen Routine verwendete Präfix.',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Wie viele Nanogramm (ng) entsprechen 0,005 mg?',
          options: [
            'A) 5 ng',
            'B) 50 ng',
            'C) 500 ng',
            'D) 5.000 ng',
            'E) 50.000 ng',
          ],
          correctIndex: 3,
          explanation: '0,005 mg → in ng umrechnen. Von mg (10⁻³ g) zu ng (10⁻⁹ g) sind es 6 Zehnerpotenzen (= Faktor 10⁶ = 1.000.000). Also: 0,005 mg × 10⁶ ng/mg = 5.000 ng. Alternativ: 0,005 mg = 5 × 10⁻³ mg = 5 × 10⁻³ × 10⁻³ g = 5 × 10⁻⁶ g = 5 µg = 5.000 ng. Klinisches Beispiel: 0,005 mg Fentanyl = 5 µg = 5.000 ng — eine für die Anästhesie relevante Dosisgröße.',
          hints: [
            'Von mg zu ng sind es zwei Präfix-Stufen (mg → µg → ng), also Faktor 10³ × 10³ = 10⁶.',
            '0,005 mg × 1.000 = 5 µg; 5 µg × 1.000 = 5.000 ng. Schrittweise über Mikro.',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welche Aussage über das Präfix-System ist KORREKT?',
          options: [
            'A) Mega (M) entspricht 10⁹ und steht für eine Milliarde.',
            'B) Das Symbol für Mikro ist ein kleines m (wie in "mg").',
            'C) Von Milli zu Nano sind es zwei Präfix-Stufen und damit Faktor 10⁶.',
            'D) Kilo bedeutet 10⁴ = 10.000.',
            'E) Das Präfix Giga wird in der Medizin nie verwendet.',
          ],
          correctIndex: 2,
          explanation: 'Von Milli (10⁻³) zu Nano (10⁻⁹) sind es genau zwei Stufen: Milli → Mikro (10⁻⁶) → Nano (10⁻⁹). Der Faktor beträgt 10⁶ = 1.000.000. 1 mmol = 10⁶ nmol = 1.000.000 nmol. Option A ist falsch: Mega = 10⁶ (nicht 10⁹; das ist Giga). Option B ist falsch: Mikro wird durch das griechische µ symbolisiert, nicht durch m (m steht für Milli). Option D ist falsch: Kilo = 10³ = 1.000. Option E ist falsch: Giga erscheint in der Medizin z. B. bei Erythrozytenzahlen (5 × 10¹²/L) und in der Datenspeicherung medizinischer Bilder.',
          hints: [
            'Zähle die Stufen: Milli (10⁻³) → Mikro (10⁻⁶) → Nano (10⁻⁹) — das sind zwei Stufen à 10³, also Faktor 10⁶.',
            'Das Symbol µ (mü/my) steht für Mikro; m steht für Milli — zwei verschiedene Präfixe.',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Die Nuklearmedizin verwendet 600 MBq ⁹⁹ᵐTc. Was bedeutet M in MBq, und wie viele Becquerel sind das?',
          options: [
            'A) M = Milli (10⁻³); 600 MBq = 0,6 Bq.',
            'B) M = Mega (10⁶); 600 MBq = 600.000.000 Bq = 6 × 10⁸ Bq.',
            'C) M = Mega (10⁶); 600 MBq = 60.000 Bq = 6 × 10⁴ Bq.',
            'D) M = Mikro (10⁻⁶); 600 MBq = 6 × 10⁻⁴ Bq.',
            'E) M = Mega (10⁶); 600 MBq = 6 × 10⁹ Bq.',
          ],
          correctIndex: 1,
          explanation: 'Mega (M) = 10⁶. 600 MBq = 600 × 10⁶ Bq = 6 × 10² × 10⁶ Bq = 6 × 10⁸ Bq = 600.000.000 Zerfälle pro Sekunde. Das Becquerel (Bq) ist die SI-Einheit der Radioaktivität (1 Bq = 1 Zerfall/s). In der Nuklearmedizin werden typischerweise Aktivitäten im Bereich von Hunderten MBq verwendet, was Milliarden von Zerfällen pro Sekunde entspricht. Tc-99m hat eine sehr kurze Halbwertszeit von 6 Stunden. Achtung: M für Mega (groß) ist nicht zu verwechseln mit m für Milli (klein).',
          hints: [
            'Mega ist großgeschrieben M = 10⁶. Milli ist kleingeschrieben m = 10⁻³. Die Schreibweise ist bedeutsam.',
            '600 × 10⁶ = 6 × 10² × 10⁶ = 6 × 10⁸. Vorfaktor und Exponent getrennt behandeln.',
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: 'ma-1-03',
      title: 'Wissenschaftliche Notation — Umrechnen und Rechnen',
      content: `# Wissenschaftliche Notation — Umrechnen und Rechnen

Die wissenschaftliche Notation (auch: Exponentialschreibweise) ist die standardisierte Form, Zahlen als Produkt aus einem Vorfaktor und einer Zehnerpotenz darzustellen. Die normalisierte Form verlangt, dass der Vorfaktor a genau im Bereich 1 ≤ a < 10 liegt. Diese Schreibweise ist die internationale Sprache der Naturwissenschaften und Medizin — sie erscheint in wissenschaftlichen Publikationen, Labornormalwerten, Beipackzetteln und klinischen Studien.

## Definition und Normalform

Die wissenschaftliche Notation schreibt jede Zahl in der Form:
**a × 10ⁿ**
wobei gilt: 1 ≤ a < 10 und n ist eine ganze Zahl.

Beispiele:
- 1.234 = 1,234 × 10³ (Vorfaktor 1,234; Exponent +3)
- 0,00456 = 4,56 × 10⁻³ (Vorfaktor 4,56; Exponent −3)
- 0,0000000089 = 8,9 × 10⁻⁹ (Vorfaktor 8,9; Exponent −9)
- 299.792.458 m/s (Lichtgeschwindigkeit) = 2,998 × 10⁸ m/s

Der Vorfaktor ist immer eine Zahl mit genau einer Stelle vor dem Komma (1 bis 9), und der Exponent gibt die Größenordnung an.

## Umrechnung: Dezimalzahl → Wissenschaftliche Notation

**Schritt-für-Schritt-Verfahren:**
1. Komma so verschieben, dass die Zahl zwischen 1 und 10 liegt (das wird der Vorfaktor a).
2. Den Exponenten n bestimmen: Wie viele Stellen wurde das Komma verschoben?
   - Komma nach links verschoben (große Zahl → kleiner Vorfaktor): n ist positiv.
   - Komma nach rechts verschoben (kleine Zahl → größerer Vorfaktor): n ist negativ.

**Beispiel 1 — Große Zahl:** 45.300.000
Komma 7 Stellen nach links: 4,53 × 10⁷

**Beispiel 2 — Kleine Zahl:** 0,000 072
Komma 5 Stellen nach rechts: 7,2 × 10⁻⁵

**Beispiel 3 — Schon zwischen 1 und 10:** 6,02 × 10²³ (Avogadro-Konstante) ist bereits normalisiert.

**Merkhilfe Kommaverschiebung:**
- Große Zahl → Exponent positiv (Komma wandert links)
- Kleine Zahl (< 1) → Exponent negativ (Komma wandert rechts)

## Umrechnung: Wissenschaftliche Notation → Dezimalzahl

Umgekehrt gilt: Den Exponenten als Anweisung lesen, das Komma zu verschieben.
- Positiver Exponent n: Komma n Stellen nach rechts. 3,7 × 10⁴ → 37.000
- Negativer Exponent n: Komma n Stellen nach links. 5,1 × 10⁻³ → 0,0051

## Addieren und Subtrahieren in wissenschaftlicher Notation

Für Addition und Subtraktion müssen beide Zahlen denselben Exponenten haben:
1. Den kleineren Exponenten auf den größeren angleichen (Vorfaktor entsprechend anpassen).
2. Vorfaktoren addieren oder subtrahieren.
3. Ergebnis bei Bedarf normalisieren.

**Beispiel:** 3,5 × 10⁴ + 2,1 × 10³
→ 3,5 × 10⁴ + 0,21 × 10⁴ = 3,71 × 10⁴

**Warum Angleichung nötig?** Man kann nur Gleichartiges addieren. 35.000 + 2.100 = 37.100, nicht 5.600 — analog darf man Vorfaktoren nicht addieren, wenn die Exponenten verschieden sind.

## Multiplizieren und Dividieren in wissenschaftlicher Notation

Diese Operationen sind einfacher als Addition/Subtraktion:

**Multiplikation:**
(a × 10ᵐ) × (b × 10ⁿ) = (a × b) × 10^(m+n)
Danach normalisieren, falls Vorfaktor ≥ 10 oder < 1.

Beispiel: (3,0 × 10⁸) × (2,0 × 10⁻³) = 6,0 × 10⁵

**Division:**
(a × 10ᵐ) / (b × 10ⁿ) = (a/b) × 10^(m−n)
Danach normalisieren.

Beispiel: (8,4 × 10⁶) / (2,1 × 10²) = 4,0 × 10⁴

**Normalisierung nach der Rechnung:**
Falls das Ergebnis nicht normalisiert ist (Vorfaktor ≥ 10 oder < 1), muss man anpassen:
- Vorfaktor ≥ 10: Vorfaktor durch 10 teilen, Exponent um 1 erhöhen. 12 × 10³ → 1,2 × 10⁴
- Vorfaktor < 1: Vorfaktor mit 10 multiplizieren, Exponent um 1 verringern. 0,5 × 10⁻⁴ → 5 × 10⁻⁵

## Logarithmen und Zehnerpotenzen: der natürliche Zusammenhang

Der dekadische Logarithmus (log₁₀ oder lg) ist die Umkehroperation zur Zehnerpotenz:
log₁₀(10ⁿ) = n

Das bedeutet: log₁₀(1.000) = 3; log₁₀(0,001) = −3; log₁₀(1) = 0.

**Wichtige Logarithmuswerte auswendig:**
- log(2) ≈ 0,301
- log(3) ≈ 0,477
- log(5) ≈ 0,699
- log(10) = 1

**Logarithmusregeln:**
- log(a × b) = log(a) + log(b)
- log(a / b) = log(a) − log(b)
- log(aⁿ) = n × log(a)

**pH-Wert als Logarithmus:** pH = −log₁₀([H⁺]), wobei [H⁺] in mol/L. Das bedeutet: Bei [H⁺] = 10⁻⁷ mol/L ist pH = 7 (neutrales Wasser). Eine Änderung des pH um 1 entspricht einer zehnfachen Änderung der H⁺-Konzentration. pH 6 hat zehnmal mehr H⁺ als pH 7, pH 5 hat hundertmal mehr H⁺ als pH 7.

## Häufige Anwendungen in der Medizin

**Avogadro-Zahl (Nₐ = 6,022 × 10²³ mol⁻¹):** Gibt an, wie viele Teilchen in einem Mol enthalten sind. Wenn 1 mmol = 10⁻³ mol Na⁺ in 1 L Lösung vorliegen, dann enthält diese Lösung 6,022 × 10²³ × 10⁻³ = 6,022 × 10²⁰ Na⁺-Ionen pro Liter.

**Halbwertszeiten:** Tc-99m hat eine Halbwertszeit von 6 h = 6 × 60 × 60 s = 2,16 × 10⁴ s. Die Aktivität nimmt exponentiell ab: A(t) = A₀ × (1/2)^(t/t½). Logarithmen sind nötig, um zu berechnen, nach welcher Zeit eine bestimmte Restaktivität vorliegt.

**Henderson-Hasselbalch-Gleichung:** pH = pKₐ + log([A⁻]/[HA]), die Grundformel für Puffersysteme im Blut. Der Logarithmus verknüpft pH, pKₐ und das Konzentrationsverhältnis von Base zu Säure.
`,
      lernziele: [
        'Beliebige Dezimalzahlen in normalisierte wissenschaftliche Notation umschreiben und umgekehrt.',
        'Addition, Subtraktion, Multiplikation und Division in wissenschaftlicher Notation korrekt durchführen.',
        'Den dekadischen Logarithmus als Umkehrfunktion der Zehnerpotenz erklären und grundlegende Logarithmenwerte kennen.',
        'Den pH-Wert als negativen dekadischen Logarithmus der H⁺-Konzentration interpretieren und klinisch einordnen.',
        'Ergebnisse von Rechnungen normalisieren und auf korrekte Signifikanz prüfen.',
      ],
      sections: [
        {
          heading: 'Normalisierte Form: Vorfaktor zwischen 1 und 10',
          text: 'Die normalisierte Form der wissenschaftlichen Notation verlangt, dass der Vorfaktor a genau im Bereich 1 ≤ a < 10 liegt. Das hat praktische Gründe: Mit dieser Konvention ist die Schreibweise einer Zahl eindeutig, und der Exponent gibt direkt die Größenordnung an. 0,034 m kann als 3,4 × 10⁻² m (normalisiert), 34 × 10⁻³ m (nicht normalisiert, aber korrekt) oder 340 × 10⁻⁴ m (nicht normalisiert) geschrieben werden — die normalisierte Form ist die einzige, die keine Mehrdeutigkeit lässt. Kommaverschiebung nach links (bei großen Zahlen) erzeugt positive Exponenten; nach rechts (bei kleinen Zahlen < 1) negative Exponenten. Als Kontrolle gilt: Die Zahl der verschobenen Stellen ist stets der Betrag des Exponenten.',
          merksatz: 'Normalisierte Form: 1 ≤ Vorfaktor < 10. Komma nach links verschoben → Exponent positiv. Komma nach rechts verschoben → Exponent negativ.',
        },
        {
          heading: 'Multiplikation und Division: der bequeme Weg',
          text: 'Multiplikation und Division sind in wissenschaftlicher Notation eleganter als in Dezimaldarstellung. Man trennt konsequent Vorfaktoren (normal rechnen) von Zehnerpotenzen (Exponenten addieren/subtrahieren). Das Ergebnis wird dann normalisiert. Beispiel Blutchemie: Eine Probe enthält 1,4 × 10⁻¹ mol/L Na⁺. Das Volumen der Probe beträgt 5 × 10⁻³ L. Die enthaltene Na⁺-Menge ist: (1,4 × 10⁻¹) × (5 × 10⁻³) = 7,0 × 10⁻⁴ mol = 0,7 mmol. Dieser zweistufige Ansatz — erst Vorfaktoren, dann Exponenten — ist die wichtigste Rechenstrategie für Berechnungen mit Zehnerpotenzen.',
          merksatz: 'Multiplizieren: Vorfaktoren ×, Exponenten +. Dividieren: Vorfaktoren ÷, Exponenten −. Danach normalisieren.',
        },
        {
          heading: 'Logarithmen und der pH-Wert',
          text: 'Der pH-Wert ist das wichtigste logarithmische Konzept in der Medizin: pH = −log₁₀([H⁺]). Bei physiologischem pH 7,4 beträgt [H⁺] = 10⁻⁷˒⁴ mol/L ≈ 40 × 10⁻⁹ mol/L = 40 nmol/L. Eine Azidose mit pH 7,0 hat [H⁺] = 10⁻⁷ mol/L = 100 nmol/L — 2,5-mal mehr als bei pH 7,4. Eine schwere Azidose mit pH 6,8 hat [H⁺] = 10⁻⁶˒⁸ mol/L ≈ 158 nmol/L. Der Logarithmus komprimiert den riesigen Konzentrationsbereich auf eine handliche Skala von 0 bis 14. Die Henderson-Hasselbalch-Gleichung erweitert dieses Konzept auf Puffersysteme: pH = pKₐ + log([HCO₃⁻]/[CO₂]).',
          merksatz: 'pH = −log₁₀([H⁺]). pH↓ um 1 = H⁺-Konzentration × 10. Physiologischer pH 7,4 entspricht [H⁺] = 40 nmol/L.',
        },
        {
          heading: 'Addition und Subtraktion: erst angleichen',
          text: 'Für Addition und Subtraktion in Zehnerpotenzen-Darstellung gilt die eiserne Regel: Nur Zahlen mit gleichem Exponenten können direkt addiert werden. Der Trick ist, den Exponenten der kleineren Zahl an den der größeren anzupassen, indem der Vorfaktor entsprechend skaliert wird. Beispiel: 3,2 × 10⁵ + 4,8 × 10⁴ = 3,2 × 10⁵ + 0,48 × 10⁵ = 3,68 × 10⁵. Alternativ: beide auf 10⁴ bringen: 32 × 10⁴ + 4,8 × 10⁴ = 36,8 × 10⁴ = 3,68 × 10⁵. Das Ergebnis ist identisch, die zweite Variante ist nicht normalisiert. In der Labormedizin ist dieses Denken nötig, wenn man Konzentrationen aus verschiedenen Einheiten vergleicht.',
          merksatz: 'Addition/Subtraktion: erst auf gleichen Exponenten angleichen, dann Vorfaktoren addieren/subtrahieren. Danach normalisieren.',
        },
      ],
      merksätze: [
        'Normalisierte Form: a × 10ⁿ mit 1 ≤ a < 10. Vorfaktor hat genau eine Stelle vor dem Komma.',
        'Große Zahl → Komma nach links → positiver Exponent. Kleine Zahl → Komma nach rechts → negativer Exponent.',
        'Multiplikation: Vorfaktoren multiplizieren, Exponenten addieren.',
        'Division: Vorfaktoren dividieren, Exponenten subtrahieren.',
        'Addition/Subtraktion: erst Exponenten angleichen, dann Vorfaktoren addieren/subtrahieren.',
        'Normalisierung: Vorfaktor ≥ 10 → Exponent +1; Vorfaktor < 1 → Exponent −1.',
        'log₁₀(10ⁿ) = n — Logarithmus und Zehnerpotenz sind Umkehroperationen.',
        'pH = −log₁₀([H⁺]); pH 7,4 ↔ [H⁺] ≈ 40 nmol/L = 4 × 10⁻⁸ mol/L.',
        'Eine pH-Einheit Unterschied = zehnfacher Unterschied in der H⁺-Konzentration.',
        'Avogadro: 6,022 × 10²³ Teilchen pro Mol — die Brücke von Mol zu Teilchenzahl.',
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: 'Erklären Sie das Konzept der wissenschaftlichen Notation und demonstrieren Sie an einem medizinischen Rechenbeispiel die vollständige Durchführung einer Multiplikation sowie einer Addition in dieser Notation. Erläutern Sie außerdem, warum der pH-Wert als Logarithmus definiert ist.',
        answer: `Die wissenschaftliche Notation ist eine Standarddarstellung von Zahlen als Produkt a × 10ⁿ, wobei der Vorfaktor a im Bereich 1 ≤ a < 10 liegt und n eine ganze Zahl ist. Diese Notation hat zwei Vorteile: (1) Sie komprimiert beliebig große oder kleine Zahlen auf eine handhabbare Form; (2) Sie macht die Größenordnung einer Zahl sofort ablesbar — der Exponent n gibt die Größenordnung direkt an.

**Umrechnung:** Große Zahlen (> 10) erhalten positive Exponenten, weil das Komma nach links wandert: 45.000 = 4,5 × 10⁴ (4 Stellen nach links). Kleine Zahlen (< 1) erhalten negative Exponenten, weil das Komma nach rechts wandert: 0,0032 = 3,2 × 10⁻³ (3 Stellen nach rechts).

**Medizinisches Rechenbeispiel — Multiplikation:** Eine Infusion enthält Dopamin in einer Konzentration von 3,2 × 10⁻³ g/mL. Bei einer Infusionsrate von 2,5 × 10¹ mL/h, wie viel Gramm Dopamin erhält der Patient pro Stunde?
Masse/h = (3,2 × 10⁻³ g/mL) × (2,5 × 10¹ mL/h)
Vorfaktoren: 3,2 × 2,5 = 8,0
Exponenten: (−3) + 1 = −2
Ergebnis: 8,0 × 10⁻² g/h = 0,08 g/h = 80 mg/h.

**Medizinisches Rechenbeispiel — Addition:** Das Gesamthämoglobin eines Patienten setzt sich aus HbA₁ (3,8 × 10⁻² mol/L) und HbA₂ (9,0 × 10⁻⁴ mol/L) zusammen. Gesamthämoglobin?
Angleichen: 3,8 × 10⁻² + 0,09 × 10⁻² = 3,89 × 10⁻² mol/L ≈ 3,9 × 10⁻² mol/L.

**Warum pH als Logarithmus?** Die H⁺-Konzentration in biologischen Flüssigkeiten variiert von pH 1 (Magensäure: [H⁺] = 10⁻¹ mol/L) bis pH 8 (Bauchspeichel: [H⁺] = 10⁻⁸ mol/L) — ein Bereich von 7 Größenordnungen (Faktor 10⁷ = 10.000.000). Eine lineare Skala wäre für diese Variationsbreite unhandlich. Der Logarithmus komprimiert diesen riesigen Bereich auf die Skala 0–14.

Klinisch bedeutsam: Der arteriell gemessene pH liegt im Blut strikt bei 7,35–7,45. Eine Abweichung von nur 0,1 pH-Einheiten bedeutet eine 26 %ige Änderung der H⁺-Konzentration (da 10⁰˒¹ ≈ 1,26). Bei pH 6,8 — nur 0,6 Einheiten unter dem Normwert — ist die H⁺-Konzentration bereits 4-fach erhöht; dies ist mit dem Leben kaum vereinbar. Der Logarithmus macht diese feine, aber vitale Regulation numerisch greifbar.`,
      },
      klinischerBezug: 'Der pH-Wert des arteriellen Blutes (Normwert 7,35–7,45) ist ein negativer Logarithmus der H⁺-Konzentration; eine Abweichung um 0,3 pH-Einheiten entspricht einer Verdoppelung bzw. Halbierung der H⁺-Konzentration — klinisch der Unterschied zwischen kompensierter Azidose und lebensbedrohlichem Ungleichgewicht. Pharmakokinetische Berechnungen (Serumhalbwertszeit, Clearance, Bioverfügbarkeit) verwenden durchgehend die wissenschaftliche Notation, da Plasmawirkstoffkonzentrationen von 10⁻⁹ bis 10⁻⁴ mol/L reichen und ohne Exponentialschreibweise nicht handhabbar wären.',
      selfTest: [
        {
          question: 'Schreiben Sie 0,000 047 in normalisierter wissenschaftlicher Notation.',
          options: [
            'A) 47 × 10⁻⁶',
            'B) 4,7 × 10⁻⁵',
            'C) 4,7 × 10⁵',
            'D) 0,47 × 10⁻⁴',
            'E) 4,7 × 10⁻⁴',
          ],
          correctIndex: 1,
          explanation: '0,000 047: Das Komma muss 5 Stellen nach rechts verschoben werden, bis eine Zahl zwischen 1 und 10 entsteht: 0,000 047 → 4,7. Da das Komma nach rechts verschoben wurde (Zahl < 1), ist der Exponent negativ: 4,7 × 10⁻⁵. Probe: 4,7 × 10⁻⁵ = 4,7 × 0,000 01 = 0,000 047. Option A (47 × 10⁻⁶) ist mathematisch korrekt gleich 0,000 047, aber nicht normalisiert, da der Vorfaktor 47 > 10. Option D (0,47 × 10⁻⁴) ist ebenfalls korrekt aber nicht normalisiert (Vorfaktor < 1). Option E (4,7 × 10⁻⁴ = 0,00047) ist falsch.',
          hints: [
            'Kleine Zahl < 1: Komma nach rechts verschieben → negativer Exponent. Zähle die Stellen.',
            '0,000 047 → 4,7 braucht 5 Stellen Kommaverschiebung nach rechts → Exponent −5.',
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Berechne: (4,0 × 10⁻³) × (3,0 × 10⁵) = ?',
          options: [
            'A) 12 × 10²',
            'B) 1,2 × 10³',
            'C) 7,0 × 10²',
            'D) 1,2 × 10⁻¹⁵',
            'E) 12 × 10⁻¹⁵',
          ],
          correctIndex: 1,
          explanation: 'Vorfaktoren multiplizieren: 4,0 × 3,0 = 12. Exponenten addieren: (−3) + 5 = 2. Zwischenergebnis: 12 × 10². Da 12 ≥ 10, normalisieren: 12 × 10² = 1,2 × 10³ (Vorfaktor durch 10 geteilt, Exponent um 1 erhöht). Probe: 0,004 × 300.000 = 1.200 = 1,2 × 10³. Option A ist nicht normalisiert (Vorfaktor 12 > 10), aber inhaltlich korrekt. Option B ist die normalisierte, korrekte Antwort.',
          hints: [
            'Vorfaktoren: 4 × 3 = 12. Exponenten: (−3) + 5 = 2. Zwischenergebnis: 12 × 10².',
            '12 × 10² ist nicht normalisiert (12 > 10). Normalisieren: 12 × 10² = 1,2 × 10³.',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ist der pH-Wert, wenn die H⁺-Konzentration 10⁻⁷˒⁴ mol/L beträgt?',
          options: [
            'A) pH = −7,4',
            'B) pH = 7,4',
            'C) pH = 10',
            'D) pH = 14 − 7,4 = 6,6',
            'E) pH = log(10⁻⁷˒⁴) ohne Vorzeichen = 7,4',
          ],
          correctIndex: 1,
          explanation: 'pH = −log₁₀([H⁺]) = −log₁₀(10⁻⁷˒⁴) = −(−7,4) = 7,4. Der Logarithmus von 10ˣ ist x, also log₁₀(10⁻⁷˒⁴) = −7,4. Mit dem Minuszeichen in der pH-Definition: pH = −(−7,4) = 7,4. Dies ist der physiologische pH des arteriellen Blutes. Option A wäre der direkte Logarithmus ohne das Minuszeichen (falsch). Option D (14 − 7,4 = 6,6) berechnet den pOH, nicht den pH.',
          hints: [
            'pH = −log₁₀([H⁺]). Mit [H⁺] = 10⁻⁷˒⁴: log₁₀(10⁻⁷˒⁴) = −7,4. Mit Minuszeichen: pH = 7,4.',
            'Das Minuszeichen in der pH-Definition macht aus dem negativen Logarithmuswert eine positive Zahl.',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Ein Patient hat pH 7,1 (Azidose). Um welchen Faktor ist seine H⁺-Konzentration höher als beim normalen pH 7,4?',
          options: [
            'A) Faktor 0,3 (also geringer)',
            'B) Faktor 2',
            'C) Faktor 10',
            'D) Faktor 2,0 (da 10⁰˒³ ≈ 2)',
            'E) Faktor 100',
          ],
          correctIndex: 3,
          explanation: 'Die H⁺-Konzentration bei pH 7,1 ist 10⁻⁷˒¹ mol/L, bei pH 7,4 ist sie 10⁻⁷˒⁴ mol/L. Das Verhältnis: 10⁻⁷˒¹ / 10⁻⁷˒⁴ = 10^(−7,1−(−7,4)) = 10^(0,3) ≈ 2,0. Da log(2) ≈ 0,3, gilt 10⁰˒³ ≈ 2. Der Patient hat also ca. doppelt so viele H⁺-Ionen wie normal. Klinisch: Diese scheinbar kleine pH-Differenz von 0,3 Einheiten bedeutet eine Verdoppelung der H⁺-Konzentration — bei pH 7,1 sprechen wir von dekompensierter Azidose mit Auswirkungen auf Herzrhythmus, Enzymfunktion und Bewusstsein. Option C (Faktor 10) wäre der Unterschied für eine volle pH-Einheit.',
          hints: [
            'Verhältnis der H⁺-Konzentrationen: 10^(pH-Differenz) = 10^(7,4−7,1) = 10⁰˒³.',
            'log₁₀(2) ≈ 0,3, also 10⁰˒³ ≈ 2. Eine pH-Differenz von 0,3 entspricht Faktor 2.',
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: 'Addiere: 6,5 × 10⁴ + 8,0 × 10³ = ?',
          options: [
            'A) 14,5 × 10⁷',
            'B) 14,5 × 10⁴',
            'C) 7,3 × 10⁴',
            'D) 6,58 × 10⁴',
            'E) 7,3 × 10⁴ (identisch mit C)',
          ],
          correctIndex: 2,
          explanation: 'Für Addition angleichen: 8,0 × 10³ = 0,80 × 10⁴. Dann: 6,5 × 10⁴ + 0,80 × 10⁴ = 7,3 × 10⁴. Probe: 65.000 + 8.000 = 73.000 = 7,3 × 10⁴. Option A ist falsch (Exponenten wurden addiert statt die Vorfaktoren). Option B hat den richtigen Exponenten, aber falschen Vorfaktor (14,5 würde entstehen, wenn beide Zahlen denselben Exponenten 10⁴ hätten, was sie nicht tun). Option D (6,58 × 10⁴) ist falsch: 6,5 + 0,08 ≠ 6,58; 8 × 10³ = 0,8 × 10⁴, nicht 0,08 × 10⁴.',
          hints: [
            'Bei Addition muss zuerst auf gleichen Exponenten gebracht werden: 8,0 × 10³ = 0,80 × 10⁴.',
            '6,5 × 10⁴ + 0,80 × 10⁴ = (6,5 + 0,80) × 10⁴ = 7,3 × 10⁴.',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Die Lichtgeschwindigkeit beträgt 2,998 × 10⁸ m/s. Wie weit reist Licht in 3 × 10⁻⁹ s (= 3 Nanosekunden)?',
          options: [
            'A) 8,994 × 10⁻¹ m ≈ 0,9 m',
            'B) 8,994 × 10¹⁷ m',
            'C) 9,994 × 10⁻¹ m',
            'D) 2,998 × 10⁻¹ m',
            'E) 8,994 × 10⁻² m',
          ],
          correctIndex: 0,
          explanation: 'Strecke = Geschwindigkeit × Zeit = (2,998 × 10⁸ m/s) × (3 × 10⁻⁹ s). Vorfaktoren: 2,998 × 3 ≈ 8,994. Exponenten: 8 + (−9) = −1. Ergebnis: 8,994 × 10⁻¹ m ≈ 0,9 m. Licht legt in 3 Nanosekunden also ca. 90 cm zurück. Dies ist in der Computertechnik relevant: Signallaufzeit in modernen Prozessoren liegt im Nanosekunden-Bereich. In der Medizin nutzt Ultraschall-Sonographie ähnliche Zeitskalen für Laufzeitmessungen.',
          hints: [
            'Strecke = Geschwindigkeit × Zeit. Vorfaktoren multiplizieren, Exponenten addieren.',
            '2,998 × 3 ≈ 9 (genau 8,994). Exponenten: 8 + (−9) = −1. Ergebnis: ~9 × 10⁻¹ m.',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welche Aussage zur wissenschaftlichen Notation ist KORREKT?',
          options: [
            'A) 15 × 10³ ist eine normalisierte wissenschaftliche Notation.',
            'B) 1,5 × 10⁴ ist dieselbe Zahl wie 15 × 10³ und die normalisierte Form.',
            'C) Bei 0,23 × 10⁵ muss der Exponent um 1 erhöht werden, um zu normalisieren.',
            'D) Normalisierung erfordert, dass der Exponent positiv ist.',
            'E) Jede Zahl hat genau eine mögliche wissenschaftliche Notation.',
          ],
          correctIndex: 1,
          explanation: '15 × 10³ = 15.000 = 1,5 × 10⁴. Die normalisierte Form ist 1,5 × 10⁴, da 1 ≤ 1,5 < 10. Option A ist falsch: 15 × 10³ ist nicht normalisiert (Vorfaktor 15 > 10). Option C ist falsch: Bei 0,23 × 10⁵ wird normalisiert zu 2,3 × 10⁴ (Exponent sinkt von 5 auf 4, nicht steigt). Option D ist falsch: Normalisierung bedeutet 1 ≤ a < 10, sagt nichts über das Vorzeichen des Exponenten aus. Option E ist falsch: 15.000 kann als 1,5 × 10⁴ oder 15 × 10³ oder 150 × 10² usw. geschrieben werden.',
          hints: [
            'Normalisiert: Vorfaktor genau zwischen 1 (inklusiv) und 10 (exklusiv). Exponent kann positiv oder negativ sein.',
            'Prüfe: 15 × 10³ — Vorfaktor 15 ist ≥ 10, also nicht normalisiert. 1,5 × 10⁴ ist die normalisierte Form.',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welcher Rechenweg ist korrekt für (9,6 × 10⁶) / (3,2 × 10⁻²)?',
          options: [
            'A) (9,6/3,2) × 10^(6/(−2)) = 3,0 × 10⁻³',
            'B) (9,6/3,2) × 10^(6−(−2)) = 3,0 × 10⁸',
            'C) (9,6/3,2) × 10^(6×(−2)) = 3,0 × 10⁻¹²',
            'D) (9,6 − 3,2) × 10^(6−(−2)) = 6,4 × 10⁸',
            'E) (9,6/3,2) × 10^(6+2) = 3,0 × 10⁸',
          ],
          correctIndex: 1,
          explanation: 'Bei Division werden Vorfaktoren geteilt und Exponenten subtrahiert: (9,6 / 3,2) × 10^(6 − (−2)) = 3,0 × 10^(6+2) = 3,0 × 10⁸. Option A dividiert fälschlicherweise die Exponenten (statt zu subtrahieren). Option C multipliziert die Exponenten (das wäre Potenzieren, nicht Division). Option D subtrahiert die Vorfaktoren statt sie zu dividieren. Option E ist identisch mit B in der Rechnung (6 − (−2) = 6 + 2 = 8) und führt zum gleichen richtigen Ergebnis — B ist die Standardformulierung mit expliziter Subtraktion.',
          hints: [
            'Division: Vorfaktoren dividieren (9,6 / 3,2 = 3), Exponenten subtrahieren: 6 − (−2) = 8.',
            'Minus minus gibt plus: 6 − (−2) = 6 + 2 = 8. Ergebnis: 3,0 × 10⁸.',
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
  ],
};
