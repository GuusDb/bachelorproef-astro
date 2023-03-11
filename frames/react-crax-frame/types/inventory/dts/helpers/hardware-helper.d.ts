import { CrRowAction } from "@craxit/react-table";
import { Hardware } from "graphql/generated";
export declare function getHardwareInvoiceAction(setHardwareId: (val: string) => void): CrRowAction<Hardware>;
export declare function getHardwareUpdateAction(onUpdateClicked: (hardware?: Hardware) => void): CrRowAction<Hardware>;
