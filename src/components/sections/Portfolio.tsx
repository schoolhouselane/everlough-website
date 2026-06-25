import Image from 'next/image'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { UnderlineLink } from '@/components/ui/UnderlineLink'
import { Reveal } from '@/components/ui/Reveal'
import { portfolio } from '@/data/portfolio'

export function Portfolio() {
  return (
    <section className="pt-12 md:pt-20 xl:pt-[119px]">
      {/* Heading — inside normal padding */}
      <div className="px-5 md:px-10 xl:px-[106px]">
        <Reveal>
        <SectionHeading className="xl:w-[785px] mb-12 md:mb-16 xl:mb-[119px]">
          Two core engines.{' '}
          <span className="block">Selective operating assets.</span>
        </SectionHeading>
        </Reveal>
      </div>

      {/* Horizontal scroll — single row on all breakpoints */}
      <div className="overflow-x-auto scrollbar-hide pl-5 md:pl-10 xl:pl-[106px]">
        <div className="flex gap-6 md:gap-10 xl:gap-[153px] pr-5 md:pr-10 xl:pr-[106px]">
          {portfolio.map((company) => (
            <PortfolioItem key={company.id} {...company} />
          ))}
        </div>
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
    <div className="flex flex-col gap-5 xl:gap-[48px] w-[240px] md:w-[300px] xl:w-[374px] shrink-0">
      {/* Logo */}
      <div className="h-[48px] md:h-[60px] xl:h-[83px] relative">
        <Image
          src={logo}
          alt={name}
          fill
          sizes="(max-width: 768px) 240px, (max-width: 1280px) 300px, 374px"
          className="object-contain object-left"
        />
      </div>

      {/* Separator line */}
      <div className="w-[48px] xl:w-[62px] h-[2px] xl:h-[2.5px] bg-navy" />

      <h3 className="font-medium text-[18px] md:text-[22px] xl:text-[35px] leading-[1.4] xl:leading-[1.83] tracking-[-0.3px] xl:tracking-[-1.716px] text-navy">
        {name}
      </h3>
      <p className="font-normal text-[14px] md:text-[16px] xl:text-[25px] leading-[1.6] xl:leading-[1.76] tracking-[-0.2px] xl:tracking-[-1.716px] text-navy flex-1">
        {description}
      </p>

      <UnderlineLink href={`/portfolio/${slug}`} className="whitespace-nowrap">Read more</UnderlineLink>
    </div>
  )
}
