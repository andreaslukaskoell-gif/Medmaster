import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { AlertTriangle, TrendingUp, TrendingDown, Target, Lightbulb, Calendar, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useStore } from "@/store/useStore";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { getQuestionSubject } from "@/lib/bmsLookup";
import { daysUntilMedAT } from "@/lib/utils";

interface SubjectData {
  name: string;
  score: number;
  total: number;
  percentage: number;
}

export default function Analysis() {
  const { quizResults } = useStore();

  const subjectData = useMemo(() => {
    const data: Record<string, { correct: number; total: number }> = {};
    quizResults.forEach((r) => {
      r.answers.forEach((a) => {
        const key = (r.type === "bms" ? getQuestionSubject(a.questionId) : null) || r.subject || r.type;
        if (!data[key]) data[key] = { correct: 0, total: 0 };
        data[key].total += 1;
        if (a.correct) data[key].correct += 1;
      });
    });
    return Object.entries(data)
      .map(([name, d]) => ({
        name: name.charAt(0).toUpperCase() + name.slice(1),
        score: d.correct,
        total: d.total,
        percentage: Math.round((d.correct / d.total) * 100),
      }))
      .sort((a, b) => b.percentage - a.percentage);
  }, [quizResults]);

  const radarData = subjectData.map((d) => ({
    subject: d.name.length > 10 ? d.name.slice(0, 10) + "..." : d.name,
    Prozent: d.percentage,
    fullMark: 100,
  }));

  const strengths = subjectData.filter((d) => d.percentage >= 70);
  const weaknesses = subjectData.filter((d) => d.percentage < 50);
  const average = subjectData.filter((d) => d.percentage >= 50 && d.percentage < 70);

  const errorPatterns = useMemo(() => {
    const patterns: { pattern: string; count: number; severity: "warning" | "danger" }[] = [];

    const recentResults = quizResults.slice(-10);
    const recentAvg = recentResults.length > 0
      ? Math.round(recentResults.reduce((s, r) => s + (r.score / r.total) * 100, 0) / recentResults.length)
      : 0;
    const overallAvg = quizResults.length > 0
      ? Math.round(quizResults.reduce((s, r) => s + (r.score / r.total) * 100, 0) / quizResults.length)
      : 0;

    if (recentAvg < overallAvg - 10) {
      patterns.push({ pattern: "Leistungsabfall in letzten Quizzen", count: recentResults.length, severity: "warning" });
    }

    weaknesses.forEach((w) => {
      if (w.total >= 5) {
        patterns.push({ pattern: `Schwäche in ${w.name} (${w.percentage}%)`, count: w.total, severity: "danger" });
      }
    });

    const unanswered = quizResults.reduce((count, r) => count + r.answers.filter((a) => !a.selectedAnswer).length, 0);
    if (unanswered > 3) {
      patterns.push({ pattern: "Häufig unbeantwortete Fragen", count: unanswered, severity: "warning" });
    }

    return patterns;
  }, [quizResults, weaknesses]);

  const recommendations = useMemo(() => {
    const recs: string[] = [];
    if (weaknesses.length > 0) {
      recs.push(`Fokussiere dich auf ${weaknesses.map((w) => w.name).join(", ")} - hier hast du Verbesserungspotenzial.`);
    }
    if (strengths.length > 0) {
      recs.push(`Deine Stärken liegen in ${strengths.map((s) => s.name).join(", ")}. Halte dieses Niveau!`);
    }
    if (quizResults.length < 5) {
      recs.push("Absolviere mehr Quizze, um eine zuverlässigere Analyse zu erhalten.");
    }
    if (quizResults.length >= 10) {
      recs.push("Nutze die Testsimulation, um unter realistischen Bedingungen zu üben.");
    }
    if (recs.length === 0) {
      recs.push("Starte mit Quizzen, um eine personalisierte Analyse zu erhalten.");
    }
    return recs;
  }, [quizResults, strengths, weaknesses]);

  const hasData = quizResults.length > 0;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Breadcrumb items={[{ label: "Dashboard", href: "/" }, { label: "Analyse" }]} />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Stärken/Schwächen-Analyse</h1>
        <p className="text-muted mt-1">Detaillierte Auswertung deiner Leistung nach Fachgebiet.</p>
      </div>

      {!hasData ? (
        <Card>
          <CardContent className="p-12 text-center">
            <Target className="w-12 h-12 text-muted mx-auto mb-3" />
            <p className="text-lg font-medium text-gray-900 dark:text-gray-100">Noch keine Daten vorhanden</p>
            <p className="text-sm text-muted mt-1">
              Absolviere Quizze in BMS, KFF, TV oder SEK, um eine Analyse zu erhalten.
            </p>
          </CardContent>
        </Card>
      ) : (
        <>
          {radarData.length >= 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Kompetenzprofil</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: "#64748b", fontSize: 12 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: "#94a3b8", fontSize: 10 }} />
                    <Tooltip />
                    <Radar
                      name="Leistung"
                      dataKey="Prozent"
                      stroke="#0f766e"
                      fill="#0f766e"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  Stärken
                </CardTitle>
              </CardHeader>
              <CardContent>
                {strengths.length === 0 ? (
                  <p className="text-xs text-muted">Noch keine Stärken identifiziert</p>
                ) : (
                  <div className="space-y-2">
                    {strengths.map((s) => (
                      <div key={s.name} className="flex items-center justify-between">
                        <span className="text-sm text-gray-700 dark:text-gray-300">{s.name}</span>
                        <Badge variant="success">{s.percentage}%</Badge>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Target className="w-4 h-4 text-yellow-500" />
                  Durchschnitt
                </CardTitle>
              </CardHeader>
              <CardContent>
                {average.length === 0 ? (
                  <p className="text-xs text-muted">-</p>
                ) : (
                  <div className="space-y-2">
                    {average.map((s) => (
                      <div key={s.name} className="flex items-center justify-between">
                        <span className="text-sm text-gray-700 dark:text-gray-300">{s.name}</span>
                        <Badge variant="warning">{s.percentage}%</Badge>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-red-500" />
                  Schwächen
                </CardTitle>
              </CardHeader>
              <CardContent>
                {weaknesses.length === 0 ? (
                  <p className="text-xs text-muted">Keine Schwächen identifiziert</p>
                ) : (
                  <div className="space-y-2">
                    {weaknesses.map((s) => (
                      <div key={s.name} className="flex items-center justify-between">
                        <span className="text-sm text-gray-700 dark:text-gray-300">{s.name}</span>
                        <Badge variant="danger">{s.percentage}%</Badge>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Detailauswertung nach Fach</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {subjectData.map((d) => (
                  <div key={d.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{d.name}</span>
                      <span className="text-xs text-muted">
                        {d.score}/{d.total} richtig ({d.percentage}%)
                      </span>
                    </div>
                    <Progress
                      value={d.percentage}
                      className={
                        d.percentage >= 70
                          ? "[&>div]:bg-green-500"
                          : d.percentage >= 50
                            ? "[&>div]:bg-yellow-500"
                            : "[&>div]:bg-red-500"
                      }
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {errorPatterns.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  Erkannte Muster
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {errorPatterns.map((p, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <Badge variant={p.severity === "danger" ? "danger" : "warning"}>
                        {p.severity === "danger" ? "Kritisch" : "Hinweis"}
                      </Badge>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{p.pattern}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Prüfungstag-Prognose */}
          {(() => {
            const store = useAdaptiveStore.getState();
            const readiness = store.getMedATReadiness();
            const days = daysUntilMedAT();
            const { totalQuestionsAnswered, totalCorrect } = store.profile;

            if (totalQuestionsAnswered < 10) return null;

            const faecher = [
              { id: "biologie", label: "Biologie", color: "#10b981" },
              { id: "chemie", label: "Chemie", color: "#ef4444" },
              { id: "physik", label: "Physik", color: "#3b82f6" },
              { id: "mathematik", label: "Mathematik", color: "#8b5cf6" },
            ];

            const fachData = faecher.map((f) => ({
              name: f.label,
              readiness: Math.round(store.getFachReadiness(f.id)),
              fill: f.color,
            }));

            // Simple linear projection: if current rate continues
            const globalRate = totalCorrect / totalQuestionsAnswered;
            const projectedReadiness = Math.min(100, Math.round(readiness + (days * 0.15 * globalRate)));

            // Weak topics that need most attention
            const weakTopics = store.getWeakestTopics(5);

            return (
              <Card className="border-2 border-primary-200 dark:border-primary-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary-600" />
                    Prüfungstag-Prognose
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4 text-center">
                      <p className="text-3xl font-bold text-primary-700 dark:text-primary-400">{readiness}%</p>
                      <p className="text-xs text-muted mt-1">Aktuelle Bereitschaft</p>
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4 text-center">
                      <p className="text-3xl font-bold text-emerald-700 dark:text-emerald-400">{projectedReadiness}%</p>
                      <p className="text-xs text-muted mt-1">Prognose am Prüfungstag</p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 text-center">
                      <p className="text-3xl font-bold text-orange-700 dark:text-orange-400">{days}</p>
                      <p className="text-xs text-muted mt-1">Tage bis MedAT</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Bereitschaft nach Fach</p>
                    <ResponsiveContainer width="100%" height={180}>
                      <BarChart data={fachData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                        <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 11 }} />
                        <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={90} />
                        <Tooltip formatter={(v) => [`${v}%`, "Bereitschaft"]} />
                        <Bar dataKey="readiness" radius={[0, 4, 4, 0]} barSize={20} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {weakTopics.length > 0 && (
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Prioritäre Themen zum Verbessern</p>
                      <div className="space-y-1.5">
                        {weakTopics.map((t) => (
                          <Link key={t.stichwortId} to={`/schwachstellen?stichwort=${t.stichwortId}`} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <div className="flex items-center gap-2 min-w-0">
                              <Zap className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                              <span className="text-sm text-gray-700 dark:text-gray-300 truncate">{t.thema}</span>
                              <span className="text-[10px] text-muted">({t.fach})</span>
                            </div>
                            <Badge variant={t.rate < 30 ? "danger" : "warning"} className="text-xs shrink-0">{t.rate}%</Badge>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })()}

          {/* Lern-Trend der letzten 7 Tage */}
          {(() => {
            const last7Days = [];
            for (let i = 6; i >= 0; i--) {
              const d = new Date();
              d.setDate(d.getDate() - i);
              const dateStr = d.toLocaleDateString("de-AT", { weekday: "short", day: "numeric" });
              const isoDate = d.toISOString().split("T")[0];
              const dayResults = quizResults.filter((r) => r.timestamp?.startsWith(isoDate));
              const total = dayResults.reduce((s, r) => s + r.total, 0);
              const correct = dayResults.reduce((s, r) => s + r.score, 0);
              last7Days.push({
                tag: dateStr,
                fragen: total,
                richtig: correct,
                quote: total > 0 ? Math.round((correct / total) * 100) : 0,
              });
            }

            const hasAnyActivity = last7Days.some((d) => d.fragen > 0);
            if (!hasAnyActivity) return null;

            return (
              <Card>
                <CardHeader>
                  <CardTitle>Lern-Trend (letzte 7 Tage)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={last7Days}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="tag" tick={{ fontSize: 11 }} />
                      <YAxis tick={{ fontSize: 11 }} />
                      <Tooltip />
                      <Bar dataKey="fragen" name="Fragen" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="richtig" name="Richtig" fill="#10b981" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            );
          })()}

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                Empfehlungen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {recommendations.map((rec, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-primary-700 dark:text-primary-400 font-bold text-sm mt-0.5">{i + 1}.</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{rec}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
