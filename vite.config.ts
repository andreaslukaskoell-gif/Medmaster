import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
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
    drop: ["console", "debugger"],
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
          // BMS chapter data — split by subject for better caching
          if (id.includes("src/data/bmsKapitel")) {
            if (id.includes("/biologie/")) return "bms-biologie";
            if (id.includes("/chemie/")) return "bms-chemie";
            if (id.includes("/physik/")) return "bms-physik";
            if (id.includes("/mathematik/")) return "bms-mathematik";
            return "bms-data";
          }
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
          }
        },
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
