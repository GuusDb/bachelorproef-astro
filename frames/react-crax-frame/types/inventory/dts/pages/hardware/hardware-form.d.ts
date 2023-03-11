import { ReactElement } from "react";
import { Hardware } from "../../graphql/generated";
export interface HardwareFormProps {
    hardware?: Hardware;
    open: boolean;
    onCanceled: () => void;
    onSuccess: () => void;
    onError: (error: string) => void;
}
export declare function HardwareForm(props: HardwareFormProps): ReactElement;
