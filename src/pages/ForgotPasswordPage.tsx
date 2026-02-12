import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await resetPassword(email);
    setLoading(false);
    if (error) setError(error.message);
    else setSuccess(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary-700 dark:text-primary-400">MedMaster</h1>
          <p className="text-muted mt-2">Setze dein Passwort zurück.</p>
        </div>

        <Card>
          <CardContent className="p-6 space-y-4">
            {success ? (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">E-Mail gesendet!</h2>
                <p className="text-sm text-muted">
                  Falls ein Konto mit <strong>{email}</strong> existiert, haben wir dir einen Link zum Zurücksetzen geschickt.
                </p>
                <Link to="/login"><Button variant="outline">Zurück zum Login</Button></Link>
              </div>
            ) : (
              <>
                {error && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 text-sm text-red-700 dark:text-red-400">
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
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
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Wird gesendet..." : "Link senden"}
                  </Button>
                </form>
                <Link to="/login" className="flex items-center justify-center gap-1 text-sm text-primary-600 dark:text-primary-400 hover:underline">
                  <ArrowLeft className="w-3 h-3" /> Zurück zum Login
                </Link>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
