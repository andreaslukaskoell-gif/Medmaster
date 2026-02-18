import { useState } from "react";
import type { ReactNode } from "react";
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
            i === current ? "w-6 bg-amber-500" : "w-1.5 bg-gray-300 dark:bg-gray-600"
          }`}
        />
      ))}
    </div>
  );
}

function Merksatz({ children }: { children: ReactNode }) {
  return (
    <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
      <div className="flex items-start gap-2">
        <Lightbulb className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
        <p className="text-sm font-medium text-amber-800 dark:text-amber-300">{children}</p>
      </div>
    </div>
  );
}

const emotionsList = [
  { name: "Freude", category: "positiv", color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" },
  { name: "Stolz", category: "positiv", color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" },
  { name: "Dankbarkeit", category: "positiv", color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" },
  { name: "Erleichterung", category: "positiv", color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" },
  { name: "Hoffnung", category: "positiv", color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" },
  { name: "Bewunderung", category: "positiv", color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" },
  { name: "Liebe", category: "positiv", color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" },
  { name: "Trauer", category: "negativ", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" },
  { name: "Wut/Ärger", category: "negativ", color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" },
  { name: "Angst", category: "negativ", color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" },
  { name: "Ekel", category: "negativ", color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300" },
  { name: "Scham", category: "negativ", color: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300" },
  { name: "Schuld", category: "negativ", color: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300" },
  { name: "Neid", category: "negativ", color: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300" },
  { name: "Eifersucht", category: "negativ", color: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300" },
  { name: "Enttäuschung", category: "negativ", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" },
  { name: "Verachtung", category: "negativ", color: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300" },
  { name: "Überraschung", category: "neutral", color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300" },
  { name: "Mitleid/Mitgefühl", category: "prosozial", color: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300" },
  { name: "Sehnsucht", category: "neutral", color: "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300" },
];

// === SEITE 1: Aufgabenformat & Emotionsliste ===
function Seite1() {
  const [filter, setFilter] = useState<string | null>(null);
  const filtered = filter ? emotionsList.filter((e) => e.category === filter) : emotionsList;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Aufgabenformat &amp; Emotionsliste
        </h2>
        <p className="text-sm text-muted">
          Im Untertest &quot;Emotionen erkennen&quot; erhältst du eine kurze Situationsbeschreibung.
          Deine Aufgabe: Die Emotionen der beteiligten Personen korrekt identifizieren.
        </p>
      </div>

      {/* Format explanation */}
      <Card>
        <CardContent className="p-5 space-y-3">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">So sieht eine Aufgabe aus</h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-amber-400">
            <p className="text-sm text-muted mb-1">Situationsbeschreibung:</p>
            <p className="text-sm italic text-gray-700 dark:text-gray-300">
              &quot;Anna hat monatelang für den MedAT gelernt. Am Testtag erfährt sie, dass der Test
              auf einen anderen Tag verschoben wurde...&quot;
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-indigo-400">
            <p className="text-sm text-muted mb-1">Frage:</p>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              &quot;Was empfindet Anna am ehesten?&quot;
            </p>
            <div className="mt-2 space-y-1">
              {["A) Erleichterung", "B) Frustration ✓", "C) Freude", "D) Angst"].map((opt) => (
                <p key={opt} className={`text-sm ${opt.includes("✓") ? "text-green-600 dark:text-green-400 font-medium" : "text-muted"}`}>
                  {opt}
                </p>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emotion list */}
      <div>
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          Die 20 Emotionen — Lerne sie auswendig!
        </h3>
        <div className="flex flex-wrap gap-1 mb-3">
          {[
            { key: null, label: "Alle" },
            { key: "positiv", label: "Positiv" },
            { key: "negativ", label: "Negativ" },
            { key: "neutral", label: "Neutral" },
            { key: "prosozial", label: "Prosozial" },
          ].map((f) => (
            <button
              key={f.label}
              onClick={() => setFilter(f.key)}
              className={`text-xs px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                filter === f.key
                  ? "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 font-medium"
                  : "text-muted hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {filtered.map((emotion) => (
            <span
              key={emotion.name}
              className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${emotion.color}`}
            >
              {emotion.name}
            </span>
          ))}
        </div>
      </div>

      <Merksatz>
        Lerne die Emotionsliste auswendig! Im Test musst du Emotionen benennen können —
        wer die Begriffe nicht kennt, kann sie nicht zuordnen.
      </Merksatz>
    </div>
  );
}

// === SEITE 2: Lösungsstrategie ===
function Seite2() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Lösungsstrategie Schritt für Schritt
        </h2>
        <p className="text-sm text-muted">
          Mit dieser Methode analysierst du jede Situation systematisch.
        </p>
      </div>

      {/* Step 1 */}
      <Card>
        <CardContent className="p-5 space-y-3">
          <div className="flex items-center gap-3">
            <span className="bg-amber-500 text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center">1</span>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Situation lesen &amp; verstehen</h3>
          </div>
          <p className="text-sm text-muted pl-11">
            Lies die Situationsbeschreibung aufmerksam. Achte auf Schlüsselwörter
            wie &quot;unerwartet&quot;, &quot;jahrelang&quot;, &quot;zum ersten Mal&quot;.
          </p>
        </CardContent>
      </Card>

      {/* Step 2 */}
      <Card>
        <CardContent className="p-5 space-y-3">
          <div className="flex items-center gap-3">
            <span className="bg-amber-500 text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center">2</span>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Beteiligte Personen identifizieren</h3>
          </div>
          <p className="text-sm text-muted pl-11">
            Wer ist beteiligt? Welche Rollen haben sie? Ein Patient fühlt anders als ein Arzt,
            ein Freund anders als ein Vorgesetzter.
          </p>
        </CardContent>
      </Card>

      {/* Step 3 */}
      <Card>
        <CardContent className="p-5 space-y-3">
          <div className="flex items-center gap-3">
            <span className="bg-amber-500 text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center">3</span>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Kontext + Erwartung → Emotion ableiten</h3>
          </div>
          <p className="text-sm text-muted pl-11">
            Für jede Person: Was hat sie erwartet? Was ist tatsächlich passiert?
            Die Diskrepanz zwischen Erwartung und Realität bestimmt die Emotion.
          </p>
          <div className="pl-11 bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-sm space-y-1">
            <p className="font-medium text-gray-700 dark:text-gray-300">Formel:</p>
            <p className="text-muted">Erwartung erfüllt → Freude, Erleichterung, Stolz</p>
            <p className="text-muted">Erwartung enttäuscht → Enttäuschung, Trauer, Frustration</p>
            <p className="text-muted">Bedrohung wahrgenommen → Angst, Nervosität</p>
            <p className="text-muted">Ungerechtigkeit wahrgenommen → Wut/Ärger, Empörung</p>
            <p className="text-muted">Eigenes Versagen → Scham, Schuld</p>
          </div>
        </CardContent>
      </Card>

      {/* Step 4 */}
      <Card>
        <CardContent className="p-5 space-y-3">
          <div className="flex items-center gap-3">
            <span className="bg-amber-500 text-white text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center">4</span>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">&quot;Einige&quot; vs. &quot;Alle&quot; beachten</h3>
          </div>
          <p className="text-sm text-muted pl-11">
            Achte auf die Frageformulierung: &quot;Am ehesten&quot; fragt nach der dominanten Emotion.
            &quot;Welche Emotionen könnte X empfinden?&quot; kann mehrere richtige Antworten haben.
          </p>
        </CardContent>
      </Card>

      <Merksatz>
        Versetze dich nicht in die Person hinein — analysiere die Situation objektiv!
        Was würde die MEHRHEIT der Menschen in dieser Situation empfinden?
      </Merksatz>
    </div>
  );
}

// === SEITE 3: Typische Fallen ===
function Seite3() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Typische Fallen &amp; Expert-Tipps
        </h2>
        <p className="text-sm text-muted">
          Diese Fehler kosten die meisten Punkte — und so vermeidest du sie.
        </p>
      </div>

      {/* Fallen */}
      <div className="space-y-4">
        <div className="bg-red-50 dark:bg-red-900/15 border-l-4 border-red-500 p-4 rounded-r-lg space-y-2">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <h3 className="font-semibold text-red-800 dark:text-red-300">Falle 1: Eigene Gefühle projizieren</h3>
          </div>
          <p className="text-sm text-red-700 dark:text-red-400">
            Du projizierst deine eigenen Reaktionen auf die beschriebene Person.
            Nicht jeder reagiert gleich! Gehe von der &quot;durchschnittlichen&quot; Reaktion aus.
          </p>
        </div>

        <div className="bg-red-50 dark:bg-red-900/15 border-l-4 border-red-500 p-4 rounded-r-lg space-y-2">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <h3 className="font-semibold text-red-800 dark:text-red-300">Falle 2: Ähnliche Emotionen verwechseln</h3>
          </div>
          <p className="text-sm text-red-700 dark:text-red-400">
            Neid vs. Eifersucht, Scham vs. Schuld, Trauer vs. Enttäuschung — achte auf die feinen Unterschiede!
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-3 space-y-2">
            <div className="text-sm">
              <span className="font-medium text-gray-700 dark:text-gray-300">Neid:</span>
              <span className="text-muted ml-1">Jemand HAT etwas, das ich auch will</span>
            </div>
            <div className="text-sm">
              <span className="font-medium text-gray-700 dark:text-gray-300">Eifersucht:</span>
              <span className="text-muted ml-1">Jemand BEDROHT eine Beziehung, die mir wichtig ist</span>
            </div>
            <div className="text-sm">
              <span className="font-medium text-gray-700 dark:text-gray-300">Scham:</span>
              <span className="text-muted ml-1">ICH bin schlecht (Selbstbewertung)</span>
            </div>
            <div className="text-sm">
              <span className="font-medium text-gray-700 dark:text-gray-300">Schuld:</span>
              <span className="text-muted ml-1">Ich habe etwas FALSCHES GETAN (Handlungsbewertung)</span>
            </div>
            <div className="text-sm">
              <span className="font-medium text-gray-700 dark:text-gray-300">Trauer:</span>
              <span className="text-muted ml-1">Endgültiger Verlust</span>
            </div>
            <div className="text-sm">
              <span className="font-medium text-gray-700 dark:text-gray-300">Enttäuschung:</span>
              <span className="text-muted ml-1">Erwartung wurde nicht erfüllt</span>
            </div>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-900/15 border-l-4 border-red-500 p-4 rounded-r-lg space-y-2">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <h3 className="font-semibold text-red-800 dark:text-red-300">Falle 3: Sekundäre Emotionen übersehen</h3>
          </div>
          <p className="text-sm text-red-700 dark:text-red-400">
            Manchmal fragt die Aufgabe nach einer nicht-offensichtlichen Emotion.
            Z.B. kann Wut eine Sekundäremotionen von Angst oder Scham sein.
          </p>
        </div>
      </div>

      {/* Expert-Tipps */}
      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 space-y-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-amber-500" />
          <h3 className="font-semibold text-amber-800 dark:text-amber-300">Expert-Tipps für die Prüfung</h3>
        </div>
        <ul className="space-y-2 text-sm text-amber-700 dark:text-amber-400">
          <li className="flex items-start gap-2">
            <span className="text-amber-500 mt-0.5">1.</span>
            <span>Lies die Frage VOR den Antwortoptionen — überlege zuerst selbst, welche Emotion passt.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500 mt-0.5">2.</span>
            <span>Eliminiere zuerst eindeutig falsche Optionen, dann wähle aus den verbleibenden.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500 mt-0.5">3.</span>
            <span>Bei &quot;am ehesten&quot;-Fragen: Die spezifischere Emotion ist meist richtiger als die allgemeine.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500 mt-0.5">4.</span>
            <span>Beachte den KONTEXT: Die gleiche Situation kann je nach Person unterschiedliche Emotionen auslösen.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

const pages = [Seite1, Seite2, Seite3];
const pageTitles = ["Emotionsliste", "Lösungsstrategie", "Fallen & Tipps"];

export default function EmotionenErkennenLernen() {
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
                  ? "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 font-medium"
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
          className="flex items-center gap-1 text-sm font-medium text-amber-600 dark:text-amber-400 disabled:opacity-30 disabled:cursor-not-allowed hover:text-amber-800 dark:hover:text-amber-300 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          Zurück
        </button>
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={currentPage === totalPages - 1}
          className="flex items-center gap-1 text-sm font-medium text-amber-600 dark:text-amber-400 disabled:opacity-30 disabled:cursor-not-allowed hover:text-amber-800 dark:hover:text-amber-300 transition-colors cursor-pointer"
        >
          Weiter
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
