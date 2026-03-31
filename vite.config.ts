import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgo from "vite-plugin-svgo";
import path from "path";
import { readFileSync } from "fs";

const pkg = JSON.parse(readFileSync("./package.json", "utf-8"));

export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
  plugins: [react(), tailwindcss(), svgo()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    watch: {
      usePolling: false,
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  esbuild: {
    drop: ["debugger"],
    pure: ["console.log", "console.warn"],
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
    chunkSizeWarningLimit: 3000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // BMS question pools — heavy data, lazy-load only
          if (id.includes("src/data/bms/")) {
            if (id.includes("biologie")) return "bms-questions-bio";
            if (id.includes("chemie")) return "bms-questions-chem";
            if (id.includes("physik")) return "bms-questions-phys";
            if (id.includes("mathematik")) return "bms-questions-math";
            return "bms-questions";
          }
          // Stichwort questions — heavy data, lazy-load only
          if (id.includes("src/data/questions/")) return "stichwort-questions";
          if (id.includes("src/data/stichworteData")) return "stichwort-questions";
          // BMS chapter data — split by subject for better caching
          if (id.includes("src/data/bmsKapitel")) {
            if (id.includes("/biologie/")) return "bms-biologie";
            if (id.includes("/chemie/")) return "bms-chemie";
            if (id.includes("/physik/")) return "bms-physik";
            if (id.includes("/mathematik/")) return "bms-mathematik";
            return "bms-data";
          }
          // KFF pools — large pre-generated data, always lazy-loaded
          if (id.includes("kffFiguren1000_chunk1")) return "kff-figuren-1";
          if (id.includes("kffFiguren1000_chunk2")) return "kff-figuren-2";
          if (id.includes("kffFiguren1000_chunk3")) return "kff-figuren-3";
          if (id.includes("kffFiguren1000_chunk4")) return "kff-figuren-4";
          if (id.includes("kffImplikationen1000")) return "kff-implikationen-pool";
          if (id.includes("kffZahlenfolgen1000")) return "kff-zahlenfolgen-pool";
          // Vendor splits
          if (id.includes("node_modules")) {
            if (id.includes("react-dom") || id.includes("react-router-dom")) return "vendor-react";
            if (id.includes("/react/")) return "vendor-react";
            if (id.includes("zustand")) return "vendor-state";
            if (id.includes("framer-motion")) return "vendor-motion";
            if (id.includes("@supabase")) return "vendor-supabase";
            if (id.includes("recharts")) return "vendor-recharts";
            if (id.includes("react-markdown") || id.includes("remark-gfm"))
              return "vendor-markdown";
            if (id.includes("@sentry")) return "vendor-sentry";
            if (id.includes("lucide-react")) return "vendor-icons";
            if (id.includes("mafs")) return "vendor-mafs";
            if (id.includes("smiles-drawer")) return "vendor-smiles";
          }
        },
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
