'use client'
import React from 'react'
import type { Feature } from './types'
import { BaseComponentProps } from '../types'
import { SpecialFeatureCard } from './SpecialFeatureCard'
import FeatureCard from './FeatureCard'

// SVGs remain exactly the same

// 1) Time Tracking
const timeTrackingSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 200 200"
    width="48"
    height="48"
    className="coolshapes triangle-14"
  >
    <g clipPath="url(#cs_clip_1_triangle-14)">
      <mask
        id="cs_mask_1_triangle-14"
        style={{ maskType: "alpha" }}
        width="196"
        height="200"
        x="2"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          d="M94.342 33.43c0-19.105 0-28.658-6.224-32.24C81.895-2.394 73.596 2.383 57 11.935l-11.998 6.906c-16.597 9.553-24.895 14.33-24.895 21.494 0 7.165 8.298 11.941 24.895 21.494L57 68.736c16.597 9.553 24.896 14.33 31.12 10.747 6.223-3.582 6.223-13.135 6.223-32.24V33.43zM39.343 71.6c-16.597-9.553-24.895-14.33-31.12-10.747C2 64.436 2 73.988 2 93.094v13.812c0 19.106 0 28.658 6.224 32.241 6.224 3.582 14.522-1.194 31.119-10.747l11.998-6.906c16.597-9.553 24.896-14.329 24.896-21.494 0-7.165-8.299-11.941-24.896-21.494L39.343 71.6zM45.001 138.17c-16.597 9.553-24.895 14.329-24.895 21.494 0 7.164 8.298 11.941 24.895 21.494L57 188.064c16.597 9.552 24.896 14.329 31.12 10.747 6.223-3.583 6.223-13.136 6.223-32.241v-13.812c0-19.106 0-28.659-6.224-32.241-6.223-3.582-14.522 1.194-31.119 10.747l-11.998 6.906zM105.658 166.569c0 19.106 0 28.659 6.224 32.241 6.224 3.583 14.522-1.194 31.119-10.747l11.998-6.905c16.597-9.553 24.895-14.33 24.895-21.494 0-7.165-8.298-11.941-24.895-21.494l-11.998-6.906c-16.597-9.553-24.895-14.329-31.119-10.747-6.224 3.582-6.224 13.135-6.224 32.241v13.811zM160.657 128.4c16.597 9.553 24.895 14.329 31.119 10.747C198 135.564 198 126.011 198 106.906V93.094c0-19.105 0-28.658-6.224-32.24-6.224-3.583-14.522 1.194-31.119 10.746l-11.998 6.906c-16.597 9.553-24.895 14.33-24.895 21.494 0 7.165 8.298 11.941 24.895 21.494l11.998 6.906zM154.999 61.83c16.597-9.553 24.895-14.329 24.895-21.494 0-7.164-8.298-11.94-24.895-21.494l-11.998-6.905c-16.597-9.553-24.895-14.33-31.119-10.747-6.224 3.582-6.224 13.135-6.224 32.24v13.812c0 19.106 0 28.659 6.224 32.241 6.224 3.582 14.522-1.194 31.119-10.747l11.998-6.906z"
        />
      </mask>
      <g mask="url(#cs_mask_1_triangle-14)">
        <path fill="#fff" d="M200 0H0v200h200V0z" />
        <path fill="#FF6C02" fillOpacity="0.13" d="M200 0H0v200h200V0z" />
        <g filter="url(#filter0_f_748_4873)">
          <ellipse
            cx="30.742"
            cy="171.544"
            fill="#FFC700"
            rx="79.5"
            ry="64.116"
            transform="rotate(-33.875 30.742 171.544)"
          />
          <path fill="#06F" d="M232-15H121v121h111V-15z" />
          <ellipse cx="37" cy="55" fill="#07FFE1" rx="60" ry="45" />
          <path fill="#FF37BB" d="M234 121H100v121h134V121z" />
        </g>
      </g>
    </g>
    <defs>
      <filter
        id="filter0_f_748_4873"
        width="438.331"
        height="417"
        x="-124.331"
        y="-95"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_748_4873"
          stdDeviation="40"
        />
      </filter>
      <clipPath id="cs_clip_1_triangle-14">
        <path fill="#fff" d="M0 0H200V200H0z" />
      </clipPath>
    </defs>
    <g style={{ mixBlendMode: 'overlay' }} mask="url(#cs_mask_1_triangle-14)">
      <path
        fill="gray"
        stroke="transparent"
        d="M200 0H0v200h200V0z"
        filter="url(#cs_noise_1_triangle-14)"
      />
    </g>
    <defs>
      <filter
        id="cs_noise_1_triangle-14"
        width="100%"
        height="100%"
        x="0%"
        y="0%"
        filterUnits="objectBoundingBox"
      >
        <feTurbulence
          baseFrequency="0.6"
          numOctaves="5"
          result="out1"
          seed="4"
        />
        <feComposite
          in="out1"
          in2="SourceGraphic"
          operator="in"
          result="out2"
        />
        <feBlend
          in="SourceGraphic"
          in2="out2"
          mode="overlay"
          result="out3"
        />
      </filter>
    </defs>
  </svg>
);

