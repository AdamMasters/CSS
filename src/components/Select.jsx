export default function Select({ label, value, options, onChange }) {
  return (
    <div className="ctrl-group">
      {label && <label className="ctrl-label">{label}</label>}
      <select
        className="ctrl-select"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {options.map(opt => {
          const val = typeof opt === 'string' ? opt : opt.value
          const lbl = typeof opt === 'string' ? opt : opt.label
          return <option key={val} value={val}>{lbl}</option>
        })}
      </select>
    </div>
  )
}
