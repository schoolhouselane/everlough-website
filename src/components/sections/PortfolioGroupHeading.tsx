import { SectionHeading } from '@/components/ui/SectionHeading'

interface PortfolioGroupHeadingProps {
  children: React.ReactNode
}

export function PortfolioGroupHeading({ children }: PortfolioGroupHeadingProps) {
  return (
    <section className="px-5 md:px-10 xl:px-[106px] pt-14 md:pt-20 xl:pt-24 pb-0 border-t border-navy/15">
      <div className="max-w-[960px] mx-auto text-center">
        <SectionHeading as="h2" className="text-center">
          {children}
        </SectionHeading>
      </div>
    </section>
  )
}
