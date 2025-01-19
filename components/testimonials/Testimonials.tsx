import React from 'react'
import TestimonialCard from './TestimonialCard'
import { BaseComponentProps } from '../types'

interface TestimonialsProps extends BaseComponentProps {}

/**
 * Testimonials Component
 * Displays client testimonials, a stats box, and a testimonial slider.
 */
const Testimonials: React.FC<TestimonialsProps> = () => {
  return (
    <section>
      <div>
        {/* Header */}
        <div>
          <div>
            <h2>What our clients say about us</h2>
            <p>Discover why businesses trust our solutions</p>
          </div>
          <button>Read All Testimonials</button>
        </div>

        {/* Content Area */}
        <div>
          {/* Stats Box */}
          <div>
            <div>
              <img 
                src="https://placehold.co/48x48" 
                alt="Stats icon"
              />
            </div>
            <h3>99%</h3>
            <p>
              Users are taking advantage of our Task Manager Tool. It's a new transparent and efficient way to organize all of your daily tasks.
            </p>
          </div>

          {/* Testimonial Slider */}
          <div>
            <img 
              src="https://placehold.co/48x48" 
              alt="Quote icon"
            />
            <p>
              Incredible work! The team at Deflow transformed our outdated website into a sleek, modern masterpiece. Our site now performs exceptionally well. Highly recommend their services!
            </p>
            
            <div>
              <div>
                <img 
                  src="https://placehold.co/48x48" 
                  alt="Client"
                />
                <div>
                  <h4>Sarah Johnson</h4>
                  <p>CEO at TechCorp</p>
                </div>
              </div>
              
              <div>
                <button>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
