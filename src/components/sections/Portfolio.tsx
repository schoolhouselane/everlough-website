import Image from 'next/image'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { UnderlineLink } from '@/components/ui/UnderlineLink'
import { portfolio } from '@/data/portfolio'

export function Portfolio() {
  return (
    <section className="max-w-[1730px] mx-auto px-[106px] pt-[119px]">
      <SectionHeading className="w-[785px] mb-[119px]">
        Two core engines.{'\n'}Selective operating assets.
      </SectionHeading>

      <div className="flex gap-[153px]">
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
    <div className="flex flex-col gap-[48px] flex-1 max-w-[374px]">
      <div className="h-[83px] relative">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain object-left"
        />
      </div>

      {/* Separator */}
      <div className="w-[62px] h-[2.5px] bg-navy" />

      <h3 className="font-medium text-[35px] leading-[1.83] tracking-[-1.716px] text-navy">
        {name}
      </h3>
      <p className="font-normal text-[25px] leading-[1.76] tracking-[-1.716px] text-navy">
        {description}
      </p>

      <UnderlineLink href={`/portfolio/${slug}`}>Read more</UnderlineLink>
    </div>
  )
}
