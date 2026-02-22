import { useRef, useEffect, useState, useMemo } from "react";
import type { ReactNode } from "react";
import { NavLink, useLocation, Link as RouterLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  Brain,
  FileText,
  Heart,
  Timer,
  BarChart3,
  GraduationCap,
  CalendarDays,
  Radar,
  Users,
  StickyNote,
  Layers,
  Swords,
  ListChecks,
  Target,
  X,
  LogOut,
  MessageCircle,
  TrendingUp,
  Award,
  ChevronDown,
  ChevronRight,
  Microscope,
  FlaskConical,
  Zap,
  Calculator,
  Settings,
  Sparkles,
  Dumbbell,
  BookMarked,
  Lock,
  Trophy,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useStore } from "@/store/useStore";
import { useAuth } from "@/hooks/useAuth";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { getLevelFromXP, getRequiredLevelForPath } from "@/lib/progression";
import { pathForChapter } from "@/lib/bmsRoutes";
import type { Kapitel } from "@/data/bmsKapitel/types";
import { SIDEBAR_PANEL_WIDTH, SIDEBAR_LG_POSITION } from "./sidebarLayout";

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
  iconColor?: string;
  highlight?: boolean;
  hasChildren?: boolean;
  requiredLevel?: number;
};

const NAV_SECTIONS: { id: string; title: string; items: NavItem[] }[] = [
  {
    id: "lernen",
    title: "LERNEN",
    items: [
      { to: "/daily", icon: Trophy, label: "Daily", iconColor: "text-amber-500", highlight: true },
      {
        to: "/bms",
        icon: BookOpen,
        label: "BMS",
        iconColor: "text-[var(--accent-bio)]",
        hasChildren: true,
      },
      { to: "/kff", icon: Brain, label: "KFF", iconColor: "text-amber-500" },
      { to: "/tv", icon: FileText, label: "TV", iconColor: "text-indigo-500" },
      { to: "/sek", icon: Heart, label: "SEK", iconColor: "text-rose-500" },
    ],
  },
  {
    id: "training",
    title: "TRAINING",
    items: [
      {
        to: "/ai-tutor",
        icon: MessageCircle,
        label: "AI-Tutor",
        iconColor: "text-purple-500",
        highlight: true,
        requiredLevel: 0,
      },
      {
        to: "/simulation",
        icon: Timer,
        label: "Simulation",
        iconColor: "text-orange-500",
        requiredLevel: 0,
      },
      {
        to: "/wissencheck",
        icon: BookOpen,
        label: "Wissenscheck",
        iconColor: "text-[var(--accent-bio)]",
      },
      {
        to: "/stichwortliste",
        icon: ListChecks,
        label: "Stichwortliste",
        iconColor: "text-[var(--accent-bio)]",
      },
      { to: "/karteikarten", icon: Layers, label: "Karteikarten", iconColor: "text-emerald-500" },
      {
        to: "/fragen-trainer",
        icon: Dumbbell,
        label: "Fragen-Trainer",
        iconColor: "text-violet-500",
      },
      {
        to: "/formelsammlung",
        icon: BookMarked,
        label: "Formelsammlung",
        iconColor: "text-teal-500",
      },
      { to: "/notizen", icon: StickyNote, label: "Notizen" },
    ],
  },
  {
    id: "performance",
    title: "PERFORMANCE",
    items: [
      { to: "/performance", icon: Award, label: "Erfolge" },
      { to: "/prognose", icon: TrendingUp, label: "Prognose" },
      { to: "/statistik", icon: BarChart3, label: "Statistik" },
      { to: "/analyse", icon: Radar, label: "Analyse" },
      {
        to: "/schwachstellen",
        icon: Target,
        label: "Schwachstellen",
        iconColor: "text-rose-500",
        requiredLevel: 0,
      },
    ],
  },
  {
    id: "system",
    title: "SYSTEM",
    items: [
      { to: "/community", icon: Users, label: "Community" },
      { to: "/duell", icon: Swords, label: "Duell" },
      { to: "/lernplan", icon: CalendarDays, label: "Lernplan" },
      { to: "/preise", icon: Settings, label: "Konto & Preise" },
    ],
  },
];

/* ── CollapsibleSection ─────────────────────────────────────────────── */

