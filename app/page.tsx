import { ScrollProgress } from '@/components/scroll-progress'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Projects } from '@/components/projects'
import { WorkflowGallery } from '@/components/workflow-gallery'
import { ProcessTimeline } from '@/components/process-timeline'
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
        <About />
        <Services />
        <Projects />
        <WorkflowGallery />
        <ProcessTimeline />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
