import { ReactElement, ReactNode, useEffect, useMemo } from 'react';
import { MsalProvider } from '@azure/msal-react';
import {
	AuthenticationResult,
	PublicClientApplication
} from '@azure/msal-browser';
import { LoginFallback } from './login-fallback/login-fallback';
import { config } from '../../config';
import { useAuth } from '../hooks/use-auth';
import { useIsAuthenticated } from '../hooks/use-is-authenticated';

export type AuthProviderProps = {
	children?: ReactNode;
	redirectUri: string;
};

export function AuthProvider(props: AuthProviderProps): ReactElement {
	const { children, redirectUri } = props;
	const {
		auth: { clientId, authority, tenantId }
	} = config;
	const { setInstance } = useAuth();

	const instance: PublicClientApplication =
		useMemo<PublicClientApplication>(() => {
			return new PublicClientApplication({
				auth: {
					clientId: clientId,
					authority: `${authority}/${tenantId}`
				}
			});
		}, [config]);

	useEffect(() => {
		setInstance(instance);

		instance.getActiveAccount();
	}, [instance]);

	return (
		<MsalProvider instance={instance}>
			<LoginWrapper redirectUri={redirectUri}>{children}</LoginWrapper>
		</MsalProvider>
	);
}

function LoginWrapper(props: AuthProviderProps): ReactElement {
	const { children, redirectUri } = props;
	const {
		auth: { apiId }
	} = config;
	const { instance, setAccount } = useAuth();
	const isAuthenticated: boolean = useIsAuthenticated();

	useEffect(() => {
		if (!instance) return;
		if (!isAuthenticated) login();
	}, [isAuthenticated, instance]);

	async function login(): Promise<void> {
		if (!instance) return;

		const result: AuthenticationResult = await instance.loginPopup({
			scopes: [`openid api://${apiId}/user-impersonation`],
			redirectUri
		});

		setAccount(result.account !== null ? result.account : undefined);
	}

	return isAuthenticated ? <>{children}</> : <LoginFallback />;
}
