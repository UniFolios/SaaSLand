import React from 'react'
import { Feature } from './types'

interface FeatureCardProps extends Omit<Feature, 'id'> {}

/**
 * FeatureCard Component
 * This component displays a feature with an icon, title, and description.
 *
 * Props:
 * - icon: URL for the feature's icon.
 * - title: Title of the feature.
 * - description: A brief description of the feature.
 */
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div>
      {/* Feature Icon */}
      <img 
        src={icon} 
        alt={`${title} icon`} 
      />

      {/* Feature Title */}
      <h3>{title}</h3>

      {/* Feature Description */}
      <p>{description}</p>
    </div>
  )
}

export default FeatureCard
