import { useState } from "react";
import { Copy, Check, Share2 } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import {
  getReferralShareText,
  shareWhatsApp,
  shareTelegram,
  copyToClipboard,
} from "@/lib/shareUtils";
import { trackEvent } from "@/lib/analyticsTracker";
import { useReferralReward } from "@/hooks/useReferralReward";

export function ReferralWidget() {
  const { user } = useAuth();
  const reward = useReferralReward();
  const [copied, setCopied] = useState(false);

  const shareText = getReferralShareText(user?.id);

  const handleCopy = async () => {
    const ok = await copyToClipboard(reward.refLink);
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

  const totalReferrals = reward.totalReferrals;

  return (
    <div className="bg-[var(--surface)] rounded-xl border border-[var(--border)] p-3">
      {/* Compact header row: icon + text + reward status */}
      <div className="flex items-center gap-2.5 mb-2">
        <Share2 className="w-4 h-4 text-[var(--accent)] shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-[var(--text-primary)] leading-tight">
            {totalReferrals > 0
              ? `${totalReferrals} Freund${totalReferrals > 1 ? "e" : ""} eingeladen`
              : "Freunde einladen"}
          </p>
          <p className="text-xs text-[var(--muted)] leading-snug mt-0.5">
            Ihr spart beide &euro;5 &mdash; dein Freund beim Kauf, du per Rückerstattung.
          </p>
        </div>
      </div>

      {/* Compact share row: link input + copy + share buttons */}
      <div className="flex items-center gap-1.5">
        <input
          type="text"
          readOnly
          value={reward.refLink}
          className="flex-1 min-w-0 text-[11px] bg-[var(--card)] border border-[var(--border)] rounded-md px-2 py-1.5 text-[var(--text-secondary)] select-all"
        />
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md bg-[var(--card)] border border-[var(--border)] hover:bg-[var(--surface)] transition-colors cursor-pointer shrink-0"
          title="Link kopieren"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-500" />
          ) : (
            <Copy className="w-3.5 h-3.5 text-[var(--muted)]" />
          )}
        </button>
        <button
          onClick={handleWhatsApp}
          className="shrink-0 text-[11px] font-medium px-2.5 py-1.5 rounded-md bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors cursor-pointer"
        >
          WhatsApp
        </button>
        <button
          onClick={handleTelegram}
          className="shrink-0 text-[11px] font-medium px-2.5 py-1.5 rounded-md bg-[#0088cc]/10 text-[#0088cc] hover:bg-[#0088cc]/20 transition-colors cursor-pointer"
        >
          Telegram
        </button>
      </div>
    </div>
  );
}
