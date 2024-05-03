import { getStaticParams } from '@/locales/server'
import { FAQ } from './components/faq'
import { Hero } from './components/hero'
import { HowItWorks } from './components/howItWorks'
import { ScrollToTop } from './components/scrollToTop'
import { Services } from './components/services'
import { Testimonials } from './components/testimonials'
import Pricing from './pricing/page'
import { setStaticParamsLocale } from 'next-international/server'

export function generateStaticParams() {
  return getStaticParams()
}

export default function Home({
  params: { locale }
}: {
  params: { locale: string }
}) {
  setStaticParamsLocale(locale)

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
      <Pricing params={{ locale }} />
      {/* <Newsletter /> */}
      <FAQ />
      <ScrollToTop />
    </>
  )
}