function CollapsibleSection({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div className="mb-1">
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center gap-1.5 w-full py-1.5 px-2 text-[10px] font-semibold uppercase tracking-widest text-[var(--muted)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
      >
        {open ? (
          <ChevronDown className="w-3 h-3 shrink-0" />
        ) : (
          <ChevronRight className="w-3 h-3 shrink-0" />
        )}
        {title}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── NavItemRow ─────────────────────────────────────────────────────── */

function NavItemRow({
  icon: Icon,
  label,
  iconColor,
  highlight,
  active,
}: {
  icon: typeof BookOpen;
  label: string;
  iconColor?: string;
  highlight?: boolean;
  active: boolean;
}) {
  return (
    <div
      className={cn(
        "group flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 cursor-pointer relative",
        active
          ? "bg-[var(--foreground)]/8 dark:bg-[var(--foreground)]/10 text-[var(--foreground)]"
          : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/5",
        highlight && !active && "ring-1 ring-[var(--color-primary-500)]/25"
      )}
    >
      {/* Active indicator bar */}
      {active && (
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[var(--color-primary-500)] rounded-full" />
      )}

      {highlight && <Sparkles className="w-3.5 h-3.5 shrink-0 text-[var(--color-primary-500)]" />}
      <Icon className={cn("w-4 h-4 shrink-0", active ? undefined : iconColor)} />
      <span className="truncate flex-1">{label}</span>
    </div>
  );
}

/* ── Sidebar ────────────────────────────────────────────────────────── */

interface SidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ mobileOpen, onClose }: SidebarProps) {
  const { user, signOut } = useAuth();
  const location = useLocation();
  const lastPathRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const pathname = location.pathname;
  const search = location.search;

  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => ({
    lernen: true,
    training: false,
    performance: false,
    system: false,
  }));
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
  const lastViewedKapitelId = useAdaptiveStore((s) => s.lastViewedKapitelId);
  const lastViewedUnterkapitelId = useAdaptiveStore((s) => s.lastViewedUnterkapitelId);

  const xp = useStore((s) => s.xp);
  const currentLevel = useMemo(() => getLevelFromXP(xp ?? 0), [xp]);
  const userProgress = useStore((s) => s.userProgress ?? {});
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

  const completedChapters = useStore((s) => s.completedChapters ?? []);
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

  const lastPathLabel = useMemo(() => {
    if (!lastPath || lastPath === "/" || lastPath === "/bms") return null;
    if (lastViewedUnterkapitelId && bmsModule) {
      const found = bmsModule.findChapterByUnterkapitelId(lastViewedUnterkapitelId);
      if (found) {
        const uk = found.kapitel.unterkapitel?.[found.index];
        const subj: Record<string, string> = {
          biologie: "Bio",
          chemie: "Chemie",
          physik: "Physik",
          mathematik: "Mathe",
        };
        return uk
          ? `${subj[found.kapitel.subject]} · ${uk.title}`
          : `${subj[found.kapitel.subject]} · ${found.kapitel.title}`;
      }
    }
    if (lastViewedKapitelId && bmsModule) {
      const kap = bmsModule.getKapitelById(lastViewedKapitelId);
      if (kap) {
        const subj: Record<string, string> = {
          biologie: "Bio",
          chemie: "Chemie",
          physik: "Physik",
          mathematik: "Mathe",
        };
        return `${subj[kap.subject]} · ${kap.title}`;
      }
    }
    const m = lastPath.match(/\/bms\/([^/]+)\/([^/]+)/);
    if (m) return `${m[1]} · ${m[2]}`;
    return "Zuletzt gelesen";
  }, [lastPath, lastViewedKapitelId, lastViewedUnterkapitelId, bmsModule]);

  const isLastPathActive = lastPath !== null && lastPath !== "/" && pathname === lastPath;
  const filterDue = useMemo(() => new URLSearchParams(search).get("filter") === "due", [search]);

  useEffect(() => {
    if (isLastPathActive && lastPathRef.current) {
      lastPathRef.current.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [isLastPathActive]);

  const chaptersBySubject = (subject: "biologie" | "chemie" | "physik" | "mathematik"): Kapitel[] =>
    bmsModule?.getKapitelBySubject(subject) ?? [];

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const isActive = (to: string) => {
    if (to === "/") return pathname === "/";
    return pathname === to || (to !== "/" && pathname.startsWith(to + "/"));
  };

  useEffect(() => {
    if (mobileOpen) {
      requestAnimationFrame(() => closeButtonRef.current?.focus({ preventScroll: true }));
    }
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [mobileOpen, onClose]);

  /* ── Sidebar content ──────────────────────────────────────────────── */

  const sidebarContent = (
    <>
      {/* Brand header */}
      <div className="px-4 py-4 flex items-center justify-between border-b border-[var(--border)]">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-[var(--color-primary-500)] flex items-center justify-center shrink-0">
            <GraduationCap className="w-4 h-4 text-white" />
          </div>
          <div className="min-w-0">
            <h1 className="text-sm font-semibold text-[var(--foreground)] tracking-tight truncate leading-tight">
              MedMaster
            </h1>
            <p className="text-[10px] text-[var(--muted)] leading-tight">MedAT Lernplattform</p>
          </div>
        </div>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Menü schließen"
          className="lg:hidden p-1.5 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/8 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 min-h-0 overflow-y-auto px-3 py-3 space-y-0.5 sidebar-scroll">
        {/* Resume last path */}
        {lastPathLabel && lastPath && lastPath !== "/" && (
          <div ref={lastPathRef} className="mb-3">
            <NavLink to={lastPath} end={false} onClick={onClose}>
              {({ isActive: active }) => (
                <div
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer border border-[var(--border)]",
                    active
                      ? "bg-[var(--foreground)]/8 text-[var(--foreground)] border-[var(--foreground)]/20"
                      : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/5"
                  )}
                >
                  <BookOpen className="w-3.5 h-3.5 shrink-0 text-[var(--accent-bio)]" />
                  <span className="truncate">{lastPathLabel}</span>
                </div>
              )}
            </NavLink>
          </div>
        )}

        {/* Dashboard */}
        <NavLink to="/" end onClick={onClose} className="block mb-2">
          {({ isActive: active }) => (
            <NavItemRow icon={LayoutDashboard} label="Dashboard" active={active} />
          )}
        </NavLink>

        {/* Sections */}
        {NAV_SECTIONS.map((section) => (
          <CollapsibleSection
            key={section.id}
            title={section.title}
            open={openSections[section.id] ?? true}
            onToggle={() => toggleSection(section.id)}
          >
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
                      <span className="text-[10px] font-medium shrink-0">Lv.{requiredLevel}</span>
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
                        <NavLink to="/bms" end={false} onClick={onClose} className="flex-1 min-w-0">
                          <div
                            className={cn(
                              "flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer relative",
                              isBmsActive
                                ? "bg-[var(--foreground)]/8 dark:bg-[var(--foreground)]/10 text-[var(--foreground)]"
                                : "hover:bg-[var(--foreground)]/5"
                            )}
                          >
                            {isBmsActive && (
                              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[var(--color-primary-500)] rounded-full" />
                            )}
                            <item.icon
                              className={cn(
                                "w-4 h-4 shrink-0",
                                isBmsActive ? undefined : item.iconColor
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
                            <span className="text-[10px] font-medium text-[var(--muted)]">
                              {bmsProgress}%
                            </span>
                          )}
                          {(dueCount ?? 0) > 0 && (
                            <span className="bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
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
                                      onClick={onClose}
                                      className="text-xs text-[var(--color-primary-500)] hover:underline"
                                    >
                                      Alle anzeigen
                                    </RouterLink>
                                  ) : (
                                    <RouterLink
                                      to="/bms?filter=due"
                                      onClick={onClose}
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
                                        <span className="text-[10px] text-[var(--muted)] opacity-60">
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
                                                    onClick={onClose}
                                                    className={cn(
                                                      "block py-1.5 px-2 rounded-md text-xs transition-colors border-l-2 -ml-px pl-3",
                                                      chapterActive
                                                        ? "border-[var(--color-primary-500)] bg-[var(--color-primary-500)]/8 text-[var(--foreground)] font-medium"
                                                        : "border-transparent text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/5"
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

                /* Regular nav item */
                return (
                  <NavLink key={to} to={to} end={to === "/"} onClick={onClose}>
                    {({ isActive: itemActive }) => (
                      <NavItemRow
                        icon={item.icon}
                        label={item.label}
                        iconColor={item.iconColor}
                        highlight={item.highlight}
                        active={itemActive}
                      />
                    )}
                  </NavLink>
                );
              })}
            </div>
          </CollapsibleSection>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-[var(--border)]">
        {user && (
          <button
            type="button"
            onClick={signOut}
            className="flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-xs font-medium text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/5 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5 shrink-0" />
            Abmelden
          </button>
        )}
        <p className="text-[10px] text-[var(--muted)] text-center pt-2 opacity-50">
          MedMaster v2.0
        </p>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-100 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden
          />
        )}
      </AnimatePresence>

      {/* Sidebar panel */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-screen flex flex-col",
          SIDEBAR_PANEL_WIDTH,
          SIDEBAR_LG_POSITION,
          /* Glass effect */
          "bg-[var(--sidebar-bg)] backdrop-blur-sm",
          "border-r border-[var(--border)] lg:border-r-0",
          "z-101 lg:z-40",
          "transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
        role={mobileOpen ? "dialog" : undefined}
        aria-modal={mobileOpen ? true : undefined}
        aria-label={mobileOpen ? "Hauptmenü" : undefined}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
