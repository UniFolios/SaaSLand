'use client'
import React from 'react'
import type { Feature } from './types'
import { BaseComponentProps } from '../types'
import { SpecialFeatureCard } from './SpecialFeatureCard'
import FeatureCard from './FeatureCard'

interface FeaturesProps extends BaseComponentProps {}

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
  ];

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
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Delivering tailored white-label and branding options to fit your business.
          </h2>
          <p className="text-gray-600">
            Customized options designed to elevate your brand, effectively communicating your unique value proposition to the market.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {leftFeatures.map((feature) => (
              <FeatureCard key={feature.id} {...feature} />
            ))}
          </div>
          {/* Center Column - Special Feature */}
          <div className="md:row-span-2">
            <SpecialFeatureCard
              title="Performance Management"
              description="Boost Productivity with Accurate Time Tracking and Comprehensive Reporting."
              image="https://placehold.co/450x246"
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