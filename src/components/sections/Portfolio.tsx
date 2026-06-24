import Image from 'next/image'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { UnderlineLink } from '@/components/ui/UnderlineLink'
import { portfolio } from '@/data/portfolio'

export function Portfolio() {
  return (
    <section className="mx-auto px-5 md:px-10 xl:px-[106px] pt-12 md:pt-20 xl:pt-[119px]">
      <SectionHeading className="xl:w-[785px] mb-12 md:mb-16 xl:mb-[119px]">
        Two core engines.{' '}
        <span className="block">Selective operating assets.</span>
      </SectionHeading>

      {/* 1-col mobile, 2-col tablet, 4-col desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-12 xl:gap-[153px]">
        {portfolio.map((company) => (
          <PortfolioItem key={company.id} {...company} />
        ))}
      </div>
    </section>
  )
}

function PortfolioItem({
  name,
  description,
  logo,
  slug,
}: {
  name:        string
  description: string
  logo:        string
  slug:        string
}) {
  return (
    <div className="flex flex-col gap-6 xl:gap-[48px]">
      {/* Logo */}
      <div className="h-[56px] xl:h-[83px] relative">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain object-left"
        />
      </div>

      {/* Separator line */}
      <div className="w-[48px] xl:w-[62px] h-[2px] xl:h-[2.5px] bg-navy" />

      <h3 className="font-medium text-[20px] md:text-[22px] xl:text-[35px] leading-[1.4] xl:leading-[1.83] tracking-[-0.3px] xl:tracking-[-1.716px] text-navy">
        {name}
      </h3>
      <p className="font-normal text-[16px] md:text-[17px] xl:text-[25px] leading-[1.6] xl:leading-[1.76] tracking-[-0.2px] xl:tracking-[-1.716px] text-navy">
        {description}
      </p>

      <UnderlineLink href={`/portfolio/${slug}`}>Read more</UnderlineLink>
    </div>
  )
}
