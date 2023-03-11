import { config } from '../../config';
import {
	AccountInfo,
	AuthenticationResult,
	IPublicClientApplication
} from '@azure/msal-browser';
import create from 'zustand';

export type AuthState = {
	instance?: IPublicClientApplication;
	account?: AccountInfo;
	setInstance: (instance: IPublicClientApplication) => void;
	setAccount: (account?: AccountInfo) => void;
};

export const useAuth = create<AuthState>((set) => ({
	setInstance: (instance: IPublicClientApplication) =>
		set(() => {
			const account: AccountInfo | null = instance.getActiveAccount();

			return {
				instance,
				account: account !== null ? account : undefined
			};
		}),
	setAccount: (account?: AccountInfo) => set(() => ({ account }))
}));
