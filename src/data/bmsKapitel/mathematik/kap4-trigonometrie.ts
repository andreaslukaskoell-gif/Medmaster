import type { Kapitel } from '../types';

export const mathKap4: Kapitel = {
  id: 'math-kap4',
  title: 'Trigonometrie',
  subject: 'mathematik',
  icon: '📐',
  estimatedTime: '25 Minuten',
  unterkapitel: [
    {
      id: 'math-kap4-1',
      title: 'Winkelfunktionen',
      diagram: 'unit-circle',
      content: `Die trigonometrischen Funktionen Sinus, Kosinus und Tangens beschreiben Verhältnisse von Seitenlängen im rechtwinkligen Dreieck. Für einen Winkel α in einem rechtwinkligen Dreieck gilt: sin(α) = Gegenkathete/Hypotenuse, cos(α) = Ankathete/Hypotenuse, und tan(α) = Gegenkathete/Ankathete = sin(α)/cos(α). Diese Definitionen gelten zunächst nur für Winkel zwischen 0° und 90°. Die Merkregel „GAGA-HAHA“ hilft beim Einprägen: Gegenkathete über Hypotenuse (sin), Ankathete über Hypotenuse (cos). Alternativ kann man sich „SoH-CaH-ToA“ merken: Sine = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent.

Der Einheitskreis (Radius r = 1 mit Mittelpunkt im Ursprung) erweitert die Definition auf alle Winkel. Ein Punkt P auf dem Einheitskreis hat die Koordinaten P(cos(α)|sin(α)), wobei α der Winkel gegen den Uhrzeigersinn von der positiven x-Achse gemessen wird. Damit gilt für jeden Winkel α: sin²(α) + cos²(α) = 1 (trigonometrischer Pythagoras). Diese fundamentale Identität ist die wichtigste trigonometrische Beziehung. Der Einheitskreis zeigt auch die Vorzeichen der Funktionen in den vier Quadranten: Im 1. Quadrant (0°-90°) sind sin, cos und tan alle positiv. Im 2. Quadrant (90°-180°) ist nur sin positiv. Im 3. Quadrant (180°-270°) ist nur tan positiv. Im 4. Quadrant (270°-360°) ist nur cos positiv. Die Merkregel lautet: „All Students Take Calculus“ (Alle, Sinus, Tangens, Cosinus).

Die wichtigsten Funktionswerte sollten auswendig gelernt werden: sin(0°) = 0, sin(30°) = 1/2, sin(45°) = √2/2, sin(60°) = √3/2, sin(90°) = 1. Für Kosinus gelten dieselben Werte in umgekehrter Reihenfolge: cos(0°) = 1, cos(30°) = √3/2, cos(45°) = √2/2, cos(60°) = 1/2, cos(90°) = 0. Der Tangens ergibt sich jeweils als Quotient: tan(30°) = 1/√3 = √3/3, tan(45°) = 1, tan(60°) = √3. Die Umrechnung zwischen Grad und Bogenmaß ist: α(rad) = α(°) · π/180. Wichtige Werte: 30° = π/6, 45° = π/4, 60° = π/3, 90° = π/2, 180° = π, 360° = 2π. Ergänzungsbeziehungen: sin(90° - α) = cos(α) und cos(90° - α) = sin(α). Supplementbeziehungen: sin(180° - α) = sin(α) und cos(180° - α) = -cos(α). Diese Symmetrien vereinfachen das Berechnen von Winkelfunktionen erheblich.`,
      merksaetze: [
        'sin(α) = Gegenkathete/Hypotenuse, cos(α) = Ankathete/Hypotenuse, tan(α) = sin(α)/cos(α). Fundamentale Identität: sin²(α) + cos²(α) = 1.',
        'Wichtige Werte: sin(30°) = 1/2, sin(45°) = √2/2, sin(60°) = √3/2. Kosinus hat dieselben Werte in umgekehrter Reihenfolge. Umrechnung: α(rad) = α(°) · π/180.'
      ],
      altfrage: {
        question: 'In welchem Quadranten liegt der Winkel 210° und welche Vorzeichen haben sin, cos und tan dort?',
        answer: '210° liegt im 3. Quadrant (180°-270°). Dort sind sin und cos negativ, aber tan ist positiv (da tan = sin/cos und minus/minus = plus).'
      },
      klinischerBezug: 'Trigonometrische Funktionen werden in der medizinischen Bildgebung verwendet. Bei der Computertomographie (CT) basiert die Bildrekonstruktion auf der Radon-Transformation, die trigonometrische Projektionen in verschiedenen Winkeln nutzt. Auch Gelenkwinkel in der Orthopädie werden trigonometrisch beschrieben.',
      selfTest: [
        {
          question: 'Was ergibt sin²(60°) + cos²(60°)?',
          options: [
            '√3',
            '2',
            '1',
            '3/2',
            '1/2'
          ],
          correctIndex: 2,
          explanation: 'Der trigonometrische Pythagoras besagt: sin²(α) + cos²(α) = 1 für jeden Winkel α. Auch konkret: (√3/2)² + (1/2)² = 3/4 + 1/4 = 1.'
        },
        {
          question: 'Wie viel Grad entsprechen 2π/3 Radiant?',
          options: [
            '60°',
            '90°',
            '120°',
            '150°',
            '135°'
          ],
          correctIndex: 2,
          explanation: 'α(°) = α(rad) · 180/π = (2π/3) · 180/π = 360/3 = 120°.'
        },
        {
          question: 'Was ist cos(150°)?',
          options: [
            '√3/2',
            '-√3/2',
            '1/2',
            '-1/2',
            '√2/2'
          ],
          correctIndex: 1,
          explanation: 'cos(150°) = cos(180° - 30°) = -cos(30°) = -√3/2. Im 2. Quadrant ist der Kosinus negativ.'
        }
      ]
    },
    {
      id: 'math-kap4-2',
      title: 'Dreiecksberechnungen',
      content: `Der Sinussatz stellt einen Zusammenhang zwischen Seiten und gegenüberliegenden Winkeln in einem beliebigen Dreieck her: a/sin(α) = b/sin(β) = c/sin(γ) = 2R, wobei R der Umkreisradius ist. Der Sinussatz wird angewendet, wenn zwei Winkel und eine Seite bekannt sind (WSW oder SWW) oder wenn zwei Seiten und der einer Seite gegenüberliegende Winkel gegeben sind (SSW). Achtung beim SSW-Fall: Es können null, eine oder zwei Lösungen existieren (mehrdeutiger Fall). Beispiel: In einem Dreieck mit a = 8, α = 40° und β = 60° gilt: b = a · sin(β)/sin(α) = 8 · sin(60°)/sin(40°) ≈ 8 · 0,866/0,643 ≈ 10,78. Der dritte Winkel ergibt sich aus γ = 180° - α - β = 80°.

Der Kosinussatz verallgemeinert den Satz des Pythagoras auf beliebige Dreiecke: a² = b² + c² - 2bc · cos(α), und analog für die anderen Seiten. Für α = 90° vereinfacht sich dies zu a² = b² + c² (Pythagoras). Der Kosinussatz wird verwendet, wenn alle drei Seiten bekannt sind (SSS, zur Winkelberechnung) oder wenn zwei Seiten und der eingeschlossene Winkel gegeben sind (SWS, zur Berechnung der dritten Seite). Umgestellt nach dem Winkel: cos(α) = (b² + c² - a²)/(2bc). Beispiel: Dreieck mit a = 7, b = 5, c = 8. cos(α) = (25 + 64 - 49)/(2 · 5 · 8) = 40/80 = 0,5 → α = 60°.

Die Flächenberechnung eines Dreiecks kann auf mehrere Arten erfolgen. Die Grundformel A = (1/2) · g · h verwendet Grundseite und zugehörige Höhe. Wenn zwei Seiten und der eingeschlossene Winkel bekannt sind, gilt: A = (1/2) · a · b · sin(γ) (bzw. analog für andere Seitenpaare). Die Heronsche Formel nutzt ausschließlich die drei Seitenlängen: A = √(s(s-a)(s-b)(s-c)) mit s = (a+b+c)/2 (halber Umfang). Beispiel: Dreieck mit a = 3, b = 4, c = 5. s = 6. A = √(6·3·2·1) = √36 = 6. Dies stimmt mit der Grundformel überein: Es handelt sich um ein rechtwinkliges Dreieck (3² + 4² = 5²) mit A = (1/2) · 3 · 4 = 6. Im MedAT werden sowohl der Sinussatz als auch der Kosinussatz geprüft, wobei die Entscheidung, welchen Satz man anwenden muss, ein häufiger Aufgabenbestandteil ist.`,
      merksaetze: [
        'Sinussatz: a/sin(α) = b/sin(β) = c/sin(γ). Anwendung bei WSW, SWW und SSW (Achtung: mehrdeutiger Fall bei SSW!).',
        'Kosinussatz: a² = b² + c² - 2bc·cos(α). Anwendung bei SSS und SWS. Dreiecksfläche: A = (1/2)·a·b·sin(γ).'
      ],
      altfrage: {
        question: 'Ein Dreieck hat die Seiten a = 6, b = 8 und den eingeschlossenen Winkel γ = 90°. Berechnen Sie c und die Fläche.',
        answer: 'Kosinussatz: c² = 36 + 64 - 2·6·8·cos(90°) = 100 - 0 = 100 → c = 10. Fläche: A = (1/2)·6·8·sin(90°) = 24.'
      },
      klinischerBezug: 'In der Radiologie werden Dreiecksberechnungen bei der Bestimmung von Winkeln in Röntgenbildern eingesetzt, zum Beispiel bei der Messung des Cobb-Winkels zur Beurteilung einer Skoliose. Auch in der Strahlentherapie werden Bestrahlungswinkel trigonometrisch berechnet.',
      selfTest: [
        {
          question: 'In einem Dreieck gilt: a = 10, sin(α) = 0,5 und sin(β) = 0,8. Wie lang ist Seite b?',
          options: [
            'b = 4',
            'b = 16',
            'b = 6,25',
            'b = 12,5',
            'b = 8'
          ],
          correctIndex: 1,
          explanation: 'Sinussatz: a/sin(α) = b/sin(β) → b = a · sin(β)/sin(α) = 10 · 0,8/0,5 = 16.'
        },
        {
          question: 'Berechnen Sie die Seite c im Dreieck mit a = 5, b = 7 und γ = 60°.',
          options: [
            'c ≈ 6,24',
            'c ≈ 4,36',
            'c ≈ 8,54',
            'c ≈ 7,00',
            'c ≈ 5,00'
          ],
          correctIndex: 0,
          explanation: 'c² = a² + b² - 2ab·cos(γ) = 25 + 49 - 2·5·7·cos(60°) = 74 - 70·0,5 = 74 - 35 = 39. c = √39 ≈ 6,24.'
        },
        {
          question: 'Berechnen Sie die Fläche eines Dreiecks mit a = 12, b = 9 und dem eingeschlossenen Winkel γ = 30°.',
          options: [
            'A = 54',
            'A = 27',
            'A = 108',
            'A = 46,8',
            'A = 36'
          ],
          correctIndex: 1,
          explanation: 'A = (1/2)·a·b·sin(γ) = (1/2)·12·9·sin(30°) = (1/2)·12·9·0,5 = 27.'
        }
      ]
    },
    {
      id: 'math-kap4-3',
      title: 'Trigonometrische Gleichungen',
      content: `Trigonometrische Gleichungen enthalten Winkelfunktionen der Unbekannten, z. B. sin(x) = 0,5 oder 2cos²(x) - 1 = 0. Die Umkehrfunktionen (Arkusfunktionen) liefern zu einem gegebenen Funktionswert den zugehörigen Winkel: arcsin (oder sin⁻¹) mit Wertebereich [-90°, 90°], arccos mit Wertebereich [0°, 180°], und arctan mit Wertebereich (-90°, 90°). Da die trigonometrischen Funktionen periodisch sind, gibt es in der Regel unendlich viele Lösungen. Der Arkuswert liefert nur eine Hauptlösung, weitere ergeben sich durch Ausnutzung der Periodizität.

Für sin(x) = a (mit |a| ≤ 1) sind die Lösungen: x₁ = arcsin(a) + k · 360° und x₂ = 180° - arcsin(a) + k · 360° (k ∈ ℤ). Für cos(x) = a sind die Lösungen: x₁ = arccos(a) + k · 360° und x₂ = -arccos(a) + k · 360° = 360° - arccos(a) + k · 360°. Für tan(x) = a ist die Lösung: x = arctan(a) + k · 180°. Beispiel: sin(x) = √3/2. Hauptlösung: x₁ = 60°. Zweite Lösung im Intervall [0°, 360°): x₂ = 180° - 60° = 120°. Allgemeine Lösung: x = 60° + k · 360° oder x = 120° + k · 360°. Wenn die Aufgabe nur Lösungen in einem bestimmten Intervall verlangt (z. B. [0°, 360°)), werden nur die passenden ausgewählt.

Komplexere trigonometrische Gleichungen werden durch Substitution oder unter Verwendung trigonometrischer Identitäten gelöst. Beispiel: 2sin²(x) - sin(x) - 1 = 0. Substitution: u = sin(x) → 2u² - u - 1 = 0. pq-Formel (nach Division durch 2): u² - u/2 - 1/2 = 0 → u = 1/4 ± √(1/16 + 1/2) = 1/4 ± 3/4. Also u₁ = 1 und u₂ = -1/2. Rücksubstitution: sin(x) = 1 → x = 90° und sin(x) = -1/2 → x = -30° (also 210° und 330° im Intervall [0°, 360°)). Wichtige Identitäten für Umformungen sind: sin²(x) + cos²(x) = 1, sin(2x) = 2sin(x)cos(x), cos(2x) = cos²(x) - sin²(x) = 1 - 2sin²(x) = 2cos²(x) - 1. Die Periodizität der Funktionen ist: sin und cos haben die Periode 2π (360°), tan hat die Periode π (180°). Im MedAT werden einfache trigonometrische Gleichungen geprüft, bei denen die Standardwerte (30°, 45°, 60°, 90°) als Lösungen auftreten.`,
      merksaetze: [
        'Umkehrfunktionen: arcsin: [-90°, 90°], arccos: [0°, 180°], arctan: (-90°, 90°). Wegen der Periodizität gibt es unendlich viele Lösungen: Periode von sin/cos = 360°, Periode von tan = 180°.',
        'Substitution u = sin(x) oder u = cos(x) verwandelt trigonometrische Gleichungen in algebraische. Die Identität sin²(x) + cos²(x) = 1 erlaubt das Umschreiben in nur eine Winkelfunktion.'
      ],
      altfrage: {
        question: 'Bestimmen Sie alle Lösungen von cos(x) = -1/2 im Intervall [0°, 360°).',
        answer: 'Hauptlösung: arccos(-1/2) = 120°. Zweite Lösung: 360° - 120° = 240°. Also: x₁ = 120° und x₂ = 240°.'
      },
      klinischerBezug: 'Periodische Prozesse im Körper wie Herzrhythmus (EKG), Atemzyklus und zirkadiane Rhythmen werden mathematisch durch Sinusfunktionen modelliert. Eine Sinuskurve beschreibt näherungsweise die rhythmische Veränderung von Hormonniveaus oder der Körpertemperatur über den Tag.',
      selfTest: [
        {
          question: 'Wie viele Lösungen hat sin(x) = 0,5 im Intervall [0°, 360°)?',
          options: [
            'Eine Lösung',
            'Zwei Lösungen',
            'Drei Lösungen',
            'Keine Lösung',
            'Vier Lösungen'
          ],
          correctIndex: 1,
          explanation: 'sin(x) = 0,5 hat die Lösungen x₁ = 30° und x₂ = 180° - 30° = 150° im Intervall [0°, 360°).'
        },
        {
          question: 'Was ist arctan(1)?',
          options: [
            '30°',
            '45°',
            '60°',
            '90°',
            '0°'
          ],
          correctIndex: 1,
          explanation: 'tan(45°) = 1, also ist arctan(1) = 45°.'
        },
        {
          question: 'Lösen Sie: 2cos(x) + 1 = 0 für x ∈ [0°, 360°).',
          options: [
            'x = 60° und x = 300°',
            'x = 120° und x = 240°',
            'x = 150° und x = 210°',
            'x = 90° und x = 270°',
            'x = 60° und x = 120°'
          ],
          correctIndex: 1,
          explanation: '2cos(x) = -1 → cos(x) = -1/2. arccos(-1/2) = 120°. Zweite Lösung: 360° - 120° = 240°.'
        }
      ]
    }
  ]
};
