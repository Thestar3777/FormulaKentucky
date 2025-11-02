import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/FormulaKentucky/",
  plugins: [react()],
  server: {
    open: true,
    port: 3001,
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      }
    }
  }
})

