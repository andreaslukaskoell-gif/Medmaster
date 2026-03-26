import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { LayoutDashboard, BookOpen, Brain, FileText, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { to: "/dashboard", label: "Home", icon: LayoutDashboard, end: true },
  { to: "/bms", label: "BMS", icon: BookOpen, end: false },
  { to: "/kff", label: "KFF", icon: Brain, end: false },
  { to: "/tv", label: "TV", icon: FileText, end: false },
  { to: "/sek", label: "SEK", icon: Heart, end: false },
] as const;

export function BottomTabBar() {
  const location = useLocation();
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 safe-area-pb"
      aria-label="Hauptnavigation"
    >
      <div className="bg-[var(--topbar-bg)]/95 backdrop-blur-xl border-t border-[var(--border)]/60 shadow-[0_-1px_8px_rgba(0,0,0,0.06)] dark:shadow-[0_-1px_8px_rgba(0,0,0,0.2)] pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-5 h-[3.75rem] max-w-lg mx-auto">
          {tabs.map((tab) => {
            const { to, label, icon: Icon, end } = tab;
            const isActive = end
              ? location.pathname === "/dashboard" || location.pathname === "/"
              : location.pathname.startsWith(to);
            return (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={() =>
                  cn(
                    "flex flex-col items-center justify-center gap-0.5 text-[11px] font-medium transition-all duration-200 cursor-pointer active:scale-90",
                    isActive
                      ? "text-[var(--accent)]"
                      : "text-[var(--muted)] active:text-[var(--foreground)]"
                  )
                }
                aria-current={isActive ? "page" : undefined}
              >
                <span className="relative flex items-center justify-center w-10 h-7">
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
  );
}
