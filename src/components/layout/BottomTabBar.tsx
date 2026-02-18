import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { LayoutDashboard, BookOpen, User } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { to: "/", label: "Home", icon: LayoutDashboard },
  { to: "/bms", label: "Training", icon: BookOpen },
  { to: "/performance", label: "Profil", icon: User },
] as const;

export function BottomTabBar() {
  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 safe-area-pb"
      aria-label="Hauptnavigation"
    >
      <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-t border-slate-200/80 dark:border-slate-700/50 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.2)] pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-3 h-14 max-w-lg mx-auto">
          {tabs.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                cn(
                  "flex flex-col items-center justify-center gap-0.5 text-xs font-medium transition-colors duration-200 cursor-pointer",
                  isActive
                    ? "text-primary-600 dark:text-primary-400 bg-primary-500/10 dark:bg-primary-500/20"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
                )
              }
            >
              {({ isActive }) => (
                <>
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
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-primary-500 dark:bg-primary-400"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </span>
                  <span>{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
