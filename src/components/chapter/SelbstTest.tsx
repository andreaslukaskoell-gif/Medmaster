// src/components/chapter/KapitelFortschritt.tsx
import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <div className="mt-10 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/30 dark:to-emerald-900/30 border border-teal-200 dark:border-teal-700 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-500">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 dark:bg-teal-800 rounded-full mb-4">
        <CheckCircle2 className="w-10 h-10 text-teal-600 dark:text-teal-400" />
      </div>
      <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-1">
        Kapitel abgeschlossen!
      </h3>
      <p className="text-teal-600 dark:text-teal-400 text-sm mb-3">
        {chapterTitle}
      </p>
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
    <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-2xl p-8 mb-8">
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
      <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
        📋 Key Facts — {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {facts.map((fact, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="text-teal-500 font-bold mt-0.5">•</span>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {fact.label}: <strong className="text-gray-900 dark:text-gray-100">{fact.value}</strong>
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
      <p className={`${c.body} mt-1 text-sm leading-relaxed`} dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}

// src/components/chapter/SelbstTest.tsx
import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SelbstTestQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface SelbstTestProps {
  questions: SelbstTestQuestion[];
}

export function SelbstTest({ questions }: SelbstTestProps) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = submitted
    ? questions.filter((q, i) => answers[i] === q.correctIndex).length
    : 0;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mt-8 border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
        ✍️ Selbsttest
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
        {questions.length} Fragen zum Überprüfen deines Wissens
      </p>

      <div className="space-y-6">
        {questions.map((q, qi) => {
          const selected = answers[qi];
          const isCorrect = submitted && selected === q.correctIndex;
          const isWrong = submitted && selected !== undefined && selected !== q.correctIndex;

          return (
            <div key={qi} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <p className="font-medium text-gray-900 dark:text-gray-100 text-sm mb-3">
                {qi + 1}. {q.question}
              </p>
              <div className="space-y-2">
                {q.options.map((opt, oi) => {
                  const isSelected = selected === oi;
                  const isCorrectOpt = submitted && oi === q.correctIndex;
                  const isWrongSelected = submitted && isSelected && oi !== q.correctIndex;

                  return (
                    <button
                      key={oi}
                      onClick={() => !submitted && setAnswers((p) => ({ ...p, [qi]: oi }))}
                      disabled={submitted}
                      className={`w-full text-left px-3 py-2 rounded-lg border transition-colors ${
                        isCorrectOpt
                          ? "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 font-medium"
                          : isWrongSelected
                          ? "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 line-through"
                          : isSelected && !submitted
                          ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                          : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
                      } ${submitted ? "cursor-default" : ""}`}
                    >
                      <span className="font-medium mr-2">{String.fromCharCode(65 + oi)})</span>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {submitted && (
                <div className={`mt-3 p-3 rounded-lg text-sm ${
                  isCorrect
                    ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300"
                    : "bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300"
                }`}>
                  <div className="flex items-center gap-1 mb-1">
                    {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                    <span className="font-medium">{isCorrect ? "Richtig!" : "Falsch"}</span>
                  </div>
                  <p className="text-xs leading-relaxed">{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!submitted ? (
        <Button
          className="w-full mt-6"
          onClick={() => setSubmitted(true)}
          disabled={Object.keys(answers).length < questions.length}
        >
          Auswerten ({Object.keys(answers).length}/{questions.length} beantwortet)
        </Button>
      ) : (
        <div className="mt-6 text-center">
          <div className="text-2xl font-bold text-primary-700 dark:text-primary-400">
            {score}/{questions.length} richtig
          </div>
          <p className="text-sm text-muted mt-1">
            {score === questions.length ? "Perfekt! 🎉" : score >= questions.length * 0.6 ? "Gut gemacht! 👍" : "Wiederhole das Kapitel noch einmal."}
          </p>
          <Button
            variant="outline"
            className="mt-3"
            onClick={() => { setAnswers({}); setSubmitted(false); }}
          >
            Nochmal versuchen
          </Button>
        </div>
      )}
    </div>
  );
}

