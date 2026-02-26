import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin'

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'app_a',
      filename: 'remoteEntry.js',
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
        zustand: { singleton: true, strictVersion: true, requiredVersion: '^5.0.0' },
        rxjs: { singleton: true, shareScope: 'core-libs' },
        'framer-motion': { singleton: true, requiredVersion: '^11.0.0' },
        dayjs: { singleton: false, requiredVersion: '1.11.10' },
        clsx: { singleton: true, shareScope: 'utils', requiredVersion: '^2.1.0' },
        'tailwind-merge': { singleton: true, shareScope: 'utils', requiredVersion: '^2.2.0' },
        xstate: { singleton: true, strictVersion: true, shareScope: 'state', requiredVersion: '^5.6.0' },
        graphql: { singleton: true, strictVersion: true, shareScope: 'graphql', requiredVersion: '^16.8.0' },
        '@tanstack/react-query': { singleton: true, strictVersion: true, requiredVersion: '^5.20.0' },
        'react-router-dom': { singleton: true, requiredVersion: '^6.22.0' },
        'styled-components': { singleton: true, requiredVersion: '^6.1.8' },
        validator: { singleton: false, requiredVersion: '^13.11.0' },
        redux: { singleton: true, shareScope: 'state', requiredVersion: '^5.0.1' },
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
