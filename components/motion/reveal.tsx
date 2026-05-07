'use client'

import { useReducedMotion, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

/* ─────────────────────────────────────────────
   SHARED EASING
   ───────────────────────────────────────────── */

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

/* ─────────────────────────────────────────────
   REVEAL
   Single element — fade-up on scroll into view.
   ───────────────────────────────────────────── */

export interface RevealProps {
  children: React.ReactNode
  /** Delay in milliseconds before animation begins */
  delay?: number
  className?: string
  /** Whether animation should only fire once (default true) */
  once?: boolean
}

export function Reveal({ children, delay = 0, className, once = true }: RevealProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-10%' }}
      transition={{
        duration: 0.6,
        delay: delay / 1000,
        ease: EASE_OUT_EXPO,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   REVEAL STAGGER
   Parent that staggers child RevealItem animations.
   ───────────────────────────────────────────── */

export interface RevealStaggerProps {
  children: React.ReactNode
  /** Delay between each child in milliseconds (default 80) */
  staggerDelay?: number
  className?: string
}

export function RevealStagger({ children, staggerDelay = 80, className }: RevealStaggerProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay / 1000,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   REVEAL ITEM
   Direct child of RevealStagger.
   ───────────────────────────────────────────── */

export interface RevealItemProps {
  children: React.ReactNode
  className?: string
}

export function RevealItem({ children, className }: RevealItemProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={cn(className)}>{children}</div>
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: EASE_OUT_EXPO,
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
