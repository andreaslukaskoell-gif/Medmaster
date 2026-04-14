import { useState } from "react";
import { ChevronDown, ChevronUp, AlertTriangle } from "lucide-react";

export type SubtestLearningAidProps = {
  color: string;
  example: { situation: string; question: string; options: string[] };
  rule: string;
  steps: string[];
  framework: { title: string; items: { label: string; text: string }[] };
  pitfalls: string[];
  /** Optional: offizielle Instruktion am Ende (nur SEK/TV). */
  instruction?: string;
  instructionTitle?: string;
};

/**
 * Premium inline learning aid for subtest cards.
 * Structure: Example → Rule → Steps (always visible),
 *            Cheat-Sheet → Pitfalls → (optional) Official Instruction (expandable).
 */
export default function SubtestLearningAid({
  color,
  example,
  rule,
  steps,
  framework,
  pitfalls,
  instruction,
  instructionTitle,
}: SubtestLearningAidProps) {
  const [expanded, setExpanded] = useState(false);
  const [instrOpen, setInstrOpen] = useState(false);

  const softBg = `color-mix(in srgb, ${color} 4%, transparent)`;
  const softBorder = `color-mix(in srgb, ${color} 18%, transparent)`;
  const mediumBorder = `color-mix(in srgb, ${color} 28%, transparent)`;

  return (
    <div className="border-t" style={{ borderColor: "var(--border)", background: softBg }}>
      {/* ALWAYS VISIBLE */}
      <div className="px-6 pt-7 pb-6 space-y-7">
        {/* EXAMPLE */}
        <section>
          <SectionHeader color={color} mediumBorder={mediumBorder} label="Beispielaufgabe" />
          <figure
            className="relative rounded-xl overflow-hidden backdrop-blur-sm"
            style={{
              background:
                "linear-gradient(180deg, color-mix(in srgb, var(--surface) 85%, transparent), color-mix(in srgb, var(--surface) 70%, transparent))",
              border: `1px solid ${softBorder}`,
              boxShadow: `0 1px 2px rgba(0,0,0,0.03), 0 0 0 1px color-mix(in srgb, ${color} 4%, transparent) inset`,
            }}
          >
            <div
              className="absolute left-0 top-0 bottom-0 w-[3px]"
              style={{ background: `linear-gradient(to bottom, ${color}, transparent)` }}
            />
            <blockquote className="px-6 py-5">
              <p
                className="text-[15px] leading-[1.75] text-[var(--text-primary)] font-[450] italic"
                style={{ fontFeatureSettings: '"ss01", "cv01"' }}
              >
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
              <div className="mt-4 pt-4 border-t" style={{ borderColor: softBorder }}>
                <p className="text-[12px] font-semibold text-[var(--muted)] uppercase tracking-wider mb-2.5">
                  {example.question}
                </p>
                <ul className="space-y-1.5">
                  {example.options.map((opt, i) => (
                    <li
                      key={i}
                      className="text-[13.5px] text-[var(--text-secondary)] leading-relaxed flex gap-2.5"
                    >
                      <span
                        className="shrink-0 mt-[9px] w-1 h-1 rounded-full"
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

        {/* RULE */}
        <section>
          <SectionHeader color={color} mediumBorder={mediumBorder} label="Leitprinzip" />
          <div className="relative py-2">
            <div
              className="absolute left-0 top-0 bottom-0 w-[2px]"
              style={{ background: `linear-gradient(to bottom, transparent, ${color}, transparent)` }}
            />
            <p
              className="pl-5 pr-2 text-[18px] leading-[1.45] font-serif font-medium text-[var(--text-primary)]"
              style={{ letterSpacing: "-0.01em" }}
            >
              {rule}
            </p>
          </div>
        </section>

        {/* STEPS */}
        <section>
          <SectionHeader
            color={color}
            mediumBorder={mediumBorder}
            label="Lösungsweg"
            mb="mb-4"
          />
          <ol className="space-y-3">
            {steps.map((step, i) => (
              <li
                key={i}
                className="group relative rounded-lg px-4 py-3 transition-colors"
                style={{
                  background: "color-mix(in srgb, var(--surface) 50%, transparent)",
                  border: `1px solid ${softBorder}`,
                }}
              >
                <div className="flex gap-4">
                  <span
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-semibold border font-serif"
                    style={{
                      color,
                      borderColor: mediumBorder,
                      background: `color-mix(in srgb, ${color} 6%, transparent)`,
                    }}
                  >
                    {i + 1}
                  </span>
                  <p className="flex-1 text-[14px] leading-[1.65] text-[var(--text-primary)] pt-[5px]">
                    {step}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>

      {/* EXPAND TOGGLE */}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 text-[12px] font-medium border-t hover:bg-[var(--hover)] transition-colors cursor-pointer"
        style={{
          borderColor: softBorder,
          color: expanded ? color : "var(--muted)",
        }}
      >
        <span className="tracking-wide">
          {expanded
            ? "Weniger anzeigen"
            : instruction
              ? "Cheat-Sheet, Fallen & offizielle Instruktion"
              : "Cheat-Sheet & typische Fallen"}
        </span>
        {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
      </button>

      {expanded && (
        <div className="px-6 pb-6 pt-6 space-y-7">
          {/* CHEAT-SHEET */}
          <section>
            <SectionHeader color={color} mediumBorder={mediumBorder} label="Cheat-Sheet" />
            <p className="text-[12.5px] text-[var(--muted)] mb-3 font-medium">
              {framework.title}
            </p>
            <div
              className="rounded-xl overflow-hidden"
              style={{
                border: `1px solid ${softBorder}`,
                background: "color-mix(in srgb, var(--surface) 50%, transparent)",
              }}
            >
              {framework.items.map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[130px_1fr] gap-4 px-4 py-3 text-[13.5px]"
                  style={{ borderTop: i === 0 ? "none" : `1px solid ${softBorder}` }}
                >
                  <span
                    className="font-semibold text-[12.5px] tracking-wide pt-[1px]"
                    style={{ color }}
                  >
                    {item.label}
                  </span>
                  <span className="text-[var(--text-secondary)] leading-[1.6]">{item.text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* PITFALLS */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-3 h-3 text-amber-500" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-amber-700 dark:text-amber-400">
                Typische Fallen
              </span>
              <span
                className="h-px flex-1"
                style={{
                  background:
                    "linear-gradient(to right, color-mix(in srgb, #f59e0b 28%, transparent), transparent)",
                }}
              />
            </div>
            <ul className="space-y-2">
              {pitfalls.map((p, i) => (
                <li
                  key={i}
                  className="text-[13.5px] text-[var(--text-secondary)] leading-[1.6] flex gap-3 pl-1"
                >
                  <span className="text-amber-500 mt-[7px] shrink-0 w-1 h-1 rounded-full bg-amber-500" />
                  <span className="flex-1">{p}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* OFFICIAL INSTRUCTION */}
          {instruction && (
            <section className="pt-5 border-t" style={{ borderColor: softBorder }}>
              <button
                type="button"
                onClick={() => setInstrOpen((v) => !v)}
                className="flex items-center gap-2 text-[11px] font-semibold text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer uppercase tracking-[0.1em]"
              >
                <span>{instructionTitle ?? "Offizielle Instruktion"}</span>
                {instrOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>
              {instrOpen && (
                <p
                  className="mt-3 text-[12.5px] text-[var(--text-secondary)] leading-[1.75] whitespace-pre-line pl-4 border-l-2"
                  style={{ borderColor: softBorder }}
                >
                  {instruction}
                </p>
              )}
            </section>
          )}
        </div>
      )}
    </div>
  );
}

function SectionHeader({
  color,
  mediumBorder,
  label,
  mb = "mb-3",
}: {
  color: string;
  mediumBorder: string;
  label: string;
  mb?: string;
}) {
  return (
    <div className={`flex items-center gap-2 ${mb}`}>
      <span
        className="text-[10px] font-semibold uppercase tracking-[0.12em]"
        style={{ color }}
      >
        {label}
      </span>
      <span
        className="h-px flex-1"
        style={{ background: `linear-gradient(to right, ${mediumBorder}, transparent)` }}
      />
    </div>
  );
}
