'use client'
import Banner from '@/components/banner/Banner'
import Clients from '@/components/clients/Clients'
import About from '@/components/about/About'
import Features from '@/components/features/Features'
import Tools from '@/components/tools/Tools'
import HowItWorks from '@/components/howItWorks/HowItWorks'
import Pricing from '@/components/pricing/Pricing'
import Testimonials from '@/components/testimonials/Testimonials'
import Cta from '@/components/cta/Cta'

export default function Home() {
  return (
    <main>
      <Banner />
      <Clients />
      <About />
      <Features />
      <Tools />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Cta />
    </main>
  )
}
