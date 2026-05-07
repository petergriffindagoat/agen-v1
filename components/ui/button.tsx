import { cn } from '@/lib/utils'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

/* ─────────────────────────────────────────────
   TYPES
   ───────────────────────────────────────────── */

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  disabled?: boolean
  children: React.ReactNode
  className?: string
  href?: string
  /** When true, passes all rendering to children (slot pattern) */
  asChild?: boolean
}

/* ─────────────────────────────────────────────
   STYLE MAPS
   ───────────────────────────────────────────── */

const variantBase: Record<ButtonVariant, string> = {
  primary: [
    'bg-volt text-graphite font-semibold tracking-wide rounded-md',
    'hover:bg-volt-hover hover:-translate-y-px active:translate-y-0',
    'transition-all duration-100',
    'disabled:bg-paper disabled:text-subtle disabled:cursor-not-allowed disabled:translate-y-0',
  ].join(' '),

  secondary: [
    'bg-transparent text-ember border border-ember font-semibold tracking-wide rounded-md',
    'hover:bg-ember hover:text-chalk',
    'transition-all duration-100',
    'disabled:border-subtle disabled:text-subtle disabled:cursor-not-allowed disabled:hover:bg-transparent',
  ].join(' '),

  ghost: [
    'bg-transparent text-graphite font-medium rounded-md',
    'hover:bg-paper/60',
    'transition-colors duration-100',
    'disabled:opacity-40 disabled:cursor-not-allowed',
  ].join(' '),

  link: [
    'bg-transparent text-ember font-medium underline underline-offset-[3px] decoration-[1px]',
    'hover:text-ember-dim',
    'transition-colors duration-100',
    'disabled:opacity-40 disabled:cursor-not-allowed',
  ].join(' '),
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-md',
}

const focusClasses =
  'focus-visible:outline-2 focus-visible:outline-ember focus-visible:outline-offset-2'

/* ─────────────────────────────────────────────
   SPINNER
   ───────────────────────────────────────────── */

function Spinner() {
  return (
    <span
      aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center"
    >
      <span
        className="w-4 h-4 border-2 border-graphite border-t-transparent rounded-full animate-spin"
        style={{ animation: 'spin 0.7s linear infinite' }}
      />
    </span>
  )
}

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

type AnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonProps>
type NativeButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonProps>

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  children,
  className,
  href,
  asChild: _asChild,
  ...rest
}: ButtonProps & (AnchorProps | NativeButtonProps)) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 select-none relative',
    variantBase[variant],
    sizeClasses[size],
    focusClasses,
    loading && 'pointer-events-none text-transparent',
    className,
  )

  if (href) {
    const anchorRest = rest as AnchorProps
    return (
      <a
        href={href}
        className={classes}
        aria-disabled={disabled || loading || undefined}
        {...anchorRest}
      >
        {children}
        {loading && <Spinner />}
      </a>
    )
  }

  const buttonRest = rest as NativeButtonProps
  return (
    <button
      type="button"
      disabled={disabled || loading}
      className={classes}
      aria-busy={loading || undefined}
      {...buttonRest}
    >
      {children}
      {loading && <Spinner />}
    </button>
  )
}
