import { useState } from 'react'
import Playground from '../../components/Playground'
import Select from '../../components/Select'
import Slider from '../../components/Slider'
import Toggle from '../../components/Toggle'

const BOX_COLORS = ['#6c47ff', '#ff6b6b', '#20c997', '#ffd43b', '#4dabf7', '#f783ac', '#a9e34b', '#ff922b']

export default function Flexbox() {
  // Container props
  const [direction, setDirection] = useState('row')
  const [justify, setJustify] = useState('flex-start')
  const [align, setAlign] = useState('stretch')
  const [wrap, setWrap] = useState('nowrap')
  const [gap, setGap] = useState(12)
  const [itemCount, setItemCount] = useState(5)

  // Selected item props
  const [selectedItem, setSelectedItem] = useState(0)
  const [growValues, setGrowValues] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const [shrinkValues, setShrinkValues] = useState([1, 1, 1, 1, 1, 1, 1, 1])
  const [basisValues, setBasisValues] = useState(['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'])

  const setGrow = (i, v) => setGrowValues(prev => { const n = [...prev]; n[i] = v; return n })
  const setShrink = (i, v) => setShrinkValues(prev => { const n = [...prev]; n[i] = v; return n })

  const containerCode = `.container {
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
  flex-wrap: ${wrap};
  gap: ${gap}px;
}`

  const itemCode = `.item-${selectedItem + 1} {
  flex-grow: ${growValues[selectedItem]};
  flex-shrink: ${shrinkValues[selectedItem]};
  flex-basis: ${basisValues[selectedItem]};
}`

  return (
    <div className="module">
      <div className="module-header">
        <span className="module-badge">Module 4</span>
        <h1 className="module-title">Flexbox</h1>
        <p className="module-intro">
          Flexbox is a one-dimensional layout model that distributes space and aligns items
          along a single axis — either a row or a column. It solves alignment problems that
          were famously painful before CSS3.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Container vs Item properties</h2>
        <p className="section-text">
          Flex properties are split between the <strong>container</strong> (the parent with
          <code> display: flex</code>) and the <strong>items</strong> (direct children).
          Container properties control distribution and alignment of all items.
          Item properties let individual items opt-in to special behaviour.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Container Properties</h2>
        <Playground
          title="Flexbox Container Playground"
          code={containerCode}
          controls={
            <>
              <Toggle label="flex-direction" value={direction}
                options={['row', 'row-reverse', 'column', 'column-reverse']} onChange={setDirection} />
              <Select label="justify-content" value={justify}
                options={['flex-start','flex-end','center','space-between','space-around','space-evenly']}
                onChange={setJustify} />
              <Select label="align-items" value={align}
                options={['flex-start','flex-end','center','stretch','baseline']}
                onChange={setAlign} />
              <Toggle label="flex-wrap" value={wrap}
                options={['nowrap','wrap','wrap-reverse']} onChange={setWrap} />
              <Slider label="gap" value={gap} min={0} max={40} unit="px" onChange={setGap} />
              <Slider label="Number of items" value={itemCount} min={2} max={8} onChange={setItemCount} />
            </>
          }
          minHeight={280}
        >
          <div style={{
            display: 'flex',
            flexDirection: direction,
            justifyContent: justify,
            alignItems: align,
            flexWrap: wrap,
            gap,
            width: direction.startsWith('column') ? 'auto' : '100%',
            height: direction.startsWith('column') ? 240 : 'auto',
            minHeight: 100,
            padding: 8,
          }}>
            {Array.from({ length: itemCount }, (_, i) => (
              <div key={i} style={{
                background: BOX_COLORS[i % BOX_COLORS.length],
                width: direction.startsWith('column') ? 60 : (i % 3 === 0 ? 80 : 60),
                height: direction.startsWith('column') ? 40 : (i % 3 === 1 ? 72 : 56),
                borderRadius: 6,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontWeight: 700, fontSize: 14, fontFamily: 'monospace',
                flexShrink: shrinkValues[i],
                flexGrow: growValues[i],
                flexBasis: basisValues[i] !== 'auto' ? basisValues[i] : undefined,
              }}>{i + 1}</div>
            ))}
          </div>
        </Playground>
      </div>

      <div className="section">
        <h2 className="section-title">Item Properties</h2>
        <p className="section-text">
          Click a box number below, then adjust its individual flex properties.
          These three properties control how items grow, shrink, and what size they start at.
        </p>

        <Playground
          title="Flex Item Properties"
          code={itemCode}
          controls={
            <>
              <div className="ctrl-group">
                <label className="ctrl-label">Select item to configure</label>
                <div className="ctrl-toggle-row">
                  {Array.from({ length: itemCount }, (_, i) => (
                    <button key={i}
                      className={`ctrl-toggle-btn${selectedItem === i ? ' active' : ''}`}
                      onClick={() => setSelectedItem(i)}>
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
              <Slider label="flex-grow" value={growValues[selectedItem]} min={0} max={5}
                onChange={v => setGrow(selectedItem, v)} />
              <Slider label="flex-shrink" value={shrinkValues[selectedItem]} min={0} max={5}
                onChange={v => setShrink(selectedItem, v)} />
              <div className="ctrl-group">
                <label className="ctrl-label">flex-basis
                  <span className="ctrl-value">{basisValues[selectedItem]}</span>
                </label>
                <div className="ctrl-toggle-row">
                  {['auto', '80px', '120px', '200px'].map(v => (
                    <button key={v}
                      className={`ctrl-toggle-btn${basisValues[selectedItem] === v ? ' active' : ''}`}
                      onClick={() => setBasisValues(prev => { const n=[...prev]; n[selectedItem]=v; return n })}>
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            </>
          }
          minHeight={100}
        >
          <div style={{ display: 'flex', gap: 10, width: '100%', padding: 8 }}>
            {Array.from({ length: itemCount }, (_, i) => (
              <div key={i}
                onClick={() => setSelectedItem(i)}
                style={{
                  background: selectedItem === i ? BOX_COLORS[i % BOX_COLORS.length] : BOX_COLORS[i % BOX_COLORS.length] + '99',
                  height: 60,
                  borderRadius: 6,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontWeight: 700, fontSize: 13, fontFamily: 'monospace',
                  flexGrow: growValues[i],
                  flexShrink: shrinkValues[i],
                  flexBasis: basisValues[i] !== 'auto' ? basisValues[i] : undefined,
                  cursor: 'pointer',
                  outline: selectedItem === i ? `3px solid ${BOX_COLORS[i % BOX_COLORS.length]}` : 'none',
                  outlineOffset: 3,
                  transition: 'all .2s',
                  minWidth: 30,
                }}>{i + 1}</div>
            ))}
          </div>
        </Playground>
      </div>

      <div className="section">
        <h2 className="section-title">The flex shorthand</h2>
        <p className="section-text">
          Rather than setting <code>flex-grow</code>, <code>flex-shrink</code>, and
          <code> flex-basis</code> separately, use the shorthand:
        </p>
        <div className="callout">
          <code>flex: 1</code> → grow: 1, shrink: 1, basis: 0% — items share all available space equally.<br />
          <code>flex: auto</code> → grow: 1, shrink: 1, basis: auto — items grow/shrink from natural size.<br />
          <code>flex: none</code> → grow: 0, shrink: 0, basis: auto — item stays its natural size.<br />
          <br />
          <strong>Best practice:</strong> Prefer the shorthand — it sets all three values reliably and avoids gotchas.
        </div>
      </div>
    </div>
  )
}
