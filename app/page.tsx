import Preloader from '@/components/Preloader'
import PromoModal from '@/components/PromoModal'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Audits from '@/components/Audits'
import Pricing from '@/components/Pricing'
import Works from '@/components/Works'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Preloader />
      <PromoModal />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Audits />
      <Pricing />
      <Works />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}


