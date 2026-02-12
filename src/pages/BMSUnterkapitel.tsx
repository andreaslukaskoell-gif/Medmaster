import { useState } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft, Bookmark, StickyNote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useStore } from "@/store/useStore";
import { MerksatzBox } from "@/components/chapter/MerksatzBox";
import { SelbstTest } from "@/components/chapter/SelbstTest";
import { SubchapterContent } from "@/components/chapter/SubchapterContent";
import type { Kapitel } from "@/data/bmsKapitel/types";

interface Props {
  kapitel: Kapitel;
  unterkapitelIndex: number;
  onBack: () => void;
  onNavigate: (index: number) => void;
}

const subjectLabels: Record<string, string> = {
  biologie: "Biologie",
  chemie: "Chemie",
  physik: "Physik",
  mathematik: "Mathematik",
};

const subjectProgressColors: Record<string, string> = {
  biologie: "bg-emerald-500",
  chemie: "bg-red-500",
  physik: "bg-blue-500",
  mathematik: "bg-violet-500",
};

const subjectTextColors: Record<string, string> = {
  biologie: "text-emerald-700 dark:text-emerald-400",
  chemie: "text-red-700 dark:text-red-400",
  physik: "text-blue-700 dark:text-blue-400",
  mathematik: "text-violet-700 dark:text-violet-400",
};

export default function BMSUnterkapitel({ kapitel, unterkapitelIndex, onBack, onNavigate }: Props) {
  const uk = kapitel.unterkapitel[unterkapitelIndex];
  const { completeChapter, completedChapters, addXP, checkStreak, notes, setNote, bookmarks, toggleBookmarkChapter } = useStore();
  const [noteText, setNoteText] = useState(notes[uk.id] || "");
  const [showNotes, setShowNotes] = useState(false);
  const isBookmarked = bookmarks.chapters.includes(uk.id);
  const isCompleted = completedChapters.includes(uk.id);
  const [selfTestDone, setSelfTestDone] = useState(false);

  const total = kapitel.unterkapitel.length;
  const completedCount = kapitel.unterkapitel.filter((u) => completedChapters.includes(u.id)).length;
  const isLast = unterkapitelIndex === total - 1;
  const isFirst = unterkapitelIndex === 0;

  const handleComplete = () => {
    if (!isCompleted) {
      completeChapter(uk.id);
      addXP(5);
      checkStreak();
    }
    // Check if entire chapter is now complete
    const newCompletedCount = completedCount + (isCompleted ? 0 : 1);
    if (newCompletedCount === total) {
      completeChapter(kapitel.id);
      addXP(25);
    }
  };

  const handleNext = () => {
    handleComplete();
    if (!isLast) {
      onNavigate(unterkapitelIndex + 1);
      window.scrollTo(0, 0);
    } else {
      onBack();
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      <Breadcrumb items={[
        { label: "Dashboard", href: "/" },
        { label: "BMS", href: "#" },
        { label: subjectLabels[kapitel.subject], href: "#" },
        { label: kapitel.title, href: "#", onClick: onBack },
        { label: uk.title },
      ]} />

      {/* Top bar */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ChevronLeft className="w-4 h-4 mr-1" />
          {kapitel.title}
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
            onClick={() => toggleBookmarkChapter(uk.id)}
            className={`p-2 rounded-lg cursor-pointer ${isBookmarked ? "bg-primary-100 dark:bg-primary-900/30 text-primary-700" : "text-muted hover:bg-gray-100 dark:hover:bg-gray-800"}`}
            title="Lesezeichen"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-muted">
          <span>Unterkapitel {unterkapitelIndex + 1} von {total}</span>
          <span>{completedCount}/{total} abgeschlossen</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className={`${subjectProgressColors[kapitel.subject] || "bg-primary-600"} h-2 rounded-full transition-all`}
            style={{ width: `${(completedCount / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Chapter number + title */}
      <div>
        <p className={`text-sm font-medium ${subjectTextColors[kapitel.subject] || "text-primary-700 dark:text-primary-400"}`}>
          {kapitel.title} — {unterkapitelIndex + 1}/{total}
        </p>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">
          {uk.title}
        </h1>
      </div>

      {/* Notes panel */}
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
              placeholder="Notizen zu diesem Unterkapitel..."
              className="w-full h-24 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/10 text-sm text-gray-900 dark:text-gray-100 placeholder:text-muted outline-none focus:ring-2 focus:ring-yellow-400 resize-y"
            />
            <Button size="sm" onClick={() => setNote(uk.id, noteText)}>Speichern</Button>
          </CardContent>
        </Card>
      )}

      {/* Main content */}
      <Card>
        <CardContent className="p-6">
          <SubchapterContent uk={uk} subject={kapitel.subject} />
        </CardContent>
      </Card>

      {/* Merksätze */}
      {uk.merksaetze.map((merksatz, i) => (
        <MerksatzBox key={i} text={merksatz} type="merke" />
      ))}

      {/* Altfrage */}
      {uk.altfrage && (
        <Card className="border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-900/10">
          <CardContent className="p-5">
            <h3 className="text-sm font-semibold text-red-800 dark:text-red-300 flex items-center gap-2 mb-2">
              🎯 Altfragen-Klassiker
            </h3>
            <p className="text-sm font-medium text-red-900 dark:text-red-200 mb-2">{uk.altfrage.question}</p>
            <details className="group">
              <summary className="text-sm text-red-700 dark:text-red-400 cursor-pointer hover:underline">
                Antwort anzeigen
              </summary>
              <p className="text-sm text-red-800 dark:text-red-300 mt-2 pl-4 border-l-2 border-red-300 dark:border-red-700">
                {uk.altfrage.answer}
              </p>
            </details>
          </CardContent>
        </Card>
      )}

      {/* Klinischer Bezug */}
      {uk.klinischerBezug && (
        <MerksatzBox text={uk.klinischerBezug} type="klinisch" />
      )}

      {/* Self-Test */}
      {uk.selfTest.length > 0 && (
        <SelbstTest questions={uk.selfTest} />
      )}

      {/* Navigation buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
        <Button
          variant="outline"
          onClick={() => { onNavigate(unterkapitelIndex - 1); window.scrollTo(0, 0); }}
          disabled={isFirst}
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Zurück
        </Button>

        <Button onClick={handleNext}>
          {isLast ? "Kapitel abschließen" : "Weiter"}
          {!isLast && <ArrowRight className="w-4 h-4 ml-1" />}
        </Button>
      </div>
    </div>
  );
}
