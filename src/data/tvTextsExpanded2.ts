import type { TVTextSet } from "./tvTextsExpanded";

// =============================================================================
// tvTextsExpanded2.ts - MedAT Textverständnis (TV) Expanded Data – Part 2
// 5 Sets (6-10) x 5 Texte x 12 Fragen pro Set = 60 Fragen insgesamt
// =============================================================================

const set6: TVTextSet = {
  id: "tv-set-6",
  name: "Set 6: Natur und Medizin",
  difficulty: "mittel",
  texts: [
    {
      id: "tv6-1",
      title: "Grundlagen der Immunologie",
      content:
        "Das menschliche Immunsystem ist ein hochkomplexes Netzwerk aus Zellen, Geweben und " +
        "Organen, das den Körper vor Krankheitserregern wie Bakterien, Viren, Pilzen und " +
        "Parasiten schützt. Man unterscheidet grundsätzlich zwischen dem angeborenen und dem " +
        "erworbenen Immunsystem. Das angeborene Immunsystem stellt die erste Verteidigungslinie " +
        "dar und reagiert schnell, aber unspezifisch auf Eindringlinge. Dazu gehören physikalische " +
        "Barrieren wie die Haut und Schleimhäute, aber auch zelluläre Bestandteile wie " +
        "Makrophagen und natürliche Killerzellen. Makrophagen sind Fresszellen, die Erreger " +
        "aufnehmen und verdauen können, wobei sie gleichzeitig Signalstoffe freisetzen, die " +
        "weitere Immunzellen zum Infektionsort locken. Dieser Prozess wird als Entzündungsreaktion " +
        "bezeichnet und äußert sich typischerweise durch Rötung, Schwellung, Wärme und Schmerz. " +
        "Das erworbene Immunsystem hingegen arbeitet hochspezifisch und benötigt nach dem " +
        "Erstkontakt mit einem Erreger einige Tage, um eine maßgeschneiderte Abwehr aufzubauen. " +
        "Die Hauptakteure sind dabei die B-Lymphozyten und die T-Lymphozyten. B-Lymphozyten " +
        "produzieren Antikörper, die gezielt an Oberflächenstrukturen der Erreger, sogenannte " +
        "Antigene, binden und diese so für die Zerstörung markieren. T-Lymphozyten lassen sich " +
        "in verschiedene Untergruppen einteilen: T-Helferzellen koordinieren die Immunantwort, " +
        "indem sie andere Immunzellen aktivieren, während zytotoxische T-Zellen infizierte " +
        "Körperzellen direkt abtöten können. Eine besondere Eigenschaft des erworbenen " +
        "Immunsystems ist das immunologische Gedächtnis. Nach einer überstandenen Infektion " +
        "verbleiben sogenannte Gedächtniszellen im Körper, die bei einem erneuten Kontakt mit " +
        "demselben Erreger eine deutlich schnellere und stärkere Immunantwort ermöglichen. Dieses " +
        "Prinzip bildet die Grundlage der Impfung: Durch die Verabreichung abgeschwächter oder " +
        "inaktivierter Erreger beziehungsweise deren Bestandteile wird das Immunsystem trainiert, " +
        "ohne dass die Krankheit ausbricht. So entsteht ein Schutz, der im Idealfall Jahre oder " +
        "sogar ein Leben lang anhält. Störungen des Immunsystems können zu Autoimmunerkrankungen " +
        "führen, bei denen sich die Abwehr irrtümlich gegen körpereigene Strukturen richtet, oder " +
        "zu Immundefizienzen, bei denen die Abwehr geschwächt ist und Infektionen gehäuft auftreten.",
      questions: [
        {
          id: "tv6-1-q1",
          question: "Welche Aussage über Makrophagen lässt sich dem Text entnehmen?",
          options: [
            "Sie gehören zum erworbenen Immunsystem und reagieren spezifisch auf Antigene.",
            "Sie produzieren Antikörper, die Erreger für die Zerstörung markieren.",
            "Sie nehmen Erreger auf, verdauen sie und setzen Signalstoffe frei, die weitere Immunzellen anlocken.",
            "Sie bilden zusammen mit den B-Lymphozyten das immunologische Gedächtnis.",
            "Sie sind ausschließlich in der Haut und den Schleimhäuten lokalisiert.",
          ],
          correctOption: 2,
          explanation:
            "Im Text heißt es, dass Makrophagen Fresszellen sind, die Erreger aufnehmen und verdauen können, wobei sie gleichzeitig Signalstoffe freisetzen, die weitere Immunzellen zum Infektionsort locken.",
        },
        {
          id: "tv6-1-q2",
          question: "Auf welchem Prinzip beruht laut dem Text die Schutzwirkung von Impfungen?",
          options: [
            "Auf der dauerhaften Aktivierung von Makrophagen und natürlichen Killerzellen.",
            "Auf der Hemmung der Entzündungsreaktion durch gezielte Medikamentengabe.",
            "Auf dem Trainieren des Immunsystems durch abgeschwächte oder inaktivierte Erreger, sodass Gedächtniszellen gebildet werden.",
            "Auf der Stärkung der physikalischen Barrieren wie Haut und Schleimhäute.",
            "Auf der Unterdrückung der T-Helferzellen, um eine Überreaktion zu verhindern.",
          ],
          correctOption: 2,
          explanation:
            "Der Text erklärt, dass Impfungen das Immunsystem durch abgeschwächte oder inaktivierte Erreger trainieren, wobei Gedächtniszellen entstehen, die bei erneutem Kontakt schneller reagieren.",
        },
        {
          id: "tv6-1-q3",
          question: "Was versteht man laut dem Text unter Autoimmunerkrankungen?",
          options: [
            "Erkrankungen, bei denen das Immunsystem durch äußere Faktoren vollständig zerstört wird.",
            "Erkrankungen, bei denen sich die Immunabwehr irrtümlich gegen körpereigene Strukturen richtet.",
            "Erkrankungen, die ausschließlich durch Viren verursacht werden und das Immunsystem schwächen.",
            "Erkrankungen, bei denen Gedächtniszellen keine Antikörper mehr produzieren können.",
            "Erkrankungen, bei denen das angeborene Immunsystem das erworbene unterdrückt.",
          ],
          correctOption: 1,
          explanation:
            "Im Text steht, dass Autoimmunerkrankungen Störungen sind, bei denen sich die Abwehr irrtümlich gegen körpereigene Strukturen richtet.",
        },
        {
          id: "tv6-1-q4",
          question: "Was ist die Hauptaussage des Textes über das Immunsystem?",
          options: [
            "Nur Antikörper und Killerzellen.",
            "Zweistufiges Netzwerk aus angeborenem und erworbenem System; Gedächtnis bildet Impfgrundlage.",
            "Kann durch Impfungen ersetzt werden.",
            "Angeborenes System ist überlegen.",
            "Autoimmunerkrankungen häufigste Folge.",
          ],
          correctOption: 1,
          explanation:
            "Der Text beschreibt das Immunsystem als zweigeteiltes System und zeigt, wie das immunologische Gedächtnis die Grundlage von Impfungen bildet.",
        },
        {
          id: "tv6-1-q5",
          question:
            "Welche Schlussfolgerung lässt sich über B-Lymphozyten und zytotoxische T-Zellen ziehen?",
          options: [
            "Beide gehören zum angeborenen System.",
            "Beide sind redundant.",
            "Ergänzen sich: B-Lymphozyten markieren, T-Zellen töten infizierte Zellen.",
            "T-Zellen von B-Zellen produziert.",
            "B-Zellen nur beim Erstkontakt aktiv.",
          ],
          correctOption: 2,
          explanation:
            "B-Lymphozyten markieren Erreger mit Antikörpern; zytotoxische T-Zellen töten infizierte Körperzellen. Beide gehören zum erworbenen Immunsystem.",
        },
      ],
    },
    {
      id: "tv6-2",
      title: "Stammzellen und ihre Bedeutung für die Medizin",
      content:
        "Stammzellen sind undifferenzierte Zellen, die über zwei besondere Fähigkeiten verfügen: " +
        "Sie können sich durch Zellteilung selbst erneuern und sich unter bestimmten Bedingungen " +
        "in spezialisierte Zelltypen wie Muskelzellen, Nervenzellen oder Blutzellen " +
        "differenzieren. In der biologischen Forschung und der Medizin spielen Stammzellen eine " +
        "zentrale Rolle, da sie das Potenzial besitzen, geschädigtes Gewebe zu reparieren oder zu " +
        "ersetzen. Man unterscheidet verschiedene Arten von Stammzellen. Embryonale Stammzellen " +
        "werden aus der inneren Zellmasse der Blastozyste gewonnen, einem frühen Entwicklungsstadium " +
        "des Embryos, das etwa fünf Tage nach der Befruchtung erreicht wird. Diese Zellen gelten " +
        "als pluripotent, da sie sich in nahezu jeden Zelltyp des Körpers differenzieren können. " +
        "Adulte Stammzellen hingegen finden sich in verschiedenen Geweben des erwachsenen " +
        "Organismus, beispielsweise im Knochenmark, in der Haut oder im Darm. Sie sind in der " +
        "Regel multipotent, das heißt, sie können sich nur in eine begrenzte Anzahl von Zelltypen " +
        "entwickeln. Hämatopötische Stammzellen im Knochenmark etwa können alle Zelltypen des " +
        "Blutes hervorbringen, jedoch keine Nervenzellen oder Muskelzellen bilden. Ein " +
        "Durchbruch gelang im Jahr 2006, als der japanische Forscher Shinya Yamanaka zeigte, dass " +
        "sich bereits ausdifferenzierte Körperzellen durch die Einführung bestimmter Gene in einen " +
        "stammzellähnlichen Zustand zurückversetzen lassen. Diese sogenannten induzierten " +
        "pluripotenten Stammzellen, kurz iPS-Zellen, eröffneten völlig neue Perspektiven für die " +
        "regenerative Medizin, da sie ethische Bedenken umgehen, die mit der Verwendung " +
        "embryonaler Stammzellen verbunden sind. In der klinischen Praxis werden Stammzellen " +
        "bereits seit Jahrzehnten bei Knochenmarktransplantationen eingesetzt, etwa zur Behandlung " +
        "von Leukämie und anderen Erkrankungen des blutbildenden Systems. Aktülle " +
        "Forschungsprojekte untersuchen darüber hinaus den Einsatz von Stammzellen bei " +
        "neurodegenerativen Erkrankungen wie Parkinson und Alzheimer, bei Herzinfarkten sowie bei " +
        "Rückenmarksverletzungen. Trotz vielversprechender Ergebnisse in Tierversuchen stehen " +
        "viele dieser Therapien beim Menschen jedoch noch am Anfang, und Risiken wie die " +
        "unkontrollierte Zellteilung, die zur Tumorbildung führen könnte, müssen sorgfältig " +
        "erforscht werden.",
      questions: [
        {
          id: "tv6-2-q1",
          question:
            "Was unterscheidet laut dem Text embryonale Stammzellen von adulten Stammzellen?",
          options: [
            "Embryonale Stammzellen können sich nicht selbst erneuern, adulte Stammzellen hingegen schon.",
            "Embryonale Stammzellen sind pluripotent und können sich in nahezu jeden Zelltyp differenzieren, während adulte Stammzellen in der Regel multipotent sind.",
            "Adulte Stammzellen stammen aus der Blastozyste, embryonale Stammzellen aus dem Knochenmark.",
            "Embryonale Stammzellen kommen ausschließlich im Blut vor, adulte Stammzellen in allen Geweben.",
            "Adulte Stammzellen können sich in mehr Zelltypen differenzieren als embryonale Stammzellen.",
          ],
          correctOption: 1,
          explanation:
            "Der Text beschreibt embryonale Stammzellen als pluripotent, da sie sich in nahezu jeden Zelltyp differenzieren können, und adulte Stammzellen als in der Regel multipotent, also auf eine begrenzte Anzahl von Zelltypen beschränkt.",
        },
        {
          id: "tv6-2-q2",
          question:
            "Welchen Vorteil von iPS-Zellen nennt der Text gegenüber embryonalen Stammzellen?",
          options: [
            "iPS-Zellen können sich schneller teilen als embryonale Stammzellen.",
            "iPS-Zellen sind totipotent und damit leistungsfähiger als embryonale Stammzellen.",
            "iPS-Zellen umgehen die ethischen Bedenken, die mit der Verwendung embryonaler Stammzellen verbunden sind.",
            "iPS-Zellen können ohne Zellteilung direkt in spezialisierte Zellen umgewandelt werden.",
            "iPS-Zellen sind seit den 1980er-Jahren klinisch erprobt und damit sicherer.",
          ],
          correctOption: 2,
          explanation:
            "Im Text wird erläutert, dass iPS-Zellen ethische Bedenken umgehen, die mit der Verwendung embryonaler Stammzellen verbunden sind.",
        },
        {
          id: "tv6-2-q3",
          question: "Was ist die Hauptaussage des Textes über Stammzellen?",
          options: [
            "Nur für Knochenmark.",
            "Einzigartige Fähigkeiten, großes Potenzial, viele Therapien noch in Erforschung.",
            "iPS-Zellen haben embryonale verdrängt.",
            "Hauptrisiko Abstoßungsreaktion.",
            "Adulte Stammzellen wichtiger.",
          ],
          correctOption: 1,
          explanation:
            "Der Text stellt verschiedene Stammzelltypen vor und weist auf Risiken sowie den frühen Stand vieler Therapien hin.",
        },
        {
          id: "tv6-2-q4",
          question: "Welche Schlussfolgerung lässt der Text zum Risiko der Stammzelltherapie zu?",
          options: [
            "Vollständig sicher.",
            "Einziges Risiko ist Ethik.",
            "Trotz Tierversuchen Risiko unkontrollierter Zellteilung; weitere Forschung nötig.",
            "iPS risikofrei.",
            "Tumor nur bei adulten Stammzellen.",
          ],
          correctOption: 2,
          explanation:
            "Der Text warnt, dass das Risiko unkontrollierter Zellteilung sorgfältig erforscht werden muss.",
        },
      ],
    },
    {
      id: "tv6-3",
      title: "Prionen – Infektiöse Proteine",
      content:
        "Prionen sind eine ungewöhnliche Klasse von Krankheitserregern, die sich grundlegend von " +
        "Bakterien, Viren und Parasiten unterscheiden. Während alle anderen bekannten Erreger " +
        "genetisches Material in Form von DNA oder RNA enthalten, bestehen Prionen ausschließlich " +
        "aus fehlgefalteten Proteinen. Der Begriff wurde 1982 vom amerikanischen Neurologen " +
        "Stanley Prusiner geprägt und leitet sich von dem englischen Ausdruck proteinaceous " +
        "infectious particle ab. Prusiner erhielt für seine Entdeckung 1997 den Nobelpreis für " +
        "Physiologie oder Medizin, obwohl seine Theorie zunächst auf erheblichen Widerstand in " +
        "der wissenschaftlichen Gemeinschaft stieß. Das normale Prion-Protein, abgekürzt PrPC, " +
        "kommt natürlicherweise auf der Oberfläche von Nervenzellen vor und spielt vermutlich " +
        "eine Rolle beim Zellschutz und der Signalübertragung. Bei der Prionenerkrankung wandelt " +
        "sich dieses Protein in eine pathologische Form um, die als PrPSc bezeichnet wird. Das " +
        "fehlgefaltete Protein zeichnet sich durch einen erhöhten Anteil an Beta-Faltblatt-Strukturen " +
        "aus, was es extrem widerstandsfähig gegen Hitze, UV-Strahlung, chemische " +
        "Desinfektionsmittel und sogar Proteasen macht – Enzyme, die normalerweise Proteine " +
        "abbauen. Das Gefährliche an PrPSc ist seine Fähigkeit, benachbarte normale Prion-Proteine " +
        "in die pathologische Form umzufalten. Dadurch entsteht eine Kettenreaktion, die zu einer " +
        "fortschreitenden Ansammlung fehlgefalteter Proteine im Gehirn führt. Diese Ablagerungen " +
        "zerstören nach und nach Nervenzellen und hinterlassen im Hirngewebe charakteristische " +
        "schwammartige Hohlräume, weshalb man von spongiformen Enzephalopathien spricht. Zu den " +
        "bekanntesten Prionenerkrankungen gehören die Creutzfeldt-Jakob-Krankheit beim Menschen, " +
        "die bovine spongiforme Enzephalopathie, bekannt als Rinderwahnsinn, bei Rindern sowie " +
        "Scrapie bei Schafen. Alle Prionenerkrankungen verlaufen tödlich, und bis heute gibt es " +
        "keine wirksame Therapie. Die Symptome umfassen rasch fortschreitende Demenz, " +
        "Bewegungsstörungen und Persönlichkeitsveränderungen. Die Inkubationszeit kann jedoch " +
        "Jahre bis Jahrzehnte betragen, was die Diagnose und die Erforschung zusätzlich erschwert.",
      questions: [
        {
          id: "tv6-3-q1",
          question:
            "Was macht Prionen laut dem Text im Vergleich zu anderen Krankheitserregern einzigartig?",
          options: [
            "Sie enthalten sowohl DNA als auch RNA in besonders stabiler Form.",
            "Sie bestehen ausschließlich aus fehlgefalteten Proteinen und enthalten kein genetisches Material.",
            "Sie können nur Tiere, aber nicht den Menschen infizieren.",
            "Sie werden ausschließlich durch direkten Blutkontakt übertragen.",
            "Sie vermehren sich durch klassische Zellteilung wie Bakterien.",
          ],
          correctOption: 1,
          explanation:
            "Der Text stellt fest, dass Prionen sich von allen anderen bekannten Erregern unterscheiden, weil sie ausschließlich aus fehlgefalteten Proteinen bestehen und kein genetisches Material enthalten.",
        },
        {
          id: "tv6-3-q2",
          question:
            "Warum wird die pathologische Form PrPSc im Text als besonders widerstandsfähig beschrieben?",
          options: [
            "Weil sie von einer Lipidmembran umhüllt ist, die chemische Einwirkungen abwehrt.",
            "Weil sie über einen erhöhten Anteil an Beta-Faltblatt-Strukturen verfügt, die sie gegen Hitze, UV-Strahlung, Desinfektionsmittel und Proteasen resistent machen.",
            "Weil sie sich in das Innere von Nervenzellen zurückzieht und dort vor Angriffen geschützt ist.",
            "Weil sie durch ständige Mutation ihre Struktur verändert und so Abwehrmechanismen umgeht.",
            "Weil sie nur bei sehr niedrigen Temperaturen aktiv wird und bei Wärme inaktiv bleibt.",
          ],
          correctOption: 1,
          explanation:
            "Laut dem Text zeichnet sich PrPSc durch einen erhöhten Anteil an Beta-Faltblatt-Strukturen aus, was es extrem widerstandsfähig gegen Hitze, UV-Strahlung, chemische Desinfektionsmittel und sogar Proteasen macht.",
        },
        {
          id: "tv6-3-q3",
          question: "Was ist laut dem Text die Hauptaussage über Prionenerkrankungen?",
          options: [
            "Selten und nur bei Rindern.",
            "Neuartiger Mechanismus, stets tödlich, lange Inkubationszeit erschwert Diagnose.",
            "Mit Antibiotika behandelbar.",
            "Hauptübertragbarkeit Tier zu Mensch.",
            "Prusiner sofort akzeptiert.",
          ],
          correctOption: 1,
          explanation:
            "Der Text beschreibt den einzigartigen Mechanismus der Prionen und betont die lange Inkubationszeit.",
        },
        {
          id: "tv6-3-q4",
          question:
            "Welche Schlussfolgerung lässt sich über die Ausbreitung von PrPSc im Gehirn ziehen?",
          options: [
            "Über Blutgefäße in alle Organe.",
            "PrPSc faltet gesunde Prion-Proteine um, selbstverstärkende Kettenreaktion.",
            "Immunsystem kann PrPSc eliminieren.",
            "Durch Nervenzellen aktiv transportiert.",
            "Ausbreitung verlangsamt sich ab kritischer Menge.",
          ],
          correctOption: 1,
          explanation:
            "PrPSc faltet benachbarte normale Prion-Proteine um und löst eine selbstverstärkende Kettenreaktion aus.",
        },
      ],
    },
    {
      id: "tv6-4",
      title: "Antibiotikaresistenz – Eine globale Bedrohung",
      content:
        "Seit der Entdeckung des Penicillins durch Alexander Fleming im Jahr 1928 haben " +
        "Antibiotika die Medizin revolutioniert und unzählige Leben gerettet. Doch der " +
        "zunehmende und oft unsachgemäße Einsatz dieser Medikamente hat zu einem wachsenden " +
        "Problem geführt: der Antibiotikaresistenz. Resistente Bakterien sind Mikroorganismen, " +
        "die die Fähigkeit entwickelt haben, der Wirkung von Antibiotika zu widerstehen, sodass " +
        "Infektionen schwerer oder gar nicht mehr behandelbar werden. Resistenzen entstehen " +
        "durch genetische Veränderungen in den Bakterien. Diese können spontan durch Mutationen " +
        "auftreten oder durch den Austausch von Resistenzgenen zwischen verschiedenen " +
        "Bakterienarten über horizontalen Gentransfer weitergegeben werden. Der Selektionsdruck " +
        "durch Antibiotika begünstigt resistente Stämme: Während empfindliche Bakterien abgetötet " +
        "werden, überleben resistente Varianten und vermehren sich ungehindert. Besonders " +
        "besorgniserregend sind multiresistente Erreger wie der Methicillin-resistente " +
        "Staphylococcus aureus, bekannt als MRSA, der gegen mehrere Antibiotikaklassen " +
        "unempfindlich ist. Solche Keime treten gehäuft in Krankenhäusern auf, wo sie " +
        "immungeschwächte Patienten besonders gefährden. Die Weltgesundheitsorganisation stuft " +
        "Antibiotikaresistenz als eine der größten Bedrohungen für die globale Gesundheit ein. " +
        "Schätzungen zufolge sterben weltweit jedes Jahr über eine Million Menschen an " +
        "Infektionen mit resistenten Erregern, und Prognosen warnen davor, dass diese Zahl bis " +
        "zur Mitte des Jahrhunderts drastisch ansteigen könnte, wenn keine Gegenmaßnahmen " +
        "ergriffen werden. Die Ursachen des Problems sind vielfältig. In der Humanmedizin werden " +
        "Antibiotika häufig bei viralen Infektionen verschrieben, obwohl sie nur gegen Bakterien " +
        "wirksam sind. Auch das vorzeitige Absetzen einer Antibiotikatherapie begünstigt die " +
        "Selektion resistenter Keime. In der Landwirtschaft werden große Mengen Antibiotika " +
        "prophylaktisch in der Tiermast eingesetzt, was ebenfalls zur Verbreitung resistenter " +
        "Bakterien beiträgt. Gegenstrategien umfassen die Entwicklung neuer Antibiotika, die " +
        "Erforschung alternativer Therapieansätze wie Bakteriophagen und antimikrobielle Peptide " +
        "sowie die Förderung eines verantwortungsvollen Umgangs mit bestehenden Antibiotika durch " +
        "Aufklärungskampagnen und strengere Verschreibungsrichtlinien.",
      questions: [
        {
          id: "tv6-4-q1",
          question: "Welche Ursachen für Antibiotikaresistenz werden im Text genannt?",
          options: [
            "Ausschließlich die spontane Mutation von Bakterien in der natürlichen Umwelt.",
            "Der prophylaktische Einsatz in der Tiermast, die Verschreibung bei viralen Infektionen und das vorzeitige Absetzen der Therapie.",
            "Die mangelnde Hygiene in Krankenhäusern als einziger Faktor.",
            "Die Verwendung von Antibiotika in der Lebensmittelkonservierung.",
            "Die natürliche Anpassung von Viren an Antibiotika durch Mutation.",
          ],
          correctOption: 1,
          explanation:
            "Der Text nennt mehrere Ursachen: die Verschreibung bei viralen Infektionen, das vorzeitige Absetzen der Therapie und den prophylaktischen Einsatz in der Tiermast.",
        },
        {
          id: "tv6-4-q2",
          question:
            "Was versteht man laut dem Text unter horizontalem Gentransfer im Kontext der Antibiotikaresistenz?",
          options: [
            "Die Weitergabe von Resistenzgenen von Elternzellen an Tochterzellen bei der Zellteilung.",
            "Die Übertragung von Resistenzgenen zwischen verschiedenen Bakterienarten.",
            "Die gentechnische Veränderung von Bakterien im Labor.",
            "Die Aufnahme von Antibiotika-Rückständen aus dem Trinkwasser durch Bakterien.",
            "Die Mutation von Resistenzgenen durch UV-Strahlung.",
          ],
          correctOption: 1,
          explanation:
            "Im Text wird beschrieben, dass Resistenzgene durch horizontalen Gentransfer zwischen verschiedenen Bakterienarten ausgetauscht werden können.",
        },
        {
          id: "tv6-4-q3",
          question: "Was ist die Hauptaussage des Textes zur Antibiotikaresistenz?",
          options: [
            "Gelöstes Problem.",
            "Globale Bedrohung durch unsachgemäßen Einsatz; ohne Gegenmaßnahmen drastisch zunehmend.",
            "Nur MRSA gefährlich.",
            "Antibiotika nicht mehr einsetzen.",
            "Nur Landwirtschaft Verursacher.",
          ],
          correctOption: 1,
          explanation: "Der Text nennt Antibiotikaresistenz als globale Bedrohung.",
        },
        {
          id: "tv6-4-q4",
          question:
            "Welche Schlussfolgerung lässt der Text zum Selektionsdruck durch Antibiotika zu?",
          options: [
            "Antibiotika töten alle Bakterien.",
            "Selektionsdruck begünstigt resistente Stämme, da empfindliche absterben und resistente sich vermehren.",
            "Resistente werden langfristig empfindlich.",
            "Nur in Landwirtschaft wirksam.",
            "Nur durch horizontalen Gentransfer.",
          ],
          correctOption: 1,
          explanation:
            "Selektionsdruck begünstigt resistente Stämme: empfindliche sterben ab, resistente überleben.",
        },
      ],
    },
    {
      id: "tv6-5",
      title: "Die Geschichte und Herausforderungen der Organtransplantation",
      content:
        "Die Organtransplantation zählt zu den bedeutendsten Errungenschaften der modernen " +
        "Medizin. Die erste erfolgreiche Nierentransplantation wurde 1954 in Boston von Joseph " +
        "Murray durchgeführt, wobei die Niere zwischen eineiigen Zwillingen übertragen wurde. " +
        "Da die Zwillinge genetisch identisch waren, trat keine Abstoßungsreaktion auf. Murray " +
        "erhielt für seine Pionierarbeit 1990 den Nobelpreis für Physiologie oder Medizin. In " +
        "den folgenden Jahrzehnten gelang es, auch Herz, Leber, Lunge und Bauchspeicheldrüse " +
        "erfolgreich zu transplantieren. Die größte Hürde war dabei stets die Abstoßungsreaktion " +
        "des Immunsystems, das fremdes Gewebe als Bedrohung erkennt und angreift. Ein " +
        "Meilenstein war die Entdeckung des Immunsuppressivums Ciclosporin in den 1970er-Jahren, " +
        "das die Abstoßung transplantierter Organe wirksam unterdrückt und die Erfolgsrate " +
        "von Transplantationen erheblich steigerte. Ciclosporin hemmt gezielt die Aktivierung " +
        "von T-Lymphozyten, ohne das gesamte Immunsystem vollständig lahmzulegen. Dennoch " +
        "müssen Transplantationspatienten in der Regel lebenslang Immunsuppressiva einnehmen, " +
        "was das Risiko für Infektionen und bestimmte Krebserkrankungen erhöht. Ein weiteres " +
        "zentrales Problem ist der chronische Mangel an Spenderorganen. In vielen Ländern " +
        "übersteigt die Nachfrage das Angebot bei weitem, sodass zahlreiche Patienten auf den " +
        "Wartelisten versterben. Um diesem Mangel zu begegnen, werden verschiedene Ansätze " +
        "verfolgt. Einige Länder wie Österreich haben eine Widerspruchslösung eingeführt, bei " +
        "der jeder Bürger automatisch als Organspender gilt, sofern er zu Lebzeiten nicht " +
        "aktiv widersprochen hat. Andere Länder setzen auf die Zustimmungslösung, bei der " +
        "eine ausdrückliche Einwilligung erforderlich ist. Darüber hinaus wird an der " +
        "Xenotransplantation geforscht, also der Übertragung tierischer Organe auf den " +
        "Menschen. Besonders Schweineherzen rücken dabei in den Fokus, da sie dem menschlichen " +
        "Herzen in Größe und Funktion ähneln. Erste experimentelle Transplantationen " +
        "genetisch veränderter Schweineherzen auf Menschen wurden bereits durchgeführt, " +
        "jedoch bleiben die langfristigen Ergebnisse abzuwarten. Auch das sogenannte " +
        "Tissue Engineering, bei dem Organe aus körpereigenen Zellen im Labor gezüchtet " +
        "werden, bietet langfristig Hoffnung, den Organmangel zu überwinden.",
      questions: [
        {
          id: "tv6-5-q1",
          question:
            "Warum war die erste erfolgreiche Nierentransplantation 1954 laut dem Text komplikationsarm?",
          options: [
            "Weil der Empfänger zuvor mit Ciclosporin behandelt worden war.",
            "Weil die Niere zwischen eineiigen Zwillingen übertragen wurde, die genetisch identisch waren, sodass keine Abstoßungsreaktion auftrat.",
            "Weil es sich um eine künstliche Niere handelte, die keine Immunantwort auslöste.",
            "Weil der Empfänger ein geschwächtes Immunsystem hatte und daher nicht abstoßen konnte.",
            "Weil die Niere zuvor durch Bestrahlung sterilisiert und damit immunologisch neutral gemacht worden war.",
          ],
          correctOption: 1,
          explanation:
            "Der Text erklärt, dass die erste erfolgreiche Nierentransplantation zwischen eineiigen Zwillingen stattfand, die genetisch identisch waren, weshalb keine Abstoßungsreaktion auftrat.",
        },
        {
          id: "tv6-5-q2",
          question: "Was besagt die im Text beschriebene Widerspruchslösung in der Organspende?",
          options: [
            "Jeder Bürger muss sich aktiv als Organspender registrieren, um nach dem Tod Organe spenden zu können.",
            "Nur Verwandte des Verstorbenen dürfen über eine Organspende entscheiden.",
            "Jeder Bürger gilt automatisch als Organspender, sofern er zu Lebzeiten nicht aktiv widersprochen hat.",
            "Ärzte entscheiden allein über die Organentnahme, ohne die Wünsche des Verstorbenen zu berücksichtigen.",
            "Die Organspende ist gesetzlich verboten, kann aber durch schriftlichen Widerspruch ermöglicht werden.",
          ],
          correctOption: 2,
          explanation:
            "Im Text wird erklärt, dass bei der Widerspruchslösung jeder Bürger automatisch als Organspender gilt, sofern er zu Lebzeiten nicht aktiv widersprochen hat.",
        },
        {
          id: "tv6-5-q3",
          question: "Was versteht man laut dem Text unter Xenotransplantation?",
          options: [
            "Die Transplantation von Organen zwischen genetisch identischen Zwillingen.",
            "Die Übertragung tierischer Organe auf den Menschen.",
            "Die Züchtung von Organen aus körpereigenen Zellen im Labor.",
            "Die Transplantation von Organen zwischen Menschen verschiedener Blutgruppen.",
            "Die Verwendung mechanischer Ersatzorgane anstelle biologischer Transplantate.",
          ],
          correctOption: 1,
          explanation:
            "Der Text definiert Xenotransplantation als die Übertragung tierischer Organe auf den Menschen.",
        },
        {
          id: "tv6-5-q4",
          question: "Welche Schlussfolgerung lässt sich über den Einsatz von Ciclosporin ziehen?",
          options: [
            "Ciclosporin löst Abstoßung vollständig ohne Nebenwirkungen.",
            "Ciclosporin ermöglicht Transplantationen durch T-Lymphozyten-Hemmung, erfordert aber lebenslange Einnahme mit erhöhtem Infektions- und Krebsrisiko.",
            "Ciclosporin nur kurzfristig.",
            "Unterdrückt gesamtes Immunsystem.",
            "Bereits 1954 eingesetzt.",
          ],
          correctOption: 1,
          explanation:
            "Ciclosporin unterdrückt die Abstoßung durch T-Lymphozyten-Hemmung, erfordert aber lebenslange Einnahme.",
        },
      ],
    },
  ],
};

