export interface RegulationOption {
  strategy: string;
  description: string;
}

export interface EmotionenRegulierenScenario {
  id: string;
  scenario: string;
  unwantedEmotion: string;
  options: RegulationOption[];
  correctAnswer: number; // 0-indexed
  explanation: string;
  difficulty: 1 | 2 | 3;
}

export const emotionenRegulierenScenarios: EmotionenRegulierenScenario[] = [
  {
    id: "er-01",
    scenario:
      "Vor der Anatomie-Prüfung spürt Markus starke Prüfungsangst. Er hat gut gelernt, aber die Nervosität lähmt ihn.",
    unwantedEmotion: "Prüfungsangst",
    options: [
      {
        strategy: "Situationsauswahl",
        description:
          "Markus meldet sich von der Prüfung ab und verschiebt auf den nächsten Termin.",
      },
      {
        strategy: "Situationsmodifikation",
        description:
          "Markus bittet den Professor, die Prüfung als Open-Book-Klausur durchzuführen.",
      },
      {
        strategy: "Aufmerksamkeitslenkung",
        description: "Markus hört vor der Prüfung seine Lieblingsmusik und denkt an etwas Schönes.",
      },
      {
        strategy: "Kognitive Veränderung",
        description:
          "Markus sagt sich: 'Aufregung und Prüfungsangst fühlen sich ähnlich an — mein Körper bereitet sich auf eine Leistung vor.'",
      },
      {
        strategy: "Reaktionsmodulation",
        description: "Markus versucht, seine Angst zu unterdrücken und nach außen ruhig zu wirken.",
      },
    ],
    correctAnswer: 3,
    explanation:
      "Kognitive Veränderung (Umbewertung) ist hier am effektivsten: Markus hat gut gelernt, daher ist die Angst unbegründet. Durch Reframing der körperlichen Symptome als positive Aktivierung kann er die Angst in Motivation umwandeln, ohne die Situation zu vermeiden.",
    difficulty: 1,
  },
  {
    id: "er-02",
    scenario:
      "Während des Biochemie-Praktikums kritisiert der Tutor Lenas Pipettiertechnik vor der gesamten Gruppe. Lena spürt Scham und Wut aufsteigen.",
    unwantedEmotion: "Scham",
    options: [
      {
        strategy: "Situationsauswahl",
        description: "Lena verlässt das Praktikum und geht nach Hause.",
      },
      {
        strategy: "Situationsmodifikation",
        description:
          "Lena bittet den Tutor höflich, das Feedback beim nächsten Mal unter vier Augen zu geben.",
      },
      {
        strategy: "Aufmerksamkeitslenkung",
        description:
          "Lena konzentriert sich voll auf das nächste Experiment und blendet den Vorfall aus.",
      },
      {
        strategy: "Kognitive Veränderung",
        description:
          "Lena denkt: 'Der Tutor meint es nicht persönlich — er will, dass ich es richtig lerne.'",
      },
      {
        strategy: "Reaktionsmodulation",
        description: "Lena lächelt und tut so, als würde sie die Kritik nicht berühren.",
      },
    ],
    correctAnswer: 1,
    explanation:
      "Situationsmodifikation ist hier am sinnvollsten: Lena kann die Situation aktiv verändern, indem sie den Tutor um konstruktives Einzelfeedback bittet. Das adressiert das eigentliche Problem (öffentliche Kritik) direkt und verhindert, dass es sich wiederholt.",
    difficulty: 1,
  },
  {
    id: "er-03",
    scenario:
      "Jonas erfährt, dass sein Kommilitone bei der gleichen Prüfung eine deutlich bessere Note bekommen hat, obwohl sie zusammen gelernt haben. Jonas empfindet starken Neid.",
    unwantedEmotion: "Neid",
    options: [
      {
        strategy: "Situationsauswahl",
        description: "Jonas meidet den Kontakt zu seinem Kommilitonen in den nächsten Wochen.",
      },
      {
        strategy: "Situationsmodifikation",
        description:
          "Jonas schlägt vor, beim nächsten Mal eine andere Lernstrategie gemeinsam auszuprobieren.",
      },
      {
        strategy: "Aufmerksamkeitslenkung",
        description: "Jonas lenkt sich mit Sport ab, um nicht mehr an die Noten zu denken.",
      },
      {
        strategy: "Kognitive Veränderung",
        description:
          "Jonas denkt: 'Noten spiegeln nicht alles wider. Sein Erfolg zeigt, dass unsere Lerngruppe funktioniert — ich kann von ihm lernen.'",
      },
      {
        strategy: "Reaktionsmodulation",
        description: "Jonas gratuliert seinem Kommilitonen, obwohl er innerlich kocht.",
      },
    ],
    correctAnswer: 3,
    explanation:
      "Kognitive Veränderung ist hier am effektivsten: Durch Umbewertung kann Jonas den Neid in Inspiration umwandeln. Statt den Erfolg des anderen als Bedrohung zu sehen, erkennt er die Lernmöglichkeit. Das fördert langfristig die Freundschaft und die eigene Motivation.",
    difficulty: 1,
  },
  {
    id: "er-04",
    scenario:
      "Sophie macht ihr erstes klinisches Praktikum und muss eine Blutabnahme durchführen. Der Patient wird ungeduldig und beschwert sich laut über ihre Unerfahrenheit. Sophie wird nervös und unsicher.",
    unwantedEmotion: "Verunsicherung",
    options: [
      {
        strategy: "Situationsauswahl",
        description: "Sophie bittet eine erfahrene Kollegin, die Blutabnahme zu übernehmen.",
      },
      {
        strategy: "Situationsmodifikation",
        description:
          "Sophie erklärt dem Patienten ruhig, dass sie Studentin ist, und bittet um etwas Geduld.",
      },
      {
        strategy: "Aufmerksamkeitslenkung",
        description:
          "Sophie konzentriert sich ausschließlich auf die technischen Schritte der Blutabnahme und blendet die Kommentare aus.",
      },
      {
        strategy: "Kognitive Veränderung",
        description:
          "Sophie denkt: 'Jeder Arzt hat mal als Anfänger begonnen. Dieser Moment ist Teil meines Lernprozesses.'",
      },
      {
        strategy: "Reaktionsmodulation",
        description:
          "Sophie atmet tief durch und versucht, ihre zitternden Hände zu stabilisieren.",
      },
    ],
    correctAnswer: 1,
    explanation:
      "Situationsmodifikation ist hier am besten: Durch offene Kommunikation mit dem Patienten kann Sophie die Situation entschärfen. Transparenz über ihren Status als Studentin setzt realistische Erwartungen und nimmt Druck von beiden Seiten.",
    difficulty: 2,
  },
  {
    id: "er-05",
    scenario:
      "Im Sezierkurs sieht David zum ersten Mal eine Leiche. Ihm wird übel und er spürt starken Ekel und Unbehagen.",
    unwantedEmotion: "Ekel",
    options: [
      {
        strategy: "Situationsauswahl",
        description:
          "David verlässt den Sezierkurs und überlegt, ob Medizin das Richtige für ihn ist.",
      },
      {
        strategy: "Situationsmodifikation",
        description:
          "David bittet den Kursleiter, zuerst nur zuschauen zu dürfen, bevor er selbst präpariert.",
      },
      {
        strategy: "Aufmerksamkeitslenkung",
        description:
          "David fokussiert sich ausschließlich auf die anatomischen Strukturen und betrachtet den Körper als Lernobjekt.",
      },
      {
        strategy: "Kognitive Veränderung",
        description:
          "David denkt: 'Dieser Mensch hat seinen Körper der Wissenschaft gespendet, damit ich ein guter Arzt werden kann. Es ist ein Geschenk.'",
      },
      {
        strategy: "Reaktionsmodulation",
        description: "David atmet durch den Mund und versucht, seine Übelkeit zu unterdrücken.",
      },
    ],
    correctAnswer: 3,
    explanation:
      "Kognitive Veränderung ist hier am wirksamsten: Durch die Umbewertung der Situation — den Körperspender als Lehrgeschenk zu betrachten — kann David Respekt statt Ekel empfinden. Das ist nachhaltiger als bloße Ablenkung und hilft ihm, langfristig mit ähnlichen Situationen umzugehen.",
    difficulty: 2,
  },
  {
    id: "er-06",
    scenario:
      "Während der Famulatur auf der Onkologie muss Anna einem jungen Patienten mitteilen, dass seine Therapie nicht angeschlagen hat. Nach dem Gespräch überkommt sie tiefe Trauer.",
    unwantedEmotion: "Trauer",
    options: [
      {
        strategy: "Situationsauswahl",
        description:
          "Anna bittet darum, auf eine andere Station versetzt zu werden, um solchen Gesprächen aus dem Weg zu gehen.",
      },
      {
        strategy: "Situationsmodifikation",
        description:
          "Anna vereinbart mit ihrer Oberärztin, dass schwierige Gespräche künftig gemeinsam geführt werden.",
      },
      {
        strategy: "Aufmerksamkeitslenkung",
        description:
          "Anna stürzt sich sofort in die nächste Aufgabe, um nicht über das Gespräch nachzudenken.",
      },
      {
        strategy: "Kognitive Veränderung",
        description:
          "Anna denkt: 'Meine Trauer zeigt, dass mir meine Patienten nicht egal sind. Empathie macht mich zu einer besseren Ärztin.'",
      },
      {
        strategy: "Reaktionsmodulation",
        description: "Anna hält ihre Tränen zurück und zeigt sich professionell vor dem Team.",
      },
    ],
    correctAnswer: 3,
    explanation:
      "Kognitive Veränderung ist hier am effektivsten: Anna kann ihre Trauer als Zeichen von Empathie und ärztlicher Kompetenz umdeuten. Das ermöglicht es ihr, die Emotion zu akzeptieren, ohne daran zu zerbrechen, und stärkt ihre professionelle Identität.",
    difficulty: 2,
  },
  {
    id: "er-07",
    scenario:
      "Tim hat drei Prüfungen in einer Woche und fühlt sich völlig überfordert. Er kann nachts nicht schlafen und spürt ständige Anspannung.",
    unwantedEmotion: "Überforderung",
    options: [
      {
        strategy: "Situationsauswahl",
        description: "Tim meldet sich von einer Prüfung ab, um die Belastung zu reduzieren.",
      },
      {
        strategy: "Situationsmodifikation",
        description:
          "Tim erstellt einen detaillierten Lernplan, der die drei Prüfungen in machbare Tagesportionen aufteilt.",
      },
      {
        strategy: "Aufmerksamkeitslenkung",
        description: "Tim macht regelmäßige Sportpausen, um den Kopf frei zu bekommen.",
      },
      {
        strategy: "Kognitive Veränderung",
        description:
          "Tim denkt: 'Drei Prüfungen sind machbar — ich habe schon schwierigere Phasen gemeistert.'",
      },
      {
        strategy: "Reaktionsmodulation",
        description:
          "Tim trinkt abends Baldrian-Tee und versucht, seine Anspannung herunterzufahren.",
      },
    ],
    correctAnswer: 1,
    explanation:
      "Situationsmodifikation ist hier am sinnvollsten: Die Überforderung entsteht durch mangelnde Struktur. Ein konkreter Lernplan verändert die Situation aktiv und gibt Tim Kontrolle zurück. Das ist nachhaltiger als bloßes Umdenken, weil das Problem real und lösbar ist.",
    difficulty: 1,
  },
  {
    id: "er-08",
    scenario:
      "Während einer Gruppenpräsentation in Physiologie vergisst Clara plötzlich ihren Text. Die anderen starren sie an. Sie spürt Panik aufsteigen.",
    unwantedEmotion: "Panik",
    options: [
      {
        strategy: "Situationsauswahl",
        description: "Clara überlässt einem Gruppenmitglied das Wort und setzt sich hin.",
      },
      {
        strategy: "Situationsmodifikation",
        description:
          "Clara schaut auf ihre Notizen und fasst den nächsten Punkt in eigenen Worten zusammen.",
      },
      {
        strategy: "Aufmerksamkeitslenkung",
        description:
          "Clara fixiert einen Punkt an der hinteren Wand und versucht, sich zu sammeln.",
      },
      {
        strategy: "Kognitive Veränderung",
        description:
          "Clara denkt: 'Eine kurze Pause ist normal — das Publikum merkt meinen Blackout weniger als ich denke.'",
      },
      {
        strategy: "Reaktionsmodulation",
        description:
          "Clara lächelt, nimmt einen Schluck Wasser und atmet tief durch, um Zeit zu gewinnen.",
      },
    ],
    correctAnswer: 3,
    explanation:
      "Kognitive Veränderung ist hier am wirksamsten: Claras Panik wird durch die Überbewertung des Blackouts verstärkt. Die Erkenntnis, dass das Publikum es weniger dramatisch wahrnimmt, reduziert die Panik sofort und ermöglicht ihr, den Faden wiederzufinden.",
    difficulty: 1,
  },
  {
    id: "er-09",
    scenario:
      "Auf der Notaufnahme-Famulatur wird Felix von einem betrunkenen Patienten verbal beleidigt und rassistisch beschimpft. Felix spürt Wut und Kränkung.",
    unwantedEmotion: "Wut",
    options: [
      {
        strategy: "Situationsauswahl",
        description:
          "Felix verlässt den Raum und bittet einen Kollegen, den Patienten zu übernehmen.",
      },
      {
        strategy: "Situationsmodifikation",
        description:
          "Felix setzt dem Patienten ruhig aber bestimmt Grenzen und erklärt, dass er sich Beleidigungen nicht gefallen lässt.",
      },
      {
        strategy: "Aufmerksamkeitslenkung",
        description:
          "Felix konzentriert sich rein auf die medizinische Versorgung und ignoriert die Beschimpfungen.",
      },
      {
        strategy: "Kognitive Veränderung",
        description:
          "Felix denkt: 'Der Patient ist stark alkoholisiert — seine Worte richten sich nicht gegen mich als Person.'",
      },
      {
        strategy: "Reaktionsmodulation",
        description:
          "Felix behält einen neutralen Gesichtsausdruck und lässt sich nichts anmerken.",
      },
    ],
    correctAnswer: 3,
    explanation:
      "Kognitive Veränderung ist hier am effektivsten: Felix kann erkennen, dass die Beschimpfungen nicht ihm als Person gelten, sondern aus der Intoxikation des Patienten resultieren. Diese Umbewertung reduziert die persönliche Kränkung und erlaubt professionelles Handeln.",
    difficulty: 2,
  },
  {
    id: "er-10",
    scenario:
      "Mia hat zum dritten Mal die Biochemie-Klausur nicht bestanden. Sie fühlt sich hoffnungslos und denkt daran, das Studium abzubrechen.",
    unwantedEmotion: "Hoffnungslosigkeit",
    options: [
      {
        strategy: "Situationsauswahl",
        description: "Mia überlegt ernsthaft, ob ein anderes Studium besser zu ihr passt.",
      },
      {
        strategy: "Situationsmodifikation",
        description:
          "Mia sucht sich eine professionelle Lernberatung und ändert ihre Lernstrategie grundlegend.",
      },
      {
        strategy: "Aufmerksamkeitslenkung",
        description: "Mia gönnt sich eine Woche Pause und unternimmt etwas Schönes mit Freunden.",
      },
      {
        strategy: "Kognitive Veränderung",
        description:
          "Mia denkt: 'Viele erfolgreiche Ärzte hatten Rückschläge — eine Prüfung definiert nicht meine gesamte Karriere.'",
      },
      {
        strategy: "Reaktionsmodulation",
        description: "Mia erzählt niemandem vom dritten Fehlversuch, um keine Schwäche zu zeigen.",
      },
    ],
    correctAnswer: 1,
    explanation:
      "Situationsmodifikation ist hier am besten: Nach drei Fehlversuchen reicht Umbewertung allein nicht — Mia braucht eine konkrete Veränderung ihrer Lernstrategie. Professionelle Lernberatung kann Schwächen identifizieren und einen neuen Ansatz ermöglichen.",
    difficulty: 2,
  },
  {
    id: "er-11",
    scenario:
      "Lukas beobachtet im Praktikum, wie ein erfahrener Arzt einen Patienten herablassend behandelt. Lukas empfindet moralische Empörung, traut sich aber als Student nicht, etwas zu sagen.",
    unwantedEmotion: "Moralische Empörung",
    options: [
      {
        strategy: "Situationsauswahl",
        description:
          "Lukas wechselt die Station, um solche Situationen nicht mehr erleben zu müssen.",
      },
      {
        strategy: "Situationsmodifikation",
        description:
          "Lukas spricht den Arzt nach dem Patientenkontakt unter vier Augen respektvoll an.",
      },
      {
        strategy: "Aufmerksamkeitslenkung",
        description:
          "Lukas konzentriert sich auf seine eigenen Aufgaben und versucht, den Vorfall zu vergessen.",
      },
      {
        strategy: "Kognitive Veränderung",
        description:
          "Lukas denkt: 'Vielleicht habe ich die Situation falsch interpretiert — der Arzt hat sicher seine Gründe.'",
      },
      {
        strategy: "Reaktionsmodulation",
        description: "Lukas beißt die Zähne zusammen und zeigt seine Empörung nicht.",
      },
    ],
    correctAnswer: 1,
    explanation:
      "Situationsmodifikation ist hier die beste Strategie: Bei berechtigter moralischer Empörung wäre reine Umbewertung unangemessen, da das Verhalten des Arztes tatsächlich problematisch ist. Respektvolles Ansprechen kann die Situation real verbessern und schützt zukünftige Patienten.",
    difficulty: 3,
  },
  {
    id: "er-12",
    scenario:
      "Kurz vor dem MedAT scrollt Elena durch Social Media und sieht, wie andere Bewerber von ihren intensiven Vorbereitungen berichten. Sie fühlt sich plötzlich völlig unvorbereitet und panisch.",
    unwantedEmotion: "Vergleichsangst",
    options: [
      {
        strategy: "Situationsauswahl",
        description: "Elena löscht ihre Social-Media-Apps bis nach dem MedAT.",
      },
      {
        strategy: "Situationsmodifikation",
        description: "Elena folgt nur noch MedAT-Lerngruppen und blendet persönliche Posts aus.",
      },
      {
        strategy: "Aufmerksamkeitslenkung",
        description: "Elena legt das Handy weg und geht eine Runde spazieren.",
      },
      {
        strategy: "Kognitive Veränderung",
        description:
          "Elena denkt: 'Social Media zeigt nur die Highlights — niemand postet seine Unsicherheiten. Mein Lernplan ist solide.'",
      },
      {
        strategy: "Reaktionsmodulation",
        description: "Elena versucht, ihre Panik zu ignorieren und weiterzulernen.",
      },
    ],
    correctAnswer: 0,
    explanation:
      "Situationsauswahl ist hier am effektivsten: Social Media vor einer wichtigen Prüfung ist eine vermeidbare Stressquelle. Das Löschen der Apps eliminiert den Auslöser komplett und ist eine kluge, proaktive Entscheidung — effektiver als ständige Umbewertung bei jedem Post.",
    difficulty: 1,
  },
  {
    id: "er-13",
    scenario:
      "Während einer Nachtschicht im Krankenhaus macht Paul einen kleinen Fehler bei der Medikamentendosierung, der rechtzeitig bemerkt wird. Paul wird von Schuldgefühlen und Selbstzweifeln geplagt.",
    unwantedEmotion: "Schuldgefühle",
    options: [
      {
        strategy: "Situationsauswahl",
        description: "Paul bittet darum, keine Nachtschichten mehr machen zu müssen.",
      },
      {
        strategy: "Situationsmodifikation",
        description:
          "Paul schlägt vor, ein Vier-Augen-Kontrollsystem für Medikamentendosierungen einzuführen.",
      },
      {
        strategy: "Aufmerksamkeitslenkung",
        description: "Paul denkt an die vielen Patienten, denen er heute erfolgreich geholfen hat.",
      },
      {
        strategy: "Kognitive Veränderung",
        description:
          "Paul denkt: 'Fehler passieren jedem — entscheidend ist, dass er bemerkt wurde und ich daraus lerne. Das System hat funktioniert.'",
      },
      {
        strategy: "Reaktionsmodulation",
        description: "Paul bleibt äußerlich ruhig und spricht mit niemandem über den Vorfall.",
      },
    ],
    correctAnswer: 3,
    explanation:
      "Kognitive Veränderung ist hier am wirksamsten: Paul kann den Fehler als Lernerfahrung umdeuten und erkennen, dass das Sicherheitssystem funktioniert hat. Übermäßige Schuldgefühle sind kontraproduktiv und können zu weiteren Fehlern durch Verunsicherung führen.",
    difficulty: 2,
  },
  {
    id: "er-14",
    scenario:
      "Hannah hat ein schwieriges Gespräch mit ihrem Doktorvater, der ihre bisherige Forschungsarbeit als unzureichend kritisiert. Sie fühlt sich entmutigt und frustriert.",
    unwantedEmotion: "Frustration",
    options: [
      {
        strategy: "Situationsauswahl",
        description: "Hannah wechselt den Doktorvater und sucht sich ein neues Forschungsthema.",
      },
      {
        strategy: "Situationsmodifikation",
        description:
          "Hannah vereinbart einen Folgetermin und bittet um konkrete, schriftliche Verbesserungsvorschläge.",
      },
      {
        strategy: "Aufmerksamkeitslenkung",
        description: "Hannah trifft sich mit Freunden und redet über andere Themen.",
      },
      {
        strategy: "Kognitive Veränderung",
        description:
          "Hannah denkt: 'Konstruktive Kritik ist Teil des wissenschaftlichen Prozesses — sie hilft mir, besser zu werden.'",
      },
      {
        strategy: "Reaktionsmodulation",
        description: "Hannah bedankt sich höflich für das Feedback, obwohl sie innerlich kocht.",
      },
    ],
    correctAnswer: 3,
    explanation:
      "Kognitive Veränderung ist hier am effektivsten: Durch die Umbewertung der Kritik als konstruktiven Teil des Forschungsprozesses kann Hannah die Frustration in Motivation umwandeln. Akademische Kritik ist normal und kein Angriff auf ihre Person.",
    difficulty: 3,
  },
  {
    id: "er-15",
    scenario:
      "Auf der Palliativstation erlebt Fabian den ersten Tod eines Patienten, den er länger betreut hat. Er fühlt sich emotional überwältigt und fragt sich, ob er dem Beruf gewachsen ist.",
    unwantedEmotion: "Emotionale Überwältigung",
    options: [
      {
        strategy: "Situationsauswahl",
        description: "Fabian entscheidet sich gegen eine Karriere in der Palliativmedizin.",
      },
      {
        strategy: "Situationsmodifikation",
        description:
          "Fabian fragt, ob die Station regelmäßige Supervisionen oder Balint-Gruppen für das Team anbieten kann.",
      },
      {
        strategy: "Aufmerksamkeitslenkung",
        description:
          "Fabian stürzt sich in die Arbeit und kümmert sich sofort um den nächsten Patienten.",
      },
      {
        strategy: "Kognitive Veränderung",
        description:
          "Fabian denkt: 'Der Patient hatte durch meine Betreuung eine würdevolle letzte Zeit. Mein Mitgefühl ist eine Stärke, keine Schwäche.'",
      },
      {
        strategy: "Reaktionsmodulation",
        description:
          "Fabian zieht sich auf die Toilette zurück, um kurz zu weinen, bevor er weitermacht.",
      },
    ],
    correctAnswer: 3,
    explanation:
      "Kognitive Veränderung ist hier am wirksamsten: Fabian kann seine emotionale Reaktion als Zeichen seines Mitgefühls und guter Patientenbetreuung umdeuten. Die Erkenntnis, dass emotionale Betroffenheit eine ärztliche Qualität ist, stärkt seine berufliche Resilienz.",
    difficulty: 3,
  },
  {
    id: "er-16",
    scenario:
      "Während der Lernphase für das Physikum merkt Katharina, dass ihre Lerngruppe ohne sie ein Treffen organisiert hat. Sie fühlt sich ausgeschlossen und verletzt.",
    unwantedEmotion: "Kränkung",
    options: [
      { strategy: "Situationsauswahl", description: "Katharina sucht sich eine neue Lerngruppe." },
      {
        strategy: "Situationsmodifikation",
        description:
          "Katharina spricht die Gruppe offen an und fragt, warum sie nicht eingeladen wurde.",
      },
      {
        strategy: "Aufmerksamkeitslenkung",
        description: "Katharina lernt alleine weiter und versucht, nicht mehr daran zu denken.",
      },
      {
        strategy: "Kognitive Veränderung",
        description:
          "Katharina denkt: 'Vielleicht war es ein Versehen — ich sollte nicht gleich das Schlimmste annehmen.'",
      },
      {
        strategy: "Reaktionsmodulation",
        description: "Katharina tut beim nächsten Gruppentreffen so, als wüsste sie nichts davon.",
      },
    ],
    correctAnswer: 3,
    explanation:
      "Kognitive Veränderung ist hier am effektivsten: Katharina neigt dazu, das Schlimmste anzunehmen. Durch die Erwägung, dass es ein Versehen war, kann sie ihre Kränkung reduzieren und die Situation mit klarem Kopf einschätzen, bevor sie vorschnell reagiert.",
    difficulty: 2,
  },
  {
    id: "er-17",
    scenario:
      "Beim OSCE (praktische Prüfung) bekommt Niklas eine Schauspielerpatientin, die extrem emotional reagiert und weint. Niklas fühlt sich hilflos und überfordert.",
    unwantedEmotion: "Hilflosigkeit",
    options: [
      {
        strategy: "Situationsauswahl",
        description: "Niklas bricht die Station ab und geht zur nächsten.",
      },
      {
        strategy: "Situationsmodifikation",
        description:
          "Niklas reicht der Patientin ein Taschentuch und gibt ihr einen Moment Zeit, bevor er das Gespräch strukturiert fortführt.",
      },
      {
        strategy: "Aufmerksamkeitslenkung",
        description:
          "Niklas konzentriert sich auf die OSCE-Checkliste und arbeitet die Punkte mechanisch ab.",
      },
      {
        strategy: "Kognitive Veränderung",
        description:
          "Niklas denkt: 'Emotionale Patienten gehören zum Arztberuf — dies ist eine Chance, Empathie zu zeigen.'",
      },
      {
        strategy: "Reaktionsmodulation",
        description:
          "Niklas behält einen professionellen Gesichtsausdruck und versucht, seine Unsicherheit zu verbergen.",
      },
    ],
    correctAnswer: 3,
    explanation:
      "Kognitive Veränderung ist hier am effektivsten: Durch die Umbewertung der Situation als Lernchance statt als Bedrohung kann Niklas seine Hilflosigkeit überwinden. Die Erkenntnis, dass Empathie eine bewertete Kompetenz im OSCE ist, gibt ihm Handlungssicherheit.",
    difficulty: 3,
  },
  {
    id: "er-18",
    scenario:
      "Rafael steht an einem Sonntag in der Bibliothek und sieht, wie alle Plätze besetzt sind. Er muss dringend für die Klausur am Montag lernen und spürt aufsteigende Frustration und Zeitdruck.",
    unwantedEmotion: "Frustration",
    options: [
      {
        strategy: "Situationsauswahl",
        description:
          "Rafael geht nach Hause und lernt dort, obwohl er weiß, dass er sich dort schlecht konzentrieren kann.",
      },
      {
        strategy: "Situationsmodifikation",
        description:
          "Rafael fragt an einem Gruppentisch, ob noch ein Platz frei ist, oder weicht in einen leeren Seminarraum aus.",
      },
      {
        strategy: "Aufmerksamkeitslenkung",
        description: "Rafael holt sich erst mal einen Kaffee und versucht, sich zu beruhigen.",
      },
      {
        strategy: "Kognitive Veränderung",
        description:
          "Rafael denkt: 'Volle Bibliothek bedeutet, dass viele fleißig sind — ich bin nicht allein mit dem Lernstress.'",
      },
      {
        strategy: "Reaktionsmodulation",
        description:
          "Rafael unterdrückt seinen Ärger und stellt sich geduldig in die Warteschlange.",
      },
    ],
    correctAnswer: 1,
    explanation:
      "Situationsmodifikation ist hier am besten: Rafaels Problem ist konkret und lösbar — er braucht einen Lernplatz. Einen Platz zu finden oder einen Seminarraum zu nutzen löst das Problem direkt, statt die Emotion nur umzudeuten.",
    difficulty: 1,
  },
  {
    id: "er-19",
    scenario:
      "Während einer Lernpause erzählt ein Kommilitone Lisa detailliert von seinen Erfolgen beim KPJ-Matching. Lisa hat noch keinen Platz und spürt zunehmende Eifersucht und Selbstzweifel.",
    unwantedEmotion: "Eifersucht",
    options: [
      {
        strategy: "Situationsauswahl",
        description: "Lisa entschuldigt sich und geht, um das Gespräch zu beenden.",
      },
      {
        strategy: "Situationsmodifikation",
        description:
          "Lisa lenkt das Gespräch auf allgemeine Tipps für das KPJ-Matching und fragt nach konkreten Ratschlägen.",
      },
      {
        strategy: "Aufmerksamkeitslenkung",
        description: "Lisa wechselt das Thema und spricht über etwas anderes.",
      },
      {
        strategy: "Kognitive Veränderung",
        description:
          "Lisa denkt: 'Sein Erfolg nimmt mir nichts weg. Die Bewerbungsphase ist noch nicht vorbei und ich habe gute Chancen.'",
      },
      {
        strategy: "Reaktionsmodulation",
        description: "Lisa lächelt und gratuliert, während sie innerlich angespannt ist.",
      },
    ],
    correctAnswer: 3,
    explanation:
      "Kognitive Veränderung ist hier am effektivsten: Lisa kann erkennen, dass der Erfolg des Kommilitonen keine Bedrohung für ihre eigenen Chancen darstellt. Die rationale Einordnung reduziert die Eifersucht und ermöglicht ihr, die Situation sogar als Informationsquelle zu nutzen.",
    difficulty: 3,
  },
  {
    id: "er-20",
    scenario:
      "Am Abend vor der mündlichen Pharmakologie-Prüfung liegt Alex im Bett und kann nicht einschlafen. Katastrophengedanken kreisen: 'Was, wenn ich alles vergesse? Was, wenn ich durchfalle?'",
    unwantedEmotion: "Grübelangst",
    options: [
      {
        strategy: "Situationsauswahl",
        description: "Alex steht auf und lernt noch weiter, um sich sicherer zu fühlen.",
      },
      {
        strategy: "Situationsmodifikation",
        description:
          "Alex legt sich Karteikarten mit den wichtigsten Wirkstoffen bereit, um morgens noch einmal drüberzuschauen.",
      },
      {
        strategy: "Aufmerksamkeitslenkung",
        description:
          "Alex hört ein Hörbuch oder einen Podcast, um die Grübelschleife zu durchbrechen und einschlafen zu können.",
      },
      {
        strategy: "Kognitive Veränderung",
        description:
          "Alex denkt: 'Katastrophendenken ist nicht realistisch — ich habe mich gut vorbereitet, und eine mündliche Prüfung erlaubt auch Nachfragen.'",
      },
      {
        strategy: "Reaktionsmodulation",
        description: "Alex macht progressive Muskelentspannung, um den Körper zu beruhigen.",
      },
    ],
    correctAnswer: 2,
    explanation:
      "Aufmerksamkeitslenkung ist hier am effektivsten: Abends vor der Prüfung ist kognitive Umbewertung oft schwer, weil Grübelschleifen sich selbst verstärken. Ein Hörbuch oder Podcast unterbricht den Kreislauf gezielt und fördert das Einschlafen — am nächsten Tag ist ein ausgeruhter Kopf wichtiger als perfekte Vorbereitung.",
    difficulty: 3,
  },
];
