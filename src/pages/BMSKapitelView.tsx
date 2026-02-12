import { useState } from "react";
import { ChevronLeft, CheckCircle2, Clock, BookOpen, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useStore } from "@/store/useStore";
import type { Kapitel } from "@/data/bmsKapitel/types";
import BMSUnterkapitel from "./BMSUnterkapitel";

interface Props {
  kapitel: Kapitel;
  onBack: () => void;
}

const subjectLabels: Record<string, string> = {
  biologie: "Biologie",
  chemie: "Chemie",
  physik: "Physik",
  mathematik: "Mathematik",
};

const subjectColors: Record<string, { progress: string; text: string; badge: string; border: string }> = {
  biologie: { progress: "bg-emerald-500", text: "text-emerald-700 dark:text-emerald-400", badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400", border: "border-l-emerald-500" },
  chemie: { progress: "bg-red-500", text: "text-red-700 dark:text-red-400", badge: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400", border: "border-l-red-500" },
  physik: { progress: "bg-blue-500", text: "text-blue-700 dark:text-blue-400", badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400", border: "border-l-blue-500" },
  mathematik: { progress: "bg-violet-500", text: "text-violet-700 dark:text-violet-400", badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400", border: "border-l-violet-500" },
};

export default function BMSKapitelView({ kapitel, onBack }: Props) {
  const [activeUKIndex, setActiveUKIndex] = useState<number | null>(null);
  const { completedChapters } = useStore();

  const completedUK = kapitel.unterkapitel.filter((u) => completedChapters.includes(u.id)).length;
  const totalUK = kapitel.unterkapitel.length;
  const isKapitelDone = completedChapters.includes(kapitel.id);

  if (activeUKIndex !== null) {
    return (
      <BMSUnterkapitel
        kapitel={kapitel}
        unterkapitelIndex={activeUKIndex}
        onBack={() => setActiveUKIndex(null)}
        onNavigate={(idx) => setActiveUKIndex(idx)}
      />
    );
  }

  // Find first incomplete unterkapitel
  const firstIncomplete = kapitel.unterkapitel.findIndex(
    (u) => !completedChapters.includes(u.id)
  );

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumb items={[
        { label: "Dashboard", href: "/" },
        { label: "BMS", href: "#" },
        { label: subjectLabels[kapitel.subject], href: "#", onClick: onBack },
        { label: kapitel.title },
      ]} />

      <Button variant="ghost" size="sm" onClick={onBack}>
        <ChevronLeft className="w-4 h-4 mr-1" />
        Zurück zur Übersicht
      </Button>

      {/* Chapter header */}
      <div className="flex items-start gap-4">
        <div className="text-4xl">{kapitel.icon}</div>
        <div className="flex-1">
          <p className={`text-sm font-medium ${subjectColors[kapitel.subject]?.text || "text-primary-700 dark:text-primary-400"}`}>
            {subjectLabels[kapitel.subject]}
          </p>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {kapitel.title}
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-muted">
            <span className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              {totalUK} Unterkapitel
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {kapitel.estimatedTime}
            </span>
          </div>
        </div>
        {isKapitelDone && (
          <Badge variant="success" className="shrink-0">Abgeschlossen</Badge>
        )}
      </div>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted">Fortschritt</span>
          <span className={`font-medium ${subjectColors[kapitel.subject]?.text || "text-primary-700 dark:text-primary-400"}`}>
            {completedUK}/{totalUK} Unterkapitel
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div
            className={`${subjectColors[kapitel.subject]?.progress || "bg-primary-600"} h-3 rounded-full transition-all`}
            style={{ width: `${totalUK > 0 ? (completedUK / totalUK) * 100 : 0}%` }}
          />
        </div>
      </div>

      {/* Start / Continue button */}
      {!isKapitelDone && firstIncomplete >= 0 && (
        <Button
          className="w-full"
          size="lg"
          onClick={() => setActiveUKIndex(firstIncomplete)}
        >
          <Play className="w-4 h-4 mr-2" />
          {completedUK === 0 ? "Kapitel starten" : "Fortsetzen"}
        </Button>
      )}

      {/* Unterkapitel list */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Unterkapitel
        </h2>
        {kapitel.unterkapitel.map((uk, index) => {
          const isDone = completedChapters.includes(uk.id);
          return (
            <Card
              key={uk.id}
              className={`hover:shadow-md transition-shadow cursor-pointer border-l-4 ${subjectColors[kapitel.subject]?.border || ""}`}
              onClick={() => setActiveUKIndex(index)}
            >
              <CardContent className="p-4 flex items-center gap-3">
                {isDone ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 shrink-0 flex items-center justify-center text-xs text-muted font-medium">
                    {index + 1}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className={`font-medium text-sm ${isDone ? "text-gray-500 dark:text-gray-400" : "text-gray-900 dark:text-gray-100"}`}>
                    {uk.title}
                  </h3>
                  <p className="text-xs text-muted truncate mt-0.5">
                    {uk.selfTest.length} Selbsttest-Fragen
                    {uk.altfrage && " · Altfrage"}
                    {uk.klinischerBezug && " · Klinischer Bezug"}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted shrink-0" />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
