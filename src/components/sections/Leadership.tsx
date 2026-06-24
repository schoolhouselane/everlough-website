import Image from 'next/image'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { UnderlineLink } from '@/components/ui/UnderlineLink'
import { team } from '@/data/team'

export function Leadership() {
  return (
    <section className="mx-auto px-5 md:px-10 xl:px-[92px] pt-12 md:pt-20 xl:pt-[120px]">
      <div className="flex items-start justify-between mb-8 md:mb-10 xl:mb-[49px]">
        <SectionHeading className="xl:w-[406px]">
          Operators in the Seats.
        </SectionHeading>
        <UnderlineLink href="/leadership" className="shrink-0 mt-1">See more</UnderlineLink>
      </div>

      {/* 2-col on mobile, 2-col on tablet, 4-col on desktop */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-[35px]">
        {team.map((member) => (
          <PersonCard key={member.id} {...member} />
        ))}
      </div>
    </section>
  )
}

function PersonCard({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <div className="flex flex-col rounded-[12px] xl:rounded-[15px] overflow-hidden shadow-[0_3px_16px_rgba(0,0,0,0.2)]">
      {/* Photo */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 50vw, 25vw"
        />
      </div>

      {/* Name plate */}
      <div className="bg-white px-4 xl:px-[21px] py-4 xl:py-5 flex flex-col gap-1 xl:gap-[6px]">
        <p className="font-normal text-[12px] md:text-[14px] xl:text-[20px] leading-[1.5] xl:leading-[1.75] tracking-[-0.2px] xl:tracking-[-1.716px] text-rust">
          {role}
        </p>
        <p className="font-medium text-[16px] md:text-[18px] xl:text-[30px] leading-[1.3] xl:leading-[1.6] tracking-[-0.3px] xl:tracking-[-1.716px] text-navy">
          {name}
        </p>
      </div>
    </div>
  )
}
