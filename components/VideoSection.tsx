'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useInView } from '@/hooks/useInView'

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)
  const { ref, inView } = useInView()

  return (
    <section
      className="relative overflow-hidden bg-[#0b1012]"
      style={{ minHeight: '80vh' }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/david-fullscreen.png"
          alt="David Robinson"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0b1012]/65" />
      </div>

      {/* Section label */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-[4rem]">
        <div className="flex items-center border-b border-[#f3f0ec]/10 py-[1.6rem]">
          <span className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#f3f0ec]/30">
            ◆ &nbsp;In Practice
          </span>
        </div>
      </div>

      {/* Content grid */}
      <div
        ref={ref}
        className={`relative z-10 max-w-[1440px] mx-auto px-[4rem] w-full flex flex-col justify-between transition-[opacity,transform] duration-900 ease-out-quart ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}
        style={{ minHeight: 'calc(80vh - 60px)' }}
      >
        {/* Play button — centered */}
        <div className="flex-1 flex items-center justify-center">
          <button
            onClick={() => setPlaying(true)}
            aria-label="Play video"
            className="group flex flex-col items-center gap-4"
          >
            <div className="w-[80px] h-[80px] border border-[#f3f0ec]/30 flex items-center justify-center group-hover:border-[#f3f0ec]/70 group-hover:bg-[#f3f0ec]/5 transition-all duration-500">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 4.5l11 5.5-11 5.5V4.5z" fill="white" fillOpacity="0.9"/>
              </svg>
            </div>
            <span className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#f3f0ec]/50 group-hover:text-[#f3f0ec]/80 transition-colors duration-300">
              Play
            </span>
          </button>
        </div>

        {/* Bottom bar: headline left, info right */}
        <div className="pb-[4rem] grid md:grid-cols-[1fr_auto] gap-8 items-end">
          <h2 className="text-[36px] md:text-[52px] lg:text-[64px] font-normal text-white leading-[1] tracking-[-0.03em] max-w-2xl">
            How I diagnose and fix operational chaos.
          </h2>

          <div className="text-right md:text-right space-y-4">
            <div>
              <p className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#f3f0ec]/30 mb-1">
                Approach
              </p>
              <p className="text-[16px] leading-[20px] text-[#f3f0ec]/60">
                Diagnose. Design. Deliver.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-[2rem] py-[1.2rem] border border-[#f3f0ec]/25 text-[#f3f0ec]/70 text-[12px] font-medium tracking-[0.08em] uppercase hover:border-[#f3f0ec]/60 hover:text-[#f3f0ec] transition-all duration-300"
            >
              ↳ &nbsp;Work with me
            </a>
          </div>
        </div>
      </div>

      {/* Video modal */}
      {playing && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setPlaying(false)}
        >
          <div className="relative w-full max-w-4xl mx-8 aspect-video bg-[#0b1012] flex items-center justify-center">
            <p className="text-[#f3f0ec]/40 text-[14px] tracking-[0.08em] uppercase">
              Video coming soon
            </p>
          </div>
          <button
            className="absolute top-8 right-8 text-[#f3f0ec]/50 hover:text-[#f3f0ec] text-[12px] tracking-[0.08em] uppercase transition-colors duration-300"
            onClick={() => setPlaying(false)}
          >
            ✕ Close
          </button>
        </div>
      )}
    </section>
  )
}
