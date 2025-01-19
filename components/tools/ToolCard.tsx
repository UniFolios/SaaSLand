import React from 'react'
import { Tool } from './types'

type ToolCardProps = Omit<Tool, 'id'>

/**
 * ToolCard Component
 * Displays a tool with its icon and name.
 *
 * Props:
 * - icon: The URL of the tool's icon.
 * - name: The name of the tool.
 */
const ToolCard: React.FC<ToolCardProps> = ({ icon, name }) => {
  return (
    <div>
      {/* Tool Icon */}
      <img 
        src={icon} 
        alt={name}
        width={80}
        height={80}
      />
    </div>
  )
}

export default ToolCard
