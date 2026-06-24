import { cn } from '@/lib/cn'

interface DividerLineProps {
  className?: string
  light?:     boolean
}

export function DividerLine({ className, light = false }: DividerLineProps) {
  return (
    <hr
      className={cn(
        'border-0 border-t w-full',
        light ? 'border-cream/30' : 'border-navy/20',
        className
      )}
    />
  )
}
