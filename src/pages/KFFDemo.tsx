import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import { GraduationCap, ArrowRight, ChevronDown, CheckCircle2, XCircle } from "lucide-react";
import { generateSequenceTaskSet } from "@/data/kffZahlenfolgenMedAT";
import type { SequenceTask } from "@/data/kffZahlenfolgenMedAT";
import { implikationenTasks } from "@/data/kffImplikationen";
import type { ImplikationTask } from "@/data/kffImplikationen";
import { generateWordFluencyTrainingSet } from "@/data/kffGenerators";
import type { WordFluencyTask } from "@/data/kffWortfluessigkeitMedAT";

const NAVY = "#1b3ea7";
const OPTION_LABELS = ["A", "B", "C", "D", "E"];

function seededPick<T>(arr: T[], n: number, seed: number): T[] {
  const copy = [...arr];
  let s = seed;
  for (let i = copy.length - 1; i > 0; i--) {
    s = ((s * 9301 + 49297) % 233280) >>> 0;
    const j = s % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}

// ── Subtests info ──
const SUBTESTS = [
  {
    key: "zahlenfolgen",
    title: "Zahlenfolgen",
    emoji: "🔢",
    desc: "Erkenne das Muster in der Zahlenreihe und finde die fehlende Zahl.",
    color: "bg-indigo-500",
  },
  {
    key: "implikationen",
    title: "Implikationen erkennen",
    emoji: "🧠",
    desc: "Aus gegebenen Prämissen die logisch zwingende Schlussfolgerung ableiten.",
    color: "bg-purple-500",
  },
  {
    key: "wortfluessigkeit",
    title: "Wortflüssigkeit",
    emoji: "📝",
    desc: "Finde den Anfangsbuchstaben, mit dem sich aus den gegebenen Buchstaben ein deutsches Wort bilden lässt.",
    color: "bg-teal-500",
  },
  {
    key: "figuren",
    title: "Figuren zusammensetzen",
    emoji: "🧩",
    desc: "Setze die Teilstücke zur richtigen Gesamtfigur zusammen.",
    color: "bg-orange-500",
  },
  {
    key: "gedaechtnis",
    title: "Gedächtnis & Merkfähigkeit",
    emoji: "🧠",
    desc: "Merke dir Details aus Allergieausweisen und beantworte Fragen dazu.",
    color: "bg-rose-500",
  },
];

const FAQ = [
  {
    q: "Was ist KFF im MedAT?",
    a: "KFF steht für Kognitive Fähigkeiten und Fertigkeiten. Dieser Testteil macht 40% der MedAT-Gesamtwertung aus und umfasst 5 Untertests: Zahlenfolgen, Implikationen erkennen, Wortflüssigkeit, Figuren zusammensetzen und Gedächtnis & Merkfähigkeit.",
  },
  {
    q: "Kann man KFF trainieren?",
    a: "Ja! KFF-Aufgaben sind trainierbar. Je mehr du übst, desto schneller erkennst du Muster bei Zahlenfolgen, wirst sicherer bei logischen Schlüssen und verbesserst dein räumliches Denken. MedMaster bietet 10.000+ verschiedene Aufgaben.",
  },
  {
    q: "Wie viel Zeit hat man für KFF im MedAT?",
    a: "Die Zeitlimits variieren je nach Untertest: Zahlenfolgen ca. 25 Min (15 Aufgaben), Implikationen ca. 10 Min (10 Aufgaben), Wortflüssigkeit ca. 20 Min (15 Aufgaben), Figuren ca. 15 Min (15 Aufgaben), Gedächtnis ca. 25 Min (Lern- + Prüfphase).",
  },
  {
    q: "Wie funktionieren die KFF-Aufgaben auf MedMaster?",
    a: "Jede Aufgabe wird auf Eindeutigkeit und Lösbarkeit geprüft. Das heißt: 10.000+ verschiedene Aufgaben, keine Wiederholungen, immer exakt eine richtige Lösung.",
  },
];

// ── Generic quiz card ──
function QuizCard({
  children,
  index,
  color,
}: {
  children: React.ReactNode;
  index: number;
  color: string;
}) {
  return (
    <div className="bg-[var(--surface)] rounded-2xl border border-[var(--border)] overflow-hidden p-5 sm:p-6">
      <div className="flex items-center gap-3 mb-4">
        <span
          className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold text-white ${color}`}
        >
          {index + 1}
        </span>
      </div>
      {children}
    </div>
  );
}

// ── ZF Card ──
function ZFCard({ task, index }: { task: SequenceTask; index: number }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const handleSelect = (i: number) => {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
  };
  return (
    <QuizCard index={index} color="bg-indigo-500">
      <div className="flex flex-wrap gap-2 mb-4">
        {task.sequence.map((n, i) => (
          <span
            key={i}
            className={`inline-flex items-center justify-center w-12 h-12 rounded-lg border font-mono text-lg font-bold ${
              n === null
                ? "border-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                : "border-[var(--border)] bg-[var(--background)] text-[var(--text-primary)]"
            }`}
          >
            {n === null ? "?" : n}
          </span>
        ))}
      </div>
      <div className="space-y-2">
        {task.options.map((opt, i) => {
          const isCorrect = opt.key === task.correctOptionId;
          const isSelected = i === selected;
          let style = "border-[var(--border)] hover:border-[var(--border)] cursor-pointer";
          if (revealed) {
            if (isCorrect)
              style =
                "border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-600";
            else if (isSelected)
              style = "border-red-400 bg-red-50 dark:bg-red-900/20 dark:border-red-600";
            else style = "border-[var(--border)]/50 opacity-60";
          }
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={revealed}
              className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${style}`}
            >
              <span className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold bg-[var(--background)] text-[var(--text-secondary)]">
                {OPTION_LABELS[i]}
              </span>
              <span className="text-sm font-mono text-[var(--text-primary)]">
                {opt.text ?? (opt.value ? opt.value.join(", ") : "")}
              </span>
              {revealed && isCorrect && (
                <CheckCircle2 className="w-5 h-5 text-emerald-500 ml-auto shrink-0" />
              )}
              {revealed && isSelected && !isCorrect && (
                <XCircle className="w-5 h-5 text-red-500 ml-auto shrink-0" />
              )}
            </button>
          );
        })}
      </div>
      {revealed && task.rule && (
        <div className="mt-4 p-4 rounded-xl bg-[var(--background)]/50 border border-[var(--border)]/50">
          <p className="text-sm text-[var(--text-secondary)]">
            <span className="font-semibold">Regel: </span>
            {task.rule}
          </p>
        </div>
      )}
    </QuizCard>
  );
}

