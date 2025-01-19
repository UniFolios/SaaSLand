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
  ];

  return (
    <section>
      <div>
        {/* Header */}
        <h2>
          Integrate With
          <br />
          Tools You Know And Love.
        </h2>
        
        {/* Tools Grid */}
        <div>
          {/* First row - 11 tools */}
          <div>
            {tools.slice(0, 11).map((tool) => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>
          
          {/* Second row - 4 tools */}
          <div>
            {tools.slice(11).map((tool) => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <button>
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

export default Tools
