import * as React from "react";
import { PlatformType } from "./lib/platform";
import { Insets } from "@vkontakte/vk-bridge";
export declare type AnyFunction = (...args: any[]) => any;
export declare type AlignType = "left" | "center" | "right";
export interface HasChildren {
    children?: React.ReactNode;
}
export interface HasRootRef<T> {
    getRootRef?: React.Ref<T>;
}
export interface HasRef<T> {
    getRef?: React.Ref<T>;
}
export interface HasComponent {
    Component?: React.ElementType;
}
export interface HasAlign {
    align?: AlignType;
}
export interface HasPlatform {
    /**
     * @ignore
     */
    platform?: PlatformType;
}
export interface HasInsets {
    /**
     * @ignore
     */
    insets?: Partial<Insets>;
}
export interface Version {
    major: number;
    minor?: number;
    patch?: number;
}
/**
 * В зависимости от версии `getRootRef`
 * иконок `@vkontakte/icons` возвращает
 * `HTMLDivElement` (v1) или `SVGSVGElement` (v2)
 */
export declare type VKontakteIconsBackwardsCompatibleElement = HTMLDivElement | SVGSVGElement;
