import React from 'react'
import ClientLogo from './ClientLogo'
import { Client } from './types'
import { BaseComponentProps } from '../types'

interface ClientsProps extends BaseComponentProps {}

/**
 * Clients Component
 * This component displays a list of client logos and a heading.
 */
const Clients: React.FC<ClientsProps> = () => {
  const clients: Client[] = [
    { name: "Company 1", logo: "https://placehold.co/134x32" },
    { name: "Company 2", logo: "https://placehold.co/134x32" },
    { name: "Company 3", logo: "https://placehold.co/134x32" },
    { name: "Company 4", logo: "https://placehold.co/134x32" },
    { name: "Company 5", logo: "https://placehold.co/134x32" },
    { name: "Company 6", logo: "https://placehold.co/134x32" },
  ]

  return (
    <section className="bg-gray-50 py-16">
      {/* Heading Section */}
      <div className="max-w-screen-xl mx-auto text-center px-6 lg:px-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Elevate your company with us, just like <span className="text-blue-600">100+ others</span>
        </h2>
      </div>

      {/* Grid of Client Logos */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center px-6 lg:px-8">
        {clients.map((client, index) => (
          <div key={index} className="flex justify-center">
            <ClientLogo {...client} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients