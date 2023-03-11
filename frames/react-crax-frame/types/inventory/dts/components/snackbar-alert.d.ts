import { FC } from "react";
export interface SnackbarAlertProps {
    message: string;
    type: "success" | "error" | "warning";
    open: boolean;
    onClose: () => void;
}
declare const SnackBarAlert: FC<SnackbarAlertProps>;
export default SnackBarAlert;
