import { useState } from "react";
import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight, Lightbulb, BookOpen, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { EMOTIONEN_REGULIEREN_AUSFUELLHILFE } from "@/data/emotionenRegulierenOffiziell";

const totalPages = 3;

function PageIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`h-1.5 rounded-full transition-all ${
            i === current ? "w-6 bg-pink-500" : "w-1.5 bg-gray-300 dark:bg-gray-600"
          }`}
        />
      ))}
    </div>
  );
}

function Merksatz({ children }: { children: ReactNode }) {
  return (
    <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 rounded-r-lg">
      <div className="flex items-start gap-2">
        <Lightbulb className="w-4 h-4 text-pink-500 mt-0.5 shrink-0" />
        <p className="text-sm font-medium text-pink-800 dark:text-pink-300">{children}</p>
      </div>
    </div>
  );
}

const strategies = [
  {
    name: "Situationsauswahl",
    number: 1,
    color: "bg-blue-50 dark:bg-blue-900/15 border-blue-500",
    badgeColor: "bg-blue-500",
    textColor: "text-blue-800 dark:text-blue-300",
    descColor: "text-blue-700 dark:text-blue-400",
    when: "VOR der Situation",
    description: "Die Situation bewusst vermeiden oder aufsuchen.",
    example:
      "Markus weiß, dass ihn die Party seiner Ex-Freundin traurig machen würde → er geht nicht hin.",
    procon:
      "Effektiv bei vermeidbaren Situationen, aber oft nicht realistisch (Prüfungen kann man nicht dauerhaft vermeiden).",
  },
  {
    name: "Situationsmodifikation",
    number: 2,
    color: "bg-teal-50 dark:bg-teal-900/15 border-teal-500",
    badgeColor: "bg-teal-500",
    textColor: "text-teal-800 dark:text-teal-300",
    descColor: "text-teal-700 dark:text-teal-400",
    when: "IN der Situation",
    description: "Die Situation aktiv so verändern, dass die unerwünschte Emotion reduziert wird.",
    example:
      "Lisa hat Angst vor dem Referat → sie bittet die Dozentin, zu zweit vortragen zu dürfen.",
    procon: "Gut wenn die Situation veränderbar ist. Nicht immer möglich.",
  },
  {
    name: "Aufmerksamkeitslenkung",
    number: 3,
    color: "bg-indigo-50 dark:bg-indigo-900/15 border-indigo-500",
    badgeColor: "bg-indigo-500",
    textColor: "text-indigo-800 dark:text-indigo-300",
    descColor: "text-indigo-700 dark:text-indigo-400",
    when: "IN der Situation",
    description:
      "Die Aufmerksamkeit bewusst von der emotionsauslösenden Situation weg lenken (Ablenkung) oder auf positive Aspekte konzentrieren.",
    example: "Tom ist nervös im Wartezimmer → er liest ein Buch, um sich abzulenken.",
    procon: "Gut für kurzfristige Emotionsregulation. Löst das Problem nicht langfristig.",
  },
  {
    name: "Kognitive Veränderung",
    number: 4,
    color: "bg-green-50 dark:bg-green-900/15 border-green-500",
    badgeColor: "bg-green-500",
    textColor: "text-green-800 dark:text-green-300",
    descColor: "text-green-700 dark:text-green-400",
    when: "IN der Situation",
    description: "Die Bedeutung der Situation umdeuten (Reframing/Umbewertung).",
    example:
      'Sarah bekommt kritisches Feedback → sie denkt: "Das ist eine Chance, besser zu werden."',
    procon: "Die EFFEKTIVSTE Langzeitstrategie! Verändert die emotionale Reaktion an der Wurzel.",
  },
  {
    name: "Reaktionsmodulation",
    number: 5,
    color: "bg-orange-50 dark:bg-orange-900/15 border-orange-500",
    badgeColor: "bg-orange-500",
    textColor: "text-orange-800 dark:text-orange-300",
    descColor: "text-orange-700 dark:text-orange-400",
    when: "NACH der Emotion",
    description: "Den körperlichen Ausdruck der Emotion unterdrücken oder bewusst steuern.",
    example:
      "Der Arzt ist traurig über den Tod eines Patienten → er hält seine Tränen zurück, um die Angehörigen zu informieren.",
    procon:
      "Kurzfristig notwendig in professionellen Situationen. Langfristig belastend und oft kontraproduktiv.",
  },
];

