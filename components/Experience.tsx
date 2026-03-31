'use client'

import { useInView } from '@/hooks/useInView'

const experiences = [
  {
    company: 'MyDevTeam',
    role: 'Founder',
    period: '13+ Years',
    description: 'Founded and scaled a development consultancy delivering operational systems, internal tools, and technology solutions across real estate, fintech, logistics, and beyond.',
    tags: ['Founder', 'Operations', 'Technology'],
  },
  {
    company: 'Stealth AI Startup',
    role: 'Co-Founder',
    period: 'Current',
    description: 'Building an AI-powered business intelligence platform that gives operators and executives real-time clarity into how their company is actually performing.',
    tags: ['AI', 'Business Intelligence', 'Product'],
  },
  {
    company: 'Stealth Startup',
    role: 'Co-Founder',
    period: 'Current',
    description: 'Developing a next-generation music technology platform focused on creator workflows, rights infrastructure, and distribution tooling.',
    tags: ['Music Tech', 'Platform', 'Creator Economy'],
  },
]

export default function Experience() {
  const { ref, inView } = useInView()
  const anim = inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'

  return (
    <section id="experience" className="bg-white" style={{ borderTop: '1px solid rgba(33,35,37,0.2)' }}>

      {/* Section label */}
      <div className="max-w-[1440px] mx-auto px-[4rem]">
        <div className="flex items-center border-b border-[#212325]/20 py-[1.6rem]">
          <span className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#212325]/50">
            ◆ &nbsp;Experience
          </span>
        </div>
      </div>

      <div
        ref={ref}
        className={`max-w-[1440px] mx-auto px-[4rem] py-[8rem] md:py-[12rem] transition-[opacity,transform] duration-900 ease-out-quart ${anim}`}
      >
        {/* Header */}
        <div className="grid md:grid-cols-[1fr_1fr] gap-10 items-end pb-[5rem] border-b border-[#212325]/15 mb-0">
          <h2 className="text-[56px] md:text-[64px] font-normal text-[#212325] leading-[1] tracking-[-0.02em]">
            Where I&rsquo;ve worked
          </h2>
          <p className="text-[16px] leading-[20px] text-[#212325]/50 max-w-xs md:text-right md:self-end">
            13+ years building and fixing operational systems where complexity builds fast.
          </p>
        </div>

        {/* Rows */}
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="group grid md:grid-cols-[160px_1fr] gap-6 md:gap-[5rem] py-[3rem] border-b border-[#212325]/12 last:border-b-0 hover:bg-[#212325]/[0.02] -mx-[4rem] px-[4rem] transition-colors duration-300"
          >
            <span className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#212325]/30 pt-1">
              {exp.period}
            </span>
            <div>
              <div className="flex items-baseline gap-4 mb-2">
                <h3 className="text-[24px] font-normal text-[#212325] tracking-[-0.02em] leading-[1]">
                  {exp.company}
                </h3>
                <span className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#212325]/35">
                  {exp.role}
                </span>
              </div>
              <p className="text-[16px] leading-[20px] text-[#212325]/50 max-w-xl mt-3 mb-5">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[12px] font-medium tracking-[0.08em] uppercase px-3 py-1 border border-[#212325]/15 text-[#212325]/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
