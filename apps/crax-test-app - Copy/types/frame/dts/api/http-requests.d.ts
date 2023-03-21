import { AxiosInstance } from 'axios';
export declare const baseUrl: string;
export declare const httpClient: AxiosInstance;
export declare function get<T>(url: string): Promise<T>;
