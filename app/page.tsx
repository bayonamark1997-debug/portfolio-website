import { ScrollProgress } from '@/components/scroll-progress'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Services } from '@/components/services'
import { ProcessTimeline } from '@/components/process-timeline'
import { About } from '@/components/about'
import { TechStack } from '@/components/tech-stack'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <ProcessTimeline />
        <About />
        <TechStack />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
