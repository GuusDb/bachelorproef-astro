import { useMemo } from 'react';
import { useAuth } from './use-auth';

export function useIsAuthenticated(): boolean {
	const { account } = useAuth();

	const isAuthenticated: boolean = useMemo<boolean>(() => {
		return account !== undefined;
	}, [account]);

	return isAuthenticated;
}
