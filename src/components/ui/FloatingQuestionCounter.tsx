interface Props {
  current: number;
  total: number;
  /** Optional label override (default: "Frage") */
  label?: string;
}

export function FloatingQuestionCounter({ current, total, label = "Frage" }: Props) {
  const pct = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg border border-gray-200/50 dark:border-gray-700/50">
      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
        {label} {current} von {total}
      </span>
      <div className="w-20 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary-500 rounded-full transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-[10px] text-muted font-mono">{pct}%</span>
    </div>
  );
}
