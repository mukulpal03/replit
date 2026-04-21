import { useNavigate } from "react-router-dom";
import { useCreateProject } from "../../hooks/useCreateProject";
import { Spinner } from "../ui/spinner";

const AVATARS = ["JD", "MK", "AR", "TP", "SL"];
const AVATAR_COLORS = ["#5B7FFF", "#A78BFA", "#2DD98F", "#FFB547", "#FF5757"];

export const LandingHero = () => {
  const { createProject, isCreatingProject, projectError } = useCreateProject();
  const navigate = useNavigate();

  const handleCreate = async () => {
    try {
      const res = await createProject();
      navigate(`/project/${res.id}`);
    } catch {}
  };

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "80px 24px 64px",
      }}
    >
      {/* Dot grid background */}
      <div
        className="dot-grid"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Accent glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(91,127,255,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "860px",
          width: "100%",
        }}
      >
        {/* Badge */}
        <div
          className="animate-fade-up"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "4px 12px",
            background: "#18181C",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "100px",
            fontSize: "12px",
            color: "#6E6D6A",
            marginBottom: "28px",
            fontFamily: "Geist, system-ui, sans-serif",
          }}
        >
          <span
            className="animate-pulse-dot"
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#5B7FFF",
              flexShrink: 0,
            }}
          />
          Now in public beta
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up-d1"
          style={{
            fontFamily: "'Instrument Serif', 'Fraunces', Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(52px, 8vw, 88px)",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#F0EEE8",
            margin: "0 0 20px",
          }}
        >
          Code.{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #5B7FFF, #A78BFA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Run.
          </span>{" "}
          Ship.
        </h1>

        {/* Subheadline */}
        <p
          className="animate-fade-up-d2"
          style={{
            fontFamily: "Geist, system-ui, sans-serif",
            fontSize: "20px",
            lineHeight: 1.7,
            color: "#6E6D6A",
            maxWidth: "520px",
            margin: "0 0 36px",
          }}
        >
          A full development environment in your browser. No setup. No config.
          Just code.
        </p>

        {/* CTA Row */}
        <div
          className="animate-fade-up-d2"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <button
            id="hero-start-button"
            onClick={() => void handleCreate()}
            disabled={isCreatingProject}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              height: "40px",
              padding: "0 20px",
              background: "#5B7FFF",
              color: "#ffffff",
              fontSize: "14px",
              fontFamily: "Geist, system-ui, sans-serif",
              fontWeight: 500,
              borderRadius: "4px",
              border: "none",
              cursor: isCreatingProject ? "not-allowed" : "pointer",
              boxShadow: "0 0 20px rgba(91,127,255,0.35)",
              opacity: isCreatingProject ? 0.7 : 1,
              transition: "opacity 0.15s ease",
            }}
            onMouseEnter={(e) => {
              if (!isCreatingProject) e.currentTarget.style.opacity = "0.88";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = isCreatingProject ? "0.7" : "1";
            }}
          >
            {isCreatingProject ? (
              <>
                <Spinner />
                Allocating...
              </>
            ) : (
              "Start for free"
            )}
          </button>

          <button
            id="hero-demo-button"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              height: "40px",
              padding: "0 20px",
              background: "transparent",
              color: "#F0EEE8",
              fontSize: "14px",
              fontFamily: "Geist, system-ui, sans-serif",
              fontWeight: 500,
              borderRadius: "4px",
              border: "1px solid rgba(255,255,255,0.12)",
              cursor: "pointer",
              transition: "border-color 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#5B7FFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
            }}
          >
            {/* Play icon */}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 1.5L9.5 6L2.5 10.5V1.5Z" fill="#F0EEE8" />
            </svg>
            View demo
          </button>
        </div>

        {/* Social proof */}
        <div
          className="animate-fade-up-d3"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <div style={{ display: "flex" }}>
            {AVATARS.map((initials, i) => (
              <div
                key={initials}
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: AVATAR_COLORS[i],
                  border: "2px solid #0A0A0B",
                  marginLeft: i === 0 ? 0 : "-8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "9px",
                  fontWeight: 500,
                  color: "#fff",
                  fontFamily: "Geist, system-ui, sans-serif",
                }}
              >
                {initials}
              </div>
            ))}
          </div>
          <span
            style={{
              fontSize: "13px",
              color: "#3E3D3B",
              fontFamily: "Geist, system-ui, sans-serif",
            }}
          >
            Trusted by 12,000+ developers
          </span>
        </div>

        {/* Error */}
        {projectError && (
          <div
            style={{
              marginTop: "16px",
              padding: "12px 16px",
              background: "rgba(255,87,87,0.1)",
              border: "1px solid rgba(255,87,87,0.3)",
              borderRadius: "6px",
              fontSize: "13px",
              color: "#FF5757",
              fontFamily: "Geist, system-ui, sans-serif",
            }}
          >
            {projectError}
          </div>
        )}
      </div>

      {/* Hero Visual — Product UI Mock */}
      <div
        className="animate-fade-up-d3"
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "1000px",
          margin: "64px auto 0",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "8px",
            background: "#0E0E11",
            boxShadow:
              "0 0 80px rgba(91,127,255,0.12), 0 0 0 1px rgba(255,255,255,0.06)",
            overflow: "hidden",
          }}
        >
          {/* Window chrome */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "10px 16px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              background: "#0A0A0B",
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#FF5757",
                display: "block",
              }}
            />
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#FFB547",
                display: "block",
              }}
            />
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#2DD98F",
                display: "block",
              }}
            />
            <span
              style={{
                flex: 1,
                textAlign: "center",
                fontSize: "12px",
                color: "#3E3D3B",
                fontFamily: "Geist, sans-serif",
              }}
            >
              devix — workspace / App.tsx
            </span>
          </div>

          {/* IDE Layout */}
          <div style={{ display: "flex", height: "420px" }}>
            {/* Sidebar */}
            <div
              style={{
                width: "180px",
                background: "#0E0E11",
                borderRight: "1px solid rgba(255,255,255,0.06)",
                padding: "8px 0",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  padding: "6px 12px",
                  fontSize: "11px",
                  color: "#3E3D3B",
                  fontFamily: "Geist, sans-serif",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Explorer
              </div>
              {[
                { name: "src", type: "folder", depth: 0 },
                {
                  name: "App.tsx",
                  type: "file",
                  depth: 1,
                  color: "#4FC1FF",
                  active: true,
                },
                { name: "index.css", type: "file", depth: 1, color: "#E879F9" },
                { name: "main.tsx", type: "file", depth: 1, color: "#4FC1FF" },
                { name: "components", type: "folder", depth: 1 },
                {
                  name: "package.json",
                  type: "file",
                  depth: 0,
                  color: "#FFB547",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "3px 12px",
                    paddingLeft: `${12 + item.depth * 12}px`,
                    fontSize: "13px",
                    fontFamily: "Geist, sans-serif",
                    color: item.active ? "#F0EEE8" : "#6E6D6A",
                    background: item.active
                      ? "rgba(91,127,255,0.1)"
                      : "transparent",
                    borderLeft: item.active
                      ? "2px solid #5B7FFF"
                      : "2px solid transparent",
                  }}
                >
                  {item.type === "folder" ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M1 3.5A1 1 0 012 2.5h3l1 1h4a1 1 0 011 1V9.5a1 1 0 01-1 1H2a1 1 0 01-1-1V3.5z"
                        fill="rgba(91,127,255,0.5)"
                      />
                    </svg>
                  ) : (
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                      <rect
                        x="0"
                        y="0"
                        width="7"
                        height="9"
                        rx="1"
                        fill={item.color || "#6E6D6A"}
                        opacity="0.8"
                      />
                    </svg>
                  )}
                  {item.name}
                </div>
              ))}
            </div>

            {/* Editor */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              {/* Tabs */}
              <div
                style={{
                  display: "flex",
                  background: "#0A0A0B",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  height: "32px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0 16px",
                    fontSize: "13px",
                    fontFamily: "Geist, sans-serif",
                    color: "#F0EEE8",
                    background: "#0E0E11",
                    borderBottom: "1px solid #5B7FFF",
                    gap: "6px",
                  }}
                >
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                    <rect
                      x="0"
                      y="0"
                      width="7"
                      height="9"
                      rx="1"
                      fill="#4FC1FF"
                      opacity="0.8"
                    />
                  </svg>
                  App.tsx
                </div>
              </div>

              {/* Code */}
              <div
                style={{
                  flex: 1,
                  padding: "16px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "13px",
                  lineHeight: 1.6,
                  overflow: "hidden",
                }}
              >
                <div>
                  <span style={{ color: "#C792EA" }}>import</span>{" "}
                  <span style={{ color: "#89DDFF" }}>{"{"}</span>{" "}
                  <span style={{ color: "#82AAFF" }}>useState</span>{" "}
                  <span style={{ color: "#89DDFF" }}>{"}"}</span>{" "}
                  <span style={{ color: "#C792EA" }}>from</span>{" "}
                  <span style={{ color: "#C3E88D" }}>'react'</span>
                </div>
                <br />
                <div>
                  <span style={{ color: "#C792EA" }}>
                    export default function
                  </span>{" "}
                  <span style={{ color: "#82AAFF" }}>App</span>
                  <span style={{ color: "#89DDFF" }}>()</span>{" "}
                  <span style={{ color: "#89DDFF" }}>{"{"}</span>
                </div>
                <div style={{ paddingLeft: "24px" }}>
                  <span style={{ color: "#C792EA" }}>const</span> [
                  <span style={{ color: "#EEFFFF" }}>count</span>,{" "}
                  <span style={{ color: "#EEFFFF" }}>setCount</span>] ={" "}
                  <span style={{ color: "#82AAFF" }}>useState</span>
                  <span style={{ color: "#89DDFF" }}>(</span>
                  <span style={{ color: "#F78C6C" }}>0</span>
                  <span style={{ color: "#89DDFF" }}>)</span>
                </div>
                <br />
                <div style={{ paddingLeft: "24px" }}>
                  <span style={{ color: "#C792EA" }}>return</span>{" "}
                  <span style={{ color: "#89DDFF" }}>(</span>
                </div>
                <div style={{ paddingLeft: "48px" }}>
                  <span style={{ color: "#89DDFF" }}>{"<"}</span>
                  <span style={{ color: "#82AAFF" }}>div</span>{" "}
                  <span style={{ color: "#FFCB6B" }}>className</span>
                  <span style={{ color: "#89DDFF" }}>="</span>
                  <span style={{ color: "#C3E88D" }}>min-h-screen</span>
                  <span style={{ color: "#89DDFF" }}>"{">"}</span>
                </div>
                <div style={{ paddingLeft: "72px" }}>
                  <span style={{ color: "#89DDFF" }}>{"<"}</span>
                  <span style={{ color: "#82AAFF" }}>h1</span>
                  <span style={{ color: "#89DDFF" }}>{">"}</span>
                  <span style={{ color: "#EEFFFF" }}>
                    Devix is blazing fast
                  </span>
                  <span style={{ color: "#89DDFF" }}>{"</h1>"}</span>
                </div>
                <div style={{ paddingLeft: "48px" }}>
                  <span style={{ color: "#89DDFF" }}>{"</div>"}</span>
                </div>
                <div style={{ paddingLeft: "24px" }}>
                  <span style={{ color: "#89DDFF" }}>)</span>
                </div>
                <div>
                  <span style={{ color: "#89DDFF" }}>{"}"}</span>
                </div>
              </div>

              {/* Terminal */}
              <div
                style={{
                  height: "120px",
                  background: "#080809",
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                  padding: "8px 12px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                }}
              >
                <div
                  style={{
                    color: "#3E3D3B",
                    fontSize: "11px",
                    marginBottom: "8px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Terminal
                </div>
                <div>
                  <span style={{ color: "#5B7FFF" }}>~/workspace</span>
                  <span style={{ color: "#6E6D6A" }}> $ </span>
                  <span style={{ color: "#F0EEE8" }}>pnpm run dev</span>
                </div>
                <div style={{ color: "#3EFF9E", marginTop: "4px" }}>
                  {" "}
                  VITE v6.0.0 ready in 142ms
                </div>
                <div style={{ color: "#5B7FFF" }}>
                  {" "}
                  ➜ Local:{" "}
                  <span style={{ color: "#6E6D6A" }}>
                    http://localhost:5173/
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    marginTop: "4px",
                  }}
                >
                  <span style={{ color: "#5B7FFF" }}>~/workspace</span>
                  <span style={{ color: "#6E6D6A" }}> $ </span>
                  <span
                    className="animate-blink"
                    style={{
                      display: "inline-block",
                      width: "8px",
                      height: "14px",
                      background: "#3EFF9E",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
