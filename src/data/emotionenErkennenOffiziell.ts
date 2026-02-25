/**
 * Emotionen erkennen — Offizielles MedAT-Vorbild
 * Kurze Situationsbeschreibungen; pro Aufgabe 5 Emotionen als "eher wahrscheinlich" oder
 * "eher unwahrscheinlich" bewerten. Eine Aufgabe gilt nur als richtig, wenn alle 5 korrekt sind.
 * Aufnahmeverfahren: 14 Aufgaben, 21 Minuten (Papier-Bleistift-Test).
 */

export type OptionId = "A" | "B" | "C" | "D" | "E";

export type EmotionenErkennenOffiziellTask = {
  id: string;
  /** Situationsbeschreibung */
  situation: string;
  /** Name der Person (für die Frage "Wie fühlt sich [personName] in dieser Situation?") */
  personName: string;
  /** Genau 5 Optionen (A–E) mit Satz und korrekter Bewertung */
  emotionen: { id: OptionId; text: string; correct: "wahrscheinlich" | "unwahrscheinlich" }[];
  /** Erklärung der richtigen Antworten (offizieller Lösungstext) */
  explanation: string;
};

/** Offizielle Instruktion (MedAT-Aufnahmeverfahren, Beispielaufgaben) */
export const EMOTIONEN_ERKENNEN_INSTRUKTION =
  "Bitte überlegen Sie nun anhand der vorgegebenen Informationen, welche Emotionen in der betreffenden Situation bei einer bestimmten Person eher wahrscheinlich und welche eher unwahrscheinlich sind. Orientieren Sie sich dabei bitte nur an den Situationsbeschreibungen und den Informationen, die Sie über die betreffenden Personen haben. Es geht nicht darum, wie Sie sich selbst in der betreffenden Situation fühlen würden. Sie sollen sich vielmehr in eine bestimmte Situation und Person hineinversetzen und anhand der vorliegenden Informationen entscheiden, welche Emotionen eher wahrscheinlich und welche eher unwahrscheinlich auftreten.";

/** Offizielle Ausfüllvorschrift der Aufgabengruppe Emotionen erkennen (MedAT) */
export const EMOTIONEN_ERKENNEN_AUSFUELLVORSCHRIFT = `Ausfüllvorschrift der Aufgabengruppe Emotionen erkennen

Die Aufgabe bei der Aufgabengruppe Emotionen erkennen besteht darin, anhand der vorgegebenen Informationen zu erfassen, welche Emotionen in der betreffenden Situation bei einer bestimmten Person eher wahrscheinlich sind und welche eher unwahrscheinlich sind. Insgesamt sind 14 Aufgaben beim Untertest Emotionen erkennen zu bearbeiten.

Bitte beachten Sie:
• Es muss für alle fünf Emotionen der Aufgabe festgelegt werden, ob diese „eher wahrscheinlich“ oder „eher unwahrscheinlich“ bei einer bestimmten Person in der betreffenden Situation sind.
• Wird für eine oder mehrere Emotionen keine Auswahl getroffen, wird die gesamte Aufgabe mit 0 bewertet.
• Werden für eine oder mehrere Emotionen beide Optionen („eher wahrscheinlich“ und „eher unwahrscheinlich“) ausgewählt, wird die gesamte Aufgabe mit 0 bewertet.
• Bitte vergewissern Sie sich daher bei jeder Aufgabe, dass Sie für alle fünf Emotionen eine Auswahl getroffen haben und bei jeder Emotion nur eine Markierung vorgenommen haben.

Übungsbeispiel:
Tanja trifft auf einem Klassentreffen eine gute Schulfreundin, die nun bereits seit vielen Jahren im Ausland lebt. Während der Schulzeit waren sie beste Freundinnen. Ursprünglich hatte die Freundin ihren Besuch am Klassentreffen aus beruflichen Gründen abgesagt.
Wie fühlt sich Tanja in dieser Situation?

(A) Sie ist ausgeglichen.
(B) Sie ist dankbar.
(C) Sie freut sich.
(D) Sie ist überrascht.
(E) Sie ist zuversichtlich.

Lösung: C und D sind „eher wahrscheinlich“; A, B und E sind „eher unwahrscheinlich“. Für jede Emotion wird genau eine Option gewählt (eher wahrscheinlich oder eher unwahrscheinlich). Da für alle Emotionen die richtige Auswahl getroffen wurde, wird die Aufgabe mit 1 bewertet.

Beispiele, die mit 0 bewertet werden:
• Doppelte Markierung: Bei einer Emotion wurden sowohl „eher wahrscheinlich“ als auch „eher unwahrscheinlich“ angekreuzt → Aufgabe wird mit 0 bewertet.
• Fehlende Auswahl: Für eine oder mehrere Emotionen wurde keine Auswahl getroffen → Aufgabe wird mit 0 bewertet.`;

const OPTION_IDS: OptionId[] = ["A", "B", "C", "D", "E"];

function task(
  id: string,
  situation: string,
  personName: string,
  emotionen: [string, string, string, string, string],
  correctValues: [
    "wahrscheinlich" | "unwahrscheinlich",
    "wahrscheinlich" | "unwahrscheinlich",
    "wahrscheinlich" | "unwahrscheinlich",
    "wahrscheinlich" | "unwahrscheinlich",
    "wahrscheinlich" | "unwahrscheinlich",
  ],
  explanation: string
): EmotionenErkennenOffiziellTask {
  return {
    id,
    situation,
    personName,
    emotionen: OPTION_IDS.map((optId, i) => ({
      id: optId,
      text: emotionen[i],
      correct: correctValues[i],
    })),
    explanation,
  };
}

/** 6 offizielle Beispielaufgaben (MedAT-H Aufnahmeverfahren) */
const OFFIZIELLE_6: EmotionenErkennenOffiziellTask[] = [
  task(
    "ee-off-01",
    "Tanja trifft auf einem Klassentreffen eine gute Schulfreundin, die nun bereits seit vielen Jahren im Ausland lebt. Während der Schulzeit waren sie beste Freundinnen. Ursprünglich hatte die Freundin ihren Besuch am Klassentreffen aus beruflichen Gründen abgesagt.",
    "Tanja",
    [
      "Sie ist ausgeglichen.",
      "Sie ist dankbar.",
      "Sie freut sich.",
      "Sie ist überrascht.",
      "Sie ist zuversichtlich.",
    ],
    [
      "unwahrscheinlich",
      "unwahrscheinlich",
      "wahrscheinlich",
      "wahrscheinlich",
      "unwahrscheinlich",
    ],
    "Im ersten und zweiten Satz erfahren wir, dass Tanja eine gute Freundin trifft, die sie schon länger nicht gesehen hat. Daher ist es eher wahrscheinlich, dass sie sich freut. Zudem hatte die Freundin ursprünglich abgesagt; daher ist es eher wahrscheinlich, dass Tanja überrascht ist. Aus der Beschreibung geht nicht hervor, ob Tanja dankbar, ausgeglichen oder zuversichtlich ist – daher eher unwahrscheinlich."
  ),
  task(
    "ee-off-02",
    "Hannes arbeitet bereits seit mehreren Wochen durchgehend angestrengt und konzentriert an einem wichtigen Projektbericht. Von dem Projektbericht hängt ab, ob er die lang ersehnte Beförderung erhält. Zwei Tage vor der Fertigstellung stürzt der Computer ab. Damit hatte er nicht gerechnet. Der Computer schien gut in Schuss zu sein. Nun muss er auf einen Techniker warten. Obwohl er rechtzeitig begonnen hat, sieht er sich nun in Zeitnot. Für ihn ist unklar, ob er den Projektbericht nun noch rechtzeitig abgeben kann.",
    "Hannes",
    [
      "Er bereut etwas.",
      "Er ärgert sich.",
      "Er hat Angst.",
      "Er fühlt sich schuldig.",
      "Er schämt sich.",
    ],
    [
      "unwahrscheinlich",
      "wahrscheinlich",
      "wahrscheinlich",
      "unwahrscheinlich",
      "unwahrscheinlich",
    ],
    "Durch äußere Umstände entsteht ein Hindernis, das er nicht vorhergesehen hat – daher ist Ärger wahrscheinlich. Er kann die Situation nicht einschätzen und kann aus seiner Sicht nichts mehr unternehmen – daher ist Angst wahrscheinlich. Ob er etwas bereut, sich schuldig fühlt oder schämt, geht aus der Beschreibung nicht hervor – daher eher unwahrscheinlich."
  ),
  task(
    "ee-off-03",
    "Karin arbeitete die letzten drei Wochen an einem wichtigen Projekt. Sie war von Anfang an motiviert bei der Sache. Während des Projekts traten auch einige Schwierigkeiten auf. Aufgrund ihres Einsatzes und ihres Fachwissens konnte sie die Probleme jedoch letztendlich lösen. Karin hat auch in dieser schwierigen Zeit an sich und den Erfolg des Projekts geglaubt. Bei der abschließenden Präsentation ihrer Arbeit erhält Karin viel Lob.",
    "Karin",
    [
      "Sie ist erleichtert.",
      "Sie ist stolz.",
      "Sie ist herausgefordert und motiviert.",
      "Sie ist überrascht.",
      "Sie ist dankbar.",
    ],
    [
      "unwahrscheinlich",
      "wahrscheinlich",
      "unwahrscheinlich",
      "unwahrscheinlich",
      "unwahrscheinlich",
    ],
    "Karin hat die Probleme gelöst und an den Erfolg geglaubt; für die Arbeit wurde sie gelobt – daher ist Stolz wahrscheinlich. Ob sie aktuell noch herausgefordert und motiviert ist, ob sie erleichtert oder dankbar ist, geht aus der Beschreibung nicht eindeutig hervor; sie hatte immer an den Erfolg geglaubt, daher ist Überraschung unwahrscheinlich."
  ),
  task(
    "ee-off-04",
    "Dominik ist alleinerziehender Vater. Er hängt sehr an seinem Sohn und wünscht sich für ihn nur das Beste. Da sein Arbeitgeber Konkurs anmelden musste, verlor er vor zwei Monaten seine Arbeit. Mittlerweile hatte er schon eine neue Arbeitsstelle gefunden. Mit seinem neuen Gehalt konnten sie sich die Miete aber nicht leisten. Daher mussten sie umziehen. Sein Sohn hat Schwierigkeiten in der neuen Umgebung Freunde zu finden, und fühlt sich einsam. Das macht dem Sohn sichtlich zu schaffen. Dominik weiß nicht, wie er seinem Sohn helfen soll.",
    "Dominik",
    [
      "Er ist traurig.",
      "Er empfindet Mitleid.",
      "Er fühlt sich schuldig.",
      "Er bereut etwas.",
      "Er liebt seinen Sohn.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich", "wahrscheinlich"],
    "Er fühlt sich mit dem Sohn verbunden und möchte das Beste für ihn; der Sohn leidet – daher sind Trauer und Mitleid wahrscheinlich, und dass er seinen Sohn liebt, ebenfalls. Dass er sich schuldig fühlt oder etwas bereut, geht aus der Beschreibung nicht hervor – daher eher unwahrscheinlich."
  ),
  task(
    "ee-off-05",
    "Silke und Eva haben gemeinsam zu studieren begonnen. Beide sind sehr engagiert und erfolgsorientiert. Während Silke nebenher arbeiten muss, wird Eva von ihrer Familie unterstützt. Eva kann sich daher voll auf ihr Studium konzentrieren. Silke hält diesen Vorteil von Eva für ungerecht. Sie hätte selbst auch gerne bessere Bedingungen zum Studieren.",
    "Silke",
    [
      "Sie ist enttäuscht.",
      "Sie ist neidisch.",
      "Sie ist eifersüchtig.",
      "Sie ist stolz.",
      "Sie ist zuversichtlich.",
    ],
    [
      "unwahrscheinlich",
      "wahrscheinlich",
      "unwahrscheinlich",
      "unwahrscheinlich",
      "unwahrscheinlich",
    ],
    "Silke findet Evas bessere Bedingungen ungerecht und hätte selbst gerne bessere – daher ist Neid wahrscheinlich. Von Eifersucht spricht man, wenn das Objekt der Begierde ein Mensch ist; ob sie enttäuscht, stolz oder zuversichtlich ist, geht aus der Beschreibung nicht hervor – daher eher unwahrscheinlich."
  ),
  task(
    "ee-off-06",
    "Heiko hatte mit einem Kollegen im Büro immer wieder Probleme. Dies beeinträchtigte seine Lebensqualität merklich. Nun hat der Kollege eine Stelle in einer anderen Firma angenommen. Der neue Kollege scheint sehr nett zu sein.",
    "Heiko",
    [
      "Er ist mit seinem Leben zufrieden.",
      "Er ist ausgeglichen.",
      "Er ist erleichtert.",
      "Er ist zuversichtlich.",
      "Er ist herausgefordert und motiviert.",
    ],
    [
      "unwahrscheinlich",
      "unwahrscheinlich",
      "wahrscheinlich",
      "wahrscheinlich",
      "unwahrscheinlich",
    ],
    "Das belastende Problem mit dem Kollegen fällt weg – daher ist Erleichterung wahrscheinlich. Der neue Kollege wirkt nett – daher ist Zuversicht wahrscheinlich. Über Zufriedenheit, Ausgeglichenheit oder aktuelle Herausforderung erfahren wir zu wenig – daher eher unwahrscheinlich."
  ),
];

import { emotionenErkennenOffiziellExtra } from "./emotionenErkennenOffiziellExtra";
import { emotionenErkennenOffiziellExtra2 } from "./emotionenErkennenOffiziellExtra2";
import { emotionenErkennenOffiziellExtra3 } from "./emotionenErkennenOffiziellExtra3";

/** Alle 100 Aufgaben (6 offizielle + 8 Extra + 30 Extra2 + 56 Extra3) */
export const emotionenErkennenOffiziellAlle: EmotionenErkennenOffiziellTask[] = [
  ...OFFIZIELLE_6,
  ...emotionenErkennenOffiziellExtra,
  ...emotionenErkennenOffiziellExtra2,
  ...emotionenErkennenOffiziellExtra3,
];

export const emotionenErkennenOffiziellTasks: EmotionenErkennenOffiziellTask[] = [...OFFIZIELLE_6];
