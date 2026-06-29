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

      {/* ── Desktop: image + two-column flex layout ── */}
      <div className="hidden xl:block relative rounded-[15px] overflow-hidden min-h-[960px]">

        {/* Background image */}
        <div className="absolute inset-0">
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

        {/* Two-column overlay: flex prevents any overlap */}
        <div className="absolute inset-0 z-10 flex items-start gap-[40px] px-[62px] pt-[120px] pb-[120px]">
          {/* Left: text */}
          <div className="flex flex-col gap-[40px] flex-1 min-w-0">
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
              <div className="self-start border-b border-white pb-[10px]">
                <a
                  href="mailto:enquiries@everloughgroup.com"
                  className="font-bold text-[24px] leading-[1.3] text-white lowercase tracking-[-0.4px] hover:opacity-70 transition-opacity"
                >
                  enquiries@everloughgroup.com
                </a>
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

          {/* Right: form — flex-1 so it scales with viewport, capped at 628px */}
          <div className="flex-1 max-w-[628px] min-w-[400px] flex flex-col justify-start">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* ── Mobile / Tablet: form in normal flow ── */}
      <div className="xl:hidden flex flex-col justify-start">
        <ContactForm />
      </div>

      {/* ── Mobile / Tablet: contact info below form ── */}
      <div className="xl:hidden mt-8 md:mt-10 flex flex-col gap-6">
        <div className="flex flex-col gap-3 pt-6 border-t border-navy/20">
          <div className="self-start border-b border-navy pb-2">
            <a
              href="mailto:enquiries@everloughgroup.com"
              className="font-bold text-[18px] md:text-[20px] leading-[1.3] text-navy lowercase hover:opacity-70 transition-opacity"
            >
              enquiries@everloughgroup.com
            </a>
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
