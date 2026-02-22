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
      title: 'PCR — Prinzip, Ablauf und klinische Anwendung',
      content: `## Polymerase-Kettenreaktion (PCR) — Historischer Kontext

Die **Polymerase-Kettenreaktion (PCR)** ist eine der bedeutendsten Erfindungen der modernen Biologie. Kary Mullis entwickelte das Grundprinzip 1983 während einer nächtlichen Autofahrt in Nordkalifornien — eine Erkenntnis, die ihm 1993 den Nobelpreis für Chemie einbrachte. Vor der PCR mussten Wissenschaftler große Mengen biologischen Materials für DNA-Analysen verwenden und mühsam klonieren. Die PCR ermöglichte erstmals die Vervielfältigung winziger DNA-Mengen in vitro innerhalb weniger Stunden. Heute ist die PCR aus keinem molekularbiologischen oder diagnostischen Labor mehr wegzudenken.

## Das Grundprinzip: Exponentiell, zyklisch, spezifisch

Das Kernprinzip der PCR beruht auf drei sich wiederholenden Schritten in einem sogenannten **Thermocycler** (automatisiertes Gerät zur präzisen Temperatursteuerung). Nach jedem Zyklus verdoppelt sich die Anzahl der Zielsequenz-Kopien theoretisch. Nach n Zyklen entstehen aus einem einzigen DNA-Molekül **2ⁿ Kopien** — ein exponentielles Wachstum. Nach 30 Zyklen sind bereits über eine Milliarde Kopien vorhanden (2³⁰ ≈ 1.073.741.824), nach 35 Zyklen über 34 Milliarden.

Für die PCR werden folgende Komponenten benötigt:
- **Matrizen-DNA (Template):** Die zu amplifizierende DNA (genomische DNA, cDNA, Plasmid etc.)
- **Primer (2 Stück):** Kurze einzelsträngige Oligonukleotide (18–25 Basen), die komplementär zu den Rändern des Zielbereichs sind — ein Vorwärtsprimer (forward) und ein Rückwärtsprimer (reverse)
- **dNTPs:** Desoxynukleosidtriphosphate (dATP, dTTP, dGTP, dCTP) als Bausteine
- **Taq-Polymerase:** Hitzestabile DNA-Polymerase (aus Thermus aquaticus)
- **Pufferlösung:** Mit optimaler Ionenkonzentration (Mg²⁺ ist als Cofaktor der Taq-Polymerase essenziell)

## Die drei Schritte eines PCR-Zyklus im Detail

**Schritt 1 — Denaturierung (94–95 °C, 30–60 Sekunden):**
Die doppelsträngige DNA wird durch intensive Hitze denaturiert. Die Wasserstoffbrückenbindungen zwischen den komplementären Basenpaaren (A-T: 2 Bindungen; G-C: 3 Bindungen) werden aufgebrochen. Die Doppelhelix trennt sich vollständig in zwei Einzelstränge, die als Matrizen für die Neusynthese dienen. Bei GC-reichen Regionen kann eine höhere Temperatur oder längere Denaturierungszeit nötig sein.

**Schritt 2 — Annealing/Primerhybridisierung (50–68 °C, 20–60 Sekunden):**
Die Temperatur wird auf die spezifische Anlagerungstemperatur (Ta) der Primer gesenkt. Die Primer — kurze synthetische Oligonukleotide — lagern sich durch komplementäre Basenpaarung an ihre Zielsequenzen auf den Einzelsträngen an. Die optimale Annealing-Temperatur liegt typischerweise 5 °C unterhalb des Schmelzpunkts (Tm) der Primer: Tm ≈ 4°C × (G+C) + 2°C × (A+T). Zu niedrige Ta: unspezifische Bindungen (falsche Produkte); zu hohe Ta: kein Annealing (kein Produkt).

**Schritt 3 — Elongation/Synthese (72 °C, 1 Minute pro 1 kb Produktlänge):**
Bei 72 °C — dem Temperaturoptimum der Taq-Polymerase — synthetisiert das Enzym ausgehend von den Primern neue DNA-Stränge in 5'→3'-Richtung. Die Taq-Polymerase fügt dNTPs entsprechend der Matrizensequenz an. Die Synthesegeschwindigkeit beträgt etwa 1.000 bp/Minute. Am Ende jedes Zyklus liegt die Zielsequenz als Doppelstrang vor.

## Taq-Polymerase — Das Herzstück der PCR

Die **Taq-Polymerase** (aus Thermus aquaticus, isoliert 1976 von Alice Chien) ist hitzestabil bis ca. 95 °C und übersteht daher die Denaturierungsphase unbeschadet. Sie muss nur einmal zu Beginn der PCR zugesetzt werden — der Thermocycler übernimmt alles weitere automatisch. Ohne Taq-Polymerase müsste nach jedem Zyklus manuell neue Polymerase hinzugefügt werden (wie bei frühen PCR-Versionen, die auch deshalb langsam und teuer waren).

Wichtige Eigenschaften der Taq-Polymerase:
- Hitzestabilität: bis ~95 °C stabil
- Syntheserichtung: 5'→3'
- **Keine 3'→5'-Exonuklease-Aktivität (kein Proofreading):** Fehlerrate ~10⁻⁴ bis 10⁻⁵ pro Nukleotid pro Zyklus
- Terminale Transferase-Aktivität: fügt am 3'-Ende ein A-Überhang an (wichtig für TA-Klonierung)

Für Anwendungen, die hohe Genauigkeit erfordern (z. B. Klonierung für Expression), wird die **Pfu-Polymerase** (aus Pyrococcus furiosus) bevorzugt — sie hat eine 3'→5'-Korrekturlesefunktion (Proofreading) und eine 10–20-fach niedrigere Fehlerrate, ist aber langsamer.

## Primerfunktion und -design

Primer sind die eigentlichen Spezifitätsdeterminanten der PCR. Sie definieren, welcher Abschnitt der DNA amplifiziert wird. Anforderungen an gute Primer:
- Länge 18–25 Nukleotide (Spezifität)
- GC-Gehalt 40–60%
- Keine Komplementarität zwischen Vorwärts- und Rückwärtsprimer (vermeidet Primer-Dimere)
- Keine interne Haarnadelstrukturen (Sekundärstrukturen)
- Ähnliche Tm-Werte beider Primer

## PCR-Varianten

**RT-PCR (Reverse Transkriptase-PCR):**
RNA (z. B. mRNA oder virale RNA) kann nicht direkt als PCR-Matrize dienen, da die Taq-Polymerase DNA-abhängig ist. Zunächst wird die RNA durch das Enzym **Reverse Transkriptase** (RNA-abhängige DNA-Polymerase, natürlich in Retroviren vorkommend) in komplementäre DNA (**cDNA**) umgeschrieben. Die cDNA dient dann als PCR-Matrize. Anwendung: Nachweis von RNA-Viren (HIV, SARS-CoV-2, Influenza), Genexpressionsanalyse.

**qPCR / Real-time-PCR (quantitative PCR):**
Bei der qPCR wird die Produktmenge in Echtzeit (real-time) durch Fluoreszenz gemessen. Zwei Nachweisprinzipien:
1. **SYBR Green:** Interkalierender Farbstoff, der in doppelsträngige DNA bindet und fluoresziert — einfach, aber unspezifisch (erkennt jede dsDNA, auch Primer-Dimere)
2. **TaqMan-Sonden:** Sequenzspezifische Sonden mit Fluorophor und Quencher; beim Einbau durch die Taq-Polymerase (5'→3'-Exonuklease-Aktivität) wird das Fluorophor freigesetzt — spezifisch und quantitativ

Der **CT-Wert (Cycle Threshold):** Gibt an, nach wie vielen PCR-Zyklen das Fluoreszenzsignal einen festgelegten Schwellenwert überschreitet. Je mehr Ausgangsmaterial vorhanden ist, desto früher steigt das Signal → niedrigerer CT-Wert. Typisch bei COVID-19:
- CT < 20: sehr hohe Viruslast, hochinfektiös
- CT 20–30: moderate Viruslast
- CT > 35: grenzwertig, geringe oder keine Infektiosität

**RT-qPCR** kombiniert beide: RT-PCR für RNA-Umschreibung + qPCR für Quantifizierung → Goldstandard für SARS-CoV-2-Diagnostik.

**Nested PCR:**
Zwei aufeinanderfolgende PCR-Runden mit zwei Primerpaaren: Das äußere Primerpaar amplifiziert einen großen Bereich; das innere Primerpaar liegt innerhalb des ersten Produkts und wird in der zweiten Runde verwendet. Ergebnis: massive Erhöhung von Spezifität und Sensitivität. Anwendung: Nachweis von HIV-DNA in Zellen mit sehr niedrigem Virusreservoir.

**Allel-spezifische PCR:**
Primer, die exakt auf ein bestimmtes Allel (z. B. eine Punktmutation) ausgerichtet sind. Nur bei perfekter Komplementarität am 3'-Ende des Primers erfolgt Amplifikation. Anwendung: Genotypisierung bekannter SNPs, z. B. Thrombophilie-Tests (Faktor-V-Leiden).

**Multiplex-PCR:**
Mehrere Primerpaare in einem einzigen Reaktionsansatz — gleichzeitige Amplifikation mehrerer Zielsequenzen. Anwendung: Simultane Detektion mehrerer Erreger, STR-Panel für forensische Analyse.

## Klinische Anwendungen der PCR im Überblick

- **Infektionsdiagnostik:** COVID-19, HIV-Viruslast, Tuberkulose (Xpert MTB/RIF), HPV-Genotypisierung, MRSA-Screening, Sepsis-Panel
- **Onkologie:** BCR-ABL-Transkript bei CML (Therapiemonitoring), EGFR-Mutationen bei Lungenkarzinom, BRCA1/2-Diagnostik, Mikrosatelliteninstabilität (MSI)
- **Pränatale Diagnostik:** Nachweis fetaler DNA-Varianten aus Fruchtwasser (Amniozentese) oder cfDNA (zellfreier fetaler DNA im mütterlichen Blut — nicht-invasive Pränataldiagnostik, NIPD)
- **Forensik:** STR-Amplifikation für DNA-Fingerabdruck
- **Transplantationsmedizin:** HLA-Typisierung per PCR-SSP (Sequence-Specific Primers)

## Limitationen der PCR

- **Kontaminationsgefahr:** Bereits kleinste Mengen Fremd-DNA können zu falsch-positiven Ergebnissen führen — strikte Labortrennung essenziell
- **Primerspezifität:** Fehlende Zielsequenz kann nicht nachgewiesen werden — blinde Flecken bei unbekannten Erregern
- **Taq-Fehlerrate:** Für Klonierungsanwendungen ist Proofreading-Polymerase nötig
- **PCR-Inhibitoren:** Blut, Gewebe, Stuhl enthalten Substanzen, die Taq hemmen können (z. B. Hämoglobin, Gallensalze) — Probenaufbereitung wichtig`,

      lernziele: [
        'Die drei PCR-Schritte (Denaturierung, Annealing, Elongation) mit Temperaturen, Dauer und molekularen Vorgängen präzise erklären',
        'Die exponentielle Amplifikation (2ⁿ) berechnen und die Bedeutung der Taq-Polymerase begründen',
        'RT-PCR, qPCR und RT-qPCR unterscheiden und jeweils zwei klinische Anwendungsbeispiele nennen',
        'Den CT-Wert definieren und seine klinische Bedeutung am Beispiel COVID-19 erläutern',
        'Mindestens drei weitere PCR-Varianten (Nested, Allel-spezifisch, Multiplex) erklären',
      ],

      sections: [
        {
          heading: 'Taq-Polymerase — Warum ein Enzym aus einer heißen Quelle?',
          text: 'Normale DNA-Polymerasen aus mesophilen Organismen (z. B. E. coli DNA-Pol I) denaturieren irreversibel bei Temperaturen über 50 °C. Die Taq-Polymerase stammt aus dem thermophilen Bakterium Thermus aquaticus, das in heißen Quellen des Yellowstone-Nationalparks bei 70–75 °C gedeiht. Sie ist bis ca. 95 °C stabil und kehrt nach der Denaturierungsphase bei 72 °C sofort in ihre aktive Konformation zurück. Dies ermöglicht die vollständige Automatisierung im Thermocycler — kein manueller Enzymaustausch zwischen den Zyklen. Ein wesentlicher Nachteil ist die fehlende Korrekturlesefunktion (keine 3\'→5\'-Exonuklease), was bei 30 Zyklen etwa eine Mutation pro 10 kb bedeutet. Für präzise Klonierungen wird daher Pfu-Polymerase (mit Proofreading) eingesetzt, die aber 10-fach langsamer ist.',
          merksatz: 'Taq: hitzestabil (Thermus aquaticus, Yellowstone), kein Proofreading → Fehlerrate 10⁻⁴; Pfu: Proofreading, präziser, langsamer.',
        },
        {
          heading: 'RT-PCR und COVID-19-Diagnostik: Schritt für Schritt',
          text: 'SARS-CoV-2 besitzt ein positiv-strängiges RNA-Genom von ~30.000 Nukleotiden. Der Nachweis per RT-qPCR erfolgt in drei Phasen: (1) RNA-Extraktion aus Nasen-Rachen-Abstrich — Lyse der Virushülle, Bindung der RNA an Silicamembran, Waschen, Elution; (2) Reverse Transkription — die Reverse Transkriptase (RT) schreibt die virale RNA mit einem Random-Hexamer- oder Oligo-dT-Primer in cDNA um; (3) qPCR — zielspezifische Primer amplifizieren Abschnitte des E-Gens (Envelope), N-Gens (Nucleocapsid) oder ORF1ab. TaqMan-Sonden detektieren die Produkte fluoreszenzbasiert. Der CT-Wert des N-Gen-Assays korreliert mit der Infektiosität: CT < 25 → Patient hochwahrscheinlich infektiös; CT > 35 → kaum Infektiosität, möglicherweise RNA-Fragmente toter Viren. Die Sensitivität beträgt >95%, die Spezifität >99,5% — deshalb gilt RT-qPCR als Goldstandard gegenüber Antigen-Schnelltests (Sensitivität ~70–80%).',
          merksatz: 'RT-qPCR COVID-19: RNA-Extraktion → RT (RNA→cDNA) → qPCR mit TaqMan-Sonde → CT-Wert. Niedrigerer CT = höhere Viruslast.',
        },
        {
          heading: 'Mg²⁺ als essenzieller Cofaktor',
          text: 'Magnesiumionen (Mg²⁺) sind unverzichtbar für die katalytische Aktivität der Taq-Polymerase. Mg²⁺ koordiniert die Triphosphatgruppe der einzubauenden dNTPs und stabilisiert den Übergangszustand der Phosphodiesterbindungsbildung. Die optimale Mg²⁺-Konzentration liegt bei 1,5–2,5 mM. Zu viel Mg²⁺: erhöht die Fehlerrate und fördert unspezifische Amplifikation. Zu wenig Mg²⁺: reduziert die Polymeraseaktivität, kein oder schwaches Produkt. EDTA (ein Chelator) hemmt die PCR durch Komplexierung von Mg²⁺ — deshalb darf EDTA nicht in PCR-Puffern enthalten sein.',
          merksatz: 'Mg²⁺: Cofaktor der Taq-Polymerase (1,5–2,5 mM optimal). Zu viel → Fehler; zu wenig → kein Produkt.',
        },
      ],

      merksätze: [
        'PCR-Formel: n Zyklen → 2ⁿ Kopien. 30 Zyklen ≈ 10⁹, 35 Zyklen ≈ 3,4 × 10¹⁰ Kopien.',
        'Drei Phasen: Denaturierung 94–95 °C (H-Brücken brechen) | Annealing 50–68 °C (Primer binden) | Elongation 72 °C (Taq synthetisiert).',
        'Taq-Polymerase: hitzestabil (Thermus aquaticus), kein Proofreading, 5\'→3\'-Synthese, terminale A-Transferase-Aktivität.',
        'Primer: 18–25 nt, flankieren Zielbereich, definieren Spezifität. Tm ≈ 4(G+C) + 2(A+T) °C.',
        'RT-PCR: RNA → (Reverse Transkriptase) → cDNA → Standard-PCR. Für RNA-Viren (HIV, SARS-CoV-2) und Genexpression.',
        'qPCR: Fluoreszenz in Echtzeit (SYBR Green = unspezifisch; TaqMan-Sonde = spezifisch). CT-Wert ∝ 1/Ausgangsmenge.',
        'RT-qPCR: Goldstandard COVID-19-Test. CT < 25 = hochinfektiös; CT > 35 = kaum infektiös.',
        'Nested PCR: 2 Primerpaare, 2 Runden → maximale Sensitivität bei geringer Template-Menge.',
        'Mg²⁺ (1,5–2,5 mM): essenzieller Cofaktor. Fehlt → keine PCR. EDTA hemmt durch Mg²⁺-Chelation.',
        'Pfu-Polymerase: Proofreading (3\'→5\'-Exonuklease), 10–20× niedrigere Fehlerrate als Taq, aber langsamer.',
      ],

      klinischerBezug: 'PCR ist Goldstandard für Infektionsdiagnostik (COVID-19, HIV-VL), Genotypisierung und pränatale Diagnostik.',

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: 'Welche Temperatur wird beim Annealing-Schritt der PCR typischerweise verwendet, und welche molekulare Reaktion findet dabei statt?',
        answer: 'Beim Annealing wird die Temperatur auf 50–68 °C gesenkt. In diesem Schritt lagern sich die kurzen synthetischen Primer (18–25 nt Oligonukleotide) spezifisch an komplementäre Sequenzen der einzelsträngigen Ziel-DNA an (Hybridisierung durch Wasserstoffbrückenbindungen). Die genaue Temperatur hängt vom Schmelzpunkt (Tm) der Primer ab und liegt typischerweise 5 °C darunter. Zu hohe Annealing-Temperatur verhindert Primerbindung, zu niedrige führt zu unspezifischer Amplifikation falscher Sequenzen.',
      },

      selfTest: [
        {
          question: 'Ein Wissenschaftler führt 35 PCR-Zyklen mit einem einzelnen DNA-Ausgangsmolekül durch. Wie viele DNA-Moleküle sind theoretisch nach Abschluss vorhanden?',
          options: [
            '35 Moleküle',
            '70 Moleküle',
            'Etwa 34 Milliarden Moleküle (2³⁵)',
            'Etwa eine Million Moleküle (2²⁰)',
            'Exakt 1.000 Moleküle',
          ],
          correctIndex: 2,
          explanation: 'Nach n Zyklen entstehen 2ⁿ Kopien. 2³⁵ = 34.359.738.368 — etwa 34 Milliarden Moleküle. Die exponentielle Amplifikation (Verdopplung pro Zyklus) ist das Kernprinzip der PCR und ermöglicht den Nachweis selbst kleinster DNA-Mengen (theoretisch ab einem einzigen Molekül). Nach 30 Zyklen sind es bereits ~10⁹ Kopien.',
          hints: [
            'Die Formel lautet 2ⁿ, wobei n die Anzahl der Zyklen ist — pro Zyklus verdoppelt sich die Kopienzahl.',
            '2¹⁰ ≈ 1.000; 2²⁰ ≈ 1 Million; 2³⁰ ≈ 1 Milliarde — für 2³⁵ entsprechend weiterdenken.',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Warum wird bei der PCR die Taq-Polymerase anstelle einer normalen E.-coli-DNA-Polymerase verwendet?',
          options: [
            'Taq-Polymerase hat eine bessere Korrekturlesefunktion (Proofreading)',
            'Taq-Polymerase ist hitzestabil und übersteht die Denaturierungsphase bei 94–95 °C unbeschadet',
            'Taq-Polymerase kann RNA direkt als Matrize nutzen',
            'Taq-Polymerase arbeitet bei Raumtemperatur und spart Energie',
            'Taq-Polymerase synthetisiert in 3\'→5\'-Richtung',
          ],
          correctIndex: 1,
          explanation: 'Die Taq-Polymerase aus Thermus aquaticus ist bis ca. 95 °C stabil. Normale Polymerasen (z. B. E.-coli-Pol I) denaturieren bei diesen Temperaturen irreversibel. Die Hitzestabilität ermöglicht die vollautomatische Durchführung im Thermocycler, ohne nach jedem Zyklus neues Enzym hinzufügen zu müssen. Taq hat kein Proofreading (höhere Fehlerrate als Pfu) und synthetisiert wie alle DNA-Polymerasen in 5\'→3\'-Richtung.',
          hints: [
            'Thermus aquaticus lebt in heißen Quellen des Yellowstone-Nationalparks — was folgt daraus für seine Proteine?',
            'Was passiert mit normalen Proteinen bei 95 °C? Und warum wäre das für die PCR problematisch?',
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Ein Labor möchte den RNA-Gehalt des SARS-CoV-2-Virus in einem Patientenabstrich quantifizieren. Welche PCR-Variante ist am besten geeignet?',
          options: [
            'Standard-PCR mit anschließender Gelelektrophorese',
            'Nested PCR mit zwei Primerpaaren',
            'RT-qPCR (Reverse Transkriptase quantitative PCR)',
            'Allel-spezifische PCR',
            'Multiplex-PCR mit fünf Primern',
          ],
          correctIndex: 2,
          explanation: 'RT-qPCR kombiniert Reverse Transkription (RNA→cDNA, nötig da SARS-CoV-2 ein RNA-Virus ist) mit quantitativer Echtzeit-PCR (Fluoreszenzbasierte Mengenmessung). Der CT-Wert korreliert invers mit der Ausgangsmenge an Virus-RNA. Standard-PCR ist nicht quantitativ; Nested PCR erhöht Sensitivität, nicht Quantifizierbarkeit; allel-spezifische PCR dient der Genotypisierung.',
          hints: [
            'SARS-CoV-2 hat ein RNA-Genom — welcher Schritt muss vor der eigentlichen PCR stattfinden?',
            'Das "q" in qPCR steht für quantitativ, "RT" für Reverse Transkriptase — welche Methode vereint beides?',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'In welcher Reihenfolge finden die Schritte eines PCR-Zyklus statt?',
          options: [
            'Annealing → Denaturierung → Elongation',
            'Elongation → Annealing → Denaturierung',
            'Denaturierung → Elongation → Annealing',
            'Denaturierung → Annealing → Elongation',
            'Annealing → Elongation → Denaturierung',
          ],
          correctIndex: 3,
          explanation: 'Ein PCR-Zyklus folgt immer: (1) Denaturierung 94–95 °C — Stränge trennen; (2) Annealing 50–68 °C — Primer hybridisieren; (3) Elongation 72 °C — Taq synthetisiert neuen Strang. Diese Abfolge wird 25–40 Mal wiederholt. Zuerst muss die doppelsträngige DNA in Einzelstränge getrennt werden (Denaturierung), bevor Primer binden können (Annealing) und die Polymerase mit der Synthese beginnen kann (Elongation).',
          hints: [
            'Zuerst muss die DNA als Doppelstrang aufgetrennt werden — welcher Schritt erreicht das?',
            'Die Taq-Polymerase kann erst nach der Primerbindung ihren Job beginnen — was kommt also zuerst?',
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Bei der RT-PCR wird das Enzym Reverse Transkriptase verwendet. Was ist die Funktion dieses Enzyms?',
          options: [
            'Es denaturiert die RNA bei hohen Temperaturen vor der PCR',
            'Es synthetisiert RNA aus einer DNA-Matrize (Transkription)',
            'Es synthetisiert cDNA aus einer RNA-Matrize (RNA→DNA)',
            'Es repariert Einzelstrangbrüche in der Matrizen-DNA',
            'Es phosphoryliert die Primer vor dem Annealing',
          ],
          correctIndex: 2,
          explanation: 'Reverse Transkriptase ist eine RNA-abhängige DNA-Polymerase, die natürlich in Retroviren (z. B. HIV) vorkommt. Sie schreibt RNA in komplementäre DNA (cDNA) um — also entgegen dem normalen Informationsfluss (DNA→RNA→Protein, Crick\'sches Zentraldogma). Die erzeugte cDNA dient dann als Matrize für die Standard-PCR. Retrotranskription: RNA + Primer → RNA:DNA-Hybrid → einzelsträngige cDNA → doppelsträngige cDNA.',
          hints: [
            'Das Enzym stammt aus Retroviren wie HIV — was macht HIV mit seinem RNA-Genom?',
            'Das Präfix "Revers-" deutet auf die umgekehrte Richtung hin: entgegen dem normalen Informationsfluss.',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ist der Unterschied zwischen SYBR Green und TaqMan-Sonden bei der qPCR?',
          options: [
            'SYBR Green ist spezifischer; TaqMan-Sonden sind unspezifisch',
            'TaqMan-Sonden erkennen jede doppelsträngige DNA; SYBR Green erkennt nur Zielsequenzen',
            'SYBR Green interkaliert in alle dsDNA (unspezifisch); TaqMan-Sonden sind sequenzspezifisch (spezifisch)',
            'Beide sind identisch — nur verschiedene Handelsnamen',
            'SYBR Green misst nur nach der PCR; TaqMan-Sonden erlauben keine Echtzeitmessung',
          ],
          correctIndex: 2,
          explanation: 'SYBR Green ist ein Fluoreszenzfarbstoff, der unspezifisch in jede doppelsträngige DNA interkaliert — er fluoresziert bei jeder Amplifikation, also auch bei Primer-Dimeren oder unspezifischen Produkten. TaqMan-Sonden sind sequenzspezifische Oligonukleotide mit einem Fluorophor am 5\'-Ende und einem Quencher am 3\'-Ende. Solange die Sonde intakt ist, dämpft der Quencher die Fluoreszenz. Die 5\'→3\'-Exonuklease-Aktivität der Taq-Polymerase spaltet die Sonde beim Passieren → Fluorophor wird freigesetzt → Signal. Daher: TaqMan = spezifisch, für klinische Diagnostik bevorzugt.',
          hints: [
            'Was würde passieren, wenn ein unspezifisches PCR-Produkt entsteht — würde SYBR Green oder TaqMan darauf anschlagen?',
            'TaqMan-Sonden haben einen Quencher — was passiert mit dem Fluoreszenz-Signal, wenn die Sonde intakt ist vs. gespalten wird?',
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: 'Ein Patient mit Verdacht auf CML (chronische myeloische Leukämie) wird nach Therapiebeginn mit Imatinib (BCR-ABL-Tyrosinkinasehemmer) überwacht. Welche PCR-Methode wird zur Therapiekontrolle eingesetzt und was wird gemessen?',
          options: [
            'Standard-PCR zur Detektion der BCR-ABL-DNA-Mutation',
            'RT-qPCR zur Quantifizierung des BCR-ABL-Fusionstranskripts (mRNA)',
            'Nested PCR zur Sequenzierung des ABL-Kinase-Domäne-Gens',
            'Allel-spezifische PCR zur Bestimmung der Philadelphia-Chromosom-Kopienzahl',
            'Multiplex-PCR zur simultanen Detektion von BCR-ABL und JAK2',
          ],
          correctIndex: 1,
          explanation: 'Bei CML entsteht durch t(9;22) das Philadelphia-Chromosom mit dem BCR-ABL-Fusionsgen, das eine konstitutiv aktive Tyrosinkinase kodiert. Zur Therapiekontrolle wird RT-qPCR eingesetzt: Die BCR-ABL-mRNA wird in cDNA umgeschrieben und per qPCR quantifiziert. Das Ergebnis wird als prozentualer Anteil am internationalen Standard (IS) ausgedrückt. Ein Rückgang auf ≤0,1% (MR3.0, "Major Molecular Response") gilt als gutes Therapieansprechen. Bei Therapieversagen steigt der BCR-ABL-Wert an — ein Signal für Resistenz.',
          hints: [
            'CML wird durch das BCR-ABL-Fusionsgen verursacht — was produziert dieses Gen?',
            'Zur Quantifizierung von mRNA-Transkripten ist welche PCR-Kombination nötig?',
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: 'Warum ist die Mg²⁺-Konzentration im PCR-Puffer kritisch für das Ergebnis?',
          options: [
            'Mg²⁺ stabilisiert die doppelsträngige DNA und verhindert Denaturierung',
            'Mg²⁺ ist Cofaktor der Taq-Polymerase; zu viel fördert unspezifische Amplifikation, zu wenig inhibiert die Polymerase',
            'Mg²⁺ puffert den pH-Wert im Reaktionsansatz',
            'Mg²⁺ verhindert die Bildung von Primer-Dimeren',
            'Mg²⁺ erhöht die Schmelztemperatur der Primer',
          ],
          correctIndex: 1,
          explanation: 'Mg²⁺ ist ein essenzieller Cofaktor der Taq-Polymerase: Es koordiniert die Triphosphatgruppe der eingehenden dNTPs und stabilisiert den katalytischen Übergangszustand der Phosphodiesterbindungsbildung. Optimale Konzentration: 1,5–2,5 mM. Zu viel Mg²⁺ (>3 mM): erhöhte Fehlerrate, mehr unspezifische Produkte (niedrigere Stringenz). Zu wenig Mg²⁺ (<1 mM): Polymerase inaktiv, kein oder schwaches Produkt. EDTA hemmt PCR durch Mg²⁺-Chelation.',
          hints: [
            'Cofaktor bedeutet, dass das Enzym ohne ihn nicht funktioniert — was ist die Konsequenz bei zu wenig Mg²⁺?',
            'Bei zu hoher Mg²⁺-Konzentration bindet die Polymerase auch an nicht-perfekt-komplementäre Sequenzen — welcher Begriff beschreibt das?',
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UK bio-7-02: DNA-Sequenzierung
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'bio-7-02',
      title: 'DNA-Sequenzierung — Sanger, NGS und Nanopore',
      content: `## DNA-Sequenzierung — Vom Sanger-Verfahren zur Genommedizin

Die DNA-Sequenzierung — also die Bestimmung der exakten Basenfolge (A, T, G, C) eines DNA-Abschnitts — hat die Biologie und Medizin revolutioniert. Seit dem ersten vollständig sequenzierten Menschengenom (Human Genome Project, 2003, Kosten ~3 Milliarden USD, Dauer ~13 Jahre) erlaubt die Technologie heute die Sequenzierung eines kompletten Genoms in 24 Stunden für wenige hundert Euro. Dies ist das Ergebnis mehrerer Technologiegenerationen.

## Sanger-Sequenzierung (1977, 1. Generation)

Die **Sanger-Sequenzierung** (Frederick Sanger, Nobelpreis 1980) basiert auf dem Einbau von **Didesoxynukleosidtriphosphaten (ddNTPs)** als Kettenabbrecher. Das Prinzip:

1. **Reaktionsansatz:** Template-DNA + Primer + DNA-Polymerase + dNTPs (normal) + ddNTPs (Kettenabbrecher, 4 Farben: ddATP, ddTTP, ddGTP, ddCTP in einem modernen Kapillaransatz)
2. **Elongation:** Die Polymerase synthetisiert neue Stränge; bei zufälligem Einbau eines ddNTP (fehlt die 3'-OH-Gruppe) bricht die Synthese ab — es entstehen Fragmente unterschiedlicher Länge, deren Ende jeweils ein fluoreszenzmarkiertes ddNTP ist
3. **Kapillarelektrophorese:** Die Fragmente wandern durch ein Kapillarpolymer nach Größe getrennt; ein Laser detektiert die Fluoreszenzfarbe am Ende jedes Fragments → direkte Ablesung der Sequenz

**Leistung:** Reads von 500–1.000 bp, hohe Genauigkeit (>99,9%), Kosten ~1 € pro 1.000 bp. Ideal für Einzelgen-Sequenzierung (z. B. Bestätigung einer Punktmutation, BRCA1/2-Gendiagnostik). Standardmethode für Sanger-Sequenzierungen im klinischen Labor.

## Next-Generation Sequencing (NGS, 2. Generation)

**NGS** (auch: Massively Parallel Sequencing, MPS) ermöglicht die gleichzeitige Sequenzierung von Millionen bis Milliarden DNA-Fragmenten in einem Lauf — daher der Begriff "massiv parallel".

**Illumina — Sequencing by Synthesis (SBS):**
Das marktführende NGS-Verfahren. Schritte:
1. **Library Preparation:** DNA wird fragmentiert, Adapter-Oligonukleotide werden an beide Enden ligiert
2. **Cluster-Amplifikation (Bridge PCR):** Fragmente binden an eine Flusszelle (flow cell), werden durch Brücken-PCR zu Clustern aus ~1.000 identischen Kopien amplifiziert — erhöht das Fluoreszenzsignal
3. **Sequencing by Synthesis:** Reversibel blockierte, fluoreszenzmarkierte dNTPs (je Farbe eine Base) werden eingebaut; nach jedem Einbau wird die Farbe detektiert und die Blockierung entfernt → Schritt für Schritt
4. **Bioinformatische Auswertung:** Short Reads (150–300 bp) werden auf ein Referenzgenom gemappt; Varianten werden per Variant Calling identifiziert

**Ion Torrent (Life Technologies):** Misst pH-Änderungen (H⁺-Freisetzung beim dNTP-Einbau) statt Fluoreszenz — schneller, ohne Optik, aber anfällig bei Homopolymeren.

**454-Pyrosequenzierung (Roche, historisch):** Erste kommerzielle NGS-Plattform (2005, nicht mehr aktiv). Detektiert Pyrophosphat-Freisetzung beim dNTP-Einbau über Luziferin-Reaktion.

## Nanopore-Sequenzierung (3. Generation, Oxford Nanopore)

Die **Nanopore-Sequenzierung** liest DNA-Sequenzen in Echtzeit an einem Nanoporen-Protein (MspA, CsgG). Das Prinzip:
- Ein einzelnes DNA-Molekül wird durch eine Nanopore in einer Membran gefädelt
- Beim Durchtritt jeder Base ändert sich der ionische Strom durch die Pore charakteristisch
- Ein Algorithmus (Basecaller, z. B. Guppy) übersetzt die Stromsignale in Basensequenzen

**Vorteile:** Sehr lange Reads (10 kb – 2 Mb), Echtzeitanalyse, portables Gerät (MinION, USB-Stick-Größe), kann native DNA sequenzieren (keine Amplifikation nötig) — ermöglicht auch Detektion von Methylierungen (epigenetische Markierungen).
**Nachteile:** Höhere Fehlerrate (~5–10% bei einzelnen Reads, wird durch Hochabdeckung kompensiert).

## Bioinformatische Auswertung

Jedes Sequenzierungsexperiment produziert massive Datenmengen (Exom: ~5 GB, Gesamtgenom: ~100 GB). Standardpipeline:
1. **Qualitätskontrolle:** FastQC, Trimming schlechter Basen
2. **Mapping/Alignment:** Reads werden auf das humane Referenzgenom (GRCh38) ausgerichtet (Tools: BWA, STAR für RNA)
3. **Variant Calling:** Identifizierung von SNVs (Einzelbasenaustausche), Indels, Kopienzahlvarianten (CNVs) — Tools: GATK HaplotypeCaller, DeepVariant
4. **Annotation:** Varianten werden klassifiziert (pathogen/benign/unbekannte Signifikanz — VUS) nach ClinVar, OMIM, ACMG-Kriterien

## Klinische Anwendungen

- **Exomsequenzierung (WES):** Sequenzierung aller ~22.000 Exons (~1,5% des Genoms); erste Wahl bei unklaren genetischen Syndromen — Diagnoseausbeute ~25–40% bei bisher ungelösten Fällen
- **Tumor-NGS (Liquid Biopsy):** Analyse von Tumorbiopsien auf somatische Mutationen (EGFR, KRAS, BRAF, PIK3CA) für zielgerichtete Therapien; zirkulierende Tumor-DNA (ctDNA) im Blut für nicht-invasives Monitoring
- **Pharmakogenomik:** CYP2D6-, CYP2C19-Genotypisierung zur Vorhersage von Medikamentenstoffwechsel (z. B. Codein-Metabolisierung, Clopidogrel-Aktivierung)
- **Infektionserreger-Diagnostik:** Metagenomisches Sequenzieren von Liquor/BAL bei unklarer Meningitis/Pneumonie — detektiert alle Erreger ohne vorherigen Verdacht`,

      lernziele: [
        'Das Sanger-Verfahren mit der Funktion von ddNTPs als Kettenabbrecher und der Kapillarelektrophorese erklären',
        'Den NGS-Ablauf (Illumina SBS) von der Library Preparation bis zum Variant Calling in Grundzügen darstellen',
        'Die Nanopore-Sequenzierung vom NGS in Bezug auf Read-Länge, Fehlerrate und Portabilität abgrenzen',
        'Klinische Indikationen für Exomsequenzierung, Tumor-NGS und Pharmakogenomik nennen',
        'Den Unterschied zwischen SNV, Indel und CNV als Variationstypen erläutern',
      ],

      sections: [
        {
          heading: 'Sanger vs. NGS — Wann welche Methode?',
          text: 'Die Sanger-Sequenzierung ist für gezielte Einzelgenanalysen nach wie vor die erste Wahl: hohe Genauigkeit, einfache Auswertung, keine aufwendige Bioinformatik. Typische Indikation: Bestätigung einer bereits bekannten Pathogenmutation (z. B. CFTR-Exon 10 bei Mukoviszidose-Verdacht) oder Sequenzierung eines kurzen Abschnitts (PCR-Produkt-Sequenzierung). NGS ist dann überlegen, wenn viele Gene gleichzeitig untersucht werden müssen: Gendiagnostikpanel (z. B. Kardiomyopathie-Panel mit 50+ Genen), Exomsequenzierung bei unklarem Syndrom, oder Tumorsequenzierung. Die Kosten für ein klinisches NGS-Panel (~500 Gene, ~200 €) sind heute deutlich günstiger als die sukzessive Sanger-Sequenzierung von 500 Einzelgenen.',
          merksatz: 'Sanger: Einzelgen, hohe Präzision, kein Bioinformatik-Aufwand. NGS: viele Gene parallel, große Datenmenge, Bioinformatik nötig.',
        },
        {
          heading: 'Variant Calling und klinische Interpretation',
          text: 'NGS-Daten liefern pro Probe Tausende von Varianten — die meisten sind benigne Polymorphismen (SNPs), die in der Bevölkerung häufig sind (>1% Frequenz in gnomAD). Die klinische Herausforderung ist die Interpretation seltener Varianten. Die ACMG/AMP-Klassifikation (American College of Medical Genetics) teilt Varianten in fünf Klassen ein: (1) Pathogen, (2) Wahrscheinlich pathogen, (3) Unbekannte Signifikanz (VUS), (4) Wahrscheinlich benigne, (5) Benigne. VUS stellen klinisch eine Herausforderung dar, da weder Diagnose noch Ausschluss möglich ist. Datenbankresourcen: ClinVar (klinische Varianten), gnomAD (Populationsfrequenzen), OMIM (Phänotyp-Gen-Assoziationen).',
          merksatz: 'ACMG-Klassifikation: Pathogen → Benigne (5 Klassen). VUS = unbekannte Signifikanz — klinisch nicht handlungsweisend ohne weitere Evidenz.',
        },
        {
          heading: 'Nanopore in der Klinik — Ausbruchsdiagnostik und Direktsequenzierung',
          text: 'Das Oxford Nanopore MinION-Gerät (USB-Stick-Format) hat die Point-of-Care-Sequenzierung ermöglicht. Während der COVID-19-Pandemie wurde es für das ARTIC-Protokoll genutzt: SARS-CoV-2-Genome wurden innerhalb von 6–8 Stunden sequenziert, um neue Varianten (Alpha, Delta, Omikron) frühzeitig zu identifizieren. In Ländern mit eingeschränkter Laborinfrastruktur wird MinION für Ebola-Ausbruchsdiagnostik eingesetzt. Die langen Reads der Nanopore-Technologie erlauben zudem die direkte Phasierung (Haplotyping) von Heterozygoten und die Charakterisierung struktureller Varianten, die mit Short-Read-NGS schwer zu erfassen sind.',
          merksatz: 'Nanopore: lange Reads (>10 kb), portabel (MinION), Echtzeit, hohe Fehlerrate. Gut für Strukturvarianten, Methylierungsanalyse, Ausbruchsdiagnostik.',
        },
      ],

      merksätze: [
        'Sanger-Sequenzierung: ddNTPs brechen die Kette ab (kein 3\'-OH) → Fragmente verschiedener Länge → Kapillarelektrophorese → Sequenz.',
        'NGS (Illumina): Library-Prep → Cluster-Amplifikation (Bridge-PCR) → Sequencing by Synthesis (reversibel blockierte dNTPs) → Short Reads 150–300 bp.',
        'Exomsequenzierung (WES): nur Exons (~1,5% des Genoms) → Diagnoseausbeute ~25–40% bei unklaren genetischen Erkrankungen.',
        'Nanopore: einzelne DNA-Moleküle passieren Proteinpore → Ionenstromänderung → Basensequenz. Reads bis 2 Mb, aber ~5% Fehlerrate.',
        'Variant Calling: SNV (Einzelbase), Indel (Insertion/Deletion), CNV (Kopienzahlvariation) — alle drei klinisch relevant.',
        'ACMG-Klassen: Pathogen | Wahrsch. pathogen | VUS | Wahrsch. benigne | Benigne. VUS = unklare Bedeutung.',
        'Pharmakogenomik: CYP2D6 (Codein-Metabolismus), CYP2C19 (Clopidogrel-Aktivierung) — NGS-basierte Typisierung optimiert Dosierung.',
        'Liquid Biopsy: ctDNA im Blut — nicht-invasives Tumormonitoring, Resistenzmutationsnachweis ohne Rebiopsie.',
        'gnomAD: Datenbank mit Allelhäufigkeiten aus >140.000 Genomen — hilft bei Unterscheidung von pathogenen Varianten vs. häufigen Polymorphismen.',
        'Human Genome Project (abgeschlossen 2003): 3 Milliarden USD, 13 Jahre. Heute: komplettes Genom in 24 h für ~300 €.',
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: 'Erklären Sie das Prinzip der Sanger-Sequenzierung. Welche Rolle spielen ddNTPs, und wie unterscheidet sich das Verfahren von der NGS (Illumina)?',
        answer: 'Die Sanger-Sequenzierung nutzt Didesoxynukleosidtriphosphate (ddNTPs), die im Gegensatz zu normalen dNTPs keine 3\'-OH-Gruppe besitzen. Wird ein ddNTP von der DNA-Polymerase eingebaut, kann keine weitere Phosphodiesterbindung geknüpft werden — die Kettensynthese bricht ab. In einem Ansatz mit allen vier ddNTPs (fluoreszenzmarkiert je Base) entstehen Fragmente jeder möglichen Länge, wobei das 3\'-Ende jeweils ein farbiges ddNTP trägt. Kapillarelektrophorese trennt die Fragmente nach Größe; ein Laser liest die Farbensequenz und leitet daraus die Basensequenz ab. Reads: 500–1.000 bp, sehr hohe Genauigkeit. Im Gegensatz dazu sequenziert Illumina-NGS Millionen kurze Fragmente (150–300 bp) gleichzeitig (massiv parallel) durch reversibel blockierte Fluoreszenz-dNTPs — viel höherer Durchsatz, aber kürzere Reads und Bedarf an bioinformatischer Auswertung.',
      },

      klinischerBezug: 'Exomsequenzierung liefert bei unklaren genetischen Syndromen in ~30% einen Diagnosebefund; Tumor-NGS ermöglicht zielgerichtete Therapiewahl.',

      selfTest: [
        {
          question: 'Welche Funktion haben ddNTPs (Didesoxynukleosidtriphosphate) bei der Sanger-Sequenzierung?',
          options: [
            'Sie markieren den Startpunkt der DNA-Synthese fluoreszenzbasiert',
            'Sie binden an die Matrizen-DNA und verhindern die Denaturierung',
            'Sie brechen die DNA-Kettensynthese ab, da ihnen die 3\'-OH-Gruppe fehlt',
            'Sie erhöhen die Spezifität der Primer-Hybridisierung',
            'Sie sind Cofaktoren der DNA-Polymerase bei hohen Temperaturen',
          ],
          correctIndex: 2,
          explanation: 'ddNTPs (Didesoxynukleosidtriphosphate) fehlt die 3\'-Hydroxylgruppe, die für die Bildung der nächsten Phosphodiesterbindung nötig ist. Wird ein ddNTP eingebaut, kann keine weitere Base angehängt werden — die Synthese bricht ab. Da alle vier ddNTPs unterschiedlich fluoreszenzmarkiert sind und zufällig eingebaut werden, entstehen Fragmente jeder möglichen Länge, wobei das 3\'-Ende die Farbe der letzten Base kodiert. Kapillarelektrophorese trennt nach Länge und ein Laser liest die Farbsequenz → Basensequenz ablesbar.',
          hints: [
            'Das Präfix "Di-desoxy-" bedeutet, dass zwei Hydroxylgruppen fehlen — welche Gruppe am 3\'-Ende ist für die Kettenverlängerung essenziell?',
            'Vergleiche ddNTP mit dNTP: was ist der strukturelle Unterschied und was folgt für die Polymerase?',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ist der Hauptvorteil der NGS (Next-Generation Sequencing) gegenüber der Sanger-Sequenzierung?',
          options: [
            'NGS liefert längere Reads (>5.000 bp) als Sanger',
            'NGS sequenziert Millionen Fragmente gleichzeitig (massiv parallel) und ist damit kostengünstiger pro Base',
            'NGS erfordert keine Bioinformatik zur Auswertung',
            'NGS hat eine niedrigere Fehlerrate als Sanger',
            'NGS kann RNA direkt ohne Reverse Transkription sequenzieren',
          ],
          correctIndex: 1,
          explanation: 'Der entscheidende Vorteil von NGS ist die massiv parallele Sequenzierung: Anstatt ein Fragment nach dem anderen (wie bei Sanger) werden Millionen bis Milliarden Fragmente gleichzeitig sequenziert. Dies reduziert die Kosten pro Base dramatisch. Sanger liefert tatsächlich längere Reads (500–1.000 bp) und ist präziser — NGS-Short-Reads sind nur 150–300 bp lang und erfordern umfangreiche Bioinformatik für das Mapping auf ein Referenzgenom.',
          hints: [
            'Der Name "Massively Parallel Sequencing" beschreibt den Kernvorteil — was bedeutet "parallel" in diesem Kontext?',
            'Stell dir vor, ein ganzes Menschengenom (3 Milliarden bp) müsste per Sanger sequenziert werden — wie lange im Vergleich zu NGS?',
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Ein Arzt behandelt einen Patienten mit Lungenkrebs. Welche Sequenziermethode ist für die Auswahl einer zielgerichteten Therapie am sinnvollsten?',
          options: [
            'Sanger-Sequenzierung des EGFR-Gens Exon 19',
            'Exomsequenzierung aller ~22.000 Gene',
            'Tumor-NGS-Panel für klinisch relevante Onkogene (EGFR, KRAS, ALK, ROS1, BRAF)',
            'Nanopore-Sequenzierung des gesamten Genoms',
            'Northern Blot zur mRNA-Expressionsanalyse',
          ],
          correctIndex: 2,
          explanation: 'Beim Lungenkarzinom stehen zielgerichtete Therapien zur Verfügung, deren Wirksamkeit von spezifischen Mutationen abhängt: EGFR-Mutationen → EGFR-Inhibitoren (Erlotinib, Osimertinib); ALK-Fusionen → ALK-Inhibitoren (Crizotinib); KRAS G12C → Sotorasib. Ein klinisches NGS-Panel analysiert simultan alle relevanten Genloci aus der Tumorbiopsie in einem Lauf. Sanger wäre für viele Gene zu langsam; Exomsequenzierung ist überdimensioniert und klinisch unüblich für reine Therapieentscheidung; Nanopore wird klinisch selten eingesetzt.',
          hints: [
            'Beim Lungenkarzinom gibt es viele verschiedene genomische Treibermutationen — welche Methode analysiert mehrere Gene gleichzeitig?',
            'Welche zielgerichtete Therapie funktioniert nur, wenn die passende Mutation in einem relevanten Gen nachgewiesen wurde?',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was beschreibt die ACMG-Klassifikation für genetische Varianten?',
          options: [
            'Eine Einteilung von Genmutationen nach ihrer Lokalisation im Exon oder Intron',
            'Ein System zur Bewertung der Varianten in fünf Klassen von pathogen bis benigne (inkl. VUS)',
            'Eine Methode zur Berechnung der Allelfrequenz in der Bevölkerung',
            'Ein NGS-Qualitätsstandard für die Read-Tiefe bei klinischen Analysen',
            'Eine Klassifikation des Erbgangs (autosomal-dominant, rezessiv etc.)',
          ],
          correctIndex: 1,
          explanation: 'Die ACMG/AMP-Klassifikation kategorisiert genetische Varianten in fünf Klassen: (1) Pathogen — kausal; (2) Wahrscheinlich pathogen; (3) VUS (Variant of Uncertain Significance) — unklare Bedeutung; (4) Wahrscheinlich benigne; (5) Benigne. VUS sind klinisch problematisch: Sie erlauben keine therapeutischen Schlussfolgerungen. Die Klassifikation basiert auf Allelfrequenz (gnomAD), funktionellen Studien, Co-Segregation und Daten aus ClinVar.',
          hints: [
            'ACMG steht für American College of Medical Genetics — welches Problem in der NGS-Diagnostik hat dieses Gremium standardisiert?',
            'VUS ist eine der fünf Klassen — was ist das klinische Problem bei einer VUS-Diagnose?',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welches Prinzip liegt der Nanopore-Sequenzierung zugrunde?',
          options: [
            'Fluoreszenzmarkierte ddNTPs werden eingebaut und nach Farbe detektiert',
            'DNA-Fragmente binden an eine Flusszelle und werden durch Bridge-PCR amplifiziert',
            'DNA-Einzelmoleküle passieren eine Proteinpore; jede Base erzeugt eine charakteristische Änderung des Ionenstroms',
            'Pyrophosphat-Freisetzung beim dNTP-Einbau wird durch Luziferin-Reaktion detektiert',
            'pH-Änderungen (H⁺-Freisetzung) beim dNTP-Einbau werden von Ionen-sensitiven Transistoren gemessen',
          ],
          correctIndex: 2,
          explanation: 'Die Nanopore-Sequenzierung (Oxford Nanopore Technologies) basiert auf dem Durchtritt einzelner DNA-Moleküle durch eine Proteinpore in einer Lipidmembran. Beim Durchtritt jeder Base wird der Ionenstrom durch die Pore charakteristisch verändert. Ein bioinformatischer Algorithmus (Basecaller) übersetzt die Stromsignale in Basensequenzen. Option A beschreibt Sanger; B ist Illumina; D ist 454-Pyrosequenzierung; E ist Ion Torrent. Vorteile der Nanopore: sehr lange Reads (bis 2 Mb), Echtzeit, portabel (MinION).',
          hints: [
            'Das Prinzip basiert auf elektrischen Messungen — welche physikalische Größe ändert sich beim Durchtritt einer Base durch eine winzige Pore?',
            'Nanopore = Proteinpore in einer Membran; was passiert mit dem Ionenstrom, wenn ein DNA-Strang hindurchfädelt?',
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: 'Ein Forschungsteam führt eine Exomsequenzierung bei einem Kind mit unklarer intellektueller Behinderung durch. Welche Aussage ist korrekt?',
          options: [
            'Die Exomsequenzierung analysiert 100% der genomischen DNA',
            'Die Exomsequenzierung sequenziert nur die ~22.000 Exons (~1,5% des Genoms) und liefert bei ~25–40% der Fälle eine Diagnose',
            'Die Exomsequenzierung kann keine Kopienzahlvarianten (CNVs) detektieren',
            'Die Exomsequenzierung ist bei allen genetischen Erkrankungen der erste diagnostische Schritt',
            'Die Exomsequenzierung identifiziert ausschließlich autosomal-dominante Mutationen',
          ],
          correctIndex: 1,
          explanation: 'Die Exomsequenzierung (WES) analysiert selektiv alle ~22.000 Exons — das entspricht nur ~1,5% des Genoms, enthält aber ~85% aller bekannten krankheitsverursachenden Mutationen. Die Diagnoseausbeute bei Kindern mit unklarer Entwicklungsstörung liegt bei ~25–40%. WES ist kein Erstlinientest (vorher: Chromosomenanalyse, spezifische Panels), aber ein wichtiges Diagnosewerkzeug für ungelöste Fälle.',
          hints: [
            '"Exom" = alle Exons — welchen Anteil am Gesamtgenom (~3 Mrd. bp) macht das aus?',
            'Wenn die meisten Krankheitsmutationen in kodierenden Regionen liegen — warum ist WES kostengünstiger als Gesamtgenomsequenzierung?',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ist Pharmakogenomik und welches Enzym ist klinisch am bedeutsamsten?',
          options: [
            'Pharmakogenomik untersucht, wie Medikamente die Genexpression verändern',
            'Pharmakogenomik analysiert genetische Varianten in arzneimittel-metabolisierenden Enzymen (z. B. CYP2D6) zur personalisierten Dosierung',
            'Pharmakogenomik beschreibt die Entwicklung von Gentherapeutika',
            'Pharmakogenomik nutzt CRISPR zur Modifikation von Metabolismusgenen',
            'Pharmakogenomik ist ein Verfahren zur NGS-Qualitätskontrolle',
          ],
          correctIndex: 1,
          explanation: 'Pharmakogenomik untersucht, wie genetische Varianten den Arzneimittelmetabolismus beeinflussen. CYP2D6 metabolisiert ~25% aller Arzneimittel. Poor Metabolizer (PM): kein aktives CYP2D6 → Codein wird nicht zu Morphin aktiviert → keine Analgesie, aber auch reduzierte Nebenwirkungen. Ultra-Rapid Metabolizer (UM): sehr schneller Abbau → Unterdosierung. CYP2C19 bestimmt Clopidogrel-Aktivierung (Prodrug → aktive Form). NGS-basierte Pharmakogenomik-Panels ermöglichen präventive Typisierung vor Erstverordnung.',
          hints: [
            'CYP2D6 metabolisiert Codein zu Morphin — was passiert bei einem Poor Metabolizer mit der Schmerztherapie?',
            'Pharmako- (Arzneimittel) + Genomik = wie beeinflusst das individuelle Genom die Medikamentenwirkung?',
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UK bio-7-03: Gel-Elektrophorese und Blot-Techniken
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'bio-7-03',
      title: 'Gel-Elektrophorese, Restriktionsenzyme und Blot-Techniken',
      content: `## Gel-Elektrophorese — Trennung von Nukleinsäuren nach Größe

Die **Agarosegel-Elektrophorese** ist eine der grundlegendsten Methoden der Molekularbiologie. Sie trennt DNA- (oder RNA-)Fragmente nach ihrer Größe in einem elektrischen Feld.

**Prinzip:**
- Agarose (aus Meeresalgen gewonnenes Polysaccharid) wird in Puffer (TAE oder TBE) aufgekocht und in eine Form gegossen; beim Abkühlen bildet sich ein poröses Gel
- DNA ist durch die Phosphatgruppen im Rückgrat negativ geladen → wandert im elektrischen Feld zur Anode (+)
- Kleine Fragmente wandern schneller durch die Poren des Gels als große → Trennung nach Größe
- Visualisierung: Ethidiumbromid (interkalierende Substanz, fluoresziert unter UV-Licht, mutagen!) oder modernere Farbstoffe (SYBR Safe, GelRed)
- **Größenmarker (Ladder):** DNA-Fragmente bekannter Größe werden parallel aufgetragen → Abschätzung der Fragmentgrößen der Proben

**Agarosekonzentration:** 0,5–1% für große Fragmente (>5 kb); 2–3% für kleine Fragmente (<500 bp). Je höher die Konzentration, desto enger die Poren → bessere Auflösung kleiner Fragmente.

## Restriktionsenzyme (Restriktionsendonukleasen)

**Restriktionsenzyme** sind bakterielle Enzyme, die doppelsträngige DNA an spezifischen Erkennungssequenzen schneiden — sie schützen Bakterien vor Fremd-DNA (Phagen). Für die Molekularbiologie sind sie unverzichtbare Werkzeuge.

Eigenschaften:
- Erkennen kurze (4–8 bp) **palindromische Sequenzen** (lesen auf beiden Strängen in 5'→3'-Richtung gleich, z. B. EcoRI: 5'-GAATTC-3')
- Schneiden: entweder **stumpf (blunt ends)** oder mit **Überhängen (sticky ends/cohesive ends)**
  - EcoRI: 5'-G↓AATTC-3' → 5'-AATT-Überhänge (kompatibel mit anderen EcoRI-geschnittenen Enden — wichtig für Ligation)
  - SmaI: 5'-CCC↓GGG-3' → stumpfe Enden
- Inkubation: 37 °C (die meisten), spezifischer Puffer essenziell
- Inaktivierung: 65 °C für 20 min (hitzeinaktivierbar) oder Phenol-Chloroform-Extraktion

**RFLP (Restriction Fragment Length Polymorphism):** Einzelne Basenveränderungen in Erkennungssequenzen führen dazu, dass ein Restriktionsenzym an dieser Stelle nicht mehr schneidet — das ergibt ein anderes Bandenmuster in der Gelelektrophorese → genetischer Marker (früher genutzt für genetische Kartierung und Diagnostik).

## Southern Blot (DNA-Nachweis)

Der **Southern Blot** (Edwin Southern, 1975) ist eine Methode zum Nachweis spezifischer DNA-Sequenzen nach Gelelektrophorese.

Ablauf:
1. **Restriktionsverdau** der genomischen DNA → Fragmente
2. **Agarosegel-Elektrophorese** → Trennung nach Größe
3. **Denaturierung** im Gel (NaOH → Einzelstränge)
4. **Transfer (Blot)** auf Nylonmembran (Kapillartransfer, Vakuum-Blot oder elektrischer Transfer)
5. **UV-Crosslinking:** DNA wird kovalent an Membran gebunden
6. **Hybridisierung** mit markierter Sonde (radioaktiv ³²P oder Fluoreszenz/Chemilumineszenz) — Sonde bindet komplementär an Zielsequenz
7. **Autoradiographie/Chemilumineszenz-Detektion:** Banden sichtbar machen

Klinische Anwendung: Früher für Diagnose von Deletion/Duplikation großer DNA-Segmente (z. B. Muskeldystrophie Duchenne); heute weitgehend durch PCR-basierte und NGS-Methoden ersetzt.

## Northern Blot (RNA-Nachweis)

Der **Northern Blot** ist analog zum Southern Blot, aber für **RNA**. Er detektiert spezifische mRNA-Sequenzen und gibt Auskunft über die Größe und Menge eines Transkripts.

Besonderheiten:
- RNA-Gel läuft unter denaturierenden Bedingungen (Formaldehyd → verhindert Sekundärstrukturen)
- Detektiert mRNA → Aussage über Genexpression auf Transkriptionsebene
- Heute weitgehend durch RT-qPCR und RNA-Seq ersetzt (sensitiver, quantitativer)

Merkhilfe: **S**outhern = **D**NA; **N**orthern = R**N**A; **W**estern = Protein (geographische Himmelsrichtungen).

## Western Blot (Proteinnachweis)

Der **Western Blot** (auch: Immunblot) ist die wichtigste Methode zum Nachweis spezifischer Proteine.

Ablauf:
1. **Proteinextraktion** aus Zellen/Gewebe (Lyse, Proteasehemmer)
2. **SDS-PAGE (Sodium Dodecyl Sulfate Polyacrylamidgel-Elektrophorese):**
   - SDS denaturiert Proteine und lädt sie gleichmäßig negativ
   - Trennung nach Molekulargewicht (kDa) — kleine Proteine wandern weiter
3. **Transfer** auf PVDF- oder Nitrozellulose-Membran
4. **Blocking:** Absättigung unspezifischer Bindungsstellen (Magermilchpulver oder BSA)
5. **Primärantikörper:** Bindet spezifisch an Zielprotein
6. **Sekundärantikörper:** Horseradish-Peroxidase (HRP)- oder Alkalische-Phosphatase-konjugiert, bindet an Primärantikörper
7. **Detektion:** ECL (Enhanced Chemiluminescence) oder Fluoreszenz → Bande bei spezifischem Molekulargewicht

**Klinisch: HIV-Western-Blot** war jahrelang der Bestätigungstest nach positivem HIV-ELISA. Banden gegen gp41, gp120, p24 werden gewertet — drei positive Banden = HIV-bestätigt. Heute wurde der Western Blot beim HIV-Bestätigungstest in vielen Ländern durch den HIV-1/2-Antikörper-Differenzierungsimmunassay ersetzt.`,

      lernziele: [
        'Das Prinzip der Agarosegel-Elektrophorese mit Wanderungsrichtung und Größentrennung erklären',
        'Restriktionsenzyme, palindromische Erkennungssequenzen und sticky/blunt ends beschreiben',
        'Southern, Northern und Western Blot in Bezug auf Zielmolekül und Ablauf unterscheiden',
        'Den HIV-Western-Blot als klinischen Bestätigungstest einordnen und interpretieren',
        'RFLP als genetischen Marker und seine frühere diagnostische Bedeutung erläutern',
      ],

      sections: [
        {
          heading: 'Restriktionsenzyme und ihre Erkennungssequenzen',
          text: 'Restriktionsendonukleasen sind nach Typ I, II und III klassifiziert — für die Molekularbiologie sind **Typ-II-Enzyme** von Bedeutung (schneiden innerhalb oder nahe der Erkennungssequenz, definierte Fragmente). Bekannte Beispiele: EcoRI (aus E. coli, erkennt GAATTC, 4-nt-5\'-Überhang), HindIII (AAGCTT, 4-nt-5\'-Überhang), BamHI (GGATCC, 4-nt-5\'-Überhang), NotI (GCGGCCGC, 8-bp-Erkennungssequenz, schneidet selten → für große Fragmente). Statistische Häufigkeit einer 4-bp-Sequenz: 1/4⁴ = 1/256 bp; 6-bp: 1/4096 bp; 8-bp: 1/65.536 bp. Sticky ends erleichtern die gerichtete Klonierung: kompatible Überhänge hybridisieren spontan und werden durch DNA-Ligase kovalent verknüpft.',
          merksatz: 'EcoRI: GAATTC (palindromisch) → 5\'-AATT-Überhänge (sticky ends). Je länger die Erkennungssequenz, desto seltener der Schnitt.',
        },
        {
          heading: 'SDS-PAGE und Western Blot — Proteingrößenbestimmung',
          text: 'SDS (Natriumdodecylsulfat) ist ein Detergenz, das Proteine denaturiert und proportional zur Polypeptidlänge negative Ladungen aufbringt (~1,4 g SDS/g Protein). Im Polyacrylamidgel wandern alle Proteine als negativ geladene "Stäbchen" zur Anode — die Migrationsgeschwindigkeit hängt nur vom Molekulargewicht ab. Der Molekulargewichtsmarker (Protein-Ladder) enthält Proteine bekannter Größe (z. B. 10, 15, 20, 25, 37, 50, 75, 100, 150, 250 kDa). Klinisch relevant: Bande des HIV-Hüllproteins gp120 bei ~120 kDa, Kapsidprotein p24 bei ~24 kDa. Im Western Blot werden diese Banden durch Antikörper visualisiert.',
          merksatz: 'SDS-PAGE trennt Proteine nur nach Größe (kDa). Western Blot = SDS-PAGE + Transfer + Antikörperdetektion.',
        },
        {
          heading: 'Southern/Northern/Western — Merkhilfe und Unterschiede',
          text: 'Die drei klassischen Blot-Verfahren unterscheiden sich in der Zielmolekülebene: Southern Blot detektiert spezifische DNA-Sequenzen mittels markierter DNA/RNA-Sonde nach Restriktionsverdau und Gelelektrophorese. Northern Blot detektiert RNA (typischerweise mRNA) unter denaturierenden Bedingungen — liefert Aussage über Transkriptgröße und -menge. Western Blot detektiert Proteine über spezifische Antikörper nach SDS-PAGE. Merkhilfe: S→N→W (Süd→Nord→West) entspricht DNA→RNA→Protein, also dem Informationsfluss des Zentraldogmas. In modernen Labors wurden alle drei weitgehend durch PCR-basierte Methoden (für DNA/RNA) und ELISA/Proteomik (für Proteine) ersetzt — sie sind aber für das Verständnis klassischer Diagnostik und Prüfungsfragen weiterhin prüfungsrelevant.',
          merksatz: 'S=DNA (Sonde), N=RNA, W=Protein (Antikörper). Merkhilfe: Süd-Nord-West = DNA-RNA-Protein = Zentraldogma.',
        },
      ],

      merksätze: [
        'Agarosegel: DNA negativ geladen → Anode (+). Kleine Fragmente schneller. Größenmarker gibt Referenz.',
        'Restriktionsenzyme Typ II: erkennen palindromische 4–8 bp-Sequenzen, schneiden definiert. EcoRI: GAATTC → AATT-Sticky-Ends.',
        'Sticky ends (klebrige Enden): komplementäre Einzelstrang-Überhänge erleichtern Ligation → gerichtete Klonierung.',
        'Blunt ends (stumpfe Enden): keine Überhänge. Ligation möglich, aber ineffizienter und ungerichtet.',
        'Southern Blot: DNA → Gel → Transfer → Hybridisierung mit markierter Sonde. Detektiert spezifische DNA-Sequenz.',
        'Northern Blot: RNA → denaturierendes Gel → Transfer → Sonde. Detektiert mRNA (Transkriptgröße und -menge).',
        'Western Blot: Protein → SDS-PAGE → Transfer → Primär-AK + HRP-Sekundär-AK → ECL. Detektiert spezifisches Protein.',
        'SDS-PAGE: SDS denaturiert Proteine, lädt gleichmäßig negativ → Trennung nur nach Masse (kDa).',
        'HIV-Western-Blot: Bestätigungstest nach positivem ELISA. Banden gegen gp41/gp120/p24 → positiv bei ≥2 Banden.',
        'RFLP: Punktmutation in Erkennungssequenz → Enzym schneidet nicht → anderes Bandenmuster → genetischer Marker.',
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: 'Ein Arzt möchte einen HIV-positiven ELISA-Befund bestätigen. Erklären Sie das Prinzip des HIV-Western-Blots und was ein positives Ergebnis bedeutet.',
        answer: 'Der HIV-Western-Blot ist ein Bestätigungstest nach positivem ELISA-Screening. HIV-Proteine (aus inaktivierten Viren) werden zunächst per SDS-PAGE nach Molekulargewicht getrennt und auf eine Membran transferiert. Die Patientenprobe (Serum) wird aufgetragen — enthält das Serum HIV-spezifische Antikörper (bei HIV-Infektion), binden diese an die entsprechenden Virusproteine auf der Membran. Ein enzymkonjugierter Sekundärantikörper detektiert die Bindung. Ein positiver Western Blot zeigt Banden bei spezifischen Molekulargewichten: gp120 (Hüllglykoprotein, 120 kDa), gp41 (Transmembranprotein, 41 kDa), p24 (Kapsidprotein, 24 kDa). Die WHO-Kriterien verlangen mindestens zwei positive Banden (inkl. einer Hüllbande) für ein positives Ergebnis. Heute wird in vielen Leitlinien der HIV-1/2-Differenzierungsimmunoassay bevorzugt, da er schneller und sensitiver ist.',
      },

      klinischerBezug: 'HIV-Western-Blot war jahrzehntelang Goldstandard zur Bestätigung positiver HIV-ELISA-Befunde; heute teils durch Differenzierungsimmunoassays ersetzt.',

      selfTest: [
        {
          question: 'Warum wandert DNA im Agarosegel zur Anode und nicht zur Kathode?',
          options: [
            'DNA ist positiv geladen wegen der Nukleotidbasen',
            'DNA ist negativ geladen durch die Phosphatgruppen im Rückgrat und wandert zur positiven Elektrode (Anode)',
            'DNA ist neutral geladen und wandert durch den Osmosedruck',
            'DNA wird durch das Ethidiumbromid positiv aufgeladen',
            'Die Wanderungsrichtung hängt von der DNA-Konzentration ab',
          ],
          correctIndex: 1,
          explanation: 'DNA trägt durch die Phosphatgruppen im Zucker-Phosphat-Rückgrat bei physiologischem pH eine starke negative Gesamtladung. Im elektrischen Feld wandern negativ geladene Moleküle zur positiven Elektrode (Anode). Diese Ladung ist proportional zur DNA-Länge — kürzere Fragmente haben weniger Ladung, werden aber durch das Gel proportional weniger gehemmt und wandern daher schneller als lange Fragmente. Der Größenmarker (Ladder) mit Fragmenten bekannter Länge erlaubt die Größenbestimmung unbekannter Proben.',
          hints: [
            'Welche chemische Gruppe der DNA trägt eine negative Ladung bei pH 7?',
            'In der Elektrophorese: negative Ladung → welche Elektrode ist das Ziel?',
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Was sind Restriktionsenzyme, und warum erkennen sie palindromische Sequenzen?',
          options: [
            'Restriktionsenzyme sind RNA-Polymerasen, die palindromische Promotoren erkennen',
            'Restriktionsenzyme sind bakterielle Endonukleasen, die doppelsträngige DNA an spezifischen palindromischen Sequenzen schneiden',
            'Restriktionsenzyme sind Ligasen, die DNA-Fragmente an palindromischen Enden verbinden',
            'Restriktionsenzyme sind Helikasen, die palindromische DNA-Bereiche öffnen',
            'Restriktionsenzyme sind Reparaturenzyme für doppelsträngige DNA-Brüche',
          ],
          correctIndex: 1,
          explanation: 'Restriktionsendonukleasen (Typ II) sind bakterielle Enzyme, die doppelsträngige DNA an kurzen (4–8 bp) palindromischen Erkennungssequenzen schneiden. Palindromisch bedeutet: Die Sequenz liest sich auf beiden Strängen in 5\'→3\'-Richtung gleich (z. B. EcoRI: 5\'-GAATTC-3\' auf einem Strang, 5\'-GAATTC-3\' auf dem komplementären Gegenstrang). Diese Symmetrie ermöglicht es einem Homodimer-Enzym, beide Stränge symmetrisch zu erkennen und zu schneiden. Biologische Funktion: Schutz bakterieller DNA vor Phagen-DNA.',
          hints: [
            'Palindrom = Wort, das vorwärts und rückwärts gleich lautet (z. B. "Rentner") — auf DNA-Ebene: gleiche Sequenz auf beiden Strängen?',
            'Restriktionsenzyme schützen Bakterien — wovor?',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ist der Unterschied zwischen "sticky ends" und "blunt ends" beim Restriktionsverdau?',
          options: [
            'Sticky ends entstehen bei Typ-I-Enzymen, blunt ends bei Typ-II-Enzymen',
            'Sticky ends haben einzelsträngige Überhänge (kompatibel für Ligation); blunt ends sind glatt ohne Überhänge',
            'Sticky ends entstehen nur bei GC-reichen Sequenzen; blunt ends nur bei AT-reichen Sequenzen',
            'Blunt ends sind stabiler als sticky ends und werden bevorzugt für Klonierung verwendet',
            'Sticky ends und blunt ends bezeichnen die Aktivität des Enzyms, nicht die DNA-Enden',
          ],
          correctIndex: 1,
          explanation: 'Restriktionsenzyme schneiden unterschiedlich: EcoRI (GAATTC) schneidet versetzt (staggered cut) → 5\'-AATT-Einzelstrang-Überhänge (sticky/cohesive ends). Diese Überhänge können mit komplementären Enden anderer EcoRI-geschnittener DNA hybridisieren → erleichtert Ligation erheblich (gerichtete Klonierung). SmaI (CCCGGG) schneidet genau in der Mitte → keine Überhänge (blunt ends). Blunt-end-Ligation ist weniger effizient und ungerichtet (Insert kann in beide Richtungen eingebaut werden).',
          hints: [
            'Sticky = klebrig — was macht DNA-Enden "klebrig" im molekularbiologischen Sinne?',
            'Welcher Vorteil haben einzelsträngige Überhänge für das Klonieren eines Inserts in einen Vektor?',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Ein Student verwechselt Southern Blot, Northern Blot und Western Blot. Welche Zuordnung (Blot-Typ → detektiertes Molekül) ist korrekt?',
          options: [
            'Southern = RNA, Northern = DNA, Western = Protein',
            'Southern = Protein, Northern = RNA, Western = DNA',
            'Southern = DNA, Northern = RNA, Western = Protein',
            'Southern = DNA, Northern = Protein, Western = RNA',
            'Southern = RNA, Northern = Protein, Western = DNA',
          ],
          correctIndex: 2,
          explanation: 'Die Merhregel: S→N→W (Süd→Nord→West) entspricht DNA→RNA→Protein, also dem Informationsfluss des Zentraldogmas. Southern Blot (Edwin Southern, 1975) detektiert spezifische DNA-Sequenzen mittels markierter Sonde. Northern Blot detektiert RNA (mRNA) — liefert Transkriptgröße und -expression. Western Blot (Immunblot) detektiert Proteine mittels spezifischer Antikörper nach SDS-PAGE. Merkhilfe: "Süden→Norden→Westen = DNA→RNA→Protein" oder "Kein Mensch Weiß" (Kein=Keimzell, Merkhilfe für Reihenfolge).',
          hints: [
            'S→N→W folgt dem Zentraldogma — DNA wird transkribiert zu RNA, die translatiert wird zu Protein.',
            'Western Blot verwendet Antikörper — Antikörper erkennen spezifisch welche Biomoleküle?',
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Warum wird beim SDS-PAGE-Western-Blot SDS (Natriumdodecylsulfat) verwendet?',
          options: [
            'SDS erhöht den pH-Wert, was die Proteine positiv lädt',
            'SDS denaturiert Proteine und lädt sie gleichmäßig negativ, sodass die Trennung nur nach Molekulargewicht erfolgt',
            'SDS stabilisiert native Proteinstrukturen für die Antikörperdetektion',
            'SDS dient als Fluoreszenzfarbstoff zur Proteindetektion im Gel',
            'SDS erhöht die elektrische Leitfähigkeit im Gel',
          ],
          correctIndex: 1,
          explanation: 'SDS (Natriumdodecylsulfat) ist ein anionisches Detergenz, das Proteine denaturiert (zerstört Sekundär- und Tertiärstruktur) und proportional zur Polypeptidlänge negative Ladungen aufbringt (~1,4 g SDS/g Protein). Dadurch sind alle Proteine im Gel gleichmäßig negativ geladen — die native Ladung des Proteins spielt keine Rolle mehr. Im Polyacrylamidgel hängt die Migrationsgeschwindigkeit nur noch vom Molekulargewicht (kDa) ab: kleine Proteine migrieren schneller. Ohne SDS würden Proteine nach ihrer nativen Ladung UND Form UND Größe getrennt — nicht vergleichbar.',
          hints: [
            'Was bedeutet "denaturieren" für eine Proteinstruktur? Und warum will man das bei SDS-PAGE?',
            'Wenn alle Proteine gleich geladen sind, was ist dann die einzige Variable, die ihre Wandergeschwindigkeit bestimmt?',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Ein Patient hat einen positiven HIV-ELISA. Welche Aussage zum HIV-Western-Blot-Bestätigungstest ist korrekt?',
          options: [
            'Der Western Blot amplifiziert HIV-DNA per PCR und weist sie elektrophoretisch nach',
            'Der Western Blot trennt HIV-Proteine per SDS-PAGE, transferiert sie auf eine Membran und detektiert HIV-spezifische Antikörper im Patientenserum',
            'Ein positiver Western Blot erfordert nur eine einzige Bande (p24) für die Diagnose',
            'Der Western Blot ist weniger spezifisch als der ELISA und dient nur zur Schnelldiagnostik',
            'Der Western Blot kann nicht zwischen HIV-1 und HIV-2 unterscheiden',
          ],
          correctIndex: 1,
          explanation: 'Beim HIV-Western-Blot werden HIV-Proteine (aus inaktivierten Viren) zunächst per SDS-PAGE nach Molekulargewicht getrennt und auf eine Nitrozellulose-Membran transferiert. Das Patientenserum wird aufgetragen — HIV-spezifische Antikörper (bei HIV-Infektion) binden an die entsprechenden Virusproteine. Ein enzymkonjugierter Sekundärantikörper macht die Bindung durch Chemilumineszenz sichtbar. Positiv: Banden gegen gp120, gp41, p24 — mind. 2 Banden (inkl. einer Hüllbande) nach WHO-Kriterien. Heute wird oft HIV-1/2-Differenzierungsimmunoassay verwendet.',
          hints: [
            'Der Western Blot kombiniert zwei Techniken — welche Elektrophorese und was danach?',
            'Im Western Blot erkennt man HIV-Antikörper im Serum — was bedeutet das: Patient hat Antikörper gegen welches Molekül?',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ist RFLP (Restriction Fragment Length Polymorphism) und warum ist es genetisch informativ?',
          options: [
            'RFLP ist eine PCR-Methode zur Amplifikation repetitiver DNA-Sequenzen',
            'RFLP nutzt Restriktionsenzyme; eine Punktmutation in der Erkennungssequenz verhindert den Schnitt → unterschiedliche Bandenmuster zwischen Individuen',
            'RFLP ist ein Blot-Verfahren zum Nachweis von RNA-Expression',
            'RFLP beschreibt die Länge von PCR-Produkten bei der STR-Analyse',
            'RFLP ist eine Methode zur Bestimmung der DNA-Konzentration vor der Sequenzierung',
          ],
          correctIndex: 1,
          explanation: 'RFLP (Restriction Fragment Length Polymorphism) nutzt die Tatsache, dass Einzelnukleotidvariationen (SNPs) in der Erkennungssequenz eines Restriktionsenzyms den Schnitt verhindern können. Wenn Individuum A die Erkennungssequenz GAATTC (EcoRI-Stelle) trägt, wird DNA in zwei Fragmente geschnitten. Individuum B hat eine Mutation (z. B. GAATCC), EcoRI schneidet nicht → ein größeres Fragment. Nach Gelelektrophorese zeigen beide Individuen unterschiedliche Bandenmuster → genetischer Marker. RFLP war ein früher Standard für genetische Kartierung und pränatale Diagnostik; heute weitgehend durch SNP-Arrays und NGS ersetzt.',
          hints: [
            'Was passiert, wenn eine Punktmutation genau in der Erkennungssequenz eines Restriktionsenzyms liegt?',
            'Verschiedene Bandenmuster nach Restriktionsverdau zwischen zwei Individuen — was kann man daraus schließen?',
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UK bio-7-04: Genetischer Fingerabdruck und DNA-Analyse
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'bio-7-04',
      title: 'Genetischer Fingerabdruck und DNA-Analyse',
      content: `## Genetischer Fingerabdruck — Individuelle DNA-Identität

Der **genetische Fingerabdruck** (DNA-Fingerprinting, DNA-Profiling) ermöglicht die eindeutige Identifizierung eines Individuums anhand seines DNA-Musters. Das Verfahren basiert auf der Analyse hochvariabler, repetitiver DNA-Sequenzen im menschlichen Genom.

## STR-Analyse — das moderne Standardverfahren

**STR (Short Tandem Repeats)**, auch Mikrosatelliten genannt, sind kurze repetitive DNA-Sequenzen von 2–6 Basenpaaren Länge, die im Genom tandem wiederholt vorkommen (z. B. (CA)n, (AGAT)n). Die Anzahl der Wiederholungen ist zwischen Individuen hochvariabel (polymorph) — dies macht STRs zu idealen genetischen Markern.

**Eigenschaften von STRs:**
- Im gesamten Genom verteilt (autosomale + X-/Y-chromosomale STRs)
- Hohe Heterozygotierate (viele verschiedene Allele in der Population)
- Stabile Vererbung (Mendel), aber mit mäßiger Mutationsrate (~0,1–0,2% pro Locus pro Generation durch Polymerase-Slippage)
- Für jedes STR-Locus gibt es zwei Allele (maternales + paternales) → zwei Banden oder eine (wenn beide Allele gleich = Homozygot)

**Ablauf der STR-Analyse:**
1. **DNA-Extraktion** aus Spurenmaterial (Blut, Speichel, Haar mit Wurzel, Sperma, Knochen)
2. **PCR-Amplifikation** der STR-Loci mit fluoreszenzmarkierten Primern — typischerweise Multiplex-PCR (mehrere Loci simultan)
3. **Kapillarelektrophorese (CE):** Fluoreszenzmarkierte PCR-Produkte werden nach Fragmentlänge getrennt; jeder Locus ergibt ein oder zwei Peaks im Elektropherogramm
4. **Allel-Calling:** Software (z. B. GeneMapper) ordnet Peaks Allelnummern zu (basierend auf internem Größenstandard und Allelleitern)
5. **Profil-Vergleich:** Übereinstimmung zwischen Probe und Referenz wird statistisch ausgewertet (Match-Wahrscheinlichkeit, Random Match Probability)

## CODIS — Das forensische STR-System

In den USA verwaltet das **FBI CODIS (Combined DNA Index System)** die nationale Datenbank für forensische DNA-Profile. Ab 2017 wurden **20 STR-Kernloci** (CODIS Core Loci) verwendet — zuvor 13. Bei 20 Loci und typischen Allelfrequenzen beträgt die **Random Match Probability** (Wahrscheinlichkeit, dass eine zufällige Person das gleiche Profil hat) etwa 1 in 10²⁶ — damit ist eine individuelle Zuordnung für praktische Zwecke als absolut eindeutig anzusehen.

In Europa wird das **ESS (European Standard Set)** mit 16+2 Loci verwendet; Interpol nutzt einen gemeinsamen Kernsatz für internationale Vergleiche.

## Vaterschaftstest

Beim **Vaterschaftstest** wird die STR-Analyse genutzt, um zu bestimmen, ob ein Mann der biologische Vater eines Kindes ist. Prinzip:
- Jedes Allel des Kindes muss von einem der Elternteile stammen
- Die Mutter liefert ein Allel, der (potenzielle) Vater das andere
- Wenn ein Allel des Kindes nicht im väterlichen Profil vorhanden ist → **Ausschluss** (Nicht-Vaterschaft)
- Wenn alle Allele kompatibel sind → **Einschluss** mit einem Vaterschaftsindex (PI) → Vaterschaftswahrscheinlichkeit typischerweise >99,9%
- Statistisch: Wahrscheinlichkeit einer zufälligen Übereinstimmung bei 16 Loci <1:100.000

## Mitochondriale DNA (mtDNA) in der Forensik

Die **mitochondriale DNA** ist ein ringförmiges Molekül von ~16.569 bp mit 37 Genen. Forensisch relevant sind zwei hypervariable Regionen (HV1, HV2) in der nicht-kodierenden Kontrollregion (D-Loop).

Forensische Vorteile der mtDNA:
- **Hohe Kopienzahl:** 100–1.000 Kopien pro Zelle (vs. 2 Kopien nukleärer DNA) → Analyse selbst aus sehr altem oder degradiertem Material möglich (Knochen, Haare ohne Kern, verbrannte Reste)
- **Maternale Vererbung:** Alle Kinder einer Mutter haben identische mtDNA (maternale Linie rückwärts verfolgbar)
- **Identifikation unbekannter Leichname** via mtDNA-Vergleich mit Verwandten mütterlicherseits (z. B. Romanov-Identifikation 1991)

Nachteile:
- Keine individuelle Identifizierung möglich (alle maternalen Verwandten haben identische mtDNA)
- Niedrigere Diskriminierungskraft als STR-Analyse

## Klinische Anwendungen

- **Vaterschaftstest:** Rechtlich bindend bei akkreditierten Labors; in Deutschland §1600d BGB
- **Forensische Identifikation:** Massengräber, Katastrophenopfer (z. B. 9/11: >2.000 Identifikationen), Kriegsgefallene
- **Pränataler Vaterschaftstest (pränatal):** Seit ~2012 möglich aus mütterlichem Blut (cfDNA des Fetus) — nicht-invasiv, ab SSW 10
- **Transplantationsmedizin:** STR-Analyse zur Überprüfung der Spender-Empfänger-Chimärisierung nach Stammzelltransplantation`,

      lernziele: [
        'STR (Short Tandem Repeats) als Grundlage des genetischen Fingerabdrucks definieren und die Analyse in Schritten erklären',
        'Das CODIS-System und die statistische Aussagekraft des DNA-Profils (Random Match Probability) einordnen',
        'Den Vaterschaftstest auf Basis der STR-Analyse und das Prinzip des Ausschlusses erläutern',
        'Die forensischen Vorteile der mtDNA-Analyse (hohe Kopienzahl, maternale Vererbung) im Vergleich zur STR-Analyse darstellen',
        'Drei klinische/forensische Anwendungen der DNA-Analyse nennen',
      ],

      sections: [
        {
          heading: 'STR-Polymorphismus — Warum sind Menschen verschieden?',
          text: 'Die hohe Variabilität von STR-Loci entsteht durch einen Mechanismus namens **Replication Slippage (Polymerase-Slippage)**: Während der DNA-Replikation kann die Polymerase bei repetitiven Sequenzen "ausrutschen" — der neusynthetisierte Strang bildet eine Haarnadelschleife, und beim Weitersyntetisieren entstehen mehr oder weniger Wiederholungen als im Elternstrang. Dies erklärt die hohe Mutationsrate von STRs (~0,1–0,2%/Generation/Locus). Ein Mensch mit 17 CA-Wiederholungen an Locus D3S1358 hat dort das Allel "17"; ein anderer mit 20 Wiederholungen hat "Allel 20". Die Kombination aus 20 Loci ergibt ein statistisch einzigartiges Profil. VNTR (Variable Number of Tandem Repeats, 10–100 bp) sind größer als STRs und wurden bei der ursprünglichen Alec-Jeffreys-Methode (1984) verwendet — heute durch STRs ersetzt.',
          merksatz: 'STR: 2–6 bp-Wiederholungen, hochpolymorph. Polymerase-Slippage erklärt variable Wiederholungszahl. 20 CODIS-Loci → Profil einzigartig in 10²⁶.',
        },
        {
          heading: 'Spurenanalyse — Degradierte DNA und Low-Copy-Number-PCR',
          text: 'In der forensischen Praxis ist die Qualität der DNA-Spur oft limitierend. Degradierte DNA (durch UV, Feuchtigkeit, Bakterien hydrolysiert) liefert nur kurze Fragmente → ein vollständiges STR-Profil kann nicht erstellt werden (Dropout von Allelen → falsch-homozygotes Ergebnis). Lösungen: (1) **Miniaturisierte STR-Kits (mini-STRs):** Primer so nahe an den STR-Kern gesetzt, dass Amplifikate <100 bp sind — funktioniert bei degradierter DNA; (2) **Low-Copy-Number PCR (LCN):** Mehr PCR-Zyklen (34 statt 28) für Spuren mit <100 pg DNA — erhöht die Kontaminationsgefahr erheblich; (3) **SNP-Analyse:** Als Ergänzung bei sehr degradierter DNA. Bei Mischspuren (mehrere Personen) ist die Interpretation komplex — bioinformatische Deconvolution-Software wird eingesetzt.',
          merksatz: 'Degradierte DNA → Allel-Dropout möglich. Mini-STR-Kits und erhöhte PCR-Zyklen (LCN) helfen — aber höhere Kontaminationsgefahr.',
        },
        {
          heading: 'Chimärismus nach Stammzelltransplantation',
          text: 'Nach allogener Stammzelltransplantation (SZT) koexistieren Spender- und Empfänger-hämatopoetische Zellen im Blut des Patienten — ein Zustand des **Chimärismus**. STR-Analyse des Bluts erlaubt die Quantifizierung: Vollchimärismus (100% Spender-DNA) vs. gemischter Chimärismus (beide Donor-Allele + Patient-Allele). Bei gemischtem Chimärismus besteht das Risiko eines Rückfalls der hämatologischen Erkrankung — der Anstieg des Empfänger-Anteils ist ein frühes Warnsignal für Relapse. Technik: STR-PCR mit Fluoreszenzmarkierung, Kapillarelektrophorese → quantitative Auswertung der Allel-Peak-Flächen (Spender-Anteil in %).',
          merksatz: 'Post-SZT-Chimärismus-Monitoring: STR-Analyse misst Spender-Anteil in %. Zunehmender Empfänger-Anteil → Relapse-Warnsignal.',
        },
      ],

      merksätze: [
        'STR (Mikrosatelliten): 2–6 bp Wiederholungen, tandem, hochpolymorph → ideale forensische Marker.',
        'STR-Analyse: DNA-Extraktion → Multiplex-PCR (fluoreszenzmarkiert) → Kapillarelektrophorese → Allel-Calling → Profilvergleich.',
        'CODIS: 20 STR-Kernloci (USA), Random Match Probability ~1:10²⁶ → individuell eindeutig.',
        'Vaterschaftstest: alle Allele des Kindes müssen von Eltern stammen. Fehlendes väterliches Allel = Ausschluss. Übereinstimmung → PI >99,9%.',
        'mtDNA: maternale Vererbung, 100–1.000 Kopien/Zelle, gut für alte/degradierte Proben (Haare ohne Kern, Knochen).',
        'mtDNA-Nachteil: keine individuelle Identifikation — alle maternalen Verwandten haben identische Sequenz.',
        'Allel-Dropout: bei degradierter DNA fehlt ein Allel im Profil → scheinbare Homozygotie → Fehlinterpretation möglich.',
        'Polymerase-Slippage: Mechanismus für STR-Mutation (~0,1–0,2%/Locus/Generation) → Entstehung neuer Allele.',
        'Chimärismus nach SZT: STR-PCR quantifiziert Spender- vs. Empfänger-Anteil → Relapse-Früherkennung.',
        'VNTR (Variable Number Tandem Repeats): 10–100 bp, historische Basis des DNA-Fingerprints (Jeffreys 1984) — heute durch STR ersetzt.',
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: 'Ein Forensiker analysiert eine Blutprobe vom Tatort. Erklären Sie das Prinzip der STR-Analyse und warum 20 STR-Loci für eine eindeutige Identifikation ausreichen.',
        answer: 'STRs (Short Tandem Repeats) sind 2–6 bp-Wiederholungseinheiten, die im Genom variabel viele Male hintereinander wiederholt vorliegen. Die Anzahl der Wiederholungen (Allel) ist zwischen Individuen hochpolymorph. Jedes Individuum trägt an jedem STR-Locus zwei Allele (mütterlich + väterlich). Per Multiplex-PCR mit fluoreszenzmarkierten Primern werden 20 CODIS-Loci gleichzeitig amplifikiert; Kapillarelektrophorese trennt die PCR-Produkte nach Fragmentlänge, und Software erkennt die Allele als Peaks im Elektropherogramm. Die Random Match Probability bei 20 unabhängigen Loci ergibt sich als Produkt der Einzelwahrscheinlichkeiten: Wenn ein Locus eine Übereinstimmungswahrscheinlichkeit von 1:100 hat, ergibt das Produkt über 20 Loci etwa 1:10⁴⁰ — in der Praxis ~1:10²⁶ wegen tatsächlicher Allelhäufigkeiten. Das bedeutet, dass statistisch kein zweites Individuum auf der Erde dasselbe Profil trägt (Erdbevölkerung: ~8 × 10⁹). Der Vergleich mit einer Referenzprobe (z. B. Wangenabstrich vom Verdächtigen) erlaubt eine Identifikation mit richterlich anerkannter Sicherheit.',
      },

      klinischerBezug: 'Genetischer Fingerabdruck per STR-Analyse ist Standard in Forensik, Vaterschaftstests und post-SZT-Chimärismus-Monitoring.',

      selfTest: [
        {
          question: 'Was sind STRs (Short Tandem Repeats) und warum sind sie als forensische Marker geeignet?',
          options: [
            'STRs sind lange repetitive Sequenzen (>100 bp), die in allen Menschen identisch sind',
            'STRs sind kurze (2–6 bp) tandemartig wiederholte Sequenzen, die zwischen Individuen in der Anzahl der Wiederholungen variieren',
            'STRs sind Einzelnukleotidvariationen (SNPs) an bekannten Genorten',
            'STRs sind RNA-Sequenzen, die aus Mitochondrien stammen',
            'STRs sind Restriktions-Fragmentlängen-Polymorphismen im Exom',
          ],
          correctIndex: 1,
          explanation: 'STRs (Short Tandem Repeats, Mikrosatelliten) sind 2–6 bp-Einheiten, die in direkter Aufeinanderfolge (tandem) im Genom wiederholt vorkommen, z. B. (CA)₁₅ oder (AGAT)₁₂. Die Anzahl der Wiederholungen an einem Locus ist zwischen Individuen hochvariabel (polymorph) — ein Locus kann in der Population 5–40 verschiedene Allele haben. Diese Polymorphie entsteht durch Polymerase-Slippage bei der Replikation. Jeder Mensch trägt an jedem STR-Locus zwei Allele (maternal + paternal). Die Kombination aus 20 unabhängigen Loci ergibt ein statistisch einzigartiges Profil.',
          hints: [
            'Short = kurz, Tandem = direkte Aufeinanderfolge, Repeat = Wiederholung — was wiederholt sich hier?',
            'Warum eignen sich Variable (polymorphe) Sequenzen besser für die Identifikation als konstante Sequenzen?',
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welche Schritte umfasst die STR-Analyse für ein forensisches DNA-Profil?',
          options: [
            'RNA-Extraktion → Reverse Transkription → Northern Blot → Autoradiographie',
            'DNA-Extraktion → Multiplex-PCR → Kapillarelektrophorese → Allel-Calling',
            'DNA-Extraktion → Restriktionsverdau → Southern Blot → Sequenzierung',
            'Proteinextraktion → SDS-PAGE → Western Blot → Antikörperdetektion',
            'DNA-Extraktion → Sanger-Sequenzierung → Bioinformatik → Datenbankvergleich',
          ],
          correctIndex: 1,
          explanation: 'Die forensische STR-Analyse läuft in vier Hauptschritten ab: (1) DNA-Extraktion aus Spurenmaterial (Blut, Speichel, Haare mit Wurzel, Sperma) — Lyse, Aufreinigung; (2) Multiplex-PCR: gleichzeitige Amplifikation aller 20 STR-Loci mit fluoreszenzmarkierten Primern in einer Reaktion; (3) Kapillarelektrophorese: Fragmente nach Länge getrennt, Fluoreszenz detektiert; (4) Allel-Calling: Software ordnet Peaks Allelnummern zu. Das Profil wird mit einer Referenzprobe (z. B. Wangenabstrich) verglichen. Die Random Match Probability bei 20 CODIS-Loci beträgt ~1:10²⁶.',
          hints: [
            'STR-Analyse beginnt mit dem Spurenmaterial — welches Molekül wird analysiert?',
            'Multiplex-PCR bedeutet: viele Primer-Paare in einem Ansatz — welche Loci werden gleichzeitig amplifiziert?',
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Bei einem Vaterschaftstest zeigt das Kind an Locus D3S1358 die Allele 15 und 18. Die Mutter hat die Allele 15 und 17. Der vermeintliche Vater hat die Allele 14 und 16. Was ist die Schlussfolgerung?',
          options: [
            'Die Vaterschaft ist bewiesen — Allel 15 des Kindes kommt von der Mutter',
            'Der Mann kann der Vater sein — Allel 18 könnte von ihm stammen',
            'Der Mann ist ausgeschlossen — Allel 18 des Kindes kann weder von der Mutter (15/17) noch vom Vater (14/16) stammen',
            'Das Ergebnis ist nicht aussagekräftig — weitere Loci müssen analysiert werden',
            'Allel 18 könnte durch eine Mutation entstanden sein — Vaterschaft nicht ausgeschlossen',
          ],
          correctIndex: 2,
          explanation: 'Bei der Vaterschaftsanalyse muss jedes Allel des Kindes von einem Elternteil stammen. Das Kind hat Allele 15 und 18. Allel 15 kommt von der Mutter (sie trägt 15). Allel 18 muss vom Vater kommen — aber der vermeintliche Vater trägt nur die Allele 14 und 16, nicht 18. Daher ist ein Ausschluss an diesem Locus gegeben: Der Mann kann biologisch nicht der Vater sein. Ein Ausschluss an nur einem Locus reicht für den definitiven Nicht-Vaterschaft-Befund (Ausschlusswahrscheinlichkeit = 100%, wenn Mutation ausgeschlossen).',
          hints: [
            'Das Kind hat Allele 15 + 18. Mutter: 15 + 17 → welches Allel gibt die Mutter weiter?',
            'Das übrige Allel (18) muss vom Vater kommen — hat der vermeintliche Vater Allel 18?',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Warum ist mitochondriale DNA (mtDNA) für forensische Analysen bei alten oder degradierten Proben besonders geeignet?',
          options: [
            'mtDNA hat eine niedrigere Mutationsrate als nukleäre DNA und ist daher stabiler',
            'mtDNA liegt in 100–1.000 Kopien pro Zelle vor (vs. 2 Kopien nukleärer DNA) und bleibt daher auch in alten Proben detektierbar',
            'mtDNA ist doppelsträngig und daher stabiler als einzelsträngige nukleäre DNA',
            'mtDNA ist größer als nukleäre DNA und enthält mehr forensische Informationen',
            'mtDNA wird paternal vererbt und ermöglicht daher die Vaterschaftsanalyse',
          ],
          correctIndex: 1,
          explanation: 'Mitochondrien enthalten 100–1.000 mtDNA-Kopien pro Zelle, während jede Zelle nur 2 Kopien nukleärer DNA hat. Bei alten, degradierten Proben (Knochen, Haare ohne Kern, verbrannte Reste) ist nukleäre DNA oft zu stark abgebaut für die STR-Analyse — aber einzelne mtDNA-Kopien sind noch nachweisbar. Forensisch analysierte Regionen: HV1 und HV2 im D-Loop (nicht-kodierende Kontrollregion). Nachteil: mtDNA wird maternal vererbt → alle Kinder einer Mutter haben identische mtDNA → keine individuelle Identifikation, aber Abgleich mit maternalen Verwandten möglich.',
          hints: [
            'Vergleich: nukleäre DNA: 2 Kopien/Zelle. mtDNA: wie viele Kopien/Zelle?',
            'Was passiert mit nukleärer DNA in einem 1.000 Jahre alten Knochen im Vergleich zu mtDNA?',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ist Polymerase-Slippage und welche Konsequenz hat dieser Mechanismus für STR-Loci?',
          options: [
            'Polymerase-Slippage ist ein Fehler bei der Transkription, der zu falschem mRNA-Spleißen führt',
            'Polymerase-Slippage beschreibt das Ausrutschen der Polymerase bei repetitiven Sequenzen → Entstehung neuer Allele mit veränderter Wiederholungszahl',
            'Polymerase-Slippage ist die Ursache für Frameshift-Mutationen durch ddNTP-Einbau',
            'Polymerase-Slippage bezeichnet den Verlust der Polymerase-Aktivität bei extremen Temperaturen',
            'Polymerase-Slippage ist eine Reparaturmethode für Doppelstrangbrüche',
          ],
          correctIndex: 1,
          explanation: 'Bei der DNA-Replikation kann die Polymerase an repetitiven Sequenzen (STRs) "ausrutschen" — der neusynthetisierte Strang bildet eine Haarnadelschleife mit einem der Wiederholungsabschnitte. Beim Weitersyntetisieren entstehen dann mehr Wiederholungen (Insertion) oder weniger (Deletion) als im Elternstrang. Dieser Mechanismus erklärt, warum STR-Loci eine hohe Mutationsrate haben (~0,1–0,2% pro Locus pro Generation) und warum so viele verschiedene Allele in der Population existieren. Diese Variabilität macht STRs zu idealen genetischen Markern.',
          hints: [
            'Stell dir vor, die Polymerase "liest" (CA)₁₅ — bei der 8. Wiederholung rutscht sie zurück zur 5. — was passiert bei der weiteren Synthese?',
            'Was folgt aus der hohen Mutationsrate der STRs für die Anzahl verschiedener Allele in der Bevölkerung?',
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: 'Wie wird STR-Analyse zur Überwachung nach allogener Stammzelltransplantation (SZT) eingesetzt?',
          options: [
            'STR-Analyse identifiziert den HLA-Typ des Spenders für die Kompatibilitätsprüfung vor SZT',
            'STR-Analyse quantifiziert nach SZT den Anteil der Spender-DNA im Blut des Empfängers (Chimärismus-Monitoring)',
            'STR-Analyse detektiert Mutationen im Spendermark, die Transplantatabstoßung verursachen könnten',
            'STR-Analyse ersetzt die PCR für den Nachweis minimaler Resterkrankung (MRD) nach SZT',
            'STR-Analyse wird nur bei Abstoßungsreaktionen eingesetzt, nicht zur Routineüberwachung',
          ],
          correctIndex: 1,
          explanation: 'Nach allogener SZT ko-existieren Spender- und Empfänger-hämatopoetische Zellen im Blut — ein Zustand des Chimärismus. Da Spender und Empfänger unterschiedliche STR-Profile haben, lässt sich per Kapillarelektrophorese der prozentuale Anteil der Spender-DNA quantifizieren. Vollchimärismus (100% Spender) ist das Therapieziel. Zunehmender Empfänger-Anteil (gemischter Chimärismus) ist ein Frühzeichen für Relapse der hämatologischen Grunderkrankung → frühzeitige therapeutische Intervention (z. B. Donor-Lymphozyten-Infusion) möglich.',
          hints: [
            'Chimärismus = Mischung von Spender- und Empfänger-Zellen. Wie erkennt man, welche Zellen vom Spender stammen?',
            'Wenn der Empfänger-Anteil wieder zunimmt, was könnte das bedeuten für die Grunderkrankung?',
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: 'Was ist der Nachteil der mtDNA-Analyse im Vergleich zur STR-Analyse für forensische Identifikation?',
          options: [
            'mtDNA ist instabiler als nukleäre STR-DNA in alten Proben',
            'mtDNA kann keine individuelle Identifikation leisten, da alle maternalen Verwandten identische mtDNA tragen',
            'mtDNA-Analyse ist teurer als STR-Analyse und daher nicht routinemäßig einsetzbar',
            'mtDNA hat keine hypervariablen Regionen und ist daher nicht polymorph',
            'mtDNA wird paternal vererbt und eignet sich daher nicht für Verwandtschaftsanalysen',
          ],
          correctIndex: 1,
          explanation: 'Der entscheidende Nachteil der mtDNA-Analyse ist die maternale Vererbung: Alle Kinder einer Mutter haben identische mtDNA (da Mitochondrien aus dem Zytoplasma der Eizelle stammen, nicht aus Sperma). Das bedeutet: Geschwister, Mutter, Großmutter und alle anderen maternalen Verwandten tragen identische mtDNA-Sequenzen in HV1/HV2. Eine mtDNA-Übereinstimmung kann nicht beweisen, wer von diesen Verwandten die Probe hinterlassen hat. STR-Analyse (nukleäre DNA) ist daher für individuelle Identifikation überlegen — mtDNA ist nur für den Ausschluss oder die Eingrenzung auf eine maternale Linie geeignet.',
          hints: [
            'mtDNA wird maternal vererbt — was bedeutet das für Geschwister mit derselben Mutter?',
            'Wenn Bruder, Schwester und Mutter identische mtDNA haben — was kann man bei einem Fund mit mtDNA-Übereinstimmung sagen?',
          ],
          difficulty: 2,
          tags: [],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UK bio-7-05: Gentechnik — Klonierung und Vektoren
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'bio-7-05',
      title: 'Gentechnik — Klonierung, Vektoren und rekombinante Proteine',
      content: `## Molekulare Klonierung — Ein Gen in einem Wirtsorganismus

**Molekulare Klonierung** bezeichnet die Einbringung eines DNA-Fragments (Zielgen) in einen Vektor (Träger-DNA), der das Fragment in einem Wirtsorganismus (meist E. coli) vermehrt und exprimiert. Ziel: unbegrenzte Kopienproduktion eines Gens oder seines Proteins.

## Klonierungsschritte im Detail

**1. Isolierung des Inserts (Zielgen):**
- Genomische DNA: Restriktionsverdau → spezifisches Fragment
- cDNA: RT-PCR aus mRNA → fügt nur Exons ein (kein Introns — wichtig für Expression in Prokaryoten, da kein Spleißen möglich)
- Synthetisch: chemische DNA-Synthese (für kurze Gene oder optimierte Kodons)

**2. Vektorvorbereitung:**
- Plasmid wird mit demselben Restriktionsenzym geschnitten → kompatible Sticky Ends
- Optional: **Dephosphorylierung** des Vektors (Alkalische Phosphatase entfernt 5'-Phosphat) → verhindert Religation des Vektors ohne Insert

**3. Ligation:**
- **DNA-Ligase** (T4-Ligase) verbindet Insert und Vektor durch Phosphodiesterbindungen — benötigt ATP
- Gerichtete Klonierung: zwei verschiedene Enzyme schneiden Insert und Vektor → Insert kann nur in einer Orientierung eingebaut werden

**4. Transformation:**
- Einbringen der rekombinanten Plasmide in kompetente Wirtszellen (E. coli)
- Chemische Kompetenz: CaCl₂-Behandlung + Hitzeschock (42 °C, 90 sec) — macht Zellmembran vorübergehend permeabel
- Elektroporation: kurze elektrische Pulse öffnen Membranporen — effizienter für bestimmte Organismen

**5. Selektion rekombinanter Klone:**
- Platten mit **Antibiotikum** (z. B. Ampicillin) → nur Zellen mit Plasmid (das Resistenzgen trägt) überleben
- **Blau-Weiß-Selektion:** Das Plasmid-lacZ-Gen (kodiert α-Fragment der β-Galaktosidase) ist durch die **Multiple Cloning Site (MCS)** unterbrochen → Insert in MCS → lacZ zerstört → keine β-Galaktosidase → **weiße Kolonien** = rekombinant; leeres Plasmid (kein Insert) → lacZ intakt → Blau-Substrat (X-Gal) wird gespalten → **blaue Kolonien** = kein Insert

**6. Screening und Verifikation:**
- Kolonie-PCR: direkter PCR-Nachweis des Inserts aus Kolonie
- Restriktionsverdau des isolierten Plasmids → erwartetete Bandenmuster
- Sanger-Sequenzierung des Inserts → exakte Sequenzverifikation

## Expressionsvektoren und rekombinante Proteine

Für die **Proteinexpression** benötigt der Vektor zusätzliche Elemente:
- **Starker Promotor** (z. B. T7-Promotor in E. coli, CMV-Promotor in Säugerzellen)
- **Ribosom-Bindestelle (RBS/Shine-Dalgarno)** für bakterielle Expression
- **His-Tag, GST-Tag, FLAG-Tag:** kurze Aminosäuresequenzen am N- oder C-Terminus des Proteins → Affinitätschromatographie zur Aufreinigung
- **Terminationssequenz**

**Insulin-Produktion per rekombinanter DNA-Technologie:**
Vor 1982 wurde Insulin aus Schweine-/Rinderpankreas gewonnen. Heute wird **rekombinantes Humaninsulin** in E. coli oder Hefe (Saccharomyces cerevisiae) produziert:
1. Synthetisches Insulin-Gen (codon-optimiert für E. coli) → Klonierung in Expressionsvektor
2. Expression in E. coli als Fusionsprotein
3. Aufreinigung, In-vitro-Faltung, Spaltung → aktives Insulin

Weitere rekombinante Proteine in der Medizin: Erythropoetin (EPO, Nierenversagen/Anämie), Wachstumshormon (GH), Faktor VIII (Hämophilie A), monoklonale Antikörper (Trastuzumab, Rituximab), Impfstoffantigene (HBsAg für Hepatitis-B-Impfstoff).

## Genbibliotheken

- **Genomische Bibliothek (gDNA-Library):** Gesamtes Genom fragmentiert und in Vektoren kloniert → enthält alle DNA-Sequenzen inkl. Introns, Promotoren, nicht-kodierende Bereiche
- **cDNA-Bibliothek:** Aus mRNA per RT umgeschriebene cDNA in Vektoren → repräsentiert nur die exprimierten Gene eines bestimmten Zelltyps zum Zeitpunkt der Extraktion → kein Introns, kein nicht-transkribierten Bereiche`,

      lernziele: [
        'Die Klonierungsschritte (Restriktionsverdau, Ligation, Transformation, Selektion) in der richtigen Reihenfolge und mit molekularen Details beschreiben',
        'Das Prinzip der Blau-Weiß-Selektion erklären und wissen, was weiße vs. blaue Kolonien bedeuten',
        'Plasmide, Phagen-Vektoren, BAC und YAC in Bezug auf Kapazität und Anwendung unterscheiden',
        'Mindestens drei rekombinante Proteine (Insulin, EPO, monoklonale AK) und ihre medizinische Bedeutung nennen',
        'Den Unterschied zwischen genomischer Bibliothek und cDNA-Bibliothek erläutern',
      ],

      sections: [
        {
          heading: 'Blau-Weiß-Selektion — Elegante Identifikation rekombinanter Klone',
          text: 'Das pUC-Plasmid-System (und viele moderne Klonierungsvektoren) nutzt das lacZ-α-Komplementationssystem. Das Plasmid trägt ein α-Fragment des lacZ-Gens (β-Galaktosidase). Die Multiple Cloning Site (MCS) liegt mitten im lacZ-α-Fragment. Wenn ein Insert kloniert wird, unterbricht es das Leseraster → kein funktionelles α-Fragment → keine β-Galaktosidase → keine Spaltung des farblosen Substrats X-Gal (5-Bromo-4-Chloro-3-Indolyl-β-D-Galactopyranoside) → weiße Kolonie. Kein Insert (Plasmid religation): lacZ-α intakt → β-Galaktosidase aktiv → X-Gal wird zu blauem Indolderivat gespalten → blaue Kolonie. Fazit: Weiß = potenziell rekombinant (muss durch PCR/Sequenzierung bestätigt werden). Die Platten enthalten IPTG (Induktor von lacZ-Transkription) + X-Gal + Ampicillin.',
          merksatz: 'Blau-Weiß: Blau = kein Insert (lacZ intakt), Weiß = Insert vorhanden (lacZ unterbrochen). IPTG + X-Gal + Ampicillin auf Platte.',
        },
        {
          heading: 'Kompetente Zellen und Transformationseffizienz',
          text: 'Nicht alle E.-coli-Zellen nehmen Plasmide auf — sie müssen zunächst "kompetent" gemacht werden. Chemische Kompetenz: CaCl₂-Behandlung in der Kälte verändert die Membranstruktur; ein kurzer Hitzeschock (42 °C, 45–90 s) öffnet transiente Poren → Plasmid tritt ein. Typische Transformationseffizienz: 10⁵–10⁸ cfu/µg Plasmid-DNA. Elektroporation (2,5 kV, 25 µF) ist effizienter (~10⁸–10¹⁰ cfu/µg) — wichtig für große Plasmide oder schwierig zu transformierende Stämme. Nach der Transformation werden Zellen in flüssigem Medium 1 h bei 37 °C inkubiert (Recovery) — das Ampicillin-Resistenzgen muss exprimiert werden, bevor Ampicillin-Platten verwendet werden.',
          merksatz: 'Kompetenz: CaCl₂ + Hitzeschock (chem.) oder Elektroporation. Recovery-Schritt vor Selektion wichtig.',
        },
        {
          heading: 'Rekombinante Antikörper — Von der Hybridomtechnologie zum Display',
          text: 'Monoklonale Antikörper (mAbs) werden heute überwiegend gentechnisch hergestellt. Traditionell: Hybridom-Technologie (Köhler & Milstein 1975, Nobelpreis 1984) — Fusion immunisierter Maus-B-Zellen mit Myelomzellen → immortale Hybridome. Heute: Phagen-Display und Hefe-Display erlauben vollständig humane mAbs ohne Immunisierung — Antikörper-Gene werden aus einer Bibliothek selektiert. Rekombinante Antikörperformate: vollständiger IgG (150 kDa) für therapeutische mAbs (z. B. Trastuzumab/Herceptin gegen HER2+), scFv (25 kDa, single chain variable fragment) für diagnostische Anwendungen, BiTE (bispezifische T-Zell-Engager, z. B. Blinatumomab für ALL). Produktion: CHO-Zellen (Chinese Hamster Ovary) für komplexe Glykosylierung, E. coli für nicht-glykosylierte Fragmente.',
          merksatz: 'mAbs: Hybridom (Maus) → chimäre/humanisierte → vollhumane (Phagen-Display). CHO-Zellen für glykosylierte Therapeutika.',
        },
        {
          heading: 'Vektoren — Übersicht',
          text: 'Klonierungsvektoren unterscheiden sich in ihrer Kapazität (maximale Insertgröße), dem Wirtsorganismus und besonderen Eigenschaften. Die Wahl des Vektors richtet sich nach der Größe des zu klonierenden DNA-Fragments.',
          table: {
            headers: ["Vektor", "Kapazität", "Wirt", "Besonderheit"],
            rows: [
              ["Plasmid", "~15 kb", "E. coli", "Standard-Klonierung, einfach"],
              ["Phage λ", "20–25 kb", "E. coli", "Phagen-Infektion, hohe Effizienz"],
              ["Cosmid", "40–50 kb", "E. coli", "Phagen-Hülle + Plasmid-Replikation"],
              ["BAC (Bacterial Artificial Chromosome)", "100–300 kb", "E. coli", "Für große genomische Fragmente"],
              ["YAC (Yeast Artificial Chromosome)", "200–2.000 kb", "Hefe", "Für sehr große Inserts (Chromosomensegmente)"],
              ["Expressionsvektor", "variabel", "E. coli/Hefe/CHO", "Promotor, RBS, Tags für Proteinproduktion"],
            ],
          },
        },
      ],

      merksätze: [
        'Klonierungsschritte: Restriktionsverdau → Ligation (T4-Ligase) → Transformation → Selektion (Antibiotikum) → Screening.',
        'Insert: gerichtete Klonierung mit 2 verschiedenen Enzymen → Insert nur in eine Richtung einbaubar.',
        'Blau-Weiß-Selektion: weiß = Insert (lacZ unterbrochen); blau = kein Insert (lacZ intakt). X-Gal + IPTG + Ampicillin.',
        'Plasmid: bis ~15 kb. BAC: bis 300 kb. YAC: bis 2 Mb. Je größer das Insert, desto speziellerer Vektor.',
        'Expressionsvektor: Promotor + RBS + Insert + Terminationssequenz + selektierbarer Marker + Replikationsursprung.',
        'Rekombinantes Insulin (E. coli/Hefe): seit 1982. Vorher aus Schwein/Rind. Codon-Optimierung für E. coli.',
        'cDNA-Bibliothek: nur exprimierte Gene (mRNA→cDNA), kein Introns. Genomische Bibliothek: gesamtes Genom inkl. Introns.',
        'His-Tag (6× His): Affinitätschromatographie über Ni²⁺-Harz → schnelle Aufreinigung des Zielproteins.',
        'Dephosphorylierung des Vektors (CIP/SAP): entfernt 5\'-Phosphat → verhindert Religation ohne Insert.',
        'Monoklonale Antikörper: Hybridomtechnologie (Köhler/Milstein 1975) → heute Phagen-Display für humane mAbs. CHO-Zellen für Produktion.',
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: 'Erklären Sie, wie rekombinantes Humaninsulin hergestellt wird. Welche molekularbiologischen Schritte sind nötig, und warum wird cDNA statt genomischer DNA verwendet?',
        answer: 'Die Herstellung von rekombinantem Humaninsulin umfasst folgende Schritte: (1) Gewinnung der Insulin-cDNA: Aus Pankreas-B-Zellen wird mRNA der Insulinvorstufe (Proinsulin) isoliert; Reverse Transkriptase schreibt die mRNA in cDNA um. Alternativ wird das Insulingen synthetisch nach der bekannten Aminosäuresequenz synthetisiert (codon-optimiert für E. coli). cDNA (nicht genomische DNA) wird verwendet, da E. coli keine Introns spleißen kann — genomische DNA enthält Introns, die nicht entfernt würden, was zu einem nicht-funktionellen Protein führte. (2) Klonierung in Expressionsvektor: Die Insulin-cDNA wird in einen E.-coli-Expressionsvektor mit starkem Promotor (T7 oder tac), Ribosom-Bindestelle und Antibiotikaresistenz-Gen kloniert. (3) Transformation und Expression: Kompetente E.-coli-Zellen werden transformiert; nach Selektion auf Ampicillin-Platten werden Kolonien in Fermentern vermehrt; Insulinsynthese wird durch IPTG induziert. (4) Aufreinigung: Zelllyse → Inclusion Bodies auflösen → In-vitro-Faltung → chromatographische Aufreinigung → Aktivierung (Abspaltung des C-Peptids). Das Produkt (Humulin, Novolin) ist seit 1982 klinisch zugelassen.',
      },

      klinischerBezug: 'Rekombinante Proteine (Insulin, EPO, Wachstumshormon, monoklonale Antikörper) sind Grundlage moderner Pharmakotherapie seit den 1980ern.',

      selfTest: [
        {
          question: 'Was ist die Funktion der DNA-Ligase (T4-Ligase) beim Klonieren?',
          options: [
            'Sie schneidet das Insert an spezifischen Erkennungssequenzen',
            'Sie phosphoryliert die Primer vor dem Annealing im PCR-Schritt',
            'Sie knüpft kovalente Phosphodiesterbindungen zwischen Insert und Vektor (Ligation)',
            'Sie denaturiert die Plasmid-DNA vor der Transformation',
            'Sie inaktiviert das Restriktionsenzym nach dem Verdau',
          ],
          correctIndex: 2,
          explanation: 'DNA-Ligase (T4-Ligase, aus Phage T4) katalysiert die Bildung von Phosphodiesterbindungen zwischen dem 3\'-OH-Ende eines DNA-Strangs und dem 5\'-Phosphat-Ende des nächsten Strangs — sie "näht" die DNA-Enden zusammen. Bei der Klonierung verbindet sie das Insert mit dem linearisierten Vektor. Die Reaktion benötigt ATP als Energielieferant und funktioniert am besten bei 16 °C über Nacht (long ligation) oder 25 °C für 1 h (quick ligation). Sticky ends erleichtern die Ligation durch spontane Hybridisierung der komplementären Überhänge vor dem enzymatischen Versiegeln.',
          hints: [
            'Liga- (lat.: binden) — was bindet die Ligase?',
            'Nach dem Restriktionsverdau entstehen DNA-Enden — was muss passieren, damit Insert und Vektor permanent verbunden sind?',
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Was bedeutet das Ergebnis einer blauen Kolonie bei der Blau-Weiß-Selektion auf Ampicillin-X-Gal-IPTG-Platten?',
          options: [
            'Die Kolonie trägt ein rekombinantes Plasmid mit erfolgreich kloniertem Insert',
            'Die Kolonie trägt ein Plasmid ohne Insert — das lacZ-Gen ist intakt und spaltet X-Gal zu blauem Indolderivat',
            'Die Kolonie enthält kein Plasmid und ist daher für die Klonierung ungeeignet',
            'Die Kolonie hat eine Mutation im Ampicillin-Resistenzgen und ist resistent',
            'Die blaue Farbe entsteht durch Ethidiumbromid-Fluoreszenz im Agarosegel',
          ],
          correctIndex: 1,
          explanation: 'Bei der Blau-Weiß-Selektion gilt: blaue Kolonie = kein Insert. Das Plasmid trägt das lacZ-α-Fragment in der Multiple Cloning Site (MCS). Wenn kein Insert kloniert wird (leeres Plasmid), bleibt das lacZ-α intakt → β-Galaktosidase wird gebildet → das farblose Substrat X-Gal wird zu einem blauen Indolderivat gespalten → blaue Kolonie. Weiße Kolonie = Insert unterbrochen das lacZ-Gen → kein funktionelles Enzym → kein Farbumschlag → weiße Kolonie = potenziell rekombinant (muss per PCR/Sequenzierung bestätigt werden). Alle Kolonien auf Ampicillin-Platten tragen ein Plasmid (Resistenzgen).',
          hints: [
            'lacZ kodiert β-Galaktosidase, die X-Gal blau spaltet — wenn ein Insert ins lacZ eingebaut ist, was passiert mit dem Enzym?',
            'Blau = lacZ funktioniert. Weiß = lacZ unterbrochen. Was unterbricht lacZ?',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Warum wird für die Expression eines humanen Proteins in E. coli cDNA (nicht genomische DNA) verwendet?',
          options: [
            'cDNA ist stabiler als genomische DNA und wird vom Plasmid besser repliziert',
            'E. coli besitzt kein Spleißsystem — genomische DNA enthält Introns, die nicht entfernt würden → kein funktionelles Protein; cDNA enthält nur Exons',
            'cDNA hat einen höheren GC-Gehalt als genomische DNA und wird daher effizienter transkribiert',
            'Genomische DNA ist zu groß für Plasmid-Vektoren; cDNA ist kürzer',
            'E. coli erkennt nur cDNA als Matrize, da es keine RNA-Polymerase II besitzt',
          ],
          correctIndex: 1,
          explanation: 'In eukaryotischen Zellen werden Primärtranskripte (prä-mRNA) durch Spleißen prozessiert: Introns werden entfernt, Exons zu reifer mRNA zusammengefügt. E. coli besitzt keinen Spleißapparat (keine Spleißosomen). Wenn genomische DNA eines humanen Gens in E. coli exprimiert wird, bleibt die Intron-RNA im Transkript → Ribosomen lesen Intron-Sequenzen mit → vorzeitige Stoppcodons oder Frameshift → kein funktionelles Protein. cDNA wird per Reverse Transkription aus reifer mRNA hergestellt → enthält nur Exons → direkte Translation in E. coli möglich. Zusätzlich: Codon-Optimierung (Anpassung an E.-coli-Kodon-Verwendung) erhöht die Expressionseffizienz.',
          hints: [
            'Was ist der Unterschied zwischen prä-mRNA (vor dem Spleißen) und reifer mRNA (nach dem Spleißen)?',
            'cDNA wird aus reifer mRNA gewonnen — enthält sie Introns?',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ist der Unterschied zwischen einer genomischen DNA-Bibliothek und einer cDNA-Bibliothek?',
          options: [
            'Die genomische Bibliothek enthält nur Exons; die cDNA-Bibliothek enthält Exons und Introns',
            'Die genomische Bibliothek enthält das gesamte Genom (inkl. Introns, Promotoren, nicht-kodierende Bereiche); die cDNA-Bibliothek enthält nur die zu einem Zeitpunkt exprimierten Gene (ohne Introns)',
            'Die cDNA-Bibliothek ist für prokaryotische Organismen, die genomische Bibliothek für eukaryotische',
            'Beide Bibliotheken sind identisch — "genomisch" und "cDNA" sind Synonyme',
            'Die cDNA-Bibliothek enthält alle Gene eines Organismus, die genomische nur die regulatorischen Sequenzen',
          ],
          correctIndex: 1,
          explanation: 'Genomische DNA-Bibliothek: Gesamtes Genom wird fragmentiert und in Vektoren (BAC, YAC, Phagen) kloniert → repräsentiert alle DNA-Sequenzen, inkl. Introns, Promotoren, Enhancer, Repetitive Elemente, nicht-kodierende Regionen. Vollständig für alle Zellen eines Organismus. cDNA-Bibliothek: Aus mRNA per Reverse Transkriptase gewonnene cDNA → repräsentiert nur die Gene, die in einem bestimmten Zelltyp zu einem bestimmten Zeitpunkt exprimiert werden → keine Introns, keine nicht-transkribierten Sequenzen. Eine Leberzell-cDNA-Bibliothek enthält andere Gene als eine Gehirn-cDNA-Bibliothek.',
          hints: [
            'cDNA wird aus mRNA hergestellt — welche Gene sind in einer Leberzelle zu einem bestimmten Zeitpunkt in mRNA vorhanden?',
            'Enthält die genomische Bibliothek alle Gene (auch nicht-exprimierte)? Enthält die cDNA-Bibliothek auch nicht-exprimierte Gene?',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welcher Vektor ist für das Klonieren von DNA-Fragmenten >300 kb am geeignetsten?',
          options: [
            'Standard-Plasmid (bis ~15 kb)',
            'Lambda-Phage (bis 25 kb)',
            'Cosmid (bis 50 kb)',
            'BAC (Bacterial Artificial Chromosome, bis 300 kb)',
            'YAC (Yeast Artificial Chromosome, bis 2.000 kb)',
          ],
          correctIndex: 4,
          explanation: 'Für sehr große DNA-Inserts (>300 kb) sind YACs (Yeast Artificial Chromosomes) die geeignetsten Vektoren. YACs wurden für das Human Genome Project verwendet und können Inserts von 200–2.000 kb aufnehmen. Sie werden in Hefe (Saccharomyces cerevisiae) repliziert und enthalten Telomere, Zentromere und einen Replikationsursprung — also alle notwendigen chromosomalen Elemente. BACs (Bacterial Artificial Chromosomes) können bis ~300 kb aufnehmen und sind stabilere Alternativen für das mittlere Größensegment. Normale Plasmide kollabieren bei großen Inserts — Replikation wird ineffizient.',
          hints: [
            'Wenn Plasmide ~15 kb, Phagen ~25 kb, Cosmide ~50 kb, BAC ~300 kb — was kommt für >300 kb?',
            'YAC = Yeast Artificial Chromosome. In welchem Organismus wird es repliziert, und was ermöglicht dieses System?',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welches Selektionsprinzip wird bei der Klonierung mit Antibiotikaresistenz-Genen genutzt?',
          options: [
            'Alle Zellen sterben ab — nur das Antibiotikum selektiert überlebende Klone',
            'Nur Zellen, die das Plasmid mit dem Resistenzgen aufgenommen haben, überleben auf Antibiotikum-Platten',
            'Das Antibiotikum aktiviert die Plasmid-Replikation in kompetenten Zellen',
            'Das Resistenzgen im Plasmid inaktiviert das Antibiotikum im Medium direkt',
            'Alle transformierten Zellen werden durch das Antibiotikum markiert und können isoliert werden',
          ],
          correctIndex: 1,
          explanation: 'Klonierungsvektoren (z. B. pUC19) tragen ein Antibiotikaresistenz-Gen (z. B. Ampicillin-Resistenz, β-Laktamase). Nach der Transformation werden die Zellen auf Agarplatten mit dem entsprechenden Antibiotikum ausgestrichen. Zellen ohne Plasmid (nicht transformiert) → haben kein Resistenzgen → sterben ab. Zellen mit Plasmid → exprimieren β-Laktamase → inaktivieren Ampicillin → überleben → bilden Kolonien. Dieses einfache Prinzip stellt sicher, dass jede gewachsene Kolonie ein Plasmid enthält. Ob das Plasmid ein Insert trägt, wird dann durch Blau-Weiß-Selektion oder PCR bestimmt.',
          hints: [
            'Warum sterben nicht-transformierte Zellen auf Ampicillin-Platten ab?',
            'Was codiert das Resistenzgen — und welche Reaktion rettet die Zelle vor dem Antibiotikum?',
          ],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welches rekombinante Protein war das erste, das in E. coli produziert und klinisch zugelassen wurde?',
          options: [
            'Erythropoetin (EPO) — 1989',
            'Wachstumshormon (GH) — 1985',
            'Humaninsulin (Humulin) — 1982',
            'Faktor VIII für Hämophilie A — 1984',
            'Hepatitis-B-Oberflächenantigen (HBsAg) für Impfstoff — 1986',
          ],
          correctIndex: 2,
          explanation: 'Humaninsulin (Humulin, von Eli Lilly/Genentech) war das erste rekombinante DNA-Therapeutikum, das 1982 von der FDA zugelassen wurde. Das Insulingen wurde synthetisch hergestellt (codon-optimiert für E. coli) und in E. coli exprimiert. Dies beendete die Abhängigkeit von tierischem Insulin (Schwein/Rind) und war ein Meilenstein der Biotechnologie. Wachstumshormon wurde 1985 zugelassen; EPO 1989 (aus CHO-Zellen, da Glykosylierung nötig). Hepatitis-B-Impfstoff (rekombinantes HBsAg aus Hefe) wurde 1986 zugelassen.',
          hints: [
            'Vor den 1980er Jahren wurde Insulin aus Schweinen und Rindern gewonnen — wann änderte sich das?',
            'Rekombinant, E. coli, 1982 — welches lebensnotwendige Hormon für Diabetiker wird damit produziert?',
          ],
          difficulty: 1,
          tags: [],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UK bio-7-06: Genomeditierung — CRISPR-Cas9 und GVO
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'bio-7-06',
      title: 'Genomeditierung — CRISPR-Cas9, Gentherapie und GVO',
      content: `## CRISPR-Cas9 — Molekulare Schere mit Navigationssystem

**CRISPR-Cas9** (Clustered Regularly Interspaced Short Palindromic Repeats — CRISPR-associated protein 9) ist das revolutionärste Werkzeug der Genomeditierung. Jennifer Doudna und Emmanuelle Charpentier erhielten 2020 den Nobelpreis für Chemie für seine Entwicklung. Das System stammt ursprünglich aus dem bakteriellen Immunsystem: Bakterien speichern kurze DNA-Sequenzen von früheren Phagen-Infektionen im CRISPR-Locus; bei erneuter Infektion erkennt das Cas9-Protein mit Guide-RNA die Phagen-DNA und schneidet sie.

## Molekularer Mechanismus von CRISPR-Cas9

**Komponenten:**
- **Cas9-Protein:** Eine Endonuklease aus Streptococcus pyogenes (SpCas9, 1.368 Aminosäuren) mit zwei Nuklease-Domänen (RuvC und HNH) — jede schneidet einen DNA-Strang → doppelsträngiger Bruch (DSB)
- **Guide-RNA (gRNA):** Eine synthetische RNA, bestehend aus:
  - **crRNA-Anteil (20 nt):** komplementär zur Zielsequenz in der genomischen DNA (Spacer)
  - **tracrRNA-Anteil (scaffold):** bindet an Cas9 und formt die korrekte 3D-Struktur
  - In der Praxis als **single guide RNA (sgRNA)** fusioniert

**Targetfindung:**
1. Die sgRNA durchsucht das Genom nach komplementären Sequenzen
2. Cas9 erkennt zunächst ein **PAM-Motiv** (Protospacer Adjacent Motif): für SpCas9 ist das 5'-NGG-3' (direkt 3' der Zielsequenz auf dem nicht-komplementären Strang)
3. Bei PAM-Erkennung öffnet Cas9 die DNA-Doppelhelix und prüft Komplementarität der sgRNA zu den 20 nt 5' des PAM — bei perfekter Hybridisierung: Konformationsänderung von Cas9 → Aktivierung beider Nuklease-Domänen → doppelsträngiger Schnitt 3 bp vor dem PAM

**Spezifität:** Die 20 nt-Spacersequenz + PAM-Anforderung schränkt mögliche Off-Target-Schnitte ein, ist aber nicht perfekt — Off-Target-Schnitte an ähnlichen Sequenzen im Genom sind eine klinische Sorge.

## DNA-Reparaturwege nach dem Schnitt

Nach dem DSB wird die Zelle repariert — zwei konkurrierende Wege:

**1. NHEJ (Non-Homologous End Joining):**
- Dominanter Weg in nicht-teilenden Zellen und in G1-Phase
- Ligiert die DNA-Enden direkt, ohne Vorlage
- Fehleranfällig: **Insertionen/Deletionen (Indels)** von 1–20 bp entstehen
- Konsequenz: **Frameshift-Mutation → vorzeitiges Stoppcodon → Knockout des Gens**
- Anwendung: gezielter Genknockout (Loss-of-function) für Forschung und Therapie

**2. HDR (Homology-Directed Repair):**
- Aktiv hauptsächlich in S/G2-Phase (nach DNA-Replikation), wenn Schwesterchromatid als Vorlage dient
- Wenn ein **Reparaturtemplate (Donor-DNA)** mit homologen Flanken bereitgestellt wird, kopiert die Zelle die gewünschte Sequenz
- Ermöglicht **präzise Genkorrekturen** (Einzelbasenänderung, Insertionen eines Transgens)
- Nachteil: ineffizienter als NHEJ in den meisten Zelltypen (besonders post-mitotische Zellen)
- Anwendung: therapeutische Genkorrekturen (z. B. Sichelzellanämie)

**Base Editing und Prime Editing (neuere Varianten):**
- **Base Editing:** Nickase-Cas9 (nur ein Strang wird geschnitten) + Deaminase → direkte Umwandlung C→T oder A→G ohne DSB — weniger genotoxisch
- **Prime Editing (2019, David Liu):** Cas9-Nickase + Reverse Transkriptase + pegRNA → schreibt neue Sequenz direkt in Zielort → präziseste CRISPR-Variante bisher

## Gentherapie — Gene in Patienten bringen

**Ex-vivo-Gentherapie:**
1. Zellen werden dem Patienten entnommen (z. B. hämatopoetische Stammzellen aus Knochenmark)
2. Genetische Modifikation in vitro (CRISPR, lentiviraler Vektor)
3. Qualitätsprüfung
4. Reinfusion in den Patienten (nach konditionierender Chemotherapie)
- Vorteile: Kontrolle über bearbeitete Zellen, sichere Qualitätsprüfung möglich
- Beispiel: **CTX001/Casgevy (Vertex/CRISPR Therapeutics):** CRISPR-basierte Ex-vivo-Therapie für Sichelzellanämie und β-Thalassämie; reaktiviert fetales Hämoglobin (HbF) durch Knockout des BCL11A-Repressors in HSCs; FDA-Zulassung Dezember 2023

**In-vivo-Gentherapie:**
- Therapeutische Gene direkt in den Patienten (systemisch oder lokal) eingebracht
- Vektoren: **AAV (Adeno-assoziiertes Virus):** nicht-integrierend, geringes Immunogenitätsprofil; verschiedene Serotypen (AAV9 für ZNS/Muskel, AAV8 für Leber); **lentiviraler Vektor:** integriert ins Wirtsgenom (dauerhaft) — Insertionsmutagenese-Risiko; **Lipid-Nanopartikel (LNP):** für mRNA/siRNA-Delivery (Beispiel: Alnylam-Therapien, Onpattro für Transthyretin-Amyloidose)
- Beispiele: Zolgensma (Spinale Muskelatrophie, AAV9-SMN1); Luxturna (Netzhautdystrophie, AAV2-RPE65); Hemgenix (Hämophilie B, AAV5-FIX)

## Ethische Aspekte der Genomeditierung

**Somatische Gentherapie:** Modifikation nicht-reproduktiver Zellen → Änderungen werden nicht an Nachkommen vererbt → ethisch weitgehend akzeptiert (als erweitertes Arzneimittel betrachtet)

**Keimbahn-Editierung:** Modifikation von Keimzellen (Spermien, Eizellen) oder frühen Embryonen → Änderungen werden an alle Nachkommen vererbt → International (bis auf wenige Ausnahmen) verboten
- 2018 sorgte der chinesische Wissenschaftler He Jiankui für internationalen Skandal: Er editierte menschliche Embryonen per CRISPR (CCR5-Gen für HIV-Resistenz) → weltweite Verurteilung, Strafverfolgung

**Off-Target-Effekte:** CRISPR schneidet manchmal an ähnlichen (nicht identischen) Genomstellen → potenzielle Onkogenaktivierung, chromosomale Umbauten; Screening per GUIDE-seq, CIRCLE-seq

**CAR-T-Zellen:** Chimeric Antigen Receptor T-Zellen — Patienteigene T-Zellen werden per Lentivirus/CRISPR mit einem künstlichen Rezeptor ausgestattet (z. B. CD19-CAR → Angriff auf B-Zell-Leukämien). CRISPR wird verwendet, um zusätzliche Checkpoints zu entfernen (PD-1-Knockout) und allogene "universal" CAR-T-Zellen ohne GvH-Reaktion zu erzeugen.`,

      lernziele: [
        'Den CRISPR-Cas9-Mechanismus (sgRNA, PAM, DSB) molekular erklären',
        'NHEJ und HDR als Reparaturwege unterscheiden und ihre Konsequenzen (Knockout vs. Korrektur) ableiten',
        'Ex-vivo- und In-vivo-Gentherapie mit Beispielen (Casgevy, Zolgensma) unterscheiden',
        'AAV, lentivirale Vektoren und Lipid-Nanopartikel als Vehikel der Gentherapie vergleichen',
        'Ethische Aspekte der somatischen vs. Keimbahn-Gentherapie darlegen und die He-Jiankui-Kontroverse einordnen',
      ],

      sections: [
        {
          heading: 'CRISPR-Cas9 vs. klassische Genomeditierungswerkzeuge',
          text: 'Vor CRISPR-Cas9 gab es zwei Hauptwerkzeuge für gezielte Genomschnitte: **Zinkfinger-Nukleasen (ZFNs)** und **TALENs (Transcription Activator-Like Effector Nucleases)**. Beide erfordern für jede neue Zielsequenz die aufwendige Proteintechnik — neue Zinkfinger- oder TALE-Domänen müssen maßgeschneidert kloniert werden (Wochen bis Monate). CRISPR-Cas9 revolutionierte dies: Die Spezifität wird allein durch die 20-nt-sgRNA-Sequenz kodiert — eine neue Zielsequenz erfordert lediglich die Synthese einer neuen sgRNA (Tage, Kosten ~200 €). Dieses "Plug-and-play"-Prinzip macht CRISPR extrem zugänglich. Einschränkungen: SpCas9 benötigt das PAM-Motiv NGG — für Targets ohne passendes PAM wurden alternative Cas-Proteine (Cas12a/Cpf1 mit TTTV-PAM, SaCas9 mit NNGRRT-PAM) entwickelt.',
          merksatz: 'CRISPR: neue Zielsequenz → neue sgRNA (Tage). ZFN/TALEN: neue Zielsequenz → neues Protein (Wochen). Cas9 braucht PAM (NGG für SpCas9).',
        },
        {
          heading: 'Casgevy — Erste CRISPR-Therapie in der klinischen Praxis',
          text: 'Casgevy (Exa-cel, früher CTX001) ist die erste behördlich zugelassene CRISPR-Therapie (FDA: Dezember 2023; EMA: Februar 2024) für Sichelzellanämie und transfusionsabhängige β-Thalassämie. Prinzip: Hämatopoetische Stammzellen (HSCs) des Patienten werden entnommen. Ex vivo wird per CRISPR-Cas9 der Transkriptionsrepressor **BCL11A** im Erythrozyten-Enhancer gezielt ausgeknockt. BCL11A unterdrückt normalerweise das fetale Hämoglobin-Gen (HBG1/2) nach der Geburt. Knockout → HbF-Reaktivierung → fetales Hämoglobin (γ-Ketten) ersetzt die defekten β-Ketten → keine Sichelung. Klinische Daten: >97% der behandelten Patienten schmerzfrei nach 1 Jahr; bei β-Thalassämie >90% transfusionsfrei. Preis: ca. 2,2 Millionen USD pro Behandlung.',
          merksatz: 'Casgevy (Exa-cel): CRISPR-Knockout von BCL11A in HSCs → HbF-Reaktivierung → Sichelzellanämie geheilt. FDA-Zulassung Dez. 2023.',
        },
        {
          heading: 'Lipid-Nanopartikel und mRNA-Therapie — jenseits von COVID-Impfstoffen',
          text: 'Lipid-Nanopartikel (LNPs) wurden durch COVID-19-mRNA-Impfstoffe (BNT162b2, mRNA-1273) bekannt, sind aber die Basis einer breiteren Therapeutikklasse. LNPs kapseln mRNA oder siRNA ein, schützen vor Nuklease-Abbau und ermöglichen zelluläre Aufnahme (Endozytose) und Freisetzung ins Zytoplasma. Alnylam Pharmaceuticals entwickelte **Onpattro (Patisiran)**: siRNA in LNPs gegen Transthyretin-mRNA bei hereditärer Transthyretin-Amyloidose (hATTR) — erste klinisch zugelassene siRNA-Therapie (2018). In der Gentherapie werden LNPs für mRNA-basierte CRISPR-Cas9-Delivery entwickelt: transiente Expression ohne genomische Integration des Cas9-Gens (geringeres Off-Target-Risiko). Leber ist bevorzugtes Zielorgan (hohe LNP-Akkumulation durch ApoE-vermittelte Aufnahme über LDL-Rezeptoren).',
          merksatz: 'LNPs: kapseln mRNA/siRNA, schützen vor Abbau, ermöglichen zelluläre Aufnahme. Onpattro = erste siRNA-Therapie (hATTR, 2018).',
        },
      ],

      merksätze: [
        'CRISPR-Cas9: sgRNA (20 nt + PAM) führt Cas9 zur Zielsequenz → doppelsträngiger Bruch 3 bp vor PAM (NGG).',
        'NHEJ: fehleranfällige Reparatur → Indels → Frameshift → Genknockout. HDR: präzise Korrektur mit Template → Geneditierung.',
        'Ex-vivo-Gentherapie: Zellen entnehmen → in vitro editieren → reinfundieren. In-vivo: Vektor direkt in Patient.',
        'AAV: nicht-integrierend, geringes Immunogenitätsprofil, serotypspezifisch (AAV9 → Muskel/ZNS, AAV8 → Leber).',
        'Lentiviraler Vektor: integriert ins Wirtsgenom → dauerhafte Expression, aber Insertionsmutagenese-Risiko.',
        'Casgevy (Exa-cel): CRISPR-BCL11A-Knockout → HbF-Reaktivierung → Sichelzellanämie-Heilung. FDA-Zulassung Dez. 2023.',
        'Keimbahn-Editierung: international weitgehend verboten. He Jiankui 2018: CCR5-Knockout in Embryo → Skandal und Strafverfolgung.',
        'Off-Target-Effekte: Cas9 schneidet an ähnlichen Nicht-Zielsequenzen → mögliche Onkogenaktivierung → Screening nötig.',
        'CAR-T-Zellen: T-Zellen + lentiviraler CAR-Vektor → CD19-Targeting (B-Zell-ALL). CRISPR → PD-1-Knockout für Effizienzsteigerung.',
        'Base Editing: Nickase-Cas9 + Deaminase → C→T oder A→G ohne DSB. Prime Editing: pegRNA + RT → präziseste Einfügung.',
      ],

      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: 'Erklären Sie, wie CRISPR-Cas9 funktioniert und welche Reparaturwege nach dem Doppelstrangbruch zu unterschiedlichen Ergebnissen führen. Geben Sie ein klinisches Anwendungsbeispiel.',
        answer: 'CRISPR-Cas9 ist ein RNA-geführtes Endonuklease-System. Die single guide RNA (sgRNA) besteht aus einem 20-Nukleotid-Spacer, der komplementär zur Zielsequenz in der genomischen DNA ist, und einem Scaffold, der an Cas9 bindet. Cas9 sucht das Genom nach PAM-Motiven (5\'-NGG-3\') ab; bei Erkennung öffnet es die Doppelhelix und prüft Komplementarität des Spacers — bei Übereinstimmung schneiden beide Nuklease-Domänen (RuvC und HNH) je einen Strang → doppelsträngiger Bruch (DSB) 3 bp vor dem PAM. Nach dem DSB gibt es zwei Reparaturwege: NHEJ (Non-Homologous End Joining) ligiert die Enden fehleranfällig → Insertionen/Deletionen (Indels) → oft Frameshift → Genknockout. HDR (Homology-Directed Repair) nutzt ein bereitgestelltes Donor-Template → präzise Sequenzkorrektur, aber ineffizienter. Klinisches Beispiel: Casgevy (Exa-cel) für Sichelzellanämie — CRISPR-Cas9 knockt per NHEJ den BCL11A-Repressor in hämatopoetischen Stammzellen aus → Reaktivierung des fetalen Hämoglobins (HbF) → kein pathologisches HbS mehr gebildet. FDA-Zulassung Dezember 2023.',
      },

      klinischerBezug: 'Casgevy ist die erste CRISPR-basierte Therapie (FDA Dez. 2023); AAV-Gentherapien (Zolgensma, Luxturna) revolutionieren seltene Erbkrankheiten.',

      selfTest: [
        {
          question: 'Welche Rolle spielt das PAM-Motiv (Protospacer Adjacent Motif) beim CRISPR-Cas9-System?',
          options: [
            'Das PAM-Motiv ist Teil der Guide-RNA und bestimmt die Spezifität der Cas9-Bindung',
            'Das PAM-Motiv ist eine kurze DNA-Sequenz (z. B. 5\'-NGG-3\' für SpCas9) auf dem Zielstrang, die von Cas9 erkannt werden muss, bevor es die DNA öffnet und schneidet',
            'Das PAM-Motiv verhindert Off-Target-Schnitte, indem es die Cas9-Aktivität blockiert',
            'Das PAM-Motiv ist eine RNA-Sequenz im Cas9-Transkript, die die Translation reguliert',
            'Das PAM-Motiv ist der Bereich, in dem Cas9 den doppelsträngigen Bruch erzeugt',
          ],
          correctIndex: 1,
          explanation: 'Das PAM-Motiv (für SpCas9: 5\'-NGG-3\') ist eine kurze Sequenz direkt 3\' der Zielsequenz auf dem nicht-komplementären DNA-Strang. Cas9 scannt das Genom nach PAM-Motiven — erst wenn ein NGG-Motiv gefunden wird, öffnet Cas9 die doppelsträngige DNA und prüft, ob die sgRNA komplementär zu den 20 nt 5\' des PAM ist. Nur bei Übereinstimmung wird geschnitten (3 bp vor dem PAM). Das PAM ist für die Erkennung essenziell, aber nicht Teil des Zielsequenz-Spacers in der sgRNA. Verschiedene Cas9-Homologe (SaCas9, Cas12a) haben andere PAM-Anforderungen.',
          hints: [
            'SpCas9 kommt aus Streptococcus pyogenes — was ist das spezifische PAM-Motiv dieses Enzyms?',
            'Wenn das PAM fehlt, kann Cas9 nicht schneiden — welche Bedeutung hat das für die Wahl der Zielsequenz?',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ist der Unterschied zwischen NHEJ und HDR als Reparaturwege nach einem CRISPR-Cas9-induzierten Doppelstrangbruch?',
          options: [
            'NHEJ repariert präzise mit einem Template; HDR ist fehleranfällig und erzeugt Indels',
            'NHEJ ist fehleranfällig und erzeugt Indels (→ Genknockout); HDR repariert präzise mittels Donor-Template (→ Genkorrektur)',
            'NHEJ ist nur in teilenden Zellen aktiv; HDR funktioniert in allen Zellphasen',
            'NHEJ und HDR liefern identische Ergebnisse — nur die Geschwindigkeit unterscheidet sich',
            'NHEJ benötigt ein Donor-Template mit homologen Sequenzen; HDR nicht',
          ],
          correctIndex: 1,
          explanation: 'NHEJ (Non-Homologous End Joining) ist der dominante Reparaturweg: Die DNA-Enden werden ohne Matrize direkt ligiert → fehleranfällig → Insertionen/Deletionen (Indels) von 1–20 bp → oft Frameshift → vorzeitiges Stoppcodon → Protein-Knockout. Anwendung: Gezielter Genknockout. HDR (Homology-Directed Repair) nutzt ein bereitgestelltes Donor-Template (mit homologen Flanken) für die präzise Korrektur → gewünschte Sequenzänderung wird exakt eingefügt. Nachteil: HDR ist ineffizienter (v. a. in post-mitotischen Zellen in G1-Phase), da es hauptsächlich in S/G2 aktiv ist.',
          hints: [
            'NHEJ = ohne Vorlage. Was passiert, wenn man die Enden ohne Vorlage zusammenfügt?',
            'HDR = mit Donor-DNA als Vorlage (homologous = mit Homologie). Welche Art von Reparatur ermöglicht das?',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ist Casgevy (Exa-cel) und welches Gen wird dabei per CRISPR-Cas9 editiert?',
          options: [
            'Eine Gentherapie, die das HBB-Gen (β-Globin) direkt korrigiert, um normale rote Blutzellen herzustellen',
            'Eine Ex-vivo-CRISPR-Therapie, die BCL11A in hämatopoetischen Stammzellen knockout, um fetales Hämoglobin zu reaktivieren',
            'Eine in-vivo-Therapie mit AAV-Vektor, der Cas9 in Knochenmarkzellen einschleust',
            'Eine siRNA-Therapie gegen HbS-mRNA, die Sichelzellhämoglobin direkt abbaut',
            'Eine CAR-T-Zell-Therapie gegen Erythrozytenvorläufer bei Sichelzellanämie',
          ],
          correctIndex: 1,
          explanation: 'Casgevy (Exa-cel, früher CTX001, Vertex/CRISPR Therapeutics) ist die erste klinisch zugelassene CRISPR-Therapie (FDA: Dez. 2023, EMA: Feb. 2024) für Sichelzellanämie und transfusionsabhängige β-Thalassämie. Ex-vivo-Ansatz: Hämatopoetische Stammzellen des Patienten werden entnommen → CRISPR-Cas9 knockout BCL11A (genauer: den erythrozytären Enhancer von BCL11A) → BCL11A-Protein wird in roten Blutzellen nicht mehr exprimiert → BCL11A ist ein Repressor der fetalen Hämoglobin-Gene (HBG1/2) → HbF wird reaktiviert → Fetales Hämoglobin kompensiert das defekte HbS. Klinische Daten: >97% Patienten schmerzfrei nach 1 Jahr.',
          hints: [
            'BCL11A unterdrückt fetales Hämoglobin (HbF) nach der Geburt — was passiert, wenn BCL11A ausgeknockt wird?',
            'Ex vivo = außerhalb des Körpers — welche Zellen werden dem Patienten entnommen und editiert?',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Warum ist die Keimbahn-Genomeditierung beim Menschen international weitgehend verboten?',
          options: [
            'Weil CRISPR-Cas9 in Keimzellen technisch nicht funktioniert',
            'Weil Keimbahn-Editierungen an alle Nachkommen vererbt werden, ohne deren Einwilligung, und mit unbekannten Off-Target-Risiken',
            'Weil somatische Gentherapie effektiver und billiger ist',
            'Weil Keimzellen kein NHEJ-System besitzen und Edits nicht stabil sind',
            'Weil internationale Patentrechte für CRISPR die Nutzung in Keimzellen verbieten',
          ],
          correctIndex: 1,
          explanation: 'Keimbahn-Editierung (Modifikation von Spermien, Eizellen oder frühen Embryonen) führt zu Änderungen, die an alle Nachkommen vererbt werden — ohne deren Einwilligung. Ethische Hauptprobleme: (1) Fehlende Einwilligung zukünftiger Generationen; (2) Off-Target-Effekte (Cas9 schneidet auch unbeabsichtigt an ähnlichen Sequenzen → unbekannte Langzeitrisiken in der Keimbahn); (3) Mosaizismus (nicht alle Zellen des Embryos werden editiert → heterogenes Ergebnis); (4) Eugenik-Bedenken (Enhancement). He Jiankuis Experiment 2018 (CCR5-Knockout → HIV-Resistenz) führte zu weltweiter Verurteilung und seiner Inhaftierung.',
          hints: [
            'Somatische Therapie verändert nur die eigenen Zellen — was ist der Unterschied bei Keimbahntherapie für zukünftige Kinder?',
            'He Jiankui editierte menschliche Embryonen 2018 — was war die internationale Reaktion und warum?',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ist der Unterschied zwischen AAV (Adeno-assoziierter Virus) und lentiviralen Vektoren als Gentherapie-Vehikel?',
          options: [
            'AAV integriert ins Wirtsgenom (dauerhafte Expression); lentivirale Vektoren bleiben episomal (vorübergehend)',
            'AAV bleibt überwiegend episomal (nicht-integrierend); lentivirale Vektoren integrieren ins Wirtsgenom (dauerhaft)',
            'Beide Vektoren sind identisch — der Unterschied liegt nur in der Produktionskosten',
            'AAV wird nur für ZNS-Anwendungen verwendet; lentivirale Vektoren nur für Bluterkrankungen',
            'Lentivirale Vektoren haben ein höheres Immunogenitätsprofil als AAV',
          ],
          correctIndex: 1,
          explanation: 'AAV (Adeno-assoziierter Virus): bleibt nach Infektion überwiegend episomal (als zirkuläre DNA außerhalb des Chromosoms) → keine Insertionsmutagenese (Risiko einer Onkogenaktivierung ist sehr gering). Verschiedene Serotypen: AAV9 → Muskel/ZNS (Zolgensma bei SMA), AAV8 → Leber. Nachteil: limitierte Kapazität (~4,7 kb) und Immunantwort bei Dosierung. Lentiviraler Vektor (aus HIV-1 abgeleitet, inaktiviert): integriert in Wirtsgenom → dauerhafter Geneinbau, auch in nicht-teilenden Zellen (Vorteil) → aber Insertionsmutagenese-Risiko (Insertionsstelle kann Onkogen aktivieren oder Tumorsuppressor inaktivieren). Anwendung: CAR-T-Zellen, ex-vivo HSC-Therapien.',
          hints: [
            'Episomal = außerhalb der Chromosomen. Was passiert, wenn eine Zelle sich teilt und die episomale DNA nicht repliziert wird?',
            'Was ist Insertionsmutagenese — und welcher Vektor hat dieses Risiko?',
          ],
          difficulty: 3,
          tags: [],
        },
        {
          question: 'Was sind CAR-T-Zellen und wie werden sie hergestellt?',
          options: [
            'CAR-T-Zellen sind T-Zellen, die durch UV-Strahlung aktiviert werden, um Tumorzellen zu erkennen',
            'CAR-T-Zellen sind gentechnisch modifizierte T-Zellen mit einem chimären Antigenrezeptor, der spezifisch Tumorzellen erkennt; hergestellt durch lentivirale/retroviralen Vektortransduktion',
            'CAR-T-Zellen sind natürliche Killer-T-Zellen, die ohne genetische Modifikation Tumorzellen abtöten',
            'CAR-T-Zellen sind monoklonale Antikörper, die an T-Zellen gekoppelt werden',
            'CAR-T-Zellen werden durch CRISPR-Knockout des TCR hergestellt, um allogene Transplantat-Reaktionen zu vermeiden',
          ],
          correctIndex: 1,
          explanation: 'CAR-T-Zellen (Chimeric Antigen Receptor T-cells) sind patienteneigene (autologe) oder Spender-T-Zellen (allogene), die gentechnisch mit einem künstlichen Rezeptor ausgestattet wurden. Herstellung: Leukapherese → T-Zellen isolieren → Transduktion mit lentiviralen/retroviralem Vektor, der CAR kodiert → CAR-T-Zellen expandieren → Reinfusion. Der CAR besteht aus einem extrazellulären Antikörper-Fragment (z. B. anti-CD19 für B-Zell-ALL), einer Transmembrandomäne und intrazellulären Signaldomänen (CD3ζ, CD28 oder 4-1BB). Bei Antigenbindung werden T-Zellen aktiviert → Tumorzelle tötet. CRISPR-Knockout von PD-1 oder TCR verbessert allogene CAR-T-Zellen.',
          hints: [
            'CAR = Chimeric Antigen Receptor — "chimär" bedeutet aus verschiedenen Teilen zusammengesetzt. Was kombiniert ein CAR?',
            'Wie wird der CAR-Rezeptor in die T-Zelle eingebracht?',
          ],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ist der Unterschied zwischen Base Editing und klassischem CRISPR-Cas9?',
          options: [
            'Base Editing erzeugt einen doppelsträngigen Bruch (DSB); klassisches CRISPR-Cas9 nicht',
            'Base Editing nutzt eine Nickase-Cas9 (schneidet nur einen Strang) + Deaminase und ändert direkt C→T oder A→G ohne Doppelstrangbruch',
            'Base Editing erfordert ein Donor-Template (HDR); CRISPR-Cas9 funktioniert ohne Template',
            'Base Editing ist weniger spezifisch als CRISPR-Cas9 und wird nicht klinisch verwendet',
            'Base Editing kann nur in E. coli, nicht in menschlichen Zellen angewendet werden',
          ],
          correctIndex: 1,
          explanation: 'Klassisches CRISPR-Cas9 erzeugt einen doppelsträngigen Bruch (DSB) → Reparatur via NHEJ (Indels) oder HDR (präzise). Das Problem: DSBs können zu chromosomalen Umbauten, Translokationen oder p53-Aktivierung führen. Base Editing (David Liu, Broad Institute) ist weniger invasiv: Eine Nickase-Cas9 (nCas9 = schneidet nur einen DNA-Strang) ist mit einer Deaminase fusioniert. Cytosine Base Editor (CBE): Deaminase konvertiert C→U (→ T) im Zielbereich ohne DSB. Adenine Base Editor (ABE): konvertiert A→I (→ G). Ergebnis: präzise Punktmutationskorrektur ohne DSB → weniger genotoxisch. Limitierung: nur bestimmte Basenaustausche möglich.',
          hints: [
            'Warum ist ein Doppelstrangbruch (DSB) potenziell gefährlicher als ein Einzelstrangbruch (nick)?',
            'Base Editing = direkte chemische Modifikation einer Base. Welche Enzyme katalysieren eine solche Reaktion?',
          ],
          difficulty: 3,
          tags: [],
        },
      ],
    },
  ],
};
