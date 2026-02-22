import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin'

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'app_a',
      filename: 'mf-manifest.json',
      exposes: {
        './Button': './src/components/Button.tsx',
        './Header': './src/components/Header.tsx',
      },
      remotes: {
        'app-c': 'app_c@http://localhost:3003/mf-manifest.json',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
        // lodash is intentionally NOT singleton to exercise conflict detection
        lodash: { singleton: false, requiredVersion: '4.17.21' },
      },
      runtimePlugins: [
        require.resolve('./src/fedPrismPluginEntry.ts'),
      ],
    }),
  ],
  server: {
    port: 3001,
  },
  html: {
    title: 'App A — FedPrism Example',
  },
})
