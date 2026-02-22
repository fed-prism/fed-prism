import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'

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
              <span>🕸️</span> Dependency Graph
            </NavLink>
          </li>
          <li>
            <NavLink to="/shared" className={({ isActive }) => `nav-item${isActive ? ' nav-item--active' : ''}`}>
              <span>📦</span> Shared Scope
            </NavLink>
          </li>
          <li>
            <NavLink to="/timeline" className={({ isActive }) => `nav-item${isActive ? ' nav-item--active' : ''}`}>
              <span>⏱️</span> Load Timeline
            </NavLink>
          </li>
          <li>
            <NavLink to="/modules" className={({ isActive }) => `nav-item${isActive ? ' nav-item--active' : ''}`}>
              <span>🧩</span> Module Explorer
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

function Header({ connected }: { connected: boolean }) {
  const location = useLocation()
  const pageNames: Record<string, string> = {
    '/': 'Dashboard',
    '/graph': 'Dependency Graph',
    '/shared': 'Shared Scope',
    '/timeline': 'Load Timeline',
    '/modules': 'Module Explorer',
  }
  const pageName = pageNames[location.pathname] ?? 'FedPrism'

  return (
    <header className="app-header">
      <div className="app-header__logo">
        <div className="app-header__logo-mark">🔮</div>
        FedPrism
        <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>/ {pageName}</span>
      </div>
      <div className="app-header__status">
        <div className={`status-dot${connected ? ' status-dot--connected' : ''}`} />
        {connected ? 'Connected' : 'Waiting for app...'}
      </div>
    </header>
  )
}

function ComingSoon({ page }: { page: string }) {
  return (
    <div className="empty-state">
      <div className="empty-state__icon">🚧</div>
      <h2 className="empty-state__title">{page}</h2>
      <p className="empty-state__body">This view is coming soon. Connect your app and check the Dashboard first.</p>
    </div>
  )
}

export function App() {
  // TODO: Replace with real connection state from useSSE hook
  const connected = false

  return (
    <BrowserRouter>
      <Header connected={connected} />
      <div className="app-shell">
        <Sidebar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/graph" element={<ComingSoon page="Dependency Graph" />} />
            <Route path="/shared" element={<ComingSoon page="Shared Scope" />} />
            <Route path="/timeline" element={<ComingSoon page="Load Timeline" />} />
            <Route path="/modules" element={<ComingSoon page="Module Explorer" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
