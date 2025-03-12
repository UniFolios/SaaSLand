import React, { useRef, useEffect, useState } from 'react'
import ToolCard from './ToolCard'
import { Tool } from './types'
import { BaseComponentProps } from '../types'

// 1) Create a custom hook to observe when an element enters the viewport
function useFadeUp() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once visible, optionally unobserve so it doesn't trigger again
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1, // how much of the element must be visible
      }
    )

    observer.observe(element)
    return () => {
      observer.disconnect()
    }
  }, [])

  return { ref, isVisible }
}

// 2) Define distinct icons typically used in a Next.js project (no repeats)
//    Updated to ensure Vercel, Webpack, and Next.js icons are visible on black.
//    Only using the current icons provided.
const toolIcons: Tool[] = [
  {
    id: 1,
    name: 'React',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    id: 3,
    name: 'JavaScript',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
  },
  {
    id: 4,
    name: 'HTML5',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
  },
  {
    id: 5,
    name: 'CSS3',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
  },
  {
    id: 6,
    name: 'Node.js',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
  },
  {
    id: 7,
    name: 'TypeScript',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
  },
  {
    id: 8,
    name: 'Tailwind CSS',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  },
  {
    id: 10,
    name: 'Git',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg',
  },
  {
    id: 11,
    name: 'GitHub',
    icon: 'https://icongr.am/simple/github.svg?size=128&color=ffffff',
  },
  {
    id: 12,
    name: 'ESLint',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/ESLint_logo.svg',
  },
  // Webpack with a colored icon so it stands out
  {
    id: 13,
    name: 'Webpack',
    icon: 'https://icongr.am/devicon/webpack-original.svg?size=128',
  },
  {
    id: 14,
    name: 'Babel',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Babel_Logo.svg',
  },
  {
    id: 15,
    name: 'GraphQL',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg',
  },
]

const Tools: React.FC<BaseComponentProps> = () => {
  // Split the icons so the first row has 7 icons and the second row has 6 icons
  const firstRow = toolIcons.slice(0, 7)
  const secondRow = toolIcons.slice(7)

  // 3) Use our custom hooks for each row so each animates when in view
  const firstRowFade = useFadeUp()
  const secondRowFade = useFadeUp()

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
         Tools that you Know & Love
        </h2>
        
        {/* Tools container */}
        <div className="flex flex-col items-center space-y-12">
          {/* First row of 7 tools, with fade-up animation */}
          <div
            ref={firstRowFade.ref}
            className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-10 justify-items-center
              transform transition-all duration-700 
              ${firstRowFade.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            {firstRow.map((tool) => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>
          
          {/* Second row of 6 tools, with fade-up animation */}
          <div
            ref={secondRowFade.ref}
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 justify-items-center
              transform transition-all duration-700 delay-150
              ${secondRowFade.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            {secondRow.map((tool) => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Tools