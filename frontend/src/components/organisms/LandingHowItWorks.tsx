const STEPS = [
  {
    number: '01',
    label: 'Create a project',
    copy: 'Pick a template or import from GitHub. Ready in under 3 seconds.',
  },
  {
    number: '02',
    label: 'Write and run code',
    copy: 'Full IDE in browser. Terminal, files, AI assist — everything you need.',
  },
  {
    number: '03',
    label: 'Ship it',
    copy: 'One-click deploy or export to any platform. Live in seconds.',
  },
]

export const LandingHowItWorks = () => (
  <section
    style={{
      background: '#0A0A0B',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      padding: '96px 24px',
    }}
  >
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '72px' }}>
        <div style={{ fontSize: '12px', color: '#5B7FFF', fontFamily: 'Geist, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
          How it works
        </div>
        <h2
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontStyle: 'italic',
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            fontWeight: 400,
            color: '#F0EEE8',
            margin: 0,
            letterSpacing: '-0.01em',
          }}
        >
          From zero to shipped in minutes.
        </h2>
      </div>

      {/* Steps */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr auto 1fr',
          alignItems: 'start',
          gap: '0',
        }}
      >
        {STEPS.map((step, i) => (
          <>
            <div key={step.number} style={{ position: 'relative', textAlign: 'center', padding: '0 24px' }}>
              {/* Big background number */}
              <div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '64px',
                  fontWeight: 500,
                  color: '#F0EEE8',
                  opacity: 0.06,
                  lineHeight: 1,
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}
              >
                {step.number}
              </div>

              {/* Step number pill */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(91,127,255,0.1)',
                  border: '1px solid rgba(91,127,255,0.3)',
                  fontSize: '12px',
                  fontFamily: 'Geist, sans-serif',
                  color: '#5B7FFF',
                  marginBottom: '20px',
                }}
              >
                {i + 1}
              </div>

              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#F0EEE8',
                  fontFamily: 'Geist, sans-serif',
                  margin: '0 0 8px',
                }}
              >
                {step.label}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: '#6E6D6A',
                  fontFamily: 'Geist, sans-serif',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {step.copy}
              </p>
            </div>

            {/* Connector — not after the last step */}
            {i < STEPS.length - 1 && (
              <div
                key={`connector-${i}`}
                style={{
                  alignSelf: 'start',
                  marginTop: '16px',
                  width: '80px',
                  height: '1px',
                  borderTop: '1px dashed rgba(255,255,255,0.1)',
                }}
              />
            )}
          </>
        ))}
      </div>
    </div>
  </section>
)
