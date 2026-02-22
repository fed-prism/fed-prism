<div align="center">
  <h1>🔮 FedPrism</h1>
  <p><strong>Runtime inspection and debugging for Module Federation 2.0</strong></p>
  <p>
    <a href="https://www.npmjs.com/package/fed-prism"><img src="https://img.shields.io/npm/v/fed-prism?style=flat-square&colorA=18181b&colorB=7c3aed" alt="npm version" /></a>
    <a href="LICENSE"><img src="https://img.shields.io/npm/l/fed-prism?style=flat-square&colorA=18181b&colorB=7c3aed" alt="License: MIT" /></a>
    <a href="https://github.com/fed-prism/fed-prism/issues"><img src="https://img.shields.io/github/issues/fed-prism/fed-prism?style=flat-square&colorA=18181b&colorB=7c3aed" alt="Issues" /></a>
  </p>
</div>

---

> **Status: 🚧 Early Development** — Not yet published to npm. Watch this repo for updates.

## What is FedPrism?

FedPrism is a developer tool that gives you deep visibility into how your **Module Federation 2.0** application is actually behaving at runtime — not just what the config says should happen.

Like how `jest-preview` lets you see what your tests are actually rendering, FedPrism lets you see what your federated application is actually loading:

- **Which version** of each shared dependency is _actually_ in use (across all share scopes)
- **Where it came from** — which remote app provided it, and why
- **How it was loaded** — declared static remote or async runtime
- **Full dependency graph** — hosts, remotes, modules, all in one interactive view
- **Declared vs actual** — side-by-side comparison of config vs runtime state

## Packages

| Package                                                | Description                                                   |
| ------------------------------------------------------ | ------------------------------------------------------------- |
| [`fed-prism`](packages/cli)                            | CLI — `npx fed-prism start`                                   |
| [`@fed-prism/runtime-plugin`](packages/runtime-plugin) | MF 2.0 runtime plugin — works with Rsbuild, Rspack, Webpack 5 |
| [`@fed-prism/build-plugin`](packages/build-plugin)     | Optional build plugin for automatic config injection          |
| [`@fed-prism/core`](packages/core)                     | Shared types and utilities                                    |
| [`@fed-prism/server`](packages/server)                 | Local dev server (WebSocket + SSE + REST)                     |
| [`@fed-prism/ui`](packages/ui)                         | React dashboard                                               |

## Quick Start

**1. Install the runtime plugin** in each of your MF 2.0 apps:

```bash
pnpm add -D @fed-prism/runtime-plugin
# or: npm install -D @fed-prism/runtime-plugin
```

**2. Add the plugin to your MF config:**

<details>
<summary>Rsbuild (<code>rsbuild.config.ts</code>)</summary>

```ts
import { fedPrismPlugin } from '@fed-prism/runtime-plugin'
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin'

export default {
  plugins: [
    pluginModuleFederation({
      name: 'shell',
      runtimePlugins: [require.resolve('./src/fedPrismPluginEntry.ts')],
      // ...
    }),
  ],
}

// src/fedPrismPluginEntry.ts
// import { fedPrismPlugin } from '@fed-prism/runtime-plugin'
// export default fedPrismPlugin()
```

</details>

<details>
<summary>Webpack 5 (<code>webpack.config.js</code>)</summary>

```js
const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack')
// src/fedPrismPluginEntry.ts:
// import { fedPrismPlugin } from '@fed-prism/runtime-plugin'
// export default fedPrismPlugin()

new ModuleFederationPlugin({
  name: 'shell',
  runtimePlugins: [require.resolve('./src/fedPrismPluginEntry.ts')],
  // ...
})
```

</details>

<details>
<summary>Rspack (<code>rspack.config.js</code>)</summary>

```js
const { ModuleFederationPlugin } = require('@module-federation/enhanced/rspack')
// src/fedPrismPluginEntry.ts:
// import { fedPrismPlugin } from '@fed-prism/runtime-plugin'
// export default fedPrismPlugin()

new ModuleFederationPlugin({
  name: 'shell',
  runtimePlugins: [require.resolve('./src/fedPrismPluginEntry.ts')],
  // ...
})
```

</details>

**3. Start the FedPrism dashboard:**

```bash
npx fed-prism start
# → Dashboard at http://localhost:7357
```

## Examples

Working example applications are in [`examples/`](examples/) — a multi-build-tool MF 2.0 federation:

| App                     | Role                                 | Build Tool | Port |
| ----------------------- | ------------------------------------ | ---------- | ---- |
| [shell](examples/shell) | Host / Shell                         | Rsbuild    | 3000 |
| [app-a](examples/app-a) | Remote + Host (of C), lodash 4.17.21 | Rsbuild    | 3001 |
| [app-b](examples/app-b) | Async remote, lodash 4.17.20         | Webpack 5  | 3002 |
| [app-c](examples/app-c) | Remote of A, consumes B/DataService  | Rspack     | 3003 |

The examples deliberately include a **lodash version conflict** and a **transitive dependency** (shell → app-a → app-c → app-b) that shell never declares — both visible in the FedPrism dashboard.

```bash
# Run the full stack (server + UI + all 4 examples) in one terminal:
pnpm build        # build packages first
pnpm dev:all      # starts everything
```

Open **http://localhost:3000** (shell) and **http://localhost:7358** (dashboard dev server with hot-reload).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). All contributions welcome.

## License

[MIT](LICENSE) © FedPrism Contributors
