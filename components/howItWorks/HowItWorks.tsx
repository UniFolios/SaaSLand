import React from 'react'
import Step from './Step'
import { Step as StepType } from './types'
import { BaseComponentProps } from '../types'

interface HowItWorksProps extends BaseComponentProps {}

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
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How it works
          </h2>
          <p className="text-gray-600 text-lg">
            Discover how our SaaS platform transforms your workflow with intuitive features designed to streamline your processes and boost efficiency.
          </p>
        </div>

        <div className="mt-16 space-y-12 md:space-y-0 flex flex-col md:flex-row md:justify-between gap-4">
          {steps.map((step) => (
            <Step 
              key={step.number} 
              {...step} 
              className="w-full"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks 