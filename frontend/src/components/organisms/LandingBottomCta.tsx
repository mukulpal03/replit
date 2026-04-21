export const LandingBottomCta = () => (
  <section
    style={{
      position: 'relative',
      padding: '120px 24px',
      textAlign: 'center',
      overflow: 'hidden',
    }}
  >
    {/* Radial glow */}
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(91,127,255,0.2) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />

    <div style={{ position: 'relative', zIndex: 1, maxWidth: '640px', margin: '0 auto' }}>
      <h2
        style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontStyle: 'italic',
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 400,
          color: '#F0EEE8',
          margin: '0 0 16px',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
        }}
      >
        Start building today.
      </h2>
      <p
        style={{
          fontSize: '16px',
          color: '#6E6D6A',
          fontFamily: 'Geist, sans-serif',
          margin: '0 0 36px',
          lineHeight: 1.6,
        }}
      >
        No credit card. No setup. Just open a project and code.
      </p>
      <button
        id="bottom-cta-button"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          height: '48px',
          padding: '0 28px',
          background: '#5B7FFF',
          color: '#fff',
          fontSize: '15px',
          fontFamily: 'Geist, sans-serif',
          fontWeight: 500,
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 0 32px rgba(91,127,255,0.4)',
          transition: 'opacity 0.15s ease, box-shadow 0.15s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '0.88'
          e.currentTarget.style.boxShadow = '0 0 48px rgba(91,127,255,0.5)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '1'
          e.currentTarget.style.boxShadow = '0 0 32px rgba(91,127,255,0.4)'
        }}
      >
        Start for free
      </button>
    </div>
  </section>
)
