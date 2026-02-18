import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, BookOpen, Brain, FileText, Heart, Timer,
  BarChart3, CreditCard, GraduationCap, CalendarDays, Radar,
  Users, StickyNote, Layers, Swords, ListChecks, Target, X, LogOut,
  MessageCircle, TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useStore } from "@/store/useStore";
import { useAuth } from "@/hooks/useAuth";
import { alleKapitel } from "@/data/bmsKapitel";

const MEDICAL_BLUE = "#0055ff";

const navItems = [
  { to: "/", icon: LayoutDashboard, label: "Dashboard", iconColor: "" },
  { to: "/bms", icon: BookOpen, label: "BMS", iconColor: "text-emerald-500" },
  { to: "/stichwortliste", icon: ListChecks, label: "Stichwortliste", iconColor: "text-emerald-500" },
  { to: "/schwachstellen", icon: Target, label: "Schwachstellen", iconColor: "text-red-500" },
  { to: "/wissencheck", icon: BookOpen, label: "Wissenscheck", iconColor: "text-emerald-500" },
  { to: "/kff", icon: Brain, label: "KFF", iconColor: "text-amber-500" },
  { to: "/tv", icon: FileText, label: "TV", iconColor: "text-indigo-500" },
  { to: "/sek", icon: Heart, label: "SEK", iconColor: "text-rose-500" },
  { to: "/simulation", icon: Timer, label: "Simulation", iconColor: "text-orange-500" },
  { to: "/ai-tutor", icon: MessageCircle, label: "AI-Tutor", iconColor: "text-purple-500" },
  { to: "/lernplan", icon: CalendarDays, label: "Lernplan", iconColor: "" },
  { to: "/analyse", icon: Radar, label: "Analyse", iconColor: "" },
  { to: "/community", icon: Users, label: "Community", iconColor: "" },
  { to: "/statistik", icon: BarChart3, label: "Statistik", iconColor: "" },
  { to: "/prognose", icon: TrendingUp, label: "Prognose", iconColor: "" },
  { to: "/notizen", icon: StickyNote, label: "Notizen", iconColor: "" },
  { to: "/karteikarten", icon: Layers, label: "Karteikarten", iconColor: "text-blue-500" },
  { to: "/duell", icon: Swords, label: "Duell", iconColor: "" },
  { to: "/preise", icon: CreditCard, label: "Preise", iconColor: "" },
];

interface SidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ mobileOpen, onClose }: SidebarProps) {
  const { user, signOut } = useAuth();

  const dueCount = useStore((s) => {
    const today = new Date().toISOString().split("T")[0];
    return Object.values(s.spacedRepetition).filter((item) => item.nextDue <= today).length;
  });

  const bmsProgress = useStore((s) => {
    const totalUK = alleKapitel.reduce((sum, k) => sum + k.unterkapitel.length, 0);
    if (totalUK === 0) return 0;
    const completedUK = alleKapitel.reduce(
      (sum, k) => sum + k.unterkapitel.filter((u) => s.completedChapters.includes(u.id)).length,
      0
    );
    return Math.round((completedUK / totalUK) * 100);
  });

  const sidebarContent = (
    <>
      <div className="p-5 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-sm" style={{ backgroundColor: MEDICAL_BLUE }}>
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100 tracking-tight">MedMaster</h1>
            <p className="text-[10px] text-gray-500 dark:text-gray-400">MedAT Lernplattform</p>
          </div>
        </div>
        <button className="lg:hidden p-2 rounded-xl text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer" onClick={onClose} aria-label="Menü schließen">
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.to === "/"} onClick={onClose}>
            {({ isActive }) => (
              <motion.div
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "flex items-center justify-between px-3 py-2.5 rounded-2xl text-sm font-medium transition-colors cursor-pointer",
                  isActive
                    ? "text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100"
                )}
                style={isActive ? { backgroundColor: MEDICAL_BLUE } : undefined}
              >
                <span className="flex items-center gap-3">
                  <item.icon className={cn("w-4.5 h-4.5 shrink-0", !isActive && item.iconColor)} />
                  {item.label}
                </span>
                {item.to === "/bms" && (
                  <span className="flex items-center gap-1.5">
                    {bmsProgress > 0 && (
                      <span className="text-[10px] font-medium opacity-80">{bmsProgress}%</span>
                    )}
                    {dueCount > 0 && (
                      <span className="bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                        {dueCount}
                      </span>
                    )}
                  </span>
                )}
              </motion.div>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-3 border-t border-gray-100 dark:border-gray-800 space-y-2">
        {user && (
          <motion.button
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.98 }}
            onClick={signOut}
            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-2xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer"
          >
            <LogOut className="w-4.5 h-4.5 shrink-0" />
            Abmelden
          </motion.button>
        )}
        <div className="text-[10px] text-gray-400 dark:text-gray-500 text-center">MedMaster v2.0</div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
            aria-hidden
          />
        )}
      </AnimatePresence>

      {/* Sidebar: floating on desktop, drawer on mobile */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-screen w-72 max-w-[85vw] flex flex-col z-50 transition-transform duration-300 ease-out",
          "lg:left-4 lg:top-4 lg:bottom-4 lg:h-[calc(100vh-2rem)] lg:w-64 lg:rounded-2xl lg:shadow-lg lg:border lg:border-gray-200 dark:lg:border-gray-800 lg:translate-x-0",
          "bg-white dark:bg-gray-900",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
