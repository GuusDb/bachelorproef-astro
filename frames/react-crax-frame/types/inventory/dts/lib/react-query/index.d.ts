import { QueryClient, QueryFunctionContext } from "react-query";
export declare const fetchData: <TData, TVariables>(query: string, variables?: TVariables) => (queryContext?: QueryFunctionContext) => Promise<TData>;
export declare const queryClient: QueryClient;
