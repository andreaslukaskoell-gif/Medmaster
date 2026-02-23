// === KFF: Kognitive Fähigkeiten und Fertigkeiten ===

export const kffStrategyGuide = {
  zahlenfolgen: {
    title: "Strategie-Guide: Zahlenfolgen",
    sections: [
      {
        heading: "Grundprinzip",
        content:
          "Bei Zahlenfolgen musst du das Muster erkennen, das die Zahlen verbindet. Berechne immer zürst die Differenzen zwischen aufeinanderfolgenden Zahlen. Wenn die Differenzen konstant sind, handelt es sich um eine arithmetische Folge.",
      },
      {
        heading: "Schritt-für-Schritt Vorgehen",
        content: `1. Differenzen bilden: Berechne die Differenz zwischen jedem Paar aufeinanderfolgender Zahlen.
2. Differenzen der Differenzen: Sind die ersten Differenzen nicht konstant, bilde die zweiten Differenzen.
3. Häufige Muster prüfen:
   - Arithmetisch: konstante Differenz (+3, +3, +3...)
   - Geometrisch: konstanter Faktor (x2, x2, x2...)
   - Quadratzahlen: 1, 4, 9, 16, 25...
   - Fibonacci-artig: jede Zahl = Summe der zwei vorherigen
   - Alternierend: zwei Muster wechseln sich ab
   - Primzahlen: 2, 3, 5, 7, 11, 13...
4. Kombination: Manchmal sind es wechselnde Operationen (+2, x3, +2, x3...)`,
      },
      {
        heading: "Typische Fallen",
        content: `- Nicht nur die offensichtlichste Lösung annehmen - prüfe ob es auch mit allen Zahlen passt
- Bei großen Sprüngen an Potenzen oder Multiplikation denken
- Manchmal sind zwei verschachtelte Folgen enthalten (gerade und ungerade Positionen bilden je eigene Folge)
- Zeitmanagement: Wenn du nach 30 Sekunden kein Muster findest, markiere die Aufgabe und komme später zurück`,
      },
    ],
  },
  gedächtnis: {
    title: "Strategie-Guide: Allergiepässe merken",
    sections: [
      {
        heading: "Die Aufgabe",
        content:
          "Du bekommst 8 Allergieausweise mit je einem Namen, Geburtsdatum, Blutgruppe und 2-3 Allergien zu sehen (Lernphase: 8 Minuten). Dann werden Fragen zu den Ausweisen gestellt (Prüfphase).",
      },
      {
        heading: "Die Loci-Methode (Gedächtnispalast)",
        content: `1. Wähle 8 bekannte Orte in deiner Wohnung (Eingangstür, Garderobe, Küche, Bad, etc.)
2. Jeder Allergieausweis wird an einem Ort 'abgelegt'
3. Erstelle für jede Person ein lebhaftes Bild an diesem Ort:
   - Name: Assoziiere den Namen mit einer bekannten Person oder einem Gegenstand
   - Blutgruppe: A=Apfel, B=Banane, 0=Orange, AB=Apfel+Banane, +/- = oben/unten
   - Allergien: Stelle dir die allergische Reaktion bildlich an deinem Ort vor
4. Gehe den Weg durch deine Wohnung mehrmals ab und 'besuche' jede Person`,
      },
      {
        heading: "Zusätzliche Tipps",
        content: `- Gruppiere ähnliche Informationen: Alle Personen mit Blutgruppe A zusammen merken
- Nutze emotionale und absurde Bilder (je verrückter, desto besser merkbar)
- Wiederhole in der Lernzeit mindestens 3x alle Ausweise
- Nutze die letzten 2 Minuten zum Wiederholen, nicht zum Neulernen
- Konzentriere dich auf die schwierigsten Ausweise zürst
- Bilde Geschichten: 'Frau Müller (A+) niest im Eingang wegen Pollen, während sie eine Banane isst'`,
      },
    ],
  },
  wortflüssigkeit: {
    title: "Strategie-Guide: Wortflüssigkeit",
    sections: [
      {
        heading: "Die Aufgabe",
        content:
          "Dir wird ein Wort gezeigt, dessen Buchstaben vertauscht wurden. Du musst erkennen, mit welchem Buchstaben das ursprüngliche Wort beginnt. Diese Aufgabe testet deine Fähigkeit, Wörter schnell zu erkennen und mental zu rekonstruieren.",
      },
      {
        heading: "Strategien",
        content: `1. Buchstabenhäufigkeit analysieren: Welche Buchstaben kommen vor? Welche typischen deutschen Wortanfänge sind möglich?
2. Bekannte Silben suchen: Erkenne Silben wie -ung, -keit, -heit, -schaft im Buchstabensalat
3. Zusammengesetzte Wörter: Viele deutsche Wörter sind zusammengesetzt - suche nach zwei bekannten Wortteilen
4. Konsonanten-Vokal-Muster: Deutsche Wörter beginnen häufig mit bestimmten Konsonantenkombinationen (Sch-, Str-, Bl-, Fr-, etc.)
5. Ausschlussmethode: Eliminiere Anfangsbuchstaben, die mit den vorhandenen Buchstaben kein sinnvolles Wort ergeben`,
      },
      {
        heading: "Typische Fallen und Tipps",
        content: `- Lass dich nicht von langen Wörtern einschüchtern - sie sind oft zusammengesetzt und leichter zu erkennen
- Bei kurzen Wörtern gibt es oft mehrere Möglichkeiten - prüfe alle Optionen
- Zeitmanagement: Max. 15-20 Sekunden pro Wort
- Wenn ein Wort nicht sofort erkennbar ist, suche nach auffälligen Buchstabengruppen (qu, sch, ch, ck)
- Übe regelmäßig - mit der Zeit erkennst du Wörter immer schneller`,
      },
    ],
  },
  implikationen: {
    title: "Strategie-Guide: Implikationen erkennen",
    sections: [
      {
        heading: "Was sind Implikationen?",
        content:
          "Eine Implikation ist eine 'Wenn-Dann'-Aussage: 'Wenn A, dann B' (A -> B). Du musst bestimmen, welche Schlussfolgerungen logisch gültig sind.",
      },
      {
        heading: "Gültige vs. ungültige Schlüsse",
        content: `Gegeben: 'Wenn A, dann B' (A -> B)

GÜLTIG:
- Modus Ponens: A ist wahr -> B muss wahr sein
- Modus Tollens (Kontraposition): B ist falsch -> A muss falsch sein
  ('Wenn es regnet, ist die Straße nass' = 'Straße nicht nass -> es regnet nicht')

UNGÜLTIG (häufige Fehler!):
- Umkehrschluss: B ist wahr -> A muss wahr sein (FALSCH! Straße nass -> Regnet? Nein, vielleicht Sprinkler)
- Verneinung des Antecedens: A ist falsch -> B muss falsch sein (FALSCH! Kein Regen -> Straße trocken? Nicht zwingend)`,
      },
      {
        heading: "Praktische Vorgehensweise",
        content: `1. Identifiziere die Prämisse (Wenn-Teil) und die Konklusion (Dann-Teil)
2. Forme die Aussage in Symbolform um: A -> B
3. Bilde die Kontraposition: nicht-B -> nicht-A (immer gültig!)
4. Prüfe bei jeder Antwortmöglichkeit: Wird Modus Ponens oder Modus Tollens angewandt? -> Gültig. Wird Umkehrschluss oder Verneinung des Antecedens versucht? -> Ungültig.
5. Achtung bei Quantoren: 'Alle A sind B' ist nicht dasselbe wie 'Alle B sind A'
6. Bei Ketten: A -> B und B -> C ergibt A -> C (Transitivität)`,
      },
    ],
  },
};

