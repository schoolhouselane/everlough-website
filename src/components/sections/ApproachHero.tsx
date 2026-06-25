import Image from 'next/image'

export function ApproachHero() {
  return (
    <section className="mx-auto px-5 md:px-10 xl:px-[106px] pt-[130px] md:pt-[150px] xl:pt-[200px] pb-12 md:pb-16 xl:pb-[100px]">
      {/* Heading row */}
      <div className="flex flex-col gap-6 md:gap-8 xl:flex-row xl:items-start xl:justify-between xl:gap-0 mb-10 md:mb-12 xl:mb-[72px]">
        <h1 className="font-semibold text-[30px] md:text-[46px] xl:text-[60px] leading-[1.2] md:leading-[1.2] xl:leading-[1.2] tracking-[-0.8px] md:tracking-[-1.2px] xl:tracking-[-1.716px] text-navy xl:w-[467px] shrink-0">
          How we operate
        </h1>
        <p className="font-normal text-[16px] md:text-[20px] xl:text-[25px] leading-[1.65] md:leading-[1.6] xl:leading-[1.68] tracking-[-0.2px] md:tracking-[-0.5px] xl:tracking-[-1.716px] text-navy xl:w-[724px] xl:text-right">
          Everlough takes control or material influence as a starting condition. We do not take
          minority stakes or passive positions. Every business we own has an Everlough operator in
          a seat. Accountability is direct. Decisions are made close to the business.
        </p>
      </div>

      {/* Images */}
      <div className="flex flex-col gap-3 xl:flex-row xl:items-end xl:gap-[18px]">
        {/* Large landscape — left */}
        <div className="relative w-full xl:flex-[55] h-[220px] md:h-[380px] xl:h-[596px] rounded-[15px] overflow-hidden shrink-0">
          <Image
            src="/images/approach/hero.jpg"
            alt="Business handshake"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Two portraits — right */}
        <div className="flex gap-3 xl:flex-[45] xl:gap-[12px]">
          <div className="relative flex-1 h-[160px] md:h-[280px] xl:h-[375px] rounded-[15px] overflow-hidden">
            <Image
              src="/images/approach/portrait-1.jpg"
              alt="Strategic planning"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative flex-1 h-[160px] md:h-[280px] xl:h-[375px] rounded-[15px] overflow-hidden">
            <Image
              src="/images/approach/portrait-2.jpg"
              alt="London architecture"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
