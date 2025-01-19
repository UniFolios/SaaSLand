import React from 'react'
import { Step as StepType } from './types'

interface StepProps extends StepType {
  className?: string;
}

const Step = ({ number, title, description, icon, className = '' }: StepProps) => {
  return (
    <div className={`relative max-w-2xl ${className}`}>
      {/* Step number badge */}
      <div className="absolute -top-10 bg-[#8277ff] rounded-full text-white px-3 py-1 text-sm font-medium">
        Step {number}
      </div>

      {/* Main card */}
      <div className="bg-white p-6 flex justify-between items-start">
        <div className="flex-1 pr-8">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        <img 
          src={icon} 
          alt={`${title} icon`}
          width={48}
          height={48}
          className="flex-shrink-0"
        />
      </div>
    </div>
  )
}

export default Step 