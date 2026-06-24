import { cn } from '@/lib/cn'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { operatingModel } from '@/data/operatingModel'

// Staircase widths from Figma: 1023/1153/1282/1461 out of 1461px canvas → 70/79/88/100%
// Gaps scaled ×0.84 (Figma 1730px canvas → 1440px viewport)
const stairConfig = [
  { width: 'xl:w-[70%]', gap: 'xl:gap-[52px]'  },
  { width: 'xl:w-[79%]', gap: 'xl:gap-[122px]' },
  { width: 'xl:w-[88%]', gap: 'xl:gap-[165px]' },
  { width: 'xl:w-full',  gap: 'xl:gap-[185px]' },
]

export function OperatingModel() {
  return (
    <section className="mx-auto px-5 md:px-10 xl:px-[106px] pt-12 md:pt-20 xl:pt-[120px] pb-16 md:pb-20 xl:pb-0">
      <SectionHeading className="xl:w-[593px] mb-10 md:mb-14 xl:mb-[86px]">
        A four-stage operating model.
      </SectionHeading>

      {/* Desktop: right-aligned rows that grow wider downward (staircase) */}
      <div className="xl:flex xl:flex-col xl:items-end">
        {operatingModel.map((stage, i) => {
          const { width, gap } = stairConfig[i]
          return (
            <div key={stage.number} className={cn('w-full', width)}>
              {/* Horizontal rule at top of each row */}
              <div className="border-t border-navy/20" />

              <div className={cn(
                'flex flex-col gap-2 py-5',
                'md:flex-row md:items-start md:gap-8 md:py-6',
                'xl:items-center xl:py-[18px]',
                gap,
              )}>
                {/* Number */}
                <span className={cn(
                  'font-semibold leading-[1.2] text-mid-grey shrink-0',
                  'text-[24px] tracking-[-0.5px]',
                  'md:text-[32px] md:tracking-[-1px]',
                  'xl:text-[40px] xl:leading-[48px] xl:tracking-[-1.716px] xl:w-[62px]',
                )}>
                  {stage.number}
                </span>

                {/* Title */}
                <span className={cn(
                  'font-medium text-navy shrink-0',
                  'text-[20px] leading-[1.35] tracking-[-0.3px]',
                  'md:text-[26px]',
                  'xl:text-[35px] xl:leading-[51px] xl:tracking-[-1.716px] xl:whitespace-nowrap',
                )}>
                  {stage.title}
                </span>

                {/* Description — ml-auto pushes it flush to the right edge at desktop */}
                <p className={cn(
                  'font-normal text-navy',
                  'text-[15px] leading-[1.65] tracking-[-0.2px]',
                  'md:text-[17px]',
                  'xl:text-[22px] xl:leading-[41px] xl:tracking-[-1.716px] xl:ml-auto xl:w-[480px] xl:shrink-0',
                )}>
                  {stage.description}
                </p>
              </div>
            </div>
          )
        })}

        {/* Bottom border on the last row */}
        <div className="w-full border-t border-navy/20" />
      </div>
    </section>
  )
}
