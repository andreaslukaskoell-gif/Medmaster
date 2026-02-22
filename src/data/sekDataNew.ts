// ============================================================
// SEK Data — Three Subtests (MedAT-H authentic format)
// ============================================================

// 1. EMOTIONEN ERKENNEN — Toggle wahrscheinlich/unwahrscheinlich for 5 emotions
export interface EmotionenErkennenTask {
  id: string;
  situation: string;
  emotionen: { name: string; correct: "wahrscheinlich" | "unwahrscheinlich" }[];
}

// 2. EMOTIONEN REGULIEREN — Choose best of 4 strategies (scored 0-3)
export interface EmotionenRegulierenTask {
  id: string;
  situation: string;
  emotion: string;
  ziel: string;
  strategien: { text: string; score: number }[];
}

// 3. SOZIALES ENTSCHEIDEN — Rank 5 statements from most to least important
export interface SozialesEntscheidenTask {
  id: string;
  dilemma: string;
  aussagen: { text: string; idealRank: number }[];
}

// ============================================================
// EMOTIONEN ERKENNEN — Set 1 (14 Aufgaben)
// ============================================================

const emotionenErkennenSet1: EmotionenErkennenTask[] = [
  {
    id: "ee-1-01",
    situation:
      "Eine Medizinstudentin erfährt, dass sie die schwierige Anatomieprüfung beim ersten Antritt bestanden hat, obwohl sie während der Lernphase mit einer schweren Erkältung zu kämpfen hatte.",
    emotionen: [
      { name: "Freude", correct: "wahrscheinlich" },
      { name: "Erleichterung", correct: "wahrscheinlich" },
      { name: "Stolz", correct: "wahrscheinlich" },
      { name: "Überraschung", correct: "wahrscheinlich" },
      { name: "Neid", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-1-02",
    situation:
      "Ein junger Assistenzarzt muss einem Patienten mitteilen, dass die Biopsie-Ergebnisse auf eine bösartige Erkrankung hindeuten. Es ist das erste Mal, dass er ein solches Gespräch führen muss.",
    emotionen: [
      { name: "Angst", correct: "wahrscheinlich" },
      { name: "Mitgefühl", correct: "wahrscheinlich" },
      { name: "Trauer", correct: "wahrscheinlich" },
      { name: "Freude", correct: "unwahrscheinlich" },
      { name: "Verachtung", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-1-03",
    situation:
      "Eine Patientin wartet seit drei Stunden in der Notaufnahme, obwohl sie starke Schmerzen hat. Sie sieht, wie Patienten, die nach ihr gekommen sind, vor ihr behandelt werden.",
    emotionen: [
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Neid", correct: "wahrscheinlich" },
      { name: "Dankbarkeit", correct: "unwahrscheinlich" },
      { name: "Freude", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-1-04",
    situation:
      "Ein Chirurg bemerkt während einer Routine-Operation, dass er versehentlich ein Blutgefäß verletzt hat. Die Blutung kann schnell gestillt werden, aber der Patient benötigt nun eine Transfusion.",
    emotionen: [
      { name: "Schuld", correct: "wahrscheinlich" },
      { name: "Angst", correct: "wahrscheinlich" },
      { name: "Scham", correct: "wahrscheinlich" },
      { name: "Stolz", correct: "unwahrscheinlich" },
      { name: "Langeweile", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-1-05",
    situation:
      "Eine Krankenschwester beobachtet, wie eine Kollegin von einem Patienten beschimpft und rassistisch beleidigt wird. Die Stationsleitung steht daneben und greift nicht ein.",
    emotionen: [
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Ekel", correct: "wahrscheinlich" },
      { name: "Mitgefühl", correct: "wahrscheinlich" },
      { name: "Verachtung", correct: "wahrscheinlich" },
      { name: "Freude", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-1-06",
    situation:
      "Ein Student erfährt, dass sein bester Freund den begehrten Forschungsplatz im Labor bekommen hat, für den er sich selbst ebenfalls beworben hatte. Der Freund erzählt ihm begeistert davon.",
    emotionen: [
      { name: "Neid", correct: "wahrscheinlich" },
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Freude", correct: "wahrscheinlich" },
      { name: "Ekel", correct: "unwahrscheinlich" },
      { name: "Erleichterung", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-1-07",
    situation:
      "Eine Ärztin behandelt ein Kind, das offensichtliche Zeichen von Vernachlässigung aufweist. Die Mutter behauptet, das Kind sei einfach ungeschickt und falle oft hin.",
    emotionen: [
      { name: "Mitgefühl", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Ekel", correct: "wahrscheinlich" },
      { name: "Bewunderung", correct: "unwahrscheinlich" },
      { name: "Langeweile", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-1-08",
    situation:
      "Ein älterer Patient, der seit Wochen auf der Intensivstation lag, kann zum ersten Mal wieder selbstständig einige Schritte gehen. Das gesamte Pflegeteam schaut zu.",
    emotionen: [
      { name: "Freude", correct: "wahrscheinlich" },
      { name: "Hoffnung", correct: "wahrscheinlich" },
      { name: "Bewunderung", correct: "wahrscheinlich" },
      { name: "Trauer", correct: "unwahrscheinlich" },
      { name: "Eifersucht", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-1-09",
    situation:
      "Ein Medizinstudent hält sein erstes Referat vor dem gesamten Jahrgang. Mitten im Vortrag verliert er den Faden und steht stumm vor dem Publikum. Einige Kommilitonen beginnen zu tuscheln.",
    emotionen: [
      { name: "Scham", correct: "wahrscheinlich" },
      { name: "Angst", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Stolz", correct: "unwahrscheinlich" },
      { name: "Dankbarkeit", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-1-10",
    situation:
      "Eine Hausärztin erfährt, dass ein langjähriger Patient, den sie gut kannte und mochte, während der Nacht unerwartet zu Hause verstorben ist. Die Familie ruft sie an, um ihr die Nachricht mitzuteilen.",
    emotionen: [
      { name: "Trauer", correct: "wahrscheinlich" },
      { name: "Überraschung", correct: "wahrscheinlich" },
      { name: "Schuld", correct: "wahrscheinlich" },
      { name: "Freude", correct: "unwahrscheinlich" },
      { name: "Neid", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-1-11",
    situation:
      "Ein Pharmaziestudent bemerkt bei einem Praktikum, dass ein erfahrener Apotheker einem Kunden ein falsches Medikament aushändigt. Als er ihn darauf anspricht, wird er schroff abgewiesen.",
    emotionen: [
      { name: "Angst", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Überraschung", correct: "wahrscheinlich" },
      { name: "Bewunderung", correct: "unwahrscheinlich" },
      { name: "Erleichterung", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-1-12",
    situation:
      "Nach einem langen Arbeitstag in der Kinderchirurgie gelingt es einer Ärztin, ein Neugeborenes mit einer seltenen Fehlbildung erfolgreich zu operieren. Die Eltern weinen vor Freude.",
    emotionen: [
      { name: "Stolz", correct: "wahrscheinlich" },
      { name: "Erleichterung", correct: "wahrscheinlich" },
      { name: "Freude", correct: "wahrscheinlich" },
      { name: "Ekel", correct: "unwahrscheinlich" },
      { name: "Scham", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-1-13",
    situation:
      "Ein Pflegehelfer wird von seinem Vorgesetzten vor dem gesamten Team kritisiert, weil er angeblich eine Medikamentendosis falsch dokumentiert hat. Später stellt sich heraus, dass der Fehler beim Vorgesetzten selbst lag.",
    emotionen: [
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Scham", correct: "wahrscheinlich" },
      { name: "Dankbarkeit", correct: "unwahrscheinlich" },
      { name: "Bewunderung", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-1-14",
    situation:
      "Eine Studentin, die eigentlich Zahnmedizin studieren wollte, wird beim MedAT nur für Humanmedizin zugelassen. Ihre Familie feiert das Ergebnis begeistert, aber sie ist unsicher, ob sie den richtigen Weg einschlägt.",
    emotionen: [
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Hoffnung", correct: "wahrscheinlich" },
      { name: "Dankbarkeit", correct: "wahrscheinlich" },
      { name: "Ekel", correct: "unwahrscheinlich" },
      { name: "Verachtung", correct: "unwahrscheinlich" },
    ],
  },
];

// ============================================================
// EMOTIONEN ERKENNEN — Set 2 (14 Aufgaben)
// ============================================================

const emotionenErkennenSet2: EmotionenErkennenTask[] = [
  {
    id: "ee-2-01",
    situation:
      "Ein Rettungssanitäter wird zu einem schweren Verkehrsunfall gerufen. Am Unfallort erkennt er, dass eines der Opfer ein enger Freund aus seiner Schulzeit ist.",
    emotionen: [
      { name: "Angst", correct: "wahrscheinlich" },
      { name: "Überraschung", correct: "wahrscheinlich" },
      { name: "Trauer", correct: "wahrscheinlich" },
      { name: "Langeweile", correct: "unwahrscheinlich" },
      { name: "Neid", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-2-02",
    situation:
      "Eine Hebamme begleitet eine Erstgebärende durch eine lange und schwierige Geburt. Nach 18 Stunden kommt das Kind gesund zur Welt, und die Mutter hält ihr Baby zum ersten Mal im Arm.",
    emotionen: [
      { name: "Freude", correct: "wahrscheinlich" },
      { name: "Erleichterung", correct: "wahrscheinlich" },
      { name: "Mitgefühl", correct: "wahrscheinlich" },
      { name: "Verachtung", correct: "unwahrscheinlich" },
      { name: "Ärger", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-2-03",
    situation:
      "Ein Oberarzt stellt fest, dass ein Kollege regelmäßig während der Nachtdienste Alkohol trinkt. Die Krankenhausleitung wurde bereits informiert, hat aber bisher nichts unternommen.",
    emotionen: [
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Ekel", correct: "wahrscheinlich" },
      { name: "Angst", correct: "wahrscheinlich" },
      { name: "Stolz", correct: "unwahrscheinlich" },
      { name: "Dankbarkeit", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-2-04",
    situation:
      "Eine alleinerziehende Mutter erfährt in der Onkologie, dass ihre Chemotherapie angeschlagen hat und der Tumor sich deutlich verkleinert hat. Ihre Kinder warten im Wartezimmer auf sie.",
    emotionen: [
      { name: "Erleichterung", correct: "wahrscheinlich" },
      { name: "Hoffnung", correct: "wahrscheinlich" },
      { name: "Freude", correct: "wahrscheinlich" },
      { name: "Dankbarkeit", correct: "wahrscheinlich" },
      { name: "Verachtung", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-2-05",
    situation:
      "Ein Medizinstudent im Praktischen Jahr wird von einer erfahrenen Oberärztin vor dem gesamten OP-Team gelobt: 'So eine saubere Naht habe ich von einem PJler noch nie gesehen.'",
    emotionen: [
      { name: "Stolz", correct: "wahrscheinlich" },
      { name: "Freude", correct: "wahrscheinlich" },
      { name: "Überraschung", correct: "wahrscheinlich" },
      { name: "Scham", correct: "unwahrscheinlich" },
      { name: "Ekel", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-2-06",
    situation:
      "Eine junge Frau wird von ihrer Gynäkologin über eine ungewollte Schwangerschaft informiert. Sie befindet sich gerade mitten im Studium und hat keinen festen Partner.",
    emotionen: [
      { name: "Angst", correct: "wahrscheinlich" },
      { name: "Überraschung", correct: "wahrscheinlich" },
      { name: "Trauer", correct: "wahrscheinlich" },
      { name: "Bewunderung", correct: "unwahrscheinlich" },
      { name: "Stolz", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-2-07",
    situation:
      "Ein Physiotherapeut arbeitet seit Monaten mit einem querschnittsgelähmten Patienten. Eines Tages spürt der Patient zum ersten Mal ein Kribbeln in seinen Zehen.",
    emotionen: [
      { name: "Hoffnung", correct: "wahrscheinlich" },
      { name: "Freude", correct: "wahrscheinlich" },
      { name: "Überraschung", correct: "wahrscheinlich" },
      { name: "Ekel", correct: "unwahrscheinlich" },
      { name: "Ärger", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-2-08",
    situation:
      "Ein Pfleger entdeckt, dass ein demenzkranker Patient die ganze Nacht allein und verängstigt im dunklen Zimmer lag, weil die Nachtschwester vergessen hatte, das Nachtlicht einzuschalten.",
    emotionen: [
      { name: "Mitgefühl", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Schuld", correct: "wahrscheinlich" },
      { name: "Freude", correct: "unwahrscheinlich" },
      { name: "Bewunderung", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-2-09",
    situation:
      "Ein Hausarzt wird von einem Patienten, den er 15 Jahre lang betreut hat, darüber informiert, dass dieser zu einem anderen Arzt wechseln möchte, weil ihm die Wartezeiten zu lang seien.",
    emotionen: [
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Trauer", correct: "wahrscheinlich" },
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Freude", correct: "unwahrscheinlich" },
      { name: "Stolz", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-2-10",
    situation:
      "Eine Studentin sitzt in einer Vorlesung über Pathologie. Der Dozent zeigt detaillierte Bilder von schweren Verbrennungen und erklärt den Fall dabei sachlich und routiniert.",
    emotionen: [
      { name: "Ekel", correct: "wahrscheinlich" },
      { name: "Angst", correct: "wahrscheinlich" },
      { name: "Überraschung", correct: "wahrscheinlich" },
      { name: "Stolz", correct: "unwahrscheinlich" },
      { name: "Eifersucht", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-2-11",
    situation:
      "Ein Arzt im Bereitschaftsdienst erhält um 3 Uhr nachts den fünften Anruf wegen Beschwerden, die eindeutig kein Notfall sind. Der Anrufer besteht trotzdem auf einem Hausbesuch.",
    emotionen: [
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Langeweile", correct: "unwahrscheinlich" },
      { name: "Bewunderung", correct: "unwahrscheinlich" },
      { name: "Neid", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-2-12",
    situation:
      "Eine Medizinstudentin, die ihr Famulatur in einer Palliativstation absolviert, begleitet zum ersten Mal einen Patienten in seinen letzten Stunden. Die Familie des Patienten bittet sie, zu bleiben.",
    emotionen: [
      { name: "Trauer", correct: "wahrscheinlich" },
      { name: "Mitgefühl", correct: "wahrscheinlich" },
      { name: "Angst", correct: "wahrscheinlich" },
      { name: "Neid", correct: "unwahrscheinlich" },
      { name: "Langeweile", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-2-13",
    situation:
      "Ein Patient mit chronischen Rückenschmerzen wird nach jahrelanger Odyssee durch verschiedene Arztpraxen endlich von einem Spezialisten ernst genommen, der eine seltene Ursache für seine Beschwerden findet.",
    emotionen: [
      { name: "Erleichterung", correct: "wahrscheinlich" },
      { name: "Dankbarkeit", correct: "wahrscheinlich" },
      { name: "Hoffnung", correct: "wahrscheinlich" },
      { name: "Verachtung", correct: "unwahrscheinlich" },
      { name: "Scham", correct: "unwahrscheinlich" },
    ],
  },
  {
    id: "ee-2-14",
    situation:
      "Eine Laborantin wird bei der Beförderung übergangen, obwohl sie die längste Betriebszugehörigkeit und die beste Qualifikation hat. Die Stelle bekommt ein jüngerer Kollege, der mit dem Chef privat befreundet ist.",
    emotionen: [
      { name: "Ärger", correct: "wahrscheinlich" },
      { name: "Enttäuschung", correct: "wahrscheinlich" },
      { name: "Neid", correct: "wahrscheinlich" },
      { name: "Verachtung", correct: "wahrscheinlich" },
      { name: "Freude", correct: "unwahrscheinlich" },
    ],
  },
];

// ============================================================
// EMOTIONEN REGULIEREN — Set 1 (12 Aufgaben)
// ============================================================

const emotionenRegulierenSet1: EmotionenRegulierenTask[] = [
  {
    id: "er-1-01",
    situation:
      "Du bist Medizinstudent und hast gerade erfahren, dass du eine wichtige Biochemie-Prüfung nicht bestanden hast. Es war dein zweiter Antritt.",
    emotion: "Enttäuschung und Angst",
    ziel: "Du möchtest dich beruhigen und einen klaren Plan für den nächsten Antritt entwickeln.",
    strategien: [
      {
        text: "Ich würde sofort aufhören zu lernen und mich tagelang zurückziehen, weil es offensichtlich keinen Sinn hat.",
        score: 0,
      },
      {
        text: "Ich würde mich bei Freunden abreagieren und mich ausführlich über die unfaire Prüfung beschweren.",
        score: 1,
      },
      {
        text: "Ich würde mir einen Tag Pause gönnen und dann systematisch analysieren, welche Themen ich nicht gut genug beherrscht habe.",
        score: 3,
      },
      {
        text: "Ich würde versuchen, sofort wieder zu lernen, um keine Zeit zu verlieren.",
        score: 2,
      },
    ],
  },
  {
    id: "er-1-02",
    situation:
      "Du arbeitest als Krankenpflegerin und ein Patient hat dich söben grundlos angeschrien und beleidigt. Deine Kolleginnen haben alles mitbekommen.",
    emotion: "Ärger und Scham",
    ziel: "Du möchtest professionell bleiben und die Situation nicht eskalieren lassen.",
    strategien: [
      {
        text: "Ich würde den Patienten ebenfalls laut zurechtweisen, damit er weiß, dass so ein Verhalten nicht akzeptabel ist.",
        score: 0,
      },
      {
        text: "Ich würde mich wortlos umdrehen und den Raum verlassen, ohne etwas zu sagen.",
        score: 1,
      },
      {
        text: "Ich würde ruhig sagen: 'Ich verstehe, dass Sie frustriert sind, aber ich bitte Sie, respektvoll mit mir zu sprechen', und kurz den Raum verlassen, um durchzuatmen.",
        score: 3,
      },
      {
        text: "Ich würde einfach so tun, als hätte ich nichts gehört, und normal weiterarbeiten.",
        score: 2,
      },
    ],
  },
  {
    id: "er-1-03",
    situation:
      "Du bist in deinem ersten Praktikum auf der Chirurgie und hast bei einer Blutabnahme die Vene nicht getroffen. Der Oberarzt verdreht vor allen die Augen und übernimmt selbst.",
    emotion: "Scham und Unsicherheit",
    ziel: "Du möchtest dein Selbstvertrauen wiederherstellen und aus der Situation lernen.",
    strategien: [
      {
        text: "Ich würde mir vornehmen, nie wieder eine Blutabnahme zu machen, um solche Situationen zu vermeiden.",
        score: 0,
      },
      {
        text: "Ich würde mir einreden, dass der Oberarzt einfach ein schlechter Lehrer ist und es nicht an mir lag.",
        score: 1,
      },
      {
        text: "Ich würde den Oberarzt später unter vier Augen bitten, mir Tipps zu geben, und am Phantom zusätzlich üben.",
        score: 3,
      },
      {
        text: "Ich würde mir fest vornehmen, beim nächsten Mal besser zu sein, und versuchen, nicht mehr daran zu denken.",
        score: 2,
      },
    ],
  },
  {
    id: "er-1-04",
    situation:
      "Du hast gerade erfahren, dass dein bester Freund aus dem Studium den heiß begehrten Erasmus-Platz in Stockholm bekommen hat — du selbst wurdest abgelehnt.",
    emotion: "Neid und Enttäuschung",
    ziel: "Du möchtest dich ehrlich für deinen Freund freuen und gleichzeitig mit deiner eigenen Enttäuschung umgehen.",
    strategien: [
      {
        text: "Ich würde den Kontakt zu meinem Freund einschränken, weil es zu schmerzhaft ist, seine Begeisterung zu hören.",
        score: 0,
      },
      {
        text: "Ich würde meinem Freund gratulieren, aber innerlich versuchen, die Enttäuschung einfach zu verdrängen.",
        score: 1,
      },
      {
        text: "Ich würde meinem Freund ehrlich gratulieren und dann offen mit einer Vertrauensperson über meine Enttäuschung sprechen, während ich alternative Möglichkeiten recherchiere.",
        score: 3,
      },
      {
        text: "Ich würde mich auf andere Bewerbungen konzentrieren, ohne mit jemandem über meine Gefühle zu sprechen.",
        score: 2,
      },
    ],
  },
  {
    id: "er-1-05",
    situation:
      "Du bist Turnusarzt in einer Kinderstation. Ein 5-jähriges Kind mit Leukämie weint bitter, weil es nicht nach Hause darf. Du spürst, dass dich die Situation emotional stark mitnimmt.",
    emotion: "Trauer und Hilflosigkeit",
    ziel: "Du möchtest empathisch auf das Kind eingehen, ohne dich selbst emotional zu überfordern.",
    strategien: [
      {
        text: "Ich würde versuchen, emotional komplett abzuschalten und das Kind möglichst schnell an die Pflege übergeben.",
        score: 0,
      },
      {
        text: "Ich würde mit dem Kind mitweinen, um zu zeigen, dass mir sein Schicksal nicht egal ist.",
        score: 1,
      },
      {
        text: "Ich würde das Kind trösten, ihm kindgerecht erklären, warum es noch bleiben muss, und mir danach bewusst eine kurze Pause nehmen, um die eigenen Gefühle zu verarbeiten.",
        score: 3,
      },
      {
        text: "Ich würde das Kind ablenken, indem ich ihm ein Spiel anbiete, und das Thema nach Hause nicht mehr ansprechen.",
        score: 2,
      },
    ],
  },
  {
    id: "er-1-06",
    situation:
      "Dein Mitbewohner hat sich dein teures Stethoskop ohne zu fragen ausgeliehen und es beschädigt zurückgebracht. Er entschuldigt sich beiläufig.",
    emotion: "Ärger",
    ziel: "Du möchtest die Situation klären, ohne die WG-Atmosphäre dauerhaft zu belasten.",
    strategien: [
      {
        text: "Ich würde ihn sofort lautstark zur Rede stellen und einen Ersatz fordern.",
        score: 1,
      },
      {
        text: "Ich würde nichts sagen und meinen Ärger herunterschlucken, um Streit zu vermeiden.",
        score: 0,
      },
      {
        text: "Ich würde warten, bis ich mich beruhigt habe, und dann in einem ruhigen Gespräch erklären, dass mich das gestört hat und er bitte vorher fragen soll. Ich würde ihn bitten, die Reparatur zu übernehmen.",
        score: 3,
      },
      {
        text: "Ich würde ihm eine Nachricht schreiben, dass er bitte meine Sachen nicht mehr anrühren soll.",
        score: 2,
      },
    ],
  },
  {
    id: "er-1-07",
    situation:
      "Du bist als Assistenzarzt bei einer Teambesprechung und eine ältere Kollegin weist deinen Verbesserungsvorschlag vor allen anderen als 'naiv und realitätsfern' zurück.",
    emotion: "Ärger und Scham",
    ziel: "Du möchtest deinen fachlichen Standpunkt wahren, ohne die Beziehung zur Kollegin nachhaltig zu beschädigen.",
    strategien: [
      {
        text: "Ich würde sofort scharf kontern und auf meine wissenschaftlichen Quellen verweisen.",
        score: 1,
      },
      {
        text: "Ich würde mich zurücknehmen und nie wieder einen Vorschlag in einer Besprechung machen.",
        score: 0,
      },
      {
        text: "Ich würde ruhig bleiben, sachlich nachfragen, welche konkreten Einwände sie hat, und anbieten, die Idee nach der Besprechung mit Daten zu untermauern.",
        score: 3,
      },
      {
        text: "Ich würde das Thema fallen lassen und nach der Besprechung den Chefarzt privat um seine Meinung bitten.",
        score: 2,
      },
    ],
  },
  {
    id: "er-1-08",
    situation:
      "Du hast versehentlich eine vertrauliche Patientenakte auf dem Drucker im allgemein zugänglichen Bereich liegen lassen. Eine Kollegin hat sie gefunden und dich darauf angesprochen.",
    emotion: "Schuld und Angst",
    ziel: "Du möchtest die Situation korrigieren und sicherstellen, dass so etwas nicht wieder passiert.",
    strategien: [
      {
        text: "Ich würde behaupten, dass ich die Akte nicht ausgedruckt habe, um Konsequenzen zu vermeiden.",
        score: 0,
      },
      {
        text: "Ich würde mich bei der Kollegin bedanken, die Akte sichern und versuchen, es einfach zu vergessen.",
        score: 1,
      },
      {
        text: "Ich würde mich bei der Kollegin bedanken, den Vorfall meinem Vorgesetzten melden und mir eine Routine erarbeiten, um solche Fehler zukünftig zu vermeiden.",
        score: 3,
      },
      {
        text: "Ich würde mich bei der Kollegin bedanken und mir vornehmen, in Zukunft besser aufzupassen.",
        score: 2,
      },
    ],
  },
  {
    id: "er-1-09",
    situation:
      "Du bist Medizinstudentin und deine Lerngruppe hat sich ohne dich zu einem intensiven Lernwochenende verabredet. Du erfährst erst davon, als alle schon dort sind.",
    emotion: "Trauer und Eifersucht",
    ziel: "Du möchtest das Gefühl der Ausgrenzung verarbeiten und die Situation klären.",
    strategien: [
      {
        text: "Ich würde die Lerngruppe sofort verlassen und mir eine neue suchen.",
        score: 0,
      },
      {
        text: "Ich würde so tun, als wüsste ich nichts davon, und abwarten, ob sich etwas ändert.",
        score: 1,
      },
      {
        text: "Ich würde eine Person aus der Gruppe, zu der ich den besten Draht habe, direkt und offen ansprechen und fragen, ob es ein Missverständnis war oder ob es einen Grund gab.",
        score: 3,
      },
      {
        text: "Ich würde in die Gruppe schreiben, dass ich enttäuscht bin, nicht eingeladen worden zu sein.",
        score: 2,
      },
    ],
  },
  {
    id: "er-1-10",
    situation:
      "Du bist Assistenzarzt und musst am Wochenende einen Nachtdienst übernehmen, obwohl du eigentlich zur Hochzeit deines besten Freundes eingeladen bist. Der Dienstplan ist nicht mehr änderbar.",
    emotion: "Enttäuschung und Ärger",
    ziel: "Du möchtest deine Enttäuschung verarbeiten und sowohl den Dienst professionell leisten als auch deine Freundschaft pflegen.",
    strategien: [
      {
        text: "Ich würde mich krankmelden, um doch zur Hochzeit gehen zu können.",
        score: 0,
      },
      {
        text: "Ich würde zum Dienst gehen, aber den ganzen Abend frustriert und unkonzentriert sein.",
        score: 1,
      },
      {
        text: "Ich würde meinem Freund persönlich erklären, warum ich nicht kommen kann, ihm ein besonderes Geschenk schicken und vorschlagen, die Feier bei einem gemeinsamen Abendessen nachzuholen.",
        score: 3,
      },
      {
        text: "Ich würde meinem Freund absagen und versuchen, es professionell zu sehen — so ist das Arztleben eben.",
        score: 2,
      },
    ],
  },
  {
    id: "er-1-11",
    situation:
      "Du bist in einer mündlichen Prüfung und der Prüfer stellt dir eine Frage zu einem Thema, das laut Fragenkatalog gar nicht prüfungsrelevant sein sollte. Du weißt die Antwort nicht.",
    emotion: "Angst und Ärger",
    ziel: "Du möchtest die Prüfungssituation bestmöglich meistern, ohne die Fassung zu verlieren.",
    strategien: [
      {
        text: "Ich würde den Prüfer darauf hinweisen, dass die Frage nicht prüfungsrelevant ist, und mich weigern zu antworten.",
        score: 0,
      },
      {
        text: "Ich würde in Panik geraten und einfach irgendetwas antworten, damit die Stille aufhört.",
        score: 1,
      },
      {
        text: "Ich würde ehrlich sagen, dass ich das Thema nicht im Detail vorbereitet habe, aber versuchen, mit meinem vorhandenen Wissen eine logische Herleitung zu geben.",
        score: 3,
      },
      {
        text: "Ich würde ruhig sagen, dass ich die Antwort leider nicht weiß, und auf die nächste Frage warten.",
        score: 2,
      },
    ],
  },
  {
    id: "er-1-12",
    situation:
      "Du bist Ärztin und hast einer Patientin versehentlich eine falsche Diagnose mitgeteilt, bevor alle Laborergebnisse vorlagen. Die Patientin hat sich große Sorgen gemacht.",
    emotion: "Schuld und Scham",
    ziel: "Du möchtest die Situation für die Patientin korrigieren und dein professionelles Verhalten reflektieren.",
    strategien: [
      {
        text: "Ich würde hoffen, dass die Patientin die Ergebnisse vergisst, und ihr nur die korrekten Ergebnisse mitteilen, ohne den Fehler anzusprechen.",
        score: 0,
      },
      {
        text: "Ich würde die Patientin anrufen, die korrekten Ergebnisse mitteilen und mich beiläufig für die 'Verwirrung' entschuldigen.",
        score: 1,
      },
      {
        text: "Ich würde die Patientin zeitnah kontaktieren, den Fehler ehrlich einräumen, mich aufrichtig entschuldigen und ihr die korrekten Ergebnisse ausführlich erklären. Danach würde ich mein Vorgehen reflektieren.",
        score: 3,
      },
      {
        text: "Ich würde die korrekten Ergebnisse per Brief schicken und eine Entschuldigung beilegen.",
        score: 2,
      },
    ],
  },
];

// ============================================================
// EMOTIONEN REGULIEREN — Set 2 (12 Aufgaben)
// ============================================================

const emotionenRegulierenSet2: EmotionenRegulierenTask[] = [
  {
    id: "er-2-01",
    situation:
      "Du bist Pflegekraft und ein Angehöriger eines verstorbenen Patienten gibt dir die Schuld am Tod seines Vaters, obwohl du alles korrekt gemacht hast.",
    emotion: "Ärger und Trauer",
    ziel: "Du möchtest die Situation deeskalieren und gleichzeitig deine eigene emotionale Belastung verarbeiten.",
    strategien: [
      {
        text: "Ich würde den Angehörigen verteidigen und ihm detailliert erklären, warum ich keine Schuld trage.",
        score: 1,
      },
      {
        text: "Ich würde nichts sagen und mir die Vorwürfe schweigend anhören.",
        score: 0,
      },
      {
        text: "Ich würde dem Angehörigen mein Beileid aussprechen, seine Trauer anerkennen und ihm anbieten, ein Gespräch mit dem zuständigen Arzt zu vermitteln. Danach würde ich mir Unterstützung bei einer Vertrauensperson suchen.",
        score: 3,
      },
      {
        text: "Ich würde dem Angehörigen ruhig sagen, dass ich verstehe, dass er trauert, und den Raum verlassen.",
        score: 2,
      },
    ],
  },
  {
    id: "er-2-02",
    situation:
      "Du lernst seit Wochen intensiv für den MedAT und hast das Gefühl, dass du trotzdem nicht genug weißt. Die Prüfung ist in drei Tagen.",
    emotion: "Angst und Überforderung",
    ziel: "Du möchtest deine Prüfungsangst in den Griff bekommen und die verbleibende Zeit sinnvoll nutzen.",
    strategien: [
      {
        text: "Ich würde durchlernen, Tag und Nacht, um möglichst viel Stoff noch zu wiederholen.",
        score: 0,
      },
      {
        text: "Ich würde aufhören zu lernen, weil es ohnehin keinen Sinn mehr hat.",
        score: 0,
      },
      {
        text: "Ich würde mir einen realistischen Plan für die letzten Tage machen, mich auf meine schwächsten Themen konzentrieren und bewusst Pausen mit Sport oder Entspannung einplanen.",
        score: 3,
      },
      {
        text: "Ich würde versuchen, mich abzulenken und nicht mehr an die Prüfung zu denken.",
        score: 1,
      },
    ],
  },
  {
    id: "er-2-03",
    situation:
      "Du bist Assistenzarzt und wirst zum zweiten Mal in Folge für die unbeliebte Weihnachtsschicht eingeteilt, obwohl andere Kolleg:innen noch nie an Feiertagen arbeiten mussten.",
    emotion: "Ärger und Frustration",
    ziel: "Du möchtest für eine gerechte Einteilung eintreten, ohne als schwierig zu gelten.",
    strategien: [
      {
        text: "Ich würde mich lautstark vor dem Team beschweren und die anderen Kolleg:innen öffentlich kritisieren.",
        score: 0,
      },
      {
        text: "Ich würde die Schicht ohne Kommentar übernehmen und meinen Frust runterschlucken.",
        score: 1,
      },
      {
        text: "Ich würde ein sachliches Gespräch mit der Dienstplanverantwortlichen suchen, die Situation dokumentiert darlegen und einen fairen Rotationsvorschlag einbringen.",
        score: 3,
      },
      {
        text: "Ich würde per E-Mail an alle darauf hinweisen, dass die Einteilung ungerecht ist.",
        score: 2,
      },
    ],
  },
  {
    id: "er-2-04",
    situation:
      "Du bist Studentin und hast gerade eine Nachricht erhalten, dass dein Vater ins Krankenhaus eingeliefert wurde. Du sitzt aber gerade in einer wichtigen Prüfung.",
    emotion: "Angst und Hilflosigkeit",
    ziel: "Du möchtest so schnell wie möglich zu deinem Vater, aber auch die Prüfung nicht unnötig verlieren.",
    strategien: [
      {
        text: "Ich würde einfach aufstehen und gehen, ohne jemandem Bescheid zu sagen.",
        score: 1,
      },
      {
        text: "Ich würde versuchen, die Prüfung zu Ende zu schreiben und danach ins Krankenhaus fahren.",
        score: 1,
      },
      {
        text: "Ich würde mich kurz an die Prüfungsaufsicht wenden, die Situation erklären und fragen, ob ich die Prüfung abbrechen und einen Nachtermin bekommen kann, um dann sofort ins Krankenhaus zu fahren.",
        score: 3,
      },
      {
        text: "Ich würde zunächst kurz meine Mutter anrufen, um herauszufinden, wie ernst die Situation ist, bevor ich eine Entscheidung treffe.",
        score: 2,
      },
    ],
  },
  {
    id: "er-2-05",
    situation:
      "Du bist Krankenpfleger und musst einen aggressiven Patienten mit psychiatrischer Vorgeschichte fixieren. Der Patient weint und fleht dich an, es nicht zu tun.",
    emotion: "Mitgefühl und innerer Konflikt",
    ziel: "Du möchtest professionell handeln und gleichzeitig die Würde des Patienten so weit wie möglich wahren.",
    strategien: [
      {
        text: "Ich würde die Fixierung verweigern, weil der Patient offensichtlich leidet.",
        score: 0,
      },
      {
        text: "Ich würde die Fixierung schnell und ohne Kommentar durchführen, um es hinter mich zu bringen.",
        score: 1,
      },
      {
        text: "Ich würde dem Patienten ruhig erklären, warum die Maßnahme notwendig ist, ihm versichern, dass ich für ihn da bin, und die Fixierung so schonend wie möglich durchführen. Danach würde ich im Team darüber sprechen.",
        score: 3,
      },
      {
        text: "Ich würde den Arzt bitten, die Fixierung nochmal zu überdenken, und sie dann nach dessen Bestätigung durchführen.",
        score: 2,
      },
    ],
  },
  {
    id: "er-2-06",
    situation:
      "Du bist Ärztin und eine Patientin, die du lange betreut hast, bricht die Chemotherapie ab, weil sie sich auf eine Alternativbehandlung mit Heilsteinen verlassen möchte.",
    emotion: "Frustration und Sorge",
    ziel: "Du möchtest die Patientin nicht verlieren und ihr die Konsequenzen aufzeigen, ohne sie zu bevormunden.",
    strategien: [
      {
        text: "Ich würde die Patientin auslachen und ihr sagen, dass Heilsteine Unsinn sind.",
        score: 0,
      },
      {
        text: "Ich würde akzeptieren, dass es ihre Entscheidung ist, und sie ohne weiteren Kommentar gehen lassen.",
        score: 1,
      },
      {
        text: "Ich würde ihre Entscheidung respektieren, aber in einem ruhigen Gespräch sachlich die medizinischen Fakten darlegen, ihr anbieten, jederzeit wiederzukommen, und dies dokumentieren.",
        score: 3,
      },
      {
        text: "Ich würde versuchen, ihr Angst zu machen, indem ich die schlimmstmöglichen Konsequenzen betone.",
        score: 0,
      },
    ],
  },
  {
    id: "er-2-07",
    situation:
      "Du hast als Medizinstudent in einem Referat einen schwerwiegenden fachlichen Fehler gemacht. Ein Kommilitone korrigiert dich vor der ganzen Gruppe auf eine herablassende Art.",
    emotion: "Scham und Ärger",
    ziel: "Du möchtest die Situation souverän meistern und gleichzeitig den fachlichen Fehler richtigstellen.",
    strategien: [
      {
        text: "Ich würde den Kommilitonen sofort verbal angreifen und seine eigenen fachlichen Fehler aufzählen.",
        score: 0,
      },
      {
        text: "Ich würde den Fehler sofort zugeben und mich überschwänglich entschuldigen.",
        score: 1,
      },
      {
        text: "Ich würde ruhig sagen: 'Danke für die Korrektur, da hatte ich tatsächlich einen Fehler. Allerdings wäre ein sachlicher Ton hilfreicher.' Dann würde ich den korrekten Sachverhalt zusammenfassen.",
        score: 3,
      },
      {
        text: "Ich würde den Fehler eingestehen und das Thema schnell wechseln.",
        score: 2,
      },
    ],
  },
  {
    id: "er-2-08",
    situation:
      "Du bist Hausärztin und ein Patient kommt zum wiederholten Mal, ohne die besprochenen Lebensstiländerungen umgesetzt zu haben. Sein Blutdruck ist weiterhin gefährlich hoch.",
    emotion: "Frustration und Sorge",
    ziel: "Du möchtest den Patienten motivieren, ohne ihn zu verurteilen oder unter Druck zu setzen.",
    strategien: [
      {
        text: "Ich würde dem Patienten deutlich sagen, dass ich nichts für ihn tun kann, wenn er sich nicht an meine Empfehlungen hält.",
        score: 1,
      },
      {
        text: "Ich würde einfach die Medikamente erhöhen und das Thema Lebensstil nicht mehr ansprechen.",
        score: 0,
      },
      {
        text: "Ich würde das Gespräch mit offenen Fragen beginnen, um Barrieren zu verstehen, gemeinsam ein realistisches Kleinziel formulieren und ihm meine Unterstützung zusichern.",
        score: 3,
      },
      {
        text: "Ich würde ihm die gesundheitlichen Risiken nochmal ausführlich erklären und hoffen, dass es diesmal wirkt.",
        score: 2,
      },
    ],
  },
  {
    id: "er-2-09",
    situation:
      "Du bist Medizinstudentin und deine Mutter ruft dich jeden Abend an, um sich über dein Studium zu erkundigen. Du fühlst dich kontrolliert und unter Druck gesetzt.",
    emotion: "Ärger und Schuldgefühle",
    ziel: "Du möchtest gesunde Grenzen setzen, ohne die Beziehung zu deiner Mutter zu belasten.",
    strategien: [
      {
        text: "Ich würde ihre Anrufe einfach ignorieren und nicht mehr abheben.",
        score: 0,
      },
      {
        text: "Ich würde jeden Abend brav abheben und meine Genervtheit unterdrücken.",
        score: 1,
      },
      {
        text: "Ich würde ein offenes Gespräch mit meiner Mutter führen, ihr erklären, dass mich die täglichen Anrufe stressen, und vorschlagen, dass wir stattdessen zwei feste Termine pro Woche vereinbaren.",
        score: 3,
      },
      {
        text: "Ich würde sie bitten, mir statt anzurufen einfach eine Nachricht zu schreiben.",
        score: 2,
      },
    ],
  },
  {
    id: "er-2-10",
    situation:
      "Du bist Pfleger und sollst eine Patientin waschen, die sich vehement weigert und dabei weint. Sie hat einen kulturellen Hintergrund, in dem es ihr unangemessen erscheint, von einem männlichen Pfleger gewaschen zu werden.",
    emotion: "Unsicherheit und Mitgefühl",
    ziel: "Du möchtest die Patientin respektvoll behandeln und gleichzeitig sicherstellen, dass sie die nötige Pflege erhält.",
    strategien: [
      {
        text: "Ich würde die Wäsche einfach durchführen, weil es medizinisch notwendig ist.",
        score: 0,
      },
      {
        text: "Ich würde die Wäsche auslassen, um die Patientin nicht weiter zu belasten.",
        score: 1,
      },
      {
        text: "Ich würde der Patientin erklären, dass ich ihr Unbehagen verstehe, und sofort versuchen, eine weibliche Kollegin zu organisieren. Falls das nicht möglich ist, würde ich gemeinsam mit der Patientin nach einem Kompromiss suchen.",
        score: 3,
      },
      {
        text: "Ich würde die Stationsleitung informieren und warten, bis eine Lösung gefunden wird.",
        score: 2,
      },
    ],
  },
  {
    id: "er-2-11",
    situation:
      "Du bist Assistenzärztin und hast nach 24 Stunden Dienst einen schwerwiegenden Dokumentationsfehler gemacht, weil du erschöpft warst. Dein Oberarzt hat dich darauf angesprochen.",
    emotion: "Schuld und Erschöpfung",
    ziel: "Du möchtest den Fehler korrigieren und auch das systemische Problem der langen Dienste ansprechen.",
    strategien: [
      {
        text: "Ich würde die Schuld auf die langen Dienstzeiten schieben und sagen, dass das Krankenhaus dafür verantwortlich ist.",
        score: 1,
      },
      {
        text: "Ich würde den Fehler zugeben und mich selbst fertigmachen, weil ich als Ärztin keine Fehler machen sollte.",
        score: 0,
      },
      {
        text: "Ich würde den Fehler sofort korrigieren, mich beim Oberarzt entschuldigen und dann sachlich ansprechen, dass die langen Dienstzeiten ein Sicherheitsrisiko darstellen, und vorschlagen, das Thema im nächsten Teammeeting zu besprechen.",
        score: 3,
      },
      {
        text: "Ich würde den Fehler korrigieren, mich entschuldigen und versuchen, in Zukunft trotz Müdigkeit konzentrierter zu arbeiten.",
        score: 2,
      },
    ],
  },
  {
    id: "er-2-12",
    situation:
      "Du bist ein erfahrener Pfleger und ein neuer, junger Arzt gibt dir eine Anweisung, die du für fachlich falsch hältst. Sie betrifft die Medikamentendosis eines Patienten.",
    emotion: "Ärger und Besorgnis",
    ziel: "Du möchtest die Patientensicherheit gewährleisten und gleichzeitig respektvoll mit der Hierarchie umgehen.",
    strategien: [
      {
        text: "Ich würde die Anweisung kommentarlos ausführen, weil der Arzt die Verantwortung trägt.",
        score: 0,
      },
      {
        text: "Ich würde die Anweisung verweigern und dem Arzt sagen, dass ich das nicht mache.",
        score: 1,
      },
      {
        text: "Ich würde den Arzt sachlich und respektvoll auf meine Bedenken ansprechen, die relevante Fachinformation zeigen und bei Uneinigkeit gemeinsam einen erfahreneren Kollegen hinzuziehen.",
        score: 3,
      },
      {
        text: "Ich würde die Anweisung ausführen, aber parallel den Oberarzt informieren.",
        score: 2,
      },
    ],
  },
];

// ============================================================
// SOZIALES ENTSCHEIDEN — Set 1 (14 Aufgaben)
// ============================================================

const sozialesEntscheidenSet1: SozialesEntscheidenTask[] = [
  {
    id: "se-1-01",
    dilemma:
      "Ein Arzt behandelt in einer überfüllten Notaufnahme gleichzeitig mehrere Patienten. Ein älterer Mann mit Brustschmerzen wartet seit einer Stunde, als ein prominenter Politiker mit leichten Schürfwunden gebracht wird. Der Klinikdirektor ruft an und bittet, den Politiker bevorzugt zu behandeln.",
    aussagen: [
      {
        text: "Jeder Patient hat unabhängig von seinem gesellschaftlichen Status das gleiche Recht auf medizinische Versorgung.",
        idealRank: 1,
      },
      {
        text: "Die medizinische Dringlichkeit muss das einzige Kriterium für die Behandlungsreihenfolge sein.",
        idealRank: 2,
      },
      {
        text: "Der Arzt sollte das Wohl des Krankenhauses berücksichtigen, da eine gute Beziehung zur Politik wichtig ist.",
        idealRank: 4,
      },
      {
        text: "Der Arzt sollte die Anweisung seines Vorgesetzten befolgen, da Hierarchien im Krankenhaus wichtig sind.",
        idealRank: 5,
      },
      {
        text: "Der Arzt könnte einen Kompromiss suchen und den Politiker schnell versorgen, wenn es die Wartezeit des anderen Patienten nicht wesentlich verlängert.",
        idealRank: 3,
      },
    ],
  },
  {
    id: "se-1-02",
    dilemma:
      "Eine Ärztin stellt fest, dass ein 16-jähriger Patient regelmäßig Cannabis konsumiert. Der Patient bittet sie eindringlich, seinen Eltern nichts davon zu sagen. Er versichert, den Konsum reduzieren zu wollen.",
    aussagen: [
      {
        text: "Das Recht des Patienten auf Vertraulichkeit und Selbstbestimmung sollte gewahrt werden, auch bei Minderjährigen.",
        idealRank: 2,
      },
      {
        text: "Die Gesundheit und das Wohlergehen des jungen Patienten haben oberste Priorität.",
        idealRank: 1,
      },
      {
        text: "Eltern haben das Recht, über gesundheitliche Risiken ihres minderjährigen Kindes informiert zu werden.",
        idealRank: 3,
      },
      {
        text: "Die Ärztin muss sich an die gesetzlichen Meldepflichten halten, unabhängig von den Wünschen des Patienten.",
        idealRank: 4,
      },
      {
        text: "Wenn der Patient sein Versprechen bricht, sollte die Ärztin die Eltern trotzdem informieren.",
        idealRank: 5,
      },
    ],
  },
  {
    id: "se-1-03",
    dilemma:
      "In einem kleinen Krankenhaus steht nur eine Beatmungsmaschine zur Verfügung. Zwei Patienten benötigen sie gleichzeitig: eine 80-jährige Frau mit Lungenversagen und ein 35-jähriger Familienvater mit COVID-19-Pneumonie.",
    aussagen: [
      {
        text: "Die Entscheidung muss auf objektiven medizinischen Kriterien wie der Überlebenswahrscheinlichkeit basieren.",
        idealRank: 1,
      },
      {
        text: "Jeder Mensch hat unabhängig vom Alter das gleiche Recht auf lebensrettende Behandlung.",
        idealRank: 2,
      },
      {
        text: "Die gesellschaftliche Rolle des Patienten (z. B. Verantwortung für Kinder) darf bei der Entscheidung eine Rolle spielen.",
        idealRank: 4,
      },
      {
        text: "Es sollte ein standardisiertes, transparentes Verfahren für solche Entscheidungen geben, das vorher festgelegt wurde.",
        idealRank: 3,
      },
      {
        text: "Das Prinzip 'Wer zürst kommt, mahlt zürst' sollte gelten.",
        idealRank: 5,
      },
    ],
  },
  {
    id: "se-1-04",
    dilemma:
      "Ein Kollege auf der Chirurgie riecht regelmäßig nach Alkohol, wirkt aber bei der Arbeit unauffällig. Andere Kolleg:innen scheinen es ebenfalls bemerkt zu haben, sagen aber nichts.",
    aussagen: [
      {
        text: "Die Sicherheit der Patienten hat absolute Priorität und überwiegt jede Kollegialität.",
        idealRank: 1,
      },
      {
        text: "Man sollte den Kollegen zürst vertraulich ansprechen und ihm Hilfe anbieten.",
        idealRank: 2,
      },
      {
        text: "Man sollte die Situation dokumentieren und den Vorgesetzten informieren.",
        idealRank: 3,
      },
      {
        text: "Es ist nicht meine Aufgabe, andere Kollegen zu kontrollieren.",
        idealRank: 5,
      },
      {
        text: "Solange der Kollege unauffällig arbeitet, besteht kein Handlungsbedarf.",
        idealRank: 4,
      },
    ],
  },
  {
    id: "se-1-05",
    dilemma:
      "Eine Patientin mit einer unheilbaren Krankheit im Endstadium bittet ihren Arzt, ihr beim Sterben zu helfen. In Österreich ist aktive Sterbehilfe verboten, seit 2022 gibt es aber die Möglichkeit des assistierten Suizids.",
    aussagen: [
      {
        text: "Das Selbstbestimmungsrecht der Patientin über ihr eigenes Leben ist ein fundamentales Menschenrecht.",
        idealRank: 1,
      },
      {
        text: "Die Linderung von Leid muss ein zentrales ärztliches Anliegen sein.",
        idealRank: 2,
      },
      {
        text: "Der Arzt muss die geltenden gesetzlichen Regelungen kennen und beachten.",
        idealRank: 3,
      },
      {
        text: "Der Arzt sollte alle palliativen Möglichkeiten ausschöpfen, bevor andere Optionen in Betracht gezogen werden.",
        idealRank: 4,
      },
      {
        text: "Die persönliche moralische Überzeugung des Arztes sollte bei der Entscheidung eine wichtige Rolle spielen.",
        idealRank: 5,
      },
    ],
  },
  {
    id: "se-1-06",
    dilemma:
      "Eine Ärztin erfährt bei einem Routinecheck, dass eine Patientin, die als Busfahrerin arbeitet, an unkontrollierten epileptischen Anfällen leidet. Die Patientin weigert sich, ihren Arbeitgeber zu informieren, aus Angst, ihren Job zu verlieren.",
    aussagen: [
      {
        text: "Die Sicherheit der Öffentlichkeit (Fahrgäste und andere Verkehrsteilnehmer) hat Vorrang vor der individüllen Schweigepflicht.",
        idealRank: 1,
      },
      {
        text: "Die Ärztin hat die Pflicht, die Patientin über die Gefahren aufzuklären und auf eine freiwillige Meldung hinzuwirken.",
        idealRank: 2,
      },
      {
        text: "Die ärztliche Schweigepflicht ist ein fundamentales Prinzip der Arzt-Patient-Beziehung und darf nicht leichtfertig gebrochen werden.",
        idealRank: 3,
      },
      {
        text: "Die Patientin hat das Recht, selbst über die Weitergabe ihrer medizinischen Daten zu entscheiden.",
        idealRank: 4,
      },
      {
        text: "Die Ärztin sollte die Patientin dazu bewegen, freiwillig auf das Busfahren zu verzichten, indem sie ihr Angst vor den Konsequenzen macht.",
        idealRank: 5,
      },
    ],
  },
  {
    id: "se-1-07",
    dilemma:
      "Ein Medizinstudent beobachtet, wie ein älterer Arzt bei einer Untersuchung die Grenzen der körperlichen Untersuchung überschreitet und eine Patientin unangemessen berührt. Die Patientin wirkt verstört, sagt aber nichts.",
    aussagen: [
      {
        text: "Die Würde und der Schutz der Patientin haben absolute Priorität.",
        idealRank: 1,
      },
      {
        text: "Übergriffe müssen unabhängig von der hierarchischen Position des Täters gemeldet werden.",
        idealRank: 2,
      },
      {
        text: "Man sollte die Patientin in einem geschützten Rahmen fragen, wie sie die Situation wahrgenommen hat.",
        idealRank: 3,
      },
      {
        text: "Als Student sollte man den Vorfall zürst mit einer Vertrauensperson besprechen, bevor man handelt.",
        idealRank: 4,
      },
      {
        text: "Es könnte sich um ein Missverständnis handeln, und man sollte dem erfahrenen Arzt den Vorteil des Zweifels geben.",
        idealRank: 5,
      },
    ],
  },
  {
    id: "se-1-08",
    dilemma:
      "Ein Pharmaunternehmen bietet einem Arzt eine gesponserte Luxusreise zu einer Konferenz an, wenn er ihr neues Medikament häufiger verschreibt. Das Medikament ist zugelassen, aber nicht besser als bestehende günstigere Alternativen.",
    aussagen: [
      {
        text: "Die Verschreibung von Medikamenten darf ausschließlich auf medizinischer Evidenz basieren.",
        idealRank: 1,
      },
      {
        text: "Korruption im Gesundheitswesen schadet dem Vertrauen der Gesellschaft in die Medizin und muss verhindert werden.",
        idealRank: 2,
      },
      {
        text: "Konferenzbesuche können für die Weiterbildung des Arztes und damit für seine Patienten nützlich sein.",
        idealRank: 4,
      },
      {
        text: "Die finanziellen Ressourcen des Gesundheitssystems müssen verantwortungsvoll eingesetzt werden.",
        idealRank: 3,
      },
      {
        text: "Solange der Patient ein wirksames Medikament bekommt, ist es egal, welches konkrete Präparat verschrieben wird.",
        idealRank: 5,
      },
    ],
  },
  {
    id: "se-1-09",
    dilemma:
      "Ein Ehepaar kommt in die genetische Beratung. Die Frau ist in der 12. Woche schwanger. Ein Gentest zeigt, dass das Kind mit hoher Wahrscheinlichkeit das Down-Syndrom haben wird. Das Paar ist uneinig: Sie will das Kind behalten, er möchte einen Abbruch.",
    aussagen: [
      {
        text: "Das Recht auf Selbstbestimmung der schwangeren Frau über ihren eigenen Körper ist vorrangig.",
        idealRank: 1,
      },
      {
        text: "Die Beratung muss ergebnisoffen und nicht-direktiv sein — beide Partner verdienen Gehör.",
        idealRank: 2,
      },
      {
        text: "Menschen mit Down-Syndrom haben das gleiche Recht auf Leben wie alle anderen.",
        idealRank: 3,
      },
      {
        text: "Die praktischen Konsequenzen für die Familie (Belastung, Ressourcen) sollten ebenfalls berücksichtigt werden.",
        idealRank: 4,
      },
      {
        text: "Die Meinung des Vaters sollte gleichgewichtig in die Entscheidung einfließen.",
        idealRank: 5,
      },
    ],
  },
  {
    id: "se-1-10",
    dilemma:
      "Ein Arzt in einer ländlichen Gegend ist der einzige Mediziner weit und breit. Er möchte in die Stadt ziehen, um bessere Karrieremöglichkeiten wahrzunehmen. Die Gemeinde hat ihn gebeten zu bleiben.",
    aussagen: [
      {
        text: "Jeder Mensch hat das Recht, über seinen eigenen Lebensweg frei zu entscheiden.",
        idealRank: 2,
      },
      {
        text: "Die medizinische Versorgung der Landbevölkerung ist ein gesamtgesellschaftliches Problem, das systemisch gelöst werden muss.",
        idealRank: 1,
      },
      {
        text: "Der Arzt hat eine moralische Verantwortung gegenüber den Menschen, die auf ihn angewiesen sind.",
        idealRank: 3,
      },
      {
        text: "Der Arzt sollte erst gehen, wenn ein Nachfolger gefunden ist.",
        idealRank: 4,
      },
      {
        text: "Die Gemeinde sollte dem Arzt finanzielle Anreize bieten, um ihn zum Bleiben zu bewegen.",
        idealRank: 5,
      },
    ],
  },
  {
    id: "se-1-11",
    dilemma:
      "Eine Krankenschwester erfährt, dass das Krankenhaus, in dem sie arbeitet, aus Kostengründen billigere, aber qualitativ schlechtere Materialien für Operationen bestellt hat. Der Chefarzt hat dies genehmigt.",
    aussagen: [
      {
        text: "Die Sicherheit und das Wohl der Patienten müssen immer über wirtschaftlichen Interessen stehen.",
        idealRank: 1,
      },
      {
        text: "Es gibt eine moralische Pflicht, Missstände im Gesundheitswesen aufzudecken, auch wenn es persönliche Konsequenzen haben kann.",
        idealRank: 2,
      },
      {
        text: "Die Qualitätsstandards müssen den gesetzlichen Mindestanforderungen entsprechen.",
        idealRank: 3,
      },
      {
        text: "Es ist die Aufgabe der Krankenhausleitung, wirtschaftliche Entscheidungen zu treffen.",
        idealRank: 4,
      },
      {
        text: "Die Krankenschwester sollte sich nicht einmischen, da sie dafür nicht zuständig ist.",
        idealRank: 5,
      },
    ],
  },
  {
    id: "se-1-12",
    dilemma:
      "Ein Arzt soll einen Organtransplantationsbericht für einen Patienten schreiben. Er weiß, dass der Patient schwerer Alkoholiker ist und bei der Transplantationskommission keine Chance hätte, wenn dies bekannt wird. Der Patient hat eine Familie mit drei kleinen Kindern.",
    aussagen: [
      {
        text: "Ärztliche Berichte müssen immer wahrheitsgemäß sein — Fälschung schadet dem gesamten Transplantationssystem.",
        idealRank: 1,
      },
      {
        text: "Eine gerechte Verteilung knapper Organe erfordert transparente und ehrliche Verfahren.",
        idealRank: 2,
      },
      {
        text: "Der Arzt sollte dem Patienten helfen, seine Sucht zu behandeln, damit er für eine Transplantation infrage kommt.",
        idealRank: 3,
      },
      {
        text: "Das Mitgefühl mit dem Patienten und seiner Familie ist verständlich, rechtfertigt aber keine Fälschung.",
        idealRank: 4,
      },
      {
        text: "Die Kinder des Patienten sollten nicht dafür bestraft werden, dass ihr Vater krank ist.",
        idealRank: 5,
      },
    ],
  },
  {
    id: "se-1-13",
    dilemma:
      "Während einer Pandemie werden Impfstoffe knapp. Ein Arzt hat die Möglichkeit, seine eigene Familie bevorzugt impfen zu lassen, obwohl sie nicht zur priorisierten Risikogruppe gehört.",
    aussagen: [
      {
        text: "Ein gerechtes Verteilungssystem muss für alle gleichermaßen gelten — Privilegien untergraben das Vertrauen.",
        idealRank: 1,
      },
      {
        text: "Die Priorisierung nach medizinischem Risiko ist das ethisch richtige Vorgehen bei knappen Ressourcen.",
        idealRank: 2,
      },
      {
        text: "Ärzt:innen sollten als Vorbilder vorangehen und sich an die Regeln halten.",
        idealRank: 3,
      },
      {
        text: "Es ist menschlich verständlich, die eigene Familie schützen zu wollen.",
        idealRank: 4,
      },
      {
        text: "Wenn der Arzt infiziert wird, können seine Patienten nicht mehr versorgt werden, daher ist der Schutz seiner Familie indirekt auch wichtig.",
        idealRank: 5,
      },
    ],
  },
  {
    id: "se-1-14",
    dilemma:
      "Eine Ärztin behandelt in ihrer Privatpraxis eine wohlhabende Patientin. Die Patientin möchte ein medizinisch nicht notwendiges Antibiotikum-Rezept für ihre Reise. Sie droht, die Praxis zu wechseln, wenn sie es nicht bekommt.",
    aussagen: [
      {
        text: "Medizinische Entscheidungen dürfen nur auf fachlicher Grundlage getroffen werden, nicht auf wirtschaftlichem Druck.",
        idealRank: 1,
      },
      {
        text: "Der verantwortungsvolle Umgang mit Antibiotika ist eine gesellschaftliche Pflicht im Kampf gegen Resistenzen.",
        idealRank: 2,
      },
      {
        text: "Die Ärztin sollte der Patientin die Risiken einer unnötigen Antibiotikäinnahme erklären.",
        idealRank: 3,
      },
      {
        text: "Patientenwünsche sollten ernst genommen werden, auch wenn sie medizinisch nicht indiziert sind.",
        idealRank: 4,
      },
      {
        text: "Es wäre verständlich, der Patientin das Rezept auszustellen, um sie nicht als Kundin zu verlieren.",
        idealRank: 5,
      },
    ],
  },
];

// ============================================================
// SOZIALES ENTSCHEIDEN — Set 2 (14 Aufgaben)
// ============================================================

const sozialesEntscheidenSet2: SozialesEntscheidenTask[] = [
  {
    id: "se-2-01",
    dilemma:
      "Ein Krankenhaus hat ein begrenztes Budget für neue Geräte. Es kann entweder ein modernes MRT-Gerät kaufen, das vielen Patienten zugutekäme, oder ein spezielles Beatmungsgerät für die Kinderintensivstation, das wenigen, aber schwer kranken Kindern das Leben retten könnte.",
    aussagen: [
      {
        text: "Die Verteilung begrenzter Ressourcen muss transparent und nach nachvollziehbaren ethischen Kriterien erfolgen.",
        idealRank: 1,
      },
      {
        text: "Das Retten von Menschenleben sollte grundsätzlich Vorrang vor diagnostischen Verbesserungen haben.",
        idealRank: 2,
      },
      {
        text: "Der Nutzen für die Gesamtheit der Patienten muss gegen den Nutzen für wenige, besonders Bedürftige abgewogen werden.",
        idealRank: 3,
      },
      {
        text: "Kinder verdienen besonderen Schutz und sollten bevorzugt behandelt werden.",
        idealRank: 4,
      },
      {
        text: "Die Entscheidung sollte die Wirtschaftlichkeit und Auslastung der Geräte berücksichtigen.",
        idealRank: 5,
      },
    ],
  },
  {
    id: "se-2-02",
    dilemma:
      "Ein Arzt hat einen Patienten mit einer seltenen genetischen Krankheit. Ein Pharmaunternehmen bietet ein experimentelles Medikament an, das aber erst in Phase II der klinischen Studien ist. Der Patient hat keine andere Behandlungsmöglichkeit mehr.",
    aussagen: [
      {
        text: "Jeder Mensch hat das Recht auf Zugang zu potenziell lebensrettenden Behandlungen, auch wenn diese noch nicht vollständig erforscht sind.",
        idealRank: 2,
      },
      {
        text: "Der Patient muss umfassend über Risiken und Ungewissheiten aufgeklärt werden und kann dann selbst entscheiden.",
        idealRank: 1,
      },
      {
        text: "Klinische Studien folgen einem wichtigen Prozess, der den Schutz aller zukünftigen Patienten sicherstellt.",
        idealRank: 3,
      },
      {
        text: "Es ist die Pflicht des Arztes, alle verfügbaren Optionen für seinen Patienten zu prüfen.",
        idealRank: 4,
      },
      {
        text: "Das Pharmaunternehmen sollte das Medikament kostenlos zur Verfügung stellen, wenn es das einzige Mittel ist.",
        idealRank: 5,
      },
    ],
  },
  {
    id: "se-2-03",
    dilemma:
      "Eine Ärztin behandelt einen Patienten, der regelmäßig häusliche Gewalt gegen seine Partnerin ausübt. Der Patient vertraut sich ihr an und bittet um Hilfe bei seiner Wutproblematik. Die Ärztin weiß, dass die Partnerin ebenfalls Patientin in ihrer Praxis ist.",
    aussagen: [
      {
        text: "Der Schutz der körperlichen Unversehrtheit der bedrohten Partnerin hat oberste Priorität.",
        idealRank: 1,
      },
      {
        text: "Die Ärztin muss die Schweigepflicht gegenüber beiden Patienten wahren und darf die Information nicht weitergeben.",
        idealRank: 3,
      },
      {
        text: "Dem Patienten sollte professionelle therapeutische Hilfe vermittelt werden, um die Gewaltproblematik an der Wurzel zu behandeln.",
        idealRank: 2,
      },
      {
        text: "Die Ärztin sollte prüfen, ob sie aufgrund des Interessenkonflikts einen der beiden Patienten an einen Kollegen überweisen muss.",
        idealRank: 4,
      },
      {
        text: "Solange der Patient freiwillig Hilfe sucht, besteht Hoffnung auf Besserung und kein Grund zum Eingreifen.",
        idealRank: 5,
      },
    ],
  },
  {
    id: "se-2-04",
    dilemma:
      "Ein junger Assistenzarzt wird von seinem Oberarzt systematisch gemobbt: Er bekommt die schlechtesten Dienste, wird vor dem Team bloßgestellt und von Fortbildungen ausgeschlossen. Wenn er sich beschwert, riskiert er eine schlechte Beurteilung.",
    aussagen: [
      {
        text: "Mobbing ist ein Verstoß gegen die Menschenwürde und muss unabhängig von hierarchischen Konsequenzen benannt werden.",
        idealRank: 1,
      },
      {
        text: "Strukturen, die Machtmissbrauch ermöglichen, müssen systematisch verändert werden.",
        idealRank: 2,
      },
      {
        text: "Der Assistenzarzt sollte sich professionelle Unterstützung suchen (Betriebsrat, Vertrauensperson, Arbeitsrecht).",
        idealRank: 3,
      },
      {
        text: "Es ist verständlich, dass der Assistenzarzt Angst vor beruflichen Konsequenzen hat.",
        idealRank: 4,
      },
      {
        text: "Vielleicht übertreibt der Assistenzarzt und sollte sich besser anpassen.",
        idealRank: 5,
      },
    ],
  },
  {
    id: "se-2-05",
    dilemma:
      "Eine 15-jährige Patientin bittet ihre Gynäkologin um die Pille. Sie möchte nicht, dass ihre Eltern davon erfahren. Die Ärztin hält sie für reif genug, die Entscheidung selbst zu treffen.",
    aussagen: [
      {
        text: "Das Recht auf sexuelle Selbstbestimmung und reproduktive Gesundheit gilt auch für Jugendliche, die die nötige Reife mitbringen.",
        idealRank: 1,
      },
      {
        text: "Die Vertraulichkeit der Arzt-Patient-Beziehung muss auch bei Minderjährigen geschützt werden, wenn sie einsichtsfähig sind.",
        idealRank: 2,
      },
      {
        text: "Die Ärztin sollte die Patientin umfassend über Verhütung, Risiken und Alternativen aufklären.",
        idealRank: 3,
      },
      {
        text: "Eltern sollten grundsätzlich in medizinische Entscheidungen ihrer minderjährigen Kinder einbezogen werden.",
        idealRank: 4,
      },
      {
        text: "Die Ärztin sollte die Patientin ermutigen, mit ihren Eltern zu sprechen, dies aber nicht zur Bedingung machen.",
        idealRank: 5,
      },
    ],
  },
  {
    id: "se-2-06",
    dilemma:
      "Ein Forscher an einer Universität hat vielversprechende Ergebnisse bei einer Studie über ein neues Krebsmedikament. Allerdings hat er festgestellt, dass einige Datenpunkte fehlerhaft sind. Wenn er die fehlerhaften Daten korrigiert, werden die Ergebnisse weniger beeindruckend und die Studie wird möglicherweise nicht publiziert.",
    aussagen: [
      {
        text: "Wissenschaftliche Integrität und Ehrlichkeit sind grundlegende Werte, die nie kompromittiert werden dürfen.",
        idealRank: 1,
      },
      {
        text: "Fehlerhafte Forschungsergebnisse können in der Medizin zu falschen Behandlungen führen und Menschenleben gefährden.",
        idealRank: 2,
      },
      {
        text: "Die Korrektur der Daten und transparente Berichterstattung schützen das Vertrauen in die Wissenschaft.",
        idealRank: 3,
      },
      {
        text: "Der Druck, Ergebnisse zu publizieren, ist ein systemisches Problem, das Forscher in solche Situationen bringt.",
        idealRank: 4,
      },
      {
        text: "Die Karriere des Forschers hängt von Publikationen ab, was bei der Bewertung berücksichtigt werden sollte.",
        idealRank: 5,
      },
    ],
  },
  {
    id: "se-2-07",
    dilemma:
      "Eine Gruppe von Medizinstudenten bemerkt, dass ein Kommilitone bei einer Online-Prüfung schummelt, indem er ein Smartphone benutzt. Der Kommilitone hat finanzielle Probleme und würde bei Nichtbestehen sein Stipendium verlieren.",
    aussagen: [
      {
        text: "Fairness und Chancengleichheit müssen für alle Studierenden gelten — Täuschung untergräbt dies fundamental.",
        idealRank: 1,
      },
      {
        text: "Akademische Integrität ist besonders in der Medizin wichtig, da spätere Patienten auf das Wissen der Ärzt:innen vertrauen.",
        idealRank: 2,
      },
      {
        text: "Man sollte den Kommilitonen zunächst vertraulich darauf ansprechen und ihm raten, sich den Prüfern zu stellen.",
        idealRank: 3,
      },
      {
        text: "Die schwierige finanzielle Situation des Kommilitonen ist verständlich, rechtfertigt aber kein Fehlverhalten.",
        idealRank: 4,
      },
      {
        text: "Man sollte sich nicht einmischen, da es nicht die eigene Angelegenheit ist.",
        idealRank: 5,
      },
    ],
  },
  {
    id: "se-2-08",
    dilemma:
      "Ein Kinderarzt behandelt ein Kind einer Familie, die aus religiösen Gründen eine Bluttransfusion ablehnt. Das Kind hat nach einem Unfall viel Blut verloren und braucht dringend die Transfusion, um zu überleben.",
    aussagen: [
      {
        text: "Das Recht des Kindes auf Leben und körperliche Unversehrtheit überwiegt die religiösen Überzeugungen der Eltern.",
        idealRank: 1,
      },
      {
        text: "Bei unmittelbarer Lebensgefahr ist der Arzt rechtlich und ethisch verpflichtet, lebensrettende Maßnahmen einzuleiten.",
        idealRank: 2,
      },
      {
        text: "Religionsfreiheit ist ein Grundrecht, das respektiert werden muss.",
        idealRank: 4,
      },
      {
        text: "Der Arzt sollte versuchen, die Eltern von der Notwendigkeit zu überzeugen, bevor er gegen ihren Willen handelt.",
        idealRank: 3,
      },
      {
        text: "Wenn die Eltern sich weiterhin weigern, sollte der Arzt eine richterliche Anordnung einholen, auch wenn dies Zeit kostet.",
        idealRank: 5,
      },
    ],
  },
  {
    id: "se-2-09",
    dilemma:
      "Ein Pflegeheim hat nicht genug Personal, um alle Bewohner angemessen zu versorgen. Die Pflegedienstleitung steht vor der Entscheidung, ob sie die Situation gegenüber den Angehörigen und der Öffentlichkeit transparent macht, was dem Ruf des Heims schaden könnte.",
    aussagen: [
      {
        text: "Die Würde und angemessene Versorgung der Bewohner muss über wirtschaftlichen und Reputationsinteressen stehen.",
        idealRank: 1,
      },
      {
        text: "Transparenz über Missstände ist eine ethische Pflicht, die letztlich auch zu Verbesserungen führen kann.",
        idealRank: 2,
      },
      {
        text: "Die Angehörigen haben das Recht zu wissen, unter welchen Bedingungen ihre Familienmitglieder betreut werden.",
        idealRank: 3,
      },
      {
        text: "Die Pflegedienstleitung sollte zürst intern Lösungen suchen, bevor sie an die Öffentlichkeit geht.",
        idealRank: 4,
      },
      {
        text: "Wenn die Situation öffentlich wird, könnten Bewohner abgezogen werden, was die Finanzlage weiter verschlechtert.",
        idealRank: 5,
      },
    ],
  },
  {
    id: "se-2-10",
    dilemma:
      "Eine Ärztin wird von einem Patienten gebeten, ein Gutachten zu erstellen, in dem seine Arbeitsunfähigkeit bestätigt wird. Sie hat den Verdacht, dass der Patient simuliert, kann es aber nicht definitiv beweisen.",
    aussagen: [
      {
        text: "Die Ärztin darf nur das attestieren, was sie medizinisch feststellen kann — alles andere wäre eine Fälschung.",
        idealRank: 1,
      },
      {
        text: "Die Integrität des Sozialsystems hängt davon ab, dass Gutachten ehrlich erstellt werden.",
        idealRank: 2,
      },
      {
        text: "Im Zweifelsfall sollte die Ärztin weitere Untersuchungen durchführen, bevor sie ein Gutachten erstellt.",
        idealRank: 3,
      },
      {
        text: "Der Patient verdient eine respektvolle Behandlung und sollte nicht vorschnell als Simulant abgestempelt werden.",
        idealRank: 4,
      },
      {
        text: "Die Ärztin sollte das Gutachten ausstellen, da sie den Verdacht nicht beweisen kann und der Patient ihre Hilfe braucht.",
        idealRank: 5,
      },
    ],
  },
  {
    id: "se-2-11",
    dilemma:
      "Während einer klinischen Studie stellt ein Forscher fest, dass das Medikament in der Kontrollgruppe (Placebo) weniger wirksam ist als erwartet, was bedeutet, dass einige Patienten in der Placebo-Gruppe eine weniger wirksame Behandlung erhalten. Die Studie ist aber noch nicht abgeschlossen.",
    aussagen: [
      {
        text: "Das Wohl der einzelnen Studienteilnehmer darf nie dem wissenschaftlichen Erkenntnisgewinn geopfert werden.",
        idealRank: 1,
      },
      {
        text: "Informierte Einwilligung bedeutet, dass Teilnehmer über neue Erkenntnisse zeitnah informiert werden müssen.",
        idealRank: 2,
      },
      {
        text: "Ein vorzeitiger Abbruch der Studie würde verhindern, dass das Medikament zugelassen wird, was vielen zukünftigen Patienten schaden könnte.",
        idealRank: 3,
      },
      {
        text: "Die Ethikkommission sollte konsultiert und über die neuen Erkenntnisse informiert werden.",
        idealRank: 4,
      },
      {
        text: "Die Teilnehmer haben sich freiwillig für die Studie gemeldet und das Risiko eines Placebos akzeptiert.",
        idealRank: 5,
      },
    ],
  },
  {
    id: "se-2-12",
    dilemma:
      "Ein Arzt arbeitet in einem Krisengebiet für eine Hilfsorganisation. Er hat nur begrenzte Medikamente und muss entscheiden, ob er sie an die vielen leicht Erkrankten verteilt oder an die wenigen Schwerkranken, die ohne Medikamente sterben werden.",
    aussagen: [
      {
        text: "Die Verteilung knapper medizinischer Ressourcen muss nach dem Grundsatz der medizinischen Dringlichkeit erfolgen.",
        idealRank: 1,
      },
      {
        text: "Jedes Menschenleben hat den gleichen Wert — wer am dringendsten Hilfe braucht, sollte sie zürst bekommen.",
        idealRank: 2,
      },
      {
        text: "Der Arzt muss seine Entscheidung transparent und nachvollziehbar dokumentieren.",
        idealRank: 3,
      },
      {
        text: "Es könnte sinnvoller sein, vielen leicht Erkrankten zu helfen, damit sie nicht schwer erkranken.",
        idealRank: 4,
      },
      {
        text: "Der Arzt sollte die Medikamente gleichmäßig aufteilen, damit jeder etwas bekommt.",
        idealRank: 5,
      },
    ],
  },
  {
    id: "se-2-13",
    dilemma:
      "Eine Psychologin, die in einer psychiatrischen Klinik arbeitet, erfährt von einem Patienten, dass er plant, nach seiner Entlassung eine bestimmte Person zu verletzen. Der Patient wirkt bei der Aussage ruhig und gefasst.",
    aussagen: [
      {
        text: "Der Schutz des potenziellen Opfers vor körperlicher Gewalt hat absolute Priorität.",
        idealRank: 1,
      },
      {
        text: "Bei konkreten Gewaltandrohungen besteht eine gesetzliche Warnpflicht, die die Schweigepflicht aufhebt.",
        idealRank: 2,
      },
      {
        text: "Die Psychologin sollte die Aussage klinisch einordnen und prüfen, ob eine tatsächliche Gefährdung besteht.",
        idealRank: 3,
      },
      {
        text: "Die therapeutische Beziehung und das Vertrauen des Patienten könnten durch eine Meldung zerstört werden.",
        idealRank: 4,
      },
      {
        text: "Der Patient sollte zunächst therapeutisch auf seine Aussage angesprochen werden, bevor andere Schritte eingeleitet werden.",
        idealRank: 5,
      },
    ],
  },
  {
    id: "se-2-14",
    dilemma:
      "Ein Krankenhaus plant, kostenintensive Behandlungen für ältere Patienten über 85 Jahren einzuschränken, um das Budget für andere Bereiche verwenden zu können. Ein Ethikkomitee soll darüber beraten.",
    aussagen: [
      {
        text: "Das Alter eines Menschen darf kein Kriterium für die Einschränkung medizinischer Behandlung sein — das wäre Diskriminierung.",
        idealRank: 1,
      },
      {
        text: "Jeder Mensch hat unabhängig vom Alter das gleiche Recht auf die bestmögliche medizinische Versorgung.",
        idealRank: 2,
      },
      {
        text: "Medizinische Entscheidungen müssen individüll und auf Basis des Gesundheitszustands getroffen werden, nicht nach starren Altersgrenzen.",
        idealRank: 3,
      },
      {
        text: "Begrenzte Ressourcen erfordern schwierige Entscheidungen, bei denen auch die verbleibende Lebenserwartung eine Rolle spielen kann.",
        idealRank: 4,
      },
      {
        text: "Das Krankenhaus muss wirtschaftlich überleben, um überhaupt Patienten behandeln zu können.",
        idealRank: 5,
      },
    ],
  },
];

// ============================================================
// Exported arrays
// ============================================================

export const emotionenErkennenTasks: EmotionenErkennenTask[] = [
  ...emotionenErkennenSet1,
  ...emotionenErkennenSet2,
];

export const emotionenRegulierenTasks: EmotionenRegulierenTask[] = [
  ...emotionenRegulierenSet1,
  ...emotionenRegulierenSet2,
];

export const sozialesEntscheidenTasks: SozialesEntscheidenTask[] = [
  ...sozialesEntscheidenSet1,
  ...sozialesEntscheidenSet2,
];
