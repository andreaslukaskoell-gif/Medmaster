/**
 * KFF Lösungsstrategien – fest codiert, nicht generiert.
 * Erklärt den Lösungsprozess, nicht die konkrete Lösung.
 */

export type KFFStrategyTestType =
  | "implications"
  | "figures"
  | "sequences"
  | "verbal-fluency"
  | "memory";

export type KFFStrategyContent = {
  title: string;
  steps: string[];
  pitfalls: string[];
  examTips: string[];
  timePerTask: string;
};

export const KFF_STRATEGIES: Record<KFFStrategyTestType, KFFStrategyContent> = {
  sequences: {
    title: "Zahlenfolgen – Systematisch prüfen",
    timePerTask: "~90 Sekunden pro Aufgabe (10 Aufgaben, 15 Minuten)",
    steps: [
      "Berechne die Differenzen zwischen aufeinanderfolgenden Zahlen. Konstante Differenz → einfache Addition/Subtraktion.",
      "Wenn Differenzen wachsen: Berechne die zweiten Differenzen (Differenz der Differenzen). Konstante zweite Differenz → quadratisches Muster.",
      "Prüfe auf Faktoren: Teile jede Zahl durch die vorherige. Konstanter Quotient → Multiplikation/Division.",
      "Prüfe auf zyklische Operatoren: Markiere die Operationen (+, −, ×, ÷) zwischen den Zahlen. Wiederholen sie sich alle 2–3 Schritte?",
      "Trenne gerade und ungerade Positionen: Bilden die Zahlen an Position 1, 3, 5 und 2, 4, 6 jeweils eigene Teilfolgen? → Verschachtelte Folge.",
      "Wenn nichts passt: Suche nach wachsenden Differenzen (+1, +3, +5, +7) oder Fibonacci-Muster (Summe der zwei Vorgänger).",
      "Setze die gefundene Regel ein, berechne die zwei fehlenden Zahlen und vergleiche mit den Optionen A–D.",
      "Wenn keine Option passt → E (Keine der Antwortmöglichkeiten ist richtig).",
    ],
    pitfalls: [
      "Nur erste Differenzen prüfen: Viele Folgen haben wechselnde Operationen (z. B. +4, ×2, −3 im Zyklus). Wer nur addiert/subtrahiert, übersieht ×/÷.",
      "Verschachtelte Folgen nicht erkennen: Wenn die Differenzen scheinbar chaotisch sind, trenne gerade/ungerade Positionen.",
      "Zu kompliziert denken: Die meisten MedAT-Folgen verwenden maximal 3–4 verschiedene Operationen im Zyklus. Wenn du nach 30 Sekunden kein Muster siehst, probiere E.",
      "Option E vergessen: Bei ca. 10–20 % der Aufgaben ist E korrekt. Immer gegenprüfen.",
      "Rechenflüchtigkeit: Auch einfache Rechenfehler unter Zeitdruck passieren. Kontrolliere die letzte sichtbare Zahl mit deiner Regel.",
      "Nur die letzten Zahlen betrachten: Die Regel muss ALLE Zahlen der Folge erklären, nicht nur die letzten 3.",
    ],
    examTips: [
      "Investiere maximal 90 Sekunden pro Aufgabe. Wenn du nach 60 Sekunden kein Muster siehst, markiere E und gehe weiter.",
      "Beginne mit den einfach aussehenden Folgen (kleine Zahlen, erkennbare Muster) und löse schwierige am Ende.",
      "Schreibe die Differenzen zwischen den Zahlen direkt über die Folge – das macht Muster sofort sichtbar.",
      "Bei 2 Minuten Restzeit: Alle unbeantworteten Aufgaben mit E markieren (besser als leer lassen).",
    ],
  },
  implications: {
    title: "Implikationen erkennen – Mengen & Logik",
    timePerTask: "~60 Sekunden pro Aufgabe (10 Aufgaben, 10 Minuten)",
    steps: [
      "Identifiziere die drei Mengen (A, B, C) in den zwei Prämissen. Der Mittelterm (in beiden Prämissen vorkommend) ist der Schlüssel.",
      "Übersetze die Quantoren in Mengenbeziehungen: 'Alle A sind B' → A-Kreis vollständig in B. 'Einige A sind B' → A und B überschneiden sich. 'Keine A sind B' → A und B getrennt.",
      "Wende die Schnellregeln an: (1) Zwei 'einige' → E. (2) Zwei 'keine' → E. (3) Kein 'keine' in Prämissen → Schluss enthält in der Regel kein 'keine'. (4) Mindestens ein 'keine' → Schluss enthält meist 'keine'. (5) Mindestens ein 'einige' → Schluss enthält meist 'einige'. Regeln 3–5 sind Heuristiken, keine absoluten Gesetze — im Zweifel formal mit Euler-Kreisen prüfen.",
      "Prüfe jede Option A–D: Muss diese Aussage in ALLEN denkbaren Fällen wahr sein? Findest du EIN Gegenbeispiel → Option falsch.",
      "Beachte die Richtung: 'Alle A sind B' sagt nichts über 'Alle B sind A' aus. Der Schluss muss die richtige Richtung haben.",
      "Wenn keine Option A–D zwingend ist → E wählen. Bei ca. 20 % der Aufgaben ist E korrekt.",
    ],
    pitfalls: [
      "'Alle A sind B' mit 'Alle B sind A' verwechseln: Der häufigste Fehler. 'Alle Hunde sind Säugetiere' heißt NICHT 'Alle Säugetiere sind Hunde'.",
      "'Einige' als 'alle' lesen: 'Einige A sind B' lässt offen, ob es alle oder nur manche sind.",
      "Alltagswissen einbeziehen: Die Prämissen können sachlich falsch sein (z. B. 'Alle Fische sind Säugetiere'). Du musst sie trotzdem als wahr behandeln.",
      "Vorschnell A wählen: Nur weil eine Aussage 'plausibel klingt', muss sie nicht logisch zwingend sein. Immer formal prüfen.",
      "E zu selten wählen: Zwei 'einige'-Prämissen oder zwei 'keine'-Prämissen ergeben IMMER E. Das sind ca. 2 von 10 Aufgaben.",
      "Den Mittelterm übersehen: Der Begriff, der in beiden Prämissen vorkommt, verbindet die Schlussfolgerung. Ohne Mittelterm kein gültiger Schluss.",
    ],
    examTips: [
      "Wende zuerst die Schnellregeln an: Zwei 'einige' oder zwei 'keine' → sofort E ankreuzen (spart 30 Sekunden).",
      "60 Sekunden pro Aufgabe sind knapp. Zeichne die Euler-Kreise nicht – trainiere das mentale Bild.",
      "Bei Unsicherheit zwischen zwei Optionen: Prüfe die Quantoren-Regel (3/4/5). Die richtige Option muss die Quantoren der Prämissen widerspiegeln.",
      "Letzter Check: Enthält der Schluss 'keine' obwohl keine Prämisse 'keine' enthält? Dann falsch. Und umgekehrt.",
    ],
  },
  figures: {
    title: "Figuren zusammensetzen – Kanten & Winkel",
    timePerTask: "~80 Sekunden pro Aufgabe (15 Aufgaben, 20 Minuten)",
    steps: [
      "Schätze die Gesamtfläche der Teile ab. Die richtige Zielfigur muss die gleiche Fläche haben – schließe offensichtlich zu große oder kleine Optionen sofort aus.",
      "Zähle markante Kanten: lange gerade Kanten, spitze Winkel, Rundungen. Diese müssen in der Zielfigur als Außenkanten vorkommen.",
      "Identifiziere das größte Teil. Dieses begrenzt, welche Zielfiguren möglich sind – es muss hineinpassen.",
      "Prüfe die Winkel: Wenn die Teile nur rechte Winkel haben, kann die Zielfigur kein Dreieck oder Fünfeck sein.",
      "Teste mental: Beginne mit dem größten Teil, lege es in die Zielfigur, und prüfe ob die restlichen Teile die Lücken füllen.",
      "Beachte: Teile dürfen gedreht und verschoben, aber NIEMALS gespiegelt werden. Wenn ein Teil nur gespiegelt passt → falsche Option.",
      "Wenn keine Option A–D passt → E. Aber prüfe vorher nochmal die Rotationen.",
    ],
    pitfalls: [
      "Spiegelung übersehen: Das häufigste Problem. Ein L-förmiges Teil, das nur gespiegelt in die Figur passt, ist ein Hinweis auf die falsche Option.",
      "Nur die Fläche prüfen: Gleiche Fläche heißt nicht gleiche Form. Ein Quadrat und ein langer Streifen können die gleiche Fläche haben.",
      "Gebogene Kanten ignorieren: Bei Kreis-Teilen müssen die Rundungen exakt zusammenpassen. Gerade + gebogen = unmöglich.",
      "Zu lange an einer Aufgabe hängen: Wenn du nach 60 Sekunden keine Lösung siehst, markiere deine beste Vermutung und gehe weiter.",
      "Die Innenkanten vergessen: Schnittlinien zwischen Teilen müssen glatt ineinandergreifen. Stufen oder Lücken → falsche Option.",
    ],
    examTips: [
      "Beginne mit der Flächenschätzung – das eliminiert oft 2 von 5 Optionen in 5 Sekunden.",
      "Konzentriere dich auf markante Formmerkmale (spitze Ecken, Rundungen, parallele Kanten) statt auf jedes Detail.",
      "15 Aufgaben in 20 Minuten = 80 Sekunden pro Aufgabe. Markiere schwierige und komme am Ende zurück.",
      "Keine Hilfslinien oder Notizen erlaubt – alles rein gedanklich. Trainiere das im Vorfeld.",
    ],
  },
  "verbal-fluency": {
    title: "Wortflüssigkeit – Wortenden zuerst",
    timePerTask: "~80 Sekunden pro Aufgabe (15 Aufgaben, 20 Minuten)",
    steps: [
      "Scanne die Buchstaben nach typischen deutschen Endungen: -UNG, -HEIT, -KEIT, -TION, -ER, -EN, -EL, -LE, -NIS, -SCHAFT, -TUR.",
      "Suche nach häufigen Vorsilben: BE-, VER-, GE-, ENT-, ER-, ZER-, AUF-, AN-, AUS-, EIN-.",
      "Prüfe Konsonantenhäufungen: SCH, CH, CK, PF, ST, SP deuten auf bestimmte Wortteile hin.",
      "Wenn Endung + Anfang erkennbar sind: Baue das Wort und prüfe, ob ALLE Buchstaben genau einmal verwendet werden.",
      "Zähle nach: Anzahl der gegebenen Buchstaben = Länge des gesuchten Wortes. Kein Buchstabe darf übrig bleiben oder fehlen.",
      "Bestimme den Anfangsbuchstaben des gefundenen Wortes und vergleiche mit A–D.",
      "Wenn der Anfangsbuchstabe nicht unter A–D ist → E (Keine der Antwortmöglichkeiten ist richtig).",
    ],
    pitfalls: [
      "Sich auf den ersten Einfall fixieren: Wenn das erste Wort nicht alle Buchstaben verwendet, weitersuchen und nicht festbeißen.",
      "Umlaute erwarten: Die vorgegebenen Buchstaben enthalten keine Umlaute und kein ß. Du arbeitest nur mit A–Z.",
      "Eigennamen bilden: Nur Hauptwörter aus dem Duden sind gültig. Keine Städte, Personen oder Marken.",
      "Buchstaben doppelt verwenden: Jeder gegebene Buchstabe darf nur so oft verwendet werden, wie er vorkommt.",
      "E zu selten wählen: Bei ca. 10–15 % der Aufgaben beginnt das Wort mit einem Buchstaben, der nicht unter A–D steht.",
      "Zu lange suchen: Wenn du nach 40 Sekunden kein Wort siehst, rate systematisch (häufigste Anfangsbuchstaben: S, B, K, G, H).",
    ],
    examTips: [
      "Trainiere vor dem Test häufige Wortmuster: -UNG-Wörter, -HEIT-Wörter, BE-/VER-/GE-Wörter machen ~60 % der Aufgaben aus.",
      "80 Sekunden pro Aufgabe. Wenn nach 50 Sekunden kein Wort: Wähle die plausibelste Option oder E.",
      "Beginne mit den kürzeren Buchstabenreihen (5–6 Buchstaben) – die sind schneller lösbar.",
      "Halte die Optionen A–D im Blick: Manchmal hilft es, mit den angebotenen Anfangsbuchstaben systematisch Wörter zu bilden.",
    ],
  },
  memory: {
    title: "Merkfähigkeit – Profile statt Einzeldaten",
    timePerTask: "~36 Sekunden pro Frage (25 Fragen, 15 Minuten) + 8 Minuten Lernphase",
    steps: [
      "Bilde pro Person ein zusammenhängendes Profil: Verknüpfe Name + Gesicht + ein Schlüsselmerkmal (z. B. Allergie oder Land).",
      "Nutze die Loci-Methode: Platziere jede Person an einem bekannten Ort (z. B. die 8 Räume deiner Wohnung).",
      "Erstelle Eselsbrücken mit Alliteration oder Reim: 'M. aus M. mit Milchallergie' oder 'Fischer fischt Fische, Blutgruppe 0 wie Null Fische'.",
      "Ordne die Pässe in Zweiergruppen und finde Unterschiede: Person A hat Blutgruppe A aus Österreich, Person B hat Blutgruppe B aus Belgien.",
      "Wiederhole in 3 Runden: 1. Alle 8 Pässe durchgehen. 2. Schwierige Attribute wiederholen. 3. Querfragen stellen (Wer hat Blutgruppe AB?).",
      "Lerne die Ausweisnummern als Muster: Zifferngruppen aufteilen (z. B. 483-927 statt 483927).",
      "In den letzten 2 Minuten der Lernphase: Gehe alle 8 Profile mental durch, ohne auf die Karten zu schauen.",
    ],
    pitfalls: [
      "Jedes Detail isoliert merken: 8 Personen × 7 Attribute = 56 Einzelfakten. Ohne Verknüpfung ist das unmöglich – Profile bilden!",
      "Ausweisnummern ignorieren: Sie werden abgefragt und sind die schwierigsten Attribute. Mindestens die ersten 3 Ziffern merken.",
      "Ähnliche Attribute verwechseln: Wenn zwei Personen die gleiche Blutgruppe haben, merke dir genau WER welche hat.",
      "Die Fotos nicht nutzen: Die Bilder sind eine Merkstütze. Verbinde Gesichtsmerkmale mit Attributen.",
      "In der Abfragephase zu lange an einer Frage hängen: 36 Sekunden pro Frage. Wenn du es nicht weißt, wähle deine beste Vermutung und gehe weiter.",
      "Option E vergessen: Bei ca. 15 % der Fragen ist keine der Optionen A-D richtig. Verwechsle das nicht mit 'ich weiß es nicht'.",
    ],
    examTips: [
      "Die 8 Minuten Lernzeit komplett ausnutzen. Nicht früher aufhören – jede Wiederholung stärkt die Erinnerung.",
      "Während der Lernphase sind keine Notizen erlaubt. Während der Prüfphase DARFST du Notizen machen – schreibe sofort auf, was du noch weißt.",
      "Zwischen Lern- und Prüfphase liegen andere KFF-Untertests (ca. 35 Minuten). Bleibe ruhig – dein Langzeitgedächtnis arbeitet für dich.",
      "Bei der Abfrage: Lies die Frage, rufe das Profil der Person auf, und prüfe dann die Optionen. Nicht umgekehrt.",
    ],
  },
};
