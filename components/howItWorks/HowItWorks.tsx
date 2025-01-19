import React from 'react'
import Step from './Step'
import { Step as StepType } from './types'
import { BaseComponentProps } from '../types'

interface HowItWorksProps extends BaseComponentProps {}

/**
 * HowItWorks Component
 * This component displays the steps for using the platform in a sequential manner.
 *
 * Props:
 * - None directly, but it uses an array of steps to render individual `Step` components.
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
  ];

  return (
    <section>
      <div>
        {/* Section Header */}
        <div>
          <h2>How it works</h2>
          <p>
            Discover how our SaaS platform transforms your workflow with intuitive features designed to streamline your processes and boost efficiency.
          </p>
        </div>

        {/* Steps Section */}
        <div>
          {steps.map((step) => (
            <Step 
              key={step.number} 
              {...step}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
