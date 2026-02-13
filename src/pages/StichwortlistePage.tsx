import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Atom,
  Zap,
  Calculator,
  CheckCircle2,
  AlertCircle,
  Clock,
  Search,
  Sparkles,
  ChevronRight,
  BarChart3,
  Target,
  Filter,
  Play,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import {
  alleStichworteListe,
  getStichworteByFach,
  getAbdeckungsStatistik,
  fachConfig,
  type Stichwort,
} from "@/data/stichwortliste";
import { useStore } from "@/store/useStore";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { getQuestionSubject } from "@/lib/bmsLookup";
import { allBmsQuestions } from "@/data/bms";

const tabs = [
  { id: "alle" as const, label: "Alle", icon: BookOpen },
  { id: "biologie" as const, label: "Biologie", icon: BookOpen },
  { id: "chemie" as const, label: "Chemie", icon: Atom },
  { id: "physik" as const, label: "Physik", icon: Zap },
  { id: "mathematik" as const, label: "Mathematik", icon: Calculator },
] as const;

const fachColors: Record<string, { bg: string; text: string; border: string; progress: string; badge: string }> = {
  biologie: { bg: "bg-emerald-50 dark:bg-emerald-900/20", text: "text-emerald-700 dark:text-emerald-400", border: "border-emerald-500", progress: "bg-emerald-500", badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300" },
  chemie: { bg: "bg-red-50 dark:bg-red-900/20", text: "text-red-700 dark:text-red-400", border: "border-red-500", progress: "bg-red-500", badge: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300" },
  physik: { bg: "bg-blue-50 dark:bg-blue-900/20", text: "text-blue-700 dark:text-blue-400", border: "border-blue-500", progress: "bg-blue-500", badge: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300" },
  mathematik: { bg: "bg-violet-50 dark:bg-violet-900/20", text: "text-violet-700 dark:text-violet-400", border: "border-violet-500", progress: "bg-violet-500", badge: "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300" },
};

function getStatusForStichwort(
  sw: Stichwort,
  quizResults: ReturnType<typeof useStore.getState>["quizResults"]
): { status: "gelernt" | "in-bearbeitung" | "nicht-begonnen"; successRate: number; questionCount: number; lastPracticed: string | null } {
  // Count questions linked to this stichwort
  const linkedQuestions = allBmsQuestions.filter(
    (q) =>
      q.subject === sw.fach &&
      sw.linkedQuestionTags?.some((tag) => q.tags?.includes(tag))
  );
  const questionCount = linkedQuestions.length;

  // Compute success rate from quiz results
  let correct = 0;
  let total = 0;
  let lastPracticed: string | null = null;

  for (const r of quizResults) {
    if (r.type !== "bms") continue;
    for (const a of r.answers) {
      const qSubj = getQuestionSubject(a.questionId);
      if (qSubj !== sw.fach) continue;
      const q = allBmsQuestions.find((bq) => bq.id === a.questionId);
      if (!q) continue;
      const isLinked = sw.linkedQuestionTags?.some((tag) => q.tags?.includes(tag));
      if (!isLinked) continue;
      total++;
      if (a.correct) correct++;
      if (!lastPracticed || r.date > lastPracticed) lastPracticed = r.date;
    }
  }

  const successRate = total > 0 ? Math.round((correct / total) * 100) : 0;
  const status: "gelernt" | "in-bearbeitung" | "nicht-begonnen" =
    total === 0 ? "nicht-begonnen" : successRate >= 70 ? "gelernt" : "in-bearbeitung";

  return { status, successRate, questionCount, lastPracticed };
}

export default function StichwortlistePage() {
  const [activeTab, setActiveTab] = useState<string>("alle");
  const [searchQuery, setSearchQuery] = useState("");
  const [priorityFilter, setPriorityFilter] = useState<string>("alle");
  const { quizResults } = useStore();
  const { profile: adaptiveProfile } = useAdaptiveStore();

  const filteredStichworte = useMemo(() => {
    let list =
      activeTab === "alle"
        ? alleStichworteListe
        : getStichworteByFach(activeTab as Stichwort["fach"]);

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (s) =>
          s.thema.toLowerCase().includes(q) ||
          s.kapitel.toLowerCase().includes(q) ||
          s.unterthemen.some((u) => u.toLowerCase().includes(q))
      );
    }

    if (priorityFilter !== "alle") {
      list = list.filter((s) => s.prioritaet === priorityFilter);
    }

    return list;
  }, [activeTab, searchQuery, priorityFilter]);

  const stats = useMemo(() => {
    if (activeTab === "alle") return getAbdeckungsStatistik();
    return getAbdeckungsStatistik(activeTab as Stichwort["fach"]);
  }, [activeTab]);

  const fachStats = useMemo(() => {
    return (["biologie", "chemie", "physik", "mathematik"] as const).map((fach) => ({
      fach,
      ...getAbdeckungsStatistik(fach),
      config: fachConfig[fach],
    }));
  }, []);

  const stichwortStatuses = useMemo(() => {
    const map = new Map<string, ReturnType<typeof getStatusForStichwort>>();
    for (const sw of filteredStichworte) {
      map.set(sw.id, getStatusForStichwort(sw, quizResults));
    }
    return map;
  }, [filteredStichworte, quizResults]);

  const statusCounts = useMemo(() => {
    let gelernt = 0,
      inBearbeitung = 0,
      nichtBegonnen = 0;
    for (const st of stichwortStatuses.values()) {
      if (st.status === "gelernt") gelernt++;
      else if (st.status === "in-bearbeitung") inBearbeitung++;
      else nichtBegonnen++;
    }
    return { gelernt, inBearbeitung, nichtBegonnen };
  }, [stichwortStatuses]);

  // Group by kapitel
  const grouped = useMemo(() => {
    const map = new Map<string, Stichwort[]>();
    for (const sw of filteredStichworte) {
      const key = `${sw.fach}-${sw.kapitelNr}-${sw.kapitel}`;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(sw);
    }
    return Array.from(map.entries()).map(([key, items]) => ({
      key,
      fach: items[0].fach,
      kapitelNr: items[0].kapitelNr,
      kapitel: items[0].kapitel,
      items,
    }));
  }, [filteredStichworte]);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <Breadcrumb items={[{ label: "BMS", href: "/bms" }, { label: "Stichwortliste" }]} />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          BMS-Stichwortliste 2025/2026
        </h1>
        <p className="text-muted mt-1">
          Offizielle Prüfungsthemen mit Lernfortschritt-Tracking
        </p>
      </div>

      {/* Abdeckungs-Dashboard */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {fachStats.map((fs) => {
          const colors = fachColors[fs.fach];
          return (
            <Card
              key={fs.fach}
              className={`cursor-pointer transition-all hover:shadow-md ${
                activeTab === fs.fach ? `ring-2 ring-offset-1 ${colors.border.replace("border-", "ring-")}` : ""
              }`}
              onClick={() => setActiveTab(fs.fach)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm font-semibold ${colors.text}`}>
                    {fs.config.label}
                  </span>
                  <span className={`text-xs font-bold ${colors.text}`}>{fs.prozent}%</span>
                </div>
                <Progress value={fs.prozent} className="h-2" />
                <p className="text-xs text-muted mt-1.5">
                  {fs.abgedeckt}/{fs.total} Stichworte
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Gesamt-Statistik */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-primary-600" />
              <span className="font-medium">{stats.total} Stichworte gesamt</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>{statusCounts.gelernt} gelernt</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-500" />
              <span>{statusCounts.inBearbeitung} in Bearbeitung</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-gray-400" />
              <span>{statusCounts.nichtBegonnen} nicht begonnen</span>
            </div>
            {stats.neu2026 > 0 && (
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-500" />
                <span className="text-purple-700 dark:text-purple-400 font-medium">
                  {stats.neu2026} NEU 2026
                </span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Tabs + Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex gap-1 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex gap-2 flex-1">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Stichwort suchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm"
            />
          </div>
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm cursor-pointer"
          >
            <option value="alle">Alle Prioritäten</option>
            <option value="hoch">Hoch</option>
            <option value="mittel">Mittel</option>
            <option value="niedrig">Niedrig</option>
          </select>
        </div>
      </div>

      {/* Stichwort-Liste gruppiert nach Kapitel */}
      <div className="space-y-6">
        {grouped.map((group) => {
          const colors = fachColors[group.fach];
          return (
            <div key={group.key}>
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${colors.badge}`}>
                  {fachConfig[group.fach as keyof typeof fachConfig]?.label}
                </span>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {group.kapitelNr}. {group.kapitel}
                </h3>
              </div>

              <div className="space-y-2">
                {group.items.map((sw) => {
                  const st = stichwortStatuses.get(sw.id)!;
                  const isWeak = st.status === "in-bearbeitung" && st.successRate < 60;

                  return (
                    <Card
                      key={sw.id}
                      className={`border-l-4 ${colors.border} ${
                        isWeak ? "ring-1 ring-red-300 dark:ring-red-800" : ""
                      }`}
                    >
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                                {sw.thema}
                              </span>
                              {sw.neu2026 && (
                                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300">
                                  <Sparkles className="w-3 h-3" /> NEU 2026
                                </span>
                              )}
                              {sw.prioritaet === "hoch" && (
                                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300">
                                  PRÜFUNGSRELEVANT
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-muted mt-1 truncate">
                              {sw.unterthemen.join(" · ")}
                            </p>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            {st.questionCount > 0 && (
                              <span className="text-xs text-muted hidden sm:inline">
                                {st.questionCount} Fragen
                              </span>
                            )}
                            {(() => {
                              const as = adaptiveProfile.stichwortStats[sw.id];
                              if (as && as.totalAttempts >= 3) {
                                return (
                                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                                    as.confidence === "sicher"
                                      ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
                                      : as.confidence === "unsicher"
                                        ? "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300"
                                        : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                                  }`}>
                                    {as.confidence === "sicher" ? "Sicher" : as.confidence === "unsicher" ? "Unsicher" : "?"}
                                  </span>
                                );
                              }
                              return null;
                            })()}
                            {st.status === "gelernt" && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
                                <CheckCircle2 className="w-3 h-3" /> {st.successRate}%
                              </span>
                            )}
                            {st.status === "in-bearbeitung" && (
                              <span
                                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                                  isWeak
                                    ? "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300"
                                    : "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300"
                                }`}
                              >
                                {isWeak ? (
                                  <AlertCircle className="w-3 h-3" />
                                ) : (
                                  <Clock className="w-3 h-3" />
                                )}
                                {st.successRate}%
                              </span>
                            )}
                            {st.status === "nicht-begonnen" && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                                Offen
                              </span>
                            )}
                            {st.questionCount > 0 && (
                              <Link
                                to={`/schwachstellen?stichwort=${sw.id}`}
                                className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors"
                              >
                                <Play className="w-3 h-3" /> Üben
                              </Link>
                            )}
                          </div>
                        </div>

                        {st.lastPracticed && (
                          <p className="text-[10px] text-muted mt-1">
                            Zuletzt geübt: {st.lastPracticed}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          );
        })}

        {grouped.length === 0 && (
          <div className="text-center py-12 text-muted">
            <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p>Keine Stichworte gefunden.</p>
          </div>
        )}
      </div>
    </div>
  );
}
