import { useMemo } from "react";
import { Treemap, ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from "recharts";
import { useStore } from "@/store/useStore";
import { useIsMounted } from "@/hooks/useIsMounted";
import { RadarHexagonSkeleton } from "@/components/skeletons/AppSkeletons";
import {
  aggregateWrongAnswersByTopic,
  getRootCauseDistribution,
  buildTreemapData,
  buildDonutData,
  buildActionSentence,
} from "@/lib/schwachstellenAnalyse";

const MIDNIGHT = "#0f172a";
const NEON_RED = "#ff3366";
const NEON_RED_DIM = "rgba(255, 51, 102, 0.7)";
const SLATE_700 = "#334155";
const SLATE_500 = "#64748b";

const DONUT_COLORS = ["#f43f5e", "#fb923c"]; // Wissenslücke = rot, Flüchtigkeit = orange (kritisch)

/** Treemap-Farben: je mehr Fehler, desto eher neon-rot */
function getTreemapFill(value: number, maxValue: number): string {
  if (maxValue <= 0) return SLATE_700;
  const ratio = value / maxValue;
  if (ratio >= 0.6) return NEON_RED;
  if (ratio >= 0.3) return NEON_RED_DIM;
  return SLATE_700;
}

export function SchwachstellenAnalyse() {
  const mounted = useIsMounted();
  const quizResults = useStore((s) => s.quizResults);

  const { treemapRoot, donutData, actionSentence, totalWrong, totalAnswered } = useMemo(() => {
    const {
      bySubjectTopic,
      totalWrong: tw,
      totalAnswered: ta,
    } = aggregateWrongAnswersByTopic(quizResults);
    const rootCause = getRootCauseDistribution(tw);
    const treemapNodes = buildTreemapData(bySubjectTopic);
    const maxValue = Math.max(0, ...treemapNodes.map((n) => n.value));
    const treemapRoot = {
      name: "Fehler",
      children: treemapNodes.map((n) => ({
        ...n,
        children: n.children?.map((c) => ({
          ...c,
          fill: getTreemapFill(c.value, maxValue),
        })),
        fill: n.children?.length ? SLATE_700 : getTreemapFill(n.value, maxValue),
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
      className="rounded-2xl overflow-hidden border border-slate-700/50"
      style={{ background: MIDNIGHT }}
    >
      <div className="p-5 border-b border-slate-700/50">
        <h2 className="text-lg font-bold text-white">Fehler-Analyse</h2>
        <p className="text-sm text-slate-400 mt-0.5">
          Wo du die meisten Fehler machst (Größe = Anzahl) · Root-Cause-Verteilung
        </p>
      </div>

      <div className="p-5 space-y-6">
        {!mounted ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RadarHexagonSkeleton height={280} className="rounded-xl" />
            </div>
            <div className="h-[280px] rounded-xl overflow-hidden bg-slate-900/50 skeleton-shimmer animate-pulse" />
          </div>
        ) : !hasData ? (
          <p className="text-slate-400 text-sm text-center py-8">
            Noch keine BMS-Quizze absolviert. Sobald Fehler vorliegen, siehst du hier Treemap und
            Empfehlung.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Treemap: Fehler nach Fach/Thema */}
              <div className="lg:col-span-2 h-[280px] rounded-xl overflow-hidden bg-slate-900/50">
                {totalWrong > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <Treemap
                      data={[treemapRoot]}
                      dataKey="value"
                      nameKey="name"
                      aspectRatio={1.6}
                      stroke={SLATE_700}
                      content={({ x, y, width, height, name, value, fill, depth }) => {
                        if (depth === 0 || width < 30 || height < 20) return <g />;
                        return (
                          <g>
                            <rect
                              x={x}
                              y={y}
                              width={width}
                              height={height}
                              fill={typeof fill === "string" ? fill : SLATE_700}
                              stroke={
                                typeof fill === "string" && fill === NEON_RED ? NEON_RED : SLATE_700
                              }
                              strokeWidth={fill === NEON_RED ? 2 : 1}
                              rx={4}
                            />
                            <text
                              x={x + width / 2}
                              y={y + height / 2 - 6}
                              textAnchor="middle"
                              fill="white"
                              fontSize={Math.min(12, width / 8)}
                              fontWeight={fill === NEON_RED ? "bold" : "normal"}
                            >
                              {name}
                            </text>
                            <text
                              x={x + width / 2}
                              y={y + height / 2 + 8}
                              textAnchor="middle"
                              fill={SLATE_500}
                              fontSize={10}
                            >
                              {value} Fehler
                            </text>
                          </g>
                        );
                      }}
                    >
                      <Tooltip
                        contentStyle={{
                          background: SLATE_700,
                          border: `1px solid ${SLATE_500}`,
                          borderRadius: 8,
                        }}
                        labelStyle={{ color: "white" }}
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
              <div className="h-[280px] flex flex-col items-center justify-center">
                <div className="w-full max-w-[220px] h-[220px]">
                  {totalWrong > 0 && donutData.length > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={donutData}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={2}
                          stroke={MIDNIGHT}
                          strokeWidth={2}
                        >
                          {donutData.map((_, i) => (
                            <Cell key={i} fill={DONUT_COLORS[i % DONUT_COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            background: SLATE_700,
                            border: `1px solid ${SLATE_500}`,
                            borderRadius: 8,
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
                <p className="text-xs text-slate-500 mt-2 text-center">
                  Wissenslücke vs. Flüchtigkeit
                </p>
              </div>
            </div>

            {/* Handlungsempfehlung */}
            <div
              className="rounded-xl p-4 border"
              style={{
                background: "rgba(255, 51, 102, 0.08)",
                borderColor: "rgba(255, 51, 102, 0.35)",
              }}
            >
              <p className="text-sm font-medium text-white leading-relaxed">{actionSentence}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
