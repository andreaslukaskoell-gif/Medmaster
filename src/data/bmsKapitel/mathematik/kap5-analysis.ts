import type { Kapitel } from '../types';

export const mathKap5: Kapitel = {
  id: 'math-kap5',
  title: 'Analysis',
  subject: 'mathematik',
  icon: '∫',
  estimatedTime: '35 Minuten',
  unterkapitel: [
    {
      id: 'math-kap5-1',
      title: 'Folgen & Reihen',
      content: `Eine **Folge** (aₙ) ist eine geordnete Abfolge von Zahlen.

**Arithmetische Folge**: Konstante Differenz d zwischen aufeinanderfolgenden Gliedern.
aₙ = a₁ + (n-1)·d

Beispiel: 3, 7, 11, 15, ... hat a₁ = 3, d = 4 → aₙ = 4n - 1

**Summe** (Gaußsche Formel): Sₙ = n/2 · (a₁ + aₙ) = n/2 · (2a₁ + (n-1)d)
Beispiel: 1 + 2 + ... + 100 = 100/2 · (1 + 100) = 5050

**Geometrische Folge**: Konstanter Quotient q zwischen aufeinanderfolgenden Gliedern.
aₙ = a₁ · q^(n-1)

Beispiel: 2, 6, 18, 54, ... hat a₁ = 2, q = 3 → aₙ = 2 · 3^(n-1)

**Summe**: Sₙ = a₁ · (qⁿ - 1)/(q - 1) für q ≠ 1

**Unendliche geometrische Reihe** konvergiert nur für |q| < 1:
S∞ = a₁/(1 - q)

Beispiel: 1 + 1/2 + 1/4 + 1/8 + ... = 1/(1 - 1/2) = 2

Für |q| ≥ 1 divergiert die Reihe.

**Unterscheidung**:
Arithmetisch: Differenz aₙ₊₁ - aₙ = d konstant
Geometrisch: Quotient aₙ₊₁/aₙ = q konstant

Textaufgaben: "Jeden Monat 200 € sparen" → arithmetisch mit d = 200. "Bakterium teilt sich alle 20 Minuten" → geometrisch mit q = 2.`,
      merksätze: [
        'Arithmetische Folge: aₙ = a₁ + (n-1)·d, Summe: Sₙ = n/2·(a₁ + aₙ). Geometrische Folge: aₙ = a₁·q^(n-1), Summe: Sₙ = a₁·(qⁿ - 1)/(q - 1).',
        'Unendliche geometrische Reihe konvergiert nur für |q| < 1: S∞ = a₁/(1 - q). Für |q| ≥ 1 divergiert sie.'
      ],
      altfrage: {
        question: 'Berechnen Sie die Summe der ersten 20 Glieder der arithmetischen Folge 5, 8, 11, 14, ...',
        answer: 'a₁ = 5, d = 3. a₂₀ = 5 + 19 · 3 = 62. S₂₀ = 20/2 · (5 + 62) = 10 · 67 = 670.'
      },
      klinischerBezug: 'Bakterienwachstum in der exponentiellen Phase folgt einer geometrischen Folge: Aus einem Bakterium entstehen nach n Teilungen 2ⁿ Bakterien. **Verdünnungsreihen** in der Mikrobiologie (1:10, 1:100, 1:1000) sind geometrische Folgen mit q = 0,1. Auch die **Antibiotika-Konzentration** nach wiederholter Gabe konvergiert gegen einen Steady-State (unendliche geometrische Reihe).',
      selfTest: [
        {
          question: 'Welches ist das 8. Glied der geometrischen Folge 3, 6, 12, 24, ...?',
          options: [
            '192',
            '384',
            '768',
            '96',
            '256'
          ],
          correctIndex: 1,
          explanation: 'a₁ = 3, q = 2. a₈ = 3 · 2⁷ = 3 · 128 = 384.'
        },
        {
          question: 'Was ist die Summe 1 + 1/3 + 1/9 + 1/27 + ...?',
          options: [
            '3/2',
            '2',
            '3',
            'Die Reihe divergiert',
            '1'
          ],
          correctIndex: 0,
          explanation: 'Geometrische Reihe mit a₁ = 1 und q = 1/3. Da |q| < 1: S∞ = 1/(1 - 1/3) = 1/(2/3) = 3/2.'
        },
        {
          question: 'Die Folge 2, 5, 10, 17, 26, ... – ist sie arithmetisch oder geometrisch?',
          options: [
            'Arithmetisch mit d = 3',
            'Geometrisch mit q = 2,5',
            'Weder noch (Differenzen: 3, 5, 7, 9, ...)',
            'Arithmetisch mit d = 8',
            'Geometrisch mit q = 2'
          ],
          correctIndex: 2,
          explanation: 'Die Differenzen sind 3, 5, 7, 9, ... – nicht konstant, also nicht arithmetisch. Die Quotienten 5/2, 10/5, 17/10 sind nicht gleich, also nicht geometrisch. Es handelt sich um aₙ = n² + 1.'
        }
      ]
    },
    {
      id: 'math-kap5-2',
      title: 'Grenzwerte & Stetigkeit',
      content: `**Grenzwert einer Folge**: lim(n→∞) aₙ = L bedeutet: Die Folgenglieder nähern sich beliebig nahe an L an.

**Konvergent**: Folge hat einen Grenzwert.
**Divergent**: Folge hat keinen Grenzwert.

Beispiele:
• aₙ = 1/n → 0 (konvergent)
• aₙ = (-1)ⁿ springt zwischen -1 und 1 (divergent)
• aₙ = n² → ∞ (bestimmt divergent)

**Grenzwertregeln** (wenn lim aₙ = A und lim bₙ = B):
lim(aₙ ± bₙ) = A ± B
lim(aₙ · bₙ) = A · B
lim(aₙ/bₙ) = A/B (falls B ≠ 0)

**Rationale Funktionen** – Regel des höchsten Grades:
lim(n→∞) (3n² + 5n)/(2n² - 1) = 3/2 (Zähler und Nenner durch n² kürzen)

Einfach gesagt:
• Gleicher Grad: Quotient der führenden Koeffizienten
• Zählergrad < Nennergrad: Grenzwert = 0
• Zählergrad > Nennergrad: divergent (→ ±∞)

**Stetigkeit**: Eine Funktion f ist stetig an x₀, wenn lim(x→x₀) f(x) = f(x₀).
Anschaulich: Der Graph hat keinen Sprung oder keine Lücke.

Stetig überall: Polynome, eˣ, sin(x), cos(x)
Stetig außer Nullstellen des Nenners: Rationale Funktionen

**Zwischenwertsatz**: Ist f stetig auf [a,b] mit f(a) < 0 und f(b) > 0, dann gibt es mindestens ein c ∈ (a,b) mit f(c) = 0. Nützlich zum Nachweis von Nullstellen.`,
      merksätze: [
        'Grenzwert rationaler Ausdrücke: Zähler- und Nennergrad vergleichen. Gleicher Grad → Quotient der führenden Koeffizienten. Zählergrad kleiner → 0. Zählergrad größer → divergent.',
        'Eine Folge konvergiert, wenn sie sich einem festen Wert nähert. Stetigkeit an x₀ bedeutet: lim(x→x₀) f(x) = f(x₀) – der Funktionswert stimmt mit dem Grenzwert überein.'
      ],
      altfrage: {
        question: 'Berechnen Sie: lim(n→∞) (5n³ - 2n)/(3n³ + n²)',
        answer: 'Kürzen durch n³: lim (5 - 2/n²)/(3 + 1/n) = 5/3. Die führenden Koeffizienten sind 5 und 3.'
      },
      klinischerBezug: 'Die **Pharmakokinetik** beschreibt Wirkstoffkonzentrationen mit Exponentialfunktionen: c(t) = c₀ · e^(-kt). Die **Halbwertszeit** t₁/₂ = ln(2)/k bestimmt das Dosierungsintervall. Bei wiederholter Gabe nähert sich die Plasmakonzentration einem **Steady-State** an – mathematisch der Grenzwert einer geometrischen Reihe.',
      selfTest: [
        {
          question: 'Was ist lim(n→∞) (2n + 3)/(5n - 1)?',
          options: [
            '2/5',
            '3',
            '0',
            '∞',
            '-1'
          ],
          correctIndex: 0,
          explanation: 'Zähler und Nenner haben Grad 1. Quotient der führenden Koeffizienten: 2/5.'
        },
        {
          question: 'Welche der folgenden Folgen konvergiert?',
          options: [
            'aₙ = n²',
            'aₙ = (-1)ⁿ',
            'aₙ = (3n + 1)/(n + 2)',
            'aₙ = sin(nπ/2)',
            'aₙ = 1/n + (-1)ⁿ'
          ],
          correctIndex: 2,
          explanation: 'aₙ = (3n + 1)/(n + 2) → 3 für n → ∞. Die anderen Folgen divergieren: n² → ∞, (-1)ⁿ springt, sin(nπ/2) nimmt abwechselnd die Werte 1, 0, -1, 0 an.'
        },
        {
          question: 'Was ist lim(n→∞) (n + 5)/(n² + 1)?',
          options: [
            '1',
            '5',
            '0',
            '∞',
            '5'
          ],
          correctIndex: 2,
          explanation: 'Zählergrad (1) ist kleiner als Nennergrad (2), daher ist der Grenzwert 0.'
        }
      ]
    },
    {
      id: 'math-kap5-3',
      title: 'Differentialrechnung',
      content: `Die **Ableitung** f'(x) (gibt die Steigung der Tangente an den Graphen an jedem Punkt an).

Definition: f'(x) = lim(h→0) (f(x+h) - f(x))/h

Einfach gesagt: Die Ableitung beschreibt, wie schnell sich f an einer Stelle ändert.
f'(x₀) > 0: f steigt
f'(x₀) < 0: f fällt
f'(x₀) = 0: möglicher Extremwert oder Wendepunkt

**Grundfunktionen**:
(xⁿ)' = n·x^(n-1)
(eˣ)' = eˣ
(ln x)' = 1/x
(sin x)' = cos x
(cos x)' = -sin x
(c)' = 0

**Ableitungsregeln**:
Faktorregel: (c·f)' = c·f'
Summenregel: (f + g)' = f' + g'
Produktregel: (f·g)' = f'·g + f·g'
Quotientenregel: (f/g)' = (f'·g - f·g')/g²
**Kettenregel** (äußere mal innere Ableitung): [f(g(x))]' = f'(g(x)) · g'(x)

Beispiel Kettenregel: f(x) = (3x² + 1)⁵
f'(x) = 5(3x² + 1)⁴ · 6x = 30x(3x² + 1)⁴

Beispiel Quotientenregel: f(x) = x²/(x+1)
f'(x) = (2x(x+1) - x²·1)/(x+1)² = (x² + 2x)/(x+1)²

**Extremwerte**:
Notwendige Bedingung: f'(x₀) = 0
Klassifikation mit zweiter Ableitung:
• f''(x₀) > 0 → Minimum (Linkskrümmung)
• f''(x₀) < 0 → Maximum (Rechtskrümmung)
• f''(x₀) = 0 → unentschieden

**Wendepunkte**: f''(x) = 0 und f'''(x) ≠ 0 (Krümmungswechsel)

**Tangentengleichung** an Punkt x₀: t(x) = f'(x₀)·(x - x₀) + f(x₀)`,
      merksätze: [
        'Wichtigste Ableitungen: (xⁿ)\' = n·x^(n-1), (eˣ)\' = eˣ, (ln x)\' = 1/x, (sin x)\' = cos x, (cos x)\' = -sin x.',
        'Extremwerte: f\'(x₀) = 0 (notwendig). f\'\'(x₀) > 0 → Minimum, f\'\'(x₀) < 0 → Maximum. Kettenregel: äußere Ableitung · innere Ableitung.'
      ],
      altfrage: {
        question: 'Bestimmen Sie die Extremwerte von f(x) = x³ - 3x + 2.',
        answer: 'f\'(x) = 3x² - 3 = 0 → x² = 1 → x₁ = 1, x₂ = -1. f\'\'(x) = 6x. f\'\'(1) = 6 > 0 → Minimum bei (1|0). f\'\'(-1) = -6 < 0 → Maximum bei (-1|4).'
      },
      klinischerBezug: 'Die **Pharmakokinetik** nutzt die Ableitung dc/dt zur Beschreibung der Änderungsrate der Plasmakonzentration. Die maximale Konzentration **cₘₐₓ** entspricht einem Extremwert, wo dc/dt = 0 gilt. Die **Clearance** ist die Geschwindigkeit, mit der ein Medikament eliminiert wird – mathematisch die negative Steigung der Konzentrationskurve.',
      selfTest: [
        {
          question: 'Was ist die Ableitung von f(x) = 3x⁴ - 2x² + 7x - 5?',
          options: [
            'f\'(x) = 12x³ - 4x + 7',
            'f\'(x) = 12x³ - 2x + 7',
            'f\'(x) = 3x³ - 2x + 7',
            'f\'(x) = 12x⁴ - 4x² + 7',
            'f\'(x) = 12x³ - 4x + 7 - 5'
          ],
          correctIndex: 0,
          explanation: 'Potenzregel gliedweise: (3x⁴)\' = 12x³, (-2x²)\' = -4x, (7x)\' = 7, (-5)\' = 0. Also f\'(x) = 12x³ - 4x + 7.'
        },
        {
          question: 'Berechnen Sie die Ableitung von f(x) = e^(2x+1) mit der Kettenregel.',
          options: [
            'f\'(x) = e^(2x+1)',
            'f\'(x) = 2e^(2x+1)',
            'f\'(x) = (2x+1)·e^(2x)',
            'f\'(x) = 2xe^(2x+1)',
            'f\'(x) = e^(2x+1)/(2x+1)'
          ],
          correctIndex: 1,
          explanation: 'Kettenregel: äußere Ableitung e^(2x+1) mal innere Ableitung (2x+1)\' = 2. Also f\'(x) = 2·e^(2x+1).'
        },
        {
          question: 'Welche Aussage über f(x) = x² - 4x + 3 ist korrekt?',
          options: [
            'f hat ein Maximum bei x = 2',
            'f hat ein Minimum bei x = 2 mit f(2) = -1',
            'f hat ein Minimum bei x = 4',
            'f hat kein Extremum',
            'f hat ein Maximum bei x = 2 mit f(2) = 3'
          ],
          correctIndex: 1,
          explanation: 'f\'(x) = 2x - 4 = 0 → x = 2. f\'\'(x) = 2 > 0 → Minimum. f(2) = 4 - 8 + 3 = -1.'
        }
      ]
    },
    {
      id: 'math-kap5-4',
      title: 'Integralrechnung',
      content: `Die **Stammfunktion** F(x) (ist die Umkehrung der Ableitung: F'(x) = f(x)).

Schreibweise: ∫f(x)dx = F(x) + C (C = Integrationskonstante)

**Grundfunktionen**:
∫xⁿ dx = x^(n+1)/(n+1) + C (für n ≠ -1)
∫1/x dx = ln|x| + C
∫eˣ dx = eˣ + C
∫sin(x) dx = -cos(x) + C
∫cos(x) dx = sin(x) + C

Linearität: ∫(c·f + g)dx = c·∫f dx + ∫g dx

**Bestimmtes Integral** ∫ₐᵇ f(x)dx (berechnet die vorzeichenbehaftete Fläche zwischen Graph und x-Achse).

**Hauptsatz**: ∫ₐᵇ f(x)dx = F(b) - F(a) = [F(x)]ₐᵇ

So geht's: Stammfunktion F berechnen, an den Grenzen auswerten, Differenz bilden.

Beispiel: ∫₁³ (2x + 1)dx = [x² + x]₁³ = (9 + 3) - (1 + 1) = 12 - 2 = 10

Wichtig: Flächen unterhalb der x-Achse sind negativ. Für die tatsächliche Fläche Beträge bilden.

**Integrationsregeln**:

Substitutionsregel (Umkehr der Kettenregel): ∫f(g(x))·g'(x)dx = F(g(x)) + C

Beispiel: ∫2x·e^(x²)dx
Substitution u = x², du = 2x dx → ∫eᵘ du = eᵘ + C = e^(x²) + C

Partielle Integration (Umkehr der Produktregel): ∫u·v' dx = u·v - ∫u'·v dx

Beispiel: ∫x·eˣ dx = x·eˣ - ∫eˣ dx = x·eˣ - eˣ + C = eˣ(x - 1) + C

**Fläche zwischen zwei Kurven**: A = ∫ₐᵇ |f(x) - g(x)|dx`,
      merksätze: [
        'Wichtigste Stammfunktionen: ∫xⁿ dx = x^(n+1)/(n+1) + C (n ≠ -1), ∫1/x dx = ln|x| + C, ∫eˣ dx = eˣ + C.',
        'Hauptsatz: ∫ₐᵇ f(x)dx = F(b) - F(a). Flächen unterhalb der x-Achse sind negativ – für die geometrische Fläche Betrag bilden!'
      ],
      altfrage: {
        question: 'Berechnen Sie die Fläche unter f(x) = x² zwischen x = 0 und x = 3.',
        answer: '∫₀³ x² dx = [x³/3]₀³ = 27/3 - 0 = 9 Flächeneinheiten.'
      },
      klinischerBezug: 'Die **AUC** (Area Under the Curve, Fläche unter der Kurve) ist das bestimmte Integral der Plasmakonzentration über die Zeit: AUC = ∫₀^∞ c(t)dt. Die AUC ist ein Maß für die **Gesamtexposition** gegenüber einem Medikament und wird zur Beurteilung der Bioverfügbarkeit verwendet. Bei oraler vs. intravenöser Gabe vergleicht man die AUC-Werte.',
      selfTest: [
        {
          question: 'Was ist die Stammfunktion von f(x) = 4x³ - 6x + 2?',
          options: [
            'F(x) = 12x² - 6',
            'F(x) = x⁴ - 3x² + 2x + C',
            'F(x) = x⁴ - 6x² + 2x + C',
            'F(x) = 4x⁴ - 3x² + 2x + C',
            'F(x) = x⁴ - 3x² + 2x'
          ],
          correctIndex: 1,
          explanation: '∫4x³ dx = x⁴, ∫(-6x) dx = -3x², ∫2 dx = 2x. Also F(x) = x⁴ - 3x² + 2x + C.'
        },
        {
          question: 'Berechnen Sie: ∫₁⁴ (2√x) dx',
          options: [
            '28/3',
            '8',
            '14/3',
            '10',
            '16/3'
          ],
          correctIndex: 0,
          explanation: '2√x = 2x^(1/2). Stammfunktion: 2 · x^(3/2)/(3/2) = 4x^(3/2)/3. [4x^(3/2)/3]₁⁴ = 4·8/3 - 4·1/3 = 32/3 - 4/3 = 28/3.'
        },
        {
          question: 'Das bestimmte Integral ∫₀^π sin(x) dx ergibt:',
          options: [
            '0',
            '1',
            '2',
            '-2',
            'π'
          ],
          correctIndex: 2,
          explanation: '∫sin(x) dx = -cos(x). [-cos(x)]₀^π = -cos(π) - (-cos(0)) = -(-1) + 1 = 1 + 1 = 2.'
        }
      ]
    }
  ]
};
