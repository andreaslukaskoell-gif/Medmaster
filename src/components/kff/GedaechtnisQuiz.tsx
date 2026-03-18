import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Send,
  Play,
  CheckCircle2,
  XCircle,
  Shuffle,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FloatingQuestionCounter } from "@/components/ui/FloatingQuestionCounter";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";
import {
  generateAllergyPasses,
  generateGedaechtnisQuestionsFromPasses,
} from "@/data/kffGenerators";
import { generateSequenceTaskSet, type SequenceTask } from "@/data/kffZahlenfolgenMedAT";
import { type AllergyPass, type GedaechtnisQuestion } from "@/data/kffGedaechtnisMedAT";
import { filterValidGedaechtnisQuestions, logPoolWarning } from "@/data/kffValidation";
import { getOneMerkfahigkeitSet } from "@/lib/taskDb";
import { useStore } from "@/store/useStore";
import { useSessionTimer } from "@/hooks/useSessionTimer";
import { UebungsbeschreibungCard } from "@/components/shared/UebungsbeschreibungCard";
import { OfficialInstructionCard } from "@/components/shared/OfficialInstructionCard";
import { OFFICIAL_GM_INSTRUCTION } from "@/data/kffGedaechtnisMedAT";
import { preferUnseen } from "./kffHelpers";
import { useEffect } from "react";

// ==========================================
// GEDAECHTNIS & MERKFAEHIGKEIT (Allergiepässe) – MedAT 1:1
// ==========================================

// Persistent session object — const reference to mutable object survives React
// re-renders and is more robust than top-level `let` reassignment.
const _gmSession = {
  passes: [] as AllergyPass[],
  questions: [] as GedaechtnisQuestion[],
};

