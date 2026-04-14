/**
 * KFF Lernhilfen — recherchierte Strategien pro Subtest, in Tiefe.
 * Quellen: medat-vorbereitung.at, mission-medat.at, get-to-med.com,
 *          medithappen.at, studymed.at, medgurus.de (April 2026).
 */

export type KFFLearningAid = {
  color: string;
  /** Kurz-Untertitel: was misst dieser Test? */
  shortDescription: string;
  /** Format-Daten in Schlagworten */
  meta: { tasks: string; time: string; points: string; secondsPerTask: string };
  /** Konkrete MedAT-Beispielaufgabe */
  example: { situation: string; question: string; options: string[] };
  /** Lösung des Beispiels mit Begründung */
  solution: { answer: string; reasoning: string };
  /** Eine zentrale Regel — Pull-Quote */
  rule: string;
  /** 4–6 Schritte zum Lösen einer Aufgabe */
  steps: string[];
  /** Cheat-Sheet — Tabellen-artige Referenz */
  framework: { title: string; items: { label: string; text: string }[] };
  /** Typische Denkfehler / Fallen */
  pitfalls: string[];
  /** Tipps zur längerfristigen Vorbereitung (Wochen vor dem Test) */
  prepTips: string[];
};

export const KFF_LEARNING_AIDS: Record<
  "zahlenfolgen" | "gedaechtnis" | "implikationen" | "wortfluessigkeit" | "figuren",
  KFFLearningAid
> = {
  zahlenfolgen: {
    color: "#3b82f6",
    shortDescription:
      "Logisches Mustererkennen mit Zahlen — du erkennst die Regel hinter einer Folge und ergänzt die fehlenden Glieder.",
    meta: {
      tasks: "10 Aufgaben",
      time: "15 Minuten",
      points: "10 Punkte (1 pro Aufgabe)",
      secondsPerTask: "~90 Sekunden",
    },
    example: {
      situation: "Welche zwei Zahlen setzen die Folge fort?  3 · 6 · 12 · 24 · ? · ?",
      question: "Welche Option ist richtig?",
      options: [
        "A) 36 · 48",
        "B) 48 · 96",
        "C) 48 · 72",
        "D) 42 · 60",
        "E) 40 · 80",
      ],
    },
    solution: {
      answer: "B) 48 · 96",
      reasoning:
        "Differenzen prüfen: 3, 6, 12 (wachsende Differenzen → keine Addition). Faktoren prüfen: 6/3 = 2, 12/6 = 2, 24/12 = 2 → konstanter Faktor ×2. Folge: 24 × 2 = 48, 48 × 2 = 96.",
    },
    rule: "Jede Folge hat genau eine Regel — notiere die Operatoren über/unter die Zahlen, dann fällt sie auf.",
    steps: [
      "Schritt 1 — Erstes Lesen: Schau dir die Folge in Ruhe an. Wachsen die Zahlen schnell (Multiplikation wahrscheinlich) oder langsam (Addition wahrscheinlich)? Werden sie kleiner (Subtraktion / Division)?",
      "Schritt 2 — Differenzen über die Folge schreiben: Notiere die Differenzen zwischen jedem Paar. Sind alle gleich → arithmetische Folge, fertig. Wachsen sie regelmäßig → zur 2. Differenz oder zur Multiplikation übergehen.",
      "Schritt 3 — Faktoren testen: Teile benachbarte Zahlen. Konstanter Quotient → geometrische Folge. Notation: ×2 unter die Pfeile.",
      "Schritt 4 — Spezialmuster prüfen: Fibonacci (jede Zahl = Summe der zwei vorherigen)? Verschachtelt (jede zweite Zahl eigene Regel)? Zyklisch (+2, ×2, +2, ×2 …)?",
      "Schritt 5 — Lösung gegenrechnen: Wende die gefundene Regel auf die letzte bekannte Zahl an, leite die Lücken her und vergleiche mit den Optionen. Bei Mismatch: Regel ist falsch, neu anfangen.",
      "Schritt 6 — Zeitlimit: Nach 90 Sekunden ohne Lösung überspringen. Am Ende mit frischem Blick zurückkehren.",
    ],
    framework: {
      title: "Prüfreihenfolge der häufigsten Mustertypen",
      items: [
        {
          label: "Arithmetisch",
          text: "konstante Differenz: 2, 5, 8, 11, 14 → +3 in jedem Schritt",
        },
        {
          label: "Geometrisch",
          text: "konstanter Faktor: 3, 6, 12, 24, 48 → ×2 in jedem Schritt",
        },
        {
          label: "Fibonacci",
          text: "a(n) = a(n−1) + a(n−2): 1, 1, 2, 3, 5, 8, 13, 21",
        },
        {
          label: "Zyklisch",
          text: "abwechselnde Operatoren: 2 → +3 → 5 → ×2 → 10 → +3 → 13 → ×2 …",
        },
        {
          label: "Verschachtelt",
          text: "zwei Folgen abwechselnd: 1, 10, 2, 20, 3, 30 — jede für sich arithmetisch",
        },
        {
          label: "2. Differenz",
          text: "Differenzen wachsen regelmäßig: 1, 2, 4, 7, 11 → Differenzen +1, +2, +3, +4",
        },
        {
          label: "Quadratzahlen",
          text: "1, 4, 9, 16, 25 → n² oder verwandte Bildungen",
        },
        {
          label: "Mehrere Operationen",
          text: "+1, dann ×2: 2, 3, 6, 7, 14, 15, 30 — Wechselrhythmus",
        },
      ],
    },
    pitfalls: [
      "Überkomplexe Regel suchen, wenn +/- oder ×/÷ schon reicht — immer zuerst die einfachen Muster testen.",
      "Differenzen nur im Kopf berechnen — notiere sie immer über die Zahlen, sonst übersiehst du das Muster.",
      "Bei einer Aufgabe kleben bleiben — nach 60–90 Sekunden überspringen und am Ende zurückkehren.",
      "Kopfrechen-Fehler: gerade bei Multiplikation schnell verrechnet. Zweite Differenz nachrechnen, wenn das Ergebnis seltsam wirkt.",
      "Negativen Zahlen oder Brüche übersehen — manche Folgen wechseln das Vorzeichen oder gehen ins Negative.",
      "Nicht alle Optionen prüfen — manchmal weist Option E (kein Wert passt) auf einen Fehler in deiner Regel hin.",
    ],
    prepTips: [
      "Tägliches Kopfrechen-Training: Multiplikation 1×1 bis 20×20 fehlerfrei und schnell.",
      "Übungs-Apps wie Lumosity oder NeuroNation für allgemeine Mustererkennung 10 Min/Tag.",
      "Pool von 100+ MedAT-typischen Folgen einmal langsam (5 Min/Aufgabe) durchgehen, dabei bewusst die Mustertypen identifizieren.",
      "Dann Geschwindigkeit hochfahren: Pool unter Zeitdruck (90 Sek) lösen, bis du in 60 Sek auf 80% kommst.",
      "Schwächste Mustertypen markieren und gezielt mit 30 Aufgaben pro Typ trainieren.",
    ],
  },

  gedaechtnis: {
    color: "#10b981",
    shortDescription:
      "Du prägst dir 8 Allergieausweise mit komplexen Daten ein und beantwortest 25 Fragen dazu — der Subtest mit dem höchsten Punktepotenzial.",
    meta: {
      tasks: "25 Fragen (8 Ausweise vorlernen)",
      time: "8 Min lernen + 15 Min Fragen",
      points: "25 Punkte (1 pro Frage)",
      secondsPerTask: "~36 Sek/Frage",
    },
    example: {
      situation:
        "Lernphase (8 Min): Du siehst 8 Allergieausweise mit je Name, Geburtsdatum, Foto, Blutgruppe, Allergien, Ausweisnummer, Ausstellungsland und Medikation.",
      question: "Typische Abfragen in der Prüfphase (15 Min, 25 Fragen):",
      options: [
        "Welche Blutgruppe hat der Ausweis mit der Nummer 21043?",
        "In welchem Land wurde der Ausweis von Frau Meyer ausgestellt?",
        "Welches Medikament nimmt die Person, die gegen Erdnüsse allergisch ist?",
        "Wie viele Ausweise tragen ein Geburtsdatum im Mai?",
      ],
    },
    solution: {
      answer: "Es gibt keine Einzellösung — die Methode ist die Lösung.",
      reasoning:
        "Niemand merkt sich 8 × 8 = 64 Einzeldaten in 8 Minuten linear. Wer hier Punkte holt, nutzt einen Gedächtnispalast: 8 vertraute Stationen (Bett → Bad → Tür → …), an jeder Station eine absurde Szene mit allen Daten des Ausweises, verknüpft über Bilder und das Major-System. Das Verfahren muss vorher trainiert sein.",
    },
    rule: "Einzeldaten sind unmöglich zu merken — du brauchst pro Ausweis eine einzige lebendige Szene.",
    steps: [
      "Schritt 1 — Palast vorher bauen: Wähle eine vertraute Route mit 8 klaren Stationen (z. B. Bett → Bad → Haustür → Bushaltestelle → Bus → Schule → Klasse → Tafel). Jede Station gehört ab jetzt einem Ausweis — immer in dieser Reihenfolge.",
      "Schritt 2 — Daten vorabkodieren: Lege ein Schema fest, in welcher Reihenfolge du Name → Geburtstag → Allergie → Blutgruppe → Nummer → Land → Medikament → Foto verarbeitest. Diszipliniertes Vorgehen spart 50% Zeit.",
      "Schritt 3 — Eine Szene pro Ausweis (60 Sek): Verwandle den Ausweis in EIN absurdes Bild. Name → Tier oder Objekt (HSKEL → Husky), Allergie → Gegenstand (Erdnuss-Schüssel), Geburtsdatum & Nummer → Major-System-Wort, Land → Klischee (Eiffelturm = Frankreich).",
      "Schritt 4 — Aktiv platzieren: Stelle dir die Szene lebhaft, bunt und emotional an der jeweiligen Station vor. Je absurder, desto besser. Z. B. Husky liegt auf deinem Bett, frisst Erdnüsse mit einer Note in der Pfote.",
      "Schritt 5 — Vor der Abfragephase: Zwischen Lernen und Fragen liegen 2 andere Subtests. Gehe die Route während dieser Zeit mental mindestens 2× durch — bei jeder Station die Szene erneut visualisieren. Stabilisiert die Erinnerung.",
      "Schritt 6 — Bei der Frage: Springe direkt zur Station, an der die fragliche Person liegt. Lies die Szene ab, statt linear zu suchen.",
    ],
    framework: {
      title: "Major-System — Ziffern werden zu Lauten, Lautpaare zu Wörtern",
      items: [
        { label: "0 → S / Z", text: "Beispiel-Wörter: Eis, Zaun" },
        { label: "1 → T / D", text: "Beispiel-Wörter: Tee, Dach" },
        { label: "2 → N", text: "Beispiel-Wort: Nuss" },
        { label: "3 → M", text: "Beispiel-Wort: Mehl" },
        { label: "4 → R", text: "Beispiel-Wort: Rad" },
        { label: "5 → L", text: "Beispiel-Wort: Lava" },
        { label: "6 → CH / SCH / J", text: "Beispiel-Wort: Schuh" },
        { label: "7 → K / G", text: "Beispiel-Wort: Kuh" },
        { label: "8 → F / W / V", text: "Beispiel-Wort: Fee" },
        { label: "9 → P / B", text: "Beispiel-Wort: Biene" },
        {
          label: "Anwendung",
          text: "Ausweisnr. 21 → N-T → Note · 43 → R-M → Rahm · 21043 → Note + Rahm + Eis",
        },
        {
          label: "Geburtstag",
          text: "20.12. → 20 = N-S = Nase · 12 = T-N = Tonne — Person mit Nase in einer Tonne",
        },
      ],
    },
    pitfalls: [
      "Erst in der Prüfung den Palast bauen — das Training muss Wochen vorher laufen, sonst scheitert alles.",
      "Zu abstrakte oder langweilige Bilder — je absurder, bunter, emotionaler, desto fester sitzt die Erinnerung.",
      "Alles linear merken wollen (Name, dann Geburtstag, dann Allergie …) — das Gehirn speichert Szenen, keine Listen.",
      "Den Gedächtnispalast nur einmal benutzen — zwischen Lern- und Abfragephase kommen Ablenkungen, mental wiederholen!",
      "Ähnliche Stationen wählen (alle in der Küche) — verwechselbar. Wähle 8 deutlich verschiedene Räume.",
      "Beim Abrufen zweifeln — Schnellentscheidung. Erste Intuition aus dem Bild ist meistens korrekt.",
    ],
    prepTips: [
      "Mindestens 4 Wochen vor dem Test starten — Loci-Methode braucht Drill.",
      "Zwei Routen aufbauen: 8 Stationen in der eigenen Wohnung + 8 Stationen am Schulweg. Im Test die zuverlässigere wählen.",
      "Major-System auswendig lernen — täglich 5 Min Karteikarten Ziffern → Laute, bis es automatisch sitzt.",
      "Mit Beispiel-Ausweisen (online verfügbar) trainieren: erst 4 Ausweise / 8 Min, dann auf 8 / 8 Min steigern.",
      "Nach jeder Übung Selbsttest mit 10–20 Fragen — was wurde verwechselt? Stationen isolieren und neu codieren.",
    ],
  },

  implikationen: {
    color: "#8b5cf6",
    shortDescription:
      "Du erkennst, welche Schlussfolgerung aus zwei Prämissen zwingend folgt — formale Logik, nicht Alltagsverstand.",
    meta: {
      tasks: "10 Aufgaben",
      time: "10 Minuten",
      points: "10 Punkte (1 pro Aufgabe)",
      secondsPerTask: "~60 Sekunden",
    },
    example: {
      situation:
        "Prämisse 1: Alle Radiologen sind Ärzte. · Prämisse 2: Einige Ärzte sind Kinder.",
      question: "Welche Schlussfolgerung ist zwingend?",
      options: [
        "A) Einige Kinder sind Radiologen",
        "B) Einige Radiologen sind keine Kinder",
        "C) Alle Kinder sind Ärzte",
        "D) Einige Ärzte sind Radiologen",
        "E) Keine der Schlussfolgerungen ist zwingend",
      ],
    },
    solution: {
      answer: "D) Einige Ärzte sind Radiologen",
      reasoning:
        "Aus Alle Radiologen sind Aerzte folgt direkt: jeder Radiologe gehört zu den Ärzten — also gibt es Ärzte, die Radiologen sind. Option A ist nicht zwingend (Ärzte-Kinder müssen keine Radiologen sein). B ist nicht zwingend (Radiologen könnten alle Kinder sein). C ist nicht zwingend (manche Kinder sind Ärzte, der Rest nicht).",
    },
    rule: "Nur was explizit in den Prämissen steht, zählt. Dein Alltagswissen ist hier verboten.",
    steps: [
      "Schritt 1 — Begriffe kürzen: Schreibe die Prämissen mit Buchstaben um. Aus Alle Radiologen sind Ärzte wird Alle R sind Ä. Macht das Denken neutral und schnell.",
      "Schritt 2 — Kreise zeichnen: Jede Prämisse als Euler-Diagramm. Alle A sind B = A-Kreis innerhalb B-Kreis. Einige A sind B = überlappend mit mindestens 1 Element. Keine A sind B = getrennt. Einige A sind nicht B = mindestens 1 A liegt außerhalb B.",
      "Schritt 3 — Kombinieren: Lege die Kreise aller Prämissen in einem Diagramm übereinander. Markiere sicher belegte Bereiche (✓), nur mögliche Bereiche (?).",
      "Schritt 4 — Mehrere Anordnungen testen: Kann die Lage der Kreise variieren, ohne die Prämissen zu verletzen? Dann mehrere Diagramme zeichnen — die Schlussfolgerung muss in allen gelten.",
      "Schritt 5 — Optionen gegenprüfen: Teste jede Antwort gegen dein Diagramm. Muss sie unter jeder gültigen Anordnung wahr sein? Nur dann ist sie zwingend. Sonst → falsch.",
      "Schritt 6 — Bei Patt: Wenn keine Option zwingend ist, ist Antwort E richtig (Keine der Schlussfolgerungen).",
    ],
    framework: {
      title: "Quantoren-Regeln — was folgt, was nicht?",
      items: [
        {
          label: "Alle A sind B",
          text: "A-Kreis liegt in B-Kreis. ACHTUNG: Umkehrung (Alle B sind A) gilt NICHT.",
        },
        {
          label: "Einige A sind B",
          text: "Überschneidung mit mindestens 1 Element. Umkehrbar: Einige B sind A gilt auch.",
        },
        {
          label: "Einige A sind nicht B",
          text: "Mindestens 1 A liegt außerhalb B. ⚠ Umkehrung NICHT erlaubt.",
        },
        {
          label: "Keine A sind B",
          text: "Kreise getrennt. Umkehrbar: Keine B sind A gilt auch.",
        },
        {
          label: "Einige",
          text: "bedeutet mindestens 1 (evtl. auch alle) — NICHT manche aber nicht alle.",
        },
        {
          label: "Kette",
          text: "Alle A sind B + Alle B sind C ergibt zwingend: Alle A sind C.",
        },
        {
          label: "Kette teilweise",
          text: "Alle A sind B + Einige B sind C ergibt NICHT zwingend: Einige A sind C.",
        },
        {
          label: "Negation",
          text: "Alle A sind B + Keine B sind C ergibt zwingend: Keine A sind C.",
        },
      ],
    },
    pitfalls: [
      "Alltagswissen einfließen lassen — Alle Autos sind Fische gilt logisch, wenn so gegeben. Kontra-Intuition aushalten.",
      "Umkehrschluss ziehen — aus Alle Ärzte trinken Kaffee folgt NICHT, dass alle Kaffeetrinker Ärzte sind.",
      "Einige als manche aber nicht alle lesen — logisch bedeutet es: mindestens einer, evtl. auch alle.",
      "Nur ein Diagramm zeichnen — wenn mehrere Anordnungen möglich sind, müssen alle getestet werden.",
      "Zwingend vs. möglich verwechseln — eine Aussage, die nur stimmen könnte, ist keine gültige Schlussfolgerung.",
      "Voreilig auf E klicken — erst alle Optionen ausschließen, bevor du E wählst.",
    ],
    prepTips: [
      "5 Übungsaufgaben am Tag, immer mit Kreisdiagramm — Routine wichtiger als Quantität.",
      "Klassische Syllogismen-Tabellen (Barbara, Celarent, Darii, Ferio …) als Übersicht durchgehen — Verständnis wächst.",
      "Mit Lerngruppe oder Tutor: laut die Schlussfolgerung erklären — wer's erklären kann, hat's verstanden.",
      "Aufgaben aus offiziellen MedAT-Skripten und Übungsbüchern (SEK-TV-Breaker, MEDithappen) priorisieren — Stil ist nah am Original.",
      "Wer 8/10 Punkte stabil schafft, ist gut vorbereitet — mehr ist Bonus.",
    ],
  },

  wortfluessigkeit: {
    color: "#f59e0b",
    shortDescription:
      "Aus 6–10 vertauschten Buchstaben bildest du ein deutsches Nomen und gibst seinen Anfangsbuchstaben an.",
    meta: {
      tasks: "15 Aufgaben",
      time: "15 Minuten",
      points: "15 Punkte (1 pro Aufgabe)",
      secondsPerTask: "~60 Sekunden",
    },
    example: {
      situation:
        "Buchstaben (in beliebiger Reihenfolge): G · I · R · T · A · R · E",
      question: "Mit welchem Buchstaben beginnt das Lösungswort?",
      options: [
        "A) G",
        "B) T",
        "C) R",
        "D) A",
        "E) Kein sinnvolles Wort möglich",
      ],
    },
    solution: {
      answer: "A) G",
      reasoning:
        "7 Buchstaben — kein typisches Suffix. Doppelkonsonant RR springt ins Auge. Vorsilbe? Eher nicht. Probiere Anfangsbuchstaben: GITARRE passt, alle Buchstaben verbraucht. → A.",
    },
    rule: "Die Lösung ist immer ein deutsches Nomen im Singular — genau eine pro Aufgabe, ohne Umlaute.",
    steps: [
      "Schritt 1 — 15 Sekunden intuitiv: Schau die Buchstaben an, ohne zu schreiben. Erkennst du das Wort sofort? Dann fertig — nächste Aufgabe.",
      "Schritt 2 — Endungen scannen: Gibt es eine typische Nomen-Endung in den Buchstaben? -UNG, -HEIT, -KEIT, -NIS, -TUM, -SCHAFT, -ION, -LEIN, -CHEN. Findest du eine? Schreibe sie rechts hin und baue rückwärts.",
      "Schritt 3 — Blöcke bilden: Doppellaute (EI, EU, AU, IE) und Cluster (CH, SCH, ST, PH, PF, SP) bleiben zusammen. Vorsilben (AB, AUF, BE, GE, UN, ZU, VOR, VER, ENT, ER) ans Anfang setzen.",
      "Schritt 4 — Wolken-Methode: Ordne die Buchstaben räumlich — links potenzielle Anfangsbuchstaben, Mitte Doppellaute, rechts Endungen. Gehirn erkennt Muster besser als in linearer Reihe.",
      "Schritt 5 — Startbuchstaben testen: Probiere jeden der 4 Options-Startbuchstaben als erstes Zeichen. Welcher führt zu einem deutschen Alltags-Nomen, das alle Buchstaben verbraucht? Der ist die Lösung.",
      "Schritt 6 — Wenn keine Option passt: Antwort E. Aber erst nach gründlichem Test — voreilig auf E zu drücken kostet sichere Punkte.",
    ],
    framework: {
      title: "Deutsche Nomen-Bausteine — Schnell-Check",
      items: [
        {
          label: "Endungen",
          text: "-UNG · -HEIT · -KEIT · -NIS · -TUM · -SCHAFT · -ION · -LEIN · -CHEN · -ER · -E",
        },
        {
          label: "Vorsilben",
          text: "AB- · AUF- · AN- · BE- · GE- · UN- · ZU- · VOR- · VER- · ENT- · ER- · MIT-",
        },
        {
          label: "Doppellaute",
          text: "EI · EU · AU · IE — gehören zusammen, nie trennen",
        },
        {
          label: "Konsonanten-Cluster",
          text: "CH · SCH · ST · PH · PF · SP · TZ — bleiben als Block",
        },
        {
          label: "Doppelkonsonanten",
          text: "LL · MM · NN · RR · SS · TT — Hinweis auf Wortmitte",
        },
        {
          label: "Häufige Anfänge",
          text: "SCH-, ST-, VER-, UN-, GE-, BE- sind hochfrequent",
        },
        {
          label: "Unwahrscheinliche Anfänge",
          text: "C, X, Y, Q sind im Deutschen selten — eher ausschließen",
        },
        {
          label: "Längen-Heuristik",
          text: "6 Buchstaben → eher kurzes Nomen · 9–10 → eher Vorsilbe + Stamm + Endung",
        },
      ],
    },
    pitfalls: [
      "Umlaute annehmen — im MedAT-Test kommen KEINE Umlaute vor (kein Ä/Ö/Ü, kein OE als Ersatz).",
      "Fremdwörter oder Fachbegriffe — die Lösung ist immer ein Duden-Alltagsnomen.",
      "Verben oder Adjektive als Lösung — nur Nomen, immer Singular.",
      "Mehrzahl statt Einzahl — Tische ist keine Lösung, Tisch schon.",
      "Nicht alle Buchstaben verbrauchen — das Nomen muss aus allen gegebenen Buchstaben bestehen.",
      "Zu lange grübeln — wenn nach 90 Sek nichts kommt, überspringen und nach Optionen-E-Strategie weitergehen.",
    ],
    prepTips: [
      "Wortschatz aktiv ausbauen: Bücher, Zeitungen, Sachbücher lesen statt nur Social Media — Vokabular wächst passiv mit.",
      "Tägliche 10-Minuten-Übung: 10 vertauschte Wörter aus einem Übungspool entschlüsseln.",
      "Endungs- und Vorsilben-Liste auswendig lernen — visuelle Erkennung beschleunigt sich.",
      "Spiele wie Scrabble oder Wordfeud schulen das exakte Auge für Buchstabenkombinationen.",
      "Wenn ein Wort partout nicht kommt — nicht im Test verzweifeln, sondern Skip-Strategie üben.",
    ],
  },

  figuren: {
    color: "#ec4899",
    shortDescription:
      "Du setzt 3–7 Puzzleteile mental zu einer Zielfigur (Vieleck oder Kreis) zusammen — ohne Stift und ohne Spiegelung.",
    meta: {
      tasks: "15 Aufgaben",
      time: "20 Minuten",
      points: "15 Punkte (1 pro Aufgabe)",
      secondsPerTask: "~80 Sekunden",
    },
    example: {
      situation:
        "Du bekommst 3 bis 7 Puzzleteile mit geraden und/oder runden Kanten. Sie ergeben zusammen eine vollständige Figur.",
      question: "Welche Zielfigur entsteht?",
      options: [
        "A) Fünfeck",
        "B) Sechseck",
        "C) Halbkreis",
        "D) Siebeneck",
        "E) Kein Lösungsvorschlag passt",
      ],
    },
    solution: {
      answer: "Abhängig von den Teilen — Methode entscheidet.",
      reasoning:
        "Schlüssel: das größte Teil identifizieren, seinen charakteristischen Innenwinkel ablesen (z. B. 108° → Fünfeck, 120° → Sechseck) und dann die restlichen Teile gedanklich passend einrotieren. Bei Kreisbögen: gibt's einen Bogen ≥ 90°? → eher Halb-/Vollkreis. Wenn kein Vorschlag aufgeht → E.",
    },
    rule: "Teile dürfen gedreht, aber niemals gespiegelt werden — keine Lücken, keine Überlappung.",
    steps: [
      "Schritt 1 — Mit dem größten Teil starten: Suche das Teilstück mit der längsten Kante oder dem klarsten Winkel. Es gibt dir die Richtung der Zielfigur vor.",
      "Schritt 2 — Innenwinkel lesen: Schau dir den auffälligsten Innenwinkel an. 60° → Dreieck, 90° → Quadrat, 108° → Fünfeck, 120° → Sechseck, 135° → Achteck. Werte müssen auswendig sitzen.",
      "Schritt 3 — Zielfigur hypothetisieren: Mit der Winkel-Info eine der 5 Optionen als Hypothese setzen. Skizziere die Form gedanklich.",
      "Schritt 4 — Restteile mental drehen: Dreh jedes verbleibende Teil im Kopf in 90°- oder 60°-Schritten. Kante an Kante anfügen — passt es lückenlos in die Zielfigur?",
      "Schritt 5 — Bei Kreisbögen: Suche den größten Bogen. Halbkreis (180°), Viertelkreis (90°)? Ergänzt sich der Bogen mit den anderen Teilen zu Voll-/Halb-/Viertelkreis?",
      "Schritt 6 — Bei Mismatch: Wenn keine Anordnung aufgeht → andere Zielfigur testen, oder Antwort E (kein Vorschlag passt). Nach 80 Sek. überspringen.",
    ],
    framework: {
      title: "Innenwinkel regelmäßiger Vielecke — auswendig lernen",
      items: [
        { label: "Dreieck", text: "60° · 3 Seiten" },
        { label: "Quadrat", text: "90° · 4 Seiten" },
        { label: "Fünfeck", text: "108° · 5 Seiten" },
        { label: "Sechseck", text: "120° · 6 Seiten" },
        { label: "Siebeneck", text: "≈128,6° · 7 Seiten" },
        { label: "Achteck", text: "135° · 8 Seiten" },
        {
          label: "Vollkreis",
          text: "360° · komplette Rundung, oft aus 2 Halbkreisen oder 4 Viertelkreisen",
        },
        {
          label: "Halbkreis",
          text: "180° · ein gerader Durchmesser + Bogen",
        },
        {
          label: "Viertelkreis",
          text: "90° · zwei gerade Schenkel + Viertel-Bogen",
        },
      ],
    },
    pitfalls: [
      "Teile spiegeln — verboten. Nur Drehung erlaubt.",
      "Zu lange an einer Aufgabe kleben — nach 80 Sek. überspringen, am Ende zurückkommen.",
      "Kreisbögen übersehen → Lösung ist oft Halb- oder Viertelkreis, nicht ein Vieleck.",
      "Winkel im Test erst rechnen — viel zu langsam. Werte müssen vor dem Test sitzen.",
      "Kein Stift mehr erlaubt (neue Regel) — Training ohne Hilfslinien üben.",
      "Den Test in Panik überfliegen — manche Aufgaben sind sehr eindeutig, mit Methode 100% machbar.",
    ],
    prepTips: [
      "Tangram-Spiele zuhause — physisch Puzzleteile drehen schult das mentale Rotieren.",
      "Übungs-Apps für räumliches Denken (z. B. Block Puzzle) 10 Min/Tag.",
      "Vielecke mit Innenwinkeln auf Karteikarten — Drill bis automatisiert.",
      "Übungsaufgaben aus offiziellen MedAT-Pools 50× durchgehen, dabei bewusst die Zielfigur-Hypothese formulieren.",
      "Mit Augen zu üben: stell dir einen Würfel vor, dreh ihn im Kopf — verbessert generell das mentale Rotieren.",
    ],
  },
};