const set7: TVTextSet = {
  id: "tv-set-7",
  name: "Set 7: Biologie und Umwelt",
  difficulty: "mittel",
  texts: [
    {
      id: "tv7-1",
      title: "Die Photosynthese – Motor des Lebens",
      content:
        "Die Photosynthese ist einer der wichtigsten biochemischen Prozesse auf der Erde, denn " +
        "sie bildet die Grundlage für nahezu alle Nahrungsketten und ist die Hauptquelle des " +
        "atmosphärischen Sauerstoffs. Bei diesem Vorgang wandeln Pflanzen, Algen und bestimmte " +
        "Bakterien mithilfe von Lichtenergie Kohlendioxid und Wasser in Glucose und Sauerstoff " +
        "um. Die Photosynthese lässt sich in zwei Hauptphasen unterteilen: die Lichtreaktion und " +
        "die Dunkelreaktion, die auch als Calvin-Zyklus bezeichnet wird. Die Lichtreaktion findet " +
        "in den Thylakoiden statt, membranumschlossenen Strukturen innerhalb der Chloroplasten. " +
        "Hier absorbiert das Pigment Chlorophyll Lichtenergie, wobei Chlorophyll a und " +
        "Chlorophyll b unterschiedliche Wellenlängen des Lichts aufnehmen. Die absorbierte " +
        "Energie wird genutzt, um Wasser in Sauerstoff, Protonen und Elektronen zu spalten. " +
        "Die Elektronen durchlaufen anschließend eine Elektronentransportkette, wobei die Energie " +
        "genutzt wird, um ATP und NADPH zu erzeugen, zwei energiereiche Moleküle, die für die " +
        "nächste Phase benötigt werden. Der Sauerstoff wird als Nebenprodukt freigesetzt. Im " +
        "Calvin-Zyklus, der im Stroma der Chloroplasten abläuft, werden ATP und NADPH verwendet, " +
        "um Kohlendioxid in organische Moleküle umzuwandeln. Dabei wird CO2 zunächst an ein " +
        "Fünf-Kohlenstoff-Molekül namens Ribulose-1,5-bisphosphat gebunden, ein Vorgang, der " +
        "vom Enzym RuBisCO katalysiert wird. RuBisCO gilt als das häufigste Enzym auf der Erde. " +
        "Durch eine Reihe weiterer Reaktionen entsteht schließlich Glycerinaldehyd-3-phosphat, " +
        "aus dem die Pflanze Glucose und andere organische Verbindungen aufbauen kann. Die " +
        "Effizienz der Photosynthese wird von mehreren Faktoren beeinflusst, darunter die " +
        "Lichtintensität, die CO2-Konzentration und die Temperatur. Bei sehr hohen Temperaturen " +
        "schließen viele Pflanzen ihre Spaltöffnungen, um Wasserverlust zu vermeiden, wodurch " +
        "jedoch weniger CO2 aufgenommen wird und die Photosyntheserate sinkt. Einige Pflanzen " +
        "haben evolutionär Anpassungen entwickelt, um dieses Problem zu umgehen, darunter die " +
        "sogenannte C4-Photosynthese, die bei tropischen Gräsern wie Mais und Zuckerrohr " +
        "vorkommt und eine effizientere CO2-Fixierung bei hohen Temperaturen ermöglicht.",
      questions: [
        {
          id: "tv7-1-q1",
          question: "Was passiert laut dem Text während der Lichtreaktion der Photosynthese?",
          options: [
            "Kohlendioxid wird an Ribulose-1,5-bisphosphat gebunden und in Glucose umgewandelt.",
            "Wasser wird in Sauerstoff, Protonen und Elektronen gespalten, wobei ATP und NADPH erzeugt werden.",
            "Glucose wird in den Thylakoiden in Kohlendioxid und Wasser zerlegt.",
            "RuBisCO katalysiert die Spaltung von Chlorophyll in seine Bestandteile.",
            "Glycerinaldehyd-3-phosphat wird im Stroma der Chloroplasten gebildet.",
          ],
          correctOption: 1,
          explanation:
            "Der Text beschreibt, dass bei der Lichtreaktion Wasser in Sauerstoff, Protonen und Elektronen gespalten wird und die Energie genutzt wird, um ATP und NADPH zu erzeugen.",
        },
        {
          id: "tv7-1-q2",
          question: "Warum sinkt die Photosyntheserate bei sehr hohen Temperaturen laut dem Text?",
          options: [
            "Weil Chlorophyll bei hohen Temperaturen seine Fähigkeit verliert, Licht zu absorbieren.",
            "Weil das Enzym RuBisCO bei Hitze irreversibel zerstört wird.",
            "Weil Pflanzen ihre Spaltöffnungen schließen, um Wasserverlust zu vermeiden, wodurch weniger CO2 aufgenommen wird.",
            "Weil die Elektronentransportkette in den Thylakoiden bei Wärme zum Erliegen kommt.",
            "Weil ATP und NADPH bei hohen Temperaturen instabil werden und zerfallen.",
          ],
          correctOption: 2,
          explanation:
            "Im Text heißt es, dass viele Pflanzen bei sehr hohen Temperaturen ihre Spaltöffnungen schließen, um Wasserverlust zu vermeiden, wodurch weniger CO2 aufgenommen wird und die Photosyntheserate sinkt.",
        },
        {
          id: "tv7-1-q3",
          question: "Welche Rolle spielt das Enzym RuBisCO laut dem Text im Calvin-Zyklus?",
          options: [
            "Es spaltet Wasser in Sauerstoff und Wasserstoff.",
            "Es absorbiert Lichtenergie und überträgt sie auf die Elektronentransportkette.",
            "Es katalysiert die Bindung von CO2 an Ribulose-1,5-bisphosphat.",
            "Es wandelt Glucose in Stärke um und speichert sie in den Chloroplasten.",
            "Es transportiert NADPH vom Stroma in die Thylakoide.",
          ],
          correctOption: 2,
          explanation:
            "Der Text erklärt, dass RuBisCO den Vorgang katalysiert, bei dem CO2 an Ribulose-1,5-bisphosphat gebunden wird.",
        },
        {
          id: "tv7-1-q4",
          question: "Was ist die Hauptaussage des Textes über die Photosynthese?",
          options: [
            "Nur Sauerstoffproduktion.",
            "Zweiphasiger Prozess; Faktoren wie Temperatur und CO2 beeinflussen Effizienz.",
            "RuBisCO wichtigstes Pigment.",
            "Nur C4 bei Hitze möglich.",
            "Chlorophyll a und b austauschbar.",
          ],
          correctOption: 1,
          explanation: "Der Text beschreibt die Photosynthese als zweiphasigen Prozess.",
        },
        {
          id: "tv7-1-q5",
          question:
            "Welche Schlussfolgerung lässt sich über den Vorteil der C4-Photosynthese ziehen?",
          options: [
            "C4 ohne Spaltöffnungen.",
            "C4 verzichtet auf Calvin-Zyklus.",
            "C4-Photosynthese ermöglicht effizientere CO2-Fixierung bei Hitze und umgeht Photosyntheserückgang durch Spaltöffnungsschluss.",
            "C4 mehr Sauerstoff ohne RuBisCO.",
            "C4 am effizientesten in gemäßigten Zonen.",
          ],
          correctOption: 2,
          explanation: "C4-Pflanzen ermöglichen effizientere CO2-Fixierung bei Hitze.",
        },
      ],
    },
    {
      id: "tv7-2",
      title: "Ozeanversauerung und ihre Folgen",
      content:
        "Die Ozeane der Erde nehmen etwa ein Viertel des vom Menschen verursachten " +
        "Kohlendioxids auf und wirken damit als bedeutende Kohlenstoffsenke, die den " +
        "Klimawandel bremst. Doch diese Aufnahme hat einen Preis: Wenn CO2 im Meerwasser " +
        "gelöst wird, reagiert es mit Wasser zu Kohlensäure, die anschließend in " +
        "Hydrogencarbonat-Ionen und Wasserstoff-Ionen dissoziiert. Die zunehmende Konzentration " +
        "von Wasserstoff-Ionen führt zu einer Absenkung des pH-Werts, ein Vorgang, der als " +
        "Ozeanversauerung bezeichnet wird. Seit Beginn der industriellen Revolution ist der " +
        "pH-Wert der Meeresoberfläche von durchschnittlich 8,2 auf etwa 8,1 gesunken, was " +
        "einer Zunahme der Wasserstoff-Ionen-Konzentration um rund 26 Prozent entspricht, " +
        "da die pH-Skala logarithmisch ist. Besonders betroffen sind Organismen, die " +
        "Kalkschalen oder Kalkskelette bilden, wie Korallen, Muscheln, Schnecken und " +
        "bestimmte Planktonarten. Diese Lebewesen nutzen Calciumcarbonat als Baumaterial. " +
        "Bei sinkendem pH-Wert steht jedoch weniger Carbonat im Wasser zur Verfügung, " +
        "sodass die Bildung von Kalkstrukturen erschwert wird. Bei besonders niedrigen " +
        "pH-Werten kann es sogar zur Auflösung bestehender Schalen kommen. Korallenriffe, " +
        "die als Lebensraum für schätzungsweise ein Viertel aller marinen Arten dienen, " +
        "sind doppelt bedroht: Neben der Versauerung leiden sie unter der Erwärmung der " +
        "Meere, die zur sogenannten Korallenbleiche führt, bei der die Korallen ihre " +
        "symbiotischen Algen abstoßen und schließlich absterben. Auch auf molekularer " +
        "Ebene zeigen sich Auswirkungen der Versauerung. Studien haben gezeigt, dass ein " +
        "niedrigerer pH-Wert das Verhalten bestimmter Fischarten beeinflussen kann, " +
        "indem er die Funktion von Neurotransmitter-Rezeptoren im Gehirn verändert. " +
        "Betroffene Fische zeigen eine verminderte Fähigkeit, Raubtiere zu erkennen, und " +
        "weisen Orientierungsprobleme auf. Die Folgen der Ozeanversauerung betreffen " +
        "letztlich auch den Menschen. Millionen von Menschen sind direkt von der Fischerei " +
        "als Nahrungsquelle und Einkommensgrundlage abhängig, und der Rückgang mariner " +
        "Ökosysteme bedroht diese Lebensgrundlage. Wissenschaftler fordern daher eine " +
        "drastische Reduktion der CO2-Emissionen als einzig wirksame Maßnahme gegen die " +
        "fortschreitende Versauerung der Ozeane.",
      questions: [
        {
          id: "tv7-2-q1",
          question:
            "Warum entspricht laut dem Text eine Absenkung des pH-Werts von 8,2 auf 8,1 einer Zunahme der Wasserstoff-Ionen-Konzentration um etwa 26 Prozent?",
          options: [
            "Weil die Wassertemperatur den pH-Wert exponentiell beeinflusst.",
            "Weil Kohlensäure sich bei niedrigem pH vollständig in Ionen auflöst.",
            "Weil die pH-Skala logarithmisch ist.",
            "Weil Carbonat-Ionen die Wasserstoff-Ionen zusätzlich verstärken.",
            "Weil die CO2-Konzentration linear mit dem pH-Wert korreliert.",
          ],
          correctOption: 2,
          explanation:
            "Der Text erklärt, dass die pH-Skala logarithmisch ist, weshalb eine Senkung um 0,1 Einheiten einer deutlich höheren prozentualen Zunahme der Wasserstoff-Ionen-Konzentration entspricht.",
        },
        {
          id: "tv7-2-q2",
          question: "Welche Auswirkung der Ozeanversauerung auf Fische wird im Text beschrieben?",
          options: [
            "Der niedrigere pH-Wert führt zur Auflösung der Schuppen und Flossen von Fischen.",
            "Fische können bei niedrigerem pH-Wert keinen Sauerstoff mehr über die Kiemen aufnehmen.",
            "Ein niedrigerer pH-Wert verändert die Funktion von Neurotransmitter-Rezeptoren, was die Raubtiererkennung und Orientierung beeinträchtigt.",
            "Die Versauerung führt dazu, dass Fische ihre Fortpflanzungsfähigkeit verlieren.",
            "Fische wandern in tiefere Wasserschichten ab, wo der pH-Wert stabiler ist.",
          ],
          correctOption: 2,
          explanation:
            "Der Text beschreibt, dass ein niedrigerer pH-Wert die Funktion von Neurotransmitter-Rezeptoren im Gehirn verändern kann, was zu verminderter Raubtiererkennung und Orientierungsproblemen führt.",
        },
        {
          id: "tv7-2-q3",
          question: "Was ist die Hauptaussage des Textes zur Ozeanversäuerung?",
          options: [
            "Nur Korallenriffe betroffen.",
            "CO2-Aufnahme führt zur Versäuerung, bedroht marine Ökosysteme und menschliche Lebensgrundlage.",
            "Ozeane nehmen unbegrenzt CO2 auf.",
            "Kalkschalenbildner nicht gefährdet.",
            "Natürlicher Vorgang.",
          ],
          correctOption: 1,
          explanation:
            "Der Text erklärt, wie CO2-Emissionen zur Versauerung führen, und betont die Bedrohung für marine Ökosysteme.",
        },
        {
          id: "tv7-2-q4",
          question:
            "Welche Schlussfolgerung lässt sich über die doppelte Bedrohung von Korallenriffen ziehen?",
          options: [
            "Entweder Versäuerung oder Erwärmung, nie beide.",
            "Korallenbleiche weniger gefährlich.",
            "Korallenriffe durch Versäuerung und Meereswärmung gleichzeitig bedroht; gefährdet Lebensraum für ein Viertel mariner Arten.",
            "Nur tropisch oder polar betroffen.",
            "Korallen passen sich rasch an.",
          ],
          correctOption: 2,
          explanation:
            "Korallenriffe sind durch Versäuerung und Meereswärmung gleichzeitig bedroht.",
        },
      ],
    },
    {
      id: "tv7-3",
      title: "Vulkanismus und seine Auswirkungen auf das Klima",
      content:
        "Vulkanausbrüche gehören zu den gewaltigsten Naturereignissen auf der Erde und können " +
        "erhebliche Auswirkungen auf das globale Klima haben. Bei einer Eruption werden neben " +
        "Lava und Asche auch große Mengen an Gasen in die Atmosphäre geschleudert, darunter " +
        "Wasserdampf, Kohlendioxid und Schwefeldioxid. Besonders das Schwefeldioxid spielt " +
        "eine bedeutende klimatische Rolle. In der Stratosphäre, der Atmosphärenschicht zwischen " +
        "etwa 10 und 50 Kilometern Höhe, reagiert Schwefeldioxid mit Wasser und bildet feine " +
        "Schwefelsäuretröpfchen, sogenannte Sulfatärosole. Diese winzigen Partikel reflektieren " +
        "einen Teil der einfallenden Sonnenstrahlung zurück in den Weltraum und verringern so " +
        "die Menge an Energie, die die Erdoberfläche erreicht. Dieser Kühlungseffekt kann bei " +
        "besonders starken Eruptionen über mehrere Jahre anhalten. Ein historisch gut " +
        "dokumentiertes Beispiel ist der Ausbruch des Vulkans Tambora auf der indonesischen " +
        "Insel Sumbawa im April 1815. Die Eruption schleuderte geschätzte 60 Millionen Tonnen " +
        "Schwefeldioxid in die Stratosphäre und führte zu einem globalen Temperaturrückgang von " +
        "etwa 0,4 bis 0,7 Grad Celsius. Das darauffolgende Jahr 1816 ging als Jahr ohne Sommer " +
        "in die Geschichte ein, da in weiten Teilen Europas und Nordamerikas ungewöhnlich kalte " +
        "Temperaturen, Ernteausfälle und Hungersnöte auftraten. Ein weiteres Beispiel ist der " +
        "Ausbruch des Pinatubo auf den Philippinen im Juni 1991, der etwa 20 Millionen Tonnen " +
        "Schwefeldioxid freisetzte und die globale Durchschnittstemperatur in den folgenden " +
        "zwei Jahren um rund 0,5 Grad Celsius senkte. Gleichzeitig kann vulkanisches CO2 " +
        "langfristig zum Treibhauseffekt beitragen, wobei die jährlichen vulkanischen " +
        "CO2-Emissionen im Vergleich zu den anthropogenen Emissionen gering sind – sie " +
        "machen weniger als ein Prozent der menschengemachten CO2-Emissionen aus. " +
        "Vulkanausbrüche beeinflussen auch die Ozonschicht, da Sulfatärosole chemische " +
        "Reaktionen beschleunigen können, die zum Abbau von Ozon führen. Nach dem Pinatubo-" +
        "Ausbruch wurde ein messbarer Rückgang der Ozonkonzentration in der Stratosphäre " +
        "beobachtet, der die ultraviolette Strahlung auf der Erdoberfläche vorübergehend erhöhte.",
      questions: [
        {
          id: "tv7-3-q1",
          question:
            "Wie kommt es laut dem Text nach starken Vulkanausbrüchen zu einem globalen Kühlungseffekt?",
          options: [
            "Vulkanische Asche bedeckt die Erdoberfläche und reflektiert Sonnenstrahlung.",
            "Schwefeldioxid bildet in der Stratosphäre Sulfatärosole, die Sonnenstrahlung ins Weltall zurückreflektieren.",
            "Vulkanisches CO2 absorbiert Wärme in der Atmosphäre und strahlt sie in den Weltraum ab.",
            "Die freigesetzten Wasserdampfmengen bilden dichte Wolkendecken, die die Erde dauerhaft beschatten.",
            "Die Lava kühlt große Meeresflächen ab und senkt so die globale Temperatur.",
          ],
          correctOption: 1,
          explanation:
            "Der Text erklärt, dass Schwefeldioxid in der Stratosphäre mit Wasser zu Sulfatärosolen reagiert, die Sonnenstrahlung zurück in den Weltraum reflektieren und so die Erdoberfläche kühlen.",
        },
        {
          id: "tv7-3-q2",
          question: "Welche Aussage zu vulkanischen CO2-Emissionen lässt sich dem Text entnehmen?",
          options: [
            "Vulkanische CO2-Emissionen übersteigen die vom Menschen verursachten Emissionen deutlich.",
            "Vulkanisches CO2 hat keinen Einfluss auf den Treibhauseffekt.",
            "Vulkanische CO2-Emissionen machen weniger als ein Prozent der menschengemachten CO2-Emissionen aus.",
            "Vulkanisches CO2 wird vollständig von den Ozeanen absorbiert.",
            "Vulkanische CO2-Emissionen waren vor der Industrialisierung die Hauptursache des Treibhauseffekts.",
          ],
          correctOption: 2,
          explanation:
            "Im Text heißt es, dass die jährlichen vulkanischen CO2-Emissionen weniger als ein Prozent der menschengemachten CO2-Emissionen ausmachen.",
        },
        {
          id: "tv7-3-q3",
          question: "Was ist die Hauptaussage des Textes über Vulkanismus und Klima?",
          options: [
            "Hauptursache aktuellen Klimawandels.",
            "Kühlend durch Sulfataerosole kurzfristig, erwärmend durch CO2 langfristig, negativ auf Ozonschicht.",
            "CO2 wichtiger als Sulfataerosole.",
            "Tambora ohne Auswirkung.",
            "Sulfataerosole wirken jahrzehntelang.",
          ],
          correctOption: 1,
          explanation:
            "Der Text beschreibt den kühlenden Sulfataerosol-Effekt und den negativen Einfluss auf die Ozonschicht.",
        },
        {
          id: "tv7-3-q4",
          question:
            "Welche Schlussfolgerung lässt sich aus dem Vergleich von Tambora und Pinatubo ziehen?",
          options: [
            "Größere SO2-Mengen tendieren zu stärkerem Kühlungseffekt.",
            "Pinatubo stärker als Tambora.",
            "Beide ohne messbaren Einfluss.",
            "Tambora keine Hungersnot.",
            "Inselvulkane generell stärker.",
          ],
          correctOption: 0,
          explanation:
            "Tambora setzte 60 Mio. Tonnen SO2 frei; Pinatubo 20 Mio. Größere SO2-Mengen tendieren zu stärkerem Kühlungseffekt.",
        },
      ],
    },
    {
      id: "tv7-4",
      title: "Genetische Drift – Zufall in der Evolution",
      content:
        "Die Evolution wird häufig vor allem mit natürlicher Selektion in Verbindung gebracht, " +
        "doch ein weiterer bedeutender Mechanismus der Evolutionsbiologie ist die genetische " +
        "Drift. Unter genetischer Drift versteht man zufällige Veränderungen in der " +
        "Allelfrequenz einer Population, die nicht durch Selektion, sondern durch " +
        "Stichprobenfehler bei der Vererbung entstehen. In jeder Generation wird nur ein Teil " +
        "der verfügbaren Allele an die Nachkommen weitergegeben, und durch Zufall können " +
        "bestimmte Allele häufiger oder seltener werden, ohne dass sie einen Vor- oder Nachteil " +
        "für das Überleben bieten. Die Auswirkungen genetischer Drift sind besonders in kleinen " +
        "Populationen ausgeprägt, da dort zufällige Schwankungen einen größeren relativen Effekt " +
        "auf die Allelfrequenzen haben. In großen Populationen hingegen gleichen sich die " +
        "zufälligen Schwankungen statistisch weitgehend aus. Zwei besondere Szenarien " +
        "veranschaulichen die Wirkung der genetischen Drift. Der sogenannte Gründereffekt " +
        "tritt auf, wenn eine kleine Gruppe von Individuen eine neue Population gründet, " +
        "beispielsweise bei der Besiedlung einer Insel. Die genetische Zusammensetzung dieser " +
        "Gründerpopulation entspricht nicht der der Ursprungspopulation, da nur eine zufällige " +
        "Stichprobe der Allele mitgenommen wird. Dies kann dazu führen, dass seltene Allele " +
        "in der neuen Population überrepräsentiert sind. Ein bekanntes Beispiel ist die hohe " +
        "Häufigkeit bestimmter Erbkrankheiten in isolierten Bevölkerungsgruppen wie den Amish " +
        "in Nordamerika, die auf eine kleine Gründergruppe zurückgehen. Der Flaschenhalseffekt " +
        "beschreibt eine drastische Reduktion der Populationsgröße durch ein Katastrophenereignis " +
        "wie eine Seuche, eine Naturkatastrophe oder Bejagung. Die überlebenden Individuen " +
        "repräsentieren nur einen Bruchteil der ursprünglichen genetischen Vielfalt, und selbst " +
        "wenn die Population sich zahlenmäßig erholt, bleibt die genetische Diversität " +
        "langfristig verringert. Ein klassisches Beispiel sind die Geparden, deren extrem " +
        "geringe genetische Variabilität auf einen Flaschenhals in der Vergangenheit " +
        "zurückgeführt wird. Die geringe genetische Diversität macht Geparden anfälliger für " +
        "Krankheiten und verringert ihre Anpassungsfähigkeit an Umweltveränderungen. Genetische " +
        "Drift kann somit langfristig zur Verarmung des Genpools und zur genetischen " +
        "Differenzierung isolierter Populationen beitragen.",
      questions: [
        {
          id: "tv7-4-q1",
          question:
            "Warum sind die Auswirkungen genetischer Drift laut dem Text in kleinen Populationen stärker?",
          options: [
            "Weil kleine Populationen häufiger von natürlicher Selektion betroffen sind.",
            "Weil in kleinen Populationen mehr Mutationen auftreten als in großen.",
            "Weil zufällige Schwankungen in kleinen Populationen einen größeren relativen Effekt auf die Allelfrequenzen haben.",
            "Weil kleine Populationen einen höheren Genfluss mit benachbarten Populationen aufweisen.",
            "Weil in kleinen Populationen die Fortpflanzungsrate generell höher ist.",
          ],
          correctOption: 2,
          explanation:
            "Der Text erklärt, dass die Auswirkungen genetischer Drift in kleinen Populationen besonders ausgeprägt sind, weil zufällige Schwankungen dort einen größeren relativen Effekt auf die Allelfrequenzen haben.",
        },
        {
          id: "tv7-4-q2",
          question: "Welches Beispiel nennt der Text für den Flaschenhalseffekt?",
          options: [
            "Die Amish-Gemeinschaft in Nordamerika mit einer hohen Rate an Erbkrankheiten.",
            "Die Besiedlung einer Insel durch eine kleine Gruppe von Vögeln.",
            "Die Geparden, deren geringe genetische Variabilität auf eine drastische Reduktion der Populationsgröße zurückgeführt wird.",
            "Die Entstehung neuer Bakterienstämme durch Antibiotikaresistenz.",
            "Die Anpassung tropischer Pflanzen an veränderte Klimabedingungen.",
          ],
          correctOption: 2,
          explanation:
            "Der Text nennt die Geparden als klassisches Beispiel für den Flaschenhalseffekt, da ihre extrem geringe genetische Variabilität auf einen Flaschenhals in der Vergangenheit zurückgeführt wird.",
        },
        {
          id: "tv7-4-q3",
          question: "Was ist die Hauptaussage des Textes über genetische Drift?",
          options: [
            "Drift ist dasselbe wie natürliche Selektion.",
            "Zufälliger Evolutionsmechanismus in kleinen Populationen; Gründer- und Flaschenhalseffekt führen zu Genverarmung.",
            "Nur in Inselpopulationen relevant.",
            "Begünstigt angepasste Allele.",
            "Flaschenhalseffekt einziger Mechanismus.",
          ],
          correctOption: 1,
          explanation:
            "Genetische Drift ist ein zufälliger Mechanismus, stärker in kleinen Populationen.",
        },
        {
          id: "tv7-4-q4",
          question:
            "Welche Schlussfolgerung lässt sich über die Krankheitsanfälligkeit der Geparden ziehen?",
          options: [
            "Körpergröße als Ursache.",
            "Geringe genetische Diversität durch Flaschenhals macht Geparden anfälliger und weniger anpassungsfähig.",
            "Bejagung veränderte Gene.",
            "Natürliche Selektion als Ursache.",
            "Nur anfällig für Viren.",
          ],
          correctOption: 1,
          explanation:
            "Die geringe genetische Diversität der Geparden geht auf einen Flaschenhals zurück.",
        },
      ],
    },
    {
      id: "tv7-5",
      title: "Symbiose – Zusammenleben in der Natur",
      content:
        "Symbiose bezeichnet in der Biologie das enge Zusammenleben artverschiedener " +
        "Organismen über einen längeren Zeitraum. Der Begriff stammt aus dem Griechischen " +
        "und bedeutet wörtlich Zusammenleben. Er wurde 1879 vom deutschen Botaniker Heinrich " +
        "Anton de Bary eingeführt, der damit zunächst jede Form des dauerhaften Zusammenlebens " +
        "verschiedener Arten beschrieb, unabhängig davon, ob die Beziehung für beide Partner " +
        "vorteilhaft ist. In der modernen Biologie werden verschiedene Formen der Symbiose " +
        "unterschieden. Bei der Mutualismus genannten Form profitieren beide Partner von der " +
        "Beziehung. Ein eindrucksvolles Beispiel ist die Mykorrhiza, die Symbiose zwischen " +
        "Pilzen und Pflanzenwurzeln. Der Pilz vergrößert mit seinem feinen Fadengeflecht, dem " +
        "Myzel, die Absorptionsfläche der Wurzeln erheblich und verbessert so die Aufnahme von " +
        "Wasser und mineralischen Nährstoffen, insbesondere Phosphat. Im Gegenzug erhält der " +
        "Pilz von der Pflanze organische Verbindungen, vor allem Zucker, die er für seinen " +
        "Stoffwechsel benötigt. Schätzungen zufolge leben über 90 Prozent aller Landpflanzen " +
        "in einer Mykorrhiza-Symbiose. Beim Kommensalismus profitiert ein Partner, während der " +
        "andere weder Vor- noch Nachteile erfährt. Ein Beispiel sind Epiphyten, also " +
        "Aufsitzerpflanzen wie bestimmte Orchideen und Bromelien, die auf Bäumen wachsen, um " +
        "besseren Zugang zum Licht zu erhalten, ohne dem Wirtsbaum zu schaden. Beim " +
        "Parasitismus hingegen profitiert ein Partner auf Kosten des anderen. Parasiten wie " +
        "Bandwürmer, Zecken oder die Mistel entziehen ihrem Wirt Nährstoffe und können seine " +
        "Gesundheit beeinträchtigen. Dennoch sind Parasiten ein wichtiger Bestandteil von " +
        "Ökosystemen, da sie die Populationsdynamik regulieren und die biologische Vielfalt " +
        "fördern. Eine besonders faszinierende Form der Symbiose ist die Endosymbiose, bei " +
        "der ein Organismus im Inneren eines anderen lebt. Die Endosymbiontentheorie, die " +
        "maßgeblich von der Biologin Lynn Margulis in den 1960er-Jahren entwickelt wurde, " +
        "besagt, dass Mitochondrien und Chloroplasten in eukaryotischen Zellen ursprünglich " +
        "freilebende Bakterien waren, die von Vorläuferzellen aufgenommen wurden und im Laufe " +
        "der Evolution zu festen Zellbestandteilen wurden. Belege dafür sind unter anderem " +
        "die eigene DNA dieser Organellen und ihre doppelte Membranstruktur.",
      questions: [
        {
          id: "tv7-5-q1",
          question: "Was beschreibt der Text als Mykorrhiza?",
          options: [
            "Eine parasitäre Beziehung zwischen Pilzen und Insekten.",
            "Die Symbiose zwischen Pilzen und Pflanzenwurzeln, bei der der Pilz die Nährstoffaufnahme verbessert und im Gegenzug Zucker erhält.",
            "Die Beziehung zwischen Epiphyten und Bäumen in tropischen Wäldern.",
            "Eine Form des Kommensalismus zwischen Algen und Korallen.",
            "Den Prozess, bei dem Bakterien in eukaryotische Zellen aufgenommen werden.",
          ],
          correctOption: 1,
          explanation:
            "Der Text beschreibt Mykorrhiza als die Symbiose zwischen Pilzen und Pflanzenwurzeln, bei der der Pilz die Absorptionsfläche vergrößert und die Nährstoffaufnahme verbessert, während er im Gegenzug Zucker erhält.",
        },
        {
          id: "tv7-5-q2",
          question: "Welche Belege für die Endosymbiontentheorie werden im Text angeführt?",
          options: [
            "Die Fähigkeit von Mitochondrien, sich unabhängig vom Zellzyklus zu teilen.",
            "Die Tatsache, dass Chloroplasten Photosynthese betreiben können.",
            "Die eigene DNA der Organellen und ihre doppelte Membranstruktur.",
            "Die chemische Ähnlichkeit zwischen Mitochondrien und modernen Parasiten.",
            "Die Beobachtung, dass Bakterien häufig in Pflanzenzellen eindringen.",
          ],
          correctOption: 2,
          explanation:
            "Der Text nennt als Belege für die Endosymbiontentheorie die eigene DNA von Mitochondrien und Chloroplasten sowie ihre doppelte Membranstruktur.",
        },
        {
          id: "tv7-5-q3",
          question: "Wie unterscheidet der Text Kommensalismus von Parasitismus?",
          options: [
            "Beim Kommensalismus leben beide Organismen getrennt, beim Parasitismus zusammen.",
            "Beim Kommensalismus profitiert ein Partner, ohne dem anderen zu schaden, beim Parasitismus profitiert ein Partner auf Kosten des anderen.",
            "Kommensalismus kommt nur bei Pflanzen vor, Parasitismus nur bei Tieren.",
            "Kommensalismus ist eine kurzfristige Beziehung, Parasitismus dauert lebenslang.",
            "Beim Kommensalismus werden Nährstoffe geteilt, beim Parasitismus werden Gene ausgetauscht.",
          ],
          correctOption: 1,
          explanation:
            "Der Text erklärt, dass beim Kommensalismus ein Partner profitiert, während der andere weder Vor- noch Nachteile erfährt, und beim Parasitismus ein Partner auf Kosten des anderen profitiert.",
        },
        {
          id: "tv7-5-q4",
          question:
            "Welche Schlussfolgerung lässt sich über die ökologische Rolle von Parasiten ziehen?",
          options: [
            "Parasiten nur schädlich.",
            "Kein Einfluss auf Populationsdynamik.",
            "Trotz Schädigung des Wirts wichtig für Ökosysteme; regulieren Populationen und fördern Biodiversität.",
            "Parasitismus Übergangsform zwischen Kommensalismus und Mutualismus.",
            "Parasiten profitieren langfristig nicht.",
          ],
          correctOption: 2,
          explanation:
            "Parasiten schaden dem Wirt, sind aber wichtige Bestandteile von Ökosystemen.",
        },
      ],
    },
  ],
};

