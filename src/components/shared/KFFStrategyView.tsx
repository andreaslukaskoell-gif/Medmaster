import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FIGURE_STRATEGY_GALLERY, FILL } from "@/data/figurenGenerator";
import { FIGURE_SVG_ASPECT_PROPS } from "@/data/kffFigurenZusammensetzenMedAT";
import { KFF_STRATEGIES, type KFFStrategyTestType } from "@/data/kffStrategies";

type StrategyKey = "zahlenfolgen" | "gedaechtnis" | "implikationen" | "wortflüssigkeit" | "figuren";

const STRATEGY_KEY_TO_TEST_TYPE: Record<StrategyKey, KFFStrategyTestType> = {
  zahlenfolgen: "sequences",
  gedaechtnis: "memory",
  implikationen: "implications",
  wortflüssigkeit: "verbal-fluency",
  figuren: "figures",
};

type Props = {
  strategyKey: StrategyKey;
  onBack: () => void;
  /** Wenn gesetzt: großer Button am Ende „Weiter zum Üben“ (z.B. beim ersten Mal KFF-Unterbereich) */
  onContinue?: () => void;
  continueLabel?: string;
};

/**
 * Volle KFF-Strategie-Seite: Schritte, Fallen und visuelle Hilfen.
 * Wird nur unter „Strategie“ angezeigt, nicht beim Üben.
 */
export default function KFFStrategyView({ strategyKey, onBack, onContinue, continueLabel }: Props) {
  const testType = STRATEGY_KEY_TO_TEST_TYPE[strategyKey];
  const strategy = KFF_STRATEGIES[testType];
  if (!strategy) return null;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Button variant="ghost" size="sm" onClick={onBack}>
        <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
      </Button>

      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{strategy.title}</h1>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-300">
            Empfohlener Lösungsweg
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
            {strategy.steps.map((step, i) => (
              <li key={i} className="pl-1">
                {step}
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* Visuelle Hilfen je nach Untertest */}
      {testType === "implications" && <ImplikationenKreise />}
      {testType === "sequences" && <ZahlenfolgenDifferenzen />}
      {testType === "figures" && <FigurenSkizze />}
      {testType === "verbal-fluency" && <WortfluessigkeitSilben />}
      {testType === "memory" && <MerkfaehigkeitProfil />}

      <Card className="border-amber-200 dark:border-amber-800/50 bg-amber-50/50 dark:bg-amber-950/30">
        <CardContent className="p-6 space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-200">
            Typische Fallen
          </h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-amber-900 dark:text-amber-100">
            {strategy.pitfalls.map((pitfall, i) => (
              <li key={i} className="pl-1">
                {pitfall}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {onContinue && continueLabel && (
        <div className="flex flex-col gap-3">
          <Button onClick={onContinue} size="lg" className="w-full sm:w-auto">
            {continueLabel}
          </Button>
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-1" /> Zurück zur Übersicht
          </Button>
        </div>
      )}
    </div>
  );
}

function ImplikationenKreise() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-300 mb-3">
          Was mit „Kreisen“ gemeint ist (Mengenbilder)
        </h2>
        <div className="flex flex-wrap gap-6 justify-around items-end text-center">
          <div className="flex flex-col items-center gap-2">
            <svg viewBox="0 0 120 80" className="w-28 h-[4.5rem]" aria-hidden>
              <circle cx="60" cy="40" r="32" fill="none" stroke="#0d9488" strokeWidth="2.5" />
              <circle cx="42" cy="40" r="18" fill="#99f6e4" stroke="#0d9488" strokeWidth="2.5" />
              <text x="32" y="44" fill="#134e4a" fontSize="12" fontWeight="700">
                A
              </text>
              <text x="78" y="44" fill="#134e4a" fontSize="12" fontWeight="700">
                B
              </text>
            </svg>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              Alle A sind B
            </span>
            <span className="text-[10px] text-muted">A ganz in B</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <svg viewBox="0 0 120 80" className="w-28 h-[4.5rem]" aria-hidden>
              <circle cx="48" cy="40" r="26" fill="#99f6e4" stroke="#0d9488" strokeWidth="2.5" />
              <circle cx="72" cy="40" r="26" fill="none" stroke="#0d9488" strokeWidth="2.5" />
              <text x="32" y="44" fill="#134e4a" fontSize="12" fontWeight="700">
                A
              </text>
              <text x="82" y="44" fill="#134e4a" fontSize="12" fontWeight="700">
                B
              </text>
            </svg>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              Einige A sind B
            </span>
            <span className="text-[10px] text-muted">Schnitt (Überlappung)</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <svg viewBox="0 0 120 80" className="w-28 h-[4.5rem]" aria-hidden>
              <circle cx="38" cy="40" r="22" fill="none" stroke="#0d9488" strokeWidth="2.5" />
              <circle cx="82" cy="40" r="22" fill="none" stroke="#0d9488" strokeWidth="2.5" />
              <text x="30" y="44" fill="#134e4a" fontSize="12" fontWeight="700">
                A
              </text>
              <text x="76" y="44" fill="#134e4a" fontSize="12" fontWeight="700">
                B
              </text>
            </svg>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              Kein A ist B
            </span>
            <span className="text-[10px] text-muted">Keine Überlappung</span>
          </div>
        </div>
        <p className="text-[10px] text-muted mt-3 text-center">
          Zeichne solche Kreise gedanklich oder auf dem Schmierblatt; dann siehst du, was zwingend
          folgt.
        </p>
      </CardContent>
    </Card>
  );
}

function ZahlenfolgenDifferenzen() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-300 mb-3">
          Beispiel: Differenzen prüfen
        </h2>
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 font-mono text-sm">
          <p className="text-gray-600 dark:text-gray-400 mb-1">Folge:</p>
          <p className="text-gray-900 dark:text-gray-100 mb-2">2 → 5 → 8 → 11 → 14 → ? → ?</p>
          <p className="text-gray-600 dark:text-gray-400 mb-1">1. Differenzen:</p>
          <p className="text-teal-700 dark:text-teal-300">+3, +3, +3, +3 → konstant</p>
          <p className="text-gray-600 dark:text-gray-400 mt-2 mb-1">→ Nächste: 17, 20</p>
        </div>
        <p className="text-[10px] text-muted mt-2">
          Immer zuerst Differenzen bilden; wenn die nicht passen, Differenzen der Differenzen oder
          Faktoren prüfen.
        </p>
      </CardContent>
    </Card>
  );
}

