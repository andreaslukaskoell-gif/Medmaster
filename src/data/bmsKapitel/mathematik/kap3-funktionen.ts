import type { Kapitel } from '../types';

export const mathKap3: Kapitel = {
  id: 'math-kap3',
  title: 'Funktionen',
  subject: 'mathematik',
  icon: '📈',
  estimatedTime: '30 Minuten',
  unterkapitel: [
    {
      id: 'math-kap3-1',
      title: 'Lineare Funktionen',
      diagram: 'coordinate-system',
      content: `**Lineare Funktionen** f(x) = kx + d. k ist die **Steigung** (um wie viel sich y ändert, wenn x um 1 zunimmt). d ist der **y-Achsenabschnitt** (Funktionswert bei x = 0).

**Steigung** k = Δy/Δx = (y₂ - y₁)/(x₂ - x₁). k > 0 → Gerade steigt. k < 0 → Gerade fällt. k = 0 → Gerade horizontal.

**Nullstelle** (wo die Gerade die x-Achse schneidet): kx + d = 0 → x₀ = -d/k (für k ≠ 0).

**Parallelität**: Zwei Geraden sind parallel, wenn k₁ = k₂ (gleiche Steigung).

**Orthogonalität** (senkrecht): k₁ · k₂ = -1. Also k₂ = -1/k₁.

**Schnittpunkt** zweier Geraden: Funktionen gleichsetzen. k₁x + d₁ = k₂x + d₂ → x = (d₂ - d₁)/(k₁ - k₂).

**Geradengleichung aufstellen**: Entweder zwei Punkte gegeben (daraus k berechnen, dann d) oder ein Punkt und die Steigung (Punkt-Steigungs-Form: y - y₁ = k(x - x₁)).

Beispiel: Gerade durch P(2|5) und Q(4|11). k = (11 - 5)/(4 - 2) = 3. Einsetzen: 5 = 3·2 + d → d = -1. Also: f(x) = 3x - 1.

**Direkte Proportionalität** (d = 0): f(x) = kx. Die Gerade geht durch den Ursprung.`,
      merksätze: [
        'Lineare Funktion: f(x) = kx + d. Steigung k = Δy/Δx, y-Achsenabschnitt d = f(0), Nullstelle x₀ = -d/k.',
        'Parallelität: k₁ = k₂. Orthogonalität: k₁ · k₂ = -1. Schnittpunkt zweier Geraden durch Gleichsetzen der Funktionsgleichungen.'
      ],
      altfrage: {
        question: 'Bestimmen Sie die Gleichung der Geraden, die senkrecht auf y = 2x + 3 steht und durch P(4|1) geht.',
        answer: 'Steigung der senkrechten Geraden: k = -1/2 (da 2 · (-1/2) = -1). Punkt-Steigungs-Form: y - 1 = -1/2 · (x - 4) → y = -x/2 + 3.'
      },
      klinischerBezug: 'Das **Lambert-Beer-Gesetz** E = ε · c · d beschreibt einen linearen Zusammenhang zwischen **Extinktion** E und **Konzentration** c (bei konstanter Schichtdicke d und Extinktionskoeffizient ε). In der klinischen Chemie: Extinktion messen → Konzentration berechnen. Beispiel: Photometer misst E = 0,5. Kalibrierung ergab E = 0,1 · c (also k = 0,1). Dann c = E/0,1 = 5 mg/ml.',
      selfTest: [
        {
          question: 'Welche Steigung hat die Gerade durch die Punkte A(1|3) und B(5|11)?',
          options: [
            'k = 1/2',
            'k = 2',
            'k = 4',
            'k = 8',
            'k = -2'
          ],
          correctIndex: 1,
          explanation: 'k = (y₂ - y₁)/(x₂ - x₁) = (11 - 3)/(5 - 1) = 8/4 = 2.'
        },
        {
          question: 'Die Gerade f(x) = -3x + 9 hat die Nullstelle bei:',
          options: [
            'x = -3',
            'x = 9',
            'x = 3',
            'x = -9',
            'x = 1/3'
          ],
          correctIndex: 2,
          explanation: 'Nullstelle: -3x + 9 = 0 → -3x = -9 → x = 3. Alternativ: x₀ = -d/k = -9/(-3) = 3.'
        },
        {
          question: 'Wo schneiden sich die Geraden f(x) = 2x + 1 und g(x) = -x + 7?',
          options: [
            '(2|5)',
            '(3|7)',
            '(2|7)',
            '(1|3)',
            '(4|9)'
          ],
          correctIndex: 0,
          explanation: '2x + 1 = -x + 7 → 3x = 6 → x = 2. y = 2·2 + 1 = 5. Schnittpunkt: (2|5).'
        }
      ]
    },
    {
      id: 'math-kap3-2',
      title: 'Quadratische Funktionen',
      content: `**Quadratische Funktionen** f(x) = ax² + bx + c mit a ≠ 0. Der Graph ist eine **Parabel**. a > 0 → nach oben geöffnet (Minimum). a < 0 → nach unten geöffnet (Maximum). Je größer |a|, desto schmaler die Parabel.

**Scheitelpunkt** S(xₛ|yₛ) ist der höchste bzw. tiefste Punkt. Formel: xₛ = -b/(2a) und yₛ = f(xₛ) = c - b²/(4a).

**Scheitelpunktform** f(x) = a(x - xₛ)² + yₛ. Hier ist der Scheitelpunkt direkt ablesbar.

Beispiel: f(x) = 2(x - 3)² + 1. Scheitelpunkt: S(3|1). Da a = 2 > 0, ist dies ein Minimum. Ausmultiplizieren: f(x) = 2(x² - 6x + 9) + 1 = 2x² - 12x + 19 (Normalform).

**Faktorisierte Form** f(x) = a(x - x₁)(x - x₂). Die Nullstellen x₁ und x₂ sind direkt ablesbar. Existiert nur, wenn D ≥ 0.

**Symmetrieachse** verläuft durch den Scheitelpunkt bei x = xₛ = (x₁ + x₂)/2 (Mitte zwischen den Nullstellen).

**Wertebereich**: Parabel nach oben geöffnet mit Minimum yₛ → W = [yₛ, ∞). Parabel nach unten geöffnet mit Maximum yₛ → W = (-∞, yₛ].

**Nullstellen** berechnen: pq-Formel oder abc-Formel (siehe Kapitel 2.2).`,
      merksätze: [
        'Scheitelpunkt: xₛ = -b/(2a), yₛ = f(xₛ). Scheitelpunktform: f(x) = a(x - xₛ)² + yₛ. a > 0 → Minimum, a < 0 → Maximum.',
        'Die drei Formen der quadratischen Funktion: Normalform (a, b, c → y-Achsenabschnitt), Scheitelpunktform (Scheitelpunkt ablesbar), faktorisierte Form (Nullstellen ablesbar).'
      ],
      altfrage: {
        question: 'Bestimmen Sie den Scheitelpunkt von f(x) = -x² + 6x - 5.',
        answer: 'xₛ = -6/(2·(-1)) = 3. yₛ = -(3)² + 6·3 - 5 = -9 + 18 - 5 = 4. Scheitelpunkt: S(3|4). Die Parabel ist nach unten geöffnet (a = -1 < 0), also ist dies ein Maximum.'
      },
      klinischerBezug: 'Die **Frank-Starling-Kurve** (Herz-Vorlast-Schlagvolumen-Beziehung) ist näherungsweise eine nach unten geöffnete Parabel. Bei zunehmender Vordehnung steigt das Schlagvolumen bis zu einem Maximum (optimale Vordehnung). Bei Überdehnung fällt das Schlagvolumen wieder ab. **Dosis-Wirkungs-Kurven** können ebenfalls parabelförmig sein (z. B. therapeutisches Fenster).',
      selfTest: [
        {
          question: 'Welchen Scheitelpunkt hat f(x) = (x + 2)² - 5?',
          options: [
            'S(2|-5)',
            'S(-2|-5)',
            'S(-2|5)',
            'S(2|5)',
            'S(0|-5)'
          ],
          correctIndex: 1,
          explanation: 'Die Scheitelpunktform f(x) = a(x - xₛ)² + yₛ ergibt hier: xₛ = -2 und yₛ = -5, also S(-2|-5).'
        },
        {
          question: 'Wie viele Nullstellen hat f(x) = 2x² - 4x + 5?',
          options: [
            'Zwei Nullstellen',
            'Eine doppelte Nullstelle',
            'Keine reelle Nullstelle',
            'Unendlich viele',
            'Genau drei Nullstellen'
          ],
          correctIndex: 2,
          explanation: 'D = b² - 4ac = 16 - 40 = -24 < 0. Da die Diskriminante negativ ist, gibt es keine reelle Nullstelle.'
        },
        {
          question: 'Welchen Wertebereich hat f(x) = -3(x - 1)² + 12?',
          options: [
            'W = [12, ∞)',
            'W = (-∞, 12]',
            'W = (-∞, 1]',
            'W = ℝ',
            'W = [0, 12]'
          ],
          correctIndex: 1,
          explanation: 'Da a = -3 < 0, ist die Parabel nach unten geöffnet. Das Maximum liegt bei yₛ = 12. Wertebereich: (-∞, 12].'
        }
      ]
    },
    {
      id: 'math-kap3-3',
      title: 'Exponential- & Logarithmusfunktionen',
      content: `**Exponentialfunktionen** f(x) = aˣ mit a > 0 und a ≠ 1. Der wichtigste Fall: f(x) = eˣ (natürliche Exponentialfunktion, e ≈ 2,71828).

a > 1 → exponentielles Wachstum (z. B. Bakterienwachstum). 0 < a < 1 → exponentieller Zerfall (z. B. radioaktiver Zerfall).

**Wachstumsfunktion**: N(t) = N₀ · eᵏᵗ. N₀ ist der Anfangswert, k die Wachstumskonstante. k > 0 → Wachstum. k < 0 → Zerfall.

**Verdopplungszeit** T₂ = ln(2)/k. **Halbwertszeit** T₁/₂ = ln(2)/|k|.

**Logarithmusfunktion** ist die Umkehrfunktion der Exponentialfunktion. y = logₐ(x) bedeutet aʸ = x. Das ist die ganze Definition.

**Natürlicher Logarithmus** (Basis e): y = ln(x) bedeutet eʸ = x.

**Dekadischer Logarithmus** (Basis 10): y = log(x) oder lg(x) bedeutet 10ʸ = x.

**Logarithmusgesetze**: log(a · b) = log(a) + log(b). log(a/b) = log(a) - log(b). log(aⁿ) = n · log(a).

**Basisumrechnung**: logₐ(x) = ln(x)/ln(a).

**Definitionsbereich**: D = (0, ∞) (nur positive Zahlen!). ln(1) = 0 und ln(e) = 1.

**Exponentialgleichungen lösen**: Logarithmus anwenden. Beispiel: 3ˣ = 81. 81 = 3⁴, also 3ˣ = 3⁴ → x = 4. Alternativ: x · ln(3) = ln(81) → x = ln(81)/ln(3) = 4.`,
      merksätze: [
        'Logarithmengesetze: log(a·b) = log(a) + log(b), log(a/b) = log(a) - log(b), log(aⁿ) = n·log(a). Basisumrechnung: logₐ(x) = ln(x)/ln(a).',
        'Exponentielles Wachstum: N(t) = N₀ · eᵏᵗ. Verdopplungszeit = ln(2)/k, Halbwertszeit = ln(2)/|k|. pH = -log₁₀(c(H⁺)).'
      ],
      altfrage: {
        question: 'Lösen Sie: 5^(2x-1) = 125',
        answer: '125 = 5³. Also: 5^(2x-1) = 5³ → 2x - 1 = 3 → 2x = 4 → x = 2.'
      },
      klinischerBezug: 'Der **pH-Wert** ist ein Logarithmus: pH = -log₁₀(c(H⁺)). Ein pH von 7,4 (Blut) bedeutet c(H⁺) = 10⁻⁷·⁴ mol/L ≈ 40 nmol/L. Pro pH-Einheit ändert sich c(H⁺) um Faktor 10. pH 6,4 → c(H⁺) = 400 nmol/L (10-fach höher als bei pH 7,4). **Eliminationskinetik 1. Ordnung**: c(t) = c₀ · e⁻ᵏᵗ. Die **Halbwertszeit** t₁/₂ = ln(2)/k ist konstant. Beispiel: Aspirin t₁/₂ ≈ 0,3 h. Nach 0,3 h bleibt c₀/2, nach 0,6 h bleibt c₀/4, nach 0,9 h bleibt c₀/8.',
      selfTest: [
        {
          question: 'Was ergibt ln(e⁵)?',
          options: [
            'e⁵',
            '5e',
            '5',
            '1',
            'e/5'
          ],
          correctIndex: 2,
          explanation: 'ln(eⁿ) = n, da ln die Umkehrfunktion von eˣ ist. Also: ln(e⁵) = 5.'
        },
        {
          question: 'Vereinfachen Sie: log₁₀(500) - log₁₀(5)',
          options: [
            'log₁₀(495)',
            'log₁₀(100) = 2',
            'log₁₀(2500)',
            'log₁₀(505)',
            'log₁₀(50) = 1,7'
          ],
          correctIndex: 1,
          explanation: 'log(a) - log(b) = log(a/b). Also: log₁₀(500/5) = log₁₀(100) = 2, da 10² = 100.'
        },
        {
          question: 'Eine Bakterienkultur verdoppelt sich alle 30 Minuten. Wie viele Bakterien sind nach 3 Stunden aus 100 Anfangsbakterien entstanden?',
          options: [
            '3200',
            '6400',
            '1600',
            '12800',
            '800'
          ],
          correctIndex: 1,
          explanation: '3 Stunden = 6 Verdopplungen (6 × 30 min). N = 100 · 2⁶ = 100 · 64 = 6400.'
        }
      ]
    },
    {
      id: 'math-kap3-4',
      title: 'Potenz- & Wurzelfunktionen',
      content: `**Potenzfunktionen** f(x) = xⁿ mit n ∈ ℝ.

**Gerade Exponenten** (x², x⁴, ...): Achsensymmetrisch zur y-Achse. Verlaufen durch den Ursprung mit Minimum bei (0|0).

**Ungerade Exponenten** (x, x³, x⁵, ...): Punktsymmetrisch zum Ursprung.

Mit wachsendem n wird der Graph nahe dem Ursprung flacher, außerhalb [-1, 1] steiler.

**Negative Exponenten** erzeugen Hyperbeln. f(x) = x⁻¹ = 1/x hat eine Polstelle bei x = 0 (Asymptoten entlang beider Achsen). f(x) = x⁻² = 1/x² ist achsensymmetrisch zur y-Achse mit Polstelle bei x = 0.

**Wurzelfunktionen** sind Potenzfunktionen mit rationalem Exponent: f(x) = √x = x^(1/2) und f(x) = ³√x = x^(1/3).

**Quadratwurzelfunktion**: D = [0, ∞), W = [0, ∞). Graph beginnt im Ursprung, steigt monoton mit abnehmender Steigung (konkav).

**Kubikwurzelfunktion**: D = ℝ (auch negative Zahlen haben eine dritte Wurzel!). Punktsymmetrisch zum Ursprung.

Allgemein: f(x) = x^(1/n) mit geradem n → D = [0, ∞). Mit ungeradem n → D = ℝ.

**Umkehrfunktion**: f(x) = xⁿ (für x ≥ 0) hat f⁻¹(x) = x^(1/n). Grafisch: Spiegelung an der Winkelhalbierenden y = x.

**Definitionsbereich bestimmen**: Bei f(x) = √(x² - 4) muss x² - 4 ≥ 0 sein. x² ≥ 4 → |x| ≥ 2 → x ≤ -2 oder x ≥ 2. Also D = (-∞, -2] ∪ [2, ∞).

Bei f(x) = 1/√(x - 3) muss x - 3 > 0 sein (positiv, da im Nenner!). Also D = (3, ∞).`,
      merksätze: [
        'Potenzfunktionen xⁿ: gerades n → achsensymmetrisch, ungerades n → punktsymmetrisch. Wurzelfunktionen: √x hat D = [0, ∞), ³√x hat D = ℝ.',
        'Definitionsbereich bestimmen: Unter geraden Wurzeln muss der Ausdruck ≥ 0 sein, im Nenner darf nichts = 0 sein, und im Logarithmus muss der Ausdruck > 0 sein.'
      ],
      altfrage: {
        question: 'Bestimmen Sie den Definitionsbereich von f(x) = √(6 - 2x).',
        answer: '6 - 2x ≥ 0 → -2x ≥ -6 → x ≤ 3. Also D = (-∞, 3] bzw. D = {x ∈ ℝ | x ≤ 3}.'
      },
      klinischerBezug: 'Die **Körperoberfläche** (KOF) nach Dubois: KOF = 0,007184 · m^(0,425) · h^(0,725) (m = Masse in kg, h = Größe in cm). Das ist eine Potenzfunktion mit nicht-ganzzahligem Exponenten. Die KOF wird für Dosierungen in der Onkologie verwendet (z. B. Chemotherapie-Dosis in mg/m²). **Clearance** bei Kindern wird oft per KOF angepasst.',
      selfTest: [
        {
          question: 'Welchen Definitionsbereich hat f(x) = √(x² - 9)?',
          options: [
            'D = [3, ∞)',
            'D = (-∞, -3] ∪ [3, ∞)',
            'D = [-3, 3]',
            'D = ℝ',
            'D = (0, ∞)'
          ],
          correctIndex: 1,
          explanation: 'x² - 9 ≥ 0 → x² ≥ 9 → |x| ≥ 3 → x ≤ -3 oder x ≥ 3. Also D = (-∞, -3] ∪ [3, ∞).'
        },
        {
          question: 'Welche Symmetrie hat der Graph von f(x) = x⁴ - 2x²?',
          options: [
            'Punktsymmetrisch zum Ursprung',
            'Achsensymmetrisch zur y-Achse',
            'Keine Symmetrie',
            'Achsensymmetrisch zur x-Achse',
            'Symmetrisch zur Geraden y = x'
          ],
          correctIndex: 1,
          explanation: 'f(-x) = (-x)⁴ - 2(-x)² = x⁴ - 2x² = f(x). Da f(-x) = f(x), ist der Graph achsensymmetrisch zur y-Achse.'
        },
        {
          question: 'Wie entsteht der Graph von g(x) = √(x - 2) + 3 aus dem Graphen von f(x) = √x?',
          options: [
            'Verschiebung um 2 nach links und 3 nach oben',
            'Verschiebung um 2 nach rechts und 3 nach oben',
            'Verschiebung um 2 nach rechts und 3 nach unten',
            'Verschiebung um 3 nach rechts und 2 nach oben',
            'Streckung um Faktor 2 und Verschiebung um 3 nach oben'
          ],
          correctIndex: 1,
          explanation: 'f(x - 2) verschiebt den Graphen um 2 nach rechts, und + 3 verschiebt ihn um 3 nach oben.'
        }
      ]
    }
  ]
};
