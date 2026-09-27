import { useState } from 'react'
import Playground from '../../components/Playground'
import Slider from '../../components/Slider'
import Toggle from '../../components/Toggle'

function hslToRgb(h, s, l) {
  s /= 100; l /= 100
  const k = n => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  return [Math.round(f(0)*255), Math.round(f(8)*255), Math.round(f(4)*255)]
}
function toHex(r, g, b) { return '#' + [r,g,b].map(x => x.toString(16).padStart(2,'0')).join('') }

export default function Colors() {
  // HSL mixer
  const [hue, setHue] = useState(258)
  const [sat, setSat] = useState(70)
  const [lit, setLit] = useState(60)
  const [alpha, setAlpha] = useState(100)

  // Gradient
  const [gradType, setGradType] = useState('linear')
  const [gradAngle, setGradAngle] = useState(135)
  const [color1, setColor1] = useState('#6c47ff')
  const [color2, setColor2] = useState('#ff6b6b')
  const [color3, setColor3] = useState('#ffd43b')
  const [stops, setStops] = useState(2)

  const hex = toHex(...hslToRgb(hue, sat, lit))
  const [r, g, b] = hslToRgb(hue, sat, lit)
  const colorStr = `hsl(${hue}, ${sat}%, ${lit}%)`
  const colorStrAlpha = alpha < 100 ? `hsla(${hue}, ${sat}%, ${lit}%, ${(alpha/100).toFixed(2)})` : colorStr

  const gradColors = stops === 2 ? `${color1}, ${color2}` : `${color1}, ${color2}, ${color3}`
  const gradValue = gradType === 'linear'
    ? `linear-gradient(${gradAngle}deg, ${gradColors})`
    : gradType === 'radial'
      ? `radial-gradient(circle, ${gradColors})`
      : `conic-gradient(from ${gradAngle}deg, ${gradColors})`

  const hslCode = `.element {
  color: hsl(${hue}, ${sat}%, ${lit}%);
  /* equivalent formats: */
  color: ${hex};
  color: rgb(${r}, ${g}, ${b});${alpha < 100 ? `\n  color: hsla(${hue}, ${sat}%, ${lit}%, ${(alpha/100).toFixed(2)});` : ''}
}`

  const gradCode = `.element {
  background: ${gradValue};
}`

  return (
    <div className="module">
      <div className="module-header">
        <span className="module-badge">Module 7</span>
        <h1 className="module-title">Colours & Backgrounds</h1>
        <p className="module-intro">
          CSS supports multiple colour formats and a powerful set of background properties.
          Understanding colour theory and gradients unlocks a huge range of visual effects.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Colour formats</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 10, maxWidth: 720, marginBottom: 16 }}>
          {[
            { fmt: 'Named', ex: 'red, cornflowerblue', note: '148 named colours. Good for prototyping, not production.' },
            { fmt: 'Hex', ex: '#6c47ff, #fff', note: '3 or 6 hex digits (RGB). Add 2 more for alpha (#6c47ffcc).' },
            { fmt: 'RGB', ex: 'rgb(108, 71, 255)', note: 'Red, Green, Blue 0–255. Add alpha: rgba(108,71,255,0.5).' },
            { fmt: 'HSL', ex: 'hsl(258, 70%, 60%)', note: 'Hue (0-360°), Saturation, Lightness. Most human-readable.' },
            { fmt: 'oklch', ex: 'oklch(60% 0.2 270)', note: 'Modern perceptual colour space. Uniform brightness steps.' },
          ].map(({ fmt, ex, note }) => (
            <div key={fmt} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 8, padding: 12 }}>
              <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4 }}>{fmt}</div>
              <code style={{ fontSize: 11, color: 'var(--primary)', display: 'block', marginBottom: 4 }}>{ex}</code>
              <p style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.5 }}>{note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">HSL Colour Mixer</h2>
        <p className="section-text">
          HSL is the most intuitive format for humans. Hue selects the colour on the wheel,
          Saturation controls vividness, and Lightness controls brightness.
        </p>

        <Playground
          title="HSL Colour Explorer"
          code={hslCode}
          controls={
            <>
              <Slider label="Hue" value={hue} min={0} max={360} unit="°" onChange={setHue} />
              <Slider label="Saturation" value={sat} min={0} max={100} unit="%" onChange={setSat} />
              <Slider label="Lightness" value={lit} min={0} max={100} unit="%" onChange={setLit} />
              <Slider label="Alpha" value={alpha} min={0} max={100} unit="%" onChange={setAlpha} />
              <hr className="ctrl-divider" />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6, fontSize: 11, fontFamily: 'monospace' }}>
                {[['HEX', hex], ['R', r], ['G', g], ['B', b]].map(([k, v]) => (
                  <div key={k} style={{ background: 'var(--surface2)', borderRadius: 6, padding: '6px 8px', textAlign: 'center' }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: 10 }}>{k}</div>
                    <div style={{ color: 'var(--primary)', fontWeight: 700 }}>{v}</div>
                  </div>
                ))}
              </div>
            </>
          }
          minHeight={200}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <div style={{
              width: 160, height: 160,
              borderRadius: '50%',
              background: colorStrAlpha,
              boxShadow: `0 8px 40px ${colorStr}88`,
              transition: 'background .1s, box-shadow .1s',
            }} />
            <div style={{ textAlign: 'center', fontFamily: 'monospace', fontSize: 13 }}>
              <div style={{ color: 'var(--text-muted)', marginBottom: 4 }}>hsl({hue}, {sat}%, {lit}%)</div>
              <div style={{ color: 'var(--text-muted)' }}>{hex.toUpperCase()}</div>
            </div>
          </div>
        </Playground>
      </div>

      <div className="section">
        <h2 className="section-title">Gradients</h2>
        <p className="section-text">
          Gradients are generated images, used in the <code>background</code> property.
          CSS supports linear, radial, and conic gradients.
        </p>

        <Playground
          title="Gradient Builder"
          code={gradCode}
          controls={
            <>
              <Toggle label="Type" value={gradType} options={['linear','radial','conic']} onChange={setGradType} />
              {gradType !== 'radial' && (
                <Slider label={gradType === 'linear' ? 'Angle' : 'Start angle'} value={gradAngle} min={0} max={360} unit="°" onChange={setGradAngle} />
              )}
              <Toggle label="Colour stops" value={String(stops)} options={[{ value: '2', label: '2 stops' }, { value: '3', label: '3 stops' }]}
                onChange={v => setStops(Number(v))} />
              <div className="ctrl-group">
                <label className="ctrl-label">Colour 1</label>
                <input type="color" value={color1} onChange={e => setColor1(e.target.value)}
                  style={{ width: '100%', height: 32, border: '1px solid var(--border)', borderRadius: 6, cursor: 'pointer', padding: 2 }} />
              </div>
              <div className="ctrl-group">
                <label className="ctrl-label">Colour 2</label>
                <input type="color" value={color2} onChange={e => setColor2(e.target.value)}
                  style={{ width: '100%', height: 32, border: '1px solid var(--border)', borderRadius: 6, cursor: 'pointer', padding: 2 }} />
              </div>
              {stops === 3 && (
                <div className="ctrl-group">
                  <label className="ctrl-label">Colour 3</label>
                  <input type="color" value={color3} onChange={e => setColor3(e.target.value)}
                    style={{ width: '100%', height: 32, border: '1px solid var(--border)', borderRadius: 6, cursor: 'pointer', padding: 2 }} />
                </div>
              )}
            </>
          }
          minHeight={200}
        >
          <div style={{
            width: 220, height: 220,
            borderRadius: 16,
            background: gradValue,
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
            transition: 'background .2s',
          }} />
        </Playground>
      </div>

      <div className="section">
        <h2 className="section-title">currentColor</h2>
        <p className="section-text">
          <code>currentColor</code> is a special keyword that refers to the element's
          current <code>color</code> value. Use it to keep SVG icons, borders, and
          box-shadows in sync with your text colour — change one property and
          everything updates.
        </p>
        <div className="callout">
          <strong>Example:</strong> <code>border: 2px solid currentColor</code> — the border
          will always match the text colour, even when inherited from a parent.
        </div>
      </div>
    </div>
  )
}
