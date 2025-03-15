'use client'
import React from 'react'
import { BaseComponentProps } from '../types'
import { smoothScrollTo } from '@/utils/smoothScroll'

interface ContactProps extends BaseComponentProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Chat</h2>
          <p className="text-gray-600 text-lg">Have questions? We're ready to help!</p>
        </div>

        {/* Content Area */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="bg-white p-6 rounded-lg flex justify-between items-start">
              <div>
                <p className="text-gray-600 text-sm mb-1">Call Us:</p>
                <p className="text-xl font-bold">+01 598 269 4756</p>
              </div>
              <img src="https://placehold.co/48x48" alt="Phone" className="w-12 h-12" />
            </div>

            <div className="bg-white p-6 rounded-lg flex justify-between items-start">
              <div>
                <p className="text-gray-600 text-sm mb-1">Email Us:</p>
                <p className="text-xl font-bold">info@example.com</p>
              </div>
              <img src="https://placehold.co/48x48" alt="Email" className="w-12 h-12" />
            </div>

            <div className="bg-white p-6 rounded-lg flex justify-between items-start">
              <div>
                <p className="text-gray-600 text-sm mb-1">Visit Us:</p>
                <p className="text-xl font-bold">123 Business Street, NY</p>
              </div>
              <img src="https://placehold.co/48x48" alt="Location" className="w-12 h-12" />
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Follow us</h3>
              <div className="flex gap-4">
                <button 
                  onClick={() => smoothScrollTo('banner')}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34V21.88C18.34 21.12 22 17 22 12z"/>
                  </svg>
                </button>
                <button 
                  onClick={() => smoothScrollTo('banner')}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.28 4.28 0 001.88-2.36 8.52 8.52 0 01-2.7 1.03 4.24 4.24 0 00-7.22 3.86A12.04 12.04 0 013 4.89a4.24 4.24 0 001.31 5.66 4.21 4.21 0 01-1.92-.53v.05a4.24 4.24 0 003.4 4.15 4.27 4.27 0 01-1.91.07 4.25 4.25 0 003.97 2.95A8.5 8.5 0 012 19.54a12.02 12.02 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.36 8.36 0 0022.46 6z"/>
                  </svg>
                </button>
                <button 
                  onClick={() => smoothScrollTo('banner')}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </button>
                <button 
                  onClick={() => smoothScrollTo('banner')}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#140a3e] text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Send Your Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
