import { useState, useMemo, useEffect, useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";
import { CheckCircle2, XCircle, Timer, Trophy, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShareResultButton } from "@/components/shared/ShareResultButton";
import { allBmsQuestions } from "@/data/bms/index";
import type { Question } from "@/data/bms/index";
import { trackQuizComplete } from "@/lib/analytics";
import { trackEvent } from "@/lib/analyticsTracker";

const NAVY = "#1b3ea7";
const QUESTION_COUNT = 5;
const TIME_PER_QUESTION = 45; // seconds
const OPTION_LABELS = ["A", "B", "C", "D", "E"];

const SUBJECT_CONFIG: Record<string, { label: string; emoji: string; color: string }> = {
  biologie: { label: "Biologie", emoji: "🧬", color: "text-emerald-600" },
  chemie: { label: "Chemie", emoji: "⚗️", color: "text-red-600" },
  physik: { label: "Physik", emoji: "⚛️", color: "text-blue-600" },
  mathematik: { label: "Mathematik", emoji: "📐", color: "text-violet-600" },
  gemischt: { label: "Gemischt", emoji: "🎯", color: "text-[var(--text-primary)]" },
};

/** Seeded random using daily seed + optional challenge seed */
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

function pickQuestions(subject: string, seed: number): Question[] {
  const pool =
    subject === "gemischt" ? allBmsQuestions : allBmsQuestions.filter((q) => q.subject === subject);
  if (pool.length === 0) return [];
  const rng = seededRandom(seed);
  const shuffled = [...pool].sort(() => rng() - 0.5);
  return shuffled.slice(0, QUESTION_COUNT);
}

function formatTime(s: number): string {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

type Phase = "intro" | "quiz" | "results";

export default function QuizChallenge() {
  usePageTitle("MedAT Quiz-Challenge");
  const [searchParams] = useSearchParams();

  const subject = searchParams.get("fach") || "gemischt";
  const challengeSeed = searchParams.get("seed");

  // Generate a deterministic seed: either from URL param or daily
  const seed = useMemo(() => {
    if (challengeSeed) return parseInt(challengeSeed, 10) || 42;
    const d = new Date();
    return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
  }, [challengeSeed]);

  const questions = useMemo(() => pickQuestions(subject, seed), [subject, seed]);
  const config = SUBJECT_CONFIG[subject] || SUBJECT_CONFIG.gemischt;

  const [phase, setPhase] = useState<Phase>("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState(QUESTION_COUNT * TIME_PER_QUESTION);
  const [totalTime, setTotalTime] = useState(0);

  // Timer
  useEffect(() => {
    if (phase !== "quiz") return;
    const interval = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setPhase("results");
          return 0;
        }
        return t - 1;
      });
      setTotalTime((t) => t + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [phase]);

  const handleAnswer = useCallback(
    (optionId: string) => {
      if (!questions[current]) return;
      setAnswers((prev) => ({ ...prev, [questions[current].id]: optionId }));
      if (current < questions.length - 1) {
        setCurrent((c) => c + 1);
      } else {
        setPhase("results");
      }
    },
    [current, questions]
  );

  const score = useMemo(
    () => questions.filter((q) => answers[q.id] === q.correctOptionId).length,
    [questions, answers]
  );
  const pct = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

  // Track quiz completion when results are shown
  useEffect(() => {
    if (phase !== "results" || questions.length === 0) return;
    trackQuizComplete("challenge", score, questions.length);
    trackEvent("quiz_complete", { section: "challenge", subject, score, total: questions.length });
  }, [phase]); // eslint-disable-line react-hooks/exhaustive-deps

  // Generate challenge link with same seed so friends get same questions
  const challengeLink = `https://medmaster.at/challenge?fach=${subject}&seed=${seed}`;
  const shareWhatsAppText = `Ich hab gerade ${score}/${QUESTION_COUNT} beim MedMaster Quiz geschafft! Teste dich auch: ${challengeLink}`;
  const shareGenericText = `${config.emoji} MedAT-Challenge: ${score}/${QUESTION_COUNT} (${pct}%) in ${config.label}!\nSchaffst du mehr? Probier's aus:\n👉 ${challengeLink}`;

  const handleShareTrack = useCallback(
    (method: string) => {
      trackEvent("challenge_share", { method, score, total: QUESTION_COUNT, pct, subject });
    },
    [score, pct, subject]
  );

  // SEO meta + JSON-LD
  useEffect(() => {
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        "content",
        `Teste dein MedAT-Wissen! 5 Fragen, 45 Sekunden pro Frage. Fordere deine Freunde heraus auf MedMaster.`
      );
    }
    const schema = {
      "@context": "https://schema.org",
      "@type": "Quiz",
      name: "MedAT Quiz-Challenge",
      description:
        "Teste dein MedAT-Wissen mit 5 Fragen in 45 Sekunden pro Frage. Fordere deine Freunde heraus!",
      educationalLevel: "Universität",
      inLanguage: "de",
      provider: { "@type": "Organization", name: "MedMaster", url: "https://medmaster.at" },
      isAccessibleForFree: true,
      url: "https://medmaster.at/challenge",
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // ── INTRO ──────────────────────────────────────────────────────
  if (phase === "intro") {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center bg-linear-to-br from-[#1b3ea7] to-[#3655b2]">
              <Zap className="w-10 h-10 text-white" />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-[var(--text-primary)]">
                MedAT Quiz-Challenge
              </h1>
              <p className="text-[var(--muted)] mt-2">
                {QUESTION_COUNT} Fragen &bull; {TIME_PER_QUESTION}s pro Frage &bull;{" "}
                <span className={config.color}>
                  {config.emoji} {config.label}
                </span>
              </p>
            </div>

            {challengeSeed && (
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                <p className="text-sm text-amber-800 dark:text-amber-200 font-medium">
                  Du wurdest herausgefordert! Gleiche Fragen, gleiche Bedingungen.
                </p>
              </div>
            )}

            <div className="space-y-3">
              <Button
                onClick={() => setPhase("quiz")}
                className="w-full h-12 text-lg font-semibold text-white"
                style={{ backgroundColor: NAVY }}
              >
                Challenge starten
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              {!challengeSeed && (
                <div className="flex flex-wrap justify-center gap-2">
                  {Object.entries(SUBJECT_CONFIG)
                    .filter(([k]) => k !== subject)
                    .map(([key, cfg]) => (
                      <Link
                        key={key}
                        to={`/challenge?fach=${key}`}
                        className="text-xs px-3 py-1.5 rounded-full bg-[var(--surface)] hover:bg-accent transition"
                      >
                        {cfg.emoji} {cfg.label}
                      </Link>
                    ))}
                </div>
              )}
            </div>

            <p className="text-xs text-[var(--muted)]">
              Kostenlos &bull; Kein Account nötig &bull; Ergebnis sofort teilbar
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ── QUIZ ───────────────────────────────────────────────────────
  if (phase === "quiz" && questions[current]) {
    const q = questions[current];
    const answered = answers[q.id];

    return (
      <div className="min-h-screen bg-[var(--background)] p-4">
        <div className="max-w-lg mx-auto space-y-4">
          {/* Header: timer + progress */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Timer className="w-4 h-4 text-[var(--muted)]" />
              <span
                className={timeLeft < 30 ? "text-red-500 font-bold" : "text-[var(--text-primary)]"}
              >
                {formatTime(timeLeft)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current
                      ? "bg-[#1b3ea7] scale-125"
                      : i < current
                        ? answers[questions[i].id] === questions[i].correctOptionId
                          ? "bg-green-500"
                          : "bg-red-400"
                        : "bg-[var(--muted)]/30"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-[var(--muted)]">
              {current + 1}/{QUESTION_COUNT}
            </span>
          </div>

          {/* Question */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <p className="text-lg font-semibold text-[var(--text-primary)] leading-relaxed">
                {q.text}
              </p>

              <div className="space-y-2">
                {q.options.map((opt, i) => {
                  const isSelected = answered === opt.id;
                  const isCorrect = opt.id === q.correctOptionId;
                  const showResult = !!answered;

                  let style =
                    "border-[var(--border)] hover:border-[#1b3ea7] hover:bg-blue-50/50 dark:hover:bg-blue-900/20 cursor-pointer";
                  if (showResult && isCorrect)
                    style = "border-green-500 bg-green-50 dark:bg-green-900/20";
                  else if (showResult && isSelected && !isCorrect)
                    style = "border-red-400 bg-red-50 dark:bg-red-900/20";
                  else if (showResult) style = "border-[var(--border)] opacity-60";

                  return (
                    <button
                      key={opt.id}
                      onClick={() => !answered && handleAnswer(opt.id)}
                      disabled={!!answered}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl border-2 transition-all text-left ${style}`}
                    >
                      <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-[var(--surface)] font-bold text-sm">
                        {OPTION_LABELS[i]}
                      </span>
                      <span className="flex-1 text-sm">{opt.text}</span>
                      {showResult && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      )}
                      {showResult && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Auto-advance after answering */}
              {answered && current < questions.length - 1 && (
                <Button
                  onClick={() => setCurrent((c) => c + 1)}
                  className="w-full text-white"
                  style={{ backgroundColor: NAVY }}
                >
                  Nächste Frage
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              )}
              {answered && current === questions.length - 1 && (
                <Button
                  onClick={() => setPhase("results")}
                  className="w-full text-white"
                  style={{ backgroundColor: NAVY }}
                >
                  Ergebnis anzeigen
                  <Trophy className="w-4 h-4 ml-1" />
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // ── RESULTS ────────────────────────────────────────────────────
  const emoji = pct >= 90 ? "🏆" : pct >= 70 ? "💪" : pct >= 50 ? "📚" : "🔥";
  const message =
    pct >= 90
      ? "Ausgezeichnet!"
      : pct >= 70
        ? "Stark! Gute Basis."
        : pct >= 50
          ? "Solide — weiter üben!"
          : "Hier ist Potential!";

  return (
    <div className="min-h-screen bg-[var(--background)] p-4">
      <div className="max-w-lg mx-auto space-y-6">
        {/* Score card */}
        <Card>
          <CardContent className="p-8 text-center space-y-4">
            <div className="text-5xl">{emoji}</div>
            <div>
              <div className="text-4xl font-bold" style={{ color: NAVY }}>
                {score}/{QUESTION_COUNT}
              </div>
              <p className="text-[var(--muted)] mt-1">
                {pct}% richtig &bull; {formatTime(totalTime)}
              </p>
              <p className="text-lg font-semibold mt-2 text-[var(--text-primary)]">{message}</p>
            </div>

            {/* Score bar */}
            <div className="w-full max-w-xs mx-auto">
              <div className="w-full bg-[var(--surface)] rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all ${
                    pct >= 80 ? "bg-green-500" : pct >= 50 ? "bg-amber-500" : "bg-red-500"
                  }`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>

            {/* Share */}
            <div className="pt-4 space-y-4">
              <div className="bg-[var(--surface)] rounded-xl p-4 space-y-3">
                <p className="text-sm font-bold text-[var(--text-primary)]">
                  Fordere deine Freunde heraus!
                </p>
                <p className="text-xs text-[var(--muted)]">
                  Teile dein Ergebnis — deine Freunde bekommen die gleichen Fragen.
                </p>
                <ShareResultButton
                  text={shareGenericText}
                  whatsAppText={shareWhatsAppText}
                  challengeLink={challengeLink}
                  onShare={handleShareTrack}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Question review */}
        <div className="space-y-3">
          {questions.map((q, i) => {
            const userAnswer = answers[q.id];
            const correct = userAnswer === q.correctOptionId;
            return (
              <Card
                key={q.id}
                className={`border-l-4 ${correct ? "border-l-green-500" : "border-l-red-400"}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-2">
                    {correct ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    )}
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-[var(--text-primary)]">
                        {i + 1}. {q.text}
                      </p>
                      {!correct && (
                        <p className="text-xs text-green-600">
                          Richtig:{" "}
                          {OPTION_LABELS[q.options.findIndex((o) => o.id === q.correctOptionId)]}){" "}
                          {q.options.find((o) => o.id === q.correctOptionId)?.text}
                        </p>
                      )}
                      {q.explanation && (
                        <p className="text-xs text-[var(--muted)] mt-1">{q.explanation}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <Card className="border-2" style={{ borderColor: NAVY }}>
          <CardContent className="p-6 text-center space-y-4">
            <h3 className="text-lg font-bold text-[var(--text-primary)]">Bereit für mehr?</h3>
            <p className="text-sm text-[var(--muted)]">
              5.000+ Übungsfragen &bull; Alle MedAT-Bereiche &bull; KI-Adaptiv &bull; 2 Wochen
              gratis
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-colors"
                style={{ backgroundColor: NAVY }}
              >
                Kostenlos starten
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to={`/challenge?fach=${subject}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 font-semibold transition-colors hover:bg-accent"
                style={{ borderColor: NAVY, color: NAVY }}
              >
                Nochmal spielen
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
