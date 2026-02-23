export interface Handlungsoption {
  text: string;
  idealRating: number; // 1-6 Likert scale
  explanation: string;
}

export interface SozialesEntscheidenScenario {
  id: string;
  scenario: string;
  handlungsoptionen: Handlungsoption[];
}

export const sozialesEntscheidenScenarios: SozialesEntscheidenScenario[] = [
  {
    id: "se-01",
    scenario:
      "Du bist als Famulant auf der Inneren Medizin eingeteilt. Du beobachtest, wie ein erfahrener Oberarzt einem Patienten gegenüber herablassend und ungeduldig wird, als dieser zum dritten Mal nach seiner Diagnose fragt. Der Patient wirkt eingeschüchtert und traut sich nicht mehr, weitere Fragen zu stellen.",
    handlungsoptionen: [
      {
        text: "Du sprichst den Oberarzt direkt vor dem Patienten auf sein Verhalten an.",
        idealRating: 2,
        explanation:
          "Zwar mutig, aber eine öffentliche Konfrontation kann die Situation eskalieren und den Oberarzt bloßstellen.",
      },
      {
        text: "Du ignorierst die Situation, da der Oberarzt erfahrener ist.",
        idealRating: 2,
        explanation:
          "Wegschauen schadet dem Patienten und widerspricht der ärztlichen Pflicht zur Fürsorge.",
      },
      {
        text: "Du gehst nach der Visite zum Patienten und erklärst ihm seine Diagnose nochmal in Ruhe.",
        idealRating: 6,
        explanation:
          "Das Patientenwohl steht im Vordergrund — der Patient bekommt die Informationen, die er braucht.",
      },
      {
        text: "Du sprichst den Oberarzt nach der Visite unter vier Augen respektvoll auf die Situation an.",
        idealRating: 5,
        explanation: "Professionelles Feedback unter vier Augen ist angemessen und konstruktiv.",
      },
      {
        text: "Du meldest den Vorfall sofort der Krankenhausleitung.",
        idealRating: 2,
        explanation:
          "Eine sofortige Meldung ohne vorheriges Gespräch ist unverhältnismäßig für einen einmaligen Vorfall.",
      },
      {
        text: "Du bittest eine erfahrene Kollegin um Rat, wie du mit der Situation umgehen solltest.",
        idealRating: 5,
        explanation:
          "Sich Rat zu holen zeigt Reflexionsfähigkeit und hilft, die richtige Vorgehensweise zu finden.",
      },
      {
        text: "Du wartest ab, ob sich das Verhalten wiederholt, bevor du etwas unternimmst.",
        idealRating: 3,
        explanation:
          "Abwarten ist verständlich, birgt aber das Risiko, dass weitere Patienten betroffen werden.",
      },
      {
        text: "Du versuchst während der Visite, den Patienten durch eigene Fragen subtil einzubeziehen.",
        idealRating: 5,
        explanation:
          "Diplomatisch und patientenorientiert — der Patient fühlt sich unterstützt, ohne dass der Oberarzt bloßgestellt wird.",
      },
    ],
  },
  {
    id: "se-02",
    scenario:
      "Während deiner Famulatur auf der Chirurgie bemerkst du, dass eine Assistenzärztin bei der Dokumentation eines Eingriffs einen Fehler gemacht hat: Sie hat die falsche Seitenangabe notiert. Der Eingriff selbst wurde korrekt durchgeführt. Die Assistenzärztin ist gerade im Stress und hat noch drei weitere OPs vor sich.",
    handlungsoptionen: [
      {
        text: "Du korrigierst den Fehler stillschweigend selbst in der Akte.",
        idealRating: 1,
        explanation:
          "Eigenmächtige Änderungen an medizinischen Dokumenten sind unzulässig und potenziell gefährlich.",
      },
      {
        text: "Du sprichst die Assistenzärztin sofort und diskret auf den Dokumentationsfehler an.",
        idealRating: 6,
        explanation:
          "Direkte, diskrete Ansprache ermöglicht schnelle Korrektur und wahrt die Professionalität.",
      },
      {
        text: "Du meldest den Fehler dem Chefarzt, ohne vorher mit der Assistenzärztin zu sprechen.",
        idealRating: 2,
        explanation:
          "Das Übergehen der Kollegin ist unnötig eskalierend bei einem korrigierbaren Dokumentationsfehler.",
      },
      {
        text: "Du sagst nichts, weil der Eingriff ja korrekt durchgeführt wurde.",
        idealRating: 1,
        explanation:
          "Falsche Dokumentation kann bei Folgebehandlungen zu schwerwiegenden Verwechslungen führen.",
      },
      {
        text: "Du wartest, bis die Assistenzärztin ihre OPs erledigt hat, und sprichst sie dann an.",
        idealRating: 3,
        explanation:
          "Die Rücksichtnahme ist verständlich, aber ein Seitenfehler in der Akte sollte zeitnah korrigiert werden.",
      },
      {
        text: "Du schreibst der Assistenzärztin eine kurze Nachricht, damit sie den Fehler korrigieren kann, wenn sie Zeit hat.",
        idealRating: 4,
        explanation:
          "Eine schriftliche Nachricht ist besser als Nichtstun, aber bei Seitenfehlern ist persönliche Ansprache sicherer.",
      },
      {
        text: "Du besprichst den Vorfall im nächsten Teammeeting als allgemeines Thema zur Dokumentationsqualität.",
        idealRating: 3,
        explanation:
          "Systemische Verbesserung ist gut, ersetzt aber nicht die sofortige Korrektur des konkreten Fehlers.",
      },
      {
        text: "Du sprichst die Assistenzärztin an und bietest an, ihr bei der Korrektur der Dokumentation zu helfen.",
        idealRating: 5,
        explanation:
          "Ansprache plus Hilfsangebot zeigt Kollegialität und stellt sicher, dass der Fehler behoben wird.",
      },
    ],
  },
  {
    id: "se-03",
    scenario:
      "Ein älterer Patient mit Migrationshintergrund wird auf deiner Station aufgenommen. Er spricht kaum Deutsch und seine Familie möchte bei allen Gesprächen dolmetschen. Du bemerkst jedoch, dass die Familie bestimmte Informationen über die Schwere der Erkrankung nicht an den Patienten weitergibt, vermutlich um ihn zu schonen.",
    handlungsoptionen: [
      {
        text: "Du akzeptierst die Wünsche der Familie, da sie den kulturellen Hintergrund besser kennt.",
        idealRating: 2,
        explanation:
          "Das Recht des Patienten auf vollständige Information überwiegt kulturelle Gepflogenheiten der Familie.",
      },
      {
        text: "Du organisierst einen professionellen Dolmetscher, um ein direktes Gespräch mit dem Patienten zu führen.",
        idealRating: 6,
        explanation:
          "Ein professioneller Dolmetscher sichert die Autonomie und das Informationsrecht des Patienten.",
      },
      {
        text: "Du konfrontierst die Familie damit, dass sie Informationen zurückhalten, und forderst sie auf, korrekt zu übersetzen.",
        idealRating: 2,
        explanation:
          "Eine direkte Konfrontation kann die Familie verletzen und die Vertrauensbasis zerstören.",
      },
      {
        text: "Du sprichst mit deinem Vorgesetzten über die Situation und bittest um Unterstützung.",
        idealRating: 5,
        explanation:
          "Das Einbeziehen eines Vorgesetzten hilft, die komplexe Situation professionell zu lösen.",
      },
      {
        text: "Du führst ein empathisches Gespräch mit der Familie über die Bedeutung von ehrlicher Kommunikation für die Behandlung.",
        idealRating: 5,
        explanation:
          "Ein einfühlsames Gespräch respektiert die Familie und betont zugleich die medizinische Notwendigkeit.",
      },
      {
        text: "Du dokumentierst die Situation, unternimmst aber nichts weiter.",
        idealRating: 1,
        explanation:
          "Bloße Dokumentation ohne Handlung verletzt die Pflicht zur informierten Einwilligung des Patienten.",
      },
      {
        text: "Du versuchst, mit einfachen Worten und Gesten selbst mit dem Patienten zu kommunizieren.",
        idealRating: 3,
        explanation:
          "Der Ansatz ist gut gemeint, aber bei komplexen medizinischen Informationen reicht das nicht aus.",
      },
      {
        text: "Du fragst den Patienten mit Hilfe eines Dolmetschers, ob er alle Informationen selbst erfahren möchte.",
        idealRating: 6,
        explanation:
          "Die Patientenautonomie wird direkt gewahrt, indem man den Patienten selbst entscheiden lässt.",
      },
    ],
  },
  {
    id: "se-04",
    scenario:
      "Du arbeitest als Turnusarzt in der Notaufnahme einer kleinen Klinik. Es ist Nacht, das Personal ist knapp. Gleichzeitig kommen ein schwer verletzter Motorradfahrer und eine ältere Frau mit Verdacht auf Herzinfarkt an. Du bist der einzige Arzt vor Ort und musst entscheiden, wen du zürst behandelst. Beide Fälle sind zeitkritisch.",
    handlungsoptionen: [
      {
        text: "Du behandelst den Motorradfahrer zürst, weil er jünger ist und mehr Lebensjahre vor sich hat.",
        idealRating: 1,
        explanation:
          "Alter darf kein Kriterium bei der Triage sein — das verstößt gegen das Gleichheitsprinzip.",
      },
      {
        text: "Du führst eine schnelle Triage beider Patienten durch, um die medizinische Dringlichkeit objektiv festzustellen.",
        idealRating: 6,
        explanation:
          "Systematische Triage ist der professionelle und ethisch korrekte Ansatz bei Ressourcenknappheit.",
      },
      {
        text: "Du rufst sofort Verstärkung an und versorgst in der Zwischenzeit den instabileren Patienten.",
        idealRating: 6,
        explanation:
          "Verstärkung rufen und gleichzeitig den kritischeren Patienten versorgen ist die optimale Strategie.",
      },
      {
        text: "Du delegierst die Erstversorgung eines Patienten an die Pflegekräfte und kümmerst dich um den anderen.",
        idealRating: 5,
        explanation:
          "Delegation an qualifiziertes Pflegepersonal ist sinnvoll, solange klare Anweisungen gegeben werden.",
      },
      {
        text: "Du behandelst die ältere Frau zürst, weil sie als Erste da war.",
        idealRating: 2,
        explanation:
          "Das Prinzip first come, first served gilt nicht in der Notfallmedizin — die Dringlichkeit entscheidet.",
      },
      {
        text: "Du wechselst alle paar Minuten zwischen beiden Patienten hin und her.",
        idealRating: 2,
        explanation: "Ständiges Wechseln führt zu Zeitverlust und gefährdet beide Patienten.",
      },
      {
        text: "Du stabilisierst beide Patienten kurz und organisierst dann einen schnellen Transport des einen in ein größeres Krankenhaus.",
        idealRating: 4,
        explanation:
          "Eine pragmatische Lösung, die aber von den Transportmöglichkeiten und der Stabilität der Patienten abhängt.",
      },
      {
        text: "Du weist die Pflegekräfte an, bei beiden Patienten die Vitalzeichen zu überwachen, während du eine Priorisierung vornimmst.",
        idealRating: 5,
        explanation:
          "Monitoring durch Pflegepersonal sichert beide Patienten, während du die Triage durchführst.",
      },
    ],
  },
  {
    id: "se-05",
    scenario:
      "Ein 17-jähriger Patient kommt allein in deine Praxis und bittet dich um ein Rezept für die Pille danach. Er möchte nicht, dass seine Eltern davon erfahren. Laut Gesetz ist er noch minderjährig, aber annähernd volljährig und wirkt reif und entscheidungsfähig. Er erklärt, dass seine Freundin das Medikament dringend braucht.",
    handlungsoptionen: [
      {
        text: "Du lehnst ab und sagst, dass er mit seinen Eltern wiederkommen muss.",
        idealRating: 2,
        explanation:
          "Eine strikte Ablehnung ignoriert die Dringlichkeit und die fortgeschrittene Reife des Jugendlichen.",
      },
      {
        text: "Du führst ein ausführliches Beratungsgespräch und beurteilst seine Einwilligungsfähigkeit individüll.",
        idealRating: 6,
        explanation:
          "Individülle Beurteilung der Einwilligungsfähigkeit ist bei mündigen Minderjährigen der fachlich korrekte Weg.",
      },
      {
        text: "Du gibst ihm das Rezept sofort ohne weitere Fragen, um keine Zeit zu verlieren.",
        idealRating: 2,
        explanation:
          "Ohne Beratung und Aufklärung zu handeln verletzt die ärztliche Sorgfaltspflicht.",
      },
      {
        text: "Du erklärst ihm, dass du gerne helfen möchtest, aber empfiehlst, dass seine Freundin selbst kommt.",
        idealRating: 5,
        explanation:
          "Die direkte Patientin einzubeziehen ist medizinisch sinnvoll für Beratung und Anamnese.",
      },
      {
        text: "Du rufst seine Eltern an, um deren Einverständnis einzuholen.",
        idealRating: 1,
        explanation:
          "Das Anrufen der Eltern ohne Einwilligung des Jugendlichen verletzt die Schweigepflicht und das Vertrauen.",
      },
      {
        text: "Du verweist ihn an eine Beratungsstelle oder Notapotheke, die ihm direkt helfen kann.",
        idealRating: 4,
        explanation:
          "Eine Alternative anzubieten ist hilfreich, aber du solltest auch selbst beratend tätig werden.",
      },
      {
        text: "Du besprichst mit ihm Verhütungsmethoden und die Wirkungsweise der Pille danach, bevor du eine Entscheidung triffst.",
        idealRating: 5,
        explanation:
          "Aufklärung ist ärztliche Pflicht und hilft, eine informierte Entscheidung zu treffen.",
      },
      {
        text: "Du konsultierst einen erfahrenen Kollegen, um die rechtliche und medizinische Situation abzuklären.",
        idealRating: 4,
        explanation:
          "Kollegiale Rücksprache ist grundsätzlich gut, sollte aber die zeitkritische Versorgung nicht unnötig verzögern.",
      },
    ],
  },
  {
    id: "se-06",
    scenario:
      "Du bist im letzten Semester deines Medizinstudiums. Bei einer Gruppenarbeit stellst du fest, dass ein Kommilitone große Teile seiner Seminararbeit mit einer KI erstellt hat, ohne dies zu kennzeichnen. Die Arbeit zählt zur Endnote. Andere Studierende haben wochenlang daran gearbeitet. Der Kommilitone ist ein guter Freund von dir.",
    handlungsoptionen: [
      {
        text: "Du meldest den Vorfall anonym beim Prüfungsamt.",
        idealRating: 3,
        explanation:
          "Anonyme Meldung ist ein möglicher Weg, aber das direkte Gespräch mit dem Freund wäre der erste Schritt.",
      },
      {
        text: "Du sprichst deinen Freund unter vier Augen an und bittest ihn, die Arbeit selbst zu überarbeiten.",
        idealRating: 6,
        explanation:
          "Direktes, ehrliches Gespräch gibt dem Freund die Chance, seinen Fehler selbst zu korrigieren.",
      },
      {
        text: "Du sagst nichts, weil du die Freundschaft nicht gefährden willst.",
        idealRating: 1,
        explanation:
          "Schweigen ist unfair gegenüber den anderen Studierenden und unterstützt akademische Unehrlichkeit.",
      },
      {
        text: "Du sprichst das Thema allgemein in der Gruppe an, ohne deinen Freund direkt zu benennen.",
        idealRating: 4,
        explanation:
          "Ein allgemeiner Hinweis sensibilisiert die Gruppe, löst aber das konkrete Problem nicht direkt.",
      },
      {
        text: "Du gibst deinem Freund ein Ultimatum: Entweder er korrigiert es, oder du meldest es.",
        idealRating: 3,
        explanation:
          "Ein Ultimatum kann die Freundschaft stark belasten und wirkt drohend statt unterstützend.",
      },
      {
        text: "Du machst dasselbe wie dein Freund, damit es fair ist.",
        idealRating: 1,
        explanation: "Eigene Regelverstöße sind keine Lösung und verschärfen das Problem.",
      },
      {
        text: "Du recherchierst die Universitätsrichtlinien zu KI-Nutzung und teilst sie mit deinem Freund.",
        idealRating: 5,
        explanation:
          "Sachliche Information hilft dem Freund, die Konsequenzen zu verstehen und eigenverantwortlich zu handeln.",
      },
      {
        text: "Du bietest deinem Freund an, gemeinsam die Arbeit zu überarbeiten, damit sie den Anforderungen entspricht.",
        idealRating: 5,
        explanation:
          "Hilfe bei der Korrektur zeigt Loyalität und stellt gleichzeitig akademische Integrität sicher.",
      },
    ],
  },
  {
    id: "se-07",
    scenario:
      "Du bist Turnusarzt auf einer onkologischen Station. Eine Patientin mit fortgeschrittenem Krebs im Endstadium bittet dich eindringlich, ihrer Familie nicht zu sagen, wie schlecht es wirklich um sie steht. Sie möchte ihre letzten Wochen nicht mit Trauer und Mitleid verbringen. Die Familie fragt dich jedoch ständig nach dem genauen Zustand und drängt auf vollständige Informationen.",
    handlungsoptionen: [
      {
        text: "Du sagst der Familie die volle Wahrheit, weil sie ein Recht darauf haben.",
        idealRating: 1,
        explanation:
          "Die Schweigepflicht gilt auch gegenüber Angehörigen — der Wunsch der Patientin hat Vorrang.",
      },
      {
        text: "Du respektierst den Wunsch der Patientin und gibst der Familie nur allgemeine Informationen.",
        idealRating: 5,
        explanation:
          "Die Patientenautonomie und Schweigepflicht werden gewahrt, ohne die Familie vollständig auszuschließen.",
      },
      {
        text: "Du versuchst in einem einfühlsamen Gespräch, die Patientin davon zu überzeugen, ihre Familie einzuweihen.",
        idealRating: 5,
        explanation:
          "Ein behutsamer Versuch respektiert die Autonomie und fördert zugleich offene Kommunikation.",
      },
      {
        text: "Du bietest der Patientin an, ein gemeinsames Familiengespräch zu moderieren, bei dem sie selbst bestimmt, was gesagt wird.",
        idealRating: 6,
        explanation:
          "Die Patientin behält die Kontrolle und bekommt professionelle Unterstützung für ein schwieriges Gespräch.",
      },
      {
        text: "Du gibst der Familie Andeutungen, ohne explizit die Prognose zu nennen.",
        idealRating: 2,
        explanation:
          "Andeutungen umgehen den Patientenwunsch indirekt und schaffen Misstrauen auf beiden Seiten.",
      },
      {
        text: "Du verweist die Familie an den zuständigen Oberarzt.",
        idealRating: 3,
        explanation:
          "Delegation löst das Problem nicht, da auch der Oberarzt an die Schweigepflicht gebunden ist.",
      },
      {
        text: "Du bietest der Familie ein Gespräch über die allgemeine Erkrankung und Unterstützungsmöglichkeiten an.",
        idealRating: 5,
        explanation:
          "Informationen über die Erkrankung allgemein und Unterstützungsangebote helfen der Familie, ohne die Schweigepflicht zu verletzen.",
      },
      {
        text: "Du schlägst der Patientin vor, eine Patientenverfügung zu erstellen, um ihre Wünsche formal festzuhalten.",
        idealRating: 4,
        explanation:
          "Eine Patientenverfügung ist sinnvoll, adressiert aber nicht direkt das Kommunikationsproblem mit der Familie.",
      },
    ],
  },
  {
    id: "se-08",
    scenario:
      "Du machst ein Forschungspraktikum in einem Labor. Dein Betreuer bittet dich, bestimmte Datenpunkte aus einem Experiment zu entfernen, die nicht ins erwartete Ergebnis passen. Er erklärt, es seien Ausreißer, die das Bild verzerren. Du bist dir nicht sicher, ob die Datenpunkte wirklich fehlerhaft sind oder ob sie ein anderes Ergebnis nahelegen.",
    handlungsoptionen: [
      {
        text: "Du entfernst die Daten, wie dein Betreuer es verlangt, um kein Konflikt zu riskieren.",
        idealRating: 1,
        explanation:
          "Datenmanipulation ist ein schwerer Verstoß gegen wissenschaftliche Integrität, unabhängig von der Hierarchie.",
      },
      {
        text: "Du fragst deinen Betreuer nach den konkreten wissenschaftlichen Kriterien für den Ausschluss der Datenpunkte.",
        idealRating: 6,
        explanation:
          "Sachliche Nachfrage zeigt wissenschaftliches Denken und gibt dem Betreuer die Chance, sein Vorgehen zu begründen.",
      },
      {
        text: "Du analysierst die fraglichen Datenpunkte selbstständig mit statistischen Methoden auf Ausreißerstatus.",
        idealRating: 5,
        explanation:
          "Eigenständige statistische Analyse ist der wissenschaftlich korrekte Weg zur Bewertung von Ausreißern.",
      },
      {
        text: "Du meldest den Vorfall sofort bei der Ethikkommission der Universität.",
        idealRating: 2,
        explanation:
          "Eine sofortige Meldung ohne Klärung ist übertrieben — erst sollte das Gespräch mit dem Betreuer gesucht werden.",
      },
      {
        text: "Du besprichst deine Bedenken mit einem anderen Professor, dem du vertraust.",
        idealRating: 5,
        explanation:
          "Eine Zweitmeinung von einer unabhängigen Fachperson hilft bei der Einschätzung der Situation.",
      },
      {
        text: "Du dokumentierst das Gespräch und die Anweisung schriftlich für deine Unterlagen.",
        idealRating: 5,
        explanation:
          "Schriftliche Dokumentation schützt dich und schafft Transparenz für eventülle spätere Nachfragen.",
      },
      {
        text: "Du entfernst die Daten, behältst aber eine Kopie der Originaldaten für dich.",
        idealRating: 2,
        explanation:
          "Die Datenmanipulation bleibt falsch, auch wenn man die Originale heimlich aufbewahrt.",
      },
      {
        text: "Du schlägst vor, die Daten mit und ohne die fraglichen Punkte zu analysieren und beide Ergebnisse zu präsentieren.",
        idealRating: 6,
        explanation:
          "Transparente Darstellung beider Analysen ist wissenschaftlich einwandfrei und ehrlich.",
      },
    ],
  },
  {
    id: "se-09",
    scenario:
      "Du bist als PJ-Student auf der Gynäkologie. Eine 15-jährige Patientin kommt mit Unterleibsschmerzen. Bei der Untersuchung stellst du fest, dass sie schwanger ist. Sie fleht dich an, ihren Eltern nichts zu sagen, da ihr Vater sehr streng sei und sie Angst vor seiner Reaktion habe. Du vermutest aufgrund ihrer Reaktion, dass es sich um eine Zwangslage handeln könnte.",
    handlungsoptionen: [
      {
        text: "Du versprichst ihr absolute Verschwiegenheit und sagst niemandem etwas.",
        idealRating: 1,
        explanation:
          "Bei Verdacht auf Zwangslage bei einer Minderjährigen besteht eine Schutzpflicht, die über die Schweigepflicht hinausgeht.",
      },
      {
        text: "Du hörst ihr in Ruhe zu und stellst behutsam Fragen, um die Situation besser einzuschätzen.",
        idealRating: 6,
        explanation:
          "Einfühlsames Zuhören und vorsichtiges Nachfragen ist der erste und wichtigste Schritt zum Schutz der Patientin.",
      },
      {
        text: "Du rufst sofort die Polizei, da du eine Straftat vermutest.",
        idealRating: 2,
        explanation:
          "Sofortige Polizeieinschaltung ohne Rücksprache kann die Patientin traumatisieren und ihr Vertrauen zerstören.",
      },
      {
        text: "Du informierst die zuständige Oberärztin über deine Beobachtungen und Bedenken.",
        idealRating: 6,
        explanation:
          "Die Einbindung einer erfahrenen Fachperson ist bei einem so sensiblen Fall zwingend notwendig.",
      },
      {
        text: "Du bietest der Patientin an, gemeinsam mit einer Vertrauensperson ihrer Wahl über die nächsten Schritte zu sprechen.",
        idealRating: 5,
        explanation:
          "Der Patientin eine Vertrauensperson anzubieten stärkt ihre Autonomie und gibt ihr Sicherheit.",
      },
      {
        text: "Du informierst die Eltern, da sie das Sorgerecht haben.",
        idealRating: 1,
        explanation:
          "Bei Verdacht auf häusliche Gewalt oder Zwangslage dürfen die potenziell beteiligten Eltern nicht informiert werden.",
      },
      {
        text: "Du schaltest den Sozialdienst des Krankenhauses ein.",
        idealRating: 5,
        explanation:
          "Der Sozialdienst hat Erfahrung mit solchen Fällen und kann professionelle Unterstützung koordinieren.",
      },
      {
        text: "Du fragst die Patientin direkt, ob sie sexüll missbraucht wird.",
        idealRating: 3,
        explanation:
          "Direkte Fragen sind wichtig, sollten aber behutsam und im richtigen Setting gestellt werden, nicht abrupt.",
      },
    ],
  },
  {
    id: "se-10",
    scenario:
      "Du bist Assistenzarzt in einer Klinik. Ein Kollege, mit dem du gut befreundet bist, kommt regelmäßig mit Alkoholfahne zum Dienst. Bisher hat er keine offensichtlichen Fehler gemacht, aber du machst dir Sorgen um die Patientensicherheit. Andere Kollegen scheinen das Problem zu bemerken, sprechen es aber nicht an.",
    handlungsoptionen: [
      {
        text: "Du sprichst deinen Freund in einem persönlichen Gespräch auf deine Beobachtungen und Sorgen an.",
        idealRating: 6,
        explanation:
          "Ein offenes, fürsorgliches Gespräch unter Freunden ist der erste und wichtigste Schritt.",
      },
      {
        text: "Du ignorierst die Situation, solange keine Fehler passieren.",
        idealRating: 1,
        explanation:
          "Abwarten, bis ein Fehler passiert, gefährdet Patienten und ist ethisch nicht vertretbar.",
      },
      {
        text: "Du meldest die Beobachtung sofort bei der Ärztekammer.",
        idealRating: 2,
        explanation:
          "Eine sofortige Meldung an die Ärztekammer ohne vorheriges Gespräch ist der letzte, nicht der erste Schritt.",
      },
      {
        text: "Du bietest deinem Freund Unterstützung an und informierst ihn über Hilfsangebote für Ärzte.",
        idealRating: 5,
        explanation:
          "Unterstützung und konkrete Hilfsangebote zeigen Empathie und helfen dem Kollegen, professionelle Hilfe zu suchen.",
      },
      {
        text: "Du sprichst das Problem gemeinsam mit einem weiteren vertrauten Kollegen an, um deinem Freund die Ernsthaftigkeit zu verdeutlichen.",
        idealRating: 4,
        explanation:
          "Ein gemeinsames Gespräch kann die Wirkung verstärken, sollte aber nicht als Überfallsituation wirken.",
      },
      {
        text: "Du informierst den Chefarzt vertraulich über deine Beobachtungen.",
        idealRating: 4,
        explanation:
          "Information an den Vorgesetzten ist bei Gefahr für Patienten gerechtfertigt, idealerweise nach einem Gespräch mit dem Kollegen.",
      },
      {
        text: "Du übernimmst stillschweigend kritische Aufgaben deines Freundes, um Fehler zu verhindern.",
        idealRating: 2,
        explanation:
          "Kompensation verdeckt das Problem und verhindert, dass dein Freund die nötige Hilfe bekommt.",
      },
      {
        text: "Du dokumentierst die Vorfälle mit Datum und Uhrzeit für den Fall, dass sich die Situation verschlechtert.",
        idealRating: 4,
        explanation:
          "Dokumentation ist sinnvoll als Ergänzung, darf aber nicht das direkte Handeln ersetzen.",
      },
    ],
  },
  {
    id: "se-11",
    scenario:
      "Du bist als Famulant in einer Hausarztpraxis. Eine Patientin kommt mit ihrem 3-jährigen Kind zur Routineuntersuchung. Während der Untersuchung fällt dir auf, dass das Kind mehrere blaue Flecken an ungewöhnlichen Stellen hat (Rücken, Oberarme). Die Mutter erklärt, das Kind sei sehr aktiv und falle häufig. Du bist dir unsicher, ob die Erklärung plausibel ist.",
    handlungsoptionen: [
      {
        text: "Du akzeptierst die Erklärung der Mutter und dokumentierst die blauen Flecken routinemäßig.",
        idealRating: 2,
        explanation:
          "Blaue Flecken an atypischen Stellen sollten nicht ohne weiteres akzeptiert werden — Kinderschutz geht vor.",
      },
      {
        text: "Du besprichst deine Beobachtungen mit dem Praxisinhaber, um eine gemeinsame Einschätzung zu erhalten.",
        idealRating: 6,
        explanation:
          "Die Einschätzung eines erfahrenen Kollegen ist bei Verdacht auf Kindeswohlgefährdung unerlässlich.",
      },
      {
        text: "Du beschuldigst die Mutter direkt, ihr Kind zu misshandeln.",
        idealRating: 1,
        explanation:
          "Direkte Beschuldigungen ohne gesicherte Grundlage sind unprofessionell und können der Familie schaden.",
      },
      {
        text: "Du dokumentierst die Befunde sorgfältig mit Fotos und genauen Beschreibungen.",
        idealRating: 5,
        explanation:
          "Sorgfältige Dokumentation ist ein wichtiger Baustein bei Verdachtsfällen und ermöglicht spätere Nachverfolgung.",
      },
      {
        text: "Du stellst der Mutter zusätzliche offene Fragen zum Alltag und Verhalten des Kindes.",
        idealRating: 5,
        explanation:
          "Offene Fragen helfen, ein umfassenderes Bild der häuslichen Situation zu bekommen, ohne zu beschuldigen.",
      },
      {
        text: "Du rufst direkt das Jugendamt an, um den Fall zu melden.",
        idealRating: 3,
        explanation:
          "Eine Meldung kann nötig sein, sollte aber erst nach Rücksprache mit dem Vorgesetzten und Einschätzung erfolgen.",
      },
      {
        text: "Du untersuchst das Kind besonders gründlich und achtest auf weitere Auffälligkeiten.",
        idealRating: 5,
        explanation:
          "Eine gründliche Untersuchung kann weitere Hinweise liefern und die Einschätzung absichern.",
      },
      {
        text: "Du sagst dir, dass du als Famulant nicht zuständig bist, und lässt die Sache auf sich beruhen.",
        idealRating: 1,
        explanation:
          "Kinderschutz geht jeden etwas an — Verantwortung bei Verdacht auf Gefährdung ist nicht an eine Rolle gebunden.",
      },
    ],
  },
  {
    id: "se-12",
    scenario:
      "Du bist Turnusarzt auf der Intensivstation. Ein 82-jähriger Patient mit schwerer Demenz wird nach einem Herzstillstand reanimiert. Seine Tochter, die die gesetzliche Betreuung hat, verlangt, dass alles medizinisch Mögliche getan wird. Das Pflegeteam und du sind der Meinung, dass weitere aggressive Therapie dem Patienten nur Leid zufügen würde. Es gibt keine Patientenverfügung.",
    handlungsoptionen: [
      {
        text: "Du folgst ohne Widerspruch den Wünschen der Tochter, da sie die Betreuerin ist.",
        idealRating: 2,
        explanation:
          "Auch Betreuer müssen im mutmaßlichen Willen des Patienten handeln — blindes Befolgen ist nicht angemessen.",
      },
      {
        text: "Du organisierst ein interdisziplinäres Familiengespräch mit Ärzten, Pflege und der Tochter.",
        idealRating: 6,
        explanation:
          "Ein strukturiertes Gespräch mit allen Beteiligten ist der Goldstandard für solche ethischen Konflikte.",
      },
      {
        text: "Du reduzierst eigenmächtig die Therapieintensität, weil du es für richtig hältst.",
        idealRating: 1,
        explanation:
          "Eigenmächtige Therapiereduktion ohne Konsens ist rechtswidrig und ethisch nicht vertretbar.",
      },
      {
        text: "Du schaltest die klinische Ethikkommission zur Beratung ein.",
        idealRating: 6,
        explanation:
          "Bei unüberbrückbaren Konflikten ist die Ethikkommission genau die richtige Anlaufstelle.",
      },
      {
        text: "Du erklärst der Tochter einfühlsam die medizinische Prognose und was weitere Therapie für den Patienten bedeuten würde.",
        idealRating: 5,
        explanation:
          "Transparente, empathische Aufklärung hilft der Tochter, eine informierte Entscheidung im Sinne des Patienten zu treffen.",
      },
      {
        text: "Du fragst die Tochter, was ihr Vater sich in gesunden Tagen für eine solche Situation gewünscht hätte.",
        idealRating: 5,
        explanation:
          "Die Frage nach dem mutmaßlichen Patientenwillen ist der ethisch zentrale Punkt bei fehlender Verfügung.",
      },
      {
        text: "Du sagst der Tochter direkt, dass ihre Forderung dem Patienten schadet.",
        idealRating: 2,
        explanation:
          "Direkte Schuldzuweisung an die trauernde Tochter ist unsensibel und kontraproduktiv.",
      },
      {
        text: "Du bietest der Tochter ein Gespräch mit der Krankenhausseelsorge an.",
        idealRating: 4,
        explanation:
          "Seelsorgerische Unterstützung kann der Tochter helfen, mit der schwierigen Situation umzugehen.",
      },
    ],
  },
  {
    id: "se-13",
    scenario:
      "Du absolvierst eine Famulatur in einer psychiatrischen Klinik. Ein Patient mit bekannter Schizophrenie vertraut dir an, dass er seine Medikamente seit Wochen nicht mehr nimmt, weil er sich davon kontrolliert fühle. Aktüll zeigt er keine akuten Symptome, wirkt aber zunehmend misstrauisch. Er bittet dich, seinem behandelnden Arzt nichts zu sagen, da er den Arzt nicht mehr möge.",
    handlungsoptionen: [
      {
        text: "Du hältst die Information geheim, da du sein Vertrauen nicht brechen möchtest.",
        idealRating: 1,
        explanation:
          "Bei einem psychiatrischen Patienten, der Medikamente absetzt, besteht akute Rückfallgefahr — Schweigen ist gefährlich.",
      },
      {
        text: "Du erklärst dem Patienten einfühlsam, warum es wichtig ist, dass sein Arzt davon weiß, und bittest um sein Einverständnis.",
        idealRating: 6,
        explanation:
          "Transparente Kommunikation und der Versuch, Einverständnis zu erhalten, respektiert die Autonomie und sichert die Behandlung.",
      },
      {
        text: "Du informierst sofort den behandelnden Arzt, ohne den Patienten vorher zu informieren.",
        idealRating: 3,
        explanation:
          "Information des Arztes ist wichtig, aber der Patient sollte nach Möglichkeit vorher informiert werden.",
      },
      {
        text: "Du erkundigst dich, warum er den Arzt nicht mehr mag, und ob ein Arztwechsel eine Option wäre.",
        idealRating: 5,
        explanation:
          "Die Hintergründe zu verstehen und Alternativen anzubieten fördert die Therapieadhärenz und das Vertrauen.",
      },
      {
        text: "Du versuchst den Patienten zu überreden, seine Medikamente wieder zu nehmen.",
        idealRating: 3,
        explanation:
          "Überreden ist weniger wirksam als empathisches Verstehen und kann als bevormundend empfunden werden.",
      },
      {
        text: "Du informierst deinen betreuenden Arzt auf der Famulatur über die Situation und bittest um Anleitung.",
        idealRating: 6,
        explanation:
          "Als Famulant die eigene Betreuungsperson einzubeziehen ist bei einer solchen Situation dringend geboten.",
      },
      {
        text: "Du liest in der Patientenakte nach, ob es Hinweise auf frühere Episoden nach Medikamentenabbruch gibt.",
        idealRating: 4,
        explanation:
          "Recherche in der Akte hilft bei der Risiköinschätzung, darf aber nicht das Handeln ersetzen.",
      },
      {
        text: "Du bietest dem Patienten an, beim nächsten Arztgespräch dabei zu sein und ihn zu unterstützen.",
        idealRating: 5,
        explanation:
          "Unterstützung beim Arztgespräch zeigt Empathie und kann helfen, die therapeutische Beziehung zu verbessern.",
      },
    ],
  },
  {
    id: "se-14",
    scenario:
      "Du arbeitest als Turnusarzt in einer Ambulanz. Am Ende eines langen Dienstes kommt eine Patientin mit unspezifischen Bauchschmerzen. Du bist erschöpft und die Symptome wirken auf den ersten Blick harmlos. Die Patientin ist jedoch sichtlich besorgt und möchte gründlich untersucht werden. Deine Schicht endet in 15 Minuten und dein Nachfolger hat sich noch nicht gemeldet.",
    handlungsoptionen: [
      {
        text: "Du führst eine kurze Untersuchung durch und schickst die Patientin mit Schmerzmitteln nach Hause.",
        idealRating: 2,
        explanation:
          "Eine oberflächliche Untersuchung aufgrund von Zeitdruck kann gefährliche Diagnosen übersehen.",
      },
      {
        text: "Du nimmst dir die Zeit für eine gründliche Anamnese und Untersuchung, auch wenn deine Schicht überzogen wird.",
        idealRating: 6,
        explanation:
          "Patientensicherheit geht vor persönlichem Dienstschluss — gründliche Untersuchung ist ärztliche Pflicht.",
      },
      {
        text: "Du bittest die Patientin, morgen wiederzukommen, wenn es nicht besser wird.",
        idealRating: 2,
        explanation: "Verschieben ohne Untersuchung ist riskant und verletzt die Sorgfaltspflicht.",
      },
      {
        text: "Du führst eine strukturierte Anamnese durch und entscheidest danach, ob weitere Diagnostik nötig ist.",
        idealRating: 5,
        explanation:
          "Strukturiertes Vorgehen hilft, auch bei Müdigkeit keine wichtigen Symptome zu übersehen.",
      },
      {
        text: "Du übergibst die Patientin mit ausführlicher Dokumentation an deinen Nachfolger.",
        idealRating: 4,
        explanation:
          "Übergabe ist akzeptabel, wenn der Nachfolger verfügbar ist und die Patientin in der Zwischenzeit versorgt wird.",
      },
      {
        text: "Du erklärst der Patientin ehrlich, dass du erschöpft bist, aber ihr Anliegen ernst nimmst.",
        idealRating: 4,
        explanation:
          "Ehrlichkeit über den eigenen Zustand ist menschlich und schafft Vertrauen, muss aber mit guter Versorgung einhergehen.",
      },
      {
        text: "Du ordnest schnell ein Basislabor und einen Ultraschall an, um nichts Ernstes zu übersehen.",
        idealRating: 5,
        explanation:
          "Grundlegende Diagnostik ist bei unspezifischen Bauchschmerzen ein sinnvoller Sicherheitsschritt.",
      },
      {
        text: "Du sagst der Patientin, dass Bauchschmerzen meist harmlos sind, und beruhigst sie.",
        idealRating: 1,
        explanation:
          "Pauschalaussagen ohne Untersuchung sind unprofessionell und potenziell gefährlich.",
      },
    ],
  },
  {
    id: "se-15",
    scenario:
      "Du bist Medizinstudent und absolvierst ein Wahlfach in einem Entwicklungsland. In der dortigen Klinik gibt es kaum Medikamente und veraltete Geräte. Ein lokaler Arzt bittet dich, eigenständig Patienten zu behandeln, da Personal fehlt. Du weißt, dass du dafür weder die Ausbildung noch die Berechtigung hast. Gleichzeitig warten Patienten dringend auf Hilfe.",
    handlungsoptionen: [
      {
        text: "Du behandelst die Patienten eigenständig, da der Bedarf so groß ist.",
        idealRating: 1,
        explanation:
          "Eigenständige Behandlung ohne Qualifikation gefährdet Patienten, auch wenn die Absicht gut ist.",
      },
      {
        text: "Du lehnst ab und erklärst dem Arzt, dass du nur unter seiner direkten Supervision arbeiten kannst.",
        idealRating: 6,
        explanation:
          "Klare Kommunikation der eigenen Grenzen schützt die Patienten und ist professionell verantwortungsvoll.",
      },
      {
        text: "Du hilfst bei einfachen Aufgaben wie Verbandswechseln und Vitalzeichenkontrolle, die du sicher beherrschst.",
        idealRating: 5,
        explanation:
          "Hilfe im Rahmen der eigenen Kompetenz ist sinnvoll und entlastet das Team, ohne Patienten zu gefährden.",
      },
      {
        text: "Du kontaktierst deine Universität zu Hause und bittest um Beratung zur rechtlichen Situation.",
        idealRating: 5,
        explanation:
          "Rücksprache mit der Heimatuniversität klärt den rechtlichen Rahmen und gibt Orientierung.",
      },
      {
        text: "Du hilfst dem lokalen Arzt als Assistenz und lernst von seiner Erfahrung.",
        idealRating: 5,
        explanation:
          "Assistenz unter Supervision ist ein guter Kompromiss zwischen Hilfe und Patientensicherheit.",
      },
      {
        text: "Du versuchst über NGOs oder internationale Organisationen zusätzliches medizinisches Personal zu organisieren.",
        idealRating: 4,
        explanation:
          "Eine nachhaltige Lösung, die aber Zeit braucht und die akute Situation nicht sofort verbessert.",
      },
      {
        text: "Du reist sofort ab, da die Arbeitsbedingungen nicht deinen Standards entsprechen.",
        idealRating: 1,
        explanation:
          "Sofortige Abreise ist keine verantwortungsvolle Reaktion und hilft niemandem.",
      },
      {
        text: "Du führst Behandlungen durch, aber nur bei Fällen, die du in deiner Ausbildung bereits geübt hast.",
        idealRating: 3,
        explanation:
          "Selbsteinschätzung ist wichtig, aber eigenständige Behandlung ohne Berechtigung bleibt problematisch.",
      },
    ],
  },
];
