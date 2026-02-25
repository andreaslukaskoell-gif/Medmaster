/**
 * FSRSRatingButtons — shown AFTER the user sees the answer.
 * User rates how well they knew the answer (FSRS scale):
 *   1 = Wieder   2 = Schwer   3 = Gut   4 = Leicht
 * suggestedRating optionally highlights the suggested button.
 */
import type { FSRSRating } from "@/lib/fsrs";

interface Props {
  onRate: (rating: FSRSRating) => void;
  disabled?: boolean;
  /** Optional: empfohlenes Rating (wird hervorgehoben) */
  suggestedRating?: FSRSRating | null;
}

const RATINGS: { value: FSRSRating; label: string; sub: string; cls: string }[] = [
  {
    value: 1,
    label: "Wieder",
    sub: "< 1 Tag",
    cls: "border-red-300    text-red-700    dark:text-red-400    hover:bg-red-50    dark:hover:bg-red-900/20",
  },
  {
    value: 2,
    label: "Schwer",
    sub: "~ 1 Tag",
    cls: "border-orange-300 text-orange-700 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20",
  },
  {
    value: 3,
    label: "Gut",
    sub: "~ 3 Tage",
    cls: "border-blue-300   text-blue-700   dark:text-blue-400   hover:bg-blue-50   dark:hover:bg-blue-900/20",
  },
  {
    value: 4,
    label: "Leicht",
    sub: "~ 1 Woche",
    cls: "border-green-300  text-green-700  dark:text-green-400  hover:bg-green-50  dark:hover:bg-green-900/20",
  },
];

export function FSRSRatingButtons({ onRate, disabled, suggestedRating }: Props) {
  return (
    <div className="space-y-1.5">
      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
        Wie leicht war es?
      </p>
      <div className="grid grid-cols-4 gap-1.5">
        {RATINGS.map((r) => {
          const isSuggested = suggestedRating != null && suggestedRating === r.value;
          return (
            <button
              key={r.value}
              onClick={() => !disabled && onRate(r.value)}
              disabled={disabled}
              className={`flex flex-col items-center gap-0.5 py-2.5 px-1 rounded-xl border text-center
                transition-all cursor-pointer ${r.cls}
                ${isSuggested ? "ring-2 ring-offset-2 ring-primary-500 dark:ring-offset-gray-900 scale-105" : ""}
                ${disabled ? "opacity-50 cursor-default" : "hover:scale-105 active:scale-95"}
              `}
            >
              <span className="text-xs font-bold">{r.label}</span>
              <span className="text-[10px] opacity-70">{r.sub}</span>
              {isSuggested && (
                <span className="text-[9px] text-primary-600 dark:text-primary-400 font-medium">
                  Empfohlen
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
