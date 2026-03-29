import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  RefreshCw,
  ListChecks,
  Brain,
  FileText,
  Heart,
  Clock,
  Check,
  ChevronDown,
  ChevronUp,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

import { useStore } from "@/store/useStore";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useDailyPlan, type PlanTier } from "@/hooks/useDailyPlan";

// ============================================================
// Tier card config
// ============================================================

const TIER_ORDER: PlanTier[] = ["minimal", "empfohlen", "intensiv"];

const TIER_ICONS: Record<PlanTier, string> = {
  minimal: "30",
  empfohlen: "60",
  intensiv: "90",
};

// ============================================================
// Section colors
// ============================================================

const SECTION_COLORS = {
  bmsRead: "border-emerald-500",
  bmsReview: "border-amber-500",
  bmsQuestions: "border-emerald-600",
  kff: "border-purple-500",
  tv: "border-blue-500",
  sek: "border-pink-500",
} as const;

// ============================================================
// Component
// ============================================================

export default function Lernplan() {
  usePageTitle("Lernplan");

  const lernplanConfig = useStore((s) => s.lernplanConfig);
  const setLernplanConfig = useStore((s) => s.setLernplanConfig);
  const setResumeToUnterkapitelId = useAdaptiveStore((s) => s.setResumeToUnterkapitelId);

  const { plan, tier, setTier, allTiers, completedItems, toggleCompleted, completionProgress } =
    useDailyPlan();

  const [configOpen, setConfigOpen] = useState(false);
  const [daysPerWeek, setDaysPerWeek] = useState(lernplanConfig?.daysPerWeek ?? 5);
  const [hoursPerDay, setHoursPerDay] = useState(
    lernplanConfig?.hoursPerDay ??
      (lernplanConfig ? lernplanConfig.hoursPerWeek / (lernplanConfig.daysPerWeek || 5) : 2)
  );

  const derivedHoursPerWeek = Math.round(daysPerWeek * hoursPerDay * 4) / 4;

  const handleSaveConfig = () => {
    setLernplanConfig({
      medatDate: lernplanConfig?.medatDate ?? new Date().toISOString().split("T")[0],
      hoursPerWeek: derivedHoursPerWeek,
      daysPerWeek,
      hoursPerDay,
      generatedAt: new Date().toISOString(),
    });
  };

  // Count total plan items for empty state check
  const hasPlanItems =
    plan.bmsRead.length > 0 ||
    plan.bmsReview.length > 0 ||
    plan.bmsQuestions.length > 0 ||
    plan.kffTasks.length > 0 ||
    plan.tvTexts > 0 ||
    plan.sekTasks.length > 0;

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Hero */}
      <div className="hero-orbs text-center">
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Lernplan</h1>
        <p className="text-[var(--muted)] mt-1">Dein persönlicher Weg zum MedAT</p>
      </div>

      {/* Tier Selector */}
      <div className="grid grid-cols-3 gap-4">
        {TIER_ORDER.map((t) => {
          const info = allTiers[t];
          const isSelected = tier === t;
          return (
            <button
              key={t}
              onClick={() => setTier(t)}
              className={`relative rounded-xl border-2 p-5 text-left transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "border-[var(--accent)] bg-[var(--accent)]/5 dark:bg-[var(--accent)]/10 shadow-sm"
                  : "border-[var(--border)] hover:border-[var(--accent)]/40 bg-[var(--card-bg)]"
              }`}
            >
              {t === "empfohlen" && (
                <span className="absolute -top-2.5 left-4 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-[var(--accent)] text-white rounded-full">
                  Empfohlen
                </span>
              )}
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`text-2xl font-bold ${
                    isSelected ? "text-[var(--accent)]" : "text-[var(--text-secondary)]"
                  }`}
                >
                  ~{TIER_ICONS[t]}
                </span>
                <span className="text-xs text-[var(--muted)] uppercase tracking-wide">Min</span>
              </div>
              <p
                className={`text-sm font-semibold ${
                  isSelected ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
                }`}
              >
                {info.label}
              </p>
              <p className="text-xs text-[var(--muted)] mt-0.5">{info.desc}</p>
              {isSelected && (
                <div className="absolute top-3 right-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--accent)] flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Completion Progress Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-[var(--text-secondary)]">
            {completionProgress.done} von {completionProgress.total} Aufgaben erledigt
          </span>
          <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
            {completionProgress.percentage}%
          </span>
        </div>
        <Progress value={completionProgress.percentage} barClassName="bg-emerald-500" />
      </div>

      {/* Daily Plan Sections */}
      {hasPlanItems ? (
        <div className="space-y-6">
          {/* Estimated Time */}
          <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
            <Clock className="w-4 h-4" />
            Geschätzte Dauer: ~{plan.totalMinutesEstimate} Minuten
          </div>

          {/* BMS: Lernen */}
          {plan.bmsRead.length > 0 && (
            <PlanSection
              title="Lernen"
              icon={<BookOpen className="w-4 h-4" />}
              borderColor={SECTION_COLORS.bmsRead}
            >
              <ul className="space-y-2">
                {plan.bmsRead.map((item) => {
                  const itemId = `bms-read-${item.subchapterId ?? item.chapterId}`;
                  const isDone = completedItems.has(itemId);
                  return (
                    <li key={itemId} className="flex items-center gap-3">
                      <PlanCheckbox checked={isDone} onChange={() => toggleCompleted(itemId)} />
                      <Link
                        to={item.path}
                        onClick={() =>
                          item.subchapterId && setResumeToUnterkapitelId(item.subchapterId)
                        }
                        className={`flex items-center gap-2 flex-1 min-w-0 group ${
                          isDone ? "line-through text-[var(--muted)]" : "text-[var(--text-primary)]"
                        }`}
                      >
                        <span className="text-sm font-medium truncate">{item.title}</span>
                        <SubjectBadge subject={item.subject} />
                        {!isDone && (
                          <ArrowRight className="w-3.5 h-3.5 text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity ml-auto shrink-0" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </PlanSection>
          )}

          {/* BMS: Wiederholen */}
          {plan.bmsReview.length > 0 && (
            <PlanSection
              title="Wiederholen"
              icon={<RefreshCw className="w-4 h-4" />}
              borderColor={SECTION_COLORS.bmsReview}
            >
              <ul className="space-y-2">
                {plan.bmsReview.map((item) => {
                  const itemId = `bms-review-${item.subchapterId ?? item.chapterId}`;
                  const isDone = completedItems.has(itemId);
                  return (
                    <li key={itemId} className="flex items-center gap-3">
                      <PlanCheckbox checked={isDone} onChange={() => toggleCompleted(itemId)} />
                      <Link
                        to={item.path}
                        className={`flex items-center gap-2 flex-1 min-w-0 group ${
                          isDone ? "line-through text-[var(--muted)]" : "text-[var(--text-primary)]"
                        }`}
                      >
                        <span className="text-sm font-medium truncate">{item.title}</span>
                        <SubjectBadge subject={item.subject} />
                        {!isDone && (
                          <ArrowRight className="w-3.5 h-3.5 text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity ml-auto shrink-0" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </PlanSection>
          )}

          {/* BMS-Fragen */}
          {plan.bmsQuestions.length > 0 && (
            <PlanSection
              title="BMS-Fragen"
              icon={<ListChecks className="w-4 h-4" />}
              borderColor={SECTION_COLORS.bmsQuestions}
            >
              <ul className="space-y-2">
                {plan.bmsQuestions.map((q) => {
                  const itemId = `bms-questions-${q.fach}`;
                  const isDone = completedItems.has(itemId);
                  return (
                    <li key={itemId} className="flex items-center gap-3">
                      <PlanCheckbox checked={isDone} onChange={() => toggleCompleted(itemId)} />
                      <Link
                        to="/fragen-trainer"
                        state={{ dailyPlanBms: [{ fach: q.fach, count: q.count }] }}
                        className={`flex items-center gap-2 flex-1 min-w-0 group ${
                          isDone ? "line-through text-[var(--muted)]" : "text-[var(--text-primary)]"
                        }`}
                      >
                        <span className="text-sm font-medium">
                          {q.count} Fragen {q.label}
                        </span>
                        {!isDone && (
                          <ArrowRight className="w-3.5 h-3.5 text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity ml-auto shrink-0" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </PlanSection>
          )}

          {/* KFF */}
          {plan.kffTasks.length > 0 && (
            <PlanSection
              title="KFF"
              icon={<Brain className="w-4 h-4" />}
              borderColor={SECTION_COLORS.kff}
            >
              <ul className="space-y-2">
                {plan.kffTasks.map((t) => {
                  const itemId = `kff-${t.domain}`;
                  const isDone = completedItems.has(itemId);
                  return (
                    <li key={itemId} className="flex items-center gap-3">
                      <PlanCheckbox checked={isDone} onChange={() => toggleCompleted(itemId)} />
                      <Link
                        to="/kff"
                        state={{ dailyPlanKff: [{ domain: t.domain, count: t.count }] }}
                        className={`flex items-center gap-2 flex-1 min-w-0 group ${
                          isDone ? "line-through text-[var(--muted)]" : "text-[var(--text-primary)]"
                        }`}
                      >
                        <span className="text-sm font-medium">
                          {t.count} {t.label}
                        </span>
                        {!isDone && (
                          <ArrowRight className="w-3.5 h-3.5 text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity ml-auto shrink-0" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </PlanSection>
          )}

          {/* TV */}
          {plan.tvTexts > 0 && (
            <PlanSection
              title="Textverständnis"
              icon={<FileText className="w-4 h-4" />}
              borderColor={SECTION_COLORS.tv}
            >
              {(() => {
                const itemId = "tv-texte";
                const isDone = completedItems.has(itemId);
                return (
                  <div className="flex items-center gap-3">
                    <PlanCheckbox checked={isDone} onChange={() => toggleCompleted(itemId)} />
                    <Link
                      to="/tv"
                      state={{ dailyPlanTvTexts: plan.tvTexts }}
                      className={`flex items-center gap-2 flex-1 min-w-0 group ${
                        isDone ? "line-through text-[var(--muted)]" : "text-[var(--text-primary)]"
                      }`}
                    >
                      <span className="text-sm font-medium">
                        {plan.tvTexts} {plan.tvTexts > 1 ? "Texte" : "Text"} bearbeiten
                      </span>
                      {!isDone && (
                        <ArrowRight className="w-3.5 h-3.5 text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity ml-auto shrink-0" />
                      )}
                    </Link>
                  </div>
                );
              })()}
            </PlanSection>
          )}

          {/* SEK */}
          {plan.sekTasks.length > 0 && (
            <PlanSection
              title="SEK"
              icon={<Heart className="w-4 h-4" />}
              borderColor={SECTION_COLORS.sek}
            >
              <ul className="space-y-2">
                {plan.sekTasks.map((t) => {
                  const itemId = `sek-${t.domain}`;
                  const isDone = completedItems.has(itemId);
                  return (
                    <li key={itemId} className="flex items-center gap-3">
                      <PlanCheckbox checked={isDone} onChange={() => toggleCompleted(itemId)} />
                      <Link
                        to="/sek"
                        state={{ dailyPlanSek: [{ domain: t.domain, count: t.count }] }}
                        className={`flex items-center gap-2 flex-1 min-w-0 group ${
                          isDone ? "line-through text-[var(--muted)]" : "text-[var(--text-primary)]"
                        }`}
                      >
                        <span className="text-sm font-medium">
                          {t.count} {t.label}
                        </span>
                        {!isDone && (
                          <ArrowRight className="w-3.5 h-3.5 text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity ml-auto shrink-0" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </PlanSection>
          )}
        </div>
      ) : (
        /* Empty state */
        <Card className="card-glass">
          <CardContent className="py-12 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <p className="text-lg font-semibold text-[var(--text-primary)]">Kein Lernplan nötig</p>
            <p className="text-sm text-[var(--muted)] mt-1">Du bist auf dem neuesten Stand!</p>
          </CardContent>
        </Card>
      )}

      {/* Config Section — collapsed by default */}
      <Card className="card-glass">
        <button
          onClick={() => setConfigOpen(!configOpen)}
          className="w-full flex items-center justify-between p-4 cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[var(--muted)]" />
            <span className="text-sm font-medium text-[var(--text-secondary)]">
              Lernplan anpassen
            </span>
          </div>
          {configOpen ? (
            <ChevronUp className="w-4 h-4 text-[var(--muted)]" />
          ) : (
            <ChevronDown className="w-4 h-4 text-[var(--muted)]" />
          )}
        </button>
        {configOpen && (
          <CardContent className="pt-0 space-y-4">
            <div>
              <label className="text-sm font-medium text-[var(--text-secondary)] block mb-2">
                An wie vielen Tagen pro Woche kannst du lernen?
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={3}
                  max={7}
                  value={daysPerWeek}
                  onChange={(e) => setDaysPerWeek(Number(e.target.value))}
                  className="flex-1 accent-[var(--accent)]"
                />
                <span className="text-lg font-bold text-[var(--accent)] w-16 text-right">
                  {daysPerWeek} Tage
                </span>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-[var(--text-secondary)] block mb-2">
                Wie viele Stunden pro Lerntag?
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={0.5}
                  max={8}
                  step={0.25}
                  value={hoursPerDay}
                  onChange={(e) => setHoursPerDay(Number(e.target.value))}
                  className="flex-1 accent-[var(--accent)]"
                />
                <span className="text-lg font-bold text-[var(--accent)] w-20 text-right">
                  {hoursPerDay}h/Tag
                </span>
              </div>
            </div>
            <p className="text-sm text-[var(--muted)]">
              ={" "}
              <strong className="text-[var(--text-primary)]">{derivedHoursPerWeek} h/Woche</strong>
            </p>
            <Button variant="premium" onClick={handleSaveConfig}>
              <Zap className="w-4 h-4 mr-2" />
              {lernplanConfig ? "Lernplan aktualisieren" : "Lernplan generieren"}
            </Button>
          </CardContent>
        )}
      </Card>
    </div>
  );
}

// ============================================================
// Sub-components
// ============================================================

function PlanSection({
  title,
  icon,
  borderColor,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  borderColor: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`border-l-4 ${borderColor} pl-4 py-1`}>
      <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)] mb-3 flex items-center gap-1.5">
        {icon}
        {title}
      </h3>
      {children}
    </div>
  );
}

function PlanCheckbox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onChange();
      }}
      className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
        checked
          ? "bg-emerald-500 border-emerald-500"
          : "border-[var(--border)] hover:border-[var(--accent)]"
      }`}
    >
      {checked && <Check className="w-3 h-3 text-white" />}
    </button>
  );
}

function SubjectBadge({ subject }: { subject: string }) {
  const colors: Record<string, string> = {
    biologie: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200",
    chemie: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200",
    physik: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200",
    mathematik: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200",
  };
  const label: Record<string, string> = {
    biologie: "Bio",
    chemie: "Chemie",
    physik: "Physik",
    mathematik: "Mathe",
  };
  return (
    <span
      className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider shrink-0 ${
        colors[subject] ?? "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
      }`}
    >
      {label[subject] ?? subject}
    </span>
  );
}
