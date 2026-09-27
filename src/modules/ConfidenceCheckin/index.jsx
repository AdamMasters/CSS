import { useState, useEffect } from 'react'
import Slider from '../../components/Slider'

const TOPICS = [
  { id: 'box-model',   label: 'Box Model' },
  { id: 'display',     label: 'Display & Flow' },
  { id: 'positioning', label: 'Positioning' },
  { id: 'flexbox',     label: 'Flexbox' },
  { id: 'grid',        label: 'CSS Grid' },
  { id: 'typography',  label: 'Typography' },
  { id: 'colors',      label: 'Colours & Backgrounds' },
  { id: 'transitions', label: 'Transitions & Animations' },
  { id: 'responsive',  label: 'Responsive Design' },
  { id: 'modals',      label: 'Modals & Overlays' },
]

const STORAGE_KEY = 'css-fundamentals-confidence'

function loadSaved() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (saved && typeof saved === 'object') return saved
  } catch {
    /* corrupt or missing — fall back to defaults */
  }
  return {}
}

export default function ConfidenceCheckin() {
  const [scores, setScores] = useState(() => {
    const saved = loadSaved()
    const initial = {}
    TOPICS.forEach(t => { initial[t.id] = saved[t.id] ?? 5 })
    return initial
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(scores))
  }, [scores])

  const setScore = (id, value) => setScores(prev => ({ ...prev, [id]: value }))

  const average = (Object.values(scores).reduce((a, b) => a + b, 0) / TOPICS.length).toFixed(1)
  const focusAreas = TOPICS.filter(t => scores[t.id] <= 4)

  return (
    <div className="module">
      <div className="module-header">
        <span className="module-badge">Self-assessment</span>
        <h1 className="module-title">Confidence Check-in</h1>
        <p className="module-intro">
          Before you start building your own website, rate how confident you feel using each CSS
          topic below, and how likely you are to actually use it in your project. This isn't marked
          — it's so you can spot what's worth revising before you rely on it.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Rate each topic</h2>
        <p className="section-text">
          0 = "I've never really used this", 10 = "I could teach this to someone else."
        </p>
        <div className="confidence-list">
          {TOPICS.map(topic => (
            <div className="confidence-row" key={topic.id}>
              <Slider
                label={topic.label}
                value={scores[topic.id]}
                min={0}
                max={10}
                unit="/10"
                onChange={value => setScore(topic.id, value)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Your summary</h2>
        <div className="callout">
          <strong>Average confidence: {average}/10.</strong>{' '}
          {focusAreas.length > 0
            ? <>Worth revisiting before you build: {focusAreas.map(t => t.label).join(', ')}.</>
            : "Nothing scored 4 or below — you're in a good position to start building."}
        </div>
      </div>

      <div className="section">
        <p className="section-text">
          Your ratings are saved in this browser only, so you can come back and update them as you
          get more practice. A printable version of this check-in is also available in the WJEC
          assessment pack for paper-based classes.
        </p>
      </div>
    </div>
  )
}
