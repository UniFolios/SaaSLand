import React from 'react'
import Image from 'next/image'
import { Testimonial } from './types'

/**
 * TestimonialCard Component
 * Displays a single testimonial with the person's name, role, content, and image.
 *
 * Props:
 * - name: The name of the person giving the testimonial.
 * - role: The role or position of the person.
 * - content: The content of the testimonial.
 * - image: URL of the person's image.
 */
const TestimonialCard = ({ name, role, content, image }: Testimonial) => {
  return (
    <div>
      {/* Person's Information */}
      <div>
        <div>
          <Image
            src={image}
            alt={name}
            fill
          />
        </div>
        <div>
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </div>

      {/* Testimonial Content */}
      <p>{content}</p>
    </div>
  )
}

export default TestimonialCard
