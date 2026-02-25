/**
 * TV-Übungstexte nach offiziellem MedAT-Vorbild.
 * Werden per Seed-Skript in kff_tasks (category: textverstaendnis) gespeichert.
 * Format: 5 Optionen A–E, 1 Punkt pro richtige Antwort.
 * Enthält: 5 Basis-Texte (tv-ueb-1–5) + 10 Zusatz (tv-ueb-6–15) + 25 Zusatz2 (tv-ueb-16–40) = 40 Texte.
 */
import type { TVText } from "./kffTextverstaendnis";
import { tvUebungstexteZusatz } from "./tvUebungstexteZusatz";
import { tvUebungstexteZusatz2 } from "./tvUebungstexteZusatz2";

const tvUebungstexteBasis: TVText[] = [
  {
    id: "tv-ueb-1",
    title: "Die Blut-Hirn-Schranke",
    topic: "Physiologie / Neurowissenschaft",
    difficulty: 2,
    text: `Die Blut-Hirn-Schranke ist eine hochselektive Barriere zwischen dem Blutkreislauf und dem Zentralnervensystem. Sie wird von Endothelzellen der Kapillaren im Gehirn gebildet, die durch besonders dichte Zellkontakte (tight junctions) miteinander verbunden sind. Im Gegensatz zu Kapillaren in anderen Organen besitzen diese Zellen keine Fensterungen und erlauben keinen ungehinderten Durchtritt von Substanzen. Zusätzlich umgeben Fortsätze von Astrozyten, einer Form von Gliazellen, die Kapillarwände und unterstützen die Barrierefunktion.

Der evolutionäre Nutzen der Blut-Hirn-Schranke liegt darin, das empfindliche neuronale Milieu vor Schwankungen der Blutzusammensetzung und vor potenziell schädlichen Substanzen zu schützen. Viele im Blut zirkulierende Botenstoffe, Hormone oder Abbauprodukte würden die Erregbarkeit von Nervenzellen stören. Gleichzeitig müssen Nährstoffe wie Glukose und Aminosäuren sowie Sauerstoff gezielt ins Gehirn gelangen. Dafür existieren spezifische Transporter in der Endothelmembran. Auch manche Medikamente können die Schranke nicht überwinden, was die Behandlung von Hirnerkrankungen erschwert.

Bei Entzündungen des Gehirns oder nach Schlaganfällen kann die Integrität der Blut-Hirn-Schranke vorübergehend gestört sein; dann treten Flüssigkeit und Immunzellen vermehrt ins Hirngewebe ein. Die Forschung arbeitet daran, Wirkstoffe gezielt durch die Schranke zu schleusen, ohne ihre Schutzfunktion dauerhaft zu beeinträchtigen.`,
    questions: [
      {
        question:
          "Welche der folgenden Aussagen zur Blut-Hirn-Schranke ist/sind richtig? (1) Sie wird von Endothelzellen der Hirnkapillaren gebildet. (2) Sie erlaubt den ungehinderten Durchtritt aller im Blut gelösten Substanzen. (3) Astrozyten tragen zur Barrierefunktion bei. (4) Nährstoffe wie Glukose gelangen über spezifische Transporter ins Gehirn.",
        options: [
          "1. ist richtig.",
          "2. und 4. sind richtig.",
          "1., 3. und 4. sind richtig.",
          "Alle sind richtig.",
          "Nur 2. ist richtig.",
        ],
        correctAnswer: 2,
        explanation:
          "Der Text nennt Endothelzellen mit tight junctions, Astrozyten als Unterstützung und spezifische Transporter für Nährstoffe. Ein ungehinderter Durchtritt aller Substanzen wird ausdrücklich ausgeschlossen.",
        relevantPassage:
          "wird von Endothelzellen der Kapillaren im Gehirn gebildet … durch besonders dichte Zellkontakte … Fortsätze von Astrozyten … unterstützen die Barrierefunktion … spezifische Transporter in der Endothelmembran.",
      },
      {
        question: "Welche Aussage lässt sich aus dem Text ableiten?",
        options: [
          "Die Blut-Hirn-Schranke verhindert vollständig den Eintritt von Sauerstoff ins Gehirn.",
          "Bei einer Hirnentzündung kann die Schranke vorübergehend durchlässiger werden.",
          "Medikamente passieren die Schranke immer problemlos.",
          "Tight junctions kommen nur im Gehirn vor.",
          "Gliazellen ersetzen die Endothelzellen bei Schädigung.",
        ],
        correctAnswer: 1,
        explanation:
          "Der Text stellt ausdrücklich dar, dass bei Entzündungen des Gehirns die Integrität der Schranke vorübergehend gestört sein kann.",
        relevantPassage:
          "Bei Entzündungen des Gehirns oder nach Schlaganfällen kann die Integrität der Blut-Hirn-Schranke vorübergehend gestört sein.",
      },
    ],
  },
  {
    id: "tv-ueb-2",
    title: "Der Placebo-Effekt",
    topic: "Medizin / Psychologie",
    difficulty: 1,
    text: `Der Placebo-Effekt bezeichnet die messbare Besserung von Beschwerden durch eine Behandlung, die keinen spezifischen Wirkstoff enthält – etwa eine Zuckerpille oder eine Salbe ohne aktive Substanz. Entscheidend ist die Erwartung des Patienten oder der Patientin: Wer davon überzeugt ist, ein wirksames Medikament zu erhalten, zeigt oft tatsächlich eine Linderung von Schmerzen, Übelkeit oder sogar eine Veränderung von Laborwerten wie Blutdruck oder Immunparametern.

In Studien wird der Placebo-Effekt kontrolliert eingesetzt: Eine Gruppe erhält das echte Präparat, eine andere ein optisch identisches Scheinpräparat (Placebo). Nur wenn die Verum-Gruppe signifikant besser abschneidet als die Placebo-Gruppe, wird eine Wirkung des getesteten Stoffs angenommen. Dabei zeigt sich, dass auch die Gabe eines Placebos Nebenwirkungen auslösen kann – das sogenannte Nocebo-Phänomen – wenn die Betroffenen entsprechende Erwartungen haben.

Neurowissenschaftliche Untersuchungen belegen, dass Placebo-Schmerzlinderung mit der Ausschüttung körpereigener Opioide (Endorphine) einhergehen kann. Die Erwartung aktiviert demnach tatsächlich physiologische Mechanismen. In der klinischen Praxis wird diskutiert, ob und wie Ärztinnen und Ärzte den Placebo-Effekt ethisch vertretbar nutzen können, ohne Patienten zu täuschen.`,
    questions: [
      {
        question:
          "Welche der Aussagen zum Placebo-Effekt ist/sind richtig? (1) Er beruht wesentlich auf der Erwartung der behandelten Person. (2) Placebos enthalten immer einen geringen Anteil des echten Wirkstoffs. (3) In Studien dient die Placebo-Gruppe zur Kontrolle der spezifischen Wirkstoffwirkung. (4) Auch Scheinpräparate können unerwünschte Wirkungen auslösen.",
        options: [
          "1. und 3. sind richtig.",
          "2. und 4. sind richtig.",
          "1., 3. und 4. sind richtig.",
          "Nur 2. ist richtig.",
          "Alle sind richtig.",
        ],
        correctAnswer: 2,
        explanation:
          "Erwartung wird als entscheidend genannt; Placebos sind Scheinpräparate ohne Wirkstoff; Kontrollgruppe in Studien und Nocebo (unerwünschte Wirkungen bei Placebo) werden beschrieben.",
        relevantPassage:
          "Entscheidend ist die Erwartung … Eine Gruppe erhält das echte Präparat, eine andere ein optisch identisches Scheinpräparat … auch die Gabe eines Placebos kann Nebenwirkungen auslösen – das sogenannte Nocebo-Phänomen.",
      },
      {
        question:
          "Was wird im Text über die neurobiologische Grundlage der Placebo-Wirkung ausgesagt?",
        options: [
          "Placebos blockieren alle Schmerzrezeptoren im Rückenmark.",
          "Placebo-Schmerzlinderung kann mit der Ausschüttung von Endorphinen zusammenhängen.",
          "Im Gehirn werden dabei keine physiologischen Vorgänge aktiviert.",
          "Der Effekt tritt nur bei Kindern auf.",
          "Es gibt dafür keine wissenschaftlichen Belege.",
        ],
        correctAnswer: 1,
        explanation:
          "Der Text nennt ausdrücklich, dass Placebo-Schmerzlinderung mit der Ausschüttung körpereigener Opioide (Endorphine) einhergehen kann.",
        relevantPassage:
          "Placebo-Schmerzlinderung mit der Ausschüttung körpereigener Opioide (Endorphine) einhergehen kann. Die Erwartung aktiviert demnach tatsächlich physiologische Mechanismen.",
      },
    ],
  },
  {
    id: "tv-ueb-3",
    title: "Antibiotikaresistenzen",
    topic: "Mikrobiologie / Infektiologie",
    difficulty: 2,
    text: `Antibiotikaresistenzen entstehen, wenn Bakterien Mechanismen entwickeln, die die Wirkung von Antibiotika abschwächen oder aufheben. Ein Bakterium kann zum Beispiel Enzyme bilden, die den Wirkstoff abbauen; die Zielstruktur des Antibiotikums so verändern, dass es nicht mehr bindet; oder den Wirkstoff aktiv aus der Zelle pumpen. Solche Eigenschaften können durch Mutationen im Erbgut der Bakterien entstehen oder durch die Aufnahme von Resistenzgenen von anderen Bakterien, etwa über Plasmide.

Der übermäßige und unsachgemäße Einsatz von Antibiotika – in der Humanmedizin, in der Tierhaltung und in der Landwirtschaft – beschleunigt die Ausbreitung resistenter Stämme. Wo Antibiotika häufig vorkommen, haben resistente Bakterien einen Selektionsvorteil und vermehren sich stärker. Gleichzeitig werden empfindliche Bakterien zurückgedrängt. Besonders problematisch sind Krankenhäuser, in denen viele schwer kranke Patienten mit breit wirksamen Antibiotika behandelt werden und Erreger wie methicillinresistente Staphylococcus aureus (MRSA) oder multiresistente gramnegative Stäbchen auftreten können.

Die Weltgesundheitsorganisation und nationale Behörden empfehlen, Antibiotika nur bei nachgewiesener oder hoher Wahrscheinlichkeit einer bakteriellen Infektion einzusetzen, die Dosis und Dauer an die Leitlinien anzupassen und die Hygiene in Kliniken zu verbessern. Neue Wirkstoffklassen sind in Entwicklung, um resistente Infektionen auch künftig behandeln zu können.`,
    questions: [
      {
        question:
          "Welche der Aussagen zu Antibiotikaresistenzen ist/sind richtig? (1) Resistente Bakterien können Antibiotika abbauende Enzyme bilden. (2) Resistenzgene können zwischen Bakterien übertragen werden. (3) Ein hoher Antibiotikaeinsatz begünstigt die Ausbreitung resistenter Stämme. (4) Resistente Erreger treten nur außerhalb von Krankenhäusern auf.",
        options: [
          "1. und 2. sind richtig.",
          "Nur 4. ist richtig.",
          "1., 2. und 3. sind richtig.",
          "Alle sind richtig.",
          "2. und 4. sind richtig.",
        ],
        correctAnswer: 2,
        explanation:
          "Enzyme zum Abbau, Übertragung von Resistenzgenen und Selektionsvorteil bei hohem Antibiotikaeinsatz werden genannt; Krankenhäuser werden als besonders problematisch für resistente Erreger beschrieben.",
        relevantPassage:
          "Enzyme bilden, die den Wirkstoff abbauen … Aufnahme von Resistenzgenen von anderen Bakterien … übermäßiger und unsachgemäßer Einsatz … beschleunigt die Ausbreitung … Besonders problematisch sind Krankenhäuser.",
      },
      {
        question: "Was wird im Text als Maßnahme gegen Resistenzen genannt?",
        options: [
          "Antibiotika vorbeugend bei jeder Erkältung einsetzen.",
          "Antibiotika nur bei begründeter bakterieller Infektion und leitliniengerecht einsetzen.",
          "Die Dauer der Einnahme so kurz wie möglich halten, unabhängig von der Art der Infektion.",
          "Breit wirksame Antibiotika bevorzugt in der Tierhaltung verwenden.",
          "Keine der genannten Maßnahmen wird im Text erwähnt.",
        ],
        correctAnswer: 1,
        explanation:
          "Der Text empfiehlt, Antibiotika nur bei nachgewiesener oder hoher Wahrscheinlichkeit einer bakteriellen Infektion einzusetzen und Dosis sowie Dauer an die Leitlinien anzupassen.",
        relevantPassage:
          "Antibiotika nur bei nachgewiesener oder hoher Wahrscheinlichkeit einer bakteriellen Infektion einzusetzen, die Dosis und Dauer an die Leitlinien anzupassen.",
      },
    ],
  },
  {
    id: "tv-ueb-4",
    title: "Epigenetik – Vererbung jenseits der DNA-Sequenz",
    topic: "Genetik / Molekularbiologie",
    difficulty: 2,
    text: `Unter Epigenetik versteht man die Vererbung von Merkmalen, die nicht auf einer Änderung der DNA-Sequenz selbst beruhen, sondern auf chemischen Modifikationen der DNA oder der sie umgebenden Proteine (Histone). Dazu gehören die Methylierung von DNA-Basen – oft an Cytosin – sowie Acetylierung oder Methylierung von Histonen. Diese Modifikationen beeinflussen, wie stark ein Gen abgelesen wird: stark methylierte Gene werden häufig stillgelegt, während gelockerte Histone die Zugänglichkeit für die Transkriptionsmaschinerie erhöhen.

Epigenetische Muster werden bei der Zellteilung zum Teil an die Tochterzellen weitergegeben. So können Umwelteinflüsse – etwa Ernährung, Stress oder chemische Substanzen – langfristig die Genaktivität verändern, ohne die Basenabfolge der DNA zu verändern. Bekannte Beispiele sind die unterschiedliche Ausprägung von Merkmalen bei eineiigen Zwillingen im Laufe des Lebens oder der Einfluss der mütterlichen Ernährung während der Schwangerschaft auf das spätere Krankheitsrisiko des Kindes.

In der Krebsforschung spielt die Epigenetik eine große Rolle: Bei vielen Tumoren sind Gene, die das Zellwachstum bremsen, durch Methylierung stillgelegt. Medikamente, die demethylieren oder Histonmodifikationen beeinflussen, werden bereits in der Therapie bestimmter Krebserkrankungen erprobt. Zugleich wird diskutiert, inwieweit epigenetische Veränderungen über Keimbahnzellen auch an die nächste Generation weitergegeben werden können.`,
    questions: [
      {
        question:
          "Welche der Aussagen zur Epigenetik ist/sind richtig? (1) Epigenetische Veränderungen betreffen die Abfolge der DNA-Basen nicht. (2) DNA-Methylierung kann zur Stilllegung von Genen führen. (3) Epigenetische Muster können bei der Zellteilung weitergegeben werden. (4) Umwelteinflüsse können die Genaktivität über epigenetische Mechanismen verändern.",
        options: [
          "1. und 2. sind richtig.",
          "Nur 3. ist richtig.",
          "2., 3. und 4. sind richtig.",
          "Alle sind richtig.",
          "1. und 4. sind richtig.",
        ],
        correctAnswer: 3,
        explanation:
          "Der Text betont, dass die DNA-Sequenz unverändert bleibt; Methylierung stilllegt Gene; Muster werden bei Zellteilung weitergegeben; Ernährung, Stress etc. verändern Genaktivität epigenetisch.",
        relevantPassage:
          "nicht auf einer Änderung der DNA-Sequenz selbst beruhen … stark methylierte Gene werden häufig stillgelegt … werden bei der Zellteilung zum Teil an die Tochterzellen weitergegeben … Umwelteinflüsse … können langfristig die Genaktivität verändern.",
      },
      {
        question: "Was wird im Text im Zusammenhang mit Krebs und Epigenetik ausgeführt?",
        options: [
          "Krebs entsteht ausschließlich durch Änderungen der DNA-Sequenz.",
          "Bei vielen Tumoren sind wachstumsbremsende Gene durch Methylierung stillgelegt.",
          "Epigenetisch wirksame Medikamente spielen in der Krebsforschung keine Rolle.",
          "Eineiige Zwillinge erkranken immer am gleichen Krebs.",
          "Epigenetische Muster werden nie an die nächste Generation vererbt.",
        ],
        correctAnswer: 1,
        explanation:
          "Der Text nennt ausdrücklich, dass bei vielen Tumoren Gene, die das Zellwachstum bremsen, durch Methylierung stillgelegt sind.",
        relevantPassage:
          "Bei vielen Tumoren sind Gene, die das Zellwachstum bremsen, durch Methylierung stillgelegt. Medikamente, die demethylieren … werden bereits in der Therapie … erprobt.",
      },
    ],
  },
  {
    id: "tv-ueb-5",
    title: "Stammzellen und regenerative Medizin",
    topic: "Zellbiologie / Medizin",
    difficulty: 2,
    text: `Stammzellen sind Zellen, die sich teilen und dabei sowohl weitere Stammzellen als auch differenzierte Tochterzellen hervorbringen können. Man unterscheidet embryonale Stammzellen, die aus der inneren Zellmasse früher Embryonen gewonnen werden und theoretisch in alle Zelltypen des Körpers entwickeln können (pluripotent), von adulten Stammzellen, die in vielen Geweben des erwachsenen Organismus vorkommen und in der Regel nur Zelltypen ihres Gewebes oder verwandte Typen bilden (multipotent). Seit einigen Jahren lassen sich ausdifferenzierte Körperzellen durch die Einführung bestimmter Faktoren in einen stammzellähnlichen Zustand zurückversetzen – solche induziert pluripotenten Stammzellen (iPS-Zellen) umgehen die ethischen Konflikte des Embryonenverbrauchs.

In der regenerativen Medizin erhofft man sich, aus Stammzellen Ersatzgewebe für geschädigte Organe zu züchten – etwa Herzmuskelzellen nach Infarkt, Nervenzellen bei Parkinson oder insulinproduzierende Zellen bei Diabetes. Bislang sind die meisten Anwendungen noch experimentell; zugleich bergen Stammzellen das Risiko unkontrollierter Teilung und Tumorentstehung (Teratome), wenn sie nicht vollständig ausdifferenziert werden.

Rechtlich und ethisch ist die Forschung mit embryonalen Stammzellen in vielen Ländern streng geregelt. Die Nutzung adulter Stammzellen und von iPS-Zellen unterliegt geringeren Restriktionen. Die Qualitätskontrolle und Standardisierung von Stammzellprodukten für die Anwendung am Menschen bleiben eine Herausforderung.`,
    questions: [
      {
        question:
          "Welche der Aussagen zu Stammzellen ist/sind richtig? (1) Embryonale Stammzellen sind pluripotent. (2) Adulte Stammzellen können in der Regel nur begrenzte Zelltypen bilden. (3) iPS-Zellen werden aus bereits differenzierten Körperzellen erzeugt. (4) Stammzellen bergen kein Risiko für Tumorentstehung.",
        options: [
          "1. und 3. sind richtig.",
          "2. und 4. sind richtig.",
          "1., 2. und 3. sind richtig.",
          "Nur 4. ist richtig.",
          "Alle sind richtig.",
        ],
        correctAnswer: 2,
        explanation:
          "Pluripotenz embryonaler Stammzellen, Multipotenz adulter Stammzellen und Erzeugung von iPS aus differenzierten Zellen werden genannt; das Tumorrisiko (Teratome) wird ausdrücklich erwähnt.",
        relevantPassage:
          "embryonale Stammzellen … theoretisch in alle Zelltypen … (pluripotent) … adulte Stammzellen … nur Zelltypen ihres Gewebes … (multipotent) … ausdifferenzierte Körperzellen … in einen stammzellähnlichen Zustand zurückversetzen … bergen Stammzellen das Risiko … Tumorentstehung (Teratome).",
      },
      {
        question: "Was wird im Text über die regenerative Medizin ausgesagt?",
        options: [
          "Ersatzgewebe aus Stammzellen wird bereits flächendeckend in der Klinik eingesetzt.",
          "Es wird erhofft, aus Stammzellen Ersatzgewebe für geschädigte Organe zu züchten; die meisten Anwendungen sind noch experimentell.",
          "Stammzellen dürfen nur für die Grundlagenforschung genutzt werden.",
          "Teratome entstehen ausschließlich bei adulter Stammzelltherapie.",
          "iPS-Zellen sind rechtlich überall verboten.",
        ],
        correctAnswer: 1,
        explanation:
          "Der Text beschreibt die Hoffnung auf Ersatzgewebe und stellt klar, dass die meisten Anwendungen bislang noch experimentell sind.",
        relevantPassage:
          "erhofft man sich, aus Stammzellen Ersatzgewebe für geschädigte Organe zu züchten … Bislang sind die meisten Anwendungen noch experimentell.",
      },
    ],
  },
];

export const tvUebungstexte: TVText[] = [
  ...tvUebungstexteBasis,
  ...tvUebungstexteZusatz,
  ...tvUebungstexteZusatz2,
];
