import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import Capabilities from '@/components/Capabilities'
import Sectors from '@/components/Sectors'
import CaseStudies from '@/components/CaseStudies'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Capabilities />
        <Sectors />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
