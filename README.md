<div align="center">
  <img src="docs/assets/logo.svg" alt="FedPrism Logo" width="120" />
  <h1>FedPrism</h1>
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

- **Which version** of each shared dependency is _actually_ in use
- **Where it came from** — which remote app provided it, and why
- **How it was loaded** — declared static remote or async runtime
- **Full dependency graph** — hosts, remotes, modules, all in one interactive view
- **Declared vs actual** — side-by-side comparison of config vs runtime state

## Packages

| Package                                                | Description                                  |
| ------------------------------------------------------ | -------------------------------------------- |
| [`fed-prism`](packages/cli)                            | CLI — `npx fed-prism start`                  |
| [`@fed-prism/runtime-plugin`](packages/runtime-plugin) | MF 2.0 runtime plugin for data collection    |
| [`@fed-prism/build-plugin`](packages/build-plugin)     | Optional Rsbuild/Rspack/Webpack build plugin |
| [`@fed-prism/core`](packages/core)                     | Shared types and utilities                   |
| [`@fed-prism/server`](packages/server)                 | Local dev server                             |
| [`@fed-prism/ui`](packages/ui)                         | React dashboard                              |

## Quick Start

```bash
# 1. Install as a dev dependency in your shell/host app
pnpm add -D @fed-prism/runtime-plugin

# 2. Add the runtime plugin to your MF 2.0 config
# (rsbuild.config.ts / rspack.config.ts / webpack.config.js)

# 3. Start the FedPrism dashboard
npx fed-prism start
```

Full documentation: [docs/getting-started.md](docs/getting-started.md)

## Examples

Working example applications are in the [`examples/`](examples/) directory:

| App                     | Role                                     | Build Tool |
| ----------------------- | ---------------------------------------- | ---------- |
| [shell](examples/shell) | Host / Shell                             | Rsbuild    |
| [app-a](examples/app-a) | Remote + Host (of C)                     | Rsbuild    |
| [app-b](examples/app-b) | Async remote of shell, hosts DataService | Webpack 5  |
| [app-c](examples/app-c) | Remote of A, uses B's DataService        | Rspack     |

```bash
# Run all examples
pnpm dev
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). All contributions welcome.

## License

[MIT](LICENSE) © FedPrism Contributors
