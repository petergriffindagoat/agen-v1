import Link from 'next/link'
import { cn } from '@/lib/utils'

/* ─────────────────────────────────────────────
   TYPES
   ───────────────────────────────────────────── */

export interface PostCardProps {
  title: string
  excerpt: string
  date: string
  tag: string
  slug: string
  readingTime: string
  featured?: boolean
  className?: string
}

/* ─────────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────────── */

function formatMonthYear(dateStr: string): string {
  // Treat YYYY-MM-DD as local time to avoid timezone shifts
  const normalized = /^\d{4}-\d{2}-\d{2}$/.test(dateStr)
    ? new Date(`${dateStr}T00:00:00`)
    : new Date(dateStr)
  return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(normalized)
}

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

export function PostCard({
  title,
  excerpt,
  date,
  tag,
  slug,
  readingTime,
  featured = false,
  className,
}: PostCardProps) {
  const formattedDate = formatMonthYear(date)

  if (featured) {
    return (
      <Link
        href={`/blog/${slug}`}
        className={cn(
          'group relative block bg-chalk border-2 border-ember rounded-lg p-10 shadow-md',
          'hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200',
          'focus-visible:outline-2 focus-visible:outline-ember focus-visible:outline-offset-2',
          className,
        )}
      >
        {/* Ember top accent bar */}
        <div
          aria-hidden="true"
          className="absolute inset-x-10 top-0 h-0.5 bg-ember"
        />

        {/* Tag + date row */}
        <div className="flex justify-between items-center mb-4">
          <span className="font-mono text-xs text-ember uppercase tracking-[0.12em]">
            {tag}
          </span>
          <span className="font-mono text-xs text-subtle">
            {formattedDate}
            <span className="ml-1">&middot; {readingTime}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-normal leading-snug text-graphite mt-3 mb-3">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="font-body text-base text-muted leading-normal mb-6 line-clamp-2">
          {excerpt}
        </p>

        {/* Read link */}
        <span className="text-sm font-medium text-ember underline underline-offset-[3px] decoration-[1px] group-hover:text-ember-dim transition-colors">
          Read &rarr;
        </span>
      </Link>
    )
  }

  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        'group relative block bg-chalk border border-[oklch(78%_0.008_75)] rounded-lg p-8 shadow-sm',
        'hover:shadow-md hover:-translate-y-0.5 transition-all duration-200',
        'focus-visible:outline-2 focus-visible:outline-ember focus-visible:outline-offset-2',
        className,
      )}
    >
      {/* Tag + date row */}
      <div className="flex justify-between items-center mb-4">
        <span className="font-mono text-xs text-ember uppercase tracking-[0.12em]">
          {tag}
        </span>
        <span className="font-mono text-xs text-subtle">
          {formattedDate}
          <span className="ml-1">&middot; {readingTime}</span>
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display text-xl font-normal leading-snug text-graphite mt-3 mb-3">
        {title}
      </h3>

      {/* Excerpt */}
      <p className="font-body text-base text-muted leading-normal mb-6 line-clamp-2">
        {excerpt}
      </p>

      {/* Read link */}
      <span className="text-sm font-medium text-ember underline underline-offset-[3px] decoration-[1px] group-hover:text-ember-dim transition-colors">
        Read &rarr;
      </span>
    </Link>
  )
}
