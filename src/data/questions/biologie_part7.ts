export const fragenPart7 = [
  {
    id: "bio-q-301",
    stichwortId: "bio-8-01",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "In einem Stammbaum ist eine autosomal-dominant vererbte Erkrankung dargestellt. Ein betroffener Mann (heterozygot) und eine gesunde Frau bekommen ein Kind. Mit welcher Wahrscheinlichkeit wird dieses Kind die Erkrankung aufweisen?",
    optionen: ["0 %", "25 %", "50 %", "75 %", "100 %"],
    korrekteAntwort: 2,
    erklärung:
      "Bei autosomal-dominanter Vererbung reicht ein defektes Allel für die Ausprägung der Erkrankung. Der heterozygote betroffene Vater (Aa) gibt mit 50 % Wahrscheinlichkeit das defekte Allel weiter, die gesunde Mutter (aa) gibt immer ein gesundes Allel. Somit beträgt die Erkrankungswahrscheinlichkeit 50 %.",
    strategieTipp:
      "Bei autosomal-dominanten Erbgängen erkranken bereits Heterozygote. Kreuzen Sie im Kopf: Aa × aa ergibt 50 % Aa (krank) und 50 % aa (gesund).",
  },
  {
    id: "bio-q-302",
    stichwortId: "bio-8-01",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext:
      "Welches Symbol wird in Stammbäumen üblicherweise für eine weibliche Person verwendet?",
    optionen: ["Kreis", "Quadrat", "Dreieck", "Raute", "Stern"],
    korrekteAntwort: 0,
    erklärung:
      "In der Stammbaumanalyse werden Frauen standardmäßig durch Kreise und Männer durch Quadrate dargestellt. Ausgefüllte Symbole kennzeichnen betroffene Personen, halb ausgefüllte Symbole Konduktorinnen bei X-chromosomalen Erbgängen.",
    strategieTipp:
      "Merken Sie sich die Grundsymbole: Kreis = weiblich, Quadrat = männlich. Diese Konvention ist international standardisiert.",
  },
  {
    id: "bio-q-303",
    stichwortId: "bio-8-01",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "In einem Stammbaum für eine X-chromosomal-rezessiv vererbte Erkrankung ist eine gesunde Frau, deren Vater erkrankt war, mit einem gesunden Mann verheiratet. Wie hoch ist die Wahrscheinlichkeit, dass ein gemeinsamer Sohn erkrankt?",
    optionen: ["0 %", "12,5 %", "25 %", "50 %", "100 %"],
    korrekteAntwort: 3,
    erklärung:
      "Da der Vater der Frau erkrankt war (XᵃY), muss sie von ihm das defekte X-Chromosom geerbt haben und ist Konduktorin (XᴬXᵃ). Der gesunde Mann hat den Genotyp XᴬY. Bei der Vererbung erhalten Söhne ihr X-Chromosom von der Mutter: 50 % erben Xᵃ (erkrankt), 50 % erben Xᴬ (gesund).",
    strategieTipp:
      "Bei X-chromosomal-rezessiven Erbgängen: Töchter erkrankter Väter sind immer Konduktorinnen. Deren Söhne erkranken mit 50 % Wahrscheinlichkeit.",
  },
  {
    id: "bio-q-304",
    stichwortId: "bio-8-01",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was versteht man unter einer Konduktorin im Kontext der X-chromosomalen Vererbung?",
    optionen: [
      "Eine betroffene Frau mit zwei defekten X-Chromosomen",
      "Eine gesunde Frau, die ein defektes X-Chromosom trägt",
      "Eine Frau, die kein X-Chromosom besitzt",
      "Eine Frau mit drei X-Chromosomen",
      "Eine Frau, die nur gesunde Allele trägt",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Eine Konduktorin ist eine Trägerin eines rezessiven X-chromosomalen Allels, die selbst nicht erkrankt, weil das zweite X-Chromosom ein gesundes Allel trägt. Sie kann das defekte Allel aber an ihre Nachkommen weitergeben. In Stammbäumen wird sie oft durch ein halb ausgefülltes Kreißymbol dargestellt.",
    strategieTipp:
      "Konduktorin = Überträgerin. Sie ist heterozygot für ein X-chromosomal-rezessives Allel und damit Trägerin, aber nicht betroffen.",
  },
  {
    id: "bio-q-305",
    stichwortId: "bio-8-01",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Bei einer autosomal-rezessiv vererbten Erkrankung sind beide Elternteile gesund, aber heterozygote Träger. Wie hoch ist die Wahrscheinlichkeit, dass ihr Kind erkrankt?",
    optionen: ["0 %", "25 %", "50 %", "75 %", "100 %"],
    korrekteAntwort: 1,
    erklärung:
      "Beide Eltern sind heterozygot (Aa). Bei der Kreuzung Aa × Aa entstehen: 25 % AA (gesund), 50 % Aa (gesund, aber Träger), 25 % aa (erkrankt). Die Erkrankungswahrscheinlichkeit beträgt somit 25 %.",
    strategieTipp:
      "Bei autosomal-rezessiver Vererbung mit zwei heterozygoten Eltern gilt die 1:2:1-Regel bzw. phänotypisch 3:1 (gesund:krank).",
  },
  {
    id: "bio-q-306",
    stichwortId: "bio-8-02",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was ist das Hauptziel der genetischen Beratung?",
    optionen: [
      "Die Durchführung von Gentherapien",
      "Die Information über Vererbungsrisiken und Entscheidungshilfe",
      "Die Veränderung des Erbguts",
      "Die Behandlung genetischer Erkrankungen",
      "Die Auswahl des Geschlechts von Nachkommen",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Die genetische Beratung dient der Information von Ratsuchenden über Vererbungsrisiken, die Durchführung von Risikoberechnungen und die Unterstützung bei Entscheidungen. Sie ist nicht-direktiv und respektiert die Autonomie der Ratsuchenden. Gentherapie oder Geschlechtswahl sind nicht Teil der Beratung.",
    strategieTipp:
      "Genetische Beratung = Information und Unterstützung, keine Behandlung oder Manipulation. Der Fokus liegt auf Aufklärung und autonomer Entscheidungsfindung.",
  },
  {
    id: "bio-q-307",
    stichwortId: "bio-8-02",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Ein Paar ist jeweils heterozygot für zwei verschiedene autosomal-rezessive Erkrankungen (AaBb × AaBb). Wie hoch ist die Wahrscheinlichkeit, dass ein Kind für beide Erkrankungen gesund ist (also nicht erkrankt, aber Träger sein kann)?",
    optionen: ["9/16", "3/16", "1/16", "15/16", "7/16"],
    korrekteAntwort: 3,
    erklärung:
      "Bei unabhängiger Vererbung zweier Gene gilt: Wahrscheinlichkeit für gesund bei Gen A = 3/4 (AA oder Aa), für gesund bei Gen B = 3/4. Die kombinierte Wahrscheinlichkeit für beide gesund: 3/4 × 3/4 = 9/16. Die Wahrscheinlichkeit, für beide krank zu sein (aabb), beträgt 1/4 × 1/4 = 1/16. Gesund für beide = 15/16.",
    strategieTipp:
      'Bei multiplen rezessiven Erkrankungen multiplizieren Sie die Einzelwahrscheinlichkeiten. Für "nicht krank" bei rezessiver Vererbung gilt jeweils 3/4.',
  },
  {
    id: "bio-q-308",
    stichwortId: "bio-8-02",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Aussage zur genetischen Diagnostik ist korrekt?",
    optionen: [
      "Sie kann nur vor der Geburt durchgeführt werden",
      "Sie umfasst molekulargenetische, zytogenetische und biochemische Verfahren",
      "Sie ist in Deutschland für alle Erkrankungen verpflichtend",
      "Sie verändert das Erbgut des Patienten",
      "Sie kann nur bei Männern angewendet werden",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Die genetische Diagnostik nutzt verschiedene Methoden: molekulargenetische Verfahren (DNA-Sequenzierung, PCR), zytogenetische Verfahren (Chromosomenanalyse, Karyogramm) und biochemische Verfahren (Enzymaktivitätstests). Sie kann vor und nach der Geburt durchgeführt werden und ist freiwillig.",
    strategieTipp:
      "Genetische Diagnostik = Analyse, nicht Therapie. Sie umfasst alle Methoden zur Untersuchung des Erbguts oder seiner Produkte.",
  },
  {
    id: "bio-q-309",
    stichwortId: "bio-8-03",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was versteht man unter multifaktorieller Vererbung?",
    optionen: [
      "Die Vererbung durch mehrere Generationen",
      "Das Zusammenwirken mehrerer Gene und Umweltfaktoren",
      "Die Mutation mehrerer Gene gleichzeitig",
      "Die Vererbung über mehrere Chromosomen",
      "Die Weitergabe von Merkmalen nur über die Mutter",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Bei der multifaktoriellen Vererbung wirken mehrere Gene (polygene Komponente) zusammen mit Umweltfaktoren bei der Ausprägung eines Merkmals. Beispiele sind Körpergröße, Hautfarbe, Intelligenz oder Krankheiten wie Diabetes mellitus Typ 2, Hypertonie oder Herzinfarktrisiko.",
    strategieTipp:
      "Multifaktoriell = viele Gene + Umwelt. Im Gegensatz zur monogenen Vererbung gibt es hier kein einfaches Mendelsches Vererbungsmuster.",
  },
  {
    id: "bio-q-310",
    stichwortId: "bio-8-03",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Was ist der Unterschied zwischen Polygenie und Pleiotropie?",
    optionen: [
      "Polygenie: viele Gene, ein Merkmal; Pleiotropie: ein Gen, viele Merkmale",
      "Polygenie: ein Gen, viele Merkmale; Pleiotropie: viele Gene, ein Merkmal",
      "Beide Begriffe sind synonym",
      "Polygenie bezieht sich nur auf Pflanzen, Pleiotropie nur auf Tiere",
      "Polygenie ist dominant, Pleiotropie rezessiv",
    ],
    korrekteAntwort: 0,
    erklärung:
      "Polygenie bezeichnet die Beteiligung mehrerer Gene an der Ausprägung eines einzelnen Merkmals (z.B. Hautfarbe durch mehrere Pigmentgene). Pleiotropie beschreibt die Beeinflussung mehrerer Merkmale durch ein einzelnes Gen (z.B. verursacht die Sichelzellanämie-Mutation veränderte Erythrozyten, Anämie, Organschäden).",
    strategieTipp:
      "Merkhilfe: PolyGENIE = viele Gene. PleiOTROpie = ein Gen, viele Wirkungen (griechisch pleion = mehr, tropos = Wendung).",
  },
  {
    id: "bio-q-311",
    stichwortId: "bio-8-03",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was versteht man unter Penetranz in der Genetik?",
    optionen: [
      "Die Stärke der Merkmalsausprägung",
      "Die Häufigkeit, mit der ein Genotyp zum entsprechenden Phänotyp führt",
      "Die Anzahl der betroffenen Gene",
      "Die Geschwindigkeit der Vererbung",
      "Die Rückkreuzung mit der Parentalgeneration",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Penetranz gibt den Prozentsatz der Individün mit einem bestimmten Genotyp an, die auch den erwarteten Phänotyp zeigen. Bei vollständiger Penetranz (100 %) zeigen alle Träger des Genotyps das Merkmal. Bei unvollständiger Penetranz entwickeln manche Träger das Merkmal nicht, z.B. bei BRCA1-Mutationen (ca. 70 % Penetranz für Brustkrebs).",
    strategieTipp:
      "Penetranz = Durchdringungsrate. Frage: Wie viele Genträger zeigen tatsächlich das Merkmal? Unterscheiden Sie von Expressivität (wie stark es ausgeprägt ist).",
  },
  {
    id: "bio-q-312",
    stichwortId: "bio-8-03",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Was beschreibt der Begriff Expressivität?",
    optionen: [
      "Die Häufigkeit einer Mutation in der Population",
      "Die Wahrscheinlichkeit, ein Allel zu vererben",
      "Die unterschiedliche Ausprägungsstärke eines Merkmals bei verschiedenen Individün mit gleichem Genotyp",
      "Die Expression von Proteinen in der Zelle",
      "Die Anzahl exprimierter Gene",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Expressivität bezeichnet die variable Ausprägungsstärke eines Merkmals bei Individün mit identischem krankheitsrelevantem Genotyp. Beispiel: Bei der Neurofibromatose Typ 1 können Betroffene mit derselben Mutation unterschiedlich stark betroffen sein (von Café-au-lait-Flecken bis zu schweren Tumoren). Dies wird durch Umweltfaktoren und andere Gene beeinflusst.",
    strategieTipp:
      'Expressivität = Ausdrucksstärke. Während Penetranz fragt "ob", fragt Expressivität "wie stark". Variable Expressivität bedeutet unterschiedliche Schweregrade.',
  },
  {
    id: "bio-q-313",
    stichwortId: "bio-8-03",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Welches der folgenden Merkmale wird typischerweise polygen vererbt?",
    optionen: [
      "Blutgruppe AB0",
      "Chorea Huntington",
      "Körpergröße",
      "Mukoviszidose",
      "Hämophilie A",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Die Körpergröße wird durch das Zusammenspiel vieler Gene (polygen) und Umweltfaktoren (Ernährung) bestimmt. Die anderen genannten Merkmale folgen klassischen Mendelschen Erbgängen: AB0 ist oligogen mit drei Allelen, Chorea Huntington autosomal-dominant, Mukoviszidose autosomal-rezessiv, Hämophilie A X-chromosomal-rezessiv.",
    strategieTipp:
      "Quantitative Merkmale mit kontinuierlicher Variation (Größe, Gewicht, Hautfarbe) sind meist polygen. Qualitative Merkmale (vorhanden/nicht vorhanden) sind meist monogen.",
  },
  {
    id: "bio-q-314",
    stichwortId: "bio-8-04",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Was ist der Hauptunterschied zwischen Präimplantationsdiagnostik (PID) und Pränataldiagnostik (PND)?",
    optionen: [
      "PID erfolgt vor, PND nach der Einnistung der Embryonen",
      "PID ist invasiv, PND nicht-invasiv",
      "PID untersucht nur genetische, PND nur anatomische Merkmale",
      "PID ist in Österreich erlaubt, PND verboten",
      "Es gibt keinen Unterschied",
    ],
    korrekteAntwort: 0,
    erklärung:
      "Die Präimplantationsdiagnostik (PID) wird an Embryonen vor der Implantation im Rahmen einer In-vitro-Fertilisation durchgeführt. Die Pränataldiagnostik (PND) erfolgt nach der Einnistung während der Schwangerschaft. PID ermöglicht die Auswahl genetisch unauffälliger Embryonen vor dem Transfer, PND dient der Diagnostik während der Schwangerschaft.",
    strategieTipp:
      "Prä-implantation = vor Einnistung (IVF erforderlich). Prä-natal = vor Geburt, aber nach Einnistung (in der Schwangerschaft).",
  },
  {
    id: "bio-q-315",
    stichwortId: "bio-8-04",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Welches Verfahren der Pränataldiagnostik ist nicht-invasiv?",
    optionen: [
      "Amniozentese",
      "Chorionzottenbiopsie",
      "Nabelschnurpunktion",
      "Ultraschall",
      "Fetoskopie",
    ],
    korrekteAntwort: 3,
    erklärung:
      "Der Ultraschall ist ein nicht-invasives bildgebendes Verfahren, das keine Punktion oder Gewebeentnahme erfordert. Alle anderen genannten Verfahren sind invasiv: Amniozentese (Fruchtwasserpunktion), Chorionzottenbiopsie (Entnahme von Plazentazellen), Nabelschnurpunktion und Fetoskopie erfordern einen Eingriff in die Gebärmutter.",
    strategieTipp:
      "Nicht-invasive PND: Ultraschall, NIPT (Bluttest der Mutter). Invasive PND: Alles, was punktiert oder Gewebe entnimmt (Amniozentese, Chorionzottenbiopsie).",
  },
  {
    id: "bio-q-316",
    stichwortId: "bio-8-04",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Wann wird eine Amniozentese typischerweise durchgeführt?",
    optionen: [
      "In der 6.-8. Schwangerschaftswoche",
      "In der 11.-13. Schwangerschaftswoche",
      "In der 15.-18. Schwangerschaftswoche",
      "In der 30.-34. Schwangerschaftswoche",
      "Unmittelbar vor der Geburt",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Die Amniozentese (Fruchtwasserpunktion) wird üblicherweise zwischen der 15. und 18. Schwangerschaftswoche durchgeführt. Zu diesem Zeitpunkt ist ausreichend Fruchtwasser vorhanden, und es befinden sich genügend fetale Zellen im Fruchtwasser für zytogenetische und molekulargenetische Analysen. Das Risiko für Komplikationen ist in diesem Zeitraum relativ gering.",
    strategieTipp:
      "Amniozentese = 15.-18. SSW. Chorionzottenbiopsie früher (11.-13. SSW). Merken Sie sich: Amnio später, weil mehr Fruchtwasser benötigt wird.",
  },
  {
    id: "bio-q-317",
    stichwortId: "bio-8-04",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Was untersucht der nicht-invasive Pränataltest (NIPT)?",
    optionen: [
      "Fetale Zellen im Fruchtwasser",
      "Zellen aus der Plazenta",
      "Zellfreie fetale DNA im mütterlichen Blut",
      "Hormone im Urin der Mutter",
      "Antikörper der Mutter",
    ],
    korrekteAntwort: 2,
    erklärung:
      "Der NIPT analysiert zellfreie fetale DNA (cell-free fetal DNA, cffDNA), die von der Plazenta ins mütterliche Blut abgegeben wird. Ab der 10. Schwangerschaftswoche macht diese etwa 10-20 % der gesamten zellfreien DNA im mütterlichen Blut aus. Mittels Sequenzierung können Chromosomenstörungen wie Trisomie 21, 18 und 13 erkannt werden.",
    strategieTipp:
      "NIPT = Bluttest der Mutter, analysiert fetale DNA-Fragmente. Nicht-invasiv, aber teuer. Screent vor allem auf Trisomien.",
  },
  {
    id: "bio-q-318",
    stichwortId: "bio-8-04",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was wird beim Triple-Test untersucht?",
    optionen: [
      "Drei verschiedene Gene des Fetus",
      "Drei Hormone im mütterlichen Blut",
      "Drei verschiedene Ultraschallmarker",
      "Drei Chromosomen des Fetus",
      "Die ersten drei Schwangerschaftsmonate",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Der Triple-Test misst drei Hormon- bzw. Proteinkonzentrationen im mütterlichen Blut: AFP (Alpha-Fetoprotein), hCG (humanes Choriongonadotropin) und uE3 (unkonjugiertes Östriol). Zusammen mit dem mütterlichen Alter wird das Risiko für Chromosomenstörungen (z.B. Trisomie 21) und Neuralrohrdefekte berechnet. Der Test ist ein Screening, keine definitive Diagnose.",
    strategieTipp:
      "Triple-Test = 3 Blutwerte der Mutter (AFP, hCG, uE3). Risikoberechnung, keine Diagnose. Wird zunehmend durch NIPT ersetzt.",
  },
  {
    id: "bio-q-319",
    stichwortId: "bio-8-04",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext:
      "Welches ethische Prinzip steht im Zentrum der Diskussion um die Präimplantationsdiagnostik?",
    optionen: [
      "Das Prinzip der Wirtschaftlichkeit",
      "Die Würde des Embryos und das Recht auf Leben",
      "Die Förderung der Fortpflanzung",
      "Die Maximierung der Geburtenrate",
      "Die Gleichstellung der Geschlechter",
    ],
    korrekteAntwort: 1,
    erklärung:
      'Die zentrale ethische Frage bei der PID betrifft den moralischen Status des Embryos und sein Recht auf Leben. Kritiker sehen in der Selektion von Embryonen eine Verletzung der Menschenwürde und befürchten eine "Designer-Baby"-Entwicklung. Befürworter argumentieren mit der Vermeidung schweren Leids und dem Recht auf Fortpflanzungsfreiheit. Der Gesetzgeber muss diese Positionen abwägen.',
    strategieTipp:
      "Bei PID-Ethik: Zentral ist die Frage nach dem moralischen Status des Embryos. Wann beginnt Menschenwürde? Verschiedene Positionen sind legitim.",
  },
  {
    id: "bio-q-320",
    stichwortId: "bio-9-01",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was sollte das Miller-Urey-Experiment nachweisen?",
    optionen: [
      "Die Evolution der Dinosaurier",
      "Die Entstehung organischer Moleküle unter Ur-Erd-Bedingungen",
      "Die Funktion der Photosynthese",
      "Die Struktur der DNA",
      "Die Zellteilung bei Bakterien",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Stanley Miller und Harold Urey simulierten 1953 die Bedingungen der Ur-Atmosphäre (Methan, Ammoniak, Wasserstoff, Wasserdampf) und setzten diese Gasmischung elektrischen Entladungen (simulierte Blitze) aus. Dabei entstanden organische Moleküle wie Aminosäuren, was zeigte, dass Lebensbausteine unter abiotischen Bedingungen entstehen können (chemische Evolution).",
    strategieTipp:
      "Miller-Urey = chemische Evolution, Ursuppe. Aus anorganischen Gasen entstehen organische Moleküle durch Energie (Blitze).",
  },
  {
    id: "bio-q-321",
    stichwortId: "bio-9-01",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: 'Was versteht man unter der "Ursuppen-Hypothese"?',
    optionen: [
      "Die Entstehung von Ozeanen",
      "Die Ansammlung organischer Moleküle in den Ur-Ozeanen",
      "Die erste Suppe, die Menschen kochten",
      "Die Zusammensetzung der Atmosphäre",
      "Die Bildung von Gesteinen",
    ],
    korrekteAntwort: 1,
    erklärung:
      'Die Ursuppen-Hypothese (von Oparin und Haldane) besagt, dass sich in den Ur-Ozeanen organische Moleküle ansammelten, die durch chemische Reaktionen in der Atmosphäre entstanden waren. Diese "Ursuppe" bildete den Ausgangspunkt für komplexere Reaktionen, aus denen schließlich erste Protobionten und primitive Lebensformen hervorgingen.',
    strategieTipp:
      "Ursuppe = Ansammlung organischer Moleküle im Urmeer. Grundlage für die Entstehung erster Zellvorläufer (Protobionten).",
  },
  {
    id: "bio-q-322",
    stichwortId: "bio-9-01",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Was besagt die RNA-Welt-Hypothese?",
    optionen: [
      "RNA war das erste selbstreplizierende Informationsmolekül mit katalytischer Aktivität",
      "RNA entstand nach DNA",
      "RNA kann nur in Zellen existieren",
      "RNA ist stabiler als DNA",
      "RNA wurde von Außerirdischen zur Erde gebracht",
    ],
    korrekteAntwort: 0,
    erklärung:
      'Die RNA-Welt-Hypothese postuliert, dass RNA vor DNA und Proteinen als zentrales Molekül des Lebens fungierte. RNA kann sowohl genetische Information speichern als auch katalytisch wirken (Ribozyme). Dies löst das "Henne-Ei-Problem": Für DNA-Replikation braucht man Enzyme, für Enzyme braucht man DNA. RNA kann beides, weshalb sie vermutlich am Anfang stand.',
    strategieTipp:
      "RNA-Welt: RNA war zürst, weil sie Information speichern UND als Katalysator wirken kann (Ribozyme). DNA und Proteine kamen später.",
  },
  {
    id: "bio-q-323",
    stichwortId: "bio-9-01",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was sind Protobionten?",
    optionen: [
      "Die ersten Dinosaurier",
      "Zellvorläufer mit membranartigen Strukturen, aber ohne echten Stoffwechsel",
      "Moderne Bakterien",
      "Viren",
      "Pilze",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Protobionten sind hypothetische Vorläufer der ersten Zellen. Es handelt sich um abgegrenzte Systeme aus organischen Molekülen (z.B. Koazervate oder Liposomen), die eine primitive Membran besaßen und chemische Reaktionen durchführen konnten, aber noch keinen vollständigen Stoffwechsel oder Selbstreplikation hatten. Sie stellen einen Übergang zwischen unbelebter Materie und Leben dar.",
    strategieTipp:
      "Protobionten = Proto (= erste) + bios (= Leben). Noch kein echtes Leben, aber Vorstufen mit Membran und primitiven Reaktionen.",
  },
  {
    id: "bio-q-324",
    stichwortId: "bio-9-02",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was besagt die Endosymbiontentheorie nach Lynn Margulis?",
    optionen: [
      "Mitochondrien und Chloroplasten entstanden durch Endosymbiose",
      "Alle Organellen entstanden gleichzeitig",
      "Zellen verschmelzen immer zu größeren Einheiten",
      "Bakterien können nicht in Zellen leben",
      "Viren sind Endosymbionten",
    ],
    korrekteAntwort: 0,
    erklärung:
      "Die Endosymbiontentheorie erklärt die Entstehung von Mitochondrien und Chloroplasten durch die Aufnahme und dauerhafte Einbindung (Endosymbiose) von Bakterien in eine eukaryotische Wirtszelle. Ärobe Bakterien wurden zu Mitochondrien, photosynthetisch aktive Cyanobakterien zu Chloroplasten. Diese Theorie wurde maßgeblich von Lynn Margulis entwickelt.",
    strategieTipp:
      "Endosymbiose = ein Organismus lebt dauerhaft im anderen, beide profitieren. Belege: eigene DNA, Doppelmembran, eigene Ribosomen bei Mitochondrien/Chloroplasten.",
  },
  {
    id: "bio-q-325",
    stichwortId: "bio-9-02",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Welches der folgenden ist KEIN Beleg für die Endosymbiontentheorie?",
    optionen: [
      "Mitochondrien besitzen eine Doppelmembran",
      "Mitochondrien haben eigene DNA",
      "Mitochondrien haben 70S-Ribosomen wie Bakterien",
      "Mitochondrien können sich autonom teilen",
      "Mitochondrien besitzen einen Zellkern",
    ],
    korrekteAntwort: 4,
    erklärung:
      "Mitochondrien besitzen KEINEN Zellkern, dies widerspricht der Endosymbiontentheorie nicht, sondern ist mit ihr vereinbar. Alle anderen Punkte sind Belege: Die Doppelmembran entstand durch Endozytose (innere Membran vom Bakterium, äußere vom Wirt), eigene zirkuläre DNA und 70S-Ribosomen sind bakterientypisch, und die autonome Teilung ähnelt der bakteriellen Teilung.",
    strategieTipp:
      "Belege für Endosymbiose: Doppelmembran, eigene DNA, 70S-Ribosomen, autonome Teilung, DNA-Sequenzähnlichkeit zu Bakterien. KEIN Zellkern (wie Bakterien).",
  },
  {
    id: "bio-q-326",
    stichwortId: "bio-9-02",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext:
      "Welche Organellen sollen laut Endosymbiontentheorie aus Cyanobakterien entstanden sein?",
    optionen: [
      "Mitochondrien",
      "Chloroplasten",
      "Lysosomen",
      "Golgi-Apparat",
      "Endoplasmatisches Retikulum",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Chloroplasten sollen aus endosymbiotischen Cyanobakterien (photosynthetischen Bakterien) entstanden sein. Mitochondrien stammen von äroben (sauerstoffverbrauchenden) Bakterien ab. Die anderen Organellen (Lysosomen, Golgi, ER) entstanden vermutlich durch Einstülpung und Abschnürung der Zellmembran (Endomembransystem).",
    strategieTipp:
      "Chloroplasten ← Cyanobakterien (Photosynthese). Mitochondrien ← ärobe Bakterien (Zellatmung). Beide durch Endosymbiose.",
  },
  {
    id: "bio-q-327",
    stichwortId: "bio-9-02",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Warum besitzen Mitochondrien und Chloroplasten eine Doppelmembran?",
    optionen: [
      "Sie teilen sich häufiger als andere Organellen",
      "Die innere Membran stammt vom Bakterium, die äußere vom Wirt",
      "Sie sind größer als andere Organellen",
      "Sie produzieren mehr Proteine",
      "Es ist ein Zufall der Evolution",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Die Doppelmembran entstand durch den Endosymbiose-Prozess: Die innere Membran ist die ursprüngliche Bakterienmembran des Endosymbionten, die äußere Membran entstand bei der Aufnahme durch Endozytose (Einstülpung der Wirtszellmembran). Diese Doppelmembran ist ein starker Beleg für die Endosymbiontentheorie.",
    strategieTipp:
      'Doppelmembran = "Verpackung" bei der Aufnahme. Innere Membran = vom Bakterium, äußere = von der Wirtszelle bei Endozytose.',
  },
  {
    id: "bio-q-328",
    stichwortId: "bio-9-03",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was untersucht die Phylogenetik?",
    optionen: [
      "Die Entwicklung von Krankheiten",
      "Die Stammesgeschichte und Verwandtschaftsbeziehungen von Lebewesen",
      "Die Funktion von Proteinen",
      "Die Anatomie von Pflanzen",
      "Die Photosynthese",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Die Phylogenetik erforscht die evolutionäre Abstammung und Verwandtschaft von Organismen. Sie erstellt Stammbäume (Phylogenien), die zeigen, wie Arten im Laufe der Evolution auseinander hervorgingen. Dabei werden morphologische, molekulare und fossile Daten verwendet.",
    strategieTipp:
      "Phylogenetik = Stammbaum-Wissenschaft. Phylon (griech.) = Stamm, Genos = Ursprung. Rekonstruktion evolutionärer Verwandtschaft.",
  },
  {
    id: "bio-q-329",
    stichwortId: "bio-9-03",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was ist der Unterschied zwischen Homologie und Analogie?",
    optionen: [
      "Homologie: gleiche Funktion, verschiedener Bauplan; Analogie: gleicher Bauplan, verschiedene Funktion",
      "Homologie: gemeinsamer Ursprung; Analogie: konvergente Entwicklung ähnlicher Funktionen",
      "Es gibt keinen Unterschied",
      "Homologie gilt nur für Pflanzen",
      "Analogie ist ein veralteter Begriff",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Homologe Organe haben einen gemeinsamen evolutionären Ursprung (z.B. Vordergliedmaßen von Säugetieren: Arm, Flügel, Flosse – unterschiedliche Funktion, gleicher Grundbauplan). Analoge Organe haben ähnliche Funktionen durch konvergente Evolution entwickelt, aber verschiedenen Ursprung (z.B. Vogelflügel und Insektenflügel).",
    strategieTipp:
      "Homolog = gleicher Ursprung (Divergenz). Analog = gleiche Funktion, verschiedener Ursprung (Konvergenz). Beispiel: Fledermaus- und Vogelflügel = homolog zu anderen Säuger-/Vogel-Gliedmaßen, aber analog züinander in der Flugfunktion.",
  },
  {
    id: "bio-q-330",
    stichwortId: "bio-9-03",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Was versteht man unter konvergenter Evolution?",
    optionen: [
      "Die Entwicklung verschiedener Arten aus einem gemeinsamen Vorfahren",
      "Die unabhängige Entwicklung ähnlicher Merkmale bei nicht nah verwandten Arten",
      "Die Rückbildung von Organen",
      "Die Kreuzung verschiedener Arten",
      "Die parallele Evolution identischer Gene",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Konvergente Evolution beschreibt die unabhängige Entwicklung ähnlicher Merkmale bei nicht nah verwandten Arten als Anpassung an ähnliche Umweltbedingungen. Beispiele: Stromlinienform bei Haien (Fische), Ichthyosauriern (Reptilien) und Delfinen (Säuger) oder Flügel bei Vögeln, Fledermäusen und Insekten.",
    strategieTipp:
      "Konvergenz = Zusammenlaufen. Verschiedene Linien entwickeln ähnliche Lösungen für ähnliche Probleme. Gegenteil: Divergenz (Auseinanderlaufen).",
  },
  {
    id: "bio-q-331",
    stichwortId: "bio-9-03",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Methode wird in der molekularen Phylogenetik hauptsächlich verwendet?",
    optionen: [
      "Vergleich von Knochenstrukturen",
      "Vergleich von DNA- oder Proteinsequenzen",
      "Beobachtung des Verhaltens",
      "Messung der Körpergröße",
      "Zählung der Chromosomen",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Die molekulare Phylogenetik vergleicht DNA-Sequenzen (z.B. ribosomale RNA, mitochondriale DNA) oder Proteinsequenzen verschiedener Arten. Je ähnlicher die Sequenzen, desto näher verwandt sind die Arten. Die Anzahl der Unterschiede kann auch zur Schätzung des Zeitpunkts der Trennung vom gemeinsamen Vorfahren verwendet werden (molekulare Uhr).",
    strategieTipp:
      "Molekulare Phylogenetik = DNA/Protein-Vergleich. Mehr Ähnlichkeit = nähere Verwandtschaft. Ergänzt morphologische Methoden.",
  },
  {
    id: "bio-q-332",
    stichwortId: "bio-9-04",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Wer entwickelte die Theorie der natürlichen Selektion?",
    optionen: [
      "Gregor Mendel",
      "Jean-Baptiste Lamarck",
      "Charles Darwin",
      "Lynn Margulis",
      "Louis Pasteur",
    ],
    korrekteAntwort: 2,
    erklärung:
      'Charles Darwin entwickelte 1859 in seinem Werk "On the Origin of Species" die Theorie der Evolution durch natürliche Selektion. Individün mit vorteilhaften Merkmalen haben bessere Überlebens- und Fortpflanzungschancen, sodass sich diese Merkmale in der Population durchsetzen. Alfred Russel Wallace entwickelte unabhängig eine ähnliche Theorie.',
    strategieTipp:
      'Darwin = natürliche Selektion, "Survival of the Fittest" (Begriff von Herbert Spencer). Lamarck hatte eine frühere, heute widerlegte Theorie (Vererbung erworbener Eigenschaften).',
  },
  {
    id: "bio-q-333",
    stichwortId: "bio-9-04",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was ist der Hauptunterschied zwischen Darwins und Lamarcks Evolutionstheorie?",
    optionen: [
      "Darwin glaubte an Schöpfung, Lamarck an Evolution",
      "Darwin: Selektion vorhandener Variation; Lamarck: Vererbung erworbener Eigenschaften",
      "Darwin studierte Pflanzen, Lamarck Tiere",
      "Beide Theorien sind identisch",
      "Lamarck entwickelte die Genetik",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Lamarck postulierte, dass durch Gebrauch oder Nichtgebrauch erworbene Eigenschaften an die Nachkommen vererbt werden (z.B. Giraffenhals durch Strecken). Darwin erkannte, dass bereits vorhandene Variation durch natürliche Selektion gefiltert wird – Individün mit vorteilhaften zufälligen Variationen überleben besser. Lamarcks Mechanismus ist widerlegt.",
    strategieTipp:
      'Lamarck: "Gebrauch vererbt sich" (falsch). Darwin: "Selektion filtert Variation" (richtig). Beispiel Giraffe: Nicht Strecken führte zu langem Hals, sondern Individün mit längerem Hals überlebten besser.',
  },
  {
    id: "bio-q-334",
    stichwortId: "bio-9-04",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Was ist die Synthetische Evolutionstheorie?",
    optionen: [
      "Eine Theorie über künstliche Organismen",
      "Die Verbindung von Darwins Selektionstheorie mit der Genetik",
      "Eine veraltete Theorie aus dem 18. Jahrhundert",
      "Die Theorie, dass Evolution nicht stattfindet",
      "Die Theorie der Panspermie",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Die Synthetische Evolutionstheorie (entwickelt in den 1930er-1940er Jahren) vereint Darwins Selektionstheorie mit den Erkenntnissen der Mendelschen Genetik und der Populationsgenetik. Sie erklärt, dass Mutationen neue genetische Variation erzeugen, die dann durch Selektion, Gendrift und andere Faktoren in Populationen wirkt. Sie bildet die Grundlage der modernen Evolutionsbiologie.",
    strategieTipp:
      'Synthetische Theorie = Darwin + Mendel + Populationsgenetik. "Synthese" verschiedener Teilgebiete. Auch "Neodarwinismus" genannt.',
  },
  {
    id: "bio-q-335",
    stichwortId: "bio-9-04",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Beobachtung führte Darwin zu seiner Evolutionstheorie?",
    optionen: [
      "Die Entdeckung der DNA",
      "Die Variation der Finken auf den Galápagos-Inseln",
      "Die Erfindung des Mikroskops",
      "Die Entdeckung von Fossilien in Österreich",
      "Die Züchtung von Bakterien",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Während seiner Reise mit der HMS Beagle (1831-1836) beobachtete Darwin auf den Galápagos-Inseln, dass Finken auf verschiedenen Inseln unterschiedliche Schnabelformen aufwiesen, angepasst an verschiedene Nahrungsquellen. Dies und andere Beobachtungen (z.B. Fossilien in Südamerika) führten ihn zur Erkenntnis, dass Arten sich verändern und an ihre Umwelt anpassen.",
    strategieTipp:
      "Darwin-Finken = Paradebeispiel für adaptive Radiation (Aufspaltung einer Art in viele spezialisierte Arten). Schnabelform ~ Nahrung.",
  },
  {
    id: "bio-q-336",
    stichwortId: "bio-9-04",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: 'Was bedeutet "Survival of the Fittest" im evolutionären Kontext?',
    optionen: [
      "Überleben der Stärksten",
      "Überleben der am besten Angepassten",
      "Überleben der Größten",
      "Überleben der Intelligentesten",
      "Überleben der Schnellsten",
    ],
    korrekteAntwort: 1,
    erklärung:
      '"Fittest" bedeutet nicht "der Stärkste" oder "Fitteste" im sportlichen Sinn, sondern "der am besten Angepasste" (engl. fit = passend). Es überleben und vermehren sich diejenigen Individün am erfolgreichsten, deren Merkmale am besten zu den aktüllen Umweltbedingungen passen. "Fitness" in der Evolutionsbiologie bedeutet Fortpflanzungserfolg.',
    strategieTipp:
      "Fittest = am besten angepasst, nicht am stärksten. Evolutionäre Fitness = Reproduktionserfolg (Anzahl überlebender Nachkommen).",
  },
  {
    id: "bio-q-337",
    stichwortId: "bio-9-05",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Was definiert der biologische Artbegriff?",
    optionen: [
      "Ähnliches Aussehen",
      "Fortpflanzungsfähigkeit und fruchtbare Nachkommen",
      "Gleicher Lebensraum",
      "Gleiche Größe",
      "Gleiches Verhalten",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Nach dem biologischen Artbegriff (Ernst Mayr) gehören Individün zur selben Art, wenn sie sich untereinander fortpflanzen können und fruchtbare Nachkommen zeugen. Eine reproduktive Isolation von anderen Gruppen liegt vor. Beispiel: Pferd und Esel können sich paaren (Maultier), aber Maultiere sind unfruchtbar → verschiedene Arten.",
    strategieTipp:
      "Biologischer Artbegriff: Fortpflanzungsgemeinschaft mit fruchtbaren Nachkommen. Problem: nicht anwendbar auf asexülle Organismen oder Fossilien.",
  },
  {
    id: "bio-q-338",
    stichwortId: "bio-9-05",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was ist allopatrische Artbildung?",
    optionen: [
      "Artbildung durch geografische Trennung",
      "Artbildung im selben Gebiet",
      "Artbildung durch Polyploidie",
      "Artbildung durch Klimawandel",
      "Artbildung durch Krankheiten",
    ],
    korrekteAntwort: 0,
    erklärung:
      "Allopatrische Artbildung (allo = anders, patria = Vaterland) erfolgt durch geografische Isolation. Populationen werden räumlich getrennt (z.B. durch Gebirgsbildung, Inseln), entwickeln sich unabhängig und werden schließlich reproduktiv inkompatibel. Dies ist der häufigste Artbildungsmechanismus. Beispiel: Darwin-Finken auf verschiedenen Galápagos-Inseln.",
    strategieTipp:
      "Allopatrisch = räumlich getrennt (allo = anders, Ort). Sympatrisch = im selben Gebiet (sym = zusammen). Allopatrisch ist häufiger und besser verstanden.",
  },
  {
    id: "bio-q-339",
    stichwortId: "bio-9-05",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Was ist sympatrische Artbildung?",
    optionen: [
      "Artbildung durch Migration",
      "Artbildung ohne geografische Trennung im selben Lebensraum",
      "Artbildung durch Aussterben",
      "Artbildung durch Klimawandel",
      "Artbildung nur bei Bakterien",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Sympatrische Artbildung erfolgt ohne räumliche Trennung. Mechanismen können Polyploidie (häufig bei Pflanzen), sexülle Selektion oder ökologische Spezialisierung sein. Beispiel: Buntbarsche in afrikanischen Seen entwickelten durch unterschiedliche Nahrungspräferenzen reproduktive Isolation, obwohl sie im selben See leben. Sympatrische Artbildung ist seltener und umstrittener als allopatrische.",
    strategieTipp:
      "Sympatrisch = ohne Trennung (sym = zusammen). Schwieriger, weil Genfluss weiterhin möglich. Oft durch Polyploidie (Pflanzen) oder starke Selektion.",
  },
  {
    id: "bio-q-340",
    stichwortId: "bio-9-05",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was ist reproduktive Isolation?",
    optionen: [
      "Das Fehlen von Fortpflanzung",
      "Mechanismen, die Genfluss zwischen Populationen verhindern",
      "Die Trennung von Männchen und Weibchen",
      "Das Leben in verschiedenen Jahreszeiten",
      "Die Unfähigkeit, sich zu bewegen",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Reproduktive Isolation bezeichnet Mechanismen, die den Genfluss zwischen Populationen verhindern. Sie kann präzygotisch sein (vor Befruchtung: unterschiedliche Paarungszeiten, Verhaltensunterschiede, anatomische Inkompatibilität) oder postzygotisch (nach Befruchtung: Hybride sind nicht lebensfähig oder steril). Reproduktive Isolation ist entscheidend für die Artbildung.",
    strategieTipp:
      "Reproduktive Isolation = keine erfolgreiche Fortpflanzung zwischen Gruppen. Präzygotisch (vor Befruchtung) oder postzygotisch (nach Befruchtung).",
  },
  {
    id: "bio-q-341",
    stichwortId: "bio-9-06",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Welcher Evolutionsfaktor erzeugt neue Allele?",
    optionen: ["Selektion", "Mutation", "Gendrift", "Genfluss", "Rekombination"],
    korrekteAntwort: 1,
    erklärung:
      "Mutation ist der einzige Evolutionsfaktor, der völlig neue Allele (Genvarianten) erzeugt. Rekombination verteilt vorhandene Allele neu, Selektion filtert sie, Gendrift verändert ihre Häufigkeiten zufällig, Genfluss bringt Allele von anderen Populationen. Ohne Mutation gäbe es keine genetische Variation für die Evolution.",
    strategieTipp:
      "Mutation = Quelle neuer Variation. Alle anderen Faktoren arbeiten mit vorhandener Variation. Mutation ist zufällig, nicht gerichtet.",
  },
  {
    id: "bio-q-342",
    stichwortId: "bio-9-06",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was beschreibt die Gendrift?",
    optionen: [
      "Gerichtete Veränderung durch Selektion",
      "Zufällige Veränderung von Allelfrequenzen, besonders in kleinen Populationen",
      "Migration von Individün",
      "Entstehung neuer Mutationen",
      "Kreuzung verschiedener Arten",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Gendrift bezeichnet zufällige Schwankungen von Allelfrequenzen, die besonders in kleinen Populationen stark wirken. Sie ist nicht adaptiv – auch nachteilige Allele können sich zufällig durchsetzen, vorteilhafte verloren gehen. Beispiele: Gründereffekt (kleine Gründerpopulation auf Insel) und Flaschenhalseffekt (Populationsreduktion durch Katastrophe).",
    strategieTipp:
      "Gendrift = Zufall, nicht Anpassung. Stark in kleinen Populationen. Kann zu Fixierung neutraler oder sogar leicht nachteiliger Allele führen.",
  },
  {
    id: "bio-q-343",
    stichwortId: "bio-9-06",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: "Was besagt das Hardy-Weinberg-Gleichgewicht?",
    optionen: [
      "Allele verschwinden immer aus Populationen",
      "Allelfrequenzen bleiben ohne Evolutionsfaktoren konstant",
      "Mutationen treten immer auf",
      "Selektion ist immer wirksam",
      "Populationen werden immer größer",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Das Hardy-Weinberg-Gleichgewicht besagt, dass Allelfrequenzen in einer Population von Generation zu Generation konstant bleiben, wenn keine Evolutionsfaktoren (Mutation, Selektion, Gendrift, Genfluss, nicht-zufällige Paarung) wirken. Es dient als Nullmodell: Abweichungen zeigen, dass Evolution stattfindet. Bedingungen: große Population, Zufallspaarung, keine Selektion/Mutation/Migration.",
    strategieTipp:
      "Hardy-Weinberg = Gleichgewicht ohne Evolution. p² + 2pq + q² = 1. Abweichungen zeigen, welche Evolutionsfaktoren wirken.",
  },
  {
    id: "bio-q-344",
    stichwortId: "bio-9-06",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Was ist Genfluss?",
    optionen: [
      "Die Bewegung von Genen innerhalb eines Chromosoms",
      "Die Wanderung von Individün und Austausch von Genen zwischen Populationen",
      "Die Replikation von DNA",
      "Die Transkription von RNA",
      "Die Translation von Proteinen",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Genfluss (oder Genenwanderung) bezeichnet den Transfer von Allelen zwischen Populationen durch Migration von Individün. Er erhöht die genetische Variation innerhalb von Populationen und reduziert Unterschiede zwischen Populationen. Genfluss kann adaptiv sein (neue vorteilhafte Allele) oder Anpassung behindern (Einbringen maladaptiver Allele).",
    strategieTipp:
      "Genfluss = Migration bringt neue Allele. Homogenisiert Populationen (macht sie genetisch ähnlicher). Gegenteil von Isolation.",
  },
  {
    id: "bio-q-345",
    stichwortId: "bio-9-06",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Form der Selektion verschiebt das Merkmalsspektrum in eine Richtung?",
    optionen: [
      "Stabilisierende Selektion",
      "Gerichtete (direktionale) Selektion",
      "Disruptive Selektion",
      "Sexülle Selektion",
      "Künstliche Selektion",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Gerichtete (direktionale) Selektion bevorzugt ein Extrem des Merkmalsspektrums und verschiebt den Mittelwert. Beispiel: Industriemelanismus bei Birkenspannern (dunkle Form wurde in verrußten Wäldern bevorzugt). Im Gegensatz: Stabilisierende Selektion bevorzugt den Mittelwert, disruptive Selektion bevorzugt beide Extreme.",
    strategieTipp:
      "Gerichtete Selektion = Verschiebung in eine Richtung. Stabilisierende = Mittelwert bevorzugt. Disruptive = Extreme bevorzugt.",
  },
  {
    id: "bio-q-346",
    stichwortId: "bio-9-07",
    fach: "biologie" as const,
    schwierigkeit: "leicht" as const,
    fragetext: "Zu welcher Gruppe gehören die Menschen?",
    optionen: [
      "Reptilien",
      "Hominiden (Menschenartige)",
      "Prokaryoten",
      "Amphibien",
      "Cephalopoden",
    ],
    korrekteAntwort: 1,
    erklärung:
      "Menschen (Homo sapiens) gehören zur Familie der Hominidae (Menschenartige), zu der auch Schimpansen, Gorillas, Orang-Utans und ausgestorbene Vorfahren wie Australopithecus und Homo erectus gehören. Innerhalb der Hominiden gehören Menschen zur Gattung Homo und sind die einzige heute lebende Art dieser Gattung.",
    strategieTipp:
      "Hominiden = Menschenartige (große Menschenaffen + Mensch). Hominini = Menschen und direkte Vorfahren (Mensch-Linie nach Trennung von Schimpansen).",
  },
  {
    id: "bio-q-347",
    stichwortId: "bio-9-07",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext:
      "Welches Merkmal entwickelte sich bei Australopithecus als erstes der typisch menschlichen Merkmale?",
    optionen: [
      "Großes Gehirn",
      "Werkzeuggebrauch",
      "Aufrechter Gang (Bipedie)",
      "Sprache",
      "Feuerbeherrschung",
    ],
    korrekteAntwort: 2,
    erklärung:
      'Der aufrechte Gang (Bipedie) entwickelte sich bereits bei Australopithecus vor etwa 4 Millionen Jahren, deutlich vor der Gehirnvergrößerung und dem komplexen Werkzeuggebrauch. Belege sind das Skelett von "Lucy" (Australopithecus afarensis) und fossile Fußspuren in Lätoli. Die Gehirngröße war noch schimpansenähnlich (ca. 400-500 cm³).',
    strategieTipp:
      "Merkmalsreihenfolge: 1. Aufrechter Gang (Australopithecus), 2. Werkzeuge (Homo habilis), 3. Großes Gehirn (Homo erectus/sapiens).",
  },
  {
    id: "bio-q-348",
    stichwortId: "bio-9-07",
    fach: "biologie" as const,
    schwierigkeit: "schwer" as const,
    fragetext: 'Was besagt die "Out-of-Africa"-Hypothese?',
    optionen: [
      "Alle Menschenarten entstanden in Afrika und blieben dort",
      "Homo sapiens entwickelte sich in Afrika und breitete sich von dort aus",
      "Menschen entwickelten sich unabhängig auf mehreren Kontinenten",
      "Afrika wurde erst spät von Menschen besiedelt",
      "Menschen stammen nicht von afrikanischen Vorfahren ab",
    ],
    korrekteAntwort: 1,
    erklärung:
      'Die "Out-of-Africa"-Hypothese (unterstützt durch genetische und paläontologische Daten) besagt, dass Homo sapiens sich vor etwa 200.000-300.000 Jahren in Afrika entwickelte und vor ca. 60.000-70.000 Jahren begann, sich über die ganze Welt auszubreiten. Dies erklärt, warum die größte genetische Vielfalt in Afrika zu finden ist.',
    strategieTipp:
      "Out-of-Africa: Homo sapiens entstand in Afrika, breitete sich dann aus. Genetische Belege: afrikanische Populationen sind genetisch am vielfältigsten.",
  },
  {
    id: "bio-q-349",
    stichwortId: "bio-9-07",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Homo-Art gilt als erste, die Steinwerkzeuge herstellte?",
    optionen: [
      "Homo sapiens",
      "Homo habilis",
      "Homo erectus",
      "Homo neanderthalensis",
      "Australopithecus",
    ],
    korrekteAntwort: 1,
    erklärung:
      'Homo habilis ("geschickter Mensch") lebte vor etwa 2,4-1,4 Millionen Jahren und gilt als erste Homo-Art, die einfache Steinwerkzeuge (Oldowan-Kultur) herstellte. Das Gehirnvolumen betrug ca. 600-800 cm³. Neuere Funde zeigen aber, dass möglicherweise auch späte Australopithecinen einfache Werkzeuge nutzten.',
    strategieTipp:
      'Homo habilis = "handwerklicher Mensch", erste Werkzeuge. Homo erectus = erste weltweite Ausbreitung, Feuer. Homo sapiens = moderne Menschen.',
  },
  {
    id: "bio-q-350",
    stichwortId: "bio-9-07",
    fach: "biologie" as const,
    schwierigkeit: "mittel" as const,
    fragetext: "Welche Homo-Art breitete sich als erste außerhalb Afrikas aus?",
    optionen: [
      "Homo sapiens",
      "Homo habilis",
      "Homo erectus",
      "Homo heidelbergensis",
      "Australopithecus afarensis",
    ],
    korrekteAntwort: 2,
    erklärung:
      'Homo erectus ("aufrechter Mensch") war die erste Homo-Art, die Afrika vor etwa 1,8-1,9 Millionen Jahren verließ und sich bis nach Asien (Java-Mensch, Peking-Mensch) und möglicherweise Europa ausbreitete. Diese Art hatte ein Gehirnvolumen von 800-1200 cm³, beherrschte das Feuer und fertigte Faustkeile (Acheuléen-Kultur).',
    strategieTipp:
      "Homo erectus = erste Weltreisende, verließen Afrika vor ~2 Mio Jahren. Lebten sehr lange (bis vor ~100.000 Jahren). Wichtig: Feuerbeherrschung.",
  },
];
