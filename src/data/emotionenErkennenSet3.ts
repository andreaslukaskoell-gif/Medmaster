/**
 * Emotionen erkennen — Set 3 (28 Aufgaben, ee-3-01 bis ee-3-28)
 * Alltagsszenarien (kein Medizin-/Uni-Kontext), offizielles MedAT-Format.
 * Schwierigkeit: 10 × leicht, 10 × mittel, 8 × schwer.
 */

import type { EmotionenErkennenTask } from "./sekDataNew";

export const emotionenErkennenSet3: EmotionenErkennenTask[] = [
  // ============================================================
  // LEICHT (difficulty 1) — 10 Aufgaben
  // ============================================================
  {
    id: "ee-3-01",
    difficulty: 1,
    situation:
      "Marlene findet beim Aufräumen ihres Dachbodens ein Fotoalbum ihrer verstorbenen Großmutter. Sie blättert durch die Bilder und erkennt viele gemeinsame Momente aus ihrer Kindheit.",
    emotionen: [
      { name: "Trauer", correct: "wahrscheinlich" },
      { name: "Freude", correct: "wahrscheinlich" },
      { name: "Neid", correct: "unwahrscheinlich" },
      { name: "Ärger", correct: "unwahrscheinlich" },
      { name: "Ekel", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-3-02",
    difficulty: 1,
    situation:
      "Thomas hat monatelang für einen Marathon trainiert. Am Wettkampftag überquert er die Ziellinie und verbessert seine persönliche Bestzeit um acht Minuten.",
    emotionen: [
      { name: "Stolz", correct: "wahrscheinlich" },
      { name: "Freude", correct: "wahrscheinlich" },
      { name: "Schuld", correct: "unwahrscheinlich" },
      { name: "Scham", correct: "unwahrscheinlich" },
      { name: "Angst", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-3-03",
    difficulty: 1,
    situation:
      "Claudia bestellt im Internet ein Kleid für eine Hochzeit. Als das Paket ankommt, stellt sie fest, dass der Stoff billig wirkt und die Farbe nicht dem Bild entspricht.",
    emotionen: [
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Dankbarkeit", correct: "unwahrscheinlich" },
      { name: "Stolz", correct: "unwahrscheinlich" },
      { name: "Bewunderung", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-3-04",
    difficulty: 1,
    situation:
      "Stefan beobachtet, wie sein Hund nach einer langen Krankheit zum ersten Mal wieder fröhlich durch den Garten läuft und mit dem Schwanz wedelt.",
    emotionen: [
      { name: "Freude", correct: "wahrscheinlich" },
      { name: "Erleichterung", correct: "wahrscheinlich" },
      { name: "Verachtung", correct: "unwahrscheinlich" },
      { name: "Schuld", correct: "unwahrscheinlich" },
      { name: "Neid", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-3-05",
    difficulty: 1,
    situation:
      "Petra wird bei der Arbeit vor versammelter Belegschaft von ihrem Vorgesetzten wegen eines kleinen Fehlers laut kritisiert. Die Kollegen schauen betreten zu Boden.",
    emotionen: [
      { name: "Scham", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Freude", correct: "unwahrscheinlich" },
      { name: "Dankbarkeit", correct: "unwahrscheinlich" },
      { name: "Zuversicht", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-3-06",
    difficulty: 1,
    situation:
      "Markus wartet seit zwei Stunden am Flughafen auf seinen verspäteten Flug. Plötzlich wird die Annullierung des Fluges bekanntgegeben, und der nächste verfügbare Flug geht erst am nächsten Tag.",
    emotionen: [
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Stolz", correct: "unwahrscheinlich" },
      { name: "Dankbarkeit", correct: "unwahrscheinlich" },
      { name: "Bewunderung", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-3-07",
    difficulty: 1,
    situation:
      "Birgit erfährt bei einem Familienessen, dass ihre Schwester ein Baby erwartet. Die ganze Familie freut sich, und Birgit wird gefragt, ob sie Patentante werden möchte.",
    emotionen: [
      { name: "Freude", correct: "wahrscheinlich" },
      { name: "Überraschung", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "unwahrscheinlich" },
      { name: "Ekel", correct: "unwahrscheinlich" },
      { name: "Reue", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-3-08",
    difficulty: 1,
    situation:
      "Georg hilft einer älteren Nachbarin, ihren schweren Einkauf die Treppe hinaufzutragen. Die Nachbarin bedankt sich herzlich und sagt, dass sie ohne seine Hilfe nicht zurechtgekommen wäre.",
    emotionen: [
      { name: "Freude", correct: "wahrscheinlich" },
      { name: "Stolz", correct: "wahrscheinlich" },
      { name: "Angst", correct: "unwahrscheinlich" },
      { name: "Neid", correct: "unwahrscheinlich" },
      { name: "Scham", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-3-09",
    difficulty: 1,
    situation:
      "Andrea kommt nach einem langen Arbeitstag nach Hause und findet ihr Wohnzimmer überschwemmt vor, weil ein Wasserrohr geplatzt ist. Ihre Möbel und Teppiche sind durchnässt.",
    emotionen: [
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Angst", correct: "wahrscheinlich" },
      { name: "Freude", correct: "unwahrscheinlich" },
      { name: "Stolz", correct: "unwahrscheinlich" },
      { name: "Dankbarkeit", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-3-10",
    difficulty: 1,
    situation:
      "Felix wird nach einem Bewerbungsgespräch angerufen und erfährt, dass er die Stelle bekommen hat. Er hatte sich bereits auf drei Absagen eingestellt.",
    emotionen: [
      { name: "Freude", correct: "wahrscheinlich" },
      { name: "Erleichterung", correct: "wahrscheinlich" },
      { name: "Überraschung", correct: "wahrscheinlich" },
      { name: "Trauer", correct: "unwahrscheinlich" },
      { name: "Verachtung", correct: "unwahrscheinlich" },
    ],
  },

  // ============================================================
  // MITTEL (difficulty 2) — 10 Aufgaben
  // ============================================================
  {
    id: "ee-3-11",
    difficulty: 2,
    situation:
      "Sabine organisiert seit Wochen eine Überraschungsparty für ihren Mann. Am Abend des Festes erscheinen nur drei der zwanzig eingeladenen Gäste. Ihr Mann merkt sofort, dass etwas geplant war.",
    emotionen: [
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Scham", correct: "wahrscheinlich" },
      { name: "Erleichterung", correct: "unwahrscheinlich" },
      { name: "Bewunderung", correct: "unwahrscheinlich" },
      { name: "Zuversicht", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-3-12",
    difficulty: 2,
    situation:
      "Helmut erfährt, dass sein bester Freund seit Monaten hinter seinem Rücken schlecht über ihn redet. Ein gemeinsamer Bekannter zeigt ihm Chatnachrichten als Beweis.",
    emotionen: [
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Freude", correct: "unwahrscheinlich" },
      { name: "Dankbarkeit", correct: "unwahrscheinlich" },
      { name: "Stolz", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-3-13",
    difficulty: 2,
    situation:
      "Karin beobachtet im Supermarkt, wie eine Mutter ihr weinendes Kind grob am Arm packt und anschreit. Andere Kunden schauen weg.",
    emotionen: [
      { name: "Mitgefühl", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Freude", correct: "unwahrscheinlich" },
      { name: "Neid", correct: "unwahrscheinlich" },
      { name: "Stolz", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-3-14",
    difficulty: 2,
    situation:
      "Roland hat seinem Bruder vor einem Jahr 2.000 Euro geliehen. Als er das Geld zurückfordert, behauptet sein Bruder, er habe nie Geld bekommen, und bricht den Kontakt ab.",
    emotionen: [
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Verachtung", correct: "wahrscheinlich" },
      { name: "Dankbarkeit", correct: "unwahrscheinlich" },
      { name: "Freude", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-3-15",
    difficulty: 2,
    situation:
      "Monika bemerkt, dass ihre Kollegin für dieselbe Arbeit deutlich mehr Gehalt bekommt. Monika ist seit fünf Jahren im Unternehmen, die Kollegin erst seit zwei.",
    emotionen: [
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Neid", correct: "wahrscheinlich" },
      { name: "Erleichterung", correct: "unwahrscheinlich" },
      { name: "Dankbarkeit", correct: "unwahrscheinlich" },
      { name: "Stolz", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-3-16",
    difficulty: 2,
    situation:
      "Christian hat sich wochenlang auf einen Kochkurs gefreut. Am ersten Abend stellt er fest, dass der Kursleiter ihn ständig vor der Gruppe korrigiert, obwohl andere dieselben Fehler machen.",
    emotionen: [
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Scham", correct: "wahrscheinlich" },
      { name: "Bewunderung", correct: "unwahrscheinlich" },
      { name: "Zuversicht", correct: "unwahrscheinlich" },
      { name: "Dankbarkeit", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-3-17",
    difficulty: 2,
    situation:
      "Elisabeth hat ihren alten Schulfreund seit fünfzehn Jahren nicht gesehen. Bei einem zufälligen Treffen in der Stadt erzählt er ihr, dass er eine schwere Krankheit überstanden hat und nun wieder gesund ist.",
    emotionen: [
      { name: "Überraschung", correct: "wahrscheinlich" },
      { name: "Mitgefühl", correct: "wahrscheinlich" },
      { name: "Erleichterung", correct: "wahrscheinlich" },
      { name: "Neid", correct: "unwahrscheinlich" },
      { name: "Verachtung", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-3-18",
    difficulty: 2,
    situation:
      "Werner trainiert seit Monaten für ein Tennisturnier in seinem Verein. Im Finale verliert er knapp gegen einen Spieler, der erst seit einem halben Jahr Tennis spielt.",
    emotionen: [
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Dankbarkeit", correct: "unwahrscheinlich" },
      { name: "Ekel", correct: "unwahrscheinlich" },
      { name: "Erleichterung", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-3-19",
    difficulty: 2,
    situation:
      "Sonja arbeitet ehrenamtlich in einem Tierheim. Eines Tages erkennt sie, dass ein von ihr aufgepäppeltes Kätzchen von einer liebevollen Familie adoptiert wird. Die Familie schickt ihr später ein Foto des glücklichen Tieres.",
    emotionen: [
      { name: "Freude", correct: "wahrscheinlich" },
      { name: "Stolz", correct: "wahrscheinlich" },
      { name: "Angst", correct: "unwahrscheinlich" },
      { name: "Schuld", correct: "unwahrscheinlich" },
      { name: "Ärger", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-3-20",
    difficulty: 2,
    situation:
      "Robert verspricht seinen Kindern, am Wochenende einen Ausflug in den Freizeitpark zu machen. Am Samstagmorgen muss er unerwartet für einen erkrankten Kollegen einspringen und absagen.",
    emotionen: [
      { name: "Schuld", correct: "wahrscheinlich" },
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Freude", correct: "unwahrscheinlich" },
      { name: "Stolz", correct: "unwahrscheinlich" },
      { name: "Neid", correct: "unwahrscheinlich" },
    ],
  },

  // ============================================================
  // SCHWER (difficulty 3) — 8 Aufgaben
  // ============================================================
  {
    id: "ee-3-21",
    difficulty: 3,
    situation:
      "Susanne bewirbt sich um eine Beförderung, die ihr langjähriger Mentor ihr empfohlen hat. Die Stelle bekommt jedoch eine jüngere Kollegin, die der Mentor ebenfalls unterstützt hat, ohne Susanne davon zu erzählen.",
    emotionen: [
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Eifersucht", correct: "wahrscheinlich" },
      { name: "Erleichterung", correct: "unwahrscheinlich" },
      { name: "Dankbarkeit", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-3-22",
    difficulty: 3,
    situation:
      "Norbert findet heraus, dass sein erwachsener Sohn heimlich hohe Spielschulden angehäuft hat. Der Sohn bittet ihn unter Tränen um finanzielle Hilfe und verspricht, damit aufzuhören.",
    emotionen: [
      { name: "Angst", correct: "wahrscheinlich" },
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Mitgefühl", correct: "wahrscheinlich" },
      { name: "Stolz", correct: "unwahrscheinlich" },
      { name: "Bewunderung", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-3-23",
    difficulty: 3,
    situation:
      "Gisela gewinnt bei einem Gewinnspiel eine teure Reise. Als sie die Nachricht ihrer Freundin erzählt, reagiert diese kühl und sagt, solche Gewinnspiele seien Zeitverschwendung.",
    emotionen: [
      { name: "Freude", correct: "wahrscheinlich" },
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Schuld", correct: "unwahrscheinlich" },
      { name: "Angst", correct: "unwahrscheinlich" },
      { name: "Ekel", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-3-24",
    difficulty: 3,
    situation:
      "Heinrich zieht nach der Pensionierung in eine neue Stadt, um näher bei seinen Enkeln zu sein. Nach drei Monaten merkt er, dass seine Kinder ihn selten besuchen und die Enkel kaum Zeit für ihn haben.",
    emotionen: [
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Trauer", correct: "wahrscheinlich" },
      { name: "Reue", correct: "wahrscheinlich" },
      { name: "Stolz", correct: "unwahrscheinlich" },
      { name: "Zuversicht", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-3-25",
    difficulty: 3,
    situation:
      "Daniela erhält nach Jahren der Trennung einen Brief ihres Vaters, der den Kontakt abgebrochen hatte. Er schreibt, er bereue sein Verhalten und möchte sie wiedersehen.",
    emotionen: [
      { name: "Überraschung", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Hoffnung", correct: "wahrscheinlich" },
      { name: "Bewunderung", correct: "unwahrscheinlich" },
      { name: "Neid", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-3-26",
    difficulty: 3,
    situation:
      "Franz entdeckt, dass sein Nachbar seit Monaten heimlich Gartenabfälle über den Zaun auf sein Grundstück wirft. Als er ihn darauf anspricht, lacht der Nachbar und sagt, das sei doch nicht schlimm.",
    emotionen: [
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Verachtung", correct: "wahrscheinlich" },
      { name: "Freude", correct: "unwahrscheinlich" },
      { name: "Dankbarkeit", correct: "unwahrscheinlich" },
      { name: "Bewunderung", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-3-27",
    difficulty: 3,
    situation:
      "Irene kündigt ihre sichere Stelle, um sich mit einem eigenen Café selbstständig zu machen. Am Eröffnungstag kommen nur zwei Kunden, während das Restaurant nebenan voll ist.",
    emotionen: [
      { name: "Angst", correct: "wahrscheinlich" },
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Reue", correct: "wahrscheinlich" },
      { name: "Stolz", correct: "unwahrscheinlich" },
      { name: "Erleichterung", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-3-28",
    difficulty: 3,
    situation:
      "Martin pflegt seit zwei Jahren seine kranke Mutter zu Hause. Sein Bruder, der im Ausland lebt und nie hilft, erbt im Testament genauso viel wie Martin. Die Mutter sagt, sie wolle gerecht sein.",
    emotionen: [
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Freude", correct: "unwahrscheinlich" },
      { name: "Bewunderung", correct: "unwahrscheinlich" },
      { name: "Erleichterung", correct: "unwahrscheinlich" },
    ],
  },
];
