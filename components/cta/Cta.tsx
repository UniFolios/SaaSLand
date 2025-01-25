import React from 'react'
import { BaseComponentProps } from '../types'

interface CtaProps extends BaseComponentProps {}

/**
 * Cta Component
 * This component displays a call-to-action section encouraging users to join a waiting list.
 */
const Cta: React.FC<CtaProps> = () => {
  return (
    <section
      style={{
        backgroundColor: '#1A1A2E', // Dark purple background
        color: '#FFFFFF', // White text
        padding: '80px 20px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        {/* Call-to-Action Heading */}
        <h2
          style={{
            fontSize: '36px',
            fontWeight: '700',
            lineHeight: '1.2',
            marginBottom: '20px',
          }}
        >
          Are you excited
          <br />
          to try?
        </h2>

        {/* Subheading */}
        <h3
          style={{
            fontSize: '24px',
            fontWeight: '500',
            marginBottom: '20px',
          }}
        >
          Join the waiting list
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '16px',
            lineHeight: '1.5',
            marginBottom: '30px',
          }}
        >
          Passage its ten hearted removal. Preference any astonished unreserved Mrs.
          Prosperous understood an uncommonly do.
        </p>

        {/* Call-to-Action Button */}
        <button
          style={{
            backgroundColor: '#F5F5F5',
            color: '#1A1A2E',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '5px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = '#e0e0e0')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = '#F5F5F5')
          }
        >
          Get early access
        </button>
      </div>
    </section>
  )
}

export default Cta