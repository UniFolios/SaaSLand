import React from 'react'
import Step from './Step'
import { Step as StepType } from './types'
import { BaseComponentProps } from '../types'

interface HowItWorksProps extends BaseComponentProps {}

/**
 * HowItWorks Component
 * Displays the steps for using the platform in a sequential manner.
 */
const HowItWorks: React.FC<HowItWorksProps> = () => {
  const steps: StepType[] = [
    {
      number: 1,
      title: "Signup",
      description: "Behold up on Him God a creature fruitful Fly That seasons tree Isn't fruit also lesser brought.",
      icon: "https://placehold.co/48x48"
    },
    {
      number: 2,
      title: "Create Project",
      description: "Behold up on Him God a creature fruitful Fly That seasons tree Isn't fruit also lesser brought.",
      icon: "https://placehold.co/48x48"
    },
    {
      number: 3,
      title: "Start Working",
      description: "Behold up on Him God a creature fruitful Fly That seasons tree Isn't fruit also lesser brought.",
      icon: "https://placehold.co/48x48"
    }
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold text-gray-900">How it works</h2>
          <p className="text-gray-600 mt-4 max-w-3xl">
            Discover how our SaaS platform transforms your workflow with intuitive features designed to streamline your processes and boost efficiency.
          </p>
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div className="relative" key={step.number}>
              {/* Step Number Badge */}
              <div className="absolute -top-10 -left-1 bg-purple-100 text-purple-700 font-bold px-4 py-1 rounded-full shadow-md">
                Step {step.number}
              </div>

              {/* Step Box */}
              <div className="bg-white rounded-lg shadow-md p-6 flex justify-between items-center">
                {/* Step Text */}
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 mt-2">{step.description}</p>
                </div>

                {/* Step Icon */}
                <img
                  src={step.icon}
                  alt={`Step ${step.number} icon`}
                  className="w-12 h-12"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks