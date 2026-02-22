import { useState, useMemo } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Bookmark,
  StickyNote,
  Target,
  Lightbulb,
  Stethoscope,
  ListChecks,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-wrapper";
import { useStore } from "@/store/useStore";
import DiagramSVG from "@/components/diagrams/DiagramSVG";
import { allBmsQuestions } from "@/data/bms/index";
import type { Chapter } from "@/data/bmsChapters";
import { KapitelHeader } from "@/components/chapter/KapitelHeader";
import { LernzielBox } from "@/components/chapter/LernzielBox";
import { MerksatzBox } from "@/components/chapter/MerksatzBox";
import { KeyFactsGrid } from "@/components/chapter/KeyFactsGrid";
import { VergleichsTabelle } from "@/components/chapter/VergleichsTabelle";
import { SelbstTest } from "@/components/chapter/SelbstTest";
import { KapitelFortschritt } from "@/components/chapter/KapitelFortschritt";

interface Props {
  chapter: Chapter;
  onBack: () => void;
}

export default function BMSChapter({ chapter, onBack }: Props) {
  const {
    completeChapter,
    completedChapters,
    addXP,
    checkStreak,
    notes,
    setNote,
    bookmarks,
    toggleBookmarkChapter,
  } = useStore();
  const isCompleted = completedChapters.includes(chapter.id);
  const isBookmarked = bookmarks.chapters.includes(chapter.id);
  const [noteText, setNoteText] = useState(notes[chapter.id] || "");
  const [showNotes, setShowNotes] = useState(false);
  const [selfTestAnswers, setSelfTestAnswers] = useState<Record<string, string>>({});
  const [selfTestSubmitted, setSelfTestSubmitted] = useState(false);

  const selfTestQuestions = useMemo(() => {
    if (!chapter.selfTestIds || chapter.selfTestIds.length === 0) return [];
    return chapter.selfTestIds
      .map((id) => allBmsQuestions.find((q) => q.id === id))
      .filter(Boolean) as typeof allBmsQuestions;
  }, [chapter.selfTestIds]);

  const handleComplete = () => {
    if (!isCompleted) {
      completeChapter(chapter.id);
      addXP(50); // +50 XP pro gelesenes Kapitel
      checkStreak();
    }
  };

  const handleSaveNote = () => {
    setNote(chapter.id, noteText);
  };

  const subjectLabels: Record<string, string> = {
    biologie: "Biologie",
    chemie: "Chemie",
    physik: "Physik",
    mathematik: "Mathematik",
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-1" />
          Zurück
        </Button>
        <div className="flex gap-2">
          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`p-2 rounded-lg cursor-pointer ${showNotes ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700" : "text-muted hover:bg-gray-100 dark:hover:bg-gray-800"}`}
            title="Notizen"
          >
            <StickyNote className="w-4 h-4" />
          </button>
          <button
            onClick={() => toggleBookmarkChapter(chapter.id)}
            className={`p-2 rounded-lg cursor-pointer ${isBookmarked ? "bg-primary-100 dark:bg-primary-900/30 text-primary-700" : "text-muted hover:bg-gray-100 dark:hover:bg-gray-800"}`}
            title="Lesezeichen"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
          </button>
        </div>
      </div>

      {/* Chapter Header */}
      {chapter.icon ? (
        <KapitelHeader
          icon={chapter.icon}
          subject={subjectLabels[chapter.subject] || chapter.subject}
          chapterNumber={chapter.chapterNumber || ""}
          title={chapter.title}
          subtitle={chapter.subtitle || chapter.overview || ""}
          readingTime={chapter.readingTime}
          level={chapter.level}
          frequency={chapter.frequency}
        />
      ) : (
        <>
          <div>
            <p className="text-sm text-primary-700 dark:text-primary-400 font-medium uppercase tracking-wide">
              {subjectLabels[chapter.subject]}
            </p>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">
              {chapter.title}
            </h1>
          </div>
          {chapter.overview && (
            <Card className="border-primary-200 dark:border-primary-800 bg-primary-50/50 dark:bg-primary-900/10">
              <CardContent className="p-5">
                <p className="text-sm text-primary-800 dark:text-primary-300 leading-relaxed">
                  {chapter.overview}
                </p>
              </CardContent>
            </Card>
          )}
        </>
      )}

      {/* Learning Objectives */}
      {chapter.learningObjectives && chapter.learningObjectives.length > 0 && (
        <LernzielBox items={chapter.learningObjectives} />
      )}

      {showNotes && (
        <Card className="border-yellow-200 dark:border-yellow-800">
          <CardContent className="p-4 space-y-3">
            <h3 className="text-sm font-semibold text-yellow-800 dark:text-yellow-300 flex items-center gap-2">
              <StickyNote className="w-4 h-4" />
              Meine Notizen
            </h3>
            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Notizen zu diesem Kapitel..."
              className="w-full h-24 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/10 text-sm text-gray-900 dark:text-gray-100 placeholder:text-muted outline-none focus:ring-2 focus:ring-yellow-400 resize-y"
            />
            <Button size="sm" onClick={handleSaveNote}>
              Speichern
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Sections with diagrams, merke, altfrage, klinik, vergleichsTabelle */}
      <div className="space-y-6">
        {chapter.sections.map((section, i) => {
          const borderColor =
            {
              biologie: "border-emerald-500",
              chemie: "border-red-500",
              physik: "border-blue-500",
              mathematik: "border-violet-500",
            }[chapter.subject] || "border-primary-500";
          return (
            <Card key={i}>
              <CardContent className="p-6 space-y-4">
                <h2
                  className={`text-lg font-semibold text-gray-900 dark:text-gray-100 border-l-4 ${borderColor} pl-4`}
                >
                  {section.heading}
                </h2>
                <div
                  className="text-base text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />

                {section.vergleichsTabelle && (
                  <VergleichsTabelle
                    headers={section.vergleichsTabelle.headers}
                    rows={section.vergleichsTabelle.rows}
                  />
                )}

                {section.diagram && (
                  <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                    <DiagramSVG type={section.diagram} />
                  </div>
                )}

                {section.merke && <MerksatzBox text={section.merke} type="merke" />}

                {section.altfrage && <MerksatzBox text={section.altfrage} type="altfragen" />}

                {section.klinik && <MerksatzBox text={section.klinik} type="klinisch" />}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Key Facts */}
      {chapter.keyFacts && chapter.keyFacts.length > 0 && (
        <KeyFactsGrid title={chapter.title} facts={chapter.keyFacts} />
      )}

      {/* Summary (legacy fallback) */}
      {!chapter.keyFacts && chapter.summary && chapter.summary.length > 0 && (
        <Card className="border-indigo-200 dark:border-indigo-800">
          <CardContent className="p-5">
            <h3 className="text-sm font-semibold text-indigo-800 dark:text-indigo-300 flex items-center gap-2 mb-3">
              <ListChecks className="w-4 h-4" />
              Zusammenfassung — Key Facts
            </h3>
            <ul className="space-y-1.5">
              {chapter.summary.map((point, i) => (
                <li
                  key={i}
                  className="text-sm text-indigo-700 dark:text-indigo-400 flex items-start gap-2"
                >
                  <span className="text-indigo-400 dark:text-indigo-600 mt-1 shrink-0">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Inline Self-Test (new format) */}
      {chapter.selfTestQuestions && chapter.selfTestQuestions.length > 0 && (
        <SelbstTest questions={chapter.selfTestQuestions} />
      )}

      {/* Legacy Self-Test (from question IDs) */}
      {!chapter.selfTestQuestions && selfTestQuestions.length > 0 && (
        <Card>
          <CardContent className="p-5 space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <Target className="w-4 h-4 text-primary-600" />
              Selbsttest ({selfTestQuestions.length} Fragen)
            </h3>
            {selfTestQuestions.map((q, qi) => (
              <div key={q.id} className="space-y-2">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {qi + 1}. {q.text}
                </p>
                <div className="space-y-1.5 ml-4">
                  {q.options.map((opt) => {
                    const selected = selfTestAnswers[q.id] === opt.id;
                    const isCorrect = selfTestSubmitted && q.correctOptionId === opt.id;
                    const isWrong = selfTestSubmitted && selected && q.correctOptionId !== opt.id;
                    return (
                      <button
                        key={opt.id}
                        disabled={selfTestSubmitted}
                        onClick={() => setSelfTestAnswers((p) => ({ ...p, [q.id]: opt.id }))}
                        className={`w-full text-left px-3 py-2 rounded text-sm transition-colors cursor-pointer ${
                          isCorrect
                            ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 font-medium"
                            : isWrong
                              ? "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 line-through"
                              : selected
                                ? "bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300 border border-primary-300 dark:border-primary-700"
                                : "hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        <span className="font-semibold mr-1.5">{opt.id.toUpperCase()})</span>
                        {opt.text}
                        {isCorrect && (
                          <Badge variant="success" className="ml-2">
                            Richtig
                          </Badge>
                        )}
                        {isWrong && (
                          <Badge variant="danger" className="ml-2">
                            Falsch
                          </Badge>
                        )}
                      </button>
                    );
                  })}
                </div>
                {selfTestSubmitted && (
                  <p className="text-xs text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-2 rounded ml-4">
                    {q.explanation}
                  </p>
                )}
              </div>
            ))}
            {!selfTestSubmitted ? (
              <Button
                size="sm"
                onClick={() => setSelfTestSubmitted(true)}
                disabled={selfTestQuestions.some((q) => !selfTestAnswers[q.id])}
              >
                Auswerten
              </Button>
            ) : (
              <p className="text-sm font-medium text-primary-700 dark:text-primary-400">
                {
                  selfTestQuestions.filter((q) => selfTestAnswers[q.id] === q.correctOptionId)
                    .length
                }
                /{selfTestQuestions.length} richtig
              </p>
            )}
          </CardContent>
        </Card>
      )}

      {/* Chapter completion */}
      {isCompleted ? (
        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 font-medium pt-4">
          <CheckCircle2 className="w-5 h-5" />
          Kapitel als abgeschlossen markiert
        </div>
      ) : (
        <KapitelFortschritt chapterTitle={chapter.title} xp={25} />
      )}
    </div>
  );
}
