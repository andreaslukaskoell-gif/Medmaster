/**
 * Einstufungstest: gemischte Aufgaben aus BMS + KFF.
 * Schätzt initiales Skill-Rating (0–1000), dann Redirect ins Training.
 *
 * Primär: Task-DB (Supabase). Fallback: lokale BMS-Fragen + lokal generierte KFF-Tasks.
 */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTasksForUserOrFill, taskToData } from "@/lib/taskDb";
import { supabase } from "@/lib/supabase";
import { useStore } from "@/store/useStore";
import type { Task } from "@/lib/taskDb/types";
import type { SequenceTask } from "@/data/kffZahlenfolgenMedAT";
import { generateSequenceTask } from "@/data/kffZahlenfolgenMedAT";
import type { ImplikationTask } from "@/data/kffImplikationen";
import { implikationenTasks } from "@/data/kffImplikationen";
import { filterValidSequenceTasks } from "@/data/kffValidation";
import { filterValidImplikationTasks } from "@/data/kffValidation";
import { allBmsQuestions } from "@/data/bms";
import type { Question } from "@/data/bms";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PLACEMENT_COUNT = 10;
const INITIAL_RATING = 500;

const BMS_SUBJECTS = ["biologie", "chemie", "physik", "mathematik"] as const;
const OPTION_LABELS = ["A", "B", "C", "D", "E"] as const;

/** Pick one random BMS question per subject (4 total). */
function pickBmsQuestions(): Question[] {
  const picked: Question[] = [];
  for (const subj of BMS_SUBJECTS) {
    const pool = allBmsQuestions.filter((q) => q.subject === subj);
    if (pool.length === 0) continue;
    picked.push(pool[Math.floor(Math.random() * pool.length)]!);
  }
  return picked;
}

/** Generate 3 local Zahlenfolgen tasks. */
function pickLocalSequenceTasks(): SequenceTask[] {
  const levels = ["easy", "medium", "hard"] as const;
  const seed = Date.now();
  const out: SequenceTask[] = [];
  for (let i = 0; i < 3; i++) {
    const t = generateSequenceTask(levels[i]!, seed + i);
    out.push(t);
  }
  return filterValidSequenceTasks(out);
}

/** Pick 3 random Implikationen from the static pool. */
function pickLocalImplikationTasks(): ImplikationTask[] {
  const shuffled = [...implikationenTasks].sort(() => Math.random() - 0.5);
  return filterValidImplikationTasks(shuffled).slice(0, 3);
}

/** Wrap a local KFF task into a Task-shaped object. */
function wrapAsTask(
  data: SequenceTask | ImplikationTask,
  type: "sequence" | "implikationen",
  idx: number
): Task {
  const isSeq = type === "sequence";
  return {
    id: `local-${type}-${idx}`,
    domain: isSeq ? "kff-zahlenfolgen" : "kff-implikationen",
    type,
    difficulty: 500,
    data,
    correctAnswer: isSeq
      ? (data as SequenceTask).correctOptionId
      : (data as ImplikationTask).correctAnswer,
    source: "generated",
    validated: true,
    createdAt: new Date().toISOString(),
  };
}

/** A unified item that can be either a Task (KFF) or a BMS Question. */
type PlacementItem = { kind: "task"; task: Task } | { kind: "bms"; question: Question };

