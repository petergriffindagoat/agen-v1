import type { Config } from 'tailwindcss'

// In Tailwind v4 the design tokens live in CSS (@theme in globals.css).
// This file only declares the content paths so Tailwind knows which files
// to scan for utility class names.
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
}

export default config
