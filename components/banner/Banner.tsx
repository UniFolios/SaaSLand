'use client'
import React from 'react'
import { BaseComponentProps } from '../types'

interface BannerProps extends BaseComponentProps {}

const Banner: React.FC<BannerProps> = () => {
  return (
    <div className="bg-blue-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
          <p className="text-xl mb-8">The best solution for your business needs</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner 