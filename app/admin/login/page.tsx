'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface FormErrors {
  username?: string
  password?: string
}

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState('')
  const router = useRouter()

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!credentials.username.trim()) {
      newErrors.username = 'Username is required'
    }
    
    if (!credentials.password) {
      newErrors.password = 'Password is required'
    } else if (credentials.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setServerError('')
    
    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      })

      if (response.ok) {
        window.location.href = '/admin/dashboard'
      } else {
        const data = await response.json()
        setServerError(data.error || 'Invalid credentials')
      }
    } catch (error) {
      setServerError('Login failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-950 to-neutral-900">
      <div className="relative max-w-md w-full mx-4">
        <div className="absolute inset-0 bg-gradient-to-r from-[#e11d48] via-[#f59e0b] to-[#3b82f6] rounded-lg blur opacity-40" />
        <div className="relative bg-white rounded-lg shadow-xl p-8">
          <div className="flex justify-center mb-8">
            <Link 
              href="/"
              className="flex-none hover:rotate-45 hover:opacity-90 bg-black hover:bg-black rounded-full p-0.5 transition-transform duration-300 ease-out"
            >
              <svg
                className="h-10"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#cs_clip_1_star-1)">
                  <mask
                    id="cs_mask_1_star-1"
                    style={{ maskType: 'alpha' }}
                    width="200"
                    height="200"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                  >
                    <path
                      fill="#fff"
                      fillRule="evenodd"
                      d="M200 100C200 44.772 155.228 0 100 0S0 44.772 0 100s44.772 100 100 100 100-44.772 100-100zm-85.203-14.798c8.22 8.22 20.701 9.967 45.664 13.462L170 100l-9.539 1.335c-24.963 3.495-37.444 5.242-45.664 13.462-8.219 8.22-9.967 20.701-13.462 45.664L100 170l-1.335-9.539c-3.495-24.963-5.243-37.444-13.462-45.664-8.22-8.22-20.701-9.967-45.664-13.462L30 100l9.539-1.336c24.963-3.495 37.444-5.242 45.664-13.462 8.22-8.22 9.967-20.7 13.462-45.663L100 30l1.335 9.538c3.495 24.963 5.243 37.445 13.462 45.664z"
                      clipRule="evenodd"
                    />
                  </mask>
                  <g mask="url(#cs_mask_1_star-1)">
                    <path fill="#fff" d="M200 0H0v200h200V0z" />
                    <path fill="#FFF9C5" fillOpacity="0.44" d="M200 0H0v200h200V0z" />
                    <g filter="url(#filter0_f_748_4325)">
                      <path fill="#00F0FF" fillOpacity="0.85" d="M158 22H15v108h143V22z" />
                      <path fill="#FF58E4" d="M209 101H52v116h157V101z" />
                      <ellipse
                        cx="156"
                        cy="80"
                        fill="#FFE500"
                        fillOpacity="0.79"
                        rx="83"
                        ry="57"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_f_748_4325"
                    width="344"
                    height="315"
                    x="-45"
                    y="-38"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_748_4325" />
                  </filter>
                  <clipPath id="cs_clip_1_star-1">
                    <path fill="#fff" d="M0 0H200V200H0z" />
                  </clipPath>
                </defs>
                <g style={{ mixBlendMode: 'overlay' }} mask="url(#cs_mask_1_star-1)">
                  <path
                    fill="gray"
                    stroke="transparent"
                    d="M200 0H0v200h200V0z"
                    filter="url(#cs_noise_1_star-1)"
                  />
                </g>
                <defs>
                  <filter
                    id="cs_noise_1_star-1"
                    width="100%"
                    height="100%"
                    x="0%"
                    y="0%"
                    filterUnits="objectBoundingBox"
                  >
                    <feTurbulence baseFrequency="0.6" numOctaves="5" result="out1" seed="4" />
                    <feComposite in="out1" in2="SourceGraphic" operator="in" result="out2" />
                    <feBlend in="SourceGraphic" in2="out2" mode="overlay" result="out3" />
                  </filter>
                </defs>
              </svg>
            </Link>
          </div>
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-neutral-950 to-neutral-700 bg-clip-text text-transparent">Admin Dashboard</h2>
          
          {serverError && (
            <div className="mb-6 p-3 text-sm text-red-500 bg-red-50 rounded-md border border-red-200">
              {serverError}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-neutral-700">
                Username
              </label>
              <input
                id="username"
                type="text"
                className={`mt-1 block w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 ${
                  errors.username ? 'border-red-500' : 'border-neutral-300'
                }`}
                value={credentials.username}
                onChange={(e) => {
                  setCredentials(prev => ({ ...prev, username: e.target.value }))
                  if (errors.username) setErrors(prev => ({ ...prev, username: undefined }))
                }}
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-500">{errors.username}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                className={`mt-1 block w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 ${
                  errors.password ? 'border-red-500' : 'border-neutral-300'
                }`}
                value={credentials.password}
                onChange={(e) => {
                  setCredentials(prev => ({ ...prev, password: e.target.value }))
                  if (errors.password) setErrors(prev => ({ ...prev, password: undefined }))
                }}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-gradient-to-r from-neutral-950 to-neutral-900 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 transition-all duration-200 relative overflow-hidden group disabled:opacity-70"
            >
              <span className="relative z-10">
                {isLoading ? 'Signing in...' : 'Sign in'}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#e11d48] via-[#f59e0b] to-[#3b82f6] opacity-0 group-hover:opacity-20 transition-opacity duration-200" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 