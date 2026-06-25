import { cn } from '@/lib/cn'

const stats = [
  { value: '02',  suffix: '',  label: 'Core engines at the centre of the group.' },
  { value: '04',  suffix: '',  label: 'Operating companies held in total' },
  { value: '£37', suffix: 'm', label: 'Group revenue, last reported' },
  { value: '650', suffix: '+', label: 'People across the operating companies' },
]

export function PortfolioStats() {
  return (
    <section className="px-5 md:px-10 xl:px-[106px] pt-12 md:pt-16 xl:pt-20 pb-12 md:pb-16 xl:pb-20">
      {/* Intro text */}
      <p className="font-medium text-[22px] md:text-[35px] xl:text-[45px] leading-[1.4] xl:leading-[70px] tracking-[-0.5px] md:tracking-[-1px] xl:tracking-[-1.716px] text-navy mb-10 md:mb-14 xl:mb-16 max-w-[880px]">
        We hold a small number of companies, decided slowly, run closely.
        Numbers are kept current; commentary is kept short.
      </p>

      {/* Stats grid */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-8 md:gap-x-12 xl:gap-x-[116px] gap-y-10 md:gap-y-12">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2 md:gap-3 xl:gap-[26px]">
            {/* Rule line */}
            <div className="h-px bg-navy w-12 md:w-16 xl:w-[92px]" />

            {/* Large number */}
            <p className="font-medium text-[52px] md:text-[80px] xl:text-[100px] leading-[0.95] tracking-[-0.9px] md:tracking-[-1.2px] xl:tracking-[-1.716px] text-navy">
              {stat.value}
              {stat.suffix && (
                <span className={cn('text-rust', stat.suffix === 'm' ? 'text-rust' : 'text-rust')}>
                  {stat.suffix}
                </span>
              )}
            </p>

            {/* Label */}
            <p className="font-normal text-[14px] md:text-[20px] xl:text-[28px] leading-[1.4] xl:leading-[38px] text-navy">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
