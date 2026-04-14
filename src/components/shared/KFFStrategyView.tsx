import { ArrowLeft, Lightbulb, Clock, Target, Sparkles, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { KFF_LEARNING_AIDS, type KFFLearningAid } from "@/data/kffLearningAids";

type StrategyKey = "zahlenfolgen" | "gedaechtnis" | "implikationen" | "wortflüssigkeit" | "figuren";

const STRATEGY_KEY_TO_AID: Record<StrategyKey, keyof typeof KFF_LEARNING_AIDS> = {
  zahlenfolgen: "zahlenfolgen",
  gedaechtnis: "gedaechtnis",
  implikationen: "implikationen",
  wortflüssigkeit: "wortfluessigkeit",
  figuren: "figuren",
};

const STRATEGY_KEY_TO_TITLE: Record<StrategyKey, string> = {
  zahlenfolgen: "Zahlenfolgen",
  gedaechtnis: "Gedächtnis & Merkfähigkeit",
  implikationen: "Implikationen erkennen",
  wortflüssigkeit: "Wortflüssigkeit",
  figuren: "Figuren zusammensetzen",
};

type Props = {
  strategyKey: StrategyKey;
  onBack: () => void;
  onContinue?: () => void;
  continueLabel?: string;
};

/**
 * Premium KFF-Strategieseite — eigene Vollseite pro Subtest.
 * Aufbau: Hero → Beispiel → Lösung → Leitprinzip → Lösungsweg → Cheat-Sheet → Fallen → Vorbereitung
 */
export default function KFFStrategyView({ strategyKey, onBack, onContinue, continueLabel }: Props) {
  const aid = KFF_LEARNING_AIDS[STRATEGY_KEY_TO_AID[strategyKey]];
  const title = STRATEGY_KEY_TO_TITLE[strategyKey];

  if (!aid) return null;

  return (
    <div className="max-w-3xl mx-auto pb-12">
      {/* Back button */}
      <div className="px-1 pt-1 pb-4">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück zur Übersicht
        </Button>
      </div>

      {/* HERO */}
      <Hero aid={aid} title={title} />

      {/* CONTENT */}
      <div className="space-y-10 mt-10">
        <ExampleSection aid={aid} />
        <SolutionSection aid={aid} />
        <RuleSection aid={aid} />
        <StepsSection aid={aid} />
        <CheatSheetSection aid={aid} />
        <PitfallsSection aid={aid} />
        <PrepTipsSection aid={aid} />
      </div>

      {/* CTA */}
      {onContinue && continueLabel && (
        <div className="mt-10 flex flex-col gap-3">
          <Button onClick={onContinue} size="lg" className="w-full sm:w-auto">
            {continueLabel}
          </Button>
        </div>
      )}
    </div>
  );
}

// ============================================================
// Sections
// ============================================================

function Hero({ aid, title }: { aid: KFFLearningAid; title: string }) {
  const { color } = aid;
  return (
    <div
      className="relative rounded-2xl overflow-hidden p-8"
      style={{
        background: `linear-gradient(135deg, color-mix(in srgb, ${color} 8%, var(--surface)), color-mix(in srgb, ${color} 3%, var(--surface)))`,
        border: `1px solid color-mix(in srgb, ${color} 20%, transparent)`,
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: `linear-gradient(to right, ${color}, transparent)` }}
      />
      <div className="space-y-3">
        <span
          className="inline-block text-[10px] font-semibold uppercase tracking-[0.18em]"
          style={{ color }}
        >
          KFF Strategie
        </span>
        <h1
          className="text-4xl font-serif font-medium text-[var(--text-primary)] leading-tight"
          style={{ letterSpacing: "-0.015em" }}
        >
          {title}
        </h1>
        <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-2xl">
          {aid.shortDescription}
        </p>
      </div>

      {/* Meta strip */}
      <div
        className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3"
      >
        <MetaPill icon={<Target className="w-3.5 h-3.5" />} label="Aufgaben" value={aid.meta.tasks} color={color} />
        <MetaPill icon={<Clock className="w-3.5 h-3.5" />} label="Zeit" value={aid.meta.time} color={color} />
        <MetaPill icon={<Sparkles className="w-3.5 h-3.5" />} label="Punkte" value={aid.meta.points} color={color} />
        <MetaPill
          icon={<Clock className="w-3.5 h-3.5" />}
          label="Pro Aufgabe"
          value={aid.meta.secondsPerTask}
          color={color}
        />
      </div>
    </div>
  );
}

function MetaPill({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div
      className="rounded-lg p-3 backdrop-blur-sm"
      style={{
        background: "color-mix(in srgb, var(--surface) 70%, transparent)",
        border: `1px solid color-mix(in srgb, ${color} 18%, transparent)`,
      }}
    >
      <div className="flex items-center gap-1.5 mb-1" style={{ color }}>
        {icon}
        <span className="text-[10px] font-semibold uppercase tracking-wider">{label}</span>
      </div>
      <p className="text-[13px] font-semibold text-[var(--text-primary)] leading-tight">{value}</p>
    </div>
  );
}

function SectionHeading({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span
        className="text-[11px] font-semibold uppercase tracking-[0.14em]"
        style={{ color }}
      >
        {label}
      </span>
      <span
        className="h-px flex-1"
        style={{
          background: `linear-gradient(to right, color-mix(in srgb, ${color} 32%, transparent), transparent)`,
        }}
      />
    </div>
  );
}

function ExampleSection({ aid }: { aid: KFFLearningAid }) {
  const { color, example } = aid;
  return (
    <section>
      <SectionHeading color={color} label="Beispielaufgabe" />
      <figure
        className="relative rounded-xl overflow-hidden backdrop-blur-sm"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in srgb, var(--surface) 85%, transparent), color-mix(in srgb, var(--surface) 70%, transparent))",
          border: `1px solid color-mix(in srgb, ${color} 18%, transparent)`,
          boxShadow: `0 1px 2px rgba(0,0,0,0.03), 0 0 0 1px color-mix(in srgb, ${color} 4%, transparent) inset`,
        }}
      >
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px]"
          style={{ background: `linear-gradient(to bottom, ${color}, transparent)` }}
        />
        <blockquote className="px-7 py-6">
          <p className="text-[16px] leading-[1.7] text-[var(--text-primary)] font-[450] italic">
            <span
              className="text-2xl leading-none mr-0.5 font-serif align-[-0.15em]"
              style={{ color }}
            >
              &ldquo;
            </span>
            {example.situation}
            <span
              className="text-2xl leading-none ml-0.5 font-serif align-[-0.15em]"
              style={{ color }}
            >
              &rdquo;
            </span>
          </p>
          <div
            className="mt-5 pt-5 border-t"
            style={{ borderColor: `color-mix(in srgb, ${color} 18%, transparent)` }}
          >
            <p className="text-[12px] font-semibold text-[var(--muted)] uppercase tracking-wider mb-3">
              {example.question}
            </p>
            <ul className="space-y-2">
              {example.options.map((opt, i) => (
                <li
                  key={i}
                  className="text-[14px] text-[var(--text-secondary)] leading-relaxed flex gap-3"
                >
                  <span
                    className="shrink-0 mt-[10px] w-1.5 h-1.5 rounded-full"
                    style={{ background: color }}
                  />
                  <span className="flex-1">{opt}</span>
                </li>
              ))}
            </ul>
          </div>
        </blockquote>
      </figure>
    </section>
  );
}

function SolutionSection({ aid }: { aid: KFFLearningAid }) {
  const { color, solution } = aid;
  return (
    <section>
      <SectionHeading color={color} label="Lösung & Begründung" />
      <div
        className="rounded-xl p-5"
        style={{
          background: `color-mix(in srgb, ${color} 6%, transparent)`,
          border: `1px solid color-mix(in srgb, ${color} 22%, transparent)`,
        }}
      >
        <div className="flex gap-3 items-start mb-3">
          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color }} />
          <p className="text-[15px] font-semibold text-[var(--text-primary)]">{solution.answer}</p>
        </div>
        <p className="text-[14px] text-[var(--text-secondary)] leading-[1.7] pl-8">
          {solution.reasoning}
        </p>
      </div>
    </section>
  );
}

function RuleSection({ aid }: { aid: KFFLearningAid }) {
  const { color, rule } = aid;
  return (
    <section>
      <SectionHeading color={color} label="Leitprinzip" />
      <div className="relative py-3">
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px]"
          style={{
            background: `linear-gradient(to bottom, transparent, ${color}, transparent)`,
          }}
        />
        <p
          className="pl-6 pr-2 text-[22px] leading-[1.4] font-serif font-medium text-[var(--text-primary)]"
          style={{ letterSpacing: "-0.015em" }}
        >
          {rule}
        </p>
      </div>
    </section>
  );
}

