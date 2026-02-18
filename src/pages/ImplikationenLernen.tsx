import { useState } from "react";
import { ChevronLeft, ChevronRight, Lightbulb, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  EulerAlleXsindY,
  EulerAlleXkeineY,
  EulerEinigeXsindY,
  EulerEinigeXkeineY,
  EulerTwoCircles,
  EulerThreeCircles,
} from "@/components/diagrams/kff/EulerDiagrams";

const totalPages = 3;

function PageIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`h-1.5 rounded-full transition-all ${
            i === current ? "w-6 bg-purple-500" : "w-1.5 bg-gray-300 dark:bg-gray-600"
          }`}
        />
      ))}
    </div>
  );
}

function Merksatz({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg">
      <div className="flex items-start gap-2">
        <Lightbulb className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />
        <p className="text-sm font-medium text-purple-800 dark:text-purple-300">{children}</p>
      </div>
    </div>
  );
}

function AussagenBox({ label, description, children }: { label: string; description: string; children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{label}</h4>
      <p className="text-sm text-muted mb-3">{description}</p>
      <div className="flex justify-center">{children}</div>
    </div>
  );
}

// === SEITE 1: Die 4 Grundaussagen ===
function Seite1() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Die 4 Grundaussagen
        </h2>
        <p className="text-sm text-muted">
          Jede Implikationsaufgabe besteht aus Aussagen mit den Quantoren &quot;Alle&quot; und &quot;Einige&quot;.
          Es gibt genau 4 mögliche Grundaussagen.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          Absolute Aussagen
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AussagenBox
            label="&laquo;Alle X sind Y&raquo;"
            description="X ist vollständig in Y enthalten. Jedes X-Element ist auch ein Y-Element."
          >
            <EulerAlleXsindY />
          </AussagenBox>
          <AussagenBox
            label="&laquo;Alle X sind keine Y&raquo;"
            description="X und Y haben keine gemeinsamen Elemente. Die Mengen sind disjunkt."
          >
            <EulerAlleXkeineY />
          </AussagenBox>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          Partielle Aussagen
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AussagenBox
            label="&laquo;Einige X sind Y&raquo;"
            description="Mindestens ein X ist auch ein Y. Die Mengen überlappen sich (teilweise oder ganz)."
          >
            <EulerEinigeXsindY />
          </AussagenBox>
          <AussagenBox
            label="&laquo;Einige X sind keine Y&raquo;"
            description="Mindestens ein X ist kein Y. Nicht alle X-Elemente sind in Y."
          >
            <EulerEinigeXkeineY />
          </AussagenBox>
        </div>
      </div>

      <Merksatz>
        &quot;Einige&quot; bedeutet &quot;mindestens eines&quot; — das schließt &quot;alle&quot; mit ein!
        Wenn alle Katzen Haustiere sind, dann sind auch einige Katzen Haustiere.
      </Merksatz>
    </div>
  );
}

