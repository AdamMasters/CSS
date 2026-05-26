import { useState } from 'react'
import Playground from '../../components/Playground'
import Slider from '../../components/Slider'
import Select from '../../components/Select'
import Toggle from '../../components/Toggle'

const SAMPLE = `The quick brown fox jumps over the lazy dog. Typography is the art and technique of arranging type to make written language readable and appealing.`

const FONTS = [
  'system-ui, sans-serif',
  "'Segoe UI', sans-serif",
  'Georgia, serif',
  "'Times New Roman', serif",
  'Courier New, monospace',
  'Impact, sans-serif',
]

export default function Typography() {
  const [fontSize, setFontSize] = useState(18)
  const [fontWeight, setFontWeight] = useState(400)
  const [lineHeight, setLineHeight] = useState(1.6)
  const [letterSpacing, setLetterSpacing] = useState(0)
  const [wordSpacing, setWordSpacing] = useState(0)
  const [fontFamily, setFontFamily] = useState(FONTS[0])
  const [textAlign, setTextAlign] = useState('left')
  const [textTransform, setTextTransform] = useState('none')
  const [color, setColor] = useState('#1a1523')

  const style = {
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing: `${letterSpacing}px`,
    wordSpacing: `${wordSpacing}px`,
    textAlign,
    textTransform,
    color,
    maxWidth: 400,
    transition: 'all .2s',
  }

  const code = `p {
  font-family: ${fontFamily};
  font-size: ${fontSize}px;
  font-weight: ${fontWeight};
  line-height: ${lineHeight};
  letter-spacing: ${letterSpacing}px;
  word-spacing: ${wordSpacing}px;
  text-align: ${textAlign};
  text-transform: ${textTransform};
  color: ${color};
}`

  return (
    <div className="module">
      <div className="module-header">
        <span className="module-badge">Module 6</span>
        <h1 className="module-title">Typography</h1>
        <p className="module-intro">
          Typography controls how text looks and feels. Done well it's invisible —
          readers absorb content without noticing it. Done poorly, it actively
          drives people away. CSS gives you deep control over every aspect.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Typography Playground</h2>
        <Playground
          title="Live Text Explorer"
          code={code}
          controls={
            <>
              <Select label="font-family" value={fontFamily} options={FONTS.map(f => ({ value: f, label: f.split(',')[0].replace(/'/g, '') }))} onChange={setFontFamily} />
              <Slider label="font-size" value={fontSize} min={10} max={56} unit="px" onChange={setFontSize} />
              <Slider label="font-weight" value={fontWeight} min={100} max={900} step={100} onChange={setFontWeight} />
              <Slider label="line-height" value={lineHeight} min={0.8} max={3} step={0.1} onChange={setLineHeight} />
              <Slider label="letter-spacing" value={letterSpacing} min={-3} max={12} step={0.5} unit="px" onChange={setLetterSpacing} />
              <Slider label="word-spacing" value={wordSpacing} min={0} max={20} step={1} unit="px" onChange={setWordSpacing} />
              <hr className="ctrl-divider" />
              <Toggle label="text-align" value={textAlign} options={['left','center','right','justify']} onChange={setTextAlign} />
              <Toggle label="text-transform" value={textTransform} options={['none','uppercase','lowercase','capitalize']} onChange={setTextTransform} />
              <div className="ctrl-group">
                <label className="ctrl-label">color <span className="ctrl-value">{color}</span></label>
                <input type="color" value={color} onChange={e => setColor(e.target.value)}
                  style={{ width: '100%', height: 32, border: '1px solid var(--border)', borderRadius: 6, cursor: 'pointer', padding: 2 }} />
              </div>
            </>
          }
          minHeight={220}
        >
          <p style={style}>{SAMPLE}</p>
        </Playground>
      </div>

      <div className="section">
        <h2 className="section-title">The font stack</h2>
        <p className="section-text">
          <code>font-family</code> accepts a comma-separated list — the browser uses the
          first font it can find on the user's system. Always end with a generic family:
          <code> serif</code>, <code>sans-serif</code>, or <code>monospace</code>.
        </p>
        <div className="callout">
          <strong>System font stack</strong> — loads instantly, matches the OS:<br />
          <code>font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;</code>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">line-height: unitless is best</h2>
        <p className="section-text">
          Prefer unitless values like <code>1.6</code> over <code>24px</code>. A unitless
          value is a multiplier of the element's own font-size — so it scales correctly
          when font size changes, and inherits sensibly into child elements.
        </p>
        <p className="section-text">
          Body text typically reads best at <strong>1.5–1.7</strong>. Headings at
          <strong> 1.1–1.3</strong>. Very large display type at <strong>0.9–1.1</strong>.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Relative units for type</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, maxWidth: 600 }}>
          {[
            { unit: 'px', desc: 'Absolute. Does not respond to user browser font size preferences.' },
            { unit: 'rem', desc: 'Relative to root font size (html). Best for consistent, accessible type sizing.' },
            { unit: 'em', desc: 'Relative to parent font size. Compounds — can cause unexpected sizing.' },
            { unit: 'clamp()', desc: 'Fluid: a min, a preferred (often vw-based), and a max. Responsive without media queries.' },
          ].map(({ unit, desc }) => (
            <div key={unit} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 8, padding: 12 }}>
              <code style={{ color: 'var(--primary)', fontWeight: 700 }}>{unit}</code>
              <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 6, lineHeight: 1.5 }}>{desc}</p>
            </div>
          ))}
        </div>
        <div className="callout" style={{ marginTop: 16 }}>
          <strong>Best practice:</strong> Use <code>rem</code> for font sizes in production.
          Set a base on <code>html</code> (<code>font-size: 62.5%</code> makes
          <code> 1.6rem = 16px</code>) and scale everything from there.
        </div>
      </div>
    </div>
  )
}
