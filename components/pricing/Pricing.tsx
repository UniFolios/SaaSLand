'use client'
import React, { useState } from 'react'
import PricingCard from './PricingCard'
import { PricingPlan } from './types'
import { BaseComponentProps } from '../types'

interface PricingProps extends BaseComponentProps {}

const plans = [
  {
    name: 'Basic',
    price: '9.99',
    features: [
      'Up to 20 projects',
      'Basic analytics',
      'Basic templates',
      'Email support',
      'API access'
    ]
  },
  {
    name: 'Pro',
    price: '19.99',
    isPopular: true,
    features: [
      'Unlimited projects',
      'Advanced analytics',
      'Advanced templates',
      'Priority support',
      'API access'
    ]
  },
  {
    name: 'Premium',
    price: '29.99',
    features: [
      'Unlimited projects',
      'Advanced analytics',
      'Custom templates',
      '24/7 support',
      'API access'
    ]
  }
]

const Pricing: React.FC<PricingProps> = () => {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our pricing</h2>
          <p className="text-xl text-gray-600">adjusts to suit your business.</p>
        </div>

        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold">Pick your plan</h3>
          
          {/* Billing Toggle */}
          <div className="flex items-center gap-4 bg-gray-100 p-1 rounded-full">
            <button
              className={`px-4 py-2 rounded-full ${!isYearly ? 'bg-white shadow-sm' : ''}`}
              onClick={() => setIsYearly(false)}
            >
              Monthly Billing
            </button>
            <button
              className={`px-4 py-2 rounded-full ${isYearly ? 'bg-white shadow-sm' : ''}`}
              onClick={() => setIsYearly(true)}
            >
              Yearly Billing
              <span className="ml-2 text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              {...plan}
              price={isYearly ? (Number(plan.price) * 0.8).toFixed(2) : plan.price}
            />
          ))}
        </div>

        {/* Features Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-6">Features</th>
                {plans.map(plan => (
                  <th key={plan.name} className="text-center py-4 px-6">{plan.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                'Up to 20 projects',
                'Advanced analytics',
                'Customizable templates',
                'Integration with popular tools',
                'Priority support',
                'API access'
              ].map((feature, index) => (
                <tr key={feature} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="py-4 px-6">{feature}</td>
                  {plans.map(plan => (
                    <td key={`${plan.name}-${feature}`} className="text-center py-4 px-6">
                      <svg className="w-5 h-5 mx-auto text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Pricing 