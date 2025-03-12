'use client'
import React from 'react'
import { Testimonial } from './types'
import { BaseComponentProps } from '../types'

// New cool inline SVG avatars with linear gradients

const inlineFace1 =
  'data:image/svg+xml;base64,' +
  btoa(`<?xml version="1.0"?>
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="coolGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4A90E2"/>
      <stop offset="100%" stop-color="#50E3C2"/>
    </linearGradient>
  </defs>
  <circle cx="32" cy="32" r="30" fill="url(#coolGrad1)"/>
  <circle cx="24" cy="28" r="3" fill="#ffffff"/>
  <circle cx="40" cy="28" r="3" fill="#ffffff"/>
  <path d="M22 38c3 4 13 4 16 0" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
</svg>`)

const inlineFace2 =
  'data:image/svg+xml;base64,' +
  btoa(`<?xml version="1.0"?>
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="coolGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9B59B6"/>
      <stop offset="100%" stop-color="#8E44AD"/>
    </linearGradient>
  </defs>
  <circle cx="32" cy="32" r="30" fill="url(#coolGrad2)"/>
  <circle cx="24" cy="28" r="3" fill="#ffffff"/>
  <circle cx="40" cy="28" r="3" fill="#ffffff"/>
  <path d="M22 38c3 4 13 4 16 0" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
</svg>`)

const inlineFace3 =
  'data:image/svg+xml;base64,' +
  btoa(`<?xml version="1.0"?>
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="coolGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#27AE60"/>
      <stop offset="100%" stop-color="#2ECC71"/>
    </linearGradient>
  </defs>
  <circle cx="32" cy="32" r="30" fill="url(#coolGrad3)"/>
  <circle cx="24" cy="28" r="3" fill="#ffffff"/>
  <circle cx="40" cy="28" r="3" fill="#ffffff"/>
  <path d="M22 38c3 4 13 4 16 0" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
</svg>`)

const inlineFace4 =
  'data:image/svg+xml;base64,' +
  btoa(`<?xml version="1.0"?>
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="coolGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E67E22"/>
      <stop offset="100%" stop-color="#D35400"/>
    </linearGradient>
  </defs>
  <circle cx="32" cy="32" r="30" fill="url(#coolGrad4)"/>
  <circle cx="24" cy="28" r="3" fill="#ffffff"/>
  <circle cx="40" cy="28" r="3" fill="#ffffff"/>
  <path d="M22 38c3 4 13 4 16 0" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
</svg>`)

interface TestimonialsProps extends BaseComponentProps {}

// Example testimonials array with new visuals
const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechCorp',
    content:
      "Incredible work! The team transformed our outdated website into a sleek, modern masterpiece. Highly recommend their services!",
    image: inlineFace1
  },
  {
    name: 'Michael Brown',
    role: 'CTO at Innovatech',
    content:
      "Their technology has improved our efficiency immensely. The solutions are top-notch, and the support is unbeatable!",
    image: inlineFace2
  },
  {
    name: 'Emily Davis',
    role: 'Product Manager at Creatify',
    content:
      "The level of customization is second to none. Our team loves how quickly we can adapt features to our needs!",
    image: inlineFace3
  },
  {
    name: 'John Smith',
    role: 'Founder at StartupHub',
    content:
      "We couldn't be happier with the results. It's a game changer for our business!",
    image: inlineFace4
  }
]

const Testimonials: React.FC<TestimonialsProps> = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Updated Header with extra top padding */}
        <div className="text-center mb-12 pt-12">
          <h2 className="text-4xl font-bold mb-2">Clients</h2>
          <p className="text-gray-300 text-lg">
            They love us.
          </p>
        </div>

        {/* Slider Container (relative for fade overlays) */}
        <div className="relative max-w-5xl mx-auto">
          {/* Faded edges for a sleek look */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent" />

          {/* Horizontal scroll area */}
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="snap-center min-w-[320px] max-w-sm bg-white text-black p-6 rounded-lg shadow-md flex-shrink-0"
              >
                {/* Avatar + name/role */}
                <div className="flex items-center mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{t.name}</h4>
                    <p className="text-sm text-gray-600">{t.role}</p>
                  </div>
                </div>
                {/* Testimonial text */}
                <p className="text-gray-800">{t.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials