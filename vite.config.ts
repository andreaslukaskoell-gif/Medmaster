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
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor: React ecosystem
          'vendor-react': [
            'react',
            'react-dom',
            'react-router-dom',
          ],
          // Vendor: UI libraries
          'vendor-ui': [
            'recharts',
            'lucide-react',
          ],
          // BMS question data (largest data payload)
          'data-bms': [
            './src/data/bms/biologie.ts',
            './src/data/bms/chemie.ts',
            './src/data/bms/physik.ts',
            './src/data/bms/mathematik.ts',
          ],
          // Pure stichworte data — no app imports; breaks data-stichwort ↔ data-stichwortliste cycle
          'data-stichworte-base': [
            './src/data/stichworteData.ts',
          ],
          // Stichwort questions data (imports stichworteData only, not stichwortliste)
          'data-stichwort': [
            './src/data/questions/index.ts',
          ],
          // TV + SEK + KFF data
          'data-other': [
            './src/data/tvTextsExpanded.ts',
            './src/data/tvTextsExpanded2.ts',
            './src/data/sekDataNew.ts',
            './src/data/kffGenerators.ts',
          ],
          // Flashcards data
          'data-flashcards': [
            './src/data/flashcards.ts',
            './src/data/flashcards_expanded.ts',
            './src/data/flashcards_expanded2.ts',
            './src/data/flashcards_expanded3.ts',
            './src/data/flashcards_expanded4.ts',
          ],
          // Stichwortliste + adaptive store (shared by many pages)
          'data-stichwortliste': [
            './src/data/stichwortliste.ts',
            './src/store/adaptiveLearning.ts',
          ],
        },
      },
    },
  },
})
