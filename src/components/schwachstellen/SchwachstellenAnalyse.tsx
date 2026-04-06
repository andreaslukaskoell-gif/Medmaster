import { useMemo } from "react";
import { Treemap, ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from "recharts";
import { useStore } from "@/store/useStore";
import { useIsMounted } from "@/hooks/useIsMounted";

const STABLE_EMPTY_ARR: never[] = [];
import { RadarHexagonSkeleton } from "@/components/skeletons/AppSkeletons";
import {
  aggregateWrongAnswersByTopic,
  getRootCauseDistribution,
  buildTreemapData,
  buildDonutData,
  buildActionSentence,
} from "@/lib/schwachstellenAnalyse";

const MIDNIGHT = "#0f172a";
const SLATE_800 = "#1e293b";
const SLATE_600 = "#475569";
const SLATE_500 = "#64748b";

const DONUT_COLORS = ["#f43f5e", "#fb923c"];

/** Continuous color scale: low errors = slate, high errors = warm red */
function getTreemapFill(value: number, maxValue: number): string {
  if (maxValue <= 0) return SLATE_800;
  const ratio = value / maxValue;
  if (ratio >= 0.7) return "#e11d48"; // rose-600
  if (ratio >= 0.5) return "#f43f5e"; // rose-500
  if (ratio >= 0.3) return "#fb7185"; // rose-400
  if (ratio >= 0.15) return "#6366f1"; // indigo-500
  return "#475569"; // slate-600
}

export function SchwachstellenAnalyse() {
  const mounted = useIsMounted();
  const quizResults = useStore((s) => s.quizResults ?? STABLE_EMPTY_ARR);

  const { treemapRoot, donutData, actionSentence, totalWrong, totalAnswered } = useMemo(() => {
    const {
      bySubjectTopic,
      totalWrong: tw,
      totalAnswered: ta,
    } = aggregateWrongAnswersByTopic(quizResults);
    const rootCause = getRootCauseDistribution(tw);
    const treemapNodes = buildTreemapData(bySubjectTopic);
    const maxValue = Math.max(0, ...treemapNodes.flatMap((n) => n.children?.map((c) => c.value) ?? [n.value]));
    const treemapRoot = {
      name: "Fehler",
      children: treemapNodes.map((n) => ({
        ...n,
        children: n.children?.map((c) => ({
          ...c,
          fill: getTreemapFill(c.value, maxValue),
        })),
        fill: n.children?.length ? SLATE_800 : getTreemapFill(n.value, maxValue),
      })),
    };
    const donutData = buildDonutData(rootCause);
    const actionSentence = buildActionSentence(rootCause, ta, bySubjectTopic);
    return {
      treemapRoot,
      donutData,
      actionSentence,
      totalWrong: tw,
      totalAnswered: ta,
    };
  }, [quizResults]);

  const hasData = totalWrong > 0 || totalAnswered > 0;

  return (
    <div
      className="rounded-2xl overflow-hidden border border-[var(--border)]/50"
      style={{ background: MIDNIGHT }}
    >
      <div className="p-5 border-b border-white/5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white">Fehler-Analyse</h2>
            <p className="text-sm text-slate-400 mt-0.5">
              Wo du die meisten Fehler machst (Größe = Anzahl) · Root-Cause-Verteilung
            </p>
          </div>
          {hasData && (
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span>
                <strong className="text-white">{totalAnswered}</strong> beantwortet
              </span>
              <span>
                <strong className="text-rose-400">{totalWrong}</strong> falsch
              </span>
              <span>
                <strong className="text-emerald-400">
                  {totalAnswered > 0 ? Math.round(((totalAnswered - totalWrong) / totalAnswered) * 100) : 0}%
                </strong>{" "}
                richtig
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="p-5 space-y-5">
        {!mounted ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RadarHexagonSkeleton height={280} className="rounded-xl" />
            </div>
            <div className="h-[280px] rounded-xl overflow-hidden bg-white/5 skeleton-shimmer animate-pulse" />
          </div>
        ) : !hasData ? (
          <p className="text-slate-500 text-sm text-center py-8">
            Noch keine BMS-Quizze absolviert. Sobald Fehler vorliegen, siehst du hier Treemap und
            Empfehlung.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Treemap: Fehler nach Fach/Thema */}
              <div className="lg:col-span-2 h-[300px] rounded-xl overflow-hidden" style={{ background: SLATE_800 + "40" }}>
                {totalWrong > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <Treemap
                      data={[treemapRoot]}
                      dataKey="value"
                      nameKey="name"
                      aspectRatio={1.6}
                      stroke={MIDNIGHT}
                      content={({ x, y, width, height, name, value, fill, depth }) => {
                        if (depth === 0) return <g />;

                        const tooSmall = width < 50 || height < 28;
                        const fontSize = Math.min(11, Math.max(8, width / 10));
                        const maxChars = Math.floor(width / (fontSize * 0.55));
                        const displayName =
                          name && name.length > maxChars
                            ? name.slice(0, maxChars - 1) + "…"
                            : name;

                        return (
                          <g>
                            <rect
                              x={x}
                              y={y}
                              width={width}
                              height={height}
                              fill={typeof fill === "string" ? fill : SLATE_800}
                              stroke={MIDNIGHT}
                              strokeWidth={2}
                              rx={4}
                            />
                            {!tooSmall && (
                              <>
                                <text
                                  x={x + width / 2}
                                  y={y + height / 2 - (height > 44 ? 7 : 0)}
                                  textAnchor="middle"
                                  dominantBaseline="central"
                                  fill="white"
                                  fontSize={fontSize}
                                  fontWeight={600}
                                >
                                  {displayName}
                                </text>
                                {height > 44 && (
                                  <text
                                    x={x + width / 2}
                                    y={y + height / 2 + 10}
                                    textAnchor="middle"
                                    fill={SLATE_500}
                                    fontSize={9}
                                  >
                                    {value} Fehler
                                  </text>
                                )}
                              </>
                            )}
                          </g>
                        );
                      }}
                    >
                      <Tooltip
                        contentStyle={{
                          background: SLATE_800,
                          border: `1px solid ${SLATE_600}`,
                          borderRadius: 8,
                          fontSize: 12,
                        }}
                        labelStyle={{ color: "white", fontWeight: 600 }}
                        formatter={(value?: number) => [`${value ?? 0} Fehler`, ""]}
                        labelFormatter={(label: unknown) =>
                          typeof label === "string" ? label : String(label ?? "")
                        }
                      />
                    </Treemap>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-full flex items-center justify-center text-slate-500 text-sm">
                    Noch keine Fehler in BMS-Quizzen
                  </div>
                )}
              </div>

              {/* Donut: Wissenslücke vs. Flüchtigkeit */}
              <div className="h-[300px] flex flex-col items-center justify-center rounded-xl" style={{ background: SLATE_800 + "40" }}>
                <div className="w-full max-w-[200px] h-[200px]">
                  {totalWrong > 0 && donutData.length > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={donutData}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          innerRadius={55}
                          outerRadius={80}
                          paddingAngle={3}
                          stroke={MIDNIGHT}
                          strokeWidth={3}
                        >
                          {donutData.map((_, i) => (
                            <Cell key={i} fill={DONUT_COLORS[i % DONUT_COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            background: SLATE_800,
                            border: `1px solid ${SLATE_600}`,
                            borderRadius: 8,
                            fontSize: 12,
                          }}
                          formatter={(value?: number, name?: string) => [
                            `${value ?? 0} (${totalWrong > 0 ? Math.round(((value ?? 0) / totalWrong) * 100) : 0}%)`,
                            name ?? "",
                          ]}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="h-full flex items-center justify-center text-slate-500 text-sm">
                      —
                    </div>
                  )}
                </div>
                {/* Legend */}
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="text-xs text-slate-400">Wissenslücke</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-400" />
                    <span className="text-xs text-slate-400">Flüchtigkeit</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Handlungsempfehlung */}
            <div
              className="rounded-xl p-4 border"
              style={{
                background: "rgba(255, 51, 102, 0.06)",
                borderColor: "rgba(255, 51, 102, 0.2)",
              }}
            >
              <p className="text-sm font-medium text-slate-200 leading-relaxed">
                {actionSentence}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
