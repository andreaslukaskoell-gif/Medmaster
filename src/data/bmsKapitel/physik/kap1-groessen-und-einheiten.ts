import type { Kapitel } from '../types';

export const physKap1: Kapitel = {
  id: 'phys-kap1',
  title: 'Größen und Einheiten',
  subject: 'physik',
  icon: '📏',
  estimatedTime: '40 min',
  unterkapitel: [
    {
      id: 'ph-1-01',
      title: 'SI-Grundgrößen und abgeleitete Einheiten',
      content: `Die Physik beschreibt die Natur mit Hilfe von Größen — messbaren Eigenschaften wie Länge, Masse oder Zeit. Um weltweit vergleichbare Messungen zu ermöglichen, haben sich Wissenschaftlerinnen und Wissenschaftler auf ein einheitliches System geeinigt: das Internationale Einheitensystem (SI, Système International d'unités). Es bildet das Fundament jeder exakten Naturwissenschaft und damit auch der Medizin.

Das SI-System definiert sieben Basisgrößen, aus denen sich alle anderen physikalischen Größen ableiten lassen. Die **Länge** wird in Meter (m) gemessen — ursprünglich als ein Zehnmillionstel des Weges vom Nordpol zum Äquator festgelegt, heute über die Lichtgeschwindigkeit definiert. Die **Masse** hat die Einheit Kilogramm (kg); bis 2019 war ein physisches Platiniridiumzylinder in Paris der internationale Standard, seither wird das Kilogramm über die Planck-Konstante definiert. Die **Zeit** in Sekunden (s) wird durch Atomuhren mit einer Genauigkeit von 10⁻¹⁸ s realisiert. Die **elektrische Stromstärke** in Ampere (A), die **Temperatur** in Kelvin (K), die **Stoffmenge** in Mol (mol) und die **Lichtstärke** in Candela (cd) vervollständigen das System.

Warum gerade diese sieben? Sie sind unabhängig voneinander — keine lässt sich aus den anderen ableiten — und zusammen reichen sie aus, um jede physikalische Größe zu beschreiben. Das Konzept ist elegant: Alle anderen Einheiten entstehen durch Multiplikation und Division dieser Basiseinheiten.

**Abgeleitete Einheiten** entstehen durch Kombination der Basiseinheiten. Die Kraft in Newton (N) entspricht kg·m/s² — sie beschreibt, welche Kraft nötig ist, um 1 kg mit 1 m/s² zu beschleunigen. Der Druck in Pascal (Pa) ist N/m² = kg/(m·s²), also Kraft pro Fläche. Die Energie in Joule (J) entspricht N·m = kg·m²/s² — Arbeit ist Kraft mal Weg. Die Leistung in Watt (W) ist J/s. Für elektromagnetische Größen kommen hinzu: Volt (V = kg·m²/(A·s³)) für die elektrische Spannung, Ohm (Ω = V/A) für den Widerstand, Coulomb (C = A·s) für die Ladung, und Farad (F = C/V) für die Kapazität.

In der Medizin begegnen uns viele dieser Einheiten täglich. Der Blutdruck wird traditionell in **mmHg** (Millimeter Quecksilbersäule) angegeben, weil frühe Sphygmomanometer mit Quecksilbersäulen arbeiteten. Dabei entspricht 1 mmHg = 133,3 Pa. Ein normaler systolischer Blutdruck von 120 mmHg entspricht also etwa 16.000 Pa oder 16 kPa. Die **Osmolalität** von Blutplasma wird in mOsm/kg angegeben (Normalwert: 280–295 mOsm/kg) — eine abgeleitete Einheit, die die gelöste Teilchenkonzentration beschreibt. Laborwerte wie Serumnatrium werden in mmol/L, Kreatinin in μmol/L, Hämoglobin in g/dL angegeben. All diese Einheiten sind Kombinationen der SI-Basiseinheiten mit Präfixen.

Die Kenntnis der Einheiten ermöglicht eine wichtige Kontrollmethode: die **Dimensionsanalyse**. Wenn man eine Formel prüft, indem man nur die Einheiten betrachtet, lassen sich Rechenfehler aufdecken und unbekannte Formeln herleiten. Stimmen die Einheiten auf beiden Seiten einer Gleichung überein, ist die Formel zumindest dimensionell korrekt — ein notwendiges, wenn auch nicht hinreichendes Kriterium für ihre Richtigkeit.`,
      lernziele: [
        'Die 7 SI-Basisgrößen und ihre Einheiten nennen und erläutern',
        'Wichtige abgeleitete Einheiten aus den Basiseinheiten ableiten',
        'Medizinisch relevante Einheiten (mmHg, mOsm, μmol/L) kennen und umrechnen',
        'Dimensionsanalyse zur Formelprüfung anwenden',
      ],
      sections: [
        {
          heading: 'Die sieben SI-Basisgrößen',
          text: 'Das internationale Einheitensystem basiert auf sieben unabhängigen Basisgrößen: Länge (m), Masse (kg), Zeit (s), elektrische Stromstärke (A), thermodynamische Temperatur (K), Stoffmenge (mol) und Lichtstärke (cd). Diese Größen wurden so gewählt, dass sie unabhängig voneinander sind und gemeinsam jede messbare physikalische Eigenschaft beschreiben können. Seit 2019 sind alle SI-Einheiten über fundamentale Naturkonstanten definiert, was sie zeitlos und reproduzierbar macht.',
          merksatz: 'Merkhilfe: "Lange Macht Zirka Selten Traurige Menschen Lächeln" — Länge, Masse, Zeit, Stromstärke, Temperatur, Mol, Lichtstärke',
        },
        {
          heading: 'Abgeleitete Einheiten in der Physik',
          text: 'Durch Multiplikation und Division der Basiseinheiten entstehen abgeleitete Einheiten. Newton (N = kg·m/s²) misst Kraft, Pascal (Pa = N/m²) misst Druck, Joule (J = N·m) misst Energie, und Watt (W = J/s) misst Leistung. Elektrische Größen: Volt (V = kg·m²/(A·s³)), Ohm (Ω = V/A), Coulomb (C = A·s), Farad (F = C/V). Das Herz dieser Systematik ist, dass man durch bloße Einheitenanalyse prüfen kann, ob eine Formel korrekt sein kann — eine mächtige Technik in Prüfungssituationen.',
        },
        {
          heading: 'Medizinische Einheiten im klinischen Alltag',
          text: 'Die Medizin verwendet teils historisch gewachsene Einheiten: Blutdruck in mmHg (1 mmHg = 133,3 Pa), Blutzucker in mg/dL oder mmol/L (1 mmol/L Glukose = 18 mg/dL), Hämoglobin in g/dL, Serumwerte wie Kreatinin in μmol/L. Diese Werte sind allesamt Kombinationen aus SI-Einheiten und Präfixen. Das Verständnis der Umrechnungen ist für klinische Entscheidungen essenziell — ein pO₂ von 80 mmHg entspricht etwa 10,7 kPa, was für die Interpretation von Blutgasanalysen wichtig ist.',
        },
      ],
      merksätze: [
        'Die 7 SI-Basisgrößen: Länge (m), Masse (kg), Zeit (s), Stromstärke (A), Temperatur (K), Stoffmenge (mol), Lichtstärke (cd)',
        'Abgeleitete Einheiten: Newton = kg·m/s², Pascal = N/m², Joule = N·m, Watt = J/s',
        '1 mmHg = 133,3 Pa; pO₂ in mmHg × 0,133 = pO₂ in kPa',
      ],
      altfrage: {
        question: 'Eine Formel lautet: P = F · v. Welche Einheit hat P, wenn F in Newton und v in m/s angegeben ist?',
        answer: 'P = F · v = N · m/s = (kg·m/s²) · (m/s) = kg·m²/s³ = J/s = Watt (W). Leistung wird in Watt gemessen. Die Dimensionsanalyse bestätigt: Kraft mal Geschwindigkeit ergibt Leistung.',
      },
      klinischerBezug: 'In der Intensivmedizin werden Drücke, Flussraten und Sauerstoffpartialdrücke in verschiedenen Einheitensystemen angegeben. Beatmungsgeräte zeigen Atemwegsdruck in mbar oder cmH₂O, Blutgasanalysen liefern pO₂ in mmHg oder kPa je nach Gerät. Fehler bei der Einheitenumrechnung können zu lebensbedrohlichen Fehleinschätzungen führen — weshalb die Beherrschung der SI-Einheiten und ihrer Umrechnungsfaktoren eine Kernkompetenz jeder Ärztin und jedes Arztes ist.',
      selfTest: [
        {
          question: 'Welche der folgenden ist KEINE SI-Basiseinheit?',
          options: ['Kilogramm (kg)', 'Kelvin (K)', 'Newton (N)', 'Sekunde (s)', 'Mol (mol)'],
          correctIndex: 2,
          explanation: 'Newton (N) ist eine abgeleitete Einheit: N = kg·m/s². Die SI-Basiseinheiten sind Meter, Kilogramm, Sekunde, Ampere, Kelvin, Mol und Candela. Newton wird aus Basiseinheiten zusammengesetzt und ist selbst keine Basisgröße.',
          hints: ['Überlege, welche Einheiten sich aus anderen zusammensetzen lassen.', 'Kraft = Masse × Beschleunigung — welche Einheiten stecken darin?'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Ein Blutdruckwert von 120 mmHg entspricht ungefähr wie viel Pascal?',
          options: ['120 Pa', '1200 Pa', '16000 Pa', '120000 Pa', '1600 Pa'],
          correctIndex: 2,
          explanation: 'Ein mmHg entspricht 133,3 Pa. Daher: 120 mmHg × 133,3 Pa/mmHg ≈ 16.000 Pa = 16 kPa. Dieser Wert entspricht dem typischen systolischen Blutdruck eines gesunden Erwachsenen.',
          hints: ['1 mmHg = 133,3 Pa — diese Umrechnung ist im klinischen Alltag wichtig.', 'Multipliziere den mmHg-Wert mit dem Umrechnungsfaktor.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Die Einheit der Energie, Joule, lässt sich als welche Kombination von Basiseinheiten schreiben?',
          options: ['kg·m/s', 'kg·m²/s²', 'kg/m·s²', 'kg·m·s', 'kg²·m/s²'],
          correctIndex: 1,
          explanation: 'Joule = Newton × Meter = (kg·m/s²) × m = kg·m²/s². Energie ist das Produkt aus Kraft und Weg, was sich in Basiseinheiten als kg·m²/s² ausdrückt. Diese Schreibweise hilft, die physikalische Bedeutung der Energieeinheit zu verstehen.',
          hints: ['Starte mit J = N·m und ersetze Newton durch seine Definition.', 'Newton = kg·m/s², also N·m = ?'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Ein Patient hat einen Serumkreatininwert von 150 μmol/L. Welche Aussage ist korrekt?',
          options: [
            '150 μmol/L entspricht 0,15 mmol/L',
            '150 μmol/L entspricht 1,5 mmol/L',
            '150 μmol/L entspricht 15 mmol/L',
            '150 μmol/L entspricht 0,015 mmol/L',
            '150 μmol/L entspricht 150 nmol/L',
          ],
          correctIndex: 0,
          explanation: 'Mikro (μ) bedeutet 10⁻⁶, Milli (m) bedeutet 10⁻³. Daher ist 1 μmol = 10⁻³ mmol. 150 μmol/L = 150 × 10⁻³ mmol/L = 0,15 mmol/L. Ein Kreatinin von 150 μmol/L entspricht 0,15 mmol/L und liegt oberhalb des Normbereichs (53–97 μmol/L bei Männern), was auf eine eingeschränkte Nierenfunktion hinweist.',
          hints: ['μ (Mikro) = 10⁻⁶, m (Milli) = 10⁻³ — also μ ist 1000-mal kleiner als m.', 'Teile 150 durch 1000, um von μmol auf mmol umzurechnen.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welche Methode eignet sich am besten, um zu prüfen, ob eine physikalische Formel korrekt sein kann?',
          options: [
            'Numerisches Einsetzen von Zahlenwerten',
            'Dimensionsanalyse (Einheitenprüfung)',
            'Vergleich mit ähnlichen Formeln im Lehrbuch',
            'Grafische Darstellung der Funktion',
            'Berechnung des Grenzwerts für große Werte',
          ],
          correctIndex: 1,
          explanation: 'Die Dimensionsanalyse prüft, ob die Einheiten auf beiden Seiten einer Gleichung übereinstimmen. Wenn links "Meter" steht und rechts "Kilogramm", kann die Formel nicht korrekt sein. Diese Methode ist schnell, sicher und in Prüfungssituationen sehr wertvoll, auch wenn sie keine inhaltliche Korrektheit garantiert.',
          hints: ['Physikalische Gleichungen müssen auf beiden Seiten dieselbe Dimension haben.', 'Ersetze alle Größen durch ihre Einheiten und prüfe, ob sie sich kürzen.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welche Einheit hat die elektrische Leistung P = U·I?',
          options: ['Ohm (Ω)', 'Coulomb (C)', 'Watt (W)', 'Farad (F)', 'Volt·Ampere hat keine eigene Einheit'],
          correctIndex: 2,
          explanation: 'Leistung P = U × I, mit U in Volt (V) und I in Ampere (A). Daher P in V·A = (kg·m²/(A·s³)) · A = kg·m²/s³ = J/s = Watt (W). Watt ist die Einheit für alle Arten von Leistung — mechanische, elektrische und thermische.',
          hints: ['Leistung ist immer Energie pro Zeit: P = E/t = J/s = W.', 'Prüfe: V × A = W; dies ist eine wichtige Beziehung für Elektromedizin.'],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ph-1-02',
      title: 'Präfixe und wissenschaftliche Notation',
      content: `In der Naturwissenschaft begegnen uns Zahlen von unvorstellbarer Spannweite: Die Masse eines Elektrons beträgt 9,109 × 10⁻³¹ kg, die Entfernung von der Erde zur Sonne beträgt 1,496 × 10¹¹ m. Ohne eine systematische Notation wären solche Zahlen kaum handhabbar. Die **wissenschaftliche Notation** und die **SI-Präfixe** lösen dieses Problem elegant.

Die wissenschaftliche Notation schreibt jede Zahl in der Form a × 10ⁿ, wobei 1 ≤ a < 10 und n eine ganze Zahl ist. Die Avogadro-Zahl 602.200.000.000.000.000.000.000 wird zu 6,022 × 10²³ — kompakt und präzise. Die Boltzmann-Konstante 0,0000000000000000000000138 J/K wird zu 1,38 × 10⁻²³ J/K. Diese Schreibweise macht Rechenwege übersichtlicher und reduziert Fehler durch das Übersehen von Nullen.

Das Rechnen mit Zehnerpotenzen folgt einfachen Regeln. Bei der **Multiplikation** werden die Exponenten addiert: 10³ × 10⁴ = 10⁷. Bei der **Division** werden sie subtrahiert: 10⁶/10² = 10⁴. Bei der **Addition und Subtraktion** müssen die Zehnerpotenzen zunächst angeglichen werden: 3 × 10³ + 2 × 10² = 30 × 10² + 2 × 10² = 32 × 10² = 3,2 × 10³. Diese Regeln sind nicht nur theoretisch — in der Medizin multipliziert man täglich Konzentrationen mit Volumina, dividiert Dosen durch Körpergewichte.

Die **SI-Präfixe** sind Abkürzungen für Zehnerpotenzen, die direkt an die Einheit angehängt werden. Im subatomaren Bereich: Femto (f, 10⁻¹⁵) — die Größenordnung von Atomkernen; Piko (p, 10⁻¹²) — Pikomol-Konzentrationen von Hormonen; Nano (n, 10⁻⁹) — Nanometer-Größe von Proteinen und DNA-Breite; Mikro (μ, 10⁻⁶) — Mikrometer-Größe von Bakterien und Blutzellen; Milli (m, 10⁻³) — Millimeter in der klinischen Anatomie. Im großen Bereich: Kilo (k, 10³) — Kilogramm Körpergewicht; Mega (M, 10⁶) — Megahertz bei MRI-Frequenzen; Giga (G, 10⁹) — Gigahertz in modernen Computerprozessoren; Tera (T, 10¹²) — Terabyte in Datenspeichern.

Im klinischen Labor begegnen wir täglich Präfixen. Ein normales Serumeisen liegt bei 10–30 **μmol**/L. Die Plasmaosmolalität beträgt 285–295 **m**Osm/kg. Das Herzminutenvolumen beträgt etwa 5 **L**. Der intraokulare Druck liegt bei 10–21 **mm**Hg. Die Kapillarbreite beträgt 5–10 **μm**. DNA-Helixwindungen liegen im **nm**-Bereich. Ein Verständnis dieser Präfixe ist keine akademische Übung — es ist eine klinische Notwendigkeit.

Ein häufiger Fehler bei Umrechnungen ist die Verwechslung der Richtung: Wenn man von kleiner Einheit zu größerer Einheit geht (z.B. von μmol zu mmol), muss die Zahl **kleiner** werden (÷1000), nicht größer. Ein Kreatinin von 150 μmol/L entspricht 0,15 mmol/L — teilen, nicht multiplizieren. Merkhilfe: "Von klein nach groß: Zahl kleiner machen." Dieser Fehler passiert in der Prüfung besonders leicht unter Zeitdruck.`,
      lernziele: [
        'Alle wichtigen SI-Präfixe von Femto bis Tera kennen und anwenden',
        'Zahlen in wissenschaftlicher Notation schreiben und damit rechnen',
        'Einheitenumrechnungen mit Präfixen korrekt durchführen',
        'Typische medizinische Größenordnungen einschätzen können',
      ],
      sections: [
        {
          heading: 'Die wichtigsten SI-Präfixe',
          text: 'SI-Präfixe stehen für Zehnerpotenzen: Femto (10⁻¹⁵), Piko (10⁻¹²), Nano (10⁻⁹), Mikro (10⁻⁶), Milli (10⁻³), Zenti (10⁻²), Dezi (10⁻¹), Kilo (10³), Mega (10⁶), Giga (10⁹), Tera (10¹²). Im medizinischen Alltag sind Nano bis Kilo die relevantesten Bereiche — von der DNA (nm) über Bakterien (μm) bis zum Körpergewicht (kg). Die Präfixe lassen sich auf jede SI-Einheit anwenden und machen das Schreiben extrem kleiner oder großer Zahlen handhabbar.',
          merksatz: 'Merkhilfe für die Kette: "Fröhliche Pinguine Naschen Manchmal Kohlrabi, Megabyte Gehört Tera" — Femto, Piko, Nano, Mikro (μ), Milli, Kilo, Mega, Giga, Tera',
        },
        {
          heading: 'Wissenschaftliche Notation und Rechenregeln',
          text: 'Jede Zahl wird als a × 10ⁿ mit 1 ≤ a < 10 geschrieben. Multiplikation: Exponenten addieren (10³ × 10⁴ = 10⁷). Division: Exponenten subtrahieren (10⁸/10³ = 10⁵). Beim Addieren und Subtrahieren zuerst die Exponenten angleichen. Die Avogadro-Zahl NA = 6,022 × 10²³ mol⁻¹ und die Boltzmann-Konstante kB = 1,38 × 10⁻²³ J/K sind medizinisch relevant: NA × kB = R = 8,314 J/(mol·K), die universelle Gaskonstante.',
        },
        {
          heading: 'Umrechnungen im klinischen Kontext',
          text: 'Häufige Umrechnungen: 5 mmol/L = 0,005 mol/L (÷1000); 120 nm = 1,2 × 10⁻⁷ m; 150 μmol/L = 0,15 mmol/L = 1,5 × 10⁻⁴ mol/L. Blutglukose: 5,6 mmol/L × 18 = 100,8 mg/dL (Umrechnung für USA-Einheiten). Merhregel: Von kleiner Einheit zu großer Einheit → Zahl wird kleiner (dividieren). Von großer Einheit zu kleiner → Zahl wird größer (multiplizieren).',
        },
      ],
      merksätze: [
        'Von klein nach groß (μ→m→k): Zahl wird kleiner (÷1000 pro Schritt)',
        'Exponenten bei Multiplikation addieren, bei Division subtrahieren',
        'Medizinisch relevant: nm (DNA), μm (Zellen), mm (Anatomie), kg (Masse), mmol/L (Konzentration)',
      ],
      altfrage: {
        question: 'Ein Patient erhält 2,5 mg/kg Propofol als Einleitungsdosis. Das Körpergewicht beträgt 80 kg. Wie viel Milligramm und wie viel Milliliter einer 10 mg/mL Lösung werden benötigt?',
        answer: 'Dosis = 2,5 mg/kg × 80 kg = 200 mg. Volumen: 200 mg ÷ 10 mg/mL = 20 mL. Die Berechnung kombiniert Einheitenumrechnung mit dem Konzept der Konzentration (mg/mL). Das Ergebnis ist plausibel für eine Narkoseeinleitung. Wichtig: Die Einheiten müssen durchgehend konsistent sein — mg/kg × kg = mg, dann mg ÷ (mg/mL) = mL.',
      },
      klinischerBezug: 'In der Pharmakologie werden Konzentrationen in verschiedenen Einheiten angegeben: μg/mL (Mikrogramm pro Milliliter), mg/dL, mmol/L, ng/mL. Schilddrüsenhormone (TSH) werden in mU/L, Thyroxin (T4) in pmol/L gemessen. Vitamin B12 liegt im Bereich von pg/mL. Fehler bei der Einheitenumrechnung können zu 10- oder 1000-fachen Überdosierungen führen — solche Medikamentenfehler sind eine der häufigsten vermeidbaren Todesursachen in Krankenhäusern.',
      selfTest: [
        {
          question: 'Wie schreibt man 0,0000045 m in wissenschaftlicher Notation und mit Präfix?',
          options: [
            '4,5 × 10⁻⁶ m = 4,5 μm',
            '4,5 × 10⁻⁵ m = 4,5 μm',
            '4,5 × 10⁻⁶ m = 4,5 nm',
            '0,45 × 10⁻⁵ m = 4,5 μm',
            '4,5 × 10⁻⁷ m = 4,5 nm',
          ],
          correctIndex: 0,
          explanation: '0,0000045 = 4,5 × 10⁻⁶. Da 10⁻⁶ dem Präfix Mikro (μ) entspricht, ergibt sich 4,5 μm. Diese Größenordnung entspricht dem Durchmesser einer Blutzelle (rote Blutkörperchen: ≈ 7–8 μm) oder eines kleineren Bakteriums.',
          hints: ['Zähle die Stellen nach dem Komma bis zur ersten Nicht-Null-Stelle.', 'Welcher Präfix entspricht 10⁻⁶?'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Ein Hormonwert beträgt 15 pmol/L. Wie viel nmol/L ist das?',
          options: ['0,015 nmol/L', '0,15 nmol/L', '1,5 nmol/L', '15.000 nmol/L', '150 nmol/L'],
          correctIndex: 0,
          explanation: 'Piko (p) = 10⁻¹², Nano (n) = 10⁻⁹. Also ist 1 pmol = 10⁻³ nmol = 0,001 nmol. Daher: 15 pmol/L = 15 × 10⁻³ nmol/L = 0,015 nmol/L. Von Piko zu Nano wird die Zahl um den Faktor 1000 kleiner (da Nano eine 1000-mal größere Einheit ist als Piko).',
          hints: ['Nano ist 1000-mal größer als Piko — also wird die Zahl kleiner.', '1 pmol = 0,001 nmol; multipliziere mit 0,001.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welches Ergebnis liefert die Berechnung (3 × 10⁴) × (2 × 10⁻²)?',
          options: ['6 × 10²', '6 × 10⁶', '6 × 10⁻⁸', '5 × 10²', '6 × 10³'],
          correctIndex: 0,
          explanation: '(3 × 10⁴) × (2 × 10⁻²) = (3 × 2) × 10⁴⁺⁽⁻²⁾ = 6 × 10² = 600. Bei der Multiplikation werden Koeffizienten multipliziert und Exponenten addiert. Der Exponent 4 + (−2) = 2 ergibt 10², also 6 × 10² = 600.',
          hints: ['Multipliziere die Vorzahlen (3 × 2 = 6) und addiere die Exponenten (4 + (−2)).', 'Addieren von negativen Exponenten bedeutet subtrahieren: 4 − 2 = 2.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welcher Präfix steht für den Faktor 10⁻⁹?',
          options: ['Mikro (μ)', 'Nano (n)', 'Piko (p)', 'Femto (f)', 'Milli (m)'],
          correctIndex: 1,
          explanation: 'Nano (n) entspricht dem Faktor 10⁻⁹. In der Medizin begegnet uns Nano beispielsweise bei Nanometer (nm) — der Maßstab für Viren (20–300 nm), Proteine und DNA-Strukturen. Mikro (μ) = 10⁻⁶, Piko (p) = 10⁻¹², Femto (f) = 10⁻¹⁵, Milli (m) = 10⁻³.',
          hints: ['Die Reihe lautet: Milli (10⁻³) → Mikro (10⁻⁶) → Nano (10⁻⁹) → Piko (10⁻¹²).', 'Jede Stufe ist ein Faktor 1000 kleiner als die vorherige.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Ein Blutglukosewert von 5,5 mmol/L soll in mg/dL umgerechnet werden (Faktor: 1 mmol/L Glukose = 18 mg/dL). Was ergibt sich?',
          options: ['55 mg/dL', '99 mg/dL', '110 mg/dL', '550 mg/dL', '30,6 mg/dL'],
          correctIndex: 1,
          explanation: '5,5 mmol/L × 18 mg/dL per mmol/L = 99 mg/dL. Dieser Wert liegt im Normbereich (Nüchtern < 100 mg/dL). Der Faktor 18 ergibt sich aus dem Molekulargewicht der Glukose (180 g/mol), kombiniert mit der Umrechnung von mol zu dL.',
          hints: ['Multipliziere einfach 5,5 × 18.', 'Der Normbereich für Nüchternglukose ist 70–100 mg/dL bzw. 3,9–5,6 mmol/L.'],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ph-1-03',
      title: 'Dimensionsanalyse und Einheitenumrechnung',
      content: `Die **Dimensionsanalyse** ist eines der mächtigsten Werkzeuge der Physik — und gleichzeitig eines der am meisten unterschätzten. Die Grundidee ist einfach: Jede physikalische Gleichung muss auf beiden Seiten dieselbe Dimension aufweisen. Wenn die Einheiten nicht stimmen, kann die Formel nicht korrekt sein. Wenn sie stimmen, ist die Formel zumindest dimensionell konsistent.

Betrachten wir ein Beispiel: Die Gleichung für gleichförmige Bewegung lautet v = s/t (Geschwindigkeit = Weg/Zeit). Die Einheiten ergeben: [v] = m/s, [s/t] = m/s — Übereinstimmung. Die Gleichung für gleichmäßig beschleunigte Bewegung s = ½at² lautet in Einheiten: [s] = m, [½at²] = (m/s²)·s² = m — konsistent. Wenn eine Formel hingegen lautet s = at (ohne t²), ergibt sich (m/s²)·s = m/s ≠ m — die Formel wäre falsch.

Diese Methode lässt sich aktiv nutzen, um **unbekannte Formeln herzuleiten**. Man kann aus den Dimensionen erschließen, wie Variablen in einer Formel kombiniert sein müssen. Die Schwingungsdauer T eines Pendels hängt von Länge L, Masse m und Gravitationsbeschleunigung g ab. Durch Dimensionsanalyse zeigt sich: T muss die Dimension Zeit haben. Aus L (m), g (m/s²) und m (kg) ergibt sich, dass T proportional zu √(L/g) sein muss — denn √(m/(m/s²)) = √(s²) = s. Die Masse taucht nicht auf, weil keine Kombination von kg mit L und g die Dimension Zeit ergibt. Das ist bereits ein erhebliches physikalisches Ergebnis — allein aus Dimensionsüberlegungen!

**Temperaturumrechnung** ist medizinisch essenziell. Die Kelvin-Skala beginnt beim absoluten Nullpunkt (−273,15°C), wo jegliche molekulare Bewegung aufhört. Die Umrechnung: T[K] = T[°C] + 273,15. Körpertemperatur 37°C = 310,15 K. Siedepunkt Wasser: 100°C = 373,15 K. In Gasgesetzen und thermodynamischen Formeln muss immer mit Kelvin gerechnet werden — eine der häufigsten Fehlerquellen in Physikprüfungen.

**Druckumrechnung**: 1 Atmosphäre (atm) = 101.325 Pa = 760 mmHg = 1013 mbar = 1,013 bar. In der Atemphysiologie arbeitet man oft mit relativen Drücken: der Alveolardruck schwankt um etwa ±2 cmH₂O (≈ ±200 Pa) um den Atmosphärendruck. Beatmungsgeräte zeigen den Beatmungsdruck oft in mbar oder cmH₂O (1 cmH₂O = 98 Pa ≈ 1 mbar). Der mittlere arterielle Druck (MAP) von 93 mmHg entspricht etwa 12,4 kPa.

**Energieumrechnungen**: 1 Kilokalorie (kcal) = 4184 Joule. Tageskalorienverbrauch eines Erwachsenen: 2000 kcal = 8,37 MJ. Das Elektronenvolt (eV = 1,602 × 10⁻¹⁹ J) ist die Energieeinheit in der Strahlenphysik: Die Ionisierungsenergie von Wasserstoff beträgt 13,6 eV, während Röntgenphotonen typischerweise 30–150 keV Energie tragen.

Die praktische Durchführung einer Einheitenumrechnung folgt dem Prinzip der **Multiplikation mit 1**: Man multipliziert mit Brüchen, deren Zähler und Nenner denselben Wert haben aber in verschiedenen Einheiten ausgedrückt sind, z.B. (1 mmol/1000 μmol) oder (1000 m/1 km). Beispiel: 120 mmHg in Pascal umrechnen: 120 mmHg × (133,3 Pa/1 mmHg) = 15.996 Pa ≈ 16 kPa. Die mmHg kürzen sich aus dem Bruch heraus, übrig bleibt Pa.`,
      lernziele: [
        'Dimensionsanalyse zur Formelprüfung und -herleitung anwenden',
        'Temperaturumrechnung zwischen Celsius und Kelvin sicher beherrschen',
        'Druckeinheiten (Pa, mmHg, atm, mbar, cmH₂O) ineinander umrechnen',
        'Energieeinheiten (J, kcal, eV) kennen und zuordnen',
      ],
      sections: [
        {
          heading: 'Dimensionsanalyse als Prüfwerkzeug',
          text: 'Die Dimensionsanalyse prüft, ob Einheiten auf beiden Seiten einer Gleichung übereinstimmen. Methode: Ersetze jede Größe durch ihre Einheit und vereinfache. Stimmen die Einheiten nicht, ist die Formel falsch. Stimmen sie, ist sie zumindest dimensionell korrekt. Beispiel: v = s/t → m = m/s × s = m (korrekt). s = v × t² → m = m/s × s² = m·s (falsch). Diese Technik hilft auch, vergessene Formeln zu rekonstruieren — ein unschätzbarer Vorteil in Prüfungssituationen.',
        },
        {
          heading: 'Temperatur- und Druckumrechnungen',
          text: 'Temperatur: T[K] = T[°C] + 273,15. In allen Gasgesetzen und thermodynamischen Formeln muss Kelvin verwendet werden — niemals Celsius! Körpertemperatur: 37°C = 310,15 K. Druck: 1 atm = 101.325 Pa = 760 mmHg = 1013 mbar. Klinisch: Blutdruck 120/80 mmHg = 16/10,7 kPa. Beatmungsdruck in cmH₂O (1 cmH₂O ≈ 98 Pa). Partialdruck: pO₂ (Alveole) = 100 mmHg = 13,3 kPa, pCO₂ = 40 mmHg = 5,3 kPa.',
        },
        {
          heading: 'Energieeinheiten und Umrechnungsprinzip',
          text: 'Energie: 1 kcal = 4184 J = 4,184 kJ. Tagesenergiebedarf 2000 kcal = 8,37 MJ. Elektronenvolt (eV): 1 eV = 1,6 × 10⁻¹⁹ J; relevant für Strahlenphysik. Röntgenphotonen: 30–150 keV. Das Umrechnungsprinzip: Multipliziere mit (neue Einheit / alte Einheit) als Bruch. Beispiel: 500 J = 500 J × (1 kcal/4184 J) = 0,12 kcal. Die alte Einheit kürzt sich heraus, die neue bleibt übrig.',
        },
      ],
      merksätze: [
        'T[K] = T[°C] + 273,15 — in Gasgesetzen IMMER Kelvin verwenden!',
        '1 atm = 760 mmHg = 101.325 Pa = 1013 mbar',
        '1 kcal = 4184 J; 1 eV = 1,6 × 10⁻¹⁹ J',
      ],
      altfrage: {
        question: 'Ein Sportstudent verbraucht bei einem 10 km-Lauf 800 kcal. Wie viel Joule ist das, und welcher mittleren Leistung entspricht dies bei 50 Minuten Laufdauer?',
        answer: 'Energie: 800 kcal × 4184 J/kcal = 3.347.200 J ≈ 3,35 MJ. Zeit: 50 min = 3000 s. Leistung: P = E/t = 3.347.200 J / 3000 s ≈ 1116 W ≈ 1,1 kW. Diese Leistung entspricht etwa der eines handelsüblichen Fön — ein anschaulicher Vergleich für sportliche Aktivität.',
      },
      klinischerBezug: 'In der Blutgasanalyse werden Partialdrücke von Sauerstoff (pO₂) und Kohlendioxid (pCO₂) angegeben — in Europa meist in mmHg, in manchen Ländern in kPa. Ein pO₂ von 80 mmHg × 0,133 = 10,6 kPa. Ein pCO₂ von 40 mmHg = 5,3 kPa. Die Fehlinterpretation dieser Werte (Verwechslung mmHg mit kPa) kann zu falschen Therapieentscheidungen bei der Beatmung führen. Daher ist die Kenntnis beider Einheitensysteme für die Intensivmedizin unverzichtbar.',
      selfTest: [
        {
          question: 'Eine Formel lautet: F = m × v (Kraft = Masse × Geschwindigkeit). Ist diese Formel dimensionell korrekt?',
          options: [
            'Ja, denn kg × m/s = N',
            'Nein, denn kg × m/s = kg·m/s, nicht N = kg·m/s²',
            'Ja, denn Masse und Geschwindigkeit ergeben immer Kraft',
            'Nein, weil v nicht dimensionsbehaftet ist',
            'Ja, für relativistische Geschwindigkeiten ist die Formel korrekt',
          ],
          correctIndex: 1,
          explanation: 'Newton hat die Dimension kg·m/s². Die Formel F = m·v liefert kg·m/s — das ist Impuls, nicht Kraft. Die korrekte Formel für Kraft ist F = m·a (Masse × Beschleunigung), was kg·m/s² = N ergibt. F = m·v beschreibt den Impuls p, nicht die Kraft.',
          hints: ['Was ist die Einheit von Kraft (Newton)? N = kg·m/s²', 'Geschwindigkeit hat Einheit m/s — nicht m/s². Was müsste man ändern?'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Körpertemperatur 39°C (Fieber) in Kelvin umgerechnet ergibt:',
          options: ['239 K', '312 K', '312,15 K', '366 K', '39 K'],
          correctIndex: 2,
          explanation: 'T[K] = T[°C] + 273,15 = 39 + 273,15 = 312,15 K. Fieber beginnt bei 38°C = 311,15 K. In thermodynamischen Berechnungen, etwa bei der Berechnung der Wärmeproduktion des Körpers, muss immer mit Kelvin gerechnet werden.',
          hints: ['Die Formel lautet: K = °C + 273,15.', 'Die Differenz zwischen Celsius und Kelvin ist immer 273,15.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welcher Druck entspricht 1 Atmosphäre (1 atm) in mmHg?',
          options: ['100 mmHg', '760 mmHg', '1000 mmHg', '133 mmHg', '500 mmHg'],
          correctIndex: 1,
          explanation: '1 atm = 760 mmHg = 101.325 Pa. Dieser Wert ist historisch bedeutsam: Er entspricht dem Druck einer 760 mm hohen Quecksilbersäule. In der Atemphysiologie ist der Atmosphärendruck (760 mmHg) der Referenzpunkt für die Partialdrücke der Atemgase.',
          hints: ['1 atm ist der Luftdruck auf Meereshöhe — ein wichtiger Referenzpunkt.', '760 mmHg = 101.325 Pa — merke beide Werte.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Ein Patient nimmt täglich 2000 kcal zu sich. Wie viel MJ entspricht das?',
          options: ['0,837 MJ', '2,0 MJ', '8,37 MJ', '83,7 MJ', '4,18 MJ'],
          correctIndex: 2,
          explanation: '2000 kcal × 4184 J/kcal = 8.368.000 J = 8,37 MJ. Eine durchschnittliche Tageszufuhr von 2000 kcal entspricht also einer Energie von 8,37 Megajoule. Die mittlere Ruheleistung des Körpers beträgt dann 8,37 × 10⁶ J / 86.400 s ≈ 97 W.',
          hints: ['1 kcal = 4184 J; 1 MJ = 10⁶ J.', 'Rechne zuerst in Joule, dann teile durch 10⁶ für MJ.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Ein Beatmungsgerät zeigt einen Spitzendruck von 25 cmH₂O. Ungefähr wie viel mbar ist das? (1 cmH₂O ≈ 1 mbar)',
          options: ['0,25 mbar', '2,5 mbar', '25 mbar', '250 mbar', '2500 mbar'],
          correctIndex: 2,
          explanation: '1 cmH₂O ≈ 0,098 kPa ≈ 1 mbar (gute Näherung). Daher: 25 cmH₂O ≈ 25 mbar. In der klinischen Beatmungsmedizin werden Atemwegsdrücke oft in cmH₂O oder mbar angegeben. Ein Spitzendruck von 25 cmH₂O (≈ 25 mbar ≈ 2,45 kPa) ist ein normaler Wert bei druckkontrollierter Beatmung.',
          hints: ['Die Näherung 1 cmH₂O ≈ 1 mbar vereinfacht klinische Berechnungen.', 'Betrachte die Zahlen: 25 cm × 1 mbar/cm = ?'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Durch Dimensionsanalyse soll die Formel für kinetische Energie hergeleitet werden: E_kin ~ m^a × v^b. Welche Exponenten a und b sind korrekt?',
          options: ['a=1, b=1', 'a=1, b=2', 'a=2, b=1', 'a=1, b=3', 'a=2, b=2'],
          correctIndex: 1,
          explanation: 'Energie hat die Dimension J = kg·m²/s². Aus m^a × v^b = kg^a × (m/s)^b = kg^a × m^b/s^b muss folgen: a=1 (für kg¹), b=2 (für m²/s²). Also E_kin ~ m × v² — die korrekte Formel lautet E_kin = ½mv². Die Dimensionsanalyse liefert die Exponenten, aber nicht den numerischen Faktor ½.',
          hints: ['Setze die Einheiten ein: kg^a × (m/s)^b muss kg·m²/s² ergeben.', 'Vergleiche die Exponenten von kg, m und s auf beiden Seiten.'],
          difficulty: 3,
          tags: [],
        },
      ],
    },
  ],
};
