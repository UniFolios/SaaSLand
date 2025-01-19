import React from 'react'
import ClientLogo from './ClientLogo'
import { Client } from './types'
import { BaseComponentProps } from '../types'

interface ClientsProps extends BaseComponentProps {}

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
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-600 mb-12">
          Elevate your company with us, just like 100+ others
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div key={index} className="w-full max-w-[134px]">
              <ClientLogo {...client} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients 