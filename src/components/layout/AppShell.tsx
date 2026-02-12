import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

export function AppShell() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-surface dark:bg-gray-950">
      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <div className="lg:ml-64">
        <TopBar onMenuToggle={() => setMobileOpen(!mobileOpen)} />
        <main className="p-4 lg:p-6 page-transition" key={location.pathname}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
