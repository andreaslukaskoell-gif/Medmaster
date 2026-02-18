import { useState } from "react";
import { ChevronLeft, ChevronRight, Lightbulb, Clock, BookOpen, Zap } from "lucide-react";

function PageIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`h-1.5 rounded-full transition-all ${
            i === current ? "w-6 bg-orange-500" : "w-1.5 bg-gray-300 dark:bg-gray-600"
          }`}
        />
      ))}
    </div>
  );
}

function Merksatz({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-r-lg">
      <div className="flex items-start gap-2">
        <Lightbulb className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
        <p className="text-sm font-medium text-orange-800 dark:text-orange-300">{children}</p>
      </div>
    </div>
  );
}

function LetterExample({ letters, solution, description }: { letters: string; solution: string; description: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        {letters.split("").map((letter, i) => (
          <span
            key={i}
            className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-lg font-bold text-gray-800 dark:text-gray-200 shadow-sm"
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-3">
        <span className="text-green-600 dark:text-green-400 font-bold">&rarr;</span>
        <span className="font-bold text-green-700 dark:text-green-300 text-lg">{solution}</span>
      </div>
      <p className="text-sm text-muted mt-1">{description}</p>
    </div>
  );
}

// === PAGE 1: What is Wortflüssigkeit? ===
function Seite1() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Was ist Wortfl&uuml;ssigkeit?
        </h2>
        <p className="text-sm text-muted">
          Im Untertest &quot;Wortfl&uuml;ssigkeit&quot; des MedAT bekommst du eine Gruppe von durchmischten
          Buchstaben. Deine Aufgabe: Bilde daraus ein sinnvolles deutsches Wort. Nicht alle
          Buchstaben m&uuml;ssen verwendet werden!
        </p>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-5">
        <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-3">Aufgabenformat</h3>
        <ul className="space-y-2 text-sm text-orange-700 dark:text-orange-400">
          <li className="flex items-start gap-2">
            <span className="bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">1</span>
            <span>Du siehst eine Buchstabengruppe, z.B. <span className="font-mono font-bold">R T E G A N</span></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">2</span>
            <span>Du bildest daraus ein sinnvolles Wort: <span className="font-bold text-green-600 dark:text-green-400">GARTEN</span></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">3</span>
            <span>Bei schwierigen Aufgaben sind 1-2 <span className="font-bold">Extra-Buchstaben</span> dabei, die nicht zum Wort geh&ouml;ren</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          Beispiele nach Schwierigkeit
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <span className="inline-block text-xs font-medium px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 mb-2">Leicht</span>
            <LetterExample letters="UAMB" solution="BAUM" description="4 Buchstaben, alle werden verwendet" />
          </div>
          <div>
            <span className="inline-block text-xs font-medium px-2 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 mb-2">Mittel</span>
            <LetterExample letters="RTEGAN" solution="GARTEN" description="6 Buchstaben, alle werden verwendet" />
          </div>
          <div>
            <span className="inline-block text-xs font-medium px-2 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 mb-2">Schwer</span>
            <LetterExample letters="HCSSIENASWFTK" solution="WISSENSCHAFT" description="13 Buchstaben, davon 1 Extra (K)" />
          </div>
        </div>
      </div>

      <Merksatz>
        Im echten MedAT hast du ca. 20 Sekunden pro Wort. Schnelligkeit und Mustererkennung sind entscheidend!
      </Merksatz>
    </div>
  );
}

// === PAGE 2: Strategies ===
function Seite2() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Strategien f&uuml;r Wortfl&uuml;ssigkeit
        </h2>
        <p className="text-sm text-muted">
          Mit den richtigen Strategien l&ouml;st du Wortfl&uuml;ssigkeit-Aufgaben schnell und sicher.
        </p>
      </div>

      {/* Strategy 1 */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 space-y-3">
        <div className="flex items-center gap-3">
          <span className="bg-orange-500 text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center">1</span>
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">H&auml;ufige Anfangs- und Endsilben suchen</h3>
        </div>
        <p className="text-sm text-muted pl-11">
          Suche zuerst nach typischen deutschen Wortanf&auml;ngen und -endungen. Das schr&auml;nkt die M&ouml;glichkeiten sofort ein.
        </p>
        <div className="pl-11 grid grid-cols-2 gap-3">
          <div className="bg-orange-50 dark:bg-orange-900/15 rounded-lg p-3">
            <p className="text-xs font-semibold text-orange-700 dark:text-orange-400 mb-1.5">Typische Anfangssilben</p>
            <div className="flex flex-wrap gap-1">
              {["VER-", "BE-", "GE-", "ER-", "AN-", "AUF-", "AUS-", "EIN-", "UM-", "UN-"].map(s => (
                <span key={s} className="text-xs font-mono bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-1.5 py-0.5 rounded">{s}</span>
              ))}
            </div>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/15 rounded-lg p-3">
            <p className="text-xs font-semibold text-orange-700 dark:text-orange-400 mb-1.5">Typische Endsilben</p>
            <div className="flex flex-wrap gap-1">
              {["-UNG", "-KEIT", "-HEIT", "-LICH", "-TION", "-ISCH", "-SCHAFT", "-MENT"].map(s => (
                <span key={s} className="text-xs font-mono bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-1.5 py-0.5 rounded">{s}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="pl-11 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 text-sm">
          <p className="font-mono">Buchstaben: <span className="font-bold">G N U D L H A N B E</span></p>
          <p className="mt-1 text-orange-600 dark:text-orange-400">
            &rarr; Du siehst BE- und -UNG &rarr; <span className="font-bold text-green-600 dark:text-green-400">BEHANDLUNG</span>
          </p>
        </div>
      </div>

      {/* Strategy 2 */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 space-y-3">
        <div className="flex items-center gap-3">
          <span className="bg-orange-500 text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center">2</span>
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">Vokale zuerst identifizieren</h3>
        </div>
        <p className="text-sm text-muted pl-11">
          Markiere zuerst alle Vokale (A, E, I, O, U). Die Vokal-Konsonant-Struktur gibt dir einen
          Hinweis auf die Wortstruktur.
        </p>
        <div className="pl-11 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 text-sm">
          <p className="font-mono">
            Buchstaben: <span className="text-orange-600 dark:text-orange-400 font-bold">E</span> R K{" "}
            <span className="text-orange-600 dark:text-orange-400 font-bold">A</span> N H{" "}
            <span className="text-orange-600 dark:text-orange-400 font-bold">U</span> S K N{" "}
            <span className="text-orange-600 dark:text-orange-400 font-bold">A</span>
          </p>
          <p className="mt-1">Vokale: E, A, U, A &rarr; Muster _A__E__AU_ &rarr; <span className="font-bold text-green-600 dark:text-green-400">KRANKENHAUS</span></p>
        </div>
      </div>

      {/* Strategy 3 */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 space-y-3">
        <div className="flex items-center gap-3">
          <span className="bg-orange-500 text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center">3</span>
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">H&auml;ufige Buchstabenkombinationen erkennen</h3>
        </div>
        <p className="text-sm text-muted pl-11">
          Bestimmte Buchstabenkombinationen kommen im Deutschen extrem h&auml;ufig vor.
          Wenn du sie siehst, bilde daraus den Kern des Worts.
        </p>
        <div className="pl-11 grid grid-cols-3 gap-2">
          {[
            { combo: "SCH", example: "Schule, Tisch" },
            { combo: "CH", example: "Nacht, Buch" },
            { combo: "ST", example: "Stern, Stein" },
            { combo: "SP", example: "Spiegel, Sport" },
            { combo: "PF", example: "Pflanze, Pferd" },
            { combo: "CK", example: "Zucker, Br\u00fccke" },
          ].map(({ combo, example }) => (
            <div key={combo} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-2 text-center">
              <p className="font-mono font-bold text-orange-600 dark:text-orange-400">{combo}</p>
              <p className="text-xs text-muted mt-0.5">{example}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Time Management */}
      <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-orange-500" />
          <h3 className="font-semibold text-orange-800 dark:text-orange-300">Zeitmanagement</h3>
        </div>
        <ul className="space-y-2 text-sm text-orange-700 dark:text-orange-400">
          <li className="flex items-start gap-2">
            <span className="text-orange-500 mt-0.5">1.</span>
            <span>~20 Sekunden pro Wort — nicht l&auml;nger gr&uuml;beln!</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 mt-0.5">2.</span>
            <span>Bei Blockade: sofort weiter zum n&auml;chsten Wort, am Ende zur&uuml;ckkommen.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 mt-0.5">3.</span>
            <span>Einfache W&ouml;rter zuerst l&ouml;sen — das gibt Sicherheit und Punkte.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 mt-0.5">4.</span>
            <span>Immer eine Antwort eintragen — auch wenn du unsicher bist!</span>
          </li>
        </ul>
      </div>

      {/* Expert Tips */}
      <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-orange-500" />
          <h3 className="font-semibold text-orange-800 dark:text-orange-300">Pro-Tipps</h3>
        </div>
        <ul className="space-y-2 text-sm text-orange-700 dark:text-orange-400">
          <li className="flex items-start gap-2">
            <span className="text-orange-500 mt-0.5">1.</span>
            <span>Lies die Buchstaben laut vor — manchmal &quot;h&ouml;rst&quot; du das Wort schneller als du es siehst.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 mt-0.5">2.</span>
            <span>Suche nach Doppelbuchstaben (SS, LL, TT) — sie verraten oft das Wort.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 mt-0.5">3.</span>
            <span>Bei Extra-Buchstaben: Streiche unwahrscheinliche Kombinationen mental durch.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 mt-0.5">4.</span>
            <span>Trainiere t&auml;glich 10-15 Minuten — Wortfl&uuml;ssigkeit verbessert sich durch &Uuml;bung enorm!</span>
          </li>
        </ul>
      </div>

      <Merksatz>
        Goldene Regel: &quot;Silben zuerst!&quot; — Suche immer nach bekannten Anfangs- und Endsilben.
        In 80% der F&auml;lle findest du das Wort so in unter 10 Sekunden.
      </Merksatz>
    </div>
  );
}

const pages = [Seite1, Seite2];
const pageTitles = ["Was ist Wortflüssigkeit?", "Strategien"];
const totalPages = pages.length;

export default function WortfluessigkeitLernen() {
  const [currentPage, setCurrentPage] = useState(0);
  const Page = pages[currentPage];

  return (
    <div className="space-y-6">
      {/* Page navigation */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <PageIndicator current={currentPage} total={totalPages} />
          <span className="text-xs text-muted">
            Seite {currentPage + 1} von {totalPages}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {pageTitles.map((title, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`text-xs px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                i === currentPage
                  ? "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 font-medium"
                  : "text-muted hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {title}
            </button>
          ))}
        </div>
      </div>

      {/* Page content */}
      <Page />

      {/* Bottom navigation */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
          disabled={currentPage === 0}
          className="flex items-center gap-1 text-sm font-medium text-orange-600 dark:text-orange-400 disabled:opacity-30 disabled:cursor-not-allowed hover:text-orange-800 dark:hover:text-orange-300 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          Zur&uuml;ck
        </button>
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={currentPage === totalPages - 1}
          className="flex items-center gap-1 text-sm font-medium text-orange-600 dark:text-orange-400 disabled:opacity-30 disabled:cursor-not-allowed hover:text-orange-800 dark:hover:text-orange-300 transition-colors cursor-pointer"
        >
          Weiter
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
