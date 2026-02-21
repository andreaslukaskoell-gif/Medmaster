import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronUp, ChevronDown, Minus } from "lucide-react";
import { useStore } from "@/store/useStore";
import { useAuth } from "@/hooks/useAuth";
import { useIsMounted } from "@/hooks/useIsMounted";
import { LeaderboardSkeleton } from "@/components/skeletons/AppSkeletons";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { getLevelFromXP } from "@/lib/progression";
import {
  type LeaderboardEntry,
  type LeaderboardCategory,
  type FachFilter,
  rankByGlobal,
  rankByWeekly,
  rankByFach,
  getTopPercent,
  fetchLeaderboardFromDB,
  syncUserToLeaderboard,
} from "@/lib/leaderboard";
import { supabase } from "@/lib/supabase";
import { BADGE_DEFINITIONS } from "@/data/badges";
import { BadgeIcon } from "@/components/badges/BadgeIcon";
import { cn } from "@/lib/utils";

const TOP_LIST_SIZE = 10;
const MOCK_SIZE = 80;

const FACH_OPTIONS: { value: FachFilter; label: string }[] = [
  { value: "biologie", label: "Biologie" },
  { value: "chemie", label: "Chemie" },
  { value: "physik", label: "Physik" },
  { value: "mathematik", label: "Mathematik" },
  { value: "kff", label: "KFF" },
];

