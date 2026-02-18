import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { useStore } from "@/store/useStore";
import { getSubjectHeats, heatToColor, type SubjectHeat } from "@/lib/memoryHeatmap";
import { pathForSubject } from "@/lib/bmsRoutes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function OrbitRing({
  subjectHeat,
  index,
}: {
  subjectHeat: SubjectHeat;
  index: number;
}) {
  const { heat, label, overdueCount, totalChapters } = subjectHeat;
  const colors = heatToColor(heat);
  const path = pathForSubject(subjectHeat.subject);
  const isUrgent = heat >= 0.75;
  const isEmpty = totalChapters === 0;

  return (
    <Link to={path} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-full">
      <motion.div
        className="relative flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.08, duration: 0.3 }}
      >
        <motion.div
          className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 ${colors.border} ${colors.bg} flex items-center justify-center shadow-lg ${colors.pulse}`}
          animate={isUrgent ? { scale: [1, 1.08, 1], boxShadow: ["0 4px 14px rgba(239,68,68,0.3)", "0 4px 20px rgba(239,68,68,0.5)", "0 4px 14px rgba(239,68,68,0.3)"] } : {}}
          transition={{ duration: 2, repeat: isUrgent ? Infinity : 0, ease: "easeInOut" }}
        >
          <span className={`text-sm sm:text-base font-bold ${colors.text}`}>
            {label.slice(0, 2)}
          </span>
        </motion.div>
        <span className="mt-2 text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
          {label}
        </span>
        {overdueCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold">
            {overdueCount}
          </span>
        )}
        {isEmpty && (
          <span className="text-[10px] text-muted">kein Inhalt</span>
        )}
      </motion.div>
    </Link>
  );
}

export function MemoryHeatmapOrbits() {
  const userProgress = useStore((s) => s.userProgress);
  const heats = getSubjectHeats(userProgress);
  const hasUrgent = heats.some((h) => h.heat >= 0.75);

  return (
    <Card className="border-slate-200 dark:border-slate-800">
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center gap-2">
          <span>Wissenszustand</span>
          {hasUrgent && (
            <span className="flex items-center gap-1 text-xs font-normal text-red-600 dark:text-red-400">
              <AlertCircle className="w-4 h-4" />
              Rette vergessene Inhalte
            </span>
          )}
        </CardTitle>
        <p className="text-xs text-muted mt-0.5">
          Grün = frisch · Gelb = bald wiederholen · Rot = dein Gehirn löscht – rette ihn!
        </p>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="grid grid-cols-4 gap-4 sm:gap-6">
          {heats.map((subjectHeat, i) => (
            <OrbitRing key={subjectHeat.subject} subjectHeat={subjectHeat} index={i} />
          ))}
        </div>
        {hasUrgent && (
          <p className="text-xs text-red-600 dark:text-red-400 mt-3 text-center">
            Ein roter Kreis = Inhalte sind fällig. Kurze Wiederholung hält sie im Gedächtnis.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
