import * as React from "react";
import { CalendarProps } from "../components/Calendar/Calendar";
export interface UseCalendarDependencies extends Pick<CalendarProps, "onHeaderChange" | "onNextMonth" | "onPrevMonth"> {
    value?: Array<Date | null> | Date;
    disablePast?: boolean;
    disableFuture?: boolean;
    shouldDisableDate?(value: Date): boolean;
}
export declare function useCalendar({ value, disablePast, disableFuture, shouldDisableDate, onHeaderChange, onNextMonth, onPrevMonth, }: UseCalendarDependencies): {
    viewDate: Date;
    setViewDate: (value: Date) => void;
    setPrevMonth: () => void;
    setNextMonth: () => void;
    focusedDay: Date | undefined;
    setFocusedDay: React.Dispatch<React.SetStateAction<Date | undefined>>;
    isDayFocused: (day: Date) => boolean;
    isDayDisabled: (day: Date) => boolean;
    resetSelectedDay: () => void;
};
