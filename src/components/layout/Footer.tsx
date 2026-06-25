import Image from 'next/image'

const siteLinks = [
  { label: 'Approach',   href: '/approach' },
  { label: 'Portfolio',  href: '/portfolio' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Contact',    href: '/contact' },
]

const offices = [
  { city: 'Dublin',  lines: ['6 Fern Road, Sandyford', 'D18 FP98, Ireland'] },
  { city: 'Belfast', lines: ['Linen Quarter', 'BT2 7GE'] },
  { city: 'London',  lines: ['Bishopsgate, EC2N'] },
]

export function Footer() {
  return (
    <footer className="bg-navy mt-12 md:mt-20 xl:mt-0">
      <div className="mx-auto px-5 md:px-10 xl:px-[156px] pt-10 md:pt-14 xl:pt-[92px]">

        {/* Top grid */}
        <div className="flex flex-col xl:flex-row gap-10 md:gap-12 xl:gap-[168px] xl:items-start">

          {/* Brand */}
          <div className="xl:w-[440px] xl:shrink-0 flex flex-col gap-4">
            <Image
              src="/images/logo-white.png"
              alt="Everlough"
              width={218}
              height={60}
              className="h-[38px] xl:h-[45px] w-auto"
            />
            <p className="font-light text-[15px] md:text-[17px] xl:text-[18px] leading-[1.55] text-[#f5f1e8]/80 mt-1">
              A private operating platform acquiring, stabilising and scaling businesses where value
              is constrained by execution rather than market opportunity.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:flex xl:gap-[60px] gap-x-6 gap-y-8 min-w-0">

            {/* Site nav */}
            <div className="flex flex-col gap-4 xl:gap-5 xl:w-[160px] xl:shrink-0">
              <p className="font-medium text-[15px] xl:text-[20px] text-[#f5f1e8]">Site</p>
              <ul className="flex flex-col gap-3 xl:gap-[15px]">
                {siteLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-light text-[14px] xl:text-[18px] text-[#f5f1e8] transition-opacity hover:opacity-60"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Offices */}
            <div className="flex flex-col gap-4 xl:gap-5 xl:w-[214px] xl:shrink-0">
              <p className="font-medium text-[15px] xl:text-[20px] text-[#f5f1e8]">Offices</p>
              <div className="flex flex-col gap-4 xl:gap-[17px]">
                {offices.map((office) => (
                  <div key={office.city} className="flex flex-col gap-1 xl:gap-[7px]">
                    <p className="font-medium text-[14px] xl:text-[18px] text-[#f5f1e8]">{office.city}</p>
                    {office.lines.map((line) => (
                      <p key={line} className="font-light text-[13px] xl:text-[18px] leading-[1.3] text-[#f5f1e8]/80">
                        {line}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Enquiries */}
            <div className="flex flex-col gap-4 xl:gap-5 xl:w-[221px] xl:shrink-0 col-span-2 md:col-span-1">
              <p className="font-medium text-[15px] xl:text-[20px] text-[#f5f1e8]">Enquiries</p>
              <div className="flex flex-col gap-2 xl:gap-3">
                <a
                  href="mailto:enquiries@everlough.com"
                  className="font-light text-[14px] xl:text-[18px] text-[#f5f1e8] transition-opacity hover:opacity-60 whitespace-nowrap"
                >
                  enquiries@everlough.com
                </a>
                <a
                  href="tel:+35316853600"
                  className="font-light text-[14px] xl:text-[18px] text-[#f5f1e8] transition-opacity hover:opacity-60"
                >
                  +353 1 685 3600
                </a>
              </div>
              <a
                href="/contact"
                className="mt-2 xl:mt-3 inline-flex w-fit rounded-full border border-[#f5f1e8] text-[#f5f1e8] px-5 py-2 text-[13px] xl:text-base font-medium uppercase tracking-widest transition-opacity hover:opacity-70"
              >
                Speak with us →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 md:mt-12 xl:mt-[88px] border-t border-[#f5f1e8]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 py-5 xl:py-6">
          <p className="font-light text-[12px] md:text-[14px] xl:text-[18px] text-[#f5f1e8]/70">
            © 2026 Everlough Group Limited. Registered in Ireland, No. 654321.
          </p>
          <div className="flex gap-5">
            <a href="/privacy" className="font-light text-[12px] md:text-[14px] xl:text-[18px] text-[#f5f1e8] transition-opacity hover:opacity-60">
              Privacy
            </a>
            <a href="/legal" className="font-light text-[12px] md:text-[14px] xl:text-[18px] text-[#f5f1e8] transition-opacity hover:opacity-60">
              Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
