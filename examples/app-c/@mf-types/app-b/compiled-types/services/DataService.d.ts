/**
 * app-b/DataService — exposes a simple data service consumed by app-c.
 * This creates a cross-remote dependency that shell doesn't explicitly declare:
 * shell → app-a → app-c → app-b (DataService)
 */
export interface DataPoint {
    label: string;
    value: number;
}
export declare function getChartData(): DataPoint[];
export declare function getSummary(): {
    total: number;
    count: number;
    avg: number;
};
//# sourceMappingURL=DataService.d.ts.map