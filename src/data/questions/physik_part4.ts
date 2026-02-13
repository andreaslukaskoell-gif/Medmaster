export const fragenPart4 = [
  {
    id: 'ph-q-151',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Aus welchen Teilchen besteht ein Atom im Kern-Hülle-Modell?',
    optionen: [
      'Protonen im Kern, Elektronen in der Hülle',
      'Protonen und Neutronen im Kern, Elektronen in der Hülle',
      'Protonen und Elektronen im Kern, Neutronen in der Hülle',
      'Nur Protonen im Kern, Neutronen und Elektronen in der Hülle',
      'Protonen, Neutronen und Elektronen im Kern'
    ],
    korrekteAntwort: 1,
    erklärung: 'Der Atomkern besteht aus positiv geladenen Protonen und ungeladenen Neutronen (zusammen Nukleonen genannt). Die negativ geladenen Elektronen befinden sich in der Atomhülle und bewegen sich in Orbitalen um den Kern.',
    strategieTipp: 'Merken Sie sich: Kern = Protonen + Neutronen, Hülle = Elektronen. Die Massenzahl A gibt die Summe der Nukleonen an.'
  },
  {
    id: 'ph-q-152',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Was versteht man unter der Ordnungszahl (Kernladungszahl) Z eines Elements?',
    optionen: [
      'Die Anzahl der Neutronen im Atomkern',
      'Die Summe aus Protonen und Neutronen',
      'Die Anzahl der Protonen im Atomkern',
      'Die Anzahl der Elektronen in der äußersten Schale',
      'Die relative Atommasse des Elements'
    ],
    korrekteAntwort: 2,
    erklärung: 'Die Ordnungszahl Z gibt die Anzahl der Protonen im Atomkern an. Sie bestimmt die chemischen Eigenschaften des Elements und seine Position im Periodensystem. Bei neutralen Atomen entspricht Z auch der Anzahl der Elektronen.',
    strategieTipp: 'Z = Protonenzahl = Position im Periodensystem. Merkhilfe: Z wie Zahl der Protonen.'
  },
  {
    id: 'ph-q-153',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Was sind Isotope?',
    optionen: [
      'Atome mit gleicher Neutronenzahl aber unterschiedlicher Protonenzahl',
      'Atome mit gleicher Elektronenzahl aber unterschiedlicher Protonenzahl',
      'Atome mit gleicher Protonenzahl aber unterschiedlicher Neutronenzahl',
      'Atome mit gleicher Massenzahl aber unterschiedlicher Ladung',
      'Atome mit gleicher Elektronenkonfiguration aber unterschiedlicher Masse'
    ],
    korrekteAntwort: 2,
    erklärung: 'Isotope sind Atome desselben Elements (gleiche Protonenzahl Z), die sich in der Anzahl der Neutronen unterscheiden. Beispiel: ¹²C und ¹⁴C sind beide Kohlenstoff-Isotope mit 6 Protonen, aber 6 bzw. 8 Neutronen.',
    strategieTipp: 'Isotope = gleiches Element (gleiche Ordnungszahl), unterschiedliche Massenzahl A. Viele Isotope sind radioaktiv.'
  },
  {
    id: 'ph-q-154',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Hauptquantenzahl n beschreibt die erste Elektronenschale (K-Schale)?',
    optionen: [
      'n = 0',
      'n = 1',
      'n = 2',
      'n = 3',
      'n = 4'
    ],
    korrekteAntwort: 1,
    erklärung: 'Die Hauptquantenzahl n nimmt ganzzahlige Werte ab 1 an. n = 1 bezeichnet die K-Schale (erste Schale), n = 2 die L-Schale, n = 3 die M-Schale usw. Die Hauptquantenzahl bestimmt die Energie und den mittleren Abstand der Elektronen vom Kern.',
    strategieTipp: 'n beginnt bei 1 (nicht bei 0). K-L-M-N-Schalen entsprechen n = 1-2-3-4. Maximale Elektronenzahl pro Schale: 2n².'
  },
  {
    id: 'ph-q-155',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Wie viele Elektronen können maximal in der zweiten Elektronenschale (L-Schale) untergebracht werden?',
    optionen: [
      '2 Elektronen',
      '4 Elektronen',
      '6 Elektronen',
      '8 Elektronen',
      '10 Elektronen'
    ],
    korrekteAntwort: 3,
    erklärung: 'Die maximale Elektronenzahl pro Schale berechnet sich nach 2n². Für die L-Schale (n = 2) gilt: 2 × 2² = 8 Elektronen. Diese verteilen sich auf das 2s-Orbital (2 e⁻) und drei 2p-Orbitale (6 e⁻).',
    strategieTipp: 'Formel 2n² merken: K-Schale (n=1) → 2, L-Schale (n=2) → 8, M-Schale (n=3) → 18.'
  },
  {
    id: 'ph-q-156',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Aussage über s-Orbitale ist korrekt?',
    optionen: [
      's-Orbitale haben eine hantelförmige Struktur',
      's-Orbitale können maximal 6 Elektronen aufnehmen',
      's-Orbitale sind kugelförmig symmetrisch',
      's-Orbitale existieren erst ab der zweiten Schale',
      's-Orbitale haben die Nebenquantenzahl l = 1'
    ],
    korrekteAntwort: 2,
    erklärung: 's-Orbitale sind kugelsymmetrisch (nicht hantelförmig wie p-Orbitale) und können maximal 2 Elektronen mit entgegengesetztem Spin aufnehmen. Sie existieren in jeder Schale (1s, 2s, 3s...) und haben die Nebenquantenzahl l = 0.',
    strategieTipp: 's = sphärisch (kugelförmig), max. 2 e⁻. p = hantelförmig, max. 6 e⁻. d = komplexer, max. 10 e⁻.'
  },
  {
    id: 'ph-q-157',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Ein Elektron im Wasserstoffatom befindet sich im 3d-Orbital. Welche Quantenzahlen sind möglich?',
    optionen: [
      'n = 3, l = 0',
      'n = 3, l = 1',
      'n = 3, l = 2',
      'n = 3, l = 3',
      'n = 2, l = 2'
    ],
    korrekteAntwort: 2,
    erklärung: 'Für d-Orbitale gilt l = 2. Die Hauptquantenzahl n muss mindestens l + 1 sein, also n ≥ 3 für d-Orbitale. Daher ist 3d mit n = 3 und l = 2 korrekt. Die Nebenquantenzahl l kann Werte von 0 bis n-1 annehmen.',
    strategieTipp: 'Orbitaltypen: s (l=0), p (l=1), d (l=2), f (l=3). Für n = 3 sind s, p und d möglich. Merkhilfe: "Spinne Pudding dort fort".'
  },
  {
    id: 'ph-q-158',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Was besagt das Pauli-Prinzip für Elektronen in Atomen?',
    optionen: [
      'Elektronen besetzen zürst die energieärmsten Orbitale',
      'Keine zwei Elektronen können in allen Quantenzahlen übereinstimmen',
      'Elektronen in einem Orbital haben parallele Spins',
      'Orbitale werden zürst einfach, dann doppelt besetzt',
      'Die Elektronenzahl entspricht der Protonenzahl'
    ],
    korrekteAntwort: 1,
    erklärung: 'Das Pauli-Ausschlussprinzip besagt, dass sich keine zwei Elektronen in einem Atom in allen vier Quantenzahlen (n, l, ml, ms) gleichen dürfen. Daher können in einem Orbital maximal zwei Elektronen mit entgegengesetztem Spin sein.',
    strategieTipp: 'Pauli-Prinzip ermöglicht nur 2 Elektronen pro Orbital (mit gegensätzlichem Spin). Wichtig für die Elektronenkonfiguration.'
  },
  {
    id: 'ph-q-159',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Kraft hält die Protonen im Atomkern zusammen, obwohl sie sich elektrisch abstoßen?',
    optionen: [
      'Die elektromagnetische Kraft',
      'Die Gravitationskraft',
      'Die schwache Wechselwirkung',
      'Die starke Wechselwirkung (Kernkraft)',
      'Die Van-der-Waals-Kraft'
    ],
    korrekteAntwort: 3,
    erklärung: 'Die starke Wechselwirkung (starke Kernkraft) ist die stärkste der vier Grundkräfte und wirkt nur auf sehr kurze Distanzen (ca. 10⁻¹⁵ m). Sie bindet Quarks zu Nukleonen und Nukleonen untereinander im Kern, wobei sie die elektrische Abstoßung der Protonen überwindet.',
    strategieTipp: 'Vier Grundkräfte: stark > elektromagnetisch > schwach > Gravitation. Starke Kraft = Kernkraft, hält Kern zusammen.'
  },
  {
    id: 'ph-q-160',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Was ist die Reichweite der starken Wechselwirkung?',
    optionen: [
      'Unendlich weit, nimmt aber mit dem Quadrat der Entfernung ab',
      'Etwa 10⁻⁸ m (Atomdurchmesser)',
      'Etwa 10⁻¹⁵ m (Kerndurchmesser)',
      'Etwa 10⁻¹⁸ m (Protondurchmesser)',
      'Etwa 10⁻³⁵ m (Planck-Länge)'
    ],
    korrekteAntwort: 2,
    erklärung: 'Die starke Wechselwirkung hat eine sehr kurze Reichweite von etwa 10⁻¹⁵ m, was der Größenordnung des Atomkerns entspricht. Außerhalb dieser Distanz nimmt sie extrem schnell ab. Dies erklärt, warum sie zwar die stärkste Kraft ist, aber nur im Kernbereich wirkt.',
    strategieTipp: 'Starke Kraft: sehr kurze Reichweite (~Kerngröße), aber enorm stark. Schwache Kraft: noch kürzere Reichweite (~10⁻¹⁸ m).'
  },
  {
    id: 'ph-q-161',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Welche Aussage über die schwache Wechselwirkung ist korrekt?',
    optionen: [
      'Sie ist verantwortlich für den Zusammenhalt des Atomkerns',
      'Sie vermittelt radioaktive Beta-Zerfälle',
      'Sie wirkt nur zwischen Protonen',
      'Sie hat eine größere Reichweite als die starke Wechselwirkung',
      'Sie ist stärker als die elektromagnetische Kraft'
    ],
    korrekteAntwort: 1,
    erklärung: 'Die schwache Wechselwirkung ist verantwortlich für Beta-Zerfälle, bei denen sich Neutronen in Protonen umwandeln (oder umgekehrt). Sie wirkt auf Quarks und Leptonen und ist deutlich schwächer als die starke und elektromagnetische Kraft, aber stärker als die Gravitation.',
    strategieTipp: 'Schwache Kraft ermöglicht Umwandlung von Teilchen (β-Zerfall). Beteiligt an Neutrinoprozessen und Kernfusion in der Sonne.'
  },
  {
    id: 'ph-q-162',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Warum sind schwere Atomkerne instabiler als leichte?',
    optionen: [
      'Weil die Gravitationskraft mit zunehmender Masse zunimmt',
      'Weil die elektromagnetische Abstoßung langreichweitiger ist als die Kernkraft',
      'Weil schwere Kerne mehr Elektronen haben',
      'Weil die starke Kraft bei schweren Kernen verschwindet',
      'Weil schwere Kerne keine Neutronen enthalten'
    ],
    korrekteAntwort: 1,
    erklärung: 'Die starke Kernkraft wirkt nur auf kurze Distanzen zwischen benachbarten Nukleonen. Die elektrische Abstoßung zwischen Protonen wirkt dagegen über größere Entfernungen. In großen Kernen summiert sich die Abstoßung aller Protonen, während die Kernkraft nur lokal wirkt, was zu Instabilität führt.',
    strategieTipp: 'Große Kerne: Coulomb-Abstoßung dominiert über Kernkraft → Instabilität. Deshalb brauchen schwere Kerne mehr Neutronen als Protonen.'
  },
  {
    id: 'ph-q-163',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Was ist ein Antiteilchen des Elektrons?',
    optionen: [
      'Das Proton',
      'Das Positron',
      'Das Neutron',
      'Das Neutrino',
      'Das Photon'
    ],
    korrekteAntwort: 1,
    erklärung: 'Das Positron ist das Antiteilchen des Elektrons. Es hat dieselbe Masse wie ein Elektron, aber positive Ladung. Bei der Begegnung von Elektron und Positron kommt es zur Paarvernichtung (Annihilation), wobei Energie in Form von Gammastrahlung freigesetzt wird.',
    strategieTipp: 'Antiteilchen haben entgegengesetzte Ladung, gleiche Masse. Elektron ↔ Positron, Proton ↔ Antiproton. Annihilation: E = 2mc².'
  },
  {
    id: 'ph-q-164',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Was versteht man unter Kernspaltung?',
    optionen: [
      'Die Verschmelzung zweier leichter Kerne zu einem schwereren',
      'Die Aufspaltung eines schweren Atomkerns in leichtere Fragmente',
      'Die Emission eines Alpha-Teilchens aus dem Kern',
      'Die Umwandlung eines Neutrons in ein Proton',
      'Die Ionisation der Elektronenhülle'
    ],
    korrekteAntwort: 1,
    erklärung: 'Bei der Kernspaltung (Fission) wird ein schwerer Atomkern (z.B. ²³⁵U) durch Neutronenbeschuss in zwei oder mehr leichtere Kerne gespalten. Dabei werden 2-3 Neutronen und viel Energie freigesetzt. Dies ist das Prinzip von Kernkraftwerken und Atombomben.',
    strategieTipp: 'Kernspaltung = schwer → leicht + Neutronen + Energie. Kernfusion = leicht → schwer + Energie. Bindungsenergie-Kurve erklärt beides.'
  },
  {
    id: 'ph-q-165',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welches Isotop wird hauptsächlich in Kernreaktoren für die kontrollierte Kernspaltung verwendet?',
    optionen: [
      '²³⁸U (Uran-238)',
      '²³⁵U (Uran-235)',
      '²³²Th (Thorium-232)',
      '²⁴⁰Pu (Plutonium-240)',
      '¹²C (Kohlenstoff-12)'
    ],
    korrekteAntwort: 1,
    erklärung: '²³⁵U ist das einzige in der Natur vorkommende spaltbare Isotop und wird in Kernreaktoren verwendet. Es macht nur 0,7% des natürlichen Urans aus (99,3% ist ²³⁸U). Thermische Neutronen können ²³⁵U effektiv spalten, während ²³⁸U nur durch schnelle Neutronen spaltbar ist.',
    strategieTipp: '²³⁵U = spaltbar mit thermischen Neutronen, selten in Natur. Anreicherung nötig für Reaktoren. ²³⁸U = häufig, aber nicht direkt spaltbar.'
  },
  {
    id: 'ph-q-166',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Was ist die Funktion von Moderatoren in Kernreaktoren?',
    optionen: [
      'Sie absorbieren überschüssige Neutronen zur Steuerung der Kettenreaktion',
      'Sie verlangsamen schnelle Neutronen auf thermische Geschwindigkeiten',
      'Sie schirmen die Umgebung vor Strahlung ab',
      'Sie kühlen den Reaktorkern',
      'Sie wandeln radioaktive Abfälle um'
    ],
    korrekteAntwort: 1,
    erklärung: 'Moderatoren (z.B. Wasser, Graphit, schweres Wasser) bremsen die bei der Spaltung entstehenden schnellen Neutronen durch elastische Stöße ab. Langsame (thermische) Neutronen haben eine viel höhere Wahrscheinlichkeit, weitere ²³⁵U-Kerne zu spalten, was die Kettenreaktion aufrechterhält.',
    strategieTipp: 'Moderator = Neutronenbremse. Steuerstäbe = Neutronenabsorber. Beides kontrolliert Kettenreaktion. Leichte Kerne (H, D, C) sind gute Moderatoren.'
  },
  {
    id: 'ph-q-167',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Was ist die kritische Masse bei der Kernspaltung?',
    optionen: [
      'Die Masse, bei der ein Reaktor überhitzt',
      'Die minimale Masse, bei der eine selbsterhaltende Kettenreaktion möglich ist',
      'Die Masse eines einzelnen Uranatoms',
      'Die maximal zulässige Masse in einem Reaktor',
      'Die Masse der Spaltprodukte nach einer Reaktion'
    ],
    korrekteAntwort: 1,
    erklärung: 'Die kritische Masse ist die minimale Menge spaltbaren Materials, bei der im Durchschnitt mindestens ein freigesetztes Neutron eine weitere Spaltung auslöst. Unterhalb der kritischen Masse entweichen zu viele Neutronen nach außen, und die Kettenreaktion erlischt.',
    strategieTipp: 'Kritische Masse hängt von Form, Dichte und Anreicherungsgrad ab. Kugel hat kleinste kritische Masse. Bei Bomben wird Material komprimiert.'
  },
  {
    id: 'ph-q-168',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Was versteht man unter Kernfusion?',
    optionen: [
      'Die Spaltung schwerer Atomkerne',
      'Die Verschmelzung leichter Atomkerne zu schwereren',
      'Die Anlagerung von Neutronen an den Kern',
      'Die Emission von Gammastrahlung',
      'Die Umwandlung von Materie in Antimaterie'
    ],
    korrekteAntwort: 1,
    erklärung: 'Bei der Kernfusion verschmelzen leichte Atomkerne (z.B. Wasserstoff-Isotope) zu schwereren Kernen unter Freisetzung enormer Energie. Dies ist der Energieproduktionsprozess in Sternen wie der Sonne. Fusion erfordert extrem hohe Temperaturen (Millionen Grad).',
    strategieTipp: 'Fusion = leichte Kerne verschmelzen. Sonne: 4 ¹H → ⁴He + Energie. Vorteil: viel Energie, keine langlebigen Abfälle. Problem: schwer zu kontrollieren.'
  },
  {
    id: 'ph-q-169',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Welche Fusionsreaktion findet hauptsächlich in der Sonne statt?',
    optionen: [
      'Die Verschmelzung von Helium zu Kohlenstoff',
      'Die Proton-Proton-Kette, bei der Wasserstoff zu Helium fusioniert',
      'Die Verschmelzung von Kohlenstoff zu Eisen',
      'Die Spaltung von Uran zu Blei',
      'Die Umwandlung von Neutronen zu Protonen'
    ],
    korrekteAntwort: 1,
    erklärung: 'In der Sonne läuft hauptsächlich die Proton-Proton-Kette ab: Vier Protonen (¹H) verschmelzen über mehrere Schritte zu einem Heliumkern (⁴He), wobei Positronen, Neutrinos und Gammastrahlung entstehen. Diese Reaktion erzeugt die Energie der Sonne.',
    strategieTipp: 'Sonne: pp-Kette (H → He). Schwerere Sterne: CNO-Zyklus. Endstadium massereicher Sterne: Fusion bis Fe, dann Kollaps.'
  },
  {
    id: 'ph-q-170',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Warum ist die Kernfusion schwerer zu realisieren als die Kernspaltung?',
    optionen: [
      'Weil Fusionskerne radioaktiv sind',
      'Weil extreme Temperaturen und Drücke nötig sind, um die Coulomb-Abstoßung zu überwinden',
      'Weil Fusion weniger Energie freisetzt als Spaltung',
      'Weil keine geeigneten Brennstoffe existieren',
      'Weil Fusion nur im Vakuum stattfinden kann'
    ],
    korrekteAntwort: 1,
    erklärung: 'Damit positiv geladene Kerne fusionieren können, müssen sie die elektrische Abstoßung (Coulomb-Barriere) überwinden. Dies erfordert Temperaturen von mehreren Millionen Grad Celsius und hohen Druck. Die technische Herausforderung liegt im Einschluss des heißen Plasmas.',
    strategieTipp: 'Fusionsprobleme: Coulomb-Abstoßung, Plasma-Einschluss (magnetisch oder Trägheit), Materialbelastung. ITER-Projekt arbeitet an Lösung.'
  },
  {
    id: 'ph-q-171',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Isotope werden bevorzugt für kontrollierte Fusionsexperimente verwendet?',
    optionen: [
      'Uran-235 und Plutonium-239',
      'Kohlenstoff-12 und Sauerstoff-16',
      'Deuterium und Tritium',
      'Helium-3 und Helium-4',
      'Wasserstoff-1 und Wasserstoff-2'
    ],
    korrekteAntwort: 2,
    erklärung: 'Die D-T-Reaktion (Deuterium + Tritium → Helium-4 + Neutron) hat bei erreichbaren Temperaturen den höchsten Wirkungsquerschnitt. Deuterium ist in Meerwasser reichlich vorhanden, Tritium wird im Reaktor aus Lithium erbrütet. Diese Reaktion setzt 17,6 MeV pro Fusion frei.',
    strategieTipp: 'D-T-Fusion: niedrigste Zündtemperatur (~100 Mio. K), höchster Energiegewinn. D-D-Fusion: schwieriger, aber Tritium-frei.'
  },
  {
    id: 'ph-q-172',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Warum wird bei Kernspaltung und Kernfusion Energie frei?',
    optionen: [
      'Weil Masse verloren geht und nach E = mc² in Energie umgewandelt wird',
      'Weil chemische Bindungen aufgebrochen werden',
      'Weil Elektronen von höheren auf tiefere Orbitale fallen',
      'Weil Wärme aus der Umgebung aufgenommen wird',
      'Weil kinetische Energie der Teilchen zunimmt'
    ],
    korrekteAntwort: 0,
    erklärung: 'Die Bindungsenergie pro Nukleon ist bei mittelschweren Kernen (um Eisen) am höchsten. Bei Fusion leichter Kerne und Spaltung schwerer Kerne entstehen stabilere Produkte mit höherer Bindungsenergie. Der Massendefekt wird nach Einsteins E = mc² in Energie umgewandelt.',
    strategieTipp: 'Bindungsenergie-Kurve: Maximum bei Fe. Links davon: Fusion gibt Energie. Rechts davon: Spaltung gibt Energie. Massendefekt → Energie.'
  },
  {
    id: 'ph-q-173',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Was versteht man unter Radioaktivität?',
    optionen: [
      'Die Emission elektromagnetischer Wellen durch heiße Körper',
      'Die spontane Umwandlung instabiler Atomkerne unter Aussendung ionisierender Strahlung',
      'Die Absorption von Röntgenstrahlung durch Materie',
      'Die chemische Reaktion radioaktiver Stoffe mit Luft',
      'Die Erwärmung radioaktiver Materialien'
    ],
    korrekteAntwort: 1,
    erklärung: 'Radioaktivität ist die spontane Umwandlung (Zerfall) instabiler Atomkerne unter Emission ionisierender Strahlung (Alpha-, Beta- oder Gammastrahlung). Dieser Prozess kann nicht durch äußere Bedingungen (Temperatur, Druck, chemische Bindung) beeinflusst werden.',
    strategieTipp: 'Radioaktivität = Kernprozess, spontan, stochastisch, exponentielle Abnahme. Unabhängig von chemischen/physikalischen Bedingungen.'
  },
  {
    id: 'ph-q-174',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Was ist ein Alpha-Teilchen?',
    optionen: [
      'Ein hochenergetisches Elektron',
      'Ein Heliumkern (2 Protonen, 2 Neutronen)',
      'Ein hochenergetisches Photon',
      'Ein freies Neutron',
      'Ein Positron'
    ],
    korrekteAntwort: 1,
    erklärung: 'Ein Alpha-Teilchen besteht aus 2 Protonen und 2 Neutronen, ist also identisch mit einem Helium-4-Kern. Es trägt eine zweifach positive Ladung und hat eine relativ große Masse. Alpha-Strahlung hat geringe Durchdringungsfähigkeit (bereits durch Papier stoppbar).',
    strategieTipp: 'α = ⁴He-Kern (2p + 2n), hohe Ionisierung, geringe Reichweite. β = Elektron/Positron, mittlere Werte. γ = Photon, hohe Durchdringung.'
  },
  {
    id: 'ph-q-175',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Wie ändert sich ein Atomkern beim Alpha-Zerfall?',
    optionen: [
      'Ordnungszahl Z erhöht sich um 2, Massenzahl A erhöht sich um 4',
      'Ordnungszahl Z verringert sich um 1, Massenzahl A bleibt gleich',
      'Ordnungszahl Z verringert sich um 2, Massenzahl A verringert sich um 4',
      'Ordnungszahl Z bleibt gleich, Massenzahl A verringert sich um 4',
      'Ordnungszahl Z und Massenzahl A bleiben unverändert'
    ],
    korrekteAntwort: 2,
    erklärung: 'Beim Alpha-Zerfall emittiert der Kern ein Alpha-Teilchen (⁴He). Dadurch verringert sich die Ordnungszahl um 2 (zwei Protonen weniger) und die Massenzahl um 4 (zwei Protonen und zwei Neutronen weniger). Beispiel: ²³⁸U → ²³⁴Th + ⁴He.',
    strategieTipp: 'α-Zerfall: Z-2, A-4. β⁻-Zerfall: Z+1, A gleich. β⁺-Zerfall: Z-1, A gleich. γ-Zerfall: Z und A unverändert.'
  },
  {
    id: 'ph-q-176',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Was ist Beta-minus-Strahlung?',
    optionen: [
      'Eine Emission von Protonen',
      'Eine Emission von Neutronen',
      'Eine Emission von Elektronen',
      'Eine Emission von Positronen',
      'Eine Emission von Photonen'
    ],
    korrekteAntwort: 2,
    erklärung: 'Bei der Beta-minus-Strahlung wandelt sich ein Neutron im Kern in ein Proton um, wobei ein Elektron (β⁻) und ein Antineutrino emittiert werden. Die Ordnungszahl steigt um 1, die Massenzahl bleibt gleich. Beispiel: ¹⁴C → ¹⁴N + e⁻ + ν̄ₑ.',
    strategieTipp: 'β⁻: Neutron → Proton + Elektron + Antineutrino. β⁺: Proton → Neutron + Positron + Neutrino. Schwache Wechselwirkung.'
  },
  {
    id: 'ph-q-177',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Aussage über Gamma-Strahlung ist korrekt?',
    optionen: [
      'Sie besteht aus geladenen Teilchen',
      'Sie entsteht bei Übergängen zwischen Kernenergie-Niveaus',
      'Sie hat geringere Energie als sichtbares Licht',
      'Sie ist nur schwach durchdringend',
      'Sie verändert die Ordnungszahl des Kerns'
    ],
    korrekteAntwort: 1,
    erklärung: 'Gamma-Strahlung ist hochenergetische elektromagnetische Strahlung (Photonen), die bei Übergängen zwischen angeregten Zuständen des Atomkerns entsteht. Sie verändert weder Ordnungszahl noch Massenzahl und hat die höchste Durchdringungsfähigkeit aller radioaktiven Strahlungsarten.',
    strategieTipp: 'γ-Strahlung: Photonen, sehr hohe Energie (MeV), neutral, hohe Durchdringung (Blei nötig). Oft nach α- oder β-Zerfall.'
  },
  {
    id: 'ph-q-178',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Strahlungsart hat die geringste Reichweite in Luft?',
    optionen: [
      'Gamma-Strahlung',
      'Beta-Strahlung',
      'Alpha-Strahlung',
      'Röntgenstrahlung',
      'Neutronenstrahlung'
    ],
    korrekteAntwort: 2,
    erklärung: 'Alpha-Strahlung hat aufgrund ihrer hohen Masse und Ladung die geringste Reichweite (wenige Zentimeter in Luft, gestoppt durch Papier). Beta-Strahlung erreicht einige Meter in Luft, Gamma-Strahlung hat die höchste Reichweite und benötigt dicke Blei- oder Betonschichten zur Abschirmung.',
    strategieTipp: 'Reichweite in Luft: α < β < γ. Abschirmung: α (Papier), β (Aluminium), γ (Blei/Beton). Umgekehrt zur Ionisierungsfähigkeit.'
  },
  {
    id: 'ph-q-179',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Warum wird bei der Beta-Strahlung zusätzlich ein Neutrino emittiert?',
    optionen: [
      'Um die elektrische Ladung zu neutralisieren',
      'Um Energie- und Impulserhaltung zu gewährleisten',
      'Um die Massenzahl konstant zu halten',
      'Um die Kernkraft zu verstärken',
      'Um Gammastrahlung zu erzeugen'
    ],
    korrekteAntwort: 1,
    erklärung: 'Experimente zeigten, dass die Beta-Teilchen ein kontinuierliches Energiespektrum haben statt einer festen Energie. Pauli postulierte das Neutrino (bzw. Antineutrino), um die Energie- und Impulserhaltung zu erklären. Das Neutrino trägt die fehlende Energie und den Impuls.',
    strategieTipp: 'Neutrino-Postulat löste Energieerhaltungsproblem. Neutrinos: neutral, massearm, schwach wechselwirkend, schwer nachweisbar.'
  },
  {
    id: 'ph-q-180',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Was versteht man unter der Aktivität einer radioaktiven Probe?',
    optionen: [
      'Die Gesamtenergie der emittierten Strahlung',
      'Die Anzahl der Zerfälle pro Zeiteinheit',
      'Die Masse des radioaktiven Materials',
      'Die Temperatur der Probe',
      'Die chemische Reaktivität des Materials'
    ],
    korrekteAntwort: 1,
    erklärung: 'Die Aktivität A gibt die Anzahl der Kernzerfälle pro Zeiteinheit an. Die SI-Einheit ist das Becquerel (Bq): 1 Bq = 1 Zerfall/s. Eine ältere Einheit ist das Curie (Ci): 1 Ci = 3,7 × 10¹⁰ Bq. Die Aktivität nimmt exponentiell mit der Zeit ab.',
    strategieTipp: 'Aktivität A = λN (λ = Zerfallskonstante, N = Atomzahl). Einheit: Becquerel (Bq) oder Curie (Ci). Nimmt exponentiell ab.'
  },
  {
    id: 'ph-q-181',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'leicht' as const,
    fragetext: 'Was ist die Halbwertszeit eines radioaktiven Isotops?',
    optionen: [
      'Die Zeit, bis die Hälfte der Energie abgestrahlt wurde',
      'Die Zeit, bis die Hälfte der ursprünglichen Atomkerne zerfallen ist',
      'Die Zeit, bis die Aktivität auf null sinkt',
      'Die halbe Lebensdauer eines einzelnen Atoms',
      'Die Zeit bis zur halben Temperatur der Probe'
    ],
    korrekteAntwort: 1,
    erklärung: 'Die Halbwertszeit T₁/₂ ist die Zeit, nach der die Hälfte der ursprünglich vorhandenen radioaktiven Atomkerne zerfallen ist. Nach 2 × T₁/₂ sind noch 25% übrig, nach 3 × T₁/₂ noch 12,5% usw. Die Halbwertszeit ist charakteristisch für jedes Isotop.',
    strategieTipp: 'Nach n Halbwertszeiten: N = N₀ × (1/2)ⁿ. T₁/₂ = ln(2)/λ ≈ 0,693/λ. Reicht von Bruchteilen von Sekunden bis Milliarden Jahren.'
  },
  {
    id: 'ph-q-182',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Eine radioaktive Probe hat eine Halbwertszeit von 8 Tagen. Nach 24 Tagen sind noch 10 g übrig. Wie viel Material war ursprünglich vorhanden?',
    optionen: [
      '20 g',
      '40 g',
      '60 g',
      '80 g',
      '120 g'
    ],
    korrekteAntwort: 3,
    erklärung: '24 Tage entsprechen 3 Halbwertszeiten (24/8 = 3). Nach n Halbwertszeiten gilt: N = N₀ × (1/2)ⁿ. Also: 10 g = N₀ × (1/2)³ = N₀ × 1/8. Daraus folgt: N₀ = 10 g × 8 = 80 g.',
    strategieTipp: 'Anzahl Halbwertszeiten: n = t/T₁/₂. Dann: N = N₀ × (1/2)ⁿ oder N₀ = N × 2ⁿ. Bei 3 Halbwertszeiten: Faktor 8.'
  },
  {
    id: 'ph-q-183',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Die Aktivität einer Probe beträgt anfangs 800 Bq. Nach 12 Stunden beträgt sie noch 100 Bq. Wie groß ist die Halbwertszeit?',
    optionen: [
      '2 Stunden',
      '3 Stunden',
      '4 Stunden',
      '6 Stunden',
      '8 Stunden'
    ],
    korrekteAntwort: 2,
    erklärung: 'A = A₀ × (1/2)ⁿ. Hier: 100 = 800 × (1/2)ⁿ → (1/2)ⁿ = 1/8 = (1/2)³, also n = 3 Halbwertszeiten in 12 Stunden. Daraus: T₁/₂ = 12 h / 3 = 4 Stunden. Alternativ: 800 → 400 → 200 → 100 in jeweils 4 Stunden.',
    strategieTipp: 'Bei Aktivitätsabnahme: Faktor berechnen (A₀/A), dann n aus 2ⁿ = Faktor. T₁/₂ = t/n. Oder logarithmisch: T₁/₂ = t × ln(2)/ln(A₀/A).'
  },
  {
    id: 'ph-q-184',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welches radioaktive Isotop wird zur Altersbestimmung organischer Materialien verwendet?',
    optionen: [
      'Uran-238',
      'Kohlenstoff-14',
      'Jod-131',
      'Kobalt-60',
      'Plutonium-239'
    ],
    korrekteAntwort: 1,
    erklärung: 'Die Radiokarbonmethode (C-14-Methode) nutzt ¹⁴C mit einer Halbwertszeit von 5.730 Jahren. ¹⁴C entsteht durch kosmische Strahlung in der Atmosphäre und wird von lebenden Organismen aufgenommen. Nach dem Tod stoppt die Aufnahme, und der ¹⁴C-Gehalt nimmt durch Zerfall ab.',
    strategieTipp: 'C-14-Datierung: organische Materialien bis ~50.000 Jahre. U-238/Pb-206: geologische Zeitskalen (Milliarden Jahre). K-Ar: Vulkangesteine.'
  },
  {
    id: 'ph-q-185',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Eine Probe enthält nach 17.190 Jahren noch 12,5% des ursprünglichen ¹⁴C. Was ist die Halbwertszeit von ¹⁴C?',
    optionen: [
      '3.865 Jahre',
      '4.298 Jahre',
      '5.730 Jahre',
      '6.430 Jahre',
      '8.595 Jahre'
    ],
    korrekteAntwort: 2,
    erklärung: '12,5% = 1/8 des Originals. 1/8 = (1/2)³, also sind 3 Halbwertszeiten vergangen. T₁/₂ = 17.190 Jahre / 3 = 5.730 Jahre. Dies ist die tatsächliche Halbwertszeit von Kohlenstoff-14.',
    strategieTipp: 'Prozent → Bruch → Potenz von 1/2. Beispiel: 25% = 1/4 = (1/2)² → 2 Halbwertszeiten. 12,5% = 1/8 = (1/2)³ → 3 Halbwertszeiten.'
  },
  {
    id: 'ph-q-186',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Was bedeutet "ionisierende Strahlung"?',
    optionen: [
      'Strahlung, die Metalle zum Leuchten bringt',
      'Strahlung, die Atome oder Moleküle ionisiert',
      'Strahlung, die nur in Ionen eindringen kann',
      'Strahlung, die elektrische Ströme erzeugt',
      'Strahlung, die magnetische Felder bildet'
    ],
    korrekteAntwort: 1,
    erklärung: 'Ionisierende Strahlung hat genug Energie, um Elektronen aus Atomen oder Molekülen zu entfernen und damit Ionen zu erzeugen. Dazu gehören Alpha-, Beta-, Gamma-Strahlung, Röntgenstrahlung und hochenergetische UV-Strahlung. Sie kann biologisches Gewebe schädigen.',
    strategieTipp: 'Ionisierend: Energie > ~10 eV (UV-C, Röntgen, γ, α, β). Nicht-ionisierend: sichtbares Licht, IR, Mikrowellen, Radio. DNA-Schäden möglich.'
  },
  {
    id: 'ph-q-187',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Strahlungsart hat die höchste Ionisierungsfähigkeit?',
    optionen: [
      'Gamma-Strahlung',
      'Beta-Strahlung',
      'Alpha-Strahlung',
      'Röntgenstrahlung',
      'UV-Strahlung'
    ],
    korrekteAntwort: 2,
    erklärung: 'Alpha-Strahlung hat die höchste Ionisierungsdichte aufgrund ihrer hohen Masse und zweifachen Ladung. Sie erzeugt viele Ionenpaare auf kurzer Strecke, was sie bei innerer Kontamination sehr gefährlich macht, aber gleichzeitig leicht abschirmbar (geringe Reichweite).',
    strategieTipp: 'Ionisierung: α > β > γ. Durchdringung: γ > β > α. Beide Eigenschaften sind umgekehrt proportional. α außen harmlos, innen gefährlich.'
  },
  {
    id: 'ph-q-188',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Was versteht man unter der Absorption ionisierender Strahlung?',
    optionen: [
      'Die Reflexion der Strahlung an Oberflächen',
      'Die Schwächung der Strahlung beim Durchgang durch Materie',
      'Die Verstärkung der Strahlung durch Streuung',
      'Die Umwandlung von Strahlung in Wärme',
      'Die Ablenkung der Strahlung durch Magnetfelder'
    ],
    korrekteAntwort: 1,
    erklärung: 'Absorption beschreibt die Schwächung der Strahlung beim Durchgang durch Materie durch Wechselwirkungen (Ionisation, Streuung, Paarbildung). Die Intensität nimmt exponentiell ab: I = I₀ × e^(-μx), wobei μ der Absorptionskoeffizient und x die Dicke des Materials ist.',
    strategieTipp: 'Absorptionsgesetz: I = I₀ × e^(-μx). Halbwertsdicke d₁/₂: I = I₀/2. Je dichter/schwerer das Material, desto höher μ. Blei gut für γ.'
  },
  {
    id: 'ph-q-189',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Die Intensität von Gamma-Strahlung wird durch eine 5 cm dicke Bleiplatte auf 25% reduziert. Welche Dicke reduziert sie auf 6,25%?',
    optionen: [
      '5 cm',
      '7,5 cm',
      '10 cm',
      '15 cm',
      '20 cm'
    ],
    korrekteAntwort: 2,
    erklärung: '25% = 1/4 und 6,25% = 1/16 = (1/4)². Die erste Schicht (5 cm) reduziert auf 1/4, eine zweite identische Schicht (weitere 5 cm) reduziert nochmal auf 1/4 davon, also insgesamt auf 1/16. Gesamtdicke: 10 cm. Alternativ: 5 cm ist die Halbwertsdicke für Faktor 4 = 2², also 2 Halbwertsdicken. Für 16 = 2⁴ braucht man 4 Halbwertsdicken.',
    strategieTipp: 'Absorption ist multiplikativ. Jede Schicht gleicher Dicke multipliziert mit gleichem Faktor. Bei exponentiellem Zerfall: doppelte Dicke → Faktor².'
  },
  {
    id: 'ph-q-190',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Aussage über kosmische Strahlung ist korrekt?',
    optionen: [
      'Sie besteht ausschließlich aus Elektronen',
      'Sie kommt hauptsächlich von der Sonne',
      'Sie besteht überwiegend aus hochenergetischen Protonen und Atomkernen',
      'Sie kann die Erdatmosphäre nicht durchdringen',
      'Sie ist nur nachts nachweisbar'
    ],
    korrekteAntwort: 2,
    erklärung: 'Die primäre kosmische Strahlung besteht zu ~90% aus Protonen, ~9% aus Heliumkernen und ~1% aus schwereren Kernen. Sie stammt von Supernovae, aktiven Galaxienkernen und anderen hochenergetischen kosmischen Quellen. In der Atmosphäre erzeugt sie Teilchenschauer (sekundäre kosmische Strahlung).',
    strategieTipp: 'Primäre kosmische Strahlung: hauptsächlich Protonen, sehr hohe Energie. Sekundäre: Myonen, Neutronen, Pionen aus Atmosphärenkollisionen. Erdmagnetfeld bietet Schutz.'
  },
  {
    id: 'ph-q-191',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Wodurch entsteht das natürliche Kohlenstoff-14 in der Atmosphäre?',
    optionen: [
      'Durch radioaktiven Zerfall von Uran',
      'Durch Reaktionen von Neutronen aus kosmischer Strahlung mit Stickstoff',
      'Durch Photosynthese in Pflanzen',
      'Durch chemische Reaktionen mit Sauerstoff',
      'Durch vulkanische Aktivität'
    ],
    korrekteAntwort: 1,
    erklärung: 'Kosmische Strahlung erzeugt in der oberen Atmosphäre Neutronen, die mit Stickstoff-14 reagieren: ¹⁴N + n → ¹⁴C + p. Das entstehende ¹⁴C oxidiert zu CO₂ und wird in den Kohlenstoffkreislauf eingebaut. Dies ermöglicht die Radiokarbondatierung.',
    strategieTipp: '¹⁴C-Produktion: kosmische Strahlung + ¹⁴N → ¹⁴C + Proton. Gleichgewicht zwischen Produktion und Zerfall in Atmosphäre. Variation durch Sonnenaktivität.'
  },
  {
    id: 'ph-q-192',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Was ist eine Zerfallsreihe?',
    optionen: [
      'Die zeitliche Abfolge von Zerfällen in einer Probe',
      'Eine Sequenz von radioaktiven Zerfällen, die von einem Mutternuklid zu einem stabilen Endprodukt führt',
      'Die räumliche Anordnung zerfallender Atome',
      'Eine mathematische Formel zur Berechnung der Halbwertszeit',
      'Die Reihenfolge der Entdeckung radioaktiver Elemente'
    ],
    korrekteAntwort: 1,
    erklärung: 'Eine Zerfallsreihe ist eine Kette aufeinanderfolgender radioaktiver Zerfälle. Beispiel: Die Uran-Radium-Reihe beginnt bei ²³⁸U und endet nach vielen Alpha- und Beta-Zerfällen beim stabilen ²⁰⁶Pb. Es gibt vier natürliche Zerfallsreihen (Uran-238, Uran-235, Thorium-232, Neptunium-237).',
    strategieTipp: 'Natürliche Zerfallsreihen: ²³⁸U → ²⁰⁶Pb, ²³⁵U → ²⁰⁷Pb, ²³²Th → ²⁰⁸Pb. Alle enden bei stabilem Blei. Radon in der Kette gefährlich.'
  },
  {
    id: 'ph-q-193',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: '²³⁸U zerfällt über mehrere Schritte zu ²⁰⁶Pb. Wie viele Alpha-Zerfälle sind mindestens nötig?',
    optionen: [
      '4 Alpha-Zerfälle',
      '6 Alpha-Zerfälle',
      '8 Alpha-Zerfälle',
      '10 Alpha-Zerfälle',
      '12 Alpha-Zerfälle'
    ],
    korrekteAntwort: 2,
    erklärung: 'Die Massenzahl verringert sich von 238 auf 206, also um 32. Jeder Alpha-Zerfall verringert A um 4. Daher: 32/4 = 8 Alpha-Zerfälle. Die Ordnungszahl sinkt dabei von 92 auf 82, also um 10. Da 8 Alpha-Zerfälle Z um 16 senken, müssen 6 Beta-Zerfälle erfolgen (erhöhen Z um 6), um netto -10 zu erreichen.',
    strategieTipp: 'Massendifferenz ÷ 4 = Anzahl α-Zerfälle. Dann Ordnungszahl prüfen: α senkt Z um 2, β⁻ erhöht Z um 1. Bilanz muss stimmen.'
  },
  {
    id: 'ph-q-194',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welches Gas in der Uran-Zerfallsreihe ist besonders gesundheitsgefährdend?',
    optionen: [
      'Helium',
      'Wasserstoff',
      'Radon',
      'Sauerstoff',
      'Stickstoff'
    ],
    korrekteAntwort: 2,
    erklärung: 'Radon-222 ist ein radioaktives Edelgas, das in der Uran-238-Zerfallsreihe entsteht. Als Gas kann es aus dem Boden in Gebäude eindringen und sich anreichern. Es ist ein Alpha-Strahler mit einer Halbwertszeit von 3,8 Tagen und die zweithäufigste Ursache für Lungenkrebs nach Rauchen.',
    strategieTipp: 'Radon: farbloses, geruchloses Gas, α-Strahler. Gefahr bei Inhalation (innere Bestrahlung). Kellerräume lüften. Zerfallsprodukte lagern sich in Lunge ab.'
  },
  {
    id: 'ph-q-195',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Was ist der Massendefekt eines Atomkerns?',
    optionen: [
      'Der Massenverlust durch radioaktiven Zerfall',
      'Die Differenz zwischen der Summe der Nukleonmassen und der tatsächlichen Kernmasse',
      'Die Masse der Elektronen in der Hülle',
      'Die Massenzunahme bei Kernfusion',
      'Der Fehler bei der Massenbestimmung'
    ],
    korrekteAntwort: 1,
    erklärung: 'Der Massendefekt Δm ist die Differenz zwischen der Summe der Massen freier Protonen und Neutronen und der tatsächlichen Kernmasse. Diese "fehlende" Masse wurde bei der Kernbildung in Bindungsenergie umgewandelt: E_B = Δm × c². Je größer der Massendefekt, desto stabiler der Kern.',
    strategieTipp: 'Massendefekt → Bindungsenergie (E = mc²). Eisen-56 hat höchste Bindungsenergie pro Nukleon. Erkllärt Energie aus Fusion und Spaltung.'
  },
  {
    id: 'ph-q-196',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Ein Helium-4-Kern hat eine Masse von 4,0015 u. Die Massen von Proton und Neutron betragen jeweils etwa 1,007 u und 1,009 u. Wie groß ist ungefähr der Massendefekt?',
    optionen: [
      '0,001 u',
      '0,010 u',
      '0,030 u',
      '0,050 u',
      '0,100 u'
    ],
    korrekteAntwort: 2,
    erklärung: 'Summe der Einzelmassen: 2 × 1,007 u + 2 × 1,009 u = 2,014 u + 2,018 u = 4,032 u. Massendefekt: Δm = 4,032 u - 4,0015 u ≈ 0,030 u. Diese Masse entspricht der Bindungsenergie des Heliumkerns von etwa 28 MeV.',
    strategieTipp: 'Δm = (Z × m_p + N × m_n) - m_Kern. 1 u ≈ 931,5 MeV/c². Helium-4 ist besonders stark gebunden (Alpha-Teilchen).'
  },
  {
    id: 'ph-q-197',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welche Einheit wird für die Strahlendosis (absorbierte Energie pro Masse) verwendet?',
    optionen: [
      'Becquerel (Bq)',
      'Gray (Gy)',
      'Curie (Ci)',
      'Sievert (Sv)',
      'Röntgen (R)'
    ],
    korrekteAntwort: 1,
    erklärung: 'Gray (Gy) ist die SI-Einheit der Energiedosis: 1 Gy = 1 J/kg absorbierte Energie. Die Äquivalentdosis (biologische Wirkung) wird in Sievert (Sv) gemessen. Becquerel (Bq) ist die Einheit der Aktivität. Eine alte Einheit der Energiedosis ist Rad (1 Gy = 100 rad).',
    strategieTipp: 'Aktivität: Becquerel (Bq). Energiedosis: Gray (Gy). Äquivalentdosis: Sievert (Sv) = Gy × Bewertungsfaktor. α hat höchsten Faktor.'
  },
  {
    id: 'ph-q-198',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Warum ist Alpha-Strahlung bei innerer Kontamination (Einatmen, Verschlucken) besonders gefährlich?',
    optionen: [
      'Weil sie sehr durchdringend ist',
      'Weil sie eine hohe Ionisierungsdichte auf kurzer Strecke hat',
      'Weil sie sehr weit reicht',
      'Weil sie nicht abgeschirmt werden kann',
      'Weil sie durch Magnetfelder nicht ablenkbar ist'
    ],
    korrekteAntwort: 1,
    erklärung: 'Alpha-Teilchen haben eine sehr hohe Ionisierungsdichte, geben also ihre Energie auf sehr kurzer Strecke ab. Bei äußerer Bestrahlung werden sie von der Haut gestoppt (harmlos). Im Körper deponieren sie ihre gesamte Energie im Gewebe und verursachen schwere lokale Schäden (z.B. Lungenkrebs durch Radon).',
    strategieTipp: 'α-Strahler: außen harmlos (Haut stoppt), innen sehr gefährlich (hohe lokale Dosis). β und γ: auch extern gefährlich. ALARA-Prinzip beachten.'
  },
  {
    id: 'ph-q-199',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'mittel' as const,
    fragetext: 'Welches Prinzip beschreibt die drei Grundregeln des Strahlenschutzes?',
    optionen: [
      'Zeit, Raum, Frequenz',
      'Abstand, Abschirmung, Aufenthaltsdauer',
      'Masse, Energie, Impuls',
      'Reflektion, Absorption, Transmission',
      'Alpha, Beta, Gamma'
    ],
    korrekteAntwort: 1,
    erklärung: 'Die drei A\'s des Strahlenschutzes: 1) Abstand: Intensität nimmt mit 1/r² ab. 2) Abschirmung: Geeignete Materialien zwischen Quelle und Person. 3) Aufenthaltsdauer: Exposition minimieren. Diese Prinzipien reduzieren die Strahlendosis effektiv.',
    strategieTipp: '3 A: Abstand (1/r²-Gesetz), Abschirmung (Material je nach Strahlungsart), Aufenthaltsdauer (Zeit minimieren). ALARA: As Low As Reasonably Achievable.'
  },
  {
    id: 'ph-q-200',
    stichwortId: 'ph-7-01',
    fach: 'physik' as const,
    schwierigkeit: 'schwer' as const,
    fragetext: 'Eine Probe von Jod-131 (Halbwertszeit 8 Tage) hat eine anfängliche Aktivität von 3200 Bq. Welche Aktivität hat sie nach 32 Tagen?',
    optionen: [
      '100 Bq',
      '200 Bq',
      '400 Bq',
      '800 Bq',
      '1600 Bq'
    ],
    korrekteAntwort: 1,
    erklärung: '32 Tage entsprechen 4 Halbwertszeiten (32/8 = 4). Nach jeder Halbwertszeit halbiert sich die Aktivität: 3200 → 1600 → 800 → 400 → 200 Bq. Oder: A = A₀ × (1/2)ⁿ = 3200 × (1/2)⁴ = 3200 × 1/16 = 200 Bq.',
    strategieTipp: 'Jod-131: wichtig in Nuklearmedizin (Schilddrüsentherapie) und nach Reaktorunfällen. Kurze Halbwertszeit → schneller Zerfall, aber akute Gefahr.'
  }
];
