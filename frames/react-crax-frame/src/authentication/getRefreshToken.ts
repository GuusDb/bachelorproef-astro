import { config } from './../config';
import { PublicClientApplication, SilentRequest } from '@azure/msal-browser';

export async function getRefreshToken(): Promise<string> {
	const { clientId, authority, tenantId, apiId } = config.auth;

	const instance = new PublicClientApplication({
		auth: {
			clientId,
			authority: `${authority}/${tenantId}`
		}
	});

	const request: SilentRequest = {
		scopes: [`openid api://${apiId}/user-impersonation`],
		account: instance.getAllAccounts()[0]
	};
	const result = await instance.acquireTokenSilent(request);

	return result.accessToken;
}
