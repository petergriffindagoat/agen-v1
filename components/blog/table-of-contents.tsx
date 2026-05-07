'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

/* ─────────────────────────────────────────────
   TYPES
   ───────────────────────────────────────────── */

export interface TableOfContentsProps {
  headings: Array<{ id: string; text: string; level: 2 | 3 }>
}

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    if (headings.length === 0) return

    const headingElements = headings
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (headingElements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost visible heading and mark it active
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            // Sort by vertical position in viewport (top to bottom)
            return (
              a.boundingClientRect.top - b.boundingClientRect.top
            )
          })

        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        // Trigger when heading enters the upper portion of the viewport
        rootMargin: '0px 0px -70% 0px',
        threshold: 0,
      },
    )

    headingElements.forEach((el) => observer.observe(el))

    return () => {
      headingElements.forEach((el) => observer.unobserve(el))
    }
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav
      aria-label="Table of contents"
      className="sticky top-28"
    >
      {/* Title */}
      <p className="overline mb-4">In This Post</p>

      {/* Heading list */}
      <ol className="space-y-0.5 list-none m-0 p-0">
        {headings.map(({ id, text, level }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={cn(
                'block py-1 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-ember focus-visible:outline-offset-2 rounded-sm',
                level === 2
                  ? 'font-body text-sm'
                  : 'font-body text-sm pl-4',
                activeId === id
                  ? 'text-ember'
                  : level === 2
                  ? 'text-muted hover:text-graphite'
                  : 'text-subtle hover:text-muted',
              )}
              onClick={(e) => {
                e.preventDefault()
                const target = document.getElementById(id)
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  // Update active immediately on click
                  setActiveId(id)
                  // Push the hash to history without a page jump
                  window.history.pushState(null, '', `#${id}`)
                }
              }}
            >
              {text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
