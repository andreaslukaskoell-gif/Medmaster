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
      content: `Eine lineare Funktion hat die allgemeine Form f(x) = kx + d (in Österreich übliche Notation; in Deutschland oft y = mx + b). Der Parameter k ist die Steigung der Geraden und gibt an, um wie viel sich der Funktionswert ändert, wenn x um 1 zunimmt. Geometrisch beschreibt k das Steigungsdreieck: k = Δy/Δx = (y₂ - y₁)/(x₂ - x₁). Ist k > 0, steigt die Gerade; ist k < 0, fällt sie; ist k = 0, verläuft sie horizontal. Der Parameter d ist der y-Achsenabschnitt, also der Funktionswert an der Stelle x = 0. Die Nullstelle der linearen Funktion ergibt sich aus kx + d = 0 zu x₀ = -d/k (für k ≠ 0).

Zwei Geraden sind genau dann parallel, wenn sie dieselbe Steigung haben (k₁ = k₂). Zwei Geraden stehen senkrecht (orthogonal) aufeinander, wenn das Produkt ihrer Steigungen -1 ergibt: k₁ · k₂ = -1, also k₂ = -1/k₁. Der Schnittpunkt zweier Geraden wird berechnet, indem man die Funktionsgleichungen gleichsetzt: k₁x + d₁ = k₂x + d₂ → x = (d₂ - d₁)/(k₁ - k₂). Um die Gleichung einer Geraden aufzustellen, benötigt man entweder zwei Punkte (daraus berechnet man k, dann d) oder einen Punkt und die Steigung (Punkt-Steigungs-Form: y - y₁ = k(x - x₁)). Beispiel: Gerade durch P(2|5) und Q(4|11): k = (11 - 5)/(4 - 2) = 3. Einsetzen: 5 = 3·2 + d → d = -1. Also: f(x) = 3x - 1.

Lineare Funktionen modellieren proportionale und direkt-lineare Zusammenhänge in der Medizin und den Naturwissenschaften. Direkte Proportionalität (d = 0) bedeutet, dass die Gerade durch den Ursprung geht: f(x) = kx. Dies gilt zum Beispiel für das Lambert-Beer-Gesetz in der Photometrie (Extinktion proportional zur Konzentration bei konstanter Schichtdicke). In der Statistik beschreibt die lineare Regression den bestmöglichen linearen Zusammenhang zwischen zwei Variablen. Im MedAT werden häufig Aufgaben gestellt, bei denen Geradengleichungen aus gegebenen Informationen aufgestellt oder Schnittpunkte berechnet werden müssen. Auch die grafische Interpretation – das Ablesen von Steigung und Achsenabschnitt aus einem Diagramm – wird regelmäßig geprüft.`,
      merksätze: [
        'Lineare Funktion: f(x) = kx + d. Steigung k = Δy/Δx, y-Achsenabschnitt d = f(0), Nullstelle x₀ = -d/k.',
        'Parallelität: k₁ = k₂. Orthogonalität: k₁ · k₂ = -1. Schnittpunkt zweier Geraden durch Gleichsetzen der Funktionsgleichungen.'
      ],
      altfrage: {
        question: 'Bestimmen Sie die Gleichung der Geraden, die senkrecht auf y = 2x + 3 steht und durch P(4|1) geht.',
        answer: 'Steigung der senkrechten Geraden: k = -1/2 (da 2 · (-1/2) = -1). Punkt-Steigungs-Form: y - 1 = -1/2 · (x - 4) → y = -x/2 + 3.'
      },
      klinischerBezug: 'Das Lambert-Beer-Gesetz E = ε · c · d beschreibt einen linearen Zusammenhang zwischen Extinktion und Konzentration. In der klinischen Chemie wird dieser lineare Zusammenhang genutzt, um aus der gemessenen Extinktion die Konzentration einer Substanz zu berechnen.',
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
      content: `Eine quadratische Funktion hat die Normalform f(x) = ax² + bx + c mit a ≠ 0. Ihr Graph ist eine Parabel: Für a > 0 ist sie nach oben geöffnet (hat ein Minimum), für a < 0 nach unten geöffnet (hat ein Maximum). Je größer |a|, desto schmaler die Parabel; je kleiner |a| (aber > 0), desto weiter ist sie geöffnet. Der Koeffizient c ist der y-Achsenabschnitt. Die Nullstellen werden mit der pq-Formel oder abc-Formel berechnet (siehe Kapitel 2.2). Die Normalparabel f(x) = x² hat ihren Scheitelpunkt im Ursprung und die Steigung 2x.

Der Scheitelpunkt S(xₛ|yₛ) ist der höchste bzw. tiefste Punkt der Parabel. Die Scheitelkoordinate berechnet sich aus der Normalform durch quadratische Ergänzung oder direkt mit der Formel: xₛ = -b/(2a) und yₛ = f(xₛ) = c - b²/(4a). Die Scheitelpunktform lautet f(x) = a(x - xₛ)² + yₛ. Sie macht den Scheitelpunkt direkt ablesbar und erleichtert das Zeichnen der Parabel. Umgekehrt kann man von der Scheitelpunktform in die Normalform umrechnen, indem man ausmultipliziert. Beispiel: f(x) = 2(x - 3)² + 1 = 2(x² - 6x + 9) + 1 = 2x² - 12x + 19. Scheitelpunkt: S(3|1). Da a = 2 > 0, ist dies ein Minimum.

Die faktorisierte Form f(x) = a(x - x₁)(x - x₂) nutzt die Nullstellen x₁ und x₂ und macht diese direkt ablesbar. Sie existiert nur, wenn die Diskriminante D ≥ 0 ist. Die Symmetrieachse der Parabel verläuft durch den Scheitelpunkt bei x = xₛ = (x₁ + x₂)/2, also genau in der Mitte zwischen den Nullstellen. Im MedAT werden häufig Aufgaben gestellt, bei denen zwischen den drei Darstellungsformen (Normalform, Scheitelpunktform, faktorisierte Form) umgerechnet werden muss. Typische Fragestellungen sind: Bestimmen des Scheitelpunkts, Berechnen der Nullstellen, Bestimmen der Öffnungsrichtung und des Wertebereichs. Der Wertebereich einer nach oben geöffneten Parabel mit Minimum yₛ ist [yₛ, ∞), bei einer nach unten geöffneten mit Maximum yₛ ist es (-∞, yₛ].`,
      merksätze: [
        'Scheitelpunkt: xₛ = -b/(2a), yₛ = f(xₛ). Scheitelpunktform: f(x) = a(x - xₛ)² + yₛ. a > 0 → Minimum, a < 0 → Maximum.',
        'Die drei Formen der quadratischen Funktion: Normalform (a, b, c → y-Achsenabschnitt), Scheitelpunktform (Scheitelpunkt ablesbar), faktorisierte Form (Nullstellen ablesbar).'
      ],
      altfrage: {
        question: 'Bestimmen Sie den Scheitelpunkt von f(x) = -x² + 6x - 5.',
        answer: 'xₛ = -6/(2·(-1)) = 3. yₛ = -(3)² + 6·3 - 5 = -9 + 18 - 5 = 4. Scheitelpunkt: S(3|4). Die Parabel ist nach unten geöffnet (a = -1 < 0), also ist dies ein Maximum.'
      },
      klinischerBezug: 'In der Physiologie modelliert die Frank-Starling-Kurve (Herz-Vorlast-Schlagvolumen-Beziehung) näherungsweise eine nach unten geöffnete Parabel: Bei zunehmender Vordehnung steigt das Schlagvolumen bis zu einem Maximum, fällt dann aber bei Überdehnung wieder ab.',
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
      content: `Exponentialfunktionen haben die Form f(x) = aˣ mit a > 0 und a ≠ 1. Der wichtigste Spezialfall ist die natürliche Exponentialfunktion f(x) = eˣ mit der Eulerschen Zahl e ≈ 2,71828. Exponentialfunktionen modellieren Wachstums- und Zerfallsprozesse: Für a > 1 wächst die Funktion exponentiell (z. B. Bakterienwachstum), für 0 < a < 1 fällt sie (z. B. radioaktiver Zerfall). Die allgemeine Wachstumsfunktion lautet N(t) = N₀ · eᵏᵗ, wobei N₀ der Anfangswert ist und k die Wachstumskonstante (k > 0: Wachstum, k < 0: Zerfall). Die Verdopplungszeit T₂ bei exponentiellem Wachstum ergibt sich aus: T₂ = ln(2)/k. Analog ist die Halbwertszeit T₁/₂ = ln(2)/|k| bei exponentiellem Zerfall.

Die Logarithmusfunktion ist die Umkehrfunktion der Exponentialfunktion: y = logₐ(x) bedeutet aʸ = x. Der natürliche Logarithmus (Basis e) wird mit ln bezeichnet: y = ln(x) bedeutet eʸ = x. Der dekadische Logarithmus (Basis 10) wird mit log oder lg bezeichnet: y = log(x) bedeutet 10ʸ = x. Die Logarithmusgesetze folgen direkt aus den Potenzgesetzen: log(a · b) = log(a) + log(b), log(a/b) = log(a) - log(b), log(aⁿ) = n · log(a), und die Basisumrechnung logₐ(x) = ln(x)/ln(a). Der Definitionsbereich des Logarithmus ist (0, ∞) – nur positive Zahlen können logarithmiert werden. Es gilt: ln(1) = 0 und ln(e) = 1.

In der Medizin sind Exponential- und Logarithmusfunktionen allgegenwärtig. Der pH-Wert ist definiert als pH = -log₁₀(c(H⁺)), also ein negativer dekadischer Logarithmus. Pharmakokinetische Eliminationsprozesse folgen häufig einer Kinetik erster Ordnung mit exponentieller Abnahme: c(t) = c₀ · e⁻ᵏᵗ. Das Bakterienwachstum in der exponentiellen Phase wird durch N(t) = N₀ · 2^(t/g) beschrieben, wobei g die Generationszeit ist. Im MedAT werden typischerweise Aufgaben zum Umgang mit Logarithmenregeln und zur Lösung einfacher Exponentialgleichungen gestellt. Eine Exponentialgleichung wird gelöst, indem man auf beiden Seiten den Logarithmus anwendet: Aus 3ˣ = 81 folgt x · ln(3) = ln(81) = ln(3⁴) = 4 · ln(3), also x = 4. Auch das Erkennen und Anwenden der Rechenregeln ist prüfungsrelevant.`,
      merksätze: [
        'Logarithmengesetze: log(a·b) = log(a) + log(b), log(a/b) = log(a) - log(b), log(aⁿ) = n·log(a). Basisumrechnung: logₐ(x) = ln(x)/ln(a).',
        'Exponentielles Wachstum: N(t) = N₀ · eᵏᵗ. Verdopplungszeit = ln(2)/k, Halbwertszeit = ln(2)/|k|. pH = -log₁₀(c(H⁺)).'
      ],
      altfrage: {
        question: 'Lösen Sie: 5^(2x-1) = 125',
        answer: '125 = 5³. Also: 5^(2x-1) = 5³ → 2x - 1 = 3 → 2x = 4 → x = 2.'
      },
      klinischerBezug: 'Der pH-Wert ist ein Logarithmus: pH = -log₁₀(c(H⁺)). Ein pH von 7 entspricht c(H⁺) = 10⁻⁷ mol/L. Eine Änderung um eine pH-Einheit bedeutet eine Verzehnfachung der H⁺-Konzentration. In der Pharmakokinetik beschreibt die Eliminationshalbwertszeit t₁/₂ = ln(2)/kₑ, wie schnell ein Medikament abgebaut wird.',
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
      content: `Potenzfunktionen haben die Form f(x) = xⁿ mit n ∈ ℝ. Für ganzzahlige Exponenten ergeben sich charakteristische Graphenverläufe: Für gerade n (x², x⁴, ...) sind die Graphen achsensymmetrisch zur y-Achse und verlaufen durch den Ursprung mit einem Minimum bei (0|0). Für ungerade n (x, x³, x⁵, ...) sind die Graphen punktsymmetrisch zum Ursprung. Mit wachsendem n wird der Graph in der Nähe des Ursprungs flacher und außerhalb des Intervalls [-1, 1] steiler. Negative Exponenten erzeugen Hyperbeln: f(x) = x⁻¹ = 1/x hat eine Polstelle bei x = 0 und Asymptoten entlang beider Achsen. f(x) = x⁻² = 1/x² ist achsensymmetrisch zur y-Achse mit einer Polstelle bei x = 0.

Wurzelfunktionen sind Potenzfunktionen mit rationalem Exponent: f(x) = √x = x^(1/2) und f(x) = ³√x = x^(1/3). Die Quadratwurzelfunktion hat den Definitionsbereich D = [0, ∞) und den Wertebereich W = [0, ∞). Ihr Graph beginnt im Ursprung und steigt monoton, aber mit abnehmender Steigung (konkav). Die Kubikwurzelfunktion hat den Definitionsbereich D = ℝ (da auch negative Zahlen eine dritte Wurzel haben) und ist punktsymmetrisch zum Ursprung. Allgemein gilt für f(x) = x^(1/n) mit geradem n: D = [0, ∞), und mit ungeradem n: D = ℝ. Die Umkehrfunktion von f(x) = xⁿ (für x ≥ 0) ist f⁻¹(x) = x^(1/n). Grafisch entsteht der Graph der Umkehrfunktion durch Spiegelung an der Winkelhalbierenden y = x.

Für den MedAT ist es wichtig, Definitions- und Wertebereiche sicher bestimmen zu können. Bei zusammengesetzten Funktionen wie f(x) = √(x² - 4) muss der Radikand nicht-negativ sein: x² - 4 ≥ 0 → x ≤ -2 oder x ≥ 2, also D = (-∞, -2] ∪ [2, ∞). Bei f(x) = 1/√(x - 3) muss der Radikand positiv sein (da die Wurzel auch im Nenner steht): x > 3, also D = (3, ∞). Transformationen von Potenz- und Wurzelfunktionen folgen den allgemeinen Regeln: f(x - a) verschiebt den Graphen um a nach rechts, f(x) + b verschiebt um b nach oben, und c · f(x) streckt oder staucht in y-Richtung. Diese Verschiebungs- und Streckungsregeln gelten für alle Funktionstypen und werden im MedAT regelmäßig geprüft.`,
      merksätze: [
        'Potenzfunktionen xⁿ: gerades n → achsensymmetrisch, ungerades n → punktsymmetrisch. Wurzelfunktionen: √x hat D = [0, ∞), ³√x hat D = ℝ.',
        'Definitionsbereich bestimmen: Unter geraden Wurzeln muss der Ausdruck ≥ 0 sein, im Nenner darf nichts = 0 sein, und im Logarithmus muss der Ausdruck > 0 sein.'
      ],
      altfrage: {
        question: 'Bestimmen Sie den Definitionsbereich von f(x) = √(6 - 2x).',
        answer: '6 - 2x ≥ 0 → -2x ≥ -6 → x ≤ 3. Also D = (-∞, 3] bzw. D = {x ∈ ℝ | x ≤ 3}.'
      },
      klinischerBezug: 'Die Körperoberfläche (KOF) wird in der Medizin oft mit der Formel KOF = 0,007184 · m^(0,425) · h^(0,725) berechnet (Dubois-Formel, m = Masse in kg, h = Größe in cm). Diese Potenzfunktion mit nicht-ganzzahligem Exponenten ist ein Beispiel für allometrische Skalierung in der Medizin.',
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
