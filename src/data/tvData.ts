// === TV: Textverständnis ===

export const tvStrategyGuide = {
  title: "Strategie-Guide: Textverständnis",
  sections: [
    {
      heading: "Aufgabenformat",
      content:
        "Du erhälst einen längeren Text (wissenschaftlich oder allgemeinmedizinisch) und musst zu verschiedenen Aussagen entscheiden, ob sie aus dem Text ableitbar sind oder nicht. Wichtig: Es geht NICHT darum, ob die Aussage generell wahr ist, sondern ob sie aus dem GEGEBENEN TEXT hervorgeht.",
    },
    {
      heading: "Strategie: Dreistufiges Lesen",
      content: `1. ÜBERFLIEGEN (1-2 Min): Lies den Text einmal schnell durch. Verstehe das Hauptthema und die Grundstruktur. Markiere gedanklich die Absätze.

2. AUSSAGEN LESEN: Lies alle Aussagen durch, BEVOR du den Text nochmal liest. So weißt du, wonach du suchen musst.

3. GEZIELTES NACHLESEN: Gehe jede Aussage durch und suche die relevante Textstelle. Die Aussage ist nur ableitbar, wenn der Text sie DIREKT stützt oder sie logisch zwingend aus dem Text folgt.`,
    },
    {
      heading: "Ableitbar vs. Nicht ableitbar",
      content: `ABLEITBAR wenn:
- Die Information steht wörtlich oder sinngemäß im Text
- Die Aussage folgt logisch zwingend aus den Textinformationen
- Die Aussage ist eine korrekte Zusammenfassung eines Textabschnitts

NICHT ABLEITBAR wenn:
- Die Information steht nicht im Text (auch wenn sie allgemein wahr ist!)
- Die Aussage geht über das im Text Gesagte hinaus (Überinterpretation)
- Die Aussage widerspricht dem Text
- Die Aussage mischt Textinformation mit externem Wissen
- Der Text trifft keine Aussage zu diesem Thema`,
    },
    {
      heading: "Häufige Fallen",
      content: `- Absolute Aussagen ("immer", "nie", "alle") sind oft nicht ableitbar, da der Text meist differenzierter ist
- Vorsicht bei Kausalität: Nur weil zwei Dinge im Text erwähnt werden, heißt das nicht, dass das eine das andere verursacht
- Zahlen und Statistiken genau prüfen
- Eigenes Vorwissen IGNORIEREN - nur der Text zählt!
- Zeitdruck: Pro Aussage max. 1-2 Minuten, dann Entscheidung treffen`,
    },
  ],
};

export interface TVText {
  id: string;
  title: string;
  content: string;
  statements: {
    id: string;
    text: string;
    isDerivable: boolean;
    explanation: string;
  }[];
}

