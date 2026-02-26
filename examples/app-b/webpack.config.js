const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack')

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    publicPath: 'auto',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'App B — FedPrism Example',
    }),
    new ModuleFederationPlugin({
      name: 'app_b',
      filename: 'remoteEntry.js',
      exposes: {
        './Widget': './src/components/Widget.tsx',
        './DataService': './src/services/DataService.ts',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
        // lodash@4.17.20 — intentionally different patch from app-a's 4.17.21
        lodash: { singleton: false, requiredVersion: '4.17.20' },
        'date-fns': { singleton: false, requiredVersion: '^3.0.0' },
        axios: { singleton: true, shareScope: 'api', requiredVersion: '~1.6.0' },
        dayjs: { singleton: false, requiredVersion: '1.11.10' },
        clsx: { singleton: true, shareScope: 'utils', requiredVersion: '^2.1.0' },
        uuid: { singleton: false, requiredVersion: '^9.0.1' },
        ramda: { singleton: false, requiredVersion: '^0.29.1' },
        xstate: { singleton: true, shareScope: 'state', requiredVersion: '^5.6.0' },
        'styled-components': { singleton: true, requiredVersion: '^6.1.8' },
        mobx: { singleton: true, shareScope: 'state', requiredVersion: '^6.12.0' },
        d3: { singleton: true, shareScope: 'viz', requiredVersion: '^7.8.5' },
        ms: { singleton: true, shareScope: 'widget-time', requiredVersion: '^2.1.3' },
      },
      runtimePlugins: [require.resolve('./src/fedPrismPluginEntry.ts')],
    }),
  ],
  devServer: {
    port: 3002,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
}
