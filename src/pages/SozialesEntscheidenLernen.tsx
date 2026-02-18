import { useState } from "react";
import { ChevronLeft, ChevronRight, Lightbulb, BookOpen, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const totalPages = 3;

function PageIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`h-1.5 rounded-full transition-all ${
            i === current ? "w-6 bg-teal-500" : "w-1.5 bg-gray-300 dark:bg-gray-600"
          }`}
        />
      ))}
    </div>
  );
}

function Merksatz({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-4 rounded-r-lg">
      <div className="flex items-start gap-2">
        <Lightbulb className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
        <p className="text-sm font-medium text-teal-800 dark:text-teal-300">{children}</p>
      </div>
    </div>
  );
}

// === SEITE 1: Aufgabenformat ===
function Seite1() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Aufgabenformat
        </h2>
        <p className="text-sm text-muted">
          Seit 2015 im MedAT. Du bekommst ein soziales Dilemma und bewertest
          8 Handlungsoptionen auf einer Skala von 1 bis 6.
        </p>
      </div>

      {/* Format */}
      <Card>
        <CardContent className="p-5 space-y-4">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">So sieht eine Aufgabe aus</h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-teal-400">
            <p className="text-sm text-muted mb-1">Szenario:</p>
            <p className="text-sm italic text-gray-700 dark:text-gray-300">
              &quot;Du bist als Famulant auf der Inneren Medizin. Du beobachtest, wie ein Oberarzt
              einen Patienten herablassend behandelt...&quot;
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              8 Handlungsoptionen → jeweils mit 1-6 bewerten:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-3">
              {/* Example slider */}
              <div className="space-y-1">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  &quot;Du sprichst den Oberarzt unter vier Augen an.&quot;
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted w-24">unangemessen</span>
                  <div className="flex-1 flex items-center gap-1">
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <div
                        key={n}
                        className={`flex-1 h-8 rounded-md flex items-center justify-center text-xs font-medium transition-colors ${
                          n === 5
                            ? "bg-teal-500 text-white"
                            : "bg-gray-200 dark:bg-gray-700 text-muted"
                        }`}
                      >
                        {n}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-muted w-24 text-right">angemessen</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Likert scale explanation */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          Die 6-Punkte-Skala
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {[
            { value: 1, label: "Sehr unangemessen", color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800" },
            { value: 2, label: "Unangemessen", color: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800" },
            { value: 3, label: "Eher unangemessen", color: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 border-amber-200 dark:border-amber-800" },
            { value: 4, label: "Eher angemessen", color: "bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300 border-lime-200 dark:border-lime-800" },
            { value: 5, label: "Angemessen", color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800" },
            { value: 6, label: "Sehr angemessen", color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800" },
          ].map((item) => (
            <div key={item.value} className={`${item.color} border rounded-lg p-3 text-center`}>
              <p className="text-lg font-bold">{item.value}</p>
              <p className="text-xs">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <Merksatz>
        Es gibt KEINE geraden Skala — du MUSST dich für &quot;eher unangemessen&quot; oder
        &quot;eher angemessen&quot; entscheiden. Kein &quot;Mittelwert&quot; möglich!
      </Merksatz>
    </div>
  );
}

// === SEITE 2: Bewertungsperspektive ===
function Seite2() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Die ärztliche Perspektive
        </h2>
        <p className="text-sm text-muted">
          IMMER aus der Sicht eines &quot;guten Arztes&quot; bewerten — nicht aus deiner persönlichen Perspektive.
        </p>
      </div>

      <Merksatz>
        Frage dich bei jeder Option: &quot;Würde ein empathischer, professioneller Arzt das tun?&quot;
      </Merksatz>

      {/* 4 Bewertungsdimensionen */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          4 Bewertungsdimensionen
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-lg">❤️</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Empathie</h4>
              </div>
              <p className="text-sm text-muted">
                Zeigt die Handlung Verständnis und Mitgefühl für die betroffene(n) Person(en)?
              </p>
              <div className="mt-2 text-xs">
                <span className="text-green-600 dark:text-green-400">Hoch bewertet:</span>
                <span className="text-muted ml-1">Zuhören, Verstehen, Unterstützen</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-lg">⚕️</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Professionalität</h4>
              </div>
              <p className="text-sm text-muted">
                Entspricht die Handlung dem professionellen Standard?
              </p>
              <div className="mt-2 text-xs">
                <span className="text-green-600 dark:text-green-400">Hoch bewertet:</span>
                <span className="text-muted ml-1">Sachlich, konstruktiv, respektvoll</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🏥</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Patientenwohl</h4>
              </div>
              <p className="text-sm text-muted">
                Steht das Wohl des Patienten im Zentrum der Entscheidung?
              </p>
              <div className="mt-2 text-xs">
                <span className="text-green-600 dark:text-green-400">Hoch bewertet:</span>
                <span className="text-muted ml-1">Patientenorientiert, fürsorglich</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-lg">⚖️</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Ethik</h4>
              </div>
              <p className="text-sm text-muted">
                Ist die Handlung ethisch vertretbar?
              </p>
              <div className="mt-2 text-xs">
                <span className="text-green-600 dark:text-green-400">Hoch bewertet:</span>
                <span className="text-muted ml-1">Gerecht, transparent, verantwortungsvoll</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Extreme Bewertungen */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-50 dark:bg-green-900/15 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Wann 5 oder 6 geben?</h4>
          <ul className="space-y-1 text-sm text-green-700 dark:text-green-400">
            <li>• Patientenwohl steht im Zentrum</li>
            <li>• Empathisch UND professionell</li>
            <li>• Konstruktive Problemlösung</li>
            <li>• Respektvolle Kommunikation</li>
          </ul>
        </div>
        <div className="bg-red-50 dark:bg-red-900/15 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Wann 1 oder 2 geben?</h4>
          <ul className="space-y-1 text-sm text-red-700 dark:text-red-400">
            <li>• Patientenwohl wird gefährdet</li>
            <li>• Unprofessionelles Verhalten</li>
            <li>• Verantwortung wird abgeschoben</li>
            <li>• Ethisch fragwürdig</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// === SEITE 3: Lösungsstrategie & Tipps ===
function Seite3() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Lösungsstrategie &amp; Auswertung
        </h2>
        <p className="text-sm text-muted">
          So gehst du systematisch vor und maximierst deine Punkte.
        </p>
      </div>

      {/* Lösungsstrategie */}
      <div className="space-y-3">
        <Card>
          <CardContent className="p-5 space-y-2">
            <div className="flex items-center gap-3">
              <span className="bg-teal-500 text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center">1</span>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Szenario lesen &amp; Perspektive einnehmen</h3>
            </div>
            <p className="text-sm text-muted pl-11">
              Versetze dich in einen jungen Arzt/eine junge Ärztin. Was ist das Kernproblem?
              Wer ist betroffen?
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 space-y-2">
            <div className="flex items-center gap-3">
              <span className="bg-teal-500 text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center">2</span>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Alle 8 Optionen lesen</h3>
            </div>
            <p className="text-sm text-muted pl-11">
              Lies zuerst ALLE Optionen, bevor du bewertest.
              Das gibt dir einen Überblick über das Spektrum der Möglichkeiten.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 space-y-2">
            <div className="flex items-center gap-3">
              <span className="bg-teal-500 text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center">3</span>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">4 Dimensionen durchgehen</h3>
            </div>
            <p className="text-sm text-muted pl-11">
              Pro Option: Empathie ✓/✗ | Professionalität ✓/✗ | Patientenwohl ✓/✗ | Ethik ✓/✗
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 space-y-2">
            <div className="flex items-center gap-3">
              <span className="bg-teal-500 text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center">4</span>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Extreme nur bei klaren Fällen</h3>
            </div>
            <p className="text-sm text-muted pl-11">
              1 und 6 nur vergeben, wenn die Option EINDEUTIG unangemessen oder angemessen ist.
              Im Zweifel: 2-3 oder 4-5 wählen.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Auswertung */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-3">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100">Auswertung</h3>
        <p className="text-sm text-muted">
          Dein Score basiert auf der Abweichung deiner Bewertung vom Ideal:
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <span className="bg-green-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">0</span>
            <span className="text-gray-700 dark:text-gray-300">Perfekt! Deine Bewertung = Idealbewertung</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="bg-amber-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">1</span>
            <span className="text-gray-700 dark:text-gray-300">Knapp daneben — 1 Punkt Abweichung</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">2+</span>
            <span className="text-gray-700 dark:text-gray-300">Deutliche Abweichung — Punkte gehen verloren</span>
          </div>
        </div>
      </div>

      {/* Typische Fallen */}
      <div className="space-y-3">
        <div className="bg-red-50 dark:bg-red-900/15 border-l-4 border-red-500 p-4 rounded-r-lg space-y-2">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <h3 className="font-semibold text-red-800 dark:text-red-300">Falle: Aus eigener Perspektive bewerten</h3>
          </div>
          <p className="text-sm text-red-700 dark:text-red-400">
            Nicht &quot;Was würde ICH tun?&quot; — sondern &quot;Was SOLLTE ein guter Arzt tun?&quot;
          </p>
        </div>

        <div className="bg-red-50 dark:bg-red-900/15 border-l-4 border-red-500 p-4 rounded-r-lg space-y-2">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <h3 className="font-semibold text-red-800 dark:text-red-300">Falle: Alle Optionen mit 3-4 bewerten</h3>
          </div>
          <p className="text-sm text-red-700 dark:text-red-400">
            Trau dich, klare Bewertungen zu geben! Wer alles mit 3-4 bewertet,
            bekommt bei den extremen Idealwerten (1, 2, 5, 6) viele Abweichungspunkte.
          </p>
        </div>
      </div>

      {/* Expert-Tipps */}
      <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4 space-y-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-teal-500" />
          <h3 className="font-semibold text-teal-800 dark:text-teal-300">Expert-Tipps</h3>
        </div>
        <ul className="space-y-2 text-sm text-teal-700 dark:text-teal-400">
          <li className="flex items-start gap-2">
            <span className="text-teal-500 mt-0.5">1.</span>
            <span>Optionen, die &quot;mit dem Patienten reden&quot;, &quot;zuhören&quot; oder &quot;Verständnis zeigen&quot; beinhalten, werden fast immer hoch bewertet (5-6).</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-500 mt-0.5">2.</span>
            <span>Optionen, die &quot;ignorieren&quot;, &quot;Verantwortung abgeben&quot; oder &quot;geheim halten&quot; beinhalten, werden fast immer niedrig bewertet (1-2).</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-500 mt-0.5">3.</span>
            <span>Öffentliche Konfrontation ist fast immer schlecht bewertet — konstruktives Feedback unter vier Augen ist besser.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

const pages = [Seite1, Seite2, Seite3];
const pageTitles = ["Aufgabenformat", "Ärztliche Perspektive", "Lösungsstrategie"];

export default function SozialesEntscheidenLernen() {
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
                  ? "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 font-medium"
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
          className="flex items-center gap-1 text-sm font-medium text-teal-600 dark:text-teal-400 disabled:opacity-30 disabled:cursor-not-allowed hover:text-teal-800 dark:hover:text-teal-300 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          Zurück
        </button>
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={currentPage === totalPages - 1}
          className="flex items-center gap-1 text-sm font-medium text-teal-600 dark:text-teal-400 disabled:opacity-30 disabled:cursor-not-allowed hover:text-teal-800 dark:hover:text-teal-300 transition-colors cursor-pointer"
        >
          Weiter
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
