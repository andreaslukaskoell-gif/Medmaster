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
  CreditCard,
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
  Lock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useStore } from "@/store/useStore";
import { useAuth } from "@/hooks/useAuth";
import { useAdaptiveStore } from "@/store/adaptiveLearning";
import { getLevelFromXP, getRequiredLevelForPath } from "@/lib/progression";
import {
  alleKapitel,
  findChapterByUnterkapitelId,
  getKapitelById,
  getKapitelBySubject,
} from "@/data/bmsKapitel";
import { pathForChapter } from "@/lib/bmsRoutes";
import type { Kapitel } from "@/data/bmsKapitel/types";
import { SIDEBAR_PANEL_WIDTH, SIDEBAR_LG_POSITION } from "./sidebarLayout";

const MEDICAL_BLUE = "#0055ff";

const subjectConfig: Record<
  "biologie" | "chemie" | "physik" | "mathematik",
  { label: string; icon: typeof Microscope }
> = {
  biologie: { label: "Biologie", icon: Microscope },
  chemie: { label: "Chemie", icon: FlaskConical },
  physik: { label: "Physik", icon: Zap },
  mathematik: { label: "Mathematik", icon: Calculator },
};

type NavItem = {
  to: string;
  icon: typeof BookOpen;
  label: string;
  iconColor?: string;
  highlight?: boolean;
  hasChildren?: boolean;
  /** Ab diesem Level freigeschaltet (Sidebar zeigt Schloss + "Ab Level X") */
  requiredLevel?: number;
};

const NAV_SECTIONS: { id: string; title: string; items: NavItem[] }[] = [
  {
    id: "lernen",
    title: "LERNEN",
    items: [
      { to: "/bms", icon: BookOpen, label: "BMS", iconColor: "text-emerald-500", hasChildren: true },
      { to: "/kff", icon: Brain, label: "KFF", iconColor: "text-amber-500" },
      { to: "/tv", icon: FileText, label: "TV", iconColor: "text-indigo-500" },
      { to: "/sek", icon: Heart, label: "SEK", iconColor: "text-rose-500" },
    ],
  },
  {
    id: "training",
    title: "TRAINING & TOOLS",
    items: [
      { to: "/ai-tutor", icon: MessageCircle, label: "AI-Tutor", iconColor: "text-purple-500", highlight: true, requiredLevel: 5 },
      { to: "/simulation", icon: Timer, label: "Simulation", iconColor: "text-orange-500", requiredLevel: 15 },
      { to: "/wissencheck", icon: BookOpen, label: "Wissenscheck", iconColor: "text-emerald-500" },
      { to: "/stichwortliste", icon: ListChecks, label: "Stichwortliste", iconColor: "text-emerald-500" },
      { to: "/karteikarten", icon: Layers, label: "Karteikarten", iconColor: "text-blue-500" },
      { to: "/notizen", icon: StickyNote, label: "Notizen" },
    ],
  },
  {
    id: "performance",
    title: "PERFORMANCE",
    items: [
      { to: "/performance", icon: Award, label: "Erfolge & Wissensstand" },
      { to: "/prognose", icon: TrendingUp, label: "Prognose" },
      { to: "/statistik", icon: BarChart3, label: "Statistik" },
      { to: "/analyse", icon: Radar, label: "Analyse" },
      { to: "/schwachstellen", icon: Target, label: "Schwachstellen", iconColor: "text-red-500", requiredLevel: 10 },
    ],
  },
  {
    id: "system",
    title: "SYSTEM",
    items: [
      { to: "/preise", icon: CreditCard, label: "Preise" },
      { to: "/community", icon: Users, label: "Community" },
      { to: "/duell", icon: Swords, label: "Duell" },
      { to: "/lernplan", icon: CalendarDays, label: "Lernplan" },
      { to: "/", icon: Settings, label: "Einstellungen" },
    ],
  },
];

