'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

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
            <div className="w-16 h-16 bg-gradient-to-br from-neutral-950 to-neutral-900 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-neutral-950 to-neutral-700 bg-clip-text text-transparent">Admin Login</h2>
          
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