import React from 'react'

interface SpecialFeatureCardProps {
  title: string
  description: string
  image: string
}

export const SpecialFeatureCard: React.FC<SpecialFeatureCardProps> = ({
  title = "Optimized Performance",
  description = "Maximize your platform's efficiency with cutting-edge insights and data-driven optimizations that keep you ahead of the competition.",
  image
}) => {
  return (
    // Outer container with white background
    <div className="relative p-[1px] rounded-xl h-full flex flex-col bg-white overflow-hidden">
      
      {/* Inner container with a 1px black inset stroke and white background */}
      <div
        className="relative bg-white p-6 rounded-xl flex flex-col h-full overflow-hidden"
        style={{ boxShadow: 'inset 0 0 0 1px #000' }}
      >
        {/*
          For screens below 1280px (default), the icon and title stack vertically.
          For screens 1280px and above (xl), they appear side by side (row)
          with the icon on the left. If the title is too long it will wrap,
          causing the second word (or more) to drop onto the next line.
        */}
        <div className="flex gap-3 flex-col xl:flex-row xl:items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 200 200"
            className="coolshapes misc-3 w-16 h-16 flex-shrink-0"
          >
            <g clipPath="url(#cs_clip_1_misc-3)">
              <mask 
                id="cs_mask_1_misc-3" 
                style={{ maskType: 'alpha' }} 
                width="200" 
                height="200" 
                x="0" 
                y="0" 
                maskUnits="userSpaceOnUse"
              >
                <path 
                  fill="#fff" 
                  d="M91.88 93.893c-8.633-4.1-23.77-7.596-42.041-8.434C21.023 84.137 0 92.507 0 101.202c0 5.655 9.44 10.613 23.613 13.389-5.421-2.281-8.411-5.185-8.411-8.642 0-7.666 25.777-22.473 64.113-14.541 4.574.946 8.752 1.764 12.565 2.485zM108.12 106.107c8.633 4.1 23.771 7.596 42.041 8.434C178.977 115.863 200 107.493 200 98.798c0-5.655-9.439-10.613-23.613-13.39 5.421 2.282 8.411 5.186 8.411 8.644 0 7.665-25.777 22.472-64.113 14.54a746.696 746.696 0 00-12.565-2.485zM106.107 91.88c4.1-8.633 7.596-23.77 8.434-42.041C115.863 21.023 107.493 0 98.798 0c-5.655 0-10.613 9.44-13.39 23.613 2.282-5.421 5.186-8.411 8.644-8.411 7.665 0 22.472 25.777 14.54 64.113a747.092 747.092 0 00-2.485 12.565zM93.893 108.12c-4.1 8.633-7.596 23.771-8.434 42.041C84.137 178.977 92.507 200 101.202 200c5.655 0 10.613-9.439 13.389-23.613-2.281 5.421-5.185 8.411-8.642 8.411-7.666 0-22.473-25.777-14.541-64.113a738.825 738.825 0 002.485-12.565zM98.576 89.94c-3.204-9.004-11.437-22.18-23.763-35.691-19.441-21.31-40.226-30.258-46.374-24.11-3.998 3.999-.83 14.18 7.23 26.165-2.22-5.447-2.281-9.614.163-12.059 5.42-5.42 34.118 2.337 55.617 35.053a739.993 739.993 0 007.127 10.642zM101.423 110.06c3.205 9.004 11.437 22.18 23.764 35.691 19.441 21.311 40.225 30.258 46.373 24.11 3.999-3.999.83-14.18-7.229-26.165 2.22 5.447 2.281 9.614-.164 12.059-5.42 5.42-34.118-2.337-55.616-35.053a747.65 747.65 0 00-7.128-10.642zM110.06 98.577c9.003-3.205 22.179-11.438 35.691-23.764 21.311-19.441 30.258-40.226 24.11-46.373-3.999-4-14.18-.83-26.165 7.229 5.446-2.22 9.614-2.281 12.059.164 5.42 5.42-2.337 34.117-35.053 55.616a738.922 738.922 0 00-10.642 7.128zM89.94 101.423c-9.004 3.205-22.18 11.438-35.692 23.764-21.31 19.441-30.257 40.225-24.11 46.373 4 3.999 14.18.831 26.165-7.229-5.446 2.221-9.613 2.281-12.058-.164-5.42-5.42 2.337-34.117 35.053-55.616a734.253 734.253 0 0010.641-7.128z"
                />
                <path 
                  fill="#fff" 
                  d="M90.161 97.465c-9.545-.485-24.868 2.08-42.069 8.297-27.127 9.806-43.347 25.584-40.02 33.617 2.164 5.224 12.783 6.193 26.94 3.334-5.882-.033-9.756-1.572-11.079-4.767C21 130.864 39.15 107.32 77.602 99.978c4.587-.877 8.76-1.72 12.559-2.513zM109.839 102.535c9.545.485 24.868-2.079 42.069-8.297 27.127-9.806 43.347-25.584 40.02-33.617-2.164-5.224-12.782-6.193-26.939-3.334 5.881.034 9.755 1.572 11.078 4.767 2.933 7.082-15.216 30.626-53.668 37.969a742.032 742.032 0 00-12.56 2.512zM102.535 90.16c.485-9.544-2.079-24.867-8.297-42.068-9.805-27.127-25.584-43.347-33.617-40.02-5.224 2.164-6.193 12.783-3.334 26.94.034-5.882 1.572-9.756 4.767-11.079C69.136 21 92.68 39.15 100.023 77.601a742.707 742.707 0 002.512 12.56zM97.465 109.839c-.484 9.545 2.08 24.868 8.297 42.069 9.806 27.127 25.584 43.347 33.617 40.02 5.224-2.164 6.193-12.782 3.334-26.939-.033 5.881-1.572 9.755-4.766 11.078-7.083 2.933-30.627-15.216-37.97-53.668a737.863 737.863 0 00-2.512-12.56zM94.835 91.25c-6.406-7.091-19.054-16.114-35.613-23.88-26.117-12.249-48.743-12.56-52.07-4.528-2.164 5.225 4.66 13.418 16.691 21.406-4.135-4.182-5.786-8.009-4.463-11.203 2.934-7.082 32.415-10.897 64.798 11.1 3.863 2.625 7.41 4.98 10.657 7.105zM105.165 108.75c6.406 7.091 19.054 16.114 35.613 23.88 26.116 12.249 48.742 12.561 52.07 4.528 2.164-5.224-4.66-13.418-16.692-21.406 4.136 4.182 5.786 8.009 4.463 11.203-2.933 7.082-32.415 10.897-64.797-11.101a739.246 739.246 0 00-10.657-7.104zM108.75 94.835c7.091-6.406 16.114-19.054 23.88-35.613 12.248-26.116 12.561-48.743 4.528-52.07-5.225-2.164-13.418 4.66-21.407 16.692 4.183-4.136 8.01-5.787 11.204-4.463 7.082 2.933 10.897 32.414-11.101 64.797a729.283 729.283 0 00-7.104 10.657zM91.25 105.165c-7.092 6.406-16.114 19.054-23.88 35.613-12.249 26.116-12.561 48.743-4.528 52.07 5.224 2.164 13.418-4.659 21.406-16.692-4.182 4.136-8.009 5.787-11.203 4.463-7.082-2.933-10.898-32.415 11.1-64.797a740.254 740.254 0 007.105-10.657z"
                />
              </mask>
              <g mask="url(#cs_mask_1_misc-3)">
                <path fill="#fff" d="M200 0H0v200h200V0z"></path>
                <path fill="#FFFDEA" d="M200 0H0v200h200V0z"></path>
                <path fill="url(#paint0_radial_748_5046)" d="M200 0H0v200h200V0z"></path>
                <path fill="url(#paint1_radial_748_5046)" d="M200 0H0v200h200V0z"></path>
                <path fill="url(#paint2_radial_748_5046)" d="M200 0H0v200h200V0z"></path>
                <path fill="url(#paint3_radial_748_5046)" d="M200 0H0v200h200V0z"></path>
              </g>
            </g>
            <defs>
              <radialGradient id="paint0_radial_748_5046" cx="0" cy="0" r="1" gradientTransform="matrix(81.99998 6 -6 81.99998 11.5 100)" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00C5DF"></stop>
                <stop offset="1" stopColor="#0CE548" stopOpacity="0"></stop>
              </radialGradient>
              <radialGradient id="paint1_radial_748_5046" cx="0" cy="0" r="1" gradientTransform="rotate(73.352 43.022 75.99) scale(162.304)" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF58E4"></stop>
                <stop offset="0.383" stopColor="#FF7776"></stop>
                <stop offset="1" stopColor="#FFE500" stopOpacity="0"></stop>
              </radialGradient>
              <radialGradient id="paint2_radial_748_5046" cx="0" cy="0" r="1" gradientTransform="rotate(-86.927 139.95 32.493) scale(74.6073)" gradientUnits="userSpaceOnUse">
                <stop offset="0.355" stopColor="#00F0FF"></stop>
                <stop offset="1" stopColor="#FFD977" stopOpacity="0"></stop>
              </radialGradient>
              <radialGradient id="paint3_radial_748_5046" cx="0" cy="0" r="1" gradientTransform="rotate(-123.011 105.927 34.745) scale(93.6122)" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFE500"></stop>
                <stop offset="1" stopColor="#FFE927" stopOpacity="0"></stop>
              </radialGradient>
              <clipPath id="cs_clip_1_misc-3">
                <path fill="#fff" d="M0 0H200V200H0z"></path>
              </clipPath>
            </defs>
            <g style={{ mixBlendMode: 'overlay' }} mask="url(#cs_mask_1_misc-3)">
              <path 
                fill="gray" 
                stroke="transparent" 
                d="M200 0H0v200h200V0z" 
                filter="url(#cs_noise_1_misc-3)"
              ></path>
            </g>
            <defs>
              <filter id="cs_noise_1_misc-3" width="100%" height="100%" x="0%" y="0%" filterUnits="objectBoundingBox">
                <feTurbulence baseFrequency="0.6" numOctaves="5" result="out1" seed="4"></feTurbulence>
                <feComposite in="out1" in2="SourceGraphic" operator="in" result="out2"></feComposite>
                <feBlend in="SourceGraphic" in2="out2" mode="overlay" result="out3"></feBlend>
              </filter>
            </defs>
          </svg>

          <h3 className="text-2xl font-semibold text-black">{title}</h3>
        </div>

        <p className="mt-3 mb-6 text-gray-700">{description}</p>

        <img 
          src={image} 
          alt={title}
          className="w-full object-cover mt-auto rounded-xl" 
        />
      </div>
    </div>
  )
}

export default SpecialFeatureCard