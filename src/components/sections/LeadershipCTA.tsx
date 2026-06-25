import { Button } from '@/components/ui/Button'

export function LeadershipCTA() {
  return (
    <section className="bg-forest mt-16 md:mt-20 xl:mt-[160px] px-5 md:px-10 xl:px-[106px] py-12 md:py-16 xl:py-[90px]">
      <div className="flex flex-col gap-6 md:gap-8 xl:flex-row xl:items-end xl:justify-between xl:gap-[60px]">
        {/* Text */}
        <div className="flex flex-col gap-4 md:gap-5 xl:gap-[24px]">
          <p className="font-medium text-[24px] md:text-[40px] xl:text-[60px] leading-[1.25] xl:leading-[1.25] tracking-[-0.6px] md:tracking-[-1.2px] xl:tracking-[-1.716px] text-white capitalize xl:max-w-[520px]">
            We are a credible counterparty
          </p>
          <p className="font-normal text-[14px] md:text-[20px] xl:text-[30px] leading-[1.5] xl:leading-[1.23] tracking-[-0.2px] md:tracking-[-0.5px] xl:tracking-[-1.716px] text-white/80 xl:max-w-[530px]">
            For special-situation processes in the lower mid-market.
          </p>
        </div>

        {/* CTA */}
        <div className="shrink-0">
          <Button as="a" href="/contact" intent="outlinedLight" size="md" className="xl:text-[20px] xl:px-8 xl:py-4 w-full xl:w-auto justify-center uppercase">
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  )
}
