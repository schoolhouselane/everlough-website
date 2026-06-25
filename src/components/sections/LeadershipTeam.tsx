import Image from 'next/image'
import { cn } from '@/lib/cn'
import { leadershipTeam, type LeadershipMember } from '@/data/leadershipTeam'

export function LeadershipTeam() {
  return (
    <section className="mx-auto px-5 md:px-10 xl:px-[106px] pb-0">
      <div className="flex flex-col gap-16 md:gap-20 xl:gap-[160px]">
        {leadershipTeam.map((member, i) => (
          <PersonBlock key={member.id} member={member} priority={i === 0} />
        ))}
      </div>
    </section>
  )
}

function PersonBlock({ member, priority }: { member: LeadershipMember; priority?: boolean }) {
  const { name, role, bio, image, imagePosition } = member
  const isLeft = imagePosition === 'left'

  return (
    <div className={cn(
      'flex flex-col gap-8',
      'xl:flex-row xl:items-start xl:gap-[130px]',
      !isLeft && 'xl:flex-row-reverse',
    )}>
      {/* Photo */}
      <div className="relative w-full xl:w-[480px] xl:shrink-0 h-[420px] md:h-[520px] xl:h-[510px] rounded-[15px] overflow-hidden shadow-[12px_4px_16px_rgba(0,0,0,0.27)]">
        <Image
          src={image}
          alt={name}
          fill
          priority={priority}
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 480px"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-3 md:gap-4 xl:gap-[20px] flex-1 xl:pt-0">
        {/* Name + LinkedIn row */}
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-medium text-[26px] md:text-[40px] xl:text-[60px] leading-[1.25] xl:leading-[1.25] tracking-[-0.6px] md:tracking-[-1.2px] xl:tracking-[-1.716px] text-navy capitalize">
            {name}
          </h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logos/linkedin.svg"
            alt="LinkedIn"
            className="shrink-0 mt-2 md:mt-3 xl:mt-5 w-[60px] md:w-[80px] xl:w-[108px] h-auto"
          />
        </div>

        {/* Role */}
        <p className="font-normal text-[14px] md:text-[20px] xl:text-[30px] leading-[1.4] xl:leading-[1.17] tracking-[-0.2px] md:tracking-[-0.5px] xl:tracking-[-1.716px] text-rust">
          {role}
        </p>

        {/* Bio paragraphs */}
        <div className="flex flex-col gap-5 md:gap-6 xl:gap-[27px] mt-2 xl:mt-[10px]">
          {bio.map((para, i) => (
            <p
              key={i}
              className="font-normal text-[15px] md:text-[18px] xl:text-[25px] leading-[1.65] md:leading-[1.6] xl:leading-[1.52] tracking-[-0.2px] md:tracking-[-0.4px] xl:tracking-[-1.716px] text-navy"
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