export function Leaderboard() {
  const mounted = useIsMounted();
  const { profile } = useAuth();
  const { xp, earnedBadges, activityLog } = useStore();
  const getFachReadiness = useAdaptiveStore((s) => s.getFachReadiness);
  const [category, setCategory] = useState<LeaderboardCategory>("global");
  const [fach, setFach] = useState<FachFilter>("biologie");
  const [dbEntries, setDbEntries] = useState<LeaderboardEntry[]>([]);
  const [dbLoaded, setDbLoaded] = useState(false);

  // Sync current user's stats to Supabase once on mount
  useEffect(() => {
    if (!supabase || !profile?.id) return;
    const nickname = profile.display_name || profile.username || "Anonym";
    const level = getLevelFromXP(xp);
    syncUserToLeaderboard(supabase, profile.id, {
      nickname,
      xp,
      level,
      xpThisWeek,
      subjectScores: {
        biologie: getFachReadiness("biologie"),
        chemie: getFachReadiness("chemie"),
        physik: getFachReadiness("physik"),
        mathematik: getFachReadiness("mathematik"),
        kff: Math.min(100, Math.floor(xp / 50) + 30),
      },
      badgeIds: earnedBadges.slice(0, 3),
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile?.id]);

  useEffect(() => {
    if (!supabase) { setDbLoaded(true); return; }
    fetchLeaderboardFromDB(supabase, category, category === "fach" ? fach : undefined).then((rows) => {
      setDbEntries(rows);
      setDbLoaded(true);
    });
  }, [category, fach]);

  const xpThisWeek = useMemo(() => {
    const now = new Date();
    let sum = 0;
    for (let i = 0; i < 7; i++) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const key = d.toISOString().split("T")[0];
      const log = activityLog[key];
      if (log) sum += (log.questions || 0) * 10;
    }
    return sum;
  }, [activityLog]);

  const currentUserEntry: LeaderboardEntry = useMemo(() => {
    const nickname = profile?.display_name || profile?.username || "MedATler*in";
    const level = getLevelFromXP(xp);
    const subjectScores: LeaderboardEntry["subjectScores"] = {
      biologie: getFachReadiness("biologie"),
      chemie: getFachReadiness("chemie"),
      physik: getFachReadiness("physik"),
      mathematik: getFachReadiness("mathematik"),
      kff: Math.min(100, Math.floor(xp / 50) + 30),
    };
    return {
      id: "current-user",
      nickname,
      avatar: nickname.slice(0, 2).toUpperCase(),
      level,
      badgeIds: earnedBadges.slice(0, 3),
      xp,
      xpThisWeek,
      subjectScores,
      rankChange: 0,
      isCurrentUser: true,
    };
  }, [profile, xp, earnedBadges, xpThisWeek, getFachReadiness]);

  const rankedList = useMemo(() => {
    if (!dbLoaded) return [];
    const base: LeaderboardEntry[] = dbEntries.map((e) => ({ ...e, isCurrentUser: e.id === profile?.id }));
    const all = [...base.filter((e) => !e.isCurrentUser), currentUserEntry];
    if (category === "global") return rankByGlobal(all);
    if (category === "weekly") return rankByWeekly(all);
    return rankByFach(all, fach);
  }, [category, fach, currentUserEntry, dbEntries, dbLoaded, profile?.id]);

  const topEntries = rankedList.slice(0, TOP_LIST_SIZE);
  const currentRank = rankedList.find((e) => e.isCurrentUser)?.rank ?? 0;
  const currentEntry = rankedList.find((e) => e.isCurrentUser);
  const totalCount = rankedList.length;
  const topPercent = currentEntry ? getTopPercent(currentRank, totalCount) : 0;
  const valueLabel =
    category === "global"
      ? "XP"
      : category === "weekly"
        ? "XP (7 Tage)"
        : "%";
  const valueSuffix = category === "fach" ? "%" : " XP";

  const getValue = (e: LeaderboardEntry) =>
    category === "global" ? e.xp : category === "weekly" ? e.xpThisWeek : (e.subjectScores[fach] ?? 0);

  if (!mounted || !dbLoaded) {
    return <LeaderboardSkeleton />;
  }

  // Empty state: only current user in list (no real peers yet)
  if (dbEntries.length === 0) {
    return (
      <div className="space-y-4">
        <div className="rounded-2xl border border-white/20 bg-[#0f172a]/80 backdrop-blur-xl shadow-xl p-8 text-center">
          <div className="text-4xl mb-4">🏆</div>
          <h3 className="text-lg font-semibold text-white mb-2">Rangliste</h3>
          <p className="text-slate-400 text-sm mb-4">
            Die Rangliste füllt sich wenn mehr Lernende beitreten.
          </p>
          <p className="text-primary-400 font-semibold text-sm mb-6">Du kannst der Erste sein! 🥇</p>
          <button
            type="button"
            onClick={() => {
              const text = "Bereite dich kostenlos auf den MedAT vor: medmaster.app 🧠";
              if (navigator.share) { navigator.share({ text }).catch(() => {}); }
              else { navigator.clipboard.writeText(text).catch(() => {}); }
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white text-sm font-medium transition-colors cursor-pointer"
          >
            Freunde einladen
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: "global" as const, label: "Global" },
          { id: "weekly" as const, label: "Wochen-Champions" },
          { id: "fach" as const, label: "Fachbereich-Profi" },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setCategory(tab.id)}
            className={cn(
              "px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer",
              category === tab.id
                ? "bg-primary-600 text-white shadow-lg shadow-primary-500/25"
                : "bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-white/10"
            )}
          >
            {tab.label}
          </button>
        ))}
        {category === "fach" && (
          <select
            value={fach}
            onChange={(e) => setFach(e.target.value as FachFilter)}
            className="ml-2 px-3 py-2 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-sm font-medium text-slate-700 dark:text-slate-300 cursor-pointer"
          >
            {FACH_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Relativ-Ranking */}
      {currentEntry && (
        <div className="rounded-xl bg-primary-500/15 dark:bg-primary-500/20 border border-primary-400/30 dark:border-primary-400/20 px-4 py-3 text-center">
          <p className="text-sm font-semibold text-primary-800 dark:text-primary-200">
            Du bist in den <span className="text-primary-600 dark:text-primary-400">Top {topPercent}%</span>
            {category === "weekly" ? " dieser Woche" : category === "fach" ? ` in ${FACH_OPTIONS.find((o) => o.value === fach)?.label}` : ""}!
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
            Rang {currentRank} von {totalCount}
          </p>
        </div>
      )}

      {/* Liste: Midnight Blue Glassmorphism */}
      <div
        className={cn(
          "rounded-2xl overflow-hidden border border-white/20 dark:border-white/10",
          "bg-[#0f172a]/80 dark:bg-[#0f172a]/90 backdrop-blur-xl",
          "shadow-xl shadow-slate-900/20"
        )}
      >
        <div className="divide-y divide-white/10">
          {topEntries.map((entry, index) => (
            <LeaderboardRow
              key={entry.id}
              entry={entry}
              rank={entry.rank ?? index + 1}
              value={getValue(entry)}
              valueSuffix={valueSuffix}
            />
          ))}
        </div>
      </div>

      {/* Sticky-Leiste: eigener Rang */}
      {currentEntry && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "sticky bottom-4 rounded-2xl border-2 border-primary-400/50 dark:border-primary-400/40",
            "bg-[#0f172a]/95 dark:bg-[#0f172a]/98 backdrop-blur-xl",
            "shadow-[0_0_30px_rgba(0,85,255,0.2)] dark:shadow-[0_0_40px_rgba(0,85,255,0.25)]",
            "p-4 z-10"
          )}
        >
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-primary-400 w-8 text-center">{currentRank}</span>
            <div className="w-10 h-10 rounded-full bg-primary-500/30 flex items-center justify-center text-sm font-bold text-primary-200 shrink-0">
              {currentEntry.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-white truncate">
                {currentEntry.nickname}
                <span className="ml-2 text-xs font-normal text-primary-400">Du</span>
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs text-slate-400">Level {currentEntry.level}</span>
                {currentEntry.badgeIds.slice(0, 3).map((bid) => {
                  const def = BADGE_DEFINITIONS.find((b) => b.id === bid);
                  return def ? (
                    <BadgeIcon key={bid} tier={def.tier} earned size="sm" className="w-6 h-6" />
                  ) : null;
                })}
              </div>
            </div>
            <div className="text-right shrink-0">
              <p className="text-sm font-bold text-primary-300">
                {category === "global"
                  ? `${currentEntry.xp} XP`
                  : category === "weekly"
                    ? `${currentEntry.xpThisWeek} XP`
                    : `${currentEntry.subjectScores[fach] ?? 0} %`}
              </p>
              <p className="text-[10px] text-slate-500">Top {topPercent}%</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function LeaderboardRow({
  entry,
  rank,
  value,
  valueSuffix,
}: {
  entry: LeaderboardEntry;
  rank: number;
  value: number;
  valueSuffix: string;
}) {
  const isTop3 = rank <= 3;
  const borderClass =
    rank === 1
      ? "border-amber-400/60 dark:border-amber-300/50 shadow-[0_0_20px_rgba(251,191,36,0.15)]"
      : rank === 2
        ? "border-slate-400/50 dark:border-slate-300/40 shadow-[0_0_16px_rgba(148,163,184,0.12)]"
        : rank === 3
          ? "border-amber-700/50 dark:border-amber-600/40 shadow-[0_0_16px_rgba(180,83,9,0.12)]"
          : "";

  return (
    <div
      className={cn(
        "flex items-center gap-3 px-4 py-3 transition-colors",
        entry.isCurrentUser && "bg-primary-500/15 dark:bg-primary-500/20",
        isTop3 && "border-l-4 " + borderClass
      )}
    >
      <div className="flex items-center gap-1.5 w-10 shrink-0">
        <span
          className={cn(
            "text-sm font-bold w-6 text-center",
            rank === 1 && "text-amber-400",
            rank === 2 && "text-slate-300",
            rank === 3 && "text-amber-600 dark:text-amber-500",
            rank > 3 && "text-slate-500 dark:text-slate-400"
          )}
        >
          {rank}
        </span>
        {entry.rankChange !== 0 && (
          <span className="flex items-center">
            {entry.rankChange > 0 && <ChevronUp className="w-3.5 h-3.5 text-green-500" aria-hidden />}
            {entry.rankChange < 0 && <ChevronDown className="w-3.5 h-3.5 text-red-500" aria-hidden />}
            {entry.rankChange === 0 && <Minus className="w-3.5 h-3.5 text-slate-500" aria-hidden />}
          </span>
        )}
      </div>
      <div className="w-9 h-9 rounded-full bg-slate-600/50 dark:bg-slate-500/30 flex items-center justify-center text-xs font-bold text-slate-200 shrink-0">
        {entry.avatar}
      </div>
      <div className="flex-1 min-w-0">
        <p className={cn("text-sm font-medium truncate", entry.isCurrentUser ? "text-primary-300" : "text-slate-200")}>
          {entry.nickname}
          {entry.isCurrentUser && (
            <span className="ml-1.5 text-[10px] font-normal text-primary-400">Du</span>
          )}
        </p>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-[10px] text-slate-500">Lv.{entry.level}</span>
          {entry.badgeIds.slice(0, 3).map((bid) => {
            const def = BADGE_DEFINITIONS.find((b) => b.id === bid);
            return def ? (
              <BadgeIcon key={bid} tier={def.tier} earned size="sm" className="w-6! h-6! [&>svg]:w-3! [&>svg]:h-3!" />
            ) : null;
          })}
        </div>
      </div>
      <div className="text-right shrink-0">
        <p className="text-sm font-bold text-slate-100">
          {value}
          {valueSuffix}
        </p>
      </div>
    </div>
  );
}
