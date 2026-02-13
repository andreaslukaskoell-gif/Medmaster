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
      content: `Terme sind mathematische Ausdrücke, die Zahlen, Variablen und Rechenoperationen enthalten. Das Vereinfachen von Termen ist eine Grundfertigkeit der Algebra und basiert auf dem Zusammenfassen gleichartiger Glieder sowie dem Ausmultiplizieren von Klammern. Gleichartige Glieder besitzen dieselben Variablen in derselben Potenz: 3x² + 5x² = 8x², aber 3x² + 5x lässt sich nicht weiter vereinfachen. Die binomischen Formeln sind besonders wichtige Umformungen: (a + b)² = a² + 2ab + b², (a - b)² = a² - 2ab + b², und (a + b)(a - b) = a² - b². Diese Formeln werden im MedAT häufig geprüft und sollten sicher beherrscht werden.

Eine Gleichung ist eine Aussage, dass zwei Terme gleich sind. Das Lösen einer Gleichung bedeutet, alle Werte der Variablen zu finden, für die die Gleichung wahr ist. Lineare Gleichungen haben die Form ax + b = 0 und besitzen genau eine Lösung: x = -b/a (für a ≠ 0). Das systematische Lösen erfolgt durch Äquivalenzumformungen: Auf beiden Seiten darf dieselbe Zahl addiert oder subtrahiert werden, und beide Seiten dürfen mit derselben Zahl (≠ 0) multipliziert oder dividiert werden. Die Gleichung bleibt dabei äquivalent, das heißt, sie hat dieselbe Lösungsmenge. Beispiel: 3x - 7 = 2x + 5 → 3x - 2x = 5 + 7 → x = 12.

Beim Lösen von Gleichungen mit Klammern muss zunächst ausmultipliziert werden, bevor zusammengefasst wird. Bruchgleichungen erfordern das Multiplizieren mit dem Hauptnenner, wobei anschließend eine Probe durchgeführt werden muss, um Scheinlösungen auszuschließen (Division durch Null). Beispiel: 3/(x-1) = 6/(x+2). Multiplizieren mit (x-1)(x+2): 3(x+2) = 6(x-1) → 3x + 6 = 6x - 6 → 12 = 3x → x = 4. Probe: 3/3 = 1 und 6/6 = 1 ✓. Betragsgleichungen wie |2x - 3| = 7 werden durch Fallunterscheidung gelöst: 2x - 3 = 7 → x = 5 oder 2x - 3 = -7 → x = -2. Beide Lösungen müssen überprüft werden. Das systematische Vorgehen bei Gleichungen – Vereinfachen, Umformen, Lösen, Probe – ist ein Kernthema im MedAT-Mathematikteil.`,
      merksaetze: [
        'Binomische Formeln: (a+b)² = a² + 2ab + b², (a-b)² = a² - 2ab + b², (a+b)(a-b) = a² - b². Diese sind die häufigsten Umformungen im MedAT.',
        'Äquivalenzumformungen ändern die Lösungsmenge nicht: Auf beiden Seiten darf addiert/subtrahiert und mit einer Zahl ≠ 0 multipliziert/dividiert werden. Bei Bruchgleichungen immer Probe machen!'
      ],
      altfrage: {
        question: 'Lösen Sie die Gleichung: 5(x - 2) - 3(2x + 1) = 4',
        answer: '5x - 10 - 6x - 3 = 4 → -x - 13 = 4 → -x = 17 → x = -17.'
      },
      klinischerBezug: 'Lineare Gleichungen treten in der Medizin bei Dosisberechnungen auf: Wenn eine Infusion mit Rate r ml/h läuft und nach t Stunden V ml infundiert sein sollen, ergibt sich die Gleichung r · t = V, die nach der gewünschten Größe aufgelöst wird.',
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
      content: `Quadratische Gleichungen haben die allgemeine Form ax² + bx + c = 0 mit a ≠ 0. Sie besitzen maximal zwei Lösungen, die als Nullstellen der zugehörigen Parabel interpretiert werden können. Die bekannteste Lösungsformel ist die abc-Formel (auch Mitternachtsformel genannt): x₁,₂ = (-b ± √(b² - 4ac)) / (2a). Der Ausdruck D = b² - 4ac unter der Wurzel heißt Diskriminante und bestimmt die Anzahl der Lösungen: D > 0 ergibt zwei verschiedene reelle Lösungen, D = 0 ergibt genau eine (doppelte) Lösung, und D < 0 bedeutet, dass keine reelle Lösung existiert.

Für normierte quadratische Gleichungen der Form x² + px + q = 0 (also a = 1) vereinfacht sich die Formel zur pq-Formel: x₁,₂ = -p/2 ± √((p/2)² - q). Hier ist die Diskriminante D = (p/2)² - q. Beispiel: x² - 6x + 5 = 0. Mit p = -6 und q = 5: x = 3 ± √(9 - 5) = 3 ± 2, also x₁ = 5 und x₂ = 1. Die Probe bestätigt: 25 - 30 + 5 = 0 ✓ und 1 - 6 + 5 = 0 ✓. Der Satz von Vieta liefert einen eleganten Zusammenhang zwischen Lösungen und Koeffizienten: Für x² + px + q = 0 gilt x₁ + x₂ = -p und x₁ · x₂ = q. Diese Beziehung ermöglicht schnelles Überprüfen der Ergebnisse.

In der Praxis sind alternative Lösungsstrategien oft effizienter als die Formeln. Faktorisierung nutzt aus, dass ax² + bx + c = a(x - x₁)(x - x₂): Wenn die Nullstellen ganzzahlig sind, kann man sie durch geschicktes Probieren finden. Beispiel: x² - 5x + 6 = 0. Man sucht zwei Zahlen mit Summe 5 und Produkt 6: Das sind 2 und 3, also (x - 2)(x - 3) = 0. Quadratische Ergänzung ist eine weitere Methode: x² + 6x + 2 = 0 → (x² + 6x + 9) - 9 + 2 = 0 → (x + 3)² = 7 → x = -3 ± √7. Diese Methode ist gleichzeitig die Herleitung der pq-Formel und bildet die Grundlage für die Scheitelpunktform quadratischer Funktionen. Im MedAT ist die pq-Formel das Standardwerkzeug, da die meisten Aufgaben normierte Gleichungen verwenden.`,
      merksaetze: [
        'pq-Formel: x₁,₂ = -p/2 ± √((p/2)² - q). Diskriminante D = (p/2)² - q bestimmt die Lösungsanzahl: D > 0 → zwei, D = 0 → eine, D < 0 → keine reelle Lösung.',
        'Satz von Vieta: x₁ + x₂ = -p und x₁ · x₂ = q. Damit lassen sich gefundene Lösungen schnell überprüfen.'
      ],
      altfrage: {
        question: 'Bestimmen Sie die Lösungen von 2x² - 8x + 6 = 0.',
        answer: 'Division durch 2: x² - 4x + 3 = 0. pq-Formel: x = 2 ± √(4 - 3) = 2 ± 1. Also x₁ = 3 und x₂ = 1. Vieta-Probe: 3 + 1 = 4 = -(-4) ✓ und 3 · 1 = 3 ✓.'
      },
      klinischerBezug: 'Quadratische Gleichungen treten in der Pharmakokinetik auf, etwa bei der Berechnung von Gleichgewichtskonzentrationen im Zwei-Kompartiment-Modell. Auch die Henderson-Hasselbalch-Gleichung führt in bestimmten Fällen auf quadratische Gleichungen.',
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
      content: `Ein lineares Gleichungssystem (LGS) mit zwei Gleichungen und zwei Unbekannten hat die allgemeine Form: a₁x + b₁y = c₁ und a₂x + b₂y = c₂. Geometrisch entspricht jede Gleichung einer Geraden in der x-y-Ebene, und die Lösung des Systems ist der Schnittpunkt beider Geraden. Drei Fälle sind möglich: genau eine Lösung (die Geraden schneiden sich in einem Punkt), keine Lösung (die Geraden sind parallel, also widersprüchlich), oder unendlich viele Lösungen (die Geraden sind identisch). Im MedAT werden fast ausschließlich Systeme mit genau einer Lösung gestellt.

Das Einsetzungsverfahren löst eine Gleichung nach einer Variablen auf und setzt das Ergebnis in die andere Gleichung ein. Beispiel: I) 2x + y = 7, II) x - 3y = -7. Aus I: y = 7 - 2x. Einsetzen in II: x - 3(7 - 2x) = -7 → x - 21 + 6x = -7 → 7x = 14 → x = 2. Rückeinsetzen: y = 7 - 4 = 3. Lösung: (2|3). Das Additionsverfahren (Eliminationsverfahren) multipliziert die Gleichungen so, dass beim Addieren eine Variable wegfällt. Gleiches Beispiel: I) 2x + y = 7 |·3 → 6x + 3y = 21, II) x - 3y = -7. Addition: 7x = 14 → x = 2, dann y = 3. Beide Verfahren führen stets zum selben Ergebnis; die Wahl hängt von der konkreten Aufgabe ab.

Das Gleichsetzungsverfahren ist eine Variante, bei der beide Gleichungen nach derselben Variablen aufgelöst und dann gleichgesetzt werden. Es eignet sich besonders, wenn beide Gleichungen bereits in der Form y = ... vorliegen. Beispiel: y = 2x + 1 und y = -x + 7. Gleichsetzen: 2x + 1 = -x + 7 → 3x = 6 → x = 2, y = 5. Für den MedAT ist es wichtig, die Verfahren sicher und schnell anzuwenden. Ein häufiger Fehler ist das Vergessen des Vorzeichens beim Additionsverfahren. Zur Kontrolle sollte die gefundene Lösung immer in beide Ausgangsgleichungen eingesetzt werden (Probe). Bei Textaufgaben müssen zunächst die Variablen definiert und die Gleichungen aufgestellt werden, bevor mit dem Lösen begonnen wird – das korrekte Aufstellen des Gleichungssystems ist oft der schwierigste Teil.`,
      merksaetze: [
        'Drei Lösungsverfahren für LGS: Einsetzungsverfahren (eine Variable isolieren und einsetzen), Additionsverfahren (Gleichungen so kombinieren, dass eine Variable wegfällt), Gleichsetzungsverfahren (beide nach derselben Variable auflösen und gleichsetzen).',
        'Immer eine Probe durchführen: Die Lösung in BEIDE Ausgangsgleichungen einsetzen. Bei Textaufgaben zuerst Variablen definieren und Gleichungen aufstellen!'
      ],
      altfrage: {
        question: 'Lösen Sie: 3x + 2y = 12 und 5x - 2y = 4',
        answer: 'Addition beider Gleichungen: 8x = 16 → x = 2. Einsetzen in Gleichung 1: 6 + 2y = 12 → y = 3. Lösung: (2|3). Probe: 3·2 + 2·3 = 12 ✓ und 5·2 - 2·3 = 4 ✓.'
      },
      klinischerBezug: 'In der klinischen Chemie können Gleichungssysteme beim Berechnen von Mischungsverhältnissen auftreten, z. B. wenn zwei Infusionslösungen unterschiedlicher Konzentration zu einer gewünschten Endkonzentration und Endmenge gemischt werden sollen.',
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
      content: `Ungleichungen beschreiben Ordnungsrelationen zwischen Termen. Sie verwenden die Zeichen < (kleiner), > (größer), ≤ (kleiner oder gleich) und ≥ (größer oder gleich). Die Lösungsmenge einer Ungleichung ist im Allgemeinen ein Intervall oder eine Vereinigung von Intervallen, nicht ein einzelner Wert. Lineare Ungleichungen werden wie lineare Gleichungen durch Äquivalenzumformungen gelöst, mit einer entscheidenden Besonderheit: Bei Multiplikation oder Division mit einer negativen Zahl dreht sich das Relationszeichen um. Beispiel: -2x > 6 → x < -3 (Zeichen dreht sich). Ohne diese Regelbeachtung erhält man eine falsche Lösungsmenge.

Quadratische Ungleichungen erfordern zunächst das Bestimmen der Nullstellen der zugehörigen quadratischen Gleichung und dann eine Vorzeichenanalyse. Beispiel: x² - 5x + 4 < 0. Die Nullstellen von x² - 5x + 4 = 0 sind x₁ = 1 und x₂ = 4 (nach Vieta: Summe 5, Produkt 4). Da die Parabel nach oben geöffnet ist (a = 1 > 0), liegt sie zwischen den Nullstellen unter der x-Achse: Die Lösung ist das offene Intervall 1 < x < 4 bzw. x ∈ (1, 4). Ist die Parabel nach unten geöffnet (a < 0), kehrt sich das Verhalten um. Zur Sicherheit kann man einen Testpunkt in jedem Intervall einsetzen, um das Vorzeichen zu bestimmen.

Betragsungleichungen erfordern eine systematische Fallunterscheidung. Die wichtigsten Fälle sind: |x| < a (mit a > 0) entspricht -a < x < a, und |x| > a entspricht x > a oder x < -a. Allgemeiner: |f(x)| < a wird zu -a < f(x) < a und |f(x)| > a wird zu f(x) > a oder f(x) < -a. Beispiel: |2x - 1| ≤ 5 wird zu -5 ≤ 2x - 1 ≤ 5 → -4 ≤ 2x ≤ 6 → -2 ≤ x ≤ 3. Die Lösungsmenge ist das abgeschlossene Intervall [-2, 3]. Für die Intervallschreibweise gilt: runde Klammern für offene Grenzen, eckige Klammern für abgeschlossene Grenzen. Im MedAT werden Ungleichungen oft als Teil von Textaufgaben eingesetzt, beispielsweise bei der Frage nach dem Definitionsbereich oder bei Optimierungsproblemen.`,
      merksaetze: [
        'Entscheidende Regel: Bei Multiplikation/Division mit einer negativen Zahl kehrt sich das Ungleichungszeichen um! Dies ist der häufigste Fehler bei Ungleichungen.',
        'Betragsungleichungen: |f(x)| < a → -a < f(x) < a (Schnittmenge). |f(x)| > a → f(x) > a ODER f(x) < -a (Vereinigung).'
      ],
      altfrage: {
        question: 'Lösen Sie die Ungleichung: x² - 4x - 5 > 0',
        answer: 'Nullstellen: x₁ = 5, x₂ = -1 (Vieta: Summe 4, Produkt -5). Da a > 0 (nach oben geöffnet), ist die Parabel außerhalb der Nullstellen positiv: x < -1 oder x > 5.'
      },
      klinischerBezug: 'Referenzbereiche für Laborwerte werden als Intervalle angegeben (z. B. Blutzucker nüchtern: 70-100 mg/dl). Die mathematische Beschreibung, ob ein Messwert im Normbereich liegt, entspricht einer Ungleichung: 70 ≤ x ≤ 100.',
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
