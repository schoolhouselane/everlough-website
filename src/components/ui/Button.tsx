import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const button = cva(
  'inline-flex items-center justify-center gap-3 rounded-full font-medium uppercase tracking-widest transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
  {
    variants: {
      intent: {
        primary:       'bg-white text-navy border border-white',
        outlinedLight: 'border border-white text-white',
        outlinedDark:  'border border-navy text-navy',
        filled:        'bg-forest text-cream',
      },
      size: {
        sm: 'px-6 py-2 text-base',
        md: 'px-6 py-2 text-base',
        lg: 'px-6 py-4 text-2xl',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size:   'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  as?: 'button' | 'a'
  href?: string
}

export function Button({ className, intent, size, as: Tag = 'button', href, children, ...props }: ButtonProps) {
  if (Tag === 'a') {
    return (
      <a href={href} className={cn(button({ intent, size }), className)}>
        {children}
      </a>
    )
  }
  return (
    <button className={cn(button({ intent, size }), className)} {...props}>
      {children}
    </button>
  )
}
