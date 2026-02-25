/**
 * Emotionen regulieren — Offizielles MedAT-Vorbild
 * 100 Aufgaben (12 offizielle + 88 weitere). Situationsbeschreibung + 4 Vorsätze in Ich-Form,
 * eine beste Möglichkeit wählen. Laut Forschungsstand bewertet.
 */

import { emotionenRegulierenOffiziellExtra } from "./emotionenRegulierenOffiziellExtra";

/** Offizielle Ausfüllhilfe / Instruktion (MedAT-Aufnahmeverfahren) */
export const EMOTIONEN_REGULIEREN_AUSFUELLHILFE =
  "Bitte versetzen Sie sich in die Situationen hinein. Achten Sie darauf, welche Ziele die betroffene Person in dieser Situation erreichen muss, welche Mittel ihr zur Verfügung stehen, wie sie sich in dieser Situation im Moment fühlt, und wie sie die Situation aktuell einschätzt. Anschließend sollen Sie beurteilen, mit welcher der vier Möglichkeiten die Ziele der Person, mit den Emotionen umzugehen, am besten zu erreichen sind.\n\nUm Ihnen zu helfen, sich besser in die Situation der Person einzufühlen, wurden alle vier Möglichkeiten in der Ich-Form formuliert.";

export type OptionId = "A" | "B" | "C" | "D";

export type EmotionenRegulierenOffiziellTask = {
  id: string;
  /** Situationsbeschreibung (inkl. Rahmenbedingungen und Ziele der Person) */
  situation: string;
  /** Vier Möglichkeiten in Ich-Form (Vorsätze) */
  options: { id: OptionId; text: string }[];
  /** Welche Option ist laut offizieller Lösung richtig */
  correctOptionId: OptionId;
  /** Erklärung der richtigen Antwort */
  explanation: string;
};

const OPTION_IDS: OptionId[] = ["A", "B", "C", "D"];

function task(
  id: string,
  situation: string,
  options: [string, string, string, string],
  correctIndex: 0 | 1 | 2 | 3,
  explanation: string
): EmotionenRegulierenOffiziellTask {
  return {
    id,
    situation,
    options: OPTION_IDS.map((optId, i) => ({ id: optId, text: options[i] })),
    correctOptionId: OPTION_IDS[correctIndex],
    explanation,
  };
}

