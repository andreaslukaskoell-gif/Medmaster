import { useState } from "react";
import { ReferralWidget } from "@/components/shared/ReferralWidget";
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
  Type,
  Target,
  ListOrdered,
  Timer,
  RotateCcw,
  Download,
  Lock,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { exportUserData } from "@/lib/backendSync";
import { useStore } from "@/store/useStore";
import { usePageMeta } from "@/hooks/usePageMeta";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const FONT_OPTIONS: { value: "small" | "normal" | "large"; label: string }[] = [
  { value: "small", label: "Klein" },
  { value: "normal", label: "Normal" },
  { value: "large", label: "Groß" },
];

const GOAL_OPTIONS = [
  { value: 0, label: "Aus" },
  { value: 15, label: "15 Min" },
  { value: 30, label: "30 Min" },
  { value: 45, label: "45 Min" },
  { value: 60, label: "60 Min" },
  { value: 90, label: "90 Min" },
];

const QUESTIONS_OPTIONS = [5, 10, 15, 20, 30];

const TIMER_OPTIONS = [
  { value: 0, label: "Aus" },
  { value: 30, label: "30 Sek" },
  { value: 60, label: "60 Sek" },
  { value: 90, label: "90 Sek" },
  { value: 120, label: "2 Min" },
];

