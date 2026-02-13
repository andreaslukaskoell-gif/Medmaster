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
      content: `Es gibt nur zwei Grundtypen von Zellen: **Prokaryoten** (Bakterien, Archäen) haben keinen echten Zellkern — ihre DNA schwimmt frei im Zellplasma im sogenannten **Nukleoid**. **Eukaryoten** (Tiere, Pflanzen, Pilze) dagegen verpacken ihre DNA in einem **membranumhüllten Zellkern**. Dieser eine Unterschied zieht alles Weitere nach sich.

Prokaryoten sind winzig (0,1–10 µm), Eukaryoten deutlich größer (10–100 µm). Kleinere Zellen haben ein besseres Oberfläche-zu-Volumen-Verhältnis — das heißt: effizienterer Stoffaustausch. Ein Bakterium kann deshalb blitzschnell Nährstoffe aufnehmen und Abfall loswerden, ohne aufwendige Transportsysteme.

Noch ein Unterschied, den man prüfungstechnisch kennen muss: **70S-Ribosomen** bei Prokaryoten (30S + 50S), **80S-Ribosomen** bei Eukaryoten (40S + 60S). Die DNA? Bei Prokaryoten ein zirkuläres Chromosom, oft ergänzt durch **Plasmide** (kleine ringförmige DNA-Schnipsel, z.B. mit Antibiotikaresistenzen). Eukaryoten haben lineare Chromosomen, die um **Histone** (Verpackungsproteine) gewickelt sind.

Prokaryoten verzichten auf **membranumschlossene Organellen** (kein Mitochondrium, kein ER, kein Golgi). Trotzdem sind sie metabolisch Meister: Manche betreiben Photosynthese (Cyanobakterien), fixieren Stickstoff oder leben in kochend heißen Quellen (Archäen). Vermehrung? **Binäre Fission** — die Zelle kopiert ihre DNA und schnürt sich durch. E. coli braucht unter idealen Bedingungen nur 20 Minuten für eine Teilung. Eukaryoten hingegen haben ein **Zytoskelett** aus Mikrofilamenten, Intermediärfilamenten und Mikrotubuli — das stabilisiert die Zelle und ermöglicht intrazelluläre Transporte.`,
      lernziele: [
        'Die beiden fundamentalen Zelltypen (Prokaryoten und Eukaryoten) benennen und anhand des Zellkerns unterscheiden können',
        'Die Unterschiede in Genomorganisation, Ribosomen und Zellkompartimentierung erklären können',
        'Die Zellteilung bei Prokaryoten (binäre Fission) und Eukaryoten (Mitose) vergleichen können',
        'Die metabolische Vielseitigkeit der Prokaryoten mit Beispielen beschreiben können'
      ],
      sections: [
        {
          heading: 'Grundlegender Unterschied',
          text: 'Es gibt nur zwei Grundtypen von Zellen: **Prokaryoten** (Bakterien, Archäen) haben keinen echten Zellkern — ihre DNA schwimmt frei im Zellplasma im sogenannten **Nukleoid**. **Eukaryoten** (Tiere, Pflanzen, Pilze) dagegen verpacken ihre DNA in einem **membranumhüllten Zellkern**.\n\nProkaryoten sind winzig (0,1-10 µm), Eukaryoten deutlich größer (10-100 µm). Kleinere Zellen haben ein besseres Oberfläche-zu-Volumen-Verhältnis — effizienterer Stoffaustausch. Eukaryoten gleichen das durch **membranumschlossene Kompartimente** (Organellen) aus — jede hat ihre eigene Aufgabe, räumlich getrennt.',
          table: {
            headers: ['Merkmal', 'Prokaryoten', 'Eukaryoten'],
            rows: [
              ['Zellkern', 'Kein echter Kern (Nukleoid)', 'Membranumhüllter Zellkern'],
              ['Größe', '0,1-10 um', '10-100 um'],
              ['Ribosomen', '70S (30S + 50S)', '80S (40S + 60S)'],
              ['DNA', 'Zirkulär, ohne Histone', 'Linear, mit Histonen'],
              ['Organellen', 'Keine membranumhüllten Organellen', 'Mitochondrien, ER, Golgi etc.'],
              ['Zellteilung', 'Binäre Fission', 'Mitose / Meiose']
            ]
          }
        },
        {
          heading: 'Genomorganisation und Ribosomen',
          text: 'Prokaryoten haben 70S-Ribosomen (30S + 50S), Eukaryoten 80S-Ribosomen (40S + 60S). Diese Zahlen kommen regelmäßig in Prüfungen.\n\nDie prokaryotische DNA ist ein einzelnes, zirkuläres Chromosom ohne Histone. Dazu kommen oft **Plasmide** — kleine DNA-Ringe mit Zusatzgenen (z.B. Antibiotikaresistenzen). Eukaryotische DNA dagegen ist linear, um Histone gewickelt und auf mehrere Chromosomen verteilt. Diese Verpackung ermöglicht **epigenetische Regulation** — Gene lassen sich gezielt an- und abschalten, ohne die DNA-Sequenz zu ändern.',
          merksatz: 'Merke: Prokaryoten = 70S-Ribosomen, kein Zellkern, zirkuläre DNA. Eukaryoten = 80S-Ribosomen, membranumhüllte Organellen, lineare DNA in Chromosomen.'
        },
        {
          heading: 'Zellteilung und Stoffwechsel',
          text: 'Prokaryoten haben keine Mitochondrien, kein ER, keinen Golgi. Trotzdem: metabolisch extrem vielseitig. Manche Prokaryoten betreiben Photosynthese (Cyanobakterien), fixieren Stickstoff oder leben in Extremumgebungen — heiße Quellen, Salzseen (Archäen).\n\nVermehrung durch **binäre Fission** (Zweiteilung) — viel schneller als Mitose. E. coli schafft unter optimalen Bedingungen eine Teilung in 20 Minuten. Eukaryoten brauchen Stunden. Dafür haben Eukaryoten ein **Zytoskelett** aus Mikrofilamenten, Intermediärfilamenten und Mikrotubuli — wichtig für Zellform, Bewegung und intrazelluläre Transporte.',
          merksatz: 'Prokaryoten: kein Kern, keine membranumhüllten Organellen, zirkuläre DNA, Plasmide, binäre Fission'
        }
      ],
      diagram: 'prokaryote-vs-eukaryote',
      merksätze: [
        'Merke: Prokaryoten = 70S-Ribosomen, kein Zellkern, zirkuläre DNA. Eukaryoten = 80S-Ribosomen, membranumhüllte Organellen, lineare DNA in Chromosomen.',
        'Prokaryoten: kein Kern, keine membranumhüllten Organellen, zirkuläre DNA, Plasmide, binäre Fission'
      ],
      altfrage: {
        question: 'Welche Ribosomen kommen bei Prokaryoten vor?',
        answer: '70S-Ribosomen (30S + 50S Untereinheiten). Die 80S-Ribosomen (40S + 60S) sind charakteristisch für das Cytoplasma von Eukaryoten. Mitochondrien und Chloroplasten besitzen ebenfalls 70S-Ribosomen – ein Beleg für die Endosymbiontentheorie.'
      },
      klinischerBezug: 'Tetracycline, Aminoglykoside und Chloramphenicol greifen spezifisch prokaryotische 70S-Ribosomen an — deshalb wirken sie gegen Bakterien. Menschliche Zellen haben 80S-Ribosomen, bleiben verschont. Problem: Mitochondrien enthalten ebenfalls 70S-Ribosomen. Aminoglykoside können bei Langzeitanwendung die mitochondriale Proteinsynthese stören — das zeigt sich als Ototoxizität (Innenohrschädigung) oder Nephrotoxizität (Nierenschädigung).',
      selfTest: [
        {
          question: 'Welches Merkmal ist typisch für Prokaryoten?',
          options: [
            'Lineare DNA mit Histonen',
            'Zirkuläre DNA ohne Histone im Nukleoid',
            '80S-Ribosomen im Cytoplasma',
            'Membranumhüllter Zellkern',
            'Vermehrung ausschließlich durch Meiose'
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
            'Prokaryoten sind stets größer als Eukaryoten',
            'Prokaryoten sind 1–5 mm, Eukaryoten 0,1–1 mm'
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
            'Durch Knospung mit asymmetrischer Teilung',
            'Durch Endozytose der eigenen Zellmembran'
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
      content: `Die Tierzelle ist 10–30 µm groß, hat eine **Zellmembran** (Plasmamembran), aber keine Zellwand. Im Zentrum sitzt der **Zellkern** (Nukleus) — die Kommandozentrale. Er ist von einer **Doppelmembran** (Kernhülle) mit **Kernporen** umgeben. Diese Poren sind keine simplen Löcher, sondern komplexe Proteinkomplexe, die kontrollieren, was rein und raus darf. Innen im Kern liegt das **Chromatin** (DNA + Histone) und der **Nukleolus**, wo ribosomale RNA (rRNA) synthetisiert wird. Im Kern passiert alles Wichtige: DNA-Replikation, Transkription, RNA-Prozessierung.

Im **Cytoplasma** (Zellplasma) schwimmen die **Organellen**. **Mitochondrien** sind die Kraftwerke — sie produzieren ATP durch **oxidative Phosphorylierung**. Interessant: Mitochondrien haben eigene DNA (mtDNA) und 70S-Ribosomen, ein Relikt ihrer bakteriellen Vergangenheit. Das **endoplasmatische Retikulum (ER)** kommt in zwei Varianten: **Raues ER** (rER) ist mit Ribosomen besetzt und baut Membranproteine sowie Sekretionsproteine. **Glattes ER** (sER) hat keine Ribosomen, synthetisiert Lipide, speichert Calcium (wichtig in Muskelzellen) und entgiftet (in der Leber). Der **Golgi-Apparat** ist eine Stapel-Struktur aus Zisternen — er modifiziert, sortiert und verpackt Proteine. **Lysosomen** sind die Müllabfuhr: Sie enthalten Verdauungsenzyme, die bei saurem pH (4,5–5,0) arbeiten. **Peroxisomen** bauen Fettsäuren und Wasserstoffperoxid ab.

Das **Zytoskelett** gibt der Zelle Form und Stabilität. Es besteht aus **Mikrofilamenten** (Aktin, 7 nm dick), **Intermediärfilamenten** (10 nm) und **Mikrotubuli** (Tubulin, 25 nm). Mikrotubuli sind die Autobahnen der Zelle — entlang von ihnen werden Vesikel und Organellen transportiert. Das **Zentrosom** mit seinen zwei **Zentriolen** organisiert die Mikrotubuli und baut bei der Zellteilung den **Spindelapparat**. Freie Ribosomen im Cytoplasma produzieren Proteine für den Hausgebrauch. Tierzellen haben oft **Zilien** (Flimmerhärchen) oder **Flagellen** (Geißeln) für Bewegung. Zell-Zell-Verbindungen: **Desmosomen** (mechanisch stabil), **Tight Junctions** (dichten ab), **Gap Junctions** (ermöglichen Kommunikation).`,
      lernziele: [
        'Den grundlegenden Aufbau einer Tierzelle mit ihren Organellen beschreiben können',
        'Die Funktion des Zellkerns einschließlich Chromatin, Nukleolus und Kernporen erklären können',
        'Die Aufgaben von Mitochondrien, ER und Golgi-Apparat in der Zelle erläutern können',
        'Die Bestandteile des Zytoskeletts und die verschiedenen Zell-Zell-Verbindungen benennen können',
        'Die Rolle von Lysosomen und Peroxisomen in der intrazellulären Verdauung verstehen'
      ],
      sections: [
        {
          heading: 'Zellkern und Erbinformation',
          text: 'Die Tierzelle ist 10-30 µm groß, umgeben von einer **Zellmembran** — keine Zellwand wie bei Pflanzen. Im Zentrum: der **Zellkern** (Nukleus), umschlossen von einer **Doppelmembran** mit **Kernporen**.\n\nIm Kern liegt das **Chromatin** (DNA + Histone) und der **Nukleolus** (macht rRNA). Der Kern ist die Steuerzentrale: DNA-Replikation, Transkription, RNA-Prozessierung — alles hier. Kernporen regulieren streng, was zwischen Kern und Cytoplasma ausgetauscht wird: kleine Moleküle dürfen frei diffundieren, große Proteine brauchen ein Ticket (Kernlokalisierungssignal).'
        },
        {
          heading: 'Energieversorgung und Synthese',
          text: 'Im Cytoplasma sitzen die membranumhüllten Organellen. **Mitochondrien** = Kraftwerke. Sie produzieren ATP durch oxidative Phosphorylierung und haben eigene DNA plus 70S-Ribosomen (Beleg für die Endosymbiontentheorie).\n\n**Raues ER** (rER): mit Ribosomen besetzt, baut Membranproteine und Sekretionsproteine. **Glattes ER** (sER): keine Ribosomen, macht Lipide, speichert Calcium, entgiftet. **Golgi-Apparat**: gestapelte Zisternen, modifiziert und sortiert Proteine, verpackt sie in Vesikel.',
          merksatz: 'Merke: Zellkern (DNA-Speicher), raues ER (Proteinsynthese), glattes ER (Lipidsynthese), Golgi (Sortierung/Modifikation), Lysosomen (Verdauung, pH 4-5), Mitochondrien (ATP-Produktion).',
          table: {
            headers: ['Organelle', 'Funktion'],
            rows: [
              ['Zellkern (Nukleus)', 'DNA-Speicherung, Transkription, RNA-Prozessierung'],
              ['Mitochondrien', 'ATP-Produktion durch oxidative Phosphorylierung'],
              ['Raues ER', 'Synthese von Membran- und sekretorischen Proteinen'],
              ['Glattes ER', 'Lipidsynthese, Calciumspeicherung, Entgiftung'],
              ['Golgi-Apparat', 'Proteinmodifikation, Sortierung und Verpackung'],
              ['Lysosomen', 'Intrazelluläre Verdauung bei saurem pH'],
              ['Peroxisomen', 'Abbau von Fettsäuren und toxischen Substanzen'],
              ['Zentrosom', 'Mikrotubuli-Organisationszentrum, Spindelapparat']
            ]
          }
        },
        {
          heading: 'Verdauung und Recycling',
          text: '**Lysosomen** enthalten hydrolytische Enzyme, die bei saurem pH (4,5-5,0) arbeiten. Sie verdauen aufgenommenes Material (Endozytose, Phagozytose) und recyceln beschädigte Zellbestandteile.\n\n**Peroxisomen** bauen Fettsäuren ab und entgiften — insbesondere Wasserstoffperoxid (H₂O₂). Beide Organellen halten die Zelle sauber und funktionsfähig.'
        },
        {
          heading: 'Zytoskelett und Zellkontakte',
          text: 'Das **Zytoskelett**: **Mikrofilamente** (Aktin, 7 nm), **Intermediärfilamente** (10 nm), **Mikrotubuli** (Tubulin, 25 nm). Es stabilisiert die Zelle, ermöglicht Bewegung und intrazelluläre Transporte.\n\nDas **Zentrosom** mit zwei **Zentriolen** ist das Mikrotubuli-Organisationszentrum (MTOC). Bei der Zellteilung organisiert es den Spindelapparat. Freie Ribosomen synthetisieren Proteine für den Eigengebrauch. Zell-Zell-Verbindungen: **Desmosomen** (mechanische Verbindung), **Tight Junctions** (Abdichtung), **Gap Junctions** (Kommunikation).',
          merksatz: 'Tierzelle hat KEIN: Zellwand, Chloroplasten, große Zentralvakuole - dafür hat sie Zentriolen und Lysosomen'
        }
      ],
      diagram: 'animal-cell',
      merksätze: [
        'Merke: Zellkern (DNA-Speicher), raues ER (Proteinsynthese), glattes ER (Lipidsynthese), Golgi (Sortierung/Modifikation), Lysosomen (Verdauung, pH 4-5), Mitochondrien (ATP-Produktion).',
        'Tierzelle hat KEIN: Zellwand, Chloroplasten, große Zentralvakuole – dafür hat sie Zentriolen und Lysosomen'
      ],
      altfrage: {
        question: 'Welche Organelle ist für die posttranslationale Modifikation und Sortierung von Proteinen zuständig?',
        answer: 'Der Golgi-Apparat. Er erhält Proteine vom ER in Transportvesikeln, modifiziert sie (z. B. Glykosylierung), sortiert sie und verpackt sie in Vesikel für den Transport zur Zellmembran, zu Lysosomen oder zur Sekretion.'
      },
      klinischerBezug: 'Bei **Morbus Tay-Sachs** fehlt das lysosomale Enzym Hexosaminidase A. GM2-Ganglioside können nicht abgebaut werden, reichern sich in Nervenzellen an — das führt zu progressiver Neurodegeneration. Kinder verlieren ab 6 Monaten Fähigkeiten, entwickeln Blindheit, Krampfanfälle — die meisten sterben vor dem 5. Lebensjahr. Bei **Morbus Gaucher** (häufigste lysosomale Speicherkrankheit) fehlt Glukocerebrosidase — Glucocerebroside akkumulieren in Makrophagen (Gaucher-Zellen). Symptome: Hepatosplenomegalie, Knochenschmerzen, Anämie.',
      selfTest: [
        {
          question: 'Wo findet die Synthese ribosomaler RNA statt?',
          options: [
            'Im glatten endoplasmatischen Retikulum',
            'Im Nukleolus innerhalb des Zellkerns',
            'An den freien Ribosomen im Cytoplasma',
            'Im Golgi-Apparat',
            'In den Peroxisomen'
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
            'Die Lysosomen',
            'Die Mitochondrien'
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
            'Intrazelluläre Verdauung bei saurem pH',
            'DNA-Replikation und Chromosomenkondensation'
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
      content: `Pflanzenzellen haben drei Dinge, die Tierzellen NICHT haben: **Zellwand**, **Chloroplasten**, **große Zentralvakuole**. Diese drei Strukturen machen den Unterschied.

Die **Zellwand** besteht aus **Cellulose** (β-1,4-verknüpfte Glucose-Polymere) und liegt AUSSERHALB der Zellmembran. Sie gibt der Pflanzenzelle mechanische Stabilität und Form. Die **Primärwand** ist dünn und flexibel, die **Sekundärwand** (z.B. in Holz) wird durch **Lignin** (Verholzung) zusätzlich verstärkt. **Plasmodesmen** sind kanalförmige Verbindungen durch die Zellwand — sie verbinden benachbarte Zellen und ermöglichen Stoffaustausch. Das pflanzliche Pendant zu Gap Junctions.

**Chloroplasten** sind die Photosynthese-Fabriken — nur in grünen Pflanzenteilen. Sie haben eine Doppelmembran und im Inneren **Thylakoide**, die in **Grana** gestapelt sind. In der Thylakoidmembran läuft die **Lichtreaktion** (Lichtenergie → ATP + NADPH), im **Stroma** (Innenraum) der **Calvin-Zyklus** (CO₂ → Glucose). Chloroplasten haben eigene zirkuläre DNA und 70S-Ribosomen — wie Mitochondrien ein Beleg für die Endosymbiontentheorie.

Die **Zentralvakuole** kann in reifen Pflanzenzellen bis zu 90 % des Zellvolumens einnehmen. Sie speichert Wasser, Ionen, Farbstoffe, Giftstoffe. Durch osmotischen Druck erzeugt sie den **Turgor** — der hält die Pflanze aufrecht. Ohne Wasser verliert die Vakuole Druck, die Pflanze welkt.

Tierzellen haben **Zentriolen** im Zentrosom, die den Spindelapparat für die Mitose organisieren. Pflanzenzellen bilden den Spindelapparat ohne Zentriolen — mit anderen Mikrotubuli-Organisationszentren. **Lysosomen** findest du hauptsächlich in Tierzellen; Pflanzenzellen nutzen die Vakuole für ähnliche Aufgaben (lytische Vakuole). Bei der **Cytokinese** (Zellteilung): Tierzellen schnüren sich mit einem **kontraktilen Ring** aus Aktin ein (Furchung). Pflanzenzellen bauen von innen nach außen eine **Zellplatte** (Phragmoplast), die zur neuen Zellwand wird. Energiespeicherung: Pflanzen lagern Glucose als **Stärke**, Tiere als **Glykogen**.`,
      diagram: 'plant-vs-animal-cell',
      merksätze: [
        'Merke: Pflanzenzelle hat 3 Extras gegenüber Tierzelle: Zellwand (Cellulose), Chloroplasten (Photosynthese), große Zentralvakuole (Turgor).',
        'Tierzelle hat Zentriolen und Lysosomen, aber keine Zellwand – dafür ist sie flexibel und beweglich'
      ],
      altfrage: {
        question: 'Welche Struktur ermöglicht die Kommunikation zwischen benachbarten Pflanzenzellen?',
        answer: 'Plasmodesmen – kanalförmige Verbindungen, die durch die Zellwand verlaufen und das Cytoplasma benachbarter Zellen verbinden. Sie sind das pflanzliche Äquivalent zu Gap Junctions in Tierzellen und ermöglichen den Austausch von Ionen, kleinen Molekülen und Signalstoffen.'
      },
      klinischerBezug: 'Der Mensch kann Cellulose nicht verdauen — uns fehlt das Enzym **Cellulase**. Cellulose passiert den Darm unverdaut und wirkt als **Ballaststoff**. Ballaststoffe binden Wasser, vergrößern das Stuhlvolumen und fördern die Darmmotilität — das beugt Verstopfung und Kolonkarzinomen vor. Empfehlung: mindestens 30 g Ballaststoffe pro Tag. Wiederkäuer (Rinder, Schafe) können Cellulose nutzen — symbiontische Bakterien in ihrem Pansen produzieren Cellulase und bauen Cellulose zu kurzkettigen Fettsäuren ab.',
      selfTest: [
        {
          question: 'Welche Struktur fehlt in der Tierzelle?',
          options: [
            'Mitochondrien',
            'Zellwand aus Cellulose',
            'Zellmembran',
            'Endoplasmatisches Retikulum',
            'Ribosomen'
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
            'Beide bilden eine Zellplatte von innen nach außen',
            'Pflanzenzellen nutzen Lysosomen zur Zelltrennung'
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
            'Organisation des Spindelapparats',
            'Synthese von Chlorophyll für die Photosynthese'
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
      content: `Drei Organellen haben eine Doppelmembran: **Zellkern**, **Mitochondrien**, **Chloroplasten**. Diese Doppelmembran ist kein Zufall — sie hat eine Geschichte.

Der **Zellkern** ist von der **Kernhülle** umgeben: zwei Membranen mit einem **perinukleären Raum** dazwischen. Die äußere Membran ist mit dem rauen ER verbunden und trägt Ribosomen. In der Kernhülle sitzen **Kernporen** — keine simplen Löcher, sondern komplexe Proteinkomplexe (**Nukleare Porenkomplexe**, NPCs). Kleine Moleküle diffundieren frei, große Proteine brauchen ein **Kernlokalisierungssignal** (NLS) und werden aktiv durchgeschleust.

**Mitochondrien** haben eine glatte äußere Membran und eine stark gefaltete innere Membran. Die Einstülpungen heißen **Cristae** — sie vergrößern die Oberfläche massiv. Zwischen den beiden Membranen liegt der **Intermembranraum**, wo sich bei der Atmungskette Protonen ansammeln. Die innere Membran enthält die Komplexe I–IV der Atmungskette plus die **ATP-Synthase** (Komplex V), die den Protonengradienten zur ATP-Synthese nutzt (**Chemiosmose**). Im **Matrixraum** laufen Citratzyklus und Fettsäureoxidation ab. Dort liegt auch die **mitochondriale DNA** (mtDNA) — zirkulär, ca. 16.500 Basenpaare beim Menschen — plus 70S-Ribosomen. Die mtDNA wird **maternal vererbt**: Bei der Befruchtung kommen fast alle Mitochondrien aus der Eizelle, die wenigen im Spermium werden abgebaut.

Warum haben Mitochondrien und Chloroplasten eine Doppelmembran und eigene DNA? Die **Endosymbiontentheorie** (Lynn Margulis, 1967) erklärt das: Vor etwa 1,5 Milliarden Jahren nahm eine frühe eukaryotische Zelle durch **Phagozytose** aerobe Bakterien auf. Die äußere Membran stammt von der Wirtszelle (Phagosomenmembran), die innere von der ursprünglichen Bakterienmembran. Über Millionen Jahre wurden viele Gene der Bakterien in den Zellkern transferiert (**endosymbiontischer Gentransfer**) — heute werden die meisten mitochondrialen Proteine im Kern kodiert, im Cytoplasma synthetisiert und dann importiert. Belege für die Endosymbiontentheorie: eigene zirkuläre DNA, 70S-Ribosomen, Doppelmembran, eigene Proteinsynthese, Teilung durch Abschnürung, Größe wie Bakterien.`,
      diagram: 'double-membrane-organelles',
      merksätze: [
        'Merke: Doppelmembran-Organellen = Kern, Mitochondrien, Chloroplasten. Mitochondrien und Chloroplasten haben eigene zirkuläre DNA und 70S-Ribosomen — Belege für die Endosymbiontentheorie.',
        'Endosymbiontentheorie-Belege: Eigene zirkuläre DNA, 70S-Ribosomen, Doppelmembran, Teilung durch Abschnürung'
      ],
      altfrage: {
        question: 'Warum wird die mitochondriale DNA maternal vererbt?',
        answer: 'Bei der Befruchtung liefert fast ausschließlich die Eizelle die Mitochondrien. Die wenigen Mitochondrien des Spermiums befinden sich im Mittelstück und werden nach der Befruchtung markiert und abgebaut. Dadurch werden mitochondriale Erkrankungen ausschließlich von der Mutter weitergegeben.'
      },
      klinischerBezug: 'Mutationen in der mtDNA verursachen **mitochondriale Myopathien**. Beispiel: **MELAS** (mitochondriale Enzephalomyopathie, Laktatazidose, Schlaganfall-ähnliche Episoden) — Punktmutation in der tRNA-Leu-Genregion. Symptome: Muskelschwäche, Diabetes, Taubheit, Schlaganfall-ähnliche Episoden vor dem 40. Lebensjahr. **LHON** (Leber-hereditäre Optikusneuropathie) — Mutation in Komplex I der Atmungskette. Folge: plötzlicher schmerzloser Sehverlust, meist bei Männern zwischen 15–35 Jahren. Besonders betroffen sind Gewebe mit hohem Energiebedarf: Muskel, Gehirn, Herz. Maternales Vererbungsmuster: Alle Kinder einer betroffenen Mutter haben ein Risiko, Kinder betroffener Väter nicht.',
      selfTest: [
        {
          question: 'Welche Organellen besitzen eine Doppelmembran?',
          options: [
            'Lysosomen, Peroxisomen, Vakuolen',
            'Zellkern, Mitochondrien, Chloroplasten',
            'ER, Golgi-Apparat, Zellkern',
            'Ribosomen, Zentriolen, Mitochondrien',
            'Golgi-Apparat, Lysosomen, Peroxisomen'
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
            'Im Intermembranraum der Mitochondrien',
            'An der Membran des endoplasmatischen Retikulums'
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
            'Mitochondrien besitzen 80S-Ribosomen wie das Cytoplasma',
            'Mitochondrien können sich durch binäre Fission teilen'
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
      content: `Das **Endomembransystem** ist ein zusammenhängendes Netzwerk aus ER, Golgi, Lysosomen, Endosomen und Zellmembran. Diese Kompartimente tauschen über Vesikel Material aus — ein hochorganisierter Proteintransportweg.

Das **endoplasmatische Retikulum (ER)** kommt in zwei Varianten: **Raues ER** (rER) hat Ribosomen auf der Oberfläche und baut Membranproteine, Sekretionsproteine und lysosomale Enzyme. Wie landen die Ribosomen dort? Ein wachsendes Protein mit **Signalsequenz** wird vom **Signal Recognition Particle (SRP)** erkannt, zur ER-Membran dirigiert und dort kotranslational in das ER-Lumen eingefädelt. **Glattes ER** (sER) hat keine Ribosomen, synthetisiert Lipide und Steroidhormone (z.B. Cortisol, Testosteron), speichert Calcium (wichtig für Muskelkontraktion) und entgiftet (in der Leber werden Medikamente und Gifte durch Cytochrom-P450-Enzyme umgebaut).

Der **Golgi-Apparat** besteht aus 4–8 gestapelten Zisternen mit einer **cis-Seite** (dem ER zugewandt) und einer **trans-Seite** (Richtung Zellmembran). Proteine kommen in Vesikeln vom ER an der cis-Seite an, wandern durch die Zisternen und werden währenddessen modifiziert: **N- und O-Glykosylierung**, **Phosphorylierung**, proteolytische Spaltung. An der trans-Seite werden sie sortiert: **Sekretionsvesikel** (Exozytose), **Vesikel mit Mannose-6-Phosphat-Tag** (M6P) für Lysosomen oder **Vesikel für die Zellmembran**. Dieser ganze Weg heißt **sekretorischer Weg**.

**Lysosomen** haben innen pH 4,5–5,0, aufrechterhalten durch **V-Typ-ATPasen** (Protonenpumpen). Sie enthalten über 50 hydrolytische Enzyme (**saure Hydrolasen**), die Proteine, Lipide, Kohlenhydrate und Nukleinsäuren abbauen. Lysosomen erledigen drei Jobs: **Heterophagie** (Verdauung von Material, das die Zelle aufgenommen hat), **Autophagie** (Recycling eigener beschädigter Organellen), **Autophagozytose**. **Endosomen** sind Zwischenstationen: **Frühe Endosomen** sortieren aufgenommenes Material, **späte Endosomen** fusionieren mit Lysosomen. Vesikeltransport wird durch **Coat-Proteine** (COPI, COPII, Clathrin), **SNARE-Proteine** (Fusion) und **Rab-GTPasen** (Zielerkennung) reguliert.`,
      diagram: 'endomembrane-system',
      merksätze: [
        'Merke: Sekretorischer Weg: raues ER → cis-Golgi → medial-Golgi → trans-Golgi → Zellmembran oder Lysosom. Proteine werden schrittweise modifiziert (Glykosylierung, Phosphorylierung).',
        'Merke: Mannose-6-Phosphat-Tag am trans-Golgi dirigiert Enzyme zu Lysosomen. Ohne dieses Signal → Sekretion nach extrazellulär (Default-Pathway).'
      ],
      altfrage: {
        question: 'Wie gelangen Enzyme zu den Lysosomen?',
        answer: 'Lysosomale Enzyme werden im rER synthetisiert, im Golgi mit einem Mannose-6-Phosphat-Tag (M6P) versehen und an der trans-Seite des Golgi in Vesikel verpackt, die M6P-Rezeptoren tragen. Diese Vesikel fusionieren mit späten Endosomen, die zu Lysosomen heranreifen.'
      },
      klinischerBezug: 'Bei der **I-Zell-Krankheit** (Inklusions-Zell-Krankheit, Mukolipidose II) fehlt das Enzym **N-Acetylglucosamin-Phosphotransferase**, das den Mannose-6-Phosphat-Tag anheftet. Folge: Lysosomale Enzyme bekommen kein M6P-Signal, werden nicht zu Lysosomen dirigiert, sondern nach extrazellulär sezerniert. Die Lysosomen bleiben funktionslos, füllen sich mit unverdautem Material (Inklusionen). Klinisch: schwere psychomotorische Retardierung, Skelettdeformitäten, grobe Gesichtszüge, Hornhauttrübung. Tod meist vor dem 10. Lebensjahr.',
      selfTest: [
        {
          question: 'Welche Funktion hat das raue ER?',
          options: [
            'Lipidsynthese und Entgiftung',
            'Synthese von Membranproteinen und sekretorischen Proteinen',
            'Glykosylierung und Sortierung von Proteinen',
            'Abbau beschädigter Organellen',
            'Speicherung von Glykogen und Lipiden'
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
            'sER → Golgi → rER → Zellmembran',
            'rER → Peroxisomen → Golgi → Zellmembran'
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
            'KDEL-Sequenz',
            'Phosphatidylserin-Markierung'
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
      content: `Die Zellmembran trennt innen von außen und kontrolliert, was rein und raus darf. Das **Flüssig-Mosaik-Modell** (Singer & Nicolson, 1972) beschreibt ihren Aufbau: eine **Lipiddoppelschicht** (Bilayer) mit eingelagerten Proteinen wie Mosaiksteine.

Die Lipiddoppelschicht besteht aus **Phospholipiden** — **amphipathische Moleküle** mit einem hydrophilen Kopf (Phosphat + Alkohol) und zwei hydrophoben Fettsäureschwänzen. In wässriger Umgebung ordnen sie sich spontan zu einer Doppelschicht: hydrophobe Schwänze nach innen, hydrophile Köpfe nach außen. Diese Anordnung ist nicht kovalent stabilisiert, sondern durch den **hydrophoben Effekt** und Van-der-Waals-Kräfte — die Membran ist fluid, nicht starr.

**Membranproteine**: **Integrale Proteine** (transmembran) durchspannen die gesamte Lipiddoppelschicht. Sie haben hydrophobe Bereiche (oft α-Helices) in der Membran und hydrophile Bereiche außerhalb. Funktion: Ionenkanäle, Transporter, Rezeptoren, Enzyme. **Periphere Proteine** sind nur locker an der Membranoberfläche assoziiert — entweder elektrostatisch an Lipidköpfe gebunden oder an integrale Proteine gekoppelt. Funktion: Signalmoleküle, Strukturproteine (z.B. Spektrin in Erythrozyten).

Die **Glykokalix** ist eine Kohlenhydratschicht auf der Außenseite — bestehend aus **Glykoproteinen** und **Glykolipiden**. Sie dient der Zell-Zell-Erkennung (z.B. Blutgruppenantigene A, B, 0), dem Schutz vor mechanischer Schädigung und der Immunerkennung.

**Cholesterol** macht ca. 20–25 % der Membranlipide in Tierzellen aus und wirkt als **Fluiditätspuffer**: Bei hohen Temperaturen verringert es die Fluidität (verhindert zu viel Bewegung), bei niedrigen Temperaturen verhindert es Kristallisation (hält die Membran fluid). **Laterale Mobilität**: Phospholipide bewegen sich innerhalb einer Schicht blitzschnell (ca. 10⁷ Mal pro Sekunde). Der Wechsel zwischen den Schichten (**Flip-Flop**) ist selten und braucht **Flippasen**. **Lipid Rafts** sind cholesterolreiche Mikrodomänen, die bestimmte Proteine konzentrieren — wichtig für Signaltransduktion und Endozytose.`,
      diagram: 'cell-membrane',
      merksätze: [
        'Flüssig-Mosaik-Modell: Phospholipid-Doppelschicht = „Flüssig" (bewegliche Lipide), Proteine = „Mosaik" (eingebettete Steine)',
        'Cholesterol = „Fluiditätspuffer": hält die Membran bei Hitze fest und bei Kälte fluid'
      ],
      altfrage: {
        question: 'Was beschreibt das Flüssig-Mosaik-Modell nach Singer und Nicolson (1972)?',
        answer: 'Es beschreibt die Zellmembran als eine fluide Lipiddoppelschicht aus Phospholipiden, in die integrale und periphere Proteine mosaikartig eingelagert sind. Die Komponenten sind lateral beweglich. Cholesterol reguliert die Fluidität, die Glykokalix befindet sich auf der Außenseite.'
      },
      klinischerBezug: 'Bei **paroxysmaler nächtlicher Hämoglobinurie** (PNH) fehlt der **GPI-Anker** (Glycosylphosphatidylinositol), der bestimmte Proteine in der Membran verankert. Dadurch fehlen CD55 und CD59 — beides Komplement-Regulatoren — auf der Erythrozytenoberfläche. Folge: komplementvermittelte Hämolyse, besonders nachts (niedrigerer pH aktiviert Komplement stärker). Klinisch: dunkler Urin am Morgen (Hämoglobinurie), Anämie, Thromboseneigung. Therapie: Eculizumab, ein monoklonaler Antikörper gegen Komplementfaktor C5.',
      selfTest: [
        {
          question: 'Welche Funktion hat Cholesterol in der Zellmembran?',
          options: [
            'Es bildet Ionenkanäle in der Membran',
            'Es reguliert die Membranfluidität als Fluiditätspuffer',
            'Es ist Teil der Glykokalix auf der Außenseite',
            'Es dient als Rezeptor für Signalmoleküle',
            'Es katalysiert den Flip-Flop von Phospholipiden'
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
            'Periphere Proteine besitzen hydrophobe Transmembrandomänen',
            'Alle Membranproteine sind kovalent an Phospholipide gebunden'
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
            'Die Verankerungsstruktur für periphere Proteine',
            'Ein Netzwerk aus Aktinfilamenten unter der Membran'
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
      content: `Die Zellmembran ist selektiv permeabel — sie lässt nicht alles durch. Transporte laufen passiv (ohne ATP) oder aktiv (mit ATP).

**Passiver Transport** geht MIT dem Konzentrationsgradienten (von hoch nach niedrig), braucht KEIN ATP. **Einfache Diffusion**: Kleine, unpolare Moleküle (O₂, CO₂, N₂, Steroidhormone) diffundieren direkt durch die Lipiddoppelschicht. Geschwindigkeit nach **Ficksches Diffusionsgesetz**: je steiler der Gradient, desto schneller. **Erleichterte Diffusion** (Facilitated Diffusion): Polare Moleküle und Ionen brauchen Hilfe. **Ionenkanäle** (z.B. K⁺-Kanäle, Na⁺-Kanäle) lassen selektiv bestimmte Ionen durch. **Carrier-Proteine** (z.B. GLUT-Transporter für Glucose) binden den Stoff, ändern ihre Konformation und entlassen ihn auf der anderen Seite. Beide zeigen **Sättigungskinetik** (maximale Transportrate Vmax) und **Spezifität**.

**Osmose** ist Wasserdiffusion durch eine semipermeable Membran — vom Ort niedriger Konzentration gelöster Stoffe zum Ort hoher Konzentration. In **hypotonischer Lösung** (weniger gelöste Stoffe außen) strömt Wasser in die Zelle — Tierzellen schwellen und können platzen (**Lyse**), Pflanzenzellen bauen **Turgor** auf (Zellwand verhindert Platzen). In **hypertonischer Lösung** (mehr gelöste Stoffe außen) verliert die Zelle Wasser — Tierzellen schrumpfen (**Krenation**), Pflanzenzellen **plasmolysieren** (Zellmembran löst sich von der Zellwand). In **isotonischer Lösung** herrscht Gleichgewicht. **Osmotischer Druck** π nach **Van-'t-Hoff-Gleichung**: π = i × c × R × T (i = Van-'t-Hoff-Faktor, c = molare Konzentration, R = Gaskonstante, T = Temperatur).

**Aktiver Transport** geht GEGEN den Konzentrationsgradienten, braucht ATP. **Primär aktiver Transport**: ATP wird direkt hydrolysiert. Wichtigstes Beispiel: **Na⁺/K⁺-ATPase** — pumpt pro ATP 3 Na⁺ raus, 2 K⁺ rein. Das ist **elektrogen** (netto +1 Ladung nach außen), trägt zum negativen Ruhemembranpotential bei. Weitere Beispiele: Ca²⁺-ATPase, H⁺/K⁺-ATPase (Belegzellen im Magen). **Sekundär aktiver Transport**: nutzt einen durch primär aktiven Transport aufgebauten Ionengradienten. **Symporter**: zwei Stoffe in gleicher Richtung (z.B. Na⁺/Glucose-Symporter SGLT1 im Darm — Na⁺ fließt mit dem Gradienten rein, nimmt Glucose gegen ihren Gradienten mit). **Antiporter**: zwei Stoffe in entgegengesetzter Richtung (z.B. Na⁺/H⁺-Antiporter).

**Vesikulärer Transport** für Großes: **Endozytose** (Aufnahme) — **Phagozytose** (Zellfressen, z.B. Makrophagen), **Pinozytose** (Zelltrinken), **rezeptorvermittelte Endozytose** (z.B. LDL-Aufnahme über Clathrin-coated Pits). **Exozytose** (Abgabe) — Vesikel fusionieren mit der Zellmembran, Inhalt wird nach außen entlassen.`,
      diagram: 'membrane-transport',
      merksätze: [
        'Na⁺/K⁺-ATPase: „3 Natrium raus, 2 Kalium rein" → elektrogen (netto +1 Ladung nach außen)',
        'Passiv = mit dem Gradienten (kein ATP), Aktiv = gegen den Gradienten (ATP nötig), Vesikulär = Endo-/Exozytose für Großes'
      ],
      altfrage: {
        question: 'Wie viele Ionen transportiert die Na⁺/K⁺-ATPase pro ATP-Zyklus?',
        answer: '3 Na⁺ werden nach extrazellulär und 2 K⁺ nach intrazellulär transportiert. Da netto eine positive Ladung nach außen transportiert wird, ist die Pumpe elektrogen und trägt zum negativen Ruhemembranpotential bei.'
      },
      klinischerBezug: '**Digoxin** (Herzglykosid aus Digitalis) hemmt die Na⁺/K⁺-ATPase in Herzmuskelzellen. Folge: [Na⁺] innen steigt → der Na⁺/Ca²⁺-Antiporter arbeitet schlechter → [Ca²⁺] innen steigt → stärkere Kontraktion (**positiv inotrop**). Einsatz bei Herzinsuffizienz und Vorhofflimmern. Problem: sehr geringe therapeutische Breite (toxisch/therapeutisch dicht beieinander). Überdosierung führt zu Arrhythmien, Übelkeit, Sehstörungen (Gelbsehen). Bei **Mukoviszidose** (zystische Fibrose) ist der Chloridkanal CFTR defekt — Chlorid kann nicht aus der Zelle, Wasser folgt nicht → zäher Schleim in Lunge und Pankreas. Therapie: Ivacaftor (CFTR-Potentiator).',
      selfTest: [
        {
          question: 'Was passiert mit einer Tierzelle in einer hypotonischen Lösung?',
          options: [
            'Die Zelle schrumpft (Krenation)',
            'Die Zelle nimmt Wasser auf und kann lysieren',
            'Es findet kein Netto-Wassertransport statt',
            'Die Zelle plasmolysiert',
            'Die Zelle beginnt aktiv Ionen nach außen zu transportieren'
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
            'Die erleichterte Diffusion über GLUT-Transporter',
            'Die Ca²⁺-ATPase im sarkoplasmatischen Retikulum'
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
            'Proteine und Polysaccharide',
            'Wasser durch Aquaporine'
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
      content: `Der Zellzyklus ist die Abfolge von Wachstum, DNA-Replikation und Zellteilung. Er gliedert sich in **Interphase** (ca. 90 % der Zeit) und **M-Phase** (Mitose, ca. 10 %).

Die **Interphase** hat drei Phasen: **G1-Phase** (Gap 1, Wachstum), **S-Phase** (Synthese, DNA-Replikation), **G2-Phase** (Gap 2, Vorbereitung auf Mitose). In der **G1-Phase** wächst die Zelle, baut Proteine und Organellen auf, bereitet sich vor. Die Dauer der G1-Phase variiert stark — sie bestimmt, wie lang der gesamte Zellzyklus dauert. Zellen, die sich nicht mehr teilen (z.B. Neuronen, Herzmuskelzellen), treten in die **G0-Phase** ein — einen Ruhezustand. Manche Zellen können bei Bedarf wieder raus (z.B. Hepatozyten nach Leberteilresektion), andere bleiben dauerhaft in G0 (Neuronen).

In der **S-Phase** wird die gesamte DNA **semikonservativ** repliziert: Jedes Chromosom besteht danach aus zwei identischen **Schwesterchromatiden**, verbunden am **Zentromer**. DNA-Gehalt verdoppelt sich von 2n/2C auf 2n/4C (bei diploiden Zellen). Gleichzeitig werden die Zentrosomen dupliziert. Replikation startet an multiplen **Origins of Replication** und läuft bidirektional.

In der **G2-Phase** bereitet sich die Zelle auf die Mitose vor: Synthese von Proteinen für den Spindelapparat (z.B. Tubulin), weiteres Wachstum. Das Chromatin beginnt zu kondensieren.

Der Zellzyklus hat mehrere **Kontrollpunkte** (Checkpoints). **G1/S-Checkpoint** (Restriktionspunkt): Ist die Zelle groß genug? Nährstoffe vorhanden? DNA intakt? Erst dann geht's in die S-Phase. **G2/M-Checkpoint**: DNA-Replikation vollständig und fehlerfrei? **Spindel-Checkpoint** (Metaphase-Checkpoint): Alle Chromosomen korrekt am Spindelapparat angeheftet? Regulation durch **Cycline** und **Cyclin-abhängige Kinasen (CDKs)**: Cycline werden phasenspezifisch synthetisiert und abgebaut, aktivieren CDKs, treiben den Zyklus voran. **p53** — der „Wächter des Genoms" — stoppt den Zyklus bei DNA-Schäden am G1/S-Checkpoint. Wenn Reparatur nicht möglich ist, leitet p53 die **Apoptose** (programmierten Zelltod) ein.`,
      diagram: 'cell-cycle',
      merksätze: [
        'Merke: Zellzyklus = G1 (Wachstum, Checkpoint) → S (DNA-Replikation) → G2 (Kontrolle) → M (Mitose). G0 = ruhende Zellen (z.B. Neuronen). G1/S-Checkpoint = Restriktionspunkt.',
        'p53 = „Wächter des Genoms": Stoppt den Zellzyklus bei DNA-Schäden oder leitet Apoptose ein'
      ],
      altfrage: {
        question: 'In welcher Phase des Zellzyklus wird die DNA repliziert?',
        answer: 'In der S-Phase (Synthesephase) der Interphase. Die DNA wird semikonservativ repliziert, sodass jedes Chromosom danach aus zwei Schwesterchromatiden besteht. Der DNA-Gehalt steigt von 2C auf 4C.'
      },
      klinischerBezug: 'Über 50 % aller Tumore haben Mutationen im **TP53-Gen** (kodiert für p53). Wenn p53 ausfällt, können Zellen mit DNA-Schäden unkontrolliert weiterteilen — ein zentraler Schritt zur Krebsentstehung. **Li-Fraumeni-Syndrom**: Keimbahnmutation in TP53, autosomal-dominant vererbt. Folge: stark erhöhtes Krebsrisiko bereits in jungen Jahren — Sarkome (Knochen, Weichgewebe), Brustkrebs, Hirntumoren, Leukämien, Nebennierenrindenkarzinome. Viele Chemotherapeutika zielen auf die S-Phase: **5-Fluorouracil** (Antimetabolit, hemmt Thymidin-Synthese), **Methotrexat** (hemmt Dihydrofolat-Reduktase → Nukleotidsynthese gestört).',
      selfTest: [
        {
          question: 'Was geschieht in der G0-Phase?',
          options: [
            'Die DNA wird repliziert',
            'Die Zelle befindet sich in einem Ruhezustand und teilt sich nicht',
            'Die Mitose findet statt',
            'Die Chromosomen kondensieren',
            'Die Zentrosomen werden dupliziert'
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
            'Ob die Cytokinese korrekt stattgefunden hat',
            'Ob die Mitochondrien vollständig repliziert wurden'
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
            '4n/4C',
            '2n/8C'
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
      content: `Die Mitose teilt den Zellkern so, dass zwei genetisch identische Tochterzellen entstehen. **Äquationale Teilung** — der Chromosomensatz bleibt gleich (2n → 2n). Merkwort: **PMAT** (Prophase, Metaphase, Anaphase, Telophase).

**Prophase**: Chromatin kondensiert zu sichtbaren **Chromosomen** (jedes besteht aus zwei **Schwesterchromatiden**, verbunden am **Zentromer**). Die Zentrosomen wandern zu entgegengesetzten Zellpolen und bauen den **Spindelapparat** aus Mikrotubuli. Der Nukleolus verschwindet. In der späten Prophase (**Prometaphase**) löst sich die Kernhülle auf, Spindelfasern heften sich über **Kinetochore** (Proteinkomplexe am Zentromer) an die Chromosomen.

**Metaphase**: Alle Chromosomen reihen sich in der **Äquatorialebene** (Metaphaseplatte) auf. Jedes Chromosom ist über seine zwei Kinetochore mit Spindelfasern beider Pole verbunden (**bipolare Anheftung**). Am **Spindel-Checkpoint** wird geprüft: Alle Kinetochore korrekt besetzt? Erst dann geht's weiter. Der **Anaphase-Promoting Complex** (APC/C) wird aktiviert, baut **Securin** ab, **Separase** wird freigesetzt und spaltet die **Kohäsin-Proteine**, die die Schwesterchromatiden zusammenhalten.

**Anaphase**: Die Schwesterchromatiden trennen sich und werden als eigenständige Chromosomen zu den Zellpolen gezogen. **Anaphase A**: Verkürzung der Kinetochor-Mikrotubuli zieht die Chromosomen. **Anaphase B**: Verlängerung der Polfasern drückt die Pole auseinander.

**Telophase**: Chromosomen erreichen die Pole, dekondensieren zu Chromatin. Die Kernhülle bildet sich um jeden Chromosomensatz neu, der Nukleolus erscheint wieder. Spindelapparat wird abgebaut.

**Cytokinese** (Zellteilung): Tierzellen bilden einen **kontraktilen Ring** aus Aktin und Myosin, der sich zusammenzieht und eine **Teilungsfurche** erzeugt — bis die Zelle durchtrennt ist. Pflanzenzellen bauen von innen nach außen eine **Zellplatte** (Phragmoplast), die zur neuen Zellwand wird. Jede Tochterzelle hat einen vollständigen diploiden Chromosomensatz (2n/2C), genetisch identisch mit der Mutterzelle. Mitose dient Wachstum, Gewebereparatur und ungeschlechtlicher Fortpflanzung.`,
      diagram: 'mitosis',
      merksätze: [
        'Mitose-Phasen PMAT: Prophase (Chromosomen kondensieren), Metaphase (Äquatorialplatte), Anaphase (Chromatiden trennen sich), Telophase (Kernhülle bildet sich neu) + Zytokinese.',
        'Mitose = äquational (2n → 2n, identische Tochterzellen), Meiose = reduktional (2n → 1n)'
      ],
      altfrage: {
        question: 'Was geschieht in der Anaphase der Mitose?',
        answer: 'Die Schwesterchromatiden werden getrennt. Der APC/C aktiviert Separase, die die Kohäsin-Proteine spaltet. Die nun eigenständigen Chromosomen werden durch Verkürzung der Kinetochor-Mikrotubuli zu den entgegengesetzten Zellpolen gezogen.'
      },
      klinischerBezug: '**Vinca-Alkaloide** (Vincristin, Vinblastin) und **Taxane** (Paclitaxel, Docetaxel) sind Chemotherapeutika, die den Spindelapparat stören. Vinca-Alkaloide verhindern die **Polymerisation** von Tubulin → Mikrotubuli können sich nicht aufbauen. Taxane stabilisieren Mikrotubuli und verhindern deren **Depolymerisation**. Beide arretieren Zellen in der Metaphase → Apoptose. Besonders effektiv bei schnell proliferierenden Tumoren (Brustkrebs, Lungenkarzinom, Lymphome). Nebenwirkungen: Neuropathie (periphere Nervenschäden), Knochenmarksuppression (Neutropenie).',
      selfTest: [
        {
          question: 'In welcher Phase ordnen sich die Chromosomen in der Äquatorialebene an?',
          options: [
            'Prophase',
            'Metaphase',
            'Anaphase',
            'Telophase',
            'Prometaphase'
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
            'Vier genetisch verschiedene haploide Tochterzellen',
            'Eine diploide und eine haploide Tochterzelle'
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
            'Ligase',
            'Telomerase'
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
      content: `Die Meiose halbiert den Chromosomensatz: Aus einer diploiden Zelle (2n) entstehen vier haploide Gameten (1n). Zwei Teilungen — **Meiose I** (Reduktionsteilung) und **Meiose II** (Äquationsteilung) — mit nur EINER DNA-Replikation davor.

**Prophase I** ist die längste Phase, mit fünf Stadien: **Leptotän** (Chromosomen kondensieren), **Zygotän** (**Synapsis** — homologe Chromosomen paaren sich, verbunden durch den **synaptonemalen Komplex**), **Pachytän** (**Crossing-over** — Austausch von DNA-Abschnitten zwischen nicht-schwesterlichen Chromatiden homologer Chromosomen an **Chiasmata**, das erzeugt genetische Vielfalt), **Diplotän** (Chromosomen beginnen sich zu trennen, bleiben an Chiasmata verbunden), **Diakinese** (maximale Kondensation, Kernhülle löst sich auf).

**Metaphase I**: Homologe Chromosomenpaare (**Bivalente** oder **Tetraden**) ordnen sich an der Äquatorialebene an. Die zufällige Orientierung der Bivalente führt zur **unabhängigen Assortierung** (Independent Assortment) — bei 23 Chromosomenpaaren des Menschen gibt es 2²³ ≈ 8,4 Millionen mögliche Kombinationen.

**Anaphase I**: Homologe Chromosomen (NICHT die Schwesterchromatiden!) werden getrennt und zu den Polen gezogen. Das ist die **Reduktionsteilung**: 2n → 1n. Die Tochterzellen nach Meiose I sind haploid (1n/2C), aber jedes Chromosom besteht noch aus zwei Schwesterchromatiden.

Keine S-Phase zwischen Meiose I und II.

**Meiose II** verläuft wie eine Mitose: **Prophase II** (Chromosomen kondensieren), **Metaphase II** (Chromosomen reihen sich an der Äquatorialebene auf), **Anaphase II** (Schwesterchromatiden werden getrennt), **Telophase II** (Kernhüllen bilden sich). Endergebnis: vier haploide Zellen (1n/1C), jede mit einzigartiger Genkombination.

Mitose vs. Meiose: Mitose erzeugt zwei genetisch identische diploide Zellen (2n), Meiose vier genetisch verschiedene haploide Zellen (1n). Meiose I = Reduktionsteilung (homologe Chromosomen trennen sich), Meiose II = Äquationsteilung (Schwesterchromatiden trennen sich). Genetische Vielfalt entsteht durch Crossing-over (Prophase I), unabhängige Assortierung (Metaphase I) und zufällige Befruchtung.

**Non-Disjunction** (fehlende Chromosomentrennung) in Meiose I oder II führt zu **Aneuploidie**: **Trisomie** (drei Kopien eines Chromosoms, z.B. Trisomie 21/Down-Syndrom) oder **Monosomie** (nur eine Kopie, z.B. Turner-Syndrom 45,X). Non-Disjunction in Meiose I betrifft beide Tochterzellen, in Meiose II nur eine.`,
      diagram: 'meiosis',
      merksätze: [
        'Meiose I = Reduktion (homologe trennen sich, 2n→1n), Meiose II = Äquation (Schwesterchromatiden trennen sich, wie Mitose)',
        'Genetische Vielfalt durch: Crossing-over (Prophase I), unabhängige Assortierung (Metaphase I), zufällige Befruchtung'
      ],
      altfrage: {
        question: 'In welcher Phase der Meiose findet Crossing-over statt?',
        answer: 'Im Pachytän der Prophase I. Dabei werden DNA-Abschnitte zwischen nicht-schwesterlichen Chromatiden homologer Chromosomen an den Chiasmata ausgetauscht. Dies führt zu einer Rekombination des genetischen Materials und erhöht die genetische Vielfalt.'
      },
      klinischerBezug: '**Trisomie 21** (Down-Syndrom) entsteht in ca. 95 % durch Non-Disjunction in der mütterlichen Meiose I. Risiko steigt mit mütterlichem Alter: Bei 20-Jährigen 1:1500, bei 35-Jährigen 1:350, bei 40-Jährigen 1:100. Warum? Eizellen werden in der fetalen Entwicklung angelegt und bleiben jahrzehntelang im **Diktyotän** (Pause in Prophase I) arretiert. Der **Kohäsin-Komplex**, der die Schwesterchromatiden zusammenhält, degradiert mit der Zeit. Klinisch: charakteristische Gesichtszüge, Muskelhypotonie, geistige Behinderung (variabel), erhöhtes Risiko für Herzfehler, Leukämie, Alzheimer. **Trisomie 18** (Edwards-Syndrom) und **Trisomie 13** (Pätau-Syndrom) sind schwerer, meist letal im ersten Lebensjahr.',
      selfTest: [
        {
          question: 'Was wird in der Anaphase I der Meiose getrennt?',
          options: [
            'Die Schwesterchromatiden',
            'Die homologen Chromosomen',
            'Die Zentromere',
            'Die Spindelfasern',
            'Die Nukleosomen'
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
            'Ca. 70 Billionen (2⁴⁶)',
            'Ca. 1.000 (2¹⁰)'
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
            'Die Kondensation der Chromosomen in der Prophase',
            'Die Verschmelzung zweier haploider Zellen zur Zygote'
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
      content: `**Zelldifferenzierung**: Aus einer unspezialisierten Zelle wird ein spezialisierter Zelltyp mit bestimmter Struktur und Funktion. Ein Neuron sieht völlig anders aus als eine Muskelzelle oder ein Erythrozyt — obwohl alle dasselbe Genom haben. Wie geht das? **Differentielle Genexpression**: In jeder Zelle ist nur ein spezifisches Muster von Genen aktiv, andere sind stillgelegt. Regulation durch **Transkriptionsfaktoren**, **epigenetische Modifikationen** (DNA-Methylierung, Histonmodifikationen), **microRNAs**, **Chromatinstruktur**. Während der Embryonalentwicklung steuern **Morphogene** und Wachstumsfaktoren die Spezialisierung. Differenzierung ist normalerweise **irreversibel** — eine ausdifferenzierte Zelle kehrt nicht spontan zurück.

**Stammzellen** sind undifferenziert und haben zwei Eigenschaften: **Selbsterneuerung** (können sich teilen und dabei Stammzellen bleiben) und **Differenzierungspotenzial** (können spezialisierte Zelltypen hervorbringen). Man unterscheidet nach Potenzial: **Totipotent** (können ALLES bilden, auch Plazenta) — nur Zygote und Blastomeren bis zum 8-Zell-Stadium. **Pluripotent** (können alle Zelltypen der drei Keimblätter bilden — Ektoderm, Mesoderm, Endoderm — aber NICHT Plazenta) — embryonale Stammzellen (ESC) aus der inneren Zellmasse der Blastozyste. **Multipotent** (können nur Zelltypen eines bestimmten Gewebes bilden) — z.B. **hämatopoetische Stammzellen** im Knochenmark (alle Blutzellen), **mesenchymale Stammzellen** (Knochen, Knorpel, Fett). **Unipotent** (nur ein Zelltyp) — z.B. Basalzellen der Epidermis.

**Apoptose** (programmierter Zelltod) ist ein kontrollierter, energieabhängiger Prozess — essentiell für Gewebehomöostase. Die Zelle schrumpft, das Chromatin kondensiert (**Pyknose**), die DNA wird durch Endonukleasen fragmentiert, die Zelle zerfällt in **apoptotische Körperchen** (Apoptotic Bodies), die von Phagozyten aufgenommen werden — ohne Entzündung. Zwei Hauptwege: **Intrinsischer Weg** (mitochondrial) — ausgelöst durch DNA-Schäden, oxidativen Stress. Cytochrom c wird aus Mitochondrien freigesetzt, bildet mit Apaf-1 das **Apoptosom**, aktiviert **Caspase-9**. **Extrinsischer Weg** (Rezeptor-vermittelt) — extrazelluläre Todessignale (Fas-Ligand, TNF) binden an Todesrezeptoren, aktivieren **Caspase-8**. Beide Wege münden in **Effektor-Caspasen** (v.a. Caspase-3), die die Zelle abbauen. **Bcl-2** wirkt antiapoptotisch (verhindert Cytochrom-c-Freisetzung), **Bax** und **Bak** proapoptotisch (fördern Freisetzung).

**Apoptose vs. Nekrose**: Apoptose = kontrolliert, sauber, keine Entzündung. Nekrose = unkontrolliert, chaotisch, Zellschwellung, Membranruptur, Freisetzung von Zellinhalt, Entzündungsreaktion.

**Induzierte pluripotente Stammzellen (iPSCs)**: Shinya Yamanaka (Nobelpreis 2012) zeigte, dass differenzierte Zellen durch Einführung von vier Transkriptionsfaktoren (**Oct4, Sox2, Klf4, c-Myc** — Yamanaka-Faktoren) zu pluripotenten Stammzellen reprogrammiert werden können. Revolutionär für die regenerative Medizin.`,
      diagram: 'stem-cells',
      merksätze: [
        'Stammzellpotenzial: Totipotent (alles) → Pluripotent (drei Keimblätter) → Multipotent (ein Gewebe) → Unipotent (ein Zelltyp) – „Total, Pluri, Multi, Uni = abnehmendes Potenzial"',
        'Apoptose vs. Nekrose: Apoptose = kontrolliert, sauber, keine Entzündung; Nekrose = unkontrolliert, chaotisch, Entzündung'
      ],
      altfrage: {
        question: 'Was unterscheidet pluripotente von totipotenten Stammzellen?',
        answer: 'Totipotente Stammzellen (Zygote, bis 8-Zell-Stadium) können ALLE Zelltypen inklusive exträmbryonaler Gewebe (Plazenta) bilden. Pluripotente Stammzellen (embryonale Stammzellen) können alle Zelltypen der drei Keimblätter bilden, aber NICHT exträmbryonales Gewebe.'
      },
      klinischerBezug: '**Hämatopoetische Stammzelltransplantation** (Knochenmarktransplantation) nutzt multipotente Stammzellen zur Behandlung von Leukämien, Lymphomen, schwerer aplastischer Anämie. Nach Hochdosis-Chemotherapie (zerstört Knochenmark) werden Spender-Stammzellen transplantiert, die das blutbildende System wiederherstellen. Problem: **Graft-versus-Host-Disease** (GvHD) — Spender-T-Zellen greifen Empfängergewebe an. Bei **follikulärem Lymphom** ist das antiapoptotische Protein Bcl-2 durch t(14;18)-Translokation überexprimiert — Tumorzellen entgehen der Apoptose. Therapie: **Venetoclax**, ein BCL-2-Inhibitor, der Apoptose wieder ermöglicht (Einsatz bei CLL, AML).',
      selfTest: [
        {
          question: 'Welche Stammzellen sind totipotent?',
          options: [
            'Hämatopötische Stammzellen im Knochenmark',
            'Die Zygote und Blastomeren bis zum 8-Zell-Stadium',
            'Embryonale Stammzellen der inneren Zellmasse',
            'Mesenchymale Stammzellen im Bindegewebe',
            'Neuronale Stammzellen im Hippocampus'
          ],
          correctIndex: 1,
          explanation: 'Nur die Zygote und die Blastomeren bis zum 8-Zell-Stadium sind totipotent – sie können alle Zelltypen einschließlich exträmbryonaler Gewebe (Plazenta) bilden. Embryonale Stammzellen der inneren Zellmasse sind pluripotent.'
        },
        {
          question: 'Was ist ein Merkmal der Apoptose im Gegensatz zur Nekrose?',
          options: [
            'Zellschwellung und Membranruptur',
            'Freisetzung von Zellinhalt und Entzündungsreaktion',
            'Kontrollierter Abbau ohne Entzündung, Bildung apoptotischer Körperchen',
            'Zufälliger Zelltod durch externe Schädigung',
            'Zellteilung durch asymmetrische Mitose ohne Spindelapparat'
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
            'Fas, TNF, Caspase-8, Caspase-3',
            'Wnt, Hedgehog, Notch, BMP'
          ],
          correctIndex: 1,
          explanation: 'Shinya Yamanaka (Nobelpreis 2012) entdeckte, dass die vier Transkriptionsfaktoren Oct4, Sox2, Klf4 und c-Myc differenzierte Zellen zu induzierten pluripotenten Stammzellen (iPSCs) reprogrammieren können.'
        }
      ]
    }
  ]
};
