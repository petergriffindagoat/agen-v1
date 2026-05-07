import { cn } from '@/lib/utils'

type SectionVariant = 'light' | 'dark' | 'accent'

interface SectionProps {
  children: React.ReactNode
  variant?: SectionVariant
  noise?: boolean
  id?: string
  className?: string
  'aria-labelledby'?: string
}

const variantClasses: Record<SectionVariant, string> = {
  light: 'section-light',
  dark: 'section-dark',
  accent: 'section-tinted',
}

/**
 * Inline SVG noise texture as a data URI.
 * A small 200×200 fractalNoise tile tiled at low opacity.
 */
const NOISE_SVG = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/></filter><rect width='200' height='200' filter='url(%23n)' opacity='1'/></svg>`

export function Section({
  children,
  variant = 'light',
  noise = false,
  id,
  className,
  'aria-labelledby': ariaLabelledby,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn('relative', variantClasses[variant], className)}
    >
      {noise && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: `url("${NOISE_SVG}")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
            opacity: 0.03,
          }}
        />
      )}
      <div className="relative z-[1]">{children}</div>
    </section>
  )
}
