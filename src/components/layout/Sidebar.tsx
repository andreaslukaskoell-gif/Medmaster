import { NavLink } from "react-router-dom";
import {
  LayoutDashboard, BookOpen, Brain, FileText, Heart, Timer,
  BarChart3, CreditCard, GraduationCap, CalendarDays, Radar,
  Users, StickyNote, Layers, Swords, X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useStore } from "@/store/useStore";
import { alleKapitel } from "@/data/bmsKapitel";

const navItems = [
  { to: "/", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/bms", icon: BookOpen, label: "BMS" },
  { to: "/kff", icon: Brain, label: "KFF" },
  { to: "/tv", icon: FileText, label: "TV" },
  { to: "/sek", icon: Heart, label: "SEK" },
  { to: "/simulation", icon: Timer, label: "Simulation" },
  { to: "/lernplan", icon: CalendarDays, label: "Lernplan" },
  { to: "/analyse", icon: Radar, label: "Analyse" },
  { to: "/community", icon: Users, label: "Community" },
  { to: "/statistik", icon: BarChart3, label: "Statistik" },
  { to: "/notizen", icon: StickyNote, label: "Notizen" },
  { to: "/karteikarten", icon: Layers, label: "Karteikarten" },
  { to: "/duell", icon: Swords, label: "Duell" },
  { to: "/preise", icon: CreditCard, label: "Preise" },
];

interface SidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ mobileOpen, onClose }: SidebarProps) {
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

  return (
    <>
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />
      )}
      <aside
        className={cn(
          "fixed left-0 top-0 h-screen w-64 bg-primary-950 dark:bg-gray-950 text-white flex flex-col z-50 transition-transform",
          "lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="p-5 flex items-center justify-between border-b border-primary-800 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary-500 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight">MedMaster</h1>
              <p className="text-[10px] text-primary-300">MedAT Lernplattform</p>
            </div>
          </div>
          <button className="lg:hidden text-primary-300 hover:text-white cursor-pointer" onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  "flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary-700 dark:bg-primary-800 text-white"
                    : "text-primary-200 hover:bg-primary-800 dark:hover:bg-gray-800 hover:text-white"
                )
              }
            >
              <span className="flex items-center gap-3">
                <item.icon className="w-4.5 h-4.5 shrink-0" />
                {item.label}
              </span>
              {item.to === "/bms" && (
                <span className="flex items-center gap-1.5">
                  {bmsProgress > 0 && (
                    <span className="text-primary-300 text-[10px] font-medium">
                      {bmsProgress}%
                    </span>
                  )}
                  {dueCount > 0 && (
                    <span className="bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                      {dueCount}
                    </span>
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="p-3 border-t border-primary-800 dark:border-gray-800">
          <div className="text-[10px] text-primary-400 text-center">MedMaster v2.0</div>
        </div>
      </aside>
    </>
  );
}
