import { cn } from '@/lib/utils'

export type BadgeVariant = 'default' | 'ember' | 'success' | 'warning' | 'error'

export interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-paper text-subtle',
  ember: 'bg-chalk text-ember',
  success: 'bg-chalk text-success',
  warning: 'bg-chalk text-warning',
  error: 'bg-chalk text-error',
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-mono text-xs font-medium uppercase tracking-[0.12em] px-3 py-1 rounded-full',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
