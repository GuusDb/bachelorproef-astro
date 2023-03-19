import axios, { AxiosInstance } from 'axios';

export const baseUrl: string = 'https://fakestoreapi.com/products';

export const httpClient: AxiosInstance = axios.create({
	baseURL: baseUrl
});

export async function get<T>(url: string): Promise<T> {
	return await (
		await httpClient.get<T>(url)
	).data;
}

