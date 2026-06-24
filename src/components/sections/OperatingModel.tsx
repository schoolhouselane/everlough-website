import { SectionHeading } from '@/components/ui/SectionHeading'
import { DividerLine } from '@/components/ui/DividerLine'
import { operatingModel } from '@/data/operatingModel'

export function OperatingModel() {
  return (
    <section className="max-w-[1730px] mx-auto px-[106px] pt-[120px]">
      <SectionHeading className="w-[593px] mb-[86px]">
        A four-stage operating model.
      </SectionHeading>

      <div className="flex flex-col gap-[18px]">
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
    <div className="flex flex-col gap-[18px]">
      <DividerLine />
      <div className="flex items-start gap-[62px] py-[10px]">
        <span className="font-semibold text-[40px] leading-[1.2] tracking-[-1.716px] text-mid-grey w-[68px] shrink-0">
          {number}
        </span>
        <span className="font-medium text-[35px] leading-[1.37] tracking-[-1.716px] text-navy whitespace-nowrap w-[200px] shrink-0">
          {title}
        </span>
        <p className="font-normal text-[22px] leading-[1.86] tracking-[-1.716px] text-navy max-w-[665px]">
          {description}
        </p>
      </div>
    </div>
  )
}
