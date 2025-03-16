'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface Message {
  timestamp: string
  name: string
  email: string
  message: string
}

interface VisitData {
  timestamp: string
  page: string
  deviceInfo: {
    platform: string
    userAgent: string
    screenSize: string
  }
}

interface DeviceStats {
  [key: string]: number
}

export default function AdminDashboard() {
  const [messages, setMessages] = useState<Message[]>([])
  const [visits, setVisits] = useState<VisitData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [messagesRes, visitsRes] = await Promise.all([
          fetch('/api/admin/messages'),
          fetch('/api/admin/visits')
        ])

        if (!messagesRes.ok || !visitsRes.ok) {
          router.push('/admin/login')
          return
        }

        const [messagesData, visitsData] = await Promise.all([
          messagesRes.json(),
          visitsRes.json()
        ])

        setMessages(messagesData.messages)
        setVisits(visitsData.visits)
      } catch (error) {
        console.error('Failed to fetch data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [router])

  // Calculate statistics
  const todayVisits = visits.filter(v => 
    new Date(v.timestamp).toDateString() === new Date().toDateString()
  )

  const deviceStats = visits.reduce((acc: DeviceStats, visit) => {
    const platform = visit.deviceInfo.platform
    acc[platform] = (acc[platform] || 0) + 1
    return acc
  }, {})

  const pageStats = visits.reduce((acc: DeviceStats, visit) => {
    acc[visit.page] = (acc[visit.page] || 0) + 1
    return acc
  }, {})

  const mostVisitedPages = Object.entries(pageStats)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5)

  const handleDeleteMessage = async (timestamp: string) => {
    try {
      const response = await fetch('/api/admin/messages/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ timestamp })
      })

      if (response.ok) {
        // Remove message from state
        setMessages(messages.filter(msg => msg.timestamp !== timestamp))
      }
    } catch (error) {
      console.error('Failed to delete message:', error)
    }
  }

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopiedEmail(email)
        // Reset the "Copied!" text after 2 seconds
        setTimeout(() => setCopiedEmail(null), 2000)
      })
      .catch(err => console.error('Failed to copy:', err))
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-950 to-neutral-900">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e11d48] via-[#f59e0b] to-[#3b82f6] rounded-lg blur opacity-40" />
          <div className="relative bg-white rounded-lg shadow-xl p-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 rounded-full border-4 border-neutral-200" />
                <div className="absolute inset-0 rounded-full border-4 border-t-[#e11d48] border-r-[#f59e0b] border-b-[#3b82f6] border-l-transparent animate-spin" />
              </div>
              <div className="mt-4 text-lg font-medium text-neutral-900">Loading Dashboard</div>
              <div className="mt-2 text-sm text-neutral-500">Please wait while we fetch your data...</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const quickStats = [
    { 
      title: 'Total Messages',
      value: messages.length,
      change: '+12%',
      icon: '📨'
    },
    { 
      title: 'Total Visits',
      value: visits.length,
      change: '+25%',
      icon: '👥'
    },
    { 
      title: "Today's Visits",
      value: todayVisits.length,
      change: '+5%',
      icon: '📊'
    },
    { 
      title: 'Avg. Response Time',
      value: '2.4h',
      change: '-18%',
      icon: '⚡'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 to-neutral-900 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-8">
            <a href="/" className="flex-none hover:rotate-45 hover:opacity-90 bg-black hover:bg-black rounded-full p-0.5 transition-transform duration-300 ease-out">
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
            </a>
            <div>
              <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
              <p className="text-neutral-400 mt-1">Overview of your site's performance</p>
            </div>
          </div>
          <button
            onClick={() => router.push('/admin/login')}
            className="px-6 py-2 bg-white text-neutral-900 rounded-md hover:bg-opacity-90 transition-all duration-200"
          >
            Logout
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#e11d48] via-[#f59e0b] to-[#3b82f6] rounded-lg blur opacity-40 group-hover:opacity-60 transition-opacity duration-200" />
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-neutral-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-neutral-900 mt-1">{stat.value}</p>
                  </div>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div className="mt-2">
                  <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} from last week
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Device Distribution */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#e11d48] via-[#f59e0b] to-[#3b82f6] rounded-lg blur opacity-40" />
            <div className="relative bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Device Distribution</h3>
              <div className="space-y-4">
                {Object.entries(deviceStats).map(([device, count], index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm text-neutral-600 mb-1">
                      <span>{device}</span>
                      <span>{((count / visits.length) * 100).toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#e11d48] to-[#f59e0b] h-2 rounded-full"
                        style={{ width: `${(count / visits.length) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Most Visited Pages */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#e11d48] via-[#f59e0b] to-[#3b82f6] rounded-lg blur opacity-40" />
            <div className="relative bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Most Visited Pages</h3>
              <div className="space-y-4">
                {mostVisitedPages.map(([page, count], index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-8 h-8 flex items-center justify-center bg-neutral-100 rounded-full text-neutral-600 text-sm">
                      {index + 1}
                    </span>
                    <div className="ml-3 flex-1">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-neutral-900">{page || 'Home'}</span>
                        <span className="text-neutral-500">{count} visits</span>
                      </div>
                      <div className="w-full bg-neutral-100 rounded-full h-1.5 mt-2">
                        <div 
                          className="bg-gradient-to-r from-[#3b82f6] to-[#f59e0b] h-1.5 rounded-full"
                          style={{ width: `${(count / Math.max(...Object.values(pageStats))) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Messages */}
        <div className="relative group mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e11d48] via-[#f59e0b] to-[#3b82f6] rounded-lg blur opacity-40" />
          <div className="relative bg-white rounded-lg shadow-lg">
            <div className="px-6 py-4 border-b border-neutral-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-neutral-900">Recent Messages</h2>
              <span className="text-sm text-neutral-500">Last 30 days</span>
            </div>
            <div className="divide-y divide-neutral-200">
              {messages.slice(0, 5).map((msg, index) => (
                <div key={index} className="p-6 hover:bg-neutral-50 transition-colors duration-200">
                  <div className="flex justify-between mb-2">
                    <div>
                      <span className="font-semibold text-neutral-900">{msg.name}</span>
                      <span className="mx-2 text-neutral-400">•</span>
                      <span className="text-neutral-600 group relative">
                        {msg.email}
                        <button
                          onClick={() => handleCopyEmail(msg.email)}
                          className="ml-2 text-neutral-400 hover:text-neutral-600 transition-colors inline-flex items-center gap-1"
                          title="Copy email"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                          </svg>
                          {copiedEmail === msg.email && (
                            <span className="text-green-500 text-sm font-medium">
                              Email Copied!
                            </span>
                          )}
                        </button>
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-neutral-500">
                        {new Date(msg.timestamp).toLocaleString()}
                      </span>
                      <button
                        onClick={() => handleDeleteMessage(msg.timestamp)}
                        className="text-red-400 hover:text-red-600 transition-colors"
                        title="Delete message"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-neutral-800">{msg.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visit Timeline */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e11d48] via-[#f59e0b] to-[#3b82f6] rounded-lg blur opacity-40" />
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-neutral-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-neutral-900">Visit Timeline</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm bg-neutral-100 rounded-md hover:bg-neutral-200">Today</button>
                <button className="px-3 py-1 text-sm bg-neutral-100 rounded-md hover:bg-neutral-200">Week</button>
                <button className="px-3 py-1 text-sm bg-neutral-100 rounded-md hover:bg-neutral-200">Month</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-neutral-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Page</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Device</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Screen</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 bg-white">
                  {visits.slice(0, 10).map((visit, index) => (
                    <tr key={index} className="hover:bg-neutral-50 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap text-neutral-900">
                        {new Date(visit.timestamp).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-neutral-900">{visit.page || 'Home'}</td>
                      <td className="px-6 py-4 text-neutral-900">{visit.deviceInfo.platform}</td>
                      <td className="px-6 py-4 text-neutral-900">{visit.deviceInfo.screenSize}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 