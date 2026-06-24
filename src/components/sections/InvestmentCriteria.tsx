import { UnderlineLink } from '@/components/ui/UnderlineLink'

interface Stat {
  value:       string
  label:       string
  description: string
}

const stats: Stat[] = [
  { value: '£40m',    label: 'Ticket Size',    description: 'Enterprise value' },
  { value: 'UK & IR', label: 'Geography',      description: 'Opportunistically elsewhere' },
  { value: 'IT',      label: 'Sectors',        description: 'Technology services, data & analytics, business services' },
  { value: '@',       label: 'Direct Contact', description: 'enquiries@everlough.com · +353 1 685 3600' },
]

export function InvestmentCriteria() {
  return (
    <section className="bg-forest mt-12 md:mt-20 xl:mt-[159px]">
      <div className="mx-auto px-5 md:px-10 xl:px-[118px] py-12 md:py-16 xl:py-[87px]">
        <div className="flex flex-col xl:flex-row gap-10 md:gap-12 xl:gap-[278px] xl:items-center">

          {/* Left: headline + CTA */}
          <div className="flex flex-col gap-7 md:gap-8 xl:gap-[60px] xl:w-[563px] xl:shrink-0">
            <h2 className="font-bold text-[32px] md:text-[44px] xl:text-[60px] leading-[1.2] xl:leading-[1.35] tracking-[-0.8px] xl:tracking-[-1.716px] capitalize text-cream text-balance">
              We move quickly where the situation warrants it.
            </h2>
            <UnderlineLink href="/contact" light>
              Start a confidential conversation
            </UnderlineLink>
          </div>

          {/* Right: 2×2 stats grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:gap-x-16 md:gap-y-12 xl:gap-x-[76px] xl:gap-y-[78px] xl:flex-1">
            {stats.map((stat) => (
              <StatBlock key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StatBlock({ value, label, description }: Stat) {
  return (
    <div className="flex flex-col gap-2 xl:gap-[11px] text-cream">
      <p className="font-semibold text-[40px] md:text-[52px] xl:text-[70px] leading-[1.1] xl:leading-[1.16] tracking-[-1px] xl:tracking-[-1.716px]">
        {value}
      </p>
      <p className="font-medium text-[16px] md:text-[18px] xl:text-[25px] leading-[1.4]">
        {label}
      </p>
      <p className="font-light text-[14px] md:text-[16px] xl:text-[25px] leading-[1.45] xl:leading-[1.4] tracking-[-0.2px] xl:tracking-[-1.716px]">
        {description}
      </p>
    </div>
  )
}
