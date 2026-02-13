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
      content: `Eine Folge ist eine geordnete Abfolge von Zahlen (aₙ), die durch eine Bildungsvorschrift oder rekursiv definiert ist. Arithmetische Folgen haben eine konstante Differenz d zwischen aufeinanderfolgenden Gliedern: aₙ = a₁ + (n - 1) · d. Beispiel: 3, 7, 11, 15, ... mit a₁ = 3 und d = 4. Das n-te Glied ist aₙ = 3 + (n - 1) · 4 = 4n - 1. Die Summe der ersten n Glieder einer arithmetischen Folge (arithmetische Reihe) berechnet sich mit der Gaußschen Summenformel: Sₙ = n/2 · (a₁ + aₙ) = n/2 · (2a₁ + (n - 1)d). Diese Formel geht auf den jungen Gauß zurück, der erkannte, dass die Summe 1 + 2 + ... + 100 = 100/2 · (1 + 100) = 5050 beträgt.

Geometrische Folgen haben einen konstanten Quotienten q zwischen aufeinanderfolgenden Gliedern: aₙ = a₁ · q^(n-1). Beispiel: 2, 6, 18, 54, ... mit a₁ = 2 und q = 3. Das n-te Glied ist aₙ = 2 · 3^(n-1). Die Summe der ersten n Glieder einer geometrischen Folge (geometrische Reihe) lautet: Sₙ = a₁ · (qⁿ - 1)/(q - 1) für q ≠ 1. Für |q| < 1 konvergiert die unendliche geometrische Reihe: S∞ = a₁/(1 - q). Beispiel: 1 + 1/2 + 1/4 + 1/8 + ... = 1/(1 - 1/2) = 2. Für |q| ≥ 1 divergiert die Reihe (außer für den trivialen Fall q = 1 mit allen Gliedern gleich). Diese Konvergenzaussage ist für das Verständnis von Grenzwerten fundamental.

Im MedAT werden typische Aufgaben zu Folgen gestellt: das Bestimmen des n-ten Glieds, das Berechnen von Teilsummen und das Erkennen, ob eine Folge arithmetisch oder geometrisch ist. Entscheidend ist die Unterscheidung: Bei einer arithmetischen Folge ist die Differenz aₙ₊₁ - aₙ = d konstant, bei einer geometrischen Folge ist der Quotient aₙ₊₁/aₙ = q konstant. Eine Folge wie 1, 4, 9, 16, 25, ... ist weder arithmetisch noch geometrisch (es sind die Quadratzahlen). Textaufgaben können Folgen verbergen: „Ein Sparer legt jeden Monat 200 € auf ein Konto ohne Zinsen“ beschreibt eine arithmetische Folge der Kontostände mit d = 200. „Ein Bakterium teilt sich alle 20 Minuten“ beschreibt eine geometrische Folge mit q = 2. Die Fähigkeit, reale Situationen in Folgenmodelle zu übersetzen, wird im MedAT geprüft.`,
      merksaetze: [
        'Arithmetische Folge: aₙ = a₁ + (n-1)·d, Summe: Sₙ = n/2·(a₁ + aₙ). Geometrische Folge: aₙ = a₁·q^(n-1), Summe: Sₙ = a₁·(qⁿ - 1)/(q - 1).',
        'Unendliche geometrische Reihe konvergiert nur für |q| < 1: S∞ = a₁/(1 - q). Für |q| ≥ 1 divergiert sie.'
      ],
      altfrage: {
        question: 'Berechnen Sie die Summe der ersten 20 Glieder der arithmetischen Folge 5, 8, 11, 14, ...',
        answer: 'a₁ = 5, d = 3. a₂₀ = 5 + 19 · 3 = 62. S₂₀ = 20/2 · (5 + 62) = 10 · 67 = 670.'
      },
      klinischerBezug: 'Geometrische Folgen modellieren das Bakterienwachstum in der exponentiellen Phase: Aus einem Bakterium entstehen nach n Teilungszyklen 2ⁿ Bakterien. Auch Verdünnungsreihen in der Mikrobiologie (1:10, 1:100, 1:1000, ...) sind geometrische Folgen mit q = 1/10.',
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
      content: `Der Grenzwert einer Folge (aₙ) beschreibt, welchem Wert sich die Folgenglieder für n → ∞ annähern. Man schreibt lim(n→∞) aₙ = L, wenn sich aₙ beliebig nahe an L bringen lässt, indem n groß genug gewählt wird. Eine Folge, die einen Grenzwert besitzt, heißt konvergent; andernfalls heißt sie divergent. Beispiel: aₙ = 1/n konvergiert gegen 0, denn für großes n wird 1/n beliebig klein. Die Folge aₙ = (-1)ⁿ divergiert, da sie zwischen -1 und 1 springt (sie ist beschränkt, aber nicht konvergent). Die Folge aₙ = n² divergiert gegen unendlich (bestimmte Divergenz).

Grenzwertregeln ermöglichen das systematische Berechnen von Grenzwerten zusammengesetzter Folgen. Wenn lim aₙ = A und lim bₙ = B existieren, gilt: lim(aₙ ± bₙ) = A ± B, lim(aₙ · bₙ) = A · B, lim(aₙ/bₙ) = A/B (falls B ≠ 0), und lim(c · aₙ) = c · A. Für rationale Funktionen von n gilt die Regel des höchsten Grades: lim(n→∞) (3n² + 5n)/(2n² - 1) = 3/2, da man Zähler und Nenner durch n² kürzt und alle Terme mit 1/n gegen 0 gehen. Allgemein: Ist der Zählergrad gleich dem Nennergrad, ist der Grenzwert der Quotient der führenden Koeffizienten. Ist der Zählergrad kleiner, ist der Grenzwert 0. Ist der Zählergrad größer, divergiert die Folge.

Stetigkeit ist ein Grundkonzept der Analysis: Eine Funktion f ist stetig an der Stelle x₀, wenn lim(x→x₀) f(x) = f(x₀) gilt. Anschaulich bedeutet das: Der Graph hat keinen Sprung oder keine Lücke an dieser Stelle. Polynome, Exponentialfunktionen, Sinus und Kosinus sind überall stetig. Rationale Funktionen sind stetig überall dort, wo der Nenner nicht null ist. Wurzelfunktionen sind stetig auf ihrem Definitionsbereich. Der Zwischenwertsatz besagt: Ist f stetig auf [a, b] und gilt f(a) < 0 und f(b) > 0 (oder umgekehrt), dann gibt es mindestens ein c ∈ (a, b) mit f(c) = 0. Dieser Satz ist nützlich zum Nachweis von Nullstellen. Im MedAT werden einfache Grenzwertberechnungen und das Verständnis von Konvergenz geprüft, während die formale ε-δ-Definition der Stetigkeit normalerweise nicht verlangt wird.`,
      merksaetze: [
        'Grenzwert rationaler Ausdrücke: Zähler- und Nennergrad vergleichen. Gleicher Grad → Quotient der führenden Koeffizienten. Zählergrad kleiner → 0. Zählergrad größer → divergent.',
        'Eine Folge konvergiert, wenn sie sich einem festen Wert nähert. Stetigkeit an x₀ bedeutet: lim(x→x₀) f(x) = f(x₀) – der Funktionswert stimmt mit dem Grenzwert überein.'
      ],
      altfrage: {
        question: 'Berechnen Sie: lim(n→∞) (5n³ - 2n)/(3n³ + n²)',
        answer: 'Kürzen durch n³: lim (5 - 2/n²)/(3 + 1/n) = 5/3. Die führenden Koeffizienten sind 5 und 3.'
      },
      klinischerBezug: 'In der Pharmakokinetik beschreibt der Grenzwert die Steady-State-Konzentration eines Medikaments bei wiederholter Gabe. Nach vielen Halbwertszeiten nähert sich die Plasmakonzentration einem konstanten Wert an – mathematisch ist dies der Grenzwert einer geometrischen Reihe.',
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
      content: `Die Ableitung f'(x) einer Funktion f(x) beschreibt die momentane Änderungsrate, also die Steigung der Tangente an den Graphen im Punkt (x|f(x)). Sie ist definiert als Grenzwert des Differenzenquotienten: f'(x) = lim(h→0) (f(x+h) - f(x))/h. Anschaulich gibt die Ableitung an, wie schnell sich die Funktion an einer bestimmten Stelle ändert. Ist f'(x₀) > 0, steigt f an der Stelle x₀; ist f'(x₀) < 0, fällt f; ist f'(x₀) = 0, liegt ein möglicher Extremwert oder Wendepunkt vor. Die Ableitung der wichtigsten Grundfunktionen lautet: (xⁿ)' = n·x^(n-1) (Potenzregel), (eˣ)' = eˣ, (ln(x))' = 1/x, (sin(x))' = cos(x), (cos(x))' = -sin(x). Konstanten verschwinden: (c)' = 0.

Die Ableitungsregeln ermöglichen die Berechnung von Ableitungen zusammengesetzter Funktionen. Faktorregel: (c·f)' = c·f'. Summenregel: (f + g)' = f' + g'. Produktregel: (f·g)' = f'·g + f·g'. Quotientenregel: (f/g)' = (f'·g - f·g')/g². Kettenregel (für verkettete Funktionen f(g(x))): [f(g(x))]' = f'(g(x)) · g'(x) – äußere Ableitung mal innere Ableitung. Beispiel: f(x) = (3x² + 1)⁵. Kettenregel: f'(x) = 5(3x² + 1)⁴ · 6x = 30x(3x² + 1)⁴. Die Kettenregel ist die am häufigsten benötigte Regel und sollte sicher beherrscht werden. Beispiel für die Quotientenregel: f(x) = x²/(x + 1). f'(x) = (2x(x + 1) - x² · 1)/(x + 1)² = (x² + 2x)/(x + 1)².

Extremwerte und Kurvendiskussion sind zentrale Anwendungen der Differentialrechnung. Eine notwendige Bedingung für einen Extremwert an der Stelle x₀ ist f'(x₀) = 0. Zur Klassifikation dient die zweite Ableitung: f''(x₀) > 0 bedeutet Minimum (Linkskrümmung), f''(x₀) < 0 bedeutet Maximum (Rechtskrümmung), f''(x₀) = 0 ist unentschieden (Wendepunkt möglich). Wendepunkte liegen dort, wo f''(x) = 0 und f'''(x) ≠ 0 gilt (Krümmungswechsel). Die vollständige Kurvendiskussion umfasst: Definitionsbereich, Symmetrie, Nullstellen, Extremwerte, Wendepunkte und Verhalten für x → ±∞. Im MedAT wird besonders häufig gefragt, die Ableitung zu berechnen und Extremwerte zu bestimmen. Typische Aufgaben verlangen auch die Bestimmung der Tangentengleichung an einem gegebenen Punkt: t(x) = f'(x₀) · (x - x₀) + f(x₀).`,
      merksaetze: [
        'Wichtigste Ableitungen: (xⁿ)\' = n·x^(n-1), (eˣ)\' = eˣ, (ln x)\' = 1/x, (sin x)\' = cos x, (cos x)\' = -sin x.',
        'Extremwerte: f\'(x₀) = 0 (notwendig). f\'\'(x₀) > 0 → Minimum, f\'\'(x₀) < 0 → Maximum. Kettenregel: äußere Ableitung · innere Ableitung.'
      ],
      altfrage: {
        question: 'Bestimmen Sie die Extremwerte von f(x) = x³ - 3x + 2.',
        answer: 'f\'(x) = 3x² - 3 = 0 → x² = 1 → x₁ = 1, x₂ = -1. f\'\'(x) = 6x. f\'\'(1) = 6 > 0 → Minimum bei (1|0). f\'\'(-1) = -6 < 0 → Maximum bei (-1|4).'
      },
      klinischerBezug: 'Die Differentialrechnung ist in der Pharmakokinetik essenziell: Die Änderungsrate der Plasmakonzentration dc/dt beschreibt, wie schnell ein Medikament aufgenommen oder eliminiert wird. Die maximale Plasmakonzentration (cₘₐₓ) entspricht einem Extremwert der Konzentrations-Zeit-Kurve, bei dem dc/dt = 0 gilt.',
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
      content: `Die Integralrechnung ist die Umkehroperation der Differentialrechnung. Die Stammfunktion (oder das unbestimmte Integral) F(x) einer Funktion f(x) ist eine Funktion, deren Ableitung f(x) ergibt: F'(x) = f(x). Man schreibt: ∫f(x)dx = F(x) + C, wobei C die Integrationskonstante ist (da jede Konstante bei der Ableitung verschwindet). Die wichtigsten Stammfunktionen sind: ∫xⁿ dx = x^(n+1)/(n+1) + C (für n ≠ -1), ∫1/x dx = ln|x| + C, ∫eˣ dx = eˣ + C, ∫sin(x) dx = -cos(x) + C, ∫cos(x) dx = sin(x) + C. Die Linearität des Integrals besagt: ∫(c·f + g)dx = c·∫f dx + ∫g dx.

Das bestimmte Integral ∫ₐᵇ f(x)dx berechnet die vorzeichenbehaftete Fläche zwischen dem Graphen von f und der x-Achse im Intervall [a, b]. Der Hauptsatz der Differential- und Integralrechnung verbindet Ableitung und Integral: ∫ₐᵇ f(x)dx = F(b) - F(a) = [F(x)]ₐᵇ. Man berechnet also die Stammfunktion F, wertet sie an den Grenzen aus und bildet die Differenz. Beispiel: ∫₁³ (2x + 1)dx = [x² + x]₁³ = (9 + 3) - (1 + 1) = 12 - 2 = 10. Flächen unterhalb der x-Achse liefern negative Beiträge. Für die tatsächliche Fläche zwischen Graph und x-Achse muss man daher Bereiche getrennt berechnen und Beträge bilden: A = |∫ₐᶜ f(x)dx| + |∫ᶜᵇ f(x)dx|, wobei c eine Nullstelle im Intervall (a, b) ist.

Für die Berechnung komplizierterer Integrale stehen Integrationsregeln zur Verfügung. Die Substitutionsregel ist das Gegenstück zur Kettenregel: ∫f(g(x))·g'(x)dx = F(g(x)) + C. Beispiel: ∫2x·e^(x²)dx. Substitution u = x², du = 2x dx → ∫eᵘ du = eᵘ + C = e^(x²) + C. Die partielle Integration entspricht der Umkehr der Produktregel: ∫u·v' dx = u·v - ∫u'·v dx. Sie wird angewendet, wenn der Integrand ein Produkt ist, z. B. ∫x·eˣ dx = x·eˣ - ∫eˣ dx = x·eˣ - eˣ + C = eˣ(x - 1) + C. Die Fläche zwischen zwei Kurven f(x) und g(x) im Intervall [a, b] berechnet sich als A = ∫ₐᵇ |f(x) - g(x)|dx. Im MedAT werden grundlegende Stammfunktionen und einfache bestimmte Integrale geprüft, während Substitution und partielle Integration seltener vorkommen.`,
      merksaetze: [
        'Wichtigste Stammfunktionen: ∫xⁿ dx = x^(n+1)/(n+1) + C (n ≠ -1), ∫1/x dx = ln|x| + C, ∫eˣ dx = eˣ + C.',
        'Hauptsatz: ∫ₐᵇ f(x)dx = F(b) - F(a). Flächen unterhalb der x-Achse sind negativ – für die geometrische Fläche Betrag bilden!'
      ],
      altfrage: {
        question: 'Berechnen Sie die Fläche unter f(x) = x² zwischen x = 0 und x = 3.',
        answer: '∫₀³ x² dx = [x³/3]₀³ = 27/3 - 0 = 9 Flächeneinheiten.'
      },
      klinischerBezug: 'In der Pharmakokinetik ist die AUC (Area Under the Curve) das bestimmte Integral der Plasmakonzentration über die Zeit: AUC = ∫₀^∞ c(t)dt. Die AUC ist ein Maß für die Gesamtexposition gegenüber einem Medikament und wird zur Beurteilung der Bioverfügbarkeit verwendet.',
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
