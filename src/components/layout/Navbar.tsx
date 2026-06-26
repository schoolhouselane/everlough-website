'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { cn } from '@/lib/cn'

const navLinks = [
  { label: 'Home',       href: '/' },
  { label: 'Approach',   href: '/approach' },
  { label: 'Portfolio',  href: '/portfolio' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Contact',    href: '/contact' },
]

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function Navbar() {
  const pathname = usePathname()
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      if (window.scrollY > 40) setMenuOpen(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1280) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'bg-bg shadow-sm' : 'bg-transparent',
        )}
      >
        <div className="mx-auto px-5 md:px-10 xl:px-[100px] h-[90px] flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="shrink-0 z-10">
            <Image
              src="/images/everlough-logo-navbar.png"
              alt="Everlough"
              width={1007}
              height={276}
              priority
              className="h-[38px] md:h-[42px] xl:h-[48px] w-auto mix-blend-multiply"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'py-1 text-[18px] border-b-2 transition-colors text-black',
                    isActive
                      ? 'font-bold border-current'
                      : 'font-normal border-transparent hover:font-bold hover:border-current',
                  )}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <a
              href="/contact"
              className="hidden xl:inline-flex rounded-full border border-black text-black px-6 py-2 text-base font-medium uppercase tracking-widest transition-all hover:bg-[#242424] hover:text-white hover:border-[#242424] hover:opacity-100"
            >
              Speak with us
            </a>

            {/* Hamburger — mobile + tablet */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="xl:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px]"
            >
              <span className="block w-6 h-[2px] bg-black transition-all duration-300" />
              <span className="block w-6 h-[2px] bg-black transition-all duration-300" />
              <span className="block w-6 h-[2px] bg-black transition-all duration-300" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / Tablet full-screen menu — matches Figma node 112:834 */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-[#f2f2f2] flex flex-col xl:hidden transition-all duration-300',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
      >
        {/* Menu header: logo + X */}
        <div className="flex items-center justify-between h-[64px] px-[16px] mx-[24px] border-b border-[rgba(54,31,6,0.16)] shrink-0">
          <a href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/everlough-logo-navbar.png"
              alt="Everlough"
              width={123}
              height={34}
              className="h-[34px] w-auto opacity-80 mix-blend-multiply"
            />
          </a>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="w-[30px] h-[30px] flex items-center justify-center text-[#1e1e20]"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Menu body */}
        <div className="flex flex-col gap-[39px] px-[24px] pt-[40px] overflow-y-auto">
          {/* Nav links */}
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-black py-[2px] text-[16px] font-normal text-[#1e1e20] capitalize leading-[27.42px]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA button */}
          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center h-[44px] w-[186px] rounded-full border border-[#1e1e20] px-6 text-[16px] font-medium uppercase text-[#1e1e20] transition-all hover:bg-[#242424] hover:text-white hover:border-[#242424]"
          >
            Speak with us
          </a>
        </div>
      </div>
    </>
  )
}
