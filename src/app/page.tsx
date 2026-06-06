import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import Products from '@/components/Products'
import Differentiators from '@/components/Differentiators'
import SectorGrid from '@/components/SectorGrid'
import Capabilities from '@/components/Capabilities'
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
        <Products />
        <Differentiators />
        <SectorGrid />
        <Capabilities />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
