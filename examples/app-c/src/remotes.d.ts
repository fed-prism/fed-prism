/**
 * Type shims for MF remote modules used by app-c.
 */

declare module 'app-b/DataService' {
  export interface DataPoint {
    label: string
    value: number
  }
  export function getChartData(): DataPoint[]
  export function getSummary(): { total: number; count: number; avg: number }
}
