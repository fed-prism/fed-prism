import { useState } from 'react'
import type { CorrelatedView, CorrelatedSharedDep, SharedDeclared, SharedActual } from '@fed-prism/core'

interface SharedScopeProps {
  correlatedView: CorrelatedView | null
}

function ConflictIcon() {
  return <span title="Version conflict detected" style={{ color: 'var(--color-error)' }}>⚡</span>
}

function VersionPill({
  version,
  loaded,
  conflict,
}: {
  version: string
  loaded: boolean
  conflict: boolean
}) {
  let cls = 'version-badge'
  if (conflict) cls += ' version-badge--conflict'
  else if (loaded) cls += ' version-badge--resolved'
  return <span className={cls}>{version}</span>
}

function DepRow({ dep }: { dep: CorrelatedSharedDep }) {
  const loadedActual = dep.actual.filter((a) => a.loaded)
  const uniqueVersions = [...new Set(dep.actual.map((a) => a.version))]

  return (
    <tr className="table-row">
      <td className="table-cell">
        <span className="table-cell--mono">{dep.packageName}</span>
        {dep.conflict && (
          <>
            {' '}
            <ConflictIcon />
          </>
        )}
      </td>
      <td className="table-cell table-cell--mono table-cell--muted">{dep.scope}</td>
      <td className="table-cell">
        <div style={{ display: 'flex', gap: 'var(--space-1)', flexWrap: 'wrap' }}>
          {uniqueVersions.map((v) => (
            <VersionPill
              key={v}
              version={v}
              loaded={loadedActual.some((a) => a.version === v)}
              conflict={dep.conflict && uniqueVersions.length > 1}
            />
          ))}
        </div>
      </td>
      <td className="table-cell">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
          {dep.declared.map((d: SharedDeclared, i: number) => (
            <span key={i} className="table-cell--mono table-cell--muted" style={{ fontSize: 'var(--font-size-xs)' }}>
              {d.from}: required <code>{d.requiredVersion}</code>
              {d.singleton && ' · singleton'}
              {d.eager && ' · eager'}
              {d.strictVersion && ' · strict'}
            </span>
          ))}
        </div>
      </td>
      <td className="table-cell">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
          {dep.actual.map((a: SharedActual, i: number) => (
            <span key={i} className="table-cell--mono table-cell--muted" style={{ fontSize: 'var(--font-size-xs)' }}>
              {a.from}:{' '}
              <span style={{ color: a.loaded ? 'var(--color-success)' : 'var(--color-text-muted)' }}>
                {a.loaded ? '✓ loaded' : '○ registered'}
              </span>
            </span>
          ))}
        </div>
      </td>
      <td className="table-cell table-cell--muted table-cell--mono" style={{ fontSize: 'var(--font-size-xs)' }}>
        {dep.resolvedFrom ?? '—'}
      </td>
    </tr>
  )
}

export function SharedScope({ correlatedView }: SharedScopeProps) {
  const deps = correlatedView?.sharedDeps ?? []
  const conflicts = deps.filter((d) => d.conflict)
  const [filter, setFilter] = useState<'all' | 'conflicts'>('all')
  const displayed = filter === 'conflicts' ? conflicts : deps

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Shared Scope</h1>
        <p className="page-subtitle">
          Declared vs actual shared dependency resolution across all MF instances
        </p>
      </div>

      {deps.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state__icon">📦</div>
          <h2 className="empty-state__title">No shared dependencies yet</h2>
          <p className="empty-state__body">
            Connect your apps with <code>@fed-prism/runtime-plugin</code> to see shared scope data.
          </p>
        </div>
      ) : (
        <>
          <div className="toolbar">
            <div className="filter-tabs">
              <button
                className={`filter-tab${filter === 'all' ? ' filter-tab--active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All <span className="filter-tab__count">{deps.length}</span>
              </button>
              <button
                className={`filter-tab${filter === 'conflicts' ? ' filter-tab--active' : ''}`}
                onClick={() => setFilter('conflicts')}
              >
                Conflicts{' '}
                <span className={`filter-tab__count${conflicts.length > 0 ? ' filter-tab__count--error' : ''}`}>
                  {conflicts.length}
                </span>
              </button>
            </div>
          </div>

          <div className="card" style={{ padding: 0, overflow: 'auto' }}>
            <table className="table">
              <thead>
                <tr>
                  <th className="table-th">Package</th>
                  <th className="table-th">Scope</th>
                  <th className="table-th">Versions</th>
                  <th className="table-th">Declared</th>
                  <th className="table-th">Actual</th>
                  <th className="table-th">Resolved From</th>
                </tr>
              </thead>
              <tbody>
                {displayed.map((dep) => (
                  <DepRow key={`${dep.packageName}:${dep.scope}`} dep={dep} />
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  )
}
