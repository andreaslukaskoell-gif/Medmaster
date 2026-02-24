import { useState } from "react";
import { ChevronDown, ChevronUp, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { KFF_STRATEGIES, type KFFStrategyTestType } from "@/data/kffStrategies";
import { cn } from "@/lib/utils";

type StrategyPanelMode = "collapsed" | "expanded";

type Props = {
  testType: KFFStrategyTestType;
  mode?: StrategyPanelMode;
  className?: string;
};

/**
 * KFF Lösungsstrategie-Panel: eingeklappt, aufklappbar.
 * Zeigt empfohlenen Lösungsweg und typische Fallen – erklärt den Prozess, nicht die Lösung.
 */
export default function StrategyPanel({ testType, mode: controlledMode, className }: Props) {
  const [internalExpanded, setInternalExpanded] = useState(false);

  const isControlled = controlledMode !== undefined;
  const expanded = isControlled ? controlledMode === "expanded" : internalExpanded;
  const setExpanded = isControlled ? () => {} : () => setInternalExpanded((p) => !p);

  const strategy = KFF_STRATEGIES[testType];
  if (!strategy) return null;

  return (
    <div
      className={cn(
        "rounded-xl border-2 border-teal-200 dark:border-teal-800/60",
        "bg-teal-50/80 dark:bg-teal-950/30",
        "overflow-hidden transition-colors",
        className
      )}
    >
      <div className="p-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={setExpanded}
          className={cn(
            "w-full justify-between font-medium text-teal-900 dark:text-teal-100",
            "hover:bg-teal-100/80 dark:hover:bg-teal-900/30"
          )}
        >
          <span className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            {expanded ? "Lösungsstrategie einklappen" : "Lösungsstrategie anzeigen"}
          </span>
          {expanded ? (
            <ChevronUp className="w-4 h-4 text-teal-600 dark:text-teal-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-teal-600 dark:text-teal-400" />
          )}
        </Button>

        <div
          className="overflow-hidden transition-[max-height] duration-300 ease-out"
          style={{ maxHeight: expanded ? (testType === "implications" ? 720 : 600) : 0 }}
        >
          <div className="pt-4 space-y-4">
            <p className="text-sm font-semibold text-teal-800 dark:text-teal-200">
              {strategy.title}
            </p>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-300 mb-2">
                Empfohlener Lösungsweg
              </p>
              <ol className="list-decimal list-inside space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                {strategy.steps.map((step, i) => (
                  <li key={i} className="pl-1">
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {testType === "implications" && (
              <div className="rounded-lg border border-teal-200 dark:border-teal-700/60 bg-white dark:bg-gray-900/50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-300 mb-3">
                  Was mit „Kreisen“ gemeint ist (Mengenbilder)
                </p>
                <div className="flex flex-wrap gap-6 justify-around items-end text-center">
                  {/* Alle A sind B: A komplett inside B */}
                  <div className="flex flex-col items-center gap-2">
                    <svg viewBox="0 0 120 80" className="w-28 h-[4.5rem]" aria-hidden>
                      <circle
                        cx="60"
                        cy="40"
                        r="32"
                        fill="none"
                        stroke="#0d9488"
                        strokeWidth="2.5"
                      />
                      <circle
                        cx="42"
                        cy="40"
                        r="18"
                        fill="#99f6e4"
                        stroke="#0d9488"
                        strokeWidth="2.5"
                      />
                      <text x="32" y="44" fill="#134e4a" fontSize="12" fontWeight="700">
                        A
                      </text>
                      <text x="78" y="44" fill="#134e4a" fontSize="12" fontWeight="700">
                        B
                      </text>
                    </svg>
                    <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">
                      Alle A sind B
                    </span>
                    <span className="text-[10px] text-muted">A ganz in B</span>
                  </div>
                  {/* Einige A sind B: Überlappung */}
                  <div className="flex flex-col items-center gap-2">
                    <svg viewBox="0 0 120 80" className="w-28 h-[4.5rem]" aria-hidden>
                      <circle
                        cx="48"
                        cy="40"
                        r="26"
                        fill="#99f6e4"
                        stroke="#0d9488"
                        strokeWidth="2.5"
                      />
                      <circle
                        cx="72"
                        cy="40"
                        r="26"
                        fill="none"
                        stroke="#0d9488"
                        strokeWidth="2.5"
                      />
                      <text x="32" y="44" fill="#134e4a" fontSize="12" fontWeight="700">
                        A
                      </text>
                      <text x="82" y="44" fill="#134e4a" fontSize="12" fontWeight="700">
                        B
                      </text>
                    </svg>
                    <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">
                      Einige A sind B
                    </span>
                    <span className="text-[10px] text-muted">Schnitt (Überlappung)</span>
                  </div>
                  {/* Kein A ist B: getrennt */}
                  <div className="flex flex-col items-center gap-2">
                    <svg viewBox="0 0 120 80" className="w-28 h-[4.5rem]" aria-hidden>
                      <circle
                        cx="38"
                        cy="40"
                        r="22"
                        fill="none"
                        stroke="#0d9488"
                        strokeWidth="2.5"
                      />
                      <circle
                        cx="82"
                        cy="40"
                        r="22"
                        fill="none"
                        stroke="#0d9488"
                        strokeWidth="2.5"
                      />
                      <text x="30" y="44" fill="#134e4a" fontSize="12" fontWeight="700">
                        A
                      </text>
                      <text x="76" y="44" fill="#134e4a" fontSize="12" fontWeight="700">
                        B
                      </text>
                    </svg>
                    <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">
                      Kein A ist B
                    </span>
                    <span className="text-[10px] text-muted">Keine Überlappung</span>
                  </div>
                </div>
                <p className="text-[10px] text-muted mt-3 text-center">
                  Zeichne solche Kreise gedanklich oder auf dem Schmierblatt; dann siehst du, was
                  zwingend folgt.
                </p>
              </div>
            )}

            <div
              className={cn(
                "rounded-lg border border-amber-300 dark:border-amber-700/70",
                "bg-amber-50 dark:bg-amber-950/40",
                "p-3"
              )}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-200 mb-2">
                Typische Fallen
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-amber-900 dark:text-amber-100">
                {strategy.pitfalls.map((pitfall, i) => (
                  <li key={i} className="pl-1">
                    {pitfall}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
