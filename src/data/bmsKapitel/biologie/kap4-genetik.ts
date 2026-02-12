import type { Kapitel } from '../types';

export const bioKap4: Kapitel = {
  id: 'bio-kap4',
  title: 'Genetik',
  subject: 'biologie',
  icon: '🧬',
  estimatedTime: '50 Minuten',
  unterkapitel: [
    // =====================================================================
    // 4.1 Mendelsche Regeln
    // =====================================================================
    {
      id: 'bio-kap4-uk1',
      title: 'Mendelsche Regeln',
      content: `Gregor Johann Mendel (1822–1884), ein Augustinermönch aus Brünn, legte mit seinen systematischen Kreuzungsversuchen an Erbsenpflanzen (Pisum sativum) den Grundstein der klassischen Genetik. Er wählte sieben klar unterscheidbare Merkmale (z. B. Blütenfarbe, Samenform, Wuchshöhe) und führte über viele Generationen hinweg kontrollierte Kreuzungen durch. Sein entscheidender methodischer Beitrag war die quantitative Auswertung großer Nachkommenzahlen, wodurch er statistische Gesetzmäßigkeiten erkennen konnte. Mendels Arbeit blieb zu seinen Lebzeiten weitgehend unbeachtet und wurde erst 1900 von de Vries, Correns und Tschermak unabhängig voneinander wiederentdeckt.

Die erste Mendelsche Regel (Uniformitätsregel) besagt: Kreuzt man zwei homozygote (reinerbige) Eltern, die sich in einem Merkmal unterscheiden (z. B. AA × aa), so sind alle Nachkommen der F1-Generation phänotypisch und genotypisch uniform — sie sind alle heterozygot (Aa). Der Phänotyp der F1 entspricht dem dominanten Merkmal. Die zweite Mendelsche Regel (Spaltungsregel) beschreibt die F2-Generation: Kreuzt man die heterozygoten F1-Individuen untereinander (Aa × Aa), so spalten sich die Nachkommen im Verhältnis 3:1 (phänotypisch) bzw. 1:2:1 (genotypisch, also AA:Aa:aa) auf. Bei intermediärem Erbgang — wenn keines der Allele vollständig dominant ist — zeigt die F1-Generation einen intermediären Phänotyp, und die F2-Generation spaltet sich phänotypisch 1:2:1 auf (z. B. rote × weiße Blüten → F1 rosa, F2 rot:rosa:weiß = 1:2:1).

Die dritte Mendelsche Regel (Unabhängigkeitsregel oder Regel der freien Kombinierbarkeit) gilt für die Vererbung zweier Merkmale, die auf verschiedenen Chromosomen liegen (keine Kopplung). Kreuzt man dihybride F1-Individuen (AaBb × AaBb), so ergeben sich in der F2-Generation 16 Kombinationsmöglichkeiten mit dem phänotypischen Aufspaltungsverhältnis 9:3:3:1 (A_B_ : A_bb : aaB_ : aabb). Kreuzungsschemata (Punnett-Quadrate) sind ein unverzichtbares Werkzeug, um die möglichen Genotypen und deren Häufigkeiten systematisch zu ermitteln. Es ist wichtig zu beachten, dass die dritte Regel nur gilt, wenn die Gene nicht gekoppelt sind — liegen sie auf demselben Chromosom, werden sie häufiger gemeinsam vererbt (Kopplungsgruppe), es sei denn, Crossing-over trennt sie während der Meiose.`,
      merksaetze: [
        'Drei Mendelsche Regeln: 1. Uniformitätsregel (F1 einheitlich), 2. Spaltungsregel (F2 phänotypisch 3:1), 3. Unabhängigkeitsregel (dihybrid F2: 9:3:3:1) — gilt nur bei Genen auf verschiedenen Chromosomen.',
        'Intermediärer Erbgang: Keines der Allele ist vollständig dominant → F1 zeigt Mischphänotyp, F2 spaltet phänotypisch 1:2:1 auf.'
      ],
      altfrage: {
        question: 'In welchem Verhältnis spalten sich die Phänotypen der F2-Generation bei einem dihybriden Erbgang mit dominanter Vererbung auf?',
        answer: '9:3:3:1 — Neun Individuen zeigen beide dominante Merkmale, je drei zeigen ein dominantes und ein rezessives Merkmal, und eines zeigt beide rezessive Merkmale.'
      },
      klinischerBezug: 'Die Mendelschen Regeln sind fundamental für die genetische Beratung. Bei autosomal-rezessiven Erkrankungen wie Mukoviszidose (Cystische Fibrose) sind beide Elternteile häufig heterozygote Träger (Aa × Aa). Nach der Spaltungsregel besteht für jedes Kind eine 25%ige Wahrscheinlichkeit, die Erkrankung zu manifestieren (aa), eine 50%ige Wahrscheinlichkeit, gesunder Träger zu sein (Aa), und eine 25%ige Wahrscheinlichkeit, homozygot gesund zu sein (AA).',
      selfTest: [
        {
          question: 'Wie lautet das genotypische Aufspaltungsverhältnis in der F2-Generation bei einem monohybriden Erbgang mit dominanter Vererbung?',
          options: [
            '3:1',
            '1:2:1',
            '9:3:3:1',
            '1:1'
          ],
          correctIndex: 1,
          explanation: 'Das genotypische Verhältnis der F2 ist 1 AA : 2 Aa : 1 aa = 1:2:1. Das phänotypische Verhältnis ist 3:1 (drei dominant : ein rezessiv), da AA und Aa den gleichen Phänotyp zeigen.'
        },
        {
          question: 'Unter welcher Voraussetzung gilt die dritte Mendelsche Regel (Unabhängigkeitsregel)?',
          options: [
            'Die betrachteten Gene müssen auf demselben Chromosom liegen',
            'Die betrachteten Gene müssen auf verschiedenen Chromosomen liegen (keine Kopplung)',
            'Es muss ein intermediärer Erbgang vorliegen',
            'Beide Eltern müssen heterozygot sein'
          ],
          correctIndex: 1,
          explanation: 'Die Unabhängigkeitsregel gilt nur, wenn die betrachteten Gene auf verschiedenen Chromosomen liegen und somit unabhängig voneinander segregieren. Bei gekoppelten Genen (gleiches Chromosom) werden die Merkmale häufiger gemeinsam vererbt.'
        },
        {
          question: 'Was versteht man unter einem intermediären Erbgang?',
          options: [
            'Ein Allel ist vollständig dominant über das andere',
            'Beide Allele werden gleichzeitig exprimiert (wie bei Blutgruppen)',
            'Keines der Allele ist vollständig dominant — Heterozygote zeigen einen Mischphänotyp',
            'Das Merkmal wird nur an männliche Nachkommen vererbt'
          ],
          correctIndex: 2,
          explanation: 'Beim intermediären Erbgang zeigen heterozygote Individuen einen Phänotyp, der zwischen den homozygoten Formen liegt (z. B. rote × weiße Blüten → rosa in F1). Die F2 spaltet phänotypisch 1:2:1 auf.'
        }
      ]
    },

    // =====================================================================
    // 4.2 Dominant & Rezessiv
    // =====================================================================
    {
      id: 'bio-kap4-uk2',
      title: 'Dominant & Rezessiv',
      content: `In der Genetik beschreiben die Begriffe „dominant" und „rezessiv" das Verhalten von Allelen bei der Merkmalsausprägung. Allele sind verschiedene Varianten desselben Gens, die an einem bestimmten Genort (Locus) auf homologen Chromosomen liegen. Ein dominantes Allel setzt sich phänotypisch durch, selbst wenn nur ein Exemplar vorhanden ist (heterozygot), während ein rezessives Allel nur dann phänotypisch in Erscheinung tritt, wenn es homozygot vorliegt (beide Allele sind rezessiv). Die Konvention verwendet Großbuchstaben für dominante (A) und Kleinbuchstaben für rezessive Allele (a). Es ist wichtig zu verstehen, dass Dominanz keine Aussage über die Häufigkeit oder den „Wert" eines Allels macht — es beschreibt lediglich das Verhältnis zweier Allele bei der Merkmalsausprägung.

Der Genotyp bezeichnet die genetische Ausstattung eines Individuums an einem bestimmten Locus, also die Kombination der Allele (z. B. AA, Aa, aa). Der Phänotyp ist dagegen das äußerlich sichtbare oder messbare Merkmal, das sich aus dem Genotyp und Umweltfaktoren ergibt. Ein homozygoter Organismus besitzt zwei identische Allele (AA oder aa), ein heterozygoter Organismus besitzt zwei verschiedene Allele (Aa). Bei vollständiger Dominanz haben die Genotypen AA und Aa denselben Phänotyp — nur der Genotyp aa zeigt den rezessiven Phänotyp. Dies erklärt, warum rezessive Merkmale „Generationen überspringen" können: Heterozygote Träger (Aa) sind phänotypisch unauffällig, können das rezessive Allel aber an ihre Nachkommen weitergeben. Erst wenn zwei Träger aufeinandertreffen, kann ein betroffenes Kind (aa) entstehen.

Neben der vollständigen Dominanz existieren weitere Formen der Allelinteraktion. Bei unvollständiger Dominanz (Intermediarität) zeigt der Heterozygote einen Phänotyp zwischen den beiden homozygoten Formen. Bei Kodominanz werden beide Allele vollständig und gleichzeitig exprimiert, wie bei den Blutgruppen A und B im AB0-System: Ein Individuum mit Genotyp I^A I^B hat die Blutgruppe AB und exprimiert sowohl A- als auch B-Antigene auf der Erythrozytenoberfläche. Eine weitere wichtige Unterscheidung ist die zwischen Penetranz (Anteil der Merkmalsträger mit einem bestimmten Genotyp, die den Phänotyp tatsächlich ausprägen) und Expressivität (Grad der Ausprägung eines Phänotyps bei vorhandener Penetranz). Bei autosomal-dominanten Erkrankungen kann die Penetranz unvollständig sein, sodass nicht alle Träger des mutierten Allels erkranken.`,
      merksaetze: [
        'Genotyp = genetische Zusammensetzung (AA, Aa, aa); Phänotyp = beobachtbares Merkmal. Bei vollständiger Dominanz haben AA und Aa denselben Phänotyp.',
        'Kodominanz (beide Allele voll exprimiert, z. B. Blutgruppe AB) ≠ Intermediarität (Mischphänotyp zwischen den homozygoten Formen).'
      ],
      altfrage: {
        question: 'Was ist der Unterschied zwischen Genotyp und Phänotyp?',
        answer: 'Der Genotyp ist die genetische Ausstattung (Allelkombination) an einem bestimmten Locus (z. B. Aa). Der Phänotyp ist das äußerlich beobachtbare Merkmal, das durch den Genotyp und Umwelteinflüsse bestimmt wird.'
      },
      klinischerBezug: 'Die Sichelzellanämie ist ein klassisches Beispiel für unvollständige Dominanz auf molekularer Ebene. Homozygote Träger (HbS/HbS) haben schwere Anämie mit sichelförmigen Erythrozyten, während heterozygote Träger (HbA/HbS) unter Normalbedingungen weitgehend symptomfrei sind. In Malariagebieten haben Heterozygote jedoch einen Selektionsvorteil (Heterozygotenvorteil), da Plasmodium falciparum sich in HbS-tragenden Erythrozyten schlechter vermehren kann.',
      selfTest: [
        {
          question: 'Ein Individuum mit dem Genotyp Aa — welche Aussage trifft bei vollständiger Dominanz zu?',
          options: [
            'Der Phänotyp entspricht dem rezessiven Merkmal',
            'Der Phänotyp ist intermediär zwischen dominant und rezessiv',
            'Der Phänotyp entspricht dem dominanten Merkmal',
            'Beide Merkmale werden gleichzeitig exprimiert'
          ],
          correctIndex: 2,
          explanation: 'Bei vollständiger Dominanz setzt sich das dominante Allel A phänotypisch durch. Ein heterozygoter Organismus (Aa) zeigt daher denselben Phänotyp wie ein homozygoter dominanter Organismus (AA).'
        },
        {
          question: 'Was versteht man unter Kodominanz?',
          options: [
            'Keines der Allele setzt sich durch, der Phänotyp ist intermediär',
            'Beide Allele werden gleichzeitig und vollständig exprimiert',
            'Ein Allel dominiert über das andere',
            'Das rezessive Allel setzt sich unter bestimmten Umweltbedingungen durch'
          ],
          correctIndex: 1,
          explanation: 'Bei Kodominanz werden beide Allele vollständig und gleichzeitig exprimiert. Das klassische Beispiel ist die Blutgruppe AB: Sowohl A- als auch B-Antigene werden auf den Erythrozyten präsentiert.'
        },
        {
          question: 'Warum können rezessive Merkmale „Generationen überspringen"?',
          options: [
            'Weil rezessive Allele instabil sind und spontan mutieren',
            'Weil heterozygote Träger (Aa) phänotypisch unauffällig sind, das Allel aber weitergeben können',
            'Weil rezessive Allele nur auf dem X-Chromosom liegen',
            'Weil rezessive Allele erst durch Umweltfaktoren aktiviert werden müssen'
          ],
          correctIndex: 1,
          explanation: 'Heterozygote Träger (Aa) zeigen bei vollständiger Dominanz den dominanten Phänotyp, tragen aber das rezessive Allel „verdeckt" und können es an die nächste Generation weitergeben. Treffen zwei Träger aufeinander, kann ein homozygoter Nachkomme (aa) mit rezessivem Phänotyp entstehen.'
        }
      ]
    },

    // =====================================================================
    // 4.3 Erbgänge
    // =====================================================================
    {
      id: 'bio-kap4-uk3',
      title: 'Erbgänge',
      content: `Die Kenntnis der verschiedenen Erbgänge ist fundamental für die Humangenetik und die klinische Medizin. Man unterscheidet grundsätzlich zwischen autosomalen und gonosomalen (geschlechtschromosomalen) Erbgängen. Bei autosomal-dominanten (AD) Erbgängen liegt das betroffene Gen auf einem Autosom, und bereits ein mutiertes Allel reicht aus, um die Erkrankung zu manifestieren. Betroffene haben in der Regel einen betroffenen Elternteil, Männer und Frauen sind gleich häufig betroffen, und es gibt keine Überträger — wer das Allel trägt, ist krank (bei vollständiger Penetranz). Typische Beispiele sind die Huntington-Krankheit (Chorea Huntington), Marfan-Syndrom und familiäre Hypercholesterinämie.

Bei autosomal-rezessiven (AR) Erbgängen müssen beide Allele die Mutation tragen, damit die Erkrankung phänotypisch auftritt. Heterozygote Träger (Aa) sind gesund, können das mutierte Allel aber an ihre Kinder weitergeben. AR-Erkrankungen treten gehäuft in konsanguinen (blutsverwandten) Familien auf, da dort die Wahrscheinlichkeit höher ist, dass beide Eltern dasselbe rezessive Allel tragen. Die Erkrankung kann Generationen überspringen und taucht oft „unerwartet" in Familien auf. Bekannte Beispiele sind Mukoviszidose (häufigste AR-Erkrankung bei Europäern mit einer Trägerfrequenz von ca. 1:25), Phenylketonurie (PKU) und Sichelzellanämie. Wenn beide Eltern Träger sind (Aa × Aa), beträgt das Risiko für ein betroffenes Kind 25 %.

X-chromosomale Erbgänge zeigen ein charakteristisches geschlechtsspezifisches Vererbungsmuster. Bei X-chromosomal-rezessiven Erkrankungen sind vorwiegend Männer betroffen, da sie nur ein X-Chromosom besitzen (hemizygot, X^a Y) und kein zweites X-Chromosom zum Ausgleich haben. Frauen können Konduktorinnen (Überträgerinnen, X^A X^a) sein und sind in der Regel phänotypisch gesund. Ein betroffener Vater kann die Krankheit nicht an seine Söhne weitergeben (er gibt ihnen das Y-Chromosom), aber alle seine Töchter werden Konduktorinnen. Klassische Beispiele sind Hämophilie A und B sowie Rot-Grün-Blindheit. Stammbäume (Pedigrees) sind das wichtigste Werkzeug zur Analyse von Erbgängen: Kreise symbolisieren Frauen, Quadrate Männer, ausgefüllte Symbole betroffene Personen, und halb ausgefüllte Symbole Überträger.`,
      diagram: `Stammbaum-Symbole und typische Erbgangmuster:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Symbole:  □ = Mann   ○ = Frau   ■/● = betroffen
          ◐/◑ = Überträger/in    ─── = Paarung

Autosomal-dominant:     Autosomal-rezessiv:
  ■───○                   ◐───◑
 ┌┴──┐                  ┌─┴──┐
 ■   ○                  ●  □  ◐
(50% betroffen)        (25% betroffen)

X-chromosomal-rezessiv:
  □───◑
 ┌┴──┐
 ■   ○/◑
(50% Söhne betroffen, 50% Töchter Konduktorinnen)`,
      merksaetze: [
        'Autosomal-dominant: Jede Generation betroffen, kein Geschlechtsunterschied, kein Überspringen. Autosomal-rezessiv: Überspringt Generationen, Konsanguinität erhöht das Risiko.',
        'X-chromosomal-rezessiv: Vorwiegend Männer betroffen (hemizygot), Mütter sind Konduktorinnen, keine Vater-Sohn-Übertragung möglich.'
      ],
      altfrage: {
        question: 'Warum sind bei X-chromosomal-rezessiven Erkrankungen vorwiegend Männer betroffen?',
        answer: 'Männer sind hemizygot für das X-Chromosom (XY) und besitzen daher nur ein Allel am betreffenden Locus. Ein einziges mutiertes Allel auf dem X-Chromosom führt daher zur Merkmalsausprägung, da kein zweites X-Chromosom mit einem funktionellen Allel zum Ausgleich vorhanden ist.'
      },
      klinischerBezug: 'Die Hämophilie A (Faktor-VIII-Mangel) ist ein klassisches Beispiel eines X-chromosomal-rezessiven Erbgangs. Historisch bekannt ist sie als „Bluterkrankheit" der europäischen Königshäuser, da Queen Victoria Konduktorin war und das mutierte Allel über ihre Töchter an zahlreiche Herrscherfamilien weitergab. Betroffene Männer zeigen eine gestörte Blutgerinnung mit spontanen Blutungen in Gelenke und Muskeln.',
      selfTest: [
        {
          question: 'Welches Merkmal ist typisch für einen autosomal-rezessiven Erbgang?',
          options: [
            'Betroffene in jeder Generation',
            'Nur Männer sind betroffen',
            'Die Erkrankung kann Generationen überspringen',
            'Es gibt keine Überträger'
          ],
          correctIndex: 2,
          explanation: 'Bei autosomal-rezessiven Erbgängen können heterozygote Träger (Aa) klinisch gesund sein. Die Erkrankung tritt erst auf, wenn ein Kind von beiden Eltern das rezessive Allel erbt (aa), was dazu führen kann, dass Generationen scheinbar übersprungen werden.'
        },
        {
          question: 'Kann ein Vater mit einer X-chromosomal-rezessiven Erkrankung die Krankheit direkt an seinen Sohn weitergeben?',
          options: [
            'Ja, mit einer Wahrscheinlichkeit von 50 %',
            'Ja, mit einer Wahrscheinlichkeit von 100 %',
            'Nein, da der Vater dem Sohn das Y-Chromosom vererbt',
            'Nur wenn die Mutter ebenfalls Trägerin ist'
          ],
          correctIndex: 2,
          explanation: 'Der Vater gibt seinen Söhnen das Y-Chromosom und seinen Töchtern das X-Chromosom. Daher kann ein betroffener Vater (X^a Y) die Erkrankung nicht direkt an Söhne weitergeben, aber alle seine Töchter werden Konduktorinnen (X^A X^a).'
        },
        {
          question: 'Wie hoch ist das Risiko für ein betroffenes Kind, wenn beide Eltern heterozygote Träger einer autosomal-rezessiven Erkrankung sind?',
          options: [
            '0 %',
            '25 %',
            '50 %',
            '75 %'
          ],
          correctIndex: 1,
          explanation: 'Bei Aa × Aa ergibt sich: 1/4 AA (gesund), 2/4 Aa (gesunde Träger), 1/4 aa (betroffen). Das Risiko für ein betroffenes Kind beträgt somit 25 % pro Schwangerschaft.'
        }
      ]
    },

    // =====================================================================
    // 4.4 Blutgruppenvererbung
    // =====================================================================
    {
      id: 'bio-kap4-uk4',
      title: 'Blutgruppenvererbung',
      content: `Das AB0-Blutgruppensystem, 1901 von Karl Landsteiner entdeckt, basiert auf Glykoprotein-Antigenen (A- und B-Antigene) auf der Oberfläche der Erythrozyten. Das zugehörige Gen liegt auf Chromosom 9 und besitzt drei Allele: I^A, I^B und i. Die Allele I^A und I^B sind kodominant zueinander — beide werden bei Heterozygotie gleichzeitig exprimiert —, während beide gegenüber dem Allel i dominant sind. Daraus ergeben sich vier Phänotypen (Blutgruppen) und sechs mögliche Genotypen: Blutgruppe A (I^A I^A oder I^A i), Blutgruppe B (I^B I^B oder I^B i), Blutgruppe AB (I^A I^B) und Blutgruppe 0 (ii). Im Serum befinden sich jeweils die Antikörper (Isoagglutinine) gegen die nicht vorhandenen Antigene: Blutgruppe A hat Anti-B, Blutgruppe B hat Anti-A, Blutgruppe AB hat keine Antikörper (Universalempfänger für Erythrozytenkonzentrate), Blutgruppe 0 hat Anti-A und Anti-B.

Das Rhesus-System ist das zweitwichtigste Blutgruppensystem. Der entscheidende Faktor ist das D-Antigen (Rhesus-Faktor): Rh-positiv (D vorhanden, ca. 85 % der europäischen Bevölkerung) und Rh-negativ (D fehlend, ca. 15 %). Die Vererbung des Rhesus-Faktors folgt einem autosomal-dominanten Erbgang: DD und Dd sind Rh-positiv, nur dd ist Rh-negativ. Im Gegensatz zum AB0-System gibt es beim Rhesus-System keine natürlich vorkommenden Antikörper — Anti-D-Antikörper entstehen erst nach Sensibilisierung (Kontakt mit Rh-positivem Blut). Die Kreuzprobe (Verträglichkeitsprobe) ist ein unverzichtbarer Sicherheitstest vor jeder Bluttransfusion. Bei der Major-Kreuzprobe werden Spendererythrozyten mit dem Empfängerserum inkubiert, bei der Minor-Kreuzprobe Empfängererythrozyten mit Spenderserum. Eine Agglutination (Verklumpung) zeigt eine Inkompatibilität an.

Die Rhesus-Inkompatibilität (Morbus haemolyticus neonatorum) ist eine klinisch hochrelevante Komplikation, die auftreten kann, wenn eine Rh-negative Mutter (dd) ein Rh-positives Kind (Dd) austrägt. Bei der ersten Schwangerschaft kommt es in der Regel nicht zu Problemen. Während der Geburt können jedoch fetale Rh-positive Erythrozyten in den mütterlichen Kreislauf gelangen und eine Immunantwort mit Bildung von Anti-D-IgG-Antikörpern auslösen (Sensibilisierung). Bei einer folgenden Schwangerschaft mit einem erneut Rh-positiven Kind können diese IgG-Antikörper die Plazenta passieren und die fetalen Erythrozyten zerstören (Hämolyse), was zu Anämie, Hydrops fetalis und im schlimmsten Fall zum intrauterinen Fruchttod führen kann. Durch die prophylaktische Gabe von Anti-D-Immunglobulin an die Mutter (in der 28.–30. SSW und innerhalb von 72 Stunden nach der Geburt) wird die Sensibilisierung verhindert, da die Anti-D-Antikörper die eingedrungenen fetalen Erythrozyten eliminieren, bevor das mütterliche Immunsystem aktiviert wird.`,
      merksaetze: [
        'AB0-Genetik: I^A und I^B kodominant zueinander, beide dominant über i. Sechs Genotypen → vier Phänotypen. Blutgruppe 0 (ii) = Universalspender für Erythrozyten.',
        'Rhesus-Inkompatibilität: Rh-negative Mutter + Rh-positives Kind → Sensibilisierung bei 1. Geburt → Gefahr ab 2. Schwangerschaft. Prophylaxe: Anti-D-Immunglobulin.'
      ],
      altfrage: {
        question: 'Welche Blutgruppe hat ein Mensch mit dem Genotyp I^A I^B und welche Antikörper befinden sich in seinem Serum?',
        answer: 'Blutgruppe AB — da I^A und I^B kodominant sind, werden beide Antigene auf den Erythrozyten exprimiert. Im Serum befinden sich keine Isoagglutinine (weder Anti-A noch Anti-B), weshalb Personen mit Blutgruppe AB als Universalempfänger für Erythrozytenkonzentrate gelten.'
      },
      klinischerBezug: 'Bei einer hämolytischen Transfusionsreaktion werden inkompatible Spendererythrozyten durch die Antikörper des Empfängers agglutiniert und lysiert. Eine AB0-inkompatible Transfusion kann innerhalb von Minuten zu Fieber, Schüttelfrost, Flankenschmerzen, Hämoglobinurie und im schlimmsten Fall zu Nierenversagen, DIC (disseminierte intravasale Gerinnung) und Tod führen. Deshalb ist der Bedside-Test (AB0-Identitätstest am Bett des Patienten) unmittelbar vor jeder Transfusion gesetzlich vorgeschrieben.',
      selfTest: [
        {
          question: 'Welchen Genotyp kann ein Kind haben, wenn die Mutter Blutgruppe A (I^A i) und der Vater Blutgruppe B (I^B i) hat?',
          options: [
            'Nur I^A I^B (Blutgruppe AB)',
            'I^A I^B, I^A i, I^B i oder ii (Blutgruppen AB, A, B oder 0)',
            'Nur I^A i oder I^B i (Blutgruppe A oder B)',
            'Nur ii (Blutgruppe 0)'
          ],
          correctIndex: 1,
          explanation: 'Die Kreuzung I^A i × I^B i ergibt vier mögliche Genotypen: I^A I^B (AB), I^A i (A), I^B i (B) und ii (0) — jeweils mit 25 % Wahrscheinlichkeit. Alle vier Blutgruppen sind möglich.'
        },
        {
          question: 'Warum kommt es bei der Rhesus-Inkompatibilität typischerweise erst ab der zweiten Schwangerschaft zu Komplikationen?',
          options: [
            'Weil die Plazenta in der ersten Schwangerschaft undurchlässig für Antikörper ist',
            'Weil die Sensibilisierung (Anti-D-Bildung) erst bei der Geburt des ersten Kindes stattfindet und die IgG-Antikörper erst bei einer Folgeschwangerschaft die Plazenta passieren',
            'Weil das erste Kind immer Rh-negativ ist',
            'Weil Anti-D-Antikörper erst nach dem 30. Lebensjahr gebildet werden können'
          ],
          correctIndex: 1,
          explanation: 'Die Sensibilisierung der Mutter erfolgt typischerweise bei der ersten Geburt durch Übertritt fetaler Rh-positiver Erythrozyten in den mütterlichen Kreislauf. Die dann gebildeten Anti-D-IgG-Antikörper können bei einer Folgeschwangerschaft die Plazenta passieren und die fetalen Erythrozyten eines erneut Rh-positiven Kindes angreifen.'
        },
        {
          question: 'Welche Blutgruppe gilt als Universalspender für Erythrozytenkonzentrate und warum?',
          options: [
            'Blutgruppe AB — weil sie keine Antikörper im Serum hat',
            'Blutgruppe A — weil das A-Antigen am häufigsten ist',
            'Blutgruppe 0 — weil die Erythrozyten weder A- noch B-Antigene tragen',
            'Blutgruppe B — weil Anti-A seltener vorkommt'
          ],
          correctIndex: 2,
          explanation: 'Blutgruppe 0 (Genotyp ii) hat weder A- noch B-Antigene auf den Erythrozyten, sodass die Erythrozyten von keinem Anti-A oder Anti-B des Empfängers angegriffen werden. Blutgruppe AB ist hingegen Universalempfänger.'
        }
      ]
    },

    // =====================================================================
    // 4.5 Humangenetik
    // =====================================================================
    {
      id: 'bio-kap4-uk5',
      title: 'Humangenetik',
      content: `Die Humangenetik befasst sich mit der genetischen Ausstattung des Menschen, deren Variationen und den daraus resultierenden Erkrankungen. Der menschliche Karyotyp umfasst 46 Chromosomen: 22 Paare Autosomen (nummeriert 1–22 nach abnehmender Größe) und ein Paar Geschlechtschromosomen (Gonosomen; XX bei Frauen, XY bei Männern). Ein Karyogramm ist die standardisierte Darstellung aller Chromosomen einer Zelle, geordnet nach Größe und Zentromerlage. Zur Erstellung wird eine Zellkultur (typischerweise Lymphozyten aus einer Blutprobe) angelegt, die Zellen werden in der Metaphase der Mitose arretiert (durch Colchicin, das die Spindelbildung hemmt), fixiert, gefärbt (z. B. Giemsa-Bänderung, GTG-Banding) und fotografiert. Die Bänderungsmuster ermöglichen die eindeutige Identifikation jedes Chromosoms.

Chromosomenaberrationen (numerische oder strukturelle Veränderungen) sind eine wichtige Ursache für genetische Erkrankungen und Fehlgeburten. Numerische Aberrationen entstehen meist durch Non-Disjunction (Nichttrennung homologer Chromosomen in der Meiose I oder der Schwesterchromatiden in der Meiose II). Die häufigste lebensfähige Trisomie ist die Trisomie 21 (Down-Syndrom) mit einem zusätzlichen Chromosom 21 (Karyotyp: 47,XX,+21 oder 47,XY,+21). Klinische Merkmale umfassen eine geistige Entwicklungsverzögerung, typische Fazies (flaches Gesicht, Epikanthus, Brushfield-Spots), Herzfehler (ca. 40–50 %, häufig AV-Kanal), Duodenalatresie und ein erhöhtes Leukämierisiko. Die Inzidenz steigt mit dem mütterlichen Alter deutlich an (ab 35 Jahren signifikant), da die Eizellen jahrzehntelang in der Meiose I arretiert waren und die Spindelfasern mit zunehmendem Alter fehleranfälliger werden.

Gonosomale Chromosomenstörungen betreffen die Geschlechtschromosomen. Das Turner-Syndrom (45,X0) ist die einzige lebensfähige Monosomie beim Menschen. Betroffene sind phänotypisch weiblich und zeigen Kleinwuchs, Gonadendysgenesie (Streifengonaden) mit primärer Amenorrhoe und Infertilität, Pterygium colli (Flügelfell am Hals) und häufig Herzfehler (v. a. bikuspide Aortenklappe, Aortenisthmusstenose). Die Inzidenz beträgt ca. 1:2500 weibliche Neugeborene. Das Klinefelter-Syndrom (47,XXY) betrifft phänotypisch männliche Individuen und ist mit einer Inzidenz von ca. 1:600 männliche Neugeborene die häufigste gonosomale Aberration. Klinische Merkmale sind Hochwuchs, Gynäkomastie, kleine feste Hoden, Hypogonadismus, Infertilität (Azoospermie) und ein leicht erhöhtes Risiko für Lernschwierigkeiten. Weitere gonosomale Anomalien umfassen das Triple-X-Syndrom (47,XXX) und das XYY-Syndrom (47,XYY), die oft klinisch mild verlaufen.`,
      merksaetze: [
        'Trisomie 21 (Down-Syndrom): Häufigste lebensfähige Trisomie, Risiko steigt mit mütterlichem Alter, typische Befunde: Herzfehler, Facies, Entwicklungsverzögerung.',
        'Turner (45,X0): Einzige lebensfähige Monosomie, weiblich, Kleinwuchs, Streifengonaden. Klinefelter (47,XXY): Männlich, Hochwuchs, Hypogonadismus, Infertilität.'
      ],
      altfrage: {
        question: 'Wie entsteht die Trisomie 21 und welcher Risikofaktor ist am bedeutsamsten?',
        answer: 'Die Trisomie 21 entsteht durch Non-Disjunction (Nichttrennung) des Chromosoms 21 in der Meiose (meist Meiose I der Mutter). Der wichtigste Risikofaktor ist das erhöhte mütterliche Alter, da die Eizellen jahrzehntelang in der Prophase I arretiert sind und die Spindelfunktion mit dem Alter abnimmt.'
      },
      klinischerBezug: 'Die Pränataldiagnostik ermöglicht die frühzeitige Erkennung von Chromosomenstörungen. Nicht-invasive Methoden umfassen das Ersttrimester-Screening (Nackentransparenzmessung + Biochemie) und den NIPT (nicht-invasiver Pränataltest, Analyse zellfreier fetaler DNA im mütterlichen Blut). Invasive Methoden wie die Chorionzottenbiopsie (10.–12. SSW) oder die Amniozentese (15.–18. SSW) ermöglichen eine Karyotypisierung des Fetus, tragen jedoch ein geringes Fehlgeburtsrisiko (ca. 0,5–1 %).',
      selfTest: [
        {
          question: 'Welcher Karyotyp liegt beim Turner-Syndrom vor?',
          options: [
            '47,XXY',
            '47,XX,+21',
            '45,X0',
            '47,XXX'
          ],
          correctIndex: 2,
          explanation: 'Das Turner-Syndrom hat den Karyotyp 45,X0 (Monosomie X) — es fehlt ein Geschlechtschromosom. Es ist die einzige lebensfähige Monosomie beim Menschen. Betroffene sind phänotypisch weiblich.'
        },
        {
          question: 'Welche klinischen Merkmale sind typisch für das Klinefelter-Syndrom (47,XXY)?',
          options: [
            'Kleinwuchs, Streifengonaden, Pterygium colli',
            'Hochwuchs, kleine feste Hoden, Gynäkomastie, Infertilität',
            'Geistige Retardierung, Herzfehler, Epikanthus',
            'Normaler Phänotyp ohne klinische Auffälligkeiten'
          ],
          correctIndex: 1,
          explanation: 'Das Klinefelter-Syndrom (47,XXY) zeigt Hochwuchs, kleine feste Hoden, Gynäkomastie (Brustentwicklung beim Mann), Hypogonadismus und Infertilität (Azoospermie). Kleinwuchs und Streifengonaden gehören zum Turner-Syndrom.'
        },
        {
          question: 'Durch welchen Mechanismus entstehen die meisten numerischen Chromosomenaberrationen?',
          options: [
            'Crossing-over in der Meiose',
            'Deletion eines Chromosomenabschnitts',
            'Non-Disjunction (Nichttrennung) in der Meiose',
            'Translokation zwischen zwei Chromosomen'
          ],
          correctIndex: 2,
          explanation: 'Non-Disjunction ist die fehlerhafte Nichttrennung homologer Chromosomen (Meiose I) oder Schwesterchromatiden (Meiose II), was zu Zellen mit zu vielen oder zu wenigen Chromosomen führt (Aneuploidie). Dies ist die häufigste Ursache für Trisomien und Monosomien.'
        }
      ]
    },

    // =====================================================================
    // 4.6 Mutationen
    // =====================================================================
    {
      id: 'bio-kap4-uk6',
      title: 'Mutationen',
      content: `Mutationen sind dauerhafte Veränderungen der DNA-Sequenz, die spontan (z. B. durch Replikationsfehler) oder induziert (durch Mutagene wie UV-Strahlung, ionisierende Strahlung, chemische Substanzen) auftreten können. Sie sind die Grundlage der genetischen Variabilität und damit der Evolution, können aber auch Ursache von Erbkrankheiten und Krebs sein. Mutationen werden nach dem Ausmaß der betroffenen DNA-Sequenz in drei Kategorien eingeteilt: Genmutationen (Veränderungen einzelner Nukleotide oder weniger Basenpaare), Chromosomenmutationen (strukturelle Veränderungen von Chromosomenabschnitten) und Genommutationen (Veränderungen der Chromosomenzahl).

Genmutationen (Punktmutationen) betreffen einzelne Basenpaare. Bei einer Substitution wird eine Base durch eine andere ersetzt. Man unterscheidet Transition (Austausch Purin↔Purin oder Pyrimidin↔Pyrimidin, z. B. A→G) und Transversion (Austausch Purin↔Pyrimidin, z. B. A→C). Die Auswirkungen auf das Protein hängen davon ab, wo im Codon die Substitution liegt: Eine stumme (synonyme) Mutation verändert zwar die DNA-Sequenz, aber aufgrund der Degeneriertheit des genetischen Codes nicht die Aminosäure. Eine Missense-Mutation führt zum Einbau einer anderen Aminosäure (z. B. Sichelzellanämie: Glutamat → Valin an Position 6 der β-Globinkette durch A→T-Substitution). Eine Nonsense-Mutation erzeugt ein vorzeitiges Stoppcodon und führt zu einem verkürzten, meist funktionslosen Protein. Insertionen und Deletionen einzelner Nukleotide (nicht in Vielfachen von 3) verursachen eine Leserasterverschiebung (Frameshift-Mutation), die alle nachfolgenden Codons verändert und meist zu einem funktionslosen Protein führt.

Chromosomenmutationen sind strukturelle Umbauten von Chromosomen und umfassen Deletionen (Verlust eines Chromosomenabschnitts), Duplikationen (Verdopplung), Inversionen (Umkehrung der Reihenfolge eines Abschnitts), Insertionen und Translokationen (Übertragung eines Chromosomenabschnitts auf ein anderes Chromosom). Translokationen können balanciert (kein Materialverlust, Träger oft klinisch unauffällig) oder unbalanciert (mit Materialverlust oder -gewinn, oft klinisch auffällig) sein. Genommutationen betreffen die Gesamtzahl der Chromosomen: Bei der Aneuploidie liegt ein einzelnes Chromosom in veränderter Zahl vor (z. B. Trisomie, Monosomie), bei der Polyploidie ist der gesamte Chromosomensatz vervielfacht (z. B. Triploidie mit 3n = 69 Chromosomen, beim Menschen nicht lebensfähig). Die Philadelphia-Translokation t(9;22) ist ein Beispiel für eine reziproke Translokation, die zur Bildung des BCR-ABL-Fusionsgens führt und ursächlich für die chronische myeloische Leukämie (CML) ist.`,
      merksaetze: [
        'Frameshift-Mutation: Insertion oder Deletion von Nukleotiden (nicht in Dreiergruppen) → Leserasterverschiebung → alle nachfolgenden Aminosäuren verändert → meist funktionsloses Protein.',
        'Drei Ebenen der Mutation: Genmutation (einzelne Basenpaare), Chromosomenmutation (Strukturveränderung), Genommutation (Chromosomenzahl verändert).'
      ],
      altfrage: {
        question: 'Was ist eine Nonsense-Mutation und welche Auswirkung hat sie auf das Protein?',
        answer: 'Eine Nonsense-Mutation ist eine Punktmutation (Substitution), die ein Aminosäure-kodierendes Codon in ein vorzeitiges Stoppcodon (UAA, UAG oder UGA) umwandelt. Dadurch wird die Translation vorzeitig abgebrochen, und es entsteht ein verkürztes, meist funktionsloses Protein.'
      },
      klinischerBezug: 'Die Mukoviszidose (Cystische Fibrose) wird am häufigsten durch die Mutation ΔF508 verursacht — eine Deletion von drei Nukleotiden, die zum Verlust der Aminosäure Phenylalanin an Position 508 des CFTR-Proteins führt. Diese „in-frame"-Deletion (kein Frameshift, da genau 3 Nukleotide betroffen) führt zu einer Fehlfaltung des Proteins, das im endoplasmatischen Retikulum abgebaut wird, bevor es die Zellmembran erreicht. Der fehlende Chloridkanal verursacht zähes Sekret in Lunge, Pankreas und anderen Organen.',
      selfTest: [
        {
          question: 'Welche Art von Genmutation führt zu einer Leserasterverschiebung (Frameshift)?',
          options: [
            'Substitution einer einzelnen Base',
            'Insertion oder Deletion von Nukleotiden, die nicht ein Vielfaches von 3 sind',
            'Deletion eines gesamten Chromosomenabschnitts',
            'Inversion eines DNA-Abschnitts'
          ],
          correctIndex: 1,
          explanation: 'Insertionen oder Deletionen einzelner Nukleotide (oder einer Anzahl, die nicht durch 3 teilbar ist) verschieben das Leseraster ab der Mutationsstelle. Alle nachfolgenden Codons werden falsch abgelesen, was meist zu einem funktionslosen Protein führt.'
        },
        {
          question: 'Was unterscheidet eine Transition von einer Transversion?',
          options: [
            'Transition: Purin↔Purin oder Pyrimidin↔Pyrimidin; Transversion: Purin↔Pyrimidin',
            'Transition: Insertion einer Base; Transversion: Deletion einer Base',
            'Transition: stumme Mutation; Transversion: Missense-Mutation',
            'Transition betrifft die DNA, Transversion betrifft die RNA'
          ],
          correctIndex: 0,
          explanation: 'Eine Transition ist der Austausch einer Purinbase gegen eine andere Purinbase (A↔G) oder einer Pyrimidinbase gegen eine andere (C↔T). Eine Transversion ist der Austausch einer Purin- gegen eine Pyrimidinbase oder umgekehrt (z. B. A↔C oder G↔T). Transitionen sind häufiger als Transversionen.'
        },
        {
          question: 'Die Philadelphia-Translokation t(9;22) ist ursächlich für welche Erkrankung?',
          options: [
            'Trisomie 21 (Down-Syndrom)',
            'Sichelzellanämie',
            'Chronische myeloische Leukämie (CML)',
            'Mukoviszidose'
          ],
          correctIndex: 2,
          explanation: 'Die Philadelphia-Translokation ist eine reziproke Translokation zwischen Chromosom 9 und 22, die das BCR-ABL-Fusionsgen erzeugt. Dieses Gen kodiert für eine konstitutiv aktive Tyrosinkinase, die zur unkontrollierten Zellproliferation bei der CML führt.'
        }
      ]
    },

    // =====================================================================
    // 4.7 Populationsgenetik
    // =====================================================================
    {
      id: 'bio-kap4-uk7',
      title: 'Populationsgenetik',
      content: `Die Populationsgenetik untersucht die genetische Zusammensetzung von Populationen und deren Veränderung über die Zeit. Zentrale Konzepte sind die Allelfrequenz (relative Häufigkeit eines bestimmten Allels in einer Population) und die Genotypfrequenz (relative Häufigkeit eines bestimmten Genotyps). Für ein Gen mit zwei Allelen (A und a) wird die Häufigkeit des Allels A als p und die Häufigkeit des Allels a als q bezeichnet. Da es nur diese beiden Allele gibt, gilt: p + q = 1. Die Populationsgenetik ermöglicht es, Vorhersagen über die genetische Struktur zukünftiger Generationen zu treffen und evolutionäre Prozesse mathematisch zu modellieren.

Das Hardy-Weinberg-Gleichgewicht (HWG) ist das fundamentale Modell der Populationsgenetik. Es beschreibt eine idealisierte Population, in der sich die Allel- und Genotypfrequenzen von Generation zu Generation nicht verändern. Unter der Voraussetzung, dass p die Frequenz des Allels A und q die Frequenz des Allels a ist (p + q = 1), gibt das Hardy-Weinberg-Gesetz die erwarteten Genotypfrequenzen an: p² (Frequenz von AA) + 2pq (Frequenz von Aa) + q² (Frequenz von aa) = 1. Damit das HWG gilt, müssen fünf Bedingungen erfüllt sein: (1) unendlich große Population (kein genetischer Drift), (2) keine Mutation, (3) keine Selektion (alle Genotypen gleich fit), (4) keine Migration (kein Genfluss) und (5) Panmixie (zufällige Paarung). In der Realität werden diese Bedingungen nie vollständig erfüllt, aber das HWG dient als wichtiges Referenzmodell: Abweichungen vom Gleichgewicht deuten auf das Wirken evolutionärer Kräfte hin.

Beispielrechnung: Wenn die Frequenz einer autosomal-rezessiven Erkrankung in einer Population 1:10.000 beträgt (q² = 0,0001), dann ist q = 0,01, p = 0,99, und die Trägerfrequenz (heterozygote Träger, 2pq) beträgt 2 × 0,99 × 0,01 = 0,0198, also etwa 1:50 — dies zeigt, dass heterozygote Träger wesentlich häufiger sind als betroffene Individuen. Die evolutionären Kräfte, die das HWG stören und damit die genetische Zusammensetzung einer Population verändern, umfassen natürliche Selektion (unterschiedliche Fitness der Genotypen), genetischen Drift (zufällige Schwankungen, besonders in kleinen Populationen), Mutation (als Quelle neuer Allele), Migration/Genfluss (Einwanderung neuer Allele) und nicht-zufällige Paarung (z. B. Inzucht). Der Gründereffekt und der Flaschenhalseffekt sind spezielle Formen des genetischen Drifts, bei denen eine kleine Gründerpopulation bzw. eine drastische Populationsverkleinerung zu einer veränderten Allelzusammensetzung führt.`,
      merksaetze: [
        'Hardy-Weinberg-Gleichung: p² + 2pq + q² = 1 (mit p + q = 1). Die fünf Voraussetzungen: keine Mutation, keine Selektion, keine Migration, Panmixie, große Population.',
        'Praktische Anwendung: Bei autosomal-rezessiven Erkrankungen ist die Trägerfrequenz (2pq) viel größer als die Krankheitsfrequenz (q²). Beispiel: q² = 1:10.000 → Träger ≈ 1:50.'
      ],
      altfrage: {
        question: 'Die Frequenz einer autosomal-rezessiven Erkrankung beträgt 1:2500. Wie hoch ist die Heterozygotenfrequenz (Trägerfrequenz) nach Hardy-Weinberg?',
        answer: 'q² = 1/2500 = 0,0004, also q = 0,02 und p = 0,98. Heterozygotenfrequenz = 2pq = 2 × 0,98 × 0,02 = 0,0392 ≈ 1:25 (ca. 4 %).'
      },
      klinischerBezug: 'Das Hardy-Weinberg-Gleichgewicht wird in der genetischen Epidemiologie genutzt, um die Häufigkeit von Trägern rezessiver Erkrankungen abzuschätzen. Bei der Mukoviszidose beispielsweise ist in der europäischen Bevölkerung etwa 1:2500 Neugeborene betroffen (q² ≈ 1:2500), woraus sich eine Trägerfrequenz von ca. 1:25 ergibt. Diese Information ist essenziell für die genetische Beratung von Paaren mit Kinderwunsch und für die Planung von Neugeborenen-Screening-Programmen.',
      selfTest: [
        {
          question: 'Welche der folgenden Bedingungen muss für das Hardy-Weinberg-Gleichgewicht NICHT erfüllt sein?',
          options: [
            'Keine Selektion',
            'Panmixie (zufällige Paarung)',
            'Diploider Organismus',
            'Keine Migration'
          ],
          correctIndex: 2,
          explanation: 'Die fünf Voraussetzungen des HWG sind: keine Mutation, keine Selektion, keine Migration, Panmixie und unendlich große Population (kein Drift). Ob der Organismus diploid ist, gehört zwar zur Grundannahme des Modells, ist aber keine der fünf klassischen Voraussetzungen, die im MedAT abgefragt werden.'
        },
        {
          question: 'In einer Population beträgt q² = 0,04. Wie hoch ist die Frequenz des Allels a (q)?',
          options: [
            'q = 0,04',
            'q = 0,2',
            'q = 0,4',
            'q = 0,02'
          ],
          correctIndex: 1,
          explanation: 'q² = 0,04, also q = √0,04 = 0,2. Die Frequenz des Allels a beträgt 0,2 (= 20 %), und p = 1 - 0,2 = 0,8 (= 80 %).'
        },
        {
          question: 'Was versteht man unter dem Flaschenhalseffekt?',
          options: [
            'Eine Zunahme der Populationsgröße durch Immigration',
            'Eine drastische Verkleinerung der Population, die zu veränderter Allelzusammensetzung führt',
            'Die Anreicherung vorteilhafter Allele durch natürliche Selektion',
            'Die Entstehung neuer Allele durch Mutation'
          ],
          correctIndex: 1,
          explanation: 'Der Flaschenhalseffekt ist eine Form des genetischen Drifts, bei der eine Population durch ein Ereignis (z. B. Naturkatastrophe, Seuche) drastisch verkleinert wird. Die überlebende Restpopulation hat eine veränderte Allelzusammensetzung, die nicht repräsentativ für die Ausgangspopulation ist.'
        }
      ]
    },

    // =====================================================================
    // 4.8 Epigenetik
    // =====================================================================
    {
      id: 'bio-kap4-uk8',
      title: 'Epigenetik',
      content: `Die Epigenetik beschäftigt sich mit vererbbaren Veränderungen der Genexpression, die nicht auf Veränderungen der DNA-Sequenz selbst beruhen, sondern auf chemischen Modifikationen der DNA oder der Histone. Diese epigenetischen Markierungen können die Zugänglichkeit der DNA für die Transkriptionsmaschinerie regulieren und somit Gene „an-" oder „abschalten", ohne dass die Nukleotidsequenz verändert wird. Epigenetische Modifikationen sind dynamisch und reversibel, können aber dennoch bei Zellteilungen und — in bestimmten Fällen — sogar über Generationen hinweg weitergegeben werden (transgenerationelle Vererbung). Jede Zelle eines Organismus enthält die gleiche DNA, doch durch unterschiedliche epigenetische Muster exprimieren verschiedene Zelltypen unterschiedliche Gene — dies erklärt, warum eine Leberzelle andere Proteine produziert als eine Nervenzelle.

Die DNA-Methylierung ist der am besten erforschte epigenetische Mechanismus. Dabei werden Methylgruppen (-CH₃) durch DNA-Methyltransferasen (DNMTs) an Cytosinbasen in CpG-Dinukleotiden angefügt, wobei 5-Methylcytosin entsteht. CpG-Inseln sind CpG-reiche Regionen, die häufig in Promotorbereichen von Genen liegen. Hypermethylierung eines Promotors führt in der Regel zur Stilllegung (Silencing) des zugehörigen Gens, da die Transkriptionsfaktoren nicht mehr binden können oder methylbindende Proteine rekrutiert werden, die wiederum Repressorkomplexe anziehen. Hypomethylierung eines Promotors ermöglicht hingegen die Genexpression. Die zweite wichtige Klasse epigenetischer Modifikationen betrifft die Histone — die Proteine, um die die DNA im Nukleosom gewickelt ist. Histonmodifikationen umfassen Acetylierung, Methylierung, Phosphorylierung und Ubiquitinierung, hauptsächlich an den N-terminalen „Histonschwänzen". Histonacetylierung (durch Histonacetyltransferasen, HATs) lockert die Chromatinstruktur (Euchromatin) und fördert die Transkription, während Histondeacetylierung (durch Histondeacetylasen, HDACs) zu einer verdichteten Chromatinstruktur (Heterochromatin) und Transkriptionsrepression führt.

Ein besonders faszinierendes epigenetisches Phänomen ist das genomische Imprinting (genomische Prägung). Dabei werden bestimmte Gene in Abhängigkeit von ihrer elterlichen Herkunft unterschiedlich exprimiert: Entweder wird nur das väterliche oder nur das mütterliche Allel exprimiert, während das andere durch DNA-Methylierung stillgelegt ist. Dieses Muster wird während der Gametogenese in den Keimzellen etabliert und nach der Befruchtung aufrechterhalten. Ein klinisch wichtiges Beispiel ist die Region auf Chromosom 15q11-13: Fehlt die väterlich exprimierte Genregion (Deletion oder uniparentale Disomie), resultiert das Prader-Willi-Syndrom (Hypotonie, Adipositas, Hypogonadismus, kognitive Einschränkung); fehlt die mütterlich exprimierte Genregion, entsteht das Angelman-Syndrom (schwere Entwicklungsverzögerung, Ataxie, Lachanfälle, Krampfanfälle). Ein weiteres wichtiges epigenetisches Phänomen ist die X-Inaktivierung (Lyon-Hypothese): In jeder weiblichen Zelle wird eines der beiden X-Chromosomen zufällig inaktiviert und zum Barr-Körperchen kondensiert, um eine Dosiskompensation zu erreichen.`,
      merksaetze: [
        'DNA-Methylierung an CpG-Inseln im Promotor → Gensilencing. Histonacetylierung → offenes Chromatin (Euchromatin) → aktive Transkription. Histondeacetylierung → verdichtetes Chromatin (Heterochromatin) → Repression.',
        'Genomisches Imprinting: Elternspezifische Genexpression. Gleiche Deletion auf Chromosom 15q11-13 führt zu Prader-Willi (väterliche Deletion) oder Angelman-Syndrom (mütterliche Deletion).'
      ],
      altfrage: {
        question: 'Was ist genomisches Imprinting und wie unterscheidet es sich von der klassischen Mendelschen Vererbung?',
        answer: 'Beim genomischen Imprinting wird nur eines der beiden Allele exprimiert, abhängig von der elterlichen Herkunft (paternales oder maternales Allel). Dies widerspricht der klassischen Mendelschen Genetik, bei der beide Allele gleichwertig zur Merkmalsausprägung beitragen. Die Stilllegung erfolgt durch DNA-Methylierung und wird in der Gametogenese etabliert.'
      },
      klinischerBezug: 'In der Onkologie spielt die Epigenetik eine zentrale Rolle. Tumorsuppressorgene können durch Promotor-Hypermethylierung stillgelegt werden, was zur Krebsentstehung beitragen kann (z. B. Methylierung des RB1-Gens beim Retinoblastom oder des BRCA1-Gens bei Brustkrebs). Da epigenetische Veränderungen — im Gegensatz zu Mutationen — reversibel sind, bieten sie therapeutische Ansatzpunkte: DNMT-Inhibitoren (z. B. Azacitidin, Decitabin) und HDAC-Inhibitoren werden bereits in der Behandlung hämatologischer Neoplasien eingesetzt.',
      selfTest: [
        {
          question: 'Welche Auswirkung hat die Hypermethylierung eines Genpromotors typischerweise?',
          options: [
            'Verstärkte Genexpression',
            'Stilllegung (Silencing) des Gens',
            'Frameshift-Mutation',
            'Chromosomendeletion'
          ],
          correctIndex: 1,
          explanation: 'Hypermethylierung von CpG-Inseln im Promotorbereich verhindert die Bindung von Transkriptionsfaktoren und/oder rekrutiert methylbindende Proteine mit Repressorfunktion — das Gen wird stillgelegt (Gensilencing).'
        },
        {
          question: 'Was passiert bei der X-Inaktivierung (Lyon-Hypothese)?',
          options: [
            'Beide X-Chromosomen werden in weiblichen Zellen aktiv gehalten',
            'Das Y-Chromosom wird in männlichen Zellen inaktiviert',
            'Eines der beiden X-Chromosomen wird in jeder weiblichen Zelle zufällig inaktiviert (Barr-Körperchen)',
            'Beide X-Chromosomen werden deletiert'
          ],
          correctIndex: 2,
          explanation: 'In jeder weiblichen Zelle (XX) wird eines der beiden X-Chromosomen zufällig und dauerhaft inaktiviert und zum Barr-Körperchen (Heterochromatin) kondensiert. Dies dient der Dosiskompensation, sodass Frauen und Männer die gleiche Menge an X-chromosomalen Genprodukten haben.'
        },
        {
          question: 'Welches Syndrom resultiert aus dem Verlust der väterlich geprägten Region auf Chromosom 15q11-13?',
          options: [
            'Angelman-Syndrom',
            'Prader-Willi-Syndrom',
            'Turner-Syndrom',
            'Down-Syndrom'
          ],
          correctIndex: 1,
          explanation: 'Das Prader-Willi-Syndrom entsteht durch den Verlust der väterlich exprimierten Gene auf 15q11-13 (z. B. durch Deletion des väterlichen Allels oder maternale uniparentale Disomie). Der Verlust der mütterlich exprimierten Region führt zum Angelman-Syndrom.'
        }
      ]
    }
  ]
};
