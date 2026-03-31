'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { label: 'About',      href: '#about'      },
  { label: 'Services',   href: '#services'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
]

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-600"
        style={{
          background: scrolled
            ? 'color-mix(in srgb, #0b1012 88%, transparent)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(243,240,236,0.08)' : 'none',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-[4rem] h-[5rem] flex items-center justify-between">
          <Link
            href="/"
            className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#f3f0ec]"
          >
            David Robinson
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="link-line text-[12px] font-medium tracking-[0.08em] uppercase text-[#f3f0ec]/50 hover:text-[#f3f0ec] transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.08em] uppercase px-[2rem] py-[1rem] border border-[#f3f0ec]/20 text-[#f3f0ec]/60 hover:border-[#f3f0ec]/50 hover:text-[#f3f0ec] transition-all duration-300"
          >
            Get in touch
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-1 z-[60] relative"
            aria-label="Toggle menu"
          >
            <span className={`block w-[22px] h-px bg-[#f3f0ec] transition-all duration-400 ease-in-out-quart ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block h-px bg-[#f3f0ec] transition-all duration-400 ease-in-out-quart ${menuOpen ? 'opacity-0 w-[22px]' : 'w-[14px]'}`} />
            <span className={`block w-[22px] h-px bg-[#f3f0ec] transition-all duration-400 ease-in-out-quart ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <div
        className="fixed inset-0 z-40 flex flex-col justify-center px-[2rem] md:hidden transition-all duration-600 ease-in-out-quart"
        style={{
          background: '#0b1012',
          opacity:    menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        <div className="space-y-6 mb-16">
          {links.map(({ label, href }, i) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block text-[11vw] leading-none text-[#f3f0ec]/70 hover:text-[#f3f0ec] transition-colors duration-300 tracking-[-0.02em]"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="mailto:hello@davidrobinson.com"
          onClick={() => setMenuOpen(false)}
          className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#f3f0ec]/25"
        >
          hello@davidrobinson.com
        </a>
      </div>
    </>
  )
}
