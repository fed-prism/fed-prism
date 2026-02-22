import type { FederationAggregate, CorrelatedView, CorrelatedApp } from '@fed-prism/core'

interface DashboardProps {
  aggregate: FederationAggregate | null
  correlatedView: CorrelatedView | null
}

function AppStatusBadge({ status }: { status: CorrelatedApp['status'] }) {
  const map: Record<CorrelatedApp['status'], { label: string; cls: string }> = {
    online: { label: 'online', cls: 'badge badge--success' },
    offline: { label: 'offline', cls: 'badge badge--muted' },
    'manifest-only': { label: 'manifest only', cls: 'badge badge--warning' },
    'runtime-only': { label: 'runtime only', cls: 'badge badge--info' },
  }
  const { label, cls } = map[status]
  return <span className={cls}>{label}</span>
}

function AppRow({ app }: { app: CorrelatedApp }) {
  const lastSeen = app.lastSeen
    ? new Date(app.lastSeen).toLocaleTimeString()
    : '—'

  return (
    <tr className="table-row">
      <td className="table-cell table-cell--mono">{app.name}</td>
      <td className="table-cell"><AppStatusBadge status={app.status} /></td>
      <td className="table-cell table-cell--muted">
        {app.manifest?.metaData?.publicPath ?? '—'}
      </td>
      <td className="table-cell table-cell--muted">{lastSeen}</td>
    </tr>
  )
}

export function Dashboard({ aggregate, correlatedView }: DashboardProps) {
  const apps = correlatedView?.apps ?? []
  const sharedDeps = correlatedView?.sharedDeps ?? []
  const conflicts = sharedDeps.filter((d) => d.conflict)
  const onlineCount = apps.filter((a) => a.status === 'online').length
  const moduleCount = apps.reduce((sum, a) => sum + (a.snapshot?.remotes.length ?? 0), 0)

  const isEmpty = !aggregate || Object.keys(aggregate.instances).length === 0

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Live overview of your Module Federation 2.0 federation</p>
      </div>

      <div className="stat-grid">
        <div className="stat-card">
          <span className="stat-card__label">Applications</span>
          <span className={`stat-card__value${apps.length > 0 ? ' stat-card__value--highlight' : ''}`}>
            {apps.length}
          </span>
        </div>
        <div className="stat-card">
          <span className="stat-card__label">Online</span>
          <span className="stat-card__value">{onlineCount}</span>
        </div>
        <div className="stat-card">
          <span className="stat-card__label">Shared Deps</span>
          <span className="stat-card__value">{sharedDeps.length}</span>
        </div>
        <div className="stat-card">
          <span className="stat-card__label">Conflicts</span>
          <span className={`stat-card__value${conflicts.length > 0 ? ' stat-card__value--error' : ''}`}>
            {conflicts.length}
          </span>
        </div>
        <div className="stat-card">
          <span className="stat-card__label">Remote Refs</span>
          <span className="stat-card__value">{moduleCount}</span>
        </div>
      </div>

      {isEmpty ? (
        <div className="empty-state">
          <div className="empty-state__icon">🔮</div>
          <h2 className="empty-state__title">Waiting for your federation…</h2>
          <p className="empty-state__body">
            Add <code>@fed-prism/runtime-plugin</code> to your MF 2.0 config, then start your app.
          </p>
          <pre className="empty-state__code">{`import { fedPrismPlugin } from '@fed-prism/runtime-plugin'

// In your rsbuild.config.ts:
pluginModuleFederation({
  name: 'shell',
  runtimePlugins: [fedPrismPlugin()],
  // ...your existing config
})`}</pre>
        </div>
      ) : (
        <>
          <div className="section-header">
            <h2 className="section-title">Applications</h2>
          </div>
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <table className="table">
              <thead>
                <tr>
                  <th className="table-th">Name</th>
                  <th className="table-th">Status</th>
                  <th className="table-th">Public Path</th>
                  <th className="table-th">Last Seen</th>
                </tr>
              </thead>
              <tbody>
                {apps.map((app) => (
                  <AppRow key={app.name} app={app} />
                ))}
              </tbody>
            </table>
          </div>

          {conflicts.length > 0 && (
            <div className="alert alert--warning" style={{ marginTop: 'var(--space-6)' }}>
              <strong>⚠ {conflicts.length} version conflict{conflicts.length !== 1 ? 's' : ''} detected</strong>
              {' '}— check the <a href="/shared">Shared Scope</a> view for details.
            </div>
          )}
        </>
      )}
    </div>
  )
}
