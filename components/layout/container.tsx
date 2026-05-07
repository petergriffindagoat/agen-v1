import { cn } from '@/lib/utils'

type ContainerSize = 'content' | 'wide' | 'prose'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: ContainerSize
}

const sizeClasses: Record<ContainerSize, string> = {
  content: 'max-w-[72rem]',
  wide: 'max-w-[80rem]',
  prose: 'max-w-[40rem]',
}

export function Container({ children, className, size = 'content' }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto px-6 max-sm:px-4',
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </div>
  )
}
