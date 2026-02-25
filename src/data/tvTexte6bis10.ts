import type { TVText } from "./kffTextverstaendnis";

export const tvTexte6bis10: TVText[] = [
  {
    id: "tv-6",
    title: "Das Anthropozän: Menschlicher Einfluss auf die Biosphäre",
    topic: "Ökologie",
    difficulty: 2,
    text: `Der Begriff "Anthropozän" bezeichnet ein vorgeschlagenes neues geologisches Zeitalter, in dem der Mensch zu einem der wichtigsten Einflussfaktoren auf die biologischen, geologischen und atmosphärischen Prozesse der Erde geworden ist. Während die Internationale Kommission für Stratigraphie diesen Begriff noch nicht offiziell anerkannt hat, verwenden ihn Wissenschaftler zunehmend, um die beispiellosen Veränderungen zu beschreiben, die unsere Spezies dem Planeten auferlegt hat.

Die Auswirkungen menschlicher Aktivitäten auf die Biosphäre sind vielfältig und tiefgreifend. Einer der auffälligsten Effekte ist der rasante Verlust an Biodiversität. Schätzungen zufolge sterben Arten heute hundert- bis tausendfach schneller aus als die natürliche Hintergrundrate es erwarten ließe. Dieses "sechste Massenaussterben" wird hauptsächlich durch Lebensraumzerstörung, Umweltverschmutzung, invasive Arten, Übernutzung natürlicher Ressourcen und den Klimawandel verursacht. Besonders betroffen sind Regenwälder, Korallenriffe und Feuchtgebiete – Ökosysteme, die eine überproportional hohe Artendichte aufweisen.

Der Stickstoffkreislauf ist ein weiteres Beispiel für tiefgreifende anthropogene Veränderungen. Durch die industrielle Produktion von Stickstoffdünger nach dem Haber-Bosch-Verfahren fixiert die Menschheit heute mehr atmosphärischen Stickstoff als alle natürlichen terrestrischen Prozesse zusammen. Diese Stickstoffanreicherung führt zur Eutrophierung von Gewässern, bei der übermäßiges Algenwachstum den Sauerstoffgehalt reduziert und sogenannte "Todeszonen" entstehen lässt, in denen kaum noch Leben möglich ist. Mittlerweile existieren über vierhundert solcher hypoxischen Gebiete in Küstenregionen weltweit.

Auch der Kohlenstoffkreislauf wurde fundamental verändert. Seit Beginn der Industrialisierung hat die Verbrennung fossiler Brennstoffe die atmosphärische CO₂-Konzentration von etwa 280 ppm auf über 420 ppm erhöht – der höchste Wert seit mindestens drei Millionen Jahren. Diese Veränderung geschieht in erdgeschichtlich beispielloser Geschwindigkeit. Die Ozeane absorbieren etwa ein Viertel des anthropogenen CO₂, was zu ihrer Versauerung führt. Der pH-Wert der Meeresoberfläche ist bereits um 0,1 Einheiten gesunken, was einer Zunahme der Wasserstoffionenkonzentration um dreißig Prozent entspricht. Diese Versauerung gefährdet kalkbildende Organismen wie Korallen, Muscheln und bestimmte Planktonarten, die am Anfang mariner Nahrungsnetze stehen.

Die Fragmentierung von Lebensräumen stellt eine besondere Bedrohung für große Säugetiere dar, die ausgedehnte Territorien benötigen. Straßen, Städte und Agrarflächen zerschneiden ehemals zusammenhängende Ökosysteme in isolierte Inseln. Diese Fragmentierung verhindert nicht nur den Genaustausch zwischen Populationen, sondern reduziert auch die Größe der verbliebenen Lebensräume unter kritische Schwellenwerte. Viele Arten können in diesen fragmentierten Habitaten langfristig nicht überleben, selbst wenn die Flächengröße auf den ersten Blick ausreichend erscheint.

Interessanterweise haben manche Arten von menschlichen Aktivitäten profitiert. Kulturfolger wie Ratten, Tauben und bestimmte Insektenarten haben sich erfolgreich an urbane Umgebungen angepasst. Dennoch kann dies den massiven Verlust spezialisierter Arten nicht ausgleichen. Die entstehenden Ökosysteme werden homogener und artenärmer – ein Prozess, den Ökologen als "biotische Homogenisierung" bezeichnen.

Die Konsequenzen dieser Veränderungen sind noch nicht vollständig absehbar. Ökosysteme besitzen Kippunkte, nach deren Überschreitung abrupte und möglicherweise irreversible Veränderungen eintreten können. Das Amazonasbecken könnte beispielsweise von einem Regenwald zu einer Savanne transformieren, falls die Entwaldung einen kritischen Schwellenwert überschreitet. Solche Regime-Wechsel würden die globalen Kohlenstoff- und Wasserkreisläufe dramatisch verändern und weitere Kippkaskaden auslösen.`,
    questions: [
      {
        question: "Laut dem Text hat sich der pH-Wert der Meeresoberfläche um wie viel verändert?",
        options: [
          "Er ist um 0,1 Einheiten gesunken",
          "Er ist um 30 Prozent gesunken",
          "Er ist um 280 ppm gestiegen",
          "Er ist um 0,1 Einheiten gestiegen",
        ],
        correctAnswer: 0,
        explanation:
          "Der Text gibt explizit an, dass der pH-Wert um 0,1 Einheiten gesunken ist. Die 30 Prozent beziehen sich auf die Zunahme der Wasserstoffionenkonzentration, nicht auf den pH-Wert selbst. 280 ppm ist die historische CO₂-Konzentration, kein pH-Wert.",
        relevantPassage:
          "Der pH-Wert der Meeresoberfläche ist bereits um 0,1 Einheiten gesunken, was einer Zunahme der Wasserstoffionenkonzentration um dreißig Prozent entspricht.",
      },
      {
        question: "Welche Aussage über das Haber-Bosch-Verfahren trifft laut Text zu?",
        options: [
          "Es reduziert die Eutrophierung von Gewässern",
          "Es wurde entwickelt, um Todeszonen zu bekämpfen",
          "Die Menschheit fixiert damit mehr Stickstoff als natürliche terrestrische Prozesse",
          "Es wird hauptsächlich zur Bekämpfung invasiver Arten eingesetzt",
        ],
        correctAnswer: 2,
        explanation:
          "Der Text besagt eindeutig, dass die Menschheit durch das Haber-Bosch-Verfahren mehr atmosphärischen Stickstoff fixiert als alle natürlichen terrestrischen Prozesse zusammen. Das Verfahren verursacht Eutrophierung, bekämpft sie nicht. Todeszonen sind eine Folge, kein Bekämpfungsziel. Invasive Arten werden im Text separat erwähnt.",
        relevantPassage:
          "Durch die industrielle Produktion von Stickstoffdünger nach dem Haber-Bosch-Verfahren fixiert die Menschheit heute mehr atmosphärischen Stickstoff als alle natürlichen terrestrischen Prozesse zusammen.",
      },
      {
        question: "Was kann aus dem Text über die derzeitige Aussterberate geschlossen werden?",
        options: [
          "Sie entspricht der natürlichen Hintergrundrate",
          "Sie liegt unter der Rate früherer Massenaussterben",
          "Sie übertrifft die natürliche Rate um das Hundert- bis Tausendfache",
          "Sie betrifft ausschließlich Arten in Regenwäldern",
        ],
        correctAnswer: 2,
        explanation:
          "Der Text stellt klar fest, dass Arten heute hundert- bis tausendfach schneller aussterben als die natürliche Hintergrundrate. Die aktülle Rate übertrifft die natürliche also erheblich und betrifft verschiedene Ökosysteme, nicht nur Regenwälder.",
        relevantPassage:
          "Schätzungen zufolge sterben Arten heute hundert- bis tausendfald schneller aus als die natürliche Hintergrundrate es erwarten ließe.",
      },
      {
        question: "Welche Folge der Lebensraumfragmentierung wird im Text NICHT erwähnt?",
        options: [
          "Verhinderung des Genaustauschs zwischen Populationen",
          "Reduzierung der Lebensraumgröße unter kritische Schwellenwerte",
          "Erhöhung der Biodiversität durch Inseleffekte",
          "Langfristiges Überleben vieler Arten wird unmöglich",
        ],
        correctAnswer: 2,
        explanation:
          "Der Text erwähnt keine Erhöhung der Biodiversität durch Fragmentierung. Im Gegenteil: Fragmentierung wird als Bedrohung dargestellt, die Genaustausch verhindert, Lebensräume verkleinert und das Überleben gefährdet. Eine Erhöhung der Biodiversität widerspricht der Gesamtaussage des Textes.",
        relevantPassage:
          "Diese Fragmentierung verhindert nicht nur den Genaustausch zwischen Populationen, sondern reduziert auch die Größe der verbliebenen Lebensräume unter kritische Schwellenwerte.",
      },
      {
        question:
          "Laut dem Text beträgt die atmosphärische CO₂-Konzentration vor der Industrialisierung etwa:",
        options: ["420 ppm", "280 ppm", "0,1 ppm", "3 Millionen ppm"],
        correctAnswer: 1,
        explanation:
          "Der Text gibt an, dass die CO₂-Konzentration seit Beginn der Industrialisierung von etwa 280 ppm auf über 420 ppm gestiegen ist. 280 ppm ist also der Wert vor der Industrialisierung, 420 ppm der aktülle Wert. Die 3 Millionen beziehen sich auf Jahre, nicht auf ppm.",
        relevantPassage:
          "Seit Beginn der Industrialisierung hat die Verbrennung fossiler Brennstoffe die atmosphärische CO₂-Konzentration von etwa 280 ppm auf über 420 ppm erhöht",
      },
    ],
  },
  {
    id: "tv-7",
    title: "Kognitive Verzerrungen in der medizinischen Diagnostik",
    topic: "Psychologie",
    difficulty: 3,
    text: `Die medizinische Diagnostik erfordert die Integration komplexer Informationen unter Zeitdruck und Unsicherheit. Dabei unterliegen Ärzte – wie alle Menschen – systematischen Denkfehlern, die als kognitive Verzerrungen oder Bias bezeichnet werden. Diese Verzerrungen sind keine Zeichen mangelnder Kompetenz, sondern inherente Eigenschaften menschlicher Informationsverarbeitung. Ihr Verständnis ist entscheidend für die Verbesserung der diagnostischen Genauigkeit und Patientensicherheit.

Der Ankerheuristik-Effekt beschreibt die Tendenz, sich zu stark auf die erste erhaltene Information zu verlassen. In der medizinischen Praxis manifestiert sich dies häufig als "Diagnosemomentum": Die initiale Verdachtsdiagnose – oft bereits durch den Überweisungsarzt gestellt – wird zum kognitiven Anker, der die weitere Informationssuche und -interpretation beeinflusst. Studien zeigen, dass Ärzte Informationen, die die Ankerdiagnose stützen, stärker gewichten als widersprüchliche Befunde. Dieser Effekt verstärkt sich, wenn die Ankerinformation von einer Person mit hohem Status stammt oder wenn sie in der Patientenakte prominent platziert ist.

Eng verwandt ist der Bestätigungsfehler (Confirmation Bias), bei dem Ärzte selektiv nach Informationen suchen, die ihre Hypothese bestätigen, während sie widersprechende Hinweise vernachlässigen oder uminterpretieren. Ein Arzt, der beispielsweise eine Lungenembolie vermutet, könnte die Unspezifität der Symptome übersehen und normale Laborwerte als "noch nicht aussagekräftig" interpretieren, anstatt die Diagnose zu hinterfragen. Diese Tendenz wird durch das menschliche Bedürfnis nach kognitiver Konsistenz verstärkt: Widersprüchliche Informationen erzeugen Unbehagen, das durch selektive Wahrnehmung reduziert wird.

Die Verfügbarkeitsheuristik führt dazu, dass Diagnosen für wahrscheinlicher gehalten werden, wenn sie leicht aus dem Gedächtnis abrufbar sind. Ein Arzt, der kürzlich einen Fall von Meningitis behandelt hat, wird diese Diagnose bei nachfolgenden Patienten mit Kopfschmerzen eher in Betracht ziehen. Ebenso beeinflussen mediale Berichterstattung, Fortbildungen oder emotionale Ereignisse die wahrgenommene Häufigkeit von Erkrankungen. Während diese Heuristik in manchen Fällen nützlich ist – seltene, aber kürzlich erlebte Krankheiten werden nicht übersehen – führt sie oft zu einer Überschätzung spektakulärer und Unterschätzung banaler Diagnosen.

Der Repräsentativitätsfehler tritt auf, wenn Ärzte die Wahrscheinlichkeit einer Erkrankung danach beurteilen, wie sehr ein Patient dem "typischen" Krankheitsbild entspricht, ohne die Basisrate zu berücksichtigen. Ein klassisches Beispiel: Ein zwanzigjähriger sportlicher Mann mit Brustschmerzen passt nicht zum stereotypen Bild eines Herzinfarktpatienten, obwohl auch junge Menschen Infarkte erleiden können. Umgekehrt wird bei einem übergewichtigen, älteren Mann mit Brustschmerzen möglicherweise vorschnell eine kardiale Ursache angenommen, auch wenn die spezifischen Symptome eher für eine muskuloskelettale Problematik sprechen. Die Basisrate – also die tatsächliche Prävalenz einer Erkrankung in der relevanten Population – wird dabei systematisch untergewichtet.

Besonders problematisch ist der "Premature Closure" – das vorzeitige Abschließen des diagnostischen Prozesses, sobald eine plausible Diagnose gefunden wurde. Ärzte hören auf, nach alternativen Erklärungen zu suchen, sobald sie eine Diagnose identifiziert haben, die die wichtigsten Symptome erklärt. Dabei wird übersehen, dass mehrere Erkrankungen gleichzeitig vorliegen können oder dass die identifizierte Diagnose nicht alle Befunde erklärt. Diese Tendenz wird durch Zeitdruck, Arbeitsbelastung und das Gefühl von Gewissheit verstärkt.

Ein weiteres Phänomen ist der Rückschaufehler (Hindsight Bias), der besonders in der medizinischen Ausbildung und bei Komplikationsanalysen relevant ist. Nachdem die korrekte Diagnose bekannt ist, erscheint der Diagnoseweg rückblickend offensichtlich, und Fehler werden als vermeidbar wahrgenommen. Dies kann zu ungerechtfertigter Kritik an diagnostischen Entscheidungen führen, die unter den gegebenen Umständen und Informationen durchaus rational waren. Der Rückschaufehler erschwert das Lernen aus Fehlern, da die tatsächliche Komplexität und Unsicherheit der ursprünglichen Situation nicht mehr adäquat rekonstruiert wird.

Interessanterweise schützt medizinische Expertise nicht vor diesen Verzerrungen – erfahrene Ärzte zeigen sie genauso wie Anfänger, allerdings in anderen Situationen. Während Novizen durch Wissensdefizite fehleranfällig sind, unterliegen Experten eher intuitiven Schnellurteilen, die auf musterbasierten Heuristiken beruhen. Diese sind in typischen Fällen hocheffizient, versagen aber bei atypischen Präsentationen.`,
    questions: [
      {
        question:
          "Was charakterisiert laut Text den Ankerheuristik-Effekt in der medizinischen Diagnostik?",
        options: [
          "Ärzte verlassen sich zu stark auf die zuletzt erhaltene Information",
          "Die initiale Verdachtsdiagnose beeinflusst die weitere Informationssuche",
          "Statusinformationen von Patienten werden ignoriert",
          "Widersprüchliche Befunde werden stärker gewichtet als bestätigende",
        ],
        correctAnswer: 1,
        explanation:
          "Der Text definiert den Ankerheuristik-Effekt explizit als Tendenz, sich auf die erste (nicht letzte) Information zu verlassen. In der Medizin manifestiert sich dies als 'Diagnosemomentum', bei dem die initiale Verdachtsdiagnose die weitere Informationssuche beeinflusst. Widersprüchliche Befunde werden schwächer gewichtet, nicht stärker.",
        relevantPassage:
          "Der Ankerheuristik-Effekt beschreibt die Tendenz, sich zu stark auf die erste erhaltene Information zu verlassen. In der medizinischen Praxis manifestiert sich dies häufig als 'Diagnosemomentum': Die initiale Verdachtsdiagnose [...] wird zum kognitiven Anker, der die weitere Informationssuche und -interpretation beeinflusst.",
      },
      {
        question: "Welches Beispiel für den Repräsentativitätsfehler wird im Text genannt?",
        options: [
          "Ein Arzt übersieht eine Meningitis nach medialer Berichterstattung",
          "Ein junger sportlicher Mann mit Brustschmerzen wird nicht als Herzinfarktpatient erkannt",
          "Ein Arzt sucht nur nach Informationen, die seine Hypothese bestätigen",
          "Eine Diagnose wird als offensichtlich wahrgenommen, nachdem sie bekannt ist",
        ],
        correctAnswer: 1,
        explanation:
          "Der Text nennt explizit den Fall eines zwanzigjährigen sportlichen Mannes mit Brustschmerzen, der nicht zum stereotypen Bild passt und dessen Herzinfarkt daher übersehen werden könnte. Meningitis ist ein Beispiel für Verfügbarkeitsheuristik, die Suche nach bestätigenden Informationen ist Bestätigungsfehler, und die nachträgliche Offensichtlichkeit ist Rückschaufehler.",
        relevantPassage:
          "Ein zwanzigjähriger sportlicher Mann mit Brustschmerzen passt nicht zum stereotypen Bild eines Herzinfarktpatienten, obwohl auch junge Menschen Infarkte erleiden können.",
      },
      {
        question:
          "Was kann aus dem Text über die Beziehung zwischen Expertise und kognitiven Verzerrungen geschlossen werden?",
        options: [
          "Medizinische Expertise schützt vollständig vor kognitiven Verzerrungen",
          "Experten zeigen kognitive Verzerrungen genauso wie Anfänger, aber in anderen Situationen",
          "Nur Novizen unterliegen kognitiven Verzerrungen aufgrund von Wissensdefiziten",
          "Erfahrene Ärzte sind anfälliger für kognitive Verzerrungen als Anfänger",
        ],
        correctAnswer: 1,
        explanation:
          "Der Text stellt explizit fest, dass Expertise nicht vor Verzerrungen schützt – erfahrene Ärzte zeigen sie genauso wie Anfänger, allerdings in anderen Situationen. Experten unterliegen eher intuitiven Schnellurteilen bei atypischen Fällen, während Novizen durch Wissensdefizite fehleranfällig sind. Die Aussage ist differenziert, nicht absolut.",
        relevantPassage:
          "Interessanterweise schützt medizinische Expertise nicht vor diesen Verzerrungen – erfahrene Ärzte zeigen sie genauso wie Anfänger, allerdings in anderen Situationen.",
      },
      {
        question: "Laut Text führt die Verfügbarkeitsheuristik dazu, dass:",
        options: [
          "Ärzte systematisch die Basisrate von Erkrankungen ignorieren",
          "Diagnosen für wahrscheinlicher gehalten werden, wenn sie leicht aus dem Gedächtnis abrufbar sind",
          "Der diagnostische Prozess vorzeitig abgeschlossen wird",
          "Mehrere gleichzeitig vorliegende Erkrankungen übersehen werden",
        ],
        correctAnswer: 1,
        explanation:
          "Der Text definiert Verfügbarkeitsheuristik klar als Tendenz, dass Diagnosen für wahrscheinlicher gehalten werden, wenn sie leicht abrufbar sind (z.B. nach kürzlich behandeltem Fall oder medialer Berichterstattung). Die Ignorierung der Basisrate ist Repräsentativitätsfehler, vorzeitiger Abschluss ist Premature Closure, und das Übersehen mehrerer Erkrankungen wird bei Premature Closure erwähnt.",
        relevantPassage:
          "Die Verfügbarkeitsheuristik führt dazu, dass Diagnosen für wahrscheinlicher gehalten werden, wenn sie leicht aus dem Gedächtnis abrufbar sind.",
      },
      {
        question: "Welche Auswirkung des Rückschaufehlers wird im Text beschrieben?",
        options: [
          "Ärzte überschätzen die Häufigkeit spektakulärer Diagnosen",
          "Diagnostische Entscheidungen erscheinen rückblickend offensichtlich und Fehler vermeidbar",
          "Widersprüchliche Informationen werden selektiv ignoriert",
          "Experten verlassen sich zu stark auf musterbasierte Heuristiken",
        ],
        correctAnswer: 1,
        explanation:
          "Der Text beschreibt den Rückschaufehler (Hindsight Bias) explizit so, dass der Diagnoseweg rückblickend offensichtlich erscheint und Fehler als vermeidbar wahrgenommen werden. Die Überschätzung spektakulärer Diagnosen ist Verfügbarkeitsheuristik, selektive Ignorierung ist Bestätigungsfehler, und musterbasierte Heuristiken bei Experten sind ein separater Punkt.",
        relevantPassage:
          "Nachdem die korrekte Diagnose bekannt ist, erscheint der Diagnoseweg rückblickend offensichtlich, und Fehler werden als vermeidbar wahrgenommen.",
      },
    ],
  },
  {
    id: "tv-8",
    title: "Magnetresonanztomographie: Physik im Dienst der Medizin",
    topic: "Physik/Medizin",
    difficulty: 3,
    text: `Die Magnetresonanztomographie (MRT) gehört zu den wichtigsten bildgebenden Verfahren der modernen Medizin. Anders als die Computertomographie kommt sie ohne ionisierende Strahlung aus und bietet exzellenten Weichteilkontrast. Die physikalischen Grundlagen dieser Technik basieren auf den quantenmechanischen Eigenschaften von Atomkernen und elektromagnetischen Feldern.

Im Zentrum der MRT steht das physikalische Phänomen der Kernspinresonanz. Atomkerne mit ungerader Protonen- oder Neutronenzahl besitzen einen Kernspin – einen quantenmechanischen Drehimpuls, der mit einem magnetischen Moment verbunden ist. In der medizinischen Bildgebung nutzt man hauptsächlich Wasserstoffkerne (Protonen), da sie im menschlichen Körper in hoher Konzentration vorkommen und ein starkes magnetisches Signal erzeugen.

Ohne äußeres Magnetfeld sind diese magnetischen Momente der Protonen zufällig orientiert. Legt man jedoch ein starkes statisches Magnetfeld an – typischerweise 1,5 bis 3 Tesla, also etwa 30.000 bis 60.000 Mal stärker als das Erdmagnetfeld – richten sich die Kernspins entlang oder entgegen der Feldrichtung aus. Die parallele Ausrichtung ist energetisch leicht bevorzugt, sodass eine schwache Nettomagnetisierung in Feldrichtung entsteht. Diese Magnetisierung ist die Grundlage des MRT-Signals.

Die ausgerichteten Kernspins präzedieren – ähnlich einem kreiselnden Spielzeugkreisel – um die Richtung des äußeren Magnetfelds. Die Präzessionsfrequenz, auch Larmorfrequenz genannt, ist direkt proportional zur Stärke des Magnetfelds und wird durch die gyromagnetische Konstante bestimmt. Für Protonen bei 1,5 Tesla beträgt diese Frequenz etwa 64 Megahertz, also im Radiowellenbereich.

Zur Signalerzeugung wird ein Hochfrequenzpuls exakt bei der Larmorfrequenz eingestrahlt. Dieser Radiofrequenzpuls bewirkt zwei Effekte: Erstens kippt er die Nettomagnetisierung aus der Richtung des statischen Felds – typischerweise um neunzig oder hundertachtzig Grad. Zweitens bringt er die individüllen Kernspins in Phase, sodass sie synchron präzedieren. Diese kohärente Präzession erzeugt ein messbares hochfrequentes Signal in einer Empfangsspule.

Nach Abschalten des Hochfrequenzpulses kehrt das System durch zwei unabhängige Prozesse in seinen Gleichgewichtszustand zurück. Die Längsrelaxation (T1-Relaxation) beschreibt die Wiederherstellung der Magnetisierung in Feldrichtung durch Energieabgabe an die Umgebung. Die Querrelaxation (T2-Relaxation) beschreibt den Verlust der Phasenkohärenz durch Wechselwirkungen zwischen benachbarten Kernen. Beide Prozesse folgen exponentiellen Zeitverläufen mit gewebespezifischen Zeitkonstanten.

Die Relaxationszeiten unterscheiden sich erheblich zwischen verschiedenen Geweben und sind die Hauptquelle des MRT-Kontrasts. Wasserhaltiges Gewebe wie Liquor zeigt lange T1- und T2-Zeiten, während fettreiches Gewebe kurze T1-Zeiten aufweist. Pathologische Veränderungen – etwa Tumore, Entzündungen oder Ödeme – verändern typischerweise die lokale Wasserkonzentration und damit die Relaxationszeiten, wodurch sie im MRT-Bild sichtbar werden.

Für die räumliche Kodierung des Signals werden Gradientenfelder eingesetzt – schwächere Magnetfelder, die sich linear über den Raum ändern. Da die Larmorfrequenz vom Magnetfeld abhängt, bewirkt ein Gradient, dass Protonen an verschiedenen Orten mit unterschiedlichen Frequenzen präzedieren. Durch Anwendung von Gradienten in allen drei Raumrichtungen und mathematische Fourier-Transformation des empfangenen Signals kann jedem Bildpunkt seine entsprechende Signalintensität zugeordnet werden.

Die Bildqualität wird durch mehrere Parameter bestimmt. Eine höhere Feldstärke verbessert das Signal-Rausch-Verhältnis und ermöglicht höhere räumliche Auflösung oder kürzere Messzeiten. Allerdings verstärken sich bei höheren Feldstärken auch Artefakte durch Feldinhomogenitäten und Suszeptibilitätsunterschiede zwischen Geweben. Die Schichtdicke, Pixelgröße und Anzahl der Signalmittelungen beeinflussen Auflösung, Kontrast und Aufnahmedauer in komplexer Weise.

Moderne MRT-Sequenzen nutzen ausgefeilte Pulssequenzen und k-Raum-Akquisitionsstrategien, um spezifische Kontraste zu erzeugen oder Aufnahmen zu beschleunigen. Funktionelle MRT (fMRT) nutzt den BOLD-Effekt, um indirekt neuronale Aktivität zu messen. Diffusionsgewichtete Bildgebung ermöglicht die Darstellung von Nervenfaserbahnen. Kontrastverstärkung durch paramagnetische Substanzen wie Gadolinium verkürzt lokale T1-Zeiten und verbessert die Detektion von Läsionen mit gestörter Blut-Hirn-Schranke.`,
    questions: [
      {
        question: "Laut dem Text beträgt die Larmorfrequenz für Protonen bei 1,5 Tesla etwa:",
        options: ["30.000 Megahertz", "64 Megahertz", "1,5 Megahertz", "180 Megahertz"],
        correctAnswer: 1,
        explanation:
          "Der Text gibt explizit an, dass die Larmorfrequenz für Protonen bei 1,5 Tesla etwa 64 Megahertz beträgt. 30.000 ist das Verhältnis zum Erdmagnetfeld, 1,5 ist die Feldstärke in Tesla, und 180 ist ein Kippwinkel in Grad.",
        relevantPassage:
          "Für Protonen bei 1,5 Tesla beträgt diese Frequenz etwa 64 Megahertz, also im Radiowellenbereich.",
      },
      {
        question: "Welche zwei Effekte bewirkt laut Text der Hochfrequenzpuls?",
        options: [
          "Er verstärkt das statische Magnetfeld und erzeugt Gradientenfelder",
          "Er kippt die Nettomagnetisierung und bringt Kernspins in Phase",
          "Er verkürzt T1-Zeiten und verlängert T2-Zeiten",
          "Er aktiviert die Empfangsspule und startet die Fourier-Transformation",
        ],
        correctAnswer: 1,
        explanation:
          "Der Text beschreibt explizit zwei Effekte des Hochfrequenzpulses: Erstens kippt er die Nettomagnetisierung aus der Feldrichtung, zweitens bringt er die Kernspins in Phase. Die anderen Optionen vermischen verschiedene, unabhängige Konzepte der MRT.",
        relevantPassage:
          "Dieser Radiofrequenzpuls bewirkt zwei Effekte: Erstens kippt er die Nettomagnetisierung aus der Richtung des statischen Felds [...]. Zweitens bringt er die individüllen Kernspins in Phase",
      },
      {
        question: "Was kann aus dem Text über T1- und T2-Relaxation geschlossen werden?",
        options: [
          "T1-Relaxation beschreibt den Verlust der Phasenkohärenz",
          "Beide Prozesse sind identisch und folgen denselben Zeitkonstanten",
          "T1-Relaxation beschreibt die Wiederherstellung der Magnetisierung in Feldrichtung",
          "T2-Relaxation erfolgt durch Energieabgabe an die Umgebung",
        ],
        correctAnswer: 2,
        explanation:
          "Der Text definiert T1-Relaxation klar als Wiederherstellung der Magnetisierung in Feldrichtung durch Energieabgabe. T2-Relaxation beschreibt den Verlust der Phasenkohärenz (nicht T1). Die Prozesse sind unabhängig mit unterschiedlichen, gewebespezifischen Zeitkonstanten.",
        relevantPassage:
          "Die Längsrelaxation (T1-Relaxation) beschreibt die Wiederherstellung der Magnetisierung in Feldrichtung durch Energieabgabe an die Umgebung. Die Querrelaxation (T2-Relaxation) beschreibt den Verlust der Phasenkohärenz",
      },
      {
        question: "Welche Funktion haben Gradientenfelder laut Text?",
        options: [
          "Sie erzeugen das statische Hauptmagnetfeld von 1,5 bis 3 Tesla",
          "Sie ermöglichen die räumliche Kodierung durch ortsabhängige Frequenzänderung",
          "Sie verkürzen die Relaxationszeiten pathologischer Gewebe",
          "Sie verstärken das Signal-Rausch-Verhältnis bei höheren Feldstärken",
        ],
        correctAnswer: 1,
        explanation:
          "Der Text erklärt, dass Gradientenfelder für räumliche Kodierung eingesetzt werden: Sie ändern sich linear über den Raum und bewirken, dass Protonen an verschiedenen Orten mit unterschiedlichen Frequenzen präzedieren. Sie erzeugen nicht das Hauptfeld, verändern nicht direkt Relaxationszeiten und verbessern nicht das Signal-Rausch-Verhältnis.",
        relevantPassage:
          "Für die räumliche Kodierung des Signals werden Gradientenfelder eingesetzt – schwächere Magnetfelder, die sich linear über den Raum ändern. Da die Larmorfrequenz vom Magnetfeld abhängt, bewirkt ein Gradient, dass Protonen an verschiedenen Orten mit unterschiedlichen Frequenzen präzedieren.",
      },
      {
        question: "Laut Text zeigt wasserhaltiges Gewebe wie Liquor:",
        options: [
          "Kurze T1- und T2-Zeiten",
          "Lange T1- und T2-Zeiten",
          "Kurze T1-Zeiten und lange T2-Zeiten",
          "Lange T1-Zeiten und kurze T2-Zeiten",
        ],
        correctAnswer: 1,
        explanation:
          "Der Text gibt explizit an, dass wasserhaltiges Gewebe wie Liquor lange T1- und T2-Zeiten zeigt. Im Kontrast dazu wird erwähnt, dass fettreiches Gewebe kurze T1-Zeiten aufweist. Die Kombination 'lange T1 und T2' ist charakteristisch für wasserreiche Gewebe.",
        relevantPassage:
          "Wasserhaltiges Gewebe wie Liquor zeigt lange T1- und T2-Zeiten, während fettreiches Gewebe kurze T1-Zeiten aufweist.",
      },
    ],
  },
  {
    id: "tv-9",
    title: "Stammzellforschung: Zwischen Hoffnung und Ethik",
    topic: "Biochemie",
    difficulty: 3,
    text: `Stammzellen besitzen zwei bemerkenswerte Eigenschaften, die sie für Forschung und Medizin außerordentlich wertvoll machen: die Fähigkeit zur Selbsterneuerung durch Zellteilung und das Potenzial, sich in verschiedene spezialisierte Zelltypen zu differenzieren. Diese Kombination macht sie zu einem vielversprechenden Werkzeug für regenerative Therapien, Krankheitsmodellierung und das Verständnis grundlegender Entwicklungsprozesse.

Stammzellen werden nach ihrem Differenzierungspotenzial klassifiziert. Totipotente Zellen – wie die befruchtete Eizelle und die ersten Teilungsprodukte – können einen vollständigen Organismus einschließlich exträmbryonaler Gewebe bilden. Pluripotente Stammzellen können sich in alle Zelltypen der drei Keimblätter differenzieren, jedoch nicht in exträmbryonales Gewebe. Embryonale Stammzellen (ES-Zellen), gewonnen aus der inneren Zellmasse der Blastozyste, sind das klassische Beispiel für pluripotente Zellen. Multipotente Stammzellen besitzen ein eingeschränkteres Differenzierungspotenzial – hämatopötische Stammzellen im Knochenmark beispielsweise können alle Blutzelltypen bilden, aber keine Neuronen oder Muskelzellen.

Die Gewinnung embryonaler Stammzellen ist ethisch kontrovers, da sie die Zerstörung früher Embryonen erfordert. Dies führte zur Suche nach Alternativen und resultierte 2006 in einer wissenschaftlichen Revolution: Shinya Yamanaka gelang es, differenzierte Körperzellen durch Einbringen von nur vier Transkriptionsfaktoren – Oct4, Sox2, Klf4 und c-Myc – in einen pluripotenten Zustand zurückzuversetzen. Diese induzierten pluripotenten Stammzellen (iPS-Zellen) umgehen die ethischen Bedenken der ES-Zellforschung und ermöglichen zudem patientenspezifische Zelllinien.

Der Reprogrammierungsprozess ist jedoch komplex und noch nicht vollständig verstanden. Die Transkriptionsfaktoren aktivieren ein regulatorisches Netzwerk, das die Zellidentität neu definiert. Epigenetische Modifikationen – DNA-Methylierung und Histon-Modifikationen – werden umfassend umorganisiert, wobei differenzierungsspezifische Gene stillgelegt und Pluripotenzgene reaktiviert werden. Der Prozess ist ineffizient: Nur ein bis zwei Prozent der behandelten Zellen werden erfolgreich reprogrammiert. Die molekularen Barrieren dieser Reprogrammierung zu verstehen, könnte die Effizienz verbessern und Einblicke in die Plastizität zellulärer Identität geben.

Ein vielversprechender Ansatz ist die direkte Reprogrammierung oder Transdifferenzierung, bei der eine differenzierte Zelle direkt in einen anderen spezialisierten Zelltyp umgewandelt wird, ohne den pluripotenten Zwischenzustand. Fibroblasten können beispielsweise direkt in Neuronen, Kardiomyozyten oder Leberzellen konvertiert werden. Dies könnte therapeutisch vorteilhaft sein, da es den langwierigen Differenzierungsprozess überspringt und das theoretische Tumorrisiko pluripotenter Zellen vermeidet.

Die Differenzierung von Stammzellen in gewünschte Zelltypen erfordert die präzise Steuerung von Signalwegen. In der Entwicklung orchestrieren morphogenetische Gradienten, Zell-Zell-Interaktionen und zeitliche Abfolgen die Zellfatewahl. In vitro versucht man, diese Bedingungen durch definierte Kombinationen von Wachstumsfaktoren, Zytokinen und kleinen Molekülen nachzuahmen. Für manche Zelltypen – etwa dopaminerge Neuronen oder Kardiomyozyten – sind hocheffiziente Protokolle etabliert. Andere Zelltypen, insbesondere bestimmte Neuronenpopulationen oder Nierenzellen, bleiben schwer zugänglich.

Die medizinischen Anwendungen reichen von Zellersatztherapien bis zu Krankheitsmodellen. Bei Diabetes Typ 1 könnte der Ersatz zerstörter Insulin-produzierender Betazellen durch aus Stammzellen generierte Zellen die Krankheit heilen. Klinische Studien untersuchen stammzellbasierte Therapien für Parkinson, Rückenmarksverletzungen und Makuladegeneration. Die Herausforderungen sind erheblich: Transplantierte Zellen müssen am Zielort überleben, sich funktionell integrieren und dürfen keine unerwünschten Zelltypen bilden oder unkontrolliert proliferieren.

Stammzellen von Patienten mit genetischen Erkrankungen ermöglichen die Modellierung dieser Krankheiten in der Kulturschale. Neuronen aus iPS-Zellen von Patienten mit Amyotropher Lateralsklerose zeigen krankheitstypische Veränderungen und können für Medikamententests genutzt werden. Diese "Krankheit-in-der-Schale"-Modelle könnten besonders für seltene Erkrankungen wertvoll sein, für die keine Tiermodelle existieren.

Die Stammzellnische – die lokale Mikroumgebung, die Stammzellen in vivo beherbergt – reguliert das Gleichgewicht zwischen Selbsterneuerung und Differenzierung. Diese Nische umfasst Nachbarzellen, extrazelluläre Matrix und lösliche Faktoren. Störungen der Nischenfunktion können zu Stammzellerschöpfung oder maligner Transformation beitragen. Das Verständnis der Nische könnte die Ex-vivo-Expansion therapeutisch relevanter Stammzellen verbessern und neue Ansatzpunkte für Krebstherapien liefern, da auch Krebsstammzellen in spezialisierten Nischen überdauern.`,
    questions: [
      {
        question:
          "Welche vier Transkriptionsfaktoren nutzte Yamanaka laut Text zur Erzeugung von iPS-Zellen?",
        options: [
          "DNA-Methylierung, Histon-Modifikationen, Pluripotenzgene und Differenzierungsgene",
          "Oct4, Sox2, Klf4 und c-Myc",
          "Fibroblasten, Neuronen, Kardiomyozyten und Leberzellen",
          "Wachstumsfaktoren, Zytokine, morphogenetische Gradienten und kleine Moleküle",
        ],
        correctAnswer: 1,
        explanation:
          "Der Text nennt explizit Oct4, Sox2, Klf4 und c-Myc als die vier Transkriptionsfaktoren, die Yamanaka 2006 nutzte. Die erste Option listet epigenetische Mechanismen, die dritte verschiedene Zelltypen und die vierte Differenzierungssignale auf – keine davon sind die Yamanaka-Faktoren.",
        relevantPassage:
          "Shinya Yamanaka gelang es, differenzierte Körperzellen durch Einbringen von nur vier Transkriptionsfaktoren – Oct4, Sox2, Klf4 und c-Myc – in einen pluripotenten Zustand zurückzuversetzen.",
      },
      {
        question: "Was unterscheidet laut Text totipotente von pluripotenten Stammzellen?",
        options: [
          "Totipotente Zellen können nur Blutzellen bilden",
          "Pluripotente Zellen können einen vollständigen Organismus bilden",
          "Totipotente Zellen können exträmbryonales Gewebe bilden, pluripotente nicht",
          "Pluripotente Zellen sind effizienter in der Reprogrammierung",
        ],
        correctAnswer: 2,
        explanation:
          "Der Text erklärt klar, dass totipotente Zellen einen vollständigen Organismus einschließlich exträmbryonaler Gewebe bilden können, während pluripotente Zellen sich in alle Zelltypen der drei Keimblätter differenzieren können, jedoch nicht in exträmbryonales Gewebe. Dies ist der zentrale Unterschied.",
        relevantPassage:
          "Totipotente Zellen – wie die befruchtete Eizelle und die ersten Teilungsprodukte – können einen vollständigen Organismus einschließlich exträmbryonaler Gewebe bilden. Pluripotente Stammzellen können sich in alle Zelltypen der drei Keimblätter differenzieren, jedoch nicht in exträmbryonales Gewebe.",
      },
      {
        question: "Laut Text beträgt die Erfolgsrate der Reprogrammierung zu iPS-Zellen etwa:",
        options: [
          "Nahezu 100 Prozent der behandelten Zellen",
          "Etwa 50 Prozent der behandelten Zellen",
          "Nur ein bis zwei Prozent der behandelten Zellen",
          "Weniger als 0,01 Prozent der behandelten Zellen",
        ],
        correctAnswer: 2,
        explanation:
          "Der Text gibt explizit an, dass nur ein bis zwei Prozent der behandelten Zellen erfolgreich reprogrammiert werden, was zeigt, dass der Prozess ineffizient ist. Alle anderen Prozentsätze werden im Text nicht genannt und sind falsch.",
        relevantPassage:
          "Der Prozess ist ineffizient: Nur ein bis zwei Prozent der behandelten Zellen werden erfolgreich reprogrammiert.",
      },
      {
        question:
          "Was ist laut Text der Vorteil der direkten Reprogrammierung gegenüber dem Weg über iPS-Zellen?",
        options: [
          "Sie erfordert keine Transkriptionsfaktoren",
          "Sie überspringt den pluripotenten Zwischenzustand und vermeidet theoretisches Tumorrisiko",
          "Sie ist ethisch weniger problematisch als ES-Zellen",
          "Sie ermöglicht die Bildung exträmbryonaler Gewebe",
        ],
        correctAnswer: 1,
        explanation:
          "Der Text erklärt, dass direkte Reprogrammierung den langwierigen Differenzierungsprozess überspringt und das theoretische Tumorrisiko pluripotenter Zellen vermeidet, indem der pluripotente Zwischenzustand umgangen wird. Die ethischen Bedenken beziehen sich auf ES-Zellen, nicht auf den Vergleich iPS vs. direkte Reprogrammierung.",
        relevantPassage:
          "Dies könnte therapeutisch vorteilhaft sein, da es den langwierigen Differenzierungsprozess überspringt und das theoretische Tumorrisiko pluripotenter Zellen vermeidet.",
      },
      {
        question: "Welche Funktion der Stammzellnische wird im Text NICHT erwähnt?",
        options: [
          "Regulation des Gleichgewichts zwischen Selbsterneuerung und Differenzierung",
          "Bereitstellung von Nachbarzellen, extrazellulärer Matrix und löslichen Faktoren",
          "Direkte Erzeugung von iPS-Zellen durch Transkriptionsfaktoren",
          "Beherbergung von Stammzellen und Krebsstammzellen",
        ],
        correctAnswer: 2,
        explanation:
          "Die Erzeugung von iPS-Zellen durch Transkriptionsfaktoren wird im Text beschrieben, aber nicht als Funktion der Stammzellnische. Die Nische reguliert Selbsterneuerung/Differenzierung, umfasst Nachbarzellen und Matrix, und beherbergt sowohl normale als auch Krebsstammzellen – all dies wird explizit erwähnt.",
        relevantPassage:
          "Die Stammzellnische – die lokale Mikroumgebung, die Stammzellen in vivo beherbergt – reguliert das Gleichgewicht zwischen Selbsterneuerung und Differenzierung. Diese Nische umfasst Nachbarzellen, extrazelluläre Matrix und lösliche Faktoren.",
      },
    ],
  },
  {
    id: "tv-10",
    title: "Künstliche Intelligenz in der Medizin",
    topic: "Technik/Medizin",
    difficulty: 1,
    text: `Künstliche Intelligenz (KI) verändert die moderne Medizin grundlegend. Von der Diagnosestellung über die Therapieplanung bis zur Arzneimittelentwicklung eröffnen intelligente Algorithmen neue Möglichkeiten. Besonders maschinelles Lernen, bei dem Computer aus Daten lernen, ohne explizit programmiert zu werden, hat in den letzten Jahren bemerkenswerte Fortschritte erzielt.

Ein Hauptanwendungsgebiet ist die medizinische Bildgebung. Algorithmen können mittlerweile Röntgenbilder, CT-Scans und Hautläsionen analysieren und dabei eine Genauigkeit erreichen, die mit der von Fachärzten vergleichbar oder diese sogar übertrifft. Ein KI-System zur Erkennung diabetischer Retinopathie in Netzhautfotos wurde bereits von der US-amerikanischen Zulassungsbehörde FDA genehmigt. Das System analysiert Fotografien des Augenhintergrunds und identifiziert Anzeichen einer durch Diabetes verursachten Netzhautschädigung, die unbehandelt zur Erblindung führen kann.

Die Stärke dieser Systeme liegt in ihrer Fähigkeit, große Datenmengen zu verarbeiten und subtile Muster zu erkennen, die dem menschlichen Auge entgehen könnten. Ein neuronales Netzwerk für die Hautkrebserkennung wurde beispielsweise mit über 130.000 Bildern verschiedener Hautveränderungen trainiert. Nach diesem Training konnte es bösartige Melanome mit einer Trefferquote identifizieren, die der von erfahrenen Dermatologen entsprach. Solche Systeme könnten besonders in Regionen mit Ärztemangel oder fehlenden Spezialisten wertvolle Dienste leisten.

In der Pathologie unterstützen KI-Systeme bei der Analyse von Gewebeproben. Die mikroskopische Untersuchung von Biopsien ist zeitaufwendig und erfordert hochspezialisiertes Fachwissen. Algorithmen können digitalisierte Gewebeschnitte auf Tumorzellen durchsuchen, deren Anzahl quantifizieren und Merkmale klassifizieren, die für die Prognose und Therapiewahl relevant sind. Dies beschleunigt nicht nur den Diagnoseprozess, sondern ermöglicht auch objektivere und reproduzierbarere Ergebnisse.

Ein weiteres Einsatzfeld ist die Prädiktion von Krankheitsverläufen. KI-Modelle analysieren elektronische Patientenakten, Laborwerte und Vitalparameter, um Risikopatienten zu identifizieren. In Krankenhäusern werden solche Systeme eingesetzt, um Patienten zu erkennen, die ein erhöhtes Risiko für eine Sepsis – eine lebensbedrohliche Blutvergiftung – haben. Durch frühzeitige Warnung können Ärzte schneller intervenieren und möglicherweise Leben retten.

Die personalisierte Medizin profitiert ebenfalls von KI. Genetische Daten, Biomarker und klinische Informationen werden integriert, um für jeden Patienten die optimale Therapie zu finden. Bei Krebserkrankungen beispielsweise kann KI vorhersagen, welche Patienten wahrscheinlich auf eine bestimmte Chemotherapie ansprechen werden und welche nicht. Dies erspart Patienten unwirksame Behandlungen mit belastenden Nebenwirkungen.

In der Arzneimittelentwicklung beschleunigt KI die Suche nach neuen Wirkstoffen. Traditionell ist dieser Prozess extrem zeit- und kostenintensiv. KI-Algorithmen können Millionen von Molekülstrukturen simulieren und bewerten, um vielversprechende Kandidaten zu identifizieren. Sie analysieren, wie potenzielle Wirkstoffe mit Zielproteinen interagieren, und sagen ihre Eigenschaften vorher, lange bevor kostspielige Labortests durchgeführt werden müssen.

Trotz dieser beeindruckenden Möglichkeiten gibt es wichtige Herausforderungen. Die Qualität von KI-Systemen hängt entscheidend von den Trainingsdaten ab. Sind diese verzerrt oder unvollständig, kann das System fehlerhafte Schlussfolgerungen ziehen. Ein berühmtes Beispiel ist ein Algorithmus, der Röntgenbilder analysieren sollte, aber tatsächlich die Röntgengeräte verschiedener Krankenhäuser erkannte statt der Pathologien. Er nutzte irrelevante Merkmale, weil bestimmte Geräte häufiger in bestimmten Krankenhäusern verwendet wurden.

Die Interpretierbarkeit ist eine weitere Herausforderung. Viele moderne KI-Systeme, insbesondere tiefe neuronale Netzwerke, funktionieren als "Black Box" – sie liefern Ergebnisse, aber die Gründe dafür bleiben unklar. In der Medizin ist es jedoch wichtig zu verstehen, warum eine bestimmte Diagnose oder Therapieempfehlung gegeben wird. Neuere Ansätze versuchen, KI-Entscheidungen nachvollziehbarer zu machen, etwa durch Hervorhebung der Bildregionen, die für eine Diagnose ausschlaggebend waren.

Datenschutz und ethische Fragen sind ebenfalls zentral. Medizinische Daten sind hochsensibel, und ihr Schutz ist fundamental. Wer haftet, wenn ein KI-System einen Fehler macht? Wie stellen wir sicher, dass KI-Systeme fair sind und keine Bevölkerungsgruppen benachteiligen? Diese Fragen müssen beantwortet werden, bevor KI flächendeckend in der klinischen Praxis eingesetzt werden kann. Trotz dieser Herausforderungen ist das Potenzial von KI in der Medizin enorm und wird die Gesundheitsversorgung der Zukunft maßgeblich prägen.`,
    questions: [
      {
        question:
          "Laut dem Text wurde ein KI-System zur Erkennung welcher Erkrankung von der FDA genehmigt?",
        options: ["Hautkrebs", "Diabetische Retinopathie", "Sepsis", "Krebserkrankungen"],
        correctAnswer: 1,
        explanation:
          "Der Text gibt explizit an, dass ein KI-System zur Erkennung diabetischer Retinopathie in Netzhautfotos von der FDA genehmigt wurde. Hautkrebs, Sepsis und Krebserkrankungen werden zwar erwähnt, aber nicht im Zusammenhang mit einer FDA-Genehmigung.",
        relevantPassage:
          "Ein KI-System zur Erkennung diabetischer Retinopathie in Netzhautfotos wurde bereits von der US-amerikanischen Zulassungsbehörde FDA genehmigt.",
      },
      {
        question:
          "Mit wie vielen Bildern wurde laut Text das neuronale Netzwerk für Hautkrebserkennung trainiert?",
        options: [
          "Über 13.000 Bildern",
          "Über 130.000 Bildern",
          "Über 1.300 Bildern",
          "Über 1,3 Millionen Bildern",
        ],
        correctAnswer: 1,
        explanation:
          "Der Text nennt die exakte Zahl: über 130.000 Bilder verschiedener Hautveränderungen. Alle anderen Zahlenangaben sind falsch.",
        relevantPassage:
          "Ein neuronales Netzwerk für die Hautkrebserkennung wurde beispielsweise mit über 130.000 Bildern verschiedener Hautveränderungen trainiert.",
      },
      {
        question:
          "Was kann aus dem Beispiel des fehlerhaften Röntgenbild-Algorithmus geschlossen werden?",
        options: [
          "KI-Systeme sind grundsätzlich ungeeignet für die Medizin",
          "Die Qualität von KI-Systemen hängt von der Qualität und Relevanz der Trainingsdaten ab",
          "Röntgengeräte verschiedener Hersteller können nicht verglichen werden",
          "Pathologien in Röntgenbildern sind für KI nicht erkennbar",
        ],
        correctAnswer: 1,
        explanation:
          "Der Text nutzt dieses Beispiel, um zu illustrieren, dass die Qualität von KI-Systemen entscheidend von den Trainingsdaten abhängt. Sind diese verzerrt, kann das System irrelevante Merkmale lernen statt der eigentlichen Pathologien. Dies zeigt die Bedeutung guter Daten, nicht grundsätzliche Ungeeignetheit.",
        relevantPassage:
          "Die Qualität von KI-Systemen hängt entscheidend von den Trainingsdaten ab. Sind diese verzerrt oder unvollständig, kann das System fehlerhafte Schlussfolgerungen ziehen. Ein berühmtes Beispiel ist ein Algorithmus, der Röntgenbilder analysieren sollte, aber tatsächlich die Röntgengeräte verschiedener Krankenhäuser erkannte statt der Pathologien.",
      },
      {
        question: "Welcher Vorteil von KI in der Pathologie wird im Text erwähnt?",
        options: [
          "Vollständiger Ersatz von Pathologen",
          "Schnellerer, objektiverer und reproduzierbarerer Diagnoseprozess",
          "Elimination aller diagnostischen Fehler",
          "Kostenloses Screening für alle Patienten",
        ],
        correctAnswer: 1,
        explanation:
          "Der Text nennt drei konkrete Vorteile: Beschleunigung des Diagnoseprozesses, objektivere und reproduzierbarere Ergebnisse. Ein vollständiger Ersatz von Ärzten, Fehlerfreiheit oder kostenlose Screenings werden nicht erwähnt oder versprochen.",
        relevantPassage:
          "Dies beschleunigt nicht nur den Diagnoseprozess, sondern ermöglicht auch objektivere und reproduzierbarere Ergebnisse.",
      },
      {
        question: "Laut Text ist ein Problem vieler moderner KI-Systeme:",
        options: [
          "Sie sind zu langsam für klinische Anwendungen",
          "Sie funktionieren als 'Black Box' und ihre Entscheidungen sind schwer nachvollziehbar",
          "Sie benötigen zu wenig Trainingsdaten",
          "Sie können keine Röntgenbilder analysieren",
        ],
        correctAnswer: 1,
        explanation:
          "Der Text beschreibt explizit die mangelnde Interpretierbarkeit als Herausforderung: Viele Systeme funktionieren als 'Black Box' und liefern Ergebnisse, deren Gründe unklar bleiben. Geschwindigkeit, zu wenig Daten oder fehlende Röntgenfähigkeit werden nicht als Probleme genannt.",
        relevantPassage:
          "Die Interpretierbarkeit ist eine weitere Herausforderung. Viele moderne KI-Systeme, insbesondere tiefe neuronale Netzwerke, funktionieren als 'Black Box' – sie liefern Ergebnisse, aber die Gründe dafür bleiben unklar.",
      },
    ],
  },
];
