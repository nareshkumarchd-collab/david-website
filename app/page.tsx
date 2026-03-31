import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Experience from '@/components/Experience'
import VideoSection from '@/components/VideoSection'
import Skills from '@/components/Skills'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Experience />
      <VideoSection />
      <Skills />
      <Testimonials />
      <CTA />
    </main>
  )
}
