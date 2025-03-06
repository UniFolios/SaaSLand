'use client'
import React from 'react'
import { BaseComponentProps } from '../types'

interface ClientsProps extends BaseComponentProps {}

interface Client {
  name: string
  logo: string
}

const Clients: React.FC<ClientsProps> = () => {
  // Use only the current brands
  const clients: Client[] = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
    { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  ]

  // Duplicate logos for seamless continuous scrolling.
  const sliderClients = [...clients, ...clients]

  return (
    <section className="py-32" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Marquee Slider */}
        <div className="overflow-hidden relative">
          <div className="flex animate-marquee space-x-12 sm:space-x-48 items-center">
            {sliderClients.map((client, index) => (
              <div key={index} className="flex-shrink-0 w-[67px] sm:w-[134px]">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="mx-auto filter grayscale brightness-125"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default Clients