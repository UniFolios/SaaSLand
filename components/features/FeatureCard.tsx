import React from 'react'
import { Feature } from './types'

interface FeatureCardProps extends Omit<Feature, 'id'> {}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div
      className="relative p-[1px] rounded-xl h-64 flex flex-col bg-white overflow-hidden"
    >
      {/* Removed noise overlay for a clean white card */}

      {/* Inner content */}
      <div
        className="relative bg-white p-6 rounded-xl flex flex-col h-full overflow-hidden"
        style={{ boxShadow: 'inset 0 0 0 1px #000' }}
      >
        {/* Icon Container (48×48) */}
        <div className="w-12 h-12 mb-4">
          {typeof icon === 'string' ? (
            <img
              src={icon}
              alt={`${title} icon`}
              className="w-full h-full object-contain"
            />
          ) : (
            icon
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
          <p className="text-gray-700 overflow-hidden">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard