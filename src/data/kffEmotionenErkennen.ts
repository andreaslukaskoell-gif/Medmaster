export interface EmotionenErkennenQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // 0-indexed
  explanation: string;
}

export interface EmotionenErkennenScenario {
  id: string;
  scenario: string;
  questions: EmotionenErkennenQuestion[];
}

export const emotionenErkennenScenarios: EmotionenErkennenScenario[] = [
  {
    id: "ee-01",
    scenario: "Anna hat monatelang intensiv für den MedAT gelernt und auf viele Freizeitaktivitäten verzichtet. Am Testtag erfährt sie, dass der Test auf einen anderen Tag verschoben wurde. Ihre Freundin Lisa, die sich kaum vorbereitet hat, reagiert begeistert auf die Nachricht.",
    questions: [
      {
        question: "Was empfindet Anna am ehesten gegenüber der Verschiebung?",
        options: ["Erleichterung", "Frustration", "Freude", "Angst"],
        correctAnswer: 1,
        explanation: "Anna hat viel investiert und war bereit — die Verschiebung durchkreuzt ihre Pläne, was Frustration auslöst."
      },
      {
        question: "Was empfindet Anna gegenüber Lisas begeisterter Reaktion?",
        options: ["Neid", "Verachtung", "Wut", "Mitleid"],
        correctAnswer: 1,
        explanation: "Lisa hat sich kaum vorbereitet und freut sich über die Verschiebung — Anna empfindet Verachtung für diese Haltung."
      },
      {
        question: "Was empfindet Lisa am ehesten?",
        options: ["Schuld", "Erleichterung", "Stolz", "Dankbarkeit"],
        correctAnswer: 1,
        explanation: "Lisa hat sich kaum vorbereitet und bekommt nun mehr Zeit, was ihr Erleichterung verschafft."
      },
      {
        question: "Welches Gefühl könnte bei Anna zusätzlich mitschwingen?",
        options: ["Hoffnung", "Sehnsucht", "Angst", "Ekel"],
        correctAnswer: 2,
        explanation: "Anna könnte Angst haben, dass sie ihr Leistungsniveau bis zum neuen Termin nicht halten kann."
      },
      {
        question: "Was empfindet Lisa gegenüber Anna?",
        options: ["Bewunderung", "Eifersucht", "Schuld", "Resignation"],
        correctAnswer: 2,
        explanation: "Lisa erkennt, dass ihre Freude Anna verletzt, und fühlt sich schuldig, weil sie Annas harte Arbeit nicht würdigt."
      }
    ]
  },
  {
    id: "ee-02",
    scenario: "Markus, ein junger Assistenzarzt, macht bei der Visite einen Fehler bei der Medikamentendosierung. Der Oberarzt korrigiert ihn vor dem gesamten Team und den Patienten. Eine Krankenschwester, die den Fehler vorher bemerkt hatte, aber nichts gesagt hat, wendet den Blick ab.",
    questions: [
      {
        question: "Was empfindet Markus am stärksten?",
        options: ["Wut", "Scham", "Trauer", "Überraschung"],
        correctAnswer: 1,
        explanation: "Vor dem gesamten Team und den Patienten korrigiert zu werden, löst bei Markus primär Scham aus."
      },
      {
        question: "Was empfindet die Krankenschwester?",
        options: ["Erleichterung", "Schuld", "Verachtung", "Neid"],
        correctAnswer: 1,
        explanation: "Sie hat den Fehler bemerkt, aber geschwiegen — jetzt fühlt sie sich schuldig, weil sie hätte eingreifen können."
      },
      {
        question: "Welches Gefühl hat Markus gegenüber dem Oberarzt?",
        options: ["Dankbarkeit", "Bewunderung", "Wut", "Mitleid"],
        correctAnswer: 2,
        explanation: "Markus ärgert sich über die öffentliche Bloßstellung, obwohl die Korrektur sachlich richtig war."
      },
      {
        question: "Was könnte der Oberarzt gegenüber Markus empfinden?",
        options: ["Verachtung", "Enttäuschung", "Eifersucht", "Sehnsucht"],
        correctAnswer: 1,
        explanation: "Der Oberarzt ist enttäuscht, dass ein Assistenzarzt einen vermeidbaren Dosierungsfehler macht."
      }
    ]
  },
  {
    id: "ee-03",
    scenario: "Sophie und David lernen gemeinsam in einer Studiengruppe für den BMS-Teil des MedAT. Sophie erklärt David wiederholt ein Biologiethema, aber er versteht es nicht. Nach der dritten Erklärung sagt David gereizt, er brauche keine Hilfe. Am nächsten Tag schreibt er Sophie eine entschuldigende Nachricht.",
    questions: [
      {
        question: "Was empfindet Sophie nach Davids gereizter Reaktion?",
        options: ["Frustration", "Ekel", "Neid", "Stolz"],
        correctAnswer: 0,
        explanation: "Sophie hat sich Mühe gegeben, ihm zu helfen, und seine Ablehnung löst Frustration aus."
      },
      {
        question: "Was empfindet David, als er gereizt reagiert?",
        options: ["Stolz", "Scham", "Freude", "Verachtung"],
        correctAnswer: 1,
        explanation: "David schämt sich, dass er das Thema nicht versteht, und reagiert deshalb defensiv gereizt."
      },
      {
        question: "Was empfindet David am nächsten Tag, als er die Nachricht schreibt?",
        options: ["Angst", "Schuld", "Neid", "Resignation"],
        correctAnswer: 1,
        explanation: "David erkennt, dass er Sophie ungerecht behandelt hat, und fühlt sich schuldig."
      },
      {
        question: "Was könnte Sophie beim Lesen der Entschuldigung empfinden?",
        options: ["Verachtung", "Erleichterung", "Überraschung", "Sehnsucht"],
        correctAnswer: 1,
        explanation: "Die Entschuldigung zeigt Sophie, dass die Freundschaft nicht beschädigt ist, was Erleichterung bringt."
      },
      {
        question: "Was schwingt bei Sophie zusätzlich mit, als David das Thema nicht versteht?",
        options: ["Mitleid", "Eifersucht", "Ekel", "Resignation"],
        correctAnswer: 0,
        explanation: "Sophie hat Mitgefühl mit Davids Schwierigkeiten, auch wenn sie frustriert ist."
      }
    ]
  },
  {
    id: "ee-04",
    scenario: "Während eines Krankenhuspraktikums beobachtet die Medizinstudentin Lena, wie ein erfahrener Chirurg eine komplexe Operation souverän durchführt. Nach der OP erzählt ihr eine Mitstudentin, dass sie selbst nie Chirurgin werden will, weil sie den Anblick von Blut nicht erträgt.",
    questions: [
      {
        question: "Was empfindet Lena gegenüber dem Chirurgen?",
        options: ["Neid", "Bewunderung", "Angst", "Mitleid"],
        correctAnswer: 1,
        explanation: "Die souveräne Durchführung einer komplexen OP weckt Bewunderung für das Können des Chirurgen."
      },
      {
        question: "Was empfindet Lena nach der Beobachtung der OP bezüglich ihrer eigenen Karriere?",
        options: ["Resignation", "Hoffnung", "Schuld", "Verachtung"],
        correctAnswer: 1,
        explanation: "Das Vorbild des Chirurgen gibt Lena Hoffnung, dass auch sie solche Fähigkeiten entwickeln kann."
      },
      {
        question: "Was empfindet die Mitstudentin bezüglich ihrer Einschränkung?",
        options: ["Stolz", "Frustration", "Freude", "Dankbarkeit"],
        correctAnswer: 1,
        explanation: "Die Mitstudentin ist frustriert, dass ihre Empfindlichkeit gegenüber Blut ihre Berufswahl einschränkt."
      },
      {
        question: "Was könnte die Mitstudentin gegenüber Lena empfinden?",
        options: ["Wut", "Neid", "Ekel", "Schuld"],
        correctAnswer: 1,
        explanation: "Die Mitstudentin beneidet Lena, die keine solche Einschränkung hat und frei wählen kann."
      }
    ]
  },
  {
    id: "ee-05",
    scenario: "Tobias hat den MedAT nicht bestanden und erfährt, dass sein Mitbewohner Felix den Test mit einem hervorragenden Ergebnis bestanden hat. Felix versucht, seine Freude zu verbergen, und bietet Tobias an, ihm beim nächsten Mal zu helfen. Tobias gratuliert Felix mit einem gezwungenen Lächeln.",
    questions: [
      {
        question: "Was empfindet Tobias am stärksten?",
        options: ["Wut", "Enttäuschung", "Ekel", "Überraschung"],
        correctAnswer: 1,
        explanation: "Tobias ist vor allem enttäuscht über sein eigenes Scheitern trotz seiner Bemühungen."
      },
      {
        question: "Was empfindet Tobias gegenüber Felix?",
        options: ["Verachtung", "Dankbarkeit", "Neid", "Bewunderung"],
        correctAnswer: 2,
        explanation: "Felix hat geschafft, was Tobias nicht gelungen ist — das löst Neid aus, auch wenn Tobias es nicht zeigen will."
      },
      {
        question: "Warum verbirgt Felix seine Freude?",
        options: ["Er empfindet Schuld", "Er empfindet Angst", "Er empfindet Ekel", "Er empfindet Resignation"],
        correctAnswer: 0,
        explanation: "Felix fühlt sich schuldig, sich zu freuen, während sein Mitbewohner leidet."
      },
      {
        question: "Was empfindet Felix, wenn er Tobias Hilfe anbietet?",
        options: ["Verachtung", "Mitleid", "Überraschung", "Frustration"],
        correctAnswer: 1,
        explanation: "Felix hat Mitgefühl mit Tobias und möchte ihm helfen, seine Enttäuschung zu überwinden."
      },
      {
        question: "Was verbirgt sich hinter Tobias' gezwungenem Lächeln?",
        options: ["Freude", "Scham", "Erleichterung", "Hoffnung"],
        correctAnswer: 1,
        explanation: "Tobias schämt sich für sein Scheitern und versucht, seine wahren Gefühle hinter einem Lächeln zu verbergen."
      }
    ]
  },
  {
    id: "ee-06",
    scenario: "Dr. Berger muss einer Familie mitteilen, dass die Operation ihres Kindes nicht erfolgreich war. Die Mutter bricht in Tränen aus, der Vater steht schweigend da und ballt die Fäuste. Die ältere Schwester des Kindes starrt Dr. Berger vorwurfsvoll an.",
    questions: [
      {
        question: "Was empfindet die Mutter primär?",
        options: ["Wut", "Trauer", "Scham", "Überraschung"],
        correctAnswer: 1,
        explanation: "Die Tränen der Mutter zeigen tiefe Trauer über den Misserfolg der Operation ihres Kindes."
      },
      {
        question: "Was drückt die Körpersprache des Vaters am ehesten aus?",
        options: ["Resignation", "Wut", "Scham", "Neid"],
        correctAnswer: 1,
        explanation: "Die geballten Fäuste bei gleichzeitigem Schweigen deuten auf unterdrückte Wut hin."
      },
      {
        question: "Was empfindet die Schwester gegenüber Dr. Berger?",
        options: ["Bewunderung", "Mitleid", "Verachtung", "Dankbarkeit"],
        correctAnswer: 2,
        explanation: "Der vorwurfsvolle Blick zeigt, dass die Schwester dem Arzt die Schuld gibt und Verachtung empfindet."
      },
      {
        question: "Was empfindet Dr. Berger in dieser Situation?",
        options: ["Gleichgültigkeit", "Schuld", "Stolz", "Neid"],
        correctAnswer: 1,
        explanation: "Auch wenn der Arzt professionell bleibt, empfindet er Schuldgefühle angesichts des Leids der Familie."
      },
      {
        question: "Welches Gefühl teilen alle drei Familienmitglieder?",
        options: ["Angst", "Scham", "Hoffnung", "Frustration"],
        correctAnswer: 0,
        explanation: "Alle drei haben Angst um die Zukunft und das Wohlergehen des Kindes."
      }
    ]
  },
  {
    id: "ee-07",
    scenario: "In der Anatomie-Vorlesung wird die Leistung der besten Studierenden öffentlich gelobt. Klara, die gelobt wird, errötet und schaut verlegen zu Boden. Ihr Freund Jan, der knapp durchgefallen ist, klatscht höflich mit. Die Professorin schaut Jan dabei kurz mitleidig an.",
    questions: [
      {
        question: "Was empfindet Klara beim öffentlichen Lob?",
        options: ["Freude", "Scham", "Angst", "Verachtung"],
        correctAnswer: 0,
        explanation: "Klara freut sich über die Anerkennung, auch wenn sie dabei schüchtern reagiert."
      },
      {
        question: "Warum errötet Klara und schaut zu Boden?",
        options: ["Sie empfindet Ekel", "Sie empfindet Wut", "Sie empfindet Nervosität", "Sie empfindet Schuld"],
        correctAnswer: 2,
        explanation: "Klara ist nervös, weil die öffentliche Aufmerksamkeit ihr unangenehm ist."
      },
      {
        question: "Was empfindet Jan in diesem Moment am stärksten?",
        options: ["Bewunderung", "Neid", "Freude", "Erleichterung"],
        correctAnswer: 1,
        explanation: "Jan beneidet Klara, weil er selbst knapp durchgefallen ist, während sie gelobt wird."
      },
      {
        question: "Was empfindet die Professorin gegenüber Jan?",
        options: ["Verachtung", "Mitleid", "Eifersucht", "Wut"],
        correctAnswer: 1,
        explanation: "Der mitleidige Blick der Professorin zeigt, dass sie Jans schwierige Lage nachempfindet."
      },
      {
        question: "Was könnte Klara gegenüber Jan empfinden?",
        options: ["Verachtung", "Schuld", "Resignation", "Überraschung"],
        correctAnswer: 1,
        explanation: "Klara fühlt sich möglicherweise schuldig, gelobt zu werden, während ihr Freund durchgefallen ist."
      }
    ]
  },
  {
    id: "ee-08",
    scenario: "Auf der Intensivstation pflegt die Krankenschwester Maria seit Wochen einen älteren Patienten, der nun unerwartet genesen ist. Marias Kollegin Petra, deren Patient am selben Tag verstorben ist, sieht Maria freudig die gute Nachricht mit dem Stationsteam teilen.",
    questions: [
      {
        question: "Was empfindet Maria am stärksten?",
        options: ["Stolz", "Erleichterung", "Überraschung", "Scham"],
        correctAnswer: 1,
        explanation: "Nach wochenlanger Pflege überwiegt bei der unerwarteten Genesung die Erleichterung."
      },
      {
        question: "Was empfindet Petra, als sie Marias Freude sieht?",
        options: ["Neid", "Dankbarkeit", "Trauer", "Bewunderung"],
        correctAnswer: 2,
        explanation: "Petras eigener Verlust schmerzt besonders, wenn sie die Freude über die Genesung eines anderen Patienten sieht."
      },
      {
        question: "Welches zusätzliche Gefühl könnte Petra gegenüber sich selbst empfinden?",
        options: ["Stolz", "Schuld", "Hoffnung", "Freude"],
        correctAnswer: 1,
        explanation: "Petra fragt sich möglicherweise, ob sie etwas anders hätte machen können, was Schuldgefühle auslöst."
      },
      {
        question: "Was empfindet Maria, wenn sie von Petras Verlust erfährt?",
        options: ["Scham", "Mitleid", "Verachtung", "Neid"],
        correctAnswer: 1,
        explanation: "Maria empfindet Mitgefühl mit Petra und deren schwerem Tag."
      }
    ]
  },
  {
    id: "ee-09",
    scenario: "Beim Teammeeting in der Klinik schlägt der junge Arzt Tim eine neue Behandlungsmethode vor. Die erfahrene Oberärztin Dr. Stein lehnt den Vorschlag vor allen ab und bezeichnet ihn als naiv. Nach dem Meeting kommt ein Kollege zu Tim und sagt ihm leise, dass er den Vorschlag gut fand.",
    questions: [
      {
        question: "Was empfindet Tim nach Dr. Steins Ablehnung?",
        options: ["Erleichterung", "Scham", "Dankbarkeit", "Hoffnung"],
        correctAnswer: 1,
        explanation: "Als naiv bezeichnet zu werden vor dem gesamten Team löst Scham bei Tim aus."
      },
      {
        question: "Was empfindet Tim gegenüber Dr. Stein?",
        options: ["Bewunderung", "Wut", "Mitleid", "Sehnsucht"],
        correctAnswer: 1,
        explanation: "Tim empfindet Wut darüber, dass seine Idee so herablassend abgetan wurde."
      },
      {
        question: "Was empfindet der Kollege, der Tim leise anspricht?",
        options: ["Neid", "Mitleid", "Ekel", "Resignation"],
        correctAnswer: 1,
        explanation: "Der Kollege hat Mitgefühl mit Tim und möchte ihm nach der öffentlichen Demütigung beistehen."
      },
      {
        question: "Was empfindet Tim durch die leise Unterstützung des Kollegen?",
        options: ["Dankbarkeit", "Verachtung", "Angst", "Schuld"],
        correctAnswer: 0,
        explanation: "Die Unterstützung in einem schwierigen Moment löst Dankbarkeit bei Tim aus."
      },
      {
        question: "Warum spricht der Kollege nur leise und nicht öffentlich?",
        options: ["Aus Verachtung für Tim", "Aus Angst vor Dr. Stein", "Aus Neid auf Tim", "Aus Ekel"],
        correctAnswer: 1,
        explanation: "Der Kollege hat Angst, selbst von Dr. Stein kritisiert zu werden, und traut sich nur leise."
      }
    ]
  },
  {
    id: "ee-10",
    scenario: "Die Medizinstudentin Hanna besucht zum ersten Mal die Pathologie und muss an einer Leichenöffnung teilnehmen. Ihr wird kurz übel, aber sie hält durch. Nach der Veranstaltung erzählt ein Kommilitone prahlerisch, dass ihm die Obduktion gar nichts ausgemacht habe. Ein anderer Kommilitone hat die Veranstaltung vorzeitig verlassen.",
    questions: [
      {
        question: "Was empfindet Hanna während der Leichenöffnung?",
        options: ["Ekel", "Wut", "Neid", "Stolz"],
        correctAnswer: 0,
        explanation: "Die Übelkeit zeigt, dass Hanna primär Ekel bei der Konfrontation mit der Obduktion empfindet."
      },
      {
        question: "Was empfindet Hanna, nachdem sie durchgehalten hat?",
        options: ["Scham", "Trauer", "Stolz", "Neid"],
        correctAnswer: 2,
        explanation: "Trotz der Übelkeit hat Hanna durchgehalten, was ihr ein Gefühl von Stolz gibt."
      },
      {
        question: "Was empfindet Hanna gegenüber dem prahlerischen Kommilitonen?",
        options: ["Bewunderung", "Verachtung", "Dankbarkeit", "Sehnsucht"],
        correctAnswer: 1,
        explanation: "Das Prahlen wirkt auf Hanna unsympathisch und unempathisch, was Verachtung auslöst."
      },
      {
        question: "Was empfindet Hanna gegenüber dem Kommilitonen, der gegangen ist?",
        options: ["Verachtung", "Mitleid", "Wut", "Eifersucht"],
        correctAnswer: 1,
        explanation: "Hanna kennt das unangenehme Gefühl und hat Mitgefühl mit dem Kommilitonen, der es nicht ausgehalten hat."
      },
      {
        question: "Was empfindet der Kommilitone, der vorzeitig gegangen ist?",
        options: ["Erleichterung", "Scham", "Stolz", "Dankbarkeit"],
        correctAnswer: 1,
        explanation: "Der Kommilitone schämt sich, dass er die Situation nicht bewältigen konnte."
      }
    ]
  },
  {
    id: "ee-11",
    scenario: "Professor Hofer gibt die Klausurergebnisse bekannt und lobt die Gesamtleistung des Jahrgangs. Die Studentin Mia, die normalerweise Bestnoten hat, hat diesmal nur knapp bestanden. Ihr Lernpartner Lukas, der sonst schlechter abschneidet, hat diesmal besser abgeschnitten als Mia.",
    questions: [
      {
        question: "Was empfindet Mia bezüglich ihres eigenen Ergebnisses?",
        options: ["Erleichterung", "Enttäuschung", "Freude", "Dankbarkeit"],
        correctAnswer: 1,
        explanation: "Mia ist an Bestnoten gewöhnt und ist enttäuscht über ihr deutlich schlechteres Abschneiden."
      },
      {
        question: "Was empfindet Mia gegenüber Lukas?",
        options: ["Stolz", "Eifersucht", "Mitleid", "Bewunderung"],
        correctAnswer: 1,
        explanation: "Mia empfindet Eifersucht, weil Lukas ausgerechnet jetzt besser abschneidet und ihre Position einnimmt."
      },
      {
        question: "Was empfindet Lukas?",
        options: ["Schuld", "Stolz", "Scham", "Resignation"],
        correctAnswer: 1,
        explanation: "Lukas ist stolz, endlich einmal besser abgeschnitten zu haben als sonst."
      },
      {
        question: "Was könnte Lukas gegenüber Mia empfinden?",
        options: ["Verachtung", "Schadenfreude", "Mitleid", "Angst"],
        correctAnswer: 2,
        explanation: "Lukas kennt das Gefühl, schlechter abzuschneiden, und hat deshalb Mitgefühl mit Mia."
      },
      {
        question: "Welches Gefühl versucht Mia vor Lukas zu verbergen?",
        options: ["Dankbarkeit", "Freude", "Neid", "Hoffnung"],
        correctAnswer: 2,
        explanation: "Mia will nicht zugeben, dass sie Lukas um sein besseres Ergebnis beneidet."
      }
    ]
  },
  {
    id: "ee-12",
    scenario: "Während des Pflegepraktikums muss der Student Erik einem Patienten beim Waschen helfen. Der Patient, ein älterer Herr, weint dabei still vor sich hin und sagt, er schäme sich, so hilflos zu sein. Eriks Praxisanleiterin beobachtet die Szene vom Türrahmen aus.",
    questions: [
      {
        question: "Was empfindet der Patient am stärksten?",
        options: ["Wut", "Scham", "Neid", "Frustration"],
        correctAnswer: 1,
        explanation: "Der Patient sagt selbst, dass er sich für seine Hilflosigkeit schämt."
      },
      {
        question: "Was empfindet Erik in dieser Situation?",
        options: ["Ekel", "Mitleid", "Verachtung", "Stolz"],
        correctAnswer: 1,
        explanation: "Erik empfindet Mitgefühl mit dem Patienten, der unter seiner Hilflosigkeit leidet."
      },
      {
        question: "Welches zusätzliche Gefühl könnte Erik haben?",
        options: ["Nervosität", "Eifersucht", "Verachtung", "Neid"],
        correctAnswer: 0,
        explanation: "Erik ist nervös, weil er mit einer emotional schwierigen Situation umgehen muss und beobachtet wird."
      },
      {
        question: "Was empfindet die Praxisanleiterin gegenüber Erik?",
        options: ["Verachtung", "Angst", "Hoffnung", "Wut"],
        correctAnswer: 2,
        explanation: "Die Praxisanleiterin beobachtet die Szene und hofft, dass Erik die Situation empathisch meistert."
      }
    ]
  },
  {
    id: "ee-13",
    scenario: "Die Lerngruppe trifft sich zur Vorbereitung auf die Physiologie-Prüfung. Sarah hat ein perfektes Zusammenfassungsskript erstellt und teilt es mit allen. Jonas nutzt Sarahs Skript, besteht die Prüfung mit Bestnote und erwähnt in einem Gespräch mit Kommilitonen nur seinen eigenen Fleiß. Sarah erfährt davon durch eine gemeinsame Freundin.",
    questions: [
      {
        question: "Was empfindet Sarah, als sie davon erfährt?",
        options: ["Erleichterung", "Wut", "Hoffnung", "Nervosität"],
        correctAnswer: 1,
        explanation: "Sarah ist wütend, weil Jonas ihren Beitrag verschweigt und sich allein den Erfolg zuschreibt."
      },
      {
        question: "Welches Gefühl begleitet Sarahs Wut?",
        options: ["Scham", "Enttäuschung", "Ekel", "Sehnsucht"],
        correctAnswer: 1,
        explanation: "Sarah ist enttäuscht von Jonas, weil sie ihm vertraut und geholfen hat."
      },
      {
        question: "Was empfindet die gemeinsame Freundin, die es Sarah erzählt?",
        options: ["Dankbarkeit", "Verachtung", "Freude", "Nervosität"],
        correctAnswer: 1,
        explanation: "Die Freundin empfindet Verachtung gegenüber Jonas' Verhalten, das sie als unfair betrachtet."
      },
      {
        question: "Was empfindet Jonas beim Erzählen seiner Leistung?",
        options: ["Schuld", "Stolz", "Angst", "Trauer"],
        correctAnswer: 1,
        explanation: "Jonas sonnt sich in seinem Erfolg und empfindet Stolz, ohne an Sarahs Beitrag zu denken."
      },
      {
        question: "Was könnte Jonas empfinden, wenn er erfährt, dass Sarah Bescheid weiß?",
        options: ["Freude", "Stolz", "Scham", "Bewunderung"],
        correctAnswer: 2,
        explanation: "Wenn Jonas erkennt, dass sein Verhalten aufgedeckt wurde, empfindet er Scham."
      }
    ]
  },
  {
    id: "ee-14",
    scenario: "Beim Auswahlgespräch für einen begehrten Studienplatz sitzt der Bewerber Fabian neben einer Mitbewerberin, die ruhig und selbstsicher wirkt. Fabian merkt, dass seine Hände zittern. Nach dem Gespräch erfährt er, dass die selbstsichere Mitbewerberin den Platz bekommen hat, obwohl sie weniger Erfahrung hatte.",
    questions: [
      {
        question: "Was empfindet Fabian vor dem Gespräch?",
        options: ["Freude", "Nervosität", "Stolz", "Resignation"],
        correctAnswer: 1,
        explanation: "Das Zittern der Hände ist ein klares Zeichen von Nervosität vor dem wichtigen Gespräch."
      },
      {
        question: "Was empfindet Fabian gegenüber der Mitbewerberin vor dem Gespräch?",
        options: ["Mitleid", "Neid", "Dankbarkeit", "Bewunderung"],
        correctAnswer: 1,
        explanation: "Die scheinbare Gelassenheit der Mitbewerberin weckt Neid bei dem nervösen Fabian."
      },
      {
        question: "Was empfindet Fabian nach der Absage?",
        options: ["Erleichterung", "Frustration", "Dankbarkeit", "Hoffnung"],
        correctAnswer: 1,
        explanation: "Fabian empfindet Frustration, da trotz seiner größeren Erfahrung die andere Bewerberin bevorzugt wurde."
      },
      {
        question: "Welches Gefühl kommt bei Fabian bezüglich der Entscheidung hinzu?",
        options: ["Schuld", "Wut", "Sehnsucht", "Scham"],
        correctAnswer: 1,
        explanation: "Fabian empfindet Wut über die aus seiner Sicht ungerechte Entscheidung."
      }
    ]
  },
  {
    id: "ee-15",
    scenario: "Die Medizinstudentin Clara macht ein Auslandssemester und vermisst ihre Familie sehr. Bei einem Videoanruf sieht sie, dass ihre jüngere Schwester ihr altes Zimmer komplett umgestaltet hat. Ihre Mutter erwähnt beiläufig, dass das Haus ohne Clara viel ruhiger sei.",
    questions: [
      {
        question: "Was empfindet Clara bezüglich ihres Auslandssemesters generell?",
        options: ["Ekel", "Sehnsucht", "Verachtung", "Stolz"],
        correctAnswer: 1,
        explanation: "Clara vermisst ihre Familie, was sich als Sehnsucht nach dem Zuhause äußert."
      },
      {
        question: "Was empfindet Clara, als sie das umgestaltete Zimmer sieht?",
        options: ["Freude", "Trauer", "Dankbarkeit", "Hoffnung"],
        correctAnswer: 1,
        explanation: "Das umgestaltete Zimmer symbolisiert, dass ihr Platz zu Hause nicht mehr auf sie wartet, was Trauer auslöst."
      },
      {
        question: "Was empfindet Clara bei der Bemerkung der Mutter?",
        options: ["Stolz", "Erleichterung", "Enttäuschung", "Schuld"],
        correctAnswer: 2,
        explanation: "Die Bemerkung klingt, als ob Claras Abwesenheit willkommen sei, was Enttäuschung verursacht."
      },
      {
        question: "Was empfindet die jüngere Schwester?",
        options: ["Schuld", "Freude", "Angst", "Resignation"],
        correctAnswer: 1,
        explanation: "Die Schwester freut sich über den gewonnenen Raum und die Möglichkeit, ihn nach ihren Wünschen zu gestalten."
      },
      {
        question: "Was könnte die Mutter tatsächlich empfinden, trotz ihrer Bemerkung?",
        options: ["Verachtung", "Neid", "Sehnsucht", "Frustration"],
        correctAnswer: 2,
        explanation: "Trotz der beiläufigen Bemerkung vermisst die Mutter Clara wahrscheinlich und sehnt sich nach ihrer Anwesenheit."
      }
    ]
  },
  {
    id: "ee-16",
    scenario: "Im PJ-Tertial Innere Medizin muss der Student Kevin die Anamnese eines Patienten aufnehmen. Der Patient, ein Manager, behandelt Kevin herablassend und fragt, ob er nicht einen richtigen Arzt sprechen könne. Die anwesende Ärztin Dr. Gruber greift nicht ein.",
    questions: [
      {
        question: "Was empfindet Kevin gegenüber dem Patienten?",
        options: ["Bewunderung", "Wut", "Dankbarkeit", "Hoffnung"],
        correctAnswer: 1,
        explanation: "Die herablassende Behandlung und die Abwertung seiner Rolle als Student lösen Wut bei Kevin aus."
      },
      {
        question: "Welches Gefühl begleitet Kevins Wut?",
        options: ["Stolz", "Scham", "Freude", "Neid"],
        correctAnswer: 1,
        explanation: "Kevin schämt sich, weil der Patient ihn vor der Ärztin als inkompetent darstellt."
      },
      {
        question: "Was empfindet Kevin gegenüber Dr. Gruber?",
        options: ["Dankbarkeit", "Bewunderung", "Enttäuschung", "Freude"],
        correctAnswer: 2,
        explanation: "Kevin ist enttäuscht, dass Dr. Gruber nicht eingreift und ihn in der Situation allein lässt."
      },
      {
        question: "Was könnte Dr. Gruber empfinden?",
        options: ["Freude", "Nervosität", "Neid", "Resignation"],
        correctAnswer: 1,
        explanation: "Dr. Gruber ist unsicher, wie sie am besten eingreifen soll, was Nervosität verursacht."
      },
      {
        question: "Was empfindet der Patient?",
        options: ["Angst", "Verachtung", "Schuld", "Trauer"],
        correctAnswer: 0,
        explanation: "Hinter der herablassenden Fassade des Managers steckt Angst vor der eigenen Erkrankung und dem Kontrollverlust."
      }
    ]
  },
  {
    id: "ee-17",
    scenario: "Auf dem Campus sieht die Studentin Nora ihre beste Freundin Amelie mit einer neuen Lerngruppe lachen. Nora wurde nicht eingeladen und wusste nichts von der Gruppe. Als sie Amelie später darauf anspricht, sagt Amelie, sie habe es vergessen. Am Abend postet Amelie ein Gruppenfoto mit dem Kommentar 'Bestes Lernteam ever'.",
    questions: [
      {
        question: "Was empfindet Nora, als sie Amelie mit der neuen Gruppe sieht?",
        options: ["Freude", "Eifersucht", "Dankbarkeit", "Stolz"],
        correctAnswer: 1,
        explanation: "Nora fühlt Eifersucht, weil ihre beste Freundin ohne sie eine neue Gruppe gefunden hat."
      },
      {
        question: "Was empfindet Nora bei Amelies Erklärung?",
        options: ["Erleichterung", "Enttäuschung", "Bewunderung", "Hoffnung"],
        correctAnswer: 1,
        explanation: "Nora glaubt nicht, dass Amelie es einfach vergessen hat, und ist enttäuscht über die Ausrede."
      },
      {
        question: "Was empfindet Nora beim Sehen des Gruppenfotos?",
        options: ["Dankbarkeit", "Resignation", "Wut", "Stolz"],
        correctAnswer: 2,
        explanation: "Das öffentliche Posting nach Amelies Aussage, sie habe es vergessen, macht Nora wütend."
      },
      {
        question: "Was könnte Amelie tatsächlich empfinden?",
        options: ["Schuld", "Stolz", "Angst", "Ekel"],
        correctAnswer: 0,
        explanation: "Amelie fühlt sich vermutlich schuldig, Nora ausgeschlossen zu haben, und versucht es herunterzuspielen."
      }
    ]
  },
  {
    id: "ee-18",
    scenario: "Beim Notarzteinsatz rettet das Team um Dr. Keller einem Unfallopfer das Leben. Auf der Rückfahrt ist das Team euphorisch. Ein junger Sanitäter, der seinen ersten Einsatz hatte, sitzt still da. Dr. Keller bemerkt seinen Blick und legt ihm kurz die Hand auf die Schulter.",
    questions: [
      {
        question: "Was empfindet das Team auf der Rückfahrt?",
        options: ["Erleichterung", "Scham", "Trauer", "Resignation"],
        correctAnswer: 0,
        explanation: "Nach der erfolgreichen Rettung empfindet das Team vor allem Erleichterung."
      },
      {
        question: "Was empfindet der junge Sanitäter?",
        options: ["Freude", "Überraschung", "Stolz", "Angst"],
        correctAnswer: 1,
        explanation: "Der erste Einsatz mit einer lebensbedrohlichen Situation hinterlässt tiefe Überwältigung und Überraschung über die Intensität."
      },
      {
        question: "Welches zusätzliche Gefühl hat der junge Sanitäter?",
        options: ["Neid", "Nervosität", "Verachtung", "Eifersucht"],
        correctAnswer: 1,
        explanation: "Die Nachwirkungen des intensiven Ersteinsatzes äußern sich als Nervosität und innere Anspannung."
      },
      {
        question: "Was drückt Dr. Kellers Geste aus?",
        options: ["Verachtung", "Mitleid", "Wut", "Neid"],
        correctAnswer: 1,
        explanation: "Dr. Keller erkennt die Belastung des jungen Sanitäters und zeigt durch die Geste Mitgefühl."
      },
      {
        question: "Was empfindet der junge Sanitäter nach Dr. Kellers Geste?",
        options: ["Wut", "Ekel", "Dankbarkeit", "Frustration"],
        correctAnswer: 2,
        explanation: "Die empathische Geste des erfahrenen Arztes löst Dankbarkeit beim jungen Sanitäter aus."
      }
    ]
  },
  {
    id: "ee-19",
    scenario: "Die Studentin Vera hat heimlich eine Forschungsarbeit bei einem renommierten Journal eingereicht. Als sie die Zusage erhält, erzählt sie es zuerst ihrem Professor, der daraufhin schweigt und dann sagt, dass er normalerweise bei solchen Einreichungen als Co-Autor aufgeführt wird. Vera hatte seine Betreuung bei der Arbeit genutzt.",
    questions: [
      {
        question: "Was empfindet Vera beim Erhalt der Zusage?",
        options: ["Angst", "Scham", "Stolz", "Resignation"],
        correctAnswer: 2,
        explanation: "Die Annahme ihrer Forschungsarbeit bei einem renommierten Journal macht Vera stolz."
      },
      {
        question: "Was empfindet Vera nach der Reaktion des Professors?",
        options: ["Schuld", "Freude", "Neid", "Bewunderung"],
        correctAnswer: 0,
        explanation: "Vera erkennt, dass sie den Beitrag des Professors nicht gewürdigt hat, und fühlt sich schuldig."
      },
      {
        question: "Was empfindet der Professor?",
        options: ["Freude", "Wut", "Sehnsucht", "Hoffnung"],
        correctAnswer: 1,
        explanation: "Der Professor ist verärgert, dass seine Betreuungsleistung nicht anerkannt wurde."
      },
      {
        question: "Welches Gefühl begleitet die Wut des Professors?",
        options: ["Überraschung", "Stolz", "Neid", "Erleichterung"],
        correctAnswer: 0,
        explanation: "Der Professor ist überrascht, dass Vera die Einreichung ohne sein Wissen vorgenommen hat."
      },
      {
        question: "Was könnte der Professor trotz allem empfinden?",
        options: ["Ekel", "Resignation", "Stolz", "Eifersucht"],
        correctAnswer: 2,
        explanation: "Trotz des Konflikts ist der Professor vermutlich auch stolz auf die Leistung seiner Studentin."
      }
    ]
  },
  {
    id: "ee-20",
    scenario: "Am letzten Tag des Semesters verabschiedet sich die beliebte Tutorin Hannah von ihrer Lerngruppe. Die Studierenden haben ihr ein selbstgemaltes Bild geschenkt. Ein Student, der während des Semesters oft Konflikte mit Hannah hatte, steht abseits und beobachtet die Szene. Nach der Verabschiedung kommt er zu ihr und bedankt sich leise.",
    questions: [
      {
        question: "Was empfindet Hannah beim Erhalt des Geschenks?",
        options: ["Überraschung", "Angst", "Verachtung", "Resignation"],
        correctAnswer: 0,
        explanation: "Das persönliche Geschenk überrascht Hannah und zeigt ihr, wie sehr die Gruppe sie schätzt."
      },
      {
        question: "Welches Gefühl begleitet Hannahs Überraschung?",
        options: ["Ekel", "Dankbarkeit", "Neid", "Schuld"],
        correctAnswer: 1,
        explanation: "Hannah ist dankbar für die Wertschätzung und die liebevolle Geste der Studierenden."
      },
      {
        question: "Was empfindet der Student, der abseits steht?",
        options: ["Stolz", "Neid", "Reue", "Freude"],
        correctAnswer: 2,
        explanation: "Der Student bereut die Konflikte und erkennt rückblickend Hannahs Engagement, was Reue auslöst."
      },
      {
        question: "Was empfindet der Student, als er sich leise bedankt?",
        options: ["Wut", "Scham", "Verachtung", "Neid"],
        correctAnswer: 1,
        explanation: "Der Student schämt sich für sein früheres Verhalten und bedankt sich deshalb leise statt öffentlich."
      },
      {
        question: "Was empfindet Hannah, als der schwierige Student sich bedankt?",
        options: ["Verachtung", "Erleichterung", "Angst", "Resignation"],
        correctAnswer: 1,
        explanation: "Die unerwartete Versöhnung bringt Hannah Erleichterung und zeigt, dass die Konflikte überwunden sind."
      }
    ]
  }
];
