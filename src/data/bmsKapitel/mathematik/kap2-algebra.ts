import type { Kapitel } from '../types';

export const mathKap2: Kapitel = {
  id: 'math-kap2',
  title: 'Algebra',
  subject: 'mathematik',
  icon: '📐',
  estimatedTime: '90 min',
  unterkapitel: [
    {
      id: 'ma-2-01',
      title: 'Gleichungen und Ungleichungen',
      content: `# Gleichungen und Ungleichungen

Gleichungen sind das Herzstück der Algebra. Sie erlauben es, unbekannte Größen präzise zu bestimmen, und bilden das Werkzeug für nahezu jede quantitative Fragestellung in Naturwissenschaft und Medizin. Von der Dosierungsberechnung in der Anästhesie über die Bestimmung von Gleichgewichtskonzentrationen in der Biochemie bis hin zur Modellierung physiologischer Prozesse — das sichere Lösen von Gleichungen ist keine abstrakte Fähigkeit, sondern eine klinisch unverzichtbare Kompetenz.

## Grundprinzip der Gleichungsumformung

Eine Gleichung ist eine Aussage der Form A = B, wobei A und B mathematische Ausdrücke sind. Das fundamentale Prinzip lautet: Eine Gleichung bleibt gültig, wenn man auf beiden Seiten dieselbe Operation durchführt. Erlaubte Operationen sind:

- Addition oder Subtraktion derselben Zahl auf beiden Seiten
- Multiplikation oder Division beider Seiten mit derselben Zahl (niemals durch null)
- Anwenden einer Funktion auf beiden Seiten (z.B. Wurzelziehen, Logarithmieren — Definitionsbereich beachten)

Ziel ist stets, die gesuchte Variable zu isolieren, d.h. allein auf einer Seite stehen zu haben.

## Lineare Gleichungen

Eine lineare Gleichung in einer Unbekannten x hat die Normalform ax + b = c, wobei a, b, c reelle Zahlen sind und a nicht null ist. Der Lösungsweg ist immer derselbe:

1. Alle Terme mit x auf eine Seite bringen (durch Addition oder Subtraktion)
2. Alle Zahlen (Konstanten) auf die andere Seite bringen
3. Durch den Koeffizienten von x dividieren

Beispiel: 5x minus 3 = 2x + 9. Subtrahiere 2x: 3x minus 3 = 9. Addiere 3: 3x = 12. Dividiere durch 3: x = 4. Probe: 5(4) minus 3 = 17 = 2(4) + 9. Korrekt.

Gleichungen mit Brüchen: Mit dem Hauptnenner (kgV aller Nenner) multiplizieren, um Brüche zu eliminieren. Beispiel: x/3 + x/4 = 7. Multipliziere mit 12: 4x + 3x = 84, also 7x = 84, x = 12.

Gleichungen mit Klammern: Zuerst ausmultiplizieren (Distributivgesetz), dann wie gewohnt vorgehen. Beispiel: 3(2x minus 4) = 2(x + 5) ergibt 6x minus 12 = 2x + 10, dann 4x = 22, x = 5,5.

## Gleichungssysteme mit zwei Unbekannten

Ein lineares Gleichungssystem mit zwei Gleichungen und zwei Unbekannten (x, y) hat im Allgemeinen genau eine Lösung.

Substitutionsverfahren: Eine Gleichung nach einer Variablen auflösen, Ergebnis einsetzen.

Beispiel: (I) x + y = 10 und (II) 3x minus y = 6. Aus (I): y = 10 minus x. Einsetzen in (II): 3x minus (10 minus x) = 6, also 4x = 16, x = 4. Dann y = 10 minus 4 = 6.

Additionsverfahren: Die Gleichungen mit Faktoren multiplizieren, sodass eine Variable eliminiert wird.

Beispiel: (I) 2x + 3y = 12 und (II) 4x minus y = 10. Multipliziere (II) mit 3: 12x minus 3y = 30. Addiere mit (I): 14x = 42, x = 3. Einsetzen: 2(3) + 3y = 12, y = 2.

## Quadratische Gleichungen

Eine quadratische Gleichung hat die Normalform ax hoch zwei + bx + c = 0 (a ungleich null). Die allgemeine Lösungsformel (Mitternachtsformel) lautet:

x = (minus b +/- Wurzel aus (b hoch zwei minus 4ac)) / (2a)

Der Ausdruck D = b hoch zwei minus 4ac heisst Diskriminante:
- D > 0: zwei verschiedene reelle Lösungen
- D = 0: genau eine Lösung (Doppellösung): x = minus b / (2a)
- D < 0: keine reelle Lösung

Beispiel: 2x hoch zwei minus 5x + 3 = 0. a = 2, b = minus 5, c = 3. D = 25 minus 24 = 1. x = (5 +/- 1) / 4. Also x1 = 6/4 = 1,5 und x2 = 4/4 = 1.

Faktorisierung: Wenn Lösungen ganze Zahlen sind, kann man faktorisieren. Beispiel: x hoch zwei minus 7x + 12 = 0. Zwei Zahlen mit Summe 7 und Produkt 12 sind 3 und 4. Also (x minus 3)(x minus 4) = 0, Lösungen x1 = 3, x2 = 4.

Quadratisches Ergänzen: x hoch zwei + px + q = 0 wird zu (x + p/2) hoch zwei = (p/2) hoch zwei minus q, woraus x = minus p/2 +/- Wurzel aus ((p/2) hoch zwei minus q).

## Ungleichungen

Ungleichungen verwenden statt = eines der Zeichen <, >, kleiner-gleich, groesser-gleich. Die Umformungsregeln sind fast identisch zu Gleichungen, mit einer entscheidenden Ausnahme:

Bei Multiplikation oder Division mit einer negativen Zahl kehrt sich das Ungleichungszeichen um!

Beispiel: minus 3x + 6 > 12. Subtrahiere 6: minus 3x > 6. Dividiere durch minus 3 (Vorzeichen dreht um!): x < minus 2.

Doppelte Ungleichungen: Alle Operationen auf alle drei Teile anwenden. Beispiel: 1 kleiner-gleich 2x minus 3 kleiner 7. Addiere 3 ueberall: 4 kleiner-gleich 2x kleiner 10. Dividiere durch 2: 2 kleiner-gleich x kleiner 5. Lösungsmenge: [2, 5).

## Klinische Anwendung: Dosierungsberechnungen

In der Klinik treten lineare Gleichungen bei nahezu jeder Dosierungsaufgabe auf.

Gesamtdosis [mg] = Dosierung [mg/kg] mal Körpergewicht [kg].

Fuer ein Medikament mit 5 mg/kg Dosis und einem 72-kg-Patienten: D = 5 mal 72 = 360 mg.

Liegt das Medikament als Lösung vor: V [mL] = D [mg] / c [mg/mL]. Fuer 360 mg bei c = 4 mg/mL: V = 360 / 4 = 90 mL.

Die Verdünnungsformel c1 mal V1 = c2 mal V2 ist ebenfalls eine lineare Gleichung. Beispiel: Stammlösung c1 = 20 mg/mL, Gebrauchslösung c2 = 5 mg/mL mit V2 = 100 mL. V1 = c2 mal V2 / c1 = 5 mal 100 / 20 = 25 mL Stammlösung, aufgefüllt auf 100 mL.`,
      lernziele: [
        'Lineare Gleichungen durch systematische Umformung nach einer Variablen auflösen und die Lösung mit einer Probe überprüfen',
        'Lineare Gleichungssysteme mit zwei Unbekannten mithilfe des Substitutions- und des Additionsverfahrens lösen',
        'Quadratische Gleichungen mit der allgemeinen Lösungsformel, durch Faktorisierung und durch Vieta-Beziehungen lösen sowie die Diskriminante interpretieren',
        'Ungleichungen korrekt umformen und dabei die Vorzeichenregel bei Multiplikation und Division mit negativen Zahlen beachten',
        'Klinische Dosierungs- und Verdünnungsaufgaben als lineare Gleichungen formulieren und lösen',
      ],
      sections: [
        {
          heading: 'Lineare Gleichungen — Umformungsregeln und Strategie',
          text: 'Das Grundprinzip: Was man auf einer Seite tut, muss man auf der anderen auch tun. Die vier erlaubten Basisoperationen sind Addition, Subtraktion, Multiplikation und Division mit derselben Zahl (Division niemals durch null). Bei Gleichungen mit Klammern zuerst ausmultiplizieren (Distributivgesetz); bei Gleichungen mit Brüchen zuerst mit dem Hauptnenner multiplizieren. Nach jeder Umformung empfiehlt sich eine Probe durch Einsetzen. In der Medizin erscheinen lineare Gleichungen bei der Berechnung der Infusionsrate (V = c mal t), der Verdünnungsformel (c1V1 = c2V2) oder der Dosierungsformel (Dosis = Konzentration mal Körpergewicht).',
          merksatz: 'Was links passiert, passiert auch rechts — die goldene Regel der Gleichungsumformung. Probe nie vergessen!',
        },
        {
          heading: 'Quadratische Gleichungen und die Diskriminante',
          text: 'Die Lösungsformel x = (minus b +/- Wurzel aus D) / (2a) ist das Universalwerkzeug für quadratische Gleichungen. Die Diskriminante D = b hoch zwei minus 4ac gibt vor der Rechnung Auskunft: D > 0 bedeutet zwei Lösungen, D = 0 bedeutet eine Doppellösung, D < 0 bedeutet keine reelle Lösung. Bei einfachen Koeffizienten ist das Faktorisieren via Vieta oft schneller. Quadratisches Ergänzen liefert zusätzlich den Scheitelpunkt der Parabel.',
          merksatz: 'Diskriminante D = b hoch zwei minus 4ac: D>0 ergibt 2 Lösungen, D=0 eine Lösung, D<0 keine reelle Lösung.',
        },
        {
          heading: 'Ungleichungen — die Vorzeichenfalle',
          text: 'Ungleichungen funktionieren wie Gleichungen, mit einer kritischen Ausnahme: Bei Multiplikation oder Division mit einer negativen Zahl dreht sich das Ungleichungszeichen um. Das ist die häufigste Fehlerquelle. Bei doppelten Ungleichungen müssen alle Operationen auf alle drei Teile angewendet werden. Die Lösungsmenge einer Ungleichung ist ein Intervall, kein einzelner Punkt.',
          merksatz: 'Multiplikation/Division mit negativer Zahl: Ungleichungszeichen umkehren! Aus < wird >, aus groesser-gleich wird kleiner-gleich.',
        },
        {
          heading: 'Gleichungssysteme — Substitution vs. Addition',
          text: 'Beim Substitutionsverfahren wird eine Gleichung nach einer Variablen aufgelöst und eingesetzt — geeignet, wenn eine Variable Koeffizient 1 oder minus 1 hat. Beim Additionsverfahren werden Gleichungen mit Faktoren multipliziert, sodass eine Variable bei Addition eliminiert wird. Beide Verfahren liefern dasselbe Ergebnis. In der Medizin erscheinen Systeme z.B. bei der Berechnung gemischter Lösungen oder bei der Bestimmung zweier unbekannter Parameter aus zwei Messwerten.',
          merksatz: 'Substitution: wenn eine Variable leicht isolierbar ist. Addition: wenn Koeffizienten sich leicht eliminieren lassen.',
        },
      ],
      merksätze: [
        'Was links passiert, passiert auch rechts — Grundregel jeder Gleichungsumformung.',
        'Bei Division/Multiplikation mit negativer Zahl: Ungleichungszeichen umkehren!',
        'Diskriminante D = b hoch zwei minus 4ac bestimmt die Anzahl reeller Lösungen.',
        'Lösungsformel: x = (minus b +/- Wurzel aus D) / (2a) — Mitternachtsformel.',
        'Vieta: Summe x1+x2 = minus b/a und Produkt x1 mal x2 = c/a.',
        'Probe immer durchführen: Lösung einsetzen und Gleichung überprüfen.',
        'Gleichungssysteme: Substitution oder Addition führen zum selben Ergebnis.',
        'Verdünnungsformel: c1 mal V1 = c2 mal V2 ist eine lineare Gleichung.',
        'Doppelte Ungleichung: alle Operationen auf alle drei Teile anwenden.',
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: 'Ein Intensivpatient (80 kg) soll mit Noradrenalin behandelt werden. Die Laufrate beträgt 0,1 µg/kg/min. Eine Fertigspritze enthält 4 mg Noradrenalin in 40 mL NaCl. Berechnen Sie die nötige Infusionsrate in mL/h. Wie lange reicht eine Fertigspritze?',
        answer: 'Schritt 1 — Dosierung: 0,1 µg/kg/min mal 80 kg = 8 µg/min. Schritt 2 — Konzentration der Spritze: 4 mg in 40 mL = 4000 µg in 40 mL = 100 µg/mL. Schritt 3 — Volumenrate: 8 µg/min geteilt durch 100 µg/mL = 0,08 mL/min. Umrechnung: 0,08 mal 60 = 4,8 mL/h. Schritt 4 — Laufzeit: 40 mL geteilt durch 4,8 mL/h ergibt ungefähr 8,33 h, also rund 8 Stunden 20 Minuten. Jeder Schritt ist eine lineare Gleichung in einer Unbekannten. Im klinischen Alltag müssen diese Berechnungen rasch und fehlerfrei ausgeführt werden, da Fehler bei vasoaktiven Substanzen lebensbedrohliche Folgen haben können. Die Formalisierung als Gleichungskette reduziert die Fehlerrate erheblich und ermöglicht systematische Plausibilitätsprüfung.',
      },
      klinischerBezug: 'In der Anästhesie und Intensivmedizin werden Infusionsraten vasoaktiver Medikamente wie Noradrenalin, Dobutamin und Propofol über lineare Gleichungen berechnet. Die Verdünnungsformel c1V1 = c2V2 wird täglich bei der Zubereitung von Chemotherapeutika, Antibiotika-Infusionen und Notfallmedikamenten angewendet. Fehler bei diesen Berechnungen sind eine häufige Ursache von Medikationsfehlern im Krankenhaus und können zu lebensbedrohlichen Über- oder Unterdosierungen führen.',
      selfTest: [
        {
          question: 'Lösen Sie: 4(x minus 2) = 2(x + 6). Was ist x?',
          options: ['10', '4', '8', '2', '14'],
          correctIndex: 0,
          explanation: 'Klammern auflösen: 4x minus 8 = 2x + 12. Alle x-Terme auf eine Seite: 4x minus 2x = 12 + 8, also 2x = 20, x = 10. Probe: 4(10 minus 2) = 32 und 2(10 + 6) = 32. Korrekt. Das Auflösen der Klammern mit dem Distributivgesetz ist der erste und wichtigste Schritt bei solchen Aufgaben. Die Probe durch Einsetzen zeigt die Korrektheit und sollte zur Gewohnheit werden.',
          hints: ['Zuerst Klammern auflösen: a(b+c) = ab+ac.', '4x minus 8 = 2x + 12, dann alle x auf eine Seite.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Welche Lösungen hat x hoch zwei minus 7x + 10 = 0?',
          options: ['x = 2 und x = 5', 'x = minus 2 und x = minus 5', 'x = 1 und x = 10', 'x = 7 und x = 0', 'Keine reelle Lösung'],
          correctIndex: 0,
          explanation: 'Diskriminante: D = 49 minus 40 = 9 > 0. Lösungsformel: x = (7 +/- 3) / 2. Damit x1 = 5 und x2 = 2. Alternativ Vieta: zwei Zahlen mit Summe 7 und Produkt 10 sind 2 und 5. Probe: 2 hoch zwei minus 7 mal 2 + 10 = 4 minus 14 + 10 = 0. Korrekt. Beide Methoden — Lösungsformel und Vieta — liefern dasselbe Ergebnis, wobei Vieta bei ganzzahligen Lösungen schneller ist.',
          hints: ['Berechne D = b hoch zwei minus 4ac mit a=1, b=minus 7, c=10.', 'Oder Vieta: zwei Zahlen mit Summe 7 und Produkt 10?'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Lösen Sie: minus 4x + 5 > 13. Was gilt für x?',
          options: ['x < minus 2', 'x > minus 2', 'x < 2', 'x > 2', 'x = minus 2'],
          correctIndex: 0,
          explanation: 'Subtrahiere 5: minus 4x > 8. Dividiere durch minus 4 — Vorzeichen dreht um!: x < minus 2. Dies ist die klassische Fehlerquelle bei Ungleichungen: Bei Division durch eine negative Zahl wird aus > ein <. Die Lösungsmenge ist das offene Intervall (minus Unendlich, minus 2). Ohne Vorzeichen-Umkehr wäre das Ergebnis falsch.',
          hints: ['Erst 5 subtrahieren: minus 4x > 8.', 'Division durch minus 4: Vorzeichen dreht um! > wird <.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Gegeben: (I) 2x + y = 8, (II) x minus y = 1. Was ist x?',
          options: ['3', '2', '4', '5', '1'],
          correctIndex: 0,
          explanation: 'Additionsverfahren: (I) + (II) ergibt 2x + y + x minus y = 8 + 1, also 3x = 9, x = 3. Dann y aus (I): 2(3) + y = 8, y = 2. Probe in (II): 3 minus 2 = 1. Korrekt. Das Additionsverfahren ist hier ideal, da sich y direkt eliminiert, weil die y-Koeffizienten entgegengesetzt gleich sind (+1 und minus 1).',
          hints: ['Addiere beide Gleichungen, um y zu eliminieren.', '(2x+y) + (x minus y) = 3x = 9.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Eine quadratische Gleichung hat D = minus 4. Was gilt für die Lösungsmenge?',
          options: ['Leere Menge (keine reelle Lösung)', 'Genau eine reelle Lösung', 'Zwei verschiedene reelle Lösungen', 'Unendlich viele Lösungen', 'Eine Lösung ist x = 0'],
          correctIndex: 0,
          explanation: 'D = b hoch zwei minus 4ac = minus 4 < 0. Der Ausdruck unter der Wurzel in der Lösungsformel ist negativ. Die Quadratwurzel einer negativen Zahl ist nicht reell. Daher gibt es keine reelle Lösung — die Gleichung hat nur komplexe Lösungen, die für den MedAT nicht relevant sind. Im physikalischen Kontext bedeutet D < 0, dass das modellierte Problem keine reale Lösung besitzt.',
          hints: ['Was steht unter der Wurzel in der Lösungsformel?', 'Wenn D < 0: Wurzel aus D ist nicht reell.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Eine Wirkstofflösung (c1 = 25 mg/mL) soll auf c2 = 5 mg/mL verdünnt werden. Wie viel mL der Stammlösung werden für 100 mL Gebrauchslösung benötigt?',
          options: ['20 mL', '25 mL', '10 mL', '50 mL', '5 mL'],
          correctIndex: 0,
          explanation: 'Verdünnungsformel: c1 mal V1 = c2 mal V2. Einsetzen: 25 mal V1 = 5 mal 100 = 500. V1 = 500 / 25 = 20 mL. Das bedeutet: 20 mL Stammlösung werden mit 80 mL Verdünnungsmittel auf 100 mL aufgefüllt. Einheitenkontrolle: (mg/mL) mal mL = mg, auf beiden Seiten gleich. Dies ist eine der häufigsten klinischen Berechnungsaufgaben bei der Zubereitung von Infusionen.',
          hints: ['Formel: c1 mal V1 = c2 mal V2. Hier ist V1 gesucht.', '25 mal V1 = 5 mal 100, also V1 = 500 / 25.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Lösen Sie die doppelte Ungleichung: 3 kleiner-gleich 2x minus 1 kleiner 9. Was ist die Lösungsmenge?',
          options: ['2 kleiner-gleich x kleiner 5', '1 kleiner-gleich x kleiner 4', '4 kleiner-gleich x kleiner 10', '2 kleiner x kleiner-gleich 5', '1 kleiner x kleiner 5'],
          correctIndex: 0,
          explanation: 'Addiere 1 zu allen drei Teilen: 4 kleiner-gleich 2x kleiner 10. Dividiere durch 2 (positiv, kein Vorzeichenwechsel): 2 kleiner-gleich x kleiner 5. Das halboffene Intervall [2, 5): x = 2 ist enthalten (kleiner-gleich), x = 5 ist nicht enthalten (strikt kleiner). Bei doppelten Ungleichungen werden alle Operationen auf alle drei Teile gleichzeitig angewendet — der einzige Unterschied zu einfachen Ungleichungen.',
          hints: ['Addiere 1 zu allen drei Teilen.', 'Dann durch 2 dividieren (positiv: kein Vorzeichenwechsel).'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Ein Patient (90 kg) erhält Morphin i.v. mit 0,05 mg/kg. Das Morphin liegt als 10 mg/10 mL vor. Wie viel mL werden injiziert?',
          options: ['4,5 mL', '9 mL', '0,5 mL', '2,25 mL', '5 mL'],
          correctIndex: 0,
          explanation: 'Schritt 1: Gesamtdosis = 0,05 mg/kg mal 90 kg = 4,5 mg. Schritt 2: Konzentration = 10 mg / 10 mL = 1 mg/mL. Schritt 3: Volumen = 4,5 mg / 1 mg/mL = 4,5 mL. Einheitenkontrolle: mg geteilt durch (mg/mL) ergibt mL. Die Kette aus drei linearen Gleichungen ist das Standardschema für jede Dosierungsberechnung — Dosis bestimmen, Konzentration ermitteln, Volumen berechnen.',
          hints: ['Schritt 1: Dosis = 0,05 mal 90 mg. Schritt 2: Konzentration = 10/10 mg/mL.', 'Volumen = Dosis / Konzentration = 4,5 / 1.'],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ma-2-02',
      title: 'Prozent-, Bruch- und Schlussrechnung',
      content: `# Prozent-, Bruch- und Schlussrechnung

Prozentrechnung, Bruchrechnung und der Dreisatz sind in der Medizin allgegenwärtig. Kaum eine klinische Situation kommt ohne diese Grundkenntnisse aus: die Hämatokritzahl (42%), die Sauerstoffsättigung (SpO2 98%), die Ejektionsfraktion des Herzens (EF > 55%), die Serumverdünnung (1:10), die Berechnung von Infusionszeiten oder die Dosierung nach Körpergewicht. Diese scheinbar einfachen Rechenarten sind am MedAT häufige Fehlerquellen, weil sie unter Zeitdruck präzise angewendet werden müssen.

## Prozentrechnung — die drei Grundfragen

Das Wort Prozent kommt von lateinisch pro centum, zu Deutsch je Hundert. Der Prozentsatz p gibt an, wie viele Teile von je 100 Teilen des Grundwerts gemeint sind.

Die fundamentale Formel: P = G mal p/100, wobei:
- P = Prozentwert (der gesuchte Anteil)
- G = Grundwert (die Ausgangsgröße, das Ganze)
- p = Prozentsatz (in %)

Die drei Grundfragen:

Frage 1 — Den Prozentwert berechnen: P = G mal p/100 = G mal 0,01 mal p.
Beispiel: Wie viel sind 15% von 320 mg? P = 320 mal 0,15 = 48 mg.
Rechentrick: 10% = Grundwert durch 10; 5% = halbe 10%; 1% = Grundwert durch 100.
15% = 10% + 5% = 32 + 16 = 48 mg.

Frage 2 — Den Grundwert berechnen: G = P / (p/100) = P mal 100/p.
Beispiel: 36 mg sind 12% von wie viel? G = 36 mal 100/12 = 300 mg.

Frage 3 — Den Prozentsatz berechnen: p = P/G mal 100.
Beispiel: 45 von 180 Patienten haben eine Komplikation. Wie viel Prozent? p = 45/180 mal 100 = 25%.

## Prozentuale Veränderungen — absolut vs. relativ

Absolute Änderung: Der arithmetische Unterschied zweier Werte (in derselben Einheit).

Relative Änderung (prozentuale Änderung): Die absolute Änderung bezogen auf den Ausgangswert.

Formel: relative Änderung = (Endwert minus Anfangswert) / Anfangswert mal 100%.

Wichtige Asymmetrie: Eine Erhöhung um 50% gefolgt von einer Senkung um 50% ergibt nicht den Ausgangswert. Ausgangswert 100, nach +50%: 150, nach minus 50%: 75. Die 50% Senkung wird auf den neuen Grundwert 150 berechnet.

Beispiel: Blutdruck sinkt von 160 auf 120 mmHg. Absolute Senkung: 40 mmHg. Relative Senkung: 40/160 mal 100 = 25%.

## Bruchrechnung — vollständige Regeln

Ein Bruch a/b (a = Zähler, b = Nenner) repräsentiert den Quotienten aus a und b.

Kürzen und Erweitern: Ein Bruch ändert seinen Wert nicht, wenn Zähler und Nenner mit derselben Zahl multipliziert (erweitern) oder dividiert (kürzen) werden.
15/25 = 3/5 (durch 5 gekürzt); 2/3 = 8/12 (mit 4 erweitert).

Addition und Subtraktion — gleichnamig machen: Brüche können nur addiert/subtrahiert werden, wenn sie denselben Nenner haben. Der gemeinsame Nenner ist das kgV der Nenner.
Beispiel: 1/6 + 1/4. kgV(6,4) = 12. Erweitern: 2/12 + 3/12 = 5/12.

Multiplikation: a/b mal c/d = (a mal c) / (b mal d). Kürzen vor dem Rechnen vereinfacht.
Beispiel: 3/8 mal 4/9 = 12/72 = 1/6.

Division — Kehrwert-Trick: a/b geteilt durch c/d = a/b mal d/c = (a mal d) / (b mal c).
Man dividiert nie durch einen Bruch — man multipliziert mit dem Kehrwert.
Beispiel: (3/4) geteilt durch (9/16) = 3/4 mal 16/9 = 48/36 = 4/3.

## Dreisatz (Schlussrechnung)

Der Dreisatz ist das universelle Werkzeug für Proportionalitätsaufgaben.

Direkter Dreisatz: Die beiden Größen sind direkt proportional — wenn die eine wächst, wächst die andere im selben Verhältnis.

Schema:
1. Ausgangsangabe aufstellen (z.B. 3 Tabletten enthalten 750 mg Wirkstoff)
2. Auf eine Einheit zurückführen (1 Tablette enthält 250 mg)
3. Auf die gesuchte Menge hochrechnen (5 Tabletten enthalten 1250 mg)

Beispiel Klinik: 50 kg Körpergewicht erfordern 100 mg. Für 70 kg: x = 100/50 mal 70 = 140 mg.

Indirekter Dreisatz: Die beiden Größen sind umgekehrt proportional — wenn die eine wächst, wird die andere kleiner. Das Produkt beider Größen bleibt konstant.

Erkennungsmerkmal: Mehr Helfer, weniger Zeit. Höhere Konzentration, kleineres Volumen (bei gleicher Stoffmenge).

Formel: x0 mal y0 = x mal y, also x = x0 mal y0 / y.

Beispiel: 6 Schwestern versorgen Patienten in 4 Stunden. Wie lange brauchen 4 Schwestern?
Gesamtarbeit = 6 mal 4 = 24 Schwesternstunden. Mit 4 Schwestern: 24/4 = 6 Stunden.

Gemischter Dreisatz: Zwei verschiedene Proportionalitätsverhältnisse werden kombiniert. Schrittweise auf Einheitsgröße zurückführen.

## Verhältnisse und Proportionen

Ein Verhältnis a:b gibt an, wie sich zwei Größen zueinander verhalten. Wichtige Eigenschaft:

Kreuzprodukt: a/b = c/d ist gleichbedeutend mit a mal d = b mal c.

Beispiel: Wenn x:4 = 9:12, dann 12 mal x = 4 mal 9 = 36, also x = 3.

Verdünnungsverhältnisse in der Medizin:
- Serumverdünnung 1:10: 1 Teil Serum, 9 Teile Puffer, Gesamtvolumen 10 Teile.
- Konzentration der Verdünnung = c_original / 10.
- Mehrfache Verdünnungen multiplizieren sich: zwei 1:10-Verdünnungen hintereinander ergeben 1:100.

Clearance-Formel: Clearance [mL/min] = (U mal V) / P, wobei U = Harnkonzentration, V = Harnfluss, P = Plasmakonzentration. Diese Proportion wird über direkten Dreisatz oder algebraische Umformung gelöst.`,
      lernziele: [
        'Die drei Grundfragen der Prozentrechnung (Prozentwert, Grundwert, Prozentsatz) sicher und schnell lösen',
        'Absoluten und relativen Unterschied unterscheiden und im klinischen Kontext korrekt interpretieren',
        'Brüche addieren, subtrahieren, multiplizieren und dividieren, auch bei gemischten Zahlen und komplexen Ausdrücken',
        'Direkten und indirekten Dreisatz erkennen, unterscheiden und auf klinische Dosierungsaufgaben anwenden',
        'Verhältnisse und Proportionen mit der Kreuzprodukt-Eigenschaft lösen',
      ],
      sections: [
        {
          heading: 'Prozentrechnung — drei Fragetypen sicher beherrschen',
          text: 'Die Grundformel P = G mal p/100 ist der Ausgangspunkt aller drei Fragetypen. Typ 1 (Prozentwert): P = G mal p/100 direkt ausrechnen. Typ 2 (Grundwert): Umstellen nach G = P mal 100/p. Typ 3 (Prozentsatz): p = P/G mal 100. Der häufigste klinische Fehler ist die Verwechslung von Prozentpunkten und prozentualer Änderung: Wenn die Überlebensrate von 80% auf 60% sinkt, ist das 20 Prozentpunkte weniger, aber eine relative Senkung von 25% (= 20/80 mal 100). Für den MedAT gilt: genau lesen, welche Angabe gefordert ist.',
          merksatz: 'P = G mal p/100. Prozentwert = Grundwert mal Prozentsatz/100. Umstellen nach G oder p für die anderen Fragetypen.',
        },
        {
          heading: 'Bruchrechnung — die vier Grundoperationen',
          text: 'Addition/Subtraktion: gleichnamig machen (kgV der Nenner finden), dann Zähler addieren/subtrahieren. Multiplikation: Zähler mal Zähler, Nenner mal Nenner — vorher kürzen spart Arbeit. Division: Kehrwert des zweiten Bruchs nehmen und multiplizieren. Merksatz: Niemals durch einen Bruch dividieren — immer mit dem Kehrwert multiplizieren. In der Medizin erscheinen Brüche überall: Hämatokrit = Erythrozytenvolumen / Gesamtblutvolumen, GFR-Berechnung nach Cockcroft-Gault, Clearance-Formeln.',
          merksatz: 'Division durch Bruch = Multiplikation mit dem Kehrwert: a/b geteilt durch c/d = a/b mal d/c.',
        },
        {
          heading: 'Dreisatz — direkter vs. indirekter Dreisatz erkennen',
          text: 'Der Schlüssel ist die Frage: Wenn Größe A steigt, steigt dann Größe B auch (direkt) oder sinkt sie (indirekt)? Beispiel direkt: Mehr Körpergewicht erfordert höhere Dosis. Beispiel indirekt: Mehr Schwestern brauchen weniger Zeit für dieselbe Arbeit. Im indirekten Dreisatz bleibt das Produkt beider Größen konstant. In der Klinik: Tropfrate ist direkt proportional zur Menge, indirekt proportional zur Zeit. Verdünnungsberechnung (c1 mal V1 = c2 mal V2) ist ein indirekter Dreisatz zwischen Konzentration und Volumen.',
          merksatz: 'Direkt: mehr ergibt mehr (gleicher Faktor). Indirekt: mehr ergibt weniger (Produkt konstant). Erkennungsfrage: Wenn A doppelt so groß wird, wird B dann auch doppelt oder halb so groß?',
        },
      ],
      merksätze: [
        'P = G mal p/100; G = P mal 100/p; p = P/G mal 100 — drei Formeln aus einer.',
        'Absolute Änderung: Differenz der Werte. Relative Änderung: Differenz/Ausgangswert mal 100%.',
        'Bruchdivision: niemals durch einen Bruch dividieren — immer mit dem Kehrwert multiplizieren.',
        'Direkter Dreisatz: x/y = const. (proportional). Indirekter Dreisatz: x mal y = const. (antiproportional).',
        'Verhältnis a:b = c:d ergibt Kreuzprodukt: a mal d = b mal c.',
        'Verdünnungsformel: c1 mal V1 = c2 mal V2 ist ein indirekter Dreisatz zwischen c und V.',
        '1% von G = G/100; 10% = G/10; 25% = G/4; 50% = G/2 — mentale Rechenwege.',
        'Bruch kürzen: Zähler und Nenner durch denselben Faktor dividieren — Wert bleibt gleich.',
        'Mehrfache Verdünnung 1:n multipliziert: 1:10 gefolgt von 1:10 ergibt 1:100 Gesamtverdünnung.',
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: 'Ein Labor führt eine 1:4-Verdünnung durch, indem es 1 Teil Serum mit 3 Teilen Puffer mischt. Der gemessene Antikörper-Titer in der Verdünnung beträgt 256 AU/mL. Wie hoch ist der Titer der unverdünnten Probe? Ein anderer Patient hat einen Hämatokrit von 27% (Normwert Frau: 38%). Um wie viel Prozent ist sein Hämatokrit relativ erniedrigt, und wie viele Prozentpunkte beträgt die absolute Erniedrigung?',
        answer: 'Aufgabe 1 — Titer der Originalprobe: Bei einer 1:4-Verdünnung ist die Konzentration auf 1/4 des Originalwerts gesunken. Originalkonzentration = gemessener Wert mal Verdünnungsfaktor = 256 mal 4 = 1024 AU/mL. Allgemein: bei 1:n-Verdünnung gilt c_original = c_verdünnt mal n. Aufgabe 2 — Hämatokrit: Absolute Erniedrigung: 38% minus 27% = 11 Prozentpunkte. Relative Erniedrigung: 11/38 mal 100 = 28,9%. Der Hämatokrit ist also um 11 Prozentpunkte (absolut) bzw. um etwa 29% (relativ) erniedrigt. Diese Unterscheidung ist klinisch bedeutsam: Eine relative Senkung von 29% klingt dramatischer als 11 Prozentpunkte, beschreibt aber denselben Befund aus unterschiedlicher Perspektive. Im klinischen Bericht sollten immer beide Angaben gemacht werden, um Missverständnisse zu vermeiden.',
      },
      klinischerBezug: 'Prozentrechnung ist in der Labormedizin allgegenwärtig: Sauerstoffsättigung SpO2 98%, Ejektionsfraktion EF über 55%, Hämatokrit 38 bis 50%, Lymphozytenanteil im Differentialblutbild. Die Verdünnungsformel c1V1 = c2V2 wird täglich bei der Zubereitung von Infusionslösungen, Chemotherapeutika und Antibiotika angewendet. Ein Fehler von 10% bei einer Zytostatikadosis kann die Wirksamkeit drastisch reduzieren oder schwere Nebenwirkungen verursachen.',
      selfTest: [
        {
          question: '18% von 350 sind?',
          options: ['63', '53', '70', '18', '36'],
          correctIndex: 0,
          explanation: 'P = G mal p/100 = 350 mal 18/100 = 350 mal 0,18 = 63. Rechentrick: 10% von 350 = 35; 8% von 350 = 350 mal 8/100 = 28. Summe: 35 + 28 = 63. Alternativ: 20% von 350 = 70, minus 2% von 350 = 7, ergibt 63. Beide Methoden liefern dasselbe Ergebnis und der Rechentrick über 10%+8% ist im Kopf schneller.',
          hints: ['Prozentwert = Grundwert mal Prozentsatz/100.', '10% von 350 = 35; 8% von 350 = 28.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: '84 sind 35% von wie viel?',
          options: ['240', '140', '420', '294', '196'],
          correctIndex: 0,
          explanation: 'Grundwert G = P mal 100/p = 84 mal 100/35 = 8400/35 = 240. Probe: 35% von 240 = 0,35 mal 240 = 84. Korrekt. Der Grundwert ist immer größer als der Prozentwert, wenn der Prozentsatz unter 100% liegt. Diese Frage testet den zweiten Fragetyp der Prozentrechnung, der häufig verwechselt wird.',
          hints: ['Grundwert = Prozentwert mal 100 / Prozentsatz.', '84 mal 100 / 35 = 8400 / 35 = ?'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ergibt 5/6 geteilt durch 5/12?',
          options: ['2', '25/72', '1/2', '10/6', '5/2'],
          correctIndex: 0,
          explanation: '5/6 geteilt durch 5/12 = 5/6 mal 12/5 = (5 mal 12) / (6 mal 5) = 60/30 = 2. Kürzen vor dem Rechnen: 5 im Zähler kürzt sich mit 5 im Nenner; 12/6 = 2. Vereinfacht: 1 mal 2 / (1 mal 1) = 2. Der Kehrwert-Trick ist die wichtigste Regel bei Bruchdivisionen — niemals durch einen Bruch dividieren, immer mit dem Kehrwert multiplizieren.',
          hints: ['Division durch 5/12 = Multiplikation mit 12/5.', '5/6 mal 12/5 = kürze 5 weg, kürze 6 und 12 zu 2.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Von 400 Studierenden bestehen 280 die Aufnahmeprüfung. Wie viel Prozent fallen durch?',
          options: ['30%', '70%', '28%', '40%', '20%'],
          correctIndex: 0,
          explanation: 'Durchgefallen: 400 minus 280 = 120 Studierende. Prozentsatz: 120/400 mal 100 = 30%. Alternativ: Bestehensquote = 280/400 mal 100 = 70%, also Durchfallquote = 100% minus 70% = 30%. Beide Wege führen zum selben Ergebnis. Der zweite Weg über die Bestehensquote ist oft einfacher im Kopf zu berechnen.',
          hints: ['Zuerst: Wie viele fallen durch? 400 minus 280 = ?', 'Prozentsatz = Durchgefallene / Gesamtzahl mal 100.'],
          difficulty: 1,
          tags: [],
        },
        {
          question: '5 Infusionspumpen füllen einen Vorratsbehälter in 12 Stunden. Wie lange brauchen 3 Pumpen?',
          options: ['20 h', '7,2 h', '36 h', '15 h', '4 h'],
          correctIndex: 0,
          explanation: 'Indirekter Dreisatz: Weniger Pumpen erfordern mehr Zeit. Gesamtarbeit = 5 mal 12 = 60 Pumpenstunden (diese Größe ist konstant). Mit 3 Pumpen: t = 60/3 = 20 Stunden. Erkennungsmerkmal des indirekten Dreisatzes: Mehr Pumpen würden weniger Zeit brauchen — wenn A steigt, sinkt B. Das Produkt A mal B bleibt konstant.',
          hints: ['Indirekter Dreisatz: Pumpen mal Zeit = konstant.', '5 mal 12 = 3 mal x, also x = 60/3.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Ein Blutdruck steigt von 120 auf 150 mmHg. Wie groß ist die relative Steigerung?',
          options: ['25%', '30 mmHg', '20%', '30%', '80%'],
          correctIndex: 0,
          explanation: 'Relative Änderung = (Endwert minus Anfangswert) / Anfangswert mal 100 = (150 minus 120) / 120 mal 100 = 30/120 mal 100 = 25%. Die absolute Steigerung ist 30 mmHg, die relative Steigerung 25%. Wichtig: Der Ausgangswert 120 ist der Grundwert, nicht der Endwert 150. Die Frage fragt explizit nach der relativen (prozentualen) Steigerung.',
          hints: ['Relative Änderung = Differenz / Anfangswert mal 100.', '(150 minus 120) / 120 mal 100 = 30/120 mal 100.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Eine Serumverdünnung 1:100 zeigt einen Titer von 64 AU/mL. Was ist der Titer der unverdünnten Probe?',
          options: ['6400 AU/mL', '64 AU/mL', '640 AU/mL', '6,4 AU/mL', '0,64 AU/mL'],
          correctIndex: 0,
          explanation: 'Bei 1:100-Verdünnung ist die Konzentration auf 1/100 des Originalwerts gesunken. Originalkonzentration = gemessener Wert mal Verdünnungsfaktor = 64 mal 100 = 6400 AU/mL. Formel: c_original = c_verdünnt mal n für eine 1:n-Verdünnung. Dies ist ein direkter Dreisatz rückwärts: In der Verdünnung (100-fach verdünnt) wurden 64 gemessen, also im Original das 100-Fache.',
          hints: ['1:100-Verdünnung: die gemessene Konzentration ist 1/100 der Originalkonzentration.', 'c_original = 64 mal 100 = ?'],
          difficulty: 2,
          tags: [],
        },
      ],
    },
    {
      id: 'ma-2-03',
      title: 'Quadratische Gleichungen und binomische Formeln',
      content: `# Quadratische Gleichungen und binomische Formeln

Die binomischen Formeln gehören zu den nützlichsten algebraischen Identitäten. Sie erlauben die schnelle Umformung von Produkten und Quadraten bestimmter Ausdrücke und bilden die Grundlage für das Faktorisieren quadratischer Ausdrücke. Das sichere Beherrschen dieser Formeln — vorwärts wie rückwärts — ist eine echte Zeitersparnis bei Prüfungen und in der Anwendung.

## Die drei binomischen Formeln — Herleitung und Anwendung

Alle drei binomischen Formeln entstehen durch einfaches Ausmultiplizieren. Ihre Gültigkeit kann jederzeit durch Ausmultiplizieren überprüft werden.

### Erste binomische Formel — Quadrat der Summe

(a + b) hoch zwei = a hoch zwei + 2ab + b hoch zwei

Herleitung: (a+b) hoch zwei = (a+b) mal (a+b) = a mal a + a mal b + b mal a + b mal b = a hoch zwei + ab + ba + b hoch zwei = a hoch zwei + 2ab + b hoch zwei.

Der mittlere Term 2ab ist der häufigste Vergesskandidat! Der typische Fehler: (a+b) hoch zwei = a hoch zwei + b hoch zwei. Das ist falsch.

Beispiele:
- (x + 3) hoch zwei = x hoch zwei + 6x + 9
- (2x + 5) hoch zwei = 4x hoch zwei + 20x + 25 (hier: a = 2x, b = 5)
- (10 + 0,01) hoch zwei = 100 + 0,2 + 0,0001 = 100,2001 (schnelle Näherungsrechnung)

### Zweite binomische Formel — Quadrat der Differenz

(a minus b) hoch zwei = a hoch zwei minus 2ab + b hoch zwei

Herleitung: (a minus b) hoch zwei = (a minus b)(a minus b) = a hoch zwei minus ab minus ba + b hoch zwei = a hoch zwei minus 2ab + b hoch zwei.

Das mittlere Glied ist negativ (minus 2ab), die äußeren Quadrate sind positiv. Merkhilfe: Minus in der Mitte.

Beispiele:
- (x minus 4) hoch zwei = x hoch zwei minus 8x + 16
- (3x minus 2) hoch zwei = 9x hoch zwei minus 12x + 4
- (Wurzel aus 5 minus 1) hoch zwei = 5 minus 2 Wurzel 5 + 1 = 6 minus 2 Wurzel 5

### Dritte binomische Formel — Differenz der Quadrate

(a + b)(a minus b) = a hoch zwei minus b hoch zwei

Herleitung: (a+b)(a minus b) = a hoch zwei minus ab + ba minus b hoch zwei = a hoch zwei minus b hoch zwei. Die mittleren Terme heben sich auf.

Diese Formel ist besonders wertvoll für schnelles Faktorisieren und mentale Arithmetik.

Beispiele:
- (x + 5)(x minus 5) = x hoch zwei minus 25
- (2x + 3)(2x minus 3) = 4x hoch zwei minus 9
- (Wurzel aus 7 + Wurzel aus 3)(Wurzel aus 7 minus Wurzel aus 3) = 7 minus 3 = 4
- 99 mal 101 = (100 minus 1)(100 + 1) = 10000 minus 1 = 9999 (mentale Arithmetik)

## Rückwärtsanwendung — Faktorisieren

Die binomischen Formeln rückwärts gelesen ermöglichen das Faktorisieren.

Muster erkennen:
- x hoch zwei + 6x + 9 = (x+3) hoch zwei — erste binomische Formel rückwärts
- x hoch zwei minus 8x + 16 = (x minus 4) hoch zwei — zweite binomische Formel rückwärts
- x hoch zwei minus 25 = (x+5)(x minus 5) — dritte binomische Formel rückwärts
- 4x hoch zwei minus 1 = (2x+1)(2x minus 1) — dritte binomische Formel mit a=2x, b=1

Vorgehen beim Faktorisieren:
1. Liegt ein vollständiges Quadrat vor? (a hoch zwei +/- 2ab + b hoch zwei) — erste oder zweite binomische Formel.
2. Liegt eine Differenz zweier Quadrate vor? (a hoch zwei minus b hoch zwei) — dritte binomische Formel.
3. Sonst: Vieta'sche Formeln oder allgemeine Lösungsformel verwenden.

## Rationalisierung von Nennern

Mit der dritten binomischen Formel lassen sich Nenner rationalisieren (Wurzeln aus dem Nenner entfernen).

Beispiel: 1 / (Wurzel aus 3 minus 1). Erweitern mit (Wurzel aus 3 + 1):
= (Wurzel aus 3 + 1) / ((Wurzel aus 3 minus 1)(Wurzel aus 3 + 1)) = (Wurzel aus 3 + 1) / (3 minus 1) = (Wurzel aus 3 + 1) / 2.

## Scheitelpunktform und quadratisches Ergänzen

Jede quadratische Funktion f(x) = ax hoch zwei + bx + c lässt sich durch quadratisches Ergänzen in die Scheitelpunktform umschreiben:

f(x) = a(x minus d) hoch zwei + e, wobei (d, e) der Scheitelpunkt (Vertex) der Parabel ist.

Der Scheitelpunkt ist das Minimum (wenn a > 0) oder das Maximum (wenn a < 0) der Funktion.

Berechnung des Scheitelpunkts:
- x-Koordinate: d = minus b / (2a)
- y-Koordinate: e = f(d) = c minus b hoch zwei / (4a)

Quadratisches Ergänzen — schrittweise:
f(x) = x hoch zwei + bx + c.
Schritt 1: x hoch zwei + bx = (x + b/2) hoch zwei minus (b/2) hoch zwei.
Schritt 2: f(x) = (x + b/2) hoch zwei minus (b/2) hoch zwei + c.
Scheitelpunkt: d = minus b/2, e = c minus b hoch zwei / 4.

Beispiel: f(x) = x hoch zwei minus 6x + 11.
Schritt 1: x hoch zwei minus 6x = (x minus 3) hoch zwei minus 9.
Schritt 2: f(x) = (x minus 3) hoch zwei minus 9 + 11 = (x minus 3) hoch zwei + 2.
Scheitelpunkt: (3, 2). Da a = 1 > 0 ist das Minimum der Funktion gleich 2, erreicht bei x = 3.

## Vieta'sche Formeln

Für eine quadratische Gleichung x hoch zwei + px + q = 0 (führender Koeffizient 1) mit den Lösungen x1 und x2 gilt:

- x1 + x2 = minus p (Summe der Lösungen = negativer Koeffizient von x)
- x1 mal x2 = q (Produkt der Lösungen = konstantes Glied)

Herleitung: x hoch zwei + px + q = (x minus x1)(x minus x2) = x hoch zwei minus (x1+x2)x + x1 mal x2. Koeffizientenvergleich ergibt die Formeln.

Anwendung: x hoch zwei minus 5x + 6 = 0. Gesucht: zwei Zahlen mit Summe 5 und Produkt 6. Kandidaten: 2 und 3 (2+3=5, 2 mal 3=6). Also x1=2, x2=3.

Für allgemeine ax hoch zwei + bx + c = 0 gilt: x1+x2 = minus b/a und x1 mal x2 = c/a.

Die Vieta'schen Formeln ermöglichen auch die Prüfung von Ergebnissen: Summe und Produkt der gefundenen Lösungen müssen stimmen.`,
      lernziele: [
        'Die drei binomischen Formeln auswendig kennen, herleiten und vorwärts sowie rückwärts (zum Faktorisieren) anwenden',
        'Quadratische Ausdrücke durch Erkennen des Musters faktorisieren (vollständige Quadrate und Differenz der Quadrate)',
        'Den Scheitelpunkt einer Parabel durch quadratisches Ergänzen oder direkte Formel berechnen und die Scheitelpunktform interpretieren',
        'Die Vieta\'schen Formeln zum schnellen Lösen quadratischer Gleichungen und zur Lösungsprüfung nutzen',
      ],
      sections: [
        {
          heading: 'Die drei binomischen Formeln — auswendig und sicher',
          text: 'Formel 1: (a+b) hoch zwei = a hoch zwei + 2ab + b hoch zwei. Formel 2: (a minus b) hoch zwei = a hoch zwei minus 2ab + b hoch zwei. Formel 3: (a+b)(a minus b) = a hoch zwei minus b hoch zwei. Der häufigste Fehler ist (a+b) hoch zwei = a hoch zwei + b hoch zwei ohne den mittleren Term. Zum Beweis: einfach ausmultiplizieren. Merkhilfe: Erstes Quadrat, doppeltes Produkt, zweites Quadrat für Formel 1 und 2. Formel 3 ist die Differenz der Quadrate — die mittleren Terme heben sich auf. Rückwärts gelesen ermöglicht Formel 3 das schnelle mentale Rechnen: 98 mal 102 = (100 minus 2)(100 + 2) = 10000 minus 4 = 9996.',
          merksatz: '(a+b) hoch zwei = a hoch zwei + 2ab + b hoch zwei — der mittlere Term 2ab ist der häufigste Vergesskandidat!',
        },
        {
          heading: 'Scheitelpunktform und quadratisches Ergänzen',
          text: 'Die Scheitelpunktform f(x) = a(x minus d) hoch zwei + e zeigt direkt das Minimum oder Maximum: (d, e) ist der Scheitelpunkt. Die x-Koordinate d = minus b/(2a) ist leicht zu merken — sie entspricht der x-Koordinate der Symmetrieachse der Parabel. Quadratisches Ergänzen: x hoch zwei + bx wird ergänzt zu (x + b/2) hoch zwei minus (b/2) hoch zwei. Dies ist die Herleitung der allgemeinen Lösungsformel. In der Medizin führen Optimierungsprobleme (minimale Kosten, maximale Wirkung bei minimaler Dosis) zu Parabeln, deren Scheitelpunkt das Optimum beschreibt.',
          merksatz: 'Scheitelpunkt: d = minus b/(2a); e = f(d). Bei a>0: Minimum; bei a<0: Maximum.',
        },
        {
          heading: 'Vieta und Faktorisierung — schnelles Lösen',
          text: 'Für x hoch zwei + px + q = 0 sucht man zwei Zahlen, die addiert minus p und multipliziert q ergeben. Sind diese Zahlen ganze Zahlen, ist Faktorisieren schneller als die Lösungsformel. Beispiel: x hoch zwei minus 7x + 12 = 0: Summe = 7, Produkt = 12, gesucht sind 3 und 4. Also (x minus 3)(x minus 4) = 0. Wenn keine ganzzahligen Lösungen erkennbar sind, muss die allgemeine Lösungsformel verwendet werden. Vieta eignet sich auch zur Probe: Wenn x1+x2 ungleich minus b/a oder x1 mal x2 ungleich c/a, liegt ein Rechenfehler vor.',
          merksatz: 'Vieta für x hoch zwei + px + q = 0: Summe der Lösungen = minus p; Produkt = q. Zwei Zahlen finden, die beides erfüllen.',
        },
      ],
      merksätze: [
        '(a+b) hoch zwei = a hoch zwei + 2ab + b hoch zwei — nie vergessen: der mittlere Term 2ab!',
        '(a minus b) hoch zwei = a hoch zwei minus 2ab + b hoch zwei — mittlerer Term negativ.',
        '(a+b)(a minus b) = a hoch zwei minus b hoch zwei — Differenz der Quadrate.',
        'Scheitelpunkt: d = minus b/(2a); e = f(d) = c minus b hoch zwei / (4a).',
        'Vieta: x1+x2 = minus b/a; x1 mal x2 = c/a für ax hoch zwei + bx + c = 0.',
        'Quadratisches Ergänzen: x hoch zwei + bx = (x + b/2) hoch zwei minus (b/2) hoch zwei.',
        'Rationalisierung: Nenner mit konjugiertem Ausdruck erweitern und dritte binomische Formel anwenden.',
        'Faktorisieren: erst a hoch zwei +/- 2ab + b hoch zwei oder a hoch zwei minus b hoch zwei prüfen, dann Vieta, zuletzt Lösungsformel.',
        'Mentale Arithmetik: 97 mal 103 = (100 minus 3)(100 + 3) = 10000 minus 9 = 9991.',
        'Diskriminante D > 0: Parabel schneidet x-Achse zweimal. D = 0: berührt x-Achse. D < 0: schneidet nicht.',
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: 'Eine kreisförmige Wundfläche vergrößert sich täglich. Am Morgen hat der Wundrand Radius (x+3) cm, am Abend Radius (x+7) cm. Die Abend-Fläche beträgt das 4-Fache der Morgen-Fläche. Bestimmen Sie x und die Radien. Welche Beziehung zwischen Radius und Fläche liegt vor?',
        answer: 'Kreisfläche A = pi mal r hoch zwei. Morgens: A1 = pi mal (x+3) hoch zwei. Abends: A2 = pi mal (x+7) hoch zwei. Bedingung: A2 = 4 mal A1. Einsetzen: pi mal (x+7) hoch zwei = 4 mal pi mal (x+3) hoch zwei. Kürze pi: (x+7) hoch zwei = 4 mal (x+3) hoch zwei. Wurzel ziehen: x+7 = 2(x+3) oder x+7 = minus 2(x+3). Fall 1: x+7 = 2x+6, also x = 1. Fall 2: x+7 = minus 2x minus 6, also 3x = minus 13, x = minus 13/3 (ergibt negativen Radius, ausgeschlossen). Lösung: x = 1. Radius morgens: 4 cm. Radius abends: 8 cm. Probe: A1 = pi mal 16, A2 = pi mal 64 = 4 mal pi mal 16. Korrekt. Der Zusammenhang zwischen Radius und Fläche ist quadratisch: Bei Verdopplung des Radius vervierfacht sich die Fläche. Dies ist keine lineare Proportionalität, sondern eine quadratische Beziehung.',
      },
      klinischerBezug: 'Quadratische Zusammenhänge finden sich in der Medizin bei der Berechnung der Körperoberfläche BSA, die für Chemotherapiedosierungen entscheidend ist: BSA in m hoch zwei ist ungefähr gleich der Wurzel aus (Größe in cm mal Gewicht in kg geteilt durch 3600). Zytostatikadosen werden auf die BSA bezogen, um individuelle Unterschiede in der Körpergröße zu berücksichtigen. Die dritte binomische Formel erscheint bei der Rationalisierung von Wurzelausdrücken in Berechnungen zur Schallausbreitung und beim Berechnen von Gefäßwiderständen.',
      selfTest: [
        {
          question: 'Was ergibt (3x minus 4) hoch zwei?',
          options: ['9x hoch zwei minus 24x + 16', '9x hoch zwei + 16', '6x hoch zwei minus 24x + 16', '9x hoch zwei minus 12x + 16', '9x hoch zwei minus 24x minus 16'],
          correctIndex: 0,
          explanation: '(3x minus 4) hoch zwei = (3x) hoch zwei minus 2 mal (3x) mal 4 + 4 hoch zwei = 9x hoch zwei minus 24x + 16. Zweite binomische Formel mit a = 3x und b = 4. Mittlerer Term: minus 2 mal (3x) mal 4 = minus 24x. Äußere Quadrate: (3x) hoch zwei = 9x hoch zwei und 4 hoch zwei = 16. Der häufige Fehler wäre das Vergessen des mittleren Terms oder ein falsches Vorzeichen.',
          hints: ['(a minus b) hoch zwei = a hoch zwei minus 2ab + b hoch zwei mit a=3x und b=4.', '(3x) hoch zwei = 9x hoch zwei; 2 mal (3x) mal 4 = 24x; 4 hoch zwei = 16.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welche Faktorisierung gilt für 4x hoch zwei minus 49?',
          options: ['(2x+7)(2x minus 7)', '(4x+7)(x minus 7)', '(2x minus 7) hoch zwei', '(4x minus 7)(x+7)', '(2x+49)(2x minus 1)'],
          correctIndex: 0,
          explanation: '4x hoch zwei minus 49 = (2x) hoch zwei minus 7 hoch zwei. Dritte binomische Formel: (2x+7)(2x minus 7). Erkenne das Muster: Differenz zweier Quadrate a hoch zwei minus b hoch zwei mit a = 2x und b = 7. Probe: (2x+7)(2x minus 7) = 4x hoch zwei minus 14x + 14x minus 49 = 4x hoch zwei minus 49. Korrekt.',
          hints: ['Erkenne a hoch zwei minus b hoch zwei mit 4x hoch zwei = (2x) hoch zwei und 49 = 7 hoch zwei.', '(a+b)(a minus b) = a hoch zwei minus b hoch zwei.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ist der Scheitelpunkt von f(x) = 2x hoch zwei minus 8x + 10?',
          options: ['(2, 2)', '(minus 2, 2)', '(4, 10)', '(2, 10)', '(minus 4, 2)'],
          correctIndex: 0,
          explanation: 'Scheitelpunkt-x: d = minus b / (2a) = minus (minus 8) / (2 mal 2) = 8/4 = 2. Scheitelpunkt-y: e = f(2) = 2 mal 4 minus 8 mal 2 + 10 = 8 minus 16 + 10 = 2. Scheitelpunkt: (2, 2). Da a = 2 > 0 ist das ein Minimum. Quadratisches Ergänzen bestätigt: 2(x hoch zwei minus 4x + 5) = 2((x minus 2) hoch zwei + 1) = 2(x minus 2) hoch zwei + 2.',
          hints: ['d = minus b/(2a) = 8/4 = 2.', 'e = f(2) = 2 mal 4 minus 8 mal 2 + 10 = ?'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Mit Vieta: Welche Gleichung hat die Lösungen x1 = minus 2 und x2 = 5?',
          options: ['x hoch zwei minus 3x minus 10 = 0', 'x hoch zwei + 3x minus 10 = 0', 'x hoch zwei minus 3x + 10 = 0', 'x hoch zwei + 7x minus 10 = 0', 'x hoch zwei minus 7x + 10 = 0'],
          correctIndex: 0,
          explanation: 'Summe: x1 + x2 = minus 2 + 5 = 3 = minus p, also p = minus 3. Produkt: x1 mal x2 = minus 2 mal 5 = minus 10 = q. Gleichung: x hoch zwei minus 3x minus 10 = 0. Probe: (x + 2)(x minus 5) = x hoch zwei minus 5x + 2x minus 10 = x hoch zwei minus 3x minus 10. Korrekt. Die Vieta-Methode liefert direkt die Gleichungskoeffizienten aus Summe und Produkt der Lösungen.',
          hints: ['Summe der Lösungen = minus 2 + 5 = 3 = minus p, also p = ?', 'Produkt = minus 2 mal 5 = minus 10 = q. Gleichung: x hoch zwei + px + q = 0.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ergibt (Wurzel aus 6 + Wurzel aus 2)(Wurzel aus 6 minus Wurzel aus 2)?',
          options: ['4', 'Wurzel aus 8', '8', 'Wurzel aus 4', '2 Wurzel aus 3'],
          correctIndex: 0,
          explanation: '(Wurzel aus 6 + Wurzel aus 2)(Wurzel aus 6 minus Wurzel aus 2) = (Wurzel aus 6) hoch zwei minus (Wurzel aus 2) hoch zwei = 6 minus 2 = 4. Dritte binomische Formel mit a = Wurzel aus 6 und b = Wurzel aus 2. Diese Technik der Rationalisierung ist nützlich, um Nenner von Wurzelausdrücken zu bereinigen und exakte Ergebnisse zu erhalten.',
          hints: ['(a+b)(a minus b) = a hoch zwei minus b hoch zwei mit a = Wurzel aus 6 und b = Wurzel aus 2.', '(Wurzel aus 6) hoch zwei = 6; (Wurzel aus 2) hoch zwei = 2.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welches Ergebnis liefert 103 mal 97 bei Anwendung der dritten binomischen Formel?',
          options: ['9991', '10591', '10000', '10609', '10201'],
          correctIndex: 0,
          explanation: '103 mal 97 = (100 + 3)(100 minus 3) = 100 hoch zwei minus 3 hoch zwei = 10000 minus 9 = 9991. Dritte binomische Formel mit a = 100 und b = 3. Diese mentale Rechenstrategie ist sehr schnell: Man erkennt das Muster (Mittelwert minus Differenz)(Mittelwert plus Differenz) und berechnet Mittelwert hoch zwei minus Differenz hoch zwei. So lassen sich viele Multiplikationen im Kopf lösen.',
          hints: ['Schreibe 103 = 100+3 und 97 = 100 minus 3, dann (100+3)(100 minus 3) = ?', '100 hoch zwei minus 3 hoch zwei = 10000 minus 9 = ?'],
          difficulty: 3,
          tags: [],
        },
      ],
    },
    {
      id: 'ma-2-04',
      title: 'Potenz- und Wurzelgesetze',
      content: `# Potenz- und Wurzelgesetze

Potenzen und Wurzeln sind in den Naturwissenschaften und der Medizin allgegenwärtig: Exponentialwachstum von Bakterien, radioaktiver Zerfall, Pharmakokinetik, pH-Berechnung, Schallpegel in Dezibel — all diese Konzepte basieren auf Potenz- und Logarithmengesetzen. Das sichere Fundament in diesen Rechenregeln ist für den MedAT unverzichtbar und bildet die Brücke zwischen elementarer Mathematik und naturwissenschaftlichen Anwendungen.

## Definition und Grundbegriffe

Eine Potenz a hoch n ist das n-fache Produkt der Basis a mit sich selbst:
a hoch n = a mal a mal a ... mal a (n Faktoren).

Dabei ist a die Basis und n der Exponent. Diese Definition gilt zunächst für positive ganzzahlige Exponenten und wird dann auf null, negative und gebrochene Exponenten erweitert.

## Die acht Potenzgesetze — vollständige Übersicht

Für beliebige reelle Basen a und b (mit a, b > 0 bei gebrochenen Exponenten) und beliebige reelle Exponenten m und n:

1. Multiplikation gleicher Basis — Exponenten addieren:
a hoch n mal a hoch m = a hoch (n+m).
Beispiel: 2 hoch 4 mal 2 hoch 3 = 2 hoch 7 = 128.

2. Division gleicher Basis — Exponenten subtrahieren:
a hoch n / a hoch m = a hoch (n minus m).
Beispiel: 5 hoch 6 / 5 hoch 2 = 5 hoch 4 = 625.

3. Potenz einer Potenz — Exponenten multiplizieren:
(a hoch n) hoch m = a hoch (n mal m).
Beispiel: (3 hoch 2) hoch 4 = 3 hoch 8 = 6561.
ACHTUNG: (a hoch n) hoch m ist nicht gleich a hoch (n+m)! Es ist Multiplikation, nicht Addition der Exponenten.

4. Potenz eines Produkts:
(a mal b) hoch n = a hoch n mal b hoch n.
Beispiel: (2 mal 5) hoch 3 = 2 hoch 3 mal 5 hoch 3 = 8 mal 125 = 1000 = 10 hoch 3.
Aber: (a+b) hoch n ist nicht gleich a hoch n + b hoch n!

5. Potenz eines Quotienten:
(a/b) hoch n = a hoch n / b hoch n.
Beispiel: (2/3) hoch 4 = 16/81.

6. Nullter Exponent:
a hoch 0 = 1 (für alle a ungleich 0).
Herleitung: a hoch n / a hoch n = a hoch (n minus n) = a hoch 0, aber auch a hoch n / a hoch n = 1.

7. Negativer Exponent:
a hoch (minus n) = 1 / a hoch n.
Beispiel: 2 hoch (minus 3) = 1/8 = 0,125.

8. Gebrochener Exponent:
a hoch (1/n) = n-te Wurzel aus a.
a hoch (m/n) = n-te Wurzel aus (a hoch m) = (n-te Wurzel aus a) hoch m.
Beispiel: 8 hoch (2/3) = (Kubikwurzel aus 8) hoch 2 = 2 hoch 2 = 4.

## Wurzelgesetze

Wurzeln sind spezielle Potenzen: n-te Wurzel aus a = a hoch (1/n). Die Wurzelgesetze folgen direkt aus den Potenzgesetzen.

Produktregel: Wurzel aus (a mal b) = Wurzel aus a mal Wurzel aus b (nur für a, b größer-gleich 0).
Anwendung: Wurzel aus 72 = Wurzel aus (36 mal 2) = 6 mal Wurzel aus 2. Man sucht den größten quadratischen Teiler.

Quotientenregel: Wurzel aus (a/b) = Wurzel aus a / Wurzel aus b (für a größer-gleich 0, b > 0).
Beispiel: Wurzel aus (9/16) = 3/4.

Potenz und Wurzel: (Wurzel aus a) hoch 2 = a und Wurzel aus (a hoch 2) = Betrag von a.
Wichtig: Wurzel aus (a hoch 2) = Betrag von a, denn Wurzel aus 9 = 3 = Betrag von 3 = Betrag von (minus 3). Die Quadratwurzel ist immer nicht-negativ.

Rationalisierung: Wurzeln im Nenner sollten durch Erweitern mit der konjugierten Form (dritte binomische Formel) eliminiert werden.

## Logarithmengesetze

Der Logarithmus ist die Umkehrfunktion der Exponentialfunktion. Die Frage, die der Logarithmus beantwortet: Auf welchen Exponenten muss ich die Basis a heben, um x zu erhalten?

Definition: log_a(x) = y genau dann, wenn a hoch y = x (für a > 0, a ungleich 1, x > 0).

Wichtige Spezialfälle:
- log Basis 10 von x = dekadischer Logarithmus lg(x)
- log Basis e von x = natürlicher Logarithmus ln(x) mit e ungefähr gleich 2,71828
- ln(e) = 1; ln(1) = 0; ln(e hoch x) = x; e hoch (ln x) = x

Die drei Logarithmenregeln:

Produktregel: log_a(x mal y) = log_a(x) + log_a(y).
Beispiel: lg(200) = lg(2 mal 100) = lg(2) + lg(100) = 0,301 + 2 = 2,301.

Quotientenregel: log_a(x / y) = log_a(x) minus log_a(y).
Beispiel: lg(0,01) = lg(1/100) = lg(1) minus lg(100) = 0 minus 2 = minus 2.

Potenzregel: log_a(x hoch n) = n mal log_a(x).
Beispiel: lg(1000) = lg(10 hoch 3) = 3 mal lg(10) = 3.

Basiswechselformel: log_a(x) = log_b(x) / log_b(a).
Wichtigste Anwendung: ln(x) = lg(x) / lg(e) ungefähr gleich lg(x) / 0,4343 ungefähr gleich 2,303 mal lg(x).

## Der natürliche Logarithmus und die Euler'sche Zahl

Die Euler'sche Zahl e ungefähr gleich 2,71828 ist eine fundamentale mathematische Konstante. Sie ist die natürliche Basis des Wachstums, weil die Ableitung von e hoch x gleich e hoch x ist — die Funktion wächst proportional zu ihrem eigenen Wert.

In der Biologie und Medizin folgen das Wachstum von Bakterienkulturen, die Abnahme von Medikamenten im Blut und der radioaktive Zerfall dem Gesetz N(t) = N0 mal e hoch (k mal t), wobei k > 0 für Wachstum und k < 0 für Zerfall steht.

Wichtige Werte: e hoch 0 = 1; e hoch 1 ungefähr 2,718; e hoch (minus 1) ungefähr 0,368. ln(1) = 0; ln(e) = 1; ln(2) ungefähr 0,693; ln(10) ungefähr 2,303.

## Halbwertszeit und Exponentialfunktion

Die Halbwertszeit T(1/2) ist die Zeit, nach der eine Größe auf die Hälfte ihres Ausgangswerts abgesunken ist.

N(t) = N0 mal (1/2) hoch (t / T(1/2)) = N0 mal 2 hoch (minus t / T(1/2)) = N0 mal e hoch (minus lambda mal t),

wobei lambda = ln(2) / T(1/2) ungefähr gleich 0,693 / T(1/2) die Zerfallskonstante ist.

Beispiele:
- Nach 1 Halbwertszeit: 50%
- Nach 2 Halbwertszeiten: 25%
- Nach 3 Halbwertszeiten: 12,5%
- Nach 5 Halbwertszeiten: 3,125% (klinisch: Medikament gilt als ausgewaschen)
- Nach 10 Halbwertszeiten: unter 0,1%

pH-Rechnung: pH = minus log Basis 10 von [H+].
Für pH 7,4: [H+] = 10 hoch (minus 7,4) ungefähr 4 mal 10 hoch (minus 8) mol/L.
Die logarithmische pH-Skala bedeutet: Ein Unterschied von 1 pH-Einheit entspricht einer 10-fachen Änderung der H+-Konzentration. Deshalb sind kleine pH-Änderungen im Blut (Normalbereich: 7,35 bis 7,45) klinisch bedeutsam.

## Zehnerpotenzen und wissenschaftliche Notation

Sehr große und sehr kleine Zahlen werden als Produkt einer Zahl zwischen 1 und 10 und einer Zehnerpotenz geschrieben:

a mal 10 hoch n (wissenschaftliche Notation oder Exponentialschreibweise).

Beispiele:
- Avogadro-Konstante: 6,022 mal 10 hoch 23 pro Mol
- Elementarladung: 1,602 mal 10 hoch (minus 19) C
- Erythrozytendurchmesser: ungefähr 8 Mikrometer = 8 mal 10 hoch (minus 6) m

Rechenregel: (a mal 10 hoch n) mal (b mal 10 hoch m) = (a mal b) mal 10 hoch (n+m).
Beispiel: (3 mal 10 hoch 4) mal (2 mal 10 hoch 3) = 6 mal 10 hoch 7.`,
      lernziele: [
        'Alle acht Potenzgesetze sicher anwenden, insbesondere negative und gebrochene Exponenten korrekt handhaben',
        'Wurzeln vereinfachen durch Erkennen quadratischer Teiler und Anwendung der Produktregel',
        'Die drei Logarithmenregeln (Produkt, Quotient, Potenz) anwenden und pH-Berechnungen durchführen',
        'Halbwertszeit-Berechnungen mit der Exponentialfunktion für Pharmakokinetik und Radioaktivität durchführen',
        'Zahlen in wissenschaftlicher Notation schreiben und mit Zehnerpotenzen rechnen',
      ],
      sections: [
        {
          heading: 'Potenzgesetze — die acht Grundregeln mit Tücken',
          text: 'Die drei häufigsten Fehler: Erstens wird (a hoch n) hoch m = a hoch (n mal m) mit a hoch (n+m) verwechselt — es ist Multiplikation, nicht Addition. Zweitens gilt (a+b) hoch n ungleich a hoch n + b hoch n — das Potenzgesetz gilt nur für Produkte, nicht für Summen. Drittens bedeutet a hoch (minus n) nicht minus a hoch n, sondern 1 / a hoch n. Strategie: Bei jeder Umformung die Basis identifizieren und prüfen, welches Gesetz anwendbar ist.',
          merksatz: 'a hoch n mal a hoch m = a hoch (n+m); (a hoch n) hoch m = a hoch (n mal m) — addieren vs. multiplizieren der Exponenten nicht verwechseln!',
        },
        {
          heading: 'Logarithmen — das Werkzeug für Exponenten und pH',
          text: 'log_a(x) = y bedeutet: Auf welchen Exponenten muss ich a heben, um x zu erhalten? Merksatz: Logarithmus ist der Exponent. Die drei Rechenregeln: Produkt ergibt Summe der Logs; Quotient ergibt Differenz der Logs; Potenz ergibt Faktor vor dem Log. pH = minus lg[H+]: Bei pH 7 gilt [H+] = 10 hoch (minus 7) mol/L. Pro pH-Einheit Unterschied ändert sich [H+] um den Faktor 10. Henderson-Hasselbalch: pH = pKa + lg([A minus]/[HA]) — verwendet die Quotientenregel direkt.',
          merksatz: 'log(a mal b) = log a + log b; log(a/b) = log a minus log b; log(a hoch n) = n mal log a. Logarithmus verwandelt Multiplikation in Addition.',
        },
        {
          heading: 'Halbwertszeit — Pharmakokinetik und Radioaktivität',
          text: 'N(t) = N0 mal (1/2) hoch (t / T(1/2)) beschreibt radioaktiven Zerfall und Medikamentenabbau 1. Ordnung. Nach n Halbwertszeiten sind noch (1/2) hoch n der Ausgangsmenge vorhanden. Nach 5 T(1/2): noch ungefähr 3%; nach 10 T(1/2): unter 0,1%. Klinische Faustregel: Ein Medikament gilt nach 5 Halbwertszeiten als ausgewaschen. Digoxin (T(1/2) ungefähr 36 h) braucht 7,5 Tage zur Elimination; Amiodaron (T(1/2) ungefähr 40 Tage) sogar Monate. Diese Unterschiede erklären Dosierungsintervalle und Absetzzeiträume.',
          merksatz: 'Nach n Halbwertszeiten: (1/2) hoch n der Ausgangsmenge. Nach 5 T(1/2): ungefähr 3%. Lambda = ln(2) / T(1/2) ungefähr 0,693 / T(1/2).',
        },
        {
          heading: 'Gebrochene Exponenten und Wurzeln vereinfachen',
          text: 'a hoch (m/n) = (n-te Wurzel aus a) hoch m — der Nenner des Exponenten ist der Wurzelindex, der Zähler ist der Exponent. Beispiel: 27 hoch (2/3) = (Kubikwurzel aus 27) hoch 2 = 3 hoch 2 = 9. Wurzeln vereinfachen: Größten quadratischen Teiler ausklammern. Wurzel aus 200 = Wurzel aus (100 mal 2) = 10 mal Wurzel aus 2. Wichtige Verbote: Die Wurzel einer Summe darf nicht aufgeteilt werden. Wurzel aus (a+b) ist ungleich Wurzel aus a + Wurzel aus b!',
          merksatz: 'a hoch (m/n) = (n-te Wurzel aus a) hoch m. Wurzelregel: Wurzel aus (a mal b) = Wurzel aus a mal Wurzel aus b erlaubt. Wurzel aus (a+b) ungleich Wurzel aus a + Wurzel aus b verboten!',
        },
      ],
      merksätze: [
        'a hoch n mal a hoch m = a hoch (n+m); a hoch n / a hoch m = a hoch (n minus m); (a hoch n) hoch m = a hoch (n mal m).',
        'a hoch 0 = 1 (fuer a ungleich 0); a hoch (minus n) = 1 / a hoch n; a hoch (m/n) = (n-te Wurzel aus a) hoch m.',
        '(a mal b) hoch n = a hoch n mal b hoch n, aber (a+b) hoch n ungleich a hoch n + b hoch n!',
        'Wurzel aus (a mal b) = Wurzel aus a mal Wurzel aus b; Wurzel aus (a hoch 2) = Betrag von a.',
        'log(a mal b) = log a + log b; log(a/b) = log a minus log b; log(a hoch n) = n mal log a.',
        'pH = minus lg[H+]; pro pH-Einheit aendert sich [H+] um Faktor 10.',
        'Nach n Halbwertszeiten: (1/2) hoch n der Ausgangsmenge vorhanden.',
        'Halbwertszeit T(1/2) = ln(2) / lambda ungefaehr 0,693 / lambda; lambda = Zerfallskonstante.',
        'Wissenschaftliche Notation: a mal 10 hoch n mit 1 kleiner-gleich a kleiner 10.',
        'ln(x) ungefaehr 2,303 mal lg(x); ln(2) ungefaehr 0,693; ln(10) ungefaehr 2,303.',
      ],
      // TODO: echte MedAT-Altfrage prüfen – aktuell Übungsformat
      altfrage: {
        question: 'Ein Patient erhält eine Chemotherapie mit einem Wirkstoff der Halbwertszeit 12 Stunden. Die Initialdosis beträgt 800 mg. (a) Wie viel mg sind nach 36 Stunden noch im Körper? (b) Nach wie vielen Stunden ist die Konzentration auf unter 50 mg gefallen? (c) Wie hängen Halbwertszeit und Zerfallskonstante lambda zusammen?',
        answer: 'Teil a: 36 Stunden entsprechen 36 / 12 = 3 Halbwertszeiten. N(36) = 800 mal (1/2) hoch 3 = 800 mal 1/8 = 100 mg. Nach 36 Stunden sind noch 100 mg vorhanden. Teil b: Gesucht ist t, sodass N(t) < 50 mg. Also 800 mal (1/2) hoch (t/12) < 50. Dividiere durch 800: (1/2) hoch (t/12) < 1/16. Da 1/16 = (1/2) hoch 4, folgt t/12 > 4, also t > 48 Stunden. Logarithmisch: (t/12) mal ln(1/2) < ln(1/16), also minus (t/12) mal ln(2) < minus 4 mal ln(2), also t/12 > 4. Genau bei t = 48 Stunden sind 800 mal (1/2) hoch 4 = 50 mg vorhanden, also fällt die Konzentration nach mehr als 48 Stunden unter 50 mg. Teil c: T(1/2) = ln(2) / lambda ungefähr 0,693 / lambda. Hergeleitet aus N(T(1/2)) = N0/2 = N0 mal e hoch (minus lambda mal T(1/2)). Kürze N0 und logarithmiere: minus lambda mal T(1/2) = ln(1/2) = minus ln(2). Damit T(1/2) = ln(2) / lambda.',
      },
      klinischerBezug: 'Pharmakokinetik basiert auf Exponentialfunktionen: Viele Medikamente werden nach Kinetik 1. Ordnung abgebaut. Die Halbwertszeit bestimmt das Dosierungsintervall — Aspirin mit T(1/2) ungefähr 15 min, Amoxicillin mit T(1/2) ungefähr 1 h (dreimal täglich), Digoxin mit T(1/2) ungefähr 36 h (einmal täglich), Amiodaron mit T(1/2) ungefähr 40 bis 55 Tage (erfordert Loading-Dose-Regime). pH = minus lg[H+]: Der arterielle pH 7,35 bis 7,45 entspricht H+-Konzentrationen von 35 bis 45 nmol/L. Eine Azidose auf pH 7,0 bedeutet eine Verdopplung der H+-Konzentration — klinisch lebensbedrohlich.',
      selfTest: [
        {
          question: 'Was ergibt 3 hoch 4 mal 3 hoch (minus 2)?',
          options: ['9', '81', '27', '3', '729'],
          correctIndex: 0,
          explanation: '3 hoch 4 mal 3 hoch (minus 2) = 3 hoch (4 + (minus 2)) = 3 hoch 2 = 9. Gleiche Basis: Exponenten addieren. 4 + (minus 2) = 2. 3 hoch 2 = 9. Alternativ: 3 hoch 4 = 81; 3 hoch (minus 2) = 1/9. 81 mal 1/9 = 9. Beide Wege liefern dasselbe Ergebnis. Die Regel lautet: Gleiche Basis mal gleiche Basis ergibt gleiche Basis mit Exponentensumme.',
          hints: ['Gleiche Basis: Exponenten addieren. 4 + (minus 2) = ?', '3 hoch (4 minus 2) = 3 hoch 2 = ?'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Was ist (2 hoch 3) hoch 4?',
          options: ['4096', '96', '512', '2048', '128'],
          correctIndex: 0,
          explanation: '(2 hoch 3) hoch 4 = 2 hoch (3 mal 4) = 2 hoch 12 = 4096. Bei Potenz einer Potenz werden die Exponenten multipliziert, nicht addiert! 2 hoch 12 = 4096. Der häufige Fehler wäre 2 hoch (3+4) = 2 hoch 7 = 128. Das ist die Regel 1 (Exponenten addieren) und gilt nur für Multiplikation gleicher Basen, nicht für Potenzen einer Potenz.',
          hints: ['(a hoch n) hoch m = a hoch (n mal m). Exponent: 3 mal 4 = 12.', '2 hoch 12 = 4096 (ausrechnen: 2 hoch 10 = 1024, mal 4 = 4096).'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Was ist 16 hoch (3/4)?',
          options: ['8', '12', '4', '32', '64'],
          correctIndex: 0,
          explanation: '16 hoch (3/4) = (vierte Wurzel aus 16) hoch 3 = 2 hoch 3 = 8. Der Nenner 4 ist der Wurzelindex, der Zähler 3 der Exponent. Vierte Wurzel aus 16 = 2, weil 2 hoch 4 = 16. Dann 2 hoch 3 = 8. Alternativ: 16 hoch (3/4) = (16 hoch 3) hoch (1/4) = 4096 hoch (1/4) = 8 (da 8 hoch 4 = 4096). Beide Wege liefern dasselbe Ergebnis.',
          hints: ['a hoch (m/n) = (n-te Wurzel aus a) hoch m. Hier: (vierte Wurzel aus 16) hoch 3.', 'Vierte Wurzel aus 16 = 2, da 2 hoch 4 = 16. Dann 2 hoch 3 = ?'],
          difficulty: 3,
          tags: [],
        },
        {
          question: 'Was ergibt Wurzel aus 48 vereinfacht?',
          options: ['4 Wurzel aus 3', '6 Wurzel aus 2', '8 Wurzel aus 3', '2 Wurzel aus 12', '4 Wurzel aus 6'],
          correctIndex: 0,
          explanation: 'Wurzel aus 48 = Wurzel aus (16 mal 3) = Wurzel aus 16 mal Wurzel aus 3 = 4 mal Wurzel aus 3. Man sucht den größten quadratischen Teiler von 48. Die Teiler sind: 4, 16. Der größte ist 16 = 4 hoch 2. Also 48 = 16 mal 3. Wurzel aus 16 = 4, daher Wurzel aus 48 = 4 Wurzel aus 3. Probe: (4 Wurzel aus 3) hoch 2 = 16 mal 3 = 48. Korrekt.',
          hints: ['Schreibe 48 als Produkt mit dem größten quadratischen Teiler: 48 = 16 mal 3.', 'Wurzel aus (16 mal 3) = Wurzel aus 16 mal Wurzel aus 3 = 4 mal Wurzel aus 3.'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Was ergibt lg(1000) minus lg(10)?',
          options: ['2', '100', '3', '1', '10'],
          correctIndex: 0,
          explanation: 'lg(1000) = lg(10 hoch 3) = 3 und lg(10) = lg(10 hoch 1) = 1. Differenz: 3 minus 1 = 2. Alternativ mit Quotientenregel: lg(1000) minus lg(10) = lg(1000/10) = lg(100) = lg(10 hoch 2) = 2. Beide Wege liefern 2. Die Quotientenregel des Logarithmus sagt: Der Logarithmus eines Quotienten ist die Differenz der Logarithmen.',
          hints: ['lg(10 hoch n) = n. Was sind die Exponenten für 1000 und 10?', 'Oder: Quotientenregel: lg(1000) minus lg(10) = lg(1000/10) = lg(100).'],
          difficulty: 1,
          tags: [],
        },
        {
          question: 'Ein Medikament hat T(1/2) = 8 h. Nach 24 h sind noch wie viel Prozent der Ausgangsdosis vorhanden?',
          options: ['12,5%', '25%', '50%', '6,25%', '33,3%'],
          correctIndex: 0,
          explanation: 'Anzahl Halbwertszeiten: 24 h / 8 h = 3. Verbleibender Anteil: (1/2) hoch 3 = 1/8 = 12,5%. Schrittweise: 100% nach 1 T(1/2) ergibt 50%; nach 2 T(1/2) ergibt 25%; nach 3 T(1/2) ergibt 12,5%. Nach jeder Halbwertszeit halbiert sich die Konzentration. Dies ist das Grundprinzip der Pharmakokinetik 1. Ordnung und des radioaktiven Zerfalls.',
          hints: ['Wie viele Halbwertszeiten passen in 24 h?', 'Nach 3 T(1/2): (1/2) hoch 3 = 1/8 = ?%'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welchen pH hat eine Lösung mit [H+] = 10 hoch (minus 5) mol/L?',
          options: ['5', 'minus 5', '0,00001', '10', '100000'],
          correctIndex: 0,
          explanation: 'pH = minus lg[H+] = minus lg(10 hoch (minus 5)) = minus (minus 5) = 5. Die Formel pH = minus lg[H+] gibt direkt den pH-Wert. Da [H+] = 10 hoch (minus 5), ist lg(10 hoch (minus 5)) = minus 5, und pH = minus (minus 5) = 5. Dieser pH-Wert entspricht einer sauren Lösung (pH < 7). Normal arteriell: pH 7,35 bis 7,45.',
          hints: ['pH = minus lg[H+]. Hier [H+] = 10 hoch (minus 5).', 'lg(10 hoch (minus 5)) = minus 5. Also pH = minus (minus 5) = ?'],
          difficulty: 2,
          tags: [],
        },
        {
          question: 'Welcher Ausdruck ist korrekt?',
          options: ['(a mal b) hoch 3 = a hoch 3 mal b hoch 3', '(a+b) hoch 3 = a hoch 3 + b hoch 3', 'a hoch (minus 2) = minus a hoch 2', '(a hoch 2) hoch 3 = a hoch 5', 'Wurzel aus (a+b) = Wurzel aus a + Wurzel aus b'],
          correctIndex: 0,
          explanation: '(a mal b) hoch 3 = a hoch 3 mal b hoch 3 ist korrekt — das Potenzgesetz fuer Produkte. Die anderen vier Aussagen sind alle falsch: (a+b) hoch 3 ist ungleich a hoch 3 + b hoch 3 (binomischer Satz gilt); a hoch (minus 2) = 1/a hoch 2, nicht minus a hoch 2; (a hoch 2) hoch 3 = a hoch 6, nicht a hoch 5 (Exponenten werden multipliziert); Wurzel aus (a+b) ist ungleich Wurzel aus a + Wurzel aus b (Wurzel kann nicht uber eine Summe verteilt werden).',
          hints: ['Welches Potenzgesetz gilt fuer ein Produkt? (a mal b) hoch n = ?', 'Prüfe alle anderen Optionen: Was sind die richtigen Formeln?'],
          difficulty: 3,
          tags: [],
        },
      ],
    },
  ],
};
