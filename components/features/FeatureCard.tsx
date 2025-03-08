import React from 'react'
import { Feature } from './types'

interface FeatureCardProps extends Omit<Feature, 'id'> {}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="relative p-[1px] rounded-lg h-64 flex flex-col bg-neutral-500 overflow-hidden">
      {/* Animated noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 bg-repeat animate-noise"
        style={{
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/black-linen.png")',
          backgroundSize: 'auto',
        }}
      />
      
      {/* Inner content */}
      <div
        className="relative bg-neutral-600 p-6 rounded-lg flex flex-col h-full overflow-hidden"
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
          <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
          <p className="text-gray-300 overflow-hidden">{description}</p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes noise {
          0% { background-position: 0 0; }
          100% { background-position: 100% 100%; }
        }
        .animate-noise {
          animation: noise 1s steps(10) infinite;
        }
      `}</style>
    </div>
  )
}

export default FeatureCard