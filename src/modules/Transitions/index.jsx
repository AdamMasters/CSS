import { useState } from 'react'
import Playground from '../../components/Playground'
import Slider from '../../components/Slider'
import Select from '../../components/Select'
import Toggle from '../../components/Toggle'

const KEYFRAME_PRESETS = {
  bounce: `@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-40px); }
}`,
  spin: `@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}`,
  pulse: `@keyframes pulse {
  0%, 100% { transform: scale(1);    opacity: 1; }
  50%       { transform: scale(1.25); opacity: 0.7; }
}`,
  fadeIn: `@keyframes fadeIn {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}`,
  shake: `@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%       { transform: translateX(-10px); }
  40%       { transform: translateX(10px); }
  60%       { transform: translateX(-8px); }
  80%       { transform: translateX(8px); }
}`,
  wave: `@keyframes wave {
  0%   { transform: rotate(0deg); }
  25%  { transform: rotate(20deg); }
  75%  { transform: rotate(-20deg); }
  100% { transform: rotate(0deg); }
}`,
}

export default function Transitions() {
  // Transition tab
  const [duration, setDuration] = useState(400)
  const [delay, setDelay] = useState(0)
  const [easing, setEasing] = useState('ease')
  const [prop, setProp] = useState('all')
  const [hovered, setHovered] = useState(false)

  // Animation tab
  const [preset, setPreset] = useState('bounce')
  const [animDuration, setAnimDuration] = useState(800)
  const [iterCount, setIterCount] = useState('infinite')
  const [animKey, setAnimKey] = useState(0)
  const [running, setRunning] = useState(true)

  const transitionCode = `.box {
  background: #6c47ff;
  border-radius: 8px;
  transform: scale(1);
  transition: ${prop} ${duration}ms ${easing} ${delay}ms;
}
.box:hover {
  background: #ff6b6b;
  border-radius: 50%;
  transform: scale(1.3);
}`

  const animCode = `${KEYFRAME_PRESETS[preset]}

.box {
  animation: ${preset} ${animDuration}ms ${easing} ${iterCount};
  animation-play-state: ${running ? 'running' : 'paused'};
}`

  function restartAnim() {
    setRunning(false)
    setTimeout(() => { setAnimKey(k => k + 1); setRunning(true) }, 50)
  }

  return (
    <div className="module">
      <div className="module-header">
        <span className="module-badge">Module 8</span>
        <h1 className="module-title">Transitions & Animations</h1>
        <p className="module-intro">
          CSS transitions smoothly interpolate between two states on trigger (like hover).
          CSS animations run independently on a timeline, with full keyframe control.
          Together they bring interfaces to life.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Transitions</h2>
        <p className="section-text">
          A transition tells the browser: "when a property changes, animate that change
          over time." You define <em>which</em> property, <em>how long</em>, and
          <em> how</em> (the timing function).
        </p>

        <Playground
          title="Transition Explorer — hover the box"
          code={transitionCode}
          controls={
            <>
              <Select label="transition-property" value={prop}
                options={['all','background','transform','border-radius','color','opacity']}
                onChange={setProp} />
              <Slider label="duration" value={duration} min={0} max={2000} step={50} unit="ms" onChange={setDuration} />
              <Slider label="delay" value={delay} min={0} max={1000} step={50} unit="ms" onChange={setDelay} />
              <Select label="timing-function" value={easing}
                options={['ease','linear','ease-in','ease-out','ease-in-out','cubic-bezier(0.34,1.56,0.64,1)']}
                onChange={setEasing} />
              <p style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Hover the box in the preview to see the transition.
              </p>
            </>
          }
        >
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              width: 100, height: 100,
              background: hovered ? '#ff6b6b' : '#6c47ff',
              borderRadius: hovered ? '50%' : '8px',
              transform: hovered ? 'scale(1.3)' : 'scale(1)',
              transition: `${prop} ${duration}ms ${easing} ${delay}ms`,
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontWeight: 700, fontSize: 12, fontFamily: 'monospace',
            }}
          >
            hover me
          </div>
        </Playground>
      </div>

      <div className="section">
        <h2 className="section-title">Timing functions</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 10, maxWidth: 700 }}>
          {[
            { name: 'ease', desc: 'Slow → fast → slow. Default.' },
            { name: 'linear', desc: 'Constant speed throughout.' },
            { name: 'ease-in', desc: 'Starts slow, ends fast.' },
            { name: 'ease-out', desc: 'Starts fast, ends slow. Natural.' },
            { name: 'ease-in-out', desc: 'Slow start and end. Smooth.' },
            { name: 'cubic-bezier', desc: 'Custom curve — any shape.' },
          ].map(({ name, desc }) => (
            <div key={name} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 8, padding: 10 }}>
              <code style={{ fontSize: 12, color: 'var(--primary)', fontWeight: 700 }}>{name}</code>
              <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4, lineHeight: 1.4 }}>{desc}</p>
            </div>
          ))}
        </div>
        <div className="callout" style={{ marginTop: 16 }}>
          <strong>Rule of thumb:</strong> Use <code>ease-out</code> for things entering the screen
          (feels natural), <code>ease-in</code> for things leaving (picks up speed as they go).
          Avoid <code>linear</code> for UI — it feels mechanical.
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">CSS Animations</h2>
        <p className="section-text">
          Animations use <code>@keyframes</code> to define states at arbitrary points
          in a timeline (0% to 100%), then attach that timeline to an element
          with the <code>animation</code> property.
        </p>

        <Playground
          title="Animation Playground"
          code={animCode}
          controls={
            <>
              <Toggle label="Preset" value={preset}
                options={Object.keys(KEYFRAME_PRESETS)} onChange={v => { setPreset(v); restartAnim() }} />
              <Slider label="duration" value={animDuration} min={200} max={3000} step={100} unit="ms" onChange={setAnimDuration} />
              <Select label="easing" value={easing}
                options={['ease','linear','ease-in','ease-out','ease-in-out']}
                onChange={setEasing} />
              <div className="ctrl-group">
                <label className="ctrl-label">iteration-count</label>
                <div className="ctrl-toggle-row">
                  {['1','2','3','infinite'].map(v => (
                    <button key={v} className={`ctrl-toggle-btn${iterCount === v ? ' active' : ''}`}
                      onClick={() => setIterCount(v)}>{v}</button>
                  ))}
                </div>
              </div>
              <div className="ctrl-toggle-row" style={{ marginTop: 4 }}>
                <button className="ctrl-toggle-btn" onClick={restartAnim}>↺ Replay</button>
                <button className={`ctrl-toggle-btn${!running ? ' active' : ''}`} onClick={() => setRunning(r => !r)}>
                  {running ? '⏸ Pause' : '▶ Resume'}
                </button>
              </div>
            </>
          }
        >
          <style>{`
            @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-44px)} }
            @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
            @keyframes pulse { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.25);opacity:.7} }
            @keyframes fadeIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
            @keyframes shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-12px)} 40%{transform:translateX(12px)} 60%{transform:translateX(-8px)} 80%{transform:translateX(8px)} }
            @keyframes wave { 0%{transform:rotate(0deg)} 25%{transform:rotate(20deg)} 75%{transform:rotate(-20deg)} 100%{transform:rotate(0deg)} }
          `}</style>
          <div
            key={animKey}
            style={{
              width: 80, height: 80,
              background: 'linear-gradient(135deg, #6c47ff, #ff6b6b)',
              borderRadius: 16,
              animation: `${preset} ${animDuration}ms ${easing} ${iterCount}`,
              animationPlayState: running ? 'running' : 'paused',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 28,
            }}
          >
            {preset === 'wave' ? '👋' : '⭐'}
          </div>
        </Playground>
      </div>

      <div className="section">
        <h2 className="section-title">Performance: what's safe to animate</h2>
        <p className="section-text">
          Not all properties are equal. The browser pipeline has two cheap-to-animate
          properties that run on the GPU compositor thread (no layout recompute):
        </p>
        <div className="callout">
          <strong>Cheap (GPU):</strong> <code>transform</code> and <code>opacity</code><br /><br />
          <strong>Expensive (triggers layout):</strong> <code>width</code>, <code>height</code>,
          <code> margin</code>, <code>top</code>, <code>left</code> — avoid animating these.<br /><br />
          <strong>Rule:</strong> If you want to move something, use <code>transform: translate()</code>
          instead of changing <code>top</code>/<code>left</code>.
        </div>
      </div>
    </div>
  )
}
