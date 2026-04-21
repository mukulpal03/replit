import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Docs', href: '#docs' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Changelog', href: '#changelog' },
]

export const LandingNavbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      style={{
        height: '56px',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        background: 'rgba(10,10,11,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.1)'
          : '1px solid rgba(255,255,255,0.05)',
        transition: 'border-color 0.2s ease',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Left — Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
          }}
        >
          {/* Geometric glyph */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="7" height="7" fill="#5B7FFF" />
            <rect x="11" y="2" width="7" height="7" fill="rgba(91,127,255,0.4)" />
            <rect x="2" y="11" width="7" height="7" fill="rgba(91,127,255,0.4)" />
            <rect x="11" y="11" width="7" height="7" fill="#5B7FFF" />
          </svg>
          <span
            style={{
              fontFamily: 'Geist, system-ui, sans-serif',
              fontWeight: 500,
              fontSize: '15px',
              color: '#F0EEE8',
              letterSpacing: '-0.01em',
            }}
          >
            devix
          </span>
        </Link>

        {/* Center — Nav links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: 'Geist, system-ui, sans-serif',
                fontSize: '14px',
                color: '#6E6D6A',
                textDecoration: 'none',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#F0EEE8' }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#6E6D6A' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right — Sign in + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a
            href="#signin"
            style={{
              fontFamily: 'Geist, system-ui, sans-serif',
              fontSize: '14px',
              color: '#6E6D6A',
              textDecoration: 'none',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#F0EEE8' }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#6E6D6A' }}
          >
            Sign in
          </a>
          <a
            href="#start"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              height: '32px',
              padding: '0 12px',
              background: '#5B7FFF',
              color: '#ffffff',
              fontSize: '14px',
              fontFamily: 'Geist, system-ui, sans-serif',
              fontWeight: 500,
              borderRadius: '4px',
              textDecoration: 'none',
              boxShadow: '0 0 16px rgba(91,127,255,0.3)',
              transition: 'opacity 0.15s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = '0.88' }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = '1' }}
          >
            Start building
          </a>
        </div>
      </div>
    </header>
  )
}
