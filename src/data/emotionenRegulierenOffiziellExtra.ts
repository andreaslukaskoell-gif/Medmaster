/**
 * Zusätzliche Emotionen-regulieren-Aufgaben nach offiziellem MedAT-Vorbild (er-off-13 bis er-off-100).
 * Werden mit den 12 offiziellen Beispielen zu 100 Aufgaben zusammengeführt.
 */

import type { EmotionenRegulierenOffiziellTask, OptionId } from "./emotionenRegulierenOffiziell";

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

/** 88 zusätzliche Aufgaben (er-off-13 bis er-off-100) */
export const emotionenRegulierenOffiziellExtra: EmotionenRegulierenOffiziellTask[] = [
  task(
    "er-off-13",
    "Julia studiert Medizin im dritten Semester. Morgen hat sie ihre erste mündliche Prüfung in Physiologie. Sie hat den Stoff gut gelernt, ist aber sehr nervös, weil sie noch nie eine mündliche Prüfung an der Uni hatte. Sie möchte ruhig und konzentriert antreten können. Wie gehen Sie in der Situation von Julia idealerweise vor?",
    [
      "Ich sage mir, dass ich den Stoff beherrsche und die Prüferinnen und Prüfer nur sehen wollen, was ich kann.",
      "Ich lenke mich den ganzen Abend mit einem Film ab, um nicht an die Prüfung zu denken.",
      "Ich rufe eine Kommilitonin an, die bereits mündlich geprüft wurde, und frage nach Tipps.",
      "Ich versuche, meine Nervosität zu verdrängen und schlafe möglichst viel.",
    ],
    0,
    "Julia ist gut vorbereitet und hat vor allem Angst vor dem unbekannten Format. Eine kognitive Umbewertung (Kompetenz bestätigen, Prüfung als Chance sehen) reduziert die Angst und unterstützt das Ziel, ruhig und konzentriert zu sein."
  ),
  task(
    "er-off-14",
    "Stefan ist Krankenpfleger auf der Intensivstation. Ein Angehöriger beschuldigt ihn lautstark, einen Fehler gemacht zu haben, obwohl alles protokollgemäß war. Stefan ist wütend und fühlt sich ungerecht behandelt. Er möchte die Situation deeskalieren und professionell bleiben. Wie gehen Sie in der Situation von Stefan idealerweise vor?",
    [
      "Ich weise den Angehörigen sofort zurecht und erkläre ihm die Fakten.",
      "Ich atme tief durch, nehme die Kritik sachlich zur Kenntnis und biete an, das Gespräch mit der Stationsleitung zu führen.",
      "Ich verlasse den Raum und überlasse einen Kollegen der Situation.",
      "Ich sage mir, dass Angehörige unter Stress oft unfair reagieren, und ignoriere die Vorwürfe.",
    ],
    1,
    "Stefan will deeskalieren und professionell bleiben. Die Situation sachlich anzunehmen und eine neutrale Instanz (Stationsleitung) einzubeziehen, ist ein aktiver Problemlöseansatz, der Eskalation vermeidet und das Ziel unterstützt."
  ),
  task(
    "er-off-15",
    "Laura hat sich von ihrem Partner getrennt. Sie ist traurig, muss aber in zwei Tagen eine wichtige Präsentation bei der Arbeit halten. Sie möchte dabei professionell und leistungsfähig wirken. Wie gehen Sie in der Situation von Laura idealerweise vor?",
    [
      "Ich sage mir, dass die Präsentation eine Chance ist, mich auf etwas anderes zu konzentrieren und meine Kompetenz unter Beweis zu stellen.",
      "Ich rufe meine beste Freundin an und weine mich aus.",
      "Ich sage meinem Chef, dass ich krank bin, und verschiebe die Präsentation.",
      "Ich versuche, die Trauer komplett zu unterdrücken und nur an die Arbeit zu denken.",
    ],
    0,
    "Laura muss kurzfristig leistungsfähig bleiben. Eine kognitive Umbewertung (Präsentation als Fokus und Kompetenznachweis) hilft, die Trauer in den Hintergrund zu rücken, ohne sie zu verleugnen, und unterstützt das berufliche Ziel."
  ),
  task(
    "er-off-16",
    "Michael ist Arzt in einer ländlichen Praxis. Ein Patient beschwert sich wiederholt und aggressiv über Wartezeiten und beschimpft das Praxisteam. Michael ist genervt. Er möchte den Patienten angemessen versorgen und gleichzeitig die Atmosphäre in der Praxis wahren. Wie gehen Sie in der Situation von Michael idealerweise vor?",
    [
      "Ich mache mir klar, dass der Patient vielleicht Schmerzen oder Angst hat und sein Verhalten daher nicht persönlich gemeint ist.",
      "Ich weise den Patienten scharf zurecht und fordere ihn auf, sich zu benehmen.",
      "Ich kürze das Gespräch ab und bitte ihn, beim nächsten Mal zu kommen, wenn er ruhiger ist.",
      "Ich zeige meine Genervtheit nicht und behandle ihn so knapp wie möglich.",
    ],
    0,
    "Michael will professionell handeln und die Atmosphäre wahren. Eine kognitive Umbewertung (Verhalten des Patienten auf Schmerz/Angst zurückführen) reduziert die eigene Genervtheit und ermöglicht sachliches, empathisches Handeln."
  ),
  task(
    "er-off-17",
    "Sophie hat einen Bewerbungsmarathon hinter sich und wurde wieder abgelehnt. Sie ist enttäuscht und zweifelt an sich. Sie muss aber weiter Bewerbungen schreiben und motiviert bleiben. Wie gehen Sie in der Situation von Sophie idealerweise vor?",
    [
      "Ich gönne mir einen Tag Pause und unternehme etwas Schönes.",
      "Ich sage mir, dass jede Absage mich näher an die richtige Stelle bringt und ich aus den Bewerbungen dazulerne.",
      "Ich rede mit meinen Eltern über meine Enttäuschung.",
      "Ich höre auf, mich zu bewerben, und überdenke meine Ziele.",
    ],
    1,
    "Sophie muss motiviert weiter Bewerbungen schreiben. Eine kognitive Umbewertung (Absagen als Lernschritte, Fortschritt sehen) stärkt die Motivation und reduziert Selbstzweifel, ohne die Situation zu vermeiden."
  ),
  task(
    "er-off-18",
    "David ist Medizinstudent und hat gerade erfahren, dass sein Vater schwer erkrankt ist. Er sitzt in der Bibliothek und soll für eine Klausur lernen. Er kann sich nicht konzentrieren und ist von Sorgen und Trauer überwältigt. Wie gehen Sie in der Situation von David idealerweise vor?",
    [
      "Ich zwinge mich, weiterzulernen, um nicht an die Situation zu denken.",
      "Ich rufe zu Hause an, um mich zu erkundigen und emotional zu entlasten, und plane dann eine kurze Lernphase für das Wichtigste.",
      "Ich sage mir, dass Lernen jetzt ohnehin sinnlos ist, und gehe nach Hause.",
      "Ich lenke mich mit Sport ab, um den Kopf frei zu bekommen.",
    ],
    1,
    "David ist emotional überlastet. Sich Unterstützung zu holen (Anruf, emotionale Entlastung) und danach realistische kleine Schritte zu setzen, entspricht der Situation besser als Verdrängen oder komplette Aufgabe."
  ),
  task(
    "er-off-19",
    "Anna ist Ärztin in der Notaufnahme. Ein Patient wird aggressiv, weil er lange warten musste, und wirft ihr vor, ihn nicht ernst zu nehmen. Anna ist erschöpft und fühlt sich ungerecht behandelt. Sie möchte den Patienten trotzdem gut versorgen. Wie gehen Sie in der Situation von Anna idealerweise vor?",
    [
      "Ich erkläre ihm kurz und ruhig, warum die Wartezeit entstanden ist, und frage, womit ich ihm jetzt konkret helfen kann.",
      "Ich weise ihn zurecht und sage, dass solche Vorwürfe inakzeptabel sind.",
      "Ich lasse einen Kollegen den Patienten übernehmen.",
      "Ich ignoriere seine Äußerungen und arbeite schweigend weiter.",
    ],
    0,
    "Anna will den Patienten gut versorgen. Kurze, sachliche Information und Fokus auf die aktuelle Hilfe (Situationsmodifikation durch Kommunikation) deeskalieren und unterstützen das Behandlungsziel."
  ),
  task(
    "er-off-20",
    "Tom hat einen wichtigen Vortrag vor großem Publikum. Kurz vor dem Auftritt bekommt er Lampenfieber und fürchtet, den Faden zu verlieren. Er ist gut vorbereitet und möchte selbstbewusst wirken. Wie gehen Sie in der Situation von Tom idealerweise vor?",
    [
      "Ich sage mir, dass Aufregung und Energie zusammengehören und mein Körper mich unterstützt, wach und präsent zu sein.",
      "Ich atme mehrmals tief durch und versuche, an nichts zu denken.",
      "Ich stelle mir vor, das Publikum sei leer.",
      "Ich trinke schnell einen Kaffee, um wacher zu wirken.",
    ],
    0,
    "Tom ist gut vorbereitet. Kognitive Umbewertung (Aufregung als hilfreiche Aktivierung) reduziert das Lampenfieber und unterstützt selbstbewusstes, präsentes Auftreten."
  ),
  task(
    "er-off-21",
    "Maria arbeitet als Psychologin in einer Beratungsstelle. Ein Klient wird während des Gesprächs wütend und wirft ihr vor, ihn nicht zu verstehen. Maria ist getroffen, möchte die Beziehung zum Klienten aber nicht beschädigen. Wie gehen Sie in der Situation von Maria idealerweise vor?",
    [
      "Ich teile mit, dass ich merke, dass er sich nicht verstanden fühlt, und frage, was er braucht, um sich gehört zu fühlen.",
      "Ich verteidige mich und erkläre, dass ich ihn sehr wohl verstehe.",
      "Ich beende das Gespräch und vereinbare einen neuen Termin.",
      "Ich sage mir, dass seine Wut nicht mir gilt, und warte ab.",
    ],
    0,
    "Maria will die Beziehung wahren. Empathisches Anerkennen und aktives Nachfragen (was braucht er) entspricht der therapeutischen Rolle und unterstützt die Beziehung und das weitere Arbeiten."
  ),
  task(
    "er-off-22",
    "Philipp hat bei einer Gruppenarbeit den Großteil der Arbeit gemacht, aber die Dozentin lobt vor allem eine Kommilitonin. Er ist verärgert und fühlt sich übergangen. Er möchte das Projekt aber erfolgreich abschließen und das Klima in der Gruppe nicht vergiften. Wie gehen Sie in der Situation von Philipp idealerweise vor?",
    [
      "Ich sage mir, dass das Lob der Gruppe gilt und ein gutes Ergebnis wichtiger ist als persönliche Anerkennung.",
      "Ich konfrontiere die Dozentin nach der Stunde und erkläre meinen Anteil.",
      "Ich halte mich in der nächsten Gruppenarbeit zurück.",
      "Ich rede mit der Kommilitonin und bitte sie, meinen Beitrag zu erwähnen.",
    ],
    0,
    "Philipp will das Projekt abschließen und das Gruppenklima wahren. Kognitive Umbewertung (Fokus auf gemeinsames Ergebnis) reduziert den Ärger und erhält die Kooperationsfähigkeit."
  ),
  task(
    "er-off-23",
    "Christine ist Pflegefachkraft und muss einem Angehörigen mitteilen, dass sich der Zustand des Patienten verschlechtert hat. Sie hat Mitgefühl und zugleich Angst, etwas Falsches zu sagen. Sie möchte einfühlsam und sachlich informieren. Wie gehen Sie in der Situation von Christine idealerweise vor?",
    [
      "Ich hole die Ärztin oder den Arzt dazu und lasse die medizinische Information von ihr oder ihm geben.",
      "Ich sage mir, dass ich das schon oft gemacht habe und es auch diesmal schaffe.",
      "Ich informiere den Angehörigen knapp und vermeide Blickkontakt.",
      "Ich verschiebe das Gespräch und bitte eine Kollegin, es zu übernehmen.",
    ],
    0,
    "Christine fühlt sich unsicher. In einer sensiblen Situation die ärztliche Instanz hinzuzuziehen, ist ein angemessener Problemlöseansatz und entlastet sie, ohne das Ziel (einfühlsame, sachliche Information) zu gefährden."
  ),
  task(
    "er-off-24",
    "Martin hat einen Konflikt mit seinem Vorgesetzten. Er fühlt sich ungerecht behandelt und ist wütend. Er möchte die Arbeitsbeziehung nicht zerstören, aber für seine Anliegen eintreten. Wie gehen Sie in der Situation von Martin idealerweise vor?",
    [
      "Ich vereinbare ein klärendes Gespräch unter vier Augen und bereite sachliche Punkte vor.",
      "Ich ignoriere den Konflikt und tue so, als sei nichts gewesen.",
      "Ich beschwere mich bei der Personalabteilung.",
      "Ich sage mir, dass Vorgesetzte oft unter Druck stehen, und nehme es hin.",
    ],
    0,
    "Martin will die Beziehung wahren und trotzdem für sich eintreten. Ein vorbereitetes, sachliches Vier-Augen-Gespräch ist aktive Situationsmodifikation und unterstützt beide Ziele."
  ),
  task(
    "er-off-25",
    "Sandra hat ihre Abschlussprüfung bestanden, aber eine enge Freundin ist durchgefallen. Die Freundin wirkt traurig und distanziert. Sandra ist unsicher und hat ein schlechtes Gewissen. Sie möchte die Freundschaft erhalten und einfühlsam sein. Wie gehen Sie in der Situation von Sandra idealerweise vor?",
    [
      "Ich spreche die Freundin offen an, zeige Verständnis für ihre Enttäuschung und signalisiere, dass ich für sie da bin.",
      "Ich vermeide das Thema und lenke auf andere Dinge ab.",
      "Ich sage mir, dass Durchfallen nicht meine Schuld ist, und warte ab.",
      "Ich übertreibe meine Freude nicht und vermeide jeden Verweis auf die Prüfung.",
    ],
    0,
    "Sandra will die Freundschaft und Einfühlsamkeit zeigen. Offenes Ansprechen und Verständnis signalisieren soziale Nähe und unterstützen die Beziehung besser als Vermeiden oder Abwarten."
  ),
  task(
    "er-off-26",
    "Robert ist Rettungssanitäter. Bei einem Einsatz wird er von Angehörigen beschuldigt, nicht schnell genug gehandelt zu haben. Er hat alles fachgerecht gemacht und ist verletzt und wütend. Er möchte professionell bleiben und den Angehörigen nicht eskalieren lassen. Wie gehen Sie in der Situation von Robert idealerweise vor?",
    [
      "Ich bleibe ruhig, bestätige die emotionale Belastung der Angehörigen und erkläre kurz, was wir medizinisch durchgeführt haben.",
      "Ich weise die Vorwürfe entschieden zurück und verweise auf das Protokoll.",
      "Ich verlasse die Situation und überlasse die Kommunikation dem Notarzt.",
      "Ich sage mir, dass Angehörige unter Schock irrational sind, und reagiere nicht.",
    ],
    0,
    "Robert will professionell bleiben und deeskalieren. Ruhiges Reagieren, Anerkennen der Emotionen und kurze sachliche Information sind Situationsmodifikation und unterstützen das Ziel."
  ),
  task(
    "er-off-27",
    "Katharina hat sich von ihrer besten Freundin entfremdet und fühlt sich einsam und traurig. Sie hat in einer Woche eine wichtige Präsentation im Job. Sie möchte dabei konzentriert und überzeugend wirken. Wie gehen Sie in der Situation von Katharina idealerweise vor?",
    [
      "Ich sage mir, dass ich beruflich kompetent bin und die Präsentation eine Chance ist, mich zu zeigen und abzulenken.",
      "Ich schreibe der Freundin einen langen Brief und warte auf Antwort.",
      "Ich melde mich krank und verschiebe die Präsentation.",
      "Ich rede mit niemandem darüber und versuche, nur an die Arbeit zu denken.",
    ],
    0,
    "Katharina muss kurzfristig leistungsfähig bleiben. Kognitive Umbewertung (Kompetenz, Chance, leichte Ablenkung) unterstützt Konzentration und Überzeugungskraft ohne die Trauer zu verleugnen."
  ),
  task(
    "er-off-28",
    "Andreas ist Oberarzt und muss einem jungen Assistenzarzt kritisches Feedback zu einem Fehler geben. Der Assistent wirkt gekränkt. Andreas möchte die Qualität sichern und das Vertrauensverhältnis nicht beschädigen. Wie gehen Sie in der Situation von Andreas idealerweise vor?",
    [
      "Ich formuliere das Feedback sachlich, frage nach seiner Sicht und biete an, beim nächsten Mal gemeinsam zu reflektieren.",
      "Ich sage mir, dass Kritik zum Beruf gehört, und lasse ihn allein damit.",
      "Ich mildere das Feedback ab, um ihn nicht zu verletzen.",
      "Ich dokumentiere den Fehler und überlasse die Rückmeldung der Klinikleitung.",
    ],
    0,
    "Andreas will Qualität und Vertrauen wahren. Sachliches Feedback mit Einbezug der anderen Sicht und Angebot zur gemeinsamen Reflexion ist Situationsmodifikation und unterstützt beide Ziele."
  ),
  task(
    "er-off-29",
    "Nina hat einen Unfall mit Blechschaden. Der andere Fahrer ist unhöflich und gibt ihr die Schuld. Sie ist aufgebracht, möchte aber den Vorfall sachlich regeln und keinen Streit. Wie gehen Sie in der Situation von Nina idealerweise vor?",
    [
      "Ich bleibe ruhig, tausche die nötigen Daten aus und lasse die Versicherung die Schuldfrage klären.",
      "Ich weise ihn zurecht und erkläre meine Sicht der Dinge.",
      "Ich rufe die Polizei und überlasse alles ihnen.",
      "Ich sage mir, dass solche Leute überall sind, und ignoriere seinen Ton.",
    ],
    0,
    "Nina will den Vorfall sachlich regeln. Ruhiges Verhalten, Datenaustausch und Delegation an die Versicherung sind aktive Problemlösung ohne Eskalation."
  ),
  task(
    "er-off-30",
    "Florian hat eine Absage für den Wunsch-Facharztplatz erhalten. Er ist enttäuscht und wütend auf die Auswahlkommission. Er muss sich aber um alternative Stellen bewerben und motiviert bleiben. Wie gehen Sie in der Situation von Florian idealerweise vor?",
    [
      "Ich sage mir, dass andere Stellen ebenfalls gute Lernmöglichkeiten bieten und ich aus der Absage nichts Persönliches machen muss.",
      "Ich schreibe der Kommission einen empörten Brief.",
      "Ich gönne mir eine Woche Pause und bewerbe mich danach weiter.",
      "Ich rede mit einem Mentor über die Enttäuschung und hole mir Tipps für die nächsten Bewerbungen.",
    ],
    0,
    "Florian muss motiviert weiterbewerben. Kognitive Umbewertung (andere Chancen, nicht persönlich nehmen) reduziert Wut und Enttäuschung und erhält die Handlungsfähigkeit."
  ),
  task(
    "er-off-31",
    "Petra arbeitet in der Kinderklinik. Ein Kind weint und schreit bei der Blutabnahme. Die Mutter wird ungehalten und wirft Petra Inkompetenz vor. Petra ist verunsichert und verletzt. Sie möchte das Kind gut versorgen und die Mutter nicht eskalieren lassen. Wie gehen Sie in der Situation von Petra idealerweise vor?",
    [
      "Ich bleibe ruhig, erkläre der Mutter kurz, warum die Blutabnahme nötig ist, und biete an, beim nächsten Mal eine erfahrenere Kollegin hinzuzuziehen, wenn sie das wünscht.",
      "Ich weise die Mutter zurecht und bitte sie, das Kind zu beruhigen.",
      "Ich breche die Blutabnahme ab und bitte die Mutter, einen anderen Termin zu vereinbaren.",
      "Ich sage mir, dass besorgte Mütter oft gereizt reagieren, und arbeite schweigend weiter.",
    ],
    0,
    "Petra will das Kind versorgen und deeskalieren. Ruhige Erklärung und Angebot einer Alternative (Situationsmodifikation) unterstützen beide Ziele."
  ),
  task(
    "er-off-32",
    "Sebastian hat einen wichtigen Vortrag vor Investoren. Kurz davor erfährt er, dass ein Familienmitglied ins Krankenhaus eingeliefert wurde. Er ist in Sorge, muss den Vortrag aber halten. Wie gehen Sie in der Situation von Sebastian idealerweise vor?",
    [
      "Ich rufe kurz zu Hause an, um den aktuellen Stand zu erfahren, und entscheide dann, ob ich den Vortrag halte oder vertreten lasse.",
      "Ich sage mir, dass ich den Vortrag halten muss und mich danach um die Familie kümmere.",
      "Ich sagt den Vortrag ab und fahre ins Krankenhaus.",
      "Ich halte den Vortrag und unterdrücke alle Gedanken an die Familie.",
    ],
    0,
    "Sebastian ist in einer Doppelbelastung. Kurze Information einholen und dann bewusste Entscheidung (Vortrag oder Vertretung) ist aktive Problemlösung und reduziert Hilflosigkeit."
  ),
  task(
    "er-off-33",
    "Lisa ist Physiotherapeutin. Ein Patient lehnt ihre Übungsvorschläge ab und behauptet, sie hätten nichts gebracht. Sie ist frustriert, möchte aber die Therapiebeziehung und seine Mitarbeit erhalten. Wie gehen Sie in der Situation von Lisa idealerweise vor?",
    [
      "Ich frage nach, welche Erfahrungen er gemacht hat und was er sich von der Therapie wünscht, und passe die Übungen gemeinsam an.",
      "Ich erkläre ihm sachlich, warum die Übungen wichtig sind, und bestehe darauf.",
      "Ich sage mir, dass manche Patienten schwierig sind, und biete beim nächsten Mal etwas anderes an.",
      "Ich beende die Einheit früher und dokumentiere die fehlende Mitarbeit.",
    ],
    0,
    "Lisa will die Beziehung und Mitarbeit erhalten. Nachfragen und gemeinsame Anpassung (Situationsmodifikation) zeigen Wertschätzung und erhöhen die Chance auf Mitarbeit."
  ),
  task(
    "er-off-34",
    "Dominik hat bei einer Teamarbeit den Löwenanteil übernommen, wird aber in der Besprechung nicht erwähnt. Er ist enttäuscht. Er möchte im Team respektiert werden, ohne als empfindlich zu gelten. Wie gehen Sie in der Situation von Dominik idealerweise vor?",
    [
      "Ich spreche nach der Besprechung die Teamleitung oder eine vertraute Person an und bringe meinen Beitrag sachlich zur Sprache.",
      "Ich sage mir, dass Teamerfolg wichtiger ist als persönliche Anerkennung.",
      "Ich halte beim nächsten Mal mein Engagement zurück.",
      "Ich erwähne in der nächsten Runde selbstbewusst meinen Anteil.",
    ],
    0,
    "Dominik will Respekt ohne Imageverlust. Ein sachliches Vier-Augen-Gespräch nach der Besprechung ist aktive Situationsmodifikation und wahrt sein Gesicht."
  ),
  task(
    "er-off-35",
    "Claudia ist Apothekerin. Ein Kunde beschwert sich lautstark über den Preis eines Medikaments und wirft ihr Gewinnsucht vor. Sie ist verärgert, möchte aber professionell bleiben und den Kunden nicht verlieren. Wie gehen Sie in der Situation von Claudia idealerweise vor?",
    [
      "Ich bleibe ruhig, erkläre kurz die Preisgestaltung und frage, ob ich nach günstigeren Alternativen oder Zuschüssen schauen soll.",
      "Ich weise den Kunden darauf hin, dass solche Vorwürfe unangemessen sind.",
      "Ich sage mir, dass Kunden oft unter Druck stehen, und ignoriere den Ton.",
      "Ich bitte eine Kollegin, den Kunden zu bedienen.",
    ],
    0,
    "Claudia will professionell bleiben und den Kunden halten. Ruhige Erklärung und aktives Angebot (Alternativen, Zuschüsse) sind Situationsmodifikation und deeskalieren."
  ),
  task(
    "er-off-36",
    "Tim hat einen Konflikt mit seinem Mitbewohner wegen unerledigter Haushaltsaufgaben. Er ist genervt, möchte aber die WG-Atmosphäre nicht vergiften. Wie gehen Sie in der Situation von Tim idealerweise vor?",
    [
      "Ich schlage ein kurzes Gespräch vor und schlage eine konkrete Aufteilung oder einen Putzplan vor.",
      "Ich sage mir, dass es nicht so schlimm ist, und übernehme die Aufgaben selbst.",
      "Ich konfrontiere ihn vor den anderen Mitbewohnern.",
      "Ich meide ihn und erledige nur noch meinen Teil.",
    ],
    0,
    "Tim will die Atmosphäre wahren und das Problem lösen. Ein Gespräch mit konkreter Vereinbarung ist Situationsmodifikation und unterstützt beide Ziele."
  ),
  task(
    "er-off-37",
    "Jennifer hat eine Stelle abgelehnt, die ihr angeboten wurde, und bereut es jetzt. Sie ist traurig und hadert mit sich. Sie möchte nach vorne schauen und sich weiter bewerben. Wie gehen Sie in der Situation von Jennifer idealerweise vor?",
    [
      "Ich sage mir, dass die Entscheidung mit den Informationen von damals sinnvoll war und ich jetzt andere Chancen nutzen kann.",
      "Ich kontaktiere die Firma erneut und frage, ob die Stelle noch offen ist.",
      "Ich rede mit einer Vertrauensperson über die Reue.",
      "Ich lenke mich mit Hobbys ab und bewerbe mich erst in ein paar Wochen wieder.",
    ],
    0,
    "Jennifer soll nach vorne schauen. Kognitive Umbewertung (damalige Entscheidung würdigen, neue Chancen sehen) reduziert Reue und unterstützt motiviertes Weiterbewerben."
  ),
  task(
    "er-off-38",
    "Oliver ist Notarzt. Bei einem Einsatz wird er von Angehörigen bedrängt und am Arbeiten gehindert. Er ist unter Zeitdruck und wird wütend. Er möchte den Patienten optimal versorgen und die Angehörigen einbinden, ohne die Situation eskalieren zu lassen. Wie gehen Sie in der Situation von Oliver idealerweise vor?",
    [
      "Ich weise die Angehörigen ruhig aber bestimmt darauf hin, dass ich jetzt Platz brauche, und bitte sie, einen Schritt zurückzutreten, damit ich helfen kann.",
      "Ich ignoriere sie und konzentriere mich nur auf den Patienten.",
      "Ich rufe die Polizei zur Absicherung.",
      "Ich sage mir, dass sie nur besorgt sind, und arbeite um sie herum.",
    ],
    0,
    "Oliver muss den Patienten versorgen und die Angehörigen einbinden. Klare, ruhige Ansage mit Begründung (Platz für Hilfe) ist Situationsmodifikation und schafft Handlungsraum."
  ),
  task(
    "er-off-39",
    "Vanessa hat einen Rückfall in einer Therapie (z. B. Rauchen, Essverhalten). Sie ist enttäuscht von sich und hat Scham. Sie möchte die Therapie fortsetzen und nicht aufgeben. Wie gehen Sie in der Situation von Vanessa idealerweise vor?",
    [
      "Ich sage mir, dass Rückfälle zum Prozess gehören und ich daraus lernen kann, und spreche beim nächsten Termin offen mit meiner Therapeutin oder meinem Therapeuten darüber.",
      "Ich verschweige den Rückfall und versuche, es beim nächsten Mal besser zu machen.",
      "Ich breche die Therapie ab, weil ich versagt habe.",
      "Ich bestrafe mich mit Verzicht und strengen Regeln.",
    ],
    0,
    "Vanessa will die Therapie fortsetzen. Kognitive Umbewertung (Rückfall als Teil des Prozesses) und offene Kommunikation mit der Therapeutin oder dem Therapeuten unterstützen das Therapieziel."
  ),
  task(
    "er-off-40",
    "Gregor ist Lehrer und wird von einem Elternteil vor der Klasse kritisiert. Er ist beschämt und wütend. Er möchte die Autorität in der Klasse wahren und das Gespräch mit dem Elternteil sachlich klären. Wie gehen Sie in der Situation von Gregor idealerweise vor?",
    [
      "Ich bitte das Elternteil höflich, das Gespräch nach der Stunde unter vier Augen zu führen, und fahre mit dem Unterricht fort.",
      "Ich weise die Kritik vor der Klasse zurück und verteidige mich.",
      "Ich beende die Stunde und gehe sofort in ein Gespräch.",
      "Ich sage mir, dass Eltern oft emotional sind, und ignoriere die Kritik.",
    ],
    0,
    "Gregor will Autorität und sachliche Klärung. Die Situation verschieben (nach der Stunde, unter vier Augen) ist Situationsmodifikation und wahrt beide Ziele."
  ),
  task(
    "er-off-41",
    "Hannah hat einen wichtigen Termin, aber der Zug hat starke Verspätung. Sie wird ungeduldig und ärgerlich. Sie möchte den Termin noch wahrnehmen und nicht gestresst ankommen. Wie gehen Sie in der Situation von Hannah idealerweise vor?",
    [
      "Ich nutze die Zeit, um mich vorzubereiten oder zu entspannen, und informiere die andere Seite per Nachricht über die Verspätung.",
      "Ich beschwere mich beim Zugpersonal.",
      "Ich sage mir, dass ich nichts ändern kann, und warte ab.",
      "Ich steige um und versuche eine alternative Route.",
    ],
    0,
    "Hannah will den Termin wahrnehmen und ruhig ankommen. Die Situation nutzen (Vorbereitung, Entspannung) und die andere Seite informieren ist aktive Situationsmodifikation."
  ),
  task(
    "er-off-42",
    "Ralf ist Projektleiter. Ein Teammitglied weigert sich, eine Aufgabe zu übernehmen, und wirft Ralf vor, ihn zu überfordern. Ralf ist verärgert. Er möchte das Projekt voranbringen und das Teamklima nicht belasten. Wie gehen Sie in der Situation von Ralf idealerweise vor?",
    [
      "Ich frage nach den Gründen und Bedenken und schlage gemeinsam eine andere Aufteilung oder Unterstützung vor.",
      "Ich bestehe auf der Aufgabe und verweise auf die Projektziele.",
      "Ich übernehme die Aufgabe selbst.",
      "Ich sage mir, dass manche Mitarbeiter schwierig sind, und weise die Aufgabe jemand anderem zu.",
    ],
    0,
    "Ralf will Projekt und Klima wahren. Nachfragen und gemeinsame Lösung (andere Aufteilung, Unterstützung) ist Situationsmodifikation und erhält die Zusammenarbeit."
  ),
  task(
    "er-off-43",
    "Sabine hat einen geliebten Menschen verloren und kann in der Arbeit kaum konzentriert sein. Sie möchte ihre Leistung halten und nicht auffallen. Wie gehen Sie in der Situation von Sabine idealerweise vor?",
    [
      "Ich spreche mit meiner Vorgesetzten oder einem vertrauten Kollegen und bitte vorübergehend um etwas Entlastung oder flexible Pausen.",
      "Ich zwinge mich, voll weiterzuarbeiten und zeige meine Trauer nicht.",
      "Ich melde mich krank und bleibe zu Hause.",
      "Ich sage mir, dass Arbeit Ablenkung ist, und blendee die Trauer aus.",
    ],
    0,
    "Sabine ist in Trauer. Kurzfristige Kommunikation und um Entlastung bitten ist Situationsmodifikation und beugt Überforderung vor, ohne die Leistung langfristig zu gefährden."
  ),
  task(
    "er-off-44",
    "Max wird von einem Kollegen vor anderen lächerlich gemacht. Er ist verletzt und wütend. Er möchte sich wehren, ohne das Arbeitsklima zu vergiften. Wie gehen Sie in der Situation von Max idealerweise vor?",
    [
      "Ich spreche den Kollegen später unter vier Augen an und sage, dass ich solche Äußerungen nicht in Ordnung finde.",
      "Ich kontere sofort vor allen und mache eine scharfe Bemerkung.",
      "Ich ignoriere es und meide den Kollegen.",
      "Ich sage mir, dass es nur ein Witz war, und stecke es weg.",
    ],
    0,
    "Max will sich wehren und das Klima wahren. Ein klares Vier-Augen-Gespräch ist Situationsmodifikation und setzt Grenzen ohne öffentliche Eskalation."
  ),
  task(
    "er-off-45",
    "Yvonne hat eine Prüfung verhauen und ist am Boden. Sie hat in wenigen Tagen die nächste Prüfung. Sie möchte sich wieder fangen und die nächste Chance nutzen. Wie gehen Sie in der Situation von Yvonne idealerweise vor?",
    [
      "Ich sage mir, dass eine verhauene Prüfung kein Weltuntergang ist und ich aus den Fehlern für die nächste lernen kann.",
      "Ich gönne mir mehrere Tage Pause und lerne dann weiter.",
      "Ich rede mit niemandem darüber und lerne Tag und Nacht für die nächste Prüfung.",
      "Ich gebe die nächste Prüfung auf und konzentriere mich auf andere Fächer.",
    ],
    0,
    "Yvonne soll die nächste Prüfung angehen. Kognitive Umbewertung (nicht katastrophisieren, aus Fehlern lernen) reduziert Scham und unterstützt motiviertes Weiterlernen."
  ),
  task(
    "er-off-46",
    "Frank ist Arzt in einer Schwerpunktpraxis. Ein Patient besteht auf einem Medikament, das Frank für nicht indiziert hält. Der Patient wird laut. Frank möchte den Patienten gut beraten und die Beziehung nicht beschädigen. Wie gehen Sie in der Situation von Frank idealerweise vor?",
    [
      "Ich erkläre ruhig, warum ich das Medikament nicht für sinnvoll halte, und frage, welche Beschwerden oder Ängste er hat, um gemeinsam eine Lösung zu finden.",
      "Ich verschreibe das Medikament, um den Konflikt zu vermeiden.",
      "Ich weise den Patienten zurecht und verweise auf meine fachliche Einschätzung.",
      "Ich bitte ihn, eine zweite Meinung einzuholen, und beende das Gespräch.",
    ],
    0,
    "Frank will gut beraten und die Beziehung wahren. Ruhige Erklärung, Nachfragen nach Beschwerden/Ängsten und gemeinsame Lösungssuche sind Situationsmodifikation."
  ),
  task(
    "er-off-47",
    "Melanie hat Streit mit ihrer Partnerin und kann im Büro nicht abschalten. Sie hat eine wichtige Besprechung. Sie möchte in der Besprechung präsent und sachlich sein. Wie gehen Sie in der Situation von Melanie idealerweise vor?",
    [
      "Ich sage mir, dass ich die Besprechung jetzt sachlich angehen kann und wir den Streit später in Ruhe klären werden.",
      "Ich rufe meine Partnerin kurz an und versuche, den Streit zu lösen.",
      "Ich sage der Besprechung ab.",
      "Ich versuche, an nichts zu denken und nur auf die Agenda zu achten.",
    ],
    0,
    "Melanie muss kurzfristig präsent sein. Kognitive Umbewertung (jetzt Fokus auf Besprechung, Streit später klären) unterstützt Präsenz und Sachlichkeit."
  ),
  task(
    "er-off-48",
    "Steffen wird von seinem Chef vor dem Team kritisiert. Er findet die Kritik ungerecht und ist beschämt. Er möchte seine Position wahren und das Verhältnis zum Chef nicht dauerhaft belasten. Wie gehen Sie in der Situation von Steffen idealerweise vor?",
    [
      "Ich nehme die Kritik in der Runde sachlich zur Kenntnis und bitte den Chef später um ein kurzes Gespräch, um meine Sicht darzulegen.",
      "Ich weise die Kritik sofort vor allen zurück.",
      "Ich sage mir, dass Chefs manchmal unfair sind, und ignoriere es.",
      "Ich kündige innerlich und suche mir einen neuen Job.",
    ],
    0,
    "Steffen will Position und Verhältnis wahren. In der Runde sachlich bleiben und später die eigene Sicht in einem Zweiergespräch einbringen ist Situationsmodifikation."
  ),
  task(
    "er-off-49",
    "Gabi hat einen Fehler in einer Abrechnung gemacht, der einem Kunden Nachteile brachte. Sie ist beschämt und hat Schuldgefühle. Sie möchte den Fehler korrigieren und das Vertrauen des Kunden wiederherstellen. Wie gehen Sie in der Situation von Gabi idealerweise vor?",
    [
      "Ich melde mich beim Kunden, entschuldige mich, erkläre die Korrektur und biete an, alle entstandenen Nachteile auszugleichen.",
      "Ich korrigiere die Abrechnung still und hoffe, dass der Kunde es nicht merkt.",
      "Ich sage mir, dass Fehler passieren und ich es beim nächsten Mal besser mache.",
      "Ich bitte eine Kollegin, den Kunden anzurufen und die Sache zu regeln.",
    ],
    0,
    "Gabi will korrigieren und Vertrauen wiederherstellen. Aktive Kontaktaufnahme, Entschuldigung und konkrete Wiedergutmachung sind Situationsmodifikation und unterstützen beide Ziele."
  ),
  task(
    "er-off-50",
    "Patrick hat vor einem großen Publikum einen Blackout bei einer Präsentation. Er ist zutiefst beschämt. Er muss in zwei Wochen erneut präsentieren. Er möchte das nächste Mal selbstbewusst auftreten. Wie gehen Sie in der Situation von Patrick idealerweise vor?",
    [
      "Ich sage mir, dass Blackouts vielen passieren, das Publikum es oft weniger schlimm sieht als ich, und ich mich beim nächsten Mal gut vorbereiten kann.",
      "Ich vermeide von nun an alle Präsentationen vor großem Publikum.",
      "Ich übe die nächste Präsentation endlos und vermeide jede Ablenkung.",
      "Ich rede mit einer Vertrauensperson über die Scham und übe dann weiter.",
    ],
    0,
    "Patrick soll beim nächsten Mal selbstbewusst sein. Kognitive Umbewertung (normalisieren, Perspektive des Publikums, Vorbereitung) reduziert Scham und unterstützt das nächste Auftreten."
  ),
  task(
    "er-off-51",
    "Sonja arbeitet in der Altenpflege. Eine Bewohnerin wirft ihr vor, sie habe ihre Sachen verlegt. Sonja hat nichts verlegt und ist verletzt. Sie möchte die Bewohnerin gut betreuen und den Vorwurf nicht eskalieren. Wie gehen Sie in der Situation von Sonja idealerweise vor?",
    [
      "Ich bleibe ruhig, bestätige die Sorge der Bewohnerin und biete an, gemeinsam zu suchen und die Abläufe zu prüfen.",
      "Ich weise den Vorwurf entschieden zurück.",
      "Ich sage mir, dass demente Menschen manchmal Dinge vergessen, und ignoriere den Vorwurf.",
      "Ich bitte eine Kollegin, die Bewohnerin zu übernehmen.",
    ],
    0,
    "Sonja will gut betreuen und nicht eskalieren. Ruhiges Reagieren, Anerkennen der Sorge und gemeinsames Suchen sind Situationsmodifikation."
  ),
  task(
    "er-off-52",
    "Tobias hat einen wichtigen Wettkampf. Ein Konkurrent macht vor dem Start abfällige Kommentare. Tobias wird wütend und unsicher. Er möchte konzentriert und stark performen. Wie gehen Sie in der Situation von Tobias idealerweise vor?",
    [
      "Ich sage mir, dass solche Kommentare oft Taktik sind und meine Vorbereitung und Konzentration zählen.",
      "Ich kontere und weise ihn zurecht.",
      "Ich melde ihn beim Schiedsrichter.",
      "Ich lenke mich mit Musik ab und höre nicht hin.",
    ],
    0,
    "Tobias will konzentriert performen. Kognitive Umbewertung (Kommentare als Taktik, Fokus auf eigene Vorbereitung) reduziert Wut und Unsicherheit."
  ),
  task(
    "er-off-53",
    "Ute hat eine Beförderung nicht bekommen und fühlt sich übergangen. Sie ist enttäuscht und wütend. Sie möchte im Unternehmen bleiben und sich weiterentwickeln. Wie gehen Sie in der Situation von Ute idealerweise vor?",
    [
      "Ich frage nach Feedback zu meiner Bewerbung und was ich verbessern kann, und setze mir Ziele für die nächste Chance.",
      "Ich konfrontiere meinen Chef und verlange eine Erklärung.",
      "Ich sage mir, dass Beförderungen oft politisch sind, und akzeptiere es.",
      "Ich suche mir einen neuen Job.",
    ],
    0,
    "Ute will bleiben und sich weiterentwickeln. Nachfragen nach Feedback und konkrete Ziele setzen ist aktive Situationsmodifikation und unterstützt die nächste Chance."
  ),
  task(
    "er-off-54",
    "Werner muss einem Patienten eine schlechte Diagnose mitteilen. Er hat Mitgefühl und zugleich Angst, etwas falsch zu formulieren. Er möchte einfühlsam und klar informieren. Wie gehen Sie in der Situation von Werner idealerweise vor?",
    [
      "Ich bereite mich kurz vor, nehme mir Zeit für das Gespräch und biete an, eine Vertrauensperson dazu zu holen oder später nochmals zu sprechen.",
      "Ich sage mir, dass ich das schon oft gemacht habe, und informiere sachlich.",
      "Ich überlasse die Mitteilung einer erfahreneren Kollegin oder einem Kollegen.",
      "Ich informiere knapp und vermeide emotionale Worte.",
    ],
    0,
    "Werner will einfühlsam und klar informieren. Vorbereitung, ausreichend Zeit und Angebot (Vertrauensperson, Folgetermin) sind Situationsmodifikation und unterstützen beide Ziele."
  ),
  task(
    "er-off-55",
    "Xenia hat einen Konflikt mit ihrer Schwester und kann nicht schlafen. Sie hat morgen eine wichtige Prüfung. Sie möchte ausgeruht und konzentriert sein. Wie gehen Sie in der Situation von Xenia idealerweise vor?",
    [
      "Ich sage mir, dass ich den Konflikt morgen oder nach der Prüfung angehen kann und jetzt Schlaf und Ruhe Priorität haben.",
      "Ich rufe meine Schwester an und versuche, den Konflikt sofort zu lösen.",
      "Ich nehme ein Schlafmittel.",
      "Ich liege wach und grüble weiter.",
    ],
    0,
    "Xenia muss kurzfristig schlafen und konzentriert sein. Kognitive Umbewertung (Konflikt später angehen, jetzt Schlaf priorisieren) unterstützt Erholung und Leistung."
  ),
  task(
    "er-off-56",
    "Zara wird in einer Besprechung von einem Kollegen unterbrochen und übergangen. Sie ist frustriert. Sie möchte ihre Ideen einbringen und als gleichwertig wahrgenommen werden. Wie gehen Sie in der Situation von Zara idealerweise vor?",
    [
      "Ich ergreife in einer Pause das Wort und bringe meine Punkte sachlich ein, oder bitte die Moderation um Redezeit.",
      "Ich unterbreche den Kollegen und bestehe auf meinem Beitrag.",
      "Ich sage mir, dass Besprechungen oft chaotisch sind, und schreibe meine Ideen später per Mail.",
      "Ich halte mich zurück und schweige.",
    ],
    0,
    "Zara will ihre Ideen einbringen. Die Situation aktiv nutzen (Pause, Moderation) ist Situationsmodifikation und unterstützt Sichtbarkeit ohne Eskalation."
  ),
  task(
    "er-off-57",
    "Albert hat einen Unfall mit Personenschaden miterlebt und ist unter Schock. Er soll in einer Stunde eine Besprechung leiten. Er möchte handlungsfähig bleiben. Wie gehen Sie in der Situation von Albert idealerweise vor?",
    [
      "Ich hole mir kurz Unterstützung (Kollegin oder Kollege, Vertrauensperson), teile mit, was passiert ist, und entscheide dann, ob ich die Besprechung leiten oder vertreten lasse.",
      "Ich zwinge mich, die Besprechung zu leiten und den Vorfall zu verdrängen.",
      "Ich sagt die Besprechung ab und geht nach Hause.",
      "Ich atme tief durch und sage mir, dass ich das schaffe.",
    ],
    0,
    "Albert ist unter Schock. Kurze Unterstützung holen und dann bewusste Entscheidung (leiten oder vertreten lassen) ist aktive Problemlösung und schützt vor Überforderung."
  ),
  task(
    "er-off-58",
    "Brigitte hat einen Fehler in einer Patientenakte gemacht. Es ist aufgefallen. Sie ist beschämt und hat Angst vor Konsequenzen. Sie möchte den Fehler aufarbeiten und ihr professionelles Ansehen wahren. Wie gehen Sie in der Situation von Brigitte idealerweise vor?",
    [
      "Ich melde den Fehler offen, korrigiere die Akte und frage nach einem klärenden Gespräch oder einer Schulung, um Wiederholungen zu vermeiden.",
      "Ich korrigiere die Akte still und hoffe, dass niemand nachfragt.",
      "Ich sage mir, dass Fehler menschlich sind, und mache einfach weiter.",
      "Ich schiebe die Schuld auf ein Systemproblem.",
    ],
    0,
    "Brigitte will aufarbeiten und Ansehen wahren. Offene Meldung, Korrektur und Angebot (Gespräch, Schulung) sind Situationsmodifikation und zeigen Verantwortung."
  ),
  task(
    "er-off-59",
    "Cedric wird von einem Kunden rassistisch beleidigt. Er ist wütend und verletzt. Er möchte den Kunden sachlich bedienen und sich nicht herablassend behandeln lassen. Wie gehen Sie in der Situation von Cedric idealerweise vor?",
    [
      "Ich weise die Äußerung ruhig und bestimmt zurück und biete an, das Gespräch sachlich fortzusetzen oder einen Kollegen hinzuzuziehen.",
      "Ich breche den Kontakt ab und verlasse den Raum.",
      "Ich ignoriere die Äußerung und bediene weiter.",
      "Ich werde laut und weise den Kunden zurecht.",
    ],
    0,
    "Cedric will sachlich bedienen und Grenzen setzen. Klare, ruhige Zurückweisung und Angebot (sachlich weiter oder Kollege) ist Situationsmodifikation."
  ),
  task(
    "er-off-60",
    "Diana hat eine Absage für ein Stipendium bekommen. Sie ist enttäuscht und zweifelt an sich. Sie möchte weiter Stipendien und Förderungen beantragen. Wie gehen Sie in der Situation von Diana idealerweise vor?",
    [
      "Ich sage mir, dass Absagen häufig sind und nicht meine gesamte Eignung widerspiegeln, und hole mir Feedback für die nächste Bewerbung.",
      "Ich gibt alle Stipendienbewerbungen auf.",
      "Ich gönne mir eine Pause und bewerbe mich in ein paar Monaten wieder.",
      "Ich rede nur mit Vertrauten darüber und bewerbe mich heimlich weiter.",
    ],
    0,
    "Diana soll weiter Anträge stellen. Kognitive Umbewertung (Absagen normalisieren, Feedback nutzen) reduziert Zweifel und erhält Motivation."
  ),
  task(
    "er-off-61",
    "Erik muss in einer Krise eine schwierige Entscheidung treffen. Er ist unsicher und hat Angst, falsch zu liegen. Er möchte verantwortungsvoll und rational entscheiden. Wie gehen Sie in der Situation von Erik idealerweise vor?",
    [
      "Ich hole mir kurz die nötigen Informationen und eine zweite Meinung ein, und treffe dann die beste Entscheidung mit dem Wissen von jetzt.",
      "Ich schiebe die Entscheidung so lange wie möglich auf.",
      "Ich sage mir, dass ich alles richtig mache, und entscheide aus dem Bauch.",
      "Ich delegiere die Entscheidung an jemand anderen.",
    ],
    0,
    "Erik will verantwortungsvoll entscheiden. Kurze Informationsbeschaffung und Zweitmeinung sind Situationsmodifikation und reduzieren Unsicherheit."
  ),
  task(
    "er-off-62",
    "Frieda hat einen Vortrag gehalten und bekommt harsches Feedback. Sie ist gekränkt. Sie möchte dazulernen und sich nicht entmutigen lassen. Wie gehen Sie in der Situation von Frieda idealerweise vor?",
    [
      "Ich nehme das Feedback sachlich auf, filtere die hilfreichen Punkte heraus und plane konkrete Verbesserungen für das nächste Mal.",
      "Ich weise das Feedback zurück und verteidige meinen Vortrag.",
      "Ich sage mir, dass Kritik oft ungerecht ist, und ignoriere sie.",
      "Ich halte keine Vorträge mehr.",
    ],
    0,
    "Frieda will dazulernen und motiviert bleiben. Feedback sachlich nutzen und konkrete Schritte planen ist kognitive/situative Verarbeitung und unterstützt das Ziel."
  ),
  task(
    "er-off-63",
    "Gustav wird von einem Nachbarn lautstark beschuldigt, zu viel Lärm zu machen. Gustav hat an dem Abend kaum Musik gehört und ist empört. Er möchte den Frieden in der Nachbarschaft wahren. Wie gehen Sie in der Situation von Gustav idealerweise vor?",
    [
      "Ich bleibe ruhig, höre die Beschwerde an und schlage vor, bei künftigen Vorkommnissen direkt zu reden oder die Hausverwaltung einzuschalten.",
      "Ich weise den Nachbarn scharf zurecht.",
      "Ich sage mir, dass Nachbarn oft übertreiben, und ignoriere es.",
      "Ich mache von nun an absichtlich leise.",
    ],
    0,
    "Gustav will den Frieden wahren. Ruhiges Anhören und konkrete Vereinbarung (direkt ansprechen, Hausverwaltung) ist Situationsmodifikation."
  ),
  task(
    "er-off-64",
    "Helga hat einen geliebten Menschen durch Suizid verloren. Sie ist von Trauer und Schuldgefühlen überwältigt. Sie möchte langfristig wieder ins Leben finden. Wie gehen Sie in der Situation von Helga idealerweise vor?",
    [
      "Ich suche mir professionelle oder vertraute Begleitung (Trauergruppe, Therapeutin oder Therapeut, nahe Person), die meine Trauer und Schuldgefühle annehmen und mit mir aushalten.",
      "Ich sage mir, dass ich keine Schuld trage, und versuche, weiterzumachen.",
      "Ich rede mit niemandem darüber und verarbeite allein.",
      "Ich lenke mich mit Arbeit und Aktivitäten ab.",
    ],
    0,
    "Helga ist schwer belastet. Professionelle oder vertraute Begleitung, die Trauer und Schuld annehmen, unterstützt langfristig die Verarbeitung und das Wiederfinden ins Leben."
  ),
  task(
    "er-off-65",
    "Ivan wird in einem Meeting von einem Vorgesetzten bloßgestellt. Er ist beschämt und wütend. Er möchte im Unternehmen weiterarbeiten und sein Gesicht wahren. Wie gehen Sie in der Situation von Ivan idealerweise vor?",
    [
      "Ich nehme in der Runde sachlich zur Kenntnis und bitte den Vorgesetzten später um ein kurzes Gespräch, um die Situation zu klären.",
      "Ich weise die Bloßstellung sofort vor allen zurück.",
      "Ich sage mir, dass Vorgesetzte manchmal unfair sind, und vergesse es.",
      "Ich kündige.",
    ],
    0,
    "Ivan will weiterarbeiten und Gesicht wahren. In der Runde sachlich bleiben und später klärendes Gespräch suchen ist Situationsmodifikation."
  ),
  task(
    "er-off-66",
    "Julia hat eine Panikattacke vor einer wichtigen Prüfung. Sie ist gut vorbereitet. Sie möchte die Prüfung antreten und sich beruhigen. Wie gehen Sie in der Situation von Julia idealerweise vor?",
    [
      "Ich atme bewusst, sage mir, dass die Panik vorübergeht und ich den Stoff beherrsche, und trete dann an.",
      "Ich gehe nach Hause und melde mich krank.",
      "Ich trinke Wasser und lenke mich mit anderen Gedanken ab.",
      "Ich sage mir, dass Prüfungen unwichtig sind.",
    ],
    0,
    "Julia ist vorbereitet. Atemkontrolle und kognitive Umbewertung (Panik vorübergehend, Kompetenz) unterstützen Beruhigung und Antreten."
  ),
  task(
    "er-off-67",
    "Klaus hat einen Konflikt mit seinem erwachsenen Kind. Er ist traurig und fühlt sich abgelehnt. Er möchte die Beziehung nicht verlieren. Wie gehen Sie in der Situation von Klaus idealerweise vor?",
    [
      "Ich schlage ein ruhiges Gespräch vor, höre zu, was das Kind zu sagen hat, und signalisiere, dass mir die Beziehung wichtig ist.",
      "Ich warte ab und hoffe, dass das Kind sich meldet.",
      "Ich bestehe auf meiner Sicht und verlange eine Entschuldigung.",
      "Ich breche den Kontakt ab, um mich zu schützen.",
    ],
    0,
    "Klaus will die Beziehung erhalten. Gespräch anbieten, Zuhören und Wertschätzung signalisieren sind Situationsmodifikation und unterstützen die Beziehung."
  ),
  task(
    "er-off-68",
    "Lena wird von einer Freundin im Freundeskreis schlecht gemacht. Sie ist verletzt und wütend. Sie möchte die Freundschaften nicht verlieren und sich wehren. Wie gehen Sie in der Situation von Lena idealerweise vor?",
    [
      "Ich spreche die Freundin unter vier Augen an und sage, wie ich die Situation erlebe, und frage nach ihrer Sicht.",
      "Ich mache vor der Gruppe eine Szene.",
      "Ich meide die Freundin und rede mit anderen darüber.",
      "Ich sage mir, dass Gerüchte oft übertrieben sind, und ignoriere es.",
    ],
    0,
    "Lena will Freundschaften wahren und sich wehren. Ein klares Vier-Augen-Gespräch ist Situationsmodifikation und setzt Grenzen ohne Gruppendynamik zu eskalieren."
  ),
  task(
    "er-off-69",
    "Markus hat einen wichtigen Kunden verloren. Er macht sich Vorwürfe und ist niedergeschlagen. Er muss weitere Kunden gewinnen und motiviert bleiben. Wie gehen Sie in der Situation von Markus idealerweise vor?",
    [
      "Ich werte die Situation sachlich aus, hole mir bei Bedarf Feedback, und setze mir konkrete nächste Schritte für Akquise und Kundenbeziehung.",
      "Ich schiebe die Schuld auf den Kunden oder den Markt.",
      "Ich gönne mir eine Pause und kümmere mich erst später wieder um Akquise.",
      "Ich sage mir, dass Verluste dazugehören, und mache einfach weiter.",
    ],
    0,
    "Markus soll motiviert weiter Kunden gewinnen. Sachliche Auswertung, Feedback und konkrete Schritte sind Situationsmodifikation und reduzieren Selbstvorwürfe."
  ),
  task(
    "er-off-70",
    "Nadia hat einen Fehler in einer Rechnung gemacht, der einem Kollegen Ärger eingebracht hat. Der Kollege ist wütend auf sie. Nadia hat Schuldgefühle. Sie möchte den Fehler korrigieren und das Verhältnis zum Kollegen reparieren. Wie gehen Sie in der Situation von Nadia idealerweise vor?",
    [
      "Ich entschuldige mich beim Kollegen, korrigiere den Fehler sofort und biete an, bei der Aufklärung gegenüber Dritten zu helfen.",
      "Ich korrigiere den Fehler still und vermeide den Kollegen.",
      "Ich sage mir, dass Fehler passieren, und warte ab.",
      "Ich schiebe die Schuld auf das System.",
    ],
    0,
    "Nadia will korrigieren und das Verhältnis reparieren. Entschuldigung, sofortige Korrektur und aktive Mithilfe sind Situationsmodifikation."
  ),
  task(
    "er-off-71",
    "Olaf hat eine wichtige Verhandlung. Der Verhandlungspartner wird aggressiv und persönlich. Olaf ist verärgert. Er möchte ein gutes Ergebnis erzielen und die Beziehung nicht zerstören. Wie gehen Sie in der Situation von Olaf idealerweise vor?",
    [
      "Ich bleibe sachlich, weise persönliche Angriffe kurz zurück und lenke auf die Inhalte und gemeinsame Interessen um.",
      "Ich kontere genauso scharf.",
      "Ich beende die Verhandlung und gehe.",
      "Ich ignoriere die Angriffe und konzentriere mich nur auf die Zahlen.",
    ],
    0,
    "Olaf will Ergebnis und Beziehung wahren. Sachlich bleiben, Angriffe zurückweisen und Fokus auf Inhalte/Interessen ist Situationsmodifikation."
  ),
  task(
    "er-off-72",
    "Petra hat eine Kritik von ihrer Chefin bekommen, die sie als ungerecht empfindet. Sie ist wütend und verletzt. Sie möchte ihre Leistung anerkennen lassen und das Verhältnis zur Chefin nicht beschädigen. Wie gehen Sie in der Situation von Petra idealerweise vor?",
    [
      "Ich bitte um ein klärendes Gespräch, bereite meine Sicht und Beispiele vor und höre die Chefin an.",
      "Ich weise die Kritik in einer E-Mail zurück.",
      "Ich sage mir, dass Chefs manchmal unfair sind, und arbeite wie bisher.",
      "Ich kündige innerlich und such mir was Neues.",
    ],
    0,
    "Petra will Anerkennung und Verhältnis wahren. Ein vorbereitetes, klares Gespräch mit Raum für beide Sichten ist Situationsmodifikation."
  ),
  task(
    "er-off-73",
    "Quentin hat vor einer Gruppe einen Witz gemacht, der falsch ankam. Er ist zutiefst beschämt. Er muss die Gruppe weiter leiten. Er möchte das Klima wiederherstellen und nicht als unempfindlich gelten. Wie gehen Sie in der Situation von Quentin idealerweise vor?",
    [
      "Ich nehme kurz Stellung, entschuldige mich bei den Getroffenen und fahre dann sachlich mit dem Thema fort.",
      "Ich tue so, als sei nichts passiert.",
      "Ich mache einen weiteren Witz, um die Stimmung aufzulockern.",
      "Ich beende die Runde und gehe.",
    ],
    0,
    "Quentin will Klima wiederherstellen. Kurze Stellungnahme und Entschuldigung sind Situationsmodifikation und zeigen Empathie."
  ),
  task(
    "er-off-74",
    "Rosa hat einen Konflikt mit ihrer Mutter, die sie unter Druck setzt. Sie ist wütend und schuldig zugleich. Sie möchte die Beziehung erhalten und trotzdem Grenzen setzen. Wie gehen Sie in der Situation von Rosa idealerweise vor?",
    [
      "Ich spreche mit ihr in ruhigem Ton, sage, wie ich mich fühle, und schlage konkrete Grenzen oder Absprachen vor.",
      "Ich breche den Kontakt vorübergehend ab.",
      "Ich gebe nach und tue, was sie will.",
      "Ich sage mir, dass Mütter halt so sind, und ertrage es.",
    ],
    0,
    "Rosa will Beziehung und Grenzen. Ruhiges Gespräch mit klarer Rückmeldung und konkreten Absprachen ist Situationsmodifikation."
  ),
  task(
    "er-off-75",
    "Stefan hat einen wichtigen Lauf. Sein Konkurrent provoziert ihn vor dem Start. Stefan wird wütend. Er möchte konzentriert und in Bestform laufen. Wie gehen Sie in der Situation von Stefan idealerweise vor?",
    [
      "Ich sage mir, dass Provokationen oft Taktik sind und meine Konzentration auf den Lauf zählt.",
      "Ich kontere und werde laut.",
      "Ich melde ihn beim Kampfrichter.",
      "Ich atme tief und ignoriere ihn komplett.",
    ],
    0,
    "Stefan will konzentriert laufen. Kognitive Umbewertung (Provokation als Taktik, Fokus auf sich) reduziert Wut und unterstützt Leistung."
  ),
  task(
    "er-off-76",
    "Theresa hat eine Prüfung bestanden, aber eine Kommilitonin, die durchgefallen ist, meidet sie. Theresa fühlt sich schuldig und unsicher. Sie möchte die Beziehung zur Kommilitonin nicht verlieren. Wie gehen Sie in der Situation von Theresa idealerweise vor?",
    [
      "Ich spreche die Kommilitonin an, zeige Verständnis für ihre Enttäuschung und signalisiere, dass ich für sie da bin.",
      "Ich warte ab, bis sie sich meldet.",
      "Ich vermeide sie, um sie nicht zu verletzen.",
      "Ich sage mir, dass ihr Durchfallen nicht meine Schuld ist.",
    ],
    0,
    "Theresa will die Beziehung erhalten. Ansprechen, Verständnis zeigen und Verfügbarkeit signalisieren schaffen Nähe und unterstützen die Beziehung."
  ),
  task(
    "er-off-77",
    "Uwe hat einen Konflikt mit einem Nachbarn wegen Parkplatz. Er ist genervt. Er möchte den Hausfrieden wahren. Wie gehen Sie in der Situation von Uwe idealerweise vor?",
    [
      "Ich schlage ein kurzes Gespräch vor und suche gemeinsam nach einer fairen Lösung oder klaren Absprachen.",
      "Ich ignoriere den Nachbarn und parke wo ich will.",
      "Ich beschwere mich bei der Hausverwaltung.",
      "Ich sage mir, dass Nachbarn oft schwierig sind, und ertrage es.",
    ],
    0,
    "Uwe will den Hausfrieden wahren. Gespräch und gemeinsame Lösung/Absprache sind Situationsmodifikation."
  ),
  task(
    "er-off-78",
    "Vera hat einen Fehler in einer Präsentation gemacht und wurde darauf hingewiesen. Sie ist beschämt. Sie muss in Kürze erneut präsentieren. Sie möchte selbstbewusst und fehlerfrei auftreten. Wie gehen Sie in der Situation von Vera idealerweise vor?",
    [
      "Ich nehme das Feedback an, übe den korrigierten Teil und sage mir, dass Fehler beim Lernen dazugehören.",
      "Ich vermeide künftig alle Präsentationen.",
      "Ich ignoriere den Hinweis und mache beim nächsten Mal alles anders.",
      "Ich entschuldige mich öffentlich und mache mich klein.",
    ],
    0,
    "Vera will selbstbewusst und fehlerfrei präsentieren. Feedback annehmen, üben und kognitive Umbewertung (Fehler als Lernchance) unterstützen das Ziel."
  ),
  task(
    "er-off-79",
    "Wolfgang wird von einem Kunden unfair beschuldigt. Er ist wütend. Er möchte den Kunden sachlich bedienen und den Vorfall klären. Wie gehen Sie in der Situation von Wolfgang idealerweise vor?",
    [
      "Ich bleibe ruhig, höre die Beschwerde an und schlage vor, die Sache sachlich zu prüfen (Akten, Zeugen) und dann zu klären.",
      "Ich weise die Beschuldigung sofort zurück.",
      "Ich beende das Gespräch und hole meinen Vorgesetzten.",
      "Ich sage mir, dass Kunden oft unfair sind, und bediene weiter.",
    ],
    0,
    "Wolfgang will sachlich bedienen und klären. Ruhiges Anhören und sachliche Prüfung/Klärung sind Situationsmodifikation."
  ),
  task(
    "er-off-80",
    "Yvonne hat eine Absage für einen Auslandsaufenthalt bekommen. Sie ist enttäuscht. Sie möchte andere Wege ins Ausland finden und motiviert bleiben. Wie gehen Sie in der Situation von Yvonne idealerweise vor?",
    [
      "Ich sage mir, dass es andere Programme und Wege gibt, und informiere mich über Alternativen und Bewerbungstipps.",
      "Ich gibt den Wunsch nach Ausland auf.",
      "Ich rede mit niemandem darüber und bewerbe mich heimlich weiter.",
      "Ich warte ein Jahr und bewerbe mich erneut beim gleichen Programm.",
    ],
    0,
    "Yvonne soll motiviert nach Alternativen suchen. Kognitive Umbewertung (andere Wege) und aktive Informationssuche unterstützen das Ziel."
  ),
  task(
    "er-off-81",
    "Zeno hat einen Konflikt mit seinem Partner vor Gästen. Er ist verletzt und wütend. Er möchte den Abend nicht verderben und die Beziehung nicht vor anderen eskalieren. Wie gehen Sie in der Situation von Zeno idealerweise vor?",
    [
      "Ich signalisiere ruhig, dass wir das später besprechen, und lenke auf die Gäste und ein sachliches Thema um.",
      "Ich kontere vor allen und starte einen Streit.",
      "Ich verlasse die Runde und gehe in ein anderes Zimmer.",
      "Ich schweige den Rest des Abends.",
    ],
    0,
    "Zeno will den Abend und die Beziehung schützen. Konflikt verschieben und Fokus auf Gäste/Thema ist Situationsmodifikation."
  ),
  task(
    "er-off-82",
    "Anna wird von einer Kollegin hinter ihrem Rücken kritisiert. Sie ist verletzt. Sie möchte das Arbeitsklima und ihr Ansehen wahren. Wie gehen Sie in der Situation von Anna idealerweise vor?",
    [
      "Ich spreche die Kollegin unter vier Augen an und frage, ob es ein Problem gibt, und ob wir es sachlich klären können.",
      "Ich konfrontiere sie vor dem Team.",
      "Ich rede mit anderen über sie.",
      "Ich ignoriere es und meide sie.",
    ],
    0,
    "Anna will Klima und Ansehen wahren. Ein klares Vier-Augen-Gespräch ist Situationsmodifikation und setzt Grenzen ohne öffentliche Eskalation."
  ),
  task(
    "er-off-83",
    "Bernd hat einen wichtigen Vertrag verloren. Er macht sich Vorwürfe. Er muss weitere Geschäfte abschließen und motiviert bleiben. Wie gehen Sie in der Situation von Bernd idealerweise vor?",
    [
      "Ich werte sachlich aus, was schiefgelaufen ist, und setze mir konkrete Schritte für die nächsten Verhandlungen.",
      "Ich schiebe die Schuld auf den Kunden oder den Markt.",
      "Ich gönne mir eine lange Pause.",
      "Ich sage mir, dass Verluste dazugehören, und mache weiter wie bisher.",
    ],
    0,
    "Bernd soll motiviert weiter Geschäfte machen. Sachliche Auswertung und konkrete nächste Schritte sind Situationsmodifikation."
  ),
  task(
    "er-off-84",
    "Clara hat einen Patienten verloren. Sie ist traurig und hat Schuldgefühle. Sie muss am nächsten Tag weiterarbeiten. Sie möchte professionell und einfühlsam bleiben. Wie gehen Sie in der Situation von Clara idealerweise vor?",
    [
      "Ich nehme mir kurz Zeit (Supervision, Kollegin oder Kollege, Pause), um die Gefühle zu sortieren, und erlaube mir, traurig zu sein, ohne die Schuld allein auf mich zu laden.",
      "Ich verdränge die Gefühle und arbeite weiter.",
      "Ich melde mich krank.",
      "Ich sage mir, dass Sterben zum Beruf gehört, und fühle nichts.",
    ],
    0,
    "Clara ist belastet. Kurze Verarbeitung (Supervision, Gespräch, Pause) und Akzeptanz der Trauer ohne übermäßige Schuldzuweisung unterstützen langfristig Professionalität und Einfühlsamkeit."
  ),
  task(
    "er-off-85",
    "Detlef wird von seinem Teenager abweisend behandelt. Er ist verletzt. Er möchte die Beziehung zum Kind nicht verlieren. Wie gehen Sie in der Situation von Detlef idealerweise vor?",
    [
      "Ich signalisiere, dass ich da bin, ohne zu drängen, und biete an, zuzuhören, wenn das Kind reden möchte.",
      "Ich konfrontiere das Kind und verlange Respekt.",
      "Ich ziehe mich zurück und warte ab.",
      "Ich bestrafe das Kind für die Abweisung.",
    ],
    0,
    "Detlef will die Beziehung erhalten. Präsenz ohne Druck und Angebot zum Zuhören sind beziehungsfördernd und entsprechen dem Entwicklungsalter."
  ),
  task(
    "er-off-86",
    "Eva hat einen Vortrag gehalten und wurde nicht gefragt. Sie fühlt sich unsichtbar. Sie möchte beim nächsten Mal mehr wahrgenommen werden. Wie gehen Sie in der Situation von Eva idealerweise vor?",
    [
      "Ich bereite beim nächsten Mal eine klare Frage oder Diskussionsanregung vor und melde mich aktiv zu Wort.",
      "Ich halte künftig keine Vorträge mehr.",
      "Ich sage mir, dass das Publikum oft passiv ist.",
      "Ich konfrontiere die Moderation und verlange mehr Beteiligung.",
    ],
    0,
    "Eva will mehr wahrgenommen werden. Konkrete Vorbereitung (Frage, Anregung) und aktives Melden sind Situationsmodifikation."
  ),
  task(
    "er-off-87",
    "Felix hat einen Konflikt mit seinem Vermieter. Er fühlt sich ungerecht behandelt. Er möchte in der Wohnung bleiben und die Situation klären. Wie gehen Sie in der Situation von Felix idealerweise vor?",
    [
      "Ich vereinbare ein sachliches Gespräch, bereite meine Punkte und Unterlagen vor und suche nach einer einvernehmlichen Lösung.",
      "Ich weigere mich zu zahlen und drohe mit dem Anwalt.",
      "Ich ziehe aus.",
      "Ich sage mir, dass Vermieter oft unfair sind, und ertrage es.",
    ],
    0,
    "Felix will bleiben und klären. Vorbereitetes, sachliches Gespräch und Suche nach Lösung sind Situationsmodifikation."
  ),
  task(
    "er-off-88",
    "Greta hat eine Beförderung an eine Kollegin verloren. Sie ist enttäuscht und neidisch. Sie möchte im Team weiterarbeiten und die Kollegin nicht abwerten. Wie gehen Sie in der Situation von Greta idealerweise vor?",
    [
      "Ich sage mir, dass die Kollegin ihre Stärken hat und ich mich auf meine nächsten Chancen und meine aktuelle Arbeit konzentrieren kann.",
      "Ich rede schlecht über die Kollegin.",
      "Ich meide die Kollegin und das Thema.",
      "Ich kündige.",
    ],
    0,
    "Greta will im Team bleiben und die Kollegin nicht abwerten. Kognitive Umbewertung (andere Stärken, eigene Chancen) reduziert Neid und erhält Kooperationsfähigkeit."
  ),
  task(
    "er-off-89",
    "Heinrich muss einem Angehörigen mitteilen, dass eine Behandlung nicht mehr wirkt. Er hat Mitgefühl und Angst vor der Reaktion. Er möchte einfühlsam und ehrlich informieren. Wie gehen Sie in der Situation von Heinrich idealerweise vor?",
    [
      "Ich nehme mir Zeit, informiere in ruhigem Ton, biete Raum für Fragen und Gefühle und frage, ob jemand zur Unterstützung dazu kommen soll.",
      "Ich informiere knapp und sachlich und beende das Gespräch schnell.",
      "Ich überlasse die Mitteilung einer anderen Person.",
      "Ich sage mir, dass ich das schon oft gemacht habe, und mache es mechanisch.",
    ],
    0,
    "Heinrich will einfühlsam und ehrlich informieren. Zeit, ruhiger Ton, Raum für Fragen/Gefühle und Angebot (Unterstützung) sind Situationsmodifikation."
  ),
  task(
    "er-off-90",
    "Ines hat einen Konflikt mit einer Schwiegermutter. Sie fühlt sich nicht akzeptiert. Sie möchte die Familienbeziehung und ihre Grenzen wahren. Wie gehen Sie in der Situation von Ines idealerweise vor?",
    [
      "Ich suche ein ruhiges Gespräch, sage, wie ich mich fühle, und schlage konkrete Absprachen oder Grenzen vor.",
      "Ich meide die Schwiegermutter so weit wie möglich.",
      "Ich lasse meinen Partner die Konflikte regeln.",
      "Ich ertrage es und sage nichts.",
    ],
    0,
    "Ines will Beziehung und Grenzen wahren. Ruhiges Gespräch mit Rückmeldung und Absprachen ist Situationsmodifikation."
  ),
  task(
    "er-off-91",
    "Jochen hat einen wichtigen Kunden durch einen Missverständnis verloren. Er ist frustriert. Er möchte den Kunden zurückgewinnen oder aus der Situation lernen. Wie gehen Sie in der Situation von Jochen idealerweise vor?",
    [
      "Ich kontaktiere den Kunden, kläre das Missverständnis sachlich und biete an, gemeinsam eine Lösung zu finden.",
      "Ich schiebe die Schuld auf den Kunden.",
      "Ich gibt den Kunden auf und konzentriere mich auf andere.",
      "Ich warte ab, ob der Kunde sich meldet.",
    ],
    0,
    "Jochen will den Kunden zurück oder lernen. Kontakt, sachliche Klärung und Lösungsangebot sind Situationsmodifikation."
  ),
  task(
    "er-off-92",
    "Karin hat eine Prüfung beim zweiten Versuch bestanden. Sie ist erleichtert, aber eine Kommilitonin, die durchgefallen ist, wirft ihr Neid vor. Karin ist unsicher. Sie möchte die Freundschaft erhalten. Wie gehen Sie in der Situation von Karin idealerweise vor?",
    [
      "Ich spreche die Kommilitonin an, zeige Verständnis für ihre Enttäuschung und signalisiere, dass ich für sie da bin und wir weiter lernen können.",
      "Ich vermeide sie.",
      "Ich prahle nicht mit dem Bestehen und wechsle das Thema.",
      "Ich sage mir, dass ihr Neid nicht mein Problem ist.",
    ],
    0,
    "Karin will die Freundschaft erhalten. Ansprechen, Verständnis und Unterstützung signalisieren sind beziehungsfördernd."
  ),
  task(
    "er-off-93",
    "Lars wird in einer Besprechung von einem Kollegen unterbrochen und übergangen. Er ist frustriert. Er möchte seine Ideen einbringen und als gleichwertig gelten. Wie gehen Sie in der Situation von Lars idealerweise vor?",
    [
      "Ich ergreife in einer Pause das Wort oder bitte die Moderation um Redezeit und bringe meine Punkte sachlich ein.",
      "Ich unterbreche den Kollegen laut.",
      "Ich schreibe meine Ideen später per Mail.",
      "Ich halte mich zurück.",
    ],
    0,
    "Lars will Ideen einbringen. Aktives Nutzen von Pause oder Moderation ist Situationsmodifikation."
  ),
  task(
    "er-off-94",
    "Monika hat einen Fehler in einer Patientenversorgung gemacht. Es ist nichts Schlimmes passiert, aber sie ist beschämt. Sie möchte den Fehler aufarbeiten und weiter professionell arbeiten. Wie gehen Sie in der Situation von Monika idealerweise vor?",
    [
      "Ich melde den Vorfall, dokumentiere und reflektiere mit einer Vertrauensperson oder in einer Fallbesprechung, und plane konkrete Schritte zur Vermeidung.",
      "Ich verschweige den Fehler.",
      "Ich sage mir, dass nichts passiert ist, und vergesse es.",
      "Ich bitte um Versetzung.",
    ],
    0,
    "Monika will aufarbeiten und professionell bleiben. Meldung, Reflexion und konkrete Schritte sind Situationsmodifikation und Verantwortung."
  ),
  task(
    "er-off-95",
    "Norbert wird von seinem Chef vor dem Team kritisiert. Er findet die Kritik ungerecht. Er möchte sein Gesicht wahren und das Verhältnis zum Chef nicht zerstören. Wie gehen Sie in der Situation von Norbert idealerweise vor?",
    [
      "Ich nehme in der Runde sachlich zur Kenntnis und bitte den Chef später um ein kurzes Gespräch, um meine Sicht darzulegen.",
      "Ich weise die Kritik sofort zurück.",
      "Ich sage mir, dass Chefs manchmal unfair sind.",
      "Ich kündige.",
    ],
    0,
    "Norbert will Gesicht und Verhältnis wahren. Sachlich bleiben und später Zweiergespräch suchen ist Situationsmodifikation."
  ),
  task(
    "er-off-96",
    "Olga hat einen geliebten Menschen verloren und muss in der Arbeit funktionieren. Sie kann kaum abschalten. Sie möchte ihre Leistung halten und nicht auffallen. Wie gehen Sie in der Situation von Olga idealerweise vor?",
    [
      "Ich spreche mit meiner Vorgesetzten oder einer Vertrauensperson und bitte um vorübergehende Entlastung oder flexible Pausen.",
      "Ich zwinge mich, voll weiterzuarbeiten.",
      "Ich melde mich langfristig krank.",
      "Ich verdränge die Trauer und arbeite durch.",
    ],
    0,
    "Olga ist in Trauer. Kurzfristige Kommunikation und um Entlastung bitten sind Situationsmodifikation und beugen Überforderung vor."
  ),
  task(
    "er-off-97",
    "Paul wird von einem Kunden rassistisch beleidigt. Er ist wütend und verletzt. Er möchte den Kunden sachlich bedienen und sich nicht herablassend behandeln lassen. Wie gehen Sie in der Situation von Paul idealerweise vor?",
    [
      "Ich weise die Äußerung ruhig und bestimmt zurück und biete an, sachlich weiterzumachen oder einen Kollegen hinzuzuziehen.",
      "Ich breche den Kontakt ab.",
      "Ich ignoriere die Äußerung.",
      "Ich werde laut und weise den Kunden zurecht.",
    ],
    0,
    "Paul will sachlich bedienen und Grenzen setzen. Klare Zurückweisung und Angebot (sachlich weiter oder Kollege) sind Situationsmodifikation."
  ),
  task(
    "er-off-98",
    "Rita hat einen Konflikt mit einer Kollegin, die sie vor anderen bloßstellt. Rita ist verletzt. Sie möchte das Arbeitsklima und ihr Ansehen wahren. Wie gehen Sie in der Situation von Rita idealerweise vor?",
    [
      "Ich spreche die Kollegin unter vier Augen an und sage, wie ich die Situation erlebe, und bitte um sachlichen Umgang.",
      "Ich konfrontiere sie vor dem Team.",
      "Ich rede mit anderen über sie.",
      "Ich ignoriere es.",
    ],
    0,
    "Rita will Klima und Ansehen wahren. Ein klares Vier-Augen-Gespräch ist Situationsmodifikation."
  ),
  task(
    "er-off-99",
    "Sven hat einen wichtigen Wettkampf verloren. Er ist enttäuscht. Er möchte aus der Niederlage lernen und beim nächsten Mal besser sein. Wie gehen Sie in der Situation von Sven idealerweise vor?",
    [
      "Ich werte sachlich aus, was schiefgelaufen ist, und setze mir konkrete Trainings- und taktische Ziele für das nächste Mal.",
      "Ich gebe den Sport auf.",
      "Ich rede mit niemandem darüber.",
      "Ich sage mir, dass Niederlagen dazugehören, und mache weiter wie bisher.",
    ],
    0,
    "Sven will lernen und beim nächsten Mal besser sein. Sachliche Auswertung und konkrete Ziele sind Situationsmodifikation."
  ),
  task(
    "er-off-100",
    "Tanja hat einen Konflikt mit ihrem Partner vor den Kindern. Sie ist wütend. Sie möchte den Streit nicht vor den Kindern eskalieren und die Beziehung nicht beschädigen. Wie gehen Sie in der Situation von Tanja idealerweise vor?",
    [
      "Ich schlage vor, das Thema später unter vier Augen zu besprechen, und lenke mit den Kindern auf etwas anderes um.",
      "Ich streite weiter und beziehe die Kinder ein.",
      "Ich verlasse die Wohnung.",
      "Ich schweige den Rest des Tages.",
    ],
    0,
    "Tanja will die Kinder schützen und die Beziehung nicht eskalieren. Konflikt verschieben und Fokus umlenken sind Situationsmodifikation."
  ),
];
