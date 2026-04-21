const TESTIMONIALS = [
  {
    quote: "Devix cut our onboarding time from days to minutes. New devs have a working environment before the standup ends.",
    name: "Sarah Chen",
    role: "Engineering Lead @ Anthropic",
    initials: "SC",
    color: "#5B7FFF",
  },
  {
    quote: "The terminal is actually usable. Not a toy. Real bash, real output. I run my full build pipeline from it.",
    name: "Tom Keller",
    role: "Senior SWE @ Stripe",
    initials: "TK",
    color: "#A78BFA",
  },
  {
    quote: "I was skeptical about browser IDEs. Then I used Devix. Monaco + xterm in one place — it just works.",
    name: "Priya Nair",
    role: "Indie Hacker",
    initials: "PN",
    color: "#2DD98F",
  },
  {
    quote: "Our team uses Devix for interview rounds. Candidates get a real environment, we get signal. Game changer.",
    name: "Alex Rivera",
    role: "CTO @ Vercel",
    initials: "AR",
    color: "#FFB547",
  },
  {
    quote: "Collaborative editing with live presence is exactly what pair programming should feel like.",
    name: "James Wu",
    role: "Staff Eng @ Linear",
    initials: "JW",
    color: "#5B7FFF",
  },
  {
    quote: "Deploy from the terminal straight to Railway. The workflow is so clean it feels like cheating.",
    name: "Maya Osei",
    role: "Full-Stack @ Supabase",
    initials: "MO",
    color: "#A78BFA",
  },
]

function TestimonialCard({ t }: { t: typeof TESTIMONIALS[0] }) {
  return (
    <div
      style={{
        background: '#111114',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '6px',
        padding: '20px',
        breakInside: 'avoid',
        marginBottom: '12px',
      }}
    >
      <p
        style={{
          fontSize: '15px',
          color: '#F0EEE8',
          fontFamily: 'Geist, sans-serif',
          lineHeight: 1.7,
          margin: '0 0 16px',
        }}
      >
        <span style={{ color: '#5B7FFF', fontSize: '20px', lineHeight: 0 }}>"</span>
        {t.quote}
        <span style={{ color: '#5B7FFF', fontSize: '20px', lineHeight: 0 }}>"</span>
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: t.color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            fontWeight: 500,
            color: '#fff',
            fontFamily: 'Geist, sans-serif',
            flexShrink: 0,
          }}
        >
          {t.initials}
        </div>
        <div>
          <div style={{ fontSize: '13px', color: '#F0EEE8', fontFamily: 'Geist, sans-serif', fontWeight: 500 }}>{t.name}</div>
          <div style={{ fontSize: '12px', color: '#6E6D6A', fontFamily: 'Geist, sans-serif' }}>{t.role}</div>
        </div>
      </div>
    </div>
  )
}

export const LandingTestimonials = () => {
  const col1 = TESTIMONIALS.filter((_, i) => i % 3 === 0)
  const col2 = TESTIMONIALS.filter((_, i) => i % 3 === 1)
  const col3 = TESTIMONIALS.filter((_, i) => i % 3 === 2)

  return (
    <section style={{ padding: '96px 24px', maxWidth: '1100px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div style={{ fontSize: '12px', color: '#5B7FFF', fontFamily: 'Geist, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Loved by builders
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
          What engineers say.
        </h2>
      </div>

      {/* Masonry 3-col */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', alignItems: 'start' }}>
        <div>{col1.map((t) => <TestimonialCard key={t.name} t={t} />)}</div>
        <div style={{ marginTop: '24px' }}>{col2.map((t) => <TestimonialCard key={t.name} t={t} />)}</div>
        <div>{col3.map((t) => <TestimonialCard key={t.name} t={t} />)}</div>
      </div>
    </section>
  )
}
