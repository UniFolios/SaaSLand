import React from 'react'
import { PricingPlan } from './types'

const PricingCard = ({ name, price, features, isPopular }: PricingPlan) => {
  return (
    <div className={`rounded-lg p-8 ${isPopular ? 'bg-primary text-white ring-4 ring-primary/30' : 'bg-white shadow-lg'}`}>
      {isPopular && (
        <span className="bg-white text-primary px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold mb-4">{name}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-sm">/month</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className={`w-5 h-5 mr-2 ${isPopular ? 'text-white' : 'text-primary'}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${isPopular ? 'bg-white text-primary hover:bg-gray-100' : 'bg-primary text-white hover:bg-primary/90'}`}>
        Get Started
      </button>
    </div>
  )
}

export default PricingCard 