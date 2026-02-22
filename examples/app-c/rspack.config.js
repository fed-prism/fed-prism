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
      filename: 'mf-manifest.json',
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
