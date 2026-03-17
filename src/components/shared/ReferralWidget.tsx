import { useState, useEffect } from "react";
import { Users, Copy, Check, Share2 } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";
import {
  getReferralShareText,
  shareWhatsApp,
  shareTelegram,
  copyToClipboard,
} from "@/lib/shareUtils";
import { trackEvent } from "@/lib/analyticsTracker";

export function ReferralWidget() {
  const { user } = useAuth();
  const [count, setCount] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const refCode = user?.id.slice(0, 8) || "";
  const refLink = `https://medmaster.at?ref=${refCode}`;
  const shareText = getReferralShareText(user?.id);

  useEffect(() => {
    if (!user || !supabase) return;
    Promise.resolve(supabase.rpc("get_referral_count", { user_uuid: user.id }))
      .then(({ data }) => {
        if (typeof data === "number") setCount(data);
      })
      .catch(() => {});
  }, [user]);

  const handleCopy = async () => {
    const ok = await copyToClipboard(refLink);
    if (ok) {
      setCopied(true);
      trackEvent("referral_share", { method: "copy" });
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleWhatsApp = () => {
    trackEvent("referral_share", { method: "whatsapp" });
    shareWhatsApp(shareText);
  };

  const handleTelegram = () => {
    trackEvent("referral_share", { method: "telegram" });
    shareTelegram(shareText);
  };

  if (!user) return null;

  return (
    <div className="bg-[var(--surface)] rounded-xl border border-[var(--border)] p-5">
      <div className="flex items-center gap-2 mb-3">
        <Share2 className="w-4 h-4 text-[var(--accent)]" />
        <h3 className="text-sm font-semibold text-[var(--text-primary)]">Freunde einladen</h3>
      </div>

      {count !== null && count > 0 && (
        <div className="flex items-center gap-2 mb-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg px-3 py-2">
          <Users className="w-4 h-4 text-emerald-600" />
          <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
            {count} {count === 1 ? "Freund" : "Freunde"} eingeladen
          </span>
        </div>
      )}

      <p className="text-xs text-[var(--muted)] mb-3">
        Teile deinen Link und lerne gemeinsam mit Freunden für den MedAT.
      </p>

      {/* Referral link */}
      <div className="flex items-center gap-2 mb-3">
        <input
          type="text"
          readOnly
          value={refLink}
          className="flex-1 text-xs bg-[var(--card)] border border-[var(--border)] rounded-lg px-3 py-2 text-[var(--text-secondary)] select-all"
        />
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg bg-[var(--card)] border border-[var(--border)] hover:bg-[var(--surface)] transition-colors cursor-pointer"
          title="Link kopieren"
        >
          {copied ? (
            <Check className="w-4 h-4 text-emerald-500" />
          ) : (
            <Copy className="w-4 h-4 text-[var(--muted)]" />
          )}
        </button>
      </div>

      {/* Share buttons */}
      <div className="flex gap-2">
        <button
          onClick={handleWhatsApp}
          className="flex-1 text-xs font-medium py-2 rounded-lg bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors cursor-pointer"
        >
          WhatsApp
        </button>
        <button
          onClick={handleTelegram}
          className="flex-1 text-xs font-medium py-2 rounded-lg bg-[#0088cc]/10 text-[#0088cc] hover:bg-[#0088cc]/20 transition-colors cursor-pointer"
        >
          Telegram
        </button>
      </div>
    </div>
  );
}
