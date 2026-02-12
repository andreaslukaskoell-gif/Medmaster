import type { Kapitel } from '../types';

export const bioKap1: Kapitel = {
  id: 'bio-kap1',
  title: 'Die Zelle',
  subject: 'biologie',
  icon: '🔬',
  estimatedTime: '60 Minuten',
  unterkapitel: [
    // ==================== 1.1 ====================
    {
      id: 'bio-kap1-uk1',
      title: 'Prokaryoten vs. Eukaryoten',
      content: `Alle lebenden Organismen lassen sich in zwei fundamentale Zelltypen einteilen: Prokaryoten und Eukaryoten. Der entscheidende Unterschied liegt im Vorhandensein eines membranumhüllten Zellkerns. Prokaryoten (griechisch: „vor dem Kern") besitzen keinen echten Zellkern; ihre DNA liegt frei im Cytoplasma in einem Bereich, der als Nukleoid bezeichnet wird. Typische Vertreter sind Bakterien und Archaeen. Prokaryotische Zellen sind mit 0,1–10 µm deutlich kleiner als eukaryotische Zellen, die einen Durchmesser von 10–100 µm aufweisen. Die geringere Größe der Prokaryoten ermöglicht ein günstigeres Oberfläche-zu-Volumen-Verhältnis, was einen effizienteren Stoffaustausch erlaubt.

Ein weiterer zentraler Unterschied betrifft die Ribosomen und die Genomorganisation. Prokaryoten besitzen 70S-Ribosomen (bestehend aus einer 30S- und einer 50S-Untereinheit), während Eukaryoten größere 80S-Ribosomen (40S + 60S) im Cytoplasma aufweisen. Die prokaryotische DNA ist typischerweise ein einzelnes, zirkuläres Chromosom ohne Histone, häufig ergänzt durch kleine zirkuläre DNA-Moleküle, sogenannte Plasmide, die zusätzliche Gene tragen können (z. B. Antibiotikaresistenzen). Eukaryotische DNA hingegen ist linear organisiert, um Histonproteine gewickelt und in mehrere Chromosomen aufgeteilt, die im Zellkern lokalisiert sind. Diese Verpackung ermöglicht die Regulation der Genexpression durch epigenetische Modifikationen.

Prokaryoten fehlen membranumschlossene Organellen wie Mitochondrien, endoplasmatisches Retikulum oder Golgi-Apparat. Dennoch sind sie metabolisch äußerst vielseitig: Manche Prokaryoten können Photosynthese betreiben (Cyanobakterien), Stickstoff fixieren oder unter extremen Bedingungen leben (Archaeen in heißen Quellen oder Salzseen). Die Zellteilung erfolgt bei Prokaryoten durch binäre Fission (Zweiteilung) – ein deutlich schnellerer Prozess als die mitotische Teilung eukaryotischer Zellen. Die Generationszeit von Escherichia coli beträgt unter optimalen Bedingungen nur etwa 20 Minuten. Eukaryotische Zellen hingegen verfügen über ein komplexes Zytoskelett, das aus Mikrofilamenten, Intermediärfilamenten und Mikrotubuli besteht und für Zellform, Bewegung und intrazelluläre Transportprozesse verantwortlich ist.`,
      diagram: 'prokaryote-vs-eukaryote',
      merksaetze: [
        '70S = Prokaryoten (siebzig → „sie sind primitiver"), 80S = Eukaryoten (achtzig → „acht Buchstaben in Eukaryot")',
        'Prokaryoten: kein Kern, keine membranumhüllten Organellen, zirkuläre DNA, Plasmide, binäre Fission'
      ],
      altfrage: {
        question: 'Welche Ribosomen kommen bei Prokaryoten vor?',
        answer: '70S-Ribosomen (30S + 50S Untereinheiten). Die 80S-Ribosomen (40S + 60S) sind charakteristisch für das Cytoplasma von Eukaryoten. Mitochondrien und Chloroplasten besitzen ebenfalls 70S-Ribosomen – ein Beleg für die Endosymbiontentheorie.'
      },
      klinischerBezug: 'Viele Antibiotika wirken spezifisch auf prokaryotische 70S-Ribosomen (z. B. Tetracycline, Aminoglykoside, Chloramphenicol). Da menschliche Zellen 80S-Ribosomen besitzen, werden sie nicht direkt geschädigt. Allerdings enthalten Mitochondrien ebenfalls 70S-Ribosomen, weshalb bestimmte Antibiotika (z. B. Aminoglykoside) bei Langzeitanwendung mitochondriale Toxizität verursachen können.',
      selfTest: [
        {
          question: 'Welches Merkmal ist typisch für Prokaryoten?',
          options: [
            'Lineare DNA mit Histonen',
            'Zirkuläre DNA ohne Histone im Nukleoid',
            '80S-Ribosomen im Cytoplasma',
            'Membranumhüllter Zellkern'
          ],
          correctIndex: 1,
          explanation: 'Prokaryoten besitzen zirkuläre DNA ohne Histone, die im Nukleoid (kein echter Kern) liegt. Lineare DNA mit Histonen und ein membranumhüllter Zellkern sind Merkmale von Eukaryoten.'
        },
        {
          question: 'Welche Aussage zum Größenvergleich ist korrekt?',
          options: [
            'Prokaryoten sind 10–100 µm, Eukaryoten 0,1–10 µm',
            'Beide Zelltypen sind gleich groß (ca. 50 µm)',
            'Prokaryoten sind 0,1–10 µm, Eukaryoten 10–100 µm',
            'Prokaryoten sind stets größer als Eukaryoten'
          ],
          correctIndex: 2,
          explanation: 'Prokaryotische Zellen sind mit 0,1–10 µm deutlich kleiner als eukaryotische Zellen (10–100 µm). Das günstigere Oberfläche-zu-Volumen-Verhältnis ermöglicht effizienteren Stoffaustausch.'
        },
        {
          question: 'Wie teilen sich Prokaryoten?',
          options: [
            'Durch Mitose mit Spindelapparat',
            'Durch Meiose mit Crossing-over',
            'Durch binäre Fission (Zweiteilung)',
            'Durch Knospung mit asymmetrischer Teilung'
          ],
          correctIndex: 2,
          explanation: 'Prokaryoten teilen sich durch binäre Fission – einen schnellen Prozess ohne Mitosespindel. Die DNA wird repliziert, die Zelle verlängert sich und schnürt sich in der Mitte durch.'
        }
      ]
    },
    // ==================== 1.2 ====================
    {
      id: 'bio-kap1-uk2',
      title: 'Aufbau der Tierzelle',
      content: `Die Tierzelle ist eine eukaryotische Zelle mit einer typischen Größe von 10–30 µm, die von einer Zellmembran (Plasmamembran) umgeben ist, jedoch im Gegensatz zur Pflanzenzelle keine Zellwand besitzt. Im Zentrum befindet sich der Zellkern (Nukleus), der von einer Doppelmembran (Kernhülle) mit Kernporen umgeben ist. Im Inneren enthält er das Chromatin (DNA + Histone) und den Nukleolus, der für die Synthese ribosomaler RNA (rRNA) zuständig ist. Der Zellkern ist die Steuerzentrale der Zelle: Hier finden DNA-Replikation, Transkription und RNA-Prozessierung statt. Die Kernporen regulieren den Austausch von Makromolekülen zwischen Kern und Cytoplasma und ermöglichen den Export von mRNA und den Import von Proteinen.

Im Cytoplasma der Tierzelle befinden sich zahlreiche membranumhüllte Organellen. Die Mitochondrien – die „Kraftwerke der Zelle" – produzieren ATP durch oxidative Phosphorylierung und besitzen eine eigene DNA sowie 70S-Ribosomen. Das endoplasmatische Retikulum (ER) existiert in zwei Formen: Das raue ER (mit Ribosomen besetzt) synthetisiert Membranproteine und sekretorische Proteine, während das glatte ER Lipide synthetisiert, Calciumionen speichert und an der Entgiftung beteiligt ist. Der Golgi-Apparat, bestehend aus gestapelten Zisternen, modifiziert, sortiert und verpackt Proteine für den Transport. Lysosomen enthalten hydrolytische Enzyme zur intrazellulären Verdauung bei saurem pH (ca. 4,5–5,0). Peroxisomen bauen Fettsäuren und toxische Substanzen wie Wasserstoffperoxid ab.

Weitere wichtige Strukturen der Tierzelle umfassen das Zytoskelett und spezifische Organellen. Das Zytoskelett besteht aus Mikrofilamenten (Aktin, 7 nm), Intermediärfilamenten (10 nm) und Mikrotubuli (Tubulin, 25 nm) und ist für Zellform, mechanische Stabilität und intrazelluläre Transportprozesse verantwortlich. Das Zentrosom mit seinen zwei Zentriolen dient als Mikrotubuli-Organisationszentrum (MTOC) und spielt eine zentrale Rolle bei der Zellteilung, indem es den Spindelapparat organisiert. Freie Ribosomen im Cytoplasma synthetisieren Proteine für den intrazellulären Gebrauch. Tierzellen besitzen zudem häufig Zilien und Flagellen für Bewegung sowie verschiedene Zell-Zell-Verbindungen wie Desmosomen (mechanische Verbindung), Tight Junctions (Abdichtung) und Gap Junctions (Kommunikation).`,
      diagram: 'animal-cell',
      merksaetze: [
        'Eselsbrücke für Organellen: „Kern Regiert, ER Produziert, Golgi Verpackt, Lysosomen Verdauen, Mitochondrien Liefern Energie"',
        'Tierzelle hat KEIN: Zellwand, Chloroplasten, große Zentralvakuole – dafür hat sie Zentriolen und Lysosomen'
      ],
      altfrage: {
        question: 'Welche Organelle ist für die posttranslationale Modifikation und Sortierung von Proteinen zuständig?',
        answer: 'Der Golgi-Apparat. Er erhält Proteine vom ER in Transportvesikeln, modifiziert sie (z. B. Glykosylierung), sortiert sie und verpackt sie in Vesikel für den Transport zur Zellmembran, zu Lysosomen oder zur Sekretion.'
      },
      klinischerBezug: 'Lysosomale Speicherkrankheiten (z. B. Morbus Gaucher, Morbus Tay-Sachs) entstehen durch genetisch bedingte Enzymdefekte in Lysosomen. Substrate können nicht abgebaut werden und akkumulieren in der Zelle, was zu schweren Organschäden führt. Bei Morbus Tay-Sachs fehlt die Hexosaminidase A, wodurch sich GM2-Ganglioside in Nervenzellen anreichern und zu progressiver Neurodegeneration führen.',
      selfTest: [
        {
          question: 'Wo findet die Synthese ribosomaler RNA statt?',
          options: [
            'Im glatten endoplasmatischen Retikulum',
            'Im Nukleolus innerhalb des Zellkerns',
            'An den freien Ribosomen im Cytoplasma',
            'Im Golgi-Apparat'
          ],
          correctIndex: 1,
          explanation: 'Der Nukleolus ist eine Struktur innerhalb des Zellkerns, die auf die Synthese und Assemblierung von ribosomaler RNA (rRNA) spezialisiert ist. Die rRNA wird dort transkribiert und mit ribosomalen Proteinen zu ribosomalen Untereinheiten zusammengebaut.'
        },
        {
          question: 'Welche Struktur organisiert den Spindelapparat während der Zellteilung?',
          options: [
            'Der Golgi-Apparat',
            'Das raue ER',
            'Das Zentrosom mit den Zentriolen',
            'Die Lysosomen'
          ],
          correctIndex: 2,
          explanation: 'Das Zentrosom, das zwei Zentriolen enthält, ist das Mikrotubuli-Organisationszentrum (MTOC). Während der Mitose wandern die duplizierten Zentrosomen zu den Zellpolen und organisieren den Spindelapparat aus Mikrotubuli.'
        },
        {
          question: 'Welche Funktion hat das glatte ER?',
          options: [
            'Proteinbiosynthese für die Sekretion',
            'Lipidsynthese, Entgiftung und Calciumspeicherung',
            'Modifikation und Sortierung von Proteinen',
            'Intrazelluläre Verdauung bei saurem pH'
          ],
          correctIndex: 1,
          explanation: 'Das glatte ER (ohne Ribosomen) ist für die Lipidsynthese, die Entgiftung (besonders in Leberzellen) und die Calciumspeicherung (besonders im sarkoplasmatischen Retikulum der Muskelzellen) verantwortlich.'
        }
      ]
    },
    // ==================== 1.3 ====================
    {
      id: 'bio-kap1-uk3',
      title: 'Pflanzenzelle vs. Tierzelle',
      content: `Pflanzenzellen und Tierzellen sind beide eukaryotisch, unterscheiden sich jedoch in mehreren fundamentalen Merkmalen. Die auffälligsten Unterschiede betreffen die Zellwand, die Chloroplasten und die zentrale Vakuole – drei Strukturen, die ausschließlich in Pflanzenzellen vorkommen. Die Zellwand der Pflanzenzelle besteht hauptsächlich aus Cellulose (einem β-1,4-verknüpften Glucose-Polymer) und verleiht der Zelle mechanische Stabilität und Formfestigkeit. Sie liegt außerhalb der Zellmembran und ist semipermeabel. Die Primärwand ist dünn und flexibel, während die Sekundärwand (z. B. in verholzten Zellen) durch Einlagerung von Lignin zusätzliche Festigkeit erhält. Über Plasmodesmen – kanalförmige Verbindungen durch die Zellwand – können benachbarte Pflanzenzellen kommunizieren und Substanzen austauschen.

Chloroplasten sind die Organellen der Photosynthese und kommen ausschließlich in grünen Pflanzenteilen vor. Sie besitzen eine Doppelmembran und ein internes Membransystem aus Thylakoiden, die in Grana gestapelt sind. In den Thylakoidmembranen findet die Lichtreaktion statt, bei der Lichtenergie in chemische Energie (ATP und NADPH) umgewandelt wird. Im Stroma – dem Innenraum des Chloroplasten – läuft der Calvin-Zyklus (Dunkelreaktion) ab, in dem CO₂ zu Glucose fixiert wird. Chloroplasten besitzen eigene zirkuläre DNA und 70S-Ribosomen, was als Beleg für die Endosymbiontentheorie gilt. Die große Zentralvakuole nimmt in reifen Pflanzenzellen bis zu 90 % des Zellvolumens ein, speichert Wasser, Ionen und Stoffwechselprodukte und erzeugt durch osmotischen Druck den Turgor, der die Pflanze aufrecht hält.

Tierzellen besitzen im Gegensatz zu Pflanzenzellen Zentriolen im Zentrosom, die für die Organisation des Spindelapparats während der Mitose wichtig sind. Pflanzenzellen bilden den Spindelapparat ohne Zentriolen mithilfe anderer Mikrotubuli-Organisationszentren. Lysosomen als Verdauungsorganellen sind vorwiegend in Tierzellen zu finden, während Pflanzenzellen ähnliche Funktionen über die lytische Vakuole erfüllen. Bei der Cytokinese unterscheiden sich beide Zelltypen ebenfalls: Tierzellen schnüren sich durch einen kontraktilen Ring aus Aktinfilamenten ein (Furchung), Pflanzenzellen bilden von innen nach außen eine Zellplatte (Phragmoplast), die zur neuen Zellwand wird. Auch die Energiespeicherung unterscheidet sich: Pflanzenzellen speichern Glucose als Stärke, Tierzellen als Glykogen.`,
      diagram: 'plant-vs-animal-cell',
      merksaetze: [
        'Pflanzenzelle hat 3 „Extra-Cs": Cell wall (Zellwand), Chloroplasten, Central vakuole',
        'Tierzelle hat Zentriolen und Lysosomen, aber keine Zellwand – dafür ist sie flexibel und beweglich'
      ],
      altfrage: {
        question: 'Welche Struktur ermöglicht die Kommunikation zwischen benachbarten Pflanzenzellen?',
        answer: 'Plasmodesmen – kanalförmige Verbindungen, die durch die Zellwand verlaufen und das Cytoplasma benachbarter Zellen verbinden. Sie sind das pflanzliche Äquivalent zu Gap Junctions in Tierzellen und ermöglichen den Austausch von Ionen, kleinen Molekülen und Signalstoffen.'
      },
      klinischerBezug: 'Cellulose aus pflanzlicher Nahrung kann vom menschlichen Verdauungssystem nicht abgebaut werden, da uns das Enzym Cellulase fehlt. Cellulose dient daher als Ballaststoff, der die Darmperistaltik fördert und für eine gesunde Verdauung wichtig ist. Wiederkäuer wie Rinder können Cellulose durch symbiontische Bakterien in ihrem Pansen abbauen.',
      selfTest: [
        {
          question: 'Welche Struktur fehlt in der Tierzelle?',
          options: [
            'Mitochondrien',
            'Zellwand aus Cellulose',
            'Zellmembran',
            'Endoplasmatisches Retikulum'
          ],
          correctIndex: 1,
          explanation: 'Tierzellen besitzen keine Zellwand aus Cellulose. Diese ist ein exklusives Merkmal der Pflanzenzelle und verleiht ihr Formstabilität. Tierzellen haben nur die flexible Zellmembran.'
        },
        {
          question: 'Wie unterscheidet sich die Cytokinese bei Pflanzen- und Tierzellen?',
          options: [
            'Beide bilden einen kontraktilen Ring',
            'Pflanzenzellen bilden eine Zellplatte, Tierzellen eine Teilungsfurche',
            'Tierzellen bilden eine Zellplatte, Pflanzenzellen eine Teilungsfurche',
            'Beide bilden eine Zellplatte von innen nach außen'
          ],
          correctIndex: 1,
          explanation: 'Bei Pflanzenzellen entsteht eine Zellplatte (Phragmoplast) von innen nach außen, die zur neuen Zellwand wird. Tierzellen schnüren sich durch einen kontraktilen Ring aus Aktinfilamenten ein (Teilungsfurche).'
        },
        {
          question: 'Welche Funktion hat die große Zentralvakuole der Pflanzenzelle?',
          options: [
            'ATP-Produktion durch oxidative Phosphorylierung',
            'Proteinsynthese für die Sekretion',
            'Speicherung von Wasser und Erzeugung des Turgors',
            'Organisation des Spindelapparats'
          ],
          correctIndex: 2,
          explanation: 'Die Zentralvakuole speichert Wasser, Ionen und Stoffwechselprodukte. Durch osmotischen Druck erzeugt sie den Turgor, der die Pflanzenzelle prall hält und der Pflanze Stabilität verleiht. Sie kann bis zu 90 % des Zellvolumens einnehmen.'
        }
      ]
    },
    // ==================== 1.4 ====================
    {
      id: 'bio-kap1-uk4',
      title: 'Organellen mit Doppelmembran',
      content: `Drei Organellen der eukaryotischen Zelle zeichnen sich durch eine Doppelmembran aus: der Zellkern, die Mitochondrien und die Chloroplasten. Diese strukturelle Besonderheit hat tiefgreifende funktionelle Konsequenzen. Der Zellkern ist von der Kernhülle umgeben, die aus einer äußeren und einer inneren Kernmembran besteht. Die äußere Kernmembran ist kontinuierlich mit dem rauen ER verbunden und trägt ebenfalls Ribosomen. Zwischen beiden Membranen liegt der perinukleäre Raum. Die Kernhülle ist von Kernporen durchbrochen – komplexe Proteinkomplexe (Nukleäre Porenkomplexe, NPCs), die den selektiven Transport zwischen Kern und Cytoplasma ermöglichen. Kleine Moleküle diffundieren frei, während größere Moleküle (z. B. Proteine mit Kernlokalisierungssignal) aktiv und energieabhängig transportiert werden.

Mitochondrien besitzen eine glatte äußere Membran und eine stark gefaltete innere Membran, deren Einstülpungen als Cristae bezeichnet werden. Die Cristae vergrößern die Oberfläche für die oxidative Phosphorylierung erheblich. Zwischen beiden Membranen liegt der Intermembranraum, in dem sich während der Atmungskette ein Protonengradient aufbaut. Die innere Membran enthält die Komplexe I–IV der Atmungskette sowie die ATP-Synthase (Komplex V), die den Protonengradienten zur ATP-Synthese nutzt (Chemiosmose). Der Matrixraum enthält Enzyme des Citratzyklus, die mitochondriale DNA (mtDNA – zirkulär, ca. 16.500 Basenpaare beim Menschen) und 70S-Ribosomen. Die mitochondriale DNA wird maternal vererbt, da bei der Befruchtung fast ausschließlich die Mitochondrien der Eizelle weitergegeben werden.

Die Endosymbiontentheorie, aufgestellt von Lynn Margulis (1967), erklärt, warum Mitochondrien und Chloroplasten eine Doppelmembran und eigene DNA besitzen. Laut dieser Theorie waren die Vorläufer der Mitochondrien aerobe Proteobakterien, die von einer frühen eukaryotischen Zelle durch Phagozytose aufgenommen wurden. Die äußere Membran entspricht der Phagosomenmembran der Wirtszelle, die innere Membran der ursprünglichen Bakterienmembran. Über Millionen von Jahren wurden viele Gene der Endosymbionten in den Wirtszellkern transferiert (endosymbiontischer Gentransfer), sodass die meisten mitochondrialen Proteine heute im Zellkern kodiert und nach Translation im Cytoplasma in die Mitochondrien importiert werden. Die Belege für die Endosymbiontentheorie umfassen: eigene zirkuläre DNA, 70S-Ribosomen, Doppelmembran, eigene Proteinsynthese, Vermehrung durch Teilung und ähnliche Größe wie Bakterien.`,
      diagram: 'double-membrane-organelles',
      merksaetze: [
        'Doppelmembran-Organellen: „KeMiCh" – Kern, Mitochondrien, Chloroplasten – alle drei haben eigene DNA (außer: Kern hat die Haupt-DNA)',
        'Endosymbiontentheorie-Belege: Eigene zirkuläre DNA, 70S-Ribosomen, Doppelmembran, Teilung durch Abschnürung'
      ],
      altfrage: {
        question: 'Warum wird die mitochondriale DNA maternal vererbt?',
        answer: 'Bei der Befruchtung liefert fast ausschließlich die Eizelle die Mitochondrien. Die wenigen Mitochondrien des Spermiums befinden sich im Mittelstück und werden nach der Befruchtung markiert und abgebaut. Dadurch werden mitochondriale Erkrankungen ausschließlich von der Mutter weitergegeben.'
      },
      klinischerBezug: 'Mutationen in der mitochondrialen DNA (mtDNA) verursachen mitochondriale Erkrankungen wie MELAS (mitochondriale Enzephalomyopathie, Laktatazidose und Schlaganfall-ähnliche Episoden) oder Leber-hereditäre-Optikusneuropathie (LHON). Da Mitochondrien maternal vererbt werden, zeigen diese Erkrankungen ein charakteristisches maternales Vererbungsmuster. Besonders betroffen sind Gewebe mit hohem Energiebedarf wie Muskulatur, Gehirn und Herz.',
      selfTest: [
        {
          question: 'Welche Organellen besitzen eine Doppelmembran?',
          options: [
            'Lysosomen, Peroxisomen, Vakuolen',
            'Zellkern, Mitochondrien, Chloroplasten',
            'ER, Golgi-Apparat, Zellkern',
            'Ribosomen, Zentriolen, Mitochondrien'
          ],
          correctIndex: 1,
          explanation: 'Zellkern, Mitochondrien und Chloroplasten besitzen eine Doppelmembran. Bei Mitochondrien und Chloroplasten wird dies durch die Endosymbiontentheorie erklärt. ER und Golgi haben eine Einzelmembran; Ribosomen und Zentriolen sind nicht membranumhüllt.'
        },
        {
          question: 'Wo findet die oxidative Phosphorylierung statt?',
          options: [
            'In der Matrix der Mitochondrien',
            'An der äußeren Mitochondrienmembran',
            'An der inneren Mitochondrienmembran (Cristae)',
            'Im Intermembranraum der Mitochondrien'
          ],
          correctIndex: 2,
          explanation: 'Die Komplexe der Atmungskette (I–IV) und die ATP-Synthase (V) sitzen in der inneren Mitochondrienmembran (Cristae). Die Cristae vergrößern die Oberfläche für diese Prozesse. Der Citratzyklus läuft hingegen in der Matrix ab.'
        },
        {
          question: 'Welches Merkmal spricht NICHT für die Endosymbiontentheorie?',
          options: [
            'Mitochondrien besitzen eigene zirkuläre DNA',
            'Mitochondrien haben 70S-Ribosomen',
            'Mitochondrien werden von einer Doppelmembran umgeben',
            'Mitochondrien besitzen 80S-Ribosomen wie das Cytoplasma'
          ],
          correctIndex: 3,
          explanation: 'Mitochondrien besitzen 70S-Ribosomen (wie Prokaryoten), NICHT 80S-Ribosomen. Gerade das Vorhandensein von 70S-Ribosomen, eigener zirkulärer DNA und einer Doppelmembran stützt die Endosymbiontentheorie.'
        }
      ]
    },
    // ==================== 1.5 ====================
    {
      id: 'bio-kap1-uk5',
      title: 'Endomembransystem',
      content: `Das Endomembransystem ist ein funktionell zusammenhängendes Netzwerk von Membranen innerhalb der eukaryotischen Zelle. Es umfasst das endoplasmatische Retikulum (ER), den Golgi-Apparat, Lysosomen, Endosomen und die Zellmembran. Diese Kompartimente stehen über Vesikel miteinander in Verbindung und ermöglichen die Synthese, Modifikation, Sortierung und den Transport von Proteinen und Lipiden. Das endoplasmatische Retikulum existiert in zwei morphologisch und funktionell unterschiedlichen Formen: Das raue ER (rER) ist mit Ribosomen besetzt und spezialisiert auf die Synthese von Membranproteinen, sekretorischen Proteinen und lysosomalen Enzymen. Die Ribosomen binden an die ER-Membran, sobald die Signalsequenz des wachsenden Polypeptids vom Signal Recognition Particle (SRP) erkannt wird. Das glatte ER (sER) ist ribosomenfrei und dient der Lipidsynthese, Steroidhormonsynthese, Entgiftung (besonders in Hepatozyten) und der Calciumspeicherung.

Der Golgi-Apparat besteht aus 4–8 gestapelten, membranumhüllten Zisternen mit einer cis-Seite (dem ER zugewandt) und einer trans-Seite (der Zellmembran zugewandt). Proteine gelangen in Transportvesikeln vom ER zur cis-Seite des Golgi und durchlaufen die Zisternen von cis nach trans. Während dieser Passage werden sie posttranslational modifiziert: O- und N-Glykosylierung, Phosphorylierung und proteolytische Spaltung finden statt. An der trans-Seite werden die fertigen Proteine in verschiedene Vesikel sortiert – je nach Zielort: sekretorische Vesikel für die Exozytose, Vesikel mit Mannose-6-Phosphat-Tag für den Transport zu Lysosomen oder Vesikel für den Einbau in die Zellmembran. Der gesamte Transportweg vom ER über den Golgi zur Zellmembran wird als sekretorischer Weg (Biosynthese-Sekretion-Weg) bezeichnet.

Lysosomen sind Einzelmembran-Organellen mit saurem Milieu (pH 4,5–5,0), das durch V-Typ-ATPasen (Protonenpumpen) aufrechterhalten wird. Sie enthalten über 50 verschiedene hydrolytische Enzyme (saure Hydrolasen), die Proteine, Lipide, Kohlenhydrate und Nukleinsäuren abbauen. Lysosomen sind an drei Hauptprozessen beteiligt: Heterophagie (Abbau von aufgenommenem Material nach Endozytose oder Phagozytose), Autophagie (Abbau eigener beschädigter Organellen) und Autophagozytose. Endosomen sind Zwischenstationen im endozytotischen Weg: Frühe Endosomen sortieren aufgenommenes Material, späte Endosomen reifen zu Lysosomen heran oder fusionieren mit ihnen. Der gesamte Vesikeltransport wird durch Coat-Proteine (COPI, COPII, Clathrin), SNARE-Proteine (für Vesikelfusion) und Rab-GTPasen (für Zielerkennung) reguliert.`,
      diagram: 'endomembrane-system',
      merksaetze: [
        'Sekretorischer Weg: rER → Golgi (cis→trans) → Zellmembran/Lysosom – Merke: „ER Golft zur Membran"',
        'Golgi: cis = Empfang (zum ER hin), trans = Versand (zur Membran hin) – „cis kommt, trans geht"'
      ],
      altfrage: {
        question: 'Wie gelangen Enzyme zu den Lysosomen?',
        answer: 'Lysosomale Enzyme werden im rER synthetisiert, im Golgi mit einem Mannose-6-Phosphat-Tag (M6P) versehen und an der trans-Seite des Golgi in Vesikel verpackt, die M6P-Rezeptoren tragen. Diese Vesikel fusionieren mit späten Endosomen, die zu Lysosomen heranreifen.'
      },
      klinischerBezug: 'Die Inklusions-Zell-Krankheit (I-Zell-Krankheit, Mukolipidose II) entsteht durch einen Defekt im Enzym N-Acetylglucosamin-Phosphotransferase, das den Mannose-6-Phosphat-Tag anheftet. Ohne diesen Tag werden lysosomale Enzyme nicht zu den Lysosomen dirigiert, sondern nach extrazellulär sezerniert. Die Lysosomen bleiben funktionslos und füllen sich mit unverdautem Material.',
      selfTest: [
        {
          question: 'Welche Funktion hat das raue ER?',
          options: [
            'Lipidsynthese und Entgiftung',
            'Synthese von Membranproteinen und sekretorischen Proteinen',
            'Glykosylierung und Sortierung von Proteinen',
            'Abbau beschädigter Organellen'
          ],
          correctIndex: 1,
          explanation: 'Das raue ER ist mit Ribosomen besetzt und synthetisiert Proteine, die für die Zellmembran, die Sekretion oder Lysosomen bestimmt sind. Lipidsynthese und Entgiftung sind Aufgaben des glatten ER.'
        },
        {
          question: 'In welcher Reihenfolge durchlaufen Proteine den sekretorischen Weg?',
          options: [
            'Golgi → rER → Lysosom → Zellmembran',
            'rER → Golgi (cis→trans) → Zellmembran/Lysosom',
            'Zellmembran → Golgi → rER → Lysosom',
            'sER → Golgi → rER → Zellmembran'
          ],
          correctIndex: 1,
          explanation: 'Der sekretorische Weg verläuft: Synthese am rER → Transport zum Golgi (Eintritt an der cis-Seite, Austritt an der trans-Seite) → Sortierung in Vesikel → Transport zur Zellmembran oder zu Lysosomen.'
        },
        {
          question: 'Welches Tag markiert Enzyme für den Transport zum Lysosom?',
          options: [
            'Ubiquitin',
            'Mannose-6-Phosphat (M6P)',
            'Signalsequenz (Signalpeptid)',
            'KDEL-Sequenz'
          ],
          correctIndex: 1,
          explanation: 'Mannose-6-Phosphat (M6P) ist der spezifische Tag für lysosomale Enzyme. Er wird im Golgi angeheftet und von M6P-Rezeptoren erkannt, die den Transport in Richtung Lysosomen vermitteln. KDEL ist ein ER-Retentionssignal.'
        }
      ]
    },
    // ==================== 1.6 ====================
    {
      id: 'bio-kap1-uk6',
      title: 'Zellmembran & Flüssig-Mosaik-Modell',
      content: `Die Zellmembran (Plasmamembran) grenzt das Zellinnere von der Umgebung ab und reguliert den Stoffaustausch. Ihre Struktur wird durch das Flüssig-Mosaik-Modell beschrieben, das 1972 von Singer und Nicolson vorgeschlagen wurde. Danach besteht die Membran aus einer Lipiddoppelschicht (Bilayer), in die verschiedene Proteine wie Mosaiksteine eingebettet sind. Die Lipiddoppelschicht besteht hauptsächlich aus Phospholipiden – amphipathische Moleküle mit einem hydrophilen Kopf (Phosphat + Alkoholgruppe) und zwei hydrophoben Fettsäureschwänzen. In wässriger Umgebung ordnen sich die Phospholipide spontan zu einer Doppelschicht an, wobei die hydrophoben Schwänze nach innen zeigen und die hydrophilen Köpfe nach außen, zum Wasser hin. Diese Anordnung entsteht durch den hydrophoben Effekt und wird nicht durch kovalente Bindungen stabilisiert, sondern durch hydrophobe Wechselwirkungen und Van-der-Waals-Kräfte.

Die Membranproteine werden in zwei Kategorien unterteilt: Integrale (transmembrane) Proteine durchspannen die gesamte Lipiddoppelschicht und besitzen hydrophobe Bereiche (oft α-Helices), die in der Membran verankert sind, sowie hydrophile Bereiche, die auf beiden Seiten der Membran herausragen. Sie dienen als Ionenkanäle, Transporter, Rezeptoren und Enzyme. Periphere Proteine sind nur locker an der Membranoberfläche assoziiert – entweder durch elektrostatische Wechselwirkungen mit Lipidköpfen oder durch Bindung an integrale Proteine. Sie fungieren häufig als Signalmoleküle oder Strukturproteine (z. B. Spektrin auf der Innenseite der Erythrozytenmembran). Die Glykokalix – eine Kohlenhydratschicht auf der Außenseite der Membran, bestehend aus Glykoproteinen und Glykolipiden – spielt eine zentrale Rolle bei der Zell-Zell-Erkennung, dem Schutz vor mechanischer Schädigung und der Immunerkennung (z. B. Blutgruppenantigene).

Cholesterol ist ein essentieller Bestandteil tierischer Zellmembranen und macht etwa 20–25 % der Membranlipide aus. Es reguliert die Membranfluidität: Bei hohen Temperaturen verringert Cholesterol die Fluidität, indem es die Beweglichkeit der Phospholipide einschränkt; bei niedrigen Temperaturen verhindert es die Kristallisation der Membran und hält sie fluid. Cholesterol wirkt somit als „Fluiditätspuffer". Die laterale Mobilität der Membrankomponenten ist ein wesentliches Merkmal des Flüssig-Mosaik-Modells: Phospholipide können sich innerhalb einer Schicht lateral bewegen (ca. 10⁷ Mal pro Sekunde), der Wechsel zwischen den Schichten (Flip-Flop) ist hingegen sehr selten und erfordert Flippasen. Lipid Rafts sind cholesterolreiche Mikrodomänen der Membran, die bestimmte Proteine konzentrieren und an Signaltransduktion und Endozytose beteiligt sind.`,
      diagram: 'cell-membrane',
      merksaetze: [
        'Flüssig-Mosaik-Modell: Phospholipid-Doppelschicht = „Flüssig" (bewegliche Lipide), Proteine = „Mosaik" (eingebettete Steine)',
        'Cholesterol = „Fluiditätspuffer": hält die Membran bei Hitze fest und bei Kälte fluid'
      ],
      altfrage: {
        question: 'Was beschreibt das Flüssig-Mosaik-Modell nach Singer und Nicolson (1972)?',
        answer: 'Es beschreibt die Zellmembran als eine fluide Lipiddoppelschicht aus Phospholipiden, in die integrale und periphere Proteine mosaikartig eingelagert sind. Die Komponenten sind lateral beweglich. Cholesterol reguliert die Fluidität, die Glykokalix befindet sich auf der Außenseite.'
      },
      klinischerBezug: 'Bei der paroxysmalen nächtlichen Hämoglobinurie (PNH) fehlt der GPI-Anker (Glycosylphosphatidylinositol), der bestimmte Proteine in der Zellmembran verankert. Dadurch fehlen Komplement-regulierende Proteine (CD55, CD59) auf der Erythrozytenoberfläche, was zur komplementvermittelten Lyse der Erythrozyten führt. Auch bei der Hypercholesterinämie ist der Membranstoffwechsel gestört: Überschüssiges Cholesterol verändert die Membranfluidität und -funktion.',
      selfTest: [
        {
          question: 'Welche Funktion hat Cholesterol in der Zellmembran?',
          options: [
            'Es bildet Ionenkanäle in der Membran',
            'Es reguliert die Membranfluidität als Fluiditätspuffer',
            'Es ist Teil der Glykokalix auf der Außenseite',
            'Es dient als Rezeptor für Signalmoleküle'
          ],
          correctIndex: 1,
          explanation: 'Cholesterol wirkt als Fluiditätspuffer: Bei hohen Temperaturen verringert es die Fluidität, bei niedrigen Temperaturen verhindert es die Kristallisation. Es stabilisiert die Membranstruktur, ohne selbst als Kanal oder Rezeptor zu fungieren.'
        },
        {
          question: 'Welche Aussage zu Membranproteinen ist korrekt?',
          options: [
            'Periphere Proteine durchspannen die gesamte Lipiddoppelschicht',
            'Integrale Proteine sind nur locker an der Membranoberfläche assoziiert',
            'Integrale Proteine durchspannen die Membran und dienen als Kanäle/Rezeptoren',
            'Periphere Proteine besitzen hydrophobe Transmembrandomänen'
          ],
          correctIndex: 2,
          explanation: 'Integrale (transmembrane) Proteine durchspannen die gesamte Lipiddoppelschicht mit hydrophoben Transmembrandomänen. Sie fungieren als Kanäle, Transporter und Rezeptoren. Periphere Proteine sind nur an der Oberfläche assoziiert.'
        },
        {
          question: 'Was ist die Glykokalix?',
          options: [
            'Die Lipiddoppelschicht der Membran',
            'Eine Kohlenhydratschicht auf der Außenseite der Membran',
            'Ein Netzwerk aus Cholesterol im Membraninneren',
            'Die Verankerungsstruktur für periphere Proteine'
          ],
          correctIndex: 1,
          explanation: 'Die Glykokalix besteht aus Kohlenhydratketten von Glykoproteinen und Glykolipiden auf der Membranaußenseite. Sie dient der Zell-Zell-Erkennung, dem Schutz und der Immunerkennung (z. B. Blutgruppenantigene).'
        }
      ]
    },
    // ==================== 1.7 ====================
    {
      id: 'bio-kap1-uk7',
      title: 'Membrantransport',
      content: `Der Transport von Stoffen über die Zellmembran ist essentiell für die Aufrechterhaltung des zellulären Milieus und wird in passiven und aktiven Transport unterteilt. Passiver Transport erfolgt entlang des Konzentrationsgradienten (von hoch nach niedrig) und benötigt keine Energie in Form von ATP. Die einfache Diffusion betrifft kleine, unpolare Moleküle (O₂, CO₂, N₂, Steroidhormone), die direkt durch die Lipiddoppelschicht diffundieren. Die Geschwindigkeit folgt dem Fickschen Diffusionsgesetz und hängt von Konzentrationsgradient, Membranfläche, Membrandicke und dem Diffusionskoeffizienten des Stoffes ab. Die erleichterte Diffusion (Facilitated Diffusion) benötigt Kanalproteine oder Carrier-Proteine für Moleküle, die die Membran nicht allein passieren können: Ionenkanäle (z. B. K⁺-Kanäle) ermöglichen den selektiven Durchtritt von Ionen; Carrier-Proteine (z. B. GLUT-Transporter für Glucose) binden den Stoff und ändern ihre Konformation. Beide zeigen Sättigungskinetik (maximale Transportrate Vmax) und Spezifität.

Osmose ist die Diffusion von Wasser durch eine semipermeable Membran vom Ort niedrigerer Konzentration gelöster Stoffe zum Ort höherer Konzentration gelöster Stoffe. In einer hypotonischen Lösung (weniger gelöste Stoffe außen) nimmt die Zelle Wasser auf und schwillt an – bei Tierzellen droht die Lyse, bei Pflanzenzellen wird der Turgor aufgebaut, die Zellwand verhindert das Platzen. In einer hypertonischen Lösung (mehr gelöste Stoffe außen) verliert die Zelle Wasser – Tierzellen schrumpfen (Krenation), Pflanzenzellen plasmolysieren (die Zellmembran löst sich von der Zellwand). In einer isotonischen Lösung herrscht Gleichgewicht. Der osmotische Druck (π) wird durch die Van-'t-Hoff-Gleichung beschrieben: π = i × c × R × T, wobei i der Van-'t-Hoff-Faktor (Anzahl der Teilchen nach Dissoziation), c die molare Konzentration, R die Gaskonstante und T die absolute Temperatur ist.

Aktiver Transport erfolgt gegen den Konzentrationsgradienten und erfordert Energie. Beim primär aktiven Transport wird ATP direkt hydrolysiert – das wichtigste Beispiel ist die Na⁺/K⁺-ATPase, die pro ATP-Molekül 3 Na⁺ nach außen und 2 K⁺ nach innen pumpt und damit das Ruhepotential der Zelle aufrechterhält. Weitere Beispiele sind die Ca²⁺-ATPase und die H⁺/K⁺-ATPase der Belegzellen im Magen. Beim sekundär aktiven Transport wird die durch primär aktiven Transport aufgebaute Ionengradiente genutzt: Symporter transportieren zwei Stoffe in gleicher Richtung (z. B. Na⁺/Glucose-Symporter SGLT1 im Darm), Antiporter in entgegengesetzter Richtung (z. B. Na⁺/H⁺-Antiporter). Endozytose und Exozytose sind vesikuläre Transportmechanismen für große Moleküle und Partikel. Die Endozytose umfasst Phagozytose (Zellfressen), Pinozytose (Zelltrinken) und rezeptorvermittelte Endozytose (z. B. LDL-Aufnahme über Clathrin-coated Pits). Bei der Exozytose verschmelzen intrazelluläre Vesikel mit der Zellmembran und entlassen ihren Inhalt nach außen.`,
      diagram: 'membrane-transport',
      merksaetze: [
        'Na⁺/K⁺-ATPase: „3 Natrium raus, 2 Kalium rein" → elektrogen (netto +1 Ladung nach außen)',
        'Passiv = mit dem Gradienten (kein ATP), Aktiv = gegen den Gradienten (ATP nötig), Vesikulär = Endo-/Exozytose für Großes'
      ],
      altfrage: {
        question: 'Wie viele Ionen transportiert die Na⁺/K⁺-ATPase pro ATP-Zyklus?',
        answer: '3 Na⁺ werden nach extrazellulär und 2 K⁺ nach intrazellulär transportiert. Da netto eine positive Ladung nach außen transportiert wird, ist die Pumpe elektrogen und trägt zum negativen Ruhemembranpotential bei.'
      },
      klinischerBezug: 'Herzglykoside (z. B. Digoxin) hemmen die Na⁺/K⁺-ATPase in Herzmuskelzellen. Dadurch steigt die intrazelluläre Na⁺-Konzentration, der Na⁺/Ca²⁺-Antiporter wird gehemmt, und die intrazelluläre Ca²⁺-Konzentration steigt. Mehr Ca²⁺ bedeutet eine stärkere Kontraktion (positiv inotrop). Digoxin wird bei Herzinsuffizienz und Vorhofflimmern eingesetzt, hat aber eine geringe therapeutische Breite.',
      selfTest: [
        {
          question: 'Was passiert mit einer Tierzelle in einer hypotonischen Lösung?',
          options: [
            'Die Zelle schrumpft (Krenation)',
            'Die Zelle nimmt Wasser auf und kann lysieren',
            'Es findet kein Netto-Wassertransport statt',
            'Die Zelle plasmolysiert'
          ],
          correctIndex: 1,
          explanation: 'In einer hypotonischen Lösung ist die Konzentration gelöster Stoffe außen niedriger als innen. Wasser strömt per Osmose in die Zelle, sie schwillt an und kann platzen (Lyse). Pflanzenzellen sind durch ihre Zellwand geschützt.'
        },
        {
          question: 'Was ist ein Beispiel für sekundär aktiven Transport?',
          options: [
            'Die Na⁺/K⁺-ATPase',
            'Der Na⁺/Glucose-Symporter (SGLT1)',
            'Die einfache Diffusion von O₂',
            'Die erleichterte Diffusion über GLUT-Transporter'
          ],
          correctIndex: 1,
          explanation: 'Der Na⁺/Glucose-Symporter (SGLT1) nutzt den durch die Na⁺/K⁺-ATPase aufgebauten Na⁺-Gradienten, um Glucose gegen ihren Konzentrationsgradienten in die Zelle zu transportieren. Die Na⁺/K⁺-ATPase selbst ist primär aktiver Transport.'
        },
        {
          question: 'Welche Moleküle können durch einfache Diffusion die Membran passieren?',
          options: [
            'Glucose und Aminosäuren',
            'Na⁺- und K⁺-Ionen',
            'Kleine, unpolare Moleküle wie O₂ und CO₂',
            'Proteine und Polysaccharide'
          ],
          correctIndex: 2,
          explanation: 'Nur kleine, unpolare Moleküle (O₂, CO₂, N₂, Steroidhormone) können direkt durch die hydrophobe Lipiddoppelschicht diffundieren. Ionen, polare Moleküle und Makromoleküle benötigen Transporter oder vesikulären Transport.'
        }
      ]
    },
    // ==================== 1.8 ====================
    {
      id: 'bio-kap1-uk8',
      title: 'Zellzyklus & Interphase',
      content: `Der Zellzyklus beschreibt die geordnete Abfolge von Wachstum, DNA-Replikation und Zellteilung. Er wird in die Interphase (ca. 90 % der Zykluszeit) und die Mitosephase (M-Phase, ca. 10 %) unterteilt. Die Interphase besteht aus drei Phasen: der G1-Phase (Gap 1, erste Wachstumsphase), der S-Phase (Synthesephase, DNA-Replikation) und der G2-Phase (Gap 2, zweite Wachstumsphase). In der G1-Phase wächst die Zelle, synthetisiert Proteine und Organellen und bereitet sich auf die DNA-Replikation vor. Die Dauer der G1-Phase ist am variabelsten und bestimmt maßgeblich die Gesamtdauer des Zellzyklus. Zellen, die sich nicht mehr teilen (z. B. ausdifferenzierte Nervenzellen oder Muskelzellen), treten aus dem Zyklus in die G0-Phase ein – einen Ruhezustand, der reversibel (z. B. Leberzellen nach Hepatektomie) oder irreversibel sein kann.

In der S-Phase wird die gesamte DNA der Zelle semikonservativ repliziert: Jedes Chromosom besteht danach aus zwei identischen Schwesterchromatiden, die am Zentromer verbunden sind. Der DNA-Gehalt verdoppelt sich von 2n/2C auf 2n/4C (bei diploiden Zellen). Gleichzeitig werden die Zentrosomen dupliziert. Die Replikation beginnt an multiplen Replikationsursprüngen (Origins of Replication) und verläuft bidirektional. In der G2-Phase bereitet sich die Zelle auf die Mitose vor: Es werden Proteine synthetisiert, die für den Aufbau des Spindelapparats nötig sind (z. B. Tubulin), und die Zelle wächst weiter. Am Ende der G2-Phase wird das Chromatin zu kondensieren beginnen.

Der Zellzyklus wird an mehreren Kontrollpunkten (Checkpoints) streng reguliert. Der G1/S-Checkpoint (Restriktionspunkt) entscheidet, ob die Zelle in die S-Phase eintritt und sich zur Teilung verpflichtet – hier wird geprüft, ob die Zelle groß genug ist, ob ausreichend Nährstoffe vorhanden sind und ob die DNA intakt ist. Der G2/M-Checkpoint überprüft vor Eintritt in die Mitose, ob die DNA-Replikation vollständig und fehlerfrei abgeschlossen wurde. Der Spindel-Checkpoint (Metaphase-Checkpoint) kontrolliert während der Mitose, ob alle Chromosomen korrekt am Spindelapparat angeheftet sind. Die Regulation erfolgt durch Cycline und Cyclin-abhängige Kinasen (CDKs): Cycline werden phasenspezifisch synthetisiert und abgebaut, aktivieren CDKs und treiben den Zellzyklus voran. Das Tumorsuppressorprotein p53 – der „Wächter des Genoms" – spielt eine zentrale Rolle: Bei DNA-Schäden stoppt p53 den Zellzyklus am G1/S-Checkpoint und initiiert entweder die DNA-Reparatur oder bei irreparablen Schäden die Apoptose.`,
      diagram: 'cell-cycle',
      merksaetze: [
        'Interphase: G1 (Wachstum) → S (DNA-Synthese) → G2 (Vorbereitung) → M (Mitose) – „Geh Schlafen, Gib Mir Ruhe"',
        'p53 = „Wächter des Genoms": Stoppt den Zellzyklus bei DNA-Schäden oder leitet Apoptose ein'
      ],
      altfrage: {
        question: 'In welcher Phase des Zellzyklus wird die DNA repliziert?',
        answer: 'In der S-Phase (Synthesephase) der Interphase. Die DNA wird semikonservativ repliziert, sodass jedes Chromosom danach aus zwei Schwesterchromatiden besteht. Der DNA-Gehalt steigt von 2C auf 4C.'
      },
      klinischerBezug: 'Mutationen im TP53-Gen (kodiert für p53) finden sich in über 50 % aller Tumoren. Wenn p53 ausfällt, können sich Zellen mit DNA-Schäden unkontrolliert teilen. Das Li-Fraumeni-Syndrom wird durch Keimbahnmutationen in TP53 verursacht und führt zu einer stark erhöhten Krebsanfälligkeit (Sarkome, Brustkrebs, Hirntumore) bereits in jungen Jahren. Viele Chemotherapeutika wirken in der S-Phase (z. B. Antimetabolite wie 5-Fluorouracil).',
      selfTest: [
        {
          question: 'Was geschieht in der G0-Phase?',
          options: [
            'Die DNA wird repliziert',
            'Die Zelle befindet sich in einem Ruhezustand und teilt sich nicht',
            'Die Mitose findet statt',
            'Die Chromosomen kondensieren'
          ],
          correctIndex: 1,
          explanation: 'In der G0-Phase befinden sich Zellen in einem Ruhezustand außerhalb des aktiven Zellzyklus. Dies betrifft ausdifferenzierte Zellen wie Nervenzellen und Muskelzellen. Manche Zellen können bei Bedarf wieder in den Zyklus eintreten (z. B. Hepatozyten).'
        },
        {
          question: 'Was wird am G1/S-Checkpoint überprüft?',
          options: [
            'Ob alle Chromosomen am Spindelapparat angeheftet sind',
            'Ob die DNA-Replikation vollständig abgeschlossen ist',
            'Ob die Zelle groß genug ist und die DNA intakt ist',
            'Ob die Cytokinese korrekt stattgefunden hat'
          ],
          correctIndex: 2,
          explanation: 'Am G1/S-Checkpoint (Restriktionspunkt) wird geprüft, ob die Zelle groß genug ist, ausreichend Nährstoffe vorhanden sind und die DNA intakt ist. Erst dann wird die DNA-Replikation in der S-Phase eingeleitet.'
        },
        {
          question: 'Wie ist der DNA-Gehalt einer diploiden Zelle nach der S-Phase?',
          options: [
            '1n/1C',
            '2n/2C',
            '2n/4C',
            '4n/4C'
          ],
          correctIndex: 2,
          explanation: 'Nach der S-Phase hat die Zelle ihre DNA repliziert: Der Chromosomensatz ist weiterhin diploid (2n), aber jedes Chromosom besteht aus zwei Schwesterchromatiden, sodass der DNA-Gehalt 4C beträgt (2n/4C).'
        }
      ]
    },
    // ==================== 1.9 ====================
    {
      id: 'bio-kap1-uk9',
      title: 'Mitose',
      content: `Die Mitose ist die äquationale Teilung des Zellkerns, bei der aus einer Mutterzelle zwei genetisch identische Tochterzellen entstehen. Sie wird in vier aufeinanderfolgende Phasen unterteilt: Prophase, Metaphase, Anaphase und Telophase (Merkwort: PMAT). In der Prophase kondensiert das Chromatin zu sichtbaren Chromosomen, die jeweils aus zwei Schwesterchromatiden bestehen, die am Zentromer verbunden sind. Die Zentrosomen wandern zu den entgegengesetzten Zellpolen und beginnen mit der Bildung des Spindelapparats aus Mikrotubuli. Der Nukleolus verschwindet. In der späten Prophase (Prometaphase) löst sich die Kernhülle auf, und die Spindelfasern heften sich über Kinetochore an die Zentromere der Chromosomen. Die Kinetochore sind Proteinkomplexe, die auf jeder Seite des Zentromers aufgebaut werden und als Andockstellen für die Kinetochor-Mikrotubuli dienen.

In der Metaphase ordnen sich alle Chromosomen in der Äquatorialebene der Zelle an (Metaphaseplatte). Jedes Chromosom ist über seine zwei Kinetochore mit Spindelfasern beider Pole verbunden (bipolare Anheftung). Am Spindel-Checkpoint wird überprüft, ob alle Kinetochore korrekt besetzt sind – erst dann wird die Anaphase eingeleitet. Der Anaphase-Promoting Complex (APC/C) wird aktiviert und initiiert den Abbau von Securin, wodurch das Enzym Separase freigesetzt wird, das die Kohäsin-Proteine spaltet, die die Schwesterchromatiden zusammenhalten. In der Anaphase werden die Schwesterchromatiden getrennt und als eigenständige Chromosomen zu den entgegengesetzten Zellpolen gezogen. Dies geschieht durch Verkürzung der Kinetochor-Mikrotubuli (Anaphase A) und Verlängerung der Polfasern (Anaphase B, Auseinanderrücken der Pole).

In der Telophase erreichen die Chromosomen die Zellpole, dekondensieren wieder zu Chromatin, die Kernhülle bildet sich um jeden Chromosomensatz neu, und der Nukleolus erscheint wieder. Der Spindelapparat wird abgebaut. Die Mitose endet mit der Cytokinese – der Teilung des Cytoplasmas. In Tierzellen wird ein kontraktiler Ring aus Aktin und Myosin unter der Zellmembran gebildet, der sich zusammenzieht und eine Teilungsfurche erzeugt, bis die Zelle in zwei Tochterzellen getrennt ist. In Pflanzenzellen bilden Golgi-Vesikel in der Zellmitte die Zellplatte, die sich nach außen ausdehnt und zur neuen Zellwand wird. Jede Tochterzelle erhält einen vollständigen diploiden Chromosomensatz (2n/2C) und ist genetisch identisch mit der Mutterzelle. Die Mitose dient dem Wachstum, der Gewebereparatur und der ungeschlechtlichen Fortpflanzung.`,
      diagram: 'mitosis',
      merksaetze: [
        'PMAT: Prophase – Metaphase – Anaphase – Telophase → „Pauls Mutter Aß Torte"',
        'Mitose = äquational (2n → 2n, identische Tochterzellen), Meiose = reduktional (2n → 1n)'
      ],
      altfrage: {
        question: 'Was geschieht in der Anaphase der Mitose?',
        answer: 'Die Schwesterchromatiden werden getrennt. Der APC/C aktiviert Separase, die die Kohäsin-Proteine spaltet. Die nun eigenständigen Chromosomen werden durch Verkürzung der Kinetochor-Mikrotubuli zu den entgegengesetzten Zellpolen gezogen.'
      },
      klinischerBezug: 'Fehler im Spindel-Checkpoint können zu Aneuploidie führen – einer abnormalen Chromosomenzahl. Vinca-Alkaloide (z. B. Vincristin) und Taxane (z. B. Paclitaxel) sind Zytostatika, die den Spindelapparat stören. Vinca-Alkaloide hemmen die Polymerisation von Tubulin, Taxane stabilisieren die Mikrotubuli und verhindern deren Abbau. Beide arretieren Zellen in der Metaphase und lösen Apoptose aus – besonders effektiv bei schnell proliferierenden Tumorzellen.',
      selfTest: [
        {
          question: 'In welcher Phase ordnen sich die Chromosomen in der Äquatorialebene an?',
          options: [
            'Prophase',
            'Metaphase',
            'Anaphase',
            'Telophase'
          ],
          correctIndex: 1,
          explanation: 'In der Metaphase reihen sich alle Chromosomen an der Metaphaseplatte (Äquatorialebene) auf. Jedes Chromosom ist bipolar mit dem Spindelapparat verbunden. Der Spindel-Checkpoint überprüft die korrekte Anheftung.'
        },
        {
          question: 'Welches Ergebnis hat die Mitose?',
          options: [
            'Vier haploide Tochterzellen',
            'Zwei genetisch identische diploide Tochterzellen',
            'Zwei genetisch verschiedene diploide Tochterzellen',
            'Vier genetisch verschiedene haploide Tochterzellen'
          ],
          correctIndex: 1,
          explanation: 'Die Mitose erzeugt zwei genetisch identische Tochterzellen mit demselben diploiden Chromosomensatz (2n) wie die Mutterzelle. Genetische Vielfalt entsteht erst durch Meiose und sexuelle Fortpflanzung.'
        },
        {
          question: 'Welches Enzym spaltet die Kohäsin-Proteine in der Anaphase?',
          options: [
            'Topoisomerase',
            'Helicase',
            'Separase',
            'Ligase'
          ],
          correctIndex: 2,
          explanation: 'Separase wird durch den APC/C (Anaphase-Promoting Complex) aktiviert, wenn der Spindel-Checkpoint passiert ist. Separase spaltet Kohäsin und ermöglicht so die Trennung der Schwesterchromatiden.'
        }
      ]
    },
    // ==================== 1.10 ====================
    {
      id: 'bio-kap1-uk10',
      title: 'Meiose',
      content: `Die Meiose ist eine spezielle Form der Zellteilung, die zur Bildung von Gameten (Keimzellen) dient und den Chromosomensatz halbiert: Aus einer diploiden Zelle (2n) entstehen vier haploide Zellen (1n). Die Meiose umfasst zwei aufeinanderfolgende Teilungen – Meiose I (Reduktionsteilung) und Meiose II (Äquationsteilung) – mit nur einer DNA-Replikation in der vorangehenden S-Phase. In der Prophase I, der längsten und komplexesten Phase, durchlaufen die Chromosomen fünf Stadien: Leptotän (Chromosomen kondensieren), Zygotän (homologe Chromosomen paaren sich = Synapsis, verbunden durch den synaptonemalen Komplex), Pachytän (Crossing-over findet statt – Austausch von DNA-Abschnitten zwischen nicht-schwesterlichen Chromatiden homologer Chromosomen an Chiasmata), Diplotän (Chromosomen beginnen sich zu trennen, bleiben an Chiasmata verbunden) und Diakinese (maximale Kondensation, Kernhülle löst sich auf).

In der Metaphase I ordnen sich die homologen Chromosomenpaare (Bivalente/Tetraden) an der Äquatorialebene an. Die zufällige Orientierung der Bivalente zur Metaphaseplatte führt zur unabhängigen Assortierung (Independent Assortment) – bei 23 Chromosomenpaaren des Menschen ergeben sich 2²³ ≈ 8,4 Millionen mögliche Kombinationen. In der Anaphase I werden die homologen Chromosomen (nicht die Schwesterchromatiden!) getrennt und zu den entgegengesetzten Polen gezogen. Die Tochterzellen nach Meiose I sind haploid (1n/2C), aber jedes Chromosom besteht noch aus zwei Schwesterchromatiden. Es gibt keine S-Phase zwischen Meiose I und II. Die Meiose II verläuft wie eine normale Mitose: In der Anaphase II werden die Schwesterchromatiden getrennt. Das Endergebnis sind vier haploide Zellen (1n/1C) mit jeweils einer einzigartigen Kombination elterlicher Gene.

Die Meiose unterscheidet sich grundlegend von der Mitose in mehreren Aspekten: Die Mitose erzeugt zwei genetisch identische diploide Zellen, die Meiose vier genetisch verschiedene haploide Zellen. In der Meiose findet Crossing-over und unabhängige Assortierung statt, die zusammen mit der zufälligen Befruchtung für genetische Vielfalt sorgen. Die Meiose I ist die eigentliche Reduktionsteilung (Trennung homologer Chromosomen), Meiose II ähnelt einer Mitose (Trennung der Schwesterchromatiden). Non-Disjunction – das Ausbleiben der Chromosomentrennung in Meiose I oder II – führt zu Aneuploidie: Trisomie (z. B. Trisomie 21/Down-Syndrom bei 3 Kopien von Chromosom 21) oder Monosomie (z. B. Turner-Syndrom 45,X). Non-Disjunction in Meiose I betrifft beide Tochterzellen, Non-Disjunction in Meiose II nur eine.`,
      diagram: 'meiosis',
      merksaetze: [
        'Meiose I = Reduktion (homologe trennen sich, 2n→1n), Meiose II = Äquation (Schwesterchromatiden trennen sich, wie Mitose)',
        'Genetische Vielfalt durch: Crossing-over (Prophase I), unabhängige Assortierung (Metaphase I), zufällige Befruchtung'
      ],
      altfrage: {
        question: 'In welcher Phase der Meiose findet Crossing-over statt?',
        answer: 'Im Pachytän der Prophase I. Dabei werden DNA-Abschnitte zwischen nicht-schwesterlichen Chromatiden homologer Chromosomen an den Chiasmata ausgetauscht. Dies führt zu einer Rekombination des genetischen Materials und erhöht die genetische Vielfalt.'
      },
      klinischerBezug: 'Non-Disjunction in der Meiose ist die häufigste Ursache chromosomaler Aneuploidien. Trisomie 21 (Down-Syndrom) entsteht in ca. 95 % der Fälle durch Non-Disjunction in der mütterlichen Meiose I. Das Risiko steigt mit dem mütterlichen Alter, da die Eizellen jahrzehntelang im Diktyotän der Prophase I arretiert sind und der Kohäsin-Komplex über die Zeit degradiert. Trisomie 18 (Edwards-Syndrom) und Trisomie 13 (Pätau-Syndrom) sind weitere klinisch relevante Aneuploidien.',
      selfTest: [
        {
          question: 'Was wird in der Anaphase I der Meiose getrennt?',
          options: [
            'Die Schwesterchromatiden',
            'Die homologen Chromosomen',
            'Die Zentromere',
            'Die Spindelfasern'
          ],
          correctIndex: 1,
          explanation: 'In der Anaphase I werden die homologen Chromosomen (nicht die Schwesterchromatiden!) getrennt. Dies ist die Reduktionsteilung: Der Chromosomensatz wird von diploid (2n) auf haploid (1n) reduziert. Die Schwesterchromatiden werden erst in der Anaphase II getrennt.'
        },
        {
          question: 'Wie viele genetisch verschiedene Gameten kann ein Mensch allein durch unabhängige Assortierung theoretisch bilden?',
          options: [
            '23',
            '46',
            'Ca. 8,4 Millionen (2²³)',
            'Ca. 70 Billionen (2⁴⁶)'
          ],
          correctIndex: 2,
          explanation: 'Mit 23 Chromosomenpaaren gibt es 2²³ ≈ 8,4 Millionen mögliche Kombinationen durch unabhängige Assortierung in der Metaphase I. Zusammen mit Crossing-over ist die tatsächliche genetische Vielfalt praktisch unbegrenzt.'
        },
        {
          question: 'Was ist Non-Disjunction?',
          options: [
            'Der normale Austausch von DNA beim Crossing-over',
            'Das Ausbleiben der Chromosomentrennung in der Meiose',
            'Die Verdopplung der DNA in der S-Phase',
            'Die Kondensation der Chromosomen in der Prophase'
          ],
          correctIndex: 1,
          explanation: 'Non-Disjunction bezeichnet das fehlerhafte Ausbleiben der Chromosomentrennung in Meiose I (homologe Chromosomen) oder Meiose II (Schwesterchromatiden). Es führt zu Aneuploidie – z. B. Trisomie 21 (Down-Syndrom).'
        }
      ]
    },
    // ==================== 1.11 ====================
    {
      id: 'bio-kap1-uk11',
      title: 'Zelldifferenzierung & Stammzellen',
      content: `Zelldifferenzierung ist der Prozess, durch den eine wenig spezialisierte Zelle zu einem bestimmten Zelltyp mit spezifischer Struktur und Funktion heranreift. Obwohl alle Körperzellen eines Organismus dasselbe Genom besitzen, unterscheiden sich differenzierte Zellen grundlegend in Morphologie und Funktion – ein Neuron sieht völlig anders aus und erfüllt andere Aufgaben als eine Muskelzelle oder ein Erythrozyt. Dies wird durch differentielle Genexpression ermöglicht: In jeder Zelle ist nur ein spezifisches Muster von Genen aktiv, während andere Gene stillgelegt sind. Die Regulation erfolgt auf mehreren Ebenen: durch Transkriptionsfaktoren, epigenetische Modifikationen (DNA-Methylierung, Histonmodifikationen), microRNAs und Chromatinstruktur. Während der Embryonalentwicklung durchlaufen Zellen durch Induktionssignale (z. B. Morphogene, Wachstumsfaktoren) eine zunehmende Spezialisierung. Dieser Prozess ist normalerweise irreversibel – eine ausdifferenzierte Zelle kehrt nicht spontan in einen undifferenzierten Zustand zurück.

Stammzellen sind undifferenzierte Zellen mit zwei Schlüsseleigenschaften: der Fähigkeit zur Selbsterneuerung (sie können sich teilen und dabei ihren Stammzellcharakter beibehalten) und dem Differenzierungspotenzial (sie können sich in spezialisierte Zelltypen entwickeln). Man unterscheidet nach ihrem Potenzial: Totipotente Stammzellen können sich in alle Zelltypen des Organismus einschließlich der extraembryonalen Gewebe (z. B. Plazenta) entwickeln – nur die Zygote und die Blastomeren bis zum 8-Zell-Stadium sind totipotent. Pluripotente Stammzellen (z. B. embryonale Stammzellen aus der inneren Zellmasse der Blastozyste) können sich in alle Zelltypen der drei Keimblätter (Ektoderm, Mesoderm, Endoderm) differenzieren, aber nicht in extraembryonales Gewebe. Multipotente Stammzellen (z. B. hämatopoetische Stammzellen im Knochenmark) können sich nur noch in Zelltypen eines bestimmten Gewebes entwickeln. Unipotente Stammzellen (z. B. Basalzellen der Epidermis) können nur einen Zelltyp hervorbringen.

Apoptose – der programmierte Zelltod – ist ein kontrollierter, energieabhängiger Prozess, der für die Homöostase des Gewebes essentiell ist und sich grundlegend von der Nekrose (unkontrollierter Zelltod durch Schädigung) unterscheidet. Bei der Apoptose schrumpft die Zelle, das Chromatin kondensiert (Pyknose), die DNA wird durch Endonukleasen in Fragmente geschnitten, die Zelle zerfällt in apoptotische Körperchen (Apoptotic Bodies), die von Phagozyten aufgenommen werden – ohne Entzündungsreaktion. Es gibt zwei Hauptwege: den intrinsischen (mitochondrialen) Weg, ausgelöst durch DNA-Schäden oder oxidativen Stress, bei dem Cytochrom c aus den Mitochondrien freigesetzt wird und über das Apoptosom die Caspase-9 aktiviert; und den extrinsischen (Rezeptor-vermittelten) Weg, bei dem extrazelluläre Todessignale (z. B. Fas-Ligand, TNF) über Todesrezeptoren die Caspase-8 aktivieren. Beide Wege münden in die Aktivierung von Effektor-Caspasen (v. a. Caspase-3), die die Zelle kontrolliert abbauen. Das Protein Bcl-2 wirkt antiapoptotisch, Bax und Bak proapoptotisch. Shinya Yamanaka erhielt 2012 den Nobelpreis für die Entdeckung, dass differenzierte Zellen durch die Einführung bestimmter Transkriptionsfaktoren (Oct4, Sox2, Klf4, c-Myc – „Yamanaka-Faktoren") zu induzierten pluripotenten Stammzellen (iPSCs) reprogrammiert werden können.`,
      diagram: 'stem-cells',
      merksaetze: [
        'Stammzellpotenzial: Totipotent (alles) → Pluripotent (drei Keimblätter) → Multipotent (ein Gewebe) → Unipotent (ein Zelltyp) – „Total, Pluri, Multi, Uni = abnehmendes Potenzial"',
        'Apoptose vs. Nekrose: Apoptose = kontrolliert, sauber, keine Entzündung; Nekrose = unkontrolliert, chaotisch, Entzündung'
      ],
      altfrage: {
        question: 'Was unterscheidet pluripotente von totipotenten Stammzellen?',
        answer: 'Totipotente Stammzellen (Zygote, bis 8-Zell-Stadium) können ALLE Zelltypen inklusive extraembryonaler Gewebe (Plazenta) bilden. Pluripotente Stammzellen (embryonale Stammzellen) können alle Zelltypen der drei Keimblätter bilden, aber NICHT extraembryonales Gewebe.'
      },
      klinischerBezug: 'Hämatopoetische Stammzelltransplantation (Knochenmarktransplantation) nutzt die multipotenten Stammzellen des Knochenmarks zur Behandlung von Leukämien und anderen hämatologischen Erkrankungen. Eine Störung der Apoptose spielt bei Krebs eine zentrale Rolle: Viele Tumorzellen überexprimieren das antiapoptotische Bcl-2 (besonders beim follikulären Lymphom durch t(14;18)-Translokation) und entgehen so dem programmierten Zelltod. Der BCL-2-Inhibitor Venetoclax wird therapeutisch bei chronischer lymphatischer Leukämie (CLL) eingesetzt.',
      selfTest: [
        {
          question: 'Welche Stammzellen sind totipotent?',
          options: [
            'Hämatopoetische Stammzellen im Knochenmark',
            'Die Zygote und Blastomeren bis zum 8-Zell-Stadium',
            'Embryonale Stammzellen der inneren Zellmasse',
            'Mesenchymale Stammzellen im Bindegewebe'
          ],
          correctIndex: 1,
          explanation: 'Nur die Zygote und die Blastomeren bis zum 8-Zell-Stadium sind totipotent – sie können alle Zelltypen einschließlich extraembryonaler Gewebe (Plazenta) bilden. Embryonale Stammzellen der inneren Zellmasse sind pluripotent.'
        },
        {
          question: 'Was ist ein Merkmal der Apoptose im Gegensatz zur Nekrose?',
          options: [
            'Zellschwellung und Membranruptur',
            'Freisetzung von Zellinhalt und Entzündungsreaktion',
            'Kontrollierter Abbau ohne Entzündung, Bildung apoptotischer Körperchen',
            'Zufälliger Zelltod durch externe Schädigung'
          ],
          correctIndex: 2,
          explanation: 'Apoptose ist ein kontrollierter, energieabhängiger Prozess: Die Zelle schrumpft, das Chromatin kondensiert, die Zelle zerfällt in apoptotische Körperchen, die phagozytiert werden – ohne Entzündungsreaktion. Nekrose ist unkontrolliert mit Zellschwellung und Entzündung.'
        },
        {
          question: 'Welche Transkriptionsfaktoren werden für die Erzeugung von iPSCs benötigt?',
          options: [
            'p53, Rb, APC, BRCA1',
            'Oct4, Sox2, Klf4, c-Myc (Yamanaka-Faktoren)',
            'Cyclin D, CDK4, E2F, Rb',
            'Fas, TNF, Caspase-8, Caspase-3'
          ],
          correctIndex: 1,
          explanation: 'Shinya Yamanaka (Nobelpreis 2012) entdeckte, dass die vier Transkriptionsfaktoren Oct4, Sox2, Klf4 und c-Myc differenzierte Zellen zu induzierten pluripotenten Stammzellen (iPSCs) reprogrammieren können.'
        }
      ]
    }
  ]
};
