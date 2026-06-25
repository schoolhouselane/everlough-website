import Image from 'next/image'

interface PortfolioCompanyCardProps {
  tag: string
  title: string
  bodyLeft: string
  bodyRight?: string
  imageSrc: string
  imageAlt: string
  /** Extra CSS classes to pass to the outermost element */
  className?: string
}

export function PortfolioCompanyCard({
  tag,
  title,
  bodyLeft,
  bodyRight,
  imageSrc,
  imageAlt,
}: PortfolioCompanyCardProps) {
  return (
    <article className="px-5 md:px-10 xl:px-[106px] py-10 md:py-14 xl:py-16 border-t border-navy/15">
      {/* Company info row */}
      <div className="flex flex-col xl:flex-row gap-4 md:gap-6 xl:gap-0 mb-8 md:mb-10 xl:mb-12">
        {/* Left col — tag */}
        <p className="font-light text-[14px] md:text-[20px] xl:text-[30px] xl:leading-[53px] xl:tracking-[-1.716px] text-navy xl:w-[345px] xl:shrink-0 whitespace-nowrap">
          {tag}
        </p>

        {/* Right col — title + body */}
        <div className="flex flex-col gap-4 md:gap-6 xl:gap-8 flex-1">
          <h2 className="font-medium text-[24px] md:text-[36px] xl:text-[45px] leading-[1.3] xl:leading-[68px] tracking-[-0.8px] md:tracking-[-1.2px] xl:tracking-[-1.716px] text-navy capitalize">
            {title}
          </h2>

          {/* Body paragraphs — stacked on mobile/tablet, 2-col on xl */}
          <div className="flex flex-col xl:flex-row gap-4 xl:gap-8">
            <p className="font-normal text-[15px] md:text-[18px] xl:text-[25px] xl:leading-[38px] text-navy flex-1">
              {bodyLeft}
            </p>
            {bodyRight && (
              <p className="font-normal text-[15px] md:text-[18px] xl:text-[25px] xl:leading-[38px] text-navy flex-1">
                {bodyRight}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Full-width image */}
      <div className="relative h-[220px] md:h-[380px] xl:h-[620px] rounded-[10px] md:rounded-[12px] xl:rounded-[15px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1530px"
        />
      </div>
    </article>
  )
}
