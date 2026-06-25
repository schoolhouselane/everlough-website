'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/cn'

const items = [
  {
    number: '01',
    title:  'Control or material influence',
    body:   'We acquire majority positions or take a material minority where governance allows us to shape decisions. Passive capital is not what we do — and not what our portfolio companies need from us.',
  },
  {
    number: '02',
    title:  'Operators in the seats',
    body:   "Our leaders sit on the boards of the businesses we own, and step into executive roles where the situation requires it. We do not outsource change to consultants or hand the running of a business to people who do not know it.",
  },
  {
    number: '03',
    title:  'Patient capital, deliberate growth',
    body:   "We hold for as long as the business is best served by Everlough's stewardship. Growth is funded by proven unit economics, not by leverage or by raising more capital against a higher multiple.",
  },
]

function MinusIcon() {
  return (
    <div className="w-[34px] h-[34px] md:w-[44px] md:h-[44px] xl:w-[54px] xl:h-[54px] rounded-full border border-cream/60 flex items-center justify-center shrink-0">
      <svg width="16" height="2" viewBox="0 0 16 2" fill="none" className="xl:w-[20px]">
        <path d="M2 1h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-cream" />
      </svg>
    </div>
  )
}

function PlusIcon() {
  return (
    <div className="w-[34px] h-[34px] md:w-[44px] md:h-[44px] xl:w-[54px] xl:h-[54px] rounded-full border border-cream/60 flex items-center justify-center shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="xl:w-[20px] xl:h-[20px]">
        <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-cream" />
      </svg>
    </div>
  )
}

export function ApproachOperatingModel() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative bg-rust overflow-hidden">
      <div className="xl:flex xl:min-h-[680px]">
        {/* Left: content */}
        <div className="px-5 md:px-10 xl:pl-[106px] xl:pr-16 py-16 md:py-20 xl:py-[100px] xl:w-[55%] xl:shrink-0 relative z-10">
          <h2 className={cn(
            'font-bold leading-[1.2] text-cream mb-12 md:mb-16 xl:mb-[80px]',
            'text-[30px] tracking-[-0.8px]',
            'md:text-[46px] md:tracking-[-1.2px]',
            'xl:text-[60px] xl:leading-[81.12px] xl:tracking-[-1.716px]',
          )}>
            The Operating Model.
          </h2>

          <div>
            {items.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div key={item.number}>
                  <div className="border-t border-cream/20" />

                  {/* Row — clickable */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 md:py-8 xl:py-[28px] text-left"
                  >
                    <div className="flex items-center gap-5 md:gap-8 xl:gap-[40px] min-w-0">
                      <span className={cn(
                        'font-semibold text-cream/50 shrink-0 leading-[1]',
                        'text-[20px] tracking-[-0.4px]',
                        'md:text-[28px] md:tracking-[-0.8px]',
                        'xl:text-[40px] xl:tracking-[-1.716px]',
                      )}>
                        {item.number}
                      </span>
                      <span className={cn(
                        'font-medium text-cream leading-[1.3]',
                        'text-[18px] tracking-[-0.3px]',
                        'md:text-[24px] md:tracking-[-0.6px]',
                        'xl:text-[30px] xl:tracking-[-1.716px]',
                      )}>
                        {item.title}
                      </span>
                    </div>
                    {isOpen ? <MinusIcon /> : <PlusIcon />}
                  </button>

                  {/* Expanded body */}
                  {isOpen && (
                    <p className={cn(
                      'font-normal text-cream/85 pb-6 md:pb-8 xl:pb-[28px]',
                      'text-[15px] leading-[1.65] tracking-[-0.2px]',
                      'md:text-[18px] md:tracking-[-0.4px]',
                      'xl:text-[22px] xl:leading-[41px] xl:tracking-[-1.716px]',
                      'xl:max-w-[540px]',
                    )}>
                      {item.body}
                    </p>
                  )}

                  {i === items.length - 1 && <div className="border-t border-cream/20" />}
                </div>
              )
            })}
          </div>
        </div>

        {/* Right: cityscape image — desktop only */}
        <div className="hidden xl:block xl:flex-1 relative">
          <Image
            src="/images/approach/operating-model.png"
            alt="London city financial district"
            fill
            sizes="(max-width: 1280px) 0vw, 50vw"
            className="object-cover object-center"
          />
          {/* Gradient fade from left */}
          <div className="absolute inset-0 bg-gradient-to-r from-rust via-rust/20 to-transparent" />
        </div>
      </div>

      {/* Mobile: image below content */}
      <div className="xl:hidden relative h-[240px] md:h-[340px]">
        <Image
          src="/images/approach/operating-model.png"
          alt="London city financial district"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 0vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rust/60 to-transparent" />
      </div>
    </section>
  )
}
