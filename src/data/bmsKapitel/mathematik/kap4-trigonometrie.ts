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
      content: `So geht's: **Sinus, Kosinus und Tangens** (beschreiben Verhältnisse im rechtwinkligen Dreieck).

sin(α) = Gegenkathete/Hypotenuse
cos(α) = Ankathete/Hypotenuse
tan(α) = Gegenkathete/Ankathete = sin(α)/cos(α)

**Merkregel GAGA-HAHA**: Gegenkathete über Hypotenuse (sin), Ankathete über Hypotenuse (cos).

Der **Einheitskreis** (Kreis mit Radius 1 um den Ursprung) erweitert die Definition auf alle Winkel. Jeder Punkt P auf dem Einheitskreis hat Koordinaten P(cos(α)|sin(α)), wobei α der Winkel von der positiven x-Achse ist.

**Trigonometrischer Pythagoras**: sin²(α) + cos²(α) = 1. Die wichtigste trigonometrische Beziehung.

Vorzeichen in den vier Quadranten:
• 1. Quadrant (0°-90°): alle positiv
• 2. Quadrant (90°-180°): nur sin positiv
• 3. Quadrant (180°-270°): nur tan positiv
• 4. Quadrant (270°-360°): nur cos positiv
Merkregel: "All Students Take Calculus" (Alle, Sinus, Tangens, Cosinus).

**Wichtige Werte** (auswendig lernen):
sin(0°) = 0, sin(30°) = 1/2, sin(45°) = √2/2, sin(60°) = √3/2, sin(90°) = 1
cos läuft rückwärts: cos(0°) = 1, cos(30°) = √3/2, cos(45°) = √2/2, cos(60°) = 1/2, cos(90°) = 0
tan(30°) = √3/3, tan(45°) = 1, tan(60°) = √3

**Umrechnung Grad/Bogenmaß**: α(rad) = α(°) · π/180
30° = π/6, 45° = π/4, 60° = π/3, 90° = π/2, 180° = π, 360° = 2π

**Symmetrien**:
Ergänzung: sin(90° - α) = cos(α), cos(90° - α) = sin(α)
Supplement: sin(180° - α) = sin(α), cos(180° - α) = -cos(α)`,
      merksätze: [
        'sin(α) = Gegenkathete/Hypotenuse, cos(α) = Ankathete/Hypotenuse, tan(α) = sin(α)/cos(α). Fundamentale Identität: sin²(α) + cos²(α) = 1.',
        'Wichtige Werte: sin(30°) = 1/2, sin(45°) = √2/2, sin(60°) = √3/2. Kosinus hat dieselben Werte in umgekehrter Reihenfolge. Umrechnung: α(rad) = α(°) · π/180.'
      ],
      altfrage: {
        question: 'In welchem Quadranten liegt der Winkel 210° und welche Vorzeichen haben sin, cos und tan dort?',
        answer: '210° liegt im 3. Quadrant (180°-270°). Dort sind sin und cos negativ, aber tan ist positiv (da tan = sin/cos und minus/minus = plus).'
      },
      klinischerBezug: 'Die **Fourier-Analyse** zerlegt das EKG-Signal in Sinus-Wellen verschiedener Frequenzen. Jeder Herzrhythmus lässt sich als Überlagerung von sin- und cos-Funktionen darstellen. In der Computertomographie nutzt die **Radon-Transformation** trigonometrische Projektionen aus verschiedenen Winkeln zur Bildrekonstruktion.',
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
      content: `**Sinussatz**: a/sin(α) = b/sin(β) = c/sin(γ) = 2R
(R = Umkreisradius)

Anwendung: wenn zwei Winkel und eine Seite bekannt sind (WSW, SWW) oder zwei Seiten und ein Gegenwinkel (SSW).
Achtung beim SSW-Fall: Es können null, eine oder zwei Lösungen existieren (mehrdeutiger Fall).

Beispiel: a = 8, α = 40°, β = 60° → b = a · sin(β)/sin(α) = 8 · sin(60°)/sin(40°) ≈ 10,78

**Kosinussatz**: a² = b² + c² - 2bc·cos(α)
(Verallgemeinerter Pythagoras für beliebige Dreiecke)

Für α = 90° wird daraus: a² = b² + c² (klassischer Pythagoras).

Anwendung: wenn drei Seiten bekannt sind (SSS) oder zwei Seiten und der eingeschlossene Winkel (SWS).

Umgestellt nach Winkel: cos(α) = (b² + c² - a²)/(2bc)

Beispiel: a = 7, b = 5, c = 8 → cos(α) = (25 + 64 - 49)/80 = 40/80 = 0,5 → α = 60°

**Flächenberechnung**:
• Grundformel: A = (1/2) · g · h
• Mit eingeschlossenem Winkel: A = (1/2) · a · b · sin(γ)
• **Heronsche Formel** (nur Seitenlängen): A = √(s(s-a)(s-b)(s-c)) mit s = (a+b+c)/2

Beispiel: a = 3, b = 4, c = 5 → s = 6 → A = √(6·3·2·1) = 6`,
      merksätze: [
        'Sinussatz: a/sin(α) = b/sin(β) = c/sin(γ). Anwendung bei WSW, SWW und SSW (Achtung: mehrdeutiger Fall bei SSW!).',
        'Kosinussatz: a² = b² + c² - 2bc·cos(α). Anwendung bei SSS und SWS. Dreiecksfläche: A = (1/2)·a·b·sin(γ).'
      ],
      altfrage: {
        question: 'Ein Dreieck hat die Seiten a = 6, b = 8 und den eingeschlossenen Winkel γ = 90°. Berechnen Sie c und die Fläche.',
        answer: 'Kosinussatz: c² = 36 + 64 - 2·6·8·cos(90°) = 100 - 0 = 100 → c = 10. Fläche: A = (1/2)·6·8·sin(90°) = 24.'
      },
      klinischerBezug: 'In der Radiologie wird der **Cobb-Winkel** zur Beurteilung der Skoliose gemessen. Dabei bestimmt man den Winkel zwischen zwei Wirbelkörper-Tangenten mittels trigonometrischer Berechnungen. In der Strahlentherapie werden Bestrahlungswinkel am Patienten mit dem Kosinussatz berechnet, um die optimale Feldgeometrie zu finden.',
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
      content: `**Umkehrfunktionen** (Arkusfunktionen) liefern zu einem Funktionswert den zugehörigen Winkel:
• arcsin: Wertebereich [-90°, 90°]
• arccos: Wertebereich [0°, 180°]
• arctan: Wertebereich (-90°, 90°)

Diese liefern nur eine Hauptlösung. Weitere Lösungen ergeben sich aus der Periodizität.

**Lösungsformeln**:

Für sin(x) = a (mit |a| ≤ 1):
x₁ = arcsin(a) + k·360°
x₂ = 180° - arcsin(a) + k·360° (k ∈ ℤ)

Für cos(x) = a:
x₁ = arccos(a) + k·360°
x₂ = -arccos(a) + k·360° = 360° - arccos(a) + k·360°

Für tan(x) = a:
x = arctan(a) + k·180°

Beispiel: sin(x) = √3/2
Hauptlösung: x₁ = 60°
Zweite Lösung: x₂ = 180° - 60° = 120°
Im Intervall [0°, 360°): x = 60° oder x = 120°

**Lösen komplexer Gleichungen**:
Substitution u = sin(x) oder u = cos(x) verwandelt trigonometrische Gleichungen in algebraische.

Beispiel: 2sin²(x) - sin(x) - 1 = 0
Substitution u = sin(x): 2u² - u - 1 = 0 → u₁ = 1, u₂ = -1/2
Rücksubstitution: sin(x) = 1 → x = 90° und sin(x) = -1/2 → x = 210°, 330°

**Wichtige Identitäten**:
sin²(x) + cos²(x) = 1
sin(2x) = 2sin(x)cos(x)
cos(2x) = cos²(x) - sin²(x) = 1 - 2sin²(x) = 2cos²(x) - 1

**Periodizität**: sin und cos haben Periode 360° (2π), tan hat Periode 180° (π).`,
      merksätze: [
        'Umkehrfunktionen: arcsin: [-90°, 90°], arccos: [0°, 180°], arctan: (-90°, 90°). Wegen der Periodizität gibt es unendlich viele Lösungen: Periode von sin/cos = 360°, Periode von tan = 180°.',
        'Substitution u = sin(x) oder u = cos(x) verwandelt trigonometrische Gleichungen in algebraische. Die Identität sin²(x) + cos²(x) = 1 erlaubt das Umschreiben in nur eine Winkelfunktion.'
      ],
      altfrage: {
        question: 'Bestimmen Sie alle Lösungen von cos(x) = -1/2 im Intervall [0°, 360°).',
        answer: 'Hauptlösung: arccos(-1/2) = 120°. Zweite Lösung: 360° - 120° = 240°. Also: x₁ = 120° und x₂ = 240°.'
      },
      klinischerBezug: 'Periodische Prozesse im Körper werden mit Sinusfunktionen modelliert. Die **Herzfrequenz** zeigt rhythmische Schwankungen (EKG als Überlagerung von Sinuswellen), der **Atemzyklus** folgt einem sinusförmigen Muster. Der **zirkadiane Rhythmus** beschreibt die Körpertemperatur als T(t) = T₀ + A·sin(2π·t/24), wobei t die Tageszeit ist.',
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
