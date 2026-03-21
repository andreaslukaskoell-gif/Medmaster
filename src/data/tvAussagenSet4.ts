import type { TVOffiziellText } from "./tvOffiziell";

export const tvAussagenSet4: TVOffiziellText[] = [
  // =========================================================================
  // 1. Der Nocebo-Effekt und seine Mechanismen (tv5-text1)
  // =========================================================================
  {
    id: "tv-a4-01",
    title: "Der Nocebo-Effekt und seine Mechanismen",
    text: `Während der Placebo-Effekt beschreibt, wie positive Erwartungen zu einer Verbesserung des Gesundheitszustands führen können, bezeichnet der Nocebo-Effekt das umgekehrte Phänomen: Negative Erwartungen oder Befürchtungen können tatsächlich körperliche Beschwerden hervorrufen oder verstärken. Der Begriff leitet sich vom Lateinischen 'nocebo' ab, was 'ich werde schaden' bedeutet. Ein eindrückliches Beispiel liefert eine Studie, in der Patienten über mögliche Nebenwirkungen eines Medikaments aufgeklärt wurden: Diejenigen, die ausführlich über mögliche Kopfschmerzen informiert wurden, berichteten dreimal häufiger über Kopfschmerzen als eine Vergleichsgruppe, die dieselbe Substanz ohne diese Information erhielt – obwohl beide Gruppen in Wirklichkeit ein Placebo bekamen. Neurobiologisch wird der Nocebo-Effekt mit der Aktivierung der Hypothalamus-Hypophysen-Nebennierenrinden-Achse und einer verstärkten Ausschüttung des Stresshormons Cortisol in Verbindung gebracht. Zudem scheinen angstbedingte Signalwege im Gehirn die Schmerzwahrnehmung zu verstärken. Für die ärztliche Praxis ergibt sich daraus ein ethisches Dilemma: Ärzte sind einerseits zur vollständigen Aufklärung über Nebenwirkungen verpflichtet, andererseits kann genau diese Aufklärung über den Nocebo-Effekt Beschwerden hervorrufen, die ohne sie nicht aufgetreten wären. Einige Forscher plädieren daher für eine kontextsensitive Aufklärung, die Risiken nennt, ohne negative Erwartungen übermäßig zu verstärken.`,
    fragen: [
      {
        id: "tv-a4-01-q1",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Der Nocebo-Effekt wird neurobiologisch unter anderem mit einer verstärkten Cortisolausschüttung in Verbindung gebracht.",
          },
          {
            nr: 2,
            text: "In der beschriebenen Studie erhielt die Vergleichsgruppe ein echtes Medikament, während die Informationsgruppe ein Placebo bekam.",
          },
          {
            nr: 3,
            text: "Einige Forscher empfehlen eine kontextsensitive Aufklärung als möglichen Umgang mit dem ethischen Dilemma.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "1. und 3. sind richtig." },
          { key: "B", beschreibung: "Nur 1. ist richtig." },
          { key: "C", beschreibung: "1., 2. und 3. sind richtig." },
          { key: "D", beschreibung: "Nur 2. ist richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "A",
        explanation:
          "Aussage 1 ist korrekt: Der Text nennt die Aktivierung der HPA-Achse und verstärkte Cortisolausschüttung. Aussage 2 ist falsch: Beide Gruppen erhielten ein Placebo, nicht nur eine. Aussage 3 ist korrekt: Der Text erwähnt, dass einige Forscher für eine kontextsensitive Aufklärung plädieren.",
      },
      {
        id: "tv-a4-01-q2",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Der Nocebo-Effekt verursacht die Kopfschmerzen, weil die verabreichte Substanz tatsächlich Nebenwirkungen hat.",
          },
          {
            nr: 2,
            text: "Das ethische Dilemma besteht darin, dass die Aufklärungspflicht selbst über den Nocebo-Effekt Beschwerden auslösen kann.",
          },
          {
            nr: 3,
            text: "Der Begriff 'nocebo' stammt aus dem Griechischen und bedeutet 'ich werde heilen'.",
          },
          {
            nr: 4,
            text: "Angstbedingte Signalwege im Gehirn können laut Text die Schmerzwahrnehmung verstärken.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "1. und 3. sind richtig." },
          { key: "B", beschreibung: "2. und 4. sind richtig." },
          { key: "C", beschreibung: "1., 2. und 4. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "B",
        explanation:
          "Aussage 1 ist falsch: Beide Gruppen erhielten ein Placebo – die Kopfschmerzen entstanden durch negative Erwartungen, nicht durch eine echte Substanz. Aussage 2 ist korrekt: Der Text beschreibt genau dieses Dilemma. Aussage 3 ist falsch: Der Begriff stammt aus dem Lateinischen und bedeutet 'ich werde schaden'. Aussage 4 ist korrekt: Der Text erwähnt, dass angstbedingte Signalwege die Schmerzwahrnehmung verstärken.",
      },
    ],
  },

  // =========================================================================
  // 2. Die Sapir-Whorf-Hypothese: Sprache und Denken (tv5-text2)
  // =========================================================================
  {
    id: "tv-a4-02",
    title: "Die Sapir-Whorf-Hypothese: Sprache und Denken",
    text: `Die nach den Linguisten Edward Sapir und Benjamin Lee Whorf benannte Hypothese postuliert, dass die Sprache, die ein Mensch spricht, sein Denken und seine Wahrnehmung der Welt beeinflusst oder sogar bestimmt. In ihrer starken Fassung – dem linguistischen Determinismus – behauptet die Hypothese, dass Sprache das Denken determiniert: Was sprachlich nicht ausgedrückt werden kann, könne auch nicht gedacht werden. Diese starke Version gilt heute als widerlegt, da Menschen offensichtlich auch Gedanken haben, für die ihnen Worte fehlen. Die schwache Fassung – der linguistische Relativismus – besagt hingegen lediglich, dass Sprache das Denken beeinflusst, ohne es vollständig zu bestimmen. Für diese Position gibt es durchaus empirische Belege. So unterscheiden Sprecher von Sprachen mit vielen Farbwörtern bestimmte Farbnuancen schneller als Sprecher von Sprachen mit weniger Farbbezeichnungen. In der australischen Sprache Kuuk Thaayorre gibt es keine Begriffe für 'links' und 'rechts'; stattdessen werden absolute Himmelsrichtungen verwendet. Sprecher dieser Sprache verfügen über einen bemerkenswert präzisen inneren Kompass, den Sprecher europäischer Sprachen in dieser Ausprägung nicht besitzen. Kritiker wenden ein, dass solche Unterschiede nicht notwendigerweise auf die Sprache selbst zurückzuführen sind, sondern möglicherweise auf kulturelle Praktiken und Umweltbedingungen, die sowohl die Sprache als auch die kognitiven Fähigkeiten unabhängig voneinander formen.`,
    fragen: [
      {
        id: "tv-a4-02-q1",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Die starke Fassung der Sapir-Whorf-Hypothese gilt heute als widerlegt.",
          },
          {
            nr: 2,
            text: "Sprecher der Sprache Kuuk Thaayorre verwenden Begriffe wie 'links' und 'rechts' zusätzlich zu Himmelsrichtungen.",
          },
          {
            nr: 3,
            text: "Für den linguistischen Relativismus gibt es empirische Belege, etwa aus der Farbwahrnehmungsforschung.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "1. und 2. sind richtig." },
          { key: "C", beschreibung: "1. und 3. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "C",
        explanation:
          "Aussage 1 ist korrekt: Der Text sagt, die starke Version gilt als widerlegt. Aussage 2 ist falsch: Der Text sagt ausdrücklich, es gibt KEINE Begriffe für 'links' und 'rechts' – sie verwenden Himmelsrichtungen stattdessen, nicht zusätzlich. Aussage 3 ist korrekt: Der Text nennt Farbwahrnehmungsunterschiede als empirischen Beleg.",
      },
      {
        id: "tv-a4-02-q2",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Kritiker der Hypothese argumentieren, dass kulturelle Praktiken und Umweltbedingungen die beobachteten Unterschiede besser erklären als die Sprache.",
          },
          {
            nr: 2,
            text: "Der linguistische Determinismus besagt, dass Sprache das Denken beeinflusst, ohne es vollständig zu bestimmen.",
          },
          {
            nr: 3,
            text: "Der präzise innere Kompass der Kuuk-Thaayorre-Sprecher beweist die starke Fassung der Hypothese.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "1. und 2. sind richtig." },
          { key: "B", beschreibung: "Nur 2. ist richtig." },
          { key: "C", beschreibung: "Alle sind richtig." },
          { key: "D", beschreibung: "Nur 1. ist richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "D",
        explanation:
          "Aussage 1 ist korrekt: Der Text nennt genau diesen Einwand der Kritiker. Aussage 2 ist falsch: Der linguistische Determinismus ist die STARKE Fassung, die besagt, Sprache determiniere das Denken vollständig – die Beschreibung trifft auf den linguistischen Relativismus zu (Verwechslung). Aussage 3 ist falsch: Das Beispiel wird als Beleg für die schwache Fassung angeführt; die starke gilt als widerlegt.",
      },
    ],
  },

  // =========================================================================
  // 3. Algorithmische Voreingenommenheit (tv5-text3)
  // =========================================================================
  {
    id: "tv-a4-03",
    title: "Algorithmische Voreingenommenheit",
    text: `Algorithmen treffen zunehmend Entscheidungen, die das Leben von Menschen direkt beeinflussen: Sie wählen aus, welche Nachrichten wir sehen, sie bewerten Kreditwürdigkeit, sie filtern Bewerbungen und sie unterstützen Richter bei Prognosen über die Rückfallwahrscheinlichkeit von Straftätern. Die verbreitete Annahme, dass Algorithmen objektiver urteilen als Menschen, erweist sich jedoch als trügerisch. Algorithmen lernen aus historischen Daten, und wenn diese Daten systematische Verzerrungen enthalten – etwa weil bestimmte Bevölkerungsgruppen in der Vergangenheit diskriminiert wurden –, reproduziert und verstärkt der Algorithmus diese Diskriminierung. Ein bekanntes Beispiel betrifft ein Einstellungsprogramm eines großen Technologieunternehmens, das männliche Bewerber systematisch bevorzugte, weil es auf Daten trainiert worden war, die den überwiegend männlichen Einstellungserfolg der Vergangenheit widerspiegelten. Besonders problematisch ist, dass algorithmische Entscheidungen oft intransparent sind – die komplexen Berechnungen eines neuronalen Netzwerks sind selbst für Experten nicht immer nachvollziehbar, weshalb man von einer 'Black Box' spricht. Ansätze zur Lösung umfassen die Entwicklung von Methoden zur Erklärbarkeit von KI-Entscheidungen (Explainable AI), regelmäßige Audits algorithmischer Systeme auf Diskriminierung, die Diversifizierung von Trainingsdatensätzen und gesetzliche Regulierung. Die Europäische Union hat mit dem AI Act einen Rechtsrahmen geschaffen, der risikoreiche KI-Anwendungen strengeren Anforderungen an Transparenz und Fairness unterwirft.`,
    fragen: [
      {
        id: "tv-a4-03-q1",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Algorithmen sind grundsätzlich objektiver als menschliche Entscheider, da sie frei von Emotionen urteilen.",
          },
          {
            nr: 2,
            text: "Das beschriebene Einstellungsprogramm bevorzugte männliche Bewerber, weil es auf historischen Daten trainiert wurde, die vergangene Diskriminierung widerspiegelten.",
          },
          {
            nr: 3,
            text: "Der AI Act der EU verbietet alle KI-Anwendungen in Hochrisikobereichen vollständig.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 2. ist richtig." },
          { key: "B", beschreibung: "1. und 2. sind richtig." },
          { key: "C", beschreibung: "2. und 3. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "A",
        explanation:
          "Aussage 1 ist falsch: Der Text sagt explizit, die Annahme der Objektivität von Algorithmen sei 'trügerisch'. Aussage 2 ist korrekt: Der Text beschreibt genau diesen Mechanismus. Aussage 3 ist falsch: Der AI Act unterwirft risikoreiche Anwendungen strengeren Anforderungen – er verbietet sie nicht vollständig (Scope Error).",
      },
      {
        id: "tv-a4-03-q2",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Der Begriff 'Black Box' beschreibt, dass algorithmische Entscheidungen selbst für Experten oft nicht nachvollziehbar sind.",
          },
          {
            nr: 2,
            text: "Explainable AI zielt darauf ab, KI-Entscheidungen nachvollziehbar zu machen.",
          },
          {
            nr: 3,
            text: "Algorithmische Diskriminierung entsteht, weil Programmierer absichtlich diskriminierende Regeln programmieren.",
          },
          {
            nr: 4,
            text: "Diversifizierung von Trainingsdaten wird als einer von mehreren Lösungsansätzen genannt.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "1., 2. und 3. sind richtig." },
          { key: "B", beschreibung: "1., 2. und 4. sind richtig." },
          { key: "C", beschreibung: "Nur 1. und 2. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "B",
        explanation:
          "Aussage 1 ist korrekt: Der Text definiert 'Black Box' genau so. Aussage 2 ist korrekt: Der Text nennt Explainable AI als Methode zur Erklärbarkeit. Aussage 3 ist falsch: Der Text sagt, Algorithmen lernen aus verzerrten historischen Daten – es handelt sich nicht um absichtliche Programmierung (Mechanismus-Verwechslung). Aussage 4 ist korrekt: Der Text nennt Diversifizierung von Trainingsdatensätzen als Lösungsansatz.",
      },
    ],
  },

  // =========================================================================
  // 4. Chronobiologie: Die innere Uhr des Menschen (tv5-text4)
  // =========================================================================
  {
    id: "tv-a4-04",
    title: "Chronobiologie: Die innere Uhr des Menschen",
    text: `Jeder Mensch besitzt eine innere Uhr, die nahezu alle Körperfunktionen in einem zirkadianen Rhythmus steuert – einem Zyklus von ungefähr 24 Stunden. Der zentrale Taktgeber befindet sich im suprachiasmatischen Nucleus (SCN), einer winzigen Ansammlung von etwa 20.000 Nervenzellen im Hypothalamus, direkt oberhalb der Kreuzung der Sehnerven. Licht, das über die Netzhaut aufgenommen wird, synchronisiert den SCN mit dem Tag-Nacht-Rhythmus der Umwelt. Neben diesem zentralen Taktgeber besitzen praktisch alle Körperzellen eigene periphere Uhren, die durch den SCN koordiniert werden. Die Chronobiologie hat gezeigt, dass der Zeitpunkt einer medizinischen Behandlung deren Wirksamkeit beeinflussen kann – ein Forschungsfeld, das als Chronopharmakologie bezeichnet wird. So wirken bestimmte Blutdruckmedikamente effektiver, wenn sie abends statt morgens eingenommen werden, weil der Blutdruck einem zirkadianen Muster folgt. Auch die individuelle Veranlagung zum Chronotyp – ob jemand eine 'Lerche' (Frühtyp) oder eine 'Eule' (Spättyp) ist – wird maßgeblich durch genetische Faktoren bestimmt. Gesellschaftlich sind Spättypen oft benachteiligt, da Schul- und Arbeitszeiten typischerweise frühe Anfangszeiten vorsehen. Studien zeigen, dass ein späterer Schulbeginn die schulischen Leistungen und das Wohlbefinden von jugendlichen Spättypen signifikant verbessern kann.`,
    fragen: [
      {
        id: "tv-a4-04-q1",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Ob jemand ein Frühtyp oder Spättyp ist, wird maßgeblich durch genetische Faktoren bestimmt.",
          },
          {
            nr: 2,
            text: "Der SCN wird durch Schallwellen synchronisiert, die über das Innenohr aufgenommen werden.",
          },
          {
            nr: 3,
            text: "Alle Blutdruckmedikamente wirken laut dem Text abends besser als morgens.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Alle sind richtig." },
          { key: "B", beschreibung: "1. und 3. sind richtig." },
          { key: "C", beschreibung: "Nur 1. ist richtig." },
          { key: "D", beschreibung: "1. und 2. sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "C",
        explanation:
          "Aussage 1 ist korrekt: Der Text sagt, die Veranlagung zum Chronotyp wird maßgeblich durch genetische Faktoren bestimmt. Aussage 2 ist falsch: Der SCN wird durch Licht synchronisiert, das über die Netzhaut aufgenommen wird, nicht durch Schallwellen (Mechanismus-Verwechslung). Aussage 3 ist falsch: Der Text sagt 'bestimmte' Blutdruckmedikamente – nicht alle (Scope Error: 'bestimmte' wird zu 'alle' verallgemeinert).",
      },
      {
        id: "tv-a4-04-q2",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Periphere Uhren in den Körperzellen arbeiten vollständig unabhängig vom SCN und können nicht koordiniert werden.",
          },
          {
            nr: 2,
            text: "Alle Blutdruckmedikamente wirken laut dem Text abends effektiver als morgens.",
          },
          {
            nr: 3,
            text: "Der Chronotyp wird ausschließlich durch Umweltfaktoren bestimmt und hat keine genetische Grundlage.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "1. und 2. sind richtig." },
          { key: "C", beschreibung: "2. und 3. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "E",
        explanation:
          "Aussage 1 ist falsch: Der Text sagt, periphere Uhren werden durch den SCN koordiniert – sie arbeiten gerade nicht unabhängig. Aussage 2 ist falsch: Der Text sagt 'bestimmte' Blutdruckmedikamente, nicht alle (Scope Error). Aussage 3 ist falsch: Der Text sagt, der Chronotyp wird 'maßgeblich durch genetische Faktoren bestimmt' – nicht ausschließlich durch Umweltfaktoren (Umkehrung).",
      },
    ],
  },

  // =========================================================================
  // 5. Der Bystander-Effekt: Verantwortungsdiffusion in Gruppen (tv5-text5)
  // =========================================================================
  {
    id: "tv-a4-05",
    title: "Der Bystander-Effekt: Verantwortungsdiffusion in Gruppen",
    text: `Im Jahr 1964 wurde die junge New Yorkerin Kitty Genovese vor ihrem Wohnhaus ermordet. Medienberichte behaupteten, 38 Nachbarn hätten den Angriff beobachtet, ohne einzugreifen oder die Polizei zu rufen. Obwohl sich diese Darstellung später als übertrieben herausstellte, inspirierte der Fall die Psychologen John Darley und Bibb Latané zu einer Reihe von Experimenten, die den sogenannten Bystander-Effekt wissenschaftlich belegten: Die Wahrscheinlichkeit, dass eine Person in einer Notsituation hilft, sinkt paradoxerweise mit der Anzahl der anwesenden Personen. Darley und Latané identifizierten mehrere Mechanismen, die diesem Effekt zugrunde liegen. Erstens die Verantwortungsdiffusion: Je mehr Menschen anwesend sind, desto weniger fühlt sich jeder Einzelne persönlich verantwortlich, da die Verantwortung sich auf alle Anwesenden verteilt. Zweitens die pluralistische Ignoranz: In mehrdeutigen Situationen beobachten Menschen das Verhalten anderer, um die Lage einzuschätzen. Wenn niemand reagiert, interpretieren alle die Situation als nicht bedrohlich. Drittens die Bewertungsangst: Menschen fürchten, sich durch unangemessenes Eingreifen in einer Nicht-Notfallsituation zu blamieren. Interventionsprogramme nutzen dieses Wissen, indem sie Menschen darin schulen, direkt eine bestimmte Person um Hilfe zu bitten, anstatt allgemein um Hilfe zu rufen – denn wird eine Einzelperson direkt angesprochen, wird die Verantwortungsdiffusion aufgehoben.`,
    fragen: [
      {
        id: "tv-a4-05-q1",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Die Medienberichte über den Fall Genovese entsprachen vollständig den Tatsachen.",
          },
          {
            nr: 2,
            text: "Die Hilfsbereitschaft in einer Notsituation steigt mit der Anzahl der anwesenden Personen.",
          },
          {
            nr: 3,
            text: "Bewertungsangst beschreibt die Furcht, sich durch Eingreifen in einer Nicht-Notfallsituation zu blamieren.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "1. und 3. sind richtig." },
          { key: "B", beschreibung: "Nur 3. ist richtig." },
          { key: "C", beschreibung: "2. und 3. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "B",
        explanation:
          "Aussage 1 ist falsch: Der Text sagt, die Darstellung stellte sich später als übertrieben heraus. Aussage 2 ist falsch: Der Text sagt das Gegenteil – die Hilfsbereitschaft sinkt paradoxerweise mit der Anzahl der Anwesenden. Aussage 3 ist korrekt: Der Text definiert Bewertungsangst genau so.",
      },
      {
        id: "tv-a4-05-q2",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Pluralistische Ignoranz bedeutet, dass Menschen in mehrdeutigen Situationen das Verhalten anderer beobachten und bei fehlender Reaktion die Lage als ungefährlich einschätzen.",
          },
          {
            nr: 2,
            text: "Die direkte Ansprache einer bestimmten Person kann die Verantwortungsdiffusion aufheben.",
          },
          {
            nr: 3,
            text: "Darley und Latané erforschten den Bystander-Effekt, nachdem sie den Fall Genovese als Inspiration nutzten.",
          },
          {
            nr: 4,
            text: "Verantwortungsdiffusion entsteht, weil sich jeder Einzelne in einer Gruppe stärker persönlich verantwortlich fühlt.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "1., 2. und 4. sind richtig." },
          { key: "B", beschreibung: "Nur 1. und 2. sind richtig." },
          { key: "C", beschreibung: "1., 2. und 3. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "C",
        explanation:
          "Aussage 1 ist korrekt: Der Text beschreibt pluralistische Ignoranz genau so. Aussage 2 ist korrekt: Der Text sagt, die direkte Ansprache hebt die Verantwortungsdiffusion auf. Aussage 3 ist korrekt: Der Text beschreibt, dass der Fall die Psychologen inspirierte. Aussage 4 ist falsch: Verantwortungsdiffusion bedeutet das Gegenteil – jeder fühlt sich WENIGER verantwortlich.",
      },
    ],
  },

  // =========================================================================
  // 6. Die Photosynthese – Motor des Lebens (tv7-1)
  // =========================================================================
  {
    id: "tv-a4-06",
    title: "Die Photosynthese – Motor des Lebens",
    text: `Die Photosynthese ist einer der wichtigsten biochemischen Prozesse auf der Erde, denn sie bildet die Grundlage für nahezu alle Nahrungsketten und ist die Hauptquelle des atmosphärischen Sauerstoffs. Bei diesem Vorgang wandeln Pflanzen, Algen und bestimmte Bakterien mithilfe von Lichtenergie Kohlendioxid und Wasser in Glucose und Sauerstoff um. Die Photosynthese lässt sich in zwei Hauptphasen unterteilen: die Lichtreaktion und die Dunkelreaktion, die auch als Calvin-Zyklus bezeichnet wird. Die Lichtreaktion findet in den Thylakoiden statt, membranumschlossenen Strukturen innerhalb der Chloroplasten. Hier absorbiert das Pigment Chlorophyll Lichtenergie, wobei Chlorophyll a und Chlorophyll b unterschiedliche Wellenlängen des Lichts aufnehmen. Die absorbierte Energie wird genutzt, um Wasser in Sauerstoff, Protonen und Elektronen zu spalten. Die Elektronen durchlaufen anschließend eine Elektronentransportkette, wobei die Energie genutzt wird, um ATP und NADPH zu erzeugen, zwei energiereiche Moleküle, die für die nächste Phase benötigt werden. Der Sauerstoff wird als Nebenprodukt freigesetzt. Im Calvin-Zyklus, der im Stroma der Chloroplasten abläuft, werden ATP und NADPH verwendet, um Kohlendioxid in organische Moleküle umzuwandeln. Dabei wird CO2 zunächst an ein Fünf-Kohlenstoff-Molekül namens Ribulose-1,5-bisphosphat gebunden, ein Vorgang, der vom Enzym RuBisCO katalysiert wird. RuBisCO gilt als das häufigste Enzym auf der Erde. Durch eine Reihe weiterer Reaktionen entsteht schließlich Glycerinaldehyd-3-phosphat, aus dem die Pflanze Glucose und andere organische Verbindungen aufbauen kann. Die Effizienz der Photosynthese wird von mehreren Faktoren beeinflusst, darunter die Lichtintensität, die CO2-Konzentration und die Temperatur. Bei sehr hohen Temperaturen schließen viele Pflanzen ihre Spaltöffnungen, um Wasserverlust zu vermeiden, wodurch jedoch weniger CO2 aufgenommen wird und die Photosyntheserate sinkt. Einige Pflanzen haben evolutionär Anpassungen entwickelt, um dieses Problem zu umgehen, darunter die sogenannte C4-Photosynthese, die bei tropischen Gräsern wie Mais und Zuckerrohr vorkommt und eine effizientere CO2-Fixierung bei hohen Temperaturen ermöglicht.`,
    fragen: [
      {
        id: "tv-a4-06-q1",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "RuBisCO katalysiert im Calvin-Zyklus die Bindung von CO2 an Ribulose-1,5-bisphosphat.",
          },
          {
            nr: 2,
            text: "Chlorophyll a und Chlorophyll b absorbieren dieselben Wellenlängen des Lichts.",
          },
          {
            nr: 3,
            text: "Der Calvin-Zyklus findet im Stroma der Chloroplasten statt.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "1. und 2. sind richtig." },
          { key: "C", beschreibung: "1. und 3. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "C",
        explanation:
          "Aussage 1 ist korrekt: Der Text beschreibt genau diese Funktion von RuBisCO. Aussage 2 ist falsch: Der Text sagt, Chlorophyll a und Chlorophyll b absorbieren UNTERSCHIEDLICHE Wellenlängen. Aussage 3 ist korrekt: Der Text sagt, der Calvin-Zyklus läuft im Stroma der Chloroplasten ab.",
      },
      {
        id: "tv-a4-06-q2",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Die C4-Photosynthese kommt bei tropischen Gräsern vor und ermöglicht effizientere CO2-Fixierung bei hohen Temperaturen.",
          },
          {
            nr: 2,
            text: "Bei hohen Temperaturen öffnen Pflanzen ihre Spaltöffnungen weiter, um mehr CO2 aufzunehmen.",
          },
          {
            nr: 3,
            text: "Sauerstoff entsteht bei der Photosynthese als Nebenprodukt der Lichtreaktion.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Alle sind richtig." },
          { key: "B", beschreibung: "1. und 2. sind richtig." },
          { key: "C", beschreibung: "Nur 3. ist richtig." },
          { key: "D", beschreibung: "1. und 3. sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "D",
        explanation:
          "Aussage 1 ist korrekt: Der Text beschreibt C4-Photosynthese bei tropischen Gräsern wie Mais und Zuckerrohr. Aussage 2 ist falsch: Der Text sagt das Gegenteil – Pflanzen SCHLIEßEN ihre Spaltöffnungen bei Hitze. Aussage 3 ist korrekt: Der Text sagt, Sauerstoff wird als Nebenprodukt (der Wasserspaltung in der Lichtreaktion) freigesetzt.",
      },
    ],
  },

  // =========================================================================
  // 7. Bioethik in der modernen Medizin (tv8-4)
  // =========================================================================
  {
    id: "tv-a4-07",
    title: "Bioethik in der modernen Medizin",
    text: `Die Bioethik ist ein interdisziplinäres Fachgebiet, das sich mit den moralischen Fragen befasst, die durch Fortschritte in den Biowissenschaften und der Medizin aufgeworfen werden. Ihre Ursprünge als eigenständige Disziplin lassen sich auf die 1970er-Jahre zurückführen, als der amerikanische Onkologe Van Rensselaer Potter den Begriff Bioethics prägte, um die Notwendigkeit einer Brücke zwischen biologischem Wissen und menschlichen Wertvorstellungen zu betonen. Vier grundlegende Prinzipien, die von Tom Beauchamp und James Childress in ihrem Werk Principles of Biomedical Ethics formuliert wurden, bilden das Fundament der modernen biomedizinischen Ethik: das Prinzip der Autonomie, der Wohltätigkeit, des Nichtschadens und der Gerechtigkeit. Das Autonomieprinzip verlangt die Achtung der Selbstbestimmung des Patienten, was sich im Konzept der informierten Einwilligung widerspiegelt. Patienten müssen über Nutzen, Risiken und Alternativen einer Behandlung aufgeklärt werden und frei entscheiden können. Das Prinzip der Wohltätigkeit verpflichtet Ärzte, zum Wohle des Patienten zu handeln, während das Prinzip des Nichtschadens fordert, Schaden zu vermeiden oder zumindest zu minimieren. Das Gerechtigkeitsprinzip verlangt eine faire Verteilung von Gesundheitsressourcen und den gleichberechtigten Zugang zur medizinischen Versorgung. In der Praxis geraten diese Prinzipien häufig in Konflikt miteinander. Ein klassisches Dilemma entsteht, wenn ein Patient eine medizinisch notwendige Behandlung ablehnt: Die Autonomie des Patienten steht dann im Widerspruch zur ärztlichen Pflicht der Wohltätigkeit. Auch am Lebensende stellen sich komplexe ethische Fragen. Die Palliativmedizin, die auf die Linderung von Leid bei unheilbar Kranken ausgerichtet ist, unterscheidet zwischen aktiver Sterbehilfe, bei der der Tod gezielt herbeigeführt wird, und passiver Sterbehilfe, bei der lebensverlängernde Maßnahmen unterlassen werden. Die rechtliche und ethische Bewertung dieser Praktiken variiert erheblich zwischen verschiedenen Ländern und Kulturen. Neue Technologien wie die Genomedierung und die künstliche Intelligenz in der Diagnostik stellen die Bioethik vor zusätzliche Herausforderungen, da sie Fragen nach genetischer Diskriminierung, Datenschutz und der Verantwortung bei algorithmischen Fehlentscheidungen aufwerfen.`,
    fragen: [
      {
        id: "tv-a4-07-q1",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Der Begriff Bioethics wurde in den 1970er-Jahren vom Onkologen Van Rensselaer Potter geprägt.",
          },
          {
            nr: 2,
            text: "Das Autonomieprinzip gibt dem Arzt das Recht, Behandlungsentscheidungen für den Patienten zu treffen.",
          },
          {
            nr: 3,
            text: "Aktive und passive Sterbehilfe werden in allen Ländern rechtlich gleich bewertet.",
          },
          {
            nr: 4,
            text: "Genomedierung wirft neue Fragen zur genetischen Diskriminierung auf.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "1. und 4. sind richtig." },
          { key: "B", beschreibung: "1., 2. und 4. sind richtig." },
          { key: "C", beschreibung: "Nur 1. ist richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "A",
        explanation:
          "Aussage 1 ist korrekt: Der Text nennt Potter als Urheber des Begriffs in den 1970ern. Aussage 2 ist falsch: Das Autonomieprinzip verlangt die Achtung der SELBSTBESTIMMUNG des Patienten – das Gegenteil einer ärztlichen Alleinentscheidung. Aussage 3 ist falsch: Der Text sagt, die Bewertung variiert ERHEBLICH zwischen Ländern und Kulturen. Aussage 4 ist korrekt: Der Text nennt genetische Diskriminierung als eine der neuen Herausforderungen.",
      },
      {
        id: "tv-a4-07-q2",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Bei der passiven Sterbehilfe werden lebensverlängernde Maßnahmen unterlassen.",
          },
          {
            nr: 2,
            text: "Die vier Grundprinzipien der biomedizinischen Ethik stehen in der Praxis nie in Konflikt miteinander.",
          },
          {
            nr: 3,
            text: "Informierte Einwilligung bedeutet, dass Patienten über Nutzen, Risiken und Alternativen aufgeklärt werden müssen.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "1. und 3. sind richtig." },
          { key: "C", beschreibung: "Alle sind richtig." },
          { key: "D", beschreibung: "2. und 3. sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "B",
        explanation:
          "Aussage 1 ist korrekt: Der Text definiert passive Sterbehilfe als Unterlassung lebensverlängernder Maßnahmen. Aussage 2 ist falsch: Der Text sagt explizit, dass die Prinzipien 'häufig in Konflikt miteinander geraten'. Aussage 3 ist korrekt: Der Text beschreibt informierte Einwilligung genau so.",
      },
    ],
  },

  // =========================================================================
  // 8. Forensische Medizin – Wissenschaft im Dienst der Justiz (tv8-5)
  // =========================================================================
  {
    id: "tv-a4-08",
    title: "Forensische Medizin – Wissenschaft im Dienst der Justiz",
    text: `Die forensische Medizin, auch Rechtsmedizin genannt, ist ein Teilgebiet der Medizin, das sich mit der Anwendung medizinischer Kenntnisse auf rechtliche Fragestellungen befasst. Rechtsmediziner untersuchen unter anderem die Todesursache und den Todeszeitpunkt bei unklaren Todesfällen, begutachten Verletzungen im Kontext von Gewaltverbrechen und erstellen Gutachten für Gerichte. Ein zentrales Aufgabengebiet ist die Obduktion, also die systematische Öffnung und Untersuchung eines Leichnams. Dabei werden äußere und innere Befunde erhoben, Gewebeproben für histologische Untersuchungen entnommen und toxikologische Analysen durchgeführt, um mögliche Vergiftungen nachzuweisen. Die Bestimmung des Todeszeitpunkts ist eine besondere Herausforderung. Rechtsmediziner nutzen dafür verschiedene Todeszeichen, die in einem vorhersehbaren zeitlichen Ablauf auftreten. Die Totenstarre, auch Rigor mortis genannt, beginnt typischerweise zwei bis vier Stunden nach dem Tod und erreicht nach etwa sechs bis zwölf Stunden ihr Maximum, bevor sie sich nach 24 bis 48 Stunden wieder löst. Totenflecke, die durch das Absinken des Blutes in die tieferliegenden Körperpartien entstehen, werden in den ersten Stunden nach dem Tod sichtbar und sind zunächst wegdrückbar, fixieren sich jedoch nach etwa 12 bis 24 Stunden, wenn das Blut in das Gewebe diffundiert. Die Abkühlung des Körpers auf Umgebungstemperatur folgt einer mathematisch beschreibbaren Kurve, die zur Todeszeitberechnung herangezogen wird. Die forensische Genetik hat die Rechtsmedizin seit den 1980er-Jahren grundlegend verändert. Der genetische Fingerabdruck, der auf der Analyse sogenannter Short Tandem Repeats beruht, kurze sich wiederholende DNA-Sequenzen, die zwischen Individuen variieren, ermöglicht eine nahezu eindeutige Identifizierung von Personen. Mit modernen Methoden der DNA-Analyse können selbst kleinste Spuren wie einzelne Hautzellen oder Haare ausgewertet werden. Die forensische Medizin steht dabei im Spannungsfeld zwischen dem Streben nach Aufklärung und dem Schutz der Persönlichkeitsrechte, insbesondere wenn es um die DNA-Massenscreenings oder die Nutzung forensischer Datenbanken geht.`,
    fragen: [
      {
        id: "tv-a4-08-q1",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Die Totenstarre beginnt unmittelbar nach dem Tod und bleibt dauerhaft bestehen.",
          },
          {
            nr: 2,
            text: "Totenflecke sind anfänglich wegdrückbar und fixieren sich nach 12 bis 24 Stunden.",
          },
          {
            nr: 3,
            text: "Der genetische Fingerabdruck beruht auf der Analyse von Short Tandem Repeats.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Alle sind richtig." },
          { key: "B", beschreibung: "Nur 2. ist richtig." },
          { key: "C", beschreibung: "1. und 3. sind richtig." },
          { key: "D", beschreibung: "2. und 3. sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "D",
        explanation:
          "Aussage 1 ist falsch: Der Text sagt, die Totenstarre beginnt erst 2–4 Stunden nach dem Tod und löst sich nach 24–48 Stunden wieder – sie tritt also weder unmittelbar ein noch ist sie dauerhaft. Aussage 2 ist korrekt: Der Text beschreibt Totenflecke als anfänglich wegdrückbar, die sich nach 12–24 Stunden fixieren. Aussage 3 ist korrekt: Der Text nennt Short Tandem Repeats als Grundlage.",
      },
      {
        id: "tv-a4-08-q2",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Bei einer Obduktion werden ausschließlich äußere Befunde erhoben, innere Untersuchungen sind nicht üblich.",
          },
          {
            nr: 2,
            text: "DNA-Massenscreenings werfen Fragen zum Schutz der Persönlichkeitsrechte auf.",
          },
          {
            nr: 3,
            text: "Die Abkühlung des Körpers verläuft unregelmäßig und kann nicht mathematisch beschrieben werden.",
          },
          {
            nr: 4,
            text: "Moderne DNA-Analysen können selbst einzelne Hautzellen auswerten.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 2. ist richtig." },
          { key: "B", beschreibung: "2. und 4. sind richtig." },
          { key: "C", beschreibung: "1. und 3. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "B",
        explanation:
          "Aussage 1 ist falsch: Der Text sagt, es werden äußere UND innere Befunde erhoben. Aussage 2 ist korrekt: Der Text thematisiert das Spannungsfeld mit den Persönlichkeitsrechten bei DNA-Massenscreenings. Aussage 3 ist falsch: Der Text sagt, die Abkühlung folgt einer 'mathematisch beschreibbaren Kurve'. Aussage 4 ist korrekt: Der Text nennt einzelne Hautzellen oder Haare als auswertbare Spuren.",
      },
    ],
  },

  // =========================================================================
  // 9. Psychoneuroimmunologie (tv9-3)
  // =========================================================================
  {
    id: "tv-a4-09",
    title: "Psychoneuroimmunologie – Die Verbindung von Psyche und Immunsystem",
    text: `Die Psychoneuroimmunologie, kurz PNI, ist ein relativ junges Forschungsfeld, das die wechselseitigen Beziehungen zwischen psychischen Prozessen, dem Nervensystem und dem Immunsystem untersucht. Die Grundidee, dass seelische Zustände die körperliche Gesundheit beeinflussen, ist zwar seit der Antike bekannt, doch erst in den 1970er-Jahren wurde diese Verbindung wissenschaftlich untermauert. Ein bahnbrechender Versuch des Psychologen Robert Ader und des Immunologen Nicholas Cohen zeigte, dass das Immunsystem von Ratten durch klassische Konditionierung beeinflusst werden kann. Die Tiere erhielten ein Immunsuppressivum zusammen mit einer Saccharinlösung. Nach mehrmaliger Paarung dieser beiden Reize genügte allein die Saccharinlösung, um eine Unterdrückung der Immunantwort auszulösen, obwohl das Medikament nicht mehr verabreicht wurde. Dieses Experiment bewies erstmals, dass das Immunsystem nicht autonom arbeitet, sondern vom Nervensystem moduliert werden kann. Die physiologischen Verbindungen zwischen Psyche und Immunsystem verlaufen über zwei Hauptwege. Der erste ist die Hypothalamus-Hypophysen-Nebennierenrinden-Achse, kurz HPA-Achse, die bei Stress das Hormon Cortisol freisetzt. Kurzfristiger Stress kann die Immunfunktion vorübergehend steigern, doch chronischer Stress führt zu dauerhaft erhöhten Cortisolspiegeln, die die Aktivität von natürlichen Killerzellen und T-Lymphozyten unterdrücken und die Produktion entzündungsfördernder Zytokine erhöhen. Der zweite Weg ist das autonome Nervensystem, das über direkte Nervenfasern mit lymphatischen Organen wie Milz und Lymphknoten verbunden ist und die Immunzellfunktion regulieren kann. Klinische Studien haben gezeigt, dass chronischer psychischer Stress mit einer erhöhten Anfälligkeit für Infektionen, einer verlangsamten Wundheilung und einem schlechteren Ansprechen auf Impfungen verbunden ist. Umgekehrt können positive psychologische Interventionen wie Achtsamkeitsmeditation, soziale Unterstützung und kognitive Verhaltenstherapie entzündungshemmende Effekte haben und die Immunfunktion verbessern. Die PNI zeigt damit, dass eine ganzheitliche Betrachtung von Gesundheit, die psychische und soziale Faktoren einbezieht, für eine effektive medizinische Behandlung unerlässlich ist.`,
    fragen: [
      {
        id: "tv-a4-09-q1",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Kurzfristiger Stress unterdrückt die Immunfunktion ebenso wie chronischer Stress.",
          },
          {
            nr: 2,
            text: "Die PNI wurde in den 1990er-Jahren durch das Experiment von Ader und Cohen wissenschaftlich begründet.",
          },
          {
            nr: 3,
            text: "Chronischer Stress senkt die Cortisolspiegel und steigert dadurch die Aktivität von natürlichen Killerzellen.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "1. und 2. sind richtig." },
          { key: "C", beschreibung: "2. und 3. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "E",
        explanation:
          "Aussage 1 ist falsch: Der Text unterscheidet explizit – kurzfristiger Stress kann die Immunfunktion vorübergehend STEIGERN, chronischer Stress unterdrückt sie. Aussage 2 ist falsch: Der Text datiert die wissenschaftliche Untermauerung auf die 1970er-Jahre, nicht die 1990er (Temporal Confusion). Aussage 3 ist falsch: Der Text sagt, chronischer Stress ERHÖHT die Cortisolspiegel und UNTERDRÜCKT Killerzellen – genau umgekehrt (doppelte Umkehrung).",
      },
      {
        id: "tv-a4-09-q2",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Die Verbindung zwischen Psyche und Immunsystem wurde bereits in der Antike wissenschaftlich nachgewiesen.",
          },
          {
            nr: 2,
            text: "Chronischer Stress vermindert die Produktion entzündungsfördernder Zytokine und stärkt so das Immunsystem.",
          },
          {
            nr: 3,
            text: "Im Experiment von Ader und Cohen wurde gezeigt, dass allein das Immunsuppressivum – ohne die Saccharinlösung – eine konditionierte Immunreaktion auslöst.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "1. und 2. sind richtig." },
          { key: "C", beschreibung: "2. und 3. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "E",
        explanation:
          "Aussage 1 ist falsch: Der Text sagt, die Grundidee war seit der Antike bekannt, aber erst in den 1970er-Jahren WISSENSCHAFTLICH untermauert – nicht in der Antike (Hedging-Entfernung). Aussage 2 ist falsch: Der Text sagt, chronischer Stress ERHÖHT die Produktion entzündungsfördernder Zytokine – er vermindert sie nicht (Umkehrung). Aussage 3 ist falsch: Im Experiment löste allein die SACCHARINLÖSUNG (ohne das Medikament) die Immununterdrückung aus – nicht umgekehrt (Misattribution).",
      },
    ],
  },

  // =========================================================================
  // 10. Nanomedizin – Winzige Helfer für große Herausforderungen (tv9-4)
  // =========================================================================
  {
    id: "tv-a4-10",
    title: "Nanomedizin – Winzige Helfer für große Herausforderungen",
    text: `Die Nanomedizin ist ein aufstrebendes Forschungsfeld, das Nanotechnologie für medizinische Zwecke nutzt. Unter Nanotechnologie versteht man die gezielte Manipulation von Materialien auf der Nanometerskala, also im Bereich von einem bis hundert Nanometern. Ein Nanometer entspricht einem Milliardstel Meter und ist damit etwa 80.000-mal kleiner als der Durchmesser eines menschlichen Haares. In diesen Dimensionen zeigen Materialien häufig andere physikalische und chemische Eigenschaften als in größerem Maßstab, was völlig neue Anwendungsmöglichkeiten eröffnet. Ein zentraler Bereich der Nanomedizin ist das gezielte Drug Delivery, also die zielgerichtete Arzneimittelabgabe. Konventionelle Medikamente verteilen sich nach der Einnahme gleichmäßig im gesamten Körper, was zu unerwünschten Nebenwirkungen in gesunden Geweben führen kann. Nanopartikel hingegen können so konstruiert werden, dass sie Wirkstoffe direkt an den Krankheitsherd transportieren. Besonders in der Krebstherapie ist dieser Ansatz vielversprechend. Tumoren weisen aufgrund ihres schnellen Wachstums oft undichte Blutgefäße auf, ein Phänomen, das als Enhanced Permeability and Retention-Effekt, kurz EPR-Effekt, bekannt ist. Nanopartikel einer bestimmten Größe können durch diese undichten Gefäßwände in das Tumorgewebe eindringen und sich dort anreichern, während sie gesundes Gewebe weitgehend verschonen. Darüber hinaus können Nanopartikel mit Liganden funktionalisiert werden, also mit Molekülen, die spezifisch an Oberflächenrezeptoren der Krebszellen binden und so eine noch gezieltere Anreicherung ermöglichen. Ein weiteres Anwendungsgebiet sind Nanopartikel in der Diagnostik. Superparamagnetische Eisenoxid-Nanopartikel verbessern den Kontrast bei Magnetresonanztomographie-Aufnahmen und ermöglichen die Detektion kleinster Tumorherde, die mit herkömmlichen Verfahren nicht sichtbar wären. Quantenpunkte, halbleitende Nanokristalle mit größenabhängigen Fluoreszenzeigenschaften, werden in der Forschung zur Markierung und Verfolgung einzelner Moleküle in lebenden Zellen eingesetzt. Trotz des enormen Potenzials bestehen Bedenken hinsichtlich der langfristigen Toxizität von Nanopartikeln, da ihr Verhalten im menschlichen Körper noch nicht vollständig verstanden ist und die Möglichkeit einer Anreicherung in Organen wie Leber und Milz sorgfältig untersucht werden muss.`,
    fragen: [
      {
        id: "tv-a4-10-q1",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Der EPR-Effekt ermöglicht es Nanopartikeln, durch undichte Blutgefäße in Tumorgewebe einzudringen.",
          },
          {
            nr: 2,
            text: "Die langfristige Toxizität von Nanopartikeln ist bereits vollständig erforscht und als unbedenklich eingestuft.",
          },
          {
            nr: 3,
            text: "Quantenpunkte sind halbleitende Nanokristalle mit größenabhängigen Fluoreszenzeigenschaften.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Alle sind richtig." },
          { key: "B", beschreibung: "1. und 2. sind richtig." },
          { key: "C", beschreibung: "Nur 1. ist richtig." },
          { key: "D", beschreibung: "1. und 3. sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "D",
        explanation:
          "Aussage 1 ist korrekt: Der Text beschreibt den EPR-Effekt genau so. Aussage 2 ist falsch: Der Text sagt, das Verhalten im menschlichen Körper ist 'noch nicht vollständig verstanden' – die Toxizität ist gerade NICHT vollständig erforscht (Hedging-Entfernung). Aussage 3 ist korrekt: Der Text definiert Quantenpunkte genau so.",
      },
      {
        id: "tv-a4-10-q2",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Nanopartikel können mit Liganden funktionalisiert werden, die an Oberflächenrezeptoren der Krebszellen binden.",
          },
          {
            nr: 2,
            text: "Konventionelle Medikamente erreichen gezielt nur den Krankheitsherd und verursachen daher keine Nebenwirkungen.",
          },
          {
            nr: 3,
            text: "Superparamagnetische Eisenoxid-Nanopartikel verbessern den Kontrast bei MRT-Aufnahmen.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "1. und 2. sind richtig." },
          { key: "B", beschreibung: "Nur 1. ist richtig." },
          { key: "C", beschreibung: "1. und 3. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "C",
        explanation:
          "Aussage 1 ist korrekt: Der Text beschreibt die Liganden-Funktionalisierung. Aussage 2 ist falsch: Der Text sagt das Gegenteil – konventionelle Medikamente verteilen sich im GESAMTEN Körper und können Nebenwirkungen in gesunden Geweben verursachen. Aussage 3 ist korrekt: Der Text nennt diese Anwendung explizit.",
      },
    ],
  },

  // =========================================================================
  // 11. Evolutionäre Medizin – Krankheit im Licht der Evolution (tv10-1)
  // =========================================================================
  {
    id: "tv-a4-11",
    title: "Evolutionäre Medizin – Krankheit im Licht der Evolution",
    text: `Die evolutionäre Medizin, auch darwinistische Medizin genannt, betrachtet Krankheiten und medizinische Phänomene durch die Brille der Evolutionstheorie. Ihre zentrale Fragestellung lautet nicht nur, wie eine Krankheit entsteht, sondern auch, warum der menschliche Körper überhaupt für bestimmte Krankheiten anfällig ist. Ein grundlegendes Konzept ist die Mismatch-Hypothese, die besagt, dass viele moderne Zivilisationskrankheiten aus einer Diskrepanz zwischen unserer genetischen Ausstattung und unserer heutigen Lebensweise resultieren. Der menschliche Körper wurde durch Millionen Jahre der Evolution an ein Leben als Jäger und Sammler angepasst, das durch körperliche Aktivität, kalorienarme Ernährung und wechselnde Nahrungsverfügbarkeit gekennzeichnet war. In dieser Umgebung war die Fähigkeit, überschüssige Energie effizient als Fett zu speichern, ein Überlebensvorteil. In modernen Industriegesellschaften mit ständig verfügbarer, kalorienreicher Nahrung und Bewegungsmangel führt dieselbe genetische Ausstattung jedoch zu Adipositas, Typ-2-Diabetes und Herz-Kreislauf-Erkrankungen. Die evolutionäre Medizin bietet auch eine neue Perspektive auf Symptome wie Fieber und Entzündung. Traditionell wurden diese als schädliche Begleiterscheinungen einer Infektion betrachtet, die es zu unterdrücken gilt. Aus evolutionärer Sicht handelt es sich jedoch um adaptive Abwehrmechanismen. Fieber erhöht die Körpertemperatur über den Wohlfühlbereich vieler Krankheitserreger hinaus und beschleunigt gleichzeitig die Aktivität von Immunzellen. Studien an Tieren haben gezeigt, dass die Unterdrückung von Fieber bei bestimmten Infektionen die Sterblichkeit erhöhen kann. Ein weiteres Beispiel ist die Sichelzellenanämie, bei der eine Mutation im Hämoglobin-Gen die Form der roten Blutkörperchen verändert. In homozygoter Form, also wenn beide Genkopien betroffen sind, verursacht sie eine schwere Erkrankung. In heterozygoter Form bietet sie jedoch einen Schutz gegen Malaria, da sich der Malaria-Erreger Plasmodium falciparum in den verformten Blutkörperchen schlechter vermehren kann. Dieser heterozygote Vorteil erklärt, warum das Sichelzellgen in Malariagebieten trotz seiner negativen Auswirkungen in homozygoter Form nicht durch natürliche Selektion eliminiert wurde.`,
    fragen: [
      {
        id: "tv-a4-11-q1",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Die Mismatch-Hypothese erklärt moderne Zivilisationskrankheiten durch eine Diskrepanz zwischen Genetik und Lebensweise.",
          },
          {
            nr: 2,
            text: "Fieber ist aus evolutionärer Sicht ausschließlich eine schädliche Begleiterscheinung ohne Abwehrfunktion.",
          },
          {
            nr: 3,
            text: "Die Sichelzellenanämie in heterozygoter Form bietet einen Schutz gegen Malaria.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "1. und 2. sind richtig." },
          { key: "C", beschreibung: "1. und 3. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "C",
        explanation:
          "Aussage 1 ist korrekt: Der Text beschreibt die Mismatch-Hypothese genau so. Aussage 2 ist falsch: Der Text sagt das Gegenteil – aus evolutionärer Sicht handelt es sich um einen adaptiven Abwehrmechanismus. Die traditionelle Sicht, die Fieber als schädlich betrachtet, wird im Text gerade korrigiert. Aussage 3 ist korrekt: Der Text beschreibt den heterozygoten Vorteil beim Malariaschutz.",
      },
      {
        id: "tv-a4-11-q2",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Die Fähigkeit, Energie als Fett zu speichern, war bei Jägern und Sammlern ein Nachteil, der sich erst in der Moderne als Vorteil erwies.",
          },
          {
            nr: 2,
            text: "Der Malaria-Erreger Plasmodium falciparum vermehrt sich in verformten Blutkörperchen schlechter.",
          },
          {
            nr: 3,
            text: "Die Unterdrückung von Fieber kann bei bestimmten Infektionen laut Tierstudien die Sterblichkeit erhöhen.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 2. ist richtig." },
          { key: "B", beschreibung: "1. und 3. sind richtig." },
          { key: "C", beschreibung: "Alle sind richtig." },
          { key: "D", beschreibung: "2. und 3. sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "D",
        explanation:
          "Aussage 1 ist falsch: Kausale Umkehrung – der Text sagt, Fettspeicherung war bei Jägern und Sammlern ein ÜBERLEBENSVORTEIL und wurde erst in der Moderne zum Nachteil. Aussage 2 ist korrekt: Der Text nennt genau diesen Mechanismus. Aussage 3 ist korrekt: Der Text beschreibt Tierstudien mit diesem Ergebnis.",
      },
    ],
  },

  // =========================================================================
  // 12. Künstliche Organe und Bioprinting (tv10-2)
  // =========================================================================
  {
    id: "tv-a4-12",
    title: "Künstliche Organe und Bioprinting",
    text: `Die Entwicklung künstlicher Organe ist eines der ambitioniertesten Ziele der modernen Biomedizin. Angesichts des weltweiten Mangels an Spenderorganen forschen Wissenschaftler intensiv an Alternativen, die den Bedarf an menschlichen Transplantaten verringern könnten. Mechanische Organersatzsysteme existieren bereits seit Jahrzehnten. Das bekannteste Beispiel ist die Dialyse, bei der eine Maschine die Filtrationsfunktion der Nieren übernimmt und Giftstoffe sowie überschüssiges Wasser aus dem Blut entfernt. Patienten mit Nierenversagen müssen sich typischerweise dreimal wöchentlich einer mehrstündigen Dialysebehandlung unterziehen, was die Lebensqualität erheblich einschränkt. Künstliche Herzen, sogenannte Ventricular Assist Devices oder VADs, unterstützen die Pumpfunktion des Herzens und werden entweder als Überbrückung bis zu einer Transplantation oder als dauerhafte Therapie eingesetzt. Moderne VADs arbeiten mit einer kontinuierlichen Strömung statt mit einem pulsierenden Mechanismus, was bedeutet, dass Patienten mit diesen Geräten keinen tastbaren Puls mehr haben. Ein revolutionärer Ansatz ist das sogenannte Bioprinting, bei dem dreidimensionale Gewebestrukturen Schicht für Schicht aus lebenden Zellen und Biomaterialien aufgebaut werden. Der Prozess beginnt mit der Erstellung eines digitalen Modells des gewünschten Organs. Anschließend wird eine Biotinte, die aus Zellen und einem Hydrogel-Trägermaterial besteht, von einem speziellen Drucker in der gewünschten Form aufgetragen. Das Hydrogel dient als Gerüststruktur, die den Zellen Halt gibt, während sie wachsen und sich zu funktionalem Gewebe verbinden. Bisher konnten einfache Gewebestrukturen wie Hautlappen, Knorpel und Blutgefäße erfolgreich gedruckt werden. Die größte Herausforderung bei der Herstellung komplexer Organe wie Herz, Leber oder Niere ist die Vaskularisierung, also die Integration eines funktionierenden Blutgefäßnetzwerks, das die Zellen mit Sauerstoff und Nährstoffen versorgt. Ohne eine ausreichende Blutversorgung sterben Zellen, die mehr als etwa 200 Mikrometer von einem Blutgefäß entfernt liegen, ab. Forscher arbeiten an Lösungen wie dem Druck von Gefäßkanälen in das Gewebe oder der Verwendung von Wachstumsfaktoren, die die Neubildung von Blutgefäßen anregen.`,
    fragen: [
      {
        id: "tv-a4-12-q1",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Moderne VADs erzeugen einen natürlichen pulsierenden Herzschlag, der vom normalen Puls nicht zu unterscheiden ist.",
          },
          {
            nr: 2,
            text: "Durch Bioprinting konnten bisher bereits komplexe Organe wie Herz und Niere vollständig hergestellt werden.",
          },
          {
            nr: 3,
            text: "Wachstumsfaktoren werden erforscht, um die Neubildung von Blutgefäßen in gedrucktem Gewebe anzuregen.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 3. ist richtig." },
          { key: "B", beschreibung: "1. und 3. sind richtig." },
          { key: "C", beschreibung: "Alle sind richtig." },
          { key: "D", beschreibung: "2. und 3. sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "A",
        explanation:
          "Aussage 1 ist falsch: Der Text sagt, moderne VADs arbeiten mit kontinuierlicher Strömung statt mit pulsierendem Mechanismus, sodass Patienten keinen tastbaren Puls mehr haben. Aussage 2 ist falsch: Der Text sagt, bisher konnten nur einfache Strukturen wie Hautlappen, Knorpel und Blutgefäße gedruckt werden – komplexe Organe scheitern noch an der Vaskularisierung. Aussage 3 ist korrekt: Der Text nennt Wachstumsfaktoren als einen der Lösungsansätze.",
      },
      {
        id: "tv-a4-12-q2",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Dialysepatienten müssen sich laut Text typischerweise täglich einer mehrstündigen Behandlung unterziehen.",
          },
          {
            nr: 2,
            text: "VADs werden ausschließlich als Überbrückung bis zu einer Herztransplantation eingesetzt und nie als dauerhafte Therapie.",
          },
          {
            nr: 3,
            text: "Bioprinting hat bereits vollständig funktionsfähige Nieren erzeugt, die erfolgreich transplantiert wurden.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "1. und 2. sind richtig." },
          { key: "C", beschreibung: "Nur 3. ist richtig." },
          { key: "D", beschreibung: "1. und 3. sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "E",
        explanation:
          "Aussage 1 ist falsch: Der Text sagt dreimal WÖCHENTLICH, nicht täglich (Temporal Confusion). Aussage 2 ist falsch: Der Text sagt, VADs werden als Überbrückung ODER als dauerhafte Therapie eingesetzt – nicht ausschließlich als Überbrückung (Scope Error). Aussage 3 ist falsch: Der Text sagt, bisher konnten nur einfache Strukturen wie Hautlappen, Knorpel und Blutgefäße gedruckt werden – komplexe Organe sind noch nicht möglich.",
      },
    ],
  },

  // =========================================================================
  // 13. Gentherapie – Heilung an der Wurzel (tv10-3)
  // =========================================================================
  {
    id: "tv-a4-13",
    title: "Gentherapie – Heilung an der Wurzel",
    text: `Die Gentherapie ist ein medizinischer Ansatz, bei dem genetisches Material in die Zellen eines Patienten eingebracht wird, um eine Krankheit zu behandeln oder zu heilen. Im Gegensatz zu herkömmlichen Therapien, die in der Regel Symptome lindern, zielt die Gentherapie darauf ab, den zugrunde liegenden genetischen Defekt direkt zu korrigieren. Die Idee entstand in den 1970er-Jahren, doch die erste zugelassene Gentherapie am Menschen wurde erst 1990 durchgeführt, als die vierjährige Ashanti DeSilva wegen einer schweren kombinierten Immundefizienz, dem sogenannten ADA-SCID-Syndrom, behandelt wurde. Bei dieser Erkrankung fehlt das Enzym Adenosindesaminase, was zu einem nahezu vollständigen Ausfall des Immunsystems führt. Um therapeutische Gene in die Zielzellen einzuschleusen, werden in der Regel virale Vektoren eingesetzt, also genetisch veränderte Viren, die ihre natürliche Fähigkeit behalten haben, in Zellen einzudringen und genetisches Material zu übertragen, deren krankheitserregende Eigenschaften jedoch entfernt wurden. Am häufigsten werden Adeno-assoziierte Viren, kurz AAV, verwendet, die als besonders sicher gelten, da sie sich nicht in das menschliche Genom integrieren und eine breite Palette von Zelltypen infizieren können. Ein Meilenstein war die Zulassung von Luxturna im Jahr 2017, einer Gentherapie gegen eine erbliche Form der Erblindung, die durch Mutationen im RPE65-Gen verursacht wird. Luxturna liefert eine funktionsfähige Kopie dieses Gens direkt in die Netzhautzellen und kann so das Sehvermögen betroffener Patienten deutlich verbessern. Ein weiterer Durchbruch ist Zolgensma, eine Gentherapie gegen die spinale Muskelatrophie, eine schwere Erbkrankheit, die ohne Behandlung meist vor dem zweiten Lebensjahr zum Tod führt. Zolgensma verwendet einen AAV-Vektor, um das fehlende SMN1-Gen in die Motoneuronen einzuschleusen. Die Therapie wird als einmalige intravenöse Infusion verabreicht und hat in klinischen Studien beeindruckende Ergebnisse gezeigt, ist allerdings mit Kosten von über zwei Millionen US-Dollar eine der teuersten Behandlungen der Welt. Die hohen Kosten werfen Fragen der Zugangsgerechtigkeit auf und stellen Gesundheitssysteme vor erhebliche Finanzierungsprobleme.`,
    fragen: [
      {
        id: "tv-a4-13-q1",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "AAV-Vektoren integrieren sich fest in das menschliche Genom, um eine dauerhafte Wirkung sicherzustellen.",
          },
          {
            nr: 2,
            text: "Die erste Gentherapie am Menschen wurde in den 1970er-Jahren durchgeführt, kurz nachdem die Idee entstand.",
          },
          {
            nr: 3,
            text: "Luxturna behandelt die spinale Muskelatrophie, indem es das fehlende SMN1-Gen in die Motoneuronen einschleust.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "1. und 2. sind richtig." },
          { key: "C", beschreibung: "2. und 3. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "E",
        explanation:
          "Aussage 1 ist falsch: Der Text sagt, AAV gelten als sicher, WEIL sie sich NICHT in das menschliche Genom integrieren (Umkehrung). Aussage 2 ist falsch: Die Idee entstand in den 1970ern, aber die erste Gentherapie wurde erst 1990 durchgeführt (Temporal Confusion). Aussage 3 ist falsch: Luxturna behandelt eine erbliche Erblindung (RPE65-Gen in Netzhautzellen); Zolgensma behandelt die spinale Muskelatrophie mit dem SMN1-Gen (Misattribution).",
      },
      {
        id: "tv-a4-13-q2",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Luxturna behandelt eine erbliche Form der Erblindung, die durch Mutationen im RPE65-Gen verursacht wird.",
          },
          {
            nr: 2,
            text: "Die Kosten von Zolgensma werden im Text als unproblematisch dargestellt, da sie von allen Gesundheitssystemen problemlos getragen werden können.",
          },
          {
            nr: 3,
            text: "Virale Vektoren haben ihre krankheitserregenden Eigenschaften entfernt bekommen, behalten aber die Fähigkeit, in Zellen einzudringen.",
          },
          {
            nr: 4,
            text: "Die Idee der Gentherapie entstand in den 1970er-Jahren.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "1., 3. und 4. sind richtig." },
          { key: "B", beschreibung: "Alle sind richtig." },
          { key: "C", beschreibung: "Nur 1. und 3. sind richtig." },
          { key: "D", beschreibung: "1. und 2. sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "A",
        explanation:
          "Aussage 1 ist korrekt: Der Text beschreibt Luxturna genau so. Aussage 2 ist falsch: Der Text sagt das Gegenteil – die Kosten werfen Fragen der Zugangsgerechtigkeit auf und stellen Gesundheitssysteme vor erhebliche Finanzierungsprobleme. Aussage 3 ist korrekt: Der Text beschreibt virale Vektoren als genetisch veränderte Viren mit entfernten krankheitserregenden Eigenschaften. Aussage 4 ist korrekt: Der Text sagt, die Idee entstand in den 1970er-Jahren.",
      },
    ],
  },

  // =========================================================================
  // 14. Schlafmedizin – Wenn der Schlaf gestört ist (tv10-4)
  // =========================================================================
  {
    id: "tv-a4-14",
    title: "Schlafmedizin – Wenn der Schlaf gestört ist",
    text: `Schlafstörungen gehören zu den häufigsten gesundheitlichen Beschwerden in modernen Gesellschaften. Die Schlafmedizin, ein interdisziplinäres Fachgebiet, befasst sich mit der Diagnostik und Therapie der über 80 klassifizierten Schlafstörungen, die in der Internationalen Klassifikation der Schlafstörungen systematisch erfasst sind. Die häufigste Schlafstörung ist die Insomnie, die chronische Ein- oder Durchschlafstörung, die etwa zehn Prozent der Erwachsenen betrifft. Bei der Diagnostik kommt der Polysomnographie eine zentrale Rolle zu, einem Verfahren, bei dem während des Schlafs gleichzeitig die Hirnströme mittels Elektroenzephalographie, die Augenbewegungen, die Muskelspannung, die Herzfrequenz, die Atmung und der Sauerstoffgehalt im Blut aufgezeichnet werden. Diese umfassende Messung ermöglicht die Unterscheidung der verschiedenen Schlafstadien und die Identifizierung pathologischer Muster. Eine besonders verbreitete und potenziell gefährliche Schlafstörung ist die obstruktive Schlafapnoe, kurz OSA, bei der die oberen Atemwege während des Schlafs wiederholt kollabieren und den Luftstrom für Sekunden bis Minuten unterbrechen. Risikofaktoren sind Übergewicht, männliches Geschlecht, zunehmendes Alter und anatomische Besonderheiten wie ein vergrößerter Zungengrund. Die wiederholten Atemaussetzer führen zu einem Abfall der Sauerstoffsättigung im Blut und zu Weckreaktionen, die den Schlaf fragmentieren, ohne dass die Betroffenen sich am Morgen daran erinnern. Die Folge ist eine ausgeprägte Tagesmüdigkeit, die das Unfallrisiko im Straßenverkehr und am Arbeitsplatz signifikant erhöht. Langfristig steigert unbehandelte Schlafapnoe das Risiko für Bluthochdruck, Herzinfarkt, Schlaganfall und Typ-2-Diabetes. Die Standardtherapie ist die nächtliche Überdruckbeatmung mittels CPAP, bei der eine Maske über Nase oder Mund kontinuierlich einen leichten Luftdruck erzeugt, der die Atemwege offenhält. Obwohl die CPAP-Therapie hochwirksam ist, liegt die langfristige Akzeptanz bei nur etwa 50 bis 70 Prozent, da viele Patienten die Maske als unangenehm empfinden. Alternative Behandlungsoptionen umfassen Unterkieferprotrusionsschienen, die den Unterkiefer nach vorne verlagern, sowie operative Eingriffe an den oberen Atemwegen.`,
    fragen: [
      {
        id: "tv-a4-14-q1",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Insomnie betrifft laut Text etwa zehn Prozent der Erwachsenen.",
          },
          {
            nr: 2,
            text: "Betroffene der obstruktiven Schlafapnoe erinnern sich morgens deutlich an ihre nächtlichen Atemaussetzer.",
          },
          {
            nr: 3,
            text: "Weibliches Geschlecht ist einer der im Text genannten Risikofaktoren für Schlafapnoe.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Alle sind richtig." },
          { key: "B", beschreibung: "Nur 1. ist richtig." },
          { key: "C", beschreibung: "1. und 2. sind richtig." },
          { key: "D", beschreibung: "1. und 3. sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "B",
        explanation:
          "Aussage 1 ist korrekt: Der Text nennt zehn Prozent. Aussage 2 ist falsch: Der Text sagt das Gegenteil – die Betroffenen erinnern sich am Morgen NICHT an die Weckreaktionen. Aussage 3 ist falsch: Der Text nennt MÄNNLICHES Geschlecht als Risikofaktor, nicht weibliches (Verwechslung).",
      },
      {
        id: "tv-a4-14-q2",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Die CPAP-Therapie wird von allen Patienten langfristig akzeptiert, da sie hochwirksam und komfortabel ist.",
          },
          {
            nr: 2,
            text: "Insomnie betrifft laut Text etwa dreißig Prozent aller Erwachsenen in modernen Gesellschaften.",
          },
          {
            nr: 3,
            text: "Die Betroffenen der Schlafapnoe erinnern sich morgens stets an ihre nächtlichen Atemaussetzer und die daraus resultierenden Weckreaktionen.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Nur 1. ist richtig." },
          { key: "B", beschreibung: "1. und 2. sind richtig." },
          { key: "C", beschreibung: "2. und 3. sind richtig." },
          { key: "D", beschreibung: "Alle sind richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "E",
        explanation:
          "Aussage 1 ist falsch: Der Text sagt, die Akzeptanz liegt bei nur 50–70 Prozent, da viele Patienten die Maske als unangenehm empfinden (Scope Error). Aussage 2 ist falsch: Der Text nennt zehn Prozent, nicht dreißig Prozent (Zahlenverwechslung). Aussage 3 ist falsch: Der Text sagt, die Betroffenen erinnern sich am Morgen NICHT an die Weckreaktionen (Umkehrung).",
      },
    ],
  },

  // =========================================================================
  // 15. Neuroethik – Moralische Fragen der Hirnforschung (tv10-5)
  // =========================================================================
  {
    id: "tv-a4-15",
    title: "Neuroethik – Moralische Fragen der Hirnforschung",
    text: `Die Neuroethik ist ein relativ junges Fachgebiet, das sich mit den ethischen, rechtlichen und gesellschaftlichen Implikationen der Neurowissenschaften befasst. Der Begriff wurde Anfang der 2000er-Jahre geprägt und hat seither an Bedeutung gewonnen, da die technologischen Möglichkeiten zur Untersuchung und Beeinflussung des Gehirns rasant zugenommen haben. Die Neuroethik lässt sich in zwei Hauptbereiche unterteilen: die Ethik der Neurowissenschaft, die sich mit den moralischen Fragen der neurowissenschaftlichen Praxis befasst, und die Neurowissenschaft der Ethik, die untersucht, wie das Gehirn moralische Urteile bildet. Ein zentrales Thema der Neuroethik ist das sogenannte Neuroenhancement, also der Einsatz von Medikamenten oder Technologien zur Steigerung kognitiver Fähigkeiten bei gesunden Menschen. Substanzen wie Methylphenidat, das zur Behandlung von ADHS zugelassen ist, und Modafinil, ein Wachheitsförderer, werden von Studierenden und Berufstätigen zunehmend ohne medizinische Indikation eingenommen, um Konzentration und Leistungsfähigkeit zu steigern. Dies wirft Fragen der Fairness auf: Wenn einige Menschen chemisch ihre kognitive Leistung verbessern, entsteht ein Druck auf andere, ebenfalls zu solchen Mitteln zu greifen, um wettbewerbsfähig zu bleiben. Zudem sind die langfristigen Risiken einer Einnahme bei Gesunden weitgehend unbekannt. Ein weiteres Feld ist die Neuroimaging-Forschung, die mittels funktioneller Magnetresonanztomographie Einblicke in die Hirnaktivität ermöglicht. Die Frage, ob solche Daten als Beweismittel vor Gericht zugelassen werden sollten, ist umstritten. Kritiker warnen vor der Gefahr des Neuro-Reduktionismus, also der Tendenz, komplexes menschliches Verhalten ausschließlich auf Hirnprozesse zu reduzieren. Die Tiefe Hirnstimulation, bei der Elektroden in bestimmte Hirnareale implantiert werden, um neurologische Erkrankungen wie Parkinson oder schwere Depressionen zu behandeln, hat in seltenen Fällen zu Persönlichkeitsveränderungen geführt, die grundlegende Fragen nach personaler Identität aufwerfen: Wenn eine technologische Intervention die Persönlichkeit eines Menschen verändert, bleibt er dann dieselbe Person? Diese philosophische Frage hat konkrete klinische Implikationen, etwa wenn Patienten nach dem Eingriff ihre Zustimmung zur Therapie widerrufen möchten.`,
    fragen: [
      {
        id: "tv-a4-15-q1",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Neuroenhancement wirft Fairness-Probleme auf, weil ein Leistungsdruck auf andere entsteht.",
          },
          {
            nr: 2,
            text: "Die langfristigen Risiken kognitiver Enhancer bei gesunden Menschen sind vollständig erforscht und als unbedenklich eingestuft.",
          },
          {
            nr: 3,
            text: "Die Tiefe Hirnstimulation hat in allen Fällen zu Persönlichkeitsveränderungen geführt.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "Alle sind richtig." },
          { key: "B", beschreibung: "1. und 2. sind richtig." },
          { key: "C", beschreibung: "1. und 3. sind richtig." },
          { key: "D", beschreibung: "Nur 1. ist richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "D",
        explanation:
          "Aussage 1 ist korrekt: Der Text beschreibt das Fairness-Problem und den entstehenden Druck. Aussage 2 ist falsch: Der Text sagt, die Risiken sind 'weitgehend unbekannt' – das Gegenteil von vollständig erforscht (Hedging-Entfernung). Aussage 3 ist falsch: Der Text sagt 'in seltenen Fällen', nicht in allen Fällen (Scope Error).",
      },
      {
        id: "tv-a4-15-q2",
        frageText:
          "Welche der folgenden Aussagen lassen sich aus dem Inhalt dieses Textes ableiten?",
        aussagen: [
          {
            nr: 1,
            text: "Neuroimaging-Daten werden von allen Gerichten weltweit als zuverlässiges Beweismittel anerkannt.",
          },
          {
            nr: 2,
            text: "Neuro-Reduktionismus beschreibt laut den Kritikern die Tendenz, menschliches Verhalten ausschließlich auf Hirnprozesse zu reduzieren.",
          },
          {
            nr: 3,
            text: "Die Neuroethik lässt sich in die Ethik der Neurowissenschaft und die Neurowissenschaft der Ethik unterteilen.",
          },
          {
            nr: 4,
            text: "Methylphenidat ist ein Wachheitsförderer, der ursprünglich für die Behandlung von Schlafstörungen entwickelt wurde.",
          },
        ],
        kombinationen: [
          { key: "A", beschreibung: "2. und 3. sind richtig." },
          { key: "B", beschreibung: "Alle sind richtig." },
          { key: "C", beschreibung: "1. und 4. sind richtig." },
          { key: "D", beschreibung: "Nur 3. ist richtig." },
          { key: "E", beschreibung: "Keine der Aussagen ist richtig." },
        ],
        correctOptionId: "A",
        explanation:
          "Aussage 1 ist falsch: Der Text sagt, die Zulassung solcher Daten vor Gericht ist 'umstritten' – sie werden nicht von allen Gerichten anerkannt (Hedging-Entfernung). Aussage 2 ist korrekt: Der Text definiert Neuro-Reduktionismus genau so. Aussage 3 ist korrekt: Der Text nennt diese zwei Hauptbereiche. Aussage 4 ist falsch: Methylphenidat ist laut Text zur Behandlung von ADHS zugelassen; Modafinil ist der Wachheitsförderer (Misattribution).",
      },
    ],
  },
];
