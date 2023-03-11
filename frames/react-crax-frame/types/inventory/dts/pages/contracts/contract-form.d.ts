import { ReactElement } from "react";
import { ContractInput } from "../../graphql/generated";
export interface ContractFormProps {
    contractInput?: ContractInput;
    isDialogOpen: boolean;
    hasContractEnded?: boolean;
    onCanceled: () => void;
    onSuccess: () => void;
    onError: (errorMessage: string) => void;
    onInfo: (message: string) => void;
}
export declare function ContractForm(props: ContractFormProps): ReactElement;
