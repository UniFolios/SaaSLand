'use client'
import React, { useState } from 'react'
import PricingCard from './PricingCard'
import { PricingPlan } from './types'
import { BaseComponentProps } from '../types'

interface PricingProps extends BaseComponentProps {}

// The Premium plan is placed in the middle and marked isPopular: true
const plans: PricingPlan[] = [
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
    name: 'Premium',
    price: '29.99',
    isPopular: true,
    features: [
      'Unlimited projects',
      'Advanced analytics',
      'Custom templates',
      '24/7 support',
      'API access'
    ]
  },
  {
    name: 'Pro',
    price: '19.99',
    features: [
      'Unlimited projects',
      'Advanced analytics',
      'Advanced templates',
      'Priority support',
      'API access'
    ]
  }
]

// Realistic feature data with booleans for each plan
// Basic = fewer ticks, Pro = a bit more, Premium = all (Premium forced true on mobile)
const featureMatrix = [
  {
    name: 'Up to 20 projects',
    basic: true,
    pro: false,
    premium: true
  },
  {
    name: 'Unlimited projects',
    basic: false,
    pro: true,
    premium: true
  },
  {
    name: 'Advanced analytics',
    basic: false,
    pro: true,
    premium: true
  },
  {
    name: 'Customizable templates',
    basic: false,
    pro: true,
    premium: true
  },
  {
    name: 'Integration with popular tools',
    basic: false,
    pro: true,
    premium: true
  },
  {
    name: 'Priority support',
    basic: false,
    pro: false,
    premium: true
  },
  {
    name: 'API access',
    basic: true,
    pro: true,
    premium: true
  }
]

// Helper to map plan.name => property on featureMatrix
const planToKey = {
  Basic: 'basic',
  Pro: 'pro',
  Premium: 'premium'
}

const Pricing: React.FC<PricingProps> = () => {
  // Set default billing mode to Yearly so it stands out immediately
  const [isYearly, setIsYearly] = useState(true)

  return (
    <section id="pricing" className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title only */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our pricing</h2>
        </div>

        {/* Billing Toggle - more padding on mobile (p-4), revert to p-2 on larger screens */}
        <div className="flex justify-center items-center mb-12">
          <div className="flex items-center gap-4 bg-white p-4 sm:p-2 rounded-full">
            
            {/* Monthly Billing Button */}
            <button
              className={`
                px-4 py-2 rounded-full
                ${!isYearly ? 'bg-black text-white shadow-sm' : 'text-black'}
              `}
              onClick={() => setIsYearly(false)}
            >
              Monthly Billing
            </button>

            {/* Yearly Billing Button with extra padding if black */}
            <button
              className={`
                flex flex-col md:flex-row items-center rounded-full
                ${isYearly
                  ? 'bg-black text-white shadow-sm px-6 py-3'
                  : 'text-black px-4 py-2'
                }
              `}
              onClick={() => setIsYearly(true)}
            >
              <span>Yearly Billing</span>
              <span className="bg-green-200 text-green-900 px-2 py-1 rounded-full text-xs mt-1 md:mt-0 md:ml-2">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={plan.name === 'Premium' ? 'transform md:scale-110' : ''}
            >
              <PricingCard
                {...plan}
                price={
                  isYearly
                    ? (Number(plan.price) * 0.8).toFixed(2)
                    : plan.price
                }
              />
            </div>
          ))}
        </div>

        {/* Horizontal Table for screens >= sm */}
        <div className="overflow-x-auto hidden sm:block">
          <table className="table-auto w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-4 px-6 whitespace-nowrap">Features</th>
                {plans.map(plan => (
                  <th
                    key={plan.name}
                    className="text-center py-4 px-6 whitespace-nowrap"
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureMatrix.map((item, index) => (
                <tr key={item.name} className={index % 2 === 0 ? 'bg-neutral-800' : ''}>
                  <td className="py-4 px-6">{item.name}</td>
                  {plans.map(plan => {
                    const planKey = planToKey[plan.name as keyof typeof planToKey]
                    const hasFeature = item[planKey as keyof typeof item] as boolean
                    
                    return (
                      <td
                        key={`${plan.name}-${item.name}`}
                        className="text-center py-4 px-6"
                      >
                        {plan.name === 'Premium' ? (
                          <div className="bg-white text-black inline-block px-2 py-1 rounded">
                            {hasFeature ? (
                              <svg className="w-5 h-5 mx-auto text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                              </svg>
                            ) : (
                              <span className="text-gray-500">—</span>
                            )}
                          </div>
                        ) : (
                          hasFeature ? (
                            <svg className="w-5 h-5 mx-auto text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                          ) : (
                            <span className="text-gray-500">—</span>
                          )
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Vertical Features Layout for mobile screens (< sm) */}
        <div className="block sm:hidden space-y-12">
          {['Premium', 'Pro', 'Basic'].map((planName) => {
            const planKey = planToKey[planName as keyof typeof planToKey]
            const isPremium = planName === 'Premium'
            
            return (
              <div
                key={planName}
                className={`rounded-lg p-6 ${isPremium ? 'bg-white text-black' : 'bg-neutral-800 text-white'}`}
              >
                <h3 className="text-2xl font-bold mb-4">{planName} plan features</h3>
                <ul className="space-y-2">
                  {featureMatrix.map((featureItem) => {
                    const hasFeature = isPremium ? true : (featureItem[planKey as keyof typeof featureItem] as boolean)
                    return (
                      <li key={featureItem.name} className="flex items-center">
                        {hasFeature ? (
                          <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        ) : (
                          <span className="text-gray-500 w-5 mr-2 text-center">—</span>
                        )}
                        <span>{featureItem.name}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Pricing