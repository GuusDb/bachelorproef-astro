import { AuthConfig } from './authentication/types';

export type Config = {
	auth: AuthConfig;
};

export const config: Config = {
	auth: {
		clientId: '3c045e31-f04a-45f3-a4cb-46c1934705a3',
		tenantId: '105996b7-6c19-4f0c-b358-f1568075982f',
		authority: 'https://login.microsoftonline.com',
		redirectUri: 'http://localhost:4000/',
		apiId: 'ba93e981-5a0d-4a52-8ebb-5caab3ae057e',
		groups: {
			'562bf9fd-2e04-405d-a125-68ddf3903077': 'HR',
			'2cb1dc57-b032-4b80-b72e-41371038f0d8': 'Craxer'
		}
	}
};
