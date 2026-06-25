import { Button } from '@/components/ui/Button'

export function PortfolioCTA() {
  return (
    <section className="bg-forest px-5 md:px-10 xl:px-[106px] py-12 md:py-16 xl:py-[64px]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-10">
        {/* Text block */}
        <div className="flex flex-col gap-3 md:gap-4 xl:gap-5 max-w-[560px]">
          <p className="font-medium text-[24px] md:text-[40px] xl:text-[60px] leading-[1.25] xl:leading-[75px] tracking-[-0.6px] md:tracking-[-1.2px] xl:tracking-[-1.716px] text-cream capitalize">
            We are a credible counterparty
          </p>
          <p className="font-normal text-[15px] md:text-[22px] xl:text-[30px] xl:leading-[37px] xl:tracking-[-1.716px] text-cream">
            For special-situation processes in the lower mid-market.
          </p>
        </div>

        {/* CTA */}
        <Button as="a" href="/contact" intent="outlinedLight" size="sm" className="self-start md:self-center xl:text-[25px] xl:px-8 xl:py-4">
          Get in touch
        </Button>
      </div>
    </section>
  )
}
