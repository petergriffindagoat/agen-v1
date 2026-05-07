import { Fraunces, JetBrains_Mono, DM_Sans } from 'next/font/google'

export const instrumentSerif = Fraunces({
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

/**
 * JetBrains Mono — Code / label / overline font
 * Loaded from Google Fonts.
 * Used for: code blocks, overlines, badges, technical labels.
 */
export const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

/**
 * General Sans — Primary UI / body font
 *
 * The production font is General Sans from Fontshare.
 * To use it: download from https://www.fontshare.com/fonts/general-sans
 * and place woff2 files in /public/fonts/, then swap this to localFont.
 *
 * Currently using DM Sans (Google Fonts) as a close humanist sans-serif
 * substitute until the font files are placed in /public/fonts/.
 *
 * Used for: body copy, navigation, UI labels, captions.
 */
export const generalSans = DM_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-general-sans',
  display: 'swap',
})

/**
 * Convenience: array of all font class names to spread onto <html>.
 *
 * Usage in app/layout.tsx:
 * ```tsx
 * import { fontClassNames } from '@/lib/fonts'
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html className={fontClassNames}>
 *       ...
 *     </html>
 *   )
 * }
 * ```
 */
export const fontClassNames = [
  instrumentSerif.variable,
  jetbrainsMono.variable,
  generalSans.variable,
].join(' ')
