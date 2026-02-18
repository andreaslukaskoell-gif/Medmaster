import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { daysUntilMedAT, getMedATProgressFromJan2026 } from "@/lib/utils";

const TARGET_LABEL = "03.07.2026";

export function MedATCountdown() {
  const days = daysUntilMedAT();
  const { progress } = getMedATProgressFromJan2026();

  return (
    <div className="card-glass rounded-2xl border border-slate-200/80 dark:border-slate-700/50 p-6 sm:p-8 shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#007AFF]/10 dark:bg-[#007AFF]/20 flex items-center justify-center shrink-0">
            <Clock className="w-7 h-7 text-[#007AFF] dark:text-primary-400" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">MedAT Countdown</p>
            <p className="text-4xl sm:text-5xl font-bold text-[#1e293b] dark:text-slate-100 tabular-nums tracking-tight">
              {days}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Tage bis zum MedAT ({TARGET_LABEL})</p>
          </div>
        </div>
        <div className="w-full sm:w-80 shrink-0">
          <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
            <span>01.01.2026 → 03.07.2026</span>
            <span className="font-medium">{Math.round(progress * 100)}%</span>
          </div>
          <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#007AFF] dark:bg-primary-500 rounded-full"
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
