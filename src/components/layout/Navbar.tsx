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

interface NavbarProps {
  transparent?: boolean
}

export function Navbar({ transparent = false }: NavbarProps) {
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

  const isDark = transparent && !scrolled && !menuOpen

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled || menuOpen
            ? 'bg-white shadow-sm'
            : transparent
            ? 'bg-transparent'
            : 'bg-white',
        )}
      >
        <div className="mx-auto px-5 md:px-10 xl:px-[100px] h-[90px] flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="shrink-0 z-10">
            <Image
              src={isDark ? '/images/logo-white.png' : '/images/logo-black.png'}
              alt="Everlough"
              width={218}
              height={60}
              priority
              className="h-[38px] md:h-[42px] xl:h-[48px] w-auto"
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
                    'py-1 text-[18px] transition-opacity hover:opacity-60',
                    isActive ? 'font-bold' : 'font-normal',
                    isDark ? 'text-white' : 'text-navy',
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
              className={cn(
                'hidden xl:inline-flex rounded-full border px-6 py-2 text-base font-medium uppercase tracking-widest transition-opacity hover:opacity-70',
                isDark ? 'border-white text-white' : 'border-navy text-navy',
              )}
            >
              Speak with us
            </a>

            {/* Hamburger — mobile + tablet */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className={cn(
                'xl:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px]',
              )}
            >
              <span
                className={cn(
                  'block w-6 h-[2px] transition-all duration-300',
                  menuOpen ? 'rotate-45 translate-y-2' : '',
                  isDark ? 'bg-white' : 'bg-navy',
                )}
              />
              <span
                className={cn(
                  'block w-6 h-[2px] transition-all duration-300',
                  menuOpen ? 'opacity-0' : '',
                  isDark ? 'bg-white' : 'bg-navy',
                )}
              />
              <span
                className={cn(
                  'block w-6 h-[2px] transition-all duration-300',
                  menuOpen ? '-rotate-45 -translate-y-2' : '',
                  isDark ? 'bg-white' : 'bg-navy',
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / Tablet dropdown menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-white flex flex-col xl:hidden transition-all duration-300',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
      >
        <div className="h-[90px]" />
        <nav className="flex flex-col px-5 md:px-10 pt-8 pb-10 gap-2 flex-1 overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-4 text-[28px] md:text-[32px] font-medium text-navy border-b border-navy/10 transition-opacity hover:opacity-60"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-8 self-start rounded-full border border-navy px-6 py-3 text-base font-medium uppercase tracking-widest text-navy transition-opacity hover:opacity-70"
          >
            Speak with us
          </a>
        </nav>
      </div>
    </>
  )
}
