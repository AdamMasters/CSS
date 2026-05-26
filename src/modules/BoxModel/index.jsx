import { useState } from 'react'
import Playground from '../../components/Playground'
import Slider from '../../components/Slider'
import Toggle from '../../components/Toggle'

export default function BoxModel() {
  const [margin, setMargin] = useState(24)
  const [padding, setPadding] = useState(20)
  const [borderWidth, setBorderWidth] = useState(3)
  const [boxSizing, setBoxSizing] = useState('border-box')
  const [contentW] = useState(180)

  const totalW = boxSizing === 'content-box'
    ? contentW + padding * 2 + borderWidth * 2
    : contentW

  const code = `.box {
  width: ${contentW}px;
  padding: ${padding}px;
  border: ${borderWidth}px solid #6c47ff;
  margin: ${margin}px;
  box-sizing: ${boxSizing};
}

/* Total rendered width: ${totalW}px */`

  return (
    <div className="module">
      <div className="module-header">
        <span className="module-badge">Module 1</span>
        <h1 className="module-title">The Box Model</h1>
        <p className="module-intro">
          Every element in CSS is a rectangular box. Understanding how that box is
          sized — and how its layers interact — is the single most important concept
          in CSS layout.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">The four layers</h2>
        <p className="section-text">
          Every CSS box is built from four nested layers, working outward from the content:
        </p>
        <p className="section-text">
          <strong>Content</strong> — the actual text or image. Sized by <code>width</code> and <code>height</code>.<br />
          <strong>Padding</strong> — transparent space inside the border, between content and border.<br />
          <strong>Border</strong> — a visible (or invisible) line around the padding.<br />
          <strong>Margin</strong> — transparent space <em>outside</em> the border, pushing other elements away.
        </p>
        <div className="callout">
          <strong>Key rule:</strong> Margin is never part of the element itself — it only affects
          spacing between sibling elements. You can't give margin a background colour.
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Interactive Explorer</h2>
        <p className="section-text">
          Drag the sliders to see how each layer affects the box. Watch the total width
          change when you switch <code>box-sizing</code>.
        </p>

        <Playground
          title="Box Model Explorer"
          code={code}
          controls={
            <>
              <Slider label="Margin" value={margin} min={0} max={60} unit="px" onChange={setMargin} />
              <Slider label="Padding" value={padding} min={0} max={60} unit="px" onChange={setPadding} />
              <Slider label="Border width" value={borderWidth} min={0} max={20} unit="px" onChange={setBorderWidth} />
              <hr className="ctrl-divider" />
              <Toggle
                label="box-sizing"
                value={boxSizing}
                options={['content-box', 'border-box']}
                onChange={setBoxSizing}
              />
              <div style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Total width: <strong style={{ color: 'var(--primary)' }}>{totalW}px</strong>
              </div>
            </>
          }
        >
          {/* Visual box-model diagram */}
          <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Margin layer */}
            <div style={{
              padding: margin,
              background: 'rgba(255,200,100,0.25)',
              border: '2px dashed rgba(200,140,0,0.4)',
              borderRadius: 6,
              position: 'relative',
            }}>
              <span style={{
                position: 'absolute', top: 2, left: 4,
                fontSize: 10, fontWeight: 700, color: '#a07000', fontFamily: 'monospace'
              }}>margin</span>
              {/* Border layer */}
              <div style={{
                padding: padding,
                border: `${borderWidth}px solid #6c47ff`,
                borderRadius: 4,
                background: 'rgba(108,71,255,0.08)',
                position: 'relative',
              }}>
                <span style={{
                  position: 'absolute', top: 2, left: 4,
                  fontSize: 10, fontWeight: 700, color: '#6c47ff', fontFamily: 'monospace'
                }}>padding</span>
                {/* Content */}
                <div style={{
                  width: contentW,
                  height: 60,
                  background: '#6c47ff',
                  borderRadius: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 700,
                  fontFamily: 'monospace',
                }}>
                  content
                </div>
              </div>
            </div>
          </div>
        </Playground>
      </div>

      <div className="section">
        <h2 className="section-title">box-sizing: the game changer</h2>
        <p className="section-text">
          By default (<code>content-box</code>), <code>width</code> sets only the content area.
          Padding and border are <em>added on top</em>, making the total element wider than you specified.
        </p>
        <p className="section-text">
          With <code>border-box</code>, <code>width</code> includes padding and border — so the
          total rendered size matches what you wrote. This is why almost every project starts with:
        </p>
        <div className="callout">
          <strong>Best practice:</strong> Put <code>*, *::before, *::after {'{'} box-sizing: border-box {'}'}</code> at
          the top of every stylesheet. It makes sizing predictable and eliminates a huge class of layout bugs.
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Margin collapse</h2>
        <p className="section-text">
          When two block elements sit vertically adjacent, their top and bottom margins
          <em> collapse</em> — only the larger margin survives. If one element has
          <code> margin-bottom: 40px</code> and the next has <code>margin-top: 24px</code>,
          the gap between them is <strong>40px</strong>, not 64px.
        </p>
        <p className="section-text">
          Margin collapse <em>only</em> happens vertically (top/bottom), and <em>only</em> between
          block-level elements in normal flow. It does not occur with flex or grid children.
        </p>
      </div>
    </div>
  )
}
