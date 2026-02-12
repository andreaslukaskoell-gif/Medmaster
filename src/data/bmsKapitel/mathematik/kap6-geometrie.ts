import type { Kapitel } from '../types';

export const mathKap6: Kapitel = {
  id: 'math-kap6',
  title: 'Geometrie & Vektoren',
  subject: 'mathematik',
  icon: '📏',
  estimatedTime: '35 Minuten',
  unterkapitel: [
    {
      id: 'math-kap6-1',
      title: 'Ebene Geometrie',
      content: `Die ebene Geometrie befasst sich mit Figuren in der Ebene. Dreiecke sind die grundlegendsten Polygone. Die Winkelsumme in jedem Dreieck beträgt 180°. Besondere Dreiecke sind: das gleichseitige Dreieck (alle Seiten und Winkel gleich, α = β = γ = 60°), das gleichschenklige Dreieck (zwei gleiche Seiten, die Basiswinkel sind gleich) und das rechtwinklige Dreieck (ein Winkel = 90°). Für das rechtwinklige Dreieck gilt der Satz des Pythagoras: a² + b² = c², wobei c die Hypotenuse (die dem rechten Winkel gegenüberliegende Seite) und a, b die Katheten sind. Häufige pythagoreische Tripel sind: (3, 4, 5), (5, 12, 13), (8, 15, 17) und deren Vielfache. Die Fläche eines Dreiecks berechnet sich als A = (1/2) · g · h (Grundseite mal Höhe geteilt durch 2).

Vierecke bilden eine vielfältige Klasse von Figuren. Die Winkelsumme in jedem Viereck beträgt 360°. Das Quadrat hat vier gleiche Seiten und vier rechte Winkel: Umfang U = 4a, Fläche A = a², Diagonale d = a√2. Das Rechteck hat gegenüberliegende Seiten gleich und vier rechte Winkel: U = 2(a + b), A = a · b, d = √(a² + b²). Das Parallelogramm hat gegenüberliegende Seiten parallel und gleich lang: A = g · h (wobei h die Höhe auf die Grundseite g ist). Das Trapez hat ein Paar paralleler Seiten: A = (a + c)/2 · h (Mittelwert der parallelen Seiten mal Höhe). Die Raute (Rhombus) hat vier gleiche Seiten: A = (d₁ · d₂)/2 (Produkt der Diagonalen geteilt durch 2). Die Inklusionshierarchie lautet: Quadrat ⊂ Raute ⊂ Parallelogramm ⊂ Trapez.

Der Kreis ist definiert als die Menge aller Punkte mit gleichem Abstand r (Radius) vom Mittelpunkt. Der Umfang beträgt U = 2πr = πd (mit Durchmesser d = 2r), die Fläche A = πr². Ein Kreissektor (Kreisausschnitt) mit Zentriwinkel α hat den Bogen b = 2πr · α/360° und die Fläche A_Sektor = πr² · α/360°. Ein Kreissegment ist die Fläche zwischen Sehne und Bogen. Die Kreisgleichung im kartesischen Koordinatensystem lautet (x - m₁)² + (y - m₂)² = r² mit Mittelpunkt M(m₁|m₂). Für den MedAT ist es wichtig, die Formeln für Umfang und Fläche der grundlegenden Figuren sicher zu beherrschen und in Textaufgaben anwenden zu können. Auch zusammengesetzte Figuren kommen vor: Deren Fläche wird durch Addition oder Subtraktion der Teilflächen berechnet.`,
      merksaetze: [
        'Pythagoras: a² + b² = c² (nur im rechtwinkligen Dreieck!). Dreiecksfläche: A = (1/2)·g·h. Winkelsumme: Dreieck 180°, Viereck 360°.',
        'Kreis: U = 2πr, A = πr². Kreissektor: Bogen b = 2πr·α/360°, Fläche = πr²·α/360°. Kreisgleichung: (x-m₁)² + (y-m₂)² = r².'
      ],
      altfrage: {
        question: 'Ein rechtwinkliges Dreieck hat die Katheten a = 6 cm und b = 8 cm. Berechnen Sie die Hypotenuse und die Fläche.',
        answer: 'c = √(6² + 8²) = √(36 + 64) = √100 = 10 cm. Fläche: A = (1/2) · 6 · 8 = 24 cm².'
      },
      klinischerBezug: 'Die Kreisfläche wird in der Medizin bei der Berechnung von Gefäßquerschnitten verwendet. Der Strömungswiderstand in einem Gefäß hängt stark vom Radius ab (Hagen-Poiseuille-Gesetz: Widerstand proportional zu 1/r⁴), weshalb schon geringe Verengungen große Auswirkungen auf den Blutfluss haben.',
      selfTest: [
        {
          question: 'Ein Parallelogramm hat die Grundseite 12 cm und die Höhe 7 cm. Wie groß ist die Fläche?',
          options: [
            '42 cm²',
            '84 cm²',
            '19 cm²',
            '38 cm²'
          ],
          correctIndex: 1,
          explanation: 'A = g · h = 12 · 7 = 84 cm².'
        },
        {
          question: 'Wie lang ist der Bogen eines Kreissektors mit r = 10 cm und α = 72°?',
          options: [
            '4π cm ≈ 12,57 cm',
            '2π cm ≈ 6,28 cm',
            '20π cm ≈ 62,83 cm',
            '8π cm ≈ 25,13 cm'
          ],
          correctIndex: 0,
          explanation: 'b = 2πr · α/360° = 2π · 10 · 72/360 = 20π · 1/5 = 4π ≈ 12,57 cm.'
        },
        {
          question: 'Die Diagonale eines Quadrats beträgt 10 cm. Wie lang ist eine Seite?',
          options: [
            '5 cm',
            '5√2 ≈ 7,07 cm',
            '10√2 ≈ 14,14 cm',
            '10/√2 ≈ 7,07 cm'
          ],
          correctIndex: 1,
          explanation: 'd = a√2, also a = d/√2 = 10/√2 = 10√2/2 = 5√2 ≈ 7,07 cm. (Antworten B und D sind gleich; B ist die vereinfachte Form.)'
        }
      ]
    },
    {
      id: 'math-kap6-2',
      title: 'Körper',
      content: `Dreidimensionale Körper haben Volumen und Oberfläche. Der Quader (Kasten) mit den Kanten a, b, c hat das Volumen V = a · b · c und die Oberfläche O = 2(ab + ac + bc). Der Würfel ist ein Spezialfall mit a = b = c: V = a³, O = 6a², Raumdiagonale d = a√3. Der Zylinder mit Radius r und Höhe h hat V = πr²h und O = 2πr² + 2πrh = 2πr(r + h) (zwei Kreisflächen plus Mantelfläche). Die Mantelfläche allein beträgt M = 2πrh. Werden diese Formeln im MedAT abgefragt, kommt es häufig auf das richtige Einsetzen und die Unterscheidung zwischen Mantelfläche und Gesamtoberfläche an.

Die Kugel mit Radius r hat das Volumen V = (4/3)πr³ und die Oberfläche O = 4πr². Der Kegel mit Grundkreisradius r, Höhe h und Mantellinie s = √(r² + h²) hat V = (1/3)πr²h und O = πr² + πrs = πr(r + s). Die Pyramide mit quadratischer Grundfläche a² und Höhe h hat V = (1/3)a²h. Allgemein gilt für alle Spitzkörper (Kegel, Pyramide): V = (1/3) · Grundfläche · Höhe. Dies ist ein wichtiger Zusammenhang: Das Volumen eines Spitzkörpers ist genau ein Drittel des Volumens des zugehörigen Prismas (Zylinder bei kreisförmiger Grundfläche, Quader bei rechteckiger). Zur Oberfläche der Pyramide addiert man die Grundfläche und die Mantelfläche (Summe der Dreiecksflächen der Seitenflächen).

In Textaufgaben werden häufig zusammengesetzte Körper betrachtet, deren Volumen durch Addition oder Subtraktion berechnet wird. Beispiel: Ein Eisbecher (Halbkugel oben, Kegel unten) mit r = 3 cm und Kegelhöhe h = 8 cm hat das Gesamtvolumen V = (2/3)πr³ + (1/3)πr²h = (2/3)π·27 + (1/3)π·9·8 = 18π + 24π = 42π ≈ 131,9 cm³. Auch Hohlkörper kommen vor: Das Volumen eines Rohres (Hohlzylinder) ist V = πh(R² - r²), wobei R der Außenradius und r der Innenradius ist. Die Einheitsumrechnung ist essenziell: 1 m³ = 1000 dm³ = 1000 Liter, 1 dm³ = 1 Liter, 1 cm³ = 1 ml. Im MedAT sollten alle Volumen- und Oberflächenformeln der Standardkörper auswendig beherrscht werden, da sie schnell abgefragt werden können.`,
      merksaetze: [
        'Spitzkörper-Regel: V = (1/3) · Grundfläche · Höhe (gilt für Kegel und Pyramide). Kugel: V = (4/3)πr³, O = 4πr². Zylinder: V = πr²h.',
        'Einheiten: 1 dm³ = 1 Liter, 1 cm³ = 1 ml, 1 m³ = 1000 Liter. Bei Oberflächen immer prüfen: Mantelfläche allein oder Gesamtoberfläche gefragt?'
      ],
      altfrage: {
        question: 'Eine Kugel hat den Radius 6 cm. Berechnen Sie Volumen und Oberfläche.',
        answer: 'V = (4/3)π · 6³ = (4/3)π · 216 = 288π ≈ 904,8 cm³. O = 4π · 6² = 144π ≈ 452,4 cm².'
      },
      klinischerBezug: 'Die Volumenberechnung von Körpern ist in der Medizin bei der Abschätzung von Organgrößen relevant. In der Ultraschalldiagnostik wird das Volumen der Schilddrüse nach der Ellipsoid-Formel geschätzt: V = π/6 · Länge · Breite · Tiefe. Auch Tumorvolumina werden so abgeschätzt.',
      selfTest: [
        {
          question: 'Wie groß ist das Volumen eines Kegels mit r = 5 cm und h = 12 cm?',
          options: [
            '300π cm³',
            '100π cm³',
            '60π cm³',
            '25π cm³'
          ],
          correctIndex: 1,
          explanation: 'V = (1/3)πr²h = (1/3)π · 25 · 12 = (1/3) · 300π = 100π ≈ 314,2 cm³.'
        },
        {
          question: 'Ein Zylinder hat V = 500π cm³ und r = 10 cm. Wie hoch ist er?',
          options: [
            'h = 5 cm',
            'h = 50 cm',
            'h = 5/π cm',
            'h = 0,5 cm'
          ],
          correctIndex: 0,
          explanation: 'V = πr²h → h = V/(πr²) = 500π/(π · 100) = 500/100 = 5 cm.'
        },
        {
          question: 'Wie viel Liter fasst ein Quader mit den Maßen 20 cm × 30 cm × 50 cm?',
          options: [
            '3 Liter',
            '30 Liter',
            '300 Liter',
            '3000 Liter'
          ],
          correctIndex: 1,
          explanation: 'V = 20 · 30 · 50 = 30.000 cm³ = 30.000 ml = 30 Liter (da 1000 cm³ = 1 Liter).'
        }
      ]
    },
    {
      id: 'math-kap6-3',
      title: 'Vektoren Grundlagen',
      content: `Ein Vektor beschreibt eine gerichtete Größe mit Betrag und Richtung. Im zweidimensionalen Raum wird ein Vektor als a⃗ = (a₁, a₂) und im dreidimensionalen als a⃗ = (a₁, a₂, a₃) geschrieben. Der Ortsvektor eines Punktes P(x|y|z) ist der Vektor vom Ursprung zum Punkt: OP⃗ = (x, y, z). Der Verbindungsvektor von Punkt A zu Punkt B ist AB⃗ = OB⃗ - OA⃗ = (b₁ - a₁, b₂ - a₂, b₃ - a₃). Vektoren sind gleich, wenn sie in allen Komponenten übereinstimmen. Der Nullvektor 0⃗ = (0, 0, 0) hat den Betrag 0 und keine definierte Richtung. Der Gegenvektor von a⃗ ist -a⃗ = (-a₁, -a₂, -a₃).

Die Vektoraddition erfolgt komponentenweise: a⃗ + b⃗ = (a₁ + b₁, a₂ + b₂, a₃ + b₃). Geometrisch entspricht dies der Parallelogrammregel oder der Hintereinanderausführung (Spitze-an-Schwanz-Methode). Die Subtraktion ist: a⃗ - b⃗ = a⃗ + (-b⃗). Die Skalarmultiplikation multipliziert einen Vektor mit einer reellen Zahl: r · a⃗ = (r·a₁, r·a₂, r·a₃). Für r > 0 behält der Vektor seine Richtung, für r < 0 kehrt sie sich um, und |r| gibt den Streckungsfaktor an. Zwei Vektoren sind parallel (kollinear), wenn einer ein skalares Vielfaches des anderen ist: a⃗ = r · b⃗ für ein r ∈ ℝ. Beispiel: a⃗ = (2, 4, -6) und b⃗ = (1, 2, -3) sind parallel mit r = 2.

Der Betrag (die Länge) eines Vektors berechnet sich als: |a⃗| = √(a₁² + a₂² + a₃²). Beispiel: |a⃗| = |(3, 4)| = √(9 + 16) = 5. Der Einheitsvektor in Richtung von a⃗ ist e⃗_a = a⃗/|a⃗| und hat den Betrag 1. Der Abstand zwischen zwei Punkten A und B ist |AB⃗| = √((b₁-a₁)² + (b₂-a₂)² + (b₃-a₃)²). Der Mittelpunkt M der Strecke AB hat den Ortsvektor OM⃗ = (OA⃗ + OB⃗)/2 = ((a₁+b₁)/2, (a₂+b₂)/2, (a₃+b₃)/2). Linearkombinationen spielen eine zentrale Rolle: Der Vektor c⃗ = r·a⃗ + s·b⃗ ist eine Linearkombination von a⃗ und b⃗. Im MedAT werden grundlegende Vektoroperationen und Abstandsberechnungen geprüft. Das sichere Rechnen mit Komponenten ist die Grundlage für alle weiterführenden Vektoraufgaben.`,
      merksaetze: [
        'Vektoroperationen sind komponentenweise: Addition (a₁+b₁, ...), Skalarmultiplikation (r·a₁, ...). Betrag: |a⃗| = √(a₁² + a₂² + a₃²). Einheitsvektor: e⃗ = a⃗/|a⃗|.',
        'Verbindungsvektor: AB⃗ = OB⃗ - OA⃗ (Spitze minus Anfang). Mittelpunkt: M = (A + B)/2. Parallelität: a⃗ = r · b⃗.'
      ],
      altfrage: {
        question: 'Berechnen Sie den Abstand der Punkte A(1|3|5) und B(4|7|5).',
        answer: 'AB⃗ = (3, 4, 0). |AB⃗| = √(9 + 16 + 0) = √25 = 5.'
      },
      klinischerBezug: 'In der Biomechanik werden Kräfte als Vektoren dargestellt. Die resultierende Kraft auf ein Gelenk ergibt sich durch Vektoraddition aller angreifenden Kräfte (Muskelkraft, Gewichtskraft, Reaktionskraft). Der Betrag der resultierenden Kraft bestimmt die mechanische Belastung des Gelenks.',
      selfTest: [
        {
          question: 'Was ergibt 3·(2, -1, 4) + (1, 5, -2)?',
          options: [
            '(7, 2, 10)',
            '(7, 2, 14)',
            '(9, 6, 6)',
            '(7, -2, 14)'
          ],
          correctIndex: 0,
          explanation: '3·(2, -1, 4) = (6, -3, 12). Addition: (6+1, -3+5, 12+(-2)) = (7, 2, 10).'
        },
        {
          question: 'Wie lang ist der Vektor a⃗ = (1, -2, 2)?',
          options: [
            '√5',
            '3',
            '√9 = 3',
            '5'
          ],
          correctIndex: 1,
          explanation: '|a⃗| = √(1² + (-2)² + 2²) = √(1 + 4 + 4) = √9 = 3.'
        },
        {
          question: 'Welcher Punkt liegt genau in der Mitte zwischen A(2|8) und B(6|4)?',
          options: [
            'M(4|6)',
            'M(3|5)',
            'M(8|12)',
            'M(4|12)'
          ],
          correctIndex: 0,
          explanation: 'M = ((2+6)/2, (8+4)/2) = (4, 6).'
        }
      ]
    },
    {
      id: 'math-kap6-4',
      title: 'Skalarprodukt & Winkel',
      content: `Das Skalarprodukt (inneres Produkt, Punktprodukt) zweier Vektoren a⃗ und b⃗ ist definiert als: a⃗ · b⃗ = a₁b₁ + a₂b₂ + a₃b₃. Das Ergebnis ist eine Zahl (ein Skalar), kein Vektor. Geometrisch gilt: a⃗ · b⃗ = |a⃗| · |b⃗| · cos(φ), wobei φ der Winkel zwischen den Vektoren ist. Durch Gleichsetzen beider Formeln ergibt sich die Winkelformel: cos(φ) = (a⃗ · b⃗)/(|a⃗| · |b⃗|) = (a₁b₁ + a₂b₂ + a₃b₃)/(√(a₁² + a₂² + a₃²) · √(b₁² + b₂² + b₃²)). Der Winkel φ liegt immer zwischen 0° und 180°. Beispiel: a⃗ = (1, 2, 3) und b⃗ = (4, -1, 2). Skalarprodukt: 4 - 2 + 6 = 8. |a⃗| = √14, |b⃗| = √21. cos(φ) = 8/√(14·21) = 8/√294 ≈ 0,467 → φ ≈ 62,2°.

Zwei Vektoren stehen senkrecht (orthogonal) aufeinander, wenn ihr Skalarprodukt null ist: a⃗ · b⃗ = 0 ⟺ a⃗ ⊥ b⃗. Dies ist ein schneller und eleganter Test auf Rechtwinkligkeit. Beispiel: a⃗ = (3, 1) und b⃗ = (-1, 3). a⃗ · b⃗ = -3 + 3 = 0, also stehen die Vektoren senkrecht aufeinander. Die Projektion eines Vektors a⃗ auf einen Vektor b⃗ berechnet sich als: proj_b⃗(a⃗) = (a⃗ · b⃗)/(b⃗ · b⃗) · b⃗. Die Länge der Projektion ist |a⃗ · b⃗|/|b⃗|. Das Skalarprodukt hat folgende Eigenschaften: Kommutativität (a⃗ · b⃗ = b⃗ · a⃗), Distributivität (a⃗ · (b⃗ + c⃗) = a⃗ · b⃗ + a⃗ · c⃗), und Verträglichkeit mit Skalarmultiplikation ((r·a⃗) · b⃗ = r · (a⃗ · b⃗)).

Für den MedAT werden typischerweise Aufgaben gestellt, die das Berechnen des Skalarprodukts, das Überprüfen der Orthogonalität und das Bestimmen des Winkels zwischen Vektoren verlangen. Ein wichtiger Spezialfall ist a⃗ · a⃗ = |a⃗|², also das Skalarprodukt eines Vektors mit sich selbst ergibt das Quadrat seines Betrags. Das Kreuzprodukt (Vektorprodukt) a⃗ × b⃗ liefert hingegen einen Vektor, der senkrecht auf a⃗ und b⃗ steht: a⃗ × b⃗ = (a₂b₃ - a₃b₂, a₃b₁ - a₁b₃, a₁b₂ - a₂b₁). Sein Betrag |a⃗ × b⃗| = |a⃗| · |b⃗| · sin(φ) entspricht der Fläche des von a⃗ und b⃗ aufgespannten Parallelogramms. Das Kreuzprodukt wird im MedAT seltener geprüft, aber das Wissen um seine Existenz und geometrische Bedeutung kann bei Verständnisfragen hilfreich sein.`,
      merksaetze: [
        'Skalarprodukt: a⃗ · b⃗ = a₁b₁ + a₂b₂ + a₃b₃ = |a⃗|·|b⃗|·cos(φ). Orthogonalität: a⃗ ⊥ b⃗ ⟺ a⃗ · b⃗ = 0.',
        'Winkelformel: cos(φ) = (a⃗ · b⃗)/(|a⃗|·|b⃗|). Spezialfall: a⃗ · a⃗ = |a⃗|². Das Skalarprodukt ist kommutativ und distributiv.'
      ],
      altfrage: {
        question: 'Berechnen Sie den Winkel zwischen a⃗ = (1, 1, 0) und b⃗ = (0, 1, 1).',
        answer: 'a⃗ · b⃗ = 0 + 1 + 0 = 1. |a⃗| = √2, |b⃗| = √2. cos(φ) = 1/(√2·√2) = 1/2. φ = 60°.'
      },
      klinischerBezug: 'In der Strahlentherapie ist der Einfallswinkel der Strahlung relativ zur Körperoberfläche entscheidend für die Dosisverteilung. Der Winkel zwischen Strahlrichtungsvektor und Flächennormalvektor wird mit dem Skalarprodukt berechnet. Auch in der MRT-Bildgebung spielen Winkel zwischen Magnetisierungsvektoren eine zentrale Rolle.',
      selfTest: [
        {
          question: 'Sind die Vektoren a⃗ = (2, -3, 1) und b⃗ = (1, 2, 4) orthogonal?',
          options: [
            'Ja, denn a⃗ · b⃗ = 0',
            'Nein, denn a⃗ · b⃗ = 2',
            'Ja, denn a⃗ · b⃗ = -4',
            'Nein, denn a⃗ · b⃗ = 4'
          ],
          correctIndex: 0,
          explanation: 'a⃗ · b⃗ = 2·1 + (-3)·2 + 1·4 = 2 - 6 + 4 = 0. Da das Skalarprodukt null ist, stehen die Vektoren senkrecht aufeinander.'
        },
        {
          question: 'Was ist der Winkel zwischen a⃗ = (1, 0) und b⃗ = (1, 1)?',
          options: [
            '30°',
            '45°',
            '60°',
            '90°'
          ],
          correctIndex: 1,
          explanation: 'a⃗ · b⃗ = 1. |a⃗| = 1, |b⃗| = √2. cos(φ) = 1/√2 → φ = 45°.'
        },
        {
          question: 'Berechnen Sie a⃗ · a⃗ für a⃗ = (3, -4, 0).',
          options: [
            '5',
            '7',
            '25',
            '-7'
          ],
          correctIndex: 2,
          explanation: 'a⃗ · a⃗ = 9 + 16 + 0 = 25 = |a⃗|² = (√(9+16))² = 5² = 25.'
        }
      ]
    },
    {
      id: 'math-kap6-5',
      title: 'Einheiten & Dimensionsanalyse',
      content: `Das Internationale Einheitensystem (SI-System, Système international d'unités) definiert sieben Basiseinheiten, aus denen alle anderen Einheiten abgeleitet werden. Die für die Medizin und den MedAT wichtigsten sind: Meter (m) für die Länge, Kilogramm (kg) für die Masse, Sekunde (s) für die Zeit, Ampere (A) für die elektrische Stromstärke, Kelvin (K) für die Temperatur, Mol (mol) für die Stoffmenge und Candela (cd) für die Lichtstärke. Abgeleitete Einheiten werden durch Kombination der Basiseinheiten ausgedrückt: Newton (N = kg·m/s²) für die Kraft, Pascal (Pa = N/m² = kg/(m·s²)) für den Druck, Joule (J = N·m = kg·m²/s²) für die Energie, Watt (W = J/s) für die Leistung und Volt (V = W/A) für die elektrische Spannung.

SI-Vorsilben ermöglichen die kompakte Darstellung von Vielfachen und Teilen der Einheiten. Die wichtigsten Vorsilben sind: Tera (T, 10¹²), Giga (G, 10⁹), Mega (M, 10⁶), Kilo (k, 10³), Hekto (h, 10²), Deka (da, 10¹), Dezi (d, 10⁻¹), Zenti (c, 10⁻²), Milli (m, 10⁻³), Mikro (μ, 10⁻⁶), Nano (n, 10⁻⁹), Piko (p, 10⁻¹²). Umrechnungen erfolgen durch Multiplikation mit der entsprechenden Zehnerpotenz. Beispiel: 3,5 km = 3,5 · 10³ m = 3500 m. Und 250 μg = 250 · 10⁻⁶ g = 0,00025 g = 0,25 mg. Bei der Umrechnung von Flächeneinheiten quadriert sich der Faktor: 1 m² = 10⁴ cm² (da 1 m = 100 cm, also 1 m² = (100)² cm²). Bei Volumeneinheiten wird kubiert: 1 m³ = 10⁶ cm³. Diese häufigen Fehlerquellen müssen im MedAT beachtet werden.

Die Dimensionsanalyse ist eine Methode zur Überprüfung physikalischer Gleichungen. Jede physikalische Gleichung muss dimensionshomogen sein: Auf beiden Seiten müssen die gleichen Einheiten stehen. Dies ermöglicht das Erkennen fehlerhafter Formeln. Beispiel: Geschwindigkeit = Strecke/Zeit hat die Dimension [m/s]. Wenn eine berechnete Geschwindigkeit die Einheit m/s² hätte, wäre die Formel offensichtlich falsch. In der Medizin ist die Dimensionsanalyse bei Dosisberechnungen essenziell: Wenn eine Infusion in mg/min gegeben werden soll und die Konzentration in mg/ml vorliegt, ergibt die Division den Volumenstrom in ml/min – die Einheiten müssen sich konsistent kürzen. Weitere wichtige Umrechnungen: Temperatur: T(K) = T(°C) + 273,15; Druck: 1 atm = 101.325 Pa ≈ 1013 hPa = 760 mmHg; Energie: 1 cal ≈ 4,184 J; Volumen: 1 L = 1 dm³ = 10⁻³ m³. Im MedAT werden Einheitenumrechnungen und Dimensionsanalyse regelmäßig geprüft, insbesondere im Kontext medizinischer Berechnungen.`,
      merksaetze: [
        'SI-Basiseinheiten: m, kg, s, A, K, mol, cd. Wichtige Vorsilben: Kilo (10³), Milli (10⁻³), Mikro (10⁻⁶), Nano (10⁻⁹). Bei Flächen quadriert, bei Volumen kubiert sich der Umrechnungsfaktor!',
        'Dimensionsanalyse: Beide Seiten einer Gleichung müssen die gleichen Einheiten haben. Einheiten kürzen sich wie Brüche – diese Methode hilft, Fehler in Dosisberechnungen zu vermeiden.'
      ],
      altfrage: {
        question: 'Rechnen Sie um: 0,05 m² in cm².',
        answer: '1 m = 100 cm, also 1 m² = (100)² cm² = 10.000 cm². Daher: 0,05 m² = 0,05 · 10.000 cm² = 500 cm².'
      },
      klinischerBezug: 'Medikamentendosierungen werden in der Medizin häufig in mg/kg Körpergewicht angegeben. Bei einem Kind mit 20 kg und einer Dosis von 15 mg/kg ergibt sich: 15 mg/kg · 20 kg = 300 mg. Wenn das Medikament als Saft mit 50 mg/ml vorliegt, braucht man: 300 mg / (50 mg/ml) = 6 ml. Die Dimensionsanalyse stellt sicher, dass am Ende die richtige Einheit steht.',
      selfTest: [
        {
          question: 'Wie viele cm³ sind 2,5 Liter?',
          options: [
            '25 cm³',
            '250 cm³',
            '2500 cm³',
            '25000 cm³'
          ],
          correctIndex: 2,
          explanation: '1 Liter = 1 dm³ = 1000 cm³. Also: 2,5 L = 2500 cm³.'
        },
        {
          question: 'Ein Patient soll 0,5 mg/min eines Medikaments erhalten. Die Lösung hat 2 mg/ml. Welche Infusionsrate in ml/h ist einzustellen?',
          options: [
            '15 ml/h',
            '1 ml/h',
            '0,25 ml/h',
            '60 ml/h'
          ],
          correctIndex: 0,
          explanation: 'Rate = 0,5 mg/min ÷ 2 mg/ml = 0,25 ml/min. Pro Stunde: 0,25 · 60 = 15 ml/h.'
        },
        {
          question: 'Welche Aussage zur Einheitenumrechnung ist korrekt?',
          options: [
            '1 km² = 1000 m²',
            '1 km² = 100.000 m²',
            '1 km² = 1.000.000 m²',
            '1 km² = 10.000 m²'
          ],
          correctIndex: 2,
          explanation: '1 km = 1000 m, also 1 km² = (1000)² m² = 1.000.000 m² = 10⁶ m². Bei Flächen quadriert sich der Umrechnungsfaktor!'
        }
      ]
    }
  ]
};
