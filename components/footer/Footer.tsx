const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#F9F9F9', padding: '4rem 2rem' }}>
      <div
        style={{
          maxWidth: '1200px', // Fixed container width
          margin: '0 auto',
        }}
      >
        {/* Top Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {/* Logo and Description */}
          <div style={{ maxWidth: '300px', marginBottom: '1rem' }}>
            <img src="https://placehold.co/120x40" alt="Logo" />
            <p
              style={{
                marginTop: '1rem',
                color: '#666',
                fontSize: '0.95rem',
                lineHeight: '1.6',
              }}
            >
              Brief description of your company or platform. Add your company's
              mission or value proposition here.
            </p>
          </div>

          {/* Pages Links */}
          <div>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: '#333' }}>
              Pages
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, auto)',
                gap: '1rem',
                fontSize: '0.95rem',
                color: '#666',
              }}
            >
              {['Home', 'About', 'Features', 'Pricing', 'Blog', 'Contact', 'Support', 'FAQ'].map(
                (page) => (
                  <a
                    key={page}
                    href="#"
                    style={{ textDecoration: 'none', color: '#666' }}
                  >
                    {page}
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* Middle Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            padding: '2rem',
            backgroundColor: '#F5F5F5',
            borderRadius: '8px',
            marginBottom: '3rem',
          }}
        >
          {/* Address */}
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div
              style={{
                fontSize: '0.95rem',
                color: '#666',
                lineHeight: '1.6',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <span>📞 (123) 456-7890</span>
              <span>📧 info@example.com</span>
              <span>📍 123 Street, City, Country</span>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3
              style={{
                fontSize: '1rem',
                marginBottom: '1rem',
                color: '#333',
              }}
            >
              Follow us
            </h3>
            <div
              style={{
                display: 'flex',
                gap: '1rem',
              }}
            >
              {['facebook', 'twitter', 'dribbble', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  style={{
                    textDecoration: 'none',
                    display: 'inline-block',
                    backgroundColor: '#EAEAEA',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={`https://placehold.co/20x20`}
                    alt={social}
                    style={{ display: 'block' }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div
          style={{
            textAlign: 'center',
            paddingTop: '1rem',
            borderTop: '1px solid #EAEAEA',
            fontSize: '0.85rem',
            color: '#666',
          }}
        >
          <p>Designed by HSTech, Powered by OAMK</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;