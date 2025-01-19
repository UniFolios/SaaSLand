import React from 'react'
import TestimonialCard from './TestimonialCard'
import { Testimonial } from './types'
import { BaseComponentProps } from '../types'

interface TestimonialsProps extends BaseComponentProps {}

const Testimonials: React.FC<TestimonialsProps> = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What our clients say about us
            </h2>
            <p className="text-gray-600 text-lg">
              Discover why businesses trust our solutions
            </p>
          </div>
          <button className="px-6 py-3 bg-[#140a3e] text-white rounded-md hover:bg-opacity-90 transition-colors">
            Read All Testimonials
          </button>
        </div>

        {/* Content Area */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Stats Box */}
          <div className="bg-[#140a3e] text-white p-8 rounded-lg">
            <div className="flex justify-between items-start mb-8">
              <img 
                src="https://placehold.co/48x48" 
                alt="Stats icon"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-5xl font-bold mb-4">99%</h3>
            <p className="text-gray-300">
              users are taking advantage of our Task Manager Tool. It's a new transparent and efficient way to organize all of your daily tasks.
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="bg-white p-8 rounded-lg md:col-span-2">
            <img 
              src="https://placehold.co/48x48" 
              alt="Quote icon"
              className="w-12 h-12 mb-6"
            />
            <p className="text-gray-700 mb-8 text-lg">
              Incredible work! The team at Deflow transformed our outdated website into a sleek, modern masterpiece. Our site now performs exceptionally well. The team at Deflow transformed our outdated website into a sleek, modern masterpiece. Our site now performs exceptionally well. website into a sleek, modern masterpiece. Highly recommend their services!
            </p>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img 
                  src="https://placehold.co/48x48" 
                  alt="Client"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-gray-600">CEO at TechCorp</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 