import { AccountInfo } from '@azure/msal-browser';
import { useMsal } from '@azure/msal-react';
import { Box, Typography } from '@mui/material';
import { ReactElement } from 'react';
import { LogoutButton } from './authentication/components/logout-button';

export function Test(): ReactElement {
	const { accounts } = useMsal();
	const account: AccountInfo = accounts[0]!;
	return (
		<Box display='flex'>
			<Typography>{account.username}</Typography>
			<LogoutButton />
		</Box>
	);
}