// ── IMP Card ──
function IMPCard({ task, index }: { task: ImplikationTask; index: number }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const correctIdx = task.correctAnswer;
  const handleSelect = (i: number) => {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
  };
  return (
    <QuizCard index={index} color="bg-purple-500">
      <div className="mb-4 space-y-1">
        {[task.premise1, task.premise2].map((p, i) => (
          <p key={i} className="text-sm text-[var(--text-primary)]">
            {p}
          </p>
        ))}
      </div>
      <div className="space-y-2">
        {task.options.map((opt, i) => {
          const isCorrect = i === correctIdx;
          const isSelected = i === selected;
          let style = "border-[var(--border)] hover:border-[var(--border)] cursor-pointer";
          if (revealed) {
            if (isCorrect)
              style =
                "border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-600";
            else if (isSelected)
              style = "border-red-400 bg-red-50 dark:bg-red-900/20 dark:border-red-600";
            else style = "border-[var(--border)]/50 opacity-60";
          }
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={revealed}
              className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${style}`}
            >
              <span className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold bg-[var(--background)] text-[var(--text-secondary)]">
                {OPTION_LABELS[i]}
              </span>
              <span className="text-sm text-[var(--text-primary)]">{opt}</span>
              {revealed && isCorrect && (
                <CheckCircle2 className="w-5 h-5 text-emerald-500 ml-auto shrink-0" />
              )}
              {revealed && isSelected && !isCorrect && (
                <XCircle className="w-5 h-5 text-red-500 ml-auto shrink-0" />
              )}
            </button>
          );
        })}
      </div>
      {revealed && task.explanation && (
        <div className="mt-4 p-4 rounded-xl bg-[var(--background)]/50 border border-[var(--border)]/50">
          <p className="text-sm text-[var(--text-secondary)]">
            <span className="font-semibold">Erklärung: </span>
            {task.explanation}
          </p>
        </div>
      )}
    </QuizCard>
  );
}

// ── WF Card ──
function WFCard({ task, index }: { task: WordFluencyTask; index: number }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const handleSelect = (i: number) => {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
  };
  return (
    <QuizCard index={index} color="bg-teal-500">
      <div className="flex flex-wrap gap-1.5 mb-4">
        {task.letters.map((l, i) => (
          <span
            key={i}
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 font-mono text-lg font-bold text-teal-700 dark:text-teal-400"
          >
            {l}
          </span>
        ))}
      </div>
      <p className="text-xs text-[var(--muted)] mb-3">
        Welcher Anfangsbuchstabe bildet mit den Buchstaben oben ein deutsches Wort?
      </p>
      <div className="space-y-2">
        {task.options.map((opt, i) => {
          const isCorrect = i === task.correctIndex;
          const isSelected = i === selected;
          let style = "border-[var(--border)] hover:border-[var(--border)] cursor-pointer";
          if (revealed) {
            if (isCorrect)
              style =
                "border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-600";
            else if (isSelected)
              style = "border-red-400 bg-red-50 dark:bg-red-900/20 dark:border-red-600";
            else style = "border-[var(--border)]/50 opacity-60";
          }
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={revealed}
              className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${style}`}
            >
              <span className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold bg-[var(--background)] text-[var(--text-secondary)]">
                {OPTION_LABELS[i]}
              </span>
              <span className="text-sm font-mono text-[var(--text-primary)]">
                {opt === "-" ? "Keine der Antwortmöglichkeiten ist richtig." : opt}
              </span>
              {revealed && isCorrect && (
                <CheckCircle2 className="w-5 h-5 text-emerald-500 ml-auto shrink-0" />
              )}
              {revealed && isSelected && !isCorrect && (
                <XCircle className="w-5 h-5 text-red-500 ml-auto shrink-0" />
              )}
            </button>
          );
        })}
      </div>
      {revealed && task.solutionWord && (
        <div className="mt-4 p-4 rounded-xl bg-[var(--background)]/50 border border-[var(--border)]/50">
          <p className="text-sm text-[var(--text-secondary)]">
            <span className="font-semibold">Lösung: </span>
            {task.solutionWord}
            {task.explanation ? ` — ${task.explanation}` : ""}
          </p>
        </div>
      )}
    </QuizCard>
  );
}

