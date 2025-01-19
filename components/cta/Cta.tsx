import React from 'react'
import { BaseComponentProps } from '../types'

interface CtaProps extends BaseComponentProps {}

const Cta: React.FC<CtaProps> = () => {
  return (
    <section className="py-32 bg-[#140a3e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Are you excited<br />to try?
          </h2>
          <h3 className="text-2xl mb-6">Join the waiting list</h3>
          <p className="text-gray-300 text-lg mb-10">
            Passage its ten hearted removal. Preference any astonished unreserved Mrs. Prosperous understood an uncommonly do.
          </p>
          <button className="bg-white text-[#140a3e] px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-colors">
            Get early access
          </button>
        </div>
      </div>
    </section>
  )
}

export default Cta 