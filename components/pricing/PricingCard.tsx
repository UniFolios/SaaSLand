import React from 'react'
import { PricingPlan } from './types'

interface PricingCardProps extends Omit<PricingPlan, 'price'> {
  price: string;  // Explicitly type price as string
}

const PricingCard = ({ name, price, features, isPopular }: PricingCardProps) => {
  return (
    <div
      className={`rounded-2xl p-8 transition-all hover:scale-105 ${
        isPopular
          ? 'bg-white text-black ring-4 ring-yellow-500'
          : 'bg-[#262626] text-white shadow-lg'
      }`}
      style={{ boxShadow: 'inset 0 0 0 1px #000' }}
    >
      {isPopular && (
        <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
          Most Popular
        </span>
      )}
      
      <h3 className="text-2xl font-bold">{name} plan</h3>
      
      <div className="mt-4 mb-6">
        <div className="flex items-baseline">
          <span className="text-4xl font-bold">${price}</span>
          <span className="ml-2 text-sm opacity-80">Per Month</span>
        </div>
      </div>

      <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors mb-8 ${
        isPopular 
          ? 'bg-black text-white hover:bg-black/80' 
          : 'bg-[#333333] text-white hover:bg-[#444444]'
      }`}>
        Get early access
      </button>

      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm">
            <svg 
              className={`w-5 h-5 mr-3 flex-shrink-0 ${isPopular ? 'text-black' : 'text-white'}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PricingCard