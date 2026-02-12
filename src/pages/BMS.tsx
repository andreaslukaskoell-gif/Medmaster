import { useState } from "react";
import {
  Dna,
  Atom,
  Zap,
  Calculator,
  BookOpen,
  Play,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { bmsChapters, getChaptersBySubject } from "@/data/bmsChapters";
import { useStore } from "@/store/useStore";
import type { Chapter } from "@/data/bmsChapters";
import BMSChapter from "./BMSChapter";
import BMSQuiz from "./BMSQuiz";

const subjects = [
  { id: "biologie", label: "Biologie", icon: Dna, color: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" },
  { id: "chemie", label: "Chemie", icon: Atom, color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" },
  { id: "physik", label: "Physik", icon: Zap, color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400" },
  { id: "mathematik", label: "Mathematik", icon: Calculator, color: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400" },
] as const;

export default function BMS() {
  const [activeSubject, setActiveSubject] = useState<string>("biologie");
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(null);
  const [quizSubject, setQuizSubject] = useState<string | null>(null);
  const { completedChapters } = useStore();

  if (activeChapter) {
    return <BMSChapter chapter={activeChapter} onBack={() => setActiveChapter(null)} />;
  }

  if (quizSubject) {
    return <BMSQuiz subject={quizSubject} onBack={() => setQuizSubject(null)} />;
  }

  const chapters = getChaptersBySubject(activeSubject);
  const totalChapters = bmsChapters.length;
  const completed = completedChapters.length;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Breadcrumb items={[{ label: "Dashboard", href: "/" }, { label: "BMS" }]} />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">BMS - Basiskenntnistest</h1>
        <p className="text-muted mt-1">
          Lerne die Theorie und teste dein Wissen mit Übungsfragen.{" "}
          <span className="text-primary-700 dark:text-primary-400 font-medium">{completed}/{totalChapters} Kapitel abgeschlossen</span>
        </p>
      </div>

      <div className="flex gap-2 flex-wrap">
        {subjects.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSubject(s.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
              activeSubject === s.id
                ? "bg-primary-700 text-white"
                : "bg-white dark:bg-gray-900 border border-border dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            <s.icon className="w-4 h-4" />
            {s.label}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary-700 dark:text-primary-400" />
          Theorie-Kapitel
        </h2>
        {chapters.map((chapter) => {
          const isCompleted = completedChapters.includes(chapter.id);
          return (
            <Card
              key={chapter.id}
              className="hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setActiveChapter(chapter)}
            >
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {isCompleted ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600" />
                  )}
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-gray-100">{chapter.title}</h3>
                    <p className="text-xs text-muted">{chapter.sections.length} Abschnitte</p>
                  </div>
                </div>
                {isCompleted && <Badge variant="success">Abgeschlossen</Badge>}
              </CardContent>
            </Card>
          );
        })}
      </div>

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
    </div>
  );
}