function AllergyPassCard({ pass }: { pass: AllergyPass }) {
  const initials = pass.name
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--border)]/50 shadow-md overflow-hidden">
      {/* Header — MedAT-Stil */}
      <div className="flex items-center justify-between px-4 py-2 border-b-2 border-red-500 bg-[var(--card)]">
        <span className="text-base font-bold tracking-wide text-[var(--text-secondary)]">
          ALLERGIEAUSWEIS
        </span>
        <span className="text-red-500 text-xl font-bold">+</span>
      </div>
      {/* Body */}
      <div className="flex p-3 gap-3 bg-[var(--card)]">
        {/* Photo */}
        <div className="w-24 h-28 shrink-0 rounded border border-[var(--border)] overflow-hidden bg-[var(--border)]">
          {pass.photo ? (
            <img
              src={pass.photo}
              alt=""
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[var(--muted)] text-xl font-bold">
              {initials}
            </div>
          )}
        </div>
        {/* Data */}
        <div className="flex-1 text-sm space-y-0.5">
          <div>
            <span className="font-semibold text-red-600 dark:text-red-400">Name:</span>{" "}
            <span className="text-[var(--text-primary)]">{pass.name.toUpperCase()}</span>
          </div>
          <div>
            <span className="font-semibold text-red-600 dark:text-red-400">Geburtstag:</span>{" "}
            <span className="text-[var(--text-primary)]">{pass.birthdate}</span>
          </div>
          <div>
            <span className="font-semibold text-red-600 dark:text-red-400">
              Medikamenteneinnahme:
            </span>{" "}
            <span className="text-[var(--text-primary)]">{pass.medications ? "Ja" : "Nein"}</span>
          </div>
          <div>
            <span className="font-semibold text-red-600 dark:text-red-400">Blutgruppe:</span>{" "}
            <span className="text-[var(--text-primary)]">{pass.bloodGroup}</span>
          </div>
          <div>
            <span className="font-semibold text-red-600 dark:text-red-400">
              Bekannte Allergien:
            </span>{" "}
            <span className="text-[var(--text-primary)]">{pass.allergies.join(", ")}</span>
          </div>
          <div>
            <span className="font-semibold text-red-600 dark:text-red-400">Ausweisnummer:</span>{" "}
            <span className="font-mono text-[var(--text-primary)]">{pass.passportNumber}</span>
          </div>
          <div>
            <span className="font-semibold text-red-600 dark:text-red-400">Ausstellungsland:</span>{" "}
            <span className="text-[var(--text-primary)]">{pass.country}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GedaechtnisSetup({ onLearn, onBack }: { onLearn: () => void; onBack: () => void }) {
  const [passCount, setPassCount] = useState(8);
  const [dbLoading, setDbLoading] = useState(false);
  const [dbError, setDbError] = useState<string | null>(null);
  const { getKffSeenIdsForDomain } = useStore();
  const startFromDb = async () => {
    setDbError(null);
    setDbLoading(true);
    try {
      const set = await getOneMerkfahigkeitSet();
      const seenIds = getKffSeenIdsForDomain("Gedächtnis");
      if (set && set.passes.length > 0 && set.questions.length > 0) {
        _gmSession.passes = set.passes;
        _gmSession.questions = preferUnseen(set.questions, set.questions.length, seenIds);
        onLearn();
      } else {
        const passes = generateAllergyPasses(8);
        const raw = generateGedaechtnisQuestionsFromPasses(passes, 25);
        const questions = filterValidGedaechtnisQuestions(raw);
        if (questions.length > 0) {
          _gmSession.passes = passes;
          _gmSession.questions = preferUnseen(questions, questions.length, seenIds);
          onLearn();
        } else {
          setDbError("Keine gültigen Fragen generiert. Bitte später erneut versuchen.");
        }
      }
    } catch (e) {
      setDbError(e instanceof Error ? e.message : "Fehler beim Laden aus der Datenbank.");
    } finally {
      setDbLoading(false);
    }
  };

  const startTraining = () => {
    _gmSession.passes = generateAllergyPasses(passCount);
    const raw = generateGedaechtnisQuestionsFromPasses(_gmSession.passes, 25);
    _gmSession.questions = filterValidGedaechtnisQuestions(raw);
    if (_gmSession.questions.length < raw.length && import.meta.env?.DEV) {
      logPoolWarning("gedaechtnis", _gmSession.questions.length, "Training");
    }
    onLearn();
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Button variant="ghost" size="sm" onClick={onBack}>
        <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
      </Button>
      <h1 className="text-2xl font-bold text-[var(--text-primary)]">
        Gedächtnis & Merkfähigkeit (Allergiepässe)
      </h1>
      <p className="text-sm text-[var(--muted)]">
        Lernphase: Allergieausweise einprägen. Prüfphase: Fragen A–E. E = „Keine der
        Antwortmöglichkeiten ist richtig."
      </p>
      <UebungsbeschreibungCard id="kff-merkfaehigkeit" collapsible defaultCollapsed />
      <OfficialInstructionCard instruction={OFFICIAL_GM_INSTRUCTION} />

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">🧠 Training</CardTitle>
          <p className="text-sm text-[var(--muted)]">
            Trainingsaufgaben aus der Datenbank (8 Pässe + bis zu 25 Fragen) oder lokal generiert.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <Button className="w-full" size="lg" onClick={startFromDb} disabled={dbLoading}>
            {dbLoading ? (
              "Lade …"
            ) : (
              <>
                <BarChart3 className="w-5 h-5 mr-2" /> Aus Datenbank starten (8 Pässe + Fragen)
              </>
            )}
          </Button>
          {dbError && <p className="text-sm text-amber-700 dark:text-amber-400">{dbError}</p>}
          <div className="border-t border-[var(--border)] pt-4">
            <label className="text-sm font-medium text-[var(--text-primary)] mb-3 block">
              Fallback: Set lokal erzeugen (Anzahl Pässe)
            </label>
            <div className="flex flex-wrap gap-2">
              {[6, 7, 8, 9, 10].map((n) => (
                <button
                  key={n}
                  onClick={() => setPassCount(n)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                    passCount === n
                      ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                      : "border-[var(--border)] hover:bg-[var(--border)]/50"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
            <Button className="w-full mt-3" size="lg" variant="outline" onClick={startTraining}>
              <Shuffle className="w-5 h-5 mr-2" /> {passCount} Pässe + 25 Fragen (lokal)
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function GedaechtnisLearn({ onStart, onBack }: { onStart: () => void; onBack: () => void }) {
  const [learnMinutes, setLearnMinutes] = useState(8);
  const [secondsLeft, setSecondsLeft] = useState(learnMinutes * 60);
  const [started, setStarted] = useState(false);
  const passes = _gmSession.passes;
  useEffect(() => {
    if (!started || secondsLeft <= 0) return;
    const t = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [started, secondsLeft]);

  const startTimer = () => setStarted(true);
  const m = Math.floor(secondsLeft / 60);
  const s = secondsLeft % 60;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <div className="flex items-center gap-2">
          <Badge variant="warning">Lernphase – präge dir alles ein!</Badge>
          {!started ? (
            <div className="flex items-center gap-2">
              <span className="text-sm text-[var(--muted)]">Zeit:</span>
              {[3, 4, 5, 6, 7, 8].map((min) => (
                <button
                  key={min}
                  onClick={() => {
                    setLearnMinutes(min);
                    setSecondsLeft(min * 60);
                  }}
                  className={`px-2 py-1 rounded text-sm ${
                    learnMinutes === min
                      ? "bg-[var(--accent)]/10 text-[var(--accent)]"
                      : "bg-[var(--border)]/50 text-[var(--muted)]"
                  }`}
                >
                  {min} min
                </button>
              ))}
              <Button size="sm" onClick={startTimer}>
                Timer starten
              </Button>
            </div>
          ) : (
            <span className="font-mono text-lg font-semibold text-[var(--text-primary)]">
              {m}:{s.toString().padStart(2, "0")}
            </span>
          )}
        </div>
      </div>
      <h1 className="text-2xl font-bold text-[var(--text-primary)]">Allergieausweise</h1>
      <p className="text-sm text-[var(--muted)]">
        Präge dir die folgenden Ausweise ein. In der Prüfphase sind sie nicht mehr sichtbar.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {passes.map((p) => (
          <AllergyPassCard key={p.id} pass={p} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button size="lg" onClick={onStart}>
          <Play className="w-5 h-5 mr-2" /> Zur Prüfphase
        </Button>
      </div>
    </div>
  );
}

// ==========================================
// INTERFERENZ-PHASE (optional, between learn & quiz)
// ==========================================

export function GedaechtnisInterferenz({
  onComplete,
  onSkip,
}: {
  onComplete: () => void;
  onSkip: () => void;
}) {
  const [started, setStarted] = useState(false);
  const [tasks] = useState<SequenceTask[]>(() => generateSequenceTaskSet(5, Date.now()));
  const [taskIndex, setTaskIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  const task = tasks[taskIndex];

  if (!started) {
    return (
      <div className="max-w-2xl mx-auto space-y-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Kurzinterferenz</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Im echten MedAT folgen jetzt ca. 35 Minuten andere Untertests, bevor die Prüfphase zur
              Merkfähigkeit beginnt. Um das zu simulieren, löse jetzt ein paar Aufgaben aus einem
              anderen Bereich.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" onClick={() => setStarted(true)}>
                <Play className="w-5 h-5 mr-2" /> 5 Zahlenfolgen lösen
              </Button>
              <Button size="lg" variant="outline" onClick={onSkip}>
                Direkt zur Prüfphase
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!task) {
    onComplete();
    return null;
  }

  const handleSelect = (key: string) => {
    if (answered) return;
    setSelected(key);
    setAnswered(true);
  };

  const handleNext = () => {
    if (taskIndex + 1 >= tasks.length) {
      onComplete();
    } else {
      setTaskIndex((i) => i + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 mt-8">
      <div className="flex items-center justify-between">
        <Badge variant="warning">Kurzinterferenz</Badge>
        <span className="text-sm text-[var(--muted)]">
          Zahlenfolge {taskIndex + 1} von {tasks.length}
        </span>
      </div>
      <div className="w-full bg-[var(--border)] rounded-full h-2">
        <div
          className="bg-[var(--accent)] h-2 rounded-full transition-all"
          style={{ width: `${((taskIndex + 1) / tasks.length) * 100}%` }}
        />
      </div>
      <Card>
        <CardContent className="p-6">
          {/* Sequence display */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {task.sequence.map((val, i) => (
              <div
                key={i}
                className={`w-14 h-14 flex items-center justify-center rounded-lg border text-sm font-mono font-semibold ${
                  val === "?"
                    ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                    : "border-[var(--border)] bg-[var(--background)] text-[var(--text-primary)]"
                }`}
              >
                {val === "?" ? "?" : val}
              </div>
            ))}
          </div>
          {/* Options */}
          <div className="space-y-2">
            {task.options.map((opt) => {
              const isCorrect = opt.key === task.correctOptionId;
              const isSelected = selected === opt.key;
              let cls =
                "w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors flex items-center gap-2";
              if (!answered) {
                cls += " cursor-pointer border-[var(--border)] hover:bg-[var(--border)]/50";
              } else if (isCorrect) {
                cls += " border-green-500 bg-green-500/10 text-green-700 dark:text-green-400";
              } else if (isSelected && !isCorrect) {
                cls += " border-red-500 bg-red-500/10 text-red-700 dark:text-red-400";
              } else {
                cls += " border-[var(--border)] opacity-60";
              }
              const label = opt.value
                ? `${opt.value[0]}, ${opt.value[1]}`
                : (opt.text ?? "Keine der genannten");
              return (
                <button key={opt.key} onClick={() => handleSelect(opt.key)} className={cls}>
                  <span className="font-semibold shrink-0">{opt.key})</span>
                  {label}
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>
      {answered && (
        <div className="flex justify-end">
          <Button onClick={handleNext}>
            {taskIndex + 1 >= tasks.length ? (
              <>
                Weiter zur Prüfphase <ArrowRight className="w-4 h-4 ml-1" />
              </>
            ) : (
              <>
                Nächste Zahlenfolge <ArrowRight className="w-4 h-4 ml-1" />
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}

export function GedaechtnisQuiz({ onBack }: { onBack: () => void }) {
  const questions = _gmSession.questions;
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const { addXP, checkStreak, saveQuizResult, logActivity } = useStore();
  const getMinutes = useSessionTimer();
  const q = questions[index];
  const allAnswered = questions.every((qu) => answers[qu.id] !== undefined);

  // MedAT-conform: 15 minutes for the question phase
  const QUIZ_PHASE_SECONDS = 15 * 60;
  const [quizSecondsLeft, setQuizSecondsLeft] = useState(QUIZ_PHASE_SECONDS);
  const quizTimerExpired = quizSecondsLeft <= 0;

  useEffect(() => {
    if (submitted || questions.length === 0) return;
    const interval = setInterval(() => {
      setQuizSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [submitted, questions.length]);

  const handleSubmit = () => {
    if (submitted) return;
    const score = questions.filter((qu) => answers[qu.id] === qu.correctIndex).length;
    saveQuizResult({
      id: `kff-ged-${Date.now()}`,
      type: "kff",
      subject: "Gedächtnis",
      score,
      total: questions.length,
      date: new Date().toLocaleDateString("de-AT"),
      durationMinutes: getMinutes(),
      answers: questions.map((qu) => ({
        questionId: qu.id,
        selectedAnswer: qu.options[answers[qu.id] ?? -1] ?? "",
        correct: answers[qu.id] === qu.correctIndex,
      })),
    });
    logActivity(questions.length, getMinutes());
    addXP(score * 10);
    checkStreak();
    setSubmitted(true);
    setIndex(0);
  };

  // Auto-submit when timer expires
  useEffect(() => {
    if (quizTimerExpired && !submitted && questions.length > 0) {
      queueMicrotask(() => handleSubmit());
    }
  }, [quizTimerExpired]); // eslint-disable-line react-hooks/exhaustive-deps

  useKeyboardShortcuts({
    disabled: submitted,
    maxOptions: 5,
    onSelectOption: (idx) => {
      if (q && idx >= 0 && idx < 5) setAnswers((p) => ({ ...p, [q.id]: idx }));
    },
    onConfirm: () => {
      if (index < questions.length - 1) setIndex((i) => i + 1);
      else if (allAnswered) handleSubmit();
    },
    onNext: () => {
      if (index < questions.length - 1) setIndex((i) => i + 1);
    },
    onPrev: () => {
      if (index > 0) setIndex((i) => i - 1);
    },
  });

  if (questions.length === 0) {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <p className="text-[var(--muted)]">
          Keine Fragen verfügbar. Bitte starte zuerst die Lernphase.
        </p>
      </div>
    );
  }

  if (submitted) {
    const score = questions.filter((qu) => answers[qu.id] === qu.correctIndex).length;
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold text-[var(--accent)]">
              {score}/{questions.length}
            </div>
            <p className="text-[var(--muted)] mt-1">
              {Math.round((score / questions.length) * 100)}% richtig
            </p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">+{score * 10} XP</p>
          </CardContent>
        </Card>
        {questions.map((qu, i) => {
          const userIndex = answers[qu.id];
          const correct = userIndex === qu.correctIndex;
          const wasAnswered = userIndex !== undefined;
          const selectedOpt = wasAnswered ? qu.options[userIndex] : undefined;
          const correctLetter = String.fromCharCode(65 + qu.correctIndex);
          const correctOpt = qu.options[qu.correctIndex];
          return (
            <Card
              key={qu.id}
              className={`border-l-4 ${correct ? "border-l-green-500" : "border-l-red-500"}`}
            >
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  {correct ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                  <span className="font-medium text-sm text-[var(--text-primary)]">
                    {i + 1}. {qu.question}
                  </span>
                </div>
                {!correct && wasAnswered && selectedOpt !== undefined && (
                  <p className="text-sm text-red-600 dark:text-red-400 ml-7">
                    Deine Antwort: {String.fromCharCode(65 + userIndex)}) {selectedOpt}
                  </p>
                )}
                {!correct && !wasAnswered && (
                  <p className="text-sm text-red-600 dark:text-red-400 ml-7 italic">
                    Nicht beantwortet
                  </p>
                )}
                <p
                  className={`text-sm ml-7 ${correct ? "text-green-700 dark:text-green-400" : "text-green-700 dark:text-green-400 font-medium"}`}
                >
                  Richtig: {correctLetter}) {correctOpt}
                </p>
              </CardContent>
            </Card>
          );
        })}
        <div className="flex justify-center">
          <Button onClick={onBack}>Zurück</Button>
        </div>
      </div>
    );
  }

  if (!q) {
    return (
      <div className="max-w-3xl mx-auto space-y-6 p-8">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <p className="text-[var(--muted)]">Frage nicht gefunden.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen
        </Button>
        <div className="flex items-center gap-3">
          <span
            className={`font-mono text-sm font-bold tabular-nums ${quizSecondsLeft <= 60 ? "text-red-600 dark:text-red-400 animate-pulse" : "text-[var(--muted)]"}`}
          >
            {String(Math.floor(quizSecondsLeft / 60)).padStart(2, "0")}:
            {String(quizSecondsLeft % 60).padStart(2, "0")}
          </span>
          <Badge variant="danger">Prüfphase</Badge>
        </div>
      </div>
      <div className="w-full bg-[var(--border)] rounded-full h-2">
        <div
          className="bg-[var(--accent)] h-2 rounded-full transition-all"
          style={{ width: `${((index + 1) / questions.length) * 100}%` }}
        />
      </div>
      <Card>
        <CardContent className="p-6">
          <p className="text-sm text-[var(--muted)] mb-1">
            Frage {index + 1} von {questions.length}
          </p>
          {q.photoUrl && (
            <div className="flex justify-center mb-4">
              <img
                src={q.photoUrl}
                alt=""
                className="w-20 h-24 rounded-lg object-cover border border-[var(--border)]"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.style.display = "none";
                  const parent = el.parentElement;
                  if (parent && !parent.querySelector(".photo-fallback")) {
                    const fallback = document.createElement("div");
                    fallback.className =
                      "photo-fallback w-20 h-24 rounded-lg border border-[var(--border)] bg-[var(--border)]/50 flex items-center justify-center text-2xl font-bold text-[var(--muted)]";
                    fallback.textContent = (q.question.match(/[A-ZÄÖÜ]/g) || ["?"])
                      .slice(0, 2)
                      .join("");
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          )}
          <p className="text-base font-medium text-[var(--text-primary)] mb-6">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((opt, oi) => (
              <button
                key={oi}
                onClick={() => setAnswers((p) => ({ ...p, [q.id]: oi }))}
                className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors cursor-pointer flex items-center gap-2 ${
                  answers[q.id] === oi
                    ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                    : "border-[var(--border)] hover:bg-[var(--border)]/50"
                }`}
              >
                <span className="font-semibold shrink-0">{String.fromCharCode(65 + oi)})</span>
                {opt}
                <kbd className="ml-auto text-[10px] bg-[var(--border)] px-1.5 py-0.5 rounded text-[var(--muted)]">
                  {oi + 1}
                </kbd>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setIndex((i) => i - 1)} disabled={index === 0}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        {index < questions.length - 1 ? (
          <Button onClick={() => setIndex((i) => i + 1)}>
            Weiter <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={!allAnswered}>
            <Send className="w-4 h-4 mr-1" /> Auswertung
          </Button>
        )}
      </div>
      <FloatingQuestionCounter current={index + 1} total={questions.length} />
    </div>
  );
}
