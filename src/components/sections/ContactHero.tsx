import Image from 'next/image'
import { ContactForm } from './ContactForm'

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M4 12L12 4M12 4H6M12 4v6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const socials = [
  { label: 'LinkedIn',  href: 'https://linkedin.com' },
  { label: 'Facebook',  href: 'https://facebook.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
]

export function ContactHero() {
  return (
    <section className="px-5 md:px-10 xl:px-[106px] pt-[100px] md:pt-[120px] xl:pt-[149px] pb-12 md:pb-16 xl:pb-0">

      {/* ── Mobile / Tablet heading ── */}
      <div className="xl:hidden mb-8 md:mb-10">
        <div className="relative w-full h-[260px] md:h-[380px] rounded-[15px] overflow-hidden">
          <Image
            src="/images/contact/contact.png"
            alt="Everlough offices"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy/60" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-8">
            <h1 className="font-medium text-[28px] md:text-[40px] leading-[1.2] tracking-[-0.8px] md:tracking-[-1.2px] text-white capitalize mb-3">
              Let&apos;s discuss the next chapter.
            </h1>
            <p className="font-normal text-[14px] md:text-[18px] leading-[1.55] text-white/80">
              A thirty-minute call. We come with a specific view on the situation.
              You decide whether it&apos;s worth taking further.
            </p>
          </div>
        </div>
      </div>

      {/* ── Single form instance — always rendered ── */}
      <div className="xl:relative xl:rounded-[15px] xl:overflow-hidden xl:min-h-[960px]">

        {/* Desktop background image */}
        <div className="hidden xl:block absolute inset-0">
          <Image
            src="/images/contact/contact.png"
            alt="Everlough offices"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/60 to-navy/10" />
        </div>

        {/* Desktop: left text column (absolutely overlaid on image) */}
        <div className="hidden xl:flex flex-col gap-[40px] absolute left-[62px] top-[120px] max-w-[466px] z-10">
          <div className="flex flex-col gap-[16px]">
            <h1 className="font-bold text-[60px] leading-[81.12px] tracking-[-1.716px] text-white capitalize">
              Let&apos;s discuss the next chapter.
            </h1>
            <p className="font-normal text-[20px] leading-[1.65] text-white/85">
              A thirty-minute call. We come with a specific view on the situation.
              You decide whether it&apos;s worth taking further.
            </p>
          </div>
          <div className="mt-[160px] flex flex-col gap-[11px]">
            <div className="border-b border-white pb-[10px]">
              <p className="font-bold text-[24px] leading-[1.3] text-white lowercase tracking-[-0.4px]">
                enquiries@everloughgroup.com
              </p>
            </div>
            <p className="font-normal text-[16px] leading-[1.75] text-white/80">
              For new opportunities, transaction enquiries, and general correspondence.
            </p>
          </div>
          <div className="flex items-center gap-[30px]">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-normal text-[24px] text-white hover:opacity-70 transition-opacity"
              >
                {s.label}
                <ArrowUpRight className="text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Form — floated right on desktop, normal flow on mobile */}
        <div className="xl:absolute xl:right-[60px] xl:top-[120px] xl:w-[628px] xl:bottom-[120px] z-10 flex flex-col justify-start">
          <ContactForm />
        </div>
      </div>

      {/* ── Mobile / Tablet: contact info below form ── */}
      <div className="xl:hidden mt-8 md:mt-10 flex flex-col gap-6">
        <div className="flex flex-col gap-3 pt-6 border-t border-navy/20">
          <div className="border-b border-navy pb-2">
            <p className="font-bold text-[18px] md:text-[20px] leading-[1.3] text-navy lowercase">
              enquiries@everloughgroup.com
            </p>
          </div>
          <p className="font-normal text-[14px] md:text-[16px] leading-[1.6] text-navy/70">
            For new opportunities, transaction enquiries, and general correspondence.
          </p>
        </div>
        <div className="flex items-center gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-normal text-[16px] text-navy hover:opacity-70 transition-opacity"
            >
              {s.label}
              <ArrowUpRight className="text-navy" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
