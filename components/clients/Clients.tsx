import React from 'react'
import ClientLogo from './ClientLogo'
import { Client } from './types'
import { BaseComponentProps } from '../types'

interface ClientsProps extends BaseComponentProps {}

/**
 * Clients Component
 * This component displays a list of client logos and a heading.
 *
 * Props:
 * - None directly, but the component uses an array of `Client` objects to render.
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
    <section>
      {/* Heading Section */}
      <div>
        <h2>
          Elevate your company with us, just like 100+ others
        </h2>
      </div>

      {/* Grid of Client Logos */}
      <div>
        {clients.map((client, index) => (
          <div key={index}>
            <ClientLogo {...client} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients
