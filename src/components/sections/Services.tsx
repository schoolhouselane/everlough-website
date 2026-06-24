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
    <section className="mx-auto px-5 md:px-10 xl:px-[106px] pt-12 md:pt-20 xl:pt-[159px] flex flex-col gap-12 md:gap-16 xl:gap-[159px]">
      <div className="flex flex-col gap-10 md:gap-12 xl:gap-[100px]">
        <SectionHeading className="xl:w-[700px]">
          What Everlough does for the businesses it owns.
        </SectionHeading>

        {/* 1-col mobile, 1-col tablet (cards full-width), 3-col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-8 md:gap-10 xl:gap-[29px]">
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
    <div className="flex flex-col md:flex-row xl:flex-col gap-5 md:gap-8 xl:gap-[26px]">
      {/* Image — full-width on mobile, left-panel on tablet, full-width on desktop */}
      <div className="relative w-full md:w-[280px] xl:w-full h-[260px] md:h-[340px] xl:h-[575px] rounded-[15px] overflow-hidden shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 280px, 33vw"
        />
      </div>

      <div className="flex flex-col gap-3 xl:gap-[26px]">
        <h3 className="font-medium text-[24px] md:text-[28px] xl:text-[40px] leading-[1.4] xl:leading-[1.6] tracking-[-0.5px] md:tracking-[-0.8px] xl:tracking-[-1.716px] capitalize text-navy">
          {title}
        </h3>
        <p className="font-normal text-[17px] md:text-[20px] xl:text-[30px] leading-[1.55] xl:leading-[1.47] tracking-[-0.3px] md:tracking-[-0.8px] xl:tracking-[-1.716px] text-navy">
          {description}
        </p>
      </div>
    </div>
  )
}
