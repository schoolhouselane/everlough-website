import { Button } from '@/components/ui/Button'

export function LeadershipHero() {
  return (
    <section className="mx-auto px-5 md:px-10 xl:px-[106px] pt-[130px] md:pt-[150px] xl:pt-[200px] pb-16 md:pb-20 xl:pb-[100px]">
      {/* Eyebrow */}
      <p className="font-light text-[11px] md:text-[16px] xl:text-[25px] leading-[1.4] xl:leading-[1.4] tracking-[-0.2px] xl:tracking-[-1.716px] text-navy mb-4 md:mb-5 xl:mb-[57px]">
        Leadership
      </p>

      {/* Two-column heading + description */}
      <div className="flex flex-col gap-6 md:gap-8 xl:flex-row xl:items-start xl:justify-between xl:gap-0 mb-8 md:mb-10 xl:mb-0">
        <div className="flex flex-col gap-6 md:gap-8 xl:gap-[100px] xl:items-start">
          <h1 className="font-bold text-[30px] md:text-[46px] xl:text-[60px] leading-[1.2] tracking-[-0.8px] md:tracking-[-1.2px] xl:tracking-[-1.716px] text-navy capitalize xl:max-w-[442px]">
            Operators in the seats.
          </h1>
          <div className="xl:block">
            <Button as="a" href="/contact" intent="filled" size="md" className="xl:text-[18px] xl:px-7 xl:py-3">
              Speak with us
            </Button>
          </div>
        </div>

        <p className="font-normal text-[16px] md:text-[20px] xl:text-[25px] leading-[1.65] md:leading-[1.6] xl:leading-[1.52] tracking-[-0.2px] md:tracking-[-0.5px] xl:tracking-[-1.716px] text-navy xl:w-[800px] xl:pt-[8px]">
          Everlough is run by a small group of operating principals who hold board and executive
          roles inside the businesses the group owns. The bios below set out where each came from,
          what they have done, and the operating positions they currently hold within the portfolio.
        </p>
      </div>
    </section>
  )
}
