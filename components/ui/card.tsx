import { cn } from '@/lib/utils'

export type CardVariant = 'default' | 'featured' | 'dark'

export interface CardProps {
  children: React.ReactNode
  variant?: CardVariant
  className?: string
  hover?: boolean
}

const variantBase: Record<CardVariant, string> = {
  default: [
    'bg-chalk border border-[oklch(78%_0.008_75)] rounded-lg p-8 shadow-sm',
  ].join(' '),

  featured: [
    'bg-chalk border-2 border-ember rounded-lg p-8 shadow-md relative overflow-hidden',
  ].join(' '),

  dark: [
    'bg-soot border border-[oklch(25%_0.005_75)] rounded-lg p-8 shadow-dark-sm text-on-dark',
  ].join(' '),
}

const hoverClasses: Record<CardVariant, string> = {
  default: 'hover:shadow-md hover:-translate-y-0.5 transition-all duration-200',
  featured: 'hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200',
  dark: 'hover:shadow-dark-md hover:-translate-y-0.5 transition-all duration-200',
}

export function Card({ children, variant = 'default', className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        variantBase[variant],
        hover && hoverClasses[variant],
        className,
      )}
    >
      {/* Featured top accent bar */}
      {variant === 'featured' && (
        <div
          aria-hidden="true"
          className="absolute inset-x-6 top-0 h-0.5 bg-ember"
        />
      )}
      {children}
    </div>
  )
}
