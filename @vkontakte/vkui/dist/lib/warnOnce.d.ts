export declare type WarnOnceHandler = (message: string, type?: "warn" | "error") => void;
export declare function warnOnce(zone: string): WarnOnceHandler;
