/**
 * VITE CONFIGURATION
 * Vite is the tool that powers the development server and builds the website.
 * This file tells Vite which plugins to use.
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),      // Enables React support (JSX, Fast Refresh)
    tailwindcss() // Enables the Tailwind CSS engine
  ],
})
