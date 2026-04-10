/**
 * Emotionen regulieren — Set 4 (30 Aufgaben, er-4-01 bis er-4-30)
 * Schwerpunkt: SCHWER (difficulty 2–3) — ambivalente Situationen,
 * bei denen mehrere Strategien plausibel erscheinen.
 * Nach offiziellem MedAT-Vorbild (IB ER 26.pdf):
 * - Situationsbeschreibung mit konkreten Rahmenbedingungen und Zielen
 * - 4 Strategien in Ich-Form (Vorsätze), genau eine mit Score 3
 * - Adaptive Strategien (Reappraisal, Akzeptanz, Situationsmodifikation) = Score 3
 * - Teiladaptiv = 2, Maladaptiv aber nachvollziehbar = 1, Klar maladaptiv = 0
 */

import type { EmotionenRegulierenTask } from "./sekDataNew";

export const emotionenRegulierenSet4: EmotionenRegulierenTask[] = [
  // ─── Difficulty 2 (mittel): 12 Aufgaben ────────────────────────
  {
    id: "er-4-01",
    difficulty: 2,
    situation:
      "Johanna ist Psychologin und leitet eine Gruppentherapie für Jugendliche. Ein 16-jähriger Teilnehmer erzählt plötzlich von häuslicher Gewalt. Die anderen Jugendlichen reagieren schockiert, zwei beginnen zu weinen. Johanna muss gleichzeitig den betroffenen Jugendlichen schützen, die Gruppe stabilisieren und ihre eigene Betroffenheit regulieren.",
    emotion: "Erschütterung und professionelle Überforderung",
    ziel: "Den betroffenen Jugendlichen schützen, die Gruppe stabilisieren und professionell handeln.",
    strategien: [
      {
        text: "Ich danke dem Jugendlichen für sein Vertrauen, erkläre der Gruppe, dass solche Situationen vorkommen und dass ich mich um ihn kümmern werde. Nach der Sitzung leite ich die Meldung ein und suche Supervision.",
        score: 3,
      },
      {
        text: "Ich breche die Gruppensitzung sofort ab und bringe den Jugendlichen zu meiner Kollegin, die Erfahrung mit Kinderschutzfällen hat.",
        score: 2,
      },
      {
        text: "Ich bitte den Jugendlichen, nach der Sitzung zu bleiben, und fahre mit dem geplanten Programm fort, um die Gruppe nicht weiter zu belasten.",
        score: 1,
      },
      {
        text: "Ich frage den Jugendlichen vor der Gruppe nach Details, um die Situation besser einschätzen zu können.",
        score: 0,
      },
    ],
  },
  {
    id: "er-4-02",
    difficulty: 2,
    situation:
      "Rainer ist Architekt und hat monatelang an einem Entwurf für ein Kulturzentrum gearbeitet. In der finalen Präsentation kritisiert die Jury seinen Entwurf als zu konservativ. Sein Mitbewerber, der einen sehr ähnlichen Ansatz gewählt hat, wird gelobt. Rainer vermutet, dass die Jury voreingenommen ist, weil der Mitbewerber persönliche Kontakte zur Bürgermeisterin hat.",
    emotion: "Frustration und Ungerechtigkeitsgefühl",
    ziel: "Die Situation sachlich einordnen und beruflich handlungsfähig bleiben.",
    strategien: [
      {
        text: "Ich bitte die Jury schriftlich um eine detaillierte Begründung ihrer Entscheidung und überlege, ob ich aus dem Feedback meinen Entwurf für künftige Wettbewerbe verbessern kann.",
        score: 3,
      },
      {
        text: "Ich spreche meinen Verdacht gegenüber der Jury offen aus und fordere eine Neubeurteilung.",
        score: 0,
      },
      {
        text: "Ich akzeptiere die Entscheidung und melde mich für den nächsten Wettbewerb an, ohne die Gründe zu hinterfragen.",
        score: 2,
      },
      {
        text: "Ich erzähle Kolleg:innen von meinem Verdacht und frage sie, ob sie ähnliche Erfahrungen mit dieser Jury gemacht haben.",
        score: 1,
      },
    ],
  },
  {
    id: "er-4-03",
    difficulty: 2,
    situation:
      "Elisa ist Notärztin und wurde nach einem Einsatz von den Angehörigen eines verstorbenen Patienten angegriffen und beleidigt. Ihr Oberarzt hat den Vorfall als ‚Teil des Jobs' abgetan. Elisa ist sowohl wegen des Angriffs als auch wegen der fehlenden Unterstützung aufgewühlt. In einer Stunde beginnt ihre nächste Schicht.",
    emotion: "Wut und Hilflosigkeit",
    ziel: "Die eigene Sicherheit thematisieren und arbeitsfähig bleiben.",
    strategien: [
      {
        text: "Ich melde den Vorfall schriftlich an die Klinikleitung, bitte um ein Gespräch über Sicherheitsmaßnahmen und nehme mir vor der nächsten Schicht zehn Minuten, um durchzuatmen und mich zu fokussieren.",
        score: 3,
      },
      {
        text: "Ich sage meinem Oberarzt, dass seine Reaktion inakzeptabel war, und verlange sofort einen freien Tag.",
        score: 1,
      },
      {
        text: "Ich verdränge den Vorfall und konzentriere mich auf die nächste Schicht, weil Patient:innen auf mich warten.",
        score: 2,
      },
      {
        text: "Ich rufe bei der Personalabteilung an und drohe mit Kündigung, wenn keine Sicherheitsmaßnahmen ergriffen werden.",
        score: 0,
      },
    ],
  },
  {
    id: "er-4-04",
    difficulty: 2,
    situation:
      "Georg hat seit drei Jahren einen Schrebergarten, der ihm viel bedeutet. Die Gartengemeinschaft hat beschlossen, seinen Garten zugunsten eines Gemeinschaftsprojekts umzugestalten. Georg wurde nicht vorab informiert und erfährt davon erst durch einen Aushang. Er möchte seinen Garten behalten, aber auch die Gemeinschaft nicht spalten.",
    emotion: "Ärger und Ohnmacht",
    ziel: "Den eigenen Garten nach Möglichkeit behalten, ohne die Gemeinschaft zu spalten.",
    strategien: [
      {
        text: "Ich spreche den Vorstand sachlich an, frage nach den Gründen und schlage einen Kompromiss vor, bei dem Teile meines Gartens erhalten bleiben und ich mich am Gemeinschaftsprojekt beteilige.",
        score: 3,
      },
      {
        text: "Ich sammle Unterschriften gegen die Entscheidung und mobilisiere andere Gartenbesitzer dagegen.",
        score: 1,
      },
      {
        text: "Ich akzeptiere die Entscheidung stillschweigend, weil ich keinen Streit möchte.",
        score: 2,
      },
      {
        text: "Ich weigere mich, meinen Garten aufzugeben, und drohe mit einem Anwalt.",
        score: 0,
      },
    ],
  },
  {
    id: "er-4-05",
    difficulty: 2,
    situation:
      "Miriam ist Lehrerin und hat erfahren, dass ihr Kollege seit Wochen Gerüchte über ihre angebliche Inkompetenz verbreitet. Mehrere Kolleg:innen haben sie darauf angesprochen. Miriam und der Kollege müssen nächste Woche gemeinsam ein Schulprojekt leiten. Sie möchte die Situation klären, ohne das Projekt zu gefährden.",
    emotion: "Ärger und Verletzung",
    ziel: "Die Gerüchte stoppen und die Zusammenarbeit am Projekt sicherstellen.",
    strategien: [
      {
        text: "Ich bitte den Kollegen um ein Vier-Augen-Gespräch, spreche die Gerüchte konkret an und schlage vor, dass wir uns auf eine professionelle Zusammenarbeit einigen. Falls nötig, informiere ich die Schulleitung.",
        score: 3,
      },
      {
        text: "Ich informiere sofort die Schulleitung und bitte darum, vom gemeinsamen Projekt abgezogen zu werden.",
        score: 1,
      },
      {
        text: "Ich ignoriere die Gerüchte und konzentriere mich auf das Projekt, weil sich solche Dinge von selbst erledigen.",
        score: 2,
      },
      {
        text: "Ich erzähle meinen Kolleg:innen von den Schwächen des Kollegen, damit sie seine Gerüchte in Perspektive setzen können.",
        score: 0,
      },
    ],
  },
  {
    id: "er-4-06",
    difficulty: 2,
    situation:
      "Bernhard ist Familienvater und hat gerade erfahren, dass sein Sohn in der Schule wegen schlechter Noten sitzen bleiben wird. Seine Frau gibt ihm die Schuld, weil er beruflich oft abwesend war und sich zu wenig um die schulische Unterstützung gekümmert habe. Bernhard fühlt sich schuldig, aber auch ungerecht behandelt, weil er für die Familie arbeitet.",
    emotion: "Schuldgefühle und Ärger",
    ziel: "Gemeinsam mit seiner Frau eine Lösung für den Sohn finden und den Familienfrieden wahren.",
    strategien: [
      {
        text: "Ich sage meiner Frau, dass ich ihre Sorge verstehe und mich frage, wo ich mehr hätte tun können. Ich schlage vor, dass wir gemeinsam überlegen, wie wir unseren Sohn im nächsten Schuljahr besser unterstützen.",
        score: 3,
      },
      {
        text: "Ich weise den Vorwurf zurück und sage, dass ich hart arbeite, damit die Familie finanziell abgesichert ist.",
        score: 1,
      },
      {
        text: "Ich sage nichts und melde meinen Sohn sofort bei einem Nachhilfeinstitut an.",
        score: 2,
      },
      {
        text: "Ich werfe meiner Frau vor, dass sie als Hauptbetreuungsperson die Schulleistungen hätte überwachen müssen.",
        score: 0,
      },
    ],
  },
  {
    id: "er-4-07",
    difficulty: 2,
    situation:
      "Andrea ist Krankenschwester auf einer Onkologiestation und hat gerade erfahren, dass eine junge Patientin, die sie über Monate betreut hat, keine Behandlungsoptionen mehr hat. Die Patientin ist gleichaltrig wie Andreas Tochter. Andrea hat in zehn Minuten ein Aufnahmegespräch mit einem neuen Patienten.",
    emotion: "Trauer und innerer Konflikt",
    ziel: "Die Trauer anerkennen und gleichzeitig für den neuen Patienten professionell da sein.",
    strategien: [
      {
        text: "Ich erlaube mir, die Nachricht kurz sacken zu lassen, atme bewusst durch und sage mir, dass ich jetzt für den nächsten Patienten präsent sein möchte. Heute Abend spreche ich mit einer Kollegin oder nutze die psychologische Anlaufstelle der Klinik.",
        score: 3,
      },
      {
        text: "Ich bitte eine Kollegin, das Aufnahmegespräch zu übernehmen, und ziehe mich zurück.",
        score: 2,
      },
      {
        text: "Ich sage mir, dass Gefühle in diesem Beruf fehl am Platz sind, und funktioniere professionell weiter.",
        score: 1,
      },
      {
        text: "Ich rufe meine Tochter an, um mich zu vergewissern, dass es ihr gut geht.",
        score: 0,
      },
    ],
  },
  {
    id: "er-4-08",
    difficulty: 2,
    situation:
      "Lukas ist Doktorand in Biochemie. Sein Betreuer hat seine Forschungsergebnisse ohne Absprache in einer eigenen Publikation verwendet und Lukas nur in einer Fußnote erwähnt. Lukas braucht die gute Beziehung zu seinem Betreuer für den Abschluss seiner Dissertation, will aber nicht akzeptieren, dass seine Arbeit nicht anerkannt wird.",
    emotion: "Empörung und Abhängigkeitsgefühl",
    ziel: "Die eigene wissenschaftliche Leistung anerkennen lassen, ohne die Betreuungsbeziehung zu gefährden.",
    strategien: [
      {
        text: "Ich bitte meinen Betreuer um ein Gespräch und sage, dass mir die Co-Autorschaft wichtig ist. Ich argumentiere sachlich mit den Richtlinien guter wissenschaftlicher Praxis und schlage vor, dass wir für künftige Publikationen klare Vereinbarungen treffen.",
        score: 3,
      },
      {
        text: "Ich melde den Vorfall anonym beim Ombudsman für wissenschaftliche Integrität.",
        score: 1,
      },
      {
        text: "Ich akzeptiere die Fußnote und hoffe, dass mein Betreuer mich bei der nächsten Publikation als Co-Autor aufnimmt.",
        score: 2,
      },
      {
        text: "Ich konfrontiere meinen Betreuer in einer Gruppenversammlung und mache den Vorfall öffentlich.",
        score: 0,
      },
    ],
  },
  {
    id: "er-4-09",
    difficulty: 2,
    situation:
      "Renate ist Richterin am Bezirksgericht. In einem Sorgerechtsstreit hat sie einem Vater das Besuchsrecht zugesprochen. Zwei Wochen später erfährt sie aus der Zeitung, dass das Kind bei einem Besuch vom Vater verletzt wurde. Renate zweifelt an ihrer Entscheidung. Morgen muss sie einen ähnlichen Fall verhandeln.",
    emotion: "Schuldgefühle und Selbstzweifel",
    ziel: "Den nächsten Fall unvoreingenommen verhandeln und die eigene Urteilsfähigkeit wiederherstellen.",
    strategien: [
      {
        text: "Ich reflektiere, dass ich meine Entscheidung auf Basis der damals verfügbaren Informationen getroffen habe. Ich nehme mir vor, beim nächsten Fall besonders sorgfältig die Risikofaktoren zu prüfen, und suche kollegiale Beratung.",
        score: 3,
      },
      {
        text: "Ich beantrage, den morgigen Fall an einen Kollegen abzugeben, weil ich mich befangen fühle.",
        score: 2,
      },
      {
        text: "Ich sage mir, dass Richter:innen nicht für die Handlungen anderer verantwortlich sind, und verdränge die Nachricht.",
        score: 1,
      },
      {
        text: "Ich kontaktiere das Jugendamt und versuche, meine damalige Entscheidung rückgängig zu machen.",
        score: 0,
      },
    ],
  },
  {
    id: "er-4-10",
    difficulty: 2,
    situation:
      "Claudia ist Teamleiterin in einem IT-Unternehmen. Ihr bester Mitarbeiter hat gekündigt und arbeitet ab nächsten Monat bei der Konkurrenz. Er hat Zugang zu sensiblen Projektdaten und Claudia befürchtet, dass Wissen abfließen könnte. Gleichzeitig schätzt sie ihn als Mensch und möchte sich nicht unfair verhalten.",
    emotion: "Sorge und Enttäuschung",
    ziel: "Unternehmensdaten schützen und den Mitarbeiter fair behandeln.",
    strategien: [
      {
        text: "Ich führe ein offenes Gespräch mit ihm über die Übergabe und die Vertraulichkeit. Ich kläre mit der Rechtsabteilung die bestehenden Vereinbarungen und organisiere einen strukturierten Wissenstransfer ans Team.",
        score: 3,
      },
      {
        text: "Ich entziehe ihm sofort alle Zugriffsrechte und lasse ihn bis zum letzten Tag nur noch Routineaufgaben erledigen.",
        score: 1,
      },
      {
        text: "Ich vertraue darauf, dass er professionell genug ist, keine Daten mitzunehmen, und kümmere mich um die Nachfolge.",
        score: 2,
      },
      {
        text: "Ich spreche mit der Geschäftsführung und empfehle, ihn sofort freizustellen.",
        score: 0,
      },
    ],
  },
  {
    id: "er-4-11",
    difficulty: 2,
    situation:
      "Herbert ist pensionierter Lehrer und hat erfahren, dass sein erwachsener Sohn seinen gut bezahlten Job als Ingenieur gekündigt hat, um als freischaffender Musiker zu arbeiten. Der Sohn hat eine Familie mit zwei kleinen Kindern. Herbert hält die Entscheidung für verantwortungslos, will aber die Beziehung zu seinem Sohn nicht belasten.",
    emotion: "Sorge und Unverständnis",
    ziel: "Seine Bedenken äußern, ohne die Beziehung zum Sohn zu beschädigen.",
    strategien: [
      {
        text: "Ich sage meinem Sohn, dass ich seine Leidenschaft für die Musik respektiere und mich gleichzeitig um die finanzielle Sicherheit der Familie sorge. Ich frage ihn, ob er einen Plan für die Übergangszeit hat, und signalisiere, dass ich ihn unterstütze.",
        score: 3,
      },
      {
        text: "Ich sage meinem Sohn direkt, dass er als Familienvater nicht einfach seinen sicheren Job aufgeben kann.",
        score: 0,
      },
      {
        text: "Ich sage nichts und biete ihm stattdessen an, die Enkel öfter zu betreuen, damit er Zeit für die Musik hat.",
        score: 2,
      },
      {
        text: "Ich spreche mit meiner Schwiegertochter und frage sie, ob sie die Entscheidung mitträgt.",
        score: 1,
      },
    ],
  },
  {
    id: "er-4-12",
    difficulty: 2,
    situation:
      "Maria ist Hebamme und betreut eine Geburt, die deutlich komplizierter verläuft als erwartet. Die werdende Mutter weigert sich aus religiösen Gründen, einem Kaiserschnitt zuzustimmen. Das Monitoring zeigt zunehmende Stresssignale beim Kind. Maria muss die Autonomie der Patientin respektieren und gleichzeitig das Kind schützen.",
    emotion: "Angst und ethischer Konflikt",
    ziel: "Die Autonomie der Patientin wahren und gleichzeitig die Sicherheit von Mutter und Kind gewährleisten.",
    strategien: [
      {
        text: "Ich erkläre der Mutter ruhig und empathisch die aktuelle medizinische Situation und die Risiken. Ich frage, ob ein Geistlicher ihres Vertrauens hinzugezogen werden kann, um gemeinsam eine Lösung zu finden.",
        score: 3,
      },
      {
        text: "Ich respektiere die Entscheidung der Mutter vollständig und dokumentiere sie schriftlich.",
        score: 2,
      },
      {
        text: "Ich rufe den Oberarzt und empfehle, die Mutter für nicht entscheidungsfähig erklären zu lassen.",
        score: 0,
      },
      {
        text: "Ich sage der Mutter, dass ich verstehe, aber dass ich mir nie verzeihen würde, wenn dem Kind etwas passiert.",
        score: 1,
      },
    ],
  },

  // ─── Difficulty 3 (schwer): 18 Aufgaben ────────────────────────
  {
    id: "er-4-13",
    difficulty: 3,
    situation:
      "Kathrin ist Intensivmedizinerin und behandelt einen bewusstlosen 45-jährigen Patienten nach einem schweren Verkehrsunfall. Seine Frau zeigt eine Patientenverfügung, die lebensverlängernde Maßnahmen ablehnt. Kathrins medizinische Einschätzung ist, dass der Patient gute Heilungschancen hat, wenn sie ihn weiter behandelt. Die Frau besteht auf Behandlungsabbruch.",
    emotion: "Moralischer Konflikt und Hilflosigkeit",
    ziel: "Ethisch und rechtlich korrekt handeln, ohne das Wohl des Patienten zu vernachlässigen.",
    strategien: [
      {
        text: "Ich erkläre der Ehefrau die positiven Heilungschancen, bitte um eine kurze Bedenkzeit und kontaktiere gleichzeitig die Ethikkommission der Klinik, um gemeinsam die Patientenverfügung im Kontext der aktuellen Situation zu bewerten.",
        score: 3,
      },
      {
        text: "Ich ignoriere die Patientenverfügung und behandle weiter, weil ich überzeugt bin, dass der Patient überleben wird.",
        score: 0,
      },
      {
        text: "Ich halte mich an die Patientenverfügung und beende die lebensverlängernden Maßnahmen, nachdem ich die Ehefrau nochmals aufgeklärt habe.",
        score: 2,
      },
      {
        text: "Ich bitte einen Kollegen, den Fall zu übernehmen, weil ich mit dem ethischen Konflikt nicht umgehen kann.",
        score: 1,
      },
    ],
  },
  {
    id: "er-4-14",
    difficulty: 3,
    situation:
      "Stefan ist Lehrer und hat zufällig mitbekommen, dass eine 14-jährige Schülerin sich selbst verletzt. Die Schülerin hat ihn angefleht, niemandem davon zu erzählen, da sonst ihre Eltern sie in eine Klinik einweisen lassen würden. Stefan weiß, dass er eine Meldepflicht hat, will aber nicht das Vertrauen der Schülerin zerstören.",
    emotion: "Innerer Konflikt und Verantwortungsdruck",
    ziel: "Die Schülerin schützen und gleichzeitig die Vertrauensbeziehung so weit wie möglich erhalten.",
    strategien: [
      {
        text: "Ich sage der Schülerin ehrlich, dass ich mir Sorgen mache und ihre Sicherheit Vorrang hat. Ich erkläre ihr, dass ich die Schulpsychologin einbeziehen muss, und versichere ihr, dass ich sie dabei begleite und gemeinsam nach der besten Lösung suche.",
        score: 3,
      },
      {
        text: "Ich respektiere den Wunsch der Schülerin und spreche mit niemandem darüber, beobachte sie aber in den nächsten Wochen genau.",
        score: 0,
      },
      {
        text: "Ich melde den Vorfall sofort der Schulleitung und den Eltern, weil ich rechtlich dazu verpflichtet bin.",
        score: 1,
      },
      {
        text: "Ich versuche, die Schülerin selbst zu beraten und ihr Techniken zu zeigen, wie sie mit dem Druck umgehen kann.",
        score: 2,
      },
    ],
  },
  {
    id: "er-4-15",
    difficulty: 3,
    situation:
      "Sabine ist Pflegedienstleiterin in einem Seniorenheim. Ein Bewohner mit fortgeschrittener Demenz wird von seiner Tochter regelmäßig besucht. Sabine hat beobachtet, dass die Tochter den Vater bei Besuchen grob behandelt und ihm Essen aufzwingt. Die Tochter ist eine einflussreiche Persönlichkeit in der Gemeinde und droht bei Kritik mit dem Entzug einer großzügigen Spende.",
    emotion: "Moralische Empörung und Angst vor Konsequenzen",
    ziel: "Den Bewohner schützen und gleichzeitig professionell und rechtlich korrekt handeln.",
    strategien: [
      {
        text: "Ich dokumentiere meine Beobachtungen sorgfältig, bespreche die Situation mit der Heimleitung und dem Pflegeteam und bitte um ein sachliches Gespräch mit der Tochter. Falls nötig, kontaktiere ich die Bewohnervertretung.",
        score: 3,
      },
      {
        text: "Ich spreche die Tochter direkt beim nächsten Besuch an und sage ihr, dass ihr Verhalten inakzeptabel ist.",
        score: 1,
      },
      {
        text: "Ich sorge dafür, dass bei jedem Besuch der Tochter eine Pflegekraft anwesend ist, sage aber nichts direkt.",
        score: 2,
      },
      {
        text: "Ich schaue weg, weil die Spende für das Heim unverzichtbar ist und der Bewohner die Situation ohnehin nicht bewusst wahrnimmt.",
        score: 0,
      },
    ],
  },
  {
    id: "er-4-16",
    difficulty: 3,
    situation:
      "Markus ist Polizist und wird zu einem Familienstreit gerufen. Am Einsatzort erkennt er den Mann als seinen ehemaligen besten Schulfreund. Die Frau hat sichtbare Verletzungen und sagt, ihr Mann habe sie geschlagen. Der Freund bittet Markus unter Tränen, keine Anzeige aufzunehmen, weil er sonst seinen Job und das Sorgerecht verliere.",
    emotion: "Innerer Loyalitätskonflikt und Pflichtgefühl",
    ziel: "Rechtlich korrekt handeln und die Opfer schützen, trotz persönlicher Betroffenheit.",
    strategien: [
      {
        text: "Ich sage meinem Freund, dass ich ihn als Mensch verstehe, aber als Polizist meiner Pflicht nachkommen muss. Ich nehme die Anzeige auf, verweise ihn an eine Beratungsstelle und bitte meinen Kollegen, den Fall ab hier federführend zu bearbeiten, um Befangenheit zu vermeiden.",
        score: 3,
      },
      {
        text: "Ich nehme die Anzeige auf und behandle den Fall wie jeden anderen, ohne meine persönliche Beziehung zu erwähnen.",
        score: 2,
      },
      {
        text: "Ich schlage vor, dass die Frau keine Anzeige erstattet und das Paar stattdessen eine Beratung aufsucht.",
        score: 0,
      },
      {
        text: "Ich verständige sofort einen Kollegen und ziehe mich komplett aus dem Einsatz zurück, weil ich befangen bin.",
        score: 1,
      },
    ],
  },
  {
    id: "er-4-17",
    difficulty: 3,
    situation:
      "Irene ist Forscherin in der Pharmazie und hat Hinweise gefunden, dass ein Medikament ihres Arbeitgebers stärkere Nebenwirkungen hat als in der Zulassungsstudie angegeben. Ihr Vorgesetzter hat ihre Bedenken abgetan und sie daran erinnert, dass das Medikament die wichtigste Einnahmequelle des Unternehmens ist. Irene hat eine Familie und kann sich Arbeitslosigkeit nicht leisten.",
    emotion: "Angst und moralischer Druck",
    ziel: "Die Patient:innensicherheit gewährleisten, ohne existenzielle Risiken blindlings einzugehen.",
    strategien: [
      {
        text: "Ich dokumentiere meine Ergebnisse wissenschaftlich sauber, informiere mich über den internen Whistleblower-Schutz und wende mich an die Compliance-Abteilung oder den Betriebsrat, bevor ich externe Stellen kontaktiere.",
        score: 3,
      },
      {
        text: "Ich gebe die Daten anonym an eine medizinische Fachzeitschrift weiter.",
        score: 1,
      },
      {
        text: "Ich akzeptiere die Entscheidung meines Vorgesetzten, weil er die Verantwortung trägt und ich meine Familie nicht gefährden will.",
        score: 0,
      },
      {
        text: "Ich wiederhole die Studie eigenständig, um sicherzustellen, dass meine Ergebnisse belastbar sind, bevor ich weitere Schritte einleite.",
        score: 2,
      },
    ],
  },
  {
    id: "er-4-18",
    difficulty: 3,
    situation:
      "Wolfgang ist Feuerwehrmann und hat bei einem Einsatz ein Kind aus einem brennenden Haus gerettet. Zwei Wochen später wird er von Albträumen geplagt und zuckt bei lauten Geräuschen zusammen. Sein Kommandant erwartet, dass er beim nächsten Einsatz normal funktioniert. Wolfgang hat noch nie über psychische Belastung gesprochen und befürchtet, als schwach zu gelten.",
    emotion: "Scham und posttraumatischer Stress",
    ziel: "Professionelle Hilfe annehmen und langfristig einsatzfähig bleiben.",
    strategien: [
      {
        text: "Ich nehme meinen Mut zusammen und kontaktiere den psychologischen Dienst der Feuerwehr. Ich sage mir, dass die Bereitschaft, Hilfe anzunehmen, genauso professionell ist wie jeder Einsatz.",
        score: 3,
      },
      {
        text: "Ich sage meinem Kommandanten, dass ich eine Pause brauche, ohne die genauen Gründe zu nennen.",
        score: 2,
      },
      {
        text: "Ich versuche, die Symptome mit mehr Sport und Ablenkung in den Griff zu bekommen.",
        score: 1,
      },
      {
        text: "Ich mache beim nächsten Einsatz mit und hoffe, dass die Routine die Albträume verdrängt.",
        score: 0,
      },
    ],
  },
  {
    id: "er-4-19",
    difficulty: 3,
    situation:
      "Eva ist Sozialarbeiterin und betreut eine Familie, in der die Mutter drogenabhängig ist. Das dreijährige Kind ist gut versorgt und die Großmutter kümmert sich liebevoll. Die Behörde verlangt von Eva eine Empfehlung zur Fremdunterbringung. Eva ist überzeugt, dass das Kind bei der Großmutter besser aufgehoben ist als in einer Pflegefamilie, aber die Richtlinien sehen bei Drogenabhängigkeit der Mutter eine Fremdunterbringung vor.",
    emotion: "Gewissenskonflikt und Frustration über das System",
    ziel: "Das Wohl des Kindes in den Mittelpunkt stellen und gleichzeitig professionell handeln.",
    strategien: [
      {
        text: "Ich dokumentiere ausführlich die positive Rolle der Großmutter und die gute Versorgungssituation des Kindes. Ich empfehle der Behörde eine Lösung, bei der das Kind bei der Großmutter bleibt, unter Auflage regelmäßiger Kontrollen. Ich begründe sachlich, warum dies dem Kindeswohl besser dient als eine Fremdunterbringung.",
        score: 3,
      },
      {
        text: "Ich folge den Richtlinien und empfehle die Fremdunterbringung, weil ich nicht für die Konsequenzen verantwortlich sein will.",
        score: 1,
      },
      {
        text: "Ich spreche mit der Großmutter über die rechtliche Möglichkeit, das Sorgerecht zu beantragen.",
        score: 2,
      },
      {
        text: "Ich verschweige in meinem Bericht die Drogenabhängigkeit der Mutter, um die Fremdunterbringung zu verhindern.",
        score: 0,
      },
    ],
  },
  {
    id: "er-4-20",
    difficulty: 3,
    situation:
      "Thomas ist Chirurg und soll einen Eingriff an einem Patienten durchführen, der vor der OP homophobe Bemerkungen über Thomas' Kollegen gemacht hat, der offen schwul lebt. Thomas ist selbst schwul, aber nicht geoutet. Er ist wütend und verletzt, muss aber in 20 Minuten operieren.",
    emotion: "Wut und persönliche Verletzung",
    ziel: "Die Operation professionell durchführen und die eigene emotionale Belastung verarbeiten.",
    strategien: [
      {
        text: "Ich sage mir, dass meine Pflicht als Arzt über meinen persönlichen Gefühlen steht. Ich fokussiere mich auf die medizinische Aufgabe und nehme mir vor, nach der OP mit einer Vertrauensperson über die Situation zu sprechen.",
        score: 3,
      },
      {
        text: "Ich bitte einen Kollegen, die OP zu übernehmen, und sage, dass ich mich nicht wohl fühle.",
        score: 2,
      },
      {
        text: "Ich konfrontiere den Patienten vor der OP mit seinen Bemerkungen und sage ihm, dass Diskriminierung inakzeptabel ist.",
        score: 0,
      },
      {
        text: "Ich operiere den Patienten, aber sage nach der OP der Stationsleitung, dass solche Bemerkungen dokumentiert werden sollten.",
        score: 1,
      },
    ],
  },
  {
    id: "er-4-21",
    difficulty: 3,
    situation:
      "Martina ist Ärztin in einer Flüchtlingsunterkunft. Ein Patient weigert sich aus kulturellen Gründen, von einer Frau untersucht zu werden, obwohl er offensichtlich starke Schmerzen hat und kein männlicher Arzt verfügbar ist. Sein Dolmetscher drängt Martina, einfach zu gehen.",
    emotion: "Frustration und Hilflosigkeit",
    ziel: "Dem Patienten helfen und gleichzeitig seine kulturelle Prägung respektieren, ohne die eigene Würde aufzugeben.",
    strategien: [
      {
        text: "Ich erkläre dem Patienten über den Dolmetscher ruhig die medizinische Dringlichkeit und biete an, die Untersuchung so durchzuführen, dass seine Grenzen so weit wie möglich respektiert werden. Ich frage, ob ein männlicher Pfleger anwesend sein kann.",
        score: 3,
      },
      {
        text: "Ich respektiere seine Entscheidung und dokumentiere, dass er die Behandlung verweigert hat.",
        score: 2,
      },
      {
        text: "Ich sage dem Dolmetscher, dass in Österreich Ärztinnen genauso qualifiziert sind wie Ärzte und der Patient das akzeptieren muss.",
        score: 1,
      },
      {
        text: "Ich verlasse den Raum und sage dem Dolmetscher, dass der Patient ins Krankenhaus gehen soll, wenn er nicht von mir behandelt werden will.",
        score: 0,
      },
    ],
  },
  {
    id: "er-4-22",
    difficulty: 3,
    situation:
      "Felix ist Richter und muss über den Sorgerechtsentzug entscheiden. Die Mutter hat eine bipolare Störung, aber in stabilen Phasen ist sie eine liebevolle und kompetente Mutter. Der Vater ist emotional distanziert, aber stabil. Felix hat selbst eine Mutter mit bipolarer Störung und weiß aus eigener Erfahrung, wie sehr eine psychische Erkrankung den Alltag beeinflussen kann — im Guten wie im Schlechten.",
    emotion: "Persönliche Betroffenheit und Objektivitätskonflikt",
    ziel: "Eine objektive Entscheidung im besten Interesse des Kindes treffen, unbeeinflusst von der eigenen Biografie.",
    strategien: [
      {
        text: "Ich reflektiere bewusst, welche meiner Einschätzungen auf Fakten und welche auf persönlichen Erfahrungen beruhen. Ich hole ein aktuelles psychiatrisches Gutachten ein und orientiere mich bei meiner Entscheidung streng am Kindeswohl und den vorliegenden Beweisen.",
        score: 3,
      },
      {
        text: "Ich lehne den Fall wegen Befangenheit ab und übergebe ihn einem Kollegen.",
        score: 2,
      },
      {
        text: "Ich entscheide zugunsten der Mutter, weil ich weiß, dass Menschen mit bipolarer Störung gute Eltern sein können.",
        score: 0,
      },
      {
        text: "Ich lasse mir von der Jugendwohlfahrt eine Empfehlung geben und folge dieser, um meine eigene Voreingenommenheit auszuschließen.",
        score: 1,
      },
    ],
  },
  {
    id: "er-4-23",
    difficulty: 3,
    situation:
      "Daniela ist Lehrerin an einer Berufsschule. Ein 17-jähriger Schüler mit Migrationshintergrund, den sie als besonders begabt einschätzt, wurde beim Ladendiebstahl erwischt. Er erzählt ihr unter Tränen, dass seine Familie kein Geld für Essen hat und er seine jüngeren Geschwister versorgen wollte. Die Schulleitung will ihn von der Schule verweisen.",
    emotion: "Mitgefühl und Ohnmacht",
    ziel: "Den Schüler unterstützen und gleichzeitig die Schulregeln respektieren.",
    strategien: [
      {
        text: "Ich spreche mit der Schulleitung und schlage vor, den Verweis auszusetzen, wenn der Schüler sich verpflichtet, eine Beratung in Anspruch zu nehmen. Parallel vermittle ich die Familie an die Sozialberatung und informiere mich über Stipendien für begabte Schüler in schwierigen Situationen.",
        score: 3,
      },
      {
        text: "Ich gebe dem Schüler Geld und sage ihm, dass er sich jederzeit an mich wenden kann.",
        score: 0,
      },
      {
        text: "Ich spreche mit der Schulleitung und plädiere für eine mildere Strafe, ohne die Details der Familiensituation zu nennen.",
        score: 2,
      },
      {
        text: "Ich sage dem Schüler, dass Diebstahl keine Lösung ist, und verweise ihn an die Schulsozialarbeiterin.",
        score: 1,
      },
    ],
  },
  {
    id: "er-4-24",
    difficulty: 3,
    situation:
      "Andreas ist Neurologe und untersucht einen Patienten, bei dem er eine beginnende ALS (amyotrophe Lateralsklerose) diagnostiziert. Der Patient ist alleinerzieher Vater von zwei Kindern und fragt Andreas mit einem Lächeln, ob er ‚nur etwas eingeklemmt' habe. Andreas muss die Diagnose mitteilen, weiß aber, dass es keine Heilung gibt und die Prognose verheerend ist.",
    emotion: "Trauer und professionelle Belastung",
    ziel: "Die Diagnose einfühlsam und klar mitteilen und dem Patienten Perspektiven aufzeigen.",
    strategien: [
      {
        text: "Ich nehme mir bewusst Zeit, setze mich neben den Patienten und erkläre die Diagnose schrittweise. Ich frage, ob er jemanden anrufen möchte, und informiere ihn über Selbsthilfegruppen und spezialisierte Versorgungszentren. Danach suche ich selbst Supervision.",
        score: 3,
      },
      {
        text: "Ich sage dem Patienten die Diagnose direkt und sachlich, weil Beschönigung niemandem hilft.",
        score: 1,
      },
      {
        text: "Ich empfehle dem Patienten zunächst weitere Untersuchungen, um mir selbst Zeit zu verschaffen und die Diagnose abzusichern, obwohl ich mir sicher bin.",
        score: 2,
      },
      {
        text: "Ich bitte einen erfahreneren Kollegen, die Diagnose mitzuteilen, weil ich mich emotional nicht in der Lage fühle.",
        score: 0,
      },
    ],
  },
  {
    id: "er-4-25",
    difficulty: 3,
    situation:
      "Sylvia ist Psychotherapeutin und behandelt eine Patientin mit schwerer Depression. In der heutigen Sitzung offenbart die Patientin, dass sie Sylvias Ehemann seit Monaten eine Affäre hat. Sylvia ist schockiert und überprüft innerlich die Glaubwürdigkeit der Aussage. Sie weiß, dass die Patientin in früheren Sitzungen Wahnsymptome zeigte, aber auch manipulatives Verhalten.",
    emotion: "Schock und professionelle Überforderung",
    ziel: "Die therapeutische Beziehung nicht beschädigen und die Situation professionell klären.",
    strategien: [
      {
        text: "Ich bleibe äußerlich ruhig, nehme die Aussage der Patientin zur Kenntnis und sage, dass ich das brauche, um es zu verarbeiten. Ich beende die Sitzung regulär, kontaktiere dann sofort meine Supervisorin und kläre, ob ich die Patientin weiter behandeln kann oder an eine Kollegin überweisen muss.",
        score: 3,
      },
      {
        text: "Ich sage der Patientin, dass mein Privatleben in der Therapie keinen Platz hat, und lenke das Gespräch auf ihre Themen zurück.",
        score: 1,
      },
      {
        text: "Ich überweise die Patientin an eine Kollegin mit der Begründung, dass ein persönlicher Interessenkonflikt aufgetreten ist.",
        score: 2,
      },
      {
        text: "Ich frage die Patientin nach Details, um herauszufinden, ob ihre Behauptung stimmt.",
        score: 0,
      },
    ],
  },
  {
    id: "er-4-26",
    difficulty: 3,
    situation:
      "Leopold ist Notfallsanitäter und wird zu einem schweren Autounfall gerufen. Am Unfallort erkennt er den Fahrer des anderen Fahrzeugs als den Mann, der vor einem Jahr seine Schwester bei einem Unfall getötet hat und mit einer Bewährungsstrafe davonkam. Der Mann ist schwer verletzt und braucht sofortige Hilfe.",
    emotion: "Hass und Pflichtgefühl",
    ziel: "Professionell handeln und den Verletzten versorgen, trotz der persönlichen Geschichte.",
    strategien: [
      {
        text: "Ich sage mir, dass meine Aufgabe als Sanitäter unabhängig von meinen persönlichen Gefühlen ist. Ich versorge den Mann professionell und bitte meinen Kollegen, die Hauptversorgung zu übernehmen, während ich assistiere. Danach nehme ich mir Zeit, um die Situation zu verarbeiten.",
        score: 3,
      },
      {
        text: "Ich sage meinem Kollegen sofort, dass ich den Mann kenne und nicht in der Lage bin, ihn zu behandeln.",
        score: 2,
      },
      {
        text: "Ich versorge den Mann, sage aber kein Wort mit ihm und lasse mir den Ärger nicht anmerken.",
        score: 1,
      },
      {
        text: "Ich behandle den Mann, aber sage ihm dabei, wer ich bin und dass er sich glücklich schätzen kann, dass ich professionell bin.",
        score: 0,
      },
    ],
  },
  {
    id: "er-4-27",
    difficulty: 3,
    situation:
      "Birgit ist Anwältin und vertritt eine Mandantin, die von ihrem Arbeitgeber sexuell belästigt wurde. Während der Verhandlung erkennt Birgit im Zeugenstand den Arbeitgeber als den Mann, der sie selbst vor zehn Jahren auf einer Party belästigt hat. Birgit hat damals keine Anzeige erstattet. Sie muss die Verhandlung fortsetzen.",
    emotion: "Retraumatisierung und Rachegefühle",
    ziel: "Die Mandantin professionell vertreten und die eigene Betroffenheit regulieren.",
    strategien: [
      {
        text: "Ich konzentriere mich auf die Sache meiner Mandantin und nutze meine professionelle Kompetenz, um den Fall zu gewinnen. Nach der Verhandlung suche ich therapeutische Unterstützung, um meine eigene Erfahrung aufzuarbeiten, und überlege, ob eine eigene Anzeige sinnvoll ist.",
        score: 3,
      },
      {
        text: "Ich beantrage eine Verhandlungspause, informiere die Richterin über meine Befangenheit und schlage eine Kollegin als Vertretung vor.",
        score: 2,
      },
      {
        text: "Ich nutze die Gelegenheit und bringe meine eigene Erfahrung als Beweis für ein Verhaltensmuster des Angeklagten ein.",
        score: 0,
      },
      {
        text: "Ich führe die Verhandlung besonders aggressiv, um sicherzustellen, dass der Mann verurteilt wird.",
        score: 1,
      },
    ],
  },
  {
    id: "er-4-28",
    difficulty: 3,
    situation:
      "Robert ist Bergrettungsmitglied und wird zu einem Lawinenabgang gerufen. Unter den Verschütteten ist sein eigener 16-jähriger Sohn, der mit Freunden trotz Warnung ins Skigebiet gegangen war. Die Rettungsleitung weist die Teams zu und Robert soll einen anderen Sektor durchsuchen. Er will zu seinem Sohn.",
    emotion: "Panik und Kontrollverlust",
    ziel: "Effektiv zur Rettung beitragen und die eigene Panik kontrollieren.",
    strategien: [
      {
        text: "Ich informiere den Einsatzleiter, dass mein Sohn unter den Verschütteten ist, und bitte darum, in dem Sektor eingesetzt zu werden. Wenn er ablehnt, akzeptiere ich das und rette professionell in meinem zugewiesenen Bereich, im Vertrauen darauf, dass meine Kollegen ebenso kompetent sind.",
        score: 3,
      },
      {
        text: "Ich ignoriere die Zuweisung und suche eigenständig den Bereich ab, in dem ich meinen Sohn vermute.",
        score: 0,
      },
      {
        text: "Ich sage dem Einsatzleiter, dass ich emotional nicht einsatzfähig bin, und warte am Stützpunkt.",
        score: 1,
      },
      {
        text: "Ich arbeite in meinem zugewiesenen Sektor, ohne jemanden zu informieren, dass mein Sohn verschüttet ist.",
        score: 2,
      },
    ],
  },
  {
    id: "er-4-29",
    difficulty: 3,
    situation:
      "Hanna ist Kinderärztin und diagnostiziert bei einem vierjährigen Mädchen Anzeichen von Vernachlässigung. Die Mutter ist alleinerziehend, schwer depressiv und hat Hanna anvertraut, dass sie nicht mehr kann. Hanna erkennt in der Mutter ihre eigene Schwester, die in einer ähnlichen Situation war. Sie weiß, dass eine Meldung beim Jugendamt die Mutter in eine Krise stürzen könnte, aber dass das Kind geschützt werden muss.",
    emotion: "Mitgefühl und Gewissenskonflikt",
    ziel: "Das Kind schützen und der Mutter Hilfe ermöglichen.",
    strategien: [
      {
        text: "Ich sage der Mutter empathisch, dass ich sehe, wie überfordert sie ist, und dass es Hilfe gibt. Ich leite die Meldung beim Jugendamt ein und empfehle gleichzeitig konkrete Unterstützungsangebote — Familienhilfe, psychiatrische Behandlung und Entlastungspflege —, sodass die Meldung nicht als Strafe, sondern als Hilfe wirken kann.",
        score: 3,
      },
      {
        text: "Ich verzichte auf die Meldung und versuche, die Mutter selbst zu unterstützen, indem ich sie an eine psychologische Beratungsstelle verweise.",
        score: 0,
      },
      {
        text: "Ich melde den Fall ans Jugendamt und informiere die Mutter sachlich über den Prozess.",
        score: 2,
      },
      {
        text: "Ich bitte eine Kollegin, den Fall zu übernehmen, weil mich die Situation an meine Schwester erinnert und ich nicht objektiv sein kann.",
        score: 1,
      },
    ],
  },
  {
    id: "er-4-30",
    difficulty: 3,
    situation:
      "Martin ist Intensivpfleger und betreut seit drei Wochen einen jungen Motorradfahrer im Koma. Die Familie hat sich für eine Organspende entschieden, wenn keine Besserung eintritt. In der Nachtschicht zeigt der Patient plötzlich minimale Reflexe. Martin weiß, dass solche Reflexe auch bei hirntoten Patienten vorkommen können, aber er fragt sich, ob er es der Familie sagen soll. Die Organspende-Koordinatorin drängt auf eine schnelle Entscheidung, weil mehrere Empfänger warten.",
    emotion: "Hoffnung und ethischer Druck",
    ziel: "Die Familie wahrheitsgemäß informieren und gleichzeitig keine falschen Hoffnungen wecken.",
    strategien: [
      {
        text: "Ich dokumentiere die Reflexe sorgfältig und informiere den diensthabenden Arzt. Ich bitte ihn, die Familie sachlich über die Beobachtung aufzuklären und zu erklären, was diese Reflexe bedeuten und was nicht. Ich lasse die medizinische Bewertung den Ärzten und dränge nicht auf eine bestimmte Entscheidung.",
        score: 3,
      },
      {
        text: "Ich sage der Familie sofort von den Reflexen, damit sie ihre Entscheidung zur Organspende überdenken kann.",
        score: 1,
      },
      {
        text: "Ich dokumentiere die Reflexe, sage aber niemandem etwas, weil ich weiß, dass spinale Reflexe keine Hirnaktivität anzeigen und die Organspende Leben retten wird.",
        score: 0,
      },
      {
        text: "Ich informiere den Arzt und schlage vor, die Organspende-Entscheidung um 48 Stunden zu verschieben, bis die Reflexe abgeklärt sind.",
        score: 2,
      },
    ],
  },
];
