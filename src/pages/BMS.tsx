import { useState } from "react";
import {
  Dna,
  Atom,
  Zap,
  Calculator,
  BookOpen,
  Play,
  CheckCircle2,
  Clock,
  ChevronRight,
  Shuffle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { getKapitelBySubject, alleKapitel } from "@/data/bmsKapitel";
import type { Kapitel } from "@/data/bmsKapitel/types";
import { useStore } from "@/store/useStore";
import BMSKapitelView from "./BMSKapitelView";
import BMSQuiz from "./BMSQuiz";

const subjects = [
  { id: "biologie", label: "Biologie", icon: Dna, color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400", active: "bg-emerald-600 hover:bg-emerald-700", progress: "bg-emerald-500", border: "border-l-emerald-500" },
  { id: "chemie", label: "Chemie", icon: Atom, color: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400", active: "bg-red-600 hover:bg-red-700", progress: "bg-red-500", border: "border-l-red-500" },
  { id: "physik", label: "Physik", icon: Zap, color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400", active: "bg-blue-600 hover:bg-blue-700", progress: "bg-blue-500", border: "border-l-blue-500" },
  { id: "mathematik", label: "Mathematik", icon: Calculator, color: "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400", active: "bg-violet-600 hover:bg-violet-700", progress: "bg-violet-500", border: "border-l-violet-500" },
] as const;

export default function BMS() {
  const [activeSubject, setActiveSubject] = useState<string>("biologie");
  const [activeKapitel, setActiveKapitel] = useState<Kapitel | null>(null);
  const [quizSubject, setQuizSubject] = useState<string | null>(null);
  const [mixedQuestionCount, setMixedQuestionCount] = useState<number | null>(null);
  const { completedChapters } = useStore();

  if (activeKapitel) {
    return <BMSKapitelView kapitel={activeKapitel} onBack={() => setActiveKapitel(null)} />;
  }

  if (quizSubject) {
    return (
      <BMSQuiz
        subject={quizSubject}
        onBack={() => { setQuizSubject(null); setMixedQuestionCount(null); }}
        questionCount={mixedQuestionCount ?? undefined}
      />
    );
  }

  const kapitel = getKapitelBySubject(activeSubject);

  // Count total unterkapitel across all subjects
  const totalUK = alleKapitel.reduce((sum, k) => sum + k.unterkapitel.length, 0);
  const completedUK = alleKapitel.reduce(
    (sum, k) => sum + k.unterkapitel.filter((u) => completedChapters.includes(u.id)).length,
    0
  );

  // Count for active subject
  const subjectUK = kapitel.reduce((sum, k) => sum + k.unterkapitel.length, 0);
  const subjectCompletedUK = kapitel.reduce(
    (sum, k) => sum + k.unterkapitel.filter((u) => completedChapters.includes(u.id)).length,
    0
  );

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Breadcrumb items={[{ label: "Dashboard", href: "/" }, { label: "BMS" }]} />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">BMS - Basiskenntnistest</h1>
        <p className="text-muted mt-1">
          {alleKapitel.length} Kapitel mit {totalUK} Unterkapiteln.{" "}
          <span className="text-primary-700 dark:text-primary-400 font-medium">
            {completedUK}/{totalUK} abgeschlossen
          </span>
        </p>
      </div>

      {/* Subject tabs */}
      <div className="flex gap-2 flex-wrap">
        {subjects.map((s) => {
          const sKapitel = getKapitelBySubject(s.id);
          const sTotal = sKapitel.reduce((sum, k) => sum + k.unterkapitel.length, 0);
          const sDone = sKapitel.reduce(
            (sum, k) => sum + k.unterkapitel.filter((u) => completedChapters.includes(u.id)).length,
            0
          );
          return (
            <button
              key={s.id}
              onClick={() => setActiveSubject(s.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                activeSubject === s.id
                  ? `${s.active} text-white`
                  : "bg-white dark:bg-gray-900 border border-border dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              <s.icon className="w-4 h-4" />
              {s.label}
              {sDone > 0 && (
                <span className={`text-xs ${activeSubject === s.id ? "text-white/70" : "text-muted"}`}>
                  {sDone}/{sTotal}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Subject progress */}
      {subjectUK > 0 && (
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-muted">
            <span>{subjects.find((s) => s.id === activeSubject)?.label}</span>
            <span>{subjectCompletedUK}/{subjectUK} Unterkapitel</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className={`${subjects.find((s) => s.id === activeSubject)?.progress || "bg-primary-600"} h-2 rounded-full transition-all`}
              style={{ width: `${(subjectCompletedUK / subjectUK) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Kapitel list */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary-700 dark:text-primary-400" />
          Theorie-Kapitel
        </h2>
        {kapitel.map((kap) => {
          const ukTotal = kap.unterkapitel.length;
          const ukDone = kap.unterkapitel.filter((u) => completedChapters.includes(u.id)).length;
          const isCompleted = completedChapters.includes(kap.id) || ukDone === ukTotal;
          const progress = ukTotal > 0 ? (ukDone / ukTotal) * 100 : 0;

          return (
            <Card
              key={kap.id}
              className={`hover:shadow-md transition-shadow cursor-pointer border-l-4 ${subjects.find((s) => s.id === activeSubject)?.border || ""}`}
              onClick={() => setActiveKapitel(kap)}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl shrink-0">{kap.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-gray-900 dark:text-gray-100">{kap.title}</h3>
                      {isCompleted && <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />}
                    </div>
                    <div className="flex items-center gap-3 mt-1 text-xs text-muted">
                      <span>{ukTotal} Unterkapitel</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {kap.estimatedTime}
                      </span>
                      <span className="text-primary-600 dark:text-primary-400 font-medium">
                        {ukDone}/{ukTotal}
                      </span>
                    </div>
                    {/* Mini progress bar */}
                    {ukDone > 0 && !isCompleted && (
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-2">
                        <div
                          className={`${subjects.find((s) => s.id === activeSubject)?.progress || "bg-primary-500"} h-1.5 rounded-full transition-all`}
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    )}
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted shrink-0" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quiz card */}
      <Card>
        <CardContent className="p-5 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">
              {subjects.find((s) => s.id === activeSubject)?.label}-Quiz
            </h3>
            <p className="text-sm text-muted">Teste dein Wissen mit Übungsfragen</p>
          </div>
          <Button onClick={() => setQuizSubject(activeSubject)}>
            <Play className="w-4 h-4 mr-2" />
            Quiz starten
          </Button>
        </CardContent>
      </Card>

      {/* Mixed quiz card */}
      <Card>
        <CardContent className="p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-violet-100 dark:from-emerald-900/30 dark:to-violet-900/30 rounded-xl flex items-center justify-center">
                <Shuffle className="w-5 h-5 text-primary-700 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Gemischtes Quiz</h3>
                <p className="text-sm text-muted">Fragen aus allen BMS-Fächern</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            {[10, 20, 40].map((count) => (
              <Button
                key={count}
                variant="outline"
                size="sm"
                onClick={() => { setMixedQuestionCount(count); setQuizSubject("gemischt"); }}
              >
                <Play className="w-3.5 h-3.5 mr-1.5" />
                {count} Fragen
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
