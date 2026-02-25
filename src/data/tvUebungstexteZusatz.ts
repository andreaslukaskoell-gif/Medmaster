/**
 * Zusätzliche TV-Übungstexte (tv-ueb-6 bis tv-ueb-40) – gleiches Vorbild wie tvUebungstexte.ts.
 * Format: 5 Optionen A–E, 1 Punkt pro richtige Antwort.
 */
import type { TVText } from "./kffTextverstaendnis";

export const tvUebungstexteZusatz: TVText[] = [
  {
    id: "tv-ueb-6",
    title: "Die Synapse und Neurotransmitter",
    topic: "Neurobiologie",
    difficulty: 2,
    text: `Die Synapse ist die Kontaktstelle zwischen zwei Nervenzellen oder zwischen einer Nervenzelle und einer Muskel- oder Drüsenzelle. An der chemischen Synapse wird das elektrische Signal der sendenden Zelle in eine Freisetzung von Botenstoffen (Neurotransmittern) umgewandelt. Diese werden aus Vesikeln in den synaptischen Spalt ausgeschüttet und binden an Rezeptoren der nachgeschalteten Zelle, was dort wiederum ein elektrisches oder stoffwechselvermittelndes Signal auslöst.

Wichtige Neurotransmitter sind Acetylcholin (unter anderem an der neuromuskulären Endplatte und im vegetativen Nervensystem), Glutamat als wichtigster erregender Transmitter im Zentralnervensystem, GABA als hemmender Transmitter sowie Monoamine wie Dopamin, Serotonin und Noradrenalin, die unter anderem Stimmung, Antrieb und Aufmerksamkeit beeinflussen. Die Wirkung wird durch Wiederaufnahme des Transmitters in die Präsynapse, enzymatischen Abbau oder durch Rezeptorblocker beendet.

Viele Psychopharmaka und Drogen greifen an Synapsen an: Antidepressiva beeinflussen die Verfügbarkeit von Serotonin oder Noradrenalin; Botulinumtoxin verhindert die Freisetzung von Acetylcholin und führt zur Muskellähmung.`,
    questions: [
      {
        question:
          "Welche der Aussagen zur Synapse ist/sind richtig? (1) An der chemischen Synapse werden Neurotransmitter in den synaptischen Spalt freigesetzt. (2) Neurotransmitter binden an Rezeptoren der nachgeschalteten Zelle. (3) GABA wirkt im ZNS vor allem erregend. (4) Die Wirkung kann durch Wiederaufnahme oder enzymatischen Abbau beendet werden.",
        options: [
          "1. und 2. sind richtig.",
          "Nur 3. ist richtig.",
          "1., 2. und 4. sind richtig.",
          "Alle sind richtig.",
          "2. und 4. sind richtig.",
        ],
        correctAnswer: 2,
        explanation:
          "Freisetzung in den Spalt, Bindung an Rezeptoren und Beendigung durch Wiederaufnahme/Abbau werden genannt; GABA wird als hemmender Transmitter beschrieben.",
        relevantPassage:
          "Freisetzung von Botenstoffen (Neurotransmittern) … in den synaptischen Spalt … binden an Rezeptoren der nachgeschalteten Zelle … GABA als hemmender Transmitter … Wirkung wird durch Wiederaufnahme … enzymatischen Abbau … beendet.",
      },
      {
        question: "Was wird im Text über Botulinumtoxin ausgesagt?",
        options: [
          "Es steigert die Acetylcholin-Freisetzung.",
          "Es verhindert die Freisetzung von Acetylcholin und kann zu Muskellähmung führen.",
          "Es wirkt ausschließlich im Gehirn.",
          "Es wird als Antidepressivum eingesetzt.",
          "Es wird im Text nicht erwähnt.",
        ],
        correctAnswer: 1,
        explanation:
          "Der Text nennt ausdrücklich, dass Botulinumtoxin die Freisetzung von Acetylcholin verhindert und zur Muskellähmung führt.",
        relevantPassage:
          "Botulinumtoxin verhindert die Freisetzung von Acetylcholin und führt zur Muskellähmung.",
      },
    ],
  },
  {
    id: "tv-ueb-7",
    title: "Die Niere und das Nephron",
    topic: "Physiologie",
    difficulty: 2,
    text: `Die Niere filtert das Blut und bildet den Harn. Funktionelle Einheit ist das Nephron, bestehend aus dem Nierenkörperchen (Glomerulus und Bowman-Kapsel) und dem Tubulusapparat. Im Glomerulus wird durch hohen Blutdruck ein Ultrafiltrat ins Kapselinnere gepresst – Wasser, Salze, Glukose und kleine Moleküle gelangen in den Tubulus, während größere Proteine und Zellen im Blut bleiben. Pro Tag werden etwa 180 Liter Primärharn gebildet.

Im Verlauf der Tubuli wird der Großteil des Wassers und vieler gelöster Substanzen rückresorbiert; zugleich werden bestimmte Stoffe aktiv in den Harn sezerniert. Die Rückresorption erfolgt je nach Abschnitt unterschiedlich: Im proximalen Tubulus werden unter anderem Glukose und Aminosäuren nahezu vollständig aufgenommen; in der Henle-Schleife und im distalen Tubulus wird die Konzentration des Harns an die Bedürfnisse des Körpers angepasst. Hormone wie Aldosteron und ADH (antidiuretisches Hormon) steuern die Wasser- und Salzrückresorption.

Erkrankungen der Niere können zu Bluthochdruck, Ödemen und Anreicherung von Abfallstoffen im Blut führen. Bei chronischem Nierenversagen ist oft eine Dialyse oder eine Transplantation erforderlich.`,
    questions: [
      {
        question:
          "Welche der Aussagen zum Nephron ist/sind richtig? (1) Im Glomerulus entsteht ein Ultrafiltrat. (2) Große Proteine passieren die Filtrationsbarriere und gelangen in den Primärharn. (3) Im Tubulus werden Wasser und gelöste Stoffe teilweise rückresorbiert. (4) ADH beeinflusst die Wasserruckresorption.",
        options: [
          "1. und 3. sind richtig.",
          "1., 3. und 4. sind richtig.",
          "Nur 2. ist richtig.",
          "Alle sind richtig.",
          "2. und 4. sind richtig.",
        ],
        correctAnswer: 1,
        explanation:
          "Ultrafiltrat im Glomerulus, Rückresorption im Tubulus und ADH-Steuerung werden genannt; große Proteine bleiben laut Text im Blut.",
        relevantPassage:
          "Ultrafiltrat ins Kapselinnere gepresst … größere Proteine und Zellen im Blut bleiben … Großteil des Wassers … rückresorbiert … ADH … steuern die Wasser- und Salzrückresorption.",
      },
      {
        question: "Was wird im Text über den Primärharn gesagt?",
        options: [
          "Es werden etwa 180 Liter pro Tag gebildet.",
          "Er enthält vor allem große Proteine.",
          "Er wird vollständig ausgeschieden.",
          "Er entsteht erst im Tubulus.",
          "Er wird nicht erwähnt.",
        ],
        correctAnswer: 0,
        explanation:
          "Der Text nennt explizit, dass pro Tag etwa 180 Liter Primärharn gebildet werden.",
        relevantPassage: "Pro Tag werden etwa 180 Liter Primärharn gebildet.",
      },
    ],
  },
  {
    id: "tv-ueb-8",
    title: "Photosynthese",
    topic: "Biochemie / Botanik",
    difficulty: 2,
    text: `Bei der Photosynthese wandeln Pflanzen, Algen und manche Bakterien Lichtenergie in chemische Energie um und bauen aus Kohlendioxid und Wasser Glukose sowie anderen organischen Verbindungen auf. Als Nebenprodukt entsteht Sauerstoff. Die Reaktion läuft in den Chloroplasten ab, genauer in den Thylakoidmembranen (Lichtreaktion) und im Stroma (Dunkelreaktion).

In der Lichtreaktion wird Licht von Chlorophyll und anderen Pigmenten absorbiert; die Energie treibt eine Elektronentransportkette an, an deren Ende NADPH und ATP entstehen. Gleichzeitig wird Wasser gespalten, wobei Sauerstoff freigesetzt wird. In der Dunkelreaktion (Calvin-Zyklus) wird CO2 mit Hilfe von ATP und NADPH zu Zucker reduziert. Der dabei zentral beteiligte Enzymkomplex heißt RuBisCO.

Die Photosynthese ist die Grundlage nahezu aller Nahrungsketten und liefert den Großteil des atmosphärischen Sauerstoffs. Änderungen des CO2-Gehalts der Luft und der Lichtintensität beeinflussen die Photosyntheserate.`,
    questions: [
      {
        question:
          "Welche der Aussagen zur Photosynthese ist/sind richtig? (1) Sauerstoff entsteht als Nebenprodukt. (2) Die Lichtreaktion findet in den Thylakoidmembranen statt. (3) Im Calvin-Zyklus wird CO2 zu Zucker reduziert. (4) RuBisCO ist an der Dunkelreaktion beteiligt.",
        options: [
          "1. und 2. sind richtig.",
          "Alle sind richtig.",
          "Nur 3. ist richtig.",
          "2., 3. und 4. sind richtig.",
          "1. und 4. sind richtig.",
        ],
        correctAnswer: 1,
        explanation:
          "Sauerstoff als Nebenprodukt, Lichtreaktion in Thylakoiden, Calvin-Zyklus und RuBisCO in der Dunkelreaktion werden genannt.",
        relevantPassage:
          "Als Nebenprodukt entsteht Sauerstoff … Thylakoidmembranen (Lichtreaktion) … Calvin-Zyklus … CO2 … zu Zucker reduziert … Enzymkomplex heißt RuBisCO.",
      },
      {
        question: "Wo wird bei der Lichtreaktion Wasser gespalten und was entsteht dabei?",
        options: [
          "Im Stroma; es entsteht nur ATP.",
          "An der Thylakoidmembran; dabei wird Sauerstoff freigesetzt.",
          "Im Calvin-Zyklus; es entsteht Glukose.",
          "Nur in Algen, nicht in Pflanzen.",
          "Wasser wird in der Photosynthese nicht gespalten.",
        ],
        correctAnswer: 1,
        explanation:
          "Der Text beschreibt, dass in der Lichtreaktion Wasser gespalten wird und dabei Sauerstoff freigesetzt wird.",
        relevantPassage: "Gleichzeitig wird Wasser gespalten, wobei Sauerstoff freigesetzt wird.",
      },
    ],
  },
  {
    id: "tv-ueb-9",
    title: "B- und T-Zellen des Immunsystems",
    topic: "Immunologie",
    difficulty: 2,
    text: `Das adaptive Immunsystem beruht wesentlich auf B-Lymphozyten und T-Lymphozyten. Beide entstammen Vorläuferzellen im Knochenmark; T-Zellen reifen jedoch im Thymus heran, B-Zellen im Knochenmark. Beide erkennen spezifische Strukturen (Antigene) von Erregern oder Fremdstoffen, aber auf unterschiedliche Weise.

B-Zellen können Antigene direkt über ihren B-Zell-Rezeptor binden. Nach Aktivierung entwickeln sie sich zu Plasmazellen, die Antikörper (Immunglobuline) sezernieren. Diese neutralisieren Erreger, markieren sie für Fresszellen oder aktivieren das Komplementsystem. Ein Teil der B-Zellen wird zu Gedächtniszellen, die bei erneutem Kontakt mit dem gleichen Antigen schneller reagieren. T-Zellen erkennen Antigene nur, wenn sie von körpereigenen Zellen auf ihrer Oberfläche präsentiert werden (MHC-Moleküle). T-Helferzellen unterstützen B-Zellen und andere Immunzellen; zytotoxische T-Zellen können virusinfizierte oder entartete Zellen abtöten.

Impfungen nutzen das Prinzip der spezifischen Immunantwort: Durch abgeschwächte oder abgetötete Erreger oder Antigenbestandteile werden B- und T-Zellen aktiviert und Gedächtniszellen gebildet, ohne dass die Krankheit ausbricht.`,
    questions: [
      {
        question:
          "Welche der Aussagen zu B- und T-Zellen ist/sind richtig? (1) T-Zellen reifen im Thymus. (2) B-Zellen können zu Plasmazellen werden und Antikörper bilden. (3) T-Zellen erkennen Antigene nur in Präsentation durch MHC. (4) Gedächtniszellen entstehen nur aus T-Zellen.",
        options: [
          "1., 2. und 3. sind richtig.",
          "Nur 4. ist richtig.",
          "2. und 4. sind richtig.",
          "Alle sind richtig.",
          "1. und 3. sind richtig.",
        ],
        correctAnswer: 0,
        explanation:
          "Thymusreifung der T-Zellen, Plasmazellen/Antikörper der B-Zellen und MHC-Präsentation für T-Zellen werden genannt; auch B-Zellen bilden Gedächtniszellen.",
        relevantPassage:
          "T-Zellen reifen jedoch im Thymus heran … B-Zellen … entwickeln sich zu Plasmazellen, die Antikörper … sezernieren … Ein Teil der B-Zellen wird zu Gedächtniszellen … T-Zellen erkennen Antigene nur, wenn sie … präsentiert werden (MHC-Moleküle).",
      },
      {
        question: "Was wird im Text über Impfungen ausgesagt?",
        options: [
          "Impfungen umgehen das adaptive Immunsystem.",
          "Durch Antigenkontakt werden B- und T-Zellen aktiviert und Gedächtniszellen gebildet, ohne dass die Krankheit ausbricht.",
          "Nur B-Zellen werden durch Impfungen aktiviert.",
          "Gedächtniszellen werden bei Impfungen nicht gebildet.",
          "Impfungen werden im Text nicht erwähnt.",
        ],
        correctAnswer: 1,
        explanation:
          "Der Text beschreibt, dass Impfungen B- und T-Zellen aktivieren und Gedächtniszellen bilden, ohne dass die Krankheit ausbricht.",
        relevantPassage:
          "Durch abgeschwächte oder abgetötete Erreger … werden B- und T-Zellen aktiviert und Gedächtniszellen gebildet, ohne dass die Krankheit ausbricht.",
      },
    ],
  },
  {
    id: "tv-ueb-10",
    title: "DNA-Replikation",
    topic: "Genetik / Molekularbiologie",
    difficulty: 2,
    text: `Die Verdopplung der DNA vor einer Zellteilung wird als Replikation bezeichnet. Sie verläuft semikonservativ: Jede der beiden Tochter-Doppelstränge besteht aus einem alten (elterlichen) und einem neu synthetisierten Strang. Die Replikation wird durch das Enzym Helicase eingeleitet, das die Doppelhelix entspiralisiert und die beiden Stränge trennt. An den entstehenden Replikationsgabeln arbeiten DNA-Polymerasen in 5'-3'-Richtung; da die beiden Matrizenstränge entgegengesetzt orientiert sind, wird einer der neuen Stränge kontinuierlich (leading strand), der andere in Fragmenten (Okazaki-Fragmente) synthetisiert, die anschließend durch Ligase verknüpft werden.

Die DNA-Polymerase benötigt einen kurzen RNA-Primer, von dem aus sie den neuen Strang aufbaut. Fehler bei der Einbaurate werden durch eine Korrekturlesefunktion (Proofreading) der Polymerase reduziert. Trotzdem können Mutationen entstehen; Reparaturenzyme überwachen die DNA und korrigieren viele Schäden.

Störungen der Replikation oder der Reparatur spielen bei der Krebsentstehung eine Rolle. Einige Chemotherapeutika zielen auf die Replikation schnell teilender Tumorzellen ab.`,
    questions: [
      {
        question:
          "Welche der Aussagen zur DNA-Replikation ist/sind richtig? (1) Sie verläuft semikonservativ. (2) Die Helicase trennt die beiden Stränge. (3) Beide neuen Stränge werden kontinuierlich synthetisiert. (4) Die DNA-Polymerase arbeitet in 5'-3'-Richtung.",
        options: [
          "1., 2. und 4. sind richtig.",
          "Nur 3. ist richtig.",
          "Alle sind richtig.",
          "2. und 4. sind richtig.",
          "1. und 3. sind richtig.",
        ],
        correctAnswer: 0,
        explanation:
          "Semikonservativ, Helicase trennt Stränge und Polymerase 5'-3' werden genannt; einer der neuen Stränge wird in Fragmenten synthetisiert, nicht beide kontinuierlich.",
        relevantPassage:
          "verläuft semikonservativ … Helicase … trennt die beiden Stränge … DNA-Polymerasen in 5'-3'-Richtung … einer … kontinuierlich … der andere in Fragmenten (Okazaki-Fragmente).",
      },
      {
        question: "Was wird im Text über RNA-Primer und Fehlerkorrektur gesagt?",
        options: [
          "Die Polymerase benötigt keinen Primer.",
          "Die Polymerase benötigt einen RNA-Primer; Fehler werden durch Proofreading reduziert.",
          "Es gibt keine Reparaturmechanismen.",
          "Okazaki-Fragmente ersetzen den Primer.",
          "Proofreading verhindert alle Mutationen.",
        ],
        correctAnswer: 1,
        explanation:
          "Der Text nennt den RNA-Primer und die Korrekturlesefunktion (Proofreading) zur Fehlerreduktion.",
        relevantPassage:
          "benötigt einen kurzen RNA-Primer … Fehler … werden durch eine Korrekturlesefunktion (Proofreading) der Polymerase reduziert.",
      },
    ],
  },
  {
    id: "tv-ueb-11",
    title: "Enzyme und Enzymkinetik",
    topic: "Biochemie",
    difficulty: 2,
    text: `Enzyme sind Proteine, die biochemische Reaktionen katalysieren, indem sie die Aktivierungsenergie senken. Sie binden ihre Substrate in einem aktiven Zentrum, das räumlich und chemisch zum Substrat passt (Schlüssel-Schloss-Prinzip bzw. induzierte Passform). Nach der Umsetzung werden die Produkte freigesetzt; das Enzym bleibt unverändert und kann erneut reagieren.

Die Reaktionsgeschwindigkeit hängt von Substratkonzentration, Temperatur und pH-Wert ab. Bei steigender Substratkonzentration nimmt die Geschwindigkeit zunächst zu und nähert sich einem Maximum (Sättigung), wenn alle Enzymmoleküle besetzt sind. Michaelis-Menten-Kinetik beschreibt diesen Verlauf. Hemmstoffe können die Enzymaktivität vermindern: kompetitive Hemmer besetzen das aktive Zentrum, allosterische Hemmer binden an einer anderen Stelle und verändern die Enzymstruktur.

Viele Medikamente und Gifte wirken als Enzymhemmer. Die Messung von Enzymaktivitäten im Blut dient der Diagnostik – erhöhte Werte bestimmter Enzyme deuten auf Schäden von Organen wie Herz, Leber oder Muskulatur hin.`,
    questions: [
      {
        question:
          "Welche der Aussagen zu Enzymen ist/sind richtig? (1) Enzyme senken die Aktivierungsenergie. (2) Das Enzym wird bei der Reaktion verbraucht. (3) Bei Sättigung sind alle Enzymmoleküle mit Substrat besetzt. (4) Kompetitive Hemmer binden am aktiven Zentrum.",
        options: [
          "1., 3. und 4. sind richtig.",
          "Nur 2. ist richtig.",
          "Alle sind richtig.",
          "1. und 2. sind richtig.",
          "2. und 4. sind richtig.",
        ],
        correctAnswer: 0,
        explanation:
          "Aktivierungsenergie, Sättigung und kompetitive Hemmer werden genannt; das Enzym bleibt unverändert.",
        relevantPassage:
          "katalysieren, indem sie die Aktivierungsenergie senken … das Enzym bleibt unverändert … wenn alle Enzymmoleküle besetzt sind … kompetitive Hemmer besetzen das aktive Zentrum.",
      },
      {
        question: "Was wird im Text über die Diagnostik gesagt?",
        options: [
          "Enzymaktivitäten im Blut werden nicht zur Diagnostik genutzt.",
          "Erhöhte Werte bestimmter Enzyme im Blut können auf Organschäden hinweisen.",
          "Nur Herzschäden lassen sich so nachweisen.",
          "Enzyme werden im Text nicht in diesem Zusammenhang erwähnt.",
          "Die Messung erfolgt nur in der Leber.",
        ],
        correctAnswer: 1,
        explanation:
          "Der Text nennt die Messung von Enzymaktivitäten im Blut zur Diagnostik und erwähnt Herz, Leber und Muskulatur.",
        relevantPassage:
          "Die Messung von Enzymaktivitäten im Blut dient der Diagnostik – erhöhte Werte bestimmter Enzyme deuten auf Schäden von Organen wie Herz, Leber oder Muskulatur hin.",
      },
    ],
  },
  {
    id: "tv-ueb-12",
    title: "Reflexbogen und Rückenmark",
    topic: "Physiologie",
    difficulty: 1,
    text: `Ein Reflex ist eine rasche, unwillkürliche Reaktion auf einen Reiz, die über einen Reflexbogen abläuft. Beim monosynaptischen Dehnungsreflex – zum Beispiel dem Patellarsehnenreflex – wird eine Muskeldehnung von Rezeptoren (Muskelspindeln) registriert. Das afferente Signal gelangt ins Rückenmark und wird dort direkt auf die motorische Nervenzelle des gleichen Muskels umgeschaltet; die Kontraktion des Muskels erfolgt ohne Beteiligung des Gehirns. So kann die Muskelspannung schnell angepasst werden.

Bei polysynaptischen Reflexen sind eine oder mehrere Schaltstellen (Interneurone) zwischen Sensorik und Motorik eingeschaltet. Beim Rückzugsreflex zieht man die Hand von einer heißen Fläche zurück, bevor man den Schmerz bewusst wahrnimmt; dabei werden gleichzeitig Beugemuskeln aktiviert und Streckmuskeln gehemmt. Reflexe schützen den Körper und entlasten das Gehirn von einfachen Steuerungsaufgaben.

Die Prüfung von Reflexen ist Teil der neurologischen Untersuchung. Ausfall oder Verstärkung von Reflexen können auf Schädigungen des peripheren Nervensystems oder des Rückenmarks hinweisen.`,
    questions: [
      {
        question:
          "Welche der Aussagen zum Reflexbogen ist/sind richtig? (1) Beim Patellarsehnenreflex läuft die Umschaltung im Rückenmark ab. (2) Das Gehirn ist bei monosynaptischen Reflexen nicht beteiligt. (3) Polysynaptische Reflexe haben Interneurone. (4) Beim Rückzugsreflex wird die Hand bewusst vor dem Rückzug gesteuert.",
        options: [
          "1., 2. und 3. sind richtig.",
          "Nur 4. ist richtig.",
          "Alle sind richtig.",
          "2. und 4. sind richtig.",
          "1. und 3. sind richtig.",
        ],
        correctAnswer: 0,
        explanation:
          "Umschaltung im Rückenmark, keine Beteiligung des Gehirns bei monosynaptischen Reflexen und Interneurone bei polysynaptischen Reflexen werden genannt; der Rückzug erfolgt vor der bewussten Wahrnehmung.",
        relevantPassage:
          "afferente Signal gelangt ins Rückenmark … ohne Beteiligung des Gehirns … polysynaptischen Reflexen … Interneurone … zieht man die Hand … zurück, bevor man den Schmerz bewusst wahrnimmt.",
      },
      {
        question: "Wozu dient die Reflexprüfung laut Text?",
        options: [
          "Nur zur Forschung.",
          "Als Teil der neurologischen Untersuchung; Reflexveränderungen können auf Schädigungen hinweisen.",
          "Ausschließlich zur Prüfung des Gehirns.",
          "Reflexe werden im Text nicht in diesem Zusammenhang erwähnt.",
          "Nur bei Kindern.",
        ],
        correctAnswer: 1,
        explanation:
          "Der Text nennt die Reflexprüfung als Teil der neurologischen Untersuchung und dass Ausfall oder Verstärkung auf Schädigungen hinweisen können.",
        relevantPassage:
          "Die Prüfung von Reflexen ist Teil der neurologischen Untersuchung. Ausfall oder Verstärkung … können auf Schädigungen … hinweisen.",
      },
    ],
  },
  {
    id: "tv-ueb-13",
    title: "Blutgerinnung",
    topic: "Physiologie",
    difficulty: 2,
    text: `Die Blutgerinnung (Hämostase) verhindert bei Verletzungen einen übermäßigen Blutverlust. Sie umfasst die Gefäßverengung, die Bildung eines Thrombozytenpfropfs (primäre Hämostase) und die Gerinnungskaskade mit Bildung eines Fibrinnetzes (sekundäre Hämostase). Thrombozyten haften an freigelegtem Bindegewebe und setzen Botenstoffe frei, die weitere Thrombozyten anlocken und die Gefäßwand zusammenziehen.

Die Gerinnungskaskade wird über den intrinsischen und den extrinsischen Weg aktiviert; beide münden in die gemeinsame Endstrecke mit der Umwandlung von Fibrinogen zu Fibrin. Fibrin bildet ein Netz, das den Pfropf stabilisiert. Die Kaskade wird durch zahlreiche Gerinnungsfaktoren und Vitamin K abhängige Faktoren gesteuert. Antikoagulantien wie Heparin oder Cumarine hemmen die Gerinnung und werden zur Prophylaxe von Thrombosen eingesetzt.

Angeborene Gerinnungsstörungen (z. B. Hämophilie) oder ein Mangel an Thrombozyten können zu verstärkter Blutung führen; umgekehrt begünstigen bestimmte Erkrankungen oder Medikamente die Entstehung von Gefäßverschlüssen.`,
    questions: [
      {
        question:
          "Welche der Aussagen zur Blutgerinnung ist/sind richtig? (1) Thrombozyten sind an der primären Hämostase beteiligt. (2) Fibrin entsteht aus Fibrinogen und stabilisiert den Pfropf. (3) Vitamin K ist an der Gerinnung beteiligt. (4) Heparin fördert die Gerinnung.",
        options: [
          "1., 2. und 3. sind richtig.",
          "Nur 4. ist richtig.",
          "Alle sind richtig.",
          "2. und 4. sind richtig.",
          "1. und 3. sind richtig.",
        ],
        correctAnswer: 0,
        explanation:
          "Thrombozyten/primäre Hämostase, Fibrin aus Fibrinogen und Vitamin K werden genannt; Heparin hemmt die Gerinnung.",
        relevantPassage:
          "Thrombozytenpfropfs (primäre Hämostase) … Fibrinogen zu Fibrin … Fibrin bildet ein Netz, das den Pfropf stabilisiert … Vitamin K abhängige Faktoren … Heparin … hemmen die Gerinnung.",
      },
      {
        question: "Was wird im Text über Hämophilie gesagt?",
        options: [
          "Hämophilie wird durch Vitamin-K-Mangel verursacht.",
          "Es handelt sich um eine angeborene Gerinnungsstörung, die zu verstärkter Blutung führen kann.",
          "Hämophilie betrifft nur die Thrombozyten.",
          "Hämophilie wird im Text nicht erwähnt.",
          "Sie wird mit Heparin behandelt.",
        ],
        correctAnswer: 1,
        explanation:
          "Der Text nennt Hämophilie als Beispiel für angeborene Gerinnungsstörungen, die zu verstärkter Blutung führen können.",
        relevantPassage:
          "Angeborene Gerinnungsstörungen (z. B. Hämophilie) … können zu verstärkter Blutung führen.",
      },
    ],
  },
  {
    id: "tv-ueb-14",
    title: "Mitochondrien und Atmungskette",
    topic: "Zellbiologie",
    difficulty: 2,
    text: `Mitochondrien sind die Kraftwerke der Zelle. In ihnen läuft der Großteil der ATP-Bildung ab, die die Zelle mit Energie versorgt. In der Matrix finden der Citratzyklus und die Beta-Oxidation von Fettsäuren statt; in der inneren Mitochondrienmembran ist die Atmungskette (Elektronentransportkette) lokalisiert. Dort werden Elektronen von reduzierten Coenzymen (NADH, FADH2) über mehrere Komplexe auf Sauerstoff übertragen. Die dabei freigesetzte Energie wird genutzt, um Protonen aus der Matrix in den Intermembranraum zu pumpen.

Der entstehende Protonengradient treibt die ATP-Synthase an: Protonen strömen zurück in die Matrix und die ATP-Synthase katalysiert die Bildung von ATP aus ADP und Phosphat. Dieser Vorgang wird als oxidative Phosphorylierung bezeichnet. Ohne Sauerstoff kann die Atmungskette nicht durchlaufen werden; die Zelle weicht auf Glykolyse und Milchsäuregärung aus, die deutlich weniger ATP liefern.

Defekte der Atmungskette können zu Muskelschwäche und neurologischen Störungen führen. Mitochondrien besitzen eigene DNA und vermehren sich durch Teilung; man geht davon aus, dass sie ursprünglich von Bakterien abstammen (Endosymbiontentheorie).`,
    questions: [
      {
        question:
          "Welche der Aussagen zu Mitochondrien ist/sind richtig? (1) Die Atmungskette liegt in der inneren Mitochondrienmembran. (2) Elektronen werden auf Sauerstoff übertragen. (3) Die ATP-Synthase nutzt den Protonengradienten. (4) Ohne Sauerstoff kann die Atmungskette nicht ablaufen.",
        options: [
          "1. und 2. sind richtig.",
          "Alle sind richtig.",
          "Nur 3. ist richtig.",
          "2., 3. und 4. sind richtig.",
          "1. und 4. sind richtig.",
        ],
        correctAnswer: 1,
        explanation:
          "Lage der Atmungskette, Übertragung auf Sauerstoff, ATP-Synthase und Protonengradient sowie Abhängigkeit von Sauerstoff werden genannt.",
        relevantPassage:
          "innere Mitochondrienmembran ist die Atmungskette … Elektronen … auf Sauerstoff übertragen … Protonengradient treibt die ATP-Synthase an … Ohne Sauerstoff kann die Atmungskette nicht durchlaufen werden.",
      },
      {
        question: "Was wird im Text über die Herkunft der Mitochondrien gesagt?",
        options: [
          "Sie entstehen aus dem Zellkern.",
          "Man geht von Abstammung von Bakterien aus (Endosymbiontentheorie).",
          "Sie haben keine eigene DNA.",
          "Ihre Herkunft wird im Text nicht erwähnt.",
          "Sie stammen von Viren ab.",
        ],
        correctAnswer: 1,
        explanation: "Der Text nennt die Endosymbiontentheorie und eigene DNA der Mitochondrien.",
        relevantPassage:
          "Mitochondrien besitzen eigene DNA … man geht davon aus, dass sie ursprünglich von Bakterien abstammen (Endosymbiontentheorie).",
      },
    ],
  },
  {
    id: "tv-ueb-15",
    title: "Mendelsche Vererbungsregeln",
    topic: "Genetik",
    difficulty: 1,
    text: `Gregor Mendel formulierte im 19. Jahrhundert Regeln der Vererbung, die er an Erbsenpflanzen untersuchte. Die Uniformitätsregel besagt: Kreuzt man reinerbige Eltern, die sich in einem Merkmal unterscheiden, so sind die Nachkommen der ersten Tochtergeneration (F1) untereinander gleich (uniform). Bei dominant-rezessiver Vererbung entspricht das Erscheinungsbild der F1 dem dominanten Elter.

Die Spaltungsregel beschreibt die zweite Tochtergeneration (F2): Bei Kreuzung der F1-Individuen untereinander spalten sich die Merkmale im festen Zahlenverhältnis auf – bei einem dominant-rezessiven Erbgang 3:1 (phänotypisch) bzw. 1:2:1 (genotypisch). Mendel erklärte dies durch die Trennung (Segregation) der Anlagen (heute: Allele) bei der Keimzellenbildung und ihre zufällige Kombination bei der Befruchtung.

Die Unabhängigkeitsregel gilt für die Vererbung mehrerer Merkmale: Werden zwei Merkmale gleichzeitig betrachtet, können die zugehörigen Erbanlagen unabhängig voneinander kombiniert werden – vorausgesetzt, die Gene liegen auf verschiedenen Chromosomen. Die Mendelschen Regeln gelten für diploide Organismen und bilden die Grundlage der klassischen Genetik.`,
    questions: [
      {
        question:
          "Welche der Aussagen zu den Mendelschen Regeln ist/sind richtig? (1) In der F1 sind die Nachkommen bei Kreuzung reinerbiger Eltern uniform. (2) In der F2 spaltet sich das Merkmal bei dominant-rezessivem Erbgang phänotypisch im Verhältnis 3:1 auf. (3) Die Segregation der Allele erfolgt bei der Keimzellenbildung. (4) Die Unabhängigkeitsregel gilt nur für Gene auf demselben Chromosom.",
        options: [
          "1., 2. und 3. sind richtig.",
          "Nur 4. ist richtig.",
          "Alle sind richtig.",
          "2. und 4. sind richtig.",
          "1. und 3. sind richtig.",
        ],
        correctAnswer: 0,
        explanation:
          "Uniformität der F1, 3:1-Spaltung in F2 und Segregation bei Keimzellenbildung werden genannt; die Unabhängigkeitsregel gilt für Gene auf verschiedenen Chromosomen.",
        relevantPassage:
          "Nachkommen der ersten Tochtergeneration (F1) untereinander gleich (uniform) … F2 … im festen Zahlenverhältnis … 3:1 (phänotypisch) … Trennung (Segregation) der Anlagen … bei der Keimzellenbildung … Unabhängigkeitsregel … Gene liegen auf verschiedenen Chromosomen.",
      },
      {
        question: "Was besagt die Uniformitätsregel?",
        options: [
          "Die F2-Generation ist immer uniform.",
          "Bei Kreuzung reinerbiger Eltern sind die F1-Nachkommen untereinander gleich.",
          "Alle Merkmale sind dominant.",
          "Keimzellen sind immer reinerbig.",
          "Die Uniformitätsregel wird im Text nicht erklärt.",
        ],
        correctAnswer: 1,
        explanation:
          "Der Text beschreibt die Uniformitätsregel: Kreuzung reinerbiger Eltern ergibt in F1 untereinander gleiche Nachkommen.",
        relevantPassage:
          "Uniformitätsregel besagt: Kreuzt man reinerbige Eltern … so sind die Nachkommen der ersten Tochtergeneration (F1) untereinander gleich (uniform).",
      },
    ],
  },
];
