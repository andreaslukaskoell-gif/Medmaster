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
      content: `**DNA** (Desoxyribonukleinsäure) speichert die Erbinformation. Watson und Crick beschrieben 1953 die **Doppelhelix**: zwei antiparallele Polynukleotidstränge winden sich rechtsgängig umeinander. Jeder Strang hat 5'→3'-Polarität. 5'-Ende trägt freie Phosphatgruppe, 3'-Ende freie Hydroxylgruppe. Die beiden Stränge verlaufen entgegengesetzt: Wenn ein Strang 5'→3' läuft, geht der andere 3'→5'. Große und kleine Furche der Helix binden regulatorische Proteine (Transkriptionsfaktoren).

**Nukleotide** sind die Grundbausteine. Jedes hat drei Komponenten: **Pentose** (Desoxyribose bei DNA, Ribose bei RNA), **stickstoffhaltige Base**, **Phosphatgruppe**. Vier DNA-Basen: **Purinbasen** (Adenin A, Guanin G, Doppelring) und **Pyrimidinbasen** (Cytosin C, Thymin T, Einzelring). RNA ersetzt Thymin durch Uracil (U). Nukleotide sind über **Phosphodiesterbindungen** verknüpft: 3'-OH-Gruppe einer Desoxyribose + 5'-Phosphatgruppe der nächsten → Zucker-Phosphat-Rückgrat. Die **Basensequenz** kodiert die genetische Information.

**Basenpaarung** über Wasserstoffbrücken: **A=T** mit 2 Wasserstoffbrücken, **G≡C** mit 3 Wasserstoffbrücken. GC-reiche DNA ist stabiler (höherer Schmelzpunkt) als AT-reiche Regionen. **Chargaff-Regeln** (Erwin Chargaff, 1949): [A] = [T] und [G] = [C], also Purine = Pyrimidine. Gilt nur für doppelsträngige DNA, nicht für einzelsträngige DNA oder RNA. Menschliches Genom: ca. 3,2 Milliarden Basenpaare (bp), verteilt auf 23 Chromosomenpaare. DNA ist um **Histonproteine** (H2A, H2B, H3, H4 als Oktamer) gewickelt → **Nukleosomen** → weitere Verdichtung (Solenoidstruktur, Chromatinfaser) bis zum kondensierten Metaphase-Chromosom.`,
      sections: [
        {
          heading: 'DNA vs. RNA',
          text: 'Die wichtigsten Unterschiede auf einen Blick:',
          table: {
            headers: ['Merkmal', 'DNA', 'RNA'],
            rows: [
              ['Zucker', 'Desoxyribose', 'Ribose'],
              ['Basen', 'A, T, G, C', 'A, U, G, C'],
              ['Stränge', 'Doppelstrang', 'Einzelstrang'],
              ['Stabilität', 'Sehr stabil', 'Weniger stabil'],
              ['Vorkommen', 'Zellkern, Mitochondrien', 'Zellkern, Zytoplasma'],
              ['Funktion', 'Speicherung', 'Übertragung, Katalyse']
            ]
          }
        }
      ],
      merksätze: [
        'Merke: Basenpaarung: A=T mit 2 Wasserstoffbrücken, G≡C mit 3 Wasserstoffbrücken. GC-reiche DNA ist stabiler (höherer Schmelzpunkt). Purine (A, G) = 2 Ringe, Pyrimidine (C, T) = 1 Ring.',
        'Chargaff-Regeln: [A]=[T] und [G]=[C] sowie [Purine]=[Pyrimidine]. Gilt nur für doppelsträngige DNA.'
      ],
      altfrage: {
        question: 'Warum haben GC-reiche DNA-Abschnitte einen höheren Schmelzpunkt als AT-reiche Regionen?',
        answer: 'Guanin und Cytosin bilden drei Wasserstoffbrückenbindungen (G≡C), während Adenin und Thymin nur zwei Wasserstoffbrückenbindungen bilden (A=T). Mehr Wasserstoffbrücken bedeuten eine stärkere Bindung zwischen den Strängen, sodass mehr Energie (höhere Temperatur) benötigt wird, um die Stränge zu trennen.'
      },
      klinischerBezug: '**PCR** (Polymerase-Kettenreaktion) nutzt Denaturierung + Renaturierung: Bei 94–98 °C trennen sich die Stränge (Denaturierung), bei 50–65 °C hybridisieren Primer (Annealing), bei 72 °C synthetisiert die **Taq-Polymerase** (hitzestabil aus Thermus aquaticus) den neuen Strang (Extension). PCR ist Standard in Molekulardiagnostik: SARS-CoV-2-Nachweis, genetische Mutationen (BRCA1/2 bei Brustkrebs), forensische Genetik (DNA-Fingerprinting). Eine PCR dauert 2–3 h, vervielfältigt DNA millionenfach (30 Zyklen → 2³⁰ = ca. 1 Milliarde Kopien).',
      selfTest: [
        {
          question: 'Wie viele Wasserstoffbrückenbindungen bilden sich zwischen Guanin und Cytosin?',
          options: [
            '1 Wasserstoffbrücke',
            '2 Wasserstoffbrücken',
            '3 Wasserstoffbrücken',
            '4 Wasserstoffbrücken',
            '5 Wasserstoffbrücken bei methylierten Basen'
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
            '10 %',
            '25 %'
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
            'Beide Stränge verlaufen in 3\'→5\'-Richtung',
            'Die Stränge wechseln abwechselnd zwischen 5\'→3\'- und 3\'→5\'-Richtung'
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
      content: `**DNA-Replikation** verdoppelt die DNA vor jeder Zellteilung (S-Phase des Zellzyklus). Sie folgt dem **semikonservativen Mechanismus** (Meselson-Stahl, 1958): Jedes neue DNA-Molekül besteht aus einem alten (parentalen) und einem neuen Strang. Start an **Replikationsursprüngen** (Origins of Replication, ORI). Prokaryoten: ein ORI. Eukaryoten: Tausende ORI (großes Genom). An jedem ORI bildet sich eine **Replikationsgabel**, die sich bidirektional (beide Richtungen) ausbreitet.

Wichtige Enzyme: **Helikase** öffnet die Doppelhelix (spaltet Wasserstoffbrücken unter ATP-Verbrauch) und entwirrt die Stränge. **Topoisomerase** (Gyrase bei Prokaryoten) löst die Überspiralisierung (Supercoiling) vor der Replikationsgabel. **Einzelstrang-bindende Proteine** (SSB-Proteine) stabilisieren die getrennten Einzelstränge, verhindern Rückfaltung. **DNA-Polymerase** kann nur an ein vorhandenes 3'-OH-Ende anbauen und synthetisiert ausschließlich 5'→3'. Daher braucht sie einen Startpunkt: **Primase** (RNA-Polymerase) synthetisiert kurze **RNA-Primer** (ca. 10 Nukleotide), die das 3'-OH-Ende bereitstellen.

Wegen der antiparallelen DNA-Struktur und der 5'→3'-Syntheserichtung verläuft die Replikation an beiden Strängen unterschiedlich: **Leitstrang** (Leading Strand) wird kontinuierlich in 5'→3' Richtung zur Replikationsgabel synthetisiert, braucht nur einen Primer. **Folgestrang** (Lagging Strand) wird diskontinuierlich synthetisiert: in kurzen Abschnitten (**Okazaki-Fragmente**, 1000–2000 nt bei Prokaryoten, 100–200 nt bei Eukaryoten) entgegen der Gabelrichtung. Jedes Fragment braucht einen eigenen RNA-Primer. Nach der Synthese entfernt **DNA-Polymerase I** (Prokaryoten) bzw. RNase H + DNA-Polymerase (Eukaryoten) die RNA-Primer und ersetzt sie durch DNA. **DNA-Ligase** verbindet die Okazaki-Fragmente zu einem durchgehenden Strang (knüpft Phosphodiesterbindungen). DNA-Polymerase hat **3'→5'-Exonuklease-Aktivität** (Proofreading): erkennt und entfernt falsch eingebaute Nukleotide sofort → Fehlerrate nur 1 Fehler pro 10⁹ Basenpaare.`,
      diagram: 'dna-helix',
      merksätze: [
        'Semikonservativ: Jedes neue DNA-Molekül enthält einen alten und einen neuen Strang (Meselson-Stahl-Experiment, 1958).',
        'Leitstrang: Kontinuierliche Synthese (5\'→3\' Richtung Gabel, ein Primer). Folgestrang: Diskontinuierlich über Okazaki-Fragmente (je ein eigener Primer), verbunden durch DNA-Ligase.'
      ],
      altfrage: {
        question: 'Warum wird der Folgestrang diskontinuierlich synthetisiert?',
        answer: 'Die DNA-Polymerase kann nur in 5\'→3\'-Richtung synthetisieren. Da der Folgestrang in 3\'→5\'-Richtung zur Replikationsgabel verläuft, kann er nicht kontinuierlich in Gabelrichtung verlängert werden. Stattdessen wird er in kurzen 5\'→3\'-Fragmenten (Okazaki-Fragmente) entgegen der Gabelrichtung synthetisiert.'
      },
      klinischerBezug: 'Viele Chemotherapeutika greifen in die DNA-Replikation ein, um schnell wachsende Tumorzellen zu hemmen. **Methotrexat** (Antimetabolit) hemmt die Dihydrofolatreduktase → blockiert Thymidin-Nukleotid-Synthese. **5-Fluorouracil** (5-FU) wird als falsches Nukleotid eingebaut, hemmt Thymidylatsynthase. **Cisplatin** bildet kovalente Quervernetzungen (Cross-links) zwischen DNA-Strängen → blockiert Replikation. Nebenwirkungen: Alle sich schnell teilenden Zellen betroffen (Knochenmark → Leukopenie, Darmschleimhaut → Mukositis/Diarrhö, Haarfollikel → Alopezie).',
      selfTest: [
        {
          question: 'Was ist die Funktion der Primase bei der DNA-Replikation?',
          options: [
            'Sie öffnet die Doppelhelix durch Spaltung der Wasserstoffbrücken',
            'Sie synthetisiert kurze RNA-Primer, die als Startpunkt für die DNA-Polymerase dienen',
            'Sie verbindet die Okazaki-Fragmente miteinander',
            'Sie entfernt falsch eingebaute Nukleotide (Proofreading)',
            'Sie löst die Überspiralisierung der DNA vor der Replikationsgabel'
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
            'Verdichtete Chromatinabschnitte während der Mitose',
            'Einzelsträngige DNA-Schleifen am Leitstrang'
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
            'Topoisomerase',
            'Primase'
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
      content: `**Transkription** ist der erste Schritt der Genexpression: DNA-Information wird in RNA umgeschrieben. Zentrales Enzym: **RNA-Polymerase** (braucht keinen Primer, verknüpft Ribonukleotide mit Uracil statt Thymin zu RNA-Strang in 5'→3'-Richtung). Prokaryoten: eine RNA-Polymerase. Eukaryoten: drei RNA-Polymerasen: **RNA-Pol I** (ribosomale RNA, rRNA), **RNA-Pol II** (Boten-RNA, mRNA, die wichtigste für Proteinbiosynthese), **RNA-Pol III** (Transfer-RNA, tRNA, 5S-rRNA). Der **Matrizenstrang** (Antisense-Strang, Vorlagenstrang) wird 3'→5' abgelesen. Der **kodogene Strang** (Sense-Strang) hat dieselbe Sequenz wie die mRNA (mit T statt U).

Drei Phasen: **Initiation**: RNA-Polymerase (bei Eukaryoten + basale Transkriptionsfaktoren wie TFIID, TFIIB) bindet an **Promotor** (regulatorische DNA-Sequenz upstream 5' des Gens). Eukaryoten: Promotor enthält oft **TATA-Box** (Konsensussequenz TATAAA, ca. 25–30 bp upstream). Transkriptionsfaktor TFIID mit Untereinheit **TBP** (TATA-Box-Binding Protein) bindet, rekrutiert weitere Faktoren + RNA-Pol II zum **Präinitiationskomplex**. **Elongation**: RNA-Polymerase öffnet die Doppelhelix lokal (Transkriptionsblase, 12–14 bp), synthetisiert RNA-Strang komplementär zum Matrizenstrang in 5'→3'. **Termination**: Prokaryoten: spezifische Terminatorsequenzen (Rho-abhängig oder Rho-unabhängig mit Haarnadelstruktur). Eukaryoten: Polyadenylierungssignale + Spaltung.

Bei Eukaryoten durchläuft die primäre mRNA (**prä-mRNA**) umfangreiches **mRNA-Processing**: (1) **5'-Capping**: 7-Methylguanosin-Cap am 5'-Ende schützt vor Abbau durch Exonukleasen, erleichtert Kernexport, wichtig für Translationsinitiation (Ribosomenerkennung). (2) **3'-Polyadenylierung**: Poly-A-Schwanz (ca. 100–250 Adeninnukleotide) am 3'-Ende erhöht Stabilität, schützt vor Abbau, wichtig für Export + Translation. (3) **Spleißen** (Splicing): **Introns** (nicht-kodierende Abschnitte) werden rausgeschnitten, **Exons** (kodierende Abschnitte) zusammengefügt. Katalysiert vom **Spleißosom** (großer Ribonukleoprotein-Komplex aus snRNPs = small nuclear ribonucleoproteins). **Alternatives Spleißen** ermöglicht aus einem Gen mehrere verschiedene mRNAs und Proteine → erklärt, warum Mensch trotz nur ca. 20.000–25.000 Genen über 100.000 Proteine bilden kann.`,
      merksätze: [
        'mRNA-Processing bei Eukaryoten: 5\'-Cap (7-Methylguanosin) + 3\'-Poly-A-Schwanz + Spleißen (Introns raus, Exons zusammen). Merke: „EXons werden EXportiert, INtrons bleiben IN (im Kern)."',
        'Drei eukaryotische RNA-Polymerasen: Pol I → rRNA, Pol II → mRNA (die Wichtigste!), Pol III → tRNA und 5S-rRNA.'
      ],
      altfrage: {
        question: 'Was ist alternatives Spleißen und welche Bedeutung hat es?',
        answer: 'Beim alternativen Spleißen werden aus derselben prä-mRNA durch unterschiedliche Kombination von Exons verschiedene reife mRNAs erzeugt, die für verschiedene Proteinvarianten kodieren. Dies erhöht die Proteinvielfalt enorm: Aus ca. 20.000–25.000 menschlichen Genen können über 100.000 verschiedene Proteine entstehen.'
      },
      klinischerBezug: 'Fehler beim Spleißen verursachen schwere Erkrankungen. Bei **spinaler Muskelatrophie** (SMA) ist das SMN1-Gen (Survival Motor Neuron) deletiert oder mutiert. Das Backup-Gen SMN2 produziert durch ungünstiges Spleißmuster überwiegend verkürztes, instabiles Protein. **Nusinersen** (Spinraza) ist ein Antisense-Oligonukleotid, das das Spleißen der SMN2-prä-mRNA so modifiziert, dass mehr funktionsfähiges SMN-Protein gebildet wird. Applikation: intrathekal (Lumbalpunktion), alle 4 Monate. Durchbruch in der SMA-Therapie, vor allem bei infantiler Form (SMA Typ I).',
      selfTest: [
        {
          question: 'Welche RNA-Polymerase synthetisiert bei Eukaryoten die mRNA?',
          options: [
            'RNA-Polymerase I',
            'RNA-Polymerase II',
            'RNA-Polymerase III',
            'DNA-Polymerase δ',
            'Reverse Transkriptase'
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
            'Bindung der tRNA an die mRNA',
            'Aktivierung der Ribosomen für die Elongation'
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
            'Der Poly-A-Schwanz',
            'Die Promotorsequenz'
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
      content: `**Translation** ist der zweite Schritt der Genexpression: mRNA-Nukleotidsequenz wird in Aminosäuresequenz (Polypeptid/Protein) übersetzt. Ort: **Ribosomen**. Prokaryoten: im Zytoplasma (gleichzeitig mit Transkription, kein Zellkern). Eukaryoten: Zytoplasma oder raues ER (rER). Ribosomen: große + kleine Untereinheit aus ribosomaler RNA (rRNA) + Proteinen. Prokaryoten: 70S (50S + 30S). Eukaryoten: 80S (60S + 40S). Ribosom hat drei funktionelle Bindungsstellen für tRNA: **A-Stelle** (Aminoacyl-Stelle, Ankunft der beladenen tRNA), **P-Stelle** (Peptidyl-Stelle, tRNA mit wachsender Peptidkette), **E-Stelle** (Exit-Stelle, Austritt der entladenen tRNA).

**Genetischer Code**: Zuordnung Nukleotidsequenz → Aminosäuresequenz. Jeweils drei Nukleotide (Triplett) bilden ein **Codon**, das für eine Aminosäure kodiert. 4³ = 64 mögliche Codons. Nur 20 kanonische Aminosäuren → Code ist **degeneriert** (redundant): Mehrere Codons kodieren für dieselbe Aminosäure, unterscheiden sich meist nur in dritter Position (**Wobble-Position**). **Startcodon AUG** kodiert für Methionin, markiert Translationsbeginn. **Stoppcodons UAA, UAG, UGA** kodieren für keine Aminosäure, signalisieren Translationsende. Code ist (nahezu) **universell** — gilt für fast alle Lebewesen, mit wenigen Ausnahmen (mitochondrialer Code).

Drei Phasen: **Initiation**: Kleine ribosomale Untereinheit bindet an mRNA (Prokaryoten: Shine-Dalgarno-Sequenz, Eukaryoten: 5'-Cap), sucht Startcodon AUG. Initiator-tRNA (beladen mit Methionin bzw. fMet bei Prokaryoten) bindet an AUG, große Untereinheit assoziiert. **Elongation**: Peptidkette wird schrittweise verlängert. Aminoacyl-tRNA bindet mit Anticodon an Codon in A-Stelle (Codon-Anticodon-Paarung). **Peptidyltransferase-Aktivität** der großen ribosomalen Untereinheit (ein **Ribozym** — katalytische Funktion wird von rRNA ausgeübt, nicht von Proteinen!) knüpft **Peptidbindung** zwischen wachsender Kette und neuer Aminosäure. Ribosom transloziert um ein Codon in 5'→3' (unter GTP-Verbrauch), entladene tRNA gelangt zu E-Stelle, wird freigesetzt. **Termination**: Stoppcodon (UAA, UAG oder UGA) erreicht A-Stelle. Keine tRNA hat Anticodon für Stoppcodons, stattdessen binden **Release-Faktoren** (Terminationsfaktoren), die Hydrolyse der Peptidbindung zwischen Polypeptid und tRNA katalysieren. Fertiges Polypeptid wird freigesetzt, ribosomale Untereinheiten dissoziieren.`,
      diagram: 'transcription-translation',
      merksätze: [
        'Genetischer Code: 64 Codons für 20 Aminosäuren → degeneriert (redundant). AUG = Start (Methionin), UAA/UAG/UGA = Stopp. Code ist (nahezu) universell.',
        'Drei ribosomale Bindungsstellen: A-Stelle (Aminoacyl-tRNA kommt an), P-Stelle (Peptidyl-tRNA mit wachsender Kette), E-Stelle (Exit, entladene tRNA geht).'
      ],
      altfrage: {
        question: 'Was versteht man unter der Degeneriertheit (Redundanz) des genetischen Codes?',
        answer: 'Der genetische Code ist degeneriert, weil mehrere verschiedene Codons für dieselbe Aminosäure kodieren können (64 Codons für nur 20 Aminosäuren + 3 Stoppcodons). Die synonymen Codons unterscheiden sich meist in der dritten Position (Wobble-Position). Dies erklärt, warum nicht jede Punktmutation zu einem Aminosäureaustausch führt (stumme/synonyme Mutationen).'
      },
      klinischerBezug: '**Aminoglykoside** (Gentamicin, Tobramycin) und **Tetracycline** hemmen gezielt bakterielle Translation. Aminoglykoside binden an 30S-Untereinheit des prokaryotischen Ribosoms → verursachen Fehlablesungen der mRNA. Tetracycline blockieren die Bindung der Aminoacyl-tRNA an A-Stelle. Eukaryotische Ribosomen (80S) unterscheiden sich strukturell von prokaryotischen (70S) → selektive Wirkung gegen Bakterien. Aber: Aminoglykoside können mitochondriale Ribosomen (70S-ähnlich) beeinträchtigen → **Ototoxizität** (Innenohrschädigung, irreversibel) und **Nephrotoxizität** (Nierenschädigung). Daher: Therapeutisches Drug Monitoring (TDM), Talspiegel <2 mg/L.',
      selfTest: [
        {
          question: 'Welches Codon markiert den Beginn der Translation und für welche Aminosäure kodiert es?',
          options: [
            'UAG — Tyrosin',
            'AUG — Methionin',
            'UGA — Tryptophan',
            'GCA — Alanin',
            'UAA — Glutamin'
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
            'Sie belädt die tRNA mit Aminosäuren',
            'Sie ist ein Enzym in der Kernmembran, das die mRNA-Reifung katalysiert'
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
            'Die mRNA wird gespleißt',
            'Die Aminoacyl-tRNA-Synthetase bindet und fügt eine terminale Aminosäure hinzu'
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
      content: `**Genregulation** steuert, wann, wo und wie stark ein Gen exprimiert wird. Essenziell für Zellen, um auf Umweltveränderungen zu reagieren, sich zu differenzieren, spezifische Funktionen auszuüben. Regulation auf mehreren Ebenen: **transkriptionell** (am häufigsten, energetisch effizientesten), **posttranskriptionell** (mRNA-Stabilität, Spleißen), **translational** (Regulierung der Translationseffizienz), **posttranslational** (Proteinmodifikation, -faltung, -abbau). Prokaryoten: schnelle Anpassung an Umwelt. Eukaryoten: Zelldifferenzierung, Koordination multizellulärer Programme.

**Lac-Operon** von E. coli ist Paradebeispiel für prokaryotische Genregulation (François Jacob, Jacques Monod, 1961). **Induzierbares Operon** mit drei Strukturgenen für Laktoseabbau: **lacZ** (β-Galactosidase, spaltet Laktose in Glukose + Galaktose), **lacY** (Permease, transportiert Laktose in Zelle), **lacA** (Transacetylase). **Lac-Repressor** (kodiert von lacI-Gen) bindet ohne Laktose an Operator, blockiert Transkription. Mit Laktose: Laktose wird zu **Allolaktose** (Induktor) umgewandelt, bindet an Repressor, verändert dessen Konformation → Repressor löst vom Operator ab → Transkription kann beginnen (negative Regulation = Aufhebung einer Hemmung). Zusätzlich **Katabolitrepression**: Bei Glukose (bevorzugte Kohlenstoffquelle) ist cAMP-Spiegel niedrig, **CAP-cAMP-Komplex** (Catabolite Activator Protein) kann nicht an Aktivatorregion binden → Transkription bleibt gering, selbst wenn Laktose vorhanden. Maximale Expression: hohe Laktose + niedrige Glukose (Glukose↓ → cAMP↑ → CAP aktiv).

**Eukaryotische Genregulation** ist komplexer: **Transkriptionsfaktoren** (TFs) spielen zentrale Rolle. **Allgemeine** (basale) **TFs** bilden mit RNA-Pol II den Präinitiationskomplex am Promotor. **Spezifische TFs** (Aktivatoren, Repressoren) binden an **Enhancer**- oder **Silencer**-Sequenzen (können Hunderte bis Tausende bp vom Promotor entfernt liegen). Verbindung zwischen Enhancer-gebundenen TFs und Promotor durch DNA-Schleifen (Loops) + **Mediatorkomplex**. **Chromatinstruktur** (offenes Euchromatin vs. verdichtetes Heterochromatin) reguliert DNA-Zugänglichkeit für Transkriptionsmaschinerie — **epigenetische Modifikationen** (Histonacetylierung, DNA-Methylierung) spielen Schlüsselrolle. **RNA-Interferenz** (RNAi): posttranskriptionelle Regulation. **MicroRNAs** (miRNAs, ca. 21–23 Nukleotide) binden komplementär an 3'-UTR (untranslatierte Region) von Ziel-mRNAs → Abbau oder Translationshemmung. **RISC-Komplex** (RNA-induced silencing complex) vermittelt diesen Prozess. RNAi wurde 1998 von Andrew Fire und Craig Mello entdeckt (Nobelpreis 2006), wird heute therapeutisch genutzt.`,
      merksätze: [
        'Lac-Operon: Doppelte Kontrolle — (1) Negativregulation: Repressor blockiert Operator, Laktose (Allolaktose) hebt Hemmung auf. (2) Katabolitrepression: Maximale Expression nur bei Laktose↑ UND Glukose↓ (cAMP↑ → CAP aktiv).',
        'RNA-Interferenz (RNAi): miRNAs (21–23 nt) binden an 3\'-UTR der Ziel-mRNA → Abbau oder Translationshemmung über RISC-Komplex. Wichtig für posttranskriptionelle Genregulation bei Eukaryoten.'
      ],
      altfrage: {
        question: 'Unter welchen Bedingungen wird das Lac-Operon maximal exprimiert?',
        answer: 'Maximale Expression erfolgt, wenn Laktose vorhanden ist (Allolaktose löst den Repressor vom Operator) UND Glukose fehlt (niedriger Glukosespiegel → hoher cAMP-Spiegel → CAP-cAMP-Komplex bindet an die Aktivatorregion und stimuliert die RNA-Polymerase). Beide Bedingungen müssen gleichzeitig erfüllt sein.'
      },
      klinischerBezug: 'RNA-Interferenz wird zunehmend therapeutisch genutzt. **Patisiran** (Onpattro, 2018 erstes zugelassenes RNAi-Therapeutikum): small interfering RNA (siRNA) baut gezielt die mRNA des mutierten **Transthyretin-Gens** (TTR) in der Leber ab → behandelt hereditäre Transthyretin-Amyloidose (hATTR). Applikation: i.v. alle 3 Wochen. **Inclisiran** (Leqvio): siRNA baut PCSK9-mRNA in Hepatozyten ab → LDL-Cholesterinspiegel sinkt. Applikation: nur 2 subkutane Injektionen pro Jahr (Tag 1, Tag 90, dann alle 6 Monate). Revolutionär für Hypercholesterinämie-Therapie.',
      selfTest: [
        {
          question: 'Was passiert im Lac-Operon, wenn weder Laktose noch Glukose vorhanden ist?',
          options: [
            'Maximale Expression der Strukturgene',
            'Der Repressor blockiert den Operator, keine Transkription der Strukturgene',
            'Die RNA-Polymerase bindet, aber die Translation wird gehemmt',
            'Das Operon wird durch DNA-Methylierung stillgelegt',
            'Der CAP-cAMP-Komplex aktiviert die Transkription ohne Repressorbeteiligung'
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
            'Enzyme, die die Histonacetylierung katalysieren',
            'Abschnitte der mRNA, die nach dem Spleißen als Aktivatoren wirken'
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
            'miRNAs methylieren die DNA an CpG-Inseln',
            'miRNAs dienen als Primer für die DNA-Replikation in der S-Phase'
          ],
          correctIndex: 1,
          explanation: 'MicroRNAs (ca. 21–23 Nukleotide) binden komplementär an die 3\'-UTR der Ziel-mRNA. Der RISC-Komplex (RNA-induced silencing complex) vermittelt dann entweder den Abbau der mRNA oder die Hemmung ihrer Translation — ein wichtiger Mechanismus der posttranskriptionellen Genregulation.'
        }
      ]
    }
  ]
};
