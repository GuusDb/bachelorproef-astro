import { Menu } from '@mui/material';
import { FC, MouseEvent, ReactElement, ReactNode, useState } from 'react';
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

export function DropdownMenuButton(
	props: IContextMenuButtonProps
): ReactElement {
	const {
		ButtonElement,
		children,
		closeOnSelect,
		anchorOrigin,
		transformOrigin
	} = props;
	const [anchor, setAnchor] = useState<HTMLElement>();
	const [open, setOpen] = useState<boolean>(false);

	function handleClick(event: MouseEvent<HTMLButtonElement>): void {
		event.stopPropagation();
		setAnchor(event.currentTarget);
		setOpen(!open);
	}

	function handleMenuClick(event: MouseEvent<HTMLElement>): void {
		event.stopPropagation();
		if (closeOnSelect) {
			handleClose();
			setOpen(false);
		}
	}

	function handleClose(): void {
		setAnchor(undefined);
	}

	return (
		<>
			<ButtonElement onClick={handleClick} />
			<Menu
				open={Boolean(anchor)}
				anchorEl={anchor}
				anchorOrigin={anchorOrigin}
				transformOrigin={transformOrigin}
				onClick={handleMenuClick}
				onClose={handleClose}
			>
				{children}
			</Menu>
		</>
	);
}