interface SidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

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
    <div className="mb-2">
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center gap-2 w-full py-1.5 px-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors cursor-pointer"
      >
        {open ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
        {title}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
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
  const bmsProgress = useStore((s) => {
    const completed = s.completedChapters ?? [];
    const totalUK = alleKapitel.reduce((sum, k) => sum + (k?.unterkapitel?.length ?? 0), 0);
    if (totalUK === 0) return 0;
    const completedUK = alleKapitel.reduce(
      (sum, k) => sum + (k?.unterkapitel?.filter((u) => u?.id && completed.includes(u.id)).length ?? 0),
      0
    );
    return Math.round((completedUK / totalUK) * 100);
  });

  const lastPathLabel = useMemo(() => {
    if (!lastPath || lastPath === "/" || lastPath === "/bms") return null;
    if (lastViewedUnterkapitelId) {
      const found = findChapterByUnterkapitelId(lastViewedUnterkapitelId);
      if (found) {
        const uk = found.kapitel.unterkapitel?.[found.index];
        const subj: Record<string, string> = { biologie: "Biologie", chemie: "Chemie", physik: "Physik", mathematik: "Mathematik" };
        return uk ? `${subj[found.kapitel.subject]} › ${found.kapitel.title} › ${uk.title}` : `${subj[found.kapitel.subject]} › ${found.kapitel.title}`;
      }
    }
    if (lastViewedKapitelId) {
      const kap = getKapitelById(lastViewedKapitelId);
      if (kap) {
        const subj: Record<string, string> = { biologie: "Biologie", chemie: "Chemie", physik: "Physik", mathematik: "Mathematik" };
        return `${subj[kap.subject]} › ${kap.title}`;
      }
    }
    const m = lastPath.match(/\/bms\/([^/]+)\/([^/]+)/);
    if (m) return `${m[1]} › ${m[2]}`;
    return "Zuletzt gelesen";
  }, [lastPath, lastViewedKapitelId, lastViewedUnterkapitelId]);

  const isLastPathActive = lastPath !== null && lastPath !== "/" && pathname === lastPath;
  const filterDue = useMemo(() => new URLSearchParams(search).get("filter") === "due", [search]);

  useEffect(() => {
    if (isLastPathActive && lastPathRef.current) {
      lastPathRef.current.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [isLastPathActive]);

  const chaptersBySubject = (subject: "biologie" | "chemie" | "physik" | "mathematik"): Kapitel[] =>
    getKapitelBySubject(subject) || [];

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const isActive = (to: string) => {
    if (to === "/") return pathname === "/";
    return pathname === to || (to !== "/" && pathname.startsWith(to + "/"));
  };

  // Beim Öffnen des mobilen Drawers Focus auf Schließen-Button setzen
  useEffect(() => {
    if (mobileOpen) {
      requestAnimationFrame(() => closeButtonRef.current?.focus({ preventScroll: true }));
    }
  }, [mobileOpen]);

  // Escape schließt den mobilen Drawer
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [mobileOpen, onClose]);

  const sidebarContent = (
    <>
      <div className="p-4 flex items-center justify-between border-b border-slate-200/80 dark:border-white/10">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm shrink-0"
            style={{ backgroundColor: MEDICAL_BLUE }}
          >
            <GraduationCap className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <h1 className="text-base font-bold text-slate-900 dark:text-white tracking-tight truncate">MedMaster</h1>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">MedAT Lernplattform</p>
            <p className="text-[9px] italic text-slate-400 dark:text-slate-500 mt-0.5">By doctors for future doctors</p>
          </div>
        </div>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Menü schließen"
          className="lg:hidden flex items-center justify-center min-w-[44px] min-h-[44px] rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 border border-transparent dark:border-white/10 cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav className="flex-1 min-h-0 overflow-y-auto p-3 space-y-1 sidebar-scroll">
        {lastPathLabel && lastPath && lastPath !== "/" && (
          <div ref={lastPathRef} className="mb-2">
            <NavLink to={lastPath} end={false} onClick={onClose}>
              {({ isActive: active }) => (
                <div
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer border-l-4",
                    active ? "border-primary-500 bg-primary-500/10 dark:bg-white/10 text-primary-700 dark:text-white" : "border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"
                  )}
                >
                  <BookOpen className="w-3.5 h-3.5 shrink-0 text-emerald-500" />
                  <span className="truncate">{lastPathLabel}</span>
                </div>
              )}
            </NavLink>
          </div>
        )}

        <NavLink to="/" end onClick={onClose} className="mb-2 block">
          {({ isActive: active }) => (
            <div
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-r-lg text-base font-medium transition-colors cursor-pointer border-l-4 border-l-transparent",
                active
                  ? "border-l-primary-500 bg-primary-500/10 dark:bg-white/10 text-primary-700 dark:text-white"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5"
              )}
            >
              <LayoutDashboard className="w-4 h-4 shrink-0 opacity-80" />
              <span>Dashboard</span>
            </div>
          )}
        </NavLink>

        {NAV_SECTIONS.map((section) => (
          <CollapsibleSection
            key={section.id}
            title={section.title}
            open={openSections[section.id] ?? true}
            onToggle={() => toggleSection(section.id)}
          >
            <div className="space-y-0.5 pl-1">
              {section.items.map((item) => {
                const to = item.to as string;
                const hasChildren = "hasChildren" in item && item.hasChildren;
                const isBms = to === "/bms" && hasChildren;
                const active = isActive(to);
                const isBmsActive = pathname === "/bms" || pathname.startsWith("/bms/");

                const requiredLevel = "requiredLevel" in item ? item.requiredLevel : getRequiredLevelForPath(to);
                const isDev = process.env.NODE_ENV === "development";
                const wouldBeLocked = requiredLevel != null && currentLevel < requiredLevel;
                const isLocked = wouldBeLocked && !isDev;

                if (isLocked) {
                  return (
                    <div
                      key={to}
                      title={`Freischaltung ab Level ${requiredLevel}`}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-base font-medium border-l-4 border-amber-200 dark:border-violet-900/50 bg-amber-50/50 dark:bg-violet-950/20 text-slate-500 dark:text-slate-400 cursor-not-allowed"
                    >
                      <Lock className="w-4 h-4 shrink-0 text-amber-600 dark:text-violet-400" />
                      <span className="truncate flex-1">{item.label}</span>
                      <span className="text-[10px] font-semibold text-amber-700 dark:text-violet-300 shrink-0">
                        Verfügbar ab Level {requiredLevel}
                      </span>
                    </div>
                  );
                }

                if (isBms) {
                  return (
                    <div
                      key={to}
                      className={cn(
                        "flex flex-col rounded-r-lg border-l-4 transition-colors",
                        isBmsActive ? "border-l-primary-500 bg-primary-500/10 dark:bg-white/10" : "border-l-transparent"
                      )}
                    >
                      <div className="flex items-center">
                        <NavLink
                          to="/bms"
                          end={false}
                          onClick={onClose}
                          className={cn(
                            "flex-1 flex items-center gap-3 px-3 py-2 rounded-lg text-base font-medium min-w-0 cursor-pointer",
                            isBmsActive ? "text-primary-700 dark:text-white" : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5"
                          )}
                        >
                          <item.icon className={cn("w-4 h-4 shrink-0 opacity-80", item.iconColor)} />
                          <span className="truncate">{item.label}</span>
                        </NavLink>
                        <button
                          type="button"
                          onClick={() => setBmsExpanded(!bmsExpanded)}
                          aria-label={bmsExpanded ? "BMS zuklappen" : "BMS aufklappen"}
                          className="flex items-center gap-1.5 px-2 py-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer"
                        >
                          {(bmsProgress ?? 0) > 0 && <span className="text-[10px] font-medium opacity-80">{bmsProgress}%</span>}
                          {(dueCount ?? 0) > 0 && <span className="bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{dueCount}</span>}
                          {bmsExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                        </button>
                      </div>
                      <AnimatePresence initial={false}>
                        {bmsExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-2 ml-2 border-l border-slate-200 dark:border-white/10 isolate"
                            style={{ contain: "layout" }}
                          >
                            <div className="max-h-[min(50vh,320px)] overflow-y-auto">
                            {dueChapterIds.length > 0 && (
                              <div className="px-2 py-1.5 mb-1">
                                {filterDue ? (
                                  <RouterLink to="/bms" onClick={onClose} className="text-xs font-medium text-primary-600 dark:text-primary-400 hover:underline">
                                    Alle Kapitel anzeigen
                                  </RouterLink>
                                ) : (
                                  <RouterLink to="/bms?filter=due" onClick={onClose} className="text-xs font-medium text-amber-600 dark:text-amber-400 hover:underline">
                                    Fällig zur Wiederholung ({dueChapterIds.length})
                                  </RouterLink>
                                )}
                              </div>
                            )}
                            {(["biologie", "chemie", "physik", "mathematik"] as const).map((subjectId) => {
                              const config = subjectConfig[subjectId];
                              const chapters = chaptersBySubject(subjectId);
                              const filteredChapters = filterDue ? chapters.filter((k) => dueChapterIds.includes(k.id)) : chapters;
                              const isSubjectOpen = openBmsSubject === subjectId;
                              const SubjectIcon = config.icon;
                              return (
                                <div key={subjectId} className="py-1">
                                  <button
                                    type="button"
                                    onClick={() => setOpenBmsSubject(isSubjectOpen ? null : subjectId)}
                                    className="flex items-center gap-2 w-full py-1.5 px-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 rounded-md cursor-pointer"
                                  >
                                    <SubjectIcon className="w-3.5 h-3.5 shrink-0 opacity-70" />
                                    {config.label}
                                    <span className="text-xs text-slate-400 dark:text-slate-500">({filteredChapters.length})</span>
                                    {isSubjectOpen ? <ChevronDown className="w-3.5 h-3.5 ml-auto" /> : <ChevronRight className="w-3.5 h-3.5 ml-auto" />}
                                  </button>
                                  <AnimatePresence initial={false}>
                                    {isSubjectOpen && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                        className="overflow-hidden pl-5 isolate"
                                        style={{ contain: "layout" }}
                                      >
                                        {filteredChapters.map((kap) => {
                                          const href = pathForChapter(subjectId, kap?.id ?? "");
                                          const chapterActive = pathname === href;
                                          return (
                                            <NavLink
                                              key={kap.id}
                                              to={href}
                                              onClick={onClose}
                                              className={cn(
                                                "block py-1.5 px-2 rounded-md text-sm transition-colors border-l-2 -ml-px pl-2",
                                                chapterActive
                                                  ? "border-primary-500 bg-primary-500/10 dark:bg-white/10 text-primary-700 dark:text-white font-medium"
                                                  : "border-transparent text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"
                                              )}
                                            >
                                              <span className="truncate block">{kap.title}</span>
                                            </NavLink>
                                          );
                                        })}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              );
                            })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <NavLink key={to} to={to} end={to === "/"} onClick={onClose}>
                    {({ isActive: itemActive }) => (
                      <div
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 rounded-r-lg text-base font-medium transition-colors cursor-pointer border-l-4 border-l-transparent",
                          itemActive
                            ? "border-l-primary-500 bg-primary-500/10 dark:bg-white/10 text-primary-700 dark:text-white"
                            : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5",
                          item.highlight && "ring-1 ring-primary-400/50 dark:ring-primary-500/30"
                        )}
                      >
                        {item.highlight && <Sparkles className="w-4 h-4 shrink-0 text-primary-500" />}
                        <item.icon className={cn("w-4 h-4 shrink-0 opacity-80", !itemActive && item.iconColor)} />
                        <span className="truncate">{item.label}</span>
                        {isDev && wouldBeLocked && (
                          <span className="shrink-0 text-[10px] font-medium text-amber-600 dark:text-amber-400" title="Im Dev-Modus freigegeben; normalerweise ab Level gesperrt">
                            🔓 DEV
                          </span>
                        )}
                      </div>
                    )}
                  </NavLink>
                );
              })}
            </div>
          </CollapsibleSection>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-200 dark:border-white/10 space-y-3 shrink-0">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2">
          Konto
        </div>
        {user && (
          <button
            type="button"
            onClick={signOut}
            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer border border-transparent dark:border-white/10"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            Abmelden
          </button>
        )}
        <div className="text-[10px] text-slate-400 dark:text-slate-500 text-center pt-1">MedMaster v2.0</div>
        <p className="text-xs italic text-slate-400 dark:text-slate-500 text-center mt-2 pt-3 border-t border-slate-100 dark:border-white/5 wrap-break-word hyphens-auto">
          By doctors for future doctors
        </p>
      </div>
    </>
  );

  return (
    <>
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
      <aside
        className={cn(
          "fixed left-0 top-0 h-screen flex flex-col",
          SIDEBAR_PANEL_WIDTH,
          SIDEBAR_LG_POSITION,
          "bg-white dark:bg-slate-900 dark:border-r dark:border-white/10",
          "z-101 lg:z-40",
          "transition-transform duration-300 ease-out",
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
