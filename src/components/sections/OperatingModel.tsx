import { cn } from '@/lib/cn'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { operatingModel } from '@/data/operatingModel'

// Figma node 118-219: right-aligned staircase rows, widths 70/79/88/100% of content
// Gaps tuned so description ≈ 600-665px at 1366px → ~3 lines at xl:text-[22px]
const stairConfig = [
  { width: 'xl:w-[80%]', gap: 'xl:gap-[50px]'  },
  { width: 'xl:w-[87%]', gap: 'xl:gap-[90px]'  },
  { width: 'xl:w-[93%]', gap: 'xl:gap-[120px]' },
  { width: 'xl:w-full',  gap: 'xl:gap-[120px]' },
]

export function OperatingModel() {
  return (
    <section className="mx-auto px-5 md:px-10 xl:px-[106px] pt-12 md:pt-20 xl:pt-[120px] pb-16 md:pb-20 xl:pb-0">
      <SectionHeading className="xl:w-[593px] mb-10 md:mb-14 xl:mb-[86px]">
        A four-stage operating model.
      </SectionHeading>

      {/* Desktop staircase: right-aligned rows grow wider downward */}
      <div className="xl:flex xl:flex-col xl:items-end">
        {operatingModel.map((stage, i) => {
          const { width, gap } = stairConfig[i]
          return (
            <div key={stage.number} className={cn('w-full', width)}>
              <div className="border-t border-navy/20" />

              <div className={cn(
                'flex flex-col gap-2 py-5',
                'md:flex-row md:items-start md:gap-8 md:py-6',
                'xl:items-start xl:py-[18px]',
                gap,
              )}>
                {/* Number */}
                <span className={cn(
                  'font-semibold text-[#9f9f9f] shrink-0',
                  'text-[24px] leading-[1.2] tracking-[-0.5px]',
                  'md:text-[32px] md:tracking-[-1px]',
                  'xl:text-[40px] xl:leading-[48px] xl:tracking-[-1.716px] xl:w-[62px]',
                )}>
                  {stage.number}
                </span>

                {/* Stage name */}
                <span className={cn(
                  'font-medium text-navy shrink-0',
                  'text-[20px] leading-[1.35] tracking-[-0.3px]',
                  'md:text-[26px]',
                  'xl:text-[35px] xl:leading-[51px] xl:tracking-[-1.716px] xl:whitespace-nowrap',
                )}>
                  {stage.title}
                </span>

                {/* Description — ml-auto pushes to right edge */}
                <p className={cn(
                  'font-normal text-navy',
                  'text-[15px] leading-[1.65] tracking-[-0.2px]',
                  'md:text-[17px]',
                  'xl:text-[22px] xl:leading-[41px] xl:tracking-[-1.716px] xl:ml-auto xl:w-[665px]',
                )}>
                  {stage.description}
                </p>
              </div>
            </div>
          )
        })}

        {/* Bottom rule */}
        <div className="w-full border-t border-navy/20" />
      </div>
    </section>
  )
}
