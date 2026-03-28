import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mail, ArrowRight, Lock, Eye, EyeOff, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useAuth } from "@/hooks/useAuth";
import { useStore } from "@/store/useStore";
import { usePageTitle } from "@/hooks/usePageTitle";
import { translateAuthError } from "@/lib/authErrors";
import { trackSignup, trackLogin } from "@/lib/analytics";
import {
  trackEvent,
  getStoredRef,
  getStoredUtm,
  getStoredGclid,
  getStoredFbclid,
} from "@/lib/analyticsTracker";
import { trackConversion } from "@/lib/growthTracking";
import { useThrottle } from "@/hooks/useThrottle";
import { isSafeInternalPath } from "@/lib/security";

/** Remember last email for returning users (non-sensitive, UX convenience). */
const LAST_EMAIL_KEY = "medmaster_last_email";

function getLastEmail(): string {
  try {
    return localStorage.getItem(LAST_EMAIL_KEY) ?? "";
  } catch {
    return "";
  }
}

function saveLastEmail(email: string) {
  try {
    localStorage.setItem(LAST_EMAIL_KEY, email.trim());
  } catch {
    // localStorage unavailable — ignore
  }
}

export default function AuthPage() {
  usePageTitle("Anmelden");
  const savedEmail = getLastEmail();
  const [email, setEmail] = useState(savedEmail);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const { signIn, signUp, signInWithGoogle, signInWithOtp } = useAuth();
  const setMedATOnboardingComplete = useStore((s) => s.setMedATOnboardingComplete);
  const navigate = useNavigate();
  const location = useLocation();
  const { blocked, remainingCooldown, checkThrottle } = useThrottle(5, 60_000, 30_000);

  // Extract redirect target from ?redirect= or from location state
  const redirectTarget = (() => {
    const params = new URLSearchParams(location.search);
    const param = params.get("redirect");
    if (param && isSafeInternalPath(param)) return param;
    const state = location.state as { from?: string } | null;
    if (state?.from && isSafeInternalPath(state.from)) return state.from;
    return "/dashboard";
  })();

  // If user already logged in, redirect immediately
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    if (isAuthenticated) navigate(redirectTarget, { replace: true });
  }, [isAuthenticated, navigate, redirectTarget]);

  const handleGoogle = async () => {
    setError("");
    setGoogleLoading(true);
    trackEvent("login_click", {
      method: "google",
      ref: getStoredRef(),
      utm: getStoredUtm(),
      gclid: getStoredGclid(),
      fbclid: getStoredFbclid(),
    });
    trackSignup("google");
    trackConversion("signup_started", { method: "google", source: "auth_page" });
    const { error } = await signInWithGoogle();
    if (error) {
      setGoogleLoading(false);
      setError(translateAuthError(error.message));
    }
  };

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    if (!checkThrottle()) return;
    setError("");
    setLoading(true);
    const { error } = await signInWithOtp(email);
    setLoading(false);
    if (error) {
      setError(translateAuthError(error.message));
    } else {
      saveLastEmail(email);
      trackLogin("magic_link");
      setOtpSent(true);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) return;
    if (!checkThrottle()) return;
    if (password.length < 6) {
      setError("Passwort muss mindestens 6 Zeichen haben.");
      return;
    }

    setLoading(true);

    if (isNewUser) {
      const { error } = await signUp(email, password, "", undefined);
      setLoading(false);
      if (error) {
        const msg = error.message ?? String(error);
        if (msg.includes("already registered") || msg.includes("already been registered")) {
          setError("Diese E-Mail ist bereits registriert. Melde dich stattdessen an.");
          setIsNewUser(false);
        } else {
          setError(translateAuthError(msg));
        }
      } else {
        saveLastEmail(email);
        trackSignup("email");
        trackEvent("signup", {
          method: "email",
          ref: getStoredRef(),
          utm: getStoredUtm(),
          gclid: getStoredGclid(),
          fbclid: getStoredFbclid(),
        });
        trackConversion("signup_completed", { method: "email", ref: getStoredRef() });
        // Don't skip onboarding — let user set their display name first
        navigate("/medat-onboarding");
      }
    } else {
      const { error } = await signIn(email, password);
      setLoading(false);
      if (error) {
        setError(translateAuthError(error.message ?? String(error)));
      } else {
        saveLastEmail(email);
        trackLogin("email");
        setMedATOnboardingComplete();
        navigate(redirectTarget);
      }
    }
  };

  // Google redirect loading state
  if (googleLoading) {
    return (
      <div className="hero-orbs min-h-screen bg-[var(--background)] flex items-center justify-center p-4">
        <div className="card-glass p-8 text-center space-y-4">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[var(--accent)] mx-auto" />
          <p className="text-sm font-medium text-[var(--text-secondary)]">
            Weiterleitung zu Google...
          </p>
        </div>
      </div>
    );
  }

  // Magic link sent confirmation
  if (otpSent) {
    return (
      <div className="hero-orbs min-h-screen bg-[var(--background)] flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          <div className="card-glass">
            <div className="p-8 text-center space-y-4">
              <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
              <h2 className="text-xl font-bold text-[var(--text-primary)]">Link gesendet!</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Wir haben dir einen Anmeldelink an{" "}
                <span className="font-medium text-[var(--text-primary)]">{email}</span> gesendet.
                Klicke auf den Link in der E-Mail, um dich anzumelden.
              </p>
              <p className="text-xs text-[var(--muted)]">
                Nicht angekommen? Prüfe deinen Spam-Ordner.
              </p>
              <button
                type="button"
                onClick={() => {
                  setOtpSent(false);
                  setEmail("");
                }}
                className="text-sm text-[var(--accent)] hover:underline"
              >
                Andere E-Mail verwenden
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-orbs min-h-screen bg-[var(--background)] flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-[var(--accent)]">MedMaster</h1>
          <p className="text-[var(--muted)] mt-2">
            5.000+ BMS-Fragen · 10.000+ KFF-Übungen · Gratis bis 31. März
          </p>
        </div>

        <div className="card-glass">
          <div className="p-6 space-y-5">
            {blocked && (
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3 text-sm text-amber-700 dark:text-amber-400">
                Zu viele Versuche. Bitte warte {remainingCooldown} Sekunden.
              </div>
            )}

            {error && !blocked && (
              <div
                role="alert"
                id="auth-error"
                className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 text-sm text-red-700 dark:text-red-400"
              >
                {error}
              </div>
            )}

            {/* Google — primary CTA */}
            <Button
              variant="premium"
              className="w-full py-6 text-base font-semibold"
              onClick={handleGoogle}
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Mit Google weiter
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <p className="text-center text-xs text-[var(--muted)]">
              Empfohlen — 1 Klick, kein Passwort nötig
            </p>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[var(--border)]" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-[var(--background)] px-2 text-[var(--muted)]">oder per E-Mail</span>
              </div>
            </div>

            {/* Email section — Magic Link always visible (no extra click needed) */}
            <div className="space-y-3">
              {!showPasswordForm ? (
                <>
                  <form onSubmit={handleMagicLink} className="space-y-3">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="deine@email.at"
                        required
                        aria-label="E-Mail-Adresse"
                        aria-describedby={error ? "auth-error" : undefined}
                        aria-invalid={!!error || undefined}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--text-primary)] text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]"
                      />
                    </div>

                    <Button type="submit" className="w-full py-5" disabled={loading}>
                      {loading ? "Wird gesendet..." : "Anmeldelink senden"}
                    </Button>
                  </form>
                  <p className="text-center text-xs text-[var(--muted)]">
                    Wir senden dir einen Link — kein Passwort nötig
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowPasswordForm(true)}
                    className="w-full text-xs text-[var(--muted)] hover:text-[var(--text-secondary)] py-1"
                  >
                    Lieber mit Passwort anmelden?
                  </button>
                </>
              ) : (
                /* Password form — tertiary, demoted */
                <>
                  <form onSubmit={handlePasswordSubmit} className="space-y-3">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="deine@email.at"
                        required
                        autoFocus
                        aria-label="E-Mail-Adresse"
                        aria-describedby={error ? "auth-error" : undefined}
                        aria-invalid={!!error || undefined}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--text-primary)] text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]"
                      />
                    </div>

                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={
                          isNewUser ? "Passwort wählen (min. 6 Zeichen)" : "Dein Passwort"
                        }
                        required
                        aria-label="Passwort"
                        className="w-full pl-10 pr-10 py-3 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--text-primary)] text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? "Passwort verbergen" : "Passwort anzeigen"}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted)] hover:text-[var(--text-secondary)]"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    <Button type="submit" className="w-full py-5" disabled={loading}>
                      {loading
                        ? "Wird verarbeitet..."
                        : isNewUser
                          ? "Konto erstellen"
                          : "Anmelden"}
                    </Button>

                    <div className="flex items-center justify-between text-xs">
                      <button
                        type="button"
                        onClick={() => setIsNewUser(!isNewUser)}
                        className="text-[var(--accent)] hover:underline"
                      >
                        {isNewUser ? "Bereits ein Konto? Anmelden" : "Neu hier? Konto erstellen"}
                      </button>
                      {!isNewUser && (
                        <Link
                          to="/forgot-password"
                          className="text-[var(--muted)] hover:text-[var(--text-secondary)]"
                        >
                          Passwort vergessen?
                        </Link>
                      )}
                    </div>
                  </form>
                  <button
                    type="button"
                    onClick={() => setShowPasswordForm(false)}
                    className="w-full text-xs text-[var(--muted)] hover:text-[var(--text-secondary)] py-1"
                  >
                    Zurück zum Anmeldelink
                  </button>
                </>
              )}
            </div>

            <p className="text-center text-xs text-[var(--muted)] leading-relaxed">
              Mit der Anmeldung akzeptierst du die{" "}
              <Link to="/agb" target="_blank" className="text-[var(--accent)] hover:underline">
                AGB
              </Link>{" "}
              und{" "}
              <Link
                to="/datenschutz"
                target="_blank"
                className="text-[var(--accent)] hover:underline"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-[var(--muted)]">
          <Link to="/impressum" className="hover:underline">
            Impressum
          </Link>
          {" · "}
          <Link to="/datenschutz" className="hover:underline">
            Datenschutz
          </Link>
          {" · "}
          <Link to="/agb" className="hover:underline">
            AGB
          </Link>
        </p>
      </div>
    </div>
  );
}
