/**
 * AppLayout — thin semantic wrapper that documents the layout contract.
 *
 * The actual implementation lives in AppShell (which handles sidebar, topbar,
 * mobile drawer, gamification overlays, etc.).
 *
 * Use this file to override layout-level CSS or add portal-level providers
 * that shouldn't live in AppShell.
 *
 * Structure (Desktop):
 *   ┌──────────────────────────────────────────────────────────┐
 *   │ Sidebar (240px, sticky, glass)  │  TopBar (60px)         │
 *   │                                 │──────────────────────  │
 *   │  Nav grouped by subject         │  <Outlet /> (max-w-4xl)│
 *   │                                 │                        │
 *   └──────────────────────────────────────────────────────────┘
 *
 * Mobile:
 *   TopBar (hamburger) → Sidebar as Drawer
 *   BottomTabBar for primary navigation
 */
export { AppShell as AppLayout } from "@/components/layout/AppShell"
