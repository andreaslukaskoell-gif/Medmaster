import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    watch: {
      usePolling: false,
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: true, // esbuild (default); use 'terser' + npm i -D terser if preferred
    rollupOptions: {
      output: {
        manualChunks: {
          'main-vendor': ['react', 'react-dom', 'react-router-dom', 'zustand'],
        },
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
})
