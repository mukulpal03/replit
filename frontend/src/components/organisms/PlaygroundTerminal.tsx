import { useEffect, useRef } from "react";
import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import { useShellSocket } from "../../hooks/useShellSocket";
import { useParams } from "react-router-dom";
import { Plus } from "lucide-react";

export const PlaygroundTerminal = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const { isConnected, sendData, onData } = useShellSocket(projectId);
  const terminalRef = useRef<HTMLDivElement>(null);
  const xtermRef = useRef<Terminal | null>(null);
  const fitAddonRef = useRef<FitAddon | null>(null);

  useEffect(() => {
    if (!terminalRef.current) return;

    const term = new Terminal({
      cursorBlink: true,
      cursorStyle: "block",
      fontSize: 12,
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Menlo', 'Monaco', monospace",
      fontWeight: "normal",
      lineHeight: 1.5,
      theme: {
        background: "#080809",
        foreground: "#F0EEE8",
        cursor: "#3EFF9E",
        cursorAccent: "#080809",
        selectionBackground: "rgba(91,127,255,0.25)",
        // ANSI colors
        black:   "#0A0A0B",
        red:     "#FF5757",
        green:   "#2DD98F",
        yellow:  "#FFB547",
        blue:    "#5B7FFF",
        magenta: "#C792EA",
        cyan:    "#89DDFF",
        white:   "#F0EEE8",
        brightBlack:   "#6E6D6A",
        brightRed:     "#FF5757",
        brightGreen:   "#3EFF9E",
        brightYellow:  "#FFB547",
        brightBlue:    "#82AAFF",
        brightMagenta: "#A78BFA",
        brightCyan:    "#89DDFF",
        brightWhite:   "#FFFFFF",
      },
    });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.open(terminalRef.current);
    fitAddon.fit();

    xtermRef.current = term;
    fitAddonRef.current = fitAddon;

    const removeSocketListener = onData((data) => {
      term.write(data);
    });

    const onDataDisposable = term.onData((data) => {
      sendData(data);
    });

    const handleResize = () => { fitAddon.fit(); };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      onDataDisposable.dispose();
      removeSocketListener();
      term.dispose();
      xtermRef.current = null;
      fitAddonRef.current = null;
    };
  }, []);

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        background: '#080809',
      }}
    >
      {/* Terminal tab bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '28px',
          padding: '0 12px',
          background: '#080809',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          flexShrink: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0 8px',
              height: '20px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '3px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: isConnected ? '#2DD98F' : '#FF5757',
                display: 'inline-block',
                flexShrink: 0,
              }}
              className={!isConnected ? 'animate-pulse-dot' : undefined}
            />
            <span
              style={{
                fontSize: '12px',
                color: '#6E6D6A',
                fontFamily: 'Geist, sans-serif',
                letterSpacing: '0.02em',
              }}
            >
              Terminal{!isConnected ? ' (Disconnected)' : ''}
            </span>
          </div>
        </div>

        {/* + new terminal */}
        <button
          title="New Terminal"
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
          <Plus size={13} />
        </button>
      </div>

      {/* xterm content */}
      <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        <div ref={terminalRef} style={{ position: 'absolute', inset: 0, padding: '4px 8px' }} />
      </div>
    </div>
  );
};
