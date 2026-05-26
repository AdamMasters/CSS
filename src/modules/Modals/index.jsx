import { useState } from 'react'
import Playground from '../../components/Playground'
import Slider from '../../components/Slider'
import Toggle from '../../components/Toggle'

export default function Modals() {
  const [open, setOpen] = useState(false)
  const [blur, setBlur] = useState(4)
  const [overlayOpacity, setOverlayOpacity] = useState(50)
  const [animType, setAnimType] = useState('scale')
  const [overlayColor, setOverlayColor] = useState('#000000')

  const code = `/* Overlay (position: fixed covers the whole viewport) */
.overlay {
  position: fixed;
  inset: 0; /* top:0 right:0 bottom:0 left:0 */
  background: ${overlayColor}${Math.round(overlayOpacity * 2.55).toString(16).padStart(2,'0')};
  backdrop-filter: blur(${blur}px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

/* Modal box */
.modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 480px;
  width: 90%;
  box-shadow: 0 24px 80px rgba(0,0,0,0.25);
  animation: ${animType}In 250ms ease-out;
}

@keyframes scaleIn {
  from { transform: scale(0.85); opacity: 0; }
  to   { transform: scale(1);    opacity: 1; }
}
@keyframes slideIn {
  from { transform: translateY(-40px); opacity: 0; }
  to   { transform: translateY(0);     opacity: 1; }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}`

  const modalStyle = {
    background: '#fff',
    borderRadius: 16,
    padding: 32,
    maxWidth: 360,
    width: '90%',
    boxShadow: '0 24px 80px rgba(0,0,0,0.3)',
    animation: `modal${animType}In 280ms ease-out`,
    position: 'relative',
  }

  const overlayStyle = {
    position: 'fixed',
    inset: 0,
    background: `${overlayColor}${Math.round(overlayOpacity * 2.55).toString(16).padStart(2,'0')}`,
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  }

  return (
    <div className="module">
      <style>{`
        @keyframes modalscaleIn  { from{transform:scale(0.85);opacity:0} to{transform:scale(1);opacity:1} }
        @keyframes modalslideIn  { from{transform:translateY(-40px);opacity:0} to{transform:translateY(0);opacity:1} }
        @keyframes modalfadeIn   { from{opacity:0} to{opacity:1} }
        @keyframes modalbounceIn { from{transform:scale(0.6);opacity:0} 80%{transform:scale(1.05)} to{transform:scale(1);opacity:1} }
      `}</style>

      <div className="module-header">
        <span className="module-badge">Module 10</span>
        <h1 className="module-title">Modals & Overlays</h1>
        <p className="module-intro">
          Modals are one of the most common UI patterns. Building them with CSS requires
          understanding fixed positioning, z-index, backdrop effects, and smooth animations.
          This module brings everything from the course together.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">How a modal works</h2>
        <p className="section-text">
          A modal has two parts: an <strong>overlay</strong> that covers the entire screen,
          and the <strong>modal box</strong> centred within it.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, maxWidth: 680, marginBottom: 16 }}>
          {[
            { prop: 'position: fixed', why: 'Covers the viewport, stays put when the page scrolls.' },
            { prop: 'inset: 0', why: 'Shorthand for top/right/bottom/left all set to 0.' },
            { prop: 'z-index: 1000', why: 'Ensures the modal appears above all page content.' },
            { prop: 'display: flex', why: 'On the overlay — easy way to centre the modal box.' },
            { prop: 'backdrop-filter', why: 'Blurs content behind the overlay for depth.' },
            { prop: 'overflow: hidden on body', why: 'Prevents the background from scrolling while modal is open.' },
          ].map(({ prop, why }) => (
            <div key={prop} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 8, padding: 12 }}>
              <code style={{ fontSize: 12, color: 'var(--primary)', fontWeight: 700 }}>{prop}</code>
              <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4, lineHeight: 1.4 }}>{why}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Interactive Modal</h2>
        <p className="section-text">
          Configure the modal below, then click "Open Modal" to see it in action.
        </p>

        <Playground
          title="Modal Builder"
          code={code}
          controls={
            <>
              <Slider label="Backdrop blur" value={blur} min={0} max={20} unit="px" onChange={setBlur} />
              <Slider label="Overlay opacity" value={overlayOpacity} min={0} max={90} unit="%" onChange={setOverlayOpacity} />
              <div className="ctrl-group">
                <label className="ctrl-label">Overlay colour</label>
                <input type="color" value={overlayColor} onChange={e => setOverlayColor(e.target.value)}
                  style={{ width: '100%', height: 32, border: '1px solid var(--border)', borderRadius: 6, cursor: 'pointer', padding: 2 }} />
              </div>
              <Toggle label="Animation" value={animType}
                options={[
                  { value: 'scale', label: 'Scale' },
                  { value: 'slide', label: 'Slide' },
                  { value: 'fade', label: 'Fade' },
                  { value: 'bounce', label: 'Bounce' },
                ]}
                onChange={setAnimType} />
              <button
                onClick={() => setOpen(true)}
                style={{
                  marginTop: 8,
                  padding: '10px 20px',
                  background: 'var(--primary)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: 'pointer',
                  width: '100%',
                }}
              >
                Open Modal
              </button>
            </>
          }
          minHeight={160}
        >
          <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 14 }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🪟</div>
            <p>Click "Open Modal" to launch the demo.</p>
          </div>
        </Playground>

        {/* The actual modal — portal-style at document root */}
        {open && (
          <div style={overlayStyle} onClick={e => { if (e.target === e.currentTarget) setOpen(false) }}>
            <div style={modalStyle}>
              <button
                onClick={() => setOpen(false)}
                style={{
                  position: 'absolute', top: 16, right: 16,
                  background: 'none', border: 'none',
                  fontSize: 20, cursor: 'pointer', color: '#aaa', lineHeight: 1,
                }}
              >✕</button>
              <div style={{ fontSize: 28, marginBottom: 8 }}>👋</div>
              <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Hello, Modal!</h2>
              <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 24 }}>
                This modal uses <code>position: fixed</code> on the overlay and
                <code> display: flex</code> to centre this box. Click the overlay or ✕ to close.
              </p>
              <div style={{ display: 'flex', gap: 10 }}>
                <button onClick={() => setOpen(false)} style={{ flex: 1, padding: '10px 0', background: 'var(--primary)', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
                  Got it
                </button>
                <button onClick={() => setOpen(false)} style={{ flex: 1, padding: '10px 0', background: 'var(--surface2)', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="section">
        <h2 className="section-title">The native {'<dialog>'} element</h2>
        <p className="section-text">
          HTML5 provides a built-in <code>{'<dialog>'}</code> element with
          <code> showModal()</code> and <code>close()</code> methods. It automatically:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, maxWidth: 600 }}>
          {[
            'Handles focus trapping inside the dialog',
            'Closes on Escape key automatically',
            'Has a native ::backdrop pseudo-element',
            'Is accessible to screen readers by default',
          ].map(t => (
            <div key={t} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 8, padding: 12, fontSize: 13, display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--primary)', fontWeight: 800 }}>✓</span>
              <span style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>{t}</span>
            </div>
          ))}
        </div>
        <div className="callout" style={{ marginTop: 16 }}>
          For production modals, prefer <code>{'<dialog>'}</code> over a <code>div</code>-based
          solution — it gives you accessibility behaviours for free.
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Congratulations! 🎉</h2>
        <p className="section-text">
          You've worked through all 10 modules of the CSS Fundamentals course. Here's a
          quick recap of the journey:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 10, maxWidth: 800 }}>
          {[
            ['1', 'Box Model', '📦'],
            ['2', 'Display & Flow', '↔️'],
            ['3', 'Positioning', '📍'],
            ['4', 'Flexbox', '🔀'],
            ['5', 'CSS Grid', '⊞'],
            ['6', 'Typography', '✍️'],
            ['7', 'Colours', '🎨'],
            ['8', 'Animations', '✨'],
            ['9', 'Responsive', '📱'],
            ['10', 'Modals', '🪟'],
          ].map(([num, title, emoji]) => (
            <div key={num} style={{ background: 'linear-gradient(135deg, var(--primary-light), #fff)', border: '1px solid var(--border)', borderRadius: 10, padding: 14, textAlign: 'center' }}>
              <div style={{ fontSize: 24, marginBottom: 4 }}>{emoji}</div>
              <div style={{ fontSize: 11, color: 'var(--primary)', fontWeight: 700, marginBottom: 2 }}>Module {num}</div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
