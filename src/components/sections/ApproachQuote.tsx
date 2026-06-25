import { Button } from '@/components/ui/Button'

export function ApproachQuote() {
  return (
    <section className="bg-forest px-5 md:px-10 xl:px-[106px] py-16 md:py-20 xl:py-[90px]">
      <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between xl:gap-[60px]">
        {/* Quote block */}
        <div className="flex flex-col gap-6 md:gap-8 xl:gap-[40px]">
          <blockquote className="font-bold text-[24px] md:text-[40px] xl:text-[60px] leading-[1.25] md:leading-[1.2] xl:leading-[81.12px] tracking-[-0.6px] md:tracking-[-1.2px] xl:tracking-[-1.716px] text-white xl:max-w-[850px]">
            &ldquo;The discipline is the same in every business. The pace is set by the evidence.&rdquo;
          </blockquote>
          <p className="font-light text-[14px] md:text-[22px] xl:text-[35px] leading-[1.4] tracking-[-0.2px] md:tracking-[-0.5px] xl:tracking-[-1.716px] text-white/80 xl:whitespace-nowrap">
            From the Everlough Operating Principles, 2026
          </p>
        </div>

        {/* CTA button */}
        <div className="shrink-0">
          <Button as="a" href="/contact" intent="outlinedLight" size="md" className="xl:text-[20px] xl:px-8 xl:py-4 w-full xl:w-auto justify-center hover:opacity-100 hover:bg-transparent hover:border-[#123332] hover:text-[#123332] transition-colors">
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  )
}
