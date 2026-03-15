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
];
