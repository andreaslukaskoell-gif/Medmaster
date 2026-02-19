import type { Kapitel } from '../types';

export const bioKap7: Kapitel = {
  id: 'bio-kap7',
  title: 'Methoden der Genetik',
  subject: 'biologie',
  icon: '🧬',
  estimatedTime: '120 min',
  unterkapitel: [
    {
      id: 'bio-7-01',
      title: 'PCR (Polymerase-Kettenreaktion)',
      content: `# PCR (Polymerase-Kettenreaktion)

Die Polymerase-Kettenreaktion (PCR) ist eine der wichtigsten molekularbiologischen Methoden zur gezielten Vervielfältigung von DNA-Abschnitten. Sie wurde 1983 von Kary Mullis entwickelt und ermöglicht es, aus winzigen Mengen DNA Millionen identischer Kopien zu erzeugen. Die PCR basiert auf der natürlichen DNA-Replikation, läuft aber in vitro ab und nutzt thermostabile DNA-Polymerasen.

## Prinzip der PCR

Die PCR beruht auf sich wiederholenden Zyklen von drei Temperaturschritten. Jeder Zyklus verdoppelt die Anzahl der DNA-Moleküle, sodass nach n Zyklen theoretisch 2^n Kopien vorliegen. In der Praxis werden typischerweise 25-35 Zyklen durchgeführt.

> **MerksatzBox type="altfragen":** PCR-Grundlagen (Denaturierung 94-95°C, Annealing 50-65°C, Elongation 72°C) gehören zu den häufigsten BMS-Prüfungsthemen. Die drei Schritte und ihre Temperaturen werden regelmäßig abgefragt.

**Die drei Schritte pro Zyklus:**

1. **Denaturierung (94-95°C):** Die Doppelstrang-DNA wird durch Hitze in Einzelstränge getrennt. Die Wasserstoffbrückenbindungen zwischen den komplementären Basen brechen auf.

2. **Annealing (50-65°C):** Kurze DNA-Oligonukleotide, die sogenannten Primer, lagern sich an die komplementären Sequenzen der Einzelstrang-DNA an. Die Temperatur hängt von der Primerlänge und -sequenz ab.

3. **Elongation (72°C):** Die thermostabile Taq-Polymerase (aus dem Bakterium Thermus aquaticus) synthetisiert den komplementären DNA-Strang ausgehend vom 3'-Ende der Primer.

## Komponenten der PCR

Für eine erfolgreiche PCR werden folgende Bestandteile benötigt:

- **Template-DNA:** Die zu vervielfältigende Ausgangsprobe
- **Primer:** Zwei Oligonukleotide (forward und reverse), die die zu amplifizierende Region flankieren
- **DNA-Polymerase:** Thermostabile Taq-Polymerase (aktiv bei hohen Temperaturen)
- **dNTPs:** Die vier Desoxyribonukleosidtriphosphate (dATP, dTTP, dGTP, dCTP)
- **Puffer:** Enthält Magnesiumionen (Mg²⁺) als Cofaktor für die Polymerase

## Anwendungen

Die PCR findet vielfältige Anwendung in Forschung, Diagnostik und Forensik:

- **Molekulare Diagnostik:** Nachweis von Krankheitserregern (Bakterien, Viren)
- **Forensik:** DNA-Analyse aus Spuren am Tatort
- **Vaterschaftstests:** Vergleich genetischer Profile
- **Genforschung:** Klonierung, Sequenzierung, Mutationsanalyse
- **Pränatale Diagnostik:** Nachweis genetischer Erkrankungen

> **MerksatzBox type="klinisch":** Im klinischen Alltag begegnet dir PCR ständig: COVID-19-Tests (RT-qPCR), Erregerdiagnostik bei Sepsis (Blutkultur-PCR liefert Ergebnis in 6h statt 2-3 Tagen), Tumordiagnostik (EGFR-Mutation → Therapiewahl bei Lungenkrebs). PCR ist das Arbeitspferd der modernen Labormedizin.

## Varianten der PCR

Neben der Standard-PCR wurden zahlreiche Varianten entwickelt:

- **Quantitative PCR (qPCR):** Ermöglicht die Quantifizierung der DNA-Menge in Echtzeit
- **Reverse Transkriptase-PCR (RT-PCR):** Vervielfältigung von RNA nach Umschreibung in cDNA
- **Nested PCR:** Zwei aufeinanderfolgende PCR-Reaktionen für höhere Spezifität
- **Multiplex-PCR:** Gleichzeitige Amplifikation mehrerer DNA-Abschnitte`,
      lernziele: [],
      sections: [],
      merksätze: [
        'Die PCR verdoppelt DNA-Sequenzen exponentiell in zyklischen Wiederholungen: Nach n Zyklen entstehen theoretisch 2^n Kopien.',
        'Drei Schritte pro Zyklus: Denaturierung (94-95°C trennt Doppelstrang), Annealing (50-65°C bindet Primer), Elongation (72°C synthetisiert neuen Strang).',
        'Die Taq-Polymerase aus Thermus aquaticus ist thermostabil und überlebt die hohen Temperaturen der Denaturierung.',
        'Primer sind essenziell: Sie definieren Start- und Endpunkt der zu amplifizierenden Sequenz und müssen komplementär zu den Zielsequenzen sein.',
        'Exponentielles Wachstum ermöglicht die Amplifikation aus kleinsten DNA-Mengen – theoretisch reicht ein einziges DNA-Molekül als Ausgangsmaterial.'
      ],
      selfTest: [
        {
          question: 'Welche Temperatur wird für die Denaturierung der DNA in der PCR verwendet?',
          options: [
            '50-65°C (Annealing-Temperatur)',
            '30-40°C (Niedrige Temperatur)',
            '94-95°C (Denaturierungs-Temperatur)',
            '37°C (Körpertemperatur)',
            '4°C (Lagerungstemperatur)'
          ],
          correctIndex: 2,
          explanation: 'Bei etwa 94-95°C denaturiert die doppelsträngige DNA durch Aufbrechen der Wasserstoffbrückenbindungen zwischen den komplementären Basen. Diese hohe Temperatur ist notwendig, um die DNA-Stränge vollständig zu trennen und für die Primer-Bindung im nächsten Schritt zugänglich zu machen.',
          hints: [
            'Die höchste Temperatur im PCR-Zyklus trennt die Doppelstränge.',
            'Überlege: Bei welcher Temperatur werden Wasserstoffbrücken aufgebrochen?'
          ],
          tags: ['pcr', 'polymerase-kettenreaktion', 'denaturierung'],
          difficulty: 2
        },
        {
          question: 'Was ist die Funktion der Primer in der PCR?',
          options: [
            'Sie synthetisieren den neuen DNA-Strang',
            'Sie definieren Start- und Endpunkt der Amplifikation',
            'Sie denaturieren die DNA',
            'Sie stabilisieren die DNA-Polymerase',
            'Sie liefern Energie für die Reaktion'
          ],
          correctIndex: 1,
          explanation: 'Primer sind kurze Oligonukleotide, die komplementär zu den flankierenden Sequenzen der zu amplifizierenden Region sind. Sie lagern sich beim Annealing an die Einzelstrang-DNA an und definieren damit den Startpunkt für die DNA-Polymerase. Nur der Bereich zwischen forward und reverse Primer wird vervielfältigt.',
          hints: [
            'Primer sind kurze DNA-Stücke, die sich an spezifische Sequenzen anlagern.',
            'Überlege: Woher weiß die Polymerase, wo sie beginnen soll?'
          ],
          tags: ['pcr', 'polymerase-kettenreaktion', 'primer'],
          difficulty: 1
        },
        {
          question: 'Warum wird in der PCR die Taq-Polymerase verwendet?',
          options: [
            'Sie arbeitet besonders schnell',
            'Sie ist sehr kostengünstig',
            'Sie ist thermostabil und überlebt hohe Temperaturen',
            'Sie korrigiert Fehler besonders effizient',
            'Sie benötigt keine Cofaktoren'
          ],
          correctIndex: 2,
          explanation: 'Die Taq-Polymerase stammt aus dem thermophilen Bakterium Thermus aquaticus und ist bei Temperaturen bis 95°C stabil. Dies ist entscheidend für die PCR, da in jedem Zyklus eine Denaturierung bei 94-95°C stattfindet. Andere DNA-Polymerasen würden bei diesen Temperaturen denaturieren und ihre Funktion verlieren.',
          hints: [
            'Thermus aquaticus lebt in heißen Quellen.',
            'Was passiert mit den meisten Enzymen bei 95°C?'
          ],
          tags: ['pcr', 'polymerase-kettenreaktion', 'taq-polymerase'],
          difficulty: 2
        },
        {
          question: 'Nach wie vielen PCR-Zyklen liegen theoretisch 1024 Kopien einer DNA-Sequenz vor, wenn man mit einem Molekül startet?',
          options: [
            '5 Zyklen',
            '8 Zyklen',
            '10 Zyklen',
            '16 Zyklen',
            '20 Zyklen'
          ],
          correctIndex: 2,
          explanation: 'Die PCR verdoppelt die DNA-Menge in jedem Zyklus exponentiell (2^n). Nach 10 Zyklen erhält man 2^10 = 1024 Kopien. Diese exponentielle Amplifikation ist der Grund für die hohe Effizienz der PCR: Bereits nach 30 Zyklen entstehen über eine Milliarde Kopien (2^30 ≈ 1,07 × 10^9).',
          hints: [
            'Die Formel lautet: Anzahl = 2^n, wobei n die Zyklenanzahl ist.',
            'Welche Potenz von 2 ergibt 1024?'
          ],
          tags: ['pcr', 'polymerase-kettenreaktion', 'amplifikation'],
          difficulty: 2
        },
        {
          question: 'Welche Aussage zum Annealing-Schritt der PCR ist korrekt?',
          options: [
            'Die DNA-Stränge werden getrennt',
            'Die Primer lagern sich an komplementäre Sequenzen an',
            'Die DNA-Polymerase synthetisiert den neuen Strang',
            'Die Reaktion wird gestoppt',
            'Die DNA wird vollständig denaturiert'
          ],
          correctIndex: 1,
          explanation: 'Beim Annealing (typischerweise 50-65°C) lagern sich die Primer spezifisch an ihre komplementären Zielsequenzen auf den Einzelstrang-DNA-Molekülen an. Die Temperatur wird so gewählt, dass die Primer stabil binden können, aber unspezifische Bindungen minimiert werden. Die Annealing-Temperatur hängt von der Länge und GC-Gehalt der Primer ab.',
          hints: [
            'Annealing bedeutet „Anlagerung" oder „Hybridisierung".',
            'Bei mittlerer Temperatur können komplementäre Sequenzen binden.'
          ],
          tags: ['pcr', 'polymerase-kettenreaktion', 'annealing'],
          difficulty: 1
        },
        {
          question: 'Welche Komponente ist NICHT zwingend erforderlich für eine Standard-PCR?',
          options: [
            'Template-DNA',
            'DNA-Polymerase',
            'Primer (forward und reverse)',
            'Reverse Transkriptase',
            'Desoxyribonukleosidtriphosphate (dNTPs)'
          ],
          correctIndex: 3,
          explanation: 'Die Reverse Transkriptase wird nur bei der RT-PCR benötigt, wenn RNA in cDNA umgeschrieben werden soll. Für eine Standard-PCR mit DNA-Template sind dagegen Template-DNA, Taq-Polymerase, Primer und dNTPs essentiell. Zusätzlich wird ein geeigneter Puffer mit Mg²⁺-Ionen benötigt, die als Cofaktor für die Polymerase dienen.',
          hints: [
            'Überlege: Was wird nur benötigt, wenn RNA das Ausgangsmaterial ist?',
            'Die Standard-PCR arbeitet mit DNA als Template.'
          ],
          tags: ['pcr', 'polymerase-kettenreaktion', 'komponenten'],
          difficulty: 2
        }
      ]
    },
    {
      id: 'bio-7-02',
      title: 'DNA-Sequenzierung',
      content: `# DNA-Sequenzierung

Die DNA-Sequenzierung ist die Bestimmung der Nukleotidabfolge in einem DNA-Molekül. Sie ist eine Schlüsselmethode der modernen Molekularbiologie und Medizin. Seit der Entwicklung der Sanger-Sequenzierung in den 1970er Jahren haben sich die Technologien stetig weiterentwickelt, bis hin zu modernen Next-Generation-Sequencing (NGS)-Verfahren, die das gesamte menschliche Genom in wenigen Tagen sequenzieren können.

## Sanger-Sequenzierung (Kettenabbruch-Methode)

Die von Frederick Sanger 1977 entwickelte Methode war lange Zeit der Goldstandard der DNA-Sequenzierung und ermöglichte die Sequenzierung des ersten menschlichen Genoms im Rahmen des Human Genome Project (2003).

### Prinzip

Die Sanger-Sequenzierung basiert auf dem kontrollierten, zufälligen Abbruch der DNA-Synthese. Sie nutzt modifizierte Nukleotide, die sogenannten Didesoxyribonukleosidtriphosphate (ddNTPs).

> **MerksatzBox type="altfragen":** Der Unterschied zwischen dNTPs und ddNTPs (fehlende 3'-OH-Gruppe führt zum Kettenabbruch) ist ein klassisches Prüfungsthema. Verstehe das Prinzip, nicht nur auswendig lernen.

**Unterschied zu normalen dNTPs:**
- **dNTPs** haben eine OH-Gruppe am 3'-C-Atom der Ribose → DNA-Synthese kann weiterlaufen
- **ddNTPs** fehlt diese OH-Gruppe → Kettenabbruch, da keine Phosphodiesterbindung zum nächsten Nukleotid gebildet werden kann

### Ablauf der Sanger-Sequenzierung

1. **DNA-Denaturierung:** Die zu sequenzierende DNA wird in Einzelstränge getrennt
2. **Primer-Anlagerung:** Ein Primer bindet an eine bekannte Sequenz
3. **DNA-Synthese mit Kettenabbruch:** DNA-Polymerase synthetisiert neue Stränge. Im Reaktionsgemisch befinden sich sowohl normale dNTPs als auch fluoreszenzmarkierte ddNTPs. Wird zufällig ein ddNTP eingebaut, stoppt die Synthese an dieser Position
4. **Fragmenttrennung:** Die unterschiedlich langen DNA-Fragmente werden durch Kapillarelektrophorese nach Größe getrennt
5. **Detektion:** Ein Laser detektiert die Fluoreszenzfarbstoffe der ddNTPs am Ende jedes Fragments. Die Reihenfolge der Farbsignale entspricht der Nukleotidsequenz

### Moderne Automatisierung

Heutige Sanger-Sequenzierung nutzt vier verschiedene Fluoreszenzfarbstoffe (je einer für A, T, G, C), sodass alle vier Basen in einem einzigen Reaktionsgefäß sequenziert werden können. Die Methode liefert Sequenzen von 500-1000 Basenpaaren mit sehr hoher Genauigkeit (>99,9%).

## Next-Generation Sequencing (NGS)

NGS-Technologien ermöglichen die parallele Sequenzierung von Millionen DNA-Fragmenten gleichzeitig. Sie sind deutlich schneller und kostengünstiger als die Sanger-Methode, allerdings mit kürzeren Leselängen.

### Prinzipien moderner NGS-Verfahren

**Illumina-Sequenzierung (am weitesten verbreitet):**
1. **DNA-Fragmentierung:** Genomische DNA wird in kurze Fragmente (150-300 bp) zerlegt
2. **Adapteranlagerung:** An beide Enden werden kurze DNA-Adapter ligiert
3. **Bridge-Amplifikation:** Die Fragmente werden auf einer festen Oberfläche (Flow Cell) klonal vervielfältigt
4. **Sequenzierung durch Synthese:** Fluoreszenzmarkierte Nukleotide werden einzeln eingebaut und detektiert

**Vorteile von NGS:**
- Hoher Durchsatz (Millionen Reads parallel)
- Kostengünstig für große Datenmengen
- Quantitative Information über DNA-Mengen
- Geeignet für Gesamtgenomsequenzierung

## Anwendungen der DNA-Sequenzierung

- **Humangenomik:** Identifikation krankheitsrelevanter Mutationen
- **Onkologie:** Tumorgenomanalyse, personalisierte Krebstherapie
- **Pränatale Diagnostik:** Nicht-invasive Pränataldiagnostik (NIPT)
- **Infektiologie:** Erregeridentifikation und Resistenzbestimmung
- **Forensik:** Identifikation von Personen
- **Evolutionsforschung:** Vergleich von Genomen verschiedener Spezies

> **MerksatzBox type="klinisch":** DNA-Sequenzierung ist Basis der personalisierten Medizin. Konkret: Bei metastasiertem Kolonkarzinom sequenzieren wir den Tumor auf KRAS-Mutationen – Wildtyp erhält Cetuximab (monoklonaler Antikörper), KRAS-mutiert nicht (Resistenz). Gleiche Diagnose, unterschiedliche Therapie – basierend auf Sequenzierung.`,
      lernziele: [],
      sections: [],
      merksätze: [
        'Die Sanger-Sequenzierung nutzt Didesoxyribonukleotide (ddNTPs), denen die 3\'-OH-Gruppe fehlt – ihr Einbau führt zum Kettenabbruch.',
        'Der entscheidende Unterschied: dNTPs ermöglichen DNA-Synthese, ddNTPs stoppen sie durch fehlende 3\'-OH-Gruppe.',
        'Next-Generation Sequencing (NGS) sequenziert Millionen Fragmente parallel und ist ideal für Gesamtgenomanalysen.',
        'Sanger-Methode: hohe Genauigkeit (>99,9%), lange Reads (500-1000 bp), ideal für einzelne Gene; NGS: hoher Durchsatz, kurze Reads, ideal für Genome.',
        'Moderne Sanger-Sequenzierung nutzt vier Fluoreszenzfarbstoffe (A, T, G, C), sodass alle Basen in einer Reaktion bestimmt werden.'
      ],
      selfTest: [
        {
          question: 'Was ist der entscheidende Unterschied zwischen dNTPs und ddNTPs bei der Sanger-Sequenzierung?',
          options: [
            'ddNTPs haben eine zusätzliche Methylgruppe',
            'ddNTPs fehlt die 3\'-OH-Gruppe, was zum Kettenabbruch führt',
            'ddNTPs sind größer als dNTPs',
            'ddNTPs enthalten eine andere Phosphatgruppe',
            'ddNTPs haben eine andere Basenpaarung'
          ],
          correctIndex: 1,
          explanation: 'Didesoxyribonukleotiden (ddNTPs) fehlt die Hydroxylgruppe am 3\'-Kohlenstoffatom der Ribose. Diese OH-Gruppe ist jedoch notwendig, um eine Phosphodiesterbindung zum nächsten Nukleotid zu bilden. Wird ein ddNTP eingebaut, kann die DNA-Synthese nicht fortgesetzt werden – es kommt zum Kettenabbruch. Dies ist das Grundprinzip der Sanger-Sequenzierung.',
          hints: [
            'Der Name „Didesoxyribonukleotid" gibt einen Hinweis – es fehlt etwas.',
            'Überlege: Was wird für die Verknüpfung von Nukleotiden benötigt?'
          ],
          tags: ['sequenzierung', 'sanger', 'ddntp'],
          difficulty: 2
        },
        {
          question: 'Welche Methode wird bei der klassischen Sanger-Sequenzierung zur Trennung der DNA-Fragmente verwendet?',
          options: [
            'Zentrifugation',
            'Gelelektrophorese oder Kapillarelektrophorese',
            'Chromatographie',
            'Filtration',
            'Magnetische Separation'
          ],
          correctIndex: 1,
          explanation: 'Die DNA-Fragmente unterschiedlicher Länge werden durch (Kapillar-)Elektrophorese nach ihrer Größe getrennt. Kleine Fragmente wandern schneller durch das Medium als große. Moderne Systeme nutzen Kapillarelektrophorese, bei der die Fragmente durch eine sehr dünne Kapillare wandern und am Ende durch Laser-induzierte Fluoreszenz detektiert werden.',
          hints: [
            'Die Methode trennt Moleküle nach Größe unter Verwendung eines elektrischen Feldes.',
            'DNA ist negativ geladen und wandert zur Anode.'
          ],
          tags: ['sequenzierung', 'sanger', 'elektrophorese'],
          difficulty: 1
        },
        {
          question: 'Was ermöglicht Next-Generation Sequencing (NGS) im Vergleich zur Sanger-Sequenzierung?',
          options: [
            'Längere DNA-Fragmente zu sequenzieren',
            'Höhere Genauigkeit zu erreichen',
            'Millionen DNA-Fragmente parallel zu sequenzieren',
            'Sequenzierung ohne DNA-Polymerase',
            'Sequenzierung ohne Primer'
          ],
          correctIndex: 2,
          explanation: 'Der entscheidende Vorteil von NGS ist die massive Parallelisierung: Millionen bis Milliarden DNA-Fragmente werden gleichzeitig sequenziert. Dadurch können in kurzer Zeit große Datenmengen generiert werden, was z.B. die Sequenzierung ganzer Genome in wenigen Tagen ermöglicht. Die Sanger-Methode ist zwar genauer, kann aber nur eine Sequenz pro Reaktion bestimmen.',
          hints: [
            '„Next-Generation" bezieht sich auf den enormen Durchsatz.',
            'Überlege: Was macht NGS revolutionär für die Genomforschung?'
          ],
          tags: ['sequenzierung', 'ngs', 'next-generation'],
          difficulty: 2
        },
        {
          question: 'Wie lang sind typischerweise die Sequenzen, die mit moderner Sanger-Sequenzierung erzeugt werden?',
          options: [
            '50-100 Basenpaare',
            '100-200 Basenpaare',
            '500-1000 Basenpaare',
            '5000-10000 Basenpaare',
            '50000-100000 Basenpaare'
          ],
          correctIndex: 2,
          explanation: 'Moderne Sanger-Sequenzierung liefert typischerweise Reads von 500-1000 Basenpaaren Länge mit sehr hoher Genauigkeit (>99,9%). Dies ist deutlich länger als bei den meisten NGS-Methoden (oft 150-300 bp), macht die Sanger-Methode aber auch langsamer und teurer pro Base. Sie eignet sich daher besonders für die gezielte Sequenzierung einzelner Gene oder zur Validierung von NGS-Ergebnissen.',
          hints: [
            'Sanger-Sequenzierung erzeugt längere Reads als typische NGS-Methoden.',
            'Die Methode wird oft für einzelne Gene oder zur Validierung verwendet.'
          ],
          tags: ['sequenzierung', 'sanger', 'read-länge'],
          difficulty: 2
        },
        {
          question: 'Welche Aussage zur DNA-Sequenzierung ist korrekt?',
          options: [
            'ddNTPs haben eine 3\'-OH-Gruppe und ermöglichen Kettenverlängerung',
            'NGS ist immer genauer als Sanger-Sequenzierung',
            'Sanger-Sequenzierung nutzt fluoreszenzmarkierte ddNTPs zur Basenerkennung',
            'Bei der Sanger-Methode werden DNA-Fragmente nach Masse getrennt',
            'NGS kann ohne DNA-Amplifikation durchgeführt werden'
          ],
          correctIndex: 2,
          explanation: 'In der modernen Sanger-Sequenzierung sind die vier ddNTPs (A, T, G, C) jeweils mit unterschiedlichen Fluoreszenzfarbstoffen markiert. Nach der elektrophoretischen Trennung werden die Fragmente mit einem Laser angeregt, und die Farbe des Signals zeigt an, welche Base am Ende des Fragments steht. Die Abfolge der Farbsignale ergibt die DNA-Sequenz.',
          hints: [
            'Moderne Systeme nutzen vier verschiedene Farben für die vier Basen.',
            'Die Fluoreszenz wird am Ende jedes Fragments detektiert.'
          ],
          tags: ['sequenzierung', 'sanger', 'fluoreszenz'],
          difficulty: 2
        },
        {
          question: 'In welchem Bereich liegt die typische Genauigkeit der Sanger-Sequenzierung?',
          options: [
            '50-60%',
            '80-90%',
            '95-98%',
            '>99,9%',
            '100% (fehlerfrei)'
          ],
          correctIndex: 3,
          explanation: 'Die Sanger-Sequenzierung erreicht eine sehr hohe Genauigkeit von über 99,9%, was bedeutet, dass weniger als eine Base von 1000 falsch bestimmt wird. Diese hohe Präzision macht die Methode zum Goldstandard für die Validierung von Sequenzierergebnissen und für klinische Anwendungen, bei denen es auf absolute Genauigkeit ankommt, etwa bei der Diagnostik genetischer Erkrankungen.',
          hints: [
            'Sanger gilt als „Goldstandard" für Genauigkeit.',
            'Die Methode wird zur Validierung anderer Sequenziermethoden verwendet.'
          ],
          tags: ['sequenzierung', 'sanger', 'genauigkeit'],
          difficulty: 1
        }
      ]
    },
    {
      id: 'bio-7-03',
      title: 'Genomanalyse',
      content: `# Genomanalyse

Die Genomanalyse umfasst alle Methoden zur Untersuchung der Gesamtheit der genetischen Information eines Organismus. Während die DNA-Sequenzierung die Basenabfolge bestimmt, geht die Genomanalyse darüber hinaus: Sie untersucht Genexpression, epigenetische Modifikationen, strukturelle Variationen und funktionelle Zusammenhänge auf Genom-Ebene.

## Ebenen der Genomanalyse

### 1. Strukturelle Genomanalyse

Die strukturelle Genomanalyse beschäftigt sich mit der Organisation und Architektur des Genoms:

- **Kartierung von Genen:** Bestimmung der chromosomalen Lokalisation von Genen
- **Identifikation von Genen:** Vorhersage kodierender Sequenzen durch Bioinformatik
- **Strukturelle Variationen:** Analyse von Deletionen, Duplikationen, Inversionen, Translokationen
- **Kopienzahl-Varianten (CNVs):** Unterschiede in der Anzahl von DNA-Segmenten zwischen Individuen

### 2. Funktionelle Genomanalyse

Die funktionelle Genomanalyse untersucht, wie Gene reguliert werden und welche Funktion sie haben:

- **Genexpressionsanalyse:** Bestimmung, welche Gene in welchen Geweben aktiv sind
- **Proteomanalyse:** Untersuchung aller in einer Zelle produzierten Proteine
- **Metabolomanalyse:** Analyse aller Stoffwechselprodukte
- **Interaktomanalyse:** Kartierung von Protein-Protein-Wechselwirkungen

## Microarray-Technologie

Microarrays (DNA-Chips) ermöglichen die parallele Analyse tausender Gene auf einem einzigen Chip.

### Prinzip

Ein Microarray besteht aus einer festen Oberfläche (meist Glasplättchen), auf der DNA-Sonden in einem rasterförmigen Muster aufgebracht sind. Jede Sonde ist komplementär zu einer spezifischen DNA- oder RNA-Sequenz.

### Genexpressionsanalyse mit Microarrays

1. **RNA-Isolation:** mRNA wird aus den zu untersuchenden Zellen/Geweben isoliert
2. **Reverse Transkription:** mRNA wird in cDNA umgeschrieben
3. **Fluoreszenzmarkierung:** cDNA wird mit Fluoreszenzfarbstoffen markiert (oft zwei Farben für Vergleich zweier Proben)
4. **Hybridisierung:** Markierte cDNA bindet an komplementäre Sonden auf dem Chip
5. **Detektion:** Laser-Scanner messen die Fluoreszenzintensität jedes Spots
6. **Auswertung:** Die Intensität korreliert mit der Expression des jeweiligen Gens

### Anwendungen von Microarrays

- **Krankheitsforschung:** Vergleich von Genexpressionsprofilen gesunder und kranker Gewebe
- **Tumordiagnostik:** Molekulare Subtypisierung von Tumoren
- **Toxikologie:** Analyse von Genexpressionsveränderungen nach Substanzexposition
- **SNP-Genotypisierung:** Nachweis von Einzelnukleotid-Polymorphismen

## RNA-Sequenzierung (RNA-Seq)

RNA-Seq ist eine NGS-basierte Methode zur umfassenden Analyse des Transkriptoms (Gesamtheit aller RNA-Moleküle einer Zelle).

> **MerksatzBox type="klinisch":** RNA-Seq revolutioniert die Onkologie: Durch Genexpressionsprofiling können wir Brustkrebs in molekulare Subtypen einteilen (Luminal A, Luminal B, HER2+, Triple-negativ) – jeder Subtyp hat unterschiedliche Prognose und Therapie. Früher nur Histologie, heute Präzisionsmedizin.

### Vorteile gegenüber Microarrays

- **Keine Vorinformation nötig:** Erfasst auch unbekannte Transkripte
- **Höhere Sensitivität:** Detektion auch schwach exprimierter Gene
- **Quantitativ:** Präzise Bestimmung der Expressionsstärke
- **Entdeckung neuer Transkripte:** Identifikation alternativer Spleißvarianten

## Bioinformatik in der Genomanalyse

Die Analyse genomischer Daten ist ohne Bioinformatik unmöglich. Typische Aufgaben:

- **Sequenzassemblierung:** Zusammenfügen kurzer DNA-Fragmente zu längeren Sequenzen
- **Annotation:** Identifikation von Genen und funktionellen Elementen
- **Varianten-Analyse:** Identifikation von Mutationen, SNPs, Indels
- **Pathway-Analyse:** Zuordnung von Genen zu biologischen Signalwegen
- **Phylogenetische Analysen:** Vergleich von Genomen verschiedener Spezies

## Epigenetische Analysen

Epigenetische Modifikationen beeinflussen die Genexpression ohne Änderung der DNA-Sequenz:

- **DNA-Methylierung:** Hinzufügen von Methylgruppen an Cytosin-Basen (oft Genrepression)
- **Histonmodifikationen:** Chemische Veränderungen an Histon-Proteinen beeinflussen Chromatinstruktur
- **Chromatin-Immunpräzipitation (ChIP):** Identifikation von Protein-DNA-Wechselwirkungen

## Klinische Anwendungen

- **Personalisierte Medizin:** Anpassung von Therapien basierend auf individuellem Genom
- **Pharmakogenomik:** Vorhersage von Arzneimittelwirkungen und -nebenwirkungen
- **Tumorgenomik:** Identifikation therapeutischer Targets in Krebszellen
- **Präzisionsdiagnostik:** Molekulare Charakterisierung komplexer Erkrankungen`,
      lernziele: [],
      sections: [],
      merksätze: [
        'Genomanalyse geht über Sequenzierung hinaus: Sie untersucht Genexpression, Epigenetik, strukturelle Variationen und funktionelle Zusammenhänge.',
        'Microarrays ermöglichen die parallele Analyse tausender Gene auf einem Chip durch Hybridisierung fluoreszenzmarkierter cDNA an komplementäre Sonden.',
        'RNA-Seq hat Microarrays in vielen Anwendungen abgelöst: höhere Sensitivität, keine Vorinformation nötig, Entdeckung neuer Transkripte möglich.',
        'Bioinformatik ist unverzichtbar: Sequenzassemblierung, Annotation, Varianten-Analyse und Pathway-Zuordnung sind ohne Computeralgorithmen unmöglich.',
        'Epigenetik beeinflusst Genexpression ohne DNA-Sequenzänderung: DNA-Methylierung und Histonmodifikationen steuern die Chromatinstruktur.'
      ],
      selfTest: [
        {
          question: 'Was ist der Hauptunterschied zwischen struktureller und funktioneller Genomanalyse?',
          options: [
            'Strukturelle Analyse untersucht nur Bakterien, funktionelle nur Eukaryoten',
            'Strukturelle Analyse bestimmt Organisation des Genoms, funktionelle untersucht Genregulation und -funktion',
            'Strukturelle Analyse ist billiger als funktionelle',
            'Strukturelle Analyse benötigt keine Sequenzierung',
            'Es gibt keinen Unterschied, die Begriffe sind synonym'
          ],
          correctIndex: 1,
          explanation: 'Die strukturelle Genomanalyse befasst sich mit der Organisation und Architektur des Genoms (Genlokalisation, strukturelle Variationen, CNVs). Die funktionelle Genomanalyse untersucht dagegen, wie Gene reguliert werden, welche Funktion sie haben und wie sie interagieren (Genexpression, Proteom, Metabolom, Interaktom). Beide Ansätze ergänzen sich und sind für das umfassende Verständnis genomischer Prozesse notwendig.',
          hints: [
            'Struktur = Aufbau und Organisation; Funktion = Aktivität und Rolle.',
            'Überlege: Was sagt die Position eines Gens versus seine Aktivität aus?'
          ],
          tags: ['genomanalyse', 'strukturell', 'funktionell'],
          difficulty: 3
        },
        {
          question: 'Welches Prinzip liegt der Microarray-Technologie zugrunde?',
          options: [
            'PCR-Amplifikation spezifischer Gene',
            'Hybridisierung fluoreszenzmarkierter cDNA an komplementäre DNA-Sonden',
            'Sequenzierung durch Kettenabbruch',
            'Elektrophoretische Trennung von DNA-Fragmenten',
            'Klonierung von DNA in Bakterien'
          ],
          correctIndex: 1,
          explanation: 'Microarrays nutzen das Prinzip der komplementären Basenpaarung: Auf dem Chip sind tausende verschiedene DNA-Sonden aufgebracht. Die zu untersuchende mRNA wird in cDNA umgeschrieben und fluoreszenzmarkiert. Diese markierte cDNA hybridisiert (bindet) an komplementäre Sonden auf dem Chip. Die Fluoreszenzintensität jedes Spots gibt Auskunft über die Expression des entsprechenden Gens.',
          hints: [
            'Microarrays nutzen komplementäre Basenpaarung.',
            'Die Methode verwendet Fluoreszenz zur Detektion.'
          ],
          tags: ['genomanalyse', 'microarray', 'hybridisierung'],
          difficulty: 2
        },
        {
          question: 'Welcher Vorteil hat RNA-Seq gegenüber Microarrays?',
          options: [
            'RNA-Seq ist deutlich kostengünstiger',
            'RNA-Seq benötigt keine Bioinformatik',
            'RNA-Seq kann auch unbekannte Transkripte erfassen',
            'RNA-Seq ist schneller durchzuführen',
            'RNA-Seq benötigt keine RNA-Isolation'
          ],
          correctIndex: 2,
          explanation: 'Ein entscheidender Vorteil von RNA-Seq ist, dass keine Vorinformation über die zu untersuchenden Sequenzen nötig ist. Die Methode sequenziert alle vorhandenen RNA-Moleküle und kann daher auch bisher unbekannte Transkripte, neue Spleißvarianten oder nicht-kodierende RNAs identifizieren. Microarrays können dagegen nur Sequenzen detektieren, für die Sonden auf dem Chip vorhanden sind.',
          hints: [
            'Microarrays benötigen vorab definierte Sonden für bekannte Sequenzen.',
            'Sequenzierung ist eine „offene" Methode ohne Vorselektion.'
          ],
          tags: ['genomanalyse', 'rna-seq', 'microarray'],
          difficulty: 3
        },
        {
          question: 'Was versteht man unter dem Transkriptom einer Zelle?',
          options: [
            'Die Gesamtheit aller Proteine',
            'Die Gesamtheit aller DNA-Sequenzen',
            'Die Gesamtheit aller RNA-Moleküle',
            'Die Gesamtheit aller Stoffwechselprodukte',
            'Die Gesamtheit aller epigenetischen Modifikationen'
          ],
          correctIndex: 2,
          explanation: 'Das Transkriptom umfasst alle RNA-Moleküle, die zu einem bestimmten Zeitpunkt in einer Zelle oder einem Gewebe vorhanden sind. Es spiegelt wider, welche Gene aktiv transkribiert werden und gibt damit Auskunft über den funktionellen Zustand der Zelle. Im Gegensatz zum statischen Genom verändert sich das Transkriptom dynamisch je nach Zelltyp, Entwicklungsstadium und äußeren Einflüssen.',
          hints: [
            'Das Präfix „Transkript-" bezieht sich auf Transkription.',
            'Was ist das Hauptprodukt der Transkription?'
          ],
          tags: ['genomanalyse', 'transkriptom', 'rna'],
          difficulty: 1
        },
        {
          question: 'Welche Rolle spielt Bioinformatik in der Genomanalyse?',
          options: [
            'Bioinformatik ist nur für die Datenspeicherung notwendig',
            'Bioinformatik ist optional und dient nur der Visualisierung',
            'Bioinformatik ist unverzichtbar für Assemblierung, Annotation und Variantenanalyse',
            'Bioinformatik wird nur in der Bakteriengenetik benötigt',
            'Bioinformatik ersetzt die experimentelle Arbeit vollständig'
          ],
          correctIndex: 2,
          explanation: 'Bioinformatik ist in der modernen Genomanalyse unverzichtbar. Die enormen Datenmengen aus NGS-Projekten (ein menschliches Genom produziert ~200 GB Rohdaten) können nur mit Computeralgorithmen bewältigt werden. Typische Aufgaben sind die Assemblierung fragmentierter Sequenzen zu vollständigen Genomen, die Annotation (Identifikation von Genen), die Varianten-Analyse (Mutationen, SNPs) und die funktionelle Interpretation (Pathway-Zuordnung).',
          hints: [
            'Ein menschliches Genom enthält ~3 Milliarden Basenpaare.',
            'Moderne Sequenzierung erzeugt Millionen kurzer Reads, die zusammengesetzt werden müssen.'
          ],
          tags: ['genomanalyse', 'bioinformatik'],
          difficulty: 1
        },
        {
          question: 'Was ist eine Kopienzahl-Variante (Copy Number Variant, CNV)?',
          options: [
            'Eine Punktmutation in einem Gen',
            'Ein Unterschied in der Anzahl von DNA-Segmenten zwischen Individuen',
            'Eine epigenetische Modifikation',
            'Ein Fehler bei der PCR-Amplifikation',
            'Eine Form der alternativen Spleißung'
          ],
          correctIndex: 1,
          explanation: 'Kopienzahl-Varianten (CNVs) sind strukturelle Variationen, bei denen DNA-Segmente in unterschiedlicher Anzahl vorliegen. Während die meisten Gene diploid vorliegen (zwei Kopien), können CNVs zu Deletionen (weniger Kopien) oder Duplikationen (mehr Kopien) führen. CNVs können von wenigen Kilobasen bis zu mehreren Megabasen groß sein und tragen zur genetischen Vielfalt bei, können aber auch Krankheiten verursachen.',
          hints: [
            '„Copy Number" bedeutet „Kopienzahl" – wie oft kommt ein DNA-Segment vor?',
            'Dies ist eine strukturelle, nicht sequenz-basierte Variation.'
          ],
          tags: ['genomanalyse', 'cnv', 'strukturelle-variation'],
          difficulty: 3
        }
      ]
    },
    {
      id: 'bio-7-04',
      title: 'Genetischer Fingerabdruck',
      content: `# Genetischer Fingerabdruck

Der genetische Fingerabdruck ist eine molekularbiologische Methode zur eindeutigen Identifikation von Individuen anhand ihrer DNA. Die Methode nutzt die individuelle Variation bestimmter DNA-Sequenzen und wird vor allem in der Forensik, bei Vaterschaftstests und in der Evolutionsbiologie eingesetzt.

## Grundprinzip

Der genetische Fingerabdruck basiert auf der Tatsache, dass das menschliche Genom hochvariable Regionen enthält, die sich zwischen Individuen unterscheiden. Nur eineiige Zwillinge haben identische DNA-Muster. Die moderne Forensik nutzt hauptsächlich Short Tandem Repeats (STRs) zur Identifikation.

## Short Tandem Repeats (STRs)

STRs sind kurze DNA-Sequenzen (typischerweise 2-6 Basenpaare), die sich mehrfach hintereinander wiederholen.

> **MerksatzBox type="altfragen":** STR-Analyse ist der moderne Standard für genetische Fingerabdrücke (13-20 Loci, Multiplex-PCR). Die ältere RFLP-Methode wird oft als Vergleich abgefragt – kenne die Unterschiede.

### Eigenschaften von STRs

- **Tandem-Wiederholungen:** Die Sequenz wiederholt sich direkt hintereinander
- **Hochvariabel:** Die Anzahl der Wiederholungen variiert stark zwischen Individuen
- **Nicht-kodierend:** Meist in nicht-kodierenden Regionen lokalisiert
- **Stabil vererbt:** Mendel'sche Vererbung von beiden Elternteilen

**Beispiel:**
- Sequenz: GATA
- Person A: (GATA)₈ = 8 Wiederholungen
- Person B: (GATA)₁₂ = 12 Wiederholungen

### STR-Analyse in der Praxis

Für forensische Anwendungen werden typischerweise 13-20 verschiedene STR-Loci gleichzeitig analysiert (Multiplex-PCR). Die Kombination aller Allele ergibt ein statistisch nahezu einzigartiges Profil.

## Methodik des genetischen Fingerabdrucks

### 1. DNA-Isolation

DNA wird aus biologischen Spuren isoliert:
- Blut, Speichel, Haare (mit Wurzel)
- Hautschuppen, Schweiß
- Sperma bei Sexualdelikten
- Knochen, Zähne (auch nach langer Zeit)

Bereits kleinste Mengen (wenige Nanogramm) reichen für die Analyse aus.

### 2. PCR-Amplifikation

Die ausgewählten STR-Loci werden mittels Multiplex-PCR vervielfältigt:
- Mehrere Primerpaare gleichzeitig im Reaktionsansatz
- Fluoreszenzmarkierte Primer für spätere Detektion
- Typischerweise 28-30 PCR-Zyklen

### 3. Fragmentlängenanalyse

Die amplifizierten STR-Fragmente werden nach Größe getrennt:
- **Kapillarelektrophorese:** Auftrennung nach Fragmentlänge
- **Fluoreszenz-Detektion:** Laser detektiert markierte Fragmente
- **Automatisierte Auswertung:** Software bestimmt Allellängen

### 4. Profilerstellung

Für jeden STR-Locus werden die Allele bestimmt:
- Jedes Individuum hat zwei Allele pro Locus (eines vom Vater, eines von der Mutter)
- Homozygot: beide Allele gleich lang → ein Peak
- Heterozygot: Allele unterschiedlich lang → zwei Peaks

## RFLP-Methode (historisch)

Die Restriktionsfragmentlängen-Polymorphismus-Analyse war die erste Methode für genetische Fingerabdrücke, wurde aber weitgehend durch STR-Analyse ersetzt.

**Prinzip:**
1. DNA-Verdau mit Restriktionsenzymen
2. Elektrophorese zur Fragmenttrennung
3. Southern Blot und Hybridisierung mit radioaktiven Sonden
4. Autoradiographie zur Mustererkennung

**Nachteile gegenüber STR:**
- Benötigt große DNA-Mengen (>100 ng)
- Zeitaufwendig (mehrere Wochen)
- Degradierte DNA problematisch
- Weniger diskriminierend

## Anwendungen

### Forensik

- **Täteridentifikation:** Vergleich von Tatort-Spuren mit Verdächtigen-DNA
- **Opferidentifikation:** Bei Massenkatastrophen, Kriegsverbrechen
- **Ausschluss Unschuldiger:** Entlastung fälschlich Beschuldigter
- **Cold Cases:** Wiederaufnahme alter Fälle mit neuen Methoden

> **MerksatzBox type="klinisch":** Genetischer Fingerabdruck ist nicht nur Forensik – in der Transplantationsmedizin nutzen wir STR-Analyse für Chimärismus-Monitoring nach allogener Stammzelltransplantation: Wir prüfen, ob Spender- oder Empfänger-Hämatopoese dominiert. Bei >95% Spender-Chimärismus gilt die Transplantation als erfolgreich.

### Vaterschaftstests

Vaterschaftstests basieren auf dem Prinzip der Mendel'schen Vererbung:
- Kind erhält je ein Allel von Mutter und Vater
- Analyse von 15-20 STR-Loci
- Statistische Sicherheit: >99,99%
- Ausschluss ist definitiv möglich, Nachweis nur statistisch

### Weitere Anwendungen

- **Evolutionsbiologie:** Verwandtschaftsanalysen zwischen Populationen
- **Archäologie:** DNA-Analyse historischer Funde
- **Transplantationsmedizin:** Chimärismus-Analyse nach Stammzelltransplantation
- **Tier- und Pflanzenzucht:** Abstammungsnachweise

## DNA-Datenbanken

Viele Länder unterhalten forensische DNA-Datenbanken:
- **Deutschland:** DNA-Analysedatei (DAD) beim BKA
- **USA:** CODIS (Combined DNA Index System)
- **UK:** National DNA Database (NDNAD)

**Gesetzliche Regelungen:**
- Nur nach richterlicher Anordnung
- Speicherung von Profilen, nicht vollständiger DNA-Sequenzen
- Datenschutz und Zweckbindung
- Löschfristen nach Verurteilung/Freispruch

## Ethische und rechtliche Aspekte

- **Datenschutz:** Schutz genetischer Informationen
- **Genetische Privatsphäre:** DNA enthält auch Informationen über Verwandte
- **Diskriminierung:** Missbrauch genetischer Daten verhindern
- **Informed Consent:** Aufklärung und Einwilligung bei freiwilligen Tests`,
      lernziele: [],
      sections: [],
      merksätze: [
        'Der genetische Fingerabdruck nutzt Short Tandem Repeats (STRs) – kurze, sich wiederholende DNA-Sequenzen, deren Anzahl zwischen Individuen hochvariabel ist.',
        'STR-Analyse: 13-20 verschiedene Loci werden per Multiplex-PCR amplifiziert und durch Kapillarelektrophorese nach Fragmentlänge getrennt.',
        'Jeder Mensch hat zwei Allele pro STR-Locus (eins vom Vater, eins von der Mutter) – heterozygot = zwei Peaks, homozygot = ein Peak.',
        'Vaterschaftstests nutzen Mendel\'sche Vererbung: Das Kind muss je ein Allel von Mutter und Vater geerbt haben (Sicherheit >99,99%).',
        'RFLP-Methode ist historisch: benötigte viel DNA, war zeitaufwendig, wurde durch schnellere und sensitivere STR-Analyse ersetzt.'
      ],
      selfTest: [
        {
          question: 'Was sind Short Tandem Repeats (STRs)?',
          options: [
            'Lange, sich wiederholende Proteinsequenzen',
            'Kurze DNA-Sequenzen (2-6 bp), die sich mehrfach hintereinander wiederholen',
            'Einzelnukleotid-Polymorphismen',
            'Methylierungsmuster der DNA',
            'Histonmodifikationen'
          ],
          correctIndex: 1,
          explanation: 'STRs (Short Tandem Repeats) sind kurze DNA-Sequenzen, typischerweise 2-6 Basenpaare lang, die sich mehrfach direkt hintereinander wiederholen. Die Anzahl dieser Wiederholungen variiert zwischen Individuen stark, was STRs ideal für die Identifikation macht. Beispiel: Die Sequenz GATA könnte bei einer Person 8-mal, bei einer anderen 12-mal wiederholt sein.',
          hints: [
            '„Short" bedeutet kurz, „Tandem" bedeutet hintereinander, „Repeat" bedeutet Wiederholung.',
            'Die Anzahl der Wiederholungen ist das variable Element.'
          ],
          tags: ['genetischer-fingerabdruck', 'str', 'tandem-repeats'],
          difficulty: 1
        },
        {
          question: 'Wie viele STR-Loci werden typischerweise in der modernen forensischen DNA-Analyse untersucht?',
          options: [
            '2-3 Loci',
            '5-7 Loci',
            '13-20 Loci',
            '50-100 Loci',
            '1000+ Loci'
          ],
          correctIndex: 2,
          explanation: 'In der modernen Forensik werden typischerweise 13-20 verschiedene STR-Loci gleichzeitig analysiert (Multiplex-PCR). Diese Kombination liefert ein statistisch nahezu einzigartiges Profil für jedes Individuum. Mehr Loci erhöhen die Diskriminierungskraft und reduzieren die Wahrscheinlichkeit zufälliger Übereinstimmungen auf astronomisch kleine Werte.',
          hints: [
            'Mehr Loci = höhere Sicherheit der Identifikation.',
            'Die Analyse erfolgt gleichzeitig in einer Reaktion (Multiplex).'
          ],
          tags: ['genetischer-fingerabdruck', 'str', 'forensik'],
          difficulty: 2
        },
        {
          question: 'Warum hat ein heterozygoter STR-Locus zwei Peaks im Elektropherogramm?',
          options: [
            'Weil die DNA degradiert ist',
            'Weil zwei verschiedene Allele (unterschiedliche Längen) vorliegen',
            'Weil ein Fehler bei der PCR aufgetreten ist',
            'Weil die DNA von zwei Personen stammt',
            'Weil die Kapillarelektrophorese fehlerhaft war'
          ],
          correctIndex: 1,
          explanation: 'Jeder Mensch erbt ein Allel vom Vater und ein Allel von der Mutter. Bei einem heterozygoten Locus sind diese beiden Allele unterschiedlich lang (unterschiedliche Anzahl von Tandem-Repeats). In der Kapillarelektrophorese werden beide Fragmente getrennt detektiert, was zu zwei Peaks führt. Bei homozygotem Locus (beide Allele gleich lang) erscheint nur ein Peak.',
          hints: [
            'Heterozygot bedeutet „verschiedene Allele".',
            'Jeder Mensch hat zwei Kopien jedes Chromosoms (außer Geschlechtschromosomen bei Männern).'
          ],
          tags: ['genetischer-fingerabdruck', 'str', 'heterozygot'],
          difficulty: 2
        },
        {
          question: 'Welcher Vorteil hat die STR-Analyse gegenüber der älteren RFLP-Methode?',
          options: [
            'STR benötigt größere DNA-Mengen',
            'STR ist zeitaufwendiger',
            'STR funktioniert auch mit degradierter DNA und kleinen Probenmengen',
            'STR ist weniger diskriminierend',
            'STR benötigt keine PCR'
          ],
          correctIndex: 2,
          explanation: 'Die STR-Analyse hat mehrere entscheidende Vorteile: Sie funktioniert mit sehr kleinen DNA-Mengen (wenige Nanogramm) dank PCR-Amplifikation, ist deutlich schneller (Stunden statt Wochen), kommt besser mit degradierter DNA zurecht (kurze Fragmente) und ist hochdiskriminierend. Die RFLP-Methode benötigte dagegen >100 ng intakte DNA und war sehr zeitaufwendig.',
          hints: [
            'PCR ermöglicht die Amplifikation aus kleinsten Mengen.',
            'Kurze STR-Fragmente bleiben auch in degradierter DNA oft intakt.'
          ],
          tags: ['genetischer-fingerabdruck', 'str', 'rflp'],
          difficulty: 2
        },
        {
          question: 'Wie funktioniert ein Vaterschaftstest auf molekularer Ebene?',
          options: [
            'Vergleich der Blutgruppen',
            'Überprüfung ob das Kind je ein Allel von Mutter und vermeintlichem Vater geerbt hat',
            'Sequenzierung des gesamten Genoms',
            'Messung der DNA-Menge',
            'Analyse der Chromosomenanzahl'
          ],
          correctIndex: 1,
          explanation: 'Bei einem Vaterschaftstest werden 15-20 STR-Loci analysiert. Für jeden Locus muss das Kind ein Allel von der Mutter und ein Allel vom biologischen Vater geerbt haben. Wenn bei mehreren Loci das Kind Allele trägt, die weder von der Mutter noch vom vermeintlichen Vater stammen können, ist die Vaterschaft ausgeschlossen. Bei Übereinstimmung liegt die Wahrscheinlichkeit der Vaterschaft bei >99,99%.',
          hints: [
            'Mendel\'sche Vererbung: je ein Allel von jedem Elternteil.',
            'Das Kind kann keine Allele tragen, die bei keinem Elternteil vorkommen.'
          ],
          tags: ['genetischer-fingerabdruck', 'str', 'vaterschaftstest'],
          difficulty: 2
        },
        {
          question: 'Welche biologische Spur eignet sich NICHT für einen genetischen Fingerabdruck?',
          options: [
            'Blut',
            'Haare mit Wurzel',
            'Hautschuppen',
            'Urin (zellfrei)',
            'Speichel'
          ],
          correctIndex: 3,
          explanation: 'Für einen genetischen Fingerabdruck werden Zellen mit Zellkernen benötigt, da die analysierte DNA aus dem Zellkern stammt. Zellfreier Urin enthält keine Zellen und ist daher ungeeignet. Blut (Leukozyten), Haare mit Wurzel (Haarfollikelzellen), Hautschuppen (Epithelzellen) und Speichel (Epithelzellen der Mundschleimhaut) enthalten alle kernhaltige Zellen und sind für DNA-Analysen geeignet.',
          hints: [
            'DNA-Analyse erfordert Zellen mit Zellkern.',
            'Überlege: Welche Körperflüssigkeit kann zellfrei sein?'
          ],
          tags: ['genetischer-fingerabdruck', 'forensik', 'dna-isolation'],
          difficulty: 3
        }
      ]
    },
    {
      id: 'bio-7-05',
      title: 'Gentechnisch veränderte Organismen (GVO)',
      content: `# Gentechnisch veränderte Organismen (GVO)

Gentechnisch veränderte Organismen (GVO) sind Lebewesen, deren genetisches Material gezielt durch molekularbiologische Techniken verändert wurde. Im Gegensatz zur klassischen Züchtung, die auf natürlicher Rekombination beruht, ermöglicht die Gentechnik die präzise Einführung, Entfernung oder Modifikation spezifischer Gene – auch über Artgrenzen hinweg.

## Grundprinzipien der Gentechnik

### 1. Isolierung des Zielgens

Das gewünschte Gen muss zunächst identifiziert und isoliert werden:
- **Genomische DNA:** Direktisolierung aus Organismus
- **cDNA:** Umschreibung von mRNA mittels reverser Transkriptase (ohne Introns)
- **Synthese:** Chemische oder enzymatische Synthese basierend auf bekannter Sequenz

### 2. Restriktionsenzyme und DNA-Schnitt

Restriktionsenzyme sind bakterielle Enzyme, die DNA an spezifischen Erkennungssequenzen schneiden:

**Eigenschaften:**
- Erkennen palindromische Sequenzen (meist 4-8 bp)
- Schneiden doppelsträngige DNA
- Erzeugen glatte Enden (blunt ends) oder überhängende Enden (sticky ends)

**Beispiel EcoRI:**

5'-GAATTC-3'    →    5'-G     AATTC-3'
3'-CTTAAG-5'         3'-CTTAA     G-5'
                     (sticky ends)

### 3. Vektoren als DNA-Träger

Vektoren sind DNA-Moleküle, die fremde DNA aufnehmen und in Zielzellen transportieren können:

**Plasmide (am häufigsten):**
- Kleine, zirkuläre DNA-Moleküle aus Bakterien
- Replizieren unabhängig vom bakteriellen Chromosom
- Enthalten Origin of Replication (ori), Selektionsmarker (z.B. Antibiotikaresistenz), Multiple Cloning Site (MCS)

**Weitere Vektoren:**
- Bakteriophagen (Viren, die Bakterien infizieren)
- BACs/YACs (für große DNA-Fragmente)
- Virale Vektoren (für Gentherapie)

### 4. Ligation – Verknüpfung von DNA-Fragmenten

Das isolierte Gen und der geschnittene Vektor werden mittels DNA-Ligase verknüpft:
- Ligase bildet Phosphodiesterbindungen zwischen DNA-Fragmenten
- Kompatible Enden (gleiche Restriktionsschnittstellen) erleichtern die Ligation
- Resultat: Rekombinanter Vektor mit eingefügtem Fremdgen

### 5. Transformation – Einschleusung in Zielzellen

Der rekombinante Vektor wird in Wirtszellen eingebracht:

**Bakterien:**
- Chemische Transformation (Calciumchlorid-Methode)
- Elektroporation (elektrische Impulse machen Membran durchlässig)

**Pflanzenzellen:**
- Agrobacterium tumefaciens (natürlicher DNA-Transfer durch Ti-Plasmid)
- Genkanone (Partikelbeschuss)
- Protoplastenfusion

**Tierzellen:**
- Mikroinjektion in Zellkern oder Vorkern (Pronukleus)
- Virale Vektoren
- Liposomen (Lipid-Vesikel)

### 6. Selektion transformierter Zellen

Nur ein Bruchteil der Zellen nimmt erfolgreich DNA auf. Selektion erfolgt durch:
- **Antibiotikaresistenz:** Nur transformierte Bakterien überleben auf Antibiotika-Medium
- **Reportergene:** GFP (grünes Fluoreszenzprotein), β-Galaktosidase (Blau-Weiß-Selektion)
- **PCR-Screening:** Nachweis des eingefügten Gens

## Anwendungen gentechnisch veränderter Organismen

### Medizin und Pharmazie

**Produktion therapeutischer Proteine:**
- **Insulin:** Bakterien (E. coli) oder Hefen produzieren humanes Insulin
- **Wachstumshormon:** Behandlung von Kleinwuchs
- **Gerinnungsfaktoren:** Faktor VIII für Hämophilie-Patienten
- **Antikörper:** Monoklonale Antikörper zur Krebstherapie

**Vorteile:**
- Große Mengen kostengünstig produzierbar
- Humane Proteine (keine tierischen Verunreinigungen)
- Geringeres Infektionsrisiko

### Landwirtschaft

**Transgene Pflanzen:**
- **Herbizidresistenz:** Glyphosat-resistente Sojabohnen, Mais
- **Insektenresistenz:** Bt-Mais (Bacillus thuringiensis-Toxin)
- **Virusresistenz:** Papaya gegen Ringspot-Virus
- **Verbesserte Eigenschaften:** Golden Rice (β-Carotin-Anreicherung gegen Vitamin-A-Mangel)

**Transgene Tiere:**
- Schnelleres Wachstum (AquAdvantage Lachs)
- Produktion pharmazeutischer Proteine in Milch
- Krankheitsresistenz

### Forschung

- **Modellorganismen:** Knockout-Mäuse zur Untersuchung von Genfunktionen
- **Reportergene:** Visualisierung von Genexpression
- **Grundlagenforschung:** Verstehen biologischer Prozesse

## Biosicherheit und Containment

**S1-S4 Sicherheitsstufen:**
- **S1:** Keine oder geringe Gefahr (E. coli K12)
- **S2:** Mäßiges Risiko
- **S3:** Ernstes Risiko (HIV, Tuberkulose)
- **S4:** Höchstes Risiko (Ebola, Pocken)

## Ethische und gesellschaftliche Aspekte

**Chancen:**
- Bekämpfung von Hunger und Mangelernährung
- Neue Medikamente und Therapien
- Umweltschutz durch reduzierte Pestizidnutzung

**Risiken und Bedenken:**
- Langzeiteffekte auf Ökosysteme unklar
- Horizontaler Gentransfer auf Wildpflanzen
- Abhängigkeit von Saatgutkonzernen
- Ethische Fragen bei Eingriffen in Keimbahn

**Regulierung:**
- Zulassungsverfahren und Risikobewertung
- Kennzeichnungspflicht für GVO-Produkte (EU)
- Koexistenz mit konventioneller und ökologischer Landwirtschaft`,
      lernziele: [],
      sections: [],
      merksätze: [
        'Restriktionsenzyme schneiden DNA an spezifischen palindromischen Sequenzen und erzeugen kompatible Enden (sticky ends) für die Ligation.',
        'Plasmide sind ideale Vektoren: kleine, zirkuläre DNA-Moleküle mit ori (Replikation), Selektionsmarker (Antibiotikaresistenz) und MCS (Klonierungsstelle).',
        'Transformation: Einschleusung rekombinanter DNA in Zielzellen durch chemische Methoden, Elektroporation (Bakterien) oder Agrobacterium (Pflanzen).',
        'GVO-Anwendungen: Insulinproduktion in Bakterien, Bt-Mais mit Insektenresistenz, Golden Rice mit β-Carotin gegen Vitamin-A-Mangel.',
        'Selektion transformierter Zellen erfolgt über Antibiotikaresistenz oder Reportergene (GFP, β-Galaktosidase für Blau-Weiß-Selektion).'
      ],
      selfTest: [
        {
          question: 'Was ist die Funktion von Restriktionsenzymen in der Gentechnik?',
          options: [
            'Sie amplifizieren DNA',
            'Sie schneiden DNA an spezifischen Erkennungssequenzen',
            'Sie verbinden DNA-Fragmente',
            'Sie synthetisieren neue DNA',
            'Sie markieren DNA mit Fluoreszenz'
          ],
          correctIndex: 1,
          explanation: 'Restriktionsenzyme (Restriktionsendonukleasen) sind bakterielle Enzyme, die DNA an spezifischen palindromischen Erkennungssequenzen schneiden. Sie erzeugen definierte Schnittstellen, oft mit überhängenden Enden (sticky ends), die komplementär zueinander sind. Dies ermöglicht die gezielte Verknüpfung von DNA-Fragmenten aus verschiedenen Quellen – die Grundlage der rekombinanten DNA-Technologie.',
          hints: [
            'Der Name „Restriktions-Endonuklease" deutet auf eine schneidende Funktion hin.',
            'Diese Enzyme erkennen spezifische Sequenzen wie z.B. GAATTC.'
          ],
          tags: ['gvo', 'gentechnik', 'restriktionsenzyme'],
          difficulty: 1
        },
        {
          question: 'Welche Eigenschaften muss ein Plasmid als Klonierungsvektor typischerweise besitzen?',
          options: [
            'Nur eine große Größe',
            'Origin of Replication, Selektionsmarker und Multiple Cloning Site',
            'Nur Antibiotikaresistenz',
            'Keine spezifischen Eigenschaften nötig',
            'Nur eine zirkuläre Struktur'
          ],
          correctIndex: 1,
          explanation: 'Ein funktioneller Klonierungsvektor benötigt drei Kernelemente: (1) Origin of Replication (ori) für autonome Replikation in der Wirtszelle, (2) Selektionsmarker (meist Antibiotikaresistenzgen) zur Identifikation transformierter Zellen, (3) Multiple Cloning Site (MCS) mit mehreren Restriktionsschnittstellen für die Insertion fremder DNA. Diese Kombination ermöglicht effiziente Klonierung und Selektion.',
          hints: [
            'Ein Vektor muss sich vermehren, selektierbar sein und Fremd-DNA aufnehmen können.',
            'Überlege: Woher weiß man, welche Bakterien das Plasmid aufgenommen haben?'
          ],
          tags: ['gvo', 'gentechnik', 'plasmid', 'vektor'],
          difficulty: 2
        },
        {
          question: 'Was versteht man unter „Transformation" in der Gentechnik?',
          options: [
            'Die Umwandlung von RNA in DNA',
            'Die Einschleusung fremder DNA in Zielzellen',
            'Die Mutation von Genen',
            'Die Vermehrung von Bakterien',
            'Die Synthese von Proteinen'
          ],
          correctIndex: 1,
          explanation: 'Transformation bezeichnet die Aufnahme externer DNA (z.B. eines rekombinanten Plasmids) in Zellen. Bei Bakterien erfolgt dies häufig durch chemische Methoden (CaCl₂-Behandlung) oder Elektroporation. Die aufgenommene DNA kann dann repliziert und exprimiert werden. Der Begriff ist spezifisch für die genetische Veränderung durch DNA-Aufnahme, nicht zu verwechseln mit der onkologischen „Transformation" (Entartung von Zellen).',
          hints: [
            'Trans- = hinüber; -formation = Gestaltung/Formung.',
            'Der Prozess bringt neue genetische Information in die Zelle.'
          ],
          tags: ['gvo', 'gentechnik', 'transformation'],
          difficulty: 2
        },
        {
          question: 'Wie werden transformierte Bakterien typischerweise selektiert?',
          options: [
            'Nach ihrer Größe',
            'Durch Wachstum auf Antibiotika-haltigem Medium',
            'Nach ihrer Farbe im Tageslicht',
            'Durch mikroskopische Untersuchung',
            'Durch Zentrifugation'
          ],
          correctIndex: 1,
          explanation: 'Plasmide enthalten typischerweise ein Antibiotikaresistenzgen als Selektionsmarker. Nach der Transformation werden Bakterien auf Medium mit dem entsprechenden Antibiotikum ausplattiert. Nur Bakterien, die erfolgreich das Plasmid aufgenommen haben, besitzen die Resistenz und können wachsen. Nicht-transformierte Bakterien sterben ab. Dies ist eine effiziente Methode zur Anreicherung erfolgreicher Transformanten.',
          hints: [
            'Plasmide enthalten oft Resistenzgene.',
            'Nur transformierte Zellen überleben eine bestimmte Behandlung.'
          ],
          tags: ['gvo', 'gentechnik', 'selektion', 'antibiotikaresistenz'],
          difficulty: 2
        },
        {
          question: 'Welche Methode nutzt Agrobacterium tumefaciens zur Pflanzentransformation?',
          options: [
            'Elektroporation',
            'Chemische Transformation',
            'Natürlicher DNA-Transfer über Ti-Plasmid',
            'Mikroinjektion',
            'PCR-Amplifikation'
          ],
          correctIndex: 2,
          explanation: 'Agrobacterium tumefaciens ist ein Bodenbakterium, das natürlicherweise Pflanzenzellen mit DNA infizieren kann. Es nutzt sein Ti-Plasmid (tumor-inducing), um einen Teil seiner DNA (T-DNA) in das Pflanzengenom zu integrieren. In der Gentechnik wird dieser natürliche Mechanismus genutzt: Das gewünschte Gen wird in die T-DNA-Region kloniert, und Agrobacterium überträgt es in Pflanzenzellen – eine elegante und effiziente Transformationsmethode.',
          hints: [
            'Agrobacterium ist ein Bakterium, das natürlicherweise Pflanzen „infiziert".',
            'Der Transfer funktioniert über ein spezielles Plasmid.'
          ],
          tags: ['gvo', 'gentechnik', 'agrobacterium', 'pflanzentransformation'],
          difficulty: 2
        },
        {
          question: 'Was ist Golden Rice und welches Problem soll er lösen?',
          options: [
            'Eine Reissorte mit goldener Farbe für dekorative Zwecke',
            'Reis mit β-Carotin-Anreicherung gegen Vitamin-A-Mangel',
            'Reis mit erhöhtem Goldgehalt im Boden',
            'Reis mit besonders hohem Ertrag',
            'Reis mit Resistenz gegen alle Schädlinge'
          ],
          correctIndex: 1,
          explanation: 'Golden Rice ist eine gentechnisch veränderte Reissorte, die β-Carotin (Provitamin A) im Endosperm produziert. Das β-Carotin verleiht dem Reis eine goldgelbe Farbe. Ziel ist die Bekämpfung von Vitamin-A-Mangel, der besonders in Entwicklungsländern verbreitet ist und zu Blindheit und erhöhter Kindersterblichkeit führt. Golden Rice ist ein kontrovers diskutiertes Beispiel für den potenziellen Nutzen von GVO in der Entwicklungshilfe.',
          hints: [
            'Die goldene Farbe kommt von einem Vitamin-Vorläufer.',
            'Vitamin-A-Mangel ist ein großes Problem in Ländern, wo Reis Hauptnahrungsmittel ist.'
          ],
          tags: ['gvo', 'gentechnik', 'golden-rice', 'vitamin-a'],
          difficulty: 3
        }
      ]
    },
    {
      id: 'bio-7-06',
      title: 'Klonierung',
      content: `# Klonierung

Klonierung bezeichnet die Erzeugung genetisch identischer Kopien von Zellen, Geweben oder ganzen Organismen. Während molekulare Klonierung (DNA-Klonierung) seit Jahrzehnten Routine in der Forschung ist, sorgt das reproduktive Klonieren von Säugetieren seit dem Schaf „Dolly" 1996 für intensive ethische Debatten.

## Arten der Klonierung

### 1. Molekulare Klonierung

Die Vervielfältigung spezifischer DNA-Sequenzen in Vektoren (siehe Kapitel GVO). Dies ist eine Standardmethode in der Molekularbiologie und ethisch unproblematisch.

### 2. Reproduktive Klonierung

Erzeugung eines genetisch identischen Organismus. Bei Säugetieren erfolgt dies meist durch somatischen Kerntransfer (SCNT).

### 3. Therapeutische Klonierung

Erzeugung embryonaler Stammzellen zur medizinischen Nutzung, nicht zur Erschaffung eines Individuums. Ethisch und rechtlich stark reguliert.

## Somatischer Kerntransfer (SCNT)

SCNT ist die Standardmethode für das reproduktive Klonieren von Säugetieren.

### Ablauf des SCNT

1. **Entnahme einer Eizelle:**
   - Unbefruchtete Eizelle wird entnommen
   - Aus einem erwachsenen Spendertier oder aus IVF-Prozeduren

2. **Enukleation:**
   - Der Zellkern der Eizelle wird entfernt
   - Die Eizelle ist nun kernlos, enthält aber Zytoplasma mit Mitochondrien

3. **Entnahme einer somatischen Zelle:**
   - Körperzelle (z.B. Hautzelle, Fibroblasten) vom zu klonierenden Individuum
   - Diese Zelle ist diploid und differenziert

4. **Kerntransfer:**
   - Der Zellkern der somatischen Zelle wird in die entkernte Eizelle übertragen
   - Erfolgt durch Mikroinjektion oder Zellfusion (Elektrofusion)

5. **Reprogrammierung:**
   - Das Zytoplasma der Eizelle „reprogrammiert" den somatischen Kern
   - Differenzierungsmarker werden gelöscht, der Kern wird pluripotent
   - Dieser Schritt ist kritisch und oft ineffizient

6. **Aktivierung:**
   - Die rekonstruierte Eizelle wird künstlich aktiviert (elektrische Pulse, Chemikalien)
   - Dies imitiert die Befruchtung und startet die Zellteilung

7. **Embryonalentwicklung:**
   - Der Embryo entwickelt sich in vitro bis zum Blastozysten-Stadium
   - Transfer in Leihmutter für weitere Entwicklung

8. **Geburt:**
   - Nach normaler Tragezeit wird ein Klon geboren
   - Genetisch identisch zum Zellkern-Spender (nicht zur Eizellspenderin – mitochondriale DNA stammt von Eizelle!)

## Dolly das Schaf – Meilenstein der Klonierung

1996 gelang Ian Wilmut und seinem Team am Roslin Institute in Schottland die Geburt des Schafs Dolly – des ersten geklonten Säugetiers aus einer adulten somatischen Zelle.

**Bedeutung:**
- Beweis, dass differenzierte Zellen vollständig reprogrammiert werden können
- Paradigmenwechsel: Entwicklung ist nicht irreversibel
- Startschuss für intensive Forschung und ethische Debatten

**Dolly's Leben:**
- Geboren: 5. Juli 1996
- Gestorben: 14. Februar 2003 (6 Jahre alt; normale Schaf-Lebenserwartung: 11-12 Jahre)
- Gesundheitsprobleme: Arthritis, Lungenerkrankung
- Diskussion: Vorzeitige Alterung? Verkürzte Telomere?

**Effizienz:**
- 277 Eizellen verwendet
- 29 Embryonen transferiert
- 1 lebendgeborenes Lamm (Dolly)
- Erfolgsrate: <1%

## Reproduktive vs. therapeutische Klonierung

### Reproduktive Klonierung

**Ziel:** Erzeugung eines lebenden Organismus

**Anwendungen:**
- Reproduktion bedrohter Tierarten
- Landwirtschaft (Tiere mit gewünschten Eigenschaften)
- Haustier-Klonierung (kommerziell verfügbar)

**Probleme:**
- Sehr geringe Erfolgsrate (oft <5%)
- Hohe Fehlbildungsrate
- Gesundheitsprobleme bei Klonen
- Ethische Bedenken (besonders bei menschlichem Klonen)

### Therapeutische Klonierung

**Ziel:** Gewinnung embryonaler Stammzellen für Therapie

**Ablauf:**
1. SCNT mit Zellen des Patienten
2. Entwicklung bis Blastozysten-Stadium
3. Isolation embryonaler Stammzellen
4. Keine Implantation in Uterus
5. Differenzierung zu benötigtem Zelltyp
6. Transplantation ohne Abstoßungsrisiko (genetisch identisch)

**Potenzielle Anwendungen:**
- Parkinson: Dopamin-produzierende Neuronen
- Diabetes Typ 1: Insulin-produzierende β-Zellen
- Herzinfarkt: Kardiomyozyten
- Rückenmarksverletzungen: Nervenzellen

**Ethische Probleme:**
- Verbrauch menschlicher Embryonen
- Status des Embryos (ab wann schützenswert?)
- Slippery-slope-Argument (Gefahr des Missbrauchs)

## Weitere geklonte Tiere

Nach Dolly wurden zahlreiche weitere Tierarten geklont:
- Mäuse, Ratten, Kaninchen
- Rinder, Schweine, Ziegen
- Katzen, Hunde
- Pferde (besonders Rennpferde und Polopferde)
- Kamele, Büffel
- Affen (Primaten, 2018)

## Alternative: Induzierte pluripotente Stammzellen (iPSCs)

2006/2007 entwickelten Shinya Yamanaka und Kollegen eine Alternative zur therapeutischen Klonierung:

**Prinzip:**
- Somatische Zellen werden durch Einführung von 4 Transkriptionsfaktoren (Oct4, Sox2, Klf4, c-Myc) in pluripotente Stammzellen umprogrammiert
- Keine Eizellen oder Embryonen nötig
- Ethisch weniger problematisch

**Vorteile:**
- Technisch einfacher als SCNT
- Keine Eizellen benötigt
- Patientenspezifische Stammzellen möglich

**Nachteile:**
- Tumorrisiko durch c-Myc (Onkogen)
- Unvollständige Reprogrammierung möglich
- Langzeitstabilität unklar

## Rechtliche Situation

**Deutschland:**
- Reproduktive Klonierung von Menschen verboten (Embryonenschutzgesetz)
- Therapeutische Klonierung verboten
- Import embryonaler Stammzellen nur unter strengen Auflagen (Stichtag-Regelung)

**International:**
- UN-Deklaration gegen reproduktive Klonierung (2005)
- Therapeutische Klonierung: unterschiedliche Regelungen (UK erlaubt, viele Länder verbieten)

## Ethische Aspekte

**Argumente für therapeutische Klonierung:**
- Heilung bisher unheilbarer Krankheiten
- Patientenspezifische Therapie ohne Abstoßung
- Forschungsfreiheit
- Leidensminderung

**Argumente gegen:**
- Instrumentalisierung menschlichen Lebens
- Embryo hat Schutzwürdigkeit
- Dammbruch-Gefahr (Weg zu reproduktiver Klonierung)
- Ausbeutung von Eizellspenderinnen

**Reproduktive Klonierung von Menschen:**
- Weitgehender internationaler Konsens: ethisch inakzeptabel
- Gefahr genetischer Defekte
- Psychologische Probleme für Klone
- Identität und Individualität
- Kommerzialisierung von Leben`,
      lernziele: [],
      sections: [],
      merksätze: [
        'SCNT (Somatischer Kerntransfer): Zellkern aus somatischer Zelle wird in entkernte Eizelle übertragen – Eizell-Zytoplasma reprogrammiert den Kern.',
        'Dolly (1996) war der erste Klon aus einer adulten somatischen Zelle – Beweis für vollständige Reprogrammierbarkeit differenzierter Zellen.',
        'Reproduktive Klonierung: Ziel ist ein lebender Organismus (geringe Erfolgsrate, ethisch problematisch); therapeutische Klonierung: Ziel sind embryonale Stammzellen für Therapie.',
        'Wichtig: Klon ist nicht 100% identisch – mitochondriale DNA stammt von der Eizellspenderin, nicht vom Zellkern-Spender.',
        'iPSCs (induzierte pluripotente Stammzellen) sind die ethisch weniger problematische Alternative: somatische Zellen werden durch 4 Faktoren zu Stammzellen umprogrammiert.'
      ],
      selfTest: [
        {
          question: 'Was ist der erste Schritt beim somatischen Kerntransfer (SCNT)?',
          options: [
            'Aktivierung der Eizelle',
            'Entnahme und Enukleation einer Eizelle',
            'Reprogrammierung des Zellkerns',
            'Transfer in die Leihmutter',
            'Isolation embryonaler Stammzellen'
          ],
          correctIndex: 1,
          explanation: 'Der erste Schritt beim SCNT ist die Entnahme einer unbefruchteten Eizelle und die anschließende Enukleation (Entfernung des Zellkerns). Die kernlose Eizelle behält ihr Zytoplasma mit allen reprogrammierenden Faktoren und Mitochondrien. Erst danach wird der Zellkern einer somatischen Zelle (vom zu klonierenden Individuum) in diese entkernte Eizelle transferiert.',
          hints: [
            'Man benötigt zunächst eine leere „Hülle" für den neuen Kern.',
            'Die Eizelle muss vorbereitet werden, bevor ein Kern eingefügt werden kann.'
          ],
          tags: ['klonierung', 'scnt', 'kerntransfer'],
          difficulty: 2
        },
        {
          question: 'Warum ist ein geklontes Tier NICHT 100% genetisch identisch mit dem Zellkern-Spender?',
          options: [
            'Weil Mutationen bei der Reprogrammierung entstehen',
            'Weil die mitochondriale DNA von der Eizellspenderin stammt',
            'Weil epigenetische Marker anders sind',
            'Weil die Leihmutter Gene überträgt',
            'Weil der Transfer immer Fehler verursacht'
          ],
          correctIndex: 1,
          explanation: 'Ein Klon erhält die nukleäre DNA (Chromosomen im Zellkern) vom Zellkern-Spender, aber die mitochondriale DNA stammt von der Eizellspenderin. Mitochondrien haben ihr eigenes kleines Genom (mtDNA, ~37 Gene). Daher ist ein Klon zwar für die überwältigende Mehrheit der Gene identisch, aber nicht für die mitochondrialen Gene. Dies ist besonders relevant für Erkrankungen, die mit mitochondrialer Dysfunktion zusammenhängen.',
          hints: [
            'Bei der Enukleation wird nur der Zellkern entfernt, nicht alle DNA.',
            'Überlege: Welche Organellen haben eigene DNA?'
          ],
          tags: ['klonierung', 'scnt', 'mitochondrien'],
          difficulty: 2
        },
        {
          question: 'Was war die besondere Bedeutung des Schafs Dolly?',
          options: [
            'Erstes geklontes Säugetier überhaupt',
            'Erstes aus einer adulten somatischen Zelle geklontes Säugetier',
            'Erstes Tier mit verlängerter Lebenserwartung',
            'Erstes gentechnisch verändertes Schaf',
            'Erstes Tier mit menschlichen Genen'
          ],
          correctIndex: 1,
          explanation: 'Dolly war das erste Säugetier, das aus einer adulten, differenzierten somatischen Zelle (Euterzelle) geklont wurde. Vorher waren bereits Tiere aus embryonalen Zellen geklont worden, aber Dolly bewies, dass selbst vollständig differenzierte Zellen durch das Eizell-Zytoplasma in einen pluripotenten Zustand zurückversetzt werden können. Dies war ein wissenschaftlicher Paradigmenwechsel: Entwicklung ist nicht irreversibel.',
          hints: [
            'Vorher glaubte man, differenzierte Zellen könnten nicht vollständig umprogrammiert werden.',
            'Die Spenderzelle war eine gewöhnliche Körperzelle, keine Embryonalzelle.'
          ],
          tags: ['klonierung', 'dolly', 'scnt'],
          difficulty: 2
        },
        {
          question: 'Was ist der entscheidende Unterschied zwischen reproduktiver und therapeutischer Klonierung?',
          options: [
            'Die verwendete Technik (SCNT vs. iPSC)',
            'Das Ziel: lebender Organismus vs. Gewinnung von Stammzellen',
            'Die Erfolgsrate',
            'Die Kosten',
            'Die Dauer des Prozesses'
          ],
          correctIndex: 1,
          explanation: 'Der entscheidende Unterschied liegt im Ziel: Reproduktive Klonierung zielt auf die Geburt eines lebenden, genetisch identischen Organismus ab (Embryo wird in Leihmutter implantiert). Therapeutische Klonierung zielt auf die Gewinnung embryonaler Stammzellen für medizinische Zwecke ab – der Embryo wird nicht implantiert, sondern im Blastozysten-Stadium werden Stammzellen isoliert. Beide nutzen SCNT, aber mit unterschiedlicher Zielsetzung.',
          hints: [
            'Reproduktiv = Fortpflanzung/Erzeugung; therapeutisch = Heilung/Therapie.',
            'Wird der Embryo übertragen oder werden Zellen entnommen?'
          ],
          tags: ['klonierung', 'reproduktiv', 'therapeutisch'],
          difficulty: 3
        },
        {
          question: 'Was sind induzierte pluripotente Stammzellen (iPSCs)?',
          options: [
            'Stammzellen aus geklonten Embryonen',
            'Somatische Zellen, die durch 4 Transkriptionsfaktoren zu Stammzellen umprogrammiert wurden',
            'Embryonale Stammzellen aus IVF-Embryonen',
            'Adulte Stammzellen aus Knochenmark',
            'Krebszellen mit Stammzell-Eigenschaften'
          ],
          correctIndex: 1,
          explanation: 'iPSCs sind somatische Zellen (z.B. Hautzellen), die durch Einführung von 4 Transkriptionsfaktoren (Oct4, Sox2, Klf4, c-Myc – oft „Yamanaka-Faktoren" genannt) in einen pluripotenten Zustand umprogrammiert wurden. Sie ähneln embryonalen Stammzellen funktionell, benötigen aber keine Eizellen oder Embryonen. Dies macht sie ethisch weniger problematisch als therapeutische Klonierung und wurde 2012 mit dem Nobelpreis ausgezeichnet.',
          hints: [
            'Der Begriff „induziert" deutet auf eine künstliche Herbeiführung hin.',
            'Diese Methode wurde als ethische Alternative zur therapeutischen Klonierung entwickelt.'
          ],
          tags: ['klonierung', 'ipsc', 'stammzellen'],
          difficulty: 3
        },
        {
          question: 'Welche Aussage zur Effizienz des reproduktiven Klonierens ist korrekt?',
          options: [
            'Die Erfolgsrate liegt bei über 90%',
            'Die Erfolgsrate liegt bei etwa 50%',
            'Die Erfolgsrate ist sehr gering (oft <5%), viele Versuche enden mit Fehlbildungen',
            'Jeder Versuch ist erfolgreich',
            'Die Effizienz ist identisch mit natürlicher Fortpflanzung'
          ],
          correctIndex: 2,
          explanation: 'Das reproduktive Klonieren ist sehr ineffizient. Bei Dolly wurden 277 Eizellen verwendet, 29 Embryonen transferiert, aber nur 1 lebendes Lamm geboren – eine Erfolgsrate von deutlich unter 1%. Auch heute liegt die Erfolgsrate meist unter 5%. Viele Embryonen entwickeln sich nicht, oder es kommt zu Fehlbildungen. Überlebende Klone zeigen oft Gesundheitsprobleme wie vorzeitige Alterung, Organfehlfunktionen oder Immundefekte.',
          hints: [
            'Das Klonen von Dolly benötigte hunderte Versuche.',
            'Die Reprogrammierung ist ein hochkomplexer und fehleranfälliger Prozess.'
          ],
          tags: ['klonierung', 'effizienz', 'erfolgsrate'],
          difficulty: 1
        }
      ]
    }
  ]
};
