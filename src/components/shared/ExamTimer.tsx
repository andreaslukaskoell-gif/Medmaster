import { useState, useEffect, useRef } from "react";
import { Timer } from "lucide-react";

type ExamTimerProps = {
  totalSeconds: number;
  onTimeUp: () => void;
  paused?: boolean;
};

export function ExamTimer({ totalSeconds, onTimeUp, paused = false }: ExamTimerProps) {
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
  const onTimeUpRef = useRef(onTimeUp);
  const firedRef = useRef(false);

  useEffect(() => {
    onTimeUpRef.current = onTimeUp;
  }, [onTimeUp]);

  useEffect(() => {
    if (paused || secondsLeft <= 0) return;
    const t = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [paused, secondsLeft]);

  useEffect(() => {
    if (secondsLeft <= 0 && !firedRef.current) {
      firedRef.current = true;
      onTimeUpRef.current();
    }
  }, [secondsLeft]);

  const min = Math.floor(secondsLeft / 60);
  const sec = secondsLeft % 60;
  const isWarning = secondsLeft > 0 && secondsLeft <= 120;

  return (
    <div
      className={`fixed top-4 right-4 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full shadow-lg border backdrop-blur-sm font-mono text-sm font-semibold transition-colors ${
        isWarning
          ? "bg-red-50/90 dark:bg-red-950/90 border-red-300 dark:border-red-700 text-red-700 dark:text-red-400 animate-pulse"
          : "bg-[var(--card)]/80 border-[var(--border)]/50 text-[var(--text-primary)]"
      }`}
    >
      <Timer className={`w-4 h-4 ${isWarning ? "text-red-500" : "text-muted"}`} />
      <span>
        {min}:{sec.toString().padStart(2, "0")}
      </span>
    </div>
  );
}
