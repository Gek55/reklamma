import * as React from "react";
import { ChipOption } from "../components/Chip/Chip";
import { ChipsInputBaseProps } from "../components/ChipsInputBase/ChipsInputBase";
export declare const useChipsInput: <Option extends ChipOption>(props: Partial<ChipsInputBaseProps<Option>>) => {
    fieldValue: string | undefined;
    setFieldValue: React.Dispatch<React.SetStateAction<string | undefined>>;
    selectedOptions: Option[];
    setSelectedOptions: React.Dispatch<React.SetStateAction<Option[]>>;
    clearInput: () => void;
    toggleOption: (newOption: Option, value?: boolean | undefined) => void;
    addOption: (newOption: Option) => void;
    addOptionFromInput: () => void;
    removeOption: (value: any) => void;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
