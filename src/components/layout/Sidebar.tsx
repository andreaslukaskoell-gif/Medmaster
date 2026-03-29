import { useRef, useEffect, useState, useMemo, useCallback } from "react";
import { playClick } from "@/lib/sounds";
import { NavLink, useLocation, useSearchParams, Link as RouterLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  Brain,
  FileText,
  Heart,
  Timer,
  BarChart3,
  CalendarDays,
  LogOut,
  Settings,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Microscope,
  FlaskConical,
  Zap,
  Calculator,
  Dumbbell,
  BookMarked,
  Lock,
  Check,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/brand/Logo";
import { useStore } from "@/store/useStore";
import { useAuth } from "@/hooks/useAuth";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { getLevelFromXP, getRequiredLevelForPath } from "@/lib/progression";
import { pathForChapter, chapterIdFromParams } from "@/lib/bmsRoutes";
import type { Kapitel } from "@/data/bmsKapitel/types";

// Stable defaults for Zustand selectors
const SIDEBAR_EMPTY_OBJ = {} as Record<string, never>;
const SIDEBAR_EMPTY_ARR: never[] = [];

/* ── Subject config ─────────────────────────────────────────────────── */

const subjectConfig: Record<
  "biologie" | "chemie" | "physik" | "mathematik",
  { label: string; icon: typeof Microscope; dotColor: string }
> = {
  biologie: { label: "Biologie", icon: Microscope, dotColor: "bg-[var(--accent-bio)]" },
  chemie: { label: "Chemie", icon: FlaskConical, dotColor: "bg-[var(--accent-chem)]" },
  physik: { label: "Physik", icon: Zap, dotColor: "bg-[var(--accent-phys)]" },
  mathematik: { label: "Mathematik", icon: Calculator, dotColor: "bg-[var(--accent-math)]" },
};

/* ── Nav config ─────────────────────────────────────────────────────── */

type NavItem = {
  to: string;
  icon: typeof BookOpen;
  label: string;
  hasChildren?: boolean;
  requiredLevel?: number;
  /** Visuell hervorgehoben (z. B. Schwachstellen). */
  emphasized?: boolean;
  /** Zusätzliche Pfade, die diesen Eintrag als aktiv markieren (z. B. Fortschritt-Subseiten). */
  activePaths?: string[];
};

/** MedAT-orientierte Struktur: LERNEN & ÜBEN → TOOLS & FORTSCHRITT. Dashboard ist fix oben. */
const NAV_SECTIONS: { id: string; title: string; items: NavItem[] }[] = [
  {
    id: "lernen",
    title: "LERNEN & ÜBEN",
    items: [
      { to: "/bms", icon: BookOpen, label: "BMS", hasChildren: true },
      { to: "/kff", icon: Brain, label: "KFF" },
      { to: "/tv", icon: FileText, label: "TV" },
      { to: "/sek", icon: Heart, label: "SEK" },
      { to: "/fragen-trainer", icon: Dumbbell, label: "Fragen-Trainer" },
      { to: "/simulation", icon: Timer, label: "Simulation", requiredLevel: 0 },
      { to: "/lernplan", icon: CalendarDays, label: "Lernplan" },
    ],
  },
  {
    id: "tools",
    title: "TOOLS & FORTSCHRITT",
    items: [
      { to: "/fortschritt", icon: BarChart3, label: "Fortschritt", emphasized: true },
      { to: "/formelsammlung", icon: BookMarked, label: "Formelsammlung" },
    ],
  },
];

/* ── CollapsibleSection ─────────────────────────────────────────────── */

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-1 mt-5 first:mt-0">
      <div className="section-label px-3 py-1.5">{title}</div>
    </div>
  );
}

/* ── NavItemRow ─────────────────────────────────────────────────────── */

