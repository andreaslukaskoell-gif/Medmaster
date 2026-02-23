/**
 * ConfidenzButtons — shown BEFORE the user answers.
 * User taps one of three confidence levels:
 *   🔴 Raten (0)   🟡 Unsicher (1)   🟢 Sicher (2)
 */
import type { Confidence } from "@/hooks/useFragenTrainer";

interface Props {
  value: Confidence | null;
  onChange: (c: Confidence) => void;
  disabled?: boolean;
}

const OPTIONS: { value: Confidence; emoji: string; label: string; ring: string; bg: string }[] = [
  {
    value: 0,
    emoji: "🔴",
    label: "Raten",
    ring: "ring-red-400",
    bg: "bg-red-50    dark:bg-red-900/20    text-red-700    dark:text-red-400",
  },
  {
    value: 1,
    emoji: "🟡",
    label: "Unsicher",
    ring: "ring-yellow-400",
    bg: "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700  dark:text-yellow-400",
  },
  {
    value: 2,
    emoji: "🟢",
    label: "Sicher",
    ring: "ring-green-400",
    bg: "bg-green-50  dark:bg-green-900/20  text-green-700   dark:text-green-400",
  },
];

export function ConfidenzButtons({ value, onChange, disabled }: Props) {
  return (
    <div className="space-y-1.5">
      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
        Wie sicher bist du?
      </p>
      <div className="flex gap-2">
        {OPTIONS.map((opt) => (
          <button
            key={opt.value}
            onClick={() => !disabled && onChange(opt.value)}
            disabled={disabled}
            className={`flex-1 flex flex-col items-center gap-1 py-2.5 rounded-xl border-2 transition-all cursor-pointer
              ${
                value === opt.value
                  ? `${opt.bg} ${opt.ring} ring-2 border-transparent scale-105 shadow-sm`
                  : "border-border hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400"
              }
              ${disabled ? "opacity-50 cursor-default" : ""}
            `}
          >
            <span className="text-xl">{opt.emoji}</span>
            <span className="text-xs font-medium">{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
