import { About } from './components/about'
import { Cta } from './components/cta'
import { FAQ } from './components/faq'
import { Features } from './components/feature'
import { Footer } from './components/footer'
import { Hero } from './components/hero'
import { HowItWorks } from './components/howItWorks'
import { Newsletter } from './components/newsletter'
import { ScrollToTop } from './components/scrollToTop'
import { Services } from './components/services'
import { Sponsors } from './components/sponsors'
import { Team } from './components/team'
import { Testimonials } from './components/testimonials'
import Pricing from './pricing/page'

export default function Home() {
  return (
    <>
      <Hero />
      <Sponsors />
      <About />
      <HowItWorks />
      <Features />
      <Services />
      <Cta />
      <Testimonials />
      <Team />
      <Pricing />
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  )
}
