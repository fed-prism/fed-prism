/**
 * Type shims for MF remote modules used by app-a.
 */

declare module 'app-c/Chart' {
  import type { ComponentType } from 'react'
  const Chart: ComponentType<Record<string, never>>
  export default Chart
}

declare module 'app-c/Utils' {
  export function formatValue(value: number, unit?: string): string
  export function clamp(value: number, min: number, max: number): number
}