// === SEITE 1: Das Gross-Modell ===
function Seite1() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Das Prozessmodell nach Gross
        </h2>
        <p className="text-sm text-muted">
          Seit 2023 im MedAT: Du musst die 5 Regulationsstrategien kennen und anwenden können. Sie
          beschreiben, WO im Emotionsprozess man regulierend eingreifen kann.
        </p>
      </div>

      {/* Timeline visualization */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
          Emotionsprozess → 5 Eingriffspunkte
        </h3>
        <div className="flex items-center gap-1 overflow-x-auto pb-2">
          {strategies.map((s, i) => (
            <div key={i} className="flex items-center shrink-0">
              <div className="text-center">
                <div
                  className={`${s.badgeColor} text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center mx-auto`}
                >
                  {s.number}
                </div>
                <p className="text-[10px] text-muted mt-1 max-w-[80px] leading-tight">{s.name}</p>
              </div>
              {i < strategies.length - 1 && (
                <div className="w-6 h-0.5 bg-gray-300 dark:bg-gray-600 mx-1" />
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-3 text-[10px] text-muted">
          <span>← Früh im Prozess</span>
          <span>Spät im Prozess →</span>
        </div>
      </div>

      {/* All 5 strategies */}
      <div className="space-y-3">
        {strategies.map((s) => (
          <div key={s.number} className={`${s.color} border-l-4 p-4 rounded-r-lg space-y-2`}>
            <div className="flex items-center gap-2">
              <span
                className={`${s.badgeColor} text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center`}
              >
                {s.number}
              </span>
              <h3 className={`font-semibold ${s.textColor}`}>{s.name}</h3>
              <span className="text-[10px] bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded-full text-muted">
                {s.when}
              </span>
            </div>
            <p className={`text-sm ${s.descColor}`}>{s.description}</p>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
              <p className="text-xs text-muted mb-0.5">Beispiel:</p>
              <p className="text-sm italic text-gray-700 dark:text-gray-300">{s.example}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// === SEITE 2: Kognitive Veränderung im Detail ===
function Seite2() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Kognitive Veränderung — Die Königsstrategie
        </h2>
        <p className="text-sm text-muted">
          Diese Strategie ist im MedAT FAST IMMER die richtige Antwort. Lerne sie im Detail!
        </p>
      </div>

      <Merksatz>
        Kognitive Veränderung (Reframing/Umbewertung) ist die effektivste Langzeitstrategie, weil
        sie die emotionale Reaktion an der Wurzel verändert — nicht nur die Symptome bekämpft.
      </Merksatz>

      {/* Reframing-Techniken */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          4 Reframing-Techniken
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                1. Perspektivenwechsel
              </h4>
              <p className="text-sm text-muted mb-2">
                Die Situation aus der Sicht einer anderen Person betrachten.
              </p>
              <div className="bg-green-50 dark:bg-green-900/15 rounded-lg p-3">
                <p className="text-xs text-muted">Beispiel:</p>
                <p className="text-sm italic text-gray-700 dark:text-gray-300">
                  &quot;Der Prof hat es nicht persönlich gemeint — er steht selbst unter
                  Druck.&quot;
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                2. Lernchance sehen
              </h4>
              <p className="text-sm text-muted mb-2">
                Negative Erfahrungen als Wachstumsmöglichkeit umdeuten.
              </p>
              <div className="bg-green-50 dark:bg-green-900/15 rounded-lg p-3">
                <p className="text-xs text-muted">Beispiel:</p>
                <p className="text-sm italic text-gray-700 dark:text-gray-300">
                  &quot;Durch diesen Fehler weiß ich jetzt, worauf ich achten muss.&quot;
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                3. Relativierung
              </h4>
              <p className="text-sm text-muted mb-2">
                Die Situation in einen größeren Kontext einordnen.
              </p>
              <div className="bg-green-50 dark:bg-green-900/15 rounded-lg p-3">
                <p className="text-xs text-muted">Beispiel:</p>
                <p className="text-sm italic text-gray-700 dark:text-gray-300">
                  &quot;In fünf Jahren werde ich darüber lachen. Es ist nicht das Ende der
                  Welt.&quot;
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                4. Uminterpretation
              </h4>
              <p className="text-sm text-muted mb-2">Körperliche Symptome positiv umdeuten.</p>
              <div className="bg-green-50 dark:bg-green-900/15 rounded-lg p-3">
                <p className="text-xs text-muted">Beispiel:</p>
                <p className="text-sm italic text-gray-700 dark:text-gray-300">
                  &quot;Mein Herzklopfen ist Aufregung, nicht Angst — mein Körper ist bereit!&quot;
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Wann NICHT Kognitive Veränderung? */}
      <div className="bg-orange-50 dark:bg-orange-900/15 border border-orange-200 dark:border-orange-800 rounded-lg p-4 space-y-3">
        <h3 className="font-semibold text-orange-800 dark:text-orange-300">
          Wann ist Kognitive Veränderung NICHT die beste Wahl?
        </h3>
        <ul className="space-y-2 text-sm text-orange-700 dark:text-orange-400">
          <li className="flex items-start gap-2">
            <span className="text-orange-500 mt-0.5 font-bold">•</span>
            <span>
              Wenn die Situation <strong>konkret veränderbar</strong> ist → Situationsmodifikation
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 mt-0.5 font-bold">•</span>
            <span>
              Wenn die Situation <strong>vermeidbar und unnötig</strong> ist → Situationsauswahl
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 mt-0.5 font-bold">•</span>
            <span>
              Wenn <strong>sofortige professionelle Kontrolle</strong> nötig ist (z.B. Arzt vor
              Patient) → Reaktionsmodulation
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

// === SEITE 3: Aufgabenformat & Lösungsstrategie ===
function Seite3() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Aufgabenformat &amp; Lösungsstrategie
        </h2>
        <p className="text-sm text-muted">
          So sieht eine Aufgabe im MedAT aus — und so löst du sie.
        </p>
      </div>

      {/* Ausfüllhilfe — offizielle Instruktion */}
      <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-900/10">
        <CardContent className="p-5 space-y-3">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <h3 className="font-semibold text-amber-900 dark:text-amber-200">
              Ausfüllhilfe (offizielle Instruktion)
            </h3>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
            {EMOTIONEN_REGULIEREN_AUSFUELLHILFE}
          </p>
          <p className="text-xs text-muted">
            Diese Instruktion erscheint im Aufnahmeverfahren vor den Aufgaben. In der Simulation
            kannst du sie jederzeit über &quot;Ausfüllhilfe anzeigen&quot; einblenden.
          </p>
        </CardContent>
      </Card>

      {/* Format */}
      <Card>
        <CardContent className="p-5 space-y-3">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">Aufgabenformat</h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-pink-400">
            <p className="text-sm text-muted mb-1">Situation + unerwünschte Emotion:</p>
            <p className="text-sm italic text-gray-700 dark:text-gray-300">
              &quot;Vor der Anatomie-Prüfung spürt Markus starke Prüfungsangst...&quot;
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-indigo-400">
            <p className="text-sm text-muted mb-1">Frage:</p>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              &quot;Welche Strategie wäre am effektivsten?&quot;
            </p>
          </div>
          <p className="text-sm text-muted">→ 5 Optionen (eine pro Strategie)</p>
        </CardContent>
      </Card>

      {/* Lösungsstrategie */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          3-Schritt-Methode
        </h3>

        <Card>
          <CardContent className="p-5 space-y-2">
            <div className="flex items-center gap-3">
              <span className="bg-pink-500 text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center">
                1
              </span>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                Situation analysieren
              </h3>
            </div>
            <p className="text-sm text-muted pl-11">
              Ist die Situation veränderbar? Vermeidbar? Oder muss die Person damit umgehen?
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 space-y-2">
            <div className="flex items-center gap-3">
              <span className="bg-pink-500 text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center">
                2
              </span>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Zeitpunkt beachten</h3>
            </div>
            <p className="text-sm text-muted pl-11">
              Ist die Person NOCH NICHT in der Situation? → Situationsauswahl prüfen. Ist sie
              MITTENDRIN? → Kognitive Veränderung als Standard prüfen.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 space-y-2">
            <div className="flex items-center gap-3">
              <span className="bg-pink-500 text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center">
                3
              </span>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                Langfristig vs. kurzfristig
              </h3>
            </div>
            <p className="text-sm text-muted pl-11">
              Die Frage fragt nach der &quot;effektivsten&quot; Strategie — damit ist LANGFRISTIG
              gemeint. Kognitive Veränderung ist fast immer langfristig am effektivsten.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Expert-Tipps */}
      <div className="bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800 rounded-lg p-4 space-y-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-pink-500" />
          <h3 className="font-semibold text-pink-800 dark:text-pink-300">Expert-Tipps</h3>
        </div>
        <ul className="space-y-2 text-sm text-pink-700 dark:text-pink-400">
          <li className="flex items-start gap-2">
            <span className="text-pink-500 mt-0.5">1.</span>
            <span>
              Im Zweifel: Kognitive Veränderung wählen. Sie ist in ~65% der Fälle richtig.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-pink-500 mt-0.5">2.</span>
            <span>
              Reaktionsmodulation ist FAST NIE die beste Wahl — sie unterdrückt nur die Symptome.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-pink-500 mt-0.5">3.</span>
            <span>
              Situationsauswahl ist nur richtig, wenn die Situation tatsächlich vermeidbar UND
              unnötig ist.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-pink-500 mt-0.5">4.</span>
            <span>
              Lies die konkreten Beschreibungen der Optionen genau — manchmal klingt eine Strategie
              gut, ist aber schlecht formuliert.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

const pages = [Seite1, Seite2, Seite3];
const pageTitles = ["Das Gross-Modell", "Kognitive Veränderung", "Lösungsstrategie"];

export default function EmotionenRegulierenLernen() {
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
                  ? "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 font-medium"
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
          className="flex items-center gap-1 text-sm font-medium text-pink-600 dark:text-pink-400 disabled:opacity-30 disabled:cursor-not-allowed hover:text-pink-800 dark:hover:text-pink-300 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          Zurück
        </button>
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={currentPage === totalPages - 1}
          className="flex items-center gap-1 text-sm font-medium text-pink-600 dark:text-pink-400 disabled:opacity-30 disabled:cursor-not-allowed hover:text-pink-800 dark:hover:text-pink-300 transition-colors cursor-pointer"
        >
          Weiter
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
