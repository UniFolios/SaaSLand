import React from 'react'
import Image from 'next/image'
import { Client } from './types'

/**
 * ClientLogo Component
 * This component displays a client logo with a given name and logo URL.
 *
 * Props:
 * - name: The name of the client (used for alt text).
 * - logo: The URL of the client's logo image.
 */
const ClientLogo = ({ name, logo }: Client) => {
  return (
    <div>
      {/* Client logo image */}
      <Image
        src={logo}
        alt={`${name} logo`}
        width={120}
        height={60}
      />
    </div>
  )
}

export default ClientLogo
