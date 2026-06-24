import { cn } from '@/lib/cn'

interface SectionHeadingProps {
  children: React.ReactNode
  as?:      'h1' | 'h2' | 'h3'
  light?:   boolean
  className?: string
}

export function SectionHeading({ children, as: Tag = 'h2', light = false, className }: SectionHeadingProps) {
  return (
    <Tag
      className={cn(
        'font-bold text-[60px] leading-[1.35] tracking-[-1.716px] capitalize text-balance',
        light ? 'text-cream' : 'text-navy',
        className
      )}
    >
      {children}
    </Tag>
  )
}
