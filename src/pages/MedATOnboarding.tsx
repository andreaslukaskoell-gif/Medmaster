import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";
import { trackOnboardingComplete } from "@/lib/analytics";
import { trackEvent } from "@/lib/analyticsTracker";

export default function MedATOnboarding() {
  const [username, setUsername] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const setComplete = useStore((s) => s.setMedATOnboardingComplete);
  const { user, profile } = useAuth();

  // If user already has a real display name (e.g. from Google), skip onboarding
  useEffect(() => {
    const existingName =
      profile?.display_name?.trim() ||
      (profile?.username?.trim() && !profile.username.includes("@") ? profile.username.trim() : "");
    if (existingName) {
      setComplete();
      trackOnboardingComplete();
      trackEvent("onboarding_complete");
      navigate("/dashboard", { replace: true });
    }
  }, [profile, setComplete, navigate]);

  const handleFinish = async () => {
    const trimmed = username.trim();
    if (trimmed.length < 2) {
      setError("Bitte wähle einen Namen mit mindestens 2 Zeichen.");
      return;
    }
    setError("");
    setSaving(true);

    if (supabase && user) {
      try {
        const { error: upsertError } = await supabase
          .from("profiles")
          .upsert({ id: user.id, display_name: trimmed, username: trimmed }, { onConflict: "id" });
        if (upsertError) {
          console.warn("[onboarding] profile upsert error:", upsertError.message);
          setError("Profil konnte nicht gespeichert werden. Bitte versuche es erneut.");
          setSaving(false);
          return;
        }
      } catch (err) {
        console.warn("[onboarding] profile upsert failed:", err);
        setError("Profil konnte nicht gespeichert werden. Bitte versuche es erneut.");
        setSaving(false);
        return;
      }
    }

    setSaving(false);
    setComplete();
    trackOnboardingComplete();
    trackEvent("onboarding_complete");
    navigate("/dashboard", { replace: true });
  };

  return (
    <div className="min-h-screen bg-[var(--background)] px-4 py-10 sm:py-20">
      <div className="mx-auto w-full max-w-md flex flex-col items-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--accent)]/10">
          <User className="w-10 h-10 text-[var(--accent)]" aria-hidden />
        </div>

        <h1 className="mt-6 text-2xl font-bold tracking-tight text-[var(--text-primary)]">
          Wie heißt du?
        </h1>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
          Wird im Dashboard angezeigt. Du kannst den Namen jederzeit ändern.
        </p>

        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError("");
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleFinish();
          }}
          placeholder="Dein Name"
          maxLength={30}
          autoFocus
          className="mt-6 w-full max-w-xs rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-center text-lg font-medium text-[var(--text-primary)] placeholder:text-[var(--muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
        />
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

        <div className="mt-8 w-full max-w-xs">
          <Button size="lg" className="w-full" onClick={handleFinish} disabled={saving}>
            {saving ? "Wird gespeichert..." : "Los geht's"}
          </Button>
        </div>
      </div>
    </div>
  );
}
