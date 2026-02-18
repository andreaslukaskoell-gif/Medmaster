export const fragenPart3 = [
  {
    id: 'bio-q-101',
    stichwortId: 'bio-2-01',
    fach: 'biologie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welche Hauptfunktion erfüllt das einschichtige Plattenepithel in den Alveolen der Lunge?',
    optionen: [
      'Mechanischer Schutz vor äußeren Einflüssen',
      'Sekretion von Verdauungsenzymen',
      'Erleichterter Gasaustausch durch geringe Diffusionsstrecke',
      'Speicherung von Nährstoffen',
      'Aktiver Transport von Ionen gegen Konzentrationsgradienten'
    ],
    korrekteAntwort: 2,
    erklärung: 'Das einschichtige Plattenepithel in den Alveolen ist sehr dünn (0,1-0,5 µm) und ermöglicht dadurch einen schnellen Gasaustausch zwischen Luft und Blut. Die geringe Diffusionsstrecke ist für die effiziente Sauerstoffaufnahme und CO₂-Abgabe essentiell.',
    strategieTipp: 'Struktur folgt Funktion: Dünne Epithelien → Stoffaustausch, mehrschichtige → Schutz, hohe Epithelien → Sekretion/Absorption.'
  },
  {
    id: 'bio-q-102',
    stichwortId: 'bio-2-01',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'In welchem Organ findet man typischerweise mehrreihiges Flimmerepithel mit Becherzellen?',
    optionen: [
      'Dünndarm',
      'Harnblase',
      'Trachea und Bronchien',
      'Ösophagus',
      'Gallenblase'
    ],
    korrekteAntwort: 2,
    erklärung: 'Die Atemwege (Trachea, Bronchien) sind mit mehrreihigem Flimmerepithel ausgekleidet. Die Flimmerhärchen (Zilien) transportieren Schleim mit Fremdpartikeln in Richtung Rachen (mukoziliäre Clearance). Becherzellen produzieren den Schleim.',
    strategieTipp: 'Flimmerepithel findet sich in Atemwegen und Eileitern – immer dort, wo gerichteter Transport notwendig ist.'
  },
  {
    id: 'bio-q-103',
    stichwortId: 'bio-2-01',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Das Übergangsepithel der Harnblase kann seine Dicke verändern. Welche Eigenschaft ermöglicht dies?',
    optionen: [
      'Einlagerung von Fettgewebe zwischen den Zellen',
      'Verschiebbarkeit der Zellschichten bei Dehnung',
      'Schnelle Zellteilung bei Füllung der Blase',
      'Wasseraufnahme in die Epithelzellen',
      'Bildung von Interzellularsubstanz'
    ],
    korrekteAntwort: 1,
    erklärung: 'Übergangsepithel (Urothel) besteht aus mehreren Zellschichten, die sich bei Dehnung der Harnblase verschieben und abflachen können. Bei leerer Blase erscheint es mehrschichtig und dick, bei gefüllter Blase nur 2-3 Zelllagen dick.',
    strategieTipp: 'Übergangsepithel = flexible Barriere für dehnbare Hohlorgane (Harnwege). Der Name "Übergangsepithel" bezieht sich auf die wechselnde Schichtdicke.'
  },
  {
    id: 'bio-q-104',
    stichwortId: 'bio-2-01',
    fach: 'biologie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Welche Aussage über Drüsenepithelien trifft zu?',
    optionen: [
      'Endokrine Drüsen besitzen Ausführungsgänge zur Sekretion',
      'Exokrine Drüsen geben ihr Sekret direkt ins Blut ab',
      'Merokrine Sekretion erfolgt unter Zelluntergang',
      'Bei apokriner Sekretion wird ein Teil des Zytoplasmas mit abgeschnürt',
      'Holokrine Sekretion erfolgt durch Exozytose ohne Zellverlust'
    ],
    korrekteAntwort: 3,
    erklärung: 'Bei apokriner Sekretion (z.B. Milchdrüse, Duftdrüsen) wird das Sekret zusammen mit Teilen des apikalen Zytoplasmas und der Zellmembran abgeschnürt. Endokrine Drüsen haben keine Ausführungsgänge, holokrine Sekretion bedeutet kompletten Zelluntergang (Talgdrüsen).',
    strategieTipp: 'Sekretionstypen: merokrin (Exozytose, häufigster Typ), apokrin (mit Zytoplasma), holokrin (ganze Zelle wird Sekret).'
  },
  {
    id: 'bio-q-105',
    stichwortId: 'bio-2-01',
    fach: 'biologie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welche Epithelart kleidet den Dünndarm aus und ist für die Nährstoffaufnahme optimiert?',
    optionen: [
      'Mehrschichtiges Plattenepithel',
      'Einschichtiges Zylinderepithel mit Mikrovilli',
      'Mehrreihiges Flimmerepithel',
      'Übergangsepithel',
      'Einschichtiges Plattenepithel'
    ],
    korrekteAntwort: 1,
    erklärung: 'Der Dünndarm ist mit einschichtigem Zylinderepithel ausgekleidet, dessen Zellen einen Bürstensaum (Mikrovilli) tragen. Diese Oberflächenvergrößerung ermöglicht eine effiziente Nährstoffaufnahme (Resorption).',
    strategieTipp: 'Zylinderepithel mit Mikrovilli = typisch für Resorption und Sekretion (Darm, Nierentubuli). Die hohen Zellen bieten Raum für viele Transportproteine.'
  },
  {
    id: 'bio-q-106',
    stichwortId: 'bio-2-02',
    fach: 'biologie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welches Protein ist der Hauptbestandteil der organischen Matrix von Knochengewebe?',
    optionen: [
      'Elastin',
      'Keratin',
      'Kollagen Typ I',
      'Aktin',
      'Fibrinogen'
    ],
    korrekteAntwort: 2,
    erklärung: 'Die organische Knochenmatrix (Osteoid) besteht zu etwa 90% aus Kollagen Typ I. Diese Kollagenfasern werden mit Calciumphosphat (Hydroxylapatit) mineralisiert, was dem Knochen seine Härte und Zugfestigkeit verleiht.',
    strategieTipp: 'Kollagen Typ I = häufigster Kollagentyp im Körper, findet sich in Knochen, Sehnen, Bändern, Dermis. Gibt Zugfestigkeit.'
  },
  {
    id: 'bio-q-107',
    stichwortId: 'bio-2-02',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welcher Knorpeltyp enthält sowohl Kollagen- als auch Elastinfasern und findet sich im äußeren Ohr?',
    optionen: [
      'Hyaliner Knorpel',
      'Elastischer Knorpel',
      'Faserknorpel',
      'Gelenkknorpel',
      'Epiphysenknorpel'
    ],
    korrekteAntwort: 1,
    erklärung: 'Elastischer Knorpel enthält neben Kollagen auch viele Elastinfasern, die ihm hohe Flexibilität und Elastizität verleihen. Er findet sich in der Ohrmuschel, im äußeren Gehörgang und in der Epiglottis.',
    strategieTipp: 'Drei Knorpeltypen: hyalin (häufigster, Gelenke), elastisch (flexibel, Ohr), Faserknorpel (sehr fest, Bandscheiben).'
  },
  {
    id: 'bio-q-108',
    stichwortId: 'bio-2-02',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Zellen sind für den Knochenabbau verantwortlich?',
    optionen: [
      'Osteoblasten',
      'Osteozyten',
      'Osteoklasten',
      'Chondrozyten',
      'Fibroblasten'
    ],
    korrekteAntwort: 2,
    erklärung: 'Osteoklasten sind mehrkernige Riesenzellen, die durch Sekretion von Säuren und Enzymen Knochenmatrix abbauen (Knochenresorption). Sie arbeiten mit Osteoblasten (Knochenaufbau) im ständigen Knochenumbau (Remodeling) zusammen.',
    strategieTipp: 'Osteoblasten = bauen auf (b wie build), Osteoklasten = klauen/klauen ab. Osteozyten = reife Knochenzellen in Lakunen.'
  },
  {
    id: 'bio-q-109',
    stichwortId: 'bio-2-02',
    fach: 'biologie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Welche Aussage über Fettgewebe trifft zu?',
    optionen: [
      'Weißes Fettgewebe dient hauptsächlich der Wärmeproduktion',
      'Braunes Fettgewebe enthält viele Mitochondrien und Lipidtropfen',
      'Adipozyten des weißen Fettgewebes haben zentrale Kerne',
      'Braunes Fettgewebe ist beim Erwachsenen nicht mehr vorhanden',
      'Die Lipolyse wird durch Insulin aktiviert'
    ],
    korrekteAntwort: 1,
    erklärung: 'Braunes Fettgewebe enthält zahlreiche Mitochondrien (daher die braune Farbe) und viele kleine Lipidtropfen. Es produziert durch nicht-zitternde Thermogenese (Uncoupling-Protein UCP1) Wärme. Weißes Fettgewebe speichert Energie in einem großen Lipidtropfen, der den Zellkern an den Rand drückt.',
    strategieTipp: 'Weißes Fett = Energiespeicher (ein großer Tropfen), braunes Fett = Wärmeproduktion (viele Mitochondrien). Insulin hemmt Lipolyse, Adrenalin aktiviert sie.'
  },
  {
    id: 'bio-q-110',
    stichwortId: 'bio-2-02',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Lockeres Bindegewebe unterscheidet sich von straffem Bindegewebe durch:',
    optionen: [
      'Das Fehlen von Kollagenfasern',
      'Eine höhere Dichte an Fibroblasten und mehr Interzellularsubstanz',
      'Das ausschließliche Vorkommen in Sehnen',
      'Die Abwesenheit von Blutgefäßen',
      'Den höheren Anteil an elastischen Fasern'
    ],
    korrekteAntwort: 1,
    erklärung: 'Lockeres Bindegewebe hat viel Grundsubstanz, viele Zellen (Fibroblasten, Mastzellen, Makrophagen) und locker angeordnete Kollagenfasern. Straffes Bindegewebe (z.B. Sehnen) hat dicht gepackte, parallel ausgerichtete Kollagenfasern und weniger Zellen – optimiert für Zugbelastung.',
    strategieTipp: 'Locker = viel Grundsubstanz, viele Zellen, wenig Fasern. Straff = viele parallel angeordnete Kollagenfasern, wenig Zellen.'
  },
  {
    id: 'bio-q-111',
    stichwortId: 'bio-2-03',
    fach: 'biologie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welche Muskulaturart unterliegt NICHT der willkürlichen Kontrolle?',
    optionen: [
      'Skelettmuskulatur der Extremitäten',
      'Zungenmuskulatur',
      'Glatte Muskulatur der Blutgefäße',
      'Zwerchfellmuskulatur',
      'Augenmuskulatur'
    ],
    korrekteAntwort: 2,
    erklärung: 'Die glatte Muskulatur (z.B. in Blutgefäßen, Darm, Bronchien) wird vom vegetativen Nervensystem gesteuert und ist nicht willkürlich kontrollierbar. Skelettmuskulatur, einschließlich Zunge, Zwerchfell und Augenmuskeln, unterliegt der willkürlichen Kontrolle (somatisches Nervensystem).',
    strategieTipp: 'Glatte Muskulatur = unwillkürlich, vegetativ gesteuert. Quergestreifte Skelettmuskulatur = willkürlich. Herzmuskulatur = quergestreift, aber unwillkürlich.'
  },
  {
    id: 'bio-q-112',
    stichwortId: 'bio-2-03',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Was ist die funktionelle Grundeinheit der quergestreiften Muskulatur?',
    optionen: [
      'Myofibrille',
      'Muskelfaser',
      'Sarkomer',
      'Aktin-Filament',
      'Motorische Endplatte'
    ],
    korrekteAntwort: 2,
    erklärung: 'Das Sarkomer ist die kleinste funktionelle Einheit der Muskelkontraktion. Es liegt zwischen zwei Z-Scheiben und enthält Aktin- (dünne) und Myosin-Filamente (dicke), die bei der Kontraktion aneinander vorbeigleiten (Gleitfilamenttheorie).',
    strategieTipp: 'Hierarchie: Muskel → Muskelfaserbündel → Muskelfaser → Myofibrille → Sarkomer (zwischen zwei Z-Scheiben).'
  },
  {
    id: 'bio-q-113',
    stichwortId: 'bio-2-03',
    fach: 'biologie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Welcher Vorgang erklärt die Muskelkontraktion nach der Gleitfilamenttheorie?',
    optionen: [
      'Die Aktinfilamente verkürzen sich durch enzymatischen Abbau',
      'Die Myosinfilamente werden durch ATP verlängert',
      'Myosinköpfe ziehen Aktinfilamente in Richtung M-Linie',
      'Die Z-Scheiben produzieren neue Sarkomere',
      'Kalziumionen zerstören die Querbrücken zwischen Aktin und Myosin'
    ],
    korrekteAntwort: 2,
    erklärung: 'Bei der Kontraktion bleiben die Filamente gleich lang. Die Myosinköpfe binden ATP-abhängig an Aktin, kippen (Kraftschlag) und ziehen die Aktinfilamente zur Sarkomermitte (M-Linie). Dies verkürzt das Sarkomer. Ca²⁺ ermöglicht die Bindung durch Freilegung der Bindungsstellen am Aktin.',
    strategieTipp: 'Gleitfilamenttheorie: Filamente gleiten, verkürzen sich nicht. Myosinköpfe = molekulare Motoren. ATP nötig für Lösung der Querbrücken, Ca²⁺ für Bindung.'
  },
  {
    id: 'bio-q-114',
    stichwortId: 'bio-2-03',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Struktur verbindet die Erregung der Muskelfaser mit der Freisetzung von Ca²⁺ aus dem sarkoplasmatischen Retikulum?',
    optionen: [
      'Mitochondrien',
      'T-Tubuli',
      'Motorische Endplatte',
      'Z-Scheibe',
      'Aktin-Filamente'
    ],
    korrekteAntwort: 1,
    erklärung: 'T-Tubuli (transversale Tubuli) sind Einstülpungen der Zellmembran, die das Aktionspotential ins Faserinnere leiten. An den Triaden (T-Tubulus + 2 Zisternen des SR) wird die elektrische Erregung in Ca²⁺-Freisetzung umgewandelt (elektromechanische Kopplung).',
    strategieTipp: 'T-Tubuli = Erregungsleitung in die Tiefe der Muskelfaser. Sarkoplasmatisches Retikulum = Ca²⁺-Speicher.'
  },
  {
    id: 'bio-q-115',
    stichwortId: 'bio-2-03',
    fach: 'biologie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Wodurch unterscheidet sich die Herzmuskulatur von der Skelettmuskulatur?',
    optionen: [
      'Herzmuskulatur besitzt keine Sarkomere',
      'Herzmuskelzellen sind über Gap Junctions (Glanzstreifen) elektrisch gekoppelt',
      'Herzmuskulatur wird willkürlich gesteuert',
      'Herzmuskulatur enthält kein Aktin',
      'Herzmuskelzellen sind mehrkernig'
    ],
    korrekteAntwort: 1,
    erklärung: 'Herzmuskelzellen (Kardiomyozyten) sind über Glanzstreifen (Disci intercalares) verbunden, die Gap Junctions und Desmosomen enthalten. Die Gap Junctions ermöglichen schnelle elektrische Kopplung, sodass das Herz als funktionelles Synzytium kontrahiert. Kardiomyozyten sind einkernig, quergestreift und unwillkürlich.',
    strategieTipp: 'Herzmuskel: quergestreift wie Skelettmuskel, aber einkernig, unwillkürlich, mit Glanzstreifen, eigene Automatie (Schrittmacherzellen).'
  },
  {
    id: 'bio-q-116',
    stichwortId: 'bio-2-03',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Eigenschaft ist charakteristisch für glatte Muskulatur?',
    optionen: [
      'Querstreifung durch regelmäßige Anordnung der Sarkomere',
      'Schnelle Ermüdung bei Dauerkontraktion',
      'Spindelförmige, einkernige Zellen ohne Sarkomere',
      'Steuerung durch das somatische Nervensystem',
      'Hohes Vorkommen von Myofibrillen mit Z-Scheiben'
    ],
    korrekteAntwort: 2,
    erklärung: 'Glatte Muskelzellen sind spindelförmig, einkernig und besitzen keine Sarkomere (daher keine Querstreifung). Sie haben Aktin und Myosin, aber anders organisiert. Sie ermüden langsam, können tonisch kontrahiert bleiben und werden vegetativ gesteuert.',
    strategieTipp: 'Glatte Muskulatur: keine Querstreifung, langsam, tonische Kontraktion möglich, in Hohlorganen (Darm, Gefäße, Bronchien).'
  },
  {
    id: 'bio-q-117',
    stichwortId: 'bio-2-03',
    fach: 'biologie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welche Aussage über die Skelettmuskulatur ist richtig?',
    optionen: [
      'Skelettmuskelfasern sind einkernig',
      'Skelettmuskelfasern entstehen durch Verschmelzung mehrerer Myoblasten',
      'Skelettmuskulatur kann sich spontan kontrahieren ohne Nervenimpuls',
      'Skelettmuskulatur ist nicht quergestreift',
      'Skelettmuskelfasern besitzen keine Mitochondrien'
    ],
    korrekteAntwort: 1,
    erklärung: 'Skelettmuskelfasern sind mehrkernige Synzytien, die während der Embryonalentwicklung durch Fusion von Myoblasten entstehen. Sie sind quergestreift, benötigen zur Kontraktion einen Nervenimpuls und enthalten viele Mitochondrien für die Energiebereitstellung.',
    strategieTipp: 'Skelettmuskelfaser = mehrkernige Riesenzelle (bis zu mehreren cm lang). Kerne liegen unter dem Sarkolemm (Zellmembran).'
  },
  {
    id: 'bio-q-118',
    stichwortId: 'bio-2-04',
    fach: 'biologie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welche Zellstruktur leitet bei Neuronen Aktionspotentiale vom Zellkörper weg?',
    optionen: [
      'Dendriten',
      'Axon',
      'Soma',
      'Zellkern',
      'Nissl-Schollen'
    ],
    korrekteAntwort: 1,
    erklärung: 'Das Axon ist ein langer Fortsatz des Neurons, der Aktionspotentiale vom Zellkörper (Soma) zu anderen Zellen (Neuronen, Muskel, Drüsen) leitet. Dendriten empfangen Signale und leiten sie zum Soma. Es gibt pro Neuron nur ein Axon, aber viele Dendriten.',
    strategieTipp: 'Dendriten = empfangen (viele Äste), Axon = senden (ein Fortsatz). Informationsfluss: Dendrit → Soma → Axonhügel → Axon → Synapse.'
  },
  {
    id: 'bio-q-119',
    stichwortId: 'bio-2-04',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Gliazellen bilden im peripheren Nervensystem die Myelinscheide?',
    optionen: [
      'Astrozyten',
      'Oligodendrozyten',
      'Schwann-Zellen',
      'Mikroglia',
      'Ependymzellen'
    ],
    korrekteAntwort: 2,
    erklärung: 'Schwann-Zellen umhüllen im PNS Axone mit Myelin. Eine Schwann-Zelle myelinisiert ein Axonsegment (Internodium). Im ZNS übernehmen Oligodendrozyten diese Aufgabe, wobei ein Oligodendrozyt mehrere Axone myelinisieren kann.',
    strategieTipp: 'Myelinbildung: PNS = Schwann-Zellen (eine Zelle pro Segment), ZNS = Oligodendrozyten (eine Zelle für mehrere Axone).'
  },
  {
    id: 'bio-q-120',
    stichwortId: 'bio-2-04',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Funktion haben Astrozyten im ZNS?',
    optionen: [
      'Bildung der Myelinscheide um Axone',
      'Phagozytose von Krankheitserregern und abgestorbenem Gewebe',
      'Bildung der Blut-Hirn-Schranke und metabolische Unterstützung der Neurone',
      'Produktion von Liquor cerebrospinalis',
      'Übertragung elektrischer Signale zwischen Neuronen'
    ],
    korrekteAntwort: 2,
    erklärung: 'Astrozyten sind sternförmige Gliazellen mit vielfältigen Funktionen: Sie bilden mit ihren Fortsätzen die Blut-Hirn-Schranke, versorgen Neurone mit Nährstoffen, regulieren die Ionenkonzentration im extrazellulären Raum und sind an der Narbenbildung beteiligt.',
    strategieTipp: 'Gliazellen-Funktionen: Astrozyten = Stoffwechsel/Blut-Hirn-Schranke, Oligodendrozyten/Schwann = Myelin, Mikroglia = Immunabwehr, Ependym = Liquor.'
  },
  {
    id: 'bio-q-121',
    stichwortId: 'bio-2-04',
    fach: 'biologie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Bei der Multiplen Sklerose werden Myelinscheiden im ZNS zerstört. Welche Konsequenz hat dies für die Erregungsleitung?',
    optionen: [
      'Die Erregungsleitung wird beschleunigt',
      'Die saltatorische Erregungsleitung ist nicht mehr möglich, Verlangsamung der Leitung',
      'Die Amplitude der Aktionspotentiale steigt an',
      'Neurone können keine Aktionspotentiale mehr generieren',
      'Die Refraktärzeit verkürzt sich'
    ],
    korrekteAntwort: 1,
    erklärung: 'Myelin isoliert das Axon elektrisch und ermöglicht saltatorische Erregungsleitung (Springen von Ranvier-Schnürring zu Schnürring). Ohne Myelin muss sich das Aktionspotential kontinuierlich ausbreiten (wie bei unmyelinisierten Fasern), was deutlich langsamer ist und zu neurologischen Ausfällen führt.',
    strategieTipp: 'Myelin = Isolierung → schnelle saltatorische Leitung. Demyelinisierung → langsame Leitung, neurologische Symptome (MS, Guillain-Barré).'
  },
  {
    id: 'bio-q-122',
    stichwortId: 'bio-2-04',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Zellen sind die Makrophagen des ZNS und übernehmen Abwehrfunktionen?',
    optionen: [
      'Astrozyten',
      'Oligodendrozyten',
      'Mikroglia',
      'Schwann-Zellen',
      'Neurone'
    ],
    korrekteAntwort: 2,
    erklärung: 'Mikroglia sind die residenten Immunzellen des ZNS. Sie stammen von Monozyten ab und fungieren als Makrophagen: Sie phagozytieren Erreger, Zelltrümmer und apoptotische Zellen. Bei Verletzungen oder Entzündungen werden sie aktiviert.',
    strategieTipp: 'Mikroglia = Immunzellen des Gehirns (meso dermalen Ursprungs, nicht ektodermale wie andere Gliazellen). Aktivierung bei Infektion, Trauma, Neurodegeneration.'
  },
  {
    id: 'bio-q-123',
    stichwortId: 'bio-2-04',
    fach: 'biologie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Welche Aussage über die Myelinscheide trifft zu?',
    optionen: [
      'Myelinscheiden erhöhen die Membrankapazität des Axons',
      'Die Ranvier-Schnürringe sind vollständig von Myelin bedeckt',
      'Myelin besteht hauptsächlich aus Kohlenhydraten',
      'An den Ranvier-Schnürringen ist die Dichte spannungsgesteuerter Na⁺-Kanäle besonders hoch',
      'Alle Axone im Nervensystem sind myelinisiert'
    ],
    korrekteAntwort: 3,
    erklärung: 'An den Ranvier-Schnürringen (unmyelinisierte Lücken zwischen Myelinsegmenten) befinden sich viele spannungsgesteuerte Natriumkanäle, die eine schnelle Regeneration des Aktionspotentials ermöglichen. Myelin reduziert die Membrankapazität und besteht aus Lipiden (ca. 80%) und Proteinen.',
    strategieTipp: 'Saltatorische Leitung: Myelin isoliert → Stromfluss unter Myelin → Regeneration des AP an Schnürringen (viele Na⁺-Kanäle). Bis zu 100 m/s schnell.'
  },
  {
    id: 'bio-q-124',
    stichwortId: 'bio-2-04',
    fach: 'biologie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welche Aussage über Gliazellen ist richtig?',
    optionen: [
      'Gliazellen können Aktionspotentiale generieren',
      'Gliazellen sind zahlenmäßig weniger als Neurone im Gehirn',
      'Gliazellen unterstützen und schützen Neurone',
      'Gliazellen bilden Synapsen mit anderen Zellen',
      'Gliazellen haben alle die gleiche Funktion'
    ],
    korrekteAntwort: 2,
    erklärung: 'Gliazellen (Neuroglia) sind zahlreicher als Neurone und haben vielfältige Unterstützungsfunktionen: Myelinbildung, Stoffwechselversorgung, Immunabwehr, strukturelle Stützung. Sie generieren keine Aktionspotentiale und bilden keine chemischen Synapsen.',
    strategieTipp: 'Glia = Stütz- und Versorgungsgewebe des Nervensystems. Etwa 10× mehr Gliazellen als Neurone. Verschiedene Typen mit spezifischen Funktionen.'
  },
  {
    id: 'bio-q-125',
    stichwortId: 'bio-3-01',
    fach: 'biologie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welche Strukturen gehören zum zentralen Nervensystem (ZNS)?',
    optionen: [
      'Gehirn, Rückenmark und Spinalnerven',
      'Gehirn und Rückenmark',
      'Sympathikus und Parasympathikus',
      'Nur das Gehirn',
      'Alle myelinisierten Nerven'
    ],
    korrekteAntwort: 1,
    erklärung: 'Das ZNS besteht aus Gehirn (Cerebrum, Cerebellum, Hirnstamm) und Rückenmark. Das periphere Nervensystem (PNS) umfasst alle Nerven außerhalb von Gehirn und Rückenmark: Hirnnerven, Spinalnerven und das vegetative Nervensystem.',
    strategieTipp: 'ZNS = Gehirn + Rückenmark (in Schädel/Wirbelsäule). PNS = alles andere (Nerven, Ganglien). Merke: 12 Hirnnervenpaare, 31 Spinalnervenpaare.'
  },
  {
    id: 'bio-q-126',
    stichwortId: 'bio-3-01',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Was ist die hauptsächliche Wirkung des Sympathikus auf das Herz-Kreislauf-System?',
    optionen: [
      'Verminderung der Herzfrequenz und Erweiterung der Blutgefäße',
      'Steigerung der Herzfrequenz und Verengung der Hautgefäße',
      'Senkung des Blutdrucks',
      'Förderung der Verdauung',
      'Hemmung der Schweißsekretion'
    ],
    korrekteAntwort: 1,
    erklärung: 'Der Sympathikus bereitet den Körper auf "Kampf oder Flucht" vor: Er steigert Herzfrequenz und Kontraktionskraft, verengt Hautgefäße (Zentralisierung), erweitert Muskelgefäße und erhöht den Blutdruck. Neurotransmitter: Noradrenalin.',
    strategieTipp: 'Sympathikus = Aktivierung, Stress (fight or flight). Parasympathikus = Erholung, Verdauung (rest and digest). Meist antagonistische Wirkung.'
  },
  {
    id: 'bio-q-127',
    stichwortId: 'bio-3-01',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welcher Neurotransmitter wird an der parasympathischen postganglionären Synapse freigesetzt?',
    optionen: [
      'Noradrenalin',
      'Dopamin',
      'Serotonin',
      'Acetylcholin',
      'GABA'
    ],
    korrekteAntwort: 3,
    erklärung: 'Der Parasympathikus verwendet Acetylcholin sowohl prä- als auch postganglionär (cholinerges System). Der Sympathikus nutzt Acetylcholin präganglionär und Noradrenalin postganglionär (bis auf Schweißdrüsen: dort auch ACh).',
    strategieTipp: 'Parasympathikus: immer Acetylcholin. Sympathikus: präganglionär ACh, postganglionär meist Noradrenalin (Ausnahme: Schweißdrüsen, Nebennierenmark).'
  },
  {
    id: 'bio-q-128',
    stichwortId: 'bio-3-01',
    fach: 'biologie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Was beschreibt die saltatorische Erregungsleitung?',
    optionen: [
      'Kontinuierliche Ausbreitung des Aktionspotentials entlang unmyelinisierter Axone',
      'Sprunghafte Weiterleitung des Aktionspotentials von Schnürring zu Schnürring',
      'Übertragung von Signalen über chemische Synapsen',
      'Rückwärtsleitung von Dendriten zum Axon',
      'Gleichzeitige Erregung aller Neurone in einem Nervenbündel'
    ],
    korrekteAntwort: 1,
    erklärung: 'Bei myelinisierten Axonen "springt" das Aktionspotential von Ranvier-Schnürring zu Schnürring (saltatorische Leitung, von lat. saltare = springen). Dies ist deutlich schneller (bis 120 m/s) und energieeffizienter als kontinuierliche Leitung bei unmyelinisierten Fasern (ca. 1 m/s).',
    strategieTipp: 'Saltatorisch = sprungweise an Schnürringen. Myelin isoliert → Strom fließt schnell unter Myelin → Verstärkung an Schnürringen. Schneller + energiesparender.'
  },
  {
    id: 'bio-q-129',
    stichwortId: 'bio-3-01',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Struktur ist das wichtigste Integrationszentrum des vegetativen Nervensystems?',
    optionen: [
      'Cerebellum',
      'Hippocampus',
      'Hypothalamus',
      'Thalamus',
      'Corpus callosum'
    ],
    korrekteAntwort: 2,
    erklärung: 'Der Hypothalamus ist das übergeordnete Steuerzentrum für das vegetative Nervensystem. Er reguliert Körpertemperatur, Hunger, Durst, Schlaf-Wach-Rhythmus und steuert die Hypophyse. Er verbindet Nervensystem und Hormonsystem.',
    strategieTipp: 'Hypothalamus = Homeostase-Zentrale. Regelt vegetative Funktionen und endokrines System. Verbindung: Nervensystem ↔ Hormonsystem.'
  },
  {
    id: 'bio-q-130',
    stichwortId: 'bio-3-01',
    fach: 'biologie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Wie verläuft ein typischer Reflexbogen beim Patellarsehnenreflex?',
    optionen: [
      'Rezeptor → sensorisches Neuron → Gehirn → motorisches Neuron → Effektor',
      'Rezeptor → sensorisches Neuron → Rückenmark → motorisches Neuron → Effektor',
      'Rezeptor → Interneuron → motorisches Neuron → Effektor',
      'Rezeptor → motorisches Neuron → Effektor',
      'Rezeptor → Sympathikus → Parasympathikus → Effektor'
    ],
    korrekteAntwort: 1,
    erklärung: 'Der Patellarsehnenreflex ist ein monosynaptischer Reflex: Muskelspindel (Rezeptor) → sensorisches Neuron → Synapse im Rückenmark → motorisches Neuron → Skelettmuskel (Effektor). Das Gehirn ist nicht beteiligt, daher sehr schnelle Reaktion.',
    strategieTipp: 'Reflexbogen: afferente Bahn (sensorisch) → ZNS (Rückenmark/Hirnstamm) → efferente Bahn (motorisch). Eigen-/Fremdreflex, mono-/polysynaptisch.'
  },
  {
    id: 'bio-q-131',
    stichwortId: 'bio-3-01',
    fach: 'biologie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Was passiert an einer chemischen Synapse nach Ankunft eines Aktionspotentials?',
    optionen: [
      'Neurotransmitter werden freigesetzt',
      'Ionen fließen direkt von einer Zelle zur anderen',
      'Das Aktionspotential wird elektrisch übertragen',
      'Die postsynaptische Zelle hyperpolarisiert immer',
      'ATP wird zur nächsten Zelle transportiert'
    ],
    korrekteAntwort: 0,
    erklärung: 'Bei chemischen Synapsen führt das präsynaptische Aktionspotential zum Ca²⁺-Einstrom, der die Fusion von Vesikeln mit der Membran auslöst. Neurotransmitter werden in den synaptischen Spalt freigesetzt und binden an Rezeptoren der postsynaptischen Membran.',
    strategieTipp: 'Chemische Synapse: AP → Ca²⁺-Einstrom → Vesikel-Fusion → Transmitter-Freisetzung → Rezeptor-Bindung → EPSP/IPSP. Elektrische Synapse: Gap Junctions.'
  },
  {
    id: 'bio-q-132',
    stichwortId: 'bio-3-02',
    fach: 'biologie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welche Photorezeptoren im Auge sind für das Farbensehen verantwortlich?',
    optionen: [
      'Stäbchen',
      'Zapfen',
      'Ganglienzellen',
      'Amakrine Zellen',
      'Müller-Zellen'
    ],
    korrekteAntwort: 1,
    erklärung: 'Zapfen sind für das Farbensehen und Sehen bei Tageslicht verantwortlich. Es gibt drei Zapfentypen mit unterschiedlicher Farbempfindlichkeit (Rot, Grün, Blau). Stäbchen sind sehr lichtempfindlich und für das Dämmerungssehen zuständig, können aber keine Farben unterscheiden.',
    strategieTipp: 'Zapfen = Farbe, Tag, hohe Sehschärfe (Fovea centralis). Stäbchen = Schwarz-Weiß, Dämmerung, hohe Lichtempfindlichkeit (Peripherie). Ca. 120 Mio Stäbchen, 6 Mio Zapfen.'
  },
  {
    id: 'bio-q-133',
    stichwortId: 'bio-3-02',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Struktur im Ohr wandelt mechanische Schwingungen in neuronale Signale um?',
    optionen: [
      'Trommelfell',
      'Gehörknöchelchen',
      'Corti-Organ in der Cochlea',
      'Eustachische Röhre',
      'Bogengänge'
    ],
    korrekteAntwort: 2,
    erklärung: 'Das Corti-Organ liegt auf der Basilarmembran in der Schnecke (Cochlea). Es enthält Haarsinneszellen, deren Stereozilien durch Schwingungen der Basilarmembran ausgelenkt werden. Dies öffnet Ionenkanäle und erzeugt Rezeptorpotentiale, die an den Hörnerv weitergeleitet werden.',
    strategieTipp: 'Hörvorgang: Schallwelle → Trommelfell → Gehörknöchelchen → ovales Fenster → Perilymphe → Basilarmembran → Haarzellen → Hörnerv. Corti-Organ = eigentlicher Rezeptor.'
  },
  {
    id: 'bio-q-134',
    stichwortId: 'bio-3-02',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Hautschicht enthält Blutgefäße, Nervenenden und Haarfollikel?',
    optionen: [
      'Epidermis',
      'Stratum corneum',
      'Dermis (Lederhaut)',
      'Subcutis',
      'Stratum basale'
    ],
    korrekteAntwort: 2,
    erklärung: 'Die Dermis (Lederhaut) ist die mittlere Hautschicht aus Bindegewebe. Sie enthält Blutgefäße, Lymphgefäße, Nervenendigungen, Haarfollikel, Talg- und Schweißdrüsen. Die Epidermis ist gefäßfrei, die Subcutis enthält hauptsächlich Fettgewebe.',
    strategieTipp: 'Hautschichten von außen nach innen: Epidermis (mehrschichtiges Plattenepithel, gefäßfrei) → Dermis (Bindegewebe, Gefäße/Nerven) → Subcutis (Fettgewebe).'
  },
  {
    id: 'bio-q-135',
    stichwortId: 'bio-3-02',
    fach: 'biologie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Welche Rezeptoren in der Haut reagieren auf Druckveränderungen und schnelle Vibrationen?',
    optionen: [
      'Freie Nervenendigungen',
      'Merkel-Zellen',
      'Meissner-Körperchen',
      'Vater-Pacini-Lamellenkörperchen',
      'Ruffini-Körperchen'
    ],
    korrekteAntwort: 3,
    erklärung: 'Vater-Pacini-Lamellenkörperchen sind tief in der Dermis/Subcutis gelegene Mechanorezeptoren, die auf schnelle Vibrationen (40-800 Hz) und Druckveränderungen reagieren. Sie adaptieren schnell (phasische Rezeptoren). Meissner-Körperchen reagieren auf Berührung und leichte Vibration.',
    strategieTipp: 'Mechanorezeptoren: Merkel = Druck (langsam adaptierend), Meissner = Berührung, Pacini = Vibration (schnell adaptierend), Ruffini = Dehnung. Thermorezeptoren: Kalt/Warm. Nozizeptoren: Schmerz.'
  },
  {
    id: 'bio-q-136',
    stichwortId: 'bio-3-02',
    fach: 'biologie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welche Schicht der Epidermis besteht aus verhornten, abgestorbenen Zellen?',
    optionen: [
      'Stratum basale',
      'Stratum spinosum',
      'Stratum granulosum',
      'Stratum corneum',
      'Stratum lucidum'
    ],
    korrekteAntwort: 3,
    erklärung: 'Das Stratum corneum (Hornschicht) ist die äußerste Epidermisschicht. Sie besteht aus flachen, kernlosen, verhornten Zellen (Korneozyten), die mit Keratin und Lipiden gefüllt sind. Diese Schicht bildet die Hautbarriere und wird ständig erneuert.',
    strategieTipp: 'Epidermisschichten von basal nach apikal: Basale (Teilung) → Spinosum → Granulosum (Keratohyalin) → Lucidum (nur Handflächen/Fußsohlen) → Corneum (Hornschicht). Erneuerung ca. 28 Tage.'
  },
  {
    id: 'bio-q-137',
    stichwortId: 'bio-3-03',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche endokrine Drüse wird als "Hauptdrüse" bezeichnet, da sie viele andere Hormondrüsen steuert?',
    optionen: [
      'Schilddrüse',
      'Nebenniere',
      'Hypophyse',
      'Pankreas',
      'Epiphyse'
    ],
    korrekteAntwort: 2,
    erklärung: 'Die Hypophyse (Hirnanhangdrüse) wird als "Hauptdrüse" bezeichnet. Ihr Vorderlappen (Adenohypophyse) produziert glandotrope Hormone (ACTH, TSH, FSH, LH), die andere endokrine Drüsen steuern. Sie wird selbst vom Hypothalamus über Releasing-/Inhibiting-Hormone reguliert.',
    strategieTipp: 'Hypothalamus-Hypophysen-Achse: Hypothalamus (Releasing-Hormone) → Hypophyse (glandotrope Hormone) → Zieldrüsen (Effektorhormone) → Wirkung. Negativer Feedback!'
  },
  {
    id: 'bio-q-138',
    stichwortId: 'bio-3-03',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welches Hormon wird von den β-Zellen der Langerhans-Inseln im Pankreas produziert?',
    optionen: [
      'Glukagon',
      'Insulin',
      'Somatostatin',
      'Cortisol',
      'Adrenalin'
    ],
    korrekteAntwort: 1,
    erklärung: 'Insulin wird von den β-Zellen der Langerhans-Inseln gebildet und senkt den Blutzuckerspiegel durch Förderung der Glukoseaufnahme in Zellen, Glykogensynthese und Lipogenese. Glukagon aus α-Zellen wirkt antagonistisch (erhöht Blutzucker).',
    strategieTipp: 'Pankreas endokrin: α-Zellen = Glukagon (↑ Blutzucker), β-Zellen = Insulin (↓ Blutzucker), δ-Zellen = Somatostatin (hemmt α und β). Diabetes: Insulinmangel oder -resistenz.'
  },
  {
    id: 'bio-q-139',
    stichwortId: 'bio-3-03',
    fach: 'biologie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Welcher Mechanismus beschreibt die Regulation der Schilddrüsenhormone T3 und T4?',
    optionen: [
      'Positiver Feedback-Mechanismus über den Hypothalamus',
      'Direkte Hemmung durch Cortisol',
      'Negativer Feedback über Hypothalamus und Hypophyse',
      'Stimulation durch Insulin',
      'Unabhängige Produktion ohne Regulation'
    ],
    korrekteAntwort: 2,
    erklärung: 'Die Schilddrüsenhormone T3 und T4 werden über negativen Feedback reguliert: Hypothalamus (TRH) → Hypophyse (TSH) → Schilddrüse (T3/T4). Hohe T3/T4-Spiegel hemmen TRH- und TSH-Freisetzung. T3/T4 regulieren Stoffwechselrate, Wachstum und Entwicklung.',
    strategieTipp: 'Schilddrüsenachse: TRH (Hypothalamus) → TSH (Hypophyse) → T3/T4 (Schilddrüse) ⊣ TRH/TSH. T3 ist biologisch aktiver als T4. Jod essentiell für Synthese.'
  },
  {
    id: 'bio-q-140',
    stichwortId: 'bio-3-03',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welches Hormon wird in der Nebennierenrinde produziert und reguliert den Wasser- und Elektrolythaushalt?',
    optionen: [
      'Adrenalin',
      'Noradrenalin',
      'Aldosteron',
      'Insulin',
      'Thyroxin'
    ],
    korrekteAntwort: 2,
    erklärung: 'Aldosteron ist ein Mineralocorticoid aus der Nebennierenrinde (Zona glomerulosa). Es fördert die Na⁺-Rückresorption und K⁺-Ausscheidung in der Niere, erhöht dadurch das Blutvolumen und den Blutdruck. Regulation durch Renin-Angiotensin-Aldosteron-System (RAAS).',
    strategieTipp: 'Nebennierenrinde (3 Zonen): Glomerulosa = Mineralokortikoide (Aldosteron), Fasciculata = Glukokortikoide (Cortisol), Reticularis = Androgene. Mark = Adrenalin/Noradrenalin.'
  },
  {
    id: 'bio-q-141',
    stichwortId: 'bio-3-03',
    fach: 'biologie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Welche Aussage über Cortisol ist korrekt?',
    optionen: [
      'Cortisol senkt den Blutzuckerspiegel',
      'Cortisol wird im Nebennierenmark produziert',
      'Cortisol wirkt immunsuppressiv und fördert Glukoneogenese',
      'Cortisol wird durch Insulin stimuliert',
      'Cortisol senkt den Blutdruck'
    ],
    korrekteAntwort: 2,
    erklärung: 'Cortisol ist ein Glukokortikoid aus der Zona fasciculata der Nebennierenrinde. Es erhöht den Blutzuckerspiegel (Glukoneogenese, Glykogenolyse), wirkt immunsuppressiv und anti-inflammatorisch. Regulation: CRH (Hypothalamus) → ACTH (Hypophyse) → Cortisol. Langzeit-Stress erhöht Cortisolspiegel.',
    strategieTipp: 'Cortisol = Stresshormon. Wirkung: ↑ Blutzucker (katabol), ↓ Immunsystem, ↑ Blutdruck. Therapeutisch: Entzündungshemmung. Cushing-Syndrom = Cortisol-Überschuss.'
  },
  {
    id: 'bio-q-142',
    stichwortId: 'bio-3-03',
    fach: 'biologie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welches Hormon wird vom Nebennierenmark ausgeschüttet und bereitet den Körper auf Stresssituationen vor?',
    optionen: [
      'Insulin',
      'Adrenalin',
      'Testosteron',
      'Parathormon',
      'Oxytocin'
    ],
    korrekteAntwort: 1,
    erklärung: 'Adrenalin (Epinephrin) wird im Nebennierenmark produziert und bei Stress ausgeschüttet. Es erhöht Herzfrequenz, Blutdruck, Blutzucker, erweitert Bronchien und Pupillen – typische "Kampf-oder-Flucht"-Reaktion. Chemisch ein Katecholamin (wie Noradrenalin, Dopamin).',
    strategieTipp: 'Adrenalin = schnelle Stressantwort (Sekunden). Cortisol = langsame, anhaltende Stressantwort (Minuten-Stunden). Beide aus Nebenniere, aber unterschiedliche Bereiche.'
  },
  {
    id: 'bio-q-143',
    stichwortId: 'bio-3-03',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Was ist ein negativer Feedback-Mechanismus in der Hormonregulation?',
    optionen: [
      'Hohe Hormonkonzentration stimuliert weitere Hormonausschüttung',
      'Niedrige Hormonkonzentration hemmt die Hormonproduktion',
      'Hohe Hormonkonzentration hemmt die weitere Ausschüttung',
      'Hormone wirken unabhängig von ihrer Konzentration',
      'Positive Rückkopplung verstärkt die Hormonwirkung'
    ],
    korrekteAntwort: 2,
    erklärung: 'Beim negativen Feedback hemmt ein hoher Hormonspiegel die eigene weitere Produktion. Beispiel: Hohe T3/T4-Spiegel hemmen TSH-Ausschüttung. Dies stabilisiert Hormonspiegel (Homöostase). Positives Feedback (selten) verstärkt die Ausschüttung, z.B. Oxytocin bei der Geburt.',
    strategieTipp: 'Negatives Feedback = Hauptregulationsprinzip (Stabilisierung). Positives Feedback = selten, verstärkt Prozess bis zum Abschluss (Geburt, Ovulation, Blutgerinnung).'
  },
  {
    id: 'bio-q-144',
    stichwortId: 'bio-3-04',
    fach: 'biologie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welche Herzklappe verhindert den Rückfluss von Blut vom linken Ventrikel in den linken Vorhof?',
    optionen: [
      'Trikuspidalklappe',
      'Pulmonalklappe',
      'Mitralklappe (Bikuspidalklappe)',
      'Aortenklappe',
      'Vena-cava-Klappe'
    ],
    korrekteAntwort: 2,
    erklärung: 'Die Mitralklappe (Bikuspidalklappe) ist eine Segelklappe zwischen linkem Vorhof und linker Kammer. Sie öffnet sich bei der Ventrikelfüllung (Diastole) und schließt bei der Kontraktion (Systole), um Rückfluss zu verhindern. Die Trikuspidalklappe liegt auf der rechten Herzseite.',
    strategieTipp: 'Herzklappen: Segelklappen (AV-Klappen) = Trikuspidal (rechts), Mitral (links). Taschenklappen (Semilunarklappen) = Pulmonal, Aorta. Verhindert Rückfluss.'
  },
  {
    id: 'bio-q-145',
    stichwortId: 'bio-3-04',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Struktur im Herzen fungiert als primärer Schrittmacher und initiiert die elektrische Erregung?',
    optionen: [
      'AV-Knoten',
      'His-Bündel',
      'Sinusknoten (SA-Knoten)',
      'Purkinje-Fasern',
      'Linker Ventrikel'
    ],
    korrekteAntwort: 2,
    erklärung: 'Der Sinusknoten (SA-Knoten) im rechten Vorhof ist der primäre Schrittmacher des Herzens. Er generiert spontan Aktionspotentiale (60-100/min). Die Erregung breitet sich über Vorhöfe → AV-Knoten → His-Bündel → Tawara-Schenkel → Purkinje-Fasern → Ventrikel aus.',
    strategieTipp: 'Erregungsleitung: SA-Knoten (Schrittmacher) → Vorhöfe → AV-Knoten (Verzögerung) → His-Bündel → Kammerschenkel → Purkinje-Fasern → Ventrikel. EKG: P-QRS-T.'
  },
  {
    id: 'bio-q-146',
    stichwortId: 'bio-3-04',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Aussage über den großen und kleinen Kreislauf ist korrekt?',
    optionen: [
      'Der große Kreislauf transportiert sauerstoffarmes Blut zur Lunge',
      'Der kleine Kreislauf versorgt den Körper mit sauerstoffreichem Blut',
      'Der große Kreislauf (Körperkreislauf) beginnt im linken Ventrikel und endet im rechten Vorhof',
      'Der kleine Kreislauf beginnt im linken Ventrikel',
      'Beide Kreisläufe verlaufen unabhängig voneinander'
    ],
    korrekteAntwort: 2,
    erklärung: 'Großer Kreislauf (Systemkreislauf): Linker Ventrikel → Aorta → Körper → Vena cava → rechter Vorhof. Kleiner Kreislauf (Lungenkreislauf): Rechter Ventrikel → A. pulmonalis → Lunge (Gasaustausch) → V. pulmonalis → linker Vorhof. Hintereinandergeschaltet, nicht parallel.',
    strategieTipp: 'Kleiner Kreislauf: rechts → Lunge → links (Oxygenierung). Großer Kreislauf: links → Körper → rechts (O₂-Versorgung). Hintereinander = gleiche Blutmenge/Zeit.'
  },
  {
    id: 'bio-q-147',
    stichwortId: 'bio-3-04',
    fach: 'biologie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Welcher physiologische Mechanismus reguliert den Blutdruck kurzfristig (innerhalb von Sekunden)?',
    optionen: [
      'Renin-Angiotensin-Aldosteron-System',
      'Natriuretische Peptide',
      'Baroreflexe über Pressorezeptoren in Aorta und Karotis',
      'Hormonelle Regulation durch ADH',
      'Veränderung des Blutvolumens durch die Niere'
    ],
    korrekteAntwort: 2,
    erklärung: 'Barorezeptoren (Pressorezeptoren) in der Aortenbogen und Karotissinus registrieren Blutdruckänderungen und senden Signale an das Kreislaufzentrum im Hirnstamm. Bei Blutdruckanstieg wird Sympathikus gehemmt und Parasympathikus aktiviert → Herzfrequenz sinkt, Gefäße erweitern sich. Sehr schnelle Regulation (Sekunden).',
    strategieTipp: 'Blutdruckregulation: kurzfristig = Baroreflex (Sekunden), mittelfristig = Stresshormone (Minuten), langfristig = Niere/RAAS (Stunden-Tage).'
  },
  {
    id: 'bio-q-148',
    stichwortId: 'bio-3-04',
    fach: 'biologie' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Blutgefäße haben die dünnste Wand und ermöglichen den Stoffaustausch?',
    optionen: [
      'Arterien',
      'Arteriolen',
      'Kapillaren',
      'Venolen',
      'Venen'
    ],
    korrekteAntwort: 2,
    erklärung: 'Kapillaren sind die kleinsten Blutgefäße (5-10 µm Durchmesser) mit einer Wand aus einschichtigem Endothel. Dies ermöglicht effektiven Austausch von O₂, CO₂, Nährstoffen und Abfallprodukten zwischen Blut und Gewebe. Die Gesamtoberfläche aller Kapillaren beträgt ca. 500-700 m².',
    strategieTipp: 'Gefäßtypen: Arterien = dick, elastisch, hoher Druck. Arteriolen = Widerstandsgefäße, regulieren Durchblutung. Kapillaren = Austausch. Venolen/Venen = Blutreservoir, niedriger Druck.'
  },
  {
    id: 'bio-q-149',
    stichwortId: 'bio-3-04',
    fach: 'biologie' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Warum ist der Blutdruck in den Venen deutlich niedriger als in den Arterien?',
    optionen: [
      'Venen haben dickere Wände, die mehr Widerstand bieten',
      'Der Widerstand der Arteriolen und Kapillaren führt zu Druckabfall',
      'Venen transportieren weniger Blut als Arterien',
      'Das Herz pumpt Blut nur in Arterien',
      'Venen haben keine elastischen Fasern'
    ],
    korrekteAntwort: 1,
    erklärung: 'Der größte Druckabfall im Kreislauf erfolgt in den Arteriolen (Widerstandsgefäße) und Kapillaren aufgrund ihres hohen Strömungswiderstands (kleine Durchmesser). Daher ist in Venen der Druck niedrig (5-15 mmHg vs. 120/80 mmHg in Arterien). Venenklappen und Muskelpumpe unterstützen den Rücktransport zum Herzen.',
    strategieTipp: 'Blutdruck: Aorta ~120/80 mmHg → Arteriolen/Kapillaren (größter Druckabfall, Widerstand) → Venen ~5-15 mmHg. Venöser Rückfluss: Klappen, Muskelpumpe, Atmung.'
  },
  {
    id: 'bio-q-150',
    stichwortId: 'bio-3-04',
    fach: 'biologie' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Welche Struktur verhindert in den Venen den Rückfluss von Blut?',
    optionen: [
      'Glatte Muskelschicht',
      'Elastische Fasern',
      'Venenklappen',
      'Endothelzellen',
      'Kapillarwände'
    ],
    korrekteAntwort: 2,
    erklärung: 'Venenklappen sind taschenförmige Ausstülpungen der Intima, die nur den Blutfluss zum Herzen zulassen. Bei Rückfluss füllen sich die Taschen und verschließen das Lumen. Besonders wichtig in den Beinvenen gegen die Schwerkraft. Klappeninsuffizienz führt zu Krampfadern (Varizen).',
    strategieTipp: 'Venöser Rückfluss zum Herzen: Venenklappen (verhindern Rückfluss) + Muskelpumpe (Wade = "peripheres Herz") + Atemdruckschwankungen. Bei Insuffizienz → Varizen.'
  }
];