export default function PlacementTest() {
  const navigate = useNavigate();
  const { setSkillRating, setMedATOnboardingComplete } = useStore();
  const [items, setItems] = useState<PlacementItem[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [phase, setPhase] = useState<"intro" | "quiz" | "result">("intro");

  useEffect(() => {
    let cancelled = false;
    async function load() {
      // 1. Try Supabase task DB (skip if no connection)
      const dbTasks: Task[] = [];
      if (supabase)
        try {
          const zf = await getTasksForUserOrFill("kff-zahlenfolgen", INITIAL_RATING, 5, 200);
          const imp = await getTasksForUserOrFill("kff-implikationen", INITIAL_RATING, 5, 200);
          const combined = [...zf, ...imp].sort(() => Math.random() - 0.5);
          for (const t of combined) {
            if (t.type === "sequence") {
              const data = taskToData<SequenceTask>(t);
              if (filterValidSequenceTasks([data]).length > 0) dbTasks.push(t);
            } else if (t.type === "implikationen") {
              const data = taskToData<ImplikationTask>(t);
              if (filterValidImplikationTasks([data]).length > 0) dbTasks.push(t);
            }
            if (dbTasks.length >= PLACEMENT_COUNT) break;
          }
        } catch {
          // Supabase unavailable — fall through to local fallback
        }

      if (cancelled) return;

      // 2. If we got enough from DB, use those
      if (dbTasks.length >= PLACEMENT_COUNT) {
        setItems(dbTasks.slice(0, PLACEMENT_COUNT).map((t) => ({ kind: "task", task: t })));
        setLoading(false);
        return;
      }

      // 3. Local fallback: 4 BMS + 3 Zahlenfolgen + 3 Implikationen
      const bms = pickBmsQuestions();
      const seqs = pickLocalSequenceTasks();
      const imps = pickLocalImplikationTasks();

      const mixed: PlacementItem[] = [
        ...bms.map((q): PlacementItem => ({ kind: "bms", question: q })),
        ...seqs.map(
          (s, i): PlacementItem => ({ kind: "task", task: wrapAsTask(s, "sequence", i) })
        ),
        ...imps.map(
          (im, i): PlacementItem => ({ kind: "task", task: wrapAsTask(im, "implikationen", i) })
        ),
      ];

      // Shuffle and take up to PLACEMENT_COUNT
      mixed.sort(() => Math.random() - 0.5);
      setItems(mixed.slice(0, PLACEMENT_COUNT));
      setLoading(false);
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const currentItem = items[index];
  const isLast = index >= items.length - 1 && items.length > 0;

  function itemId(item: PlacementItem): string {
    return item.kind === "bms" ? item.question.id : item.task.id;
  }

  const handleAnswer = (value: string) => {
    if (!currentItem) return;
    const id = itemId(currentItem);
    const nextAnswers = { ...answers, [id]: value };
    setAnswers(nextAnswers);
    if (isLast) {
      setPhase("result");
      let correctCount = 0;
      for (const item of items) {
        const ans = itemId(item) === id ? value : nextAnswers[itemId(item)];
        if (!ans) continue;
        if (item.kind === "bms") {
          if (item.question.correctOptionId === ans) correctCount++;
        } else if (item.task.type === "sequence") {
          const data = item.task.data as SequenceTask;
          if (data.correctOptionId === ans) correctCount++;
        } else if (item.task.type === "implikationen") {
          const data = item.task.data as ImplikationTask;
          const idx = data.options?.indexOf(ans) ?? -1;
          if (idx >= 0 && data.correctAnswer === idx) correctCount++;
        }
      }
      const wrongCount = items.length - correctCount;
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

  // ─── Intro ───────────────────────────────────────────────
  if (phase === "intro") {
    return (
      <div className="min-h-screen bg-[var(--background)] p-6 flex flex-col items-center justify-center">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6 space-y-4">
            <h1 className="text-xl font-bold text-[var(--text-primary)]">Einstufungstest</h1>
            <p className="text-sm text-[var(--muted)]">
              Du beantwortest {PLACEMENT_COUNT} Aufgaben aus BMS und KFF. Am Ende wird dein
              Startniveau geschätzt – danach startest du mit dem passenden Schwierigkeitsgrad.
            </p>
            {loading ? (
              <p className="text-sm text-[var(--muted)]">Lade Aufgaben...</p>
            ) : (
              <Button
                className="w-full"
                onClick={() => setPhase("quiz")}
                disabled={items.length === 0}
              >
                {items.length === 0 ? "Keine Aufgaben verfügbar" : "Test starten"}
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  // ─── Result / empty ──────────────────────────────────────
  if (phase === "result" || !currentItem) {
    return (
      <div className="min-h-screen bg-[var(--background)] p-6 flex items-center justify-center">
        <p className="text-[var(--muted)]">Einstufung wird gespeichert...</p>
      </div>
    );
  }

  const totalLabel = `Aufgabe ${index + 1} von ${items.length}`;

  // ─── BMS question ────────────────────────────────────────
  if (currentItem.kind === "bms") {
    const q = currentItem.question;
    return (
      <div className="min-h-screen bg-[var(--background)] p-6">
        <div className="max-w-lg mx-auto space-y-4">
          <p className="text-sm text-[var(--muted)]">
            {totalLabel} (BMS – {q.subject.charAt(0).toUpperCase() + q.subject.slice(1)})
          </p>
          <Card>
            <CardContent className="pt-6 space-y-3">
              <p className="font-medium text-[var(--text-primary)]">{q.text}</p>
              <div className="flex flex-col gap-2">
                {q.options.map((opt, i) => (
                  <Button
                    key={opt.id}
                    variant="outline"
                    className="justify-start text-left h-auto py-2"
                    onClick={() => handleAnswer(opt.id)}
                  >
                    {OPTION_LABELS[i]}: {opt.text}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // ─── Zahlenfolge ─────────────────────────────────────────
  const currentTask = currentItem.task;

  if (currentTask.type === "sequence") {
    const data = taskToData<SequenceTask>(currentTask);
    const valid = filterValidSequenceTasks([data]);
    if (valid.length === 0) {
      return (
        <div className="min-h-screen bg-[var(--background)] p-6 flex items-center justify-center">
          <p className="text-[var(--muted)]">Lade nächste Aufgabe...</p>
        </div>
      );
    }
    const q = valid[0]!;
    const opts = q.options ?? [];
    return (
      <div className="min-h-screen bg-[var(--background)] p-6">
        <div className="max-w-lg mx-auto space-y-4">
          <p className="text-sm text-[var(--muted)]">{totalLabel} (Zahlenfolge)</p>
          <Card>
            <CardContent className="pt-6">
              <p className="font-medium text-[var(--text-primary)] mb-2">
                Welche beiden Zahlen folgen als Nächstes?
              </p>
              <p className="text-lg font-mono text-[var(--text-primary)] mb-4">
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

  // ─── Implikationen ───────────────────────────────────────
  if (currentTask.type === "implikationen") {
    const data = taskToData<ImplikationTask>(currentTask);
    const valid = filterValidImplikationTasks([data]);
    if (valid.length === 0) {
      return (
        <div className="min-h-screen bg-[var(--background)] p-6 flex items-center justify-center">
          <p className="text-[var(--muted)]">Lade nächste Aufgabe...</p>
        </div>
      );
    }
    const q = valid[0]!;
    return (
      <div className="min-h-screen bg-[var(--background)] p-6">
        <div className="max-w-lg mx-auto space-y-4">
          <p className="text-sm text-[var(--muted)]">{totalLabel} (Implikationen)</p>
          <Card>
            <CardContent className="pt-6 space-y-3">
              <p className="font-medium text-[var(--text-primary)]">{q.premise1}</p>
              <p className="font-medium text-[var(--text-primary)]">{q.premise2}</p>
              <p className="text-sm text-[var(--muted)] pt-2">
                Welche Schlussfolgerung folgt zwingend?
              </p>
              <div className="flex flex-col gap-2">
                {(q.options ?? []).map((text, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    className="justify-start text-left h-auto py-2"
                    onClick={() => handleAnswer(text)}
                  >
                    {OPTION_LABELS[i]}: {text}
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
    <div className="min-h-screen bg-[var(--background)] p-6 flex items-center justify-center">
      <p className="text-[var(--muted)]">Unbekannter Aufgabentyp.</p>
    </div>
  );
}
