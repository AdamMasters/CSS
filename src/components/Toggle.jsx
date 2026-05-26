export default function Toggle({ label, value, options, onChange }) {
  return (
    <div className="ctrl-group">
      {label && <label className="ctrl-label">{label}</label>}
      <div className="ctrl-toggle-row">
        {options.map(opt => {
          const val = typeof opt === 'string' ? opt : opt.value
          const lbl = typeof opt === 'string' ? opt : opt.label
          return (
            <button
              key={val}
              className={`ctrl-toggle-btn${value === val ? ' active' : ''}`}
              onClick={() => onChange(val)}
            >
              {lbl}
            </button>
          )
        })}
      </div>
    </div>
  )
}
