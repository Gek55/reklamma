import * as React from "react";
import { PlatformType } from "./platform";
import { BrowserInfo } from "./browser";
export interface SSRContextInterface {
    platform: PlatformType | null;
    userAgent?: string;
    browserInfo?: BrowserInfo;
}
export declare const SSRContext: React.Context<SSRContextInterface>;
export interface SSRWrapperProps {
    userAgent?: string;
    browserInfo?: BrowserInfo;
    children?: React.ReactNode;
}
/**
 * @see https://vkcom.github.io/VKUI/#/SSR
 */
export declare const SSRWrapper: ({ userAgent, browserInfo, children, }: SSRWrapperProps) => JSX.Element;
