// src/components/chapter/KapitelFortschritt.tsx
import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";

interface KapitelFortschrittProps {
  chapterTitle: string;
  xp?: number;
}

export function KapitelFortschritt({ chapterTitle, xp = 25 }: KapitelFortschrittProps) {
  const [completed, setCompleted] = useState(false);

  if (!completed) {
    return (
      <div className="mt-10 text-center">
        <Button
          size="lg"
          onClick={() => setCompleted(true)}
          className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-base"
        >
          Kapitel als abgeschlossen markieren
        </Button>
      </div>
    );
  }

  return (
    <div className="mt-10 bg-linear-to-r from-teal-50 to-emerald-50 dark:from-teal-900/30 dark:to-emerald-900/30 border border-teal-200 dark:border-teal-700 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-500">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 dark:bg-teal-800 rounded-full mb-4">
        <CheckCircle2 className="w-10 h-10 text-teal-600 dark:text-teal-400" />
      </div>
      <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-1">
        Kapitel abgeschlossen!
      </h3>
      <p className="text-teal-600 dark:text-teal-400 text-sm mb-3">{chapterTitle}</p>
      <div className="inline-block bg-teal-600 text-white font-bold text-lg px-6 py-2 rounded-full">
        +{xp} XP
      </div>
    </div>
  );
}

// src/components/chapter/KapitelHeader.tsx
interface KapitelHeaderProps {
  icon: string;
  subject: string;
  chapterNumber: string;
  title: string;
  subtitle: string;
  readingTime?: string;
  level?: string;
  frequency?: string;
}

export function KapitelHeader({
  icon,
  subject,
  chapterNumber,
  title,
  subtitle,
  readingTime = "~45 Minuten",
  level = "Grundlage",
  frequency = "Häufig geprüft",
}: KapitelHeaderProps) {
  return (
    <div className="bg-linear-to-r from-teal-600 to-teal-800 text-white rounded-2xl p-8 mb-8">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">{icon}</span>
        <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
          {subject} • {chapterNumber}
        </span>
      </div>
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-teal-100 mb-4">{subtitle}</p>
      <div className="flex gap-6 text-sm text-teal-200">
        <span>⏱ {readingTime}</span>
        <span>📊 {level}</span>
        <span>🎯 {frequency}</span>
      </div>
    </div>
  );
}

// src/components/chapter/KeyFactsGrid.tsx
interface KeyFactsGridProps {
  title: string;
  facts: { label: string; value: string }[];
}

