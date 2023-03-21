import { ReactElement, ReactNode } from 'react';
export declare type AuthProviderProps = {
    children?: ReactNode;
    redirectUri: string;
};
export declare function AuthProvider(props: AuthProviderProps): ReactElement;
