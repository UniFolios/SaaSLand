import React from 'react'
import { BaseComponentProps } from '../types'

interface CtaProps extends BaseComponentProps {}

/**
 * Cta Component
 * This component displays a call-to-action section encouraging users to join a waiting list.
 */
const Cta: React.FC<CtaProps> = () => {
  return (
    <section>
      <div>
        <div>
          {/* Call-to-Action Heading */}
          <h2>
            Are you excited
            <br />
            to try?
          </h2>

          {/* Subheading */}
          <h3>Join the waiting list</h3>

          {/* Description */}
          <p>
            Passage its ten hearted removal. Preference any astonished unreserved Mrs. 
            Prosperous understood an uncommonly do.
          </p>

          {/* Call-to-Action Button */}
          <button>
            Get early access
          </button>
        </div>
      </div>
    </section>
  )
}

export default Cta
