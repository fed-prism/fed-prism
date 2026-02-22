import { fedPrismPlugin } from '@fed-prism/runtime-plugin'
export default function () {
  return fedPrismPlugin({ port: 7357, enabled: true })
}
