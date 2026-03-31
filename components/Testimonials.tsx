'use client'

import { useState } from 'react'
import { useInView } from '@/hooks/useInView'

const testimonials = [
  {
    quote: "David completely transformed how our operations team functions. What used to take days of back-and-forth now runs automatically. The clarity we gained was immediate — and it stuck.",
    name: 'Sarah Chen',
    role: 'COO, Series B Fintech',
    initials: 'SC',
  },
  {
    quote: "We were drowning in spreadsheets and manual handoffs. David came in, understood the real problem in one conversation, and built a system that our team actually uses every day.",
    name: 'Marcus Webb',
    role: 'Founder, Real Estate Platform',
    initials: 'MW',
  },
  {
    quote: "I've worked with a lot of consultants. Most diagnose but don't fix. David does both. He rebuilt our client onboarding from scratch and cut the time in half.",
    name: 'Priya Nair',
    role: 'VP Operations, Logistics Co.',
    initials: 'PN',
  },
  {
    quote: "We were scaling fast and things were quietly breaking everywhere. David helped us see the whole picture and prioritize what actually mattered. Game-changing clarity.",
    name: 'James Harlow',
    role: 'Founder & CEO, SaaS Startup',
    initials: 'JH',
  },
  {
    quote: "Replaced five tools with one workflow, cut our reporting time by 80%, and our team finally stopped asking where things were. David delivers real outcomes — not decks.",
    name: 'Leila Torres',
    role: 'Director of Operations, Fintech',
    initials: 'LT',
  },
]

function pad(n: number) { return String(n).padStart(2, '0') }

export default function Testimonials() {
  const [current,   setCurrent]   = useState(0)
  const [animating, setAnimating] = useState(false)
  const [dir,       setDir]       = useState<'next'|'prev'>('next')
  const { ref, inView } = useInView()
  const total = testimonials.length

  const go = (d: 'next' | 'prev') => {
    if (animating) return
    setDir(d)
    setAnimating(true)
    setTimeout(() => {
      setCurrent(c => d === 'next' ? (c + 1) % total : (c - 1 + total) % total)
      setAnimating(false)
    }, 300)
  }

  const t = testimonials[current]

  return (
    <section className="bg-white" style={{ borderTop: '1px solid rgba(33,35,37,0.2)' }}>

      {/* Section label + counter + nav */}
      <div className="max-w-[1440px] mx-auto px-[4rem]">
        <div className="flex items-center justify-between border-b border-[#212325]/20 py-[1.6rem]">
          <span className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#212325]/50">
            ◆ &nbsp;Client Stories
          </span>
          <span className="text-[12px] font-medium tracking-[0.08em] text-[#212325]/30" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {pad(current + 1)} / {pad(total)}
          </span>
          <div className="flex items-center gap-2">
            {(['prev','next'] as const).map((d) => (
              <button
                key={d}
                onClick={() => go(d)}
                aria-label={d}
                className="w-[4rem] h-[4rem] flex items-center justify-center border border-[#212325]/20 text-[#212325]/40 hover:border-[#212325]/50 hover:text-[#212325] transition-all duration-300 text-sm"
              >
                {d === 'prev' ? '←' : '→'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div
        ref={ref}
        className={`max-w-[1440px] mx-auto px-[4rem] py-[6rem] md:py-[10rem] transition-[opacity,transform] duration-900 ease-out-quart ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}
      >
        <div className="grid grid-cols-[auto_1fr] gap-[4rem] md:gap-[6rem] items-start">

          {/* Avatar — grayscale like fluid.glass review images */}
          <div
            className="flex-shrink-0 transition-opacity duration-300"
            style={{ opacity: animating ? 0 : 1 }}
          >
            <div className="w-[100px] md:w-[140px] aspect-square bg-[#212325] flex items-center justify-center">
              <span className="text-[#f3f0ec] text-[20px] md:text-[24px] font-normal tracking-[0.1em]">
                {t.initials}
              </span>
            </div>
          </div>

          {/* Quote */}
          <div
            className="transition-all duration-300"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating
                ? `translateX(${dir === 'next' ? '-16px' : '16px'})`
                : 'translateX(0)',
            }}
          >
            <div className="text-[#212325]/18 text-[72px] leading-none mb-2 select-none" aria-hidden>
              &ldquo;
            </div>
            <p className="text-[32px] md:text-[40px] lg:text-[52px] font-normal text-[#212325] leading-[1.15] tracking-[-0.02em] mb-[4rem]">
              {t.quote}
            </p>
            <div>
              <p className="text-[16px] leading-[20px] text-[#212325]/80">{t.name}</p>
              <p className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#212325]/40 mt-1">{t.role}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
