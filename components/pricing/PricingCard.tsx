import React from 'react'
import { PricingPlan } from './types'

interface PricingCardProps extends Omit<PricingPlan, 'price'> {
  price: string; // Explicitly type price as string
}

/**
 * PricingCard Component
 * Displays a single pricing card with the plan name, price, features, and optional "Most Popular" tag.
 *
 * Props:
 * - name: The name of the plan.
 * - price: The price of the plan.
 * - features: An array of features included in the plan.
 * - isPopular: A boolean indicating if this is the most popular plan.
 */
const PricingCard = ({ name, price, features, isPopular }: PricingCardProps) => {
  return (
    <div>
      {/* Most Popular Badge */}
      {isPopular && (
        <span>
          Most Popular
        </span>
      )}

      {/* Plan Name */}
      <h3>{name} plan</h3>

      {/* Price */}
      <div>
        <div>
          <span>${price}</span>
          <span>Per Month</span>
        </div>
      </div>

      {/* Call-to-Action Button */}
      <button>
        Get early access
      </button>

      {/* Features List */}
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            {/* <svg 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                clipRule="evenodd"
              />
            </svg> */}
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PricingCard
