/**
 * Type shims for MF remote modules — TypeScript doesn't know about these
 * at compile time; they're resolved at runtime by the MF container.
 * Without these, TS will complain about missing modules.
 */

declare module 'app-a/Button' {
  import type { ComponentType } from 'react'
  const Button: ComponentType<{ label?: string; onClick?: () => void }>
  export default Button
}

declare module 'app-a/Header' {
  import type { ComponentType } from 'react'
  const Header: ComponentType<{ title?: string }>
  export default Header
}

declare module 'app-b/Widget' {
  import type { ComponentType } from 'react'
  const Widget: ComponentType<Record<string, never>>
  export default Widget
}

declare module 'app-b/DataService' {
  export interface DataPoint {
    label: string
    value: number
  }
  export function getChartData(): DataPoint[]
  export function getSummary(): { total: number; count: number; avg: number }
}

declare module 'app-c/Chart' {
  import type { ComponentType } from 'react'
  const Chart: ComponentType<Record<string, never>>
  export default Chart
}

declare module 'app-c/Utils' {
  export function formatValue(value: number, unit?: string): string
  export function clamp(value: number, min: number, max: number): number
}
