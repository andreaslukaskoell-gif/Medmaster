import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, ArrowRight, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { useStore } from "@/store/useStore";
import { usePageTitle } from "@/hooks/usePageTitle";
import { translateAuthError } from "@/lib/authErrors";

export default function AuthPage() {
  usePageTitle("Anmelden");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);
  const { signIn, signUp, signInWithGoogle } = useAuth();
  const { setMedATOnboardingComplete } = useStore();
  const navigate = useNavigate();

  const handleGoogle = async () => {
    setError("");
    setGoogleLoading(true);
    const { error } = await signInWithGoogle();
    if (error) {
      setGoogleLoading(false);
      setError(translateAuthError(error.message));
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) return;
    if (password.length < 6) {
      setError("Passwort muss mindestens 6 Zeichen haben.");
      return;
    }

    setLoading(true);

    if (isNewUser) {
      // Sign up with email+password (no username/birthdate required)
      const { error } = await signUp(email, password, "", undefined);
      setLoading(false);
      if (error) {
        const msg = error.message ?? String(error);
        // If already registered, suggest login
        if (msg.includes("already registered") || msg.includes("already been registered")) {
          setError("Diese E-Mail ist bereits registriert. Melde dich stattdessen an.");
          setIsNewUser(false);
        } else {
          setError(translateAuthError(msg));
        }
      } else {
        setMedATOnboardingComplete();
        navigate("/dashboard");
      }
    } else {
      // Sign in with existing credentials
      const { error } = await signIn(email, password);
      setLoading(false);
      if (error) {
        const msg = error.message ?? String(error);
        setError(translateAuthError(msg));
      } else {
        setMedATOnboardingComplete();
        navigate("/dashboard");
      }
    }
  };

  // Google redirect loading state
  if (googleLoading) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[var(--accent)] mx-auto" />
          <p className="text-sm font-medium text-[var(--text-secondary)]">
            Weiterleitung zu Google...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[var(--accent)]">MedMaster</h1>
          <p className="text-[var(--muted)] mt-2">Deine MedAT-Vorbereitung</p>
        </div>

        <Card>
          <CardContent className="p-6 space-y-5">
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 text-sm text-red-700 dark:text-red-400">
                {error}
              </div>
            )}

            {/* Google — primary CTA */}
            <Button className="w-full py-6 text-base font-semibold" onClick={handleGoogle}>
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
                <span className="bg-[var(--card)] px-2 text-[var(--muted)]">oder</span>
              </div>
            </div>

            {/* Email fallback — collapsed by default */}
            {!showEmailForm ? (
              <button
                type="button"
                onClick={() => setShowEmailForm(true)}
                className="w-full text-sm text-[var(--accent)] font-medium hover:underline py-2"
              >
                Mit E-Mail anmelden
              </button>
            ) : (
              <form onSubmit={handleEmailSubmit} className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="deine@email.at"
                    required
                    autoFocus
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--text-primary)] text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={isNewUser ? "Passwort wählen (min. 6 Zeichen)" : "Dein Passwort"}
                    required
                    className="w-full pl-10 pr-10 py-3 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--text-primary)] text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted)] hover:text-[var(--text-secondary)]"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                <Button type="submit" className="w-full py-5" disabled={loading}>
                  {loading ? "Wird verarbeitet..." : isNewUser ? "Konto erstellen" : "Anmelden"}
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
            )}

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
          </CardContent>
        </Card>

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