export const tvTexts: TVText[] = [
  {
    id: "tv-1",
    title: "Antibiotikaresistenz",
    content: `Antibiotikaresistenz ist eines der größten Gesundheitsprobleme unserer Zeit. Die Weltgesundheitsorganisation (WHO) hat sie als eine der zehn größten globalen Bedrohungen für die öffentliche Gesundheit eingestuft. Jährlich sterben weltweit schätzungsweise 700.000 Menschen an Infektionen mit resistenten Keimen. Prognosen gehen davon aus, dass diese Zahl bis 2050 auf 10 Millionen pro Jahr ansteigen könnte, wenn keine Gegenmaßnahmen ergriffen werden.

Die Hauptursache für die Entstehung von Resistenzen ist der übermäßige und unsachgemäße Einsatz von Antibiotika - sowohl in der Humanmedizin als auch in der Tierhaltung. In vielen Ländern sind Antibiotika ohne Rezept erhältlich, was zu Selbstmedikation und falscher Dosierung führt. In der Landwirtschaft werden Antibiotika häufig nicht nur zur Behandlung kranker Tiere eingesetzt, sondern auch prophylaktisch zur Wachstumsförderung.

Bakterien entwickeln Resistenzen durch verschiedene Mechanismen: Enzymatische Inaktivierung des Antibiotikums, Veränderung der Zielstruktur, aktives Herauspumpen des Wirkstoffs (Effluxpumpen) oder verminderte Aufnahme. Diese Resistenzgene können durch horizontalen Gentransfer auch auf andere Bakterienarten übertragen werden, was die Ausbreitung beschleunigt.

Besonders problematisch sind multiresistente Erreger wie MRSA (Methicillin-resistenter Staphylococcus aureus) und multiresistente gramnegative Bakterien. In Krankenhäusern verursachen sie schwer behandelbare nosokomiale Infektionen. Neue Antibiotika werden kaum noch entwickelt, da die Forschung für Pharmaunternehmen wirtschaftlich wenig attraktiv ist.`,
    statements: [
      {
        id: "tv-1-s1",
        text: "Die WHO betrachtet Antibiotikaresistenz als eine der zehn größten globalen Gesundheitsbedrohungen.",
        isDerivable: true,
        explanation: "Steht direkt im ersten Absatz des Textes.",
      },
      {
        id: "tv-1-s2",
        text: "Bis 2050 werden definitiv 10 Millionen Menschen jährlich an resistenten Keimen sterben.",
        isDerivable: false,
        explanation:
          "Der Text spricht von 'Prognosen' und 'könnte', nicht von einer definitiven Aussage. Die Einschränkung 'wenn keine Gegenmaßnahmen ergriffen werden' fehlt ebenfalls.",
      },
      {
        id: "tv-1-s3",
        text: "Antibiotika werden in der Tierhaltung teilweise zur Wachstumsförderung eingesetzt.",
        isDerivable: true,
        explanation: "Im zweiten Absatz wird explizit erwähnt, dass Antibiotika 'prophylaktisch zur Wachstumsförderung' eingesetzt werden.",
      },
      {
        id: "tv-1-s4",
        text: "MRSA ist ein multiresistentes gramnegatives Bakterium.",
        isDerivable: false,
        explanation:
          "Der Text nennt MRSA und multiresistente gramnegative Bakterien als separate Kategorien. MRSA (Staphylococcus aureus) ist tatsächlich grampositiv, und der Text ordnet es nicht als gramnegativ ein.",
      },
      {
        id: "tv-1-s5",
        text: "Ein Mechanismus der Antibiotikaresistenz ist das aktive Herauspumpen des Wirkstoffs aus der Bakterienzelle.",
        isDerivable: true,
        explanation: "Im dritten Absatz werden Effluxpumpen als einer der Resistenzmechanismen genannt.",
      },
      {
        id: "tv-1-s6",
        text: "Pharmaunternehmen investieren zunehmend in die Entwicklung neuer Antibiotika.",
        isDerivable: false,
        explanation:
          "Der Text sagt das Gegenteil: 'Neue Antibiotika werden kaum noch entwickelt, da die Forschung für Pharmaunternehmen wirtschaftlich wenig attraktiv ist.'",
      },
    ],
  },
  {
    id: "tv-2",
    title: "Schlaf und Gesundheit",
    content: `Schlaf ist ein fundamentaler biologischer Prozess, der etwa ein Drittel unseres Lebens einnimmt. Während des Schlafs durchläuft das Gehirn verschiedene Schlafphasen in Zyklen von etwa 90 Minuten. Man unterscheidet den Non-REM-Schlaf (Stadien N1-N3) und den REM-Schlaf (Rapid Eye Movement), in dem die meisten Träume stattfinden.

Besonders der Tiefschlaf (N3) ist für die körperliche Erholung wichtig. In dieser Phase werden Wachstumshormone ausgeschüttet, das Immunsystem gestärkt und Gewebe repariert. Der REM-Schlaf hingegen spielt eine zentrale Rolle bei der Gedächtniskonsolidierung und der emotionalen Verarbeitung. Studien haben gezeigt, dass Probanden, die nach dem Lernen ausreichend REM-Schlaf erhielten, bei Gedächtnistests deutlich besser abschnitten.

Chronischer Schlafmangel (weniger als 6 Stunden pro Nacht über längere Zeit) hat weitreichende gesundheitliche Folgen. Er erhöht das Risiko für Herz-Kreislauf-Erkrankungen, Diabetes Typ 2, Adipositas und Depressionen. Auch die kognitive Leistungsfähigkeit leidet: Reaktionszeit, Aufmerksamkeit und Entscheidungsfähigkeit verschlechtern sich messbar. Nach 17 Stunden Wachsein entspricht die kognitive Beeinträchtigung etwa der bei 0,5 Promille Blutalkohol.

Die empfohlene Schlafdauer für Erwachsene beträgt laut der National Sleep Foundation 7-9 Stunden pro Nacht. Interessanterweise ist nicht nur zu wenig, sondern auch zu viel Schlaf (regelmäßig mehr als 10 Stunden) mit erhöhter Mortalität assoziiert, wobei hier die Kausalität nicht abschließend geklärt ist.`,
    statements: [
      {
        id: "tv-2-s1",
        text: "Ein Schlafzyklus dauert ungefähr 90 Minuten.",
        isDerivable: true,
        explanation: "Steht direkt im ersten Absatz.",
      },
      {
        id: "tv-2-s2",
        text: "Wachstumshormone werden hauptsächlich während des REM-Schlafs ausgeschüttet.",
        isDerivable: false,
        explanation: "Der Text sagt, dass Wachstumshormone im Tiefschlaf (N3) ausgeschüttet werden, NICHT im REM-Schlaf.",
      },
      {
        id: "tv-2-s3",
        text: "17 Stunden ohne Schlaf beeinträchtigt die Kognition ähnlich wie 0,5 Promille Blutalkohol.",
        isDerivable: true,
        explanation: "Steht direkt im dritten Absatz.",
      },
      {
        id: "tv-2-s4",
        text: "Regelmäßig mehr als 10 Stunden Schlaf verursacht eine erhöhte Sterblichkeit.",
        isDerivable: false,
        explanation:
          "Der Text sagt, es ist 'assoziiert' mit erhöhter Mortalität, und die 'Kausalität ist nicht abschließend geklärt'. 'Verursacht' würde Kausalität implizieren.",
      },
      {
        id: "tv-2-s5",
        text: "REM-Schlaf ist wichtig für die Gedächtniskonsolidierung.",
        isDerivable: true,
        explanation: "Steht direkt im zweiten Absatz.",
      },
      {
        id: "tv-2-s6",
        text: "Die National Sleep Foundation empfiehlt für Erwachsene 7-9 Stunden Schlaf pro Nacht.",
        isDerivable: true,
        explanation: "Steht direkt im vierten Absatz.",
      },
    ],
  },
  {
    id: "tv-3",
    title: "Impfungen und Herdenimmunität",
    content: `Impfungen gehören zu den wirksamsten Maßnahmen der präventiven Medizin. Sie funktionieren, indem dem Körper abgeschwächte oder inaktivierte Erreger beziehungsweise Teile davon präsentiert werden. Das Immunsystem bildet daraufhin spezifische Antikörper und Gedächtniszellen, die bei einem späteren Kontakt mit dem echten Erreger eine schnelle und effektive Immunantwort ermöglichen. Moderne mRNA-Impfstoffe nutzen einen anderen Ansatz: Sie liefern die genetische Bauanleitung für ein Erregerprotein, das der Körper dann selbst herstellt und gegen das die Immunreaktion gerichtet wird.

Ein zentrales Konzept der Impfmedizin ist die Herdenimmunität. Wenn ein ausreichend großer Anteil der Bevölkerung immun ist, kann sich ein Erreger nicht mehr effektiv ausbreiten, wodurch auch nicht-immune Personen indirekt geschützt werden. Die Schwelle für Herdenimmunität variiert je nach Erreger und hängt von der Basisreproduktionszahl (R0) ab. Für Masern, mit einem R0 von 12-18, liegt die nötige Durchimpfungsrate bei etwa 95 Prozent. Für Polio liegt sie bei etwa 80-85 Prozent.

Der größte Erfolg der Impfmedizin ist die Ausrottung der Pocken, die 1980 von der WHO offiziell erklärt wurde. Es ist die einzige Infektionskrankheit des Menschen, die durch Impfung vollständig eliminiert werden konnte. Die Polio-Eradikation steht kurz vor dem Abschluss: Seit 2020 gilt der afrikanische Kontinent als frei von wildem Poliovirus, und nur in wenigen Ländern treten noch vereinzelte Fälle auf.

Die Debatte um eine allgemeine Impfpflicht ist gesellschaftlich kontrovers. Befürworter argumentieren mit dem Schutz vulnerabler Gruppen, die selbst nicht geimpft werden können, etwa Säuglinge oder immunsupprimierte Patienten. Kritiker sehen die körperliche Selbstbestimmung als hohes Gut und warnen vor staatlichen Eingriffen. In Deutschland besteht seit 2020 eine Masern-Impfpflicht für Kinder in Gemeinschaftseinrichtungen und bestimmtes medizinisches Personal.`,
    statements: [
      {
        id: "tv-3-s1",
        text: "mRNA-Impfstoffe enthalten abgeschwächte Erreger, die eine Immunreaktion auslösen.",
        isDerivable: false,
        explanation:
          "Der Text beschreibt mRNA-Impfstoffe als einen 'anderen Ansatz': Sie liefern die genetische Bauanleitung für ein Erregerprotein. Abgeschwächte Erreger sind der klassische Ansatz, nicht der mRNA-Ansatz.",
      },
      {
        id: "tv-3-s2",
        text: "Für Herdenimmunität gegen Masern müssen etwa 95 Prozent der Bevölkerung geimpft sein.",
        isDerivable: true,
        explanation:
          "Im zweiten Absatz steht, dass die nötige Durchimpfungsrate für Masern bei etwa 95 Prozent liegt.",
      },
      {
        id: "tv-3-s3",
        text: "Die Pocken sind die einzige durch Impfung ausgerottete menschliche Infektionskrankheit.",
        isDerivable: true,
        explanation:
          "Im dritten Absatz heißt es wörtlich: 'Es ist die einzige Infektionskrankheit des Menschen, die durch Impfung vollständig eliminiert werden konnte.'",
      },
      {
        id: "tv-3-s4",
        text: "Polio ist weltweit vollständig ausgerottet.",
        isDerivable: false,
        explanation:
          "Der Text sagt, die Eradikation 'steht kurz vor dem Abschluss' und in wenigen Ländern treten noch Fälle auf. Vollständig ausgerottet ist Polio laut Text also nicht.",
      },
      {
        id: "tv-3-s5",
        text: "In Deutschland gibt es eine Masern-Impfpflicht für Kinder in Gemeinschaftseinrichtungen.",
        isDerivable: true,
        explanation:
          "Steht direkt im vierten Absatz: 'In Deutschland besteht seit 2020 eine Masern-Impfpflicht für Kinder in Gemeinschaftseinrichtungen und bestimmtes medizinisches Personal.'",
      },
      {
        id: "tv-3-s6",
        text: "Die Basisreproduktionszahl von Polio liegt bei 12-18.",
        isDerivable: false,
        explanation:
          "Der Text nennt R0 von 12-18 für Masern, nicht für Polio. Für Polio wird nur die nötige Durchimpfungsrate von 80-85 Prozent genannt, nicht die Basisreproduktionszahl.",
      },
    ],
  },
  {
    id: "tv-4",
    title: "Epigenetik - Wenn Gene an- und ausgeschaltet werden",
    content: `Die Epigenetik beschäftigt sich mit vererbbaren Veränderungen der Genaktivität, die nicht auf Änderungen der DNA-Sequenz selbst beruhen. Während die DNA-Sequenz den genetischen Bauplan darstellt, bestimmt die Epigenetik, welche Gene in einer Zelle tatsächlich abgelesen werden. Dies erklärt, warum alle Körperzellen zwar dieselbe DNA besitzen, aber eine Leberzelle völlig andere Eigenschaften hat als eine Nervenzelle. Die wichtigsten epigenetischen Mechanismen sind die DNA-Methylierung und die Histonmodifikation.

Bei der DNA-Methylierung werden Methylgruppen an bestimmte Stellen der DNA angehängt, typischerweise an Cytosin-Basen in sogenannten CpG-Inseln. Eine starke Methylierung in der Promotorregion eines Gens führt in der Regel zur Stilllegung dieses Gens - es wird quasi ausgeschaltet. Histonmodifikationen wirken über einen anderen Weg: DNA ist um Histonproteine gewickelt, und durch chemische Veränderungen dieser Proteine (Acetylierung, Methylierung, Phosphorylierung) kann die DNA enger oder lockerer gepackt werden. Locker gepackte DNA ist für die Transkriptionsmaschinerie zugänglich, eng gepackte nicht.

Umweltfaktoren können epigenetische Markierungen erheblich beeinflussen. Ernährung, Stress, Schadstoffe und körperliche Aktivität hinterlassen messbare Spuren im Epigenom. Eine bahnbrechende Studie zum niederländischen Hungerwinter 1944/45 zeigte, dass pränatale Unterernährung zu dauerhaften epigenetischen Veränderungen führte, die mit einem erhöhten Risiko für Herz-Kreislauf-Erkrankungen und Stoffwechselstörungen im Erwachsenenalter verbunden waren. Diese Veränderungen konnten noch sechs Jahrzehnte später nachgewiesen werden.

Besonders faszinierend ist die Frage der transgenerationalen Epigenetik: Können epigenetische Veränderungen an nachfolgende Generationen weitergegeben werden? Tierstudien, insbesondere an Mäusen, haben Hinweise darauf geliefert, dass bestimmte epigenetische Markierungen die Keimzellen überdauern und somit die nächste Generation beeinflussen können. Beim Menschen ist die Evidenz jedoch noch begrenzt, und die Forschung steht in diesem Bereich noch am Anfang. Klar ist aber bereits, dass die Epigenetik das traditionelle Verständnis von Vererbung grundlegend erweitert.`,
    statements: [
      {
        id: "tv-4-s1",
        text: "Epigenetische Veränderungen basieren auf Mutationen in der DNA-Sequenz.",
        isDerivable: false,
        explanation:
          "Der Text definiert Epigenetik ausdrücklich als Veränderungen, die 'nicht auf Änderungen der DNA-Sequenz selbst beruhen'. Mutationen wären aber Änderungen der DNA-Sequenz.",
      },
      {
        id: "tv-4-s2",
        text: "Eine starke Methylierung der Promotorregion führt in der Regel dazu, dass ein Gen nicht abgelesen wird.",
        isDerivable: true,
        explanation:
          "Im zweiten Absatz steht: 'Eine starke Methylierung in der Promotorregion eines Gens führt in der Regel zur Stilllegung dieses Gens.'",
      },
      {
        id: "tv-4-s3",
        text: "Die Studie zum niederländischen Hungerwinter zeigte epigenetische Veränderungen, die noch 60 Jahre später nachweisbar waren.",
        isDerivable: true,
        explanation:
          "Im dritten Absatz steht, dass die Veränderungen 'noch sechs Jahrzehnte später nachgewiesen werden' konnten, was 60 Jahren entspricht.",
      },
      {
        id: "tv-4-s4",
        text: "Transgenerationale Epigenetik ist beim Menschen eindeutig nachgewiesen.",
        isDerivable: false,
        explanation:
          "Der Text sagt im vierten Absatz ausdrücklich, dass 'beim Menschen die Evidenz jedoch noch begrenzt' ist und 'die Forschung in diesem Bereich noch am Anfang steht'. Von einem eindeutigen Nachweis kann keine Rede sein.",
      },
      {
        id: "tv-4-s5",
        text: "Histonacetylierung ist eine Form der Histonmodifikation.",
        isDerivable: true,
        explanation:
          "Im zweiten Absatz wird Acetylierung als eine der chemischen Veränderungen der Histonproteine aufgezählt.",
      },
      {
        id: "tv-4-s6",
        text: "Körperliche Aktivität hat keinen Einfluss auf epigenetische Markierungen.",
        isDerivable: false,
        explanation:
          "Der Text nennt im dritten Absatz körperliche Aktivität ausdrücklich als einen der Umweltfaktoren, die 'epigenetische Markierungen erheblich beeinflussen' können.",
      },
    ],
  },
  {
    id: "tv-5",
    title: "Mikrobiom und Gesundheit",
    content: `Der menschliche Körper beherbergt Billionen von Mikroorganismen, die in ihrer Gesamtheit als Mikrobiom bezeichnet werden. Die größte Ansammlung findet sich im Darm, wo schätzungsweise 100 Billionen Bakterien aus über 1.000 verschiedenen Arten leben. Das Gewicht der Darmmikroben beträgt insgesamt etwa 1,5 bis 2 Kilogramm. Die Zusammensetzung des Mikrobioms ist individuell so einzigartig wie ein Fingerabdruck und wird durch Geburtsmodus, Ernährung, Medikamenteneinnahme und Umweltfaktoren geformt.

Eine der spannendsten Entdeckungen der letzten Jahre ist die sogenannte Darm-Hirn-Achse. Darmbakterien kommunizieren über verschiedene Wege mit dem Gehirn: über den Vagusnerv, über Immunbotenstoffe und über Stoffwechselprodukte wie kurzkettige Fettsäuren. Tierstudien haben gezeigt, dass keimfreie Mäuse ein verändertes Angst- und Stressverhalten aufweisen. Beim Menschen gibt es zunehmend Hinweise, dass die Zusammensetzung des Darmmikrobioms mit psychischen Erkrankungen wie Depressionen und Angststörungen in Zusammenhang steht, wobei die genauen Mechanismen noch erforscht werden.

Das Mikrobiom spielt eine entscheidende Rolle für das Immunsystem. Etwa 70 Prozent der Immunzellen des Körpers befinden sich im Darm-assoziierten lymphatischen Gewebe (GALT). Darmbakterien trainieren das Immunsystem, zwischen harmlosen und gefährlichen Eindringlingen zu unterscheiden. Eine gestörte Darmflora (Dysbiose) wird mit Autoimmunerkrankungen, chronisch-entzündlichen Darmerkrankungen und Allergien in Verbindung gebracht.

Antibiotika können das Darmmikrobiom erheblich schädigen, da sie nicht nur pathogene, sondern auch nützliche Bakterien abtöten. Nach einer Antibiotikabehandlung kann es Wochen bis Monate dauern, bis sich die Darmflora wieder erholt hat - in manchen Fällen normalisiert sie sich nie vollständig. Probiotika, also lebende Mikroorganismen, die in ausreichender Menge einen gesundheitlichen Nutzen bringen sollen, werden häufig zur Unterstützung der Darmflora eingesetzt. Ihre Wirksamkeit ist allerdings je nach Stamm und Anwendungsgebiet sehr unterschiedlich, und nicht alle kommerziell erhältlichen Probiotika haben einen wissenschaftlich nachgewiesenen Nutzen.`,
    statements: [
      {
        id: "tv-5-s1",
        text: "Im Darm leben schätzungsweise 100 Billionen Bakterien aus über 1.000 Arten.",
        isDerivable: true,
        explanation:
          "Steht direkt im ersten Absatz des Textes.",
      },
      {
        id: "tv-5-s2",
        text: "Die Darm-Hirn-Achse kommuniziert ausschließlich über den Vagusnerv.",
        isDerivable: false,
        explanation:
          "Der Text nennt im zweiten Absatz drei Kommunikationswege: den Vagusnerv, Immunbotenstoffe und Stoffwechselprodukte. 'Ausschließlich' ist daher falsch.",
      },
      {
        id: "tv-5-s3",
        text: "Etwa 70 Prozent der Immunzellen des Körpers befinden sich im darmassoziierten lymphatischen Gewebe.",
        isDerivable: true,
        explanation:
          "Steht direkt im dritten Absatz.",
      },
      {
        id: "tv-5-s4",
        text: "Das Darmmikrobiom erholt sich nach einer Antibiotikabehandlung immer vollständig innerhalb weniger Wochen.",
        isDerivable: false,
        explanation:
          "Der Text sagt im vierten Absatz, dass die Erholung Wochen bis Monate dauern kann und sich 'in manchen Fällen nie vollständig' normalisiert. 'Immer vollständig' widerspricht dem Text.",
      },
      {
        id: "tv-5-s5",
        text: "Die Zusammensetzung des Darmmikrobioms wird unter anderem durch den Geburtsmodus beeinflusst.",
        isDerivable: true,
        explanation:
          "Im ersten Absatz wird der Geburtsmodus als einer der Faktoren genannt, die die Zusammensetzung des Mikrobioms formen.",
      },
      {
        id: "tv-5-s6",
        text: "Alle kommerziell erhältlichen Probiotika haben einen wissenschaftlich nachgewiesenen gesundheitlichen Nutzen.",
        isDerivable: false,
        explanation:
          "Der Text sagt im vierten Absatz ausdrücklich, dass 'nicht alle kommerziell erhältlichen Probiotika einen wissenschaftlich nachgewiesenen Nutzen' haben.",
      },
    ],
  },
];
