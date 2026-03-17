/**
 * Post-Signup Referral Nudge — shows once after a user completes onboarding.
 *
 * Prompts the new user to share MedMaster with study partners.
 * Appears as a dismissible banner at the top of the dashboard.
 * Only shows once (localStorage flag).
 */
import { useState } from "react";
import { X, Share2, Copy, Check } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { trackEvent } from "@/lib/analyticsTracker";

const DISMISSED_KEY = "mm_referral_nudge_dismissed";

export function PostSignupReferral() {
  const { user } = useAuth();
  const [dismissed, setDismissed] = useState(() => localStorage.getItem(DISMISSED_KEY) === "1");
  const [copied, setCopied] = useState(false);

  if (dismissed || !user) return null;

  const referralCode = user.id.slice(0, 8);
  const referralUrl = `https://medmaster.at?ref=${referralCode}`;
  const shareText = `Hey! Ich bereite mich gerade mit MedMaster auf den MedAT vor – 5.000+ Fragen, alle 4 Bereiche, gratis bis Ende März. Probier's mal: ${referralUrl}`;

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem(DISMISSED_KEY, "1");
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(referralUrl);
    setCopied(true);
    trackEvent("referral_share", { method: "copy", source: "post_signup_nudge" });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    trackEvent("referral_share", { method: "whatsapp", source: "post_signup_nudge" });
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, "_blank");
  };

  return (
    <div className="mb-4 rounded-xl border border-[var(--accent)]/20 bg-[var(--accent)]/5 p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <Share2 className="w-5 h-5 text-[var(--accent)] mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-[var(--text-primary)]">
              Lern zusammen — teil MedMaster mit deiner Lerngruppe
            </p>
            <p className="text-xs text-[var(--text-secondary)] mt-1">
              Schick deinen Freunden diesen Link. Mehr Lernpartner = mehr Motivation.
            </p>
            <div className="flex items-center gap-2 mt-3">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--accent)] text-white hover:opacity-90 transition-opacity"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Kopiert!" : "Link kopieren"}
              </button>
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-600 text-white hover:opacity-90 transition-opacity"
              >
                WhatsApp
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={handleDismiss}
          className="p-1 rounded-lg text-[var(--muted)] hover:text-[var(--text-primary)] hover:bg-[var(--card)] transition-colors shrink-0"
          aria-label="Schließen"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
