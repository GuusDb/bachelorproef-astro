import { CrColumn } from "@craxit/react-table";
import { Hardware } from "../graphql/generated";
import { TranslationType } from "../types/types";
export interface HardwareColumnData {
    isDialogOpen: boolean;
    onNewClicked: () => void;
    translation: TranslationType;
}
export declare function getHardwareColumns(data: HardwareColumnData): CrColumn<Hardware>[];
