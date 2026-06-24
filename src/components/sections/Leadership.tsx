import Image from 'next/image'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { UnderlineLink } from '@/components/ui/UnderlineLink'
import { team } from '@/data/team'

export function Leadership() {
  return (
    <section className="max-w-[1730px] mx-auto px-[92px] pt-[120px]">
      <div className="flex items-start justify-between mb-[49px]">
        <SectionHeading className="w-[406px]">
          Operators in the Seats.
        </SectionHeading>
        <UnderlineLink href="/leadership">See more</UnderlineLink>
      </div>

      <div className="flex gap-[35px]">
        {team.map((member) => (
          <PersonCard key={member.id} {...member} />
        ))}
      </div>
    </section>
  )
}

function PersonCard({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <div className="flex-1 flex flex-col rounded-[15px] overflow-hidden shadow-[0_3px_16px_rgba(0,0,0,0.27)]">
      {/* Photo */}
      <div className="relative aspect-[362/399] rounded-t-[15px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1920px) 25vw"
        />
      </div>

      {/* Name plate */}
      <div className="bg-white px-[21px] py-5 flex flex-col gap-[6px]">
        <p className="font-normal text-[20px] leading-[1.75] tracking-[-1.716px] text-rust">
          {role}
        </p>
        <p className="font-medium text-[30px] leading-[1.6] tracking-[-1.716px] text-navy">
          {name}
        </p>
      </div>
    </div>
  )
}
