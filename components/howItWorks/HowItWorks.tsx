import React, { useRef, useState, useEffect } from 'react'
import Step from './Step'
import { Step as StepType } from './types'
import { BaseComponentProps } from '../types'

interface HowItWorksProps extends BaseComponentProps {}

// Custom hook for scroll-triggered fade-up animation
function useFadeUp() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

// Inline SVGs as data URIs
const cloneSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
  stroke-width="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
</svg>`;
const cloneDataURI = 'data:image/svg+xml;utf8,' + encodeURIComponent(cloneSVG);

const modifySVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
  stroke-width="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
  <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
  <path d="M18.5 2.5a2.121 2.121 0 013 3L11 16l-4 1 1-4 9.5-9.5z"/>
</svg>`;
const modifyDataURI = 'data:image/svg+xml;utf8,' + encodeURIComponent(modifySVG);

const publishSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
  stroke-width="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
  <path d="M16 16l-4-4-4 4m4-4v9"/>
  <path d="M21 16a5 5 0 00-3-4.58 7 7 0 10-13.197 1.58A4 4 0 004 17h2"/>
</svg>`;
const publishDataURI = 'data:image/svg+xml;utf8,' + encodeURIComponent(publishSVG);

const HowItWorks: React.FC<HowItWorksProps> = () => {
  // Replace placeholders with embedded icons
  const steps: StepType[] = [
    {
      number: 1,
      title: "Clone",
      description: "Quickly clone the repository with a single click and set up your environment. Start building faster with minimal setup.",
      icon: cloneDataURI
    },
    {
      number: 2,
      title: "Modify",
      description: "Customize and fine-tune the code to suit your needs. Our streamlined workflow makes it simple to adapt any feature.",
      icon: modifyDataURI
    },
    {
      number: 3,
      title: "Publish",
      description: "Deploy seamlessly to your favorite platform. Share your project with the world and enjoy continuous, hassle-free updates.",
      icon: publishDataURI
    }
  ]

  // Use custom fade-up hook on the steps container
  const fade = useFadeUp()

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading & Explanation */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How it works
          </h2>
          <p className="text-gray-300 text-lg">
            Get started in three simple steps. Clone, modify, and publish your project with ease.
          </p>
        </div>

        {/* Steps container with scroll-triggered animation */}
        <div 
          ref={fade.ref}
          className={`mt-32 space-y-12 md:space-y-0 flex flex-col md:flex-row md:justify-between gap-4 transform transition-all duration-700 ${
            fade.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {steps.map((step) => (
            <Step 
              key={step.number}
              {...step}
              className="w-full"
              stepNumberColor="text-white"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks