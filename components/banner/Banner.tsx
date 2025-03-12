'use client'
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

interface BannerProps {}

const BannerFramerStyle: React.FC<BannerProps> = () => {
  const [scrollPos, setScrollPos] = useState(0)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const normalized = Math.min(scrollY / windowHeight, 1)
      setScrollPos(normalized)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Gentle transform for the 3D image container
  const offsetY = 150 + 10 * scrollPos
  const scale = 1.35 + 0.4 * scrollPos
  const imageTransform = {
    transform: `translateY(${offsetY}px) scale(${scale})`,
    transformOrigin: 'center center',
  }

  // New: Use IntersectionObserver to trigger fade/slide for main content once in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (contentRef.current) {
      observer.observe(contentRef.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative overflow-hidden min-h-screen pt-28 pb-80 text-white">
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/video/banner_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Main Content */}
      <div
        ref={contentRef}
        className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-6 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Brutalist Heading - PERFECT, UNTOUCHED */}
        <h1 className="font-extrabold tracking-tight mt-10 sm:mt-20 text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] leading-[1.1]">
          Future of SaaS
        </h1>

        {/* Subheading - Made Slightly Smaller */}
        <p className="max-w-3xl text-stone-300 font-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.3]">
          Publish your professionally designed, fully customized SaaS in a day.
        </p>

        {/* CTA Button (UNCHANGED) */}
        <div className="cta-container relative inline-block rounded-full">
          <button className="cta-button relative z-10 bg-white text-stone-900 font-semibold px-6 py-2 sm:px-5 sm:py-3 text-[0.95rem] sm:text-[1.05rem] rounded-full">
            Start for free
          </button>
        </div>

        {/* 3D Moving Image Container */}
        <div
          style={imageTransform}
          className="mt-12 sm:mt-20 w-full max-w-full h-[20rem] sm:h-[22rem] md:h-[27rem] relative rounded-2xl border border-stone-300 overflow-hidden"
        >
          <Image src="/img/banner_img.jpeg" alt="3D Mockup" fill className="object-cover" />
        </div>
      </div>

      <style jsx>{`
        .cta-container {
          position: relative;
          display: inline-block;
          border: 1px solid #d1d5db; /* stone-300 */
          border-radius: 9999px;
          padding: 1px;
          transition: all 0.2s;
        }
        .cta-container::before {
          content: "";
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border-radius: inherit;
          background: linear-gradient(45deg, #e11d48, #f59e0b, #3b82f6, #e11d48);
          background-size: 300% 300%;
          z-index: -1;
          opacity: 0;
          transition: all 0.2s;
        }
        .cta-container:hover::before {
          opacity: 1;
          transform: scale(1.001);
          animation: gradientAnimation 0.8s linear infinite;
        }
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  )
}

export default BannerFramerStyle