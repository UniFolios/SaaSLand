import Link from 'next/link'

/**
 * Navbar Component
 * This component renders a navigation bar with links and a call-to-action button.
 */
const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
          <div>
            {/* Logo */}
            <Link href="/">SaaSLand</Link>
          </div>
          <div>
            {/* Navigation Links */}
            <div>
              <div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/features">Features</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
            {/* Call-to-Action Button */}
            <Link href="/early-access">Get early access</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
