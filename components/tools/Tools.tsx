import React from 'react'
import ToolCard from './ToolCard'
import { Tool } from './types'
import { BaseComponentProps } from '../types'

interface ToolsProps extends BaseComponentProps {}

const Tools: React.FC<ToolsProps> = () => {
  const tools: Tool[] = [
    // First row - 11 tools
    ...Array(11).fill(null).map((_, i) => ({
      id: i + 1,
      icon: "https://placehold.co/80x80",
      name: `Tool ${i + 1}`,
    })),
    // Second row - 4 tools
    ...Array(4).fill(null).map((_, i) => ({
      id: i + 12,
      icon: "https://placehold.co/80x80",
      name: `Tool ${i + 12}`,
    }))
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          Integrate With<br />Tools You Know And Love.
        </h2>
        
        <div className="flex flex-col items-center space-y-12">
          {/* First row - 11 tools */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-8 justify-items-center">
            {tools.slice(0, 11).map((tool) => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>
          
          {/* Second row - 4 tools */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
            {tools.slice(11).map((tool) => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-[#140a3e] text-white rounded-md hover:bg-opacity-90 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

export default Tools 