/** 12 offizielle Beispielaufgaben (MedAT-H Aufnahmeverfahren) + 88 weitere = 100 Aufgaben */
const OFFIZIELLE_12: EmotionenRegulierenOffiziellTask[] = [
  task(
    "er-off-01",
    "Franziska studiert Medizin. In einer Stunde schreibt sie eine wichtige Prüfung, die sehr schwer ist, und daher volle Konzentration und Einsatz erfordert. Die Prüfungszeit ist knapp bemessen. Wenn sie die Prüfung dreimal hintereinander nicht besteht, wird sie vom Studium ausgeschlossen. Franziska tritt heute zum ersten Mal an. Sie hat sich optimal vorbereitet, und ist zudem ausgeschlafen und top fit. Kurz vorher schießen ihr jedoch plötzlich Gedanken über die Konsequenzen eines möglichen Scheiterns bei der Prüfung durch den Kopf, und sie bekommt dadurch Angst. Wie gehen Sie in der Situation von Franziska idealerweise vor?",
    [
      "Ich sage mir vor Beginn, dass ich im Falle eines Scheiterns ohnehin noch zweimal antreten darf.",
      "Ich denke an etwas Schönes, um mich abzulenken, wenn ich während der Prüfung Angst bekomme.",
      "Ich sage mir vor Beginn, dass ich den Stoff gut beherrsche, und die Prüfung daher meistern werde.",
      "Ich versuche während der Prüfung meine Sorgen zu verdrängen und mich zu konzentrieren.",
    ],
    2, // C
    "Laut Situationsbeschreibung schreibt Franziska in Kürze eine wichtige Prüfung. Sie ist gut vorbereitet, ausgeschlafen und top fit. Vor der Prüfung bekommt Franziska Angst, da ihr Gedanken über die Konsequenzen eines Scheiterns durch den Kopf schießen. Bei der Prüfung sollte sie aber voll konzentriert und motiviert bei der Sache sein. Wenn sie sich vor der Prüfung sagt, dass sie die Kompetenz hat, um die Prüfung zu schaffen, dann verringert sie nicht nur ihre Angst, indem sie sie in Motivation und Zuversicht umwandelt, sondern trägt auch dazu bei, dass sie diese Herausforderung motiviert angehen kann."
  ),
  task(
    "er-off-02",
    "Felix absolvierte ein Praktikum in einer bekannten Firma, das ihm sehr viel Spaß gemacht hat. Im Praktikum hat er viel dazu gelernt und seine Kompetenzen deutlich erweitert. Dies ist ihm selbst auch schon positiv aufgefallen. Gerne hätte er nach Abschluss seines Praktikums einen Job in derselben Firma angenommen. Aus finanziellen Gründen hat die Firma jedoch im Moment einen Aufnahmestopp. Felix ist enttäuscht und traurig. Nun sollte er aber zuversichtlich nach vorne blicken, da er einen Job benötigt, um seinen Lebenserhaltungskosten nachkommen zu können. Wie gehen Sie in der Situation von Felix idealerweise vor?",
    [
      "Ich treffe mich mit einem Freund, der mich versteht und trösten kann.",
      "Ich sage mir, dass ich im Praktikum viel lernen konnte und meine Chancen nun deutlich besser sind.",
      "Ich treffe mich mit einem Freund, der es immer geschafft hatte mich aufzuheitern.",
      "Ich unternehme etwas Schönes, um mich von meinen aktuellen Emotionen abzulenken.",
    ],
    1, // B
    "Laut Situationsbeschreibung ist Felix traurig und enttäuscht, dass er in der Firma, in der er sein Praktikum absolviert hatte, keinen Job bekommen kann. Da er laut Situationsbeschreibung dringend einen Job benötigt, ist es hier wichtig, dass er zuversichtlich nach vorne blickt. Hierzu muss er sich daran erinnern, dass er während des Praktikums seine Kompetenzen deutlich verbessern konnte, und somit auch bessere Chancen am Arbeitsmarkt hat."
  ),
  task(
    "er-off-03",
    "Matthias ist Urologe. In seiner Ausbildung hat er unter anderem gelernt, mit seinen Emotionen produktiv umzugehen. Derzeit arbeitet er als Lehrkraft in einem Universitätskrankenhaus. Top fit und ausgeruht erklärt er heute in der ersten Stunde angehenden ÄrztInnen, wie sie einen Katheter setzen sollen. Obwohl er die Prozedur bereits mehrfach erklärt und vorgeführt hatte, bittet ihn ein Student wiederholt um seine Hilfe. Die anderen StudentInnen scheinen mit der Aufgabe keine Probleme zu haben. Matthias merkt, dass ihn das wiederholte Nachfragen des Studenten ärgert. Wie gehen Sie in der Situation von Matthias idealerweise vor?",
    [
      "Ich frage mich, warum mich diese Situation aus der Fassung bringt, und denke darüber nach.",
      "Ich versuche mir meinen Ärger nicht anmerken zu lassen, und zeige die Aufgabe nochmals vor.",
      "Ich versuche meinen Ärger einfach runterzuschlucken, und zeige die Aufgabe nochmals vor.",
      "Ich akzeptiere die Situation wie sie ist, und frage nach wobei noch Hilfe benötigt wird.",
    ],
    3, // D
    "Laut Situationsbeschreibung ärgert es Matthias, dass ihn ein Student wiederholt um Hilfe bittet. An dieser Tatsache kann er momentan nichts ändern. Wir erfahren jedoch, dass Matthias aktuell fit und ausgeruht ist, und zudem auch gelernt hatte, produktiv mit seinen Emotionen umzugehen. Wenn er die Situation also einfach so annimmt, kann sein Ärger darüber abklingen. Zudem kann er durch ein Nachfragen, wobei der Student aktuell konkret Hilfestellung benötigt, Ideen bekommen, worin das Problem genau besteht."
  ),
  task(
    "er-off-04",
    "Gut erholt besucht Elisabeth heute zusammen mit ihrer besten Freundin eine Bar in der Nähe ihres Hotels. Die beiden wollten ihren Urlaub mit einem gemütlichen Abend entspannt ausklingen zu lassen. An der Bar wird Elisabeth von einem anderen weiblichen Gast grundlos provoziert und beschimpft. An sich würde Elisabeth der jungen Dame gerne die Meinung sagen, jedoch hat sie Angst, dass die Situation eskalieren könnte, da diese bereits stärker alkoholisiert zu sein scheint. Zudem möchte sich Elisabeth dadurch nicht ihre gute Laune und ihren letzten Urlaubsabend verderben lassen. Wie gehen Sie in der Situation von Elisabeth idealerweise vor?",
    [
      "Ich verlasse zusammen mit meiner besten Freundin die Bar.",
      "Ich versuche nicht zu zeigen, dass mich die Situation langsam wütend werden lässt.",
      "Ich sage mir, dass es immer und überall Leute geben wird, die sich dumm aufführen.",
      "Ich mache mir klar, dass die junge Dame nur deshalb so provokant ist, weil sie alkoholisiert ist.",
    ],
    0, // A
    "Laut Situationsbeschreibung wird Elisabeth wütend, da eine andere Person sie grundlos provoziert und beschimpft. Sie hat jedoch die Befürchtung, dass die Situation eskalieren könnte, wenn sie der jungen Dame ihre Meinung sagt, da diese angetrunken zu sein scheint. Elisabeth möchte eine Eskalation laut Situationsbeschreibung vermeiden, und sich durch diese Situation nicht ihre gute Laune verderben lassen. Daher wäre es am einfachsten, sich aus der Situation einfach zurückzuziehen."
  ),
  task(
    "er-off-05",
    "Denise arbeitet als Altenpflegerin und hat vor kurzem einige Patienten von einer Kollegin übernommen, die in Pension ging. Sie ist ein verständnisvoller, einfühlsamer und sehr belastbarer Mensch. Nun muss sie eine gute Beziehung zu ihren neuen Patienten aufbauen, um mit ihnen bei ihrer Pflege zusammenarbeiten zu können. Ihre neue Patientin Frau Mayr hatte einen sehr guten Draht zur Vorgängerin von Denise. Diese beschrieb Frau Mayr als freundlich und nett. Denise gegenüber verhält sich Frau Mayr jedoch bislang eher ablehnend. Denise fühlt sich zurückgewiesen und traurig. Wie gehen Sie in der Situation von Denise idealerweise vor?",
    [
      "Ich teile ihr mit, dass ich verstehe wie schwer diese Situation ist, und frage, was ich für sie tun darf.",
      "Ich sage mir, dass es in Ordnung ist, wenn man nicht gleich mit allen Leuten gut auskommt.",
      "Ich lasse mir nicht anmerken, dass mich ihre Reaktion traurig macht, und gehe meiner Arbeit nach.",
      "Ich mache mir Gedanken darüber, warum ich mich von Frau Mayrs Reaktion zurückgewiesen fühle.",
    ],
    0, // A
    "Laut Situationsbeschreibung fühlt sich Denise traurig, da sie meint, von Frau Mayr zurückgewiesen zu werden. Sie möchte jedoch eine gute Beziehung zu ihrer neuen Patientin aufbauen. Jemandem das Gefühl zu vermitteln, dass man seine Perspektive verstehen kann und möchte, schafft soziale Nähe und reduziert gleichzeitig negative Gefühle. Dies ist ein erster Schritt um eine zwischenmenschliche Beziehung aufzubauen. Mit der Frage, was Denise für Frau Mayr tun darf, signalisiert sie ihr auch, dass sie auf ihre Meinung und ihre Wünsche Wert legt, und mit ihr gerne gut zusammenarbeiten möchte."
  ),
  task(
    "er-off-06",
    "Daniel besucht zusammen mit seinen Freunden einen Vergnügungspark. Im Vergnügungspark gibt es auch eine Geisterbahn. Seine Freunde machen den Vorschlag, in die Geisterbahn zu gehen. Daniel ist eher schreckhaft und würde die Geisterbahn daher am liebsten meiden. Schon der Gedanke daran erschreckt zu werden, macht ihm Angst. Allerdings ist er zumindest beim Poker spielen unter Freunden für sein Pokerface bekannt. Daniel ist froh darüber, dass seine Freunde nichts von seiner Schreckhaftigkeit wissen, denn er möchte von ihnen nicht für feige gehalten werden. Mit einem mulmigen Gefühl geht Daniel daher mit seinen Freunden in die Geisterbahn. Wie gehen Sie in der Situation von Daniel idealerweise vor?",
    [
      "Ich mache mir bewusst, dass es für Angst keinen Grund gibt, da die Situation nicht real ist.",
      "Ich kontrolliere meinen Gesichtsausdruck, sodass man meine Angst nicht sehen kann.",
      "Ich versuche meine Angst in der Geisterbahn zu unterdrücken und runterzuschlucken.",
      "Ich denke während der Geisterbahn an etwas Schönes um mich abzulenken.",
    ],
    1, // B
    "Laut Situationsbeschreibung besteht das Ziel von Daniel darin, sich seine Angst nicht anmerken zu lassen. Dieses Ziel kann beispielsweise dadurch erreicht werden, indem man den Ausdruck seiner Emotion im Gesicht unterdrückt. Dies erfordert zwar Anstrengung, jedoch ist Daniel laut Situationsbeschreibung im Moment gut ausgeruht und top fit. Daher ist es auch eher wahrscheinlich, dass er diese Strategie erfolgreich umsetzen kann. Ein weiterer Vorteil dieser Strategie besteht darin, dass er weniger von der Situation mitbekommt, da er seine ganze Aufmerksamkeit darauf richtet, seine Angst nicht nach außen zu zeigen."
  ),
  task(
    "er-off-07",
    "Sarah ist belastbar und kann selbst unter Stress Dinge aus unterschiedlicher Perspektive betrachten. Sie hat sich um die Leitung einer Palliativstation beworben. Dieser Fachbereich interessiert sie sehr, und sie ist auf diesem Gebiet auch kompetent. Die ersten Gespräche verliefen vielversprechend. Sarah hatte sogar ein neues Konzept für die geplante Palliativstation ausgearbeitet. Dabei hat sie sehr viel dazugelernt. Aus finanziellen Gründen wurde der Bau der Palliativstation jedoch überraschend verschoben. Nun muss sie nach einem anderen Job suchen, um ihren Lebensunterhalt bestreiten zu können. Sarah ist enttäuscht und traurig. Wie gehen Sie in der Situation von Sarah idealerweise vor?",
    [
      "Ich nehme die Situation wie sie ist und blicke nach vorne.",
      "Ich überlege mir, wieso die geplante Palliativstation nun doch nicht gebaut wird.",
      "Ich sage mir, dass ich durch die Konzepterstellung meine Kenntnisse im Palliativbereich deutlich verbessert habe.",
      "Ich treffe mich mit einer guten Freundin, die mich auch schon früher immer sehr gut trösten konnte.",
    ],
    2, // C
    "Laut Situationsbeschreibung ist Sarah aktuell traurig und enttäuscht, dass aus der Palliativstation nichts geworden ist. Sie muss nun motiviert nach einem anderen Job suchen, um ihren Lebensunterhalt bestreiten zu können. Hierzu ist es hilfreich, wenn man die Situation aus einer anderen Perspektive sieht, und positiv nach vorne blickt. Dies erfordert zwar Kraft und Anstrengung, doch laut Situationsbeschreibung ist Sarah aktuell dazu in der Lage."
  ),
  task(
    "er-off-08",
    "Paul ist Assistenzarzt für Notfallchirurgie. Es ist kurz vor Ende seiner Schicht. Während seiner Schicht hatte er alle Hände voll zu tun. Aufgrund eines schweren Unfalls wurden zahlreiche Personen mit schweren Verletzungen in die Notfallchirurgie eingeliefert und mussten ärztlich versorgt werden. Nicht alle Personen haben überlebt. Paul ist bereits physisch, psychisch und intellektuell am Ende seiner Kräfte. Er trifft einen Mann, der sich nach seiner Frau erkundigt, die den Unfall leider nicht überlebt hat. Paul hat Angst, dass er etwas falsch machen könnte, wenn er den Mann über die Situation seiner Frau informiert. Wie gehen Sie in der Situation von Paul idealerweise vor?",
    [
      "Ich sage mir, dass ich diese Situation schon oft geübt habe, und sie daher auch meistern werde.",
      "Ich rede mit dem Mann und versuche mir nicht anmerken zu lassen, dass ich Angst habe.",
      "Ich hole den Oberarzt und bitte ihn das Gespräch mit der Familie zu übernehmen.",
      "Ich versuche auch in dieser Situation den Mann so einfühlsam wie möglich zu informieren.",
    ],
    2, // C
    "Laut Situationsbeschreibung ist Paul nach einer sehr harten Schicht bereits am Ende seiner Kraft und Belastbarkeit angelangt. Er traut sich nicht zu, den Mann über das Ableben seiner Frau einfühlsam und fachlich korrekt zu informieren. Dies macht ihm Angst. Einen Oberarzt zu bitten, diese Aufgabe zu übernehmen, stellt in dieser Situation einen guten Problemlöseansatz dar."
  ),
  task(
    "er-off-09",
    "Karin ist verständnisvoll und kann sich sehr gut in andere Personen einfühlen. Sie sitzt gut erholt und top fit, gemeinsam mit einer anderen Person, in einem Warteraum. Im Warteraum scheint es von der Decke zu tropfen. Die andere Person tippt mit dem Gehstock an die Decke, und meint, dass dort ein Wasserschaden sein könnte. Gerade als Karin die Person darauf aufmerksam machen will, dass ihr Verhalten eventuell schädlich sein könnte, löst sich ein Teil der Decke und die beiden werden mit Wasser überschüttet. Ihr Lieblingspullover ist damit ruiniert. Karin merkt, dass sie langsam wütend wird. Sie möchte jedoch die Situation durch ihre Wut nicht verschlimmern. Wie gehen Sie in der Situation von Karin idealerweise vor?",
    [
      "Ich überlege mir, ob ich die Person bereits früher auf die Konsequenzen hätte ansprechen sollen.",
      "Ich versuche meine Wut einfach runterzuschlucken und im Keim zu ersticken.",
      "Ich mache mir klar, dass die Person diese Situation nicht mit Absicht ausgelöst hat.",
      "Ich versuche mir nicht anmerken zu lassen, dass ich mich über die Situation sehr ärgere.",
    ],
    2, // C
    "Laut Situationsbeschreibung ist Karin wütend, da sie durch das Zutun einer anderen Person mit Wasser überschüttet wurde, wodurch ihr Lieblingspullover ruiniert wurde. Sie möchte die Situation jedoch durch ihre Wut nicht verschlimmern. Laut Situationsbeschreibung ist Karin verständnisvoll, einfühlsam, und gut erholt. Für solche Personen ist es wichtig, dass sie glauben, dass eine Situation nicht mit Absicht ausgelöst wurde, um auf die betreffende Person nicht wütend zu sein. Daher wäre es in dieser Situation hilfreich, dass sie sich klar macht, dass die Person diese Situation nicht mit Absicht ausgelöst hat. Da Karin aktuell gut erholt ist, und die andere Person laut Situationsbeschreibung ebenfalls mit Wasser überschüttet wurde, ist es auch wahrscheinlich, dass dies Karin gelingt."
  ),
  task(
    "er-off-10",
    "Thomas arbeitet als Zahnarzt und fühlt sich im Moment gut erholt und auch leistungsfähig. Er hat soeben bei einer Patientin, die wegen akuter Schmerzen zu ihm kam, eine Wurzelbehandlung durchgeführt. Für Thomas kam dieser Eingriff nicht überraschend. Bereits beim letzten Termin hatte er seiner Patientin empfohlen, eine Mundhygiene durchführen zu lassen, um der heutigen Behandlung vorzubeugen. Die Patientin ist jedoch zum vereinbarten Terminen nicht erschienen. Dies ärgert Thomas. Die Gründe hierfür sind ihm jedoch nicht bekannt. Er möchte seine Patientin von der Notwendigkeit einer Mundhygiene überzeugen, um weiteren Wurzelbehandlungen vorzubeugen. Wie gehen Sie in der Situation von Thomas idealerweise vor?",
    [
      "Ich sage mir, dass es bei den Patienten liegt, welche Behandlungen sie in Anspruch nehmen.",
      "Ich mache mir klar, dass meine Patientin aus Angst nicht zur Mundhygiene erschienen ist.",
      "Ich spreche meine Patientin auf die Situation an, um bei Bedarf Hilfe anbieten zu können.",
      "Ich mache mir klar, dass die Patientin nicht zur Mundhygiene kam, weil sie damals keine Zeit hatte.",
    ],
    2, // C
    "Laut Situationsbeschreibung ärgert sich Thomas, dass sein Rat beim letzten Termin unbeachtet blieb. Er möchte seine Patientin auch heute nochmals von der Notwendigkeit einer Mundhygiene überzeugen. Hierzu muss er zuerst einmal herausfinden, aus welchen Gründen die Patientin beim letzten Mal seinen Rat nicht befolgt hatte, um seine Hilfestellung besser an ihre Bedürfnisse anpassen zu können. Durch das aktive Nachfragen erhält er nicht nur die erforderliche Information, sondern signalisiert seiner Patientin zugleich auch sein Interesse an ihr und an einer Kooperation mit ihr."
  ),
  task(
    "er-off-11",
    "Lara hat eine sehr anstrengende Arbeitswoche hinter sich. Sie fühlt sich bereits sehr müde und geistig ausgelaugt. Heute besucht sie ihre Mutter im Pflegeheim. Dabei erfährt sie, dass ihre Mutter letzte Nacht friedlich verstorben ist. Lara redete mit dem Arzt im Pflegheim, der sehr einfühlsam war. Nach zwei Stunden verlässt sie das Pflegeheim. Dennoch kann sie im Moment an nichts als ihre Trauer denken. Selbst über schöne Erlebnisse in dieser Woche kann sie sich im Moment nicht freuen. Am liebsten würde sie sich in einem Loch verkriechen und weinen. Wie gehen Sie in der Situation von Lara idealerweise vor?",
    [
      "Ich rede mit jemand, der mich und meine Mutter sehr gut kennt, und meine Trauer annimmt.",
      "Ich akzeptiere, dass der Tod und die Trauer über den Tod ein Teil des Lebens sind.",
      "Ich sage mir, dass meine Mutter nun wenigstens nicht mehr leiden muss.",
      "Ich treffe mich mit einer Freundin, die mich schon immer gut aufheitern und ablenken konnte.",
    ],
    0, // A
    "Laut Situationsbeschreibung ist Lara aktuell aufgrund des Todes ihrer Mutter in tiefer Trauer, und hat selbst Probleme, sich über schöne Dinge freuen zu können. Sich von anderen Menschen in seiner Trauer verstanden zu fühlen, kann in solchen Situationen ein Trost sein, und helfen das Gefühl der Trauer allmählich in den Griff zu bekommen. Zudem erfordert dies von Lara selbst wenig Kraft und Anstrengung, was ihrer momentanen Situation entgegenkommt."
  ),
  task(
    "er-off-12",
    "Markus ist beruflich sehr engagiert und ehrgeizig. Vor einem halben Jahr hat er sich ein neues Auto gekauft, da er für sein altes Auto kein Pickerl mehr bekommen hätte. Er braucht das Auto, da er beruflich viel unterwegs ist. Der Verkäufer meinte damals, dass er das Auto, aufgrund von Lieferschwierigkeiten, wahrscheinlich erst diesen Monat liefern kann. Zudem hat er ihm versichert, dass er sich zwei Wochen vor der Lieferung noch bei ihm melden würde. Markus hat sich auf diese Angaben verlassen, und seine beruflichen Termine und Verpflichtungen entsprechend geplant. Bislang hat er jedoch noch nichts vom Verkäufer gehört. Daher beginnt sich Markus langsam Sorgen zu machen, ob er seine beruflichen Termine und Verpflichtungen einhalten kann. Wie gehen Sie in der Situation von Markus idealerweise vor?",
    [
      "Ich mache mir klar, dass es nicht die Schuld des Verkäufers ist, dass das Auto noch nicht da ist.",
      "Ich sage mir, dass ich die aktuelle Situation nicht ändern kann, und mit ihr leben muss.",
      "Ich beschäftige mich mit anderen Dingen, um mich von meinen aktuellen Sorgen abzulenken.",
      "Ich lasse mich vom Verkäufer über den aktuellen Stand und über Mietautos informieren.",
    ],
    3, // D
    "Laut Situationsbeschreibung braucht Markus das Auto für seine berufliche Tätigkeit, die ihm sehr wichtig ist. Er hat seine beruflichen Tätigkeiten und Verpflichtungen auch entsprechend geplant, sodass er diese erfüllen könnte, wenn das Auto, wie zunächst angekündigt, in diesem Monat geliefert werden würde. Bislang hat sich der Verkäufer diesbezüglich jedoch noch nicht bei Markus gemeldet. Daher macht er sich langsam Sorgen, ob er unter diesen Umständen seine beruflichen Verpflichtungen einhalten kann. Sich beim Verkäufer über den aktuellen Stand der Lieferung seines Autos und ggf. alternative Lösungsmöglichkeiten für sein Problem in Form eines Mietwagens zu erkundigen, ist unter den gegebenen Voraussetzungen eine zielführende Option, die die Situation, um ein berufliches Problem, dass aktuell noch nicht eingetreten ist, noch abwenden kann."
  ),
];

export const emotionenRegulierenOffiziellTasks: EmotionenRegulierenOffiziellTask[] = [
  ...OFFIZIELLE_12,
  ...emotionenRegulierenOffiziellExtra,
];
