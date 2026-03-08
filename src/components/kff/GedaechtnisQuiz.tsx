import { useState, useMemo } from "react";
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

let _currentGmPasses: AllergyPass[] = [];
let _currentGmQuestions: GedaechtnisQuestion[] = [];

function AllergyPassCard({ pass }: { pass: AllergyPass }) {
  const initials = pass.name
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  return (
    <div className="rounded-2xl border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 shadow-md overflow-hidden">
      {/* Header — MedAT-Stil */}
      <div className="flex items-center justify-between px-4 py-2 border-b-2 border-red-500 bg-white dark:bg-gray-900">
        <span className="text-base font-bold tracking-wide text-gray-700 dark:text-gray-200">
          ALLERGIEAUSWEIS
        </span>
        <span className="text-red-500 text-xl font-bold">+</span>
      </div>
      {/* Body */}
      <div className="flex p-3 gap-3 bg-white dark:bg-gray-900">
        {/* Photo */}
        <div className="w-24 h-28 shrink-0 rounded border border-gray-300 dark:border-gray-600 overflow-hidden bg-gray-200 dark:bg-gray-700">
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
            <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400 text-xl font-bold">
              {initials}
            </div>
          )}
        </div>
        {/* Data */}
        <div className="flex-1 text-sm space-y-0.5">
          <div>
            <span className="font-semibold text-red-600 dark:text-red-400">Name:</span>{" "}
            <span className="text-gray-900 dark:text-gray-100">{pass.name.toUpperCase()}</span>
          </div>
          <div>
            <span className="font-semibold text-red-600 dark:text-red-400">Geburtstag:</span>{" "}
            <span className="text-gray-800 dark:text-gray-200">{pass.birthdate}</span>
          </div>
          <div>
            <span className="font-semibold text-red-600 dark:text-red-400">
              Medikamenteneinnahme:
            </span>{" "}
            <span className="text-gray-800 dark:text-gray-200">
              {pass.medications ? "Ja" : "Nein"}
            </span>
          </div>
          <div>
            <span className="font-semibold text-red-600 dark:text-red-400">Blutgruppe:</span>{" "}
            <span className="text-gray-800 dark:text-gray-200">{pass.bloodGroup}</span>
          </div>
          <div>
            <span className="font-semibold text-red-600 dark:text-red-400">
              Bekannte Allergien:
            </span>{" "}
            <span className="text-gray-800 dark:text-gray-200">{pass.allergies.join(", ")}</span>
          </div>
          <div>
            <span className="font-semibold text-red-600 dark:text-red-400">Ausweisnummer:</span>{" "}
            <span className="font-mono text-gray-800 dark:text-gray-200">
              {pass.passportNumber}
            </span>
          </div>
          <div>
            <span className="font-semibold text-red-600 dark:text-red-400">Ausstellungsland:</span>{" "}
            <span className="text-gray-800 dark:text-gray-200">{pass.country}</span>
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
        _currentGmPasses = set.passes;
        _currentGmQuestions = preferUnseen(set.questions, set.questions.length, seenIds);
        onLearn();
      } else {
        const passes = generateAllergyPasses(8);
        const raw = generateGedaechtnisQuestionsFromPasses(passes, 25);
        const questions = filterValidGedaechtnisQuestions(raw);
        if (questions.length > 0) {
          _currentGmPasses = passes;
          _currentGmQuestions = preferUnseen(questions, questions.length, seenIds);
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
    _currentGmPasses = generateAllergyPasses(passCount);
    const raw = generateGedaechtnisQuestionsFromPasses(_currentGmPasses, 25);
    _currentGmQuestions = filterValidGedaechtnisQuestions(raw);
    if (_currentGmQuestions.length < raw.length && import.meta.env?.DEV) {
      logPoolWarning("gedaechtnis", _currentGmQuestions.length, "Training");
    }
    onLearn();
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Button variant="ghost" size="sm" onClick={onBack}>
        <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
      </Button>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        Gedächtnis & Merkfähigkeit (Allergiepässe)
      </h1>
      <p className="text-sm text-muted">
        Lernphase: Allergieausweise einprägen. Prüfphase: Fragen A–E. E = „Keine der
        Antwortmöglichkeiten ist richtig."
      </p>
      <UebungsbeschreibungCard id="kff-merkfaehigkeit" collapsible defaultCollapsed />
      <OfficialInstructionCard instruction={OFFICIAL_GM_INSTRUCTION} />

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">🧠 Training</CardTitle>
          <p className="text-sm text-muted">
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
          <div className="border-t border-border dark:border-gray-700 pt-4">
            <label className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3 block">
              Fallback: Set lokal erzeugen (Anzahl Pässe)
            </label>
            <div className="flex flex-wrap gap-2">
              {[6, 7, 8, 9, 10].map((n) => (
                <button
                  key={n}
                  onClick={() => setPassCount(n)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                    passCount === n
                      ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                      : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
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
  const passes = useMemo(() => _currentGmPasses, []);
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
              <span className="text-sm text-muted">Zeit:</span>
              {[3, 4, 5, 6, 7, 8].map((min) => (
                <button
                  key={min}
                  onClick={() => {
                    setLearnMinutes(min);
                    setSecondsLeft(min * 60);
                  }}
                  className={`px-2 py-1 rounded text-sm ${
                    learnMinutes === min
                      ? "bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200"
                      : "bg-gray-100 dark:bg-gray-800 text-muted"
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
            <span className="font-mono text-lg font-semibold text-gray-900 dark:text-gray-100">
              {m}:{s.toString().padStart(2, "0")}
            </span>
          )}
        </div>
      </div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Allergieausweise</h1>
      <p className="text-sm text-muted">
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

export function GedaechtnisQuiz({ onBack }: { onBack: () => void }) {
  const questions = useMemo(() => _currentGmQuestions, []);
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
      handleSubmit();
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
        <p className="text-muted">Keine Fragen verfügbar. Bitte starte zuerst die Lernphase.</p>
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
            <div className="text-4xl font-bold text-primary-700 dark:text-primary-400">
              {score}/{questions.length}
            </div>
            <p className="text-muted mt-1">
              {Math.round((score / questions.length) * 100)}% richtig
            </p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">+{score * 10} XP</p>
          </CardContent>
        </Card>
        {questions.map((qu, i) => {
          const correct = answers[qu.id] === qu.correctIndex;
          const selectedOpt = qu.options[answers[qu.id] ?? -1];
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
                  <span className="font-medium text-sm">
                    {i + 1}. {qu.question}
                  </span>
                </div>
                {!correct && selectedOpt !== undefined && (
                  <p className="text-sm text-red-600 dark:text-red-400 ml-7">
                    Deine Antwort: {selectedOpt}
                  </p>
                )}
                <p className="text-sm text-green-700 dark:text-green-400 ml-7">
                  Richtig: {qu.options[qu.correctIndex]}
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
        <p className="text-muted">Frage nicht gefunden.</p>
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
            className={`font-mono text-sm font-bold tabular-nums ${quizSecondsLeft <= 60 ? "text-red-600 dark:text-red-400 animate-pulse" : "text-gray-600 dark:text-gray-400"}`}
          >
            {String(Math.floor(quizSecondsLeft / 60)).padStart(2, "0")}:
            {String(quizSecondsLeft % 60).padStart(2, "0")}
          </span>
          <Badge variant="danger">Prüfphase</Badge>
        </div>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-primary-600 h-2 rounded-full transition-all"
          style={{ width: `${((index + 1) / questions.length) * 100}%` }}
        />
      </div>
      <Card>
        <CardContent className="p-6">
          <p className="text-sm text-muted mb-1">
            Frage {index + 1} von {questions.length}
          </p>
          {q.photoUrl && (
            <div className="flex justify-center mb-4">
              <img
                src={q.photoUrl}
                alt=""
                className="w-20 h-24 rounded-lg object-cover border border-gray-200 dark:border-gray-700"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.style.display = "none";
                  const parent = el.parentElement;
                  if (parent && !parent.querySelector(".photo-fallback")) {
                    const fallback = document.createElement("div");
                    fallback.className =
                      "photo-fallback w-20 h-24 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-2xl font-bold text-gray-400";
                    fallback.textContent = (q.question.match(/[A-ZÄÖÜ]/g) || ["?"])
                      .slice(0, 2)
                      .join("");
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          )}
          <p className="text-base font-medium text-gray-900 dark:text-gray-100 mb-6">
            {q.question}
          </p>
          <div className="space-y-2">
            {q.options.map((opt, oi) => (
              <button
                key={oi}
                onClick={() => setAnswers((p) => ({ ...p, [q.id]: oi }))}
                className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors cursor-pointer flex items-center gap-2 ${
                  answers[q.id] === oi
                    ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                    : "border-border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <span className="font-semibold shrink-0">{String.fromCharCode(65 + oi)})</span>
                {opt}
                <kbd className="ml-auto text-[10px] bg-gray-200 dark:bg-gray-600 px-1.5 py-0.5 rounded text-muted">
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
