import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom'
import { useSSE } from './hooks/useSSE'
import { Dashboard } from './pages/Dashboard'
import { SharedScope } from './pages/SharedScope'
import { DependencyGraph } from './pages/DependencyGraph'
import type { FederationAggregate, CorrelatedView } from '@fed-prism/core'
import './styles/components.css'

// ─── Context for live data ────────────────────────────────────────────────────
// Pages consume via props for simplicity — no need for a separate context.

function Sidebar() {
  return (
    <aside className="app-sidebar">
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink to="/" end className={({ isActive }) => `nav-item${isActive ? ' nav-item--active' : ''}`}>
              <span>📊</span> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/graph" className={({ isActive }) => `nav-item${isActive ? ' nav-item--active' : ''}`}>
              <span>🕸️</span> Dep Graph
            </NavLink>
          </li>
          <li>
            <NavLink to="/shared" className={({ isActive }) => `nav-item${isActive ? ' nav-item--active' : ''}`}>
              <span>📦</span> Shared Scope
            </NavLink>
          </li>
          <li>
            <NavLink to="/timeline" className={({ isActive }) => `nav-item${isActive ? ' nav-item--active' : ''}`}>
              <span>⏱️</span> Timeline
            </NavLink>
          </li>
          <li>
            <NavLink to="/modules" className={({ isActive }) => `nav-item${isActive ? ' nav-item--active' : ''}`}>
              <span>🧩</span> Modules
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

function Header({
  status,
  aggregate,
}: {
  status: string
  aggregate: FederationAggregate | null
}) {
  const location = useLocation()
  const pageNames: Record<string, string> = {
    '/': 'Dashboard',
    '/graph': 'Dependency Graph',
    '/shared': 'Shared Scope',
    '/timeline': 'Load Timeline',
    '/modules': 'Module Explorer',
  }
  const pageName = pageNames[location.pathname] ?? 'FedPrism'
  const connected = status === 'connected'
  const appCount = aggregate ? Object.keys(aggregate.instances).length : 0

  return (
    <header className="app-header">
      <div className="app-header__logo">
        <div className="app-header__logo-mark">🔮</div>
        FedPrism
        <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>/ {pageName}</span>
      </div>
      {appCount > 0 && (
        <span className="app-header__app-count">
          {appCount} app{appCount !== 1 ? 's' : ''} connected
        </span>
      )}
      <div className="app-header__status">
        <div className={`status-dot${connected ? ' status-dot--connected' : status === 'reconnecting' ? ' status-dot--reconnecting' : ''}`} />
        {connected ? 'Live' : status === 'reconnecting' ? 'Reconnecting…' : 'Waiting for server…'}
      </div>
    </header>
  )
}

function ComingSoon({ page }: { page: string }) {
  return (
    <div className="empty-state">
      <div className="empty-state__icon">🚧</div>
      <h2 className="empty-state__title">{page}</h2>
      <p className="empty-state__body">This view is coming soon.</p>
    </div>
  )
}

interface AppRoutesProps {
  aggregate: FederationAggregate | null
  correlatedView: CorrelatedView | null
}

function AppRoutes({ aggregate, correlatedView }: AppRoutesProps) {
  return (
    <Routes>
      <Route path="/" element={<Dashboard aggregate={aggregate} correlatedView={correlatedView} />} />
      <Route path="/graph" element={<DependencyGraph correlatedView={correlatedView} />} />
      <Route path="/shared" element={<SharedScope correlatedView={correlatedView} />} />
      <Route path="/timeline" element={<ComingSoon page="Load Timeline" />} />
      <Route path="/modules" element={<ComingSoon page="Module Explorer" />} />
    </Routes>
  )
}

export function App() {
  const { aggregate, correlatedView, status } = useSSE()

  return (
    <BrowserRouter>
      <Header status={status} aggregate={aggregate} />
      <div className="app-shell">
        <Sidebar />
        <main className="app-main">
          <AppRoutes aggregate={aggregate} correlatedView={correlatedView} />
        </main>
      </div>
    </BrowserRouter>
  )
}
