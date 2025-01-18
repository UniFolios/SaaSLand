import React from 'react'
import PricingCard from './PricingCard'
import { PricingPlan } from './types'
import { BaseComponentProps } from '../types'

interface PricingProps extends BaseComponentProps {}

const Pricing: React.FC<PricingProps> = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {['Basic', 'Pro', 'Enterprise'].map((plan) => (
            <div key={plan} className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-4">{plan}</h3>
              <p className="text-3xl font-bold mb-6">$29<span className="text-base font-normal">/mo</span></p>
              <ul className="space-y-3 mb-8">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing 