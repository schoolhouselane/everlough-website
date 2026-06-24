import { SectionHeading } from '@/components/ui/SectionHeading'
import { DividerLine } from '@/components/ui/DividerLine'
import { operatingModel } from '@/data/operatingModel'

export function OperatingModel() {
  return (
    <section className="mx-auto px-5 md:px-10 xl:px-[106px] pt-12 md:pt-20 xl:pt-[120px] pb-16 md:pb-20 xl:pb-0">
      <SectionHeading className="xl:w-[593px] mb-10 md:mb-14 xl:mb-[86px]">
        A four-stage operating model.
      </SectionHeading>

      <div className="flex flex-col gap-0">
        {operatingModel.map((stage) => (
          <OperatingStageRow key={stage.number} {...stage} />
        ))}
        <DividerLine />
      </div>
    </section>
  )
}

function OperatingStageRow({
  number,
  title,
  description,
}: {
  number:      string
  title:       string
  description: string
}) {
  return (
    <div className="flex flex-col gap-0">
      <DividerLine />
      {/* Mobile/tablet: stacked layout. Desktop: horizontal row */}
      <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6 xl:gap-[62px] py-5 md:py-6 xl:py-[10px]">
        {/* Number */}
        <span className="font-semibold text-[24px] md:text-[28px] xl:text-[40px] leading-[1.2] tracking-[-0.5px] xl:tracking-[-1.716px] text-mid-grey xl:w-[68px] shrink-0">
          {number}
        </span>

        {/* Title + description — stacked on mobile, row on md+ */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 xl:gap-[62px] flex-1">
          <span className="font-medium text-[20px] md:text-[22px] xl:text-[35px] leading-[1.35] xl:leading-[1.37] tracking-[-0.3px] xl:tracking-[-1.716px] text-navy md:w-[160px] xl:w-[200px] shrink-0">
            {title}
          </span>
          <p className="font-normal text-[15px] md:text-[17px] xl:text-[22px] leading-[1.65] xl:leading-[1.86] tracking-[-0.2px] xl:tracking-[-1.716px] text-navy xl:max-w-[665px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
