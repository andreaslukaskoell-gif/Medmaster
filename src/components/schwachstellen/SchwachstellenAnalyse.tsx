import { useMemo } from "react";
import { useStore } from "@/store/useStore";
import { useIsMounted } from "@/hooks/useIsMounted";
import { RadarHexagonSkeleton } from "@/components/skeletons/AppSkeletons";
import { analyzeErrors } from "@/lib/schwachstellenAnalyse";
import { TrendingDown, AlertTriangle, BarChart3 } from "lucide-react";

const STABLE_EMPTY_ARR: never[] = [];

const FACH_COLORS: Record<string, { bar: string; bg: string; ring: string; text: string }> = {
  biologie: { bar: "#10b981", bg: "rgba(16,185,129,0.08)", ring: "#10b981", text: "text-emerald-400" },
  chemie: { bar: "#ef4444", bg: "rgba(239,68,68,0.08)", ring: "#ef4444", text: "text-red-400" },
  physik: { bar: "#3b82f6", bg: "rgba(59,130,246,0.08)", ring: "#3b82f6", text: "text-blue-400" },
  mathematik: { bar: "#8b5cf6", bg: "rgba(139,92,246,0.08)", ring: "#8b5cf6", text: "text-violet-400" },
};

function AccuracyRing({ value, size = 64, stroke = 5, color }: { value: number; size?: number; stroke?: number; color: string }) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;
  return (
    <svg width={size} height={size} className="shrink-0">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={stroke} />
      <circle
        cx={size / 2} cy={size / 2} r={r} fill="none"
        stroke={color} strokeWidth={stroke} strokeLinecap="round"
        strokeDasharray={circ} strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: "stroke-dashoffset 0.8s ease" }}
      />
      <text x={size / 2} y={size / 2} textAnchor="middle" dominantBaseline="central" fill="white" fontSize={size * 0.22} fontWeight={700}>
        {value}%
      </text>
    </svg>
  );
}

export function SchwachstellenAnalyse() {
  const mounted = useIsMounted();
  const quizResults = useStore((s) => s.quizResults ?? STABLE_EMPTY_ARR);

  const analysis = useMemo(() => analyzeErrors(quizResults), [quizResults]);
  const { fachStats, topWeakTopics, totalWrong, totalAnswered, overallAccuracy, actionSentence } = analysis;
  const hasData = totalAnswered > 0;

  return (
    <div className="rounded-2xl overflow-hidden border border-white/[0.06]" style={{ background: "#0c1220" }}>
      {/* Header */}
      <div className="px-6 py-5 border-b border-white/[0.06] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(239,68,68,0.12)" }}>
            <BarChart3 className="w-4.5 h-4.5 text-red-400" />
          </div>
          <div>
            <h2 className="text-[15px] font-semibold text-white tracking-tight">Fehler-Analyse</h2>
            <p className="text-xs text-slate-500 mt-0.5">Leistung nach Fach und Thema</p>
          </div>
        </div>
        {hasData && (
          <div className="flex items-center gap-5 text-xs">
            <div className="text-right">
              <div className="text-slate-500">Beantwortet</div>
              <div className="text-white font-semibold text-sm tabular-nums">{totalAnswered.toLocaleString("de-AT")}</div>
            </div>
            <div className="text-right">
              <div className="text-slate-500">Falsch</div>
              <div className="text-red-400 font-semibold text-sm tabular-nums">{totalWrong.toLocaleString("de-AT")}</div>
            </div>
            <div className="text-right">
              <div className="text-slate-500">Genauigkeit</div>
              <div className={`font-semibold text-sm tabular-nums ${overallAccuracy >= 60 ? "text-emerald-400" : overallAccuracy >= 40 ? "text-amber-400" : "text-red-400"}`}>
                {overallAccuracy}%
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-6">
        {!mounted ? (
          <RadarHexagonSkeleton height={200} className="rounded-xl" />
        ) : !hasData ? (
          <div className="text-center py-10">
            <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ background: "rgba(255,255,255,0.04)" }}>
              <BarChart3 className="w-5 h-5 text-slate-600" />
            </div>
            <p className="text-slate-500 text-sm">Löse BMS-Quizze, um deine Fehler-Analyse zu sehen.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Per-Fach Accuracy Bars */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {fachStats.map((fs) => {
                const fc = FACH_COLORS[fs.fach] ?? FACH_COLORS.biologie;
                const wrongPct = fs.answered > 0 ? (fs.wrong / fs.answered) * 100 : 0;
                return (
                  <div key={fs.fach} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.02)" }}>
                    <div className="flex items-center gap-3 mb-3">
                      <AccuracyRing value={fs.accuracy} size={52} stroke={4} color={fc.ring} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-white">{fs.label}</span>
                          <span className="text-xs text-slate-500 tabular-nums">{fs.answered} Fragen</span>
                        </div>
                        {/* Bar: correct portion (colored) + wrong portion (red) */}
                        <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                          <div
                            className="h-full rounded-full transition-all duration-700"
                            style={{
                              width: `${100 - wrongPct}%`,
                              background: `linear-gradient(90deg, ${fc.bar}, ${fc.bar}88)`,
                            }}
                          />
                        </div>
                        <div className="flex items-center justify-between mt-1.5">
                          <span className="text-[10px] text-slate-500">{fs.wrong} Fehler</span>
                          <span className={`text-[10px] font-medium ${fc.text}`}>{fs.accuracy}% richtig</span>
                        </div>
                      </div>
                    </div>
                    {/* Top weak topics */}
                    {fs.topWeakTopics.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-1 pl-[64px]">
                        {fs.topWeakTopics.map((t) => (
                          <span
                            key={t.label}
                            className="text-[10px] px-2 py-0.5 rounded-full text-slate-400"
                            style={{ background: fc.bg }}
                          >
                            {t.label} <span className="text-slate-500">({t.count})</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Top 5 Weak Topics */}
            {topWeakTopics.length > 0 && (
              <div className="rounded-xl p-4" style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.08)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingDown className="w-3.5 h-3.5 text-red-400" />
                  <span className="text-xs font-medium text-red-400 uppercase tracking-wider">Größte Schwachstellen</span>
                </div>
                <div className="space-y-2">
                  {topWeakTopics.map((t, i) => {
                    const maxCount = topWeakTopics[0].count;
                    const barWidth = maxCount > 0 ? (t.count / maxCount) * 100 : 0;
                    const fc = FACH_COLORS[t.fach] ?? FACH_COLORS.biologie;
                    return (
                      <div key={`${t.fach}-${t.label}`} className="flex items-center gap-3">
                        <span className="text-[10px] font-mono text-slate-600 w-4 text-right">{i + 1}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="text-xs text-slate-300 truncate">{t.label}</span>
                            <span className="text-[10px] text-slate-500 ml-2 shrink-0">{t.fachLabel} · {t.count}×</span>
                          </div>
                          <div className="h-1 rounded-full" style={{ background: "rgba(255,255,255,0.04)" }}>
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{ width: `${barWidth}%`, background: fc.ring }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Action Recommendation */}
            <div className="flex items-start gap-3 rounded-xl p-4" style={{ background: "rgba(251,191,36,0.04)", border: "1px solid rgba(251,191,36,0.1)" }}>
              <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
              <p className="text-sm text-slate-300 leading-relaxed">{actionSentence}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
