import type { Kapitel } from '../types';

export const mathKap1: Kapitel = {
  id: 'math-kap1',
  title: 'Grundlagen & Arithmetik',
  subject: 'mathematik',
  icon: '🔢',
  estimatedTime: '30 Minuten',
  unterkapitel: [
    {
      id: 'math-kap1-1',
      title: 'Zahlensysteme',
      content: `**Natürliche Zahlen** ℕ = {1, 2, 3, ...} sind Zahlen zum Zählen. Manchmal wird die Null dazugezählt: ℕ₀ = {0, 1, 2, 3, ...}. Das ist die Basis.

**Ganze Zahlen** ℤ = {..., -2, -1, 0, 1, 2, ...} erweitern ℕ um negative Zahlen. Der Trick dabei: Jetzt kannst du immer subtrahieren, ohne dass das Ergebnis "ungültig" wird.

**Rationale Zahlen** ℚ sind alle Brüche p/q mit p ∈ ℤ und q ∈ ℤ \\ {0}. Jede rationale Zahl wird entweder als endlicher Dezimalbruch geschrieben (z. B. 1/4 = 0,25) oder als periodischer (z. B. 1/3 = 0,333...).

**Reelle Zahlen** ℝ enthalten zusätzlich die **irrationalen Zahlen** (Zahlen, die sich nicht als Bruch schreiben lassen). Beispiele: √2, π, e. Irrationale Zahlen haben unendlich viele Nachkommastellen ohne Periode.

Die Inklusionskette: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Im MedAT wird oft gefragt, zu welcher Menge eine Zahl gehört. √4 = 2 gehört zu ℕ, √3 ist irrational und gehört nur zu ℝ.

**Primzahlen** sind natürliche Zahlen größer als 1, die nur durch 1 und sich selbst teilbar sind: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29. Die 2 ist die einzige gerade Primzahl.

Der **Fundamentalsatz der Arithmetik**: Jede Zahl größer als 1 lässt sich eindeutig als Produkt von Primzahlen schreiben. Beispiel: 60 = 2² · 3 · 5.

**Teilbarkeitsregeln**: Durch 2 teilbar → letzte Ziffer gerade. Durch 3 teilbar → Quersumme durch 3 teilbar. Durch 5 teilbar → endet auf 0 oder 5. Durch 9 teilbar → Quersumme durch 9 teilbar. Durch 4 teilbar → letzten zwei Ziffern durch 4 teilbar.

**ggT** (größter gemeinsamer Teiler) und **kgV** (kleinstes gemeinsames Vielfaches) berechnest du mit der Primfaktorzerlegung: ggT nimmt alle gemeinsamen Primfaktoren mit kleinster Potenz, kgV nimmt alle vorkommenden Primfaktoren mit größter Potenz.`,
      merksätze: [
        'Die Zahlmengen bilden die Kette ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Jede rationale Zahl hat eine endliche oder periodische Dezimaldarstellung, irrationale Zahlen haben eine unendliche nicht-periodische.',
        'Teilbarkeitsregeln: durch 2 → letzte Ziffer gerade; durch 3 → Quersumme durch 3 teilbar; durch 9 → Quersumme durch 9 teilbar; durch 5 → endet auf 0 oder 5.'
      ],
      altfrage: {
        question: 'Welche der folgenden Zahlen ist irrational? (a) 0,75 (b) √9 (c) √7 (d) 22/7',
        answer: '(c) √7 ist irrational. 0,75 = 3/4 ∈ ℚ, √9 = 3 ∈ ℕ, 22/7 ∈ ℚ. Nur √7 lässt sich nicht als Bruch ganzer Zahlen darstellen.'
      },
      klinischerBezug: 'Der **Blutdruck** wird als Bruch angegeben (z. B. 120/80 mmHg). Die **Blutzucker**-Normalwerte liegen bei 70-100 mg/dl nüchtern. Das sind rationale Zahlen. In der Pharmakokinetik ist die **Halbwertszeit** oft irrational (z. B. t₁/₂ = 4,3 h kann genau sein oder gerundet).',
      selfTest: [
        {
          question: 'Welche Aussage über die Zahl √16 ist korrekt?',
          options: [
            '√16 ist irrational',
            '√16 ∈ ℕ',
            '√16 ∈ ℤ, aber √16 ∉ ℕ',
            '√16 ∈ ℚ, aber √16 ∉ ℤ',
            '√16 ist nicht definiert'
          ],
          correctIndex: 1,
          explanation: '√16 = 4, und 4 ist eine natürliche Zahl. Damit gilt √16 ∈ ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.'
        },
        {
          question: 'Welche Teilbarkeitsregel gilt für die Teilbarkeit durch 9?',
          options: [
            'Die letzte Ziffer muss 9 sein',
            'Die Quersumme muss durch 9 teilbar sein',
            'Die Zahl muss ungerade sein',
            'Die letzten zwei Ziffern müssen durch 9 teilbar sein',
            'Die Zahl muss durch 3 und durch 6 teilbar sein'
          ],
          correctIndex: 1,
          explanation: 'Eine Zahl ist genau dann durch 9 teilbar, wenn ihre Quersumme durch 9 teilbar ist. Beispiel: 729 → 7 + 2 + 9 = 18, und 18 ist durch 9 teilbar.'
        },
        {
          question: 'Was ist die Primfaktorzerlegung von 84?',
          options: [
            '2 · 42',
            '2² · 3 · 7',
            '4 · 21',
            '2 · 3 · 14',
            '2³ · 3 · 7'
          ],
          correctIndex: 1,
          explanation: '84 = 2 · 42 = 2 · 2 · 21 = 2 · 2 · 3 · 7 = 2² · 3 · 7. Nur diese Darstellung besteht ausschließlich aus Primfaktoren.'
        }
      ]
    },
    {
      id: 'math-kap1-2',
      title: 'Bruchrechnung',
      content: `Ein **Bruch** a/b besteht aus Zähler a und Nenner b (b ≠ 0). **Erweitern**: Zähler und Nenner mit derselben Zahl multiplizieren: a/b = (a·n)/(b·n). **Kürzen**: Durch gemeinsamen Teiler dividieren: (a·n)/(b·n) = a/b. Ein Bruch ist vollständig gekürzt, wenn ggT(a, b) = 1. Beispiel: 12/18 kürzen mit 6 ergibt 2/3.

**Addition/Subtraktion**: Brüche müssen gleichnamig sein. Hauptnenner = kgV der Nenner. Dann erweitern und addieren: a/b + c/d = (a·d + c·b)/(b·d). Beispiel: 2/3 + 3/4. Hauptnenner = kgV(3, 4) = 12. Also: 8/12 + 9/12 = 17/12.

**Multiplikation**: Zähler mal Zähler, Nenner mal Nenner: (a/b) · (c/d) = (a·c)/(b·d). Vor dem Multiplizieren kreuzweise kürzen spart Arbeit.

**Division**: Mit dem Kehrwert multiplizieren: (a/b) ÷ (c/d) = (a/b) · (d/c) = (a·d)/(b·c).

**Doppelbrüche**: (a/b)/(c/d) = (a/b) · (d/c). Einfach als Division interpretieren.

**Gemischte Zahlen** wie 2 3/4 werden zu unechten Brüchen: 2 3/4 = (2·4 + 3)/4 = 11/4. Umgekehrt: 17/5 = 3 2/5 (denn 17 = 3·5 + 2).

**Brüche vergleichen**: Gleichnamig machen, dann größerer Zähler = größerer Bruch. Oder Kreuzregel: a/b < c/d genau dann, wenn a·d < b·c (für positive Nenner).`,
      merksätze: [
        'Addition: Brüche gleichnamig machen, dann Zähler addieren. Multiplikation: Zähler mal Zähler, Nenner mal Nenner. Division: Mit dem Kehrwert multiplizieren.',
        'Doppelbrüche werden als Division interpretiert: (a/b)/(c/d) = (a·d)/(b·c). Vor dem Multiplizieren immer kreuzweise kürzen!'
      ],
      altfrage: {
        question: 'Berechnen Sie: (3/4 + 2/3) · 6/5',
        answer: '3/4 + 2/3 = 9/12 + 8/12 = 17/12. Dann: (17/12) · (6/5) = (17·6)/(12·5) = 102/60 = 17/10 = 1,7.'
      },
      klinischerBezug: '**Verdünnungsreihen** in der Mikrobiologie: 1:10.000 bedeutet 1/10.000. **Infusionsraten** berechnen: Wenn 500 ml in 6 Stunden laufen sollen, sind das 500/6 ml/h ≈ 83,3 ml/h. **Medikamentendosen** nach Körpergewicht: 5 mg/kg bei 70 kg = 5 · 70 = 350 mg. Oft wird mit 3/4, 1/2, 1/4 der Dosis gearbeitet.',
      selfTest: [
        {
          question: 'Was ergibt 5/6 - 3/8?',
          options: [
            '11/24',
            '2/2',
            '1/4',
            '7/24',
            '1/3'
          ],
          correctIndex: 0,
          explanation: 'Hauptnenner ist kgV(6, 8) = 24. 5/6 = 20/24, 3/8 = 9/24. 20/24 - 9/24 = 11/24.'
        },
        {
          question: 'Vereinfachen Sie den Doppelbruch: (2/3)/(4/9)',
          options: [
            '8/27',
            '3/2',
            '6/4',
            '2/3',
            '9/8'
          ],
          correctIndex: 1,
          explanation: '(2/3)/(4/9) = (2/3) · (9/4) = 18/12 = 3/2.'
        },
        {
          question: 'Welche gemischte Zahl entspricht dem Bruch 23/6?',
          options: [
            '3 4/6',
            '3 5/6',
            '4 1/6',
            '3 2/6',
            '4 5/6'
          ],
          correctIndex: 1,
          explanation: '23 ÷ 6 = 3 Rest 5. Also 23/6 = 3 5/6.'
        }
      ]
    },
    {
      id: 'math-kap1-3',
      title: 'Potenzen & Wurzeln',
      content: `**Potenzen**: aⁿ = a · a · ... · a (n Faktoren). a ist die Basis, n der Exponent.

**Potenzgesetze**: aᵐ · aⁿ = aᵐ⁺ⁿ (gleiche Basis → Exponenten addieren). aᵐ / aⁿ = aᵐ⁻ⁿ (gleiche Basis → Exponenten subtrahieren). (aᵐ)ⁿ = aᵐ·ⁿ (Potenz einer Potenz → Exponenten multiplizieren). (a · b)ⁿ = aⁿ · bⁿ. (a/b)ⁿ = aⁿ/bⁿ.

**Besondere Exponenten**: a⁰ = 1 (für a ≠ 0). a⁻ⁿ = 1/aⁿ.

**Wurzeln**: ⁿ√a = a^(1/n). Die **Quadratwurzel** √a = a^(1/2) ist der häufigste Fall.

**Wurzelgesetze**: ⁿ√a · ⁿ√b = ⁿ√(a·b). ⁿ√a / ⁿ√b = ⁿ√(a/b). ᵐ√(ⁿ√a) = ᵐ·ⁿ√a.

**Rationale Exponenten**: a^(m/n) = ⁿ√(aᵐ). Beispiel: 8^(2/3) = ³√(8²) = ³√64 = 4. Alternativ: 8^(2/3) = (³√8)² = 2² = 4.

**Wurzeln vereinfachen**: Quadratische Faktoren herausziehen. √72 = √(36 · 2) = 6√2.

**Rationalmachen**: Wurzel im Nenner beseitigen. 1/√3 = √3/3.

**Zehnerpotenzen** (wissenschaftliche Notation): a · 10ⁿ mit 1 ≤ a < 10. Beispiel: 0,000042 = 4,2 · 10⁻⁵ und 3.500.000 = 3,5 · 10⁶. Multiplikation: (3 · 10⁴) · (2 · 10⁻²) = 6 · 10². Division: Exponenten subtrahieren.

**SI-Vorsilben**: Milli (10⁻³), Mikro (10⁻⁶), Nano (10⁻⁹), Kilo (10³), Mega (10⁶).`,
      merksätze: [
        'Potenzgesetze merken: Gleiche Basis → Exponenten addieren/subtrahieren. Potenz einer Potenz → Exponenten multiplizieren. a⁰ = 1 und a⁻ⁿ = 1/aⁿ.',
        'Rationale Exponenten verbinden Potenzen und Wurzeln: a^(m/n) = ⁿ√(aᵐ). Wissenschaftliche Notation: a · 10ⁿ mit 1 ≤ a < 10.'
      ],
      altfrage: {
        question: 'Vereinfachen Sie: (2³ · 4²) / 2⁵',
        answer: '4² = (2²)² = 2⁴. Also: (2³ · 2⁴) / 2⁵ = 2⁷ / 2⁵ = 2² = 4.'
      },
      klinischerBezug: '**Erythrozytenzahl**: ca. 5 · 10¹² /L. **Medikamentendosen**: Atropin 0,5 mg = 5 · 10⁻⁴ g = 500 μg (Mikro = 10⁻⁶). **pH-Wert**: [H⁺] = 10⁻ᵖᴴ mol/L. Bei pH 7,4 (Blut) ist [H⁺] = 10⁻⁷·⁴ mol/L ≈ 40 nmol/L. **Halbwertszeit**: Nach n Halbwertszeiten bleibt die Konzentration c₀ · (1/2)ⁿ = c₀ · 2⁻ⁿ.',
      selfTest: [
        {
          question: 'Was ergibt 27^(2/3)?',
          options: [
            '3',
            '9',
            '18',
            '81',
            '27'
          ],
          correctIndex: 1,
          explanation: '27^(2/3) = (³√27)² = 3² = 9. Man zieht erst die dritte Wurzel und quadriert dann.'
        },
        {
          question: 'Vereinfachen Sie: √50 + √18',
          options: [
            '√68',
            '8√2',
            '4√17',
            '6√2',
            '5√2 + 3√2 ist nicht vereinfachbar'
          ],
          correctIndex: 1,
          explanation: '√50 = √(25·2) = 5√2, √18 = √(9·2) = 3√2. Summe: 5√2 + 3√2 = 8√2.'
        },
        {
          question: 'Wie lautet 0,00037 in wissenschaftlicher Notation?',
          options: [
            '37 · 10⁻⁵',
            '3,7 · 10⁻⁴',
            '3,7 · 10⁻³',
            '0,37 · 10⁻³',
            '3,7 · 10⁻⁵'
          ],
          correctIndex: 1,
          explanation: '0,00037 = 3,7 · 10⁻⁴. Die Mantisse muss zwischen 1 und 10 liegen (1 ≤ a < 10).'
        }
      ]
    },
    {
      id: 'math-kap1-4',
      title: 'Prozent- & Zinsrechnung',
      content: `**Prozentrechnung**: W = G · p/100. W ist der **Prozentwert**, G der **Grundwert**, p der **Prozentsatz**. Durch Umstellen: G = W · 100/p und p = W/G · 100. Beispiel: 15 % von 240 = 240 · 15/100 = 36.

**Promille**: Bezogen auf 1000. W = G · p/1000.

**Wachstumsfaktor**: q = 1 + p/100 (Zunahme). q = 1 - p/100 (Abnahme). Beispiel: +20 % entspricht q = 1,20. -20 % entspricht q = 0,80.

Der Trick dabei: Aufeinanderfolgende Änderungen werden multipliziert, nicht addiert. 100 → +20 % → 120 → -20 % → 96 (nicht 100!). Grund: Die 20 % bei der zweiten Änderung beziehen sich auf 120, nicht auf 100.

**Prozentuale Veränderung**: p = (Neuwert - Altwert)/Altwert · 100.`,
      lernziele: [
        'Grundwert, Prozentwert und Prozentsatz berechnen können',
        'Prozentuale Veränderungen und Wachstumsfaktoren anwenden können',
        'Die Zinseszinsformel verstehen und anwenden können'
      ],
      sections: [
        {
          heading: 'Grundwert, Prozentwert, Prozentsatz',
          text: `Die drei Grundgrößen: **Grundwert** G (das Ganze, 100 %), **Prozentsatz** p (in %), **Prozentwert** W (der Anteil). Die Formel: W = G · p/100. Durch Umstellen: G = W · 100/p und p = W/G · 100. Beispiel: 36 von 240 sind p = 36/240 · 100 = 15 %.`,
          merksatz: 'Prozentrechnung: W = G · p/100. Wachstumsfaktor: q = 1 + p/100 (Zunahme) bzw. q = 1 - p/100 (Abnahme). Achtung: Aufeinanderfolgende Änderungen multiplizieren, nicht addieren!'
        },
        {
          heading: 'Prozentuale Veränderungen',
          text: `Prozentuale Zunahme: p = (Neuwert - Altwert)/Altwert · 100. Eine Steigerung um p % bedeutet Multiplikation mit q = 1 + p/100. Eine Abnahme um p % entspricht q = 1 - p/100.

Achtung: +20 % und dann -20 % ergibt nicht den Ausgangswert. Beispiel: 100 → +20 % → 120 → -20 % → 96. Der Fehler: Die 20 % beim zweiten Mal beziehen sich auf 120, nicht auf 100.`
        },
        {
          heading: 'Zinsrechnung und exponentielles Wachstum',
          text: `**Einfache Verzinsung**: K_n = K_0 · (1 + n · p/100). K_0 ist das Anfangskapital, p der Jahreszinssatz, n die Anzahl der Jahre.

**Zinseszins**: K_n = K_0 · (1 + p/100)^n. Die Zinsen werden jährlich dem Kapital zugeschlagen und mitverzinst. Beispiel: 1000 Euro bei 5 % ergeben nach 20 Jahren mit Zinseszins 1000 · 1,05^20 ≈ 2653,30 Euro (einfache Verzinsung: nur 2000 Euro).

**Unterjährige Verzinsung** (m-mal pro Jahr): K_n = K_0 · (1 + p/(100·m))^(m·n).

Die Zinseszinsformel ist mathematisch identisch mit exponentiellem Wachstum.`,
          table: {
            headers: ['Größe', 'Formel', 'Beispiel'],
            rows: [
              ['Prozentwert W', 'W = G · p/100', '15 % von 240: W = 240 · 15/100 = 36'],
              ['Grundwert G', 'G = W · 100/p', 'W = 36, p = 15: G = 36 · 100/15 = 240'],
              ['Prozentsatz p', 'p = W/G · 100', '36 von 240: p = 36/240 · 100 = 15 %'],
              ['Wachstumsfaktor q', 'q = 1 + p/100 (Zunahme), q = 1 - p/100 (Abnahme)', '+20 %: q = 1,20; -20 %: q = 0,80'],
              ['Zinseszins K_n', 'K_n = K_0 · (1 + p/100)^n', '1000 Euro, 5 %, 20 J.: 1000 · 1,05^20 ~ 2653,30 Euro']
            ]
          }
        }
      ],
      merksätze: [
        'Prozentrechnung: W = G · p/100. Wachstumsfaktor: q = 1 + p/100 (Zunahme) bzw. q = 1 - p/100 (Abnahme). Achtung: Aufeinanderfolgende Änderungen multiplizieren, nicht addieren!',
        'Zinseszinsformel: K_n = K_0 · (1 + p/100)^n. Dies ist identisch mit exponentiellem Wachstum und gilt analog für Populationswachstum oder radioaktiven Zerfall.'
      ],
      altfrage: {
        question: 'Ein Medikament wird um 30 % reduziert und kostet nun 49 Euro. Was war der Originalpreis?',
        answer: 'G · 0,70 = 49 Euro, also G = 49/0,70 = 70 Euro. Der Originalpreis betrug 70 Euro.'
      },
      klinischerBezug: '**Absolute Risikoreduktion (ARR)** vs. **relative Risikoreduktion (RRR)**: ARR = Risiko₁ - Risiko₂ (in Prozentpunkten). RRR = (Risiko₁ - Risiko₂)/Risiko₁ · 100 %. Beispiel: Risiko sinkt von 4 % auf 2 %. ARR = 2 Prozentpunkte. RRR = 50 %. Die RRR klingt dramatischer, ist aber irreführend ohne absolute Zahlen. **Number Needed to Treat (NNT)** = 1/ARR = 1/0,02 = 50.',
      selfTest: [
        {
          question: 'Ein Preis steigt um 25 % und wird danach um 20 % gesenkt. Wie verändert sich der Originalpreis?',
          options: [
            'Er bleibt gleich',
            'Er steigt um 5 %',
            'Er bleibt gleich (1,25 · 0,80 = 1,00)',
            'Er sinkt um 5 %',
            'Er steigt um 2,5 %'
          ],
          correctIndex: 2,
          explanation: 'Faktor: 1,25 · 0,80 = 1,00. Der Preis bleibt tatsächlich gleich. 25 % Steigerung gefolgt von 20 % Senkung ergibt exakt den Ausgangswert.'
        },
        {
          question: 'Wie viel Kapital hat man nach 3 Jahren bei 1000 Euro Startkapital und 4 % Zinseszins?',
          options: [
            '1120,00 Euro',
            '1124,86 Euro',
            '1121,60 Euro',
            '1160,00 Euro',
            '1140,00 Euro'
          ],
          correctIndex: 1,
          explanation: 'K_3 = 1000 · 1,04^3 = 1000 · 1,124864 = 1124,86 Euro. Einfache Verzinsung hätte nur 1120 Euro ergeben.'
        },
        {
          question: '72 von 800 Probanden zeigen eine Nebenwirkung. Wie viel Prozent sind das?',
          options: [
            '8,5 %',
            '7,2 %',
            '9 %',
            '9,6 %',
            '11,1 %'
          ],
          correctIndex: 2,
          explanation: 'p = 72/800 · 100 = 9 %. Man teilt den Prozentwert durch den Grundwert und multipliziert mit 100.'
        }
      ]
    }
  ]
};