const set8: TVTextSet = {
  id: "tv-set-8",
  name: "Set 8: Neurowissenschaft und Ethik",
  difficulty: "schwer",
  texts: [
    {
      id: "tv8-1",
      title: "Neurotransmitter und ihre Rolle im Nervensystem",
      content:
        "Neurotransmitter sind chemische Botenstoffe, die die Signalübertragung zwischen " +
        "Nervenzellen an spezialisierten Kontaktstellen, den Synapsen, ermöglichen. Wenn ein " +
        "elektrisches Signal, das sogenannte Aktionspotenzial, das Ende einer Nervenzelle " +
        "erreicht, werden Neurotransmitter aus kleinen Bläschen, den synaptischen Vesikeln, in " +
        "den synaptischen Spalt freigesetzt. Dort binden sie an spezifische Rezeptoren auf der " +
        "nachgeschalteten Zelle und lösen entweder eine erregende oder eine hemmende Wirkung " +
        "aus. Zu den bekanntesten erregenden Neurotransmittern zählt Glutamat, das an etwa " +
        "80 Prozent aller erregenden Synapsen im Gehirn beteiligt ist und eine zentrale Rolle " +
        "bei Lernprozessen und der Gedächtnisbildung spielt. Sein hemmendes Gegenstück ist " +
        "die Gamma-Aminobuttersäure, kurz GABA, die neuronale Aktivität dämpft und so vor " +
        "übermäßiger Erregung schützt. Ein Ungleichgewicht zwischen Glutamat und GABA wird " +
        "mit neurologischen Erkrankungen wie Epilepsie in Verbindung gebracht, bei der eine " +
        "unkontrollierte neuronale Erregung zu Krampfanfällen führt. Der Neurotransmitter " +
        "Dopamin ist an der Steuerung von Motivation, Belohnung und motorischen Funktionen " +
        "beteiligt. Ein Mangel an Dopamin in bestimmten Hirnregionen, insbesondere in der " +
        "Substantia nigra, ist das zentrale Merkmal der Parkinson-Krankheit, die sich durch " +
        "Zittern, Muskelsteifheit und verlangsamte Bewegungen äußert. Umgekehrt wird eine " +
        "übermäßige Dopaminaktivität in bestimmten Hirnarealen mit der Entstehung von " +
        "Schizophrenie in Zusammenhang gebracht. Serotonin beeinflusst Stimmung, Schlaf und " +
        "Appetit. Viele Antidepressiva, die sogenannten selektiven Serotonin-Wiederaufnahmehemmer " +
        "oder SSRI, wirken, indem sie den Abbau von Serotonin im synaptischen Spalt verlangsamen " +
        "und so dessen Konzentration erhöhen. Nach der Signalübertragung müssen Neurotransmitter " +
        "aus dem synaptischen Spalt entfernt werden, um eine Daueraktivierung zu verhindern. " +
        "Dies geschieht durch drei Mechanismen: enzymatischen Abbau, Wiederaufnahme in die " +
        "präsynaptische Zelle durch spezielle Transporterproteine oder Diffusion aus dem " +
        "synaptischen Spalt. Störungen in diesen Prozessen können zu einer Vielzahl " +
        "neuropsychiatrischer Erkrankungen beitragen und bilden den Ansatzpunkt vieler " +
        "moderner Psychopharmaka, die gezielt in die Neurotransmitter-Systeme eingreifen.",
      questions: [
        {
          id: "tv8-1-q1",
          question: "Welche Funktion wird im Text dem Neurotransmitter GABA zugeschrieben?",
          options: [
            "GABA ist an etwa 80 Prozent aller erregenden Synapsen beteiligt.",
            "GABA steuert Motivation und Belohnung im Dopaminsystem.",
            "GABA dämpft neuronale Aktivität und schützt vor übermäßiger Erregung.",
            "GABA reguliert den Schlaf-Wach-Rhythmus durch Beeinflussung der Melatoninproduktion.",
            "GABA fördert die Wiederaufnahme von Serotonin in die präsynaptische Zelle.",
          ],
          correctOption: 2,
          explanation:
            "Der Text beschreibt GABA als hemmendes Gegenstück zu Glutamat, das neuronale Aktivität dämpft und vor übermäßiger Erregung schützt.",
        },
        {
          id: "tv8-1-q2",
          question: "Wie wirken SSRI laut dem Text?",
          options: [
            "Sie steigern die Dopaminproduktion in der Substantia nigra.",
            "Sie blockieren die Glutamat-Rezeptoren und verhindern so epileptische Anfälle.",
            "Sie verlangsamen den Abbau von Serotonin im synaptischen Spalt und erhöhen dessen Konzentration.",
            "Sie fördern die Freisetzung von GABA aus den synaptischen Vesikeln.",
            "Sie beschleunigen den enzymatischen Abbau überschüssiger Neurotransmitter.",
          ],
          correctOption: 2,
          explanation:
            "Im Text wird erläutert, dass SSRI wirken, indem sie den Abbau von Serotonin im synaptischen Spalt verlangsamen und so dessen Konzentration erhöhen.",
        },
        {
          id: "tv8-1-q3",
          question:
            "Welche Schlussfolgerung lässt sich über die Entfernung von Neurotransmittern ziehen?",
          options: [
            "Glutamat und GABA im Gleichgewicht.",
            "Alle Neurotransmitter werden nach Signal abgebaut.",
            "Neurotransmitter werden durch enzymatischen Abbau, Wiederaufnahme oder Diffusion entfernt.",
            "Serotonin reguliert die Wiederaufnahme aller Neurotransmitter.",
            "Aktionspotenzial wird in Vesikel gespeichert.",
          ],
          correctOption: 2,
          explanation:
            "Drei Mechanismen: enzymatischer Abbau, Wiederaufnahme durch Transporterproteine und Diffusion.",
        },
        {
          id: "tv8-1-q4",
          question: "Was ist die Hauptaussage des Textes über Neurotransmitter?",
          options: [
            "Einziges Problem ist GABA-Mangel.",
            "Neurotransmitter-Ungleichgewichte sind selten und klinisch irrelevant.",
            "Chemische Botenstoffe übertragen Signale an Synapsen; Ungleichgewichte führen zu neuropsychiatrischen Erkrankungen.",
            "Glutamat ist der einzige Neurotransmitter im Gehirn.",
            "Dopamin hat keine Auswirkungen auf Bewegung.",
          ],
          correctOption: 2,
          explanation:
            "Neurotransmitter als chemische Botenstoffe an Synapsen; Ungleichgewichte führen zu Erkrankungen.",
        },
      ],
    },
    {
      id: "tv8-2",
      title: "Moderne Krebsforschung und Immuntherapie",
      content:
        "Krebs ist ein Sammelbegriff für eine Gruppe von Erkrankungen, bei denen Zellen " +
        "unkontrolliert wachsen und sich teilen, wobei sie gesundes Gewebe verdrängen und " +
        "zerstören können. Die Entstehung von Krebs, die sogenannte Karzinogenese, ist ein " +
        "mehrstufiger Prozess, der durch Mutationen in Genen ausgelöst wird, die das Zellwachstum " +
        "und die Zellteilung regulieren. Dabei spielen zwei Genklassen eine besondere Rolle: " +
        "Onkogene, die bei Aktivierung das Zellwachstum unkontrolliert antreiben, und " +
        "Tumorsuppressorgene, deren Inaktivierung die natürlichen Bremsen der Zellteilung " +
        "aufhebt. Ein prominentes Beispiel für ein Tumorsuppressorgen ist p53, das als Wächter " +
        "des Genoms bezeichnet wird, da es beschädigte Zellen in den programmierten Zelltod, " +
        "die Apoptose, treiben kann. Mutationen im p53-Gen finden sich in über der Hälfte " +
        "aller menschlichen Tumoren. Neben der klassischen Chemotherapie, die sich teilende " +
        "Zellen unspezifisch angreift und daher erhebliche Nebenwirkungen verursacht, hat sich " +
        "in den letzten Jahren die Immuntherapie als vielversprechender Ansatz etabliert. " +
        "Ein revolutionärer Durchbruch war die Entwicklung der Immuncheckpoint-Inhibitoren, " +
        "für die James Allison und Tasuku Honjo 2018 den Nobelpreis für Physiologie oder " +
        "Medizin erhielten. Normalerweise verfügt das Immunsystem über Kontrollpunkte, " +
        "sogenannte Checkpoints, die verhindern, dass T-Zellen körpereigenes Gewebe angreifen. " +
        "Krebszellen nutzen diese Mechanismen jedoch aus, indem sie Checkpoint-Proteine auf " +
        "ihrer Oberfläche exprimieren und so der Immunüberwachung entgehen. Checkpoint-Inhibitoren " +
        "blockieren diese Proteine und ermöglichen es dem Immunsystem, Krebszellen wieder zu " +
        "erkennen und zu zerstören. Ein weiterer innovativer Ansatz ist die CAR-T-Zelltherapie, " +
        "bei der T-Zellen des Patienten entnommen, im Labor gentechnisch verändert und dann " +
        "zurückgegeben werden. Die modifizierten Zellen tragen einen chimären Antigenrezeptor, " +
        "der sie befähigt, bestimmte Oberflächenmerkmale von Krebszellen gezielt zu erkennen. " +
        "Besonders bei bestimmten Formen von Blutkrebs wie der akuten lymphatischen Leukämie " +
        "hat die CAR-T-Zelltherapie beeindruckende Remissionsraten gezeigt. Dennoch bestehen " +
        "Herausforderungen wie der sogenannte Zytokinsturm, eine potenziell lebensbedrohliche " +
        "überschießende Immunreaktion, sowie die hohen Kosten und die komplexe Herstellung.",
      questions: [
        {
          id: "tv8-2-q1",
          question: "Wie nutzen Krebszellen laut dem Text die Immuncheckpoints aus?",
          options: [
            "Sie zerstören die T-Zellen direkt durch die Freisetzung toxischer Substanzen.",
            "Sie mutieren ihre DNA so schnell, dass das Immunsystem sie nicht mehr erkennen kann.",
            "Sie exprimieren Checkpoint-Proteine auf ihrer Oberfläche und entgehen so der Immunüberwachung.",
            "Sie blockieren die Produktion von Antikörpern durch B-Lymphozyten.",
            "Sie wandern in Gewebe ein, die vom Immunsystem nicht überwacht werden.",
          ],
          correctOption: 2,
          explanation:
            "Der Text erklärt, dass Krebszellen Checkpoint-Proteine auf ihrer Oberfläche exprimieren und so der Immunüberwachung entgehen.",
        },
        {
          id: "tv8-2-q2",
          question: "Welche Rolle spielt das Gen p53 laut dem Text?",
          options: [
            "Es ist ein Onkogen, das bei Aktivierung das Zellwachstum unkontrolliert antreibt.",
            "Es kodiert für einen chimären Antigenrezeptor, der Krebszellen erkennt.",
            "Es ist ein Tumorsuppressorgen, das beschädigte Zellen in den programmierten Zelltod treiben kann.",
            "Es reguliert die Produktion von Checkpoint-Proteinen auf der Zelloberfläche.",
            "Es steuert die Differenzierung von T-Zellen zu CAR-T-Zellen.",
          ],
          correctOption: 2,
          explanation:
            "Im Text wird p53 als Tumorsuppressorgen beschrieben, das als Wächter des Genoms gilt und beschädigte Zellen in die Apoptose treiben kann.",
        },
        {
          id: "tv8-2-q3",
          question: "Welches Risiko der CAR-T-Zelltherapie wird im Text genannt?",
          options: [
            "Die dauerhafte Unterdrückung des Immunsystems durch die modifizierten Zellen.",
            "Die Entstehung neuer Mutationen in den gentechnisch veränderten T-Zellen.",
            "Der sogenannte Zytokinsturm, eine potenziell lebensbedrohliche überschießende Immunreaktion.",
            "Die Abstoßung der modifizierten Zellen durch das körpereigene Immunsystem.",
            "Die Unfähigkeit der CAR-T-Zellen, zwischen Krebszellen und gesunden Zellen zu unterscheiden.",
          ],
          correctOption: 2,
          explanation:
            "Der Text nennt den Zytokinsturm als eine potenziell lebensbedrohliche überschießende Immunreaktion und Herausforderung der CAR-T-Zelltherapie.",
        },
        {
          id: "tv8-2-q4",
          question:
            "Welche Schlussfolgerung lässt sich über die Herausforderungen der CAR-T-Therapie ziehen?",
          options: [
            "CAR-T-Zellen sind vollkommen risikofrei.",
            "CAR-T-Therapie hat keine Nebenwirkungen.",
            "Die hohen Kosten und der Zytokinsturm sind zentrale Herausforderungen, die den breiten Einsatz begrenzen.",
            "CAR-T-Therapie wirkt nur bei festen Tumoren.",
            "CAR-T-Zellen werden nach der Therapie vom Körper abgebaut.",
          ],
          correctOption: 2,
          explanation:
            "Der Text nennt Zytokinsturm und hohe Kosten als zentrale Herausforderungen.",
        },
      ],
    },
    {
      id: "tv8-3",
      title: "CRISPR-Cas9 – Die Genschere",
      content:
        "Die Entdeckung des CRISPR-Cas9-Systems hat die Molekularbiologie revolutioniert und " +
        "gilt als einer der bedeutendsten wissenschaftlichen Durchbrüche des 21. Jahrhunderts. " +
        "CRISPR steht für Clustered Regularly Interspaced Short Palindromic Repeats und " +
        "bezeichnet kurze, sich wiederholende DNA-Sequenzen, die in den Genomen vieler Bakterien " +
        "vorkommen. Zusammen mit dem Enzym Cas9 bilden sie ein natürliches Immunsystem der " +
        "Bakterien gegen Viren, sogenannte Bakteriophagen. Wenn ein Bakterium eine Phageninfektion " +
        "überlebt, speichert es Fragmente der viralen DNA zwischen den CRISPR-Sequenzen. Bei " +
        "einer erneuten Infektion durch denselben Phagen wird diese gespeicherte Information " +
        "genutzt, um eine komplementäre RNA zu erzeugen, die sogenannte Guide-RNA. Diese führt " +
        "das Cas9-Enzym gezielt zu der passenden Stelle im viralen Genom, wo Cas9 die DNA " +
        "durchschneidet und den Phagen damit unschädlich macht. Die Biochemikerinnen Jennifer " +
        "Doudna und Emmanülle Charpentier erkannten das Potenzial dieses Systems und zeigten " +
        "2012, dass es sich zu einem universellen Werkzeug für die Genombearbeitung umfunktionieren " +
        "lässt. Indem man eine synthetische Guide-RNA entwirft, die zu einer beliebigen Zielsequenz " +
        "komplementär ist, kann Cas9 die DNA an genau dieser Stelle schneiden. Die Zelle repariert " +
        "den Schnitt anschließend mithilfe zelleigener Reparaturmechanismen, wobei Gene " +
        "ausgeschaltet, verändert oder durch neue Sequenzen ersetzt werden können. Für diese " +
        "Arbeit erhielten Doudna und Charpentier 2020 den Nobelpreis für Chemie. Die " +
        "Anwendungsmöglichkeiten sind enorm. In der Landwirtschaft werden CRISPR-editierte " +
        "Pflanzen entwickelt, die resistent gegen Schädlinge oder Dürre sind. In der " +
        "Grundlagenforschung ermöglicht die Technologie, die Funktion einzelner Gene präzise " +
        "zu untersuchen. In der Medizin werden klinische Studien durchgeführt, um genetische " +
        "Erkrankungen wie die Sichelzellenanämie zu behandeln, bei der eine einzelne " +
        "Punktmutation im Hämoglobin-Gen die Verformung roter Blutkörperchen verursacht. " +
        "Dennoch wirft die Technologie ethische Fragen auf, insbesondere hinsichtlich der " +
        "Keimbahnedierung, also der Veränderung von Genen in Ei- oder Samenzellen, die an " +
        "künftige Generationen weitergegeben würden. Die meisten Länder haben Keimbahneingriffe " +
        "am Menschen daher verboten oder stark eingeschränkt.",
      questions: [
        {
          id: "tv8-3-q1",
          question:
            "Welche natürliche Funktion hat das CRISPR-Cas9-System laut dem Text in Bakterien?",
          options: [
            "Es reguliert die Zellteilung und verhindert unkontrolliertes Wachstum.",
            "Es dient als Immunsystem gegen Viren, indem es deren DNA gezielt zerschneidet.",
            "Es repariert Mutationen in der bakteriellen DNA nach Strahlenschäden.",
            "Es steuert den horizontalen Gentransfer zwischen verschiedenen Bakterienarten.",
            "Es produziert Antibiotika, die konkurrierende Mikroorganismen abtöten.",
          ],
          correctOption: 1,
          explanation:
            "Der Text beschreibt das CRISPR-Cas9-System als natürliches Immunsystem der Bakterien gegen Viren (Bakteriophagen), das deren DNA gezielt durchschneidet.",
        },
        {
          id: "tv8-3-q2",
          question:
            "Was versteht man laut dem Text unter Keimbahnedierung und warum ist sie umstritten?",
          options: [
            "Die Veränderung von Körperzellen, die nicht vererbt wird, aber Nebenwirkungen haben kann.",
            "Die Veränderung von Genen in Ei- oder Samenzellen, die an künftige Generationen weitergegeben würden.",
            "Die Erzeugung synthetischer Organismen im Labor, die nicht natürlich vorkommen.",
            "Die Veränderung von Pflanzengenen, die das ökologische Gleichgewicht stören könnte.",
            "Die Manipulation der Guide-RNA, um mehrere Gene gleichzeitig auszuschalten.",
          ],
          correctOption: 1,
          explanation:
            "Der Text definiert Keimbahnedierung als die Veränderung von Genen in Ei- oder Samenzellen, die an künftige Generationen weitergegeben würden, und nennt dies als ethisch besonders umstritten.",
        },
        {
          id: "tv8-3-q3",
          question: "Was ist die Hauptaussage des Textes über CRISPR-Cas9?",
          options: [
            "Doudna und Charpentier erfanden CRISPR als Waffe gegen Bakterien.",
            "CRISPR-Cas9 wurde 2020 erstmals an Pflanzen angewendet.",
            "CRISPR-Cas9 ist ein vielseitiges Genomwerkzeug aus einem bakteriellen Abwehrsystem mit Anwendungen in Landwirtschaft, Forschung und Medizin.",
            "CRISPR-Cas9 kann nur Gensequenzen löschen, nicht ersetzen.",
            "Keimbahnedierung ist weltweit erlaubt.",
          ],
          correctOption: 2,
          explanation:
            "CRISPR-Cas9: natürliches bakterielles Immunsystem, zu universalem Genomwerkzeug umfunktioniert.",
        },
        {
          id: "tv8-3-q4",
          question:
            "Welche Schlussfolgerung lässt sich über die Flexibilität von CRISPR-Cas9 ziehen?",
          options: [
            "Die Guide-RNA kann beliebige Zielsequenzen erkennen, weil Cas9 ohne sie nicht funktioniert.",
            "Da Cas9 die DNA an der Zielsequenz schneidet und zelleigene Reparaturmechanismen die Bearbeitung ermöglichen, lässt sich jedes Gen gezielt verändern.",
            "CRISPR funktioniert nur in Bakterienzellen.",
            "Die Guide-RNA ist immer identisch, unabhängig von der Zielsequenz.",
            "Cas9 kann nur DNA schneiden, nicht reparieren.",
          ],
          correctOption: 1,
          explanation:
            "Guide-RNA synthetisch für jede Zielsequenz entwerfbar → universell einsetzbares Werkzeug.",
        },
      ],
    },
    {
      id: "tv8-4",
      title: "Biöthik in der modernen Medizin",
      content:
        "Die Biöthik ist ein interdisziplinäres Fachgebiet, das sich mit den moralischen " +
        "Fragen befasst, die durch Fortschritte in den Biowissenschaften und der Medizin " +
        "aufgeworfen werden. Ihre Ursprünge als eigenständige Disziplin lassen sich auf die " +
        "1970er-Jahre zurückführen, als der amerikanische Onkologe Van Rensselär Potter den " +
        "Begriff Biöthics prägte, um die Notwendigkeit einer Brücke zwischen biologischem " +
        "Wissen und menschlichen Wertvorstellungen zu betonen. Vier grundlegende Prinzipien, " +
        "die von Tom Beauchamp und James Childress in ihrem Werk Principles of Biomedical " +
        "Ethics formuliert wurden, bilden das Fundament der modernen biomedizinischen Ethik: " +
        "das Prinzip der Autonomie, der Wohltätigkeit, des Nichtschadens und der Gerechtigkeit. " +
        "Das Autonomieprinzip verlangt die Achtung der Selbstbestimmung des Patienten, was sich " +
        "im Konzept der informierten Einwilligung widerspiegelt. Patienten müssen über Nutzen, " +
        "Risiken und Alternativen einer Behandlung aufgeklärt werden und frei entscheiden " +
        "können. Das Prinzip der Wohltätigkeit verpflichtet Ärzte, zum Wohle des Patienten zu " +
        "handeln, während das Prinzip des Nichtschadens fordert, Schaden zu vermeiden oder " +
        "zumindest zu minimieren. Das Gerechtigkeitsprinzip verlangt eine faire Verteilung von " +
        "Gesundheitsressourcen und den gleichberechtigten Zugang zur medizinischen Versorgung. " +
        "In der Praxis geraten diese Prinzipien häufig in Konflikt miteinander. Ein klassisches " +
        "Dilemma entsteht, wenn ein Patient eine medizinisch notwendige Behandlung ablehnt: " +
        "Die Autonomie des Patienten steht dann im Widerspruch zur ärztlichen Pflicht der " +
        "Wohltätigkeit. Auch am Lebensende stellen sich komplexe ethische Fragen. Die " +
        "Palliativmedizin, die auf die Linderung von Leid bei unheilbar Kranken ausgerichtet " +
        "ist, unterscheidet zwischen aktiver Sterbehilfe, bei der der Tod gezielt herbeigeführt " +
        "wird, und passiver Sterbehilfe, bei der lebensverlängernde Maßnahmen unterlassen " +
        "werden. Die rechtliche und ethische Bewertung dieser Praktiken variiert erheblich " +
        "zwischen verschiedenen Ländern und Kulturen. Neue Technologien wie die Genomedierung " +
        "und die künstliche Intelligenz in der Diagnostik stellen die Biöthik vor zusätzliche " +
        "Herausforderungen, da sie Fragen nach genetischer Diskriminierung, Datenschutz und " +
        "der Verantwortung bei algorithmischen Fehlentscheidungen aufwerfen.",
      questions: [
        {
          id: "tv8-4-q1",
          question:
            "Welche vier Grundprinzipien der biomedizinischen Ethik werden im Text genannt?",
          options: [
            "Wahrheit, Freiheit, Gleichheit und Solidarität.",
            "Autonomie, Wohltätigkeit, Nichtschaden und Gerechtigkeit.",
            "Transparenz, Effizienz, Nachhaltigkeit und Verantwortung.",
            "Fürsorge, Treue, Ehrlichkeit und Respekt.",
            "Selbstbestimmung, Schadensbegrenzung, Gewinnmaximierung und Forschungsfreiheit.",
          ],
          correctOption: 1,
          explanation:
            "Der Text nennt Autonomie, Wohltätigkeit, Nichtschaden und Gerechtigkeit als die vier grundlegenden Prinzipien nach Beauchamp und Childress.",
        },
        {
          id: "tv8-4-q2",
          question: "Welches ethische Dilemma beschreibt der Text als klassisches Beispiel?",
          options: [
            "Die Frage, ob genetisch veränderte Lebensmittel zugelassen werden sollten.",
            "Die Entscheidung, welcher Patient bei Organknappheit ein Spenderorgan erhält.",
            "Der Konflikt zwischen Patientenautonomie und ärztlicher Wohltätigkeit, wenn ein Patient eine notwendige Behandlung ablehnt.",
            "Die Frage, ob medizinische Forschung an Tieren ethisch vertretbar ist.",
            "Der Widerspruch zwischen Datenschutz und dem Nutzen genetischer Datenbanken.",
          ],
          correctOption: 2,
          explanation:
            "Der Text beschreibt als klassisches Dilemma die Situation, in der ein Patient eine medizinisch notwendige Behandlung ablehnt und so Autonomie und Wohltätigkeit in Konflikt geraten.",
        },
        {
          id: "tv8-4-q3",
          question: "Wie unterscheidet der Text aktive von passiver Sterbehilfe?",
          options: [
            "Aktive Sterbehilfe erfolgt durch Medikamente, passive durch chirurgische Eingriffe.",
            "Bei aktiver Sterbehilfe wird der Tod gezielt herbeigeführt, bei passiver werden lebensverlängernde Maßnahmen unterlassen.",
            "Aktive Sterbehilfe ist freiwillig, passive geschieht ohne Einwilligung des Patienten.",
            "Aktive Sterbehilfe betrifft unheilbar Kranke, passive gesunde Menschen in Notsituationen.",
            "Aktive Sterbehilfe ist weltweit legal, passive hingegen in den meisten Ländern verboten.",
          ],
          correctOption: 1,
          explanation:
            "Der Text unterscheidet aktive Sterbehilfe, bei der der Tod gezielt herbeigeführt wird, von passiver Sterbehilfe, bei der lebensverlängernde Maßnahmen unterlassen werden.",
        },
        {
          id: "tv8-4-q4",
          question:
            "Welche Schlussfolgerung lässt sich über die Bewertung von Sterbehilfe im Text ziehen?",
          options: [
            "Nur aktive Sterbehilfe ist ethisch problematisch.",
            "Alle Sterbehilfeformen sind weltweit verboten.",
            "Die rechtliche und ethische Bewertung von aktiver und passiver Sterbehilfe unterscheidet sich erheblich zwischen Ländern und Kulturen.",
            "Palliativmedizin und Sterbehilfe sind identisch.",
            "Der Arzt entscheidet allein über Sterbehilfe.",
          ],
          correctOption: 2,
          explanation:
            "Bewertung von Sterbehilfe variiert erheblich zwischen Ländern, was globale Standards erschwert.",
        },
      ],
    },
    {
      id: "tv8-5",
      title: "Forensische Medizin – Wissenschaft im Dienst der Justiz",
      content:
        "Die forensische Medizin, auch Rechtsmedizin genannt, ist ein Teilgebiet der Medizin, " +
        "das sich mit der Anwendung medizinischer Kenntnisse auf rechtliche Fragestellungen " +
        "befasst. Rechtsmediziner untersuchen unter anderem die Todesursache und den " +
        "Todeszeitpunkt bei unklaren Todesfällen, begutachten Verletzungen im Kontext von " +
        "Gewaltverbrechen und erstellen Gutachten für Gerichte. Ein zentrales Aufgabengebiet ist " +
        "die Obduktion, also die systematische Öffnung und Untersuchung eines Leichnams. Dabei " +
        "werden äußere und innere Befunde erhoben, Gewebeproben für histologische Untersuchungen " +
        "entnommen und toxikologische Analysen durchgeführt, um mögliche Vergiftungen " +
        "nachzuweisen. Die Bestimmung des Todeszeitpunkts ist eine besondere Herausforderung. " +
        "Rechtsmediziner nutzen dafür verschiedene Todeszeichen, die in einem vorhersehbaren " +
        "zeitlichen Ablauf auftreten. Die Totenstarre, auch Rigor mortis genannt, beginnt " +
        "typischerweise zwei bis vier Stunden nach dem Tod und erreicht nach etwa sechs bis " +
        "zwölf Stunden ihr Maximum, bevor sie sich nach 24 bis 48 Stunden wieder löst. " +
        "Totenflecke, die durch das Absinken des Blutes in die tieferliegenden Körperpartien " +
        "entstehen, werden in den ersten Stunden nach dem Tod sichtbar und sind zunächst " +
        "wegdrückbar, fixieren sich jedoch nach etwa 12 bis 24 Stunden, wenn das Blut in das " +
        "Gewebe diffundiert. Die Abkühlung des Körpers auf Umgebungstemperatur folgt einer " +
        "mathematisch beschreibbaren Kurve, die zur Todeszeitberechnung herangezogen wird. " +
        "Die forensische Genetik hat die Rechtsmedizin seit den 1980er-Jahren grundlegend " +
        "verändert. Der genetische Fingerabdruck, der auf der Analyse sogenannter Short Tandem " +
        "Repeats beruht, kurze sich wiederholende DNA-Sequenzen, die zwischen Individuen " +
        "variieren, ermöglicht eine nahezu eindeutige Identifizierung von Personen. Mit modernen " +
        "Methoden der DNA-Analyse können selbst kleinste Spuren wie einzelne Hautzellen oder " +
        "Haare ausgewertet werden. Die forensische Medizin steht dabei im Spannungsfeld " +
        "zwischen dem Streben nach Aufklärung und dem Schutz der Persönlichkeitsrechte, " +
        "insbesondere wenn es um die DNA-Massenscreenings oder die Nutzung forensischer " +
        "Datenbanken geht.",
      questions: [
        {
          id: "tv8-5-q1",
          question:
            "In welcher zeitlichen Reihenfolge beschreibt der Text das Auftreten der Totenstarre?",
          options: [
            "Sie beginnt sofort nach dem Tod und löst sich nach sechs Stunden wieder.",
            "Sie beginnt nach 24 Stunden und bleibt dauerhaft bestehen.",
            "Sie beginnt zwei bis vier Stunden nach dem Tod, erreicht nach sechs bis zwölf Stunden ihr Maximum und löst sich nach 24 bis 48 Stunden.",
            "Sie beginnt gleichzeitig mit den Totenflecken und löst sich nach 12 Stunden.",
            "Sie setzt erst nach dem vollständigen Abkühlen des Körpers ein.",
          ],
          correctOption: 2,
          explanation:
            "Der Text beschreibt, dass die Totenstarre zwei bis vier Stunden nach dem Tod beginnt, nach sechs bis zwölf Stunden ihr Maximum erreicht und sich nach 24 bis 48 Stunden wieder löst.",
        },
        {
          id: "tv8-5-q2",
          question: "Worauf beruht der genetische Fingerabdruck laut dem Text?",
          options: [
            "Auf der Analyse der gesamten Genomsequenz eines Individuums.",
            "Auf der Untersuchung von Chromosomenaberrationen in weißen Blutkörperchen.",
            "Auf der Analyse von Short Tandem Repeats, kurzen sich wiederholenden DNA-Sequenzen, die zwischen Individuen variieren.",
            "Auf der Bestimmung der Blutgruppe und des Rhesusfaktors.",
            "Auf dem Vergleich mitochondrialer DNA-Sequenzen verschiedener Personen.",
          ],
          correctOption: 2,
          explanation:
            "Der Text erklärt, dass der genetische Fingerabdruck auf der Analyse sogenannter Short Tandem Repeats beruht, kurze sich wiederholende DNA-Sequenzen, die zwischen Individuen variieren.",
        },
        {
          id: "tv8-5-q3",
          question: "Was ist die Hauptaussage des Textes über die forensische Medizin?",
          options: [
            "Forensische Medizin ist ausschließlich für Mordermittlungen zuständig.",
            "Genetischer Fingerabdruck ist seit 1970 in Verwendung.",
            "Forensische Medizin wendet medizinisches Wissen auf rechtliche Fragen an; DNA-Analyse ermöglicht eindeutige Identifikation, wirft aber Datenschutzfragen auf.",
            "Totenflecke entstehen durch chemische Reaktionen, nicht durch Blutabsinken.",
            "Die Obduktion ist in Österreich verboten.",
          ],
          correctOption: 2,
          explanation:
            "Forensische Medizin verbindet medizinisches Wissen mit rechtlichen Aufgaben.",
        },
        {
          id: "tv8-5-q4",
          question:
            "Welche Schlussfolgerung lässt sich über Totenflecke als Todeszeitindikator ziehen?",
          options: [
            "Totenflecke fixieren sich sofort nach dem Tod.",
            "Totenflecke entstehen durch Blutabsinken, sind anfänglich wegdrückbar und fixieren sich nach 12-24 Stunden.",
            "Totenflecke sind dauerhaft wegdrückbar.",
            "Totenflecke entstehen nur bei Kälte.",
            "Totenflecke und Totenstarre treten gleichzeitig auf.",
          ],
          correctOption: 1,
          explanation:
            "Totenflecke fixieren sich nach 12-24 Stunden. Nützlicher Zeitindikator, aber kein präzises Instrument.",
        },
      ],
    },
  ],
};

