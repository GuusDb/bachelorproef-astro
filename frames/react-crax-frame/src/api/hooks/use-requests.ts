import { useQuery, UseQueryResult } from 'react-query';
import { get } from '../http-requests';

export function useGet<T>(
	key: string | string[],
	url: string
): UseQueryResult<T> {
	return useQuery<T>(key, () => get<T>(url));
}
