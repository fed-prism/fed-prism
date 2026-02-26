const path = require('path')
const { ModuleFederationPlugin } = require('@module-federation/enhanced/rspack')

/** @type {import('@rspack/core').Configuration} */
module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    publicPath: 'auto',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: { syntax: 'typescript', tsx: true },
              transform: { react: { runtime: 'automatic' } },
            },
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app_c',
      filename: 'remoteEntry.js',
      exposes: {
        './Chart': './src/components/Chart.tsx',
        './Utils': './src/utils/Utils.ts',
      },
      remotes: {
        // app-c depends on app-b for DataService — this is the cross-remote dep
        'app-b': 'app_b@http://localhost:3002/mf-manifest.json',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
        'date-fns': { singleton: false, requiredVersion: '^4.0.0' },
        rxjs: { singleton: true, shareScope: 'core-libs' },
        axios: { singleton: true, shareScope: 'api', requiredVersion: '~1.6.0' },
        zod: { singleton: true, strictVersion: false, requiredVersion: '~3.22.0' },
        clsx: { singleton: true, shareScope: 'utils', requiredVersion: '^2.1.0' },
        'tailwind-merge': { singleton: true, shareScope: 'utils', requiredVersion: '^2.2.0' },
        uuid: { singleton: false, requiredVersion: '^9.0.1' },
        nanoid: { singleton: true, requiredVersion: '^5.0.0' },
        graphql: { singleton: true, strictVersion: true, shareScope: 'graphql', requiredVersion: '^16.13.0' },
        'chart.js': { singleton: false, requiredVersion: '^4.4.1' },
        three: { singleton: true, strictVersion: true, shareScope: '3d', requiredVersion: '0.160.0' },
        d3: { singleton: true, shareScope: 'viz', requiredVersion: '^7.8.5' },
        cookie: { singleton: true, strictVersion: true, shareScope: 'auth-scope', requiredVersion: '1.1.1' },
      },
      runtimePlugins: [require.resolve('./src/fedPrismPluginEntry.ts')],
    }),
  ],
  devServer: {
    port: 3003,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
}
