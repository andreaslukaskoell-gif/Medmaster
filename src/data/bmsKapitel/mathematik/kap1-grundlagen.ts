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
      content: `Die Mathematik baut auf verschiedenen Zahlensystemen auf, die hierarchisch aufeinander aufbauen. Die natürlichen Zahlen ℕ = {1, 2, 3, ...} bilden die Grundlage und beschreiben Anzahlen. In manchen Konventionen wird die Null miteinbezogen: ℕ₀ = {0, 1, 2, 3, ...}. Die ganzen Zahlen ℤ = {..., -2, -1, 0, 1, 2, ...} erweitern die natürlichen Zahlen um negative Zahlen und die Null. Damit wird die Subtraktion uneingeschränkt möglich: Jede Differenz zweier natürlicher Zahlen ergibt eine ganze Zahl. Die rationalen Zahlen ℚ umfassen alle Brüche p/q mit p ∈ ℤ und q ∈ ℤ \\ {0}. Jede rationale Zahl lässt sich als endlicher oder periodischer Dezimalbruch darstellen. Beispielsweise ist 1/3 = 0,333... periodisch, während 1/4 = 0,25 endlich ist.

Die reellen Zahlen ℝ schließen zusätzlich die irrationalen Zahlen ein, also Zahlen, die sich nicht als Bruch ganzer Zahlen ausdrücken lassen. Bekannte Beispiele sind √2, π und die Eulersche Zahl e. Irrationale Zahlen besitzen eine unendliche, nicht-periodische Dezimaldarstellung. Die Inklusionskette lautet: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Im MedAT ist ein sicheres Verständnis dieser Zahlmengen wichtig, da Aufgaben häufig prüfen, ob eine bestimmte Zahl zu einer gegebenen Menge gehört. Zum Beispiel gehört √4 = 2 zu ℕ, während √3 irrational und somit nur Element von ℝ ist. Die Unterscheidung zwischen rationalen und irrationalen Zahlen ist ein häufiger Prüfungsgegenstand.

Primzahlen sind natürliche Zahlen größer als 1, die nur durch 1 und sich selbst teilbar sind. Die ersten Primzahlen lauten: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29. Die Zahl 2 ist die einzige gerade Primzahl. Der Fundamentalsatz der Arithmetik besagt, dass jede natürliche Zahl größer als 1 eindeutig als Produkt von Primzahlen darstellbar ist (Primfaktorzerlegung). Beispiel: 60 = 2² · 3 · 5. Teilbarkeitsregeln erleichtern das Rechnen: Eine Zahl ist durch 2 teilbar, wenn ihre letzte Ziffer gerade ist; durch 3, wenn ihre Quersumme durch 3 teilbar ist; durch 5, wenn sie auf 0 oder 5 endet; durch 9, wenn ihre Quersumme durch 9 teilbar ist; durch 4, wenn die letzten beiden Ziffern durch 4 teilbar sind. Das kleinste gemeinsame Vielfache (kgV) und der größte gemeinsame Teiler (ggT) lassen sich mithilfe der Primfaktorzerlegung bestimmen: Der ggT enthält alle gemeinsamen Primfaktoren mit der jeweils kleinsten Potenz, das kgV alle vorkommenden Primfaktoren mit der jeweils größten Potenz.`,
      merksaetze: [
        'Die Zahlmengen bilden die Kette ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Jede rationale Zahl hat eine endliche oder periodische Dezimaldarstellung, irrationale Zahlen haben eine unendliche nicht-periodische.',
        'Teilbarkeitsregeln: durch 2 → letzte Ziffer gerade; durch 3 → Quersumme durch 3 teilbar; durch 9 → Quersumme durch 9 teilbar; durch 5 → endet auf 0 oder 5.'
      ],
      altfrage: {
        question: 'Welche der folgenden Zahlen ist irrational? (a) 0,75 (b) √9 (c) √7 (d) 22/7',
        answer: '(c) √7 ist irrational. 0,75 = 3/4 ∈ ℚ, √9 = 3 ∈ ℕ, 22/7 ∈ ℚ. Nur √7 lässt sich nicht als Bruch ganzer Zahlen darstellen.'
      },
      klinischerBezug: 'In der Pharmakologie werden Dosierungen oft als rationale Zahlen angegeben (z. B. 0,25 mg). Die sichere Zuordnung zu Zahlmengen hilft bei der Überprüfung, ob eine berechnete Dosis plausibel ist.',
      selfTest: [
        {
          question: 'Welche Aussage über die Zahl √16 ist korrekt?',
          options: [
            '√16 ist irrational',
            '√16 ∈ ℕ',
            '√16 ∈ ℤ, aber √16 ∉ ℕ',
            '√16 ∈ ℚ, aber √16 ∉ ℤ'
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
            'Die letzten zwei Ziffern müssen durch 9 teilbar sein'
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
            '2 · 3 · 14'
          ],
          correctIndex: 1,
          explanation: '84 = 2 · 42 = 2 · 2 · 21 = 2 · 2 · 3 · 7 = 2² · 3 · 7. Nur diese Darstellung besteht ausschließlich aus Primfaktoren.'
        }
      ]
    },
    {
      id: 'math-kap1-2',
      title: 'Bruchrechnung',
      content: `Die Bruchrechnung ist ein zentrales Thema der Arithmetik und im MedAT unverzichtbar. Ein Bruch a/b besteht aus dem Zähler a und dem Nenner b (b ≠ 0). Brüche werden erweitert, indem Zähler und Nenner mit derselben Zahl multipliziert werden: a/b = (a·n)/(b·n). Beim Kürzen wird durch einen gemeinsamen Teiler dividiert: (a·n)/(b·n) = a/b. Ein Bruch ist vollständig gekürzt, wenn ggT(a, b) = 1. Beispiel: 12/18 lässt sich durch 6 kürzen zu 2/3. Das Erweitern ist besonders wichtig, um Brüche gleichnamig zu machen, also auf denselben Nenner zu bringen.

Für die Addition und Subtraktion von Brüchen müssen die Nenner gleich sein. Man bestimmt das kgV der Nenner als Hauptnenner und erweitert entsprechend: a/b + c/d = (a·d + c·b)/(b·d). Effizienter ist es, den Hauptnenner als kgV(b, d) zu wählen. Beispiel: 2/3 + 3/4. Der Hauptnenner ist kgV(3, 4) = 12. Also: 8/12 + 9/12 = 17/12. Die Multiplikation zweier Brüche erfolgt durch Zähler-mal-Zähler und Nenner-mal-Nenner: (a/b) · (c/d) = (a·c)/(b·d). Die Division durch einen Bruch entspricht der Multiplikation mit dem Kehrwert: (a/b) ÷ (c/d) = (a/b) · (d/c) = (a·d)/(b·c). Es empfiehlt sich, vor dem Multiplizieren kreuzweise zu kürzen, um kleinere Zahlen zu erhalten.

Doppelbrüche sind Brüche, deren Zähler oder Nenner selbst ein Bruch ist. Zur Vereinfachung wird der Doppelbruch als Division aufgefasst: (a/b)/(c/d) = (a/b) · (d/c). Gemischte Zahlen wie 2 3/4 können in unechte Brüche umgewandelt werden: 2 3/4 = (2·4 + 3)/4 = 11/4. Umgekehrt wird ein unechter Bruch durch Division mit Rest in eine gemischte Zahl umgeformt: 17/5 = 3 2/5 (denn 17 = 3·5 + 2). Beim Vergleich von Brüchen hilft das Gleichnamigmachen: Der Bruch mit dem größeren Zähler (bei gleichem Nenner) ist der größere. Alternativ kann man die Kreuzregel nutzen: a/b < c/d genau dann, wenn a·d < b·c (für positive Nenner). Diese Rechenfertigkeiten sind im MedAT essenziell, da viele Aufgaben darauf abzielen, effizient mit Brüchen zu rechnen.`,
      merksaetze: [
        'Addition: Brüche gleichnamig machen, dann Zähler addieren. Multiplikation: Zähler mal Zähler, Nenner mal Nenner. Division: Mit dem Kehrwert multiplizieren.',
        'Doppelbrüche werden als Division interpretiert: (a/b)/(c/d) = (a·d)/(b·c). Vor dem Multiplizieren immer kreuzweise kürzen!'
      ],
      altfrage: {
        question: 'Berechnen Sie: (3/4 + 2/3) · 6/5',
        answer: '3/4 + 2/3 = 9/12 + 8/12 = 17/12. Dann: (17/12) · (6/5) = (17·6)/(12·5) = 102/60 = 17/10 = 1,7.'
      },
      klinischerBezug: 'Bruchrechnung ist in der Medizin allgegenwärtig: Verdünnungsreihen in der Mikrobiologie (z. B. 1:10.000), Dosisanpassungen nach Körpergewicht und Umrechnung von Konzentrationsangaben (mg/ml, %, ppm) erfordern sicheres Bruchrechnen.',
      selfTest: [
        {
          question: 'Was ergibt 5/6 - 3/8?',
          options: [
            '11/24',
            '2/2',
            '1/4',
            '7/24'
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
            '2/3'
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
            '3 2/6'
          ],
          correctIndex: 1,
          explanation: '23 ÷ 6 = 3 Rest 5. Also 23/6 = 3 5/6.'
        }
      ]
    },
    {
      id: 'math-kap1-3',
      title: 'Potenzen & Wurzeln',
      content: `Potenzen sind eine Kurzschreibweise für wiederholte Multiplikation: aⁿ = a · a · ... · a (n Faktoren), wobei a die Basis und n der Exponent ist. Für die Rechnung mit Potenzen gelten fundamentale Gesetze: aᵐ · aⁿ = aᵐ⁺ⁿ (gleiche Basis, Exponenten addieren), aᵐ / aⁿ = aᵐ⁻ⁿ (gleiche Basis, Exponenten subtrahieren), (aᵐ)ⁿ = aᵐ·ⁿ (Potenz einer Potenz, Exponenten multiplizieren), (a · b)ⁿ = aⁿ · bⁿ (Produkt potenzieren), und (a/b)ⁿ = aⁿ/bⁿ (Quotient potenzieren). Besondere Exponenten: a⁰ = 1 für a ≠ 0, und a⁻ⁿ = 1/aⁿ. Diese Regeln ermöglichen das systematische Vereinfachen komplexer Potenzausdrücke.

Wurzeln sind die Umkehroperation des Potenzierens: ⁿ√a = a^(1/n). Die Quadratwurzel √a = a^(1/2) ist der häufigste Spezialfall. Aus der Potenzschreibweise leiten sich die Wurzelgesetze ab: ⁿ√a · ⁿ√b = ⁿ√(a·b), ⁿ√a / ⁿ√b = ⁿ√(a/b), und ᵐ√(ⁿ√a) = ᵐ·ⁿ√a. Rationale Exponenten verbinden Potenzen und Wurzeln: a^(m/n) = ⁿ√(aᵐ). Beispiel: 8^(2/3) = ³√(8²) = ³√64 = 4. Alternativ: 8^(2/3) = (³√8)² = 2² = 4. Beim Vereinfachen von Wurzeln zieht man quadratische Faktoren heraus: √72 = √(36 · 2) = 6√2. Das Rationalmachen des Nenners beseitigt Wurzeln im Nenner: 1/√3 = √3/3.

Zehnerpotenzen sind in den Naturwissenschaften und der Medizin allgegenwärtig. Sie ermöglichen die kompakte Darstellung sehr großer oder sehr kleiner Zahlen in wissenschaftlicher Notation: a · 10ⁿ mit 1 ≤ a < 10. Beispiel: 0,000042 = 4,2 · 10⁻⁵ und 3.500.000 = 3,5 · 10⁶. Die Multiplikation in wissenschaftlicher Notation erfolgt durch Multiplikation der Mantissen und Addition der Exponenten: (3 · 10⁴) · (2 · 10⁻²) = 6 · 10². Bei der Division werden die Exponenten subtrahiert. SI-Vorsilben wie Milli (10⁻³), Mikro (10⁻⁶), Nano (10⁻⁹), Kilo (10³) und Mega (10⁶) basieren direkt auf Zehnerpotenzen und sind im medizinischen Alltag unverzichtbar für Konzentrationsangaben, Dosierungen und Laborwerte.`,
      merksaetze: [
        'Potenzgesetze merken: Gleiche Basis → Exponenten addieren/subtrahieren. Potenz einer Potenz → Exponenten multiplizieren. a⁰ = 1 und a⁻ⁿ = 1/aⁿ.',
        'Rationale Exponenten verbinden Potenzen und Wurzeln: a^(m/n) = ⁿ√(aᵐ). Wissenschaftliche Notation: a · 10ⁿ mit 1 ≤ a < 10.'
      ],
      altfrage: {
        question: 'Vereinfachen Sie: (2³ · 4²) / 2⁵',
        answer: '4² = (2²)² = 2⁴. Also: (2³ · 2⁴) / 2⁵ = 2⁷ / 2⁵ = 2² = 4.'
      },
      klinischerBezug: 'Zehnerpotenzen begegnen Medizinern täglich: Laborwerte wie Erythrozytenzahl (ca. 5 · 10¹² /L), Medikamentendosen im Mikrogramm-Bereich (10⁻⁶ g) und pH-Wert-Berechnungen (H⁺-Konzentration = 10⁻ᵖᴴ mol/L) erfordern sicheres Rechnen mit Potenzen.',
      selfTest: [
        {
          question: 'Was ergibt 27^(2/3)?',
          options: [
            '3',
            '9',
            '18',
            '81'
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
            '6√2'
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
            '0,37 · 10⁻³'
          ],
          correctIndex: 1,
          explanation: '0,00037 = 3,7 · 10⁻⁴. Die Mantisse muss zwischen 1 und 10 liegen (1 ≤ a < 10).'
        }
      ]
    },
    {
      id: 'math-kap1-4',
      title: 'Prozent- & Zinsrechnung',
      content: `Die Prozentrechnung beschreibt Anteile bezogen auf den Grundwert 100. Die drei Grundgrößen sind: der Grundwert G (das Ganze, 100 %), der Prozentsatz p (in %) und der Prozentwert W (der Anteil). Die fundamentale Beziehung lautet: W = G · p/100. Durch Umstellen erhält man: G = W · 100/p und p = W/G · 100. Beispiel: 15 % von 240 ergibt W = 240 · 15/100 = 36. Umgekehrt: Wenn 36 von 240 gesucht ist, berechnet man p = 36/240 · 100 = 15 %. Promille (‰) funktioniert analog, aber bezogen auf 1000: W = G · p/1000. Im MedAT werden häufig Aufgaben gestellt, bei denen zwischen diesen Größen umgerechnet werden muss.

Prozentuale Veränderungen spielen eine zentrale Rolle bei Wachstums- und Abnahmeprozessen. Die prozentuale Zunahme berechnet sich als: p = (Neuwert - Altwert)/Altwert · 100. Eine Steigerung um p % bedeutet Multiplikation mit dem Wachstumsfaktor q = 1 + p/100. Eine Abnahme um p % entspricht dem Faktor q = 1 - p/100. Achtung: Eine Steigerung um 20 % und eine anschließende Senkung um 20 % ergeben nicht den Ausgangswert! Beispiel: 100 → +20 % → 120 → -20 % → 96. Der Fehler liegt darin, dass die 20 % beim zweiten Mal auf eine größere Basis (120) bezogen werden. Mehrmalige prozentuale Änderungen werden durch Multiplikation der Wachstumsfaktoren berechnet.

Die Zinsrechnung ist eine Anwendung der Prozentrechnung auf Kapitalverzinsung. Bei einfacher Verzinsung gilt: K_n = K₀ · (1 + n · p/100), wobei K₀ das Anfangskapital, p der Jahreszinssatz und n die Anzahl der Jahre ist. Bei Zinseszins werden die Zinsen jährlich dem Kapital zugeschlagen und mitverzinst: K_n = K₀ · (1 + p/100)ⁿ. Der Unterschied zur einfachen Verzinsung wird bei längerer Laufzeit dramatisch. Beispiel: 1000 € bei 5 % ergeben nach 20 Jahren mit einfacher Verzinsung 2000 €, mit Zinseszins hingegen 1000 · 1,05²⁰ ≈ 2653,30 €. Für unterjährige Verzinsung (m-mal pro Jahr) gilt: K_n = K₀ · (1 + p/(100·m))^(m·n). Die Zinseszinsformel ist mathematisch identisch mit dem exponentiellen Wachstum und findet in der Medizin Anwendung bei Modellen für Bakterienwachstum oder Pharmakokinetik.`,
      merksaetze: [
        'Prozentrechnung: W = G · p/100. Wachstumsfaktor: q = 1 + p/100 (Zunahme) bzw. q = 1 - p/100 (Abnahme). Achtung: Aufeinanderfolgende Änderungen multiplizieren, nicht addieren!',
        'Zinseszinsformel: K_n = K₀ · (1 + p/100)ⁿ. Dies ist identisch mit exponentiellem Wachstum und gilt analog für Populationswachstum oder radioaktiven Zerfall.'
      ],
      altfrage: {
        question: 'Ein Medikament wird um 30 % reduziert und kostet nun 49 €. Was war der Originalpreis?',
        answer: 'G · 0,70 = 49 €, also G = 49/0,70 = 70 €. Der Originalpreis betrug 70 €.'
      },
      klinischerBezug: 'In der klinischen Forschung werden Therapieergebnisse oft als prozentuale Risikoreduktion angegeben. Die Unterscheidung zwischen absoluter Risikoreduktion (ARR) und relativer Risikoreduktion (RRR) ist medizinisch essenziell. Auch Verdünnungsreihen und Konzentrationsberechnungen beruhen auf Prozentrechnung.',
      selfTest: [
        {
          question: 'Ein Preis steigt um 25 % und wird danach um 20 % gesenkt. Wie verändert sich der Originalpreis?',
          options: [
            'Er bleibt gleich',
            'Er steigt um 5 %',
            'Er bleibt gleich (1,25 · 0,80 = 1,00)',
            'Er sinkt um 5 %'
          ],
          correctIndex: 2,
          explanation: 'Faktor: 1,25 · 0,80 = 1,00. Der Preis bleibt tatsächlich gleich. 25 % Steigerung gefolgt von 20 % Senkung ergibt exakt den Ausgangswert.'
        },
        {
          question: 'Wie viel Kapital hat man nach 3 Jahren bei 1000 € Startkapital und 4 % Zinseszins?',
          options: [
            '1120,00 €',
            '1124,86 €',
            '1121,60 €',
            '1160,00 €'
          ],
          correctIndex: 1,
          explanation: 'K₃ = 1000 · 1,04³ = 1000 · 1,124864 = 1124,86 €. Einfache Verzinsung hätte nur 1120 € ergeben.'
        },
        {
          question: '72 von 800 Probanden zeigen eine Nebenwirkung. Wie viel Prozent sind das?',
          options: [
            '8,5 %',
            '7,2 %',
            '9 %',
            '9,6 %'
          ],
          correctIndex: 2,
          explanation: 'p = 72/800 · 100 = 9 %. Man teilt den Prozentwert durch den Grundwert und multipliziert mit 100.'
        }
      ]
    }
  ]
};
