# Contributing to FedPrism

Thank you for your interest in contributing! FedPrism is an open-source project and we welcome contributions of all kinds.

## Prerequisites

- **Node.js** >= 20.0.0
- **pnpm** >= 9.0.0 (`npm install -g pnpm`)
- **Git**

## Getting Started

```bash
# Clone the repo
git clone https://github.com/fed-prism/fed-prism.git
cd fed-prism

# Install all dependencies (all workspaces)
pnpm install

# Build all packages
pnpm build

# Run all example apps in dev mode
pnpm dev
```

## Monorepo Structure

```
fed-prism/
├── packages/         # Published npm packages
│   ├── core/         # @fed-prism/core — shared types
│   ├── runtime-plugin/   # @fed-prism/runtime-plugin
│   ├── build-plugin/     # @fed-prism/build-plugin
│   ├── server/       # @fed-prism/server
│   ├── ui/           # @fed-prism/ui — React dashboard
│   └── cli/          # fed-prism — CLI
├── examples/         # Example MF 2.0 applications
│   ├── shell/
│   ├── app-a/
│   ├── app-b/
│   └── app-c/
└── docs/             # Public documentation
```

## Workflow

### Making Changes

1. Fork and clone the repo
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Make your changes
4. Add a changeset: `pnpm changeset`
5. Commit and push, then open a PR

### Changesets

We use [Changesets](https://github.com/changesets/changesets) for versioning and changelogs.

When you make a user-facing change, run:

```bash
pnpm changeset
```

Follow the prompts to describe your change and select affected packages + bump type (patch/minor/major).

### Code Standards

- **TypeScript** everywhere — no `any`, strict mode on
- **Prettier** for formatting: `pnpm format`
- **ESLint** for linting: `pnpm lint`
- All public APIs must be documented

### Testing

```bash
pnpm test
```

## Releasing (Maintainers)

```bash
pnpm version-packages   # Apply changesets, bump versions, update changelogs
pnpm release            # Build and publish to npm
```

## Questions?

Open a [GitHub Discussion](https://github.com/fed-prism/fed-prism/discussions) or an [Issue](https://github.com/fed-prism/fed-prism/issues).
