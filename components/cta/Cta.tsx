import React from 'react'
import { BaseComponentProps } from '../types'

interface CtaProps extends BaseComponentProps {}

const Cta: React.FC<CtaProps> = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers today</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium">
            Sign Up Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default Cta 