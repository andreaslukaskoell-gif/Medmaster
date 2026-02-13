import type { Kapitel } from '../types';

export const mathKap2: Kapitel = {
  id: 'math-kap2',
  title: 'Algebra',
  subject: 'mathematik',
  icon: '🔤',
  estimatedTime: '30 Minuten',
  unterkapitel: [
    {
      id: 'math-kap2-1',
      title: 'Terme & Gleichungen',
      content: `**Terme** sind mathematische Ausdrücke aus Zahlen, Variablen und Rechenoperationen. Vereinfachen heißt: Gleichartige Glieder zusammenfassen. Gleichartige Glieder haben dieselben Variablen in derselben Potenz. 3x² + 5x² = 8x². Aber 3x² + 5x lässt sich nicht weiter vereinfachen.

**Binomische Formeln** (die drei wichtigsten Umformungen im MedAT): (a + b)² = a² + 2ab + b². (a - b)² = a² - 2ab + b². (a + b)(a - b) = a² - b².

**Gleichungen**: Zwei Terme sind gleich. Lösen heißt: Alle x finden, für die die Gleichung wahr ist.

**Lineare Gleichungen** ax + b = 0 haben genau eine Lösung: x = -b/a (für a ≠ 0). Lösen durch **Äquivalenzumformungen**: Auf beiden Seiten dasselbe addieren/subtrahieren. Mit derselben Zahl (≠ 0) multiplizieren/dividieren. Beispiel: 3x - 7 = 2x + 5 → 3x - 2x = 5 + 7 → x = 12.

**Gleichungen mit Klammern**: Erst ausmultiplizieren, dann zusammenfassen.

**Bruchgleichungen**: Mit dem Hauptnenner multiplizieren. Achtung: Probe machen, um Scheinlösungen auszuschließen (Division durch Null!). Beispiel: 3/(x-1) = 6/(x+2). Multiplizieren mit (x-1)(x+2): 3(x+2) = 6(x-1) → 3x + 6 = 6x - 6 → 12 = 3x → x = 4. Probe: 3/3 = 1 und 6/6 = 1 ✓.

**Betragsgleichungen** |2x - 3| = 7: Fallunterscheidung. Fall 1: 2x - 3 = 7 → x = 5. Fall 2: 2x - 3 = -7 → x = -2. Beide Lösungen prüfen.

So funktioniert's: Vereinfachen → Umformen → Lösen → Probe.`,
      merksätze: [
        'Binomische Formeln: (a+b)² = a² + 2ab + b², (a-b)² = a² - 2ab + b², (a+b)(a-b) = a² - b². Diese sind die häufigsten Umformungen im MedAT.',
        'Äquivalenzumformungen ändern die Lösungsmenge nicht: Auf beiden Seiten darf addiert/subtrahiert und mit einer Zahl ≠ 0 multipliziert/dividiert werden. Bei Bruchgleichungen immer Probe machen!'
      ],
      altfrage: {
        question: 'Lösen Sie die Gleichung: 5(x - 2) - 3(2x + 1) = 4',
        answer: '5x - 10 - 6x - 3 = 4 → -x - 13 = 4 → -x = 17 → x = -17.'
      },
      klinischerBezug: '**Infusionsraten**: Eine Infusion mit Rate r ml/h läuft t Stunden. Gesamtvolumen V = r · t. Umstellen nach r: r = V/t. Beispiel: 500 ml in 4 h → r = 500/4 = 125 ml/h. **Clearance**: CL = (Dosis · F) / AUC. Diese lineare Gleichung wird nach der gesuchten Größe aufgelöst.',
      selfTest: [
        {
          question: 'Wie lautet (2x - 3)² vollständig ausmultipliziert?',
          options: [
            '4x² - 9',
            '4x² + 9',
            '4x² - 12x + 9',
            '4x² - 6x + 9',
            '2x² - 12x + 9'
          ],
          correctIndex: 2,
          explanation: 'Zweite binomische Formel: (2x - 3)² = (2x)² - 2·(2x)·3 + 3² = 4x² - 12x + 9.'
        },
        {
          question: 'Welche Lösungen hat die Gleichung |3x + 6| = 12?',
          options: [
            'x = 2',
            'x = 2 und x = -6',
            'x = -2 und x = 6',
            'x = 6',
            'x = -2 und x = 2'
          ],
          correctIndex: 1,
          explanation: 'Fall 1: 3x + 6 = 12 → 3x = 6 → x = 2. Fall 2: 3x + 6 = -12 → 3x = -18 → x = -6. Beide Lösungen sind gültig.'
        },
        {
          question: 'Lösen Sie: 4/(x+1) = 2/(x-1)',
          options: [
            'x = 3',
            'x = -3',
            'x = 1',
            'x = 0',
            'x = -1'
          ],
          correctIndex: 0,
          explanation: 'Kreuzweise multiplizieren: 4(x-1) = 2(x+1) → 4x - 4 = 2x + 2 → 2x = 6 → x = 3. Probe: 4/4 = 1 und 2/2 = 1 ✓.'
        }
      ]
    },
    {
      id: 'math-kap2-2',
      title: 'Quadratische Gleichungen',
      content: `**Quadratische Gleichungen** ax² + bx + c = 0 mit a ≠ 0 haben maximal zwei Lösungen (die Nullstellen der Parabel).

**pq-Formel** (für x² + px + q = 0, also a = 1): x₁,₂ = -p/2 ± √((p/2)² - q). Das ist die Standardformel im MedAT.

**Diskriminante** D = (p/2)² - q entscheidet über die Lösungsanzahl: D > 0 → zwei verschiedene reelle Lösungen. D = 0 → genau eine (doppelte) Lösung. D < 0 → keine reelle Lösung.

Beispiel: x² - 6x + 5 = 0. p = -6, q = 5. x = 3 ± √(9 - 5) = 3 ± 2. Also x₁ = 5 und x₂ = 1. Probe: 25 - 30 + 5 = 0 ✓ und 1 - 6 + 5 = 0 ✓.

**abc-Formel** (für ax² + bx + c = 0): x₁,₂ = (-b ± √(b² - 4ac)) / (2a). Hier ist D = b² - 4ac.

**Satz von Vieta**: Für x² + px + q = 0 gilt: x₁ + x₂ = -p und x₁ · x₂ = q. So prüfst du schnell, ob die Lösung stimmt.

**Faktorisierung**: Wenn die Nullstellen ganzzahlig sind, kannst du sie durch Probieren finden. Beispiel: x² - 5x + 6 = 0. Suche zwei Zahlen mit Summe 5 und Produkt 6: Das sind 2 und 3. Also (x - 2)(x - 3) = 0.

**Quadratische Ergänzung**: x² + 6x + 2 = 0 → (x² + 6x + 9) - 9 + 2 = 0 → (x + 3)² = 7 → x = -3 ± √7. Diese Methode leitet die pq-Formel her.`,
      merksätze: [
        'pq-Formel: x₁,₂ = -p/2 ± √((p/2)² - q). Diskriminante D = (p/2)² - q bestimmt die Lösungsanzahl: D > 0 → zwei, D = 0 → eine, D < 0 → keine reelle Lösung.',
        'Satz von Vieta: x₁ + x₂ = -p und x₁ · x₂ = q. Damit lassen sich gefundene Lösungen schnell überprüfen.'
      ],
      altfrage: {
        question: 'Bestimmen Sie die Lösungen von 2x² - 8x + 6 = 0.',
        answer: 'Division durch 2: x² - 4x + 3 = 0. pq-Formel: x = 2 ± √(4 - 3) = 2 ± 1. Also x₁ = 3 und x₂ = 1. Vieta-Probe: 3 + 1 = 4 = -(-4) ✓ und 3 · 1 = 3 ✓.'
      },
      klinischerBezug: 'Die **Henderson-Hasselbalch-Gleichung** pH = pKa + log([A⁻]/[HA]) kann bei bestimmten Pufferberechnungen auf quadratische Gleichungen führen. In der **Pharmakokinetik** treten quadratische Gleichungen bei Zwei-Kompartiment-Modellen auf (Gleichgewichtskonzentrationen).',
      selfTest: [
        {
          question: 'Was ist die Diskriminante der Gleichung x² + 4x + 5 = 0?',
          options: [
            'D = -4',
            'D = 0',
            'D = 4',
            'D = 36',
            'D = 1'
          ],
          correctIndex: 0,
          explanation: 'D = (p/2)² - q = (4/2)² - 5 = 4 - 5 = -4. Da D < 0, hat die Gleichung keine reelle Lösung.'
        },
        {
          question: 'Lösen Sie: x² - 2x - 15 = 0',
          options: [
            'x₁ = 3, x₂ = -5',
            'x₁ = 5, x₂ = -3',
            'x₁ = 5, x₂ = 3',
            'x₁ = -5, x₂ = -3',
            'x₁ = 15, x₂ = -1'
          ],
          correctIndex: 1,
          explanation: 'pq-Formel: x = 1 ± √(1 + 15) = 1 ± 4. Also x₁ = 5 und x₂ = -3. Vieta: 5 + (-3) = 2 = -(-2) ✓ und 5 · (-3) = -15 ✓.'
        },
        {
          question: 'Welche quadratische Gleichung hat die Lösungen x₁ = 7 und x₂ = -2?',
          options: [
            'x² - 5x - 14 = 0',
            'x² + 5x - 14 = 0',
            'x² - 5x + 14 = 0',
            'x² - 9x + 14 = 0',
            'x² + 5x + 14 = 0'
          ],
          correctIndex: 0,
          explanation: 'Nach Vieta: p = -(x₁ + x₂) = -(7 + (-2)) = -5 und q = x₁ · x₂ = 7 · (-2) = -14. Also: x² - 5x - 14 = 0.'
        }
      ]
    },
    {
      id: 'math-kap2-3',
      title: 'Gleichungssysteme',
      content: `Ein **lineares Gleichungssystem** (LGS) mit zwei Gleichungen und zwei Unbekannten: a₁x + b₁y = c₁ und a₂x + b₂y = c₂. Geometrisch: Jede Gleichung ist eine Gerade. Die Lösung ist der Schnittpunkt.

Drei Fälle: Genau eine Lösung (Geraden schneiden sich). Keine Lösung (Geraden parallel, widersprüchlich). Unendlich viele Lösungen (Geraden identisch).

**Einsetzungsverfahren**: Eine Gleichung nach einer Variablen auflösen, in die andere einsetzen. Beispiel: I) 2x + y = 7, II) x - 3y = -7. Aus I: y = 7 - 2x. Einsetzen in II: x - 3(7 - 2x) = -7 → x - 21 + 6x = -7 → 7x = 14 → x = 2. Rückeinsetzen: y = 7 - 4 = 3. Lösung: (2|3).

**Additionsverfahren** (Eliminationsverfahren): Gleichungen so multiplizieren, dass beim Addieren eine Variable wegfällt. Gleiches Beispiel: I) 2x + y = 7 |·3 → 6x + 3y = 21. II) x - 3y = -7. Addition: 7x = 14 → x = 2, dann y = 3.

**Gleichsetzungsverfahren**: Beide Gleichungen nach derselben Variablen auflösen und gleichsetzen. Eignet sich, wenn beide schon in Form y = ... vorliegen. Beispiel: y = 2x + 1 und y = -x + 7. Gleichsetzen: 2x + 1 = -x + 7 → 3x = 6 → x = 2, y = 5.

Der Trick dabei: Immer Probe machen (Lösung in beide Ausgangsgleichungen einsetzen). Bei Textaufgaben zuerst Variablen definieren und Gleichungen aufstellen, dann lösen.`,
      merksätze: [
        'Drei Lösungsverfahren für LGS: Einsetzungsverfahren (eine Variable isolieren und einsetzen), Additionsverfahren (Gleichungen so kombinieren, dass eine Variable wegfällt), Gleichsetzungsverfahren (beide nach derselben Variable auflösen und gleichsetzen).',
        'Immer eine Probe durchführen: Die Lösung in BEIDE Ausgangsgleichungen einsetzen. Bei Textaufgaben zürst Variablen definieren und Gleichungen aufstellen!'
      ],
      altfrage: {
        question: 'Lösen Sie: 3x + 2y = 12 und 5x - 2y = 4',
        answer: 'Addition beider Gleichungen: 8x = 16 → x = 2. Einsetzen in Gleichung 1: 6 + 2y = 12 → y = 3. Lösung: (2|3). Probe: 3·2 + 2·3 = 12 ✓ und 5·2 - 2·3 = 4 ✓.'
      },
      klinischerBezug: '**Mischungsaufgaben**: Lösung A hat 10 % Konzentration, Lösung B hat 30 %. Wie viel von jeder für 200 ml mit 18 %? System: x + y = 200 und 0,10x + 0,30y = 0,18 · 200 = 36. Lösung: x = 120 ml (A), y = 80 ml (B). **Infusionspläne** mit zwei Lösungen unterschiedlicher Konzentration werden so berechnet.',
      selfTest: [
        {
          question: 'Lösen Sie mit dem Einsetzungsverfahren: x + y = 10, 2x - y = 5',
          options: [
            'x = 5, y = 5',
            'x = 4, y = 6',
            'x = 3, y = 7',
            'x = 6, y = 4',
            'x = 5, y = 0'
          ],
          correctIndex: 0,
          explanation: 'Aus Gl. 1: y = 10 - x. In Gl. 2: 2x - (10 - x) = 5 → 3x - 10 = 5 → 3x = 15 → x = 5, y = 5.'
        },
        {
          question: 'Welchen Fall beschreibt das System: 2x + 4y = 6 und x + 2y = 3?',
          options: [
            'Genau eine Lösung',
            'Keine Lösung (widersprüchlich)',
            'Unendlich viele Lösungen',
            'Genau zwei Lösungen',
            'Das System ist nicht lösbar, da die Koeffizienten gleich sind'
          ],
          correctIndex: 2,
          explanation: 'Die erste Gleichung ist das Doppelte der zweiten (2·(x + 2y) = 2·3 = 6). Die Geraden sind identisch, es gibt unendlich viele Lösungen.'
        },
        {
          question: 'In einer Mischaufgabe hat Lösung A 10 % und Lösung B 30 % Konzentration. Wie viel von jeder Lösung braucht man für 200 ml mit 18 % Konzentration?',
          options: [
            'A: 100 ml, B: 100 ml',
            'A: 140 ml, B: 60 ml',
            'A: 120 ml, B: 80 ml',
            'A: 80 ml, B: 120 ml',
            'A: 160 ml, B: 40 ml'
          ],
          correctIndex: 2,
          explanation: 'System: x + y = 200 und 0,10x + 0,30y = 0,18 · 200 = 36. Aus Gl. 1: x = 200 - y. Einsetzen: 20 - 0,10y + 0,30y = 36 → 0,20y = 16 → y = 80, x = 120.'
        }
      ]
    },
    {
      id: 'math-kap2-4',
      title: 'Ungleichungen',
      content: `**Ungleichungen** verwenden < (kleiner), > (größer), ≤ (kleiner oder gleich) und ≥ (größer oder gleich). Die Lösungsmenge ist meist ein Intervall, kein einzelner Wert.

**Lineare Ungleichungen**: Wie lineare Gleichungen lösen, aber Achtung: Bei Multiplikation/Division mit negativer Zahl dreht sich das Zeichen um. Beispiel: -2x > 6 → x < -3 (Zeichen dreht sich!). Das ist der häufigste Fehler.

**Quadratische Ungleichungen**: Erst Nullstellen der zugehörigen Gleichung bestimmen, dann Vorzeichenanalyse. Beispiel: x² - 5x + 4 < 0. Nullstellen: x₁ = 1, x₂ = 4 (Vieta: Summe 5, Produkt 4). Da a = 1 > 0 (Parabel nach oben geöffnet), liegt sie zwischen den Nullstellen unter der x-Achse. Lösung: 1 < x < 4 bzw. x ∈ (1, 4).

**Betragsungleichungen**: |x| < a (mit a > 0) entspricht -a < x < a. |x| > a entspricht x > a oder x < -a.

Allgemeiner: |f(x)| < a wird zu -a < f(x) < a. |f(x)| > a wird zu f(x) > a oder f(x) < -a.

Beispiel: |2x - 1| ≤ 5 wird zu -5 ≤ 2x - 1 ≤ 5 → -4 ≤ 2x ≤ 6 → -2 ≤ x ≤ 3. Lösung: [-2, 3].

**Intervallschreibweise**: Runde Klammern (offene Grenzen), eckige Klammern (abgeschlossene Grenzen).`,
      merksätze: [
        'Entscheidende Regel: Bei Multiplikation/Division mit einer negativen Zahl kehrt sich das Ungleichungszeichen um! Dies ist der häufigste Fehler bei Ungleichungen.',
        'Betragsungleichungen: |f(x)| < a → -a < f(x) < a (Schnittmenge). |f(x)| > a → f(x) > a ODER f(x) < -a (Vereinigung).'
      ],
      altfrage: {
        question: 'Lösen Sie die Ungleichung: x² - 4x - 5 > 0',
        answer: 'Nullstellen: x₁ = 5, x₂ = -1 (Vieta: Summe 4, Produkt -5). Da a > 0 (nach oben geöffnet), ist die Parabel außerhalb der Nullstellen positiv: x < -1 oder x > 5.'
      },
      klinischerBezug: '**Referenzbereiche** für Laborwerte sind Intervalle. Blutzucker nüchtern: 70-100 mg/dl entspricht 70 ≤ x ≤ 100. **Therapeutischer Bereich** von Digoxin: 0,8-2,0 ng/ml. Ein Messwert x liegt im Normbereich, wenn 0,8 ≤ x ≤ 2,0. **Dosis-Wirkungs-Beziehungen**: Ab welcher Dosis tritt Wirkung ein? Das ist eine Ungleichung.',
      selfTest: [
        {
          question: 'Lösen Sie: -3x + 9 ≥ 0',
          options: [
            'x ≥ 3',
            'x ≤ 3',
            'x ≤ -3',
            'x ≥ -3',
            'x > 0'
          ],
          correctIndex: 1,
          explanation: '-3x + 9 ≥ 0 → -3x ≥ -9 → x ≤ 3 (Zeichen dreht sich wegen Division durch -3).'
        },
        {
          question: 'Für welche x gilt: x² - 9 ≤ 0?',
          options: [
            'x ≤ -3 oder x ≥ 3',
            '-3 ≤ x ≤ 3',
            'x ≤ 3',
            '-9 ≤ x ≤ 9',
            'x ≥ 0'
          ],
          correctIndex: 1,
          explanation: 'x² - 9 = (x-3)(x+3) ≤ 0. Nullstellen: x = ±3. Parabel nach oben geöffnet → zwischen den Nullstellen negativ: -3 ≤ x ≤ 3.'
        },
        {
          question: 'Was ist die Lösungsmenge von |x - 4| > 2?',
          options: [
            '2 < x < 6',
            'x > 6',
            'x < 2 oder x > 6',
            'x < -2 oder x > 6',
            '4 < x < 6'
          ],
          correctIndex: 2,
          explanation: '|x - 4| > 2 bedeutet: x - 4 > 2 oder x - 4 < -2, also x > 6 oder x < 2.'
        }
      ]
    }
  ]
};
