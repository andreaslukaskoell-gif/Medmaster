import type { Kapitel } from '../types';

export const chemKap4: Kapitel = {
  id: 'chem-kap4',
  title: 'Stöchiometrie & Mol-Konzept',
  subject: 'chemie',
  icon: '⚖️',
  estimatedTime: '20 Minuten',
  unterkapitel: [
    {
      id: 'chem-kap4-uk1',
      title: 'Mol & Avogadro',
      content: `Das **Mol** ist die Brücke zwischen Atomen und Labor. Es ist die SI-Basiseinheit der Stoffmenge. Ein Mol enthält genau 6,02214076 × 10²³ Teilchen (Atome, Moleküle, Ionen). Diese Zahl heißt **Avogadro-Konstante** Nₐ.

Der Name geht auf **Amedeo Avogadro** (1811) zurück. Er stellte die Hypothese auf: Gleiche Volumina verschiedener Gase enthalten bei gleicher Temperatur und gleichem Druck die gleiche Anzahl Teilchen.

Die **Stoffmenge** n wird in Mol (mol) angegeben. Berechnung: n = m / M (Masse geteilt durch molare Masse).

Die **molare Masse** M gibt an, wie viel 1 Mol eines Stoffes wiegt (Einheit: g/mol). Sie entspricht numerisch der relativen Atommasse im PSE. Kohlenstoff: M = 12,01 g/mol. Sauerstoff: M = 16,00 g/mol. Für Verbindungen addiert man die molaren Massen aller Atome. **Wasser** (H₂O): M = 2 × 1,008 + 16,00 = 18,02 g/mol. Das bedeutet: 18,02 g Wasser = 1 Mol = 6,022 × 10²³ Wassermoleküle.

Das **molare Volumen** Vm gibt an, welches Volumen 1 Mol eines idealen Gases einnimmt. Bei **STP** (0 °C, 1,013 bar): Vm = 22,414 L/mol. Bei Raumtemperatur (25 °C, 1 bar): Vm ≈ 24,8 L/mol. Wichtig: Gilt nur für Gase, nicht für Flüssigkeiten oder Feststoffe. Alle idealen Gase haben bei STP dasselbe molare Volumen (Avogadro-Gesetz).

Zentrale Umrechnungen: n = m/M = N/Nₐ = V/Vm (für Gase bei STP).`,
      merksätze: [
        'Ein Mol = 6,022 × 10²³ Teilchen (Avogadro-Konstante). Die molare Masse M (g/mol) entspricht numerisch der relativen Atommasse. Stoffmenge: n = m/M.',
        'Das molare Volumen eines idealen Gases bei STP beträgt 22,4 L/mol (gilt für alle idealen Gase gleichermaßen). Zentrale Umrechnungen: n = m/M = N/Nₐ = V/Vm.'
      ],
      altfrage: {
        question: 'Welches Volumen nimmt 1 Mol eines idealen Gases bei Standardbedingungen (STP) ein?',
        answer: 'Ein Mol eines idealen Gases nimmt bei STP (0 °C, 1,013 bar) ein Volumen von 22,414 L ein. Dieser Wert gilt für alle idealen Gase, unabhängig von ihrer Art (Avogadro-Gesetz).'
      },
      klinischerBezug: 'Die Konzentration von **Elektrolyten im Blut** wird in mmol/L angegeben. Normwerte: **Natrium** 135–145 mmol/L, **Kalium** 3,5–5,0 mmol/L, **Calcium** 2,2–2,6 mmol/L (ionisiertes Ca²⁺: 1,1–1,3 mmol/L), **Chlorid** 98–106 mmol/L. Bei der **Medikamentendosierung** rechnet man oft in Mol statt Gramm, weil die Teilchenzahl für die Wirkung entscheidend ist. Beispiel: 1 mmol Natriumchlorid (NaCl, M = 58,44 g/mol) entspricht 58,44 mg.',
      selfTest: [
        {
          question: 'Wie viele Moleküle sind in 36,04 g Wasser (M = 18,02 g/mol) enthalten?',
          options: [
            '6,022 × 10²³',
            '1,204 × 10²⁴',
            '3,011 × 10²³',
            '1,806 × 10²⁴',
            '9,033 × 10²³'
          ],
          correctIndex: 1,
          explanation: 'n = m/M = 36,04 g / 18,02 g/mol = 2 mol. Teilchenzahl N = n × Nₐ = 2 × 6,022 × 10²³ = 1,204 × 10²⁴ Moleküle.'
        },
        {
          question: 'Was ist die molare Masse von Glucose (C₆H₁₂O₆)?',
          options: [
            '152 g/mol',
            '180 g/mol',
            '160 g/mol',
            '196 g/mol',
            '144 g/mol'
          ],
          correctIndex: 1,
          explanation: 'M(C₆H₁₂O₆) = 6 × 12 + 12 × 1 + 6 × 16 = 72 + 12 + 96 = 180 g/mol.'
        },
        {
          question: 'Welches Volumen nehmen 2 Mol eines idealen Gases bei STP ein?',
          options: [
            '11,2 L',
            '22,4 L',
            '44,8 L',
            '67,2 L',
            '33,6 L'
          ],
          correctIndex: 2,
          explanation: 'V = n × Vm = 2 mol × 22,4 L/mol = 44,8 L. Das molare Volumen bei STP beträgt 22,4 L/mol.'
        }
      ]
    },
    {
      id: 'chem-kap4-uk2',
      title: 'Reaktionsgleichungen ausgleichen',
      content: `Eine chemische Reaktionsgleichung beschreibt eine Reaktion in Symbolen. Links stehen die **Edukte** (Ausgangsstoffe), rechts die **Produkte**, verbunden durch einen Reaktionspfeil (→).

Das fundamentale Prinzip: **Gesetz der Massenerhaltung** (Lavoisier, 1789). Bei einer chemischen Reaktion geht keine Masse verloren. Die Anzahl der Atome jedes Elements muss auf beiden Seiten gleich sein.

Eine nicht ausgeglichene Gleichung heißt **Reaktionsschema**. Erst durch Anpassen der **stöchiometrischen Koeffizienten** (Zahlen vor den Formeln) wird sie zur ausgeglichenen Reaktionsgleichung. Die Summenformeln selbst dürfen nie verändert werden (sie definieren die Identität der Stoffe).

Vorgehen: (1) Reaktionsschema aufschreiben mit korrekten Formeln. (2) Atome elementweise zählen. (3) Mit dem Element beginnen, das in den wenigsten Verbindungen vorkommt. (4) Koeffizienten anpassen, bis jedes Element auf beiden Seiten gleich häufig ist. (5) Kontrolle durch Nachzählen.

Beispiel **Verbrennung von Methan**: CH₄ + O₂ → CO₂ + H₂O wird zu CH₄ + 2 O₂ → CO₂ + 2 H₂O. Kontrolle: C: 1=1, H: 4=4, O: 4=4.

Aus den **stöchiometrischen Koeffizienten** liest man die **Molverhältnisse** ab. In 2 H₂ + O₂ → 2 H₂O bedeutet der Koeffizient: 2 Mol H₂ reagieren mit 1 Mol O₂ zu 2 Mol H₂O.

Bei Reaktionen mit mehreren Edukten bestimmt der **limitierende Reaktand** (das Edukt, das zuerst verbraucht wird) die maximale Produktmenge. Der Rest bleibt unreagiert. Die **Ausbeute** ist das Verhältnis der tatsächlichen zur theoretischen Produktmenge (in Prozent).`,
      merksätze: [
        'Gesetz der Massenerhaltung: Die Anzahl der Atome jedes Elements muss auf beiden Seiten der Reaktionsgleichung gleich sein. Koeffizienten werden angepasst, Summenformeln nie verändert.',
        'Die stöchiometrischen Koeffizienten geben die Molverhältnisse an. Der limitierende Reaktand bestimmt die maximale Produktmenge.'
      ],
      altfrage: {
        question: 'Was versteht man unter dem limitierenden Reaktanden?',
        answer: 'Der limitierende Reaktand ist das Edukt, das bei einer chemischen Reaktion als erstes vollständig verbraucht wird und somit die maximale Produktmenge bestimmt. Alle anderen Edukte sind im Überschuss vorhanden und bleiben teilweise unreagiert.'
      },
      klinischerBezug: 'Die Summengleichung der **aeroben Zellatmung** lautet: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + Energie (als ATP). Aus den stöchiometrischen Verhältnissen folgt: Pro Mol Glucose werden 6 Mol CO₂ ausgeatmet und 6 Mol O₂ verbraucht. Der **respiratorische Quotient** RQ = CO₂-Abgabe / O₂-Aufnahme = 6/6 = 1,0 (für reine Kohlenhydratverstoffwechselung). Bei Fettverstoffwechselung ist RQ ≈ 0,7, bei Proteinverstoffwechselung ≈ 0,8. Der RQ wird in der Lungenfunktionsdiagnostik und Stoffwechselanalyse genutzt.',
      selfTest: [
        {
          question: 'Wie lautet die ausgeglichene Gleichung für die Verbrennung von Ethanol (C₂H₅OH)?',
          options: [
            'C₂H₅OH + O₂ → CO₂ + H₂O',
            'C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O',
            'C₂H₅OH + 2 O₂ → 2 CO₂ + 2 H₂O',
            '2 C₂H₅OH + 3 O₂ → 4 CO₂ + 6 H₂O',
            'C₂H₅OH + 2 O₂ → 2 CO + 3 H₂O'
          ],
          correctIndex: 1,
          explanation: 'C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O. Kontrolle: C: 2=2, H: 6=6, O: 1+6=4+3=7. Die Gleichung ist ausgeglichen.'
        },
        {
          question: 'Was darf beim Ausgleichen einer Reaktionsgleichung NICHT verändert werden?',
          options: [
            'Die Koeffizienten vor den Summenformeln',
            'Die Summenformeln der beteiligten Stoffe',
            'Die Seite, auf der die Produkte stehen',
            'Die Aggregatzustandsangaben',
            'Die Reihenfolge der Edukte'
          ],
          correctIndex: 1,
          explanation: 'Die Summenformeln geben die Identität der Stoffe an und dürfen nie verändert werden. Nur die Koeffizienten vor den Formeln werden angepasst, um die Atombilanzen auszugleichen.'
        },
        {
          question: 'Bei der Reaktion 2 H₂ + O₂ → 2 H₂O: Wie viel Mol Wasser entstehen aus 4 Mol H₂ und 1 Mol O₂?',
          options: [
            '4 Mol',
            '2 Mol',
            '3 Mol',
            '1 Mol',
            '5 Mol'
          ],
          correctIndex: 1,
          explanation: 'O₂ ist der limitierende Reaktand: 1 Mol O₂ reagiert mit 2 Mol H₂ zu 2 Mol H₂O. Die übrigen 2 Mol H₂ bleiben unreagiert. Die maximale Produktmenge wird durch den limitierenden Reaktanden bestimmt.'
        }
      ]
    },
    {
      id: 'chem-kap4-uk3',
      title: 'Konzentrationsangaben',
      content: `Die Zusammensetzung von Lösungen wird quantitativ beschrieben.

Die **Stoffmengenkonzentration** c (Molarität) ist die gebräuchlichste Angabe. Definition: c = n / V (Stoffmenge geteilt durch Volumen der Lösung), Einheit: mol/L (= M, molar). Eine 1-molare Lösung (1 M) enthält 1 Mol gelösten Stoff pro Liter Lösung. Herstellung: Masse abwiegen (m = c × V × M), lösen und auf das gewünschte Volumen auffüllen. Wichtig: Das Volumen bezieht sich auf die fertige Lösung, nicht auf das Lösungsmittel. Im klinischen Alltag: mmol/L (z. B. Blutelektrolyte).

Der **Massenanteil** w (Massenprozent) gibt an, welcher Anteil der Gesamtmasse auf den gelösten Stoff entfällt: w = m(gelöster Stoff) / m(Lösung), häufig in Prozent. Beispiel: 0,9 % Kochsalzlösung (physiologische NaCl-Lösung) enthält 0,9 g NaCl pro 100 g Lösung.

Der **Volumenanteil** φ wird für Flüssigkeitsgemische verwendet: φ = V(Komponente) / V(Lösung). Alkoholgehalt in % vol.

Die **Massenkonzentration** β gibt die Masse des gelösten Stoffes pro Volumen an: β = m / V, in g/L. Wird in der klinischen Chemie oft genutzt, wenn die molare Masse nicht bekannt ist (z. B. Proteine).

Umrechnung zwischen den Konzentrationsangaben: c = w × ρ(Lösung) / M (ρ = Dichte der Lösung, M = molare Masse). Für verdünnte wässrige Lösungen kann ρ ≈ 1 g/mL angenommen werden.

Weitere Maße: **Molalität** b = Stoffmenge pro Masse des Lösungsmittels (mol/kg, temperaturunabhängig). **Molenbruch** x = Stoffmenge einer Komponente / Gesamtstoffmenge.

Beim Verdünnen gilt das **Verdünnungsgesetz**: c₁ × V₁ = c₂ × V₂ (Indizes 1 = vor Verdünnung, 2 = nach Verdünnung). Fundamental für Verdünnungsreihen in Analytik und Diagnostik.`,
      merksätze: [
        'Molarität: c = n/V (mol/L). Massenanteil: w = m(Stoff)/m(Lösung). Massenkonzentration: β = m/V (g/L). Umrechnung: c = w × ρ / M.',
        'Verdünnungsgesetz: c₁ × V₁ = c₂ × V₂. Molalität b = n/m(Lösungsmittel) ist temperaturunabhängig.'
      ],
      altfrage: {
        question: 'Wie berechnet man die Stoffmengenkonzentration c einer Lösung?',
        answer: 'Die Stoffmengenkonzentration (Molarität) berechnet sich als c = n/V, also Stoffmenge des gelösten Stoffes geteilt durch das Volumen der Lösung, angegeben in mol/L. Alternativ: c = m/(M × V), wobei m die Masse, M die molare Masse und V das Lösungsvolumen ist.'
      },
      klinischerBezug: '**Blutzucker** wird in mg/dL (Massenkonzentration) oder mmol/L (Molarität) angegeben. Normalwert: 70–100 mg/dL = 3,9–5,6 mmol/L (nüchtern). Umrechnung: mg/dL × 0,0555 = mmol/L (für Glucose mit M = 180 g/mol). **Elektrolyte** werden in mmol/L angegeben (siehe Unterkapitel 1). Bei der **Infusionstherapie**: 5 % Glucoselösung (w = 0,05) enthält 50 g Glucose pro Liter → Energielieferant (1 g Glucose ≈ 4 kcal). Das **Verdünnungsgesetz** wird täglich beim Ansetzen von Medikamenten-Infusionen angewandt (z. B. Antibiotika aus Trockensubstanz).',
      selfTest: [
        {
          question: 'Wie viel Gramm NaCl (M = 58,44 g/mol) benötigt man für 500 mL einer 0,5-molaren Lösung?',
          options: [
            '29,22 g',
            '14,61 g',
            '58,44 g',
            '7,31 g',
            '23,38 g'
          ],
          correctIndex: 1,
          explanation: 'm = c × V × M = 0,5 mol/L × 0,5 L × 58,44 g/mol = 14,61 g NaCl.'
        },
        {
          question: 'Was gibt der Massenanteil w einer Lösung an?',
          options: [
            'Die Stoffmenge pro Volumen',
            'Die Masse des gelösten Stoffes pro Gesamtmasse der Lösung',
            'Die Anzahl der Teilchen pro Liter',
            'Die Dichte der Lösung',
            'Das Volumen des gelösten Stoffes pro Gesamtvolumen'
          ],
          correctIndex: 1,
          explanation: 'Der Massenanteil w = m(gelöster Stoff) / m(Lösung) gibt an, welcher Massenanteil der Lösung auf den gelösten Stoff entfällt. Bei Angabe in Prozent spricht man von Massenprozent.'
        },
        {
          question: 'Man verdünnt 100 mL einer 2 M HCl-Lösung auf 500 mL. Welche Konzentration hat die verdünnte Lösung?',
          options: [
            '0,2 M',
            '0,4 M',
            '1,0 M',
            '0,8 M',
            '0,5 M'
          ],
          correctIndex: 1,
          explanation: 'Verdünnungsgesetz: c₁ × V₁ = c₂ × V₂. Also: 2 M × 100 mL = c₂ × 500 mL → c₂ = 200/500 = 0,4 M.'
        }
      ]
    }
  ]
};
