import { cn } from '@/lib/cn'

interface SectionHeadingProps {
  children:   React.ReactNode
  as?:        'h1' | 'h2' | 'h3'
  light?:     boolean
  className?: string
}

export function SectionHeading({ children, as: Tag = 'h2', light = false, className }: SectionHeadingProps) {
  return (
    <Tag
      className={cn(
        'font-bold text-[32px] md:text-[50px] xl:text-[60px] leading-[1.2] md:leading-[1.25] xl:leading-[1.35] tracking-[-0.8px] md:tracking-[-1.2px] xl:tracking-[-1.716px] capitalize text-balance',
        light ? 'text-cream' : 'text-navy',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
