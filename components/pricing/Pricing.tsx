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

/**
 * Pricing Component
 * Displays pricing plans with monthly/yearly billing options and a feature comparison table.
 */
const Pricing: React.FC<PricingProps> = () => {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section>
      <div>
        {/* Section Header */}
        <div>
          <h2>Our pricing</h2>
          <p>adjusts to suit your business.</p>
        </div>

        {/* Billing Toggle */}
        <div>
          <h3>Pick your plan</h3>
          <div>
            <button onClick={() => setIsYearly(false)}>
              Monthly Billing
            </button>
            <button onClick={() => setIsYearly(true)}>
              Yearly Billing
              <span>Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div>
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              {...plan}
              price={isYearly ? (Number(plan.price) * 0.8).toFixed(2) : plan.price}
            />
          ))}
        </div>

        {/* Features Comparison Table */}
        <div>
          <table>
            <thead>
              <tr>
                <th>Features</th>
                {plans.map(plan => (
                  <th key={plan.name}>{plan.name}</th>
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
                <tr key={feature}>
                  <td>{feature}</td>
                  {plans.map(plan => (
                    <td key={`${plan.name}-${feature}`}>
                      {/* <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg> */}
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
