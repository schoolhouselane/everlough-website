import Image from 'next/image'

export function PortfolioHero() {
  return (
    <section className="px-5 md:px-10 xl:px-[106px] pt-[130px] md:pt-[150px] xl:pt-[180px]">
      {/* Headline + subhead */}
      <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6 md:gap-8 xl:gap-0 mb-8 md:mb-10 xl:mb-10">
        <h1 className="font-semibold text-[32px] md:text-[50px] xl:text-[60px] leading-[1.2] xl:leading-[76px] tracking-[-0.8px] md:tracking-[-1.2px] xl:tracking-[-1.716px] capitalize text-navy max-w-[520px]">
          The businesses we operate.
        </h1>
        <p className="font-normal text-[16px] md:text-[20px] xl:text-[25px] leading-[1.55] xl:leading-[38px] text-navy max-w-full md:max-w-[580px] xl:max-w-[679px] xl:text-right">
          Each entry below sets out what the business does, how it sits within the group,
          and the role Everlough plays in its operation.
        </p>
      </div>

      {/* Banner image */}
      <div className="relative h-[180px] md:h-[340px] xl:h-[520px] rounded-[10px] md:rounded-[12px] xl:rounded-[15px] overflow-hidden">
        <Image
          src="/images/portfolio/hero-handshake-2.jpg"
          alt="Everlough portfolio — businesses we operate"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1530px"
        />
      </div>
    </section>
  )
}
