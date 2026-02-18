import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  Clock,
  BookOpen,
  AlertTriangle,
  Search,
  Target,
  Eye,
} from "lucide-react";

function PageIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`h-1.5 rounded-full transition-all ${
            i === current ? "w-6 bg-indigo-500" : "w-1.5 bg-gray-300 dark:bg-gray-600"
          }`}
        />
      ))}
    </div>
  );
}

function Merksatz({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg">
      <div className="flex items-start gap-2">
        <Lightbulb className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
        <p className="text-sm font-medium text-indigo-800 dark:text-indigo-300">{children}</p>
      </div>
    </div>
  );
}

// === PAGE 1: Was ist Textverständnis? ===
function Seite1() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Was ist Textverst&auml;ndnis?
        </h2>
        <p className="text-sm text-muted">
          Im Untertest &quot;Textverst&auml;ndnis&quot; (TV) des MedAT bekommst du einen wissenschaftlichen
          Text mit ca. 500-800 W&ouml;rtern. Anschlie&szlig;end beantwortest du 4-6 Multiple-Choice-Fragen
          dazu. Der TV-Teil macht 10% der MedAT-Gesamtpunktzahl aus.
        </p>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-5">
        <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-3">Aufgabenformat</h3>
        <ul className="space-y-2 text-sm text-indigo-700 dark:text-indigo-400">
          <li className="flex items-start gap-2">
            <span className="bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">1</span>
            <span>Du bekommst <span className="font-bold">1 wissenschaftlichen Text</span> (500-800 W&ouml;rter)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">2</span>
            <span>Dazu <span className="font-bold">4-6 MC-Fragen</span> mit jeweils 4 Antwortm&ouml;glichkeiten</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">3</span>
            <span>Du darfst <span className="font-bold">w&auml;hrend der Fragen im Text nachlesen</span></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">4</span>
            <span>Zeitlimit: ca. <span className="font-bold">6 Minuten pro Text</span> (Text + Fragen)</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          Fragetypen
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Search className="w-4 h-4 text-indigo-500" />
              <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100">Detailfragen</h4>
            </div>
            <p className="text-xs text-muted mb-2">Fakten direkt aus dem Text</p>
            <p className="text-xs text-indigo-600 dark:text-indigo-400 italic">
              &quot;Laut dem Text, welche Funktion hat...?&quot;
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-indigo-500" />
              <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100">Verst&auml;ndnisfragen</h4>
            </div>
            <p className="text-xs text-muted mb-2">Schlussfolgerungen aus dem Text</p>
            <p className="text-xs text-indigo-600 dark:text-indigo-400 italic">
              &quot;Was kann aus dem Text geschlossen werden?&quot;
            </p>
          </div>
        </div>
      </div>

      <Merksatz>
        Der TV-Untertest testet ausschlie&szlig;lich dein Leseverst&auml;ndnis — NICHT dein Vorwissen!
        Alle Antworten m&uuml;ssen sich aus dem Text ableiten lassen.
      </Merksatz>
    </div>
  );
}

