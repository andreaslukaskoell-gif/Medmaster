// === SEK: Soziales Entscheiden und Emotionen erkennen ===

export const sekStrategyGuide = {
  title: "Strategie-Guide: Soziales Entscheiden (SEK)",
  sections: [
    {
      heading: "Was wird getestet?",
      content:
        "Der SEK-Teil prüft deine sozial-emotionale Kompetenz: Kannst du Emotionen in Gesichtern und Situationen erkennen? Kannst du angemessen auf emotionale Situationen reagieren? Fuer angehende Aerzt:innen ist Empathie eine Kernkompetenz.",
    },
    {
      heading: "Emotionen erkennen: Die 7 Basisemotionen",
      content: `Nach Paul Ekman gibt es 7 universelle Basisemotionen, die kulturuebergreifend an der Mimik erkennbar sind:

1. FREUDE: Laecheln, Kraehenfuesse um die Augen (echtes Laecheln = Duchenne-Laecheln), gehobene Wangen
2. TRAUER: Herabgezogene Mundwinkel, zusammengezogene Augenbrauen (innerer Teil gehoben), hängende obere Augenlider
3. ANGST: Weit aufgerissene Augen, angehobene Augenbrauen (zusammengezogen), leicht geöffneter Mund
4. WUT: Zusammengezogene/gesenkte Augenbrauen, verengte Augen, zusammengepresste Lippen oder offener Mund
5. EKEL: Gerueumpfte Nase, angehobene Oberlippe, zusammengezogene Augenbrauen
6. UEBERRASCHUNG: Hochgezogene Augenbrauen, weit geöffnete Augen, offener Mund (rund)
7. VERACHTUNG: Einseitiges Laecheln (ein Mundwinkel angehoben), asymmetrischer Gesichtsausdruck`,
    },
    {
      heading: "Strategie zum Erkennen",
      content: `1. Schau zuerst auf die AUGENPARTIE - sie verraet am meisten:
   - Brauen zusammengezogen = negative Emotion (Wut, Trauer)
   - Brauen angehoben = Überraschung oder Angst
   - Kraehenfuesse = echte Freude

2. Dann auf den MUND:
   - Laecheln = Freude oder Verachtung (asymmetrisch!)
   - Herabgezogen = Trauer
   - Zusammengepresst = Wut
   - Gerueumpfte Nase = Ekel

3. KONTEXT nutzen: Im MedAT werden auch Situationsbeschreibungen gegeben. Frage dich: Welche Emotion wäre in dieser Situation am naheliegendsten?

4. Unterscheide ähnliche Emotionen:
   - Angst vs. Überraschung: Bei Angst sind die Brauen ZUSAMMENGEZOGEN, bei Überraschung nur angehoben
   - Trauer vs. Angst: Trauer ist 'weicher' (Mundwinkel unten), Angst ist 'angespannt'`,
    },
    {
      heading: "Emotionsregulation: Angemessen reagieren",
      content: `Bei Situationsbeschreibungen musst du die angemessenste Reaktion wählen. Orientiere dich an:

1. EMPATHIE zeigen: Die Gefühle des anderen anerkennen
   - Gut: 'Ich verstehe, dass Sie sich Sorgen machen'
   - Schlecht: 'Das ist doch nicht so schlimm'

2. PROFESSIONELL bleiben: Als Arzt/Aerztin sachlich UND mitfuehlend
   - Nicht zu emotional (mitleiden), nicht zu kalt (abweisend)
   - Balance zwischen Nähe und professioneller Distanz

3. LOEESUNGSORIENTIERT handeln: Nach dem Anerkennen der Emotion einen nächsten Schritt anbieten

4. NICHT WERTEN: Keine Vorwuerfe, keine Schuldzuweisungen
   - Gut: 'Erzählen Sie mir mehr darueber'
   - Schlecht: 'Das haetten Sie früher sagen muessen'

TIPP: Im Zweifel wähle die Antwort, die am meisten Empathie zeigt, ohne dabei unprofessionell zu sein.`,
    },
  ],
};

export interface EmotionQuestion {
  id: string;
  situation: string;
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
}

