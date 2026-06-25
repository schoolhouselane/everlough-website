import Image from 'next/image'
import { cn } from '@/lib/cn'

const items = [
  { number: '01', title: 'Control or material influence' },
  { number: '02', title: 'Operators in the seats' },
  { number: '03', title: 'Patient capital, deliberate growth' },
]

function PlusIcon() {
  return (
    <div className="w-[34px] h-[34px] md:w-[44px] md:h-[44px] xl:w-[54px] xl:h-[54px] rounded-full border border-cream/60 flex items-center justify-center shrink-0">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="text-cream xl:w-[20px] xl:h-[20px]"
      >
        <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  )
}

export function ApproachOperatingModel() {
  return (
    <section className="relative bg-rust overflow-hidden">
      <div className="xl:flex xl:min-h-[680px]">
        {/* Left: content */}
        <div className="px-5 md:px-10 xl:pl-[106px] xl:pr-16 py-16 md:py-20 xl:py-[100px] xl:w-[55%] xl:shrink-0 relative z-10">
          <h2 className={cn(
            'font-bold leading-[1.2] text-cream mb-12 md:mb-16 xl:mb-[80px]',
            'text-[30px] tracking-[-0.8px]',
            'md:text-[46px] md:tracking-[-1.2px]',
            'xl:text-[60px] xl:tracking-[-1.716px]',
          )}>
            The Operating Model.
          </h2>

          <div>
            {items.map((item, i) => (
              <div key={item.number}>
                <div className="border-t border-cream/20" />
                <div className="flex items-center justify-between gap-6 py-6 md:py-8 xl:py-[28px]">
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
                      'xl:text-[35px] xl:tracking-[-1.716px]',
                    )}>
                      {item.title}
                    </span>
                  </div>
                  <PlusIcon />
                </div>
                {i === items.length - 1 && <div className="border-t border-cream/20" />}
              </div>
            ))}
          </div>
        </div>

        {/* Right: cityscape image — desktop only */}
        <div className="hidden xl:block xl:flex-1 relative">
          <Image
            src="/images/approach/operating-model.jpg"
            alt="London city financial district"
            fill
            className="object-cover object-center"
          />
          {/* Gradient fade from left */}
          <div className="absolute inset-0 bg-gradient-to-r from-rust via-rust/20 to-transparent" />
        </div>
      </div>

      {/* Mobile: image below content */}
      <div className="xl:hidden relative h-[240px] md:h-[340px]">
        <Image
          src="/images/approach/operating-model.jpg"
          alt="London city financial district"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rust/60 to-transparent" />
      </div>
    </section>
  )
}