// === SEITE 2: Die 5 goldenen Regeln ===
function Seite2() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Die 5 goldenen Regeln
        </h2>
        <p className="text-sm text-muted">
          Mit diesen 5 Regeln kannst du die meisten Optionen sofort eliminieren — ohne ein Diagramm zeichnen zu müssen.
        </p>
      </div>

      {/* Regel 1 */}
      <div className="bg-red-50 dark:bg-red-900/15 border-l-4 border-red-500 p-4 rounded-r-lg space-y-3">
        <div className="flex items-center gap-2">
          <span className="bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">1</span>
          <h3 className="font-semibold text-red-800 dark:text-red-300">Zwei &times; &quot;einige&quot; → KEINE Schlussfolgerung</h3>
        </div>
        <p className="text-sm text-red-700 dark:text-red-400">
          Wenn beide Aussagen &quot;einige&quot; enthalten, kann man nichts Zwingendes schließen. → Antwort E
        </p>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
          <p className="text-xs text-muted mb-1">Beispiel:</p>
          <p className="text-sm italic">&quot;Einige Ärzte sind Sportler&quot;</p>
          <p className="text-sm italic">&quot;Einige Sportler sind Vegetarier&quot;</p>
          <p className="text-sm font-medium text-red-600 dark:text-red-400 mt-2">→ Keine zwingende Schlussfolgerung</p>
          <div className="flex justify-center mt-2">
            <EulerThreeCircles labels={["Ärzte", "Sportler", "Vegetarier"]} layout="chain" width={240} height={130} />
          </div>
        </div>
      </div>

      {/* Regel 2 */}
      <div className="bg-red-50 dark:bg-red-900/15 border-l-4 border-red-500 p-4 rounded-r-lg space-y-3">
        <div className="flex items-center gap-2">
          <span className="bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">2</span>
          <h3 className="font-semibold text-red-800 dark:text-red-300">Zwei &times; &quot;keine&quot; → KEINE Schlussfolgerung</h3>
        </div>
        <p className="text-sm text-red-700 dark:text-red-400">
          Wenn beide Aussagen &quot;keine&quot; enthalten, kann man nichts Zwingendes schließen. → Antwort E
        </p>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
          <p className="text-xs text-muted mb-1">Beispiel:</p>
          <p className="text-sm italic">&quot;Alle Katzen sind keine Vögel&quot;</p>
          <p className="text-sm italic">&quot;Alle Fische sind keine Vögel&quot;</p>
          <p className="text-sm font-medium text-red-600 dark:text-red-400 mt-2">→ Keine zwingende Schlussfolgerung</p>
          <div className="flex justify-center mt-2">
            <EulerThreeCircles labels={["Katzen", "Vögel", "Fische"]} layout="all-separated" width={240} height={130} />
          </div>
        </div>
      </div>

      {/* Regel 3 */}
      <div className="bg-blue-50 dark:bg-blue-900/15 border-l-4 border-blue-500 p-4 rounded-r-lg space-y-3">
        <div className="flex items-center gap-2">
          <span className="bg-blue-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">3</span>
          <h3 className="font-semibold text-blue-800 dark:text-blue-300">Kein &quot;keine&quot; in den Aussagen → Schluss OHNE &quot;keine&quot;</h3>
        </div>
        <p className="text-sm text-blue-700 dark:text-blue-400">
          Wenn keine der Aussagen das Wort &quot;keine&quot; enthält, dann kann auch die Schlussfolgerung kein &quot;keine&quot; enthalten.
        </p>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
          <p className="text-xs text-muted mb-1">Beispiel:</p>
          <p className="text-sm italic">&quot;Alle Hunde sind Säugetiere&quot;</p>
          <p className="text-sm italic">&quot;Alle Säugetiere sind Wirbeltiere&quot;</p>
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-2">→ &quot;Alle Hunde sind Wirbeltiere&quot; (ohne &quot;keine&quot;)</p>
          <div className="flex justify-center mt-2">
            <EulerThreeCircles labels={["Hunde", "Säugetiere", "Wirbeltiere"]} layout="a-in-b-in-c" width={240} height={130} />
          </div>
        </div>
      </div>

      {/* Regel 4 */}
      <div className="bg-amber-50 dark:bg-amber-900/15 border-l-4 border-amber-500 p-4 rounded-r-lg space-y-3">
        <div className="flex items-center gap-2">
          <span className="bg-amber-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">4</span>
          <h3 className="font-semibold text-amber-800 dark:text-amber-300">Eine Aussage mit &quot;keine&quot; → Schluss MUSS &quot;keine&quot; enthalten</h3>
        </div>
        <p className="text-sm text-amber-700 dark:text-amber-400">
          Kommt &quot;keine&quot; in genau einer Aussage vor, muss die Schlussfolgerung ebenfalls &quot;keine&quot; enthalten.
        </p>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
          <p className="text-xs text-muted mb-1">Beispiel:</p>
          <p className="text-sm italic">&quot;Alle Rosen sind Pflanzen&quot;</p>
          <p className="text-sm italic">&quot;Alle Pflanzen sind keine Tiere&quot;</p>
          <p className="text-sm font-medium text-amber-600 dark:text-amber-400 mt-2">→ &quot;Alle Rosen sind keine Tiere&quot; (mit &quot;keine&quot;)</p>
          <div className="flex justify-center mt-2">
            <EulerThreeCircles labels={["Rosen", "Pflanzen", "Tiere"]} layout="a-in-b-separated-c" width={240} height={130} />
          </div>
        </div>
      </div>

      {/* Regel 5 */}
      <div className="bg-green-50 dark:bg-green-900/15 border-l-4 border-green-500 p-4 rounded-r-lg space-y-3">
        <div className="flex items-center gap-2">
          <span className="bg-green-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">5</span>
          <h3 className="font-semibold text-green-800 dark:text-green-300">Eine Aussage mit &quot;einige&quot; → Schluss MUSS &quot;einige&quot; enthalten</h3>
        </div>
        <p className="text-sm text-green-700 dark:text-green-400">
          Enthält genau eine Aussage &quot;einige&quot;, muss die Schlussfolgerung ebenfalls &quot;einige&quot; enthalten.
        </p>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
          <p className="text-xs text-muted mb-1">Beispiel:</p>
          <p className="text-sm italic">&quot;Alle Lehrer sind Akademiker&quot;</p>
          <p className="text-sm italic">&quot;Einige Lehrer sind Musiker&quot;</p>
          <p className="text-sm font-medium text-green-600 dark:text-green-400 mt-2">→ &quot;Einige Akademiker sind Musiker&quot; (mit &quot;einige&quot;)</p>
          <div className="flex justify-center mt-2">
            <EulerThreeCircles labels={["Lehrer", "Akademiker", "Musiker"]} layout="a-in-b-overlap-c" width={240} height={130} />
          </div>
        </div>
      </div>

      <Merksatz>
        Diese Regeln eliminieren sofort falsche Optionen! Oft bleiben nur noch 1-2 Kandidaten übrig,
        die du dann mit dem Euler-Diagramm prüfst.
      </Merksatz>
    </div>
  );
}

