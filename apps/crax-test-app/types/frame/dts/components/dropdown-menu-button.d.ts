import { FC, MouseEvent, ReactElement, ReactNode } from 'react';
export interface IContextMenuButtonProps {
    ButtonElement: FC<{
        onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    }>;
    children?: ReactNode;
    closeOnSelect?: boolean | undefined;
    size?: 'medium' | 'small';
    anchorOrigin?: {
        vertical: 'top' | 'center' | 'bottom';
        horizontal: 'left' | 'center' | 'right';
    };
    transformOrigin?: {
        vertical: 'top' | 'center' | 'bottom';
        horizontal: 'left' | 'center' | 'right';
    };
}
export declare function DropdownMenuButton(props: IContextMenuButtonProps): ReactElement;
