/**
 * Emotionen regulieren — Set 3 (24 Aufgaben)
 * Nach offiziellem MedAT-Vorbild (IB ER 26.pdf):
 * - Situationsbeschreibung mit konkreten Rahmenbedingungen und Zielen
 * - 4 Strategien in Ich-Form (Vorsätze), genau eine mit Score 3
 * - Adaptive Strategien (Reappraisal, Akzeptanz, Situationsmodifikation) = Score 3
 * - Teiladaptiv = 2, Maladaptiv aber nachvollziehbar = 1, Klar maladaptiv = 0
 */

import type { EmotionenRegulierenTask } from "./sekDataNew";

export const emotionenRegulierenSet3: EmotionenRegulierenTask[] = [
  // ─── Difficulty 1 (leicht): 8 Aufgaben ─────────────────────────
  {
    id: "er-3-01",
    difficulty: 1,
    situation:
      "Katharina arbeitet seit zwei Jahren als Ergotherapeutin in einer Rehabilitationsklinik. Heute hat ihre Vorgesetzte ihr vor dem gesamten Team mitgeteilt, dass ihre Therapiepläne zu unstrukturiert seien. Katharina weiß, dass sie in den letzten Wochen aufgrund hoher Patientenzahlen weniger Zeit für die Dokumentation hatte. Sie möchte professionell bleiben und ihre Arbeit verbessern, ohne sich von der öffentlichen Kritik entmutigen zu lassen.",
    emotion: "Scham und Frustration",
    ziel: "Professionell bleiben und die Kritik konstruktiv nutzen, ohne sich entmutigen zu lassen.",
    strategien: [
      {
        text: "Ich sage mir, dass meine Vorgesetzte mich vor allen bloßstellen wollte, und beschwere mich bei der Geschäftsführung über ihren Führungsstil.",
        score: 0,
      },
      {
        text: "Ich bitte meine Vorgesetzte nach der Besprechung um ein Einzelgespräch und sage ihr, dass ich die Kritik annehme und gemeinsam eine Lösung für die hohe Arbeitsbelastung finden möchte.",
        score: 3,
      },
      {
        text: "Ich erzähle einer Kollegin, wie unfair die öffentliche Kritik war, und frage sie, ob sie das auch so empfunden hat.",
        score: 1,
      },
      {
        text: "Ich versuche, die Kritik nicht persönlich zu nehmen, und arbeite ab sofort abends länger, um die Dokumentation nachzuholen.",
        score: 2,
      },
    ],
  },
  {
    id: "er-3-02",
    difficulty: 1,
    situation:
      "Markus ist Student der Wirtschaftswissenschaften und hat gerade erfahren, dass sein bester Freund ohne ihn zu einem Festival eingeladen wurde, zu dem Markus schon seit Monaten hinwollte. Markus fühlt sich übergangen und ausgeschlossen. Er möchte die Freundschaft nicht gefährden, aber seine Gefühle auch nicht einfach ignorieren.",
    emotion: "Verletzung und Eifersucht",
    ziel: "Die Freundschaft erhalten und die eigene Enttäuschung angemessen verarbeiten.",
    strategien: [
      {
        text: "Ich sage meinem Freund in einem ruhigen Moment, dass ich gerne mitgekommen wäre, und frage ihn, ob er beim nächsten Mal an mich denkt.",
        score: 3,
      },
      {
        text: "Ich distanziere mich von meinem Freund und suche mir neue Freunde, auf die ich mich verlassen kann.",
        score: 0,
      },
      {
        text: "Ich versuche, mir nichts anmerken zu lassen, und tue so, als würde es mich nicht stören.",
        score: 2,
      },
      {
        text: "Ich schreibe meinem Freund eine lange Nachricht, in der ich ihm vorwerfe, ein schlechter Freund zu sein.",
        score: 1,
      },
    ],
  },
  {
    id: "er-3-03",
    difficulty: 1,
    situation:
      "Sophie ist Lehrerin an einer Volksschule. Ein Elternteil hat ihr per E-Mail vorgeworfen, sie würde sein Kind ungerecht benoten. Sophie hat die Benotung sorgfältig und nach klaren Kriterien vorgenommen. Sie hat morgen einen Termin mit dem Elternteil und möchte das Gespräch sachlich und lösungsorientiert führen.",
    emotion: "Ärger und Ungerechtigkeitsgefühl",
    ziel: "Das Elterngespräch sachlich und souverän führen.",
    strategien: [
      {
        text: "Ich bereite die Bewertungskriterien und konkrete Beispiele vor und sage mir, dass der Elternteil vermutlich aus Sorge um sein Kind so reagiert hat.",
        score: 3,
      },
      {
        text: "Ich bitte eine Kollegin, beim Gespräch dabei zu sein, damit jemand bezeugen kann, dass der Elternteil unverschämt ist.",
        score: 1,
      },
      {
        text: "Ich schreibe dem Elternteil eine sachliche Antwortmail und sage den persönlichen Termin ab.",
        score: 2,
      },
      {
        text: "Ich ignoriere die E-Mail und warte ab, ob der Elternteil sich wieder beruhigt.",
        score: 0,
      },
    ],
  },
  {
    id: "er-3-04",
    difficulty: 1,
    situation:
      "Florian ist begeisterter Hobbysportler und hat sich beim Training das Kreuzband gerissen. Der Arzt hat ihm mitgeteilt, dass er mindestens sechs Monate keinen Sport treiben darf. Sport ist für Florian das wichtigste Ventil gegen Alltagsstress. Er möchte trotz der Verletzung psychisch stabil bleiben und den Heilungsprozess aktiv unterstützen.",
    emotion: "Traurigkeit und Hilflosigkeit",
    ziel: "Psychisch stabil bleiben und den Heilungsprozess aktiv unterstützen.",
    strategien: [
      {
        text: "Ich sage mir, dass die Pause mir die Möglichkeit gibt, Oberkörpertraining und neue Entspannungstechniken auszuprobieren, und erstelle mir einen Reha-Plan.",
        score: 3,
      },
      {
        text: "Ich trainiere trotz der Verletzung weiter, weil ich ohne Sport nicht funktionieren kann.",
        score: 0,
      },
      {
        text: "Ich versuche, nicht an Sport zu denken, und lenke mich mit Serien und Videospielen ab.",
        score: 1,
      },
      {
        text: "Ich erzähle meinen Freunden von der Verletzung und lasse mir von ihnen Mut zusprechen.",
        score: 2,
      },
    ],
  },
  {
    id: "er-3-05",
    difficulty: 1,
    situation:
      "Nina hat gerade ihre Führerscheinprüfung nicht bestanden, obwohl sie sich sicher war, gut vorbereitet zu sein. Der Fahrprüfer hat ihr gesagt, sie sei an einer Kreuzung zu zögerlich gewesen. Nina braucht den Führerschein dringend für ihren neuen Arbeitsweg. Sie möchte sich schnellstmöglich auf den nächsten Versuch vorbereiten.",
    emotion: "Enttäuschung und Selbstzweifel",
    ziel: "Sich motiviert und gezielt auf den nächsten Prüfungsversuch vorbereiten.",
    strategien: [
      {
        text: "Ich sage mir, dass viele Menschen die Prüfung beim ersten Mal nicht bestehen, und vereinbare mit meiner Fahrlehrerin gezielte Übungsstunden für Kreuzungssituationen.",
        score: 3,
      },
      {
        text: "Ich beschwere mich bei der Fahrschule über den Prüfer, weil er zu streng bewertet hat.",
        score: 0,
      },
      {
        text: "Ich melde mich so schnell wie möglich zur nächsten Prüfung an, ohne zusätzliche Übungsstunden zu nehmen.",
        score: 2,
      },
      {
        text: "Ich erzähle meiner Familie davon und lasse mich von ihnen trösten.",
        score: 1,
      },
    ],
  },
  {
    id: "er-3-06",
    difficulty: 1,
    situation:
      "Thomas ist Koch in einem gehobenen Restaurant. Während des Abendservices hat er versehentlich ein Gericht mit einer falschen Zutat zubereitet, die bei einem Gast eine allergische Reaktion hätte auslösen können. Ein Kollege hat den Fehler rechtzeitig bemerkt. Thomas ist erschrocken über die möglichen Konsequenzen. Er möchte sicherstellen, dass so etwas nie wieder passiert.",
    emotion: "Erschrecken und Schuldgefühle",
    ziel: "Aus dem Fehler lernen und sicherstellen, dass er sich nicht wiederholt.",
    strategien: [
      {
        text: "Ich bedanke mich bei meinem Kollegen, analysiere, wie der Fehler passiert ist, und schlage dem Küchenchef ein Kontrollsystem für Allergene vor.",
        score: 3,
      },
      {
        text: "Ich versuche, den Vorfall schnell zu vergessen, weil zum Glück nichts passiert ist.",
        score: 0,
      },
      {
        text: "Ich erzähle dem Küchenchef von dem Fehler und entschuldige mich mehrfach.",
        score: 2,
      },
      {
        text: "Ich mache mir den ganzen Abend Vorwürfe und kann mich kaum noch auf die Arbeit konzentrieren.",
        score: 1,
      },
    ],
  },
  {
    id: "er-3-07",
    difficulty: 1,
    situation:
      "Lena ist Studentin und teilt sich eine Wohnung mit zwei Mitbewohnerinnen. Seit Wochen halten sich die anderen nicht an den Putzplan, und die Küche ist ständig schmutzig. Lena hat das Gefühl, als Einzige für Ordnung zu sorgen. Sie möchte das Problem lösen, ohne die Wohnatmosphäre zu vergiften.",
    emotion: "Ärger und Genervtheit",
    ziel: "Eine faire Lösung finden, ohne das Zusammenleben zu belasten.",
    strategien: [
      {
        text: "Ich putze ab sofort nur noch mein eigenes Geschirr und lasse den Rest stehen, bis die anderen es merken.",
        score: 1,
      },
      {
        text: "Ich schlage ein gemeinsames WG-Treffen vor, bei dem wir den Putzplan überarbeiten und konkrete Konsequenzen vereinbaren.",
        score: 3,
      },
      {
        text: "Ich schreibe eine wütende Nachricht in die WG-Gruppe und drohe mit Auszug.",
        score: 0,
      },
      {
        text: "Ich putze weiterhin alles selbst, um Streit zu vermeiden.",
        score: 2,
      },
    ],
  },
  {
    id: "er-3-08",
    difficulty: 1,
    situation:
      "David hat sich auf eine Beförderung beworben, die stattdessen einem weniger erfahrenen Kollegen gegeben wurde. Sein Chef hat ihm gesagt, dass er fachlich sehr gut sei, aber an seinen Führungskompetenzen arbeiten müsse. David möchte langfristig aufsteigen und die Enttäuschung produktiv nutzen.",
    emotion: "Enttäuschung und Neid",
    ziel: "Die Enttäuschung produktiv nutzen und langfristig aufsteigen.",
    strategien: [
      {
        text: "Ich sage mir, dass das Feedback eine konkrete Chance ist, gezielt an meinen Führungskompetenzen zu arbeiten, und bitte meinen Chef um ein Mentoring-Programm.",
        score: 3,
      },
      {
        text: "Ich suche mir eine neue Stelle, weil meine Leistung in dieser Firma offensichtlich nicht anerkannt wird.",
        score: 0,
      },
      {
        text: "Ich gratuliere meinem Kollegen, auch wenn mir dabei nicht wohl ist, und versuche weiterzumachen wie bisher.",
        score: 2,
      },
      {
        text: "Ich erzähle anderen Kolleg:innen, dass die Entscheidung ungerecht war.",
        score: 1,
      },
    ],
  },

  // ─── Difficulty 2 (mittel): 8 Aufgaben ─────────────────────────
  {
    id: "er-3-09",
    difficulty: 2,
    situation:
      "Johanna ist Ärztin in der Notaufnahme. Während einer Nachtschicht wird ein junger Patient eingeliefert, der bei einem Verkehrsunfall schwer verletzt wurde. Trotz aller Bemühungen verstirbt der Patient. Johanna muss anschließend die Familie informieren. Sie ist emotional erschüttert, muss aber in einer Stunde den nächsten Patienten behandeln. Sie möchte professionell handeln und gleichzeitig ihre eigene Belastung anerkennen.",
    emotion: "Trauer und emotionale Erschöpfung",
    ziel: "Professionell handeln und gleichzeitig die eigene emotionale Belastung anerkennen.",
    strategien: [
      {
        text: "Ich informiere die Familie einfühlsam, nehme mir danach fünf Minuten, um kurz durchzuatmen, und sage mir, dass ich alles Mögliche getan habe. Ich plane für morgen ein Gespräch mit dem psychologischen Dienst.",
        score: 3,
      },
      {
        text: "Ich bitte einen Kollegen, die Familie zu informieren, weil ich das emotional nicht schaffen kann.",
        score: 1,
      },
      {
        text: "Ich verdränge meine Gefühle und arbeite einfach weiter, um nicht daran denken zu müssen.",
        score: 0,
      },
      {
        text: "Ich informiere die Familie sachlich und professionell und versuche, nicht zu viel Mitgefühl zu zeigen, um mich selbst zu schützen.",
        score: 2,
      },
    ],
  },
  {
    id: "er-3-10",
    difficulty: 2,
    situation:
      "Andreas ist Familienvater und hat gerade erfahren, dass seine Firma Kurzarbeit angemeldet hat. Sein Gehalt wird um 30 Prozent gekürzt. Seine Frau ist in Karenz und sie haben zwei kleine Kinder. Andreas macht sich große Sorgen um die Finanzen, möchte aber seine Familie nicht beunruhigen und gleichzeitig aktiv nach Lösungen suchen.",
    emotion: "Existenzangst und Sorge",
    ziel: "Aktiv nach Lösungen suchen und die Familie nicht unnötig beunruhigen.",
    strategien: [
      {
        text: "Ich spreche offen mit meiner Frau über die Situation, ohne zu dramatisieren, und wir erstellen gemeinsam einen Sparplan und ich erkundige mich nach Fördermöglichkeiten.",
        score: 3,
      },
      {
        text: "Ich verschweige die Kurzarbeit vor meiner Frau und versuche, nebenbei Geld zu verdienen.",
        score: 0,
      },
      {
        text: "Ich erzähle meiner Frau von der Situation und sage ihr, dass sie sich keine Sorgen machen soll, weil ich alles im Griff habe.",
        score: 2,
      },
      {
        text: "Ich mache mir abends Sorgen und recherchiere stundenlang im Internet nach neuen Jobs, was mich noch ängstlicher macht.",
        score: 1,
      },
    ],
  },
  {
    id: "er-3-11",
    difficulty: 2,
    situation:
      "Christina ist ehrenamtliche Trainerin einer Mädchenfußballmannschaft. Zwei Elternteile haben sich bei der Vereinsleitung über ihre Trainingsmethoden beschwert, obwohl die Mannschaft unter ihr deutliche Fortschritte gemacht hat. Christina fühlt sich hintergangen, weil die Eltern nicht zuerst mit ihr gesprochen haben. Sie möchte ihr Ehrenamt weiterführen und die Situation klären.",
    emotion: "Wut und Vertrauensbruch",
    ziel: "Die Situation klären und das Ehrenamt motiviert weiterführen.",
    strategien: [
      {
        text: "Ich stelle die Eltern bei der nächsten Teamsitzung zur Rede und verlange eine Entschuldigung.",
        score: 0,
      },
      {
        text: "Ich sage mir, dass die Eltern aus Sorge um ihre Kinder gehandelt haben, bitte die Vereinsleitung um ein gemeinsames Gespräch und bereite sachliche Argumente vor.",
        score: 3,
      },
      {
        text: "Ich drohe mit meinem Rücktritt, damit die Vereinsleitung merkt, wie wichtig ich bin.",
        score: 1,
      },
      {
        text: "Ich trainiere die Mannschaft weiter und ignoriere die Beschwerden, weil die Ergebnisse für sich sprechen.",
        score: 2,
      },
    ],
  },
  {
    id: "er-3-12",
    difficulty: 2,
    situation:
      "Maximilian ist Informatiker und arbeitet seit Monaten an einem wichtigen Projekt. Bei der heutigen Präsentation vor dem Management hat sein Teamleiter die Ergebnisse als eigene Leistung dargestellt, ohne Maximilian auch nur zu erwähnen. Maximilian ist wütend und enttäuscht. Er braucht aber eine gute Referenz von seinem Teamleiter für eine geplante Bewerbung.",
    emotion: "Wut und Enttäuschung",
    ziel: "Anerkennung für die eigene Arbeit erhalten, ohne die wichtige Referenz zu gefährden.",
    strategien: [
      {
        text: "Ich bitte meinen Teamleiter um ein Vier-Augen-Gespräch und sage ihm ruhig, dass ich mir wünsche, bei künftigen Präsentationen namentlich genannt zu werden, weil mir Sichtbarkeit für meine Karriere wichtig ist.",
        score: 3,
      },
      {
        text: "Ich schreibe eine E-Mail an das Management, in der ich klarstelle, dass die Ergebnisse meine Arbeit waren.",
        score: 0,
      },
      {
        text: "Ich sage mir, dass mein Teamleiter das nächste Mal bestimmt fairer sein wird, und warte ab.",
        score: 2,
      },
      {
        text: "Ich beschwere mich bei Kolleg:innen über das Verhalten des Teamleiters.",
        score: 1,
      },
    ],
  },
  {
    id: "er-3-13",
    difficulty: 2,
    situation:
      "Maria ist Psychologiestudentin und hat ein Praktikum in einer psychiatrischen Klinik begonnen. Ein Patient hat ihr im Therapiesetting sehr belastende Details aus seiner Kindheit erzählt, die Maria an eigene schwierige Erfahrungen erinnern. Sie fühlt sich überfordert, muss aber in der nächsten Stunde einen weiteren Patienten betreuen. Sie möchte langfristig in diesem Berufsfeld arbeiten.",
    emotion: "Überforderung und aufgewühlte eigene Erinnerungen",
    ziel: "Professionelle Distanz wahren und langfristig im Berufsfeld bestehen.",
    strategien: [
      {
        text: "Ich nehme mir eine kurze Pause, um mich zu sammeln, und spreche noch heute mit meiner Supervisorin über die Situation und die aufgekommenen eigenen Erinnerungen.",
        score: 3,
      },
      {
        text: "Ich verdränge meine Gefühle und konzentriere mich voll auf den nächsten Patienten.",
        score: 1,
      },
      {
        text: "Ich sage meiner Praktikumsbetreuerin, dass ich für den Rest des Tages keine Patienten mehr betreuen kann.",
        score: 2,
      },
      {
        text: "Ich sage mir, dass ich nicht für diesen Beruf geeignet bin, wenn mich solche Geschichten so mitnehmen.",
        score: 0,
      },
    ],
  },
  {
    id: "er-3-14",
    difficulty: 2,
    situation:
      "Robert ist Vater eines 16-jährigen Sohnes. Er hat zufällig herausgefunden, dass sein Sohn die Schule schwänzt und stattdessen mit Freunden in einem Park abhängt. Roberts Frau meint, er solle sich beruhigen, bevor er mit dem Sohn spricht. Robert ist aber wütend und will sofort handeln. Er möchte verhindern, dass sein Sohn noch mehr Unterricht verpasst, ohne die Beziehung zu ihm zu beschädigen.",
    emotion: "Wut und Enttäuschung",
    ziel: "Das Verhalten des Sohnes korrigieren, ohne die Vater-Sohn-Beziehung zu beschädigen.",
    strategien: [
      {
        text: "Ich höre auf den Rat meiner Frau, warte bis ich ruhig bin, und führe dann ein offenes Gespräch mit meinem Sohn, in dem ich auch nach seinen Gründen frage.",
        score: 3,
      },
      {
        text: "Ich nehme meinem Sohn sofort das Handy weg und verbiete ihm, seine Freunde zu treffen.",
        score: 0,
      },
      {
        text: "Ich sage meinem Sohn sachlich, dass ich davon weiß, und erwarte, dass er ab sofort wieder zur Schule geht.",
        score: 2,
      },
      {
        text: "Ich rufe bei der Schule an, um mich zu erkundigen, wie oft mein Sohn gefehlt hat, und bespreche das erst danach mit ihm.",
        score: 1,
      },
    ],
  },
  {
    id: "er-3-15",
    difficulty: 2,
    situation:
      "Susanne ist Krankenschwester und hat nach einer anstrengenden 12-Stunden-Schicht ihren Einkauf im Supermarkt erledigt. An der Kasse drängelt sich ein Mann vor und reagiert auf ihren Hinweis mit einer abfälligen Bemerkung. Susanne ist erschöpft und wütend. Sie hat noch einen langen Heimweg vor sich und möchte sich nicht von diesem Vorfall den restlichen Abend verderben lassen.",
    emotion: "Wut und Erschöpfung",
    ziel: "Den Vorfall hinter sich lassen und den restlichen Abend nicht davon beeinträchtigen lassen.",
    strategien: [
      {
        text: "Ich sage mir, dass dieser Mensch vermutlich selbst einen schlechten Tag hatte, lasse es gut sein und konzentriere mich auf meinen Feierabend.",
        score: 3,
      },
      {
        text: "Ich eskaliere die Situation und weise den Mann lautstark zurecht, damit er sich nicht so aufführt.",
        score: 0,
      },
      {
        text: "Ich rufe nach dem Einkauf eine Freundin an und erzähle ihr ausführlich, was passiert ist.",
        score: 1,
      },
      {
        text: "Ich versuche, den Vorfall zu verdrängen und nicht mehr daran zu denken.",
        score: 2,
      },
    ],
  },
  {
    id: "er-3-16",
    difficulty: 2,
    situation:
      "Georg ist Architekt und hat wochenlang an einem Entwurf für einen Wettbewerb gearbeitet. Bei der Jurysitzung wurde sein Entwurf als zu konventionell kritisiert und nicht in die engere Auswahl genommen. Ein Kollege, dessen Entwurf Georg für weniger durchdacht hält, hat gewonnen. Georg möchte sich weiterhin kreativ weiterentwickeln und beim nächsten Wettbewerb besser abschneiden.",
    emotion: "Frustration und Neid",
    ziel: "Sich kreativ weiterentwickeln und die Niederlage als Lernchance nutzen.",
    strategien: [
      {
        text: "Ich analysiere das Feedback der Jury und den Gewinnerentwurf sachlich, identifiziere konkrete Bereiche, in denen ich mutiger werden kann, und probiere bei meinem nächsten Projekt neue Ansätze aus.",
        score: 3,
      },
      {
        text: "Ich sage mir, dass die Jury keine Ahnung hat und mein Entwurf in Wahrheit überlegen war.",
        score: 0,
      },
      {
        text: "Ich gratuliere meinem Kollegen und versuche, den Wettbewerb zu vergessen.",
        score: 2,
      },
      {
        text: "Ich erzähle anderen Kolleg:innen, dass die Juryentscheidung fragwürdig war.",
        score: 1,
      },
    ],
  },

  // ─── Difficulty 3 (schwer): 8 Aufgaben ─────────────────────────
  {
    id: "er-3-17",
    difficulty: 3,
    situation:
      "Elisabeth ist Palliativmedizinerin und betreut seit Monaten eine Patientin, zu der sie eine enge Beziehung aufgebaut hat. Die Patientin ist heute verstorben. Elisabeths nächste Patientin wartet bereits und hat große Angst vor ihrer eigenen Diagnose. Elisabeth ist tieftraurig, muss aber für die nächste Patientin empathisch und präsent sein. Sie weiß, dass chronische Trauer in ihrem Beruf ein ernstes Risiko ist.",
    emotion: "Tiefe Trauer und emotionale Belastung",
    ziel: "Für die nächste Patientin präsent sein und langfristig die eigene psychische Gesundheit schützen.",
    strategien: [
      {
        text: "Ich erlaube mir, die Trauer kurz zu spüren, sage mir dann bewusst, dass ich jetzt für die nächste Patientin da sein möchte, und nehme mir vor, heute Abend im Rahmen meiner Balint-Gruppe über den Verlust zu sprechen.",
        score: 3,
      },
      {
        text: "Ich verdränge meine Trauer komplett und schalte in den professionellen Modus, weil das mein Job verlangt.",
        score: 1,
      },
      {
        text: "Ich sage der nächsten Patientin, dass ich gerade eine Patientin verloren habe und nicht in bester Verfassung bin.",
        score: 0,
      },
      {
        text: "Ich bitte eine Kollegin, die nächste Patientin zu übernehmen, damit ich mich sammeln kann.",
        score: 2,
      },
    ],
  },
  {
    id: "er-3-18",
    difficulty: 3,
    situation:
      "Helmut ist 58 Jahre alt und wird bei einer Umstrukturierung überraschend gekündigt. Er hat 25 Jahre lang für die gleiche Firma gearbeitet. Sein Vorgesetzter hat ihm mitgeteilt, dass die Stelle aus wirtschaftlichen Gründen gestrichen wird, obwohl Helmut weiß, dass ein jüngerer Mitarbeiter ähnliche Aufgaben übernimmt. Helmut ist noch zehn Jahre vom Pensionsantritt entfernt und hat eine laufende Hypothek. Er möchte sowohl seine rechtlichen Möglichkeiten prüfen als auch emotional damit umgehen.",
    emotion: "Schock und Existenzangst",
    ziel: "Die rechtlichen Möglichkeiten prüfen und emotional handlungsfähig bleiben.",
    strategien: [
      {
        text: "Ich nehme mir einen Tag, um den Schock zu verarbeiten, und kontaktiere dann die Arbeiterkammer, um meine Rechte zu klären. Parallel sage ich mir, dass meine 25 Jahre Erfahrung ein wertvolles Kapital am Arbeitsmarkt sind.",
        score: 3,
      },
      {
        text: "Ich konfrontiere meinen Vorgesetzten sofort und werfe ihm Altersdiskriminierung vor.",
        score: 0,
      },
      {
        text: "Ich akzeptiere die Kündigung wortlos und beginne sofort mit der Jobsuche.",
        score: 2,
      },
      {
        text: "Ich erzähle allen Kolleg:innen von der unfairen Behandlung und hoffe, dass der Betriebsrat eingreift.",
        score: 1,
      },
    ],
  },
  {
    id: "er-3-19",
    difficulty: 3,
    situation:
      "Petra ist alleinerziehende Mutter und Sozialarbeiterin. Ihr 12-jähriger Sohn wurde in der Schule gemobbt und kommt seit einer Woche mit Bauchschmerzen nach Hause. Als Sozialarbeiterin erkennt Petra die psychosomatischen Zeichen, aber als Mutter fühlt sie sich hilflos und wütend auf die Kinder, die ihren Sohn mobben. Sie hat morgen ein Gespräch mit der Klassenlehrerin und möchte konstruktiv auftreten, obwohl sie innerlich kocht.",
    emotion: "Wut und mütterliche Hilflosigkeit",
    ziel: "Konstruktiv im Schultermin auftreten und den Sohn wirksam unterstützen.",
    strategien: [
      {
        text: "Ich nutze mein Fachwissen, um die Situation sachlich einzuordnen, bereite konkrete Vorschläge für die Schule vor und sage meinem Sohn heute Abend, dass ich ihm zuhöre und gemeinsam mit ihm eine Lösung finde.",
        score: 3,
      },
      {
        text: "Ich rufe die Eltern der mobbenden Kinder an und stelle sie zur Rede.",
        score: 0,
      },
      {
        text: "Ich sage meinem Sohn, dass er sich wehren muss, und bringe ihm bei, sich zu verteidigen.",
        score: 1,
      },
      {
        text: "Ich spreche morgen mit der Lehrerin und bitte sie, etwas gegen das Mobbing zu unternehmen.",
        score: 2,
      },
    ],
  },
  {
    id: "er-3-20",
    difficulty: 3,
    situation:
      "Viktor ist Chirurg und hat bei einer Routineoperation eine Komplikation erlebt, die zu einer Nachoperation geführt hat. Der Patient ist stabil, aber Viktors Selbstvertrauen ist erschüttert. In einer Stunde hat er die nächste geplante OP. Sein Oberarzt hat ihm gesagt, er solle sich zusammenreißen. Viktor weiß, dass Fehler in der Chirurgie vorkommen, hat aber Angst, beim nächsten Eingriff wieder einen Fehler zu machen.",
    emotion: "Angst und Selbstzweifel",
    ziel: "Das Selbstvertrauen wiederherstellen und den nächsten Eingriff sicher durchführen.",
    strategien: [
      {
        text: "Ich gehe die Komplikation kurz fachlich durch, identifiziere den Auslöser, sage mir dann, dass ich tausende Operationen erfolgreich durchgeführt habe, und bereite mich konzentriert auf den nächsten Eingriff vor.",
        score: 3,
      },
      {
        text: "Ich bitte meinen Oberarzt, die nächste OP zu übernehmen, weil ich mich nicht bereit fühle.",
        score: 2,
      },
      {
        text: "Ich versuche, die Komplikation komplett aus meinem Kopf zu verbannen und so zu tun, als wäre nichts passiert.",
        score: 1,
      },
      {
        text: "Ich sage meinem Oberarzt, dass sein Kommentar unprofessionell war, und fordere mehr Unterstützung.",
        score: 0,
      },
    ],
  },
  {
    id: "er-3-21",
    difficulty: 3,
    situation:
      "Claudia pflegt seit zwei Jahren ihre demenzkranke Mutter zu Hause, neben ihrer Teilzeitstelle als Buchhalterin. Ihre Geschwister beteiligen sich kaum an der Pflege. Heute hat ihre Mutter sie nicht erkannt und Claudia beschimpft. Claudia ist am Rand ihrer Kräfte und fühlt Trauer, Wut auf ihre Geschwister und Schuldgefühle, weil sie manchmal wünscht, die Pflegesituation wäre vorbei. Sie möchte weiterhin für ihre Mutter da sein, ohne selbst zusammenzubrechen.",
    emotion: "Erschöpfung, Wut und Schuldgefühle",
    ziel: "Für die Mutter weiterhin da sein, ohne die eigene Gesundheit zu opfern.",
    strategien: [
      {
        text: "Ich sage mir, dass meine Gefühle in dieser Belastungssituation normal und menschlich sind, und organisiere ein Familientreffen, um die Pflege gerecht aufzuteilen. Parallel erkundige ich mich nach einer Pflegeberatung und Entlastungsangeboten.",
        score: 3,
      },
      {
        text: "Ich pflege meine Mutter weiterhin allein, weil ich es nicht über mich bringe, meine Geschwister um Hilfe zu bitten.",
        score: 0,
      },
      {
        text: "Ich schreibe meinen Geschwistern eine emotionale Nachricht, in der ich ihnen vorwerfe, sich nicht um die Mutter zu kümmern.",
        score: 1,
      },
      {
        text: "Ich nehme mir einen freien Tag und organisiere für diesen Tag einen ambulanten Pflegedienst.",
        score: 2,
      },
    ],
  },
  {
    id: "er-3-22",
    difficulty: 3,
    situation:
      "Stefan ist Rettungssanitäter und hat bei seinem letzten Einsatz ein schwer verletztes Kind reanimiert. Die Reanimation war erfolgreich, aber die Bilder lassen ihn nicht los. Seit dem Einsatz vor drei Tagen schläft er schlecht und hat Konzentrationsprobleme. Heute hat er wieder Dienst. Er liebt seinen Beruf und möchte ihn langfristig ausüben, erkennt aber, dass er Hilfe braucht.",
    emotion: "Belastungsreaktion und Schlaflosigkeit",
    ziel: "Langfristig im Beruf bestehen und die psychische Belastung professionell verarbeiten.",
    strategien: [
      {
        text: "Ich kontaktiere das Peer-Support-Team meiner Rettungsorganisation, spreche offen über meine Symptome und nehme bei Bedarf professionelle Hilfe in Anspruch.",
        score: 3,
      },
      {
        text: "Ich nehme mir frei und warte ab, ob die Symptome von selbst verschwinden.",
        score: 2,
      },
      {
        text: "Ich sage mir, dass solche Einsätze zum Job gehören, und versuche, nicht mehr daran zu denken.",
        score: 1,
      },
      {
        text: "Ich trinke abends ein paar Bier, um besser schlafen zu können.",
        score: 0,
      },
    ],
  },
  {
    id: "er-3-23",
    difficulty: 3,
    situation:
      "Anna ist Forscherin an einer Universität und hat herausgefunden, dass eine Kollegin Daten in einer gemeinsamen Publikation manipuliert hat. Wenn Anna dies meldet, könnte die Kollegin ihre Stelle verlieren. Wenn sie schweigt, wird sie Mittäterin. Beide arbeiten im gleichen kleinen Forschungsteam. Anna fühlt sich in einem moralischen Dilemma gefangen und hat Angst vor den sozialen Konsequenzen einer Meldung.",
    emotion: "Moralischer Stress und Angst",
    ziel: "Wissenschaftlich integer handeln, ohne die eigenen Konsequenzen zu ignorieren.",
    strategien: [
      {
        text: "Ich spreche zuerst vertraulich mit der Kollegin und gebe ihr die Möglichkeit, den Fehler selbst zu korrigieren. Falls sie dies ablehnt, wende ich mich an die Ombudsstelle für wissenschaftliche Integrität.",
        score: 3,
      },
      {
        text: "Ich melde den Vorfall sofort anonym bei der Universitätsleitung, ohne vorher mit der Kollegin zu sprechen.",
        score: 2,
      },
      {
        text: "Ich schweige, weil ich das Team nicht zerstören will, und hoffe, dass niemand die Manipulation bemerkt.",
        score: 0,
      },
      {
        text: "Ich erzähle anderen Kolleg:innen davon, um mir Rat zu holen, bevor ich etwas unternehme.",
        score: 1,
      },
    ],
  },
  {
    id: "er-3-24",
    difficulty: 3,
    situation:
      "Michael ist Lehrer an einem Gymnasium und hat erfahren, dass einer seiner Schüler zu Hause geschlagen wird. Der Schüler hat ihn unter Tränen gebeten, niemandem davon zu erzählen, weil er Angst hat, dass alles nur schlimmer wird. Michael weiß, dass er als Lehrer eine Meldepflicht hat, aber er hat auch eine Vertrauensbeziehung zu dem Schüler aufgebaut. Er möchte den Schüler schützen und gleichzeitig seiner Pflicht nachkommen.",
    emotion: "Sorge und innerer Konflikt",
    ziel: "Den Schüler schützen und gleichzeitig der Meldepflicht nachkommen.",
    strategien: [
      {
        text: "Ich erkläre dem Schüler ehrlich, dass ich ihm helfen möchte und deshalb die Schulleitung und die Kinder- und Jugendhilfe einschalten muss. Ich versichere ihm, dass ich ihn dabei begleite und er nicht allein ist.",
        score: 3,
      },
      {
        text: "Ich respektiere den Wunsch des Schülers und behalte das Geheimnis für mich, um sein Vertrauen nicht zu brechen.",
        score: 0,
      },
      {
        text: "Ich melde den Vorfall sofort bei der Kinder- und Jugendhilfe, ohne den Schüler vorher zu informieren.",
        score: 2,
      },
      {
        text: "Ich spreche zuerst mit dem Schulpsychologen und bitte ihn, den Schüler zu einem Gespräch einzuladen, ohne den konkreten Verdacht zu nennen.",
        score: 1,
      },
    ],
  },
];
