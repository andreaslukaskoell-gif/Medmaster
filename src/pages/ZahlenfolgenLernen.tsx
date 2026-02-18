import { useState } from "react";
import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight, Lightbulb, BookOpen, Clock } from "lucide-react";

const totalPages = 2;

function PageIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`h-1.5 rounded-full transition-all ${
            i === current ? "w-6 bg-blue-500" : "w-1.5 bg-gray-300 dark:bg-gray-600"
          }`}
        />
      ))}
    </div>
  );
}

function Merksatz({ children }: { children: ReactNode }) {
  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
      <div className="flex items-start gap-2">
        <Lightbulb className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
        <p className="text-sm font-medium text-blue-800 dark:text-blue-300">{children}</p>
      </div>
    </div>
  );
}

function SequenceExample({
  label,
  sequence,
  colors,
  description,
}: {
  label: string;
  sequence: string[];
  colors: string[];
  description: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{label}</h4>
      <p className="text-sm text-muted mb-3">{description}</p>
      <div className="flex items-center gap-2 flex-wrap font-mono text-lg">
        {sequence.map((val, i) => (
          <span
            key={i}
            className={`px-2 py-1 rounded ${colors[i] || "text-gray-700 dark:text-gray-300"}`}
          >
            {val}
          </span>
        ))}
      </div>
    </div>
  );
}

