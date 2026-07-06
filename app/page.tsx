import { ScrollProgress } from '@/components/scroll-progress'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Projects } from '@/components/projects'
import { ProcessTimeline } from '@/components/process-timeline'
import { TechStack } from '@/components/tech-stack'
import { TestimonialCta } from '@/components/testimonial-cta'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <ProcessTimeline />
        <TechStack />
        <TestimonialCta />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
