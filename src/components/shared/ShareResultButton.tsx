import { useState } from "react";
import { Share2, Check, MessageCircle, Send, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { shareText, shareWhatsApp, shareTelegram, copyToClipboard } from "@/lib/shareUtils";

type ShareResultButtonProps = {
  text: string;
  /** Compact = single button, expanded = button row with channels */
  variant?: "compact" | "expanded";
};

export function ShareResultButton({ text, variant = "expanded" }: ShareResultButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (variant === "compact") {
    return (
      <Button variant="outline" size="sm" onClick={() => shareText(text)} className="gap-1.5">
        <Share2 className="w-4 h-4" />
        Teilen
      </Button>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => shareWhatsApp(text)}
        className="gap-1.5 text-green-600 border-green-200 hover:bg-green-50 dark:border-green-800 dark:hover:bg-green-900/30"
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => shareTelegram(text)}
        className="gap-1.5 text-blue-500 border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-900/30"
      >
        <Send className="w-4 h-4" />
        Telegram
      </Button>
      <Button variant="outline" size="sm" onClick={handleCopy} className="gap-1.5">
        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
        {copied ? "Kopiert!" : "Kopieren"}
      </Button>
      <Button variant="outline" size="sm" onClick={() => shareText(text)} className="gap-1.5">
        <Share2 className="w-4 h-4" />
        Mehr
      </Button>
    </div>
  );
}
