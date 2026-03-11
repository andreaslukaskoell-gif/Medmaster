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
          className="bg-[var(--accent)] hover:opacity-90 text-white px-8 py-3 text-base"
        >
          Kapitel als abgeschlossen markieren
        </Button>
      </div>
    );
  }

  return (
    <div className="mt-10 bg-[var(--success)]/5 border border-[var(--success)]/20 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-500">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--success)]/10 rounded-full mb-4">
        <CheckCircle2 className="w-10 h-10 text-[var(--success)]" />
      </div>
      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">Kapitel abgeschlossen!</h3>
      <p className="text-[var(--success)] text-sm mb-3">{chapterTitle}</p>
      <div className="inline-block bg-[var(--success)] text-white font-bold text-lg px-6 py-2 rounded-full">
        +{xp} XP
      </div>
    </div>
  );
}
