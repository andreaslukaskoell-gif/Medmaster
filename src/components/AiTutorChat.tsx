import { useState, useRef, useEffect } from "react";
import { X, Sparkles, Send, BookOpen } from "lucide-react";

/** Minimal question shape — works with both legacy and new Question types */
interface TutorQuestion {
  text: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
}

interface ChatMessage {
  role: "user" | "ai";
  text: string;
}

interface AiTutorChatProps {
  question: TutorQuestion;
  userAnswer: string;
  onClose: () => void;
}

// Generate local AI responses from question data (no API yet)
function generateLocalResponse(question: TutorQuestion, userMessage: string): string {
  const msg = userMessage.toLowerCase();
  const correctOpt = question.options.find((o) => o.id === question.correctOptionId);
  const explanation = question.explanation || "Keine Erklärung verfügbar.";

  if (msg.includes("warum") && (msg.includes("falsch") || msg.includes("nicht"))) {
    return `Die Antwort "${question.options.find((o) => o.id !== question.correctOptionId)?.text}" ist nicht korrekt, weil: ${explanation}`;
  }

  if (msg.includes("warum") && msg.includes("richtig")) {
    return `Die richtige Antwort ist ${correctOpt?.id.toUpperCase()}) ${correctOpt?.text}. ${explanation}`;
  }

  if (msg.includes("erklär") || msg.includes("erklaer") || msg.includes("versteh") || msg.includes("kapier")) {
    return `Lass mich das genauer erklären:\n\n${explanation}\n\nDie korrekte Antwort ist also: ${correctOpt?.id.toUpperCase()}) ${correctOpt?.text}`;
  }

  if (msg.includes("tipp") || msg.includes("strategie") || msg.includes("merken") || msg.includes("eselsbrücke")) {
    return `Hier ein Lerntipp: Versuche dir die Kernaussage einzuprägen — ${explanation.split(".")[0]}. Wenn du dir unsicher bist, schließe zuerst die offensichtlich falschen Antworten aus und entscheide dann zwischen den verbleibenden.`;
  }

  if (msg.includes("andere") || msg.includes("option") || msg.includes("antwort")) {
    const options = question.options
      .map((o) => `${o.id.toUpperCase()}) ${o.text}${o.id === question.correctOptionId ? " ✓" : ""}`)
      .join("\n");
    return `Hier sind alle Antwortmöglichkeiten:\n\n${options}\n\n${explanation}`;
  }

  // Default response
  return `${explanation}\n\nDie richtige Antwort war: ${correctOpt?.id.toUpperCase()}) ${correctOpt?.text}\n\nHast du noch eine spezifische Frage dazu? Du kannst mich z.B. fragen: "Warum ist das richtig?", "Erkläre es genauer" oder "Hast du einen Lerntipp?"`;
}

export function AiTutorChat({ question, userAnswer, onClose }: AiTutorChatProps) {
  const correctOpt = question.options.find((o) => o.id === question.correctOptionId);
  const userOpt = question.options.find((o) => o.id === userAnswer);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "ai",
      text: `Du hast "${userOpt?.text || "—"}" gewählt, aber die richtige Antwort ist ${correctOpt?.id.toUpperCase()}) ${correctOpt?.text}.\n\n${question.explanation}\n\nStell mir gerne Fragen dazu!`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = generateLocalResponse(question, text);
      setMessages((prev) => [...prev, { role: "ai", text: response }]);
      setIsTyping(false);
    }, 600 + Math.random() * 800);
  };

  const quickQuestions = [
    "Warum ist das richtig?",
    "Erkläre es genauer",
    "Hast du einen Lerntipp?",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Chat Panel */}
      <div className="relative w-full sm:max-w-lg h-full sm:h-[600px] sm:max-h-[85vh] bg-gray-900 sm:rounded-2xl flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">MedMaster KI-Tutor</h3>
              <p className="text-[10px] text-gray-400">Erklärt dir die Antwort</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors cursor-pointer p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Question Context (pinned at top) */}
        <div className="px-4 py-2.5 bg-gray-800/50 border-b border-gray-700/50">
          <div className="flex items-start gap-2">
            <BookOpen className="w-3.5 h-3.5 text-gray-500 mt-0.5 shrink-0" />
            <p className="text-[11px] text-gray-400 line-clamp-2">{question.text}</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} gap-2`}>
              {msg.role === "ai" && (
                <div className="w-7 h-7 bg-indigo-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-line leading-relaxed ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white rounded-br-md"
                    : "bg-gray-800 text-gray-200 rounded-bl-md"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start gap-2">
              <div className="w-7 h-7 bg-indigo-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="bg-gray-800 rounded-2xl rounded-bl-md px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0ms]" />
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:150ms]" />
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        {messages.length <= 1 && (
          <div className="px-4 pb-2 flex gap-2 flex-wrap">
            {quickQuestions.map((qq) => (
              <button
                key={qq}
                onClick={() => {
                  setInput(qq);
                  setTimeout(() => {
                    setMessages((prev) => [...prev, { role: "user", text: qq }]);
                    setInput("");
                    setIsTyping(true);
                    setTimeout(() => {
                      const response = generateLocalResponse(question, qq);
                      setMessages((prev) => [...prev, { role: "ai", text: response }]);
                      setIsTyping(false);
                    }, 600 + Math.random() * 800);
                  }, 50);
                }}
                className="text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1.5 rounded-full transition-colors cursor-pointer border border-gray-700"
              >
                {qq}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="px-4 py-3 bg-gray-800 border-t border-gray-700">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Frag mich etwas..."
              className="flex-1 bg-gray-700 text-white text-sm rounded-full px-4 py-2.5 outline-none placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="w-10 h-10 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:hover:bg-indigo-600 rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Reusable button to open the AI Tutor
export function AiTutorButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors cursor-pointer mt-2"
    >
      <Sparkles className="w-3.5 h-3.5" />
      Frag die KI
    </button>
  );
}
