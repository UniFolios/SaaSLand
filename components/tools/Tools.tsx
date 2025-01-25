import React from 'react'
import ToolCard from './ToolCard'
import { Tool } from './types'
import { BaseComponentProps } from '../types'

interface ToolsProps extends BaseComponentProps {}

/**
 * Tools Component
 * Displays a grid of tools split into two rows, with a Call-to-Action button at the bottom.
 */
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
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Integrate With
          <br />
          Tools You Know And Love.
        </h2>
        
        {/* Tools Grid */}
        <div className="space-y-8">
          {/* First row - 11 tools */}
          <div className="flex flex-wrap justify-center gap-6">
            {tools.slice(0, 11).map((tool) => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>
          
          {/* Second row - 4 tools */}
          <div className="flex justify-center gap-6">
            {tools.slice(11).map((tool) => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <button className="bg-gray-900 text-white py-3 px-8 rounded-lg shadow-md hover:bg-gray-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

export default Tools