function StepsSection({ aid }: { aid: KFFLearningAid }) {
  const { color, steps } = aid;
  return (
    <section>
      <SectionHeading color={color} label="Lösungsweg" />
      <ol className="space-y-3">
        {steps.map((step, i) => (
          <li
            key={i}
            className="rounded-lg px-5 py-4"
            style={{
              background: "color-mix(in srgb, var(--surface) 60%, transparent)",
              border: `1px solid color-mix(in srgb, ${color} 18%, transparent)`,
            }}
          >
            <div className="flex gap-4">
              <span
                className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-semibold border font-serif"
                style={{
                  color,
                  borderColor: `color-mix(in srgb, ${color} 32%, transparent)`,
                  background: `color-mix(in srgb, ${color} 6%, transparent)`,
                }}
              >
                {i + 1}
              </span>
              <p className="flex-1 text-[14.5px] leading-[1.65] text-[var(--text-primary)] pt-[7px]">
                {step}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function CheatSheetSection({ aid }: { aid: KFFLearningAid }) {
  const { color, framework } = aid;
  return (
    <section>
      <SectionHeading color={color} label="Cheat-Sheet" />
      <p className="text-[13px] text-[var(--muted)] mb-4 font-medium">{framework.title}</p>
      <div
        className="rounded-xl overflow-hidden"
        style={{
          border: `1px solid color-mix(in srgb, ${color} 18%, transparent)`,
          background: "color-mix(in srgb, var(--surface) 60%, transparent)",
        }}
      >
        {framework.items.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-[140px_1fr] gap-4 px-5 py-3.5 text-[14px]"
            style={{
              borderTop:
                i === 0 ? "none" : `1px solid color-mix(in srgb, ${color} 14%, transparent)`,
            }}
          >
            <span
              className="font-semibold text-[13px] tracking-wide pt-[1px]"
              style={{ color }}
            >
              {item.label}
            </span>
            <span className="text-[var(--text-secondary)] leading-[1.6]">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function PitfallsSection({ aid }: { aid: KFFLearningAid }) {
  const { pitfalls } = aid;
  return (
    <section>
      <div className="flex items-center gap-3 mb-4">
        <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-700 dark:text-amber-400">
          Typische Fallen
        </span>
        <span
          className="h-px flex-1"
          style={{
            background:
              "linear-gradient(to right, color-mix(in srgb, #f59e0b 32%, transparent), transparent)",
          }}
        />
      </div>
      <ul className="space-y-2.5">
        {pitfalls.map((p, i) => (
          <li
            key={i}
            className="text-[14px] text-[var(--text-secondary)] leading-[1.65] flex gap-3 pl-1"
          >
            <span className="text-amber-500 mt-[8px] shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="flex-1">{p}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function PrepTipsSection({ aid }: { aid: KFFLearningAid }) {
  const { color, prepTips } = aid;
  return (
    <section>
      <div className="flex items-center gap-3 mb-4">
        <Lightbulb className="w-3.5 h-3.5 text-emerald-600" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-400">
          Vorbereitung & Training
        </span>
        <span
          className="h-px flex-1"
          style={{
            background:
              "linear-gradient(to right, color-mix(in srgb, #10b981 32%, transparent), transparent)",
          }}
        />
      </div>
      <div
        className="rounded-xl p-5"
        style={{
          background: `color-mix(in srgb, ${color} 4%, transparent)`,
          border: "1px solid color-mix(in srgb, #10b981 18%, transparent)",
        }}
      >
        <ul className="space-y-2.5">
          {prepTips.map((tip, i) => (
            <li
              key={i}
              className="text-[14px] text-[var(--text-secondary)] leading-[1.65] flex gap-3"
            >
              <span className="text-emerald-600 mt-[8px] shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="flex-1">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
