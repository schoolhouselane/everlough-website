import Image from 'next/image'

const siteLinks = ['Approach', 'Portfolio', 'Leadership', 'Track Record', 'Contact']

const offices = [
  { city: 'Dublin',  lines: ['6 Fern Road, Sandyford', 'D18 FP98, Ireland'] },
  { city: 'Belfast', lines: ['Linen Quarter', 'BT2 7GE'] },
  { city: 'London',  lines: ['Bishopsgate, EC2N'] },
]

export function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="max-w-[1730px] mx-auto px-[156px] pt-[92px] pb-0">
        <div className="flex gap-[168px] items-start">
          {/* Brand */}
          <div className="w-[440px] shrink-0 flex flex-col gap-4">
            <Image
              src="/images/logo-white.png"
              alt="Everlough"
              width={218}
              height={60}
              className="h-[45px] w-auto"
            />
            <p className="font-light text-[20px] leading-[1.55] text-cream/81 mt-2">
              A private operating platform acquiring, stabilising and scaling businesses where value is constrained by execution rather than market opportunity.
            </p>
          </div>

          {/* Site nav */}
          <div className="flex gap-[60px]">
            <div className="flex flex-col gap-5 min-w-[160px]">
              <p className="font-medium text-[20px]">Site</p>
              <ul className="flex flex-col gap-[15px]">
                {siteLinks.map((link) => (
                  <li key={link}>
                    <a href={`/${link.toLowerCase().replace(' ', '-')}`} className="font-light text-[18px] transition-opacity hover:opacity-60">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Offices */}
            <div className="flex flex-col gap-5 min-w-[214px]">
              <p className="font-medium text-[20px]">Offices</p>
              <div className="flex flex-col gap-[17px]">
                {offices.map((office) => (
                  <div key={office.city} className="flex flex-col gap-[7px]">
                    <p className="font-normal text-[18px]">{office.city}</p>
                    {office.lines.map((line) => (
                      <p key={line} className="font-light text-[18px] leading-[1.3]">{line}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Enquiries */}
            <div className="flex flex-col gap-5 min-w-[221px]">
              <p className="font-medium text-[20px]">Enquiries</p>
              <div className="flex flex-col gap-3">
                <a href="mailto:enquiries@everlough.com" className="font-light text-[18px] transition-opacity hover:opacity-60">
                  enquiries@everlough.com
                </a>
                <a href="tel:+35316853600" className="font-light text-[18px] transition-opacity hover:opacity-60">
                  +353 1 685 3600
                </a>
              </div>
              <a
                href="/contact"
                className="mt-3 inline-flex w-fit rounded-full border border-cream px-6 py-2 text-base font-medium uppercase tracking-widest transition-opacity hover:opacity-70"
              >
                Speak with us →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-[88px] border-t border-cream/20 flex items-center justify-between py-6">
          <p className="font-light text-[18px] text-cream/80">
            © 2026 Everlough Group Limited. Registered in Ireland, No. 654321.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="font-light text-[18px] transition-opacity hover:opacity-60">Privacy</a>
            <a href="/legal"   className="font-light text-[18px] transition-opacity hover:opacity-60">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
