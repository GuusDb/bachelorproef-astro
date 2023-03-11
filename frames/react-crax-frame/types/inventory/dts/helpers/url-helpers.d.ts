/// <reference types="node" />
import { ParsedUrlQuery } from "querystring";
export declare function parsedUrlToSearchParams(query: ParsedUrlQuery): URLSearchParams;
export declare function searchParamsToParsedUrl(searchParams: URLSearchParams): ParsedUrlQuery;
