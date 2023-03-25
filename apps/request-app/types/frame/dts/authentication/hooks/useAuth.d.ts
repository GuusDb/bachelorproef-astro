import { AccountInfo, IPublicClientApplication } from '@azure/msal-browser';
export declare type AuthState = {
    instance?: IPublicClientApplication;
    account?: AccountInfo;
    setInstance: (instance: IPublicClientApplication) => void;
    login: (redirectUri: string) => Promise<void>;
};
export declare const useAuth: import("zustand").UseBoundStore<import("zustand").StoreApi<AuthState>>;
