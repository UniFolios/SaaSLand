import React from 'react'
import ToolCard from './ToolCard'
import { Tool } from './types'
import { BaseComponentProps } from '../types'

interface ToolsProps extends BaseComponentProps {}

const Tools: React.FC<ToolsProps> = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Tools</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="p-4 border rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold">Tool {item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tools 