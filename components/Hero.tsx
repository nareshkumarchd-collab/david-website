'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const imgRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (imgRef.current)
        imgRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const revealed = (delay = 0) =>
    `transition-[opacity,transform] duration-900 ease-out-quart ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`

  return (
    <section className="grain relative h-screen bg-[#0b1012] overflow-hidden flex flex-col justify-end">

      {/* Full-bleed image + parallax */}
      <div ref={imgRef} className="absolute inset-0 scale-[1.18] origin-top will-change-transform">
        <Image
          src="/images/david-hero.png"
          alt="David Robinson"
          fill priority
          className="object-cover object-[center_20%]"
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1012] via-[#0b1012]/70 to-[#0b1012]/10 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1012]/55 via-transparent to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1012] via-[#0b1012]/45 to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-[4rem] w-full pb-[6rem]">

        {/* Status */}
        <div
          className={`flex items-center gap-3 mb-8 ${revealed(0)}`}
          style={{ transitionDelay: '100ms' }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
          </span>
          <span className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#f3f0ec]/40">
            Founder &amp; Operational Systems Strategist
          </span>
        </div>

        {/* Headline — 400 weight, tight line-height */}
        <h1
          className={`text-[56px] md:text-[72px] lg:text-[96px] font-normal text-white leading-[1] tracking-[-0.03em] mb-8 max-w-3xl ${revealed(0)}`}
          style={{ transitionDelay: '200ms' }}
        >
          Systems breaking
          <br />
          <span className="text-white/40">as you scale?</span>
        </h1>

        {/* Sub + CTA row */}
        <div
          className={`flex flex-col md:flex-row md:items-end gap-8 md:gap-20 ${revealed(0)}`}
          style={{ transitionDelay: '320ms' }}
        >
          <p className="text-[16px] leading-[20px] text-[#f3f0ec]/50 max-w-xs">
            I help founders and COOs fix operational chaos so they can scale with clarity.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="px-[2.4rem] py-[1.5rem] bg-[#f3f0ec] text-[#0b1012] text-[12px] font-medium tracking-[0.08em] uppercase hover:bg-white transition-colors duration-300"
            >
              Get in touch
            </a>
            <a
              href="#services"
              className="link-line group flex items-center gap-2 text-[#f3f0ec]/45 text-[12px] font-medium tracking-[0.08em] uppercase hover:text-[#f3f0ec] transition-colors duration-300"
            >
              View work
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 right-[4rem] flex flex-col items-center gap-2 z-10 transition-opacity duration-900 ease-out-quart ${mounted ? 'opacity-25' : 'opacity-0'}`}
        style={{ transitionDelay: '800ms' }}
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#f3f0ec]" />
        <span className="text-[#f3f0ec] text-[9px] tracking-[0.25em] uppercase" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </span>
      </div>
    </section>
  )
}
