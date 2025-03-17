'use client'
import React from 'react'
import { BaseComponentProps } from '../types'
import { smoothScrollTo } from '@/utils/smoothScroll'

const Footer: React.FC<BaseComponentProps> = () => {
  return (
    <footer className="bg-black">
      {/* Top Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Logo and Description */}
          <div>
            {/* Inline Logo as text (or you can replace this with an inline SVG logo) */}
            <h1 className="text-3xl font-extrabold text-white mb-6">SaaSLand</h1>
            <p className="text-gray-300 max-w-md">
              Our mission is to empower your business with scalable and innovative solutions.
            </p>
          </div>

          {/* Pages Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Pages</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4">
              <a href="#banner" className="text-white hover:text-gray-300 transition-colors">Home</a>
              <a href="#about" className="text-white hover:text-gray-300 transition-colors">About</a>
              <a href="#features" className="text-white hover:text-gray-300 transition-colors">Features</a>
              <a href="#pricing" className="text-white hover:text-gray-300 transition-colors">Pricing</a>
              <a href="#tools" className="text-white hover:text-gray-300 transition-colors">Tools</a>
              <a href="#contact" className="text-white hover:text-gray-300 transition-colors">Contact</a>
              <a href="#testimonials" className="text-white hover:text-gray-300 transition-colors">Testimonials</a>
              <a href="/admin/login" className="text-white hover:text-gray-300 transition-colors">Dashboard</a>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Row */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Address</h3>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-white">(123) 456-7890</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white">info@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white">123 Street, City, Country</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Follow us</h3>
              <div className="flex gap-4">
                <button 
                  onClick={() => smoothScrollTo('banner')}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34V21.88C18.34 21.12 22 17 22 12z"/>
                  </svg>
                </button>
                <button 
                  onClick={() => smoothScrollTo('banner')}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.28 4.28 0 001.88-2.36 8.52 8.52 0 01-2.7 1.03 4.24 4.24 0 00-7.22 3.86A12.04 12.04 0 013 4.89a4.24 4.24 0 001.31 5.66 4.21 4.21 0 01-1.92-.53v.05a4.24 4.24 0 003.4 4.15 4.27 4.27 0 01-1.91.07 4.25 4.25 0 003.97 2.95A8.5 8.5 0 012 19.54a12.02 12.02 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.36 8.36 0 0022.46 6z"/>
                  </svg>
                </button>
                <button 
                  onClick={() => smoothScrollTo('banner')}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </button>
                <button 
                  onClick={() => smoothScrollTo('banner')}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-500">
            <p>Designed by HSTech, Powered by OAMK</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer