import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { DividerLine } from '@/components/ui/DividerLine'

export function AboutStatement() {
  return (
    <section className="max-w-[1730px] mx-auto px-[100px] pt-[73px] flex flex-col gap-[73px]">
      <div className="flex gap-[251px] items-start">
        {/* Text block */}
        <div className="flex flex-col gap-[73px] w-[824px]">
          <p className="text-[45px] leading-[1.42] tracking-[-1.716px] text-navy">
            <span className="font-semibold">Everlough Holdings </span>
            <span className="font-normal">
              is a private operating platform that acquires, stabilises and scales lower mid-market businesses,
              and runs them directly, rather than relying on financial engineering or outside consultants.
            </span>
          </p>
          <Button as="a" href="/contact" intent="filled" size="lg">
            Get in touch
          </Button>
        </div>

        {/* Icon */}
        <div className="w-[373px] h-[320px] shrink-0 relative">
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
