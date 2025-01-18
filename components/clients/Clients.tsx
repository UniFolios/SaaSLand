import React from 'react'
import ClientLogo from './ClientLogo'
import { Client } from './types'
import { BaseComponentProps } from '../types'

interface ClientsProps extends BaseComponentProps {}

const Clients: React.FC<ClientsProps> = () => {
  const clients: Client[] = [
    { name: "Company 1", logo: "/logos/company1.svg" },
    { name: "Company 2", logo: "/logos/company2.svg" },
    { name: "Company 3", logo: "/logos/company3.svg" },
    { name: "Company 4", logo: "/logos/company4.svg" },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center text-gray-600 mb-8">
          Trusted by Industry Leaders
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client, index) => (
            <ClientLogo key={index} {...client} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients 