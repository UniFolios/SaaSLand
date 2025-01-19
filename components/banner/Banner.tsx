'use client'
import React from 'react'
import Image from 'next/image'
import { BaseComponentProps } from '../types'

interface BannerProps extends BaseComponentProps {}

/**
 * Banner Component
 * This component renders a hero banner with a heading, a description,
 * a call-to-action button, and an image.
 */
const Banner: React.FC<BannerProps> = () => {
  return (
    <div>
      {/* Wrapper container for the banner */}
      <div>
        {/* Content section of the banner */}
        <div>
          <main>
            {/* Text content container */}
            <div>
              {/* Subtitle */}
              <p>Build better sass website</p>

              {/* Main heading */}
              <h1>
                <span>Boost Productivity with</span>
                <span>Next-Gen Management Solution</span>
              </h1>

              {/* Call-to-action button */}
              <div>
                <button>
                  Try For Free
                  {/* Right arrow icon */}
                  {/* <svg 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg> */}
                </button>
              </div>
            </div>
          </main>

          {/* Image section of the banner */}
          <div>
            {/* <Image
              src="https://placehold.co/1072x536"
              alt="Hero banner image"
              fill
              priority
            /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
