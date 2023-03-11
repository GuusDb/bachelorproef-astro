import PizZip from "pizzip";
import { Hardware, User } from "../graphql/generated";
export declare const DEFAULT_SELECT_VALUE = "";
export declare function base64ToBlob(base64: string, mimeType: string): Promise<Blob>;
export declare function unzip(blob: Blob): Promise<PizZip>;
export declare function generateContract(user: User, hardware: Hardware): Promise<Blob | undefined>;
export declare function openPdfDocument(data: string): Promise<void>;
