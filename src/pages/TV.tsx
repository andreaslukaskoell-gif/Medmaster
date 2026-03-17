import { useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  Send,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import { PageEmpty, PageError } from "@/components/ui/page-states";
import { FloatingQuestionCounter } from "@/components/ui/FloatingQuestionCounter";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";
import { usePageTitle } from "@/hooks/usePageTitle";
import StrategyGuideView from "@/components/shared/StrategyGuideView";
import { stripMarkdownAsterisks } from "@/utils/formatExplanation";
import { tvStrategyGuide, tvTexts } from "@/data/tvData";
import { tvTextSets } from "@/data/tvTextsExpanded";
import { tvTextSets2 } from "@/data/tvTextsExpanded2";
import {
  tvOffiziellTexte,
  OFFICIAL_TV_INSTRUCTION,
  type TVAussagenOptionId,
} from "@/data/tvOffiziell";
import { OfficialInstructionCard } from "@/components/shared/OfficialInstructionCard";
import { useStore } from "@/store/useStore";
import { useSessionTimer } from "@/hooks/useSessionTimer";
import type { TVTextSet } from "@/data/tvTextsExpanded";

const allTextSets: TVTextSet[] = [...tvTextSets, ...tvTextSets2];

type TvView =
  | "overview"
  | "strategy"
  | "legacy-quiz"
  | "legacy-results"
  | "set-quiz"
  | "set-results"
  | "aussagen-quiz"
  | "aussagen-results";

const LABELS = ["A", "B", "C", "D", "E"];

export default function TV() {
  usePageTitle("TV – Textverständnis");
  const location = useLocation();
  const dailyPlanTvTexts = location.state?.dailyPlanTvTexts as number | undefined;

  const [view, setView] = useState<TvView>("overview");
  // Legacy mode
  const [selectedTextIndex, setSelectedTextIndex] = useState(0);
  const [legacyAnswers, setLegacyAnswers] = useState<Record<string, boolean | null>>({});
  // Set mode
  const [selectedSetIndex, setSelectedSetIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [mcAnswers, setMcAnswers] = useState<Record<string, number>>({});
  // Aussagen mode
  const [selectedAussagenIndex, setSelectedAussagenIndex] = useState(0);
  const [aussagenAnswers, setAussagenAnswers] = useState<Record<string, TVAussagenOptionId>>({});
  // Collapse toggles
  const [showAllLegacy, setShowAllLegacy] = useState(false);
  const [showAllOffiziell, setShowAllOffiziell] = useState(false);
  const { addXP, checkStreak, saveQuizResult, logActivity } = useStore();
  const getMinutes = useSessionTimer();

  const tvText = tvTexts[selectedTextIndex];
  const currentSet = allTextSets[selectedSetIndex];

  const allSetQuestions = useMemo(() => {
    if (!currentSet) return [];
    return currentSet.texts.flatMap((t) => t.questions);
  }, [currentSet]);

  useKeyboardShortcuts({
    disabled: view !== "set-quiz",
    onNext: () => {
      if (view === "set-quiz" && currentSet && textIndex < currentSet.texts.length - 1)
        setTextIndex((i) => i + 1);
    },
    onPrev: () => {
      if (view === "set-quiz" && textIndex > 0) setTextIndex((i) => i - 1);
    },
  });

  if (!tvTexts?.length && !allTextSets?.length) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <BreadcrumbNav items={[{ label: "Dashboard", href: "/" }, { label: "TV" }]} />
        <PageEmpty
          message="Keine TV-Texte geladen."
          action={
            <Button asChild variant="outline" className="gap-2">
              <Link to="/dashboard">
                <BookOpen className="w-4 h-4" />
                Zum Dashboard
              </Link>
            </Button>
          }
        />
      </div>
    );
  }

  // --- Legacy quiz handlers ---
  const handleStartLegacy = (textIdx: number) => {
    setSelectedTextIndex(textIdx);
    setLegacyAnswers({});
    setView("legacy-quiz");
  };

  const handleSubmitLegacy = () => {
    const statements = tvText.statements;
    const score = statements.filter((s) => legacyAnswers[s.id] === s.isDerivable).length;
    saveQuizResult({
      id: `tv-${Date.now()}`,
      type: "tv",
      subject: tvText.title,
      score,
      total: statements.length,
      date: new Date().toLocaleDateString("de-AT"),
      durationMinutes: getMinutes(),
      answers: statements.map((s) => ({
        questionId: s.id,
        selectedAnswer: String(legacyAnswers[s.id]),
        correct: legacyAnswers[s.id] === s.isDerivable,
      })),
    });
    logActivity(statements.length, getMinutes());
    addXP(score * 10);
    checkStreak();
    setView("legacy-results");
  };

  // --- Set quiz handlers ---
  const handleStartSet = (setIdx: number) => {
    setSelectedSetIndex(setIdx);
    setTextIndex(0);
    setMcAnswers({});
    setView("set-quiz");
  };

  const handleSubmitSet = () => {
    const score = allSetQuestions.filter((q) => mcAnswers[q.id] === q.correctOption).length;
    saveQuizResult({
      id: `tv-set-${Date.now()}`,
      type: "tv",
      subject: currentSet.name,
      score,
      total: allSetQuestions.length,
      date: new Date().toLocaleDateString("de-AT"),
      durationMinutes: getMinutes(),
      answers: allSetQuestions.map((q) => ({
        questionId: q.id,
        selectedAnswer: mcAnswers[q.id] !== undefined ? LABELS[mcAnswers[q.id]] : "",
        correct: mcAnswers[q.id] === q.correctOption,
      })),
    });
    logActivity(allSetQuestions.length, getMinutes());
    addXP(score * 10);
    checkStreak();
    setView("set-results");
  };

  // --- Aussagen mode handlers ---
  const currentAussagenText = tvOffiziellTexte[selectedAussagenIndex];
  const allAussagenFragen = tvOffiziellTexte[selectedAussagenIndex]?.fragen ?? [];

  const handleStartAussagen = (idx: number) => {
    setSelectedAussagenIndex(idx);
    setAussagenAnswers({});
    setView("aussagen-quiz");
  };

  const handleSubmitAussagen = () => {
    const score = allAussagenFragen.filter(
      (q) => aussagenAnswers[q.id] === q.correctOptionId
    ).length;
    saveQuizResult({
      id: `tv-aussagen-${crypto.randomUUID()}`,
      type: "tv",
      subject: `TV Aussagen: ${currentAussagenText?.title ?? ""}`,
      score,
      total: allAussagenFragen.length,
      date: new Date().toLocaleDateString("de-AT"),
      durationMinutes: getMinutes(),
      answers: allAussagenFragen.map((q) => ({
        questionId: q.id,
        selectedAnswer: aussagenAnswers[q.id] ?? "",
        correct: aussagenAnswers[q.id] === q.correctOptionId,
      })),
    });
    logActivity(allAussagenFragen.length, getMinutes());
    addXP(score * 15);
    checkStreak();
    setView("aussagen-results");
  };

  // ===== STRATEGY =====
  if (view === "strategy") {
    return <StrategyGuideView guide={tvStrategyGuide} onBack={() => setView("overview")} />;
  }

  // Guard: Legacy-Views brauchen tvText
  if ((view === "legacy-quiz" || view === "legacy-results") && !tvText) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <PageError
          message="Text nicht verfügbar."
          action={<Button onClick={() => setView("overview")}>Zur Übersicht</Button>}
        />
      </div>
    );
  }

  // Guard: Set-Views brauchen currentSet
  if ((view === "set-quiz" || view === "set-results") && !currentSet) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <PageError
          message="Textset nicht verfügbar."
          action={<Button onClick={() => setView("overview")}>Zur Übersicht</Button>}
        />
      </div>
    );
  }

  // ===== LEGACY RESULTS =====
  if (view === "legacy-results") {
    const statements = tvText.statements;
    const score = statements.filter((s) => legacyAnswers[s.id] === s.isDerivable).length;
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={() => setView("overview")}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold text-[var(--accent)]/60">
              {score}/{statements.length}
            </div>
            <p className="text-[var(--muted)] mt-1">
              {Math.round((score / statements.length) * 100)}% richtig
            </p>
          </CardContent>
        </Card>
        {statements.map((s, i) => {
          const correct = legacyAnswers[s.id] === s.isDerivable;
          return (
            <Card
              key={s.id}
              className={`border-l-4 ${correct ? "border-l-green-500" : "border-l-red-500"}`}
            >
              <CardContent className="p-5">
                <div className="flex items-start gap-2 mb-2">
                  {correct ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  )}
                  <span className="text-sm font-medium text-[var(--text-primary)]">
                    {i + 1}. {s.text}
                  </span>
                </div>
                <div className="ml-7 space-y-1">
                  <p className="text-sm">
                    Richtig:{" "}
                    <Badge variant={s.isDerivable ? "success" : "danger"}>
                      {s.isDerivable ? "Ableitbar" : "Nicht ableitbar"}
                    </Badge>
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg mt-2">
                    <p className="text-xs text-blue-700 dark:text-blue-300">
                      {stripMarkdownAsterisks(s.explanation)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
        <div className="flex justify-center">
          <Button onClick={() => setView("overview")}>Zurück</Button>
        </div>
      </div>
    );
  }

  // ===== LEGACY QUIZ =====
  if (view === "legacy-quiz") {
    const statements = tvText.statements;
    const allAnswered = statements.every(
      (s) => legacyAnswers[s.id] !== undefined && legacyAnswers[s.id] !== null
    );
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={() => setView("overview")}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen
        </Button>
        <Card>
          <CardHeader>
            <CardTitle className="text-[var(--text-primary)]">{tvText.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
              {tvText.content}
            </div>
          </CardContent>
        </Card>
        <h2 className="text-lg font-semibold text-[var(--text-primary)]">Aussagen bewerten</h2>
        <div className="space-y-3">
          {statements.map((s, i) => (
            <Card key={s.id}>
              <CardContent className="p-4">
                <p className="text-sm font-medium text-[var(--text-primary)] mb-3">
                  {i + 1}. {s.text}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLegacyAnswers((p) => ({ ...p, [s.id]: true }))}
                    className={`flex-1 px-3 py-2 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${legacyAnswers[s.id] === true ? "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300" : "border-[var(--border)] border-[var(--border)] hover:bg-[var(--border)]/50 text-[var(--text-secondary)]"}`}
                  >
                    Ableitbar
                  </button>
                  <button
                    onClick={() => setLegacyAnswers((p) => ({ ...p, [s.id]: false }))}
                    className={`flex-1 px-3 py-2 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${legacyAnswers[s.id] === false ? "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300" : "border-[var(--border)] border-[var(--border)] hover:bg-[var(--border)]/50 text-[var(--text-secondary)]"}`}
                  >
                    Nicht ableitbar
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Button onClick={handleSubmitLegacy} disabled={!allAnswered} size="lg">
            <Send className="w-4 h-4 mr-2" /> Auswertung
          </Button>
        </div>
      </div>
    );
  }

  // ===== SET RESULTS =====
  if (view === "set-results") {
    const score = allSetQuestions.filter((q) => mcAnswers[q.id] === q.correctOption).length;
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={() => setView("overview")}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold text-[var(--accent)]/60">
              {score}/{allSetQuestions.length}
            </div>
            <p className="text-[var(--muted)] mt-1">
              {Math.round((score / allSetQuestions.length) * 100)}% richtig
            </p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">+{score * 10} XP</p>
          </CardContent>
        </Card>
        {currentSet.texts.map((t) => (
          <div key={t.id} className="space-y-3">
            <h3 className="text-sm font-semibold text-[var(--text-primary)] border-l-4 border-[var(--accent)] pl-3">
              {t.title}
            </h3>
            {t.questions.map((q) => {
              const userAnswer = mcAnswers[q.id];
              const isCorrect = userAnswer === q.correctOption;
              return (
                <Card
                  key={q.id}
                  className={`border-l-4 ${isCorrect ? "border-l-green-500" : "border-l-red-500"}`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-2 mb-2">
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                      )}
                      <span className="text-sm font-medium text-[var(--text-primary)]">
                        {q.question}
                      </span>
                    </div>
                    <div className="ml-7 space-y-1">
                      {q.options.map((opt, oi) => (
                        <div
                          key={oi}
                          className={`text-xs px-2 py-1 rounded ${
                            oi === q.correctOption
                              ? "bg-green-50 dark:bg-green-900/10 text-green-700 dark:text-green-400 font-medium"
                              : oi === userAnswer
                                ? "bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 line-through"
                                : "text-[var(--muted)]"
                          }`}
                        >
                          {LABELS[oi]}) {opt}
                        </div>
                      ))}
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded mt-1">
                        <p className="text-xs text-blue-700 dark:text-blue-300">
                          {stripMarkdownAsterisks(q.explanation)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ))}
        <div className="flex justify-center">
          <Button onClick={() => setView("overview")}>Zurück</Button>
        </div>
      </div>
    );
  }

  // ===== SET QUIZ =====
  if (view === "set-quiz") {
    const currentText = currentSet.texts[textIndex];
    const totalQuestionsAnswered = allSetQuestions.filter(
      (q) => mcAnswers[q.id] !== undefined
    ).length;
    const currentTextAllAnswered = currentText.questions.every(
      (q) => mcAnswers[q.id] !== undefined
    );
    void currentTextAllAnswered;
    const allAnswered = allSetQuestions.every((q) => mcAnswers[q.id] !== undefined);

    return (
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-2">
          <Button variant="ghost" size="sm" onClick={() => setView("overview")}>
            <ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen
          </Button>
          <div className="flex items-center gap-2">
            <Badge variant="info">
              Text {textIndex + 1}/{currentSet.texts.length}
            </Badge>
            <span className="text-sm text-[var(--muted)]">
              {totalQuestionsAnswered}/{allSetQuestions.length} beantwortet
            </span>
          </div>
        </div>
        <div className="w-full bg-[var(--border)] rounded-full h-2">
          <div
            className="bg-[var(--accent)] h-2 rounded-full transition-all"
            style={{ width: `${(totalQuestionsAnswered / allSetQuestions.length) * 100}%` }}
          />
        </div>

        {/* Text tabs */}
        <div className="flex gap-1 overflow-x-auto pb-2 -mx-1 px-1">
          {currentSet.texts.map((t, ti) => (
            <button
              key={t.id}
              onClick={() => setTextIndex(ti)}
              className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                ti === textIndex
                  ? "bg-[var(--accent)]/10 dark:bg-[var(--accent)]/10 text-[var(--accent)]/60"
                  : "bg-[var(--border)]/50 text-[var(--muted)] hover:bg-[var(--border)]"
              }`}
            >
              {ti + 1}. {t.title.slice(0, 20)}
              {t.title.length > 20 ? "..." : ""}
            </button>
          ))}
        </div>

        {/* Split-pane: text (sticky on desktop) + questions side by side */}
        <div className="grid grid-cols-2 gap-6">
          {/* Text content — sticky on desktop */}
          <div className="sticky top-20 self-start max-h-[calc(100vh-6rem)] overflow-y-auto pr-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-[var(--text-primary)] text-base">
                  {currentText.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                  {currentText.content}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Questions for current text */}
          <div className="space-y-3">
            {currentText.questions.map((q) => (
              <Card key={q.id}>
                <CardContent className="p-4">
                  <p className="text-sm font-medium text-[var(--text-primary)] mb-3">
                    {q.question}
                  </p>
                  <div className="space-y-2">
                    {q.options.map((opt, oi) => (
                      <button
                        key={oi}
                        onClick={() => setMcAnswers((p) => ({ ...p, [q.id]: oi }))}
                        className={`w-full text-left px-3 py-2.5 rounded-lg border text-sm transition-colors cursor-pointer ${
                          mcAnswers[q.id] === oi
                            ? "border-[var(--accent)] bg-[var(--accent)]/5 dark:bg-[var(--accent)]/10 text-[var(--accent)]/30"
                            : "border-[var(--border)] border-[var(--border)] hover:bg-[var(--border)]/50 text-[var(--text-secondary)]"
                        }`}
                      >
                        <span className="font-semibold mr-1.5">{LABELS[oi]})</span>
                        {opt}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex justify-between gap-2">
          <Button
            variant="outline"
            onClick={() => setTextIndex((i) => i - 1)}
            disabled={textIndex === 0}
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Voriger
          </Button>
          {textIndex < currentSet.texts.length - 1 ? (
            <Button onClick={() => setTextIndex((i) => i + 1)}>
              Nächster <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Button variant="premium" onClick={handleSubmitSet} disabled={!allAnswered}>
              <Send className="w-4 h-4 mr-1" /> Auswertung
            </Button>
          )}
        </div>
        <FloatingQuestionCounter current={totalQuestionsAnswered} total={allSetQuestions.length} />
      </div>
    );
  }

  // ===== AUSSAGEN RESULTS =====
  if (view === "aussagen-results" && currentAussagenText) {
    const score = allAussagenFragen.filter(
      (q) => aussagenAnswers[q.id] === q.correctOptionId
    ).length;
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={() => setView("overview")}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Zurück
        </Button>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-4xl font-bold text-[var(--accent)]/60">
              {score}/{allAussagenFragen.length}
            </div>
            <p className="text-[var(--muted)] mt-1">
              {Math.round((score / allAussagenFragen.length) * 100)}% richtig
            </p>
          </CardContent>
        </Card>
        {allAussagenFragen.map((q, qi) => {
          const sel = aussagenAnswers[q.id];
          const isCorrect = sel === q.correctOptionId;
          return (
            <Card
              key={q.id}
              className={`border-l-4 ${isCorrect ? "border-l-green-500" : "border-l-red-500"}`}
            >
              <CardContent className="p-5">
                <p className="text-sm font-medium text-[var(--text-primary)] mb-3">
                  Frage {qi + 1}: {q.frageText}
                </p>
                <div className="space-y-1 mb-3">
                  {q.aussagen.map((a) => (
                    <p key={a.nr} className="text-xs text-[var(--text-secondary)] ml-2">
                      {a.nr}. {a.text}
                    </p>
                  ))}
                </div>
                <div className="space-y-1">
                  {q.kombinationen.map((k) => (
                    <div
                      key={k.key}
                      className={`text-xs px-2 py-1.5 rounded flex items-center gap-2 ${
                        k.key === q.correctOptionId
                          ? "bg-green-50 dark:bg-green-900/10 font-medium"
                          : sel === k.key
                            ? "bg-red-50 dark:bg-red-900/10"
                            : ""
                      }`}
                    >
                      {k.key === q.correctOptionId ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                      ) : sel === k.key ? (
                        <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      ) : (
                        <span className="w-3.5 shrink-0" />
                      )}
                      <span>
                        {k.key}. {k.beschreibung}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg mt-3">
                  <p className="text-xs text-blue-700 dark:text-blue-300">{q.explanation}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
        <div className="flex justify-center">
          <Button onClick={() => setView("overview")}>Zurück</Button>
        </div>
      </div>
    );
  }

  // ===== AUSSAGEN QUIZ =====
  if (view === "aussagen-quiz" && currentAussagenText) {
    const allAussagenAnswered = allAussagenFragen.every((q) => aussagenAnswers[q.id] !== undefined);
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Button variant="ghost" size="sm" onClick={() => setView("overview")}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Abbrechen
        </Button>
        <Badge variant="info" className="w-fit">
          Offizielles Aussagen-Format
        </Badge>
        {/* Text */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[var(--text-primary)]">
              {currentAussagenText.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
              {currentAussagenText.text}
            </div>
          </CardContent>
        </Card>

        {/* Questions */}
        {allAussagenFragen.map((q, qi) => (
          <Card key={q.id}>
            <CardContent className="p-5">
              <p className="text-sm font-medium text-[var(--text-primary)] mb-3">
                Frage {qi + 1}: {q.frageText}
              </p>
              {/* Numbered statements */}
              <div className="bg-[var(--border)]/30 p-4 rounded-lg mb-4 space-y-2">
                {q.aussagen.map((a) => (
                  <p key={a.nr} className="text-sm text-[var(--text-primary)]">
                    <span className="font-medium mr-1">{a.nr}.</span> {a.text}
                  </p>
                ))}
              </div>
              {/* Combination options A-E */}
              <div className="space-y-2">
                {q.kombinationen.map((k) => {
                  const isSelected = aussagenAnswers[q.id] === k.key;
                  return (
                    <button
                      key={k.key}
                      onClick={() => setAussagenAnswers((p) => ({ ...p, [q.id]: k.key }))}
                      className={`w-full text-left px-3 py-2.5 rounded-lg border text-sm transition-colors cursor-pointer ${
                        isSelected
                          ? "border-[var(--accent)] bg-[var(--accent)]/5 dark:bg-[var(--accent)]/10 text-[var(--accent)]/30"
                          : "border-[var(--border)] border-[var(--border)] hover:bg-[var(--border)]/50 text-[var(--text-secondary)]"
                      }`}
                    >
                      <span className="font-semibold mr-1.5">{k.key}.</span>
                      {k.beschreibung}
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}

        <Button onClick={handleSubmitAussagen} disabled={!allAussagenAnswered} className="w-full">
          <Send className="w-4 h-4 mr-1" /> Auswertung
        </Button>
      </div>
    );
  }

  // ===== OVERVIEW =====
  const difficultyColors: Record<string, string> = {
    leicht: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
    mittel: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400",
    schwer: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400",
  };

  const displayedLegacyTexts = showAllLegacy ? tvTexts : tvTexts.slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <BreadcrumbNav items={[{ label: "Dashboard", href: "/" }, { label: "TV" }]} />

      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">Textverständnis</h1>
          <span className="text-xs font-semibold text-[var(--accent)] bg-[var(--accent)]/10 px-2.5 py-1 rounded-full">
            10% des MedAT
          </span>
        </div>
        <div className="flex items-center gap-4 text-sm text-[var(--muted)]">
          <span>5 Texte · 35 Minuten · Multiple-Choice</span>
          <span className="text-[var(--border)]">|</span>
          <button
            onClick={() => setView("strategy")}
            className="text-[var(--accent)] hover:underline cursor-pointer flex items-center gap-1"
          >
            <BookOpen className="w-3.5 h-3.5" />
            Strategie-Guide
          </button>
        </div>
        {dailyPlanTvTexts != null && dailyPlanTvTexts > 0 && (
          <div className="text-xs text-[var(--accent)] font-medium mt-2">
            Lernplan heute: {dailyPlanTvTexts} Text{dailyPlanTvTexts > 1 ? "e" : ""}
          </div>
        )}
      </div>

      {/* MC Text Sets — primary section */}
      {allTextSets.length > 0 && (
        <section className="space-y-3">
          <div className="flex items-baseline justify-between">
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">Testsets</h2>
            <span className="text-xs text-[var(--muted)]">Je 5 Texte mit MC-Fragen</span>
          </div>
          <div className="rounded-xl border border-[var(--border)] divide-y divide-[var(--border)] overflow-hidden">
            {allTextSets.map((set, i) => {
              const totalQ = set.texts.reduce((sum, t) => sum + t.questions.length, 0);
              return (
                <button
                  key={set.id}
                  onClick={() => handleStartSet(i)}
                  className="w-full flex items-center gap-4 px-5 py-3.5 text-left hover:bg-[var(--accent)]/3 transition-colors cursor-pointer group"
                >
                  <span className="text-xs font-bold text-[var(--muted)] tabular-nums w-5 text-center shrink-0">
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium text-[var(--text-primary)] truncate block">
                      {set.name}
                    </span>
                  </div>
                  <Badge
                    className={`text-[10px] shrink-0 ${difficultyColors[set.difficulty] || ""}`}
                  >
                    {set.difficulty}
                  </Badge>
                  <span className="text-xs text-[var(--muted)] shrink-0 tabular-nums">
                    {totalQ} Fragen
                  </span>
                  <ArrowRight className="w-4 h-4 text-[var(--muted)] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* Offizielles Aussagen-Format */}
      <section className="space-y-3 border-t border-[var(--border)] pt-8">
        <div className="flex items-baseline justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">Offizielles Format</h2>
            <Badge variant="info" className="text-[10px]">
              MedAT
            </Badge>
          </div>
          <OfficialInstructionCard
            title="Offizielle Instruktion: Textverständnis"
            instruction={OFFICIAL_TV_INSTRUCTION}
          />
        </div>
        <p className="text-sm text-[var(--muted)]">
          Aussagen-Kombination: Nummerierte Aussagen bewerten, dann passende Kombination (A–E)
          wählen
        </p>
        <div className="rounded-xl border border-[var(--border)] divide-y divide-[var(--border)] overflow-hidden">
          {(showAllOffiziell ? tvOffiziellTexte : tvOffiziellTexte.slice(0, 5)).map((t, i) => (
            <button
              key={t.id}
              onClick={() => handleStartAussagen(i)}
              className="w-full flex items-center gap-4 px-5 py-3.5 text-left hover:bg-[var(--accent)]/3 transition-colors cursor-pointer group"
            >
              <span className="text-xs font-bold text-[var(--muted)] tabular-nums w-5 text-center shrink-0">
                {i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <span className="text-sm font-medium text-[var(--text-primary)] truncate block">
                  {t.title}
                </span>
              </div>
              {i < 2 && (
                <Badge variant="info" className="text-[10px] shrink-0">
                  Offiziell
                </Badge>
              )}
              <span className="text-xs text-[var(--muted)] shrink-0 tabular-nums">
                {t.fragen.length} Fragen
              </span>
              <ArrowRight className="w-4 h-4 text-[var(--muted)] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
        {tvOffiziellTexte.length > 5 && !showAllOffiziell && (
          <div className="flex justify-center pt-1">
            <button
              onClick={() => setShowAllOffiziell(true)}
              className="flex items-center gap-2 text-sm text-[var(--accent)] hover:opacity-80 transition-opacity cursor-pointer"
            >
              <ChevronDown className="w-4 h-4" /> Alle {tvOffiziellTexte.length} Texte anzeigen
            </button>
          </div>
        )}
        {showAllOffiziell && tvOffiziellTexte.length > 5 && (
          <div className="flex justify-center pt-1">
            <button
              onClick={() => setShowAllOffiziell(false)}
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
            >
              Weniger anzeigen
            </button>
          </div>
        )}
      </section>

      {/* Klassischer Modus */}
      <section className="space-y-3 border-t border-[var(--border)] pt-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-semibold text-[var(--text-primary)]">Klassischer Modus</h2>
          <span className="text-xs text-[var(--muted)]">Ableitbar / Nicht ableitbar</span>
        </div>
        <div className="rounded-xl border border-[var(--border)] divide-y divide-[var(--border)] overflow-hidden">
          {displayedLegacyTexts.map((t, i) => (
            <button
              key={t.id}
              onClick={() => handleStartLegacy(i)}
              className="w-full flex items-center gap-4 px-5 py-3.5 text-left hover:bg-[var(--accent)]/3 transition-colors cursor-pointer group"
            >
              <span className="text-xs font-bold text-[var(--muted)] tabular-nums w-5 text-center shrink-0">
                {i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <span className="text-sm font-medium text-[var(--text-primary)] truncate block">
                  {t.title}
                </span>
              </div>
              <span className="text-xs text-[var(--muted)] shrink-0 tabular-nums">
                {t.statements.length} Aussagen
              </span>
              <ArrowRight className="w-4 h-4 text-[var(--muted)] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>

        {/* Show more toggle */}
        {tvTexts.length > 3 && !showAllLegacy && (
          <div className="flex justify-center pt-1">
            <button
              onClick={() => setShowAllLegacy(true)}
              className="flex items-center gap-2 text-sm text-[var(--accent)] hover:opacity-80 transition-opacity cursor-pointer"
            >
              <ChevronDown className="w-4 h-4" /> Alle {tvTexts.length} Texte anzeigen
            </button>
          </div>
        )}
        {showAllLegacy && tvTexts.length > 3 && (
          <div className="flex justify-center pt-1">
            <button
              onClick={() => setShowAllLegacy(false)}
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
            >
              Weniger anzeigen
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