function NavItemRow({
  icon: Icon,
  label,
  active,
  emphasized,
}: {
  icon: typeof BookOpen;
  label: string;
  active: boolean;
  emphasized?: boolean;
}) {
  return (
    <div
      className={cn(
        "sidebar-nav-item flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-medium cursor-pointer",
        active
          ? "bg-[var(--accent)]/8 text-[var(--accent)] font-semibold"
          : "text-[var(--text-secondary)] hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/[0.03]",
        emphasized && !active && "text-[var(--foreground)]"
      )}
    >
      <Icon className={cn("w-4 h-4 shrink-0", active ? "text-[var(--accent)]" : "")} />
      <span className="truncate flex-1">{label}</span>
    </div>
  );
}

/* ── Sidebar ────────────────────────────────────────────────────────── */

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { user, signOut } = useAuth();
  const location = useLocation();
  const lastPathRef = useRef<HTMLDivElement>(null);

  const [searchParams] = useSearchParams();
  const pathname = location.pathname;
  const search = location.search;

  const [openBmsSubject, setOpenBmsSubject] = useState<string | null>(null);
  const [bmsExpanded, setBmsExpanded] = useState(false);

  // Lazy-load BMS chapter metadata to keep it out of the main bundle
  const [bmsModule, setBmsModule] = useState<{
    alleKapitel: Kapitel[];
    findChapterByUnterkapitelId: (
      id: string
    ) => { kapitel: Kapitel; index: number } | null | undefined;
    getKapitelById: (id: string) => Kapitel | undefined;
    getKapitelBySubject: (s: string) => Kapitel[];
  } | null>(null);
  useEffect(() => {
    import("@/data/bmsKapitel").then((m) =>
      setBmsModule({
        alleKapitel: m.alleKapitel,
        findChapterByUnterkapitelId: m.findChapterByUnterkapitelId,
        getKapitelById: m.getKapitelById,
        getKapitelBySubject: m.getKapitelBySubject,
      })
    );
  }, []);

  const lastPath = useAdaptiveStore((s) => s.lastPath);

  const xp = useStore((s) => s.xp);
  const currentLevel = useMemo(() => getLevelFromXP(xp ?? 0), [xp]);
  const userProgress = useStore((s) => s.userProgress ?? SIDEBAR_EMPTY_OBJ);
  const dueChapterIds = useMemo(() => {
    const today = new Date().toISOString().split("T")[0];
    const progress = userProgress ?? {};
    return Object.entries(progress)
      .filter(([, p]) => p?.nextReviewDate <= today)
      .map(([id]) => id);
  }, [userProgress]);

  const dueCount = useStore((s) => {
    const today = new Date().toISOString().split("T")[0];
    const sr = s.spacedRepetition ?? {};
    return Object.values(sr).filter((item) => item?.nextDue <= today).length;
  });

  const completedChapters = useStore((s) => s.completedChapters ?? SIDEBAR_EMPTY_ARR);
  const bmsProgress = useMemo(() => {
    const kapitel = bmsModule?.alleKapitel ?? [];
    const totalUK = kapitel.reduce((sum, k) => sum + (k?.unterkapitel?.length ?? 0), 0);
    if (totalUK === 0) return 0;
    const completedUK = kapitel.reduce(
      (sum, k) =>
        sum +
        (k?.unterkapitel?.filter((u) => u?.id && completedChapters.includes(u.id)).length ?? 0),
      0
    );
    return Math.round((completedUK / totalUK) * 100);
  }, [bmsModule, completedChapters]);

  /* ── Contextual chapter nav (when on /bms/:subject/:chapter) ────── */
  const chapterContext = useMemo(() => {
    const match = pathname.match(/^\/bms\/([^/]+)\/([^/]+)$/);
    if (!match || !bmsModule) return null;

    const subjectSlug = match[1] as "biologie" | "chemie" | "physik" | "mathematik";
    const chapterId = match[2];

    if (!subjectConfig[subjectSlug]) return null;

    const kapitel = bmsModule.getKapitelById(chapterId);
    if (!kapitel || !kapitel.unterkapitel?.length) return null;

    const currentUkIndex = parseInt(searchParams.get("uk") ?? "0", 10);

    // Subject accent CSS variable
    const accentMap: Record<string, string> = {
      biologie: "var(--accent-bio)",
      chemie: "var(--accent-chem)",
      physik: "var(--accent-phys)",
      mathematik: "var(--accent-math)",
    };

    return {
      subject: subjectSlug,
      subjectLabel: subjectConfig[subjectSlug].label,
      kapitel,
      chapterId,
      currentUkIndex,
      accent: accentMap[subjectSlug] ?? "var(--accent)",
      overviewPath: `/bms/${subjectSlug}`,
    };
  }, [pathname, searchParams, bmsModule]);

  const lastPathLabel = useMemo(() => {
    if (!lastPath || lastPath === "/" || lastPath === "/bms") return null;

    const subj: Record<string, string> = {
      biologie: "Bio",
      chemie: "Chemie",
      physik: "Physik",
      mathematik: "Mathe",
    };

    // Parse subject and kapitelId directly from the lastPath URL
    // to avoid stale lastViewedKapitelId/lastViewedUnterkapitelId
    const slugToSubject: Record<string, string> = {
      biologie: "biologie",
      chemie: "chemie",
      physik: "physik",
      mathematik: "mathematik",
    };
    const pathMatch = lastPath.match(/\/bms\/([^/]+)(?:\/([^/]+))?/);
    if (pathMatch && bmsModule) {
      const subjectSlug = pathMatch[1];
      const kapitelSlug = pathMatch[2]; // may be undefined for subject-level paths
      const subjectId = slugToSubject[subjectSlug];

      if (subjectId && kapitelSlug) {
        // Resolve chapter ID using fuzzy matching (handles slug ≠ ID mismatches)
        const allIds = bmsModule.alleKapitel.map((k) => k.id);
        const resolvedId = chapterIdFromParams(subjectSlug, kapitelSlug, allIds);
        const kap = resolvedId
          ? bmsModule.getKapitelById(resolvedId)
          : bmsModule.getKapitelById(kapitelSlug);
        if (kap) {
          return `${subj[subjectId]} · ${kap.title}`;
        }
        // Fallback: use slug as-is
        return `${subj[subjectId] ?? subjectSlug} · ${kapitelSlug}`;
      }
      if (subjectId && !kapitelSlug) {
        return `${subj[subjectId]} · Übersicht`;
      }
    }

    // Non-BMS last path
    if (pathMatch) {
      const m = pathMatch;
      return m[2] ? `${m[1]} · ${m[2]}` : m[1];
    }

    return "Zuletzt gelesen";
  }, [lastPath, bmsModule]);

  // Close sidebar on Escape key
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    },
    [open, onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [handleEscape]);

  // Close sidebar on navigation
  useEffect(() => {
    if (open) onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const isLastPathActive = lastPath !== null && lastPath !== "/" && pathname === lastPath;
  const filterDue = useMemo(() => new URLSearchParams(search).get("filter") === "due", [search]);

  useEffect(() => {
    if (isLastPathActive && lastPathRef.current) {
      lastPathRef.current.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [isLastPathActive]);

  const chaptersBySubject = (subject: "biologie" | "chemie" | "physik" | "mathematik"): Kapitel[] =>
    (bmsModule?.getKapitelBySubject(subject) ?? []).filter(
      (k) => k.unterkapitel && k.unterkapitel.length > 0
    );

  // Sections are always open — no toggle needed

  const isActive = (to: string) => {
    if (to === "/") return pathname === "/";
    if (to === "/fortschritt")
      return (
        pathname === "/fortschritt" ||
        pathname.startsWith("/fortschritt/") ||
        pathname === "/schwachstellen" ||
        pathname.startsWith("/schwachstellen") ||
        pathname === "/statistik" ||
        pathname === "/prognose" ||
        pathname === "/performance"
      );
    return pathname === to || (to !== "/" && pathname.startsWith(to + "/"));
  };

  /* ── Sidebar content ──────────────────────────────────────────────── */

  const sidebarContent = (
    <>
      {/* Brand header */}
      <div className="px-4 py-4 flex items-center justify-between border-b border-[var(--border)] bg-[var(--sidebar-bg)]">
        <Logo variant="full" size={22} />
        <button
          type="button"
          onClick={onClose}
          className="p-1 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/5 transition-colors cursor-pointer"
          aria-label="Menü schließen"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 min-h-0 overflow-y-auto px-3 py-3 space-y-0.5 sidebar-scroll">
        {/* Dashboard – fix oben, visuell hervorgehoben */}
        <div className="mb-3">
          <NavLink to="/dashboard" end onClick={() => playClick()}>
            {({ isActive: dashboardActive }) => (
              <div
                className={cn(
                  "flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer",
                  dashboardActive
                    ? "bg-[var(--accent)]/12 text-[var(--foreground)]"
                    : "text-[var(--foreground)] hover:bg-[var(--foreground)]/5"
                )}
              >
                <LayoutDashboard className="w-4 h-4 shrink-0 text-[var(--accent)]" />
                <span className="truncate">Dashboard</span>
              </div>
            )}
          </NavLink>
        </div>

        {/* Weiterlernen – schneller Einstieg wenn vorhanden (only on BMS/dashboard pages) */}
        {lastPathLabel &&
          lastPath &&
          lastPath !== "/" &&
          (pathname === "/dashboard" || pathname.startsWith("/bms")) && (
            <div ref={lastPathRef} className="mb-3">
              <NavLink to={lastPath} end={false}>
                {({ isActive: active }) => (
                  <div
                    className={cn(
                      "flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer",
                      active
                        ? "bg-[var(--accent)]/12 text-[var(--foreground)]"
                        : "bg-[var(--accent)]/6 text-[var(--foreground)] hover:bg-[var(--accent)]/10"
                    )}
                  >
                    <BookOpen className="w-4 h-4 shrink-0 text-[var(--accent)]" />
                    <span className="truncate">{lastPathLabel}</span>
                  </div>
                )}
              </NavLink>
            </div>
          )}

        {/* Contextual chapter navigation */}
        {chapterContext && (
          <div className="mb-3 pb-3 border-b border-[var(--border)]">
            {/* Back link */}
            <RouterLink
              to={chapterContext.overviewPath}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <ChevronLeft className="w-3 h-3" />
              <span>Alle Kapitel</span>
            </RouterLink>

            {/* Chapter title */}
            <div className="px-3 py-1.5">
              <div
                className="text-[12px] font-semibold uppercase tracking-wide"
                style={{ color: chapterContext.accent }}
              >
                {chapterContext.subjectLabel}
              </div>
              <div className="text-sm font-semibold text-[var(--foreground)] mt-0.5 leading-snug">
                {chapterContext.kapitel.title}
              </div>
            </div>

            {/* Unterkapitel list */}
            <div className="max-h-[min(45vh,360px)] overflow-y-auto mt-1 space-y-0.5 sidebar-scroll">
              {chapterContext.kapitel.unterkapitel.map((uk, idx) => {
                const isCurrentUk = idx === chapterContext.currentUkIndex;
                const isCompleted = completedChapters.includes(uk.id);
                const href = `${pathForChapter(chapterContext.subject, chapterContext.chapterId)}?uk=${idx}`;

                return (
                  <RouterLink
                    key={uk.id}
                    to={href}
                    className={cn(
                      "flex items-center gap-2 px-3 py-1.5 text-xs rounded-md transition-colors",
                      isCurrentUk
                        ? "bg-[var(--foreground)]/5 text-[var(--foreground)] font-medium"
                        : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/3"
                    )}
                    style={
                      isCurrentUk
                        ? { borderLeft: `2px solid ${chapterContext.accent}` }
                        : { borderLeft: "2px solid transparent" }
                    }
                  >
                    {isCompleted ? (
                      <Check className="w-3 h-3 shrink-0 text-emerald-500" />
                    ) : (
                      <span
                        className={cn(
                          "w-3 h-3 shrink-0 flex items-center justify-center text-[9px] font-medium rounded-full",
                          isCurrentUk
                            ? "text-[var(--foreground)]"
                            : "text-[var(--muted)] opacity-60"
                        )}
                      >
                        {idx + 1}
                      </span>
                    )}
                    <span className="truncate">{uk.title}</span>
                  </RouterLink>
                );
              })}
            </div>
          </div>
        )}

        {/* Sections */}
        {NAV_SECTIONS.map((section) => (
          <div key={section.id}>
            <SectionHeader title={section.title} />
            <div className="space-y-0.5 pb-1">
              {section.items.map((item) => {
                const to = item.to as string;
                const hasChildren = "hasChildren" in item && item.hasChildren;
                const isBms = to === "/bms" && hasChildren;
                const isBmsActive = pathname === "/bms" || pathname.startsWith("/bms/");

                const requiredLevel =
                  "requiredLevel" in item ? item.requiredLevel : getRequiredLevelForPath(to);
                const isDev = process.env.NODE_ENV === "development";
                const wouldBeLocked = requiredLevel != null && currentLevel < requiredLevel;
                const isLocked = wouldBeLocked && !isDev;

                /* Locked */
                if (isLocked) {
                  return (
                    <div
                      key={to}
                      title={`Freischaltung ab Level ${requiredLevel}`}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-[var(--muted)] cursor-not-allowed opacity-60"
                    >
                      <Lock className="w-4 h-4 shrink-0" />
                      <span className="truncate flex-1">{item.label}</span>
                      <span className="text-[11px] font-medium shrink-0">Lv.{requiredLevel}</span>
                    </div>
                  );
                }

                /* BMS (expandable) */
                if (isBms) {
                  return (
                    <div key={to} className="space-y-0.5">
                      <div
                        className={cn(
                          "flex items-center rounded-lg transition-colors",
                          isBmsActive
                            ? "text-[var(--foreground)]"
                            : "text-[var(--muted)] hover:text-[var(--foreground)]"
                        )}
                      >
                        <NavLink to="/bms" end={false} className="flex-1 min-w-0">
                          <div
                            className={cn(
                              "sidebar-nav-item flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer relative",
                              isBmsActive
                                ? "bg-[var(--accent)]/10 text-[var(--foreground)] font-semibold"
                                : "hover:bg-[var(--foreground)]/5"
                            )}
                          >
                            <item.icon
                              className={cn(
                                "w-4 h-4 shrink-0",
                                isBmsActive ? "text-[var(--accent)]" : "text-[var(--muted)]"
                              )}
                            />
                            <span className="truncate flex-1">{item.label}</span>
                          </div>
                        </NavLink>

                        {/* Expand toggle */}
                        <button
                          type="button"
                          onClick={() => setBmsExpanded(!bmsExpanded)}
                          aria-label={bmsExpanded ? "BMS zuklappen" : "BMS aufklappen"}
                          className="flex items-center gap-1 px-2 py-2 rounded-lg hover:bg-[var(--foreground)]/5 transition-colors cursor-pointer shrink-0"
                        >
                          {(bmsProgress ?? 0) > 0 && (
                            <span className="text-[11px] font-medium text-[var(--muted)]">
                              {bmsProgress}%
                            </span>
                          )}
                          {(dueCount ?? 0) > 0 && (
                            <span className="bg-orange-500 text-white text-[11px] font-bold px-1.5 py-0.5 rounded-full">
                              {dueCount}
                            </span>
                          )}
                          {bmsExpanded ? (
                            <ChevronDown className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>

                      {/* BMS subject tree */}
                      <AnimatePresence initial={false}>
                        {bmsExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                            className="overflow-hidden pl-3 ml-2 border-l border-[var(--border)]"
                            style={{ contain: "layout" }}
                          >
                            <div className="max-h-[min(50vh,320px)] overflow-y-auto py-1 space-y-0.5">
                              {dueChapterIds.length > 0 && (
                                <div className="px-2 py-1">
                                  {filterDue ? (
                                    <RouterLink
                                      to="/bms"
                                      className="text-xs text-[var(--color-primary-500)] hover:underline"
                                    >
                                      Alle anzeigen
                                    </RouterLink>
                                  ) : (
                                    <RouterLink
                                      to="/bms?filter=due"
                                      className="text-xs text-amber-600 dark:text-amber-400 hover:underline"
                                    >
                                      Fällig ({dueChapterIds.length})
                                    </RouterLink>
                                  )}
                                </div>
                              )}

                              {(["biologie", "chemie", "physik", "mathematik"] as const).map(
                                (subjectId) => {
                                  const config = subjectConfig[subjectId];
                                  const chapters = chaptersBySubject(subjectId);
                                  const filteredChapters = filterDue
                                    ? chapters.filter((k) => dueChapterIds.includes(k.id))
                                    : chapters;
                                  const isSubjectOpen = openBmsSubject === subjectId;
                                  const SubjectIcon = config.icon;

                                  return (
                                    <div key={subjectId}>
                                      <button
                                        type="button"
                                        onClick={() =>
                                          setOpenBmsSubject(isSubjectOpen ? null : subjectId)
                                        }
                                        className="flex items-center gap-2 w-full py-1.5 px-2 text-xs font-medium text-[var(--muted)] hover:text-[var(--foreground)] rounded-md transition-colors cursor-pointer"
                                      >
                                        {/* Subject dot */}
                                        <span
                                          className={cn(
                                            "w-2 h-2 rounded-full shrink-0",
                                            config.dotColor
                                          )}
                                        />
                                        <SubjectIcon className="w-3.5 h-3.5 shrink-0 opacity-70" />
                                        <span>{config.label}</span>
                                        <span className="text-[11px] text-[var(--muted)] opacity-60">
                                          ({filteredChapters.length})
                                        </span>
                                        {isSubjectOpen ? (
                                          <ChevronDown className="w-3 h-3 ml-auto" />
                                        ) : (
                                          <ChevronRight className="w-3 h-3 ml-auto" />
                                        )}
                                      </button>

                                      <AnimatePresence initial={false}>
                                        {isSubjectOpen && (
                                          <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.15 }}
                                            className="overflow-hidden pl-5"
                                            style={{ contain: "layout" }}
                                          >
                                            <div className="py-0.5 space-y-0.5">
                                              {filteredChapters.map((kap) => {
                                                const href = pathForChapter(
                                                  subjectId,
                                                  kap?.id ?? ""
                                                );
                                                const chapterActive = pathname === href;
                                                return (
                                                  <NavLink
                                                    key={kap.id}
                                                    to={href}
                                                    className={cn(
                                                      "sidebar-nav-item block py-1.5 px-2 rounded-md text-xs pl-3",
                                                      chapterActive
                                                        ? "bg-[var(--accent)]/10 text-[var(--foreground)] font-medium"
                                                        : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/5"
                                                    )}
                                                  >
                                                    <span className="truncate block">
                                                      {kap.title}
                                                    </span>
                                                  </NavLink>
                                                );
                                              })}
                                            </div>
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                /* Regular nav item: Fortschritt gilt auch auf /schwachstellen, /statistik, /prognose als aktiv */
                return (
                  <NavLink key={to} to={to} end={to === "/"} onClick={() => playClick()}>
                    {({ isActive: itemActive }) => (
                      <NavItemRow
                        icon={item.icon}
                        label={item.label}
                        active={to === "/fortschritt" ? isActive(to) : itemActive}
                        emphasized={item.emphasized}
                      />
                    )}
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-[var(--border)]">
        {user && (
          <div className="space-y-0.5">
            <NavLink to="/einstellungen">
              {({ isActive: settingsActive }) => (
                <div
                  className={cn(
                    "flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer",
                    settingsActive
                      ? "bg-[var(--accent)]/10 text-[var(--foreground)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/5"
                  )}
                >
                  <Settings className="w-3.5 h-3.5 shrink-0" />
                  Einstellungen
                </div>
              )}
            </NavLink>
            <button
              type="button"
              onClick={signOut}
              className="flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-xs font-medium text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/5 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5 shrink-0" />
              Abmelden
            </button>
          </div>
        )}
        <p className="text-[11px] text-[var(--muted)] text-center pt-2 opacity-50">medmaster.at</p>
      </div>
    </>
  );

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-[199] bg-black/30 transition-opacity duration-250 ease-in-out",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-screen z-[200] flex flex-col",
          "w-[min(280px,calc(100vw-60px))]",
          "bg-[var(--sidebar-bg)]/95 backdrop-blur-xl",
          "border-r border-[var(--border)]/50",
          "shadow-2xl",
          "transition-transform duration-250 ease-in-out",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
