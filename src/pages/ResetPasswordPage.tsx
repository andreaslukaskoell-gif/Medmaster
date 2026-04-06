import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, Eye, EyeOff, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { usePageTitle } from "@/hooks/usePageTitle";
import { supabase } from "@/lib/supabase";
import { translateAuthError } from "@/lib/authErrors";

export default function ResetPasswordPage() {
  usePageTitle("Neues Passwort setzen");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Passwort muss mindestens 8 Zeichen haben.");
      return;
    }
    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password)) {
      setError("Passwort muss Klein- und Großbuchstaben sowie eine Zahl enthalten.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwörter stimmen nicht überein.");
      return;
    }

    setLoading(true);
    const { error } = await supabase!.auth.updateUser({ password });
    setLoading(false);

    if (error) {
      setError(translateAuthError(error.message));
    } else {
      setSuccess(true);
      setTimeout(() => navigate("/dashboard", { replace: true }), 3000);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="p-6 text-center space-y-4">
            <p className="text-[var(--muted)]">
              Der Link ist abgelaufen oder ungültig. Bitte fordere einen neuen Link an.
            </p>
            <Link to="/forgot-password">
              <Button>Neuen Link anfordern</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[var(--accent)]">MedMaster</h1>
          <p className="text-[var(--muted)] mt-2">Setze dein neues Passwort.</p>
        </div>

        <Card>
          <CardContent className="p-6 space-y-4">
            {success ? (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-lg font-bold text-[var(--text-primary)]">
                  Passwort aktualisiert!
                </h2>
                <p className="text-sm text-[var(--muted)]">
                  Dein Passwort wurde erfolgreich geändert. Du wirst gleich weitergeleitet...
                </p>
              </div>
            ) : (
              <>
                {error && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 text-sm text-red-700 dark:text-red-400">
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Neues Passwort (min. 8 Zeichen)"
                      required
                      autoComplete="new-password"
                      autoFocus
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

                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Passwort bestätigen"
                      required
                      autoComplete="new-password"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--text-primary)] text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    />
                  </div>

                  <p className="text-xs text-[var(--muted)]">
                    Mind. 8 Zeichen, Groß- und Kleinbuchstaben + Zahl
                  </p>

                  <Button type="submit" className="w-full py-5" disabled={loading}>
                    {loading ? "Wird gespeichert..." : "Passwort ändern"}
                  </Button>
                </form>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
