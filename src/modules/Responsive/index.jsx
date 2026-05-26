import { useState } from 'react'
import Playground from '../../components/Playground'
import Slider from '../../components/Slider'

export default function Responsive() {
  // Viewport units demo
  const [vpW, setVpW] = useState(320)

  // clamp explorer
  const [clampMin, setClampMin] = useState(14)
  const [clampPref, setClampPref] = useState(2.5)
  const [clampMax, setClampMax] = useState(36)
  const [previewVw, setPreviewVw] = useState(700)

  const clampResult = Math.min(clampMax, Math.max(clampMin, previewVw * clampPref / 100))

  const clampCode = `h1 {
  font-size: clamp(
    ${clampMin}px,   /* minimum */
    ${clampPref}vw,  /* preferred (fluid) */
    ${clampMax}px    /* maximum */
  );
}

/* At viewport width ${previewVw}px → font-size: ${clampResult.toFixed(1)}px */`

  const vpCode = `.full-height { height: 100vh;  /* 100% of viewport height */ }
.half-width  { width: 50vw;   /* 50% of viewport width */ }
.square      { width: 50vmin; height: 50vmin; /* smaller of vw/vh */ }
.big         { width: 100vmax; /* larger of vw/vh */ }`

  return (
    <div className="module">
      <div className="module-header">
        <span className="module-badge">Module 9</span>
        <h1 className="module-title">Responsive Design</h1>
        <p className="module-intro">
          Responsive design means building layouts that adapt to any screen size.
          CSS provides viewport units, fluid functions like <code>clamp()</code>,
          and media queries to achieve this without JavaScript.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Viewport units</h2>
        <p className="section-text">
          Viewport units are always relative to the browser window, regardless of
          any parent's size. They're essential for full-screen layouts and fluid sizing.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 10, maxWidth: 720, marginBottom: 20 }}>
          {[
            { u: 'vw', desc: '1% of viewport width.' },
            { u: 'vh', desc: '1% of viewport height.' },
            { u: 'vmin', desc: '1% of the smaller dimension.' },
            { u: 'vmax', desc: '1% of the larger dimension.' },
            { u: 'dvh', desc: 'Dynamic vh — accounts for mobile browser chrome.' },
            { u: 'svh', desc: 'Small vh — smallest browser chrome state.' },
          ].map(({ u, desc }) => (
            <div key={u} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 8, padding: 12 }}>
              <code style={{ color: 'var(--primary)', fontWeight: 700 }}>{u}</code>
              <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4, lineHeight: 1.5 }}>{desc}</p>
            </div>
          ))}
        </div>
        <Playground
          title="Viewport Unit Explorer"
          code={vpCode}
          controls={
            <>
              <Slider label="Simulated viewport width" value={vpW} min={200} max={600} unit="px" onChange={setVpW} />
              <div style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.6 }}>
                <div>50vw = <strong style={{color:'var(--primary)'}}>{(vpW * 0.5).toFixed(0)}px</strong></div>
                <div>100vh ≈ browser window height</div>
                <div>50vmin = <strong style={{color:'var(--primary)'}}>{Math.min(vpW, 500) * 0.5}px</strong></div>
              </div>
            </>
          }
          minHeight={200}
        >
          <div style={{ position: 'relative', width: vpW, height: 180, background: '#f0eeff', borderRadius: 8, overflow: 'hidden', border: '2px dashed #c4b8ff', transition: 'width .2s' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: vpW * 0.5, height: '100%', background: 'rgba(108,71,255,0.2)', borderRight: '2px solid #6c47ff', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 8 }}>
              <span style={{ fontSize: 11, fontFamily: 'monospace', color: '#6c47ff', fontWeight: 700 }}>50vw</span>
            </div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 40, background: 'rgba(255,107,107,0.2)', borderTop: '2px solid #ff6b6b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 11, fontFamily: 'monospace', color: '#ff6b6b', fontWeight: 700 }}>full viewport width = {vpW}px</span>
            </div>
          </div>
        </Playground>
      </div>

      <div className="section">
        <h2 className="section-title">clamp() — fluid values without media queries</h2>
        <p className="section-text">
          <code>clamp(min, preferred, max)</code> picks the preferred value when it's
          between min and max, otherwise clamps to the boundary. It's perfect for fluid
          typography and spacing.
        </p>

        <Playground
          title="clamp() Explorer"
          code={clampCode}
          controls={
            <>
              <Slider label="Minimum" value={clampMin} min={8} max={32} unit="px" onChange={setClampMin} />
              <Slider label="Preferred (vw)" value={clampPref} min={0.5} max={8} step={0.1} unit="vw" onChange={setClampPref} />
              <Slider label="Maximum" value={clampMax} min={16} max={80} unit="px" onChange={setClampMax} />
              <hr className="ctrl-divider" />
              <Slider label="Simulated viewport width" value={previewVw} min={200} max={1400} step={10} unit="px" onChange={setPreviewVw} />
              <div style={{ background: 'var(--surface2)', borderRadius: 8, padding: '10px 12px', textAlign: 'center' }}>
                <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Computed font-size</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--primary)', fontFamily: 'monospace' }}>{clampResult.toFixed(1)}px</div>
              </div>
            </>
          }
          minHeight={200}
        >
          <div style={{ textAlign: 'center', padding: '0 16px', maxWidth: 380 }}>
            {/* Graph */}
            <svg width="300" height="100" viewBox="0 0 300 100" style={{ display: 'block', margin: '0 auto 12px' }}>
              <defs>
                <linearGradient id="gline" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6c47ff" />
                  <stop offset="100%" stopColor="#ff6b6b" />
                </linearGradient>
              </defs>
              {/* Background */}
              <rect width="300" height="100" fill="#f5f4fb" rx="4" />
              {/* Axes */}
              <line x1="20" y1="80" x2="280" y2="80" stroke="#ddd" strokeWidth="1" />
              {/* Line: min → clamp curve → max */}
              {(() => {
                const minVW = clampMin / (clampPref / 100)
                const maxVW = clampMax / (clampPref / 100)
                const toX = vw => 20 + ((Math.min(Math.max(vw, 200), 1400) - 200) / 1200) * 260
                const toY = fs => 80 - ((fs - clampMin * 0.5) / (clampMax * 1.2 - clampMin * 0.5)) * 70
                const x1 = toX(200); const y1 = toY(clampMin)
                const x2 = toX(Math.max(200, minVW)); const y2 = toY(clampMin)
                const x3 = toX(Math.min(1400, maxVW)); const y3 = toY(clampMax)
                const x4 = toX(1400); const y4 = toY(clampMax)
                const cx = toX(previewVw)
                const cy = toY(clampResult)
                return <>
                  <polyline points={`${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4}`} fill="none" stroke="url(#gline)" strokeWidth="2.5" />
                  <circle cx={cx} cy={cy} r="5" fill="#6c47ff" />
                  <line x1={cx} y1={cy} x2={cx} y2="80" stroke="#6c47ff" strokeWidth="1" strokeDasharray="3,2" />
                  <text x="20" y="95" fontSize="9" fill="#aaa">200px</text>
                  <text x="250" y="95" fontSize="9" fill="#aaa">1400px</text>
                </>
              })()}
            </svg>
            <div style={{ fontSize: clampResult, fontWeight: 700, color: 'var(--primary)', transition: 'font-size .1s', lineHeight: 1.2 }}>
              Fluid Heading
            </div>
          </div>
        </Playground>
      </div>

      <div className="section">
        <h2 className="section-title">Media queries</h2>
        <p className="section-text">
          Media queries apply CSS rules only when a condition is met — typically a
          screen width breakpoint. Use <code>@media</code> with logical operators:
        </p>
        <Playground
          title="Media Query Patterns"
          code={`/* Mobile-first (preferred) */
@media (min-width: 768px)  { /* tablet + */ }
@media (min-width: 1024px) { /* desktop + */ }

/* Dark mode preference */
@media (prefers-color-scheme: dark) { }

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: .01ms !important; }
}

/* Print */
@media print { .nav { display: none; } }`}
          controls={
            <div style={{ fontSize: 13, lineHeight: 1.8, color: 'var(--text-muted)' }}>
              <p><strong>Mobile-first</strong> means writing your base styles for small screens, then adding overrides for larger screens with <code>min-width</code>.</p>
              <br />
              <p>This is the preferred approach — it forces you to prioritise content, and overriding up is simpler than overriding down.</p>
            </div>
          }
          minHeight={120}
        >
          <div style={{ textAlign: 'center', fontSize: 13, color: 'var(--text-muted)', lineHeight: 2 }}>
            <div style={{ fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>Common breakpoints</div>
            <div>📱 <code>&lt; 768px</code> — mobile</div>
            <div>📟 <code>768–1023px</code> — tablet</div>
            <div>🖥 <code>1024px+</code> — desktop</div>
          </div>
        </Playground>
      </div>

      <div className="section">
        <h2 className="section-title">Container queries (modern CSS)</h2>
        <p className="section-text">
          Where media queries respond to the <em>viewport</em>, container queries respond
          to the size of a <em>parent element</em>. This lets components be truly reusable —
          they adapt based on how much space they have, not what the screen size is.
        </p>
        <div className="callout">
          <code>{'@container (min-width: 500px) { .card { display: flex; } }'}</code><br /><br />
          Define the container with <code>container-type: inline-size</code> on the parent,
          then query it on child elements. Supported in all modern browsers.
        </div>
      </div>
    </div>
  )
}
