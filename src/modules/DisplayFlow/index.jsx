import { useState } from 'react'
import Playground from '../../components/Playground'
import Toggle from '../../components/Toggle'
import Slider from '../../components/Slider'

const COLORS = ['#6c47ff', '#ff6b6b', '#20c997', '#ffd43b', '#4dabf7', '#f783ac']

export default function DisplayFlow() {
  const [display, setDisplay] = useState('block')
  const [itemW, setItemW] = useState(120)
  const [itemH, setItemH] = useState(60)

  const code = `.item {
  display: ${display};
  width: ${itemW}px;
  height: ${itemH}px;
}

/* width and height ${
    display === 'inline'
      ? "are IGNORED for inline elements\n   (size is determined by content)"
      : "apply normally"
  } */`

  return (
    <div className="module">
      <div className="module-header">
        <span className="module-badge">Module 2</span>
        <h1 className="module-title">Display & Flow</h1>
        <p className="module-intro">
          The <code>display</code> property determines how an element participates in
          the document's layout flow — whether it takes up a full row, sits inline
          with text, or creates a new formatting context altogether.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Normal flow</h2>
        <p className="section-text">
          Before you add any positioning or flexbox, elements are laid out in
          <strong> normal flow</strong>. Block-level elements stack vertically, one per row.
          Inline elements sit side-by-side, flowing like words in a sentence.
        </p>
        <p className="section-text">
          Normal flow is the browser's default — you get it for free without writing a single
          layout property. Most of the time you're working <em>with</em> normal flow, not against it.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">The display values</h2>

        <Playground
          title="Display Value Explorer"
          code={code}
          controls={
            <>
              <Toggle
                label="display"
                value={display}
                options={['block', 'inline', 'inline-block']}
                onChange={setDisplay}
              />
              <Slider label="width" value={itemW} min={40} max={200} unit="px" onChange={setItemW} />
              <Slider label="height" value={itemH} min={20} max={160} unit="px" onChange={setItemH} />
              <div style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.6, marginTop: 4 }}>
                {display === 'block' && '↕ Each item takes the full row width. Width and height are respected.'}
                {display === 'inline' && '↔ Items flow like words. Width and height are ignored — size comes from content.'}
                {display === 'inline-block' && '↔ Items flow inline but respect width and height like a block.'}
              </div>
            </>
          }
          minHeight={280}
        >
          <div style={{ background: '#fff', border: '2px dashed #ddd', padding: 20, borderRadius: 8, width: '100%', maxWidth: 380 }}>
            <span style={{ fontSize: 12, color: '#999', display: 'block', marginBottom: 8, fontFamily: 'monospace' }}>parent container</span>
            {COLORS.slice(0, 3).map((color, i) => {
              const style = { background: color, borderRadius: 6, fontWeight: 700, fontSize: 13, fontFamily: 'monospace', color: '#fff' }
              if (display === 'inline') {
                Object.assign(style, { display: 'inline', padding: '4px 10px', marginRight: 4 })
              } else if (display === 'inline-block') {
                Object.assign(style, { display: 'inline-block', width: itemW, height: itemH, lineHeight: `${itemH}px`, textAlign: 'center', marginRight: 6, verticalAlign: 'top' })
              } else {
                Object.assign(style, { display: 'block', width: itemW, height: itemH, lineHeight: `${itemH}px`, textAlign: 'center', marginBottom: 8 })
              }
              return <div key={i} style={style}>item {i + 1}</div>
            })}
          </div>
        </Playground>
      </div>

      <div className="section">
        <h2 className="section-title">Block vs Inline at a glance</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, maxWidth: 680 }}>
          {[
            { title: 'Block', color: '#6c47ff', points: ['Takes full row width', 'Stacks vertically', 'Respects width & height', 'Examples: div, p, h1, section'] },
            { title: 'Inline', color: '#20c997', points: ['Only as wide as content', 'Flows with text', 'Ignores width & height', 'Examples: span, a, strong, em'] },
          ].map(({ title, color, points }) => (
            <div key={title} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 10, padding: 16 }}>
              <div style={{ color, fontWeight: 700, marginBottom: 10, fontSize: 15 }}>{title}</div>
              {points.map(p => (
                <div key={p} style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 6, lineHeight: 1.4 }}>• {p}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">display: none vs visibility: hidden</h2>
        <p className="section-text">
          <code>display: none</code> removes the element from the document entirely — it takes
          up no space. <code>visibility: hidden</code> hides it visually but the space is still
          reserved. Choose based on whether you want the layout to shift.
        </p>
        <div className="callout">
          <strong>Accessibility note:</strong> Screen readers also skip <code>display: none</code>
          elements. If you need to hide something visually but keep it for assistive technology,
          use the "visually hidden" technique instead.
        </div>
      </div>
    </div>
  )
}
