export function Dashboard() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Overview of your Module Federation 2.0 federation</p>
      </div>

      <div className="stat-grid">
        <div className="stat-card">
          <span className="stat-card__label">Applications</span>
          <span className="stat-card__value stat-card__value--highlight">0</span>
        </div>
        <div className="stat-card">
          <span className="stat-card__label">Shared Deps</span>
          <span className="stat-card__value">0</span>
        </div>
        <div className="stat-card">
          <span className="stat-card__label">Conflicts</span>
          <span className="stat-card__value">0</span>
        </div>
        <div className="stat-card">
          <span className="stat-card__label">Modules Loaded</span>
          <span className="stat-card__value">0</span>
        </div>
      </div>

      <div className="empty-state">
        <div className="empty-state__icon">🔮</div>
        <h2 className="empty-state__title">Waiting for your federation...</h2>
        <p className="empty-state__body">
          Add <code>@fed-prism/runtime-plugin</code> to your Module Federation 2.0 config,
          then start your app. FedPrism will begin collecting data automatically.
        </p>
        <pre className="empty-state__code">{`// rsbuild.config.ts
import { fedPrismPlugin } from '@fed-prism/runtime-plugin'

export default defineConfig({
  plugins: [
    pluginModuleFederation({
      name: 'shell',
      runtimePlugins: [fedPrismPlugin()],
      // ...
    })
  ]
})`}</pre>
      </div>
    </div>
  )
}
