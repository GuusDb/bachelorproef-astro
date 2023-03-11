import { FC } from "react";
export declare type FloatBoxAction = {
    title: string;
    onClick: () => void;
};
export interface FloatBoxProps {
    isOpen: boolean;
    marginTop?: string;
    marginLeft?: string;
    actions: FloatBoxAction[];
    onClose: () => void;
}
export declare const FloatBox: FC<FloatBoxProps>;