const set9: TVTextSet = {
  id: "tv-set-9",
  name: "Set 9: Gesundheit und Gesellschaft",
  difficulty: "schwer",
  texts: [
    {
      id: "tv9-1",
      title: "Klimawandel und menschliche Gesundheit",
      content:
        "Der Klimawandel wird zunehmend als eine der gravierendsten Bedrohungen für die " +
        "menschliche Gesundheit im 21. Jahrhundert erkannt. Die Weltgesundheitsorganisation " +
        "schätzt, dass zwischen 2030 und 2050 jährlich etwa 250.000 zusätzliche Todesfälle " +
        "auf die Folgen des Klimawandels zurückzuführen sein werden, bedingt durch Hitzestress, " +
        "Unterernährung, Durchfallerkrankungen und die Ausbreitung von Infektionskrankheiten. " +
        "Steigende Temperaturen wirken sich direkt auf die Gesundheit aus. Hitzewellen führen " +
        "zu einer erhöhten Sterblichkeit, insbesondere bei älteren Menschen, Kleinkindern und " +
        "Personen mit Vorerkrankungen des Herz-Kreislauf-Systems. Der menschliche Körper " +
        "reguliert seine Temperatur vor allem durch Schwitzen und die Erweiterung peripherer " +
        "Blutgefäße, doch ab einer Kombination von Temperatur und Luftfeuchtigkeit, die als " +
        "Feuchtkugeltemperatur über 35 Grad Celsius liegt, versagt diese Thermoregulation, und " +
        "es droht ein tödlicher Hitzschlag. Indirekt beeinflusst der Klimawandel die Gesundheit " +
        "über die Veränderung von Ökosystemen. Die Ausbreitung von Krankheitsüberträgern wie " +
        "der Tigermücke Ädes albopictus in bisher gemäßigte Breiten erhöht das Risiko für " +
        "Tropenkrankheiten wie Dengue-Fieber und Chikungunya in Regionen, die bislang davon " +
        "verschont waren. In Europa wurden bereits autochthone, also lokal übertragene Fälle " +
        "von Dengue-Fieber dokumentiert. Die Landwirtschaft leidet unter häufigeren Dürren " +
        "und Extremwetterereignissen, was die Ernährungssicherheit gefährdet und " +
        "Mangelernährung begünstigt. Zudem verschlechtert der Klimawandel die Luftqualität: " +
        "Höhere Temperaturen fördern die Bildung von bodennahem Ozon, einem Reizgas, das " +
        "Atemwegserkrankungen wie Asthma und chronisch obstruktive Lungenerkrankungen " +
        "verschlimmert. Auch die psychische Gesundheit ist betroffen. Studien zeigen einen " +
        "Zusammenhang zwischen steigenden Temperaturen und einer Zunahme von Aggressivität, " +
        "Angststörungen und Depressionen. Der Begriff Solastalgie wurde geprägt, um den " +
        "emotionalen Stress zu beschreiben, der durch die wahrgenommene Zerstörung der " +
        "vertrauten Umwelt entsteht. Experten fordern daher eine Anpassung der Gesundheitssysteme " +
        "an die klimatischen Veränderungen sowie eine konsequente Reduktion der Treibhausgasemissionen.",
      questions: [
        {
          id: "tv9-1-q1",
          question:
            "Ab welchem Schwellenwert versagt laut dem Text die menschliche Thermoregulation?",
          options: [
            "Ab einer Außentemperatur von 40 Grad Celsius bei niedriger Luftfeuchtigkeit.",
            "Ab einer Feuchtkugeltemperatur von über 35 Grad Celsius.",
            "Ab einer Kernkörpertemperatur von 38 Grad Celsius.",
            "Ab einer Luftfeuchtigkeit von über 90 Prozent unabhängig von der Temperatur.",
            "Ab einer Aufenthaltsdauer von mehr als vier Stunden bei Temperaturen über 30 Grad Celsius.",
          ],
          correctOption: 1,
          explanation:
            "Der Text beschreibt, dass ab einer Feuchtkugeltemperatur über 35 Grad Celsius die Thermoregulation des Körpers versagt und ein tödlicher Hitzschlag droht.",
        },
        {
          id: "tv9-1-q2",
          question: "Was bedeutet der Begriff Solastalgie laut dem Text?",
          options: [
            "Eine Allergie gegen Sonnenstrahlung, die durch den Klimawandel zunimmt.",
            "Eine chronische Erschöpfung durch anhaltende Hitzebelastung.",
            "Der emotionale Stress, der durch die wahrgenommene Zerstörung der vertrauten Umwelt entsteht.",
            "Die Angst vor zukünftigen Naturkatastrophen und ihren gesundheitlichen Folgen.",
            "Ein medizinischer Fachbegriff für klimabedingte Atemwegserkrankungen.",
          ],
          correctOption: 2,
          explanation:
            "Im Text wird Solastalgie als der emotionale Stress definiert, der durch die wahrgenommene Zerstörung der vertrauten Umwelt entsteht.",
        },
        {
          id: "tv9-1-q3",
          question:
            "Was ist die Hauptaussage des Textes über Klimawandel und menschliche Gesundheit?",
          options: [
            "Klimawandel betrifft nur tropische Regionen.",
            "Nur Hitzewellen sind relevant.",
            "Der Klimawandel gefährdet die Gesundheit direkt durch Hitzestress und indirekt durch Ausbreitung von Krankheiten, Luftqualitätsverschlechterung und psychische Folgen.",
            "Klimawandel hat keine Auswirkungen auf Infektionskrankheiten.",
            "Nur ältere Menschen sind durch Klimawandel gefährdet.",
          ],
          correctOption: 2,
          explanation:
            "Der Text beschreibt direkte Auswirkungen wie Hitzestress und indirekte wie Ausbreitung von Vektoren.",
        },
        {
          id: "tv9-1-q4",
          question:
            "Welche Schlussfolgerung lässt sich über die Ausbreitung von Tropenkrankheiten durch den Klimawandel ziehen?",
          options: [
            "Dengue-Fieber ist in Europa endemisch.",
            "Die Tigermücke überträgt nur Malaria.",
            "Weil erwärmte Regionen für Wärme-liebende Vektoren wie die Tigermücke geeignet werden, breiten sich Tropenkrankheiten in neue Gebiete aus.",
            "Dengue-Fieber wird nur durch direkte Berührung übertragen.",
            "Nur Malaria wird durch Klimawandel beeinflusst.",
          ],
          correctOption: 2,
          explanation: "Erwärmung macht neue Gebiete für die Tigermücke geeignet.",
        },
      ],
    },
    {
      id: "tv9-2",
      title: "Pandemien – Lektionen aus der Geschichte",
      content:
        "Pandemien, also die weltweite Ausbreitung von Infektionskrankheiten, haben die " +
        "Menschheitsgeschichte immer wieder entscheidend geprägt. Die verheerendste Pandemie " +
        "des Mittelalters war der Schwarze Tod, der zwischen 1347 und 1353 schätzungsweise " +
        "ein Drittel der europäischen Bevölkerung auslöschte. Verursacht wurde die Pest durch " +
        "das Bakterium Yersinia pestis, das über Flöhe von Ratten auf den Menschen übertragen " +
        "wurde. Die sozialen und wirtschaftlichen Folgen waren immens: Der Arbeitskräftemangel " +
        "führte zu einer Aufwertung der Arbeit und trug langfristig zum Niedergang des feudalen " +
        "Systems bei. Die Spanische Grippe von 1918 bis 1919, verursacht durch einen " +
        "H1N1-Inflünzavirus, infizierte schätzungsweise ein Drittel der damaligen " +
        "Weltbevölkerung und forderte zwischen 50 und 100 Millionen Todesopfer. Bemerkenswert " +
        "war, dass die höchste Sterblichkeit bei jungen Erwachsenen zwischen 20 und 40 Jahren " +
        "lag, was auf eine überschießende Immunantwort, den sogenannten Zytokinsturm, " +
        "zurückgeführt wird. Das Immunsystem dieser Altersgruppe reagierte so heftig auf das " +
        "Virus, dass es das eigene Lungengewebe schwer schädigte. Die moderne Virologie und " +
        "Epidemiologie haben seither erhebliche Fortschritte gemacht. Die Entwicklung von " +
        "Impfstoffen innerhalb weniger Monate, wie bei der COVID-19-Pandemie geschehen, wäre " +
        "vor wenigen Jahrzehnten undenkbar gewesen. Die mRNA-Technologie, die bei den " +
        "Impfstoffen von BioNTech/Pfizer und Moderna zum Einsatz kam, nutzt synthetisch " +
        "hergestellte Boten-RNA, die die Zellen des Geimpften anleitet, ein virales Protein " +
        "zu produzieren, gegen das dann eine Immunantwort aufgebaut wird. Dennoch hat die " +
        "COVID-19-Pandemie auch Schwächen offenbart: Die ungleiche Verteilung von Impfstoffen " +
        "zwischen reichen und armen Ländern, die Anfälligkeit globaler Lieferketten und die " +
        "Verbreitung von Fehlinformationen haben die Pandemiebekämpfung erheblich erschwert. " +
        "Experten warnen, dass zukünftige Pandemien wahrscheinlicher werden, da der " +
        "zunehmende Kontakt zwischen Menschen und Wildtieren durch Abholzung und " +
        "Lebensraumzerstörung das Risiko sogenannter Zoonosen erhöht, also der Übertragung " +
        "von Krankheitserregern vom Tier auf den Menschen.",
      questions: [
        {
          id: "tv9-2-q1",
          question:
            "Warum lag die höchste Sterblichkeit bei der Spanischen Grippe laut dem Text bei jungen Erwachsenen?",
          options: [
            "Weil junge Erwachsene aufgrund von Mangelernährung ein geschwächtes Immunsystem hatten.",
            "Weil das H1N1-Virus eine besondere Vorliebe für junge Zellen zeigte.",
            "Weil eine überschießende Immunantwort, ein Zytokinsturm, das eigene Lungengewebe schwer schädigte.",
            "Weil junge Erwachsene am häufigsten in überfüllten Kasernen lebten und dort infiziert wurden.",
            "Weil ältere Menschen durch frühere Grippewellen bereits immun waren.",
          ],
          correctOption: 2,
          explanation:
            "Der Text erklärt, dass die hohe Sterblichkeit bei jungen Erwachsenen auf eine überschießende Immunantwort (Zytokinsturm) zurückgeführt wird, bei der das Immunsystem das eigene Lungengewebe schwer schädigte.",
        },
        {
          id: "tv9-2-q2",
          question: "Wie funktionieren mRNA-Impfstoffe laut dem Text?",
          options: [
            "Sie enthalten abgeschwächte lebende Viren, die eine milde Infektion auslösen.",
            "Sie nutzen synthetische Boten-RNA, die die Zellen anleitet, ein virales Protein zu produzieren, gegen das eine Immunantwort aufgebaut wird.",
            "Sie bestehen aus gereinigten viralen Antikörpern, die direkt in den Blutkreislauf injiziert werden.",
            "Sie enthalten DNA-Fragmente des Virus, die dauerhaft in das menschliche Genom eingebaut werden.",
            "Sie blockieren die Rezeptoren, an die das Virus andockt, und verhindern so eine Infektion.",
          ],
          correctOption: 1,
          explanation:
            "Der Text beschreibt, dass mRNA-Impfstoffe synthetisch hergestellte Boten-RNA nutzen, die die Zellen des Geimpften anleitet, ein virales Protein zu produzieren, gegen das dann eine Immunantwort aufgebaut wird.",
        },
        {
          id: "tv9-2-q3",
          question: "Warum werden laut dem Text zukünftige Pandemien wahrscheinlicher?",
          options: [
            "Weil Antibiotika zunehmend unwirksam werden und neue Bakterien entstehen.",
            "Weil die Weltbevölkerung schrumpft und die Herdenimmunität abnimmt.",
            "Weil der zunehmende Kontakt zwischen Menschen und Wildtieren durch Lebensraumzerstörung das Zoonose-Risiko erhöht.",
            "Weil Impfstoffe immer langsamer entwickelt werden und nicht mehr wirksam sind.",
            "Weil der internationale Flugverkehr vollständig dereguliert wurde.",
          ],
          correctOption: 2,
          explanation:
            "Der Text nennt den zunehmenden Kontakt zwischen Menschen und Wildtieren durch Abholzung und Lebensraumzerstörung als Faktor, der das Risiko von Zoonosen erhöht.",
        },
        {
          id: "tv9-2-q4",
          question: "Was ist die Hauptaussage des Textes über Pandemien und ihre Bekämpfung?",
          options: [
            "Die Spanische Grippe betraf nur ältere Menschen.",
            "Pandemien sind durch moderne Medizin vollständig vermeidbar.",
            "Pandemien werden durch Zoonosen wahrscheinlicher; Ungleichheiten bei Impfstoffverteilung und Fehlinformationen erschwerten die COVID-19-Bekämpfung.",
            "mRNA-Impfstoffe sind die einzige wirksame Schutzmaßnahme.",
            "Der Schwarze Tod hatte keine sozialen Folgen.",
          ],
          correctOption: 2,
          explanation:
            "Pandemien werden durch Zoonosen wahrscheinlicher; Ungleichheiten bei Impfstoffverteilung sind zentrale Hindernisse.",
        },
      ],
    },
    {
      id: "tv9-3",
      title: "Psychoneuroimmunologie – Die Verbindung von Psyche und Immunsystem",
      content:
        "Die Psychoneuroimmunologie, kurz PNI, ist ein relativ junges Forschungsfeld, das die " +
        "wechselseitigen Beziehungen zwischen psychischen Prozessen, dem Nervensystem und dem " +
        "Immunsystem untersucht. Die Grundidee, dass seelische Zustände die körperliche " +
        "Gesundheit beeinflussen, ist zwar seit der Antike bekannt, doch erst in den 1970er-" +
        "Jahren wurde diese Verbindung wissenschaftlich untermauert. Ein bahnbrechender " +
        "Versuch des Psychologen Robert Ader und des Immunologen Nicholas Cohen zeigte, dass " +
        "das Immunsystem von Ratten durch klassische Konditionierung beeinflusst werden kann. " +
        "Die Tiere erhielten ein Immunsuppressivum zusammen mit einer Saccharinlösung. Nach " +
        "mehrmaliger Paarung dieser beiden Reize genügte allein die Saccharinlösung, um eine " +
        "Unterdrückung der Immunantwort auszulösen, obwohl das Medikament nicht mehr verabreicht " +
        "wurde. Dieses Experiment bewies erstmals, dass das Immunsystem nicht autonom arbeitet, " +
        "sondern vom Nervensystem moduliert werden kann. Die physiologischen Verbindungen " +
        "zwischen Psyche und Immunsystem verlaufen über zwei Hauptwege. Der erste ist die " +
        "Hypothalamus-Hypophysen-Nebennierenrinden-Achse, kurz HPA-Achse, die bei Stress " +
        "das Hormon Cortisol freisetzt. Kurzfristiger Stress kann die Immunfunktion " +
        "vorübergehend steigern, doch chronischer Stress führt zu dauerhaft erhöhten " +
        "Cortisolspiegeln, die die Aktivität von natürlichen Killerzellen und T-Lymphozyten " +
        "unterdrücken und die Produktion entzündungsfördernder Zytokine erhöhen. Der zweite " +
        "Weg ist das autonome Nervensystem, das über direkte Nervenfasern mit lymphatischen " +
        "Organen wie Milz und Lymphknoten verbunden ist und die Immunzellfunktion regulieren " +
        "kann. Klinische Studien haben gezeigt, dass chronischer psychischer Stress mit einer " +
        "erhöhten Anfälligkeit für Infektionen, einer verlangsamten Wundheilung und einem " +
        "schlechteren Ansprechen auf Impfungen verbunden ist. Umgekehrt können positive " +
        "psychologische Interventionen wie Achtsamkeitsmeditation, soziale Unterstützung und " +
        "kognitive Verhaltenstherapie entzündungshemmende Effekte haben und die Immunfunktion " +
        "verbessern. Die PNI zeigt damit, dass eine ganzheitliche Betrachtung von " +
        "Gesundheit, die psychische und soziale Faktoren einbezieht, für eine effektive " +
        "medizinische Behandlung unerlässlich ist.",
      questions: [
        {
          id: "tv9-3-q1",
          question: "Was bewies das Experiment von Ader und Cohen laut dem Text?",
          options: [
            "Dass Stress die Produktion von Cortisol hemmt und das Immunsystem stärkt.",
            "Dass Ratten gegen Saccharin eine allergische Reaktion entwickeln können.",
            "Dass das Immunsystem durch klassische Konditionierung beeinflusst werden kann und nicht autonom arbeitet.",
            "Dass Immunsuppressiva bei langfristiger Einnahme ihre Wirkung verlieren.",
            "Dass das Nervensystem keine direkte Verbindung zu den lymphatischen Organen hat.",
          ],
          correctOption: 2,
          explanation:
            "Der Text beschreibt, dass das Experiment bewies, dass das Immunsystem durch klassische Konditionierung beeinflusst werden kann und nicht autonom arbeitet, sondern vom Nervensystem moduliert wird.",
        },
        {
          id: "tv9-3-q2",
          question: "Wie wirkt sich chronischer Stress laut dem Text auf das Immunsystem aus?",
          options: [
            "Er führt zu einer dauerhaften Steigerung der Immunfunktion durch erhöhte Adrenalinproduktion.",
            "Er hat keinen messbaren Einfluss auf das Immunsystem, sondern nur auf die Psyche.",
            "Er führt zu dauerhaft erhöhten Cortisolspiegeln, die die Aktivität von Killerzellen und T-Lymphozyten unterdrücken.",
            "Er aktiviert das autonome Nervensystem, das kompensatorisch mehr Antikörper produzieren lässt.",
            "Er reduziert die Cortisolproduktion und führt zu einer Überreaktion des Immunsystems.",
          ],
          correctOption: 2,
          explanation:
            "Der Text erklärt, dass chronischer Stress zu dauerhaft erhöhten Cortisolspiegeln führt, die die Aktivität von natürlichen Killerzellen und T-Lymphozyten unterdrücken.",
        },
        {
          id: "tv9-3-q3",
          question: "Was ist die Hauptaussage des Textes über die Psychoneuroimmunologie?",
          options: [
            "PNI untersucht nur die Auswirkungen von Stress auf Verdauung.",
            "PNI hat keine klinische Relevanz.",
            "PNI belegt, dass Psyche, Nervensystem und Immunsystem eng verbunden sind; positive Interventionen können das Immunsystem verbessern.",
            "Chronischer Stress stärkt das Immunsystem.",
            "Das Immunsystem ist vollständig autonom.",
          ],
          correctOption: 2,
          explanation:
            "PNI belegt die wechselseitige Verbindung von Psyche, Nervensystem und Immunsystem.",
        },
        {
          id: "tv9-3-q4",
          question:
            "Welche Schlussfolgerung lässt sich über die Behandlung stressbedingter Immunschwäche ziehen?",
          options: [
            "Nur Cortisol vermittelt Stress-Immunverbindung.",
            "Chronischer Stress hat keinen Einfluss auf Impfansprechen.",
            "Da chronischer Stress über HPA-Achse und autonomes Nervensystem das Immunsystem schwächt, ist ein ganzheitlicher Behandlungsansatz sinnvoll.",
            "Achtsamkeit hat keinen Einfluss auf das Immunsystem.",
            "Das autonome Nervensystem ist nicht mit lymphatischen Organen verbunden.",
          ],
          correctOption: 2,
          explanation:
            "Da Stress das Immunsystem schwächt, sprechen PNI-Erkenntnisse für ganzheitliche Behandlungsansätze.",
        },
      ],
    },
    {
      id: "tv9-4",
      title: "Nanomedizin – Winzige Helfer für große Herausforderungen",
      content:
        "Die Nanomedizin ist ein aufstrebendes Forschungsfeld, das Nanotechnologie für " +
        "medizinische Zwecke nutzt. Unter Nanotechnologie versteht man die gezielte " +
        "Manipulation von Materialien auf der Nanometerskala, also im Bereich von einem " +
        "bis hundert Nanometern. Ein Nanometer entspricht einem Milliardstel Meter und ist " +
        "damit etwa 80.000-mal kleiner als der Durchmesser eines menschlichen Haares. In " +
        "diesen Dimensionen zeigen Materialien häufig andere physikalische und chemische " +
        "Eigenschaften als in größerem Maßstab, was völlig neue Anwendungsmöglichkeiten " +
        "eröffnet. Ein zentraler Bereich der Nanomedizin ist das gezielte Drug Delivery, " +
        "also die zielgerichtete Arzneimittelabgabe. Konventionelle Medikamente verteilen " +
        "sich nach der Einnahme gleichmäßig im gesamten Körper, was zu unerwünschten " +
        "Nebenwirkungen in gesunden Geweben führen kann. Nanopartikel hingegen können so " +
        "konstruiert werden, dass sie Wirkstoffe direkt an den Krankheitsherd transportieren. " +
        "Besonders in der Krebstherapie ist dieser Ansatz vielversprechend. Tumoren weisen " +
        "aufgrund ihres schnellen Wachstums oft undichte Blutgefäße auf, ein Phänomen, das " +
        "als Enhanced Permeability and Retention-Effekt, kurz EPR-Effekt, bekannt ist. " +
        "Nanopartikel einer bestimmten Größe können durch diese undichten Gefäßwände in das " +
        "Tumorgewebe eindringen und sich dort anreichern, während sie gesundes Gewebe " +
        "weitgehend verschonen. Darüber hinaus können Nanopartikel mit Liganden " +
        "funktionalisiert werden, also mit Molekülen, die spezifisch an Oberflächenrezeptoren " +
        "der Krebszellen binden und so eine noch gezieltere Anreicherung ermöglichen. Ein " +
        "weiteres Anwendungsgebiet sind Nanopartikel in der Diagnostik. Superparamagnetische " +
        "Eisenoxid-Nanopartikel verbessern den Kontrast bei Magnetresonanztomographie-Aufnahmen " +
        "und ermöglichen die Detektion kleinster Tumorherde, die mit herkömmlichen Verfahren " +
        "nicht sichtbar wären. Quantenpunkte, halbleitende Nanokristalle mit " +
        "größenabhängigen Fluoreszenzeigenschaften, werden in der Forschung zur " +
        "Markierung und Verfolgung einzelner Moleküle in lebenden Zellen eingesetzt. " +
        "Trotz des enormen Potenzials bestehen Bedenken hinsichtlich der langfristigen " +
        "Toxizität von Nanopartikeln, da ihr Verhalten im menschlichen Körper noch nicht " +
        "vollständig verstanden ist und die Möglichkeit einer Anreicherung in Organen " +
        "wie Leber und Milz sorgfältig untersucht werden muss.",
      questions: [
        {
          id: "tv9-4-q1",
          question: "Was beschreibt der Text als EPR-Effekt?",
          options: [
            "Die Fähigkeit von Nanopartikeln, magnetische Resonanzsignale zu verstärken.",
            "Die erhöhte Durchlässigkeit undichter Blutgefäße in Tumoren, die es Nanopartikeln ermöglicht, sich dort anzureichern.",
            "Die elektrostatische Abstoßung zwischen Nanopartikeln und gesunden Zellen.",
            "Die Eigenschaft von Quantenpunkten, bei verschiedenen Größen unterschiedlich zu fluoreszieren.",
            "Den enzymatischen Abbau von Nanopartikeln in der Leber.",
          ],
          correctOption: 1,
          explanation:
            "Der Text beschreibt den EPR-Effekt als das Phänomen undichter Blutgefäße in Tumoren, durch die Nanopartikel einer bestimmten Größe eindringen und sich im Tumorgewebe anreichern können.",
        },
        {
          id: "tv9-4-q2",
          question: "Welche Bedenken bezüglich Nanopartikeln werden im Text geäußert?",
          options: [
            "Dass Nanopartikel allergische Reaktionen auslösen, die bei jedem Patienten auftreten.",
            "Dass Nanopartikel die Blut-Hirn-Schranke überwinden und Hirnschäden verursachen.",
            "Dass die langfristige Toxizität noch nicht vollständig verstanden ist und eine Anreicherung in Organen wie Leber und Milz möglich ist.",
            "Dass Nanopartikel die Wirksamkeit konventioneller Medikamente aufheben.",
            "Dass Nanopartikel zu schnell abgebaut werden und daher nicht wirken.",
          ],
          correctOption: 2,
          explanation:
            "Der Text nennt Bedenken hinsichtlich der langfristigen Toxizität, da das Verhalten im Körper noch nicht vollständig verstanden ist und eine Anreicherung in Organen wie Leber und Milz möglich ist.",
        },
        {
          id: "tv9-4-q3",
          question: "Wie können Nanopartikel laut dem Text gezielt Krebszellen ansteuern?",
          options: [
            "Durch die Steuerung mit externen Magnetfeldern, die die Partikel zum Tumor lenken.",
            "Durch Funktionalisierung mit Liganden, die spezifisch an Oberflächenrezeptoren der Krebszellen binden.",
            "Durch die Anpassung ihrer Ladung an den pH-Wert des Tumorgewebes.",
            "Durch die Verwendung radioaktiver Isotope, die von Krebszellen aufgenommen werden.",
            "Durch die Einbettung in weiße Blutkörperchen, die natürlicherweise zu Tumoren wandern.",
          ],
          correctOption: 1,
          explanation:
            "Der Text beschreibt, dass Nanopartikel mit Liganden funktionalisiert werden können, die spezifisch an Oberflächenrezeptoren der Krebszellen binden und so eine gezielte Anreicherung ermöglichen.",
        },
        {
          id: "tv9-4-q4",
          question: "Was ist die Hauptaussage des Textes über die Nanomedizin?",
          options: [
            "Nanomedizin ist ausschließlich für Diagnostik.",
            "Nanopartikel sind vollkommen sicher.",
            "Nanomedizin nutzt Nanoskala-Eigenschaften für gezieltes Drug Delivery und verbesserte Diagnostik, birgt aber noch nicht vollständig verstandene Toxizitätsrisiken.",
            "EPR-Effekt betrifft nur gesundes Gewebe.",
            "Nanopartikel werden sofort vom Körper ausgeschieden.",
          ],
          correctOption: 2,
          explanation:
            "Nanomedizin nutzt Nanoskala-Eigenschaften; Toxizitätsrisiken noch nicht vollständig verstanden.",
        },
        {
          id: "tv9-4-q5",
          question:
            "Welche Schlussfolgerung lässt sich über die Zielgerichtetheit von Nanopartikeln in der Krebstherapie ziehen?",
          options: [
            "Ligandfunktionalisierung ist bei Nanopartikeln unwirksam.",
            "Nanopartikel können nicht in Tumorgewebe eindringen.",
            "Da Nanopartikel durch den EPR-Effekt in Tumorgewebe angereichert werden und mit Liganden funktionalisiert werden können, ergibt sich eine zweistufige Zielgerichtetheit.",
            "EPR-Effekt betrifft alle Gewebe gleich.",
            "Liganden erhöhen die Toxizität der Nanopartikel.",
          ],
          correctOption: 2,
          explanation:
            "EPR-Effekt (passiv) + Ligand-Funktionalisierung (aktiv) = zweistufige Zielgerichtetheit.",
        },
      ],
    },
    {
      id: "tv9-5",
      title: "Suchtforschung – Die Neurobiologie der Abhängigkeit",
      content:
        "Sucht ist eine chronische Erkrankung des Gehirns, die durch zwanghaftes Verlangen " +
        "nach einer Substanz oder einem Verhalten, Kontrollverlust und fortgesetzten Konsum " +
        "trotz negativer Konsequenzen gekennzeichnet ist. Moderne neurowissenschaftliche " +
        "Forschung hat gezeigt, dass Abhängigkeit nicht auf mangelnde Willenskraft " +
        "zurückzuführen ist, sondern auf tiefgreifende Veränderungen in der Hirnstruktur und " +
        "-funktion. Im Zentrum der Suchtentwicklung steht das mesolimbische Belohnungssystem, " +
        "das vom ventralen Tegmentum im Mittelhirn über den Nucleus accumbens bis zum " +
        "präfrontalen Kortex verläuft. Natürliche Belohnungsreize wie Nahrung und soziale " +
        "Interaktion aktivieren dieses System und lösen eine Ausschüttung des " +
        "Neurotransmitters Dopamin im Nucleus accumbens aus, was als Wohlgefühl empfunden " +
        "wird. Suchtmittel kapern dieses System, indem sie die Dopaminausschüttung um ein " +
        "Vielfaches über das natürliche Maß hinaus steigern. Kokain beispielsweise blockiert " +
        "die Wiederaufnahme von Dopamin in die präsynaptische Zelle, während Amphetamine die " +
        "Freisetzung von Dopamin aus den Vesikeln zusätzlich steigern. Alkohol und Opioide " +
        "wirken indirekt, indem sie hemmende Interneuronen im ventralen Tegmentum " +
        "unterdrücken und so die Dopaminfreisetzung enthemmen. Bei wiederholtem Konsum " +
        "passt sich das Gehirn an die übermäßige Stimulation an, ein Vorgang, der als " +
        "neuroadaptive Toleranz bezeichnet wird. Die Anzahl der Dopaminrezeptoren im Nucleus " +
        "accumbens wird herunterreguliert, sodass der Betroffene immer größere Mengen der " +
        "Substanz benötigt, um dieselbe Wirkung zu erzielen. Gleichzeitig führt der " +
        "dauerhafte Dopaminüberschuss zu Veränderungen im präfrontalen Kortex, der für " +
        "Impulskontrolle, Entscheidungsfindung und die Bewertung langfristiger Konsequenzen " +
        "zuständig ist. Diese Veränderungen erklären, warum Suchtkranke trotz besseren " +
        "Wissens und negativer Folgen den Konsum fortsetzen. Moderne Therapieansätze " +
        "kombinieren daher medikamentöse Behandlung, die in die gestörte Neurochemie " +
        "eingreift, mit psychotherapeutischen Verfahren, die dem Patienten alternative " +
        "Bewältigungsstrategien vermitteln und die Funktion des präfrontalen Kortex stärken.",
      questions: [
        {
          id: "tv9-5-q1",
          question: "Wie wirkt Kokain laut dem Text auf das Belohnungssystem?",
          options: [
            "Es steigert die Freisetzung von Dopamin aus den synaptischen Vesikeln.",
            "Es unterdrückt hemmende Interneuronen im ventralen Tegmentum.",
            "Es blockiert die Wiederaufnahme von Dopamin in die präsynaptische Zelle.",
            "Es erhöht die Anzahl der Dopaminrezeptoren im Nucleus accumbens.",
            "Es aktiviert den präfrontalen Kortex und verstärkt die Impulskontrolle.",
          ],
          correctOption: 2,
          explanation:
            "Der Text erklärt, dass Kokain die Wiederaufnahme von Dopamin in die präsynaptische Zelle blockiert.",
        },
        {
          id: "tv9-5-q2",
          question: "Was versteht der Text unter neuroadaptiver Toleranz?",
          options: [
            "Die Fähigkeit des Gehirns, nach einer Suchterkrankung vollständig zu regenerieren.",
            "Die zunehmende Empfindlichkeit des Nervensystems gegenüber Suchtmitteln.",
            "Die Anpassung des Gehirns an übermäßige Stimulation, bei der unter anderem die Dopaminrezeptoren herunterreguliert werden.",
            "Die Resistenz des präfrontalen Kortex gegen die Wirkung von Suchtmitteln.",
            "Die genetisch bedingte Unempfindlichkeit bestimmter Personen gegenüber Abhängigkeit.",
          ],
          correctOption: 2,
          explanation:
            "Der Text beschreibt neuroadaptive Toleranz als die Anpassung des Gehirns an übermäßige Stimulation, wobei die Dopaminrezeptoren im Nucleus accumbens herunterreguliert werden.",
        },
        {
          id: "tv9-5-q3",
          question: "Was ist die Hauptaussage des Textes über die Neurobiologie der Abhängigkeit?",
          options: [
            "Sucht ist eine Frage mangelnder Willenskraft.",
            "Sucht betrifft nur das Dopaminsystem.",
            "Sucht ist eine chronische Hirnerkrankung; neuroadaptive Veränderungen in Belohnungssystem und präfrontalem Kortex erklären den Kontrollverlust.",
            "Sucht kann allein durch Medikamente geheilt werden.",
            "Das mesolimbische System ist nicht an Sucht beteiligt.",
          ],
          correctOption: 2,
          explanation:
            "Sucht ist eine chronische Hirnerkrankung; neuroadaptive Veränderungen erklären Kontrollverlust.",
        },
        {
          id: "tv9-5-q4",
          question:
            "Welche Schlussfolgerung lässt sich über den Wirkmechanismus von Alkohol und Opiaten im Vergleich zu Kokain ziehen?",
          options: [
            "Alkohol blockiert die Dopamin-Wiederaufnahme wie Kokain.",
            "Opioide steigern direkt die Dopaminfreisetzung aus Vesikeln.",
            "Da Alkohol und Opioide hemmende Interneuronen unterdrücken, wirken sie indirekt; ihre Wirkweise unterscheidet sich von direkter Dopaminbeeinflussung durch Kokain oder Amphetamine.",
            "Alle Suchtmittel wirken durch denselben Mechanismus.",
            "Alkohol hat keine Wirkung auf das mesolimbische System.",
          ],
          correctOption: 2,
          explanation:
            "Alkohol und Opioide wirken indirekt; Kokain blockiert Dopamin-Wiederaufnahme direkt.",
        },
      ],
    },
  ],
};

