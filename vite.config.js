import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves project sites under /<repo-name>/ — match it so
  // built asset URLs resolve. Falls back to '/' for local dev via Vite env.
  base: process.env.GITHUB_PAGES ? '/ai-Harryweb-/' : '/',
})
