import { ReactNode } from "react";
export interface ToolTipIconButtonProps {
    icon: ReactNode;
    title: string;
    openFileSelector?: boolean;
    color?: string;
    onClick?: () => void;
}
export declare const ToolTipIconButton: React.FC<ToolTipIconButtonProps>;
export default ToolTipIconButton;
