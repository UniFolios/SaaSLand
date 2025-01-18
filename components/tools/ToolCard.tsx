import React from 'react'
import { Tool } from './types'

const ToolCard = ({ name, description, icon, link }: Tool) => {
  return (
    <a 
      href={link}
      className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </a>
  )
}

export default ToolCard 