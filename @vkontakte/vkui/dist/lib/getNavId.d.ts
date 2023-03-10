import { WarnOnceHandler } from "./warnOnce";
export interface NavIdProps {
    /** Уникальный идентификатор навигационного элемента (вместо id) */
    nav?: string;
    id?: string;
}
export declare function getNavId(props: NavIdProps, warn?: WarnOnceHandler): string | undefined;
