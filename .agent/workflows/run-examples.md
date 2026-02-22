---
description: how to run the full FedPrism example system end-to-end
---

# Running FedPrism End-to-End

This starts all 4 example apps plus the FedPrism dashboard so you can see live data.

## Prerequisites

```bash
pnpm install
pnpm build
```

## Step 1: Start the FedPrism server + UI

Open a terminal and run:

```bash
# Build the server package if not already done
pnpm --filter @fed-prism/server build

# Start the server directly (temp, until CLI is wired)
node -e "
import('@fed-prism/server').then(({ createServer }) =>
  createServer({ port: 7357 }).then(s => s.start()).then(addr => console.log('FedPrism server:', addr))
)"
```

The FedPrism dashboard UI (Vite dev server) on port 7358:

```bash
pnpm --filter @fed-prism/ui dev
```

Open http://localhost:7358 — you'll see the empty Dashboard waiting for connections.

## Step 2: Start example apps (order matters!)

// turbo
Open 4 new terminals and start in this order (leaves first):

Terminal 1 — app-c (port 3003, Rspack):

```bash
pnpm --filter @fed-prism-examples/app-c dev
```

Terminal 2 — app-b (port 3002, Webpack 5):

```bash
pnpm --filter @fed-prism-examples/app-b dev
```

Terminal 3 — app-a (port 3001, Rsbuild):

```bash
pnpm --filter @fed-prism-examples/app-a dev
```

Terminal 4 — shell (port 3000, Rsbuild):

```bash
pnpm --filter @fed-prism-examples/shell dev
```

## Step 3: Interact with the shell

Open http://localhost:3000

- **At startup**: app-a/Button loads immediately — FedPrism receives `init` + `afterResolve` snapshots
- **Click "Load Widget from app-b"**: triggers async remote load — FedPrism captures the `loadShare` event

## Step 4: Observe in FedPrism dashboard

In the dashboard at http://localhost:7358:

1. **Dashboard** — shows 4 apps connected, stat cards update live
2. **Dep Graph** — see shell → app-a → app-c, and async edge to app-b
3. **Shared Scope** — see lodash 4.17.21 (app-a) vs 4.17.20 (app-b) conflict highlighted
