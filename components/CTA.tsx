'use client'

import Image from 'next/image'
import { useInView } from '@/hooks/useInView'

export default function CTA() {
  const { ref, inView } = useInView()
  const anim = inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0b1012] flex flex-col"
      style={{ minHeight: '75vh' }}
    >

      {/* ── Background image ── */}
      <div className="absolute inset-0">
        <Image
          src="/images/david-cta.png"
          alt="David Robinson"
          fill
          className="object-cover object-[center_30%]"
          sizes="100vw"
          quality={90}
        />
        {/* Base dark overlay */}
        <div className="absolute inset-0 bg-[#0b1012]/96" />
        {/* Gradient: heavier top & bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1012] via-[#0b1012]/88 to-[#0b1012]" />
      </div>

      {/* ── Section label ── */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-[4rem] w-full">
        <div className="flex items-center border-b border-[#f3f0ec]/10 py-[1.6rem]">
          <span className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#f3f0ec]/30">
            ◆ &nbsp;Contact
          </span>
        </div>
      </div>

      {/* ── Main content — grows to fill space ── */}
      <div
        ref={ref}
        className={`relative z-10 flex-1 max-w-[1440px] mx-auto px-[4rem] w-full pt-[5rem] pb-[3rem] transition-[opacity,transform] duration-900 ease-out-quart ${anim}`}
      >
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-[2.5rem]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            <span className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#f3f0ec]/30">
              Available for new projects
            </span>
          </div>

          <h2 className="text-[40px] md:text-[56px] lg:text-[68px] font-normal text-white leading-[1] tracking-[-0.03em] mb-[2rem]">
            If you&rsquo;re scaling and something feels off operationally,{' '}
            <span className="text-white/30">let&rsquo;s fix it.</span>
          </h2>

          <p className="text-[16px] leading-[20px] text-[#f3f0ec]/40 max-w-md mb-[3rem]">
            Book a call. We&rsquo;ll figure out what&rsquo;s breaking and whether I&rsquo;m the right person to fix it.
          </p>

          <a
            href="mailto:hello@davidrobinson.com"
            className="inline-flex items-center gap-3 px-[2.4rem] py-[1.5rem] bg-[#f3f0ec] text-[#0b1012] text-[12px] font-medium tracking-[0.08em] uppercase hover:bg-white transition-colors duration-300"
          >
            ↳ &nbsp;Book a call
          </a>
        </div>
      </div>

      {/* ── "David Robinson" — anchored to the bottom, bleeds out ── */}
      <div
        className="relative z-10 w-full overflow-hidden select-none pointer-events-none"
        aria-hidden
        style={{ lineHeight: 0.85 }}
      >
        <p
          className="text-white font-bold whitespace-nowrap"
          style={{
            fontSize: 'clamp(80px, 16vw, 260px)',
            opacity: 0.12,
            letterSpacing: '-0.03em',
            lineHeight: 0.85,
            marginBottom: '-0.12em', /* pulls text flush to bottom edge */
          }}
        >
          David Robinson
        </p>
      </div>

    </section>
  )
}
