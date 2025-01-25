'use client'
import React from 'react'
import type { Feature } from './types'
import { BaseComponentProps } from '../types'
import { SpecialFeatureCard } from './SpecialFeatureCard'
import FeatureCard from './FeatureCard'

interface FeaturesProps extends BaseComponentProps {}

/**
 * Features Component
 * This component displays a section of features, divided into left, right, and center columns,
 * with a special feature card in the center.
 */
const Features: React.FC<FeaturesProps> = () => {
  const leftFeatures: Feature[] = [
    {
      id: 1,
      icon: "https://placehold.co/48x48",
      title: 'Time tracking and reporting',
      description: "Also to image Seas Great day sea don't creature creatures land you're morning."
    },
    {
      id: 2,
      icon: "https://placehold.co/48x48",
      title: 'Project management',
      description: "Also to image Seas Great day sea don't creature creatures land you're morning."
    }
  ]

  const rightFeatures: Feature[] = [
    {
      id: 3,
      icon: "https://placehold.co/48x48",
      title: 'Resource allocation',
      description: "Also to image Seas Great day sea don't creature creatures land you're morning."
    },
    {
      id: 4,
      icon: "https://placehold.co/48x48",
      title: 'Team collaboration',
      description: "Also to image Seas Great day sea don't creature creatures land you're morning."
    }
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Delivering tailored white-label and branding options to fit your business.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Customized options designed to elevate your brand, effectively communicating your unique value proposition to the market.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {leftFeatures.map((feature) => (
              <FeatureCard key={feature.id} {...feature} />
            ))}
          </div>

          {/* Center Column - Special Feature */}
          <div className="flex justify-center items-center">
            <SpecialFeatureCard
              title="Performance Management"
              description="Boost Productivity with Accurate Time Tracking and Comprehensive Reporting."
              image="https://placehold.co/450x246"
              className="shadow-md rounded-lg bg-white"
            />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {rightFeatures.map((feature) => (
              <FeatureCard key={feature.id} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features