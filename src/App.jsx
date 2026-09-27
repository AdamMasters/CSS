import { useState, lazy, Suspense } from 'react'
import './App.css'

const BoxModel    = lazy(() => import('./modules/BoxModel'))
const DisplayFlow = lazy(() => import('./modules/DisplayFlow'))
const Positioning = lazy(() => import('./modules/Positioning'))
const Flexbox     = lazy(() => import('./modules/Flexbox'))
const Grid        = lazy(() => import('./modules/Grid'))
const Typography  = lazy(() => import('./modules/Typography'))
const Colors      = lazy(() => import('./modules/Colors'))
const Transitions = lazy(() => import('./modules/Transitions'))
const Responsive  = lazy(() => import('./modules/Responsive'))
const Modals      = lazy(() => import('./modules/Modals'))
const ConfidenceCheckin = lazy(() => import('./modules/ConfidenceCheckin'))

const MODULES = [
  { id: 'box-model',    label: '1. Box Model',      component: BoxModel },
  { id: 'display',      label: '2. Display & Flow',  component: DisplayFlow },
  { id: 'positioning',  label: '3. Positioning',     component: Positioning },
  { id: 'flexbox',      label: '4. Flexbox',         component: Flexbox },
  { id: 'grid',         label: '5. CSS Grid',        component: Grid },
  { id: 'typography',   label: '6. Typography',      component: Typography },
  { id: 'colors',       label: '7. Colours',         component: Colors },
  { id: 'transitions',  label: '8. Animations',      component: Transitions },
  { id: 'responsive',   label: '9. Responsive',      component: Responsive },
  { id: 'modals',       label: '10. Modals',         component: Modals },
  { id: 'confidence',   label: '11. Confidence Check-in', component: ConfidenceCheckin },
]

export default function App() {
  const [active, setActive] = useState(0)
  const ActiveModule = MODULES[active].component
  const progress = ((active + 1) / MODULES.length) * 100

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <div className="logo">
            <img className="course-mark" src="/favicon.svg" alt="CSS Fundamentals" />
          </div>
        </div>
        <div className="progress-track">
          <div className="progress-bar" style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
        <nav className="tab-nav" role="tablist" aria-label="Course modules">
          {MODULES.map((mod, i) => (
            <button
              key={mod.id}
              role="tab"
              aria-selected={active === i}
              className={`tab-btn${active === i ? ' active' : ''}`}
              onClick={() => setActive(i)}
            >
              {mod.label}
            </button>
          ))}
        </nav>
      </header>
      <main className="app-main">
        <Suspense fallback={<div style={{ padding: 40, color: 'var(--text-muted)' }}>Loading module…</div>}>
          <ActiveModule />
        </Suspense>
      </main>
      <footer className="app-footer">
        <p>Designed by Adam Masters</p>
        <p>Course materials based on CSS Fundamentals by Simon Rundell, Exeter College.</p>
      </footer>
    </div>
  )
}
