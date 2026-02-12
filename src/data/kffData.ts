// === KFF: Kognitive Fähigkeiten und Fertigkeiten ===

export const kffStrategyGuide = {
  zahlenfolgen: {
    title: "Strategie-Guide: Zahlenfolgen",
    sections: [
      {
        heading: "Grundprinzip",
        content:
          "Bei Zahlenfolgen musst du das Muster erkennen, das die Zahlen verbindet. Berechne immer zuerst die Differenzen zwischen aufeinanderfolgenden Zahlen. Wenn die Differenzen konstant sind, handelt es sich um eine arithmetische Folge.",
      },
      {
        heading: "Schritt-fuer-Schritt Vorgehen",
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
- Bei großen Spruengen an Potenzen oder Multiplikation denken
- Manchmal sind zwei verschachtelte Folgen enthalten (gerade und ungerade Positionen bilden je eigene Folge)
- Zeitmanagement: Wenn du nach 30 Sekunden kein Muster findest, markiere die Aufgabe und komme später zurück`,
      },
    ],
  },
  gedaechtnis: {
    title: "Strategie-Guide: Allergiepaesse merken",
    sections: [
      {
        heading: "Die Aufgabe",
        content:
          "Du bekommst 8 Allergieausweise mit je einem Namen, Geburtsdatum, Blutgruppe und 2-3 Allergien zu sehen (Lernphase: 8 Minuten). Dann werden Fragen zu den Ausweisen gestellt (Prüfphase).",
      },
      {
        heading: "Die Loci-Methode (Gedaechtnispalast)",
        content: `1. Wähle 8 bekannte Orte in deiner Wohnung (Eingangstür, Garderobe, Kueche, Bad, etc.)
2. Jeder Allergieausweis wird an einem Ort 'abgelegt'
3. Erstelle fuer jede Person ein lebhaftes Bild an diesem Ort:
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
- Konzentriere dich auf die schwierigsten Ausweise zuerst
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
          "Dir wird ein Wort gezeigt, dessen Buchstaben vertauscht wurden. Du musst erkennen, mit welchem Buchstaben das urspruengliche Wort beginnt. Diese Aufgabe testet deine Fähigkeit, Wörter schnell zu erkennen und mental zu rekonstruieren.",
      },
      {
        heading: "Strategien",
        content: `1. Buchstabenhäufigkeit analysieren: Welche Buchstaben kommen vor? Welche typischen deutschen Wortanfaenge sind möglich?
2. Bekannte Silben suchen: Erkenne Silben wie -ung, -keit, -heit, -schaft im Buchstabensalat
3. Zusammengesetzte Wörter: Viele deutsche Wörter sind zusammengesetzt - suche nach zwei bekannten Wortteilen
4. Konsonanten-Vokal-Muster: Deutsche Wörter beginnen häufig mit bestimmten Konsonantenkombinationen (Sch-, Str-, Bl-, Fr-, etc.)
5. Ausschlussmethode: Eliminiere Anfangsbuchstaben, die mit den vorhandenen Buchstaben kein sinnvolles Wort ergeben`,
      },
      {
        heading: "Typische Fallen und Tipps",
        content: `- Lass dich nicht von langen Wörtern einschuechtern - sie sind oft zusammengesetzt und leichter zu erkennen
- Bei kurzen Wörtern gibt es oft mehrere Möglichkeiten - prüfe alle Optionen
- Zeitmanagement: Max. 15-20 Sekunden pro Wort
- Wenn ein Wort nicht sofort erkennbar ist, suche nach auffälligen Buchstabengruppen (qu, sch, ch, ck)
- Uebe regelmäßig - mit der Zeit erkennst du Wörter immer schneller`,
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
        heading: "Gültige vs. ungültige Schluesse",
        content: `Gegeben: 'Wenn A, dann B' (A -> B)

GUELTIG:
- Modus Ponens: A ist wahr -> B muss wahr sein
- Modus Tollens (Kontraposition): B ist falsch -> A muss falsch sein
  ('Wenn es regnet, ist die Straße nass' = 'Straße nicht nass -> es regnet nicht')

UNGUELTIG (häufige Fehler!):
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
    explanation: "Differenzen: -5, -10, -15, -20, -25. Die Differenz nimmt jeweils um 5 zu. 50-25=25.",
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
    explanation:
      "Kubikzahlen (dritte Potenzen): 1³=1, 2³=8, 3³=27, 4³=64, 5³=125, 6³=216.",
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
    allergien: ["Erdnuesse", "Soja"],
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
    allergien: ["Cephalosporine", "Meeresfruchte"],
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
    allergien: ["Haselnuesse", "Birke-Pollen"],
  },
  {
    id: "aa2-4",
    name: "Maximilian Keller",
    geburtsdatum: "03.05.1991",
    blutgruppe: "AB+",
    allergien: ["Metamizol", "Roentgenkontrastmittel"],
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
      "Haselnuesse, Soja, Sesam",
      "Glutenunverträglichkeit, Weizen, Sesam",
      "Glutenunverträglichkeit, Soja, Erdnuesse",
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
    options: [
      "Wespengift",
      "Hausstaubmilben",
      "Eine Penicillin-artige Allergie",
      "Latex",
    ],
    correctAnswer: "Eine Penicillin-artige Allergie",
  },
];

export interface ImplikationQuestion {
  id: string;
  premise: string;
  conclusion: string;
  isValid: boolean;
  explanation: string;
}

export const implikationQuestions: ImplikationQuestion[] = [
  {
    id: "imp-1",
    premise: "Wenn ein Patient Fieber hat, dann ist sein CRP-Wert erhoht.",
    conclusion: "Der CRP-Wert des Patienten ist nicht erhoht. Also hat der Patient kein Fieber.",
    isValid: true,
    explanation:
      "Dies ist ein gültiger Modus Tollens: Wenn A -> B, und nicht-B, dann nicht-A. Wenn Fieber -> CRP erhoht, und CRP NICHT erhoht, dann kein Fieber.",
  },
  {
    id: "imp-2",
    premise: "Alle Säugetiere haben ein Herz mit vier Kammern.",
    conclusion: "Dieses Tier hat ein Herz mit vier Kammern. Also ist es ein Säugetier.",
    isValid: false,
    explanation:
      "Ungültiger Umkehrschluss! Auch Voegel haben ein Vierkammerherz. Aus 'Alle A sind B' folgt nicht 'Alle B sind A'.",
  },
  {
    id: "imp-3",
    premise: "Wenn jemand Arzt ist, dann hat er ein Medizinstudium abgeschlossen.",
    conclusion: "Lisa hat ein Medizinstudium abgeschlossen. Also ist Lisa Aerztin.",
    isValid: false,
    explanation:
      "Ungültiger Umkehrschluss. Man kann ein Medizinstudium abschließen, ohne als Arzt tätig zu sein (z.B. Forschung). Aus A -> B und B folgt NICHT A.",
  },
  {
    id: "imp-4",
    premise: "Wenn ein Medikament verschreibungspflichtig ist, dann darf es nur in der Apotheke verkauft werden.",
    conclusion: "Aspirin ist nicht verschreibungspflichtig. Also darf es auch außerhalb der Apotheke verkauft werden.",
    isValid: false,
    explanation:
      "Verneinung des Antecedens (ungültig). Nicht verschreibungspflichtig heißt nicht, dass es ueberall verkauft werden darf - es kann trotzdem apothekenpflichtig sein.",
  },
  {
    id: "imp-5",
    premise: "Wenn die Körpertemperatur unter 35°C sinkt, liegt eine Hypothermie vor.",
    conclusion: "Die Körpertemperatur des Patienten beträgt 33°C. Also liegt eine Hypothermie vor.",
    isValid: true,
    explanation:
      "Gültiger Modus Ponens: A (Temp < 35°C) ist wahr (33°C < 35°C), also folgt B (Hypothermie). Wenn A -> B, und A, dann B.",
  },
  {
    id: "imp-6",
    premise: "Wenn ein Patient eine bakterielle Infektion hat, dann hilft ein Antibiotikum.",
    conclusion: "Dem Patienten hilft das Antibiotikum nicht. Also hat er keine bakterielle Infektion.",
    isValid: true,
    explanation:
      "Gültiger Modus Tollens: Wenn A -> B, und nicht-B, dann nicht-A. Antibiotikum hilft nicht (nicht-B), also keine bakterielle Infektion (nicht-A).",
  },
  {
    id: "imp-7",
    premise: "Alle Studierenden, die die Prüfung bestanden haben, haben mindestens 60% der Punkte erreicht.",
    conclusion: "Max hat 75% der Punkte erreicht. Also hat Max die Prüfung bestanden.",
    isValid: false,
    explanation:
      "Ungültiger Umkehrschluss. Die Prämisse besagt nur, dass Bestehen mindestens 60% erfordert, aber es koennten weitere Kriterien gelten (z.B. mündliche Prüfung). Aus 'Alle A sind B' folgt nicht 'Alle B sind A'.",
  },
  {
    id: "imp-8",
    premise: "Wenn es draußen regnet, dann nimmt Peter seinen Regenschirm mit.",
    conclusion: "Peter hat seinen Regenschirm mitgenommen. Also regnet es draußen.",
    isValid: false,
    explanation:
      "Ungültiger Umkehrschluss (Bejahung des Konsequens). Peter koennte den Schirm auch vorsorglich mitnehmen oder weil Regen vorhergesagt wurde. Aus A -> B und B folgt nicht A.",
  },
  {
    id: "imp-9",
    premise: "Wenn ein Lebensmittel Gluten enthält, dann duerfen Zoeliakie-Patienten es nicht essen.",
    conclusion: "Reis enthält kein Gluten. Also duerfen Zoeliakie-Patienten Reis essen.",
    isValid: false,
    explanation:
      "Verneinung des Antecedens (ungültig). Nur weil die Bedingung 'enthält Gluten' nicht erfüllt ist, heißt das nicht automatisch, dass das Lebensmittel unbedenklich ist. Es koennten z.B. Kreuzkontaminationen vorliegen.",
  },
  {
    id: "imp-10",
    premise: "Wenn ein Patient auf Penicillin allergisch reagiert, darf ihm kein Penicillin verabreicht werden.",
    conclusion: "Dem Patienten wurde Penicillin verabreicht. Also ist er nicht allergisch auf Penicillin.",
    isValid: true,
    explanation:
      "Gültiger Modus Tollens: Wenn A (allergisch) -> B (kein Penicillin verabreichen), und nicht-B (Penicillin wurde verabreicht), dann nicht-A (nicht allergisch). Die Kontraposition ist logisch korrekt.",
  },
];
