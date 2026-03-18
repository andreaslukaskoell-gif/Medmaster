import { useState } from "react";
import { MessageSquarePlus, Send, Check, Loader2 } from "lucide-react";
import { submitQuestionFeedback, type QuestionType } from "@/lib/feedback";

type Props = {
  questionId: string;
  questionType: QuestionType;
};

export function QuestionFeedbackButton({ questionId, questionType }: Props) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async () => {
    if (!text.trim()) return;
    setStatus("sending");
    const result = await submitQuestionFeedback(questionId, questionType, text);
    if (result.success) {
      setStatus("sent");
      setTimeout(() => {
        setOpen(false);
        setText("");
        setStatus("idle");
      }, 1500);
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2000);
    }
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1 text-xs text-[var(--muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
        title="Feedback zu dieser Frage"
      >
        <MessageSquarePlus className="w-3.5 h-3.5" />
        Feedback
      </button>
    );
  }

  return (
    <div className="mt-2 space-y-2">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Was stimmt nicht? Fehler, unklare Formulierung, falsche Antwort..."
        className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 resize-none"
        rows={2}
        autoFocus
        disabled={status === "sending" || status === "sent"}
      />
      <div className="flex items-center gap-2">
        <button
          onClick={handleSubmit}
          disabled={!text.trim() || status === "sending" || status === "sent"}
          className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--accent)] px-3 py-1.5 text-xs font-medium text-white hover:opacity-90 disabled:opacity-50 transition-opacity cursor-pointer"
        >
          {status === "sending" && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
          {status === "sent" && <Check className="w-3.5 h-3.5" />}
          {status === "idle" && <Send className="w-3.5 h-3.5" />}
          {status === "error" && <Send className="w-3.5 h-3.5" />}
          {status === "sent" ? "Gesendet!" : status === "error" ? "Fehler — nochmal" : "Absenden"}
        </button>
        <button
          onClick={() => {
            setOpen(false);
            setText("");
            setStatus("idle");
          }}
          className="text-xs text-[var(--muted)] hover:text-[var(--text-primary)] cursor-pointer"
        >
          Abbrechen
        </button>
      </div>
    </div>
  );
}
