import Link from 'next/link'

/**
 * Navbar Component
 * Enhanced for industry-standard spacings and visual appeal.
 */
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          SaaSLand
        </Link>

        {/* Navigation Links + Button */}
        <div className="flex items-center space-x-8">
          {/* Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition">
              About
            </Link>
            <Link href="/features" className="text-gray-600 hover:text-gray-900 transition">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition">
              Contact
            </Link>
          </div>

          {/* Call-to-Action Button */}
          <Link
            href="/early-access"
            className="bg-blue-600 text-white font-medium py-2 px-5 rounded-md hover:bg-blue-700 transition"
          >
            Get early access
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar