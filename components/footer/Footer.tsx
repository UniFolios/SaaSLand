const Footer = () => {
  return (
    <footer>
      {/* Top Row */}
      <div>
        <div>
          <div>
            {/* Logo and Description */}
            <div>
              <img 
                src="https://placehold.co/120x40" 
                alt="Logo" 
              />
              <p>
                Brief description of your company or platform. Add your company's mission or value proposition here.
              </p>
            </div>

            {/* Pages Links */}
            <div>
              <h3>Pages</h3>
              <div>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
                <a href="#">Support</a>
                <a href="#">FAQ</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Row */}
      <div>
        <div>
          <div>
            {/* Contact Info */}
            <div>
              <h3>Address</h3>
              <div>
                <div>
                  {/* <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg> */}
                  <span>(123) 456-7890</span>
                </div>
                <div>
                  {/* <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg> */}
                  <span>info@example.com</span>
                </div>
                <div>
                  {/* <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg> */}
                  <span>123 Street, City, Country</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3>Follow us</h3>
              <div>
                {['facebook', 'twitter', 'dribbble', 'instagram'].map((social) => (
                  <a key={social} href="#">
                    <img 
                      src={`https://placehold.co/20x20`}
                      alt={social}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div>
        <div>
          <div>
            <p>Designed by HSTech, Powered by OAMK</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
