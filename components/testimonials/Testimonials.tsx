import React from 'react'
import { BaseComponentProps } from '../types'

interface Testimonial {
  id: number
  percentage: string
  statText: string
  testimonial: string
  clientName: string
  clientRole: string
  clientImage: string
}

interface TestimonialsProps extends BaseComponentProps {}

const testimonials: Testimonial[] = [
  {
    id: 1,
    percentage: '99%',
    statText:
      "users are taking advantage of our Task Manager Tool. It's a new transparent and efficient way to organize all of your daily tasks.",
    testimonial:
      'Incredible work! The team at Deflow transformed our outdated website into a sleek, modern masterpiece. Highly recommend their services!',
    clientName: 'Sarah Johnson',
    clientRole: 'CEO at TechCorp',
    clientImage: 'https://placehold.co/48x48',
  },
]

const Testimonials: React.FC<TestimonialsProps> = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              What our clients say about us
            </h2>
            <p className="text-gray-600 mt-4">
              Discover why businesses trust our solutions
            </p>
          </div>
          <button className="bg-gray-900 text-white px-6 py-2 rounded-lg">
            Read All Testimonials
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-12 gap-8">
          {/* Stats Box */}
          <div className="col-span-4 bg-gray-900 text-white p-8 rounded-lg flex flex-col">
            <div>
              <img
                src="https://placehold.co/48x48"
                alt="Stats icon"
                className="mb-4"
              />
              <h3 className="text-6xl font-bold">{testimonials[0].percentage}</h3>
              <p className="text-gray-300 mt-4">{testimonials[0].statText}</p>
            </div>
          </div>

          {/* Testimonial Slider */}
          <div className="col-span-8 bg-white p-8 rounded-lg shadow-lg flex flex-col justify-between">
            <div className="mb-6">
              <img
                src="https://placehold.co/48x48"
                alt="Quote icon"
                className="mr-4 inline-block"
              />
              <p className="text-gray-700">{testimonials[0].testimonial}</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src={testimonials[0].clientImage}
                  alt="Client"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold">{testimonials[0].clientName}</h4>
                  <p className="text-gray-500 text-sm">{testimonials[0].clientRole}</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="p-2 bg-gray-200 rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-gray-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button className="p-2 bg-gray-200 rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-gray-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
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