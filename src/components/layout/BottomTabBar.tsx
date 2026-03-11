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
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 safe-area-pb"
      aria-label="Hauptnavigation"
    >
      <div className="bg-[var(--topbar-bg)] backdrop-blur-xl border-t border-[var(--border)] shadow-[0_-2px_12px_rgba(0,0,0,0.04)] dark:shadow-[0_-2px_12px_rgba(0,0,0,0.15)] pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-5 h-16 max-w-lg mx-auto">
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
                    "flex flex-col items-center justify-center gap-0.5 text-xs font-medium transition-colors duration-200 cursor-pointer",
                    isActive
                      ? "text-[var(--accent)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  )
                }
                aria-current={isActive ? "page" : undefined}
              >
                <span className="relative flex items-center justify-center w-10 h-8">
                  <Icon
                    className={cn(
                      "w-5 h-5 transition-transform duration-200",
                      isActive && "scale-105"
                    )}
                    strokeWidth={isActive ? 2.25 : 1.75}
                  />
                  {isActive && (
                    <motion.span
                      layoutId="bottomtab-indicator"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-[var(--accent)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </span>
                <span>{label}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
