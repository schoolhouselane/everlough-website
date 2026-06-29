import { cn } from '@/lib/cn'

interface UnderlineLinkProps {
  href:       string
  children:   React.ReactNode
  light?:     boolean
  className?: string
}

export function UnderlineLink({ href, children, light = false, className }: UnderlineLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        'inline-block border-b pb-[8px] font-medium text-[20px] tracking-[-1px] transition-opacity hover:opacity-60',
        light ? 'border-cream text-cream' : 'border-forest text-forest',
        className
      )}
    >
      {children}
    </a>
  )
}
