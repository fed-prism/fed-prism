import type { FedPrismConfig } from '@fed-prism/core'

/**
 * @fed-prism/build-plugin
 * Build tool adapters for FedPrism.
 * Currently stubs — implementations will be added per-bundler.
 */

interface BuildPluginOptions extends FedPrismConfig {
  /** Automatically inject @fed-prism/runtime-plugin into the MF runtimePlugins array */
  autoInject?: boolean
}

export function fedPrismRsbuildPlugin(_options: BuildPluginOptions = {}) {
  return {
    name: 'fed-prism-rsbuild-plugin',
    // TODO: implement Rsbuild plugin API hooks
  }
}

export function fedPrismRspackPlugin(_options: BuildPluginOptions = {}) {
  return {
    // TODO: implement Rspack plugin apply() method
    apply(_compiler: unknown) {
      void _compiler
    },
  }
}

export function fedPrismWebpackPlugin(_options: BuildPluginOptions = {}) {
  return {
    // TODO: implement Webpack plugin apply() method
    apply(_compiler: unknown) {
      void _compiler
    },
  }
}

export type { BuildPluginOptions }
