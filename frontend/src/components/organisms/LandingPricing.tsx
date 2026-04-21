const TIERS = [
  {
    name: "Free",
    price: "$0",
    description: "For solo developers getting started.",
    cta: "Get started",
    ctaStyle: "outline" as const,
    features: [
      "3 active projects",
      "512MB RAM per project",
      "Community support",
      "Public projects only",
    ],
  },
  {
    name: "Pro",
    price: "$12",
    description: "For serious developers who ship.",
    cta: "Start for free",
    ctaStyle: "accent" as const,
    badge: "Most popular",
    highlighted: true,
    features: [
      "Unlimited projects",
      "4GB RAM per project",
      "Priority support",
      "Private projects",
      "Custom domains",
      "AI code assist",
    ],
  },
  {
    name: "Team",
    price: "$48",
    description: "For teams building together.",
    cta: "Contact us",
    ctaStyle: "outline" as const,
    features: [
      "Everything in Pro",
      "Collaborative editing",
      "SSO / SAML",
      "Audit logs",
      "Dedicated support",
      "SLA guarantee",
    ],
  },
];

export const LandingPricing = () => (
  <section
    id="pricing"
    style={{
      background: "#0D0D10",
      padding: "96px 24px",
    }}
  >
    <div style={{ maxWidth: "960px", margin: "0 auto" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <div
          style={{
            fontSize: "12px",
            color: "#5B7FFF",
            fontFamily: "Geist, sans-serif",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Pricing
        </div>
        <h2
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(28px, 3.5vw, 44px)",
            fontWeight: 400,
            color: "#F0EEE8",
            margin: "0 0 12px",
            letterSpacing: "-0.01em",
          }}
        >
          Simple pricing, no surprises.
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#6E6D6A",
            fontFamily: "Geist, sans-serif",
          }}
        >
          Start free. Scale when you need to.
        </p>
      </div>

      {/* Tier Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "12px",
          alignItems: "start",
        }}
      >
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            style={{
              position: "relative",
              background: tier.highlighted ? undefined : "#111114",
              backgroundImage: tier.highlighted
                ? "linear-gradient(180deg, rgba(91,127,255,0.06) 0%, transparent 60%)"
                : undefined,
              backgroundColor: tier.highlighted ? "#111114" : undefined,
              border: tier.highlighted
                ? "1px solid rgba(91,127,255,0.4)"
                : "1px solid rgba(255,255,255,0.06)",
              borderRadius: "6px",
              padding: "28px 24px",
            }}
          >
            {/* Badge */}
            {tier.badge && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: "#5B7FFF",
                  color: "#fff",
                  fontSize: "11px",
                  fontFamily: "Geist, sans-serif",
                  fontWeight: 500,
                  padding: "3px 10px",
                  borderRadius: "100px",
                  whiteSpace: "nowrap",
                }}
              >
                {tier.badge}
              </div>
            )}

            {/* Tier name */}
            <div
              style={{
                fontSize: "13px",
                color: "#6E6D6A",
                fontFamily: "Geist, sans-serif",
                marginBottom: "12px",
              }}
            >
              {tier.name}
            </div>

            {/* Price */}
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "4px",
                marginBottom: "6px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "40px",
                  color: "#F0EEE8",
                  lineHeight: 1,
                }}
              >
                {tier.price}
              </span>
              <span
                style={{
                  fontSize: "14px",
                  color: "#6E6D6A",
                  fontFamily: "Geist, sans-serif",
                }}
              >
                /mo
              </span>
            </div>
            <p
              style={{
                fontSize: "13px",
                color: "#6E6D6A",
                fontFamily: "Geist, sans-serif",
                margin: "0 0 24px",
                lineHeight: 1.5,
              }}
            >
              {tier.description}
            </p>

            {/* CTA */}
            <button
              style={{
                width: "100%",
                height: "36px",
                borderRadius: "4px",
                fontSize: "14px",
                fontFamily: "Geist, sans-serif",
                fontWeight: 500,
                cursor: "pointer",
                transition: "opacity 0.15s ease",
                background:
                  tier.ctaStyle === "accent" ? "#5B7FFF" : "transparent",
                color: tier.ctaStyle === "accent" ? "#fff" : "#F0EEE8",
                border:
                  tier.ctaStyle === "accent"
                    ? "none"
                    : "1px solid rgba(255,255,255,0.15)",
                boxShadow:
                  tier.ctaStyle === "accent"
                    ? "0 0 16px rgba(91,127,255,0.25)"
                    : "none",
                marginBottom: "24px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.85";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              {tier.cta}
            </button>

            {/* Separator */}
            <div
              style={{
                height: "1px",
                background: "rgba(255,255,255,0.06)",
                marginBottom: "20px",
              }}
            />

            {/* Features */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {tier.features.map((f) => (
                <li
                  key={f}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "14px",
                    color: "#F0EEE8",
                    fontFamily: "Geist, sans-serif",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2.5 7L5.5 10L11.5 4"
                      stroke="#2DD98F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);
