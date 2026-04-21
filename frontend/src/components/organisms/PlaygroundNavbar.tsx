import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Share2, Settings } from 'lucide-react'

interface PlaygroundNavbarProps {
  projectId: string
}

export const PlaygroundNavbar = ({ projectId }: PlaygroundNavbarProps) => {
  const [status] = useState<'ready' | 'running'>('ready')

  return (
    <header
      style={{
        height: '40px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#0A0A0B',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        padding: '0 12px',
        flexShrink: 0,
        zIndex: 20,
      }}
    >
      {/* Left — Logo + Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Link
          to="/"
          title="Back to Home"
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
        >
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <rect x="2" y="2" width="7" height="7" fill="#5B7FFF" />
            <rect x="11" y="2" width="7" height="7" fill="rgba(91,127,255,0.4)" />
            <rect x="2" y="11" width="7" height="7" fill="rgba(91,127,255,0.4)" />
            <rect x="11" y="11" width="7" height="7" fill="#5B7FFF" />
          </svg>
        </Link>

        <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.07)' }} />

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', fontFamily: 'Geist, sans-serif' }}>
          <span style={{ color: '#6E6D6A' }}>workspace</span>
          <span style={{ color: '#3E3D3B' }}>/</span>
          <span style={{ color: '#F0EEE8' }}>{projectId.slice(0, 8)}...</span>
          {/* Unsaved indicator — shown conditionally */}
          {/* <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FFB547', display: 'inline-block', marginLeft: 4 }} /> */}
        </div>
      </div>

      {/* Center — Run + Status */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button
          id="playground-run-button"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            height: '28px',
            padding: '0 12px',
            background: '#5B7FFF',
            color: '#fff',
            fontSize: '12px',
            fontFamily: 'Geist, sans-serif',
            fontWeight: 500,
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            transition: 'opacity 0.15s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85' }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
        >
          <svg width="8" height="9" viewBox="0 0 8 9" fill="none">
            <path d="M1 1L7 4.5L1 8V1Z" fill="white" />
          </svg>
          Run
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', fontFamily: 'Geist, sans-serif' }}>
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: status === 'running' ? '#2DD98F' : '#6E6D6A',
              display: 'inline-block',
            }}
          />
          <span style={{ color: status === 'running' ? '#2DD98F' : '#6E6D6A' }}>
            {status === 'running' ? 'Running' : 'Ready'}
          </span>
        </div>
      </div>

      {/* Right — Share + Avatar + Settings */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {/* Share */}
        <button
          id="playground-share-button"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            height: '28px',
            padding: '0 10px',
            background: 'transparent',
            color: '#6E6D6A',
            fontSize: '12px',
            fontFamily: 'Geist, sans-serif',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'color 0.15s ease, border-color 0.15s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#F0EEE8'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#6E6D6A'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
          }}
        >
          <Share2 size={12} />
          Share
        </button>

        {/* User avatar */}
        <div
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: '#5B7FFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            fontWeight: 500,
            color: '#fff',
            fontFamily: 'Geist, sans-serif',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          U
        </div>

        {/* Settings */}
        <button
          title="Settings"
          style={{
            background: 'none',
            border: 'none',
            color: '#3E3D3B',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '2px',
            transition: 'color 0.15s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#F0EEE8' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#3E3D3B' }}
        >
          <Settings size={14} />
        </button>
      </div>
    </header>
  )
}
