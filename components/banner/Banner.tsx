'use client'
import React from 'react'
import Image from 'next/image'
import { BaseComponentProps } from '../types'

interface BannerProps extends BaseComponentProps {}

const Banner: React.FC<BannerProps> = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center">
              <p className="text-base text-gray-600 sm:text-lg md:text-xl mb-3">
                Build better sass website
              </p>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Boost Productivity with</span>
                <span className="block text-blue-600">
                  Next-Gen Management Solution
                </span>
              </h1>
              <div className="mt-8 sm:mt-12">
                <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                  Try For Free 
                  <svg 
                    className="ml-2 -mr-1 w-4 h-4" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </button>
              </div>
            </div>
          </main>
          <div className="relative w-full h-64 sm:h-72 md:h-96 lg:h-[32rem] mt-12">
            <Image
              src="https://placehold.co/1072x536"
              alt="Hero banner image"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner 