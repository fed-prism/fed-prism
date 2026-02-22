/** app-c/Utils — exposed utility module. */

export function formatValue(value: number, unit = ''): string {
  return `${value.toLocaleString()}${unit ? ` ${unit}` : ''}`
}

export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value))
}
