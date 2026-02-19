import type { Kapitel } from '../types';

export const bioKap8: Kapitel = {
  id: 'bio-kap8',
  title: 'Humangenetik',
  subject: 'biologie',
  icon: '👨‍👩‍👧‍👦',
  estimatedTime: '90 min',
  unterkapitel: [
    {
      id: 'bio-8-03',
      title: 'Erbgänge vertieft',
      content: `# Erbgänge vertieft

Während die klassischen Mendelschen Regeln die Grundlagen der Vererbung erklären, zeigt die Realität oft komplexere Vererbungsmuster. Viele Merkmale folgen nicht den einfachen dominant-rezessiven Regeln, sondern werden durch multiple Gene, variable Expressivität oder unvollständige Penetranz beeinflusst.

## Multifaktorielle Vererbung

Bei der multifaktoriellen Vererbung wird ein Merkmal durch das Zusammenspiel mehrerer Gene (polygene Vererbung) und Umweltfaktoren bestimmt. Diese Merkmale zeigen oft eine kontinuierliche Variation in der Bevölkerung statt diskreter Kategorien.

**Typische multifaktoriell vererbte Merkmale:**
- Körpergröße (Beteiligung von über 100 Genloci)
- Hautfarbe (mindestens 3-4 Gene beteiligt)
- Intelligenz (hochgradig polygenetisch)
- Anfälligkeit für Diabetes, Bluthochdruck, Herzerkrankungen

Bei polygenen Merkmalen addieren sich die Effekte einzelner Allele. Je mehr "Plus-Allele" vorhanden sind, desto stärker ist die Ausprägung. Dies führt zu einer Normalverteilung des Merkmals in der Population.

## Pleiotropie

Pleiotropie beschreibt das Phänomen, dass ein einzelnes Gen mehrere, scheinbar unabhängige Merkmale beeinflusst. Ein mutiertes Allel kann daher vielfältige Auswirkungen auf den Organismus haben.

**Beispiel: Marfan-Syndrom**
Eine Mutation im FBN1-Gen (kodiert Fibrillin-1) führt zu:
- Überlangen Gliedmaßen und Fingern (Skelett)
- Linsenluxation (Auge)
- Aortendilatation und -ruptur (Herz-Kreislauf)
- Überdehnbare Haut (Bindegewebe)

**Beispiel: Sichelzellanämie**
Die Mutation im Hämoglobin-Gen bewirkt:
- Sichelförmige Erythrozyten (Blutbild)
- Verstopfung von Kapillaren (Durchblutung)
- Schutz vor Malaria (Infektionsresistenz)
- Organschäden durch Minderdurchblutung

## Penetranz

Penetranz beschreibt die Wahrscheinlichkeit, dass ein Genotyp zum erwarteten Phänotyp führt. Sie wird als Prozentsatz ausgedrückt.

> **MerksatzBox type="altfragen":** Penetranz vs. Expressivität ist ein häufiges Prüfungsthema. Merke: Penetranz = "Tritt auf?" (ja/nein), Expressivität = "Wie stark?" (Schweregrad). Beispiele wie BRCA1 und NF1 werden oft abgefragt.

**Vollständige Penetranz (100%):**
Alle Träger des krankheitsverursachenden Genotyps zeigen auch die Erkrankung.
- Beispiel: Huntington-Krankheit (nahezu 100% Penetranz)
- Beispiel: Achondroplasie (Kleinwuchs)

**Unvollständige Penetranz (<100%):**
Nur ein Teil der Träger manifestiert die Erkrankung phänotypisch.
- Beispiel: BRCA1-Mutation (ca. 70% Penetranz für Brustkrebs)
- Beispiel: Polydaktylie (zusätzliche Finger/Zehen, variable Penetranz)

> **MerksatzBox type="klinisch":** In der genetischen Beratung ist Penetranz entscheidend: Eine Patientin mit BRCA1-Mutation fragt: "Bekomme ich Brustkrebs?" Antwort: "Ihr Risiko liegt bei ~70% bis zum 80. Lebensjahr (vs. 12% Normalbevölkerung). Prophylaktische Mastektomie senkt Ihr Risiko auf <5%." – Zahlen statt Angst.

**Faktoren für unvollständige Penetranz:**
- Genetischer Hintergrund (Modifier-Gene können Ausprägung beeinflussen)
- Umweltfaktoren (Exposition, Lebensstil, Ernährung)
- Epigenetische Modifikationen (DNA-Methylierung, Histon-Acetylierung)
- Geschlecht (geschlechtsspezifische Penetranz möglich)

## Expressivität

Expressivität beschreibt das Ausmaß oder die Schwere der phänotypischen Ausprägung bei Individuen mit demselben Genotyp. Im Gegensatz zur Penetranz (Ja/Nein-Frage) geht es hier um das "Wie stark".

**Beispiel: Neurofibromatose Typ 1 (NF1)**
Alle Betroffenen haben dieselbe Mutation, aber die Symptome variieren stark:
- Leichte Form: Nur Café-au-lait-Flecken auf der Haut
- Mittelschwere Form: Multiple Neurofibrome
- Schwere Form: Maligne Tumore, Skelettdeformitäten, Lernschwierigkeiten

**Variable Expressivität wird beeinflusst durch:**
- Genetische Hintergrundvariationen (andere Gene modulieren die Ausprägung)
- Umweltfaktoren während der Entwicklung
- Stochastische Effekte (zufällige Entwicklungsprozesse)
- Mosaike (unterschiedliche Zellpopulationen mit/ohne Mutation)

## Penetranz vs. Expressivität: Der Unterschied

- **Penetranz:** "Tritt das Merkmal auf?" (alles-oder-nichts)
- **Expressivität:** "Wie stark ist das Merkmal ausgeprägt?" (Schweregrad)

**Merksatz:** Penetranz ist binär (krank/gesund), Expressivität ist graduell (leicht bis schwer krank).`,
      lernziele: [],
      sections: [],
      merksätze: [
        'Penetranz beantwortet "Zeigt sich das Merkmal überhaupt?" (0-100%), Expressivität fragt "Wie stark zeigt es sich?" (Schweregrad).',
        'Multifaktorielle Merkmale wie Körpergröße entstehen durch Polygenie (viele Gene) plus Umwelt – sie zeigen Normalverteilung statt Mendel-Kategorien.',
        'Pleiotropie = ein Gen, viele Wirkungen: Marfan-Syndrom (FBN1-Mutation) betrifft Skelett, Augen, Herz und Haut gleichzeitig.',
        'Vollständige Penetranz (100%): Alle mit dem Genotyp zeigen den Phänotyp (z.B. Huntington). Unvollständige Penetranz: Nur ein Teil erkrankt (z.B. BRCA1 ~70%).',
        'Expressivität erklärt, warum Geschwister mit derselben Mutation unterschiedlich schwer betroffen sind (z.B. NF1: von Hautflecken bis Tumoren).'
      ],
      klinischerBezug: `**Genetische Beratung bei unvollständiger Penetranz**

In der genetischen Beratung ist das Konzept der Penetranz entscheidend für die Risikokalkulation. Ein Beispiel: Eine Frau trägt eine BRCA1-Mutation (Brustkrebsrisiko). Die Penetranz liegt bei etwa 70% bis zum 80. Lebensjahr.

**Beratungsinhalt:**
- "Sie tragen die Mutation, aber das bedeutet nicht automatisch, dass Sie erkranken werden."
- "Ihr Risiko ist deutlich erhöht (70% vs. 12% in der Allgemeinbevölkerung)."
- "Prophylaktische Maßnahmen können das Risiko senken (engmaschige Überwachung, ggf. präventive Mastektomie)."

**Bei variabler Expressivität (z.B. Neurofibromatose):**
- "Wir können die Mutation nachweisen, aber nicht vorhersagen, wie schwer die Symptome sein werden."
- "Regelmäßige Kontrollen ermöglichen frühzeitiges Eingreifen bei Komplikationen."

Diese Unsicherheit erfordert sensible Kommunikation und realistische Erwartungen.`,
      selfTest: [
        {
          question: 'Was versteht man unter "Penetranz" bei genetischen Erkrankungen?',
          options: [
            'Die Häufigkeit eines Allels in der Population',
            'Die Anzahl der betroffenen Gene bei einer Erkrankung',
            'Die Wahrscheinlichkeit, dass ein Genotyp zum entsprechenden Phänotyp führt',
            'Die Schwere der Ausprägung einer genetischen Erkrankung',
            'Die Vererbungswahrscheinlichkeit auf die nächste Generation'
          ],
          correctIndex: 2,
          explanation: 'Penetranz beschreibt die Wahrscheinlichkeit, dass ein bestimmter Genotyp tatsächlich zum erwarteten Phänotyp führt. Bei vollständiger Penetranz (100%) zeigen alle Träger des Genotyps den Phänotyp. Bei unvollständiger Penetranz können manche Träger phänotypisch unauffällig sein, obwohl sie die genetische Veranlagung besitzen. Beispiel: Huntington-Krankheit hat nahezu 100% Penetranz, während BRCA1-Mutationen eine Penetranz von etwa 70% für Brustkrebs haben.',
          hints: [
            'Überlege: Zeigen ALLE Menschen mit einer bestimmten Mutation auch die Krankheit?',
            'Der Begriff kommt vom lateinischen "penetrare" = durchdringen, eindringen.'
          ],
          tags: ['erbgänge', 'penetranz'],
          difficulty: 2
        },
        {
          question: 'Welches der folgenden Merkmale ist ein typisches Beispiel für polygene Vererbung?',
          options: [
            'Blutgruppe AB0',
            'Körpergröße',
            'Sichelzellanämie',
            'Rot-Grün-Sehschwäche',
            'Albinismus'
          ],
          correctIndex: 1,
          explanation: 'Die Körpergröße ist ein klassisches Beispiel für polygene (multifaktorielle) Vererbung. Sie wird durch die Interaktion von über 100 verschiedenen Genloci sowie Umweltfaktoren (Ernährung, Gesundheit) bestimmt und zeigt eine kontinuierliche Normalverteilung in der Bevölkerung. Die anderen Optionen folgen einfacheren Erbgängen: AB0 ist ein kodominantes System mit drei Allelen, Sichelzellanämie folgt einem autosomal-rezessiven Erbgang, Rot-Grün-Sehschwäche ist X-chromosomal rezessiv, und Albinismus ist meist autosomal rezessiv.',
          hints: [
            'Suche nach einem Merkmal, das eine gleitende Skala statt klarer Kategorien zeigt.',
            'Welches Merkmal wird sowohl von vielen Genen als auch von der Umwelt beeinflusst?'
          ],
          tags: ['erbgänge', 'polygenie'],
          difficulty: 2
        },
        {
          question: 'Was ist Pleiotropie?',
          options: [
            'Ein Gen beeinflusst mehrere verschiedene Merkmale',
            'Mehrere Gene beeinflussen ein einziges Merkmal',
            'Ein Gen hat zwei unterschiedliche Allele',
            'Ein Merkmal wird nur von Umweltfaktoren bestimmt',
            'Die Vererbung erfolgt über das Zytoplasma'
          ],
          correctIndex: 0,
          explanation: 'Pleiotropie bedeutet, dass ein einzelnes Gen mehrere, oft scheinbar unabhängige phänotypische Merkmale beeinflusst. Ein klassisches Beispiel ist das Marfan-Syndrom: Eine Mutation im FBN1-Gen (Fibrillin-1) führt gleichzeitig zu überlangen Gliedmaßen, Linsenluxation im Auge, Aortendilatation und überdehnbarer Haut. Das Gen kodiert ein Strukturprotein des Bindegewebes, das in vielen Organsystemen benötigt wird.',
          hints: [
            'Das Präfix "pleio-" kommt vom griechischen "pleion" = mehr, viele.',
            'Überlege: Kann ein defektes Strukturprotein nur ein Organ betreffen?'
          ],
          tags: ['erbgänge', 'pleiotropie'],
          difficulty: 1
        },
        {
          question: 'Worin unterscheiden sich Penetranz und Expressivität?',
          options: [
            'Penetranz betrifft nur dominante, Expressivität nur rezessive Erbgänge',
            'Penetranz beschreibt "ob", Expressivität beschreibt "wie stark" ein Merkmal auftritt',
            'Penetranz gilt für Gene, Expressivität für Umweltfaktoren',
            'Penetranz ist immer 100%, Expressivität variabel',
            'Beide Begriffe sind synonym und beschreiben dasselbe Phänomen'
          ],
          correctIndex: 1,
          explanation: 'Penetranz ist eine Alles-oder-Nichts-Frage: "Tritt das Merkmal bei einem Träger des Genotyps auf?" (ausgedrückt als Prozentsatz). Expressivität hingegen beschreibt den Schweregrad oder das Ausmaß der Ausprägung bei denjenigen, die das Merkmal zeigen. Beispiel Neurofibromatose: Hohe Penetranz (fast alle mit der Mutation zeigen Symptome), aber variable Expressivität (von milden Hautflecken bis zu schweren Tumoren).',
          hints: [
            'Penetranz = binär (ja/nein), Expressivität = graduell (leicht/mittel/schwer).',
            'Überlege: Kann jemand dieselbe Mutation haben, aber unterschiedlich schwer betroffen sein?'
          ],
          tags: ['erbgänge', 'penetranz', 'expressivität'],
          difficulty: 2
        },
        {
          question: 'Welche Aussage zur multifaktoriellen Vererbung ist korrekt?',
          options: [
            'Sie folgt den klassischen Mendelschen Regeln exakt',
            'Nur Gene, keine Umweltfaktoren spielen eine Rolle',
            'Die Merkmale zeigen diskrete Kategorien statt kontinuierlicher Variation',
            'Gene und Umwelt wirken zusammen und erzeugen eine Normalverteilung',
            'Multifaktorielle Merkmale werden nur maternal vererbt'
          ],
          correctIndex: 3,
          explanation: 'Bei multifaktorieller Vererbung interagieren mehrere Gene (Polygenie) mit Umweltfaktoren. Dies führt zu einer kontinuierlichen Variation des Merkmals in der Bevölkerung, typischerweise in Form einer Normalverteilung. Beispiele sind Körpergröße, Hautfarbe oder Krankheitsprädispositionen wie Diabetes. Im Gegensatz dazu führen Mendelsche Erbgänge zu diskreten Kategorien (z.B. krank/gesund bei rezessiven Erkrankungen).',
          hints: [
            'Das Wort "multifaktoriell" bedeutet "viele Faktoren sind beteiligt".',
            'Überlege: Sind Menschen exakt 150 cm, 160 cm, 170 cm groß – oder gibt es alle Zwischenwerte?'
          ],
          tags: ['erbgänge', 'multifaktoriell', 'polygenie'],
          difficulty: 1
        },
        {
          question: 'Eine Patientin trägt eine BRCA1-Mutation mit 70% Penetranz für Brustkrebs. Was bedeutet das?',
          options: [
            'Sie wird mit 70%iger Wahrscheinlichkeit an Brustkrebs erkranken',
            '70% ihrer Töchter werden die Mutation erben',
            'Der Tumor wird zu 70% bösartig sein',
            '70% ihrer Gene sind von der Mutation betroffen',
            'Sie hat ein 70% höheres Risiko als die Allgemeinbevölkerung'
          ],
          correctIndex: 0,
          explanation: 'Eine Penetranz von 70% bedeutet, dass 70% der Trägerinnen der BRCA1-Mutation im Laufe ihres Lebens (typischerweise bis zum 80. Lebensjahr) Brustkrebs entwickeln werden, während 30% trotz der Mutation nicht erkranken. Dies ist deutlich höher als das Risiko in der Allgemeinbevölkerung (~12%). Die Penetranz ist unabhängig von der Vererbungswahrscheinlichkeit (die bei autosomal-dominanten Mutationen 50% beträgt).',
          hints: [
            'Penetranz beschreibt die Wahrscheinlichkeit, dass der Genotyp zum Phänotyp führt.',
            'Überlege: Wenn 100 Frauen die Mutation tragen, wie viele erkranken?'
          ],
          tags: ['erbgänge', 'penetranz', 'brca'],
          difficulty: 3
        }
      ]
    },
    {
      id: 'bio-8-04',
      title: 'Präimplantations- und Pränataldiagnostik',
      content: `# Präimplantations- und Pränataldiagnostik

Die vorgeburtliche genetische Diagnostik ermöglicht den Nachweis von Chromosomenaberrationen und Gendefekten vor oder während der Schwangerschaft. Man unterscheidet zwei grundlegende Ansätze: Präimplantationsdiagnostik (PID) vor der Einnistung des Embryos und Pränataldiagnostik (PND) während der Schwangerschaft.

## Präimplantationsdiagnostik (PID)

Die PID wird im Rahmen einer In-vitro-Fertilisation (IVF) durchgeführt. Dabei werden Embryonen vor der Übertragung in die Gebärmutter auf genetische Defekte untersucht.

**Ablauf der PID:**
1. Hormonelle Stimulation und Eizellentnahme
2. In-vitro-Fertilisation (Befruchtung im Labor)
3. Kultivierung der Embryonen bis zum 5-8-Zell-Stadium (Tag 3) oder Blastozystenstadium (Tag 5)
4. Biopsie von 1-2 Zellen (Blastomeren) oder Trophoblastzellen
5. Genetische Analyse (Karyotypisierung, FISH, PCR, Array-CGH)
6. Transfer nur genetisch unauffälliger Embryonen

**Indikationen für PID:**
- Hohes Risiko für monogene Erbkrankheiten (z.B. Mukoviszidose, Muskeldystrophie)
- Schwere Chromosomenanomalien in der Familienanamnese
- Wiederholte Fehlgeburten (rezidivierende Aborte)
- Fortgeschrittenes mütterliches Alter (>35 Jahre)

**Ethische Aspekte der PID:**
Die PID ist ethisch umstritten, da sie zur "Selektion" von Embryonen führt. Nicht transferierte Embryonen werden verworfen oder für die Forschung verwendet. In Deutschland ist die PID seit 2011 unter strengen Auflagen erlaubt (nur bei hohem Risiko für schwerwiegende Erbkrankheiten).

## Pränataldiagnostik (PND)

Die PND umfasst verschiedene Untersuchungsmethoden während der Schwangerschaft, um fetale Fehlbildungen oder genetische Erkrankungen zu erkennen.

> **MerksatzBox type="altfragen":** Amniozentese (15-20. SSW) vs. Chorionzottenbiopsie (10-13. SSW) ist ein klassisches Prüfungsthema. Merke die Zeitpunkte, Risiken und was analysiert wird (Fruchtwasser vs. Plazenta).

### Nicht-invasive Methoden

**1. Ultraschall (Sonografie)**
- Ersttrimester-Screening (11.-14. SSW): Nackentransparenz-Messung (NT)
- Zweittrimester-Screening (18.-22. SSW): Organultraschall (Feindiagnostik)
- Hinweise auf: Down-Syndrom, Herzfehler, Neuralrohrdefekte

**2. Biochemische Tests**
- **Triple-Test (15.-20. SSW):** Messung von AFP, hCG, Estriol im mütterlichen Blut
  - Erhöhtes Risiko für Trisomie 21, 18, Neuralrohrdefekte
  - Hohe Falsch-positiv-Rate (5-10%), nur Risikoabschätzung
- **Quad-Test:** Triple-Test + Inhibin A (verbesserte Sensitivität)

**3. NIPT (Non-Invasive Prenatal Testing)**
- Ab 10. SSW aus mütterlichem Blut
- Analyse zellfreier fetaler DNA (cffDNA) aus Plazenta
- Nachweis von Trisomie 21, 18, 13 mit >99% Sensitivität
- Geringes Risiko für Fehlgeburten (nicht-invasiv)
- Gold-Standard für Ersttrimester-Screening seit ~2015

> **MerksatzBox type="klinisch":** NIPT hat die Pränataldiagnostik revolutioniert: Früher invasive Amniozentese bei jeder Risikoschwangerschaft (0,5% Fehlgeburtsrisiko). Heute NIPT-Screening bei allen, nur bei auffälligem Befund Amniozentese zur Bestätigung. Ergebnis: 90% weniger invasive Eingriffe, deutlich weniger iatrogene Fehlgeburten.

### Invasive Methoden

**1. Chorionzottenbiopsie (CVS, Chorionic Villus Sampling)**
- **Zeitpunkt:** 10.-13. Schwangerschaftswoche
- **Vorgehen:** Transabdominale oder transzervikale Punktion der Plazenta (Chorionzotten)
- **Material:** Trophoblastgewebe (schnell teilende Zellen)
- **Vorteil:** Früher Diagnosezeitpunkt, schnelle Ergebnisse (Direktpräparat innerhalb 24h)
- **Nachteil:** Fehlgeburtsrisiko 0,5-1%, Mosaike möglich (Plazenta ≠ Fetus)

**2. Amniozentese (Fruchtwasseruntersuchung)**
- **Zeitpunkt:** 15.-20. Schwangerschaftswoche (typisch 15.-18. SSW)
- **Vorgehen:** Transabdominale Punktion der Fruchtblase unter Ultraschallkontrolle
- **Material:** Fruchtwasser mit fetalen Zellen (ca. 10-20 ml)
- **Vorteil:** Geringeres Fehlgeburtsrisiko als CVS (ca. 0,3-0,5%), Mosaike selten
- **Nachteil:** Später Diagnosezeitpunkt, Zellkultur benötigt 10-14 Tage
- **Indikationen:**
  - Auffälliger NIPT-Befund (Bestätigungsdiagnostik)
  - Fortgeschrittenes mütterliches Alter (>35 Jahre)
  - Auffälliger Ultraschall (erhöhte NT, Organfehlbildungen)
  - Positive Familienanamnese für genetische Erkrankungen

> **MerksatzBox type="klinisch":** Praxistipp Amniozentese: Lokale Betäubung nicht nötig (mehr Einstiche = mehr Schmerz). Nadel 20-22G, unter Ultraschall-Sicht, plazentafern punktieren. Erste 2ml verwerfen (maternale Kontamination). Komplikation Blasensprung <1%, Chorioamnionitis selten. Patientinnen 24h Ruhe, bei Blutung/Fruchtwasserabgang sofort Klinik.

**3. Nabelschnurpunktion (Chordozentese)**
- Ab 18. SSW, fetale Blutentnahme aus Nabelschnur
- Indikation: Verdacht auf fetale Anämie, Infektionen, schnelle Karyotypisierung
- Höheres Fehlgeburtsrisiko (~1-2%)

## Genetische Analysemethoden in PID/PND

**1. Karyotypisierung:** Darstellung aller Chromosomen (Trisomien, strukturelle Aberrationen)
**2. FISH (Fluoreszenz-in-situ-Hybridisierung):** Schnelltest für bestimmte Chromosomen (13, 18, 21, X, Y)
**3. Array-CGH:** Hochauflösende Analyse chromosomaler Mikrodeletionen/-duplikationen
**4. PCR & Sequenzierung:** Nachweis monogener Erkrankungen (z.B. Mukoviszidose, Hämophilie)
**5. Whole Exome Sequencing (WES):** Umfassende Analyse aller kodierenden Bereiche (bei unklaren Fällen)

## Medizinische und ethische Überlegungen

**Vorteile der PID/PND:**
- Frühzeitige Gewissheit für Eltern mit hohem genetischem Risiko
- Vorbereitung auf ein Kind mit besonderen Bedürfnissen
- Möglichkeit zum Schwangerschaftsabbruch bei schwersten Erkrankungen
- Vermeidung von Leid bei letal verlaufenden Erkrankungen

**Kritische Aspekte:**
- Risiko für Fehlgeburten bei invasiven Methoden
- Psychische Belastung für die Eltern (Entscheidungsdruck)
- "Selektion" von Embryonen (PID) oder Schwangerschaftsabbrüche (PND)
- Gefahr der Diskriminierung von Menschen mit Behinderungen
- Kommerzialisierung (Designer-Babys, Geschlechtswahl in manchen Ländern)

**Rechtliche Situation in Deutschland:**
- PID: Seit 2011 unter strengen Auflagen erlaubt
- Amniozentese/CVS: Erlaubt, Kostenübernahme bei medizinischer Indikation
- NIPT: Seit 2022 Kassenleistung bei Risikoschwangerschaften
- Schwangerschaftsabbruch: Bis 12. SSW straffrei (Beratungsregelung), bei medizinischer Indikation auch später möglich`,
      lernziele: [],
      sections: [],
      merksätze: [
        'PID vor Einnistung (IVF-Embryonen), PND während Schwangerschaft (Fetus) – beide testen auf genetische Defekte, aber zu unterschiedlichen Zeitpunkten.',
        'Amniozentese: 15-20. SSW, Fruchtwasser, ~0,3-0,5% Fehlgeburtsrisiko. Chorionzottenbiopsie: 10-13. SSW, Plazenta, ~0,5-1% Risiko – früher, aber riskanter.',
        'NIPT (Non-Invasive Prenatal Testing): Ab 10. SSW aus mütterlichem Blut, >99% Sensitivität für Trisomie 21/18/13, kein Fehlgeburtsrisiko – Gold-Standard seit ~2015.',
        'Triple-Test misst AFP, hCG, Estriol im mütterlichen Blut – nur Risikoabschätzung, hohe Falsch-positiv-Rate, wurde durch NIPT weitgehend ersetzt.',
        'Ethische Kontroverse: PID und PND ermöglichen frühe Diagnose, führen aber zu "Selektion" und Schwangerschaftsabbrüchen – Spannung zwischen Elternautonomie und Lebensschutz.'
      ],
      klinischerBezug: `**Fallbeispiel: Genetische Beratung bei fortgeschrittenem mütterlichen Alter**

Eine 38-jährige Frau kommt zur genetischen Beratung in der 12. SSW. Sie ist besorgt wegen des erhöhten Risikos für Down-Syndrom (Trisomie 21).

**Risikoabschätzung:**
- Basisrisiko bei 38 Jahren: ~1:200 (vs. 1:1000 bei 30 Jahren)
- Ersttrimester-Screening (Nackentransparenz + biochemische Marker): Risiko 1:50

**Beratungsablauf:**

1. **Nicht-invasive Optionen:**
   - "Wir empfehlen zunächst einen NIPT-Test aus Ihrem Blut. Er hat eine Nachweisrate von >99% für Trisomie 21, ohne Risiko für Ihr Baby."
   - "Ergebnis in 1-2 Wochen."

2. **Wenn NIPT auffällig:**
   - "Der NIPT-Test zeigt ein erhöhtes Risiko. Zur Sicherheit empfehlen wir eine Amniozentese zur Bestätigung."
   - "Die Amniozentese gibt Gewissheit (>99,9% Genauigkeit), hat aber ein kleines Fehlgeburtsrisiko von etwa 1:300."

3. **Entscheidungshilfe:**
   - "Sie haben Zeit, sich zu entscheiden. Wir unterstützen Sie, egal welche Entscheidung Sie treffen."
   - "Bei einem bestätigten Down-Syndrom haben Sie verschiedene Optionen: Fortführung der Schwangerschaft mit Vorbereitung, oder Abbruch bis zur 12. SSW."

**Ergebnis:** Die Patientin entscheidet sich für NIPT. Der Test ist unauffällig, und sie verzichtet auf invasive Diagnostik. Sie bringt ein gesundes Kind zur Welt.

Dieses Beispiel zeigt die Bedeutung einer individuellen Risikoabschätzung und nicht-direktiver Beratung, bei der die Autonomie der Eltern respektiert wird.`,
      selfTest: [
        {
          question: 'Zu welchem Zeitpunkt in der Schwangerschaft wird typischerweise eine Amniozentese durchgeführt?',
          options: [
            '8-10. Schwangerschaftswoche',
            '10-13. Schwangerschaftswoche',
            '15-20. Schwangerschaftswoche',
            '25-30. Schwangerschaftswoche',
            'Nach der 35. Schwangerschaftswoche'
          ],
          correctIndex: 2,
          explanation: 'Die Amniozentese wird üblicherweise zwischen der 15. und 20. Schwangerschaftswoche durchgeführt, typischerweise um die 15.-18. SSW. Zu diesem Zeitpunkt ist genügend Fruchtwasser vorhanden (ca. 150-200 ml), und die fetalen Zellen im Fruchtwasser sind kultivierbar. Frühere Durchführung erhöht das Fehlgeburtsrisiko, spätere Durchführung bedeutet längere Unsicherheit für die Eltern und komplizierte Entscheidungen bei pathologischem Befund.',
          hints: [
            'Die Chorionzottenbiopsie ist früher (10-13. SSW), die Amniozentese später.',
            'Man braucht ausreichend Fruchtwasser für die Punktion.'
          ],
          tags: ['pid', 'pnd', 'pränataldiagnostik', 'amniozentese'],
          difficulty: 2
        },
        {
          question: 'Was ist der Hauptunterschied zwischen PID (Präimplantationsdiagnostik) und PND (Pränataldiagnostik)?',
          options: [
            'PID untersucht nur Chromosomen, PND nur einzelne Gene',
            'PID erfolgt vor Einnistung des Embryos, PND während der Schwangerschaft',
            'PID ist nicht-invasiv, PND immer invasiv',
            'PID ist in Deutschland verboten, PND erlaubt',
            'PID testet nur auf Trisomien, PND auf alle Erkrankungen'
          ],
          correctIndex: 1,
          explanation: 'Der entscheidende Unterschied liegt im Zeitpunkt: Die Präimplantationsdiagnostik (PID) wird vor der Einnistung des Embryos durchgeführt, im Rahmen einer In-vitro-Fertilisation. Dabei werden Embryonen im Labor auf genetische Defekte untersucht, bevor sie in die Gebärmutter übertragen werden. Die Pränataldiagnostik (PND) erfolgt dagegen während einer bestehenden Schwangerschaft durch Methoden wie Ultraschall, NIPT, Amniozentese oder Chorionzottenbiopsie.',
          hints: [
            'Das Präfix "prä-implantation" bedeutet "vor der Einnistung".',
            'Überlege: Wann beginnt eine Schwangerschaft im medizinischen Sinne?'
          ],
          tags: ['pid', 'pnd', 'pränataldiagnostik'],
          difficulty: 1
        },
        {
          question: 'Welche Aussage zum NIPT (Non-Invasive Prenatal Testing) ist korrekt?',
          options: [
            'NIPT erfordert eine Fruchtwasserpunktion',
            'NIPT kann erst ab der 20. Schwangerschaftswoche durchgeführt werden',
            'NIPT analysiert zellfreie fetale DNA aus mütterlichem Blut',
            'NIPT hat ein Fehlgeburtsrisiko von ca. 1%',
            'NIPT kann nur Geschlechtschromosomen-Anomalien nachweisen'
          ],
          correctIndex: 2,
          explanation: 'Der NIPT analysiert zellfreie fetale DNA (cffDNA), die aus abgestorbenen Plazentazellen stammt und im mütterlichen Blut zirkuliert. Diese Methode ist nicht-invasiv (nur eine Blutentnahme bei der Mutter erforderlich), kann ab der 10. Schwangerschaftswoche durchgeführt werden und hat kein Fehlgeburtsrisiko. Der NIPT erreicht eine Nachweisrate von >99% für die häufigsten Trisomien (21, 18, 13) und hat den Triple-Test als Ersttrimester-Screening weitgehend ersetzt.',
          hints: [
            'Das Wort "non-invasive" bedeutet "nicht in den Körper eindringend".',
            'Überlege: Woher kommt fetale DNA im Blut der Mutter?'
          ],
          tags: ['pid', 'pnd', 'pränataldiagnostik', 'nipt'],
          difficulty: 2
        },
        {
          question: 'Welche der folgenden Methoden wird im Rahmen der PID (Präimplantationsdiagnostik) durchgeführt?',
          options: [
            'Amniozentese zur Fruchtwasserentnahme',
            'Biopsie von Blastomeren aus IVF-Embryonen',
            'Nackentransparenz-Messung per Ultraschall',
            'Triple-Test aus mütterlichem Blut',
            'Chorionzottenbiopsie in der 11. SSW'
          ],
          correctIndex: 1,
          explanation: 'Bei der PID werden im Rahmen einer In-vitro-Fertilisation Embryonen im Labor kultiviert. Am Tag 3 (8-Zell-Stadium) oder Tag 5 (Blastozystenstadium) werden 1-2 Zellen (Blastomeren) oder Trophoblastzellen entnommen und genetisch analysiert. Nur Embryonen ohne nachgewiesene genetische Defekte werden anschließend in die Gebärmutter übertragen. Die anderen Optionen sind PND-Methoden, die während einer bestehenden Schwangerschaft angewendet werden.',
          hints: [
            'PID findet vor der Schwangerschaft statt, im Labor während der IVF.',
            'Überlege: Was kann man an einem Embryo im 8-Zell-Stadium untersuchen?'
          ],
          tags: ['pid', 'präimplantationsdiagnostik'],
          difficulty: 1
        },
        {
          question: 'Warum wird die Chorionzottenbiopsie früher in der Schwangerschaft durchgeführt als die Amniozentese?',
          options: [
            'Die Chorionzottenbiopsie hat ein geringeres Fehlgeburtsrisiko',
            'Plazentazellen teilen sich schneller und liefern schnellere Ergebnisse',
            'Die Amniozentese kann erst durchgeführt werden, wenn genug Fruchtwasser vorhanden ist',
            'Die Chorionzottenbiopsie ist nicht-invasiv',
            'Bei der Amniozentese ist die Fehlerrate höher'
          ],
          correctIndex: 2,
          explanation: 'Die Amniozentese erfordert eine ausreichende Menge Fruchtwasser (ca. 150-200 ml), um sicher punktiert werden zu können. Dies ist erst ab der 15. Schwangerschaftswoche gegeben. Die Chorionzottenbiopsie entnimmt dagegen Gewebe aus der Plazenta (Chorionzotten), die bereits ab der 10. Woche ausreichend entwickelt ist. Der Nachteil der früheren CVS: etwas höheres Fehlgeburtsrisiko (0,5-1% vs. 0,3-0,5%) und Möglichkeit von Mosaiken (Plazenta-DNA kann vom Fetus abweichen).',
          hints: [
            'Überlege: Wann ist genug Fruchtwasser für eine sichere Punktion vorhanden?',
            'Chorion = Plazentazotten (früh vorhanden), Amnion = Fruchthöhle (braucht Zeit zum Füllen).'
          ],
          tags: ['pid', 'pnd', 'pränataldiagnostik', 'chorionzottenbiopsie', 'amniozentese'],
          difficulty: 3
        },
        {
          question: 'Welche ethische Problematik wird im Zusammenhang mit PID am häufigsten diskutiert?',
          options: [
            'Das hohe Fehlgeburtsrisiko der Methode',
            'Die hohen Kosten der Untersuchung',
            'Die Selektion und Verwerfung von Embryonen',
            'Die lange Wartezeit auf Ergebnisse',
            'Die geringe Genauigkeit der Diagnostik'
          ],
          correctIndex: 2,
          explanation: 'Die zentrale ethische Kontroverse bei der PID ist die "Selektion" von Embryonen: Embryonen mit genetischen Defekten werden nicht transferiert, sondern verworfen oder für die Forschung verwendet. Dies wirft grundlegende Fragen zum Beginn des Lebensschutzes, zur Würde des Embryos und zur Gefahr einer "Designer-Baby"-Mentalität auf. In Deutschland ist die PID deshalb nur unter strengen Auflagen und bei hohem Risiko für schwerwiegende Erbkrankheiten erlaubt (seit 2011).',
          hints: [
            'Überlege: Was passiert mit Embryonen, die genetische Defekte aufweisen?',
            'Das Wort "Selektion" bedeutet "Auswahl" – wer wird ausgewählt, wer nicht?'
          ],
          tags: ['pid', 'ethik', 'präimplantationsdiagnostik'],
          difficulty: 2
        }
      ]
    }
  ]
};
