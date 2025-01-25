'use client'
import React from 'react'
import Image from 'next/image'
import { BaseComponentProps } from '../types'

interface BannerProps extends BaseComponentProps {}

/**
 * Banner Component
 * Renders a vertical layout with a heading, description, call-to-action button, and an image.
 */
const Banner: React.FC<BannerProps> = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto text-center px-6 lg:px-8">
        {/* Subtitle */}
        <p className="text-gray-500 text-lg mb-4">Build better SaaS website</p>

        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
          Boost Productivity with <br />
          <span className="text-blue-600">Next-Gen Management Solution</span>
        </h1>

        {/* Call-to-Action Button */}
        <div className="mb-12">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
            Try For Free →
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full">
          <Image
            src="https://placehold.co/1072x536"
            alt="Hero banner image"
            width={1072}
            height={536}
            className="mx-auto rounded-lg shadow-md"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default Banner