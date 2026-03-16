import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  topic: string; // "BMS", "KFF", "Strategie", "TV", "Motivation"
  readingTime: number; // minutes
  publishDate: string; // ISO date
  content: ReactNode;
};

const NAVY = "#1b3ea7";

function CTA({ text, to = "/login" }: { text: string; to?: string }) {
  return (
    <div className="my-8 p-6 rounded-xl bg-[var(--accent)]/5 border border-[var(--accent)]/20">
      <p className="text-sm font-semibold text-[var(--text-primary)] mb-3">{text}</p>
      <Link
        to={to}
        className="inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-xl transition-colors hover:opacity-90"
        style={{ backgroundColor: NAVY }}
      >
        Jetzt gratis starten
      </Link>
    </div>
  );
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "medat-bms-fehler",
    title: "MedAT 2026: Die 5 häufigsten BMS-Fehler und wie du sie vermeidest",
    excerpt:
      "Fast alle MedAT-Kandidierenden machen dieselben Fehler in der BMS-Vorbereitung. Hier sind die Top 5 — und wie du es besser machst.",
    topic: "BMS",
    readingTime: 4,
    publishDate: "2026-03-15",
    content: (
      <>
        <p>
          Der Basiskenntnistest Medizinische Studien (BMS) ist mit 40 % Gewichtung der wichtigste
          Teil des MedAT. Trotzdem machen fast alle Kandidierenden dieselben vermeidbaren Fehler.
          Wir haben die Erfahrungen tausender MedAT-Teilnehmender ausgewertet und die 5 häufigsten
          Probleme identifiziert.
        </p>

        <h2>1. Zu spät mit dem Lernen anfangen</h2>
        <p>
          Der BMS-Stoff umfasst vier Fächer: Biologie, Chemie, Physik und Mathematik. Viele
          unterschätzen den Umfang und beginnen erst 4-6 Wochen vor dem Test. Das reicht nicht.
          Plane mindestens 3 Monate ein — idealerweise mehr.
        </p>

        <h2>2. Nur Theorie lesen, kaum Fragen üben</h2>
        <p>
          Ein häufiger Trugschluss: „Ich lese das Buch durch, dann kann ich es." Der MedAT prüft
          Anwendungswissen in 5-Optionen-Multiple-Choice. Du musst das Format trainieren. Wer 1.000+
          Übungsfragen durcharbeitet, hat einen massiven Vorteil gegenüber jemandem, der nur passiv
          liest.
        </p>

        <h2>3. Schwächen ignorieren statt gezielt angehen</h2>
        <p>
          Es ist verlockend, die Themen zu wiederholen, die man schon kann — das fühlt sich gut an.
          Aber Punkte holst du dort, wo du dich verbesserst. Identifiziere deine schwächsten Themen
          (z.B. Genetik, Stöchiometrie, Optik) und investiere dort überproportional Zeit.
        </p>

        <h2>4. Die offizielle Stichwortliste ignorieren</h2>
        <p>
          Die MedUni veröffentlicht jedes Jahr eine Stichwortliste, die exakt vorgibt, welche Themen
          prüfungsrelevant sind. Viele lernen „alles", statt sich an der Liste zu orientieren. Das
          verschwendet Zeit. Arbeite die 173 offiziellen Stichwörter systematisch ab.
        </p>

        <h2>5. Keine Prüfungssimulationen machen</h2>
        <p>
          Der MedAT hat strenge Zeitlimits. Wer nie unter echten Bedingungen übt, wird am Testtag
          von Zeitdruck überrascht. Mach mindestens 3-4 vollständige Simulationen mit Timer vor dem
          echten Test.
        </p>

        <CTA text="Mit MedMaster alle 5 Fehler vermeiden: 4.300+ BMS-Fragen, adaptiver Lernplan und Prüfungssimulation." />
      </>
    ),
  },
  {
    slug: "kff-zahlenfolgen-tipps",
    title: "KFF Training: So verbesserst du deine Zahlenfolgen-Ergebnisse",
    excerpt:
      "Zahlenfolgen im MedAT folgen bestimmten Mustern. Wer diese kennt und systematisch übt, kann seine Trefferquote deutlich steigern.",
    topic: "KFF",
    readingTime: 5,
    publishDate: "2026-03-15",
    content: (
      <>
        <p>
          Zahlenfolgen sind einer von fünf KFF-Untertests im MedAT. Du bekommst eine Folge von
          Zahlen und musst das nächste Glied bestimmen. Klingt simpel — aber unter Zeitdruck mit
          komplexen Mustern wird es schnell knifflig. Hier sind bewährte Strategien.
        </p>

        <h2>Die 4 häufigsten Muster erkennen</h2>
        <p>Fast alle Zahlenfolgen im MedAT basieren auf einem dieser Grundmuster:</p>
        <ul>
          <li>
            <strong>Konstante Differenz:</strong> Die Abstände zwischen den Zahlen sind gleich (z.B.
            3, 7, 11, 15 → +4).
          </li>
          <li>
            <strong>Wachsende Differenz:</strong> Die Abstände nehmen zu (z.B. 2, 3, 5, 8, 12 → +1,
            +2, +3, +4).
          </li>
          <li>
            <strong>Faktor/Quotient:</strong> Jede Zahl ist ein Vielfaches der vorherigen (z.B. 2,
            6, 18, 54 → ×3).
          </li>
          <li>
            <strong>Verschachtelt:</strong> Zwei getrennte Folgen sind ineinander verzahnt (z.B. 1,
            10, 2, 20, 3, 30).
          </li>
        </ul>

        <h2>Strategie: Differenzenreihe bilden</h2>
        <p>
          Der effektivste Ansatz: Berechne die Differenzen zwischen aufeinanderfolgenden Zahlen.
          Wenn diese Differenzen ein erkennbares Muster bilden (konstant, linear steigend,
          alternierend), hast du die Regel gefunden. Wenn nicht, bilde die Differenzen der
          Differenzen — das funktioniert bei quadratischen Mustern.
        </p>

        <h2>Zeitmanagement: 25 Sekunden pro Aufgabe</h2>
        <p>
          Im MedAT hast du ca. 25 Sekunden pro Zahlenfolge. Trainiere mit Timer. Wenn du nach 15
          Sekunden kein Muster erkennst, überspringe die Aufgabe und komm später zurück. Eine
          falsche Antwort kostet keine Punkte — also rate lieber, als die Aufgabe leer zu lassen.
        </p>

        <h2>Übung macht den Meister — aber richtig</h2>
        <p>
          Das Problem mit festen Aufgabenpools: Nach 2-3 Durchgängen kennst du die Antworten
          auswendig und lernst nichts mehr. Algorithmisch generierte Aufgaben lösen dieses Problem —
          jede Aufgabe ist neu, und du trainierst echtes Mustererkennen statt Gedächtnis.
        </p>

        <CTA text="10.000+ Zahlenfolgen üben — algorithmisch generiert, nie Wiederholungen." />
      </>
    ),
  },
  {
    slug: "medat-lernplan-3-monate",
    title: "MedAT Lernplan: 3 Monate vor dem Test — was jetzt zählt",
    excerpt:
      "90 Tage bis zum MedAT: Ein realistischer Lernplan, der BMS, KFF, TV und SEK abdeckt — ohne Burnout.",
    topic: "Strategie",
    readingTime: 5,
    publishDate: "2026-03-15",
    content: (
      <>
        <p>
          Drei Monate vor dem MedAT ist der ideale Zeitpunkt, um die Vorbereitung zu strukturieren.
          Nicht zu früh (Motivation lässt nach), nicht zu spät (Stoff ist zu viel). Hier ist ein
          bewährter Plan, der alle vier MedAT-Bereiche abdeckt.
        </p>

        <h2>Monat 1: Fundament legen (BMS-Theorie + KFF-Einstieg)</h2>
        <p>
          Widme 70 % deiner Lernzeit dem BMS. Arbeite die offizielle Stichwortliste systematisch
          durch — Biologie und Chemie zuerst, da sie den größten Stoffumfang haben. Parallel:
          täglich 15-20 Minuten KFF üben (Zahlenfolgen, Implikationen, Wortflüssigkeit). Das
          trainiert kognitive Fähigkeiten, die sich nur langsam aufbauen.
        </p>

        <h2>Monat 2: Vertiefen + Fragen üben</h2>
        <p>
          Wechsle von reiner Theorie zu aktivem Üben. Ziel: mindestens 50-80 BMS-Fragen pro Tag.
          Analysiere jede falsche Antwort und wiederhole das zugrundeliegende Thema. Steigere die
          KFF-Intensität auf 30 Minuten täglich. Starte mit TV-Übungen: 2-3 Textsets pro Woche
          bearbeiten und Strategien verfeinern.
        </p>

        <h2>Monat 3: Simulation + Feinschliff</h2>
        <p>
          Mache in den letzten 4 Wochen mindestens 3 vollständige Prüfungssimulationen unter echten
          Bedingungen (Timer, keine Pausen, keine Hilfsmittel). Analysiere nach jeder Simulation
          deine Schwächen und arbeite sie gezielt auf. Die letzte Woche: nur noch Wiederholung und
          leichte Übungen — kein neuer Stoff mehr.
        </p>

        <h2>Tägliche Routine (ca. 4-5 Stunden)</h2>
        <ul>
          <li>60-90 Min: BMS-Theorie (ein Thema pro Tag)</li>
          <li>60-90 Min: BMS-Übungsfragen</li>
          <li>30 Min: KFF-Training</li>
          <li>30 Min: TV oder SEK (abwechselnd)</li>
          <li>15 Min: Schwachstellen-Review</li>
        </ul>

        <p>
          Das Wichtigste: Lerne regelmäßig und konsistent. 4 Stunden täglich über 3 Monate schlagen
          12 Stunden täglich in den letzten 3 Wochen.
        </p>

        <CTA text="MedMasters adaptiver Lernplan passt sich automatisch an deine Schwächen an." />
      </>
    ),
  },
  {
    slug: "bms-biologie-wichtigste-themen",
    title: "BMS Biologie: Die 10 wichtigsten Themen für den MedAT 2026",
    excerpt:
      "Nicht alle Biologie-Themen sind gleich prüfungsrelevant. Diese 10 Themen kommen fast jedes Jahr — und bringen die meisten Punkte.",
    topic: "BMS",
    readingTime: 5,
    publishDate: "2026-03-15",
    content: (
      <>
        <p>
          Biologie ist das umfangreichste BMS-Fach. Die offizielle Stichwortliste umfasst dutzende
          Themen — aber nicht alle sind gleich wichtig. Basierend auf der Analyse vergangener
          MedAT-Prüfungen sind diese 10 Themen besonders häufig vertreten.
        </p>

        <h2>1. Zellbiologie</h2>
        <p>
          Aufbau der Zelle, Organellen und ihre Funktionen, Unterschied pro- und eukaryotische
          Zellen. Kommt praktisch in jeder Prüfung vor.
        </p>

        <h2>2. Genetik und Vererbung</h2>
        <p>
          Mendelsche Regeln, Genotyp/Phänotyp, Erbgänge (autosomal-dominant, -rezessiv,
          X-chromosomal), Kreuzungsschemata. Ein Klassiker im BMS.
        </p>

        <h2>3. DNA und Molekulargenetik</h2>
        <p>
          DNA-Replikation, Transkription, Translation, Genregulation. Der Weg von der DNA zum
          Protein muss sitzen.
        </p>

        <h2>4. Zellteilung (Mitose und Meiose)</h2>
        <p>
          Phasen der Mitose und Meiose, Unterschiede, Chromosomenzahlen, Crossing-over.
          Prüfungsrelevant und oft mit Genetik kombiniert.
        </p>

        <h2>5. Evolution</h2>
        <p>
          Evolutionstheorien, Selektionstypen, Artbildung, Hardy-Weinberg-Gleichgewicht. Regelmäßig
          geprüft.
        </p>

        <h2>6. Ökologie</h2>
        <p>
          Nahrungsketten, Stoffkreisläufe, Populationsdynamik, biotische/abiotische Faktoren. Oft
          2-3 Fragen pro Prüfung.
        </p>

        <h2>7. Humanbiologie: Nervensystem</h2>
        <p>
          Aufbau einer Nervenzelle, Aktionspotenzial, Synapse, ZNS vs. PNS. Komplex, aber
          hochrelevant.
        </p>

        <h2>8. Humanbiologie: Immunsystem</h2>
        <p>
          Angeborene vs. erworbene Immunität, T-/B-Zellen, Antikörper, Impfungen. Ein Dauerbrenner.
        </p>

        <h2>9. Humanbiologie: Hormonsystem</h2>
        <p>
          Hypothalamus-Hypophysen-Achse, Schilddrüse, Blutzuckerregulation, Stresshormone. Oft in
          Kombination mit dem Nervensystem geprüft.
        </p>

        <h2>10. Stoffwechsel</h2>
        <p>
          Glykolyse, Citratzyklus, Atmungskette, Photosynthese. Besonders die Energiebilanz wird
          gerne abgefragt.
        </p>

        <CTA text="Alle 10 Themen abgedeckt: 1.100+ Biologie-Fragen mit detaillierten Erklärungen." />
      </>
    ),
  },
  {
    slug: "medat-textverstaendnis-strategien",
    title: "Textverständnis im MedAT: 5 Strategien für bessere Ergebnisse",
    excerpt:
      "Textverständnis (TV) im MedAT ist trainierbar. Mit der richtigen Lesetechnik holst du deutlich mehr Punkte.",
    topic: "TV",
    readingTime: 4,
    publishDate: "2026-03-15",
    content: (
      <>
        <p>
          Der Textverständnis-Teil (TV) des MedAT prüft, ob du komplexe Texte schnell erfassen und
          Fragen dazu beantworten kannst. Viele Kandidierende vernachlässigen TV, weil sie denken
          „Lesen kann ich ja". Aber gezieltes Training kann dein Ergebnis um 20-30 % verbessern.
        </p>

        <h2>1. Fragen zuerst lesen</h2>
        <p>
          Lies die Fragen, bevor du den Text liest. So weißt du, worauf du achten musst, und
          filterst relevante Informationen automatisch heraus. Das spart Zeit und erhöht die
          Trefferquote.
        </p>

        <h2>2. Absatz für Absatz arbeiten</h2>
        <p>
          Lies nicht den ganzen Text auf einmal, sondern Absatz für Absatz. Fasse nach jedem Absatz
          mental den Kerninhalt zusammen. Das verbessert dein Verständnis und hilft beim
          Wiederfinden von Textstellen.
        </p>

        <h2>3. Schlüsselwörter markieren</h2>
        <p>
          Unterstreiche oder markiere Schlüsselwörter: Zahlen, Namen, kausale Zusammenhänge („weil",
          „daher", „obwohl"), Einschränkungen („nur", „ausschließlich", „teilweise"). Diese Wörter
          sind oft entscheidend für die richtige Antwort.
        </p>

        <h2>4. Ausschlussverfahren nutzen</h2>
        <p>
          Wenn du unsicher bist, streiche zuerst die eindeutig falschen Optionen. Bei 5
          Antwortmöglichkeiten reicht es oft, 2-3 auszuschließen — dann ist die Wahrscheinlichkeit
          für die richtige Antwort deutlich höher.
        </p>

        <h2>5. Zeitmanagement: Nicht festbeißen</h2>
        <p>
          Du hast begrenzte Zeit pro Textset. Wenn eine Frage zu schwierig ist, markiere sie und
          komm später zurück. Beantworte zuerst die Fragen, bei denen du dir sicher bist — das
          sichert Punkte und gibt Selbstvertrauen.
        </p>

        <CTA text="10 vollständige TV-Textsets mit 120 Fragen — trainiere unter echten Bedingungen." />
      </>
    ),
  },
  {
    slug: "medat-simulation-wichtig",
    title: "MedAT Simulation: Warum Probeprüfungen entscheidend sind",
    excerpt:
      "Wer den MedAT nur themenweise übt, verschenkt Punkte. Vollständige Simulationen unter Zeitdruck sind der Schlüssel zum Erfolg.",
    topic: "Strategie",
    readingTime: 4,
    publishDate: "2026-03-15",
    content: (
      <>
        <p>
          Stell dir vor, du trainierst für einen Marathon — aber du läufst nie mehr als 5 km am
          Stück. Am Wettkampftag wärst du nach der Hälfte am Ende. Genau so ist es beim MedAT:
          Einzelne Themen üben ist wichtig, aber ohne vollständige Prüfungssimulationen fehlt dir
          die entscheidende Erfahrung.
        </p>

        <h2>Der MedAT ist ein Marathon, kein Sprint</h2>
        <p>
          Der Test dauert über 4 Stunden und umfasst 211 Aufgaben in 4 verschiedenen Bereichen. Das
          erfordert nicht nur Wissen, sondern auch Ausdauer, Konzentration und Zeitmanagement. Diese
          Fähigkeiten trainierst du nur in der Simulation.
        </p>

        <h2>Zeitdruck realistisch erleben</h2>
        <p>
          Im BMS hast du ca. 75 Sekunden pro Frage. Das klingt viel, aber bei schwierigen Fragen
          wird es knapp. In der KFF-Sektion hast du teilweise nur 25 Sekunden pro Aufgabe. Wer
          diesen Druck vorher nicht erlebt hat, verliert am Testtag wertvolle Minuten durch Panik
          oder zu langes Grübeln.
        </p>

        <h2>Schwächen unter Druck erkennen</h2>
        <p>
          Interessanterweise sind die Themen, die du unter Zeitdruck falsch beantwortest, oft andere
          als die, die du in Ruhe falsch machst. Simulationen decken diese „verborgenen Schwächen"
          auf. Erst dann weißt du wirklich, wo du stehst.
        </p>

        <h2>Die optimale Simulations-Strategie</h2>
        <ul>
          <li>Erste Simulation: 8-10 Wochen vor dem Test (Standortbestimmung)</li>
          <li>Zweite + Dritte: 4-6 Wochen vor dem Test (Fortschrittskontrolle)</li>
          <li>Letzte Simulation: 1 Woche vor dem Test (Generalprobe)</li>
        </ul>
        <p>
          Wichtig: Analysiere nach jeder Simulation deine Ergebnisse. Welche Themen waren schwach?
          Wo hast du Zeit verloren? Nutze die verbleibende Zeit, um genau diese Lücken zu schließen.
        </p>

        <CTA text="Vollständige MedAT-Simulation: 211 Fragen, 271 Minuten, echte Zeitlimits pro Testteil." />
      </>
    ),
  },
  {
    slug: "medat-punkte-berechnen",
    title: "MedAT Punkte berechnen: So funktioniert der Punkteschlüssel",
    excerpt:
      "Wie werden MedAT-Punkte berechnet? Wir erklären den Punkteschlüssel, die Gewichtung der Testteile und welche Punktzahl du realistisch brauchst.",
    topic: "Strategie",
    readingTime: 5,
    publishDate: "2026-03-16",
    content: (
      <>
        <p>
          Eine der häufigsten Fragen von MedAT-Kandidierenden: „Wie viele Punkte brauche ich?" Die
          Antwort hängt vom Punkteschlüssel ab — und der ist komplexer, als viele denken. Hier
          erfährst du, wie die Berechnung funktioniert, wie die einzelnen Testteile gewichtet werden
          und welche Punktzahl erfahrungsgemäß für einen Studienplatz reicht.
        </p>

        <h2>Die Gewichtung der vier Testteile</h2>
        <p>
          Der MedAT besteht aus vier Bereichen mit unterschiedlicher Gewichtung: BMS
          (Basiskenntnistest) zählt 40 %, TV (Textverständnis) 10 %, KFF (Kognitive Fähigkeiten und
          Fertigkeiten) 40 % und SEK (Sozial-emotionale Kompetenzen) 10 %. Das bedeutet: BMS und KFF
          zusammen machen 80 % deines Gesamtergebnisses aus. Wer hier stark ist, hat die besten
          Chancen.
        </p>

        <h2>Wie die Rohpunkte berechnet werden</h2>
        <p>
          Im BMS gibt es für jede richtige Antwort einen Punkt, falsche Antworten werden nicht
          abgezogen. Bei 40 BMS-Fragen (je 10 pro Fach) sind also maximal 40 Rohpunkte möglich. Im
          KFF werden die fünf Untertests (Zahlenfolgen, Figuren zusammensetzen, Wortflüssigkeit,
          Gedächtnis und Merkfähigkeit, Implikationen erkennen) einzeln gewertet. Im TV gibt es
          Punkte pro richtig beantworteter Frage. Die Rohpunkte jedes Testteils werden anschließend
          in Prozentwerte umgerechnet und mit der jeweiligen Gewichtung multipliziert.
        </p>

        <h2>Welche Punktzahl reicht für einen Studienplatz?</h2>
        <p>
          Der MedAT ist ein Ranking-Test: Es gibt keine fixe Bestehensgrenze, sondern du
          konkurrierst mit allen anderen Teilnehmenden. In den letzten Jahren lag der Cutoff für
          einen Studienplatz in Wien bei ca. 75-82 % der Gesamtpunkte, in Graz und Innsbruck etwas
          niedriger. Plane also mindestens 80 % als Ziel ein — das lässt Puffer für schwankende
          Schwierigkeitsgrade.
        </p>

        <h2>Strategische Konsequenzen</h2>
        <p>
          Da BMS und KFF jeweils 40 % zählen, lohnt es sich, beide Bereiche gleichmäßig zu
          trainieren. Ein häufiger Fehler: Kandidierende investieren 90 % ihrer Zeit in BMS und
          vernachlässigen KFF. Dabei sind KFF-Punkte oft leichter zu steigern, weil die Untertests
          durch Übung schnell besser werden. TV und SEK solltest du nicht ignorieren — 20 %
          Gewichtung können bei knappem Ranking den Unterschied machen.
        </p>

        <CTA text="MedMaster zeigt dir nach jeder Übung deine simulierte Gesamtpunktzahl — damit du weißt, wo du stehst." />
      </>
    ),
  },
  {
    slug: "medat-kff-tipps",
    title: "KFF-Training: So verbesserst du dich in allen 5 Untertests",
    excerpt:
      "Die KFF-Sektion zählt 40 % im MedAT. Mit gezieltem Training in allen 5 Untertests kannst du deine Punkte systematisch steigern.",
    topic: "KFF",
    readingTime: 6,
    publishDate: "2026-03-16",
    content: (
      <>
        <p>
          Die Sektion „Kognitive Fähigkeiten und Fertigkeiten" (KFF) ist mit 40 % Gewichtung genauso
          wichtig wie der BMS — wird aber von vielen Kandidierenden unterschätzt. Der große Vorteil:
          KFF-Fähigkeiten lassen sich durch systematisches Training deutlich verbessern. Hier sind
          konkrete Tipps für jeden der fünf Untertests.
        </p>

        <h2>1. Zahlenfolgen (ZF)</h2>
        <p>
          Bilde immer zuerst die Differenzenreihe. Wenn die Differenzen kein Muster zeigen, prüfe
          auf Faktoren (×2, ×3) oder verschachtelte Folgen (jede zweite Zahl bildet eine eigene
          Reihe). Trainiere täglich 10-15 Aufgaben mit Timer — 25 Sekunden pro Aufgabe ist das Ziel.
          Erkennst du nach 15 Sekunden kein Muster, überspringe und komm später zurück.
        </p>

        <h2>2. Figuren zusammensetzen (FZ)</h2>
        <p>
          Du siehst Teilstücke und musst erkennen, welche Gesamtfigur sie bilden. Strategie: Suche
          zuerst die größte Teilfigur und prüfe, zu welchen Optionen sie passen könnte. Achte auf
          markante Ecken und Kanten — sie schränken die Möglichkeiten schnell ein. Übung mit
          verschiedenen Schwierigkeitsgraden ist entscheidend.
        </p>

        <h2>3. Wortflüssigkeit (WF)</h2>
        <p>
          Du bekommst Buchstaben und musst das Wort finden, das sich daraus bilden lässt. Tipp:
          Beginne nicht mit dem ersten Buchstaben, sondern suche nach häufigen
          Buchstabenkombinationen (SCH, CH, EI, AU, ER, EN). Trainiere mit einem breiten Wortschatz
          — je mehr Wörter du kennst, desto schneller erkennst du die Lösung.
        </p>

        <h2>4. Implikationen erkennen (IE)</h2>
        <p>
          Hier musst du aus Prämissen logische Schlüsse ziehen. Merke dir die Grundregeln: „Alle A
          sind B" bedeutet nicht „Alle B sind A". Zeichne bei komplexen Aufgaben Venn-Diagramme —
          das macht abstrakte Logik visuell greifbar. Übe besonders mit Aufgaben, bei denen die
          Antwort „Keine Schlussfolgerung ist zwingend" lautet — das wird oft übersehen.
        </p>

        <h2>5. Gedächtnis und Merkfähigkeit (GM)</h2>
        <p>
          Du musst dir Fakten über fiktive Personen merken (Alter, Beruf, Hobbys etc.) und später
          Fragen dazu beantworten. Nutze Merktechniken: Verbinde jede Person mit einem mentalen Bild
          oder einer Geschichte. Je absurder die Verknüpfung, desto besser bleibt sie haften.
          Trainiere regelmäßig mit verschiedenen Profilmengen (8, 10, 12 Personen).
        </p>

        <h2>Der wichtigste Tipp: Täglich üben</h2>
        <p>
          KFF-Fähigkeiten bauen sich langsam auf — 15-30 Minuten täglich über Wochen bringt mehr als
          3 Stunden am Stück kurz vor dem Test. Beginne mindestens 8 Wochen vor dem MedAT mit
          regelmäßigem KFF-Training.
        </p>

        <CTA text="Alle 5 KFF-Untertests mit algorithmisch generierten Aufgaben trainieren — nie Wiederholungen." />
      </>
    ),
  },
  {
    slug: "medat-schwierigkeitsgrad",
    title: "Wie schwer ist der MedAT wirklich? Zahlen und Fakten",
    excerpt:
      "Alle reden davon, wie schwer der MedAT ist — aber wie sehen die tatsächlichen Zahlen aus? Ein nüchterner Blick auf Teilnehmerzahlen, Erfolgsquoten und Schwierigkeitsgrad.",
    topic: "Strategie",
    readingTime: 5,
    publishDate: "2026-03-16",
    content: (
      <>
        <p>
          Der MedAT gilt als einer der härtesten Aufnahmetests im deutschsprachigen Raum. Aber ist
          er wirklich so schwer, wie alle sagen? In diesem Artikel schauen wir uns die konkreten
          Zahlen an — Teilnehmerquoten, Aufnahmeraten und was der Test tatsächlich von dir verlangt.
        </p>

        <h2>Die Zahlen: Wie viele schaffen es?</h2>
        <p>
          Jedes Jahr treten rund 12.000-16.000 Personen zum MedAT an. Die öffentlichen Universitäten
          in Wien, Graz, Innsbruck und Linz vergeben zusammen etwa 1.850 Studienplätze für
          Humanmedizin. Das ergibt eine Aufnahmequote von ca. 12-15 %. In Wien, dem beliebtesten
          Standort, liegt die Quote noch niedriger — oft unter 10 %. Zum Vergleich: An deutschen
          Unis mit NC liegt die Zulassungsquote über den ZV (Zentrales Vergabeverfahren) bei etwa 20
          %.
        </p>

        <h2>Was macht den MedAT schwer?</h2>
        <p>
          Es ist weniger die Schwierigkeit einzelner Fragen, sondern die Kombination aus Breite und
          Zeitdruck. Der BMS verlangt Wissen in vier naturwissenschaftlichen Fächern auf
          Maturaniveau. Die KFF-Sektion testet kognitive Fähigkeiten unter extremem Zeitdruck
          (teilweise 25 Sekunden pro Aufgabe). Dazu kommen Textverständnis und sozial-emotionale
          Kompetenzen. Diese Vielfalt macht eine gezielte Vorbereitung unverzichtbar.
        </p>

        <h2>Ist der Stoff schwer?</h2>
        <p>
          Das BMS-Niveau liegt grundsätzlich auf Matura- bzw. Abiturniveau — also kein
          Universitätsstoff. Aber: Die Fragen sind tricky. Sie testen nicht nur, ob du ein Thema
          kennst, sondern ob du es wirklich verstanden hast. Ablenkungsoptionen (Distraktoren) sind
          so formuliert, dass oberflächliches Wissen nicht reicht. Wer den Stoff nur auswendig
          lernt, fällt auf die falschen Antworten rein.
        </p>

        <h2>Wie lange muss man lernen?</h2>
        <p>
          Die meisten erfolgreichen Kandidierenden berichten von 3-6 Monaten Vorbereitung bei
          täglich 3-5 Stunden Lernzeit. Das entspricht etwa 300-600 Stunden Gesamtaufwand. Wer
          bereits eine naturwissenschaftliche Matura hat, braucht tendenziell weniger Zeit. Wer aus
          einem anderen Bereich kommt, sollte mehr einplanen.
        </p>

        <h2>Die gute Nachricht</h2>
        <p>
          Der MedAT ist trainierbar. Anders als reine Intelligenztests belohnt er systematische
          Vorbereitung. KFF-Fähigkeiten verbessern sich nachweislich durch Übung, BMS-Wissen lässt
          sich aufbauen und Textverständnis-Strategien sind erlernbar. Wer früh anfängt,
          strukturiert lernt und genug Übungsfragen durcharbeitet, hat realistische Chancen —
          unabhängig vom Ausgangsniveau.
        </p>

        <CTA text="Strukturiert vorbereiten: 4.300+ BMS-Fragen, KFF-Training und Prüfungssimulation in einer App." />
      </>
    ),
  },
  {
    slug: "bms-chemie-lernen",
    title: "BMS Chemie: Die 8 wichtigsten Themen für den MedAT",
    excerpt:
      "Chemie ist für viele MedAT-Kandidierende das schwierigste BMS-Fach. Diese 8 Themen sind besonders prüfungsrelevant — und so gehst du sie an.",
    topic: "BMS",
    readingTime: 5,
    publishDate: "2026-03-16",
    content: (
      <>
        <p>
          Chemie gilt unter MedAT-Kandidierenden als das anspruchsvollste BMS-Fach. Der Stoff reicht
          vom Atombau bis zur Organischen Chemie — und die Fragen erfordern echtes Verständnis,
          nicht nur Auswendiglernen. Hier sind die 8 wichtigsten Themen, die du für den MedAT
          beherrschen musst.
        </p>

        <h2>1. Atombau und Periodensystem</h2>
        <p>
          Elektronenkonfiguration, Ordnungszahl, Massenzahl, Isotope, Aufbau des PSE, Periodentrends
          (Elektronegativität, Ionisierungsenergie, Atomradius). Das Fundament für alles Weitere —
          ohne das geht nichts.
        </p>

        <h2>2. Chemische Bindung</h2>
        <p>
          Ionenbindung, kovalente Bindung, metallische Bindung, Van-der-Waals-Kräfte,
          Wasserstoffbrückenbindung. Entscheidend: Wann welche Bindung entsteht und wie sie
          Stoffeigenschaften beeinflusst. VSEPR-Modell und Lewis-Formeln werden regelmäßig geprüft.
        </p>

        <h2>3. Stöchiometrie</h2>
        <p>
          Mol-Berechnungen, molare Masse, Reaktionsgleichungen ausgleichen,
          Stoffmengen-Verhältnisse. Hier wird oft gerechnet — übe konkrete Aufgaben, nicht nur die
          Theorie. Typische Falle: Einheiten vergessen oder die Gleichung nicht korrekt
          ausbalancieren.
        </p>

        <h2>4. Säuren, Basen und pH-Wert</h2>
        <p>
          Brønsted-Definition, pH- und pOH-Berechnung, starke vs. schwache Säuren, Puffersysteme,
          Neutralisation. Rechenaufgaben zum pH-Wert kommen fast jedes Jahr. Merke: pH = −log[H₃O⁺]
          und die Beziehung pH + pOH = 14.
        </p>

        <h2>5. Redoxreaktionen</h2>
        <p>
          Oxidation, Reduktion, Oxidationszahlen bestimmen, Redoxgleichungen aufstellen,
          elektrochemische Spannungsreihe, Galvanische Zellen. Das Bestimmen von Oxidationszahlen
          ist eine Kernkompetenz, die du sicher beherrschen musst.
        </p>

        <h2>6. Organische Chemie</h2>
        <p>
          Funktionelle Gruppen (Alkohol, Aldehyd, Keton, Carbonsäure, Ester, Amin, Amid),
          Nomenklatur, Isomerie, Reaktionstypen (Substitution, Addition, Elimination). Besonders
          wichtig: funktionelle Gruppen erkennen und benennen.
        </p>

        <h2>7. Chemisches Gleichgewicht</h2>
        <p>
          Gleichgewichtskonstante, Le-Chatelier-Prinzip, Einfluss von Temperatur/Druck/Konzentration
          auf das Gleichgewicht. Das Le-Chatelier-Prinzip ist ein absoluter Prüfungsklassiker.
        </p>

        <h2>8. Lösungen und Konzentrationen</h2>
        <p>
          Löslichkeit, Massenkonzentration, Stoffmengenkonzentration (Molarität), Verdünnungsregel,
          Löslichkeitsprodukt. Auch hier wird regelmäßig gerechnet — Umrechnungen zwischen
          verschiedenen Konzentrationsangaben musst du im Schlaf können.
        </p>

        <CTA text="Alle 8 Chemie-Themen abgedeckt: 1.400+ Chemie-Fragen mit Schritt-für-Schritt-Erklärungen." />
      </>
    ),
  },
  {
    slug: "medat-2026-aenderungen",
    title: "MedAT 2026: Was sich ändert und wie du dich vorbereitest",
    excerpt:
      "Der MedAT wird regelmäßig angepasst. Hier erfährst du, was sich 2026 ändert und wie du deine Vorbereitung darauf ausrichtest.",
    topic: "Strategie",
    readingTime: 4,
    publishDate: "2026-03-16",
    content: (
      <>
        <p>
          Jedes Jahr passen die Medizinischen Universitäten den MedAT leicht an. Für 2026 gibt es
          einige relevante Neuerungen, die deine Vorbereitung beeinflussen können. Hier ist ein
          Überblick über die wichtigsten Änderungen und was sie für dich bedeuten.
        </p>

        <h2>Grundstruktur bleibt stabil</h2>
        <p>
          Die vier Testbereiche — BMS (40 %), KFF (40 %), TV (10 %) und SEK (10 %) — bleiben
          bestehen. Auch das Format mit Multiple-Choice-Fragen (5 Optionen, eine richtige Antwort)
          ändert sich nicht. Wer sich bereits vorbereitet hat, muss also nicht bei null anfangen.
          Die bewährten Strategien funktionieren weiterhin.
        </p>

        <h2>Aktualisierte Stichwortliste</h2>
        <p>
          Die offizielle BMS-Stichwortliste wird jährlich aktualisiert. Achte unbedingt auf die
          neueste Version auf der Website der Medizinischen Universität. Vergleiche sie mit der
          Vorjahresversion: Wurden Themen hinzugefügt oder entfernt? Neue Stichwörter bedeuten neue
          Fragetypen — und alte, gestrichene Themen kannst du getrost weglassen. Die Stichwortliste
          ist dein wichtigstes Orientierungsdokument.
        </p>

        <h2>KFF: Gleiche 5 Untertests, neue Aufgabentypen</h2>
        <p>
          Die fünf KFF-Untertests (Zahlenfolgen, Figuren zusammensetzen, Wortflüssigkeit,
          Implikationen erkennen, Gedächtnis und Merkfähigkeit) bleiben gleich. Allerdings variieren
          die konkreten Aufgabenformate leicht von Jahr zu Jahr. Deshalb ist es wichtig, mit
          vielfältigen Aufgaben zu trainieren und sich nicht auf einen festen Pool zu verlassen.
          Algorithmisch generierte Aufgaben bieten hier einen klaren Vorteil.
        </p>

        <h2>Termine und Anmeldung 2026</h2>
        <p>
          Der MedAT findet traditionell Anfang Juli statt. Die Anmeldung öffnet üblicherweise im
          März und schließt Anfang April — verpasse diese Frist nicht, eine Nachmeldung ist nicht
          möglich. Prüfe die offiziellen Websites der MedUnis regelmäßig für aktuelle
          Terminbekanntgaben. Wähle deinen bevorzugten Standort (Wien, Graz, Innsbruck oder Linz)
          strategisch — die Aufnahmequoten unterscheiden sich.
        </p>

        <h2>Was du jetzt tun solltest</h2>
        <p>
          Beginne jetzt mit der Vorbereitung, falls du es noch nicht getan hast. Drei Monate
          strukturiertes Lernen sind das Minimum. Lade die aktuelle Stichwortliste herunter,
          erstelle einen Lernplan und starte mit BMS-Theorie und täglichem KFF-Training. Je früher
          du anfängst, desto gelassener gehst du in den Testtag.
        </p>

        <CTA text="MedMaster ist für den MedAT 2026 optimiert: Aktuelle Inhalte, alle Testbereiche, adaptive Übungen." />
      </>
    ),
  },
  {
    slug: "medat-zeitmanagement",
    title: "Zeitmanagement im MedAT: So teilst du deine Zeit richtig ein",
    excerpt:
      "Viele MedAT-Teilnehmende scheitern nicht am Wissen, sondern am Zeitmanagement. Hier erfährst du, wie viel Zeit du pro Testteil und Aufgabe hast — und wie du sie optimal nutzt.",
    topic: "Strategie",
    readingTime: 5,
    publishDate: "2026-03-16",
    content: (
      <>
        <p>
          Zeitdruck ist der unsichtbare Gegner im MedAT. Viele Kandidierende wüssten die richtige
          Antwort — wenn sie nur genug Zeit hätten. Das Problem: Der MedAT gibt dir bewusst weniger
          Zeit, als du bräuchtest, um jede Frage in Ruhe zu durchdenken. Gutes Zeitmanagement ist
          deshalb genauso wichtig wie gutes Fachwissen.
        </p>

        <h2>Die Zeitlimits im Überblick</h2>
        <p>
          Der BMS dauert insgesamt 75 Minuten für 40 Fragen — das sind knapp 113 Sekunden pro Frage.
          Im KFF variieren die Zeiten stark: Zahlenfolgen erlauben ca. 25 Sekunden pro Aufgabe,
          Gedächtnis und Merkfähigkeit hat eine feste Einpräge- und Abfragephase, Figuren
          zusammensetzen gibt ca. 35 Sekunden pro Aufgabe. Im TV hast du etwa 12,5 Minuten pro
          Textset (Text lesen + Fragen beantworten). Insgesamt dauert der MedAT über 4 Stunden.
        </p>

        <h2>Strategie 1: Die 80/20-Regel anwenden</h2>
        <p>
          Nicht alle Fragen sind gleich schwer. Beantworte zuerst die Fragen, bei denen du dir
          sicher bist — das sind oft 60-70 % der Aufgaben. Dann gehe die unsicheren Fragen durch und
          versuche, durch Ausschlussverfahren die richtige Antwort zu finden. Aufgaben, bei denen du
          gar keinen Ansatz hast, beantwortest du zuletzt durch begründetes Raten. Da es keinen
          Punktabzug für falsche Antworten gibt, solltest du niemals eine Frage leer lassen.
        </p>

        <h2>Strategie 2: Zeitanker setzen</h2>
        <p>
          Teile den BMS mental in 4 Blöcke à 10 Fragen ein. Nach jeweils 10 Fragen sollten ca. 18
          Minuten vergangen sein. Wenn du deutlich darüber liegst, beschleunige. Wenn du drunter
          liegst, nutze die Zeitreserve für schwierige Fragen am Ende. Diese Zeitanker verhindern,
          dass du dich an einzelnen Fragen festbeißt und am Ende in Panik gerätst.
        </p>

        <h2>Strategie 3: Markieren und Zurückkommen</h2>
        <p>
          Im MedAT kannst du innerhalb eines Testteils Fragen überspringen und später zurückkommen.
          Nutze das aktiv: Wenn du nach 30 Sekunden keinen klaren Lösungsweg siehst, markiere die
          Frage und geh weiter. Am Ende hast du oft noch 5-10 Minuten für die markierten Fragen —
          und manchmal kommt die Lösung, wenn der Druck weg ist.
        </p>

        <h2>In der Vorbereitung trainieren</h2>
        <p>
          Zeitmanagement lernst du nicht aus Büchern, sondern durch Praxis. Übe von Anfang an mit
          Timer. Starte großzügig (z.B. 2 Minuten pro BMS-Frage) und reduziere die Zeit schrittweise
          auf das echte Zeitlimit. Mache regelmäßig vollständige Prüfungssimulationen unter
          realistischen Bedingungen — nur so entwickelst du ein Gefühl für das richtige Tempo.
        </p>

        <CTA text="MedMaster hat integrierte Timer in jedem Testteil — trainiere von Anfang an unter realistischem Zeitdruck." />
      </>
    ),
  },
];
