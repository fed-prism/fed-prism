/**
 * app-b/DataService — exposes a simple data service consumed by app-c.
 * This creates a cross-remote dependency that shell doesn't explicitly declare:
 * shell → app-a → app-c → app-b (DataService)
 */

export interface DataPoint {
  label: string
  value: number
}

export function getChartData(): DataPoint[] {
  return [
    { label: 'Jan', value: 42 },
    { label: 'Feb', value: 67 },
    { label: 'Mar', value: 54 },
    { label: 'Apr', value: 89 },
    { label: 'May', value: 73 },
    { label: 'Jun', value: 95 },
  ]
}

export function getSummary() {
  const data = getChartData()
  const total = data.reduce((sum, d) => sum + d.value, 0)
  return { total, count: data.length, avg: Math.round(total / data.length) }
}
