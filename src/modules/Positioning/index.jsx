import { useState } from 'react'
import Playground from '../../components/Playground'
import Slider from '../../components/Slider'
import Toggle from '../../components/Toggle'

export default function Positioning() {
  const [position, setPosition] = useState('relative')
  const [top, setTop] = useState(20)
  const [left, setLeft] = useState(20)
  const [zIndex, setZIndex] = useState(1)

  const offsetApplies = position !== 'static'

  const code = `.parent {
  position: relative; /* creates containing block */
}

.box {
  position: ${position};${offsetApplies ? `
  top: ${top}px;
  left: ${left}px;` : ''}${position === 'absolute' || position === 'fixed' ? `
  z-index: ${zIndex};` : ''}
}`

  return (
    <div className="module">
      <div className="module-header">
        <span className="module-badge">Module 3</span>
        <h1 className="module-title">Positioning</h1>
        <p className="module-intro">
          CSS positioning lets you take elements out of normal flow and place them
          precisely — relative to their normal position, their nearest positioned ancestor,
          the viewport, or even the scroll position.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">The five position values</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, maxWidth: 800, marginBottom: 16 }}>
          {[
            { v: 'static', desc: 'Default. Normal flow. top/left/etc. have no effect.' },
            { v: 'relative', desc: 'Stays in flow. Offset applied relative to its own normal position.' },
            { v: 'absolute', desc: 'Removed from flow. Positioned relative to nearest positioned ancestor.' },
            { v: 'fixed', desc: 'Removed from flow. Positioned relative to the viewport — stays put on scroll.' },
            { v: 'sticky', desc: 'Hybrid: acts relative until it hits a scroll threshold, then sticks.' },
          ].map(({ v, desc }) => (
            <div key={v} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 8, padding: 14 }}>
              <code style={{ color: 'var(--primary)', fontWeight: 700, fontSize: 13 }}>{v}</code>
              <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 6, lineHeight: 1.5 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Interactive Positioning</h2>
        <p className="section-text">
          Switch between position values and use the sliders to move the purple box.
          Notice how <code>relative</code> leaves a ghost space, while <code>absolute</code>
          collapses the flow around it.
        </p>

        <Playground
          title="Position Explorer"
          code={code}
          controls={
            <>
              <Toggle
                label="position"
                value={position}
                options={['static', 'relative', 'absolute', 'fixed']}
                onChange={setPosition}
              />
              {offsetApplies && (
                <>
                  <Slider label="top" value={top} min={0} max={120} unit="px" onChange={setTop} />
                  <Slider label="left" value={left} min={0} max={120} unit="px" onChange={setLeft} />
                </>
              )}
              {(position === 'absolute' || position === 'fixed') && (
                <Slider label="z-index" value={zIndex} min={-1} max={10} onChange={setZIndex} />
              )}
              {position === 'static' && (
                <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>top/left have no effect on static elements.</p>
              )}
              {position === 'fixed' && (
                <p style={{ fontSize: 12, color: 'var(--primary)', lineHeight: 1.5 }}>Fixed elements are clipped to the preview area here. In a real page they'd stick to the browser window.</p>
              )}
            </>
          }
          minHeight={300}
        >
          {/* Containing block */}
          <div style={{
            position: 'relative',
            width: 300,
            height: 260,
            background: '#fff',
            border: '2px dashed #ccc',
            borderRadius: 8,
            overflow: position === 'fixed' ? 'hidden' : 'visible',
          }}>
            <span style={{ position: 'absolute', top: 6, left: 8, fontSize: 10, color: '#aaa', fontFamily: 'monospace' }}>
              parent (position: relative)
            </span>

            {/* Sibling above */}
            <div style={{
              position: 'relative',
              margin: '28px 12px 0',
              height: 44,
              background: 'rgba(200,190,255,0.35)',
              borderRadius: 6,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 12, fontFamily: 'monospace', color: '#9980ea',
            }}>sibling element</div>

            {/* The positioned box */}
            <div style={{
              position: position === 'static' ? 'static' : position,
              top: offsetApplies ? top : undefined,
              left: offsetApplies ? left : undefined,
              zIndex: position === 'absolute' || position === 'fixed' ? zIndex : undefined,
              width: 110,
              height: 56,
              background: '#6c47ff',
              borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontWeight: 700, fontSize: 13, fontFamily: 'monospace',
              margin: position === 'static' || position === 'relative' ? '8px 12px' : undefined,
              boxShadow: '0 4px 16px rgba(108,71,255,0.35)',
              transition: 'top .2s, left .2s',
            }}>.box</div>

            {/* Sibling below */}
            <div style={{
              position: 'relative',
              margin: '8px 12px 0',
              height: 44,
              background: 'rgba(200,190,255,0.35)',
              borderRadius: 6,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 12, fontFamily: 'monospace', color: '#9980ea',
            }}>sibling element</div>
          </div>
        </Playground>
      </div>

      <div className="section">
        <h2 className="section-title">The containing block</h2>
        <p className="section-text">
          An <code>absolute</code>-positioned element anchors to its nearest ancestor that
          has <code>position</code> set to anything other than <code>static</code>.
          If no such ancestor exists, it anchors to the <code>{'<html>'}</code> element (the viewport).
        </p>
        <p className="section-text">
          This is why a common pattern is to set <code>position: relative</code> on a container
          even when you don't intend to offset it — it creates the containing block for absolute children.
        </p>
        <div className="callout">
          <strong>Sticky tip:</strong> <code>position: sticky</code> requires a defined
          <code> top</code> (or bottom) value to work, and the parent must be tall enough
          to scroll through. It will not stick if <code>overflow: hidden</code> is set on any ancestor.
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">z-index & stacking context</h2>
        <p className="section-text">
          <code>z-index</code> controls the paint order along the Z axis (towards the viewer).
          Higher values appear on top. But <code>z-index</code> only works on <em>positioned</em>
          elements (anything other than <code>static</code>).
        </p>
        <p className="section-text">
          Certain properties create a new <strong>stacking context</strong> — a self-contained
          Z-space. Elements inside it can only be stacked relative to each other; they can't
          escape the context to overlap elements outside it. <code>transform</code>,
          <code> opacity {'<'} 1</code>, and <code>isolation: isolate</code> all trigger this.
        </p>
      </div>
    </div>
  )
}
