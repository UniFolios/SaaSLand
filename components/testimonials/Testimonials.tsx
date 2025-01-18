import React from 'react'
import TestimonialCard from './TestimonialCard'
import { Testimonial } from './types'
import { BaseComponentProps } from '../types'

interface TestimonialsProps extends BaseComponentProps {}

const Testimonials: React.FC<TestimonialsProps> = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Client Name</h4>
                  <p className="text-gray-500">Position, Company</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 