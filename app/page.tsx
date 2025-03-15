'use client'
import { useEffect } from 'react'
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
        const element = document.getElementById(id!)
        
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.scrollY
          const offsetPosition = elementPosition - 80
          const duration = 1000 // Duration in milliseconds
          const startPosition = window.scrollY
          const distance = offsetPosition - startPosition
          let startTime: number | null = null;
          
          const animation = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const timeElapsed = currentTime - startTime
            const progress = Math.min(timeElapsed / duration, 1)
            
            // Easing function for smoother animation
            const easeInOutCubic = (progress: number) => {
              return progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2
            }

            window.scrollTo(0, startPosition + (distance * easeInOutCubic(progress)))

            if (timeElapsed < duration) {
              requestAnimationFrame(animation)
            }
          }

          requestAnimationFrame(animation)
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
