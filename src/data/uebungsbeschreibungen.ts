/**
 * Zentrale Übungsbeschreibungen für BMS, KFF, SEK und TV.
 * Verwendet von UebungsbeschreibungCard – Ablauf, Aufbau/Struktur, Bewertung.
 */

export type UebungsbeschreibungId =
  | "bms"
  | "bms-wissencheck"
  | "kff-implikationen"
  | "kff-zahlenfolgen"
  | "kff-wortfluessigkeit"
  | "kff-merkfaehigkeit"
  | "kff-figuren"
  | "sek-emotionen-erkennen"
  | "sek-emotionen-regulieren"
  | "sek-soziales-entscheiden"
  | "tv-ueben"
  | "tv-simulation";

export type Uebungsbeschreibung = {
  id: UebungsbeschreibungId;
  title: string;
  ablauf: string;
  aufbauStruktur: string;
  bewertung: string;
};

export const uebungsbeschreibungen: Record<UebungsbeschreibungId, Uebungsbeschreibung> = {
  bms: {
    id: "bms",
    title: "BMS-Quiz: So funktioniert die Übung",
    ablauf:
      "Du wählst ein Fach (Biologie, Chemie, Physik, Mathematik) oder „Gemischt“. Anschließend werden dir nacheinander Multiple-Choice-Fragen mit fünf Optionen (A–E) angezeigt. Du kannst zwischen den Fragen vor- und zurückblättern, Antworten ändern und Fragen markieren. Die Abgabe erfolgt bewusst über den Button „Abgeben“ – es gibt keine automatische Abgabe nach Zeit.",
    aufbauStruktur:
      "Jede Frage besteht aus einem Fragetext, genau fünf Antwortoptionen (A bis E) und optional einer Erklärung nach der Abgabe. Pro Frage ist genau eine Option richtig (MedAT-Format). Du siehst eine Fortschrittsanzeige und die aktuelle Positionsnummer.",
    bewertung:
      "Pro richtige Antwort gibt es einen Punkt. Die Gesamtpunktzahl wird in Relation zur Anzahl der Fragen angezeigt (z. B. 12/15). Es gibt keine Teilpunkte. Dein Ergebnis wird für Statistiken und XP gespeichert; „Bester Versuch“ wird bei wiederholtem Üben berücksichtigt.",
  },

  "bms-wissencheck": {
    id: "bms-wissencheck",
    title: "Wissenscheck: Ablauf & Bewertung",
    ablauf:
      "Du wählst ein Fach (Biologie, Chemie, Physik, Mathematik). Der Wissenscheck startet mit einer kurzen Einleitung. Du beantwortest eine feste Anzahl von Fragen innerhalb eines Zeitlimits (z. B. 8 Minuten). Du kannst zwischen den Fragen wechseln. Nach Ablauf der Zeit wird automatisch abgegeben.",
    aufbauStruktur:
      "Die Fragen sind Multiple-Choice mit fünf Optionen (A–E), eine Antwort pro Frage ist richtig. Optional gibt es einen „Reihenfolge üben“-Modus (Logic-Builder) für bestimmte Fächer. Die Fragen werden zufällig aus dem Fragenpool des Faches gezogen.",
    bewertung:
      "Pro richtige Antwort ein Punkt. Die Auswertung zeigt die erreichte Punktzahl und den Anteil an der Gesamtpunktzahl. Das Ergebnis fließt in deine BMS-Statistik ein.",
  },

  "kff-implikationen": {
    id: "kff-implikationen",
    title: "Implikationen erkennen: So funktioniert die Übung",
    ablauf:
      "Du erhältst Prämissen (z. B. „Alle A sind B“, „Einige B sind C“) und mehrere Schlussfolgerungen. Deine Aufgabe ist, diejenige Schlussfolgerung zu wählen, die aus den Prämissen zwingend folgt. Bei einigen Aufgaben ist „Keine der Schlussfolgerungen ist zwingend“ (Option E) richtig. Du arbeitest ohne Zeitdruck im Übungsmodus oder unter Zeitvorgabe in der Simulation.",
    aufbauStruktur:
      "Jede Aufgabe hat einen einheitlichen Aufbau: Prämissenblock, dann fünf Optionen (A–E). Die Optionen sind vorgegebene Schlussfolgerungen. Es ist immer genau eine Antwort richtig. Die Formulierungen folgen dem offiziellen MedAT-Format (Alle/Einige/Keine).",
    bewertung:
      "Pro richtige Antwort gibt es einen Punkt. In der Simulation wird die Gesamtpunktzahl bzw. der Prozentsatz angezeigt. Es gibt keine Teilpunkte.",
  },

  "kff-zahlenfolgen": {
    id: "kff-zahlenfolgen",
    title: "Zahlenfolgen: So funktioniert die Übung",
    ablauf:
      "Du siehst eine Folge von Zahlen mit einer Lücke. Aus fünf vorgegebenen Optionen (A–E) wählst du die Zahl, die die Folge logisch fortsetzt. Die zugrunde liegende Regel kann z. B. Addition, Subtraktion, Multiplikation, Potenzen oder eine Mischung sein. Im Übungsmodus kannst du in Ruhe überlegen; in der Simulation gilt ein Zeitlimit pro Aufgabe.",
    aufbauStruktur:
      "Standardaufbau: Zahlenfolge mit einer Lücke, darunter fünf Antwortmöglichkeiten. Es gibt genau eine richtige Lösung. Du kannst zwischen offiziellen Beispielen und adaptivem Training wählen. Die Schwierigkeit passt sich deinem Niveau an.",
    bewertung:
      "Pro richtige Antwort ein Punkt. Die Auswertung zeigt die erreichte Punktzahl. Bei adaptivem Training wird dein Skill-Rating für zukünftige Aufgaben angepasst.",
  },

  "kff-wortfluessigkeit": {
    id: "kff-wortfluessigkeit",
    title: "Wortflüssigkeit: So funktioniert die Übung",
    ablauf:
      "Du erhältst eine Buchstabenfolge und sollst daraus ein sinnvolles Wort bilden. Aus den vorgegebenen Buchstaben muss genau ein gültiges Wort (aus dem Lexikon) gebildet werden können. Du wählst die richtige Option aus fünf Möglichkeiten (A–E). Im Übungsmodus ohne Zeitdruck, in der Simulation mit Zeitvorgabe.",
    aufbauStruktur:
      "Aufgabenformat: Buchstabenfolge plus fünf Optionen. Nur eine Option ergibt ein gültiges Wort aus den vorgegebenen Buchstaben. Die Übung orientiert sich am offiziellen MedAT-Format.",
    bewertung:
      "Pro richtig gebildetes Wort ein Punkt. Keine Teilpunkte. Das Ergebnis wird für deine KFF-Statistik gespeichert.",
  },

  "kff-merkfaehigkeit": {
    id: "kff-merkfaehigkeit",
    title: "Merkfähigkeit: So funktioniert die Übung",
    ablauf:
      "Dir werden Informationen (z. B. Profile mit Eigenschaften) präsentiert, die du dir einprägen sollst. Anschließend werden diese Informationen ausgeblendet und du beantwortest Fragen dazu bzw. ordnest Zuordnungen zu. Die Merkphase und die Abrufphase entsprechen dem offiziellen MedAT-Ablauf.",
    aufbauStruktur:
      "Typischerweise: Merkphase mit klar begrenzter Zeit, dann Abrufphase mit Einfachauswahl- oder Zuordnungsfragen. Fünf Optionen pro Frage (A–E), eine Antwort ist richtig.",
    bewertung:
      "Pro richtige Antwort in der Abrufphase ein Punkt. Die Gesamtpunktzahl wird nach der Abgabe angezeigt.",
  },

  "kff-figuren": {
    id: "kff-figuren",
    title: "Figuren zusammensetzen: So funktioniert die Übung",
    ablauf:
      "Du siehst eine Zielfigur und mehrere Teile. Aus fünf Optionen (A–E) wählst du diejenige Figur, die exakt aus den gegebenen Teilen zusammengesetzt werden kann. Die Teile dürfen nur durch Verschieben gedreht und an die richtige Position gelegt werden – keine Spiegelung oder Verformung. Im Übungsmodus ohne Zeitlimit, in der Simulation mit Zeitvorgabe pro Aufgabe.",
    aufbauStruktur:
      "Aufgabenaufbau: Zielfigur, Teile, fünf Antwortoptionen. Genau eine Option lässt sich lückenlos aus den Teilen zusammensetzen. Es gibt offizielle Beispiele und Training mit Schwierigkeitsstufen (leicht/mittel/schwer).",
    bewertung:
      "Pro richtige Option ein Punkt. Keine Teilpunkte. Das Ergebnis fließt in deine KFF-Statistik ein.",
  },

  "sek-emotionen-erkennen": {
    id: "sek-emotionen-erkennen",
    title: "Emotionen erkennen: So funktioniert die Übung",
    ablauf:
      "Du erhältst eine kurze Situationsbeschreibung und die Frage, wie sich eine Person in dieser Situation fühlt. Zu fünf vorgegebenen Emotionen gibst du an, ob die Emotion in dieser Situation eher „wahrscheinlich“ oder „unwahrscheinlich“ ist. Du kannst jede Emotion einzeln umschalten. Die Auswertung erfolgt pro Situation: Nur wenn alle fünf Emotionen richtig eingeschätzt wurden, gibt es einen Punkt (Alles-oder-Nichts).",
    aufbauStruktur:
      "Pro Aufgabe: eine Situation, eine Person, fünf Emotionen mit je zwei Optionen (eher wahrscheinlich / eher unwahrscheinlich). Die Reihenfolge der Aufgaben und die Auswahl der Situationen können variieren. Es werden mehrere Situationen nacheinander bearbeitet.",
    bewertung:
      "Alles-oder-Nichts pro Situation: Nur bei vollständig richtiger Einschätzung aller fünf Emotionen gibt es einen Punkt. Die Gesamtpunktzahl ist die Anzahl der vollständig richtigen Situationen (z. B. 10/14).",
  },

  "sek-emotionen-regulieren": {
    id: "sek-emotionen-regulieren",
    title: "Emotionen regulieren: So funktioniert die Übung",
    ablauf:
      "Du siehst eine Situation, die eine bestimmte Emotion auslöst, und ein Ziel (z. B. die Emotion reduzieren oder nutzen). Aus vier Bewältigungsstrategien wählst du diejenige, die am besten zum Ziel passt. Die Strategien sind nach ihrer Eignung bewertet (z. B. 3 = beste, 0 = ungeeignet). Du arbeitest mehrere Szenarien nacheinander ab.",
    aufbauStruktur:
      "Pro Aufgabe: Situationsbeschreibung, genannte Emotion, Ziel, vier Strategie-Optionen. Du wählst genau eine Option. Die Bewertung ist prozentual: Je besser die gewählte Strategie, desto mehr Punkte (z. B. 3 Punkte für die beste Strategie).",
    bewertung:
      "Prozentuale Bewertung: Pro Aufgabe können bis zu 3 Punkte erreicht werden. Die Gesamtpunktzahl wird in Prozent der Maximalpunktzahl angegeben. Es gibt Teilpunkte je nach Qualität der gewählten Strategie.",
  },

  "sek-soziales-entscheiden": {
    id: "sek-soziales-entscheiden",
    title: "Soziales Entscheiden: So funktioniert die Übung",
    ablauf:
      "Du erhältst eine Entscheidungssituation (Dilemma) und fünf Überlegungen (A–E). Deine Aufgabe ist, die Überlegungen nach ihrer Wichtigkeit für die Entscheidung zu ordnen – von 1 (am wichtigsten) bis 5 (am wenigsten wichtig). Jede Rangstufe darf nur einmal vergeben werden. Die Auswertung vergleicht deine Rangordnung mit einer theoretischen Idealordnung (Spearman-Rangkorrelation).",
    aufbauStruktur:
      "Pro Aufgabe: ein Dilemma-Text, fünf Aussagen A–E. Du ordnest jeder Aussage einen Rang von 1 bis 5 zu. Es sind 14 Aufgaben im offiziellen Format mit fester Zeitvorgabe (z. B. 21 Minuten) möglich.",
    bewertung:
      "Die Übereinstimmung mit der theoretischen Rangordnung wird über die Spearman-Rangkorrelation berechnet und in Punkte (z. B. 0–20 pro Aufgabe) umgesetzt. Je höher die Übereinstimmung, desto mehr Punkte. Die Gesamtpunktzahl wird in Prozent angegeben.",
  },

  "tv-ueben": {
    id: "tv-ueben",
    title: "Textverständnis üben: Ablauf & Bewertung",
    ablauf:
      "Du wählst einen oder mehrere Informationstexte (optional nach Schwierigkeit gefiltert). Zu jedem Text werden mehrere Verständnisfragen gestellt. Du liest den Text, beantwortest die Fragen durch Auswahl einer von fünf Optionen (A–E) und kannst jede Antwort einzeln „Überprüfen“. Es gibt keine Zeitbegrenzung; du kannst zwischen Texten blättern und die Reihenfolge mischen.",
    aufbauStruktur:
      "Jeder Eintrag besteht aus einem Informationstext (mehrere Absätze) und 2–4 Fragen mit je fünf Optionen. Pro Frage ist genau eine Antwort richtig. Nach dem Überprüfen siehst du die Lösung und eine kurze Erklärung sowie optional die relevante Textstelle. Du kannst Filter (Alle / Leicht / Mittel / Schwer) und Zufallsreihenfolge nutzen.",
    bewertung:
      "Pro richtige Antwort ein Punkt. Pro Text wird das Teilergebnis (z. B. 3/4) angezeigt. Es gibt keine Gesamtpunktzahl über alle Texte hinweg im Übungsmodus – der Fokus liegt auf dem Lerneffekt durch sofortiges Feedback.",
  },

  "tv-simulation": {
    id: "tv-simulation",
    title: "Textverständnis Simulation: Ablauf & Bewertung",
    ablauf:
      "Die Simulation entspricht dem offiziellen MedAT-Format: Nach dem Start läuft eine Gesamtzeit (z. B. 35 Minuten). Du bearbeitest mehrere Informationstexte mit zugehörigen Fragen. Du kannst zwischen Texten und Fragen frei navigieren, Fragen markieren und später wieder aufrufen. Bei Ablauf der Zeit wird automatisch abgegeben. Es zählt der „beste Versuch“ (wird gespeichert).",
    aufbauStruktur:
      "Mehrere Informationstexte, zu jedem Text mehrere Fragen mit fünf Optionen (A–E). Du siehst eine Fortschrittsanzeige, verbleibende Zeit und den Status der Fragen (unvollständig/beantwortet). Jede Frage bringt erreichbare Punkte (z. B. 1,00). Zwischenspeichern ist möglich, die Zeit läuft weiter.",
    bewertung:
      "Pro richtige Antwort ein Punkt. Die Gesamtpunktzahl wird aus allen beantworteten Fragen berechnet. Die Bewertungsmethode ist „Bester Versuch“ – dein bestes Ergebnis in dieser Session wird gespeichert.",
  },
};

export function getUebungsbeschreibung(id: UebungsbeschreibungId): Uebungsbeschreibung {
  return uebungsbeschreibungen[id];
}
