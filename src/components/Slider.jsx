export default function Slider({ label, value, min, max, step = 1, unit = '', onChange }) {
  return (
    <div className="ctrl-group">
      <label className="ctrl-label">
        {label}
        <span className="ctrl-value">{value}{unit}</span>
      </label>
      <input
        type="range"
        className="ctrl-slider"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
      />
    </div>
  )
}
