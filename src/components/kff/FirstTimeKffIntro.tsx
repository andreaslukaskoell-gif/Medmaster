/**
 * Beim ersten Besuch eines KFF-Unterbereichs: Strategie + Lösungsweg + Ablauf erklären,
 * dann „Weiter zum Üben“. Einmal pro Domain (zahlenfolgen, implikationen, …).
 */
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import KFFStrategyView from "@/components/shared/KFFStrategyView";
import { UebungsbeschreibungCard } from "@/components/shared/UebungsbeschreibungCard";
import type { UebungsbeschreibungId } from "@/data/uebungsbeschreibungen";

type StrategyKey = "zahlenfolgen" | "gedaechtnis" | "implikationen" | "wortflüssigkeit" | "figuren";

const DOMAIN_TO_UEBUNG: Record<StrategyKey, UebungsbeschreibungId> = {
  zahlenfolgen: "kff-zahlenfolgen",
  implikationen: "kff-implikationen",
  wortflüssigkeit: "kff-wortfluessigkeit",
  gedaechtnis: "kff-merkfaehigkeit",
  figuren: "kff-figuren",
};

type Props = {
  strategyKey: StrategyKey;
  onContinue: () => void;
  onBack: () => void;
};

export function FirstTimeKffIntro({ strategyKey, onContinue, onBack }: Props) {
  const uebungsId = DOMAIN_TO_UEBUNG[strategyKey];

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-10">
      <Button variant="ghost" size="sm" onClick={onBack}>
        <ArrowLeft className="w-4 h-4 mr-1" /> Zurück zur Übersicht
      </Button>

      <p className="text-sm text-muted">
        Beim ersten Mal erklären wir dir hier den Ablauf und die besten Lösungsstrategien für diesen
        Untertest.
      </p>

      <UebungsbeschreibungCard id={uebungsId} defaultCollapsed={false} />

      <KFFStrategyView
        strategyKey={strategyKey}
        onBack={onBack}
        onContinue={onContinue}
        continueLabel="Weiter zum Üben"
      />
    </div>
  );
}
