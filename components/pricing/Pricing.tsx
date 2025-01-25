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
    <section className="bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Our pricing</h2>
          <p className="text-gray-600 mt-4">adjusts to suit your business.</p>
        </div>

        {/* Pricing Header with Toggle */}
        <div className="flex justify-between items-center mb-12">
          {/* Section Subheading */}
          <h3 className="text-2xl font-bold text-gray-900">Pick your plan</h3>

          {/* Toggle Buttons */}
          <div className="flex items-center bg-gray-100 rounded-full shadow-md p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full font-semibold ${
                !isYearly ? 'bg-white text-gray-900' : 'text-gray-500'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full font-semibold ${
                isYearly ? 'bg-white text-gray-900' : 'text-gray-500'
              }`}
            >
              Yearly Billing
              <span className="ml-2 text-green-500 font-medium">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-6 rounded-lg shadow-md ${
                plan.isPopular
                  ? 'bg-gray-900 text-white scale-105'
                  : 'bg-white text-gray-900'
              }`}
            >
              {plan.isPopular && (
                <div className="mb-4 px-2 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold inline-block">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold">{plan.name} plan</h3>
              <p className="mt-4 text-4xl font-bold">
                ${isYearly ? (Number(plan.price) * 0.8).toFixed(2) : plan.price}
                <span className="text-sm font-medium"> Per Month</span>
              </p>
              <button className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-lg w-full">
                Get early access
              </button>
              <ul className="mt-6 space-y-2 text-gray-600">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center space-x-2 text-left"
                  >
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing