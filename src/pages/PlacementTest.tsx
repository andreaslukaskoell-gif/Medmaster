/**
 * Einstufungstest: gemischte Aufgaben aus der Task-DB (KFF).
 * Schätzt initiales Skill-Rating (0–1000), dann Redirect ins Training.
 */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTasksForUserOrFill, taskToData } from "@/lib/taskDb";
import { useStore } from "@/store/useStore";
import type { Task } from "@/lib/taskDb/types";
import type { SequenceTask } from "@/data/kffZahlenfolgenMedAT";
import type { ImplikationTask } from "@/data/kffImplikationen";
import { filterValidSequenceTasks } from "@/data/kffValidation";
import { filterValidImplikationTasks } from "@/data/kffValidation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PLACEMENT_COUNT = 10;
const INITIAL_RATING = 500;

export default function PlacementTest() {
  const navigate = useNavigate();
  const { setSkillRating, setMedATOnboardingComplete } = useStore();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [phase, setPhase] = useState<"intro" | "quiz" | "result">("intro");

  useEffect(() => {
    let cancelled = false;
    async function load() {
      const zf = await getTasksForUserOrFill("kff-zahlenfolgen", INITIAL_RATING, 5, 200);
      const imp = await getTasksForUserOrFill("kff-implikationen", INITIAL_RATING, 5, 200);
      if (cancelled) return;
      const combined = [...zf, ...imp].sort(() => Math.random() - 0.5);
      const valid: Task[] = [];
      for (const t of combined) {
        if (t.type === "sequence") {
          const data = taskToData<SequenceTask>(t);
          if (filterValidSequenceTasks([data]).length > 0) valid.push(t);
        } else if (t.type === "implikationen") {
          const data = taskToData<ImplikationTask>(t);
          if (filterValidImplikationTasks([data]).length > 0) valid.push(t);
        }
        if (valid.length >= PLACEMENT_COUNT) break;
      }
      setTasks(valid.slice(0, PLACEMENT_COUNT));
      setLoading(false);
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const currentTask = tasks[index];
  const isLast = index >= tasks.length - 1 && tasks.length > 0;

  const handleAnswer = (value: string) => {
    if (!currentTask) return;
    const nextAnswers = { ...answers, [currentTask.id]: value };
    setAnswers(nextAnswers);
    if (isLast) {
      setPhase("result");
      let correctCount = 0;
      for (const t of tasks) {
        const ans = t.id === currentTask.id ? value : nextAnswers[t.id];
        if (!ans) continue;
        if (t.type === "sequence") {
          const data = t.data as SequenceTask;
          if (data.correctOptionId === ans) correctCount++;
        } else if (t.type === "implikationen") {
          const data = t.data as ImplikationTask;
          const idx = data.options?.indexOf(ans) ?? -1;
          if (idx >= 0 && data.correctAnswer === idx) correctCount++;
        }
      }
      const wrongCount = tasks.length - correctCount;
      const estimated = Math.max(
        0,
        Math.min(1000, INITIAL_RATING + correctCount * 25 - wrongCount * 25)
      );
      setSkillRating(() => estimated);
      setMedATOnboardingComplete();
      navigate("/onboarding/lernplan-choice", { replace: true });
      return;
    }
    setIndex((i) => i + 1);
  };

  if (phase === "intro") {
    return (
      <div className="min-h-screen bg-background p-6 flex flex-col items-center justify-center">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6 space-y-4">
            <h1 className="text-xl font-bold text-app-foreground">Einstufungstest</h1>
            <p className="text-sm text-app-muted">
              Du beantwortest {PLACEMENT_COUNT} Aufgaben aus verschiedenen KFF-Bereichen. Am Ende
              wird dein Startniveau geschätzt – danach startest du mit dem passenden
              Schwierigkeitsgrad.
            </p>
            {loading ? (
              <p className="text-sm text-app-muted">Lade Aufgaben...</p>
            ) : (
              <Button
                className="w-full"
                onClick={() => setPhase("quiz")}
                disabled={tasks.length === 0}
              >
                {tasks.length === 0 ? "Keine Aufgaben verfügbar" : "Test starten"}
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  if (phase === "result" || !currentTask) {
    return (
      <div className="min-h-screen bg-background p-6 flex items-center justify-center">
        <p className="text-app-muted">Einstufung wird gespeichert...</p>
      </div>
    );
  }

  if (currentTask.type === "sequence") {
    const data = taskToData<SequenceTask>(currentTask);
    const valid = filterValidSequenceTasks([data]);
    if (valid.length === 0) {
      return (
        <div className="min-h-screen bg-background p-6 flex items-center justify-center">
          <p className="text-app-muted">Lade nächste Aufgabe...</p>
        </div>
      );
    }
    const q = valid[0]!;
    const opts = q.options ?? [];
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-lg mx-auto space-y-4">
          <p className="text-sm text-app-muted">
            Aufgabe {index + 1} von {tasks.length} (Zahlenfolge)
          </p>
          <Card>
            <CardContent className="pt-6">
              <p className="font-medium text-app-foreground mb-2">
                Welche beiden Zahlen folgen als Nächstes?
              </p>
              <p className="text-lg font-mono text-app-foreground mb-4">
                [{q.sequence.map((x) => (x === "?" ? "?" : String(x))).join(", ")}]
              </p>
              <div className="flex flex-wrap gap-2">
                {opts.map((opt) => {
                  if (opt.key === "E") {
                    return (
                      <Button key={opt.key} variant="outline" onClick={() => handleAnswer(opt.key)}>
                        E: Keine passt
                      </Button>
                    );
                  }
                  const label = opt.value ? `${opt.value[0]}, ${opt.value[1]}` : opt.key;
                  return (
                    <Button key={opt.key} variant="outline" onClick={() => handleAnswer(opt.key)}>
                      {opt.key}: {label}
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (currentTask.type === "implikationen") {
    const data = taskToData<ImplikationTask>(currentTask);
    const valid = filterValidImplikationTasks([data]);
    if (valid.length === 0) {
      return (
        <div className="min-h-screen bg-background p-6 flex items-center justify-center">
          <p className="text-app-muted">Lade nächste Aufgabe...</p>
        </div>
      );
    }
    const q = valid[0]!;
    const labels = ["A", "B", "C", "D", "E"];
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-lg mx-auto space-y-4">
          <p className="text-sm text-app-muted">
            Aufgabe {index + 1} von {tasks.length} (Implikationen)
          </p>
          <Card>
            <CardContent className="pt-6 space-y-3">
              <p className="font-medium text-app-foreground">{q.premise1}</p>
              <p className="font-medium text-app-foreground">{q.premise2}</p>
              <p className="text-sm text-app-muted pt-2">Welche Schlussfolgerung folgt zwingend?</p>
              <div className="flex flex-col gap-2">
                {(q.options ?? []).map((text, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    className="justify-start text-left h-auto py-2"
                    onClick={() => handleAnswer(text)}
                  >
                    {labels[i]}: {text}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6 flex items-center justify-center">
      <p className="text-app-muted">Unbekannter Aufgabentyp.</p>
    </div>
  );
}
