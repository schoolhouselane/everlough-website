import { UnderlineLink } from '@/components/ui/UnderlineLink'

interface Stat {
  value:       string
  label:       string
  description: string
}

const stats: Stat[] = [
  { value: '£40m',   label: 'Ticket Size',     description: 'Enterprise value' },
  { value: 'UK & IR', label: 'Geography',       description: 'Opportunistically elsewhere' },
  { value: 'IT',      label: 'Sectors',         description: 'Technology services, data & analytics, business services' },
  { value: '@',       label: 'Direct Contact',  description: 'enquiries@everlough.com · +353 1 685 3600' },
]

export function InvestmentCriteria() {
  return (
    <section className="bg-forest mx-[-10px] mt-[159px]">
      <div className="max-w-[1730px] mx-auto px-[118px] py-[87px]">
        <div className="flex gap-[278px] items-center">
          {/* Left: headline + CTA */}
          <div className="flex flex-col gap-[60px] w-[563px] shrink-0">
            <h2 className="font-bold text-[60px] leading-[1.35] tracking-[-1.716px] capitalize text-cream text-balance">
              We move quickly where the situation warrants it.
            </h2>
            <UnderlineLink href="/contact" light>
              Start a confidential conversation
            </UnderlineLink>
          </div>

          {/* Right: 2×2 stats grid */}
          <div className="grid grid-cols-2 gap-x-[76px] gap-y-[78px] flex-1">
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
    <div className="flex flex-col gap-[11px] text-cream">
      <p className="font-semibold text-[70px] leading-[1.16] tracking-[-1.716px]">
        {value}
      </p>
      <p className="font-medium text-[25px] leading-[1.4]">
        {label}
      </p>
      <p className="font-light text-[25px] leading-[1.4] tracking-[-1.716px]">
        {description}
      </p>
    </div>
  )
}