function FigurenSkizze() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-300 mb-3">
          Die 14 Lösungsfiguren (in der Prüfungsfarbe)
        </h2>
        <p className="text-xs text-muted mb-4">
          So sehen die Zielfiguren aus – sie können aus Puzzleteilen zusammengesetzt werden. Teile
          nur drehen/verschieben, nicht spiegeln.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {FIGURE_STRATEGY_GALLERY.map(({ key, path, name }) => (
            <div
              key={key}
              className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50"
            >
              <svg
                viewBox="0 0 200 200"
                {...FIGURE_SVG_ASPECT_PROPS}
                className="w-16 h-16 sm:w-20 sm:h-20 shrink-0"
                aria-hidden
              >
                <path d={path} fill={FILL} stroke="#0e7490" strokeWidth="2" />
              </svg>
              <span className="text-[10px] text-center text-gray-700 dark:text-gray-300 leading-tight">
                {name.replace(/^ein |eine |einen /, "")}
              </span>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-muted mt-3 text-center">
          Kantenlängen und Winkel der Zielfigur mit den Teilen abgleichen – so schließt du falsche
          Optionen aus.
        </p>
      </CardContent>
    </Card>
  );
}

function WortfluessigkeitSilben() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-300 mb-3">
          Typische Endungen und Anfänge
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="rounded-lg bg-teal-100 dark:bg-teal-900/40 px-3 py-2 text-sm font-medium text-teal-900 dark:text-teal-100">
            Endungen: -UNG, -HEIT, -KEIT, -ER, -EN, -ION, -TION
          </div>
          <div className="rounded-lg bg-teal-100 dark:bg-teal-900/40 px-3 py-2 text-sm font-medium text-teal-900 dark:text-teal-100">
            Anfänge: BE-, VER-, GE-, ENT-, ZER-
          </div>
        </div>
        <p className="text-[10px] text-muted mt-3 text-center">
          Zuerst Endung/Silbe finden, dann prüfen: Jeder Buchstabe genau einmal?
        </p>
      </CardContent>
    </Card>
  );
}

function MerkfaehigkeitProfil() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-300 mb-3">
          Ein Profil pro Person (nicht Einzeldaten)
        </h2>
        <div className="flex items-center gap-4 rounded-lg border-2 border-teal-200 dark:border-teal-700/60 bg-white dark:bg-gray-900/50 p-4">
          <div className="w-16 h-20 rounded bg-gray-300 dark:bg-gray-600 flex items-center justify-center shrink-0">
            <svg
              className="w-10 h-12 text-gray-500"
              viewBox="0 0 24 28"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 2c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm0 10c3.3 0 6 2.7 6 6v6H6v-6c0-3.3 2.7-6 6-6z" />
            </svg>
          </div>
          <div className="text-sm space-y-1">
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              Name + 1 Merkmal + 1 Zahl
            </p>
            <p className="text-muted text-xs">
              z. B. „Müller – Penicillin – Italien“ oder „Blutgruppe 0 – 12.03.1995“
            </p>
            <p className="text-[10px] text-teal-700 dark:text-teal-300 mt-2">
              Ein Satz oder eine Eselsbrücke pro Person hilft mehr als isolierte Fakten.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
