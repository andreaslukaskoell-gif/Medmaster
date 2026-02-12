import type { Kapitel } from '../types';

export const bioKap5: Kapitel = {
  id: 'bio-kap5',
  title: 'Molekulare Genetik',
  subject: 'biologie',
  icon: '🔗',
  estimatedTime: '35 Minuten',
  unterkapitel: [
    // =====================================================================
    // 5.1 DNA-Aufbau
    // =====================================================================
    {
      id: 'bio-kap5-uk1',
      title: 'DNA-Aufbau',
      content: `Die Desoxyribonukleinsäure (DNA) ist das Trägermolekül der Erbinformation in allen zellulären Lebewesen. Ihre dreidimensionale Struktur wurde 1953 von James Watson und Francis Crick auf Grundlage der Röntgenbeugungsdaten von Rosalind Franklin und Maurice Wilkins als Doppelhelix beschrieben. Die DNA besteht aus zwei antiparallel verlaufenden Polynukleotidsträngen, die sich rechtsgängig umeinander winden. Jeder Strang hat eine 5'→3'-Polarität: Das 5'-Ende trägt eine freie Phosphatgruppe, das 3'-Ende eine freie Hydroxylgruppe. Die beiden Stränge verlaufen in entgegengesetzter Richtung — wenn ein Strang in 5'→3'-Richtung gelesen wird, verläuft der komplementäre Strang in 3'→5'-Richtung. Die Doppelhelix weist eine große und eine kleine Furche auf, die für die Bindung von regulatorischen Proteinen (z. B. Transkriptionsfaktoren) von Bedeutung sind.

Die Grundbausteine der DNA sind die Nukleotide. Jedes Nukleotid besteht aus drei Komponenten: einer Pentose (Desoxyribose bei DNA, Ribose bei RNA), einer stickstoffhaltigen Base und einer Phosphatgruppe. Die vier DNA-Basen unterteilen sich in Purinbasen — Adenin (A) und Guanin (G), die einen Doppelring besitzen — und Pyrimidinbasen — Cytosin (C) und Thymin (T), die einen Einzelring tragen. Innerhalb eines Stranges sind die Nukleotide über Phosphodiesterbindungen zwischen der 3'-OH-Gruppe der einen Desoxyribose und der 5'-Phosphatgruppe der nächsten verknüpft, wodurch das Zucker-Phosphat-Rückgrat entsteht. In der RNA ersetzt Uracil (U) das Thymin (T). Die Reihenfolge der Basen entlang des Stranges — die Basensequenz — kodiert die genetische Information.

Die beiden Stränge werden durch Wasserstoffbrückenbindungen zwischen komplementären Basenpaaren zusammengehalten: Adenin paart sich mit Thymin über zwei Wasserstoffbrückenbindungen (A=T, 2 H-Brücken), und Guanin paart sich mit Cytosin über drei Wasserstoffbrückenbindungen (G≡C, 3 H-Brücken). Daraus folgt, dass GC-reiche DNA-Abschnitte stabiler sind und einen höheren Schmelzpunkt haben als AT-reiche Regionen. Diese spezifische Basenpaarung ist die Grundlage der Chargaff-Regeln (Erwin Chargaff, 1949): In jedem DNA-Molekül gilt [A] = [T] und [G] = [C], bzw. die Summe der Purine ist gleich der Summe der Pyrimidine ([A]+[G] = [T]+[C]). Die Chargaff-Regeln gelten für doppelsträngige DNA, nicht jedoch für einzelsträngige DNA oder RNA. Ein menschliches Genom enthält ca. 3,2 Milliarden Basenpaare (bp), verteilt auf 23 Chromosomenpaare. Die DNA liegt in eukaryotischen Zellen nicht frei vor, sondern ist um Histonproteine (H2A, H2B, H3, H4 als Oktamer) gewickelt und bildet Nukleosomen, die weitere Verdichtungsstufen durchlaufen (Solenoidstruktur, Schleifen, Chromatinfaser) bis hin zum kondensierten Metaphase-Chromosom.`,
      merksaetze: [
        'Basenpaarung: A=T mit 2 H-Brücken, G≡C mit 3 H-Brücken → GC-reiche DNA ist stabiler (höherer Schmelzpunkt). Merke: „German Cars have 3 (G≡C = 3)".',
        'Chargaff-Regeln: [A]=[T] und [G]=[C] sowie [Purine]=[Pyrimidine]. Gilt nur für doppelsträngige DNA.'
      ],
      altfrage: {
        question: 'Warum haben GC-reiche DNA-Abschnitte einen höheren Schmelzpunkt als AT-reiche Regionen?',
        answer: 'Guanin und Cytosin bilden drei Wasserstoffbrückenbindungen (G≡C), während Adenin und Thymin nur zwei Wasserstoffbrückenbindungen bilden (A=T). Mehr Wasserstoffbrücken bedeuten eine stärkere Bindung zwischen den Strängen, sodass mehr Energie (höhere Temperatur) benötigt wird, um die Stränge zu trennen.'
      },
      klinischerBezug: 'Die PCR (Polymerase-Kettenreaktion) nutzt das Prinzip der Denaturierung und Renaturierung der DNA: Bei 94–98 °C werden die Stränge getrennt (Denaturierung), bei 50–65 °C hybridisieren die Primer (Annealing), und bei 72 °C synthetisiert die hitzestabile Taq-Polymerase den neuen Strang (Extension). Die PCR ist das wichtigste molekulardiagnostische Verfahren und wird zum Nachweis von Infektionserregern (z. B. SARS-CoV-2), genetischen Mutationen und in der forensischen Genetik eingesetzt.',
      selfTest: [
        {
          question: 'Wie viele Wasserstoffbrückenbindungen bilden sich zwischen Guanin und Cytosin?',
          options: [
            '1 Wasserstoffbrücke',
            '2 Wasserstoffbrücken',
            '3 Wasserstoffbrücken',
            '4 Wasserstoffbrücken'
          ],
          correctIndex: 2,
          explanation: 'Guanin und Cytosin bilden drei Wasserstoffbrückenbindungen (G≡C), während Adenin und Thymin nur zwei Wasserstoffbrücken bilden (A=T). Deshalb sind GC-reiche Regionen stabiler.'
        },
        {
          question: 'In einer doppelsträngigen DNA-Probe beträgt der Adenin-Anteil 30 %. Wie hoch ist der Guanin-Anteil?',
          options: [
            '30 %',
            '20 %',
            '40 %',
            '10 %'
          ],
          correctIndex: 1,
          explanation: 'Nach den Chargaff-Regeln gilt [A]=[T]=30 %, also [A]+[T]=60 %. Da die Gesamtmenge 100 % beträgt, verbleiben 40 % für [G]+[C]. Da [G]=[C], ergibt sich [G]=20 %.'
        },
        {
          question: 'Welche Aussage über die Antiparallelität der DNA-Stränge ist korrekt?',
          options: [
            'Beide Stränge verlaufen in 5\'→3\'-Richtung',
            'Ein Strang verläuft in 5\'→3\'-Richtung, der andere in 3\'→5\'-Richtung',
            'Die Richtung wird durch die Basensequenz bestimmt',
            'Beide Stränge verlaufen in 3\'→5\'-Richtung'
          ],
          correctIndex: 1,
          explanation: 'Die beiden DNA-Stränge der Doppelhelix verlaufen antiparallel: Wenn der eine Strang in 5\'→3\'-Richtung gelesen wird, verläuft der komplementäre Strang in 3\'→5\'-Richtung. Diese Antiparallelität ist wichtig für die Replikation und Transkription.'
        }
      ]
    },

    // =====================================================================
    // 5.2 DNA-Replikation
    // =====================================================================
    {
      id: 'bio-kap5-uk2',
      title: 'DNA-Replikation',
      content: `Die DNA-Replikation ist der Prozess der identischen Verdopplung der DNA vor jeder Zellteilung und findet in der S-Phase (Synthesephase) des Zellzyklus statt. Sie folgt dem semikonservativen Mechanismus, wie 1958 von Meselson und Stahl experimentell nachgewiesen: Jedes neu synthetisierte DNA-Molekül besteht aus einem alten (parentalen) und einem neu synthetisierten Strang. Die Replikation beginnt an definierten Startpunkten, den Replikationsursprüngen (Origins of Replication, ORI). In Prokaryoten gibt es einen einzigen ORI, in Eukaryoten hingegen tausende, um das wesentlich größere Genom in angemessener Zeit replizieren zu können. An jedem ORI bildet sich eine Replikationsgabel, die sich bidirektional (in beide Richtungen) ausbreitet.

Der Replikationsprozess erfordert das koordinierte Zusammenspiel zahlreicher Enzyme und Proteine. Die Helikase öffnet die Doppelhelix, indem sie die Wasserstoffbrücken zwischen den Basenpaaren unter ATP-Verbrauch löst und die Stränge entwirrt. Topoisomerase (Gyrase bei Prokaryoten) löst die dabei entstehende Überspiralisierung (Supercoiling) vor der Replikationsgabel. Einzelstrang-bindende Proteine (SSB-Proteine) stabilisieren die getrennten Einzelstränge und verhindern deren Rückfaltung. Da die DNA-Polymerase III (bei Prokaryoten) bzw. DNA-Polymerase δ und ε (bei Eukaryoten) nur an ein vorhandenes 3'-OH-Ende anbauen kann und ausschließlich in 5'→3'-Richtung synthetisiert, benötigt sie einen Startpunkt: Die Primase (eine RNA-Polymerase) synthetisiert kurze RNA-Primer (ca. 10 Nukleotide), die dieses 3'-OH-Ende bereitstellen.

Aufgrund der antiparallelen Struktur der DNA und der ausschließlichen 5'→3'-Syntheserichtung der DNA-Polymerase verläuft die Replikation an den beiden Strängen unterschiedlich. Der Leitstrang (Leading Strand) wird kontinuierlich in 5'→3'-Richtung synthetisiert, da er in Richtung der Replikationsgabel verläuft und nur einen einzigen Primer benötigt. Der Folgestrang (Lagging Strand) wird dagegen diskontinuierlich synthetisiert: In kurzen Abschnitten (Okazaki-Fragmente, ca. 1000–2000 Nukleotide bei Prokaryoten, 100–200 bei Eukaryoten) entgegen der Gabelrichtung, wobei jedes Fragment einen eigenen RNA-Primer benötigt. Nach der Synthese entfernt die DNA-Polymerase I (bei Prokaryoten) bzw. RNase H und DNA-Polymerase (bei Eukaryoten) die RNA-Primer und ersetzt sie durch DNA. Schließlich verbindet die DNA-Ligase die Okazaki-Fragmente durch Knüpfen von Phosphodiesterbindungen zu einem durchgehenden Strang. Die DNA-Polymerase besitzt zudem eine 3'→5'-Exonuklease-Aktivität (Proofreading), die falsch eingebaute Nukleotide sofort erkennt und entfernt — dies reduziert die Fehlerrate auf etwa 1 Fehler pro 10⁹ Basenpaare.`,
      diagram: 'dna-helix',
      merksaetze: [
        'Semikonservativ: Jedes neue DNA-Molekül enthält einen alten und einen neuen Strang (Meselson-Stahl-Experiment, 1958).',
        'Leitstrang: Kontinuierliche Synthese (5\'→3\' Richtung Gabel, ein Primer). Folgestrang: Diskontinuierlich über Okazaki-Fragmente (je ein eigener Primer), verbunden durch DNA-Ligase.'
      ],
      altfrage: {
        question: 'Warum wird der Folgestrang diskontinuierlich synthetisiert?',
        answer: 'Die DNA-Polymerase kann nur in 5\'→3\'-Richtung synthetisieren. Da der Folgestrang in 3\'→5\'-Richtung zur Replikationsgabel verläuft, kann er nicht kontinuierlich in Gabelrichtung verlängert werden. Stattdessen wird er in kurzen 5\'→3\'-Fragmenten (Okazaki-Fragmente) entgegen der Gabelrichtung synthetisiert.'
      },
      klinischerBezug: 'Viele Chemotherapeutika greifen in die DNA-Replikation ein, um die Teilung schnell wachsender Tumorzellen zu hemmen. Antimetabolite wie Methotrexat hemmen die Dihydrofolatreduktase und damit die Synthese von Thymidin-Nukleotiden. 5-Fluorouracil (5-FU) wird als falsches Nukleotid eingebaut und hemmt die Thymidylatsynthase. Cisplatin bildet kovalente Quervernetzungen (Cross-links) zwischen den DNA-Strängen, die die Replikation blockieren. Da diese Medikamente alle sich schnell teilenden Zellen betreffen, verursachen sie auch Nebenwirkungen an gesundem Gewebe (Knochenmark, Darmschleimhaut, Haarfollikel).',
      selfTest: [
        {
          question: 'Was ist die Funktion der Primase bei der DNA-Replikation?',
          options: [
            'Sie öffnet die Doppelhelix durch Spaltung der Wasserstoffbrücken',
            'Sie synthetisiert kurze RNA-Primer, die als Startpunkt für die DNA-Polymerase dienen',
            'Sie verbindet die Okazaki-Fragmente miteinander',
            'Sie entfernt falsch eingebaute Nukleotide (Proofreading)'
          ],
          correctIndex: 1,
          explanation: 'Die Primase ist eine RNA-Polymerase, die kurze RNA-Primer synthetisiert. Diese Primer liefern das freie 3\'-OH-Ende, das die DNA-Polymerase zum Start der DNA-Synthese benötigt. Ohne Primer kann die DNA-Polymerase nicht beginnen.'
        },
        {
          question: 'Was sind Okazaki-Fragmente?',
          options: [
            'Kurze DNA-Abschnitte, die auf dem Folgestrang diskontinuierlich synthetisiert werden',
            'RNA-Primer, die nach der Replikation entfernt werden',
            'Fehlerhafte DNA-Abschnitte, die durch Proofreading entfernt werden',
            'Verdichtete Chromatinabschnitte während der Mitose'
          ],
          correctIndex: 0,
          explanation: 'Okazaki-Fragmente sind kurze DNA-Stücke (100–2000 Nukleotide), die auf dem Folgestrang (Lagging Strand) diskontinuierlich in 5\'→3\'-Richtung synthetisiert werden. Sie werden anschließend durch die DNA-Ligase zu einem durchgehenden Strang verbunden.'
        },
        {
          question: 'Welches Enzym verbindet die Okazaki-Fragmente zu einem durchgehenden DNA-Strang?',
          options: [
            'Helikase',
            'DNA-Polymerase III',
            'DNA-Ligase',
            'Topoisomerase'
          ],
          correctIndex: 2,
          explanation: 'Die DNA-Ligase katalysiert die Bildung von Phosphodiesterbindungen zwischen dem 3\'-OH-Ende eines Okazaki-Fragments und dem 5\'-Phosphat-Ende des nächsten Fragments und verbindet sie so zu einem durchgehenden Strang.'
        }
      ]
    },

    // =====================================================================
    // 5.3 Transkription
    // =====================================================================
    {
      id: 'bio-kap5-uk3',
      title: 'Transkription',
      content: `Die Transkription ist der erste Schritt der Genexpression, bei dem die genetische Information eines DNA-Abschnitts (Gens) in eine komplementäre RNA-Sequenz umgeschrieben wird. Das zentrale Enzym ist die RNA-Polymerase, die — im Gegensatz zur DNA-Polymerase — keinen Primer benötigt und Ribonukleotide (mit Uracil statt Thymin) zu einem RNA-Strang in 5'→3'-Richtung verknüpft. Bei Prokaryoten gibt es nur eine RNA-Polymerase, die alle RNA-Typen synthetisiert. Bei Eukaryoten existieren drei RNA-Polymerasen: RNA-Polymerase I (ribosomale RNA, rRNA), RNA-Polymerase II (Boten-RNA, mRNA — die für die Proteinbiosynthese relevanteste) und RNA-Polymerase III (Transfer-RNA, tRNA, und 5S-rRNA). Der Strang, der als Vorlage (Matrize) dient und von der RNA-Polymerase in 3'→5'-Richtung abgelesen wird, heißt Matrizenstrang (Antisense-Strang, Vorlagenstrang). Der gegenüberliegende Strang, der nicht abgelesen wird, aber dieselbe Sequenz wie die mRNA hat (mit T statt U), heißt kodogener Strang (Sense-Strang, Nicht-Matrizenstrang).

Die Transkription verläuft in drei Phasen: Initiation, Elongation und Termination. Bei der Initiation bindet die RNA-Polymerase (bei Eukaryoten zusammen mit basalen Transkriptionsfaktoren wie TFIID und TFIIB) an den Promotor — eine regulatorische DNA-Sequenz upstream (5') des Gens. Bei Eukaryoten enthält der Promotor häufig eine TATA-Box (Konsensussequenz TATAAA, ca. 25–30 bp upstream des Transkriptionsstarts), an die der Transkriptionsfaktor TFIID mit seiner Untereinheit TBP (TATA-Box-Binding Protein) bindet. Dies rekrutiert weitere Transkriptionsfaktoren und die RNA-Polymerase II zum Präinitiationskomplex. Nach der Promotorbindung öffnet die RNA-Polymerase die Doppelhelix lokal (Transkriptionsblase, ca. 12–14 bp) und beginnt die Elongation: Sie synthetisiert den RNA-Strang komplementär zum Matrizenstrang in 5'→3'-Richtung. Die Termination erfolgt bei Prokaryoten durch spezifische Terminatorsequenzen (Rho-abhängig oder Rho-unabhängig mit Haarnadelstruktur), bei Eukaryoten durch Polyadenylierungssignale und nachfolgende Spaltung.

Bei Eukaryoten unterliegt die primäre mRNA (prä-mRNA) einem umfangreichen Prozess der RNA-Reifung (mRNA-Processing), bevor sie aus dem Zellkern ins Zytoplasma exportiert werden kann. Drei Hauptmodifikationen finden statt: (1) Das 5'-Capping: Ein 7-Methylguanosin-Cap wird an das 5'-Ende der mRNA angefügt. Es schützt vor Abbau durch Exonukleasen, erleichtert den Export aus dem Zellkern und ist wichtig für die Translationsinitiation (Erkennung durch das Ribosom). (2) Die 3'-Polyadenylierung: Ein Poly-A-Schwanz aus ca. 100–250 Adeninnukleotiden wird am 3'-Ende angefügt. Er erhöht die Stabilität der mRNA, schützt vor Abbau und spielt eine Rolle beim Export und bei der Translation. (3) Das Spleißen (Splicing): Introns (nicht-kodierende Abschnitte) werden aus der prä-mRNA entfernt, und die Exons (kodierende Abschnitte) werden zusammengefügt. Dieser Prozess wird vom Spleißosom katalysiert, einem großen Ribonukleoprotein-Komplex aus snRNPs (small nuclear ribonucleoproteins). Alternatives Spleißen ermöglicht es, aus einem Gen mehrere verschiedene mRNAs und damit verschiedene Proteine zu generieren — dies erklärt, warum der Mensch trotz nur ca. 20.000–25.000 Genen über 100.000 verschiedene Proteine bilden kann.`,
      merksaetze: [
        'mRNA-Processing bei Eukaryoten: 5\'-Cap (7-Methylguanosin) + 3\'-Poly-A-Schwanz + Spleißen (Introns raus, Exons zusammen). Merke: „EXons werden EXportiert, INtrons bleiben IN (im Kern)."',
        'Drei eukaryotische RNA-Polymerasen: Pol I → rRNA, Pol II → mRNA (die Wichtigste!), Pol III → tRNA und 5S-rRNA.'
      ],
      altfrage: {
        question: 'Was ist alternatives Spleißen und welche Bedeutung hat es?',
        answer: 'Beim alternativen Spleißen werden aus derselben prä-mRNA durch unterschiedliche Kombination von Exons verschiedene reife mRNAs erzeugt, die für verschiedene Proteinvarianten kodieren. Dies erhöht die Proteinvielfalt enorm: Aus ca. 20.000–25.000 menschlichen Genen können über 100.000 verschiedene Proteine entstehen.'
      },
      klinischerBezug: 'Fehler beim Spleißen können schwere Erkrankungen verursachen. Bei der spinalen Muskelatrophie (SMA) ist das SMN1-Gen (Survival Motor Neuron) deletiert oder mutiert. Das Backup-Gen SMN2 produziert durch ein ungünstiges Spleißmuster überwiegend verkürztes, instabiles Protein. Das Medikament Nusinersen (Spinraza) ist ein Antisense-Oligonukleotid, das das Spleißen der SMN2-prä-mRNA so modifiziert, dass mehr funktionsfähiges SMN-Protein gebildet wird — ein Durchbruch in der Therapie der SMA.',
      selfTest: [
        {
          question: 'Welche RNA-Polymerase synthetisiert bei Eukaryoten die mRNA?',
          options: [
            'RNA-Polymerase I',
            'RNA-Polymerase II',
            'RNA-Polymerase III',
            'DNA-Polymerase δ'
          ],
          correctIndex: 1,
          explanation: 'Die RNA-Polymerase II ist für die Transkription proteinkodierender Gene (mRNA) bei Eukaryoten verantwortlich. RNA-Pol I synthetisiert rRNA, RNA-Pol III tRNA und 5S-rRNA.'
        },
        {
          question: 'Welche Funktion hat das 5\'-Cap der eukaryotischen mRNA?',
          options: [
            'Entfernung der Introns',
            'Schutz vor Exonukleasen, Erleichterung des Kernexports und Translationsinitiation',
            'Anheftung des Poly-A-Schwanzes',
            'Bindung der tRNA an die mRNA'
          ],
          correctIndex: 1,
          explanation: 'Das 5\'-Cap (7-Methylguanosin) schützt die mRNA vor Abbau durch 5\'-Exonukleasen, erleichtert den Export aus dem Zellkern und wird bei der Translationsinitiation vom Ribosom erkannt (Cap-abhängige Translation).'
        },
        {
          question: 'Was wird beim Spleißen aus der prä-mRNA entfernt?',
          options: [
            'Die Exons (kodierende Abschnitte)',
            'Die Introns (nicht-kodierende Abschnitte)',
            'Das 5\'-Cap',
            'Der Poly-A-Schwanz'
          ],
          correctIndex: 1,
          explanation: 'Beim Spleißen werden die Introns (nicht-kodierende Sequenzen) durch das Spleißosom herausgeschnitten, und die Exons (kodierende Sequenzen) werden zusammengefügt. Merke: „EXons werden EXportiert, INtrons bleiben IN."'
        }
      ]
    },

    // =====================================================================
    // 5.4 Translation
    // =====================================================================
    {
      id: 'bio-kap5-uk4',
      title: 'Translation',
      content: `Die Translation ist der zweite Schritt der Genexpression, bei dem die Nukleotidsequenz der mRNA in eine Aminosäuresequenz (Polypeptid/Protein) übersetzt wird. Dieser Prozess findet an den Ribosomen statt — bei Prokaryoten im Zytoplasma (gleichzeitig mit der Transkription, da kein Zellkern vorhanden), bei Eukaryoten im Zytoplasma oder am rauen endoplasmatischen Retikulum (rER). Ribosomen bestehen aus einer großen und einer kleinen Untereinheit, die jeweils aus ribosomaler RNA (rRNA) und Proteinen aufgebaut sind. Prokaryotische Ribosomen haben eine Sedimentationskonstante von 70S (50S + 30S), eukaryotische von 80S (60S + 40S). Das Ribosom besitzt drei funktionelle Bindungsstellen für tRNA: die A-Stelle (Aminoacyl-Stelle, Ankunft der beladenen tRNA), die P-Stelle (Peptidyl-Stelle, Bindung der tRNA mit der wachsenden Peptidkette) und die E-Stelle (Exit-Stelle, Austritt der entladenen tRNA).

Der genetische Code ist die Zuordnungsvorschrift zwischen der Nukleotidsequenz der mRNA und der Aminosäuresequenz des Proteins. Jeweils drei aufeinanderfolgende Nukleotide (Triplett) bilden ein Codon, das für eine bestimmte Aminosäure kodiert. Mit vier verschiedenen Basen ergeben sich 4³ = 64 mögliche Codons. Da es nur 20 kanonische Aminosäuren gibt, ist der genetische Code degeneriert (redundant): Mehrere Codons können für dieselbe Aminosäure kodieren, wobei sich die synonymen Codons meist nur in der dritten Position (Wobble-Position) unterscheiden. Das Startcodon AUG kodiert für Methionin und markiert den Beginn der Translation. Die drei Stoppcodons UAA, UAG und UGA kodieren für keine Aminosäure, sondern signalisieren das Ende der Translation. Der genetische Code ist (nahezu) universell — er gilt für fast alle Lebewesen von Bakterien bis zum Menschen, mit wenigen Ausnahmen (z. B. mitochondrialer Code).

Die Translation verläuft in drei Phasen. Bei der Initiation bindet die kleine ribosomale Untereinheit an die mRNA (bei Prokaryoten über die Shine-Dalgarno-Sequenz, bei Eukaryoten über das 5'-Cap) und sucht das Startcodon AUG. Die Initiator-tRNA (beladen mit Methionin bzw. fMet bei Prokaryoten) bindet an das AUG, dann assoziiert die große Untereinheit. In der Elongationsphase wird die Peptidkette schrittweise verlängert: Eine mit der passenden Aminosäure beladene Aminoacyl-tRNA bindet mit ihrem Anticodon an das Codon in der A-Stelle (Codon-Anticodon-Paarung). Die Peptidyltransferase-Aktivität der großen ribosomalen Untereinheit (ein Ribozym — die katalytische Funktion wird von der rRNA ausgeübt, nicht von Proteinen!) katalysiert die Knüpfung einer Peptidbindung zwischen der wachsenden Kette und der neuen Aminosäure. Anschließend transloziert das Ribosom um ein Codon in 5'→3'-Richtung (unter GTP-Verbrauch), die entladene tRNA gelangt zur E-Stelle und wird freigesetzt. Bei der Termination erreicht ein Stoppcodon (UAA, UAG oder UGA) die A-Stelle. Da keine tRNA ein Anticodon für Stoppcodons besitzt, binden stattdessen Release-Faktoren (Terminationsfaktoren), die die Hydrolyse der Peptidbindung zwischen Polypeptid und tRNA katalysieren. Das fertige Polypeptid wird freigesetzt, und die ribosomalen Untereinheiten dissoziieren.`,
      diagram: 'transcription-translation',
      merksaetze: [
        'Genetischer Code: 64 Codons für 20 Aminosäuren → degeneriert (redundant). AUG = Start (Methionin), UAA/UAG/UGA = Stopp. Code ist (nahezu) universell.',
        'Drei ribosomale Bindungsstellen: A-Stelle (Aminoacyl-tRNA kommt an), P-Stelle (Peptidyl-tRNA mit wachsender Kette), E-Stelle (Exit, entladene tRNA geht).'
      ],
      altfrage: {
        question: 'Was versteht man unter der Degeneriertheit (Redundanz) des genetischen Codes?',
        answer: 'Der genetische Code ist degeneriert, weil mehrere verschiedene Codons für dieselbe Aminosäure kodieren können (64 Codons für nur 20 Aminosäuren + 3 Stoppcodons). Die synonymen Codons unterscheiden sich meist in der dritten Position (Wobble-Position). Dies erklärt, warum nicht jede Punktmutation zu einem Aminosäureaustausch führt (stumme/synonyme Mutationen).'
      },
      klinischerBezug: 'Aminoglykoside (z. B. Gentamicin, Tobramycin) und Tetracycline sind Antibiotika, die gezielt die bakterielle Translation hemmen. Aminoglykoside binden an die 30S-Untereinheit des prokaryotischen Ribosoms und verursachen Fehlablesungen der mRNA. Tetracycline blockieren die Bindung der Aminoacyl-tRNA an die A-Stelle. Da eukaryotische Ribosomen (80S) sich strukturell von prokaryotischen (70S) unterscheiden, wirken diese Antibiotika selektiv gegen Bakterien. Allerdings können Aminoglykoside auch mitochondriale Ribosomen (70S-ähnlich) beeinträchtigen, was Ototoxizität und Nephrotoxizität erklärt.',
      selfTest: [
        {
          question: 'Welches Codon markiert den Beginn der Translation und für welche Aminosäure kodiert es?',
          options: [
            'UAG — Tyrosin',
            'AUG — Methionin',
            'UGA — Tryptophan',
            'GCA — Alanin'
          ],
          correctIndex: 1,
          explanation: 'AUG ist das universelle Startcodon und kodiert für die Aminosäure Methionin (bzw. Formylmethionin bei Prokaryoten). Es markiert den Beginn der Translationsablesung.'
        },
        {
          question: 'Welche der folgenden Aussagen über die Peptidyltransferase ist korrekt?',
          options: [
            'Sie ist ein Protein in der kleinen ribosomalen Untereinheit',
            'Sie ist eine katalytische Aktivität der rRNA in der großen ribosomalen Untereinheit (Ribozym)',
            'Sie spaltet die Peptidbindung bei der Termination',
            'Sie belädt die tRNA mit Aminosäuren'
          ],
          correctIndex: 1,
          explanation: 'Die Peptidyltransferase-Aktivität wird von der rRNA der großen ribosomalen Untereinheit katalysiert — sie ist somit ein Ribozym (katalytische RNA). Sie katalysiert die Bildung der Peptidbindung zwischen der wachsenden Polypeptidkette und der neuen Aminosäure.'
        },
        {
          question: 'Was geschieht, wenn ein Stoppcodon (z. B. UAA) die A-Stelle des Ribosoms erreicht?',
          options: [
            'Eine spezielle tRNA mit der Aminosäure Stopp bindet',
            'Release-Faktoren binden, das Polypeptid wird freigesetzt und die ribosomalen Untereinheiten dissoziieren',
            'Die Translation wird pausiert, bis ein neues Startcodon gefunden wird',
            'Die mRNA wird gespleißt'
          ],
          correctIndex: 1,
          explanation: 'Stoppcodons (UAA, UAG, UGA) werden nicht von tRNAs erkannt, sondern von Release-Faktoren (Terminationsfaktoren). Diese lösen die Hydrolyse der Bindung zwischen Polypeptid und tRNA aus, das fertige Protein wird freigesetzt, und die ribosomalen Untereinheiten trennen sich.'
        }
      ]
    },

    // =====================================================================
    // 5.5 Genregulation
    // =====================================================================
    {
      id: 'bio-kap5-uk5',
      title: 'Genregulation',
      content: `Die Genregulation steuert, wann, wo und in welchem Ausmaß ein Gen exprimiert wird. Sie ist essenziell, damit Zellen auf Umweltveränderungen reagieren, sich differenzieren und ihre spezifischen Funktionen ausüben können. Die Regulation kann auf verschiedenen Ebenen stattfinden: transkriptionell (am häufigsten und energetisch effizientesten), posttranskriptionell (mRNA-Stabilität, Spleißen), translational (Regulierung der Translationseffizienz) und posttranslational (Proteinmodifikation, -faltung und -abbau). Bei Prokaryoten steht die schnelle Anpassung an wechselnde Umweltbedingungen im Vordergrund, während bei Eukaryoten die Zelldifferenzierung und die Koordination multizellulärer Programme entscheidend sind.

Das Lac-Operon von Escherichia coli ist das Paradebeispiel für prokaryotische Genregulation und wurde 1961 von François Jacob und Jacques Monod beschrieben. Es ist ein induzierbares Operon, das drei Strukturgene für den Laktoseabbau enthält: lacZ (β-Galactosidase, spaltet Laktose in Glukose und Galaktose), lacY (Permease, transportiert Laktose in die Zelle) und lacA (Transacetylase). Der Lac-Repressor (kodiert vom lacI-Gen) bindet in Abwesenheit von Laktose an den Operator und blockiert die Transkription durch die RNA-Polymerase. Wenn Laktose vorhanden ist, wird sie zu Allolaktose umgewandelt, die als Induktor an den Repressor bindet und dessen Konformation so verändert, dass er vom Operator ablöst — die Transkription kann beginnen (negative Regulation = Aufhebung einer Hemmung). Zusätzlich unterliegt das Lac-Operon der Katabolitrepression: Bei Anwesenheit von Glukose (bevorzugte Kohlenstoffquelle) ist der cAMP-Spiegel niedrig, der CAP-cAMP-Komplex (Catabolite Activator Protein) kann nicht an die Aktivatorregion binden, und die Transkription bleibt gering — selbst wenn Laktose vorhanden ist. Maximale Expression erfolgt nur bei hoher Laktose- und niedriger Glukosekonzentration.

Die eukaryotische Genregulation ist wesentlich komplexer und vielschichtiger. Auf der transkriptionellen Ebene spielen Transkriptionsfaktoren (TFs) eine zentrale Rolle: Allgemeine (basale) TFs bilden zusammen mit der RNA-Polymerase II den Präinitiationskomplex am Promotor, während spezifische TFs (Aktivatoren und Repressoren) an Enhancer- oder Silencer-Sequenzen binden, die Hunderte bis Tausende von Basenpaaren vom Promotor entfernt liegen können. Die Verbindung zwischen Enhancer-gebundenen TFs und dem Promotor wird durch DNA-Schleifen (Loops) und den Mediatorkomplex hergestellt. Die Chromatinstruktur (offenes Euchromatin vs. verdichtetes Heterochromatin) reguliert die Zugänglichkeit der DNA für die Transkriptionsmaschinerie — hierbei spielen epigenetische Modifikationen (Histonacetylierung, DNA-Methylierung) eine Schlüsselrolle. Auf der posttranskriptionellen Ebene ist die RNA-Interferenz (RNAi) ein bedeutender Regulationsmechanismus: Kleine regulatorische RNA-Moleküle, insbesondere microRNAs (miRNAs, ca. 21–23 Nukleotide), binden komplementär an die 3'-UTR (untranslatierte Region) von Ziel-mRNAs und bewirken deren Abbau oder die Hemmung ihrer Translation. Der RISC-Komplex (RNA-induced silencing complex) vermittelt diesen Prozess. Die RNA-Interferenz wurde 1998 von Andrew Fire und Craig Mello entdeckt (Nobelpreis 2006) und wird heute auch als therapeutisches Werkzeug genutzt.`,
      merksaetze: [
        'Lac-Operon: Doppelte Kontrolle — (1) Negativregulation: Repressor blockiert Operator, Laktose (Allolaktose) hebt Hemmung auf. (2) Katabolitrepression: Maximale Expression nur bei Laktose↑ UND Glukose↓ (cAMP↑ → CAP aktiv).',
        'RNA-Interferenz (RNAi): miRNAs (21–23 nt) binden an 3\'-UTR der Ziel-mRNA → Abbau oder Translationshemmung über RISC-Komplex. Wichtig für posttranskriptionelle Genregulation bei Eukaryoten.'
      ],
      altfrage: {
        question: 'Unter welchen Bedingungen wird das Lac-Operon maximal exprimiert?',
        answer: 'Maximale Expression erfolgt, wenn Laktose vorhanden ist (Allolaktose löst den Repressor vom Operator) UND Glukose fehlt (niedriger Glukosespiegel → hoher cAMP-Spiegel → CAP-cAMP-Komplex bindet an die Aktivatorregion und stimuliert die RNA-Polymerase). Beide Bedingungen müssen gleichzeitig erfüllt sein.'
      },
      klinischerBezug: 'Die RNA-Interferenz wird zunehmend therapeutisch genutzt. Patisiran (Onpattro) war 2018 das erste zugelassene RNAi-Therapeutikum: Eine small interfering RNA (siRNA) baut gezielt die mRNA des mutierten Transthyretin-Gens (TTR) in der Leber ab und behandelt so die hereditäre Transthyretin-Amyloidose. Inclisiran (Leqvio) ist eine weitere siRNA, die die PCSK9-mRNA in Hepatozyten abbaut und dadurch die LDL-Cholesterinspiegel senkt — mit nur zwei subkutanen Injektionen pro Jahr.',
      selfTest: [
        {
          question: 'Was passiert im Lac-Operon, wenn weder Laktose noch Glukose vorhanden ist?',
          options: [
            'Maximale Expression der Strukturgene',
            'Der Repressor blockiert den Operator, keine Transkription der Strukturgene',
            'Die RNA-Polymerase bindet, aber die Translation wird gehemmt',
            'Das Operon wird durch DNA-Methylierung stillgelegt'
          ],
          correctIndex: 1,
          explanation: 'Ohne Laktose bleibt der Lac-Repressor am Operator gebunden und blockiert die Transkription — unabhängig davon, ob Glukose vorhanden ist oder nicht. Die Strukturgene lacZ, lacY und lacA werden nicht transkribiert.'
        },
        {
          question: 'Was sind Enhancer in der eukaryotischen Genregulation?',
          options: [
            'Sequenzen, die die Transkription benachbarter Gene hemmen',
            'Regulatorische DNA-Sequenzen, die die Transkription verstärken und weit vom Promotor entfernt liegen können',
            'RNA-Moleküle, die die mRNA-Stabilität erhöhen',
            'Enzyme, die die Histonacetylierung katalysieren'
          ],
          correctIndex: 1,
          explanation: 'Enhancer sind cis-regulatorische DNA-Sequenzen, an die spezifische Transkriptionsfaktoren (Aktivatoren) binden. Sie können die Transkription eines Gens deutlich verstärken und liegen oft Hunderte bis Tausende Basenpaare vom Promotor entfernt. Die Wechselwirkung wird durch DNA-Schleifen und den Mediatorkomplex vermittelt.'
        },
        {
          question: 'Wie funktioniert die Genregulation durch microRNAs (miRNAs)?',
          options: [
            'miRNAs binden an den Promotor und aktivieren die Transkription',
            'miRNAs binden komplementär an die Ziel-mRNA und bewirken deren Abbau oder Translationshemmung über den RISC-Komplex',
            'miRNAs ersetzen beschädigte mRNA-Abschnitte',
            'miRNAs methylieren die DNA an CpG-Inseln'
          ],
          correctIndex: 1,
          explanation: 'MicroRNAs (ca. 21–23 Nukleotide) binden komplementär an die 3\'-UTR der Ziel-mRNA. Der RISC-Komplex (RNA-induced silencing complex) vermittelt dann entweder den Abbau der mRNA oder die Hemmung ihrer Translation — ein wichtiger Mechanismus der posttranskriptionellen Genregulation.'
        }
      ]
    }
  ]
};
