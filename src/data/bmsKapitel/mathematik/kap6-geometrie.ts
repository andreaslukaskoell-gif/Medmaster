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
      content: `**Dreiecke**:
Winkelsumme: 180° (immer!)

Besondere Dreiecke:
• Gleichseitig: alle Seiten und Winkel gleich (α = β = γ = 60°)
• Gleichschenklig: zwei gleiche Seiten, zwei gleiche Basiswinkel
• Rechtwinklig: ein Winkel = 90°

**Satz des Pythagoras** (nur im rechtwinkligen Dreieck): a² + b² = c²
(c = Hypotenuse, a und b = Katheten)

Häufige pythagoreische Tripel: (3,4,5), (5,12,13), (8,15,17) und Vielfache

**Dreiecksfläche**: A = (1/2) · g · h

**Vierecke**:
Winkelsumme: 360° (immer!)

**Quadrat**: vier gleiche Seiten, vier rechte Winkel
U = 4a, A = a², Diagonale d = a√2

**Rechteck**: gegenüberliegende Seiten gleich, vier rechte Winkel
U = 2(a + b), A = a·b, Diagonale d = √(a² + b²)

**Parallelogramm**: gegenüberliegende Seiten parallel und gleich
A = g·h (h = Höhe auf Grundseite g)

**Trapez**: ein Paar paralleler Seiten
A = (a + c)/2 · h (Mittelwert der parallelen Seiten mal Höhe)

**Raute**: vier gleiche Seiten
A = (d₁ · d₂)/2 (Produkt der Diagonalen geteilt durch 2)

Hierarchie: Quadrat ⊂ Raute ⊂ Parallelogramm ⊂ Trapez

**Kreis** (alle Punkte mit gleichem Abstand r vom Mittelpunkt):
Umfang: U = 2πr = πd (d = 2r)
Fläche: A = πr²

**Kreissektor** (Kreisausschnitt mit Zentriwinkel α):
Bogen: b = 2πr · α/360°
Fläche: A = πr² · α/360°

**Kreisgleichung**: (x - m₁)² + (y - m₂)² = r² mit Mittelpunkt M(m₁|m₂)

Zusammengesetzte Figuren: Teilflächen addieren oder subtrahieren.`,
      merksätze: [
        'Pythagoras: a² + b² = c² (nur im rechtwinkligen Dreieck!). Dreiecksfläche: A = (1/2)·g·h. Winkelsumme: Dreieck 180°, Viereck 360°.',
        'Kreis: U = 2πr, A = πr². Kreißektor: Bogen b = 2πr·α/360°, Fläche = πr²·α/360°. Kreisgleichung: (x-m₁)² + (y-m₂)² = r².'
      ],
      altfrage: {
        question: 'Ein rechtwinkliges Dreieck hat die Katheten a = 6 cm und b = 8 cm. Berechnen Sie die Hypotenuse und die Fläche.',
        answer: 'c = √(6² + 8²) = √(36 + 64) = √100 = 10 cm. Fläche: A = (1/2) · 6 · 8 = 24 cm².'
      },
      klinischerBezug: 'Die **Kreisfläche** A = πr² wird bei der Berechnung von Gefäßquerschnitten verwendet. Nach dem **Hagen-Poiseuille-Gesetz** ist der Strömungswiderstand proportional zu 1/r⁴ – schon eine geringe Verengung (z.B. Arteriosklerose) erhöht den Widerstand dramatisch. Eine Halbierung des Radius erhöht den Widerstand um den Faktor 16.',
      selfTest: [
        {
          question: 'Ein Parallelogramm hat die Grundseite 12 cm und die Höhe 7 cm. Wie groß ist die Fläche?',
          options: [
            '42 cm²',
            '84 cm²',
            '19 cm²',
            '38 cm²',
            '168 cm²'
          ],
          correctIndex: 1,
          explanation: 'A = g · h = 12 · 7 = 84 cm².'
        },
        {
          question: 'Wie lang ist der Bogen eines Kreißektors mit r = 10 cm und α = 72°?',
          options: [
            '4π cm ≈ 12,57 cm',
            '2π cm ≈ 6,28 cm',
            '20π cm ≈ 62,83 cm',
            '8π cm ≈ 25,13 cm',
            '10π cm ≈ 31,42 cm'
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
            '10/√2 ≈ 7,07 cm',
            '10/2 = 5 cm'
          ],
          correctIndex: 1,
          explanation: 'd = a√2, also a = d/√2 = 10/√2 = 10√2/2 = 5√2 ≈ 7,07 cm. (Antworten B und D sind gleich; B ist die vereinfachte Form.)'
        }
      ]
    },
    {
      id: 'math-kap6-2',
      title: 'Körper',
      content: `**Quader** (Kasten mit Kanten a, b, c):
V = a·b·c
O = 2(ab + ac + bc)

**Würfel** (Spezialfall: a = b = c):
V = a³
O = 6a²
Raumdiagonale: d = a√3

**Zylinder** (Radius r, Höhe h):
V = πr²h
O = 2πr² + 2πrh = 2πr(r + h)
Mantelfläche allein: M = 2πrh

**Kugel** (Radius r):
V = (4/3)πr³
O = 4πr²

**Kegel** (Grundkreisradius r, Höhe h):
Mantellinie: s = √(r² + h²)
V = (1/3)πr²h
O = πr² + πrs = πr(r + s)

**Pyramide** (quadratische Grundfläche a²):
V = (1/3)a²h

**Spitzkörper-Regel** (gilt für Kegel und Pyramide):
V = (1/3) · Grundfläche · Höhe

Das Volumen eines Spitzkörpers ist genau ein Drittel des zugehörigen Prismas.

**Zusammengesetzte Körper**: Volumen durch Addition oder Subtraktion berechnen.

Beispiel Eisbecher (Halbkugel oben, Kegel unten mit r = 3 cm, hKegel = 8 cm):
V = (2/3)πr³ + (1/3)πr²h = (2/3)π·27 + (1/3)π·9·8 = 18π + 24π = 42π ≈ 131,9 cm³

**Hohlzylinder** (Außenradius R, Innenradius r):
V = πh(R² - r²)

**Einheiten**:
1 m³ = 1000 dm³ = 1000 Liter
1 dm³ = 1 Liter
1 cm³ = 1 ml`,
      merksätze: [
        'Spitzkörper-Regel: V = (1/3) · Grundfläche · Höhe (gilt für Kegel und Pyramide). Kugel: V = (4/3)πr³, O = 4πr². Zylinder: V = πr²h.',
        'Einheiten: 1 dm³ = 1 Liter, 1 cm³ = 1 ml, 1 m³ = 1000 Liter. Bei Oberflächen immer prüfen: Mantelfläche allein oder Gesamtoberfläche gefragt?'
      ],
      altfrage: {
        question: 'Eine Kugel hat den Radius 6 cm. Berechnen Sie Volumen und Oberfläche.',
        answer: 'V = (4/3)π · 6³ = (4/3)π · 216 = 288π ≈ 904,8 cm³. O = 4π · 6² = 144π ≈ 452,4 cm².'
      },
      klinischerBezug: 'In der **Ultraschalldiagnostik** wird das Schilddrüsenvolumen nach der **Ellipsoid-Formel** geschätzt: V = π/6 · Länge · Breite · Tiefe. Bei **Tumorvolumina** nutzt man die gleiche Näherung. Die Doppler-Sonographie berechnet Blutflussvolumen aus dem Gefäßquerschnitt (Kreisfläche A = πr²) mal Flussgeschwindigkeit.',
      selfTest: [
        {
          question: 'Wie groß ist das Volumen eines Kegels mit r = 5 cm und h = 12 cm?',
          options: [
            '300π cm³',
            '100π cm³',
            '60π cm³',
            '25π cm³',
            '150π cm³'
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
            'h = 0,5 cm',
            'h = 15,9 cm'
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
            '3000 Liter',
            '0,3 Liter'
          ],
          correctIndex: 1,
          explanation: 'V = 20 · 30 · 50 = 30.000 cm³ = 30.000 ml = 30 Liter (da 1000 cm³ = 1 Liter).'
        }
      ]
    },
    {
      id: 'math-kap6-3',
      title: 'Vektoren Grundlagen',
      diagram: 'vector-addition',
      content: `Ein **Vektor** a⃗ (beschreibt eine gerichtete Größe mit Betrag und Richtung).

2D: a⃗ = (a₁, a₂)
3D: a⃗ = (a₁, a₂, a₃)

**Ortsvektor** von Punkt P(x|y|z): OP⃗ = (x, y, z)

**Verbindungsvektor** von A nach B: AB⃗ = OB⃗ - OA⃗ = (b₁ - a₁, b₂ - a₂, b₃ - a₃)

**Nullvektor**: 0⃗ = (0, 0, 0), hat Betrag 0, keine definierte Richtung

**Gegenvektor**: -a⃗ = (-a₁, -a₂, -a₃)

**Vektoraddition** (komponentenweise):
a⃗ + b⃗ = (a₁ + b₁, a₂ + b₂, a₃ + b₃)

Geometrisch: Parallelogrammregel oder Spitze-an-Schwanz-Methode

**Subtraktion**: a⃗ - b⃗ = a⃗ + (-b⃗)

**Skalarmultiplikation** (Vektor mit Zahl multiplizieren):
r · a⃗ = (r·a₁, r·a₂, r·a₃)

r > 0: gleiche Richtung, Streckungsfaktor |r|
r < 0: umgekehrte Richtung

**Parallelität** (Kollinearität): a⃗ = r · b⃗ für ein r ∈ ℝ

Beispiel: a⃗ = (2, 4, -6) und b⃗ = (1, 2, -3) sind parallel mit r = 2

**Betrag** (Länge): |a⃗| = √(a₁² + a₂² + a₃²)

Beispiel: |(3, 4)| = √(9 + 16) = 5

**Einheitsvektor** in Richtung von a⃗: e⃗ = a⃗/|a⃗| (hat Betrag 1)

**Abstand** zwischen Punkten A und B: |AB⃗| = √((b₁-a₁)² + (b₂-a₂)² + (b₃-a₃)²)

**Mittelpunkt** M der Strecke AB: OM⃗ = (OA⃗ + OB⃗)/2 = ((a₁+b₁)/2, (a₂+b₂)/2, (a₃+b₃)/2)

**Linearkombination**: c⃗ = r·a⃗ + s·b⃗`,
      merksätze: [
        'Vektoroperationen sind komponentenweise: Addition (a₁+b₁, ...), Skalarmultiplikation (r·a₁, ...). Betrag: |a⃗| = √(a₁² + a₂² + a₃²). Einheitsvektor: e⃗ = a⃗/|a⃗|.',
        'Verbindungsvektor: AB⃗ = OB⃗ - OA⃗ (Spitze minus Anfang). Mittelpunkt: M = (A + B)/2. Parallelität: a⃗ = r · b⃗.'
      ],
      altfrage: {
        question: 'Berechnen Sie den Abstand der Punkte A(1|3|5) und B(4|7|5).',
        answer: 'AB⃗ = (3, 4, 0). |AB⃗| = √(9 + 16 + 0) = √25 = 5.'
      },
      klinischerBezug: 'In der **Biomechanik** werden Kräfte als Vektoren dargestellt. Die resultierende Kraft auf ein Gelenk ergibt sich durch **Vektoraddition** aller angreifenden Kräfte (Muskelkraft, Gewichtskraft, Reaktionskraft). Der Betrag der resultierenden Kraft bestimmt die mechanische Belastung. Bei der Ganganalyse werden Bodenreaktionskräfte vektoriell zerlegt.',
      selfTest: [
        {
          question: 'Was ergibt 3·(2, -1, 4) + (1, 5, -2)?',
          options: [
            '(7, 2, 10)',
            '(7, 2, 14)',
            '(9, 6, 6)',
            '(7, -2, 14)',
            '(5, 4, 10)'
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
            '5',
            '√7'
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
            'M(4|12)',
            'M(2|4)'
          ],
          correctIndex: 0,
          explanation: 'M = ((2+6)/2, (8+4)/2) = (4, 6).'
        }
      ]
    },
    {
      id: 'math-kap6-4',
      title: 'Skalarprodukt & Winkel',
      content: `**Skalarprodukt** (inneres Produkt, Punktprodukt): a⃗ · b⃗ = a₁b₁ + a₂b₂ + a₃b₃

Das Ergebnis ist eine Zahl (Skalar), kein Vektor.

Geometrisch: a⃗ · b⃗ = |a⃗| · |b⃗| · cos(φ)

**Winkelformel**: cos(φ) = (a⃗ · b⃗)/(|a⃗| · |b⃗|) = (a₁b₁ + a₂b₂ + a₃b₃)/(√(a₁² + a₂² + a₃²) · √(b₁² + b₂² + b₃²))

Der Winkel φ liegt zwischen 0° und 180°.

Beispiel: a⃗ = (1, 2, 3), b⃗ = (4, -1, 2)
Skalarprodukt: 4 - 2 + 6 = 8
|a⃗| = √14, |b⃗| = √21
cos(φ) = 8/√294 ≈ 0,467 → φ ≈ 62,2°

**Orthogonalität** (Rechtwinkligkeit): a⃗ · b⃗ = 0 ⟺ a⃗ ⊥ b⃗

Schneller Test: Skalarprodukt null → Vektoren stehen senkrecht.

Beispiel: a⃗ = (3, 1), b⃗ = (-1, 3)
a⃗ · b⃗ = -3 + 3 = 0 → Vektoren sind orthogonal

**Eigenschaften**:
Kommutativität: a⃗ · b⃗ = b⃗ · a⃗
Distributivität: a⃗ · (b⃗ + c⃗) = a⃗ · b⃗ + a⃗ · c⃗
Verträglichkeit: (r·a⃗) · b⃗ = r · (a⃗ · b⃗)

Spezialfall: a⃗ · a⃗ = |a⃗|² (Skalarprodukt mit sich selbst = Betrag²)

**Kreuzprodukt** (Vektorprodukt, seltener im MedAT):
a⃗ × b⃗ = (a₂b₃ - a₃b₂, a₃b₁ - a₁b₃, a₁b₂ - a₂b₁)

Ergibt einen Vektor senkrecht auf a⃗ und b⃗.
Betrag: |a⃗ × b⃗| = |a⃗| · |b⃗| · sin(φ) = Fläche des Parallelogramms`,
      merksätze: [
        'Skalarprodukt: a⃗ · b⃗ = a₁b₁ + a₂b₂ + a₃b₃ = |a⃗|·|b⃗|·cos(φ). Orthogonalität: a⃗ ⊥ b⃗ ⟺ a⃗ · b⃗ = 0.',
        'Winkelformel: cos(φ) = (a⃗ · b⃗)/(|a⃗|·|b⃗|). Spezialfall: a⃗ · a⃗ = |a⃗|². Das Skalarprodukt ist kommutativ und distributiv.'
      ],
      altfrage: {
        question: 'Berechnen Sie den Winkel zwischen a⃗ = (1, 1, 0) und b⃗ = (0, 1, 1).',
        answer: 'a⃗ · b⃗ = 0 + 1 + 0 = 1. |a⃗| = √2, |b⃗| = √2. cos(φ) = 1/(√2·√2) = 1/2. φ = 60°.'
      },
      klinischerBezug: 'In der **Strahlentherapie** ist der Einfallswinkel der Strahlung relativ zur Körperoberfläche entscheidend für die Dosisverteilung. Der Winkel zwischen **Strahlrichtungsvektor** und **Flächennormalvektor** wird mit dem Skalarprodukt berechnet. In der MRT nutzt man die Winkelabhängigkeit von Magnetisierungsvektoren zur Bilderzeugung.',
      selfTest: [
        {
          question: 'Sind die Vektoren a⃗ = (2, -3, 1) und b⃗ = (1, 2, 4) orthogonal?',
          options: [
            'Ja, denn a⃗ · b⃗ = 0',
            'Nein, denn a⃗ · b⃗ = 2',
            'Ja, denn a⃗ · b⃗ = -4',
            'Nein, denn a⃗ · b⃗ = 4',
            'Ja, denn |a⃗| = |b⃗|'
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
            '90°',
            '135°'
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
            '-7',
            '√25 = 5'
          ],
          correctIndex: 2,
          explanation: 'a⃗ · a⃗ = 9 + 16 + 0 = 25 = |a⃗|² = (√(9+16))² = 5² = 25.'
        }
      ]
    },
    {
      id: 'math-kap6-5',
      title: 'Einheiten & Dimensionsanalyse',
      content: `**SI-Basiseinheiten** (Internationales Einheitensystem):
• Meter (m): Länge
• Kilogramm (kg): Masse
• Sekunde (s): Zeit
• Ampere (A): Stromstärke
• Kelvin (K): Temperatur
• Mol (mol): Stoffmenge
• Candela (cd): Lichtstärke

**Abgeleitete Einheiten**:
Newton (N = kg·m/s²): Kraft
Pascal (Pa = N/m² = kg/(m·s²)): Druck
Joule (J = N·m = kg·m²/s²): Energie
Watt (W = J/s): Leistung
Volt (V = W/A): Spannung

**SI-Vorsilben**:
Tera (T, 10¹²), Giga (G, 10⁹), Mega (M, 10⁶), Kilo (k, 10³)
Hekto (h, 10²), Deka (da, 10¹)
Dezi (d, 10⁻¹), Zenti (c, 10⁻²), Milli (m, 10⁻³)
Mikro (μ, 10⁻⁶), Nano (n, 10⁻⁹), Piko (p, 10⁻¹²)

Beispiel: 3,5 km = 3,5 · 10³ m = 3500 m
250 μg = 250 · 10⁻⁶ g = 0,00025 g = 0,25 mg

**Wichtig bei Flächen und Volumen**:
Flächen: Faktor quadriert → 1 m² = (100)² cm² = 10.000 cm²
Volumen: Faktor kubiert → 1 m³ = (100)³ cm³ = 1.000.000 cm³

**Dimensionsanalyse**: Beide Seiten einer Gleichung müssen die gleichen Einheiten haben.

Beispiel: Geschwindigkeit = Strecke/Zeit hat Dimension [m/s]

In Dosisberechnungen: Infusion in mg/min bei Konzentration mg/ml
→ Division ergibt Volumenstrom in ml/min
Die Einheiten kürzen sich wie Brüche.

**Wichtige Umrechnungen**:
Temperatur: T(K) = T(°C) + 273,15
Druck: 1 atm = 101.325 Pa ≈ 1013 hPa = 760 mmHg
Energie: 1 cal ≈ 4,184 J
Volumen: 1 L = 1 dm³ = 10⁻³ m³`,
      merksätze: [
        'SI-Basiseinheiten: m, kg, s, A, K, mol, cd. Wichtige Vorsilben: Kilo (10³), Milli (10⁻³), Mikro (10⁻⁶), Nano (10⁻⁹). Bei Flächen quadriert, bei Volumen kubiert sich der Umrechnungsfaktor!',
        'Dimensionsanalyse: Beide Seiten einer Gleichung müssen die gleichen Einheiten haben. Einheiten kürzen sich wie Brüche – diese Methode hilft, Fehler in Dosisberechnungen zu vermeiden.'
      ],
      altfrage: {
        question: 'Rechnen Sie um: 0,05 m² in cm².',
        answer: '1 m = 100 cm, also 1 m² = (100)² cm² = 10.000 cm². Daher: 0,05 m² = 0,05 · 10.000 cm² = 500 cm².'
      },
      klinischerBezug: 'Medikamentendosierungen werden häufig in **mg/kg Körpergewicht** angegeben. Bei einem Kind mit 20 kg und Dosis 15 mg/kg: 15 mg/kg · 20 kg = 300 mg. Bei Saft-Konzentration 50 mg/ml: 300 mg / (50 mg/ml) = 6 ml. Die **Dimensionsanalyse** stellt sicher, dass am Ende die richtige Einheit steht (ml). Bei Infusionsraten: 0,5 mg/min ÷ 2 mg/ml = 0,25 ml/min · 60 = 15 ml/h.',
      selfTest: [
        {
          question: 'Wie viele cm³ sind 2,5 Liter?',
          options: [
            '25 cm³',
            '250 cm³',
            '2500 cm³',
            '25000 cm³',
            '500 cm³'
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
            '60 ml/h',
            '30 ml/h'
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
            '1 km² = 10.000 m²',
            '1 km² = 100 m²'
          ],
          correctIndex: 2,
          explanation: '1 km = 1000 m, also 1 km² = (1000)² m² = 1.000.000 m² = 10⁶ m². Bei Flächen quadriert sich der Umrechnungsfaktor!'
        }
      ]
    }
  ]
};