// 2) Project Management
const projectManagementSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 200 200"
    width="48"
    height="48"
    className="coolshapes moon-1"
  >
    <g clipPath="url(#cs_clip_1_moon-1)">
      <mask
        id="cs_mask_1_moon-1"
        style={{ maskType: "alpha" }}
        width="200"
        height="200"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          d="M65 3c0-1.657-1.344-3.007-2.999-2.93a65 65 0 000 129.861C63.656 130.007 65 128.657 65 127V3zM197 65c1.657 0 3.007-1.344 2.931-2.999a64.989 64.989 0 00-18.969-42.963 64.995 64.995 0 00-70.836-14.09 64.992 64.992 0 00-35.178 35.178A64.998 64.998 0 0070.069 62C69.993 63.656 71.343 65 73 65h124zM135 197c0 1.657 1.344 3.007 2.999 2.931a64.983 64.983 0 0021.875-4.879 64.983 64.983 0 0035.178-35.178 64.989 64.989 0 000-49.748 64.98 64.98 0 00-35.178-35.178 64.993 64.993 0 00-21.875-4.879C136.344 69.993 135 71.343 135 73v124zM3 135c-1.657 0-3.007 1.344-2.93 2.999a64.994 64.994 0 0018.968 42.963A64.987 64.987 0 0065 200a64.992 64.992 0 0045.962-19.038 64.983 64.983 0 0014.09-21.088 64.983 64.983 0 004.879-21.875c.076-1.655-1.274-2.999-2.931-2.999H3z"
        />
      </mask>
      <g mask="url(#cs_mask_1_moon-1)">
        <path fill="#fff" d="M200 0H0v200h200V0z" />
        <path
          fill="#FFC700"
          fillOpacity="0.331"
          d="M200 0H0v200h200V0z"
        />
        <g filter="url(#filter0_f_748_4554)">
          <path fill="#FFC700" d="M206 82.875H53.25v120.75H206V82.875z" />
          <path fill="#1BC47D" d="M148 17H15v118h133V17z" />
          <path fill="#FF33D5" d="M222 16H117v152h105V16z" />
        </g>
      </g>
    </g>
    <defs>
      <filter
        id="filter0_f_748_4554"
        width="332"
        height="312.625"
        x="-47.5"
        y="-46.5"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_748_4554"
          stdDeviation="31.25"
        />
      </filter>
      <clipPath id="cs_clip_1_moon-1">
        <path fill="#fff" d="M0 0H200V200H0z" />
      </clipPath>
    </defs>
    <g style={{ mixBlendMode: 'overlay' }} mask="url(#cs_mask_1_moon-1)">
      <path
        fill="gray"
        stroke="transparent"
        d="M200 0H0v200h200V0z"
        filter="url(#cs_noise_1_moon-1)"
      />
    </g>
    <defs>
      <filter
        id="cs_noise_1_moon-1"
        width="100%"
        height="100%"
        x="0%"
        y="0%"
        filterUnits="objectBoundingBox"
      >
        <feTurbulence
          baseFrequency="0.6"
          numOctaves="5"
          result="out1"
          seed="4"
        />
        <feComposite
          in="out1"
          in2="SourceGraphic"
          operator="in"
          result="out2"
        />
        <feBlend
          in="SourceGraphic"
          in2="out2"
          mode="overlay"
          result="out3"
        />
      </filter>
    </defs>
  </svg>
);

