import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
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