// === SEITE 1: Mustertypen erkennen ===
function Seite1() {
  const blue = "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300";
  const green = "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300";
  const amber = "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300";
  const rose = "bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300";
  const plain = "";

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Mustertypen erkennen
        </h2>
        <p className="text-sm text-muted">
          Im MedAT gibt es 6 Haupttypen von Zahlenfolgen. Lerne sie zu erkennen, um
          Aufgaben schnell und sicher zu l&ouml;sen.
        </p>
      </div>

      {/* Simple */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          1. Simple Folgen
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SequenceExample
            label="Konstante Differenz"
            sequence={["3", "6", "9", "12", "15", "18"]}
            colors={[blue, blue, blue, blue, blue, blue]}
            description="Immer +3: Die Differenz zwischen aufeinanderfolgenden Zahlen ist konstant."
          />
          <SequenceExample
            label="Wachsende Differenz"
            sequence={["1", "2", "4", "7", "11", "16"]}
            colors={[blue, blue, blue, blue, blue, blue]}
            description="Differenzen: +1, +2, +3, +4, +5 — die Differenz selbst steigt um 1."
          />
        </div>
      </div>

      {/* Zweiersprung */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          2. Zweiersprung (h&auml;ufigstes Muster!)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SequenceExample
            label="Zwei verschachtelte Folgen"
            sequence={["2", "10", "4", "20", "6", "30", "8", "40"]}
            colors={[blue, green, blue, green, blue, green, blue, green]}
            description="Gerade Pos. (blau): 2, 4, 6, 8 (+2) — Ungerade Pos. (grün): 10, 20, 30, 40 (+10)"
          />
          <SequenceExample
            label="Gegenläufige Teilfolgen"
            sequence={["1", "100", "3", "95", "5", "90", "7", "85"]}
            colors={[blue, green, blue, green, blue, green, blue, green]}
            description="Pos. 1,3,5,7 (blau): +2 steigend — Pos. 2,4,6,8 (grün): −5 fallend"
          />
        </div>
        <Merksatz>
          90% aller MedAT-Zahlenfolgen sind Zweiersprünge! Markiere immer zuerst jede 2. Zahl.
        </Merksatz>
      </div>

      {/* Dreiersprung */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          3. Dreiersprung
        </h3>
        <SequenceExample
          label="Drei verschachtelte Folgen"
          sequence={["1", "10", "100", "2", "20", "200", "3", "30", "300"]}
          colors={[blue, green, amber, blue, green, amber, blue, green, amber]}
          description="Pos. 1,4,7 (blau): 1, 2, 3 — Pos. 2,5,8 (grün): 10, 20, 30 — Pos. 3,6,9 (gelb): 100, 200, 300"
        />
      </div>

      {/* Vierersprung */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          4. Vierersprung
        </h3>
        <SequenceExample
          label="Vier verschachtelte Folgen"
          sequence={["1", "5", "10", "20", "2", "10", "20", "40"]}
          colors={[blue, green, amber, rose, blue, green, amber, rose]}
          description="4 Teilfolgen an Positionen 1/5, 2/6, 3/7, 4/8 — jede mit eigenem Muster"
        />
      </div>

      {/* Rekursiv */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          5. Rekursive Folgen
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SequenceExample
            label="Fibonacci-artig (a + b = c)"
            sequence={["1", "1", "2", "3", "5", "8", "13", "21"]}
            colors={[blue, blue, blue, blue, blue, blue, blue, blue]}
            description="Jede Zahl ist die Summe der beiden vorherigen: 1+1=2, 1+2=3, 2+3=5, ..."
          />
          <SequenceExample
            label="Produkt-Rekursion (a × b = c)"
            sequence={["1", "2", "2", "4", "8", "32"]}
            colors={[blue, blue, blue, blue, blue, blue]}
            description="Jede Zahl ist das Produkt der beiden vorherigen: 1×2=2, 2×2=4, 2×4=8, 4×8=32"
          />
        </div>
      </div>

      {/* Komplex */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          6. Komplexe Folgen
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SequenceExample
            label="Wechselnde Operationen"
            sequence={["2", "4", "3", "6", "5", "10", "9", "18"]}
            colors={[plain, blue, green, blue, green, blue, green, blue]}
            description="Abwechselnd ×2 und −1: 2×2=4, 4−1=3, 3×2=6, 6−1=5, ..."
          />
          <SequenceExample
            label="Quadratzahlen"
            sequence={["1", "4", "9", "16", "25", "36", "49", "64"]}
            colors={[blue, blue, blue, blue, blue, blue, blue, blue]}
            description="1², 2², 3², 4², 5², 6², 7², 8² — Quadratzahlen der natürlichen Zahlen"
          />
        </div>
      </div>
    </div>
  );
}

// === SEITE 2: Lösungsstrategie ===
function Seite2() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          L&ouml;sungsstrategie Schritt f&uuml;r Schritt
        </h2>
        <p className="text-sm text-muted">
          Gehe bei jeder Aufgabe systematisch vor — so findest du das Muster schnell und sicher.
        </p>
      </div>

      {/* Schritt 1 */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 space-y-3">
        <div className="flex items-center gap-3">
          <span className="bg-blue-500 text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center">1</span>
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">Differenzen bilden (1. Ordnung)</h3>
        </div>
        <p className="text-sm text-muted pl-11">
          Berechne die Differenz zwischen aufeinanderfolgenden Zahlen.
          Sind alle Differenzen gleich? → Simple Folge mit konstanter Differenz.
        </p>
        <div className="pl-11 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 text-sm">
          <p className="font-mono">Folge: 5, 8, 11, ?, 17, 20, ?, 26</p>
          <p className="font-mono text-blue-600 dark:text-blue-400 mt-1">Diff.: +3, +3, +3, +3, +3, +3, +3</p>
          <p className="mt-1 font-medium text-green-700 dark:text-green-400">→ Konstante Differenz +3, also: 14 und 23</p>
        </div>
      </div>

      {/* Schritt 2 */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 space-y-3">
        <div className="flex items-center gap-3">
          <span className="bg-blue-500 text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center">2</span>
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">Differenzen der Differenzen (2. Ordnung)</h3>
        </div>
        <p className="text-sm text-muted pl-11">
          Wenn die 1. Differenzen kein Muster zeigen, bilde die Differenzen der Differenzen.
          Konstante 2. Differenz? → Quadratische Folge.
        </p>
        <div className="pl-11 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 text-sm">
          <p className="font-mono">Folge: 1, 4, 9, 16, 25, ...</p>
          <p className="font-mono text-blue-600 dark:text-blue-400 mt-1">1. Diff.: +3, +5, +7, +9</p>
          <p className="font-mono text-green-600 dark:text-green-400 mt-1">2. Diff.: +2, +2, +2</p>
          <p className="mt-1 font-medium text-green-700 dark:text-green-400">→ Quadratzahlen: 1&sup2;, 2&sup2;, 3&sup2;, ...</p>
        </div>
      </div>

      {/* Schritt 3 */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 space-y-3">
        <div className="flex items-center gap-3">
          <span className="bg-blue-500 text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center">3</span>
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">Zweiersprung pr&uuml;fen</h3>
        </div>
        <p className="text-sm text-muted pl-11">
          Kein Muster bei den Differenzen? Markiere jede 2. Zahl und pr&uuml;fe beide Teilfolgen separat.
          Das ist mit 90% der h&auml;ufigste MedAT-Aufgabentyp!
        </p>
        <div className="pl-11 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 text-sm">
          <p className="font-mono">Folge: 3, 10, 6, 20, 9, 30, ?, 40</p>
          <p className="mt-1">
            <span className="font-mono bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-1 rounded">3, 6, 9, ?</span>
            {" "}→ +3 → <span className="font-bold">12</span>
          </p>
          <p>
            <span className="font-mono bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-1 rounded">10, 20, 30, 40</span>
            {" "}→ +10
          </p>
        </div>
      </div>

      {/* Schritt 4 */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 space-y-3">
        <div className="flex items-center gap-3">
          <span className="bg-blue-500 text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center">4</span>
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">Dreiersprung / Vierersprung</h3>
        </div>
        <p className="text-sm text-muted pl-11">
          Immer noch kein Muster? Probiere jede 3. oder 4. Zahl zu markieren.
          Seltener im MedAT, aber kommt vor.
        </p>
      </div>

      {/* Schritt 5 */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 space-y-3">
        <div className="flex items-center gap-3">
          <span className="bg-blue-500 text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center">5</span>
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">Rekursion pr&uuml;fen</h3>
        </div>
        <p className="text-sm text-muted pl-11">
          Pr&uuml;fe ob a+b=c, a&times;b=c oder &auml;hnliche Beziehungen zwischen aufeinanderfolgenden Zahlen bestehen.
        </p>
        <div className="pl-11 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 text-sm">
          <p className="font-mono">Folge: 2, 3, 5, 8, 13, 21, ...</p>
          <p className="font-mono text-blue-600 dark:text-blue-400 mt-1">2+3=5, 3+5=8, 5+8=13, 8+13=21</p>
          <p className="mt-1 font-medium text-green-700 dark:text-green-400">→ Fibonacci-artig: Summe der beiden vorherigen</p>
        </div>
      </div>

      {/* Zeitmanagement */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-blue-500" />
          <h3 className="font-semibold text-blue-800 dark:text-blue-300">Zeitmanagement</h3>
        </div>
        <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-400">
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-0.5">1.</span>
            <span>Max. 90 Sekunden pro Aufgabe — im Zweifel raten und weiter!</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-0.5">2.</span>
            <span>Beginne IMMER mit dem Zweiersprung — das spart bei 90% der Aufgaben Zeit.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-0.5">3.</span>
            <span>10 Aufgaben in 15 Minuten = 90 Sekunden pro Aufgabe. Einfache zuerst l&ouml;sen!</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-0.5">4.</span>
            <span>Schwierige Aufgaben &uuml;berspringen und am Ende zur&uuml;ckkehren.</span>
          </li>
        </ul>
      </div>

      {/* Expert-Tipps */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 space-y-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-500" />
          <h3 className="font-semibold text-blue-800 dark:text-blue-300">Expert-Tipps f&uuml;r die Pr&uuml;fung</h3>
        </div>
        <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-400">
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-0.5">1.</span>
            <span>Pr&uuml;fe zuerst den Zweiersprung — das ist fast immer richtig.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-0.5">2.</span>
            <span>Nutze die Antwortoptionen! Setze eine Option ein und pr&uuml;fe, ob das Muster aufgeht.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-0.5">3.</span>
            <span>Bei Zweiersprung: Eine Teilfolge steigt oft, die andere f&auml;llt oder bleibt konstant.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-0.5">4.</span>
            <span>Trainiere Kopfrechnen — das spart enorm viel Zeit bei Differenzenbildung.</span>
          </li>
        </ul>
      </div>

      <Merksatz>
        Merksatz: &quot;Zweiersprung zuerst!&quot; — In 9 von 10 F&auml;llen ist die Folge ein Zweiersprung.
        Wenn nicht, gehe systematisch die Schritte 1-5 durch.
      </Merksatz>
    </div>
  );
}

const pages = [Seite1, Seite2];
const pageTitles = ["Mustertypen erkennen", "Lösungsstrategie"];

export default function ZahlenfolgenLernen() {
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
                  ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium"
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
          className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 disabled:opacity-30 disabled:cursor-not-allowed hover:text-blue-800 dark:hover:text-blue-300 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          Zur&uuml;ck
        </button>
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={currentPage === totalPages - 1}
          className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 disabled:opacity-30 disabled:cursor-not-allowed hover:text-blue-800 dark:hover:text-blue-300 transition-colors cursor-pointer"
        >
          Weiter
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
