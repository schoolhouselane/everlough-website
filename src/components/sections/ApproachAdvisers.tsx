import Image from 'next/image'

const rows = [
  {
    title: 'Capital structure',
    body: 'We work with structured capital — subordinated debt, vendor loan notes, deferred consideration — when it helps the deal close. We do not over-engineer the capital stack to create fees.',
  },
  {
    title: 'With creditors',
    body: 'We have worked alongside receivership processes, distressed sellers, and creditor committees. We move quickly, communicate clearly, and do not use complexity as a negotiating tool.',
  },
  {
    title: 'Patient capital, deliberate growth.',
    body: 'Everlough holds businesses for the medium to long term. We are not building toward a trade sale or a fund exit. Returns come from operating performance, not from financial re-engineering.',
  },
]

export function ApproachAdvisers() {
  return (
    <section className="mx-auto px-5 md:px-10 xl:px-[106px] pb-16 md:pb-20 xl:pb-[120px]">
      {/* Heading row */}
      <div className="flex flex-col gap-6 md:gap-8 xl:flex-row xl:items-start xl:justify-between xl:gap-0 mb-10 md:mb-14 xl:mb-[65px]">
        <h2 className="font-bold text-[30px] md:text-[46px] xl:text-[60px] leading-[1.2] tracking-[-0.8px] md:tracking-[-1.2px] xl:tracking-[-1.716px] text-navy xl:w-[467px] shrink-0">
          For advisers and creditors.
        </h2>
        <p className="font-normal text-[16px] md:text-[20px] xl:text-[25px] leading-[1.65] md:leading-[1.6] xl:leading-[1.68] tracking-[-0.2px] md:tracking-[-0.5px] xl:tracking-[-1.716px] text-navy xl:w-[707px]">
          Everlough is a credible counterparty in complex or time-sensitive transactions. We have
          the balance sheet, the operator network, and the decision-making authority to move when
          opportunity requires it.
        </p>
      </div>

      {/* Wide image */}
      <div className="relative w-full h-[220px] md:h-[360px] xl:h-[468px] rounded-[15px] overflow-hidden mb-12 md:mb-16 xl:mb-[71px]">
        <Image
          src="/images/approach/advisers.png"
          alt="Business meeting"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1228px"
          className="object-cover object-center"
        />
      </div>

      {/* 3 content rows */}
      <div>
        {rows.map((row) => (
          <div key={row.title}>
            <div className="border-t border-navy/20" />
            <div className="flex flex-col gap-4 py-8 md:py-10 xl:flex-row xl:items-start xl:justify-between xl:py-[70px]">
              <h3 className="font-medium text-[24px] md:text-[32px] xl:text-[45px] leading-[1.25] md:leading-[1.2] xl:leading-[1.2] tracking-[-0.5px] md:tracking-[-1px] xl:tracking-[-1.716px] text-navy xl:w-[300px] xl:shrink-0">
                {row.title}
              </h3>
              <p className="font-normal text-[15px] md:text-[18px] xl:text-[20px] leading-[1.65] md:leading-[1.6] xl:leading-[1.7] tracking-[-0.2px] md:tracking-[-0.4px] xl:tracking-[-1.716px] text-navy xl:max-w-[603px]">
                {row.body}
              </p>
            </div>
          </div>
        ))}
        <div className="border-t border-navy/20" />
      </div>
    </section>
  )
}
