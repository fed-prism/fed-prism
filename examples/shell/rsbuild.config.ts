import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin'
import { fedPrismPlugin } from '@fed-prism/runtime-plugin'

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'shell',
      remotes: {
        'app-a': 'app_a@http://localhost:3001/mf-manifest.json',
        'app-b': 'app_b@http://localhost:3002/mf-manifest.json',
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, eager: true, requiredVersion: '^18.0.0' },
        zustand: { singleton: true, strictVersion: true, requiredVersion: '^5.0.0' },
        'framer-motion': { singleton: true, strictVersion: true, requiredVersion: '11.0.0' },
        zod: { singleton: true, requiredVersion: '~3.20.0' },
        nanoid: { singleton: true, requiredVersion: '^5.0.0' },
        '@tanstack/react-query': { singleton: true, strictVersion: true, requiredVersion: '^5.20.0' },
        'react-router-dom': { singleton: true, requiredVersion: '6.22.3' },
        redux: { singleton: true, shareScope: 'state', requiredVersion: '^5.0.1' },
        clsx: { singleton: true, shareScope: 'utils', requiredVersion: '^2.1.0' },
        ms: { singleton: true, shareScope: 'core-time', requiredVersion: '^2.1.2' },
        'color-name': { singleton: true, shareScope: 'modern-ui', requiredVersion: '^2.0.0' },
        cookie: { singleton: true, strictVersion: true, shareScope: 'tracking-scope', requiredVersion: '1.1.1' },
      },
      runtimePlugins: [
        // Path to a file that exports the plugin instance
        // We configure it inline via the special string form supported by MF 2.0
        require.resolve('./src/fedPrismPluginEntry.ts'),
      ],
    }),
  ],
  server: {
    port: 3000,
  },
  html: {
    title: 'Shell — FedPrism Example',
  },
})
