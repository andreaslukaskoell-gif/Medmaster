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
      content: `Gregor Mendel hat die Vererbung entschlüsselt. Sein Trick: Er zählte Erbsen. Tausende. Über viele Generationen. Statt nur zu schauen, ob eine Pflanze groß oder klein ist, rechnete er Verhältnisse aus. Das war 1860 revolutionär.

**Uniformitätsregel** (erste Regel): Du kreuzt zwei reinerbige Eltern (AA × aa). Ergebnis: Alle Nachkommen sehen gleich aus (alle Aa). Alle zeigen das dominante Merkmal. Keine Ausnahme in der F1.

**Spaltungsregel** (zweite Regel): Die uniformen F1-Pflanzen kreuzt du jetzt untereinander (Aa × Aa). Was passiert in F2? Die Merkmale spalten sich auf. Phänotypisch 3:1 (drei dominant, eins rezessiv). Genotypisch 1:2:1 (ein AA, zwei Aa, ein aa). Das rezessive Merkmal taucht wieder auf — es war nur versteckt.

Bei **intermediärem Erbgang** ist keines der Allele vollständig dominant. Die F1 zeigt einen Mischphänotyp (z.B. rosa statt rot oder weiß). In F2 spaltet sich der Phänotyp 1:2:1 auf — du siehst alle drei Varianten.

**Unabhängigkeitsregel** (dritte Regel): Sie gilt nur für zwei Merkmale auf verschiedenen Chromosomen. Kreuzt du dihybride F1-Individuen (AaBb × AaBb), ergeben sich 16 Kombinationen. Phänotypisch spalten sie 9:3:3:1 auf. Wichtig: Diese Regel gilt nicht bei **Kopplung** — wenn Gene auf demselben Chromosom liegen, werden sie meist gemeinsam vererbt (außer Crossing-over trennt sie).`,
      merksätze: [
        'Drei Mendelsche Regeln: 1. Uniformitätsregel (F1 einheitlich), 2. Spaltungsregel (F2 phänotypisch 3:1), 3. Unabhängigkeitsregel (dihybrid F2: 9:3:3:1) — gilt nur bei Genen auf verschiedenen Chromosomen.',
        'Intermediärer Erbgang: Keines der Allele ist vollständig dominant → F1 zeigt Mischphänotyp, F2 spaltet phänotypisch 1:2:1 auf.'
      ],
      altfrage: {
        question: 'In welchem Verhältnis spalten sich die Phänotypen der F2-Generation bei einem dihybriden Erbgang mit dominanter Vererbung auf?',
        answer: '9:3:3:1 — Neun Individuen zeigen beide dominante Merkmale, je drei zeigen ein dominantes und ein rezessives Merkmal, und eines zeigt beide rezessive Merkmale.'
      },
      klinischerBezug: 'Bei **Mukoviszidose** sind beide Eltern oft gesunde Träger (Aa × Aa). Jedes Kind hat 25% Risiko, krank zu werden (aa), 50% Risiko, gesunder Träger zu sein (Aa), und 25% Chance, kein Allel zu tragen (AA). Diese Spaltungsregel gilt bei jeder Schwangerschaft neu — vorige Kinder ändern die Wahrscheinlichkeit nicht.',
      selfTest: [
        {
          question: 'Wie lautet das genotypische Aufspaltungsverhältnis in der F2-Generation bei einem monohybriden Erbgang mit dominanter Vererbung?',
          options: [
            '3:1',
            '1:2:1',
            '9:3:3:1',
            '1:1',
            '2:1'
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
            'Beide Eltern müssen heterozygot sein',
            'Die Gene müssen X-chromosomal vererbt werden'
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
            'Das Merkmal wird nur an männliche Nachkommen vererbt',
            'Ein Allel wird erst nach Umwelteinfluss exprimiert'
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
      content: `Ein **dominantes Allel** setzt sich durch. Bereits eine Kopie reicht (Aa → dominanter Phänotyp). Ein **rezessives Allel** wird nur sichtbar, wenn zwei Kopien vorliegen (aa). Konvention: Großbuchstaben (A) = dominant, Kleinbuchstaben (a) = rezessiv.

**Genotyp** vs. **Phänotyp**: Der Genotyp ist deine genetische Ausstattung (AA, Aa oder aa). Der Phänotyp ist das, was man sieht — das Merkmal. Bei vollständiger Dominanz sehen AA und Aa identisch aus. Nur aa zeigt das rezessive Merkmal.

**Homozygot** = zwei identische Allele (AA oder aa). **Heterozygot** = zwei verschiedene Allele (Aa). Heterozygote Träger (Aa) können rezessive Merkmale "versteckt" weitergeben — deshalb überspringen rezessive Erkrankungen Generationen.

Neben vollständiger Dominanz gibt es weitere Formen. Bei **unvollständiger Dominanz** liegt der Phänotyp des Heterozygoten zwischen beiden Homozygoten (Intermediarität). Bei **Kodominanz** werden beide Allele vollständig exprimiert — beide sind gleichzeitig sichtbar. Beispiel: **Blutgruppe AB** (I^A I^B). Die Person trägt sowohl A- als auch B-Antigene auf den roten Blutkörperchen.

**Penetranz** und **Expressivität** beschreiben Abweichungen von der Regel. Penetranz: Wie viele Träger eines Genotyps zeigen überhaupt den Phänotyp? (z.B. 80% Penetranz = 20% bleiben trotz Mutation gesund). Expressivität: Wie stark ist der Phänotyp ausgeprägt? (leicht bis schwer).`,
      merksätze: [
        'Genotyp = genetische Zusammensetzung (AA, Aa, aa); Phänotyp = beobachtbares Merkmal. Bei vollständiger Dominanz haben AA und Aa denselben Phänotyp.',
        'Kodominanz (beide Allele voll exprimiert, z. B. Blutgruppe AB) ≠ Intermediarität (Mischphänotyp zwischen den homozygoten Formen).'
      ],
      altfrage: {
        question: 'Was ist der Unterschied zwischen Genotyp und Phänotyp?',
        answer: 'Der Genotyp ist die genetische Ausstattung (Allelkombination) an einem bestimmten Locus (z. B. Aa). Der Phänotyp ist das äußerlich beobachtbare Merkmal, das durch den Genotyp und Umwelteinflüsse bestimmt wird.'
      },
      klinischerBezug: 'Bei **Sichelzellanämie** (HbS-Mutation) haben Homozygote (HbS/HbS) schwere Anämie mit sichelförmigen Erythrozyten. Heterozygote (HbA/HbS) sind meist symptomfrei — ein Beispiel für unvollständige Dominanz. In Malariagebieten haben HbA/HbS-Träger einen Überlebensvorteil: Der Malaria-Erreger Plasmodium vermehrt sich in HbS-tragenden Zellen schlechter. Deshalb ist die Mutation dort häufiger (balancierte Selektion).',
      selfTest: [
        {
          question: 'Ein Individuum mit dem Genotyp Aa — welche Aussage trifft bei vollständiger Dominanz zu?',
          options: [
            'Der Phänotyp entspricht dem rezessiven Merkmal',
            'Der Phänotyp ist intermediär zwischen dominant und rezessiv',
            'Der Phänotyp entspricht dem dominanten Merkmal',
            'Beide Merkmale werden gleichzeitig exprimiert',
            'Der Phänotyp variiert je nach Umweltbedingungen'
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
            'Das rezessive Allel setzt sich unter bestimmten Umweltbedingungen durch',
            'Die Allele hemmen sich gegenseitig und keines wird exprimiert'
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
            'Weil rezessive Allele erst durch Umweltfaktoren aktiviert werden müssen',
            'Weil rezessive Allele durch epigenetische Prägung temporär stillgelegt werden'
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
      content: `Erbgänge folgen Mustern. Du unterscheidest **autosomale** (auf den Chromosomen 1-22) von **gonosomalen** (auf X oder Y) Erbgängen.

**Autosomal-dominant** (AD): Ein mutiertes Allel genügt. Betroffene haben meist einen betroffenen Elternteil. Jede Generation zeigt die Erkrankung. Männer und Frauen gleich häufig betroffen. Keine Überträger — wer das Allel hat, ist krank (bei vollständiger Penetranz). Beispiele: **Chorea Huntington**, **Marfan-Syndrom**, familiäre Hypercholesterinämie.

**Autosomal-rezessiv** (AR): Beide Allele müssen mutiert sein (aa). Heterozygote Träger (Aa) sind gesund. Die Erkrankung überspringt Generationen — sie taucht "unerwartet" auf. Risiko steigt bei **Konsanguinität** (Verwandtenehen), weil beide Eltern eher dasselbe seltene Allel tragen. Klassische Beispiele: **Mukoviszidose** (häufigste AR-Erkrankung bei Europäern, Trägerfrequenz ca. 1:25), **Phenylketonurie** (PKU), **Sichelzellanämie**. Bei zwei Trägern (Aa × Aa) hat jedes Kind 25% Risiko, betroffen zu sein.

**X-chromosomal-rezessiv**: Männer sind hemizygot (XY) — sie haben nur ein X-Chromosom. Ein mutiertes Allel auf dem X führt zur Erkrankung (X^a Y). Frauen (XX) sind meist nur Konduktorinnen (X^A X^a) — phänotypisch gesund, aber Überträgerinnen. Ein betroffener Vater kann die Krankheit nicht an Söhne weitergeben (er gibt ihnen das Y), aber alle Töchter werden Konduktorinnen. Klassische Beispiele: **Hämophilie A und B** (Bluterkrankheit), **Rot-Grün-Blindheit**.

**Stammbäume** analysieren: Kreise = Frauen, Quadrate = Männer. Ausgefüllt = betroffen, halbtransparent = Träger. Verbindungen zeigen Eltern-Kind-Beziehungen.`,
      diagram: 'pedigree-analysis',
      merksätze: [
        'Autosomal-dominant: Jede Generation betroffen, kein Geschlechtsunterschied, kein Überspringen. Autosomal-rezessiv: Überspringt Generationen, Konsanguinität erhöht das Risiko.',
        'X-chromosomal-rezessiv: Vorwiegend Männer betroffen (hemizygot), Mütter sind Konduktorinnen, keine Vater-Sohn-Übertragung möglich.'
      ],
      altfrage: {
        question: 'Warum sind bei X-chromosomal-rezessiven Erkrankungen vorwiegend Männer betroffen?',
        answer: 'Männer sind hemizygot für das X-Chromosom (XY) und besitzen daher nur ein Allel am betreffenden Locus. Ein einziges mutiertes Allel auf dem X-Chromosom führt daher zur Merkmalsausprägung, da kein zweites X-Chromosom mit einem funktionellen Allel zum Ausgleich vorhanden ist.'
      },
      klinischerBezug: '**Hämophilie A** (Faktor-VIII-Mangel) betrifft fast nur Männer. Queen Victoria war Konduktorin — sie gab die Mutation über ihre Töchter an zahlreiche europäische Königshäuser weiter. Betroffene Männer zeigen spontane Blutungen in Gelenke und Muskeln, weil das Blut nicht gerinnt. Heute wird der fehlende Faktor VIII intravenös substituiert.',
      selfTest: [
        {
          question: 'Welches Merkmal ist typisch für einen autosomal-rezessiven Erbgang?',
          options: [
            'Betroffene in jeder Generation',
            'Nur Männer sind betroffen',
            'Die Erkrankung kann Generationen überspringen',
            'Es gibt keine Überträger',
            'Die Erkrankung tritt häufiger bei Männern auf'
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
            'Nur wenn die Mutter ebenfalls Trägerin ist',
            'Ja, aber nur bei autosomal-dominanter Vererbung'
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
            '75 %',
            '100 %'
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
      content: `Das **AB0-System** (Karl Landsteiner, 1901) bestimmt deine Blutgruppe. Auf deinen roten Blutkörperchen sitzen Antigene (A und/oder B). Im Plasma schwimmen Antikörper gegen die Antigene, die du nicht hast.

Das Gen hat drei Allele: I^A (macht A-Antigene), I^B (macht B-Antigene) und i (macht nichts). I^A und I^B sind **kodominant** zueinander — beide werden exprimiert. Beide sind dominant über i.

Sechs Genotypen → vier Blutgruppen:
- Blutgruppe A: I^A I^A oder I^A i (A-Antigen, Anti-B im Serum)
- Blutgruppe B: I^B I^B oder I^B i (B-Antigen, Anti-A im Serum)
- Blutgruppe AB: I^A I^B (beide Antigene, keine Antikörper — **Universalempfänger** für Erythrozyten)
- Blutgruppe 0: ii (keine Antigene, Anti-A und Anti-B — **Universalspender** für Erythrozyten)

Das **Rhesus-System** (D-Antigen): Rh-positiv (D vorhanden, ca. 85% in Europa) oder Rh-negativ (D fehlt, ca. 15%). Vererbung autosomal-dominant: DD und Dd = Rh-positiv, nur dd = Rh-negativ. Wichtig: **Anti-D-Antikörper entstehen nicht natürlich** — nur nach Kontakt mit Rh-positivem Blut (Sensibilisierung).

**Rhesus-Inkompatibilität** (Morbus haemolyticus neonatorum): Rh-negative Mutter (dd) + Rh-positives Kind (Dd). Bei der Geburt gelangen fetale Rh-positive Erythrozyten in den mütterlichen Kreislauf. Die Mutter bildet Anti-D-IgG-Antikörper (Sensibilisierung). Bei der nächsten Schwangerschaft mit Rh-positivem Kind passieren diese IgG-Antikörper die Plazenta und zerstören fetale Erythrozyten (Hämolyse). Folgen: Anämie, Hydrops fetalis, intrauteriner Fruchttod.

Prophylaxe: **Anti-D-Immunglobulin** (28.-30. SSW und innerhalb 72h nach Geburt). Die passiven Antikörper eliminieren fetale Erythrozyten, bevor das mütterliche Immunsystem reagiert — Sensibilisierung wird verhindert.`,
      merksätze: [
        'AB0-Genetik: I^A und I^B kodominant zueinander, beide dominant über i. Sechs Genotypen → vier Phänotypen. Blutgruppe 0 (ii) = Universalspender für Erythrozyten.',
        'Rhesus-Inkompatibilität: Rh-negative Mutter + Rh-positives Kind → Sensibilisierung bei 1. Geburt → Gefahr ab 2. Schwangerschaft. Prophylaxe: Anti-D-Immunglobulin.'
      ],
      altfrage: {
        question: 'Welche Blutgruppe hat ein Mensch mit dem Genotyp I^A I^B und welche Antikörper befinden sich in seinem Serum?',
        answer: 'Blutgruppe AB — da I^A und I^B kodominant sind, werden beide Antigene auf den Erythrozyten exprimiert. Im Serum befinden sich keine Isoagglutinine (weder Anti-A noch Anti-B), weshalb Personen mit Blutgruppe AB als Universalempfänger für Erythrozytenkonzentrate gelten.'
      },
      klinischerBezug: 'Eine **AB0-inkompatible Transfusion** ist lebensbedrohlich. Die Antikörper des Empfängers zerstören die Spender-Erythrozyten sofort (Hämolyse). Innerhalb von Minuten: Fieber, Schüttelfrost, Flankenschmerzen, rotes Hämoglobin im Urin. Im schlimmsten Fall: Nierenversagen, DIC (disseminierte intravasale Gerinnung), Tod. Deshalb ist der **Bedside-Test** (AB0-Identitätstest am Patientenbett) vor jeder Transfusion gesetzlich vorgeschrieben — letzte Sicherheitskontrolle.',
      selfTest: [
        {
          question: 'Welchen Genotyp kann ein Kind haben, wenn die Mutter Blutgruppe A (I^A i) und der Vater Blutgruppe B (I^B i) hat?',
          options: [
            'Nur I^A I^B (Blutgruppe AB)',
            'I^A I^B, I^A i, I^B i oder ii (Blutgruppen AB, A, B oder 0)',
            'Nur I^A i oder I^B i (Blutgruppe A oder B)',
            'Nur ii (Blutgruppe 0)',
            'Nur I^A I^A oder I^B I^B (Blutgruppe A oder B, homozygot)'
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
            'Weil Anti-D-Antikörper erst nach dem 30. Lebensjahr gebildet werden können',
            'Weil die mütterliche IgM-Antwort in der ersten Schwangerschaft die Plazenta nicht passiert'
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
            'Blutgruppe B — weil Anti-A seltener vorkommt',
            'Blutgruppe 0 — weil sie die meisten Antikörper im Serum hat'
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
      content: `Der Mensch hat 46 Chromosomen: 22 Autosomenpaare (Chromosomen 1-22, nach Größe sortiert) und ein Gonosomenpaar (XX bei Frauen, XY bei Männern).

Ein **Karyogramm** zeigt alle Chromosomen einer Zelle. So wird es gemacht: Lymphozyten aus Blut werden kultiviert. In der Metaphase (Mitose) werden sie mit **Colchicin** gestoppt (hemmt Spindelbildung). Die Chromosomen werden fixiert, gefärbt (z.B. Giemsa-Bänderung) und fotografiert. Jedes Chromosom hat ein charakteristisches Bandenmuster — wie ein Strichcode.

**Chromosomenaberrationen** entstehen meist durch **Non-Disjunction** (Nichttrennung in der Meiose). Homologe Chromosomen oder Schwesterchromatiden trennen sich nicht korrekt. Resultat: eine Zelle bekommt zu viele, die andere zu wenige Chromosomen.

**Trisomie 21** (Down-Syndrom): Häufigste lebensfähige Trisomie. Karyotyp: 47,XX,+21 oder 47,XY,+21. Klinische Merkmale: geistige Entwicklungsverzögerung, typisches Gesicht (flach, Epikanthus, Brushfield-Spots in der Iris), **Herzfehler** (40-50%, oft AV-Kanal), Duodenalatresie, erhöhtes Leukämierisiko. Wichtigster Risikofaktor: **mütterliches Alter**. Ab 35 Jahren steigt das Risiko stark — die Eizellen waren jahrzehntelang in Meiose I arretiert, die Spindelfunktion lässt nach.

**Turner-Syndrom** (45,X0): Einzige lebensfähige Monosomie beim Menschen. Inzidenz: ca. 1:2500 weibliche Neugeborene. Phänotypisch weiblich. Klinische Merkmale: Kleinwuchs, **Streifengonaden** (keine funktionsfähigen Eierstöcke) → primäre Amenorrhoe, Infertilität, Pterygium colli (Flügelfell am Hals), Herzfehler (bikuspide Aortenklappe, Aortenisthmusstenose).

**Klinefelter-Syndrom** (47,XXY): Häufigste gonosomale Aberration (1:600 männliche Neugeborene). Phänotypisch männlich. Klinische Merkmale: Hochwuchs, kleine feste Hoden, **Hypogonadismus**, Gynäkomastie, **Infertilität** (Azoospermie), leicht erhöhtes Risiko für Lernschwierigkeiten.`,
      merksätze: [
        'Trisomie 21 (Down-Syndrom): Häufigste lebensfähige Trisomie, Risiko steigt mit mütterlichem Alter, typische Befunde: Herzfehler, Facies, Entwicklungsverzögerung.',
        'Turner (45,X0): Einzige lebensfähige Monosomie, weiblich, Kleinwuchs, Streifengonaden. Klinefelter (47,XXY): Männlich, Hochwuchs, Hypogonadismus, Infertilität.'
      ],
      altfrage: {
        question: 'Wie entsteht die Trisomie 21 und welcher Risikofaktor ist am bedeutsamsten?',
        answer: 'Die Trisomie 21 entsteht durch Non-Disjunction (Nichttrennung) des Chromosoms 21 in der Meiose (meist Meiose I der Mutter). Der wichtigste Risikofaktor ist das erhöhte mütterliche Alter, da die Eizellen jahrzehntelang in der Prophase I arretiert sind und die Spindelfunktion mit dem Alter abnimmt.'
      },
      klinischerBezug: '**Ersttrimester-Screening** (Nackentransparenzmessung + Biochemie) erkennt Risikoschwangerschaften. **NIPT** (nicht-invasiver Pränataltest) analysiert zellfreie fetale DNA im mütterlichen Blut — hohe Trefferquote, kein Fehlgeburtsrisiko. Invasive Verfahren (**Chorionzottenbiopsie** 10.-12. SSW oder **Amniozentese** 15.-18. SSW) ermöglichen Karyotypisierung, tragen aber ein Fehlgeburtsrisiko von ca. 0,5-1%.',
      selfTest: [
        {
          question: 'Welcher Karyotyp liegt beim Turner-Syndrom vor?',
          options: [
            '47,XXY',
            '47,XX,+21',
            '45,X0',
            '47,XXX',
            '46,XY'
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
            'Normaler Phänotyp ohne klinische Auffälligkeiten',
            'Herzfehler, Duodenalatresie und Brushfield-Spots'
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
            'Translokation zwischen zwei Chromosomen',
            'Polyploidisierung durch fehlgeschlagene Zytokinese'
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
      content: `Mutationen sind permanente DNA-Veränderungen. Sie entstehen spontan (Replikationsfehler) oder durch **Mutagene** (UV-Strahlung, ionisierende Strahlung, Chemikalien). Mutationen sind die Basis der Evolution — aber auch Ursache von Erbkrankheiten und Krebs.

Drei Ebenen:
1. **Genmutationen** (Punktmutationen) — einzelne Basenpaare betroffen
2. **Chromosomenmutationen** — strukturelle Veränderungen von Chromosomenabschnitten
3. **Genommutationen** — Veränderung der Chromosomenzahl

**Genmutationen** (Punktmutationen): Bei einer **Substitution** wird eine Base ausgetauscht. Folgen hängen vom genetischen Code ab:
- **Stumme Mutation**: DNA ändert sich, Aminosäure bleibt gleich (Degeneriertheit des Codes)
- **Missense-Mutation**: Eine andere Aminosäure wird eingebaut (z.B. **Sichelzellanämie**: Glutamat → Valin an Position 6 der β-Globinkette)
- **Nonsense-Mutation**: Ein Stoppcodon entsteht vorzeitig. Die Translation bricht ab. Das Protein ist verkürzt und meist funktionslos.

**Frameshift-Mutation** (Leserasterverschiebung): Insertion oder Deletion von Nukleotiden (nicht in Dreiergruppen). Alle nachfolgenden Codons werden falsch abgelesen. Das Protein ist komplett verändert — meist funktionslos.

**Chromosomenmutationen**: Deletionen (Verlust), Duplikationen (Verdopplung), Inversionen (Umkehrung), Translokationen (Übertragung auf anderes Chromosom). Die **Philadelphia-Translokation** t(9;22) erzeugt das BCR-ABL-Fusionsgen — Ursache der chronischen myeloischen Leukämie (CML). Eine konstitutiv aktive Tyrosinkinase treibt unkontrollierte Zellproliferation an.

**Genommutationen**: Aneuploidie (einzelnes Chromosom in veränderter Zahl, z.B. Trisomie, Monosomie) oder Polyploidie (ganzer Chromosomensatz vervielfacht, z.B. Triploidie 3n = 69 — beim Menschen nicht lebensfähig).`,
      merksätze: [
        'Frameshift-Mutation: Insertion oder Deletion von Nukleotiden (nicht in Dreiergruppen) → Leserasterverschiebung → alle nachfolgenden Aminosäuren verändert → meist funktionsloses Protein.',
        'Drei Ebenen der Mutation: Genmutation (einzelne Basenpaare), Chromosomenmutation (Strukturveränderung), Genommutation (Chromosomenzahl verändert).'
      ],
      altfrage: {
        question: 'Was ist eine Nonsense-Mutation und welche Auswirkung hat sie auf das Protein?',
        answer: 'Eine Nonsense-Mutation ist eine Punktmutation (Substitution), die ein Aminosäure-kodierendes Codon in ein vorzeitiges Stoppcodon (UAA, UAG oder UGA) umwandelt. Dadurch wird die Translation vorzeitig abgebrochen, und es entsteht ein verkürztes, meist funktionsloses Protein.'
      },
      klinischerBezug: '**Mukoviszidose** (Cystische Fibrose) wird am häufigsten durch die **ΔF508-Mutation** verursacht. Drei Nukleotide fehlen → Phenylalanin an Position 508 fehlt. Diese "in-frame"-Deletion (kein Frameshift) führt zur Fehlfaltung des CFTR-Proteins. Es wird im ER abgebaut, bevor es die Zellmembran erreicht. Der fehlende Chloridkanal verursacht zähes Sekret in Lunge, Pankreas und anderen Organen — rezidivierende Infektionen, Pankreasinsuffizienz, Infertilität bei Männern.',
      selfTest: [
        {
          question: 'Welche Art von Genmutation führt zu einer Leserasterverschiebung (Frameshift)?',
          options: [
            'Substitution einer einzelnen Base',
            'Insertion oder Deletion von Nukleotiden, die nicht ein Vielfaches von 3 sind',
            'Deletion eines gesamten Chromosomenabschnitts',
            'Inversion eines DNA-Abschnitts',
            'Austausch einer Purinbase gegen eine Pyrimidinbase'
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
            'Transition betrifft die DNA, Transversion betrifft die RNA',
            'Transition betrifft Exons, Transversion betrifft Introns'
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
            'Mukoviszidose',
            'Burkitt-Lymphom'
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
      content: `Populationsgenetik untersucht Allelfrequenzen in ganzen Populationen. Zentrale Frage: Wie häufig sind bestimmte Allele? Wie verändern sich die Frequenzen über Generationen?

Für ein Gen mit zwei Allelen (A und a):
- Frequenz von A = p
- Frequenz von a = q
- p + q = 1

Das **Hardy-Weinberg-Gleichgewicht** (HWG) ist das Grundmodell. Es beschreibt eine ideale Population, in der sich die Allelfrequenzen nicht verändern. Genotypfrequenzen:
- p² (Frequenz von AA)
- 2pq (Frequenz von Aa)
- q² (Frequenz von aa)
- Summe: p² + 2pq + q² = 1

Fünf Voraussetzungen für HWG:
1. Unendlich große Population (kein genetischer Drift)
2. Keine Mutation
3. Keine Selektion (alle Genotypen gleich fit)
4. Keine Migration (kein Genfluss)
5. Panmixie (zufällige Paarung)

In der Realität sind diese Bedingungen nie erfüllt. Das HWG ist ein Referenzmodell — Abweichungen zeigen, dass evolutionäre Kräfte wirken.

**Praktische Anwendung**: Bei autosomal-rezessiven Erkrankungen ist die Trägerfrequenz (2pq) viel höher als die Krankheitsfrequenz (q²). Beispiel: Wenn q² = 1:10.000 (Krankheitsfrequenz), dann q = 0,01 und p = 0,99. Trägerfrequenz = 2pq = 2 × 0,99 × 0,01 = 0,0198 ≈ 1:50. Für jede erkrankte Person gibt es etwa 200 gesunde Träger.

Evolutionäre Kräfte, die das HWG stören:
- **Selektion**: Unterschiedliche Fitness der Genotypen
- **Genetischer Drift**: Zufällige Schwankungen (besonders in kleinen Populationen)
- **Mutation**: Quelle neuer Allele
- **Migration**: Ein- oder Auswanderung von Allelen
- **Nicht-zufällige Paarung**: z.B. Inzucht

**Gründereffekt** und **Flaschenhalseffekt** sind spezielle Formen des Drifts. Eine kleine Gründerpopulation oder eine drastische Populationsverkleinerung führt zu veränderter Allelzusammensetzung.`,
      merksätze: [
        'Hardy-Weinberg-Gleichung: p² + 2pq + q² = 1 (mit p + q = 1). Die fünf Voraussetzungen: keine Mutation, keine Selektion, keine Migration, Panmixie, große Population.',
        'Praktische Anwendung: Bei autosomal-rezessiven Erkrankungen ist die Trägerfrequenz (2pq) viel größer als die Krankheitsfrequenz (q²). Beispiel: q² = 1:10.000 → Träger ≈ 1:50.'
      ],
      altfrage: {
        question: 'Die Frequenz einer autosomal-rezessiven Erkrankung beträgt 1:2500. Wie hoch ist die Heterozygotenfrequenz (Trägerfrequenz) nach Hardy-Weinberg?',
        answer: 'q² = 1/2500 = 0,0004, also q = 0,02 und p = 0,98. Heterozygotenfrequenz = 2pq = 2 × 0,98 × 0,02 = 0,0392 ≈ 1:25 (ca. 4 %).'
      },
      klinischerBezug: 'Bei **Mukoviszidose** ist in Europa etwa 1:2500 Neugeborene betroffen (q² ≈ 1:2500). Daraus ergibt sich eine Trägerfrequenz von ca. 1:25. Jeder 25. Europäer trägt das mutierte CFTR-Allel — meist ohne es zu wissen. Diese Information ist essenziell für die genetische Beratung von Paaren mit Kinderwunsch und für Neugeborenen-Screening-Programme.',
      selfTest: [
        {
          question: 'Welche der folgenden Bedingungen muss für das Hardy-Weinberg-Gleichgewicht NICHT erfüllt sein?',
          options: [
            'Keine Selektion',
            'Panmixie (zufällige Paarung)',
            'Diploider Organismus',
            'Keine Migration',
            'Keine Mutation'
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
            'q = 0,02',
            'q = 0,08'
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
            'Die Entstehung neuer Allele durch Mutation',
            'Die Zunahme der Homozygotie durch Panmixie'
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
      content: `Epigenetik regelt Genexpression ohne die DNA-Sequenz zu verändern. Chemische Markierungen auf DNA oder Histonen schalten Gene an oder aus. Diese Markierungen sind reversibel, aber dennoch über Zellteilungen hinweg stabil — manchmal sogar über Generationen (transgenerationelle Vererbung).

Jede Zelle im Körper hat die gleiche DNA. Trotzdem produziert eine Leberzelle andere Proteine als eine Nervenzelle. Epigenetik erklärt, wie.

**DNA-Methylierung**: Enzyme (DNA-Methyltransferasen, DNMTs) hängen Methylgruppen (-CH₃) an Cytosin-Basen in **CpG-Dinukleotiden**. CpG-Inseln sind CpG-reiche Regionen in Promotoren. **Hypermethylierung** eines Promotors = Gensilencing. Transkriptionsfaktoren können nicht mehr binden. **Hypomethylierung** = Gen wird aktiviert.

**Histonmodifikationen**: DNA wickelt sich um Histone (Nukleosom). Modifikationen an den "Histonschwänzen" (N-Termini) ändern die Chromatinstruktur. **Histonacetylierung** (durch HATs) lockert das Chromatin → Euchromatin → aktive Transkription. **Histondeacetylierung** (durch HDACs) verdichtet das Chromatin → Heterochromatin → Genrepression.

**Genomisches Imprinting** (genomische Prägung): Bestimmte Gene werden nur vom Vater oder nur von der Mutter exprimiert — das andere Allel ist durch Methylierung stillgelegt. Dieses Muster wird in den Keimzellen etabliert und nach Befruchtung beibehalten.

Beispiel: Chromosom 15q11-13. Fehlt die väterlich exprimierte Region → **Prader-Willi-Syndrom** (Hypotonie, Adipositas, Hypogonadismus, kognitive Einschränkung). Fehlt die mütterlich exprimierte Region → **Angelman-Syndrom** (schwere Entwicklungsverzögerung, Ataxie, Lachanfälle, Krampfanfälle). Gleiche Deletion — verschiedene Krankheiten, je nachdem, von wem sie stammt.

**X-Inaktivierung** (Lyon-Hypothese): In weiblichen Zellen (XX) wird eines der beiden X-Chromosomen zufällig inaktiviert und zum **Barr-Körperchen** kondensiert. Dosiskompensation — Frauen und Männer haben gleich viel X-chromosomale Genprodukte.`,
      merksätze: [
        'DNA-Methylierung an CpG-Inseln im Promotor → Gensilencing. Histonacetylierung → offenes Chromatin (Euchromatin) → aktive Transkription. Histondeacetylierung → verdichtetes Chromatin (Heterochromatin) → Repression.',
        'Genomisches Imprinting: Elternspezifische Genexpression. Gleiche Deletion auf Chromosom 15q11-13 führt zu Prader-Willi (väterliche Deletion) oder Angelman-Syndrom (mütterliche Deletion).'
      ],
      altfrage: {
        question: 'Was ist genomisches Imprinting und wie unterscheidet es sich von der klassischen Mendelschen Vererbung?',
        answer: 'Beim genomischen Imprinting wird nur eines der beiden Allele exprimiert, abhängig von der elterlichen Herkunft (paternales oder maternales Allel). Dies widerspricht der klassischen Mendelschen Genetik, bei der beide Allele gleichwertig zur Merkmalsausprägung beitragen. Die Stilllegung erfolgt durch DNA-Methylierung und wird in der Gametogenese etabliert.'
      },
      klinischerBezug: 'Tumorsuppressorgene können durch **Promotor-Hypermethylierung** stillgelegt werden — ein häufiger Mechanismus bei Krebs. Beispiel: Methylierung des **RB1-Gens** beim Retinoblastom oder **BRCA1** bei Brustkrebs. Vorteil: Epigenetische Veränderungen sind reversibel (anders als Mutationen). **DNMT-Inhibitoren** (z.B. Azacitidin, Decitabin) und **HDAC-Inhibitoren** werden bereits in der Therapie hämatologischer Neoplasien eingesetzt — sie reaktivieren stillgelegte Gene.',
      selfTest: [
        {
          question: 'Welche Auswirkung hat die Hypermethylierung eines Genpromotors typischerweise?',
          options: [
            'Verstärkte Genexpression',
            'Stilllegung (Silencing) des Gens',
            'Frameshift-Mutation',
            'Chromosomendeletion',
            'Verstärkte Histonacetylierung'
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
            'Beide X-Chromosomen werden deletiert',
            'Das X-Chromosom wird durch DNA-Methylierung vollständig abgebaut'
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
            'Down-Syndrom',
            'Klinefelter-Syndrom'
          ],
          correctIndex: 1,
          explanation: 'Das Prader-Willi-Syndrom entsteht durch den Verlust der väterlich exprimierten Gene auf 15q11-13 (z. B. durch Deletion des väterlichen Allels oder maternale uniparentale Disomie). Der Verlust der mütterlich exprimierten Region führt zum Angelman-Syndrom.'
        }
      ]
    }
  ]
};
