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
        'Die Evolutionsbiologie beschäftigt sich mit der Frage, wie sich Lebewesen im Laufe der Erdgeschichte verändert haben und welche Mechanismen diesen Veränderungen zugrunde liegen. Bereits im antiken Griechenland gab es Naturphilosophen, die über die Wandelbarkeit der Arten spekulierten, doch erst im 18. und 19. Jahrhundert wurden wissenschaftlich fundierte Theorien formuliert. Die Evolutionstheorie ist heute eines der am besten belegten Konzepte der Biologie und bildet das zentrale Rahmenwerk für das Verständnis der belebten Natur. In der Medizin ist das Verständnis von Evolution essenziell, etwa um die Entstehung von Antibiotikaresistenzen oder die Anpassungsfähigkeit von Pathogenen zu begreifen.\n\n' +
        'Jean-Baptiste de Lamarck (1744–1829) formulierte eine der ersten systematischen Evolutionstheorien. Seine Theorie basierte auf zwei Grundannahmen: dem Gebrauch und Nichtgebrauch von Organen sowie der Vererbung erworbener Eigenschaften. Lamarck postulierte, dass Organe, die häufig gebraucht werden, sich verstärken und weiterentwickeln, während nicht genutzte Organe verkümmern. Das berühmte Beispiel ist die Giraffe, deren Hals sich laut Lamarck durch ständiges Strecken nach Baumkronen verlängert habe. Diese erworbenen Merkmale sollten an die Nachkommen weitergegeben werden. Obwohl Lamarcks Theorie in ihrer ursprünglichen Form widerlegt wurde, erfährt sie durch die moderne Epigenetik eine teilweise Rehabilitation, da epigenetische Modifikationen tatsächlich über Generationen weitergegeben werden können.\n\n' +
        'Charles Darwin (1809–1882) veröffentlichte 1859 sein epochales Werk „On the Origin of Species" und begründete damit die Theorie der natürlichen Selektion. Darwins Theorie basiert auf folgenden Beobachtungen: (1) Individuen einer Population variieren in ihren Merkmalen (Variation). (2) Mehr Nachkommen werden erzeugt, als überleben können (Überproduktion). (3) Es herrscht ein Kampf ums Dasein (struggle for existence). (4) Individuen mit vorteilhaften Merkmalen haben eine höhere Überlebens- und Fortpflanzungswahrscheinlichkeit (survival of the fittest). (5) Diese vorteilhaften Merkmale werden an die Nachkommen vererbt. Darwin konnte den Mechanismus der Vererbung noch nicht erklären — dies gelang erst durch die Wiederentdeckung der Mendelschen Regeln und die moderne Genetik.\n\n' +
        'Die Synthetische Evolutionstheorie (auch Moderne Synthese, ab ca. 1930–1950) vereinigt Darwins Selektionstheorie mit der Mendelschen Genetik, der Populationsgenetik und der Mutationsforschung. Wichtige Beiträge leisteten Theodosius Dobzhansky, Ernst Mayr, Julian Huxley und George Gaylord Simpson. Die Synthetische Theorie erklärt Evolution als Veränderung der Allelfrequenzen in einer Population über die Zeit. Sie integriert Mutation und Rekombination als Quellen genetischer Variabilität, Selektion als richtungsgebenden Faktor, sowie Gendrift und Genfluss als weitere Evolutionsfaktoren. Die Population — nicht das Individuum — ist die Einheit der Evolution. Diese Theorie bildet bis heute das Fundament der modernen Evolutionsbiologie.',
      merksaetze: [
        'Lamarck: Vererbung erworbener Eigenschaften (widerlegt, aber epigenetische Ansätze). Darwin: Natürliche Selektion — „survival of the fittest". Synthetische Theorie: Evolution = Veränderung der Allelfrequenzen in Populationen.',
        'Merke: Darwin erklärt das Überleben der Angepassten, nicht das Überleben der Stärksten. Fitness bedeutet Fortpflanzungserfolg, nicht körperliche Stärke.',
      ],
      altfrage: {
        question: 'Welche Aussage trifft auf Darwins Evolutionstheorie zu?',
        answer:
          'Darwin postulierte, dass natürliche Selektion auf Basis vorhandener Variation in Populationen wirkt. Individuen mit vorteilhaften Merkmalen haben einen höheren Fortpflanzungserfolg. Im Gegensatz zu Lamarck ging Darwin nicht von der Vererbung erworbener Eigenschaften aus.',
      },
      klinischerBezug:
        'Antibiotikaresistenzen bei Bakterien sind ein klassisches Beispiel für natürliche Selektion: In einer Bakterienpopulation überleben zufällig resistente Mutanten die Antibiotikatherapie und vermehren sich. Dies führt zur Selektion resistenter Stämme — ein klinisch hochrelevantes Problem (z. B. MRSA).',
      selfTest: [
        {
          question: 'Welches Konzept stammt NICHT von Darwin?',
          options: [
            'Natürliche Selektion',
            'Vererbung erworbener Eigenschaften',
            'Variation innerhalb von Populationen',
            'Überproduktion von Nachkommen',
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
        'Evolution ist definiert als die Veränderung der Allelfrequenzen in einer Population über die Zeit. Diese Veränderungen werden durch verschiedene Evolutionsfaktoren angetrieben, die zusammenwirken und die genetische Zusammensetzung von Populationen beeinflussen. Das Hardy-Weinberg-Gleichgewicht beschreibt den theoretischen Idealzustand, in dem keine Evolution stattfindet: In einer unendlich großen, sich zufällig paarenden Population ohne Mutation, Selektion, Gendrift oder Migration bleiben die Allelfrequenzen konstant. Die Hardy-Weinberg-Gleichung lautet: p² + 2pq + q² = 1, wobei p und q die Frequenzen zweier Allele darstellen. Da die Voraussetzungen in der Natur nie vollständig erfüllt sind, findet immer Evolution statt.\n\n' +
        'Mutation und Rekombination sind die Quellen genetischer Variabilität und stellen das Rohmaterial für die Evolution bereit. Mutationen sind zufällige, ungerichtete Veränderungen der DNA-Sequenz. Sie können durch Replikationsfehler, mutagene Substanzen oder Strahlung entstehen. Genmutationen (Punktmutationen) betreffen einzelne Nukleotide, Chromosomenmutationen verändern die Chromosomenstruktur, und Genommutationen ändern die Chromosomenzahl. Die meisten Mutationen sind neutral oder schädlich, nur wenige sind vorteilhaft — doch genau diese werden durch Selektion begünstigt. Rekombination entsteht durch Crossing-over während der Meiose und durch die zufällige Verteilung der Chromosomen bei der Keimzellbildung. Sie schafft neue Allelkombinationen und erhöht die genetische Vielfalt.\n\n' +
        'Selektion ist der einzige gerichtete Evolutionsfaktor und wirkt als Filter auf die vorhandene genetische Variabilität. Sie begünstigt Individuen mit höherer Fitness und führt zur Anpassung (Adaptation) der Population an ihre Umwelt. Die verschiedenen Selektionsformen (stabilisierend, transformierend, disruptiv) werden in Unterkapitel 6.7 detailliert behandelt. Selektion kann auf verschiedenen Ebenen wirken: Individualselektion, Verwandtenselektion (kin selection) und Gruppenselektion. Sexuelle Selektion ist eine Sonderform, bei der Merkmale begünstigt werden, die den Paarungserfolg erhöhen, auch wenn sie das Überleben erschweren (z. B. Pfauenschwanz).\n\n' +
        'Gendrift (genetische Drift) beschreibt zufällige Veränderungen der Allelfrequenzen, die besonders in kleinen Populationen wirksam sind. Sie ist ein ungerichteter Evolutionsfaktor und kann zur Fixierung oder zum Verlust von Allelen führen. Zwei wichtige Sonderfälle sind der Flaschenhalseffekt (bottleneck effect), bei dem eine Population durch ein katastrophales Ereignis stark dezimiert wird und die Überlebenden nur einen Teil der genetischen Vielfalt repräsentieren, sowie der Gründereffekt (founder effect), bei dem eine kleine Gruppe eine neue Population gründet und nur einen Ausschnitt des Genpools der Ausgangspopulation mitbringt. Isolation (geographisch, ökologisch, zeitlich, reproduktiv) verhindert den Genfluss zwischen Populationen und ermöglicht deren unabhängige Evolution — ein wesentlicher Schritt bei der Artbildung.',
      merksaetze: [
        'Evolutionsfaktoren: Mutation (erzeugt Variation), Rekombination (neue Kombinationen), Selektion (gerichtet), Gendrift (zufällig, kleine Populationen), Genfluss/Migration, Isolation.',
        'Hardy-Weinberg-Gleichung: p² + 2pq + q² = 1. Voraussetzungen: keine Mutation, keine Selektion, keine Gendrift, zufällige Paarung, kein Genfluss. In der Natur nie erfüllt — daher findet immer Evolution statt.',
      ],
      altfrage: {
        question: 'Welcher Evolutionsfaktor wirkt besonders stark in kleinen Populationen?',
        answer:
          'Gendrift (genetische Drift) wirkt besonders stark in kleinen Populationen, da hier zufällige Schwankungen der Allelfrequenzen einen großen Effekt haben. Sonderfälle sind der Flaschenhalseffekt und der Gründereffekt.',
      },
      klinischerBezug:
        'Der Gründereffekt erklärt, warum bestimmte genetische Erkrankungen in isolierten Populationen gehäuft auftreten. Ein Beispiel ist die erhöhte Frequenz von Tay-Sachs bei Aschkenasim-Juden oder die gehäufte Sichelzellanämie in Malariagebieten (Selektionsvorteil der Heterozygoten).',
      selfTest: [
        {
          question: 'Was beschreibt der Flaschenhalseffekt?',
          options: [
            'Die Gründung einer neuen Population durch wenige Individuen',
            'Die starke Reduktion einer Population durch ein katastrophales Ereignis',
            'Die gerichtete Selektion auf ein bestimmtes Merkmal',
            'Die Zunahme der Mutationsrate unter Stress',
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
        'Die Artbildung (Speziation) ist der Prozess, durch den aus einer bestehenden Art eine oder mehrere neue Arten entstehen. Sie ist das Ergebnis des Zusammenwirkens von Evolutionsfaktoren und Isolationsmechanismen über lange Zeiträume. Die Frage, was eine „Art" überhaupt ist, wird durch verschiedene Artkonzepte beantwortet, die jeweils unterschiedliche Aspekte betonen und in verschiedenen Kontexten nützlich sind. Die Artbildung ist ein zentrales Thema der Evolutionsbiologie und wurde maßgeblich von Ernst Mayr (1904–2005) erforscht.\n\n' +
        'Das biologische Artkonzept (Ernst Mayr) definiert eine Art als eine Gruppe von Populationen, deren Mitglieder sich untereinander fortpflanzen können und fruchtbare Nachkommen erzeugen, die aber von anderen solchen Gruppen reproduktiv isoliert sind. Dieses Konzept ist das gebräuchlichste, hat aber Einschränkungen: Es ist nicht auf asexuelle Organismen, Fossilien oder Organismen anwendbar, bei denen Hybridisierung vorkommt. Das morphologische Artkonzept definiert Arten anhand gemeinsamer morphologischer Merkmale — es ist praktisch anwendbar, aber ungenau, da es phänotypische Plastizität und kryptische Arten nicht berücksichtigt. Weitere Artkonzepte sind das phylogenetische Artkonzept (kleinste monophyletische Gruppe) und das ökologische Artkonzept (gemeinsame ökologische Nische).\n\n' +
        'Die allopatrische Artbildung ist der häufigste Speziationsmechanismus. Sie erfolgt durch geographische Isolation: Eine Population wird durch eine physische Barriere (Gebirge, Ozean, Wüste, Eiszeit) in zwei oder mehr Teilpopulationen getrennt. In den isolierten Teilpopulationen wirken Mutation, Rekombination, Selektion und Gendrift unabhängig voneinander. Im Laufe der Zeit akkumulieren sich genetische Unterschiede, bis die Populationen reproduktiv isoliert sind und sich auch bei erneutem Kontakt nicht mehr erfolgreich kreuzen können. Klassische Beispiele sind die Darwin-Finken auf den Galápagos-Inseln und die Buntbarsche der ostafrikanischen Seen.\n\n' +
        'Die sympatrische Artbildung erfolgt ohne geographische Trennung — innerhalb desselben Verbreitungsgebiets. Sie ist seltener und schwieriger nachzuweisen als die allopatrische Artbildung. Mechanismen können ökologische Nischenaufteilung (z. B. verschiedene Nahrungsquellen oder Habitate), zeitliche Isolation (unterschiedliche Fortpflanzungszeiten) oder chromosomale Veränderungen wie Polyploidie sein. Polyploidie (Vervielfachung des Chromosomensatzes) ist besonders bei Pflanzen ein wichtiger Speziationsmechanismus: Allopolyploide Arten entstehen durch Hybridisierung zwischen verschiedenen Arten mit anschließender Genomverdopplung. Die parapatrische Artbildung ist ein Zwischenmodell, bei dem die Populationen in angrenzenden Gebieten leben und es eine schmale Kontaktzone gibt.',
      merksaetze: [
        'Allopatrisch = „anderes Vaterland" → geographische Trennung. Sympatrisch = „gleiches Vaterland" → im selben Gebiet, z. B. durch ökologische oder zeitliche Isolation.',
        'Biologisches Artkonzept (Mayr): Fortpflanzungsgemeinschaft mit fruchtbaren Nachkommen, reproduktiv isoliert von anderen Arten.',
      ],
      altfrage: {
        question: 'Was ist die häufigste Form der Artbildung?',
        answer:
          'Die allopatrische Artbildung durch geographische Isolation ist der häufigste Speziationsmechanismus. Eine Population wird durch eine physische Barriere getrennt, und die Teilpopulationen entwickeln sich unabhängig weiter, bis reproduktive Isolation eintritt.',
      },
      klinischerBezug:
        'Das Artkonzept ist auch in der Mikrobiologie relevant: Bei Bakterien gibt es keine sexuelle Fortpflanzung im klassischen Sinne, weshalb das biologische Artkonzept nicht anwendbar ist. Stattdessen werden Bakterienarten anhand von DNA-Sequenzvergleichen (z. B. 16S-rRNA) definiert. Horizontaler Gentransfer zwischen Bakterienarten kann zur Übertragung von Resistenzgenen führen.',
      selfTest: [
        {
          question: 'Welches Artkonzept definiert Arten über die Fähigkeit zur Fortpflanzung mit fruchtbaren Nachkommen?',
          options: [
            'Morphologisches Artkonzept',
            'Ökologisches Artkonzept',
            'Biologisches Artkonzept',
            'Phylogenetisches Artkonzept',
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
        'Die Evolutionstheorie wird durch eine Vielzahl von Belegen aus unterschiedlichen biologischen Disziplinen gestützt. Diese Evidenzen stammen aus der vergleichenden Anatomie und Morphologie, der Paläontologie, der Embryologie, der Biogeographie und der Molekularbiologie. Gemeinsam zeichnen sie ein konsistentes Bild der Abstammung aller Lebewesen von gemeinsamen Vorfahren und der Veränderung der Arten über geologische Zeiträume hinweg. Die Stärke der Evolutionstheorie liegt gerade darin, dass unabhängige Beweislinien aus verschiedenen Fachgebieten zu denselben Schlussfolgerungen führen.\n\n' +
        'Homologie und Analogie sind zentrale Konzepte der vergleichenden Anatomie. Homologe Organe haben den gleichen Grundbauplan und den gleichen embryonalen Ursprung, können aber unterschiedliche Funktionen erfüllen (z. B. Arm des Menschen, Flügel des Vogels, Flosse des Wals, Grabbein des Maulwurfs). Sie belegen gemeinsame Abstammung (Divergenz). Die Homologiekriterien nach Remane umfassen: (1) Kriterium der Lage (gleiche topographische Beziehung zu Nachbarstrukturen), (2) Kriterium der spezifischen Qualität (Übereinstimmung in Feinstruktur und Einzelmerkmalen), (3) Kriterium der Kontinuität (Verbindung durch Zwischenformen oder Fossilreihen). Analoge Organe hingegen haben ähnliche Funktionen, aber einen unterschiedlichen Grundbauplan und Ursprung (z. B. Vogelflügel und Insektenflügel). Sie entstehen durch konvergente Evolution — unabhängige Anpassung an ähnliche Umweltbedingungen.\n\n' +
        'Rudimentäre Organe (Rudimente) sind Strukturen, die ihre ursprüngliche Funktion im Laufe der Evolution verloren haben, aber als verkümmerter Rest noch vorhanden sind. Beispiele beim Menschen sind der Wurmfortsatz (Appendix vermiformis), die Steißbeinwirbel (Rest des Schwanzes), die Nickhaut (Plica semilunaris am Auge), die Weisheitszähne und die Ohrmuschelmuskeln. Rudimente belegen, dass Vorfahren diese Strukturen in funktioneller Form besaßen. Atavismen sind das gelegentliche Wiederauftreten von Merkmalen, die bei den Vorfahren vorhanden waren, bei der heutigen Art aber normalerweise nicht mehr auftreten — z. B. überzählige Brustwarzen (Polythelie), Schwanzbildung beim Menschen oder Hinterbeinanlagen bei Walen. Sie zeigen, dass die genetische Information für diese Merkmale noch im Genom vorhanden ist, aber normalerweise stillgelegt ist.\n\n' +
        'Fossilien sind versteinerte Überreste oder Abdrücke vergangener Lebewesen und liefern direkte Belege für die Existenz ausgestorbener Arten und deren Veränderung über die Zeit. Die Fossilienfolge in den Gesteinsschichten zeigt eine chronologische Abfolge von einfachen zu komplexen Lebensformen. Übergangsformen (Mosaikformen) wie Archaeopteryx (Merkmale von Reptilien und Vögeln) oder Tiktaalik (Übergang von Fischen zu Landwirbeltieren) belegen die graduelle Veränderung der Arten. Molekularbiologische Belege wie DNA-Sequenzvergleiche, Proteinsequenzvergleiche und die universelle Geltung des genetischen Codes belegen die gemeinsame Abstammung aller Lebewesen auf molekularer Ebene. Je näher verwandt zwei Arten sind, desto ähnlicher sind ihre DNA-Sequenzen.',
      merksaetze: [
        'Homologie = gleicher Bauplan, verschiedene Funktion (Beleg für gemeinsame Abstammung). Analogie = verschiedener Bauplan, gleiche Funktion (konvergente Evolution).',
        'Rudimente = funktionslose Überreste früherer Strukturen. Atavismen = Wiederauftreten von Vorfahrenmerkmalen. Beide belegen evolutionäre Abstammung.',
      ],
      altfrage: {
        question: 'Was ist ein Beispiel für ein homologes Organ?',
        answer:
          'Der Arm des Menschen und der Flügel eines Vogels sind homologe Organe: Sie haben den gleichen Grundbauplan (Knochenstruktur der Vorderextremität), aber unterschiedliche Funktionen (Greifen vs. Fliegen). Sie belegen die gemeinsame Abstammung von einem Vorfahren.',
      },
      klinischerBezug:
        'Der Wurmfortsatz (Appendix) ist ein Rudiment des einst größeren Blinddarms pflanzenfressender Vorfahren. Klinisch ist die Appendizitis (Entzündung des Wurmfortsatzes) eine der häufigsten Notfalldiagnosen. Neuere Forschung deutet darauf hin, dass der Appendix eine Funktion als Reservoir für die Darmflora haben könnte.',
      selfTest: [
        {
          question: 'Welches der folgenden ist ein Beispiel für ein Rudiment beim Menschen?',
          options: [
            'Das Herz',
            'Die Steißbeinwirbel',
            'Das Großhirn',
            'Die Lunge',
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
          ],
          correctIndex: 1,
          explanation:
            'Homologe Organe haben den gleichen Grundbauplan (gemeinsame Abstammung), aber oft unterschiedliche Funktionen. Analoge Organe haben verschiedenen Bauplan, aber ähnliche Funktionen (konvergente Evolution).',
        },
        {
          question: 'Was ist Archaeopteryx?',
          options: [
            'Ein lebendes Fossil',
            'Eine Übergangsform zwischen Reptilien und Vögeln',
            'Ein ausgestorbener Säugetier-Vorfahre',
            'Ein Rudiment bei modernen Vögeln',
          ],
          correctIndex: 1,
          explanation:
            'Archaeopteryx ist eine Übergangsform (Mosaikform) zwischen Reptilien und Vögeln. Er besaß sowohl Reptilienmerkmale (Zähne, Schwanzwirbel, Krallen an den Flügeln) als auch Vogelmerkmale (Federn, Gabelbein).',
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
        'Die Stammesgeschichte (Phylogenese) beschreibt die evolutionären Verwandtschaftsbeziehungen zwischen Organismen und deren Entwicklung über geologische Zeiträume. Die Rekonstruktion der Stammesgeschichte ist ein zentrales Anliegen der Evolutionsbiologie und beruht auf dem Vergleich morphologischer, anatomischer und molekularer Merkmale. Das Ergebnis wird in Form phylogenetischer Stammbäume (Phylogramme, Kladogramme) dargestellt, die die hypothetischen Verwandtschaftsbeziehungen zwischen Organismengruppen visualisieren. Die Systematik ordnet die Vielfalt der Lebewesen in ein hierarchisches Klassifikationssystem ein: Art, Gattung, Familie, Ordnung, Klasse, Stamm, Reich und Domäne.\n\n' +
        'Die Kladistik (phylogenetische Systematik, begründet von Willi Hennig, 1950) ist die heute vorherrschende Methode zur Rekonstruktion der Stammesgeschichte. Sie basiert auf dem Prinzip der gemeinsamen abgeleiteten Merkmale (Synapomorphien). Eine Synapomorphie ist ein Merkmal, das bei einer Gruppe von Arten vorkommt und bei deren nächsten Verwandten fehlt — es belegt, dass diese Arten eine exklusive Abstammungsgemeinschaft bilden (monophyletische Gruppe oder Klade). Ursprüngliche Merkmale (Plesiomorphien) sind dagegen für die Gruppenbildung nicht aussagekräftig, da sie bereits beim gemeinsamen Vorfahren vorhanden waren. Ein Kladogramm stellt die Verzweigungsfolge der Stammlinien dar: Jeder Verzweigungspunkt (Knoten) repräsentiert einen hypothetischen gemeinsamen Vorfahren. Schwestergruppen sind zwei Kladen, die den gleichen nächsten gemeinsamen Vorfahren teilen.\n\n' +
        'In der modernen Phylogenetik werden vor allem molekulare Daten (DNA-Sequenzen, Proteinsequenzen) für die Stammbaumrekonstruktion herangezogen. Methoden wie der Maximum-Likelihood-Ansatz, die Bayessche Phylogenetik und die Maximum-Parsimonie werden verwendet, um den wahrscheinlichsten Stammbaum aus den Sequenzdaten zu berechnen. Die Molekulare Uhr nutzt die Annahme, dass sich DNA-Sequenzen mit einer annähernd konstanten Rate verändern, um die Zeitpunkte evolutionärer Aufspaltungen zu datieren. Dies ermöglicht Abschätzungen, wann sich verschiedene Stammlinien voneinander getrennt haben — z. B. die Aufspaltung zwischen Mensch und Schimpanse vor ca. 6–7 Millionen Jahren. Die Ergebnisse molekularer Analysen stimmen weitgehend mit morphologischen und paläontologischen Daten überein, haben aber auch zu einigen überraschenden Umgruppierungen geführt.\n\n' +
        'Der Stammbaum des Lebens zeigt, dass alle heute lebenden Organismen von einem gemeinsamen Vorfahren abstammen (Last Universal Common Ancestor, LUCA). Die drei Domänen des Lebens — Bacteria, Archaea und Eukarya — gehen auf sehr frühe Aufspaltungen zurück. Die Endosymbiontentheorie (Lynn Margulis) erklärt die Entstehung von Mitochondrien und Chloroplasten durch die Aufnahme von Prokaryoten in eukaryotische Vorläuferzellen. Dies wird durch die eigene DNA, Doppelmembran und ribosomale Ähnlichkeit dieser Organellen mit Bakterien belegt.',
      merksaetze: [
        'Kladistik: Verwandtschaft wird durch gemeinsame abgeleitete Merkmale (Synapomorphien) bestimmt. Eine monophyletische Gruppe (Klade) umfasst einen gemeinsamen Vorfahren und ALLE seine Nachkommen.',
        'Molekulare Uhr: DNA-Veränderungsrate ≈ konstant → Datierung von Aufspaltungszeitpunkten. Mensch-Schimpanse-Trennung: ca. 6–7 Mio. Jahre.',
      ],
      altfrage: {
        question: 'Was ist eine Synapomorphie?',
        answer:
          'Eine Synapomorphie ist ein gemeinsames abgeleitetes Merkmal, das eine monophyletische Gruppe (Klade) definiert. Sie war beim gemeinsamen Vorfahren der Gruppe vorhanden, fehlt aber bei den nächsten Verwandten außerhalb der Gruppe.',
      },
      klinischerBezug:
        'Die phylogenetische Analyse ist in der Medizin wichtig für das Verständnis der Evolution von Pathogenen. Die Stammbaumanalyse von Viren (z. B. Influenza, SARS-CoV-2) ermöglicht die Nachverfolgung von Ausbreitungswegen, die Identifikation von Varianten und die Vorhersage zukünftiger Mutationen — essenziell für die Impfstoffentwicklung.',
      selfTest: [
        {
          question: 'Was ist eine monophyletische Gruppe (Klade)?',
          options: [
            'Eine Gruppe nicht verwandter Arten mit ähnlichen Merkmalen',
            'Ein gemeinsamer Vorfahre und alle seine Nachkommen',
            'Eine Gruppe von Arten mit gleicher ökologischer Nische',
            'Arten, die in derselben geographischen Region leben',
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
        'Die Evolution des Menschen ist eines der faszinierendsten Kapitel der Biologie. Der Mensch (Homo sapiens) gehört zur Ordnung der Primaten (Primates), zur Familie der Menschenaffen (Hominidae) und zur Gattung Homo. Die engsten lebenden Verwandten des Menschen sind die Schimpansen (Pan troglodytes und Pan paniscus), mit denen er ca. 98,7 % der DNA-Sequenz teilt. Die Stammlinien von Mensch und Schimpanse trennten sich vor etwa 6–7 Millionen Jahren in Afrika. Wichtig: Der Mensch stammt nicht vom Schimpansen ab, sondern beide haben einen gemeinsamen Vorfahren. Die Erforschung der menschlichen Evolution beruht auf Fossilfunden, vergleichender Anatomie, Molekularbiologie und archäologischen Befunden.\n\n' +
        'Die Hominiden-Stammesgeschichte umfasst zahlreiche Gattungen und Arten, die seit der Trennung von der Schimpansenlinie gelebt haben. Die frühesten bekannten Hominiden sind Sahelanthropus tchadensis (ca. 7 Mio. Jahre) und Ardipithecus ramidus (ca. 4,4 Mio. Jahre). Die Gattung Australopithecus (ca. 4–2 Mio. Jahre) umfasst wichtige Arten wie A. afarensis (berühmtes Fossil „Lucy", ca. 3,2 Mio. Jahre) und A. africanus. Australopithecinen waren bereits aufrecht gehende Zweibeiner (Bipedie), hatten aber noch ein relativ kleines Gehirn (ca. 400–500 cm³). Die Gattung Homo erschien vor ca. 2,5 Mio. Jahren mit Homo habilis (Gehirnvolumen ca. 600–750 cm³), gefolgt von Homo erectus (ca. 1,9 Mio. – 100.000 Jahre, Gehirnvolumen ca. 900–1100 cm³), der als erste Hominide Afrika verließ und Feuer nutzte. Homo heidelbergensis gilt als möglicher Vorfahre sowohl von Homo neanderthalensis als auch von Homo sapiens.\n\n' +
        'Homo sapiens entstand vor ca. 300.000 Jahren in Afrika (Out-of-Africa-Modell). Die anatomisch modernen Menschen breiteten sich vor ca. 70.000–100.000 Jahren aus Afrika über die gesamte Erde aus und ersetzten dabei weitgehend andere Homo-Arten. DNA-Analysen zeigen jedoch, dass es zu begrenzter Hybridisierung mit Neandertalern und Denisova-Menschen kam — heutige Europäer tragen ca. 1–4 % Neandertaler-DNA. Die Schlüsselmerkmale der menschlichen Evolution umfassen den aufrechten Gang (Bipedie), die Vergrößerung des Gehirns (Enzephalisation), die Entwicklung der Sprache, die Werkzeugherstellung und -nutzung, sowie die Entwicklung komplexer sozialer Strukturen und Kultur.\n\n' +
        'Der aufrechte Gang (Bipedie) war eine der frühesten und wichtigsten Anpassungen in der menschlichen Evolution und ging der Gehirnvergrößerung voraus. Anatomische Anpassungen an die Bipedie umfassen: das verbreiterte Becken (Ilium), die S-förmige Wirbelsäule mit Lendenlordose, das nach vorne verlagerte Foramen magnum (Hinterhauptsloch), die verlängerten Beine im Verhältnis zu den Armen, die nicht-opponierbare Großzehe und das Fußgewölbe. Die Enzephalisation — die überproportionale Vergrößerung des Gehirns im Verhältnis zur Körpergröße — ist ein weiteres Schlüsselmerkmal: Das Gehirnvolumen stieg von ca. 400 cm³ bei Australopithecinen auf ca. 1400 cm³ bei Homo sapiens. Diese Vergrößerung ging mit der Entwicklung von Sprache, abstraktem Denken und komplexer Kultur einher.',
      merksaetze: [
        'Wichtige Hominiden-Reihe: Australopithecus (Lucy, 3,2 Mio. J.) → Homo habilis (2,5 Mio. J.) → Homo erectus (1,9 Mio. J., erstes Verlassen Afrikas) → Homo sapiens (ca. 300.000 J.).',
        'Aufrechter Gang ging der Gehirnvergrößerung VORAUS. Anpassungen: S-förmige Wirbelsäule, verbreitertes Becken, Foramen magnum nach vorne verlagert, Fußgewölbe.',
      ],
      altfrage: {
        question: 'Von welchem Vorfahren stammt der Mensch ab?',
        answer:
          'Der Mensch stammt NICHT vom Schimpansen ab. Mensch und Schimpanse haben einen gemeinsamen Vorfahren, von dem sich beide Linien vor ca. 6–7 Mio. Jahren in Afrika getrennt haben. Sie teilen ca. 98,7 % ihrer DNA.',
      },
      klinischerBezug:
        'Die Bipedie (aufrechter Gang) hat klinische Konsequenzen: Die Belastung der Wirbelsäule führt zu häufigen Rückenschmerzen und Bandscheibenvorfällen. Das verbreiterte Becken und der große Kopf des Neugeborenen machen den Geburtsvorgang beim Menschen im Vergleich zu anderen Primaten schwieriger (geburtshilfliches Dilemma). Neandertaler-DNA im modernen Menschen beeinflusst das Immunsystem und die Anfälligkeit für bestimmte Erkrankungen.',
      selfTest: [
        {
          question: 'Wie alt ist das Fossil „Lucy" und zu welcher Gattung gehört es?',
          options: [
            'Ca. 1 Mio. Jahre alt, Homo erectus',
            'Ca. 3,2 Mio. Jahre alt, Australopithecus afarensis',
            'Ca. 300.000 Jahre alt, Homo sapiens',
            'Ca. 7 Mio. Jahre alt, Sahelanthropus tchadensis',
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
        'Die natürliche Selektion ist der zentrale gerichtete Evolutionsfaktor und wurde von Charles Darwin als Hauptmechanismus der Evolution beschrieben. Selektion wirkt auf die phänotypische Variation innerhalb einer Population: Individuen mit vorteilhaften Merkmalen haben einen höheren Fortpflanzungserfolg (Fitness) und geben ihre Gene häufiger an die nächste Generation weiter. Selektion erzeugt keine neue Variation — sie wirkt als Filter auf die durch Mutation und Rekombination erzeugte Variabilität. Die Wirkungsrichtung der Selektion hängt von den Umweltbedingungen ab und kann sich ändern, wenn sich die Umwelt verändert. Man unterscheidet drei Hauptformen der natürlichen Selektion, die jeweils unterschiedliche Auswirkungen auf die Merkmalsverteilung in einer Population haben.\n\n' +
        'Die stabilisierende Selektion bevorzugt den Mittelwert eines Merkmals und wirkt gegen Extremformen. Sie tritt in stabilen Umweltbedingungen auf und führt zu einer Verringerung der Varianz bei gleichbleibendem Mittelwert. Ein klassisches Beispiel ist das Geburtsgewicht beim Menschen: Neugeborene mit einem mittleren Geburtsgewicht (ca. 3000–4000 g) haben die höchste Überlebensrate, während sowohl sehr leichte als auch sehr schwere Neugeborene ein erhöhtes Mortalitätsrisiko aufweisen. Die transformierende (gerichtete) Selektion verschiebt den Mittelwert eines Merkmals in eine Richtung. Sie tritt auf, wenn sich die Umweltbedingungen ändern und ein Extremwert vorteilhaft wird. Beispiele sind die zunehmende Körpergröße in der Evolution der Pferde oder der Industriemelanismus beim Birkenspanner (Biston betularia): In verrußten Industriegebieten wurden dunkle Formen bevorzugt, da sie auf dunkler Rinde besser getarnt waren.\n\n' +
        'Die disruptive (aufspaltende) Selektion bevorzugt beide Extremwerte eines Merkmals und wirkt gegen den Mittelwert. Sie führt zu einer bimodalen Merkmalsverteilung und kann langfristig zur Aufspaltung einer Population in zwei Gruppen beitragen — ein möglicher Mechanismus der sympatrischen Artbildung. Ein Beispiel ist die Schnabelgröße bei afrikanischen Webervögeln: Vögel mit sehr großen oder sehr kleinen Schnäbeln sind erfolgreicher bei der Nahrungsaufnahme als solche mit mittleren Schnäbeln, die weder harte noch weiche Samen effizient knacken können.\n\n' +
        'Die sexuelle Selektion ist eine Sonderform der natürlichen Selektion, die auf den Fortpflanzungserfolg wirkt. Sie wurde ebenfalls von Darwin beschrieben und erklärt die Entstehung von Merkmalen, die zwar den Fortpflanzungserfolg erhöhen, aber das Überleben erschweren können. Man unterscheidet intrasexuelle Selektion (Konkurrenz innerhalb eines Geschlechts, meist zwischen Männchen, z. B. Rivalenkämpfe beim Hirsch) und intersexuelle Selektion (Partnerwahl, meist durch Weibchen, z. B. die Bevorzugung von Männchen mit prächtigen Merkmalen wie dem Pfauenschwanz). Das Handicap-Prinzip (Amotz Zahavi) besagt, dass nur gesunde, leistungsfähige Männchen es sich leisten können, solche aufwendigen Merkmale zu tragen — das Merkmal ist daher ein ehrliches Signal für genetische Qualität.',
      merksaetze: [
        'Drei Selektionsformen: Stabilisierend (Mittelwert bevorzugt, Varianz sinkt), Transformierend (Mittelwert verschiebt sich), Disruptiv (Extreme bevorzugt, Mittelwert benachteiligt).',
        'Sexuelle Selektion: Intrasexuell = Konkurrenz (Kampf), Intersexuell = Partnerwahl (z. B. Pfauenschwanz). Handicap-Prinzip: Aufwendige Merkmale als ehrliche Signale für Fitness.',
      ],
      altfrage: {
        question: 'Welche Selektionsform tritt beim Geburtsgewicht des Menschen auf?',
        answer:
          'Beim Geburtsgewicht des Menschen wirkt stabilisierende Selektion: Neugeborene mit mittlerem Geburtsgewicht (ca. 3000–4000 g) haben die höchste Überlebensrate. Sowohl zu leichte als auch zu schwere Neugeborene haben ein erhöhtes Mortalitätsrisiko.',
      },
      klinischerBezug:
        'Der Industriemelanismus beim Birkenspanner ist ein Lehrbuchbeispiel für gerichtete Selektion. Klinisch relevant ist die gerichtete Selektion bei Krankheitserregern: Antibiotika üben einen starken Selektionsdruck aus, der resistente Varianten begünstigt. Ähnlich selektieren antivirale Medikamente auf resistente Virusmutanten (z. B. bei HIV-Therapie).',
      selfTest: [
        {
          question: 'Welche Selektionsform kann zur Aufspaltung einer Population führen?',
          options: [
            'Stabilisierende Selektion',
            'Transformierende Selektion',
            'Disruptive Selektion',
            'Sexuelle Selektion',
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
        'Koevolution bezeichnet die wechselseitige evolutionäre Anpassung zweier oder mehrerer Arten aneinander, die in einer engen ökologischen Beziehung stehen. Die Evolution der einen Art beeinflusst die Selektion auf die andere Art und umgekehrt — es entsteht ein „evolutionäres Wettrüsten". Koevolution kann zwischen Räuber und Beute, Parasit und Wirt, Pflanze und Bestäuber, oder zwischen Symbionten auftreten. Das Konzept der Koevolution wurde maßgeblich durch die Arbeiten von Paul Ehrlich und Peter Raven (1964) geprägt, die die Wechselbeziehungen zwischen Schmetterlingen und ihren Futterpflanzen untersuchten. Die Red-Queen-Hypothese (Leigh Van Valen) beschreibt das koevolutionäre Prinzip: Arten müssen sich ständig weiterentwickeln, nur um gegenüber ihren koevolvierenden Partnern nicht ins Hintertreffen zu geraten — wie die Rote Königin in „Alice hinter den Spiegeln", die rennen muss, um am selben Ort zu bleiben.\n\n' +
        'Mimikry und Mimese sind faszinierende Beispiele für evolutionäre Anpassungen, die im Kontext von Räuber-Beute-Beziehungen entstanden sind. Mimikry bezeichnet die Nachahmung von Warnsignalen anderer Arten. Bei der Batesschen Mimikry ahmt eine ungefährliche Art (Nachahmer) die Warntracht einer gefährlichen oder ungenießbaren Art (Vorbild) nach, um von Fressfeinden gemieden zu werden — z. B. ahmt die harmlose Schwebfliege die Warnfärbung der Wespe nach. Bei der Müllerschen Mimikry entwickeln mehrere ungenießbare oder gefährliche Arten ähnliche Warntrachten, was den Lerneffekt bei Fressfeinden verstärkt — z. B. verschiedene giftige Schmetterlingsarten mit ähnlicher Warnfärbung. Mimese (Tarnung, Krypsis) bezeichnet die Nachahmung von Objekten der Umgebung, um von Fressfeinden nicht erkannt zu werden — z. B. Stabschrecken, die Zweigen ähneln, oder Blattschrecken, die Blätter imitieren.\n\n' +
        'Symbiose beschreibt das enge Zusammenleben verschiedener Arten und umfasst verschiedene Beziehungstypen. Die Mutualismus-Symbiose (Mutualismus) ist eine wechselseitig vorteilhafte Beziehung: Beide Partner profitieren. Beispiele sind die Beziehung zwischen Blütenpflanzen und ihren Bestäubern, zwischen Mykorrhizapilzen und Pflanzenwurzeln, oder die Beziehung zwischen Clownfischen und Seeanemonen. Koevolution hat in vielen Fällen zu einer hohen Spezialisierung geführt — bestimmte Orchideen können nur von einer einzigen Bienenart bestäubt werden. Der Kommensalismus ist eine Beziehung, bei der ein Partner profitiert und der andere weder Vor- noch Nachteil hat (z. B. Epiphyten auf Bäumen).\n\n' +
        'Parasitismus ist eine Beziehung, bei der ein Partner (der Parasit) auf Kosten des anderen (des Wirts) lebt. Man unterscheidet Ektoparasiten (auf der Körperoberfläche, z. B. Flöhe, Zecken, Läuse) und Endoparasiten (im Körperinneren, z. B. Bandwürmer, Malaria-Erreger Plasmodium). Parasitoide (z. B. Schlupfwespen) töten ihren Wirt im Laufe der Entwicklung. Die Koevolution zwischen Parasit und Wirt führt zu einem ständigen Wettrüsten: Wirte entwickeln Abwehrmechanismen, Parasiten entwickeln Strategien zur Umgehung der Wirtsabwehr. Viele Parasiten haben komplexe Lebenszyklen mit Wirtswechseln und manipulieren sogar das Verhalten ihrer Wirte (z. B. Toxoplasma gondii beeinflusst das Verhalten von Mäusen, sodass diese Katzen — den Endwirt — weniger meiden). Aposematismus (Warnfärbung) und Tarnfärbung (Krypsis) sind wichtige Überlebensstrategien, die durch natürliche Selektion in Räuber-Beute-Beziehungen evolviert sind.',
      merksaetze: [
        'Batessche Mimikry: Harmlose Art ahmt gefährliche Art nach. Müllersche Mimikry: Mehrere gefährliche Arten ähneln sich gegenseitig. Mimese: Tarnung durch Nachahmung von Umgebungsobjekten.',
        'Koevolution = wechselseitige Anpassung. Red-Queen-Hypothese: Arten müssen sich ständig weiterentwickeln, um im koevolutionären Wettrüsten nicht ins Hintertreffen zu geraten.',
      ],
      altfrage: {
        question: 'Was ist der Unterschied zwischen Batesscher und Müllerscher Mimikry?',
        answer:
          'Bei der Batesschen Mimikry ahmt eine ungefährliche Art die Warnfärbung einer gefährlichen Art nach (Täuschung). Bei der Müllerschen Mimikry entwickeln mehrere tatsächlich gefährliche/ungenießbare Arten ähnliche Warntrachten (gegenseitige Verstärkung des Lernsignals).',
      },
      klinischerBezug:
        'Parasit-Wirt-Koevolution ist medizinisch hochrelevant: Malaria-Erreger (Plasmodium) und der Mensch koevolvieren seit Jahrtausenden. Die Sichelzellanämie (Heterozygotenvorteil) ist eine evolutionäre Antwort auf den Selektionsdruck durch Malaria. Toxoplasma gondii infiziert ca. 30 % der Weltbevölkerung und kann das Verhalten des Wirts beeinflussen — ein Beispiel für Wirtsmanipulation durch Parasiten.',
      selfTest: [
        {
          question: 'Was ist ein Beispiel für Batessche Mimikry?',
          options: [
            'Mehrere giftige Schmetterlingsarten mit ähnlicher Warnfärbung',
            'Eine harmlose Schwebfliege mit wespenähnlicher Färbung',
            'Eine Stabschrecke, die einem Zweig ähnelt',
            'Ein Chamäleon, das seine Farbe ändert',
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
          ],
          correctIndex: 2,
          explanation:
            'Ektoparasiten leben auf der Körperoberfläche des Wirts (z. B. Flöhe, Zecken, Läuse), während Endoparasiten im Körperinneren leben (z. B. Bandwürmer, Plasmodium).',
        },
      ],
    },
  ],
};
