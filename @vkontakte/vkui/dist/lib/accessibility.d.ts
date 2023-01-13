import * as React from "react";
export declare const FOCUSABLE_ELEMENTS_LIST: string[];
export declare enum Keys {
    ENTER = "Enter",
    SPACE = "Space",
    TAB = "Tab",
    ESCAPE = "Escape",
    HOME = "Home",
    END = "End",
    ARROW_LEFT = "ArrowLeft",
    ARROW_RIGHT = "ArrowRight",
    ARROW_DOWN = "ArrowDown"
}
export declare function pressedKey(e: KeyboardEvent | React.KeyboardEvent<HTMLElement>): Keys | null;
export declare function shouldTriggerClickOnEnterOrSpace(e: KeyboardEvent | React.KeyboardEvent<HTMLElement>): boolean;
