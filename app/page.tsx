import { ScrollProgress } from '@/components/scroll-progress'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { WorkflowGallery } from '@/components/workflow-gallery'
import { Services } from '@/components/services'
import { ProcessTimeline } from '@/components/process-timeline'
import { About } from '@/components/about'
import { TechStack } from '@/components/tech-stack'
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
        <WorkflowGallery />
        <Services />
        <ProcessTimeline />
        <About />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
