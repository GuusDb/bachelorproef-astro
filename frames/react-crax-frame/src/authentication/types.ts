export type AuthConfig = {
	clientId: string;
	authority: string;
	tenantId: string;
	redirectUri?: string;
	apiId?: string;
	groups: SecurityGroups;
	debugLogs?: boolean;
};

export type SecurityGroups = {
	[key: string]: string;
};
