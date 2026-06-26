'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { UnderlineLink } from '@/components/ui/UnderlineLink'
import { team, type TeamMember } from '@/data/team'

export function Leadership() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canLeft, setCanLeft]   = useState(false)
  const [canRight, setCanRight] = useState(false)

  const updateState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 4)
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }, [])

  useEffect(() => { updateState() }, [updateState])

  const scrollBy = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const card = el.children[0] as HTMLElement
    const step = card.offsetWidth + 35
    el.scrollBy({ left: dir === 'right' ? step : -step, behavior: 'smooth' })
  }

  return (
    <section className="mx-auto px-5 md:px-10 xl:px-[92px] pt-12 md:pt-20 xl:pt-[120px]">
      <div className="flex items-start justify-between mb-8 md:mb-10 xl:mb-[49px]">
        <SectionHeading className="xl:w-[406px]">Operators in the Seats.</SectionHeading>
        <UnderlineLink href="/leadership" className="shrink-0 mt-1">See more</UnderlineLink>
      </div>

      {/* Slider track */}
      <div
        ref={scrollRef}
        onScroll={updateState}
        className="flex gap-[21px] xl:gap-[35px] overflow-x-auto scroll-smooth scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {team.map((member) => (
          <PersonCard key={member.id} {...member} />
        ))}
      </div>

      {/* Arrow navigation */}
      <div className="flex justify-end gap-3 mt-6 xl:mt-8">
        {canLeft && (
          <button
            onClick={() => scrollBy('left')}
            aria-label="Previous"
            className="w-[50px] h-[50px] xl:w-[61px] xl:h-[61px] rounded-full border border-navy/30 flex items-center justify-center hover:bg-navy/5 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 4L5 9l6 5" stroke="#1a1d23" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
        {canRight && (
          <button
            onClick={() => scrollBy('right')}
            aria-label="Next"
            className="w-[50px] h-[50px] xl:w-[61px] xl:h-[61px] rounded-full border border-navy/30 flex items-center justify-center hover:bg-navy/5 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M7 4l6 5-6 5" stroke="#1a1d23" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>
    </section>
  )
}

function PersonCard({ name, role, image, width, height }: TeamMember) {
  return (
    <div
      className="flex flex-col gap-4 xl:gap-5 shrink-0 w-[72vw] md:w-[42vw] xl:w-[calc(25%-27px)]"
      style={{ scrollSnapAlign: 'start' }}
    >
      <div className="overflow-hidden rounded-[15px] shadow-[0px_3px_16.1px_0px_rgba(0,0,0,0.27)]">
        <Image
          src={image}
          alt={name}
          width={width}
          height={height}
          className="w-full h-auto"
          sizes="(max-width: 768px) 72vw, (max-width: 1280px) 42vw, 25vw"
        />
      </div>
      <div className="flex flex-col gap-1 xl:gap-[6px]">
        <p className="font-normal text-[12px] md:text-[14px] xl:text-[20px] leading-[1.5] tracking-[-0.2px] md:tracking-[-0.5px] xl:tracking-[-1.716px] text-rust">
          {role}
        </p>
        <p className="font-medium text-[16px] md:text-[18px] xl:text-[30px] leading-[1.3] tracking-[-0.3px] md:tracking-[-0.5px] xl:tracking-[-1.716px] text-navy">
          {name}
        </p>
      </div>
    </div>
  )
}
