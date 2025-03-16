'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface Message {
  _id: string
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
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null)
  const [messageToDelete, setMessageToDelete] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch('/api/admin/check-auth')
      if (!response.ok) {
        router.push('/admin/login')
      }
    }
    checkAuth()
  }, [router])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const messagesRes = await fetch('/api/admin/messages')

        if (!messagesRes.ok) {
          router.push('/admin/login')
          return
        }

        const { messages: fetchedMessages } = await messagesRes.json()
        setMessages(fetchedMessages)
      } catch (error) {
        console.error('Failed to fetch data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [router])

  const handleDeleteMessage = async (_id: string) => {
    try {
      const response = await fetch('/api/admin/messages/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id })
      })

      if (response.ok) {
        setMessages(messages.filter(msg => msg._id !== _id))
      }
    } catch (error) {
      console.error('Failed to delete message:', error)
    } finally {
      setMessageToDelete(null)
    }
  }

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopiedEmail(email)
        setTimeout(() => setCopiedEmail(null), 2000)
      })
      .catch(err => console.error('Failed to copy:', err))
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', {
        method: 'POST'
      })
      // Use window.location for a full page reload
      window.location.href = '/admin/login'
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  const DeleteConfirmDialog = ({ messageId, onConfirm, onCancel }: { 
    messageId: string, 
    onConfirm: () => void, 
    onCancel: () => void 
  }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">
          Delete Message
        </h3>
        <p className="text-neutral-600 mb-6">
          Are you sure you want to delete this message? This action cannot be undone.
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-neutral-600 hover:text-neutral-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )

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
            onClick={handleLogout}
            className="px-6 py-2 bg-white text-neutral-900 rounded-md hover:bg-opacity-90 transition-all duration-200"
          >
            Logout
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { 
              title: 'Total Messages',
              value: messages.length,
              change: '+12%',
              icon: '📨'
            },
            { 
              title: 'New Messages',
              value: messages.filter(m => 
                new Date(m.timestamp) > new Date(Date.now() - 24 * 60 * 60 * 1000)
              ).length,
              change: '+5%',
              icon: '📬'
            },
            { 
              title: 'Response Rate',
              value: '98%',
              change: '+2%',
              icon: '⚡'
            }
          ].map((stat, index) => (
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

        {/* Recent Messages */}
        <div className="relative group mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e11d48] via-[#f59e0b] to-[#3b82f6] rounded-lg blur opacity-40" />
          <div className="relative bg-white rounded-lg shadow-lg">
            <div className="px-6 py-4 border-b border-neutral-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-neutral-900">Recent Messages</h2>
              <span className="text-sm text-neutral-500">Total: {messages.length}</span>
            </div>
            <div className="divide-y divide-neutral-200">
              {messages.map((msg) => (
                <div key={msg._id} className="p-6 hover:bg-neutral-50 transition-colors duration-200">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-neutral-900">{msg.name}</span>
                      <span className="text-neutral-400">•</span>
                      <div className="relative">
                        <span className="text-neutral-600">{msg.email}</span>
                        <button
                          onClick={() => handleCopyEmail(msg.email)}
                          className="ml-2 text-neutral-400 hover:text-neutral-600 transition-colors inline-flex items-center"
                          title="Copy email"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                          </svg>
                          {copiedEmail === msg.email && (
                            <span className="ml-1 text-green-500 text-sm font-medium">
                              Copied!
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-neutral-500">
                        {new Date(msg.timestamp).toLocaleString()}
                      </span>
                      <button
                        onClick={() => setMessageToDelete(msg._id)}
                        className="text-red-400 hover:text-red-600 transition-colors"
                        title="Delete message"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-neutral-800 mt-2">{msg.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {messageToDelete && (
        <DeleteConfirmDialog
          messageId={messageToDelete}
          onConfirm={() => handleDeleteMessage(messageToDelete)}
          onCancel={() => setMessageToDelete(null)}
        />
      )}
    </div>
  )
} 