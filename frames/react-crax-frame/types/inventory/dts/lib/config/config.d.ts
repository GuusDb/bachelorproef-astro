import { IAuthConfig } from "@craxit/auth-react";
export interface IConfig {
    apiUrl: string;
    auth: IAuthConfig;
    contractTemplateUrl: string;
    wordFileType: string;
    pdfFileType: string;
}
export declare let config: IConfig;
export declare function loadConfig(): Promise<void>;