export function KeyFactsGrid({ title, facts }: KeyFactsGridProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 my-8">
      <h3 className="font-bold text-slate-950 dark:text-white mb-4 flex items-center gap-2">
        📋 Key Facts — {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {facts.map((fact, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="text-teal-500 font-bold mt-0.5">•</span>
            <span className="text-sm text-slate-900 dark:text-slate-100">
              {fact.label}: <strong className="text-slate-950 dark:text-white">{fact.value}</strong>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// src/components/chapter/LernzielBox.tsx
interface LernzielBoxProps {
  items: string[];
}

export function LernzielBox({ items }: LernzielBoxProps) {
  return (
    <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 rounded-r-xl p-6 mb-8">
      <h3 className="font-bold text-teal-800 dark:text-teal-300 mb-3 flex items-center gap-2">
        🎯 Lernziele — Nach diesem Kapitel kannst du:
      </h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-teal-500 mt-1">✓</span>
            <span className="text-teal-900 dark:text-teal-200 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// src/components/chapter/MerksatzBox.tsx
interface MerksatzBoxProps {
  text: string;
  type?: "merke" | "altfragen" | "klinisch" | "achtung" | "tipp";
}

const config = {
  merke: {
    icon: "💡",
    label: "Merke",
    bg: "bg-amber-50 dark:bg-amber-900/20",
    border: "border-amber-300 dark:border-amber-700",
    title: "text-amber-800 dark:text-amber-300",
    body: "text-amber-900 dark:text-amber-200",
  },
  altfragen: {
    icon: "🎯",
    label: "Altfragen-Klassiker",
    bg: "bg-red-50 dark:bg-red-900/20",
    border: "border-red-300 dark:border-red-700",
    title: "text-red-800 dark:text-red-300",
    body: "text-red-900 dark:text-red-200",
  },
  klinisch: {
    icon: "🏥",
    label: "Klinischer Bezug",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-300 dark:border-blue-700",
    title: "text-blue-800 dark:text-blue-300",
    body: "text-blue-900 dark:text-blue-200",
  },
  achtung: {
    icon: "⚠️",
    label: "Achtung",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    border: "border-orange-300 dark:border-orange-700",
    title: "text-orange-800 dark:text-orange-300",
    body: "text-orange-900 dark:text-orange-200",
  },
  tipp: {
    icon: "✨",
    label: "Tipp",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    border: "border-purple-300 dark:border-purple-700",
    title: "text-purple-800 dark:text-purple-300",
    body: "text-purple-900 dark:text-purple-200",
  },
};

export function MerksatzBox({ text, type = "merke" }: MerksatzBoxProps) {
  const c = config[type];
  return (
    <div className={`${c.bg} border ${c.border} rounded-xl p-4 my-6`}>
      <p className={`font-bold ${c.title} flex items-center gap-2`}>
        {c.icon} {c.label}
      </p>
      <p
        className={`${c.body} mt-1 text-sm leading-relaxed`}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
}

// src/components/chapter/SelbstTest.tsx
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QuizQuestion } from "./QuizQuestion";
import type { SelfTestQuestion } from "../../data/bmsKapitel/types";

export interface StreakUpdate {
  name: string;
  nextReviewDays: number;
}

interface SelbstTestProps {
  questions: SelfTestQuestion[];
  unterkapitelId?: string;
  /** Called after each answer. secondTry = correct after "Nochmal versuchen" (50% XP). */
  onAnswer?: (
    questionIndex: number,
    isCorrect: boolean,
    secondTry?: boolean
  ) => void | StreakUpdate;
  /** Called when user finishes (e.g. back from report); (correctCount, total) for SRS. */
  onAllComplete?: (correctCount: number, total: number) => void;
}

function getMotivationText(pct: number): string {
  if (pct >= 80) return "Starke Leistung!";
  if (pct >= 50) return "Gut gemacht, weiter so!";
  return "Bleib dran, das wird!";
}

export function SelbstTest({ questions, onAnswer, onAllComplete }: SelbstTestProps) {
  const [questionResults, setQuestionResults] = useState<Record<number, boolean>>({});
  const [showReport, setShowReport] = useState(false);
  const [streakUpdates, setStreakUpdates] = useState<StreakUpdate[]>([]);
  const [retryMode, setRetryMode] = useState(false);
  const [retryIndices, setRetryIndices] = useState<number[]>([]);

  const totalCorrect = Object.values(questionResults).filter(Boolean).length;
  const totalAnswered = Object.keys(questionResults).length;
  const allRequiredAnswered = retryMode
    ? retryIndices.every((i) => questionResults[i] !== undefined)
    : totalAnswered >= questions.length;

  const handleAnswerChange = (questionIndex: number, isCorrect: boolean, secondTry?: boolean) => {
    setQuestionResults((prev) => ({ ...prev, [questionIndex]: isCorrect }));
    const update = onAnswer?.(questionIndex, isCorrect, secondTry);
    if (isCorrect && update && update.nextReviewDays > 0) {
      setStreakUpdates((prev) => [...prev, update]);
    }
  };

  useEffect(() => {
    if (questions.length > 0 && allRequiredAnswered && !showReport) {
      const t = setTimeout(() => setShowReport(true), 0);
      return () => clearTimeout(t);
    }
  }, [allRequiredAnswered, questions.length, showReport]);

  const handleBack = () => {
    onAllComplete?.(totalCorrect, questions.length);
  };

  const handleRetryWrong = () => {
    const wrong = questions.map((_, i) => i).filter((i) => questionResults[i] === false);
    if (wrong.length === 0) return;
    setRetryIndices(wrong);
    setRetryMode(true);
    setQuestionResults((prev) => {
      const next = { ...prev };
      wrong.forEach((i) => delete next[i]);
      return next;
    });
    setShowReport(false);
    setStreakUpdates([]);
  };

  const displayIndices = retryMode ? retryIndices : questions.map((_, i) => i);
  const wrongCount = displayIndices.filter((i) => questionResults[i] === false).length;

  if (showReport) {
    const pct = questions.length > 0 ? Math.round((totalCorrect / questions.length) * 100) : 0;
    const size = 100;
    const stroke = 8;
    const r = (size - stroke) / 2;
    const circumference = 2 * Math.PI * r;
    const offset = circumference - (pct / 100) * circumference;
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="report"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="card-glass mt-8 rounded-2xl border border-slate-200/80 dark:border-slate-700/50 p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-[#1e293b] dark:text-slate-100 mb-6 tracking-tight">
            Session abgeschlossen
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-8 mb-6">
            <div className="relative flex items-center justify-center w-[100px] h-[100px] shrink-0">
              <svg width={size} height={size} className="transform -rotate-90 absolute inset-0">
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={r}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={stroke}
                  className="text-slate-200 dark:text-slate-700"
                />
                <motion.circle
                  cx={size / 2}
                  cy={size / 2}
                  r={r}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={stroke}
                  strokeLinecap="round"
                  className="text-[#007AFF]"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset: offset }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </svg>
              <span className="relative z-10 text-xl font-bold text-[#1e293b] dark:text-slate-100 tabular-nums">
                {pct}%
              </span>
            </div>
            <div className="flex-1">
              <p className="text-lg text-slate-900 dark:text-slate-100 leading-relaxed">
                Du hast{" "}
                <strong className="text-[#1e293b] dark:text-slate-100">{totalCorrect}</strong> von{" "}
                <strong className="text-[#1e293b] dark:text-slate-100">{questions.length}</strong>{" "}
                Fragen richtig beantwortet.
              </p>
              <p className="text-base font-medium text-[#007AFF] dark:text-primary-400 mt-2">
                {getMotivationText(pct)}
              </p>
            </div>
          </div>
          {streakUpdates.length > 0 && (
            <div className="mb-6">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                Vergessenskurve-Update
              </p>
              <div className="flex flex-wrap gap-2">
                {streakUpdates.map((u, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200 px-3 py-1 text-sm font-medium"
                  >
                    {u.name}: +{u.nextReviewDays} Tag{u.nextReviewDays !== 1 ? "e" : ""}
                  </span>
                ))}
              </div>
            </div>
          )}
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={handleBack}
              className="btn-med bg-[#007AFF] hover:bg-[#0062cc] text-white"
            >
              Zurück zur Übersicht
            </Button>
            {wrongCount > 0 && (
              <Button
                variant="outline"
                onClick={handleRetryWrong}
                className="btn-med border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/50"
              >
                Test wiederholen (nur {wrongCount} falsche)
              </Button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div className="space-y-6 mt-8">
      <div className="pb-4 border-b-2 border-gray-300 dark:border-gray-600">
        <h2 className="text-xl font-semibold text-slate-950 dark:text-white mb-2">
          📝 Kontrollfragen
        </h2>
        <p className="text-sm text-slate-900 dark:text-slate-100">
          Teste dein Wissen mit diesen Fragen. Wähle eine Antwort und klicke auf "Antwort prüfen"
          für sofortiges Feedback.
        </p>
        {totalAnswered > 0 && (
          <div className="mt-3 text-sm font-medium text-slate-900 dark:text-slate-100">
            Fortschritt: {totalCorrect} von {totalAnswered} beantworteten Fragen richtig
          </div>
        )}
      </div>

      {questions.map((question, index) => {
        if (!displayIndices.includes(index)) return null;
        if (!question || !question.question || !question.options || question.options.length === 0) {
          return (
            <div
              key={index}
              className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4"
            >
              <p className="text-sm text-yellow-800 dark:text-yellow-300">
                ⚠️ Frage {index + 1} hat unvollständige Daten und wird übersprungen.
              </p>
            </div>
          );
        }
        return (
          <QuizQuestion
            key={index}
            question={question}
            questionNumber={index + 1}
            onAnswerChange={(isCorrect, secondTry) =>
              handleAnswerChange(index, isCorrect, secondTry)
            }
          />
        );
      })}
    </div>
  );
}