export const emotionQuestions: EmotionQuestion[] = [
  // =============================================
  // EMOTIONEN ERKENNEN (8 Fragen: sek-1, sek-2, sek-6 bis sek-11)
  // =============================================
  {
    id: "sek-1",
    situation:
      "Eine Patientin, 72 Jahre, erfährt von ihrem Arzt, dass ihre Blutwerte auf eine ernsthafte Erkrankung hindeuten. Ihre Augen werden feucht, sie wendet den Blick ab und ihre Unterlippe zittert leicht.",
    question: "Welche Emotion zeigt die Patientin am deutlichsten?",
    options: [
      { id: "a", text: "Wut" },
      { id: "b", text: "Trauer / Angst" },
      { id: "c", text: "Ekel" },
      { id: "d", text: "Überraschung" },
    ],
    correctOptionId: "b",
    explanation:
      "Feuchte Augen, abgewandter Blick und zitternde Unterlippe sind typische Anzeichen fuer Trauer, gemischt mit Angst vor der Diagnose. Die Reaktion ist introvertiert (abwenden), nicht extrovertiert (wie bei Wut).",
  },
  {
    id: "sek-2",
    situation:
      "Ein Patient wartet seit 2 Stunden im Wartezimmer. Als er endlich aufgerufen wird, hat er zusammengepresste Lippen, verengte Augen und spricht mit lauter, abgehackter Stimme.",
    question: "Welche Emotion zeigt der Patient?",
    options: [
      { id: "a", text: "Freude" },
      { id: "b", text: "Trauer" },
      { id: "c", text: "Wut / Aerger" },
      { id: "d", text: "Angst" },
    ],
    correctOptionId: "c",
    explanation:
      "Zusammengepresste Lippen, verengte Augen und laute, abgehackte Stimme sind klassische Merkmale von Wut/Aerger. Die Situation (langes Warten) unterstützt diese Interpretation.",
  },
  {
    id: "sek-6",
    situation:
      "Ein junger Medizinstudent erhält seine Prüfungsergebnisse. Seine Haende zittern, die Augen sind weit aufgerissen, der Mund leicht geöffnet, und er schaut immer wieder auf das Blatt Papier.",
    question: "Welche Emotion zeigt der Student am deutlichsten?",
    options: [
      { id: "a", text: "Freude" },
      { id: "b", text: "Überraschung" },
      { id: "c", text: "Angst" },
      { id: "d", text: "Trauer" },
    ],
    correctOptionId: "b",
    explanation:
      "Weit aufgerissene Augen, geöffneter Mund und das wiederholte Hinschauen sind nach Ekman klassische Zeichen fuer Überraschung. Anders als bei Angst sind die Augenbrauen nur hochgezogen, nicht zusammengezogen. Das Zittern der Haende zeigt die Intensität der unerwarteten Nachricht.",
  },
  {
    id: "sek-7",
    situation:
      "Ein aelterer Patient betrachtet das Krankenhausessen, das man ihm gebracht hat. Er ruempft die Nase, schiebt den Teller von sich weg und seine Oberlippe ist deutlich angehoben.",
    question: "Welche Emotion zeigt der Patient am deutlichsten?",
    options: [
      { id: "a", text: "Wut" },
      { id: "b", text: "Trauer" },
      { id: "c", text: "Ekel" },
      { id: "d", text: "Angst" },
    ],
    correctOptionId: "c",
    explanation:
      "Gerueumpfte Nase und angehobene Oberlippe sind nach Ekman die Leitmerkmale fuer Ekel. Das Wegschieben des Tellers verstärkt diese Interpretation. Wut würde sich durch zusammengepresste Lippen und verengte Augen äußern, nicht durch Nasenruempfen.",
  },
  {
    id: "sek-8",
    situation:
      "Eine Krankenschwester teilt einer Patientin mit, dass ihre Familie zu Besuch kommt. Die Mundwinkel der Patientin gehen nach oben, um ihre Augen bilden sich Kraehenfuesse, und ihre Körperhaltung wird sichtbar entspannter.",
    question: "Welche Emotion zeigt die Patientin am deutlichsten?",
    options: [
      { id: "a", text: "Freude" },
      { id: "b", text: "Überraschung" },
      { id: "c", text: "Erleichterung" },
      { id: "d", text: "Verachtung" },
    ],
    correctOptionId: "a",
    explanation:
      "Die Kombination aus angehobenen Mundwinkeln und Kraehenfuessen um die Augen beschreibt das sogenannte Duchenne-Laecheln - nach Ekman der zuverlaessigste Indikator fuer echte Freude. Erleichterung würde sich eher durch Ausatmen und Schultersenken zeigen, Überraschung durch einen offenen Mund.",
  },
  {
    id: "sek-9",
    situation:
      "Ein Arzt berichtet einem Patienten, dass ein anderer Arzt seine Symptome zuvor abgetan und nicht ernst genommen hat. Der Patient hebt einen Mundwinkel asymmetrisch an und verengt leicht die Augen.",
    question: "Welche Emotion zeigt der Patient am deutlichsten?",
    options: [
      { id: "a", text: "Wut" },
      { id: "b", text: "Ekel" },
      { id: "c", text: "Verachtung" },
      { id: "d", text: "Trauer" },
    ],
    correctOptionId: "c",
    explanation:
      "Ein asymmetrisch angehobener Mundwinkel mit leichter Augenverengung ist nach Ekman das eindeutige Merkmal fuer Verachtung. Verachtung ist die einzige der sieben Basisemotionen, die sich einseitig im Gesicht zeigt. Wut würde sich symmetrisch und intensiver äußern, Ekel durch Nasenruempfen.",
  },
  {
    id: "sek-10",
    situation:
      "Ein Kind in der Notaufnahme klammert sich an seine Mutter. Die Augen sind weit aufgerissen, die Augenbrauen zusammengezogen, der Körper angespannt, und es starrt auf die Nadel in der Hand der Krankenschwester.",
    question: "Welche Emotion zeigt das Kind am deutlichsten?",
    options: [
      { id: "a", text: "Trauer" },
      { id: "b", text: "Angst" },
      { id: "c", text: "Überraschung" },
      { id: "d", text: "Ekel" },
    ],
    correctOptionId: "b",
    explanation:
      "Weit aufgerissene Augen in Kombination mit zusammengezogenen Augenbrauen sind nach Ekman das entscheidende Merkmal fuer Angst. Der Unterschied zu Überraschung liegt genau hier: Bei Angst ziehen sich die Brauen zusammen, bei Überraschung gehen sie nur nach oben. Klammern und körperliche Anspannung bestätigen die Angstreaktion.",
  },
  {
    id: "sek-11",
    situation:
      "Ein Patient hat gerade seinen Ehepartner verloren. Er sitzt still da, die Mundwinkel sind nach unten gezogen, die inneren Augenbrauen angehoben, die oberen Augenlider hängen herab, und gelegentlich seufzt er tief.",
    question: "Welche Emotion zeigt der Patient am deutlichsten?",
    options: [
      { id: "a", text: "Trauer" },
      { id: "b", text: "Angst" },
      { id: "c", text: "Erschoepfung" },
      { id: "d", text: "Resignation" },
    ],
    correctOptionId: "a",
    explanation:
      "Herabgezogene Mundwinkel, angehobene innere Augenbrauen und hängende obere Augenlider bilden nach Ekman das klassische Trauer-Muster. Erschoepfung koennte ähnlich wirken, zeigt aber keine angehobenen inneren Brauen. Resignation wäre eher durch Ausdruckslosigkeit gekennzeichnet. Der situative Kontext - Verlust des Ehepartners - bestätigt eindeutig Trauer.",
  },

  // =============================================
  // EMOTIONSREGULATION / ANGEMESSEN REAGIEREN (8 Fragen: sek-3 bis sek-5, sek-12 bis sek-16)
  // =============================================
  {
    id: "sek-3",
    situation:
      "Du bist Assistenzarzt/-aerztin. Eine Patientin bricht in Traenen aus, nachdem du ihr mitgeteilt hast, dass die Operation verschoben werden muss.",
    question: "Welche Reaktion ist am angemessensten?",
    options: [
      { id: "a", text: "Schnell das Thema wechseln, um sie abzulenken." },
      {
        id: "b",
        text: "Sagen: 'Ich verstehe, dass Sie enttäuscht sind. Moechten Sie darüber sprechen, was Ihnen Sorgen macht?'",
      },
      {
        id: "c",
        text: "Sagen: 'Weinen hilft jetzt auch nicht weiter, wir finden schon einen neuen Termin.'",
      },
      {
        id: "d",
        text: "Selbst anfangen zu weinen, um Mitgefühl zu zeigen.",
      },
    ],
    correctOptionId: "b",
    explanation:
      "Option B zeigt Empathie (Gefühle anerkennen), bleibt professionell und bietet Raum fuer ein Gespraech. Option A ignoriert die Emotion, Option C wertet ab, Option D wäre unprofessionell.",
  },
  {
    id: "sek-4",
    situation:
      "Ein Kollege im Krankenhaus hat einen schweren Fehler bei der Medikamentendosierung gemacht, der glücklicherweise rechtzeitig bemerkt wurde. Er sitzt allein im Aufenthaltsraum, starrt auf den Boden und sein Gesicht ist blass.",
    question: "Welche Reaktion ist am angemessensten?",
    options: [
      {
        id: "a",
        text: "Ihn ignorieren - er braucht wahrscheinlich Zeit fuer sich.",
      },
      {
        id: "b",
        text: "Ihm sagen, dass solche Fehler inakzeptabel sind und er vorsichtiger sein muss.",
      },
      {
        id: "c",
        text: "Sich zu ihm setzen und fragen: 'Wie geht es dir? Moechtest du darüber reden?'",
      },
      {
        id: "d",
        text: "Sofort den Vorgesetzten informieren, damit disziplinarische Maßnahmen eingeleitet werden.",
      },
    ],
    correctOptionId: "c",
    explanation:
      "Option C zeigt kollegiale Empathie. Der Kollege zeigt Anzeichen von Schock/Schuld (blass, starre Haltung). Zunächst sollte die emotionale Unterstützung stehen. Fehleraufarbeitung ist wichtig, aber der Fehler wurde bereits bemerkt.",
  },
  {
    id: "sek-5",
    situation:
      "Die Mutter eines 5-jährigen Kindes in der Notaufnahme schreit dich an: 'Warum dauert das so lange?! Meinem Kind geht es schlecht und niemand kuemmert sich!'",
    question: "Welche Reaktion ist am angemessensten?",
    options: [
      {
        id: "a",
        text: "Zurückschreien: 'Hier sind auch andere Patienten, Sie muessen warten wie alle anderen!'",
      },
      {
        id: "b",
        text: "Ruhig sagen: 'Ich verstehe Ihre Sorge um Ihr Kind. Lassen Sie mich kurz den aktuellen Stand fuer Sie prüfen.'",
      },
      {
        id: "c",
        text: "Sie bitten, leiser zu sein, da sie andere Patienten stört.",
      },
      {
        id: "d",
        text: "Ohne ein Wort weggehen und den Sicherheitsdienst rufen.",
      },
    ],
    correctOptionId: "b",
    explanation:
      "Option B deeskaliert die Situation: Die Sorge (nicht die Wut) wird anerkannt, und ein konkreter nächster Schritt wird angeboten. Hinter der Wut der Mutter steht Angst um ihr Kind - diese Angst gilt es anzusprechen.",
  },
  {
    id: "sek-12",
    situation:
      "Du bist ein junger Arzt/eine junge Aerztin. Ein erfahrener Kollege kritisiert deinen Behandlungsplan vor dem gesamten Team während der Visite. Alle schauen dich an.",
    question: "Welche Reaktion ist am angemessensten?",
    options: [
      {
        id: "a",
        text: "Den Kollegen ebenfalls vor dem Team kritisieren, um dein Gesicht zu wahren.",
      },
      {
        id: "b",
        text: "Sagen: 'Danke fuer den Hinweis. Können wir das nach der Visite besprechen, damit ich Ihre Perspektive besser verstehe?'",
      },
      {
        id: "c",
        text: "Schweigen und die Kritik hinnehmen, ohne darauf einzugehen.",
      },
      {
        id: "d",
        text: "Sagen: 'Ich bin der behandelnde Arzt und stehe zu meinem Plan.'",
      },
    ],
    correctOptionId: "b",
    explanation:
      "Option B ist professionell und nicht defensiv: Sie zeigt Wertschätzung fuer den Hinweis, verlagert die Diskussion in einen geeigneteren Rahmen und signalisiert Lernbereitschaft. Gegenkritik (A) eskaliert, Schweigen (C) laesst die Sache ungeklaert, und stures Beharren (D) wirkt unkollegial und lernresistent.",
  },
  {
    id: "sek-13",
    situation:
      "Ein unheilbar kranker Patient fragt dich direkt: 'Werde ich sterben?' Er schaut dir dabei fest in die Augen und wartet auf eine ehrliche Antwort.",
    question: "Welche Reaktion ist am angemessensten?",
    options: [
      {
        id: "a",
        text: "Sagen: 'Machen Sie sich keine Sorgen, die Medizin macht große Fortschritte.'",
      },
      {
        id: "b",
        text: "Sagen: 'Ich verstehe, dass Sie sich Sorgen machen. Lassen Sie uns offen über Ihren Zustand und die Behandlungsmöglichkeiten sprechen.'",
      },
      {
        id: "c",
        text: "Das Thema wechseln und über die nächste Therapiesitzung sprechen.",
      },
      {
        id: "d",
        text: "Direkt sagen: 'Ja, Ihre Erkrankung ist leider toedlich.'",
      },
    ],
    correctOptionId: "b",
    explanation:
      "Option B ist ehrlich und mitfuehlend zugleich: Sie erkennt die Sorgen des Patienten an und öffnet den Raum fuer ein offenes Gespraech, ohne falsche Hoffnungen zu machen oder brutal direkt zu sein. Option A beschoenigt die Situation und entmündigt den Patienten. Option C weicht aus. Option D ist zwar ehrlich, aber ohne jede Empathie und kann den Patienten ueberwaeltigen.",
  },
  {
    id: "sek-14",
    situation:
      "Ein Patient lehnt eine medizinisch notwendige Bluttransfusion aus religiösen Gründen ab. Ohne die Transfusion besteht ein erhöhtes gesundheitliches Risiko.",
    question: "Welche Reaktion ist am angemessensten?",
    options: [
      {
        id: "a",
        text: "Die Transfusion trotzdem anordnen, da die medizinische Notwendigkeit ueberwiegt.",
      },
      {
        id: "b",
        text: "Sagen: 'Ich respektiere Ihre Überzeugung. Lassen Sie mich Ihnen die medizinischen Risiken erklaeren und gemeinsam nach Alternativen suchen.'",
      },
      {
        id: "c",
        text: "Sagen: 'Das ist Ihre Entscheidung' und den Patienten ohne weitere Erklaerung unterschreiben lassen.",
      },
      {
        id: "d",
        text: "Versuchen, den Patienten von der Unsinnigkeit seiner religiösen Überzeugung zu ueberzeugen.",
      },
    ],
    correctOptionId: "b",
    explanation:
      "Option B respektiert die Patientenautonomie, erfüllt die aerztliche Aufklaerungspflicht und sucht proaktiv nach Alternativen. Dies vereint Empathie mit Professionalität. Option A verletzt die Patientenautonomie, Option C vernachlaessigt die Aufklaerungspflicht, und Option D ist respektlos gegenüber den Wertvorstellungen des Patienten.",
  },
  {
    id: "sek-15",
    situation:
      "Ein Kollege kommt zur Frühschicht und riecht deutlich nach Alkohol. Er soll gleich Patienten behandeln. Ihr seid allein im Umkleideraum.",
    question: "Welche Reaktion ist am angemessensten?",
    options: [
      {
        id: "a",
        text: "Nichts sagen - es ist nicht deine Angelegenheit und du willst keinen Aerger.",
      },
      {
        id: "b",
        text: "Sagen: 'Ich mache mir Sorgen um dich. Ich habe bemerkt, dass du nach Alkohol riechst. Kann ich dir irgendwie helfen? Fuer die Patientensicherheit muessen wir das ansprechen.'",
      },
      {
        id: "c",
        text: "Sofort zum Chefarzt gehen und den Kollegen melden, ohne vorher mit ihm zu reden.",
      },
      {
        id: "d",
        text: "Sagen: 'Du hast offensichtlich ein Alkoholproblem. So kannst du nicht arbeiten.'",
      },
    ],
    correctOptionId: "b",
    explanation:
      "Option B vereint Fuersorge mit Verantwortungsbewusstsein: Sie zeigt Empathie fuer den Kollegen, benennt das Problem klar und stellt die Patientensicherheit in den Vordergrund. Wegsehen (A) gefährdet Patienten. Direktes Melden ohne Gespraech (C) ist zwar fuer die Patientensicherheit richtig, vernachlaessigt aber die kollegiale Ebene. Eine anklagende Aussage (D) ist konfrontativ und nicht hilfreich.",
  },
  {
    id: "sek-16",
    situation:
      "Die Eltern eines kranken Kindes sind sich uneinig über die Behandlung. Die Mutter moechte eine Operation, der Vater lehnt diese ab. Beide diskutieren hitzig vor dir im Behandlungszimmer.",
    question: "Welche Reaktion ist am angemessensten?",
    options: [
      {
        id: "a",
        text: "Einer Seite zustimmen, um die Diskussion zu beenden.",
      },
      {
        id: "b",
        text: "Sagen: 'Ich verstehe, dass Sie beide das Beste fuer Ihr Kind wollen. Lassen Sie uns gemeinsam alle Optionen durchgehen, damit Sie eine informierte Entscheidung treffen können.'",
      },
      {
        id: "c",
        text: "Die Eltern bitten, den Streit draußen zu klaeren und dann wiederzukommen.",
      },
      {
        id: "d",
        text: "Sagen: 'Als Arzt empfehle ich die Operation, und Sie sollten meinem Rat folgen.'",
      },
    ],
    correctOptionId: "b",
    explanation:
      "Option B bleibt neutral und erkennt die Sorge beider Elternteile an. Statt Partei zu ergreifen, wird eine gemeinsame informierte Entscheidungsfindung angeboten. Dies fördert die Kooperation und respektiert die elterliche Autonomie. Partei ergreifen (A) oder autoritaer auftreten (D) koennte den Konflikt verschärfen. Die Eltern wegzuschicken (C) entwertet ihre Sorgen und verzoegert die Behandlung.",
  },
];
