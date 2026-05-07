import Image from 'next/image'
import Link from 'next/link'

/* ─────────────────────────────────────────────
   TYPES
   ───────────────────────────────────────────── */

export interface PostHeaderProps {
  title: string
  excerpt: string
  date: string
  tag: string
  readingTime: string
  author: string
  authorAvatar?: string
}

/* ─────────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────────── */

function formatLongDate(dateStr: string): string {
  const normalized = /^\d{4}-\d{2}-\d{2}$/.test(dateStr)
    ? new Date(`${dateStr}T00:00:00`)
    : new Date(dateStr)
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(normalized)
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

export function PostHeader({
  title,
  excerpt,
  date,
  tag,
  readingTime,
  author,
  authorAvatar,
}: PostHeaderProps) {
  const formattedDate = formatLongDate(date)
  const initials = getInitials(author)

  return (
    <header>
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center font-body text-sm text-muted hover:text-graphite transition-colors focus-visible:outline-2 focus-visible:outline-ember focus-visible:outline-offset-2 rounded-sm"
      >
        &larr; Back to blog
      </Link>

      {/* Overline */}
      <p className="overline mt-8 mb-4">
        {tag.toUpperCase()} &middot; {readingTime.toUpperCase()}
      </p>

      {/* Title */}
      <h1 className="font-display text-3xl font-normal leading-tight tracking-tight text-graphite max-w-[40rem]">
        {title}
      </h1>

      {/* Excerpt / lede */}
      <p className="font-body text-md text-muted leading-normal max-w-[40rem] mt-4">
        {excerpt}
      </p>

      {/* Author row */}
      <div className="mt-8 flex items-center gap-3">
        {/* Avatar */}
        {authorAvatar ? (
          <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={authorAvatar}
              alt={author}
              fill
              className="object-cover"
              sizes="36px"
            />
          </div>
        ) : (
          <div
            className="bg-paper text-muted font-medium text-sm rounded-full w-9 h-9 flex items-center justify-center flex-shrink-0 select-none"
            aria-hidden="true"
          >
            {initials}
          </div>
        )}

        {/* Author name */}
        <span className="font-body text-sm font-medium text-graphite">
          {author}
        </span>

        {/* Separator */}
        <span className="text-subtle" aria-hidden="true">
          &middot;
        </span>

        {/* Date */}
        <time
          dateTime={date}
          className="font-body text-sm text-subtle"
        >
          {formattedDate}
        </time>
      </div>

      {/* Divider */}
      <hr className="mt-10 mb-0 border-t border-[oklch(85%_0.005_75)]" />
    </header>
  )
}
