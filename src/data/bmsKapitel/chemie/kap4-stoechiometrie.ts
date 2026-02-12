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
      content: `Das Mol ist die SI-Basiseinheit der Stoffmenge und bildet die Brücke zwischen der mikroskopischen Welt der Atome und Moleküle und der makroskopischen Welt des Labors. Ein Mol enthält exakt 6,02214076 × 10²³ Teilchen (Atome, Moleküle, Ionen oder andere Entitäten). Diese Zahl wird als Avogadro-Konstante Nₐ bezeichnet und ist seit 2019 als exakter Wert definiert. Der Name geht auf den italienischen Physiker Amedeo Avogadro zurück, der 1811 die Hypothese aufstellte, dass gleiche Volumina verschiedener Gase bei gleicher Temperatur und gleichem Druck die gleiche Anzahl von Teilchen enthalten. Die Stoffmenge n wird in Mol (mol) angegeben und berechnet sich aus der Masse m und der molaren Masse M gemäß n = m / M.

Die molare Masse M gibt die Masse eines Mols eines Stoffes in Gramm pro Mol (g/mol) an und entspricht numerisch der relativen Atom- bzw. Molekülmasse in der atomaren Masseneinheit u. Für Elemente liest man die molare Masse direkt aus dem Periodensystem ab: Kohlenstoff hat M = 12,01 g/mol, Sauerstoff M = 16,00 g/mol. Für Verbindungen berechnet man die molare Masse als Summe der molaren Massen aller Atome in der Summenformel. Beispielsweise hat Wasser (H₂O) die molare Masse M = 2 × 1,008 + 16,00 = 18,02 g/mol. Das bedeutet: 18,02 g Wasser enthalten 6,022 × 10²³ Wassermoleküle, also genau ein Mol. Diese Umrechnung ist die Grundlage für alle stöchiometrischen Berechnungen in der Chemie.

Das molare Volumen Vm gibt das Volumen an, das ein Mol eines idealen Gases unter Standardbedingungen (STP: 0 °C = 273,15 K und 1,013 bar = 101,325 kPa) einnimmt. Es beträgt 22,414 L/mol und ist für alle idealen Gase gleich, unabhängig von der Art des Gases (Avogadro-Gesetz). Bei Raumtemperatur (25 °C, 1 bar) beträgt das molare Volumen etwa 24,8 L/mol. Dieses Konzept ermöglicht die einfache Umrechnung zwischen Gasvolumen und Stoffmenge: n = V / Vm. Es ist wichtig zu beachten, dass das molare Volumen nur für Gase sinnvoll ist, da Flüssigkeiten und Feststoffe stark unterschiedliche Dichten haben und ihr Volumen daher nicht allein von der Stoffmenge abhängt. Die Zusammenhänge zwischen Masse, Stoffmenge, Teilchenzahl und Gasvolumen sind die vier zentralen Größen der Stöchiometrie: n = m/M = N/Nₐ = V/Vm (für Gase bei STP).`,
      merksaetze: [
        'Ein Mol = 6,022 × 10²³ Teilchen (Avogadro-Konstante). Die molare Masse M (g/mol) entspricht numerisch der relativen Atommasse. Stoffmenge: n = m/M.',
        'Das molare Volumen eines idealen Gases bei STP beträgt 22,4 L/mol (gilt für alle idealen Gase gleichermaßen). Zentrale Umrechnungen: n = m/M = N/Nₐ = V/Vm.'
      ],
      altfrage: {
        question: 'Welches Volumen nimmt 1 Mol eines idealen Gases bei Standardbedingungen (STP) ein?',
        answer: 'Ein Mol eines idealen Gases nimmt bei STP (0 °C, 1,013 bar) ein Volumen von 22,414 L ein. Dieser Wert gilt für alle idealen Gase, unabhängig von ihrer Art (Avogadro-Gesetz).'
      },
      klinischerBezug: 'Das Mol-Konzept ist die Grundlage für die Dosierung von Medikamenten und Infusionslösungen. So wird die Konzentration von Elektrolyten im Blut (z. B. Na⁺: 135–145 mmol/L, K⁺: 3,5–5,0 mmol/L) in Millimol pro Liter angegeben. Auch in der Pharmazie werden Wirkstoffdosen häufig in Mol oder Millimol berechnet, um die exakte Teilchenanzahl und nicht nur die Masse zu berücksichtigen.',
      selfTest: [
        {
          question: 'Wie viele Moleküle sind in 36,04 g Wasser (M = 18,02 g/mol) enthalten?',
          options: [
            '6,022 × 10²³',
            '1,204 × 10²⁴',
            '3,011 × 10²³',
            '1,806 × 10²⁴'
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
            '196 g/mol'
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
            '67,2 L'
          ],
          correctIndex: 2,
          explanation: 'V = n × Vm = 2 mol × 22,4 L/mol = 44,8 L. Das molare Volumen bei STP beträgt 22,4 L/mol.'
        }
      ]
    },
    {
      id: 'chem-kap4-uk2',
      title: 'Reaktionsgleichungen ausgleichen',
      content: `Eine chemische Reaktionsgleichung beschreibt den Ablauf einer chemischen Reaktion in symbolischer Form. Auf der linken Seite stehen die Edukte (Ausgangsstoffe), auf der rechten Seite die Produkte, verbunden durch einen Reaktionspfeil (→). Das fundamentale Prinzip hinter jeder Reaktionsgleichung ist das Gesetz der Massenerhaltung (Lavoisier, 1789): Bei einer chemischen Reaktion geht keine Masse verloren und keine Masse kommt hinzu; die Gesamtmasse der Edukte ist gleich der Gesamtmasse der Produkte. Auf atomarer Ebene bedeutet dies, dass die Anzahl der Atome jedes Elements auf beiden Seiten der Gleichung identisch sein muss. Eine noch nicht ausgeglichene Gleichung heißt Reaktionsschema; erst durch das Anpassen der stöchiometrischen Koeffizienten wird sie zur ausgeglichenen Reaktionsgleichung.

Das Ausgleichen (Bilanzieren) einer Reaktionsgleichung erfolgt durch das systematische Anpassen der Koeffizienten vor den Summenformeln der beteiligten Stoffe. Die Summenformeln selbst dürfen dabei niemals verändert werden, da sie die Identität der Stoffe widerspiegeln. Ein bewährtes Vorgehen ist: (1) Die Gleichung zunächst aufschreiben mit den korrekten Summenformeln. (2) Die Atome elementweise zählen. (3) Mit dem Element beginnen, das in den wenigsten Verbindungen vorkommt (oft Metalle oder komplexere Gruppen). (4) Koeffizienten anpassen, bis jedes Element auf beiden Seiten gleich häufig vorkommt. (5) Kontrolle durch Nachzählen aller Atome. Als Beispiel: Die Verbrennung von Methan CH₄ + O₂ → CO₂ + H₂O wird zu CH₄ + 2 O₂ → CO₂ + 2 H₂O (C: 1=1, H: 4=4, O: 4=4).

Aus den stöchiometrischen Koeffizienten lassen sich die Stoffmengenverhältnisse (Molverhältnisse) der Reaktionsteilnehmer direkt ablesen. In der ausgeglichenen Gleichung 2 H₂ + O₂ → 2 H₂O bedeutet der Koeffizient, dass 2 Mol Wasserstoff mit 1 Mol Sauerstoff zu 2 Mol Wasser reagieren. Diese Verhältnisse sind die Grundlage für stöchiometrische Berechnungen, bei denen man bestimmt, wie viel Produkt aus einer gegebenen Menge Edukt entsteht oder wie viel eines Edukts benötigt wird. Bei Reaktionen mit zwei oder mehr Edukten bestimmt der limitierende Reaktand (das Edukt, das zuerst verbraucht wird) die maximale Produktmenge. Das im Überschuss vorhandene Edukt bleibt teilweise unreagiert zurück. Die Ausbeute einer Reaktion ist das Verhältnis der tatsächlich erhaltenen Produktmenge zur theoretisch berechneten Produktmenge, angegeben in Prozent.`,
      merksaetze: [
        'Gesetz der Massenerhaltung: Die Anzahl der Atome jedes Elements muss auf beiden Seiten der Reaktionsgleichung gleich sein. Koeffizienten werden angepasst, Summenformeln nie verändert.',
        'Die stöchiometrischen Koeffizienten geben die Molverhältnisse an. Der limitierende Reaktand bestimmt die maximale Produktmenge.'
      ],
      altfrage: {
        question: 'Was versteht man unter dem limitierenden Reaktanden?',
        answer: 'Der limitierende Reaktand ist das Edukt, das bei einer chemischen Reaktion als erstes vollständig verbraucht wird und somit die maximale Produktmenge bestimmt. Alle anderen Edukte sind im Überschuss vorhanden und bleiben teilweise unreagiert.'
      },
      klinischerBezug: 'Das Ausgleichen von Reaktionsgleichungen ist essenziell für das Verständnis biochemischer Stoffwechselwege. Die Summengleichung der aeroben Zellatmung lautet: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + Energie (als ATP). Aus den stöchiometrischen Verhältnissen lässt sich berechnen, dass pro Mol Glucose 6 Mol CO₂ ausgeatmet werden, was für die Berechnung des respiratorischen Quotienten in der Lungenfunktionsdiagnostik relevant ist.',
      selfTest: [
        {
          question: 'Wie lautet die ausgeglichene Gleichung für die Verbrennung von Ethanol (C₂H₅OH)?',
          options: [
            'C₂H₅OH + O₂ → CO₂ + H₂O',
            'C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O',
            'C₂H₅OH + 2 O₂ → 2 CO₂ + 2 H₂O',
            '2 C₂H₅OH + 3 O₂ → 4 CO₂ + 6 H₂O'
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
            'Die Aggregatzustandsangaben'
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
            '1 Mol'
          ],
          correctIndex: 1,
          explanation: 'O₂ ist der limitierende Reaktand: 1 Mol O₂ reagiert mit 2 Mol H₂ zu 2 Mol H₂O. Die übrigen 2 Mol H₂ bleiben unreagiert. Die maximale Produktmenge wird durch den limitierenden Reaktanden bestimmt.'
        }
      ]
    },
    {
      id: 'chem-kap4-uk3',
      title: 'Konzentrationsangaben',
      content: `In der Chemie und Medizin ist es unverzichtbar, die Zusammensetzung von Lösungen quantitativ zu beschreiben. Die gebräuchlichste Konzentrationsangabe ist die Stoffmengenkonzentration c (Molarität), definiert als die Stoffmenge des gelösten Stoffes pro Volumen der Lösung: c = n / V, angegeben in mol/L (= M, molar). Eine 1-molare Lösung (1 M) enthält 1 Mol des gelösten Stoffes pro Liter Lösung. Zur Herstellung einer solchen Lösung wiegt man die entsprechende Masse des Stoffes ab (m = n × M = c × V × M), löst ihn in einem Lösungsmittel und füllt auf das gewünschte Volumen auf. Wichtig: Das Volumen bezieht sich auf die fertige Lösung, nicht auf das Lösungsmittel allein. Im klinischen Alltag werden häufig Millimol pro Liter (mmol/L) verwendet, etwa für Blutelektrolytwerte.

Der Massenanteil w (Massenprozent) gibt an, welcher Anteil der Gesamtmasse einer Lösung auf den gelösten Stoff entfällt: w = m(gelöster Stoff) / m(Lösung), häufig in Prozent angegeben. So enthält eine 0,9%ige Kochsalzlösung (physiologische NaCl-Lösung) 0,9 g NaCl pro 100 g Lösung. Der Volumenanteil φ wird analog für Flüssigkeitsgemische verwendet: φ = V(Komponente) / V(Lösung). Alkoholgehalte in Getränken werden beispielsweise in Volumenprozent (% vol) angegeben. Die Massenkonzentration β (oder ρ*) gibt die Masse des gelösten Stoffes pro Volumen der Lösung an: β = m / V, in g/L. Diese Angabe wird häufig in der klinischen Chemie verwendet, wenn die molare Masse des gelösten Stoffes nicht bekannt ist (z. B. bei Proteinen).

Die Umrechnung zwischen den verschiedenen Konzentrationsangaben erfordert die Kenntnis der molaren Masse und der Dichte der Lösung. Die Beziehung zwischen Molarität und Massenanteil lautet: c = w × ρ(Lösung) / M, wobei ρ die Dichte der Lösung und M die molare Masse des gelösten Stoffes ist. Für verdünnte wässrige Lösungen kann die Dichte oft näherungsweise als 1 g/mL angenommen werden. Weitere wichtige Konzentrationsmaße sind die Molalität b (Stoffmenge pro Masse des Lösungsmittels, mol/kg), die temperaturunabhängig ist, und der Molenbruch x (Stoffmenge einer Komponente geteilt durch die Gesamtstoffmenge aller Komponenten). Beim Verdünnen einer Lösung gilt das Verdünnungsgesetz: c₁ × V₁ = c₂ × V₂, wobei die Indizes 1 und 2 für vor und nach der Verdünnung stehen. Diese Gleichung ist fundamental für die Herstellung von Verdünnungsreihen in der Analytik und Diagnostik.`,
      merksaetze: [
        'Molarität: c = n/V (mol/L). Massenanteil: w = m(Stoff)/m(Lösung). Massenkonzentration: β = m/V (g/L). Umrechnung: c = w × ρ / M.',
        'Verdünnungsgesetz: c₁ × V₁ = c₂ × V₂. Molalität b = n/m(Lösungsmittel) ist temperaturunabhängig.'
      ],
      altfrage: {
        question: 'Wie berechnet man die Stoffmengenkonzentration c einer Lösung?',
        answer: 'Die Stoffmengenkonzentration (Molarität) berechnet sich als c = n/V, also Stoffmenge des gelösten Stoffes geteilt durch das Volumen der Lösung, angegeben in mol/L. Alternativ: c = m/(M × V), wobei m die Masse, M die molare Masse und V das Lösungsvolumen ist.'
      },
      klinischerBezug: 'Konzentrationsangaben sind im klinischen Alltag allgegenwärtig. Blutzucker wird in mg/dL (Massenkonzentration) oder mmol/L (Molarität) angegeben, Elektrolyte in mmol/L. Bei der Infusionstherapie muss die Konzentration exakt berechnet werden: Eine 5%ige Glucoselösung (w = 0,05) enthält 50 g Glucose pro Liter und dient als Energielieferant. Das Verdünnungsgesetz wird täglich beim Ansetzen von Medikamenten-Infusionen angewandt.',
      selfTest: [
        {
          question: 'Wie viel Gramm NaCl (M = 58,44 g/mol) benötigt man für 500 mL einer 0,5-molaren Lösung?',
          options: [
            '29,22 g',
            '14,61 g',
            '58,44 g',
            '7,31 g'
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
            'Die Dichte der Lösung'
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
            '0,8 M'
          ],
          correctIndex: 1,
          explanation: 'Verdünnungsgesetz: c₁ × V₁ = c₂ × V₂. Also: 2 M × 100 mL = c₂ × 500 mL → c₂ = 200/500 = 0,4 M.'
        }
      ]
    }
  ]
};
