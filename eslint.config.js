/**
 * ESLINT CONFIGURATION
 * This file is like a "spell-checker" for your code. 
 * It helps catch errors and enforces a consistent coding style across the project.
 */
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // Tell ESLint to ignore the 'dist' folder (where the built website goes)
  globalIgnores(['dist']),
  {
    // Apply these rules to all TypeScript and React files
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,           // Standard JavaScript rules
      tseslint.configs.recommended,     // TypeScript-specific rules
      reactHooks.configs.flat.recommended, // Best practices for React Hooks
      reactRefresh.configs.vite,        // Rules for fast refreshing during development
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,         // Allow browser-specific variables like 'window' or 'document'
    },
  },
])
