import * as React from "react";
export declare function useEnsuredControl<V, E extends React.ChangeEvent<any>>(props: {
    value?: V;
    onChange?: (e: E) => any;
}, options: {
    defaultValue: V;
}): [V | undefined, (e: E) => any];
