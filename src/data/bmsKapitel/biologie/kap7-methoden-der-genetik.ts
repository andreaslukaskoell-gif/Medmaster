import type { Kapitel } from '../types';

export const bioKap7: Kapitel = {
  id: 'bio-kap7',
  title: 'Methoden der Genetik',
  subject: 'biologie',
  icon: '🧬',
  estimatedTime: '75 min',
  unterkapitel: [
    {
      id: 'bio-7-01',
      title: 'PCR — Prinzip, Ablauf und klinische Anwendung',
      content: `## Polymerase-Kettenreaktion (PCR) — Grundprinzip

Die **Polymerase-Kettenreaktion (PCR)** ist eine molekularbiologische Methode zur exponentiellen Vervielfältigung definierter DNA-Abschnitte in vitro. Entwickelt 1983 von Kary Mullis (Nobelpreis 1993), revolutionierte sie Diagnostik, Forensik und Grundlagenforschung.

## Die drei Schritte eines PCR-Zyklus

**1. Denaturierung (94–95 °C):** Durch starkes Erhitzen werden die Wasserstoffbrückenbindungen zwischen den komplementären DNA-Strängen aufgebrochen. Die Doppelhelix trennt sich in zwei Einzelstränge, die als Matrizen dienen.

**2. Annealing (50–65 °C):** Die Temperatur wird gesenkt, sodass kurze synthetische Oligonukleotide (**Primer**, ca. 18–25 Basen) spezifisch an komplementäre Sequenzen der Ziel-DNA binden können. Es werden stets zwei Primer benötigt — ein Vorwärts- und ein Rückwärtsprimer — die den zu amplifizierenden Bereich flankieren.

**3. Elongation (72 °C):** Die **Taq-Polymerase** (aus dem thermophilen Bakterium *Thermus aquaticus*) synthetisiert ab den Primern einen neuen DNA-Strang in 5'→3'-Richtung. Das Optimum liegt bei 72 °C, da das Enzym hitzebeständig ist.

Nach n Zyklen entstehen theoretisch **2ⁿ Kopien** der Ziel-DNA — ein exponentielles Wachstum. Nach 30 Zyklen sind bereits über eine Milliarde Kopien vorhanden.

## Varianten der PCR

**RT-PCR (Reverse Transkriptase-PCR):** RNA wird zunächst durch das Enzym Reverse Transkriptase in komplementäre cDNA (complementary DNA) umgeschrieben, die dann per Standard-PCR amplifiziert wird. Anwendung: Nachweis von RNA-Viren (z. B. HIV, SARS-CoV-2), Genexpressionsanalyse.

**qPCR (quantitative Real-time-PCR):** Durch Fluoreszenzfarbstoffe (z. B. SYBR Green, das doppelsträngige DNA interkaliert, oder TaqMan-Sonden) wird die DNA-Menge in Echtzeit gemessen. Dies ermöglicht eine Quantifizierung der Ausgangs-DNA. Wichtig beim COVID-19-PCR-Test.

**Nested PCR:** Zwei aufeinanderfolgende PCR-Runden mit verschachtelten Primern erhöhen Spezifität und Sensitivität bei sehr geringer Ausgangsmenge.

## Klinische Anwendungen

- **Infektionsdiagnostik:** COVID-19 (RT-qPCR), HIV-Viruslast, Tuberkulose, Sepsis-Erreger
- **Pränatale Diagnostik:** Nachweis genetischer Varianten aus Amnionzellen oder cfDNA (zellfreie DNA)
- **Forensik:** DNA-Profile aus Blut, Speichel, Haaren (nur mit Wurzel)
- **Onkologie:** Nachweis somatischer Mutationen (z. B. BRCA1/2, BCR-ABL bei CML)
- **Vaterschaftstest:** STR-Analyse nach PCR-Amplifikation`,
      lernziele: [
        "Die drei PCR-Schritte (Denaturierung, Annealing, Elongation) mit Temperaturen und molekularen Vorgängen erklären",
        "Den Unterschied zwischen Standard-PCR, RT-PCR und qPCR beschreiben und Anwendungsgebiete nennen",
        "Die exponentielle Amplifikation (2ⁿ) berechnen und klinische Anwendungen der PCR aufzählen",
      ],
      sections: [
        {
          heading: "Taq-Polymerase — Warum ein Enzym aus einer heißen Quelle?",
          text: "Normale DNA-Polymerasen aus mesophilen Organismen würden bei den hohen Denaturierungstemperaturen von 94–95 °C irreversibel denaturieren. Die Taq-Polymerase stammt aus dem thermophilen Bakterium Thermus aquaticus, das in heißen Quellen (z. B. Yellowstone) lebt. Sie ist bis ca. 95 °C stabil und kann nach der Denaturierungsphase sofort mit der Elongation bei 72 °C beginnen, ohne dass neues Enzym hinzugegeben werden muss. Dies ermöglicht die vollständige Automatisierung im Thermocycler. Ein Nachteil ist die fehlende Korrekturlesefunktion (3'→5'-Exonuklease), wodurch Taq eine höhere Fehlerrate hat als Pfu-Polymerase, die für klonierende Anwendungen bevorzugt wird.",
          merksatz: "Taq-Polymerase: hitzestabil (aus Thermus aquaticus), kein Proofreading — Thermocycler automatisiert alle drei PCR-Schritte.",
        },
        {
          heading: "RT-PCR beim COVID-19-Nachweis",
          text: "SARS-CoV-2 ist ein RNA-Virus mit positivem Einzelstrang-RNA-Genom. Zum Nachweis wird zunächst eine Reverse Transkriptase eingesetzt, die die virale RNA in cDNA umschreibt. Anschließend erfolgt die Amplifikation spezifischer Genomabschnitte (z. B. E-Gen, N-Gen, ORF1ab) mittels qPCR. Der CT-Wert (Cycle Threshold) gibt an, nach wie vielen Zyklen das Fluoreszenzsignal einen Schwellenwert überschreitet: ein niedriger CT-Wert bedeutet hohe Viruslast. CT < 25 gilt als hochinfektiös, CT > 35 als grenzwertig positiv. Diese Methode ist hochspezifisch und hochsensitiv — der Goldstandard in der COVID-19-Diagnostik.",
          merksatz: "RT-PCR: RNA → (Reverse Transkriptase) → cDNA → PCR. CT-Wert: je niedriger, desto höhere Viruslast.",
        },
      ],
      merksätze: [
        "PCR-Formel: n Zyklen → 2ⁿ Kopien (exponentiell). 30 Zyklen ≈ 10⁹ Kopien.",
        "Drei Phasen: Denaturierung 94–95°C | Annealing 50–65°C | Elongation 72°C (Taq-Optimum).",
        "RT-PCR = RNA-Viren-Nachweis (HIV, COVID-19); qPCR = quantifiziert in Echtzeit via Fluoreszenz.",
      ],
      klinischerBezug: "Der COVID-19-PCR-Test (RT-qPCR auf SARS-CoV-2-RNA) wurde zur weltweit meistgenutzten Diagnostikmethode der Pandemie; der CT-Wert korreliert invers mit der Infektiosität. In der Onkologie erlaubt die RT-PCR den sensitiven Nachweis der BCR-ABL-Translokation bei CML zur Therapiekontrolle.",
      altfrage: {
        question: "Welche Temperatur wird beim Annealing-Schritt der PCR typischerweise verwendet, und welche molekulare Reaktion findet dabei statt?",
        answer: "Beim Annealing wird die Temperatur auf 50–65 °C gesenkt. In diesem Schritt lagern sich die kurzen synthetischen Primer (Oligonukleotide) spezifisch an die komplementären Sequenzen der einzelsträngigen Ziel-DNA an (Hybridisierung). Die genaue Temperatur hängt vom Schmelzpunkt (Tm) der Primer ab.",
      },
      selfTest: [
        {
          question: "Ein Wissenschaftler führt 35 PCR-Zyklen mit einem einzelnen DNA-Ausgangsmolekül durch. Wie viele DNA-Moleküle sind theoretisch nach Abschluss vorhanden?",
          options: [
            "35 Moleküle",
            "70 Moleküle",
            "Etwa 34 Milliarden Moleküle (2³⁵)",
            "Etwa eine Million Moleküle (2²⁰)",
            "Exakt 2.000 Moleküle",
          ],
          correctIndex: 2,
          explanation: "Nach n Zyklen entstehen 2ⁿ Kopien. 2³⁵ = 34.359.738.368, also etwa 34 Milliarden Moleküle. Die exponentielle Amplifikation ist das Kernprinzip der PCR und ermöglicht den Nachweis selbst kleinster DNA-Mengen.",
          hints: [
            "Die Formel für die Kopienzahl lautet 2ⁿ, wobei n die Anzahl der Zyklen ist.",
            "2¹⁰ ≈ 1.000; 2²⁰ ≈ 1 Million; 2³⁰ ≈ 1 Milliarde — skalieren Sie entsprechend.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Warum wird bei der PCR die Taq-Polymerase anstelle einer normalen E.-coli-DNA-Polymerase verwendet?",
          options: [
            "Taq-Polymerase hat eine höhere Genauigkeit (Proofreading-Funktion)",
            "Taq-Polymerase ist hitzestabil und übersteht die Denaturierungsphase bei 94–95 °C",
            "Taq-Polymerase kann RNA direkt als Matrize verwenden",
            "Taq-Polymerase arbeitet bei Raumtemperatur und spart Energie",
            "Taq-Polymerase ist billiger als alle anderen Polymerasen",
          ],
          correctIndex: 1,
          explanation: "Die Taq-Polymerase stammt aus dem thermophilen Bakterium Thermus aquaticus und ist bis ca. 95 °C stabil. Normale Polymerasen würden bei den Denaturierungstemperaturen der PCR irreversibel inaktiviert werden. Die Hitzestabilität ermöglicht die vollautomatische Durchführung im Thermocycler, da das Enzym nicht nach jedem Zyklus neu zugesetzt werden muss.",
          hints: [
            "Denken Sie an die Herkunft des Bakteriums Thermus aquaticus — heiße Quellen im Yellowstone-Nationalpark.",
            "Was passiert mit Proteinen bei hohen Temperaturen? Und warum wäre das für das PCR-Enzym problematisch?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Ein Labor möchte den RNA-Gehalt des SARS-CoV-2-Virus in einem Patientenabstrich quantifizieren. Welche PCR-Variante ist hierfür am besten geeignet?",
          options: [
            "Standard-PCR mit anschließender Gelelektrophorese",
            "Nested PCR mit zwei Primerpaaren",
            "RT-qPCR (Reverse Transkriptase quantitative PCR)",
            "Allel-spezifische PCR",
            "Degenerative PCR mit degenerierten Primern",
          ],
          correctIndex: 2,
          explanation: "RT-qPCR kombiniert die Reverse Transkription (RNA → cDNA) mit der quantitativen Echtzeit-PCR. Da SARS-CoV-2 ein RNA-Virus ist, wird zuerst die virale RNA durch Reverse Transkriptase in cDNA umgeschrieben. Die qPCR quantifiziert dann über Fluoreszenz in Echtzeit — der CT-Wert korreliert mit der Ausgangsmenge an Virus-RNA.",
          hints: [
            "SARS-CoV-2 ist ein RNA-Virus — welcher Schritt ist nötig, bevor eine DNA-Polymerase tätig werden kann?",
            "Das 'q' in qPCR steht für quantitativ — welche Methode erlaubt Echtzeit-Messung?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "In welcher Reihenfolge finden die Schritte eines PCR-Zyklus statt?",
          options: [
            "Annealing → Denaturierung → Elongation",
            "Elongation → Annealing → Denaturierung",
            "Denaturierung → Elongation → Annealing",
            "Denaturierung → Annealing → Elongation",
            "Annealing → Elongation → Denaturierung",
          ],
          correctIndex: 3,
          explanation: "Ein PCR-Zyklus folgt immer der Reihenfolge: (1) Denaturierung bei 94–95 °C (DNA-Stränge trennen), (2) Annealing bei 50–65 °C (Primer binden), (3) Elongation bei 72 °C (Taq-Polymerase synthetisiert neuen Strang). Diese Abfolge wird 25–40 Mal wiederholt.",
          hints: [
            "Zuerst muss die DNA getrennt werden, bevor Primer binden können.",
            "Die Taq-Polymerase kann erst nach der Primerbindung ihren Job beginnen.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Bei der RT-PCR wird das Enzym Reverse Transkriptase verwendet. Was ist die Funktion dieses Enzyms?",
          options: [
            "Es denaturiert die RNA bei hohen Temperaturen",
            "Es synthetisiert RNA aus einer DNA-Matrize",
            "Es synthetisiert cDNA aus einer RNA-Matrize (RNA → DNA)",
            "Es repariert Einzelstrangbrüche in der DNA",
            "Es phosphoryliert die Primer vor dem Annealing",
          ],
          correctIndex: 2,
          explanation: "Reverse Transkriptase ist eine RNA-abhängige DNA-Polymerase, die ursprünglich aus Retroviren (z. B. HIV) stammt. Sie schreibt RNA in komplementäre DNA (cDNA) um — also entgegen dem normalen Informationsfluss (DNA → RNA). Die erzeugte cDNA dient dann als Matrize für die anschließende Standard-PCR.",
          hints: [
            "Das Enzym kommt natürlich in Retroviren vor — denken Sie an HIV, das sein RNA-Genom in DNA umschreibt.",
            "Das Präfix 'Revers-' gibt einen Hinweis auf die Richtung: entgegen dem normalen Informationsfluss.",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'bio-7-02',
      title: 'DNA-Sequenzierung und Genomanalyse',
      content: `## DNA-Sequenzierung — Grundlagen

Die DNA-Sequenzierung ermittelt die genaue Abfolge der Nukleotide (A, T, G, C) in einem DNA-Molekül. Dieses Wissen ist Grundlage für Diagnose genetischer Erkrankungen, Evolutionsforschung und personalisierte Medizin.

## Sanger-Sequenzierung (1. Generation)

Die von Frederick Sanger 1977 entwickelte Kettenabbruch-Methode (Nobelpreis 1980) basiert auf dem Einbau von **Didesoxynukleotiden (ddNTPs)**. Diese fehlen die 3'-OH-Gruppe, die für die Verlängerung des DNA-Strangs nötig ist — wird ein ddNTP eingebaut, stoppt die Synthese.

Ablauf: Vier separate Ansätze mit je einem ddNTP-Typ (ddATP, ddTTP, ddGTP, ddCTP) oder ein Ansatz mit fluoreszenzmarkierten ddNTPs erzeugen Fragmente aller möglichen Längen. Nach **Gelelektrophorese** (Auftrennung nach Größe) lässt sich die Sequenz ablesen. Die moderne Kapillarelektrophorese mit Laserdetektion ermöglicht bis zu 1.000 bp pro Lauf. Sanger bleibt der Goldstandard für kurze Sequenzen und Validierung.

## Next-Generation Sequencing (NGS / 2. Generation)

NGS-Plattformen (z. B. Illumina) sequenzieren massiv-parallel Millionen kurzer Fragmente gleichzeitig. Das **Whole Genome Sequencing (WGS)** sequenziert das gesamte Genom (~3,2 Mrd. Basenpaare beim Menschen) in wenigen Tagen. Prinzip bei Illumina: **Sequencing by Synthesis** mit fluoreszenzmarkierten, reversibel terminierten Nukleotiden und optischer Detektion pro Zyklus.

NGS ermöglicht:
- **Exom-Sequenzierung:** nur proteinkodierenden Bereiche (~2% des Genoms)
- **RNA-Seq:** Transkriptomanalyse (welche Gene werden exprimiert und wie stark?)
- **ChIP-Seq:** Protein-DNA-Wechselwirkungen (z. B. Histonmodifikationen, Transkriptionsfaktorbindung)

## Microarray/Genexpressionsanalyse

Ein **DNA-Microarray (Genchip)** trägt Tausende kurzer DNA-Sonden auf einer Trägeroberfläche. Fluoreszenzmarkierte cDNA (aus mRNA der Probe) hybridisiert mit komplementären Sonden. Die Intensität des Fluoreszenzsignals spiegelt die Expressionsstärke eines Gens wider. Anwendung: Vergleich krankes vs. gesundes Gewebe, Tumorprofilierung.

## Bioinformatik

Rohe Sequenzdaten (Reads) müssen **assembliert** (zusammengesetzt) und gegen ein Referenzgenom **aligniert** (ausgerichtet) werden. Softwaretools wie BLAST, BWA oder GATK identifizieren Varianten (SNPs, Indels, Strukturvarianten). Bioinformatik ist heute der Flaschenhals der Genomik — Datenspeicherung und -analyse übersteigen die eigentlichen Sequenzierkosten.`,
      lernziele: [
        "Das Prinzip der Sanger-Sequenzierung (Kettenabbruch durch ddNTPs) erklären und von NGS abgrenzen",
        "Die Anwendungen von NGS (WGS, Exom-Sequenzierung, RNA-Seq) und Microarrays beschreiben",
        "Die Rolle der Bioinformatik bei der Auswertung von Sequenzdaten erläutern",
      ],
      sections: [
        {
          heading: "Sanger vs. NGS — Ein Vergleich",
          text: "Die Sanger-Sequenzierung ist präzise, aber langsam und teuer für große Genome. Ein menschliches Genom per Sanger würde Jahrzehnte und Milliarden Dollar kosten — das Humangenomprojekt (1990–2003) bestätigt dies. NGS-Technologien (Illumina, Ion Torrent) parallelisieren die Sequenzierung radikal: Statt eines Fragments gleichzeitig werden Hunderte Millionen parallel gelesen. Die kurzen Reads (150–300 bp bei Illumina) werden bioinformatisch zusammengesetzt. Third-Generation Sequencing (PacBio, Oxford Nanopore) liest einzelne Moleküle ohne Amplifikation und erzeugt sehr lange Reads (bis zu 100 kbp), was die Assemblierung komplexer Regionen erleichtert.",
          merksatz: "Sanger = Goldstandard für kurze Sequenzen (bis 1 kbp); NGS = Hochdurchsatz für ganze Genome; 3. Generation = lange Reads, Einzelmolekül.",
        },
        {
          heading: "Klinische Genomdiagnostik",
          text: "Genpanel-Sequenzierung untersucht gezielt 10–500 bekannte Krankheitsgene (z. B. Krebsgenpanels, Kardio-Panels). Die Exom-Sequenzierung analysiert alle ~20.000 proteinkodierenden Gene und findet die Ursache seltener Erkrankungen in ca. 30–40% ungeklärter Fälle. Das Whole Genome Sequencing erfasst auch nicht-kodierende Regionen (Promotoren, Spleißstellen, nichtkodierendeRNAs). In der Tumordiagnostik erlaubt Liquid Biopsy die Sequenzierung zirkulierender Tumor-DNA (ctDNA) aus Blut — nicht-invasive Therapiekontrolle und Frühdiagnose. Die ACMG-Richtlinien klassifizieren genetische Varianten nach Pathogenität (pathogen, wahrscheinlich pathogen, VUS, wahrscheinlich benign, benign).",
          merksatz: "Liquid Biopsy: ctDNA aus Blut sequenzieren → nicht-invasive Tumordiagnostik. Exom-Sequenzierung klärt ~35% seltener Erkrankungen.",
        },
      ],
      merksätze: [
        "Sanger: ddNTPs → Kettenabbruch → Fragmente → Elektrophorese → Sequenz ablesen.",
        "NGS (Illumina): Sequencing by Synthesis, massiv-parallel, kurze Reads (150–300 bp), Bioinformatik nötig.",
        "Microarray: Hybridisierung fluoreszenzmarkierter cDNA → misst Genexpression (nicht Sequenz).",
      ],
      klinischerBezug: "NGS-basierte Tumorgenomik (z. B. Foundation One-Panel) identifiziert therapierbare Mutationen für zielgerichtete Therapien. Seltene Erkrankungen werden durch Trio-Exomsequenzierung (Patient + Eltern) in bis zu 40% der Fälle molekular aufgeklärt.",
      altfrage: {
        question: "Was sind Didesoxynukleotide (ddNTPs) und warum führen sie zum Kettenabbruch bei der Sanger-Sequenzierung?",
        answer: "Didesoxynukleotide fehlen die 3'-Hydroxylgruppe (3'-OH), die normalerweise für die Ausbildung der Phosphodiesterbindung mit dem nächsten Nukleotid benötigt wird. Wenn die DNA-Polymerase ein ddNTP einbaut, kann kein weiteres Nukleotid angefügt werden — die Synthese bricht ab. Da ddNTPs statistisch an jeder passenden Position eingebaut werden, entstehen Fragmente aller möglichen Längen, aus denen die Sequenz abgelesen werden kann.",
      },
      selfTest: [
        {
          question: "Was unterscheidet ein Didesoxynukleotid (ddNTP) von einem normalen Desoxynukleotid (dNTP) chemisch?",
          options: [
            "ddNTPs haben eine zusätzliche Phosphatgruppe am 5'-Ende",
            "ddNTPs fehlt die 3'-Hydroxylgruppe (3'-OH)",
            "ddNTPs enthalten Ribose statt Desoxyribose",
            "ddNTPs sind immer radioaktiv markiert",
            "ddNTPs haben eine methylierte Base",
          ],
          correctIndex: 1,
          explanation: "Didesoxynukleotide (ddNTPs) unterscheiden sich von normalen dNTPs durch das Fehlen der 3'-OH-Gruppe. Diese Gruppe ist essentiell für die Ausbildung der Phosphodiesterbindung mit dem nächsten Nukleotid. Fehlt sie, kann die DNA-Kette nicht verlängert werden — es kommt zum Kettenabbruch, dem Kernprinzip der Sanger-Sequenzierung.",
          hints: [
            "Das Präfix 'Di-desoxy' gibt einen Hinweis: zwei Hydroxygruppen fehlen (2'- und 3'-OH).",
            "Die Phosphodiesterbindung wird zwischen dem 3'-OH des einen und dem 5'-Phosphat des nächsten Nukleotids gebildet.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche NGS-Methode eignet sich am besten zur Analyse der Genexpression (welche Gene werden in einem Gewebe aktiv transkribiert)?",
          options: [
            "Whole Genome Sequencing (WGS)",
            "Exom-Sequenzierung",
            "ChIP-Seq",
            "RNA-Seq",
            "Sanger-Sequenzierung von cDNA-Bibliotheken",
          ],
          correctIndex: 3,
          explanation: "RNA-Seq (RNA-Sequenzierung) analysiert das Transkriptom — die Gesamtheit aller in einem Gewebe transkribierten RNA-Moleküle. mRNA wird in cDNA umgeschrieben und dann sequenziert. Die Anzahl der Reads pro Gen korreliert mit seiner Expressionsstärke. Diese Methode ermöglicht die gleichzeitige Messung der Expression aller ~20.000 menschlichen Gene.",
          hints: [
            "WGS und Exom-Sequenzierung analysieren DNA (Genomsequenz), nicht Genaktivität.",
            "Welche Methode würde mit RNA als Ausgangsmaterial beginnen?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Ein Labor möchte prüfen, ob ein Patient eine bekannte pathogene Mutation im BRCA1-Gen trägt. Welche Methode ist am effizientesten und kostengünstigsten?",
          options: [
            "Whole Genome Sequencing",
            "RNA-Seq",
            "Sanger-Sequenzierung der relevanten BRCA1-Exons",
            "Microarray-Analyse",
            "ChIP-Seq",
          ],
          correctIndex: 2,
          explanation: "Für die Analyse einer bekannten, spezifischen Mutation in einem bestimmten Gen ist die Sanger-Sequenzierung der relevanten Exons am effizientesten und kostengünstigsten. WGS würde viel mehr Daten generieren als nötig. Microarrays eignen sich für Genexpressionsanalysen oder bekannte SNP-Muster, aber nicht für die Sequenzierung beliebiger Mutationen.",
          hints: [
            "Wenn nur ein einziges Gen untersucht werden soll, ist ein genomweiter Ansatz unverhältnismäßig.",
            "Sanger-Sequenzierung gilt als Goldstandard für kurze Sequenzieraufgaben.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Was misst ein DNA-Microarray (Genchip)?",
          options: [
            "Die DNA-Sequenz eines Gens",
            "Die Anzahl der Chromosomenkopien",
            "Die relative Expressionsstärke von Genen (mRNA-Menge)",
            "Die Methylierungsmuster der DNA",
            "Die Länge von Telomeren",
          ],
          correctIndex: 2,
          explanation: "Ein DNA-Microarray misst die relative Genexpression: mRNA aus der Probe wird in fluoreszenzmarkierte cDNA umgeschrieben und hybridisiert mit komplementären Sonden auf dem Chip. Die Intensität des Fluoreszenzsignals ist proportional zur mRNA-Menge des entsprechenden Gens. Durch Vergleich zweier Proben (z. B. Tumor vs. Normalgewebe) lassen sich differentiell exprimierte Gene identifizieren.",
          hints: [
            "Microarrays verwenden Hybridisierung — was muss die Probe enthalten, um mit den DNA-Sonden zu hybridisieren?",
            "Das Ausgangsmaterial für Microarrays ist mRNA, nicht genomische DNA.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche der folgenden Aussagen über Next-Generation Sequencing (NGS) ist korrekt?",
          options: [
            "NGS sequenziert ein DNA-Molekül nach dem anderen (sequentiell)",
            "NGS benötigt keine Bioinformatik, da die Sequenz direkt abgelesen wird",
            "NGS erzeugt typischerweise sehr lange Reads von über 10.000 Basenpaaren",
            "NGS sequenziert Millionen kurzer DNA-Fragmente massiv-parallel",
            "NGS basiert auf dem Kettenabbruch-Prinzip mit ddNTPs",
          ],
          correctIndex: 3,
          explanation: "NGS zeichnet sich durch massiv-parallele Sequenzierung aus: Millionen kurzer DNA-Fragmente (150–300 bp bei Illumina) werden gleichzeitig sequenziert. Die resultierenden Short Reads werden bioinformatisch zu einer kompletten Genomsequenz zusammengesetzt (Assembly) oder gegen ein Referenzgenom ausgerichtet (Alignment). Diese Parallelisierung ermöglicht die Sequenzierung ganzer Genome in Tagen statt Jahrzehnten.",
          hints: [
            "Das 'massiv-parallel' ist das entscheidende Merkmal, das NGS von der Sanger-Sequenzierung unterscheidet.",
            "Short Reads müssen erst bioinformatisch zu längeren Sequenzen zusammengesetzt werden.",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'bio-7-04',
      title: 'Genetischer Fingerabdruck — STR, RFLP und Forensik',
      content: `## Genetischer Fingerabdruck — Grundprinzip

Der **genetische Fingerabdruck** (DNA-Fingerprinting) nutzt die individuelle Variation im menschlichen Genom zur eindeutigen Identifikation von Personen. Da >99,9% der menschlichen DNA bei allen Menschen identisch sind, konzentriert sich die Methode auf hochvariable Regionen — sogenannte **polymorphe Loci**.

## Short Tandem Repeats (STR)

**STRs** (auch Mikrosatelliten) sind kurze Sequenzmotive von 2–7 Basenpaaren, die tandem wiederholt werden (z. B. AGAT-AGAT-AGAT...). Die Anzahl der Wiederholungen variiert stark zwischen Individuen — dieser **Längenpolymorphismus** bildet die Basis des modernen DNA-Fingerabdrucks.

Vorgehen:
1. DNA-Extraktion (aus Blut, Speichel, Haar mit Wurzel, Epithelzellen)
2. PCR-Amplifikation von 15–20 STR-Loci (CODIS-System in den USA, z. B. D3S1358, vWA, FGA)
3. Kapillarelektrophorese zur Längenbestimmung der Fragmente
4. Statistischer Vergleich: Die Wahrscheinlichkeit, dass zwei nicht verwandte Personen identische Profile zeigen, liegt bei weniger als 1 in 10¹⁵

## RFLP (Restriction Fragment Length Polymorphism)

**RFLP** basiert auf Variationen in Restriktionsschnittstellen. Unterschiedliche Allele haben unterschiedliche Erkennungssequenzen für Restriktionsenzyme → verschieden lange Fragmente nach Restriktionsverdau. Nach Gelelektrophorese und Southern Blot entstehen charakteristische Bandenmuster. RFLP ist heute weitgehend durch STR-Analyse und SNP-Genotypisierung ersetzt worden, da es mehr DNA benötigt und aufwändiger ist.

## Gelelektrophorese

Die **Gelelektrophorese** trennt DNA-Fragmente nach Größe. Im elektrischen Feld wandern negativ geladene DNA-Fragmente durch ein Agarosegel zur Anode. Kleinere Fragmente wandern schneller als größere. Durch Vergleich mit einem Größenmarker (Leiter) können die Fragmentlängen bestimmt werden. Bei der STR-Analyse erfolgt dies in Kapillaren mit hoher Auflösung (Kapillarelektrophorese, CE).

## Forensische Anwendungen

- **Tatortspuren:** Vergleich von Täter-DNA (Tatortprobe) mit Verdächtigem oder Datenbank (z. B. CODIS)
- **Opferidentifikation:** Bei Massenkatastrophen, Kriegsverbrechern (z. B. Srebrenica-Identifikation)
- **Vaterschaftstest:** Kind trägt für jeden Locus je ein Allel von Mutter und Vater — Ausschluss bei Nicht-Übereinstimmung
- **Verwandtschaftsanalyse:** Abstammungsforschung, historische Persönlichkeiten (z. B. Zaren-Familie)

## Einschränkungen und ethische Aspekte

Gemischte Spuren (mehrere Personen), degradierte DNA und Laborkontaminationen können zu Fehlinterpretationen führen. DNA-Datenbanken (CODIS, Interpol-DNA) werfen datenschutzrechtliche Fragen auf: Wer wird erfasst? Wie lange werden Daten gespeichert?`,
      lernziele: [
        "Das Prinzip der STR-Analyse und ihre Anwendung im genetischen Fingerabdruck erklären",
        "RFLP von STR-Analyse unterscheiden und die Rolle der Gelelektrophorese beschreiben",
        "Forensische Anwendungen des genetischen Fingerabdrucks und ethische Aspekte nennen",
      ],
      sections: [
        {
          heading: "STR-Analyse — Schritt für Schritt",
          text: "Bei der STR-Analyse werden zunächst 15–20 definierte STR-Loci per PCR mit fluoreszenzmarkierten Primern amplifiziert. Da jeder Mensch an jedem Locus zwei Allele trägt (maternal und paternal), zeigt das Elektropherogramm pro Locus bis zu zwei Peaks. Die Fragmentlänge bestimmt die Allelnummer (z. B. Locus D7S820: Allel 8 bedeutet 8 Wiederholungen). Durch Kombination von 15–20 Loci wird ein individuelles genetisches Profil erstellt. Die statistische Wahrscheinlichkeit, dass zwei nicht verwandte Personen an allen Loci identische Allele tragen, beträgt weniger als 1 zu einer Billiarde. Eineiige Zwillinge haben identische STR-Profile — eine wichtige forensische Einschränkung.",
          merksatz: "STR: Kurze Tandem-Wiederholungen, individuell verschiedene Anzahl → PCR + Kapillarelektrophorese → einzigartiges DNA-Profil.",
        },
        {
          heading: "Vaterschaftstest mit STR",
          text: "Beim Vaterschaftstest werden STR-Profile von Kind, Mutter und möglichem Vater verglichen. Das Kind erbt an jedem Locus je ein Allel von der Mutter und eines vom biologischen Vater. Die mütterlichen Allele werden abgezogen — die verbleibenden Vater-Allele des Kindes müssen im Profil des Vaters vorhanden sein. Bei 15 Loci und einem Ausschluss gilt der Mann sicher als nicht der Vater. Beim Einschluss wird eine kombinierte Vaterschaftswahrscheinlichkeit berechnet — in Deutschland müssen Gerichte eine Wahrscheinlichkeit von mehr als 99,9% fordern. Rechtlich sind Vaterschaftstests in Deutschland ohne Zustimmung der Betroffenen verboten (§ 17 GenDG).",
          merksatz: "Vaterschaftstest: Kind-Allele = Mutter-Allele + Vater-Allele. Ausschluss bei Nichtübereinstimmung an auch nur einem Locus möglich.",
        },
      ],
      merksätze: [
        "STRs: 2–7 bp-Motive in variabler Wiederholungsanzahl → Längenpolymorphismus → individuelle DNA-Signatur.",
        "RFLP: Restriktionsverdau → Gelelektrophorese → Bandenmuster; heute durch STR/SNP-Analyse weitgehend ersetzt.",
        "Gelelektrophorese: kleine Fragmente wandern weiter (schneller) zur Anode; Größenmarker zum Kalibrieren.",
      ],
      klinischerBezug: "In der forensischen Medizin ist der genetische Fingerabdruck (STR-Analyse) Bestandteil jeder DNA-Auswertung am Tatort. In der Transplantationsmedizin wird die HLA-Typisierung per PCR und Sequenzierung zur Spender-Empfänger-Kompatibilitätsprüfung eingesetzt.",
      altfrage: {
        question: "Erläutern Sie, warum zwei nicht-verwandte Personen nahezu niemals identische genetische Fingerabdrücke haben.",
        answer: "Der genetische Fingerabdruck basiert auf der Analyse von 15–20 hochvariablen STR-Loci. An jedem Locus gibt es viele verschiedene Allele (unterschiedliche Wiederholungsanzahlen) in der Population. Die Wahrscheinlichkeit, dass zwei nicht verwandte Personen an einem einzigen Locus identische Allele tragen, beträgt bereits nur einige Prozent. Da die Loci unabhängig voneinander vererbt werden, multiplizieren sich diese Wahrscheinlichkeiten — das Produkt über 15–20 Loci ergibt eine Übereinstimmungswahrscheinlichkeit von weniger als 1 zu 10¹⁵.",
      },
      selfTest: [
        {
          question: "Was sind Short Tandem Repeats (STRs) und warum sind sie für den genetischen Fingerabdruck geeignet?",
          options: [
            "Einzelnukleotid-Polymorphismen (SNPs) in kodierenden Genen",
            "Kurze Sequenzmotive (2–7 bp), die in variabler Wiederholungsanzahl zwischen Individuen vorliegen",
            "Lange repetitive Sequenzen von über 1.000 bp Länge",
            "Methylierungsmuster in CpG-Inseln",
            "Inversionen und Translokationen im Chromosomensatz",
          ],
          correctIndex: 1,
          explanation: "STRs (Mikrosatelliten) sind kurze Sequenzmotive von 2–7 Basenpaaren (z. B. AGAT), die tandemförmig hintereinander wiederholt werden. Die Anzahl der Wiederholungen variiert stark zwischen Individuen — dieser Längenpolymorphismus macht STRs ideal für den genetischen Fingerabdruck, da sie mit PCR und Kapillarelektrophorese einfach und präzise analysiert werden können.",
          hints: [
            "'Tandem' bedeutet hintereinander — die Wiederholungen liegen direkt nebeneinander.",
            "Der entscheidende Unterschied zwischen Individuen ist die Anzahl der Wiederholungen, nicht die Sequenz selbst.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Bei der Gelelektrophorese eines STR-Profils wandern kleinere Fragmente...",
          options: [
            "langsamer, weil sie mehr Ladung tragen",
            "schneller, weil sie weniger Widerstand im Gel erfahren",
            "gar nicht, da sie an der Anode festgehalten werden",
            "zur Kathode, weil DNA positiv geladen ist",
            "abhängig von ihrer Basenzusammensetzung (A/T vs. G/C)",
          ],
          correctIndex: 1,
          explanation: "Bei der Gelelektrophorese wandern alle DNA-Moleküle aufgrund ihrer negativen Ladung (Phosphatgruppen) zur positiven Elektrode (Anode). Kleinere Fragmente bewegen sich schneller durch das Gelgeflecht, weil sie auf weniger Widerstand treffen — sie wandern also weiter als große Fragmente bei gleicher Laufzeit. Dies erlaubt die Größentrennung und damit die Bestimmung der Allellänge.",
          hints: [
            "DNA hat eine negative Ladung (wegen der Phosphatgruppen) — in welche Richtung bewegt sich eine negative Ladung im elektrischen Feld?",
            "Stellen Sie sich Moleküle vor, die durch ein Sieb laufen — welche kommen schneller durch?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Ein Vaterschaftstest zeigt folgendes STR-Profil an Locus D7S820: Kind: Allele 10, 12; Mutter: Allele 10, 11; möglicher Vater: Allele 11, 13. Ist Vaterschaft ausgeschlossen?",
          options: [
            "Nein, Allel 13 des Vaters passt zum Kind",
            "Nein, Allel 11 des Vaters passt zum Kind",
            "Ja, denn das Kind hat Allel 12, das weder von der Mutter noch vom möglichen Vater stammt",
            "Nein, ein einziger Locus reicht nicht für einen Ausschluss",
            "Ja, weil der Vater kein Allel 10 trägt",
          ],
          correctIndex: 2,
          explanation: "Das Kind hat die Allele 10 und 12. Allel 10 stammt von der Mutter (Mutter trägt 10). Das verbleibende kindliche Allel 12 muss vom biologischen Vater stammen. Der mögliche Vater trägt die Allele 11 und 13 — kein Allel 12. Damit kann er nicht der biologische Vater sein. Ein Ausschluss an einem Locus reicht für den Ausschluss der Vaterschaft aus.",
          hints: [
            "Ziehen Sie die mütterlichen Allele vom Kind ab — was bleibt als 'Vater-Allel' übrig?",
            "Das verbleibende Allel muss im Profil des möglichen Vaters vorhanden sein.",
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Was ist der Hauptunterschied zwischen RFLP und STR-Analyse beim genetischen Fingerabdruck?",
          options: [
            "RFLP analysiert Tandem-Wiederholungen; STR nutzt Restriktionsenzyme",
            "RFLP benötigt mehr DNA und Restriktionsverdau; STR-Analyse nutzt PCR und ist sensitiver",
            "STR erfordert radioaktive Markierung; RFLP ist fluoreszenzbasiert",
            "RFLP analysiert SNPs; STR analysiert Methylierungsmuster",
            "Es gibt keinen Unterschied — beides sind synonyme Begriffe",
          ],
          correctIndex: 1,
          explanation: "RFLP (Restriction Fragment Length Polymorphism) basiert auf dem Verdau mit Restriktionsenzymen und anschließendem Southern Blot — eine aufwändige Methode, die größere DNA-Mengen erfordert und degradierte DNA-Proben nicht analysieren kann. STR-Analyse nutzt PCR zur Amplifikation, benötigt sehr wenige Ausgangszellen und ist hochsensitiv. Daher hat STR RFLP in der forensischen Praxis weitgehend ersetzt.",
          hints: [
            "RFLP = Restriction Fragment Length Polymorphism — was schneidet die DNA?",
            "STR-Analyse nutzt PCR — welchen Vorteil bietet PCR bei geringen oder degradierten DNA-Mengen?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Eineiige Zwillinge haben identische genetische Fingerabdrücke. Welche forensische Schlussfolgerung ergibt sich daraus?",
          options: [
            "Eineiige Zwillinge können forensisch durch Standard-STR-Analyse nicht unterschieden werden",
            "Eineiige Zwillinge sind genetisch nicht wirklich identisch",
            "Der genetische Fingerabdruck kann durch Umweltfaktoren verändert werden",
            "Bei eineiigen Zwillingen muss die DNA-Analyse doppelt durchgeführt werden",
            "Epigenetische Analysen allein reichen zur forensischen Unterscheidung aus",
          ],
          correctIndex: 0,
          explanation: "Eineiige Zwillinge entstehen aus einer befruchteten Eizelle und haben identische Nukleotidsequenzen, einschließlich aller STR-Loci. Daher sind ihre genetischen Fingerabdrücke nicht unterscheidbar. In forensischen Fällen mit eineiigen Zwillingen als Verdächtigen kann DNA allein nicht zur Identifikation des Täters beitragen — andere Beweise müssen herangezogen werden. Neueste Forschung nutzt seltene somatische Mutationen zur Unterscheidung.",
          hints: [
            "Eineiige Zwillinge haben denselben genetischen Ursprung — welchen Effekt hat das auf ihre DNA-Sequenz?",
            "Der genetische Fingerabdruck basiert auf Sequenzunterschieden — was passiert, wenn keine vorhanden sind?",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'bio-7-05',
      title: 'Gentechnisch veränderte Organismen — Methoden',
      content: `## Grundlagen der Gentechnik

Die **Gentechnik** umfasst Methoden zur gezielten Veränderung des Erbguts von Organismen. Zentrale Werkzeuge sind Restriktionsenzyme, Vektoren, Transformationsmethoden und moderne Genomeditierungssysteme wie CRISPR-Cas9.

## Restriktionsenzyme

**Restriktionsenzyme (Typ II)** erkennen spezifische palindromische DNA-Sequenzen (4–8 bp) und schneiden diese. Zum Beispiel erkennt EcoRI die Sequenz 5'-GAATTC-3' und erzeugt 5'-Überhänge (**sticky ends**), die die Ligation mit komplementären Fragmenten erleichtern. Andere Enzyme (z. B. SmaI) erzeugen **blunt ends** (glatte Enden). Restriktionsenzyme wurden als natürliche Abwehr von Bakterien gegen Fremd-DNA entdeckt.

## Vektoren

**Vektoren** sind DNA-Moleküle, die Fremd-DNA in eine Wirtszelle transportieren und dort replizieren. Wichtigste Typen:
- **Plasmide:** Kleine zirkuläre bakterielle DNA-Moleküle mit Antibiotikaresistenzgen (zur Selektion) und Multiple Cloning Site (MCS). Aufnahmekapazität: bis ~10 kb
- **Virale Vektoren (z. B. Adenoviren, lentivirale Vektoren):** Integration in das Wirtsgenom möglich; für Gentherapie genutzt
- **YACs (Yeast Artificial Chromosomes):** Für sehr große Inserts (bis 2 Mb)

## Klonierung — Ablauf

1. Ziel-DNA und Vektor mit selben Restriktionsenzymen schneiden
2. Ligation mit DNA-Ligase (sticky ends verbinden)
3. **Transformation:** Einbringen des rekombinanten Plasmids in Wirtsbakterium (z. B. *E. coli*) — Hitzeschock oder Elektroporation
4. **Selektion:** Wachstum auf antibiotikahaltigem Medium eliminiert Zellen ohne Plasmid; Blau-Weiß-Selektion (lacZ-Gen) unterscheidet Plasmide mit und ohne Insert

## CRISPR-Cas9

**CRISPR-Cas9** (Clustered Regularly Interspaced Short Palindromic Repeats) ermöglicht präzise Genomedition. Das Cas9-Protein ist eine RNA-geführte Endonuklease: eine Guide-RNA (gRNA, ~20 nt) dirigiert Cas9 zur Zielsequenz, wo ein Doppelstrangbruch erzeugt wird. Die Reparatur erfolgt über **NHEJ** (Non-Homologous End Joining, fehleranfällig → Gen-Knockout) oder **HDR** (Homology-Directed Repair, präzise Sequenzänderung). Anwendungen: Forschung, CAR-T-Zell-Therapie, Sichelzellanämie-Heilung (2023 zugelassen).

## GVO in Medizin und Landwirtschaft

**Medizin:** Humanes Insulin (in *E. coli*), Erythropoetin (EPO), Blutgerinnungsfaktoren, Impfstoffe (rekombinante Proteine)
**Landwirtschaft:** Bt-Mais (Bt-Toxin gegen Insekten), herbizidresistenter Soja (Roundup Ready), Golden Rice (Beta-Carotin), stressresistente Kulturpflanzen`,
      lernziele: [
        "Das Prinzip der Klonierung mit Restriktionsenzymen, Vektoren und Transformation beschreiben",
        "Den CRISPR-Cas9-Mechanismus und seine Anwendungen erläutern",
        "Medizinische und landwirtschaftliche Anwendungen von GVO nennen und kritisch bewerten",
      ],
      sections: [
        {
          heading: "Selektion rekombinanter Klone",
          text: "Nach der Transformation werden Bakterien auf Selektivmedium (z. B. Ampicillin) ausplattiert. Nur Zellen mit Plasmid überleben, da das Plasmid ein Ampicillinresistenzgen trägt. Um zwischen Klonen mit Insert und leeren Vektoren zu unterscheiden, nutzt man die Blau-Weiß-Selektion: Das lacZ-Gen im Vektor codiert für Beta-Galaktosidase, die das Substrat X-Gal blau färbt. Wenn ein Insert das lacZ-Gen unterbricht, produzieren diese Bakterien keine aktive Beta-Galaktosidase — die Kolonien bleiben weiß. Weiße Kolonien enthalten also ein Insert. Anschließend werden positive Klone durch Kolonie-PCR oder Restriktionsverdau und Gelelektrophorese verifiziert.",
          merksatz: "Blau-Weiß-Selektion: blaue Kolonien = kein Insert (lacZ intakt); weiße Kolonien = Insert vorhanden (lacZ unterbrochen).",
        },
        {
          heading: "CRISPR-Cas9 — Revolutionäre Genomedition",
          text: "CRISPR-Cas9 wurde aus dem Immunsystem von Bakterien (z. B. Streptococcus pyogenes) abgeleitet. Bakterien speichern Sequenzen früherer Viren als Erinnerung (CRISPRs) und nutzen Cas-Proteine zum Erkennen und Schneiden dieser Sequenzen bei erneuter Infektion. Wissenschaftler (Jennifer Doudna, Emmanuelle Charpentier, Nobelpreis Chemie 2020) nutzten dieses System für gezielte Genomedition. Eine programmierbare gRNA kann theoretisch jede Sequenz im Genom ansteuern. Aktuelle Anwendungen: Casgevy (Exagamglogene Autotemcel) — erste zugelassene CRISPR-Therapie (2023) zur Heilung von Sichelzellanämie und Beta-Thalassämie durch Reaktivierung des fetalen Hämoglobins (HbF).",
          merksatz: "CRISPR-Cas9: guide RNA → Cas9-Endonuklease → Doppelstrangbruch → NHEJ (Knockout) oder HDR (präzise Korrektur). Nobelpreis Chemie 2020.",
        },
      ],
      merksätze: [
        "Restriktionsenzyme Typ II: erkennen palindromische Sequenzen, erzeugen sticky oder blunt ends.",
        "Klonierung: Restriktionsverdau → Ligation → Transformation → Selektion (Antibiotikum + Blau-Weiß).",
        "CRISPR-Cas9: gRNA dirigiert Cas9 zur Zielsequenz → Doppelstrangbruch → Gen-Knockout (NHEJ) oder Korrektur (HDR).",
      ],
      klinischerBezug: "Humanes Insulin wird seit 1982 rekombinant in E. coli produziert — ein Meilenstein der Biotechnologie. CRISPR-basierte Therapien (Casgevy, 2023) ermöglichen erstmals die Heilung genetischer Blutkrankheiten wie Sichelzellanämie durch einmalige Stammzellentherapie.",
      altfrage: {
        question: "Was sind 'sticky ends' (klebrige Enden) bei Restriktionsverdau und welchen Vorteil haben sie gegenüber 'blunt ends'?",
        answer: "Sticky ends entstehen, wenn ein Restriktionsenzym die DNA-Stränge versetzt schneidet, sodass kurze einzelsträngige Überhänge (4–6 Nukleotide) entstehen. Diese Überhänge sind komplementär zueinander und können durch komplementäre Basenpaarung mit anderen sticky ends aneinander hybridisieren. Dies erleichtert die effiziente Ligation von Vektor und Insert erheblich, da die komplementären Überhänge die richtigen Partner finden und zusammenhalten. Blunt ends haben keine Überhänge und müssen direkt ligiert werden, was weniger effizient ist.",
      },
      selfTest: [
        {
          question: "Was ist die Funktion von Restriktionsenzymen des Typs II bei der Klonierung?",
          options: [
            "Sie verbinden (ligieren) DNA-Fragmente miteinander",
            "Sie erkennen spezifische palindromische DNA-Sequenzen und schneiden sie",
            "Sie transportieren Fremd-DNA in die Wirtszelle",
            "Sie methylieren DNA zur Schutzmarkierung",
            "Sie synthetisieren neue DNA-Stränge an der Schnittstelle",
          ],
          correctIndex: 1,
          explanation: "Restriktionsenzyme Typ II erkennen spezifische palindromische DNA-Sequenzen (4–8 bp) und schneiden die DNA an dieser Stelle. Durch den Schnitt entstehen definierte Fragmente mit sticky ends oder blunt ends. Diese Eigenschaft wird in der Klonierung genutzt, um Ziel-DNA und Vektor mit kompatiblen Enden zu erzeugen, die dann durch DNA-Ligase verbunden werden können.",
          hints: [
            "Restriktionsenzyme kommen natürlich in Bakterien vor — was schneiden sie dort?",
            "Das Wort 'Restriktion' bedeutet 'Einschränkung' — sie schränken Fremd-DNA ein, indem sie sie zerschneiden.",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Welche Eigenschaft eines Plasmid-Vektors ermöglicht die Selektion transformierter Bakterien auf Antibiotikamedium?",
          options: [
            "Der Replikationsursprung (ori) sichert die Plasmidvermehrung",
            "Das Antibiotikaresistenzgen (z. B. AmpR) verleiht den Bakterien Resistenz",
            "Die Multiple Cloning Site (MCS) enthält Restriktionsschnittstellen",
            "Das lacZ-Gen ermöglicht Blau-Weiß-Selektion",
            "Der Promotor ermöglicht Expression des Fremdgens",
          ],
          correctIndex: 1,
          explanation: "Das Antibiotikaresistenzgen (z. B. AmpR für Ampicillinresistenz) auf dem Plasmid ist das Selektionsmerkmal: Nur Bakterien, die das Plasmid aufgenommen haben (transformierte Zellen), können auf ampicillinhaltigem Medium überleben und wachsen. Alle nicht-transformierten Zellen sterben ab. Dieses Prinzip ermöglicht die einfache Selektion rekombinanter Klone.",
          hints: [
            "Warum werden Bakterien auf einem Medium mit Antibiotikum ausgestrichen?",
            "Das Resistenzgen liegt auf dem Plasmid — welchen Vorteil hat das für die Bakterienzelle?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was ist der Unterschied zwischen NHEJ und HDR bei der CRISPR-Cas9-Reparatur?",
          options: [
            "NHEJ ist präzise; HDR ist fehleranfällig",
            "NHEJ benötigt eine Matrize; HDR nicht",
            "NHEJ ist fehleranfällig und führt oft zu Frameshift-Mutationen; HDR ermöglicht präzise Sequenzänderungen mithilfe einer Matrize",
            "NHEJ funktioniert nur in Pflanzenzellen; HDR nur in tierischen Zellen",
            "Es gibt keinen funktionellen Unterschied zwischen den beiden Wegen",
          ],
          correctIndex: 2,
          explanation: "NHEJ (Non-Homologous End Joining) verbindet die geschnittenen DNA-Enden direkt, oft mit kleinen Insertionen oder Deletionen (Indels) — dieser Fehler führt zu Frameshift-Mutationen und damit zum Verlust der Proteinfunktion (Gen-Knockout). HDR (Homology-Directed Repair) nutzt eine bereitgestellte DNA-Matrize zur präzisen Reparatur oder Korrektur der Sequenz. HDR ist effizienter in teilenden Zellen (S/G2-Phase).",
          hints: [
            "HDR nutzt eine Matrize — an welchen anderen bekannten DNA-Reparaturprozess erinnert das?",
            "NHEJ ist schnell aber fehleranfällig — wenn man ein Gen ausschalten möchte, welcher Weg ist geeigneter?",
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: "Welches Prinzip liegt der Herstellung von rekombinantem humanem Insulin in E. coli zugrunde?",
          options: [
            "E. coli produziert Insulin natürlich — es muss nur extrahiert werden",
            "Das humane Insulingen wird in einen Expressionsvektor kloniert und in E. coli transformiert, wo es exprimiert wird",
            "Insulin wird durch rein chemische Synthese hergestellt, ohne E. coli",
            "E. coli-Insulin ist von Natur aus identisch mit humanem Insulin",
            "Das Insulingen wird via CRISPR in das E. coli-Chromosom integriert",
          ],
          correctIndex: 1,
          explanation: "Das humane Insulingen (als cDNA aus mRNA kloniert) wird in einen bakteriellen Expressionsvektor mit starkem Promotor kloniert. Nach Transformation in E. coli kann das Bakterium das humane Insulin-Protein produzieren. Das Protein wird aufgereinigt und zur medizinischen Verwendung aufbereitet. Dieses Verfahren ermöglicht kostengünstige und tierfreie Insulinproduktion seit 1982.",
          hints: [
            "Wie würde man ein menschliches Protein in einem Bakterium produzieren lassen?",
            "Denken Sie an den Klonierungsablauf: Welche Schritte sind nötig, damit E. coli ein humanes Protein herstellt?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Welche Funktion hat die Guide-RNA (gRNA) bei CRISPR-Cas9?",
          options: [
            "Sie schneidet die Ziel-DNA als Endonuklease",
            "Sie repariert den Doppelstrangbruch durch HDR",
            "Sie dirigiert das Cas9-Protein durch Komplementarität zur gewünschten Zielsequenz",
            "Sie transkribiert das Fremdgen in mRNA",
            "Sie inhibiert NHEJ und aktiviert HDR-Reparatur",
          ],
          correctIndex: 2,
          explanation: "Die Guide-RNA (gRNA, ca. 20 Nukleotide) ist komplementär zur Zielsequenz in der genomischen DNA. Sie bildet einen Komplex mit dem Cas9-Protein und dirigiert dieses durch Basenpaarung zur gewünschten Position im Genom. Das PAM-Motiv (Protospacer Adjacent Motif, oft NGG) flankiert die Zielsequenz und ist für die Cas9-Bindung erforderlich. Durch einfache Änderung der gRNA-Sequenz kann jede beliebige Zielsequenz im Genom angesteuert werden.",
          hints: [
            "Die gRNA ist 'komplementär' — was bedeutet das für ihre Funktion als Wegweiser?",
            "Cas9 allein hat keine Sequenzspezifität — was verleiht ihm diese?",
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'bio-7-06',
      title: 'Klonierung — Reproduktiv, Therapeutisch, Ethik',
      content: `## Klonierung — Definition und Überblick

**Klonierung** bezeichnet die Erzeugung genetisch identischer Kopien eines Organismus oder einzelner Zellen. Im biologischen Kontext unterscheidet man zwischen **reproduktivem Klonen** (Erzeugung eines genetisch identischen Lebewesens), **therapeutischem Klonen** (Gewinnung embryonaler Stammzellen) und **molekularem Klonen** (Vervielfältigung von DNA-Fragmenten, bereits im UK GVO besprochen).

## Reproduktives Klonen — Somatischer Kerntransfer (SCNT)

Das reproduktive Klonen bei Säugetieren basiert auf dem **somatischen Kerntransfer (Somatic Cell Nuclear Transfer, SCNT)**. Erstmals erfolgreich angewendet 1996 von Ian Wilmut am Roslin Institute (Schaf Dolly):

**Ablauf SCNT:**
1. Entnahme einer Eizelle und Entfernung des Zellkerns (Enukleierung)
2. Einpflanzung des Zellkerns einer somatischen Spenderzelle (z. B. Euterdrüsenzelle, wie bei Dolly)
3. Elektrischer Impuls oder Chemikalien stimulieren die Eizelle zur Entwicklung
4. In-vitro-Kultivierung bis zum Blastocystenstadium, dann Einpflanzung in eine Leihmutter

Dolly war das erste geklonte Säugetier aus einer adulten somatischen Zelle — ein Beweis für die **totipotente Reprogrammierbarkeit** eines Zellkerns. Dolly zeigte verkürzte Telomere und Alterserkrankungen und verstarb mit 6 Jahren (Schafe werden normalerweise 10–12 Jahre alt).

## Therapeutisches Klonen

Beim **therapeutischen Klonen** wird der SCNT-Prozess bis zum Blastocystenstadium durchgeführt, die Embryonen werden jedoch nicht implantiert, sondern aus der inneren Zellmasse werden **embryonale Stammzellen (ESCs)** gewonnen. Da diese genetisch mit dem Spender identisch sind, würden aus ihnen gewonnene Gewebe/Organe nicht immunologisch abgestoßen. Ethisch hochumstritten, da Embryonen zerstört werden.

## iPS-Zellen — Ethische Alternative

**Induzierte pluripotente Stammzellen (iPS)** wurden 2006 von Shinya Yamanaka (Nobelpreis 2012 mit John Gurdon) durch Reprogrammierung adulter somatischer Zellen (z. B. Hautfibroblasten) mit vier Transkriptionsfaktoren (Oct4, Sox2, Klf4, c-Myc = **Yamanaka-Faktoren**) gewonnen. iPS-Zellen sind pluripotent (können alle Körperzellen bilden) und umgehen ethische Probleme, da kein Embryo benötigt wird.

Anwendungen: Krankheitsmodellierung, Medikamententestung, perspektivisch Organersatz (Tissue Engineering).

## Ethische Aspekte

- **Reproduktives Klonen:** Bei Menschen in fast allen Ländern verboten — Instrumentalisierung von Menschen, Würdeverletzung, ungeklärte psychologische Folgen
- **Therapeutisches Klonen:** Moralischer Status des Embryos umstritten — Wann beginnt Leben? Streng reguliert oder verboten in vielen Ländern
- **iPS-Zellen:** Breiterer Konsens, da kein Embryo zerstört wird, aber Risiken (Tumorbildung durch c-Myc) müssen gelöst werden`,
      lernziele: [
        "Den Ablauf des somatischen Kerntransfers (SCNT) und das Experiment mit Schaf Dolly beschreiben",
        "Reproduktives von therapeutischem Klonen abgrenzen und die Rolle von iPS-Zellen erläutern",
        "Ethische Argumente für und gegen reproduktives und therapeutisches Klonen nennen",
      ],
      sections: [
        {
          heading: "Schaf Dolly — Der Beweis der Reprogrammierbarkeit",
          text: "Schaf Dolly (1996) war revolutionär, weil sie zeigte, dass der Kern einer ausdifferenzierten adulten Zelle vollständig reprogrammiert werden kann — alle Gene, die zur Embryonalentwicklung nötig sind, waren noch vorhanden, nur stillgelegt. Vor Dolly glaubte man, Differenzierung sei ein irreversibler Prozess. Der Erfolg war allerdings ineffizient: Von 277 Versuchen führte nur einer zu einem lebendigen Lamm. Spätere Experimente klonten Mäuse, Rinder, Katzen (CC, die erste geklonte Katze, 2001) und sogar Wölfe. Das reproduktive Klonen von Primaten gelang 2018 in China (Macaca fascicularis, Zhong Zhong und Hua Hua). Beim Menschen ist es global verboten.",
          merksatz: "SCNT: Zellkern aus Spenderzelle + entkerne Eizelle → elektrischer Impuls → Embryo → Leihmutter. Dolly: erste Klon aus adulter Körperzelle (1996).",
        },
        {
          heading: "Yamanaka-Faktoren und iPS-Zellen",
          text: "Yamanaka identifizierte vier Transkriptionsfaktoren (Oct4, Sox2, Klf4, c-Myc), die — in Fibroblasten eingeschleust — diese zu pluripotenten Stammzellen reprogrammieren. Oct4 und Sox2 sind Kern-Pluripotenzfaktoren, die in embryonalen Stammzellen natürlich aktiv sind. c-Myc ist ein Proto-Onkogen, was das Tumorrisiko bei frühen iPS-Ansätzen erhöhte — neuere Protokolle verzichten auf c-Myc. iPS-Zellen sind eine Brücke zwischen Stammzellforschung und ethischen Prinzipien: Sie ermöglichen patientenspezifische Stammzelllinien ohne Embryonenzerstörung. Heute werden iPS-Zellen für Krankheitsmodelle (z. B. ALS, Parkinson) und als Ausgangsmaterial für potenzielle Zelltherapien eingesetzt.",
          merksatz: "Yamanaka-Faktoren: Oct4, Sox2, Klf4, c-Myc → adulte Zelle → iPS-Zelle (pluripotent). Nobelpreis Medizin 2012 (mit Gurdon).",
        },
      ],
      merksätze: [
        "SCNT: enukleierte Eizelle + Spenderkern → Blastocyste → (reproduktiv) Leihmutter | (therapeutisch) ESC-Gewinnung.",
        "Dolly (1996): erste Klon aus ausdifferenzierter adulter Zelle; verkürzte Telomere; starb mit 6 Jahren.",
        "iPS-Zellen (Yamanaka 2006): Reprogrammierung adulter Zellen mit Oct4, Sox2, Klf4, c-Myc → pluripotent, ohne Embryo.",
      ],
      klinischerBezug: "Therapeutisches Klonen und iPS-Zellen bieten das Potenzial zur personalisierten Zelltherapie. Erste klinische Studien mit iPS-Zell-abgeleiteten Photorezeptoren zur Behandlung der Makuladegeneration laufen. Das Hauptrisiko bleibt die Tumorbildung durch unvollständige Differenzierung oder Aktivierung von Onkogenen.",
      altfrage: {
        question: "Worin besteht der fundamentale Unterschied zwischen reproduktivem und therapeutischem Klonen?",
        answer: "Beim reproduktiven Klonen wird der durch SCNT erzeugte Embryo in eine Leihmutter implantiert und entwickelt sich zu einem vollständigen, genetisch identischen Organismus. Beim therapeutischen Klonen wird der Embryo ebenfalls durch SCNT erzeugt, aber nicht implantiert — stattdessen werden aus der inneren Zellmasse der Blastozyste embryonale Stammzellen (ESCs) gewonnen. Das Ziel ist nicht die Reproduktion eines Individuums, sondern die Gewinnung immunkompatiblen Gewebes zur Therapie. Beide Verfahren zerstören den Embryo, was ethisch umstritten ist.",
      },
      selfTest: [
        {
          question: "Welche Technik wurde zur Erschaffung von Schaf Dolly verwendet?",
          options: [
            "In-vitro-Fertilisation (IVF) mit genetisch veränderter Samenzelle",
            "Somatischer Kerntransfer (SCNT): Kern einer Euterdrüsenzelle in eine enukleierte Eizelle",
            "Injektion von iPS-Zellen in eine Eizelle",
            "Parthenogenese (ungeschlechtliche Entwicklung einer Eizelle)",
            "CRISPR-Cas9-vermittelte Genomeditierung der Eizelle",
          ],
          correctIndex: 1,
          explanation: "Dolly wurde durch somatischen Kerntransfer (SCNT) erschaffen: Der Kern einer adulten Euterdrüsenzelle (Spenderschaf) wurde in eine entkernte (enukleierte) Eizelle eines anderen Schafs übertragen. Ein elektrischer Impuls stimulierte die rekonstruierte Eizelle zur Entwicklung. Der entstehende Embryo wurde in eine Leihmutter implantiert. Dolly war genetisch identisch mit dem Spenderschaf der Euterdrüsenzelle.",
          hints: [
            "Dolly stammte genetisch von einem adulten Körperzellkern — welches Verfahren überträgt Zellkerne?",
            "Ian Wilmut am Roslin Institute, 1996 — welche Technik revolutionierte die Klonierungsforschung?",
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: "Was sind die Yamanaka-Faktoren und welche Bedeutung haben sie für die Stammzellforschung?",
          options: [
            "Vier Wachstumsfaktoren, die embryonale Stammzellen zur Differenzierung stimulieren",
            "Vier Transkriptionsfaktoren (Oct4, Sox2, Klf4, c-Myc), die adulte Zellen zu iPS-Zellen reprogrammieren",
            "Enzyme, die bei der CRISPR-Cas9-Reparatur beteiligt sind",
            "Histonmodifikationen, die Pluripotenz-Gene aktivieren",
            "Vier Zytokine, die embryonale Stammzellen in vitro kultivierbar machen",
          ],
          correctIndex: 1,
          explanation: "Shinya Yamanaka (Nobelpreis 2012) entdeckte, dass die Einschleusung von vier spezifischen Transkriptionsfaktoren — Oct4, Sox2, Klf4 und c-Myc — in adulte somatische Zellen (z. B. Fibroblasten) diese zu induzierten pluripotenten Stammzellen (iPS-Zellen) reprogrammiert. Diese Entdeckung revolutionierte die Stammzellforschung, da erstmals pluripotente Stammzellen ohne Embryonenzerstörung gewonnen werden konnten.",
          hints: [
            "Yamanaka erhielt den Nobelpreis 2012 für die Reprogrammierung adulter Zellen — welche Moleküle erzwingen diese Reprogrammierung?",
            "Vier spezifische Transkriptionsfaktoren sind der Schlüssel: Oct4 und Sox2 sind die wichtigsten.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Ein Forscher möchte eine patientenspezifische Stammzelllinie für die Erforschung der Parkinson-Krankheit ohne ethische Kontroversen erstellen. Welche Methode eignet sich am besten?",
          options: [
            "Therapeutisches Klonen mit SCNT aus den Hautzellen des Patienten",
            "Reproduktives Klonen des Patienten",
            "Reprogrammierung der Hautfibroblasten des Patienten zu iPS-Zellen",
            "Isolierung embryonaler Stammzellen aus einer gespendeten Blastozyste",
            "Gewinnung von Stammzellen aus dem Knochenmark des Patienten",
          ],
          correctIndex: 2,
          explanation: "iPS-Zellen aus den patienteneigenen Zellen (z. B. Hautfibroblasten) umgehen beide ethischen Probleme: Es werden keine Embryonen benötigt (wie bei ESCs oder therapeutischem Klonen), und die Zellen sind genetisch identisch mit dem Patienten. Als Parkinson-Modell können die iPS-Zellen zu dopaminergen Neuronen differenziert werden, die die patientenspezifischen Mutationen tragen.",
          hints: [
            "Welche Stammzellmethode benötigt keinen Embryo und ist trotzdem patientenspezifisch?",
            "iPS = induzierte pluripotente Stammzellen — 'patientenspezifisch' und 'ohne Embryo' sind Schlüsselhinweise.",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Warum ist reproduktives Klonen von Menschen in fast allen Ländern verboten?",
          options: [
            "Weil es technisch unmöglich ist",
            "Weil geklonte Menschen keine vollständige Immunabwehr hätten",
            "Wegen ethischer Bedenken: Würdeverletzung, Instrumentalisierung, ungeklärte psychologische Folgen und hohe technische Fehlerrate",
            "Weil geklonte Individuen rechtlich als Eigentum der Wissenschaftler gelten würden",
            "Weil geklonte Individuen aufgrund kürzerer Telomere keine normalen Lebensspannen erreichen",
          ],
          correctIndex: 2,
          explanation: "Das Verbot reproduktiven Klonens beim Menschen basiert auf mehreren ethischen Prinzipien: (1) Menschenwürde — Menschen dürfen nicht als Mittel zum Zweck instrumentalisiert werden; (2) Autonomie — ein Klon hätte nicht die Freiheit, sein Leben ohne Vergleich zum Original zu gestalten; (3) technische Sicherheitsbedenken — die hohe Fehlrate beim Tierklonen (Dolly: 1 von 277 Versuchen) wäre beim Menschen inakzeptabel; (4) soziale und psychologische Folgen sind unabsehbar.",
          hints: [
            "Denken Sie an ethische Grundprinzipien: Würde, Autonomie, Nichtschaden.",
            "Dolly brauchte 277 Versuche — was würde das beim Menschen bedeuten?",
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: "Warum zeigte Schaf Dolly Anzeichen vorzeitiger Alterung?",
          options: [
            "Weil das Leihmutterschaf genetisch nicht kompatibel war",
            "Weil die DNA-Polymerase Fehler bei der Replikation machte",
            "Weil Dollys Zellkern von einem älteren Tier stammte und verkürzte Telomere aufwies",
            "Weil iPS-Zellen instabile Genome haben",
            "Weil Klone keine funktionierenden Mitochondrien besitzen",
          ],
          correctIndex: 2,
          explanation: "Dollys Zellkern stammte aus der Euterdrüsenzelle eines 6-jährigen Schafs. Telomere — die schützenden Endkappen der Chromosomen — verkürzen sich mit jeder Zellteilung. Da Dollys Zellkern bereits 6 Jahre alt war, hatte er entsprechend kürzere Telomere als neugeborene Schafe. Dolly zeigte daher früh Arthritis und Lungenerkrankungen und starb mit 6 Jahren, halb so alt wie der Altersdurchschnitt bei Schafen.",
          hints: [
            "Telomere schützen Chromosomenenden und verkürzen sich mit dem Alter der Zelle.",
            "Von welchem Tier stammte Dollys Zellkern — wie alt war diese Spenderzelle?",
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },
  ],
};
