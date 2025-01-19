import React from 'react'
import { BaseComponentProps } from '../types'

interface ContactProps extends BaseComponentProps {}

/**
 * Contact Component
 * This component displays a contact section with a header, contact information,
 * social links, and a contact form.
 */
const Contact: React.FC<ContactProps> = () => {
  return (
    <section>
      <div>
        {/* Header Section */}
        <div>
          <h2>Let's Chat</h2>
          <p>Have questions? We're ready to help!</p>
        </div>

        {/* Content Area */}
        <div>
          {/* Left Column - Contact Info */}
          <div>
            {/* Contact Info - Call Us */}
            <div>
              <div>
                <p>Call Us:</p>
                <p>+01 598 269 4756</p>
              </div>
              <img src="https://placehold.co/48x48" alt="Phone" />
            </div>

            {/* Contact Info - Email Us */}
            <div>
              <div>
                <p>Email Us:</p>
                <p>info@example.com</p>
              </div>
              <img src="https://placehold.co/48x48" alt="Email" />
            </div>

            {/* Contact Info - Visit Us */}
            <div>
              <div>
                <p>Visit Us:</p>
                <p>123 Business Street, NY</p>
              </div>
              <img src="https://placehold.co/48x48" alt="Location" />
            </div>

            {/* Social Links */}
            <div>
              <h3>Follow us</h3>
              <div>
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a key={social} href="#">
                    <img src={`https://placehold.co/20x20`} alt={social} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form>
              {/* Name Field */}
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your email" />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={4} placeholder="Your message"></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit">Send Your Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
