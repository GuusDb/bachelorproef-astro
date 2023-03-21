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
import { CraxitLogo } from '../craxit-logo';

import styles from './navigation.scss';

export function Navigation(): ReactElement {
	return (
		<AppBar position='sticky' className={styles.navigation}>
			<Toolbar className={styles['navigation-toolbar']}>
				<Box className={styles['logo-container']}>
					<CraxitLogo className={styles.logo} />
					<Typography variant='h6'>CraxIt</Typography>
				</Box>
				<Box className={styles['link-container']}>
					<MenuItem component={Link} to='/shared'>
						shared
					</MenuItem>
					<MenuItem component={Link} to='/button'>
						Hardware
					</MenuItem>
					<MenuItem component={Link} to='/table'>
						Contracts
					</MenuItem>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
