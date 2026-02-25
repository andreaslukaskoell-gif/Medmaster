/**
 * Weitere Emotionen-erkennen-Aufgaben im offiziellen MedAT-Format (ee-off-15 bis ee-off-100).
 * Zusammen mit den 14 bestehenden Aufgaben insgesamt 100 Beispiele.
 */

import type { EmotionenErkennenOffiziellTask } from "./emotionenErkennenOffiziell";

const OPTION_IDS = ["A", "B", "C", "D", "E"] as const;
type W = "wahrscheinlich";
type U = "unwahrscheinlich";

function task(
  id: string,
  situation: string,
  personName: string,
  emotionen: [string, string, string, string, string],
  correctValues: [W | U, W | U, W | U, W | U, W | U],
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

export const emotionenErkennenOffiziellExtra2: EmotionenErkennenOffiziellTask[] = [
  task(
    "ee-off-15",
    "Ein Hausarzt wird von einem Patienten, den er 15 Jahre lang betreut hat, darüber informiert, dass dieser zu einem anderen Arzt wechseln möchte, weil ihm die Wartezeiten zu lang seien.",
    "der Hausarzt",
    ["Er ist enttäuscht.", "Er ist traurig.", "Er ärgert sich.", "Er freut sich.", "Er ist stolz."],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Langjährige Beziehung und Wechsel aus nachvollziehbaren Gründen können Enttäuschung, Trauer und Ärger auslösen. Freude und Stolz nicht."
  ),
  task(
    "ee-off-16",
    "Eine Studentin sitzt in einer Vorlesung über Pathologie. Der Dozent zeigt detaillierte Bilder von schweren Verbrennungen und erklärt den Fall dabei sachlich und routiniert.",
    "die Studentin",
    [
      "Sie ist angewidert.",
      "Sie hat Angst.",
      "Sie ist überrascht.",
      "Sie ist stolz.",
      "Sie ist eifersüchtig.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Konfrontation mit drastischen Bildern kann Ekel, Angst und Überraschung auslösen. Stolz und Eifersucht nicht."
  ),
  task(
    "ee-off-17",
    "Ein Arzt im Bereitschaftsdienst erhält um 3 Uhr nachts den fünften Anruf wegen Beschwerden, die eindeutig kein Notfall sind. Der Anrufer besteht trotzdem auf einem Hausbesuch.",
    "der Arzt",
    [
      "Er ärgert sich.",
      "Er ist enttäuscht.",
      "Er ist gelangweilt.",
      "Er bewundert jemanden.",
      "Er ist neidisch.",
    ],
    [
      "wahrscheinlich",
      "wahrscheinlich",
      "unwahrscheinlich",
      "unwahrscheinlich",
      "unwahrscheinlich",
    ],
    "Wiederholte Inanspruchnahme bei Nicht-Notfällen kann Ärger und Enttäuschung auslösen. Langweile, Bewunderung und Neid nicht."
  ),
  task(
    "ee-off-18",
    "Eine Medizinstudentin, die ihr Famulatur in einer Palliativstation absolviert, begleitet zum ersten Mal einen Patienten in seinen letzten Stunden. Die Familie des Patienten bittet sie, zu bleiben.",
    "die Medizinstudentin",
    [
      "Sie ist traurig.",
      "Sie empfindet Mitgefühl.",
      "Sie hat Angst.",
      "Sie ist neidisch.",
      "Sie ist gelangweilt.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Erste Begleitung eines Sterbenden und Vertrauen der Familie können Trauer, Mitgefühl und Angst auslösen. Neid und Langweile nicht."
  ),
  task(
    "ee-off-19",
    "Ein Patient mit chronischen Rückenschmerzen wird nach jahrelanger Odyssee durch verschiedene Arztpraxen endlich von einem Spezialisten ernst genommen, der eine seltene Ursache für seine Beschwerden findet.",
    "der Patient",
    [
      "Er ist erleichtert.",
      "Er ist dankbar.",
      "Er hat Hoffnung.",
      "Er empfindet Verachtung.",
      "Er schämt sich.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Endliche Anerkennung und Klärung nach langer Suche führen zu Erleichterung, Dankbarkeit und Hoffnung. Verachtung und Scham nicht."
  ),
  task(
    "ee-off-20",
    "Eine Laborantin wird bei der Beförderung übergangen, obwohl sie die längste Betriebszugehörigkeit und die beste Qualifikation hat. Die Stelle bekommt ein jüngerer Kollege, der mit dem Chef privat befreundet ist.",
    "die Laborantin",
    [
      "Sie ärgert sich.",
      "Sie ist enttäuscht.",
      "Sie ist neidisch.",
      "Sie empfindet Verachtung.",
      "Sie freut sich.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich"],
    "Ungerechte Entscheidung zugunsten eines Bekannten kann Ärger, Enttäuschung, Neid und Verachtung auslösen. Freude nicht."
  ),
  task(
    "ee-off-21",
    "Ein Kind kommt weinend nach Hause, weil es von Mitschülern ausgelacht wurde. Die Mutter hat den Eindruck, dass die Lehrerin nicht eingegriffen hat.",
    "die Mutter",
    [
      "Sie ist traurig.",
      "Sie empfindet Mitgefühl.",
      "Sie ärgert sich.",
      "Sie ist stolz.",
      "Sie ist gelangweilt.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Leid des Kindes und vermutetes Versagen der Lehrerin können Trauer, Mitgefühl und Ärger auslösen. Stolz und Langweile nicht."
  ),
  task(
    "ee-off-22",
    "Ein Mann erfährt, dass seine langjährige Partnerin eine Affäre hatte. Sie bittet um Verzeihung und möchte die Beziehung retten.",
    "der Mann",
    [
      "Er ist verletzt.",
      "Er ist wütend.",
      "Er ist enttäuscht.",
      "Er ist erleichtert.",
      "Er bewundert jemanden.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Betrug in der Beziehung löst typischerweise Verletzung, Wut und Enttäuschung aus. Erleichterung und Bewunderung nicht."
  ),
  task(
    "ee-off-23",
    "Eine Frau hat sich monatelang auf einen Marathon vorbereitet. Am Renntag muss sie nach der Hälfte der Strecke wegen eines Muskelfaserrisses aufgeben.",
    "die Frau",
    [
      "Sie ist enttäuscht.",
      "Sie ist frustriert.",
      "Sie ist traurig.",
      "Sie ist stolz.",
      "Sie ist erleichtert.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Aufgeben müssen trotz großer Vorbereitung führt zu Enttäuschung, Frustration und Trauer. Stolz und Erleichterung unwahrscheinlich."
  ),
  task(
    "ee-off-24",
    "Ein Bewerber erhält nach dem fünften Vorstellungsgespräch endlich eine Zusage für die Stelle, die er sich am meisten gewünscht hat.",
    "der Bewerber",
    [
      "Er freut sich.",
      "Er ist erleichtert.",
      "Er ist stolz.",
      "Er ist angewidert.",
      "Er schämt sich.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Erfolg nach vielen Absagen löst Freude, Erleichterung und Stolz aus. Ekel und Scham nicht."
  ),
  task(
    "ee-off-25",
    "Eine Ärztin muss den Angehörigen mitteilen, dass ein Eingriff nicht den erhofften Erfolg hatte und der Zustand des Patienten sich verschlechtert hat.",
    "die Ärztin",
    [
      "Sie ist traurig.",
      "Sie empfindet Mitgefühl.",
      "Sie fühlt sich schuldig.",
      "Sie freut sich.",
      "Sie ist neidisch.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Schlechte Nachricht für Angehörige kann bei der Überbringerin Trauer, Mitgefühl und Schuldgefühle auslösen. Freude und Neid nicht."
  ),
  task(
    "ee-off-26",
    "Ein Student bekommt von seinem Dozenten eine schlechte Note für eine Hausarbeit, obwohl er sich große Mühe gegeben hat. Ein Kommilitone, der weniger gearbeitet hat, erhält eine bessere Note.",
    "der Student",
    [
      "Er ist enttäuscht.",
      "Er ist neidisch.",
      "Er ärgert sich.",
      "Er ist dankbar.",
      "Er ist zuversichtlich.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Ungerecht empfundene Benotung und Vergleich mit dem Kommilitonen können Enttäuschung, Neid und Ärger auslösen. Dankbarkeit und Zuversicht nicht."
  ),
  task(
    "ee-off-27",
    "Eine Pflegekraft wird von einer Angehörigen öffentlich beschuldigt, sie habe den Patienten vernachlässigt. Später stellt sich heraus, dass die Angehörige falsch informiert war.",
    "die Pflegekraft",
    [
      "Sie ist verletzt.",
      "Sie ärgert sich.",
      "Sie ist erleichtert.",
      "Sie schämt sich.",
      "Sie ist neidisch.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Falsche öffentliche Anschuldigung kann Verletzung und Ärger auslösen; nach Aufklärung Erleichterung. Scham und Neid unwahrscheinlich."
  ),
  task(
    "ee-off-28",
    "Ein Vater sieht, wie sein Kind beim Schulfest den ersten Preis gewinnt. Das Kind strahlt und wird von allen gratuliert.",
    "der Vater",
    [
      "Er ist stolz.",
      "Er freut sich.",
      "Er ist gerührt.",
      "Er ist enttäuscht.",
      "Er ist eifersüchtig.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Erfolg des eigenen Kindes löst bei den Eltern typischerweise Stolz, Freude und Rührung aus. Enttäuschung und Eifersucht nicht."
  ),
  task(
    "ee-off-29",
    "Eine Kollegin hat ein wichtiges Projekt an sich gerissen und dem Teamchef gegenüber so dargestellt, als wäre die Idee von ihr. Die Betroffene hatte die Idee ursprünglich eingebracht.",
    "die Betroffene",
    [
      "Sie ärgert sich.",
      "Sie ist enttäuscht.",
      "Sie fühlt sich ungerecht behandelt.",
      "Sie ist dankbar.",
      "Sie bewundert jemanden.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Ideendiebstahl und falsche Zuschreibung führen zu Ärger, Enttäuschung und dem Gefühl ungerecht behandelt zu werden. Dankbarkeit und Bewunderung nicht."
  ),
  task(
    "ee-off-30",
    "Ein junger Erwachsener zieht zum ersten Mal von zu Hause aus. Die Eltern stehen am Bahnsteig und winken zum Abschied.",
    "die Eltern",
    [
      "Sie sind wehmütig.",
      "Sie sind stolz.",
      "Sie sind traurig.",
      "Sie sind erleichtert.",
      "Sie sind angewidert.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Auszug des Kindes löst bei Eltern oft Wehmut, Stolz und Trauer aus. Erleichterung möglich, Ekel unwahrscheinlich."
  ),
  task(
    "ee-off-31",
    "Eine Frau hat einen Unfall mit Blechschaden verursacht. Der andere Fahrer steigt aus und beginnt, sie laut zu beschimpfen, obwohl sie sich sofort entschuldigt hat.",
    "die Frau",
    [
      "Sie hat Angst.",
      "Sie schämt sich.",
      "Sie ist verärgert.",
      "Sie ist stolz.",
      "Sie ist neidisch.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Unfall und aggressive Reaktion des anderen können Angst, Scham und Ärger auslösen. Stolz und Neid nicht."
  ),
  task(
    "ee-off-32",
    "Ein Mitarbeiter erfährt, dass sein Vorgesetzter gegenüber der Geschäftsleitung falsche Behauptungen über seine Leistung aufgestellt hat. Er wird dadurch bei einer Gehaltsverhandlung schlechter dastehen.",
    "der Mitarbeiter",
    [
      "Er ärgert sich.",
      "Er ist enttäuscht.",
      "Er fühlt sich ungerecht behandelt.",
      "Er ist dankbar.",
      "Er ist zuversichtlich.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Falsche Darstellung durch den Vorgesetzten führt zu Ärger, Enttäuschung und dem Gefühl ungerecht behandelt zu werden. Dankbarkeit und Zuversicht nicht."
  ),
  task(
    "ee-off-33",
    "Ein Kind hat heimlich die Ersparnisse der Mutter genommen und ausgegeben. Die Mutter hat es gerade entdeckt und konfrontiert das Kind.",
    "das Kind",
    [
      "Es schämt sich.",
      "Es hat Angst.",
      "Es fühlt sich schuldig.",
      "Es ist stolz.",
      "Es ist erleichtert.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Entdecktes Fehlverhalten gegenüber der Mutter löst Scham, Angst und Schuldgefühle aus. Stolz und Erleichterung nicht."
  ),
  task(
    "ee-off-34",
    "Eine Freundin hat Geburtstag und wird von der gesamten Gruppe mit einer Überraschungsparty überrascht. Sie hatte in der letzten Zeit viel Stress und wirkt überwältigt.",
    "die Freundin",
    [
      "Sie freut sich.",
      "Sie ist überrascht.",
      "Sie ist gerührt.",
      "Sie ist angewidert.",
      "Sie ärgert sich.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Überraschungsparty von Freunden löst typischerweise Freude, Überraschung und Rührung aus. Ekel und Ärger nicht."
  ),
  task(
    "ee-off-35",
    "Ein Mann wartet seit drei Stunden in der Notaufnahme. Mehrere Patienten, die nach ihm kamen, wurden bereits aufgerufen. Er hat starke Schmerzen.",
    "der Mann",
    [
      "Er ist verärgert.",
      "Er ist frustriert.",
      "Er fühlt sich ungerecht behandelt.",
      "Er ist dankbar.",
      "Er ist zufrieden.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Lange Wartezeit bei Schmerzen und spätere Drannahme führen zu Ärger, Frustration und dem Gefühl ungerecht behandelt zu werden. Dankbarkeit und Zufriedenheit nicht."
  ),
  task(
    "ee-off-36",
    "Eine Wissenschaftlerin erhält nach Jahren der Forschung einen renommierten Preis für ihre Arbeit. Die Verleihung findet vor großem Publikum statt.",
    "die Wissenschaftlerin",
    [
      "Sie ist stolz.",
      "Sie freut sich.",
      "Sie ist überrascht.",
      "Sie schämt sich.",
      "Sie ist neidisch.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Preisverleihung für die eigene Arbeit löst Stolz, Freude und oft Überraschung aus. Scham und Neid auf sich selbst nicht."
  ),
  task(
    "ee-off-37",
    "Ein Jugendlicher wird von den Eltern beim Rauchen erwischt, obwohl er versprochen hatte, damit aufzuhören. Die Eltern reagieren enttäuscht und wütend.",
    "der Jugendliche",
    [
      "Er schämt sich.",
      "Er hat Angst.",
      "Er fühlt sich schuldig.",
      "Er ist stolz.",
      "Er ist erleichtert.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Erwischt werden beim Bruch eines Versprechens löst Scham, Angst und Schuldgefühle aus. Stolz und Erleichterung nicht."
  ),
  task(
    "ee-off-38",
    "Eine Frau hat ihre beste Freundin monatelang nicht gesehen. Beim Wiedersehen umarmt die Freundin sie herzlich und weint vor Freude.",
    "die Frau",
    [
      "Sie freut sich.",
      "Sie ist gerührt.",
      "Sie ist überrascht.",
      "Sie ist angewidert.",
      "Sie ärgert sich.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Wiedersehen mit enger Freundin und deren Reaktion lösen Freude, Rührung und Überraschung aus. Ekel und Ärger nicht."
  ),
  task(
    "ee-off-39",
    "Ein Bewerber wird zu einem Vorstellungsgespräch eingeladen. Er betritt den Raum und sieht, dass fünf Personen ihm gegenübersitzen werden.",
    "der Bewerber",
    [
      "Er ist nervös.",
      "Er hat Angst.",
      "Er ist angespannt.",
      "Er ist gelangweilt.",
      "Er ist neidisch.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Wichtiges Vorstellungsgespräch mit mehreren Gegenübern löst Nervosität, Angst und Anspannung aus. Langweile und Neid nicht."
  ),
  task(
    "ee-off-40",
    "Eine Mutter erfährt, dass ihr Kind von der Schule fliegen soll, weil es wiederholt gegen Regeln verstoßen hat. Sie hatte davon nichts gewusst.",
    "die Mutter",
    [
      "Sie ist schockiert.",
      "Sie ist traurig.",
      "Sie ist wütend.",
      "Sie ist erleichtert.",
      "Sie ist stolz.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Unerwartete schwere Konsequenz für das Kind löst Schock, Trauer und Wut aus. Erleichterung und Stolz nicht."
  ),
  task(
    "ee-off-41",
    "Ein Mann hat seinem Bruder Geld geliehen. Der Bruder hat es nie zurückgezahlt und geht dem Thema aus dem Weg. Beim Familientreffen weicht er aus.",
    "der Mann",
    [
      "Er ist enttäuscht.",
      "Er ärgert sich.",
      "Er fühlt sich ausgenutzt.",
      "Er ist dankbar.",
      "Er bewundert jemanden.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Nicht zurückgezahltes Darlehen und Ausweichen führen zu Enttäuschung, Ärger und dem Gefühl ausgenutzt zu werden. Dankbarkeit und Bewunderung nicht."
  ),
  task(
    "ee-off-42",
    "Eine Ärztin hat einen Fehler bei der Dosierung gemacht. Der Patient hat keinen Schaden genommen, aber eine Kollegin hat den Fehler bemerkt und angesprochen.",
    "die Ärztin",
    [
      "Sie schämt sich.",
      "Sie hat Angst.",
      "Sie ist dankbar.",
      "Sie ist wütend.",
      "Sie ist neidisch.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Eigener Fehler und Ansprache durch Kollegin können Scham, Angst und Dankbarkeit (dass nichts passiert ist) auslösen. Wut und Neid nicht."
  ),
  task(
    "ee-off-43",
    "Ein Rentner hat seine Frau nach 50 Jahren Ehe verloren. Beim Durchsehen alter Fotos weint er zum ersten Mal seit der Beerdigung.",
    "der Rentner",
    [
      "Er ist traurig.",
      "Er vermisst sie.",
      "Er ist wehmütig.",
      "Er ist erleichtert.",
      "Er ist neidisch.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Trauer und Erinnerung an den Verstorbenen lösen Trauer, Vermissen und Wehmut aus. Erleichterung und Neid nicht."
  ),
  task(
    "ee-off-44",
    "Eine Schülerin hat sich wochenlang auf eine Prüfung vorbereitet. Sie öffnet den Umschlag mit dem Ergebnis und sieht, dass sie mit Auszeichnung bestanden hat.",
    "die Schülerin",
    [
      "Sie freut sich.",
      "Sie ist erleichtert.",
      "Sie ist stolz.",
      "Sie ist enttäuscht.",
      "Sie schämt sich.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Positives Prüfungsergebnis nach Vorbereitung löst Freude, Erleichterung und Stolz aus. Enttäuschung und Scham nicht."
  ),
];
