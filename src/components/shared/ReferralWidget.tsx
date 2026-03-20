import { useState } from "react";
import { Users, Copy, Check, Share2, Gift, ChevronDown, ChevronUp } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import {
  getReferralShareText,
  shareWhatsApp,
  shareTelegram,
  copyToClipboard,
} from "@/lib/shareUtils";
import { trackEvent } from "@/lib/analyticsTracker";
import { useReferralReward } from "@/hooks/useReferralReward";
import { formatPrice } from "@/lib/stripe";

export function ReferralWidget() {
  const { user } = useAuth();
  const reward = useReferralReward();
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

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

  const hasReward = reward.hasReward;
  const totalReferrals = reward.totalReferrals;

  return (
    <div className="bg-[var(--surface)] rounded-xl border border-[var(--border)] overflow-hidden">
      {/* Header */}
      <div className="p-5 pb-0">
        <div className="flex items-center gap-2 mb-2">
          {hasReward ? (
            <Gift className="w-4 h-4 text-emerald-500" />
          ) : (
            <Share2 className="w-4 h-4 text-[var(--accent)]" />
          )}
          <h3 className="text-sm font-semibold text-[var(--text-primary)]">
            {hasReward ? "Dein Vorteil ist aktiv" : "5 € sparen"}
          </h3>
        </div>

        {/* Reward status banner */}
        {hasReward ? (
          <div className="flex items-center gap-2 mb-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg px-3 py-2.5">
            <div className="flex-1">
              <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                Dein Preis: {formatPrice(reward.personalPriceCents)} statt {formatPrice(2990)}
              </p>
              <p className="text-[11px] text-emerald-600/70 dark:text-emerald-400/70 mt-0.5">
                Ein Freund hat bezahlt — dein 5-€-Vorteil ist freigeschaltet.
              </p>
            </div>
          </div>
        ) : (
          <div className="mb-3">
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Lade einen Freund ein. Wenn er MedMaster kauft, sinkt{" "}
              <strong>dein Preis einmalig auf {formatPrice(2490)}</strong>.
            </p>
          </div>
        )}

        {/* Referral count */}
        {totalReferrals > 0 && (
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-3.5 h-3.5 text-[var(--muted)]" />
            <span className="text-xs text-[var(--muted)]">
              {totalReferrals} {totalReferrals === 1 ? "Freund eingeladen" : "Freunde eingeladen"}
              {reward.paidReferrals > 0 && (
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                  {" "}
                  — {reward.paidReferrals} hat bezahlt
                </span>
              )}
            </span>
          </div>
        )}
      </div>

      {/* Share section */}
      <div className="px-5 pb-4">
        {/* Referral link */}
        <div className="flex items-center gap-2 mb-2.5">
          <input
            type="text"
            readOnly
            value={reward.refLink}
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

      {/* Expandable FAQ */}
      <div className="border-t border-[var(--border)]">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between px-5 py-2.5 text-[11px] text-[var(--muted)] hover:text-[var(--text-secondary)] transition-colors cursor-pointer"
        >
          <span>Wie funktioniert das?</span>
          {expanded ? (
            <ChevronUp className="w-3.5 h-3.5" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5" />
          )}
        </button>
        {expanded && (
          <div className="px-5 pb-4 text-[11px] text-[var(--muted)] space-y-2 leading-relaxed">
            <p>
              <strong className="text-[var(--text-secondary)]">1.</strong> Teile deinen persönlichen
              Link mit Freunden.
            </p>
            <p>
              <strong className="text-[var(--text-secondary)]">2.</strong> Sobald ein eingeladener
              Freund MedMaster kauft, wird dein 5-€-Vorteil freigeschaltet.
            </p>
            <p>
              <strong className="text-[var(--text-secondary)]">3.</strong> Dein persönlicher Preis
              sinkt dann einmalig von {formatPrice(2990)} auf {formatPrice(2490)}.
            </p>
            <div className="pt-1 border-t border-[var(--border)]/50 mt-2 space-y-1">
              <p>Der Vorteil ist auf 5 € gedeckelt — ein einziger zahlender Freund reicht.</p>
              <p>
                Eingeladene Freunde erhalten keinen sofortigen Rabatt, können aber selbst Freunde
                einladen und ihren eigenen 5-€-Vorteil freischalten.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
