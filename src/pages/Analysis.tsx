import { useMemo } from "react";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { AlertTriangle, TrendingUp, TrendingDown, Target, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useStore } from "@/store/useStore";
import { getQuestionSubject } from "@/lib/bmsLookup";

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
