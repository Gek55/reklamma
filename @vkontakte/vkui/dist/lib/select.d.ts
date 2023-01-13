import * as React from "react";
declare type Option = {
    label?: React.ReactElement | string;
    [index: string]: any;
};
declare type GetOptionLabel = (option: Option) => string | undefined;
export declare const defaultFilterFn: (query: string | undefined, option: Option, getOptionLabel?: GetOptionLabel) => boolean;
export declare const getFormFieldModeFromSelectType: (selectType?: "default" | "accent" | "plain") => "default" | "plain";
export {};
