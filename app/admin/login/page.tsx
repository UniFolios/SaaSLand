'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      })

      if (response.ok) {
        router.push('/admin/dashboard')
      } else {
        setError('Invalid credentials')
      }
    } catch (error) {
      setError('Login failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-950 to-neutral-900">
      <div className="relative max-w-md w-full mx-4">
        <div className="absolute inset-0 bg-gradient-to-r from-[#e11d48] via-[#f59e0b] to-[#3b82f6] rounded-lg blur opacity-40"></div>
        <div className="relative bg-white rounded-lg shadow-xl p-8">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-neutral-950 to-neutral-900 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-neutral-950 to-neutral-700 bg-clip-text text-transparent">Admin Login</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="text-red-500 text-center text-sm bg-red-50 p-2 rounded">{error}</div>
            )}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-neutral-700">
                Username
              </label>
              <input
                id="username"
                type="text"
                required
                className="mt-1 block w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200"
                value={credentials.username}
                onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="mt-1 block w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200"
                value={credentials.password}
                onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-gradient-to-r from-neutral-950 to-neutral-900 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 transition-all duration-200 relative overflow-hidden group"
            >
              <span className="relative z-10">Sign in</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#e11d48] via-[#f59e0b] to-[#3b82f6] opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 