export interface ZahlenfolgeQuestion {
  id: string;
  sequence: number[];
  options: number[];
  correctAnswer: number;
  explanation: string;
}

export const zahlenfolgenQuestions: ZahlenfolgeQuestion[] = [
  {
    id: "zf-1",
    sequence: [2, 6, 18, 54],
    options: [108, 162, 148, 216],
    correctAnswer: 162,
    explanation: "Geometrische Folge: jede Zahl wird mit 3 multipliziert. 54 x 3 = 162.",
  },
  {
    id: "zf-2",
    sequence: [3, 7, 15, 31],
    options: [47, 55, 63, 59],
    correctAnswer: 63,
    explanation: "Jede Zahl wird verdoppelt und dann +1: 3x2+1=7, 7x2+1=15, 15x2+1=31, 31x2+1=63.",
  },
  {
    id: "zf-3",
    sequence: [1, 1, 2, 3, 5, 8],
    options: [11, 12, 13, 14],
    correctAnswer: 13,
    explanation: "Fibonacci-Folge: jede Zahl ist die Summe der beiden vorherigen. 5+8=13.",
  },
  {
    id: "zf-4",
    sequence: [4, 9, 16, 25, 36],
    options: [42, 46, 49, 52],
    correctAnswer: 49,
    explanation: "Quadratzahlen: 2², 3², 4², 5², 6², 7²=49.",
  },
  {
    id: "zf-5",
    sequence: [100, 95, 85, 70, 50],
    options: [35, 30, 25, 20],
    correctAnswer: 25,
    explanation:
      "Differenzen: -5, -10, -15, -20, -25. Die Differenz nimmt jeweils um 5 zu. 50-25=25.",
  },
  {
    id: "zf-6",
    sequence: [2, 5, 11, 23, 47],
    options: [91, 93, 95, 97],
    correctAnswer: 95,
    explanation:
      "Jede Zahl wird verdoppelt und +1: 2x2+1=5, 5x2+1=11, 11x2+1=23, 23x2+1=47, 47x2+1=95. Die Regel lautet f(n) = 2n+1.",
  },
  {
    id: "zf-7",
    sequence: [1, 8, 27, 64, 125],
    options: [150, 196, 210, 216],
    correctAnswer: 216,
    explanation: "Kubikzahlen (dritte Potenzen): 1³=1, 2³=8, 3³=27, 4³=64, 5³=125, 6³=216.",
  },
  {
    id: "zf-8",
    sequence: [2, 3, 5, 7, 11, 13],
    options: [15, 17, 19, 21],
    correctAnswer: 17,
    explanation:
      "Primzahlenfolge: die nächste Primzahl nach 13 ist 17. (14, 15 und 16 sind keine Primzahlen.)",
  },
  {
    id: "zf-9",
    sequence: [1, 4, 2, 8, 3, 12],
    options: [4, 6, 15, 16],
    correctAnswer: 4,
    explanation:
      "Zwei verschachtelte Folgen: ungerade Positionen: 1, 2, 3, 4 (jeweils +1). Gerade Positionen: 4, 8, 12, 16 (jeweils +4). Nächste Zahl steht an einer ungeraden Position: 4.",
  },
  {
    id: "zf-10",
    sequence: [1, 2, 6, 24, 120],
    options: [240, 480, 600, 720],
    correctAnswer: 720,
    explanation:
      "Fakultäten: 1!=1, 2!=2, 3!=6, 4!=24, 5!=120, 6!=720. Jede Zahl wird mit der nächsten natürlichen Zahl multipliziert.",
  },
  {
    id: "zf-11",
    sequence: [1, 3, 6, 10, 15, 21],
    options: [25, 27, 28, 30],
    correctAnswer: 28,
    explanation:
      "Dreieckszahlen: Die Differenzen steigen jeweils um 1 (+2, +3, +4, +5, +6, +7). 21+7=28. Allgemein: n*(n+1)/2, hier 7*8/2=28.",
  },
  {
    id: "zf-12",
    sequence: [2, 6, 7, 21, 22, 66],
    options: [67, 68, 132, 198],
    correctAnswer: 67,
    explanation:
      "Kombination aus Multiplikation und Addition: x3, +1, x3, +1, x3, +1. 2x3=6, 6+1=7, 7x3=21, 21+1=22, 22x3=66, 66+1=67.",
  },
];

export interface AllergieAusweis {
  id: string;
  name: string;
  geburtsdatum: string;
  blutgruppe: string;
  allergien: string[];
}

export const allergieAusweise: AllergieAusweis[] = [
  {
    id: "aa-1",
    name: "Maria Schneider",
    geburtsdatum: "14.03.1992",
    blutgruppe: "A+",
    allergien: ["Penicillin", "Hausstaubmilben"],
  },
  {
    id: "aa-2",
    name: "Thomas Bauer",
    geburtsdatum: "27.08.1985",
    blutgruppe: "0-",
    allergien: ["Bienengift", "Latex", "Nickel"],
  },
  {
    id: "aa-3",
    name: "Anna Gruber",
    geburtsdatum: "05.11.1998",
    blutgruppe: "B+",
    allergien: ["Erdnüsse", "Soja"],
  },
  {
    id: "aa-4",
    name: "Stefan Maier",
    geburtsdatum: "19.06.1990",
    blutgruppe: "AB+",
    allergien: ["Ibuprofen", "Kontrastmittel"],
  },
  {
    id: "aa-5",
    name: "Julia Weber",
    geburtsdatum: "02.01.2001",
    blutgruppe: "A-",
    allergien: ["Pollen", "Katzenhaare", "Schimmelpilze"],
  },
  {
    id: "aa-6",
    name: "Markus Huber",
    geburtsdatum: "30.09.1988",
    blutgruppe: "0+",
    allergien: ["Wespengift", "Amoxicillin"],
  },
  {
    id: "aa-7",
    name: "Katharina Fischer",
    geburtsdatum: "11.04.1995",
    blutgruppe: "B-",
    allergien: ["Milcheiweiß", "Weizen", "Ei"],
  },
  {
    id: "aa-8",
    name: "Daniel Wagner",
    geburtsdatum: "22.12.1983",
    blutgruppe: "AB-",
    allergien: ["Aspirin", "Sulfonamide"],
  },
];

export const allergieAusweiseSet2: AllergieAusweis[] = [
  {
    id: "aa2-1",
    name: "Elena Hartmann",
    geburtsdatum: "08.07.1994",
    blutgruppe: "0+",
    allergien: ["Cephalosporine", "Meeresfrüchte"],
  },
  {
    id: "aa2-2",
    name: "Florian Berger",
    geburtsdatum: "21.02.1987",
    blutgruppe: "A-",
    allergien: ["Bienengift", "Propofol", "Latex"],
  },
  {
    id: "aa2-3",
    name: "Sophie Richter",
    geburtsdatum: "16.10.2000",
    blutgruppe: "B+",
    allergien: ["Haselnüsse", "Birke-Pollen"],
  },
  {
    id: "aa2-4",
    name: "Maximilian Keller",
    geburtsdatum: "03.05.1991",
    blutgruppe: "AB+",
    allergien: ["Metamizol", "Röntgenkontrastmittel"],
  },
  {
    id: "aa2-5",
    name: "Laura Schwarz",
    geburtsdatum: "29.11.1996",
    blutgruppe: "0-",
    allergien: ["Penicilin", "Katzenepithelien", "Hausstaubmilben"],
  },
  {
    id: "aa2-6",
    name: "Niklas Zimmermann",
    geburtsdatum: "12.04.1982",
    blutgruppe: "A+",
    allergien: ["Wespengift", "Diclofenac"],
  },
  {
    id: "aa2-7",
    name: "Carolin Braun",
    geburtsdatum: "25.08.1999",
    blutgruppe: "B-",
    allergien: ["Glutenunverträglichkeit", "Soja", "Sesam"],
  },
  {
    id: "aa2-8",
    name: "Philipp Engel",
    geburtsdatum: "07.01.1986",
    blutgruppe: "AB-",
    allergien: ["Codein", "Sulfonamide"],
  },
];

export interface GedaechtnisQuestion {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
}

export const gedaechtnisQuestions: GedaechtnisQuestion[] = [
  {
    id: "gq-1",
    text: "Welche Blutgruppe hat Maria Schneider?",
    options: ["A+", "A-", "B+", "0+"],
    correctAnswer: "A+",
  },
  {
    id: "gq-2",
    text: "Gegen welche Substanzen ist Thomas Bauer allergisch?",
    options: [
      "Bienengift, Latex, Nickel",
      "Wespengift, Latex, Nickel",
      "Bienengift, Penicillin, Nickel",
      "Bienengift, Latex, Chrom",
    ],
    correctAnswer: "Bienengift, Latex, Nickel",
  },
  {
    id: "gq-3",
    text: "Wann wurde Anna Gruber geboren?",
    options: ["05.11.1998", "05.11.1995", "15.11.1998", "05.01.1998"],
    correctAnswer: "05.11.1998",
  },
  {
    id: "gq-4",
    text: "Welche Person hat die Blutgruppe AB-?",
    options: ["Stefan Maier", "Daniel Wagner", "Markus Huber", "Thomas Bauer"],
    correctAnswer: "Daniel Wagner",
  },
  {
    id: "gq-5",
    text: "Gegen wie viele Allergene ist Julia Weber allergisch?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "3",
  },
];

export const gedaechtnisQuestionsSet2: GedaechtnisQuestion[] = [
  {
    id: "gq2-1",
    text: "Welche Blutgruppe hat Florian Berger?",
    options: ["A+", "A-", "0-", "AB+"],
    correctAnswer: "A-",
  },
  {
    id: "gq2-2",
    text: "Gegen welche Substanzen ist Carolin Braun allergisch?",
    options: [
      "Glutenunverträglichkeit, Soja, Sesam",
      "Haselnüsse, Soja, Sesam",
      "Glutenunverträglichkeit, Weizen, Sesam",
      "Glutenunverträglichkeit, Soja, Erdnüsse",
    ],
    correctAnswer: "Glutenunverträglichkeit, Soja, Sesam",
  },
  {
    id: "gq2-3",
    text: "Wann wurde Maximilian Keller geboren?",
    options: ["03.05.1991", "03.05.1993", "13.05.1991", "03.07.1991"],
    correctAnswer: "03.05.1991",
  },
  {
    id: "gq2-4",
    text: "Welche Person hat die Blutgruppe 0-?",
    options: ["Elena Hartmann", "Laura Schwarz", "Niklas Zimmermann", "Philipp Engel"],
    correctAnswer: "Laura Schwarz",
  },
  {
    id: "gq2-5",
    text: "Welche Allergie haben sowohl Florian Berger als auch Laura Schwarz gemeinsam (in ähnlicher Form)?",
    options: ["Wespengift", "Hausstaubmilben", "Eine Penicillin-artige Allergie", "Latex"],
    correctAnswer: "Eine Penicillin-artige Allergie",
  },
];

export interface ImplikationQuestion {
  id: string;
  premise: string;
  conclusion: string;
  isValid: boolean;
  explanation: string;
  type:
    | "modus_ponens"
    | "modus_tollens"
    | "affirmation_consequent"
    | "denial_antecedent"
    | "contraposition"
    | "biconditional";
}

export const implikationQuestions: ImplikationQuestion[] = [
  // === EXISTING QUESTIONS (imp-1 through imp-10) with type field added ===
  {
    id: "imp-1",
    premise: "Wenn ein Patient Fieber hat, dann ist sein CRP-Wert erhöht.",
    conclusion: "Der CRP-Wert des Patienten ist nicht erhöht. Also hat der Patient kein Fieber.",
    isValid: true,
    explanation:
      "Dies ist ein gültiger Modus Tollens: Wenn A -> B, und nicht-B, dann nicht-A. Wenn Fieber -> CRP erhöht, und CRP NICHT erhöht, dann kein Fieber.",
    type: "modus_tollens",
  },
  {
    id: "imp-2",
    premise: "Alle Säugetiere haben ein Herz mit vier Kammern.",
    conclusion: "Dieses Tier hat ein Herz mit vier Kammern. Also ist es ein Säugetier.",
    isValid: false,
    explanation:
      "Ungültiger Umkehrschluss! Auch Vögel haben ein Vierkammerherz. Aus 'Alle A sind B' folgt nicht 'Alle B sind A'.",
    type: "affirmation_consequent",
  },
  {
    id: "imp-3",
    premise: "Wenn jemand Arzt ist, dann hat er ein Medizinstudium abgeschlossen.",
    conclusion: "Lisa hat ein Medizinstudium abgeschlossen. Also ist Lisa Ärztin.",
    isValid: false,
    explanation:
      "Ungültiger Umkehrschluss. Man kann ein Medizinstudium abschließen, ohne als Arzt tätig zu sein (z.B. Forschung). Aus A -> B und B folgt NICHT A.",
    type: "affirmation_consequent",
  },
  {
    id: "imp-4",
    premise:
      "Wenn ein Medikament verschreibungspflichtig ist, dann darf es nur in der Apotheke verkauft werden.",
    conclusion:
      "Aspirin ist nicht verschreibungspflichtig. Also darf es auch außerhalb der Apotheke verkauft werden.",
    isValid: false,
    explanation:
      "Verneinung des Antecedens (ungültig). Nicht verschreibungspflichtig heißt nicht, dass es überall verkauft werden darf - es kann trotzdem apothekenpflichtig sein.",
    type: "denial_antecedent",
  },
  {
    id: "imp-5",
    premise: "Wenn die Körpertemperatur unter 35°C sinkt, liegt eine Hypothermie vor.",
    conclusion: "Die Körpertemperatur des Patienten beträgt 33°C. Also liegt eine Hypothermie vor.",
    isValid: true,
    explanation:
      "Gültiger Modus Ponens: A (Temp < 35°C) ist wahr (33°C < 35°C), also folgt B (Hypothermie). Wenn A -> B, und A, dann B.",
    type: "modus_ponens",
  },
  {
    id: "imp-6",
    premise: "Wenn ein Patient eine bakterielle Infektion hat, dann hilft ein Antibiotikum.",
    conclusion:
      "Dem Patienten hilft das Antibiotikum nicht. Also hat er keine bakterielle Infektion.",
    isValid: true,
    explanation:
      "Gültiger Modus Tollens: Wenn A -> B, und nicht-B, dann nicht-A. Antibiotikum hilft nicht (nicht-B), also keine bakterielle Infektion (nicht-A).",
    type: "modus_tollens",
  },
  {
    id: "imp-7",
    premise:
      "Alle Studierenden, die die Prüfung bestanden haben, haben mindestens 60% der Punkte erreicht.",
    conclusion: "Max hat 75% der Punkte erreicht. Also hat Max die Prüfung bestanden.",
    isValid: false,
    explanation:
      "Ungültiger Umkehrschluss. Die Prämisse besagt nur, dass Bestehen mindestens 60% erfordert, aber es könnten weitere Kriterien gelten (z.B. mündliche Prüfung). Aus 'Alle A sind B' folgt nicht 'Alle B sind A'.",
    type: "affirmation_consequent",
  },
  {
    id: "imp-8",
    premise: "Wenn es draußen regnet, dann nimmt Peter seinen Regenschirm mit.",
    conclusion: "Peter hat seinen Regenschirm mitgenommen. Also regnet es draußen.",
    isValid: false,
    explanation:
      "Ungültiger Umkehrschluss (Bejahung des Konsequens). Peter könnte den Schirm auch vorsorglich mitnehmen oder weil Regen vorhergesagt wurde. Aus A -> B und B folgt nicht A.",
    type: "affirmation_consequent",
  },
  {
    id: "imp-9",
    premise: "Wenn ein Lebensmittel Gluten enthält, dann dürfen Zöliakie-Patienten es nicht essen.",
    conclusion: "Reis enthält kein Gluten. Also dürfen Zöliakie-Patienten Reis essen.",
    isValid: false,
    explanation:
      "Verneinung des Antecedens (ungültig). Nur weil die Bedingung 'enthält Gluten' nicht erfüllt ist, heißt das nicht automatisch, dass das Lebensmittel unbedenklich ist. Es könnten z.B. Kreuzkontaminationen vorliegen.",
    type: "denial_antecedent",
  },
  {
    id: "imp-10",
    premise:
      "Wenn ein Patient auf Penicillin allergisch reagiert, darf ihm kein Penicillin verabreicht werden.",
    conclusion:
      "Dem Patienten wurde Penicillin verabreicht. Also ist er nicht allergisch auf Penicillin.",
    isValid: true,
    explanation:
      "Gültiger Modus Tollens: Wenn A (allergisch) -> B (kein Penicillin verabreichen), und nicht-B (Penicillin wurde verabreicht), dann nicht-A (nicht allergisch). Die Kontraposition ist logisch korrekt.",
    type: "modus_tollens",
  },

  // === NEW QUESTIONS: MODUS PONENS (A -> B, A, therefore B — VALID) ===
  {
    id: "imp-11",
    premise: "Wenn ein Patient Diabetes mellitus hat, dann ist sein Blutzucker erhöht.",
    conclusion: "Herr Müller hat Diabetes mellitus. Also ist sein Blutzucker erhöht.",
    isValid: true,
    explanation:
      "Gültiger Modus Ponens: A (Diabetes) ist gegeben, also folgt B (Blutzucker erhöht). Wenn A -> B und A wahr ist, dann muss B wahr sein.",
    type: "modus_ponens",
  },
  {
    id: "imp-12",
    premise: "Wenn eine Substanz ein Enzym hemmt, dann sinkt die Reaktionsgeschwindigkeit.",
    conclusion:
      "Substanz X hemmt das Enzym Amylase. Also sinkt die Reaktionsgeschwindigkeit der Amylase-Reaktion.",
    isValid: true,
    explanation:
      "Gültiger Modus Ponens: Die Prämisse besagt A -> B (Enzymhemmung -> Reaktionsgeschwindigkeit sinkt). A ist erfüllt (Substanz X hemmt Amylase), also folgt B zwingend.",
    type: "modus_ponens",
  },
  {
    id: "imp-13",
    premise: "Wenn der pH-Wert des Blutes unter 7,35 sinkt, liegt eine Azidose vor.",
    conclusion: "Der pH-Wert des Patienten beträgt 7,20. Also liegt eine Azidose vor.",
    isValid: true,
    explanation:
      "Gültiger Modus Ponens: A (pH < 7,35) ist wahr (7,20 < 7,35), also folgt B (Azidose). Die Bedingung ist erfüllt, die Konklusion folgt zwingend.",
    type: "modus_ponens",
  },
  {
    id: "imp-14",
    premise: "Alle Viren benötigen eine Wirtszelle zur Vermehrung.",
    conclusion: "SARS-CoV-2 ist ein Virus. Also benötigt es eine Wirtszelle zur Vermehrung.",
    isValid: true,
    explanation:
      "Gültiger Modus Ponens: Aus 'Alle A sind B' und 'X ist A' folgt 'X ist B'. SARS-CoV-2 gehört zur Menge der Viren, also gilt die Eigenschaft (Wirtszelle nötig) auch für SARS-CoV-2.",
    type: "modus_ponens",
  },
  {
    id: "imp-15",
    premise:
      "Wenn eine Person unter 18 Jahre alt ist, dann gilt sie in Österreich als minderjährig.",
    conclusion: "Anna ist 15 Jahre alt. Also gilt sie in Österreich als minderjährig.",
    isValid: true,
    explanation:
      "Gültiger Modus Ponens: A (unter 18 Jahre) ist erfüllt (15 < 18), also folgt B (minderjährig). Die Wenn-Dann-Bedingung ist klar erfüllt.",
    type: "modus_ponens",
  },
  {
    id: "imp-16",
    premise: "Wenn ein Nerv durchtrennt wird, kann er keine Signale mehr weiterleiten.",
    conclusion:
      "Der Nervus medianus des Patienten wurde durchtrennt. Also kann er keine Signale mehr weiterleiten.",
    isValid: true,
    explanation:
      "Gültiger Modus Ponens: A (Nerv durchtrennt) ist gegeben, also folgt B (keine Signalweiterleitung). Wenn A -> B und A ist wahr, dann ist B wahr.",
    type: "modus_ponens",
  },
  {
    id: "imp-17",
    premise: "Wenn ein Patient eine Fraktur hat, dann ist die Röntgenaufnahme auffällig.",
    conclusion: "Der Patient hat eine Femurfraktur. Also ist seine Röntgenaufnahme auffällig.",
    isValid: true,
    explanation:
      "Gültiger Modus Ponens: A (Fraktur vorhanden) ist wahr, also folgt B (Röntgen auffällig). Die Prämisse garantiert die Konklusion bei Vorliegen der Bedingung.",
    type: "modus_ponens",
  },

  // === NEW QUESTIONS: MODUS TOLLENS (A -> B, not-B, therefore not-A — VALID) ===
  {
    id: "imp-18",
    premise: "Wenn ein Organismus photosynthetisch aktiv ist, dann enthält er Chlorophyll.",
    conclusion:
      "Dieser Organismus enthält kein Chlorophyll. Also ist er nicht photosynthetisch aktiv.",
    isValid: true,
    explanation:
      "Gültiger Modus Tollens: Wenn A -> B (Photosynthese -> Chlorophyll), und nicht-B (kein Chlorophyll), dann nicht-A (keine Photosynthese). Die Verneinung des Konsequens erlaubt den Schluss auf die Verneinung des Antezedens.",
    type: "modus_tollens",
  },
  {
    id: "imp-19",
    premise: "Wenn eine Zelle sich mitotisch teilt, dann wird die DNA vorher repliziert.",
    conclusion: "Die DNA dieser Zelle wurde nicht repliziert. Also teilt sie sich nicht mitotisch.",
    isValid: true,
    explanation:
      "Gültiger Modus Tollens: A -> B (Mitose -> DNA-Replikation). Nicht-B (keine Replikation), also nicht-A (keine Mitose). Ohne die notwendige Voraussetzung kann die Folge nicht eintreten.",
    type: "modus_tollens",
  },
  {
    id: "imp-20",
    premise: "Wenn ein Medikament die Blut-Hirn-Schranke überwindet, dann ist es lipophil.",
    conclusion:
      "Dieses Medikament ist nicht lipophil. Also überwindet es nicht die Blut-Hirn-Schranke.",
    isValid: true,
    explanation:
      "Gültiger Modus Tollens: Wenn A -> B (Blut-Hirn-Schranke überwinden -> lipophil), und nicht-B (nicht lipophil), dann nicht-A (überwindet BHS nicht).",
    type: "modus_tollens",
  },
  {
    id: "imp-21",
    premise: "Wenn ein Protein denaturiert wird, verliert es seine biologische Funktion.",
    conclusion:
      "Dieses Protein hat seine biologische Funktion nicht verloren. Also wurde es nicht denaturiert.",
    isValid: true,
    explanation:
      "Gültiger Modus Tollens: A -> B (Denaturierung -> Funktionsverlust). Nicht-B (Funktion erhalten), also nicht-A (nicht denaturiert). Der Schluss von der Verneinung der Folge auf die Verneinung der Ursache ist logisch korrekt.",
    type: "modus_tollens",
  },
  {
    id: "imp-22",
    premise: "Wenn der Kaliumspiegel im Blut stark ansteigt, treten Herzrhythmusstörungen auf.",
    conclusion:
      "Der Patient zeigt keine Herzrhythmusstörungen. Also ist sein Kaliumspiegel nicht stark angestiegen.",
    isValid: true,
    explanation:
      "Gültiger Modus Tollens: A -> B (Hyperkaliämie -> Herzrhythmusstörungen). Nicht-B (keine Rhythmusstörungen), also nicht-A (kein starker Kaliumanstieg).",
    type: "modus_tollens",
  },
  {
    id: "imp-23",
    premise: "Wenn jemand an der MedAT-Prüfung teilnimmt, muss er sich vorher angemeldet haben.",
    conclusion: "Tobias hat sich nicht angemeldet. Also nimmt er nicht an der MedAT-Prüfung teil.",
    isValid: true,
    explanation:
      "Gültiger Modus Tollens: A -> B (Teilnahme -> Anmeldung). Nicht-B (keine Anmeldung), also nicht-A (keine Teilnahme). Die notwendige Bedingung ist nicht erfüllt.",
    type: "modus_tollens",
  },

  // === NEW QUESTIONS: AFFIRMATION OF THE CONSEQUENT (A -> B, B, therefore A — INVALID) ===
  {
    id: "imp-24",
    premise: "Wenn ein Patient eine Lungenentzündung hat, dann hat er Husten.",
    conclusion: "Der Patient hustet. Also hat er eine Lungenentzündung.",
    isValid: false,
    explanation:
      "Ungültige Bejahung des Konsequens: Husten kann viele Ursachen haben (Erkältung, Asthma, Allergie). Aus A -> B und B folgt NICHT A. Nur weil die Folge eintritt, muss nicht die genannte Ursache vorliegen.",
    type: "affirmation_consequent",
  },
  {
    id: "imp-25",
    premise: "Wenn eine Substanz eine Säure ist, dann hat sie einen pH-Wert unter 7.",
    conclusion: "Diese Lösung hat einen pH-Wert von 5. Also ist sie eine Säure.",
    isValid: false,
    explanation:
      "Ungültige Bejahung des Konsequens: Die Prämisse sagt, dass Säuren pH < 7 haben. Aber ein pH < 7 kann auch durch andere Faktoren entstehen (z.B. Pufferlösungen, saure Salze). Aus A -> B und B folgt nicht zwingend A. Hinweis: In der Praxis wäre dies zwar meist korrekt, aber die logische Schlussform ist ungültig.",
    type: "affirmation_consequent",
  },
  {
    id: "imp-26",
    premise: "Wenn ein Mensch eine Grippe hat, dann hat er erhöhte Temperatur.",
    conclusion: "Maria hat erhöhte Temperatur. Also hat sie die Grippe.",
    isValid: false,
    explanation:
      "Ungültige Bejahung des Konsequens: Erhöhte Temperatur kann auch bei vielen anderen Erkrankungen auftreten (bakterielle Infekte, Autoimmunerkrankungen, etc.). Aus A -> B und B folgt nicht A.",
    type: "affirmation_consequent",
  },
  {
    id: "imp-27",
    premise: "Wenn ein Tier ein Hund ist, dann hat es vier Beine.",
    conclusion: "Dieses Tier hat vier Beine. Also ist es ein Hund.",
    isValid: false,
    explanation:
      "Ungültige Bejahung des Konsequens: Viele Tiere haben vier Beine (Katzen, Pferde, Eidechsen). Aus A -> B und B folgt nicht A. Die Eigenschaft 'vier Beine' ist nicht exklusiv für Hunde.",
    type: "affirmation_consequent",
  },
  {
    id: "imp-28",
    premise: "Wenn ein Patient einen Myokardinfarkt erleidet, steigt der Troponin-Wert im Blut.",
    conclusion:
      "Der Troponin-Wert des Patienten ist erhöht. Also hat er einen Myokardinfarkt erlitten.",
    isValid: false,
    explanation:
      "Ungültige Bejahung des Konsequens: Troponin kann auch bei Myokarditis, Lungenembolie oder Niereninsuffizienz erhöht sein. Aus A -> B und B folgt nicht zwingend A.",
    type: "affirmation_consequent",
  },
  {
    id: "imp-29",
    premise: "Wenn eine Pflanze genügend Sonnenlicht bekommt, wächst sie gut.",
    conclusion: "Diese Pflanze wächst gut. Also bekommt sie genügend Sonnenlicht.",
    isValid: false,
    explanation:
      "Ungültige Bejahung des Konsequens: Die Pflanze könnte auch unter Kunstlicht gut wachsen, oder andere Faktoren (Dünger, Wasser) könnten das Wachstum fördern. Aus A -> B und B folgt nicht A.",
    type: "affirmation_consequent",
  },
  {
    id: "imp-30",
    premise: "Wenn ein Student fleißig lernt, besteht er die Prüfung.",
    conclusion: "Sophia hat die Prüfung bestanden. Also hat sie fleißig gelernt.",
    isValid: false,
    explanation:
      "Ungültige Bejahung des Konsequens: Sophia könnte die Prüfung auch durch Glück, Vorwissen oder andere Strategien bestanden haben. Aus A -> B und B folgt nicht A.",
    type: "affirmation_consequent",
  },

  // === NEW QUESTIONS: DENIAL OF THE ANTECEDENT (A -> B, not-A, therefore not-B — INVALID) ===
  {
    id: "imp-31",
    premise: "Wenn es regnet, wird die Straße nass.",
    conclusion: "Es regnet nicht. Also ist die Straße nicht nass.",
    isValid: false,
    explanation:
      "Ungültige Verneinung des Antezedens: Die Straße kann auch durch andere Ursachen nass sein (Sprinkleranlage, Wasserrohrbruch, Schnee). Aus A -> B und nicht-A folgt NICHT nicht-B.",
    type: "denial_antecedent",
  },
  {
    id: "imp-32",
    premise: "Wenn ein Patient raucht, hat er ein erhöhtes Lungenkrebsrisiko.",
    conclusion: "Herr Schmidt raucht nicht. Also hat er kein erhöhtes Lungenkrebsrisiko.",
    isValid: false,
    explanation:
      "Ungültige Verneinung des Antezedens: Auch Nichtraucher können ein erhöhtes Lungenkrebsrisiko haben (z.B. durch Passivrauchen, Asbest, genetische Faktoren). Aus A -> B und nicht-A folgt nicht nicht-B.",
    type: "denial_antecedent",
  },
  {
    id: "imp-33",
    premise: "Wenn ein Patient Kortison einnimmt, kann sein Blutzucker ansteigen.",
    conclusion: "Die Patientin nimmt kein Kortison ein. Also steigt ihr Blutzucker nicht an.",
    isValid: false,
    explanation:
      "Ungültige Verneinung des Antezedens: Der Blutzucker kann auch aus anderen Gründen ansteigen (Diabetes, Stress, andere Medikamente). Aus A -> B und nicht-A folgt nicht nicht-B.",
    type: "denial_antecedent",
  },
  {
    id: "imp-34",
    premise: "Wenn jemand Sport treibt, ist er körperlich fit.",
    conclusion: "Lukas treibt keinen Sport. Also ist er nicht körperlich fit.",
    isValid: false,
    explanation:
      "Ungültige Verneinung des Antezedens: Man kann auch ohne Sport körperlich fit sein (z.B. durch körperliche Arbeit). Aus A -> B und nicht-A folgt nicht nicht-B. Sport ist eine hinreichende, aber keine notwendige Bedingung für Fitness.",
    type: "denial_antecedent",
  },
  {
    id: "imp-35",
    premise: "Wenn ein Enzym durch hohe Temperaturen denaturiert wird, verliert es seine Funktion.",
    conclusion:
      "Das Enzym wurde nicht durch hohe Temperaturen denaturiert. Also hat es seine Funktion nicht verloren.",
    isValid: false,
    explanation:
      "Ungültige Verneinung des Antezedens: Das Enzym könnte seine Funktion auch durch andere Ursachen verloren haben (pH-Änderung, chemische Denaturierung, Schwermetalle). Aus A -> B und nicht-A folgt nicht nicht-B.",
    type: "denial_antecedent",
  },
  {
    id: "imp-36",
    premise:
      "Wenn ein Patient eine Bluttransfusion mit der falschen Blutgruppe erhält, kommt es zu einer Hämolyse.",
    conclusion:
      "Der Patient hat keine falsche Bluttransfusion erhalten. Also liegt keine Hämolyse vor.",
    isValid: false,
    explanation:
      "Ungültige Verneinung des Antezedens: Hämolyse kann auch durch andere Ursachen entstehen (Autoimmunerkrankungen, Malaria, mechanische Schädigung der Erythrozyten). Aus A -> B und nicht-A folgt nicht nicht-B.",
    type: "denial_antecedent",
  },
  {
    id: "imp-37",
    premise: "Wenn ein Kind geimpft wird, ist es gegen die jeweilige Krankheit geschützt.",
    conclusion: "Dieses Kind wurde nicht geimpft. Also ist es nicht gegen die Krankheit geschützt.",
    isValid: false,
    explanation:
      "Ungültige Verneinung des Antezedens: Das Kind könnte auch durch eine natürlich durchgemachte Infektion Immunität erworben haben. Aus A -> B und nicht-A folgt nicht nicht-B. Die Impfung ist hinreichend, aber nicht notwendig für Schutz.",
    type: "denial_antecedent",
  },

  // === NEW QUESTIONS: CONTRAPOSITION (A -> B is equivalent to not-B -> not-A — VALID) ===
  {
    id: "imp-38",
    premise:
      "Wenn eine Zelle keine Mitochondrien besitzt, kann sie keine ärobe Zellatmung durchführen.",
    conclusion: "Eine Zelle führt ärobe Zellatmung durch. Also besitzt sie Mitochondrien.",
    isValid: true,
    explanation:
      "Gültige Kontraposition: Die Prämisse lautet: nicht-A (keine Mitochondrien) -> nicht-B (keine ärobe Zellatmung). Die Kontraposition ist: B (ärobe Zellatmung) -> A (Mitochondrien vorhanden). Die Kontraposition einer wahren Implikation ist immer gültig.",
    type: "contraposition",
  },
  {
    id: "imp-39",
    premise: "Wenn eine chemische Reaktion exotherm ist, wird Energie freigesetzt.",
    conclusion: "Wenn keine Energie freigesetzt wird, ist die Reaktion nicht exotherm.",
    isValid: true,
    explanation:
      "Gültige Kontraposition: A -> B (exotherm -> Energie freigesetzt) ist äquivalent zu nicht-B -> nicht-A (keine Energie freigesetzt -> nicht exotherm). Die Kontraposition hat stets denselben Wahrheitswert wie die ursprüngliche Aussage.",
    type: "contraposition",
  },
  {
    id: "imp-40",
    premise: "Wenn ein Patient eine Anämie hat, ist sein Hämoglobinwert erniedrigt.",
    conclusion: "Wenn der Hämoglobinwert nicht erniedrigt ist, hat der Patient keine Anämie.",
    isValid: true,
    explanation:
      "Gültige Kontraposition: A -> B (Anämie -> Hämoglobin niedrig) ist logisch äquivalent zu nicht-B -> nicht-A (Hämoglobin nicht niedrig -> keine Anämie). Die Kontraposition ist immer eine gültige Umformung.",
    type: "contraposition",
  },
  {
    id: "imp-41",
    premise: "Alle Wirbeltiere besitzen eine Wirbelsäule.",
    conclusion: "Wenn ein Tier keine Wirbelsäule besitzt, ist es kein Wirbeltier.",
    isValid: true,
    explanation:
      "Gültige Kontraposition: 'Alle A sind B' (Wirbeltier -> Wirbelsäule) ist äquivalent zu 'nicht-B -> nicht-A' (keine Wirbelsäule -> kein Wirbeltier). Dies ist die logisch äquivalente Kontraposition der Ausgangsaussage.",
    type: "contraposition",
  },
  {
    id: "imp-42",
    premise: "Wenn ein Stoff elektrisch leitfähig ist, enthält er frei bewegliche Ladungsträger.",
    conclusion:
      "Wenn ein Stoff keine frei beweglichen Ladungsträger enthält, ist er nicht elektrisch leitfähig.",
    isValid: true,
    explanation:
      "Gültige Kontraposition: A -> B (leitfähig -> frei bewegliche Ladungsträger) entspricht nicht-B -> nicht-A (keine Ladungsträger -> nicht leitfähig). Die Umformung zur Kontraposition bewahrt die logische Gültigkeit.",
    type: "contraposition",
  },

  // === NEW QUESTIONS: BICONDITIONAL (A <-> B, special cases) ===
  {
    id: "imp-43",
    premise:
      "Ein Patient hat genau dann Diabetes Typ 1, wenn seine Betazellen zerstört sind und er kein Insulin mehr produziert.",
    conclusion:
      "Dieser Patient produziert kein Insulin und seine Betazellen sind zerstört. Also hat er Diabetes Typ 1.",
    isValid: true,
    explanation:
      "Gültige Bikonditionale (Genau-dann-wenn): Bei einem Bikonditional (A <-> B) gilt sowohl A -> B als auch B -> A. Da die Bedingung 'Betazellen zerstört und kein Insulin' erfüllt ist, folgt zwingend 'Diabetes Typ 1'. Beide Richtungen der Implikation sind hier gültig.",
    type: "biconditional",
  },
  {
    id: "imp-44",
    premise: "Ein Dreieck ist genau dann gleichseitig, wenn alle drei Seiten gleich lang sind.",
    conclusion: "Alle drei Seiten dieses Dreiecks sind gleich lang. Also ist es gleichseitig.",
    isValid: true,
    explanation:
      "Gültige Bikonditionale: 'Genau dann wenn' bedeutet A <-> B. Beide Richtungen gelten: gleichseitig -> alle Seiten gleich UND alle Seiten gleich -> gleichseitig. Die Rückrichtung ist hier angewandt und gültig.",
    type: "biconditional",
  },
  {
    id: "imp-45",
    premise: "Eine Zahl ist genau dann durch 2 teilbar, wenn sie gerade ist.",
    conclusion: "Die Zahl 17 ist nicht gerade. Also ist sie nicht durch 2 teilbar.",
    isValid: true,
    explanation:
      "Gültige Bikonditionale mit Verneinung: Bei A <-> B gilt auch nicht-A <-> nicht-B. Die Zahl ist nicht gerade (nicht-B), also ist sie nicht durch 2 teilbar (nicht-A). Bei einem Bikonditional darf man in beide Richtungen schließen, auch mit Verneinung.",
    type: "biconditional",
  },
  {
    id: "imp-46",
    premise:
      "Ein Mensch gilt in Österreich genau dann als volljährig, wenn er mindestens 18 Jahre alt ist.",
    conclusion: "Frau Berger ist 25 Jahre alt. Also ist sie volljährig.",
    isValid: true,
    explanation:
      "Gültige Bikonditionale: 'Genau dann wenn' (A <-> B) erlaubt den Schluss in beide Richtungen. Da 25 >= 18 (Bedingung B erfüllt), folgt A (volljährig). Bei einem Bikonditional ist der Umkehrschluss — anders als bei einer einfachen Implikation — gültig.",
    type: "biconditional",
  },
];