// 3) Resource Allocation
const resourceAllocationSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 200 200"
    width="48"
    height="48"
    className="coolshapes moon-4"
  >
    <g clipPath="url(#cs_clip_1_moon-4)">
      <mask
        id="cs_mask_1_moon-4"
        style={{ maskType: "alpha" }}
        width="200"
        height="200"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          d="M27 199.999c-17.334-27.301-27-62.937-27-100C0 62.937 9.666 27.301 27 0v199.999zM200 200a100.003 100.003 0 01-100-100A100.003 100.003 0 01200 0v200zM60.29 175.485C70.51 186.396 82.715 194.701 96 200V0C82.716 5.299 70.51 13.604 60.29 24.515 41.535 44.535 31 71.687 31 100c0 28.312 10.536 55.465 29.29 75.485z"
        />
      </mask>
      <g mask="url(#cs_mask_1_moon-4)">
        <path fill="#fff" d="M200 0H0v200h200V0z" />
        <path
          fill="url(#paint0_linear_748_4527)"
          d="M200 0H0v200h200V0z"
        />
        <g filter="url(#filter0_f_748_4527)">
          <ellipse
            cx="117.708"
            cy="149.343"
            fill="#FF58E4"
            rx="92.722"
            ry="73.064"
            transform="rotate(-33.875 117.708 149.343)"
          />
          <ellipse
            cx="68.482"
            cy="38.587"
            fill="#00F0FF"
            rx="69.531"
            ry="47.75"
            transform="rotate(-26.262 68.482 38.587)"
          />
        </g>
      </g>
    </g>
    <defs>
      <filter
        id="filter0_f_748_4527"
        width="362.189"
        height="403.182"
        x="-77.372"
        y="-94.144"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          result="effect1_foregroundBlur_748_4527"
          stdDeviation="40"
        />
      </filter>
      <linearGradient
        id="paint0_linear_748_4527"
        x1="158.5"
        x2="29"
        y1="12.5"
        y2="200"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0E6FFF" />
        <stop offset="1" stopColor="#00F0FF" />
      </linearGradient>
      <clipPath id="cs_clip_1_moon-4">
        <path fill="#fff" d="M0 0H200V200H0z" />
      </clipPath>
    </defs>
    <g style={{ mixBlendMode: 'overlay' }} mask="url(#cs_mask_1_moon-4)">
      <path
        fill="gray"
        stroke="transparent"
        d="M200 0H0v200h200V0z"
        filter="url(#cs_noise_1_moon-4)"
      />
    </g>
    <defs>
      <filter
        id="cs_noise_1_moon-4"
        width="100%"
        height="100%"
        x="0%"
        y="0%"
        filterUnits="objectBoundingBox"
      >
        <feTurbulence
          baseFrequency="0.6"
          numOctaves="5"
          result="out1"
          seed="4"
        />
        <feComposite
          in="out1"
          in2="SourceGraphic"
          operator="in"
          result="out2"
        />
        <feBlend
          in="SourceGraphic"
          in2="out2"
          mode="overlay"
          result="out3"
        />
      </filter>
    </defs>
  </svg>
);

