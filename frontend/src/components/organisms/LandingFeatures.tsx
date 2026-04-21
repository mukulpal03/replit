const FEATURES = [
  {
    id: 'instant_environments',
    label: 'Instant Environments',
    copy: 'Zero setup. Pick a template and get a fully configured runtime in under 3 seconds.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L12.5 8.5H19L13.5 12.5L15.5 19L10 15L4.5 19L6.5 12.5L1 8.5H7.5L10 2Z" fill="#5B7FFF" opacity="0.8" />
      </svg>
    ),
    visual: (
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', lineHeight: 1.6 }}>
        <div style={{ color: '#3EFF9E' }}>✓ Installing dependencies...</div>
        <div style={{ color: '#2DD98F' }}>✓ Configuring runtime...</div>
        <div style={{ color: '#5B7FFF' }}>✓ Environment ready <span style={{ color: '#6E6D6A' }}>in 2.4s</span></div>
        <div style={{ marginTop: '8px', color: '#F0EEE8' }}>
          <span style={{ color: '#5B7FFF' }}>~/app</span>
          <span style={{ color: '#6E6D6A' }}> $ </span>
          <span>pnpm dev</span>
        </div>
      </div>
    ),
    size: 'large', // 2/3
  },
  {
    id: 'integrated_terminal',
    label: 'Integrated Terminal',
    copy: 'Full-featured bash/zsh terminal, right where you code.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="#5B7FFF" strokeWidth="1.5" />
        <path d="M6 8L9 11L6 14" stroke="#3EFF9E" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 14H14" stroke="#6E6D6A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    visual: null,
    size: 'narrow', // 1/3
  },
  {
    id: 'collaborative_editing',
    label: 'Collaborative Editing',
    copy: 'Pair program in real time. Multiple cursors, shared terminals, live presence.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="7" cy="8" r="3" stroke="#5B7FFF" strokeWidth="1.5" />
        <circle cx="13" cy="8" r="3" stroke="#A78BFA" strokeWidth="1.5" />
        <path d="M2 16c0-2.2 2.23-4 5-4" stroke="#5B7FFF" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 16c0-2.2-2.23-4-5-4" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    visual: null,
    size: 'equal',
  },
  {
    id: 'ai_code_assist',
    label: 'AI Code Assist',
    copy: 'Inline completions that understand your codebase.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" stroke="#5B7FFF" strokeWidth="1.5" />
        <path d="M7 10l2 2 4-4" stroke="#2DD98F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    visual: null,
    size: 'equal',
  },
  {
    id: 'file_system',
    label: 'File System',
    copy: 'VS Code-style folder tree. Full git support.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 6a2 2 0 012-2h3l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" stroke="#FFB547" strokeWidth="1.5" />
      </svg>
    ),
    visual: null,
    size: 'equal',
  },
  {
    id: 'one_click_deploy',
    label: 'Deploy in One Click',
    copy: 'GitHub → Railway/Vercel/Render. Live in seconds.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3v10M6 9l4 4 4-4" stroke="#5B7FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 15h12" stroke="#2DD98F" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    visual: (
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', lineHeight: 1.7 }}>
        <div style={{ color: '#6E6D6A' }}>Deploying to Railway...</div>
        <div style={{ color: '#2DD98F' }}>✓ Build complete <span style={{ color: '#3E3D3B' }}>12.3s</span></div>
        <div style={{ color: '#2DD98F' }}>✓ Health check passed</div>
        <div style={{ color: '#5B7FFF', marginTop: '4px' }}>🚀 Live: <span style={{ color: '#F0EEE8' }}>app.railway.app</span></div>
      </div>
    ),
    size: 'large', // 2/3
  },
]

const cardBase: React.CSSProperties = {
  background: '#111114',
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: '6px',
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  transition: 'border-color 0.2s ease, transform 0.2s ease',
  cursor: 'default',
}

function FeatureCard({ feature }: { feature: typeof FEATURES[0] }) {
  return (
    <div
      style={cardBase}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.borderColor = 'rgba(255,255,255,0.12)'
        el.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.borderColor = 'rgba(255,255,255,0.06)'
        el.style.transform = 'translateY(0)'
      }}
    >
      <div
        style={{
          width: '36px',
          height: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(91,127,255,0.07)',
          border: '1px solid rgba(91,127,255,0.15)',
          borderRadius: '6px',
        }}
      >
        {feature.icon}
      </div>
      <div>
        <div style={{ fontSize: '15px', fontWeight: 500, color: '#F0EEE8', fontFamily: 'Geist, sans-serif', marginBottom: '6px' }}>
          {feature.label}
        </div>
        <div style={{ fontSize: '14px', color: '#6E6D6A', fontFamily: 'Geist, sans-serif', lineHeight: 1.6 }}>
          {feature.copy}
        </div>
      </div>
      {feature.visual && (
        <div
          style={{
            marginTop: '8px',
            padding: '16px',
            background: '#080809',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '4px',
          }}
        >
          {feature.visual}
        </div>
      )}
    </div>
  )
}

export const LandingFeatures = () => {
  const [row1Large, row1Narrow, ...rest] = FEATURES
  const [r2a, r2b, r2c] = rest
  const [row3Narrow, row3Large] = [FEATURES[4], FEATURES[5]]

  return (
    <section
      id="features"
      style={{
        padding: '96px 24px',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      {/* Section label */}
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div style={{ fontSize: '12px', color: '#5B7FFF', fontFamily: 'Geist, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Everything you need
        </div>
        <h2
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontStyle: 'italic',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 400,
            color: '#F0EEE8',
            margin: '0 0 12px',
            letterSpacing: '-0.01em',
          }}
        >
          A seamless workflow.
        </h2>
        <p style={{ fontSize: '16px', color: '#6E6D6A', fontFamily: 'Geist, sans-serif', maxWidth: '480px', margin: '0 auto', lineHeight: 1.6 }}>
          Devix combines the power of a local IDE with the accessibility of the web.
        </p>
      </div>

      {/* Row 1 — 2/3 + 1/3 */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px', marginBottom: '12px' }}>
        <FeatureCard feature={FEATURES[0]} />
        <FeatureCard feature={FEATURES[1]} />
      </div>

      {/* Row 2 — 3 equal */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '12px' }}>
        <FeatureCard feature={FEATURES[2]} />
        <FeatureCard feature={FEATURES[3]} />
        <FeatureCard feature={FEATURES[4]} />
      </div>

      {/* Row 3 — 1/3 + 2/3 mirrored */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '12px' }}>
        <div
          style={{
            ...cardBase,
            background: 'rgba(91,127,255,0.04)',
            border: '1px solid rgba(91,127,255,0.12)',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(91,127,255,0.25)'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(91,127,255,0.12)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          <div style={{ fontSize: '32px', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#5B7FFF', marginBottom: '8px' }}>∞</div>
          <div style={{ fontSize: '15px', fontWeight: 500, color: '#F0EEE8', fontFamily: 'Geist, sans-serif' }}>Unlimited Projects</div>
          <div style={{ fontSize: '13px', color: '#6E6D6A', fontFamily: 'Geist, sans-serif', marginTop: '6px' }}>Free tier. No credit card.</div>
        </div>
        <FeatureCard feature={FEATURES[5]} />
      </div>
    </section>
  )
}
