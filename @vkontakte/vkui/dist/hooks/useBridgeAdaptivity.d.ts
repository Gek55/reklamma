export interface BridgeAdaptivity {
    type: "" | "force_mobile" | "force_mobile_compact" | "adaptive";
    viewportWidth: number;
    viewportHeight: number;
}
export declare function useBridgeAdaptivity(): BridgeAdaptivity;
