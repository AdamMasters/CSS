import { useState, lazy, Suspense } from 'react'
import CMFloatAd from './components/CMFloatAd'
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
            <span className="logo-icon">
              <img src="/exeter-college-black-text.svg" width="150" alt="Exeter College" />
              <img className="left-gap"src="/favicon.svg" width="64" alt="Course icon" />
            </span>
            <div>
              <span className="logo-title">CSS Fundamentals</span>
              <span className="logo-sub">T Level Interactive Course</span>
            </div>
          </div>
        </div>
        <div style={{ height: 3, background: 'var(--border)' }}>
          <div className="progress-bar" style={{ width: `${progress}%` }} />
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
      <CMFloatAd color="var(--primary)"   />
    </div>
  )
}