function SegmentedControl<T extends string | number>({
  options,
  value,
  onChange,
  getLabel,
}: {
  options: T[];
  value: T;
  onChange: (v: T) => void;
  getLabel?: (v: T) => string;
}) {
  return (
    <div className="flex gap-1 bg-[var(--foreground)]/5 rounded-lg p-0.5">
      {options.map((opt) => (
        <button
          key={String(opt)}
          type="button"
          onClick={() => onChange(opt)}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
            value === opt
              ? "bg-[var(--accent)] text-white shadow-sm"
              : "text-[var(--text-secondary)] hover:text-[var(--foreground)]"
          }`}
        >
          {getLabel ? getLabel(opt) : String(opt)}
        </button>
      ))}
    </div>
  );
}

function SettingRow({
  icon: Icon,
  label,
  description,
  children,
}: {
  icon: typeof Moon;
  label: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3.5">
      <Icon className="w-4 h-4 text-[var(--muted)] shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-[var(--foreground)]">{label}</p>
        {description && <p className="text-xs text-[var(--muted)]">{description}</p>}
      </div>
      {children}
    </div>
  );
}

function PasswordChangeSection() {
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChange = async () => {
    if (newPw.length < 8) {
      toast.error("Passwort muss mindestens 8 Zeichen haben.");
      return;
    }
    if (!/[a-z]/.test(newPw) || !/[A-Z]/.test(newPw) || !/\d/.test(newPw)) {
      toast.error("Passwort muss Klein- und Großbuchstaben sowie eine Zahl enthalten.");
      return;
    }
    if (newPw !== confirmPw) {
      toast.error("Passwörter stimmen nicht überein.");
      return;
    }
    setLoading(true);
    const { error } = await supabase!.auth.updateUser({ password: newPw });
    setLoading(false);
    if (error) {
      toast.error(error.message || "Passwort konnte nicht geändert werden.");
    } else {
      toast.success("Passwort erfolgreich geändert.");
      setNewPw("");
      setConfirmPw("");
      setOpen(false);
    }
  };

  return (
    <section className="space-y-3">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
        Sicherheit
      </h2>
      <div className="card-glass divide-y divide-[var(--border)]">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3 px-4 py-3.5 w-full text-left hover:bg-[var(--surface-hover)] transition-colors"
        >
          <Lock className="w-4 h-4 text-[var(--muted)] shrink-0" />
          <span className="flex-1 text-sm font-medium text-[var(--foreground)]">Passwort ändern</span>
          <ChevronRight className={`w-4 h-4 text-[var(--muted)] transition-transform ${open ? "rotate-90" : ""}`} />
        </button>
        {open && (
          <div className="px-4 py-4 space-y-3">
            <input
              type="password"
              value={newPw}
              onChange={(e) => setNewPw(e.target.value)}
              placeholder="Neues Passwort (min. 8 Zeichen)"
              autoComplete="new-password"
              className="w-full px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--text-primary)] text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
            <input
              type="password"
              value={confirmPw}
              onChange={(e) => setConfirmPw(e.target.value)}
              placeholder="Passwort bestätigen"
              autoComplete="new-password"
              className="w-full px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--text-primary)] text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
            <p className="text-xs text-[var(--muted)]">Mind. 8 Zeichen, Groß- und Kleinbuchstaben + Zahl</p>
            <button
              type="button"
              onClick={handleChange}
              disabled={loading || !newPw || !confirmPw}
              className="w-full py-2 rounded-lg bg-[var(--accent)] text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? "Wird gespeichert..." : "Passwort ändern"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default function Einstellungen() {
  usePageMeta({
    title: "Einstellungen — MedMaster",
    description:
      "Passe deine MedMaster-Einstellungen an: Design, Lernziele, Schriftgröße und mehr.",
  });
  const { user, profile, signOut, deleteAccount } = useAuth();
  const darkMode = useStore((s) => s.darkMode);
  const toggleDarkMode = useStore((s) => s.toggleDarkMode);
  const fontSize = useStore((s) => s.fontSize) ?? "normal";
  const setFontSize = useStore((s) => s.setFontSize);
  const dailyGoalMinutes = useStore((s) => s.dailyGoalMinutes) ?? 30;
  const setDailyGoalMinutes = useStore((s) => s.setDailyGoalMinutes);
  const questionsPerSession = useStore((s) => s.questionsPerSession) ?? 10;
  const setQuestionsPerSession = useStore((s) => s.setQuestionsPerSession);
  const quizTimerSeconds = useStore((s) => s.quizTimerSeconds) ?? 0;
  const setQuizTimerSeconds = useStore((s) => s.setQuizTimerSeconds);
  const resetProgress = useStore((s) => s.resetProgress);

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const [exporting, setExporting] = useState(false);

  const handleDeleteAccount = async () => {
    setDeleting(true);
    setDeleteError(null);
    try {
      await deleteAccount();
    } catch (err) {
      setDeleteError(
        err instanceof Error
          ? err.message
          : "Fehler beim Löschen. Bitte kontaktiere support@medmaster.at"
      );
      setDeleting(false);
    }
  };

  const handleFontSize = (size: "small" | "normal" | "large") => {
    setFontSize(size);
    document.documentElement.classList.remove("font-small", "font-normal", "font-large");
    document.documentElement.classList.add(`font-${size}`);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      <div className="hero-orbs text-center py-8">
        <h1 className="heading-glow text-2xl sm:text-[3rem] sm:leading-tight font-bold text-[var(--text-primary)]">
          Einstellungen
        </h1>
        <p className="text-sm text-[var(--muted)] mt-1">Konto, Darstellung, Lernen und mehr</p>
      </div>

      {/* ── Konto ──────────────────────────────────────────────── */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
          Konto
        </h2>
        <div className="card-glass divide-y divide-[var(--border)]">
          <div className="flex items-center gap-3 px-4 py-3.5">
            <Mail className="w-4 h-4 text-[var(--muted)] shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[var(--foreground)]">E-Mail</p>
              <p className="text-xs text-[var(--muted)] truncate">{user?.email ?? "—"}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-3.5">
            <User className="w-4 h-4 text-[var(--muted)] shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[var(--foreground)]">Benutzername</p>
              <p className="text-xs text-[var(--muted)] truncate">
                {profile?.display_name?.trim() ||
                  (profile?.username?.trim() && !profile.username.includes("@")
                    ? profile.username
                    : null) ||
                  "—"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-3.5">
            <Shield className="w-4 h-4 text-[var(--muted)] shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[var(--foreground)]">Status</p>
              {profile?.subscription_tier === "premium" ||
              profile?.subscription_tier === "standard" ||
              profile?.subscription_tier === "pro" ? (
                <p className="text-xs text-emerald-600 font-medium">Premium</p>
              ) : (
                <div className="flex items-center gap-2">
                  <p className="text-xs text-[var(--muted)]">Starter (eingeschränkt)</p>
                  <Link
                    to="/preise"
                    className="text-xs font-semibold text-[var(--accent)] hover:underline"
                  >
                    Upgrade
                  </Link>
                </div>
              )}
            </div>
          </div>
          {(profile?.subscription_tier === "premium" ||
            profile?.subscription_tier === "standard" ||
            profile?.subscription_tier === "pro") && (
            <div className="flex items-center gap-3 px-4 py-3.5">
              <FileText className="w-4 h-4 text-[var(--muted)] shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[var(--foreground)]">Kaufbeleg</p>
                <p className="text-xs text-[var(--muted)]">
                  Deine Rechnung wurde per E-Mail an{" "}
                  <span className="font-medium">{user?.email}</span> gesendet.
                  Bei Fragen:{" "}
                  <a href="mailto:support@medmaster.at" className="text-[var(--accent)] hover:underline">
                    support@medmaster.at
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Passwort ändern ──────────────────────────────────── */}
      <PasswordChangeSection />

      {/* ── Freunde einladen ─────────────────────────────────── */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
          Freunde einladen
        </h2>
        <ReferralWidget />
      </section>

      {/* ── Darstellung ────────────────────────────────────────── */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
          Darstellung
        </h2>
        <div className="card-glass divide-y divide-[var(--border)]">
          <SettingRow
            icon={darkMode ? Moon : Sun}
            label="Dark Mode"
            description={darkMode ? "Aktiviert" : "Deaktiviert"}
          >
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
          </SettingRow>

          <SettingRow icon={Type} label="Schriftgröße" description="Größe der Lerninhalte">
            <SegmentedControl
              options={FONT_OPTIONS.map((o) => o.value)}
              value={fontSize}
              onChange={handleFontSize}
              getLabel={(v) => FONT_OPTIONS.find((o) => o.value === v)?.label ?? v}
            />
          </SettingRow>
        </div>
      </section>

      {/* ── Lernen ─────────────────────────────────────────────── */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
          Lernen
        </h2>
        <div className="card-glass divide-y divide-[var(--border)]">
          <SettingRow
            icon={Target}
            label="Tägliches Lernziel"
            description={
              dailyGoalMinutes === 0 ? "Deaktiviert" : `${dailyGoalMinutes} Minuten pro Tag`
            }
          >
            <SegmentedControl
              options={GOAL_OPTIONS.map((o) => o.value)}
              value={dailyGoalMinutes}
              onChange={setDailyGoalMinutes}
              getLabel={(v) => GOAL_OPTIONS.find((o) => o.value === v)?.label ?? `${v}`}
            />
          </SettingRow>

          <SettingRow
            icon={ListOrdered}
            label="Fragen pro Session"
            description={`${questionsPerSession} Fragen werden pro Quiz geladen`}
          >
            <SegmentedControl
              options={QUESTIONS_OPTIONS}
              value={questionsPerSession}
              onChange={setQuestionsPerSession}
              getLabel={(v) => `${v}`}
            />
          </SettingRow>

          <SettingRow
            icon={Timer}
            label="Timer pro Frage"
            description={
              quizTimerSeconds === 0 ? "Kein Zeitlimit" : `${quizTimerSeconds} Sekunden pro Frage`
            }
          >
            <SegmentedControl
              options={TIMER_OPTIONS.map((o) => o.value)}
              value={quizTimerSeconds}
              onChange={setQuizTimerSeconds}
              getLabel={(v) => TIMER_OPTIONS.find((o) => o.value === v)?.label ?? `${v}`}
            />
          </SettingRow>
        </div>
      </section>

      {/* ── Rechtliches ───────────────────────────────────────── */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
          Rechtliches
        </h2>
        <div className="card-glass divide-y divide-[var(--border)]">
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
        <div className="card-glass divide-y divide-[var(--border)]">
          {/* Daten exportieren (DSGVO Art. 20) */}
          <button
            type="button"
            onClick={async () => {
              setExporting(true);
              const data = await exportUserData();
              setExporting(false);
              if (!data) return;
              const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = `medmaster-export-${new Date().toISOString().slice(0, 10)}.json`;
              a.click();
              URL.revokeObjectURL(url);
            }}
            disabled={exporting}
            className="flex items-center gap-3 px-4 py-3.5 w-full text-left hover:bg-[var(--foreground)]/5 transition-colors cursor-pointer disabled:opacity-50"
          >
            <Download className="w-4 h-4 text-[var(--muted)] shrink-0" />
            <div className="flex-1">
              <span className="text-sm font-medium text-[var(--foreground)]">
                {exporting ? "Wird exportiert..." : "Daten exportieren"}
              </span>
              <p className="text-xs text-[var(--muted)]">
                Alle Lerndaten als JSON herunterladen (DSGVO Art. 20)
              </p>
            </div>
          </button>

          {/* Fortschritt zurücksetzen */}
          {!showResetConfirm ? (
            <button
              type="button"
              onClick={() => setShowResetConfirm(true)}
              className="flex items-center gap-3 px-4 py-3.5 w-full text-left hover:bg-amber-500/5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-amber-500 shrink-0" />
              <div className="flex-1">
                <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
                  Fortschritt zurücksetzen
                </span>
                <p className="text-xs text-[var(--muted)]">
                  XP, Streak, Quizergebnisse und Kapitelfortschritt löschen
                </p>
              </div>
            </button>
          ) : (
            <div className="px-4 py-4 space-y-3">
              <div className="flex items-start gap-3">
                <RotateCcw className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-amber-600 dark:text-amber-400">
                    Wirklich zurücksetzen?
                  </p>
                  <p className="text-xs text-[var(--muted)] mt-1">
                    Dein gesamter Lernfortschritt wird auf Null gesetzt. Dein Konto bleibt bestehen.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 pl-7">
                <button
                  type="button"
                  onClick={() => {
                    resetProgress();
                    setShowResetConfirm(false);
                  }}
                  className="px-4 py-2 text-xs font-medium text-white bg-amber-500 hover:bg-amber-600 rounded-lg transition-colors cursor-pointer"
                >
                  Ja, zurücksetzen
                </button>
                <button
                  type="button"
                  onClick={() => setShowResetConfirm(false)}
                  className="px-4 py-2 text-xs font-medium text-[var(--muted)] hover:text-[var(--foreground)] bg-[var(--foreground)]/5 rounded-lg transition-colors cursor-pointer"
                >
                  Abbrechen
                </button>
              </div>
            </div>
          )}

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
              {deleteError && <p className="text-xs text-red-400 pl-7 mb-2">{deleteError}</p>}
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
      <p className="text-xs text-[var(--muted)] text-center opacity-50 pt-4">
        MedMaster v{__APP_VERSION__}
      </p>
    </div>
  );
}
