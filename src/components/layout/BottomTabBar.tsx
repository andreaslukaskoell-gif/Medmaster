import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  Brain,
  FileText,
  MoreHorizontal,
  Heart,
  Dumbbell,
  Timer,
  CalendarDays,
  BarChart3,
  BookMarked,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { hapticLight } from "@/lib/haptics";

const tabs = [
  { to: "/dashboard", label: "Home", icon: LayoutDashboard, end: true },
  { to: "/bms", label: "BMS", icon: BookOpen, end: false },
  { to: "/kff", label: "KFF", icon: Brain, end: false },
  { to: "/tv", label: "TV", icon: FileText, end: false },
  { to: "more", label: "Mehr", icon: MoreHorizontal, end: false },
] as const;

const moreItems = [
  { to: "/sek", label: "SEK", icon: Heart },
  { to: "/fragen-trainer", label: "Fragen-Trainer", icon: Dumbbell },
  { to: "/simulation", label: "Simulation", icon: Timer },
  { to: "/lernplan", label: "Lernplan", icon: CalendarDays },
  { to: "/fortschritt", label: "Fortschritt", icon: BarChart3 },
  { to: "/formelsammlung", label: "Formelsammlung", icon: BookMarked },
];

export function BottomTabBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [moreOpen, setMoreOpen] = useState(false);

  // Check if current path matches any "more" item
  const isMoreActive = moreItems.some((item) => location.pathname.startsWith(item.to));

  return (
    <>
      {/* More sheet backdrop */}
      <AnimatePresence>
        {moreOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[59] bg-black/40 backdrop-blur-sm"
            onClick={() => setMoreOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* More sheet */}
      <AnimatePresence>
        {moreOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
            className="fixed bottom-0 left-0 right-0 z-[61] bg-[var(--topbar-bg)] border-t border-[var(--border)] rounded-t-2xl shadow-2xl"
          >
            <div className="flex items-center justify-between px-5 pt-4 pb-2">
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">Mehr</h3>
              <button
                onClick={() => setMoreOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[var(--surface)] cursor-pointer"
              >
                <X className="w-4 h-4 text-[var(--muted)]" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-1 px-3 pb-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
              {moreItems.map((item) => {
                const Icon = item.icon;
                const active = location.pathname.startsWith(item.to);
                return (
                  <button
                    key={item.to}
                    onClick={() => {
                      hapticLight();
                      setMoreOpen(false);
                      navigate(item.to);
                    }}
                    className={cn(
                      "flex flex-col items-center gap-1.5 py-3 rounded-xl cursor-pointer active:scale-95 transition-all min-h-[64px]",
                      active
                        ? "bg-[var(--accent)]/8 text-[var(--accent)]"
                        : "text-[var(--text-secondary)] hover:bg-[var(--surface)]"
                    )}
                  >
                    <Icon className="w-5 h-5" strokeWidth={active ? 2.25 : 1.75} />
                    <span className="text-[11px] font-medium leading-none">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom tab bar */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-[60] safe-area-pb"
        aria-label="Hauptnavigation"
      >
        <div className="bg-[var(--topbar-bg)]/95 backdrop-blur-xl border-t border-[var(--border)]/60 shadow-[0_-1px_8px_rgba(0,0,0,0.06)] dark:shadow-[0_-1px_8px_rgba(0,0,0,0.2)] pb-[env(safe-area-inset-bottom)]">
          <div className="grid grid-cols-5 h-16">
            {tabs.map((tab) => {
              const { to, label, icon: Icon, end } = tab;

              // "More" tab is special
              if (to === "more") {
                const active = isMoreActive || moreOpen;
                return (
                  <button
                    key="more"
                    onClick={() => {
                      hapticLight();
                      setMoreOpen((o) => !o);
                    }}
                    className={cn(
                      "flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition-all duration-200 cursor-pointer active:scale-90 min-h-[48px]",
                      active
                        ? "text-[var(--accent)]"
                        : "text-[var(--muted)] active:text-[var(--foreground)]"
                    )}
                  >
                    <span className="relative flex items-center justify-center w-12 h-8">
                      <Icon
                        className={cn("w-[22px] h-[22px] transition-all duration-200", active && "scale-110")}
                        strokeWidth={active ? 2.25 : 1.75}
                      />
                      {active && (
                        <motion.span
                          layoutId="bottomtab-indicator"
                          className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-5 h-[3px] rounded-full bg-[var(--accent)]"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </span>
                    <span className={cn("leading-none", active && "font-semibold")}>{label}</span>
                  </button>
                );
              }

              const isActive = end
                ? location.pathname === "/dashboard" || location.pathname === "/"
                : location.pathname.startsWith(to);
              return (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  onClick={() => {
                    hapticLight();
                    setMoreOpen(false);
                  }}
                  className={() =>
                    cn(
                      "flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition-all duration-200 cursor-pointer active:scale-90 min-h-[48px]",
                      isActive
                        ? "text-[var(--accent)]"
                        : "text-[var(--muted)] active:text-[var(--foreground)]"
                    )
                  }
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="relative flex items-center justify-center w-12 h-8">
                    <Icon
                      className={cn(
                        "w-[22px] h-[22px] transition-all duration-200",
                        isActive && "scale-110"
                      )}
                      strokeWidth={isActive ? 2.25 : 1.75}
                    />
                    {isActive && (
                      <motion.span
                        layoutId="bottomtab-indicator"
                        className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-5 h-[3px] rounded-full bg-[var(--accent)]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </span>
                  <span className={cn("leading-none", isActive && "font-semibold")}>{label}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