// === PAGE 2: Schema-Methode ===
function Seite2() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Die Schema-Methode (4 Schritte)
        </h2>
        <p className="text-sm text-muted">
          Mit dieser bew&auml;hrten Methode bearbeitest du jeden TV-Text systematisch und effizient.
        </p>
      </div>

      {/* Step 1 */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 space-y-3">
        <div className="flex items-center gap-3">
          <span className="bg-indigo-500 text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center">1</span>
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">Text &uuml;berfliegen (30 Sekunden)</h3>
        </div>
        <p className="text-sm text-muted pl-11">
          Lies den Text NICHT sofort im Detail! Verschaffe dir zuerst einen &Uuml;berblick:
        </p>
        <div className="pl-11 grid grid-cols-1 sm:grid-cols-3 gap-2">
          {[
            { icon: Eye, label: "Thema erkennen", desc: "Worum geht es grob?" },
            { icon: BookOpen, label: "Struktur erfassen", desc: "Wie viele Absätze? Welche Gliederung?" },
            { icon: Target, label: "Schwerpunkte", desc: "Welche Bereiche werden behandelt?" },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="bg-indigo-50 dark:bg-indigo-900/15 rounded-lg p-3 text-center">
              <Icon className="w-4 h-4 text-indigo-500 mx-auto mb-1" />
              <p className="text-xs font-semibold text-indigo-700 dark:text-indigo-400">{label}</p>
              <p className="text-[10px] text-muted mt-0.5">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Step 2 */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 space-y-3">
        <div className="flex items-center gap-3">
          <span className="bg-indigo-500 text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center">2</span>
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">Fragen ZUERST lesen</h3>
        </div>
        <p className="text-sm text-muted pl-11">
          Lies die Fragen <span className="font-bold">bevor</span> du den Text im Detail liest.
          So wei&szlig;t du, wonach du suchen musst, und liest den Text viel gezielter.
        </p>
        <div className="pl-11 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 text-sm">
          <p className="text-indigo-600 dark:text-indigo-400">
            <span className="font-bold">Beispiel:</span> Wenn eine Frage nach &quot;dem Zeitpunkt der Entdeckung&quot; fragt,
            achtest du beim Lesen besonders auf Jahreszahlen und zeitliche Angaben.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 space-y-3">
        <div className="flex items-center gap-3">
          <span className="bg-indigo-500 text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center">3</span>
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">Text gezielt lesen</h3>
        </div>
        <p className="text-sm text-muted pl-11">
          Jetzt liest du den Text gr&uuml;ndlich — aber mit Fokus auf die Fragen. Markiere mental
          die Stellen, die f&uuml;r die Fragen relevant sein k&ouml;nnten.
        </p>
        <div className="pl-11 flex gap-2">
          <span className="text-xs px-2 py-1 rounded bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 font-medium">
            Zahlen & Daten
          </span>
          <span className="text-xs px-2 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium">
            Ursache-Wirkung
          </span>
          <span className="text-xs px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-medium">
            Fachbegriffe
          </span>
        </div>
      </div>

      {/* Step 4 */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 space-y-3">
        <div className="flex items-center gap-3">
          <span className="bg-indigo-500 text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center">4</span>
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">Fragen beantworten — NUR aus dem Text!</h3>
        </div>
        <p className="text-sm text-muted pl-11">
          Beantworte jede Frage <span className="font-bold">ausschlie&szlig;lich</span> auf Basis
          des Textes. Dein Vorwissen kann dir Fallen stellen!
        </p>
        <div className="pl-11 bg-red-50 dark:bg-red-900/15 border border-red-200 dark:border-red-800 rounded-lg p-3 text-sm">
          <p className="text-red-700 dark:text-red-400 font-medium">
            Wenn du etwas wei&szlig;t, das NICHT im Text steht — ist es f&uuml;r den TV irrelevant!
          </p>
        </div>
      </div>

      <Merksatz>
        Goldene Regel: &quot;Fragen zuerst, dann lesen!&quot; — Wer die Fragen kennt, liest 50% effizienter.
      </Merksatz>
    </div>
  );
}

// === PAGE 3: Typische Fallen & Zeitmanagement ===
function Seite3() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Typische Fallen & Zeitmanagement
        </h2>
        <p className="text-sm text-muted">
          Diese h&auml;ufigen Fehler kosten Punkte — erkenne und vermeide sie!
        </p>
      </div>

      {/* Trap 1 */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 space-y-3">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
            Falle 1: &quot;Laut Text&quot; vs. &quot;Im Allgemeinen&quot;
          </h3>
        </div>
        <p className="text-sm text-muted pl-8">
          Wenn eine Frage mit &quot;Laut dem Text...&quot; beginnt, z&auml;hlt NUR was im Text steht.
          Auch wenn eine Antwortoption allgemein korrekt w&auml;re — wenn sie nicht im Text erw&auml;hnt wird,
          ist sie falsch!
        </p>
        <div className="pl-8 grid grid-cols-2 gap-3">
          <div className="bg-red-50 dark:bg-red-900/15 rounded-lg p-3 text-center">
            <p className="text-xs font-bold text-red-600 dark:text-red-400 mb-1">FALSCH</p>
            <p className="text-xs text-muted">&quot;Das wei&szlig; ich aus dem Bio-Unterricht&quot;</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/15 rounded-lg p-3 text-center">
            <p className="text-xs font-bold text-green-600 dark:text-green-400 mb-1">RICHTIG</p>
            <p className="text-xs text-muted">&quot;Der Text sagt in Absatz 3...&quot;</p>
          </div>
        </div>
      </div>

      {/* Trap 2 */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 space-y-3">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
            Falle 2: &quot;Nicht im Text erw&auml;hnt&quot;
          </h3>
        </div>
        <p className="text-sm text-muted pl-8">
          Manchmal ist die korrekte Antwort &quot;wurde im Text nicht erw&auml;hnt&quot; oder eine Option,
          die bewusst NICHT im Text steht. Achte auf Negativ-Formulierungen in den Fragen!
        </p>
      </div>

      {/* Trap 3 */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 space-y-3">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
            Falle 3: Zu schnelles Lesen
          </h3>
        </div>
        <p className="text-sm text-muted pl-8">
          Manche Optionen klingen fast gleich, unterscheiden sich aber in kleinen Details
          (z.B. &quot;alle Zellen&quot; vs. &quot;bestimmte Zellen&quot;). Lies jede Option sorgf&auml;ltig!
        </p>
      </div>

      {/* Time management */}
      <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-indigo-500" />
          <h3 className="font-semibold text-indigo-800 dark:text-indigo-300">Zeitmanagement (6 Minuten pro Text)</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
          {[
            { time: "0:30", label: "Überfliegen", desc: "Thema & Struktur" },
            { time: "0:30", label: "Fragen lesen", desc: "Wonach wird gefragt?" },
            { time: "2:00", label: "Text lesen", desc: "Gezielt & gründlich" },
            { time: "3:00", label: "Fragen beantworten", desc: "~36 Sek pro Frage" },
          ].map(({ time, label, desc }) => (
            <div key={label} className="bg-white dark:bg-gray-800 rounded-lg p-3 text-center">
              <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{time}</p>
              <p className="text-xs font-semibold text-gray-900 dark:text-gray-100">{label}</p>
              <p className="text-[10px] text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Merksatz>
        Pro-Tipp: Wenn du bei einer Frage unsicher bist, geh im Text zur&uuml;ck zur relevanten Stelle.
        Das kostet 10 Sekunden, spart aber Punkte!
      </Merksatz>
    </div>
  );
}

const pages = [Seite1, Seite2, Seite3];
const pageTitles = ["Aufgabenformat", "Schema-Methode", "Fallen & Zeit"];
const totalPages = pages.length;

export default function TextverstaendnisLernen() {
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
                  ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-medium"
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
          className="flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 disabled:opacity-30 disabled:cursor-not-allowed hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          Zur&uuml;ck
        </button>
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={currentPage === totalPages - 1}
          className="flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 disabled:opacity-30 disabled:cursor-not-allowed hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors cursor-pointer"
        >
          Weiter
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
