'use client'

import { useInView } from '@/hooks/useInView'

const stats = [
  { value: '13+', label: 'Years'      },
  { value: '4+',  label: 'Industries' },
  { value: '3',   label: 'Ventures'   },
]

const points = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 5h16M2 10h10M2 15h13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
        <circle cx="15" cy="10" r="3" stroke="currentColor" strokeWidth="1.25"/>
        <path d="M15 7v-2M15 15v-2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Workflow Redesign',
    text: 'Rebuilding the processes slowing your team down.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.25"/>
        <path d="M7 17h6M10 14v3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
        <path d="M6 8h8M6 10.5h5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Internal Tools',
    text: 'Purpose-built systems your team actually uses.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.25"/>
        <circle cx="15" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.25"/>
        <circle cx="10" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.25"/>
        <path d="M7.5 5h5M6.8 7L10 12.5M13.2 7L10 12.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Tool Consolidation',
    text: 'Replace five fragmented tools with one clean system.',
  },
]

export default function About() {
  const { ref, inView } = useInView()
  const anim = inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'

  return (
    <section id="about" className="bg-white">

      {/* ── Section label ── same as Skills ─────────────────── */}
      <div className="max-w-[1440px] mx-auto px-[4rem]">
        <div className="flex items-center border-b border-[#212325]/20 py-[1.6rem]">
          <span className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#212325]/50">
            ◆ &nbsp;About
          </span>
        </div>
      </div>

      <div
        ref={ref}
        className={`max-w-[1440px] mx-auto px-[4rem] transition-[opacity,transform] duration-900 ease-out-quart ${anim}`}
      >

        {/* ── Header block [1fr / 2fr] — same as Skills ────── */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-[6rem] items-end pt-[5rem] pb-[6rem] border-b border-[#212325]/15">
          <div />
          <div>
            <h2 className="text-[40px] md:text-[56px] font-normal text-[#212325] leading-[1] tracking-[-0.02em] mb-[3rem]">
              I fix the operational systems breaking your business.
            </h2>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-[2.4rem] py-[1.5rem] bg-[#212325] text-[#f3f0ec] text-[12px] font-medium tracking-[0.08em] uppercase hover:bg-[#0b1012] transition-colors duration-300"
            >
              ↳ &nbsp;Get in touch
            </a>
          </div>
        </div>

        {/* ── Body text [1fr / 2fr] — aligned under header ── */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-[6rem] pt-[5rem] pb-[4rem] border-b border-[#212325]/10">
          {/* Left: pull-quote */}
          <div className="md:pt-1">
            <p className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#212325]/35 leading-[1.6]">
              Most growing companies hit a point where things start to break.
              The team&rsquo;s overloaded. Systems don&rsquo;t talk to each other.
              Data&rsquo;s scattered. Clients feel it.
            </p>
          </div>

          {/* Right: main copy */}
          <div className="space-y-[2.4rem] text-[16px] leading-[20px] text-[#212325]/60">

            {/* "That's where I come in." — featured statement */}
            <div className="border-l-2 border-[#212325] pl-[2rem] py-[0.4rem]">
              <p className="text-[28px] md:text-[36px] font-normal text-[#212325] leading-[1.15] tracking-[-0.02em]">
                That&rsquo;s where I come in.
              </p>
            </div>

            <p>
              I help founders and COOs solve messy operational problems so they can scale without chaos.
            </p>

            {/* Icon rows */}
            <div className="space-y-0 border border-[#212325]/10">
              {points.map((p, i) => (
                <div
                  key={p.label}
                  className={`flex items-start gap-5 px-[2rem] py-[1.8rem] group hover:bg-[#212325]/[0.02] transition-colors duration-300 ${i < points.length - 1 ? 'border-b border-[#212325]/10' : ''}`}
                >
                  <div className="flex-shrink-0 w-[40px] h-[40px] border border-[#212325]/15 flex items-center justify-center text-[#212325]/40 group-hover:text-[#212325]/70 group-hover:border-[#212325]/30 transition-all duration-300">
                    {p.icon}
                  </div>
                  <div>
                    <p className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#212325]/40 mb-1 group-hover:text-[#212325]/60 transition-colors duration-300">
                      {p.label}
                    </p>
                    <p className="text-[16px] leading-[20px] text-[#212325]/55">
                      {p.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p>
              I&rsquo;ve spent 13+ years doing this across real estate, fintech, logistics, and other
              industries where complexity builds fast.
            </p>
            <p className="text-[#212325]/80">
              This isn&rsquo;t about selling software.<br />
              It&rsquo;s about helping good businesses get back in control.
            </p>
          </div>
        </div>

        {/* ── Stats [1fr / 2fr] ─────────────────────────────── */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-[6rem] py-[4rem] border-b border-[#212325]/10">
          <div />
          <div className="grid grid-cols-3 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="text-[40px] font-normal leading-[1] tracking-[-0.02em] text-[#212325]">
                  {value}
                </div>
                <div className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#212325]/40 mt-2">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── Bottom padding ─────────────────────────────────── */}
      <div className="pb-[8rem] md:pb-[12rem]" />
    </section>
  )
}
