import React from 'react'
import Step from './Step'
import { Step as StepType } from './types'
import { BaseComponentProps } from '../types'

interface HowItWorksProps extends BaseComponentProps {}

const HowItWorks: React.FC<HowItWorksProps> = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((step) => (
            <div key={step} className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full text-white flex items-center justify-center mx-auto mb-4">
                {step}
              </div>
              <h3 className="text-xl font-semibold mb-2">Step {step}</h3>
              <p className="text-gray-600">Description of step {step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks 