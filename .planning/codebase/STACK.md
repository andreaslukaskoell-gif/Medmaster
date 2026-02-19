# Technology Stack

**Analysis Date:** 2026-02-19

## Languages

**Primary:**
- TypeScript 5.9.3 - All application code, type safety required
- TSX - React components with TypeScript

**Secondary:**
- JavaScript (ES2022) - Transpilation target in build

## Runtime

**Environment:**
- Node.js 20.0.0 or higher - Development and build environment

**Package Manager:**
- npm - Dependency management
- Lockfile: `package-lock.json` (present)

## Frameworks

**Core:**
- React 19.2.0 - UI library and rendering engine
- React Router 7.13.0 - Client-side routing and navigation
- Vite 7.3.1 - Build tool and development server

**Styling:**
- Tailwind CSS 4.1.18 - Utility-first CSS framework
- @tailwindcss/vite 4.1.18 - Vite plugin for Tailwind
- @tailwindcss/typography 0.5.19 - Typography plugin for markdown/content styling
- class-variance-authority 0.7.1 - Component variant management
- clsx 2.1.1 - Conditional className utility
- tailwind-merge 3.4.0 - Intelligent Tailwind class merging

**UI Components:**
- Radix UI 1.4.3 - Headless UI components
- @radix-ui/react-slot 1.2.3 - Slot composition primitive
- Lucide React 0.563.0 - Icon library

**Animations:**
- Framer Motion 12.34.1 - React animation library

**Content Rendering:**
- React Markdown 10.1.0 - Markdown to React component rendering
- remark-gfm 4.0.1 - GitHub Flavored Markdown support for remark

**Data Visualization:**
- Recharts 3.7.0 - React charting library for performance analytics

## State Management

**Framework:**
- Zustand 5.0.11 - Lightweight state management
- Zustand persist middleware - localStorage persistence
- Zustand custom storage wrapper - Safe localStorage with error handling

**Store Locations:**
- `src/store/` - Main state management (useStore, adaptiveLearning, quizSessionStore, interleaving)
- `src/stores/` - Feature-specific stores (syncStatus, kffStore)

## Database & Data Persistence

**Database:**
- Supabase PostgreSQL - Remote data persistence
- @supabase/supabase-js 2.95.3 - Supabase client library

**Authentication:**
- Supabase Auth - User authentication with email/password and Google OAuth

**Client-Side Storage:**
- localStorage - Session persistence, offline queue, backup data
- No IndexedDB or SessionStorage used

## Build & Development

**Build System:**
- Vite 7.3.1 - Fast build tool with HMR
- TypeScript Compiler (tsc) - Type checking pre-build

**Minification & Optimization:**
- Terser 5.46.0 - Code minification (fallback option)
- Vite esbuild - Default minification
- Rollup configuration - Manual chunk splitting for vendors

**Development Server:**
- Vite dev server with file watch (polling disabled)

## Code Quality

**Linting:**
- ESLint 9.39.1 - JavaScript/TypeScript linting
- @eslint/js 9.39.1 - Core ESLint rules
- typescript-eslint 8.48.0 - TypeScript ESLint integration
- eslint-plugin-react-hooks 7.0.1 - React Hooks linting
- eslint-plugin-react-refresh 0.4.24 - React Refresh validation

**Formatting:**
- Prettier 3.4.2 - Code formatting (no explicit configuration file, uses defaults)

## Configuration

**Environment:**
- Vite environment variables (VITE_* prefix)
- `.env.local` - Local environment configuration (ignored by git)
- `.env.example` - Template for environment variables

**Required Environment Variables:**
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Supabase anonymous API key

**Configuration Files:**
- `vite.config.ts` - Vite build and dev server configuration
- `tsconfig.json` - TypeScript compiler configuration (references app and node configs)
- `tsconfig.app.json` - App-specific TypeScript configuration (ES2022 target, DOM + DOM.Iterable)
- `tsconfig.node.json` - Node-specific TypeScript configuration
- `eslint.config.js` - ESLint configuration (flat config format)

## Build Output

**Build Target:** ES2022

**Output Directory:** `dist/`

**Build Command:** `npm run build` (runs `tsc -b && vite build`)

**Development:** `npm run dev` (Vite dev server on localhost:5173)

**Bundling Strategy:**
- Manual vendor chunk splitting: `main-vendor` includes React, React-DOM, React Router, Zustand
- Source maps disabled in production
- esbuild minification enabled

## Deployment

**Hosting Platform:**
- Vercel - Production deployment
- Configuration: `vercel.json` with SPA rewrite rules

**Build Configuration:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Type Definitions

**@types packages:**
- @types/node 24.10.13 - Node.js type definitions
- @types/react 19.2.7 - React type definitions
- @types/react-dom 19.2.3 - React-DOM type definitions

## Unimplemented/Placeholder Integrations

**Payment Processing:**
- Stripe configuration exists in `src/lib/stripe.ts` with pricing definitions
- Status: Configuration only, no active checkout implementation
- TODO: Requires Supabase Edge Function implementation

---

*Stack analysis: 2026-02-19*
