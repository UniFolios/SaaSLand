import React from 'react'
import { Step as StepType } from './types'

interface StepProps extends StepType {
  className?: string;
}

/**
 * Step Component
 * This component displays a single step with a number, title, description, and an icon.
 *
 * Props:
 * - number: The step number.
 * - title: The title of the step.
 * - description: A brief description of the step.
 * - icon: URL of the step's icon.
 * - className: Optional className for additional styling or layout control.
 */
const Step = ({ number, title, description, icon, className = '' }: StepProps) => {
  return (
    <div>
      {/* Step number badge */}
      <div>
        Step {number}
      </div>

      {/* Main card */}
      <div>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <img 
          src={icon} 
          alt={`${title} icon`}
          width={48}
          height={48}
        />
      </div>
    </div>
  )
}

export default Step
