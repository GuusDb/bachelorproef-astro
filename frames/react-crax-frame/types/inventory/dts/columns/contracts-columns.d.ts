import { CrColumn } from "@craxit/react-table";
import { Contract } from "../graphql/generated";
import { TranslationType } from "../types/types";
export interface ContractColumnData {
    onNewClicked: () => void;
    onUpdateClicked: (contract?: Contract) => void;
    onEndContractClick: (contract?: Contract) => void;
    filterOnRelatedContract: (contractId: string) => void;
    onError: (errorMsg: string) => void;
    onSuccess: () => void;
    translation: TranslationType;
    isUserHr: boolean;
}
export declare function getContractsColumns(data: ContractColumnData): CrColumn<Contract>[];
