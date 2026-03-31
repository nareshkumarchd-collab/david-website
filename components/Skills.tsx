'use client'

import { useInView } from '@/hooks/useInView'

const skills = [
  { name: 'Operational Strategy',        category: 'Strategy'   },
  { name: 'System Architecture',         category: 'Technology' },
  { name: 'Entrepreneurship',            category: 'Leadership' },
  { name: 'Strategic Planning',          category: 'Strategy'   },
  { name: 'Web Development',             category: 'Technology' },
  { name: 'Process Design',              category: 'Strategy'   },
  { name: 'Workflow Automation',         category: 'Technology' },
  { name: 'Team Building',               category: 'Leadership' },
  { name: 'Internal Tools',              category: 'Technology' },
  { name: 'Client Advisory',             category: 'Leadership' },
  { name: 'Systems Thinking',            category: 'Strategy'   },
  { name: 'Cross-functional Execution',  category: 'Leadership' },
]

export default function Skills() {
  const { ref, inView } = useInView()
  const anim = inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'

  return (
    <section className="bg-white" style={{ borderTop: '1px solid rgba(33,35,37,0.2)' }}>

      {/* Section label */}
      <div className="max-w-[1440px] mx-auto px-[4rem]">
        <div className="flex items-center border-b border-[#212325]/20 py-[1.6rem]">
          <span className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#212325]/50">
            ◆ &nbsp;Areas of Expertise
          </span>
        </div>
      </div>

      <div
        ref={ref}
        className={`max-w-[1440px] mx-auto px-[4rem] transition-[opacity,transform] duration-900 ease-out-quart ${anim}`}
      >
        {/* Headline row */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-[6rem] items-end pt-[5rem] pb-[6rem] border-b border-[#212325]/15">
          <div />
          <div>
            <h2 className="text-[40px] md:text-[56px] font-normal text-[#212325] leading-[1] tracking-[-0.02em] mb-[3rem]">
              13+ years fixing systems across real estate, fintech, and logistics.
            </h2>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-[2.4rem] py-[1.5rem] bg-[#212325] text-[#f3f0ec] text-[12px] font-medium tracking-[0.08em] uppercase hover:bg-[#0b1012] transition-colors duration-300"
            >
              ↳ &nbsp;Book a call
            </a>
          </div>
        </div>

        {/* Skill rows */}
        <div className="pb-[8rem] md:pb-[12rem]">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex items-center justify-between gap-6 py-[1.6rem] border-b border-[#212325]/10 cursor-default"
            >
              <span className="text-[20px] md:text-[28px] font-normal text-[#212325]/28 group-hover:text-[#212325] transition-colors duration-300 tracking-[-0.01em] leading-none">
                {skill.name}
              </span>
              <div className="flex items-center gap-4 flex-shrink-0">
                <span className="hidden sm:inline-flex items-center px-3 py-1 border border-[#212325]/15 text-[#212325]/35 text-[12px] font-medium tracking-[0.08em] uppercase rounded-full group-hover:border-[#212325]/30 group-hover:text-[#212325]/60 transition-all duration-300">
                  {skill.category}
                </span>
                <span className="text-[#212325]/20 group-hover:text-[#212325]/60 group-hover:translate-x-1 transition-all duration-300 text-sm">
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
