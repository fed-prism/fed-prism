import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 7358, // UI dev server (different from FedPrism server port 7357)
    proxy: {
      '/api': 'http://localhost:7357',
      '/ws': {
        target: 'ws://localhost:7357',
        ws: true,
      },
    },
  },
})
