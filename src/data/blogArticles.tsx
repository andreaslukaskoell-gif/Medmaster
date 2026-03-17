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
          Plane mindestens{" "}
          <Link
            to="/blog/medat-lernplan-3-monate"
            className="text-[#1b3ea7] underline hover:opacity-80"
          >
            3 Monate
          </Link>{" "}
          ein — idealerweise mehr.
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
          (z.B.{" "}
          <Link
            to="/blog/bms-biologie-wichtigste-themen"
            className="text-[#1b3ea7] underline hover:opacity-80"
          >
            Genetik
          </Link>
          , Stöchiometrie, Optik) und investiere dort überproportional Zeit.
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
          von Zeitdruck überrascht. Mach mindestens 3-4 vollständige{" "}
          <Link
            to="/blog/medat-simulation-wichtig"
            className="text-[#1b3ea7] underline hover:opacity-80"
          >
            Prüfungssimulationen
          </Link>{" "}
          mit Timer vor dem echten Test.
        </p>

        <CTA text="Mit MedMaster alle 5 Fehler vermeiden: 5.000+ BMS-Fragen, adaptiver Lernplan und Prüfungssimulation." />
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
          Zahlenfolgen sind einer von fünf{" "}
          <Link to="/blog/medat-kff-tipps" className="text-[#1b3ea7] underline hover:opacity-80">
            KFF-Untertests
          </Link>{" "}
          im MedAT. Du bekommst eine Folge von Zahlen und musst das nächste Glied bestimmen. Klingt
          simpel — aber unter Zeitdruck mit komplexen Mustern wird es schnell knifflig. Hier sind
          bewährte Strategien.
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

        <h2>
          <Link
            to="/blog/medat-zeitmanagement"
            className="text-[#1b3ea7] underline hover:opacity-80"
          >
            Zeitmanagement
          </Link>
          : 25 Sekunden pro Aufgabe
        </h2>
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
          täglich 15-20 Minuten{" "}
          <Link to="/blog/medat-kff-tipps" className="text-[#1b3ea7] underline hover:opacity-80">
            KFF üben
          </Link>{" "}
          (Zahlenfolgen, Implikationen, Wortflüssigkeit). Das trainiert kognitive Fähigkeiten, die
          sich nur langsam aufbauen.
        </p>

        <h2>Monat 2: Vertiefen + Fragen üben</h2>
        <p>
          Wechsle von reiner Theorie zu aktivem Üben. Ziel: mindestens 50-80 BMS-Fragen pro Tag.
          Analysiere jede falsche Antwort und wiederhole das zugrundeliegende Thema. Steigere die
          KFF-Intensität auf 30 Minuten täglich. Starte mit{" "}
          <Link
            to="/blog/medat-textverstaendnis-strategien"
            className="text-[#1b3ea7] underline hover:opacity-80"
          >
            TV-Übungen
          </Link>
          : 2-3 Textsets pro Woche bearbeiten und Strategien verfeinern.
        </p>

        <h2>Monat 3: Simulation + Feinschliff</h2>
        <p>
          Mache in den letzten 4 Wochen mindestens 3 vollständige{" "}
          <Link
            to="/blog/medat-simulation-wichtig"
            className="text-[#1b3ea7] underline hover:opacity-80"
          >
            Prüfungssimulationen
          </Link>{" "}
          unter echten Bedingungen (Timer, keine Pausen, keine Hilfsmittel). Analysiere nach jeder
          Simulation deine Schwächen und arbeite sie gezielt auf. Die letzte Woche: nur noch
          Wiederholung und leichte Übungen — kein neuer Stoff mehr.
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
          Themen — aber nicht alle sind gleich wichtig. Vermeide die{" "}
          <Link to="/blog/medat-bms-fehler" className="text-[#1b3ea7] underline hover:opacity-80">
            häufigsten BMS-Fehler
          </Link>{" "}
          und konzentriere dich auf die Themen, die basierend auf der Analyse vergangener
          MedAT-Prüfungen besonders häufig vertreten sind.
        </p>

        <h2>
          1.{" "}
          <Link
            to="/blog/medat-biologie-zellbiologie"
            className="text-[#1b3ea7] underline hover:opacity-80"
          >
            Zellbiologie
          </Link>
        </h2>
        <p>
          Aufbau der Zelle, Organellen und ihre Funktionen, Unterschied pro- und eukaryotische
          Zellen. Kommt praktisch in jeder Prüfung vor.
        </p>

        <h2>
          2.{" "}
          <Link
            to="/blog/medat-biologie-genetik"
            className="text-[#1b3ea7] underline hover:opacity-80"
          >
            Genetik und Vererbung
          </Link>
        </h2>
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
          „Lesen kann ich ja". Aber gezieltes Training — idealerweise in einer{" "}
          <Link
            to="/blog/medat-simulation-wichtig"
            className="text-[#1b3ea7] underline hover:opacity-80"
          >
            vollständigen Prüfungssimulation
          </Link>{" "}
          — kann dein Ergebnis um 20-30 % verbessern.
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

        <h2>
          5.{" "}
          <Link
            to="/blog/medat-zeitmanagement"
            className="text-[#1b3ea7] underline hover:opacity-80"
          >
            Zeitmanagement
          </Link>
          : Nicht festbeißen
        </h2>
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
          erfordert nicht nur Wissen, sondern auch Ausdauer, Konzentration und{" "}
          <Link
            to="/blog/medat-zeitmanagement"
            className="text-[#1b3ea7] underline hover:opacity-80"
          >
            Zeitmanagement
          </Link>
          . Diese Fähigkeiten trainierst du nur in der Simulation.
        </p>

        <h2>Zeitdruck realistisch erleben</h2>
        <p>
          Im BMS hast du ca. 75 Sekunden pro Frage. Das klingt viel, aber bei schwierigen Fragen
          wird es knapp. In der{" "}
          <Link to="/blog/medat-kff-tipps" className="text-[#1b3ea7] underline hover:opacity-80">
            KFF-Sektion
          </Link>{" "}
          hast du teilweise nur 25 Sekunden pro Aufgabe. Wer diesen Druck vorher nicht erlebt hat,
          verliert am Testtag wertvolle Minuten durch Panik oder zu langes Grübeln.
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
          Wo hast du Zeit verloren? Integriere die Simulationen in deinen{" "}
          <Link
            to="/blog/medat-lernplan-3-monate"
            className="text-[#1b3ea7] underline hover:opacity-80"
          >
            Lernplan
          </Link>
          , um genau diese Lücken zu schließen.
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
          KFF werden die{" "}
          <Link to="/blog/medat-kff-tipps" className="text-[#1b3ea7] underline hover:opacity-80">
            fünf Untertests
          </Link>{" "}
          (Zahlenfolgen, Figuren zusammensetzen, Wortflüssigkeit, Gedächtnis und Merkfähigkeit,
          Implikationen erkennen) einzeln gewertet. Im TV gibt es Punkte pro richtig beantworteter
          Frage. Die Rohpunkte jedes Testteils werden anschließend in Prozentwerte umgerechnet und
          mit der jeweiligen Gewichtung multipliziert.
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
          trainieren. Ein{" "}
          <Link to="/blog/medat-bms-fehler" className="text-[#1b3ea7] underline hover:opacity-80">
            häufiger Fehler
          </Link>
          : Kandidierende investieren 90 % ihrer Zeit in BMS und vernachlässigen KFF. Dabei sind
          KFF-Punkte oft leichter zu steigern, weil die Untertests durch Übung schnell besser
          werden. TV und SEK solltest du nicht ignorieren — 20 % Gewichtung können bei knappem
          Ranking den Unterschied machen.
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

        <h2>
          1.{" "}
          <Link
            to="/blog/kff-zahlenfolgen-tipps"
            className="text-[#1b3ea7] underline hover:opacity-80"
          >
            Zahlenfolgen (ZF)
          </Link>
        </h2>
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

        <h2>
          3.{" "}
          <Link
            to="/blog/medat-wortfluessigkeit-ueben"
            className="text-[#1b3ea7] underline hover:opacity-80"
          >
            Wortflüssigkeit (WF)
          </Link>
        </h2>
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

        <CTA text="Strukturiert vorbereiten: 5.000+ BMS-Fragen, KFF-Training und Prüfungssimulation in einer App." />
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
  {
    slug: "medat-biologie-zellbiologie",
    title: "BMS Biologie: Zellbiologie kompakt — alles was du wissen musst",
    excerpt:
      "Zellbiologie ist das Fundament der BMS-Biologie. Organellen, Membrantransport, Zellteilung — hier bekommst du den kompletten Überblick.",
    topic: "BMS",
    readingTime: 5,
    publishDate: "2026-03-16",
    content: (
      <>
        <p>
          Zellbiologie ist das meistgeprüfte Thema im BMS-Biologie-Teil des MedAT. Kein Wunder: Die
          Zelle ist die Grundeinheit des Lebens, und fast jedes andere Biologiethema baut darauf
          auf. Wer Zellbiologie nicht versteht, wird auch bei Genetik, Immunologie und Stoffwechsel
          Probleme haben. Hier ist dein kompakter Überblick über alles Prüfungsrelevante.
        </p>

        <h2>Prokaryoten vs. Eukaryoten</h2>
        <p>
          Die grundlegendste Unterscheidung: Prokaryotische Zellen (Bakterien, Archaeen) haben
          keinen Zellkern — ihre DNA liegt frei im Zytoplasma als Nukleoid vor. Eukaryotische Zellen
          (Pflanzen, Tiere, Pilze) besitzen einen membranumschlossenen Zellkern und zahlreiche
          Organellen. Im MedAT wird regelmäßig nach Unterschieden gefragt — lerne sie als Tabelle
          auswendig: Zellkern, Ribosomengröße (70S vs. 80S), Zellwand, Organellen.
        </p>

        <h2>Die wichtigsten Zellorganellen</h2>
        <p>
          Jede Organelle hat eine spezifische Funktion, die du kennen musst: Mitochondrien
          (Zellatmung, ATP-Produktion), Endoplasmatisches Retikulum (raues ER: Proteinsynthese,
          glattes ER: Lipidsynthese), Golgi-Apparat (Proteinmodifikation und -sortierung), Lysosomen
          (intrazellulärer Abbau), Ribosomen (Translation). Bei Pflanzenzellen kommen Chloroplasten
          (Photosynthese), Zellwand und Vakuole hinzu. Typische MedAT-Falle: Mitochondrien und
          Chloroplasten haben eine Doppelmembran — andere Organellen nicht.
        </p>

        <h2>Membrantransport verstehen</h2>
        <p>
          Die Zellmembran besteht aus einer Phospholipid-Doppelschicht (Flüssig-Mosaik-Modell).
          Kleine, unpolare Moleküle diffundieren frei hindurch (passive Diffusion). Ionen und polare
          Moleküle brauchen Transportproteine: Kanalproteine (passiv, mit Konzentrationsgefälle)
          oder Carrier (aktiv, gegen das Gefälle, ATP-abhängig). Endozytose und Exozytose
          transportieren große Moleküle in Vesikeln. Im MedAT wird besonders gerne nach dem
          Unterschied zwischen passivem und aktivem Transport gefragt.
        </p>

        <h2>Zellteilung: Mitose und Meiose</h2>
        <p>
          Mitose erzeugt zwei genetisch identische Tochterzellen (Wachstum, Reparatur). Die Phasen:
          Prophase, Metaphase, Anaphase, Telophase. Meiose erzeugt vier genetisch verschiedene
          Keimzellen mit halbem Chromosomensatz — entscheidend für geschlechtliche Fortpflanzung.
          Crossing-over in der Meiose I sorgt für genetische Vielfalt. Häufige Prüfungsfrage: In
          welcher Phase liegt welcher Chromosomensatz vor (2n vs. n)?
        </p>

        <h2>So lernst du Zellbiologie effektiv</h2>
        <p>
          Zeichne die Zelle mit allen Organellen selbst — das verankert das Wissen besser als reines
          Lesen. Übe mit MC-Fragen, die Funktionszuordnungen abfragen („Welche Organelle ist für X
          verantwortlich?"). Vergleiche systematisch: Pflanzenzelle vs. Tierzelle, Mitose vs.
          Meiose, passiver vs. aktiver Transport. Diese Vergleiche sind MedAT-Klassiker.
        </p>

        <CTA text="1.100+ Biologie-Fragen inkl. Zellbiologie — mit detaillierten Erklärungen zu jeder Antwort." />
      </>
    ),
  },
  {
    slug: "medat-physik-mechanik",
    title: "BMS Physik: Mechanik-Grundlagen für den MedAT",
    excerpt:
      "Mechanik ist das wichtigste Physik-Thema im MedAT. Kräfte, Energie, Impuls — diese Grundlagen musst du beherrschen.",
    topic: "BMS",
    readingTime: 5,
    publishDate: "2026-03-16",
    content: (
      <>
        <p>
          Physik ist für viele MedAT-Kandidierende ein Angstfach. Die gute Nachricht: Der
          BMS-Physik-Teil konzentriert sich auf Grundlagen — und Mechanik ist das mit Abstand
          wichtigste Teilgebiet. Wer die Mechanik-Basics sicher beherrscht, hat bereits einen großen
          Teil der Physik-Punkte in der Tasche.
        </p>

        <h2>Kräfte und Newtonsche Gesetze</h2>
        <p>
          Die drei Newtonschen Gesetze sind das Fundament der Mechanik. Erstes Gesetz (Trägheit):
          Ein Körper bleibt in Ruhe oder gleichförmiger Bewegung, solange keine resultierende Kraft
          wirkt. Zweites Gesetz: F = m · a — Kraft ist Masse mal Beschleunigung. Drittes Gesetz
          (actio = reactio): Kräfte treten immer paarweise auf. Im MedAT werden häufig
          Rechenaufgaben zu F = m · a gestellt. Vergiss nie die Einheiten: Kraft in Newton (N = kg ·
          m/s²).
        </p>

        <h2>Energie und Arbeit</h2>
        <p>
          Arbeit ist Kraft mal Weg (W = F · s · cos α). Kinetische Energie: E_kin = ½ · m · v².
          Potenzielle Energie: E_pot = m · g · h. Der Energieerhaltungssatz besagt: In einem
          abgeschlossenen System bleibt die Gesamtenergie konstant. Typische MedAT-Aufgabe: Ein
          Gegenstand fällt aus Höhe h — berechne die Geschwindigkeit beim Aufprall (E_pot = E_kin
          umstellen). Diese Aufgaben sind reine Formelanwendung, wenn du die Formeln kennst.
        </p>

        <h2>Gleichförmige und beschleunigte Bewegung</h2>
        <p>
          Gleichförmige Bewegung: v = s/t (konstante Geschwindigkeit). Gleichmäßig beschleunigte
          Bewegung: s = ½ · a · t², v = a · t. Freier Fall: a = g ≈ 9,81 m/s². Waagerechter Wurf:
          horizontale Komponente gleichförmig, vertikale Komponente beschleunigt. Im MedAT werden
          diese Formeln direkt abgefragt — übe das Einsetzen und Umstellen unter Zeitdruck.
        </p>

        <h2>Impuls und Drehmoment</h2>
        <p>
          Impuls p = m · v. Impulserhaltungssatz bei Stößen: Der Gesamtimpuls bleibt erhalten.
          Unterscheide elastischen Stoß (kinetische Energie bleibt erhalten) und inelastischen Stoß
          (Körper verbinden sich). Drehmoment M = F · r (Kraft mal Hebelarm) — relevant für
          Hebelgesetze. Im MedAT kommt besonders der Hebel regelmäßig vor: Wann ist ein System im
          Gleichgewicht? Wenn die Summe der Drehmomente null ist.
        </p>

        <h2>Prüfungstipps für Mechanik</h2>
        <p>
          Lerne die Formeln nicht nur auswendig, sondern übe das Umstellen und Einsetzen. Im MedAT
          hast du keinen Taschenrechner — die Zahlen sind bewusst einfach gewählt (g ≈ 10 m/s²). Übe
          Kopfrechnen mit runden Werten. Achte immer auf Einheiten: Wenn die Einheit nicht stimmt,
          ist die Rechnung falsch. Und denk dran: Keine Formelsammlung im Test — du musst alles im
          Kopf haben.
        </p>

        <CTA text="1.300+ Physik-Fragen mit Schritt-für-Schritt-Lösungen — auch Mechanik-Rechenaufgaben." />
      </>
    ),
  },
  {
    slug: "medat-motivation-durchhalten",
    title: "MedAT-Vorbereitung: So bleibst du motiviert bis zum Testtag",
    excerpt:
      "Monate langes Lernen zehrt an der Motivation. Diese Strategien helfen dir, dranzubleiben — auch wenn es schwer wird.",
    topic: "Motivation",
    readingTime: 4,
    publishDate: "2026-03-16",
    content: (
      <>
        <p>
          Die MedAT-Vorbereitung dauert Monate. Am Anfang ist die Motivation hoch — endlich geht es
          los, du hast einen Plan, das Ziel ist klar. Aber nach ein paar Wochen kommt der Einbruch:
          Der Stoff scheint endlos, der Fortschritt unsichtbar, und der Testtag ist noch weit weg.
          So überwindest du das Motivationstief.
        </p>

        <h2>Setz dir Wochenziele statt Tagesziele</h2>
        <p>
          Tagesziele erzeugen Druck: Wenn du einen Tag verpasst, fühlst du dich sofort im Rückstand.
          Wochenziele sind flexibler — du kannst einen schlechten Tag durch einen guten ausgleichen.
          Beispiel: „Diese Woche schaffe ich 200 BMS-Fragen und 3 KFF-Einheiten" statt „Jeden Tag 30
          Fragen". Das reduziert Stress und gibt dir Kontrolle zurück.
        </p>

        <h2>Fortschritt sichtbar machen</h2>
        <p>
          Nichts motiviert mehr als sichtbarer Fortschritt. Führe eine einfache Statistik: Wie viele
          Fragen hast du diese Woche richtig beantwortet? Wie hat sich deine Trefferquote
          entwickelt? Welche Themen hast du abgedeckt? Selbst wenn der Fortschritt langsam ist — er
          ist da. Und wenn du siehst, dass deine Quote von 55 % auf 70 % gestiegen ist, weißt du,
          dass sich das Lernen lohnt.
        </p>

        <h2>Belohnungen einbauen</h2>
        <p>
          Plane bewusst Belohnungen nach erreichten Meilensteinen ein. Nach einer abgeschlossenen
          Simulation: Lieblingsessen. Nach einer komplett durchgearbeiteten Woche: ein freier
          Nachmittag. Das klingt simpel, aber dein Gehirn braucht positive Verstärkung. Ohne
          Belohnungen wird Lernen zu einer endlosen Pflicht — mit Belohnungen zu einem Spiel mit
          Etappenzielen.
        </p>

        <h2>Kontakt zu anderen Kandidierenden</h2>
        <p>
          Tausche dich mit anderen MedAT-Kandidierenden aus — in Foren, WhatsApp-Gruppen oder
          Lerngruppen. Zu wissen, dass andere denselben Kampf kämpfen, hilft enorm. Ihr könnt euch
          gegenseitig motivieren, Tipps austauschen und euch an schlechten Tagen aufbauen. Aber
          Vorsicht: Vergleiche dich nicht zu viel. Jeder lernt in seinem eigenen Tempo.
        </p>

        <h2>An dein Warum erinnern</h2>
        <p>
          Wenn die Motivation am Tiefpunkt ist, erinnere dich daran, warum du das machst. Du willst
          Medizin studieren. Du willst Menschen helfen. Du willst diesen einen Tag bestehen, um dir
          einen Lebenstraum zu erfüllen. Schreib dein „Warum" auf einen Zettel und kleb ihn an
          deinen Schreibtisch. An den härtesten Tagen ist dieses Warum das Einzige, was dich am
          Lernen hält — und das reicht.
        </p>

        <CTA text="MedMaster zeigt dir deinen Lernfortschritt in Echtzeit — damit du siehst, wie weit du schon gekommen bist." />
      </>
    ),
  },
  {
    slug: "medat-vs-ham-nat",
    title: "MedAT vs. HAM-NAT: Was sind die Unterschiede?",
    excerpt:
      "Beide Tests entscheiden über den Medizinstudienplatz — aber sie unterscheiden sich grundlegend. Ein Vergleich für alle, die sich bewerben wollen.",
    topic: "Strategie",
    readingTime: 5,
    publishDate: "2026-03-16",
    content: (
      <>
        <p>
          Wer im deutschsprachigen Raum Medizin studieren will, steht oft vor der Wahl: MedAT in
          Österreich oder HAM-NAT in Deutschland? Beide Tests entscheiden über die Zulassung, aber
          sie unterscheiden sich in Aufbau, Inhalt und Vorbereitung erheblich. Hier ist ein
          ehrlicher Vergleich, der dir bei der Entscheidung hilft.
        </p>

        <h2>Aufbau und Testbereiche</h2>
        <p>
          Der MedAT besteht aus vier Teilen: BMS (Naturwissenschaften, 40 %), KFF (Kognitive
          Fähigkeiten, 40 %), TV (Textverständnis, 10 %) und SEK (Sozial-emotionale Kompetenzen, 10
          %). Der HAM-NAT konzentriert sich stärker auf Naturwissenschaften: Biologie, Chemie,
          Physik und Mathematik machen den Kern aus. Kognitive Tests wie beim MedAT-KFF gibt es im
          HAM-NAT nicht — dafür ist der naturwissenschaftliche Teil anspruchsvoller und geht teils
          über Abiturniveau hinaus.
        </p>

        <h2>Schwierigkeitsgrad und Niveau</h2>
        <p>
          Der BMS im MedAT prüft auf Maturaniveau — also Schulstoff. Der HAM-NAT kann auch Themen
          beinhalten, die im Schulunterricht nur oberflächlich behandelt werden (z. B. Biochemie,
          Molekularbiologie). Dafür hat der MedAT mit der KFF-Sektion eine Komponente, die nicht
          durch Faktenwissen allein lösbar ist, sondern kognitive Fähigkeiten unter Zeitdruck
          testet. Beide Tests sind auf ihre Art anspruchsvoll — der MedAT ist breiter, der HAM-NAT
          tiefer.
        </p>

        <h2>Vorbereitung und Zeitaufwand</h2>
        <p>
          Für den MedAT solltest du 3-6 Monate einplanen und sowohl Naturwissenschaften als auch KFF
          trainieren. Für den HAM-NAT reichen vielen Kandidierenden 2-4 Monate, da der Fokus enger
          ist. Allerdings: Wer keine starke naturwissenschaftliche Vorbildung hat, braucht beim
          HAM-NAT mehr Zeit für die Theorie. Beim MedAT ist tägliches KFF-Training über Wochen
          nötig, da sich kognitive Fähigkeiten nur langsam aufbauen.
        </p>

        <h2>Aufnahmequoten im Vergleich</h2>
        <p>
          Der MedAT hat eine Aufnahmequote von ca. 12-15 %. Beim HAM-NAT variiert die Quote je nach
          Standort stark: Hamburg nimmt etwa 15 % über den HAM-NAT auf, andere Unis nutzen andere
          Verfahren (TMS, Auswahlgespräche). Ein wichtiger Unterschied: Den MedAT kannst du beliebig
          oft wiederholen, den HAM-NAT ebenfalls — aber die Termine überschneiden sich manchmal, was
          eine Doppelbewerbung erschwert.
        </p>

        <h2>Welcher Test passt zu dir?</h2>
        <p>
          Wenn du in Österreich studieren willst, führt kein Weg am MedAT vorbei. Wenn du flexibel
          bist: Der MedAT belohnt vielseitige Vorbereitung (Wissen + kognitive Skills), der HAM-NAT
          belohnt tiefes naturwissenschaftliches Verständnis. Viele Kandidierende melden sich für
          beide Tests an und maximieren so ihre Chancen. Achte dabei auf die Termine — und bereite
          dich primär auf den Test vor, der dir eher liegt.
        </p>

        <CTA text="MedMaster deckt alle MedAT-Bereiche ab: BMS, KFF, TV und SEK — optimal auf den österreichischen Test zugeschnitten." />
      </>
    ),
  },
  {
    slug: "medat-sek-tipps",
    title: "SEK im MedAT: Emotionen erkennen, regulieren und entscheiden",
    excerpt:
      "Die SEK-Sektion zählt 10 % im MedAT — und wird oft vernachlässigt. Dabei sind die Punkte mit der richtigen Strategie leicht zu holen.",
    topic: "Strategie",
    readingTime: 5,
    publishDate: "2026-03-16",
    content: (
      <>
        <p>
          Die Sektion „Sozial-emotionale Kompetenzen" (SEK) macht 10 % des MedAT aus. Das klingt
          wenig, kann aber bei einem knappen Ranking über Platz oder Warteliste entscheiden. Der SEK
          besteht aus drei Untertests: Emotionen erkennen, Emotionen regulieren und Soziales
          Entscheiden. Hier erfährst du, was dich erwartet und wie du dich vorbereitest.
        </p>

        <h2>Emotionen erkennen (EE)</h2>
        <p>
          Du siehst Fotos von Gesichtern und musst die gezeigte Emotion identifizieren. Die sechs
          Basisemotionen nach Ekman sind: Freude, Trauer, Wut, Angst, Ekel und Überraschung. Achte
          besonders auf die Augenpartie — sie ist der zuverlässigste Indikator. Typische
          Verwechslung: Angst und Überraschung sehen ähnlich aus (weit geöffnete Augen), aber bei
          Angst sind die Augenbrauen zusammengezogen, bei Überraschung angehoben. Übe mit vielen
          verschiedenen Gesichtern, um ein Gefühl für feine Unterschiede zu entwickeln.
        </p>

        <h2>Emotionen regulieren (ER)</h2>
        <p>
          Du liest eine belastende Situation und wählst die hilfreichste Strategie zur
          Emotionsregulation. Der Trick: Es geht nicht darum, was du persönlich tun würdest, sondern
          was psychologisch am effektivsten ist. Bewährte Strategien sind Neubewertung (die
          Situation aus einem anderen Blickwinkel sehen), soziale Unterstützung suchen und
          problemorientiertes Handeln. Vermeidung und Unterdrückung sind fast immer die falschen
          Antworten. Wenn eine Option „die Situation ignorieren" oder „die Gefühle unterdrücken"
          vorschlägt, ist sie mit hoher Wahrscheinlichkeit falsch.
        </p>

        <h2>Soziales Entscheiden (SE)</h2>
        <p>
          Du bekommst ein ethisches Dilemma aus dem medizinischen Alltag und musst die angemessenste
          Handlung wählen. Orientiere dich an medizinethischen Grundprinzipien: Patientenautonomie
          respektieren, Schaden vermeiden (non-maleficence), Wohl des Patienten fördern
          (beneficence) und Gerechtigkeit wahren. Die richtige Antwort ist meist die, die alle
          Beteiligten berücksichtigt und einen Kompromiss findet — nicht die extremste Position in
          eine Richtung.
        </p>

        <h2>Vorbereitung: Wenig Aufwand, guter Ertrag</h2>
        <p>
          SEK ist der Testteil, bei dem du mit dem geringsten Zeitaufwand die meisten Punkte holen
          kannst. Zwei bis drei Wochen vor dem Test reichen aus, wenn du die Grundprinzipien
          verstanden hast. Übe mit Beispielaufgaben, lerne die Basisemotionen und ihre
          Mikroexpressionen, und mache dich mit den ethischen Prinzipien vertraut. Anders als beim
          BMS geht es hier nicht um Faktenwissen, sondern um Mustererkennung und gesunden
          Menschenverstand — ergänzt durch psychologisches Grundwissen.
        </p>

        <CTA text="324 SEK-Übungsaufgaben in allen drei Untertests — trainiere Emotionen erkennen, regulieren und entscheiden." />
      </>
    ),
  },
  {
    slug: "medat-lerngruppe",
    title: "Alleine oder in der Lerngruppe? So lernst du am effektivsten",
    excerpt:
      "Lerngruppe oder Solo-Vorbereitung? Beides hat Vor- und Nachteile. Hier erfährst du, welche Strategie für den MedAT besser funktioniert.",
    topic: "Strategie",
    readingTime: 4,
    publishDate: "2026-03-16",
    content: (
      <>
        <p>
          Eine der häufigsten Fragen unter MedAT-Kandidierenden: Soll ich alleine lernen oder in
          einer Lerngruppe? Die ehrliche Antwort: Es kommt darauf an. Beides hat klare Stärken und
          Schwächen — und die beste Strategie kombiniert beide Ansätze. Hier ist ein praxisnaher
          Vergleich.
        </p>

        <h2>Vorteile des Alleinlernens</h2>
        <p>
          Du bestimmst Tempo, Thema und Zeitplan selbst. Kein Warten auf langsamere
          Gruppenmitglieder, keine Diskussionen über irrelevante Themen. Besonders bei BMS-Theorie
          ist konzentriertes Einzellernen oft effektiver: Du liest, markierst, beantwortest Fragen
          und wiederholst Schwachstellen — alles in deinem eigenen Rhythmus. Studien zeigen, dass
          tiefes Verständnis am besten entsteht, wenn du dich ohne Ablenkung mit dem Stoff
          auseinandersetzt.
        </p>

        <h2>Vorteile der Lerngruppe</h2>
        <p>
          Lerngruppen glänzen beim Erklären und Diskutieren. Wenn du einem anderen ein Thema
          erklärst, merkst du sofort, ob du es wirklich verstanden hast. Außerdem decken andere
          Perspektiven Wissenslücken auf, die dir alleine nicht auffallen würden. Für KFF-Training
          kann eine Gruppe motivierend sein: gemeinsam Zahlenfolgen lösen, sich gegenseitig
          Implikationen stellen oder Merkfähigkeit testen. Und nicht zuletzt: Die soziale Komponente
          hilft gegen das Motivationstief, das fast jeden irgendwann trifft.
        </p>

        <h2>Wann Lerngruppen nicht funktionieren</h2>
        <p>
          Eine schlechte Lerngruppe ist schlimmer als gar keine. Warnsignale: Zu viel Gerede, zu
          wenig Lernen. Unterschiedliches Leistungsniveau, sodass einige sich langweilen und andere
          nicht mitkommen. Mehr als 4 Personen — dann wird es unproduktiv. Keine klare Agenda für
          jedes Treffen. Wenn du nach einem Lerngruppentreffen das Gefühl hast, weniger geschafft zu
          haben als alleine, ist die Gruppe ein Problem, keine Lösung.
        </p>

        <h2>Die optimale Kombination</h2>
        <p>
          Nutze beide Formate für das, was sie am besten können. Alleine: BMS-Theorie lernen,
          Übungsfragen durcharbeiten, Schwachstellen gezielt wiederholen, KFF mit Timer üben.
          Lerngruppe: Komplexe Themen diskutieren, gegenseitig Fragen stellen, Simulationen
          nachbesprechen, Motivation aufrechterhalten. Ein bewährter Rhythmus: 80 % der Lernzeit
          alleine, 20 % in der Gruppe. Triff dich ein- bis zweimal pro Woche mit 2-3 Leuten, die auf
          einem ähnlichen Niveau sind.
        </p>

        <CTA text="MedMaster ist dein digitaler Lernpartner: 5.000+ Fragen, adaptiver Lernplan und Fortschrittstracking." />
      </>
    ),
  },
  {
    slug: "medat-stressbewaeltigung",
    title: "Prüfungsangst beim MedAT: 5 Techniken gegen Stress",
    excerpt:
      "Prüfungsangst kann deine Leistung massiv beeinträchtigen. Diese 5 Techniken helfen dir, am Testtag ruhig und fokussiert zu bleiben.",
    topic: "Motivation",
    readingTime: 4,
    publishDate: "2026-03-16",
    content: (
      <>
        <p>
          Du hast monatelang gelernt, kennst den Stoff, hast hunderte Übungsfragen gemacht — und
          trotzdem hast du Angst vor dem MedAT. Das ist normal. Prüfungsangst betrifft bis zu 40 %
          aller Studierenden und kann die Leistung um 10-20 % drücken. Die gute Nachricht: Stress
          ist managebar. Hier sind fünf evidenzbasierte Techniken, die am Testtag funktionieren.
        </p>

        <h2>1. Die 4-7-8-Atemtechnik</h2>
        <p>
          Wenn du Panik spürst, atme durch die Nase ein (4 Sekunden zählen), halte den Atem (7
          Sekunden) und atme langsam durch den Mund aus (8 Sekunden). Wiederhole das 3-4 Mal. Diese
          Technik aktiviert den Parasympathikus und senkt Herzfrequenz und Cortisolspiegel messbar
          innerhalb von 60 Sekunden. Übe die Technik vorher zu Hause, damit sie am Testtag
          automatisch funktioniert.
        </p>

        <h2>2. Gedanken umformulieren</h2>
        <p>
          Statt „Ich schaffe das nicht" denke „Ich habe mich vorbereitet und gebe mein Bestes". Das
          klingt banal, aber kognitive Umstrukturierung ist eine der wirksamsten Techniken gegen
          Prüfungsangst. Dein Gehirn reagiert auf negative Selbstgespräche mit Stresshormonen — auf
          neutrale oder positive mit Ruhe. Formuliere vor dem Test 2-3 realistische, positive Sätze
          und wiederhole sie bei Bedarf.
        </p>

        <h2>3. Progressive Muskelentspannung</h2>
        <p>
          Spanne einzelne Muskelgruppen für 5 Sekunden fest an und lass dann locker: Hände zu
          Fäusten ballen, Schultern hochziehen, Zehen krümmen. Die anschließende Entspannung ist
          intensiver als der Normalzustand und löst körperliche Anspannung, die du unter Stress oft
          gar nicht bemerkst. Mache das in der Pause zwischen den Testteilen — es dauert nur 2
          Minuten und hilft merklich.
        </p>

        <h2>4. Simulationen als Desensibilisierung</h2>
        <p>
          Die effektivste Langzeitstrategie gegen Prüfungsangst: Wiederholte Exposition. Je öfter du
          unter echten Prüfungsbedingungen übst (Timer, keine Unterbrechung, kein Nachschlagen),
          desto normaler wird die Situation. Nach der dritten oder vierten Simulation sinkt der
          Stresslevel deutlich. Der Testtag fühlt sich dann an wie „noch eine Simulation" — nicht
          wie ein einmaliges Schicksalsereignis.
        </p>

        <h2>5. Am Vorabend richtig abschalten</h2>
        <p>
          Lerne am Tag vor dem MedAT nicht mehr. Kein „noch schnell die Formeln wiederholen" um
          Mitternacht. Was du bis dahin nicht kannst, lernst du in einer Nacht nicht mehr.
          Stattdessen: Leichtes Abendessen, ein Spaziergang, früh ins Bett. Schlaf ist der stärkste
          Leistungsverstärker — 7-8 Stunden Schlaf verbessern Konzentration und Gedächtnis mehr als
          jede Last-Minute-Lerneinheit.
        </p>

        <CTA text="MedMaster bietet vollständige Prüfungssimulationen — übe unter echten Bedingungen und reduziere Prüfungsangst." />
      </>
    ),
  },
  {
    slug: "medat-erfahrungsbericht",
    title: "MedAT Erfahrungsbericht: Was ich beim ersten Mal falsch gemacht habe",
    excerpt:
      "Ein ehrlicher Erfahrungsbericht über den ersten MedAT-Versuch: Was gut lief, was schiefging und was du daraus lernen kannst.",
    topic: "Motivation",
    readingTime: 5,
    publishDate: "2026-03-16",
    content: (
      <>
        <p>
          Mein erster MedAT war ein Desaster. Nicht weil ich dumm war oder zu wenig gelernt hatte —
          sondern weil ich falsch gelernt hatte. Ich teile meine Erfahrung, damit du dieselben
          Fehler vermeiden kannst. Spoiler: Beim zweiten Versuch hat es geklappt.
        </p>

        <h2>Fehler 1: Ich habe nur gelesen, nie geübt</h2>
        <p>
          Ich hatte drei dicke Bücher und habe sie brav durchgearbeitet. Markiert, zusammengefasst,
          Karteikarten geschrieben. Was ich nicht gemacht habe: MC-Fragen unter Zeitdruck
          beantworten. Am Testtag war ich geschockt, wie anders sich echte Prüfungsfragen anfühlen.
          Die Distraktoren sind so formuliert, dass sie plausibel klingen — und wenn du nie geübt
          hast, zwischen richtiger Antwort und gut klingendem Unsinn zu unterscheiden, fällst du
          darauf rein. Mein Tipp: Mindestens 50 % deiner Lernzeit sollten auf aktives Üben mit
          Fragen entfallen.
        </p>

        <h2>Fehler 2: KFF komplett unterschätzt</h2>
        <p>
          Ich wusste, dass KFF 40 % zählt. Trotzdem habe ich nur 10 % meiner Lernzeit dafür
          aufgewendet. Ich dachte: „Logisches Denken kann ich doch." Falsch. Im Testteil
          Zahlenfolgen hatte ich panisch auf Zahlen gestarrt, ohne System. Bei Implikationen habe
          ich geraten. Bei Figuren zusammensetzen war die Zeit vorbei, bevor ich die Hälfte
          geschafft hatte. KFF ist trainierbar — aber nur, wenn du wochenlang täglich übst. 15
          Minuten am Tag über 8 Wochen hätten gereicht. Stattdessen habe ich am Abend vorher ein
          paar Beispielaufgaben gemacht.
        </p>

        <h2>Fehler 3: Keine einzige Simulation gemacht</h2>
        <p>
          Ich hatte nie 4 Stunden am Stück unter Prüfungsbedingungen geübt. Am Testtag war ich nach
          dem BMS mental erschöpft — und dann kamen noch drei Testteile. Ab dem TV konnte ich mich
          kaum noch konzentrieren. Im KFF habe ich dumme Flüchtigkeitsfehler gemacht, die mir in
          Ruhe nie passiert wären. Eine einzige vollständige Simulation hätte mich auf diesen
          Erschöpfungseffekt vorbereitet. Mache mindestens drei Simulationen vor dem echten Test.
        </p>

        <h2>Was ich beim zweiten Mal anders gemacht habe</h2>
        <p>
          Ich habe 4 Monate vor dem Test angefangen. Jeden Tag: 90 Minuten BMS-Fragen (nicht lesen,
          sondern lösen), 30 Minuten KFF-Training, und am Wochenende eine Simulation. Ich habe meine
          Fehler analysiert und Schwachstellen gezielt nachgearbeitet. Das Ergebnis: Von Rang 2.800
          beim ersten Versuch auf Rang 380 beim zweiten. Gleicher Kopf, bessere Strategie.
        </p>

        <h2>Mein wichtigster Rat</h2>
        <p>
          Lerne nicht mehr, lerne smarter. Der MedAT testet nicht, wer am meisten Stunden investiert
          hat, sondern wer am effektivsten gelernt hat. Übe aktiv mit Fragen, trainiere KFF täglich,
          mache Simulationen und analysiere deine Fehler. Wenn du das konsequent machst, hast du
          bessere Chancen als jemand, der doppelt so viel Zeit mit passivem Lesen verbringt.
        </p>

        <CTA text="Lerne smarter, nicht härter: MedMaster bietet adaptive Übungen, die sich an deine Schwächen anpassen." />
      </>
    ),
  },
  {
    slug: "medat-anmeldung-2026",
    title: "MedAT 2026 Anmeldung: Fristen, Ablauf und Tipps",
    excerpt:
      "Die Anmeldung zum MedAT 2026 steht bevor. Hier findest du alle Fristen, den genauen Ablauf und Tipps, damit nichts schiefgeht.",
    topic: "Strategie",
    readingTime: 4,
    publishDate: "2026-03-16",
    content: (
      <>
        <p>
          Die Anmeldung zum MedAT ist der erste und wichtigste Schritt auf dem Weg zum
          Medizinstudienplatz in Österreich. Jedes Jahr scheitern Kandidierende nicht am Test
          selbst, sondern an verpassten Fristen oder Formfehlern bei der Registrierung. Damit dir
          das nicht passiert, findest du hier alle wichtigen Informationen zur MedAT-Anmeldung 2026.
        </p>

        <h2>Fristen und Zeitplan</h2>
        <p>
          Die Anmeldung zum MedAT erfolgt ausschließlich online über die Webseite der jeweiligen
          Medizinischen Universität. Der Anmeldezeitraum beginnt üblicherweise Anfang März und endet
          Ende März — das Fenster ist also nur rund vier Wochen offen. Der Testtag selbst findet
          traditionell Anfang Juli statt. Wichtig: Nach Ablauf der Frist ist keine Nachmeldung mehr
          möglich, auch nicht mit ärztlichem Attest oder besonderen Gründen. Trag dir den
          Anmeldezeitraum sofort in den Kalender ein.
        </p>

        <h2>Welche Uni wählen?</h2>
        <p>
          Du kannst dich an einer der vier Medizinischen Universitäten anmelden: Wien, Graz,
          Innsbruck oder Linz. Du darfst dich nur an einer Uni bewerben — eine Mehrfachanmeldung ist
          nicht erlaubt. Die Wahl hängt von deinem Wohnort, deinen Präferenzen und der
          Kontingentregelung ab. EU-Bürger fallen ins EU-Kontingent (75 % der Plätze),
          Nicht-EU-Bürger ins Drittstaaten-Kontingent (20 %), und ein kleines Kontingent (5 %) ist
          für Österreicher reserviert. Informiere dich vorab über die genaue Platzzahl an deiner
          Wunsch-Uni.
        </p>

        <h2>Was du für die Anmeldung brauchst</h2>
        <p>
          Halte folgende Unterlagen bereit: gültiger Lichtbildausweis (Reisepass oder
          Personalausweis), Passfoto in digitaler Form, und die Kostenbeitragszahlung (derzeit 110
          €). Die Zahlung muss innerhalb der Anmeldefrist eingehen — überweise nicht am letzten Tag,
          da Banküberweisungen 1-2 Werktage dauern können. Manche Unis akzeptieren auch Kreditkarte
          oder Sofortüberweisung. Lies die Anleitung auf der Uni-Webseite genau durch und prüfe nach
          dem Absenden, ob du eine Bestätigungsmail erhalten hast.
        </p>

        <h2>Häufige Fehler bei der Anmeldung</h2>
        <p>
          Die drei häufigsten Fehler: zu spät anmelden (letzter Tag, technische Probleme),
          Zahlungseingang nach Fristende (Überweisung zu spät losgeschickt) und falsche persönliche
          Daten (Name muss exakt mit dem Ausweis übereinstimmen). Melde dich am besten in der ersten
          Woche des Anmeldezeitraums an. So hast du genug Puffer, falls etwas schiefgeht. Und
          kontrolliere alle Angaben doppelt — ein Tippfehler im Namen kann am Testtag Probleme
          verursachen.
        </p>

        <h2>Nach der Anmeldung: Vorbereitung starten</h2>
        <p>
          Sobald die Anmeldung bestätigt ist, beginnt die eigentliche Arbeit. Du hast ab März rund
          vier Monate bis zum Test. Das reicht, wenn du einen strukturierten Lernplan hast und
          konsequent dranbleibst. Starte mit BMS-Grundlagen und beginne parallel das KFF-Training —
          kognitive Fähigkeiten bauen sich nur langsam auf und brauchen tägliches Üben. Warte nicht
          bis Mai, um mit dem Lernen anzufangen.
        </p>

        <CTA text="Starte deine MedAT-Vorbereitung jetzt — mit über 5.000 Übungsfragen und strukturierten Lernplänen." />
      </>
    ),
  },
  {
    slug: "medat-biologie-genetik",
    title: "BMS Biologie: Genetik und Vererbung kompakt erklärt",
    excerpt:
      "Genetik ist eines der wichtigsten BMS-Themen im MedAT. Hier bekommst du die Grundlagen kompakt erklärt — von Mendel bis Epigenetik.",
    topic: "BMS",
    readingTime: 5,
    publishDate: "2026-03-16",
    content: (
      <>
        <p>
          Genetik und Vererbung gehören zu den am häufigsten geprüften Themen im BMS-Teil des MedAT.
          Von den Mendelschen Regeln über DNA-Replikation bis hin zu Mutationen — du musst die
          Grundlagen sicher beherrschen. Dieser Artikel fasst die wichtigsten Konzepte zusammen, die
          du für den Test kennen musst.
        </p>

        <h2>DNA-Aufbau und Replikation</h2>
        <p>
          Die DNA besteht aus zwei antiparallelen Strängen, die eine Doppelhelix bilden. Jeder
          Strang ist eine Kette aus Nukleotiden, bestehend aus Desoxyribose, Phosphatgruppe und
          einer der vier Basen: Adenin (A), Thymin (T), Guanin (G) und Cytosin (C). Die
          komplementäre Basenpaarung (A-T, G-C) ist die Grundlage der Replikation. Die
          DNA-Replikation verläuft semikonservativ: Jeder neue Doppelstrang enthält einen alten und
          einen neuen Strang. Wichtige Enzyme: Helicase (Entwindung), DNA-Polymerase (Synthese,
          5'→3'-Richtung), Ligase (Verknüpfung der Okazaki-Fragmente am Folgestrang). Diese Details
          werden im MedAT regelmäßig abgefragt.
        </p>

        <h2>Mendelsche Regeln</h2>
        <p>
          Mendels drei Regeln bilden das Fundament der Vererbungslehre. Die Uniformitätsregel:
          Kreuzt man zwei reinerbige (homozygote) Eltern, sind alle Nachkommen der F1-Generation
          gleichförmig. Die Spaltungsregel: In der F2-Generation spalten sich die Merkmale im
          Verhältnis 3:1 (dominant-rezessiv) bzw. 1:2:1 (Genotyp). Die Unabhängigkeitsregel:
          Verschiedene Merkmale werden unabhängig voneinander vererbt — sofern die Gene auf
          verschiedenen Chromosomen liegen. Typische MedAT-Fragen: Kreuzungsschemata berechnen,
          Genotyp-Verhältnisse bestimmen, Erbgänge identifizieren.
        </p>

        <h2>Mutationen und ihre Folgen</h2>
        <p>
          Mutationen sind dauerhafte Veränderungen der DNA-Sequenz. Punktmutationen betreffen
          einzelne Basenpaare: stumme Mutationen (keine Aminosäure-Änderung), Missense-Mutationen
          (andere Aminosäure) und Nonsense-Mutationen (vorzeitiges Stoppcodon).
          Chromosomenmutationen betreffen größere Abschnitte: Deletion, Duplikation, Inversion,
          Translokation. Genommutationen verändern die Chromosomenzahl (z. B. Trisomie 21). Für den
          MedAT musst du die Mutationstypen unterscheiden und ihre Auswirkungen auf das Protein
          einschätzen können.
        </p>

        <h2>Epigenetik und Genregulation</h2>
        <p>
          Nicht nur die DNA-Sequenz bestimmt, welche Eigenschaften ausgeprägt werden — auch die
          Genregulation spielt eine entscheidende Rolle. Epigenetische Mechanismen wie
          DNA-Methylierung und Histon-Modifikation können Gene an- oder abschalten, ohne die Sequenz
          zu verändern. Diese Veränderungen können sogar an die nächste Generation weitergegeben
          werden. Für den MedAT reicht ein grundlegendes Verständnis: Was ist Epigenetik, wie
          funktioniert Methylierung, und warum haben eineiige Zwillinge trotz identischer DNA
          manchmal unterschiedliche Merkmale?
        </p>

        <h2>Prüfungstipps für Genetik</h2>
        <p>
          Zeichne Kreuzungsschemata immer auf — auch wenn es im Kopf schneller geht. Fehler
          passieren bei Genetik-Aufgaben meistens durch Flüchtigkeit, nicht durch fehlendes Wissen.
          Lerne die Chargaff-Regeln (A=T, G=C, Purine=Pyrimidine) und übe das Berechnen von
          Basenverteilungen. Verstehe den Unterschied zwischen Genotyp und Phänotyp. Und merke dir:
          Autosomal-rezessive Erbgänge überspringen Generationen, X-chromosomale betreffen häufiger
          Männer. Diese Muster werden im MedAT immer wieder abgefragt.
        </p>

        <CTA text="Über 1.100 Biologie-Fragen inklusive Genetik, Vererbung und Mutationen — jetzt üben." />
      </>
    ),
  },
  {
    slug: "medat-mathematik-tipps",
    title: "BMS Mathematik: Die wichtigsten Formeln und Rechentypen",
    excerpt:
      "Mathematik im MedAT ist machbar — wenn du die richtigen Formeln kennst und Kopfrechnen übst. Hier sind die wichtigsten Rechentypen.",
    topic: "BMS",
    readingTime: 4,
    publishDate: "2026-03-16",
    content: (
      <>
        <p>
          Mathematik ist für viele MedAT-Kandidierende ein Angstfach. Dabei ist der Mathe-Teil im
          BMS gut machbar, wenn du die Grundlagen sicher beherrschst. Du brauchst keinen
          Taschenrechner — die Aufgaben sind so gestaltet, dass Kopfrechnen ausreicht. Hier sind die
          Rechentypen und Formeln, die du kennen musst.
        </p>

        <h2>Prozentrechnung und Dreisatz</h2>
        <p>
          Prozentrechnung kommt fast garantiert im MedAT vor. Die Grundformel: Prozentwert =
          Grundwert × Prozentsatz / 100. Typische Aufgaben: Preisänderungen berechnen,
          Konzentrationen umrechnen, Anteile bestimmen. Der Dreisatz ist dein Werkzeug für
          proportionale Zusammenhänge: Wenn 5 Tabletten 200 mg Wirkstoff enthalten, wie viel
          enthalten 3? Übe diese Aufgabentypen, bis sie automatisch laufen. Im Test hast du keine
          Zeit für langes Nachdenken.
        </p>

        <h2>Gleichungen und Umformungen</h2>
        <p>
          Lineare Gleichungen (ax + b = c) und quadratische Gleichungen (ax² + bx + c = 0) musst du
          sicher lösen können. Für quadratische Gleichungen: Lösungsformel x = (-b ± √(b² - 4ac)) /
          (2a). Wichtig ist auch das Umstellen von Formeln — besonders bei physikalisch-chemischen
          Zusammenhängen. Beispiel: c = n/V nach n umstellen → n = c · V. Übe das Umstellen mit
          verschiedenen BMS-Formeln aus Chemie und Physik, dann schlägst du zwei Fliegen mit einer
          Klappe.
        </p>

        <h2>Potenz- und Logarithmengesetze</h2>
        <p>
          Potenzgesetze: a^m · a^n = a^(m+n), (a^m)^n = a^(m·n), a^0 = 1. Negative Exponenten:
          a^(-n) = 1/a^n. Wurzeln: √a = a^(1/2). Diese Regeln brauchst du ständig — in Chemie
          (pH-Berechnung), Physik (Einheitenumrechnung) und Mathe selbst. Logarithmen: log(a·b) =
          log(a) + log(b), log(a/b) = log(a) - log(b), log(a^n) = n·log(a). Für den MedAT besonders
          wichtig: pH = -log[H⁺]. Wenn du die Logarithmengesetze verstehst, sind pH-Aufgaben in
          Chemie ein Geschenk.
        </p>

        <h2>Wahrscheinlichkeit und Statistik</h2>
        <p>
          Grundlegende Wahrscheinlichkeitsrechnung wird im MedAT geprüft. Wahrscheinlichkeit =
          günstige Ergebnisse / mögliche Ergebnisse. Unabhängige Ereignisse multiplizieren: P(A und
          B) = P(A) · P(B). Sich ausschließende Ereignisse addieren: P(A oder B) = P(A) + P(B).
          Bedingte Wahrscheinlichkeit kommt seltener vor, aber Grundwissen schadet nicht.
          Kombinatorik: Fakultät (n!), Binomialkoeffizient (n über k). Typische Aufgabe: Wie viele
          Möglichkeiten gibt es, 3 aus 10 Personen auszuwählen?
        </p>

        <h2>Kopfrechnen trainieren</h2>
        <p>
          Im MedAT gibt es keinen Taschenrechner. Du musst also schnell und sicher im Kopf rechnen
          können. Übe täglich 10 Minuten: Multipliziere zweistellige Zahlen, teile durch
          einstellige, berechne Quadratzahlen bis 20. Lerne Tricks: 15 % von 80 = 10 % + 5 % = 8 + 4
          = 12. Bruchrechnung: 3/4 + 2/3 = 9/12 + 8/12 = 17/12. Je schneller du rechnest, desto mehr
          Zeit bleibt für die schwierigen Fragen.
        </p>

        <CTA text="Über 490 Mathematik-Fragen mit Schritt-für-Schritt-Lösungen — übe Kopfrechnen unter MedAT-Bedingungen." />
      </>
    ),
  },
  {
    slug: "medat-wortfluessigkeit-ueben",
    title: "Wortflüssigkeit im MedAT: So trainierst du den KFF-Untertest",
    excerpt:
      "Wortflüssigkeit ist der schnellste KFF-Untertest — und mit der richtigen Strategie gut trainierbar. Hier erfährst du, wie.",
    topic: "KFF",
    readingTime: 4,
    publishDate: "2026-03-16",
    content: (
      <>
        <p>
          Der Untertest Wortflüssigkeit im MedAT-KFF verlangt, dass du aus vorgegebenen Buchstaben
          ein sinnvolles deutsches Wort bildest. Du bekommst ein Wort und musst entscheiden, welcher
          Buchstabe (aus den Optionen A-D) zusammen mit den übrigen Buchstaben ein neues Wort
          ergibt. Der Zeitdruck ist enorm — aber mit der richtigen Technik lässt sich dieser
          Untertest effektiv trainieren.
        </p>

        <h2>Was genau wird geprüft?</h2>
        <p>
          Du siehst ein Ausgangswort und vier Buchstaben-Optionen (A-D) plus eine Strichoption (kein
          passender Buchstabe). Du musst herausfinden, welcher Buchstabe zu den Buchstaben des
          Ausgangsworts hinzugefügt werden kann, um ein neues deutsches Wort zu bilden. Dabei dürfen
          die Buchstaben beliebig umgestellt werden — es geht also um Anagramme. Die Schwierigkeit
          liegt darin, unter Zeitdruck die richtige Kombination zu erkennen. Pro Aufgabe hast du nur
          wenige Sekunden.
        </p>

        <h2>Strategie: Systematisch statt raten</h2>
        <p>
          Der größte Fehler: wild Buchstaben kombinieren und hoffen, dass ein Wort herausspringt.
          Besser: Gehe die Optionen systematisch durch. Nimm Option A, kombiniere den Buchstaben mit
          dem Ausgangswort und überlege, ob dir ein bekanntes Wort einfällt. Wenn nicht, weiter zu
          B. Mit Übung erkennst du Muster schneller — bestimmte Buchstabenkombinationen kommen
          häufig vor (SCH, CH, ST, EI, AU). Trainiere dein Gehirn darauf, diese Cluster sofort zu
          erkennen.
        </p>

        <h2>Trainingsmethoden</h2>
        <p>
          Tägliches Üben ist bei Wortflüssigkeit wichtiger als Intensivtraining. 10-15 Minuten pro
          Tag über 6-8 Wochen sind effektiver als ein ganzes Wochenende kurz vor dem Test. Nutze
          Übungsaufgaben mit Timer und setze dich bewusst unter Zeitdruck. Lies viel — je größer
          dein Wortschatz, desto schneller erkennst du Lösungen. Spiele wie Scrabble oder Worträtsel
          helfen ebenfalls, dein Buchstaben-Bewusstsein zu schärfen.
        </p>

        <h2>Typische Fallen und wie du sie vermeidest</h2>
        <p>
          Häufiger Fehler: Du findest ein Wort, das passt, und wählst es sofort — ohne zu prüfen, ob
          alle Buchstaben verwendet werden. Im MedAT müssen alle Buchstaben im neuen Wort vorkommen.
          Weiterer Fehler: Bei der Strichoption (kein Buchstabe passt) zu lange zögern. Wenn du nach
          10 Sekunden keine Lösung siehst, wähle den Strich und geh weiter. Lieber eine Aufgabe
          auslassen als drei Aufgaben durch Grübeln verlieren.
        </p>

        <CTA text="Trainiere Wortflüssigkeit mit hunderten Übungsaufgaben — inklusive Timer und Schwierigkeitsstufen." />
      </>
    ),
  },
  {
    slug: "medat-implikationen-tipps",
    title: "Implikationen erkennen: Logisches Denken für den MedAT",
    excerpt:
      "Der KFF-Untertest Implikationen prüft formale Logik. Mit diesen Strategien erkennst du gültige Schlussfolgerungen schnell und sicher.",
    topic: "KFF",
    readingTime: 5,
    publishDate: "2026-03-16",
    content: (
      <>
        <p>
          Der Untertest „Implikationen erkennen" im MedAT-KFF ist für viele Kandidierende der
          schwierigste KFF-Teil. Du bekommst Prämissen (Aussagen) und musst entscheiden, welche
          Schlussfolgerung logisch zwingend daraus folgt. Das klingt abstrakt — ist aber mit der
          richtigen Methode gut lernbar. Hier erfährst du, wie formale Logik im MedAT funktioniert
          und wie du dich vorbereitest.
        </p>

        <h2>Was wird geprüft?</h2>
        <p>
          Du erhältst zwei Prämissen wie „Alle Ärzte sind Akademiker" und „Einige Akademiker sind
          Sportler". Dann musst du aus fünf Optionen die einzige zwingend korrekte Schlussfolgerung
          wählen. Option E lautet immer „Keine der Schlussfolgerungen ist zwingend" — und ist
          häufiger richtig als du denkst. Der Schlüssel: Es geht nicht darum, was wahrscheinlich
          oder plausibel klingt, sondern was logisch zwingend aus den Prämissen folgt. „Zwingend"
          bedeutet: Es gibt keine Möglichkeit, dass die Prämissen wahr und die Schlussfolgerung
          falsch ist.
        </p>

        <h2>Die wichtigsten logischen Muster</h2>
        <p>
          Lerne die Quantoren: „Alle" (universell), „Einige" (existenziell), „Keine" (universelle
          Negation). Aus „Alle A sind B" und „Alle B sind C" folgt zwingend „Alle A sind C". Aber:
          Aus „Alle A sind B" und „Einige B sind C" folgt nicht „Alle A sind C" — nur „Einige A
          könnten C sein", und selbst das ist nicht zwingend. Häufige Falle: Die Umkehrung. Aus
          „Alle Hunde sind Tiere" folgt nicht „Alle Tiere sind Hunde". Klingt offensichtlich, aber
          unter Zeitdruck passiert genau dieser Fehler.
        </p>

        <h2>Venn-Diagramme als Werkzeug</h2>
        <p>
          Zeichne für jede Aufgabe ein Venn-Diagramm. Kreise repräsentieren die Mengen aus den
          Prämissen. „Alle A sind B" = Kreis A liegt komplett innerhalb von Kreis B. „Einige A sind
          B" = Kreise überlappen teilweise. „Kein A ist B" = Kreise berühren sich nicht. Prüfe dann
          jede Option: Ist sie in allen möglichen Konfigurationen der Kreise wahr? Nur dann ist sie
          zwingend. Diese visuelle Methode ist langsamer als reines Denken, aber deutlich sicherer —
          besonders am Anfang.
        </p>

        <h2>Option E nicht fürchten</h2>
        <p>
          Viele Kandidierende wählen Option E (keine Schlussfolgerung ist zwingend) zu selten, weil
          es sich anfühlt wie „ich weiß es nicht". Aber E ist eine echte Antwort und in vielen
          Aufgaben die richtige. Wenn keine der Optionen A-D logisch zwingend folgt — also wenn du
          ein Gegenbeispiel konstruieren kannst — ist E korrekt. Trainiere gezielt Aufgaben, bei
          denen E richtig ist, damit du ein Gefühl dafür entwickelst.
        </p>

        <h2>Trainingsempfehlung</h2>
        <p>
          Beginne mit einfachen Syllogismen und steigere die Komplexität. Übe täglich 10-15 Minuten
          unter Zeitdruck. Analysiere jeden Fehler: Warum hast du die falsche Option gewählt? War es
          ein Umkehrfehler, ein Quantorenproblem oder hast du E nicht in Betracht gezogen? Nach 4-6
          Wochen täglichem Training wirst du die Muster automatisch erkennen — und Implikationen
          werden vom Angstuntertest zum Punktelieferanten.
        </p>

        <CTA text="Übe Implikationen mit über 40 offiziellen und hunderten generierten Aufgaben — mit Erklärungen für jede Lösung." />
      </>
    ),
  },
  {
    slug: "medat-figuren-zusammensetzen",
    title: "Figuren zusammensetzen im MedAT: Strategien und Übungen",
    excerpt:
      "Beim KFF-Untertest Figuren zusammensetzen musst du Teilstücke einer Figur erkennen. Diese Strategien helfen dir, schneller und sicherer zu werden.",
    topic: "KFF",
    readingTime: 4,
    publishDate: "2026-03-16",
    content: (
      <>
        <p>
          Der Untertest „Figuren zusammensetzen" im MedAT-KFF testet dein räumliches
          Vorstellungsvermögen. Du siehst eine Zielfigur und mehrere Teilstücke — und musst
          entscheiden, welche Kombination von Teilen die Figur exakt ergibt. Der Zeitdruck ist hoch,
          und die Distraktoren sind geschickt gewählt. Mit den richtigen Strategien kannst du diesen
          Untertest aber systematisch trainieren.
        </p>

        <h2>So funktioniert der Untertest</h2>
        <p>
          Du bekommst eine geometrische Figur (das Ziel) und fünf Antwortmöglichkeiten (A-E), die
          jeweils aus mehreren Teilstücken bestehen. Genau eine Antwort enthält die Teile, die
          zusammengesetzt exakt die Zielfigur ergeben. Die Teile dürfen gedreht, aber nicht
          gespiegelt werden. Wichtig: Alle Teile einer Option müssen verwendet werden, und sie
          dürfen sich nicht überlappen. Die Schwierigkeit liegt darin, unter Zeitdruck das räumliche
          Puzzle zu lösen.
        </p>

        <h2>Strategie 1: Markante Kanten suchen</h2>
        <p>
          Suche in der Zielfigur nach markanten Kanten, Ecken oder Einbuchtungen. Dann prüfe, welche
          Antwortoptionen Teile mit passenden Kanten enthalten. Wenn die Zielfigur eine spitze Ecke
          rechts oben hat, muss mindestens ein Teil in der richtigen Antwort diese Ecke abbilden.
          Diese Methode hilft dir, schnell offensichtlich falsche Optionen auszuschließen — oft
          kannst du zwei oder drei Optionen sofort eliminieren.
        </p>

        <h2>Strategie 2: Flächenvergleich</h2>
        <p>
          Schätze die Gesamtfläche der Zielfigur und vergleiche sie mit der Summe der Teile in jeder
          Option. Wenn eine Option offensichtlich zu wenig oder zu viel Fläche hat, scheidet sie
          aus. Das klingt unpräzise, funktioniert aber erstaunlich gut als erster Filter. Besonders
          bei komplexen Figuren spart dir dieser Schritt wertvolle Sekunden, weil du dich nur noch
          auf die verbleibenden Optionen konzentrieren musst.
        </p>

        <h2>Strategie 3: Ausschlussprinzip</h2>
        <p>
          Oft ist es schneller, falsche Optionen zu eliminieren, als die richtige zu finden. Suche
          nach Teilen, die definitiv nicht in die Zielfigur passen: zu groß, falsche Form,
          unmögliche Winkel. Wenn du drei Optionen ausschließen kannst, hast du nur noch zwei
          Kandidaten — und eine 50:50-Chance, selbst wenn du dir nicht ganz sicher bist. In einem
          Test mit Zeitdruck ist das eine effektive Strategie.
        </p>

        <h2>Trainingstipps</h2>
        <p>
          Übe täglich 10-15 Minuten mit verschiedenen Schwierigkeitsstufen. Beginne ohne Zeitdruck
          und steigere das Tempo schrittweise. Analysiere deine Fehler: Hast du eine Kante
          übersehen? Eine Drehung falsch eingeschätzt? Räumliches Vorstellungsvermögen verbessert
          sich durch regelmäßiges Training messbar — Studien zeigen Verbesserungen von 20-30 % nach
          4-6 Wochen. Puzzles, Tangram und ähnliche Spiele helfen ebenfalls, dein räumliches Denken
          zu schärfen.
        </p>

        <CTA text="Trainiere Figuren zusammensetzen mit automatisch generierten Aufgaben in drei Schwierigkeitsstufen." />
      </>
    ),
  },
  {
    slug: "medat-gedaechtnis-merkfaehigkeit",
    title: "Gedächtnis und Merkfähigkeit: So trainierst du für den MedAT",
    excerpt:
      "Der KFF-Untertest Gedächtnis und Merkfähigkeit verlangt, dass du dir Profile einprägst. Mit diesen Techniken merkst du dir alles.",
    topic: "KFF",
    readingTime: 4,
    publishDate: "2026-03-16",
    content: (
      <>
        <p>
          Im KFF-Untertest „Gedächtnis und Merkfähigkeit" bekommst du Steckbriefe fiktiver Personen
          mit Informationen wie Name, Alter, Beruf, Lieblingsfarbe und Hobby. Nach einer
          Einprägephase musst du Fragen zu den Profilen beantworten — ohne sie nochmal zu sehen. Das
          klingt wie ein reines Gedächtnisspiel, ist aber mit den richtigen Techniken systematisch
          trainierbar.
        </p>

        <h2>Was du dir merken musst</h2>
        <p>
          Jedes Profil enthält typischerweise 6-8 Informationen: Vorname, Nachname, Alter, Beruf,
          Wohnort, Lieblingsfarbe, Hobby und manchmal weitere Details. Du bekommst mehrere Profile
          gleichzeitig und hast eine begrenzte Zeit, dir alles einzuprägen. Die Fragen danach können
          sich auf jedes Detail beziehen: „Wie alt ist Frau Müller?", „Welchen Beruf hat die Person
          mit dem Hobby Schwimmen?" oder „Welche Lieblingsfarbe hat der 34-Jährige?"
        </p>

        <h2>Technik 1: Die Loci-Methode</h2>
        <p>
          Die Loci-Methode (auch Gedächtnispalast genannt) ist die effektivste Technik für
          strukturierte Informationen. Stelle dir einen Weg vor, den du gut kennst — zum Beispiel
          deinen Schulweg oder deine Wohnung. Platziere jede Person an einem Ort entlang dieses
          Weges. Verknüpfe die Informationen mit dem Ort durch bildhafte Assoziationen: Der Bäcker
          Müller steht in deiner Küche und backt blaue Brötchen (Lieblingsfarbe: blau). Je absurder
          das Bild, desto besser bleibt es hängen.
        </p>

        <h2>Technik 2: Geschichten bilden</h2>
        <p>
          Verbinde die Informationen einer Person zu einer kleinen Geschichte. Statt dir isoliert
          „Name: Weber, Alter: 28, Beruf: Lehrerin, Hobby: Tennis" zu merken, forme daraus: „Die
          28-jährige Lehrerin Weber webt (Name!) ein Tennisnetz für ihre Schüler." Die Geschichte
          verbindet die Einzelinformationen zu einem zusammenhängenden Bild, das dein Gehirn viel
          leichter speichert als eine lose Liste von Fakten.
        </p>

        <h2>Technik 3: Verknüpfungen zwischen Profilen</h2>
        <p>
          Suche nach Verbindungen zwischen den Profilen. Sind zwei Personen gleich alt? Hat jemand
          den gleichen Beruf wie der Nachname einer anderen Person vermuten lässt? Solche
          Querverbindungen helfen dir, die Profile nicht isoliert, sondern als Netzwerk zu
          speichern. Wenn du weißt, dass „der Älteste Tennis spielt" und „die Jüngste im gleichen
          Ort wohnt wie der Bäcker", hast du mehrere Zugangswege zur selben Information.
        </p>

        <h2>Trainingsplan</h2>
        <p>
          Beginne mit 3-4 Profilen und steigere dich auf 8-10. Übe anfangs ohne Zeitdruck und
          verkürze die Einprägephase schrittweise. Wichtig: Übe auch das Abrufen — nicht nur das
          Einprägen. Stelle dir selbst Fragen und kontrolliere die Antworten. Tägliches Training von
          10 Minuten über 6 Wochen bringt mehr als stundenlanges Üben kurz vor dem Test. Dein
          Gedächtnis ist ein Muskel — trainiere ihn regelmäßig, und er wird stärker.
        </p>

        <CTA text="Trainiere Gedächtnis und Merkfähigkeit mit realistischen Profilen — genau wie im echten MedAT." />
      </>
    ),
  },
  {
    slug: "medizinstudium-oesterreich",
    title: "Medizinstudium in Österreich: Voraussetzungen, Unis und Aufnahme",
    excerpt:
      "Du willst in Österreich Medizin studieren? Hier findest du alles über Voraussetzungen, Universitäten, den MedAT und das Aufnahmeverfahren.",
    topic: "Strategie",
    readingTime: 5,
    publishDate: "2026-03-16",
    content: (
      <>
        <p>
          Medizin ist das beliebteste Studium in Österreich — und eines der schwierigsten, um einen
          Platz zu bekommen. Jedes Jahr bewerben sich über 15.000 Kandidierende auf rund 1.850
          Studienplätze. Der einzige Weg zum Platz führt über den MedAT, den Medizinischen
          Aufnahmetest. Hier erfährst du alles, was du über das Medizinstudium in Österreich wissen
          musst.
        </p>

        <h2>Die vier Medizinischen Universitäten</h2>
        <p>
          In Österreich bieten vier Universitäten das Studium der Humanmedizin an: die Medizinische
          Universität Wien (ca. 740 Plätze), die Medizinische Universität Graz (ca. 370 Plätze), die
          Medizinische Universität Innsbruck (ca. 410 Plätze) und die Johannes Kepler Universität
          Linz (ca. 310 Plätze, Kooperation mit Graz). Jede Uni hat ihren eigenen Charakter: Wien
          ist die größte und forschungsstärkste, Innsbruck punktet mit kleinen Gruppen, Graz mit
          klinischer Praxis und Linz als jüngster Standort mit moderner Ausstattung. Du darfst dich
          nur an einer Uni bewerben.
        </p>

        <h2>Voraussetzungen für die Bewerbung</h2>
        <p>
          Die einzige formale Voraussetzung ist die allgemeine Universitätsreife — also Matura,
          Abitur oder ein gleichwertiger Abschluss. Einen Numerus Clausus wie in Deutschland gibt es
          nicht. Dein Notendurchschnitt spielt keine Rolle — ausschließlich dein MedAT-Ergebnis
          entscheidet über die Zulassung. Das macht den MedAT gleichzeitig fair und anspruchsvoll:
          Jeder hat die gleiche Chance, unabhängig von der Schulnote. EU-Bürger bewerben sich im
          EU-Kontingent (75 % der Plätze), Nicht-EU-Bürger im Drittstaaten-Kontingent (20 %).
        </p>

        <h2>Der MedAT: Aufbau und Gewichtung</h2>
        <p>
          Der MedAT besteht aus vier Teilen: BMS (Basiskenntnistest Medizinische Studien, 40 %), KFF
          (Kognitive Fähigkeiten und Fertigkeiten, 40 %), TV (Textverständnis, 10 %) und SEK
          (Sozial-emotionale Kompetenzen, 10 %). Der BMS prüft Schulwissen in Biologie, Chemie,
          Physik und Mathematik. Der KFF-Teil umfasst Zahlenfolgen, Wortflüssigkeit, Implikationen,
          Figuren zusammensetzen und Gedächtnis. Die Vorbereitung sollte beide Schwerpunkte
          gleichwertig behandeln — wer nur BMS lernt, verschenkt die Hälfte der Punkte.
        </p>

        <h2>Aufnahmequoten und Chancen</h2>
        <p>
          Die Aufnahmequote liegt bei etwa 12-15 %, variiert aber je nach Standort und Kontingent.
          Das klingt hart, aber der MedAT ist fair: Wer sich strukturiert vorbereitet, hat
          realistische Chancen. Statistisch schaffen es viele Kandidierende beim zweiten oder
          dritten Versuch — Wiederholung ist unbegrenzt möglich. Viele erfolgreiche Studierende
          berichten, dass 3-6 Monate konzentrierte Vorbereitung der Schlüssel waren. Frühzeitig
          anfangen, regelmäßig üben und Simulationen machen — das ist die bewährte Formel.
        </p>

        <h2>Studienablauf und Dauer</h2>
        <p>
          Das Medizinstudium in Österreich dauert 12 Semester (6 Jahre) und gliedert sich in drei
          Abschnitte. Die ersten Semester sind vorklinisch (Anatomie, Physiologie, Biochemie),
          danach folgt die klinische Ausbildung mit Famulaturen und dem Klinisch-Praktischen Jahr
          (KPJ) am Ende. Der Abschluss ist der Dr. med. univ. — ein akademischer Grad, der in
          Österreich direkt nach dem Studium verliehen wird. Danach beginnt die Facharztausbildung
          (je nach Fach 6-9 Jahre). Der Weg ist lang, aber er beginnt mit einem einzigen Tag: dem
          MedAT.
        </p>

        <CTA text="Bereite dich optimal auf den MedAT vor — mit MedMaster deckst du alle Testbereiche ab." />
      </>
    ),
  },
  {
    slug: "medat-buecher-empfehlungen",
    title: "MedAT Bücher 2026: Die besten Lernmaterialien im Vergleich",
    excerpt:
      "Welche Bücher und Lernmaterialien lohnen sich für die MedAT-Vorbereitung 2026? Ein ehrlicher Vergleich der beliebtesten Ressourcen.",
    topic: "Strategie",
    readingTime: 5,
    publishDate: "2026-03-16",
    content: (
      <>
        <p>
          Die Auswahl an MedAT-Vorbereitungsmaterialien ist groß — und unübersichtlich. Bücher,
          Online-Plattformen, Kurse, Skripten: Was lohnt sich wirklich? Und wofür solltest du kein
          Geld ausgeben? Hier ist ein ehrlicher Überblick über die beliebtesten Lernmaterialien für
          den MedAT 2026, basierend auf Erfahrungsberichten erfolgreicher Kandidierender.
        </p>

        <h2>BMS-Bücher: Schulwissen auffrischen</h2>
        <p>
          Für den BMS-Teil brauchst du solide Grundlagenbücher in Biologie, Chemie, Physik und
          Mathematik. Beliebte Optionen sind die „MedAT-Vorbereitung"-Reihe verschiedener Verlage
          sowie allgemeine Schulbücher auf Maturaniveau. Wichtig: Kauf nicht fünf Bücher pro Fach.
          Ein gutes Buch pro Fach reicht — ergänzt durch Übungsfragen. Der häufigste Fehler ist, zu
          viel zu lesen und zu wenig zu üben. Ein Buch, das du durcharbeitest und dessen Fragen du
          löst, ist wertvoller als drei Bücher, die du nur überfliegst.
        </p>

        <h2>KFF-Materialien: Übung schlägt Theorie</h2>
        <p>
          Für den KFF-Teil sind Bücher weniger wichtig als Übungsmaterial. Zahlenfolgen,
          Implikationen, Wortflüssigkeit und Figuren zusammensetzen lernst du nicht durch Lesen,
          sondern durch Machen. Die offiziellen Beispielhefte der Medizinischen Universitäten sind
          Pflicht — sie zeigen dir das exakte Format und den Schwierigkeitsgrad. Darüber hinaus
          brauchst du eine Quelle für hunderte Übungsaufgaben unter Zeitdruck. Bücher mit statischen
          Aufgabensammlungen sind hier limitiert, weil du die Aufgaben nach ein paar Durchgängen
          auswendig kennst.
        </p>

        <h2>Online-Plattformen vs. Bücher</h2>
        <p>
          Online-Plattformen haben gegenüber Büchern klare Vorteile: adaptive Schwierigkeit (du übst
          gezielt deine Schwachstellen), unbegrenzte Aufgaben (besonders wichtig für KFF),
          Fortschrittstracking und Prüfungssimulationen unter echten Bedingungen. Bücher haben dafür
          den Vorteil, dass du offline arbeiten kannst und keine Bildschirmzeit brauchst. Die beste
          Strategie: Bücher für die BMS-Theorie, eine Online-Plattform für Übungsfragen und
          KFF-Training. So kombinierst du die Stärken beider Formate.
        </p>

        <h2>Vorbereitungskurse: Lohnt sich das?</h2>
        <p>
          Kostenpflichtige Vorbereitungskurse kosten zwischen 200 und 1.500 Euro. Manche
          Kandidierende schwören darauf, andere halten sie für reine Geldverschwendung. Die Wahrheit
          liegt dazwischen: Ein guter Kurs kann dir Struktur geben, wenn du dich alleine schwer
          motivieren kannst. Aber kein Kurs ersetzt eigenständiges Lernen und Üben. Wenn du
          diszipliniert bist und einen eigenen Lernplan erstellen kannst, brauchst du keinen Kurs.
          Wenn du Struktur und Gruppendynamik brauchst, kann ein Kurs den Unterschied machen.
        </p>

        <h2>Unsere Empfehlung</h2>
        <p>
          Investiere klug: Ein gutes BMS-Buch pro Fach (insgesamt ca. 80-120 €), die offiziellen
          Beispielhefte (kostenlos), und eine Online-Plattform mit umfangreicher Fragendatenbank und
          KFF-Übungen. Verzichte auf teure Komplettpakete, die mehr versprechen als sie halten. Und
          denk daran: Das beste Material nützt nichts, wenn du es nicht regelmäßig und aktiv nutzt.
          Lieber wenig Material gründlich durcharbeiten als viel Material oberflächlich überfliegen.
        </p>

        <CTA text="Über 5.000 BMS-Fragen, alle KFF-Untertests und Prüfungssimulationen — teste MedMaster jetzt gratis." />
      </>
    ),
  },

  // ─── FAQ-style articles (People Also Ask) ───────────────────────────

  {
    slug: "wann-ist-medat-2026",
    title: "Wann ist der MedAT 2026? Termin, Uhrzeit und Ablauf",
    excerpt:
      "Alle Infos zum MedAT-Termin 2026: Wann findet der Test statt, wie lange dauert er und wann muss man sich anmelden?",
    topic: "Strategie",
    readingTime: 2,
    publishDate: "2026-03-16",
    content: (
      <>
        <h2>Wann ist der MedAT 2026?</h2>
        <p>
          Der MedAT 2026 findet voraussichtlich <strong>Anfang Juli 2026</strong> statt. Den exakten
          Termin geben die Medizinischen Universitäten Wien, Graz, Innsbruck und Linz gemeinsam
          bekannt — in der Regel im Jänner oder Februar des Testjahres. Der MedAT wird an einem
          einzigen Tag durchgeführt, gleichzeitig an allen vier Standorten.
        </p>

        <h2>Anmeldefrist und Vorlaufzeit</h2>
        <p>
          Die Anmeldung öffnet erfahrungsgemäß im <strong>März</strong> und endet im{" "}
          <strong>April</strong>. Die Anmeldung erfolgt ausschließlich online über die Website der
          jeweiligen MedUni. Achtung: Die Plätze sind pro Standort begrenzt, also melde dich so früh
          wie möglich an. Eine Ummeldung zwischen Standorten ist nach Anmeldeschluss nicht mehr
          möglich.
        </p>

        <h2>Ablauf am Testtag</h2>
        <p>
          Der gesamte MedAT dauert ca. <strong>8 Stunden</strong> (inkl. Pausen). Der Tag beginnt
          meist um 8:00 Uhr mit der Registrierung. Die Testteile: BMS (ca. 70 Min.), TV (ca. 90 Min.
          inkl. Lernphase), KFF (ca. 75 Min.) und SEK (ca. 40 Min.). Zwischen den Teilen gibt es
          kurze Pausen. Plane den ganzen Tag ein und bring Verpflegung mit.
        </p>

        <CTA text="Starte jetzt mit der Vorbereitung — über 5.000 BMS-Fragen und alle KFF-Untertests warten auf dich." />
      </>
    ),
  },
  {
    slug: "medat-bestehensgrenze",
    title: "Welche Punktzahl braucht man beim MedAT? Bestehensgrenze 2026",
    excerpt:
      "Gibt es eine feste Bestehensgrenze beim MedAT? Was du über Rangplätze, Prozentpunkte und die Zulassung wissen musst.",
    topic: "Strategie",
    readingTime: 2,
    publishDate: "2026-03-16",
    content: (
      <>
        <h2>Welche Punktzahl braucht man beim MedAT?</h2>
        <p>
          Es gibt beim MedAT <strong>keine feste Bestehensgrenze</strong>. Ob du einen Studienplatz
          bekommst, hängt ausschließlich von deinem <strong>Rangplatz</strong> ab — also davon, wie
          gut du im Vergleich zu allen anderen Teilnehmenden abschneidest. Es ist ein
          Auswahlverfahren, kein klassischer Bestehen/Nicht-bestehen-Test.
        </p>

        <h2>Erfahrungswerte nach Standort</h2>
        <p>
          Die benötigte Gesamtpunktzahl variiert jedes Jahr je nach Leistung der Teilnehmenden. Als
          grobe Orientierung aus vergangenen Jahren: In <strong>Wien</strong> brauchte man ca. 85 %
          der maximalen Punktzahl, in <strong>Graz</strong> ca. 80 % und in{" "}
          <strong>Innsbruck</strong> ca. 78 %. In Linz lag die Grenze ähnlich wie in Graz. Diese
          Werte schwanken — nimm sie als Richtwert, nicht als Garantie.
        </p>

        <h2>Wie setzt sich die Punktzahl zusammen?</h2>
        <p>
          Der MedAT besteht aus vier Testteilen mit unterschiedlicher Gewichtung: BMS (40 %), KFF
          (40 %), TV (10 %) und SEK (10 %). Da BMS und KFF zusammen 80 % der Gesamtwertung
          ausmachen, solltest du dort deine Stärken ausspielen. Innerhalb jedes Testteils wird die
          Rohpunktzahl in einen standardisierten Wert umgerechnet.
        </p>

        <CTA text="Trainiere gezielt BMS und KFF — die beiden Testteile, die 80 % deiner MedAT-Note ausmachen." />
      </>
    ),
  },
  {
    slug: "medat-wie-oft-wiederholen",
    title: "Wie oft kann man den MedAT wiederholen?",
    excerpt:
      "Du hast den MedAT nicht geschafft? Kein Problem — so oft darfst du antreten und das sind deine Chancen beim nächsten Versuch.",
    topic: "Strategie",
    readingTime: 2,
    publishDate: "2026-03-16",
    content: (
      <>
        <h2>Wie oft kann man den MedAT wiederholen?</h2>
        <p>
          Du kannst den MedAT <strong>beliebig oft wiederholen</strong> — es gibt keine
          Versuchsbeschränkung. Der Test findet einmal pro Jahr statt (in der Regel Anfang Juli). Du
          kannst dich jedes Jahr neu anmelden, unabhängig davon, wie oft du bereits teilgenommen
          hast. Frühere Ergebnisse werden nicht angerechnet und auch nicht negativ bewertet.
        </p>

        <h2>Wie realistisch ist es beim 2. oder 3. Versuch?</h2>
        <p>
          Sehr realistisch. Erfahrungsgemäß schaffen viele Kandidierende den MedAT erst beim zweiten
          oder dritten Anlauf. Wiederholende haben sogar einen Vorteil: Sie kennen den Ablauf,
          wissen wo ihre Schwächen liegen und können gezielter üben. Laut Erfahrungsberichten
          verbessern sich die meisten Teilnehmenden beim zweiten Antritt um 5-15 Prozentpunkte.
        </p>

        <h2>Was sollte ich zwischen den Versuchen tun?</h2>
        <p>
          Analysiere dein Ergebnis genau: Wo hast du Punkte verloren? Fokussiere dich auf deine
          schwächsten Testteile. Nutze die Monate dazwischen für regelmäßiges, aktives Üben mit
          Übungsfragen statt nur passivem Lesen. Besonders KFF-Untertests (Zahlenfolgen,
          Wortflüssigkeit, Implikationen) lassen sich durch Training stark verbessern.
        </p>

        <CTA text="Starte deine Vorbereitung mit über 5.000 Übungsfragen und allen KFF-Untertests — jetzt gratis testen." />
      </>
    ),
  },
  {
    slug: "medat-ohne-kurs-bestehen",
    title: "Kann man den MedAT ohne Kurs bestehen?",
    excerpt:
      "Brauchst du einen teuren Vorbereitungskurs für den MedAT oder geht es auch ohne? Die ehrliche Antwort.",
    topic: "Strategie",
    readingTime: 2,
    publishDate: "2026-03-16",
    content: (
      <>
        <h2>Kann man den MedAT ohne Kurs bestehen?</h2>
        <p>
          <strong>Ja, absolut.</strong> Viele erfolgreiche MedAT-Teilnehmende haben ohne einen
          kommerziellen Vorbereitungskurs bestanden. Entscheidend ist nicht, ob du einen Kurs
          besuchst, sondern ob du <strong>systematisch, regelmäßig und aktiv</strong> lernst. Ein
          Kurs kann Struktur geben, ersetzt aber nie die eigenständige Übungsarbeit.
        </p>

        <h2>Was braucht man statt eines Kurses?</h2>
        <p>
          Drei Dinge sind wichtig: Erstens, <strong>gute Materialien</strong> — ein Lehrbuch pro
          BMS-Fach und eine Online-Plattform mit umfangreicher Fragendatenbank. Zweitens, ein{" "}
          <strong>realistischer Lernplan</strong> über mindestens 3 Monate. Drittens, regelmäßiges{" "}
          <strong>aktives Üben</strong> mit Multiple-Choice-Fragen statt nur passivem Lesen. Wer
          1.000+ Übungsfragen durcharbeitet, ist besser vorbereitet als jemand, der nur einen Kurs
          besucht hat.
        </p>

        <h2>Wann lohnt sich ein Kurs trotzdem?</h2>
        <p>
          Ein Kurs kann sinnvoll sein, wenn du Schwierigkeiten hast, dich alleine zu motivieren,
          oder wenn du den MedAT bereits einmal ohne Erfolg versucht hast und eine neue
          Herangehensweise brauchst. Aber: Kein Kurs für 500-1.500 € ist nötig, um den MedAT zu
          bestehen. Die besten Ergebnisse erzielen Kandidierende, die eigenständig und konsequent
          üben.
        </p>

        <CTA text="Über 5.000 BMS-Fragen und alle KFF-Untertests — deine Alternative zum teuren Vorbereitungskurs." />
      </>
    ),
  },
  {
    slug: "medat-welche-buecher",
    title: "Welche Bücher für den MedAT? Die wichtigsten Materialien",
    excerpt:
      "Die besten Bücher und Lernmaterialien für die MedAT-Vorbereitung 2026 — sortiert nach Testteil und Fach.",
    topic: "BMS",
    readingTime: 2,
    publishDate: "2026-03-16",
    content: (
      <>
        <h2>Welche Bücher braucht man für den MedAT?</h2>
        <p>
          Für die BMS-Vorbereitung brauchst du <strong>ein solides Lehrbuch pro Fach</strong>: Für
          Biologie eignen sich der Campbell oder Purves (Kurzversion reicht), für Chemie ein
          Grundlagen-Lehrbuch wie Mortimer oder Chemie-Basics, für Physik eine gute Formelsammlung
          mit Erklärungen, und für Mathematik reicht ein Oberstufen-Buch. Ergänzend dazu brauchst du
          eine <strong>Online-Fragensammlung mit 5.000+ Übungsfragen</strong> im MedAT-Format.
        </p>

        <h2>Offizielle Materialien nicht vergessen</h2>
        <p>
          Die MedUnis veröffentlichen jedes Jahr <strong>offizielle Beispielhefte</strong> (sog.
          Informationsbroschüren) für alle Testteile — diese sind kostenlos und absolut
          prüfungsrelevant. Dazu kommt die <strong>offizielle Stichwortliste</strong>, die genau
          vorgibt, welche BMS-Themen geprüft werden können. Beides findest du auf den Websites der
          MedUnis. Arbeite die Stichwortliste systematisch ab.
        </p>

        <h2>Online-Plattformen als Ergänzung</h2>
        <p>
          Bücher allein reichen nicht — du musst das Gelernte aktiv anwenden. Eine gute
          Online-Plattform bietet dir tausende Übungsfragen im echten MedAT-Format (5 Optionen, eine
          richtig), KFF-Training (Zahlenfolgen, Implikationen, Wortflüssigkeit, Figuren
          zusammensetzen) und Prüfungssimulationen unter Zeitdruck. So trainierst du nicht nur
          Wissen, sondern auch Geschwindigkeit und Stressresistenz.
        </p>

        <CTA text="Über 5.000 BMS-Fragen, alle KFF-Untertests und realistische Prüfungssimulationen — jetzt gratis starten." />
      </>
    ),
  },
  {
    slug: "medat-bms-gewichtung",
    title: "Wie viel zählt der BMS beim MedAT? Gewichtung aller Testteile",
    excerpt:
      "BMS, KFF, TV, SEK — so sind die MedAT-Testteile gewichtet und so solltest du deine Lernzeit verteilen.",
    topic: "BMS",
    readingTime: 2,
    publishDate: "2026-03-16",
    content: (
      <>
        <h2>Wie viel zählt der BMS beim MedAT?</h2>
        <p>
          Der BMS (Basiskenntnistest Medizinische Studien) zählt <strong>40 %</strong> der
          MedAT-Gesamtwertung. Damit ist er gemeinsam mit dem KFF der gewichtigste Testteil. Die
          vollständige Gewichtung: <strong>BMS 40 %, KFF 40 %, TV 10 %, SEK 10 %</strong>. Das
          bedeutet: BMS und KFF machen zusammen 80 % deiner Note aus — hier entscheidet sich dein
          Studienplatz.
        </p>

        <h2>Was bedeutet das für die Vorbereitung?</h2>
        <p>
          Du solltest deine Lernzeit grob an der Gewichtung orientieren. Investiere den Großteil in{" "}
          <strong>BMS</strong> (Biologie, Chemie, Physik, Mathematik) und <strong>KFF</strong>{" "}
          (Zahlenfolgen, Figuren zusammensetzen, Wortflüssigkeit, Implikationen, Gedächtnis und
          Merkfähigkeit). TV und SEK sind zwar nicht unwichtig, aber mit jeweils nur 10 % Gewichtung
          sollten sie nicht den Schwerpunkt deiner Vorbereitung bilden.
        </p>

        <h2>BMS-Fächer im Detail</h2>
        <p>
          Innerhalb des BMS werden Biologie, Chemie, Physik und Mathematik geprüft — jeweils als
          Multiple-Choice mit 5 Antwortoptionen (eine richtig). Die Fragen orientieren sich an der
          offiziellen Stichwortliste der MedUnis. Erfahrungsgemäß sind Biologie und Chemie
          umfangreicher, während Physik und Mathematik weniger Fragen haben, aber oft als
          schwieriger empfunden werden.
        </p>

        <CTA text="Trainiere alle vier BMS-Fächer mit über 5.000 Übungsfragen im echten MedAT-Format." />
      </>
    ),
  },
];
