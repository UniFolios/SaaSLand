'use client'
import React from 'react'
import { BaseComponentProps } from '../types'

interface ContactProps extends BaseComponentProps {}

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - 80;
    const duration = 1000;
    const startPosition = window.scrollY;
    const distance = offsetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const easeInOutCubic = (t: number) => {
        return t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      window.scrollTo({
        top: startPosition + (distance * easeInOutCubic(progress)),
        behavior: 'auto'
      });

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }
};

const Contact: React.FC<ContactProps> = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Chat</h2>
          <p className="text-gray-600 text-lg">Have questions? We're ready to help!</p>
        </div>

        {/* Content Area */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="bg-white p-6 rounded-lg flex justify-between items-start">
              <div>
                <p className="text-gray-600 text-sm mb-1">Call Us:</p>
                <p className="text-xl font-bold">+01 598 269 4756</p>
              </div>
              <img src="https://placehold.co/48x48" alt="Phone" className="w-12 h-12" />
            </div>

            <div className="bg-white p-6 rounded-lg flex justify-between items-start">
              <div>
                <p className="text-gray-600 text-sm mb-1">Email Us:</p>
                <p className="text-xl font-bold">info@example.com</p>
              </div>
              <img src="https://placehold.co/48x48" alt="Email" className="w-12 h-12" />
            </div>

            <div className="bg-white p-6 rounded-lg flex justify-between items-start">
              <div>
                <p className="text-gray-600 text-sm mb-1">Visit Us:</p>
                <p className="text-xl font-bold">123 Business Street, NY</p>
              </div>
              <img src="https://placehold.co/48x48" alt="Location" className="w-12 h-12" />
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Follow us</h3>
              <div className="flex gap-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <button 
                    key={social}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                    onClick={() => smoothScrollTo('banner')}
                  >
                    <img 
                      src={`https://placehold.co/20x20`}
                      alt={social}  
                      className="w-5 h-5"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#140a3e] text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Send Your Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
