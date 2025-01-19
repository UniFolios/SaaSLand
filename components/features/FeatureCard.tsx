import React from 'react'
import { Feature } from './types'

interface FeatureCardProps extends Omit<Feature, 'id'> {}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6">
      <img 
        src={icon} 
        alt={`${title} icon`} 
        className="w-12 h-12 mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default FeatureCard 