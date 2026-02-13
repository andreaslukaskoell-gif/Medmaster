import type { Kapitel } from '../types';

export const chemKap8: Kapitel = {
  id: 'chem-kap8',
  title: 'Säuren, Basen & pH',
  subject: 'chemie',
  icon: '🧪',
  estimatedTime: '25 Minuten',
  unterkapitel: [
    {
      id: 'chem-kap8-1',
      title: 'Säure-Base-Theorien',
      content: `Es gibt drei wichtige Säure-Base-Theorien.

**Arrhenius-Theorie** (1887): Säuren geben in Wasser H⁺-Ionen ab. Basen setzen OH⁻-Ionen frei. Beispiel: HCl → H⁺ + Cl⁻ (Säure), NaOH → Na⁺ + OH⁻ (Base). Die Neutralisation ist die Vereinigung von H⁺ und OH⁻ zu Wasser: H⁺ + OH⁻ → H₂O. Diese Definition ist auf wässrige Lösungen beschränkt. Sie kann nicht erklären, warum Ammoniak (NH₃) in Wasser basisch reagiert, obwohl es keine OH⁻-Ionen enthält.

**Brønsted-Lowry-Theorie** (1923): Eine Säure ist ein **Protonendonator** (gibt H⁺ ab). Eine Base ist ein **Protonenakzeptor** (nimmt H⁺ auf). Jede Säure-Base-Reaktion ist eine Protonenübertragung. Wasser kann dabei sowohl als Säure als auch als Base fungieren (es ist **amphoter**). Reaktion: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻. Hier gibt Wasser ein Proton an Ammoniak ab (Wasser als Säure, NH₃ als Base). Jede Brønsted-Säure hat eine **konjugierte Base** (z. B. HCl/Cl⁻). Jede Base hat eine **konjugierte Säure** (z. B. NH₃/NH₄⁺). Je stärker eine Säure, desto schwächer ihre konjugierte Base.

**Lewis-Theorie**: Am umfassendsten. Eine Lewis-Säure ist ein **Elektronenpaarakzeptor**. Eine Lewis-Base ist ein **Elektronenpaardonator**. Diese Definition umfasst auch Reaktionen ohne Protonenübertragung. Beispiel: BF₃ (Lewis-Säure, leere p-Orbitale) + NH₃ (Lewis-Base, freies Elektronenpaar) → BF₃·NH₃. In der Koordinationschemie fungieren Metallionen als Lewis-Säuren, Liganden als Lewis-Basen.

Für das MedAT ist die Brønsted-Lowry-Theorie am wichtigsten. Sie ist die Grundlage für pH-Berechnungen und Puffersysteme. Beziehung: Arrhenius ⊂ Brønsted ⊂ Lewis.`,
      merksätze: [
        'Arrhenius: Säure = H⁺-Lieferant, Base = OH⁻-Lieferant (nur in Wasser). Brønsted: Säure = Protonendonator, Base = Protonenakzeptor (allgemeiner).',
        'Lewis: Säure = Elektronenpaarakzeptor, Base = Elektronenpaardonator (am umfassendsten). Merke: Arrhenius ⊂ Brønsted ⊂ Lewis.'
      ],
      altfrage: {
        question: 'Warum reagiert Ammoniak (NH₃) in Wasser basisch, obwohl es kein OH⁻ enthält?',
        answer: 'Nach Brønsted ist NH₃ eine Base, weil es als Protonenakzeptor ein H⁺ vom Wasser aufnimmt: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻. Die OH⁻-Ionen entstehen erst durch die Protonenübertragung. Die Arrhenius-Theorie kann dies nicht direkt erklären.'
      },
      klinischerBezug: 'Metallionen wie Fe²⁺, Zn²⁺ oder Cu²⁺ fungieren im Körper als **Lewis-Säuren** in den aktiven Zentren von Metallenzymen. Das Zn²⁺-Ion in der **Carboanhydrase** koordiniert ein Wassermolekül und aktiviert es für die Reaktion CO₂ + H₂O → HCO₃⁻ + H⁺. Diese Reaktion ist essenziell für den CO₂-Transport im Blut. Ohne Carboanhydrase würde die Reaktion zu langsam ablaufen. Das Enzym beschleunigt sie um den Faktor 10⁷. Bei **Acetazolamid** (Carboanhydrase-Hemmer) wird die Reaktion blockiert. Anwendung: Behandlung von Glaukom (Augeninnendruck sinkt) und Höhenkrankheit.',
      selfTest: [
        {
          question: 'Welche Aussage beschreibt eine Brønsted-Base korrekt?',
          options: [
            'Sie gibt Protonen ab.',
            'Sie nimmt Protonen auf.',
            'Sie gibt OH⁻-Ionen in Lösung ab.',
            'Sie akzeptiert Elektronenpaare.',
            'Sie reagiert exotherm mit Wasser.'
          ],
          correctIndex: 1,
          explanation: 'Eine Brønsted-Base ist ein Protonenakzeptor — sie nimmt H⁺-Ionen auf. Option A beschreibt eine Brønsted-Säure, C eine Arrhenius-Base, D eine Lewis-Säure.'
        },
        {
          question: 'Was ist das konjugierte Säure-Base-Paar von HCO₃⁻ als Base?',
          options: [
            'HCO₃⁻ / CO₃²⁻',
            'H₂CO₃ / HCO₃⁻',
            'HCO₃⁻ / H₂CO₃',
            'CO₃²⁻ / HCO₃⁻',
            'H₃O⁺ / HCO₃⁻'
          ],
          correctIndex: 1,
          explanation: 'Wenn HCO₃⁻ als Base ein Proton aufnimmt, entsteht H₂CO₃ als konjugierte Säure. Das Paar ist H₂CO₃ (konjugierte Säure) / HCO₃⁻ (Base).'
        },
        {
          question: 'Welcher Stoff ist eine Lewis-Säure, aber KEINE Brønsted-Säure?',
          options: [
            'HCl',
            'H₂SO₄',
            'BF₃',
            'H₃O⁺',
            'AlCl₃'
          ],
          correctIndex: 2,
          explanation: 'BF₃ hat ein leeres p-Orbital am Bor und kann Elektronenpaare aufnehmen (Lewis-Säure), gibt aber kein Proton ab (keine Brønsted-Säure). HCl, H₂SO₄ und H₃O⁺ sind sowohl Lewis- als auch Brønsted-Säuren.'
        }
      ]
    },
    {
      id: 'chem-kap8-2',
      title: 'pH-Wert & Berechnungen',
      diagram: 'ph-scale',
      content: `Der **pH-Wert** ist ein Maß für die Konzentration der Hydronium-Ionen (H₃O⁺ bzw. vereinfacht H⁺) in wässriger Lösung. Definition: **pH = -log₁₀[H⁺]**. Analog: pOH = -log₁₀[OH⁻].

In reinem Wasser bei 25 °C: [H⁺] = [OH⁻] = 10⁻⁷ mol/L. Daraus folgt pH = 7 (neutral). Die pH-Skala reicht von 0 bis 14. Werte unter 7 sind sauer, Werte über 7 basisch. Die Skala ist logarithmisch. Eine pH-Änderung um 1 Einheit entspricht einer 10-fachen Konzentrationsänderung.

Das **Ionenprodukt des Wassers** lautet: Kw = [H⁺] · [OH⁻] = 10⁻¹⁴ mol²/L² (bei 25 °C). Daraus folgt: **pH + pOH = 14** (bei 25 °C).

**Starke Säuren** (z. B. HCl, HNO₃, H₂SO₄) dissoziieren vollständig. Für 0,01 mol/L HCl gilt: [H⁺] = 0,01 mol/L → pH = -log(0,01) = 2.

**Schwache Säuren** (z. B. Essigsäure CH₃COOH) dissoziieren nur teilweise. Man benötigt die **Säuredissoziationskonstante** Ks (oder pKs). Formel: pH = ½ · (pKs - log c₀). Je kleiner der pKs-Wert, desto stärker die Säure.

**Starke Basen** (z. B. NaOH): Für 0,001 mol/L NaOH gilt: [OH⁻] = 10⁻³ → pOH = 3 → pH = 14 - 3 = 11.

**Schwache Basen** (z. B. NH₃ mit Kb): Zunächst pOH berechnen: pOH = ½ · (pKb - log c₀), dann pH = 14 - pOH. Es gilt: pKs + pKb = 14 für ein konjugiertes Säure-Base-Paar.

**Mehrprotonige Säuren** (z. B. H₂SO₄, H₃PO₄) dissoziieren stufenweise. Jede Stufe hat eine eigene Ks-Konstante (Ks₁ > Ks₂ > Ks₃). Bei Berechnungen dominiert meist die erste Dissoziationsstufe.`,
      merksätze: [
        'pH = -log[H⁺], pOH = -log[OH⁻], pH + pOH = 14 (bei 25 °C). Eine pH-Einheit = 10-fache Konzentrationsänderung!',
        'Starke Säuren: pH = -log(c₀). Schwache Säuren: pH = ½(pKs - log c₀). Merke: pKs + pKb = 14 für konjugierte Paare.'
      ],
      altfrage: {
        question: 'Wie lautet der pH-Wert einer 0,001 mol/L HCl-Lösung?',
        answer: 'HCl ist eine starke Säure und dissoziiert vollständig: [H⁺] = 0,001 = 10⁻³ mol/L. pH = -log(10⁻³) = 3.'
      },
      klinischerBezug: 'Der **Blut-pH** wird physiologisch sehr eng zwischen 7,35 und 7,45 reguliert. Werte unter 7,35: **Azidose**. Werte über 7,45: **Alkalose**. Bereits geringe Abweichungen können lebensgefährlich sein. Ein pH unter 6,8 oder über 7,8 ist in der Regel nicht mit dem Leben vereinbar. Grund: Enzymfunktionen und Membranprozesse sind pH-abhängig. Bei pH 6,8 drohen Bewusstlosigkeit und Koma. Bei pH 7,8 drohen Krämpfe und Arrhythmien. Die **Blutgasanalyse** (BGA) misst pH, pCO₂ und HCO₃⁻. Sie ist essenziell zur Diagnose von Säure-Base-Störungen. Beispiele: **Metabolische Azidose** (z. B. diabetische Ketoazidose, Laktatazidose), **respiratorische Azidose** (z. B. COPD, Hypoventilation), **metabolische Alkalose** (z. B. Erbrechen, Diuretika), **respiratorische Alkalose** (z. B. Hyperventilation, Panikattacke).',
      selfTest: [
        {
          question: 'Welchen pH-Wert hat eine 0,01 mol/L NaOH-Lösung (bei 25 °C)?',
          options: [
            'pH = 2',
            'pH = 10',
            'pH = 12',
            'pH = 14',
            'pH = 7'
          ],
          correctIndex: 2,
          explanation: 'NaOH ist eine starke Base: [OH⁻] = 0,01 = 10⁻² mol/L → pOH = 2 → pH = 14 - 2 = 12.'
        },
        {
          question: 'Um welchen Faktor unterscheidet sich die H⁺-Konzentration bei pH 3 und pH 5?',
          options: [
            'Faktor 2',
            'Faktor 20',
            'Faktor 100',
            'Faktor 1000',
            'Faktor 10'
          ],
          correctIndex: 2,
          explanation: 'Die pH-Skala ist logarithmisch. Zwischen pH 3 und pH 5 liegen 2 Einheiten, also 10² = 100-fache Konzentrationsänderung. pH 3: [H⁺] = 10⁻³, pH 5: [H⁺] = 10⁻⁵ → Faktor 100.'
        },
        {
          question: 'Welche Aussage zum Ionenprodukt des Wassers ist korrekt?',
          options: [
            'Kw = [H⁺] + [OH⁻] = 10⁻¹⁴',
            'Kw = [H⁺] · [OH⁻] = 10⁻⁷',
            'Kw = [H⁺] · [OH⁻] = 10⁻¹⁴ (bei 25 °C)',
            'Kw ist unabhängig von der Temperatur',
            'Kw = [H⁺]² · [OH⁻] = 10⁻¹⁴'
          ],
          correctIndex: 2,
          explanation: 'Das Ionenprodukt des Wassers ist Kw = [H⁺] · [OH⁻] = 10⁻¹⁴ mol²/L² bei 25 °C. Es ist ein Produkt (nicht Summe), und der Wert ist temperaturabhängig (steigt mit zunehmender Temperatur).'
        }
      ]
    },
    {
      id: 'chem-kap8-3',
      title: 'Puffer & Titration',
      content: `Ein **Puffer** ist eine Lösung, die ihren pH-Wert bei Zugabe moderater Mengen an Säure oder Base nahezu konstant hält. Pufferlösungen bestehen aus einer schwachen Säure und ihrer konjugierten Base (z. B. CH₃COOH / CH₃COO⁻) oder einer schwachen Base und ihrer konjugierten Säure (z. B. NH₃ / NH₄⁺).

Wirkungsweise: Zugegebene H⁺-Ionen werden von der Base abgefangen (A⁻ + H⁺ → HA). Zugegebene OH⁻-Ionen werden von der Säure neutralisiert (HA + OH⁻ → A⁻ + H₂O).

Der pH-Wert einer Pufferlösung wird durch die **Henderson-Hasselbalch-Gleichung** beschrieben: **pH = pKs + log([A⁻]/[HA])**. [A⁻] ist die Konzentration der konjugierten Base, [HA] die der schwachen Säure.

Die **Pufferkapazität** ist am größten, wenn [A⁻] = [HA], also pH = pKs. In diesem Fall kann der Puffer gleich viel Säure wie Base abfangen. Effektiv puffert ein System im Bereich pH = pKs ± 1.

Der wichtigste Puffer im Blut ist das **Kohlensäure-Bicarbonat-Puffersystem** (H₂CO₃ / HCO₃⁻) mit pKs = 6,1. Obwohl dieser pKs-Wert weit vom Blut-pH (7,4) entfernt liegt, ist das System extrem leistungsfähig. Grund: Es ist ein offenes System. Die Lunge reguliert CO₂ (Abatmung), die Niere reguliert HCO₃⁻ (Rückresorption).

Weitere Puffersysteme im Körper: **Phosphatpuffer** (H₂PO₄⁻ / HPO₄²⁻, pKs = 6,8), **Proteinatpuffer** (v. a. Hämoglobin), **Ammoniumpuffer** in der Niere.

Bei einer **Titration** wird eine Säure (oder Base) schrittweise mit einer Base (oder Säure) bekannter Konzentration versetzt, um die unbekannte Konzentration zu bestimmen. Am **Äquivalenzpunkt** sind genau gleich viele Mol Säure und Base zusammengegeben worden. Bei der Titration einer starken Säure mit einer starken Base liegt der Äquivalenzpunkt bei pH = 7. Bei einer schwachen Säure mit starker Base liegt er im basischen Bereich (pH > 7), da die konjugierte Base übrig bleibt.

Die **Titrationskurve** zeigt den pH-Verlauf in Abhängigkeit vom Volumen der zugegebenen Maßlösung. Am **Halbäquivalenzpunkt** (halbe Menge der Base zugegeben) gilt [HA] = [A⁻], also pH = pKs. Dieser Punkt wird zur Bestimmung des pKs-Werts verwendet.

**Indikatoren** (z. B. Phenolphthalein, Methylorange) zeigen durch Farbumschlag den Endpunkt an. Der Indikator muss so gewählt werden, dass sein Umschlagbereich den Äquivalenzpunkt einschließt.`,
      merksätze: [
        'Henderson-Hasselbalch: pH = pKs + log([A⁻]/[HA]). Maximale Pufferkapazität bei [A⁻] = [HA], also pH = pKs.',
        'Blutpuffer (H₂CO₃/HCO₃⁻) ist ein offenes System: Lunge reguliert CO₂, Niere reguliert HCO₃⁻ → extrem hohe Kapazität trotz pKs = 6,1.'
      ],
      altfrage: {
        question: 'Am Halbäquivalenzpunkt einer Titration einer schwachen Säure gilt [HA] = [A⁻]. Welcher Zusammenhang besteht dann zwischen pH und pKs?',
        answer: 'Am Halbäquivalenzpunkt ist [A⁻] = [HA], daher wird log([A⁻]/[HA]) = log(1) = 0. Aus der Henderson-Hasselbalch-Gleichung folgt: pH = pKs + 0 = pKs.'
      },
      klinischerBezug: 'Bei einer **metabolischen Azidose** (z. B. bei diabetischer Ketoazidose) verbraucht der Körper HCO₃⁻, um die überschüssigen H⁺-Ionen zu puffern. Das Gleichgewicht CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ verschiebt sich nach rechts. Der HCO₃⁻-Spiegel sinkt (normal: 22–26 mmol/L), der pH fällt (unter 7,35). Kompensatorisch steigert die Lunge die Atemfrequenz (**Kußmaul-Atmung**), um vermehrt CO₂ abzuatmen. Das Gleichgewicht verschiebt sich zurück nach links, der pH steigt. Die Blutgasanalyse zeigt: pH niedrig, pCO₂ niedrig (Kompensation), HCO₃⁻ niedrig. Therapie: Behandlung der Grunderkrankung (z. B. Insulin bei diabetischer Ketoazidose), evtl. Bicarbonat-Infusion bei schwerer Azidose (pH < 7,1). Bei **metabolischer Alkalose** (z. B. Erbrechen, Diuretika) steigt HCO₃⁻, der pH steigt. Die Lunge kompensiert durch Hypoventilation (CO₂-Retention).',
      selfTest: [
        {
          question: 'Welchen pH-Wert hat ein Acetatpuffer (pKs = 4,75) mit [CH₃COO⁻] = 0,2 mol/L und [CH₃COOH] = 0,02 mol/L?',
          options: [
            'pH = 3,75',
            'pH = 4,75',
            'pH = 5,75',
            'pH = 6,75',
            'pH = 4,25'
          ],
          correctIndex: 2,
          explanation: 'Henderson-Hasselbalch: pH = 4,75 + log(0,2/0,02) = 4,75 + log(10) = 4,75 + 1 = 5,75.'
        },
        {
          question: 'Wo liegt der Äquivalenzpunkt bei der Titration von Essigsäure (schwache Säure) mit NaOH (starke Base)?',
          options: [
            'Bei pH = 7 (neutral)',
            'Bei pH < 7 (im sauren Bereich)',
            'Bei pH > 7 (im basischen Bereich)',
            'Bei pH = pKs',
            'Bei pH = 14 - pKs'
          ],
          correctIndex: 2,
          explanation: 'Am Äquivalenzpunkt liegt nur die konjugierte Base (Acetat) vor, die schwach basisch reagiert. Daher ist der pH > 7. pH = pKs gilt am Halbäquivalenzpunkt, nicht am Äquivalenzpunkt.'
        },
        {
          question: 'Welches Puffersystem ist im Blut am wichtigsten?',
          options: [
            'Ammonium-Puffer (NH₃/NH₄⁺)',
            'Phosphatpuffer (H₂PO₄⁻/HPO₄²⁻)',
            'Kohlensäure-Bicarbonat-Puffer (H₂CO₃/HCO₃⁻)',
            'Acetatpuffer (CH₃COOH/CH₃COO⁻)',
            'Citratpuffer (Citronensäure/Citrat)'
          ],
          correctIndex: 2,
          explanation: 'Das Kohlensäure-Bicarbonat-System (H₂CO₃/HCO₃⁻) ist der wichtigste Blutpuffer. Als offenes System wird es durch Lunge (CO₂) und Niere (HCO₃⁻) reguliert und hat eine sehr hohe Pufferkapazität.'
        }
      ]
    }
  ]
};
