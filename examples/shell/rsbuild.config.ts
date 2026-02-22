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
