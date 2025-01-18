import React from 'react'
import Image from 'next/image'
import { Testimonial } from './types'

const TestimonialCard = ({ name, role, content, image }: Testimonial) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  )
}

export default TestimonialCard 