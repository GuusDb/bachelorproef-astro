import { ReactElement } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AuthProvider } from './authentication/components/auth-provider';
import { theme } from './theme-override';
import { Navigation, PageContainer } from './components';
import { BrowserRouter } from 'react-router-dom';
import { config } from './config';

import './app.scss';
import { Button } from 'test/Button';

export function App(): ReactElement {
	return (
		//<AuthProvider redirectUri={config.auth.redirectUri!}>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<PageContainer>
					<Navigation />
					<Button />
				</PageContainer>
			</ThemeProvider>
		</BrowserRouter>
		//</AuthProvider>
	);
}
