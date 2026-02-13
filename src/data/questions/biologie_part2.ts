export const fragenPart2 = [
  {
    id: 'bio-q-051',
    stichwortId: 'bio-1-10',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Aussage über Lysosomen trifft zu?',
    optionen: [
      'Lysosomen besitzen ein alkalisches Milieu mit pH 8-9',
      'Lysosomen enthalten saure Hydrolasen, die bei pH 5 optimal arbeiten',
      'Lysosomen synthetisieren Proteine für den Export',
      'Lysosomen sind ausschließlich in Pflanzenzellen vorhanden',
      'Lysosomen fusionieren niemals mit anderen Vesikeln'
    ],
    korrekteAntwort: 1,
    erklärung: 'Lysosomen sind membranumschlossene Organellen mit saurem Milieu (pH ~5). Sie enthalten hydrolytische Enzyme (saure Hydrolasen), die bei diesem niedrigen pH-Wert optimal arbeiten und Makromoleküle abbauen können.',
    strategieTipp: 'Das charakteristische Merkmal von Lysosomen ist das saure Milieu. Die Protonenpumpen in der Lysosomenmembran halten aktiv den niedrigen pH-Wert aufrecht.'
  },
  {
    id: 'bio-q-052',
    stichwortId: 'bio-1-10',
    fach: 'biologie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Bei der Autophagie fusionieren Autophagosomen mit Lysosomen. Welche Funktion hat dieser Prozess primär?',
    optionen: [
      'Synthese neuer Zellorganellen',
      'Transport von Proteinen zum Golgi-Apparat',
      'Abbau eigener beschädigter Zellbestandteile zur Recycling',
      'Energiegewinnung durch oxidative Phosphorylierung',
      'Replikation der mitochondrialen DNA'
    ],
    korrekteAntwort: 2,
    erklärung: 'Autophagie ist ein Selbstverdauungsprozess, bei dem defekte oder nicht mehr benötigte Zellorganellen in Autophagosomen eingeschlossen und nach Fusion mit Lysosomen abgebaut werden. Die Abbauprodukte werden recycelt.',
    strategieTipp: 'Auto- bedeutet "selbst", Phagie bedeutet "fressen". Autophagie ist also die "Selbstverdauung" der Zelle zur Qualitätskontrolle und Nährstoffgewinnung.'
  },
  {
    id: 'bio-q-053',
    stichwortId: 'bio-1-10',
    fach: 'biologie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Endosomen entstehen hauptsächlich durch welchen zellulären Prozess?',
    optionen: [
      'Endozytose von Material aus dem Extrazellularraum',
      'Abschnürung vom endoplasmatischen Retikulum',
      'Teilung von Mitochondrien',
      'Fusion von Peroxisomen',
      'Spaltung des Golgi-Apparats'
    ],
    korrekteAntwort: 0,
    erklärung: 'Endosomen sind Vesikel, die durch Endozytose entstehen. Sie nehmen extrazelluläres Material auf und transportieren es im Zellinneren. Frühe Endosomen reifen zu späten Endosomen, die dann mit Lysosomen fusionieren können.',
    strategieTipp: 'Endosomen sind der erste Schritt nach der Aufnahme von Material von außen (Endozytose). Sie sortieren das Material für weiteren Transport oder Abbau.'
  },
  {
    id: 'bio-q-054',
    stichwortId: 'bio-1-10',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Was geschieht bei der Phagozytose mit den aufgenommenen Partikeln?',
    optionen: [
      'Sie werden direkt in den Zellkern transportiert',
      'Sie gelangen ins endoplasmatische Retikulum zur Proteinsynthese',
      'Sie werden in Phagosomen eingeschlossen, die mit Lysosomen fusionieren',
      'Sie werden unverändert durch Exozytose wieder ausgeschleust',
      'Sie werden in Mitochondrien zur Energiegewinnung verwendet'
    ],
    korrekteAntwort: 2,
    erklärung: 'Bei der Phagozytose werden große Partikel (z.B. Bakterien) von der Zelle aufgenommen und in Phagosomen eingeschlossen. Diese fusionieren mit Lysosomen zu Phagolysosomen, wo die Partikel durch lysosomale Enzyme abgebaut werden.',
    strategieTipp: 'Phagozytose ist das "Zellfressen". Immunzellen wie Makrophagen nutzen diesen Prozess, um Krankheitserreger aufzunehmen und mit Hilfe von Lysosomen zu zerstören.'
  },
  {
    id: 'bio-q-055',
    stichwortId: 'bio-1-10',
    fach: 'biologie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Welche Konsequenz hätte ein genetischer Defekt der lysosomalen sauren Hydrolasen?',
    optionen: [
      'Verstärkte Proteinsynthese am rauen ER',
      'Akkumulation von unverdautem Material in den Lysosomen',
      'Erhöhte ATP-Produktion in Mitochondrien',
      'Beschleunigte Zellteilung',
      'Verbesserter Lipidtransport zum Golgi-Apparat'
    ],
    korrekteAntwort: 1,
    erklärung: 'Defekte lysosomale Enzyme führen zu lysosomalen Speicherkrankheiten. Nicht abgebautes Material akkumuliert in den Lysosomen, da die hydrolytischen Enzyme fehlen oder nicht funktionsfähig sind. Beispiele: Morbus Gaucher, Tay-Sachs-Krankheit.',
    strategieTipp: 'Wenn Abbauenzyme fehlen, sammelt sich das Substrat an. Dieses Prinzip gilt für alle Stoffwechseldefekte und ist prüfungsrelevant.'
  },
  {
    id: 'bio-q-056',
    stichwortId: 'bio-1-11',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welches Enzym ist charakteristisch für Peroxisomen und baut Wasserstoffperoxid ab?',
    optionen: [
      'Amylase',
      'DNA-Polymerase',
      'Katalase',
      'Pepsin',
      'Hexokinase'
    ],
    korrekteAntwort: 2,
    erklärung: 'Katalase ist das charakteristische Enzym der Peroxisomen. Sie katalysiert die Reaktion 2 H₂O₂ → 2 H₂O + O₂ und schützt so die Zelle vor dem toxischen Wasserstoffperoxid, das bei oxidativen Prozessen entsteht.',
    strategieTipp: 'Peroxisomen enthalten viele Oxidasen, die H₂O₂ produzieren. Die Katalase baut dieses sofort ab – deshalb der Name "Peroxi-som" (Peroxid-Körper).'
  },
  {
    id: 'bio-q-057',
    stichwortId: 'bio-1-11',
    fach: 'biologie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'In Peroxisomen findet die β-Oxidation sehr langkettiger Fettsäuren statt. Welche Fettsäuren werden dort primär abgebaut?',
    optionen: [
      'Fettsäuren mit 4-6 Kohlenstoffatomen',
      'Fettsäuren mit 8-12 Kohlenstoffatomen',
      'Fettsäuren mit mehr als 22 Kohlenstoffatomen',
      'Nur gesättigte Fettsäuren mit 16 Kohlenstoffatomen',
      'Ausschließlich mehrfach ungesättigte Fettsäuren'
    ],
    korrekteAntwort: 2,
    erklärung: 'Peroxisomen sind spezialisiert auf den Abbau sehr langkettiger Fettsäuren (>C22), die von Mitochondrien nicht effizient abgebaut werden können. Die β-Oxidation in Peroxisomen verkürzt diese, sodass Mitochondrien den weiteren Abbau übernehmen können.',
    strategieTipp: 'Arbeitsteilung: Peroxisomen bauen sehr lange Fettsäuren vor, Mitochondrien übernehmen dann die normale β-Oxidation kürzerer Fettsäuren.'
  },
  {
    id: 'bio-q-058',
    stichwortId: 'bio-1-11',
    fach: 'biologie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welche Hauptfunktion haben Peroxisomen?',
    optionen: [
      'Proteinsynthese für Membranproteine',
      'Oxidative Reaktionen und Entgiftung',
      'Zellteilung und DNA-Replikation',
      'Calciumspeicherung',
      'ATP-Synthese durch Atmungskette'
    ],
    korrekteAntwort: 1,
    erklärung: 'Peroxisomen führen oxidative Reaktionen durch, bei denen H₂O₂ entsteht und sofort durch Katalase abgebaut wird. Sie sind wichtig für Fettsäureabbau, Cholesterinsynthese und Entgiftung von toxischen Substanzen.',
    strategieTipp: 'Peroxisomen sind die "Entgiftungszentren" der Zelle, besonders in Leber und Niere stark vertreten.'
  },
  {
    id: 'bio-q-059',
    stichwortId: 'bio-1-11',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Wasserstoffperoxid (H₂O₂) entsteht in Peroxisomen als Nebenprodukt. Warum ist dessen schneller Abbau essentiell?',
    optionen: [
      'H₂O₂ blockiert die Glykolyse',
      'H₂O₂ hemmt die DNA-Replikation direkt',
      'H₂O₂ ist ein starkes Oxidationsmittel und zellschädigend',
      'H₂O₂ löst sofort Apoptose aus',
      'H₂O₂ verhindert die Proteinfaltung im ER'
    ],
    korrekteAntwort: 2,
    erklärung: 'Wasserstoffperoxid ist ein reaktives Sauerstoffspezies (ROS), das Proteine, Lipide und DNA oxidativ schädigen kann. Die Katalase der Peroxisomen spaltet H₂O₂ sofort in harmlose Produkte (H₂O + O₂), um Zellschäden zu verhindern.',
    strategieTipp: 'ROS (reaktive Sauerstoffspezies) sind generell zellschädigend. Zellen haben verschiedene Schutzmechanismen, z.B. Katalase, Superoxiddismutase, Glutathion.'
  },
  {
    id: 'bio-q-060',
    stichwortId: 'bio-1-12',
    fach: 'biologie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Wo findet die Translation, also die Proteinbiosynthese, in der Zelle statt?',
    optionen: [
      'Im Zellkern',
      'Im Golgi-Apparat',
      'An den Ribosomen',
      'In den Lysosomen',
      'In den Peroxisomen'
    ],
    korrekteAntwort: 2,
    erklärung: 'Ribosomen sind die Orte der Translation (Proteinbiosynthese). Sie können frei im Cytoplasma oder gebunden am rauen endoplasmatischen Retikulum vorkommen und übersetzen mRNA in Aminosäuresequenzen.',
    strategieTipp: 'Ribosomen sind die "Proteinfabriken" der Zelle. Sie lesen die mRNA ab und verknüpfen Aminosäuren zu Proteinen.'
  },
  {
    id: 'bio-q-061',
    stichwortId: 'bio-1-12',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welcher Unterschied besteht zwischen 70S- und 80S-Ribosomen?',
    optionen: [
      '70S-Ribosomen finden sich in Prokaryoten und Mitochondrien, 80S in eukaryotischen Cytoplasma',
      '70S-Ribosomen sind größer als 80S-Ribosomen',
      '70S-Ribosomen synthetisieren nur Lipide, 80S nur Proteine',
      '70S-Ribosomen kommen nur in Pflanzenzellen vor',
      '70S-Ribosomen arbeiten ohne mRNA'
    ],
    korrekteAntwort: 0,
    erklärung: '70S-Ribosomen (50S + 30S Untereinheiten) kommen in Prokaryoten, Mitochondrien und Chloroplasten vor. 80S-Ribosomen (60S + 40S) sind charakteristisch für das Cytoplasma eukaryotischer Zellen. Das "S" steht für Svedberg-Einheit (Sedimentationsköffizient).',
    strategieTipp: 'Die kleineren 70S-Ribosomen in Mitochondrien sind ein Hinweis auf die Endosymbiontentheorie. Antibiotika wie Tetracyclin hemmen spezifisch 70S-Ribosomen.'
  },
  {
    id: 'bio-q-062',
    stichwortId: 'bio-1-12',
    fach: 'biologie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Aus welchen Hauptkomponenten bestehen Ribosomen?',
    optionen: [
      'Nur aus Proteinen',
      'Aus DNA und Lipiden',
      'Aus ribosomaler RNA (rRNA) und ribosomalen Proteinen',
      'Aus mRNA und tRNA',
      'Aus Phospholipiden und Cholesterin'
    ],
    korrekteAntwort: 2,
    erklärung: 'Ribosomen bestehen aus ribosomaler RNA (rRNA) und zahlreichen ribosomalen Proteinen. Die rRNA hat katalytische Funktion (Ribozym) und bildet die Peptidbindung zwischen Aminosäuren. Ribosomen haben zwei Untereinheiten (große und kleine).',
    strategieTipp: 'rRNA ist nicht nur strukturell, sondern auch katalytisch aktiv – ein wichtiges Beispiel für RNA-Enzyme (Ribozyme).'
  },
  {
    id: 'bio-q-063',
    stichwortId: 'bio-1-12',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Freie Ribosomen im Cytoplasma synthetisieren hauptsächlich Proteine für welchen Bestimmungsort?',
    optionen: [
      'Für den Export aus der Zelle',
      'Für das Cytoplasma, den Zellkern und Mitochondrien',
      'Ausschließlich für Lysosomen',
      'Nur für die Plasmamembran',
      'Für den Golgi-Apparat'
    ],
    korrekteAntwort: 1,
    erklärung: 'Freie Ribosomen synthetisieren Proteine, die im Cytoplasma verbleiben oder in Zellkern, Mitochondrien oder Peroxisomen transportiert werden. Proteine für ER, Golgi, Lysosomen oder Export werden an membrangebundenen Ribosomen des rauen ER synthetisiert.',
    strategieTipp: 'Faustregel: Freie Ribosomen → cytosolische Proteine. ER-gebundene Ribosomen → Membran- und Exportproteine.'
  },
  {
    id: 'bio-q-064',
    stichwortId: 'bio-1-12',
    fach: 'biologie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welche Funktion haben ribosomale Proteine?',
    optionen: [
      'Sie transportieren Sauerstoff',
      'Sie stabilisieren die Ribosomenstruktur und unterstützen die Translation',
      'Sie speichern genetische Information',
      'Sie bauen Lipide ab',
      'Sie pumpen Ionen durch Membranen'
    ],
    korrekteAntwort: 1,
    erklärung: 'Ribosomale Proteine stabilisieren die dreidimensionale Struktur der rRNA und unterstützen die Funktion des Ribosoms bei der Translation. Die eigentliche Katalyse der Peptidbindung übernimmt aber die rRNA (Ribozym).',
    strategieTipp: 'Ribosomen sind RNA-Protein-Komplexe, bei denen die RNA die Hauptarbeit leistet und Proteine unterstützend wirken.'
  },
  {
    id: 'bio-q-065',
    stichwortId: 'bio-1-13',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Funktion haben Proteasomen in der Zelle?',
    optionen: [
      'Synthese neuer Proteine',
      'Abbau von Proteinen, die mit Ubiquitin markiert wurden',
      'Transport von Proteinen zum Zellkern',
      'Faltung von Proteinen im ER',
      'Speicherung von Proteinen in Vesikeln'
    ],
    korrekteAntwort: 1,
    erklärung: 'Proteasomen sind zylinderförmige Proteinkomplexe, die ubiquitinierte Proteine abbauen. Das Ubiquitin-Proteasom-System ist der Hauptweg für den gezielten Abbau fehlgefalteter, beschädigter oder nicht mehr benötigter Proteine im Cytoplasma.',
    strategieTipp: 'Ubiquitin ist das "Müllmarker-Molekül" der Zelle. Proteine mit Ubiquitin-Kette werden zum Proteasom transportiert und dort abgebaut.'
  },
  {
    id: 'bio-q-066',
    stichwortId: 'bio-1-13',
    fach: 'biologie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Welche Rolle spielt Ubiquitin im Proteinabbau?',
    optionen: [
      'Ubiquitin faltet Proteine in ihre native Form',
      'Ubiquitin markiert Proteine für den Abbau im Proteasom',
      'Ubiquitin transportiert Proteine durch die Kernporen',
      'Ubiquitin synthetisiert neue Aminosäuren',
      'Ubiquitin repariert beschädigte DNA'
    ],
    korrekteAntwort: 1,
    erklärung: 'Ubiquitin ist ein kleines Protein (76 Aminosäuren), das kovalent an Zielproteine gebunden wird (Ubiquitinierung). Diese Markierung signalisiert den Abbau durch das 26S-Proteasom. Multiple Ubiquitin-Moleküle bilden eine Poly-Ubiquitin-Kette.',
    strategieTipp: 'Das Ubiquitin-Proteasom-System ist hochspezifisch und reguliert viele zelluläre Prozesse wie Zellzyklus, Signaltransduktion und Qualitätskontrolle.'
  },
  {
    id: 'bio-q-067',
    stichwortId: 'bio-1-13',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Wo befinden sich Zentriolen und welche Hauptfunktion haben sie?',
    optionen: [
      'Im Zellkern, DNA-Replikation',
      'In Mitochondrien, ATP-Synthese',
      'Im Centrosom, Organisation des Spindelapparats bei der Zellteilung',
      'Im Golgi-Apparat, Proteinsortierung',
      'In Lysosomen, Proteinabbau'
    ],
    korrekteAntwort: 2,
    erklärung: 'Zentriolen sind paarweise im Centrosom lokalisiert und organisieren die Mikrotubuli. Bei der Zellteilung bilden sie die Pole des Spindelapparats, der die Chromosomen auf die Tochterzellen verteilt. Zentriolen haben eine charakteristische 9×3-Struktur (9 Tripletts).',
    strategieTipp: 'Centrosom = Mikrotubuli-Organisationszentrum (MTOC). Zentriolen sind die Kernstrukturen des Centrosoms und essentiell für korrekte Zellteilung.'
  },
  {
    id: 'bio-q-068',
    stichwortId: 'bio-1-13',
    fach: 'biologie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Aus welchen Strukturen bestehen Zentriolen hauptsächlich?',
    optionen: [
      'Aus DNA-Doppelhelices',
      'Aus Lipidmembranen',
      'Aus Mikrotubuli in 9×3-Anordnung',
      'Aus Ribosomen',
      'Aus Intermediärfilamenten'
    ],
    korrekteAntwort: 2,
    erklärung: 'Zentriolen bestehen aus neun Mikrotubuli-Tripletts, die zylindrisch angeordnet sind (9×3-Struktur). Sie sind etwa 0,2 µm im Durchmesser und 0,4 µm lang. Zwei Zentriolen stehen senkrecht züinander und bilden das Centrosom.',
    strategieTipp: 'Unterscheide die Strukturen: Zentriolen 9×3 (Tripletts), Kinozilien/Geißeln 9×2+2 (Dupletts plus zentrale Mikrotubuli).'
  },
  {
    id: 'bio-q-069',
    stichwortId: 'bio-1-14',
    fach: 'biologie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welche drei Hauptkomponenten bilden das Zytoskelett eukaryotischer Zellen?',
    optionen: [
      'DNA, RNA und Proteine',
      'Mikrofilamente, Intermediärfilamente und Mikrotubuli',
      'Ribosomen, Lysosomen und Peroxisomen',
      'Lipide, Kohlenhydrate und Nucleotide',
      'Mitochondrien, Chloroplasten und Zellkern'
    ],
    korrekteAntwort: 1,
    erklärung: 'Das Zytoskelett besteht aus drei Typen von Proteinfilamenten: Mikrofilamente (Aktin, ~7 nm), Intermediärfilamente (~10 nm) und Mikrotubuli (Tubulin, ~25 nm). Sie geben der Zelle Form, ermöglichen Bewegung und organisieren Zellorganellen.',
    strategieTipp: 'Merke die Größenordnung: Mikrofilamente (dünn) < Intermediärfilamente (mittel) < Mikrotubuli (dick). Alle drei haben unterschiedliche Funktionen.'
  },
  {
    id: 'bio-q-070',
    stichwortId: 'bio-1-14',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Mikrofilamente bestehen hauptsächlich aus welchem Protein?',
    optionen: [
      'Tubulin',
      'Aktin',
      'Keratin',
      'Kollagen',
      'Myosin'
    ],
    korrekteAntwort: 1,
    erklärung: 'Mikrofilamente (auch Aktinfilamente genannt) bestehen aus polymerisiertem Aktin. Sie sind etwa 7 nm dick und spielen eine zentrale Rolle bei Zellbewegung, Muskelkontraktion (zusammen mit Myosin) und Aufrechterhaltung der Zellform.',
    strategieTipp: 'Aktin ist eines der häufigsten Proteine in eukaryotischen Zellen. Es kann zwischen G-Aktin (globulär, monomer) und F-Aktin (filamentös, polymer) wechseln.'
  },
  {
    id: 'bio-q-071',
    stichwortId: 'bio-1-14',
    fach: 'biologie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Welches Motorprotein bewegt sich entlang von Aktinfilamenten und ist essentiell für Muskelkontraktion?',
    optionen: [
      'Kinesin',
      'Dynein',
      'Myosin',
      'Tubulin',
      'Vimentin'
    ],
    korrekteAntwort: 2,
    erklärung: 'Myosin ist ein Motorprotein, das ATP-abhängig entlang von Aktinfilamenten gleitet. In Muskelzellen bildet Myosin mit Aktin das kontraktile System. Myosin-Köpfe binden an Aktin und führen unter ATP-Verbrauch Konformationsänderungen durch.',
    strategieTipp: 'Motorproteine auf Aktin: Myosin. Motorproteine auf Mikrotubuli: Kinesin (Plus-Ende) und Dynein (Minus-Ende). Wichtig für Transportprozesse!'
  },
  {
    id: 'bio-q-072',
    stichwortId: 'bio-1-14',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Mikrotubuli bestehen aus welchen Proteinuntereinheiten?',
    optionen: [
      'α-Aktin und β-Aktin',
      'α-Tubulin und β-Tubulin',
      'Keratin und Vimentin',
      'Kollagen und Elastin',
      'Myosin und Aktin'
    ],
    korrekteAntwort: 1,
    erklärung: 'Mikrotubuli sind hohle Röhren aus α- und β-Tubulin-Heterodimeren. 13 Protofilamente bilden einen Mikrotubulus mit ~25 nm Durchmesser. Sie sind dynamisch und können schnell polymerisieren oder depolymerisieren.',
    strategieTipp: 'Mikrotubuli haben ein Plus-Ende (schnelles Wachstum) und ein Minus-Ende (langsames Wachstum). Sie sind die "Autobahnen" für intrazellulären Transport.'
  },
  {
    id: 'bio-q-073',
    stichwortId: 'bio-1-14',
    fach: 'biologie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Kinesin und Dynein sind Motorproteine, die entlang von Mikrotubuli wandern. In welche Richtungen bewegen sie sich?',
    optionen: [
      'Beide bewegen sich zum Plus-Ende',
      'Beide bewegen sich zum Minus-Ende',
      'Kinesin zum Plus-Ende, Dynein zum Minus-Ende',
      'Kinesin zum Minus-Ende, Dynein zum Plus-Ende',
      'Beide bewegen sich in beide Richtungen gleichzeitig'
    ],
    korrekteAntwort: 2,
    erklärung: 'Kinesin transportiert Fracht vom Zellzentrum zur Peripherie (Plus-Ende der Mikrotubuli). Dynein bewegt sich in entgegengesetzter Richtung zum Minus-Ende (Richtung Centrosom). Beide nutzen ATP als Energiequelle für den gerichteten Transport.',
    strategieTipp: 'Eselsbrücke: Kinesin = "kommt raus" (Plus-Ende, Peripherie), Dynein = "drinnen" (Minus-Ende, Zellzentrum). Beide sind essentiell für Vesikeltransport.'
  },
  {
    id: 'bio-q-074',
    stichwortId: 'bio-1-15',
    fach: 'biologie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welche Zellkontakte versiegeln den Interzellularraum und verhindern den parazellulären Transport?',
    optionen: [
      'Gap Junctions',
      'Desmosomen',
      'Tight Junctions (Zonulae occludentes)',
      'Hemidesmosomen',
      'Fokale Adhäsionen'
    ],
    korrekteAntwort: 2,
    erklärung: 'Tight Junctions (Zonulae occludentes) sind dichte Verbindungen zwischen Epithelzellen, die den Raum zwischen den Zellen abdichten. Sie verhindern den unkontrollierten Durchtritt von Molekülen zwischen den Zellen (parazellulärer Transport) und trennen apikale von basolateraler Membran.',
    strategieTipp: 'Tight Junctions sind besonders wichtig in Barriere-Epithelien wie Darmepithel oder Blut-Hirn-Schranke, wo selektive Durchlässigkeit essentiell ist.'
  },
  {
    id: 'bio-q-075',
    stichwortId: 'bio-1-15',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Desmosomen haben primär welche Funktion?',
    optionen: [
      'Kommunikation zwischen Zellen durch Ionenaustausch',
      'Mechanische Verankerung und Stabilität zwischen Zellen',
      'Abdichtung des Interzellularraums',
      'Transport von Makromolekülen',
      'Energieübertragung zwischen Zellen'
    ],
    korrekteAntwort: 1,
    erklärung: 'Desmosomen (Maculae adherentes) sind punktförmige Haftkontakte, die mechanische Stabilität zwischen Zellen gewährleisten. Sie verbinden die Intermediärfilamente benachbarter Zellen und sind besonders wichtig in mechanisch beanspruchten Geweben wie Haut und Herzmuskel.',
    strategieTipp: 'Desmo- bedeutet "Bindung". Desmosomen halten Zellen wie Nieten zusammen, besonders in Geweben, die Zugkräften ausgesetzt sind.'
  },
  {
    id: 'bio-q-076',
    stichwortId: 'bio-1-15',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Gap Junctions ermöglichen welche Art der interzellulären Kommunikation?',
    optionen: [
      'Austausch von großen Proteinen zwischen Zellen',
      'Direkte cytoplasmatische Verbindung für kleine Moleküle und Ionen',
      'Transport von DNA zwischen Zellen',
      'Mechanische Verankerung der Zellen',
      'Abdichtung gegen Pathogene'
    ],
    korrekteAntwort: 1,
    erklärung: 'Gap Junctions (Nexus) sind Kanäle aus Connexin-Proteinen, die das Cytoplasma benachbarter Zellen direkt verbinden. Sie erlauben den Austausch von Ionen, Metaboliten und kleinen Molekülen (<1000 Da) und ermöglichen so elektrische und metabolische Kopplung.',
    strategieTipp: 'Gap Junctions sind essentiell für koordinierte Aktivität in Herzmuskel (elektrische Erregungsweiterleitung) und glatten Muskelzellen.'
  },
  {
    id: 'bio-q-077',
    stichwortId: 'bio-1-15',
    fach: 'biologie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Hemidesmosomen unterscheiden sich von Desmosomen dadurch, dass sie:',
    optionen: [
      'Zwei Zellen miteinander verbinden',
      'Eine Zelle mit der extrazellulären Matrix (Basallamina) verankern',
      'Ionenkanäle zwischen Zellen bilden',
      'Den Interzellularraum abdichten',
      'Ausschließlich in Nervenzellen vorkommen'
    ],
    korrekteAntwort: 1,
    erklärung: 'Hemidesmosomen sind "halbe Desmosomen", die Epithelzellen mit der darunterliegenden Basallamina (extrazelluläre Matrix) verbinden. Sie nutzen Integrine statt Cadherine und verankern die Zelle am Bindegewebe. Wichtig für die Stabilität von Epithelien.',
    strategieTipp: 'Hemi- bedeutet "halb". Während Desmosomen Zell-Zell-Kontakte sind, verbinden Hemidesmosomen Zelle-Matrix. Defekte führen zu Hautblasenbildung (z.B. epidermolysis bullosa).'
  },
  {
    id: 'bio-q-078',
    stichwortId: 'bio-1-15',
    fach: 'biologie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welche Zellkontakte spielen eine wichtige Rolle bei der elektrischen Kopplung von Herzmuskelzellen?',
    optionen: [
      'Tight Junctions',
      'Hemidesmosomen',
      'Gap Junctions',
      'Fokale Adhäsionen',
      'Synapsen'
    ],
    korrekteAntwort: 2,
    erklärung: 'Gap Junctions in Glanzstreifen des Herzmuskels ermöglichen die schnelle Weiterleitung elektrischer Erregung zwischen Herzmuskelzellen. Dies ist essentiell für die synchrone Kontraktion des Herzens als funktionelles Syncytium.',
    strategieTipp: 'Das Herz arbeitet als elektrische Einheit dank Gap Junctions. Störungen können zu Arrhythmien führen.'
  },
  {
    id: 'bio-q-079',
    stichwortId: 'bio-1-16',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Kinozilien haben welche charakteristische interne Struktur?',
    optionen: [
      '9×3-Struktur (9 Tripletts)',
      '9×2+2-Struktur (9 Dupletts plus 2 zentrale Mikrotubuli)',
      '8×2-Struktur',
      'Ungeordnete Mikrotubuli',
      'Keine Mikrotubuli'
    ],
    korrekteAntwort: 1,
    erklärung: 'Kinozilien (bewegliche Zilien) und Geißeln haben eine 9×2+2-Struktur: 9 periphere Mikrotubuli-Dupletts umgeben 2 zentrale Mikrotubuli. Diese Struktur ist essentiell für die Beweglichkeit. Dynein-Arme zwischen den Dupletts erzeugen die Schlagbewegung.',
    strategieTipp: 'Unterscheide: Kinozilien/Geißeln = 9×2+2 (beweglich), Zentriolen = 9×3 (organisieren Spindelapparat), primäre Zilien = 9×2+0 (sensorisch, unbeweglich).'
  },
  {
    id: 'bio-q-080',
    stichwortId: 'bio-1-16',
    fach: 'biologie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Wo finden sich beim Menschen Kinozilien mit wichtiger Funktion?',
    optionen: [
      'In der Skelettmuskulatur',
      'Im Atemwegsepithel (Trachea, Bronchien)',
      'In Erythrozyten',
      'In Adipozyten',
      'Im Knorpelgewebe'
    ],
    korrekteAntwort: 1,
    erklärung: 'Kinozilien finden sich im respiratorischen Epithel der Atemwege, wo sie durch koordinierte Schlagbewegung Schleim und Partikel Richtung Rachen transportieren (mukoziliäre Clearance). Auch in Eileiter und Ependym des ZNS vorhanden.',
    strategieTipp: 'Bei Kartagener-Syndrom (primäre ziliäre Dyskinesie) sind Zilien dysfunktional → chronische Atemwegsinfekte, Bronchiektasen, oft Situs inversus.'
  },
  {
    id: 'bio-q-081',
    stichwortId: 'bio-1-16',
    fach: 'biologie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Mikrovilli unterscheiden sich von Kinozilien durch welches Merkmal?',
    optionen: [
      'Mikrovilli sind beweglich durch Dynein-Arme',
      'Mikrovilli haben 9×2+2-Struktur',
      'Mikrovilli enthalten ein Aktin-Filamentbündel und sind unbeweglich',
      'Mikrovilli kommen nur in Einzellern vor',
      'Mikrovilli haben eine Membran aus Chitin'
    ],
    korrekteAntwort: 2,
    erklärung: 'Mikrovilli sind fingerförmige Ausstülpungen der Zellmembran mit einem Kern aus Aktin-Filamenten (nicht Mikrotubuli). Sie sind unbeweglich und vergrößern die Zelloberfläche, z.B. im Dünndarmepithel für verbesserte Absorption (Bürstensaum).',
    strategieTipp: 'Mikrovilli = Oberflächenvergrößerung (Absorption). Kinozilien = Bewegung (Transport). Unterschiedliche Struktur und Funktion!'
  },
  {
    id: 'bio-q-082',
    stichwortId: 'bio-1-17',
    fach: 'biologie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welcher Transportmechanismus benötigt keine Energie (ATP) und erfolgt entlang des Konzentrationsgradienten?',
    optionen: [
      'Aktiver Transport',
      'Endozytose',
      'Exozytose',
      'Diffusion',
      'Na⁺/K⁺-ATPase'
    ],
    korrekteAntwort: 3,
    erklärung: 'Diffusion ist der passive Transport von Molekülen entlang des Konzentrationsgefälles (von hoher zu niedriger Konzentration) ohne Energieverbrauch. Sie erfolgt aufgrund der thermischen Bewegung der Teilchen bis zum Konzentrationsausgleich.',
    strategieTipp: 'Passive Prozesse (Diffusion, Osmose) benötigen keine Energie, laufen aber nur bergab (entlang des Gradienten). Aktive Prozesse benötigen ATP und können gegen den Gradienten arbeiten.'
  },
  {
    id: 'bio-q-083',
    stichwortId: 'bio-1-17',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Osmose ist die Diffusion von welchem Stoff durch eine semipermeable Membran?',
    optionen: [
      'Glucose',
      'Proteine',
      'Wasser',
      'Ionen',
      'Lipide'
    ],
    korrekteAntwort: 2,
    erklärung: 'Osmose ist die Diffusion von Wasser durch eine semipermeable Membran von einer Lösung mit niedriger Solutkonzentration (hypoton) zu einer mit hoher Solutkonzentration (hyperton), um die Konzentrationen auszugleichen.',
    strategieTipp: 'Wasser wandert immer dorthin, wo mehr gelöste Teilchen sind. In hypertonem Medium schrumpfen Zellen, in hypotonem Medium schwellen sie an.'
  },
  {
    id: 'bio-q-084',
    stichwortId: 'bio-1-17',
    fach: 'biologie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Die Na⁺/K⁺-ATPase ist ein Beispiel für welche Art von Transport?',
    optionen: [
      'Passive Diffusion',
      'Osmose',
      'Primär aktiver Transport',
      'Sekundär aktiver Transport',
      'Erleichterte Diffusion'
    ],
    korrekteAntwort: 2,
    erklärung: 'Die Na⁺/K⁺-ATPase ist ein primär aktiver Transporter, der unter direktem ATP-Verbrauch 3 Na⁺-Ionen aus der Zelle und 2 K⁺-Ionen in die Zelle pumpt, gegen deren Konzentrationsgradient. Sie erzeugt das Membranpotential und ist essentiell für zelluläre Funktionen.',
    strategieTipp: 'Primär aktiv = nutzt direkt ATP. Sekundär aktiv = nutzt Gradienten, die von primär aktiven Transportern erzeugt wurden (z.B. Na⁺-Glucose-Symport).'
  },
  {
    id: 'bio-q-085',
    stichwortId: 'bio-1-17',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Beim sekundär aktiven Transport wird:',
    optionen: [
      'Direkt ATP gespalten',
      'Ein Konzentrationsgradient genutzt, der durch primär aktiven Transport erzeugt wurde',
      'Nur Wasser transportiert',
      'Keine Energie benötigt',
      'Nur durch Diffusion gearbeitet'
    ],
    korrekteAntwort: 1,
    erklärung: 'Sekundär aktiver Transport nutzt Ionengradienten (z.B. Na⁺-Gradient), die durch primär aktive Transporter (z.B. Na⁺/K⁺-ATPase) aufgebaut wurden, um andere Stoffe gegen deren Gradienten zu transportieren. Beispiel: Na⁺-Glucose-Symport im Darm.',
    strategieTipp: 'Der Na⁺-Gradient ist die "Währung" für viele sekundär aktive Transporter. Die Na⁺/K⁺-ATPase lädt diese "Batterie" auf.'
  },
  {
    id: 'bio-q-086',
    stichwortId: 'bio-1-17',
    fach: 'biologie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Endozytose bezeichnet welchen Prozess?',
    optionen: [
      'Ausschleusung von Vesikeln aus der Zelle',
      'Aufnahme von Material durch Einstülpung der Zellmembran',
      'Passive Diffusion durch die Membran',
      'ATP-Synthese in Mitochondrien',
      'DNA-Replikation im Zellkern'
    ],
    korrekteAntwort: 1,
    erklärung: 'Bei der Endozytose stülpt sich die Plasmamembran ein und schnürt Vesikel ab, die extrazelluläres Material in die Zelle aufnehmen. Formen: Phagozytose (Feststoffe), Pinozytose (Flüssigkeit), rezeptorvermittelte Endozytose (spezifische Moleküle).',
    strategieTipp: 'Endo- = hinein, Exo- = hinaus. Endozytose nimmt auf, Exozytose gibt ab. Beide sind energieabhängige Prozesse.'
  },
  {
    id: 'bio-q-087',
    stichwortId: 'bio-1-17',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Exozytose wird genutzt für:',
    optionen: [
      'Aufnahme von Nährstoffen',
      'Sekretion von Proteinen und Neurotransmittern',
      'Passive Diffusion von Gasen',
      'Osmotischen Wasserausgleich',
      'DNA-Synthese'
    ],
    korrekteAntwort: 1,
    erklärung: 'Bei der Exozytose fusionieren intrazelluläre Vesikel mit der Plasmamembran und geben ihren Inhalt nach außen ab. Wichtig für Sekretion von Hormonen, Neurotransmittern, Verdauungsenzymen und Insertion von Membranproteinen.',
    strategieTipp: 'Exozytose ist essentiell für Signalübertragung (Synapse) und Sekretion. Insulin-freisetzende β-Zellen nutzen z.B. regulierte Exozytose.'
  },
  {
    id: 'bio-q-088',
    stichwortId: 'bio-1-17',
    fach: 'biologie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Was würde passieren, wenn die Na⁺/K⁺-ATPase in einer Zelle gehemmt wird (z.B. durch Ouabain)?',
    optionen: [
      'Das Membranpotential bleibt völlig unverändert',
      'Na⁺ akkumuliert intrazellulär, K⁺ verlässt die Zelle, Membranpotential bricht zusammen',
      'Die Zelle produziert mehr ATP',
      'Der Zellkern wird größer',
      'Die Proteinsynthese wird gesteigert'
    ],
    korrekteAntwort: 1,
    erklärung: 'Hemmung der Na⁺/K⁺-ATPase führt zur Störung der Ionengradienten: Na⁺ steigt intrazellulär an, K⁺ sinkt. Das Membranpotential depolarisiert und bricht zusammen. Sekundär aktive Transporter versagen, die Zelle schwillt osmotisch an und kann sterben.',
    strategieTipp: 'Die Na⁺/K⁺-ATPase ist lebenswichtig. Sie verbraucht ~30% der zellulären ATP-Produktion und ist Ziel von Giften wie Herzglykosiden (Digoxin, Ouabain).'
  },
  {
    id: 'bio-q-089',
    stichwortId: 'bio-1-18',
    fach: 'biologie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Der Zellzyklus besteht aus welchen Hauptphasen?',
    optionen: [
      'Nur Mitose',
      'G1-, S-, G2-Phase und Mitose (M-Phase)',
      'Nur DNA-Replikation',
      'Prophase, Metaphase, Anaphase',
      'Nur G0-Phase'
    ],
    korrekteAntwort: 1,
    erklärung: 'Der Zellzyklus umfasst die Interphase (G1-, S-, G2-Phase) und die M-Phase (Mitose). G1: Zellwachstum, S: DNA-Replikation, G2: Vorbereitung auf Teilung, M: Kernteilung. Ruhende Zellen sind in G0-Phase.',
    strategieTipp: 'Interphase ist die längste Phase (~90% des Zellzyklus). Die Zelle verbringt die meiste Zeit mit Wachstum und DNA-Verdopplung, nicht mit Teilung.'
  },
  {
    id: 'bio-q-090',
    stichwortId: 'bio-1-18',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'In welcher Phase des Zellzyklus wird die DNA repliziert?',
    optionen: [
      'G1-Phase',
      'S-Phase',
      'G2-Phase',
      'M-Phase',
      'G0-Phase'
    ],
    korrekteAntwort: 1,
    erklärung: 'Die DNA-Replikation erfolgt in der S-Phase (Synthese-Phase). Dabei wird das Genom vollständig verdoppelt, sodass jedes Chromosom aus zwei identischen Schwesterchromatiden besteht, die am Centromer verbunden sind.',
    strategieTipp: 'S = Synthese (von DNA). Nach der S-Phase hat die Zelle 4n DNA-Gehalt (diploid, aber verdoppelt), vor der S-Phase 2n.'
  },
  {
    id: 'bio-q-091',
    stichwortId: 'bio-1-18',
    fach: 'biologie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Welche Phase der Mitose ist durch die Anordnung der Chromosomen in der Äquatorialebene charakterisiert?',
    optionen: [
      'Prophase',
      'Metaphase',
      'Anaphase',
      'Telophase',
      'Interphase'
    ],
    korrekteAntwort: 1,
    erklärung: 'In der Metaphase ordnen sich die Chromosomen (bestehend aus zwei Schwesterchromatiden) in der Äquatorialebene an. Die Kinetochoren sind mit Spindelfasern verbunden. Der Metaphase-Checkpoint prüft, ob alle Chromosomen korrekt angeheftet sind.',
    strategieTipp: 'Mitose-Reihenfolge: Prophase (Kondensation) → Metaphase (Äquatorialebene) → Anaphase (Trennung) → Telophase (Dekondensation). PMAT als Merkspruch.'
  },
  {
    id: 'bio-q-092',
    stichwortId: 'bio-1-18',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Was ist der Hauptunterschied zwischen Meiose I und Mitose?',
    optionen: [
      'Meiose I hat keine Prophase',
      'In Meiose I werden homologe Chromosomenpaare getrennt (Reduktion zu haploid)',
      'Meiose I verdoppelt die DNA nicht',
      'Meiose I findet nur in Bakterien statt',
      'Meiose I hat keine Spindelfasern'
    ],
    korrekteAntwort: 1,
    erklärung: 'In Meiose I werden homologe Chromosomen getrennt (Reduktionsteilung), wodurch der Chromosomensatz von diploid (2n) auf haploid (n) reduziert wird. In Mitose werden Schwesterchromatiden getrennt, Chromosomensatz bleibt gleich. Meiose I ist Teil der Gametenbildung.',
    strategieTipp: 'Meiose I = Reduktionsteilung (2n → n), Meiose II = ähnlich wie Mitose (n → n). Crossing-over in Prophase I erzeugt genetische Variabilität.'
  },
  {
    id: 'bio-q-093',
    stichwortId: 'bio-1-18',
    fach: 'biologie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Das Tumorsuppressorprotein p53 hat welche zentrale Funktion im Zellzyklus?',
    optionen: [
      'Beschleunigung der DNA-Replikation',
      'Stopp des Zellzyklus bei DNA-Schäden, Induktion von Reparatur oder Apoptose',
      'Förderung der Mitose ohne Kontrolle',
      'Abbau von Cyclin-abhängigen Kinasen',
      'Aktivierung von Wachstumsfaktoren'
    ],
    korrekteAntwort: 1,
    erklärung: 'p53 ist der "Wächter des Genoms". Bei DNA-Schäden aktiviert p53 Zellzyklus-Arrest (G1-Checkpoint), DNA-Reparaturgene oder Apoptose. Mutationen in p53 (häufigste Mutation in Tumoren) führen zu unkontrollierter Teilung beschädigter Zellen.',
    strategieTipp: 'p53-Defekt → Kontrollverlust → Krebs. Über 50% aller Tumoren haben p53-Mutationen. p53 ist eines der wichtigsten Tumorsuppressorgene.'
  },
  {
    id: 'bio-q-094',
    stichwortId: 'bio-1-18',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Cycline und cyclinabhängige Kinasen (CDKs) regulieren welchen zellulären Prozess?',
    optionen: [
      'DNA-Transkription',
      'Fortschreiten des Zellzyklus durch Kontrollpunkte',
      'Translation an Ribosomen',
      'Lipidsynthese',
      'Ionentransport'
    ],
    korrekteAntwort: 1,
    erklärung: 'Cycline sind regulatorische Proteine, deren Konzentration im Zellzyklus schwankt. Sie aktivieren CDKs (cyclin-dependent kinases), die Zellzyklus-Übergänge kontrollieren (z.B. G1/S, G2/M). Der Cyclin-CDK-Komplex phosphoryliert Zielproteine und treibt den Zellzyklus voran.',
    strategieTipp: 'Cyclin-Level steigen und fallen periodisch. CDKs sind konstant vorhanden, aber nur aktiv, wenn Cyclin bindet. Kontrollierte Degradation von Cyclinen stoppt Zellzyklus-Progression.'
  },
  {
    id: 'bio-q-095',
    stichwortId: 'bio-1-18',
    fach: 'biologie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Was passiert in der Anaphase der Mitose?',
    optionen: [
      'Chromosomen kondensieren',
      'Schwesterchromatiden werden zu entgegengesetzten Zellpolen gezogen',
      'Kernhülle bildet sich neu',
      'DNA wird repliziert',
      'Chromosomen ordnen sich in der Äquatorialebene'
    ],
    korrekteAntwort: 1,
    erklärung: 'In der Anaphase werden die Schwesterchromatiden am Centromer getrennt und durch Verkürzung der Spindelfasern zu entgegengesetzten Zellpolen gezogen. Jeder Pol erhält einen vollständigen Chromosomensatz.',
    strategieTipp: 'Anaphase = Auseinanderziehen. Die Spindelfasern verkürzen sich aktiv durch Depolymerisation von Mikrotubuli und ziehen die Chromatiden auseinander.'
  },
  {
    id: 'bio-q-096',
    stichwortId: 'bio-1-19',
    fach: 'biologie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Apoptose ist:',
    optionen: [
      'Unkontrollierter Zelltod durch Verletzung',
      'Programmierter, kontrollierter Zelltod',
      'Zellteilung durch Mitose',
      'Fusion zweier Zellen',
      'Endozytose von Bakterien'
    ],
    korrekteAntwort: 1,
    erklärung: 'Apoptose ist der programmierte Zelltod, ein aktiver, energieabhängiger Prozess, bei dem Zellen kontrolliert absterben ohne Entzündungsreaktion auszulösen. Wichtig für Entwicklung (z.B. Finger-Trennung im Embryo) und Entfernung geschädigter/alter Zellen.',
    strategieTipp: 'Apoptose ist "Zellselbstmord" – geordnet und sauber. Nekrose ist "Zellmord" – chaotisch mit Entzündung. Beide sind fundamental verschieden.'
  },
  {
    id: 'bio-q-097',
    stichwortId: 'bio-1-19',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Enzyme sind zentral für die Durchführung der Apoptose?',
    optionen: [
      'Lipasen',
      'Caspasen',
      'Amylasen',
      'DNA-Polymerasen',
      'Katalase'
    ],
    korrekteAntwort: 1,
    erklärung: 'Caspasen sind Cysteinproteasen, die in einer Kaskade aktiviert werden und zelluläre Proteine spalten, was zur Apoptose führt. Initiatorcaspasen (Caspase-8, -9) starten die Kaskade, Effektorcaspasen (Caspase-3, -6, -7) führen die Zelldemontage durch.',
    strategieTipp: 'Caspasen-Kaskade ist wie eine Lawine: Einmal gestartet, verstärkt sie sich selbst. Apoptose ist irreversibel, sobald Effektorcaspasen aktiv sind.'
  },
  {
    id: 'bio-q-098',
    stichwortId: 'bio-1-19',
    fach: 'biologie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Was ist ein wesentlicher Unterschied zwischen Apoptose und Nekrose?',
    optionen: [
      'Apoptose löst Entzündung aus, Nekrose nicht',
      'Bei Nekrose schrumpft die Zelle, bei Apoptose schwillt sie an',
      'Apoptose ist kontrolliert ohne Entzündung, Nekrose unkontrolliert mit Entzündung',
      'Nekrose ist energieabhängig, Apoptose nicht',
      'Beide sind identisch'
    ],
    korrekteAntwort: 2,
    erklärung: 'Apoptose ist programmiert, energieabhängig, Zelle schrumpft, DNA wird fragmentiert, keine Entzündung. Nekrose ist pathologisch durch Schädigung, Zelle schwillt an, Membran platzt, Zellinhalt löst Entzündung aus. Apoptose ist "sauber", Nekrose "schmutzig".',
    strategieTipp: 'Apoptose = physiologisch, geordnet, Membran intakt (apoptotische Körperchen werden phagozytiert). Nekrose = pathologisch, chaotisch, Membranruptur.'
  },
  {
    id: 'bio-q-099',
    stichwortId: 'bio-1-19',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche physiologische Bedeutung hat Apoptose während der Embryonalentwicklung?',
    optionen: [
      'Keine Bedeutung',
      'Formung von Strukturen wie Trennung der Finger durch Abbau von Gewebe',
      'Ausschließlich Abwehr von Pathogenen',
      'Energiegewinnung',
      'DNA-Replikation'
    ],
    korrekteAntwort: 1,
    erklärung: 'Apoptose ist essentiell für Morphogenese: Trennung der Finger/Zehen (Abbau der Schwimmhäute), Formung des Nervensystems (Entfernung überzähliger Neuronen), Entwicklung des Immunsystems (Deletion autoreaktiver T-Zellen). Defekte Apoptose führt zu Fehlbildungen.',
    strategieTipp: 'Entwicklung ist nicht nur Wachstum, sondern auch gezielter Abbau. Etwa 50% aller Neuronen sterben während der Entwicklung durch Apoptose.'
  },
  {
    id: 'bio-q-100',
    stichwortId: 'bio-1-19',
    fach: 'biologie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Welche Konsequenz hätte ein Defekt der Apoptose für einen Organismus?',
    optionen: [
      'Verstärkte Immunabwehr',
      'Akkumulation geschädigter Zellen, erhöhtes Krebsrisiko',
      'Verbesserte Wundheilung',
      'Beschleunigte Zellteilung',
      'Keine Auswirkungen'
    ],
    korrekteAntwort: 1,
    erklärung: 'Defekte Apoptose führt zur Akkumulation beschädigter, potentiell maligner Zellen → erhöhtes Krebsrisiko. Beispiel: Überexpression von anti-apoptotischen Proteinen (z.B. Bcl-2) in Lymphomen. Auch Autoimmunerkrankungen möglich durch fehlende Deletion autoreaktiver Lymphozyten.',
    strategieTipp: 'Balance ist wichtig: Zu viel Apoptose → Degeneration (Neurodegeneration), zu wenig Apoptose → Krebs oder Autoimmunität. p53 aktiviert Apoptose bei DNA-Schäden.'
  }
];
