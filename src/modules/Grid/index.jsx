import { useState } from 'react'
import Playground from '../../components/Playground'
import Slider from '../../components/Slider'
import Toggle from '../../components/Toggle'

const CELL_COLORS = ['#6c47ff','#ff6b6b','#20c997','#ffd43b','#4dabf7','#f783ac','#a9e34b','#ff922b','#cc5de8','#74c0fc','#63e6be','#ffa94d']

const PRESETS = [
  { label: '3-col equal', cols: 'repeat(3, 1fr)', rows: 'auto' },
  { label: '2-col + aside', cols: '2fr 1fr', rows: 'auto' },
  { label: 'Holy Grail', cols: '200px 1fr 200px', rows: 'auto' },
  { label: 'auto-fit', cols: 'repeat(auto-fit, minmax(100px, 1fr))', rows: 'auto' },
]

export default function Grid() {
  const [cols, setCols] = useState('repeat(3, 1fr)')
  const [rows, setRows] = useState('auto')
  const [gap, setGap] = useState(12)
  const [itemCount, setItemCount] = useState(9)
  const [showLines, setShowLines] = useState(false)
  const [preset, setPreset] = useState(0)

  function applyPreset(i) {
    setPreset(i)
    setCols(PRESETS[i].cols)
    setRows(PRESETS[i].rows)
  }

  const code = `.grid {
  display: grid;
  grid-template-columns: ${cols};
  grid-template-rows: ${rows};
  gap: ${gap}px;
}`

  return (
    <div className="module">
      <div className="module-header">
        <span className="module-badge">Module 5</span>
        <h1 className="module-title">CSS Grid</h1>
        <p className="module-intro">
          Grid is a two-dimensional layout system — it works with rows <em>and</em> columns
          simultaneously. Where Flexbox solves one axis at a time, Grid lets you design
          the whole page structure at once.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Grid concepts</h2>
        <p className="section-text">
          A grid is defined on the <strong>container</strong> with <code>display: grid</code>.
          You then define <strong>tracks</strong> (columns and rows) using
          <code> grid-template-columns</code> and <code>grid-template-rows</code>.
          Children automatically place themselves into cells.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12, maxWidth: 750, marginBottom: 8 }}>
          {[
            { term: 'Track', def: 'A single row or column.' },
            { term: 'Cell', def: 'The intersection of a row and column track.' },
            { term: 'Area', def: 'One or more cells combined into a named region.' },
            { term: 'Line', def: 'The dividing line between tracks. Numbered 1, 2, 3…' },
            { term: '1fr', def: 'One fractional unit of available space after fixed tracks are placed.' },
            { term: 'gap', def: 'Space between tracks (replaces grid-gap).' },
          ].map(({ term, def }) => (
            <div key={term} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 8, padding: 12 }}>
              <code style={{ color: 'var(--primary)', fontWeight: 700, fontSize: 13 }}>{term}</code>
              <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4, lineHeight: 1.5 }}>{def}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Grid Playground</h2>

        <Playground
          title="CSS Grid Explorer"
          code={code}
          controls={
            <>
              <div className="ctrl-group">
                <label className="ctrl-label">Presets</label>
                <div className="ctrl-toggle-row">
                  {PRESETS.map((p, i) => (
                    <button key={i}
                      className={`ctrl-toggle-btn${preset === i ? ' active' : ''}`}
                      onClick={() => applyPreset(i)}>{p.label}</button>
                  ))}
                </div>
              </div>
              <hr className="ctrl-divider" />
              <div className="ctrl-group">
                <label className="ctrl-label">
                  grid-template-columns
                  <span className="ctrl-value" style={{ fontSize: 10 }}>{cols}</span>
                </label>
                <input
                  style={{ fontFamily: 'monospace', fontSize: 12, padding: '5px 8px', border: '1px solid var(--border)', borderRadius: 6, width: '100%' }}
                  value={cols}
                  onChange={e => { setCols(e.target.value); setPreset(-1) }}
                />
              </div>
              <div className="ctrl-group">
                <label className="ctrl-label">
                  grid-template-rows
                  <span className="ctrl-value" style={{ fontSize: 10 }}>{rows}</span>
                </label>
                <input
                  style={{ fontFamily: 'monospace', fontSize: 12, padding: '5px 8px', border: '1px solid var(--border)', borderRadius: 6, width: '100%' }}
                  value={rows}
                  onChange={e => { setRows(e.target.value); setPreset(-1) }}
                />
              </div>
              <Slider label="gap" value={gap} min={0} max={32} unit="px" onChange={setGap} />
              <Slider label="Number of items" value={itemCount} min={2} max={12} onChange={setItemCount} />
              <div className="ctrl-group">
                <label className="ctrl-label">Show grid lines
                  <input type="checkbox" checked={showLines} onChange={e => setShowLines(e.target.checked)} style={{ marginLeft: 6 }} />
                </label>
              </div>
            </>
          }
          minHeight={300}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: cols,
            gridTemplateRows: rows === 'auto' ? undefined : rows,
            gap,
            width: '100%',
            outline: showLines ? '1px dashed #bbb' : 'none',
          }}>
            {Array.from({ length: itemCount }, (_, i) => (
              <div key={i} style={{
                background: CELL_COLORS[i % CELL_COLORS.length],
                height: 56,
                borderRadius: 6,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontWeight: 700, fontSize: 14, fontFamily: 'monospace',
                outline: showLines ? '1px dashed rgba(255,255,255,0.4)' : 'none',
              }}>{i + 1}</div>
            ))}
          </div>
        </Playground>
      </div>

      <div className="section">
        <h2 className="section-title">Spanning items across cells</h2>
        <p className="section-text">
          Items can span multiple columns or rows using <code>grid-column</code> and
          <code> grid-row</code>. The values refer to grid line numbers.
        </p>

        <Playground
          title="Spanning Demo"
          code={`.grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
.hero   { grid-column: 1 / 3; /* spans columns 1-2 */ }
.tall   { grid-row: 1 / 3;    /* spans 2 rows */ }
.full   { grid-column: 1 / -1; /* span all columns */ }`}
          controls={
            <div style={{ fontSize: 13, lineHeight: 1.8, color: 'var(--text-muted)' }}>
              <p><code style={{ color: 'var(--primary)' }}>grid-column: 1 / 3</code> — start at line 1, end at line 3</p>
              <p style={{ marginTop: 8 }}><code style={{ color: 'var(--primary)' }}>grid-column: span 2</code> — span 2 tracks from wherever it falls</p>
              <p style={{ marginTop: 8 }}><code style={{ color: 'var(--primary)' }}>grid-column: 1 / -1</code> — from first to last line (full width)</p>
            </div>
          }
          minHeight={200}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, width: '100%' }}>
            <div style={{ gridColumn: '1 / 3', background: '#6c47ff', height: 64, borderRadius: 6, display:'flex',alignItems:'center',justifyContent:'center', color:'#fff', fontWeight:700, fontSize:12, fontFamily:'monospace' }}>1/3 span</div>
            <div style={{ background: '#ff6b6b', gridRow: '1 / 3', height: 138, borderRadius: 6, display:'flex',alignItems:'center',justifyContent:'center', color:'#fff', fontWeight:700, fontSize:12, fontFamily:'monospace' }}>2 rows</div>
            <div style={{ background: '#20c997', height: 64, borderRadius: 6, display:'flex',alignItems:'center',justifyContent:'center', color:'#fff', fontWeight:700, fontSize:12, fontFamily:'monospace' }}>4</div>
            <div style={{ background: '#ffd43b', height: 64, borderRadius: 6, display:'flex',alignItems:'center',justifyContent:'center', color:'#333', fontWeight:700, fontSize:12, fontFamily:'monospace' }}>5</div>
            <div style={{ background: '#4dabf7', height: 64, borderRadius: 6, display:'flex',alignItems:'center',justifyContent:'center', color:'#fff', fontWeight:700, fontSize:12, fontFamily:'monospace' }}>6</div>
            <div style={{ gridColumn: '1 / -1', background: '#f783ac', height: 48, borderRadius: 6, display:'flex',alignItems:'center',justifyContent:'center', color:'#fff', fontWeight:700, fontSize:12, fontFamily:'monospace' }}>full width (1 / -1)</div>
          </div>
        </Playground>
      </div>

      <div className="section">
        <h2 className="section-title">auto-fit vs auto-fill</h2>
        <p className="section-text">
          These two keywords — used inside <code>repeat()</code> — create responsive grids
          without media queries. Pair them with <code>minmax()</code>:
        </p>
        <div className="callout">
          <code>repeat(auto-fit, minmax(200px, 1fr))</code><br /><br />
          <strong>auto-fit:</strong> Collapses empty tracks — items grow to fill the row.<br />
          <strong>auto-fill:</strong> Keeps empty tracks — items keep their min size even if alone.<br /><br />
          The difference only shows when items don't fill the entire row.
        </div>
      </div>
    </div>
  )
}
