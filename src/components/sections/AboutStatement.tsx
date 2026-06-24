import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { DividerLine } from '@/components/ui/DividerLine'

export function AboutStatement() {
  return (
    <section className="mx-auto px-5 md:px-10 xl:px-[100px] pt-12 md:pt-16 xl:pt-[73px] flex flex-col gap-12 md:gap-16 xl:gap-[73px]">
      <div className="flex flex-col xl:flex-row gap-10 xl:gap-[251px] xl:items-start">
        {/* Text block */}
        <div className="flex flex-col gap-8 md:gap-10 xl:gap-[73px] xl:w-[824px]">
          <p className="text-[22px] md:text-[30px] xl:text-[45px] leading-[1.45] md:leading-[1.42] xl:leading-[1.42] tracking-[-0.9px] md:tracking-[-1.3px] xl:tracking-[-1.716px] text-navy">
            <span className="font-semibold">Everlough Holdings </span>
            <span className="font-normal">
              is a private operating platform that acquires, stabilises and scales lower mid-market
              businesses, and runs them directly, rather than relying on financial engineering or
              outside consultants.
            </span>
          </p>
          <div>
            <Button as="a" href="/contact" intent="filled" size="md" className="xl:text-2xl xl:px-6 xl:py-4">
              Get in touch
            </Button>
          </div>
        </div>

        {/* Icon — hidden on mobile, shown from md */}
        <div className="hidden md:block xl:w-[373px] xl:h-[320px] shrink-0 relative w-[200px] h-[180px] md:w-[280px] md:h-[240px] self-center xl:self-auto">
          <Image
            src="/images/everlough-icon.svg"
            alt="Everlough Holdings"
            fill
            className="object-contain object-center"
          />
        </div>
      </div>

      <DividerLine />
    </section>
  )
}