// 4) Team Collaboration
const teamCollaborationSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 200 200"
    width="48"
    height="48"
    className="coolshapes misc-1"
  >
    <g clipPath="url(#cs_clip_1_misc-1)">
      <mask
        id="cs_mask_1_misc-1"
        style={{ maskType: "alpha" }}
        width="200"
        height="200"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          d="M50 100c27.614 0 50-22.386 50-50 0 27.608 22.375 49.99 49.98 50-27.605.011-49.98 22.392-49.98 50 0-27.614-22.386-50-50-50S0 122.386 0 150v50h50c27.614 0 50-22.386 50-50 0 27.614 22.386 50 50 50h50v-50c0-27.608-22.375-49.989-49.98-50C177.625 99.99 200 77.608 200 50V0h-50c-27.614 0-50 22.386-50 50 0-27.614-22.386-50-50-50H0v50c0 27.614 22.386 50 50 50z"
        />
      </mask>
      <g mask="url(#cs_mask_1_misc-1)">
        <path fill="#fff" d="M200 0H0v200h200V0z" />
        <path
          fill="#FFF9C5"
          fillOpacity="0.44"
          d="M200 0H0v200h200V0z"
        />
        <g filter="url(#filter0_f_748_5063)">
          <path
            fill="#00F0FF"
            fillOpacity="0.85"
            d="M158 22H15v108h143V22z"
          />
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
        id="filter0_f_748_5063"
        width="344"
        height="315"
        x="-45"
        y="-38"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          result="effect1_foregroundBlur_748_5063"
          stdDeviation="30"
        />
      </filter>
      <clipPath id="cs_clip_1_misc-1">
        <path fill="#fff" d="M0 0H200V200H0z" />
      </clipPath>
    </defs>
    <g style={{ mixBlendMode: 'overlay' }} mask="url(#cs_mask_1_misc-1)">
      <path
        fill="gray"
        stroke="transparent"
        d="M200 0H0v200h200V0z"
        filter="url(#cs_noise_1_misc-1)"
      />
    </g>
    <defs>
      <filter
        id="cs_noise_1_misc-1"
        width="100%"
        height="100%"
        x="0%"
        y="0%"
        filterUnits="objectBoundingBox"
      >
        <feTurbulence
          baseFrequency="0.6"
          numOctaves="5"
          result="out1"
          seed="4"
        />
        <feComposite
          in="out1"
          in2="SourceGraphic"
          operator="in"
          result="out2"
        />
        <feBlend
          in="SourceGraphic"
          in2="out2"
          mode="overlay"
          result="out3"
        />
      </filter>
    </defs>
  </svg>
);

interface FeaturesProps extends BaseComponentProps {}

const Features: React.FC<FeaturesProps> = () => {
  const leftFeatures: Feature[] = [
    {
      id: 1,
      icon: timeTrackingSVG,
      title: 'Real-Time User Insights',
      description: "Gain deep analytics into user behavior, engagement, and conversions with real-time data visualization."
    },
    {
      id: 2,
      icon: projectManagementSVG,
      title: 'Advanced Workflow Automation',
      description: "Streamline tasks, manage projects efficiently, and enhance productivity with our automation tools."
    }
  ];

  const rightFeatures: Feature[] = [
    {
      id: 3,
      icon: resourceAllocationSVG,
      title: 'Optimized Resource Management',
      description: "Ensure smooth performance with smart resource allocation and automated system monitoring."
    },
    {
      id: 4,
      icon: teamCollaborationSVG,
      title: 'Seamless Team Collaboration',
      description: "Empower teams with real-time communication, shared workspaces, and task tracking features."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Power Up Your SaaS Business
          </h2>
          <p className="text-gray-400">
            A high-performance, conversion-focused template designed to scale your SaaS platform and maximize user engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {leftFeatures.map((feature) => (
              <FeatureCard key={feature.id} {...feature} />
            ))}
          </div>

          {/* Center Column - Special Feature */}
          <div className="md:row-span-2">
            <SpecialFeatureCard
              title="Performance Optimization"
              description="Boost speed, efficiency, and conversion rates with our SaaS-optimized performance tools."
              image="/img/features_img.jpg"
            />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {rightFeatures.map((feature) => (
              <FeatureCard key={feature.id} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features