// === SEITE 3: Lösungsstrategie ===
function Seite3() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Lösungsstrategie Schritt für Schritt
        </h2>
        <p className="text-sm text-muted">
          So gehst du bei jeder Aufgabe vor — effizient und sicher.
        </p>
      </div>

      {/* Schritt 1 */}
      <Card>
        <CardContent className="p-5 space-y-3">
          <div className="flex items-center gap-3">
            <span className="bg-purple-500 text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center">1</span>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Goldene Regeln anwenden</h3>
          </div>
          <p className="text-sm text-muted pl-11">
            Prüfe zuerst, ob die Regeln 1-2 greifen (→ sofort E).
            Dann verwende Regeln 3-5, um unmögliche Optionen zu streichen.
          </p>
          <div className="pl-11 bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-sm">
            <p className="font-medium text-gray-700 dark:text-gray-300 mb-1">Beispiel:</p>
            <p className="italic text-muted">&quot;Alle Äpfel sind Obst&quot; + &quot;Alle Äpfel sind keine Gemüse&quot;</p>
            <p className="mt-1">Regel 4: Eine Aussage enthält &quot;keine&quot; → Schluss muss &quot;keine&quot; enthalten</p>
            <p>→ Streiche alle Optionen OHNE &quot;keine&quot;</p>
          </div>
        </CardContent>
      </Card>

      {/* Schritt 2 */}
      <Card>
        <CardContent className="p-5 space-y-3">
          <div className="flex items-center gap-3">
            <span className="bg-purple-500 text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center">2</span>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Erste Aussage als Euler-Diagramm</h3>
          </div>
          <p className="text-sm text-muted pl-11">
            Zeichne die erste Aussage als Kreise. &quot;Alle X sind Y&quot; = X-Kreis komplett im Y-Kreis.
          </p>
          <div className="flex justify-center">
            <EulerTwoCircles labels={["X", "Y"]} overlap="contained" />
          </div>
        </CardContent>
      </Card>

      {/* Schritt 3 */}
      <Card>
        <CardContent className="p-5 space-y-3">
          <div className="flex items-center gap-3">
            <span className="bg-purple-500 text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center">3</span>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Zweite Aussage einzeichnen</h3>
          </div>
          <p className="text-sm text-muted pl-11">
            Zeichne den dritten Kreis ein. Bei &quot;einige&quot; gibt es mehrere mögliche Positionen —
            bedenke alle Möglichkeiten! Nur was in ALLEN Fällen gilt, ist eine zwingende Schlussfolgerung.
          </p>
        </CardContent>
      </Card>

      {/* Schritt 4 */}
      <Card>
        <CardContent className="p-5 space-y-3">
          <div className="flex items-center gap-3">
            <span className="bg-purple-500 text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center">4</span>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Schlussfolgerung ablesen</h3>
          </div>
          <p className="text-sm text-muted pl-11">
            Lies aus dem Diagramm ab, welche Beziehung zwischen den äußeren Begriffen
            (den Begriffen, die nicht in beiden Aussagen vorkommen) in jedem Fall gilt.
          </p>
        </CardContent>
      </Card>

      {/* Sonderfälle */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          Sonderfälle
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50 dark:bg-red-900/15 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Widerspruch</h4>
            <p className="text-sm text-red-700 dark:text-red-400">
              Wenn sich die Aussagen widersprechen (z.B. &quot;Alle X sind Y&quot; und &quot;Alle X sind keine Y&quot;
              mit gleichen Begriffen), ist die Antwort immer <strong>E</strong>.
            </p>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/15 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">Abschwächung</h4>
            <p className="text-sm text-amber-700 dark:text-amber-400">
              Wenn sowohl &quot;Alle X sind Z&quot; als auch &quot;Einige X sind Z&quot; möglich wären,
              ist die <strong>schwächere</strong> Aussage (&quot;Einige&quot;) die richtige Antwort.
            </p>
          </div>
        </div>
      </div>

      {/* Expert-Tipps */}
      <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4 space-y-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-purple-500" />
          <h3 className="font-semibold text-purple-800 dark:text-purple-300">Expert-Tipps für die Prüfung</h3>
        </div>
        <ul className="space-y-2 text-sm text-purple-700 dark:text-purple-400">
          <li className="flex items-start gap-2">
            <span className="text-purple-500 mt-0.5">1.</span>
            <span>Regeln 1-2 zuerst prüfen — das spart bei ca. 30% der Aufgaben die Euler-Diagramme komplett.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-500 mt-0.5">2.</span>
            <span>Du hast 1 Minute pro Aufgabe. Übe, bis die Regeln automatisch sitzen — dann reicht die Zeit locker.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-500 mt-0.5">3.</span>
            <span>Finde den Mittelbegriff (der in beiden Aussagen vorkommt). Die Schlussfolgerung verbindet die beiden anderen Begriffe.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-500 mt-0.5">4.</span>
            <span>Im Zweifel: E wählen. Lieber eine richtige E-Antwort als eine falsche Schlussfolgerung raten.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

const pages = [Seite1, Seite2, Seite3];
const pageTitles = ["Die 4 Grundaussagen", "Die 5 goldenen Regeln", "Lösungsstrategie"];

export default function ImplikationenLernen() {
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
                  ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium"
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
          className="flex items-center gap-1 text-sm font-medium text-purple-600 dark:text-purple-400 disabled:opacity-30 disabled:cursor-not-allowed hover:text-purple-800 dark:hover:text-purple-300 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          Zurück
        </button>
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={currentPage === totalPages - 1}
          className="flex items-center gap-1 text-sm font-medium text-purple-600 dark:text-purple-400 disabled:opacity-30 disabled:cursor-not-allowed hover:text-purple-800 dark:hover:text-purple-300 transition-colors cursor-pointer"
        >
          Weiter
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
