import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',          // already in the project root
  resolve: {
    alias: {
      // If you need to resolve @ or anything else, add here.
      // For most CRA → Vite migrations, you don’t need extra aliases.
    }
  }
})
