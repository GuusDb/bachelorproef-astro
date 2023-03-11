import { Button } from '@mui/material';
import { ReactElement } from 'react';
import Logout from '@mui/icons-material/Logout';
import { useMsal } from '@azure/msal-react';

export function LogoutButton(): ReactElement {
	const { instance } = useMsal();

	function logout(): void {
		instance.logout();
	}

	return (
		<Button variant='contained' onClick={logout} startIcon={<Logout />}>
			Logout
		</Button>
	);
}
