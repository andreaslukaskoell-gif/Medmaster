# Technology Stack

**Analysis Date:** 2026-02-19

## Languages

**Primary:**
- TypeScript 5.9.3 - All source code (`src/`) with strict mode enabled
- TSX/JSX - React components with React 19

**Secondary:**
- JavaScript - Configuration files (vite, eslint, etc.)

## Runtime

**Environment:**
- Node.js >= 20.0.0 (enforced in `package.json` engines)

**Package Manager:**
- npm
- Lockfile: `package-lock.json` (present)

## Frameworks

**Core:**
- React 19.2.0 - UI framework
- React Router DOM 7.13.0 - Client-side routing
- Vite 7.3.1 - Build tool and dev server
- TypeScript 5.9.3 - Static type checking

**UI/Styling:**
- Tailwind CSS 4.1.18 - Utility-first CSS framework
- @tailwindcss/vite 4.1.18 - Vite plugin for Tailwind
- @tailwindcss/typography 0.5.19 - Typography plugin
- Radix UI 1.4.3 - Headless component library
- @radix-ui/react-slot 1.2.3 - Slot composition helper
- Lucide React 0.563.0 - SVG icon library
- CVA (class-variance-authority) 0.7.1 - Type-safe component variants
- clsx 2.1.1 - Utility for conditional className merging
- tailwind-merge 3.4.0 - Merges Tailwind CSS classes

**Animation:**
- Framer Motion 12.34.1 - React animation library

**Data Visualization:**
- Recharts 3.7.0 - React chart component library

**State Management:**
- Zustand 5.0.11 - Lightweight state management
- React Context API - For breadcrumb and sync status state

**Content Rendering:**
- React Markdown 10.1.0 - Markdown to React components
- remark-gfm 4.0.1 - GitHub Flavored Markdown plugin

## Key Dependencies

**Critical:**
- @supabase/supabase-js 2.95.3 - Database, authentication, and real-time sync

**Build & Compilation:**
- @vitejs/plugin-react 5.1.1 - React Fast Refresh support
- terser 5.46.0 - JavaScript minification

## Development Dependencies

**Linting & Type Checking:**
- ESLint 9.39.1 - JavaScript/TypeScript linter
- @eslint/js 9.39.1 - ESLint core configurations
- typescript-eslint 8.48.0 - TypeScript linting support
- eslint-plugin-react-hooks 7.0.1 - React Hooks linting rules
- eslint-plugin-react-refresh 0.4.24 - Fast Refresh linting

**Code Formatting:**
- Prettier 3.4.2 - Code formatter with config at `.prettierrc`
  - Semi-colons enabled
  - Double quotes
  - Tab width: 2 spaces
  - Trailing commas: ES5 style
  - Print width: 100 characters

**Type Support:**
- @types/react 19.2.7 - React type definitions
- @types/react-dom 19.2.3 - React DOM type definitions
- @types/node 24.10.13 - Node.js type definitions
- globals 16.5.0 - Global type definitions

## Configuration

**Environment:**
- Vite environment variables use `VITE_*` prefix (exposed to client)
- Required vars (checked at runtime):
  - `VITE_SUPABASE_URL` - Supabase project URL
  - `VITE_SUPABASE_ANON_KEY` - Supabase anonymous key
- Optional vars:
  - `SUPABASE_SERVICE_ROLE_KEY` - Used only in seed scripts (never in frontend)
- `.env`, `.env.local` files support (Vite managed)

**Build:**
- `vite.config.ts` - Main build configuration
  - Output: `dist/` directory
  - Minification: esbuild (default) with terser available
  - Source maps: disabled
  - Code splitting: manual chunks for vendor libraries (react, react-dom, react-router-dom, zustand)
  - Path alias: `@/*` → `./src/*`

**TypeScript:**
- `tsconfig.json` - Root config with references
- `tsconfig.app.json` - Application config (ES2022 target, DOM libs)
- `tsconfig.node.json` - Build tools config (ES2023 target)
- Strict mode enabled with additional rules:
  - `noUnusedLocals`
  - `noUnusedParameters`
  - `erasableSyntaxOnly`
  - `noFallthroughCasesInSwitch`
  - `noUncheckedSideEffectImports`

**Linting:**
- `eslint.config.js` - ESLint flat config format
  - Extends: `@eslint/js`, `typescript-eslint`, react-hooks, react-refresh
  - Targets: `**/*.{ts,tsx}`

## Build Commands

```bash
npm run dev       # Start Vite dev server with hot reload
npm run build     # TypeScript check + Vite production build
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
npm run shipit    # Git add/commit/push (custom)
```

## Platform Requirements

**Development:**
- Node.js >= 20.0.0
- npm
- Text editor with TypeScript support recommended

**Production:**
- Static hosting (Vercel, Netlify, etc.)
- Vite generates static `dist/` folder
- Environment variables set on host platform

---

*Stack analysis: 2026-02-19*
