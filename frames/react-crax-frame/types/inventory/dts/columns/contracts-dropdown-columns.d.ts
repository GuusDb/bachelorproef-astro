import { CrColumn } from "@craxit/react-table";
import { TranslationType } from "types/types";
import { Contract } from "../graphql/generated";
export interface ContractDropDownColumnData {
    translation: TranslationType;
}
export declare function getContractsDropDownColumns(data: ContractDropDownColumnData): CrColumn<Contract>[];