const set10: TVTextSet = {
  id: "tv-set-10",
  name: "Set 10: Zukunft der Medizin",
  difficulty: "schwer",
  texts: [
    {
      id: "tv10-1",
      title: "Evolutionäre Medizin – Krankheit im Licht der Evolution",
      content:
        "Die evolutionäre Medizin, auch darwinistische Medizin genannt, betrachtet Krankheiten " +
        "und medizinische Phänomene durch die Brille der Evolutionstheorie. Ihre zentrale " +
        "Fragestellung lautet nicht nur, wie eine Krankheit entsteht, sondern auch, warum der " +
        "menschliche Körper überhaupt für bestimmte Krankheiten anfällig ist. Ein " +
        "grundlegendes Konzept ist die Mismatch-Hypothese, die besagt, dass viele moderne " +
        "Zivilisationskrankheiten aus einer Diskrepanz zwischen unserer genetischen Ausstattung " +
        "und unserer heutigen Lebensweise resultieren. Der menschliche Körper wurde durch " +
        "Millionen Jahre der Evolution an ein Leben als Jäger und Sammler angepasst, das durch " +
        "körperliche Aktivität, kalorienarme Ernährung und wechselnde Nahrungsverfügbarkeit " +
        "gekennzeichnet war. In dieser Umgebung war die Fähigkeit, überschüssige Energie " +
        "effizient als Fett zu speichern, ein Überlebensvorteil. In modernen " +
        "Industriegesellschaften mit ständig verfügbarer, kalorienreicher Nahrung und " +
        "Bewegungsmangel führt dieselbe genetische Ausstattung jedoch zu Adipositas, " +
        "Typ-2-Diabetes und Herz-Kreislauf-Erkrankungen. Die evolutionäre Medizin bietet " +
        "auch eine neue Perspektive auf Symptome wie Fieber und Entzündung. Traditionell " +
        "wurden diese als schädliche Begleiterscheinungen einer Infektion betrachtet, die " +
        "es zu unterdrücken gilt. Aus evolutionärer Sicht handelt es sich jedoch um adaptive " +
        "Abwehrmechanismen. Fieber erhöht die Körpertemperatur über den Wohlfühlbereich " +
        "vieler Krankheitserreger hinaus und beschleunigt gleichzeitig die Aktivität von " +
        "Immunzellen. Studien an Tieren haben gezeigt, dass die Unterdrückung von Fieber " +
        "bei bestimmten Infektionen die Sterblichkeit erhöhen kann. Ein weiteres Beispiel " +
        "ist die Sichelzellenanämie, bei der eine Mutation im Hämoglobin-Gen die Form der " +
        "roten Blutkörperchen verändert. In homozygoter Form, also wenn beide Genkopien " +
        "betroffen sind, verursacht sie eine schwere Erkrankung. In heterozygoter Form " +
        "bietet sie jedoch einen Schutz gegen Malaria, da sich der Malaria-Erreger " +
        "Plasmodium falciparum in den verformten Blutkörperchen schlechter vermehren " +
        "kann. Dieser heterozygote Vorteil erklärt, warum das Sichelzellgen in " +
        "Malariagebieten trotz seiner negativen Auswirkungen in homozygoter Form " +
        "nicht durch natürliche Selektion eliminiert wurde.",
      questions: [
        {
          id: "tv10-1-q1",
          question: "Was besagt die Mismatch-Hypothese laut dem Text?",
          options: [
            "Dass genetische Mutationen sich in modernen Gesellschaften schneller ausbreiten als in der Vergangenheit.",
            "Dass moderne Zivilisationskrankheiten aus einer Diskrepanz zwischen unserer genetischen Ausstattung und unserer heutigen Lebensweise resultieren.",
            "Dass das Immunsystem moderner Menschen weniger leistungsfähig ist als das unserer Vorfahren.",
            "Dass Infektionskrankheiten durch den Kontakt mit neuen Erregern entstehen, an die der Körper nicht angepasst ist.",
            "Dass die medizinische Behandlung von Symptomen die natürliche Evolution des Menschen behindert.",
          ],
          correctOption: 1,
          explanation:
            "Der Text erklärt, dass die Mismatch-Hypothese besagt, dass viele moderne Zivilisationskrankheiten aus einer Diskrepanz zwischen unserer genetischen Ausstattung und unserer heutigen Lebensweise resultieren.",
        },
        {
          id: "tv10-1-q2",
          question:
            "Warum wurde das Sichelzellgen laut dem Text trotz seiner negativen Auswirkungen nicht eliminiert?",
          options: [
            "Weil die Mutation erst kürzlich entstanden ist und die Selektion noch nicht genug Zeit hatte.",
            "Weil in heterozygoter Form ein Schutz gegen Malaria besteht, da sich der Erreger in verformten Blutkörperchen schlechter vermehrt.",
            "Weil medizinische Behandlungsmöglichkeiten die negativen Folgen aufheben.",
            "Weil die Sichelzellanämie in homozygoter Form das Immunsystem stärkt.",
            "Weil die Mutation gleichzeitig eine erhöhte Resistenz gegen bakterielle Infektionen verleiht.",
          ],
          correctOption: 1,
          explanation:
            "Der Text erklärt, dass das Sichelzellgen in heterozygoter Form einen Schutz gegen Malaria bietet und daher in Malariagebieten nicht durch Selektion eliminiert wurde.",
        },
        {
          id: "tv10-1-q3",
          question: "Was ist die Hauptaussage des Textes über die evolutionäre Medizin?",
          options: [
            "Evolutionäre Medizin sieht Krankheiten als unvermeidlich.",
            "Evolutionäre Medizin lehnt jede Behandlung ab.",
            "Evolutionäre Medizin erklärt Krankheiten als evolutionsgepraegtes Phänomen; Symptome wie Fieber können adaptiv sein und das heterozygote Sichelzellgen bietet Malariaschutz.",
            "Fieber sollte immer unterdrückt werden.",
            "Das Sichelzellgen ist global gleichmäßig verbreitet.",
          ],
          correctOption: 2,
          explanation:
            "Mismatch-Hypothese, adaptive Funktion von Fieber und Malariaschutz des Sichelzellgens.",
        },
        {
          id: "tv10-1-q4",
          question:
            "Welche Schlussfolgerung lässt sich über die Behandlung von Fieber aus dem Text ziehen?",
          options: [
            "Fieber ist grundsätzlich gefährlich und sollte immer behandelt werden.",
            "Unterdrückung von Fieber reduziert Sterblichkeit bei Infektionen.",
            "Da Fieber bei bestimmten Infektionen die Sterblichkeit bei Unterdrückung erhöhen kann, spricht der Text für eine differenzierte statt automatische Fieberbehandlung.",
            "Fieber hat keine messbaren Vorteile.",
            "Fieber ist ausschließlich ein Nebenprodukt der Infektion.",
          ],
          correctOption: 2,
          explanation:
            "Fieberunterdrückung kann Sterblichkeit erhöhen → differenzierte Behandlung sinnvoll.",
        },
      ],
    },
    {
      id: "tv10-2",
      title: "Künstliche Organe und Bioprinting",
      content:
        "Die Entwicklung künstlicher Organe ist eines der ambitioniertesten Ziele der modernen " +
        "Biomedizin. Angesichts des weltweiten Mangels an Spenderorganen forschen " +
        "Wissenschaftler intensiv an Alternativen, die den Bedarf an menschlichen " +
        "Transplantaten verringern könnten. Mechanische Organersatzsysteme existieren bereits " +
        "seit Jahrzehnten. Das bekannteste Beispiel ist die Dialyse, bei der eine Maschine " +
        "die Filtrationsfunktion der Nieren übernimmt und Giftstoffe sowie überschüssiges " +
        "Wasser aus dem Blut entfernt. Patienten mit Nierenversagen müssen sich typischerweise " +
        "dreimal wöchentlich einer mehrstündigen Dialysebehandlung unterziehen, was die " +
        "Lebensqualität erheblich einschränkt. Künstliche Herzen, sogenannte Ventricular " +
        "Assist Devices oder VADs, unterstützen die Pumpfunktion des Herzens und werden " +
        "entweder als Überbrückung bis zu einer Transplantation oder als dauerhafte Therapie " +
        "eingesetzt. Moderne VADs arbeiten mit einer kontinuierlichen Strömung statt mit " +
        "einem pulsierenden Mechanismus, was bedeutet, dass Patienten mit diesen Geräten " +
        "keinen tastbaren Puls mehr haben. Ein revolutionärer Ansatz ist das sogenannte " +
        "Bioprinting, bei dem dreidimensionale Gewebestrukturen Schicht für Schicht aus " +
        "lebenden Zellen und Biomaterialien aufgebaut werden. Der Prozess beginnt mit der " +
        "Erstellung eines digitalen Modells des gewünschten Organs. Anschließend wird eine " +
        "Biotinte, die aus Zellen und einem Hydrogel-Trägermaterial besteht, von einem " +
        "speziellen Drucker in der gewünschten Form aufgetragen. Das Hydrogel dient als " +
        "Gerüststruktur, die den Zellen Halt gibt, während sie wachsen und sich zu " +
        "funktionalem Gewebe verbinden. Bisher konnten einfache Gewebestrukturen wie " +
        "Hautlappen, Knorpel und Blutgefäße erfolgreich gedruckt werden. Die größte " +
        "Herausforderung bei der Herstellung komplexer Organe wie Herz, Leber oder Niere " +
        "ist die Vaskularisierung, also die Integration eines funktionierenden " +
        "Blutgefäßnetzwerks, das die Zellen mit Sauerstoff und Nährstoffen versorgt. " +
        "Ohne eine ausreichende Blutversorgung sterben Zellen, die mehr als etwa " +
        "200 Mikrometer von einem Blutgefäß entfernt liegen, ab. Forscher arbeiten " +
        "an Lösungen wie dem Druck von Gefäßkanälen in das Gewebe oder der Verwendung " +
        "von Wachstumsfaktoren, die die Neubildung von Blutgefäßen anregen.",
      questions: [
        {
          id: "tv10-2-q1",
          question:
            "Was ist laut dem Text die größte Herausforderung beim Bioprinting komplexer Organe?",
          options: [
            "Die Herstellung einer geeigneten Biotinte aus lebenden Zellen.",
            "Die Abstoßungsreaktion des Immunsystems gegen das gedruckte Gewebe.",
            "Die Vaskularisierung, also die Integration eines funktionierenden Blutgefäßnetzwerks.",
            "Die Aufrechterhaltung der Sterilität während des Druckprozesses.",
            "Die Genauigkeit des digitalen Modells, das dem Druck zugrunde liegt.",
          ],
          correctOption: 2,
          explanation:
            "Der Text beschreibt die Vaskularisierung, also die Integration eines funktionierenden Blutgefäßnetzwerks, als die größte Herausforderung beim Bioprinting komplexer Organe.",
        },
        {
          id: "tv10-2-q2",
          question: "Welche Besonderheit moderner VADs wird im Text beschrieben?",
          options: [
            "Sie erzeugen einen künstlichen Herzschlag, der vom natürlichen nicht unterscheidbar ist.",
            "Sie arbeiten mit einer kontinuierlichen Strömung, sodass Patienten keinen tastbaren Puls mehr haben.",
            "Sie ersetzen das Herz vollständig und machen eine Transplantation überflüssig.",
            "Sie werden durch die Körperwärme des Patienten mit Energie versorgt.",
            "Sie können sich an die körperliche Belastung des Patienten automatisch anpassen.",
          ],
          correctOption: 1,
          explanation:
            "Der Text erklärt, dass moderne VADs mit einer kontinuierlichen Strömung statt einem pulsierenden Mechanismus arbeiten, weshalb Patienten keinen tastbaren Puls mehr haben.",
        },
        {
          id: "tv10-2-q3",
          question: "Was ist die Hauptaussage des Textes über künstliche Organe und Bioprinting?",
          options: [
            "Bioprinting kann bereits komplexe Organe vollständig ersetzen.",
            "Dialyse ist keine Form des künstlichen Organersatzes.",
            "Mechanische Systeme wie Dialyse und VADs existieren bereits; Bioprinting bietet Zukunftspotenzial, scheitert aber noch an der Vaskularisierung.",
            "VADs erzeugen einen normalen Herzrhythmus.",
            "Künstliche Organe sind günstiger als Transplantate.",
          ],
          correctOption: 2,
          explanation:
            "Mechanische Ersatzsysteme existieren; Bioprinting scheitert noch an der Vaskularisierung.",
        },
        {
          id: "tv10-2-q4",
          question:
            "Welche Schlussfolgerung lässt sich über die Bedeutung der Vaskularisierung für das Bioprinting ziehen?",
          options: [
            "Zellen können unbegrenzt weit von Blutgefäßen entfernt überleben.",
            "Wachstumsfaktoren sind für Bioprinting irrelevant.",
            "Da Zellen mehr als 200 Mikrometer von Blutgefäßen absterben, ist die Lösung des Vaskularisierungsproblems entscheidend für das Bioprinting komplexer Organe.",
            "Hydrogel ersetzt die Funktion von Blutgefäßen.",
            "Bioprinting-Organe benötigen keine Vaskularisierung.",
          ],
          correctOption: 2,
          explanation:
            "Vaskularisierung ist die entscheidende Hürde für das Bioprinting funktionaler komplexer Organe.",
        },
      ],
    },
    {
      id: "tv10-3",
      title: "Gentherapie – Heilung an der Wurzel",
      content:
        "Die Gentherapie ist ein medizinischer Ansatz, bei dem genetisches Material in die " +
        "Zellen eines Patienten eingebracht wird, um eine Krankheit zu behandeln oder zu " +
        "heilen. Im Gegensatz zu herkömmlichen Therapien, die in der Regel Symptome lindern, " +
        "zielt die Gentherapie darauf ab, den zugrunde liegenden genetischen Defekt direkt " +
        "zu korrigieren. Die Idee entstand in den 1970er-Jahren, doch die erste zugelassene " +
        "Gentherapie am Menschen wurde erst 1990 durchgeführt, als die vierjährige Ashanti " +
        "DeSilva wegen einer schweren kombinierten Immundefizienz, dem sogenannten " +
        "ADA-SCID-Syndrom, behandelt wurde. Bei dieser Erkrankung fehlt das Enzym " +
        "Adenosindesaminase, was zu einem nahezu vollständigen Ausfall des Immunsystems " +
        "führt. Um therapeutische Gene in die Zielzellen einzuschleusen, werden in der Regel " +
        "virale Vektoren eingesetzt, also genetisch veränderte Viren, die ihre natürliche " +
        "Fähigkeit behalten haben, in Zellen einzudringen und genetisches Material zu " +
        "übertragen, deren krankheitserregende Eigenschaften jedoch entfernt wurden. Am " +
        "häufigsten werden Adeno-assoziierte Viren, kurz AAV, verwendet, die als besonders " +
        "sicher gelten, da sie sich nicht in das menschliche Genom integrieren und " +
        "eine breite Palette von Zelltypen infizieren können. Ein Meilenstein war die " +
        "Zulassung von Luxturna im Jahr 2017, einer Gentherapie gegen eine erbliche Form " +
        "der Erblindung, die durch Mutationen im RPE65-Gen verursacht wird. Luxturna " +
        "liefert eine funktionsfähige Kopie dieses Gens direkt in die Netzhautzellen und " +
        "kann so das Sehvermögen betroffener Patienten deutlich verbessern. Ein weiterer " +
        "Durchbruch ist Zolgensma, eine Gentherapie gegen die spinale Muskelatrophie, eine " +
        "schwere Erbkrankheit, die ohne Behandlung meist vor dem zweiten Lebensjahr zum " +
        "Tod führt. Zolgensma verwendet einen AAV-Vektor, um das fehlende SMN1-Gen in die " +
        "Motoneuronen einzuschleusen. Die Therapie wird als einmalige intravenöse Infusion " +
        "verabreicht und hat in klinischen Studien beeindruckende Ergebnisse gezeigt, " +
        "ist allerdings mit Kosten von über zwei Millionen US-Dollar eine der teuersten " +
        "Behandlungen der Welt. Die hohen Kosten werfen Fragen der Zugangsgerechtigkeit " +
        "auf und stellen Gesundheitssysteme vor erhebliche Finanzierungsprobleme.",
      questions: [
        {
          id: "tv10-3-q1",
          question:
            "Warum werden Adeno-assoziierte Viren (AAV) laut dem Text bevorzugt als Vektoren eingesetzt?",
          options: [
            "Weil sie sich schnell vermehren und so große Mengen des therapeutischen Gens produzieren.",
            "Weil sie als besonders sicher gelten, da sie sich nicht in das menschliche Genom integrieren und verschiedene Zelltypen infizieren können.",
            "Weil sie das Immunsystem des Patienten nicht aktivieren und daher keine Nebenwirkungen verursachen.",
            "Weil sie die größte Menge an genetischem Material transportieren können.",
            "Weil sie bereits natürlicherweise im menschlichen Körper vorkommen und daher nicht als fremd erkannt werden.",
          ],
          correctOption: 1,
          explanation:
            "Der Text erklärt, dass AAV als besonders sicher gelten, da sie sich nicht in das menschliche Genom integrieren und eine breite Palette von Zelltypen infizieren können.",
        },
        {
          id: "tv10-3-q2",
          question:
            "Welches Problem der Gentherapie wird am Beispiel von Zolgensma im Text thematisiert?",
          options: [
            "Die geringe Wirksamkeit bei Erwachsenen im Vergleich zu Kindern.",
            "Die Notwendigkeit wiederholter Behandlungen über viele Jahre hinweg.",
            "Die extrem hohen Kosten, die Fragen der Zugangsgerechtigkeit und der Finanzierbarkeit aufwerfen.",
            "Die schweren Nebenwirkungen des verwendeten viralen Vektors.",
            "Die Unmöglichkeit, das fehlende Gen dauerhaft in die Zielzellen einzuschleusen.",
          ],
          correctOption: 2,
          explanation:
            "Der Text thematisiert die Kosten von über zwei Millionen US-Dollar, die Fragen der Zugangsgerechtigkeit aufwerfen und Gesundheitssysteme vor erhebliche Finanzierungsprobleme stellen.",
        },
        {
          id: "tv10-3-q3",
          question: "Was ist die Hauptaussage des Textes über die Gentherapie?",
          options: [
            "Gentherapie ist bereits vollständig sicher und breit verfügbar.",
            "Gentherapie behandelt nur Bluterkrankungen.",
            "Gentherapie korrigiert genetische Defekte mithilfe viraler Vektoren; zugelassene Therapien zeigen beeindruckende Ergebnisse, sind aber oft extrem teuer.",
            "Gentherapie ersetzt alle anderen Behandlungsformen.",
            "AAV-Vektoren integrieren sich ins menschliche Genom.",
          ],
          correctOption: 2,
          explanation:
            "Gentherapie korrigiert Defekte durch virale Vektoren; beeindruckende Ergebnisse, aber hohe Kosten.",
        },
        {
          id: "tv10-3-q4",
          question:
            "Welche Schlussfolgerung lässt sich aus dem Beispiel Zolgensma über Gentherapie ziehen?",
          options: [
            "Da Zolgensma über 2 Mio. USD kostet, können nicht alle Patienten auf lebensrettende Gentherapien zugreifen, was die Frage der Verteilungsgerechtigkeit aufwirft.",
            "Zolgensma ist weltweit kostenlos verfügbar.",
            "Nur reiche Länder entwickeln Gentherapien.",
            "Die hohen Kosten sind durch die Wirksamkeit gerechtfertigt und kein Problem.",
            "Alle Gentherapien sind gleich teuer.",
          ],
          correctOption: 0,
          explanation: "Zolgensma kostet über 2 Mio. USD → Fragen der Zugangsgerechtigkeit.",
        },
      ],
    },
    {
      id: "tv10-4",
      title: "Schlafmedizin – Wenn der Schlaf gestört ist",
      content:
        "Schlafstörungen gehören zu den häufigsten gesundheitlichen Beschwerden in modernen " +
        "Gesellschaften. Die Schlafmedizin, ein interdisziplinäres Fachgebiet, befasst sich " +
        "mit der Diagnostik und Therapie der über 80 klassifizierten Schlafstörungen, die " +
        "in der Internationalen Klassifikation der Schlafstörungen systematisch erfasst sind. " +
        "Die häufigste Schlafstörung ist die Insomnie, die chronische Ein- oder Durchschlaf- " +
        "störung, die etwa zehn Prozent der Erwachsenen betrifft. Bei der Diagnostik kommt " +
        "der Polysomnographie eine zentrale Rolle zu, einem Verfahren, bei dem während des " +
        "Schlafs gleichzeitig die Hirnströme mittels Elektrönzephalographie, die " +
        "Augenbewegungen, die Muskelspannung, die Herzfrequenz, die Atmung und der " +
        "Sauerstoffgehalt im Blut aufgezeichnet werden. Diese umfassende Messung ermöglicht " +
        "die Unterscheidung der verschiedenen Schlafstadien und die Identifizierung " +
        "pathologischer Muster. Eine besonders verbreitete und potenziell gefährliche " +
        "Schlafstörung ist die obstruktive Schlafapnoe, kurz OSA, bei der die oberen " +
        "Atemwege während des Schlafs wiederholt kollabieren und den Luftstrom für Sekunden " +
        "bis Minuten unterbrechen. Risikofaktoren sind Übergewicht, männliches Geschlecht, " +
        "zunehmendes Alter und anatomische Besonderheiten wie ein vergrößerter Zungengrund. " +
        "Die wiederholten Atemaussetzer führen zu einem Abfall der Sauerstoffsättigung im " +
        "Blut und zu Weckreaktionen, die den Schlaf fragmentieren, ohne dass die Betroffenen " +
        "sich am Morgen daran erinnern. Die Folge ist eine ausgeprägte Tagesmüdigkeit, die " +
        "das Unfallrisiko im Straßenverkehr und am Arbeitsplatz signifikant erhöht. " +
        "Langfristig steigert unbehandelte Schlafapnoe das Risiko für Bluthochdruck, " +
        "Herzinfarkt, Schlaganfall und Typ-2-Diabetes. Die Standardtherapie ist die " +
        "nächtliche Überdruckbeatmung mittels CPAP, bei der eine Maske über Nase oder " +
        "Mund kontinuierlich einen leichten Luftdruck erzeugt, der die Atemwege offenhält. " +
        "Obwohl die CPAP-Therapie hochwirksam ist, liegt die langfristige Akzeptanz bei " +
        "nur etwa 50 bis 70 Prozent, da viele Patienten die Maske als unangenehm empfinden. " +
        "Alternative Behandlungsoptionen umfassen Unterkieferprotrusionsschienen, die den " +
        "Unterkiefer nach vorne verlagern, sowie operative Eingriffe an den oberen Atemwegen.",
      questions: [
        {
          id: "tv10-4-q1",
          question: "Was wird bei einer Polysomnographie laut dem Text gemessen?",
          options: [
            "Ausschließlich die Hirnströme und die Augenbewegungen während des Schlafs.",
            "Die Blutdruckwerte, der Blutzuckerspiegel und die Körpertemperatur im Schlaf.",
            "Hirnströme, Augenbewegungen, Muskelspannung, Herzfrequenz, Atmung und Blutsauerstoff.",
            "Die Menge des ausgeschütteten Melatonins und anderer Schlafhormone.",
            "Die subjektive Schlafqualität anhand von Fragebögen am nächsten Morgen.",
          ],
          correctOption: 2,
          explanation:
            "Der Text beschreibt die Polysomnographie als ein Verfahren, bei dem Hirnströme, Augenbewegungen, Muskelspannung, Herzfrequenz, Atmung und Blutsauerstoff gleichzeitig aufgezeichnet werden.",
        },
        {
          id: "tv10-4-q2",
          question:
            "Warum ist die langfristige Akzeptanz der CPAP-Therapie laut dem Text begrenzt?",
          options: [
            "Weil die Therapie nur bei leichter Schlafapnoe wirksam ist.",
            "Weil die Geräte sehr teuer sind und nicht von Krankenkassen übernommen werden.",
            "Weil viele Patienten die Maske als unangenehm empfinden.",
            "Weil die CPAP-Therapie erhebliche Nebenwirkungen wie Mundtrockenheit und Ohrenschmerzen verursacht.",
            "Weil die Therapie nur stationär im Krankenhaus durchgeführt werden kann.",
          ],
          correctOption: 2,
          explanation:
            "Der Text erklärt, dass die langfristige Akzeptanz bei nur 50 bis 70 Prozent liegt, da viele Patienten die Maske als unangenehm empfinden.",
        },
        {
          id: "tv10-4-q3",
          question:
            "Welche langfristigen Gesundheitsrisiken einer unbehandelten Schlafapnoe nennt der Text?",
          options: [
            "Nierenversagen, Lebererkrankungen und chronische Schmerzen.",
            "Bluthochdruck, Herzinfarkt, Schlaganfall und Typ-2-Diabetes.",
            "Demenz, Parkinson und Multiple Sklerose.",
            "Sehstörungen, Hörverlust und Gleichgewichtsprobleme.",
            "Depressionen, Angststörungen und bipolare Störung.",
          ],
          correctOption: 1,
          explanation:
            "Der Text nennt Bluthochdruck, Herzinfarkt, Schlaganfall und Typ-2-Diabetes als langfristige Risiken einer unbehandelten Schlafapnoe.",
        },
        {
          id: "tv10-4-q4",
          question:
            "Welche Schlussfolgerung lässt sich aus dem Text über die begrenzte CPAP-Akzeptanz ziehen?",
          options: [
            "CPAP ist nur für leichte Schlafapnoe geeignet.",
            "Schlafapnoe hat keine langfristigen Herzfolgen.",
            "Da CPAP bei 50-70% der Patienten akzeptiert wird, sind alternative Therapien wie Schienen oder Operationen wichtig, um alle Patienten zu erreichen.",
            "Schienen ersetzen CPAP vollständig.",
            "Schlafapnoe kann nur operativ behandelt werden.",
          ],
          correctOption: 2,
          explanation: "Da nur 50-70% CPAP akzeptieren, sind alternative Therapien wichtig.",
        },
      ],
    },
    {
      id: "tv10-5",
      title: "Neuröthik – Moralische Fragen der Hirnforschung",
      content:
        "Die Neuröthik ist ein relativ junges Fachgebiet, das sich mit den ethischen, " +
        "rechtlichen und gesellschaftlichen Implikationen der Neurowissenschaften befasst. " +
        "Der Begriff wurde Anfang der 2000er-Jahre geprägt und hat seither an Bedeutung " +
        "gewonnen, da die technologischen Möglichkeiten zur Untersuchung und Beeinflussung " +
        "des Gehirns rasant zugenommen haben. Die Neuröthik lässt sich in zwei Hauptbereiche " +
        "unterteilen: die Ethik der Neurowissenschaft, die sich mit den moralischen Fragen " +
        "der neurowissenschaftlichen Praxis befasst, und die Neurowissenschaft der Ethik, die " +
        "untersucht, wie das Gehirn moralische Urteile bildet. Ein zentrales Thema der " +
        "Neuröthik ist das sogenannte Neurönhancement, also der Einsatz von Medikamenten " +
        "oder Technologien zur Steigerung kognitiver Fähigkeiten bei gesunden Menschen. " +
        "Substanzen wie Methylphenidat, das zur Behandlung von ADHS zugelassen ist, und " +
        "Modafinil, ein Wachheitsförderer, werden von Studierenden und Berufstätigen " +
        "zunehmend ohne medizinische Indikation eingenommen, um Konzentration und " +
        "Leistungsfähigkeit zu steigern. Dies wirft Fragen der Fairness auf: Wenn einige " +
        "Menschen chemisch ihre kognitive Leistung verbessern, entsteht ein Druck auf " +
        "andere, ebenfalls zu solchen Mitteln zu greifen, um wettbewerbsfähig zu bleiben. " +
        "Zudem sind die langfristigen Risiken einer Einnahme bei Gesunden weitgehend " +
        "unbekannt. Ein weiteres Feld ist die Neuroimaging-Forschung, die mittels " +
        "funktioneller Magnetresonanztomographie Einblicke in die Hirnaktivität ermöglicht. " +
        "Die Frage, ob solche Daten als Beweismittel vor Gericht zugelassen werden sollten, " +
        "ist umstritten. Kritiker warnen vor der Gefahr des Neuro-Reduktionismus, also der " +
        "Tendenz, komplexes menschliches Verhalten ausschließlich auf Hirnprozesse zu " +
        "reduzieren. Die Tiefe Hirnstimulation, bei der Elektroden in bestimmte Hirnareale " +
        "implantiert werden, um neurologische Erkrankungen wie Parkinson oder schwere " +
        "Depressionen zu behandeln, hat in seltenen Fällen zu Persönlichkeitsveränderungen " +
        "geführt, die grundlegende Fragen nach personaler Identität aufwerfen: Wenn eine " +
        "technologische Intervention die Persönlichkeit eines Menschen verändert, bleibt " +
        "er dann dieselbe Person? Diese philosophische Frage hat konkrete klinische " +
        "Implikationen, etwa wenn Patienten nach dem Eingriff ihre Zustimmung zur Therapie " +
        "widerrufen möchten.",
      questions: [
        {
          id: "tv10-5-q1",
          question: "Welches ethische Problem des Neurönhancements beschreibt der Text?",
          options: [
            "Dass kognitive Enhancer bei Gesunden besser wirken als bei Kranken.",
            "Dass Neurönhancement zu einer Sucht führen kann, die schwerer zu behandeln ist als andere Abhängigkeiten.",
            "Dass ein Fairness-Problem entsteht, weil Druck auf andere ausgeübt wird, ebenfalls zu solchen Mitteln zu greifen.",
            "Dass die Herstellung dieser Substanzen umweltschädlich ist.",
            "Dass Neurönhancement die Kreativität der Anwender dauerhaft verringert.",
          ],
          correctOption: 2,
          explanation:
            "Der Text beschreibt, dass Neurönhancement Fragen der Fairness aufwirft, da ein Druck entsteht, ebenfalls zu kognitiven Enhancern zu greifen, um wettbewerbsfähig zu bleiben.",
        },
        {
          id: "tv10-5-q2",
          question: "Was versteht man laut dem Text unter Neuro-Reduktionismus?",
          options: [
            "Die Reduktion der Gehirngröße durch chronischen Stress und mangelnden Schlaf.",
            "Die Verringerung von Neurotransmittern im synaptischen Spalt durch Medikamente.",
            "Die Tendenz, komplexes menschliches Verhalten ausschließlich auf Hirnprozesse zu reduzieren.",
            "Die Vereinfachung neurowissenschaftlicher Methoden für den klinischen Alltag.",
            "Die schrittweise Abschaltung einzelner Hirnareale bei der Tiefen Hirnstimulation.",
          ],
          correctOption: 2,
          explanation:
            "Der Text definiert Neuro-Reduktionismus als die Tendenz, komplexes menschliches Verhalten ausschließlich auf Hirnprozesse zu reduzieren.",
        },
        {
          id: "tv10-5-q3",
          question:
            "Welche philosophische Frage wirft die Tiefe Hirnstimulation laut dem Text auf?",
          options: [
            "Ob Maschinen ein Bewusstsein entwickeln können, wenn sie mit dem Gehirn verbunden werden.",
            "Ob die Behandlung neurologischer Erkrankungen grundsätzlich ethisch vertretbar ist.",
            "Ob ein Mensch nach einer technologischen Intervention, die seine Persönlichkeit verändert, noch dieselbe Person ist.",
            "Ob das Gehirn nach dem Entfernen der Elektroden seine ursprüngliche Funktion wiedererlangt.",
            "Ob die Kosten der Behandlung den gesellschaftlichen Nutzen rechtfertigen.",
          ],
          correctOption: 2,
          explanation:
            "Der Text stellt die philosophische Frage, ob ein Mensch nach einer technologischen Intervention, die seine Persönlichkeit verändert, noch dieselbe Person bleibt.",
        },
        {
          id: "tv10-5-q4",
          question:
            "Welche Schlussfolgerung lässt sich über die ethische Problematik der Tiefen Hirnstimulation ziehen?",
          options: [
            "Tiefe Hirnstimulation ist vollkommen risikolos.",
            "Persönlichkeit ändert sich nie durch medizinische Behandlung.",
            "Da Tiefe Hirnstimulation die Persönlichkeit verändern kann, stellt sich die Frage, ob der Patient nach dem Eingriff noch seine ursprüngliche Zustimmung aufrechterhalten kann.",
            "Tiefe Hirnstimulation hat keinerlei Einfluss auf die Psyche.",
            "Persönlichkeitsveränderungen sind erwartete und erwünschte Nebenwirkungen.",
          ],
          correctOption: 2,
          explanation:
            "Tiefe Hirnstimulation kann Persönlichkeit verändern → Frage nach Entscheidungskompetenz nach dem Eingriff.",
        },
      ],
    },
  ],
};

export const tvTextSets2: TVTextSet[] = [set6, set7, set8, set9, set10];
