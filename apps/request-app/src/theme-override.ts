import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		text: {
			primary: '#2D444E',
			secondary: '#F7FDFE'
		},
		background: {
			default: '#F7FDFE',
			paper: '#F7FDFE'
		},
		primary: {
			main: '#2D444E',
			light: '#304F5B',
			dark: '#032432',
			contrastText: '#F7FDFE'
		},
		secondary: {
			main: '#4BBBBC',
			light: '#8CCBCC',
			dark: '#349495',
			contrastText: '#2D444E'
		}
	}
});
