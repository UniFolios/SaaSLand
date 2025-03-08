import React from 'react'

interface SpecialFeatureCardProps {
  title: string
  description: string
  image: string
}

export const SpecialFeatureCard: React.FC<SpecialFeatureCardProps> = ({ 
  title = "Optimized Performance", 
  description = "Maximize your platform's efficiency with cutting-edge insights and data-driven optimizations that keep you ahead of the competition.", 
  image 
}) => {
  return (
    // Outer container with a subtle gradient background (similar gray tones) and relative positioning for the noise overlay
    <div className="relative p-[1px] rounded-xl h-full flex flex-col bg-neutral-500 overflow-hidden">
      {/* Noise/Grunge Overlay (absolutely positioned, animated) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 bg-repeat animate-noise"
        style={{
          backgroundImage:
            'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABN0lEQVQ4T62TPU4CQRCG/4dbEEmn4DSoaFFwYGCJbXq9Mg7mGvUJBLyEWgSlSXQBFuA6oq7BS2oUeECipJbKNyYOvDdwZy0l+nw+3jMMpLr1HYVXW66q8rLLJP6qLfZ8J2f6kTOMbnxvA3q4jD7fQNR6LIMBe6Zm9vFvXMB38cA10QowDT8AzHj6rDG02s/3Y6fZz7JD1JApgaGQ3cDt7P0BMrsm1z3S4lNls7OJynA2/hIHXrB4fF60DM2pluNeF5UxiJCHG9yGCR+ylvJ2gBK4p16Dg/2YPp0WBqP2KCY31TPXbDmq3tqsh1YFe+xR52FyeQH1atv/d2hvJyyG1ncRkKZ1k5OM2K+RlxZ5Gsh/OQNBk4Vl6FB+AAAAAElFTkSuQmCC")',
          backgroundSize: '16px 16px'
        }}
      />
      
      {/* Inner container with a 1px black inset stroke via box-shadow */}
      <div
        className="relative bg-neutral-600 p-6 rounded-xl flex flex-col h-full overflow-hidden"
        style={{
          boxShadow: 'inset 0 0 0 1px #000'
        }}
      >
        {/* SVG and Title aligned in a row */}
        <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200" width="48" height="48" className="coolshapes moon-7">
            <g clipPath="url(#cs_clip_1_moon-7)">
              <mask id="cs_mask_1_moon-7" style={{ maskType: "alpha" }} width="200" height="200" x="0" y="0" maskUnits="userSpaceOnUse">
                <path fill="#fff" d="M184.171 100c3.063 7.523 4.431 15.882 3.912 24.546-.953 15.898-8.183 31.523-20.098 43.439-11.916 11.915-27.541 19.145-43.439 20.098-8.664.519-17.023-.849-24.546-3.912L184.171 100zM100 15.829c-7.523-3.063-15.882-4.431-24.546-3.912-15.898.953-31.523 8.183-43.438 20.099C20.1 43.93 12.87 59.556 11.917 75.454c-.52 8.664.849 17.023 3.912 24.546L100 15.829z"></path>
              </mask>
              <g mask="url(#cs_mask_1_moon-7)">
                <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                <path fill="#FF6C02" fillOpacity="0.19" d="M200 0H0v200h200V0z"></path>
                <g filter="url(#filter0_f_748_4498)">
                  <ellipse cx="30.742" cy="164.545" fill="#FFC700" rx="79.5" ry="64.116" transform="rotate(-33.875 30.742 164.545)"></ellipse>
                  <path fill="url(#paint0_linear_748_4498)" d="M224 0H66v108h158V0z"></path>
                  <path fill="#FF37BB" d="M256 122H122v121h134V122z"></path>
                </g>
              </g>
            </g>
          </svg>
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
        </div>

        <p className="mt-3 mb-6 text-gray-200">{description}</p>

        <img 
          src={image} 
          alt={title}
          className="w-full object-cover mt-auto rounded-xl" 
        />
      </div>
      
      <style jsx>{`
        @keyframes noise {
          0% { background-position: 0 0; }
          100% { background-position: 100% 100%; }
        }
        .animate-noise {
          animation: noise 1s steps(10) infinite;
        }
      `}</style>
    </div>
  )
}