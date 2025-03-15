'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { smoothScrollTo } from '@/utils/smoothScroll'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    smoothScrollTo('banner')
  }

  const handleTryItClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    smoothScrollTo('pricing')
  }

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="navbar-container flex items-center justify-between bg-black text-neutral-950 rounded-full px-4 py-2 shadow-sm">
        {/* Unique Logo: CoolShap.es "star-1" shape embedded; rotates on hover */}
        <Link
          href="#banner"
          className="flex-none ml-[-2px] mr-8 hover:rotate-45 hover:opacity-90 bg-black hover:bg-black rounded-full p-0.5 transition-transform duration-300 ease-out"
          onClick={handleLogoClick}
        >
          <svg
            className="h-10"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#cs_clip_1_star-1)">
              <mask
                id="cs_mask_1_star-1"
                style={{ maskType: 'alpha' }}
                width="200"
                height="200"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
              >
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M200 100C200 44.772 155.228 0 100 0S0 44.772 0 100s44.772 100 100 100 100-44.772 100-100zm-85.203-14.798c8.22 8.22 20.701 9.967 45.664 13.462L170 100l-9.539 1.335c-24.963 3.495-37.444 5.242-45.664 13.462-8.219 8.22-9.967 20.701-13.462 45.664L100 170l-1.335-9.539c-3.495-24.963-5.243-37.444-13.462-45.664-8.22-8.22-20.701-9.967-45.664-13.462L30 100l9.539-1.336c24.963-3.495 37.444-5.242 45.664-13.462 8.22-8.22 9.967-20.7 13.462-45.663L100 30l1.335 9.538c3.495 24.963 5.243 37.445 13.462 45.664z"
                  clipRule="evenodd"
                />
              </mask>
              <g mask="url(#cs_mask_1_star-1)">
                <path fill="#fff" d="M200 0H0v200h200V0z" />
                <path fill="#FFF9C5" fillOpacity="0.44" d="M200 0H0v200h200V0z" />
                <g filter="url(#filter0_f_748_4325)">
                  <path fill="#00F0FF" fillOpacity="0.85" d="M158 22H15v108h143V22z" />
                  <path fill="#FF58E4" d="M209 101H52v116h157V101z" />
                  <ellipse
                    cx="156"
                    cy="80"
                    fill="#FFE500"
                    fillOpacity="0.79"
                    rx="83"
                    ry="57"
                  />
                </g>
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_748_4325"
                width="344"
                height="315"
                x="-45"
                y="-38"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_748_4325" />
              </filter>
              <clipPath id="cs_clip_1_star-1">
                <path fill="#fff" d="M0 0H200V200H0z" />
              </clipPath>
            </defs>
            <g style={{ mixBlendMode: 'overlay' }} mask="url(#cs_mask_1_star-1)">
              <path
                fill="gray"
                stroke="transparent"
                d="M200 0H0v200h200V0z"
                filter="url(#cs_noise_1_star-1)"
              />
            </g>
            <defs>
              <filter
                id="cs_noise_1_star-1"
                width="100%"
                height="100%"
                x="0%"
                y="0%"
                filterUnits="objectBoundingBox"
              >
                <feTurbulence baseFrequency="0.6" numOctaves="5" result="out1" seed="4" />
                <feComposite in="out1" in2="SourceGraphic" operator="in" result="out2" />
                <feBlend in="SourceGraphic" in2="out2" mode="overlay" result="out3" />
              </filter>
            </defs>
          </svg>
        </Link>

        {/* Desktop Navigation with animated underline */}
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-8">
          {['About', 'Features', 'Pricing', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-base font-medium transition-all duration-300 ease-out group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-neutral-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop Button with smooth scroll */}
        <div className="hidden md:flex flex-none ml-8">
          <Link
            href="#pricing"
            className="bg-gradient-to-br from-neutral-950 to-neutral-900 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out hover:rotate-3 hover:opacity-90"
            onClick={handleTryItClick}
          >
            Try it!
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden ml-auto transition-shadow duration-300 ease-out hover:shadow-2xl focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu with smooth scroll for Try it button */}
      {isOpen && (
        <div className="md:hidden bg-white border border-neutral-300 rounded-lg mt-2 px-4 pt-4 pb-6">
          <nav className="flex flex-col space-y-4">
            {['About', 'Features', 'Pricing', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-lg px-2 py-1 rounded transition-all duration-300 ease-out group hover:bg-neutral-100"
                onClick={() => setIsOpen(false)}
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-neutral-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </Link>
            ))}
            <hr className="border-neutral-300" />
            <Link
              href="#pricing"
              className="bg-gradient-to-r from-neutral-900 to-neutral-700 text-white px-4 py-2 rounded-full text-sm font-medium text-center transition-all duration-300 ease-out relative overflow-hidden group"
              onClick={(e) => {
                e.preventDefault()
                setIsOpen(false)
                smoothScrollTo('pricing')
              }}
            >
              Try it!
            </Link>
          </nav>
        </div>
      )}

      <style jsx>{`
        .navbar-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: white;
          color: #1f2937; /* neutral-900 */
          border: 2px solid #d1d5db; /* neutral-300 */
          border-radius: 9999px;
          padding: 0.5rem 1rem;
          transition: border-color 0.2s;
        }
        .navbar-container::before {
          content: "";
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border-radius: inherit;
          background: linear-gradient(45deg, #e11d48, #f59e0b, #3b82f6, #e11d48);
          background-size: 200% 200%;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .navbar-container:hover::before {
          opacity: 1;
          animation: navbarGradientAnimation 0.8s linear infinite;
        }
        @keyframes navbarGradientAnimation {
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
    </header>
  )
}