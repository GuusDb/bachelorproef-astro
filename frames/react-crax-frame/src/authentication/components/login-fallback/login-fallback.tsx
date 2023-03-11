import { Box, LinearProgress, Typography } from '@mui/material';
import { ReactElement } from 'react';

import styles from './login-fallback.scss';

export function LoginFallback(): ReactElement {
	return (
		<Box className={styles['login-fallback']}>
			<Typography variant='h3' color='primary'>
				Wait a moment while we log you in...
			</Typography>
			<LinearProgress />
		</Box>
	);
}
