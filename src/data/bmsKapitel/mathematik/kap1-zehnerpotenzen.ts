import type { Kapitel } from '../types';

export const mathKap1: Kapitel = {
  id: 'math-kap1',
  title: 'Zehnerpotenzen und Präfixe',
  subject: 'mathematik',
  icon: '🔢',
  estimatedTime: '40 min',
  unterkapitel: [
    {
      id: 'ma-1-01',
      title: 'Zehnerpotenzen — Schreibweise und Rechenregeln',
      content: `# Zehnerpotenzen — Schreibweise und Rechenregeln

Zehnerpotenzen sind ein fundamentales Werkzeug in der Naturwissenschaft und Medizin. Sie ermöglichen es, sowohl unvorstellbar große als auch winzig kleine Zahlen auf kompakte und übersichtliche Weise darzustellen. Wer in der Medizin mit Zellgrößen, Molekülmassen oder Ionenkonzentrationen arbeitet, stößt unweigerlich auf Zehnerpotenzen — daher ist ein sicherer Umgang mit ihnen unerlässlich.

## Grunddefinition und positive Exponenten

Die Schreibweise 10ⁿ bedeutet schlicht, dass die Zahl 10 genau n-mal mit sich selbst multipliziert wird. Für positive Exponenten gilt: 10¹ = 10, 10² = 100, 10³ = 1.000, 10⁶ = 1.000.000. Der Exponent gibt also direkt an, wie viele Nullen die Zahl hinter der 1 hat. Diese Darstellung ist besonders praktisch, wenn Zahlen über viele Größenordnungen variieren, wie es in der Biologie häufig der Fall ist: Ein Virus misst etwa 10⁻⁷ m, ein Mensch etwa 1,7 m — das entspricht einem Größenunterschied von fast acht Zehnerpotenzen.

## Negative Exponenten

Negative Exponenten stehen für Brüche: 10⁻¹ = 1/10 = 0,1; 10⁻² = 1/100 = 0,01; 10⁻³ = 0,001. Allgemein gilt 10⁻ⁿ = 1/10ⁿ. Ein wichtiger Sonderfall ist 10⁰ = 1, denn jede Zahl hoch null ergibt 1. Negative Exponenten begegnen uns in der Medizin ständig: Die Konzentration von Wasserstoffionen im Blut liegt bei etwa 40 × 10⁻⁹ mol/L — eine Zahl, die man ohne Zehnerpotenzen kaum sinnvoll aufschreiben könnte.

## Die vier Rechenregeln

Beim Rechnen mit Zehnerpotenzen gelten vier Grundregeln, die man auswendig kennen muss.

**Multiplikation:** 10ᵃ × 10ᵇ = 10^(a+b). Wenn man zwei Zehnerpotenzen multipliziert, addiert man ihre Exponenten. Beispiel: 10³ × 10⁴ = 10⁷. Das ist intuitiv: 1.000 mal 10.000 ergibt 10.000.000 = 10⁷.

**Division:** 10ᵃ / 10ᵇ = 10^(a−b). Bei Division subtrahiert man den Exponenten des Nenners vom Exponenten des Zählers. Beispiel: 10⁵ / 10² = 10³. Auch plausibel: 100.000 geteilt durch 100 ergibt 1.000 = 10³.

**Potenzierung einer Potenz:** (10ᵃ)ᵇ = 10^(a·b). Wenn eine Zehnerpotenz selbst potenziert wird, multipliziert man die Exponenten. Beispiel: (10²)³ = 10⁶.

**Wichtige Identität:** 10⁰ = 1, und für negative Exponenten gilt 10⁻ⁿ = 1/10ⁿ. Man kann dies als Erweiterung der Divisionsregel verstehen: 10² / 10² = 10^(2−2) = 10⁰ = 1.

## Wissenschaftliche Notation

Die wissenschaftliche Notation schreibt jede Zahl in der Form a × 10ⁿ, wobei 1 ≤ a < 10. Das bedeutet, vor dem Komma steht genau eine Ziffer (die nicht null sein darf). Beispiele: 0,0042 = 4,2 × 10⁻³ (Komma wird drei Stellen nach rechts verschoben → Exponent −3); 5.200 = 5,2 × 10³ (Komma wird drei Stellen nach links verschoben → Exponent +3).

Um eine Zahl in wissenschaftliche Notation umzuwandeln, zählt man, wie viele Stellen das Komma verschoben werden muss, um vor die erste signifikante Ziffer zu gelangen. Verschiebt man das Komma nach links (Zahl > 10), wird der Exponent positiv. Verschiebt man es nach rechts (Zahl < 1), wird der Exponent negativ.

## Addition und Subtraktion in wissenschaftlicher Notation

Beim Addieren oder Subtrahieren müssen beide Zahlen denselben Exponenten haben. Man bringt zunächst die kleinere Potenz auf die größere: 3,0 × 10⁴ + 2,0 × 10³ = 3,0 × 10⁴ + 0,2 × 10⁴ = 3,2 × 10⁴. Diese Regel ist analog zum schriftlichen Addieren: Man rechnet nur Gleichartiges zusammen — Tausender mit Tausendern, Einer mit Einern.

## MedAT-typische Aufgaben

Am MedAT begegnen Zehnerpotenzen häufig in Aufgaben zur Zellbiologie und Biochemie. Typische Werte: Eine Erythrozyte hat einen Durchmesser von 7–8 μm = 7–8 × 10⁻⁶ m. Ein DNA-Doppelstrang hat einen Durchmesser von 2 nm = 2 × 10⁻⁹ m. Die Avogadro-Zahl N_A = 6,022 × 10²³ erscheint bei Mol-Berechnungen. Wer die Grundregeln sicher beherrscht, kann solche Aufgaben ohne Taschenrechner zuverlässig lösen.`,
      lernziele: [
        'Positive und negative Zehnerpotenzen definieren und umrechnen',
        'Die vier Rechenregeln für Zehnerpotenzen sicher anwenden',
        'Zahlen in wissenschaftliche Notation umwandeln und zurückrechnen',
        'Addition und Subtraktion in wissenschaftlicher Notation durchführen',
      ],
      sections: [
        {
          heading: 'Positive und negative Exponenten',
          text: 'Positive Exponenten (10¹=10, 10²=100, 10³=1.000) geben die Anzahl der Nullen nach der 1 an. Negative Exponenten (10⁻¹=0,1; 10⁻²=0,01; 10⁻³=0,001) repräsentieren Brüche. Der Sonderfall 10⁰=1 ergibt sich aus der Divisionsregel: 10ⁿ/10ⁿ = 10^(n−n) = 10⁰ = 1. Im medizinischen Alltag begegnen uns negative Exponenten bei Konzentrationsangaben, Ionenstärken und Größen auf zellulärer und molekularer Ebene.',
          merksatz: 'Negativer Exponent = Kehrwert der Potenz: 10⁻ⁿ = 1/10ⁿ',
        },
        {
          heading: 'Multiplikation und Division',
          text: 'Beim Multiplizieren von Zehnerpotenzen werden die Exponenten addiert: 10ᵃ × 10ᵇ = 10^(a+b). Bei der Division werden sie subtrahiert: 10ᵃ / 10ᵇ = 10^(a−b). Diese Regeln gelten auch, wenn man vollständige Zahlen in wissenschaftlicher Notation multipliziert: (3 × 10⁴) × (2 × 10⁻²) = (3×2) × 10^(4+(−2)) = 6 × 10². Man multipliziert die Vorzahlen separat und addiert dann die Exponenten — ein zweistufiger Prozess, der in der Prüfung zuverlässig funktioniert.',
        },
        {
          heading: 'Wissenschaftliche Notation im Alltag',
          text: 'Die wissenschaftliche Notation (a × 10ⁿ mit 1 ≤ a < 10) wird im naturwissenschaftlichen Kontext universell verwendet. Um 0,00042 umzuschreiben: Das Komma muss vier Stellen nach rechts verschoben werden → 4,2 × 10⁻⁴. Um 63.000 umzuschreiben: Komma vier Stellen nach links → 6,3 × 10⁴. Bei Addition/Subtraktion müssen die Exponenten erst angeglichen werden, bevor die Vorzahlen verrechnet werden.',
        },
      ],
      merksätze: [
        'Multiplikation → Exponenten addieren: 10ᵃ × 10ᵇ = 10^(a+b)',
        'Division → Exponenten subtrahieren: 10ᵃ / 10ᵇ = 10^(a−b)',
        'Wissenschaftliche Notation: genau eine Vorkommazahl, 1 ≤ a < 10',
      ],
      altfrage: {
        question: 'Eine Lösung enthält 0,000005 mol/L Substanz X. Schreiben Sie diese Konzentration in wissenschaftlicher Notation und geben Sie den SI-Präfix an.',
        answer: 'Schritt 1: 0,000005 = 5 × 10⁻⁶ mol/L. Schritt 2: Das Komma wird 6 Stellen nach rechts verschoben → Exponent −6. Schritt 3: 10⁻⁶ entspricht dem Präfix Mikro (μ). Ergebnis: 5 μmol/L = 5 × 10⁻⁶ mol/L.',
      },
      klinischerBezug: 'In der Klinischen Chemie werden Serumkonzentrationen häufig als Nanomol oder Mikromol angegeben. Der Normbereich für Vitamin B12 liegt bei 200–900 pg/mL = 200–900 × 10⁻¹² g/mL. Das Verständnis von Zehnerpotenzen ist daher unmittelbar klinisch relevant — nicht nur für Laborbefunde, sondern auch für Dosierungsberechnungen, bei denen ein Dezimalstellenfehler lebensbedrohlich sein kann.',
      selfTest: [
        {
          question: 'Was ergibt 10³ × 10⁻⁵?',
          options: ['10⁻²', '10⁻¹⁵', '10⁸', '10²', '10¹⁵'],
          correctIndex: 0,
          explanation: 'Bei Multiplikation von Zehnerpotenzen werden die Exponenten addiert: 3 + (−5) = −2. Das Ergebnis ist also 10⁻². Dies entspricht dem Wert 0,01.',
          hints: ['Welche Rechenoperation führt man mit den Exponenten bei Multiplikation durch?', 'Addiere 3 und −5.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welche der folgenden Darstellungen ist die korrekte wissenschaftliche Notation für 0,00380?',
          options: ['38,0 × 10⁻⁴', '3,80 × 10⁻³', '0,380 × 10⁻²', '3,80 × 10³', '0,0380 × 10⁻¹'],
          correctIndex: 1,
          explanation: 'In wissenschaftlicher Notation muss die Vorzahl a genau eine Vorkommastelle haben und 1 ≤ a < 10 gelten. 0,00380 = 3,80 × 10⁻³ (Komma drei Stellen nach rechts). Alle anderen Optionen verletzen die Bedingung 1 ≤ a < 10.',
          hints: ['Wie viele Stellen muss das Komma verschoben werden, bis vor dem Komma genau eine Ziffer steht?', 'Komma nach rechts → negativer Exponent.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Was ergibt (6 × 10⁵) / (3 × 10²)?',
          options: ['2 × 10³', '2 × 10⁷', '3 × 10³', '2 × 10²', '0,5 × 10³'],
          correctIndex: 0,
          explanation: 'Vorzahlen dividieren: 6/3 = 2. Exponenten subtrahieren: 5−2 = 3. Ergebnis: 2 × 10³ = 2.000. Das ist die vollständige wissenschaftliche Notation mit korrekter Vorzahl.',
          hints: ['Dividiere die Vorzahlen separat und verrechne dann die Exponenten.', 'Exponenten: 5 minus 2 = ?'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Wie lautet die Summe 2,5 × 10³ + 5,0 × 10²?',
          options: ['3,0 × 10³', '7,5 × 10³', '2,55 × 10³', '7,5 × 10²', '3,0 × 10²'],
          correctIndex: 0,
          explanation: 'Man muss zunächst beide Zahlen auf denselben Exponenten bringen: 5,0 × 10² = 0,5 × 10³. Dann: 2,5 × 10³ + 0,5 × 10³ = 3,0 × 10³. Bei Addition und Subtraktion müssen die Exponenten identisch sein.',
          hints: ['Bringe 5,0 × 10² auf den Exponenten 10³.', '5,0 × 10² = 0,5 × 10³ — dann addiere die Vorzahlen.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Eine Zellgröße beträgt 10 μm. Wie viel ist das in Metern in wissenschaftlicher Notation?',
          options: ['1 × 10⁻⁵ m', '1 × 10⁻⁶ m', '1 × 10⁻⁴ m', '10 × 10⁻⁵ m', '1 × 10⁻³ m'],
          correctIndex: 0,
          explanation: 'μm = Mikrometer = 10⁻⁶ m. Daher: 10 μm = 10 × 10⁻⁶ m = 1 × 10⁻⁵ m. Das Ergebnis muss in korrekter wissenschaftlicher Notation geschrieben werden, mit Vorzahl zwischen 1 und 10.',
          hints: ['μ (Mikro) = 10⁻⁶. Was ergibt 10 × 10⁻⁶?', '10 × 10⁻⁶ = 10¹ × 10⁻⁶ = 10^(1−6) = 10⁻⁵.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ergibt (2 × 10³)²?',
          options: ['4 × 10⁶', '4 × 10⁹', '2 × 10⁶', '4 × 10⁵', '8 × 10⁶'],
          correctIndex: 0,
          explanation: 'Man potenziert Vorzahl und Potenz getrennt: 2² = 4 und (10³)² = 10^(3×2) = 10⁶. Ergebnis: 4 × 10⁶. Die Regel (aⁿ)ᵐ = a^(n·m) gilt entsprechend für die Zehnerpotenz.',
          hints: ['Potenziere Vorzahl und Zehnerpotenz getrennt.', '2² = 4; (10³)² = 10^(3·2).'],
          difficulty: 3,
          tags: [],
        },
        {
          question: 'Der pH-Wert ist definiert als pH = −log₁₀[H⁺]. Wenn [H⁺] = 10⁻⁷ mol/L, was ist der pH-Wert?',
          options: ['7', '−7', '0,1', '3', '10'],
          correctIndex: 0,
          explanation: 'pH = −log₁₀(10⁻⁷) = −(−7) = 7. Der Logarithmus zur Basis 10 einer Zehnerpotenz ist einfach der Exponent: log₁₀(10ⁿ) = n. Der negative Exponent wird durch das Minuszeichen in der pH-Formel positiv.',
          hints: ['log₁₀(10ⁿ) = n — wie lautet der Exponent hier?', 'pH = −log₁₀(10⁻⁷) = −(−7) = ?'],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ma-1-02',
      title: 'SI-Präfixe von Femto bis Tera',
      content: `# SI-Präfixe von Femto bis Tera

Das Internationale Einheitensystem (SI) hat eine elegante Lösung für das Problem sehr großer und sehr kleiner Zahlen entwickelt: Präfixe, die als Vorzeichen vor jede Basiseinheit gesetzt werden können. Statt 0,000001 m zu schreiben, sagt man einfach 1 Mikrometer (1 μm). Diese Präfixe sind in der Medizin und Naturwissenschaft so allgegenwärtig, dass ihre Kenntnis als Grundkompetenz gilt.

## Die vollständige Präfixtabelle

Die SI-Präfixe decken einen Bereich von 10⁻¹⁵ bis 10¹² ab — das sind 27 Größenordnungen. Für den MedAT relevant sind vor allem die Präfixe von Femto bis Giga.

**Sehr kleine Präfixe (für Moleküle und Atome):**
- Femto (f) = 10⁻¹⁵: Beispiel — die Größe von Protonen liegt im Femtometerbereich (ca. 0,85 fm)
- Piko (p) = 10⁻¹²: Beispiel — Picomolar-Konzentrationen für Hormone wie Östrogen (50–300 pmol/L)
- Nano (n) = 10⁻⁹: Beispiel — Virendurchmesser 20–300 nm; DNA-Helix 2 nm breit
- Mikro (μ) = 10⁻⁶: Beispiel — Bakterien 1–10 μm; rote Blutkörperchen 6–8 μm
- Milli (m) = 10⁻³: Beispiel — Millimolar (mmol/L) ist die häufigste Einheit für Elektrolyte im Serum

**Kleine Präfixe (für Alltagsgrößen):**
- Zenti (c) = 10⁻²: Beispiel — Zentimeter (cm) für Körpergröße
- Dezi (d) = 10⁻¹: Beispiel — Deziliter (dL) in Laborwerten (z.B. Hämoglobin in g/dL)

**Große Präfixe (für Energie und Masse):**
- Kilo (k) = 10³: Beispiel — Kilogramm (kg) Körpergewicht; Kilokalorie (kcal) Energiegehalt
- Mega (M) = 10⁶: Beispiel — Megapascal in der Materialprüfung; Megabasenpaar (Mbp) im Genom
- Giga (G) = 10⁹: Beispiel — das menschliche Genom hat ~3,2 Gigabasenpaar (3,2 × 10⁹ Bp)
- Tera (T) = 10¹²: Beispiel — Terabyte in der Computertechnik; Tera-Operationen in der Bioinformatik

## Medizinische Beispiele

In der klinischen Praxis sind bestimmte Präfixe besonders häufig. Serumkonzentrationen werden oft in mmol/L (Elektrolyte: Na⁺ 135–145 mmol/L) oder μmol/L (Harnsäure: 200–400 μmol/L) angegeben. Für Hormone reichen Picomol: Thyroid-Stimulating Hormon (TSH) 0,4–4,0 mU/L. Molekülmassen werden in Dalton (Da) oder Kilodalton (kDa) gemessen: Hämoglobin hat 64.458 Da ≈ 64 kDa = 6,4 × 10⁴ Da.

## Umrechnung zwischen Präfixen

Der häufigste Fehler beim Umrechnen zwischen Präfixen ist das Vergessen, den Exponenten korrekt anzupassen. Ein sicheres Verfahren: Schritt 1 — alles in Basiseinheiten umrechnen. Schritt 2 — in die gewünschte Präfixeinheit umwandeln.

Beispiel: 5 mmol/L in nmol/L. Schritt 1: 5 mmol/L = 5 × 10⁻³ mol/L. Schritt 2: Da 1 nmol/L = 10⁻⁹ mol/L, ist 5 × 10⁻³ mol/L = 5 × 10⁻³ / 10⁻⁹ nmol/L = 5 × 10⁶ nmol/L. Das erscheint viel, ist aber korrekt: Nanomol ist viel kleiner als Millimol.

## Mnemonik für die Reihenfolge

Um die Präfixe in der richtigen Reihenfolge zu behalten, hilft die Eselsbrücke: **"Frösche Picknicken Neben Meinen Cactus-Deko, Keine Mäuse Gehen Tat."** (Femto, Piko, Nano, Mikro, Milli, Centi, Dezi, Kilo, Mega, Giga, Tera). Alternativ merken sich viele Studierenden die Präfixe paarweise: Milli–Kilo (10⁻³ und 10³), Mikro–Mega (10⁻⁶ und 10⁶), Nano–Giga (10⁻⁹ und 10⁹), Piko–Tera (10⁻¹² und 10¹²).`,
      lernziele: [
        'Alle SI-Präfixe von Femto bis Tera mit Symbolen und Exponenten benennen',
        'Zwischen verschiedenen Präfixeinheiten sicher umrechnen',
        'Medizinische Messwerte den richtigen Präfixen zuordnen',
      ],
      sections: [
        {
          heading: 'Präfixe im subatomaren und zellulären Bereich',
          text: 'Femto (10⁻¹⁵), Piko (10⁻¹²), Nano (10⁻⁹) und Mikro (10⁻⁶) sind die Präfixe der Molekülwelt. Protonengröße (Femtometer), Hormonkonzentrationen (Picomolar), Virengrößen (Nanometer) und Zellgrößen (Mikrometer) sind typische Anwendungen. Im Klinikalltag sind Picomolar-Konzentrationen für empfindliche Hormone und Mikromolar für viele Metabolite typisch. Das Verständnis dieser Größenordnungen ist nicht nur Prüfungswissen, sondern hilft beim Verständnis, warum manche Substanzen in winzigen Mengen wirksam sind.',
        },
        {
          heading: 'Milli, Zenti, Dezi und Kilo — die Alltagspräfixe',
          text: 'Milli (10⁻³), Zenti (10⁻²) und Dezi (10⁻¹) sind aus dem täglichen Leben bekannt: Millimeter, Zentimeter, Deziliter. In der Labormedizin dominiert Millimolar für Elektrolyte (Kalium 3,5–5,0 mmol/L, Natrium 135–145 mmol/L). Kilo (10³) erscheint bei Körpergewicht (kg) und Energiegehalt (kcal). Ein kcal = 1.000 cal = 4.184 J. Für Molekülmassen: 1 kDa = 1.000 Da; Albumin hat 66 kDa, ein typisches Antikörper-IgG 150 kDa.',
        },
        {
          heading: 'Mega, Giga, Tera — und das menschliche Genom',
          text: 'Das menschliche haploide Genom umfasst ~3,2 × 10⁹ Basenpaare = 3,2 Gigabasenpaar (Gbp). In der Bioinformatik und Genomik sind Mega- und Gigabasenpaar geläufige Einheiten. Mega (10⁶) begegnet uns auch bei Megapascal (MPa) in der Biomechanik. Für den MedAT sind vor allem die Umrechnungen innerhalb benachbarter Präfixe entscheidend: Millimol zu Mikromol (Faktor 1.000), Nanomol zu Pikimol (Faktor 1.000).',
          merksatz: 'Jeder Schritt zwischen benachbarten Präfixen entspricht dem Faktor 1.000 = 10³',
        },
      ],
      merksätze: [
        'Reihenfolge: Femto–Piko–Nano–Mikro–Milli–(Zenti–Dezi)–Kilo–Mega–Giga–Tera',
        'Paare mit gleichem Betrag: Milli↔Kilo, Mikro↔Mega, Nano↔Giga, Piko↔Tera',
        'μ = 10⁻⁶, m = 10⁻³, n = 10⁻⁹ — die drei häufigsten Medizin-Präfixe',
      ],
      altfrage: {
        question: 'Ein Medikament wird in einer Konzentration von 2,5 mg/mL verabreicht. Ein Patient erhält 250 mL. Wie viel Gramm und wie viel Mikrogramm Wirkstoff erhält er insgesamt?',
        answer: 'Schritt 1: Gesamtmasse = 2,5 mg/mL × 250 mL = 625 mg. Schritt 2: Umrechnung in Gramm: 625 mg = 625 × 10⁻³ g = 0,625 g. Schritt 3: Umrechnung in Mikrogramm: 625 mg = 625 × 10³ μg = 625.000 μg = 6,25 × 10⁵ μg. Ergebnis: 0,625 g = 6,25 × 10⁵ μg.',
      },
      klinischerBezug: 'Hormonkonzentrationen illustrieren eindrucksvoll die Bedeutung von Präfixen: Insulin wirkt bereits im Picomolar-Bereich (ca. 50–150 pmol/L im Serum). Cortisol liegt bei 200–700 nmol/L. Albumin bei 35–50 g/L. Diese Konzentrationen variieren um mehr als zwölf Größenordnungen — ein Beweis, wie präzise das biologische System reguliert ist und warum das Präfixsystem für die Medizin unverzichtbar ist.',
      selfTest: [
        {
          question: 'Welchem Exponenten entspricht der Präfix Nano (n)?',
          options: ['10⁻⁹', '10⁻⁶', '10⁻¹²', '10⁻³', '10⁻⁸'],
          correctIndex: 0,
          explanation: 'Nano (n) steht für 10⁻⁹. Typische Beispiele: Nanometer (nm) für Virengrößen und molekulare Abstände, Nanomol (nmol) für Hormonkonzentrationen. Mikro (μ) = 10⁻⁶ und Piko (p) = 10⁻¹² sind die Nachbarn.',
          hints: ['Nano liegt zwischen Mikro (10⁻⁶) und Piko (10⁻¹²).', 'Jeder Schritt zwischen Präfixen beträgt 10³. Mikro = 10⁻⁶, also Nano = ?'],
          difficulty: 1,
          tags: [],
        },
        {
          question: '150 μg entsprechen wie viel Gramm?',
          options: ['1,5 × 10⁻⁴ g', '1,5 × 10⁻³ g', '1,5 × 10⁻⁵ g', '1,5 × 10⁻² g', '1,5 × 10⁻⁶ g'],
          correctIndex: 0,
          explanation: 'μg = Mikrogramm = 10⁻⁶ g. Daher: 150 μg = 150 × 10⁻⁶ g = 1,5 × 10² × 10⁻⁶ g = 1,5 × 10⁻⁴ g. Diese Umrechnung ist in der Pharmakologie allgegenwärtig.',
          hints: ['μ = Mikro = 10⁻⁶. Schreibe 150 als 1,5 × 10².', '1,5 × 10² × 10⁻⁶ = 1,5 × 10^(2−6).'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Wie viele Nanometer sind 0,002 mm?',
          options: ['2.000 nm', '200 nm', '20.000 nm', '0,002 nm', '2 nm'],
          correctIndex: 0,
          explanation: 'Schritt 1: 0,002 mm = 2 × 10⁻³ mm. Schritt 2: In Meter: 2 × 10⁻³ × 10⁻³ m = 2 × 10⁻⁶ m. Schritt 3: In nm (1 nm = 10⁻⁹ m): 2 × 10⁻⁶ / 10⁻⁹ = 2 × 10³ nm = 2.000 nm.',
          hints: ['Rechne zuerst alles in Meter um, dann in Nanometer.', '1 mm = 10⁻³ m; 1 nm = 10⁻⁹ m → 1 mm = 10⁶ nm.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Das menschliche Serumalbumin hat eine Molmasse von ~66.400 g/mol. Wie lautet dies in kDa?',
          options: ['66,4 kDa', '664 kDa', '6,64 kDa', '6.640 kDa', '0,664 kDa'],
          correctIndex: 0,
          explanation: '1 Da = 1 g/mol. 66.400 g/mol = 66.400 Da. Da 1 kDa = 1.000 Da = 10³ Da, gilt: 66.400 Da / 1.000 = 66,4 kDa. Albumin (66 kDa) und IgG-Antikörper (150 kDa) sind häufige klinische Referenzwerte.',
          hints: ['1 kDa = 1.000 Da. Dividiere die Da-Zahl durch 1.000.', '66.400 / 1.000 = ?'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welcher Präfix steht für 10⁻¹²?',
          options: ['Piko (p)', 'Femto (f)', 'Nano (n)', 'Mikro (μ)', 'Atto (a)'],
          correctIndex: 0,
          explanation: 'Piko (p) = 10⁻¹². Typisches Beispiel: Pikogramm (pg) für DNA-Quantifizierung. Femto (f) = 10⁻¹⁵ ist der nächstkleinere Präfix. Nano (n) = 10⁻⁹ und Mikro (μ) = 10⁻⁶ sind die größeren Nachbarn.',
          hints: ['Zwischen Nano (10⁻⁹) und Femto (10⁻¹⁵) liegt welcher Präfix?', 'Piko ist drei Zehnerpotenzen kleiner als Nano.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Eine Konzentration von 5 mmol/L soll in nmol/L ausgedrückt werden. Was ergibt sich?',
          options: ['5 × 10⁶ nmol/L', '5 × 10³ nmol/L', '5 × 10⁻³ nmol/L', '5 × 10⁹ nmol/L', '5 × 10⁻⁶ nmol/L'],
          correctIndex: 0,
          explanation: 'mmol = 10⁻³ mol; nmol = 10⁻⁹ mol. Der Unterschied beträgt 10⁶. Daher: 5 mmol = 5 × 10⁶ nmol. Intuitiv: Nanomol ist eine Million Mal kleiner als Millimol, also passt eine Million Mal mehr davon hinein.',
          hints: ['Milli = 10⁻³, Nano = 10⁻⁹. Um wie viel unterscheiden sie sich?', '10⁻³ / 10⁻⁹ = 10^(−3−(−9)) = 10⁶.'],
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: 'ma-1-03',
      title: 'Wissenschaftliche Notation — Umrechnen und Rechnen',
      content: `# Wissenschaftliche Notation — Umrechnen und Rechnen

Die wissenschaftliche Notation ist nicht nur eine bequeme Schreibweise — sie ist das Standardwerkzeug der Naturwissenschaften für das Rechnen mit sehr großen oder sehr kleinen Zahlen. Am MedAT kommen Aufgaben zur wissenschaftlichen Notation regelmäßig vor, oft verknüpft mit Chemie oder Physik. Wer die Rechenoperationen in dieser Schreibweise beherrscht, spart wertvolle Zeit und vermeidet Fehler.

## Multiplikation in wissenschaftlicher Notation

Das Multiplizieren gelingt am einfachsten, wenn man Vorzahl und Potenz getrennt behandelt. Das Produkt (a × 10ⁿ) × (b × 10ᵐ) = (a × b) × 10^(n+m). Dabei müssen die Vorzahlen multipliziert werden, und die Exponenten werden addiert.

Beispiel: (3 × 10⁴) × (2 × 10⁻²) = (3 × 2) × 10^(4+(−2)) = 6 × 10². Das Ergebnis, 6 × 10² = 600, lässt sich leicht überprüfen: 30.000 × 0,01 = 300 — warte, 30.000 × 0,01 = 300, also 3 × 10⁴ × 2 × 10⁻² = 6 × 10²? Richtig: 30.000 × 0,01 = 300, und 6 × 10² = 600. Hmm — 3 × 10⁴ = 30.000 und 2 × 10⁻² = 0,02, also 30.000 × 0,02 = 600. Stimmt.

Ein weiteres Beispiel: (1,5 × 10⁻³) × (4 × 10⁻²) = 6 × 10⁻⁵. Manchmal muss man das Ergebnis noch in korrekte wissenschaftliche Notation bringen: wenn die Vorzahl ≥ 10 oder < 1 ist, muss sie angepasst werden. Beispiel: (5 × 10³) × (3 × 10⁴) = 15 × 10⁷ → muss zu 1,5 × 10⁸ umgeschrieben werden.

## Division in wissenschaftlicher Notation

Division funktioniert analog: (a × 10ⁿ) / (b × 10ᵐ) = (a/b) × 10^(n−m). Man dividiert die Vorzahlen und subtrahiert die Exponenten. Beispiel: (6 × 10⁵) / (2 × 10²) = 3 × 10³. Überprüfung: 600.000 / 200 = 3.000 = 3 × 10³. Korrekt.

Beispiel mit negativen Exponenten: (8 × 10⁻³) / (4 × 10⁻⁷) = 2 × 10^(−3−(−7)) = 2 × 10⁴. Hier ist das Subtrahieren des negativen Exponenten wichtig: −3 − (−7) = −3 + 7 = +4.

## Addition und Subtraktion

Hier gilt: Exponent angleichen, dann Vorzahlen addieren oder subtrahieren. Der einfachste Weg ist, die kleinere Potenz an die größere anzugleichen.

Beispiel: 3,0 × 10⁴ + 2,0 × 10³. Schritt 1: 2,0 × 10³ = 0,2 × 10⁴. Schritt 2: 3,0 × 10⁴ + 0,2 × 10⁴ = 3,2 × 10⁴. Das Ergebnis ist direkt in wissenschaftlicher Notation, da 3,2 zwischen 1 und 10 liegt.

Beispiel 2: 7,0 × 10⁻⁴ − 3,0 × 10⁻⁵ = 7,0 × 10⁻⁴ − 0,3 × 10⁻⁴ = 6,7 × 10⁻⁴.

## Logarithmus-Zusammenhang

Der dekadische Logarithmus (log₁₀) und die wissenschaftliche Notation sind eng verwandt. log₁₀(10ⁿ) = n. Das bedeutet: Der Logarithmus einer Zehnerpotenz ist einfach der Exponent. Diese Eigenschaft ist die Grundlage des pH-Werts: pH = −log₁₀[H⁺]. Bei [H⁺] = 10⁻⁷ mol/L (Neutralpunkt) ist pH = −(−7) = 7.

Für Konzentrationen, die keine reinen Zehnerpotenzen sind, gelten die Logarithmusgesetze: log(a × b) = log(a) + log(b). Also log(3 × 10⁻⁵) = log(3) + log(10⁻⁵) = 0,477 + (−5) = −4,523. Daraus folgt pH = 4,52 (für eine Lösung mit [H⁺] = 3 × 10⁻⁵ mol/L).

## MedAT-Beispiel: Avogadro-Zahl

N_A = 6,022 × 10²³ ist die Avogadro-Konstante — die Anzahl der Teilchen in einem Mol. Typische Aufgabe: Wie viele Ionen enthält 0,05 mol NaCl? Antwort: 0,05 mol × 6,022 × 10²³ /mol = (0,05 × 6,022) × 10²³ = 0,3011 × 10²³ = 3,011 × 10²². Diese Aufgabe kombiniert wissenschaftliche Notation mit Mol-Rechnung — eine häufige Kombination am MedAT.`,
      lernziele: [
        'Zahlen in wissenschaftlicher Notation multiplizieren und dividieren',
        'Addition und Subtraktion durch Angleichen der Exponenten durchführen',
        'Den Zusammenhang zwischen wissenschaftlicher Notation und Logarithmus erklären',
        'pH-Berechnungen mit der Definition pH = −log₁₀[H⁺] durchführen',
      ],
      sections: [
        {
          heading: 'Multiplikation und Division — Schritt für Schritt',
          text: 'Bei Multiplikation werden Vorzahlen multipliziert und Exponenten addiert. Bei Division werden Vorzahlen dividiert und Exponenten subtrahiert. Achtung: Das Ergebnis muss immer in korrekte wissenschaftliche Notation gebracht werden. Wenn die Vorzahl nach der Rechnung ≥ 10 ist (z.B. 15), verschiebt man das Komma eine Stelle nach links und erhöht den Exponenten um 1: 15 × 10³ = 1,5 × 10⁴. Ist die Vorzahl < 1 (z.B. 0,3), verschiebt man das Komma nach rechts und erniedrigt den Exponenten um 1: 0,3 × 10² = 3 × 10¹.',
        },
        {
          heading: 'Addition und Subtraktion — Exponenten angleichen',
          text: 'Vor dem Addieren oder Subtrahieren müssen beide Zahlen auf denselben Exponenten gebracht werden. Es empfiehlt sich, immer auf den größeren Exponenten anzugleichen (Vorzahl der kleineren Zahl wird dann kleiner als 1 — das ist für den Zwischenschritt erlaubt). Das Endresultat wird dann wieder in korrekte wissenschaftliche Notation gebracht, falls nötig.',
        },
        {
          heading: 'Logarithmus und pH-Wert',
          text: 'log₁₀(10ⁿ) = n ist die wichtigste Logarithmusregel für den MedAT. Der pH-Wert ist definiert als pH = −log₁₀[H⁺]. Ein pH von 7 entspricht [H⁺] = 10⁻⁷ mol/L; pH 4 entspricht [H⁺] = 10⁻⁴ mol/L — 1.000× mehr Wasserstoffionen. Jede pH-Einheit entspricht einer Zehnerpotenz in der [H⁺]-Konzentration. Das pOH = 14 − pH bei 37°C. Diese Zusammenhänge sind fundamental für die Säure-Basen-Chemie im MedAT.',
          merksatz: 'Jede pH-Einheit = 10-facher Unterschied in [H⁺]; pH 7 = 10⁻⁷ mol/L H⁺',
        },
      ],
      merksätze: [
        'Multiplikation: Vorzahlen ×, Exponenten +; Division: Vorzahlen ÷, Exponenten −',
        'Addition/Subtraktion: erst Exponenten angleichen, dann Vorzahlen verrechnen',
        'log₁₀(10ⁿ) = n → pH = −log₁₀[H⁺] → bei pH 7 ist [H⁺] = 10⁻⁷ mol/L',
      ],
      altfrage: {
        question: 'Eine Stammlösung hat eine Konzentration von 6 × 10⁻² mol/L. Sie verdünnen 2 × 10⁻¹ L dieser Lösung auf ein Endvolumen von 4 × 10⁰ L. Welche Konzentration (in mol/L) hat die verdünnte Lösung?',
        answer: 'Schritt 1: Stoffmenge berechnen: n = c × V = (6 × 10⁻²) × (2 × 10⁻¹) = 12 × 10⁻³ = 1,2 × 10⁻² mol. Schritt 2: Konzentration in Endvolumen: c = n/V = (1,2 × 10⁻²) / (4 × 10⁰) = 0,3 × 10⁻² = 3 × 10⁻³ mol/L = 3 mmol/L. Ergebnis: Die verdünnte Lösung hat eine Konzentration von 3 × 10⁻³ mol/L.',
      },
      klinischerBezug: 'Die Pharmakokinetik arbeitet intensiv mit wissenschaftlicher Notation. Die Plasmahalbwertszeit eines Medikaments bestimmt, wie viel nach n Halbwertszeiten noch im Körper ist: N(t) = N₀ × (½)ⁿ = N₀ × 2⁻ⁿ = N₀ × 10^(−n × log₁₀2) ≈ N₀ × 10^(−0,301n). Nach 10 Halbwertszeiten ist noch N₀ × (½)¹⁰ = N₀/1024 ≈ 0,1% der ursprünglichen Dosis vorhanden. Dieses exponentielle Abklingen — ausgedrückt in wissenschaftlicher Notation — ist grundlegend für das Verständnis von Dosierungsintervallen.',
      selfTest: [
        {
          question: 'Was ergibt (4 × 10³) × (5 × 10²) in korrekter wissenschaftlicher Notation?',
          options: ['2 × 10⁶', '20 × 10⁵', '2 × 10⁵', '4 × 10⁶', '2 × 10⁷'],
          correctIndex: 0,
          explanation: 'Vorzahlen: 4 × 5 = 20. Exponenten: 3 + 2 = 5. Zunächst: 20 × 10⁵. Da 20 ≥ 10, wird zu 2,0 × 10⁶ umgeschrieben (Komma eine Stelle nach links, Exponent +1). Ergebnis: 2 × 10⁶.',
          hints: ['Multipliziere erst die Vorzahlen, dann addiere die Exponenten.', '20 × 10⁵ ist nicht in korrekter wissenschaftlicher Notation — wie wird 20 angepasst?'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ergibt (9 × 10⁻²) / (3 × 10⁴)?',
          options: ['3 × 10⁻⁶', '3 × 10⁻⁸', '3 × 10⁶', '3 × 10²', '3 × 10⁻²'],
          correctIndex: 0,
          explanation: 'Vorzahlen: 9/3 = 3. Exponenten: −2 − 4 = −6. Ergebnis: 3 × 10⁻⁶. Das entspricht 3 Mikromol, eine typische Größenordnung für biochemische Konzentrationen.',
          hints: ['Dividiere die Vorzahlen: 9/3 = 3.', 'Subtrahiere die Exponenten: −2 − (+4) = ?'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Wie lautet 5,0 × 10³ − 3,0 × 10²?',
          options: ['4,7 × 10³', '2,0 × 10²', '4,7 × 10²', '5,0 × 10³', '2,0 × 10³'],
          correctIndex: 0,
          explanation: '3,0 × 10² auf den Exponenten 10³ bringen: 3,0 × 10² = 0,3 × 10³. Dann: 5,0 × 10³ − 0,3 × 10³ = 4,7 × 10³. Das Ergebnis ist bereits in korrekter wissenschaftlicher Notation.',
          hints: ['Bringe 3,0 × 10² auf denselben Exponenten wie 5,0 × 10³.', '3,0 × 10² = 0,3 × 10³ → dann subtrahiere die Vorzahlen.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welchen pH-Wert hat eine Lösung mit [H⁺] = 10⁻⁴ mol/L?',
          options: ['4', '−4', '10', '0,0001', '14'],
          correctIndex: 0,
          explanation: 'pH = −log₁₀[H⁺] = −log₁₀(10⁻⁴) = −(−4) = 4. Ein pH von 4 entspricht einer sauren Lösung (unter dem Neutralwert von 7). Diese direkte Umrechnung gilt immer für Konzentrationen, die reine Zehnerpotenzen sind.',
          hints: ['pH = −log₁₀[H⁺]. log₁₀(10⁻⁴) = −4.', '−log₁₀(10⁻⁴) = −(−4) = ?'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Avogadro N_A = 6,022 × 10²³. Wie viele Moleküle sind in 0,5 mol Wasser?',
          options: ['3,011 × 10²³', '6,022 × 10²³', '1,2 × 10²⁴', '3,011 × 10²²', '6,022 × 10²²'],
          correctIndex: 0,
          explanation: 'Anzahl = n × N_A = 0,5 × 6,022 × 10²³ = 3,011 × 10²³. 0,5 = 5 × 10⁻¹, daher: (5 × 10⁻¹) × (6,022 × 10²³) = 30,11 × 10²² = 3,011 × 10²³. Halbes Mol enthält die Hälfte der Avogadro-Zahl an Molekülen.',
          hints: ['Multipliziere 0,5 mit der Avogadro-Zahl.', '0,5 × 6,022 × 10²³ = (0,5 × 6,022) × 10²³.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Eine Lösung hat [H⁺] = 3 × 10⁻⁵ mol/L. log₁₀(3) ≈ 0,48. Welchen pH hat sie näherungsweise?',
          options: ['4,52', '5,48', '−4,52', '4,48', '5,52'],
          correctIndex: 0,
          explanation: 'pH = −log₁₀(3 × 10⁻⁵) = −[log₁₀(3) + log₁₀(10⁻⁵)] = −[0,48 + (−5)] = −[−4,52] = 4,52. Der Logarithmus eines Produkts ist die Summe der Logarithmen. Das Ergebnis liegt im sauren Bereich.',
          hints: ['log(a × b) = log(a) + log(b). Wie lautet log₁₀(3 × 10⁻⁵)?', 'log₁₀(3) ≈ 0,48 und log₁₀(10⁻⁵) = −5. Addiere beide.'],
          difficulty: 3,
          tags: [],
        },
      ],
    },
  ],
};
