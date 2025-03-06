'use client'
import React, { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center justify-between bg-white text-gray-900 border border-gray-300 rounded-full px-4 py-2 shadow-sm">
        {/* Unique Logo: Rounded diamond shape with new hover animation */}
        <Link href="/" className="flex-none mr-8">
          <svg
            className="h-12 w-12 duration-300 ease-out hover:rotate-3 hover:text-blue-500"
            viewBox="0 0 40 40"
            fill="currentColor"
          >
            <path d="M20 4 C27 4, 36 11, 36 20 C36 29, 27 36, 20 36 C13 36, 4 29, 4 20 C4 11, 13 4, 20 4 Z" />
          </svg>
        </Link>

        {/* Desktop Nav with animated underline (slower transition) */}
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-8">
          {['About', 'Features', 'Pricing', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative text-base font-medium transition-all duration-300 ease-out group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gray-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop Button with gradient background and same hover animation */}
        <div className="hidden md:flex flex-none ml-8">
          <Link
            href="/early-access"
            className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out hover:rotate-3 hover:opacity-90"
          >
            Try it!
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden ml-auto transition-shadow duration-300 ease-out hover:shadow-2xl focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border border-gray-300 rounded-lg mt-2 px-4 pt-4 pb-6">
          <nav className="flex flex-col space-y-4">
            {['About', 'Features', 'Pricing', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="relative text-lg px-2 py-1 rounded transition-all duration-300 ease-out group hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gray-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </Link>
            ))}

            <hr className="border-gray-300" />

            <Link
              href="/early-access"
              className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium text-center transition-all duration-300 ease-out hover:rotate-3 hover:opacity-90"
              onClick={() => setIsOpen(false)}
            >
              Try it!
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}