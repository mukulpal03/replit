const COLUMNS = [
  {
    label: 'Product',
    links: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Status'],
  },
  {
    label: 'Resources',
    links: ['Docs', 'Blog', 'Templates', 'Guides', 'Community'],
  },
  {
    label: 'Company',
    links: ['About', 'Careers', 'Press', 'Legal', 'Privacy'],
  },
  {
    label: 'Connect',
    links: ['Twitter / X', 'GitHub', 'Discord', 'LinkedIn', 'Contact'],
  },
]

const GH_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const X_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const DISCORD_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/>
  </svg>
)

export const LandingFooter = () => (
  <footer
    style={{
      background: '#0A0A0B',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}
  >
    {/* Main columns */}
    <div
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '64px 24px 48px',
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr',
        gap: '48px',
      }}
    >
      {/* Brand */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <rect x="2" y="2" width="7" height="7" fill="#5B7FFF" />
            <rect x="11" y="2" width="7" height="7" fill="rgba(91,127,255,0.4)" />
            <rect x="2" y="11" width="7" height="7" fill="rgba(91,127,255,0.4)" />
            <rect x="11" y="11" width="7" height="7" fill="#5B7FFF" />
          </svg>
          <span style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500, fontSize: '15px', color: '#F0EEE8' }}>devix</span>
        </div>
        <p style={{ fontSize: '13px', color: '#3E3D3B', fontFamily: 'Geist, sans-serif', lineHeight: 1.7, maxWidth: '200px', margin: 0 }}>
          A full development environment in your browser. No setup required.
        </p>
      </div>

      {/* Link columns */}
      {COLUMNS.map((col) => (
        <div key={col.label}>
          <div style={{ fontSize: '12px', color: '#F0EEE8', fontFamily: 'Geist, sans-serif', fontWeight: 500, marginBottom: '16px', letterSpacing: '0.02em' }}>
            {col.label}
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {col.links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  style={{
                    fontSize: '13px',
                    color: '#3E3D3B',
                    fontFamily: 'Geist, sans-serif',
                    textDecoration: 'none',
                    transition: 'color 0.15s ease',
                  }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#F0EEE8' }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#3E3D3B' }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Bottom row */}
    <div
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '20px 24px',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span style={{ fontSize: '13px', color: '#3E3D3B', fontFamily: 'Geist, sans-serif' }}>
        © 2026 Devix. All rights reserved.
      </span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {[
          { icon: GH_ICON, href: '#', label: 'GitHub' },
          { icon: X_ICON, href: '#', label: 'X (Twitter)' },
          { icon: DISCORD_ICON, href: '#', label: 'Discord' },
        ].map(({ icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            style={{
              color: '#3E3D3B',
              display: 'flex',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={(e) => { (e.currentTarget).style.color = '#F0EEE8' }}
            onMouseLeave={(e) => { (e.currentTarget).style.color = '#3E3D3B' }}
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  </footer>
)
