import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { LayoutDashboard, BookOpen, Brain, FileText, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    to: "/dashboard",
    label: "Home",
    icon: LayoutDashboard,
    end: true,
    activeColor: "text-primary-600 dark:text-primary-400",
    activeBg: "bg-primary-500/10 dark:bg-primary-500/20",
    indicatorColor: "bg-primary-500 dark:bg-primary-400",
  },
  {
    to: "/bms",
    label: "BMS",
    icon: BookOpen,
    end: false,
    activeColor: "text-emerald-600 dark:text-emerald-400",
    activeBg: "bg-emerald-500/10 dark:bg-emerald-500/20",
    indicatorColor: "bg-emerald-500 dark:bg-emerald-400",
  },
  {
    to: "/kff",
    label: "KFF",
    icon: Brain,
    end: false,
    activeColor: "text-pink-600 dark:text-pink-400",
    activeBg: "bg-pink-500/10 dark:bg-pink-500/20",
    indicatorColor: "bg-pink-500 dark:bg-pink-400",
  },
  {
    to: "/tv",
    label: "TV",
    icon: FileText,
    end: false,
    activeColor: "text-amber-600 dark:text-amber-400",
    activeBg: "bg-amber-500/10 dark:bg-amber-500/20",
    indicatorColor: "bg-amber-500 dark:bg-amber-400",
  },
  {
    to: "/sek",
    label: "SEK",
    icon: Heart,
    end: false,
    activeColor: "text-rose-600 dark:text-rose-400",
    activeBg: "bg-rose-500/10 dark:bg-rose-500/20",
    indicatorColor: "bg-rose-500 dark:bg-rose-400",
  },
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
            const { to, label, icon: Icon, end, activeColor, activeBg, indicatorColor } = tab;
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
                      ? `${activeColor} ${activeBg}`
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  )
                }
                aria-current={isActive ? "page" : undefined}
              >
                <span className="relative flex items-center justify-center w-10 h-8">
                  <Icon
                    className={cn(
                      "w-6 h-6 transition-transform duration-200",
                      isActive && "scale-110"
                    )}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  {isActive && (
                    <motion.span
                      layoutId="bottomtab-indicator"
                      className={cn(
                        "absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full",
                        indicatorColor
                      )}
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
