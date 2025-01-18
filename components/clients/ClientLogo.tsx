import React from 'react'
import Image from 'next/image'
import { Client } from './types'

const ClientLogo = ({ name, logo }: Client) => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={logo}
        alt={`${name} logo`}
        width={120}
        height={60}
        className="opacity-70 hover:opacity-100 transition-opacity"
      />
    </div>
  )
}

export default ClientLogo 