'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

interface BannerProps {}

const BannerFramerStyle: React.FC<BannerProps> = () => {
  const [scrollPos, setScrollPos] = useState(0)

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
  const offsetY = 140 + 10 * scrollPos
  const scale = 1.35 + 0.4 * scrollPos
  const imageTransform = {
    transform: `translateY(${offsetY}px) scale(${scale})`,
    transformOrigin: 'center center',
  }

  return (
    <section className="relative overflow-hidden min-h-screen pt-36 pb-80 text-white">
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/video/banner_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-3">
        {/* Heading */}
        <h1 className="font-extrabold leading-tight mt-10 sm:mt-20 text-[5.4rem] sm:text-[4.7rem]">
          Future of Saas<br className="hidden sm:block" />
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl text-stone-400 text-[1.1rem] sm:text-[1.2rem]">
          Publish your professionally designed, fully customized Saas in a day.
        </p>

        {/* CTA Button with Neat Animated Border */}
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
          padding: 1px; /* increased padding for more space from sides */
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
          transform: scale(1.001); /* thicker appearance on hover */
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