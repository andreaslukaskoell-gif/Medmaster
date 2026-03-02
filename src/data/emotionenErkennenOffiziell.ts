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

/** Offizielle Instruktion aus IB EE 26.pdf (Kurzfassung wie bei anderen Subtests) */
export const OFFICIAL_EE_INSTRUCTION = `Bei den Aufgaben finden Sie kurze Situationsbeschreibungen, in denen geschildert wird, wie bestimmte Personen eine Situation sehen. Aus diesen Informationen sollen Sie herausfinden, wie sich eine bestimmte Person in dieser Situation wahrscheinlich fühlt. Unterhalb der Situationsbeschreibungen finden Sie fünf Möglichkeiten, wie sich die Person fühlen könnte. Sie sollten für jede der Möglichkeiten angeben, ob sie eher wahrscheinlich oder eher unwahrscheinlich ist.

Eine Aufgabe gilt als richtig gelöst, wenn Sie alle eher wahrscheinlich auftretenden Emotionen und alle eher unwahrscheinlich auftretenden Emotionen richtig erkannt haben.

Aufnahmeverfahren: 14 Aufgaben, 21 Minuten (Papier-Bleistift-Test).`;

// Official examples (OFFIZIELLE_6) removed for copyright reasons.

import { emotionenErkennenOffiziellExtra } from "./emotionenErkennenOffiziellExtra";
import { emotionenErkennenOffiziellExtra2 } from "./emotionenErkennenOffiziellExtra2";
import { emotionenErkennenOffiziellExtra3 } from "./emotionenErkennenOffiziellExtra3";

/** Alle Trainingsaufgaben (8 Extra + 30 Extra2 + 56 Extra3) */
export const emotionenErkennenOffiziellAlle: EmotionenErkennenOffiziellTask[] = [
  ...emotionenErkennenOffiziellExtra,
  ...emotionenErkennenOffiziellExtra2,
  ...emotionenErkennenOffiziellExtra3,
];

/** @deprecated Official examples removed. Use emotionenErkennenOffiziellAlle instead. */
export const emotionenErkennenOffiziellTasks: EmotionenErkennenOffiziellTask[] = [];
