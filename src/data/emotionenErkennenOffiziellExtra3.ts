/**
 * Emotionen erkennen — Aufgaben ee-off-45 bis ee-off-100 (56 Aufgaben).
 * Zusammen mit Offiziell, Extra und Extra2 insgesamt 100 Beispiele.
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

export const emotionenErkennenOffiziellExtra3: EmotionenErkennenOffiziellTask[] = [
  task(
    "ee-off-45",
    "Ein Fahrer wird von der Polizei angehalten. Sein Führerschein ist abgelaufen.",
    "der Fahrer",
    ["Er hat Angst.", "Er ist nervös.", "Er schämt sich.", "Er ist stolz.", "Er freut sich."],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Kontrolle mit abgelaufenem Führerschein löst Angst, Nervosität und Scham aus."
  ),
  task(
    "ee-off-46",
    "Eine Krankenschwester wird von einem Patienten für ihre Geduld gelobt. Die Angehörigen danken ihr.",
    "die Krankenschwester",
    [
      "Sie freut sich.",
      "Sie ist gerührt.",
      "Sie ist stolz.",
      "Sie ist enttäuscht.",
      "Sie ärgert sich.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Lob und Dank lösen Freude, Rührung und Stolz aus."
  ),
  task(
    "ee-off-47",
    "Ein Mann sieht, wie sein Nachbar wiederholt sein Auto beschädigt hat. Der Nachbar leugnet alles.",
    "der Mann",
    [
      "Er ärgert sich.",
      "Er fühlt sich ohnmächtig.",
      "Er ist enttäuscht.",
      "Er ist dankbar.",
      "Er bewundert jemanden.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Schädigung und Leugnen lösen Ärger, Ohnmacht und Enttäuschung aus."
  ),
  task(
    "ee-off-48",
    "Eine Frau hat gekündigt. Heute ist ihr letzter Tag. Die Kollegen haben eine Abschiedsfeier organisiert.",
    "die Frau",
    [
      "Sie ist wehmütig.",
      "Sie ist gerührt.",
      "Sie ist dankbar.",
      "Sie ist erleichtert.",
      "Sie ist angewidert.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich"],
    "Abschied und Überraschung lösen Wehmut, Rührung, Dankbarkeit und Erleichterung aus."
  ),
  task(
    "ee-off-49",
    "Ein Kind hat beim Sport einen Mitspieler aus Versehen verletzt. Der Trainer stellt es zur Rede.",
    "das Kind",
    [
      "Es hat Angst.",
      "Es fühlt sich schuldig.",
      "Es schämt sich.",
      "Es ist stolz.",
      "Es ist neidisch.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Unbeabsichtigte Verletzung löst Angst, Schuld und Scham aus."
  ),
  task(
    "ee-off-50",
    "Ein Bewerber erhält eine Absage auf eine Stelle, für die er sich sehr qualifiziert fühlte.",
    "der Bewerber",
    [
      "Er ist enttäuscht.",
      "Er ist frustriert.",
      "Er zweifelt an sich.",
      "Er ist erleichtert.",
      "Er ist neidisch.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Absage trotz Qualifikation führt zu Enttäuschung, Frustration und Selbstzweifel."
  ),
  task(
    "ee-off-51",
    "Eine Lehrerin wird vor dem Kollegium kritisiert, weil die Leistungen ihrer Klasse schlecht ausgefallen sind.",
    "die Lehrerin",
    [
      "Sie schämt sich.",
      "Sie ist verärgert.",
      "Sie fühlt sich ungerecht behandelt.",
      "Sie ist stolz.",
      "Sie ist neidisch.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Öffentliche Kritik kann Scham, Ärger und Ungerechtigkeitsgefühl auslösen."
  ),
  task(
    "ee-off-52",
    "Ein Paar hat jahrelang auf ein Kind gehofft. Die Frau erfährt beim Arzt, dass sie schwanger ist.",
    "die Frau",
    [
      "Sie freut sich.",
      "Sie ist überwältigt.",
      "Sie hat Hoffnung.",
      "Sie ist traurig.",
      "Sie ärgert sich.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Langerwartete Schwangerschaft löst Freude, Überwältigung und Hoffnung aus."
  ),
  task(
    "ee-off-53",
    "Ein Mitarbeiter hat einen Fehler in einer Präsentation gemacht. Der Kunde hat ihn vor allen korrigiert.",
    "der Mitarbeiter",
    [
      "Er schämt sich.",
      "Er hat Angst.",
      "Er ist verärgert.",
      "Er ist stolz.",
      "Er ist erleichtert.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Eigener Fehler und öffentliche Korrektur lösen Scham, Angst und Ärger aus."
  ),
  task(
    "ee-off-54",
    "Eine Frau besucht ihre schwer kranke Mutter im Krankenhaus. Die Mutter erkennt sie kaum noch.",
    "die Frau",
    [
      "Sie ist traurig.",
      "Sie hat Angst.",
      "Sie ist hilflos.",
      "Sie ist erleichtert.",
      "Sie ist neidisch.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Krankheit und Nichterkennen lösen Trauer, Angst und Hilflosigkeit aus."
  ),
  task(
    "ee-off-55",
    "Ein Jugendlicher wird von seinen Mitschülern aus der Klassengruppe ausgeschlossen.",
    "der Jugendliche",
    [
      "Er ist traurig.",
      "Er ist verletzt.",
      "Er fühlt sich ausgeschlossen.",
      "Er ist stolz.",
      "Er ist erleichtert.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Ausschluss löst Trauer, Verletzung und Ausschlussgefühl aus."
  ),
  task(
    "ee-off-56",
    "Eine Ärztin hat einen Patienten operiert. Am nächsten Tag entwickelt der Patient unerwartet Komplikationen.",
    "die Ärztin",
    [
      "Sie hat Angst.",
      "Sie fühlt sich verantwortlich.",
      "Sie ist besorgt.",
      "Sie ist erleichtert.",
      "Sie ist neidisch.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Unerwartete Komplikationen lösen Angst, Verantwortung und Sorge aus."
  ),
  task(
    "ee-off-57",
    "Ein Mann hat seinen Hund seit zwölf Jahren. Der Tierarzt sagt, das Tier müsse eingeschläfert werden.",
    "der Mann",
    [
      "Er ist traurig.",
      "Er hat Angst vor dem Abschied.",
      "Er ist wehmütig.",
      "Er ist wütend.",
      "Er ist neidisch.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Abschied vom kranken Haustier löst Trauer, Angst und Wehmut aus."
  ),
  task(
    "ee-off-58",
    "Eine Studentin erhält die E-Mail: Abschlussarbeit bestanden mit Auszeichnung.",
    "die Studentin",
    [
      "Sie ist erleichtert.",
      "Sie freut sich.",
      "Sie ist stolz.",
      "Sie ist enttäuscht.",
      "Sie schämt sich.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Positive Bewertung löst Erleichterung, Freude und Stolz aus."
  ),
  task(
    "ee-off-59",
    "Ein Vater hat seinem Kind verboten, zu einer Party zu gehen. Das Kind schreit ihn an.",
    "der Vater",
    [
      "Er ist verletzt.",
      "Er ist wütend.",
      "Er ist traurig.",
      "Er ist erleichtert.",
      "Er ist neidisch.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Vorwürfe des Kindes können Verletzung, Wut und Trauer auslösen."
  ),
  task(
    "ee-off-60",
    "Eine Kollegin hat ein Gerücht über eine Mitarbeiterin verbreitet. Die Betroffene konfrontiert sie.",
    "die Betroffene",
    [
      "Sie ist wütend.",
      "Sie ist verletzt.",
      "Sie fühlt sich ungerecht behandelt.",
      "Sie ist dankbar.",
      "Sie bewundert jemanden.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Gerüchte und Konfrontation lösen Wut, Verletzung und Ungerechtigkeitsgefühl aus."
  ),
  task(
    "ee-off-61",
    "Ein Patient wartet auf das Biopsie-Ergebnis. Der Arzt bittet ihn ins Sprechzimmer. Seine Miene ist ernst.",
    "der Patient",
    [
      "Er hat Angst.",
      "Er ist angespannt.",
      "Er fürchtet Schlimmes.",
      "Er ist erleichtert.",
      "Er ist neidisch.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Ernste Miene löst Angst, Anspannung und Befürchtungen aus."
  ),
  task(
    "ee-off-62",
    "Eine Frau hat sich getrennt. Beim Einkaufen sieht sie ihren Ex mit einer anderen Frau.",
    "die Frau",
    [
      "Sie ist verletzt.",
      "Sie ist eifersüchtig.",
      "Sie ist traurig.",
      "Sie ist erleichtert.",
      "Sie ist stolz.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Ex mit neuer Partnerin zu sehen löst Verletzung, Eifersucht und Trauer aus."
  ),
  task(
    "ee-off-63",
    "Ein Helfer hat eine Familie nach einer Überschwemmung unterstützt. Die Familie bedankt sich unter Tränen.",
    "der Helfer",
    ["Er ist gerührt.", "Er ist stolz.", "Er freut sich.", "Er ist angewidert.", "Er ärgert sich."],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Dank und emotionale Rückmeldung lösen Rührung, Stolz und Freude aus."
  ),
  task(
    "ee-off-64",
    "Ein Kind hat das Handy der Mutter kaputt gemacht. Es sitzt weinend in seinem Zimmer.",
    "das Kind",
    [
      "Es hat Angst.",
      "Es fühlt sich schuldig.",
      "Es schämt sich.",
      "Es ist stolz.",
      "Es ist neidisch.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Kaputtgemachtes Eigentum löst Angst, Schuld und Scham aus."
  ),
  task(
    "ee-off-65",
    "Ein Mann hat einen Kredit für ein Geschäft aufgenommen. Das Geschäft ist pleite. Die Bank verlangt weiterhin Raten.",
    "der Mann",
    [
      "Er hat Angst.",
      "Er ist verzweifelt.",
      "Er fühlt sich unter Druck.",
      "Er ist erleichtert.",
      "Er ist stolz.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Pleite und geforderte Raten lösen Angst, Verzweiflung und Druck aus."
  ),
  task(
    "ee-off-66",
    "Eine Ärztin muss einem Paar mitteilen, dass ihr ungeborenes Kind eine schwere Behinderung haben wird.",
    "die Ärztin",
    [
      "Sie empfindet Mitgefühl.",
      "Sie fühlt sich unwohl.",
      "Sie ist traurig.",
      "Sie ist erleichtert.",
      "Sie ist neidisch.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Schlechte Nachricht an werdende Eltern löst Mitgefühl, Unbehagen und Trauer aus."
  ),
  task(
    "ee-off-67",
    "Ein Bewerber hat im Vorstellungsgespräch eine Frage falsch verstanden und am Thema vorbei geantwortet.",
    "der Bewerber",
    [
      "Er schämt sich.",
      "Er ist verunsichert.",
      "Er hat Angst.",
      "Er ist zuversichtlich.",
      "Er ist stolz.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Falsche Antwort löst Scham, Verunsicherung und Angst aus."
  ),
  task(
    "ee-off-68",
    "Eine Frau hat ihre Schwester jahrelang nicht gesprochen. Bei einer Beerdigung umarmt die Schwester sie unerwartet.",
    "die Frau",
    [
      "Sie ist überrascht.",
      "Sie ist gerührt.",
      "Sie ist verunsichert.",
      "Sie ist angewidert.",
      "Sie ist neidisch.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Unerwartete Versöhnungsgeste löst Überraschung, Rührung und Verunsicherung aus."
  ),
  task(
    "ee-off-69",
    "Ein Schüler hat in einer Prüfung abgeschrieben. Der Lehrer hat es bemerkt. Die Klasse schaut zu.",
    "der Schüler",
    [
      "Er schämt sich.",
      "Er hat Angst.",
      "Er ist verärgert.",
      "Er ist stolz.",
      "Er ist erleichtert.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Erwischt werden beim Schummeln löst Scham, Angst und Ärger aus."
  ),
  task(
    "ee-off-70",
    "Eine Pflegekraft hat einen Bewohner ins Herz geschlossen. Sie erfährt, dass er in der Nacht verstorben ist.",
    "die Pflegekraft",
    [
      "Sie ist traurig.",
      "Sie ist wehmütig.",
      "Sie ist erleichtert.",
      "Sie ist wütend.",
      "Sie ist neidisch.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Tod eines vertrauten Bewohners löst Trauer, Wehmut und oft Erleichterung aus."
  ),
  task(
    "ee-off-71",
    "Ein Mann hat einen Vortrag gehalten. Er bekommt stehenden Beifall und wird gelobt.",
    "der Mann",
    [
      "Er ist stolz.",
      "Er freut sich.",
      "Er ist erleichtert.",
      "Er schämt sich.",
      "Er ist neidisch.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Stehender Beifall und Lob lösen Stolz, Freude und Erleichterung aus."
  ),
  task(
    "ee-off-72",
    "Eine Mutter hat ihr Kind beim Lügen ertappt. Das Kind behauptet weiterhin, die Wahrheit zu sagen.",
    "die Mutter",
    [
      "Sie ist enttäuscht.",
      "Sie ist verärgert.",
      "Sie ist traurig.",
      "Sie ist erleichtert.",
      "Sie bewundert jemanden.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Lüge des Kindes löst Enttäuschung, Ärger und Trauer aus."
  ),
  task(
    "ee-off-73",
    "Ein Angestellter erfährt, dass er nach Jahren endlich befördert wird. Sein Chef gratuliert ihm persönlich.",
    "der Angestellte",
    [
      "Er freut sich.",
      "Er ist stolz.",
      "Er ist erleichtert.",
      "Er ist enttäuscht.",
      "Er schämt sich.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Beförderung und persönliche Gratulation lösen Freude, Stolz und Erleichterung aus."
  ),
  task(
    "ee-off-74",
    "Eine Frau hat ihre Bewerbung für einen Traumjob abgeschickt. Sie erhält eine Einladung zum Vorstellungsgespräch.",
    "die Frau",
    [
      "Sie freut sich.",
      "Sie ist zuversichtlich.",
      "Sie ist aufgeregt.",
      "Sie ist enttäuscht.",
      "Sie ist wütend.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Einladung zum Vorstellungsgespräch löst Freude, Zuversicht und Aufregung aus."
  ),
  task(
    "ee-off-75",
    "Ein Vater muss seine Tochter ins Krankenhaus bringen. Sie hat sich beim Sport schwer verletzt. Der Arzt untersucht sie gerade.",
    "der Vater",
    [
      "Er hat Angst.",
      "Er ist besorgt.",
      "Er fühlt sich hilflos.",
      "Er ist erleichtert.",
      "Er ist neidisch.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Schwer verletztes Kind und Untersuchung lösen Angst, Sorge und Hilflosigkeit aus."
  ),
  task(
    "ee-off-76",
    "Ein Kollege hat die Idee eines Mitarbeiters in einer Besprechung als seine eigene ausgegeben. Der Mitarbeiter sitzt mit im Raum.",
    "der Mitarbeiter",
    [
      "Er ist wütend.",
      "Er fühlt sich ungerecht behandelt.",
      "Er ist enttäuscht.",
      "Er ist dankbar.",
      "Er bewundert jemanden.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Ideendiebstahl löst Wut, Ungerechtigkeitsgefühl und Enttäuschung aus."
  ),
  task(
    "ee-off-77",
    "Eine Frau hat ihre Mutter gepflegt. Nach dem Tod der Mutter findet sie einen Brief, in dem die Mutter ihr dankt.",
    "die Frau",
    [
      "Sie ist gerührt.",
      "Sie ist wehmütig.",
      "Sie ist traurig.",
      "Sie ist erleichtert.",
      "Sie ist neidisch.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Dankbrief der Verstorbenen löst Rührung, Wehmut und Trauer aus."
  ),
  task(
    "ee-off-78",
    "Ein Sportler hat sich monatelang auf einen Wettkampf vorbereitet. Er gewinnt die Goldmedaille.",
    "der Sportler",
    [
      "Er freut sich.",
      "Er ist stolz.",
      "Er ist erleichtert.",
      "Er ist enttäuscht.",
      "Er schämt sich.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Goldmedaille nach Vorbereitung löst Freude, Stolz und Erleichterung aus."
  ),
  task(
    "ee-off-79",
    "Ein Reisender hat seinen Flug verpasst. Der nächste Flug ist erst in zwei Tagen. Er hatte einen wichtigen Termin am Zielort.",
    "der Reisende",
    [
      "Er ist frustriert.",
      "Er ist verärgert.",
      "Er ist enttäuscht.",
      "Er ist erleichtert.",
      "Er ist stolz.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Verpasster Flug und wichtiger Termin lösen Frustration, Ärger und Enttäuschung aus."
  ),
  task(
    "ee-off-80",
    "Eine Ärztin hat einen Fehler bei der Medikamentendosierung gemacht. Der Patient hat keinen Schaden genommen.",
    "die Ärztin",
    [
      "Sie schämt sich.",
      "Sie hat Angst.",
      "Sie ist erleichtert.",
      "Sie ist wütend.",
      "Sie ist neidisch.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Eigener Fehler ohne Schaden löst Scham, Angst und Erleichterung aus."
  ),
  task(
    "ee-off-81",
    "Ein Kind wird von den anderen auf dem Schulhof nicht mitspielen lassen. Es steht am Rand und schaut zu.",
    "das Kind",
    [
      "Es ist traurig.",
      "Es fühlt sich ausgeschlossen.",
      "Es ist verletzt.",
      "Es ist stolz.",
      "Es ist erleichtert.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Ausschluss vom Spiel löst Trauer, Ausschlussgefühl und Verletzung aus."
  ),
  task(
    "ee-off-82",
    "Ein Mann hat seinen Job verloren. Er hat eine Familie zu ernähren und keine Ersparnisse.",
    "der Mann",
    [
      "Er hat Angst.",
      "Er ist verzweifelt.",
      "Er fühlt sich unter Druck.",
      "Er ist erleichtert.",
      "Er ist stolz.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Jobverlust bei Verantwortung für Familie löst Angst, Verzweiflung und Druck aus."
  ),
  task(
    "ee-off-83",
    "Eine Therapeutin erfährt, dass eine langjährige Klientin nach schwerer Krise einen neuen Job gefunden hat.",
    "die Therapeutin",
    [
      "Sie freut sich.",
      "Sie ist erleichtert.",
      "Sie ist stolz.",
      "Sie ist enttäuscht.",
      "Sie ärgert sich.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Erfolg der Klientin löst Freude, Erleichterung und Stolz aus."
  ),
  task(
    "ee-off-84",
    "Ein Fahrgast wird in der vollen U-Bahn von einem anderen Fahrgast laut beschimpft, obwohl er nichts getan hat.",
    "der Fahrgast",
    [
      "Er ist verärgert.",
      "Er ist verletzt.",
      "Er schämt sich.",
      "Er ist stolz.",
      "Er ist neidisch.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Öffentliche Beschimpfung löst Ärger, Verletzung und Scham aus."
  ),
  task(
    "ee-off-85",
    "Eine Frau hat ihre beste Freundin nach einem Streit monatelang ignoriert. Die Freundin schreibt ihr eine Versöhnungsnachricht.",
    "die Frau",
    [
      "Sie ist gerührt.",
      "Sie ist unsicher.",
      "Sie ist verletzt.",
      "Sie ist erleichtert.",
      "Sie ist neidisch.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Versöhnungsnachricht löst Rührung, Unsicherheit und Verletzung aus."
  ),
  task(
    "ee-off-86",
    "Ein Student hat seine Abschlussprüfung nicht bestanden. Es war sein letzter Versuch. Er muss das Studium abbrechen.",
    "der Student",
    [
      "Er ist verzweifelt.",
      "Er ist traurig.",
      "Er ist enttäuscht.",
      "Er ist erleichtert.",
      "Er ist stolz.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Endgültiges Nichtbestehen löst Verzweiflung, Trauer und Enttäuschung aus."
  ),
  task(
    "ee-off-87",
    "Ein Kind bekommt von den Großeltern ein lang ersehntes Geschenk zum Geburtstag.",
    "das Kind",
    [
      "Es freut sich.",
      "Es ist überrascht.",
      "Es ist dankbar.",
      "Es ist enttäuscht.",
      "Es ärgert sich.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Lang ersehntes Geschenk löst Freude, Überraschung und Dankbarkeit aus."
  ),
  task(
    "ee-off-88",
    "Ein Mitarbeiter wird vor dem Team für ein Projekt gelobt, das in Wirklichkeit eine Kollegin geleistet hat. Die Kollegin schweigt.",
    "die Kollegin",
    [
      "Sie ist verärgert.",
      "Sie fühlt sich ungerecht behandelt.",
      "Sie ist enttäuscht.",
      "Sie ist dankbar.",
      "Sie bewundert jemanden.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Falsche Zuschreibung des eigenen Erfolgs löst Ärger, Ungerechtigkeitsgefühl und Enttäuschung aus."
  ),
  task(
    "ee-off-89",
    "Ein Patient wartet seit Stunden in der Notaufnahme. Ein Arzt kommt endlich und entschuldigt sich für die Wartezeit.",
    "der Patient",
    [
      "Er ist erleichtert.",
      "Er ist noch verärgert.",
      "Er ist skeptisch.",
      "Er ist neidisch.",
      "Er ist stolz.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Endlich dran sein und Entschuldigung lösen Erleichterung, anhaltenden Ärger und Skepsis aus."
  ),
  task(
    "ee-off-90",
    "Eine Mutter sieht, wie ihr Kind beim Schulkonzert einen Solopart fehlerfrei spielt. Das Publikum applaudiert.",
    "die Mutter",
    [
      "Sie ist stolz.",
      "Sie freut sich.",
      "Sie ist gerührt.",
      "Sie ist enttäuscht.",
      "Sie schämt sich.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Erfolg des Kindes vor Publikum löst Stolz, Freude und Rührung aus."
  ),
  task(
    "ee-off-91",
    "Ein Mann hat einen Unfall verursacht. Der andere Fahrer steigt aus und beginnt sofort, ihn anzuschreien.",
    "der Mann",
    ["Er hat Angst.", "Er schämt sich.", "Er ist verärgert.", "Er ist stolz.", "Er ist neidisch."],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Unfall und Anschreien lösen Angst, Scham und Ärger aus."
  ),
  task(
    "ee-off-92",
    "Eine Pflegekraft wird von einer Angehörigen beschuldigt, sie habe den Patienten vernachlässigt. Später stellt sich heraus, dass die Angehörige falsch informiert war.",
    "die Pflegekraft",
    [
      "Sie ist verletzt.",
      "Sie ist erleichtert.",
      "Sie ist verärgert.",
      "Sie ist neidisch.",
      "Sie bewundert jemanden.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Falsche Beschuldigung und spätere Aufklärung lösen Verletzung, Erleichterung und Ärger aus."
  ),
  task(
    "ee-off-93",
    "Ein Jugendlicher hat heimlich die Kreditkarte der Eltern benutzt. Die Eltern haben die Abrechnung gesehen und konfrontieren ihn.",
    "der Jugendliche",
    [
      "Er hat Angst.",
      "Er schämt sich.",
      "Er fühlt sich schuldig.",
      "Er ist stolz.",
      "Er ist erleichtert.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Entdecktes Fehlverhalten löst Angst, Scham und Schuldgefühle aus."
  ),
  task(
    "ee-off-94",
    "Eine Frau hat ihre Schwester um einen Gefallen gebeten. Die Schwester hat abgelehnt und gesagt, sie habe keine Zeit.",
    "die Frau",
    [
      "Sie ist enttäuscht.",
      "Sie ist verletzt.",
      "Sie ist verärgert.",
      "Sie ist dankbar.",
      "Sie bewundert jemanden.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Ablehnung der Schwester löst Enttäuschung, Verletzung und Ärger aus."
  ),
  task(
    "ee-off-95",
    "Ein Arzt muss einem Ehepaar mitteilen, dass bei einem von ihnen eine unheilbare Krankheit festgestellt wurde.",
    "der Arzt",
    [
      "Er empfindet Mitgefühl.",
      "Er fühlt sich unwohl.",
      "Er ist traurig.",
      "Er ist erleichtert.",
      "Er ist neidisch.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Schlechte Nachricht an Angehörige löst Mitgefühl, Unbehagen und Trauer aus."
  ),
  task(
    "ee-off-96",
    "Ein Kind hat beim Spielen das Lieblingsspielzeug des Geschwisterkindes kaputt gemacht. Das Geschwisterkind weint.",
    "das Kind",
    [
      "Es hat Angst.",
      "Es fühlt sich schuldig.",
      "Es schämt sich.",
      "Es ist stolz.",
      "Es ist neidisch.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Kaputtgemachtes Spielzeug des Geschwisters löst Angst, Schuld und Scham aus."
  ),
  task(
    "ee-off-97",
    "Ein Bewerber wird nach dem Vorstellungsgespräch sofort mitgeteilt, dass er die Stelle bekommt. Der Personaler reicht ihm die Hand.",
    "der Bewerber",
    [
      "Er freut sich.",
      "Er ist erleichtert.",
      "Er ist überrascht.",
      "Er ist enttäuscht.",
      "Er schämt sich.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Sofortige Zusage löst Freude, Erleichterung und Überraschung aus."
  ),
  task(
    "ee-off-98",
    "Eine Kollegin hat ein wichtiges Meeting vergessen. Der Chef ist wütend. Sie hatte die Kollegin an das Meeting erinnert.",
    "die Kollegin",
    [
      "Sie ist verärgert.",
      "Sie fühlt sich ungerecht behandelt.",
      "Sie ist enttäuscht.",
      "Sie ist dankbar.",
      "Sie bewundert jemanden.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Eigene Erinnerung ignoriert, Chef wütend: Ärger, Ungerechtigkeitsgefühl und Enttäuschung."
  ),
  task(
    "ee-off-99",
    "Ein Vater hat seinem Sohn beim Lernen geholfen. Der Sohn hat die Prüfung mit Bestnote bestanden und bedankt sich herzlich.",
    "der Vater",
    ["Er ist stolz.", "Er freut sich.", "Er ist gerührt.", "Er ist enttäuscht.", "Er ärgert sich."],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Erfolg des Sohnes und Dankbarkeit lösen Stolz, Freude und Rührung aus."
  ),
  task(
    "ee-off-100",
    "Eine Frau hat sich von ihrem Mann getrennt. Sie erfährt, dass er bereits eine neue Partnerin hat. Die Beziehung hatte zwanzig Jahre gedauert.",
    "die Frau",
    [
      "Sie ist verletzt.",
      "Sie ist eifersüchtig.",
      "Sie ist traurig.",
      "Sie ist erleichtert.",
      "Sie ist stolz.",
    ],
    ["wahrscheinlich", "wahrscheinlich", "wahrscheinlich", "unwahrscheinlich", "unwahrscheinlich"],
    "Ex mit neuer Partnerin nach langer Ehe löst Verletzung, Eifersucht und Trauer aus."
  ),
];
