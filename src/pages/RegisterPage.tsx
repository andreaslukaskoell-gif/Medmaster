import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (username.length < 3) { setError("Username muss mindestens 3 Zeichen haben."); return; }
    if (password.length < 6) { setError("Passwort muss mindestens 6 Zeichen haben."); return; }

    setLoading(true);
    const { error } = await signUp(email, password, username);
    setLoading(false);

    if (error) setError(error.message);
    else setSuccess(true);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto">
              <Mail className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">E-Mail bestätigen</h2>
            <p className="text-sm text-muted">
              Wir haben dir eine Bestätigungsmail an <strong>{email}</strong> geschickt.
              Klicke auf den Link in der E-Mail, um dein Konto zu aktivieren.
            </p>
            <Button onClick={() => navigate("/login")}>Zum Login</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary-700 dark:text-primary-400">MedMaster</h1>
          <p className="text-muted mt-2">Erstelle dein kostenloses Konto.</p>
        </div>

        <Card>
          <CardContent className="p-6 space-y-4">
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 text-sm text-red-700 dark:text-red-400">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">Username</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="DeinUsername"
                    required
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-sm outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">E-Mail</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="deine@email.at"
                    required
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-sm outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">Passwort</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mindestens 6 Zeichen"
                    required
                    className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-border dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-sm outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-gray-700 dark:hover:text-gray-300">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Wird erstellt..." : "Konto erstellen"}
              </Button>
            </form>

            <p className="text-center text-sm text-muted">
              Bereits ein Konto?{" "}
              <Link to="/login" className="text-primary-600 dark:text-primary-400 font-medium hover:underline">
                Anmelden
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
