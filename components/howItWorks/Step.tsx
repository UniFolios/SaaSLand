import React from 'react'
import { Step as StepType } from './types'

// Minimal inline SVGs for each step
// (from Heroicons or similar, embedded as data URIs)
const cloneSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
const cloneDataURI = 'data:image/svg+xml;utf8,' + encodeURIComponent(cloneSVG);

const modifySVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L11 16l-4 1 1-4 9.5-9.5z"></path></svg>`;
const modifyDataURI = 'data:image/svg+xml;utf8,' + encodeURIComponent(modifySVG);

const publishSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M16 16l-4-4-4 4m4-4v9m5 0a5 5 0 0 0 1-9.9 7.002 7.002 0 0 0-13.197 1.515A4 4 0 0 0 4 17h2"></path></svg>`;
const publishDataURI = 'data:image/svg+xml;utf8,' + encodeURIComponent(publishSVG);

interface StepProps extends StepType {
  className?: string;
}

function getEmbeddedIcon(stepNumber: number) {
  switch (stepNumber) {
    case 1:
      return cloneDataURI
    case 2:
      return modifyDataURI
    case 3:
      return publishDataURI
    default:
      return cloneDataURI // fallback or handle more steps as needed
  }
}

const Step = ({ number, title, description, icon, className = '' }: StepProps) => {
  // If a custom icon is provided, use it; otherwise, pick from the inlined set
  const finalIcon = icon || getEmbeddedIcon(number)

  return (
    <div className={`relative max-w-2xl ${className}`}>
      {/* Step number badge - black background, white text */}
      <div className="absolute -top-10 bg-black text-white rounded-full px-3 py-1 text-sm font-medium">
        Step {number}
      </div>

      {/* Main card - white background, black/dark text */}
      <div
        className="bg-white p-6 flex justify-between items-start rounded-xl"
        style={{ boxShadow: 'inset 0 0 0 1px #000' }}
      >
        <div className="flex-1 pr-8">
          <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>

        <img 
          src={finalIcon} 
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