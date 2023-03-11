import { FC, ReactNode } from "react";
import { FieldError } from "react-hook-form";
export interface InputControlProps {
    label?: string;
    error?: FieldError;
    children?: ReactNode;
}
declare const InputControl: FC<InputControlProps>;
export default InputControl;
