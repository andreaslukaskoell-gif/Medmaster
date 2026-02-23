export const fragenPart1 = [
  {
    id: "bio-q-001",
    stichwortId: "bio-1-01",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext:
      "Welches der folgenden Merkmale ist KEIN charakteristisches Kennzeichen lebender Systeme?",
    optionen: ["Stoffwechsel", "Reizbarkeit", "Fortpflanzung", "Perfekte Symmetrie", "Wachstum"],
    korrekteAntwort: 3,
    erklärung:
      "Perfekte Symmetrie ist kein Kennzeichen des Lebens. Die klassischen Merkmale lebender Systeme umfassen: Stoffwechsel (Energie- und Materieaustausch), Reizbarkeit (Reaktion auf Umweltreize), Fortpflanzung (Vermehrung), Wachstum und Entwicklung, sowie Evolution und Selbstorganisation. Symmetrie kann variieren und ist nicht essentiell für Leben.",
    strategieTipp:
      "Merke die 7 klassischen Kennzeichen des Lebens: Stoffwechsel, Wachstum, Reizbarkeit, Fortpflanzung, Evolution, Selbstorganisation, Kompartimentierung.",
  },
  {
    id: "bio-q-002",
    stichwortId: "bio-1-01",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: 'Was versteht man unter dem Begriff "Homöostase" im Kontext lebender Systeme?',
    optionen: [
      "Die Fähigkeit zur sexüllen Fortpflanzung",
      "Die Aufrechterhaltung eines stabilen inneren Milieus trotz äußerer Veränderungen",
      "Die Anpassung an verschiedene Lebensräume über Generationen",
      "Der Aufbau komplexer Moleküle aus einfachen Bausteinen",
      "Die symmetrische Zellteilung",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Homöostase bezeichnet die Aufrechterhaltung eines konstanten inneren Milieus trotz schwankender äußerer Bedingungen. Dies ist ein fundamentales Merkmal lebender Systeme und ermöglicht optimale Bedingungen für biochemische Prozesse. Beispiele: Regulation von Körpertemperatur, pH-Wert, Blutzuckerspiegel.",
    strategieTipp:
      'Homöostase = "Gleichgewicht halten". Denke an Thermostat-Prinzip: Regelkreise mit Sensoren, Kontrollzentrum und Effektoren.',
  },
  {
    id: "bio-q-003",
    stichwortId: "bio-1-01",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Welche Aussage zum Stoffwechsel lebender Systeme ist korrekt?",
    optionen: [
      "Alle lebenden Systeme benötigen Sauerstoff für ihren Stoffwechsel",
      "Der anabole Stoffwechsel baut komplexe Moleküle unter Energiefreisetzung ab",
      "Katabolismus und Anabolismus sind immer räumlich und zeitlich getrennt",
      "Lebende Systeme sind offene Systeme, die mit ihrer Umgebung Energie und Materie austauschen",
      "Der Stoffwechsel läuft in allen Organismen nach identischen biochemischen Wegen ab",
    ],
    korrekteAntwort: 3,
    erklärung:
      "Lebende Systeme sind thermodynamisch offene Systeme, die kontinuierlich Energie und Materie mit ihrer Umgebung austauschen müssen, um ihre geordnete Struktur aufrechtzürhalten (negativ Entropie). Option A ist falsch (anärobe Organismen existieren), B verwechselt Anabolismus mit Katabolismus, C ist falsch (oft gekoppelt), E ist falsch (große Vielfalt an Stoffwechselwegen).",
    strategieTipp:
      "Unterscheide: Katabolismus (Abbau, Energie frei) vs. Anabolismus (Aufbau, Energie nötig). Offenes System = ständiger Austausch mit Umgebung.",
  },
  {
    id: "bio-q-004",
    stichwortId: "bio-1-01",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Welches Merkmal unterscheidet Wachstum lebender Systeme von der Größenzunahme nicht-lebender Strukturen (z.B. Kristalle)?",
    optionen: [
      "Größenzunahme durch Materiallagerung",
      "Wachstum durch Anlagerung von außen",
      "Wachstum durch interne Synthese und geordnete Zellteilung",
      "Symmetrische Vergrößerung",
      "Unbegrenztes Wachstum",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Biologisches Wachstum erfolgt durch interne Biosynthese neuer Moleküle und geordnete Zellteilung (Wachstum von innen), während Kristalle durch Anlagerung von außen wachsen. Lebende Systeme zeigen zudem differenziertes Wachstum mit genetisch programmierter Regulation und Entwicklung komplexer Strukturen.",
    strategieTipp:
      "Biologisches Wachstum = internes Wachstum + Differenzierung + genetische Steuerung. Kristallwachstum = externe Anlagerung.",
  },
  {
    id: "bio-q-005",
    stichwortId: "bio-1-01",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was ist die Grundvoraussetzung für Evolution lebender Systeme?",
    optionen: [
      "Sexülle Fortpflanzung",
      "Vorhandensein von DNA",
      "Variation und Selektion",
      "Komplexe Vielzelligkeit",
      "Mitochondrien",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Evolution erfordert grundsätzlich Variation (Unterschiede zwischen Individün) und Selektion (unterschiedlicher Fortpflanzungserfolg). Diese Prinzipien gelten unabhängig vom genetischen Material (RNA oder DNA), der Fortpflanzungsart oder der Organisationsstufe. Sexülle Fortpflanzung erhöht zwar Variation, ist aber nicht zwingend erforderlich.",
    strategieTipp:
      "Evolution = Variation + Selektion + Vererbung. Diese drei Komponenten müssen immer gegeben sein.",
  },
  {
    id: "bio-q-006",
    stichwortId: "bio-1-02",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was ist der grundlegende Unterschied zwischen Prokaryoten und Eukaryoten?",
    optionen: [
      "Prokaryoten besitzen keine DNA",
      "Eukaryoten haben einen membranumschlossenen Zellkern, Prokaryoten nicht",
      "Prokaryoten sind immer größer als Eukaryoten",
      "Eukaryoten können keine Zellwand besitzen",
      "Prokaryoten haben keine Ribosomen",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Das entscheidende Unterscheidungsmerkmal ist der membranumschlossene Zellkern (Nucleus) bei Eukaryoten, während Prokaryoten ihr genetisches Material frei im Zytoplasma (Nukleoid) vorliegen haben. Beide besitzen DNA und Ribosomen, Prokaryoten sind meist kleiner, und auch Eukaryoten können Zellwände haben (z.B. Pflanzen, Pilze).",
    strategieTipp:
      'Pro-karyot = "Vor-Kern" (kein echter Kern), Eu-karyot = "Echter Kern" (membranumschlossener Nucleus).',
  },
  {
    id: "bio-q-007",
    stichwortId: "bio-1-02",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche der folgenden Strukturen findet man NICHT in prokaryotischen Zellen?",
    optionen: ["Ribosomen", "Zellmembran", "Mitochondrien", "Plasmide", "Zellwand"],
    korrekteAntwort: 2,
    erklärung:
      "Mitochondrien sind membranumschlossene Organellen und kommen nur in eukaryotischen Zellen vor. Prokaryoten besitzen Ribosomen (70S-Typ), Zellmembran, oft Plasmide (ringförmige DNA-Moleküle) und meist eine Zellwand. Die Atmungskette der Prokaryoten befindet sich in der Zellmembran.",
    strategieTipp:
      "Prokaryoten = keine membranumschlossenen Organellen (kein Nucleus, keine Mitochondrien, kein ER, kein Golgi). Aber: Ribosomen vorhanden!",
  },
  {
    id: "bio-q-008",
    stichwortId: "bio-1-02",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Welche Aussage zu Bakterien und Archäen ist korrekt?",
    optionen: [
      "Bakterien und Archäen unterscheiden sich nicht wesentlich in ihrer Zellwandstruktur",
      "Archäen besitzen Peptidoglycan in ihrer Zellwand",
      "Die Lipide der Zellmembran von Archäen unterscheiden sich fundamental von denen der Bakterien",
      "Archäen sind evolutionär enger mit Bakterien verwandt als mit Eukaryoten",
      "Beide Gruppen haben identische Ribosomenstruktur",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Archäen haben einzigartige Membranlipide mit Etherbindungen (statt Esterbindungen wie bei Bakterien und Eukaryoten) und verzweigten Isoprenketten. Archäen haben KEIN Peptidoglycan (nur Bakterien). Phylogenetisch sind Archäen näher mit Eukaryoten verwandt. Ribosomen unterscheiden sich in Details.",
    strategieTipp:
      "Drei Domänen des Lebens: Bacteria, Archäa, Eukarya. Archäen = Extremophile mit speziellen Membranlipiden (Ether statt Ester).",
  },
  {
    id: "bio-q-009",
    stichwortId: "bio-1-02",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was ist das Nukleoid in prokaryotischen Zellen?",
    optionen: [
      "Ein membranumschlossener Zellkern",
      "Ein Bereich im Zytoplasma, in dem die ringförmige DNA konzentriert vorliegt",
      "Ein Organell zur Proteinsynthese",
      "Eine Struktur zur Fortbewegung",
      "Ein Speicherkompartiment für Nährstoffe",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Das Nukleoid ist eine unregelmäßig geformte Region im Zytoplasma von Prokaryoten, in der die ringförmige chromosomale DNA (typischerweise ein einzelnes, zirkuläres Chromosom) konzentriert und verdichtet vorliegt. Es ist NICHT membranumschlossen, im Gegensatz zum eukaryotischen Zellkern.",
    strategieTipp:
      'Nukleoid = "kernähnlich", aber ohne Membran. Enthält die prokaryotische DNA (meist 1 ringförmiges Chromosom).',
  },
  {
    id: "bio-q-010",
    stichwortId: "bio-1-02",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Welche Ribosomentypen findet man in einer typischen pflanzlichen Eukaryotenzelle?",
    optionen: [
      "Nur 80S-Ribosomen im Zytoplasma",
      "Nur 70S-Ribosomen in Mitochondrien und Chloroplasten",
      "80S-Ribosomen im Zytoplasma und 70S-Ribosomen in Mitochondrien und Chloroplasten",
      "70S-Ribosomen im Zytoplasma und 80S-Ribosomen in Organellen",
      "Ausschließlich 80S-Ribosomen in allen Kompartimenten",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Pflanzenzellen besitzen 80S-Ribosomen im Zytoplasma und am rauen ER (eukaryotischer Typ), sowie 70S-Ribosomen in Mitochondrien und Chloroplasten (prokaryotischer Typ). Dies unterstützt die Endosymbiontentheorie, da Mitochondrien und Chloroplasten von prokaryotischen Vorläufern abstammen.",
    strategieTipp:
      "70S = prokaryotisch (Bakterien, Mitochondrien, Chloroplasten). 80S = eukaryotisch (Zytoplasma, ER). S = Svedberg-Einheit (Sedimentationsköffizient).",
  },
  {
    id: "bio-q-011",
    stichwortId: "bio-1-02",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Welche Organismen gehören zu den Prokaryoten?",
    optionen: [
      "Pilze und Algen",
      "Bakterien und Archäen",
      "Protozön und Hefen",
      "Viren und Bakterien",
      "Algen und Cyanobakterien",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Prokaryoten umfassen ausschließlich Bakterien (Bacteria) und Archäen (Archäa). Pilze, Algen, Protozön und Hefen sind Eukaryoten. Viren sind keine Zellen und werden nicht zu Prokaryoten oder Eukaryoten gezählt. Cyanobakterien sind trotz ihres Namens echte Bakterien (Prokaryoten).",
    strategieTipp:
      "Prokaryoten = nur Bacteria + Archäa. Alle anderen (Protisten, Pilze, Pflanzen, Tiere) = Eukaryoten.",
  },
  {
    id: "bio-q-012",
    stichwortId: "bio-1-03",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Woraus besteht die Grundstruktur von Zellmembranen?",
    optionen: [
      "Einer Einzelschicht aus Proteinen",
      "Einer Phospholipid-Doppelschicht",
      "Einer Cellulose-Schicht",
      "Mehreren Schichten aus Kohlenhydraten",
      "Einer DNA-Doppelhelix",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Die Grundstruktur aller biologischen Membranen ist die Phospholipid-Doppelschicht (Lipid-Bilayer). Phospholipide ordnen sich aufgrund ihrer amphipathischen Eigenschaften spontan so an, dass die hydrophoben Fettsäureschwänze nach innen und die hydrophilen Kopfgruppen nach außen zeigen.",
    strategieTipp:
      "Membran-Grundgerüst = Phospholipid-Doppelschicht (amphipathisch: hydrophiler Kopf + hydrophober Schwanz).",
  },
  {
    id: "bio-q-013",
    stichwortId: "bio-1-03",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was besagt das Flüssig-Mosaik-Modell der Zellmembran?",
    optionen: [
      "Die Membran ist eine starre Struktur mit fixierten Proteinen",
      "Die Lipide und Proteine sind lateral beweglich in einer flüssigen Lipid-Doppelschicht",
      "Die Membran besteht ausschließlich aus Lipiden ohne Proteine",
      "Proteine durchdringen niemals die gesamte Membran",
      "Die Membran ist auf beiden Seiten identisch aufgebaut",
    ],
    korrekteAntwort: 1,
    erklärung:
      'Das Flüssig-Mosaik-Modell (Singer & Nicolson, 1972) beschreibt die Membran als zweidimensionale Flüssigkeit, in der Lipide und Proteine lateral (seitlich) beweglich sind wie ein "Mosaik". Die Membran ist asymmetrisch (Innenseite ≠ Außenseite), und Proteine können die Membran vollständig durchspannen (integrale Proteine).',
    strategieTipp:
      "Flüssig-Mosaik = bewegliche Lipide + eingelagerte Proteine (wie Eisschollen im Meer). Lateral beweglich, aber nicht flip-flop.",
  },
  {
    id: "bio-q-014",
    stichwortId: "bio-1-03",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Welche Rolle spielt Cholesterin in tierischen Zellmembranen?",
    optionen: [
      "Es erhöht die Membranpermeabilität für Ionen",
      "Es stabilisiert die Membran und reguliert ihre Fluidität",
      "Es dient als primäre Energiequelle der Zelle",
      "Es bildet die Hauptstruktur der Membran",
      "Es transportiert aktiv Glucose in die Zelle",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Cholesterin lagert sich zwischen die Phospholipide ein und reguliert die Membranfluidität: Bei hohen Temperaturen vermindert es die Beweglichkeit (stabilisierend), bei niedrigen Temperaturen verhindert es das Erstarren. Cholesterin macht die Membran weniger permeabel für kleine wasserlösliche Moleküle. Es kommt nur in tierischen Zellen vor, Pflanzenzellen haben stattdessen Phytosterole.",
    strategieTipp:
      "Cholesterin = Fluiditätspuffer in tierischen Membranen. Hoch T° → weniger fluid, niedrig T° → flüssiger.",
  },
  {
    id: "bio-q-015",
    stichwortId: "bio-1-03",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was sind integrale Membranproteine?",
    optionen: [
      "Proteine, die lose an der Membranoberfläche haften",
      "Proteine, die die Lipid-Doppelschicht vollständig oder teilweise durchdringen",
      "Proteine, die nur im Zytoplasma vorkommen",
      "Proteine, die nur Kohlenhydrate transportieren",
      "Proteine, die ausschließlich strukturelle Funktionen haben",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Integrale Membranproteine sind fest in die Lipid-Doppelschicht eingebettet und durchdringen diese teilweise oder vollständig (transmembrane Proteine). Sie lassen sich nur durch Zerstörung der Membran (z.B. mit Detergenzien) entfernen. Sie haben vielfältige Funktionen: Transport, Rezeption, Enzymatik.",
    strategieTipp:
      "Integral = in Membran verankert (schwer zu lösen). Peripher = außen anliegend (leicht zu lösen). Transmembran = durchspannend.",
  },
  {
    id: "bio-q-016",
    stichwortId: "bio-1-03",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Welche Aussage zur Membranlipid-Asymmetrie ist korrekt?",
    optionen: [
      "Beide Membranseiten haben identische Lipidzusammensetzung",
      "Phosphatidylserin findet sich bevorzugt auf der extrazellulären Seite",
      "Die zytosolische Seite ist reich an Phosphatidylserin und Phosphatidylethanolamin",
      "Glykolipide sind gleichmäßig auf beiden Seiten verteilt",
      "Asymmetrie spielt keine funktionelle Rolle",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Membranen sind asymmetrisch: Die zytosolische (innere) Seite enthält vermehrt Phosphatidylserin (PS) und Phosphatidylethanolamin (PE), während Phosphatidylcholin und Sphingomyelin auf der extrazellulären Seite überwiegen. Glykolipide befinden sich ausschließlich auf der Außenseite. Diese Asymmetrie ist funktionell wichtig (z.B. PS-Exposition als Apoptosesignal).",
    strategieTipp:
      "Membran-Asymmetrie: Innen (Zytosol) → PS, PE. Außen (extrazellulär) → PC, Sphingomyelin, Glykolipide.",
  },
  {
    id: "bio-q-017",
    stichwortId: "bio-1-03",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Hauptfunktionen haben Membranproteine?",
    optionen: [
      "Ausschließlich strukturelle Stabilisierung",
      "Nur Energiespeicherung",
      "Transport, Rezeption, Zell-Zell-Erkennung, enzymatische Katalyse",
      "Nur genetische Information speichern",
      "Ausschließlich Bewegung der Zelle",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Membranproteine haben vielfältige Funktionen: (1) Transport (Kanäle, Carrier), (2) Rezeptorfunktion (Signalaufnahme), (3) Zell-Zell-Erkennung und Adhäsion, (4) enzymatische Aktivität, (5) Verankerung des Zytoskeletts, (6) Signaltransduktion. Diese funktionelle Vielfalt macht die Membran zu einer hochdynamischen Grenzfläche.",
    strategieTipp:
      "Membranproteine: TRÄGER (Transport, Rezeptoren, Adhäsion, Enzyme, Gerüst/Anker, Erkennung).",
  },
  {
    id: "bio-q-018",
    stichwortId: "bio-1-04",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: 'Was versteht man unter dem Begriff "Zytoplasma"?',
    optionen: [
      "Nur die Zellmembran",
      "Nur der Zellkern",
      "Der gesamte Zellinhalt zwischen Membran und Zellkern",
      "Nur die Mitochondrien",
      "Nur die DNA",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Das Zytoplasma umfasst den gesamten Zellinhalt zwischen Zellmembran und Zellkern (bei Eukaryoten) bzw. den gesamten Zellinhalt bei Prokaryoten. Es besteht aus dem Zytosol (flüssige Phase) und den darin eingebetteten Organellen, Proteinen, RNA und anderen Molekülen.",
    strategieTipp:
      "Zytoplasma = alles zwischen Membran und Kern. Zytosol = nur die flüssige Phase (ohne Organellen).",
  },
  {
    id: "bio-q-019",
    stichwortId: "bio-1-04",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Woraus besteht das Zytosol hauptsächlich?",
    optionen: [
      "Zu 90% aus Lipiden",
      "Zu etwa 70% aus Wasser mit gelösten Proteinen, Ionen, Metaboliten und RNA",
      "Ausschließlich aus DNA",
      "Zu 95% aus Kohlenhydraten",
      "Nur aus membranumschlossenen Vesikeln",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Das Zytosol ist die flüssige, wässrige Phase des Zytoplasmas und besteht zu etwa 70% aus Wasser. Darin gelöst sind Proteine (20-30% der Masse), anorganische Ionen (K⁺, Mg²⁺, Ca²⁺, Cl⁻, Phosphat), Metaboliten (Glucose, ATP, Aminosäuren), RNA, und kleine organische Moleküle. Es ist das Medium für viele Stoffwechselreaktionen.",
    strategieTipp:
      "Zytosol = wässrige Lösung (ca. 70% H₂O) + gelöste Stoffe (Proteine, Ionen, Metaboliten, RNA).",
  },
  {
    id: "bio-q-020",
    stichwortId: "bio-1-04",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Welche biochemischen Prozesse finden typischerweise im Zytosol statt?",
    optionen: [
      "Nur die Atmungskette",
      "Glykolyse, Teile der Gluconeogenese, Fettsäuresynthese, viele Synthesereaktionen",
      "Ausschließlich der Citratzyklus",
      "Nur die Photosynthese",
      "Ausschließlich die DNA-Replikation",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Im Zytosol laufen zahlreiche Stoffwechselwege ab: Glykolyse (Glucoseabbau), Teile der Gluconeogenese (Glucoseneubildung), Fettsäuresynthese, Glykogensynthese und -abbau, viele Aminosäure-Synthesen, und ein Großteil der Proteinbiosynthese an freien Ribosomen. Atmungskette und Citratzyklus finden in Mitochondrien statt, Photosynthese in Chloroplasten.",
    strategieTipp:
      "Zytosol-Stoffwechsel: Glykolyse, Fettsäuresynthese, Glykogen-Stoffwechsel, Proteinsynthese (freie Ribosomen).",
  },
  {
    id: "bio-q-021",
    stichwortId: "bio-1-04",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was ist das Zytoskelett und wo befindet es sich?",
    optionen: [
      "Ein Netzwerk aus Membranen im Zellkern",
      "Ein System aus Proteinfasern im Zytoplasma zur Strukturgebung und Bewegung",
      "Eine Lipidschicht um die Zelle",
      "Ein RNA-Komplex im Nucleolus",
      "Eine starre Zellwand bei Tierzellen",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Das Zytoskelett ist ein dynamisches Netzwerk aus Proteinfasern im Zytoplasma, bestehend aus Mikrotubuli (Tubulin), Mikrofilamenten/Aktinfilamenten (Aktin) und Intermediärfilamenten. Es gibt der Zelle Form und mechanische Stabilität, ermöglicht Zellbewegung, intrazellulären Transport und Zellteilung.",
    strategieTipp:
      "Zytoskelett = 3 Fasertypen im Zytoplasma: Mikrotubuli (groß), Aktin-Mikrofilamente (klein), Intermediärfilamente (mittel).",
  },
  {
    id: "bio-q-022",
    stichwortId: "bio-1-05",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was ist die Hauptfunktion des Zellkerns?",
    optionen: [
      "ATP-Produktion",
      "Proteinsynthese",
      "Speicherung und Expression der genetischen Information",
      "Lipidsynthese",
      "Photosynthese",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Der Zellkern (Nucleus) ist das Kontrollzentrum der Zelle und speichert die genetische Information in Form von DNA. Hier finden DNA-Replikation und Transkription (DNA → RNA) statt. Der Kern steuert über die Genexpression alle Zellfunktionen. ATP-Produktion erfolgt in Mitochondrien, Proteinsynthese am Ribosom.",
    strategieTipp:
      'Zellkern = Informationszentrum (DNA-Speicherung, Replikation, Transkription). "Chef-Büro" der Zelle.',
  },
  {
    id: "bio-q-023",
    stichwortId: "bio-1-05",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Woraus besteht die Kernhülle?",
    optionen: [
      "Einer einfachen Lipidschicht",
      "Einer Doppelmembran mit Kernporen",
      "Einer Proteinschicht ohne Lipide",
      "Einer Cellulosewand",
      "Einer einzelnen Phospholipid-Doppelschicht ohne Poren",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Die Kernhülle (Kernmembran) besteht aus zwei Phospholipid-Doppelschichten (äußere und innere Kernmembran), die einen perinukleären Raum einschließen. Die äußere Membran geht in das raue ER über. Kernporen durchdringen beide Membranen und ermöglichen den kontrollierten Stoffaustausch zwischen Kern und Zytoplasma.",
    strategieTipp:
      "Kernhülle = Doppelmembran (2 Lipid-Doppelschichten) + Kernporen. Äußere Membran = kontinuierlich mit rauem ER.",
  },
  {
    id: "bio-q-024",
    stichwortId: "bio-1-05",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Was sind Kernporenkomplexe und welche Funktion haben sie?",
    optionen: [
      "Einfache Löcher in der Kernmembran für freie Diffusion",
      "Komplexe Proteinstrukturen, die selektiven Transport zwischen Kern und Zytoplasma regulieren",
      "Ribosomen, die in der Kernmembran verankert sind",
      "DNA-Replikationskomplexe",
      "Mitochondrien, die an der Kernmembran haften",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Kernporenkomplexe sind große Proteinstrukturen (ca. 125 MDa, ~30 verschiedene Nukleoporine) in der Kernhülle. Sie regulieren selektiv den bidirektionalen Transport: kleine Moleküle (<40 kDa) diffundieren passiv, größere Moleküle (Proteine, RNA) benötigen Kernlokalisations- bzw. Kernexportsignale und werden aktiv (energie- und rezeptorabhängig) transportiert.",
    strategieTipp:
      "Kernporen = selektive Schleusen. Klein (<40 kDa) → passiv. Groß → aktiv + Signal (NLS/NES) + Importin/Exportin.",
  },
  {
    id: "bio-q-025",
    stichwortId: "bio-1-05",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was ist Chromatin?",
    optionen: [
      "Reine DNA ohne Proteine",
      "Ein Komplex aus DNA und Histonproteinen",
      "Ein Lipid-Protein-Komplex",
      "RNA ohne assoziierte Proteine",
      "Eine Form von ATP",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Chromatin ist der DNA-Protein-Komplex im Zellkern. DNA ist um Histone (basische Proteine) gewickelt und bildet Nukleosomen (Grundeinheit: DNA um Histon-Oktamer). Chromatin existiert in zwei Formen: Euchromatin (locker, transkriptionsaktiv) und Heterochromatin (dicht, inaktiv). Bei der Zellteilung kondensiert Chromatin zu Chromosomen.",
    strategieTipp:
      "Chromatin = DNA + Histone. Euchromatin = locker/aktiv. Heterochromatin = dicht/inaktiv. Kondensiert → Chromosomen.",
  },
  {
    id: "bio-q-026",
    stichwortId: "bio-1-05",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Was ist der Nucleolus und welche Funktion hat er?",
    optionen: [
      "Ein membranumschlossenes Organell zur ATP-Synthese",
      "Eine nicht-membranumschlossene Struktur im Kern zur ribosomalen RNA-Synthese und Ribosomen-Assemblierung",
      "Der Ort der DNA-Replikation",
      "Ein Bereich zur Lipidsynthese",
      "Eine Vakuole im Zellkern",
    ],
    korrekteAntwort: 1,
    erklärung:
      'Der Nucleolus (Kernkörperchen) ist eine nicht-membranumschlossene Struktur im Zellkern. Hier werden ribosomale RNA-Gene (rDNA) transkribiert, rRNA prozessiert und mit ribosomalen Proteinen zu ribosomalen Untereinheiten assembliert. Er ist die "Ribosomen-Fabrik" der Zelle. Während der Mitose löst sich der Nucleolus auf und bildet sich nach der Teilung neu.',
    strategieTipp:
      "Nucleolus = Ribosomen-Fabrik (rRNA-Synthese + Ribosomen-Assemblierung). Keine Membran, verschwindet bei Mitose.",
  },
  {
    id: "bio-q-027",
    stichwortId: "bio-1-05",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Wie viele Chromosomen hat eine menschliche Körperzelle im Normalfall?",
    optionen: ["23", "46", "48", "92", "100"],
    korrekteAntwort: 1,
    erklärung:
      "Menschliche Körperzellen (somatische Zellen) sind diploid und enthalten 46 Chromosomen (23 Chromosomenpaare: 22 Autosomenpaare + 1 Gonosomenpaar XX oder XY). Keimzellen (Gameten) sind haploid mit 23 Chromosomen. Die Chromosomen werden während der Zellteilung aus dem Chromatin kondensiert sichtbar.",
    strategieTipp:
      "Mensch: 2n = 46 (diploid in Körperzellen), n = 23 (haploid in Keimzellen). 22 Autosomenpaare + 1 Gonosomenpaar.",
  },
  {
    id: "bio-q-028",
    stichwortId: "bio-1-06",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was ist die Hauptfunktion der Mitochondrien?",
    optionen: [
      "Photosynthese",
      "Proteinsynthese",
      "ATP-Produktion durch Zellatmung",
      "DNA-Replikation",
      "Lipidabbau ausschließlich",
    ],
    korrekteAntwort: 2,
    erklärung:
      'Mitochondrien sind die "Kraftwerke der Zelle" und produzieren den Großteil des zellulären ATP durch oxidative Phosphorylierung (Atmungskette + Chemiosmose). Hier laufen auch der Citratzyklus, β-Oxidation von Fettsäuren und Teile anderer Stoffwechselwege ab. Sie sind essentiell für die ärobe Energiegewinnung.',
    strategieTipp:
      "Mitochondrien = ATP-Kraftwerke. Atmungskette + Citratzyklus + oxidative Phosphorylierung.",
  },
  {
    id: "bio-q-029",
    stichwortId: "bio-1-06",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Wie ist ein Mitochondrium strukturell aufgebaut?",
    optionen: [
      "Eine einfache Membran ohne innere Strukturen",
      "Doppelmembran mit äußerer und innerer Membran, die Cristae bildet",
      "Drei Membranen mit Thylakoidstapeln",
      "Keine Membran, nur Proteine",
      "Eine Membran mit Poren wie der Zellkern",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Mitochondrien haben eine Doppelmembran: Die äußere Membran ist glatt und porös (Porine), die innere Membran ist stark gefaltet (Cristae) und enthält die Atmungskettenkomplexe. Zwischen beiden liegt der Intermembranraum. Das Innere (Matrix) enthält mitochondriale DNA, Ribosomen und Enzyme des Citratzyklus.",
    strategieTipp:
      "Mitochondrien-Aufbau: Äußere Membran (glatt) + Innere Membran (Cristae mit Atmungskette) + Matrix (DNA, Ribosomen, Enzyme).",
  },
  {
    id: "bio-q-030",
    stichwortId: "bio-1-06",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Was ist die Atmungskette und wo findet sie statt?",
    optionen: [
      "Ein Prozess im Zytosol zur Glucosespaltung",
      "Eine Elektronentransportkette in der inneren Mitochondrienmembran, die einen Protonengradienten erzeugt",
      "Ein Prozess in Chloroplasten zur Sauerstoffproduktion",
      "Ein DNA-Replikationsmechanismus",
      "Ein Proteintransportsystem",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Die Atmungskette ist eine Elektronentransportkette in der inneren Mitochondrienmembran, bestehend aus Komplexen I-IV. Elektronen werden von NADH und FADH₂ auf Sauerstoff übertragen, wobei Protonen (H⁺) in den Intermembranraum gepumpt werden. Der entstehende Protonengradient treibt die ATP-Synthase an (Komplex V), die ATP produziert (chemiosmotische Kopplung).",
    strategieTipp:
      "Atmungskette: Komplex I-IV pumpen H⁺ → Gradient → ATP-Synthase (V) → ATP. Endakzeptor = O₂ → H₂O.",
  },
  {
    id: "bio-q-031",
    stichwortId: "bio-1-06",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Wo findet der Citratzyklus (Krebs-Zyklus) statt?",
    optionen: [
      "Im Zytosol",
      "In der mitochondrialen Matrix",
      "Im Intermembranraum der Mitochondrien",
      "Im Zellkern",
      "In den Ribosomen",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Der Citratzyklus findet in der mitochondrialen Matrix statt. Hier wird Acetyl-CoA (aus Pyruvat oder Fettsäuren) oxidiert, wobei NADH, FADH₂ und GTP/ATP entstehen. Die Reduktionsäquivalente (NADH, FADH₂) werden dann an die Atmungskette in der inneren Membran weitergegeben.",
    strategieTipp:
      "Citratzyklus-Ort = mitochondriale Matrix. Pyruvat-Decarboxylierung + Citratzyklus → NADH/FADH₂ für Atmungskette.",
  },
  {
    id: "bio-q-032",
    stichwortId: "bio-1-06",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Was besagt die Endosymbiontentheorie bezüglich Mitochondrien?",
    optionen: [
      "Mitochondrien entstehen jedes Mal neu aus dem ER",
      "Mitochondrien stammen von endosymbiotischen Prokaryoten ab, die von einer Wirtszelle aufgenommen wurden",
      "Mitochondrien sind von außen eingedrungene Viren",
      "Mitochondrien wurden im Labor künstlich erzeugt",
      "Mitochondrien sind Teil des Zellkerns",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Die Endosymbiontentheorie (Lynn Margulis) besagt, dass Mitochondrien von äroben Prokaryoten abstammen, die vor ca. 1,5 Mrd. Jahren von einer Wirtszelle aufgenommen wurden. Belege: eigene DNA (ringförmig, prokaryotisch), 70S-Ribosomen, Doppelmembran, eigene Teilung (binär), phylogenetische Verwandtschaft zu α-Proteobakterien.",
    strategieTipp:
      "Endosymbiontentheorie: Mitochondrien = ehemalige Bakterien. Belege: eigene DNA, 70S-Ribosomen, Doppelmembran, binäre Teilung.",
  },
  {
    id: "bio-q-033",
    stichwortId: "bio-1-06",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was ist oxidative Phosphorylierung?",
    optionen: [
      "Die direkte Übertragung von Phosphat auf ADP während der Glykolyse",
      "Die ATP-Synthese durch einen Protonengradienten an der inneren Mitochondrienmembran",
      "Die Synthese von Glucose aus CO₂",
      "Die Replikation mitochondrialer DNA",
      "Der Abbau von Proteinen",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Oxidative Phosphorylierung ist die ATP-Synthese durch die ATP-Synthase, angetrieben vom Protonengradienten über die innere Mitochondrienmembran. Dieser Gradient wird durch die Atmungskette (oxidative Prozesse) aufgebaut. Pro NADH entstehen ca. 2,5 ATP, pro FADH₂ ca. 1,5 ATP. Dies ist der Hauptweg der ATP-Gewinnung in äroben Zellen.",
    strategieTipp:
      "Oxidative Phosphorylierung = Atmungskette (Oxidation) + Chemiosmose (Phosphorylierung über H⁺-Gradient).",
  },
  {
    id: "bio-q-034",
    stichwortId: "bio-1-06",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Welche Besonderheit hat die mitochondriale DNA?",
    optionen: [
      "Sie ist linear wie bei Eukaryoten",
      "Sie ist ringförmig und wird maternal vererbt",
      "Sie enthält ausschließlich Gene für ribosomale Proteine",
      "Sie ist identisch mit der Kern-DNA",
      "Sie existiert nicht",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Die mitochondriale DNA (mtDNA) ist ringförmig (zirkulär) wie bei Bakterien, liegt in mehreren Kopien vor und wird maternal (über die Eizelle) vererbt. Sie kodiert für 13 Proteine der Atmungskette, 22 tRNAs und 2 rRNAs. Die meisten mitochondrialen Proteine (ca. 1000-1500) werden jedoch von Kern-DNA kodiert und importiert.",
    strategieTipp:
      "Mitochondriale DNA: ringförmig, maternal vererbt, kodiert 13 Atmungskettenproteine + tRNAs + rRNAs. Rest = Kern-DNA.",
  },
  {
    id: "bio-q-035",
    stichwortId: "bio-1-07",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was sind Plastiden?",
    optionen: [
      "Organellen, die nur in tierischen Zellen vorkommen",
      "Organellen in Pflanzenzellen und Algen, zu denen Chloroplasten gehören",
      "Bestandteile der Zellwand",
      "Ribosomen",
      "Mitochondrien",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Plastiden sind Organellen, die charakteristisch für Pflanzenzellen und Algen sind. Sie haben eine Doppelmembran und stammen evolutionär von Cyanobakterien ab (Endosymbiontentheorie). Es gibt drei Haupttypen: Chloroplasten (Photosynthese), Chromoplasten (Farbstoffe), Leukoplasten (Speicherung).",
    strategieTipp:
      "Plastiden = Pflanzen-Organellen mit Doppelmembran. 3 Typen: Chloroplasten (grün), Chromoplasten (farbig), Leukoplasten (farblos).",
  },
  {
    id: "bio-q-036",
    stichwortId: "bio-1-07",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was ist die Hauptfunktion von Chloroplasten?",
    optionen: [
      "ATP-Produktion durch Zellatmung",
      "Photosynthese: Umwandlung von Lichtenergie in chemische Energie",
      "Proteinsynthese",
      "Lipidspeicherung",
      "DNA-Replikation",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Chloroplasten sind die Orte der Photosynthese in Pflanzen und Algen. Sie wandeln Lichtenergie in chemische Energie um (Glucose) und produzieren dabei Sauerstoff. Die Lichtreaktionen finden an den Thylakoidmembranen statt, der Calvin-Zyklus (Dunkelreaktion) im Stroma. Sie enthalten Chlorophyll, das Licht absorbiert.",
    strategieTipp:
      "Chloroplasten = Photosynthese-Kraftwerke. Lichtreaktion (Thylakoide) + Calvin-Zyklus (Stroma) → Glucose + O₂.",
  },
  {
    id: "bio-q-037",
    stichwortId: "bio-1-07",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was sind Chromoplasten?",
    optionen: [
      "Plastiden, die Photosynthese betreiben",
      "Plastiden, die Carotinoide und andere Farbstoffe enthalten",
      "Mitochondrien mit Farbstoffen",
      "Zellkerne mit Chromatin",
      "Vakuolen mit Anthocyanen",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Chromoplasten sind Plastiden, die gelbe, orange oder rote Farbstoffe (v.a. Carotinoide wie β-Carotin, Lycopin) enthalten. Sie sind verantwortlich für die Färbung reifer Früchte (z.B. Tomaten, Paprika) und Blüten. Sie können aus Chloroplasten entstehen (z.B. beim Reifen von Früchten).",
    strategieTipp:
      "Chromoplasten = bunte Plastiden (gelb, orange, rot). Carotinoide. Beispiel: reife Tomaten, Paprika, Herbstblätter.",
  },
  {
    id: "bio-q-038",
    stichwortId: "bio-1-07",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Was sind Leukoplasten und welche Funktion haben sie?",
    optionen: [
      "Plastiden mit Chlorophyll zur Photosynthese",
      "Farblose Plastiden zur Speicherung von Stärke, Lipiden oder Proteinen",
      "Organellen zur ATP-Produktion",
      "Plastiden, die nur in Algen vorkommen",
      "Vakuolen ohne Farbstoffe",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Leukoplasten sind farblose Plastiden, die in nicht-photosynthetisch aktiven Geweben vorkommen (z.B. Wurzeln, Knollen). Sie dienen der Speicherung: Amyloplasten speichern Stärke (z.B. in Kartoffeln), Elaioplasaten speichern Lipide, Proteinoplasten speichern Proteine. Sie können sich zu Chloroplasten entwickeln (z.B. bei Lichtexposition).",
    strategieTipp:
      "Leukoplasten = farblose Speicher-Plastiden. Amyloplasten (Stärke), Elaioplasaten (Lipide), Proteinoplasten (Proteine).",
  },
  {
    id: "bio-q-039",
    stichwortId: "bio-1-08",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was ist das Endoplasmatische Retikulum (ER)?",
    optionen: [
      "Ein membranumschlossener Zellkern",
      "Ein Netzwerk aus membranumschlossenen Kanälen und Hohlräumen im Zytoplasma",
      "Ein Organell zur ATP-Produktion",
      "Eine Form der DNA",
      "Die Zellmembran",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Das Endoplasmatische Retikulum (ER) ist ein ausgedehntes Membransystem aus Kanälen (Tubuli) und abgeflachten Säcken (Zisternen), das das Zytoplasma durchzieht. Es ist mit der äußeren Kernmembran verbunden. Man unterscheidet raues ER (mit Ribosomen) und glattes ER (ohne Ribosomen) mit unterschiedlichen Funktionen.",
    strategieTipp:
      "ER = Membran-Netzwerk im Zytoplasma. Raues ER (mit Ribosomen) + Glattes ER (ohne Ribosomen).",
  },
  {
    id: "bio-q-040",
    stichwortId: "bio-1-08",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was ist die Hauptfunktion des rauen ER?",
    optionen: [
      "Lipidsynthese",
      "Synthese und Modifikation von Proteinen für Sekretion und Membran",
      "ATP-Produktion",
      "DNA-Replikation",
      "Calciumspeicherung ausschließlich",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Das raue ER ist mit Ribosomen besetzt und der Ort der Synthese von Membranproteinen, sekretorischen Proteinen und lysosomalen Proteinen. Hier erfolgen auch Co- und posttranslationale Modifikationen (Glykosylierung, Faltung, Disulfidbrückenbildung). Falsch gefaltete Proteine werden durch ER-assoziierte Degradation (ERAD) eliminiert.",
    strategieTipp:
      "Raues ER = Proteinsynthese (Membran- + Sekretionsproteine) + Modifikation (Glykosylierung, Faltung).",
  },
  {
    id: "bio-q-041",
    stichwortId: "bio-1-08",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Welche Funktionen hat das glatte ER?",
    optionen: [
      "Ausschließlich Proteinsynthese",
      "Lipidsynthese, Kohlenhydratstoffwechsel, Calciumspeicherung, Entgiftung",
      "Nur DNA-Replikation",
      "Nur Photosynthese",
      "Ausschließlich Ribosomen-Produktion",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Das glatte ER hat multiple Funktionen: (1) Lipidsynthese (Phospholipide, Cholesterin, Steroidhormone), (2) Kohlenhydratstoffwechsel (Glykogenabbau in Leber), (3) Calciumspeicherung (wichtig für Signaltransduktion und Muskelkontraktion), (4) Entgiftung durch Cytochrom-P450-Enzyme (v.a. in Leber). Es besitzt keine Ribosomen.",
    strategieTipp:
      "Glattes ER: LECK-Funktionen = Lipidsynthese, Entgiftung, Calciumspeicher, Kohlenhydratstoffwechsel.",
  },
  {
    id: "bio-q-042",
    stichwortId: "bio-1-08",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Wo werden Proteine mit einem Signalpeptid synthetisiert?",
    optionen: [
      "Ausschließlich an freien Ribosomen im Zytosol",
      "An Ribosomen des rauen ER",
      "Im Zellkern",
      "In Mitochondrien ausschließlich",
      "Im Golgi-Apparat",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Proteine mit einem N-terminalen Signalpeptid (ER-Signalsequenz) werden an Ribosomen des rauen ER synthetisiert. Das Signal-Erkennungspartikel (SRP) bindet das Signalpeptid während der Translation, stoppt die Synthese temporär und dirigiert das Ribosom zum ER. Nach Bindung wird die Synthese fortgesetzt und das Protein cotranslational in das ER-Lumen transloziert.",
    strategieTipp:
      "Signalpeptid → SRP-Bindung → Ribosom zu rauem ER → cotranslationale Translokation ins ER-Lumen.",
  },
  {
    id: "bio-q-043",
    stichwortId: "bio-1-08",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Was ist die ER-assoziierte Degradation (ERAD)?",
    optionen: [
      "Der Abbau des gesamten ER bei Zelltod",
      "Ein Qualitätskontrollsystem, das falsch gefaltete Proteine aus dem ER ins Zytosol exportiert und dort abbaut",
      "Die Synthese neuer ER-Membranen",
      "Der Transport von Proteinen zum Golgi",
      "Die Replikation von ER-DNA",
    ],
    korrekteAntwort: 1,
    erklärung:
      "ERAD (ER-Associated Degradation) ist ein Qualitätskontrollmechanismus: Falsch gefaltete oder nicht-assemblierte Proteine im ER werden erkannt, retrotransloziert (zurück ins Zytosol transportiert), ubiquitiniert und vom Proteasom abgebaut. Dies verhindert Akkumulation toxischer Proteinaggregate. Störungen von ERAD können zu ER-Stress führen.",
    strategieTipp:
      "ERAD = ER-Qualitätskontrolle. Falsch gefaltete Proteine → Rücktransport → Ubiquitinierung → Proteasom-Abbau.",
  },
  {
    id: "bio-q-044",
    stichwortId: "bio-1-08",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Warum ist das ER in Muskelzellen (sarkoplasmatisches Retikulum) besonders stark entwickelt?",
    optionen: [
      "Für erhöhte Proteinsynthese",
      "Für Calciumspeicherung und -freisetzung zur Regulation der Muskelkontraktion",
      "Für gesteigerte Lipidsynthese",
      "Für vermehrte DNA-Replikation",
      "Für Energiespeicherung",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Das sarkoplasmatische Retikulum (SR) ist eine spezialisierte Form des glatten ER in Muskelzellen. Es speichert große Mengen an Calcium-Ionen. Bei einem Aktionspotential werden Ca²⁺-Ionen aus dem SR freigesetzt, was die Muskelkontraktion auslöst. Die anschließende aktive Rückaufnahme von Ca²⁺ (durch Ca²⁺-ATPase) beendet die Kontraktion.",
    strategieTipp:
      "Sarkoplasmatisches Retikulum (Muskel) = Ca²⁺-Speicher. Ca²⁺-Freisetzung → Kontraktion, Ca²⁺-Aufnahme → Relaxation.",
  },
  {
    id: "bio-q-045",
    stichwortId: "bio-1-09",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was ist die Hauptfunktion des Golgi-Apparats?",
    optionen: [
      "DNA-Replikation",
      "Modifikation, Sortierung und Verpackung von Proteinen",
      "ATP-Produktion",
      "Photosynthese",
      "Proteinsynthese",
    ],
    korrekteAntwort: 1,
    erklärung:
      'Der Golgi-Apparat ist das "Post- und Verteilzentrum" der Zelle. Er modifiziert Proteine und Lipide (v.a. Glykosylierung), sortiert sie nach Zielort (Lysosom, Plasmamembran, Sekretion) und verpackt sie in Transportvesikel. Er besteht aus gestapelten, membranumschlossenen Zisternen (Dictyosomen).',
    strategieTipp:
      "Golgi-Apparat = Post-Zentrum. Modifikation (Glykosylierung) + Sortierung + Verpackung in Vesikel.",
  },
  {
    id: "bio-q-046",
    stichwortId: "bio-1-09",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Wie ist der Golgi-Apparat strukturell organisiert?",
    optionen: [
      "Als einzelne, isolierte Membran",
      "Als Stapel von flachen, membranumschlossenen Zisternen mit cis-, medialer und trans-Seite",
      "Als Netzwerk aus Tubuli ohne Ordnung",
      "Als kugelförmiges Organell",
      "Als Teil der Zellmembran",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Der Golgi-Apparat besteht aus 4-8 gestapelten, flachen Zisternen (Dictyosom). Man unterscheidet: cis-Seite (ER-nah, Eingangsseite), mediale Zisternen (Mitte) und trans-Seite (Ausgangsseite mit trans-Golgi-Netzwerk). Proteine wandern typischerweise von cis nach trans und werden dabei schrittweise modifiziert.",
    strategieTipp:
      "Golgi-Struktur: Zisternen-Stapel. cis (ER-nah, Eingang) → medial → trans (Ausgang, Sortierung).",
  },
  {
    id: "bio-q-047",
    stichwortId: "bio-1-09",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Was ist Glykosylierung und wo findet sie hauptsächlich statt?",
    optionen: [
      "Die Spaltung von Zuckern, findet im Zytosol statt",
      "Die Anheftung von Zuckerketten an Proteine oder Lipide, findet im ER und Golgi statt",
      "Die Synthese von Glykogen ausschließlich in Muskelzellen",
      "Die Replikation von Glykoproteinen",
      "Der Abbau von Glykogen in der Leber",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Glykosylierung ist die enzymatische Anheftung von Oligosacchariden (Zuckerketten) an Proteine (Glykoproteine) oder Lipide (Glykolipide). N-Glykosylierung beginnt im ER (an Asparagin), O-Glykosylierung im Golgi (an Serin/Threonin). Im Golgi werden Zuckerketten modifiziert, verlängert oder verkürzt. Glykosylierung beeinflusst Proteinfaltung, Stabilität, Lokalisation und Funktion.",
    strategieTipp:
      "Glykosylierung = Zucker-Anheftung. N-Glykosylierung (ER, Asn) + O-Glykosylierung (Golgi, Ser/Thr).",
  },
  {
    id: "bio-q-048",
    stichwortId: "bio-1-09",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Wie werden Proteine im Golgi-Apparat zu ihrem Bestimmungsort sortiert?",
    optionen: [
      "Zufällig durch passive Diffusion",
      "Durch spezifische Signalsequenzen und Rezeptor-vermittelte Verpackung in Vesikel",
      "Durch direkte Verschmelzung des Golgi mit dem Zielkompartiment",
      "Ausschließlich durch Größenfilterung",
      "Durch DNA-Anheftung",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Die Sortierung erfolgt hochspezifisch durch Signalsequenzen: Lysosomale Proteine erhalten Mannose-6-Phosphat-Markierungen (M6P) und werden durch M6P-Rezeptoren erkannt. Membranproteine haben Transmembrandomänen, sekretorische Proteine werden in sekretorischen Vesikeln verpackt. Im trans-Golgi-Netzwerk erfolgt die finale Sortierung in unterschiedliche Vesikeltypen.",
    strategieTipp:
      "Golgi-Sortierung: Signal-Sequenzen → Rezeptor-Erkennung → spezifische Vesikel. Beispiel: M6P-Signal → Lysosomen.",
  },
  {
    id: "bio-q-049",
    stichwortId: "bio-1-09",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Was sind COPI- und COPII-Vesikel?",
    optionen: [
      "Vesikel, die ausschließlich Lipide transportieren",
      "COPII-Vesikel transportieren vom ER zum Golgi, COPI-Vesikel retrograd innerhalb des Golgi und zurück zum ER",
      "Beide transportieren nur vom Golgi zur Plasmamembran",
      "COPI transportiert DNA, COPII transportiert RNA",
      "Sie sind identisch und austauschbar",
    ],
    korrekteAntwort: 1,
    erklärung:
      "COPII-Vesikel (Coat Protein Complex II) transportieren Fracht vom ER zum cis-Golgi (anterograder Transport). COPI-Vesikel transportieren retrograd innerhalb des Golgi-Stapels und vom Golgi zurück zum ER (Retrieval von ER-Proteinen mit KDEL-Signal). Diese Coat-Proteine ermöglichen selektive Fracht-Aufnahme und Vesikelbildung.",
    strategieTipp:
      "COPII = ER → Golgi (vorwärts). COPI = Golgi → ER und innerhalb Golgi (rückwärts). Coat-Proteine für selektiven Transport.",
  },
  {
    id: "bio-q-050",
    stichwortId: "bio-1-09",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was passiert mit Proteinen, die ein KDEL-Signal tragen?",
    optionen: [
      "Sie werden zum Lysosom transportiert",
      "Sie werden an die Plasmamembran transportiert",
      "Sie werden aus dem Golgi zurück ins ER transportiert",
      "Sie werden abgebaut",
      "Sie werden sezerniert",
    ],
    korrekteAntwort: 2,
    erklärung:
      "KDEL (Lys-Asp-Glu-Leu) ist ein C-terminales Retentionssignal für ER-residente Proteine. Falls solche Proteine versehentlich in den Golgi gelangen, werden sie dort von KDEL-Rezeptoren erkannt und in COPI-Vesikeln zurück zum ER transportiert (Retrieval). Dies stellt sicher, dass ER-Proteine (z.B. Chaperone wie BiP) im ER verbleiben.",
    strategieTipp:
      "KDEL-Signal = ER-Rückführung. KDEL-Proteine versehentlich im Golgi → KDEL-Rezeptor → COPI-Vesikel → zurück ins ER.",
  },
];
