import { FC } from "react";
import { Contract } from "../graphql/generated";
export interface ContractUploadProps {
    contract: Contract;
    onError: (error: string) => void;
    onSuccess: () => void;
}
declare const ContractUpload: FC<ContractUploadProps>;
export default ContractUpload;
