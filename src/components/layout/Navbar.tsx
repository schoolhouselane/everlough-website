'use client'

import { useState, useEffect } from 'react'
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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isDark = transparent && !scrolled

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : transparent ? 'bg-transparent' : 'bg-white'
      )}
    >
      <div className="max-w-[1730px] mx-auto px-[100px] h-[90px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <Image
            src={isDark ? '/images/logo-white.png' : '/images/logo-black.png'}
            alt="Everlough"
            width={218}
            height={60}
            priority
            className="h-[45px] w-auto"
          />
        </a>

        {/* Nav links */}
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} dark={isDark}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="/contact"
          className={cn(
            'rounded-full border px-6 py-2 text-base font-medium uppercase tracking-widest transition-opacity hover:opacity-70',
            isDark ? 'border-white text-white' : 'border-navy text-navy'
          )}
        >
          Speak with us
        </a>
      </div>
    </header>
  )
}

function NavLink({ href, children, dark }: { href: string; children: React.ReactNode; dark: boolean }) {
  return (
    <a
      href={href}
      className={cn(
        'py-1 text-[18px] font-medium transition-opacity hover:opacity-60',
        dark ? 'text-white' : 'text-navy'
      )}
    >
      {children}
    </a>
  )
}
