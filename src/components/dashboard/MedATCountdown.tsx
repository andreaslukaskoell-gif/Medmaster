import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { daysUntilMedAT, getMedATProgressFromJan2026 } from "@/lib/utils";

const TARGET_LABEL = "03.07.2026";

export function MedATCountdown() {
  const days = daysUntilMedAT();
  const { progress } = getMedATProgressFromJan2026();

  return (
    <div className="card-glass rounded-2xl border border-[var(--border)] p-6 sm:p-8 shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
            <Clock className="w-7 h-7 text-[var(--accent)]" />
          </div>
          <div>
            <p className="text-sm font-medium text-[var(--muted)]">MedAT Countdown</p>
            <p className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] tabular-nums tracking-tight">
              {days}
            </p>
            <p className="text-sm text-[var(--text-secondary)]">
              Tage bis zum MedAT ({TARGET_LABEL})
            </p>
          </div>
        </div>
        <div className="w-full sm:w-80 shrink-0">
          <div className="flex justify-between text-xs text-[var(--muted)] mb-2">
            <span>01.01.2026 → 03.07.2026</span>
            <span className="font-medium">{Math.round(progress * 100)}%</span>
          </div>
          <div className="w-full h-2.5 bg-[var(--border)] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[var(--accent)] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
