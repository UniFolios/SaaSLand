'use client'
import { useEffect } from 'react'
import { smoothScrollTo } from '@/utils/smoothScroll'
import Banner from '@/components/banner/Banner'
import Clients from '@/components/clients/Clients'
import About from '@/components/about/About'
import Features from '@/components/features/Features'
import Tools from '@/components/tools/Tools'
import HowItWorks from '@/components/howItWorks/HowItWorks'
import Pricing from '@/components/pricing/Pricing'
import Testimonials from '@/components/testimonials/Testimonials'
import Cta from '@/components/cta/Cta'
import Contact from '@/components/contact/Contact'

export default function Home() {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const id = target.getAttribute('href')?.substring(1)
        if (id) {
          smoothScrollTo(id)
        }
      }
    }

    document.addEventListener('click', handleSmoothScroll)
    return () => document.removeEventListener('click', handleSmoothScroll)
  }, [])

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
      <Contact />
    </main>
  )
}
