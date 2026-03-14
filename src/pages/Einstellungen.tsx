import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Moon,
  Sun,
  Trash2,
  LogOut,
  Mail,
  User,
  Shield,
  FileText,
  Scale,
  ChevronRight,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useStore } from "@/store/useStore";

export default function Einstellungen() {
  const { user, profile, signOut, deleteAccount } = useAuth();
  const darkMode = useStore((s) => s.darkMode);
  const toggleDarkMode = useStore((s) => s.toggleDarkMode);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleDeleteAccount = async () => {
    setDeleting(true);
    await deleteAccount();
    setDeleting(false);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[var(--foreground)]">Einstellungen</h1>
        <p className="text-sm text-[var(--muted)] mt-1">Konto, Darstellung und mehr</p>
      </div>

      {/* ── Konto ──────────────────────────────────────────────── */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
          Konto
        </h2>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] divide-y divide-[var(--border)]">
          {/* E-Mail */}
          <div className="flex items-center gap-3 px-4 py-3.5">
            <Mail className="w-4 h-4 text-[var(--muted)] shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[var(--foreground)]">E-Mail</p>
              <p className="text-xs text-[var(--muted)] truncate">{user?.email ?? "—"}</p>
            </div>
          </div>

          {/* Benutzername */}
          <div className="flex items-center gap-3 px-4 py-3.5">
            <User className="w-4 h-4 text-[var(--muted)] shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[var(--foreground)]">Benutzername</p>
              <p className="text-xs text-[var(--muted)] truncate">
                {profile?.display_name || profile?.username || "—"}
              </p>
            </div>
          </div>

          {/* Abo */}
          <div className="flex items-center gap-3 px-4 py-3.5">
            <Shield className="w-4 h-4 text-[var(--muted)] shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[var(--foreground)]">Status</p>
              <p className="text-xs text-[var(--muted)]">
                {profile?.subscription_tier === "premium" ||
                profile?.subscription_tier === "standard" ||
                profile?.subscription_tier === "pro"
                  ? "Premium"
                  : new Date() < new Date("2026-04-01T00:00:00+02:00")
                    ? "Gratis (bis 31. März)"
                    : "Kostenlos"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Darstellung ────────────────────────────────────────── */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
          Darstellung
        </h2>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] divide-y divide-[var(--border)]">
          {/* Dark Mode */}
          <div className="flex items-center gap-3 px-4 py-3.5">
            {darkMode ? (
              <Moon className="w-4 h-4 text-[var(--muted)] shrink-0" />
            ) : (
              <Sun className="w-4 h-4 text-[var(--muted)] shrink-0" />
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[var(--foreground)]">Dark Mode</p>
              <p className="text-xs text-[var(--muted)]">
                {darkMode ? "Aktiviert" : "Deaktiviert"}
              </p>
            </div>
            <button
              type="button"
              onClick={toggleDarkMode}
              className={`relative w-11 h-6 rounded-full transition-colors cursor-pointer ${
                darkMode ? "bg-[var(--accent)]" : "bg-[var(--muted)]/30"
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                  darkMode ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>
      </section>

      {/* ── Rechtliches ───────────────────────────────────────── */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
          Rechtliches
        </h2>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] divide-y divide-[var(--border)]">
          <Link
            to="/impressum"
            className="flex items-center gap-3 px-4 py-3.5 hover:bg-[var(--foreground)]/5 transition-colors"
          >
            <FileText className="w-4 h-4 text-[var(--muted)] shrink-0" />
            <span className="flex-1 text-sm font-medium text-[var(--foreground)]">Impressum</span>
            <ChevronRight className="w-4 h-4 text-[var(--muted)]" />
          </Link>
          <Link
            to="/datenschutz"
            className="flex items-center gap-3 px-4 py-3.5 hover:bg-[var(--foreground)]/5 transition-colors"
          >
            <Shield className="w-4 h-4 text-[var(--muted)] shrink-0" />
            <span className="flex-1 text-sm font-medium text-[var(--foreground)]">Datenschutz</span>
            <ChevronRight className="w-4 h-4 text-[var(--muted)]" />
          </Link>
          <Link
            to="/agb"
            className="flex items-center gap-3 px-4 py-3.5 hover:bg-[var(--foreground)]/5 transition-colors"
          >
            <Scale className="w-4 h-4 text-[var(--muted)] shrink-0" />
            <span className="flex-1 text-sm font-medium text-[var(--foreground)]">AGB</span>
            <ChevronRight className="w-4 h-4 text-[var(--muted)]" />
          </Link>
        </div>
      </section>

      {/* ── Aktionen ──────────────────────────────────────────── */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
          Aktionen
        </h2>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] divide-y divide-[var(--border)]">
          {/* Abmelden */}
          <button
            type="button"
            onClick={signOut}
            className="flex items-center gap-3 px-4 py-3.5 w-full text-left hover:bg-[var(--foreground)]/5 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4 text-[var(--muted)] shrink-0" />
            <span className="flex-1 text-sm font-medium text-[var(--foreground)]">Abmelden</span>
          </button>

          {/* Konto löschen */}
          {!showDeleteConfirm ? (
            <button
              type="button"
              onClick={() => setShowDeleteConfirm(true)}
              className="flex items-center gap-3 px-4 py-3.5 w-full text-left hover:bg-red-500/5 transition-colors cursor-pointer"
            >
              <Trash2 className="w-4 h-4 text-red-400 shrink-0" />
              <span className="flex-1 text-sm font-medium text-red-400">Konto löschen</span>
            </button>
          ) : (
            <div className="px-4 py-4 space-y-3">
              <div className="flex items-start gap-3">
                <Trash2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-red-500">Konto endgültig löschen?</p>
                  <p className="text-xs text-[var(--muted)] mt-1">
                    Alle deine Daten, Fortschritt und Statistiken werden unwiderruflich gelöscht.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 pl-7">
                <button
                  type="button"
                  onClick={handleDeleteAccount}
                  disabled={deleting}
                  className="px-4 py-2 text-xs font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors cursor-pointer disabled:opacity-50"
                >
                  {deleting ? "Wird gelöscht..." : "Ja, Konto löschen"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowDeleteConfirm(false)}
                  className="px-4 py-2 text-xs font-medium text-[var(--muted)] hover:text-[var(--foreground)] bg-[var(--foreground)]/5 rounded-lg transition-colors cursor-pointer"
                >
                  Abbrechen
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Version */}
      <p className="text-xs text-[var(--muted)] text-center opacity-50 pt-4">MedMaster v2.0</p>
    </div>
  );
}