// ── FAQ section ──
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[var(--border)] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
      >
        <h3 className="text-base font-semibold text-[var(--text-primary)] leading-relaxed">{q}</h3>
        <ChevronDown
          className={`w-5 h-5 text-[var(--muted)] shrink-0 mt-0.5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="text-sm text-[var(--muted)] leading-relaxed pb-5 -mt-1">{a}</p>}
    </div>
  );
}

// ── Main Page ──
export default function KFFDemo() {
  usePageMeta({
    title: "MedAT KFF Training kostenlos",
    description:
      "KFF-Aufgaben kostenlos üben: Zahlenfolgen, Implikationen, Wortflüssigkeit, Figuren, Gedächtnis. 10.000+ algorithmische Aufgaben — ohne Anmeldung.",
    canonical: "https://medmaster.at/medat-kff-ueben",
    ogImage: "https://medmaster.at/og-image.png",
  });

  const dailySeed = useMemo(() => {
    const d = new Date();
    return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
  }, []);

  const zfTasks = useMemo(() => generateSequenceTaskSet(3, dailySeed), [dailySeed]);
  const wfTasks = useMemo(() => generateWordFluencyTrainingSet(3, 1), []);
  const impTasks = useMemo(() => seededPick(implikationenTasks, 3, dailySeed + 7), [dailySeed]);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-[var(--surface)]/90 backdrop-blur-xl border-b border-[var(--border)]/50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center text-white"
              style={{ backgroundColor: NAVY }}
            >
              <GraduationCap className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold text-[var(--text-primary)]">MedMaster</span>
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white px-4 py-2 rounded-xl"
            style={{ backgroundColor: NAVY }}
          >
            Gratis testen <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-[var(--surface)] border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-4">
            MedAT KFF Training — kostenlos üben
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-2">
            Zahlenfolgen, Implikationen und Wortflüssigkeit: teste dein KFF-Level ohne Anmeldung.
          </p>
          <p className="text-sm text-[var(--muted)]">
            Jeden Tag neue Aufgaben. 10.000+ auf MedMaster verfügbar.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-16">
        {/* ── 5 Subtests Overview ── */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
            Die 5 KFF-Untertests im MedAT
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SUBTESTS.map((st) => (
              <div
                key={st.key}
                className="bg-[var(--surface)] rounded-xl border border-[var(--border)] p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{st.emoji}</span>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">{st.title}</h3>
                </div>
                <p className="text-xs text-[var(--muted)] leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Zahlenfolgen ── */}
        <section>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-1">🔢 Zahlenfolgen</h2>
          <p className="text-sm text-[var(--muted)] mb-6">Finde die fehlende Zahl in der Reihe.</p>
          <div className="space-y-4">
            {zfTasks.map((task, i) => (
              <ZFCard key={i} task={task} index={i} />
            ))}
          </div>
        </section>

        {/* ── Implikationen ── */}
        <section>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-1">
            🧠 Implikationen erkennen
          </h2>
          <p className="text-sm text-[var(--muted)] mb-6">
            Welche Schlussfolgerung ist logisch zwingend?
          </p>
          <div className="space-y-4">
            {impTasks.map((task, i) => (
              <IMPCard key={i} task={task} index={i} />
            ))}
          </div>
        </section>

        {/* ── Wortflüssigkeit ── */}
        <section>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-1">📝 Wortflüssigkeit</h2>
          <p className="text-sm text-[var(--muted)] mb-6">
            Finde den Anfangsbuchstaben für ein deutsches Wort.
          </p>
          <div className="space-y-4">
            {wfTasks.map((task, i) => (
              <WFCard key={i} task={task as WordFluencyTask} index={i} />
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="text-center py-8">
          <div className="bg-[var(--surface)] rounded-2xl border border-[var(--border)] p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
              10.000+ KFF-Aufgaben — kostenlos
            </h2>
            <p className="text-sm text-[var(--muted)] max-w-md mx-auto mb-6">
              10.000+ Aufgaben für alle 5 KFF-Untertests. Kein Auswendiglernen, keine
              Wiederholungen.
            </p>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl text-base"
              style={{ backgroundColor: NAVY }}
            >
              Jetzt kostenlos starten <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-xs text-[var(--muted)] mt-3">
              Kein Abo — einmalig €29,90 nach der Gratis-Phase
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
            Häufige Fragen zum KFF-Training
          </h2>
          <div className="bg-[var(--surface)] rounded-2xl border border-[var(--border)] divide-y divide-[var(--border)] px-6">
            {FAQ.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </section>

        {/* ── SEO Links ── */}
        <section className="pb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { to: "/medat-uebungsfragen", label: "BMS Übungsfragen", sub: "5.000+ Fragen" },
              { to: "/medat-guide", label: "MedAT 2026 Guide", sub: "Alles zum Test" },
              { to: "/faq", label: "FAQ", sub: "Häufige Fragen" },
              { to: "/challenge", label: "Quiz Challenge", sub: "Teile dein Ergebnis" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex flex-col gap-1 p-4 rounded-xl bg-[var(--surface)] shadow-[var(--shadow-xs)] hover:shadow-[var(--shadow-sm)] transition-shadow"
              >
                <span className="text-sm font-medium text-[var(--text-primary)]">{link.label}</span>
                <span className="text-xs text-[var(--muted)]">{link.sub}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-[var(--accent)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-white/70" />
            <span className="text-sm font-semibold text-white/80">MedMaster</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-white/60">
            <Link to="/medat-guide" className="hover:text-white/80">
              MedAT Guide
            </Link>
            <Link to="/faq" className="hover:text-white/80">
              FAQ
            </Link>
            <Link to="/impressum" className="hover:text-white/80">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-white/80">
              Datenschutz
            </Link>
          </div>
          <p className="text-xs text-white/50">© 2026 MedMaster</p>
        </div>
      </footer>
    </div>
  );
}
