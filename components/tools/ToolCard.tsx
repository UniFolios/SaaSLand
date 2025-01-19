import React from 'react'
import { Tool } from './types'

type ToolCardProps = Omit<Tool, 'id'>

const ToolCard: React.FC<ToolCardProps> = ({ icon, name }) => {
  return (
    <div className="flex items-center justify-center">
      <img 
        src={icon} 
        alt={name}
        width={80}
        height={80}
        className="object-contain"
      />
    </div>
  )
}

export default ToolCard 