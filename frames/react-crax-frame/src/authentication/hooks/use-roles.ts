import { useAuth } from './use-auth';
import { useMemo } from 'react';
import { AuthConfig } from '../types';

export function useRoles(config: AuthConfig): string[] {
	const { account } = useAuth();

	const roles: string[] = useMemo<string[]>(() => {
		if (!account) return [];

		const groupIds: string[] | undefined = account.idTokenClaims
			? (account.idTokenClaims as { groups: string[] }).groups
			: undefined;

		if (!groupIds || groupIds.length === 0) return [];

		return groupIds
			.map((groupId: string) => config.groups[groupId])
			.filter((role: string) => role !== undefined);
	}, [account]);

	return roles;
}
