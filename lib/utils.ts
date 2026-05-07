import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS classes with conflict resolution.
 * Combines clsx (conditional classes) + tailwind-merge (deduplication).
 *
 * @example
 * cn('px-4 py-2', isActive && 'bg-ember', className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/**
 * Format a date string or Date object into a human-readable string.
 *
 * @param date - ISO date string or Date object
 * @param options - Intl.DateTimeFormatOptions (default: long month, numeric day+year)
 * @returns Formatted date string, e.g. "January 15, 2025"
 *
 * @example
 * formatDate('2025-01-15')           // "January 15, 2025"
 * formatDate('2025-01-15', 'short')  // "Jan 15, 2025"
 * formatDate('2025-01-15', 'numeric') // "1/15/2025"
 */
export function formatDate(
  date: string | Date,
  style: 'long' | 'short' | 'numeric' | Intl.DateTimeFormatOptions = 'long',
): string {
  const d = typeof date === 'string' ? new Date(date) : date

  // Treat the date as local time if it looks like YYYY-MM-DD (no time component)
  // so that timezone offsets don't shift the displayed day.
  const normalized =
    typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date)
      ? new Date(`${date}T00:00:00`)
      : d

  if (typeof style === 'object') {
    return new Intl.DateTimeFormat('en-US', style).format(normalized)
  }

  const presets: Record<string, Intl.DateTimeFormatOptions> = {
    long: { month: 'long', day: 'numeric', year: 'numeric' },
    short: { month: 'short', day: 'numeric', year: 'numeric' },
    numeric: { month: 'numeric', day: 'numeric', year: 'numeric' },
  }

  return new Intl.DateTimeFormat('en-US', presets[style]).format(normalized)
}

/**
 * Clamp a number between min and max (inclusive).
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/**
 * Slugify a string for use in URLs.
 *
 * @example
 * slugify('Hello World!')  // "hello-world"
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Truncate a string to a given character length, appending an ellipsis.
 *
 * @example
 * truncate('A very long sentence here.', 20) // "A very long sentence…"
 */
export function truncate(str: string, length: number): string {
  if (str.length <= length) return str
  return str.slice(0, length).trimEnd() + '…'
}
