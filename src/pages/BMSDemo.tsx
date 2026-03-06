import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";
import {
  GraduationCap,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { allBmsQuestions } from "@/data/bms/index";
import type { Question } from "@/data/bms/index";
import { generateSequenceTaskSet } from "@/data/kffZahlenfolgenMedAT";
import type { SequenceTask } from "@/data/kffZahlenfolgenMedAT";
import { implikationenTasks } from "@/data/kffImplikationen";
import type { ImplikationTask } from "@/data/kffImplikationen";
import { generateWordFluencyTrainingSet } from "@/data/kffGenerators";
import type { WordFluencyTask } from "@/data/kffWortfluessigkeitMedAT";

const NAVY = "#1b3ea7";
const OPTION_LABELS = ["A", "B", "C", "D", "E"];

const SUBJECTS = [
  { key: "biologie", label: "Biologie" },
  { key: "chemie", label: "Chemie" },
  { key: "physik", label: "Physik" },
  { key: "mathematik", label: "Mathematik" },
] as const;

const TAB_STYLES: Record<string, { active: string; badge: string }> = {
  biologie: {
    active: "border-emerald-500 text-emerald-700 dark:text-emerald-400",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
  },
  chemie: {
    active: "border-red-500 text-red-700 dark:text-red-400",
    badge: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
  },
  physik: {
    active: "border-blue-500 text-blue-700 dark:text-blue-400",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400",
  },
  mathematik: {
    active: "border-violet-500 text-violet-700 dark:text-violet-400",
    badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-400",
  },
};

/** Deterministic daily seed -> pick N from array. */
function seededPick<T>(arr: T[], count: number, seed: number): T[] {
  const shuffled = [...arr];
  let s = seed;
  for (let i = shuffled.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0x7fffffff;
    const j = s % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

// ── BMS Question Card ─────────────────────────────────────────
function BMSQuestionCard({ q, index }: { q: Question; index: number }) {
  const [revealed, setRevealed] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (optionId: string) => {
    if (revealed) return;
    setSelected(optionId);
    setRevealed(true);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-3 mb-4">
          <span
            className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold text-white"
            style={{ backgroundColor: NAVY }}
          >
            {index + 1}
          </span>
          <p className="text-gray-900 dark:text-gray-100 font-medium leading-relaxed">{q.text}</p>
        </div>
        <OptionsList
          options={q.options.map((o) => ({ id: o.id, text: o.text }))}
          correctId={q.correctOptionId}
          selected={selected}
          revealed={revealed}
          onSelect={handleSelect}
        />
        <ExplanationBlock
          explanation={q.explanation}
          revealed={revealed}
          onToggle={() => {
            setRevealed(!revealed);
            if (revealed) setSelected(null);
          }}
        />
      </div>
    </div>
  );
}

// ── ZF Card ───────────────────────────────────────────────────
function ZFCard({ task, index }: { task: SequenceTask; index: number }) {
  const [revealed, setRevealed] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (key: string) => {
    if (revealed) return;
    setSelected(key);
    setRevealed(true);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-3 mb-4">
          <span className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold text-white bg-amber-500">
            {index + 1}
          </span>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
              Erg{"\u00e4"}nze die Zahlenfolge:
            </p>
            <div className="flex flex-wrap gap-2">
              {task.sequence.map((v, i) => (
                <span
                  key={i}
                  className={`inline-flex items-center justify-center min-w-[40px] h-10 px-2 rounded-lg font-mono text-base font-semibold ${
                    v === "?"
                      ? "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-2 border-amber-300 dark:border-amber-700"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  }`}
                >
                  {v === "?" ? "?" : v}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-2">
          {task.options.map((opt) => {
            const isCorrect = opt.key === task.correctOptionId;
            const isSelected = opt.key === selected;
            const displayText = opt.value ? `${opt.value[0]}, ${opt.value[1]}` : (opt.text ?? "");
            let style =
              "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 cursor-pointer";
            if (revealed) {
              if (isCorrect)
                style =
                  "border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-600";
              else if (isSelected)
                style = "border-red-400 bg-red-50 dark:bg-red-900/20 dark:border-red-600";
              else style = "border-gray-100 dark:border-gray-800 opacity-60";
            }
            return (
              <button
                key={opt.key}
                onClick={() => handleSelect(opt.key)}
                disabled={revealed}
                className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${style}`}
              >
                <span className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                  {opt.key}
                </span>
                <span className="text-sm text-gray-800 dark:text-gray-200 font-mono">
                  {displayText}
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
        <ExplanationBlock
          explanation={task.explanation}
          revealed={revealed}
          onToggle={() => {
            setRevealed(!revealed);
            if (revealed) setSelected(null);
          }}
        />
      </div>
    </div>
  );
}

// ── WF Card ───────────────────────────────────────────────────
function WFCard({ task, index }: { task: WordFluencyTask; index: number }) {
  const [revealed, setRevealed] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (idx: number) => {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-3 mb-4">
          <span className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold text-white bg-teal-500">
            {index + 1}
          </span>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
              Welcher Anfangsbuchstabe?
            </p>
            <div className="flex flex-wrap gap-1.5">
              {task.letters.map((l, i) => (
                <span
                  key={i}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 font-mono text-lg font-bold text-teal-700 dark:text-teal-400"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-2">
          {task.options.map((opt, i) => {
            const isCorrect = i === task.correctIndex;
            const isSelected = i === selected;
            let style =
              "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 cursor-pointer";
            if (revealed) {
              if (isCorrect)
                style =
                  "border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-600";
              else if (isSelected)
                style = "border-red-400 bg-red-50 dark:bg-red-900/20 dark:border-red-600";
              else style = "border-gray-100 dark:border-gray-800 opacity-60";
            }
            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={revealed}
                className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${style}`}
              >
                <span className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                  {OPTION_LABELS[i]}
                </span>
                <span className="text-sm text-gray-800 dark:text-gray-200 font-mono">
                  {opt === "-" ? "Keine der Antworten ist richtig" : opt}
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
        {revealed && (
          <div className="mt-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className="font-semibold">L{"\u00f6"}sung: </span>
              {task.solutionWord} — {task.explanation}
            </p>
          </div>
        )}
        {!revealed && (
          <button
            onClick={() => setRevealed(true)}
            className="mt-3 flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
          >
            <ChevronDown className="w-4 h-4" /> Antwort anzeigen
          </button>
        )}
        {revealed && (
          <button
            onClick={() => {
              setRevealed(false);
              setSelected(null);
            }}
            className="mt-3 flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
          >
            <ChevronUp className="w-4 h-4" /> Einklappen
          </button>
        )}
      </div>
    </div>
  );
}

// ── IMP Card ──────────────────────────────────────────────────
function IMPCard({ task, index }: { task: ImplikationTask; index: number }) {
  const [revealed, setRevealed] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (idx: number) => {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-3 mb-4">
          <span className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold text-white bg-indigo-500">
            {index + 1}
          </span>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
              Welche Schlussfolgerung ist zwingend?
            </p>
            <div className="space-y-2 p-3 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800">
              <p className="text-sm text-gray-800 dark:text-gray-200 italic">
                {"\u201E"}
                {task.premise1}
                {"\u201C"}
              </p>
              <p className="text-sm text-gray-800 dark:text-gray-200 italic">
                {"\u201E"}
                {task.premise2}
                {"\u201C"}
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          {task.options.map((opt, i) => {
            const isCorrect = i === task.correctAnswer;
            const isSelected = i === selected;
            let style =
              "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 cursor-pointer";
            if (revealed) {
              if (isCorrect)
                style =
                  "border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-600";
              else if (isSelected)
                style = "border-red-400 bg-red-50 dark:bg-red-900/20 dark:border-red-600";
              else style = "border-gray-100 dark:border-gray-800 opacity-60";
            }
            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={revealed}
                className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${style}`}
              >
                <span className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                  {OPTION_LABELS[i]}
                </span>
                <span className="text-sm text-gray-800 dark:text-gray-200">{opt}</span>
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
        <ExplanationBlock
          explanation={task.explanation}
          revealed={revealed}
          onToggle={() => {
            setRevealed(!revealed);
            if (revealed) setSelected(null);
          }}
        />
      </div>
    </div>
  );
}

// ── Shared components ─────────────────────────────────────────
function OptionsList({
  options,
  correctId,
  selected,
  revealed,
  onSelect,
}: {
  options: { id: string; text: string }[];
  correctId: string;
  selected: string | null;
  revealed: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="space-y-2">
      {options.map((opt) => {
        const isCorrect = opt.id === correctId;
        const isSelected = opt.id === selected;
        let style =
          "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 cursor-pointer";
        if (revealed) {
          if (isCorrect)
            style =
              "border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-600";
          else if (isSelected && !isCorrect)
            style = "border-red-400 bg-red-50 dark:bg-red-900/20 dark:border-red-600";
          else style = "border-gray-100 dark:border-gray-800 opacity-60";
        }
        return (
          <button
            key={opt.id}
            onClick={() => onSelect(opt.id)}
            disabled={revealed}
            className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${style}`}
          >
            <span className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
              {opt.id.toUpperCase()}
            </span>
            <span className="text-sm text-gray-800 dark:text-gray-200">{opt.text}</span>
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
  );
}

function ExplanationBlock({
  explanation,
  revealed,
  onToggle,
}: {
  explanation: string;
  revealed: boolean;
  onToggle: () => void;
}) {
  return (
    <>
      {revealed && (
        <div className="mt-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700">
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <span className="font-semibold">Erkl{"\u00e4"}rung: </span>
            {explanation}
          </p>
        </div>
      )}
      <button
        onClick={onToggle}
        className="mt-3 flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
      >
        {revealed ? (
          <>
            <ChevronUp className="w-4 h-4" /> Einklappen
          </>
        ) : (
          <>
            <ChevronDown className="w-4 h-4" /> Antwort anzeigen
          </>
        )}
      </button>
    </>
  );
}

// ── Section header ────────────────────────────────────────────
function SectionHeader({
  title,
  subtitle,
  color,
}: {
  title: string;
  subtitle: string;
  color: string;
}) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-1.5 h-8 rounded-full ${color}`} />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">{title}</h2>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 ml-5">{subtitle}</p>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────
export default function BMSDemo() {
  usePageTitle("MedAT \u00dcbungsfragen kostenlos");
  const [activeTab, setActiveTab] = useState<string>("biologie");

  const dailySeed = useMemo(() => {
    const d = new Date();
    return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
  }, []);

  const questionsBySubject = useMemo(() => {
    const map: Record<string, Question[]> = {};
    for (const s of SUBJECTS) {
      const pool = allBmsQuestions.filter((q) => q.subject === s.key);
      map[s.key] = seededPick(pool, 5, dailySeed + s.key.length);
    }
    return map;
  }, [dailySeed]);

  const zfTasks = useMemo(() => generateSequenceTaskSet(3, dailySeed), [dailySeed]);
  const wfTasks = useMemo(() => generateWordFluencyTrainingSet(3, 1), []);
  const impTasks = useMemo(() => seededPick(implikationenTasks, 3, dailySeed + 7), [dailySeed]);

  const totalCount = allBmsQuestions.length.toLocaleString("de-AT");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800/50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center text-white"
              style={{ backgroundColor: NAVY }}
            >
              <GraduationCap className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold text-gray-900 dark:text-gray-100">MedMaster</span>
          </Link>
          <Link
            to="/register"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white px-4 py-2 rounded-xl"
            style={{ backgroundColor: NAVY }}
          >
            Gratis testen <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
            MedAT-{"\u00dc"}bungsfragen — kostenlos testen
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-2">
            BMS-Fragen + KFF-Aufgaben: teste dein Wissen ohne Anmeldung.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Jeden Tag neue Aufgaben. {totalCount}+ Fragen auf MedMaster verf{"\u00fc"}gbar.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-16">
        {/* ── BMS Section ──────────────────────────────── */}
        <section>
          <SectionHeader
            title="BMS \u2014 Basiskenntnistest"
            subtitle="20 Fragen aus Biologie, Chemie, Physik und Mathematik"
            color="bg-blue-500"
          />

          {/* Subject Tabs */}
          <div className="border-b border-gray-200 dark:border-gray-800 mb-6">
            <div className="flex gap-1 overflow-x-auto">
              {SUBJECTS.map((s) => {
                const isActive = activeTab === s.key;
                const tabStyle = TAB_STYLES[s.key];
                return (
                  <button
                    key={s.key}
                    onClick={() => setActiveTab(s.key)}
                    className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                      isActive
                        ? tabStyle.active
                        : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                    }`}
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mb-4 flex items-center gap-2">
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${TAB_STYLES[activeTab].badge}`}
            >
              {SUBJECTS.find((s) => s.key === activeTab)?.label}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              5 von {allBmsQuestions.filter((q) => q.subject === activeTab).length} Fragen
            </span>
          </div>

          <div className="space-y-4">
            {questionsBySubject[activeTab]?.map((q, i) => (
              <BMSQuestionCard key={q.id} q={q} index={i} />
            ))}
          </div>
        </section>

        {/* ── KFF: Zahlenfolgen ────────────────────────── */}
        <section>
          <SectionHeader
            title="Zahlenfolgen"
            subtitle="Erkenne das Muster und erg\u00e4nze die fehlenden Zahlen"
            color="bg-amber-500"
          />
          <div className="space-y-4">
            {zfTasks.map((t, i) => (
              <ZFCard key={t.id} task={t} index={i} />
            ))}
          </div>
        </section>

        {/* ── KFF: Wortfl\u00fcssigkeit ──────────────────── */}
        <section>
          <SectionHeader
            title="Wortfl\u00fcssigkeit"
            subtitle="Finde das Wort und bestimme den Anfangsbuchstaben"
            color="bg-teal-500"
          />
          <div className="space-y-4">
            {wfTasks.map((t, i) => (
              <WFCard key={t.id ?? `wf-${i}`} task={t} index={i} />
            ))}
          </div>
        </section>

        {/* ── KFF: Implikationen ───────────────────────── */}
        <section>
          <SectionHeader
            title="Implikationen erkennen"
            subtitle="Leite die logisch zwingende Schlussfolgerung ab"
            color="bg-indigo-500"
          />
          <div className="space-y-4">
            {impTasks.map((t, i) => (
              <IMPCard key={t.id} task={t} index={i} />
            ))}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────── */}
        <div className="text-center bg-white dark:bg-gray-900 rounded-2xl p-8 sm:p-10 border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            Alle {totalCount}+ Fragen kostenlos testen
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
            Registriere dich jetzt und erhalte 14 Tage vollen Zugang zu BMS, KFF, Textverst
            {"\u00e4"}ndnis und SEK.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-2xl text-base shadow-sm"
            style={{ backgroundColor: NAVY }}
          >
            14 Tage gratis starten <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-semibold text-gray-500">MedMaster</span>
          </div>
          <div className="flex gap-4 text-xs text-gray-400">
            <Link to="/impressum" className="hover:text-gray-600 transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-gray-600 transition-colors">
              Datenschutz
            </Link>
            <Link to="/agb" className="hover:text-gray-600 transition-colors">
              AGB
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
