import Image from 'next/image'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { DividerLine } from '@/components/ui/DividerLine'

interface ServiceItem {
  title:       string
  description: string
  image:       string
}

const services: ServiceItem[] = [
  {
    title:       'Acquisition',
    description: 'We acquire businesses where execution is the constraint.',
    image:       '/images/services/acquisition.jpg',
  },
  {
    title:       'Operation',
    description: 'We operate the businesses we own.',
    image:       '/images/services/operation.jpg',
  },
  {
    title:       'Stewardship',
    description: 'We hold for as long as the business is best served by Everlough.',
    image:       '/images/services/stewardship.jpg',
  },
]

export function Services() {
  return (
    <section className="max-w-[1730px] mx-auto px-[106px] pt-[159px] flex flex-col gap-[159px]">
      <div className="flex flex-col gap-[100px] w-full">
        <SectionHeading className="w-[700px]">
          What Everlough does for the businesses it owns.
        </SectionHeading>

        <div className="flex gap-[29px]">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>

      <DividerLine />
    </section>
  )
}

function ServiceCard({ title, description, image }: ServiceItem) {
  return (
    <div className="flex flex-col gap-[26px] flex-1">
      <div className="relative h-[575px] rounded-[15px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 1920px) 33vw"
        />
      </div>
      <h3 className="font-medium text-[40px] leading-[1.6] tracking-[-1.716px] capitalize text-navy">
        {title}
      </h3>
      <p className="font-normal text-[30px] leading-[1.47] tracking-[-1.716px] text-navy">
        {description}
      </p>
    </div>
  )
}
