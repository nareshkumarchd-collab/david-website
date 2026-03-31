'use client'

import { useInView } from '@/hooks/useInView'

const services = [
  {
    number: '01',
    title: 'Operational Systems Design',
    description: 'A full audit of how your business actually runs — processes, teams, handoffs, and tooling — rebuilt into a system that scales.',
    tag: 'Strategy',
  },
  {
    number: '02',
    title: 'Workflow Optimization',
    description: 'Find exactly where work slows down or falls through the cracks, then redesign the flow so your team moves faster with less friction.',
    tag: 'Operations',
  },
  {
    number: '03',
    title: 'Internal Tools & Automation',
    description: 'Replace patchwork spreadsheets and manual processes with purpose-built tools that handle the repetitive, error-prone work automatically.',
    tag: 'Technology',
  },
]

export default function Services() {
  const { ref, inView } = useInView()
  const anim = inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'

  return (
    <section id="services" className="bg-white" style={{ borderTop: '1px solid rgba(33,35,37,0.2)' }}>

      {/* ── Section label ── same as Skills ─────────────────── */}
      <div className="max-w-[1440px] mx-auto px-[4rem]">
        <div className="flex items-center border-b border-[#212325]/20 py-[1.6rem]">
          <span className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#212325]/50">
            ◆ &nbsp;Services
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
              How I can help
            </h2>
            <p className="text-[16px] leading-[20px] text-[#212325]/50 max-w-sm">
              Three ways to clean up operational chaos and build systems that hold as you grow.
            </p>
          </div>
        </div>

        {/* ── Service rows — same pattern as skill rows ────── */}
        <div className="pb-[8rem] md:pb-[12rem]">
          {services.map((s) => (
            <div
              key={s.number}
              className="group grid md:grid-cols-[1fr_2fr] gap-6 md:gap-[6rem] items-start py-[3rem] border-b border-[#212325]/10 last:border-b-0 cursor-default"
            >
              {/* Left: number + tag */}
              <div className="flex md:flex-col gap-3 md:gap-2 pt-1">
                <span className="text-[12px] font-medium tracking-[0.08em] text-[#212325]/30">
                  {s.number}
                </span>
                <span className="inline-flex items-center px-3 py-1 border border-[#212325]/15 text-[#212325]/35 text-[12px] font-medium tracking-[0.08em] uppercase rounded-full self-start group-hover:border-[#212325]/30 group-hover:text-[#212325]/60 transition-all duration-300">
                  {s.tag}
                </span>
              </div>

              {/* Right: name + description + arrow */}
              <div className="flex items-start justify-between gap-8">
                <div>
                  <h3 className="text-[24px] md:text-[32px] font-normal text-[#212325]/35 group-hover:text-[#212325] transition-colors duration-300 tracking-[-0.02em] leading-[1] mb-4">
                    {s.title}
                  </h3>
                  <p className="text-[16px] leading-[20px] text-[#212325]/45 max-w-xl">
                    {s.description}
                  </p>
                </div>
                <span className="text-[#212325]/20 group-hover:text-[#212325]/60 group-hover:translate-x-1 transition-all duration-300 text-sm flex-shrink-0 mt-1">
                  ↗
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
