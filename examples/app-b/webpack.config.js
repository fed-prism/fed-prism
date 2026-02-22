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
      filename: 'mf-manifest.json',
      exposes: {
        './Widget': './src/components/Widget.tsx',
        './DataService': './src/services/DataService.ts',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
        // lodash@4.17.20 — intentionally different patch from app-a's 4.17.21
        lodash: { singleton: false, requiredVersion: '4.17.20' },
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
