import type { Kapitel } from '../types';

export const bioKap6: Kapitel = {
  id: 'bio-kap6',
  title: 'Evolution',
  subject: 'biologie',
  icon: '🦕',
  estimatedTime: '50 Minuten',
  unterkapitel: [
    // ──────────────────────────────────────────────
    // 6.1 Evolutionstheorien
    // ──────────────────────────────────────────────
    {
      id: 'bio-kap6-1',
      title: 'Evolutionstheorien',
      content:
        'Evolution erklärt die Veränderung von Arten über die Zeit. Drei Theorien waren wegweisend. Jean-Baptiste de Lamarck (1744–1829) postulierte die Vererbung erworbener Eigenschaften. Seine Theorie: Organe entwickeln sich durch Gebrauch, verkümmern durch Nichtgebrauch. Die Giraffe streckt sich nach Baumkronen, ihr Hals verlängert sich, diese Verlängerung vererbt sich. Das stimmt nicht — erworbene Merkmale vererben sich nicht direkt. Aber: Die **Epigenetik** (chemische Modifikationen der DNA ohne Sequenzänderung) zeigt, dass Umwelteinflüsse Genaktivität verändern und teilweise an Nachkommen weitergegeben werden können.\n\n' +
        'Charles Darwin (1809–1882) entwickelte die **natürliche Selektion**. Seine Beobachtungen: Individuen variieren. Es entstehen mehr Nachkommen als überleben können. Kampf ums Dasein. Vorteilhafte Merkmale erhöhen Überlebens- und Fortpflanzungschancen. Diese Merkmale vererben sich. Darwin nannte es **„survival of the fittest"** — das Überleben der Angepasstesten, nicht der Stärksten. **Fitness** bedeutet Fortpflanzungserfolg, nicht Muskelkraft. Darwin konnte den Vererbungsmechanismus nicht erklären.\n\n' +
        'Die **Synthetische Evolutionstheorie** (ab 1930) vereinigt Darwin mit Genetik. Sie erklärt Evolution als Veränderung der **Allelfrequenzen** (Häufigkeit verschiedener Gen-Varianten) in Populationen. Mutation und Rekombination erzeugen Variabilität. Selektion filtert. Gendrift und Genfluss wirken zusätzlich. Die Population — nicht das Individuum — evolviert.',
      merksätze: [
        'Lamarck: Vererbung erworbener Eigenschaften (widerlegt, aber epigenetische Ansätze). Darwin: Natürliche Selektion — „survival of the fittest". Synthetische Theorie: Evolution = Veränderung der Allelfrequenzen in Populationen.',
        'Merke: Darwin erklärt das Überleben der Angepassten, nicht das Überleben der Stärksten. Fitness bedeutet Fortpflanzungserfolg, nicht körperliche Stärke.',
      ],
      altfrage: {
        question: 'Welche Aussage trifft auf Darwins Evolutionstheorie zu?',
        answer:
          'Darwin postulierte, dass natürliche Selektion auf Basis vorhandener Variation in Populationen wirkt. Individuen mit vorteilhaften Merkmalen haben einen höheren Fortpflanzungserfolg. Im Gegensatz zu Lamarck ging Darwin nicht von der Vererbung erworbener Eigenschaften aus.',
      },
      klinischerBezug:
        'Bakterien entwickeln Antibiotikaresistenzen durch natürliche Selektion. Beispiel: **MRSA** (Methicillin-resistenter *Staphylococcus aureus*). Zufällige Mutationen machen einzelne Bakterien resistent. Antibiotika töten die nicht-resistenten. Die resistenten überleben und vermehren sich. Nach mehreren Generationen dominiert der resistente Stamm. Resistenzmechanismen: Beta-Lactamase-Enzyme spalten Antibiotika. Veränderte Zellwandproteine verhindern Antibiotika-Bindung. Efflux-Pumpen schleusen Antibiotika aus der Zelle.',
      selfTest: [
        {
          question: 'Welches Konzept stammt NICHT von Darwin?',
          options: [
            'Natürliche Selektion',
            'Vererbung erworbener Eigenschaften',
            'Variation innerhalb von Populationen',
            'Überproduktion von Nachkommen',
            'Kampf ums Dasein (struggle for existence)',
          ],
          correctIndex: 1,
          explanation:
            'Die Vererbung erworbener Eigenschaften ist ein Konzept von Lamarck. Darwin postulierte die natürliche Selektion auf Basis bereits vorhandener Variation.',
        },
        {
          question: 'Was beschreibt die Synthetische Evolutionstheorie?',
          options: [
            'Ausschließlich die natürliche Selektion als Evolutionsmechanismus',
            'Die Vereinigung von Darwins Selektionstheorie mit Genetik und Populationsgenetik',
            'Die Vererbung erworbener Eigenschaften auf molekularer Ebene',
            'Die Entstehung von Arten durch göttliche Schöpfung',
            'Die Erklärung von Evolution ausschließlich durch Gendrift und Mutation',
          ],
          correctIndex: 1,
          explanation:
            'Die Synthetische Evolutionstheorie (Moderne Synthese) vereint Darwins Selektionstheorie mit der Mendelschen Genetik, Populationsgenetik und Mutationsforschung.',
        },
        {
          question: 'Was bedeutet „Fitness" im evolutionsbiologischen Sinne?',
          options: [
            'Körperliche Stärke und Ausdauer',
            'Fortpflanzungserfolg eines Individuums',
            'Anpassung an extreme Umweltbedingungen',
            'Fähigkeit zur Nahrungsbeschaffung',
            'Resistenz gegenüber Krankheitserregern',
          ],
          correctIndex: 1,
          explanation:
            'Biologische Fitness bezeichnet den relativen Fortpflanzungserfolg eines Individuums — also wie viele überlebensfähige Nachkommen es im Vergleich zu anderen Individuen der Population hinterlässt.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // 6.2 Evolutionsfaktoren
    // ──────────────────────────────────────────────
    {
      id: 'bio-kap6-2',
      title: 'Evolutionsfaktoren',
      content:
        'Evolution ist die Veränderung der Allelfrequenzen in einer Population. Fünf Faktoren treiben Evolution an. **Mutation** erzeugt neue Allele — zufällige DNA-Veränderungen. Meiste Mutationen sind neutral oder schädlich. Wenige sind vorteilhaft. **Rekombination** (Crossing-over, zufällige Chromosomenverteilung in der Meiose) mischt bestehende Allele neu. **Selektion** ist der einzige gerichtete Faktor. Sie begünstigt Individuen mit höherer Fitness. **Gendrift** verändert Allelfrequenzen zufällig, besonders in kleinen Populationen. **Genfluss** (Migration) bringt neue Allele in die Population.\n\n' +
        'Das **Hardy-Weinberg-Gleichgewicht** beschreibt den theoretischen Zustand ohne Evolution. Formel: p² + 2pq + q² = 1. Voraussetzungen: unendlich große Population, zufällige Paarung, keine Mutation, keine Selektion, kein Genfluss. In der Natur nie erfüllt — Evolution findet immer statt.\n\n' +
        '**Gendrift** wirkt besonders stark in kleinen Populationen. Zwei wichtige Sonderfälle: Der **Flaschenhalseffekt** (bottleneck) — eine Katastrophe dezimiert die Population stark. Die Überlebenden repräsentieren nur einen Bruchteil der genetischen Vielfalt. Der **Gründereffekt** (founder effect) — eine kleine Gruppe gründet eine neue Population. Sie trägt nur einen Ausschnitt des Gen-Pools der Ausgangspopulation mit. **Isolation** (geographisch, ökologisch, reproduktiv) verhindert Genfluss zwischen Populationen. Voraussetzung für Artbildung.',
      merksätze: [
        'Evolutionsfaktoren: Mutation (erzeugt Variation), Rekombination (neue Kombinationen), Selektion (gerichtet), Gendrift (zufällig, kleine Populationen), Genfluss/Migration, Isolation.',
        'Hardy-Weinberg-Gleichung: p² + 2pq + q² = 1. Voraussetzungen: keine Mutation, keine Selektion, keine Gendrift, zufällige Paarung, kein Genfluss. In der Natur nie erfüllt — daher findet immer Evolution statt.',
      ],
      altfrage: {
        question: 'Welcher Evolutionsfaktor wirkt besonders stark in kleinen Populationen?',
        answer:
          'Gendrift (genetische Drift) wirkt besonders stark in kleinen Populationen, da hier zufällige Schwankungen der Allelfrequenzen einen großen Effekt haben. Sonderfälle sind der Flaschenhalseffekt und der Gründereffekt.',
      },
      klinischerBezug:
        'Der Gründereffekt erklärt gehäufte Erbkrankheiten in isolierten Populationen. Beispiel 1: **Tay-Sachs-Krankheit** bei aschkenasischen Juden (Frequenz 1:3600 vs. 1:360.000 in der Gesamtbevölkerung). Ursache: Wenige Gründer trugen das mutierte Hexosaminidase-A-Gen. Beispiel 2: **Sichelzellanämie** in Malariagebieten. Heterozygote (HbA/HbS) sind gegen Malaria geschützt (Selektionsvorteil), homozygote (HbS/HbS) entwickeln schwere Anämie. Heterozygotenvorteil hält das Allel in der Population. Beispiel 3: **Huntington-Chorea** in bestimmten venezolanischen Dörfern am Maracaibo-See — extrem hohe Frequenz durch Gründereffekt.',
      selfTest: [
        {
          question: 'Was beschreibt der Flaschenhalseffekt?',
          options: [
            'Die Gründung einer neuen Population durch wenige Individuen',
            'Die starke Reduktion einer Population durch ein katastrophales Ereignis',
            'Die gerichtete Selektion auf ein bestimmtes Merkmal',
            'Die Zunahme der Mutationsrate unter Stress',
            'Die allmähliche Vergrößerung einer Population durch Einwanderung',
          ],
          correctIndex: 1,
          explanation:
            'Der Flaschenhalseffekt beschreibt die starke Reduktion der Populationsgröße durch eine Katastrophe. Die Überlebenden repräsentieren nur einen Teil der genetischen Vielfalt der ursprünglichen Population.',
        },
        {
          question: 'Welche Voraussetzung muss für das Hardy-Weinberg-Gleichgewicht erfüllt sein?',
          options: [
            'Hohe Mutationsrate',
            'Starke natürliche Selektion',
            'Zufällige Paarung (Panmixie)',
            'Kleine Populationsgröße',
            'Geographische Isolation der Population',
          ],
          correctIndex: 2,
          explanation:
            'Das Hardy-Weinberg-Gleichgewicht setzt u. a. zufällige Paarung (Panmixie), eine unendlich große Population, keine Mutation, keine Selektion und keinen Genfluss voraus.',
        },
        {
          question: 'Welcher Evolutionsfaktor ist der einzige gerichtete?',
          options: [
            'Gendrift',
            'Mutation',
            'Selektion',
            'Rekombination',
            'Genfluss',
          ],
          correctIndex: 2,
          explanation:
            'Selektion ist der einzige gerichtete Evolutionsfaktor. Sie begünstigt Individuen mit vorteilhaften Merkmalen und führt zur Anpassung der Population an die Umwelt.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // 6.3 Artbildung
    // ──────────────────────────────────────────────
    {
      id: 'bio-kap6-3',
      title: 'Artbildung',
      content:
        'Artbildung (Speziation) ist die Entstehung neuer Arten. Was ist eine Art? Das **biologische Artkonzept** (Ernst Mayr) definiert: Eine Gruppe von Populationen, die sich untereinander fortpflanzen und fruchtbare Nachkommen erzeugen, aber von anderen Gruppen reproduktiv isoliert sind. Problem: Gilt nicht für asexuelle Organismen, Fossilien oder Hybride. Das **morphologische Artkonzept** nutzt gemeinsame Merkmale — praktisch, aber ungenau.\n\n' +
        '**Allopatrische Artbildung** ist der häufigste Mechanismus. Eine Population wird geographisch getrennt (Gebirge, Ozean, Eiszeit). Die Teilpopulationen evolvieren unabhängig. Mutation, Selektion und Gendrift wirken unterschiedlich. Nach langer Zeit: reproduktive Isolation. Klassisches Beispiel: **Darwin-Finken** auf den Galápagos-Inseln. Jede Insel hatte andere Nahrungsquellen. Die Schnabelform passte sich an — Insektenfresser haben spitze Schnäbel, Samenfresser kräftige.\n\n' +
        '**Sympatrische Artbildung** erfolgt ohne räumliche Trennung — im selben Gebiet. Seltener. Mechanismen: Ökologische Nischenaufteilung (verschiedene Nahrung, verschiedene Tageszeiten). Zeitliche Isolation (verschiedene Paarungszeiten). **Polyploidie** (Vervielfachung des Chromosomensatzes) — häufig bei Pflanzen. Allopolyploide Arten entstehen durch Kreuzung zweier Arten mit anschließender Genomverdopplung. Die neue Art kann sich nicht mehr mit den Elternarten kreuzen.',
      merksätze: [
        'Allopatrisch = „anderes Vaterland" → geographische Trennung. Sympatrisch = „gleiches Vaterland" → im selben Gebiet, z. B. durch ökologische oder zeitliche Isolation.',
        'Biologisches Artkonzept (Mayr): Fortpflanzungsgemeinschaft mit fruchtbaren Nachkommen, reproduktiv isoliert von anderen Arten.',
      ],
      altfrage: {
        question: 'Was ist die häufigste Form der Artbildung?',
        answer:
          'Die allopatrische Artbildung durch geographische Isolation ist der häufigste Speziationsmechanismus. Eine Population wird durch eine physische Barriere getrennt, und die Teilpopulationen entwickeln sich unabhängig weiter, bis reproduktive Isolation eintritt.',
      },
      klinischerBezug:
        'Bei Bakterien funktioniert das biologische Artkonzept nicht — keine sexuelle Fortpflanzung im klassischen Sinn. Definition über DNA-Sequenzen: **16S-rRNA-Vergleich** (ribosomale RNA-Gen). Arten mit >97% Ähnlichkeit gelten als gleiche Spezies. Problem: **horizontaler Gentransfer** (Plasmidaustausch zwischen Bakterien verschiedener Arten). Beispiel: **ESBL-Gene** (Extended-Spectrum Beta-Lactamase) — Resistenz gegen Cephalosporine — springen via Plasmide zwischen *E. coli*, *Klebsiella*, *Proteus*. Resistenzgene kennen keine Artgrenzen.',
      selfTest: [
        {
          question: 'Welches Artkonzept definiert Arten über die Fähigkeit zur Fortpflanzung mit fruchtbaren Nachkommen?',
          options: [
            'Morphologisches Artkonzept',
            'Ökologisches Artkonzept',
            'Biologisches Artkonzept',
            'Phylogenetisches Artkonzept',
            'Genetisches Artkonzept',
          ],
          correctIndex: 2,
          explanation:
            'Das biologische Artkonzept nach Ernst Mayr definiert eine Art als Fortpflanzungsgemeinschaft, deren Mitglieder fruchtbare Nachkommen erzeugen und von anderen Gruppen reproduktiv isoliert sind.',
        },
        {
          question: 'Was ist ein typisches Beispiel für allopatrische Artbildung?',
          options: [
            'Polyploidie bei Pflanzen',
            'Darwin-Finken auf den Galápagos-Inseln',
            'Nischenaufteilung im selben Habitat',
            'Zeitliche Isolation durch unterschiedliche Blühzeiten',
            'Entstehung von Antibiotikaresistenzen bei Bakterien',
          ],
          correctIndex: 1,
          explanation:
            'Die Darwin-Finken auf den Galápagos-Inseln sind ein klassisches Beispiel für allopatrische Artbildung: Durch die geographische Isolation auf verschiedenen Inseln haben sich verschiedene Arten mit unterschiedlichen Schnabelformen entwickelt.',
        },
        {
          question: 'Welcher Mechanismus ist besonders bei der sympatrischen Artbildung von Pflanzen bedeutsam?',
          options: [
            'Gendrift',
            'Geographische Isolation',
            'Polyploidie',
            'Natürliche Selektion',
            'Horizontaler Gentransfer',
          ],
          correctIndex: 2,
          explanation:
            'Polyploidie (Vervielfachung des Chromosomensatzes) ist ein wichtiger Mechanismus der sympatrischen Artbildung bei Pflanzen. Allopolyploide entstehen durch Hybridisierung mit anschließender Genomverdopplung.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // 6.4 Belege für Evolution
    // ──────────────────────────────────────────────
    {
      id: 'bio-kap6-4',
      title: 'Belege für Evolution',
      content:
        'Evolution ist belegt durch Anatomie, Paläontologie, Embryologie und Molekularbiologie. **Homologe Organe** haben den gleichen Grundbauplan, verschiedene Funktionen. Beispiel: Arm des Menschen, Flügel des Vogels, Flosse des Wals, Grabbein des Maulwurfs — alle haben dieselbe Knochenstruktur der Vorderextremität. Beleg für gemeinsame Abstammung. **Analoge Organe** haben ähnliche Funktion, verschiedenen Bauplan. Beispiel: Vogelflügel vs. Insektenflügel. Entstanden durch konvergente Evolution — unabhängige Anpassung an Flug.\n\n' +
        '**Rudimente** sind funktionslose Reste früherer Strukturen. Beim Menschen: Steißbeinwirbel (Rest des Schwanzes), Wurmfortsatz (Appendix), Nickhaut am Auge, Weisheitszähne, Ohrmuschelmuskeln. Belegen, dass Vorfahren diese Strukturen funktionell besaßen. **Atavismen** sind das gelegentliche Wiederauftreten von Vorfahrenmerkmalen — überzählige Brustwarzen, Schwanzbildung beim Menschen, Hinterbeinanlagen bei Walen. Die genetische Information ist noch da, normalerweise stillgelegt.\n\n' +
        '**Fossilien** zeigen versteinerte Überreste ausgestorbener Arten. Die Abfolge in Gesteinsschichten zeigt Entwicklung von einfach zu komplex. **Übergangsformen** (Mosaikformen) belegen graduelle Veränderung. *Archaeopteryx* — Merkmale von Reptilien (Zähne, Schwanzwirbel, Krallen an Flügeln) und Vögeln (Federn, Gabelbein). *Tiktaalik* — Übergang von Fischen zu Landwirbeltieren. **Molekulare Belege**: DNA-Sequenzvergleiche. Je näher verwandt, desto ähnlicher die Sequenzen. Der genetische Code ist universell — alle Lebewesen nutzen denselben Code. Beleg für gemeinsamen Ursprung.',
      merksätze: [
        'Homologie = gleicher Bauplan, verschiedene Funktion (Beleg für gemeinsame Abstammung). Analogie = verschiedener Bauplan, gleiche Funktion (konvergente Evolution).',
        'Rudimente = funktionslose Überreste früherer Strukturen. Atavismen = Wiederauftreten von Vorfahrenmerkmalen. Beide belegen evolutionäre Abstammung.',
      ],
      altfrage: {
        question: 'Was ist ein Beispiel für ein homologes Organ?',
        answer:
          'Der Arm des Menschen und der Flügel eines Vogels sind homologe Organe: Sie haben den gleichen Grundbauplan (Knochenstruktur der Vorderextremität), aber unterschiedliche Funktionen (Greifen vs. Fliegen). Sie belegen die gemeinsame Abstammung von einem Vorfahren.',
      },
      klinischerBezug:
        'Der **Wurmfortsatz** (Appendix vermiformis) ist ein Rudiment des größeren Blinddarms pflanzenfressender Vorfahren. Klinisch: **Appendizitis** (Entzündung) — eine der häufigsten Notfall-OPs. Pathogenese: Verlegung des Lumens (durch Kotsteine, Lymphknotenvergrößerung) → Sekretstau → bakterielle Überwucherung → Entzündung → Perforation → Peritonitis. Symptome: periumbilikal beginnender Schmerz, Wanderung in den rechten Unterbauch (McBurney-Punkt), Übelkeit, Fieber. Neuere Forschung: Appendix als Reservoir für Darmflora — nach Durchfall-Erkrankungen kann sich die Flora aus dem Appendix regenerieren.',
      selfTest: [
        {
          question: 'Welches der folgenden ist ein Beispiel für ein Rudiment beim Menschen?',
          options: [
            'Das Herz',
            'Die Steißbeinwirbel',
            'Das Großhirn',
            'Die Lunge',
            'Der Blinddarm als Ganzes',
          ],
          correctIndex: 1,
          explanation:
            'Die Steißbeinwirbel sind ein Rudiment — der funktionslose Rest eines Schwanzes, den die Vorfahren des Menschen besaßen.',
        },
        {
          question: 'Was unterscheidet homologe von analogen Organen?',
          options: [
            'Homologe Organe haben gleiche Funktion, analoge gleichen Bauplan',
            'Homologe Organe haben gleichen Bauplan, analoge gleiche Funktion',
            'Beide haben gleichen Bauplan und gleiche Funktion',
            'Beide haben verschiedenen Bauplan und verschiedene Funktion',
            'Homologe Organe entstehen durch konvergente Evolution, analoge durch Divergenz',
          ],
          correctIndex: 1,
          explanation:
            'Homologe Organe haben den gleichen Grundbauplan (gemeinsame Abstammung), aber oft unterschiedliche Funktionen. Analoge Organe haben verschiedenen Bauplan, aber ähnliche Funktionen (konvergente Evolution).',
        },
        {
          question: 'Was ist Archäopteryx?',
          options: [
            'Ein lebendes Fossil',
            'Eine Übergangsform zwischen Reptilien und Vögeln',
            'Ein ausgestorbener Säugetier-Vorfahre',
            'Ein Rudiment bei modernen Vögeln',
            'Ein Beispiel für konvergente Evolution bei Flugsauriern',
          ],
          correctIndex: 1,
          explanation:
            'Archäopteryx ist eine Übergangsform (Mosaikform) zwischen Reptilien und Vögeln. Er besaß sowohl Reptilienmerkmale (Zähne, Schwanzwirbel, Krallen an den Flügeln) als auch Vogelmerkmale (Federn, Gabelbein).',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // 6.5 Stammesgeschichte
    // ──────────────────────────────────────────────
    {
      id: 'bio-kap6-5',
      title: 'Stammesgeschichte',
      content:
        'Stammesgeschichte (Phylogenese) rekonstruiert Verwandtschaftsbeziehungen. Die **Kladistik** (Willi Hennig, 1950) ist die moderne Methode. Prinzip: Verwandtschaft wird durch **gemeinsame abgeleitete Merkmale** (Synapomorphien) bestimmt. Eine **Synapomorphie** ist ein Merkmal, das bei einer Gruppe vorkommt, aber bei den nächsten Verwandten fehlt. Beleg für eine exklusive Abstammungsgemeinschaft (**monophyletische Gruppe** oder Klade). Beispiel: Federn sind eine Synapomorphie der Vögel. Ein **Kladogramm** zeigt die Verzweigungsfolge. Jeder Verzweigungspunkt (Knoten) repräsentiert einen gemeinsamen Vorfahren.\n\n' +
        'Heute nutzt man vor allem **molekulare Daten** (DNA-Sequenzen). Methoden: Maximum-Likelihood, Bayessche Phylogenetik, Maximum-Parsimonie. Die **Molekulare Uhr** nutzt die Annahme konstanter Mutationsrate. Damit lässt sich datieren, wann sich Stammlinien getrennt haben. Beispiel: Mensch-Schimpanse-Trennung vor ca. 6–7 Millionen Jahren.\n\n' +
        'Alle Lebewesen stammen von einem gemeinsamen Vorfahren ab (**LUCA** — Last Universal Common Ancestor). Die drei Domänen des Lebens: Bacteria, Archaea, Eukarya. Die **Endosymbiontentheorie** (Lynn Margulis) erklärt Mitochondrien und Chloroplasten: Eukaryotische Vorläuferzellen nahmen Prokaryoten auf. Belege: eigene DNA, Doppelmembran, ribosomale Ähnlichkeit mit Bakterien.',
      merksätze: [
        'Kladistik: Verwandtschaft wird durch gemeinsame abgeleitete Merkmale (Synapomorphien) bestimmt. Eine monophyletische Gruppe (Klade) umfasst einen gemeinsamen Vorfahren und ALLE seine Nachkommen.',
        'Molekulare Uhr: DNA-Veränderungsrate ≈ konstant → Datierung von Aufspaltungszeitpunkten. Mensch-Schimpanse-Trennung: ca. 6–7 Mio. Jahre.',
      ],
      altfrage: {
        question: 'Was ist eine Synapomorphie?',
        answer:
          'Eine Synapomorphie ist ein gemeinsames abgeleitetes Merkmal, das eine monophyletische Gruppe (Klade) definiert. Sie war beim gemeinsamen Vorfahren der Gruppe vorhanden, fehlt aber bei den nächsten Verwandten außerhalb der Gruppe.',
      },
      klinischerBezug:
        'Phylogenetische Analyse verfolgt die Evolution von Pathogenen. Beispiel 1: **Influenza-Überwachung**. Man sequenziert Hämagglutinin (H) und Neuraminidase (N) von Influenza-Isolaten weltweit. Stammbaumanalyse zeigt, welche Varianten sich ausbreiten. WHO empfiehlt jährlich neue Impfstoffzusammensetzung basierend auf phylogenetischen Prognosen. Beispiel 2: **SARS-CoV-2-Varianten**. Phylogenetik identifizierte Alpha (B.1.1.7), Delta (B.1.617.2), Omicron (B.1.1.529). Stammbäume zeigten: Omicron entstand nicht aus Delta, sondern aus einer älteren Linie — unabhängige Evolution. Beispiel 3: **HIV-Forensik**. Stammbaumanalyse kann Übertragungsketten rekonstruieren — relevant für forensische Fragen.',
      selfTest: [
        {
          question: 'Was ist eine monophyletische Gruppe (Klade)?',
          options: [
            'Eine Gruppe nicht verwandter Arten mit ähnlichen Merkmalen',
            'Ein gemeinsamer Vorfahre und alle seine Nachkommen',
            'Eine Gruppe von Arten mit gleicher ökologischer Nische',
            'Arten, die in derselben geographischen Region leben',
            'Eine Gruppe von Arten, die durch konvergente Evolution ähnliche Merkmale entwickelt haben',
          ],
          correctIndex: 1,
          explanation:
            'Eine monophyletische Gruppe (Klade) umfasst einen gemeinsamen Vorfahren und sämtliche seiner Nachkommen — keine Art darf ausgeschlossen sein.',
        },
        {
          question: 'Worauf basiert die molekulare Uhr?',
          options: [
            'Auf der konstanten Rate radioaktiven Zerfalls',
            'Auf der annähernd konstanten Rate von DNA-Sequenzveränderungen',
            'Auf der gleichmäßigen Entstehung neuer Arten',
            'Auf der konstanten Mutationsrate durch UV-Strahlung',
            'Auf der gleichmäßigen Abnahme der Chromosomenzahl im Laufe der Evolution',
          ],
          correctIndex: 1,
          explanation:
            'Die molekulare Uhr basiert auf der Annahme, dass sich DNA-Sequenzen mit einer annähernd konstanten Rate verändern. Durch den Vergleich von Sequenzunterschieden kann der Zeitpunkt der Aufspaltung zweier Stammlinien geschätzt werden.',
        },
        {
          question: 'Welche Theorie erklärt die Entstehung von Mitochondrien?',
          options: [
            'Die Urknalltheorie',
            'Die Synthetische Evolutionstheorie',
            'Die Endosymbiontentheorie',
            'Die Panspermietheorie',
            'Die Hypothese der spontanen Biogenese',
          ],
          correctIndex: 2,
          explanation:
            'Die Endosymbiontentheorie (Lynn Margulis) erklärt die Entstehung von Mitochondrien und Chloroplasten durch die Aufnahme von Prokaryoten in eukaryotische Vorläuferzellen. Belege sind eigene DNA, Doppelmembran und ribosomale Ähnlichkeit mit Bakterien.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // 6.6 Evolution des Menschen
    // ──────────────────────────────────────────────
    {
      id: 'bio-kap6-6',
      title: 'Evolution des Menschen',
      content:
        'Der Mensch (*Homo sapiens*) gehört zur Familie der Menschenaffen (Hominidae). Die engsten lebenden Verwandten sind die Schimpansen (*Pan troglodytes*, *Pan paniscus*). Wir teilen ca. 98,7% der DNA. Wichtig: Der Mensch stammt NICHT vom Schimpansen ab. Beide haben einen gemeinsamen Vorfahren. Trennung vor ca. 6–7 Millionen Jahren in Afrika.\n\n' +
        'Frühe Hominiden: *Sahelanthropus tchadensis* (ca. 7 Mio. Jahre), *Ardipithecus ramidus* (4,4 Mio. Jahre). Die Gattung *Australopithecus* (4–2 Mio. Jahre) — bereits aufrecht gehend (Bipedie), aber kleines Gehirn (400–500 cm³). Berühmtes Fossil: **„Lucy"** (*Australopithecus afarensis*, 3,2 Mio. Jahre). Die Gattung *Homo* erschien vor ca. 2,5 Mio. Jahren. *Homo habilis* (600–750 cm³ Gehirn). *Homo erectus* (1,9 Mio.–100.000 Jahre, 900–1100 cm³) — verließ als erster Afrika, nutzte Feuer.\n\n' +
        '*Homo sapiens* entstand vor ca. 300.000 Jahren in Afrika (Out-of-Africa-Modell). Ausbreitung vor 70.000–100.000 Jahren über die Welt. DNA-Analysen zeigen: Begrenzte Hybridisierung mit Neandertalern und Denisova-Menschen. Heutige Europäer tragen 1–4% Neandertaler-DNA.\n\n' +
        'Schlüsselmerkmale: **Aufrechter Gang** (Bipedie) war die früheste Anpassung — ging der Gehirnvergrößerung voraus. Anatomische Änderungen: S-förmige Wirbelsäule, verbreitertes Becken, Foramen magnum (Hinterhauptsloch) nach vorne verlagert, Fußgewölbe, nicht-opponierbare Großzehe. **Enzephalisation** (Gehirnvergrößerung): von 400 cm³ bei *Australopithecus* auf 1400 cm³ bei *Homo sapiens*. Ermöglichte Sprache, abstraktes Denken, Kultur.',
      merksätze: [
        'Wichtige Hominiden-Reihe: Australopithecus (Lucy, 3,2 Mio. J.) → Homo habilis (2,5 Mio. J.) → Homo erectus (1,9 Mio. J., erstes Verlassen Afrikas) → Homo sapiens (ca. 300.000 J.).',
        'Aufrechter Gang ging der Gehirnvergrößerung VORAUS. Anpassungen: S-förmige Wirbelsäule, verbreitertes Becken, Foramen magnum nach vorne verlagert, Fußgewölbe.',
      ],
      altfrage: {
        question: 'Von welchem Vorfahren stammt der Mensch ab?',
        answer:
          'Der Mensch stammt NICHT vom Schimpansen ab. Mensch und Schimpanse haben einen gemeinsamen Vorfahren, von dem sich beide Linien vor ca. 6–7 Mio. Jahren in Afrika getrennt haben. Sie teilen ca. 98,7 % ihrer DNA.',
      },
      klinischerBezug:
        'Bipedie hat klinische Konsequenzen. **Rückenschmerzen** und **Bandscheibenvorfälle** durch aufrechte Wirbelsäulenbelastung. Häufigste Lokalisation: L4/L5 und L5/S1 (lumbale Lordose). **Geburtshilfliches Dilemma**: Das verbreiterte Becken (Bipedie-Anpassung) und der große Kopf des Neugeborenen (Enzephalisation) machen die Geburt schwierig. Komplikationen häufiger als bei anderen Primaten. **Neandertaler-DNA** beeinflusst das moderne Immunsystem. Studien zeigen: Neandertaler-Gene betreffen Toll-like-Rezeptoren (TLR1, TLR6, TLR10) — Pathogenerkennung. Erhöhte Allergieneigung bei Trägern bestimmter Neandertaler-Varianten.',
      selfTest: [
        {
          question: 'Wie alt ist das Fossil „Lucy" und zu welcher Gattung gehört es?',
          options: [
            'Ca. 1 Mio. Jahre alt, Homo erectus',
            'Ca. 3,2 Mio. Jahre alt, Australopithecus afarensis',
            'Ca. 300.000 Jahre alt, Homo sapiens',
            'Ca. 7 Mio. Jahre alt, Sahelanthropus tchadensis',
            'Ca. 500.000 Jahre alt, Homo heidelbergensis',
          ],
          correctIndex: 1,
          explanation:
            '„Lucy" ist ein ca. 3,2 Millionen Jahre altes Fossil der Art Australopithecus afarensis, das 1974 in Äthiopien gefunden wurde. Lucy war bereits ein aufrechtgehender Zweibeiner.',
        },
        {
          question: 'Welche anatomische Anpassung an den aufrechten Gang ist korrekt?',
          options: [
            'Gerade Wirbelsäule ohne Krümmungen',
            'Foramen magnum nach hinten verlagert',
            'S-förmige Wirbelsäule mit Lordosen und Kyphosen',
            'Opponierbare Großzehe für besseren Griff',
            'Verlängerte Arme im Verhältnis zu den Beinen',
          ],
          correctIndex: 2,
          explanation:
            'Die S-förmige Wirbelsäule mit Lordose (Hals und Lende) und Kyphose (Brust und Kreuzbein) ist eine zentrale Anpassung an den aufrechten Gang und ermöglicht die Stoßdämpfung.',
        },
        {
          question: 'Was besagt das Out-of-Africa-Modell?',
          options: [
            'Homo sapiens entstand gleichzeitig auf allen Kontinenten',
            'Homo sapiens entstand in Afrika und breitete sich von dort aus',
            'Alle Menschenaffen stammen aus Südamerika',
            'Die menschliche Evolution fand ausschließlich in Europa statt',
            'Homo sapiens entstand in Asien und wanderte nach Afrika zurück',
          ],
          correctIndex: 1,
          explanation:
            'Das Out-of-Africa-Modell besagt, dass Homo sapiens vor ca. 300.000 Jahren in Afrika entstand und sich von dort über die gesamte Erde ausbreitete, wobei er andere Homo-Arten weitgehend ersetzte.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // 6.7 Selektion
    // ──────────────────────────────────────────────
    {
      id: 'bio-kap6-7',
      title: 'Selektion',
      content:
        'Selektion ist der zentrale gerichtete Evolutionsfaktor. Sie wirkt auf phänotypische Variation. Individuen mit vorteilhaften Merkmalen haben höheren Fortpflanzungserfolg (Fitness). Sie geben ihre Gene häufiger weiter. Selektion erzeugt keine neue Variation — sie filtert die durch Mutation und Rekombination erzeugte Variabilität. Drei Hauptformen.\n\n' +
        '**Stabilisierende Selektion** bevorzugt den Mittelwert. Extreme werden benachteiligt. Tritt in stabilen Umwelten auf. Varianz sinkt, Mittelwert bleibt. Beispiel: **Geburtsgewicht beim Menschen**. Neugeborene mit mittlerem Gewicht (3000–4000 g) haben die höchste Überlebensrate. Sehr leichte Babys: Unreife, Atemprobleme. Sehr schwere Babys: Geburtskomplikationen.\n\n' +
        '**Transformierende Selektion** (gerichtete Selektion) verschiebt den Mittelwert in eine Richtung. Tritt auf, wenn sich Umweltbedingungen ändern. Ein Extremwert wird vorteilhaft. Beispiel: **Industriemelanismus beim Birkenspanner** (*Biston betularia*). In verrußten Industriegebieten wurden dunkle Formen bevorzugt — bessere Tarnung auf dunkler Rinde. In sauberen Gebieten überleben helle Formen besser.\n\n' +
        '**Disruptive Selektion** (aufspaltende Selektion) bevorzugt beide Extreme. Der Mittelwert wird benachteiligt. Führt zu bimodaler Verteilung. Kann zur Aufspaltung einer Population beitragen (sympatrische Artbildung). Beispiel: Schnabelgröße bei afrikanischen Webervögeln. Sehr große oder sehr kleine Schnäbel sind vorteilhaft. Mittlere Schnäbel knacken weder harte noch weiche Samen effizient.\n\n' +
        '**Sexuelle Selektion** wirkt auf den Fortpflanzungserfolg. Zwei Formen: **Intrasexuelle Selektion** — Konkurrenz innerhalb eines Geschlechts (meist Männchen). Beispiel: Rivalenkämpfe beim Hirsch. **Intersexuelle Selektion** — Partnerwahl (meist Weibchen wählen Männchen). Beispiel: Pfauenschwanz. Das **Handicap-Prinzip** (Amotz Zahavi): Nur gesunde Männchen können aufwendige Merkmale tragen. Das Merkmal ist ein ehrliches Signal für genetische Qualität.',
      merksätze: [
        'Drei Selektionsformen: Stabilisierend (Mittelwert bevorzugt, Varianz sinkt), Transformierend (Mittelwert verschiebt sich), Disruptiv (Extreme bevorzugt, Mittelwert benachteiligt).',
        'Sexuelle Selektion: Intrasexuell = Konkurrenz (Kampf), Intersexuell = Partnerwahl (z. B. Pfauenschwanz). Handicap-Prinzip: Aufwendige Merkmale als ehrliche Signale für Fitness.',
      ],
      altfrage: {
        question: 'Welche Selektionsform tritt beim Geburtsgewicht des Menschen auf?',
        answer:
          'Beim Geburtsgewicht des Menschen wirkt stabilisierende Selektion: Neugeborene mit mittlerem Geburtsgewicht (ca. 3000–4000 g) haben die höchste Überlebensrate. Sowohl zu leichte als auch zu schwere Neugeborene haben ein erhöhtes Mortalitätsrisiko.',
      },
      klinischerBezug:
        'Gerichtete Selektion durch Antibiotika und Virostatika. Beispiel 1: **HIV-Resistenz**. HIV mutiert schnell. Antiretrovirale Therapie (ART) übt starken Selektionsdruck aus. Resistenzmutationen in Reverse Transkriptase, Protease oder Integrase werden selektiert. Lösung: HAART (hochaktive antiretrovirale Therapie) — Kombination mehrerer Wirkstoffe reduziert Resistenzentwicklung. Beispiel 2: **Tuberkulose**. *Mycobacterium tuberculosis* entwickelt Resistenzen gegen Rifampicin (rpoB-Gen-Mutation), Isoniazid (katG, inhA). MDR-TB (multi-drug-resistant) und XDR-TB (extensively drug-resistant) entstehen durch sequenzielle Monotherapie — transformierende Selektion auf resistente Varianten.',
      selfTest: [
        {
          question: 'Welche Selektionsform kann zur Aufspaltung einer Population führen?',
          options: [
            'Stabilisierende Selektion',
            'Transformierende Selektion',
            'Disruptive Selektion',
            'Sexuelle Selektion',
            'Künstliche Selektion durch den Menschen',
          ],
          correctIndex: 2,
          explanation:
            'Disruptive (aufspaltende) Selektion bevorzugt beide Extremwerte und wirkt gegen den Mittelwert. Sie kann langfristig zu einer bimodalen Verteilung und zur Aufspaltung einer Population beitragen.',
        },
        {
          question: 'Was beschreibt die intersexuelle Selektion?',
          options: [
            'Rivalenkämpfe zwischen Männchen',
            'Partnerwahl, meist durch Weibchen',
            'Konkurrenz um Nahrungsressourcen',
            'Selektion durch Fressfeinde',
            'Selektion auf Farbmorphen in verschiedenen Habitaten',
          ],
          correctIndex: 1,
          explanation:
            'Intersexuelle Selektion beschreibt die Partnerwahl — meist wählen Weibchen Männchen mit bestimmten Merkmalen aus (z. B. prächtiges Gefieder beim Pfau). Dies erklärt die Entstehung von Schmuckmerkmalen.',
        },
        {
          question: 'Was ist ein Beispiel für transformierende (gerichtete) Selektion?',
          options: [
            'Konstantes Geburtsgewicht beim Menschen',
            'Industriemelanismus beim Birkenspanner',
            'Schnabelgrößen-Verteilung bei Webervögeln',
            'Pfauenschwanz als Schmuckmerkmal',
            'Zunahme der Laktosetoleranz in europäischen Populationen',
          ],
          correctIndex: 1,
          explanation:
            'Der Industriemelanismus beim Birkenspanner ist ein klassisches Beispiel für transformierende Selektion: In verrußten Gebieten wurden dunkle Formen selektiv bevorzugt, was den Mittelwert der Färbung in Richtung dunkler verschob.',
        },
      ],
    },

    // ──────────────────────────────────────────────
    // 6.8 Koevolution & Anpassung
    // ──────────────────────────────────────────────
    {
      id: 'bio-kap6-8',
      title: 'Koevolution & Anpassung',
      content:
        'Koevolution ist die wechselseitige evolutionäre Anpassung zweier oder mehrerer Arten. Die Evolution der einen Art beeinflusst die Selektion auf die andere. Ein evolutionäres Wettrüsten entsteht. Tritt auf zwischen Räuber-Beute, Parasit-Wirt, Pflanze-Bestäuber, Symbionten. Die **Red-Queen-Hypothese** (Leigh Van Valen): Arten müssen sich ständig weiterentwickeln, nur um gegenüber ihren koevolvierenden Partnern nicht zurückzufallen.\n\n' +
        '**Mimikry** und **Mimese** sind Anpassungen in Räuber-Beute-Beziehungen. **Batessche Mimikry**: Eine ungefährliche Art (Nachahmer) ahmt die Warntracht einer gefährlichen Art (Vorbild) nach. Beispiel: Schwebfliege ahmt Wespe nach. Fressfeinde meiden die Schwebfliege. **Müllersche Mimikry**: Mehrere ungenießbare/gefährliche Arten entwickeln ähnliche Warntrachten. Verstärkt den Lerneffekt bei Fressfeinden. Beispiel: Verschiedene giftige Schmetterlinge mit ähnlicher Warnfärbung. **Mimese** (Tarnung): Nachahmung von Umgebungsobjekten. Beispiel: Stabschrecken ähneln Zweigen, Blattschrecken ähneln Blättern.\n\n' +
        '**Symbiose** ist das enge Zusammenleben verschiedener Arten. **Mutualismus**: Beide Partner profitieren. Beispiele: Blütenpflanzen und Bestäuber. Mykorrhiza (Pilz liefert Pflanze Mineralstoffe, Pflanze liefert Pilz Zucker). Clownfisch und Seeanemone. Oft hohe Spezialisierung — bestimmte Orchideen nur von einer Bienenart bestäubt. **Kommensalismus**: Ein Partner profitiert, der andere hat weder Vor- noch Nachteil. Beispiel: Epiphyten auf Bäumen.\n\n' +
        '**Parasitismus**: Ein Partner (Parasit) lebt auf Kosten des anderen (Wirt). **Ektoparasiten** auf der Körperoberfläche (Flöhe, Zecken, Läuse). **Endoparasiten** im Körperinneren (Bandwürmer, *Plasmodium*). Parasitoide töten den Wirt (Schlupfwespen). Koevolution: Wirte entwickeln Abwehr, Parasiten umgehen Abwehr. Viele Parasiten manipulieren Wirtsverhalten. Beispiel: *Toxoplasma gondii* (Endwirt: Katze) infiziert Mäuse und verringert deren Fluchtverhalten gegenüber Katzen — erhöht Übertragung auf Endwirt.',
      merksätze: [
        'Batessche Mimikry: Harmlose Art ahmt gefährliche Art nach. Müllersche Mimikry: Mehrere gefährliche Arten ähneln sich gegenseitig. Mimese: Tarnung durch Nachahmung von Umgebungsobjekten.',
        'Koevolution = wechselseitige Anpassung. Red-Queen-Hypothese: Arten müssen sich ständig weiterentwickeln, um im koevolutionären Wettrüsten nicht ins Hintertreffen zu geraten.',
      ],
      altfrage: {
        question: 'Was ist der Unterschied zwischen Batesscher und Müllerscher Mimikry?',
        answer:
          'Bei der Batesschen Mimikry ahmt eine ungefährliche Art die Warnfärbung einer gefährlichen Art nach (Täuschung). Bei der Müllerschen Mimikry entwickeln mehrere tatsächlich gefährliche/ungenießbare Arten ähnliche Warntrachten (gegenseitige Verstärkung des Lernsignals).',
      },
      klinischerBezug:
        'Parasit-Wirt-Koevolution ist medizinisch zentral. Beispiel 1: **Malaria-Sichelzellanämie**. *Plasmodium falciparum* (Malaria-Erreger) und Mensch koevolvieren seit Jahrtausenden. In Malariagebieten entstand der **Heterozygotenvorteil** beim Sichelzell-Allel (HbS). Heterozygote (HbA/HbS) sind gegen schwere Malaria geschützt (Parasit kann sich in Sichelzellen schlechter vermehren), aber nicht krank. Homozygote (HbS/HbS) haben schwere Sichelzellanämie. Selektionsvorteil hält HbS-Allel in der Population. Beispiel 2: **Toxoplasmose**. *Toxoplasma gondii* infiziert ca. 30% der Weltbevölkerung. Wirtsmanipulation: Infizierte Mäuse meiden Katzen weniger. Beim Menschen: Assoziation mit Schizophrenie und Verhaltensänderungen (umstritten). Gefährlich in der Schwangerschaft — konnatale Toxoplasmose.',
      selfTest: [
        {
          question: 'Was ist ein Beispiel für Batessche Mimikry?',
          options: [
            'Mehrere giftige Schmetterlingsarten mit ähnlicher Warnfärbung',
            'Eine harmlose Schwebfliege mit wespenähnlicher Färbung',
            'Eine Stabschrecke, die einem Zweig ähnelt',
            'Ein Chamäleon, das seine Farbe ändert',
            'Ein Korallennatter-Muster bei einer nicht verwandten Schlangenart',
          ],
          correctIndex: 1,
          explanation:
            'Die Schwebfliege (harmlos) ahmt die Warnfärbung der Wespe (gefährlich) nach — ein klassisches Beispiel für Batessche Mimikry. Fressfeinde meiden die Schwebfliege, weil sie sie für eine Wespe halten.',
        },
        {
          question: 'Was beschreibt die Red-Queen-Hypothese?',
          options: [
            'Die Überlegenheit der stärksten Individuen',
            'Die Notwendigkeit ständiger Evolution im koevolutionären Wettrüsten',
            'Die Entstehung neuer Arten durch Isolation',
            'Die Vererbung erworbener Eigenschaften',
            'Die Zunahme der Biodiversität nach Massenaussterben',
          ],
          correctIndex: 1,
          explanation:
            'Die Red-Queen-Hypothese besagt, dass Arten sich ständig weiterentwickeln müssen, um gegenüber ihren koevolvierenden Partnern (Parasiten, Fressfeinden etc.) nicht ins Hintertreffen zu geraten.',
        },
        {
          question: 'Was ist der Unterschied zwischen Ekto- und Endoparasiten?',
          options: [
            'Ektoparasiten leben im Körperinneren, Endoparasiten auf der Oberfläche',
            'Ektoparasiten sind immer Bakterien, Endoparasiten immer Viren',
            'Ektoparasiten leben auf der Körperoberfläche, Endoparasiten im Körperinneren',
            'Es gibt keinen Unterschied, die Begriffe sind synonym',
            'Ektoparasiten befallen nur Wirbeltiere, Endoparasiten nur Wirbellose',
          ],
          correctIndex: 2,
          explanation:
            'Ektoparasiten leben auf der Körperoberfläche des Wirts (z. B. Flöhe, Zecken, Läuse), während Endoparasiten im Körperinneren leben (z. B. Bandwürmer, Plasmodium).',
        },
      ],
    },
  ],
};
