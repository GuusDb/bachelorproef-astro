export declare type AuthConfig = {
    clientId: string;
    authority: string;
    tenantId: string;
    redirectUri?: string;
    apiId?: string;
    groups: SecurityGroups;
    debugLogs?: boolean;
};
export declare type SecurityGroups = {
    [key: string]: string;
};
