import {
	AppBar,
	Box,
	Button,
	MenuItem,
	Toolbar,
	Typography
} from '@mui/material';
import { ReactElement, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { LogoutButton } from '../../authentication/components/logout-button';
import { CraxitLogo } from '../craxit-logo';
import { DropdownMenuButton } from '../dropdown-menu-button';

import styles from './navigation.scss';

function InventoryButton(props: {
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}): ReactElement {
	const { onClick } = props;
	return (
		<Button variant='contained' disableElevation onClick={onClick}>
			Inventory
		</Button>
	);
}

export function Navigation(): ReactElement {
	return (
		<AppBar position='sticky' className={styles.navigation}>
			<Toolbar className={styles['navigation-toolbar']}>
				<Box className={styles['logo-container']}>
					<CraxitLogo className={styles.logo} />
					<Typography variant='h6'>CraxIt</Typography>
				</Box>
				<Box className={styles['link-container']}>
					<DropdownMenuButton
						ButtonElement={InventoryButton}
						anchorOrigin={{
							horizontal: 'center',
							vertical: 'bottom'
						}}
						transformOrigin={{
							horizontal: 'center',
							vertical: 'top'
						}}
					>
						<MenuItem component={Link} to='/inventory/categories'>
							Categories
						</MenuItem>
						<MenuItem component={Link} to='/inventory/hardware'>
							Hardware
						</MenuItem>
						<MenuItem component={Link} to='/inventory/contracts'>
							Contracts
						</MenuItem>
					</DropdownMenuButton>
				</Box>
				<LogoutButton />
			</Toolbar>
		</AppBar>
	);
}
