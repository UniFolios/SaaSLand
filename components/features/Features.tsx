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
    <section>
      <div>
        {/* Section Header */}
        <div>
          <h2>
            Delivering tailored white-label and branding options to fit your business.
          </h2>
          <p>
            Customized options designed to elevate your brand, effectively communicating your unique value proposition to the market.
          </p>
        </div>

        {/* Features Grid */}
        <div>
          {/* Left Column */}
          <div>
            {leftFeatures.map((feature) => (
              <FeatureCard key={feature.id} {...feature} />
            ))}
          </div>

          {/* Center Column - Special Feature */}
          <div>
            {/* uncomment this to add a special feature card */}
            {/* <SpecialFeatureCard
              title="Performance Management"
              description="Boost Productivity with Accurate Time Tracking and Comprehensive Reporting."
              image="https://placehold.co/450x246"
            /> */}
          </div>

          {/* Right Column */}
          <div>
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
