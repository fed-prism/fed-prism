/**
 * FedPrism plugin entry file — loaded by MF 2.0 runtimePlugins.
 * This file must export the plugin instance as default.
 * It is loaded in the browser, so no Node.js APIs.
 */
import { fedPrismPlugin } from '@fed-prism/runtime-plugin'

export default function () {
  return fedPrismPlugin({ port: 7357, enabled: true })
}
