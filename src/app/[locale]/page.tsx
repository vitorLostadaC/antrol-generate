import { FAQ } from './components/faq'
import { Hero } from './components/hero'
import { HowItWorks } from './components/howItWorks'
import { ScrollToTop } from './components/scrollToTop'
import { Services } from './components/services'
import { Testimonials } from './components/testimonials'
import Pricing from './pricing/page'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Sponsors /> */}
      {/* <About /> */}
      <HowItWorks />
      {/* <Features /> */}
      <Services />
      {/* <Cta /> */}
      <Testimonials />
      {/* <Team /> */}
      <Pricing />
      {/* <Newsletter /> */}
      <FAQ />
      <ScrollToTop />
    </>
  )
}
