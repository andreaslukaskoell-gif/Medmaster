import { useState, useEffect } from "react";
import { Star, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";

const STORAGE_KEY = "medmaster-review-prompt";
const TRUSTPILOT_URL = "https://www.trustpilot.com/evaluate/medmaster.at";

type ReviewState = {
  dismissed: boolean;
  dismissedAt?: string;
  reviewed?: boolean;
};

function getReviewState(): ReviewState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { dismissed: false };
  } catch {
    return { dismissed: false };
  }
}

function setReviewState(state: ReviewState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

/** Show review prompt after positive moments:
 *  - At least 3 quizzes completed
 *  - At least 1 quiz with 70%+ score
 *  - Not already dismissed or reviewed
 */
function shouldShowPrompt(quizResults: { score: number; total: number }[]): boolean {
  const state = getReviewState();
  if (state.dismissed || state.reviewed) return false;

  // Wait for enough engagement
  if (quizResults.length < 3) return false;

  // At least one good result
  const hasGoodResult = quizResults.some((r) => r.total > 0 && r.score / r.total >= 0.7);
  return hasGoodResult;
}

export function ReviewPrompt() {
  const quizResults = useStore((s) => s.quizResults ?? []);
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState<"ask" | "positive" | "negative">("ask");

  useEffect(() => {
    // Delay check to avoid showing immediately on page load
    const timer = setTimeout(() => {
      if (shouldShowPrompt(quizResults)) {
        setVisible(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [quizResults]);

  if (!visible) return null;

  const dismiss = () => {
    setVisible(false);
    setReviewState({ dismissed: true, dismissedAt: new Date().toISOString() });
  };

  const markReviewed = () => {
    setVisible(false);
    setReviewState({ dismissed: true, reviewed: true });
  };

  if (step === "positive") {
    return (
      <div className="fixed bottom-6 right-6 z-50 max-w-sm animate-in slide-in-from-bottom-4 duration-300">
        <div className="card-glass p-5 shadow-xl border border-[var(--border)] space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-500/10 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] text-sm">
                Danke! Das freut uns
              </h3>
            </div>
            <button
              onClick={dismiss}
              className="text-[var(--muted)] hover:text-[var(--text-primary)] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-[var(--muted)]">
            Hilf anderen MedAT-Bewerbern — eine kurze Bewertung macht einen riesigen Unterschied!
          </p>
          <Button
            size="sm"
            variant="premium"
            className="w-full"
            onClick={() => {
              markReviewed();
              window.open(TRUSTPILOT_URL, "_blank");
            }}
          >
            <Star className="w-3.5 h-3.5 mr-1 fill-current" />
            Auf Trustpilot bewerten
            <ExternalLink className="w-3 h-3 ml-1" />
          </Button>
          <button
            onClick={dismiss}
            className="text-xs text-[var(--muted)] hover:text-[var(--text-primary)] cursor-pointer"
          >
            Vielleicht später
          </button>
        </div>
      </div>
    );
  }

  if (step === "negative") {
    return (
      <div className="fixed bottom-6 right-6 z-50 max-w-sm animate-in slide-in-from-bottom-4 duration-300">
        <div className="card-glass p-5 shadow-xl border border-[var(--border)] space-y-3">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-[var(--text-primary)] text-sm">
              Danke für dein Feedback
            </h3>
            <button
              onClick={dismiss}
              className="text-[var(--muted)] hover:text-[var(--text-primary)] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-[var(--muted)]">
            Wir arbeiten ständig an Verbesserungen. Schreib uns gerne was fehlt:
          </p>
          <Button size="sm" variant="outline" asChild className="w-full">
            <a href="mailto:feedback@medmaster.at?subject=MedMaster Feedback">Feedback senden</a>
          </Button>
        </div>
      </div>
    );
  }

  // Step: "ask" — initial prompt
  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm animate-in slide-in-from-bottom-4 duration-300">
      <div className="card-glass p-5 shadow-xl border border-[var(--border)] space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center">
              <Star className="w-4 h-4 text-blue-500" />
            </div>
            <h3 className="font-semibold text-[var(--text-primary)] text-sm">
              Wie gefällt dir MedMaster?
            </h3>
          </div>
          <button
            onClick={dismiss}
            className="text-[var(--muted)] hover:text-[var(--text-primary)] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <p className="text-sm text-[var(--muted)]">
          Du hast schon einige Quizze gemeistert! Wir würden gerne wissen, ob dir MedMaster bei der
          Vorbereitung hilft.
        </p>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="premium"
            className="flex-1"
            onClick={() => setStep("positive")}
          >
            Ja, super!
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="flex-1"
            onClick={() => setStep("negative")}
          >
            Könnte besser sein
          </Button>
        </div>
      </div>
    </div>
  );
}
